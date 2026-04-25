'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { useTranslation } from '@/lib/TranslationContext';
import { useReadingPrefs, FontSize, ReadingMode } from '@/lib/ReadingPrefsContext';
import { useStuckToTop } from '@/lib/useStuckToTop';

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

// ─── Option row ───
function OptionRow({
  selected,
  label,
  subtitle,
  onClick,
}: {
  selected: boolean;
  label: string;
  subtitle?: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left flex items-center gap-3 px-4 py-2.5 transition-colors ${
        selected ? 'bg-[#007AFF]/[0.05]' : 'active:bg-[var(--color-bg)]'
      }`}
    >
      <div className="w-5 flex items-center justify-center flex-shrink-0">
        {selected && (
          <svg className="w-4 h-4 text-[color:var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-[0.875rem] font-medium leading-tight ${selected ? 'text-[color:var(--color-primary)]' : 'text-[color:var(--color-label)]'}`}>
          {label}
        </p>
        {subtitle && (
          <p className="text-[0.6875rem] text-[color:var(--color-secondary-label)] leading-snug mt-0.5 truncate">{subtitle}</p>
        )}
      </div>
    </button>
  );
}

// ─── Dropdown menu ───
function Menu({ children, align = 'left' }: { children: ReactNode; align?: 'left' | 'right' }) {
  return (
    <div className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} top-full mt-1.5 z-50 bg-[color:var(--color-surface)] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-[color:var(--color-separator)] overflow-hidden animate-fade-in min-w-[200px]`}>
      {children}
    </div>
  );
}

// ─── Main component ───
export default function StudyFilters() {
  const { currentTranslation, setTranslation, availableTranslations } = useTranslation();
  const {
    fontSize,
    setFontSize,
    readingMode,
    setReadingMode,
    focusMode,
    setFocusMode,
    hiddenSections,
    toggleSection,
  } = useReadingPrefs();

  const transDD = useDropdown();
  const fontDD = useDropdown();
  const modeDD = useDropdown();
  const viewDD = useDropdown();
  const { sentinelRef, stuck } = useStuckToTop();

  const closeAll = () => {
    transDD.setOpen(false);
    fontDD.setOpen(false);
    modeDD.setOpen(false);
    viewDD.setOpen(false);
  };

  const toggle = (dd: ReturnType<typeof useDropdown>) => {
    const wasOpen = dd.open;
    closeAll();
    if (!wasOpen) dd.setOpen(true);
  };

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="h-0" />
      <div
        data-pinned={stuck ? 'true' : 'false'}
        className={`study-filterbar sticky top-12 z-40 ${stuck ? 'mb-2' : 'mb-4'}`}
      >
        <div className={stuck ? 'max-w-4xl mx-auto px-5' : 'max-w-3xl mx-auto'}>
          <div
            className={`flex items-center gap-1 transition-all ${
              stuck
                ? 'h-10 border-b border-[color:var(--color-separator)] glass-heavy px-2'
                : 'glass-heavy border border-[color:var(--color-separator)] rounded-full px-2 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]'
            }`}
          >

          {/* Translation */}
          <div ref={transDD.ref} className="relative">
            <button
              onClick={() => toggle(transDD)}
              className={`flex items-center gap-1 h-7 px-2.5 rounded-full text-[0.6875rem] font-semibold transition-all ${
                transDD.open
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-[var(--color-bg)] text-[color:var(--color-label)]'
              }`}
            >
              {currentTranslation.toUpperCase()}
              <svg className={`w-2.5 h-2.5 ${transDD.open ? 'rotate-180 text-white/70' : 'text-[color:var(--color-tertiary-label)]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {transDD.open && (
              <Menu>
                <div className="py-1 max-h-[40vh] overflow-y-auto">
                  {availableTranslations.map((t) => (
                    <OptionRow
                      key={t.abbreviation}
                      selected={currentTranslation === t.abbreviation}
                      label={t.abbreviation.toUpperCase()}
                      onClick={() => { setTranslation(t.abbreviation); transDD.setOpen(false); }}
                    />
                  ))}
                </div>
              </Menu>
            )}
          </div>

          {/* Spacer pushes display prefs to right */}
          <div className="flex-1" />

          {/* Font Size */}
          <div ref={fontDD.ref} className="relative">
            <button
              onClick={() => toggle(fontDD)}
              className={`flex items-center justify-center h-7 w-7 rounded-full transition-all ${
                fontDD.open
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-[var(--color-bg)] text-[color:var(--color-secondary-label)]'
              }`}
              title="Text Size"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V5h14v2M7 5v14M11 19H3M15 13v-2h8v2M19 11v8M21 19h-4" />
              </svg>
            </button>
            {fontDD.open && (
              <Menu align="right">
                <div className="py-1">
                  {([
                    { id: 'small' as FontSize, label: 'Small', cls: 'text-[0.8125rem]' },
                    { id: 'medium' as FontSize, label: 'Medium', cls: 'text-[0.9375rem]' },
                    { id: 'large' as FontSize, label: 'Large', cls: 'text-[1.0625rem]' },
                    { id: 'xlarge' as FontSize, label: 'Extra Large', cls: 'text-[1.1875rem]' },
                  ]).map((s) => (
                    <button
                      key={s.id}
                      onClick={() => { setFontSize(s.id); fontDD.setOpen(false); }}
                      className={`w-full text-left flex items-center gap-3 px-4 py-2.5 transition-colors ${
                        fontSize === s.id ? 'bg-[#007AFF]/[0.05]' : 'active:bg-[var(--color-bg)]'
                      }`}
                    >
                      <div className="w-5 flex items-center justify-center flex-shrink-0">
                        {fontSize === s.id && (
                          <svg className="w-4 h-4 text-[color:var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        )}
                      </div>
                      <span className={`font-medium ${s.cls} ${fontSize === s.id ? 'text-[color:var(--color-primary)]' : 'text-[color:var(--color-label)]'}`}>
                        {s.label}
                      </span>
                    </button>
                  ))}
                </div>
              </Menu>
            )}
          </div>

          {/* View options: per-section visibility */}
          <div ref={viewDD.ref} className="relative">
            <button
              onClick={() => toggle(viewDD)}
              className={`flex items-center justify-center h-7 w-7 rounded-full transition-all ${
                viewDD.open
                  ? 'bg-[#007AFF] text-white'
                  : hiddenSections.size > 0
                    ? 'bg-[#5856D6] text-white'
                    : 'bg-[var(--color-bg)] text-[color:var(--color-secondary-label)]'
              }`}
              title="Sections"
              aria-label="Toggle study sections"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            {viewDD.open && (
              <Menu align="right">
                <div className="py-1 min-w-[220px]">
                  {([
                    { id: 'reflection', label: 'Ideas for Reflection' },
                    { id: 'carry', label: 'Thoughts to Sit With' },
                  ] as const).map((s) => {
                    const visible = !hiddenSections.has(s.id);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggleSection(s.id)}
                        className="w-full text-left flex items-center gap-3 px-4 py-2.5 active:bg-[var(--color-bg)] transition-colors"
                        aria-pressed={visible}
                      >
                        <div className="w-5 flex items-center justify-center flex-shrink-0">
                          {visible && (
                            <svg className="w-4 h-4 text-[color:var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          )}
                        </div>
                        <span className="text-[0.875rem] font-medium text-[color:var(--color-label)]">
                          Show {s.label.toLowerCase()}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </Menu>
            )}
          </div>

          {/* Focus mode toggle */}
          <button
            onClick={() => setFocusMode(focusMode === 'focus' ? 'full' : 'focus')}
            className={`flex items-center justify-center h-7 w-7 rounded-full transition-all ${
              focusMode === 'focus' ? 'bg-[#007AFF] text-white' : 'bg-[var(--color-bg)] text-[color:var(--color-secondary-label)]'
            }`}
            title={focusMode === 'focus' ? 'Full teaching' : 'Pure scripture'}
            aria-pressed={focusMode === 'focus'}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v3M12 17v3M4 12h3M17 12h3M12 12a3 3 0 100-6 3 3 0 000 6zm0 0a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          </button>

          {/* Reading Mode */}
          <div ref={modeDD.ref} className="relative">
            <button
              onClick={() => toggle(modeDD)}
              className={`flex items-center justify-center h-7 w-7 rounded-full transition-all ${
                modeDD.open
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-[var(--color-bg)] text-[color:var(--color-secondary-label)]'
              }`}
              title="Reading Mode"
            >
              {readingMode === 'verse' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h12M4 14h16M4 18h10" />
                </svg>
              )}
            </button>
            {modeDD.open && (
              <Menu align="right">
                <div className="py-1">
                  {([
                    { id: 'verse' as ReadingMode, label: 'Verse by Verse', subtitle: 'Each verse on its own line' },
                    { id: 'paragraph' as ReadingMode, label: 'Paragraph', subtitle: 'Flowing text' },
                  ]).map((m) => (
                    <OptionRow
                      key={m.id}
                      selected={readingMode === m.id}
                      label={m.label}
                      subtitle={m.subtitle}
                      onClick={() => { setReadingMode(m.id); modeDD.setOpen(false); }}
                    />
                  ))}
                </div>
              </Menu>
            )}
          </div>

          </div>
        </div>
      </div>
    </>
  );
}
