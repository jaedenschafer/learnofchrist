'use client';

import { useEffect, useRef, useState } from 'react';
import StudyGuide from './StudyGuide';

export interface ChapterContentShape {
  overview: string;
  themes: { title: string; desc: string }[];
  questions: string[];
  christConnection: string;
  keyVerse: { reference: string; text: string };
}

interface EditableStudyGuideProps {
  bookName: string;
  bookSlug: string;
  chapter: number;
  content: ChapterContentShape | null;
  /** Server-resolved admin flag. When true, the inline editor turns on. */
  sessionIsAdmin: boolean;
}

/**
 * Wraps StudyGuide. For non-admins this is a pass-through render. For admins
 * a sticky toolbar floats at the bottom of the viewport with "Edit page",
 * "Save", "Cancel", and "Revert to default" affordances.
 *
 *  - When the user clicks Edit, every editable block becomes
 *    contentEditable. The visual rendering stays the same (no chrome
 *    swap, no field-by-field input boxes).
 *  - On Save, the component reads the live DOM out of the editable nodes,
 *    rebuilds a ChapterContent payload, and POSTs it to
 *    /api/admin/chapter-content. The page revalidates server-side; we
 *    also flip the local state so the toolbar can show "Saved ✓".
 *  - "Revert to default" sends an empty {} payload, which deletes the
 *    override row and restores the TS-file content.
 *
 * The actual rendering still happens in StudyGuide so we keep one source
 * of truth for layout / dark-mode / level gating.
 */
