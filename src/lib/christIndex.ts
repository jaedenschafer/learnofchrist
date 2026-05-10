/**
 * Christ Index data layer.
 *
 * Aggregates the Christ-Connection content from every hand-authored rich
 * chapter into a single structure the /christ pages render. Three sources
 * for a chapter's summary, in priority order:
 *
 *   1. `christIndexSummary` on the rich chapter (polished one-paragraph
 *      summary written for this index specifically).
 *   2. The first `kind: 'christ'` block in the chapter, with HTML stripped.
 *   3. The chapter's first intro paragraph, with HTML stripped.
 *
 * Any chapter that has none of those is omitted from the index — we don't
 * want to publish an empty entry. Auto-ported chapters with a legacy
 * `christConnection` field still produce a christ block via the auto-port
 * pipeline, so they're surfaced too.
 */

import { bibleBooks, type BibleBook } from '@/data/books';
import { getChapterContent } from '@/data/chapter-content';
import {
  getRichChapter,
  isHandAuthoredChapter,
} from '@/data/study-chapters';

export interface ChristIndexEntry {
  /** 1-based chapter number. */
  chapter: number;
  /** Plain-text summary, no HTML. Wrap-safe for any layout. */
  summary: string;
  /** Section title to anchor the summary, e.g. "Christ as the Word" or
   *  the chapter's first christ-block title. Optional. */
  title?: string;
  /** True when the chapter has a hand-authored rich entry — used to
   *  surface a small "curated" badge in the UI. */
  curated: boolean;
}

export interface ChristIndexBook {
  book: BibleBook;
  /** Chapters with at least one Christ summary, in chapter order. */
  entries: ChristIndexEntry[];
}

/** One-shot HTML-to-text. Strips tags, decodes the handful of entities
 *  that show up in our chapter prose, and collapses whitespace. */
function htmlToText(html: string): string {
  if (!html) return '';
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&apos;/g, '’')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\[res:[a-z0-9-]+\]/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Convert a book name to its URL slug, mirroring the chapter route. */
export function bookNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
}

/** Build the Christ Index for one book. Pure (no I/O); safe to call from
 *  RSC components at build time. */
export function getChristIndexForBook(book: BibleBook): ChristIndexBook {
  const slug = bookNameToSlug(book.name);
  const entries: ChristIndexEntry[] = [];

  for (let ch = 1; ch <= book.chapters; ch++) {
    const legacy = getChapterContent(slug, ch);
    const rich = getRichChapter(slug, book.name, ch, legacy);
    if (!rich) continue;

    let summary = '';
    let title: string | undefined;

    if (rich.christIndexSummary) {
      summary = htmlToText(rich.christIndexSummary);
    }

    if (!summary) {
      // First christ block.
      for (const section of rich.sections) {
        const christ = section.blocks.find(
          (b): b is Extract<typeof b, { kind: 'christ' }> => b.kind === 'christ',
        );
        if (christ) {
          summary = htmlToText(christ.html);
          title = htmlToText(christ.title);
          break;
        }
      }
    }

    if (!summary && rich.intros.length > 0) {
      summary = htmlToText(rich.intros[0]);
    }

    if (!summary) continue;

    // Trim hard for the index — full prose lives on the chapter page.
    if (summary.length > 480) {
      summary = summary.slice(0, 477).trimEnd() + '…';
    }

    entries.push({
      chapter: ch,
      summary,
      title,
      curated: isHandAuthoredChapter(slug, ch),
    });
  }

  return { book, entries };
}

/** Build the Christ Index for every book. Expensive enough to warrant
 *  caching by the caller (the /christ pages do this via Next's RSC
 *  revalidate). Returned books are in canonical order. */
export function getFullChristIndex(): ChristIndexBook[] {
  return bibleBooks.map((b) => getChristIndexForBook(b));
}

/** Used by the /christ hub for at-a-glance counts. */
export interface ChristIndexBookSummary {
  book: BibleBook;
  slug: string;
  curatedCount: number;
  totalSummaries: number;
}

export function getChristIndexHub(): ChristIndexBookSummary[] {
  return bibleBooks.map((book) => {
    const { entries } = getChristIndexForBook(book);
    return {
      book,
      slug: bookNameToSlug(book.name),
      curatedCount: entries.filter((e) => e.curated).length,
      totalSummaries: entries.length,
    };
  });
}
