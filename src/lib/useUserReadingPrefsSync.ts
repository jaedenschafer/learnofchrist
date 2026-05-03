'use client';

import { useEffect, useRef } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase/browser';
import { useStudyLevel, type StudyLevel } from '@/lib/StudyLevelContext';

/**
 * Cross-device sync for the study-level preference.
 *
 * On mount (signed-in users only):
 *   1. Reads `user_reading_prefs.study_level` from Supabase.
 *   2. If it differs from the locally-stored / default level, applies it.
 *      This is the "I just signed in on a new device" path.
 *
 * On every study-level change:
 *   1. Debounced 500ms write to Supabase via upsert.
 *
 * localStorage remains the source of truth on this device — the server row
 * is the cross-device sync mechanism, not the source of truth. Last write
 * wins; conflicts are extremely unlikely for a personal preference.
 *
 * Mount this once at the layout level (not per-page).
 */
const STUDY_LEVELS: StudyLevel[] = ['beginner', 'intermediate', 'deep'];
const isStudyLevel = (v: unknown): v is StudyLevel =>
  typeof v === 'string' && (STUDY_LEVELS as string[]).includes(v);

export function useUserReadingPrefsSync() {
  const { level, setLevel } = useStudyLevel();
  const initialised = useRef(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 1. Read on session start.
  useEffect(() => {
    if (initialised.current) return;
    initialised.current = true;
    let cancelled = false;
    (async () => {
      try {
        const supabase = getSupabaseBrowserClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user || cancelled) return;
        const { data, error } = await supabase
          .from('user_reading_prefs')
          .select('study_level')
          .eq('user_id', user.id)
          .maybeSingle();
        if (error || cancelled || !data) return;
        const serverLevel = data.study_level;
        if (isStudyLevel(serverLevel) && serverLevel !== level) {
          setLevel(serverLevel);
        }
      } catch {
        /* unauthenticated or offline — fine, localStorage carries us */
      }
    })();
    return () => {
      cancelled = true;
    };
    // Intentionally empty deps — read once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2. Debounced write on every level change. Skip the very first render so
  //    we don't immediately write back what we just read.
  const firstChange = useRef(true);
  useEffect(() => {
    if (firstChange.current) {
      firstChange.current = false;
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const supabase = getSupabaseBrowserClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        await supabase
          .from('user_reading_prefs')
          .upsert(
            { user_id: user.id, study_level: level },
            { onConflict: 'user_id' },
          );
      } catch {
        /* offline / signed-out — silently ignore; localStorage holds the value */
      }
    }, 500);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [level]);
}
