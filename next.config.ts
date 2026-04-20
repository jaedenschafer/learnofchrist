import type { NextConfig } from 'next';

// ─── Security headers applied to all routes ───────────────────────
// CSP is deliberately permissive for inline styles (we use CSS-in-JS
// via Tailwind utility classes and inline style attrs in a few places)
// and for Next.js dev-mode hot reload. Tighten further once a nonce
// pipeline is in place.
const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://*.supabase.co https://vercel.live wss://*.supabase.co",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Enable modern Next features that help at scale.
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  async headers() {
    return [
      // Global security headers
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      // Note: /_next/static is already served with `public, max-age=31536000,
      // immutable` by Next.js itself — overriding it here triggers a build
      // warning and can break dev hot reload.
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Images — long-cache with revalidation
      {
        source: '/:path*.(png|jpg|jpeg|gif|webp|avif|svg|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // OG image route — CDN cache + CORS lock to our domain
      {
        source: '/api/og/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
          },
          { key: 'Access-Control-Allow-Origin', value: 'https://learnofchrist.com' },
          { key: 'Vary', value: 'Origin' },
        ],
      },
      // HTML pages — short browser cache, longer CDN cache with SWR
      {
        source: '/((?!_next|api|fonts).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
