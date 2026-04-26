import { getChapterContent, type ChapterContent } from '@/data/chapter-content';
import { supabaseServer } from '@/lib/supabase';

/**
 * Per-field override row stored in `chapter_overrides`. Any subset of the
 * ChapterContent shape is allowed — fields not present in the override
 * fall back to the file-based content.
 */
export type ChapterContentOverride = Partial<ChapterContent>;

export interface ChapterOverrideRow {
  book_slug: string;
  chapter: number;
  content: ChapterContentOverride;
  updated_at: string;
  updated_by: string | null;
}

/**
 * Merge an override on top of the file-based ChapterContent. Override
 * fields win; missing fields fall back. When neither has a value the
 * helper returns null (matches the legacy contract — pages without
 * either source render the generic placeholder).
 */
export function mergeChapterContent(
  base: ChapterContent | null,
  override: ChapterContentOverride | null,
): ChapterContent | null {
  if (!override || Object.keys(override).length === 0) return base;
  if (!base) {
    // The override needs the full required shape to stand alone.
    if (
      override.overview &&
      override.themes &&
      override.questions &&
      override.christConnection &&
      override.keyVerse
    ) {
      return {
        overview: override.overview,
        themes: override.themes,
        questions: override.questions,
        christConnection: override.christConnection,
        keyVerse: override.keyVerse,
      };
    }
    return null;
  }
  return {
    overview: override.overview ?? base.overview,
    themes: override.themes ?? base.themes,
    questions: override.questions ?? base.questions,
    christConnection: override.christConnection ?? base.christConnection,
    keyVerse: override.keyVerse ?? base.keyVerse,
  };
}

/**
 * Fetch the chapter override row, if any. Uses the public anon client —
 * the table is publicly readable by design (the content IS the page).
 */
export async function getChapterOverride(
  bookSlug: string,
  chapter: number,
): Promise<ChapterContentOverride | null> {
  const { data, error } = await supabaseServer
    .from('chapter_overrides')
    .select('content')
    .eq('book_slug', bookSlug)
    .eq('chapter', chapter)
    .maybeSingle();
  if (error) {
    // Don't poison the page render if the override table has a hiccup —
    // log and fall through to the file content.
    console.warn('[chapterContent] override fetch failed', error.message);
    return null;
  }
  return (data?.content as ChapterContentOverride) ?? null;
}

/**
 * The render path for /study/[book]/[chapter]. Resolves the file content,
 * looks up an override, and returns the merged result.
 */
export async function getChapterContentMerged(
  bookSlug: string,
  chapter: number,
): Promise<ChapterContent | null> {
  const fileContent = getChapterContent(bookSlug, chapter);
  const override = await getChapterOverride(bookSlug, chapter);
  return mergeChapterContent(fileContent, override);
}
