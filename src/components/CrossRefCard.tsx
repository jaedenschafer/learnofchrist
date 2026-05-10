'use client';

import Link from 'next/link';
import type { CrossRef } from '@/data/study-chapters/types';
import './CrossRefCard.css';

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
        {refs.map((xref, i) => (
          <li key={`${xref.ref}-${i}`} className="xref-card__item">
            {xref.href ? (
              <Link href={xref.href} className="xref-card__link">
                <CrossRefBody xref={xref} />
              </Link>
            ) : (
              <div className="xref-card__static">
                <CrossRefBody xref={xref} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

function CrossRefBody({ xref }: { xref: CrossRef }) {
  return (
    <>
      <span className="xref-card__ref">{xref.ref}</span>
      <span className="xref-card__snippet">{xref.snippet}</span>
      {xref.note && <span className="xref-card__note">{xref.note}</span>}
    </>
  );
}
