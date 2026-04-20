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

export type FontSize = 'small' | 'medium' | 'large';
export type ReadingMode = 'verse' | 'paragraph';
export type Theme = 'light' | 'dark' | 'system';
export type FocusMode = 'full' | 'focus';

interface ReadingPrefsContextType {
  fontSize: FontSize;
  setFontSize: (s: FontSize) => void;
  readingMode: ReadingMode;
  setReadingMode: (m: ReadingMode) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  focusMode: FocusMode;
  setFocusMode: (f: FocusMode) => void;
  // Resolved dark state after system-preference + user-override
  isDark: boolean;
}

const ReadingPrefsContext = createContext<ReadingPrefsContextType>({
  fontSize: 'medium',
  setFontSize: () => {},
  readingMode: 'verse',
  setReadingMode: () => {},
  theme: 'system',
  setTheme: () => {},
  focusMode: 'full',
  setFocusMode: () => {},
  isDark: false,
});

const isFontSize = (v: unknown): v is FontSize =>
  v === 'small' || v === 'medium' || v === 'large';
const isReadingMode = (v: unknown): v is ReadingMode =>
  v === 'verse' || v === 'paragraph';
const isTheme = (v: unknown): v is Theme =>
  v === 'light' || v === 'dark' || v === 'system';
const isFocusMode = (v: unknown): v is FocusMode =>
  v === 'full' || v === 'focus';

export function ReadingPrefsProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>('medium');
  const [readingMode, setReadingModeState] = useState<ReadingMode>('verse');
  const [theme, setThemeState] = useState<Theme>('system');
  const [focusMode, setFocusModeState] = useState<FocusMode>('full');
  const [systemDark, setSystemDark] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedSize = localStorage.getItem('loc-font-size');
    if (isFontSize(savedSize)) setFontSizeState(savedSize);
    const savedMode = localStorage.getItem('loc-reading-mode');
    if (isReadingMode(savedMode)) setReadingModeState(savedMode);
    const savedTheme = localStorage.getItem('loc-theme');
    if (isTheme(savedTheme)) setThemeState(savedTheme);
    const savedFocus = localStorage.getItem('loc-focus-mode');
    if (isFocusMode(savedFocus)) setFocusModeState(savedFocus);
  }, []);

  // Track system color-scheme preference
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const isDark = theme === 'dark' || (theme === 'system' && systemDark);

  // Apply data-reader-theme + data-focus-mode to <html>. One effect keeps the
  // two writes batched — browsers coalesce attribute changes in the same
  // microtask, so consumers only pay one style invalidation per preference
  // change instead of two.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.setAttribute('data-reader-theme', isDark ? 'dark' : 'light');
    if (focusMode === 'focus') {
      root.setAttribute('data-focus-mode', 'focus');
    } else {
      root.removeAttribute('data-focus-mode');
    }
  }, [isDark, focusMode]);

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
