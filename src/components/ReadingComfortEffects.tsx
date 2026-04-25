'use client';

import { useEffect } from 'react';
import { useReadingPrefs } from '@/lib/ReadingPrefsContext';

/**
 * Applies font-size + focus-mode classes directly to a study article
 * container (anything with the `.rich-study` class by default) so its
 * inline CSS can scope on them. Dark mode is handled at the <html> level
 * in ReadingPrefsContext, so it isn't re-applied here.
 */
export default function ReadingComfortEffects({
  selector = '.rich-study',
}: {
  selector?: string;
} = {}) {
  const { fontSize, focusMode, hiddenSections } = useReadingPrefs();

  useEffect(() => {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) return;
    el.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
    el.classList.add(`font-${fontSize}`);
  }, [fontSize, selector]);

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
  }, [hiddenSections, selector]);

  return null;
}
