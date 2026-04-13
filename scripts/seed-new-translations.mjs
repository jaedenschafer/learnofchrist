#!/usr/bin/env node
/**
 * Seed public domain Bible translations into Supabase
 *
 * Sources:
 *   BSB, DRA, LSV — wldeh/bible-api CDN (JSON per chapter)
 *   Darby          — bible-api.com REST API
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=xxx node scripts/seed-new-translations.mjs bsb
 *   SUPABASE_SERVICE_ROLE_KEY=xxx node scripts/seed-new-translations.mjs darby
 *   SUPABASE_SERVICE_ROLE_KEY=xxx node scripts/seed-new-translations.mjs lsv
 *   SUPABASE_SERVICE_ROLE_KEY=xxx node scripts/seed-new-translations.mjs dra
 *   SUPABASE_SERVICE_ROLE_KEY=xxx node scripts/seed-new-translations.mjs all
 */

const SUPABASE_URL = 'https://uqcgieillyvefzmohzpn.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const TRANSLATION_ARG = process.argv[2]?.toLowerCase();

// ─── Translation configs ───
const TRANSLATIONS = {
  bsb: {
    abbreviation: 'bsb',
    name: 'Berean Standard Bible',
    source: 'cdn',            // wldeh CDN
    cdnId: 'en-bsb',
  },
  darby: {
    abbreviation: 'darby',
    name: 'Darby Bible Translation',
    source: 'bibleapi',       // bible-api.com
    apiId: 'darby',
  },
  lsv: {
    abbreviation: 'lsv',
    name: 'Literal Standard Version',
    source: 'cdn',
    cdnId: 'en-lsv',
  },
  dra: {
    abbreviation: 'dra',
    name: 'Douay-Rheims American',
    source: 'cdn',
    cdnId: 'en-dra',
  },
};

// ─── Book slug mapping: our DB slug → wldeh CDN folder name ───
const DB_SLUG_TO_CDN = {
  'genesis': 'genesis', 'exodus': 'exodus', 'leviticus': 'leviticus',
  'numbers': 'numbers', 'deuteronomy': 'deuteronomy', 'joshua': 'joshua',
  'judges': 'judges', 'ruth': 'ruth',
  '1-samuel': '1samuel', '2-samuel': '2samuel',
  '1-kings': '1kings', '2-kings': '2kings',
  '1-chronicles': '1chronicles', '2-chronicles': '2chronicles',
  'ezra': 'ezra', 'nehemiah': 'nehemiah', 'esther': 'esther',
  'job': 'job', 'psalms': 'psalms', 'proverbs': 'proverbs',
  'ecclesiastes': 'ecclesiastes', 'song-of-solomon': 'song',
  'isaiah': 'isaiah', 'jeremiah': 'jeremiah', 'lamentations': 'lamentations',
  'ezekiel': 'ezekiel', 'daniel': 'daniel', 'hosea': 'hosea',
  'joel': 'joel', 'amos': 'amos', 'obadiah': 'obadiah',
  'jonah': 'jonah', 'micah': 'micah', 'nahum': 'nahum',
  'habakkuk': 'habakkuk', 'zephaniah': 'zephaniah', 'haggai': 'haggai',
  'zechariah': 'zechariah', 'malachi': 'malachi',
  'matthew': 'matthew', 'mark': 'mark', 'luke': 'luke', 'john': 'john',
  'acts': 'acts', 'romans': 'romans',
  '1-corinthians': '1corinthians', '2-corinthians': '2corinthians',
  'galatians': 'galatians', 'ephesians': 'ephesians',
  'philippians': 'philippians', 'colossians': 'colossians',
  '1-thessalonians': '1thessalonians', '2-thessalonians': '2thessalonians',
  '1-timothy': '1timothy', '2-timothy': '2timothy',
  'titus': 'titus', 'philemon': 'philemon', 'hebrews': 'hebrews',
  'james': 'james',
  '1-peter': '1peter', '2-peter': '2peter',
  '1-john': '1john', '2-john': '2john', '3-john': '3john',
  'jude': 'jude', 'revelation': 'revelation',
};

