'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  useReadingPrefs,
  type FontSize,
  type Theme,
  type HidableSection,
} from '@/lib/ReadingPrefsContext';

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

const SECTION_OPTIONS: { id: HidableSection; label: string }[] = [
  { id: 'reflection', label: 'Ideas for Reflection' },
  { id: 'carry', label: 'Thoughts to Sit With' },
];

/**
 * Popover-style settings menu. Triggered by a gear button so the reader can
 * adjust preferences without losing their scroll position. The standalone
 * /settings page is still linked from the bottom for the full experience.
 *
 * `triggerClassName` lets callers swap the button styling — the navbar uses
 * the default nav-link look, while the chapter hero passes its own pill
 * class so the gear matches the rest of the utility row.
 */
export default function SettingsMenu({
  align = 'right',
  triggerClassName,
}: {
  align?: 'left' | 'right';
  triggerClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    hiddenSections,
    toggleSection,
  } = useReadingPrefs();

  // When the user is on a study chapter page like /study/genesis/1, give them
  // a one-tap escape hatch to the plain Bible reader at /bible/genesis/1.
  // Replaces the old "Scripture only" focus-mode toggle, which only hid UI
  // chrome — sending them to the actual reader is a cleaner contract.
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
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Settings"
        aria-expanded={open}
        className={
          triggerClassName ??
          'nav-link nav-icon-link w-9 h-9 rounded-full flex items-center justify-center transition-colors active:scale-95'
        }
      >
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
      {open && (
        <div
          className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} top-full mt-2 z-[60] min-w-[280px] bg-[color:var(--color-surface)] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-[color:var(--color-separator)] overflow-hidden animate-fade-in`}
        >
          <div className="px-4 py-3 border-b border-[color:var(--color-separator)]">
            <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-[color:var(--color-tertiary-label)]">
              Settings
            </p>
          </div>

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

          {plainScriptureHref && (
            <Group label="Reading mode">
              <Link
                href={plainScriptureHref}
                onClick={() => setOpen(false)}
                className="settings-plain-link"
              >
                <span>Read plain scripture</span>
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="settings-plain-help">
                Skip the study guide and open this chapter in the plain Bible
                reader — verse text only, no images or commentary.
              </p>
            </Group>
          )}

          <Group label="Study sections">
            <ul className="space-y-1">
              {SECTION_OPTIONS.map((s) => {
                const visible = !hiddenSections.has(s.id);
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => toggleSection(s.id)}
                      aria-pressed={visible}
                      className="w-full flex items-center justify-between gap-3 py-2 px-2 rounded-lg hover:bg-[var(--color-bg)] transition-colors"
                    >
                      <span className="text-[0.875rem] text-[color:var(--color-label)]">
                        {s.label}
                      </span>
                      <span
                        className={`relative h-5 w-9 rounded-full transition-colors ${
                          visible ? 'bg-[#34C759]' : 'bg-[#D1D1D6]'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 h-4 w-4 bg-white rounded-full shadow transition-all ${
                            visible ? 'left-[18px]' : 'left-0.5'
                          }`}
                        />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Group>

          <div className="px-4 py-3 border-t border-[color:var(--color-separator)] bg-[var(--color-bg)]">
            <Link
              href="/settings"
              className="text-[0.8125rem] font-medium text-[color:var(--color-primary)]"
              onClick={() => setOpen(false)}
            >
              All settings →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="px-4 py-3 border-b border-[color:var(--color-separator)] last:border-b-0">
      <p className="text-[0.75rem] font-semibold text-[color:var(--color-secondary-label)] mb-2">{label}</p>
      {children}
    </div>
  );
}

function Segmented({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-[var(--color-bg)] rounded-xl p-0.5 gap-0.5">{children}</div>
  );
}

function SegmentButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex-1 px-2 py-1.5 rounded-lg text-[0.75rem] font-semibold transition-all ${
        active
          ? 'bg-[color:var(--color-surface)] text-[color:var(--color-label)] shadow-sm'
          : 'text-[color:var(--color-secondary-label)] hover:text-[color:var(--color-label)]'
      }`}
    >
      {children}
    </button>
  );
}
