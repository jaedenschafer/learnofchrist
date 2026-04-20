import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Service-role Supabase client for server-only operations that bypass RLS —
 * writing moderation statuses, reading the full reports table, etc.
 *
 * NEVER import this from a client component. It's server-only.
 *
 * Lazy-initialized via a Proxy so that merely importing this module doesn't
 * throw when NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are
 * missing — callers get a clear runtime error with the specific missing
 * env var, and the admin pages can surface it as a setup card instead of
 * crashing the whole render.
 */

let cached: SupabaseClient | null = null;
let cachedError: Error | null = null;

function buildClient(): SupabaseClient {
  if (cached) return cached;
  if (cachedError) throw cachedError;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url) {
    cachedError = new Error(
      'Missing NEXT_PUBLIC_SUPABASE_URL — add it to your environment (.env.local for dev, Vercel → Project → Settings → Environment Variables for prod).',
    );
    throw cachedError;
  }
  if (!serviceKey) {
    cachedError = new Error(
      'Missing SUPABASE_SERVICE_ROLE_KEY — add it to your environment. In Vercel: Project → Settings → Environment Variables. Do NOT prefix it with NEXT_PUBLIC_.',
    );
    throw cachedError;
  }

  cached = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}

export const supabaseAdmin = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    const c = buildClient();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const v = (c as any)[prop];
    return typeof v === 'function' ? v.bind(c) : v;
  },
});
