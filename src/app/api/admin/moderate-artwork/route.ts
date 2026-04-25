import { NextResponse, type NextRequest } from 'next/server';
import { isAdminRequest } from '@/lib/isAdmin';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { moderateArtwork } from '@/lib/moderation';

/**
 * POST /api/admin/moderate-artwork
 * Body: { artwork_id: string } | { image_url: string, scripture_refs?: string[] }
 *
 * Runs moderation providers on the image and (for artwork_id) writes the
 * result back to the artworks table. Never sets status to 'approved' on its
 * own — that's a human decision.
 */
export async function POST(req: NextRequest) {
  if (!(await isAdminRequest(req))) {
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
    image_url?: string;
    scripture_refs?: string[];
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'bad json' }, { status: 400 });
  }

  let imageUrl = body.image_url || '';
  let scriptureRefs = body.scripture_refs || [];

  if (body.artwork_id) {
    const { data: art, error } = await supabaseAdmin
      .from('artworks')
      .select('id, image_url, thumbnail_url')
      .eq('id', body.artwork_id)
      .single();
    if (error || !art) {
      return NextResponse.json({ error: 'artwork not found' }, { status: 404 });
    }
    imageUrl = art.image_url;

    const { data: refs } = await supabaseAdmin
      .from('artwork_scripture_refs')
      .select('book_id, chapter, books(slug)')
      .eq('artwork_id', body.artwork_id);
    type RefRow = { chapter: number; books: { slug: string } | { slug: string }[] | null };
    scriptureRefs = ((refs || []) as RefRow[])
      .map((r) => {
        const books = Array.isArray(r.books) ? r.books[0] : r.books;
        return books ? `${books.slug}/${r.chapter}` : null;
      })
      .filter((s): s is string => !!s);
  }

  if (!imageUrl) {
    return NextResponse.json({ error: 'missing image_url or artwork_id' }, { status: 400 });
  }

  const decision = await moderateArtwork({ imageUrl, scriptureRefs });

  if (body.artwork_id) {
    await supabaseAdmin
      .from('artworks')
      .update({
        moderation_status: decision.status,
        moderation_scores: {
          worstScore: decision.worstScore,
          worstLabel: decision.worstLabel,
          reasons: decision.reasons,
          contextFlags: decision.contextFlags,
          providers: decision.providers.map((p) => ({
            provider: p.provider,
            ran: p.ran,
            error: p.error,
            labels: p.labels,
          })),
          scannedAt: new Date().toISOString(),
        },
      })
      .eq('id', body.artwork_id);
  }

  return NextResponse.json({ ok: true, decision });
}
