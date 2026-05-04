/**
 * Rich study-guide schema.
 *
 * The Genesis 1 study guide is the gold standard. This file defines the data
 * shape that captures every section in it — intros, scripture blocks with
 * KJV-anchored highlight marks, Hebrew/Greek callouts, "Christ Connection"
 * boxes, "Carry into your day" application boxes, reflection prompts, inline
 * artwork hooks, dividers.
 *
 * Components/RichStudyGuide.tsx renders any RichChapterContent into the same
 * page Genesis 1 produces — same CSS, same highlight observer, same
 * translation-switching behaviour, same audio.
 */

/* ─── Inline scripture marks ──────────────────────────────────────────── */

/** A single span of text within a scripture verse. Plain text, a
 *  highlighted phrase that's clickable to jump to the matching commentary,
 *  or a research-resource hook that adds a small superscript number to the
 *  text and anchors down to the chapter's "Further study" section. */
export type VerseSpan =
  | { kind: 'text'; text: string }
  | {
      kind: 'mark';
      /** Visual highlight class. Genesis 1 uses three:
       *  • 'hp' — primary, used for Christ Connection anchors (warm).
       *  • 'hy' — secondary, used for Hebrew callouts (yellow).
       *  • 'hg' — tertiary, used for thematic commentary (gold/green). */
      tone: 'hp' | 'hy' | 'hg';
      text: string;
      /** Hash id of the commentary block this jumps to. */
      jumpTo: string;
    }
  | {
      kind: 'resource';
      /** Plain (un-highlighted) text — renders as ordinary verse text with
       *  a small superscript number rendered immediately after it. */
      text: string;
      /** Id of the matching entry in `RichChapterContent.resources`. The
       *  superscript number is auto-assigned in document order. */
      resourceId: string;
    };

export interface VerseLine {
  /** Verse number rendered as <span class="v">. */
  number: number;
  /** Spans that compose the verse text — text fragments interleaved with
   *  optional highlight marks. */
  spans: VerseSpan[];
}

/* ─── Study levels ────────────────────────────────────────────────────── */

/** A reader's chosen study depth, shared with the legacy StudyGuide
 *  component via lib/StudyLevelContext.
 *  • beginner    — scripture spine + Christ Connection + Carry only.
 *  • intermediate — + commentary.
 *  • deep        — + Hebrew/Greek callouts + reflection prompts + artwork.
 *
 *  Every block has an effective `minLevel`: it is rendered iff
 *  `LEVEL_RANK[activeLevel] >= LEVEL_RANK[effectiveMinLevel(block)]`.
 *  Authors omit `minLevel` on a block to take the default for that block
 *  kind (see `defaultMinLevel` below); they set it explicitly only when a
 *  particular block belongs at a different depth than its kind suggests.
 *
 *  Re-exported from lib/StudyLevelContext (which is the canonical home of
 *  the type) so chapter authors only need this one import.
 */
export type StudyLevel = 'beginner' | 'intermediate' | 'deep';

/** Numeric rank for comparing levels. Mirrored in lib/StudyLevelContext. */
const LEVEL_RANK: Record<StudyLevel, number> = {
  beginner: 1,
  intermediate: 2,
  deep: 3,
};

/* ─── Block types that compose a section ──────────────────────────────── */

export type Block =
  | { kind: 'scripture'; chapter: number; lines: VerseLine[]; minLevel?: StudyLevel }
  | { kind: 'commentary'; id?: string; html: string; minLevel?: StudyLevel }
  | { kind: 'hebrew'; id: string; title: string; script: string; translit: string; description: string; minLevel?: StudyLevel }
  | { kind: 'greek';  id: string; title: string; script: string; translit: string; description: string; minLevel?: StudyLevel }
  | { kind: 'christ'; id: string; title: string; html: string; minLevel?: StudyLevel }
  | { kind: 'carry';  html: string; minLevel?: StudyLevel }
  | { kind: 'reflection'; id: string; prompt: string; minLevel?: StudyLevel }
  | {
      kind: 'artwork';
      /** Author writes RegExp literals; the server resolves them
       *  before passing content to the (client) RichStudyGuide and
       *  swaps in `artworkSlug` so the client never receives a
       *  non-serializable RegExp. */
      matchTitle?: RegExp;
      matchArtist?: RegExp;
      artworkSlug?: string;
      caption: string;
      minLevel?: StudyLevel;
    }
  | { kind: 'divider'; minLevel?: StudyLevel };

/* ─── Study-level helpers ────────────────────────────────────────────── */

