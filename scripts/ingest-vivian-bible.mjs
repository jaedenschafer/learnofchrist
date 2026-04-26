#!/usr/bin/env node
/**
 * Ingest the Vivian Bible (Bibliothèque nationale de France, Latin 1) —
 * also known as the First Bible of Charles the Bald, made at the Abbey
 * of Saint-Martin de Tours, c. 845 AD — as a fallback "ancient manuscript
 * page" for every currently-bare protocanon + deuterocanon chapter.
 *
 * The Vivian Bible has 866 IIIF canvases covering the entire Vulgate.
 * Most folios are text-only (only ~14 are painted full-page), so the user
 * sees a real Carolingian manuscript page corresponding (approximately)
 * to the chapter they're studying — even when no narrative artwork exists.
 *
 * Each entry is tagged:
 *   medium = 'Carolingian Vulgate manuscript folio (Tours scriptorium)'
 *   tags   = ['manuscript-page', 'carolingian', 'vulgate']
 *
 * The reader-side UI can use the 'manuscript-page' tag to distinguish
 * these from painted artworks — e.g. group them under an "Ancient
 * Manuscript" heading in the chapter view.
 *
 * Image URLs hit Gallica's IIIF service directly:
 *   https://gallica.bnf.fr/iiif/ark:/12148/btv1b8455903b/f{N}/full/full/0/native.jpg
 *
 * Folio mapping is gap-aware:
 *   1. Query Supabase for all currently approved chapter coverage.
 *   2. For each bare chapter (in Vulgate book order), compute its
 *      Vulgate-sequence position 1..1326.
 *   3. Map that position linearly to folio 10..830 (skipping the 9-folio
 *      prefatory matter and the 36-folio back matter).
 *   4. Generate one entry per bare chapter.
 *
 * The mapping is approximate — Vulgate book chapter counts aren't
 * uniform, so a Psalms chapter and a Genesis chapter take different
 * amounts of physical manuscript space. The license_note flags this.
 *
 * source = 'gap_fill'. Bulk-approvable via scripts/approve-gap-fill.mjs.
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=your_key node scripts/ingest-vivian-bible.mjs
 *
 * Idempotent — safe to re-run.
 */

const SUPABASE_URL = 'https://uqcgieillyvefzmohzpn.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_SERVICE_KEY) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var');
  process.exit(1);
}

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

// ───────── Vulgate book order (used for chapter-position computation) ─────────
// This is the Vulgate Latin Bible order, which the Vivian Bible follows.
// Deuterocanonical books are interleaved as in the Catholic canon.

const VULGATE_ORDER = [
  // Pentateuch
  'genesis', 'exodus', 'leviticus', 'numbers', 'deuteronomy',
  // Historical books
  'joshua', 'judges', 'ruth', '1-samuel', '2-samuel', '1-kings', '2-kings',
  '1-chronicles', '2-chronicles', 'ezra', 'nehemiah',
  // Deuterocanonical historical
  'tobit', 'judith', 'esther',
  // Wisdom
  'job', 'psalms', 'proverbs', 'ecclesiastes', 'song-of-solomon',
  'wisdom-of-solomon', 'sirach',
  // Major prophets + Lamentations + Baruch
  'isaiah', 'jeremiah', 'lamentations', 'baruch', 'ezekiel', 'daniel',
  // Minor prophets
  'hosea', 'joel', 'amos', 'obadiah', 'jonah', 'micah',
  'nahum', 'habakkuk', 'zephaniah', 'haggai', 'zechariah', 'malachi',
  // Maccabees
  '1-maccabees', '2-maccabees',
  // Gospels
  'matthew', 'mark', 'luke', 'john',
  // Acts
  'acts',
  // Pauline epistles
  'romans', '1-corinthians', '2-corinthians', 'galatians', 'ephesians',
  'philippians', 'colossians', '1-thessalonians', '2-thessalonians',
  '1-timothy', '2-timothy', 'titus', 'philemon', 'hebrews',
  // Catholic epistles
  'james', '1-peter', '2-peter', '1-john', '2-john', '3-john', 'jude',
  // Revelation
  'revelation',
];

