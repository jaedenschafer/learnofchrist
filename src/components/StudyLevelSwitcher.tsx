'use client';

import { useStudyLevel, STUDY_LEVELS } from '@/lib/StudyLevelContext';

export default function StudyLevelSwitcher() {
  const { level, setLevel } = useStudyLevel();

  return (
    <div className="bg-white rounded-2xl p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[0.8125rem] font-semibold text-[#1D1D1F]">Study Depth</span>
        <span className="text-[0.6875rem] text-[#AEAEB2]">
          {STUDY_LEVELS.find(l => l.id === level)?.description}
        </span>
      </div>
      {/* iOS Segmented Control */}
      <div className="flex bg-black/[0.04] rounded-xl p-0.5 gap-0.5">
        {STUDY_LEVELS.map((l) => (
          <button
            key={l.id}
            onClick={() => setLevel(l.id)}
            className={`flex-1 px-3 py-2 rounded-[10px] text-[0.75rem] font-semibold transition-all ${
              level === l.id
                ? 'bg-white text-[#1D1D1F] shadow-sm'
                : 'text-[#86868B] hover:text-[#1D1D1F]'
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}
