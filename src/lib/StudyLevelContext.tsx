'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type StudyLevel = 'beginner' | 'intermediate' | 'deep';

interface StudyLevelContextType {
  level: StudyLevel;
  setLevel: (level: StudyLevel) => void;
}

const StudyLevelContext = createContext<StudyLevelContextType>({
  level: 'intermediate',
  setLevel: () => {},
});

const STORAGE_KEY = 'loc-study-level';

export const STUDY_LEVELS = [
  { id: 'beginner' as StudyLevel, label: 'Beginner', icon: '1', description: 'Quick overview and key takeaways' },
  { id: 'intermediate' as StudyLevel, label: 'Intermediate', icon: '2', description: 'Themes, questions, and connections' },
  { id: 'deep' as StudyLevel, label: 'Deep Dive', icon: '3', description: 'Full study with original language and cross-references' },
] as const;

export function StudyLevelProvider({ children }: { children: ReactNode }) {
  const [level, setLevelState] = useState<StudyLevel>('intermediate');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && ['beginner', 'intermediate', 'deep'].includes(saved)) {
      setLevelState(saved as StudyLevel);
    }
  }, []);

  const setLevel = (newLevel: StudyLevel) => {
    setLevelState(newLevel);
    localStorage.setItem(STORAGE_KEY, newLevel);
  };

  return (
    <StudyLevelContext.Provider value={{ level, setLevel }}>
      {children}
    </StudyLevelContext.Provider>
  );
}

export function useStudyLevel() {
  return useContext(StudyLevelContext);
}
