'use client';

import { useTranslation } from '@/lib/TranslationContext';

export default function TranslationSwitcher() {
  const { currentTranslation, setTranslation, availableTranslations } = useTranslation();

  return (
    <div className="sticky top-12 sm:top-14 z-40 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2.5 bg-white/80 backdrop-blur-xl border-b border-black/[0.06]">
      <div className="max-w-3xl mx-auto flex items-center gap-2">
        <span className="text-[0.65rem] font-semibold text-navy/35 uppercase tracking-wider mr-1 hidden sm:inline">Translation</span>
        <div className="flex gap-1.5 flex-1">
          {availableTranslations.map((t) => (
            <button
              key={t.abbreviation}
              onClick={() => setTranslation(t.abbreviation)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all active:scale-95 ${
                currentTranslation === t.abbreviation
                  ? 'bg-navy text-cream shadow-sm'
                  : 'bg-black/[0.04] text-navy/50 hover:bg-black/[0.07] hover:text-navy/70'
              }`}
              title={t.name}
            >
              {t.abbreviation.toUpperCase()}
            </button>
          ))}
        </div>
        <span className="text-[0.6rem] text-navy/30 hidden sm:inline">
          {availableTranslations.find(t => t.abbreviation === currentTranslation)?.name}
        </span>
      </div>
    </div>
  );
}
