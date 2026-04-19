'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '@/lib/TranslationContext';

export default function TranslationSwitcher() {
  const { currentTranslation, setTranslation, availableTranslations } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const current = availableTranslations.find(t => t.abbreviation === currentTranslation);

  // Show first 3 as quick-access pills, rest in dropdown
  const quickAccess = availableTranslations.slice(0, 3);
  const hasMore = availableTranslations.length > 3;

  return (
    <div className="sticky top-12 z-40 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2 glass border-b border-[color:var(--color-separator)]">
      <div className="max-w-3xl mx-auto flex items-center gap-2">
        <span className="text-[0.6875rem] font-semibold text-[color:var(--color-secondary-label)] mr-1 hidden sm:inline">Translation</span>

        {/* Quick-access pills for top 3 */}
        <div className="flex bg-black/[0.04] rounded-xl p-0.5 gap-0.5">
          {quickAccess.map((t) => (
            <button
              key={t.abbreviation}
              onClick={() => setTranslation(t.abbreviation)}
              className={`px-3.5 py-1.5 rounded-[10px] text-[0.75rem] font-semibold transition-all ${
                currentTranslation === t.abbreviation
                  ? 'bg-[color:var(--color-surface)] text-[color:var(--color-label)] shadow-sm'
                  : 'text-[color:var(--color-secondary-label)] hover:text-[color:var(--color-label)]'
              }`}
              title={t.name}
            >
              {t.abbreviation.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Dropdown for all translations */}
        {hasMore && (
          <div className="relative" ref={ref}>
            <button
              onClick={() => setOpen(!open)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-[0.75rem] font-semibold transition-all ${
                !quickAccess.some(t => t.abbreviation === currentTranslation)
                  ? 'bg-[color:var(--color-surface)] text-[color:var(--color-label)] shadow-sm border border-[color:var(--color-separator)]'
                  : 'text-[color:var(--color-secondary-label)] hover:text-[color:var(--color-label)] bg-black/[0.04]'
              }`}
            >
              {!quickAccess.some(t => t.abbreviation === currentTranslation)
                ? currentTranslation.toUpperCase()
                : 'More'}
              <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div className="absolute top-full left-0 mt-1.5 bg-[color:var(--color-surface)] rounded-2xl shadow-lg border border-[color:var(--color-separator)] py-1.5 min-w-[220px] z-50 overflow-hidden">
                {availableTranslations.map((t) => (
                  <button
                    key={t.abbreviation}
                    onClick={() => { setTranslation(t.abbreviation); setOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 flex items-center justify-between transition-colors ${
                      currentTranslation === t.abbreviation
                        ? 'bg-[#007AFF]/[0.06]'
                        : 'hover:bg-black/[0.03]'
                    }`}
                  >
                    <div>
                      <span className={`text-[0.8125rem] font-semibold ${
                        currentTranslation === t.abbreviation ? 'text-[color:var(--color-primary)]' : 'text-[color:var(--color-label)]'
                      }`}>
                        {t.abbreviation.toUpperCase()}
                      </span>
                      <span className="text-[0.6875rem] text-[color:var(--color-secondary-label)] ml-2">{t.name}</span>
                    </div>
                    {currentTranslation === t.abbreviation && (
                      <svg className="w-4 h-4 text-[color:var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <span className="text-[0.6875rem] text-[color:var(--color-tertiary-label)] ml-auto hidden sm:inline">
          {current?.name}
        </span>
      </div>
    </div>
  );
}
