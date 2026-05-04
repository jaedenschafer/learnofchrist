import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { isCurrentUserAdmin } from '@/lib/isAdmin';
import { getCurrentUser } from '@/lib/supabase/server';
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

interface LoadResult {
  items: QueueItem[];
  error?: string;
  setupHint?: string;
  totalArtworks: number;
}

/**
 * Loads only the items that need eyes — flagged, pending, or reported.
 * Excludes already-approved/rejected so the quick-review flow stays
 * focused. Use /admin/artwork-moderation for the full grid.
 */
async function loadQueue(): Promise<LoadResult> {
  // The whole thing is wrapped so any thrown error from the Supabase client
  // (missing env vars, missing view, permission denied, network hiccup)
  // surfaces as a setup card instead of a 500.
  try {
    // Total artworks (for the "no items to review" breakdown)
    let totalArtworks = 0;
    {
      const { count, error: countErr } = await supabaseAdmin
        .from('artworks')
        .select('*', { count: 'exact', head: true });
      if (countErr) {
        return {
          items: [],
          error: countErr.message,
          setupHint: hintForError(countErr.message),
          totalArtworks: 0,
        };
      }
      totalArtworks = count || 0;
    }

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
      return {
        items: [],
        error: error.message || 'Unknown query error',
        setupHint: hintForError(error.message || ''),
        totalArtworks,
      };
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

    const items = rows.map((r) => ({
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
    return { items, totalArtworks };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[artwork-review] crash', err);
    return {
      items: [],
      error: msg,
      setupHint: hintForError(msg),
      totalArtworks: 0,
    };
  }
}

function hintForError(msg: string): string {
  if (msg.includes('NEXT_PUBLIC_SUPABASE_URL')) {
    return 'NEXT_PUBLIC_SUPABASE_URL is missing from your environment. Set it in Vercel → Project → Settings → Environment Variables (and redeploy).';
  }
  if (msg.includes('SUPABASE_SERVICE_ROLE_KEY')) {
    return 'SUPABASE_SERVICE_ROLE_KEY is missing. Copy it from your Supabase project → Settings → API → service_role key, then add it in Vercel → Project → Settings → Environment Variables (NOT prefixed with NEXT_PUBLIC_), and redeploy.';
  }
  if (
    msg.includes('artwork_moderation_queue') ||
    msg.includes('moderation_status') ||
    msg.includes('does not exist') ||
    msg.toLowerCase().includes('relation')
  ) {
    return 'The moderation tables/view do not exist yet. Open the Supabase SQL editor and run the artwork_moderation migration once.';
  }
  if (msg.toLowerCase().includes('permission') || msg.toLowerCase().includes('rls')) {
    return 'Supabase returned a permissions error. Make sure you set SUPABASE_SERVICE_ROLE_KEY (not the anon key) in your prod env — the admin queue needs the service-role key to bypass RLS.';
  }
  return 'Unknown error. Expand the detail below for the raw message.';
}

export default async function ArtworkReviewPage() {
  const user = await getCurrentUser();
  if (!user) redirect('/auth/sign-in?next=/admin/artwork-review');
  if (!(await isCurrentUserAdmin())) {
    return (
      <div style={{ background: '#F5F5F7', minHeight: '100vh', padding: '80px 20px' }}>
        <div style={{ ...setupCardStyle, textAlign: 'center' }}>
          <h1 style={{ fontSize: 22, margin: '0 0 8px', color: '#1D1D1F' }}>Not authorized</h1>
          <p style={{ ...setupBodyStyle, margin: 0 }}>
            Your account doesn&rsquo;t have admin access.
          </p>
        </div>
      </div>
    );
  }

  const { items, error, setupHint, totalArtworks } = await loadQueue();

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
            Admin · {totalArtworks.toLocaleString()} artwork{totalArtworks === 1 ? '' : 's'} total
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

      {setupHint ? (
        <div style={setupCardStyle}>
          <p style={setupEyebrowStyle}>Setup needed</p>
          <h2 style={setupTitleStyle}>Moderation not ready yet</h2>
          <p style={setupBodyStyle}>{setupHint}</p>
          <details style={{ marginTop: 12 }}>
            <summary style={{ fontSize: 12, color: '#86868B', cursor: 'pointer' }}>
              Error detail
            </summary>
            <pre style={setupErrStyle}>{error}</pre>
          </details>
          <ol style={setupListStyle}>
            <li>
              Open the Supabase SQL editor and run the artwork_moderation
              migration plus <code>023_profiles_admin_flag.sql</code>.
            </li>
            <li>
              Mark your profile as admin: <code>update profiles set is_admin = true where id = &lt;your uuid&gt;</code>.
            </li>
            <li>
              Run <code>node scripts/moderate-all-artworks.mjs</code> to scan
              the existing library.
            </li>
            <li>Reload this page — items will appear.</li>
          </ol>
        </div>
      ) : items.length === 0 && totalArtworks > 0 ? (
        <div style={setupCardStyle}>
          <p style={setupEyebrowStyle}>Nothing in the queue</p>
          <h2 style={setupTitleStyle}>No artworks need review right now</h2>
          <p style={setupBodyStyle}>
            All {totalArtworks.toLocaleString()} artworks have been reviewed
            or none have been scanned yet. If you just added new images, run
            the bulk scanner to flag anything that needs eyes:
          </p>
          <pre style={setupErrStyle}>node scripts/moderate-all-artworks.mjs</pre>
          <p style={setupBodyStyle}>
            You can also review approved items from the{' '}
            <Link href="/admin/artwork-moderation" style={{ color: '#007AFF' }}>
              full queue
            </Link>
            .
          </p>
        </div>
      ) : items.length === 0 ? (
        <div style={setupCardStyle}>
          <p style={setupEyebrowStyle}>No artworks yet</p>
          <h2 style={setupTitleStyle}>The artwork library is empty</h2>
          <p style={setupBodyStyle}>
            Add some via the ingest scripts under <code>scripts/ingest-*.mjs</code>,
            then come back here to review them.
          </p>
        </div>
      ) : (
        <QuickReview items={items} />
      )}
    </div>
  );
}

const setupCardStyle: React.CSSProperties = {
  maxWidth: 560,
  margin: '40px auto',
  padding: 28,
  background: '#fff',
  borderRadius: 20,
  border: '1px solid rgba(0,0,0,0.06)',
  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
};
const setupEyebrowStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#FF9500',
  margin: '0 0 6px',
};
const setupTitleStyle: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 700,
  color: '#1D1D1F',
  margin: '0 0 10px',
  letterSpacing: '-0.01em',
};
const setupBodyStyle: React.CSSProperties = {
  fontSize: 14,
  color: '#48484A',
  margin: '0 0 10px',
  lineHeight: 1.5,
};
const setupErrStyle: React.CSSProperties = {
  background: '#F5F5F7',
  padding: 10,
  borderRadius: 8,
  fontSize: 12,
  color: '#1D1D1F',
  overflow: 'auto',
  margin: '0 0 10px',
  fontFamily: 'SF Mono, Menlo, monospace',
  whiteSpace: 'pre-wrap',
};
const setupListStyle: React.CSSProperties = {
  fontSize: 13,
  color: '#48484A',
  paddingLeft: 18,
  lineHeight: 1.6,
  margin: 0,
};
