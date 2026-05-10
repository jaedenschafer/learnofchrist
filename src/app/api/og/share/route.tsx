import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

// ─── Format presets ─────────────────────────────────────────────
// `landscape` is the original 1.91:1 OG card used by social link
// previews. `square` is 1080×1080 for Instagram feed; `story` is
// 1080×1920 for Instagram/Facebook stories and WhatsApp status.
type Format = 'landscape' | 'square' | 'story';

const FORMAT_SIZES: Record<Format, { width: number; height: number }> = {
  landscape: { width: 1200, height: 630 },
  square: { width: 1080, height: 1080 },
  story: { width: 1080, height: 1920 },
};

// Allowed origins for CORS. Same-origin (from our own pages) is always allowed.
const ALLOWED_ORIGINS = new Set([
  'https://learnofchrist.com',
  'https://www.learnofchrist.com',
]);

// Whitelisted artwork hosts for the optional background image. Restricting
// this prevents the route from being abused as an image proxy.
const ALLOWED_ART_HOSTS = new Set([
  'learnofchrist.com',
  'www.learnofchrist.com',
  'cdn.learnofchrist.com',
  'commons.wikimedia.org',
  'upload.wikimedia.org',
  'images.metmuseum.org',
  'www.metmuseum.org',
  'media.britishmuseum.org',
  'iiif.britishmuseum.org',
  'tile.loc.gov',
  'www.nga.gov',
  'media.nga.gov',
  'lh3.googleusercontent.com',
  'lh4.googleusercontent.com',
  'lh5.googleusercontent.com',
  'lh6.googleusercontent.com',
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

function isAllowedFormat(v: string): v is Format {
  return v === 'landscape' || v === 'square' || v === 'story';
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

/** Validate `art` query param. Returns the URL string if it points to a
 *  whitelisted host (https only), null otherwise. */
function validateArtUrl(value: string | null): string | null {
  if (!value) return null;
  try {
    const u = new URL(value);
    if (u.protocol !== 'https:') return null;
    if (!ALLOWED_ART_HOSTS.has(u.hostname)) return null;
    return u.toString();
  } catch {
    return null;
  }
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
    const formatRaw = searchParams.get('format') || 'landscape';
    if (!isAllowedVariant(variantRaw)) {
      return fallbackResponse(400, 'Invalid variant');
    }
    if (!isAllowedFormat(formatRaw)) {
      return fallbackResponse(400, 'Invalid format');
    }
    const variant = variantRaw;
    const format = formatRaw;
    const isInsight = variant === 'insight';
    const artUrl = validateArtUrl(searchParams.get('art'));

    const SIZE = FORMAT_SIZES[format];
    const isStory = format === 'story';
    const isSquare = format === 'square';

    // Layout tuning per format. Story is a tall vertical canvas with a
    // larger title; landscape is the existing 1.91:1; square sits between.
    const PAD = isStory ? 100 : 80;
    const TITLE_FONT_BASE = isStory ? 78 : isSquare ? 68 : 60;
    const TITLE_FONT_LONG = isStory ? 58 : isSquare ? 50 : 46;
    const titleFontSize = quote.length > 180 ? TITLE_FONT_LONG : TITLE_FONT_BASE;

    const accent = '#F2C265';
    const imgResp = new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: `${PAD}px`,
            // Base solid bg; image and gradient are layered below as absolute
            // div siblings so satori doesn't have to parse multi-layer CSS
            // (which it gets wrong on certain @vercel/og versions).
            background: '#0F1217',
            backgroundImage: artUrl
              ? undefined
              : 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(242,194,101,0.18) 0%, transparent 60%), linear-gradient(180deg, #0F1217 0%, #131820 100%)',
            position: 'relative',
            fontFamily: '"New York", "Iowan Old Style", Georgia, serif',
            color: '#FFFFFF',
          }}
        >
          {/* Background artwork layer — absolute-positioned <img> rather
              than CSS background-image, since satori handles single-image
              layers more reliably than comma-layered backgrounds. */}
          {artUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={artUrl}
              alt=""
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          )}
          {/* Darkening gradient overlay — sits between art and text so the
              verse stays legible against any palette. */}
          {artUrl && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background:
                  'linear-gradient(180deg, rgba(15,18,23,0.78) 0%, rgba(15,18,23,0.55) 35%, rgba(15,18,23,0.85) 100%)',
                display: 'flex',
              }}
            />
          )}
          {/* Subtle decorative serif quote mark — hidden when art is the
              hero, so the painting reads cleanly. */}
          {!artUrl && (
            <div
              style={{
                position: 'absolute',
                top: 24,
                right: 64,
                fontSize: isStory ? 380 : 280,
                lineHeight: 1,
                color: accent,
                opacity: 0.18,
                fontFamily: '"New York", "Iowan Old Style", Georgia, serif',
                display: 'flex',
              }}
            >
              “
            </div>
          )}

          {/* Top row: eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: '-apple-system, "SF Pro Text", system-ui, sans-serif',
              fontSize: isStory ? 22 : 18,
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: accent,
            }}
          >
            <span
              style={{
                width: 32,
                height: 2,
                background: accent,
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
              maxWidth: isStory ? 880 : 920,
            }}
          >
            <div
              style={{
                fontSize: titleFontSize,
                lineHeight: 1.18,
                color: '#FFFFFF',
                fontStyle: isInsight ? 'normal' : 'italic',
                letterSpacing: '-0.012em',
                textShadow: artUrl ? '0 2px 12px rgba(0,0,0,0.55)' : 'none',
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
                  fontSize: isStory ? 28 : 22,
                  lineHeight: 1.5,
                  color: 'rgba(255,255,255,0.78)',
                  textShadow: artUrl ? '0 2px 8px rgba(0,0,0,0.55)' : 'none',
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
              paddingTop: 28,
              borderTop: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <div
                style={{
                  fontFamily:
                    '-apple-system, "SF Pro Text", system-ui, sans-serif',
                  fontSize: isStory ? 28 : 22,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '-0.005em',
                  textShadow: artUrl ? '0 2px 8px rgba(0,0,0,0.55)' : 'none',
                }}
              >
                {ref || 'Learn of Christ'}
              </div>
              <div
                style={{
                  fontFamily:
                    '-apple-system, "SF Pro Text", system-ui, sans-serif',
                  fontSize: isStory ? 18 : 15,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.65)',
                }}
              >
                learnofchrist.com
              </div>
            </div>
            <div
              style={{
                width: isStory ? 56 : 44,
                height: isStory ? 56 : 44,
                borderRadius: 999,
                background: accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0F1217',
                fontFamily:
                  '-apple-system, "SF Pro Display", system-ui, sans-serif',
                fontSize: isStory ? 30 : 24,
                fontWeight: 700,
              }}
            >
              L
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
