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

/* ─── Block types that compose a section ──────────────────────────────── */

export type Block =
  | { kind: 'scripture'; chapter: number; lines: VerseLine[] }
  | { kind: 'commentary'; id?: string; html: string }
  | { kind: 'hebrew'; id: string; title: string; script: string; translit: string; description: string }
  | { kind: 'greek';  id: string; title: string; script: string; translit: string; description: string }
  | { kind: 'christ'; id: string; title: string; html: string }
  | { kind: 'carry';  html: string }
  | { kind: 'reflection'; id: string; prompt: string }
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
    }
  | { kind: 'divider' };

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
