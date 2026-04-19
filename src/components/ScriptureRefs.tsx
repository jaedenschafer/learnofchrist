'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { REF_REGEX, parseRef, fetchVerses, type ParsedRef } from '@/lib/scriptureRefs';
import { useTranslation } from '@/lib/TranslationContext';

interface PopoverState {
  ref: ParsedRef;
  anchor: DOMRect;
}

/**
 * Scans the given container for Scripture references in plain text and wraps
 * them in buttons that open a hover/tap popover with the verse text in the
 * reader's current translation. Skips text already inside scripture blocks
 * (since those are already styled) and inside anchor tags.
 */
export default function ScriptureRefs({
  containerSelector = '.rich-study',
}: {
  containerSelector?: string;
} = {}) {
  const { currentTranslation } = useTranslation();
  const [popover, setPopover] = useState<PopoverState | null>(null);
  const [verseText, setVerseText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const attached = useRef(false);
  const hideTimer = useRef<number | null>(null);

  // ── Scan + wrap references on mount ──
  useEffect(() => {
    if (attached.current) return;
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;
    attached.current = true;

    // Skip inside these ancestors
    const SKIP = new Set(['A', 'BUTTON', 'MARK', 'SCRIPT', 'STYLE', 'CODE']);
    // Also skip the literal scripture paragraphs — users can already read those
    // and the verse numbers confuse the regex
    const isInsideScripture = (node: Node) => !!(node.parentElement?.closest('.scripture, .hebrew .script, .hebrew .translit'));

    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
      acceptNode(node: Node) {
        const el = node.parentElement;
        if (!el) return NodeFilter.FILTER_REJECT;
        if (SKIP.has(el.tagName)) return NodeFilter.FILTER_REJECT;
        // Don't walk into a node we already processed
        if (el.classList.contains('scripture-ref')) return NodeFilter.FILTER_REJECT;
        if (el.closest('a, button')) return NodeFilter.FILTER_REJECT;
        if (isInsideScripture(node)) return NodeFilter.FILTER_REJECT;
        const text = node.nodeValue;
        if (!text || !/\d:\d/.test(text)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const targets: Text[] = [];
    let current = walker.nextNode();
    while (current) {
      targets.push(current as Text);
      current = walker.nextNode();
    }

    for (const textNode of targets) {
      const original = textNode.nodeValue || '';
      // Fresh regex since we use /g
      const re = new RegExp(REF_REGEX.source, 'g');
      let lastIndex = 0;
      let match: RegExpExecArray | null;
      const fragment = document.createDocumentFragment();
      let replaced = false;

      while ((match = re.exec(original))) {
        const parsed = parseRef(match);
        if (!parsed) continue;
        replaced = true;
        if (match.index > lastIndex) {
          fragment.appendChild(document.createTextNode(original.slice(lastIndex, match.index)));
        }
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'scripture-ref';
        btn.textContent = match[0];
        btn.dataset.bookSlug = parsed.bookSlug;
        btn.dataset.bookDisplay = parsed.bookDisplay;
        btn.dataset.chapter = String(parsed.chapter);
        btn.dataset.verseStart = String(parsed.verseStart);
        btn.dataset.verseEnd = String(parsed.verseEnd);
        btn.dataset.displayRef = parsed.displayRef;
        btn.setAttribute('aria-haspopup', 'dialog');
        fragment.appendChild(btn);
        lastIndex = match.index + match[0].length;
      }

      if (replaced) {
        if (lastIndex < original.length) {
          fragment.appendChild(document.createTextNode(original.slice(lastIndex)));
        }
        textNode.parentNode?.replaceChild(fragment, textNode);
      }
    }
  }, [containerSelector]);

  // ── Event delegation for hover + click + keyboard ──
  const clearHideTimer = () => {
    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };

  const showForButton = useCallback((btn: HTMLButtonElement) => {
    clearHideTimer();
    const bookSlug = btn.dataset.bookSlug!;
    const bookDisplay = btn.dataset.bookDisplay!;
    const chapter = parseInt(btn.dataset.chapter!, 10);
    const verseStart = parseInt(btn.dataset.verseStart!, 10);
    const verseEnd = parseInt(btn.dataset.verseEnd!, 10);
    const displayRef = btn.dataset.displayRef!;
    const ref: ParsedRef = { rawText: btn.textContent || '', bookSlug, bookDisplay, chapter, verseStart, verseEnd, displayRef };
    setPopover({ ref, anchor: btn.getBoundingClientRect() });
  }, []);

  const scheduleHide = () => {
    clearHideTimer();
    hideTimer.current = window.setTimeout(() => setPopover(null), 150);
  };

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const onOver = (e: Event) => {
      const t = (e.target as HTMLElement).closest('.scripture-ref') as HTMLButtonElement | null;
      if (t) showForButton(t);
    };
    const onOut = (e: Event) => {
      const t = (e.target as HTMLElement).closest('.scripture-ref');
      if (t) scheduleHide();
    };
    const onClick = (e: Event) => {
      const t = (e.target as HTMLElement).closest('.scripture-ref') as HTMLButtonElement | null;
      if (t) {
        e.preventDefault();
        showForButton(t);
      }
    };

    container.addEventListener('mouseover', onOver);
    container.addEventListener('mouseout', onOut);
    container.addEventListener('click', onClick);
    return () => {
      container.removeEventListener('mouseover', onOver);
      container.removeEventListener('mouseout', onOut);
      container.removeEventListener('click', onClick);
    };
  }, [containerSelector, showForButton]);

  // ── Fetch verse when popover opens or translation changes ──
  useEffect(() => {
    if (!popover) {
      setVerseText(null);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setVerseText(null);
    const { ref } = popover;
    fetchVerses(ref.bookSlug, ref.chapter, ref.verseStart, ref.verseEnd, currentTranslation)
      .then((verses) => {
        if (cancelled) return;
        setVerseText(verses.length ? verses.join(' ') : '');
        setLoading(false);
      })
      .catch(() => {
        if (!cancelled) {
          setVerseText('');
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [popover, currentTranslation]);

  // ── Close on Escape + outside click ──
  useEffect(() => {
    if (!popover) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPopover(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [popover]);

  if (!popover) return null;

  // Positioning: above the anchor if there's room, else below
  const { anchor, ref } = popover;
  const POPOVER_MAX_WIDTH = 360;
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const preferAbove = anchor.top > 260;
  const top = preferAbove ? anchor.top - 8 : anchor.bottom + 8;
  let left = anchor.left + anchor.width / 2 - POPOVER_MAX_WIDTH / 2;
  left = Math.max(12, Math.min(vw - POPOVER_MAX_WIDTH - 12, left));
  const transform = preferAbove ? 'translateY(-100%)' : 'translateY(0)';

  return (
    <div
      role="dialog"
      aria-label={`Scripture popover for ${ref.displayRef}`}
      className="scripture-popover"
      style={{ top, left, transform, maxWidth: POPOVER_MAX_WIDTH }}
      onMouseEnter={clearHideTimer}
      onMouseLeave={scheduleHide}
    >
      <div className="scripture-popover-head">
        <div>
          <p className="scripture-popover-ref">{ref.displayRef}</p>
          <p className="scripture-popover-trans">{currentTranslation.toUpperCase()}</p>
        </div>
        <button
          type="button"
          className="scripture-popover-close"
          onClick={() => setPopover(null)}
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="scripture-popover-body">
        {loading && <p className="scripture-popover-loading">Loading…</p>}
        {!loading && verseText === '' && (
          <p className="scripture-popover-empty">
            Not available in {currentTranslation.toUpperCase()}. Try another translation.
          </p>
        )}
        {!loading && verseText && <p className="scripture-popover-text">{verseText}</p>}
      </div>
      <div className="scripture-popover-foot">
        <Link
          href={`/bible/${ref.bookSlug}/${ref.chapter}`}
          className="scripture-popover-link"
          onClick={() => setPopover(null)}
        >
          Open full chapter
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
