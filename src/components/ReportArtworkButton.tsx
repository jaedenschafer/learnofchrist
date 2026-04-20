'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Small flag button that sits on an artwork tile. Opens a compact
 * "Report this image" popover with a reason textarea and a Send button.
 * Posts to /api/report-artwork.
 *
 * Zero friction — no account needed, just a one-click safety valve.
 */
export default function ReportArtworkButton({
  artworkId,
  artworkTitle,
}: {
  artworkId: string;
  artworkTitle: string;
}) {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState('');
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const send = async () => {
    setBusy(true);
    try {
      const res = await fetch('/api/report-artwork', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          artwork_id: artworkId,
          reason: reason || undefined,
          page_url: typeof window !== 'undefined' ? window.location.href : undefined,
        }),
      });
      if (res.ok) {
        setSent(true);
        window.setTimeout(() => {
          setOpen(false);
          setSent(false);
          setReason('');
        }, 1600);
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="report-artwork-wrap">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setOpen((v) => !v);
        }}
        className="report-artwork-btn"
        aria-label={`Report ${artworkTitle}`}
        title="Report this image"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V4h12l-2 4 2 4H4" />
        </svg>
      </button>
      {open && (
        <div
          ref={panelRef}
          className="report-artwork-panel"
          role="dialog"
          aria-label={`Report ${artworkTitle}`}
          onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}
        >
          {sent ? (
            <p className="report-artwork-thanks">Thanks — we&rsquo;ll review.</p>
          ) : (
            <>
              <p className="report-artwork-title">Report this image</p>
              <p className="report-artwork-sub">We&rsquo;ll pull it from the feed until a reviewer looks.</p>
              <textarea
                className="report-artwork-textarea"
                placeholder="What's wrong? (optional)"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={2}
              />
              <div className="report-artwork-actions">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="report-artwork-cancel"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={send}
                  disabled={busy}
                  className="report-artwork-send"
                >
                  {busy ? 'Sending…' : 'Send report'}
                </button>
              </div>
            </>
          )}
        </div>
      )}
      <style jsx>{`
        .report-artwork-wrap {
          position: absolute;
          top: 8px;
          right: 8px;
          z-index: 5;
        }
        .report-artwork-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: none;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2s, background 0.2s;
        }
        .report-artwork-wrap:focus-within .report-artwork-btn,
        :global(.group):hover .report-artwork-btn {
          opacity: 1;
        }
        .report-artwork-btn:hover {
          background: #FF2D55;
        }
        .report-artwork-btn svg { width: 14px; height: 14px; }
        .report-artwork-panel {
          position: absolute;
          top: 36px;
          right: 0;
          min-width: 240px;
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 14px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
          padding: 12px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          text-align: left;
          opacity: 1 !important;
        }
        .report-artwork-title {
          font-size: 13px;
          font-weight: 700;
          color: #1D1D1F;
          margin: 0 0 2px;
        }
        .report-artwork-sub {
          font-size: 11.5px;
          color: #86868B;
          margin: 0 0 8px;
          line-height: 1.35;
        }
        .report-artwork-textarea {
          width: 100%;
          padding: 6px 8px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          font-family: inherit;
          font-size: 12.5px;
          color: #1D1D1F;
          resize: none;
          margin-bottom: 8px;
        }
        .report-artwork-textarea::placeholder { color: #AEAEB2; }
        .report-artwork-textarea:focus { outline: none; border-color: #007AFF; }
        .report-artwork-actions {
          display: flex;
          gap: 6px;
          justify-content: flex-end;
        }
        .report-artwork-cancel,
        .report-artwork-send {
          border: none;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 10px;
          cursor: pointer;
          font-family: inherit;
        }
        .report-artwork-cancel {
          background: #F5F5F7;
          color: #48484A;
        }
        .report-artwork-send {
          background: #FF2D55;
          color: #fff;
        }
        .report-artwork-send:disabled { opacity: 0.5; cursor: not-allowed; }
        .report-artwork-thanks {
          margin: 0;
          font-size: 13px;
          color: #34C759;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
