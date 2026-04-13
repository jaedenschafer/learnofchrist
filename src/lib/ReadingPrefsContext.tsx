'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type FontSize = 'small' | 'medium' | 'large';
export type ReadingMode = 'verse' | 'paragraph';

interface ReadingPrefsContextType {
  fontSize: FontSize;
  setFontSize: (s: FontSize) => void;
  readingMode: ReadingMode;
  setReadingMode: (m: ReadingMode) => void;
}

const ReadingPrefsContext = createContext<ReadingPrefsContextType>({
  fontSize: 'medium',
  setFontSize: () => {},
  readingMode: 'verse',
  setReadingMode: () => {},
});

export function ReadingPrefsProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>('medium');
  const [readingMode, setReadingModeState] = useState<ReadingMode>('verse');

  useEffect(() => {
    const savedSize = localStorage.getItem('loc-font-size');
    if (savedSize && ['small', 'medium', 'large'].includes(savedSize)) {
      setFontSizeState(savedSize as FontSize);
    }
    const savedMode = localStorage.getItem('loc-reading-mode');
    if (savedMode && ['verse', 'paragraph'].includes(savedMode)) {
      setReadingModeState(savedMode as ReadingMode);
    }
  }, []);

  const setFontSize = (s: FontSize) => {
    setFontSizeState(s);
    localStorage.setItem('loc-font-size', s);
  };

  const setReadingMode = (m: ReadingMode) => {
    setReadingModeState(m);
    localStorage.setItem('loc-reading-mode', m);
  };

  return (
    <ReadingPrefsContext.Provider value={{ fontSize, setFontSize, readingMode, setReadingMode }}>
      {children}
    </ReadingPrefsContext.Provider>
  );
}

export function useReadingPrefs() {
  return useContext(ReadingPrefsContext);
}
