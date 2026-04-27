/**
 * Rich-study-guide registry.
 *
 * Two routes lead here:
 *
 *   1. Hand-authored rich chapters live in their own files (e.g.
 *      genesis-1.ts) and are registered in RICH_CHAPTERS below. These get the
 *      full Genesis 1 template — verse-by-verse marks, Hebrew/Greek callouts,
 *      Christ Connection boxes, Carry blocks, the works.
 *
 *   2. Every other chapter — anything not in RICH_CHAPTERS — is auto-ported
 *      from the legacy ChapterContent shape (overview/themes/questions/
 *      christConnection/keyVerse) so the page renders in the same Genesis-1
 *      visual idiom while we wait for handcrafted commentary.
 *
 * Result: every study guide on the site uses RichStudyGuide. The format is
 * consistent everywhere; quality varies until each chapter is hand-authored.
 */

import type { ChapterContent } from '../chapter-content';
import type { Verse } from '../../lib/supabase';
import type { Block, RichChapterContent } from './types';
import { GENESIS_1 } from './genesis-1';
import { GENESIS_2 } from './genesis-2';
import { GENESIS_3 } from './genesis-3';
import { GENESIS_4 } from './genesis-4';
import { GENESIS_5 } from './genesis-5';
import { GENESIS_6 } from './genesis-6';
import { GENESIS_7 } from './genesis-7';
import { GENESIS_8 } from './genesis-8';
import { GENESIS_9 } from './genesis-9';
import { GENESIS_10 } from './genesis-10';
import { GENESIS_11 } from './genesis-11';
import { GENESIS_12 } from './genesis-12';
import { GENESIS_13 } from './genesis-13';
import { GENESIS_14 } from './genesis-14';
import { GENESIS_15 } from './genesis-15';
import { GENESIS_16 } from './genesis-16';
import { GENESIS_17 } from './genesis-17';
import { GENESIS_18 } from './genesis-18';
import { GENESIS_19 } from './genesis-19';
import { GENESIS_20 } from './genesis-20';
import { GENESIS_21 } from './genesis-21';
import { GENESIS_22 } from './genesis-22';
import { GENESIS_23 } from './genesis-23';
import { GENESIS_24 } from './genesis-24';
import { GENESIS_25 } from './genesis-25';
import { GENESIS_26 } from './genesis-26';
import { GENESIS_27 } from './genesis-27';
import { GENESIS_28 } from './genesis-28';
import { GENESIS_29 } from './genesis-29';
import { GENESIS_30 } from './genesis-30';
import { GENESIS_31 } from './genesis-31';
import { GENESIS_32 } from './genesis-32';
import { GENESIS_33 } from './genesis-33';
import { GENESIS_34 } from './genesis-34';
import { GENESIS_35 } from './genesis-35';
import { GENESIS_36 } from './genesis-36';
import { GENESIS_37 } from './genesis-37';
import { GENESIS_38 } from './genesis-38';
import { GENESIS_39 } from './genesis-39';
import { GENESIS_40 } from './genesis-40';
import { GENESIS_41 } from './genesis-41';
import { GENESIS_42 } from './genesis-42';
import { GENESIS_43 } from './genesis-43';
import { GENESIS_44 } from './genesis-44';
import { GENESIS_45 } from './genesis-45';
import { GENESIS_46 } from './genesis-46';
import { GENESIS_47 } from './genesis-47';
import { GENESIS_48 } from './genesis-48';
import { GENESIS_49 } from './genesis-49';
import { GENESIS_50 } from './genesis-50';
import { EXODUS_1 } from './exodus-1';
import { EXODUS_2 } from './exodus-2';
import { EXODUS_3 } from './exodus-3';
import { EXODUS_4 } from './exodus-4';
import { EXODUS_5 } from './exodus-5';
import { EXODUS_6 } from './exodus-6';
import { EXODUS_7 } from './exodus-7';
import { EXODUS_8 } from './exodus-8';
import { EXODUS_9 } from './exodus-9';
import { EXODUS_10 } from './exodus-10';
import { EXODUS_11 } from './exodus-11';
import { EXODUS_12 } from './exodus-12';
import { EXODUS_13 } from './exodus-13';
import { EXODUS_14 } from './exodus-14';
import { EXODUS_15 } from './exodus-15';
import { EXODUS_16 } from './exodus-16';
import { EXODUS_17 } from './exodus-17';
import { EXODUS_18 } from './exodus-18';
import { EXODUS_19 } from './exodus-19';
import { EXODUS_20 } from './exodus-20';
import { EXODUS_21 } from './exodus-21';
import { EXODUS_22 } from './exodus-22';
import { EXODUS_23 } from './exodus-23';
import { EXODUS_24 } from './exodus-24';
import { EXODUS_25 } from './exodus-25';
import { EXODUS_26 } from './exodus-26';
import { EXODUS_27 } from './exodus-27';
import { EXODUS_28 } from './exodus-28';
import { EXODUS_29 } from './exodus-29';
import { EXODUS_30 } from './exodus-30';
import { EXODUS_31 } from './exodus-31';
import { EXODUS_32 } from './exodus-32';
import { EXODUS_33 } from './exodus-33';
import { EXODUS_34 } from './exodus-34';
import { EXODUS_35 } from './exodus-35';
import { EXODUS_36 } from './exodus-36';
import { EXODUS_37 } from './exodus-37';
import { EXODUS_38 } from './exodus-38';
import { EXODUS_39 } from './exodus-39';
import { EXODUS_40 } from './exodus-40';
import { LEVITICUS_1 } from './leviticus-1';
import { LEVITICUS_2 } from './leviticus-2';
import { LEVITICUS_3 } from './leviticus-3';
import { LEVITICUS_4 } from './leviticus-4';
import { LEVITICUS_5 } from './leviticus-5';
import { LEVITICUS_6 } from './leviticus-6';
import { LEVITICUS_7 } from './leviticus-7';
import { LEVITICUS_8 } from './leviticus-8';
import { LEVITICUS_9 } from './leviticus-9';
import { LEVITICUS_10 } from './leviticus-10';
import { LEVITICUS_11 } from './leviticus-11';
import { LEVITICUS_12 } from './leviticus-12';
import { LEVITICUS_13 } from './leviticus-13';
import { LEVITICUS_14 } from './leviticus-14';
import { LEVITICUS_15 } from './leviticus-15';
import { LEVITICUS_16 } from './leviticus-16';
import { LEVITICUS_17 } from './leviticus-17';
import { LEVITICUS_18 } from './leviticus-18';
import { LEVITICUS_19 } from './leviticus-19';
import { LEVITICUS_20 } from './leviticus-20';
import { LEVITICUS_21 } from './leviticus-21';
import { LEVITICUS_22 } from './leviticus-22';
import { LEVITICUS_23 } from './leviticus-23';
import { LEVITICUS_24 } from './leviticus-24';
import { LEVITICUS_25 } from './leviticus-25';
import { LEVITICUS_26 } from './leviticus-26';
import { LEVITICUS_27 } from './leviticus-27';
import { NUMBERS_1 } from './numbers-1';
import { NUMBERS_2 } from './numbers-2';
import { NUMBERS_3 } from './numbers-3';
import { NUMBERS_4 } from './numbers-4';
import { NUMBERS_5 } from './numbers-5';
import { NUMBERS_6 } from './numbers-6';
import { NUMBERS_7 } from './numbers-7';
import { NUMBERS_8 } from './numbers-8';
import { NUMBERS_9 } from './numbers-9';
import { NUMBERS_10 } from './numbers-10';
import { NUMBERS_11 } from './numbers-11';
import { NUMBERS_12 } from './numbers-12';
import { NUMBERS_13 } from './numbers-13';
import { NUMBERS_14 } from './numbers-14';
import { NUMBERS_15 } from './numbers-15';
import { NUMBERS_16 } from './numbers-16';
import { NUMBERS_17 } from './numbers-17';
import { NUMBERS_18 } from './numbers-18';
import { NUMBERS_19 } from './numbers-19';
import { NUMBERS_20 } from './numbers-20';
import { NUMBERS_21 } from './numbers-21';
import { NUMBERS_22 } from './numbers-22';
import { NUMBERS_23 } from './numbers-23';
import { NUMBERS_24 } from './numbers-24';
import { NUMBERS_25 } from './numbers-25';
import { NUMBERS_26 } from './numbers-26';
import { NUMBERS_27 } from './numbers-27';
import { NUMBERS_28 } from './numbers-28';
import { NUMBERS_29 } from './numbers-29';
import { NUMBERS_30 } from './numbers-30';
import { NUMBERS_31 } from './numbers-31';
import { NUMBERS_32 } from './numbers-32';
import { NUMBERS_33 } from './numbers-33';

