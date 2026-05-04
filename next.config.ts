import type { NextConfig } from 'next';

// Content-Security-Policy is set per-request in src/lib/supabase/middleware.ts
// so it can include a fresh nonce on every render.
const securityHeaders = [
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
    // Remote sources we display in the art library. New sources should be
    // added here AND have a loader entry in src/lib/imageLoaders.ts so the
    // CDN can serve a properly sized variant.
    remotePatterns: [
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'commons.wikimedia.org' },
      { protocol: 'https', hostname: 'images.metmuseum.org' },
      { protocol: 'https', hostname: 'collectionapi.metmuseum.org' },
      { protocol: 'https', hostname: 'iiif.micr.io' },
      { protocol: 'https', hostname: 'www.rijksmuseum.nl' },
      { protocol: 'https', hostname: 'www.churchofjesuschrist.org' },
      // Supabase Storage bucket "art-thumbs" — pre-generated thumbs.
      { protocol: 'https', hostname: '*.supabase.co', pathname: '/storage/v1/object/public/**' },
      // Blog post hero + section images use Unsplash. Allowing the optimizer
      // to pull through means we get WebP/AVIF + responsive sizes instead of
      // the raw Unsplash JPG (LCP and image-search win).
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
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
