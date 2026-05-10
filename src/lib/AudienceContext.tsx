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
 * Reader audience — Adults / Youth / Kids.
 *
 * Orthogonal to StudyLevel. Adults and Youth share the same chapter file,
 * with `hideForYouth` / `youthOverride` controlling per-block tweaks. Kids
 * is a separate file under `src/data/kids-chapters/` with its own schema.
 *
 * Persistence mirrors StudyLevelContext exactly: localStorage on this
 * device, Supabase for cross-device sync (see useUserReadingPrefsSync).
 *
 * Child-account lock: when the active user's `user_reading_prefs.audience_lock`
 * is true, the picker UI hides and audience is forced to 'kids'. The
 * provider exposes a `locked` flag that the picker reads to disable itself.
 * The lock is set once when a parent configures a child's account.
 */

import type { Audience } from '@/data/study-chapters/types';
export type { Audience };

interface AudienceContextType {
  audience: Audience;
  setAudience: (audience: Audience) => void;
  /** True when the audience is forced to 'kids' by the active user's
   *  account flag. The picker should hide itself when this is true. */
  locked: boolean;
  /** Internal — used by the prefs sync hook to apply a server-side lock. */
  setLocked: (locked: boolean) => void;
}

const AudienceContext = createContext<AudienceContextType>({
  audience: 'adults',
  setAudience: () => {},
  locked: false,
  setLocked: () => {},
});

/** UI metadata for each audience. Surfaces in the picker. */
export const AUDIENCES = [
  {
    id: 'adults' as Audience,
    label: 'Adults',
    icon: 'A',
    description: 'Full study with original languages, history, and depth',
  },
  {
    id: 'youth' as Audience,
    label: 'Youth',
    icon: 'Y',
    description: 'Same depth, retuned for teens',
  },
  {
    id: 'kids' as Audience,
    label: 'Kids',
    icon: 'K',
    description: 'Story, big idea, and family talk-together',
  },
] as const;

const STORAGE_KEY = 'loc-audience';
const LOCK_KEY = 'loc-audience-lock';

// Default for new readers: Adults. Most visitors are adults; teens and
// parents-with-kids will pick their audience explicitly.
const DEFAULT_AUDIENCE: Audience = 'adults';

const isAudience = (v: unknown): v is Audience =>
  v === 'adults' || v === 'youth' || v === 'kids';

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudienceState] = useState<Audience>(DEFAULT_AUDIENCE);
  const [locked, setLockedState] = useState<boolean>(false);

  // Hydrate from localStorage on mount.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (isAudience(saved)) setAudienceState(saved);
      const lock = localStorage.getItem(LOCK_KEY);
      if (lock === '1') {
        setLockedState(true);
        setAudienceState('kids');
      }
    } catch {
      /* private mode etc. — fall back to default */
    }
  }, []);

  // Surface the active audience on <html> so CSS / print rules can react.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-audience', audience);
  }, [audience]);

  const setAudience = useCallback(
    (next: Audience) => {
      // Locked accounts can never leave 'kids'.
      if (locked && next !== 'kids') return;
      setAudienceState(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* user just won't have persistence */
      }
    },
    [locked],
  );

  const setLocked = useCallback((next: boolean) => {
    setLockedState(next);
    try {
      if (next) {
        localStorage.setItem(LOCK_KEY, '1');
      } else {
        localStorage.removeItem(LOCK_KEY);
      }
    } catch {
      /* ignore */
    }
    if (next) {
      // Force kids when the lock flips on.
      setAudienceState('kids');
      try {
        localStorage.setItem(STORAGE_KEY, 'kids');
      } catch {
        /* ignore */
      }
    }
  }, []);

  const value = useMemo(
    () => ({ audience, setAudience, locked, setLocked }),
    [audience, setAudience, locked, setLocked],
  );

  return (
    <AudienceContext.Provider value={value}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  return useContext(AudienceContext);
}
