#!/usr/bin/env node
/**
 * Backfill `wikidata_id` (Q-number) on every artist row that has a bio
 * (`bio_long is not null`) but no `wikidata_id` yet.
 *
 * Why: the artist hub page (src/app/art/artist/[slug]/page.tsx) emits a
 * `Person` JSON-LD object whose `sameAs` array points to the Wikidata
 * entity. With `wikidata_id` populated, Google's Knowledge Graph can
 * link the page to the canonical artist entity, which strengthens the
 * entire Person/sameAs signal — exactly the SEO unlock the rollout doc
 * (docs/artist-pages-rollout.md) flagged as "intentionally not yet done".
 *
 * Resolution strategy (deliberately conservative — wrong attribution is
 * worse than no attribution):
 *   1. Hit Wikidata's `wbsearchentities` API with the artist's display
 *      name (and, for parenthesized names like "Botticelli (Alessandro
 *      di Mariano Filipepi)", with the inner alternative name as well).
 *   2. For each candidate Q-ID, fetch the entity claims via
 *      `wbgetentities` and require ALL of:
 *        - `instance of` (P31) includes `human` (Q5)
 *        - `occupation` (P106) intersects an art-occupation set
 *          (painter, printmaker, draftsperson, illustrator, sculptor,
 *          engraver, etc.)
 *        - `date of birth` (P569) year is within ±5 years of the row's
 *          `birth_year` (when both are available — if either side is
 *          null, the year check is skipped and we fall back to the
 *          occupation check alone)
 *   3. Use the first candidate that passes. Skip the row entirely if
 *      none does and emit a `-- skip <slug>: <reason>` comment in the
 *      output so the operator can review.
 *
 * Output: SQL UPDATE statements written to stdout, suitable for paste
 * into the Supabase SQL editor or save as a migration file.
 *
 * Usage:
 *   node --env-file=.env.local scripts/backfill-wikidata-ids.mjs \
 *     > supabase/migrations/035_artist_wikidata_ids.sql
 *
 *   # or just dry-print to terminal
 *   node --env-file=.env.local scripts/backfill-wikidata-ids.mjs --dry-run
 */
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } },
);

const DRY_RUN = process.argv.includes('--dry-run');

// Q-IDs of art-related occupations. Wikidata uses several overlapping
// occupation IDs (painter, drawer, illustrator, engraver, etc.) — we
// accept any of them as evidence the candidate is an artist.
const ART_OCCUPATIONS = new Set([
  'Q1028181', // painter
  'Q15296811', // drawer / draftsperson
  'Q644687', // illustrator
  'Q644687', // illustrator (dup ok)
  'Q21550646', // sculptor
  'Q1281618', // engraver
  'Q1925963', // printmaker
  'Q42973', // artist (generic)
  'Q1925963', // printmaker
  'Q1599081', // architect (Vasari, Verrocchio also worked as architects)
  'Q3621491', // sculptor (variant)
  'Q189290', // mathematician (some Renaissance polymaths)
  'Q11569986', // visual artist
  'Q644687', // illustrator
  'Q1281618', // engraver
  'Q15877315', // monk (Fra Angelico, Fra Filippo Lippi — sometimes only this)
  'Q188094', // poet (William Blake)
]);

// Birth-year tolerance, in years. Wikipedia and our DB sometimes
// disagree by a year or two on Renaissance artists; ±5 is comfortable.
const YEAR_TOLERANCE = 5;

async function wbsearch(name) {
  const u = new URL('https://www.wikidata.org/w/api.php');
  u.searchParams.set('action', 'wbsearchentities');
  u.searchParams.set('search', name);
  u.searchParams.set('language', 'en');
  u.searchParams.set('format', 'json');
  u.searchParams.set('limit', '10');
  const r = await fetch(u, { headers: { 'User-Agent': 'learnofchrist.com wikidata-backfill (admin@learnofchrist.com)' } });
  if (!r.ok) throw new Error(`wbsearch ${r.status} for ${name}`);
  const j = await r.json();
  return j.search ?? [];
}

async function wbget(qids) {
  if (qids.length === 0) return {};
  const u = new URL('https://www.wikidata.org/w/api.php');
  u.searchParams.set('action', 'wbgetentities');
  u.searchParams.set('ids', qids.join('|'));
  u.searchParams.set('props', 'claims');
  u.searchParams.set('format', 'json');
  const r = await fetch(u, { headers: { 'User-Agent': 'learnofchrist.com wikidata-backfill (admin@learnofchrist.com)' } });
  if (!r.ok) throw new Error(`wbget ${r.status} for ${qids.join(',')}`);
  const j = await r.json();
  return j.entities ?? {};
}

function claimQids(entity, prop) {
  const claims = entity?.claims?.[prop];
  if (!claims) return [];
  return claims
    .map((c) => c.mainsnak?.datavalue?.value?.id)
    .filter(Boolean);
}

function claimDateYear(entity, prop) {
  const claims = entity?.claims?.[prop];
  if (!claims) return null;
  for (const c of claims) {
    const t = c.mainsnak?.datavalue?.value?.time;
    if (!t) continue;
    // Wikidata times look like "+1471-05-21T00:00:00Z" or "-0500-..."
    const m = t.match(/^([+-]?)(\d+)-/);
    if (!m) continue;
    const yr = parseInt(m[2], 10) * (m[1] === '-' ? -1 : 1);
    return yr;
  }
  return null;
}

function isHuman(entity) {
  return claimQids(entity, 'P31').includes('Q5');
}

function isArtOccupation(entity) {
  const occs = claimQids(entity, 'P106');
  return occs.some((q) => ART_OCCUPATIONS.has(q));
}

