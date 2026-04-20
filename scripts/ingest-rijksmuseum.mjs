#!/usr/bin/env node
/**
 * Ingest Rijksmuseum biblical works into Supabase.
 *
 * Reads src/data/art/rijksmuseum.ts (122 biblically-anchored plates curated
 * from the Rijksmuseum's keyless Linked Open Data API), then:
 *   1. Upserts 10 artist records (Lucas van Leyden, Jan Saenredam, Pieter
 *      Lastman, Ferdinand Bol, Aert de Gelder, Jan Victors, Maarten van
 *      Heemskerck, Adriaen Collaert, Crispijn van de Passe, Jan Luyken).
 *   2. Reuses existing scene records (created during Doré ingestion).
 *   3. For each plate:
 *        - Upserts artwork (idempotent via source+external_id)
 *        - Upserts artwork_scripture_refs
 *        - Upserts artwork_scenes join
 *
 * Unlike the per-artist Wikimedia sources, `source = 'rijksmuseum'` is a
 * single cross-artist source because the Rijks holdings cross many hands
 * and image URLs resolve through the museum's IIIF server (iiif.micr.io)
 * rather than Wikimedia Commons.
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=your_key node scripts/ingest-rijksmuseum.mjs
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

// ───────── Parse rijksmuseum.ts without TS/bundler ─────────

function loadRijksData() {
  const path = resolve(__dirname, '../src/data/art/rijksmuseum.ts');
  const source = readFileSync(path, 'utf8');

  const cleaned = source
    .replace(/export type [\s\S]*?^};/gm, '')
    .replace(/export const (\w+): [^=]+=/g, 'export const $1 =');

  const artistsMatch = cleaned.match(/export const RIJKSMUSEUM_ARTISTS\s*=\s*(\[[\s\S]*?^\]);/m);
  const platesMatch = cleaned.match(/export const RIJKSMUSEUM_PLATES\s*=\s*(\[[\s\S]*?^\]);/m);
  if (!artistsMatch || !platesMatch) {
    throw new Error('Failed to parse rijksmuseum.ts — expected RIJKSMUSEUM_ARTISTS and RIJKSMUSEUM_PLATES array literals');
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

  console.log('=== Rijksmuseum Biblical Works Ingest ===\n');

  const { artists, plates } = loadRijksData();
  console.log(`Loaded ${artists.length} artists and ${plates.length} plates from rijksmuseum.ts`);

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

  // 2. Scenes (reuse existing — created during Doré ingestion)
  const scenes = await supabaseSelect('scenes', 'select=id,slug');
  const sceneBySlug = new Map(scenes.map((s) => [s.slug, s.id]));
  console.log(`\n   reusing ${scenes.length} existing scenes`);

  // 3. Look up book ids
  const books = await supabaseSelect('books', 'select=id,slug');
  const bookBySlug = new Map(books.map((b) => [b.slug, b.id]));

  // 4. Artworks
  console.log(`\n→ Building ${plates.length} artwork rows`);
  const artworkRows = [];
  const unknownArtists = [];
  const unknownBooks = [];

  for (const p of plates) {
    const artist = artistBySlug.get(p.creatorSlug);
    if (!artist) {
      unknownArtists.push(p.externalId);
      continue;
    }

    // Rijks IDs can have weird shapes (RP-P-OB-1797, SK-A-3841). Two entries
    // use synthetic IDs (RP-IIIF-*) because the harvester couldn't recover
    // a canonical Rijks number — for those, link to the IIIF image directly.
    const sourcePageUrl = p.objectNumber.startsWith('RP-IIIF-')
      ? p.imageUrl.replace('/max/0/default.jpg', '/info.json')
      : `https://www.rijksmuseum.nl/en/collection/${p.objectNumber}`;

    artworkRows.push({
      slug: p.externalId,
      title: p.title,
      artist_id: artist.id,
      year: p.year,
      medium: null,
      source: 'rijksmuseum',
      source_url: sourcePageUrl,
      external_id: p.objectNumber,
      image_url: p.imageUrl,
      thumbnail_url: p.imageUrl,
      license: 'public_domain',
      license_note: `Public domain via Rijksmuseum, Amsterdam. Object number ${p.objectNumber}.`,
      description: p.titleNl && p.titleNl !== p.title ? `Dutch title: ${p.titleNl}` : null,
      status: 'published',
    });
  }

  if (unknownArtists.length > 0) {
    console.warn(`   ! ${unknownArtists.length} plate(s) had unknown creatorSlug and were skipped`);
  }

  console.log(`\n→ Upserting ${artworkRows.length} artworks`);
  const BATCH = 100;
  const upsertedArtworks = [];
  for (let i = 0; i < artworkRows.length; i += BATCH) {
    const chunk = artworkRows.slice(i, i + BATCH);
    const rows = await upsert('artworks', chunk, 'source,external_id');
    upsertedArtworks.push(...rows);
    console.log(`   batch ${Math.floor(i / BATCH) + 1}: ${rows.length} upserted`);
  }
  const artworkByObjectNumber = new Map(upsertedArtworks.map((a) => [a.external_id, a]));

  // 5. Scripture refs
  const scriptureRefs = [];
  for (const p of plates) {
    const artwork = artworkByObjectNumber.get(p.objectNumber);
    if (!artwork) continue;
    const bookId = bookBySlug.get(p.bookSlug);
    if (!bookId) {
      unknownBooks.push(`${p.externalId}: ${p.bookSlug}`);
      continue;
    }
    scriptureRefs.push({
      artwork_id: artwork.id,
      book_id: bookId,
      chapter: p.chapter,
      verse_start: p.verseStart ?? null,
      verse_end: p.verseEnd ?? null,
      is_primary: true,
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
  //
  // The curator used a broader taxonomy (annunciation, baptism, covenant,
  // family, providence, sacrifice, wilderness, martyrdom, monarchy, visions,
  // church, righteous) than the existing `scenes` table. Collapse the extra
  // labels to the closest installed scene so every artwork still lands on
  // at least one scene.
  const SCENE_ALIAS = {
    annunciation: 'nativity',
    baptism: 'ministry',
    covenant: 'patriarchs',
    family: 'patriarchs',
    providence: 'patriarchs',
    sacrifice: 'abraham',
    wilderness: 'exodus',
    martyrdom: 'passion',
    monarchy: 'david',
    visions: 'apocalypse',
    church: 'apostles',
    righteous: 'prophets',
  };
  const resolveScene = (slug) => {
    if (sceneBySlug.has(slug)) return sceneBySlug.get(slug);
    const alias = SCENE_ALIAS[slug];
    return alias ? sceneBySlug.get(alias) : undefined;
  };

  const sceneJoins = [];
  const unknownScenes = [];
  for (const p of plates) {
    if (!p.sceneSlug) continue;
    const artwork = artworkByObjectNumber.get(p.objectNumber);
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
  console.log(`Artworks upserted:          ${upsertedArtworks.length}`);
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