export default function EditableStudyGuide({
  bookName,
  bookSlug,
  chapter,
  content,
  sessionIsAdmin,
}: EditableStudyGuideProps) {
  const [editing, setEditing] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // While editing is on, mark every editable node so the user sees a soft
  // outline. The CSS lives below the markup.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const fields = root.querySelectorAll<HTMLElement>('[data-editable]');
    fields.forEach((el) => {
      if (editing) {
        el.setAttribute('contenteditable', 'true');
        el.classList.add('admin-editable--on');
      } else {
        el.removeAttribute('contenteditable');
        el.classList.remove('admin-editable--on');
      }
    });
  }, [editing]);

  if (!sessionIsAdmin) {
    return (
      <StudyGuide bookName={bookName} chapter={chapter} content={content} />
    );
  }

  const readField = (key: string): string => {
    const el = rootRef.current?.querySelector<HTMLElement>(`[data-editable="${key}"]`);
    return (el?.innerText ?? '').replace(/ /g, ' ').trim();
  };
  // Read every leaf editable inside a data-editable-list container. The
  // leaf selector is keyed off the field name so we can extend later
  // (e.g. crossReferences) without touching the read code.
  const readList = (key: string, leafSelector: string): string[] => {
    const els = rootRef.current?.querySelectorAll<HTMLElement>(
      `[data-editable-list="${key}"] ${leafSelector}`,
    );
    if (!els) return [];
    return Array.from(els)
      .map((e) => e.innerText.replace(/ /g, ' ').trim())
      .filter(Boolean);
  };
  const readThemes = (): { title: string; desc: string }[] => {
    const items = rootRef.current?.querySelectorAll<HTMLElement>('[data-editable-list="themes"] [data-editable-theme]');
    if (!items) return [];
    return Array.from(items)
      .map((row) => ({
        title: row.querySelector<HTMLElement>('[data-editable="theme-title"]')?.innerText.trim() ?? '',
        desc: row.querySelector<HTMLElement>('[data-editable="theme-desc"]')?.innerText.trim() ?? '',
      }))
      .filter((t) => t.title || t.desc);
  };

  const save = async () => {
    setBusy(true);
    setStatus('idle');
    setErrorMsg(null);
    try {
      const overview = readField('overview');
      const christConnection = readField('christConnection');
      const keyVerseRef = readField('keyVerse-ref');
      const keyVerseText = readField('keyVerse-text');
      const questions = readList('questions', '[data-editable="question"]');
      const themes = readThemes();
      const next: ChapterContentShape = {
        overview,
        christConnection,
        keyVerse: { reference: keyVerseRef, text: keyVerseText },
        questions,
        themes,
      };

      const res = await fetch('/api/admin/chapter-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ book_slug: bookSlug, chapter, content: next }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setErrorMsg(json.error || `save failed (${res.status})`);
        return;
      }
      setStatus('saved');
      setEditing(false);
      // Refresh the page so the server-rendered content reflects the new
      // override (revalidatePath fires on the server side; this triggers
      // the client to re-fetch).
      window.location.reload();
    } finally {
      setBusy(false);
    }
  };

  const revert = async () => {
    if (!confirm('Revert this chapter to the default content? Your saved edits will be deleted.')) return;
    setBusy(true);
    setStatus('idle');
    try {
      const res = await fetch('/api/admin/chapter-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ book_slug: bookSlug, chapter, content: {} }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setStatus('error');
        setErrorMsg(json.error || `revert failed (${res.status})`);
        return;
      }
      window.location.reload();
    } finally {
      setBusy(false);
    }
  };

  return (
    <div ref={rootRef} className={`editable-study ${editing ? 'editable-study--editing' : ''}`}>
      <StudyGuide bookName={bookName} chapter={chapter} content={content} />

      {/* Sticky admin toolbar — visible only to admin users */}
      <div className="admin-edit-toolbar" role="toolbar" aria-label="Admin edit">
        {!editing ? (
          <>
            <span className="admin-edit-toolbar__label">Admin</span>
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="admin-edit-toolbar__btn admin-edit-toolbar__btn--primary"
            >
              Edit page
            </button>
            <button
              type="button"
              onClick={revert}
              disabled={busy}
              className="admin-edit-toolbar__btn admin-edit-toolbar__btn--ghost"
              title="Delete the saved override and restore the default content"
            >
              Revert to default
            </button>
            {status === 'saved' && <span className="admin-edit-toolbar__status">Saved ✓</span>}
            {status === 'error' && (
              <span className="admin-edit-toolbar__status admin-edit-toolbar__status--error">
                {errorMsg || 'Error'}
              </span>
            )}
          </>
        ) : (
          <>
            <span className="admin-edit-toolbar__label">Editing</span>
            <button
              type="button"
              onClick={save}
              disabled={busy}
              className="admin-edit-toolbar__btn admin-edit-toolbar__btn--primary"
            >
              {busy ? 'Saving…' : 'Save'}
            </button>
            <button
              type="button"
              onClick={() => {
                setEditing(false);
                setStatus('idle');
                window.location.reload();
              }}
              disabled={busy}
              className="admin-edit-toolbar__btn admin-edit-toolbar__btn--ghost"
            >
              Cancel
            </button>
            {status === 'error' && (
              <span className="admin-edit-toolbar__status admin-edit-toolbar__status--error">
                {errorMsg || 'Error'}
              </span>
            )}
          </>
        )}
      </div>

      <style jsx global>{`
        .editable-study--editing [data-editable],
        .editable-study--editing [data-editable-item],
        .editable-study--editing [data-editable-theme] {
          outline: 1px dashed rgba(0, 122, 255, 0.35);
          outline-offset: 4px;
          border-radius: 4px;
          transition: outline-color 150ms ease, background-color 150ms ease;
        }
        .editable-study--editing [data-editable]:focus,
        .editable-study--editing [data-editable]:hover {
          outline-color: rgba(0, 122, 255, 0.9);
          background-color: rgba(0, 122, 255, 0.04);
        }
        .editable-study--editing [contenteditable="true"]:focus {
          outline-color: rgba(0, 122, 255, 0.9) !important;
        }
        .admin-edit-toolbar {
          position: fixed;
          right: 16px;
          bottom: 16px;
          z-index: 60;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: rgba(29, 29, 31, 0.92);
          color: #fff;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          font-size: 13px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .admin-edit-toolbar__label {
          font-size: 10.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.55);
          padding: 0 4px 0 2px;
        }
        .admin-edit-toolbar__btn {
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          font-family: inherit;
          border: none;
          cursor: pointer;
        }
        .admin-edit-toolbar__btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .admin-edit-toolbar__btn--primary {
          background: #007aff;
          color: #fff;
        }
        .admin-edit-toolbar__btn--ghost {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }
        .admin-edit-toolbar__status {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          margin-left: 4px;
        }
        .admin-edit-toolbar__status--error {
          color: #ff6961;
        }
      `}</style>
    </div>
  );
}
