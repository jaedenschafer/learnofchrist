#!/usr/bin/env node
/**
 * Fix: Seed Revelation verses for ASV and WEB (missed due to "Revelation of John" naming)
 */

const SUPABASE_URL = 'https://uqcgieillyvefzmohzpn.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

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
    headers: { 'apikey': SUPABASE_SERVICE_KEY, 'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}` },
  });
  return res.json();
}

async function seedRevelation(translationAbbr) {
  console.log(`\n--- Seeding Revelation for ${translationAbbr.toUpperCase()} ---`);

  const translations = await supabaseSelect('translations', `abbreviation=eq.${translationAbbr}`);
  if (!translations.length) { console.error(`${translationAbbr} not found`); return; }
  const translationId = translations[0].id;

  const books = await supabaseSelect('books', 'slug=eq.revelation&select=id');
  if (!books.length) { console.error('Revelation not found in books'); return; }
  const bookId = books[0].id;

  // Check if already has Revelation verses
  const existing = await supabaseSelect('verses', `select=id&limit=1&translation_id=eq.${translationId}&book_id=eq.${bookId}`);
  if (existing.length > 0) { console.log('Revelation already seeded for this translation.'); return; }

  const url = `https://raw.githubusercontent.com/bible-tools/data/master/translations/en/${translationAbbr.toUpperCase()}/index.json`;
  const res = await fetch(url);
  const data = await res.json();

  const revBook = data.books.find(b => b.name === 'Revelation of John' || b.name === 'Revelation');
  if (!revBook) { console.error('Revelation not found in source data'); return; }

  const batch = [];
  for (const ch of revBook.chapters) {
    for (const v of ch.verses) {
      batch.push({
        translation_id: translationId,
        book_id: bookId,
        chapter: typeof ch.chapter === 'number' ? ch.chapter : parseInt(ch.chapter),
        verse_number: typeof v.verse === 'number' ? v.verse : parseInt(v.verse),
        text: (v.text || '').trim(),
      });
    }
  }

  // Insert in chunks of 500
  for (let i = 0; i < batch.length; i += 500) {
    await supabaseInsert('verses', batch.slice(i, i + 500));
  }
  console.log(`Inserted ${batch.length} Revelation verses for ${translationAbbr.toUpperCase()}`);
}

async function main() {
  if (!SUPABASE_SERVICE_KEY) { console.error('Missing SUPABASE_SERVICE_ROLE_KEY'); process.exit(1); }
  await seedRevelation('asv');
  await seedRevelation('web');
  console.log('\nDone!');
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
