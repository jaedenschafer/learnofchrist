'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  DEFAULT_STUDY_LEVEL,
  STUDY_LEVEL_STORAGE_KEY,
  isStudyLevel,
  type StudyLevel as ReaderStudyLevel,
} from './readerPrefs';

/**
 * Study depth — Beginner / Intermediate / Deep Dive.
 *
 * Drives both the legacy StudyGuide component (which gates sections by level)
 * and the rich study guide (which filters Blocks via `minLevel` per the
 * defaultMinLevel rule). Same enum, one source of truth, syncs to Supabase
 * for cross-device parity.
 *
 * Persistence key / default / valid values live in `./readerPrefs.ts`
 * (the shared schema iOS + Android mirror); this context owns the React
 * lifecycle (hydration from localStorage, print-time elevation, etc).
 */
export type StudyLevel = ReaderStudyLevel;

/** Numeric rank for comparing levels — higher means "more depth". */
export const LEVEL_RANK: Record<StudyLevel, number> = {
  beginner: 1,
  intermediate: 2,
  deep: 3,
};

/** True iff `level` is at least as deep as `min`. Used by the renderer
 *  to decide which Blocks to include at a given study level. */
export function isAtLeastLevel(level: StudyLevel, min: StudyLevel): boolean {
  return LEVEL_RANK[level] >= LEVEL_RANK[min];
}

interface StudyLevelContextType {
  level: StudyLevel;
  setLevel: (level: StudyLevel) => void;
}

const StudyLevelContext = createContext<StudyLevelContextType>({
  level: 'intermediate',
  setLevel: () => {},
});

/** UI metadata for the three levels. Surfaces in the picker.
 *
 * Labels were renamed from "Beginner / Intermediate / Deep Dive" — those
 * imply a skill judgment about the reader, which we want to avoid. The new
 * labels describe the *content scope*, not the person reading. The keys
 * (id values) stay the same so existing localStorage values keep working.
 */
export const STUDY_LEVELS = [
  {
    id: 'beginner' as StudyLevel,
    label: 'Quick',
    icon: '1',
    description: 'Quick overview and key takeaways',
  },
  {
    id: 'intermediate' as StudyLevel,
    label: 'Standard',
    icon: '2',
    description: 'Themes, questions, and connections',
  },
  {
    id: 'deep' as StudyLevel,
    label: 'Deep',
    icon: '3',
    description: 'Full study with original language and cross-references',
  },
] as const;

// STORAGE_KEY / DEFAULT_LEVEL / isStudyLevel moved to ./readerPrefs.ts
// so the iOS and Android clients can mirror them byte-for-byte. This
// module re-uses them via the imports above.

export function StudyLevelProvider({ children }: { children: ReactNode }) {
  const [level, setLevelState] = useState<StudyLevel>(DEFAULT_STUDY_LEVEL);

  // Hydrate from localStorage on mount.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STUDY_LEVEL_STORAGE_KEY);
      if (isStudyLevel(saved)) setLevelState(saved);
    } catch {
      /* private mode etc. — fall back to default */
    }
  }, []);

  // Surface the active level on <html> so CSS / print rules can react.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-study-level', level);
  }, [level]);

  // Print: force Deep Dive so the printout always contains the full chapter,
  // then restore the user's choice afterwards.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let saved: StudyLevel | null = null;
    const before = () => {
      setLevelState((prev) => {
        saved = prev;
        return 'deep';
      });
    };
    const after = () => {
      if (saved !== null) {
        const restore = saved;
        saved = null;
        setLevelState(restore);
      }
    };
    window.addEventListener('beforeprint', before);
    window.addEventListener('afterprint', after);
    return () => {
      window.removeEventListener('beforeprint', before);
      window.removeEventListener('afterprint', after);
    };
  }, []);

  const setLevel = useCallback((next: StudyLevel) => {
    setLevelState(next);
    try {
      localStorage.setItem(STUDY_LEVEL_STORAGE_KEY, next);
    } catch {
      /* user just won't have persistence */
    }
  }, []);

  const value = useMemo(() => ({ level, setLevel }), [level, setLevel]);

  return (
    <StudyLevelContext.Provider value={value}>
      {children}
    </StudyLevelContext.Provider>
  );
}

export function useStudyLevel() {
  return useContext(StudyLevelContext);
}
