'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import type { ShareContent } from './ShareMenu';

// ShareMenu is only mounted after a user interaction — defer the bundle.
const ShareMenu = dynamic(() => import('./ShareMenu'), { ssr: false });

/**
 * Attaches right-click / long-press handlers to every <mark> inside the
 * given container, so long-pressing any highlighted phrase opens a share
 * sheet with a clean social card pre-filled.
 *
 * The "snippet" of commentary is pulled from the mark's linked anchor
 * target (e.g. the <p id="c-bara"> paragraph the mark points to), so the
 * share card always includes the phrase plus the insight that unpacks it.
 */
export default function ShareableMarks({
  studyId,
  chapterRef,
  pageUrl,
  containerSelector = '.rich-study',
}: {
  studyId: string;        // e.g. "genesis-1"
  chapterRef: string;     // e.g. "Genesis 1"
  pageUrl: string;        // e.g. "/study/genesis/1"
  containerSelector?: string;
}) {
  const [content, setContent] = useState<ShareContent | null>(null);
  const longPressTimer = useRef<number | null>(null);
  const longPressFired = useRef(false);
  const hintShown = useRef(false);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const origin =
      typeof window !== 'undefined' ? window.location.origin : 'https://learnofchrist.com';
    const absUrl = origin + pageUrl;

    const extractContent = (mark: HTMLElement): ShareContent => {
      const phrase = (mark.textContent || '').trim();
      // Walk up to the surrounding scripture block to grab the verse number
      const verseSection = mark.closest<HTMLElement>('.verse-section');
      let verseNum = '';
      if (verseSection) {
        const vEl = verseSection.querySelector<HTMLElement>('.scripture .v');
        if (vEl) verseNum = vEl.textContent?.trim() || '';
      }
      const ref = verseNum
        ? `${chapterRef}:${verseNum}`
        : chapterRef;

      // Commentary snippet: if the mark is inside a .mark-link with href="#foo",
      // pull the first 180 chars from that target's text.
      let snippet = '';
      const link = mark.closest<HTMLAnchorElement>('a.mark-link');
      const href = link?.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          snippet = (target.textContent || '').trim();
          // If this is a .christ or .hebrew block, strip its label
          snippet = snippet.replace(/^(Christ Connection[^—]*—\s*)/, '');
        }
      }
      if (!snippet) {
        // Fallback: next sibling commentary paragraph
        const nextP = verseSection?.querySelector<HTMLElement>('p:not(.scripture)');
        snippet = nextP?.textContent?.trim() || '';
      }

      return {
        quote: phrase,
        snippet: snippet.slice(0, 220),
        ref,
        variant: 'insight',
        sourceUrl: absUrl,
      };
    };

    const trigger = (mark: HTMLElement) => {
      setContent(extractContent(mark));
    };

    // Right-click: intercept context menu on marks only.
    const onContextMenu = (e: MouseEvent) => {
      const mark = (e.target as HTMLElement).closest('mark');
      if (!mark) return;
      e.preventDefault();
      trigger(mark as HTMLElement);
    };

    // Long-press (mobile): touchstart → timer → share, cancel on move/end
    const onTouchStart = (e: TouchEvent) => {
      const mark = (e.target as HTMLElement).closest('mark');
      if (!mark) return;
      longPressFired.current = false;
      if (longPressTimer.current) window.clearTimeout(longPressTimer.current);
      longPressTimer.current = window.setTimeout(() => {
        longPressFired.current = true;
        try {
          if ('vibrate' in navigator) (navigator as Navigator & { vibrate?: (p: number) => boolean }).vibrate?.(8);
        } catch {}
        trigger(mark as HTMLElement);
      }, 520);
    };
    const cancelLongPress = () => {
      if (longPressTimer.current) {
        window.clearTimeout(longPressTimer.current);
        longPressTimer.current = null;
      }
    };

    // On mobile, if the long-press fired we want to suppress the follow-up tap
    const onClickCapture = (e: MouseEvent) => {
      const mark = (e.target as HTMLElement).closest('mark');
      if (!mark) return;
      if (longPressFired.current) {
        e.preventDefault();
        e.stopPropagation();
        longPressFired.current = false;
      }
    };

    // One-time hint: first hover over a mark flashes a tiny "long-press to share"
    // tooltip unless the user has already dismissed it in a previous session.
    const hintKey = 'loc-share-hint-seen';
    const onMouseEnter = (e: MouseEvent) => {
      if (hintShown.current) return;
      if (typeof window === 'undefined') return;
      try {
        if (localStorage.getItem(hintKey) === '1') {
          hintShown.current = true;
          return;
        }
      } catch {}
      const mark = (e.target as HTMLElement).closest<HTMLElement>('mark');
      if (!mark) return;
      hintShown.current = true;
      const hint = document.createElement('div');
      hint.className = 'mark-share-hint';
      hint.textContent = 'Right-click any highlight to share';
      document.body.appendChild(hint);
      const rect = mark.getBoundingClientRect();
      hint.style.top = `${rect.top + window.scrollY - 36}px`;
      hint.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
      window.setTimeout(() => {
        hint.classList.add('hide');
        window.setTimeout(() => hint.remove(), 400);
      }, 2600);
      try {
        localStorage.setItem(hintKey, '1');
      } catch {}
    };

    container.addEventListener('contextmenu', onContextMenu);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchend', cancelLongPress);
    container.addEventListener('touchmove', cancelLongPress, { passive: true });
    container.addEventListener('touchcancel', cancelLongPress);
    container.addEventListener('click', onClickCapture, true);
    container.addEventListener('mouseenter', onMouseEnter, true);

    return () => {
      container.removeEventListener('contextmenu', onContextMenu);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend', cancelLongPress);
      container.removeEventListener('touchmove', cancelLongPress);
      container.removeEventListener('touchcancel', cancelLongPress);
      container.removeEventListener('click', onClickCapture, true);
      container.removeEventListener('mouseenter', onMouseEnter, true);
    };
  }, [chapterRef, pageUrl, containerSelector, studyId]);

  if (!content) return null;
  return <ShareMenu content={content} onClose={() => setContent(null)} />;
}
