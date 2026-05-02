/**
 * canonicalRefURLs.ts
 * ───────────────────────────────────────────────────────────────────────────
 * Canonical-ref ↔ URL bridge for the web.
 *
 * Anywhere the web needs to link to a chapter or share a verse, route
 * through here so the URL shape is owned in one place. Mobile clients
 * can hit the same URLs (and parse them back via these helpers from
 * a deep link / universal link / share extension).
 *
 * URL shape:
 *   /bible/<book>/<chapter>             whole-chapter view
 *   /bible/<book>/<chapter>?v=16        single verse anchor
 *   /bible/<book>/<chapter>?v=4-7       verse range anchor
 *
 * The query parameter form is intentional: changing the path on a
 * verse-anchor share would also change the underlying chapter page.
 * Keeping the chapter as the path lets us anchor on any verse without
 * a separate route, and lets the chapter render normally if the query
 * is stripped.
 */

import {
  type CanonicalRef,
  canonical,
  isWholeChapter,
  parseRef,
  makeRef,
} from './canonicalRef';

/* ─── Build URL from ref ──────────────────────────────────────────────── */

/**
 * Build a path string for a CanonicalRef.
 *
 * @param ref the reference to encode
 * @param base optional URL base — defaults to a relative path
 * @returns a fully-qualified URL when base is provided, otherwise a path
 */
export function urlForRef(ref: CanonicalRef, base?: string | URL): string {
  const path = `/bible/${encodeURIComponent(ref.book)}/${ref.chapter}`;
  let suffix = '';
  if (!isWholeChapter(ref) && ref.verseStart !== null && ref.verseEnd !== null) {
    if (ref.verseEnd > ref.verseStart) {
      suffix = `?v=${ref.verseStart}-${ref.verseEnd}`;
    } else {
      suffix = `?v=${ref.verseStart}`;
    }
  }
  if (base !== undefined) {
    return new URL(path + suffix, base).toString();
  }
  return path + suffix;
}

/**
 * Convenience for a share URL — always absolute, always points at the
 * production site. Use this for share-sheet copy, push payloads, etc.
 */
export function shareURLForRef(
  ref: CanonicalRef,
  origin = 'https://learnofchrist.com',
): string {
  return urlForRef(ref, origin);
}

/* ─── Parse URL → ref ─────────────────────────────────────────────────── */

/**
 * Read a CanonicalRef out of a path or full URL.
 *
 * Accepts either:
 *   - "/bible/<book>/<chapter>"
 *   - "/bible/<book>/<chapter>?v=<start>[-<end>]"
 *   - a full URL (https://learnofchrist.com/bible/john/3?v=16)
 *
 * Returns null on any deviation — non-bible path, missing chapter,
 * malformed verse parameter, or a slug the canonical parser refuses.
 *
 * The parsed ref is built via parseRef on the canonical string so it
 * inherits the same strict validation.
 */
export function canonicalRefFromURL(input: string): CanonicalRef | null {
  let urlObj: URL;
  try {
    // Allow both absolute and root-relative inputs.
    urlObj = new URL(input, 'https://placeholder.invalid');
  } catch {
    return null;
  }

  // Path: /bible/<book>/<chapter>
  const segments = urlObj.pathname.split('/').filter(Boolean);
  if (segments.length !== 3) return null;
  if (segments[0] !== 'bible') return null;

  const book = decodeURIComponent(segments[1]);
  const chapterStr = segments[2];
  if (!/^\d+$/.test(chapterStr)) return null;
  const chapter = Number.parseInt(chapterStr, 10);
  if (chapter < 1) return null;

  // Verse anchor (optional)
  const v = urlObj.searchParams.get('v');
  if (v === null) {
    return parseRef(`${book}.${chapter}`);
  }

  // Reuse the canonical parser by building the canonical form and
  // parsing it. This guarantees URL-derived refs follow the same
  // strict rules as deep-link strings.
  const candidate = `${book}.${chapter}.${v}`;
  return parseRef(candidate);
}

/* ─── Convenience constructors ────────────────────────────────────────── */

/**
 * Build a chapter ref directly. Useful where you have (book, chapter)
 * already in scope and don't need to round-trip through the parser.
 */
export function chapterRef(book: string, chapter: number): CanonicalRef {
  return makeRef(book, chapter);
}

/** Build a single-verse ref. */
export function verseRef(book: string, chapter: number, verse: number): CanonicalRef {
  return makeRef(book, chapter, verse);
}

/** Build a verse-range ref. */
export function rangeRef(
  book: string,
  chapter: number,
  start: number,
  end: number,
): CanonicalRef {
  return makeRef(book, chapter, start, end);
}

/* ─── Display helpers ─────────────────────────────────────────────────── */

/**
 * Re-export the canonical string form for callers that already have a
 * ref and just need its serialized identity (sync row keys, JSON
 * payloads, deep-link payloads).
 */
export { canonical };
