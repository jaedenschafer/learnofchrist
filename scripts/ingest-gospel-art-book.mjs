#!/usr/bin/env node
/**
 * Ingest LDS Gospel Art Book biblical plates into Supabase.
 *
 * Reads src/data/art/gospel-art-book.ts (91 plates curated from the Church
 * of Jesus Christ of Latter-day Saints' Gospel Art Book collections), then:
 *   1. Upserts artist records for the 30 attributed artists.
 *   2. Reuses existing scene records.
 *   3. For each plate:
 *        - Upserts artwork with `source = 'gospel_art_book'` and
 *          `moderation_status = 'approved'` (per user's explicit directive —
 *          these images are pre-approved licensing-wise and should skip
 *          the pending moderation queue).
 *        - Upserts artwork_scripture_refs
 *        - Upserts artwork_scenes join
 *
 * Requires migration 017 (ALTER TYPE art_source ADD VALUE 'gospel_art_book')
 * to have been applied before running.
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=your_key node scripts/ingest-gospel-art-book.mjs
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

// ───────── Supabase helpers ─────────

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

// ───────── Parse gospel-art-book.ts without TS/bundler ─────────

function loadGabData() {
  const path = resolve(__dirname, '../src/data/art/gospel-art-book.ts');
  const source = readFileSync(path, 'utf8');

  const cleaned = source
    .replace(/export type [\s\S]*?^};/gm, '')
    .replace(/export const (\w+): [^=]+=/g, 'export const $1 =');

  const artistsMatch = cleaned.match(/export const GOSPEL_ART_BOOK_ARTISTS\s*=\s*(\[[\s\S]*?^\]);/m);
  const platesMatch = cleaned.match(/export const GOSPEL_ART_BOOK_PLATES\s*=\s*(\[[\s\S]*?^\]);/m);
  if (!artistsMatch || !platesMatch) {
    throw new Error('Failed to parse gospel-art-book.ts — expected GOSPEL_ART_BOOK_ARTISTS and GOSPEL_ART_BOOK_PLATES array literals');
  }

  const artists = new Function(`return ${artistsMatch[1]};`)();
  const plates = new Function(`return ${platesMatch[1]};`)();
  return { artists, plates };
}

// ───────── Main ─────────

async function main() {
  if (!SUPABASE_SERVICE_KEY) {
    console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var');
    process.exit(1);
  }

  console.log('=== LDS Gospel Art Book Ingest ===\n');

  const { artists, plates } = loadGabData();
  console.log(`Loaded ${artists.length} artists and ${plates.length} plates from gospel-art-book.ts`);

  // 1. Artists
  console.log('\n→ Upserting artists');
  const artistRows = await upsert(
    'artists',
    artists.map((a) => ({
      slug: a.slug,
      name: a.name,
      birth_year: a.birthYear,
      death_year: a.deathYear,
      nationality: a.nationality,
      bio: a.bio,
      wikipedia_url: a.wikipediaUrl,
    })),
    'slug',
  );
  const artistBySlug = new Map(artistRows.map((a) => [a.slug, a]));
  for (const a of artistRows) {
    console.log(`   ${a.slug.padEnd(28)} → ${a.id}`);
  }

  // 2. Scenes (reuse existing)
  const scenes = await supabaseSelect('scenes', 'select=id,slug');
  const sceneBySlug = new Map(scenes.map((s) => [s.slug, s.id]));
  console.log(`\n   reusing ${scenes.length} existing scenes`);

  // 3. Books
  const books = await supabaseSelect('books', 'select=id,slug');
  const bookBySlug = new Map(books.map((b) => [b.slug, b.id]));

  // Scene alias map — collapse broader scene taxonomy to slugs that actually
  // exist in DB. Mirrors the Rijksmuseum ingest's alias logic, extended for
  // LDS subject matter.
  const SCENE_ALIAS = {
    miracles: 'ministry',
    flood: 'patriarchs',
    conquest: 'judges',
    solomon: 'david',
    exile: 'prophets',
    wisdom: 'prophets',
  };
  const resolveScene = (slug) => {
    if (!slug) return undefined;
    if (sceneBySlug.has(slug)) return sceneBySlug.get(slug);
    const alias = SCENE_ALIAS[slug];
    return alias ? sceneBySlug.get(alias) : undefined;
  };

  // 4. Artworks
  console.log(`\n→ Building ${plates.length} artwork rows`);
  const artworkRows = [];
  const unknownArtists = [];

  for (const p of plates) {
    const artist = p.creatorSlug ? artistBySlug.get(p.creatorSlug) : null;
    if (p.creatorSlug && !artist) {
      unknownArtists.push(p.externalId);
      continue;
    }

    artworkRows.push({
      slug: p.externalId,
      title: p.title,
      artist_id: artist ? artist.id : null,
      year: null,
      medium: null,
      source: 'gospel_art_book',
      source_url: p.sourcePageUrl,
      external_id: p.assetId,
      image_url: p.imageUrl,
      thumbnail_url: p.thumbnailUrl,
      license: p.license,
      license_note: p.licenseNote,
      description: p.altText,
      status: 'published',
      moderation_status: 'approved',
    });
  }

  if (unknownArtists.length > 0) {
    console.warn(`   ! ${unknownArtists.length} plate(s) had unknown creatorSlug and were skipped`);
  }

  console.log(`\n→ Upserting ${artworkRows.length} artworks (all moderation_status='approved')`);
  const BATCH = 100;
  const upsertedArtworks = [];
  for (let i = 0; i < artworkRows.length; i += BATCH) {
    const chunk = artworkRows.slice(i, i + BATCH);
    const rows = await upsert('artworks', chunk, 'source,external_id');
    upsertedArtworks.push(...rows);
    console.log(`   batch ${Math.floor(i / BATCH) + 1}: ${rows.length} upserted`);
  }
  const artworkByAssetId = new Map(upsertedArtworks.map((a) => [a.external_id, a]));

  // Force approval with review metadata — the auto-moderation scanner can
  // override moderation_status on insert if it runs post-ingest (and does
  // not set 'approved' on its own). Explicit follow-up PATCH ensures these
  // plates stay approved regardless of scan results. Per user directive:
  // LDS Gospel Art Book is pre-approved licensing-wise.
  const reviewedAt = new Date().toISOString();
  console.log(`\n→ Marking ${upsertedArtworks.length} as reviewed+approved (blanket licensing approval)`);
  for (const row of upsertedArtworks) {
    await supabaseRequest(
      'PATCH',
      `artworks?id=eq.${row.id}`,
      {
        moderation_status: 'approved',
        moderation_reviewed_at: reviewedAt,
        moderation_reviewed_by: 'bulk-approve-licensed-gab',
        moderation_notes: 'LDS Gospel Art Book — blanket approval on ingest (licensed content)',
      },
    );
  }

  // 5. Scripture refs
  const scriptureRefs = [];
  const unknownBooks = [];

  for (const p of plates) {
    const artwork = artworkByAssetId.get(p.assetId);
    if (!artwork) continue;
    p.refs.forEach((r, idx) => {
      const bookId = bookBySlug.get(r.bookSlug);
      if (!bookId) {
        unknownBooks.push(`${p.externalId}: ${r.bookSlug}`);
        return;
      }
      scriptureRefs.push({
        artwork_id: artwork.id,
        book_id: bookId,
        chapter: r.chapter,
        verse_start: r.verseStart,
        verse_end: r.verseEnd,
        is_primary: idx === 0,
      });
    });
  }

  if (unknownBooks.length > 0) {
    console.warn(`   ! unknown book slugs encountered:\n     ${unknownBooks.join('\n     ')}`);
  }

  console.log(`\n→ Upserting ${scriptureRefs.length} scripture refs`);
  for (let i = 0; i < scriptureRefs.length; i += BATCH) {
    const chunk = scriptureRefs.slice(i, i + BATCH);
    await upsert(
      'artwork_scripture_refs',
      chunk,
      'artwork_id,book_id,chapter,verse_start,verse_end',
    );
  }

  // 6. Scene joins
  const sceneJoins = [];
  const unknownScenes = [];
  for (const p of plates) {
    if (!p.sceneSlug) continue;
    const artwork = artworkByAssetId.get(p.assetId);
    if (!artwork) continue;
    const sceneId = resolveScene(p.sceneSlug);
    if (!sceneId) {
      unknownScenes.push(`${p.externalId}: ${p.sceneSlug}`);
      continue;
    }
    sceneJoins.push({ artwork_id: artwork.id, scene_id: sceneId });
  }

  if (unknownScenes.length > 0) {
    console.warn(`   ! unknown scene slugs encountered:\n     ${unknownScenes.join('\n     ')}`);
  }

  console.log(`\n→ Upserting ${sceneJoins.length} artwork↔scene joins`);
  for (let i = 0; i < sceneJoins.length; i += BATCH) {
    const chunk = sceneJoins.slice(i, i + BATCH);
    if (chunk.length > 0) {
      await upsert('artwork_scenes', chunk, 'artwork_id,scene_id');
    }
  }

  // ───────── Summary ─────────
  console.log('\n=== Done ===');
  console.log(`Artists upserted:           ${artistRows.length}`);
  console.log(`Artworks upserted:          ${upsertedArtworks.length} (all approved)`);
  console.log(`Scripture refs upserted:    ${scriptureRefs.length}`);
  console.log(`Scene joins upserted:       ${sceneJoins.length}`);
  if (unknownArtists.length > 0) console.log(`Plates with unknown creator: ${unknownArtists.length}`);
  if (unknownBooks.length > 0) console.log(`Refs with unknown book:      ${unknownBooks.length}`);
  if (unknownScenes.length > 0) console.log(`Joins with unknown scene:    ${unknownScenes.length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
