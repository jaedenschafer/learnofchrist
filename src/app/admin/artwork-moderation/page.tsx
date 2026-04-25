import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { isAdminSession } from '@/lib/isAdmin';
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

async function loadQueue(): Promise<{ items: QueueItem[]; error?: string }> {
  try {
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
      return { items: [], error: error.message };
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

    return {
      items: rows.map((r) => ({
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
      })),
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[artwork-moderation] crash', err);
    return { items: [], error: msg };
  }
}

export default async function ArtworkModerationPage() {
  // Gate: only signed-in users with is_admin = true may access this page.
  // Falls back gracefully when migration 023 hasn't been applied yet
  // (isAdminSession returns false, page redirects to sign-in).
  const adminViaSession = await isAdminSession();
  if (!adminViaSession) {
    redirect('/auth/sign-in?next=/admin/artwork-moderation');
  }

  const { items, error } = await loadQueue();
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
          marked <strong>Approved</strong> show up to readers. For a fast
          one-at-a-time flow, use{' '}
          <Link
            href="/admin/artwork-review"
            style={{ color: '#007AFF', textDecoration: 'none', fontWeight: 600 }}
          >
            Quick Review
          </Link>
          .
        </p>
      </header>
      {error ? (
        <div
          style={{
            maxWidth: 560,
            margin: '40px auto',
            padding: 24,
            background: '#fff',
            borderRadius: 20,
            border: '1px solid rgba(0,0,0,0.06)',
            fontFamily: '-apple-system, "SF Pro Text", sans-serif',
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FF9500',
              margin: '0 0 6px',
            }}
          >
            Setup needed
          </p>
          <h2 style={{ fontSize: 18, margin: '0 0 8px', color: '#1D1D1F' }}>
            Couldn&rsquo;t load the queue
          </h2>
          <pre
            style={{
              background: '#F5F5F7',
              padding: 10,
              borderRadius: 8,
              fontSize: 12,
              color: '#1D1D1F',
              overflow: 'auto',
              whiteSpace: 'pre-wrap',
              margin: '0 0 10px',
            }}
          >
            {error}
          </pre>
          <p style={{ fontSize: 13, color: '#48484A', margin: 0, lineHeight: 1.5 }}>
            Usually this means <code>SUPABASE_SERVICE_ROLE_KEY</code> isn&rsquo;t set
            in your environment, or you haven&rsquo;t run the artwork moderation
            migration yet.
          </p>
        </div>
      ) : (
        <ReviewList items={items} sessionIsAdmin={adminViaSession} />
      )}
    </div>
  );
}

