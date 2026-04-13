'use client';

import { useTranslation } from '@/lib/TranslationContext';

export default function TranslationSwitcher() {
  const { currentTranslation, setTranslation, availableTranslations } = useTranslation();

  return (
    <div className="sticky top-12 z-40 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2 glass border-b border-black/[0.04]">
      <div className="max-w-3xl mx-auto flex items-center gap-2">
        <span className="text-[0.6875rem] font-semibold text-[#86868B] mr-1 hidden sm:inline">Translation</span>
        {/* iOS Segmented Control style */}
        <div className="flex bg-black/[0.04] rounded-xl p-0.5 gap-0.5">
          {availableTranslations.map((t) => (
            <button
              key={t.abbreviation}
              onClick={() => setTranslation(t.abbreviation)}
              className={`px-3.5 py-1.5 rounded-[10px] text-[0.75rem] font-semibold transition-all ${
                currentTranslation === t.abbreviation
                  ? 'bg-white text-[#1D1D1F] shadow-sm'
                  : 'text-[#86868B] hover:text-[#1D1D1F]'
              }`}
              title={t.name}
            >
              {t.abbreviation.toUpperCase()}
            </button>
          ))}
        </div>
        <span className="text-[0.6875rem] text-[#AEAEB2] ml-auto hidden sm:inline">
          {availableTranslations.find(t => t.abbreviation === currentTranslation)?.name}
        </span>
      </div>
    </div>
  );
}