// ───────── Gallica IIIF helpers ─────────

const ARK = 'btv1b8455903b';

function imageUrl(folioPage) {
  return `https://gallica.bnf.fr/iiif/ark:/12148/${ARK}/f${folioPage}/full/full/0/native.jpg`;
}
function thumbnailUrl(folioPage) {
  // IIIF service can produce thumbnails on demand
  return `https://gallica.bnf.fr/iiif/ark:/12148/${ARK}/f${folioPage}/full/,400/0/native.jpg`;
}
function sourceUrl(folioPage) {
  return `https://gallica.bnf.fr/ark:/12148/${ARK}/f${folioPage}.item`;
}

// ───────── Main ─────────

async function main() {
  console.log('=== Vivian Bible Ingest (BnF Latin 1) ===\n');

  // 1. Get all books
  const books = await supabaseSelect('books', 'select=id,slug,name,total_chapters');
  const bookBySlug = new Map(books.map((b) => [b.slug, b]));

  // 2. Get current approved coverage so we only target bare chapters
  let allRefs = [];
  let offset = 0;
  while (true) {
    const page = await supabaseSelect(
      'artwork_scripture_refs',
      `select=book_id,chapter,artwork:artworks!inner(moderation_status)&artwork.moderation_status=eq.approved&limit=1000&offset=${offset}`,
    );
    if (!page.length) break;
    allRefs = allRefs.concat(page);
    if (page.length < 1000) break;
    offset += 1000;
  }
  const coveredByBook = new Map();
  for (const r of allRefs) {
    if (!coveredByBook.has(r.book_id)) coveredByBook.set(r.book_id, new Set());
    coveredByBook.get(r.book_id).add(r.chapter);
  }
  console.log(`Currently approved coverage: ${allRefs.length} refs, across ${coveredByBook.size} books`);

  // 3. Build the Vulgate-sequence chapter list
  const sequence = []; // each item: { bookSlug, bookName, bookId, chapter, vulgatePos }
  let pos = 1;
  for (const slug of VULGATE_ORDER) {
    const book = bookBySlug.get(slug);
    if (!book) {
      console.warn(`  ! unknown book slug in Vulgate order: ${slug}`);
      continue;
    }
    for (let ch = 1; ch <= book.total_chapters; ch++) {
      sequence.push({
        bookSlug: slug,
        bookName: book.name,
        bookId: book.id,
        chapter: ch,
        vulgatePos: pos,
      });
      pos += 1;
    }
  }
  const totalChapters = sequence.length;
  console.log(`Total Vulgate chapters (with deuterocanon): ${totalChapters}`);

  // 4. Filter to bare chapters
  const bareChapters = sequence.filter((s) => {
    const cov = coveredByBook.get(s.bookId);
    return !cov || !cov.has(s.chapter);
  });
  console.log(`Bare chapters (no approved art): ${bareChapters.length}\n`);

  // 5. Map each bare chapter to a Vivian Bible folio.
  // The manuscript has 866 canvases. f.1-9 are prefatory, f.~830-866 are
  // back matter. We use folio range 10..830 = 821 sides for 1326 chapters.
  const FIRST_TEXT_FOLIO = 10;
  const LAST_TEXT_FOLIO = 830;
  const FOLIO_RANGE = LAST_TEXT_FOLIO - FIRST_TEXT_FOLIO; // 820

  function vulgatePosToFolio(vulgatePos) {
    return FIRST_TEXT_FOLIO + Math.round(((vulgatePos - 1) * FOLIO_RANGE) / (totalChapters - 1));
  }

  // 6. Get/upsert the artist
  const [artist] = await upsert(
    'artists',
    [{
      slug: 'vivian-bible-master',
      name: 'Master C. (Vivian Bible illuminator)',
      birth_year: null,
      death_year: null,
      nationality: 'Carolingian (Frankish, Tours scriptorium)',
      bio: 'Anonymous Carolingian illuminator — known to scholars as "Maître C." — who, c. 845 at the Abbey of Saint-Martin de Tours, executed the First Bible of Charles the Bald (Bibliothèque nationale de France, Latin 1), commissioned by Count Vivien, lay-abbot of Saint-Martin. The manuscript is one of the supreme achievements of Tours-scriptorium book art.',
      wikipedia_url: 'https://en.wikipedia.org/wiki/First_Bible_of_Charles_the_Bald',
    }],
    'slug',
  );
  console.log(`Artist id: ${artist.id}\n`);

  // 7. Build all artwork rows
  const artworkRows = bareChapters.map((s) => {
    const folio = vulgatePosToFolio(s.vulgatePos);
    return {
      slug: `vivian-bible-${s.bookSlug}-ch${s.chapter}`,
      title: `Vivian Bible, ${s.bookName} ${s.chapter} (folio ${folio})`,
      artist_id: artist.id,
      year: 845,
      medium: 'Carolingian Vulgate manuscript folio (Tours scriptorium)',
      source: 'gap_fill',
      source_url: sourceUrl(folio),
      external_id: `vivian-bible-f${folio}-${s.bookSlug}-${s.chapter}`,
      image_url: imageUrl(folio),
      thumbnail_url: thumbnailUrl(folio),
      license: 'public_domain',
      license_note:
        'Public domain. First Bible of Charles the Bald (Bible de Vivien), Bibliothèque nationale de France, Latin 1, c. 845 AD. Image hosted by gallica.bnf.fr under their open IIIF service. Folio→chapter mapping is approximate (uniform linear interpolation across the Vulgate sequence — most folios show Latin text, only ~14 are painted full-page).',
      description: `Folio ${folio} of the First Bible of Charles the Bald, an extant Carolingian Vulgate manuscript from the Tours scriptorium (c. 845). Approximately corresponds to ${s.bookName} ${s.chapter} in Vulgate book order. The folio shows the actual ninth-century Latin text and decoration as it would have been read in the Carolingian court.`,
      tags: ['manuscript-page', 'carolingian', 'vulgate', 'tours-scriptorium'],
      status: 'published',
    };
  });

  // 8. Upsert in batches
  console.log(`Upserting ${artworkRows.length} artwork rows in batches of 100...`);
  const upserted = [];
  const BATCH = 100;
  for (let i = 0; i < artworkRows.length; i += BATCH) {
    const chunk = artworkRows.slice(i, i + BATCH);
    const rows = await upsert('artworks', chunk, 'source,external_id');
    upserted.push(...rows);
    if ((i / BATCH) % 10 === 0) {
      console.log(`  batch ${i / BATCH + 1}: ${rows.length} upserted (total ${upserted.length})`);
    }
  }
  console.log(`Done — ${upserted.length} upserted\n`);

  const artworkByExternalId = new Map(upserted.map((a) => [a.external_id, a]));

  // 9. Build scripture refs
  const refRows = [];
  for (const s of bareChapters) {
    const folio = vulgatePosToFolio(s.vulgatePos);
    const externalId = `vivian-bible-f${folio}-${s.bookSlug}-${s.chapter}`;
    const artwork = artworkByExternalId.get(externalId);
    if (!artwork) continue;
    refRows.push({
      artwork_id: artwork.id,
      book_id: s.bookId,
      chapter: s.chapter,
      verse_start: null,
      verse_end: null,
      is_primary: false, // these are ancient-manuscript context, not the primary art for the chapter
    });
  }

  console.log(`Upserting ${refRows.length} scripture refs in batches of 100...`);
  for (let i = 0; i < refRows.length; i += BATCH) {
    const chunk = refRows.slice(i, i + BATCH);
    await upsert('artwork_scripture_refs', chunk, 'artwork_id,book_id,chapter,verse_start,verse_end');
  }
  console.log('Done\n');

  console.log('=== Done ===');
  console.log(`Total entries ingested: ${upserted.length}`);
  console.log(`Bulk-approve via:  node scripts/approve-gap-fill.mjs --apply`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
