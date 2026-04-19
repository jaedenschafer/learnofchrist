'use client';

import { supabase } from './supabase';

/**
 * Canonical book slug by common English name variants and abbreviations.
 * Keys are lowercase + spaces/dots stripped for lookup.
 */
const BOOK_ALIASES: Record<string, { slug: string; display: string; maxChapters: number }> = {};

function registerBook(slug: string, display: string, maxChapters: number, aliases: string[]) {
  for (const a of aliases) {
    BOOK_ALIASES[a.toLowerCase().replace(/[\s.]/g, '')] = { slug, display, maxChapters };
  }
}

// Old Testament
registerBook('genesis', 'Genesis', 50, ['gen', 'gen.', 'genesis', 'ge']);
registerBook('exodus', 'Exodus', 40, ['ex', 'ex.', 'exo', 'exod', 'exodus']);
registerBook('leviticus', 'Leviticus', 27, ['lev', 'lev.', 'leviticus', 'lv']);
registerBook('numbers', 'Numbers', 36, ['num', 'num.', 'numbers', 'nu']);
registerBook('deuteronomy', 'Deuteronomy', 34, ['deut', 'deut.', 'deuteronomy', 'dt']);
registerBook('joshua', 'Joshua', 24, ['josh', 'josh.', 'joshua']);
registerBook('judges', 'Judges', 21, ['judg', 'judg.', 'judges', 'jdg']);
registerBook('ruth', 'Ruth', 4, ['ruth', 'ru']);
registerBook('1-samuel', '1 Samuel', 31, ['1sam', '1sam.', '1samuel', 'isam', 'isamuel']);
registerBook('2-samuel', '2 Samuel', 24, ['2sam', '2sam.', '2samuel', 'iisam', 'iisamuel']);
registerBook('1-kings', '1 Kings', 22, ['1kgs', '1kg', '1kings', '1ki', 'ikings', 'iki']);
registerBook('2-kings', '2 Kings', 25, ['2kgs', '2kg', '2kings', '2ki', 'iikings', 'iiki']);
registerBook('1-chronicles', '1 Chronicles', 29, ['1chr', '1chron', '1chronicles', '1ch', 'ichron']);
registerBook('2-chronicles', '2 Chronicles', 36, ['2chr', '2chron', '2chronicles', '2ch', 'iichron']);
registerBook('ezra', 'Ezra', 10, ['ezra', 'ezr']);
registerBook('nehemiah', 'Nehemiah', 13, ['neh', 'neh.', 'nehemiah']);
registerBook('esther', 'Esther', 10, ['esth', 'esth.', 'esther', 'est']);
registerBook('job', 'Job', 42, ['job']);
registerBook('psalms', 'Psalms', 150, ['ps', 'ps.', 'psa', 'psa.', 'psalm', 'psalms']);
registerBook('proverbs', 'Proverbs', 31, ['prov', 'prov.', 'proverbs', 'pr', 'prv']);
registerBook('ecclesiastes', 'Ecclesiastes', 12, ['eccl', 'eccl.', 'ecclesiastes', 'ec', 'qoh']);
registerBook('song-of-solomon', 'Song of Solomon', 8, ['song', 'songofsolomon', 'songofsongs', 'sos']);
registerBook('isaiah', 'Isaiah', 66, ['isa', 'isa.', 'isaiah', 'is']);
registerBook('jeremiah', 'Jeremiah', 52, ['jer', 'jer.', 'jeremiah']);
registerBook('lamentations', 'Lamentations', 5, ['lam', 'lam.', 'lamentations']);
registerBook('ezekiel', 'Ezekiel', 48, ['ezek', 'ezek.', 'ezekiel', 'ez']);
registerBook('daniel', 'Daniel', 12, ['dan', 'dan.', 'daniel']);
registerBook('hosea', 'Hosea', 14, ['hos', 'hos.', 'hosea']);
registerBook('joel', 'Joel', 3, ['joel']);
registerBook('amos', 'Amos', 9, ['amos', 'am']);
registerBook('obadiah', 'Obadiah', 1, ['obad', 'obad.', 'obadiah', 'ob']);
registerBook('jonah', 'Jonah', 4, ['jonah']);
registerBook('micah', 'Micah', 7, ['mic', 'mic.', 'micah']);
registerBook('nahum', 'Nahum', 3, ['nah', 'nah.', 'nahum']);
registerBook('habakkuk', 'Habakkuk', 3, ['hab', 'hab.', 'habakkuk']);
registerBook('zephaniah', 'Zephaniah', 3, ['zeph', 'zeph.', 'zephaniah']);
registerBook('haggai', 'Haggai', 2, ['hag', 'hag.', 'haggai']);
registerBook('zechariah', 'Zechariah', 14, ['zech', 'zech.', 'zechariah']);
registerBook('malachi', 'Malachi', 4, ['mal', 'mal.', 'malachi']);

