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

export type FontSize = 'small' | 'medium' | 'large' | 'xlarge';
export type ReadingMode = 'verse' | 'paragraph';
export type Theme = 'light' | 'dark';
export type FocusMode = 'full' | 'focus';

// Optional study-page sections the reader can hide. Each maps to a CSS class
// applied to .rich-study so the section is removed from the page.
export type HidableSection = 'reflection' | 'carry';

interface ReadingPrefsContextType {
  fontSize: FontSize;
  setFontSize: (s: FontSize) => void;
  readingMode: ReadingMode;
  setReadingMode: (m: ReadingMode) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  focusMode: FocusMode;
  setFocusMode: (f: FocusMode) => void;
  hiddenSections: ReadonlySet<HidableSection>;
  toggleSection: (s: HidableSection) => void;
  // Resolved dark state after system-preference + user-override
  isDark: boolean;
}

const ReadingPrefsContext = createContext<ReadingPrefsContextType>({
  fontSize: 'medium',
  setFontSize: () => {},
  readingMode: 'verse',
  setReadingMode: () => {},
  theme: 'light',
  setTheme: () => {},
  focusMode: 'full',
  setFocusMode: () => {},
  hiddenSections: new Set(),
  toggleSection: () => {},
  isDark: false,
});

const isFontSize = (v: unknown): v is FontSize =>
  v === 'small' || v === 'medium' || v === 'large' || v === 'xlarge';
const isReadingMode = (v: unknown): v is ReadingMode =>
  v === 'verse' || v === 'paragraph';
const isTheme = (v: unknown): v is Theme =>
  v === 'light' || v === 'dark';
const isFocusMode = (v: unknown): v is FocusMode =>
  v === 'full' || v === 'focus';
const isHidableSection = (v: unknown): v is HidableSection =>
  v === 'reflection' || v === 'carry';

const HIDDEN_SECTIONS_KEY = 'loc-hidden-sections';

export function ReadingPrefsProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>('medium');
  const [readingMode, setReadingModeState] = useState<ReadingMode>('verse');
  const [theme, setThemeState] = useState<Theme>('light');
  const [focusMode, setFocusModeState] = useState<FocusMode>('full');
  const [hiddenSections, setHiddenSections] = useState<ReadonlySet<HidableSection>>(new Set());

  // Load from localStorage
  useEffect(() => {
    const savedSize = localStorage.getItem('loc-font-size');
    if (isFontSize(savedSize)) setFontSizeState(savedSize);
    const savedMode = localStorage.getItem('loc-reading-mode');
    if (isReadingMode(savedMode)) setReadingModeState(savedMode);

    // Theme: we used to support 'system' — migrate any stored 'system' to
    // 'light' so returning users don't get dark on a dark-mode OS by default.
    const savedTheme = localStorage.getItem('loc-theme');
    if (isTheme(savedTheme)) {
      setThemeState(savedTheme);
    } else if (savedTheme === 'system') {
      setThemeState('light');
      try {
        localStorage.setItem('loc-theme', 'light');
      } catch {}
    }

    const savedFocus = localStorage.getItem('loc-focus-mode');
    if (isFocusMode(savedFocus)) setFocusModeState(savedFocus);

    try {
      const savedHidden = localStorage.getItem(HIDDEN_SECTIONS_KEY);
      if (savedHidden) {
        const parsed = JSON.parse(savedHidden);
        if (Array.isArray(parsed)) {
          const filtered = parsed.filter(isHidableSection);
          if (filtered.length) setHiddenSections(new Set(filtered));
        }
      }
    } catch {}
  }, []);

  const isDark = theme === 'dark';

  // Apply data-reader-theme, data-focus-mode, data-reading-mode to <html>.
  // One effect keeps the writes batched — browsers coalesce attribute changes
  // in the same microtask, so consumers only pay one style invalidation per
  // preference change instead of three.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.setAttribute('data-reader-theme', isDark ? 'dark' : 'light');
    root.setAttribute('data-reading-mode', readingMode);
    root.setAttribute('data-font-size', fontSize);
    if (focusMode === 'focus') {
      root.setAttribute('data-focus-mode', 'focus');
    } else {
      root.removeAttribute('data-focus-mode');
    }
  }, [isDark, focusMode, readingMode, fontSize]);

  const setFontSize = useCallback((s: FontSize) => {
    setFontSizeState(s);
    try {
      localStorage.setItem('loc-font-size', s);
    } catch {}
  }, []);
  const setReadingMode = useCallback((m: ReadingMode) => {
    setReadingModeState(m);
    try {
      localStorage.setItem('loc-reading-mode', m);
    } catch {}
  }, []);
  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem('loc-theme', t);
    } catch {}
  }, []);
  const setFocusMode = useCallback((f: FocusMode) => {
    setFocusModeState(f);
    try {
      localStorage.setItem('loc-focus-mode', f);
    } catch {}
  }, []);
  const toggleSection = useCallback((s: HidableSection) => {
    setHiddenSections((prev) => {
      const next = new Set(prev);
      if (next.has(s)) next.delete(s);
      else next.add(s);
      try {
        localStorage.setItem(HIDDEN_SECTIONS_KEY, JSON.stringify([...next]));
      } catch {}
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      fontSize,
      setFontSize,
      readingMode,
      setReadingMode,
      theme,
      setTheme,
      focusMode,
      setFocusMode,
      hiddenSections,
      toggleSection,
      isDark,
    }),
    [
      fontSize,
      setFontSize,
      readingMode,
      setReadingMode,
      theme,
      setTheme,
      focusMode,
      setFocusMode,
      hiddenSections,
      toggleSection,
      isDark,
    ],
  );

  return (
    <ReadingPrefsContext.Provider value={value}>
      {children}
    </ReadingPrefsContext.Provider>
  );
}

export function useReadingPrefs() {
  return useContext(ReadingPrefsContext);
}
