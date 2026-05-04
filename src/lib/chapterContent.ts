import { getChapterContent, type ChapterContent } from '@/data/chapter-content';
import type { Block, RichChapterContent } from '@/data/study-chapters/types';
import { supabaseServer } from '@/lib/supabase';

/**
 * Per-field override for the legacy ChapterContent shape. Any subset
 * is allowed — fields not present fall back to the file content.
 */
export type LegacyChapterContentOverride = Partial<ChapterContent>;

/**
 * Override row stored in `chapter_overrides`. Two shapes are accepted:
 *
 *   - { kind: 'legacy', data: Partial<ChapterContent> }
 *       Edits to overview/themes/questions/christConnection/keyVerse.
 *       The page render runs `getRichChapter` over the merged legacy
 *       content (so auto-port logic improvements still apply).
 *
 *   - { kind: 'rich', data: SerializedRichChapterContent }
 *       Full RichChapterContent override that wins over both the
 *       hand-authored entry in RICH_CHAPTERS and the auto-port path.
 *       This is how hand-authored chapters become editable in-page.
 *
 * Older rows written by the first version of this feature don't carry
 * a `kind` field — those are treated as legacy. Pre-tag detection lives
 * in `parseOverrideRow` below.
 */
export type ChapterOverride =
  | { kind: 'legacy'; data: LegacyChapterContentOverride }
  | { kind: 'rich'; data: SerializedRichChapterContent };

/* ─────────────────────────────────────────────────────────────────────── */
/* RegExp serialization                                                    */
/*                                                                         */
/* Block.artwork uses RegExp objects which don't survive JSON. The override */
/* JSON stores them as { pattern, flags } and we reconstruct at render     */
/* time. Empty strings/null are valid — they just mean "no constraint".    */
/* ─────────────────────────────────────────────────────────────────────── */

export interface SerializedRegExp {
  pattern: string;
  flags?: string;
}

export function serializeRegExp(re: RegExp | undefined | null): SerializedRegExp | null {
  if (!re) return null;
  return { pattern: re.source, flags: re.flags };
}

export function deserializeRegExp(s: SerializedRegExp | null | undefined): RegExp | undefined {
  if (!s || !s.pattern) return undefined;
  try {
    return new RegExp(s.pattern, s.flags ?? '');
  } catch {
    return undefined;
  }
}

/* ─────────────────────────────────────────────────────────────────────── */
/* Serialized RichChapterContent                                           */
/*                                                                         */
/* Mirrors RichChapterContent but every RegExp is replaced with the        */
/* SerializedRegExp shape so the JSONB column round-trips cleanly.         */
/* ─────────────────────────────────────────────────────────────────────── */

export type SerializedBlock =
  | { kind: 'scripture'; chapter: number; lines: import('@/data/study-chapters/types').VerseLine[] }
  | { kind: 'commentary'; id?: string; html: string }
  | { kind: 'hebrew'; id: string; title: string; script: string; translit: string; description: string }
  | { kind: 'greek'; id: string; title: string; script: string; translit: string; description: string }
  | { kind: 'christ'; id: string; title: string; html: string }
  | { kind: 'carry'; html: string }
  | { kind: 'reflection'; id: string; prompt: string }
  | {
      kind: 'artwork';
      matchTitle?: SerializedRegExp | null;
      matchArtist?: SerializedRegExp | null;
      artworkSlug?: string;
      caption: string;
      topical?: boolean;
      topicMatch?: string | string[];
      themed?: boolean;
    }
  | { kind: 'divider' };

export interface SerializedRichSection {
  ref?: string;
  title?: string;
  blocks: SerializedBlock[];
}

export interface SerializedRichChapterContent {
  bookSlug: string;
  bookName: string;
  chapter: number;
  intros: string[];
  tapHint?: string | null;
  showKjvNote?: boolean;
  opener?: {
    matchTitle?: SerializedRegExp | null;
    matchArtist?: SerializedRegExp | null;
    artworkSlug?: string;
    caption: string;
    topical?: boolean;
    topicMatch?: string | string[];
    themed?: boolean;
  } | null;
  topicTags?: string[];
  sections: SerializedRichSection[];
  bottomShare?: { quote: string; snippet: string; ref: string; label?: string } | null;
  hasHebrew?: boolean;
}

