import { type NextRequest } from 'next/server';
import { updateSupabaseSession } from '@/lib/supabase/middleware';

/**
 * Next 16 "proxy" (formerly "middleware") — refreshes the Supabase session
 * cookie on every user-facing request so tokens don't expire while the tab
 * is open.
 *
 * We skip static assets, images, and a few noisy API paths that don't
 * need a session touch.
 */
export async function proxy(request: NextRequest) {
  return await updateSupabaseSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image  (image optimization files)
     * - favicon / robots / sitemap
     * - any file with an extension (images, css, fonts, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|woff|woff2|ttf|otf)$).*)',
  ],
};