/** Hand-authored rich chapters. Keyed by `<book-slug>/<chapter>`. */
const RICH_CHAPTERS: Record<string, RichChapterContent> = {
  'genesis/1': GENESIS_1,
  'genesis/2': GENESIS_2,
  'genesis/3': GENESIS_3,
  'genesis/4': GENESIS_4,
  'genesis/5': GENESIS_5,
  'genesis/6': GENESIS_6,
  'genesis/7': GENESIS_7,
  'genesis/8': GENESIS_8,
  'genesis/9': GENESIS_9,
  'genesis/10': GENESIS_10,
  'genesis/11': GENESIS_11,
  'genesis/12': GENESIS_12,
  'genesis/13': GENESIS_13,
  'genesis/14': GENESIS_14,
  'genesis/15': GENESIS_15,
  'genesis/16': GENESIS_16,
  'genesis/17': GENESIS_17,
  'genesis/18': GENESIS_18,
  'genesis/19': GENESIS_19,
  'genesis/20': GENESIS_20,
  'genesis/21': GENESIS_21,
  'genesis/22': GENESIS_22,
  'genesis/23': GENESIS_23,
  'genesis/24': GENESIS_24,
  'genesis/25': GENESIS_25,
  'genesis/26': GENESIS_26,
  'genesis/27': GENESIS_27,
  'genesis/28': GENESIS_28,
  'genesis/29': GENESIS_29,
  'genesis/30': GENESIS_30,
  'genesis/31': GENESIS_31,
  'genesis/32': GENESIS_32,
  'genesis/33': GENESIS_33,
  'genesis/34': GENESIS_34,
  'genesis/35': GENESIS_35,
  'genesis/36': GENESIS_36,
  'genesis/37': GENESIS_37,
  'genesis/38': GENESIS_38,
  'genesis/39': GENESIS_39,
  'genesis/40': GENESIS_40,
  'genesis/41': GENESIS_41,
  'genesis/42': GENESIS_42,
  'genesis/43': GENESIS_43,
  'genesis/44': GENESIS_44,
  'genesis/45': GENESIS_45,
  'genesis/46': GENESIS_46,
  'genesis/47': GENESIS_47,
  'genesis/48': GENESIS_48,
  'genesis/49': GENESIS_49,
  'genesis/50': GENESIS_50,
  'exodus/1': EXODUS_1,
  'exodus/2': EXODUS_2,
  'exodus/3': EXODUS_3,
  'exodus/4': EXODUS_4,
  'exodus/5': EXODUS_5,
  'exodus/6': EXODUS_6,
  'exodus/7': EXODUS_7,
  'exodus/8': EXODUS_8,
  'exodus/9': EXODUS_9,
  'exodus/10': EXODUS_10,
  'exodus/11': EXODUS_11,
  'exodus/12': EXODUS_12,
  'exodus/13': EXODUS_13,
  'exodus/14': EXODUS_14,
  'exodus/15': EXODUS_15,
  'exodus/16': EXODUS_16,
  'exodus/17': EXODUS_17,
  'exodus/18': EXODUS_18,
  'exodus/19': EXODUS_19,
  'exodus/20': EXODUS_20,
  'exodus/21': EXODUS_21,
  'exodus/22': EXODUS_22,
  'exodus/23': EXODUS_23,
  'exodus/24': EXODUS_24,
  'exodus/25': EXODUS_25,
  'exodus/26': EXODUS_26,
  'exodus/27': EXODUS_27,
  'exodus/28': EXODUS_28,
  'exodus/29': EXODUS_29,
  'exodus/30': EXODUS_30,
  'exodus/31': EXODUS_31,
  'exodus/32': EXODUS_32,
  'exodus/33': EXODUS_33,
  'exodus/34': EXODUS_34,
  'exodus/35': EXODUS_35,
  'exodus/36': EXODUS_36,
  'exodus/37': EXODUS_37,
  'exodus/38': EXODUS_38,
  'exodus/39': EXODUS_39,
  'exodus/40': EXODUS_40,
  'leviticus/1': LEVITICUS_1,
  'leviticus/2': LEVITICUS_2,
  'leviticus/3': LEVITICUS_3,
  'leviticus/4': LEVITICUS_4,
  'leviticus/5': LEVITICUS_5,
  'leviticus/6': LEVITICUS_6,
  'leviticus/7': LEVITICUS_7,
  'leviticus/8': LEVITICUS_8,
  'leviticus/9': LEVITICUS_9,
  'leviticus/10': LEVITICUS_10,
  'leviticus/11': LEVITICUS_11,
  'leviticus/12': LEVITICUS_12,
  'leviticus/13': LEVITICUS_13,
  'leviticus/14': LEVITICUS_14,
  'leviticus/15': LEVITICUS_15,
  'leviticus/16': LEVITICUS_16,
  'leviticus/17': LEVITICUS_17,
  'leviticus/18': LEVITICUS_18,
  'leviticus/19': LEVITICUS_19,
  'leviticus/20': LEVITICUS_20,
  'leviticus/21': LEVITICUS_21,
  'leviticus/22': LEVITICUS_22,
  'leviticus/23': LEVITICUS_23,
  'leviticus/24': LEVITICUS_24,
  'leviticus/25': LEVITICUS_25,
  'leviticus/26': LEVITICUS_26,
  'leviticus/27': LEVITICUS_27,
  'numbers/1': NUMBERS_1,
  'numbers/2': NUMBERS_2,
  'numbers/3': NUMBERS_3,
  'numbers/4': NUMBERS_4,
  'numbers/5': NUMBERS_5,
  'numbers/6': NUMBERS_6,
  'numbers/7': NUMBERS_7,
  'numbers/8': NUMBERS_8,
  'numbers/9': NUMBERS_9,
  'numbers/10': NUMBERS_10,
  'numbers/11': NUMBERS_11,
  'numbers/12': NUMBERS_12,
  'numbers/13': NUMBERS_13,
  'numbers/14': NUMBERS_14,
  'numbers/15': NUMBERS_15,
  'numbers/16': NUMBERS_16,
  'numbers/17': NUMBERS_17,
  'numbers/18': NUMBERS_18,
  'numbers/19': NUMBERS_19,
  'numbers/20': NUMBERS_20,
  'numbers/21': NUMBERS_21,
  'numbers/22': NUMBERS_22,
  'numbers/23': NUMBERS_23,
  'numbers/24': NUMBERS_24,
  'numbers/25': NUMBERS_25,
  'numbers/26': NUMBERS_26,
  'numbers/27': NUMBERS_27,
  'numbers/28': NUMBERS_28,
  'numbers/29': NUMBERS_29,
  'numbers/30': NUMBERS_30,
  'numbers/31': NUMBERS_31,
  'numbers/32': NUMBERS_32,
  'numbers/33': NUMBERS_33,
};