// New Testament
registerBook('matthew', 'Matthew', 28, ['matt', 'matt.', 'matthew', 'mt']);
registerBook('mark', 'Mark', 16, ['mark', 'mk', 'mrk']);
registerBook('luke', 'Luke', 24, ['luke', 'lk']);
registerBook('john', 'John', 21, ['john', 'jn', 'jhn']);
registerBook('acts', 'Acts', 28, ['acts', 'ac']);
registerBook('romans', 'Romans', 16, ['rom', 'rom.', 'romans', 'ro']);
registerBook('1-corinthians', '1 Corinthians', 16, ['1cor', '1cor.', '1corinthians', 'icor']);
registerBook('2-corinthians', '2 Corinthians', 13, ['2cor', '2cor.', '2corinthians', 'iicor']);
registerBook('galatians', 'Galatians', 6, ['gal', 'gal.', 'galatians', 'ga']);
registerBook('ephesians', 'Ephesians', 6, ['eph', 'eph.', 'ephesians']);
registerBook('philippians', 'Philippians', 4, ['phil', 'phil.', 'philippians', 'php']);
registerBook('colossians', 'Colossians', 4, ['col', 'col.', 'colossians']);
registerBook('1-thessalonians', '1 Thessalonians', 5, ['1thess', '1thess.', '1thessalonians', '1th']);
registerBook('2-thessalonians', '2 Thessalonians', 3, ['2thess', '2thess.', '2thessalonians', '2th']);
registerBook('1-timothy', '1 Timothy', 6, ['1tim', '1tim.', '1timothy', 'itim']);
registerBook('2-timothy', '2 Timothy', 4, ['2tim', '2tim.', '2timothy', 'iitim']);
registerBook('titus', 'Titus', 3, ['titus', 'tit']);
registerBook('philemon', 'Philemon', 1, ['philem', 'philem.', 'philemon', 'phm']);
registerBook('hebrews', 'Hebrews', 13, ['heb', 'heb.', 'hebrews']);
registerBook('james', 'James', 5, ['james', 'jas', 'jm']);
registerBook('1-peter', '1 Peter', 5, ['1pet', '1pet.', '1peter', 'ipet']);
registerBook('2-peter', '2 Peter', 3, ['2pet', '2pet.', '2peter', 'iipet']);
registerBook('1-john', '1 John', 5, ['1john', '1jn', 'ijn', 'ijohn']);
registerBook('2-john', '2 John', 1, ['2john', '2jn', 'iijn']);
registerBook('3-john', '3 John', 1, ['3john', '3jn', 'iiijn']);
registerBook('jude', 'Jude', 1, ['jude']);
registerBook('revelation', 'Revelation', 22, ['rev', 'rev.', 'revelation', 'rv', 'apoc']);

// ── Regex that captures references ──
// Permissive but not too greedy. Matches things like:
//   John 1:1
//   John 1:1-3
//   John 1:1, 3
//   1 Cor. 10:1-2
//   Psalm 23:1
//   2 Corinthians 4:6
//
// Uses non-capturing group with alternation of all book names (longest first
// so "1 Samuel" wins over "1 Sam").

const BOOK_PATTERNS: string[] = [
  // Two-word books and abbreviations — must be listed first
  '1\\s*Samuel', '2\\s*Samuel', '1\\s*Sam\\.?', '2\\s*Sam\\.?',
  '1\\s*Kings', '2\\s*Kings', '1\\s*Kgs\\.?', '2\\s*Kgs\\.?', '1\\s*Ki\\.?', '2\\s*Ki\\.?',
  '1\\s*Chronicles', '2\\s*Chronicles', '1\\s*Chron\\.?', '2\\s*Chron\\.?', '1\\s*Chr\\.?', '2\\s*Chr\\.?',
  '1\\s*Corinthians', '2\\s*Corinthians', '1\\s*Cor\\.?', '2\\s*Cor\\.?',
  '1\\s*Thessalonians', '2\\s*Thessalonians', '1\\s*Thess\\.?', '2\\s*Thess\\.?',
  '1\\s*Timothy', '2\\s*Timothy', '1\\s*Tim\\.?', '2\\s*Tim\\.?',
  '1\\s*Peter', '2\\s*Peter', '1\\s*Pet\\.?', '2\\s*Pet\\.?',
  '1\\s*John', '2\\s*John', '3\\s*John',
  'Song\\s+of\\s+Solomon', 'Song\\s+of\\s+Songs',
  // One-word books
  'Genesis', 'Gen\\.?',
  'Exodus', 'Exod\\.?', 'Exo\\.?', 'Ex\\.',
  'Leviticus', 'Lev\\.?',
  'Numbers', 'Num\\.?',
  'Deuteronomy', 'Deut\\.?',
  'Joshua', 'Josh\\.?',
  'Judges', 'Judg\\.?',
  'Ruth',
  'Ezra',
  'Nehemiah', 'Neh\\.?',
  'Esther', 'Esth\\.?',
  'Job',
  'Psalms', 'Psalm', 'Psa\\.?', 'Ps\\.',
  'Proverbs', 'Prov\\.?',
  'Ecclesiastes', 'Eccl\\.?',
  'Isaiah', 'Isa\\.?',
  'Jeremiah', 'Jer\\.?',
  'Lamentations', 'Lam\\.?',
  'Ezekiel', 'Ezek\\.?',
  'Daniel', 'Dan\\.?',
  'Hosea', 'Hos\\.?',
  'Joel',
  'Amos',
  'Obadiah', 'Obad\\.?',
  'Jonah',
  'Micah', 'Mic\\.?',
  'Nahum', 'Nah\\.?',
  'Habakkuk', 'Hab\\.?',
  'Zephaniah', 'Zeph\\.?',
  'Haggai', 'Hag\\.?',
  'Zechariah', 'Zech\\.?',
  'Malachi', 'Mal\\.?',
  'Matthew', 'Matt\\.?',
  'Mark',
  'Luke',
  'John',
  'Acts',
  'Romans', 'Rom\\.?',
  'Galatians', 'Gal\\.?',
  'Ephesians', 'Eph\\.?',
  'Philippians', 'Phil\\.?',
  'Colossians', 'Col\\.?',
  'Titus',
  'Philemon', 'Philem\\.?',
  'Hebrews', 'Heb\\.?',
  'James',
  'Jude',
  'Revelation', 'Rev\\.?',
];

