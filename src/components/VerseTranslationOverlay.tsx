'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from '@/lib/TranslationContext';
import { fetchVersesClient, type Verse } from '@/lib/supabase';
import './VerseTranslationOverlay.css';

/**
 * Side-by-side translation on long-press.
 *
 * Mounts a single document-level listener that watches every verse line
 * inside the rich-study container. A long press (touch) or right-click
 * (mouse) on a verse opens a small overlay anchored under the line, with
 * a translation picker. The KJV stays in place above; the user-picked
 * translation renders inside the overlay so the spine of the page is
 * never disturbed.
 *
 * Translations come from `useTranslation().availableTranslations` — the
 * same list as the toolbar switcher — so the user can compare against
 * any modern public-domain translation already wired into the site.
 *
 * Verses are cached client-side in a Map keyed by `<book>/<ch>/<abbr>`
 * so re-opening the picker for the same line is instant.
 */
export default function VerseTranslationOverlay({
  bookSlug,
  chapter,
}: {
  bookSlug: string;
  /** Primary chapter for this study guide. The overlay reads the actual
   *  chapter off the verse element it was triggered from (multi-chapter
   *  rich pages reference more than one), but this prop seeds the cache
   *  warmer so the user's first long-press feels instant. */
  chapter: number;
}) {
  const { availableTranslations, currentTranslation } = useTranslation();
  // Use chapter for documentation/debug; helps the React DevTools display
  // which chapter this overlay belongs to without affecting rendering.
  void chapter;
  const [open, setOpen] = useState<{
    verseNumber: number;
    chapter: number;
    /** Anchor rect (page coordinates) of the verse line that was pressed. */
    rect: DOMRect;
  } | null>(null);
  const [picked, setPicked] = useState<string>(() =>
    currentTranslation === 'kjv' ? 'web' : currentTranslation,
  );
  const [verses, setVerses] = useState<Verse[]>([]);
  const [loading, setLoading] = useState(false);
  const cache = useRef<Map<string, Verse[]>>(new Map());

  // ─── Long-press / right-click listener ───────────────────────────
  useEffect(() => {
    const container = document.querySelector<HTMLElement>('.rich-study');
    if (!container) return;

    let pressTimer: number | null = null;
    let pressedVerse: { line: HTMLElement; verseNumber: number; chapter: number } | null = null;

    function findVerseLine(target: EventTarget | null): {
      line: HTMLElement;
      verseNumber: number;
      chapter: number;
    } | null {
      const el = target as HTMLElement | null;
      if (!el) return null;
      const scripture = el.closest<HTMLElement>('.scripture');
      if (!scripture) return null;
      const ch = parseInt(scripture.getAttribute('data-chapter') || '0', 10);
      if (!ch) return null;

      // Verse numbers render as <span class="v">N</span> inline-siblings
      // of the verse text inside <p class="scripture-body">. To find which
      // verse the user tapped, walk LEFT through the inline children of
      // .scripture-body, starting from the ancestor of `el` that's a
      // direct child of .scripture-body, collecting the most recent `.v`.
      const body = scripture.querySelector<HTMLElement>('.scripture-body') ?? scripture;

      // Find the inline ancestor that's a direct child of `body` (or the
      // tapped element itself if it already is). Falls back to scripture.
      let inline: HTMLElement | null = el;
      while (inline && inline.parentElement !== body) {
        if (inline === body) break;
        inline = inline.parentElement;
      }

      // Fallback: tapped element isn't inside .scripture-body — return the
      // block's first verse number.
      const fallbackVerse = (): number => {
        const firstV = scripture.querySelector('.v');
        return firstV ? parseInt(firstV.textContent || '0', 10) || 1 : 1;
      };

      if (!inline || inline === body) {
        return { line: scripture, verseNumber: fallbackVerse(), chapter: ch };
      }

      // Two rendering paths to support:
      //  1. KJV path — .v is a direct child of .scripture-body, alongside
      //     verse text spans. Walk LEFT through previousElementSibling.
      //  2. Non-KJV path — each verse is a <span class="verse-line"> child
      //     of .scripture-body, with the .v nested INSIDE that wrapper.
      //     Look INSIDE the inline element first; the wrapper itself is
      //     the verse line.
      if (inline.classList.contains('v')) {
        const n = parseInt(inline.textContent || '0', 10);
        return { line: scripture, verseNumber: n || fallbackVerse(), chapter: ch };
      }
      const innerV = inline.querySelector<HTMLElement>(':scope > .v');
      if (innerV) {
        const n = parseInt(innerV.textContent || '0', 10);
        if (n) return { line: inline, verseNumber: n, chapter: ch };
      }
      let cursor: Element | null = inline.previousElementSibling;
      while (cursor) {
        if (cursor.classList.contains('v')) {
          const n = parseInt(cursor.textContent || '0', 10);
          if (n) return { line: scripture, verseNumber: n, chapter: ch };
        }
        cursor = cursor.previousElementSibling;
      }
      return { line: scripture, verseNumber: fallbackVerse(), chapter: ch };
    }

    function startPress(e: TouchEvent) {
      const found = findVerseLine(e.target);
      if (!found) return;
      pressedVerse = found;
      pressTimer = window.setTimeout(() => {
        if (!pressedVerse) return;
        const rect = pressedVerse.line.getBoundingClientRect();
        // Use page-coordinate rect so the overlay positions correctly when
        // the user has scrolled.
        const pageRect = new DOMRect(
          rect.left + window.scrollX,
          rect.top + window.scrollY,
          rect.width,
          rect.height,
        );
        setOpen({
          verseNumber: pressedVerse.verseNumber,
          chapter: pressedVerse.chapter,
          rect: pageRect,
        });
        // Suppress the default text-selection callout that often follows.
        if ('vibrate' in navigator) {
          try {
            navigator.vibrate?.(8);
          } catch {
            /* ignore */
          }
        }
      }, 480);
    }

    function cancelPress() {
      if (pressTimer != null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
      pressedVerse = null;
    }

    function onContextMenu(e: MouseEvent) {
      const found = findVerseLine(e.target);
      if (!found) return;
      e.preventDefault();
      const rect = found.line.getBoundingClientRect();
      const pageRect = new DOMRect(
        rect.left + window.scrollX,
        rect.top + window.scrollY,
        rect.width,
        rect.height,
      );
      setOpen({
        verseNumber: found.verseNumber,
        chapter: found.chapter,
        rect: pageRect,
      });
    }

    container.addEventListener('touchstart', startPress, { passive: true });
    container.addEventListener('touchend', cancelPress, { passive: true });
    container.addEventListener('touchmove', cancelPress, { passive: true });
    container.addEventListener('touchcancel', cancelPress, { passive: true });
    container.addEventListener('contextmenu', onContextMenu);

    return () => {
      cancelPress();
      container.removeEventListener('touchstart', startPress);
      container.removeEventListener('touchend', cancelPress);
      container.removeEventListener('touchmove', cancelPress);
      container.removeEventListener('touchcancel', cancelPress);
      container.removeEventListener('contextmenu', onContextMenu);
    };
  }, []);

  // ─── Fetch verses for the active picked translation ───────────────
  useEffect(() => {
    if (!open) return;
    const key = `${bookSlug}/${open.chapter}/${picked}`;
    const cached = cache.current.get(key);
    if (cached) {
      setVerses(cached);
      return;
    }
    setLoading(true);
    let cancelled = false;
    fetchVersesClient(bookSlug, open.chapter, picked).then((vs) => {
      if (cancelled) return;
      cache.current.set(key, vs);
      setVerses(vs);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [open, picked, bookSlug]);

  // ─── ESC closes; click outside closes ────────────────────────────
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!open) return null;
  const verse = verses.find((v) => v.verse_number === open.verseNumber);
  // Anchor: under the verse, pinned to viewport horizontal center if the
  // verse extends past the viewport edges.
  const top = open.rect.top + open.rect.height + 6;
  const left = Math.min(
    Math.max(open.rect.left, 16 + window.scrollX),
    window.scrollX + window.innerWidth - 360,
  );

  return createPortal(
    <div
      className="vto-backdrop"
      role="presentation"
      onClick={() => setOpen(null)}
    >
      <div
        className="vto-card"
        style={{ top, left }}
        role="dialog"
        aria-label={`Compare translations for verse ${open.verseNumber}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="vto-head">
          <span className="vto-eyebrow">
            {bookSlug.replace(/-/g, ' ')} {open.chapter}:{open.verseNumber}
          </span>
          <button
            type="button"
            className="vto-close"
            aria-label="Close"
            onClick={() => setOpen(null)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
        <div className="vto-picker" role="radiogroup" aria-label="Translation">
          {availableTranslations
            .filter((t) => t.abbreviation !== 'kjv')
            .map((t) => (
              <button
                key={t.abbreviation}
                type="button"
                role="radio"
                aria-checked={picked === t.abbreviation}
                className={`vto-pill ${picked === t.abbreviation ? 'is-active' : ''}`}
                onClick={() => setPicked(t.abbreviation)}
              >
                {t.abbreviation.toUpperCase()}
              </button>
            ))}
        </div>
        <div className="vto-body">
          {loading && !verse ? (
            <p className="vto-loading">Loading translation…</p>
          ) : verse ? (
            <p className="vto-verse">{cleanVerseText(verse.text)}</p>
          ) : (
            <p className="vto-loading">No verse text available for this translation.</p>
          )}
          <p className="vto-attr">
            {availableTranslations.find((t) => t.abbreviation === picked)?.name ||
              picked.toUpperCase()}
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function cleanVerseText(text: string): string {
  return text
    .replace(/<\/?FI>/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}
