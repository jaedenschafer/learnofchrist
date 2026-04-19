'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  loadProgressIndex,
  type ProgressIndex,
} from '@/lib/useReadingProgress';
import './GenesisOneStudy.css';

/**
 * Compact "continue where you left off" widget for home page / index pages.
 * Shows the most recently-read chapter with a progress bar and a one-click
 * resume link. If there's no progress yet, it quietly renders nothing so
 * first-time visitors don't see an empty state.
 */
export default function ContinueReading() {
  const [index, setIndex] = useState<ProgressIndex | null>(null);

  useEffect(() => {
    setIndex(loadProgressIndex());
  }, []);

  if (!index) return null;

  const entries = Object.entries(index).sort((a, b) =>
    b[1].lastReadAt.localeCompare(a[1].lastReadAt),
  );
  if (!entries.length) return null;

  const [, recent] = entries[0];
  const pct = Math.round(recent.scrollPct * 100);
  const totalOpened = entries.length;
  const completed = entries.filter(([, v]) => v.completed).length;

  return (
    <section className="continue-reading">
      <div className="continue-reading-head">
        <span className="continue-reading-eyebrow">Continue where you left off</span>
        <Link href="/progress" className="continue-reading-more">
          View all →
        </Link>
      </div>
      <Link
        href={`/study/${recent.bookSlug}/${recent.chapter}`}
        className="continue-reading-card"
      >
        <div className="continue-reading-card-head">
          <span className="continue-reading-label">Study Guide</span>
          <h3 className="continue-reading-title">{recent.chapterName}</h3>
          <p className="continue-reading-meta">
            {recent.completed
              ? 'Finished · revisit anytime'
              : `${pct}% · ${recent.visitedCount}/${recent.totalSections} sections`}
          </p>
        </div>
        <div className="continue-reading-bar">
          <div className="continue-reading-bar-fill" style={{ width: `${Math.max(2, pct)}%` }} />
        </div>
        <div className="continue-reading-foot">
          <span className="continue-reading-stat">
            <strong>{totalOpened}</strong> opened
          </span>
          <span className="continue-reading-dot" />
          <span className="continue-reading-stat">
            <strong>{completed}</strong> completed
          </span>
          <span className="continue-reading-cta">
            {recent.completed ? 'Revisit' : 'Resume'} →
          </span>
        </div>
      </Link>
    </section>
  );
}
