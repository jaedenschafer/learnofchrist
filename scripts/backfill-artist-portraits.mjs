#!/usr/bin/env node
/**
 * Backfill artist portraits from Wikipedia.
 *
 * For every artist with a `wikipedia_url` (and, fallback, `wikidata_id`),
 * fetch the lead image of that page and store the URL.
 *
 * Storage: until migration 053 (`portrait_url` column) is applied via
 * Supabase SQL editor, we store the URL inside the existing `bio_sources`
 * jsonb as a special `{ type: 'portrait', title, url }` entry. The page
 * template (src/app/art/artist/[slug]/page.tsx) extracts that entry and
 * filters it out of Further reading. Once 053 is applied, the SQL in
 * that migration migrates the JSON entries into the new column and the
 * page falls through cleanly.
 *
 * Source order:
 *   1. Wikipedia REST page-summary endpoint — uses `originalimage.source`
 *      when present, otherwise `thumbnail.source` upscaled to 600px.
 *   2. Wikidata SPARQL P18 (image) lookup — last resort when summary
 *      endpoint returns no image.
 *
 * We deliberately store the *Commons FilePath* URL (resolved through
 * commons.wikimedia.org/wiki/Special:FilePath/<file>?width=600) so the
 * URL stays stable across resolution changes and Wikipedia thumbnail
 * reshuffles.
 *
 * Usage:
 *   node --env-file=.env.local scripts/backfill-artist-portraits.mjs [--dry-run] [--limit N]
 *   node --env-file=.env.local scripts/backfill-artist-portraits.mjs --slug fra-angelico
 *   node --env-file=.env.local scripts/backfill-artist-portraits.mjs --refresh   (overwrite existing)
 */
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } },
);

const DRY = process.argv.includes('--dry-run');
const REFRESH = process.argv.includes('--refresh');
const limitIdx = process.argv.indexOf('--limit');
const LIMIT = limitIdx >= 0 ? parseInt(process.argv[limitIdx + 1], 10) : Infinity;
const slugIdx = process.argv.indexOf('--slug');
const ONLY_SLUG = slugIdx >= 0 ? process.argv[slugIdx + 1] : null;

const UA =
  'learnofchrist.com portrait-backfill (admin@learnofchrist.com)';

const COMMONS_FILEPATH = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

/** Extract Wikipedia page title from a wikipedia_url. */
function titleFromUrl(url) {
  try {
    const u = new URL(url);
    if (!u.hostname.endsWith('wikipedia.org')) return null;
    const m = u.pathname.match(/^\/wiki\/(.+)$/);
    if (!m) return null;
    return decodeURIComponent(m[1].replace(/_/g, ' '));
  } catch {
    return null;
  }
}

/** Extract a Wikidata Q-ID from any kind of URL (or return null). Many
 *  rows have `wikipedia_url` set to `https://www.wikidata.org/wiki/Q...`
 *  where the proper Wikipedia link is absent — treat those as Q-IDs. */
function qidFromUrl(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (!u.hostname.endsWith('wikidata.org')) return null;
    const m = u.pathname.match(/^\/wiki\/(Q[0-9]+)$/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

/** Pull a Wikipedia page title from a Wikidata entity (English-language
 *  sitelink). Lets us fall back from a Wikidata-only URL to the proper
 *  Wikipedia summary endpoint when the entity has an enwiki sitelink. */
async function titleFromWikidata(qid) {
  const u = `https://www.wikidata.org/wiki/Special:EntityData/${qid}.json`;
  const r = await fetch(u, { headers: { 'User-Agent': UA, accept: 'application/json' } });
  if (!r.ok) return null;
  const j = await r.json();
  return j?.entities?.[qid]?.sitelinks?.enwiki?.title ?? null;
}

/** Build a stable Commons-FilePath URL from a raw image URL or filename. */
function commonsUrl(input, width = 600) {
  if (!input) return null;
  // Already a Commons FilePath URL — re-encode at the requested width.
  if (input.includes('Special:FilePath/')) {
    const u = new URL(input);
    u.searchParams.set('width', String(width));
    return u.toString();
  }
  // Wikipedia thumbnail URL — pull the filename out and rebuild.
  // e.g. https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Foo.jpg/640px-Foo.jpg
  const m = input.match(/\/wikipedia\/(?:commons|en)\/(?:thumb\/)?[\da-f]\/[\da-f]{2}\/([^/]+?)(?:\/\d+px-[^/]+)?$/);
  if (m) {
    return `${COMMONS_FILEPATH}${encodeURIComponent(m[1])}?width=${width}`;
  }
  // Bare filename like "File:Foo.jpg" or "Foo.jpg"
  const filename = input.replace(/^File:/, '');
  return `${COMMONS_FILEPATH}${encodeURIComponent(filename)}?width=${width}`;
}

async function fetchSummary(title) {
  const u = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, '_'))}`;
  const r = await fetch(u, { headers: { 'User-Agent': UA, accept: 'application/json' } });
  if (r.status === 404) return null;
  if (!r.ok) throw new Error(`summary ${r.status} for ${title}`);
  return r.json();
}

async function fetchWikidataImage(qid) {
  const u = `https://www.wikidata.org/wiki/Special:EntityData/${qid}.json`;
  const r = await fetch(u, { headers: { 'User-Agent': UA, accept: 'application/json' } });
  if (!r.ok) return null;
  const j = await r.json();
  const claims = j?.entities?.[qid]?.claims?.P18;
  if (!claims || claims.length === 0) return null;
  const filename = claims[0]?.mainsnak?.datavalue?.value;
  return filename ? commonsUrl(filename) : null;
}

