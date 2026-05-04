'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import type { ShareContent } from './ShareMenu';

const ShareMenu = dynamic(() => import('./ShareMenu'), { ssr: false });

interface Props {
  bookName: string;
  chapter: number;
  bookSlug: string;
  isGenesisOne: boolean;
}

/**
 * "Share this study" row that lives inside the StudyTopBar more-options
 * popover. We can't render <ShareButton> there directly because ShareButton
 * has its own visible trigger; here we just render a row that opens the
 * share menu when clicked.
 */
export default function StudyChapterShareLaunch({
  bookName,
  chapter,
  bookSlug,
  isGenesisOne,
}: Props) {
  const [open, setOpen] = useState(false);

  const sourceUrl =
    (typeof window !== 'undefined' ? window.location.origin : 'https://learnofchrist.com') +
    `/study/${bookSlug}/${chapter}`;

  const content: ShareContent = isGenesisOne
    ? {
        quote: 'How God spoke a world into being — and why every word of it still belongs to you.',
        snippet: 'A deep study guide to Genesis 1: themes, Christ connections, and ideas to sit with this week.',
        ref: 'Genesis 1 · Study Guide',
        variant: 'insight',
        sourceUrl,
      }
    : {
        quote: `${bookName} ${chapter} — themes, discussion questions, and Christ connections.`,
        ref: `${bookName} ${chapter} · Study Guide`,
        variant: 'insight',
        sourceUrl,
      };

  return (
    <>
      <button
        type="button"
        className="study-topbar__menu-row"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7M16 6l-4-4-4 4M12 2v14" />
        </svg>
        Share this study
      </button>
      {open && <ShareMenu content={content} onClose={() => setOpen(false)} />}
    </>
  );
}
