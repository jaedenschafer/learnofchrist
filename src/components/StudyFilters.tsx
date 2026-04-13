'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '@/lib/TranslationContext';
import { useStudyLevel, STUDY_LEVELS } from '@/lib/StudyLevelContext';
import { useDenomination, DENOMINATIONS } from '@/lib/DenominationContext';

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

export default function StudyFilters() {
  const { currentTranslation, setTranslation, availableTranslations } = useTranslation();
  const { level, setLevel } = useStudyLevel();
  const { denomination, setDenomination, currentDenomination } = useDenomination();

  const levelDropdown = useDropdown();
  const denomDropdown = useDropdown();

  const currentLevel = STUDY_LEVELS.find(l => l.id === level)!;
  const denomActive = denomination !== 'none';

  return (
    <div className="sticky top-12 z-40 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2.5 glass-heavy border-b border-black/[0.04]">
      <div className="max-w-3xl mx-auto">
        {/* Horizontally scrollable filter chips — iOS style */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">

          {/* Translation chips — inline, no wrapper */}
          {availableTranslations.map((t) => (
            <button
              key={t.abbreviation}
              onClick={() => setTranslation(t.abbreviation)}
              className={`flex-shrink-0 px-3.5 py-[7px] rounded-full text-[0.8125rem] font-semibold transition-all ${
                currentTranslation === t.abbreviation
                  ? 'bg-[#007AFF] text-white shadow-sm'
                  : 'bg-white/80 text-[#1D1D1F] border border-black/[0.08] active:scale-95'
              }`}
              title={t.name}
            >
              {t.abbreviation.toUpperCase()}
            </button>
          ))}

          {/* Separator dot */}
          <div className="flex-shrink-0 w-1 h-1 rounded-full bg-[#AEAEB2]/50" />

          {/* Study Level — filter chip with dropdown */}
          <div ref={levelDropdown.ref} className="relative flex-shrink-0">
            <button
              onClick={() => { levelDropdown.setOpen(!levelDropdown.open); denomDropdown.setOpen(false); }}
              className={`flex items-center gap-1 px-3.5 py-[7px] rounded-full text-[0.8125rem] font-semibold transition-all active:scale-95 ${
                levelDropdown.open
                  ? 'bg-[#007AFF] text-white shadow-sm'
                  : 'bg-white/80 text-[#1D1D1F] border border-black/[0.08]'
              }`}
            >
              {currentLevel.label}
              <svg className={`w-3 h-3 ml-0.5 transition-transform ${levelDropdown.open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {levelDropdown.open && (
              <div className="absolute left-0 top-full mt-2 z-50 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.14)] overflow-hidden animate-fade-in min-w-[220px]">
                <div className="py-1">
                  {STUDY_LEVELS.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => { setLevel(l.id); levelDropdown.setOpen(false); }}
                      className={`w-full text-left flex items-center gap-3 px-4 py-3 transition-colors ${
                        level === l.id ? 'bg-[#007AFF]/[0.06]' : 'active:bg-[#F5F5F7]'
                      }`}
                    >
                      <div className="w-5 flex items-center justify-center flex-shrink-0">
                        {level === l.id && (
                          <svg className="w-4 h-4 text-[#007AFF]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className={`text-[0.9375rem] font-medium ${level === l.id ? 'text-[#007AFF]' : 'text-[#1D1D1F]'}`}>
                          {l.label}
                        </p>
                        <p className="text-[0.75rem] text-[#86868B] leading-snug">{l.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Denomination — filter chip with dropdown */}
          <div ref={denomDropdown.ref} className="relative flex-shrink-0">
            <button
              onClick={() => { denomDropdown.setOpen(!denomDropdown.open); levelDropdown.setOpen(false); }}
              className={`flex items-center gap-1 px-3.5 py-[7px] rounded-full text-[0.8125rem] font-semibold transition-all active:scale-95 ${
                denomActive
                  ? 'bg-[#5856D6] text-white shadow-sm'
                  : denomDropdown.open
                    ? 'bg-[#007AFF] text-white shadow-sm'
                    : 'bg-white/80 text-[#1D1D1F] border border-black/[0.08]'
              }`}
            >
              {denomActive ? currentDenomination.shortLabel : 'Denomination'}
              <svg className={`w-3 h-3 ml-0.5 transition-transform ${denomDropdown.open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {denomDropdown.open && (
              <div className="absolute right-0 top-full mt-2 z-50 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.14)] overflow-hidden animate-fade-in min-w-[280px]">
                <div className="py-1 max-h-[50vh] overflow-y-auto">
                  {DENOMINATIONS.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => { setDenomination(d.id); denomDropdown.setOpen(false); }}
                      className={`w-full text-left flex items-center gap-3 px-4 py-3 transition-colors ${
                        denomination === d.id ? 'bg-[#5856D6]/[0.06]' : 'active:bg-[#F5F5F7]'
                      }`}
                    >
                      <div className="w-5 flex items-center justify-center flex-shrink-0">
                        {denomination === d.id && (
                          <svg className="w-4 h-4 text-[#5856D6]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-[0.9375rem] font-medium ${denomination === d.id ? 'text-[#5856D6]' : 'text-[#1D1D1F]'}`}>
                          {d.label}
                        </p>
                        <p className="text-[0.75rem] text-[#86868B] leading-snug truncate">{d.description}</p>
                      </div>
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
