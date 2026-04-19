'use client';

import { useEffect, useState } from 'react';
import { useReadingProgress } from '@/lib/useReadingProgress';

/**
 * Thin sticky progress bar + returning-reader resume banner.
 *
 * Renders at the top of a study chapter, just below the navbar. Shows a
 * gradient fill for how far the reader is through the chapter's study
 * content, plus notches for each section (Day 1 … Day 7).
 *
 * On first mount, if there's saved progress and the reader is at the top
 * of the page, a small "Pick up at Day 3" banner offers to jump them
 * back to where they left off.
 */
export default function ChapterProgress({
  chapterKey,
  chapterName,
  bookSlug,
  chapter,
}: {
  chapterKey: string;
  chapterName: string;
  bookSlug: string;
  chapter: number;
}) {
  const { sections, currentSectionId, scrollPct, record, ready } = useReadingProgress({
    chapterKey,
    chapterName,
    bookSlug,
    chapter,
  });
  const [showResume, setShowResume] = useState(false);
  const [resumeId, setResumeId] = useState<string | null>(null);

  // Decide on mount whether to offer resume
  useEffect(() => {
    if (!ready || !record) return;
    if (
      record.lastSectionId &&
      record.scrollPct > 0.05 &&
      record.scrollPct < 0.9 &&
      window.scrollY < 80
    ) {
      setResumeId(record.lastSectionId);
      setShowResume(true);
    }
  }, [ready, record]);

  const resume = () => {
    if (!resumeId) return;
    const el = document.getElementById(resumeId);
    if (el) {
      const rect = el.getBoundingClientRect();
      window.scrollTo({ top: rect.top + window.scrollY - 120, behavior: 'smooth' });
    }
    setShowResume(false);
  };

  const dismissResume = () => setShowResume(false);

  const resumeLabel = sections.find((s) => s.id === resumeId)?.label || '';
  const visitedSet = new Set(record?.sectionIdsVisited || []);

  return (
    <>
      {/* ── Thin progress bar ── */}
      <div
        className="chapter-progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollPct * 100)}
        aria-label={`${chapterName} reading progress`}
      >
        <div className="chapter-progress-fill" style={{ width: `${scrollPct * 100}%` }} />
        {sections.map((s) => (
          <span
            key={s.id}
            className={[
              'chapter-progress-notch',
              currentSectionId === s.id ? 'active' : '',
              visitedSet.has(s.id) ? 'visited' : '',
            ].join(' ').trim()}
            style={{ left: `${Math.min(99, s.percentTop * 100)}%` }}
            title={s.label}
          />
        ))}
      </div>

      {/* ── Resume banner ── */}
      {showResume && resumeLabel && (
        <div className="resume-banner" role="region" aria-label="Resume reading">
          <svg className="resume-banner-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="resume-banner-copy">
            <p className="resume-banner-eyebrow">Welcome back</p>
            <p className="resume-banner-label">
              Pick up at <strong>{resumeLabel}</strong>
            </p>
          </div>
          <div className="resume-banner-actions">
            <button type="button" className="resume-btn primary" onClick={resume}>
              Resume
            </button>
            <button type="button" className="resume-btn" onClick={dismissResume}>
              Start over
            </button>
          </div>
        </div>
      )}
    </>
  );
}
