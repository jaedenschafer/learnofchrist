'use client';

import { useEffect, useRef } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase/browser';
import { useStudyLevel, type StudyLevel } from '@/lib/StudyLevelContext';
import { useAudience, type Audience } from '@/lib/AudienceContext';

/**
 * Cross-device sync for the study-level + audience preferences.
 *
 * On mount (signed-in users only):
 *   1. Reads `user_reading_prefs.study_level` and `audience` from Supabase.
 *   2. If the values differ from the locally-stored / default ones, applies
 *      them. This is the "I just signed in on a new device" path.
 *   3. If `audience_lock` is true on the server (parent set up a child
 *      account), flips the local lock on so the audience cannot leave 'kids'.
 *
 * On every level/audience change:
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

const AUDIENCES: Audience[] = ['adults', 'youth', 'kids'];
const isAudience = (v: unknown): v is Audience =>
  typeof v === 'string' && (AUDIENCES as string[]).includes(v);

export function useUserReadingPrefsSync() {
  const { level, setLevel } = useStudyLevel();
  const { audience, setAudience, locked, setLocked } = useAudience();
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
          .select('study_level, audience, audience_lock')
          .eq('user_id', user.id)
          .maybeSingle();
        if (error || cancelled || !data) return;
        const serverLevel = data.study_level;
        if (isStudyLevel(serverLevel) && serverLevel !== level) {
          setLevel(serverLevel);
        }
        const serverAudience = data.audience;
        if (isAudience(serverAudience) && serverAudience !== audience) {
          setAudience(serverAudience);
        }
        if (data.audience_lock === true && !locked) {
          setLocked(true);
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

  // 2. Debounced write on every level/audience change. Skip the very first
  //    render so we don't immediately write back what we just read.
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
            {
              user_id: user.id,
              study_level: level,
              audience,
            },
            { onConflict: 'user_id' },
          );
      } catch {
        /* offline / signed-out — silently ignore; localStorage holds the value */
      }
    }, 500);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [level, audience]);
}
