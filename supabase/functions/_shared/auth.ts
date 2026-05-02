// Auth helpers — verify the caller's Supabase JWT and return the user.
//
// Edge Functions are public-facing; we never trust client-supplied
// user_id fields. Always derive identity from the verified JWT.

import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2.45.4';

export interface AuthedRequest {
  userId: string;
  jwt: string;
  serviceClient: SupabaseClient;
}

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

export async function requireUser(req: Request): Promise<AuthedRequest> {
  const auth = req.headers.get('Authorization') ?? '';
  const jwt = auth.replace(/^Bearer\s+/i, '');
  if (!jwt) throw new HttpError(401, 'missing bearer token');

  // Verify against the anon client so the JWT signature is checked.
  const anon = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: `Bearer ${jwt}` } },
    auth: { persistSession: false },
  });
  const { data, error } = await anon.auth.getUser();
  if (error || !data.user) throw new HttpError(401, 'invalid bearer token');

  // Service-role client is the workhorse for writes that need to bypass
  // RLS (subscription validation writes from a backend trust boundary).
  const serviceClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });

  return { userId: data.user.id, jwt, serviceClient };
}

export class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

// Naive in-memory rate limit per Edge Function instance. Sufficient
// for v1; swap for an upstash/redis check when traffic warrants.
const buckets = new Map<string, { count: number; resetAt: number }>();
export function rateLimit(
  key: string,
  maxPerMinute: number
): { ok: boolean; retryAfterSec: number } {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + 60_000 });
    return { ok: true, retryAfterSec: 0 };
  }
  bucket.count += 1;
  if (bucket.count > maxPerMinute) {
    return { ok: false, retryAfterSec: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  return { ok: true, retryAfterSec: 0 };
}
