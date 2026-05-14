'use client';

import Link from 'next/link';
import type { CrossRef } from '@/data/study-chapters/types';
import { decodeEntities, deriveHrefFromRef } from './CrossRefCard';
import './ChapterCrossRefs.css';

/**
 * Aggregated cross-references for a whole chapter, rendered as a single
 * collapsed `<details>` dropdown placed below the Further Study section.
 *
 * Replaces the per-section CrossRefCard that used to appear inline after
 * every section. The page reads cleaner without the repeated horizontal
 * scrolling cards, and readers who want to follow the echoes still have
 * one tap to expand the full list.
 *
 * Closed by default. One reference per line. Section context preserved so
 * readers know which part of the chapter each echo is responding to.
 */
export default function ChapterCrossRefs({
  groups,
}: {
  groups: Array<{ sectionTitle?: string; refs: CrossRef[] }>;
}) {
  // Drop empty groups defensively — callers should pre-filter, but if a
  // section's resolvedCrossRefs came back empty we silently skip it.
  const populated = groups.filter((g) => g.refs.length > 0);
  if (populated.length === 0) return null;

  const totalCount = populated.reduce((sum, g) => sum + g.refs.length, 0);

  return (
    <details className="chapter-xrefs">
      <summary className="chapter-xrefs__summary">
        <span className="chapter-xrefs__summary-text">
          <svg
            className="chapter-xrefs__icon"
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
          Where this echoes in Scripture
          <span className="chapter-xrefs__count" aria-hidden="true">
            {totalCount}
          </span>
        </span>
        <svg
          className="chapter-xrefs__chevron"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </summary>

      <div className="chapter-xrefs__body">
        {populated.map((group, gi) => (
          <div key={gi} className="chapter-xrefs__group">
            {group.sectionTitle && (
              <h3 className="chapter-xrefs__group-title">
                {decodeEntities(group.sectionTitle)}
              </h3>
            )}
            <ul className="chapter-xrefs__list">
              {group.refs.map((xref, i) => {
                const href = xref.href ?? deriveHrefFromRef(xref.ref);
                return (
                  <li
                    key={`${xref.ref}-${i}`}
                    className="chapter-xrefs__item"
                  >
                    {href ? (
                      <Link href={href} className="chapter-xrefs__link">
                        <XrefRow xref={xref} />
                      </Link>
                    ) : (
                      <div className="chapter-xrefs__static">
                        <XrefRow xref={xref} />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
}

function XrefRow({ xref }: { xref: CrossRef }) {
  return (
    <>
      <span className="chapter-xrefs__ref">{decodeEntities(xref.ref)}</span>
      <span className="chapter-xrefs__snippet">
        {decodeEntities(xref.snippet)}
      </span>
      {xref.note && (
        <span className="chapter-xrefs__note">{decodeEntities(xref.note)}</span>
      )}
    </>
  );
}
