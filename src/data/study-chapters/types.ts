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

/** A single span of text within a scripture verse. Plain text or a
 *  highlighted phrase that's clickable to jump to the matching commentary. */
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
