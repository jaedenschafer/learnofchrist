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

/**
 * Study depth — Beginner / Intermediate / Deep Dive.
 *
 * Drives both the legacy StudyGuide component (which gates sections by level)
 * and the rich study guide (which filters Blocks via `minLevel` per the
 * defaultMinLevel rule). Same enum, one source of truth, syncs to Supabase
 * for cross-device parity.
 */
export type StudyLevel = 'beginner' | 'intermediate' | 'deep';

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

/** UI metadata for the three levels. Surfaces in the picker. */
export const STUDY_LEVELS = [
  {
    id: 'beginner' as StudyLevel,
    label: 'Beginner',
    icon: '1',
    description: 'Quick overview and key takeaways',
  },
  {
    id: 'intermediate' as StudyLevel,
    label: 'Intermediate',
    icon: '2',
    description: 'Themes, questions, and connections',
  },
  {
    id: 'deep' as StudyLevel,
    label: 'Deep Dive',
    icon: '3',
    description: 'Full study with original language and cross-references',
  },
] as const;

const STORAGE_KEY = 'loc-study-level';

// Default for new readers: Intermediate. Beginner risks training people that
// the site is shallow; Deep Dive risks a wall-of-text first impression.
const DEFAULT_LEVEL: StudyLevel = 'intermediate';

const isStudyLevel = (v: unknown): v is StudyLevel =>
  v === 'beginner' || v === 'intermediate' || v === 'deep';

export function StudyLevelProvider({ children }: { children: ReactNode }) {
  const [level, setLevelState] = useState<StudyLevel>(DEFAULT_LEVEL);

  // Hydrate from localStorage on mount.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
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
      localStorage.setItem(STORAGE_KEY, next);
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