function birthYearMatches(entity, dbYear) {
  if (!dbYear) return true; // can't check, give benefit of doubt
  const wbYear = claimDateYear(entity, 'P569');
  if (wbYear == null) return true; // wikidata lacks birth date — skip check
  return Math.abs(wbYear - dbYear) <= YEAR_TOLERANCE;
}

function searchNames(name) {
  // For names like "Botticelli (Alessandro di Mariano Filipepi)" try:
  //   "Botticelli", "Alessandro di Mariano Filipepi", and the full string.
  const out = new Set();
  out.add(name);
  const parenMatch = name.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
  if (parenMatch) {
    out.add(parenMatch[1].trim());
    out.add(parenMatch[2].trim());
  }
  // For "called" patterns: "Hans Baldung (called Hans Baldung Grien)"
  if (parenMatch && /^called\s+/i.test(parenMatch[2])) {
    out.add(parenMatch[2].replace(/^called\s+/i, '').trim());
  }
  return [...out];
}

async function resolveOne(name, birthYear, deathYear) {
  const seen = new Set();
  const reasons = [];
  for (const search of searchNames(name)) {
    let candidates;
    try {
      candidates = await wbsearch(search);
    } catch (e) {
      reasons.push(`wbsearch err for "${search}": ${e.message}`);
      continue;
    }
    if (candidates.length === 0) {
      reasons.push(`no candidates for "${search}"`);
      continue;
    }
    const qids = candidates.map((c) => c.id).filter((q) => !seen.has(q));
    qids.forEach((q) => seen.add(q));
    if (qids.length === 0) continue;
    let entities;
    try {
      entities = await wbget(qids);
    } catch (e) {
      reasons.push(`wbget err: ${e.message}`);
      continue;
    }
    for (const c of candidates) {
      const e = entities[c.id];
      if (!e) continue;
      if (!isHuman(e)) {
        reasons.push(`${c.id} not human (${c.label})`);
        continue;
      }
      if (!isArtOccupation(e)) {
        reasons.push(`${c.id} not art occupation (${c.label})`);
        continue;
      }
      if (!birthYearMatches(e, birthYear)) {
        const wbYr = claimDateYear(e, 'P569');
        reasons.push(`${c.id} birth-year mismatch: db=${birthYear} wd=${wbYr}`);
        continue;
      }
      return { qid: c.id, label: c.label, description: c.description, reasons };
    }
  }
  return { qid: null, reasons };
}

async function main() {
  const { data, error } = await sb
    .from('artists')
    .select('id, slug, name, birth_year, death_year, bio_long, wikidata_id')
    .not('bio_long', 'is', null)
    .is('wikidata_id', null);
  if (error) {
    console.error(`Supabase fetch error: ${error.message}`);
    process.exit(1);
  }
  const rows = data.filter((r) => (r.bio_long ?? '').length >= 200);

  // Group rows by (canonical_name, birth_year, death_year) — the same
  // historical artist may have multiple slugs (e.g., Botticelli has 3).
  const groups = new Map();
  for (const r of rows) {
    const key = `${r.name}|${r.birth_year ?? ''}|${r.death_year ?? ''}`;
    if (!groups.has(key)) groups.set(key, { name: r.name, birth_year: r.birth_year, death_year: r.death_year, rows: [] });
    groups.get(key).rows.push(r);
  }

  // Print SQL header
  process.stdout.write(`-- Wikidata Q-IDs for bio'd artists.\n`);
  process.stdout.write(`-- Generated by scripts/backfill-wikidata-ids.mjs.\n`);
  process.stdout.write(`-- Each Q-ID was selected by:\n`);
  process.stdout.write(`--   * Wikidata wbsearchentities lookup on the display name.\n`);
  process.stdout.write(`--   * wbgetentities verification of:\n`);
  process.stdout.write(`--       - instance_of includes human (Q5)\n`);
  process.stdout.write(`--       - occupation includes a recognized art occupation\n`);
  process.stdout.write(`--       - date_of_birth year is within ±${YEAR_TOLERANCE} of our row\n`);
  process.stdout.write(`-- Rows with no confident match are emitted as comments.\n`);
  process.stdout.write(`\n`);

  let resolved = 0;
  let skipped = 0;
  const sorted = [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  for (const [, group] of sorted) {
    const slugList = group.rows.map((r) => r.slug);
    const { qid, label, description, reasons } = await resolveOne(group.name, group.birth_year, group.death_year);
    if (qid) {
      const sluglit = slugList.map((s) => `'${s.replace(/'/g, "''")}'`).join(', ');
      process.stdout.write(`-- ${group.name} (${group.birth_year ?? '?'}–${group.death_year ?? '?'})  →  ${qid}  ${description ?? ''}\n`);
      process.stdout.write(`update public.artists set wikidata_id = '${qid}' where slug in (${sluglit});\n\n`);
      resolved++;
    } else {
      const sluglit = slugList.map((s) => `'${s}'`).join(', ');
      process.stdout.write(`-- skip  ${group.name} (${group.birth_year ?? '?'}–${group.death_year ?? '?'})  slugs=${sluglit}\n`);
      for (const r of reasons.slice(0, 3)) process.stdout.write(`--   ${r}\n`);
      process.stdout.write(`\n`);
      skipped++;
    }
    // Wikidata rate-limit politeness — ~3 req/sec sustained
    await new Promise((res) => setTimeout(res, 150));
  }

  process.stderr.write(`\nresolved: ${resolved}   skipped: ${skipped}\n`);
  if (DRY_RUN) process.stderr.write(`(dry run — no DB writes; SQL printed to stdout)\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
