import { NextResponse, type NextRequest } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';

/**
 * POST /auth/sign-out
 * Ends the current session and redirects home.
 *
 * Also supports GET for "click a link to sign out" flows, but only from
 * inside the site (Referer check) so external sites can't force-logout.
 */
export async function POST(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  return NextResponse.redirect(new URL('/', request.url), { status: 303 });
}

export async function GET(request: NextRequest) {
  const referer = request.headers.get('referer') || '';
  const host = request.headers.get('host') || '';
  if (!referer.includes(host)) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  return NextResponse.redirect(new URL('/', request.url));
}
