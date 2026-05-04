'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { QueueItem } from '../artwork-moderation/review-list';

type Action = 'approve' | 'reject' | 'flag' | 'skip';

interface Decisions {
  // Local-only record so the UI can show final counts + undo the last one
  [id: string]: 'approved' | 'rejected' | 'flagged' | 'skipped';
}

/**
 * One-at-a-time review flow. Shows a single flagged/pending/reported image
 * at max viewport size, with big Approve / Reject buttons and keyboard
 * shortcuts (A = approve, X = reject, F = flag, S / → = skip, U = undo).
 */
export default function QuickReview({ items }: { items: QueueItem[] }) {
  const [decisions, setDecisions] = useState<Decisions>({});
  const [history, setHistory] = useState<string[]>([]); // ids in order acted on
  const [cursor] = useState(0);
  const [busy, setBusy] = useState(false);

  // The queue — flagged first (highest priority), then reported, then pending.
  // Skips anything already acted on in this session.
  const queue = useMemo(() => {
    const priority = (it: QueueItem): number => {
      if (it.moderation_status === 'rejected') return 99;
      if (it.moderation_status === 'approved') return 90;
      if (it.report_count > 0) return 0;
      if (it.moderation_status === 'flagged') return 1;
      if (it.moderation_status === 'pending') return 2;
      return 3;
    };
    return [...items].sort((a, b) => priority(a) - priority(b));
  }, [items]);

  const remaining = queue.filter((it) => !decisions[it.id]);
  const current = remaining[cursor] || null;
  const doneCount = Object.keys(decisions).length;
  const totalCount = queue.length;

  const act = useCallback(async (action: Action) => {
    if (!current || busy) return;
    if (action === 'skip') {
      setDecisions((d) => ({ ...d, [current.id]: 'skipped' }));
      setHistory((h) => [...h, current.id]);
      return;
    }
    setBusy(true);
    try {
      const res = await fetch('/api/admin/artwork-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ artwork_id: current.id, decision: action }),
      });
      const json = await res.json();
      if (!res.ok) {
        alert(json.error || 'failed');
        return;
      }
      const nextStatus =
        action === 'approve' ? 'approved' :
        action === 'reject'  ? 'rejected' :
        'flagged';
      setDecisions((d) => ({ ...d, [current.id]: nextStatus }));
      setHistory((h) => [...h, current.id]);
    } finally {
      setBusy(false);
    }
  }, [current, busy]);

  const undo = useCallback(async () => {
    const lastId = history[history.length - 1];
    if (!lastId) return;
    const prev = decisions[lastId];
    setHistory((h) => h.slice(0, -1));
    setDecisions((d) => {
      const next = { ...d };
      delete next[lastId];
      return next;
    });
    if (prev && prev !== 'skipped') {
      await fetch('/api/admin/artwork-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ artwork_id: lastId, decision: 'reset' }),
      });
    }
  }, [history, decisions]);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT' || (e.target as HTMLElement)?.tagName === 'TEXTAREA') return;
      if (e.key === 'a' || e.key === 'A') { e.preventDefault(); act('approve'); }
      else if (e.key === 'x' || e.key === 'X') { e.preventDefault(); act('reject'); }
      else if (e.key === 'f' || e.key === 'F') { e.preventDefault(); act('flag'); }
      else if (e.key === 's' || e.key === 'S' || e.key === 'ArrowRight') { e.preventDefault(); act('skip'); }
      else if (e.key === 'u' || e.key === 'U' || e.key === 'ArrowLeft') { e.preventDefault(); undo(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [act, undo]);

  // ── Empty state ──
  if (!current) {
    return (
      <div className="qr-empty">
        <p className="qr-empty-emoji">✓</p>
        <h2>Queue&rsquo;s clear</h2>
        <p>
          Reviewed {doneCount} of {totalCount}. Nothing else waiting.
        </p>
        <div className="qr-empty-stats">
          <span><strong>{Object.values(decisions).filter((v) => v === 'approved').length}</strong> approved</span>
          <span><strong>{Object.values(decisions).filter((v) => v === 'rejected').length}</strong> rejected</span>
          <span><strong>{Object.values(decisions).filter((v) => v === 'flagged').length}</strong> flagged</span>
          <span><strong>{Object.values(decisions).filter((v) => v === 'skipped').length}</strong> skipped</span>
        </div>
        <div className="qr-empty-links">
          <a href="/admin/artwork-moderation">Open full queue</a>
          <button type="button" onClick={() => window.location.reload()}>Refresh</button>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }

  const scores = current.moderation_scores;
  const progress = Math.round((doneCount / Math.max(totalCount, 1)) * 100);

  return (
    <div className="qr-shell">
      <div className="qr-progress">
        <div className="qr-progress-bar">
          <div className="qr-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="qr-progress-text">
          {doneCount} of {totalCount} · {remaining.length - 1} more after this
        </p>
      </div>

      <div className="qr-stage">
        <div className="qr-image">
          <Image
            src={current.image_url}
            alt={current.title}
            width={1200}
            height={1200}
            unoptimized
            priority
          />
        </div>

        <div className="qr-meta">
          <h2>{current.title}</h2>
          {current.artist_name && <p className="qr-artist">{current.artist_name}</p>}
          <div className="qr-badges">
            <span className={`qr-badge qr-status-${current.moderation_status}`}>
              {current.moderation_status}
            </span>
            {current.report_count > 0 && (
              <span className="qr-badge qr-badge-report">
                {current.report_count} report{current.report_count === 1 ? '' : 's'}
              </span>
            )}
            {scores?.worstLabel && scores?.worstScore !== undefined && (
              <span className="qr-badge qr-badge-score">
                {scores.worstLabel}: {Math.round((scores.worstScore || 0) * 100)}%
              </span>
            )}
            {scores?.contextFlags?.map((f) => (
              <span key={f} className="qr-badge qr-badge-context">{f}</span>
            ))}
          </div>
          {!!scores?.reasons?.length && (
            <ul className="qr-reasons">
              {scores.reasons.map((r, i) => (<li key={i}>{r}</li>))}
            </ul>
          )}
        </div>
      </div>

      <div className="qr-actions">
        <button
          type="button"
          className="qr-btn qr-btn-undo"
          onClick={undo}
          disabled={busy || history.length === 0}
          title="Undo last (U)"
        >
          ← Undo
        </button>
        <button
          type="button"
          className="qr-btn qr-btn-reject"
          onClick={() => act('reject')}
          disabled={busy}
          title="Reject (X)"
        >
          ✗ Reject
        </button>
        <button
          type="button"
          className="qr-btn qr-btn-flag"
          onClick={() => act('flag')}
          disabled={busy}
          title="Needs another look (F)"
        >
          ⚑ Flag
        </button>
        <button
          type="button"
          className="qr-btn qr-btn-skip"
          onClick={() => act('skip')}
          disabled={busy}
          title="Skip (S)"
        >
          Skip →
        </button>
        <button
          type="button"
          className="qr-btn qr-btn-approve"
          onClick={() => act('approve')}
          disabled={busy}
          title="Approve (A)"
        >
          ✓ Approve
        </button>
      </div>

      <p className="qr-keys">
        <kbd>A</kbd> approve · <kbd>X</kbd> reject · <kbd>F</kbd> flag · <kbd>S</kbd> skip · <kbd>U</kbd> undo
      </p>
      <a className="qr-image-link" href={current.image_url} target="_blank" rel="noopener noreferrer">
        Open full-size image ↗
      </a>

      <style jsx>{styles}</style>
    </div>
  );
}

const styles = `
  .qr-empty {
    max-width: 440px;
    margin: 80px auto;
    padding: 32px;
    background: #fff;
    border-radius: 20px;
    border: 1px solid rgba(0,0,0,0.06);
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
  }
  .qr-empty h2 {
    font-size: 24px; margin: 0 0 8px; color: #1D1D1F;
  }
  .qr-empty p {
    color: #86868B; font-size: 14px; margin: 0 0 16px;
  }

  .qr-empty-emoji {
    font-size: 48px; color: #34C759; margin: 0 0 12px; line-height: 1;
  }
  .qr-empty-stats {
    display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
    font-size: 13px; color: #48484A; margin: 16px 0 24px;
  }
  .qr-empty-stats strong { color: #1D1D1F; }
  .qr-empty-links { display: flex; gap: 10px; justify-content: center; }
  .qr-empty-links a, .qr-empty-links button {
    padding: 8px 14px; border-radius: 999px; border: none;
    background: #F5F5F7; color: #1D1D1F; font: inherit; font-weight: 600;
    text-decoration: none; font-size: 13px; cursor: pointer;
  }

  .qr-shell {
    max-width: 880px; margin: 0 auto; padding: 16px 16px 24px;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
  }
  .qr-progress { margin-bottom: 14px; }
  .qr-progress-bar {
    height: 4px; background: rgba(0,0,0,0.06); border-radius: 2px;
    overflow: hidden;
  }
  .qr-progress-fill {
    height: 100%; background: linear-gradient(90deg, #007AFF, #5856D6);
    transition: width 0.3s;
  }
  .qr-progress-text {
    font-size: 12px; color: #86868B; margin: 6px 0 0; text-align: center;
  }

  .qr-stage {
    background: #fff; border-radius: 20px; border: 1px solid rgba(0,0,0,0.06);
    overflow: hidden;
    margin-bottom: 16px;
    display: grid;
    grid-template-columns: 1fr 280px;
  }
  .qr-image {
    display: flex; align-items: center; justify-content: center;
    background: #1D1D1F; min-height: 520px;
  }
  .qr-image :global(img) {
    max-width: 100%; max-height: 70vh; width: auto !important; height: auto !important;
    object-fit: contain;
  }
  .qr-meta { padding: 20px; }
  .qr-meta h2 {
    margin: 0 0 4px; font-size: 20px; font-weight: 700; color: #1D1D1F;
    line-height: 1.2;
  }
  .qr-artist { color: #86868B; font-size: 13px; margin: 0 0 12px; }

  .qr-badges { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
  .qr-badge {
    font-size: 10.5px; padding: 3px 8px; border-radius: 6px;
    font-weight: 600; text-transform: lowercase;
    background: #F5F5F7; color: #48484A;
  }
  .qr-status-flagged { background: #FF9500; color: #fff; }
  .qr-status-pending { background: #8E8E93; color: #fff; }
  .qr-status-approved { background: #34C759; color: #fff; }
  .qr-status-rejected { background: #FF3B30; color: #fff; }
  .qr-badge-report { background: #FF2D55; color: #fff; }
  .qr-badge-score { background: #5856D6; color: #fff; }
  .qr-badge-context { background: #1D1D1F; color: #fff; }

  .qr-reasons {
    font-size: 12px; color: #48484A; margin: 0; padding-left: 16px;
  }
  .qr-reasons li { margin: 2px 0; }

  .qr-actions {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 6px;
    margin-bottom: 12px;
  }
  .qr-btn {
    padding: 14px 8px; border-radius: 12px; border: none;
    font: inherit; font-size: 15px; font-weight: 700; cursor: pointer;
    transition: transform 0.08s, background 0.15s;
  }
  .qr-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .qr-btn:not(:disabled):active { transform: scale(0.97); }
  .qr-btn-approve { background: #34C759; color: #fff; }
  .qr-btn-reject { background: #FF3B30; color: #fff; }
  .qr-btn-flag { background: #FF9500; color: #fff; }
  .qr-btn-skip { background: #F5F5F7; color: #1D1D1F; }
  .qr-btn-undo { background: #F5F5F7; color: #86868B; }

  .qr-keys {
    text-align: center; font-size: 12px; color: #86868B;
    margin: 0 0 8px;
  }
  .qr-keys kbd {
    background: #F5F5F7; padding: 2px 6px; border-radius: 4px;
    font-family: 'SF Mono', Menlo, monospace; font-size: 11px;
    color: #1D1D1F; border: 1px solid rgba(0,0,0,0.06);
  }
  .qr-image-link {
    display: block; text-align: center; font-size: 12px;
    color: #007AFF; text-decoration: none;
  }
  .qr-image-link:hover { text-decoration: underline; }

  @media (max-width: 720px) {
    .qr-stage { grid-template-columns: 1fr; }
    .qr-image { min-height: 300px; }
    .qr-image :global(img) { max-height: 55vh; }
    .qr-actions { grid-template-columns: repeat(2, 1fr); }
    .qr-btn-undo { grid-column: 1 / -1; }
  }
`;
