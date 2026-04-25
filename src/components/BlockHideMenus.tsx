'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  useReadingPrefs,
  type HidableSection,
} from '@/lib/ReadingPrefsContext';

/**
 * Walks the chapter container on mount, finds every `.carry` and `.hebrew`
 * block, and injects a small ⋮ menu into each that lets the reader hide
 * that whole section (Thoughts to Sit With / Hebrew Words). The actual
 * hide is a single class on the article element handled by ReadingComfortEffects;
 * the menu just toggles the matching key in `hiddenSections`.
 *
 * We keep this as runtime DOM injection (instead of a JSX wrapper) because
 * Carry and Hebrew blocks are written as plain divs throughout
 * GenesisOneStudy and refactoring every one would be a large diff.
 */
export default function BlockHideMenus({
  containerSelector = '.rich-study',
}: {
  containerSelector?: string;
} = {}) {
  const [mounts, setMounts] = useState<Array<{ host: HTMLElement; kind: HidableSection }>>([]);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;
    const found: Array<{ host: HTMLElement; kind: HidableSection }> = [];
    const wire = (sel: string, kind: HidableSection) => {
      Array.from(container.querySelectorAll<HTMLElement>(sel)).forEach((el) => {
        // Skip if we already injected one (HMR / re-render guard).
        if (el.querySelector(':scope > .block-hide-menu-mount')) return;
        const mount = document.createElement('span');
        mount.className = 'block-hide-menu-mount';
        // Make the host position-relative so the absolute mount lands inside it.
        if (getComputedStyle(el).position === 'static') {
          el.style.position = 'relative';
        }
        el.appendChild(mount);
        found.push({ host: mount, kind });
      });
    };
    wire('.carry', 'carry');
    wire('.hebrew', 'hebrew');
    setMounts(found);
    return () => {
      found.forEach(({ host }) => host.remove());
    };
  }, [containerSelector]);

  return (
    <>
      {mounts.map((m, i) => (
        <BlockHideMenuPortal key={`${m.kind}-${i}`} host={m.host} kind={m.kind} />
      ))}
    </>
  );
}

function BlockHideMenuPortal({ host, kind }: { host: HTMLElement; kind: HidableSection }) {
  return createPortal(<BlockHideMenu kind={kind} />, host);
}

function BlockHideMenu({ kind }: { kind: HidableSection }) {
  const [open, setOpen] = useState(false);
  const { toggleSection } = useReadingPrefs();

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      const tgt = e.target as Element | null;
      if (!tgt) return;
      if (tgt.closest('.block-hide-menu')) return;
      setOpen(false);
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
    <span className="block-hide-menu">
      <button
        type="button"
        className="block-hide-menu__btn"
        aria-label="Block options"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
          <circle cx="12" cy="5" r="1.7" />
          <circle cx="12" cy="12" r="1.7" />
          <circle cx="12" cy="19" r="1.7" />
        </svg>
      </button>
      {open && (
        <span className="block-hide-menu__pop" role="menu">
          <button
            type="button"
            role="menuitem"
            className="block-hide-menu__item"
            onClick={() => {
              setOpen(false);
              toggleSection(kind);
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="14" height="14" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.5 10.5a2 2 0 002.83 2.83M9.88 4.42A8.74 8.74 0 0112 4c5 0 9 4 9 8 0 1.7-.74 3.27-2 4.55M6.36 6.36C4.27 7.86 3 9.84 3 12c0 4 4 8 9 8 1.6 0 3.1-.4 4.4-1.1" />
            </svg>
            Hide
          </button>
        </span>
      )}
    </span>
  );
}
