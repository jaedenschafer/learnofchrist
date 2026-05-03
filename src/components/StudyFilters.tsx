'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/lib/TranslationContext';
import {
  STUDY_LEVELS,
  useStudyLevel,
  type StudyLevel,
} from '@/lib/StudyLevelContext';
import type { EstimatedMinutes } from '@/data/study-chapters/types';
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

interface StudyFiltersProps {
  /** Per-level minutes for the chapter on screen. When provided, the depth
   *  pill renders alongside the translation pill. */
  estimatedMinutes?: EstimatedMinutes;
  /** Render the pills bare (no docking wrapper). Used when StudyTopBar
   *  embeds the pills directly into the topbar actions row. Default false
   *  keeps the historical full-width bar with sticky-dock behavior. */
  inline?: boolean;
}

/**
 * Compact filter row holding the per-page knobs the reader actually flips
 * while studying:
 *
 *   [ KJV ⌄ ]  [ ⏱ Beginner · 9m ⌄ ]
 *
 * In `inline` mode the pills render bare so StudyTopBar can drop them next
 * to the headphones/⋯ icons. In default mode they sit in their own bar
 * below the topbar and dock onto the navbar on scroll.
 *
 * Reading prefs (font size, theme, sections) and the audio launcher live in
 * StudyTopBar — those change less often, so they stay inside the more-menu.
 */
export default function StudyFilters({
  estimatedMinutes,
  inline = false,
}: StudyFiltersProps = {}) {
  const { currentTranslation, setTranslation, availableTranslations } = useTranslation();
  const { level, setLevel } = useStudyLevel();
  const transDD = useDropdown();
  const depthDD = useDropdown();

  // Sentinel scrolls out of view → dock the filter pill into the top nav.
  // Skipped in inline mode because the pills already live inside the topbar.
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    if (inline) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const obs = new IntersectionObserver(
      ([entry]) => setDocked(!entry.isIntersecting),
      { rootMargin: '-48px 0px 0px 0px', threshold: 0 },
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, [inline]);

  const activeLevel = STUDY_LEVELS.find((l) => l.id === level) ?? STUDY_LEVELS[1];
  const activeMinutes = estimatedMinutes?.[level as StudyLevel];

  // Inline pill recipe — translucent + small. Two pills sit side by side.
  const inlineWrapClass = inline
    ? 'flex items-center gap-1'
    : 'flex items-center gap-1 glass-heavy border border-[color:var(--color-separator)] rounded-full px-2 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]';

  const pillBase = inline
    ? 'flex items-center gap-1 h-9 px-3 rounded-full text-[0.75rem] font-semibold transition-all border border-[color:var(--color-separator)] bg-[color:var(--color-surface)]'
    : 'flex items-center gap-1 h-7 px-2.5 rounded-full text-[0.6875rem] font-semibold transition-all';

  const pillsContent = (
    <div className={inlineWrapClass}>
      {/* ── Translation pill ── */}
      <div ref={transDD.ref} className="relative">
        <button
          onClick={() => transDD.setOpen((o) => !o)}
          className={`${pillBase} ${
            transDD.open
              ? 'bg-[color:var(--vesper-gold)] text-white'
              : inline
                ? 'text-[color:var(--color-label)] hover:bg-[color:var(--color-fill-subtle)]'
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
          <div className="absolute right-0 top-full mt-1.5 z-50 bg-[color:var(--color-surface)] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-[color:var(--color-separator)] overflow-hidden animate-fade-in min-w-[200px]">
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
                      ? 'bg-[color:var(--vesper-gold)]/[0.05]'
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

      {/* ── Depth pill (only renders when chapter has estimatedMinutes) ── */}
      {estimatedMinutes && (
        <div ref={depthDD.ref} className="relative">
          <button
            onClick={() => depthDD.setOpen((o) => !o)}
            aria-label={`Study depth: ${activeLevel.label}`}
            className={`${pillBase} ${
              depthDD.open
                ? 'bg-[color:var(--vesper-gold)] text-white'
                : inline
                  ? 'text-[color:var(--color-label)] hover:bg-[color:var(--color-fill-subtle)]'
                  : 'bg-[var(--color-bg)] text-[color:var(--color-label)]'
            }`}
          >
            {/* Clock glyph — keeps the pill's meaning visible at a glance. */}
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
            </svg>
            <span>{activeLevel.label}</span>
            {activeMinutes !== undefined && (
              <span className="opacity-70">· {activeMinutes}m</span>
            )}
            <svg
              className={`w-2.5 h-2.5 ${depthDD.open ? 'rotate-180 text-white/70' : 'text-[color:var(--color-tertiary-label)]'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {depthDD.open && (
            <div className="absolute right-0 top-full mt-1.5 z-50 bg-[color:var(--color-surface)] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-[color:var(--color-separator)] overflow-hidden animate-fade-in min-w-[240px]">
              <div className="py-1">
                {STUDY_LEVELS.map((opt) => {
                  const active = opt.id === level;
                  const minutes = estimatedMinutes?.[opt.id as StudyLevel];
                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setLevel(opt.id);
                        depthDD.setOpen(false);
                      }}
                      title={opt.description}
                      className={`w-full text-left flex items-center gap-3 px-4 py-2.5 transition-colors ${
                        active
                          ? 'bg-[color:var(--vesper-gold)]/[0.05]'
                          : 'active:bg-[var(--color-bg)]'
                      }`}
                    >
                      <div className="w-5 flex items-center justify-center flex-shrink-0">
                        {active ? (
                          <svg className="w-4 h-4 text-[color:var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        ) : (
                          <svg className="w-3.5 h-3.5 text-[color:var(--color-tertiary-label)]" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="9" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
                          </svg>
                        )}
                      </div>
                      <span className="flex-1 min-w-0">
                        <p
                          className={`text-[0.875rem] font-semibold leading-tight ${
                            active
                              ? 'text-[color:var(--color-primary)]'
                              : 'text-[color:var(--color-label)]'
                          }`}
                        >
                          {opt.label}
                        </p>
                        <p className="text-[0.6875rem] text-[color:var(--color-tertiary-label)] mt-0.5">
                          {opt.description}
                        </p>
                      </span>
                      {minutes !== undefined && (
                        <span className="text-[0.75rem] font-semibold text-[color:var(--color-secondary-label)] tabular-nums">
                          {minutes}m
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (inline) return pillsContent;

  return (
    <div className="study-filters-wrap">
      <div ref={sentinelRef} aria-hidden="true" className="study-filters-sentinel" />
      <div className={`study-filters-bar ${docked ? 'is-docked' : ''}`}>
        {pillsContent}
      </div>
    </div>
  );
}
