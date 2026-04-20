'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import type { ShareContent } from './ShareMenu';

// Defer the share sheet until the user actually asks for it.
const ShareMenu = dynamic(() => import('./ShareMenu'), { ssr: false });

/**
 * Inline share button — place anywhere in a study page to open the share sheet
 * with pre-filled content.
 */
export default function ShareButton({
  content,
  label = 'Share',
  variant = 'pill',
  className = '',
}: {
  content: ShareContent;
  label?: string;
  variant?: 'pill' | 'ghost' | 'icon';
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  const baseClass =
    variant === 'icon'
      ? 'share-btn-icon'
      : variant === 'ghost'
        ? 'share-btn-ghost'
        : 'share-btn-pill';

  return (
    <>
      <button
        type="button"
        className={`${baseClass} ${className}`.trim()}
        onClick={() => setOpen(true)}
        aria-label={label}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7M16 6l-4-4-4 4M12 2v14" />
        </svg>
        {variant !== 'icon' && <span>{label}</span>}
      </button>
      {open && <ShareMenu content={content} onClose={() => setOpen(false)} />}
    </>
  );
}
