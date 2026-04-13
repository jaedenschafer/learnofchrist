#!/usr/bin/env node
/**
 * Seed KJV Bible text into Supabase
 * Downloads public domain KJV JSON from GitHub and inserts all 31,102 verses
 * Source: https://github.com/aruljohn/Bible-kjv (public domain)
 *
 * Usage: SUPABASE_SERVICE_ROLE_KEY=your_key node scripts/seed-kjv.mjs
 */

const SUPABASE_URL = 'https://uqcgieillyvefzmohzpn.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BASE_URL = 'https://raw.githubusercontent.com/aruljohn/Bible-kjv/refs/heads/master';

// Map book names to the filename used in the GitHub repo
const BOOK_FILES = {
  'genesis': 'Genesis', 'exodus': 'Exodus', 'leviticus': 'Leviticus',
  'numbers': 'Numbers', 'deuteronomy': 'Deuteronomy', 'joshua': 'Joshua',
  'judges': 'Judges', 'ruth': 'Ruth', '1-samuel': '1Samuel',
  '2-samuel': '2Samuel', '1-kings': '1Kings', '2-kings': '2Kings',
  '1-chronicles': '1Chronicles', '2-chronicles': '2Chronicles',
  'ezra': 'Ezra', 'nehemiah': 'Nehemiah', 'esther': 'Esther',
  'job': 'Job', 'psalms': 'Psalms', 'proverbs': 'Proverbs',
  'ecclesiastes': 'Ecclesiastes', 'song-of-solomon': 'SongofSolomon',
  'isaiah': 'Isaiah', 'jeremiah': 'Jeremiah', 'lamentations': 'Lamentations',
  'ezekiel': 'Ezekiel', 'daniel': 'Daniel', 'hosea': 'Hosea',
  'joel': 'Joel', 'amos': 'Amos', 'obadiah': 'Obadiah',
  'jonah': 'Jonah', 'micah': 'Micah', 'nahum': 'Nahum',
  'habakkuk': 'Habakkuk', 'zephaniah': 'Zephaniah', 'haggai': 'Haggai',
  'zechariah': 'Zechariah', 'malachi': 'Malachi',
  'matthew': 'Matthew', 'mark': 'Mark', 'luke': 'Luke', 'john': 'John',
  'acts': 'Acts', 'romans': 'Romans', '1-corinthians': '1Corinthians',
  '2-corinthians': '2Corinthians', 'galatians': 'Galatians',
  'ephesians': 'Ephesians', 'philippians': 'Philippians',
  'colossians': 'Colossians', '1-thessalonians': '1Thessalonians',
  '2-thessalonians': '2Thessalonians', '1-timothy': '1Timothy',
  '2-timothy': '2Timothy', 'titus': 'Titus', 'philemon': 'Philemon',
  'hebrews': 'Hebrews', 'james': 'James', '1-peter': '1Peter',
  '2-peter': '2Peter', '1-john': '1John', '2-john': '2John',
  '3-john': '3John', 'jude': 'Jude', 'revelation': 'Revelation'
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

  console.log('=== KJV Bible Seeder ===\n');

  // 1. Get KJV translation ID
  const translations = await supabaseSelect('translations', 'abbreviation=eq.kjv');
  if (!translations.length) { console.error('KJV not found. Run migrations first.'); process.exit(1); }
  const kjvId = translations[0].id;
  console.log(`KJV ID: ${kjvId}`);

  // 2. Get all book IDs
  const books = await supabaseSelect('books', 'order=sort_order&select=id,slug,name');
  const bookMap = {};
  for (const b of books) bookMap[b.slug] = b.id;
  console.log(`Found ${books.length} books\n`);

  // 3. Check if already seeded
  const existing = await supabaseSelect('verses', 'select=id&limit=1&translation_id=eq.' + kjvId);
  if (existing.length > 0) { console.log('KJV already seeded! Skipping.'); return; }

  // 4. Process each book
  let totalVerses = 0;
  const BATCH_SIZE = 500;
  let batch = [];

  for (const book of books) {
    const fileName = BOOK_FILES[book.slug];
    if (!fileName) { console.log(`  No file mapping for ${book.slug}, skipping`); continue; }

    const url = `${BASE_URL}/${fileName}.json`;
    let bookData;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      bookData = await res.json();
    } catch (e) {
      console.log(`  Failed to fetch ${book.name}: ${e.message}`);
      continue;
    }

    const chapters = bookData.chapters || [];
    let bookVerses = 0;

    for (const ch of chapters) {
      const chapterNum = parseInt(ch.chapter);
      const verses = ch.verses || [];

      for (const v of verses) {
        batch.push({
          translation_id: kjvId,
          book_id: bookMap[book.slug],
          chapter: chapterNum,
          verse_number: parseInt(v.verse),
          text: v.text.trim(),
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
    console.log(`  ${book.name}: ${bookVerses} verses (${totalVerses} total)`);
  }

  // Insert remaining
  if (batch.length > 0) {
    await supabaseInsert('verses', batch);
  }

  console.log(`\nDone! Inserted ${totalVerses} KJV verses.`);
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
