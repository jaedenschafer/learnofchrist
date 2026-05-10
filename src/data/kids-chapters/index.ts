/**
 * Kids study-guide registry.
 *
 * Hand-authored kids chapters live here. Unlike the adult `study-chapters`
 * registry, there is NO auto-port fallback — kids content has to be
 * intentionally written, because adapting an adult guide one-to-one
 * doesn't produce a usable kids guide. When `getKidsChapter` returns
 * null for a (book, chapter) pair, the page renders a "Kids version
 * coming soon" banner above the adult content so the page is never
 * blank.
 *
 * Adding a new kids chapter:
 *
 *   1. Author the file at `genesis-1.ts` (etc.) using `KidsChapterContent`.
 *   2. Import + register here.
 *
 * That's it — the page route does the rest.
 */

import type { KidsChapterContent } from './types';
import { GENESIS_1_KIDS } from './genesis-1';
import { JOHN_3_KIDS } from './john-3';
import { PSALMS_23_KIDS } from './psalms-23';

const KIDS_CHAPTERS: Record<string, KidsChapterContent> = {
  'genesis/1': GENESIS_1_KIDS,
  'john/3': JOHN_3_KIDS,
  'psalms/23': PSALMS_23_KIDS,
};

/** Look up a kids chapter. Returns null when no kids version has been
 *  authored yet — the caller falls back to the adult guide with a
 *  "coming soon" banner. */
export function getKidsChapter(
  bookSlug: string,
  chapter: number,
): KidsChapterContent | null {
  return KIDS_CHAPTERS[`${bookSlug}/${chapter}`] ?? null;
}

/** True when a kids chapter exists for this slot. Useful for analytics
 *  and for the picker's "kids version available" indicator. */
export function hasKidsChapter(bookSlug: string, chapter: number): boolean {
  return `${bookSlug}/${chapter}` in KIDS_CHAPTERS;
}
