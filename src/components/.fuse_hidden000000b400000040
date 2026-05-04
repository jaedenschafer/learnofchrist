'use client';

import { useEffect } from 'react';
import { useReadingPrefs } from '@/lib/ReadingPrefsContext';

/**
 * Applies focus-mode + section-visibility classes to a study article
 * container (anything with the `.rich-study` class by default) so its
 * inline CSS can scope on them.
 *
 * Theme and font-size are now handled at the <html> level by
 * ReadingPrefsContext (data-reader-theme + data-font-size), so they are
 * NOT re-applied here.
 */
export default function ReadingComfortEffects({
  selector = '.rich-study',
}: {
  selector?: string;
} = {}) {
  const { focusMode, hiddenSections } = useReadingPrefs();

  useEffect(() => {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) return;
    if (focusMode === 'focus') el.classList.add('is-focus');
    else el.classList.remove('is-focus');
  }, [focusMode, selector]);

  useEffect(() => {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) return;
    el.classList.toggle('hide-reflection', hiddenSections.has('reflection'));
    el.classList.toggle('hide-carry', hiddenSections.has('carry'));
    el.classList.toggle('hide-hebrew', hiddenSections.has('hebrew'));
    el.classList.toggle('hide-images', hiddenSections.has('images'));
  }, [hiddenSections, selector]);

  return null;
}
