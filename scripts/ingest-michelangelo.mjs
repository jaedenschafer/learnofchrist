#!/usr/bin/env node
/**
 * Ingest Michelangelo's biblical paintings into Supabase.
 *
 * Reads src/data/art/michelangelo.ts — the Sistine ceiling (9 Genesis
 * panels + 7 prophets + 5 sibyls + 4 corner pendentives), the Last
 * Judgment, the two Pauline Chapel frescoes, and the Doni Tondo.
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=your_key node scripts/ingest-michelangelo.mjs
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

function loadMichelangeloData() {
  const path = resolve(__dirname, '../src/data/art/michelangelo.ts');
  const source = readFileSync(path, 'utf8');
  const cleaned = source
    .replace(/export type [\s\S]*?^};/m, '')
    .replace(/export const (\w+): [^=]+=/g, 'export const $1 =');
  const match = cleaned.match(/export const MICHELANGELO_PLATES\s*=\s*(\[[\s\S]*?^\]);/m);
  if (!match) throw new Error('Failed to parse michelangelo.ts — expected MICHELANGELO_PLATES array literal');
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

  console.log('=== Michelangelo Ingest ===\n');

  const { plates } = loadMichelangeloData();
  console.log(`Loaded ${plates.length} plates from michelangelo.ts`);

  console.log('\n→ Upserting artist: Michelangelo Buonarroti');
  const [artist] = await upsert(
    'artists',
    [{
      slug: 'michelangelo-buonarroti',
      name: 'Michelangelo Buonarroti',
      birth_year: 1475,
      death_year: 1564,
      nationality: 'Italian',
      bio: "Michelangelo di Lodovico Buonarroti Simoni was a Florentine sculptor, painter, architect, and poet. His Sistine Chapel ceiling (1508–1512) — nine Genesis scenes framed by prophets, sibyls, and ancestors — and the Last Judgment (1536–1541) on the altar wall are the defining monument of High Renaissance biblical painting.",
      wikipedia_url: 'https://en.wikipedia.org/wiki/Michelangelo',
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
      source: 'michelangelo',
      source_url: sourceUrl,
      external_id: p.wikimediaFile,
      image_url: imageUrl,
      thumbnail_url: thumbnailUrl,
      license: 'public_domain',
      license_note: 'Public domain via Wikimedia Commons. Michelangelo Buonarroti (1475–1564).',
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