// ─── Book slug → bible-api.com book name ───
const DB_SLUG_TO_BIBLEAPI = {
  'genesis': 'Genesis', 'exodus': 'Exodus', 'leviticus': 'Leviticus',
  'numbers': 'Numbers', 'deuteronomy': 'Deuteronomy', 'joshua': 'Joshua',
  'judges': 'Judges', 'ruth': 'Ruth',
  '1-samuel': '1 Samuel', '2-samuel': '2 Samuel',
  '1-kings': '1 Kings', '2-kings': '2 Kings',
  '1-chronicles': '1 Chronicles', '2-chronicles': '2 Chronicles',
  'ezra': 'Ezra', 'nehemiah': 'Nehemiah', 'esther': 'Esther',
  'job': 'Job', 'psalms': 'Psalms', 'proverbs': 'Proverbs',
  'ecclesiastes': 'Ecclesiastes', 'song-of-solomon': 'Song of Solomon',
  'isaiah': 'Isaiah', 'jeremiah': 'Jeremiah', 'lamentations': 'Lamentations',
  'ezekiel': 'Ezekiel', 'daniel': 'Daniel', 'hosea': 'Hosea',
  'joel': 'Joel', 'amos': 'Amos', 'obadiah': 'Obadiah',
  'jonah': 'Jonah', 'micah': 'Micah', 'nahum': 'Nahum',
  'habakkuk': 'Habakkuk', 'zephaniah': 'Zephaniah', 'haggai': 'Haggai',
  'zechariah': 'Zechariah', 'malachi': 'Malachi',
  'matthew': 'Matthew', 'mark': 'Mark', 'luke': 'Luke', 'john': 'John',
  'acts': 'Acts', 'romans': 'Romans',
  '1-corinthians': '1 Corinthians', '2-corinthians': '2 Corinthians',
  'galatians': 'Galatians', 'ephesians': 'Ephesians',
  'philippians': 'Philippians', 'colossians': 'Colossians',
  '1-thessalonians': '1 Thessalonians', '2-thessalonians': '2 Thessalonians',
  '1-timothy': '1 Timothy', '2-timothy': '2 Timothy',
  'titus': 'Titus', 'philemon': 'Philemon', 'hebrews': 'Hebrews',
  'james': 'James',
  '1-peter': '1 Peter', '2-peter': '2 Peter',
  '1-john': '1 John', '2-john': '2 John', '3-john': '3 John',
  'jude': 'Jude', 'revelation': 'Revelation',
};

// ─── Supabase helpers ───

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

async function supabaseUpsert(table, rows) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      'Prefer': 'resolution=merge-duplicates,return=representation',
    },
    body: JSON.stringify(rows),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Upsert failed (${res.status}): ${text}`);
  }
  return res.json();
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

// ─── Fetchers ───

async function fetchFromCDN(cdnId, bookCdnName, chapter) {
  const url = `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${cdnId}/books/${bookCdnName}/chapters/${chapter}.json`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();
  return (data.data || []).map(v => ({
    verse_number: parseInt(v.verse),
    text: v.text?.trim() || '',
  })).filter(v => v.text);
}

async function fetchFromBibleApi(apiId, bookName, chapter) {
  const ref = `${bookName}+${chapter}`;
  const url = `https://bible-api.com/${encodeURIComponent(ref)}?translation=${apiId}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();
  if (data.error) return [];
  return (data.verses || []).map(v => ({
    verse_number: v.verse,
    text: (v.text || '').trim(),
  })).filter(v => v.text);
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// ─── Main seeder ───

