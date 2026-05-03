'use client';

import { useEffect, useRef } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase/browser';
import { useReadingPrefs, type DepthTier } from '@/lib/ReadingPrefsContext';

/**
 * Cross-device sync for the depth-tier preference.
 *
 * On mount (signed-in users only):
 *   1. Reads `user_reading_prefs.depth_tier` from Supabase.
 *   2. If it differs from the locally-stored / default tier, applies it.
 *      This is the "I just signed in on a new device" path.
 *
 * On every depth-tier change:
 *   1. Debounced 500ms write to Supabase via upsert.
 *
 * localStorage remains the source of truth on this device — the server row
 * is the cross-device sync mechanism, not the source of truth. Last write
 * wins; conflicts are extremely unlikely for a personal preference.
 *
 * Mount this once at the layout level (not per-page).
 */
export function useUserReadingPrefsSync() {
  const { depthTier, setDepthTier } = useReadingPrefs();
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
          .select('depth_tier')
          .eq('user_id', user.id)
          .maybeSingle();
        if (error || cancelled || !data) return;
        const serverTier = data.depth_tier as DepthTier;
        // Only override if different — avoids triggering a write back.
        if (serverTier !== depthTier && (serverTier === 5 || serverTier === 10 || serverTier === 15)) {
          setDepthTier(serverTier);
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

  // 2. Debounced write on every tier change. Skip the very first render so we
  //    don't immediately write back what we just read.
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
            { user_id: user.id, depth_tier: depthTier },
            { onConflict: 'user_id' },
          );
      } catch {
        /* offline / signed-out — silently ignore; localStorage holds the value */
      }
    }, 500);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [depthTier]);
}
