'use client';

import { useEffect, useRef, useState } from 'react';
import { useReadingPrefs } from '@/lib/ReadingPrefsContext';

interface ArtworkActionsMenuProps {
  artworkId: string;
  artworkTitle?: string;
  /** Show a "Hide all images" item (only meaningful inside study guides). */
  showHide?: boolean;
}

/**
 * Tiny ⋮ menu used on every artwork surface — inline study images, the
 * chapter art carousel, and the /art gallery cards. Two actions:
 *
 *   • Hide  (only when showHide is true) — toggles the global "images"
 *     section in hiddenSections, same key the StudyTopBar Sections list
 *     uses. Hides every image on the page in one go.
 *   • Report image — POSTs to /api/report-artwork. The endpoint logs the
 *     report and flips the artwork's moderation_status to flagged so the
 *     admin queue picks it up; until an admin re-approves it, the image
 *     no longer appears in any approved-only query. We also hide the
 *     containing card client-side immediately so the reader sees feedback
 *     without waiting for a refresh.
 */
export default function ArtworkActionsMenu({
  artworkId,
  artworkTitle,
  showHide = false,
}: ArtworkActionsMenuProps) {
  const [open, setOpen] = useState(false);
  const [reporting, setReporting] = useState(false);
  const [reported, setReported] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const { toggleSection } = useReadingPrefs();

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

  const handleReport = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (reporting) return;
    setReporting(true);
    try {
      await fetch('/api/report-artwork', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          artwork_id: artworkId,
          page_url: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });
      // Hide the host card client-side. Walking up via .closest covers
      // every callsite (figure.inline-artwork, .chapter-art-strip__slide,
      // .art-card-wrap on /art).
      const host = ref.current?.closest<HTMLElement>(
        '.inline-artwork, .chapter-art-strip__slide, .art-card-wrap',
      );
      if (host) host.style.display = 'none';
      setReported(true);
    } catch {
      // Swallow — even on network failure, hide locally so the reader
      // doesn't keep seeing an image they flagged.
    } finally {
      setReporting(false);
      setOpen(false);
    }
  };

  const handleHide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
    toggleSection('images');
  };

  if (reported) return null;

  return (
    <span
      ref={ref}
      className="art-actions"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className="art-actions__btn"
        aria-label={artworkTitle ? `Options for ${artworkTitle}` : 'Image options'}
        aria-expanded={open}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((o) => !o);
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
          <circle cx="12" cy="5" r="1.8" />
          <circle cx="12" cy="12" r="1.8" />
          <circle cx="12" cy="19" r="1.8" />
        </svg>
      </button>
      {open && (
        <span className="art-actions__pop" role="menu">
          {showHide && (
            <button
              type="button"
              role="menuitem"
              className="art-actions__item"
              onClick={handleHide}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="14" height="14" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.5 10.5a2 2 0 002.83 2.83M9.88 4.42A8.74 8.74 0 0112 4c5 0 9 4 9 8 0 1.7-.74 3.27-2 4.55M6.36 6.36C4.27 7.86 3 9.84 3 12c0 4 4 8 9 8 1.6 0 3.1-.4 4.4-1.1" />
              </svg>
              Hide images
            </button>
          )}
          <button
            type="button"
            role="menuitem"
            className="art-actions__item art-actions__item--danger"
            onClick={handleReport}
            disabled={reporting}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="14" height="14" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V4h12l-2 4 2 4H6" />
            </svg>
            {reporting ? 'Reporting…' : 'Report image'}
          </button>
        </span>
      )}
    </span>
  );
}
