#!/usr/bin/env node
/**
 * Ingest the next batch of public-domain biblical art from Wikimedia Commons:
 *   - Carl Bloch (Danish, 1834–1890)
 *   - Heinrich Hofmann (German, 1824–1911)
 *   - William-Adolphe Bouguereau (French, 1825–1905)
 *   - Bernhard Plockhorst (German, 1825–1907)
 *   - Andrei Rublev (Russian, c. 1360s–1430)
 *   - Theophanes the Greek (Byzantine/Russian, c. 1340 – c. 1410)
 *
 * Each artist gets its own `source` value (matches the per-artist convention
 * used by Doré, Tissot, Blake, etc.), so re-runs upsert idempotently on
 * (source, external_id).
 *
 * Filenames are pre-verified via the MediaWiki imageinfo API at curation
 * time; we trust them and skip per-file HEAD verification (Wikimedia
 * rate-limits Special:FilePath aggressively on bursts).
 *
 * Newly inserted artworks land at moderation_status='pending' (the default)
 * and need review at /admin/artwork-moderation before they go live.
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=your_key node scripts/ingest-wikimedia-extra.mjs
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

// ───────── Data loader ─────────
// All six data files share the same shape (externalId, title, wikimediaFile,
// year, medium, bookSlug, chapter, verse_*, sceneSlug?, description?).

function loadDataFile(relPath, exportName) {
  const path = resolve(__dirname, relPath);
  const source = readFileSync(path, 'utf8');
  const cleaned = source
    .replace(/export type [\s\S]*?^};/m, '')
    .replace(/export const (\w+): [^=]+=/g, 'export const $1 =');
  const re = new RegExp(`export const ${exportName}\\s*=\\s*(\\[[\\s\\S]*?^\\]);`, 'm');
  const match = cleaned.match(re);
  if (!match) throw new Error(`Failed to parse ${relPath} — expected ${exportName}`);
  // eslint-disable-next-line no-new-func
  return new Function(`return ${match[1]};`)();
}

// ───────── Sources ─────────

const SOURCES = [
  {
    source: 'bloch',
    artist: {
      slug: 'carl-bloch',
      name: 'Carl Heinrich Bloch',
      birth_year: 1834,
      death_year: 1890,
      nationality: 'Danish',
      bio: 'Carl Heinrich Bloch was a Danish painter best known for the 23-painting cycle on the life of Christ commissioned for the Chapel of Frederiksborg Castle (1865–1879). His warmly lit, intimate scenes are among the most widely reproduced devotional images of the 19th century.',
      wikipedia_url: 'https://en.wikipedia.org/wiki/Carl_Bloch',
    },
    licenseNote:
      'Public domain via Wikimedia Commons. Carl Heinrich Bloch (1834–1890), including the Frederiksborg Castle cycle on the life of Christ.',
    dataFile: '../src/data/art/bloch.ts',
    exportName: 'BLOCH_PAINTINGS',
  },
  {
    source: 'hofmann',
    artist: {
      slug: 'heinrich-hofmann',
      name: 'Heinrich Hofmann',
      birth_year: 1824,
      death_year: 1911,
      nationality: 'German',
      bio: 'Heinrich Hofmann was a German academic painter whose devotional images of Christ — most famously Christ in Gethsemane and Christ in the Temple — became some of the most widely reproduced religious paintings of the 19th and 20th centuries.',
      wikipedia_url: 'https://en.wikipedia.org/wiki/Heinrich_Hofmann_(painter)',
    },
    licenseNote: 'Public domain via Wikimedia Commons. Heinrich Hofmann (1824–1911).',
    dataFile: '../src/data/art/hofmann.ts',
    exportName: 'HOFMANN_PAINTINGS',
  },
  {
    source: 'bouguereau',
    artist: {
      slug: 'william-adolphe-bouguereau',
      name: 'William-Adolphe Bouguereau',
      birth_year: 1825,
      death_year: 1905,
      nationality: 'French',
      bio: 'William-Adolphe Bouguereau was a French academic painter whose religious works combined precise classical realism with sentimental devotional imagery. His Madonnas, Pietà, and Holy Family scenes were widely circulated as engravings and prints.',
      wikipedia_url: 'https://en.wikipedia.org/wiki/William-Adolphe_Bouguereau',
    },
    licenseNote: 'Public domain via Wikimedia Commons. William-Adolphe Bouguereau (1825–1905).',
    dataFile: '../src/data/art/bouguereau.ts',
    exportName: 'BOUGUEREAU_PAINTINGS',
  },
  {
    source: 'plockhorst',
    artist: {
      slug: 'bernhard-plockhorst',
      name: 'Bernhard Plockhorst',
      birth_year: 1825,
      death_year: 1907,
      nationality: 'German',
      bio: 'Bernhard Plockhorst was a German painter best known for his devotional religious images, including "Christ Blessing the Children", "The Good Shepherd", and "Guardian Angel" — works that circulated widely in chromolithograph form across Europe and North America.',
      wikipedia_url: 'https://en.wikipedia.org/wiki/Bernhard_Plockhorst',
    },
    licenseNote: 'Public domain via Wikimedia Commons. Bernhard Plockhorst (1825–1907).',
    dataFile: '../src/data/art/plockhorst.ts',
    exportName: 'PLOCKHORST_PAINTINGS',
  },
  {
    source: 'rublev',
    artist: {
      slug: 'andrei-rublev',
      name: 'Andrei Rublev',
      birth_year: 1360,
      death_year: 1430,
      nationality: 'Russian',
      bio: 'Andrei Rublev was a medieval Russian iconographer canonized by the Russian Orthodox Church. Surviving works attributed to him include the Hospitality of Abraham (the icon often called the "Old Testament Trinity") and the festal tier of the Annunciation Cathedral in the Moscow Kremlin (c. 1405).',
      wikipedia_url: 'https://en.wikipedia.org/wiki/Andrei_Rublev',
    },
    licenseNote:
      'Public domain via Wikimedia Commons. Andrei Rublev (c. 1360s–1430), medieval Russian iconographer.',
    dataFile: '../src/data/art/rublev.ts',
    exportName: 'RUBLEV_ICONS',
  },
  {
    source: 'theophanes',
    artist: {
      slug: 'theophanes-the-greek',
      name: 'Theophanes the Greek',
      birth_year: 1340,
      death_year: 1410,
      nationality: 'Byzantine Greek (worked in Russia)',
      bio: 'Theophanes the Greek was a Byzantine-trained icon painter and muralist who worked in Constantinople, Novgorod, and Moscow. Among his surviving works are the frescoes at the Church of the Transfiguration on Ilyin Street (Novgorod, 1378) and icons of the Deësis tier at the Annunciation Cathedral in Moscow.',
      wikipedia_url: 'https://en.wikipedia.org/wiki/Theophanes_the_Greek',
    },
    licenseNote:
      'Public domain via Wikimedia Commons. Theophanes the Greek (c. 1340 – c. 1410), Byzantine icon painter and muralist.',
    dataFile: '../src/data/art/theophanes.ts',
    exportName: 'THEOPHANES_ICONS',
  },
];

// ───────── Main ─────────

async function main() {
  if (!SUPABASE_SERVICE_KEY) {
    console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var');
    process.exit(1);
  }

  console.log('=== Wikimedia Extra Ingest ===\n');

  // Reuse existing scenes + books; we don't introduce new ones here.
  const scenes = await supabaseSelect('scenes', 'select=id,slug');
  const sceneBySlug = new Map(scenes.map((s) => [s.slug, s.id]));
  console.log(`Reusing ${scenes.length} existing scenes`);

  const books = await supabaseSelect('books', 'select=id,slug');
  const bookBySlug = new Map(books.map((b) => [b.slug, b.id]));
  console.log(`Reusing ${books.length} existing books\n`);

  let grandTotal = 0;

  for (const src of SOURCES) {
    console.log(`\n──── ${src.artist.name} (${src.source}) ────`);

    const items = loadDataFile(src.dataFile, src.exportName);
    console.log(`Loaded ${items.length} items from ${src.dataFile}`);

    // 1. Upsert artist
    const [artist] = await upsert('artists', [src.artist], 'slug');
    console.log(`Artist id: ${artist.id}`);

    // 2. Build artwork rows
    const artworkRows = items.map((p) => ({
      slug: p.externalId,
      title: p.title,
      artist_id: artist.id,
      year: p.year,
      medium: p.medium,
      source: src.source,
      source_url: wikimediaSourceUrl(p.wikimediaFile),
      external_id: p.wikimediaFile,
      image_url: wikimediaImageUrl(p.wikimediaFile),
      thumbnail_url: wikimediaThumbUrl(p.wikimediaFile),
      license: 'public_domain',
      license_note: src.licenseNote,
      description: p.description ?? null,
      status: 'published',
      // moderation_status defaults to 'pending' — these need admin review
      // before they appear in the reader-facing feed.
    }));

    // 3. Batched upsert
    const BATCH = 100;
    const upsertedArtworks = [];
    for (let i = 0; i < artworkRows.length; i += BATCH) {
      const chunk = artworkRows.slice(i, i + BATCH);
      const rows = await upsert('artworks', chunk, 'source,external_id');
      upsertedArtworks.push(...rows);
    }
    console.log(`Upserted ${upsertedArtworks.length} artworks`);
    const artworkByExternalId = new Map(upsertedArtworks.map((a) => [a.external_id, a]));

    // 4. Scripture refs
    const scriptureRefs = [];
    for (const p of items) {
      const artwork = artworkByExternalId.get(p.wikimediaFile);
      if (!artwork) continue;
      const bookId = bookBySlug.get(p.bookSlug);
      if (!bookId) {
        console.warn(`  ! unknown book slug: ${p.bookSlug}`);
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
    if (scriptureRefs.length > 0) {
      for (let i = 0; i < scriptureRefs.length; i += BATCH) {
        const chunk = scriptureRefs.slice(i, i + BATCH);
        await upsert('artwork_scripture_refs', chunk, 'artwork_id,book_id,chapter,verse_start,verse_end');
      }
      console.log(`Upserted ${scriptureRefs.length} scripture refs`);
    }

    // 5. Scene joins
    const sceneJoins = [];
    for (const p of items) {
      if (!p.sceneSlug) continue;
      const artwork = artworkByExternalId.get(p.wikimediaFile);
      if (!artwork) continue;
      const sceneId = sceneBySlug.get(p.sceneSlug);
      if (!sceneId) {
        console.warn(`  ! unknown scene slug: ${p.sceneSlug}`);
        continue;
      }
      sceneJoins.push({ artwork_id: artwork.id, scene_id: sceneId });
    }
    if (sceneJoins.length > 0) {
      for (let i = 0; i < sceneJoins.length; i += BATCH) {
        const chunk = sceneJoins.slice(i, i + BATCH);
        await upsert('artwork_scenes', chunk, 'artwork_id,scene_id');
      }
      console.log(`Upserted ${sceneJoins.length} scene joins`);
    }

    grandTotal += upsertedArtworks.length;
  }

  console.log(`\n=== Done ===`);
  console.log(`Total artworks ingested across all sources: ${grandTotal}`);
  console.log(`All new rows are at moderation_status='pending' — review at /admin/artwork-moderation`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
