'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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

const FONT_OPTIONS: { value: FontSize; tt: string }[] = [
  // Each swatch shows "Tt" rendered at the actual size that option produces.
  { value: 'small',  tt: '13px' },
  { value: 'medium', tt: '16px' },
  { value: 'large',  tt: '20px' },
  { value: 'xlarge', tt: '24px' },
];

const SECTION_OPTIONS: { id: HidableSection; label: string; icon: ReactNode }[] = [
  {
    id: 'reflection',
    label: 'Ideas for Reflection',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a7 7 0 00-4 12.7V18h8v-2.3A7 7 0 0012 3z" />
        <path d="M10 21h4" />
      </svg>
    ),
  },
  {
    id: 'carry',
    label: 'Thoughts to Sit With',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
];

/**
 * Clean LDS-style top bar for study chapters:
 *
 *   [←]      Genesis 1               [🎧] [⋯]
 *           Old Testament
 *
 * Left: icon-only round back button → /study/{book} (one level up).
 * Right: headphones (data-action="play-audio", picked up by StudyAudioPlayer)
 * and a single more-options dropdown that holds every reading preference plus
 * chapter-level actions.
 *
 * The dropdown panel is icon-driven — group icons on every row, tile cards
 * for View/Theme, four "Tt" swatches sized to their actual option for font,
 * and toggle rows with leading icons for the section visibility list.
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
  const pathname = usePathname();
  const router = useRouter();
  const {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    hiddenSections,
    toggleSection,
  } = useReadingPrefs();

  // /study/[book]/[chapter] → "Chapter" tile navigates to the plain reader.
  const studyMatch = pathname?.match(/^\/study\/([^/]+)\/(\d+)/);
  const plainScriptureHref = studyMatch
    ? `/bible/${studyMatch[1]}/${studyMatch[2]}`
    : null;

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
            {plainScriptureHref && (
              <Group icon={<EyeIcon />} label="View">
                <TileGrid>
                  <Tile
                    active={true}
                    onClick={() => setOpen(false)}
                    icon={<BookOpenIcon />}
                    label="Study"
                  />
                  <Tile
                    active={false}
                    onClick={() => {
                      setOpen(false);
                      router.push(plainScriptureHref);
                    }}
                    icon={<ScrollIcon />}
                    label="Chapter"
                  />
                </TileGrid>
              </Group>
            )}

            <Group icon={<PaintIcon />} label="Theme">
              <TileGrid>
                <Tile
                  active={theme === 'light'}
                  onClick={() => setTheme('light' as Theme)}
                  icon={<SunIcon />}
                  label="Light"
                />
                <Tile
                  active={theme === 'dark'}
                  onClick={() => setTheme('dark' as Theme)}
                  icon={<MoonIcon />}
                  label="Dark"
                />
              </TileGrid>
            </Group>

            <Group icon={<TypeIcon />} label="Font size">
              <div className="study-topbar__tt-row" role="group" aria-label="Font size">
                {FONT_OPTIONS.map((f) => {
                  const active = fontSize === f.value;
                  return (
                    <button
                      key={f.value}
                      type="button"
                      onClick={() => setFontSize(f.value)}
                      aria-pressed={active}
                      aria-label={`Font size ${f.value}`}
                      className={`study-topbar__tt-btn ${active ? 'is-active' : ''}`}
                    >
                      <span
                        className="study-topbar__tt"
                        style={{ fontSize: f.tt }}
                        aria-hidden="true"
                      >
                        Tt
                      </span>
                    </button>
                  );
                })}
              </div>
            </Group>

            <Group icon={<LayersIcon />} label="Sections">
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
                        <span className="study-topbar__toggle-icon" aria-hidden="true">
                          {s.icon}
                        </span>
                        <span className="study-topbar__toggle-label">{s.label}</span>
                        <span className={`study-topbar__switch ${visible ? 'is-on' : ''}`} aria-hidden="true">
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
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Group + Tile primitives ───────────────────────────────────────── */

function Group({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="study-topbar__group">
      <div className="study-topbar__group-head">
        <span className="study-topbar__group-icon" aria-hidden="true">{icon}</span>
        <span className="study-topbar__group-label">{label}</span>
      </div>
      {children}
    </div>
  );
}

function TileGrid({ children }: { children: ReactNode }) {
  return <div className="study-topbar__tile-grid">{children}</div>;
}

function Tile({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`study-topbar__tile ${active ? 'is-active' : ''}`}
    >
      <span className="study-topbar__tile-icon" aria-hidden="true">{icon}</span>
      <span className="study-topbar__tile-label">{label}</span>
    </button>
  );
}

/* ─── Icons ─────────────────────────────────────────────────────────── */

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function BookOpenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4.5h7a3 3 0 013 3v12a3 3 0 00-3-3H2v-12z" />
      <path d="M22 4.5h-7a3 3 0 00-3 3v12a3 3 0 013-3h7v-12z" />
    </svg>
  );
}

function ScrollIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h11a3 3 0 013 3v11a2 2 0 002 2H8a3 3 0 01-3-3V4z" />
      <path d="M5 4a3 3 0 00-3 3v11a2 2 0 002 2" />
      <path d="M9 9h7M9 13h7" />
    </svg>
  );
}

function PaintIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 3h14v6H5z" />
      <path d="M9 9v3h6V9" />
      <path d="M12 12v3" />
      <path d="M9 15h6v6H9z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function TypeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7V5h16v2" />
      <path d="M9 19h6" />
      <path d="M12 5v14" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}
