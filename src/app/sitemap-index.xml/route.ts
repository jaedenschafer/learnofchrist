/**
 * Sitemap index. Crawlers that request /sitemap-index.xml get a roll-up of
 * every shard created by `sitemap.ts` via `generateSitemaps`. Using this
 * index keeps individual shards under Google's 50k-URL / 50MB cap while
 * letting bots discover all of them in a single fetch.
 */

const SHARDS = ['core', 'bible', 'study', 'verses', 'content'] as const;
const BASE_URL = 'https://learnofchrist.com';

export const dynamic = 'force-static';
export const revalidate = 86400;

export function GET(): Response {
  const lastmod = new Date().toISOString();
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...SHARDS.map(
      (id) =>
        `  <sitemap><loc>${BASE_URL}/sitemap/${id}.xml</loc><lastmod>${lastmod}</lastmod></sitemap>`,
    ),
    '</sitemapindex>',
    '',
  ].join('\n');

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control':
        'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
