import { NextResponse, type NextRequest } from 'next/server';
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

  return NextResponse.json({ ok: true, status: newStatus });
}
