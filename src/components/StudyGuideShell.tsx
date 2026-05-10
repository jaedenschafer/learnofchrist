'use client';

import dynamic from 'next/dynamic';
import { useAudience } from '@/lib/AudienceContext';
import type { ArtworkWithArtist } from '@/lib/supabase';
import type { RichChapterContent } from '@/data/study-chapters/types';
import type { KidsChapterContent } from '@/data/kids-chapters/types';

/**
 * Audience-aware shell that picks between RichStudyGuide (adults / youth)
 * and KidsStudyGuide (kids) at render time.
 *
 * Both content variants are sent down from the server as props — the
 * audience is a client-side concern (sourced from localStorage / Supabase
 * via AudienceContext) and we don't want to flash one variant before the
 * other. Sending both is cheap because the kids variant, when authored,
 * is short.
 *
 * When the user picks Kids and no kids variant exists for this chapter,
 * we surface a "Kids version coming soon" banner above the adult guide
 * instead of leaving the page empty.
 */

const RichStudyGuide = dynamic(() => import('./RichStudyGuide'), {
  loading: () => (
    <div className="py-16 text-center text-[color:var(--color-tertiary-label)]">
      Loading study guide…
    </div>
  ),
});

const KidsStudyGuide = dynamic(() => import('./KidsStudyGuide'), {
  loading: () => (
    <div className="py-16 text-center text-[color:var(--color-tertiary-label)]">
      Loading kids guide…
    </div>
  ),
});

interface StudyGuideShellProps {
  rich: RichChapterContent;
  kids: KidsChapterContent | null;
  artworks: ArtworkWithArtist[];
}

export default function StudyGuideShell({
  rich,
  kids,
  artworks,
}: StudyGuideShellProps) {
  const { audience } = useAudience();

  if (audience === 'kids') {
    if (kids) {
      return <KidsStudyGuide content={kids} artworks={artworks} />;
    }
    // No kids guide authored yet — fall back to the adult guide with a
    // banner explaining what's going on. The adult/youth filter still
    // applies (we pass the full RichStudyGuide so it picks the active
    // study level).
    return (
      <>
        <aside
          className="kids-coming-soon-banner"
          role="note"
          style={{
            background: 'rgba(245, 158, 11, 0.08)',
            borderLeft: '4px solid rgba(245, 158, 11, 0.6)',
            borderRadius: '0.5rem',
            padding: '0.875rem 1.125rem',
            margin: '0 0 1.5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(180, 110, 0, 0.9)',
              margin: '0 0 0.25rem',
            }}
          >
            Kids version coming soon
          </p>
          <p
            style={{
              margin: 0,
              fontSize: '0.9375rem',
              color: 'var(--color-secondary-label)',
            }}
          >
            We&apos;re still writing the kids version of this chapter. In the
            meantime, here&apos;s the standard guide — you can switch back to
            kids any time from the filter at the top.
          </p>
        </aside>
        <RichStudyGuide content={rich} artworks={artworks} />
      </>
    );
  }

  return <RichStudyGuide content={rich} artworks={artworks} />;
}