async function findPortrait(artist) {
  // The DB has three shapes worth handling:
  //   (1) wikipedia_url is a real https://en.wikipedia.org/wiki/Title link
  //   (2) wikipedia_url is a https://www.wikidata.org/wiki/Q link
  //   (3) wikidata_id is set on its own
  // Resolve a usable title and a Q-ID up front from whichever we have.
  let title = artist.wikipedia_url ? titleFromUrl(artist.wikipedia_url) : null;
  let qid =
    artist.wikidata_id ||
    qidFromUrl(artist.wikipedia_url) ||
    null;

  if (!title && qid) {
    try {
      title = await titleFromWikidata(qid);
    } catch (e) {
      console.error(`  ! qid→title fail for ${artist.slug}: ${e.message}`);
    }
  }

  if (title) {
    try {
      const sum = await fetchSummary(title);
      const original = sum?.originalimage?.source;
      const thumb = sum?.thumbnail?.source;
      const url = commonsUrl(original || thumb);
      if (url) return { url, source: 'wikipedia-summary' };
    } catch (e) {
      console.error(`  ! summary fail for ${artist.slug}: ${e.message}`);
    }
  }

  if (qid) {
    try {
      const url = await fetchWikidataImage(qid);
      if (url) return { url, source: 'wikidata-p18' };
    } catch (e) {
      console.error(`  ! wikidata fail for ${artist.slug}: ${e.message}`);
    }
  }

  return null;
}

async function fetchAllArtists() {
  const PAGE = 1000;
  const out = [];
  for (let from = 0; ; from += PAGE) {
    let q = sb
      .from('artists')
      .select('id, slug, name, wikipedia_url, wikidata_id, bio_sources, portrait_url')
      .order('id', { ascending: true })
      .range(from, from + PAGE - 1);
    if (ONLY_SLUG) q = q.eq('slug', ONLY_SLUG);
    const { data, error } = await q;
    if (error) throw error;
    if (!data || data.length === 0) break;
    out.push(...data);
    if (data.length < PAGE) break;
    if (ONLY_SLUG) break;
  }
  return out;
}

function existingPortrait(bioSources) {
  if (!Array.isArray(bioSources)) return null;
  for (const s of bioSources) {
    if (s && s.type === 'portrait' && s.url) return s.url;
  }
  return null;
}

function setPortraitInBioSources(bioSources, url, artistName) {
  const arr = Array.isArray(bioSources) ? bioSources : [];
  const next = arr.filter((s) => !s || s.type !== 'portrait');
  next.unshift({
    type: 'portrait',
    title: `Portrait of ${artistName}`,
    url,
  });
  return next;
}

/** Process a single artist: lookup, write back. Returns counter deltas. */
async function processOne(r) {
  const have = r.portrait_url || existingPortrait(r.bio_sources);
  if (have && !REFRESH) return { skipped: 1 };

  let found;
  try {
    found = await findPortrait(r);
  } catch (e) {
    console.error(`✗ ${r.slug}: ${e.message}`);
    return { failed: 1 };
  }

  if (!found) {
    console.log(`- ${r.slug}: no portrait`);
    return { failed: 1 };
  }

  if (DRY) {
    console.log(`[dry] ${r.slug} ← ${found.source}: ${found.url}`);
    return { updated: 1 };
  }

  // Migration 053 added a first-class portrait_url column; write there
  // directly. (The JSON-side helper is left in place for the few rows
  // touched before 053 was applied; the migration itself migrates them
  // into the column.)
  const { error } = await sb
    .from('artists')
    .update({ portrait_url: found.url })
    .eq('id', r.id);
  if (error) {
    console.error(`✗ ${r.slug}: ${error.message}`);
    return { failed: 1 };
  }
  console.log(`✓ ${r.slug} ← ${found.source}`);
  return { updated: 1 };
}

async function main() {
  const rows = await fetchAllArtists();
  // Anything with a wikipedia_url, a wikidata_id, OR a wikipedia_url that
  // is actually a Wikidata link (about a quarter of the DB).
  const candidates = rows.filter(
    (r) =>
      r.wikipedia_url || r.wikidata_id || qidFromUrl(r.wikipedia_url),
  );
  console.log(
    `${rows.length} artists; ${candidates.length} have a wikipedia_url or wikidata_id.`,
  );

  const work = LIMIT < Infinity ? candidates.slice(0, LIMIT) : candidates;

  // Bounded concurrency. Wikipedia + Wikidata can comfortably take 6
  // parallel requests per IP.
  const CONCURRENCY = 6;
  let cursor = 0;
  let updated = 0;
  let skipped = 0;
  let failed = 0;

  async function worker() {
    while (true) {
      const i = cursor++;
      if (i >= work.length) return;
      const delta = await processOne(work[i]);
      updated += delta.updated || 0;
      skipped += delta.skipped || 0;
      failed += delta.failed || 0;
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  console.log(
    `\n${DRY ? '[dry-run] ' : ''}processed ${work.length}; updated ${updated}; skipped ${skipped} (already had); no-portrait ${failed}.`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
