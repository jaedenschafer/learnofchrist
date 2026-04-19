'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { useTranslation } from '@/lib/TranslationContext';
import { useStudyLevel, STUDY_LEVELS } from '@/lib/StudyLevelContext';
import { useDenomination, DENOMINATIONS } from '@/lib/DenominationContext';
import { useReadingPrefs, FontSize, ReadingMode } from '@/lib/ReadingPrefsContext';

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
  accent = 'blue',
}: {
  selected: boolean;
  label: string;
  subtitle?: string;
  onClick: () => void;
  accent?: 'blue' | 'purple';
}) {
  const colors = accent === 'purple'
    ? { text: 'text-[#5856D6]', bg: 'bg-[#5856D6]/[0.05]', check: 'text-[#5856D6]' }
    : { text: 'text-[color:var(--color-primary)]', bg: 'bg-[#007AFF]/[0.05]', check: 'text-[color:var(--color-primary)]' };

  return (
    <button
      onClick={onClick}
      className={`w-full text-left flex items-center gap-3 px-4 py-2.5 transition-colors ${
        selected ? colors.bg : 'active:bg-[var(--color-bg)]'
      }`}
    >
      <div className="w-5 flex items-center justify-center flex-shrink-0">
        {selected && (
          <svg className={`w-4 h-4 ${colors.check}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-[0.875rem] font-medium leading-tight ${selected ? colors.text : 'text-[color:var(--color-label)]'}`}>
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
function Menu({ children, align = 'left', wide }: { children: ReactNode; align?: 'left' | 'right'; wide?: boolean }) {
  return (
    <div className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} top-full mt-1.5 z-50 bg-[color:var(--color-surface)] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-[color:var(--color-separator)] overflow-hidden animate-fade-in ${wide ? 'min-w-[280px]' : 'min-w-[200px]'}`}>
      {children}
    </div>
  );
}

// ─── Main component ───
export default function StudyFilters() {
  const { currentTranslation, setTranslation, availableTranslations } = useTranslation();
  const { level, setLevel } = useStudyLevel();
  const { denomination, setDenomination, currentDenomination } = useDenomination();
  const { fontSize, setFontSize, readingMode, setReadingMode, theme, setTheme, focusMode, setFocusMode, isDark } = useReadingPrefs();

  const transDD = useDropdown();
  const levelDD = useDropdown();
  const denomDD = useDropdown();
  const fontDD = useDropdown();
  const modeDD = useDropdown();

  const closeAll = () => {
    transDD.setOpen(false);
    levelDD.setOpen(false);
    denomDD.setOpen(false);
    fontDD.setOpen(false);
    modeDD.setOpen(false);
  };

  const toggle = (dd: ReturnType<typeof useDropdown>) => {
    const wasOpen = dd.open;
    closeAll();
    if (!wasOpen) dd.setOpen(true);
  };

  const currentLevel = STUDY_LEVELS.find(l => l.id === level)!;
  const denomActive = denomination !== 'none';

  return (
    <div className="sticky top-14 z-40 mb-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-1 bg-white/95 backdrop-blur-xl border border-[color:var(--color-separator)] rounded-full px-2 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">

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

          {/* Study Level */}
          <div ref={levelDD.ref} className="relative">
            <button
              onClick={() => toggle(levelDD)}
              className={`flex items-center gap-1 h-7 px-2.5 rounded-full text-[0.6875rem] font-semibold transition-all ${
                levelDD.open
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-[var(--color-bg)] text-[color:var(--color-label)]'
              }`}
            >
              <span>{currentLevel.label}</span>
              <svg className={`w-2.5 h-2.5 ${levelDD.open ? 'rotate-180 text-white/70' : 'text-[color:var(--color-tertiary-label)]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {levelDD.open && (
              <Menu>
                <div className="py-1">
                  {STUDY_LEVELS.map((l) => (
                    <OptionRow
                      key={l.id}
                      selected={level === l.id}
                      label={l.label}
                      onClick={() => { setLevel(l.id); levelDD.setOpen(false); }}
                    />
                  ))}
                </div>
              </Menu>
            )}
          </div>

          {/* Denomination */}
          <div ref={denomDD.ref} className="relative">
            <button
              onClick={() => toggle(denomDD)}
              className={`flex items-center gap-1 h-7 px-2.5 rounded-full text-[0.6875rem] font-semibold transition-all ${
                denomActive
                  ? 'bg-[#5856D6] text-white'
                  : denomDD.open
                    ? 'bg-[#007AFF] text-white'
                    : 'bg-[var(--color-bg)] text-[color:var(--color-label)]'
              }`}
            >
              <span>{denomActive ? currentDenomination.shortLabel : 'Lens'}</span>
              <svg className={`w-2.5 h-2.5 ${denomActive || denomDD.open ? 'rotate-0 text-white/70' : 'text-[color:var(--color-tertiary-label)]'} ${denomDD.open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {denomDD.open && (
              <Menu wide>
                <div className="py-1 max-h-[50vh] overflow-y-auto">
                  {DENOMINATIONS.map((d) => (
                    <OptionRow
                      key={d.id}
                      selected={denomination === d.id}
                      label={d.label}
                      onClick={() => { setDenomination(d.id); denomDD.setOpen(false); }}
                      accent="purple"
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

          {/* Dark mode toggle */}
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`flex items-center justify-center h-7 w-7 rounded-full transition-all ${
              isDark ? 'bg-[color:var(--color-primary)] text-white' : 'bg-[var(--color-bg)] text-[color:var(--color-secondary-label)]'
            }`}
            title={isDark ? 'Switch to light' : 'Switch to dark'}
            aria-pressed={isDark}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06M12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
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
  );
}
