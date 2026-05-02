// CORS helpers shared by every Edge Function.
//
// Mobile apps don't care about CORS, but the same endpoints will be hit
// from the web app + admin tools, so we keep the handling permissive
// for our own origins and tight for everyone else.

const ALLOWED_ORIGINS = [
  'https://learnofchrist.com',
  'https://www.learnofchrist.com',
  'http://localhost:3000', // next dev
];

export function corsHeaders(origin: string | null): HeadersInit {
  const allow = origin && ALLOWED_ORIGINS.includes(origin) ? origin : '*';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Headers':
      'authorization, x-client-info, apikey, content-type, x-app-version, x-platform',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Vary': 'Origin',
  };
}

export function handleOptions(req: Request): Response | null {
  if (req.method !== 'OPTIONS') return null;
  return new Response(null, {
    status: 204,
    headers: corsHeaders(req.headers.get('Origin')),
  });
}

export function jsonResponse(
  body: unknown,
  init: ResponseInit & { req?: Request } = {}
): Response {
  const { req, ...rest } = init;
  return new Response(JSON.stringify(body), {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(req?.headers.get('Origin') ?? null),
      ...(rest.headers ?? {}),
    },
  });
}
