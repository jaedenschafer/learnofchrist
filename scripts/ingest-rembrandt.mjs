#!/usr/bin/env node
/**
 * Ingest Rembrandt van Rijn's biblical paintings and etchings into Supabase.
 *
 * Reads src/data/art/rembrandt.ts (52 curated plates verified on Wikimedia
 * Commons), then:
 *   1. Upserts the Rembrandt van Rijn artist record
 *   2. Reuses existing scene records (created during Doré ingestion)
 *   3. For each plate:
 *        - Resolves the Wikimedia image URL via Special:FilePath
 *        - Optionally verifies HEAD (SKIP_VERIFY=1 by default)
 *        - Upserts artwork (idempotent via source+external_id)
 *        - Upserts artwork_scripture_refs
 *        - Upserts artwork_scenes join
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=your_key node scripts/ingest-rembrandt.mjs
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

// ───────── Parse rembrandt.ts without TS/bundler ─────────

function loadRembrandtData() {
  const path = resolve(__dirname, '../src/data/art/rembrandt.ts');
  const source = readFileSync(path, 'utf8');

  const cleaned = source
    .replace(/export type [\s\S]*?^};/m, '')
    .replace(/export const (\w+): [^=]+=/g, 'export const $1 =');

  const match = cleaned.match(/export const REMBRANDT_PLATES\s*=\s*(\[[\s\S]*?^\]);/m);
  if (!match) {
    throw new Error('Failed to parse rembrandt.ts — expected REMBRANDT_PLATES array literal');
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

const WIKI_UA = 'LearnOfChrist/1.0 (https://learnofchrist.com; contact: podcaststudioaz@gmail.com)';

async function verifyImageExists(url, attempt = 0) {
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      headers: { 'User-Agent': WIKI_UA },
    });
    if (res.ok) return true;
    if (res.status === 429 && attempt < 4) {
      const backoff = 1500 * Math.pow(2, attempt);
      await new Promise((r) => setTimeout(r, backoff));
      return verifyImageExists(url, attempt + 1);
    }
    return false;
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

  console.log('=== Rembrandt van Rijn Biblical Works Ingest ===\n');

  const { plates } = loadRembrandtData();
  console.log(`Loaded ${plates.length} plates from rembrandt.ts`);

  // 1. Artist
  console.log('\n→ Upserting artist: Rembrandt van Rijn');
  const [artist] = await upsert(
    'artists',
    [{
      slug: 'rembrandt-van-rijn',
      name: 'Rembrandt van Rijn',
      birth_year: 1606,
      death_year: 1669,
      nationality: 'Dutch',
      bio: 'Rembrandt Harmenszoon van Rijn was a Dutch Golden Age painter and printmaker whose biblical works — in oil, panel, and etching — remain among the most psychologically searching treatments of Scripture in Western art.',
      wikipedia_url: 'https://en.wikipedia.org/wiki/Rembrandt',
    }],
    'slug',
  );
  console.log(`   artist id = ${artist.id}`);

  // 2. Scenes (reuse existing — created during Doré ingestion)
  const scenes = await supabaseSelect('scenes', 'select=id,slug');
  const sceneBySlug = new Map(scenes.map((s) => [s.slug, s.id]));
  console.log(`   reusing ${scenes.length} existing scenes`);

  // 3. Look up book ids
  const books = await supabaseSelect('books', 'select=id,slug');
  const bookBySlug = new Map(books.map((b) => [b.slug, b.id]));

  // 4. Artworks
  console.log(`\n→ Processing ${plates.length} plates`);
  const verifiedArtworks = [];
  const skipped = [];

  const SKIP_VERIFY = process.env.SKIP_VERIFY !== '0';

  for (const p of plates) {
    const imageUrl = wikimediaImageUrl(p.wikimediaFile);
    const thumbnailUrl = wikimediaThumbUrl(p.wikimediaFile);
    const sourceUrl = wikimediaSourceUrl(p.wikimediaFile);

    if (!SKIP_VERIFY) {
      process.stdout.write(`   ${p.externalId.padEnd(60)}`);
      const ok = await verifyImageExists(imageUrl);
      if (!ok) {
        console.log(' ✗ (image not found on Wikimedia)');
        skipped.push(p);
        continue;
      }
      console.log(' ✓');
    }

    verifiedArtworks.push({
      slug: p.externalId,
      title: p.title,
      artist_id: artist.id,
      year: p.year,
      medium: p.medium,
      // TODO: flip to 'rembrandt' after supabase/migrations/006_art_source_rembrandt.sql
      // has been applied (that migration also re-UPDATEs these rows).
      source: 'other_public_domain',
      source_url: sourceUrl,
      external_id: p.wikimediaFile,
      image_url: imageUrl,
      thumbnail_url: thumbnailUrl,
      license: 'public_domain',
      license_note: 'Public domain via Wikimedia Commons. Rembrandt van Rijn (1606–1669), biblical paintings and etchings.',
      description: p.description ?? null,
      status: 'published',
    });
  }

  if (verifiedArtworks.length === 0) {
    console.error('\nNo artworks verified. Aborting.');
    process.exit(1);
  }

  // Upsert in batches — PostgREST has a row-size limit around ~1MB
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

  // ───────── Summary ─────────
  console.log('\n=== Done ===');
  console.log(`Ingested: ${verifiedArtworks.length} plates`);
  console.log(`Skipped (image 404):  ${skipped.length}`);
  if (skipped.length > 0) {
    console.log('\nSkipped entries:');
    for (const s of skipped) {
      console.log(`  - ${s.externalId}  "${s.wikimediaFile}"`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
