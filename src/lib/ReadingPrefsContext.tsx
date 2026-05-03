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
export type HidableSection = 'reflection' | 'carry' | 'hebrew' | 'images';

// Study-guide depth tier — Quick (5min) / Standard (10min) / Deep (15min).
// Re-exported from data/study-chapters/types so consumers don't need two
// imports just to read the active tier.
export type DepthTier = 5 | 10 | 15;

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
  depthTier: DepthTier;
  setDepthTier: (t: DepthTier) => void;
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
  depthTier: 10,
  setDepthTier: () => {},
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
  v === 'reflection' || v === 'carry' || v === 'hebrew' || v === 'images';
const isDepthTier = (v: unknown): v is DepthTier =>
  v === 5 || v === 10 || v === 15;

const HIDDEN_SECTIONS_KEY = 'loc-hidden-sections';
const DEPTH_TIER_KEY = 'loc-depth-tier';

// Default for new readers: Standard. Quick risks training people that the
// site is shallow; Deep risks a wall-of-text first impression.
const DEFAULT_DEPTH_TIER: DepthTier = 10;

export function ReadingPrefsProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>('medium');
  const [readingMode, setReadingModeState] = useState<ReadingMode>('verse');
  const [theme, setThemeState] = useState<Theme>('light');
  const [focusMode, setFocusModeState] = useState<FocusMode>('full');
  const [hiddenSections, setHiddenSections] = useState<ReadonlySet<HidableSection>>(new Set());
  const [depthTier, setDepthTierState] = useState<DepthTier>(DEFAULT_DEPTH_TIER);

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

    // Depth tier — string in storage, number in state.
    try {
      const savedTier = localStorage.getItem(DEPTH_TIER_KEY);
      if (savedTier !== null) {
        const parsed = Number(savedTier);
        if (isDepthTier(parsed)) setDepthTierState(parsed);
      }
    } catch {}
  }, []);

  // Print: force tier 15 so the user always prints the full chapter, then
  // restore their preference after print. Uses the standard beforeprint /
  // afterprint window events so it works both for File→Print and Cmd+P.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let savedTier: DepthTier | null = null;
    const before = () => {
      // Capture the current tier from state at the moment of print, not from
      // a stale closure — the setter accepts a function form.
      setDepthTierState((prev) => {
        savedTier = prev;
        return 15;
      });
    };
    const after = () => {
      if (savedTier !== null) {
        const restore = savedTier;
        savedTier = null;
        setDepthTierState(restore);
      }
    };
    window.addEventListener('beforeprint', before);
    window.addEventListener('afterprint', after);
    return () => {
      window.removeEventListener('beforeprint', before);
      window.removeEventListener('afterprint', after);
    };
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
    root.setAttribute('data-depth-tier', String(depthTier));
    if (focusMode === 'focus') {
      root.setAttribute('data-focus-mode', 'focus');
    } else {
      root.removeAttribute('data-focus-mode');
    }
  }, [isDark, focusMode, readingMode, fontSize, depthTier]);

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
  const setDepthTier = useCallback((t: DepthTier) => {
    setDepthTierState(t);
    try {
      localStorage.setItem(DEPTH_TIER_KEY, String(t));
    } catch {}
    // Sync to Supabase user_preferences when signed in. Fire-and-forget;
    // localStorage is the source of truth on this device, the server row
    // is the cross-device sync mechanism.
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('loc:depth-tier-changed', { detail: { tier: t } }));
    }
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
      depthTier,
      setDepthTier,
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
      depthTier,
      setDepthTier,
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