async function seedTranslation(config) {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`  Seeding: ${config.name} (${config.abbreviation.toUpperCase()})`);
  console.log(`${'='.repeat(50)}\n`);

  // 1. Ensure translation row exists
  const existing = await supabaseSelect('translations', `abbreviation=eq.${config.abbreviation}`);
  let translationId;
  if (existing.length > 0) {
    translationId = existing[0].id;
    // Activate if not active
    if (!existing[0].is_active) {
      await fetch(`${SUPABASE_URL}/rest/v1/translations?id=eq.${translationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_SERVICE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ is_active: true }),
      });
    }
    console.log(`  Translation exists: ${translationId}`);
  } else {
    const inserted = await supabaseUpsert('translations', [{
      abbreviation: config.abbreviation,
      name: config.name,
      source_type: 'public_domain',
      language: 'en',
      is_active: true,
      sort_order: 10,
    }]);
    translationId = inserted[0].id;
    console.log(`  Created translation: ${translationId}`);
  }

  // 2. Check existing verse count (supports resume)
  const existingCheck = await fetch(`${SUPABASE_URL}/rest/v1/verses?select=id&translation_id=eq.${translationId}`, {
    headers: { 'apikey': SUPABASE_SERVICE_KEY, 'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`, 'Prefer': 'count=exact', 'Range': '0-0' },
  });
  const existingCount = parseInt((existingCheck.headers.get('content-range') || '*/0').split('/')[1]) || 0;
  if (existingCount > 0) {
    console.log(`  ℹ Already has ${existingCount} verses — will resume (skip existing chapters)`);
  }

  // 3. Get all books
  const books = await supabaseSelect('books', 'select=id,slug,name,total_chapters&order=sort_order');
  console.log(`  Found ${books.length} books\n`);

  let totalVerses = 0;
  let failedChapters = [];
  const BATCH_SIZE = 500;
  let batch = [];

  async function flushBatch() {
    if (batch.length === 0) return;
    try {
      await supabaseInsert('verses', batch);
    } catch (e) {
      console.error(`\n  ✗ Batch insert failed: ${e.message}`);
    }
    batch = [];
  }

  for (const book of books) {
    let bookVerses = 0;

    for (let ch = 1; ch <= book.total_chapters; ch++) {
      let verses = [];

      // Skip chapters that already have verses (resume support)
      if (existingCount > 0) {
        const chCheck = await supabaseSelect('verses',
          `select=id&limit=1&translation_id=eq.${translationId}&book_id=eq.${book.id}&chapter=eq.${ch}`);
        if (chCheck.length > 0) continue;
      }

      try {
        if (config.source === 'cdn') {
          const cdnName = DB_SLUG_TO_CDN[book.slug];
          if (!cdnName) { failedChapters.push(`${book.slug} (no CDN mapping)`); continue; }
          verses = await fetchFromCDN(config.cdnId, cdnName, ch);
        } else if (config.source === 'bibleapi') {
          const apiName = DB_SLUG_TO_BIBLEAPI[book.slug];
          if (!apiName) { failedChapters.push(`${book.slug} (no API mapping)`); continue; }
          // Retry with backoff for bible-api.com
          for (let attempt = 0; attempt < 3; attempt++) {
            try {
              verses = await fetchFromBibleApi(config.apiId, apiName, ch);
              break;
            } catch (retryErr) {
              if (attempt < 2) {
                console.log(`    ↻ Retry ${attempt + 1} for ${apiName} ${ch}...`);
                await sleep(2000 * (attempt + 1));
              } else {
                throw retryErr;
              }
            }
          }
          // Rate limit for bible-api.com (be nice)
          await sleep(500);
        }
      } catch (e) {
        failedChapters.push(`${book.slug} ${ch}: ${e.message}`);
        continue;
      }

      for (const v of verses) {
        batch.push({
          translation_id: translationId,
          book_id: book.id,
          chapter: ch,
          verse_number: v.verse_number,
          text: v.text,
        });
        totalVerses++;
        bookVerses++;

        if (batch.length >= BATCH_SIZE) {
          await flushBatch();
        }
      }
    }

    process.stdout.write(`  ${book.name}: ${bookVerses} verses (${totalVerses} total)\n`);
  }

  // Flush remaining
  await flushBatch();

  console.log(`\n  ✅ Done! ${totalVerses} verses inserted for ${config.abbreviation.toUpperCase()}`);
  if (failedChapters.length > 0) {
    console.log(`  ⚠ ${failedChapters.length} failed chapters:`);
    failedChapters.slice(0, 10).forEach(f => console.log(`    - ${f}`));
    if (failedChapters.length > 10) console.log(`    ... and ${failedChapters.length - 10} more`);
  }
}

// ─── Entry point ───

async function main() {
  if (!SUPABASE_SERVICE_KEY) {
    console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var');
    process.exit(1);
  }

  const validKeys = Object.keys(TRANSLATIONS);
  if (!TRANSLATION_ARG || (TRANSLATION_ARG !== 'all' && !validKeys.includes(TRANSLATION_ARG))) {
    console.error(`Usage: node scripts/seed-new-translations.mjs <${validKeys.join('|')}|all>`);
    process.exit(1);
  }

  const toSeed = TRANSLATION_ARG === 'all' ? validKeys : [TRANSLATION_ARG];

  console.log(`\n🔨 Bible Translation Seeder`);
  console.log(`   Translations: ${toSeed.map(t => t.toUpperCase()).join(', ')}`);
  console.log(`   Target: ${SUPABASE_URL}\n`);

  for (const key of toSeed) {
    await seedTranslation(TRANSLATIONS[key]);
  }

  console.log(`\n🎉 All done!`);
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
