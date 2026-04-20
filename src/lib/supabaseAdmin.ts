import { createClient } from '@supabase/supabase-js';

/**
 * Service-role Supabase client for server-only operations that bypass RLS —
 * writing moderation statuses, reading the full reports table, etc.
 *
 * NEVER import this from a client component. It's server-only.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  // Log but don't crash builds — dev envs may not have it yet.
  if (process.env.NODE_ENV === 'production') {
    console.warn(
      '[supabaseAdmin] Missing SUPABASE_SERVICE_ROLE_KEY — admin writes will fail.',
    );
  }
}

export const supabaseAdmin = createClient(url || '', serviceKey || '', {
  auth: { persistSession: false, autoRefreshToken: false },
});
