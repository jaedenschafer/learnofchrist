/**
 * Preview: idea-focused Genesis 1 study guide.
 *
 * The existing /study/genesis/1 is a close-reading page with commentary
 * anchored to specific KJV phrases. This preview demonstrates a
 * translation-agnostic alternative: the verse block renders via VerseDisplay
 * (so it swaps with the TranslationSwitcher), and the commentary below talks
 * about the chapter&apos;s ideas rather than its exact wording.
 *
 * Not linked from the main nav on purpose — it&apos;s a comparison artifact for
 * deciding which direction the platform should adopt at scale.
 */

import Link from 'next/link';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import VerseDisplay from '@/components/VerseDisplay';
import GenesisOneIdeas from '@/components/GenesisOneIdeas';
import { getVerses } from '@/lib/supabase';
import { verseExplanations } from '@/data/verse-explanations';

// Filters bar (translation switcher + reading mode) — client component, below fold.
const StudyFilters = dynamic(() => import('@/components/StudyFilters'), {
  loading: () => <div className="h-12" aria-hidden="true" />,
});

// Cache for a day; regenerate in background.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Genesis 1 — Idea-Focused Study (Preview) | Learn of Christ',
  description:
    'A preview of a translation-agnostic study guide for Genesis 1. Switch translations freely — the verse text swaps, the ideas stay.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://learnofchrist.com/study/genesis-one-ideas',
  },
};

export default async function GenesisOneIdeasPage() {
  const bookSlug = 'genesis';
  const chapter = 1;
  const defaultTranslation = 'kjv';
  const initialVerses = await getVerses(bookSlug, chapter, defaultTranslation);

  const explainedVerses = Object.keys(verseExplanations)
    .filter((key) => key.startsWith(`${bookSlug}/${chapter}/`))
    .map((key) => parseInt(key.split('/')[2]));

  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <BreadcrumbNav
          items={[
            { label: 'Study', href: '/study' },
            { label: 'Genesis', href: '/study/genesis' },
            { label: 'Genesis 1 — Ideas preview', href: '#' },
          ]}
        />

        {/* Header */}
        <div className="bg-[color:var(--color-surface)] rounded-3xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="pill bg-[#007AFF]/[0.08] text-[color:var(--color-primary)]">
              Genesis
            </span>
            <span className="pill bg-[#5856D6]/[0.08] text-[#5856D6]">Study Guide</span>
            <span className="pill bg-[#FF9500]/[0.1] text-[#C77700]">Preview · Ideas format</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[color:var(--color-label)] mb-2">
            Genesis 1 — Idea-focused
          </h1>
          <p className="text-base text-[color:var(--color-secondary-label)] mb-3">
            A translation-agnostic read of the first chapter. Switch translations above
            — the verses update, the commentary stays.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[0.8125rem] font-medium">
            <Link
              href="/study/genesis/1"
              className="text-[color:var(--color-primary)] hover:underline"
            >
              Compare to the KJV-anchored version →
            </Link>
            <Link
              href="/bible/genesis/1"
              className="text-[color:var(--color-primary)] hover:underline"
            >
              Just read this chapter →
            </Link>
          </div>
        </div>

        {/* Translation + reading-mode controls */}
        <StudyFilters />

        <div className="space-y-4 mt-4">
          <VerseDisplay
            bookSlug={bookSlug}
            chapter={chapter}
            initialVerses={initialVerses}
            explainedVerses={explainedVerses}
            defaultTranslation={defaultTranslation}
          />

          <GenesisOneIdeas />
        </div>
      </div>
    </div>
  );
}
