import type { NextRequest } from 'next/server';

/**
 * Simple bearer-token auth for admin API routes. Set ADMIN_API_KEY in your
 * env. A real auth system can replace this later; until then it's one
 * long random string shared between the admin UI and the server.
 *
 * Checks for:
 *   - `Authorization: Bearer <key>` header
 *   - `x-admin-key` header
 *   - `?admin_key=` query param (last-resort for server-to-server)
 */
export function isAdminRequest(req: NextRequest): boolean {
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

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
