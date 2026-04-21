import { NextResponse, type NextRequest } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';

/**
 * OAuth callback. Supabase redirects here with ?code=<one-time-code> after
 * the provider (Google) finishes auth. We exchange it for a session and
 * drop the user wherever they were trying to go.
 *
 * `next` query param is preserved from /auth/sign-in so users land back
 * on the page they came from.
 */
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const next = url.searchParams.get('next') || '/';
  const errorDesc = url.searchParams.get('error_description');

  if (errorDesc) {
    const errUrl = new URL('/auth/sign-in', url.origin);
    errUrl.searchParams.set('error', errorDesc);
    return NextResponse.redirect(errUrl);
  }

  if (!code) {
    return NextResponse.redirect(new URL('/auth/sign-in', url.origin));
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    const errUrl = new URL('/auth/sign-in', url.origin);
    errUrl.searchParams.set('error', error.message);
    return NextResponse.redirect(errUrl);
  }

  // `next` is user-controlled, so only allow paths inside the site.
  const safeNext = next.startsWith('/') && !next.startsWith('//') ? next : '/';
  return NextResponse.redirect(new URL(safeNext, url.origin));
}