/** Default `minLevel` for a block kind when the author hasn't overridden it.
 *  Scripture / christ / carry are the spine of every chapter and appear at
 *  every level. Commentary is the teaching layer — visible from Intermediate
 *  up. Hebrew / Greek / reflection / artwork are the deepest layer. Dividers
 *  are decorative; they take the lowest level so they never orphan content
 *  above. */
export function defaultMinLevel(kind: Block['kind']): StudyLevel {
  switch (kind) {
    case 'scripture':
    case 'christ':
    case 'carry':
      return 'beginner';
    case 'commentary':
      return 'intermediate';
    case 'hebrew':
    case 'greek':
    case 'reflection':
    case 'artwork':
      return 'deep';
    case 'divider':
      return 'beginner';
  }
}

/** A block's effective minimum level — explicit override or kind default. */
export function effectiveMinLevel(block: Block): StudyLevel {
  return block.minLevel ?? defaultMinLevel(block.kind);
}

/** True iff the block should render at the given active level. */
export function isVisibleAtLevel(block: Block, level: StudyLevel): boolean {
  return LEVEL_RANK[level] >= LEVEL_RANK[effectiveMinLevel(block)];
}

/** Per-level estimated reading time for a chapter, in whole minutes.
 *  Generated by the audit script after a chapter is authored or edited.
 *  Surfaced inside the study-level picker so users see the real per-chapter
 *  time, not just the global label. */
export interface EstimatedMinutes {
  beginner: number;
  intermediate: number;
  deep: number;
}

/* ─── A single section of a chapter ───────────────────────────────────── */

export interface RichSection {
  /** Reference line above the heading, e.g. "Genesis 1:1–2" or
   *  "Creation Day 1 · Genesis 1:3–5". Optional. */
  ref?: string;
  /** The section's display heading, e.g. "The Beginning", "Light". */
  title?: string;
  blocks: Block[];
}

/* ─── A complete chapter ──────────────────────────────────────────────── */

export interface RichChapterContent {
  /** Book + chapter for the page. Used by the highlight controller and
   *  share/progress components. */
  bookSlug: string;
  bookName: string;
  chapter: number;

  /** List of <p class="intro"> paragraphs at the top of the page. */
  intros: string[];
  /** Tap-hint shown directly under the intro. Defaults to a sensible
   *  message if omitted; pass null to hide it. */
  tapHint?: string | null;
  /** When true (default) the dismissible "A note on translations" card
   *  renders. Set false on chapters whose commentary is translation-neutral. */
  showKjvNote?: boolean;

  /** Optional artwork to feature at the very top of the chapter (above the
   *  divider, before any sections). The match runs against the artworks
   *  the page hands in. As with `kind: 'artwork'` blocks, the server
   *  resolves matchTitle/matchArtist into `artworkSlug` before passing
   *  the content to the (client) RichStudyGuide so RegExp never
   *  crosses the RSC boundary (Next.js cannot serialize it). */
  opener?: {
    matchTitle?: RegExp;
    matchArtist?: RegExp;
    artworkSlug?: string;
    caption: string;
  };

  /** Body sections of the study guide. */
  sections: RichSection[];

  /** Optional bottom share-button card. */
  bottomShare?: {
    quote: string;
    snippet: string;
    ref: string;
    /** Override the default share label "Share <book> <chapter>". */
    label?: string;
  };

  /** Set true when the chapter has at least one Hebrew callout — drives
   *  whether the <HebrewAudio> component mounts. Auto-derived if absent. */
  hasHebrew?: boolean;

  /** Optional list of external research resources (museum holdings, manuscript
   *  collections, peer-reviewed studies, archaeological catalogues, etc.).
   *  Inline `hr(text, resourceId)` marks in the prose render a small blue
   *  superscript number that anchors down to the matching card in the
   *  "Further study" section at the bottom of the chapter. The number is
   *  auto-assigned in document order; authors do not number manually. */
  resources?: ResourceLink[];

  /** Per-tier estimated reading time, in whole minutes. Written by the
   *  scripts/audit-and-tag-depth.ts audit pass; never hand-edited. The depth
   *  control surfaces these so users see "Quick · 4m" for the actual chapter
   *  in front of them, not just the global label. */
  estimatedMinutes?: EstimatedMinutes;
}

/* ─── Research resources ──────────────────────────────────────────────── */

export type ResourceKind =
  | 'museum'
  | 'manuscript'
  | 'archaeology'
  | 'lexicon'
  | 'study'
  | 'archive';

