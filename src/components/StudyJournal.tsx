'use client';

import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useJournalEntry, useCommitment } from '@/lib/useStudyJournal';

interface VerseMount {
  verseRef: string; // e.g. "genesis/1/3"
  label: string;    // e.g. "Genesis 1:3"
  anchor: HTMLElement;
}

interface CarryMount {
  id: string;
  anchor: HTMLElement;
}

/**
 * Mounts interactive widgets into an already-rendered static study page:
 *   - A pen icon next to each <span class="v"> verse number → opens a drawer
 *   - A commit checkbox inside each .carry block
 *
 * The host page (e.g. GenesisOneStudy) doesn't need to know about any of this.
 * It just renders this component once and we read the DOM from there.
 */
export default function StudyJournal({
  studyId,
  bookSlug,
  chapter,
  bookName,
  containerSelector = '.rich-study',
}: {
  studyId: string;       // e.g. "genesis-1"
  bookSlug: string;      // e.g. "genesis"
  chapter: number;       // e.g. 1
  bookName: string;      // e.g. "Genesis"
  containerSelector?: string;
}) {
  const [verseMounts, setVerseMounts] = useState<VerseMount[]>([]);
  const [carryMounts, setCarryMounts] = useState<CarryMount[]>([]);
  const [activeVerse, setActiveVerse] = useState<VerseMount | null>(null);
  const [mounted, setMounted] = useState(false);
  const attached = useRef(false);

  useEffect(() => {
    setMounted(true);
    if (attached.current) return;
    attached.current = true;

    // ── Verses ──
    // Find every .v inside a .scripture, figure out the verse number,
    // and create a mount node we can portal into.
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const vEls = Array.from(
      container.querySelectorAll<HTMLSpanElement>('.scripture .v'),
    );
    const verses: VerseMount[] = [];
    vEls.forEach((el) => {
      const n = parseInt(el.textContent?.trim() || '0', 10);
      if (!n) return;
      // Wrap the verse number so we can position the icon as a sibling
      if (!el.classList.contains('v-interactive')) {
        el.classList.add('v-interactive');
        const mount = document.createElement('span');
        mount.className = 'v-note-mount';
        mount.setAttribute('data-verse', String(n));
        el.appendChild(mount);
        verses.push({
          verseRef: `${bookSlug}/${chapter}/${n}`,
          label: `${bookName} ${chapter}:${n}`,
          anchor: mount,
        });
      }
    });

    // ── Carry blocks ──
    const cEls = Array.from(
      container.querySelectorAll<HTMLDivElement>('.carry'),
    );
    const carries: CarryMount[] = cEls.map((el, i) => {
      const mount = document.createElement('div');
      mount.className = 'carry-commit-mount';
      el.appendChild(mount);
      return { id: `${studyId}:carry-${i}`, anchor: mount };
    });

    setVerseMounts(verses);
    setCarryMounts(carries);
  }, [studyId, bookSlug, chapter, bookName, containerSelector]);

  if (!mounted) return null;

  return (
    <>
      {verseMounts.map((m) =>
        createPortal(
          <NoteIcon verseRef={m.verseRef} onOpen={() => setActiveVerse(m)} />,
          m.anchor,
        ),
      )}
      {carryMounts.map((m) =>
        createPortal(<CarryCheck commitKey={`loc-commit:${m.id}`} />, m.anchor),
      )}
      {activeVerse && (
        <NoteDrawer
          verseRef={activeVerse.verseRef}
          label={activeVerse.label}
          onClose={() => setActiveVerse(null)}
        />
      )}
    </>
  );
}

// ─────────────────────────────────────────────

function NoteIcon({ verseRef, onOpen }: { verseRef: string; onOpen: () => void }) {
  const { value } = useJournalEntry(`loc-note:${verseRef}`);
  const hasNote = !!value.trim();
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`v-note-btn ${hasNote ? 'has-note' : ''}`}
      aria-label={`Open notes for ${verseRef}`}
      title={hasNote ? 'View your note' : 'Add a note'}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
      </svg>
      {hasNote && <span className="v-note-dot" />}
    </button>
  );
}

// ─────────────────────────────────────────────

function CarryCheck({ commitKey }: { commitKey: string }) {
  const { checked, toggle, committedAt } = useCommitment(commitKey);
  return (
    <button
      type="button"
      onClick={toggle}
      className={`carry-commit ${checked ? 'is-committed' : ''}`}
      aria-pressed={checked}
    >
      <span className="carry-check-box">
        {checked && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
          </svg>
        )}
      </span>
      <span className="carry-commit-text">
        {checked ? 'Committed' : "I'll try this"}
        {checked && committedAt && (
          <span className="carry-commit-date">
            {' '}
            · {new Date(committedAt).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
            })}
          </span>
        )}
      </span>
    </button>
  );
}

// ─────────────────────────────────────────────

function NoteDrawer({
  verseRef,
  label,
  onClose,
}: {
  verseRef: string;
  label: string;
  onClose: () => void;
}) {
  const { value, save } = useJournalEntry(`loc-note:${verseRef}`);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div
      className="note-drawer-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="note-drawer"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label={`Notes for ${label}`}
      >
        <div className="note-drawer-head">
          <div>
            <p className="note-drawer-eyebrow">My Notes</p>
            <h3 className="note-drawer-title">{label}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="note-drawer-close"
            aria-label="Close notes"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <textarea
          className="note-drawer-textarea"
          value={value}
          onChange={(e) => save(e.target.value)}
          placeholder="What stands out to you here? Questions, cross-references, how it meets your life today…"
          autoFocus
        />
        <p className="note-drawer-foot">
          <span className="note-saved-dot" />
          Saved to this device · will sync when you sign in
        </p>
      </div>
    </div>,
    document.body,
  );
}
