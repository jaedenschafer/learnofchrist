'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import SettingsMenu from './SettingsMenu';

interface StudyTopBarProps {
  bookSlug: string;
  bookName: string;
  chapter: number;
  /** Small label above the title — usually "Old Testament" or "New Testament". */
  testamentLabel: string;
  /**
   * Optional action slots that appear in the more-options popover (Listen,
   * Share, etc). Rendered as direct children of the popover so each can
   * keep its own state.
   */
  moreActions?: ReactNode;
}

/**
 * Clean LDS-style top bar that sits at the top of a study chapter page,
 * just below the global navbar. Replaces the breadcrumb + scattered audio
 * + share + settings cluster with a single tidy row:
 *
 *   [← back]      Genesis 1                [⋯ more]
 *                Old Testament
 *
 * The "more" button opens a popover with Listen / Share / Settings.
 */
export default function StudyTopBar({
  bookSlug,
  bookName,
  chapter,
  testamentLabel,
  moreActions,
}: StudyTopBarProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="study-topbar">
      <Link
        href={`/study/${bookSlug}`}
        aria-label={`Back to ${bookName}`}
        className="study-topbar__chip"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Study</span>
      </Link>

      <div className="study-topbar__title-block">
        <p className="study-topbar__title">{bookName} {chapter}</p>
        <p className="study-topbar__subtitle">{testamentLabel}</p>
      </div>

      <div ref={ref} className="study-topbar__actions">
        <SettingsMenu />
        {moreActions && (
          <>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Chapter actions"
              aria-expanded={open}
              className="study-topbar__icon-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
            </button>
            {open && (
              <div className="study-topbar__menu">
                <p className="study-topbar__menu-label">Chapter</p>
                <div className="study-topbar__menu-rows" onClick={() => setOpen(false)}>
                  {moreActions}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
