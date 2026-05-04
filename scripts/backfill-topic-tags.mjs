/**
 * One-shot backfill for the topic-tag system.
 *
 * Reads every plate from src/data/art/*.ts that has a `topicTags` array,
 * and writes those tags into the live `artworks.tags` column with the
 * `topic:` prefix. Preserves any existing non-topic tags
 * (e.g. `manuscript-page`) by reading current state first and merging.
 *
 * Run once after deploying the topic-tag system; the artwork-ingester is
 * already updated to propagate topicTags on subsequent ingests, so this
 * script is only for the existing inventory.
 *
 *   $ SUPABASE_SERVICE_ROLE_KEY=… node scripts/backfill-topic-tags.mjs
 *   $ SUPABASE_SERVICE_ROLE_KEY=… node scripts/backfill-topic-tags.mjs --dry-run
 *
 * Idempotent — running twice is safe; second run no-ops every row.
 */

import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ART_DIR = resolve(__dirname, '..', 'src', 'data', 'art');

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uqcgieillyvefzmohzpn.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const DRY_RUN = process.argv.includes('--dry-run');

if (!SUPABASE_SERVICE_KEY && !DRY_RUN) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var (or pass --dry-run).');
  process.exit(1);
}

// ─── Parse catalog plates ──────────────────────────────────────────────

/**
 * Extract plate records from a catalog file. Returns an array of
 * { source, externalId, topicTags }.
 *
 * The TS catalogs are object-literal arrays — we don't bother running a
 * full TS parser; instead we walk each balanced `{...}` block and pull
 * out the four fields we need with focused regexes. Robust to varied
 * field ordering across the 23 catalogs.
 */
function parseCatalog(filePath, sourceSlug) {
  const txt = readFileSync(filePath, 'utf8');
  const out = [];
  // Two flavors:
  //   • TS-style: { externalId: 'foo', ..., topicTags: ['a','b'] }
  //   • JSON-style (met.ts): {"externalId":"foo",...,"topicTags":["a","b"]}
  // Walk balanced braces.
  let i = 0;
  while (i < txt.length) {
    const open = txt.indexOf('{', i);
    if (open === -1) break;
    let depth = 1, j = open + 1;
    while (j < txt.length && depth > 0) {
      if (txt[j] === '{') depth++;
      else if (txt[j] === '}') depth--;
      j++;
    }
    if (depth !== 0) break;
    const body = txt.slice(open, j);
    const ext = body.match(/(?:"externalId"|externalId)\s*:\s*['"]([^'"]+)['"]/);
    const tags = body.match(/(?:"topicTags"|topicTags)\s*:\s*\[([^\]]*)\]/);
    if (ext && tags) {
      const parsed = Array.from(tags[1].matchAll(/['"]([a-z\-]+)['"]/g)).map((m) => m[1]);
      if (parsed.length) {
        out.push({ source: sourceSlug, externalId: ext[1], topicTags: parsed });
      }
    }
    i = j;
  }
  return out;
}

function loadAllCatalogs() {
  const all = [];
  for (const f of readdirSync(ART_DIR)) {
    if (!f.endsWith('.ts') || f === 'topics.ts') continue;
    const slug = f.slice(0, -3);
    all.push(...parseCatalog(resolve(ART_DIR, f), slug));
  }
  return all;
}

// ─── Supabase REST primitives ──────────────────────────────────────────

async function sbSelect(path) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: {
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
    },
  });
  if (!res.ok) throw new Error(`Select ${path} → ${res.status}: ${await res.text()}`);
  return res.json();
}

async function sbPatch(path, body) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Patch ${path} → ${res.status}: ${await res.text()}`);
}

// ─── Main ──────────────────────────────────────────────────────────────

const plates = loadAllCatalogs();
console.log(`Loaded ${plates.length} plates with topicTags from catalogs.`);

// Group by source so we can fetch existing rows efficiently per source.
const bySource = new Map();
for (const p of plates) {
  if (!bySource.has(p.source)) bySource.set(p.source, []);
  bySource.get(p.source).push(p);
}

let totalUpdated = 0;
let totalSkipped = 0;

for (const [source, list] of bySource.entries()) {
  console.log(`\n→ ${source}: ${list.length} plates`);
  if (DRY_RUN) continue;

  // Page through external_ids — Supabase has a query-string length cap.
  const PAGE = 80;
  for (let i = 0; i < list.length; i += PAGE) {
    const slice = list.slice(i, i + PAGE);
    const ids = slice.map((p) => encodeURIComponent(p.externalId)).join(',');
    const existing = await sbSelect(
      `artworks?select=id,external_id,tags&source=eq.${encodeURIComponent(source)}` +
        `&external_id=in.(${ids})`,
    );
    const byExt = new Map(existing.map((r) => [r.external_id, r]));

    const updates = [];
    for (const p of slice) {
      const row = byExt.get(p.externalId);
      if (!row) {
        totalSkipped++;
        continue;
      }
      const desiredTopic = p.topicTags.map((t) => `topic:${t}`);
      const existingTags = Array.isArray(row.tags) ? row.tags : [];
      // Strip any existing topic: tags first so we end up with exactly
      // the catalog's intended set (idempotent on re-run).
      const nonTopic = existingTags.filter((t) => !t.startsWith('topic:'));
      const merged = [...nonTopic, ...desiredTopic];
      // Skip rows whose tags already match exactly — no-op.
      const same =
        merged.length === existingTags.length &&
        merged.every((t) => existingTags.includes(t));
      if (same) continue;
      updates.push({ id: row.id, tags: merged });
    }

    for (const u of updates) {
      await sbPatch(
        `artworks?id=eq.${encodeURIComponent(u.id)}`,
        { tags: u.tags },
      );
      totalUpdated++;
    }
    process.stdout.write(`  [${Math.min(i + PAGE, list.length)}/${list.length}]\r`);
  }
  process.stdout.write('\n');
}

console.log(
  `\nDone. updated=${totalUpdated} skipped=${totalSkipped} (no DB row found)`,
);
