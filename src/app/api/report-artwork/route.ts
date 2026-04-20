import { NextResponse, type NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

/**
 * POST /api/report-artwork
 * Body: { artwork_id: string, reason?: string, page_url?: string }
 *
 * Public endpoint. Rate-limited per IP to 10/min to keep it from being
 * abused. Once reports > 0 for an artwork, the admin queue surfaces it
 * for re-review regardless of its current moderation_status.
 */

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 10;
const hits = new Map<string, { count: number; reset: number }>();

function rateOk(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return true;
  }
  entry.count += 1;
  return entry.count <= RATE_MAX;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';
  if (!rateOk(ip)) {
    return NextResponse.json(
      { error: 'rate_limit' },
      { status: 429, headers: { 'Retry-After': '60' } },
    );
  }

  let body: { artwork_id?: string; reason?: string; page_url?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'bad json' }, { status: 400 });
  }

  if (!body.artwork_id) {
    return NextResponse.json({ error: 'missing artwork_id' }, { status: 400 });
  }

  const reason = (body.reason || '').slice(0, 500);
  const pageUrl = (body.page_url || '').slice(0, 500);
  const userAgent = (req.headers.get('user-agent') || '').slice(0, 300);

  const { error } = await supabaseAdmin.from('artwork_reports').insert({
    artwork_id: body.artwork_id,
    reason: reason || null,
    page_url: pageUrl || null,
    reporter_ip: ip.slice(0, 64),
    user_agent: userAgent || null,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Flip the artwork back to 'flagged' so admin eyes see it fast.
  await supabaseAdmin
    .from('artworks')
    .update({ moderation_status: 'flagged' })
    .eq('id', body.artwork_id)
    .in('moderation_status', ['approved', 'pending']);

  return NextResponse.json({ ok: true });
}
