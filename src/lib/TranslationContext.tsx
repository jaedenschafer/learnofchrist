'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

const PUBLIC_DOMAIN_TRANSLATIONS = [
  { abbreviation: 'kjv', name: 'King James Version' },
  { abbreviation: 'asv', name: 'American Standard Version' },
  { abbreviation: 'web', name: 'World English Bible' },
];

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [currentTranslation, setCurrentTranslation] = useState('kjv');

  // Load saved preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('loc-translation');
    if (saved && PUBLIC_DOMAIN_TRANSLATIONS.some(t => t.abbreviation === saved)) {
      setCurrentTranslation(saved);
    }
  }, []);

  const setTranslation = (abbr: string) => {
    setCurrentTranslation(abbr);
    localStorage.setItem('loc-translation', abbr);
  };

  return (
    <TranslationContext.Provider
      value={{
        currentTranslation,
        setTranslation,
        availableTranslations: PUBLIC_DOMAIN_TRANSLATIONS,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}
