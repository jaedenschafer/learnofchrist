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

interface TranslationContextType {
  currentTranslation: string;
  setTranslation: (abbr: string) => void;
  availableTranslations: { abbreviation: string; name: string }[];
}

const TranslationContext = createContext<TranslationContextType>({
  currentTranslation: 'kjv',
  setTranslation: () => {},
  availableTranslations: [],
});

export function useTranslation() {
  return useContext(TranslationContext);
}

// All public domain translations. KJV stays at the top as the default; the
// rest are alphabetised by full name so the dropdown is easy to scan.
const KJV = { abbreviation: 'kjv', name: 'King James Version' };
const REST = [
  { abbreviation: 'asv', name: 'American Standard Version' },
  { abbreviation: 'bsb', name: 'Berean Standard Bible' },
  { abbreviation: 'dra', name: 'Douay-Rheims American' },
  { abbreviation: 'jst', name: 'Joseph Smith Translation' },
  { abbreviation: 'lsv', name: 'Literal Standard Version' },
  { abbreviation: 'nwt', name: 'New World Translation' },
  { abbreviation: 'web', name: 'World English Bible' },
].sort((a, b) => a.name.localeCompare(b.name));
const PUBLIC_DOMAIN_TRANSLATIONS = [KJV, ...REST];

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [currentTranslation, setCurrentTranslation] = useState('kjv');

  // Load saved preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('loc-translation');
    if (saved && PUBLIC_DOMAIN_TRANSLATIONS.some(t => t.abbreviation === saved)) {
      setCurrentTranslation(saved);
    }
  }, []);

  const setTranslation = useCallback((abbr: string) => {
    setCurrentTranslation(abbr);
    try {
      localStorage.setItem('loc-translation', abbr);
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
