#!/usr/bin/env node
/**
 * Fix mojibake + over-escaped apostrophes across every public.artists row.
 *
 * The seed data in 026/027/030/031/033/034/040/043/046/049 has clean
 * em-dashes and accented Latin letters in source. Somewhere in the
 * load pipeline UTF-8 bytes for those characters were interpreted as
 * Mac Roman and then re-encoded, producing visible junk like:
 *
 *     Fra Angelico ‚Äî born Guido di Pietro …
 *     St√§del …
 *     Encyclop√¶dia Britannica …
 *
 * Plus a separate bug: dollar-quoted SQL bodies don't need single-quote
 * doubling, but several seed migrations wrote `Amsterdam''s`, leaving
 * literal `''` in the data.
 *
 * This script reads every artist row, applies both fixes in JavaScript,
 * and writes the row back via the service-role JS client. PostgREST
 * doesn't expose raw SQL, so the equivalent of migration 052 is
 * re-implemented here as data-only updates.
 *
 * Usage:
 *   node --env-file=.env.local scripts/fix-artist-mojibake.mjs [--dry-run]
 */
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } },
);

const DRY_RUN = process.argv.includes('--dry-run');

// UTF-8-as-Mac-Roman mojibake → original character.
// Order matters: do the 3-byte E2 80 XX sequences (smart quotes, dashes,
// ellipsis, bullet) BEFORE the 2-byte C3 XX Latin-1 sequences, so the
// shared "√" prefix can't pick up part of an unrelated string.
const REPLACEMENTS = [
  ['‚Äî', '—'],     // E2 80 94  em dash
  ['‚Äì', '–'],     // E2 80 93  en dash
  ['‚Äô', "'"],     // E2 80 99  right single quote → apostrophe
  ['‚Äò', "'"],     // E2 80 98  left single quote  → apostrophe
  ['‚Äú', '"'],     // E2 80 9C  left double quote  → ASCII quote
  ['‚Äù', '"'],     // E2 80 9D  right double quote → ASCII quote
  ['‚Ä¶', '…'],     // E2 80 A6  ellipsis
  ['‚Ä¢', '•'],     // E2 80 A2  bullet
  ['√†', 'à'],
  ['√°', 'á'],
  ['√¢', 'â'],
  ['√£', 'ã'],
  ['√§', 'ä'],
  ['√•', 'å'],
  ['√¶', 'æ'],
  ['√ß', 'ç'],
  ['√®', 'è'],
  ['√©', 'é'],
  ['√™', 'ê'],
  ['√´', 'ë'],
  ['√≠', 'í'],
  ['√Æ', 'î'],
  ['√Ø', 'ï'],
  ['√±', 'ñ'],
  ['√≤', 'ò'],
  ['√≥', 'ó'],
  ['√¥', 'ô'],
  ['√µ', 'õ'],
  ['√∂', 'ö'],
  ['√∏', 'ø'],
  ['√π', 'ù'],
  ['√∫', 'ú'],
  ['√ª', 'û'],
  ['√º', 'ü'],
  ['√Ω', 'ý'],
  ['√Ä', 'À'],
  ['√Å', 'Á'],
  ['√â', 'É'],
  ['√ç', 'Í'],
  ['√ë', 'Ñ'],
  ['√ñ', 'Ö'],
  ['√ò', 'Ø'],
  ['√ô', 'Ù'],
  ['√ú', 'Ü'],
];

/** Apply mojibake fixes + collapse `''` (SQL-escape leakage) → `'`. */
function fixText(value) {
  if (value == null) return value;
  let out = String(value);
  for (const [bad, good] of REPLACEMENTS) {
    if (out.indexOf(bad) !== -1) out = out.split(bad).join(good);
  }
  if (out.indexOf("''") !== -1) out = out.split("''").join("'");
  return out;
}

/** Recursively walk a JSONB value and apply fixText() to every string leaf. */
function fixJson(node) {
  if (node == null) return node;
  if (typeof node === 'string') return fixText(node);
  if (Array.isArray(node)) return node.map(fixJson);
  if (typeof node === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(node)) out[k] = fixJson(v);
    return out;
  }
  return node;
}

function changedOrNull(before, after) {
  if (before == null && after == null) return false;
  if (before == null || after == null) return true;
  if (typeof before === 'object') {
    return JSON.stringify(before) !== JSON.stringify(after);
  }
  return before !== after;
}

async function fetchAllArtists() {
  // PostgREST caps a single response at 1000 rows; paginate explicitly.
  const PAGE = 1000;
  const out = [];
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await sb
      .from('artists')
      .select('id, slug, name, nationality, bio, bio_long, bio_sources, notable_works')
      .order('id', { ascending: true })
      .range(from, from + PAGE - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    out.push(...data);
    if (data.length < PAGE) break;
  }
  return out;
}

async function main() {
  let rows;
  try {
    rows = await fetchAllArtists();
  } catch (e) {
    console.error('fetch failed:', e.message);
    process.exit(1);
  }

  let scanned = 0;
  let changed = 0;
  let fieldChanges = 0;

  for (const r of rows) {
    scanned++;
    const next = {
      name: fixText(r.name),
      nationality: fixText(r.nationality),
      bio: fixText(r.bio),
      bio_long: fixText(r.bio_long),
      bio_sources: fixJson(r.bio_sources),
      notable_works: fixJson(r.notable_works),
    };

    const patch = {};
    for (const k of Object.keys(next)) {
      if (changedOrNull(r[k], next[k])) {
        patch[k] = next[k];
        fieldChanges++;
      }
    }

    if (Object.keys(patch).length === 0) continue;
    changed++;

    if (DRY_RUN) {
      console.log(`[dry] ${r.slug}: ${Object.keys(patch).join(', ')}`);
      continue;
    }

    const { error: upErr } = await sb
      .from('artists')
      .update(patch)
      .eq('id', r.id);

    if (upErr) {
      console.error(`✗ ${r.slug}: ${upErr.message}`);
      continue;
    }
    console.log(`✓ ${r.slug} (${Object.keys(patch).join(', ')})`);
  }

  console.log(
    `\n${DRY_RUN ? '[dry-run] ' : ''}scanned ${scanned} artists; ${changed} updated; ${fieldChanges} columns changed.`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
