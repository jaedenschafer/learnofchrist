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
const BIO_ONLY = process.argv.includes('--bio-only');
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

/** Decode any URL-encoded segments before re-encoding so we never
 *  store a double-encoded value (a real bug we hit with filenames
 *  like "James_Tissot_Self_Portrait_(1865).jpg" — Wikipedia returns
 *  the parens already %-encoded, then a naive encodeURIComponent
 *  re-encodes the % sign and you end up with %252528 / %252529). */
function safeEncode(filename) {
  let decoded = filename;
  // Loop in case it's been encoded multiple times. Capped at 3 just
  // to avoid pathological inputs.
  for (let i = 0; i < 3; i++) {
    let next;
    try {
      next = decodeURIComponent(decoded);
    } catch {
      break;
    }
    if (next === decoded) break;
    decoded = next;
  }
  return encodeURIComponent(decoded);
}

/** Build a stable Commons-FilePath URL from a raw image URL or filename. */
function commonsUrl(input, width = 600) {
  if (!input) return null;
  // Already a Commons FilePath URL — extract the filename, normalize
  // its encoding, and reattach the width.
  if (input.includes('Special:FilePath/')) {
    const m = input.match(/Special:FilePath\/([^?]+)/);
    if (m) {
      return `${COMMONS_FILEPATH}${safeEncode(m[1])}?width=${width}`;
    }
    return input;
  }
  // Wikipedia thumbnail URL — pull the filename out and rebuild.
  // e.g. https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Foo.jpg/640px-Foo.jpg
  const m = input.match(/\/wikipedia\/(?:commons|en)\/(?:thumb\/)?[\da-f]\/[\da-f]{2}\/([^/]+?)(?:\/\d+px-[^/]+)?$/);
  if (m) {
    return `${COMMONS_FILEPATH}${safeEncode(m[1])}?width=${width}`;
  }
  // Bare filename like "File:Foo.jpg" or "Foo.jpg"
  const filename = input.replace(/^File:/, '');
  return `${COMMONS_FILEPATH}${safeEncode(filename)}?width=${width}`;
}

