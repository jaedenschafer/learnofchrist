#!/usr/bin/env node
/**
 * Ingest the Codex Amiatinus (Florence, Biblioteca Medicea Laurenziana,
 * Amiat. 1) — the oldest surviving complete Latin Vulgate manuscript,
 * made c. 700 AD at Monkwearmouth-Jarrow Abbey in Northumbria, England,
 * and brought to Italy as a gift for Pope Gregory II.
 *
 * Where Vivian Bible (BnF Latin 1, 845) is a Carolingian Tours bible,
 * Codex Amiatinus is ~150 years older — early Anglo-Saxon, transitional
 * insular/uncial. Both as parallel "ancient manuscript" overlays make
 * the chapter view visually richer: readers see two different scribal
 * traditions for the same chapter.
 *
 * IIIF v2 manifest: https://cdm21059.contentdm.oclc.org/iiif/amiatino:2059/manifest.json
 * Image URL pattern: https://cdm21059.contentdm.oclc.org/iiif/2/amiatino:{N}/full/full/0/default.jpg
 * 2,059 canvases (= 1,029 folios + binding/guards) covering the entire Vulgate
 *
 * Folio→chapter mapping is uniform linear interpolation across the
 * Vulgate book sequence, mirroring scripts/ingest-vivian-bible.mjs.
 *
 * Each entry is tagged:
 *   medium = 'Anglo-Saxon Vulgate manuscript folio (Monkwearmouth-Jarrow)'
 *   tags   = ['manuscript-page', 'anglo-saxon', 'vulgate', 'monkwearmouth-jarrow']
 *
 * source = 'gap_fill'. Bulk-approvable via scripts/approve-gap-fill.mjs.
 *
 * Note: this targets ALL Vulgate chapters (not just bare ones), unlike
 * the Vivian Bible script. The Vivian Bible run already covered every
 * bare chapter; this run adds Codex Amiatinus as a SECOND manuscript
 * folio per chapter, so the chapter view shows both Anglo-Saxon (700 AD)
 * and Carolingian (845) parchment side-by-side. Slug uniqueness is
 * preserved by prefixing with 'codex-amiatinus-'.
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=your_key node scripts/ingest-codex-amiatinus.mjs
 *
 * Idempotent — safe to re-run.
 */

const SUPABASE_URL = 'https://uqcgieillyvefzmohzpn.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_SERVICE_KEY) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var');
  process.exit(1);
}

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
    headers: { apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}` },
  });
  if (!res.ok) throw new Error(`Select ${table} -> ${res.status}: ${await res.text()}`);
  return res.json();
}

async function upsert(table, rows, onConflict) {
  return supabaseRequest('POST', `${table}?on_conflict=${onConflict}`, rows);
}

const VULGATE_ORDER = [
  'genesis', 'exodus', 'leviticus', 'numbers', 'deuteronomy',
  'joshua', 'judges', 'ruth', '1-samuel', '2-samuel', '1-kings', '2-kings',
  '1-chronicles', '2-chronicles', 'ezra', 'nehemiah',
  'tobit', 'judith', 'esther',
  'job', 'psalms', 'proverbs', 'ecclesiastes', 'song-of-solomon',
  'wisdom-of-solomon', 'sirach',
  'isaiah', 'jeremiah', 'lamentations', 'baruch', 'ezekiel', 'daniel',
  'hosea', 'joel', 'amos', 'obadiah', 'jonah', 'micah',
  'nahum', 'habakkuk', 'zephaniah', 'haggai', 'zechariah', 'malachi',
  '1-maccabees', '2-maccabees',
  'matthew', 'mark', 'luke', 'john',
  'acts',
  'romans', '1-corinthians', '2-corinthians', 'galatians', 'ephesians',
  'philippians', 'colossians', '1-thessalonians', '2-thessalonians',
  '1-timothy', '2-timothy', 'titus', 'philemon', 'hebrews',
  'james', '1-peter', '2-peter', '1-john', '2-john', '3-john', 'jude',
  'revelation',
];

// Codex Amiatinus IIIF service: 2,059 canvases (one per folio side, plus
// binding/guard pages). The biblical text is on canvases roughly 4..2055
// (skipping the binding + flyleaves at the start and end).

const FIRST_TEXT_CANVAS = 4;
const LAST_TEXT_CANVAS = 2055;
const CANVAS_RANGE = LAST_TEXT_CANVAS - FIRST_TEXT_CANVAS;

function imageUrl(n) {
  return `https://cdm21059.contentdm.oclc.org/iiif/2/amiatino:${n}/full/full/0/default.jpg`;
}
function thumbnailUrl(n) {
  return `https://cdm21059.contentdm.oclc.org/iiif/2/amiatino:${n}/full/,400/0/default.jpg`;
}
function sourceUrl(n) {
  return `https://cdm21059.contentdm.oclc.org/digital/collection/amiatino/id/${n}`;
}

