#!/usr/bin/env node
/**
 * Seed ASV or WEB Bible text into Supabase
 * Downloads public domain Bible JSON from bible-tools/data on GitHub
 * Source: https://github.com/bible-tools/data (public domain)
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=your_key node scripts/seed-translation.mjs asv
 *   SUPABASE_SERVICE_ROLE_KEY=your_key node scripts/seed-translation.mjs web
 */

const SUPABASE_URL = 'https://uqcgieillyvefzmohzpn.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const TRANSLATION = process.argv[2]?.toLowerCase();
if (!TRANSLATION || !['asv', 'web'].includes(TRANSLATION)) {
  console.error('Usage: node scripts/seed-translation.mjs <asv|web>');
  process.exit(1);
}

const SOURCE_URL = `https://raw.githubusercontent.com/bible-tools/data/master/translations/en/${TRANSLATION.toUpperCase()}/index.json`;

// Map source book names to our database slugs
const BOOK_NAME_TO_SLUG = {
  'Genesis': 'genesis', 'Exodus': 'exodus', 'Leviticus': 'leviticus',
  'Numbers': 'numbers', 'Deuteronomy': 'deuteronomy', 'Joshua': 'joshua',
  'Judges': 'judges', 'Ruth': 'ruth',
  '1 Samuel': '1-samuel', 'I Samuel': '1-samuel',
  '2 Samuel': '2-samuel', 'II Samuel': '2-samuel',
  '1 Kings': '1-kings', 'I Kings': '1-kings',
  '2 Kings': '2-kings', 'II Kings': '2-kings',
  '1 Chronicles': '1-chronicles', 'I Chronicles': '1-chronicles',
  '2 Chronicles': '2-chronicles', 'II Chronicles': '2-chronicles',
  'Ezra': 'ezra', 'Nehemiah': 'nehemiah', 'Esther': 'esther',
  'Job': 'job', 'Psalms': 'psalms', 'Psalm': 'psalms',
  'Proverbs': 'proverbs', 'Ecclesiastes': 'ecclesiastes',
  'Song of Solomon': 'song-of-solomon', 'Song of Songs': 'song-of-solomon',
  'Isaiah': 'isaiah', 'Jeremiah': 'jeremiah', 'Lamentations': 'lamentations',
  'Ezekiel': 'ezekiel', 'Daniel': 'daniel', 'Hosea': 'hosea',
  'Joel': 'joel', 'Amos': 'amos', 'Obadiah': 'obadiah',
  'Jonah': 'jonah', 'Micah': 'micah', 'Nahum': 'nahum',
  'Habakkuk': 'habakkuk', 'Zephaniah': 'zephaniah', 'Haggai': 'haggai',
  'Zechariah': 'zechariah', 'Malachi': 'malachi',
  'Matthew': 'matthew', 'Mark': 'mark', 'Luke': 'luke', 'John': 'john',
  'Acts': 'acts', 'Romans': 'romans',
  '1 Corinthians': '1-corinthians', 'I Corinthians': '1-corinthians',
  '2 Corinthians': '2-corinthians', 'II Corinthians': '2-corinthians',
  'Galatians': 'galatians', 'Ephesians': 'ephesians',
  'Philippians': 'philippians', 'Colossians': 'colossians',
  '1 Thessalonians': '1-thessalonians', 'I Thessalonians': '1-thessalonians',
  '2 Thessalonians': '2-thessalonians', 'II Thessalonians': '2-thessalonians',
  '1 Timothy': '1-timothy', 'I Timothy': '1-timothy',
  '2 Timothy': '2-timothy', 'II Timothy': '2-timothy',
  'Titus': 'titus', 'Philemon': 'philemon', 'Hebrews': 'hebrews',
  'James': 'james',
  '1 Peter': '1-peter', 'I Peter': '1-peter',
  '2 Peter': '2-peter', 'II Peter': '2-peter',
  '1 John': '1-john', 'I John': '1-john',
  '2 John': '2-john', 'II John': '2-john',
  '3 John': '3-john', 'III John': '3-john',
  'Jude': 'jude', 'Revelation': 'revelation', 'Revelation of John': 'revelation',
};

async function supabaseInsert(table, rows) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify(rows),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Insert failed (${res.status}): ${text}`);
  }
}

async function supabaseSelect(table, params = '') {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${params}`, {
    headers: {
      'apikey': SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
    },
  });
  return res.json();
}

async function main() {
  if (!SUPABASE_SERVICE_KEY) {
    console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var');
    process.exit(1);
  }

  console.log(`=== ${TRANSLATION.toUpperCase()} Bible Seeder ===\n`);

  // 1. Get translation ID
  const translations = await supabaseSelect('translations', `abbreviation=eq.${TRANSLATION}`);
  if (!translations.length) {
    console.error(`${TRANSLATION.toUpperCase()} not found in translations table. Run migrations first.`);
    process.exit(1);
  }
  const translationId = translations[0].id;
  console.log(`${TRANSLATION.toUpperCase()} ID: ${translationId}`);

  // 2. Get all book IDs
  const books = await supabaseSelect('books', 'order=sort_order&select=id,slug,name');
  const bookMap = {};
  for (const b of books) bookMap[b.slug] = b.id;
  console.log(`Found ${books.length} books\n`);

  // 3. Check if already seeded
  const existing = await supabaseSelect('verses', 'select=id&limit=1&translation_id=eq.' + translationId);
  if (existing.length > 0) {
    console.log(`${TRANSLATION.toUpperCase()} already seeded! Skipping.`);
    return;
  }

  // 4. Download the full translation file
  console.log(`Downloading ${TRANSLATION.toUpperCase()} from ${SOURCE_URL}...`);
  const res = await fetch(SOURCE_URL);
  if (!res.ok) throw new Error(`Failed to download: HTTP ${res.status}`);
  const data = await res.json();
  console.log(`Downloaded. Found ${data.books.length} books.\n`);

  // 5. Process each book
  let totalVerses = 0;
  let matchedBooks = 0;
  const BATCH_SIZE = 500;
  let batch = [];

  for (const srcBook of data.books) {
    const slug = BOOK_NAME_TO_SLUG[srcBook.name];
    if (!slug) {
      console.log(`  ⚠ No slug mapping for "${srcBook.name}", skipping`);
      continue;
    }
    const bookId = bookMap[slug];
    if (!bookId) {
      console.log(`  ⚠ Book "${slug}" not in database, skipping`);
      continue;
    }

    matchedBooks++;
    let bookVerses = 0;

    for (const ch of srcBook.chapters) {
      const chapterNum = typeof ch.chapter === 'number' ? ch.chapter : parseInt(ch.chapter);

      for (const v of ch.verses) {
        const verseNum = typeof v.verse === 'number' ? v.verse : parseInt(v.verse);
        const text = (v.text || '').trim();
        if (!text) continue;

        batch.push({
          translation_id: translationId,
          book_id: bookId,
          chapter: chapterNum,
          verse_number: verseNum,
          text: text,
        });
        totalVerses++;
        bookVerses++;

        if (batch.length >= BATCH_SIZE) {
          await supabaseInsert('verses', batch);
          batch = [];
          process.stdout.write(`\r  ${totalVerses} verses inserted...`);
        }
      }
    }
    console.log(`  ${srcBook.name}: ${bookVerses} verses (${totalVerses} total)`);
  }

  // Insert remaining batch
  if (batch.length > 0) {
    await supabaseInsert('verses', batch);
  }

  console.log(`\n✅ Done! Inserted ${totalVerses} ${TRANSLATION.toUpperCase()} verses from ${matchedBooks} books.`);
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
