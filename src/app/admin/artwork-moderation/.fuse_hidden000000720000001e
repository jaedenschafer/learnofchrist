'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export interface QueueItem {
  id: string;
  title: string;
  slug: string;
  image_url: string;
  thumbnail_url: string | null;
  moderation_status: 'pending' | 'flagged' | 'rejected' | 'approved';
  moderation_scores: {
    worstScore?: number;
    worstLabel?: string | null;
    reasons?: string[];
    contextFlags?: string[];
    providers?: Array<{ provider: string; ran: boolean; error?: string; labels?: Record<string, number> }>;
    scannedAt?: string;
  } | null;
  moderation_notes: string | null;
  moderation_reviewed_at: string | null;
  moderation_reviewed_by: string | null;
  report_count: number;
  latest_report_at: string | null;
  artist_name?: string | null;
}

type Filter = 'flagged' | 'pending' | 'reported' | 'approved' | 'rejected' | 'all';

export default function ReviewList({
  items,
  sessionIsAdmin = false,
}: {
  items: QueueItem[];
  /** True when the server confirmed the signed-in user has is_admin=true.
   *  When true, fetch calls rely on session cookies and no API key paste
   *  is required. */
  sessionIsAdmin?: boolean;
}) {
  const [filter, setFilter] = useState<Filter>('flagged');
  // Only used as fallback when sessionIsAdmin is false.
  const [adminKey, setAdminKey] = useState('');
  const [busy, setBusy] = useState<string | null>(null);

  // Restore/persist the legacy API key only when we're not using session auth.
  useEffect(() => {
    if (sessionIsAdmin) return;
    try {
      const k = localStorage.getItem('loc-admin-key');
      if (k) setAdminKey(k);
    } catch {}
  }, [sessionIsAdmin]);
  useEffect(() => {
    if (sessionIsAdmin) return;
    try {
      if (adminKey) localStorage.setItem('loc-admin-key', adminKey);
    } catch {}
  }, [adminKey, sessionIsAdmin]);

  const [localStatuses, setLocalStatuses] = useState<Record<string, QueueItem['moderation_status']>>({});

  const effective = (it: QueueItem): QueueItem['moderation_status'] =>
    localStatuses[it.id] || it.moderation_status;

  const filtered = useMemo(() => {
    return items.filter((it) => {
      const s = effective(it);
      if (filter === 'all') return true;
      if (filter === 'reported') return it.report_count > 0;
      return s === filter;
    });
  }, [items, filter, localStatuses]);

  const counts = useMemo(() => {
    const c = { flagged: 0, pending: 0, reported: 0, approved: 0, rejected: 0, all: items.length };
    for (const it of items) {
      const s = effective(it);
      if (s === 'flagged') c.flagged += 1;
      if (s === 'pending') c.pending += 1;
      if (s === 'approved') c.approved += 1;
      if (s === 'rejected') c.rejected += 1;
      if (it.report_count > 0) c.reported += 1;
    }
    return c;
  }, [items, localStatuses]);

  /** Build fetch headers: session-cookie-based when admin, key-based otherwise. */
  const authHeaders = (): Record<string, string> => {
    if (sessionIsAdmin) return { 'Content-Type': 'application/json' };
    return { 'Content-Type': 'application/json', 'x-admin-key': adminKey };
  };

  const act = async (id: string, decision: 'approve' | 'reject' | 'flag' | 'reset') => {
    if (!sessionIsAdmin && !adminKey) {
      alert('Paste your ADMIN_API_KEY above first.');
      return;
    }
    setBusy(id);
    try {
      const res = await fetch('/api/admin/artwork-review', {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify({ artwork_id: id, decision }),
      });
      const json = await res.json();
      if (!res.ok) {
        alert(json.error || 'failed');
      } else {
        setLocalStatuses((s) => ({ ...s, [id]: json.status }));
      }
    } finally {
      setBusy(null);
    }
  };

  const rescan = async (id: string) => {
    if (!sessionIsAdmin && !adminKey) {
      alert('Paste your ADMIN_API_KEY above first.');
      return;
    }
    setBusy(id);
    try {
      const res = await fetch('/api/admin/moderate-artwork', {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify({ artwork_id: id }),
      });
      const json = await res.json();
      if (!res.ok) alert(json.error || 'failed');
      else setLocalStatuses((s) => ({ ...s, [id]: json.decision.status }));
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="mod-queue">
      {!sessionIsAdmin && (
        <div className="mod-queue-auth">
          <label>
            Admin API key
            <input
              type="password"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              placeholder="Paste ADMIN_API_KEY"
              autoComplete="off"
            />
          </label>
        </div>
      )}

      <div className="mod-queue-tabs">
        {(['flagged', 'reported', 'pending', 'approved', 'rejected', 'all'] as Filter[]).map(
          (f) => (
            <button
              key={f}
              type="button"
              className={`mod-queue-tab ${filter === f ? 'is-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f} <span>{counts[f]}</span>
            </button>
          ),
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="mod-queue-empty">Nothing in this view.</p>
      ) : (
        <ul className="mod-queue-list">
          {filtered.map((it) => {
            const status = effective(it);
            const scores = it.moderation_scores;
            return (
              <li key={it.id} className={`mod-queue-row mod-status-${status}`}>
                <div className="mod-queue-thumb">
                  <Image
                    src={it.thumbnail_url || it.image_url}
                    alt={it.title}
                    width={240}
                    height={240}
                    unoptimized
                  />
                </div>
                <div className="mod-queue-meta">
                  <h3>{it.title}</h3>
                  {it.artist_name && <p className="mod-queue-artist">{it.artist_name}</p>}
                  <div className="mod-queue-badges">
                    <span className={`mod-badge mod-badge-${status}`}>{status}</span>
                    {it.report_count > 0 && (
                      <span className="mod-badge mod-badge-report">
                        {it.report_count} report{it.report_count === 1 ? '' : 's'}
                      </span>
                    )}
                    {scores?.worstLabel && scores.worstScore !== undefined && (
                      <span className="mod-badge mod-badge-score">
                        {scores.worstLabel}: {Math.round((scores.worstScore || 0) * 100)}%
                      </span>
                    )}
                    {scores?.contextFlags?.map((f) => (
                      <span key={f} className="mod-badge mod-badge-context">
                        {f}
                      </span>
                    ))}
                  </div>
                  {!!scores?.reasons?.length && (
                    <ul className="mod-queue-reasons">
                      {scores.reasons.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mod-queue-actions">
                    <button
                      type="button"
                      onClick={() => act(it.id, 'approve')}
                      disabled={busy === it.id}
                      className="mod-btn mod-btn-approve"
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      onClick={() => act(it.id, 'reject')}
                      disabled={busy === it.id}
                      className="mod-btn mod-btn-reject"
                    >
                      Reject
                    </button>
                    <button
                      type="button"
                      onClick={() => act(it.id, 'flag')}
                      disabled={busy === it.id}
                      className="mod-btn mod-btn-flag"
                    >
                      Flag
                    </button>
                    <button
                      type="button"
                      onClick={() => rescan(it.id)}
                      disabled={busy === it.id}
                      className="mod-btn mod-btn-rescan"
                    >
                      Re-scan
                    </button>
                    <a
                      href={it.image_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mod-btn mod-btn-open"
                    >
                      Open full
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <style jsx>{`
        .mod-queue { max-width: 1100px; margin: 0 auto; padding: 24px 16px 80px; }
        .mod-queue-tabs { display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 1.25rem; }
        .mod-queue-tab {
          text-transform: capitalize; padding: 6px 12px; border-radius: 999px;
          background: #F5F5F7; color: #48484A; border: none; cursor: pointer;
          font-size: 13px; font-weight: 600;
        }
        .mod-queue-tab.is-active { background: #1D1D1F; color: #fff; }
        .mod-queue-tab span {
          opacity: 0.6; margin-left: 4px; font-weight: 500;
        }
        .mod-queue-empty { color: #86868B; padding: 3rem 0; text-align: center; }
        .mod-queue-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; }
        .mod-queue-row {
          display: grid; grid-template-columns: 240px 1fr; gap: 16px;
          background: #fff; border: 1px solid rgba(0,0,0,0.06);
          border-radius: 16px; padding: 12px;
        }
        .mod-queue-row.mod-status-approved { border-left: 3px solid #34C759; }
        .mod-queue-row.mod-status-flagged { border-left: 3px solid #FF9500; }
        .mod-queue-row.mod-status-rejected { border-left: 3px solid #FF3B30; }
        .mod-queue-row.mod-status-pending { border-left: 3px solid #8E8E93; }
        .mod-queue-thumb img {
          width: 240px; height: 240px; object-fit: cover;
          border-radius: 8px; background: #F5F5F7;
        }
        .mod-queue-meta h3 { margin: 0 0 4px; font-size: 16px; }
        .mod-queue-artist { color: #86868B; font-size: 13px; margin: 0 0 8px; }
        .mod-queue-badges { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 8px; }
        .mod-badge {
          font-size: 10.5px; padding: 3px 7px; border-radius: 6px;
          background: #F5F5F7; color: #48484A; font-weight: 600;
          text-transform: lowercase;
        }
        .mod-badge-approved { background: #34C759; color: #fff; }
        .mod-badge-flagged { background: #FF9500; color: #fff; }
        .mod-badge-rejected { background: #FF3B30; color: #fff; }
        .mod-badge-pending { background: #8E8E93; color: #fff; }
        .mod-badge-report { background: #FF2D55; color: #fff; }
        .mod-badge-score { background: #5856D6; color: #fff; }
        .mod-badge-context { background: #1D1D1F; color: #fff; }
        .mod-queue-reasons {
          font-size: 12px; color: #86868B; margin: 0 0 8px; padding-left: 16px;
        }
        .mod-queue-reasons li { margin: 2px 0; }
        .mod-queue-actions { display: flex; gap: 6px; flex-wrap: wrap; }
        .mod-btn {
          padding: 6px 12px; border-radius: 8px; border: none;
          font-size: 13px; font-weight: 600; cursor: pointer;
          font-family: inherit; text-decoration: none; display: inline-block;
        }
        .mod-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .mod-btn-approve { background: #34C759; color: #fff; }
        .mod-btn-reject { background: #FF3B30; color: #fff; }
        .mod-btn-flag { background: #FF9500; color: #fff; }
        .mod-btn-rescan { background: #5856D6; color: #fff; }
        .mod-btn-open { background: #F5F5F7; color: #1D1D1F; }

        @media (max-width: 640px) {
          .mod-queue-row { grid-template-columns: 1fr; }
          .mod-queue-thumb img { width: 100%; height: auto; aspect-ratio: 1; }
        }
      `}</style>
    </div>
  );
}