// Main regex. Captures:
//   1: full book text
//   2: chapter number
//   3: verse/range list (e.g. "1", "1-3", "1,3", "1-3,5")
export const REF_REGEX = new RegExp(
  `\\b(${BOOK_PATTERNS.join('|')})\\s+(\\d{1,3}):(\\d{1,3}(?:[\\-–]\\d{1,3})?(?:,\\s*\\d{1,3}(?:[\\-–]\\d{1,3})?)*)`,
  'g',
);

export interface ParsedRef {
  rawText: string;
  bookSlug: string;
  bookDisplay: string;
  chapter: number;
  verseStart: number;
  verseEnd: number; // inclusive; equals verseStart for a single verse
  displayRef: string; // e.g. "John 1:1" or "John 1:1–3"
}

export function parseRef(match: RegExpExecArray): ParsedRef | null {
  const [full, bookText, chapStr, verseStr] = match;
  const key = bookText.toLowerCase().replace(/[\s.]/g, '');
  const book = BOOK_ALIASES[key];
  if (!book) return null;

  const chapter = parseInt(chapStr, 10);
  if (!chapter || chapter > book.maxChapters) return null;

  // Take the first verse or range only ("1-3" → start=1, end=3; "1,3" → start=1, end=1)
  const firstSegment = verseStr.split(',')[0].trim();
  const rangeMatch = firstSegment.match(/^(\d+)(?:[\-–](\d+))?$/);
  if (!rangeMatch) return null;
  const verseStart = parseInt(rangeMatch[1], 10);
  const verseEnd = rangeMatch[2] ? parseInt(rangeMatch[2], 10) : verseStart;

  const displayRef =
    verseEnd === verseStart
      ? `${book.display} ${chapter}:${verseStart}`
      : `${book.display} ${chapter}:${verseStart}–${verseEnd}`;

  return {
    rawText: full,
    bookSlug: book.slug,
    bookDisplay: book.display,
    chapter,
    verseStart,
    verseEnd,
    displayRef,
  };
}

// ── Cached verse fetching ──

const verseCache = new Map<string, Promise<string[]>>();

export async function fetchVerses(
  bookSlug: string,
  chapter: number,
  verseStart: number,
  verseEnd: number,
  translationAbbr: string,
): Promise<string[]> {
  const cacheKey = `${bookSlug}/${chapter}/${verseStart}-${verseEnd}/${translationAbbr}`;
  const existing = verseCache.get(cacheKey);
  if (existing) return existing;

  const promise = (async () => {
    // translation id
    const { data: translation } = await supabase
      .from('translations')
      .select('id')
      .eq('abbreviation', translationAbbr)
      .single();
    if (!translation) return [];

    // book id
    const { data: book } = await supabase
      .from('books')
      .select('id')
      .eq('slug', bookSlug)
      .single();
    if (!book) return [];

    const { data: verses } = await supabase
      .from('verses')
      .select('verse_number, text')
      .eq('book_id', book.id)
      .eq('chapter', chapter)
      .eq('translation_id', translation.id)
      .gte('verse_number', verseStart)
      .lte('verse_number', verseEnd)
      .order('verse_number');

    return (verses || []).map((v) => v.text as string);
  })();

  verseCache.set(cacheKey, promise);
  return promise;
}
