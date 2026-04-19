'use client';

import { useEffect, useRef, useState } from 'react';

export interface SectionMarker {
  id: string;
  label: string;
  element: HTMLElement;
  percentTop: number; // 0..1 position within the container
}

export interface ProgressRecord {
  scrollPct: number;
  lastSectionId: string | null;
  lastReadAt: string;
  sectionIdsVisited: string[];
  completed: boolean;
}

export interface ProgressIndexEntry {
  lastReadAt: string;
  completed: boolean;
  scrollPct: number;
  lastSectionId: string | null;
  visitedCount: number;
  totalSections: number;
  chapterName: string;
  bookSlug: string;
  chapter: number;
}

export type ProgressIndex = Record<string, ProgressIndexEntry>;

const INDEX_KEY = 'loc-progress-index';

function safeRead<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    if (!v) return fallback;
    return JSON.parse(v) as T;
  } catch {
    return fallback;
  }
}
function safeWrite(key: string, v: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(v));
  } catch {}
}

export function loadProgressIndex(): ProgressIndex {
  if (typeof window === 'undefined') return {};
  return safeRead<ProgressIndex>(INDEX_KEY, {});
}

export function getChapterProgress(chapterKey: string): ProgressRecord | null {
  if (typeof window === 'undefined') return null;
  return safeRead<ProgressRecord | null>(`loc-progress:${chapterKey}`, null);
}

/**
 * Attaches to a study container (`.rich-study`) and tracks the reader's
 * scroll position, current section, and which sections they've passed. On a
 * throttled save it persists:
 *   loc-progress:<chapterKey>   → full record
 *   loc-progress-index          → cross-chapter map used by the dashboard
 */
export function useReadingProgress({
  chapterKey,
  chapterName,
  bookSlug,
  chapter,
  containerSelector = '.rich-study',
}: {
  chapterKey: string;             // e.g. "genesis/1"
  chapterName: string;            // e.g. "Genesis 1"
  bookSlug: string;
  chapter: number;
  containerSelector?: string;
}) {
  const [sections, setSections] = useState<SectionMarker[]>([]);
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);
  const [scrollPct, setScrollPct] = useState(0);
  const [record, setRecord] = useState<ProgressRecord | null>(null);
  const [ready, setReady] = useState(false);
  const visitedRef = useRef<Set<string>>(new Set());
  const saveTimer = useRef<number | null>(null);

  // Build section markers once the DOM is present
  useEffect(() => {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const headers = Array.from(container.querySelectorAll<HTMLElement>('h2.section'));
    const totalHeight = container.scrollHeight || 1;

    const marks: SectionMarker[] = headers.map((h, i) => {
      let id = h.id;
      if (!id) {
        const ref = h.querySelector<HTMLElement>('.ref')?.textContent?.trim() || '';
        const rest = (h.textContent || '')
          .replace(ref, '')
          .trim();
        const label = ref ? `${ref} · ${rest}`.replace(/\s·\s$/, '') : rest || `Section ${i + 1}`;
        id = 'sect-' + label
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '') || `sect-${i}`;
        h.id = id;
      }
      const label = (h.textContent || '').trim().replace(/\s+/g, ' ');
      return {
        id,
        label,
        element: h,
        percentTop: h.offsetTop / totalHeight,
      };
    });

    setSections(marks);
    setRecord(getChapterProgress(chapterKey));
    const saved = getChapterProgress(chapterKey);
    if (saved?.sectionIdsVisited) {
      visitedRef.current = new Set(saved.sectionIdsVisited);
    }
    setReady(true);
  }, [chapterKey, containerSelector]);

  // Scroll tracking
  useEffect(() => {
    if (!sections.length) return;
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const tick = () => {
      const vpH = window.innerHeight;
      const rect = container.getBoundingClientRect();
      const total = rect.height || 1;
      // How far we've read through the container: 0 when the container is
      // still fully below the fold, 1 when we've scrolled past its bottom.
      const read = Math.min(total, Math.max(0, vpH - rect.top - vpH * 0.35));
      const pct = Math.max(0, Math.min(1, read / total));
      setScrollPct(pct);

      // Current section: the last whose top is above 1/3 of the viewport
      const threshold = vpH * 0.35;
      let current: SectionMarker | null = null;
      for (const s of sections) {
        const top = s.element.getBoundingClientRect().top;
        if (top < threshold) current = s;
        else break;
      }
      const id = current?.id ?? null;
      setCurrentSectionId(id);
      if (id) visitedRef.current.add(id);

      // Debounced save
      if (saveTimer.current) window.clearTimeout(saveTimer.current);
      saveTimer.current = window.setTimeout(() => {
        const next: ProgressRecord = {
          scrollPct: pct,
          lastSectionId: id,
          lastReadAt: new Date().toISOString(),
          sectionIdsVisited: Array.from(visitedRef.current),
          completed: pct > 0.95,
        };
        safeWrite(`loc-progress:${chapterKey}`, next);
        const idx = loadProgressIndex();
        idx[chapterKey] = {
          lastReadAt: next.lastReadAt,
          completed: next.completed,
          scrollPct: pct,
          lastSectionId: id,
          visitedCount: visitedRef.current.size,
          totalSections: sections.length,
          chapterName,
          bookSlug,
          chapter,
        };
        safeWrite(INDEX_KEY, idx);
        setRecord(next);
      }, 450);
    };

    tick();
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        tick();
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (saveTimer.current) window.clearTimeout(saveTimer.current);
    };
  }, [sections, chapterKey, chapterName, bookSlug, chapter, containerSelector]);

  return { sections, currentSectionId, scrollPct, record, ready };
}

/** How many unique days in a row has the reader studied? */
export function computeStreak(index: ProgressIndex): number {
  const days = new Set<string>();
  for (const entry of Object.values(index)) {
    days.add(entry.lastReadAt.slice(0, 10));
  }
  const sorted = Array.from(days).sort().reverse();
  if (!sorted.length) return 0;
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400_000).toISOString().slice(0, 10);
  if (sorted[0] !== today && sorted[0] !== yesterday) return 0;
  let streak = 1;
  for (let i = 1; i < sorted.length; i++) {
    const a = new Date(sorted[i - 1] + 'T00:00:00');
    const b = new Date(sorted[i] + 'T00:00:00');
    const diff = Math.round((a.getTime() - b.getTime()) / 86400_000);
    if (diff === 1) streak++;
    else break;
  }
  return streak;
}
