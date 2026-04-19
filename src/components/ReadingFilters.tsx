'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { useTranslation } from '@/lib/TranslationContext';
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
        selected ? 'bg-[#007AFF]/[0.05]' : 'active:bg-[#F5F5F7]'
      }`}
    >
      <div className="w-5 flex items-center justify-center flex-shrink-0">
        {selected && (
          <svg className="w-4 h-4 text-[#007AFF]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-[0.875rem] font-medium leading-tight ${selected ? 'text-[#007AFF]' : 'text-[#1D1D1F]'}`}>
          {label}
        </p>
        {subtitle && (
          <p className="text-[0.6875rem] text-[#86868B] leading-snug mt-0.5 truncate">{subtitle}</p>
        )}
      </div>
    </button>
  );
}

function Menu({ children, align = 'left' }: { children: ReactNode; align?: 'left' | 'right' }) {
  return (
    <div className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} top-full mt-1.5 z-50 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-black/[0.04] overflow-hidden animate-fade-in min-w-[200px]`}>
      {children}
    </div>
  );
}

export default function ReadingFilters() {
  const { currentTranslation, setTranslation, availableTranslations } = useTranslation();
  const { fontSize, setFontSize, readingMode, setReadingMode } = useReadingPrefs();

  const transDD = useDropdown();
  const fontDD = useDropdown();
  const modeDD = useDropdown();

  const closeAll = () => {
    transDD.setOpen(false);
    fontDD.setOpen(false);
    modeDD.setOpen(false);
  };

  const toggle = (dd: ReturnType<typeof useDropdown>) => {
    const wasOpen = dd.open;
    closeAll();
    if (!wasOpen) dd.setOpen(true);
  };

  return (
    <div className="sticky top-12 z-40 -mx-4 sm:-mx-6 px-4 sm:px-6 py-1.5 glass-heavy border-b border-black/[0.04]">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-1">

          {/* Translation */}
          <div ref={transDD.ref} className="relative">
            <button
              onClick={() => toggle(transDD)}
              className={`flex items-center gap-1 h-7 px-2.5 rounded-full text-[0.6875rem] font-semibold transition-all ${
                transDD.open ? 'bg-[#007AFF] text-white' : 'bg-[#F5F5F7] text-[#1D1D1F]'
              }`}
            >
              {currentTranslation.toUpperCase()}
              <svg className={`w-2.5 h-2.5 ${transDD.open ? 'rotate-180 text-white/70' : 'text-[#AEAEB2]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      subtitle={t.name}
                      onClick={() => { setTranslation(t.abbreviation); transDD.setOpen(false); }}
                    />
                  ))}
                </div>
              </Menu>
            )}
          </div>

          <div className="flex-1" />

          {/* Font Size */}
          <div ref={fontDD.ref} className="relative">
            <button
              onClick={() => toggle(fontDD)}
              className={`flex items-center justify-center h-7 w-7 rounded-full transition-all ${
                fontDD.open ? 'bg-[#007AFF] text-white' : 'bg-[#F5F5F7] text-[#86868B]'
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
                        fontSize === s.id ? 'bg-[#007AFF]/[0.05]' : 'active:bg-[#F5F5F7]'
                      }`}
                    >
                      <div className="w-5 flex items-center justify-center flex-shrink-0">
                        {fontSize === s.id && (
                          <svg className="w-4 h-4 text-[#007AFF]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        )}
                      </div>
                      <span className={`font-medium ${s.cls} ${fontSize === s.id ? 'text-[#007AFF]' : 'text-[#1D1D1F]'}`}>
                        {s.label}
                      </span>
                    </button>
                  ))}
                </div>
              </Menu>
            )}
          </div>

          {/* Reading Mode */}
          <div ref={modeDD.ref} className="relative">
            <button
              onClick={() => toggle(modeDD)}
              className={`flex items-center justify-center h-7 w-7 rounded-full transition-all ${
                modeDD.open ? 'bg-[#007AFF] text-white' : 'bg-[#F5F5F7] text-[#86868B]'
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
