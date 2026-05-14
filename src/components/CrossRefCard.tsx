'use client';

import Link from 'next/link';
import type { CrossRef } from '@/data/study-chapters/types';
import './CrossRefCard.css';

/** Decode the small set of HTML entities that appear in author prose so
 *  they don't render literally inside the card (snippets are plain text,
 *  not innerHTML). */
export function decodeEntities(s: string): string {
  return s
    .replace(/&apos;/g, '’')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

/** Derive a canonical study-guide URL from a free-form reference label
 *  like "John 1:1–3" or "1 Samuel 17:48–50". Returns null when the ref
 *  doesn't parse cleanly so the card falls back to a static (non-link)
 *  presentation rather than a broken link. */
export function deriveHrefFromRef(ref: string): string | null {
  // Match "<Book name with optional leading digit> <chapter>[:<verse>]"
  const m = ref.match(/^([1-3]?\s?[A-Za-z][A-Za-z'’\s]*?)\s+(\d+)(?::|$|\s)/);
  if (!m) return null;
  const book = m[1].trim().toLowerCase().replace(/['’]/g, '').replace(/\s+/g, '-');
  const chapter = parseInt(m[2], 10);
  if (!book || !chapter) return null;
  return `/study/${book}/${chapter}`;
}

/**
 * Swipeable card rendered after a section's last block. Surfaces 3–5 places
 * elsewhere in Scripture where the same theme, image, or promise echoes.
 *
 * Intentionally low-chrome: a single hairline above + a small label, then a
 * horizontal-scrolling row of refs. On desktop the row wraps onto a flex
 * grid; on touch it's a snap-scroll carousel.
 *
 * Each ref renders the reference label, a short snippet, and an optional
 * "Why" note. Tapping the card jumps to the matching study guide page.
 */
export default function CrossRefCard({
  refs,
  sectionTitle,
}: {
  refs: CrossRef[];
  sectionTitle?: string;
}) {
  if (refs.length === 0) return null;

  return (
    <aside
      className="xref-card"
      aria-label={
        sectionTitle
          ? `Cross-references for ${sectionTitle}`
          : 'Cross-references'
      }
    >
      <p className="xref-card__label">
        <svg
          className="xref-card__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 10a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"
          />
        </svg>
        Where this echoes
      </p>
      <ul className="xref-card__row">
        {refs.map((xref, i) => {
          const href = xref.href ?? deriveHrefFromRef(xref.ref);
          return (
            <li key={`${xref.ref}-${i}`} className="xref-card__item">
              {href ? (
                <Link href={href} className="xref-card__link">
                  <CrossRefBody xref={xref} />
                </Link>
              ) : (
                <div className="xref-card__static">
                  <CrossRefBody xref={xref} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

function CrossRefBody({ xref }: { xref: CrossRef }) {
  return (
    <>
      <span className="xref-card__ref">{decodeEntities(xref.ref)}</span>
      <span className="xref-card__snippet">{decodeEntities(xref.snippet)}</span>
      {xref.note && <span className="xref-card__note">{decodeEntities(xref.note)}</span>}
    </>
  );
}
