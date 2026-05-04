'use client';

import { useState, type ReactNode } from 'react';
import RichChapterEditor from './RichChapterEditor';
import type { SerializedRichChapterContent } from '@/lib/chapterContent';

export interface ChapterContentShape {
  overview: string;
  themes: { title: string; desc: string }[];
  questions: string[];
  christConnection: string;
  keyVerse: { reference: string; text: string };
}

interface EditableStudyGuideProps {
  /** The public-view markup (RichStudyGuide). Rendered when `editing` is
   *  false so admins see exactly what readers see. */
  children: ReactNode;
  bookName: string;
  bookSlug: string;
  chapter: number;
  /** Underlying legacy ChapterContent shape (when present). Drives the
   *  simple form editor. */
  legacy: ChapterContentShape | null;
  /** Currently-rendered RichChapterContent (override > hand-authored >
   *  auto-port) serialized for editing. Drives the advanced block editor. */
  rich: SerializedRichChapterContent | null;
  /** Server-resolved admin flag. When true, the editor toolbar mounts. */
  sessionIsAdmin: boolean;
  /** Hand-authored chapters open the advanced editor by default. */
  isHandAuthored?: boolean;
}

type EditorMode = 'simple' | 'advanced';

/**
 * Renders the public-view children for non-admin viewers. For admins, adds
 * a sticky floating toolbar with Edit / Save / Cancel / Revert. Edit mode
 * swaps the children for a form-style editor of the underlying legacy
 * ChapterContent fields.
 *
 * Why a form editor and not contentEditable on RichStudyGuide:
 *   The auto-port pipeline transforms ChapterContent → RichChapterContent
 *   one-way. To make inline edits round-trip we'd need a deterministic
 *   inverse, which doesn't exist (themes get wrapped in colored rails,
 *   questions become reflection blocks, etc.). The form editor edits the
 *   underlying fields directly, then the page revalidates and re-renders
 *   the auto-port — so the public view always reflects the saved data.
 */
