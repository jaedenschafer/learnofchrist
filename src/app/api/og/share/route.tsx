import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

const SIZE = { width: 1200, height: 630 };

// Allowed origins for CORS. Same-origin (from our own pages) is always allowed.
const ALLOWED_ORIGINS = new Set([
  'https://learnofchrist.com',
  'https://www.learnofchrist.com',
]);

// ─── Simple per-instance rate limiter ───────────────────────────
// Not cluster-wide (edge runtime has ephemeral instances), but
// meaningfully blunts burst attacks from a single attacker that
// happens to land on the same instance. Real rate limiting should
// use Upstash or Vercel KV — TODO.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 30; // 30 requests per IP per minute
const hits = new Map<string, { count: number; reset: number }>();

function rateLimitOk(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  entry.count += 1;
  if (entry.count > RATE_LIMIT_MAX) return false;
  return true;
}

// Strip control chars and newlines, then clamp to max length.
function sanitize(value: string | null, max: number): string {
  if (!value) return '';
  // Remove control chars (except space) and collapse whitespace
  const cleaned = value.replace(/[\x00-\x1F\x7F]+/g, ' ').replace(/\s+/g, ' ').trim();
  if (cleaned.length <= max) return cleaned;
  return cleaned.slice(0, max - 1).trim() + '…';
}

function isAllowedVariant(v: string): v is 'verse' | 'insight' {
  return v === 'verse' || v === 'insight';
}

function fallbackResponse(status: number, message: string): Response {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

export async function GET(req: NextRequest) {
  try {
    // ── CORS / Origin check ─────────────────────────────────────
    const origin = req.headers.get('origin');
    const corsHeaders: Record<string, string> = {};
    if (origin) {
      if (ALLOWED_ORIGINS.has(origin)) {
        corsHeaders['Access-Control-Allow-Origin'] = origin;
        corsHeaders['Vary'] = 'Origin';
      } else {
        // Cross-origin request from an unapproved origin — refuse.
        return fallbackResponse(403, 'Origin not allowed');
      }
    }

    // ── Rate limit ──────────────────────────────────────────────
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';
    if (!rateLimitOk(ip)) {
      return new Response(JSON.stringify({ error: 'Rate limit exceeded' }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '60',
          'Cache-Control': 'no-store',
        },
      });
    }

    // ── Parse + validate query ─────────────────────────────────
    const { searchParams } = new URL(req.url);
    const quote = sanitize(searchParams.get('quote'), 320);
    const ref = sanitize(searchParams.get('ref'), 60);
    const snippet = sanitize(searchParams.get('snippet'), 240);
    const variantRaw = searchParams.get('variant') || 'verse';
    if (!isAllowedVariant(variantRaw)) {
      return fallbackResponse(400, 'Invalid variant');
    }
    const variant = variantRaw;
    const isInsight = variant === 'insight';

    const imgResp = new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '80px',
            background:
              'linear-gradient(135deg, #FFFFFF 0%, #F5F8FF 40%, #EFEEFF 100%)',
            position: 'relative',
            fontFamily: '"New York", "Iowan Old Style", Georgia, serif',
          }}
        >
          {/* Decorative corner blobs */}
          <div
            style={{
              position: 'absolute',
              top: -120,
              right: -120,
              width: 420,
              height: 420,
              borderRadius: 210,
              background: isInsight
                ? 'radial-gradient(closest-side, #5856D633, transparent)'
                : 'radial-gradient(closest-side, #007AFF33, transparent)',
              display: 'flex',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -120,
              left: -120,
              width: 420,
              height: 420,
              borderRadius: 210,
              background: 'radial-gradient(closest-side, #FFCC0022, transparent)',
              display: 'flex',
            }}
          />

          {/* Top row: eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: '-apple-system, "SF Pro Text", system-ui, sans-serif',
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: isInsight ? '#5856D6' : '#007AFF',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                background: isInsight ? '#5856D6' : '#007AFF',
                display: 'block',
              }}
            />
            {isInsight ? 'Insight' : 'Scripture'}
          </div>

          {/* Quote */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
              padding: '40px 0',
            }}
          >
            <div
              style={{
                fontSize: quote.length > 180 ? 44 : 56,
                lineHeight: 1.2,
                color: '#1D1D1F',
                fontStyle: isInsight ? 'normal' : 'italic',
                letterSpacing: '-0.01em',
              }}
            >
              {isInsight ? quote : `"${quote}"`}
            </div>
            {snippet && (
              <div
                style={{
                  marginTop: 32,
                  fontFamily:
                    '-apple-system, "SF Pro Text", system-ui, sans-serif',
                  fontSize: 22,
                  lineHeight: 1.45,
                  color: '#48484A',
                }}
              >
                {snippet}
              </div>
            )}
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 32,
              borderTop: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <div
                style={{
                  fontFamily:
                    '-apple-system, "SF Pro Text", system-ui, sans-serif',
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#1D1D1F',
                  letterSpacing: '-0.01em',
                }}
              >
                {ref || 'Learn of Christ'}
              </div>
              {ref && (
                <div
                  style={{
                    fontFamily:
                      '-apple-system, "SF Pro Text", system-ui, sans-serif',
                    fontSize: 16,
                    color: '#86868B',
                  }}
                >
                  learnofchrist.com
                </div>
              )}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  background: 'linear-gradient(135deg, #007AFF, #5856D6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontFamily:
                    '-apple-system, "SF Pro Display", system-ui, sans-serif',
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                L
              </div>
              {!ref && (
                <div
                  style={{
                    fontFamily:
                      '-apple-system, "SF Pro Text", system-ui, sans-serif',
                    fontSize: 18,
                    color: '#86868B',
                  }}
                >
                  learnofchrist.com
                </div>
              )}
            </div>
          </div>
        </div>
      ),
      {
        ...SIZE,
        headers: {
          // Short browser cache; long CDN cache; SWR for background updates.
          'Cache-Control':
            'public, max-age=3600, s-maxage=604800, stale-while-revalidate=2592000',
          ...corsHeaders,
        },
      },
    );

    return imgResp;
  } catch (err) {
    // Log to stderr (Vercel picks this up); avoid leaking internals to client.
    console.error('[og/share] render failed:', err);
    return fallbackResponse(500, 'Image generation failed');
  }
}
