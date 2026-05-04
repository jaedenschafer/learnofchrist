'use client';

import { useState } from 'react';
import type {
  SerializedBlock,
  SerializedRichChapterContent,
  SerializedRichSection,
} from '@/lib/chapterContent';
import type { VerseSpan } from '@/data/study-chapters/types';

interface RichChapterEditorProps {
  /** The starting state — typically the SerializedRichChapterContent of
   *  whatever's currently rendered (override > hand-authored > auto-port). */
  initial: SerializedRichChapterContent;
  bookSlug: string;
  chapter: number;
  bookName: string;
  /** Called when admin clicks Save. The component passes the current
   *  draft; the parent does the API call so it can also flip toolbar
   *  state and trigger a reload. */
  onSave: (draft: SerializedRichChapterContent) => Promise<void> | void;
  onCancel: () => void;
  busy?: boolean;
}

/**
 * Block-level editor for a full RichChapterContent override. Handles every
 * block kind in src/data/study-chapters/types.ts:
 *
 *   scripture     → chapter + per-verse plain-text editing (mark spans
 *                   are kept readable but not visually decomposed yet —
 *                   admins edit the text; existing marks survive in
 *                   place when the underlying span structure stays).
 *   commentary    → HTML textarea
 *   hebrew/greek  → 4 fields (title, script, translit, description)
 *   christ        → title + HTML
 *   carry         → HTML
 *   reflection    → prompt
 *   artwork       → matchTitle/matchArtist regex (string + flags)
 *                   + caption
 *   divider       → no fields
 *
 * The component is page-shaped — it expects the admin toolbar already
 * to be on screen via the parent. It just renders the form body.
 */
