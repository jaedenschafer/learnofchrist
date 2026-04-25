'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { fetchVersesClient, type Verse } from '@/lib/supabase';
import { useTranslation } from '@/lib/TranslationContext';
import './HighlightController.css';

// ─── Highlighter palette ───
// Three primary swatches show in the popup; the rest tuck into a "more" tray.
export const HIGHLIGHT_COLORS = [
  { id: 'yellow', label: 'Yellow', hex: '#FFE066' },
  { id: 'green',  label: 'Green',  hex: '#B5EFB0' },
  { id: 'cyan',   label: 'Cyan',   hex: '#A6E2EE' },
  { id: 'pink',   label: 'Pink',   hex: '#FFC2D6' },
  { id: 'orange', label: 'Orange', hex: '#FFC891' },
  { id: 'lavender', label: 'Lavender', hex: '#D8C8F2' },
] as const;

type ColorId = (typeof HIGHLIGHT_COLORS)[number]['id'];

interface ActiveSelection {
  text: string;
  rect: DOMRect;
  // Cached so we can re-apply after popup interaction blurs the selection.
  range: Range;
  // The verse numbers the selection spans inside the nearest scripture block,
  // and the chapter that block sits in (Day 7 lives in Genesis 2).
  scriptureChapter: number | null;
  verseNumbers: number[];
}

interface CompareRow {
  abbr: string;
  name: string;
  text: string;
}

interface HighlightControllerProps {
  /** CSS selectors of containers within which selection triggers the popup. */
  containerSelector?: string;
  /** Book slug — used for the Compare action. */
  bookSlug: string;
  /** Default chapter for the current page — Compare falls back to this when the
   *  selection is outside any scripture block. */
  chapter: number;
  /** Stable per-page key used for localStorage persistence. */
  storageKey?: string;
}

interface StoredHighlight {
  id: string;
  text: string;
  color: ColorId;
  note?: string;
  createdAt: number;
}

const MIN_SELECTION_CHARS = 2;

function getStorageKey(bookSlug: string, chapter: number, storageKey?: string) {
  return storageKey ?? `loc-highlights:${bookSlug}/${chapter}`;
}

function loadHighlights(key: string): StoredHighlight[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHighlights(key: string, highlights: StoredHighlight[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(highlights));
  } catch {
    // ignore quota errors silently
  }
}

