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
  DEFAULT_TRANSLATION,
  PUBLIC_DOMAIN_TRANSLATIONS,
  TRANSLATION_STORAGE_KEY,
  isKnownTranslation,
} from './readerPrefs';

interface TranslationContextType {
  currentTranslation: string;
  setTranslation: (abbr: string) => void;
  availableTranslations: readonly { abbreviation: string; name: string }[];
}

const TranslationContext = createContext<TranslationContextType>({
  currentTranslation: DEFAULT_TRANSLATION,
  setTranslation: () => {},
  availableTranslations: [],
});

export function useTranslation() {
  return useContext(TranslationContext);
}

// The translation catalog / storage key / default live in
// `./readerPrefs.ts` so the iOS and Android clients can mirror them
// byte-for-byte. This module owns the React state lifecycle.

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [currentTranslation, setCurrentTranslation] = useState<string>(DEFAULT_TRANSLATION);

  // Load saved preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(TRANSLATION_STORAGE_KEY);
    if (isKnownTranslation(saved)) {
      setCurrentTranslation(saved);
    }
  }, []);

  const setTranslation = useCallback((abbr: string) => {
    setCurrentTranslation(abbr);
    try {
      localStorage.setItem(TRANSLATION_STORAGE_KEY, abbr);
    } catch {}
  }, []);

  // Memoize so every consumer doesn't rerender on unrelated parent renders.
  const value = useMemo(
    () => ({
      currentTranslation,
      setTranslation,
      availableTranslations: PUBLIC_DOMAIN_TRANSLATIONS,
    }),
    [currentTranslation, setTranslation],
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}