/**
 * Look up a rich chapter, falling back to an auto-port of the legacy data
 * if no hand-authored chapter exists. Returns `null` only when neither
 * source has anything.
 *
 * `chapterVerses` — when supplied, the auto-port path renders the entire
 * chapter as a single scripture block at the top of the body so readers
 * still see the full chapter text, not just the key verse.
 */
export function getRichChapter(
  bookSlug: string,
  bookName: string,
  chapter: number,
  legacyContent: ChapterContent | null,
  chapterVerses: Verse[] = [],
): RichChapterContent | null {
  const key = `${bookSlug}/${chapter}`;
  if (RICH_CHAPTERS[key]) return RICH_CHAPTERS[key];
  if (!legacyContent) {
    return emptyChapter(bookSlug, bookName, chapter, chapterVerses);
  }
  return autoPortChapter(bookSlug, bookName, chapter, legacyContent, chapterVerses);
}

/**
 * True when (book, chapter) has a hand-authored entry in RICH_CHAPTERS — the
 * admin in-page editor skips these because the rich layout doesn't round-trip
 * through the legacy ChapterContent shape (the file is the source of truth).
 */
export function isHandAuthoredChapter(bookSlug: string, chapter: number): boolean {
  return Boolean(RICH_CHAPTERS[`${bookSlug}/${chapter}`]);
}

