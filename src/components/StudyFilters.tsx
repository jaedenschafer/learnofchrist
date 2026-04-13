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

// ─── Filter chip button ───
function FilterChip({
  icon,
  label,
  active,
  isOpen,
  onClick,
  accentColor = '#007AFF',
}: {
  icon: ReactNode;
  label: string;
  active?: boolean;
  isOpen?: boolean;
  onClick: () => void;
  accentColor?: string;
}) {
  const activeBg = accentColor === '#5856D6' ? 'bg-[#5856D6]' : 'bg-[#007AFF]';
  const isHighlighted = active || isOpen;

  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 flex items-center gap-1.5 h-9 px-3 rounded-xl text-[0.8125rem] font-medium transition-all active:scale-[0.97] ${
        isHighlighted
          ? `${activeBg} text-white shadow-sm`
          : 'bg-white text-[#1D1D1F] shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-black/[0.04]'
      }`}
    >
      <span className={`flex items-center ${isHighlighted ? 'text-white/90' : 'text-[#86868B]'}`}>
        {icon}
      </span>
      <span className="whitespace-nowrap">{label}</span>
      <svg className={`w-2.5 h-2.5 ml-0.5 transition-transform ${isOpen ? 'rotate-180' : ''} ${isHighlighted ? 'text-white/70' : 'text-[#AEAEB2]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

// ─── Dropdown menu wrapper ───
function DropdownMenu({ children, align = 'left', wide }: { children: ReactNode; align?: 'left' | 'right'; wide?: boolean }) {
  return (
    <div className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} top-full mt-2 z-50 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-black/[0.04] overflow-hidden animate-fade-in ${wide ? 'min-w-[300px]' : 'min-w-[220px]'}`}>
      {children}
    </div>
  );
}

// ─── Option row ───
function OptionRow({
  selected,
  label,
  subtitle,
  onClick,
  accentColor = '#007AFF',
}: {
  selected: boolean;
  label: string;
  subtitle?: string;
  onClick: () => void;
  accentColor?: string;
}) {
  const textColor = accentColor === '#5856D6' ? 'text-[#5856D6]' : 'text-[#007AFF]';
  const bgColor = accentColor === '#5856D6' ? 'bg-[#5856D6]/[0.05]' : 'bg-[#007AFF]/[0.05]';
  const checkColor = accentColor === '#5856D6' ? 'text-[#5856D6]' : 'text-[#007AFF]';

  return (
    <button
      onClick={onClick}
      className={`w-full text-left flex items-center gap-3 px-4 py-2.5 transition-colors ${
        selected ? bgColor : 'active:bg-[#F5F5F7]'
      }`}
    >
      <div className="w-5 flex items-center justify-center flex-shrink-0">
        {selected && (
          <svg className={`w-4 h-4 ${checkColor}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-[0.875rem] font-medium leading-tight ${selected ? textColor : 'text-[#1D1D1F]'}`}>
          {label}
        </p>
        {subtitle && (
          <p className="text-[0.6875rem] text-[#86868B] leading-snug mt-0.5 truncate">{subtitle}</p>
        )}
      </div>
    </button>
  );
}

// ─── Icons (inline SVGs) ───
const BookIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const LayersIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TextSizeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V5h14v2M7 5v14M11 19H3M15 13v-2h8v2M19 11v8M21 19h-4" />
  </svg>
);

const ViewIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10M4 18h10" />
  </svg>
);

// ─── Main component ───
export default function StudyFilters() {
  const { currentTranslation, setTranslation, availableTranslations } = useTranslation();
  const { level, setLevel } = useStudyLevel();
  const { denomination, setDenomination, currentDenomination } = useDenomination();
  const { fontSize, setFontSize, readingMode, setReadingMode } = useReadingPrefs();

  const translationDropdown = useDropdown();
  const levelDropdown = useDropdown();
  const denomDropdown = useDropdown();
  const fontDropdown = useDropdown();
  const modeDropdown = useDropdown();

  const closeAll = () => {
    translationDropdown.setOpen(false);
    levelDropdown.setOpen(false);
    denomDropdown.setOpen(false);
    fontDropdown.setOpen(false);
    modeDropdown.setOpen(false);
  };

  const toggle = (dropdown: ReturnType<typeof useDropdown>) => {
    const wasOpen = dropdown.open;
    closeAll();
    if (!wasOpen) dropdown.setOpen(true);
  };

  const currentLevel = STUDY_LEVELS.find(l => l.id === level)!;
  const denomActive = denomination !== 'none';
  const currentTransObj = availableTranslations.find(t => t.abbreviation === currentTranslation);
  const fontSizeLabel = fontSize === 'small' ? 'Small' : fontSize === 'medium' ? 'Medium' : 'Large';
  const modeLabel = readingMode === 'verse' ? 'Verse' : 'Paragraph';

  return (
    <div className="sticky top-12 z-40 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2 glass-heavy border-b border-black/[0.04]">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar -mx-1 px-1 py-0.5">

          {/* Translation */}
          <div ref={translationDropdown.ref} className="relative flex-shrink-0">
            <FilterChip
              icon={<BookIcon />}
              label={currentTranslation.toUpperCase()}
              isOpen={translationDropdown.open}
              onClick={() => toggle(translationDropdown)}
            />
            {translationDropdown.open && (
              <DropdownMenu>
                <div className="px-4 py-2.5 border-b border-black/[0.04]">
                  <p className="text-[0.6875rem] font-semibold text-[#86868B] uppercase tracking-wide">Translation</p>
                </div>
                <div className="py-1 max-h-[40vh] overflow-y-auto">
                  {availableTranslations.map((t) => (
                    <OptionRow
                      key={t.abbreviation}
                      selected={currentTranslation === t.abbreviation}
                      label={t.abbreviation.toUpperCase()}
                      subtitle={t.name}
                      onClick={() => { setTranslation(t.abbreviation); translationDropdown.setOpen(false); }}
                    />
                  ))}
                </div>
              </DropdownMenu>
            )}
          </div>

          {/* Study Level */}
          <div ref={levelDropdown.ref} className="relative flex-shrink-0">
            <FilterChip
              icon={<LayersIcon />}
              label={currentLevel.label}
              isOpen={levelDropdown.open}
              onClick={() => toggle(levelDropdown)}
            />
            {levelDropdown.open && (
              <DropdownMenu>
                <div className="px-4 py-2.5 border-b border-black/[0.04]">
                  <p className="text-[0.6875rem] font-semibold text-[#86868B] uppercase tracking-wide">Study Depth</p>
                </div>
                <div className="py-1">
                  {STUDY_LEVELS.map((l) => (
                    <OptionRow
                      key={l.id}
                      selected={level === l.id}
                      label={l.label}
                      subtitle={l.description}
                      onClick={() => { setLevel(l.id); levelDropdown.setOpen(false); }}
                    />
                  ))}
                </div>
              </DropdownMenu>
            )}
          </div>

          {/* Denomination */}
          <div ref={denomDropdown.ref} className="relative flex-shrink-0">
            <FilterChip
              icon={<GlobeIcon />}
              label={denomActive ? currentDenomination.shortLabel : 'Lens'}
              active={denomActive}
              isOpen={denomDropdown.open}
              onClick={() => toggle(denomDropdown)}
              accentColor="#5856D6"
            />
            {denomDropdown.open && (
              <DropdownMenu wide>
                <div className="px-4 py-2.5 border-b border-black/[0.04]">
                  <p className="text-[0.6875rem] font-semibold text-[#86868B] uppercase tracking-wide">Denomination Lens</p>
                </div>
                <div className="py-1 max-h-[50vh] overflow-y-auto">
                  {DENOMINATIONS.map((d) => (
                    <OptionRow
                      key={d.id}
                      selected={denomination === d.id}
                      label={d.label}
                      subtitle={d.description}
                      onClick={() => { setDenomination(d.id); denomDropdown.setOpen(false); }}
                      accentColor="#5856D6"
                    />
                  ))}
                </div>
              </DropdownMenu>
            )}
          </div>

          {/* Separator */}
          <div className="flex-shrink-0 w-px h-5 bg-black/[0.06]" />

          {/* Font Size */}
          <div ref={fontDropdown.ref} className="relative flex-shrink-0">
            <FilterChip
              icon={<TextSizeIcon />}
              label={fontSizeLabel}
              isOpen={fontDropdown.open}
              onClick={() => toggle(fontDropdown)}
            />
            {fontDropdown.open && (
              <DropdownMenu>
                <div className="px-4 py-2.5 border-b border-black/[0.04]">
                  <p className="text-[0.6875rem] font-semibold text-[#86868B] uppercase tracking-wide">Text Size</p>
                </div>
                <div className="py-1">
                  {([
                    { id: 'small' as FontSize, label: 'Small', preview: 'Aa' },
                    { id: 'medium' as FontSize, label: 'Medium', preview: 'Aa' },
                    { id: 'large' as FontSize, label: 'Large', preview: 'Aa' },
                  ]).map((s) => (
                    <button
                      key={s.id}
                      onClick={() => { setFontSize(s.id); fontDropdown.setOpen(false); }}
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
                      <span className={`font-medium ${
                        s.id === 'small' ? 'text-[0.8125rem]' : s.id === 'medium' ? 'text-[0.9375rem]' : 'text-[1.0625rem]'
                      } ${fontSize === s.id ? 'text-[#007AFF]' : 'text-[#1D1D1F]'}`}>
                        {s.label}
                      </span>
                    </button>
                  ))}
                </div>
              </DropdownMenu>
            )}
          </div>

          {/* Reading Mode */}
          <div ref={modeDropdown.ref} className="relative flex-shrink-0">
            <FilterChip
              icon={<ViewIcon />}
              label={modeLabel}
              isOpen={modeDropdown.open}
              onClick={() => toggle(modeDropdown)}
            />
            {modeDropdown.open && (
              <DropdownMenu>
                <div className="px-4 py-2.5 border-b border-black/[0.04]">
                  <p className="text-[0.6875rem] font-semibold text-[#86868B] uppercase tracking-wide">Reading Mode</p>
                </div>
                <div className="py-1">
                  {([
                    { id: 'verse' as ReadingMode, label: 'Verse by Verse', subtitle: 'Each verse on its own line' },
                    { id: 'paragraph' as ReadingMode, label: 'Paragraph', subtitle: 'Flowing text grouped by thought' },
                  ]).map((m) => (
                    <OptionRow
                      key={m.id}
                      selected={readingMode === m.id}
                      label={m.label}
                      subtitle={m.subtitle}
                      onClick={() => { setReadingMode(m.id); modeDropdown.setOpen(false); }}
                    />
                  ))}
                </div>
              </DropdownMenu>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