export default function RichChapterEditor({
  initial,
  bookSlug: _bookSlug,
  chapter: _chapter,
  bookName,
  onSave,
  onCancel,
  busy = false,
}: RichChapterEditorProps) {
  const [draft, setDraft] = useState<SerializedRichChapterContent>(initial);

  // ── Top-level updaters ─────────────────────────────────────────────
  const update = (patch: Partial<SerializedRichChapterContent>) =>
    setDraft({ ...draft, ...patch });

  const updateIntro = (i: number, value: string) => {
    const intros = draft.intros.slice();
    intros[i] = value;
    update({ intros });
  };
  const addIntro = () => update({ intros: [...draft.intros, ''] });
  const removeIntro = (i: number) =>
    update({ intros: draft.intros.filter((_, idx) => idx !== i) });

  // ── Section updaters ────────────────────────────────────────────────
  const updateSection = (i: number, patch: Partial<SerializedRichSection>) => {
    const next = draft.sections.slice();
    next[i] = { ...next[i], ...patch };
    update({ sections: next });
  };
  const addSection = () =>
    update({
      sections: [...draft.sections, { ref: '', title: '', blocks: [] }],
    });
  const removeSection = (i: number) =>
    update({ sections: draft.sections.filter((_, idx) => idx !== i) });
  const moveSection = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= draft.sections.length) return;
    const next = draft.sections.slice();
    [next[i], next[j]] = [next[j], next[i]];
    update({ sections: next });
  };

  // ── Block updaters within a section ────────────────────────────────
  const updateBlock = (sectionIdx: number, blockIdx: number, block: SerializedBlock) => {
    const sections = draft.sections.slice();
    const blocks = sections[sectionIdx].blocks.slice();
    blocks[blockIdx] = block;
    sections[sectionIdx] = { ...sections[sectionIdx], blocks };
    update({ sections });
  };
  const addBlock = (sectionIdx: number, kind: SerializedBlock['kind']) => {
    const sections = draft.sections.slice();
    const blocks = sections[sectionIdx].blocks.slice();
    blocks.push(makeEmptyBlock(kind));
    sections[sectionIdx] = { ...sections[sectionIdx], blocks };
    update({ sections });
  };
  const removeBlock = (sectionIdx: number, blockIdx: number) => {
    const sections = draft.sections.slice();
    sections[sectionIdx] = {
      ...sections[sectionIdx],
      blocks: sections[sectionIdx].blocks.filter((_, idx) => idx !== blockIdx),
    };
    update({ sections });
  };
  const moveBlock = (sectionIdx: number, blockIdx: number, dir: -1 | 1) => {
    const sections = draft.sections.slice();
    const blocks = sections[sectionIdx].blocks.slice();
    const j = blockIdx + dir;
    if (j < 0 || j >= blocks.length) return;
    [blocks[blockIdx], blocks[j]] = [blocks[j], blocks[blockIdx]];
    sections[sectionIdx] = { ...sections[sectionIdx], blocks };
    update({ sections });
  };

  return (
    <div className="rich-edit">
      <header className="rich-edit__head">
        <p className="rich-edit__kicker">Editing (advanced)</p>
        <h1 className="rich-edit__title">{bookName} {draft.chapter}</h1>
        <p className="rich-edit__hint">
          Full block editor. Reorder sections, add/remove blocks, edit any
          field. Save publishes the override; Cancel discards. Revert to
          default lives on the toolbar.
        </p>
      </header>

      {/* ── Page-level fields ─────────────────────────────────────── */}
      <section className="rich-edit__field">
        <div className="rich-edit__row-head">
          <label className="rich-edit__label">Intro paragraphs</label>
          <button type="button" onClick={addIntro} className="rich-edit__row-btn">+ Add intro</button>
        </div>
        {draft.intros.map((p, i) => (
          <div key={i} className="rich-edit__row">
            <textarea
              value={p}
              onChange={(e) => updateIntro(i, e.target.value)}
              rows={3}
              className="rich-edit__textarea"
            />
            <div className="rich-edit__row-actions">
              <button type="button" onClick={() => removeIntro(i)} className="rich-edit__row-remove">Remove</button>
            </div>
          </div>
        ))}
      </section>

      <section className="rich-edit__field">
        <label className="rich-edit__label">Tap hint (under intros)</label>
        <input
          type="text"
          value={draft.tapHint ?? ''}
          onChange={(e) => update({ tapHint: e.target.value || null })}
          placeholder="e.g. Tap any highlighted phrase to jump to commentary"
          className="rich-edit__input"
        />
        <label className="rich-edit__check">
          <input
            type="checkbox"
            checked={!!draft.showKjvNote}
            onChange={(e) => update({ showKjvNote: e.target.checked })}
          />
          <span>Show the &ldquo;A note on translations&rdquo; intro card</span>
        </label>
      </section>

      <OpenerEditor
        opener={draft.opener ?? null}
        setOpener={(opener) => update({ opener })}
      />

      {/* ── Sections list ────────────────────────────────────────── */}
      <section className="rich-edit__sections">
        <div className="rich-edit__row-head">
          <h2 className="rich-edit__label rich-edit__label--lg">Sections ({draft.sections.length})</h2>
          <button type="button" onClick={addSection} className="rich-edit__row-btn">+ Add section</button>
        </div>

        {draft.sections.map((sec, sIdx) => (
          <div key={sIdx} className="rich-edit__section">
            <header className="rich-edit__section-head">
              <div className="rich-edit__section-controls">
                <button type="button" onClick={() => moveSection(sIdx, -1)} disabled={sIdx === 0}>↑</button>
                <button type="button" onClick={() => moveSection(sIdx, 1)} disabled={sIdx === draft.sections.length - 1}>↓</button>
                <button type="button" onClick={() => removeSection(sIdx)} className="rich-edit__row-remove">Remove section</button>
              </div>
              <input
                type="text"
                value={sec.ref ?? ''}
                onChange={(e) => updateSection(sIdx, { ref: e.target.value })}
                placeholder="Section reference, e.g. Genesis 1:1–2"
                className="rich-edit__input"
              />
              <input
                type="text"
                value={sec.title ?? ''}
                onChange={(e) => updateSection(sIdx, { title: e.target.value })}
                placeholder="Section title, e.g. The Beginning"
                className="rich-edit__input"
              />
            </header>

            {sec.blocks.map((b, bIdx) => (
              <BlockEditor
                key={bIdx}
                block={b}
                onChange={(next) => updateBlock(sIdx, bIdx, next)}
                onMoveUp={bIdx > 0 ? () => moveBlock(sIdx, bIdx, -1) : undefined}
                onMoveDown={bIdx < sec.blocks.length - 1 ? () => moveBlock(sIdx, bIdx, 1) : undefined}
                onRemove={() => removeBlock(sIdx, bIdx)}
              />
            ))}

            <div className="rich-edit__add-block">
              <span className="rich-edit__add-block-label">Add block:</span>
              {(['scripture','commentary','hebrew','greek','christ','carry','reflection','artwork','divider'] as const).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => addBlock(sIdx, k)}
                  className="rich-edit__add-block-btn"
                >
                  + {k}
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── Bottom share box ─────────────────────────────────────── */}
      <BottomShareEditor
        bottomShare={draft.bottomShare ?? null}
        setBottomShare={(bs) => update({ bottomShare: bs })}
      />

      {/* ── Save row in body (mirrors toolbar for tall pages) ───── */}
      <div className="rich-edit__save-row">
        <button
          type="button"
          onClick={() => onSave(draft)}
          disabled={busy}
          className="rich-edit__save-btn"
        >
          {busy ? 'Saving…' : 'Save'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={busy}
          className="rich-edit__cancel-btn"
        >
          Cancel
        </button>
      </div>

      <RichEditorStyles />
    </div>
  );
}

/* ─── Block editor switchboard ────────────────────────────────────── */

interface BlockEditorProps {
  block: SerializedBlock;
  onChange: (next: SerializedBlock) => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  onRemove: () => void;
}

function BlockEditor({ block, onChange, onMoveUp, onMoveDown, onRemove }: BlockEditorProps) {
  const controls = (
    <div className="rich-edit__block-controls">
      <span className="rich-edit__block-kind">{block.kind}</span>
      <button type="button" onClick={onMoveUp} disabled={!onMoveUp}>↑</button>
      <button type="button" onClick={onMoveDown} disabled={!onMoveDown}>↓</button>
      <button type="button" onClick={onRemove} className="rich-edit__row-remove">Remove</button>
    </div>
  );

  switch (block.kind) {
    case 'scripture':
      return (
        <div className="rich-edit__block">
          {controls}
          <input
            type="number"
            value={block.chapter}
            onChange={(e) => onChange({ ...block, chapter: Number(e.target.value) || 0 })}
            placeholder="Chapter number"
            className="rich-edit__input"
          />
          <p className="rich-edit__hint-sm">
            One line per verse. Mark spans (Hebrew callouts, Christ Connection
            highlights) are preserved; this editor only changes plain text. To
            add or remove highlight spans, edit the .ts source.
          </p>
          <div className="rich-edit__verses">
            {block.lines.map((line, i) => (
              <div key={i} className="rich-edit__verse-row">
                <input
                  type="number"
                  value={line.number}
                  onChange={(e) => {
                    const next = block.lines.slice();
                    next[i] = { ...next[i], number: Number(e.target.value) || 0 };
                    onChange({ ...block, lines: next });
                  }}
                  className="rich-edit__verse-num"
                />
                <textarea
                  value={spansToText(line.spans)}
                  onChange={(e) => {
                    const next = block.lines.slice();
                    next[i] = { ...next[i], spans: textToSpans(e.target.value, line.spans) };
                    onChange({ ...block, lines: next });
                  }}
                  rows={2}
                  className="rich-edit__textarea"
                />
                <button
                  type="button"
                  className="rich-edit__row-remove"
                  onClick={() => onChange({ ...block, lines: block.lines.filter((_, idx) => idx !== i) })}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="rich-edit__row-btn"
              onClick={() =>
                onChange({
                  ...block,
                  lines: [
                    ...block.lines,
                    { number: (block.lines[block.lines.length - 1]?.number ?? 0) + 1, spans: [{ kind: 'text', text: '' }] },
                  ],
                })
              }
            >
              + Add verse
            </button>
          </div>
        </div>
      );

    case 'commentary':
      return (
        <div className="rich-edit__block">
          {controls}
          <input
            type="text"
            value={block.id ?? ''}
            onChange={(e) => onChange({ ...block, id: e.target.value || undefined })}
            placeholder="Optional anchor id (e.g. day1-light)"
            className="rich-edit__input"
          />
          <textarea
            value={block.html}
            onChange={(e) => onChange({ ...block, html: e.target.value })}
            rows={6}
            className="rich-edit__textarea"
            placeholder="Commentary HTML"
          />
        </div>
      );

    case 'hebrew':
    case 'greek':
      return (
        <div className="rich-edit__block">
          {controls}
          <input
            type="text"
            value={block.id}
            onChange={(e) => onChange({ ...block, id: e.target.value })}
            placeholder="Anchor id"
            className="rich-edit__input"
          />
          <input
            type="text"
            value={block.title}
            onChange={(e) => onChange({ ...block, title: e.target.value })}
            placeholder="Callout title"
            className="rich-edit__input"
          />
          <input
            type="text"
            value={block.script}
            onChange={(e) => onChange({ ...block, script: e.target.value })}
            placeholder={block.kind === 'hebrew' ? 'בְּרֵאשִׁית' : 'λόγος'}
            className="rich-edit__input"
          />
          <input
            type="text"
            value={block.translit}
            onChange={(e) => onChange({ ...block, translit: e.target.value })}
            placeholder="Transliteration"
            className="rich-edit__input"
          />
          <textarea
            value={block.description}
            onChange={(e) => onChange({ ...block, description: e.target.value })}
            rows={4}
            className="rich-edit__textarea"
            placeholder="Description"
          />
        </div>
      );

    case 'christ':
      return (
        <div className="rich-edit__block">
          {controls}
          <input
            type="text"
            value={block.id}
            onChange={(e) => onChange({ ...block, id: e.target.value })}
            placeholder="Anchor id"
            className="rich-edit__input"
          />
          <input
            type="text"
            value={block.title}
            onChange={(e) => onChange({ ...block, title: e.target.value })}
            placeholder="Title"
            className="rich-edit__input"
          />
          <textarea
            value={block.html}
            onChange={(e) => onChange({ ...block, html: e.target.value })}
            rows={5}
            className="rich-edit__textarea"
            placeholder="Christ Connection HTML"
          />
        </div>
      );

    case 'carry':
      return (
        <div className="rich-edit__block">
          {controls}
          <textarea
            value={block.html}
            onChange={(e) => onChange({ ...block, html: e.target.value })}
            rows={4}
            className="rich-edit__textarea"
            placeholder="Carry-into-your-day HTML"
          />
        </div>
      );

    case 'reflection':
      return (
        <div className="rich-edit__block">
          {controls}
          <input
            type="text"
            value={block.id}
            onChange={(e) => onChange({ ...block, id: e.target.value })}
            placeholder="Anchor id"
            className="rich-edit__input"
          />
          <textarea
            value={block.prompt}
            onChange={(e) => onChange({ ...block, prompt: e.target.value })}
            rows={3}
            className="rich-edit__textarea"
            placeholder="Reflection prompt"
          />
        </div>
      );

    case 'artwork':
      return (
        <div className="rich-edit__block">
          {controls}
          <RegexInput
            label="Match title (regex)"
            value={block.matchTitle ?? null}
            onChange={(v) => onChange({ ...block, matchTitle: v })}
          />
          <RegexInput
            label="Match artist (regex)"
            value={block.matchArtist ?? null}
            onChange={(v) => onChange({ ...block, matchArtist: v })}
          />
          <input
            type="text"
            value={block.caption}
            onChange={(e) => onChange({ ...block, caption: e.target.value })}
            placeholder="Caption"
            className="rich-edit__input"
          />
        </div>
      );

    case 'divider':
      return (
        <div className="rich-edit__block">
          {controls}
          <p className="rich-edit__hint-sm">Renders as a centered · · · separator.</p>
        </div>
      );
  }
}

/* ─── Helper: span → plain text round-trip ──────────────────────────── */
/* For the v1 scripture editor we keep mark spans intact when their text
   doesn't change. When the admin rewrites the line we collapse to a
   single plain-text span — losing marks but never blocking the edit.   */

function spansToText(spans: VerseSpan[]): string {
  return spans.map((s) => s.text).join('');
}
function textToSpans(text: string, prev: VerseSpan[]): VerseSpan[] {
  const prevText = prev.map((s) => s.text).join('');
  if (prevText === text) return prev;
  // When the admin rewrites the line, we collapse to a single plain-text
  // span. Existing mark spans (Christ-Connection highlights, Hebrew
  // anchors) are lost — to preserve them, edit the .ts source directly.
  return [{ kind: 'text', text }];
}

/* ─── Opener / BottomShare / Regex helpers ─────────────────────────── */

interface OpenerEditorProps {
  opener: SerializedRichChapterContent['opener'] | null;
  setOpener: (next: SerializedRichChapterContent['opener'] | null) => void;
}
function OpenerEditor({ opener, setOpener }: OpenerEditorProps) {
  return (
    <section className="rich-edit__field">
      <label className="rich-edit__label">Opener artwork (above the first divider)</label>
      {opener ? (
        <>
          <RegexInput
            label="Match title"
            value={opener.matchTitle ?? null}
            onChange={(v) => setOpener({ ...opener, matchTitle: v })}
          />
          <RegexInput
            label="Match artist"
            value={opener.matchArtist ?? null}
            onChange={(v) => setOpener({ ...opener, matchArtist: v })}
          />
          <input
            type="text"
            value={opener.caption}
            onChange={(e) => setOpener({ ...opener, caption: e.target.value })}
            placeholder="Caption"
            className="rich-edit__input"
          />
          <button type="button" onClick={() => setOpener(null)} className="rich-edit__row-remove">
            Remove opener
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => setOpener({ caption: '' })}
          className="rich-edit__row-btn"
        >
          + Add opener artwork
        </button>
      )}
    </section>
  );
}

interface BottomShareProps {
  bottomShare: SerializedRichChapterContent['bottomShare'] | null;
  setBottomShare: (next: SerializedRichChapterContent['bottomShare'] | null) => void;
}
function BottomShareEditor({ bottomShare, setBottomShare }: BottomShareProps) {
  return (
    <section className="rich-edit__field">
      <label className="rich-edit__label">Bottom share card</label>
      {bottomShare ? (
        <>
          <textarea
            value={bottomShare.quote}
            onChange={(e) => setBottomShare({ ...bottomShare, quote: e.target.value })}
            rows={2}
            className="rich-edit__textarea"
            placeholder="Pull-quote"
          />
          <input
            type="text"
            value={bottomShare.snippet}
            onChange={(e) => setBottomShare({ ...bottomShare, snippet: e.target.value })}
            placeholder="Share snippet"
            className="rich-edit__input"
          />
          <input
            type="text"
            value={bottomShare.ref}
            onChange={(e) => setBottomShare({ ...bottomShare, ref: e.target.value })}
            placeholder="Reference (e.g. Genesis 1:1)"
            className="rich-edit__input"
          />
          <input
            type="text"
            value={bottomShare.label ?? ''}
            onChange={(e) => setBottomShare({ ...bottomShare, label: e.target.value || undefined })}
            placeholder="Optional button label override"
            className="rich-edit__input"
          />
          <button type="button" onClick={() => setBottomShare(null)} className="rich-edit__row-remove">
            Remove share card
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => setBottomShare({ quote: '', snippet: '', ref: '' })}
          className="rich-edit__row-btn"
        >
          + Add bottom share card
        </button>
      )}
    </section>
  );
}

interface RegexInputProps {
  label: string;
  value: { pattern: string; flags?: string } | null;
  onChange: (next: { pattern: string; flags?: string } | null) => void;
}
function RegexInput({ label, value, onChange }: RegexInputProps) {
  const enabled = value !== null;
  return (
    <div className="rich-edit__regex">
      <label className="rich-edit__check">
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => onChange(e.target.checked ? { pattern: '', flags: 'i' } : null)}
        />
        <span>{label}</span>
      </label>
      {enabled && value && (
        <div className="rich-edit__regex-row">
          <input
            type="text"
            value={value.pattern}
            onChange={(e) => onChange({ ...value, pattern: e.target.value })}
            placeholder="pattern"
            className="rich-edit__input"
          />
          <input
            type="text"
            value={value.flags ?? ''}
            onChange={(e) => onChange({ ...value, flags: e.target.value })}
            placeholder="flags"
            className="rich-edit__input rich-edit__input--narrow"
          />
        </div>
      )}
    </div>
  );
}

/* ─── Empty-block factory ─────────────────────────────────────────── */

function makeEmptyBlock(kind: SerializedBlock['kind']): SerializedBlock {
  switch (kind) {
    case 'scripture':
      return { kind: 'scripture', chapter: 1, lines: [{ number: 1, spans: [{ kind: 'text', text: '' }] }] };
    case 'commentary':
      return { kind: 'commentary', html: '' };
    case 'hebrew':
      return { kind: 'hebrew', id: '', title: '', script: '', translit: '', description: '' };
    case 'greek':
      return { kind: 'greek', id: '', title: '', script: '', translit: '', description: '' };
    case 'christ':
      return { kind: 'christ', id: '', title: '', html: '' };
    case 'carry':
      return { kind: 'carry', html: '' };
    case 'reflection':
      return { kind: 'reflection', id: '', prompt: '' };
    case 'artwork':
      return { kind: 'artwork', caption: '' };
    case 'divider':
      return { kind: 'divider' };
  }
}

/* ─── Styles ───────────────────────────────────────────────────────── */

function RichEditorStyles() {
  return (
    <style jsx global>{`
      .rich-edit { display: flex; flex-direction: column; gap: 1.5rem; padding-bottom: 6rem; }
      .rich-edit__head .rich-edit__kicker {
        font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
        color: var(--color-tertiary-label); font-weight: 700; margin: 0;
      }
      .rich-edit__head .rich-edit__title {
        font-size: 24px; font-weight: 700; color: var(--color-label);
        margin: 0.25rem 0 0.5rem;
      }
      .rich-edit__head .rich-edit__hint {
        font-size: 13px; color: var(--color-secondary-label);
        line-height: 1.5; margin: 0; max-width: 56ch;
      }
      .rich-edit__field {
        display: flex; flex-direction: column; gap: 0.5rem;
        background: var(--color-surface); border-radius: 1rem; padding: 1rem 1.125rem;
      }
      .rich-edit__sections {
        display: flex; flex-direction: column; gap: 1rem;
      }
      .rich-edit__section {
        background: var(--color-surface); border: 1px solid var(--color-separator);
        border-radius: 1rem; padding: 1rem 1.125rem; display: flex;
        flex-direction: column; gap: 12px;
      }
      .rich-edit__section-head { display: flex; flex-direction: column; gap: 8px; }
      .rich-edit__section-controls {
        display: flex; gap: 6px; align-items: center; align-self: flex-end;
      }
      .rich-edit__section-controls button {
        font: inherit; font-size: 12px; padding: 4px 10px;
        background: transparent; border: 1px solid var(--color-separator);
        border-radius: 6px; cursor: pointer; color: var(--color-secondary-label);
      }
      .rich-edit__section-controls button:disabled { opacity: 0.4; cursor: not-allowed; }
      .rich-edit__row-head {
        display: flex; align-items: center; justify-content: space-between; gap: 8px;
      }
      .rich-edit__label {
        font-size: 12px; font-weight: 700; color: var(--color-label);
        letter-spacing: 0.04em; text-transform: uppercase;
      }
      .rich-edit__label--lg { font-size: 16px; text-transform: none; letter-spacing: 0; }
      .rich-edit__row-btn {
        font-size: 12.5px; color: var(--color-primary); background: transparent;
        border: 1px solid var(--color-separator); padding: 4px 10px;
        border-radius: 8px; cursor: pointer; font-weight: 600;
      }
      .rich-edit__input, .rich-edit__textarea {
        width: 100%; font: inherit; font-size: 14.5px; color: var(--color-label);
        background: var(--color-bg); border: 1px solid var(--color-separator);
        border-radius: 8px; padding: 10px 12px; line-height: 1.5;
      }
      .rich-edit__input--narrow { max-width: 90px; }
      .rich-edit__input:focus, .rich-edit__textarea:focus {
        outline: 2px solid rgba(0, 122, 255, 0.4); outline-offset: 1px;
      }
      .rich-edit__textarea { resize: vertical; min-height: 64px; }
      .rich-edit__row {
        display: flex; flex-direction: column; gap: 6px;
        padding: 12px; background: var(--color-bg);
        border: 1px solid var(--color-separator); border-radius: 12px;
      }
      .rich-edit__row-actions {
        display: flex; gap: 6px; justify-content: flex-end; align-items: center;
      }
      .rich-edit__row-remove {
        font: inherit; font-size: 12px; padding: 4px 10px; background: transparent;
        border: 1px solid var(--color-separator); border-radius: 6px;
        cursor: pointer; color: #ff3b30;
      }
      .rich-edit__check {
        display: flex; align-items: center; gap: 6px; font-size: 13px;
        color: var(--color-secondary-label); cursor: pointer;
      }
      .rich-edit__hint-sm {
        font-size: 12px; color: var(--color-tertiary-label); margin: 0;
      }
      .rich-edit__block {
        background: var(--color-bg); border: 1px solid var(--color-separator);
        border-radius: 12px; padding: 10px 12px; display: flex; flex-direction: column;
        gap: 8px;
      }
      .rich-edit__block-controls {
        display: flex; align-items: center; gap: 6px;
      }
      .rich-edit__block-kind {
        font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase;
        font-weight: 700; color: var(--color-tertiary-label); margin-right: auto;
      }
      .rich-edit__block-controls button {
        font: inherit; font-size: 12px; padding: 4px 10px;
        background: transparent; border: 1px solid var(--color-separator);
        border-radius: 6px; cursor: pointer; color: var(--color-secondary-label);
      }
      .rich-edit__block-controls button:disabled { opacity: 0.4; cursor: not-allowed; }
      .rich-edit__verses { display: flex; flex-direction: column; gap: 6px; }
      .rich-edit__verse-row { display: flex; gap: 6px; align-items: flex-start; }
      .rich-edit__verse-num { width: 60px; }
      .rich-edit__add-block {
        display: flex; flex-wrap: wrap; gap: 4px; align-items: center; margin-top: 4px;
      }
      .rich-edit__add-block-label {
        font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
        font-weight: 700; color: var(--color-tertiary-label); margin-right: 4px;
      }
      .rich-edit__add-block-btn {
        font: inherit; font-size: 12px; padding: 3px 9px;
        background: transparent; border: 1px solid var(--color-separator);
        border-radius: 999px; cursor: pointer; color: var(--color-primary);
      }
      .rich-edit__regex { display: flex; flex-direction: column; gap: 4px; }
      .rich-edit__regex-row { display: flex; gap: 6px; align-items: center; }
      .rich-edit__save-row {
        position: sticky; bottom: 80px; display: flex; gap: 8px;
        background: var(--color-bg); padding: 8px 0; z-index: 5;
      }
      .rich-edit__save-btn {
        background: #007aff; color: #fff; padding: 8px 16px; border-radius: 10px;
        font-weight: 700; font: inherit; font-size: 14px; border: none; cursor: pointer;
      }
      .rich-edit__save-btn:disabled { opacity: 0.5; cursor: not-allowed; }
      .rich-edit__cancel-btn {
        background: transparent; color: var(--color-label); padding: 8px 16px;
        border: 1px solid var(--color-separator); border-radius: 10px;
        font-weight: 600; font: inherit; font-size: 14px; cursor: pointer;
      }
    `}</style>
  );
}