async function main() {
  console.log('=== Codex Amiatinus Ingest (Florence, Amiat. 1) ===\n');

  const books = await supabaseSelect('books', 'select=id,slug,name,total_chapters');
  const bookBySlug = new Map(books.map((b) => [b.slug, b]));

  // Build the Vulgate-sequence chapter list
  const sequence = [];
  let pos = 1;
  for (const slug of VULGATE_ORDER) {
    const book = bookBySlug.get(slug);
    if (!book) {
      console.warn(`  ! unknown book slug: ${slug}`);
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
  console.log(`Total Vulgate chapters: ${totalChapters}`);

  function vulgatePosToCanvas(vulgatePos) {
    return FIRST_TEXT_CANVAS + Math.round(((vulgatePos - 1) * CANVAS_RANGE) / (totalChapters - 1));
  }

  // Upsert artist
  const [artist] = await upsert(
    'artists',
    [{
      slug: 'codex-amiatinus-master',
      name: 'Master of the Codex Amiatinus (Monkwearmouth-Jarrow scriptorium)',
      birth_year: null,
      death_year: null,
      nationality: 'Anglo-Saxon (Northumbrian)',
      bio: 'Anonymous Anglo-Saxon scribes and illuminators at the twin Northumbrian monasteries of Monkwearmouth and Jarrow, who under Abbot Ceolfrith produced the Codex Amiatinus c. 700 AD — the oldest surviving complete copy of the Latin Vulgate, originally one of three pandect Bibles commissioned for the abbey and intended as a gift for Pope Gregory II in Rome.',
      wikipedia_url: 'https://en.wikipedia.org/wiki/Codex_Amiatinus',
    }],
    'slug',
  );
  console.log(`Artist id: ${artist.id}`);

  // Build artwork rows for every Vulgate chapter
  const artworkRows = sequence.map((s) => {
    const canvas = vulgatePosToCanvas(s.vulgatePos);
    return {
      slug: `codex-amiatinus-${s.bookSlug}-ch${s.chapter}`,
      title: `Codex Amiatinus, ${s.bookName} ${s.chapter} (canvas ${canvas})`,
      artist_id: artist.id,
      year: 700,
      medium: 'Anglo-Saxon Vulgate manuscript folio (Monkwearmouth-Jarrow scriptorium)',
      source: 'gap_fill',
      source_url: sourceUrl(canvas),
      external_id: `codex-amiatinus-c${canvas}-${s.bookSlug}-${s.chapter}`,
      image_url: imageUrl(canvas),
      thumbnail_url: thumbnailUrl(canvas),
      license: 'public_domain',
      license_note:
        'Public domain. Codex Amiatinus, Biblioteca Medicea Laurenziana, Florence, Amiat. 1, c. 700 AD. Image hosted by Florence Laurenziana via OCLC ContentDM IIIF service. Folio→chapter mapping is approximate — uniform linear interpolation across the Vulgate sequence.',
      description: `Folio of the Codex Amiatinus, the oldest surviving complete Latin Vulgate manuscript, made c. 700 AD at the twin Northumbrian monasteries of Monkwearmouth and Jarrow under Abbot Ceolfrith. Approximately corresponds to ${s.bookName} ${s.chapter} in Vulgate book order. The page shows the actual eighth-century insular-uncial script as it would have been read by the monks who produced it for Pope Gregory II.`,
      tags: ['manuscript-page', 'anglo-saxon', 'vulgate', 'monkwearmouth-jarrow'],
      status: 'published',
    };
  });

  console.log(`Upserting ${artworkRows.length} artwork rows in batches of 100...`);
  const upserted = [];
  const BATCH = 100;
  for (let i = 0; i < artworkRows.length; i += BATCH) {
    const chunk = artworkRows.slice(i, i + BATCH);
    const rows = await upsert('artworks', chunk, 'source,external_id');
    upserted.push(...rows);
    if ((i / BATCH) % 5 === 0) {
      console.log(`  batch ${i / BATCH + 1}: ${rows.length} (total ${upserted.length})`);
    }
  }
  console.log(`Done — ${upserted.length} upserted\n`);

  const artworkByExternalId = new Map(upserted.map((a) => [a.external_id, a]));

  const refRows = [];
  for (const s of sequence) {
    const canvas = vulgatePosToCanvas(s.vulgatePos);
    const externalId = `codex-amiatinus-c${canvas}-${s.bookSlug}-${s.chapter}`;
    const artwork = artworkByExternalId.get(externalId);
    if (!artwork) continue;
    refRows.push({
      artwork_id: artwork.id,
      book_id: s.bookId,
      chapter: s.chapter,
      verse_start: null,
      verse_end: null,
      is_primary: false,
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