/** Reverse SerializedRichChapterContent → live RichChapterContent (with RegExp). */
export function hydrateRich(s: SerializedRichChapterContent): RichChapterContent {
  return {
    bookSlug: s.bookSlug,
    bookName: s.bookName,
    chapter: s.chapter,
    intros: s.intros ?? [],
    tapHint: s.tapHint ?? undefined,
    showKjvNote: s.showKjvNote,
    opener: s.opener
      ? {
          matchTitle: deserializeRegExp(s.opener.matchTitle),
          matchArtist: deserializeRegExp(s.opener.matchArtist),
          artworkSlug: s.opener.artworkSlug,
          caption: s.opener.caption,
          topical: s.opener.topical,
          topicMatch: s.opener.topicMatch,
          themed: s.opener.themed,
        }
      : undefined,
    sections: (s.sections ?? []).map((sec) => ({
      ref: sec.ref,
      title: sec.title,
      blocks: sec.blocks.map(hydrateBlock),
    })),
    bottomShare: s.bottomShare ?? undefined,
    hasHebrew: s.hasHebrew,
    topicTags: s.topicTags,
  };
}

function hydrateBlock(b: SerializedBlock): Block {
  if (b.kind === 'artwork') {
    return {
      kind: 'artwork',
      matchTitle: deserializeRegExp(b.matchTitle),
      matchArtist: deserializeRegExp(b.matchArtist),
      artworkSlug: b.artworkSlug,
      caption: b.caption,
      topical: b.topical,
      topicMatch: b.topicMatch,
      themed: b.themed,
    };
  }
  return b as Block;
}

/** Forward RichChapterContent (RegExp) → SerializedRichChapterContent (strings). */
export function dehydrateRich(c: RichChapterContent): SerializedRichChapterContent {
  return {
    bookSlug: c.bookSlug,
    bookName: c.bookName,
    chapter: c.chapter,
    intros: c.intros,
    tapHint: c.tapHint,
    showKjvNote: c.showKjvNote,
    opener: c.opener
      ? {
          matchTitle: serializeRegExp(c.opener.matchTitle),
          matchArtist: serializeRegExp(c.opener.matchArtist),
          artworkSlug: c.opener.artworkSlug,
          caption: c.opener.caption,
          topical: c.opener.topical,
          topicMatch: c.opener.topicMatch,
          themed: c.opener.themed,
        }
      : undefined,
    sections: c.sections.map((sec) => ({
      ref: sec.ref,
      title: sec.title,
      blocks: sec.blocks.map(dehydrateBlock),
    })),
    bottomShare: c.bottomShare,
    hasHebrew: c.hasHebrew,
    topicTags: c.topicTags,
  };
}

function dehydrateBlock(b: Block): SerializedBlock {
  if (b.kind === 'artwork') {
    return {
      kind: 'artwork',
      matchTitle: serializeRegExp(b.matchTitle),
      matchArtist: serializeRegExp(b.matchArtist),
      artworkSlug: b.artworkSlug,
      caption: b.caption,
      topical: b.topical,
      topicMatch: b.topicMatch,
      themed: b.themed,
    };
  }
  return b as SerializedBlock;
}

/* ─────────────────────────────────────────────────────────────────────── */
/* Merge logic                                                             */
/* ─────────────────────────────────────────────────────────────────────── */

/**
 * Merge a legacy override on top of file-based ChapterContent. Override
 * fields win; missing fields fall back. Returns null when neither side
 * has enough to render.
 */
