'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { bibleBooks } from '@/data/books';
import {
  loadProgressIndex,
  computeStreak,
  type ProgressIndex,
} from '@/lib/useReadingProgress';
import './GenesisOneStudy.css';

interface BookProgress {
  name: string;
  slug: string;
  total: number;
  read: number;
  completed: number;
}

function bookNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
}

function formatRelative(iso: string): string {
  const then = new Date(iso).getTime();
  const diff = Date.now() - then;
  if (diff < 60_000) return 'just now';
  if (diff < 3_600_000) return `${Math.round(diff / 60_000)}m ago`;
  if (diff < 86_400_000) return `${Math.round(diff / 3_600_000)}h ago`;
  if (diff < 604_800_000) return `${Math.round(diff / 86_400_000)}d ago`;
  return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

export default function ProgressDashboard() {
  const [index, setIndex] = useState<ProgressIndex | null>(null);

  useEffect(() => {
    setIndex(loadProgressIndex());
  }, []);

  const { totalRead, totalCompleted, streak, bookProgress, recent } = useMemo(() => {
    if (!index) {
      return {
        totalRead: 0,
        totalCompleted: 0,
        streak: 0,
        bookProgress: [] as BookProgress[],
        recent: [] as Array<ProgressIndex[string] & { key: string }>,
      };
    }
    const entries = Object.entries(index);
    const totalRead = entries.length;
    const totalCompleted = entries.filter(([, v]) => v.completed).length;
    const streak = computeStreak(index);

    // Per-book progress
    const byBook = new Map<string, { read: number; completed: number }>();
    for (const [key, v] of entries) {
      const agg = byBook.get(v.bookSlug) || { read: 0, completed: 0 };
      agg.read += 1;
      if (v.completed) agg.completed += 1;
      byBook.set(v.bookSlug, agg);
    }
    const bookProgress = bibleBooks
      .map((b) => {
        const slug = bookNameToSlug(b.name);
        const agg = byBook.get(slug);
        return {
          name: b.name,
          slug,
          total: b.chapters,
          read: agg?.read || 0,
          completed: agg?.completed || 0,
        };
      })
      .filter((b) => b.read > 0)
      .sort((a, b) => b.read / b.total - a.read / a.total);

    const recent = entries
      .map(([key, v]) => ({ ...v, key }))
      .sort((a, b) => b.lastReadAt.localeCompare(a.lastReadAt))
      .slice(0, 6);

    return { totalRead, totalCompleted, streak, bookProgress, recent };
  }, [index]);

  const totalBibleChapters = bibleBooks.reduce((n, b) => n + b.chapters, 0);

  if (index === null) {
    return <div className="progress-dash-empty">Loading your progress…</div>;
  }

  if (totalRead === 0) {
    return (
      <div className="progress-dash-empty">
        <p className="progress-dash-empty-title">No chapters yet</p>
        <p className="progress-dash-empty-body">
          When you open a study guide, your progress saves to this device and
          appears here. Try starting with{' '}
          <Link href="/study/genesis/1" className="progress-dash-empty-link">
            Genesis 1
          </Link>
          .
        </p>
      </div>
    );
  }

  const overallPct = Math.round((totalRead / totalBibleChapters) * 100 * 10) / 10;

  return (
    <div className="progress-dash">
      {/* ── Headline stats ── */}
      <div className="progress-dash-stats">
        <div className="progress-dash-stat">
          <p className="progress-dash-stat-num">{totalRead}</p>
          <p className="progress-dash-stat-lbl">
            {totalRead === 1 ? 'chapter opened' : 'chapters opened'}
          </p>
        </div>
        <div className="progress-dash-stat">
          <p className="progress-dash-stat-num">{totalCompleted}</p>
          <p className="progress-dash-stat-lbl">completed</p>
        </div>
        <div className="progress-dash-stat">
          <p className="progress-dash-stat-num">
            {streak}
            {streak > 0 && <span className="progress-dash-stat-flame">🔥</span>}
          </p>
          <p className="progress-dash-stat-lbl">day streak</p>
        </div>
      </div>

      <div className="progress-dash-overall">
        <div className="progress-dash-overall-head">
          <span className="progress-dash-overall-label">The Bible</span>
          <span className="progress-dash-overall-count">
            {totalRead} of {totalBibleChapters.toLocaleString()} chapters · {overallPct}%
          </span>
        </div>
        <div className="progress-dash-bar">
          <div
            className="progress-dash-bar-fill"
            style={{ width: `${Math.max(0.5, (totalRead / totalBibleChapters) * 100)}%` }}
          />
        </div>
      </div>

      {/* ── Continue reading ── */}
      {recent.length > 0 && (
        <section className="progress-dash-sec">
          <h2 className="progress-dash-sec-title">Continue reading</h2>
          <div className="progress-dash-recent">
            {recent.map((r) => (
              <Link
                key={r.key}
                href={`/study/${r.bookSlug}/${r.chapter}`}
                className="progress-dash-recent-item"
              >
                <div className="progress-dash-recent-top">
                  <p className="progress-dash-recent-title">{r.chapterName}</p>
                  <span className="progress-dash-recent-time">{formatRelative(r.lastReadAt)}</span>
                </div>
                <div className="progress-dash-recent-bar">
                  <div
                    className="progress-dash-recent-bar-fill"
                    style={{ width: `${Math.round(r.scrollPct * 100)}%` }}
                  />
                </div>
                <p className="progress-dash-recent-meta">
                  {r.completed
                    ? 'Finished'
                    : `${Math.round(r.scrollPct * 100)}% · ${r.visitedCount}/${r.totalSections} sections`}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Per-book progress ── */}
      <section className="progress-dash-sec">
        <h2 className="progress-dash-sec-title">By book</h2>
        <div className="progress-dash-books">
          {bookProgress.map((b) => (
            <Link
              key={b.slug}
              href={`/study/${b.slug}`}
              className="progress-dash-book"
            >
              <div className="progress-dash-book-head">
                <p className="progress-dash-book-name">{b.name}</p>
                <p className="progress-dash-book-count">
                  {b.read} of {b.total}
                </p>
              </div>
              <div className="progress-dash-book-bar">
                <div
                  className="progress-dash-book-bar-fill"
                  style={{ width: `${(b.read / b.total) * 100}%` }}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