export default function EditableStudyGuide({
  children,
  bookName,
  bookSlug,
  chapter,
  legacy,
  rich,
  sessionIsAdmin,
  isHandAuthored = false,
}: EditableStudyGuideProps) {
  // Editing mode + which sub-editor is active. Hand-authored chapters
  // default to advanced (the only editor that captures their full shape);
  // auto-ported chapters default to simple (legacy form is faster) but
  // admins can switch with a tab in the toolbar.
  const [editing, setEditing] = useState(false);
  const [mode, setMode] = useState<EditorMode>(isHandAuthored ? 'advanced' : 'simple');
  const [busy, setBusy] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Working copy for the simple editor.
  const [draft, setDraft] = useState<ChapterContentShape>(() => ({
    overview: legacy?.overview ?? '',
    themes: legacy?.themes ?? [],
    questions: legacy?.questions ?? [],
    christConnection: legacy?.christConnection ?? '',
    keyVerse: legacy?.keyVerse ?? { reference: '', text: '' },
  }));

  if (!sessionIsAdmin) {
    return <>{children}</>;
  }

  const startEditing = () => {
    setDraft({
      overview: legacy?.overview ?? '',
      themes: legacy?.themes ?? [],
      questions: legacy?.questions ?? [],
      christConnection: legacy?.christConnection ?? '',
      keyVerse: legacy?.keyVerse ?? { reference: '', text: '' },
    });
    setMode(isHandAuthored ? 'advanced' : 'simple');
    setEditing(true);
    setErrorMsg(null);
  };

  const save = async () => {
    setBusy(true);
    setErrorMsg(null);
    try {
      const trimmedDraft: ChapterContentShape = {
        overview: draft.overview.trim(),
        christConnection: draft.christConnection.trim(),
        keyVerse: {
          reference: draft.keyVerse.reference.trim(),
          text: draft.keyVerse.text.trim(),
        },
        questions: draft.questions.map((q) => q.trim()).filter(Boolean),
        themes: draft.themes
          .map((t) => ({ title: t.title.trim(), desc: t.desc.trim() }))
          .filter((t) => t.title || t.desc),
      };

      const res = await fetch('/api/admin/chapter-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          book_slug: bookSlug,
          chapter,
          content: trimmedDraft,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(json.error || `save failed (${res.status})`);
        return;
      }
      window.location.reload();
    } finally {
      setBusy(false);
    }
  };

  const revert = async () => {
    if (!confirm('Revert this chapter to the default content? Your saved edits will be deleted.')) {
      return;
    }
    setBusy(true);
    setErrorMsg(null);
    try {
      const res = await fetch('/api/admin/chapter-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ book_slug: bookSlug, chapter, content: {} }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error || `revert failed (${res.status})`);
        return;
      }
      window.location.reload();
    } finally {
      setBusy(false);
    }
  };

  // Save flow for the advanced (RichChapterContent) editor. Posts a
  // `kind: 'rich'` payload so the API stores it as a SerializedRichChapterContent
  // override row, which wins over both the file-based RICH_CHAPTERS entry
  // and the auto-port pipeline at render time.
  const saveAdvanced = async (next: SerializedRichChapterContent) => {
    setBusy(true);
    setErrorMsg(null);
    try {
      const res = await fetch('/api/admin/chapter-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          book_slug: bookSlug,
          chapter,
          kind: 'rich',
          content: next,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(json.error || `save failed (${res.status})`);
        return;
      }
      window.location.reload();
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      {!editing ? children : (
        mode === 'advanced' && rich ? (
          <RichChapterEditor
            initial={rich}
            bookSlug={bookSlug}
            chapter={chapter}
            bookName={bookName}
            onSave={saveAdvanced}
            onCancel={() => { setEditing(false); setErrorMsg(null); }}
            busy={busy}
          />
        ) : (
          <FormEditor
            bookName={bookName}
            chapter={chapter}
            draft={draft}
            setDraft={setDraft}
          />
        )
      )}

      <div className="admin-edit-toolbar" role="toolbar" aria-label="Admin edit">
        {!editing ? (
          <>
            <span className="admin-edit-toolbar__label">Admin</span>
            <button
              type="button"
              onClick={startEditing}
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
          </>
        ) : (
          <>
            <span className="admin-edit-toolbar__label">Editing</span>
            {/* Mode toggle: simple (legacy form) vs advanced (rich block).
                Hand-authored chapters lock to advanced. The advanced
                editor's own Save button does the work for that mode; we
                only show the Save button here for the simple mode. */}
            {!isHandAuthored && (
              <div className="admin-edit-toolbar__tabs">
                <button
                  type="button"
                  onClick={() => setMode('simple')}
                  className={`admin-edit-toolbar__tab ${mode === 'simple' ? 'is-active' : ''}`}
                  disabled={busy}
                >
                  Simple
                </button>
                <button
                  type="button"
                  onClick={() => setMode('advanced')}
                  className={`admin-edit-toolbar__tab ${mode === 'advanced' ? 'is-active' : ''}`}
                  disabled={busy || !rich}
                  title={!rich ? 'Advanced editor needs a rich chapter to start from' : ''}
                >
                  Advanced
                </button>
              </div>
            )}
            {mode === 'simple' && (
              <button
                type="button"
                onClick={save}
                disabled={busy}
                className="admin-edit-toolbar__btn admin-edit-toolbar__btn--primary"
              >
                {busy ? 'Saving…' : 'Save'}
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                setEditing(false);
                setErrorMsg(null);
              }}
              disabled={busy}
              className="admin-edit-toolbar__btn admin-edit-toolbar__btn--ghost"
            >
              Cancel
            </button>
          </>
        )}
        {errorMsg && (
          <span className="admin-edit-toolbar__status admin-edit-toolbar__status--error">
            {errorMsg}
          </span>
        )}
      </div>

      <ToolbarStyles />
    </>
  );
}

/* Form editor for the underlying ChapterContent shape. */

interface FormEditorProps {
  bookName: string;
  chapter: number;
  draft: ChapterContentShape;
  setDraft: (next: ChapterContentShape) => void;
}

function FormEditor({ bookName, chapter, draft, setDraft }: FormEditorProps) {
  const update = (patch: Partial<ChapterContentShape>) => setDraft({ ...draft, ...patch });

  const updateTheme = (i: number, field: 'title' | 'desc', value: string) => {
    const next = draft.themes.slice();
    next[i] = { ...next[i], [field]: value };
    update({ themes: next });
  };
  const addTheme = () => update({ themes: [...draft.themes, { title: '', desc: '' }] });
  const removeTheme = (i: number) =>
    update({ themes: draft.themes.filter((_, idx) => idx !== i) });
  const moveTheme = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= draft.themes.length) return;
    const next = draft.themes.slice();
    [next[i], next[j]] = [next[j], next[i]];
    update({ themes: next });
  };

  const updateQuestion = (i: number, value: string) => {
    const next = draft.questions.slice();
    next[i] = value;
    update({ questions: next });
  };
  const addQuestion = () => update({ questions: [...draft.questions, ''] });
  const removeQuestion = (i: number) =>
    update({ questions: draft.questions.filter((_, idx) => idx !== i) });

  return (
    <div className="study-edit">
      <header className="study-edit__head">
        <p className="study-edit__kicker">Editing</p>
        <h1 className="study-edit__title">{bookName} {chapter}</h1>
        <p className="study-edit__hint">
          These fields drive the auto-port study guide for this chapter.
          Save publishes; Revert deletes the override and restores the
          file-based default.
        </p>
      </header>

      <section className="study-edit__field">
        <label className="study-edit__label">Overview</label>
        <textarea
          value={draft.overview}
          onChange={(e) => update({ overview: e.target.value })}
          rows={5}
          className="study-edit__textarea"
        />
      </section>

      <section className="study-edit__field">
        <label className="study-edit__label">Key Verse</label>
        <input
          type="text"
          value={draft.keyVerse.reference}
          onChange={(e) =>
            update({ keyVerse: { ...draft.keyVerse, reference: e.target.value } })
          }
          placeholder="e.g. Genesis 1:1"
          className="study-edit__input"
        />
        <textarea
          value={draft.keyVerse.text}
          onChange={(e) =>
            update({ keyVerse: { ...draft.keyVerse, text: e.target.value } })
          }
          rows={3}
          placeholder="Verse text"
          className="study-edit__textarea"
        />
      </section>

      <section className="study-edit__field">
        <div className="study-edit__row-head">
          <label className="study-edit__label">Key Themes</label>
          <button type="button" onClick={addTheme} className="study-edit__row-btn">
            + Add theme
          </button>
        </div>
        {draft.themes.length === 0 && (
          <p className="study-edit__empty">No themes yet.</p>
        )}
        {draft.themes.map((t, i) => (
          <div key={i} className="study-edit__row">
            <input
              type="text"
              value={t.title}
              onChange={(e) => updateTheme(i, 'title', e.target.value)}
              placeholder="Theme title"
              className="study-edit__input"
            />
            <textarea
              value={t.desc}
              onChange={(e) => updateTheme(i, 'desc', e.target.value)}
              rows={2}
              placeholder="Theme description"
              className="study-edit__textarea"
            />
            <div className="study-edit__row-actions">
              <button type="button" onClick={() => moveTheme(i, -1)} disabled={i === 0}>↑</button>
              <button type="button" onClick={() => moveTheme(i, 1)} disabled={i === draft.themes.length - 1}>↓</button>
              <button type="button" onClick={() => removeTheme(i)} className="study-edit__row-remove">Remove</button>
            </div>
          </div>
        ))}
      </section>

      <section className="study-edit__field">
        <label className="study-edit__label">Connection to Christ</label>
        <textarea
          value={draft.christConnection}
          onChange={(e) => update({ christConnection: e.target.value })}
          rows={4}
          className="study-edit__textarea"
        />
      </section>

      <section className="study-edit__field">
        <div className="study-edit__row-head">
          <label className="study-edit__label">Study Questions</label>
          <button type="button" onClick={addQuestion} className="study-edit__row-btn">
            + Add question
          </button>
        </div>
        {draft.questions.length === 0 && (
          <p className="study-edit__empty">No questions yet.</p>
        )}
        {draft.questions.map((q, i) => (
          <div key={i} className="study-edit__row">
            <textarea
              value={q}
              onChange={(e) => updateQuestion(i, e.target.value)}
              rows={2}
              className="study-edit__textarea"
            />
            <div className="study-edit__row-actions">
              <button type="button" onClick={() => removeQuestion(i)} className="study-edit__row-remove">Remove</button>
            </div>
          </div>
        ))}
      </section>

      <FormStyles />
    </div>
  );
}

