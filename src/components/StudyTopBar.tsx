'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import {
  useReadingPrefs,
  type FontSize,
  type Theme,
  type HidableSection,
} from '@/lib/ReadingPrefsContext';

interface StudyTopBarProps {
  bookSlug: string;
  bookName: string;
  chapter: number;
  /** Small label above the title — usually "Old Testament" or "New Testament". */
  testamentLabel: string;
  /** Slot for chapter-level rows like "Read the chapter" + "Share". */
  moreActions?: ReactNode;
}

const FONT_OPTIONS: { value: FontSize; label: string }[] = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Default' },
  { value: 'large', label: 'Large' },
  { value: 'xlarge', label: 'Extra Large' },
];

const THEME_OPTIONS: { value: Theme; label: string }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

const READING_MODE_OPTIONS = [
  { value: 'verse' as const, label: 'Verse by verse' },
  { value: 'paragraph' as const, label: 'Paragraph' },
];

const SECTION_OPTIONS: { id: HidableSection; label: string }[] = [
  { id: 'reflection', label: 'Ideas for Reflection' },
  { id: 'carry', label: 'Thoughts to Sit With' },
];

/**
 * Clean LDS-style top bar for study chapters:
 *
 *   [←]      Genesis 1               [🎧] [⋯]
 *           Old Testament
 *
 * Left: icon-only round back button → /study/{book} (one level up).
 * Right: headphones button ([data-action="play-audio"], picked up by
 * StudyAudioPlayer's document-level click handler) and a single
 * more-options dropdown that holds every reading preference plus
 * chapter-level actions (Read the chapter / Share). There is no
 * separate gear button — the ⋯ menu is the settings.
 */
export default function StudyTopBar({
  bookSlug,
  bookName,
  chapter,
  testamentLabel,
  moreActions,
}: StudyTopBarProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    readingMode,
    setReadingMode,
    hiddenSections,
    toggleSection,
  } = useReadingPrefs();

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="study-topbar">
      <Link
        href={`/study/${bookSlug}`}
        aria-label={`Back to ${bookName}`}
        className="study-topbar__icon-btn"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
        </svg>
      </Link>

      <div className="study-topbar__title-block">
        <p className="study-topbar__title">{bookName} {chapter}</p>
        <p className="study-topbar__subtitle">{testamentLabel}</p>
      </div>

      <div ref={ref} className="study-topbar__actions">
        <button
          type="button"
          data-action="play-audio"
          aria-label="Listen to this study"
          className="study-topbar__icon-btn"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 14a9 9 0 0118 0" />
            <rect x="3" y="14" width="4" height="6" rx="1.5" stroke="currentColor" />
            <rect x="17" y="14" width="4" height="6" rx="1.5" stroke="currentColor" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Chapter options"
          aria-expanded={open}
          className="study-topbar__icon-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </button>

        {open && (
          <div className="study-topbar__menu" role="dialog" aria-label="Chapter options">
            <Group label="Theme">
              <Segmented>
                {THEME_OPTIONS.map((t) => (
                  <SegmentButton
                    key={t.value}
                    active={theme === t.value}
                    onClick={() => setTheme(t.value)}
                  >
                    {t.label}
                  </SegmentButton>
                ))}
              </Segmented>
            </Group>

            <Group label="Font size">
              <Segmented>
                {FONT_OPTIONS.map((f) => (
                  <SegmentButton
                    key={f.value}
                    active={fontSize === f.value}
                    onClick={() => setFontSize(f.value)}
                  >
                    {f.label}
                  </SegmentButton>
                ))}
              </Segmented>
            </Group>

            <Group label="Reading mode">
              <Segmented>
                {READING_MODE_OPTIONS.map((m) => (
                  <SegmentButton
                    key={m.value}
                    active={readingMode === m.value}
                    onClick={() => setReadingMode(m.value)}
                  >
                    {m.label}
                  </SegmentButton>
                ))}
              </Segmented>
            </Group>

            <Group label="Study sections">
              <ul className="study-topbar__toggles">
                {SECTION_OPTIONS.map((s) => {
                  const visible = !hiddenSections.has(s.id);
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => toggleSection(s.id)}
                        aria-pressed={visible}
                        className="study-topbar__toggle"
                      >
                        <span>{s.label}</span>
                        <span className={`study-topbar__switch ${visible ? 'is-on' : ''}`}>
                          <span className="study-topbar__switch-knob" />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Group>

            {moreActions && (
              <div className="study-topbar__menu-rows" onClick={() => setOpen(false)}>
                {moreActions}
              </div>
            )}

            <div className="study-topbar__menu-foot">
              <Link
                href="/settings"
                onClick={() => setOpen(false)}
                className="study-topbar__menu-foot-link"
              >
                All settings →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="study-topbar__group">
      <p className="study-topbar__group-label">{label}</p>
      {children}
    </div>
  );
}

function Segmented({ children }: { children: ReactNode }) {
  return <div className="study-topbar__segmented">{children}</div>;
}

function SegmentButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`study-topbar__segment ${active ? 'is-active' : ''}`}
    >
      {children}
    </button>
  );
}
