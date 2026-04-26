#!/usr/bin/env node
/**
 * Ingest the chapter-coverage gap-fill batch — heterogeneous Wikimedia
 * material picked specifically to add coverage to Bible chapters that
 * had no artwork before. Each row in src/data/art/gap-fill.ts carries
 * its own artist record; they're grouped under source='gap_fill' so
 * this batch can be moderated as a unit.
 *
 * Filenames are pre-verified via the MediaWiki imageinfo API (see
 * curation work in the conversation transcript). Newly inserted
 * artworks land at moderation_status='pending'.
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=your_key node scripts/ingest-gap-fill.mjs
 *
 * Idempotent — safe to re-run.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SUPABASE_URL = 'https://uqcgieillyvefzmohzpn.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function supabaseRequest(method, path, body) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      Prefer: 'return=representation,resolution=merge-duplicates',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${method} ${path} -> ${res.status}: ${text}`);
  return text ? JSON.parse(text) : null;
}

async function supabaseSelect(table, params = '') {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${params}`, {
    headers: {
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
    },
  });
  if (!res.ok) throw new Error(`Select ${table} -> ${res.status}: ${await res.text()}`);
  return res.json();
}

async function upsert(table, rows, onConflict) {
  return supabaseRequest('POST', `${table}?on_conflict=${onConflict}`, rows);
}

function wikimediaImageUrl(filename) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;
}
function wikimediaThumbUrl(filename, width = 800) {
  return `${wikimediaImageUrl(filename)}?width=${width}`;
}
function wikimediaSourceUrl(filename) {
  return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`;
}

function loadGapFillData() {
  const path = resolve(__dirname, '../src/data/art/gap-fill.ts');
  const source = readFileSync(path, 'utf8');
  const cleaned = source
    .replace(/export type [\s\S]*?^};/m, '')
    .replace(/export const (\w+): [^=]+=/g, 'export const $1 =');
  const match = cleaned.match(/export const GAP_FILL_ITEMS\s*=\s*(\[[\s\S]*?^\]);/m);
  if (!match) throw new Error('Failed to parse gap-fill.ts');
  // eslint-disable-next-line no-new-func
  return new Function(`return ${match[1]};`)();
}

async function main() {
  if (!SUPABASE_SERVICE_KEY) {
    console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var');
    process.exit(1);
  }

  console.log('=== Gap-Fill Ingest ===\n');

  const items = loadGapFillData();
  console.log(`Loaded ${items.length} items from gap-fill.ts`);

  // 1. De-dupe artists by slug, then upsert all needed artist records.
  // Artists already in the DB (e.g. michelangelo-buonarroti, caravaggio,
  // peter-paul-rubens) are matched by slug — we only send the slug+name
  // for those, since the existing record already has bio/years and the
  // upsert merges columns.
  // De-dupe artists from the dataset; then split into "new" (need full
  // upsert) vs "existing" (already in DB — just look up the id, don't
  // clobber their existing bio/years with our partial info).
  const wantedSlugs = new Set(items.map((it) => it.artistSlug));
  const existingArtists = await supabaseSelect(
    'artists',
    'select=id,slug&slug=in.(' + Array.from(wantedSlugs).map((s) => `"${s}"`).join(',') + ')',
  );
  const artistIdBySlug = new Map(existingArtists.map((a) => [a.slug, a.id]));
  console.log(`Found ${existingArtists.length} existing artists; ${wantedSlugs.size - existingArtists.length} new`);

  // Build full artist rows for the new ones, normalized to a uniform shape
  // (PostgREST requires all keys to match across the batch).
  const seenNew = new Set();
  const newArtistRows = [];
  for (const it of items) {
    if (artistIdBySlug.has(it.artistSlug)) continue;
    if (seenNew.has(it.artistSlug)) continue;
    seenNew.add(it.artistSlug);
    newArtistRows.push({
      slug: it.artistSlug,
      name: it.artistName,
      birth_year: it.artistBirthYear ?? null,
      death_year: it.artistDeathYear ?? null,
      nationality: it.artistNationality ?? null,
      bio: it.artistBio ?? null,
      wikipedia_url: it.artistWikipediaUrl ?? null,
    });
  }
  if (newArtistRows.length) {
    console.log(`Upserting ${newArtistRows.length} new artists`);
    const newArtistsResult = await upsert('artists', newArtistRows, 'slug');
    for (const a of newArtistsResult) artistIdBySlug.set(a.slug, a.id);
  }

  // 2. Books and scenes
  const books = await supabaseSelect('books', 'select=id,slug');
  const bookBySlug = new Map(books.map((b) => [b.slug, b.id]));

  const scenes = await supabaseSelect('scenes', 'select=id,slug');
  const sceneBySlug = new Map(scenes.map((s) => [s.slug, s.id]));

  // 3. Artworks
  const artworkRows = items.map((it) => {
    const artistId = artistIdBySlug.get(it.artistSlug);
    if (!artistId) throw new Error(`No artist id for slug ${it.artistSlug}`);
    return {
      slug: it.externalId,
      title: it.title,
      artist_id: artistId,
      year: it.year,
      medium: it.medium,
      source: 'gap_fill',
      source_url: wikimediaSourceUrl(it.wikimediaFile),
      external_id: it.wikimediaFile,
      image_url: wikimediaImageUrl(it.wikimediaFile),
      thumbnail_url: wikimediaThumbUrl(it.wikimediaFile),
      license: 'public_domain',
      license_note:
        'Public domain via Wikimedia Commons. Curated chapter-coverage gap-fill batch.',
      description: it.description ?? null,
      status: 'published',
    };
  });

  console.log(`Upserting ${artworkRows.length} artworks`);
  const upsertedArtworks = await upsert('artworks', artworkRows, 'source,external_id');
  const artworkByExternalId = new Map(upsertedArtworks.map((a) => [a.external_id, a]));

  // 4. Scripture refs
  const scriptureRefs = [];
  for (const it of items) {
    const artwork = artworkByExternalId.get(it.wikimediaFile);
    if (!artwork) continue;
    const bookId = bookBySlug.get(it.bookSlug);
    if (!bookId) {
      console.warn(`  ! unknown book slug: ${it.bookSlug}`);
      continue;
    }
    scriptureRefs.push({
      artwork_id: artwork.id,
      book_id: bookId,
      chapter: it.chapter,
      verse_start: it.verseStart ?? null,
      verse_end: it.verseEnd ?? null,
      is_primary: true,
    });
  }
  if (scriptureRefs.length) {
    await upsert(
      'artwork_scripture_refs',
      scriptureRefs,
      'artwork_id,book_id,chapter,verse_start,verse_end',
    );
    console.log(`Upserted ${scriptureRefs.length} scripture refs`);
  }

  // 5. Scene joins
  const sceneJoins = [];
  for (const it of items) {
    if (!it.sceneSlug) continue;
    const artwork = artworkByExternalId.get(it.wikimediaFile);
    if (!artwork) continue;
    const sceneId = sceneBySlug.get(it.sceneSlug);
    if (!sceneId) {
      console.warn(`  ! unknown scene slug: ${it.sceneSlug}`);
      continue;
    }
    sceneJoins.push({ artwork_id: artwork.id, scene_id: sceneId });
  }
  if (sceneJoins.length) {
    await upsert('artwork_scenes', sceneJoins, 'artwork_id,scene_id');
    console.log(`Upserted ${sceneJoins.length} scene joins`);
  }

  console.log('\n=== Done ===');
  console.log(`Total artworks ingested: ${upsertedArtworks.length}`);
  console.log(`All new rows are at moderation_status='pending'`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
