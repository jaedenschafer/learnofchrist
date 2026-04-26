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
import { GENESIS_37 } from './genesis-37';
import { GENESIS_50 } from './genesis-50';

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
  'genesis/37': GENESIS_37,
  'genesis/50': GENESIS_50,
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
