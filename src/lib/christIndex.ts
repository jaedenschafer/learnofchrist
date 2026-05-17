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

/** Build the Christ Index for one book. Async because `getRichChapter`
 *  now lazy-loads hand-authored chapters via dynamic import — see
 *  `data/study-chapters/index.ts`. Still safe to call from RSC
 *  components at build time; the page just `await`s it. */
export async function getChristIndexForBook(book: BibleBook): Promise<ChristIndexBook> {
  const slug = bookNameToSlug(book.name);
  const entries: ChristIndexEntry[] = [];

  // Resolve every chapter in parallel — each is a tiny dynamic import,
  // and a sequential loop would multiply the import overhead by `book.chapters`.
  const richResults = await Promise.all(
    Array.from({ length: book.chapters }, (_, i) => {
      const ch = i + 1;
      const legacy = getChapterContent(slug, ch);
      return getRichChapter(slug, book.name, ch, legacy);
    }),
  );

  for (let ch = 1; ch <= book.chapters; ch++) {
    const legacy = getChapterContent(slug, ch);
    const rich = richResults[ch - 1];
    if (!rich) continue;

    // Skip empty-placeholder chapters. `getRichChapter` returns a stub
    // ("a hand-written study guide for this chapter is on the way…") when
    // both the rich and legacy registries are empty. Detect that stub by
    // checking for zero `christ` blocks AND no curated index summary AND
    // no underlying legacy content — surfacing the placeholder text in
    // the index would be worse than leaving the chapter out.
    const isCurated = isHandAuthoredChapter(slug, ch);
    const hasChristBlock = rich.sections.some((s) =>
      s.blocks.some((b) => b.kind === 'christ'),
    );
    if (!isCurated && !legacy && !hasChristBlock && !rich.christIndexSummary) {
      continue;
    }

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

    // For auto-ported chapters whose legacy text exists but produced no
    // christ block (rare), fall back to the legacy christConnection
    // directly — which is what the auto-port reads from anyway. Avoids
    // ever surfacing the chapter intro paragraph as a "Christ summary."
    if (!summary && legacy?.christConnection) {
      summary = htmlToText(legacy.christConnection);
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
export async function getFullChristIndex(): Promise<ChristIndexBook[]> {
  return Promise.all(bibleBooks.map((b) => getChristIndexForBook(b)));
}

/** Used by the /christ hub for at-a-glance counts. */
export interface ChristIndexBookSummary {
  book: BibleBook;
  slug: string;
  curatedCount: number;
  totalSummaries: number;
}

export async function getChristIndexHub(): Promise<ChristIndexBookSummary[]> {
  return Promise.all(
    bibleBooks.map(async (book) => {
      const { entries } = await getChristIndexForBook(book);
      return {
        book,
        slug: bookNameToSlug(book.name),
        curatedCount: entries.filter((e) => e.curated).length,
        totalSummaries: entries.length,
      };
    }),
  );
}
