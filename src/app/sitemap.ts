import type { MetadataRoute } from 'next';
import { getAllBooks } from '@/data/books';
import { getAllTopics } from '@/data/topics';
import { getAllQuestions } from '@/data/questions';

function bookNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://learnofchrist.com';
  const books = getAllBooks();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/bible`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/topics`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/questions`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/study-plans`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/family`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ];

  // Book pages (66 books)
  const bookPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${baseUrl}/bible/${bookNameToSlug(book.name)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Chapter pages (1,189 chapters)
  const chapterPages: MetadataRoute.Sitemap = [];
  for (const book of books) {
    const slug = bookNameToSlug(book.name);
    for (let ch = 1; ch <= book.chapters; ch++) {
      // Higher priority for chapters with rich study content
      const hasRichContent = (
        (slug === 'john') ||
        (slug === 'genesis' && ch <= 12) ||
        (slug === 'psalms' && [1, 23, 46, 91, 119, 139].includes(ch))
      );
      chapterPages.push({
        url: `${baseUrl}/bible/${slug}/${ch}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: hasRichContent ? 0.8 : 0.6,
      });
    }
  }

  // Topic pages
  const topicPages: MetadataRoute.Sitemap = getAllTopics().map((topic) => ({
    url: `${baseUrl}/topics/${topic.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Question pages
  const questionPages: MetadataRoute.Sitemap = getAllQuestions().map((q) => ({
    url: `${baseUrl}/questions/${q.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...bookPages, ...chapterPages, ...topicPages, ...questionPages];
}
