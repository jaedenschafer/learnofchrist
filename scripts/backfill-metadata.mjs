#!/usr/bin/env node
/**
 * Backfill metadata columns added in migration 028:
 *   • era                   — derived from artwork.year via ERA_RANGES
 *   • biblical_character[]  — inferred from title (+ description) via aliases
 *   • biblical_theme[]      — same path
 *   • tags[]                — populated only if explicit alias hit
 *
 * Idempotent — only updates rows where the inferred value differs from the
 * stored one. Safe to re-run after migrating; safe to re-run after
 * curating biblicalTags.ts.
 *
 * Notes:
 *   • This script intentionally does NOT touch artist_name_cached or
 *     scripture_ref_count — those are maintained by triggers in 028.
 *   • Conservative: misclassifications would clutter the filter UI, so
 *     we only tag on alias hits, not on partial fuzzy matches.
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=... node scripts/backfill-metadata.mjs
 *   SUPABASE_SERVICE_ROLE_KEY=... node scripts/backfill-metadata.mjs --dry-run
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uqcgieillyvefzmohzpn.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_SERVICE_KEY) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var');
  process.exit(1);
}

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');

// ── era ranges (mirror ERAS in src/lib/biblicalTags.ts) ──

const ERA_RANGES = [
  { key: 'early-christian', max: 500 },
  { key: 'byzantine',       min: 500,  max: 1300 },
  { key: 'medieval',        min: 1300, max: 1500 },
  { key: 'renaissance',     min: 1500, max: 1600 },
  { key: 'baroque',         min: 1600, max: 1750 },
  { key: 'modern',          min: 1750, max: 1900 },
  { key: 'contemporary',    min: 1900 },
];

function eraForYear(year) {
  if (year == null) return null;
  for (const era of ERA_RANGES) {
    if (era.min != null && year < era.min) continue;
    if (era.max != null && year >= era.max) continue;
    return era.key;
  }
  return null;
}

// ── Character & theme aliases (mirror src/lib/biblicalTags.ts) ──

const CHARACTERS = [
  ['jesus',          ['jesus', 'christ', 'lord', 'good shepherd']],
  ['mary',           ['virgin mary', 'madonna', 'theotokos', 'blessed virgin']],
  ['john_baptist',   ['john the baptist', 'baptist']],
  ['peter',          ['st peter', 'saint peter', 'simon peter', 'st. peter']],
  ['paul',           ['st paul', 'saint paul', 'paul of tarsus', 'st. paul']],
  ['moses',          ['moses']],
  ['abraham',        ['abraham']],
  ['david',          ['king david', ' david']],   // leading space avoids matching "david's"
  ['solomon',        ['king solomon', ' solomon']],
  ['noah',           ['noah']],
  ['adam',           ['adam']],
  ['eve',            [' eve']],
  ['joseph',         ['joseph']],
  ['isaac',          ['isaac']],
  ['jacob',          ['jacob', 'israel']],
  ['mary_magdalene', ['magdalene']],
  ['judas',          ['judas']],
  ['samson',         ['samson']],
  ['elijah',         ['elijah', 'elias']],
  ['job',            [' job']],
  ['jonah',          ['jonah']],
  ['daniel',         ['daniel']],
  ['esther',         ['esther']],
  ['ruth',           [' ruth']],
];

const THEMES = [
  ['creation',     ['creation', 'genesis']],
  ['fall',         ['fall of man', 'expulsion']],
  ['flood',        [' ark', 'deluge', 'flood']],
  ['exodus',       ['exodus', 'red sea', 'plagues']],
  ['nativity',     ['nativity', 'birth of christ', 'manger']],
  ['baptism',      ['baptism of christ']],
  ['sermon_mount', ['sermon on the mount']],
  ['miracles',     ['miracle', 'healing', 'raises', 'raising of']],
  ['parables',     ['parable', 'prodigal']],
  ['last_supper',  ['last supper']],
  ['passion',      ['passion', 'agony', 'gethsemane', 'arrest of jesus', 'flagellation', 'mocking']],
  ['crucifixion',  ['crucifixion', 'calvary']],
  ['resurrection', ['resurrection', 'risen']],
  ['ascension',    ['ascension']],
  ['pentecost',    ['pentecost', 'tongues of fire']],
  ['apocalypse',   ['apocalypse', 'revelation', 'last judgement', 'last judgment']],
  ['annunciation', ['annunciation']],
  ['pieta',        ['pieta', 'pietà']],
];

function inferTags(text) {
  const lower = ` ${text.toLowerCase()} `;  // pad so aliases with leading space match at start
  const characters = new Set();
  const themes = new Set();
  for (const [key, aliases] of CHARACTERS) {
    if (aliases.some((a) => lower.includes(a))) characters.add(key);
  }
  for (const [key, aliases] of THEMES) {
    if (aliases.some((a) => lower.includes(a))) themes.add(key);
  }
  return { characters: [...characters], themes: [...themes] };
}

// ── Supabase REST helpers ──

async function sbSelect(path) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: { apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}` },
  });
  if (!res.ok) throw new Error(`Select ${path} → ${res.status}: ${await res.text()}`);
  return res.json();
}

async function sbPatch(table, idCol, idVal, patch) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${idCol}=eq.${idVal}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(patch),
  });
  if (!res.ok) throw new Error(`PATCH ${table} ${idVal} → ${res.status}: ${await res.text()}`);
}

// ── Main ──

function arrEq(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  const A = [...a].sort(), B = [...b].sort();
  return A.every((v, i) => v === B[i]);
}

async function main() {
  const PAGE = 500;
  let from = 0;
  let total = 0;
  let updates = 0;

  while (true) {
    const rows = await sbSelect(
      `artworks?select=id,slug,title,description,year,era,biblical_character,biblical_theme&order=created_at.asc&limit=${PAGE}&offset=${from}`,
    );
    if (rows.length === 0) break;
    for (const row of rows) {
      total++;
      const era = eraForYear(row.year);
      const text = `${row.title || ''} ${row.description || ''}`;
      const { characters, themes } = inferTags(text);

      const patch = {};
      if (era && era !== row.era) patch.era = era;
      if (!arrEq(row.biblical_character || [], characters)) patch.biblical_character = characters;
      if (!arrEq(row.biblical_theme || [], themes)) patch.biblical_theme = themes;

      if (Object.keys(patch).length === 0) continue;
      updates++;
      const summary = Object.entries(patch).map(([k, v]) =>
        Array.isArray(v) ? `${k}=[${v.join(',')}]` : `${k}=${v}`).join(' ');
      console.log(`  ${row.slug} ← ${summary}`);
      if (!DRY_RUN) await sbPatch('artworks', 'id', row.id, patch);
    }
    from += rows.length;
    if (rows.length < PAGE) break;
  }

  console.log(`\nScanned ${total} artworks, updated ${updates}${DRY_RUN ? ' (dry-run)' : ''}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