export function mergeChapterContent(
  base: ChapterContent | null,
  override: LegacyChapterContentOverride | null,
): ChapterContent | null {
  if (!override || Object.keys(override).length === 0) return base;
  if (!base) {
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
 * Detect a stored override's shape. Rows written by the first version of
 * this feature are bare ChapterContent fields; newer rows carry an
 * explicit `kind` discriminator. Returns null when the row is absent
 * or unreadable.
 */
function parseOverrideRow(raw: unknown): ChapterOverride | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Record<string, unknown>;
  // Tagged shape (newer writes).
  if (r.kind === 'legacy' && r.data && typeof r.data === 'object') {
    return { kind: 'legacy', data: r.data as LegacyChapterContentOverride };
  }
  if (r.kind === 'rich' && r.data && typeof r.data === 'object') {
    return { kind: 'rich', data: r.data as SerializedRichChapterContent };
  }
  // Untagged legacy (older writes): treat the row content as legacy data.
  // Heuristic: presence of any of the five legacy fields and no `sections` array.
  if (
    !Array.isArray((r as { sections?: unknown }).sections) &&
    ('overview' in r || 'themes' in r || 'questions' in r || 'christConnection' in r || 'keyVerse' in r)
  ) {
    return { kind: 'legacy', data: r as LegacyChapterContentOverride };
  }
  return null;
}

/** Fetch the override row, returning the parsed discriminated shape. */
export async function getChapterOverrideRow(
  bookSlug: string,
  chapter: number,
): Promise<ChapterOverride | null> {
  const { data, error } = await supabaseServer
    .from('chapter_overrides')
    .select('content')
    .eq('book_slug', bookSlug)
    .eq('chapter', chapter)
    .maybeSingle();
  if (error) {
    console.warn('[chapterContent] override fetch failed', error.message);
    return null;
  }
  return parseOverrideRow(data?.content);
}

/**
 * Legacy helper kept for backwards compatibility — returns just the
 * legacy ChapterContent slice of any override (or null when the row
 * is a rich override). Used by callers that pre-date rich overrides.
 */
export async function getChapterOverride(
  bookSlug: string,
  chapter: number,
): Promise<LegacyChapterContentOverride | null> {
  const row = await getChapterOverrideRow(bookSlug, chapter);
  if (!row) return null;
  return row.kind === 'legacy' ? row.data : null;
}

/**
 * Render path: returns either
 *   - a full RichChapterContent override (when the row is `kind: 'rich'`), or
 *   - a merged-legacy ChapterContent that the page can pass to getRichChapter
 *     so the auto-port pipeline still runs on top of the merged fields.
 *
 * The page is responsible for the final `getRichChapter` call when the
 * payload is legacy — this helper stays focused on storage shape resolution.
 */
export async function resolveChapterOverride(
  bookSlug: string,
  chapter: number,
): Promise<
  | { kind: 'legacy'; legacy: ChapterContent | null }
  | { kind: 'rich'; rich: RichChapterContent }
> {
  const row = await getChapterOverrideRow(bookSlug, chapter);
  const fileContent = getChapterContent(bookSlug, chapter);
  if (row?.kind === 'rich') {
    return { kind: 'rich', rich: hydrateRich(row.data) };
  }
  const merged = mergeChapterContent(fileContent, row?.kind === 'legacy' ? row.data : null);
  return { kind: 'legacy', legacy: merged };
}

/** Backwards-compat shim: the old call site takes a `getChapterContentMerged`
 *  that returns just a ChapterContent. With rich overrides on the table
 *  this can fail to capture the override — callers should migrate to
 *  `resolveChapterOverride`. Kept here so existing imports don't crash. */
export async function getChapterContentMerged(
  bookSlug: string,
  chapter: number,
): Promise<ChapterContent | null> {
  const r = await resolveChapterOverride(bookSlug, chapter);
  if (r.kind === 'rich') {
    // Rich override is the authoritative render — but legacy callers expect
    // a ChapterContent. Return null so they take the file-based path; the
    // study page now uses resolveChapterOverride directly.
    return getChapterContent(bookSlug, chapter);
  }
  return r.legacy;
}
