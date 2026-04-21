import { cookies } from 'next/headers';
import { createServerClient, type CookieOptions } from '@supabase/ssr';

/**
 * Per-request Supabase client for route handlers and server components.
 *
 * Reads the user's session from cookies. Honor the `set` cookie calls so
 * Supabase can refresh the session as it expires — though in React Server
 * Components `cookies()` is read-only and the set/remove calls will throw;
 * we swallow that. The middleware is responsible for actually writing
 * refreshed cookies back to the response.
 */
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY');
  }
  return createServerClient(url, anon, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options);
          }
        } catch {
          // RSC-only read; middleware will handle refresh.
        }
      },
    },
  });
}

/**
 * Convenience: return the currently signed-in user (or null).
 */
export async function getCurrentUser() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
