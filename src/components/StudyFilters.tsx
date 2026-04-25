'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/lib/TranslationContext';
import './StudyFilters.css';

// ─── Reusable dropdown hook ───
function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  return { open, setOpen, ref };
}

/**
 * Compact translation switcher that docks into the navbar when scrolled.
 * Reading prefs (font size, reading mode, sections, theme) and the audio
 * launcher all live in StudyTopBar — this bar is just the translation pill
 * because picking a different translation is a per-page decision that
 * should stay one tap away while reading.
 */
export default function StudyFilters() {
  const { currentTranslation, setTranslation, availableTranslations } = useTranslation();
  const transDD = useDropdown();

  // Sentinel scrolls out of view → dock the filter pill into the top nav.
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const obs = new IntersectionObserver(
      ([entry]) => setDocked(!entry.isIntersecting),
      { rootMargin: '-48px 0px 0px 0px', threshold: 0 },
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="study-filters-wrap">
      <div ref={sentinelRef} aria-hidden="true" className="study-filters-sentinel" />
      <div className={`study-filters-bar ${docked ? 'is-docked' : ''}`}>
        <div className="flex items-center gap-1 glass-heavy border border-[color:var(--color-separator)] rounded-full px-2 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">
          <div ref={transDD.ref} className="relative">
            <button
              onClick={() => transDD.setOpen((o) => !o)}
              className={`flex items-center gap-1 h-7 px-2.5 rounded-full text-[0.6875rem] font-semibold transition-all ${
                transDD.open
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-[var(--color-bg)] text-[color:var(--color-label)]'
              }`}
            >
              {currentTranslation.toUpperCase()}
              <svg
                className={`w-2.5 h-2.5 ${transDD.open ? 'rotate-180 text-white/70' : 'text-[color:var(--color-tertiary-label)]'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {transDD.open && (
              <div className="absolute left-0 top-full mt-1.5 z-50 bg-[color:var(--color-surface)] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-[color:var(--color-separator)] overflow-hidden animate-fade-in min-w-[200px]">
                <div className="py-1 max-h-[40vh] overflow-y-auto">
                  {availableTranslations.map((t) => (
                    <button
                      key={t.abbreviation}
                      onClick={() => {
                        setTranslation(t.abbreviation);
                        transDD.setOpen(false);
                      }}
                      className={`w-full text-left flex items-center gap-3 px-4 py-2.5 transition-colors ${
                        currentTranslation === t.abbreviation
                          ? 'bg-[#007AFF]/[0.05]'
                          : 'active:bg-[var(--color-bg)]'
                      }`}
                    >
                      <div className="w-5 flex items-center justify-center flex-shrink-0">
                        {currentTranslation === t.abbreviation && (
                          <svg className="w-4 h-4 text-[color:var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        )}
                      </div>
                      <p
                        className={`text-[0.875rem] font-medium leading-tight ${
                          currentTranslation === t.abbreviation
                            ? 'text-[color:var(--color-primary)]'
                            : 'text-[color:var(--color-label)]'
                        }`}
                      >
                        {t.abbreviation.toUpperCase()}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
