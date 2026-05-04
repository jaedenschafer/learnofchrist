import type { MetadataRoute } from 'next';
import { bibleBooks } from '@/data/books';
import { topics } from '@/data/topics';
import { questions } from '@/data/questions';
import { blogPosts } from '@/data/blog-posts';
import { studyPlans } from '@/data/study-plans';
import { verseExplanations } from '@/data/verse-explanations';
import { translations } from '@/data/translations';
import {
  getAllArtistSlugs,
  getAllArtworkSlugs,
  getAllArtworkSlugsWithImages,
} from '@/lib/supabase';

const BASE_URL = 'https://learnofchrist.com';

function bookNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
}

/**
 * Shard IDs. Each shard is emitted as /sitemap/<id>.xml, keeping every
 * individual sitemap well under Google's 50k-URL / 50MB cap and making
 * crawl parallelism straightforward at 1M-user scale.
 */
const SHARDS = ['core', 'bible', 'study', 'verses', 'content', 'art'] as const;
type Shard = (typeof SHARDS)[number];

export async function generateSitemaps(): Promise<{ id: Shard }[]> {
  return SHARDS.map((id) => ({ id }));
}

function coreEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  entries.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  const staticPages = [
    { path: '/bible', priority: 0.9, freq: 'weekly' as const },
    { path: '/study', priority: 0.9, freq: 'weekly' as const },
    { path: '/study/deuterocanonical-books', priority: 0.85, freq: 'monthly' as const },
    { path: '/study-plans', priority: 0.7, freq: 'weekly' as const },
    { path: '/progress', priority: 0.5, freq: 'monthly' as const },
    { path: '/topics', priority: 0.7, freq: 'weekly' as const },
    { path: '/questions', priority: 0.7, freq: 'weekly' as const },
    { path: '/blog', priority: 0.7, freq: 'weekly' as const },
    { path: '/family', priority: 0.5, freq: 'monthly' as const },
    { path: '/about', priority: 0.3, freq: 'monthly' as const },
    { path: '/privacy', priority: 0.1, freq: 'yearly' as const },
    { path: '/terms', priority: 0.1, freq: 'yearly' as const },
  ];

  for (const page of staticPages) {
    entries.push({
      url: `${BASE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.freq,
      priority: page.priority,
    });
  }

  // Translation landing pages are small and navigational — keep them in core.
  entries.push({
    url: `${BASE_URL}/bible/translations`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  });
  for (const t of translations) {
    entries.push({
      url: `${BASE_URL}/bible/translations/${t.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  return entries;
}

function bibleEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const book of bibleBooks) {
    const slug = bookNameToSlug(book.name);
    entries.push({
      url: `${BASE_URL}/bible/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
    for (let ch = 1; ch <= book.chapters; ch++) {
      entries.push({
        url: `${BASE_URL}/bible/${slug}/${ch}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }
  return entries;
}

function studyEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const book of bibleBooks) {
    const slug = bookNameToSlug(book.name);
    entries.push({
      url: `${BASE_URL}/study/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
    for (let ch = 1; ch <= book.chapters; ch++) {
      entries.push({
        url: `${BASE_URL}/study/${slug}/${ch}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }
  return entries;
}

function verseEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const key of Object.keys(verseExplanations)) {
    const [bookSlug, chapter, verse] = key.split('/');
    entries.push({
      url: `${BASE_URL}/bible/${bookSlug}/${chapter}/${verse}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }
  return entries;
}

/**
 * Art surfaces — root + every Bible-book art index + every artwork detail
 * + every artist hub. Artist hubs without a real bio currently render with
 * a noindex robots tag, so Google will see them via the sitemap, drop them
 * from the index, and re-include them once the bio lands.
 */
async function artEntries(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  entries.push({
    url: `${BASE_URL}/art`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  });

  // Artists directory — hub-of-hubs feeding into every /art/artist/[slug].
  entries.push({
    url: `${BASE_URL}/art/artists`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  });

  // Per-book art indexes (we generate one for every book — the page itself
  // 404s gracefully when no art is indexed yet, but Google won't waste
  // crawl budget on those because the parent /art/book/[slug] page renders
  // notFound() in that case).
  for (const book of bibleBooks) {
    const slug = bookNameToSlug(book.name);
    entries.push({
      url: `${BASE_URL}/art/book/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  const [artists, artworks] = await Promise.all([
    getAllArtistSlugs(),
    getAllArtworkSlugsWithImages(),
  ]);

  for (const a of artists) {
    entries.push({
      url: `${BASE_URL}/art/artist/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // Each artwork detail page gets an entry, AND emits a Google Image-sitemap
  // `<image:image>` companion via the `images` field — Next.js renders this
  // automatically into the standard image-extension XML so Google Image
  // Search learns which image lives on which page. This is the channel that
  // gets the painting itself ranked, separate from the page text.
  for (const w of artworks) {
    entries.push({
      url: `${BASE_URL}/art/artwork/${w.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      ...(w.image_url ? { images: [w.image_url] } : {}),
    });
  }

  return entries;
}

function contentEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const topic of topics) {
    entries.push({
      url: `${BASE_URL}/topics/${topic.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  for (const question of questions) {
    entries.push({
      url: `${BASE_URL}/questions/${question.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  for (const plan of studyPlans) {
    entries.push({
      url: `${BASE_URL}/study-plans/${plan.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  for (const post of blogPosts) {
    entries.push({
      url: `${BASE_URL}/blog/${post.id}`,
      // Use the blog post's actual publish date as lastModified — gives
      // Google's crawl scheduler a real signal instead of always-now.
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
      // Image sitemap extension — blog hero images get a `<image:image>`
      // companion entry so Google Image Search learns about them.
      images: [post.image, ...post.sections.filter((s) => s.image).map((s) => s.image as string)],
    });
  }

  return entries;
}

export default async function sitemap({
  id,
}: {
  // Next.js 16 changed this signature — `id` arrives as a Promise that
  // must be awaited. Without the await, the unresolved Promise object is
  // compared against the switch cases, every case falls through to default,
  // and the function returns []. That bug shipped silently for ~3 weeks
  // and produced empty <urlset> sitemaps in production.
  id: Promise<Shard>;
}): Promise<MetadataRoute.Sitemap> {
  const resolvedId = await id;
  switch (resolvedId) {
    case 'core':
      return coreEntries();
    case 'bible':
      return bibleEntries();
    case 'study':
      return studyEntries();
    case 'verses':
      return verseEntries();
    case 'content':
      return contentEntries();
    case 'art':
      return artEntries();
    default:
      return [];
  }
}
