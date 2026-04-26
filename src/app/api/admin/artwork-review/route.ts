import { NextResponse, type NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { isAdmin } from '@/lib/isAdmin';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

/**
 * POST /api/admin/artwork-review
 * Body: {
 *   artwork_id: string,
 *   decision: 'approve' | 'reject' | 'flag' | 'reset',
 *   notes?: string,
 *   reviewer?: string,
 * }
 */
export async function POST(req: NextRequest) {
  if (!(await isAdmin(req))) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  try {
    return await handle(req);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

async function handle(req: NextRequest) {
  let body: {
    artwork_id?: string;
    decision?: 'approve' | 'reject' | 'flag' | 'reset';
    notes?: string;
    reviewer?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'bad json' }, { status: 400 });
  }

  if (!body.artwork_id || !body.decision) {
    return NextResponse.json({ error: 'missing fields' }, { status: 400 });
  }

  const statusMap = {
    approve: 'approved',
    reject: 'rejected',
    flag: 'flagged',
    reset: 'pending',
  } as const;
  const newStatus = statusMap[body.decision];
  if (!newStatus) {
    return NextResponse.json({ error: 'invalid decision' }, { status: 400 });
  }

  // Pull the artwork's slug + every chapter it anchors to BEFORE the update.
  // We need this for ISR revalidation regardless of whether the decision
  // makes the work visible or hides it — both cases change what those pages
  // should render.
  const { data: artwork } = await supabaseAdmin
    .from('artworks')
    .select('slug')
    .eq('id', body.artwork_id)
    .maybeSingle();

  const { data: refs } = await supabaseAdmin
    .from('artwork_scripture_refs')
    .select('chapter, book:books ( slug )')
    .eq('artwork_id', body.artwork_id);

  const { error } = await supabaseAdmin
    .from('artworks')
    .update({
      moderation_status: newStatus,
      moderation_notes: body.notes ?? null,
      moderation_reviewed_at: new Date().toISOString(),
      moderation_reviewed_by: body.reviewer ?? 'admin',
    })
    .eq('id', body.artwork_id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Best-effort revalidation. ISR is a 24h window on the affected pages, so
  // without this admins would have to wait up to a day to see their decision
  // reflected on the public site.
  type RefRow = { chapter: number; book: { slug: string } | { slug: string }[] | null };
  const touched = new Set<string>();
  touched.add('/art');
  if (artwork?.slug) {
    touched.add(`/art/artwork/${artwork.slug}`);
  }
  for (const r of (refs ?? []) as RefRow[]) {
    const book = Array.isArray(r.book) ? r.book[0] : r.book;
    if (!book?.slug) continue;
    touched.add(`/art/book/${book.slug}`);
    touched.add(`/art/book/${book.slug}/${r.chapter}`);
    touched.add(`/study/${book.slug}/${r.chapter}`);
  }
  for (const path of touched) {
    try {
      revalidatePath(path);
    } catch (e) {
      // revalidatePath can throw in edge runtime / build — don't poison the
      // moderation API response over a stale page.
      console.warn('[artwork-review] revalidate failed', path, e);
    }
  }

  return NextResponse.json({
    ok: true,
    status: newStatus,
    revalidated: [...touched],
  });
}