export default function HighlightController({
  containerSelector = '.rich-study, .verse-display',
  bookSlug,
  chapter,
  storageKey,
}: HighlightControllerProps) {
  const [active, setActive] = useState<ActiveSelection | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [compareOpen, setCompareOpen] = useState(false);
  const [compareLoading, setCompareLoading] = useState(false);
  const [compareRows, setCompareRows] = useState<CompareRow[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  // Edit-an-existing-highlight state — set when the user taps a mark.user-hl.
  const [editing, setEditing] = useState<{
    id: string;
    el: HTMLElement;
    rect: DOMRect;
    text: string;
    color: ColorId;
    note: string;
  } | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const editRef = useRef<HTMLDivElement>(null);
  const { availableTranslations } = useTranslation();
  const lsKey = getStorageKey(bookSlug, chapter, storageKey);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ─── Re-apply persisted highlights when the page mounts ──────────────────
  useEffect(() => {
    if (!mounted) return;
    const stored = loadHighlights(lsKey);
    if (stored.length === 0) return;
    const containers = Array.from(
      document.querySelectorAll<HTMLElement>(containerSelector),
    );
    if (containers.length === 0) return;
    // Naive but robust restoration: walk the text content and wrap matching
    // substrings. Good enough for v1; longer term we'll move to character
    // offsets keyed off the verse's normalized text so multiple identical
    // phrases don't collide.
    for (const h of stored) {
      reapplyHighlight(containers, h);
    }
  }, [mounted, lsKey, containerSelector]);

  // ─── Watch for text selections inside the chapter content ───────────────
  // We deliberately do NOT show the popup on every `selectionchange` — that
  // event fires dozens of times per second while the user is dragging, and
  // setActive on every fire causes the popup to flicker / strobe.
  // Instead we wait for `mouseup` / `touchend` / `keyup` (selection finished)
  // to compute and show, and only listen to `selectionchange` to HIDE the
  // popup when the user clicks somewhere else and collapses the selection.
  useEffect(() => {
    const showFromCurrentSelection = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || sel.rangeCount === 0) return;
      const text = sel.toString().trim();
      if (text.length < MIN_SELECTION_CHARS) return;
      const range = sel.getRangeAt(0);

      const containers = Array.from(
        document.querySelectorAll<HTMLElement>(containerSelector),
      );
      const inside = containers.some((c) => c.contains(range.commonAncestorContainer));
      if (!inside) return;

      // Skip selections that started inside the popup or one of our modals.
      if (popupRef.current && popupRef.current.contains(range.commonAncestorContainer)) {
        return;
      }

      const rect = range.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) return;

      const scriptureInfo = scriptureContextFromRange(range);
      setActive({
        text,
        rect,
        range: range.cloneRange(),
        scriptureChapter: scriptureInfo.chapter,
        verseNumbers: scriptureInfo.verseNumbers,
      });
    };

    const onPointerUp = (e: MouseEvent | TouchEvent | KeyboardEvent) => {
      const tgt = e.target as Element | null;
      if (tgt && popupRef.current && popupRef.current.contains(tgt)) return;
      if (tgt && tgt.closest && tgt.closest('.hi-modal')) return;
      // Wait one tick so the browser's selection state reflects the release.
      setTimeout(showFromCurrentSelection, 0);
    };

    const onSelectionChange = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) {
        // Collapsed selection — clear the popup. No setActive when expanding,
        // that path is handled exclusively by pointer/touch/key up.
        setActive(null);
      }
    };

    document.addEventListener('mouseup', onPointerUp);
    document.addEventListener('touchend', onPointerUp);
    document.addEventListener('keyup', onPointerUp);
    document.addEventListener('selectionchange', onSelectionChange);
    return () => {
      document.removeEventListener('mouseup', onPointerUp);
      document.removeEventListener('touchend', onPointerUp);
      document.removeEventListener('keyup', onPointerUp);
      document.removeEventListener('selectionchange', onSelectionChange);
    };
  }, [containerSelector]);

  // ─── Click an existing highlight → open the edit panel ──────────────────
  // We listen at document level so users can tap the mark anywhere; we skip
  // the click when the user is actively selecting text or interacting with
  // the popup/edit panel themselves.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const tgt = e.target as Element | null;
      if (!tgt) return;
      // Don't intercept clicks inside the popup or edit panel.
      if (popupRef.current && popupRef.current.contains(tgt)) return;
      if (editRef.current && editRef.current.contains(tgt)) return;
      if (tgt.closest && tgt.closest('.hi-modal')) return;
      const hl = tgt.closest?.('mark.user-hl') as HTMLElement | null;
      if (!hl) return;
      // If the user has an active text selection, let the normal flow run.
      const sel = window.getSelection();
      if (sel && !sel.isCollapsed && (sel.toString() || '').trim().length > 0) return;
      const id = hl.dataset.highlightId;
      if (!id) return;
      const stored = loadHighlights(lsKey).find((h) => h.id === id);
      if (!stored) return;
      e.preventDefault();
      e.stopPropagation();
      setEditing({
        id,
        el: hl,
        rect: hl.getBoundingClientRect(),
        text: stored.text,
        color: stored.color,
        note: stored.note ?? '',
      });
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [lsKey]);

  const clearAll = useCallback(() => {
    setActive(null);
    setMoreOpen(false);
    setNoteOpen(false);
    setNoteText('');
    setCompareOpen(false);
    setCompareRows([]);
    setEditing(null);
    window.getSelection()?.removeAllRanges();
  }, []);

  // ─── Edit panel: persist note + color, or delete the highlight ──────────
  const handleEditSave = (patch: { color?: ColorId; note?: string }) => {
    if (!editing) return;
    const stored = loadHighlights(lsKey);
    const idx = stored.findIndex((h) => h.id === editing.id);
    if (idx === -1) {
      setEditing(null);
      return;
    }
    const next = { ...stored[idx], ...patch };
    if (patch.note !== undefined) {
      next.note = patch.note.trim() || undefined;
    }
    stored[idx] = next;
    saveHighlights(lsKey, stored);

    // Patch the DOM mark in place so the user sees the change immediately
    // without remounting the chapter.
    if (patch.color) {
      const palette = HIGHLIGHT_COLORS.find((c) => c.id === patch.color);
      if (palette) {
        editing.el.style.backgroundColor = palette.hex;
        editing.el.dataset.color = patch.color;
      }
    }
    if (patch.note !== undefined) {
      if (next.note) {
        editing.el.dataset.hasNote = '1';
      } else {
        delete editing.el.dataset.hasNote;
      }
    }
    setEditing(null);
    showToast('Saved');
  };

  const handleEditDelete = () => {
    if (!editing) return;
    const stored = loadHighlights(lsKey).filter((h) => h.id !== editing.id);
    saveHighlights(lsKey, stored);
    // Unwrap the mark — replace it with its child nodes — so the underlying
    // text stays exactly where it was.
    const parent = editing.el.parentNode;
    if (parent) {
      while (editing.el.firstChild) {
        parent.insertBefore(editing.el.firstChild, editing.el);
      }
      parent.removeChild(editing.el);
    }
    setEditing(null);
    showToast('Removed');
  };

  // ─── Dismiss popup on outside click / Escape ────────────────────────────
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearAll();
      }
    };
    const onPointer = (e: MouseEvent) => {
      const tgt = e.target as Element | null;
      if (!tgt) return;
      if (popupRef.current && popupRef.current.contains(tgt)) return;
      if (tgt.closest('.hi-modal')) return;
      // Outside both popup and any modal → close after a tick so click handlers
      // on the popup itself still get a chance to fire first.
      setTimeout(() => {
        const sel = window.getSelection();
        if (!sel || sel.isCollapsed) clearAll();
      }, 0);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
    };
  }, [active, clearAll]);

  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 1600);
  };

  // ─── Action: highlight the selection in the chosen color ────────────────
  // Optionally attaches a note in the same call so the storage record + DOM
  // mark are written exactly once (used by handleNoteSave).
  const handleHighlight = (color: ColorId, opts?: { note?: string }) => {
    if (!active) return;
    const palette = HIGHLIGHT_COLORS.find((c) => c.id === color)!;
    const id = cryptoId();
    const note = opts?.note?.trim() || undefined;
    try {
      const span = document.createElement('mark');
      span.className = 'user-hl';
      span.dataset.color = color;
      span.dataset.highlightId = id;
      if (note) span.dataset.hasNote = '1';
      span.style.backgroundColor = palette.hex;
      // surroundContents fails on selections that cross element boundaries; in
      // that case we extract+wrap which is more forgiving.
      try {
        active.range.surroundContents(span);
      } catch {
        const frag = active.range.extractContents();
        span.appendChild(frag);
        active.range.insertNode(span);
      }
      const stored = loadHighlights(lsKey);
      stored.push({
        id,
        text: active.text,
        color,
        note,
        createdAt: Date.now(),
      });
      saveHighlights(lsKey, stored);
    } catch {
      showToast('Could not highlight that selection');
    }
    clearAll();
  };

  // ─── Action: copy selected text ─────────────────────────────────────────
  const handleCopy = async () => {
    if (!active) return;
    try {
      await navigator.clipboard.writeText(active.text);
      showToast('Copied');
    } catch {
      showToast('Copy failed');
    }
    clearAll();
  };

  // ─── Action: open Note input ────────────────────────────────────────────
  const handleNoteOpen = () => {
    if (!active) return;
    setNoteOpen(true);
  };

  const handleNoteSave = () => {
    if (!active) return;
    const trimmed = noteText.trim();
    if (!trimmed) {
      setNoteOpen(false);
      return;
    }
    // Write the highlight + note in a single call so we don't double-store.
    handleHighlight('yellow', { note: trimmed });
    showToast('Note saved');
  };

  // ─── Action: compare across translations ────────────────────────────────
  const handleCompareOpen = async () => {
    if (!active) return;
    setCompareOpen(true);
    setCompareLoading(true);
    setCompareRows([]);
    try {
      const targetChapter = active.scriptureChapter ?? chapter;
      const targets = (availableTranslations.length > 0
        ? availableTranslations
        : [
            { abbreviation: 'kjv', name: 'King James Version' },
            { abbreviation: 'asv', name: 'American Standard Version' },
            { abbreviation: 'web', name: 'World English Bible' },
          ]
      ).slice(0, 4);

      const out: CompareRow[] = [];
      for (const t of targets) {
        const verses: Verse[] = await fetchVersesClient(
          bookSlug,
          targetChapter,
          t.abbreviation,
        );
        if (active.verseNumbers.length > 0) {
          const matched = verses.filter((v) => active.verseNumbers.includes(v.verse_number));
          if (matched.length === 0) continue;
          out.push({
            abbr: t.abbreviation.toUpperCase(),
            name: t.name,
            text: matched.map((v) => `${v.verse_number} ${cleanText(v.text)}`).join(' '),
          });
        } else {
          // Fallback: show the chapter's first verse so the user at least sees
          // that the translation loaded; rare path (selection outside scripture).
          const v = verses[0];
          if (v) {
            out.push({
              abbr: t.abbreviation.toUpperCase(),
              name: t.name,
              text: `${v.verse_number} ${cleanText(v.text)}`,
            });
          }
        }
      }
      setCompareRows(out);
    } catch {
      setCompareRows([]);
    } finally {
      setCompareLoading(false);
    }
  };

  if (!mounted) return null;

  // ─── Render ───────────────────────────────────────────────────────────────
  return createPortal(
    <>
      {active && !noteOpen && !compareOpen && (
        <div
          ref={popupRef}
          className="hi-popup"
          style={popupPosition(active.rect)}
          onMouseDown={(e) => e.preventDefault() /* keep selection alive */}
        >
          <div className="hi-popup__group hi-popup__group--colors">
            {HIGHLIGHT_COLORS.slice(0, 3).map((c) => (
              <button
                key={c.id}
                type="button"
                className="hi-popup__color"
                style={{ backgroundColor: c.hex }}
                aria-label={`Highlight ${c.label}`}
                onClick={() => handleHighlight(c.id)}
              />
            ))}
            <button
              type="button"
              className={`hi-popup__more ${moreOpen ? 'is-open' : ''}`}
              aria-label="More colors"
              onClick={() => setMoreOpen((v) => !v)}
            >
              <span className="hi-popup__more-dot" style={{ backgroundColor: '#FFC891' }} />
              <span className="hi-popup__more-dot" style={{ backgroundColor: '#FFC2D6' }} />
              <span className="hi-popup__more-dot" style={{ backgroundColor: '#A6E2EE' }} />
            </button>
          </div>

          <div className="hi-popup__group hi-popup__group--actions">
            <button type="button" className="hi-popup__action" onClick={handleNoteOpen}>
              <NoteIcon />
              <span>Note</span>
            </button>
            {/* Compare only makes sense on a verse selection — hide it when
                the selection is in commentary or any non-scripture body. */}
            {active.verseNumbers.length > 0 && (
              <button type="button" className="hi-popup__action" onClick={handleCompareOpen}>
                <CompareIcon />
                <span>Compare</span>
              </button>
            )}
            <button type="button" className="hi-popup__action" onClick={handleCopy}>
              <CopyIcon />
              <span>Copy</span>
            </button>
          </div>

          {moreOpen && (
            <div className="hi-popup__more-tray">
              {HIGHLIGHT_COLORS.slice(3).map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className="hi-popup__color"
                  style={{ backgroundColor: c.hex }}
                  aria-label={`Highlight ${c.label}`}
                  onClick={() => handleHighlight(c.id)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {editing && (
        <EditPanel
          editing={editing}
          onClose={() => setEditing(null)}
          onSave={handleEditSave}
          onDelete={handleEditDelete}
          ref={editRef}
        />
      )}

      {noteOpen && active && (
        <div className="hi-modal" role="dialog" aria-label="Add note" onMouseDown={(e) => e.stopPropagation()}>
          <div className="hi-modal__backdrop" onClick={clearAll} />
          <div className="hi-modal__panel">
            <div className="hi-modal__head">
              <h3 className="hi-modal__title">Add note</h3>
              <button type="button" className="hi-modal__close" onClick={clearAll} aria-label="Close">×</button>
            </div>
            <blockquote className="hi-modal__quote">
              &ldquo;{active.text}&rdquo;
            </blockquote>
            <textarea
              autoFocus
              className="hi-modal__textarea"
              placeholder="What stood out? What does this mean to you?"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              rows={5}
            />
            <div className="hi-modal__actions">
              <button type="button" className="hi-modal__btn hi-modal__btn--ghost" onClick={clearAll}>Cancel</button>
              <button type="button" className="hi-modal__btn hi-modal__btn--primary" onClick={handleNoteSave}>
                Save note
              </button>
            </div>
          </div>
        </div>
      )}

      {compareOpen && active && (
        <div className="hi-modal" role="dialog" aria-label="Compare translations" onMouseDown={(e) => e.stopPropagation()}>
          <div className="hi-modal__backdrop" onClick={clearAll} />
          <div className="hi-modal__panel hi-modal__panel--wide">
            <div className="hi-modal__head">
              <h3 className="hi-modal__title">Compare translations</h3>
              <button type="button" className="hi-modal__close" onClick={clearAll} aria-label="Close">×</button>
            </div>
            <p className="hi-modal__sub">
              {active.verseNumbers.length > 0 && active.scriptureChapter
                ? `Showing verse ${active.verseNumbers.join(', ')} of chapter ${active.scriptureChapter} across translations.`
                : `Showing the surrounding passage across translations.`}
            </p>
            <blockquote className="hi-modal__quote">
              &ldquo;{active.text}&rdquo;
            </blockquote>
            {compareLoading && (
              <p className="hi-modal__loading">Loading other translations…</p>
            )}
            {!compareLoading && compareRows.length === 0 && (
              <p className="hi-modal__empty">
                No other translations are available for this passage yet.
              </p>
            )}
            <div className="hi-compare__list">
              {compareRows.map((row) => (
                <div key={row.abbr} className="hi-compare__row">
                  <div className="hi-compare__abbr">{row.abbr}</div>
                  <div>
                    <p className="hi-compare__text">{row.text}</p>
                    <p className="hi-compare__name">{row.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hi-modal__actions">
              <button type="button" className="hi-modal__btn hi-modal__btn--primary" onClick={clearAll}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="hi-toast" role="status">{toast}</div>
      )}
    </>,
    document.body,
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────

function popupPosition(rect: DOMRect): React.CSSProperties {
  // Center horizontally over selection. Place below; if too low, place above.
  const SCREEN_PADDING = 12;
  const POPUP_W_GUESS = 420;
  const POPUP_H_GUESS = 88;
  const top = rect.bottom + window.scrollY + 12;
  const left = rect.left + rect.width / 2 + window.scrollX;
  // Clamp horizontally so popup never spills off-screen.
  const halfW = POPUP_W_GUESS / 2;
  const minLeft = halfW + SCREEN_PADDING;
  const maxLeft = window.scrollX + window.innerWidth - halfW - SCREEN_PADDING;
  const clampedLeft = Math.max(minLeft, Math.min(maxLeft, left));
  // If we'd render below the viewport, flip above.
  const wouldOverflow = rect.bottom + POPUP_H_GUESS + 24 > window.innerHeight;
  const finalTop = wouldOverflow
    ? rect.top + window.scrollY - POPUP_H_GUESS - 12
    : top;
  return {
    top: `${finalTop}px`,
    left: `${clampedLeft}px`,
  };
}

function cleanText(s: string): string {
  return (s || '').replace(/<\/?FI>/gi, '').replace(/\s{2,}/g, ' ').trim();
}

function cryptoId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return (crypto as Crypto).randomUUID();
  }
  return `hl-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Inspect the range to find which scripture verse(s) it overlaps. The Genesis
 * 1 study uses `<span class="v">N</span>` markers ahead of each verse's text.
 * For `<VerseDisplay>` non-Genesis-1 chapters, individual verse numbers carry
 * `data-verse-number` on the wrapping element.
 */
function scriptureContextFromRange(range: Range): {
  chapter: number | null;
  verseNumbers: number[];
} {
  const startEl = elementFromNode(range.startContainer);
  if (!startEl) return { chapter: null, verseNumbers: [] };
  // Look for the closest scripture container we recognize.
  const scriptureBlock = startEl.closest<HTMLElement>('.scripture, [data-verse-block]');
  if (!scriptureBlock) return { chapter: null, verseNumbers: [] };

  // Chapter — derive from data-chapter or fall back to null and let the caller
  // use the page's chapter.
  const chapterAttr = scriptureBlock.getAttribute('data-chapter');
  const chapter = chapterAttr ? parseInt(chapterAttr, 10) : null;

  // Find every <span class="v"> inside the block — these mark verse starts.
  const allMarkers = Array.from(scriptureBlock.querySelectorAll<HTMLElement>('.v'));
  if (allMarkers.length === 0) return { chapter, verseNumbers: [] };

  // For each marker, see whether it falls before/inside the range.
  const verseNumbers: number[] = [];
  for (let i = 0; i < allMarkers.length; i++) {
    const marker = allMarkers[i];
    const next = allMarkers[i + 1];
    // Verse range = [marker, next or end of block]
    const verseRange = document.createRange();
    verseRange.setStartBefore(marker);
    if (next) {
      verseRange.setEndBefore(next);
    } else {
      verseRange.setEndAfter(scriptureBlock);
    }
    if (rangesIntersect(verseRange, range)) {
      const num = parseInt((marker.textContent || '').trim(), 10);
      if (!isNaN(num)) verseNumbers.push(num);
    }
    verseRange.detach?.();
  }
  return { chapter, verseNumbers };
}

function rangesIntersect(a: Range, b: Range): boolean {
  // Returns true if range `a` and `b` overlap by any amount.
  return (
    a.compareBoundaryPoints(Range.END_TO_START, b) <= 0 &&
    a.compareBoundaryPoints(Range.START_TO_END, b) >= 0
  );
}

function elementFromNode(n: Node | null): Element | null {
  if (!n) return null;
  return n.nodeType === Node.ELEMENT_NODE
    ? (n as Element)
    : (n.parentElement ?? null);
}

/**
 * Re-apply a stored highlight by walking the container's text nodes for the
 * first occurrence of the saved text and wrapping it. Naive but correct for
 * unique scripture phrases. We skip duplicates already wrapped in `.user-hl`.
 */
function reapplyHighlight(
  containers: HTMLElement[],
  hl: StoredHighlight,
) {
  const palette = HIGHLIGHT_COLORS.find((c) => c.id === hl.color);
  if (!palette) return;
  const target = hl.text;
  if (!target) return;
  for (const container of containers) {
    const walker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node: Node) {
          // Skip text already inside a user highlight.
          if (
            (node.parentElement?.closest?.('.user-hl')) ||
            (node.parentElement?.closest?.('mark.user-hl'))
          ) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      },
    );
    let node: Node | null = walker.nextNode();
    while (node) {
      const text = node.nodeValue ?? '';
      const idx = text.indexOf(target);
      if (idx !== -1) {
        const range = document.createRange();
        range.setStart(node, idx);
        range.setEnd(node, idx + target.length);
        try {
          const span = document.createElement('mark');
          span.className = 'user-hl';
          span.dataset.color = hl.color;
          span.dataset.highlightId = hl.id;
          if (hl.note && hl.note.trim()) span.dataset.hasNote = '1';
          span.style.backgroundColor = palette.hex;
          range.surroundContents(span);
        } catch {
          // selection straddled a boundary — skip silently
        }
        return; // first occurrence only
      }
      node = walker.nextNode();
    }
  }
}

// ─── Edit panel for an existing highlight ────────────────────────────
interface EditPanelProps {
  editing: {
    id: string;
    el: HTMLElement;
    rect: DOMRect;
    text: string;
    color: ColorId;
    note: string;
  };
  onClose: () => void;
  onSave: (patch: { color?: ColorId; note?: string }) => void;
  onDelete: () => void;
  ref: React.Ref<HTMLDivElement>;
}

function EditPanel({ editing, onClose, onSave, onDelete, ref }: EditPanelProps) {
  const [note, setNote] = useState(editing.note);
  const [color, setColor] = useState<ColorId>(editing.color);

  // Dismiss on outside click / Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const dirty = note !== editing.note || color !== editing.color;

  return (
    <div
      ref={ref}
      className="hi-edit"
      style={popupPosition(editing.rect)}
      role="dialog"
      aria-label="Edit highlight"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <blockquote className="hi-edit__quote">
        {`“${editing.text}”`}
      </blockquote>

      <div className="hi-edit__colors" role="group" aria-label="Highlight color">
        {HIGHLIGHT_COLORS.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`hi-edit__color ${color === c.id ? 'is-active' : ''}`}
            style={{ backgroundColor: c.hex }}
            aria-label={`Change to ${c.label}`}
            aria-pressed={color === c.id}
            onClick={() => setColor(c.id)}
          />
        ))}
      </div>

      <textarea
        className="hi-edit__textarea"
        placeholder="Add a note…"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={3}
      />

      <div className="hi-edit__actions">
        <button
          type="button"
          className="hi-edit__btn hi-edit__btn--danger"
          onClick={onDelete}
        >
          Delete
        </button>
        <div className="hi-edit__spacer" />
        <button
          type="button"
          className="hi-edit__btn hi-edit__btn--ghost"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="button"
          className="hi-edit__btn hi-edit__btn--primary"
          disabled={!dirty}
          onClick={() => onSave({ color, note })}
        >
          Save
        </button>
      </div>
    </div>
  );
}

// ─── Inline icons ────────────────────────────────────────────────────────
function NoteIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 9h6M9 13h6M9 17h4" />
    </svg>
  );
}

function CompareIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="11" height="14" rx="2" />
      <rect x="9" y="6" width="11" height="14" rx="2" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="8" y="8" width="12" height="13" rx="2" />
      <path d="M16 8V5a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2h2" />
    </svg>
  );
}
