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

export type StudyLevel = 'beginner' | 'intermediate' | 'deep';

interface StudyLevelContextType {
  level: StudyLevel;
  setLevel: (level: StudyLevel) => void;
}

const StudyLevelContext = createContext<StudyLevelContextType>({
  level: 'deep',
  setLevel: () => {},
});

export const STUDY_LEVELS = [
  { id: 'beginner' as StudyLevel, label: 'Beginner', icon: '1', description: 'Quick overview and key takeaways' },
  { id: 'intermediate' as StudyLevel, label: 'Intermediate', icon: '2', description: 'Themes, questions, and connections' },
  { id: 'deep' as StudyLevel, label: 'Deep Dive', icon: '3', description: 'Full study with original language and cross-references' },
] as const;

export function StudyLevelProvider({ children }: { children: ReactNode }) {
  // Every study guide is a deep dive for now. The picker has been removed
  // from the filter bar; the context still exists so consumers don't break.
  const [level] = useState<StudyLevel>('deep');

  const setLevel = useCallback((_: StudyLevel) => {
    // no-op: level is locked to 'deep' until the picker comes back.
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