/** Build a scripture block that renders every verse of the chapter as plain
 *  lines (no highlights). Used by the auto-port path so readers always see
 *  the chapter text at the top of the guide. */
function fullChapterScripture(chapter: number, verses: Verse[]): Block {
  return {
    kind: 'scripture',
    chapter,
    lines: verses.map((v) => ({
      number: v.verse_number,
      spans: [{ kind: 'text' as const, text: cleanVerseText(v.text) }],
    })),
  };
}

function cleanVerseText(text: string): string {
  return text
    .replace(/<\/?FI>/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Auto-port the legacy ChapterContent shape into a RichChapterContent.
 *
 * The legacy data has five fields. Here is how each maps onto the rich
 * template — the result reads top-to-bottom in the same visual order as
 * Genesis 1, just with less depth:
 *
 *   • overview        → `intros` paragraph (and the page meta description)
 *   • keyVerse        → an "At a Glance" section with the verse rendered as
 *                       a normal scripture block + a small commentary line
 *                       repeating the reference.
 *   • themes          → a "Key Themes" section. Each theme becomes a christ
 *                       block (without the Christ-Connection title) so it
 *                       gets the same colored side rail.
 *   • christConnection → a single Christ Connection block in its own section.
 *   • questions       → a "Questions to Sit With" section, one reflection
 *                       block per question (so they pick up the same journal
 *                       integration as Genesis 1's reflection prompts).
 */
function autoPortChapter(
  bookSlug: string,
  bookName: string,
  chapter: number,
  c: ChapterContent,
  chapterVerses: Verse[],
): RichChapterContent {
  const studyKey = `${bookSlug}-${chapter}`;
  // Try to extract a single verse number for the key verse so the scripture
  // block renders the [v] marker. "Genesis 1:1" → 1; "Psalm 23:1-3" → 1.
  const keyVerseNumber = parseFirstVerseNumber(c.keyVerse.reference);

  // Either render the full chapter as one scripture block, or — if we don't
  // have the verses (e.g. a translation we don't carry) — fall back to just
  // the key verse so the section is never empty.
  const openingScripture: Block = chapterVerses.length > 0
    ? fullChapterScripture(chapter, chapterVerses)
    : {
        kind: 'scripture',
        chapter,
        lines: [
          {
            number: keyVerseNumber,
            spans: [{ kind: 'text', text: c.keyVerse.text }],
          },
        ],
      };

  return {
    bookSlug,
    bookName,
    chapter,
    intros: [c.overview],
    // No KJV-anchored highlights yet, so no "tap any highlighted phrase" hint.
    tapHint: null,
    showKjvNote: false,
    sections: [
      {
        title: 'The Chapter',
        blocks: [
          openingScripture,
          {
            kind: 'commentary',
            html: `<em>Key verse: ${c.keyVerse.reference}.</em>`,
          },
        ],
      },
      ...(c.themes.length > 0
        ? [
            {
              title: 'Key Themes',
              blocks: c.themes.map((theme, i) => ({
                kind: 'christ' as const,
                id: `${studyKey}-theme-${i}`,
                title: theme.title,
                html: theme.desc,
              })),
            },
          ]
        : []),
      {
        title: 'Connection to Christ',
        blocks: [
          {
            kind: 'christ',
            id: `${studyKey}-christ`,
            title: 'Christ Connection',
            html: c.christConnection,
          },
        ],
      },
      ...(c.questions.length > 0
        ? [
            {
              title: 'Questions to Sit With',
              blocks: c.questions.map((q, i) => ({
                kind: 'reflection' as const,
                id: `${studyKey}-q-${i}`,
                prompt: q,
              })),
            },
          ]
        : []),
    ],
    bottomShare: {
      label: `Share ${bookName} ${chapter}`,
      quote: c.overview.length > 280 ? c.overview.slice(0, 277) + '…' : c.overview,
      snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
      ref: `${bookName} ${chapter} · Study Guide`,
    },
  };
}

/**
 * Empty state for chapters with no rich data and no legacy data. The page
 * still uses the same template — we just show the verses + a "this guide
 * is coming soon" note in place of commentary.
 */
function emptyChapter(
  bookSlug: string,
  bookName: string,
  chapter: number,
  chapterVerses: Verse[],
): RichChapterContent {
  return {
    bookSlug,
    bookName,
    chapter,
    intros: [
      `${bookName} ${chapter} — a hand-written study guide for this chapter is on the way. In the meantime, the chapter text is below, with the same translation switcher, highlights, and journal tools as the rest of the site.`,
    ],
    tapHint: null,
    showKjvNote: false,
    sections: [
      ...(chapterVerses.length > 0
        ? [
            {
              title: 'The Chapter',
              blocks: [fullChapterScripture(chapter, chapterVerses)],
            },
          ]
        : []),
      {
        title: 'A guide for this chapter is coming',
        blocks: [
          {
            kind: 'commentary',
            html:
              'We are slowly building a deep, original study guide for every chapter of the Bible — the kind you will find at <a href="/study/genesis/1">Genesis 1</a>. Until this one is written, use the chapter text above and the journal tools to make your own observations. Anything you write here will still be saved when the full guide arrives.',
          },
        ],
      },
    ],
  };
}

/** "Genesis 1:1" → 1. "Psalm 23:1-3" → 1. Fallback: 1. */
function parseFirstVerseNumber(ref: string): number {
  const m = ref.match(/:\s*(\d+)/);
  if (m && m[1]) {
    const n = parseInt(m[1], 10);
    if (Number.isFinite(n) && n > 0) return n;
  }
  return 1;
}
