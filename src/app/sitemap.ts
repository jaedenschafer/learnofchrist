import type { MetadataRoute } from 'next';
import { bibleBooks } from '@/data/books';
import { topics } from '@/data/topics';
import { questions } from '@/data/questions';
import { blogPosts } from '@/data/blog-posts';
import { studyPlans } from '@/data/study-plans';
import { verseExplanations } from '@/data/verse-explanations';
import { translations } from '@/data/translations';

const BASE_URL = 'https://learnofchrist.com';

function bookNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // ── Homepage ──
  entries.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  // ── Static pages ──
  const staticPages = [
    { path: '/bible', priority: 0.9, freq: 'weekly' as const },
    { path: '/study-plans', priority: 0.7, freq: 'weekly' as const },
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

  // ── Bible book pages (72 books) ──
  for (const book of bibleBooks) {
    const slug = bookNameToSlug(book.name);
    entries.push({
      url: `${BASE_URL}/bible/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // ── Bible chapter pages (1,189 chapters) ──
  for (const book of bibleBooks) {
    const slug = bookNameToSlug(book.name);
    for (let ch = 1; ch <= book.chapters; ch++) {
      entries.push({
        url: `${BASE_URL}/bible/${slug}/${ch}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  // ── Individual verse explanation pages ──
  for (const key of Object.keys(verseExplanations)) {
    const [bookSlug, chapter, verse] = key.split('/');
    entries.push({
      url: `${BASE_URL}/bible/${bookSlug}/${chapter}/${verse}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // ── Topics ──
  for (const topic of topics) {
    entries.push({
      url: `${BASE_URL}/topics/${topic.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // ── Questions ──
  for (const question of questions) {
    entries.push({
      url: `${BASE_URL}/questions/${question.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // ── Study Plans ──
  for (const plan of studyPlans) {
    entries.push({
      url: `${BASE_URL}/study-plans/${plan.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // ── Translation landing pages ──
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

  // ── Blog Posts ──
  for (const post of blogPosts) {
    entries.push({
      url: `${BASE_URL}/blog/${post.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  return entries;
}
