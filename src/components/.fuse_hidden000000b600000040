'use client';

import { useEffect, useRef, useState } from 'react';
import { useJournalEntry } from '@/lib/useStudyJournal';
import { useReadingPrefs } from '@/lib/ReadingPrefsContext';

export default function ReflectionBlock({
  studyId,
  id,
  prompt,
  placeholder = 'Record any thoughts here…',
}: {
  studyId: string;
  id: string;
  prompt: string;
  placeholder?: string;
}) {
  const key = `loc-reflect:${studyId}:${id}`;
  const { value, save, loaded } = useJournalEntry(key);
  const { toggleSection } = useReadingPrefs();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Dismiss the ⋮ menu on outside click / Escape.
  useEffect(() => {
    if (!menuOpen) return;
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <div className="reflection-block">
      <div className="reflection-head">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-6-6a6 6 0 0112 0M7 7h.01M17 7h.01" />
        </svg>
        <span className="reflection-label">Ideas for Reflection</span>
        <div ref={menuRef} className="reflection-menu">
          <button
            type="button"
            className="reflection-menu-btn"
            aria-label="Block options"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
              <circle cx="12" cy="5" r="1.8" />
              <circle cx="12" cy="12" r="1.8" />
              <circle cx="12" cy="19" r="1.8" />
            </svg>
          </button>
          {menuOpen && (
            <div className="reflection-menu-pop" role="menu">
              <button
                type="button"
                role="menuitem"
                className="reflection-menu-item"
                onClick={() => {
                  setMenuOpen(false);
                  // Tied to the same hiddenSections state used by the
                  // StudyTopBar ⋯ Sections toggle, so hiding from one place
                  // hides every Reflection block on the page consistently.
                  toggleSection('reflection');
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="14" height="14" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.5 10.5a2 2 0 002.83 2.83M9.88 4.42A8.74 8.74 0 0112 4c5 0 9 4 9 8 0 1.7-.74 3.27-2 4.55M6.36 6.36C4.27 7.86 3 9.84 3 12c0 4 4 8 9 8 1.6 0 3.1-.4 4.4-1.1" />
                </svg>
                Hide
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="reflection-prompt">{prompt}</p>
      <textarea
        className="reflection-textarea"
        placeholder={placeholder}
        value={value}
        onChange={(e) => save(e.target.value)}
        rows={4}
      />
      <p className="reflection-foot">
        {loaded && value
          ? <><span className="reflection-saved-dot" /> Saved on this device</>
          : 'Saved locally · syncs later when you sign in'}
      </p>
    </div>
  );
}
