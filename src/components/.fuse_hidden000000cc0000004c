'use client';

import { useUserReadingPrefsSync } from '@/lib/useUserReadingPrefsSync';

/**
 * Mount-once helper that wires Supabase ↔ ReadingPrefsContext sync.
 *
 * Renders nothing. Sits inside ReadingPrefsProvider in the root layout so
 * the sync hook has access to the provider's context. Pulled out of the
 * provider itself to keep the provider file free of Supabase imports
 * (which would otherwise drag a heavy dep into every page).
 */
export default function ReadingPrefsSync() {
  useUserReadingPrefsSync();
  return null;
}
