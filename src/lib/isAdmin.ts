import type { NextRequest } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

/**
 * Admin authorization. Two paths are accepted:
 *
 *   1. The signed-in user has `profiles.is_admin = true` (cookie session).
 *      Set with: `update profiles set is_admin = true where id = '<uuid>'`.
 *
 *   2. `ADMIN_API_KEY` matches via Authorization/x-admin-key/?admin_key=.
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

export async function isAdminRequest(req: NextRequest): Promise<boolean> {
  if (await isCurrentUserAdmin()) return true;
  return isAdminApiKey(req);
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