function ToolbarStyles() {
  return (
    <style jsx global>{`
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
        max-width: calc(100vw - 32px);
        flex-wrap: wrap;
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
        background: #C8964A;
        color: #1A1612;
      }
      .admin-edit-toolbar__btn--primary:hover {
        background: #d4a45e;
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
      .admin-edit-toolbar__tabs {
        display: inline-flex;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        padding: 2px;
      }
      .admin-edit-toolbar__tab {
        padding: 4px 10px;
        font-size: 12px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.6);
        background: transparent;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-family: inherit;
      }
      .admin-edit-toolbar__tab.is-active {
        background: rgba(255, 255, 255, 0.18);
        color: #fff;
      }
      .admin-edit-toolbar__tab:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    `}</style>
  );
}

function FormStyles() {
  return (
    <style jsx global>{`
      .study-edit {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding-bottom: 6rem;
      }
      .study-edit__head .study-edit__kicker {
        font-size: 11px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--color-tertiary-label);
        font-weight: 700;
        margin: 0;
      }
      .study-edit__head .study-edit__title {
        font-size: 24px;
        font-weight: 700;
        color: var(--color-label);
        margin: 0.25rem 0 0.5rem;
      }
      .study-edit__head .study-edit__hint {
        font-size: 13px;
        color: var(--color-secondary-label);
        line-height: 1.5;
        margin: 0;
        max-width: 56ch;
      }
      .study-edit__field {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background: var(--color-surface);
        border-radius: 1rem;
        padding: 1rem 1.125rem;
      }
      .study-edit__row-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .study-edit__label {
        font-size: 12px;
        font-weight: 700;
        color: var(--color-label);
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      .study-edit__row-btn {
        font-size: 12.5px;
        color: var(--color-primary);
        background: transparent;
        border: 1px solid var(--color-separator);
        padding: 4px 10px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
      }
      .study-edit__input,
      .study-edit__textarea {
        width: 100%;
        font: inherit;
        font-size: 14.5px;
        color: var(--color-label);
        background: var(--color-bg);
        border: 1px solid var(--color-separator);
        border-radius: 8px;
        padding: 10px 12px;
        line-height: 1.5;
      }
      .study-edit__input:focus,
      .study-edit__textarea:focus {
        outline: 2px solid rgba(0, 122, 255, 0.4);
        outline-offset: 1px;
      }
      .study-edit__textarea {
        resize: vertical;
        min-height: 64px;
      }
      .study-edit__row {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 12px;
        background: var(--color-bg);
        border: 1px solid var(--color-separator);
        border-radius: 12px;
      }
      .study-edit__row-actions {
        display: flex;
        gap: 6px;
        justify-content: flex-end;
        align-items: center;
      }
      .study-edit__row-actions button {
        font: inherit;
        font-size: 12px;
        padding: 4px 10px;
        background: transparent;
        border: 1px solid var(--color-separator);
        border-radius: 6px;
        cursor: pointer;
        color: var(--color-secondary-label);
      }
      .study-edit__row-actions button:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
      .study-edit__row-remove {
        color: #ff3b30 !important;
      }
      .study-edit__empty {
        font-size: 13px;
        color: var(--color-tertiary-label);
        margin: 0;
      }
    `}</style>
  );
}
