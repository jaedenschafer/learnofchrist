#!/usr/bin/env node
/**
 * Ingest Gustave Doré's Bible engravings into Supabase.
 *
 * Reads src/data/art/dore.ts (the curated MVP mapping), then:
 *   1. Upserts the Gustave Doré artist record
 *   2. Upserts all scene records
 *   3. For each engraving:
 *        - Resolves the Wikimedia image URL via Special:FilePath
 *        - Verifies HEAD returns 200 (skips if not — logs for manual fix)
 *        - Upserts artwork (idempotent via source+external_id)
 *        - Upserts artwork_scripture_refs
 *        - Upserts artwork_scenes join
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=your_key node scripts/ingest-dore.mjs
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

// ───────── Parse dore.ts without TS/bundler ─────────
// The data is plain TS; we strip types and eval.

function loadDoreData() {
  const path = resolve(__dirname, '../src/data/art/dore.ts');
  const source = readFileSync(path, 'utf8');

  // Strip TS-only syntax: interface block, and `: Type` annotations on consts.
  // The const arrays themselves are plain JSON-compatible JS.
  const cleaned = source
    .replace(/export interface [\s\S]*?^}/m, '')
    .replace(/export const (\w+): [^=]+=/g, 'export const $1 =');

  // Extract the array literals manually — simpler than running eval.
  // We rely on the fact that both exports are final top-level statements.
  const engravingsMatch = cleaned.match(/export const DORE_ENGRAVINGS\s*=\s*(\[[\s\S]*?^\]);/m);
  const scenesMatch = cleaned.match(/export const DORE_SCENES\s*=\s*(\[[\s\S]*?^\]);/m);

  if (!engravingsMatch || !scenesMatch) {
    throw new Error('Failed to parse dore.ts — expected top-level DORE_ENGRAVINGS and DORE_SCENES array literals');
  }

  // eslint-disable-next-line no-new-func
  const engravings = new Function(`return ${engravingsMatch[1]};`)();
  // eslint-disable-next-line no-new-func
  const scenes = new Function(`return ${scenesMatch[1]};`)();

  return { engravings, scenes };
}

// ───────── Wikimedia helpers ─────────

function wikimediaImageUrl(filename) {
  // Special:FilePath always redirects to the canonical image URL.
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;
}

function wikimediaThumbUrl(filename, width = 800) {
  return `${wikimediaImageUrl(filename)}?width=${width}`;
}

function wikimediaSourceUrl(filename) {
  return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`;
}

async function verifyImageExists(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    return res.ok;
  } catch {
    return false;
  }
}

// ───────── Main ─────────

async function main() {
  if (!SUPABASE_SERVICE_KEY) {
    console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var');
    process.exit(1);
  }

  console.log('=== Doré Bible Ingest ===\n');

  const { engravings, scenes } = loadDoreData();
  console.log(`Loaded ${engravings.length} engravings, ${scenes.length} scenes from dore.ts`);

  // 1. Artist
  console.log('\n→ Upserting artist: Gustave Doré');
  const [artist] = await upsert(
    'artists',
    [{
      slug: 'gustave-dore',
      name: 'Gustave Doré',
      birth_year: 1832,
      death_year: 1883,
      nationality: 'French',
      bio: 'Paul Gustave Doré was a prolific French illustrator whose 241 wood engravings for "La Grande Bible de Tours" (1866) became the most influential visual interpretation of scripture of the 19th century.',
      wikipedia_url: 'https://en.wikipedia.org/wiki/Gustave_Doré',
    }],
    'slug',
  );
  console.log(`   artist id = ${artist.id}`);

  // 2. Scenes
  console.log(`\n→ Upserting ${scenes.length} scenes`);
  const sceneRows = await upsert(
    'scenes',
    scenes.map((s) => ({ slug: s.slug, name: s.name, description: s.description })),
    'slug',
  );
  const sceneBySlug = new Map(sceneRows.map((s) => [s.slug, s.id]));

  // 3. Look up book ids
  const books = await supabaseSelect('books', 'select=id,slug');
  const bookBySlug = new Map(books.map((b) => [b.slug, b.id]));

  // 4. Artworks
  console.log(`\n→ Processing ${engravings.length} engravings`);
  const verifiedArtworks = [];
  const skipped = [];

  for (const eng of engravings) {
    const imageUrl = wikimediaImageUrl(eng.wikimediaFile);
    const thumbnailUrl = wikimediaThumbUrl(eng.wikimediaFile);
    const sourceUrl = wikimediaSourceUrl(eng.wikimediaFile);

    process.stdout.write(`   ${eng.externalId.padEnd(48)}`);
    const ok = await verifyImageExists(imageUrl);
    if (!ok) {
      console.log(' ✗ (image not found on Wikimedia)');
      skipped.push(eng);
      continue;
    }
    console.log(' ✓');

    verifiedArtworks.push({
      slug: eng.externalId,
      title: eng.title,
      artist_id: artist.id,
      year: eng.year,
      medium: 'Wood engraving',
      source: 'dore',
      source_url: sourceUrl,
      external_id: eng.wikimediaFile,
      image_url: imageUrl,
      thumbnail_url: thumbnailUrl,
      license: 'public_domain',
      license_note: 'Public domain via Wikimedia Commons. Gustave Doré (1832–1883), La Grande Bible de Tours, 1866.',
      description: eng.description ?? null,
      status: 'published',
    });
  }

  if (verifiedArtworks.length === 0) {
    console.error('\nNo artworks verified. Aborting.');
    process.exit(1);
  }

  // Upsert in a single batch keyed on (source, external_id) — matches the UNIQUE
  // constraint in the migration.
  console.log(`\n→ Upserting ${verifiedArtworks.length} artworks`);
  const artworkRows = await upsert(
    'artworks',
    verifiedArtworks,
    'source,external_id',
  );
  const artworkByExternalId = new Map(artworkRows.map((a) => [a.external_id, a]));

  // 5. Scripture refs
  const scriptureRefs = [];
  for (const eng of engravings) {
    const artwork = artworkByExternalId.get(eng.wikimediaFile);
    if (!artwork) continue; // was skipped
    const bookId = bookBySlug.get(eng.bookSlug);
    if (!bookId) {
      console.warn(`   ! unknown book slug: ${eng.bookSlug}`);
      continue;
    }
    scriptureRefs.push({
      artwork_id: artwork.id,
      book_id: bookId,
      chapter: eng.chapter,
      verse_start: eng.verseStart ?? null,
      verse_end: eng.verseEnd ?? null,
      is_primary: true,
    });
  }

  console.log(`\n→ Upserting ${scriptureRefs.length} scripture refs`);
  await upsert(
    'artwork_scripture_refs',
    scriptureRefs,
    'artwork_id,book_id,chapter,verse_start,verse_end',
  );

  // 6. Scene joins
  const sceneJoins = [];
  for (const eng of engravings) {
    if (!eng.sceneSlug) continue;
    const artwork = artworkByExternalId.get(eng.wikimediaFile);
    if (!artwork) continue;
    const sceneId = sceneBySlug.get(eng.sceneSlug);
    if (!sceneId) {
      console.warn(`   ! unknown scene slug: ${eng.sceneSlug}`);
      continue;
    }
    sceneJoins.push({ artwork_id: artwork.id, scene_id: sceneId });
  }

  console.log(`\n→ Upserting ${sceneJoins.length} artwork↔scene joins`);
  if (sceneJoins.length > 0) {
    await upsert('artwork_scenes', sceneJoins, 'artwork_id,scene_id');
  }

  // ───────── Summary ─────────
  console.log('\n=== Done ===');
  console.log(`Ingested: ${verifiedArtworks.length} artworks`);
  console.log(`Skipped (image 404):  ${skipped.length}`);
  if (skipped.length > 0) {
    console.log('\nSkipped entries — replace the wikimediaFile field in src/data/art/dore.ts:');
    for (const s of skipped) {
      console.log(`  - ${s.externalId}  "${s.wikimediaFile}"`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
