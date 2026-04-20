#!/usr/bin/env node
/**
 * Ingest Albrecht Dürer's biblical cycles into Supabase.
 *
 * Reads src/data/art/durer.ts (85 plates across 4 cycles):
 *   - Apocalypse (16, 1498)
 *   - Small Passion (37, 1509–1511)
 *   - Large (Great) Passion (12, 1497–1511)
 *   - Life of the Virgin (20, 1503–1511)
 *
 * Workflow:
 *   1. Upserts the Albrecht Dürer artist record
 *   2. Reuses existing scene records (created during Doré ingestion)
 *   3. For each plate:
 *        - Resolves the Wikimedia image URL via Special:FilePath
 *        - Upserts artwork (idempotent via source+external_id)
 *        - Upserts artwork_scripture_refs
 *        - Upserts artwork_scenes join
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=your_key node scripts/ingest-durer.mjs
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
      'apikey': SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      'Prefer': 'return=representation,resolution=merge-duplicates',
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
      'apikey': SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
    },
  });
  if (!res.ok) throw new Error(`Select ${table} -> ${res.status}: ${await res.text()}`);
  return res.json();
}

async function upsert(table, rows, onConflict) {
  return supabaseRequest('POST', `${table}?on_conflict=${onConflict}`, rows);
}

// ───────── Parse durer.ts without TS/bundler ─────────

function loadDurerData() {
  const path = resolve(__dirname, '../src/data/art/durer.ts');
  const source = readFileSync(path, 'utf8');

  const cleaned = source
    .replace(/export type [\s\S]*?^};/m, '')
    .replace(/export const (\w+): [^=]+=/g, 'export const $1 =');

  const match = cleaned.match(/export const DURER_PLATES\s*=\s*(\[[\s\S]*?^\]);/m);
  if (!match) {
    throw new Error('Failed to parse durer.ts — expected DURER_PLATES array literal');
  }

  const plates = new Function(`return ${match[1]};`)();
  return { plates };
}

// ───────── Wikimedia helpers ─────────

function wikimediaImageUrl(filename) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;
}

function wikimediaThumbUrl(filename, width = 800) {
  return `${wikimediaImageUrl(filename)}?width=${width}`;
}

function wikimediaSourceUrl(filename) {
  return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`;
}

// ───────── Main ─────────

async function main() {
  if (!SUPABASE_SERVICE_KEY) {
    console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var');
    process.exit(1);
  }

  console.log('=== Dürer Biblical Cycles Ingest ===\n');

  const { plates } = loadDurerData();
  console.log(`Loaded ${plates.length} plates from durer.ts`);

  // 1. Artist
  console.log('\n→ Upserting artist: Albrecht Dürer');
  const [artist] = await upsert(
    'artists',
    [{
      slug: 'albrecht-durer',
      name: 'Albrecht Dürer',
      birth_year: 1471,
      death_year: 1528,
      nationality: 'German',
      bio: 'Albrecht Dürer was a Nuremberg painter, printmaker, and theorist whose four great biblical woodcut cycles — the Apocalypse (1498), the Large Passion (1497–1511), the Life of the Virgin (1503–1511), and the Small Passion (1509–1511) — defined Northern Renaissance religious imagery and shaped Reformation-era visual theology across Europe.',
      wikipedia_url: 'https://en.wikipedia.org/wiki/Albrecht_Dürer',
    }],
    'slug',
  );
  console.log(`   artist id = ${artist.id}`);

  // 2. Scenes (reuse existing)
  const scenes = await supabaseSelect('scenes', 'select=id,slug');
  const sceneBySlug = new Map(scenes.map((s) => [s.slug, s.id]));
  console.log(`   reusing ${scenes.length} existing scenes`);

  // 3. Look up book ids
  const books = await supabaseSelect('books', 'select=id,slug');
  const bookBySlug = new Map(books.map((b) => [b.slug, b.id]));

  // 4. Artworks
  console.log(`\n→ Processing ${plates.length} plates`);
  const verifiedArtworks = [];

  for (const p of plates) {
    const imageUrl = wikimediaImageUrl(p.wikimediaFile);
    const thumbnailUrl = wikimediaThumbUrl(p.wikimediaFile);
    const sourceUrl = wikimediaSourceUrl(p.wikimediaFile);

    verifiedArtworks.push({
      slug: p.externalId,
      title: p.title,
      artist_id: artist.id,
      year: p.year,
      medium: 'Wood engraving',
      // TODO: flip to 'durer' after supabase/migrations/005_art_source_durer.sql
      // has been applied (that migration also re-UPDATEs these rows).
      source: 'other_public_domain',
      source_url: sourceUrl,
      external_id: p.wikimediaFile,
      image_url: imageUrl,
      thumbnail_url: thumbnailUrl,
      license: 'public_domain',
      license_note: `Public domain via Wikimedia Commons. Albrecht Dürer (1471–1528), ${p.cycle}.`,
      description: p.description ?? null,
      status: 'published',
    });
  }

  // Upsert in batches
  console.log(`\n→ Upserting ${verifiedArtworks.length} artworks`);
  const BATCH = 100;
  const artworkRows = [];
  for (let i = 0; i < verifiedArtworks.length; i += BATCH) {
    const chunk = verifiedArtworks.slice(i, i + BATCH);
    const rows = await upsert('artworks', chunk, 'source,external_id');
    artworkRows.push(...rows);
    console.log(`   batch ${Math.floor(i / BATCH) + 1}: ${rows.length} upserted`);
  }
  const artworkByExternalId = new Map(artworkRows.map((a) => [a.external_id, a]));

  // 5. Scripture refs
  const scriptureRefs = [];
  for (const p of plates) {
    const artwork = artworkByExternalId.get(p.wikimediaFile);
    if (!artwork) continue;
    const bookId = bookBySlug.get(p.bookSlug);
    if (!bookId) {
      console.warn(`   ! unknown book slug: ${p.bookSlug}`);
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
  for (const p of plates) {
    if (!p.sceneSlug) continue;
    const artwork = artworkByExternalId.get(p.wikimediaFile);
    if (!artwork) continue;
    const sceneId = sceneBySlug.get(p.sceneSlug);
    if (!sceneId) {
      console.warn(`   ! unknown scene slug: ${p.sceneSlug}`);
      continue;
    }
    sceneJoins.push({ artwork_id: artwork.id, scene_id: sceneId });
  }

  console.log(`\n→ Upserting ${sceneJoins.length} artwork↔scene joins`);
  for (let i = 0; i < sceneJoins.length; i += BATCH) {
    const chunk = sceneJoins.slice(i, i + BATCH);
    if (chunk.length > 0) {
      await upsert('artwork_scenes', chunk, 'artwork_id,scene_id');
    }
  }

  console.log('\n=== Done ===');
  console.log(`Ingested: ${verifiedArtworks.length} plates`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