export interface ResourceLink {
  /** Stable id referenced by inline `hr(text, id)` marks. Lowercase + hyphens. */
  id: string;
  /** Source institution / publisher, rendered in small caps above the title.
   *  Examples: "The British Museum", "Israel Museum, Jerusalem",
   *  "Yale Divinity Library", "JBL — Society of Biblical Literature". */
  source: string;
  /** Short, scannable title of the artifact / manuscript / paper. */
  label: string;
  /** Direct URL to the artefact page or open-access publication. Must be
   *  institutional and stable — no blogs, no devotional sites, no
   *  link-rot-prone pages. */
  url: string;
  /** One-sentence (occasionally two) explanation of what this resource shows
   *  AND why it matters for the specific point in the chapter it's anchored
   *  to. Avoid generic chapter overviews. */
  description: string;
  /** Drives the small badge on the resource card. */
  kind: ResourceKind;
}

/* ─── Helpers for chapter authors ─────────────────────────────────────── */

/** Build a verse line from plain text — every span is non-highlighted text. */
export function plain(number: number, text: string): VerseLine {
  return { number, spans: [{ kind: 'text', text }] };
}

/** Build a verse line from an array of spans for richer highlighting. */
export function verse(number: number, ...spans: VerseSpan[]): VerseLine {
  return { number, spans };
}

/** Convenience for the three highlight tones. */
export const hp = (text: string, jumpTo: string): VerseSpan => ({ kind: 'mark', tone: 'hp', text, jumpTo });
export const hy = (text: string, jumpTo: string): VerseSpan => ({ kind: 'mark', tone: 'hy', text, jumpTo });
export const hg = (text: string, jumpTo: string): VerseSpan => ({ kind: 'mark', tone: 'hg', text, jumpTo });
export const t = (text: string): VerseSpan => ({ kind: 'text', text });

/** Resource hook — wraps `text` plainly (no underline, no color change) and
 *  renders a small blue superscript number after it. The number is computed
 *  at render time from the chapter's resources array order. */
export const hr = (text: string, resourceId: string): VerseSpan => ({ kind: 'resource', text, resourceId });

/* ─── Level filtering ────────────────────────────────────────────────── */

/** Collect every block id that survives the given level — used to strip
 *  dangling highlight marks (`hp/hy/hg`) that point at a hidden commentary. */
function visibleBlockIds(content: RichChapterContent, level: StudyLevel): Set<string> {
  const ids = new Set<string>();
  for (const section of content.sections) {
    for (const block of section.blocks) {
      if (!isVisibleAtLevel(block, level)) continue;
      if ('id' in block && typeof block.id === 'string') ids.add(block.id);
    }
  }
  return ids;
}

/** Return a copy of the chapter with:
 *  – blocks whose `effectiveMinLevel` exceeds the active level removed,
 *  – sections that are empty (or contain only dividers) dropped,
 *  – verse `mark` spans whose `jumpTo` no longer exists demoted to plain
 *    text spans so clicks don't scroll to nothing,
 *  – `intros` trimmed to the first paragraph at Beginner,
 *  – `bottomShare` removed at Beginner.
 *
 *  The renderer calls this once per (content, level) pair. Pure function;
 *  no React state, no side effects — safe to call inside SSR.
 */
export function filterContentByLevel(
  content: RichChapterContent,
  level: StudyLevel,
): RichChapterContent {
  const surviving = visibleBlockIds(content, level);

  const stripDangling = (line: VerseLine): VerseLine => ({
    number: line.number,
    spans: line.spans.map((s) =>
      s.kind === 'mark' && !surviving.has(s.jumpTo)
        ? ({ kind: 'text', text: s.text } as VerseSpan)
        : s,
    ),
  });

  const filteredSections: RichSection[] = content.sections
    .map((section) => {
      const blocks = section.blocks
        .filter((b) => isVisibleAtLevel(b, level))
        .map((b) =>
          b.kind === 'scripture'
            ? { ...b, lines: b.lines.map(stripDangling) }
            : b,
        );
      // Drop a section that has no real content left. A section is "empty"
      // if it has zero blocks, or if every surviving block is a divider.
      const meaningful = blocks.filter((b) => b.kind !== 'divider').length;
      if (meaningful === 0) return null;
      return { ...section, blocks };
    })
    .filter((s): s is RichSection => s !== null);

  const isBeginner = level === 'beginner';
  const filteredIntros = isBeginner ? content.intros.slice(0, 1) : content.intros;
  const filteredBottomShare = isBeginner ? undefined : content.bottomShare;

  return {
    ...content,
    intros: filteredIntros,
    bottomShare: filteredBottomShare,
    sections: filteredSections,
  };
}
