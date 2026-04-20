import type { Metadata } from 'next';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import ReviewList, { type QueueItem } from './review-list';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Artwork Moderation — Admin',
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

async function loadQueue(): Promise<QueueItem[]> {
  const { data, error } = await supabaseAdmin
    .from('artwork_moderation_queue')
    .select(
      'id, title, slug, image_url, thumbnail_url, moderation_status, moderation_scores, moderation_notes, moderation_reviewed_at, moderation_reviewed_by, report_count, latest_report_at, artist_id',
    )
    .order('latest_report_at', { ascending: false, nullsFirst: false })
    .order('moderation_status', { ascending: true })
    .limit(500);
  if (error) {
    console.error('[artwork-moderation] query failed', error);
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

export default async function ArtworkModerationPage() {
  const items = await loadQueue();
  return (
    <div style={{ background: '#F5F5F7', minHeight: '100vh' }}>
      <header
        style={{
          padding: '24px 20px 0',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
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
            fontSize: 28,
            fontWeight: 700,
            color: '#1D1D1F',
            margin: '4px 0 6px',
            letterSpacing: '-0.01em',
          }}
        >
          Artwork moderation
        </h1>
        <p style={{ fontSize: 14, color: '#48484A', margin: 0, maxWidth: 640 }}>
          Flagged, reported, or pending artwork awaiting review. Only items
          marked <strong>Approved</strong> show up to readers. Paste your
          ADMIN_API_KEY below to unlock actions.
        </p>
      </header>
      <ReviewList items={items} />
    </div>
  );
}
