'use client';

import { useEffect, useRef, useState } from 'react';
import { fetchVersesClient, Verse } from '@/lib/supabase';

/**
 * Per-page translation cache for chapter verses.
 *
 * Components like VerseDisplay used to re-fetch every translation toggle,
 * even when bouncing between two translations the user had already loaded.
 * This hook keeps a module-level `Map<key, Verse[]>` where
 * `key = '${book}/${chapter}/${translation}'` so flipping KJV → ASV → KJV
 * only hits the network twice for the lifetime of the tab.
 *
 * The cache is intentionally module-scoped (not a ref). React StrictMode
 * double-invokes effects in dev; sharing the cache across mounts means
 * the second effect run lands a cache hit instead of a duplicate fetch.
 * In prod it also persists across remounts (e.g. translation switcher
 * unmounting the chapter content) within the same page session.
 */

const cache = new Map<string, Verse[]>();

function cacheKey(book: string, chapter: number, translation: string): string {
  return `${book}/${chapter}/${translation}`;
}

export interface UseChapterVersesResult {
  verses: Verse[];
  loading: boolean;
  /** Translation the currently-returned `verses` array belongs to. */
  loadedTranslation: string;
}

export function useChapterVerses(
  book: string,
  chapter: number,
  translation: string,
  initialVerses: Verse[],
  initialTranslation: string = 'kjv',
): UseChapterVersesResult {
  // Seed the cache with the SSR-provided verses on first render so we
  // never refetch the translation the page was rendered with.
  const seeded = useRef(false);
  if (!seeded.current) {
    if (initialVerses.length > 0) {
      cache.set(cacheKey(book, chapter, initialTranslation), initialVerses);
    }
    seeded.current = true;
  }

  // Pick the best synchronously-available verses for the current
  // translation. Falls back to initialVerses so the first paint never
  // flashes empty when switching translations and back.
  const initialCached = cache.get(cacheKey(book, chapter, translation));
  const [verses, setVerses] = useState<Verse[]>(initialCached ?? initialVerses);
  const [loading, setLoading] = useState(false);
  const [loadedTranslation, setLoadedTranslation] = useState(
    initialCached ? translation : initialTranslation,
  );

  useEffect(() => {
    const key = cacheKey(book, chapter, translation);
    const cached = cache.get(key);
    if (cached) {
      setVerses(cached);
      setLoadedTranslation(translation);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetchVersesClient(book, chapter, translation).then((newVerses) => {
      if (cancelled) return;
      if (newVerses.length > 0) {
        cache.set(key, newVerses);
        setVerses(newVerses);
        setLoadedTranslation(translation);
      } else if (initialVerses.length > 0) {
        // Selected translation has no verses for this chapter (e.g. KJV
        // for the Apocrypha) — keep showing the initial set rather than
        // blanking the page.
        setVerses(initialVerses);
        setLoadedTranslation(initialTranslation);
      }
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [book, chapter, translation, initialVerses, initialTranslation]);

  return { verses, loading, loadedTranslation };
}