async function fetchSummary(title) {
  const u = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, '_'))}`;
  const r = await fetch(u, { headers: { 'User-Agent': UA, accept: 'application/json' } });
  if (r.status === 404) return null;
  if (!r.ok) throw new Error(`summary ${r.status} for ${title}`);
  return r.json();
}

/** Wikipedia Action API pageimages — returns the lead image's filename
 *  even in cases where the REST summary endpoint omits the thumbnail
 *  (especially common for shorter articles or when the lead is a
 *  gallery rather than a single image). */
async function fetchPageImage(title) {
  const u = new URL('https://en.wikipedia.org/w/api.php');
  u.searchParams.set('action', 'query');
  u.searchParams.set('prop', 'pageimages');
  u.searchParams.set('piprop', 'original|thumbnail');
  u.searchParams.set('pithumbsize', '600');
  u.searchParams.set('titles', title);
  u.searchParams.set('redirects', '1');
  u.searchParams.set('format', 'json');
  const r = await fetch(u, { headers: { 'User-Agent': UA, accept: 'application/json' } });
  if (!r.ok) return null;
  const j = await r.json();
  const pages = j?.query?.pages || {};
  for (const id in pages) {
    const original = pages[id]?.original?.source;
    const thumb = pages[id]?.thumbnail?.source;
    if (original || thumb) return commonsUrl(original || thumb);
  }
  return null;
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

/** Wikipedia summary endpoint also returns the Wikidata Q-ID as
 *  `wikibase_item`. Pulling it is free and helps later passes. */
async function qidFromSummary(title) {
  const sum = await fetchSummary(title);
  return sum?.wikibase_item ?? null;
}

/** Last-resort: find a Q-ID by searching Wikidata for the artist's
 *  display name. We only accept candidates that look like real people
 *  (have either P18 or P31=Q5/human). Birth year mismatches are common
 *  in our data, so we DON'T validate against birth_year here. */
async function searchWikidata(name) {
  const u = new URL('https://www.wikidata.org/w/api.php');
  u.searchParams.set('action', 'wbsearchentities');
  u.searchParams.set('search', name);
  u.searchParams.set('language', 'en');
  u.searchParams.set('format', 'json');
  u.searchParams.set('limit', '5');
  u.searchParams.set('type', 'item');
  const r = await fetch(u, { headers: { 'User-Agent': UA, accept: 'application/json' } });
  if (!r.ok) return null;
  const j = await r.json();
  return (j?.search ?? []).map((s) => s.id);
}

async function findPortrait(artist) {
  // Up to four sources, tried in order of reliability:
  //   1. Wikipedia REST summary (originalimage / thumbnail)
  //   2. Wikipedia Action API pageimages
  //   3. Wikidata P18
  //   4. Wikidata search by name → P18
  //
  // The DB has three input shapes:
  //   - wikipedia_url is a real https://en.wikipedia.org/wiki/Title link
  //   - wikipedia_url is a https://www.wikidata.org/wiki/Q link
  //   - wikidata_id is set on its own
  // Plus rows with NEITHER (we still try search-by-name).
  let title = artist.wikipedia_url ? titleFromUrl(artist.wikipedia_url) : null;
  let qid =
    artist.wikidata_id || qidFromUrl(artist.wikipedia_url) || null;

  if (!title && qid) {
    try {
      title = await titleFromWikidata(qid);
    } catch (e) {
      console.error(`  ! qid→title fail for ${artist.slug}: ${e.message}`);
    }
  }

  // (1) Wikipedia REST summary — also harvests the Q-ID for later steps.
  if (title) {
    try {
      const sum = await fetchSummary(title);
      const original = sum?.originalimage?.source;
      const thumb = sum?.thumbnail?.source;
      const url = commonsUrl(original || thumb);
      if (url) return { url, source: 'wikipedia-summary', qid: sum?.wikibase_item ?? qid };
      if (sum?.wikibase_item && !qid) qid = sum.wikibase_item;
    } catch (e) {
      console.error(`  ! summary fail for ${artist.slug}: ${e.message}`);
    }
  }

  // (2) Wikipedia Action API pageimages.
  if (title) {
    try {
      const url = await fetchPageImage(title);
      if (url) return { url, source: 'wikipedia-pageimages', qid };
    } catch (e) {
      console.error(`  ! pageimages fail for ${artist.slug}: ${e.message}`);
    }
  }

  // (3) Wikidata P18.
  if (qid) {
    try {
      const url = await fetchWikidataImage(qid);
      if (url) return { url, source: 'wikidata-p18', qid };
    } catch (e) {
      console.error(`  ! wikidata fail for ${artist.slug}: ${e.message}`);
    }
  }

  // (4) Last resort: Wikidata wbsearchentities. Use the artist name
  // verbatim — the candidate Q-ID's P18 will only succeed for real
  // people, which is a reasonable filter on its own. We try the top
  // 3 candidates.
  if (!qid && artist.name) {
    try {
      const candidates = (await searchWikidata(artist.name)) ?? [];
      for (const candidateQid of candidates.slice(0, 3)) {
        const url = await fetchWikidataImage(candidateQid);
        if (url) {
          return { url, source: 'wikidata-search', qid: candidateQid };
        }
      }
    } catch (e) {
      console.error(`  ! wd-search fail for ${artist.slug}: ${e.message}`);
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
      .select('id, slug, name, wikipedia_url, wikidata_id, bio_sources, portrait_url, bio_long')
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
  // directly. Also harvest a newly-discovered wikidata_id when we
  // found one — strengthens the Person/sameAs JSON-LD on the hub page
  // for free.
  const patch = { portrait_url: found.url };
  if (found.qid && /^Q[0-9]+$/.test(found.qid) && !r.wikidata_id) {
    patch.wikidata_id = found.qid;
  }
  const { error } = await sb.from('artists').update(patch).eq('id', r.id);
  if (error) {
    console.error(`✗ ${r.slug}: ${error.message}`);
    return { failed: 1 };
  }
  const tag = patch.wikidata_id ? `${found.source} +qid` : found.source;
  console.log(`✓ ${r.slug} ← ${tag}`);
  return { updated: 1 };
}

async function main() {
  const rows = await fetchAllArtists();
  // Skip artists who definitionally can't have a portrait — anonymous
  // attribution buckets, Master-of-X conventions, workshops, circles,
  // copies, followers. None of these are real individual people whose
  // photo we could publish even if we found one.
  const NON_PERSONAL = /^(anonymous\b|master(\s+(of|called)\b)?|after\b|attributed\b|circle of\b|copy after\b|follower of\b|school of\b|studio of\b|workshop of\b|imitator of\b|.*\band workshop$)/i;
  let candidates = rows.filter(
    (r) =>
      r.name &&
      r.name.trim() &&
      !NON_PERSONAL.test(r.name.trim()),
  );
  if (BIO_ONLY) {
    candidates = candidates.filter((r) => (r.bio_long ?? '').length >= 200);
  }
  const dropped = rows.length - candidates.length;
  console.log(
    `${rows.length} artists; ${candidates.length} are individuals worth searching` +
      (BIO_ONLY ? ' (bio-only mode)' : '') +
      ` (${dropped} skipped).`,
  );

  const work = LIMIT < Infinity ? candidates.slice(0, LIMIT) : candidates;

  // Wikipedia's REST + Action APIs return 429 / silent empty bodies
  // under heavy concurrent load from a single IP. Stay polite: 3
  // parallel workers, ~150ms between calls per worker. Slower per
  // chunk but a 4× higher hit-rate on borderline artists.
  const CONCURRENCY = 3;
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
      // Polite pacing — only when we actually hit Wikipedia. Skipped
      // rows don't need to wait.
      if (!delta.skipped) {
        await new Promise((r) => setTimeout(r, 150));
      }
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
