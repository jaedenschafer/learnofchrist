import type { MetadataRoute } from 'next';

// The sitemap is sharded via generateSitemaps — each shard lives at
// /sitemap/<id>.xml. We list every shard here so crawlers can fetch them in
// parallel without relying on a sitemap-index file.
const SITEMAP_SHARDS = ['core', 'bible', 'study', 'verses', 'content'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: SITEMAP_SHARDS.map(
      (id) => `https://learnofchrist.com/sitemap/${id}.xml`,
    ),
  };
}
