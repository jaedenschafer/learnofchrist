#!/usr/bin/env node
/**
 * Ingest Raphael's biblical paintings into Supabase.
 *
 * Reads src/data/art/raphael.ts — the Vatican Stanze frescoes (Disputa,
 * Heliodorus, Bolsena, Liberation of Peter), the Sistine tapestry
 * cartoons (Victoria & Albert Museum, 1515–1516), the Madonnas (Meadow,
 * Goldfinch, Belle Jardinière, Alba, Foligno, Sistine, Seggiola), the
 * Transfiguration (1520), and related altarpieces.
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=your_key node scripts/ingest-raphael.mjs
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

function loadRaphaelData() {
  const path = resolve(__dirname, '../src/data/art/raphael.ts');
  const source = readFileSync(path, 'utf8');
  const cleaned = source
    .replace(/export type [\s\S]*?^};/m, '')
    .replace(/export const (\w+): [^=]+=/g, 'export const $1 =');
  const match = cleaned.match(/export const RAPHAEL_PLATES\s*=\s*(\[[\s\S]*?^\]);/m);
  if (!match) throw new Error('Failed to parse raphael.ts — expected RAPHAEL_PLATES array literal');
  const plates = new Function(`return ${match[1]};`)();
  return { plates };
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

async function main() {
  if (!SUPABASE_SERVICE_KEY) {
    console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var');
    process.exit(1);
  }

  console.log('=== Raphael Ingest ===\n');

  const { plates } = loadRaphaelData();
  console.log(`Loaded ${plates.length} plates from raphael.ts`);

  console.log('\n→ Upserting artist: Raffaello Sanzio da Urbino');
  const [artist] = await upsert(
    'artists',
    [{
      slug: 'raphael-sanzio',
      name: 'Raffaello Sanzio da Urbino',
      birth_year: 1483,
      death_year: 1520,
      nationality: 'Italian',
      bio: "Raffaello Sanzio da Urbino — called Raphael — was an Italian painter and architect of the High Renaissance. His Vatican Stanze frescoes (1509–1514), the Sistine Chapel tapestry cartoons (1515–1516), and the Transfiguration (1520) established him alongside Michelangelo and Leonardo as a defining master of Christian art. His Madonnas — the Sistine, the Alba, the Belle Jardinière, the Madonna della Seggiola — became the image of the Virgin for centuries.",
      wikipedia_url: 'https://en.wikipedia.org/wiki/Raphael',
    }],
    'slug',
  );
  console.log(`   artist id = ${artist.id}`);

  const scenes = await supabaseSelect('scenes', 'select=id,slug');
  const sceneBySlug = new Map(scenes.map((s) => [s.slug, s.id]));
  console.log(`   reusing ${scenes.length} existing scenes`);

  const books = await supabaseSelect('books', 'select=id,slug');
  const bookBySlug = new Map(books.map((b) => [b.slug, b.id]));

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
      medium: p.medium,
      source: 'raphael',
      source_url: sourceUrl,
      external_id: p.wikimediaFile,
      image_url: imageUrl,
      thumbnail_url: thumbnailUrl,
      license: 'public_domain',
      license_note: 'Public domain via Wikimedia Commons. Raffaello Sanzio da Urbino (1483–1520).',
      description: p.description ?? null,
      status: 'published',
    });
  }

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

  const scriptureRefs = [];
  for (const p of plates) {
    const artwork = artworkByExternalId.get(p.wikimediaFile);
    if (!artwork) continue;
    const bookId = bookBySlug.get(p.bookSlug);
    if (!bookId) { console.warn(`   ! unknown book slug: ${p.bookSlug}`); continue; }
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
    await upsert('artwork_scripture_refs', chunk, 'artwork_id,book_id,chapter,verse_start,verse_end');
  }

  const sceneJoins = [];
  for (const p of plates) {
    if (!p.sceneSlug) continue;
    const artwork = artworkByExternalId.get(p.wikimediaFile);
    if (!artwork) continue;
    const sceneId = sceneBySlug.get(p.sceneSlug);
    if (!sceneId) { console.warn(`   ! unknown scene slug: ${p.sceneSlug}`); continue; }
    sceneJoins.push({ artwork_id: artwork.id, scene_id: sceneId });
  }

  console.log(`\n→ Upserting ${sceneJoins.length} artwork↔scene joins`);
  for (let i = 0; i < sceneJoins.length; i += BATCH) {
    const chunk = sceneJoins.slice(i, i + BATCH);
    if (chunk.length > 0) await upsert('artwork_scenes', chunk, 'artwork_id,scene_id');
  }

  console.log('\n=== Done ===');
  console.log(`Ingested: ${verifiedArtworks.length} plates`);
}

main().catch((err) => { console.error(err); process.exit(1); });
