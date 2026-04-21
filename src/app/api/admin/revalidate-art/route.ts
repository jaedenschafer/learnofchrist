import { NextResponse, type NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { isAdminRequest } from '@/lib/isAdmin';

/**
 * POST /api/admin/revalidate-art
 *
 * Busts the ISR cache on art pages. Run after bulk ingest / bulk moderation
 * changes so new or newly-approved artworks show up before the 24h
 * `export const revalidate` window elapses.
 *
 * Optional body: { paths?: string[] } — extra paths to revalidate.
 */
export async function POST(req: NextRequest) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  let extra: string[] = [];
  try {
    const body = await req.json().catch(() => ({}));
    if (Array.isArray(body?.paths)) {
      extra = body.paths.filter((p: unknown): p is string => typeof p === 'string');
    }
  } catch {}

  const defaults = ['/art', '/sitemap.xml'];
  const targets = Array.from(new Set([...defaults, ...extra]));

  for (const p of targets) {
    try {
      revalidatePath(p);
    } catch (err) {
      console.error(`revalidatePath failed for ${p}:`, err);
    }
  }

  return NextResponse.json({ ok: true, revalidated: targets });
}
