'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface ShareContent {
  quote: string;        // Main text — verse or insight
  snippet?: string;     // Supporting sentence
  ref?: string;         // e.g. "Genesis 1:1 · Study Guide"
  variant?: 'verse' | 'insight';
  sourceUrl: string;    // Canonical page URL (used for Copy Link / social share)
  hashtag?: string;
  /** Optional URL of an artwork plate to overlay behind the verse text in
   *  the generated share image. Must be HTTPS and on the host whitelist
   *  enforced by /api/og/share. When omitted, the share image renders on
   *  the dark gradient default. */
  artUrl?: string;
}

type ShareFormat = 'landscape' | 'square' | 'story';

export default function ShareMenu({
  content,
  onClose,
}: {
  content: ShareContent;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState<'link' | 'text' | null>(null);
  // Lazy init detects navigator.share once at mount. ShareMenu is mounted
  // dynamically via createPortal after a user click, so `navigator` is
  // always defined here — but the typeof guard is kept as a belt-and-
  // suspenders safety against any edge-case SSR run.
  const [nativeSupported] = useState(
    () => typeof navigator !== 'undefined' && 'share' in navigator,
  );
  const [format, setFormat] = useState<ShareFormat>('landscape');

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

  const ogUrl = buildOgUrl(content, format);
  const shareUrl = content.sourceUrl;
  const shareText = content.variant === 'insight'
    ? `${content.quote}${content.ref ? ` — ${content.ref}` : ''}`
    : `"${content.quote}"${content.ref ? ` — ${content.ref}` : ''}`;

  const flash = (which: 'link' | 'text') => {
    setCopied(which);
    window.setTimeout(() => setCopied(null), 1600);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      flash('link');
    } catch {}
  };

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
      flash('text');
    } catch {}
  };

  const downloadImage = async () => {
    try {
      const res = await fetch(ogUrl);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `learnofchrist-${slugify(content.ref || 'share')}-${format}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {}
  };

  const nativeShare = async () => {
    if (!('share' in navigator)) return;
    try {
      await (navigator as Navigator & { share: (data: ShareData) => Promise<void> }).share({
        title: content.ref || 'Learn of Christ',
        text: shareText,
        url: shareUrl,
      });
      onClose();
    } catch {
      // user cancelled — no-op
    }
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  return createPortal(
    <div className="share-menu-backdrop" onClick={onClose} role="presentation">
      <div
        className="share-menu"
        role="dialog"
        aria-label="Share this insight"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="share-menu-head">
          <div>
            <p className="share-menu-eyebrow">Share</p>
            <h3 className="share-menu-title">
              {content.variant === 'insight' ? 'Share this insight' : 'Share this verse'}
            </h3>
          </div>
          <button
            type="button"
            className="share-menu-close"
            onClick={onClose}
            aria-label="Close share"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Format toggle — landscape (link previews), square (Instagram
            feed), story (Instagram/WhatsApp story). */}
        <div
          className="share-menu-format"
          role="radiogroup"
          aria-label="Image format"
        >
          {(['landscape', 'square', 'story'] as ShareFormat[]).map((f) => (
            <button
              key={f}
              type="button"
              role="radio"
              aria-checked={format === f}
              className={`share-menu-format-btn ${format === f ? 'is-active' : ''}`}
              onClick={() => setFormat(f)}
            >
              {f === 'landscape' ? 'Link' : f === 'square' ? 'Square' : 'Story'}
            </button>
          ))}
        </div>

        {/* Preview */}
        <div className={`share-menu-preview share-menu-preview--${format}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ogUrl}
            alt="Share card preview"
            className="share-menu-preview-img"
            loading="eager"
            key={ogUrl}
          />
        </div>

        {/* Actions */}
        <div className="share-menu-actions">
          {nativeSupported && (
            <button type="button" className="share-act primary" onClick={nativeShare}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7M16 6l-4-4-4 4M12 2v14" />
              </svg>
              Share…
            </button>
          )}
          <button type="button" className="share-act" onClick={copyLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 14a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 10a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" />
            </svg>
            {copied === 'link' ? 'Link copied' : 'Copy link'}
          </button>
          <button type="button" className="share-act" onClick={copyText}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2h-2M4 9h10a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2z" />
            </svg>
            {copied === 'text' ? 'Text copied' : 'Copy as text'}
          </button>
          <button type="button" className="share-act" onClick={downloadImage}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
            </svg>
            Download image
          </button>
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="share-act"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Post to X
          </a>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="share-act"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </a>
        </div>

        <p className="share-menu-foot">
          Share cards and links point back to your current chapter.
        </p>
      </div>
    </div>,
    document.body,
  );
}

function buildOgUrl(c: ShareContent, format: ShareFormat = 'landscape'): string {
  const params = new URLSearchParams({
    quote: c.quote.slice(0, 320),
    variant: c.variant || 'verse',
    format,
  });
  if (c.snippet) params.set('snippet', c.snippet.slice(0, 240));
  if (c.ref) params.set('ref', c.ref.slice(0, 60));
  if (c.artUrl) params.set('art', c.artUrl);
  return `/api/og/share?${params.toString()}`;
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
