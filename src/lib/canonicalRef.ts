/**
 * canonicalRef.ts
 * ───────────────────────────────────────────────────────────────────────────
 * The canonical scripture-reference type used wherever a scripture
 * pointer crosses a boundary — deep links, push payloads, widget
 * config, journal anchors, sync row identifiers, share sheets.
 *
 * Format:
 *
 *     <book-slug>.<chapter>[.<verse>][-<verse_end>]
 *
 *     john.3.16              single verse
 *     genesis.1.1-3          verse range
 *     psalms.23              whole chapter
 *
 * This is the TypeScript mirror of `ios/LearnOfChrist/Reference/ScriptureRef.swift`.
 * Both implementations are driven by the shared test vectors at
 * docs/scripture-ref-test-vectors.json — they MUST round-trip the same
 * inputs to the same outputs, byte for byte.
 *
 * Note: this is the strict CANONICAL format only — for the human
 * reference parser ("John 3:16", "1 Cor. 10:1-2", etc.) used inside
 * commentary text, see `scriptureRefs.ts`.
 */

export interface CanonicalRef {
  /** Book slug, e.g. "genesis", "1-corinthians", "song-of-solomon". */
  readonly book: string;
  /** Chapter number, 1-indexed. */
  readonly chapter: number;
  /** First verse in the range. `null` means the whole chapter is referenced. */
  readonly verseStart: number | null;
  /** Inclusive last verse. Equals verseStart for a single verse. */
  readonly verseEnd: number | null;
}

/* ─── Construction ────────────────────────────────────────────────────── */

/** Build a CanonicalRef. A nil verseStart implies the whole chapter;
 *  passing only verseStart fills verseEnd to match (single verse). */
export function makeRef(
  book: string,
  chapter: number,
  verseStart: number | null = null,
  verseEnd: number | null = null,
): CanonicalRef {
  // Normalize: missing verseEnd implies same verse as verseStart.
  const start = verseStart;
  const end = start != null ? (verseEnd ?? start) : null;
  return Object.freeze({ book, chapter, verseStart: start, verseEnd: end });
}

/* ─── Predicates ──────────────────────────────────────────────────────── */

export function isWholeChapter(ref: CanonicalRef): boolean {
  return ref.verseStart === null;
}

export function isRange(ref: CanonicalRef): boolean {
  if (ref.verseStart === null || ref.verseEnd === null) return false;
  return ref.verseEnd > ref.verseStart;
}

/* ─── Serialization ───────────────────────────────────────────────────── */

/** Canonical string form. Round-trips exactly through `parseRef`. */
export function canonical(ref: CanonicalRef): string {
  if (ref.verseStart === null || ref.verseEnd === null) {
    return `${ref.book}.${ref.chapter}`;
  }
  if (ref.verseEnd > ref.verseStart) {
    return `${ref.book}.${ref.chapter}.${ref.verseStart}-${ref.verseEnd}`;
  }
  return `${ref.book}.${ref.chapter}.${ref.verseStart}`;
}

/* ─── Parser ──────────────────────────────────────────────────────────── */

/**
 * Parses the canonical form. Returns null for any deviation — case,
 * whitespace, en-dashes, missing parts. The strict reading is
 * intentional: this is an interchange format, not a search input.
 *
 * Mirrors ScriptureRef.parse in the iOS app exactly. If you change
 * either side, change both AND extend the shared test vectors.
 */
export function parseRef(s: string): CanonicalRef | null {
  if (typeof s !== 'string' || s.length === 0) return null;

  // No leading / trailing / internal whitespace.
  if (s !== s.trim() || /\s/.test(s)) return null;

  const parts = s.split('.');
  if (parts.length !== 2 && parts.length !== 3) return null;

  const book = parts[0];
  if (!isValidBookSlug(book)) return null;

  const chapterStr = parts[1];
  if (!isAllAsciiDigits(chapterStr)) return null;
  const chapter = Number.parseInt(chapterStr, 10);
  if (!Number.isFinite(chapter) || chapter < 1) return null;

  if (parts.length === 2) {
    return makeRef(book, chapter);
  }

  const verseSegment = parts[2];
  if (verseSegment.length === 0) return null;

  const verseParts = verseSegment.split('-');
  if (verseParts.length === 1) {
    if (!isAllAsciiDigits(verseParts[0])) return null;
    const v = Number.parseInt(verseParts[0], 10);
    if (!Number.isFinite(v) || v < 1) return null;
    return makeRef(book, chapter, v, v);
  }
  if (verseParts.length === 2) {
    if (!isAllAsciiDigits(verseParts[0]) || !isAllAsciiDigits(verseParts[1])) return null;
    const start = Number.parseInt(verseParts[0], 10);
    const end = Number.parseInt(verseParts[1], 10);
    if (!Number.isFinite(start) || !Number.isFinite(end)) return null;
    if (start < 1 || end <= start) return null;
    return makeRef(book, chapter, start, end);
  }
  return null;
}

/* ─── Internals ───────────────────────────────────────────────────────── */

/**
 * Canonical book slug shape:
 *
 *   - optional leading single digit + hyphen  (1-corinthians, 2-john)
 *   - then one alphabetic word                (genesis, song)
 *   - then zero or more hyphenated parts,
 *     each alphanumeric                       (-of, -solomon, -151)
 *
 * This rejects "john3", "1corinthians", "abc123" — all of which
 * pass a naive "lowercase letters / digits / hyphens" check but
 * collapse meaning into the wrong shape.
 */
const BOOK_SLUG_PATTERN = /^(?:[0-9]-)?[a-z]+(?:-[a-z0-9]+)*$/;

function isValidBookSlug(s: string): boolean {
  return BOOK_SLUG_PATTERN.test(s);
}

function isAllAsciiDigits(s: string): boolean {
  if (s.length === 0) return false;
  for (const ch of s) {
    const code = ch.codePointAt(0)!;
    if (code < 0x30 || code > 0x39) return false;
  }
  return true;
}
