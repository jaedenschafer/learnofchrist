import type { NextRequest } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

/**
 * Admin authorization. Three paths are accepted:
 *
 *   1. The signed-in user has `profiles.is_admin = true` (cookie session,
 *      checked directly via `supabaseAdmin`).
 *      Set with: `update profiles set is_admin = true where id = '<uuid>'`.
 *
 *   2. The signed-in user is an admin per the `current_user_is_admin()` SQL
 *      function (added by migration 023). Equivalent path, lets RLS policies
 *      reuse the same check.
 *
 *   3. `ADMIN_API_KEY` matches via Authorization/x-admin-key/?admin_key=.
 *      Reserved for server-to-server traffic (scripts, CI). Public UI
 *      should never need to paste this anywhere.
 */

export async function isCurrentUserAdmin(): Promise<boolean> {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;
    const { data, error } = await supabaseAdmin
      .from('profiles')
      .select('is_admin')
      .eq('id', user.id)
      .maybeSingle();
    if (error) return false;
    return !!data?.is_admin;
  } catch {
    return false;
  }
}

function isAdminApiKey(req: NextRequest): boolean {
  const expected = process.env.ADMIN_API_KEY;
  if (!expected) return false;

  const auth = req.headers.get('authorization') || '';
  const bearer = auth.match(/^Bearer\s+(.+)$/i)?.[1];
  if (bearer && safeEqual(bearer, expected)) return true;

  const headerKey = req.headers.get('x-admin-key');
  if (headerKey && safeEqual(headerKey, expected)) return true;

  const url = new URL(req.url);
  const qKey = url.searchParams.get('admin_key');
  if (qKey && safeEqual(qKey, expected)) return true;

  return false;
}

/**
 * Combined check: profile.is_admin via supabaseAdmin OR ADMIN_API_KEY.
 */
export async function isAdminRequest(req: NextRequest): Promise<boolean> {
  if (await isCurrentUserAdmin()) return true;
  return isAdminApiKey(req);
}

/**
 * Session-based admin check via the `current_user_is_admin()` Postgres
 * function (defined in migration 023_profiles_admin_flag.sql). Returns true
 * when the cookie session belongs to a user with `profiles.is_admin = true`.
 *
 * Prefer this in new code that runs in a request context where the RPC
 * exists, since RLS policies use the same function.
 */
export async function isAdminSession(): Promise<boolean> {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.rpc('current_user_is_admin');
    if (error) return false;
    return data === true;
  } catch {
    return false;
  }
}

/**
 * Combined check that accepts EITHER a valid ADMIN_API_KEY header/param OR
 * a signed-in session whose profile has `is_admin = true`.
 *
 * Prefer this over `isAdminRequest()` in new API routes — it covers the same
 * paths plus the RPC-backed session check.
 */
export async function isAdmin(req: NextRequest): Promise<boolean> {
  if (await isAdminRequest(req)) return true;
  return isAdminSession();
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
