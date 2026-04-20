import type { Metadata } from 'next';
import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import QuickReview from './quick-review';
import type { QueueItem } from '../artwork-moderation/review-list';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Quick Review — Admin',
  robots: { index: false, follow: false },
};

interface QueueRow {
  id: string;
  title: string;
  slug: string;
  image_url: string;
  thumbnail_url: string | null;
  moderation_status: 'pending' | 'flagged' | 'rejected' | 'approved';
  moderation_scores: QueueItem['moderation_scores'];
  moderation_notes: string | null;
  moderation_reviewed_at: string | null;
  moderation_reviewed_by: string | null;
  report_count: number | null;
  latest_report_at: string | null;
  artist_id: string | null;
}

/**
 * Loads only the items that need eyes — flagged, pending, or reported.
 * Excludes already-approved/rejected so the quick-review flow stays
 * focused. Use /admin/artwork-moderation for the full grid.
 */
async function loadQueue(): Promise<QueueItem[]> {
  const { data, error } = await supabaseAdmin
    .from('artwork_moderation_queue')
    .select(
      'id, title, slug, image_url, thumbnail_url, moderation_status, moderation_scores, moderation_notes, moderation_reviewed_at, moderation_reviewed_by, report_count, latest_report_at, artist_id',
    )
    .or('moderation_status.in.(flagged,pending),report_count.gt.0')
    .order('latest_report_at', { ascending: false, nullsFirst: false })
    .order('moderation_status', { ascending: true })
    .limit(500);

  if (error) {
    console.error('[artwork-review] query failed', error);
    return [];
  }

  const rows = (data || []) as QueueRow[];
  const artistIds = Array.from(new Set(rows.map((r) => r.artist_id).filter(Boolean) as string[]));
  const artistMap = new Map<string, string>();
  if (artistIds.length) {
    const { data: artists } = await supabaseAdmin
      .from('artists')
      .select('id, name')
      .in('id', artistIds);
    for (const a of artists || []) artistMap.set(a.id, a.name);
  }

  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    slug: r.slug,
    image_url: r.image_url,
    thumbnail_url: r.thumbnail_url,
    moderation_status: r.moderation_status,
    moderation_scores: r.moderation_scores,
    moderation_notes: r.moderation_notes,
    moderation_reviewed_at: r.moderation_reviewed_at,
    moderation_reviewed_by: r.moderation_reviewed_by,
    report_count: r.report_count || 0,
    latest_report_at: r.latest_report_at,
    artist_name: r.artist_id ? artistMap.get(r.artist_id) ?? null : null,
  }));
}

export default async function ArtworkReviewPage() {
  const items = await loadQueue();
  return (
    <div style={{ background: '#F5F5F7', minHeight: '100vh' }}>
      <header
        style={{
          maxWidth: 880,
          margin: '0 auto',
          padding: '20px 16px 8px',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: 12,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#86868B',
              margin: 0,
            }}
          >
            Admin
          </p>
          <h1
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: '#1D1D1F',
              margin: '2px 0 0',
              letterSpacing: '-0.01em',
            }}
          >
            Quick review
          </h1>
        </div>
        <Link
          href="/admin/artwork-moderation"
          style={{
            fontSize: 13,
            color: '#007AFF',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Full queue →
        </Link>
      </header>
      <QuickReview items={items} />
    </div>
  );
}
