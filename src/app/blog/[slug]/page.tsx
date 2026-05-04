import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { getAllBlogPosts, getBlogPostById, categoryColors } from '@/data/blog-posts';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import JsonLd from '@/components/JsonLd';

// The FAQ accordion sits at the bottom of the post — defer its JS so it
// doesn't cost the user anything until they scroll.
const BlogFAQ = dynamic(() => import('@/components/BlogFAQ'), {
  loading: () => <div className="h-32" aria-hidden="true" />,
});

// ─── ISR ───
// Cache pages for 24h; regenerate in background after that.
export const revalidate = 86400;
// Allow routes not in generateStaticParams to be generated on-demand with ISR.
export const dynamicParams = true;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.id }));
}

/** Parse the human-readable date string used in blog-posts.ts ("Apr 10, 2026")
 *  into an ISO 8601 timestamp suitable for schema.org datePublished and the
 *  OG article:published_time tag. Returns the raw input if parsing fails. */
function toIsoDate(humanDate: string): string {
  const parsed = new Date(humanDate);
  if (isNaN(parsed.getTime())) return humanDate;
  return parsed.toISOString();
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostById(slug);

  if (!post) {
    return { title: 'Post Not Found | Learn of Christ' };
  }

  const publishedIso = toIsoDate(post.date);

  return {
    title: `${post.title} | Learn of Christ Blog`,
    description: post.excerpt,
    keywords: `${post.category}, Bible study, Jesus Christ, ${post.title}, ${post.keyVerses.map((v) => v.reference).join(', ')}`,
    authors: [{ name: post.author.name, url: 'https://learnofchrist.com' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://learnofchrist.com/blog/${slug}`,
      type: 'article',
      publishedTime: publishedIso,
      modifiedTime: new Date().toISOString(),
      authors: ['https://learnofchrist.com'],
      section: post.category,
      images: [{ url: post.image, alt: post.imageAlt, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://learnofchrist.com/blog/${slug}`,
    },
  };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Convert a scripture reference like "John 3:16" or "1 Corinthians 13:4-7"
 *  into the corresponding internal URL (/bible/<book-slug>/<chapter>[/verse]).
 *  Returns null when the reference can't be parsed — caller should fall back
 *  to plain text in that case. Supports books with leading numerals. */
function referenceToUrl(reference: string): string | null {
  // Match: optional leading number ("1 ", "2 ", "3 "), book name (one or
  // more words), space, chapter, optional :verse[-end].
  const m = reference.trim().match(/^((?:[1-3]\s+)?[A-Za-z][A-Za-z\s]+?)\s+(\d+)(?::(\d+))?/);
  if (!m) return null;
  const [, bookRaw, chapterStr, verseStr] = m;
  const bookSlug = bookRaw
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/'/g, '');
  const base = `/bible/${bookSlug}/${chapterStr}`;
  return verseStr ? `${base}/${verseStr}` : base;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostById(slug);

  if (!post) {
    return (
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="font-serif text-3xl font-bold text-[color:var(--color-label)] mb-3">Post Not Found</h1>
          <p className="text-[color:var(--color-secondary-label)] mb-6">The blog post you&apos;re looking for couldn&apos;t be found.</p>
          <Link href="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const allPosts = getAllBlogPosts();
  const relatedPosts = post.relatedSlugs
    .map((s) => allPosts.find((p) => p.id === s))
    .filter(Boolean);

  // Word count (rough — content body only, used in Article schema for the
  // "Long-form article" rich result eligibility signal).
  const wordCount = post.sections
    .map((s) => s.content.split(/\s+/).length)
    .reduce((a, b) => a + b, 0);

  // Build a comma-separated keyword list combining category + key verses +
  // bible-reading references — gives Article schema strong topical signals.
  const articleKeywords = [
    post.category,
    'Bible study',
    'Jesus Christ',
    ...post.keyVerses.map((v) => v.reference),
    ...post.bibleReading.map((r) => r.reference),
  ].join(', ');

  // Schema.org Article structured data — comprehensive version. Uses ISO
  // datePublished (was a human-readable string before, which Google can't
  // parse), adds dateModified, mainEntityOfPage, image as ImageObject,
  // publisher logo, articleSection, keywords, wordCount, and inLanguage —
  // all of which contribute to richer SERP appearance and rich-result
  // eligibility.
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url: `https://learnofchrist.com/blog/${slug}`,
    datePublished: toIsoDate(post.date),
    dateModified: new Date().toISOString(),
    inLanguage: 'en',
    articleSection: post.category,
    keywords: articleKeywords,
    wordCount,
    image: {
      '@type': 'ImageObject',
      url: post.image,
      width: 1200,
      height: 630,
      caption: post.imageAlt,
    },
    author: {
      '@type': 'Person',
      name: post.author.name,
      affiliation: {
        '@type': 'Organization',
        name: 'Learn of Christ',
        url: 'https://learnofchrist.com',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Learn of Christ',
      url: 'https://learnofchrist.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://learnofchrist.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://learnofchrist.com/blog/${slug}`,
    },
    isAccessibleForFree: true,
  };

  // BreadcrumbList — drives the breadcrumb trail rich result in SERPs.
  // The page already renders <BreadcrumbNav> visually but Google needs the
  // schema to surface it in the result snippet.
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://learnofchrist.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://learnofchrist.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://learnofchrist.com/blog/${slug}` },
    ],
  };

  // Schema.org FAQPage structured data
  const faqJsonLd =
    post.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <div className="page-container">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}

      <div className="max-w-3xl mx-auto">
        <BreadcrumbNav
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: '#' },
          ]}
        />

        {/* Blog Label */}
        <div className="mb-4">
          <span className="inline-block pill pill-gold text-[0.6875rem] font-semibold tracking-wide uppercase">
            Blog
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[color:var(--color-label)] mb-5 leading-tight">
          {post.title}
        </h1>

        {/* Hero Image — Next/Image optimization enabled (drops the
            unoptimized flag) so Vercel serves WebP/AVIF at the right
            size. Cuts LCP by ~30-50% on slow connections and gives Google
            a clean responsive image bundle. */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        {/* Author Bar */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-8 pb-6 border-b border-[rgba(60,60,67,0.08)]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--vesper-gold)]/20 to-[#5AC8FA]/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  unoptimized
                />
              ) : (
                <svg className="w-6 h-6 text-[color:var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )}
            </div>
            <div>
              <p className="text-sm font-semibold text-[color:var(--color-label)]">{post.author.name}</p>
              <p className="text-xs text-[color:var(--color-secondary-label)]">{post.author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-[color:var(--color-secondary-label)]">
            <span>{post.date}</span>
            <span className="text-[color:var(--color-tertiary-label)]">|</span>
            <span>{post.readTime}</span>
            <span
              className={`pill !py-0.5 !px-2.5 !text-[0.65rem] ${
                categoryColors[post.category] || 'bg-gray-50 text-gray-600'
              }`}
            >
              {post.category}
            </span>
          </div>
        </div>

        {/* Table of Contents */}
        {post.sections.length > 1 && (
          <div className="bg-[color:var(--color-surface)] rounded-2xl p-5 sm:p-7 mb-6">
            <h2 className="font-sans text-base font-semibold text-[color:var(--color-label)] mb-4">
              In This Article
            </h2>
            <nav>
              <ol className="space-y-2">
                {post.sections.map((section, i) => (
                  <li key={i}>
                    <a
                      href={`#${slugify(section.heading)}`}
                      className="flex items-center gap-3 text-sm text-[color:var(--color-secondary-label)] hover:text-[color:var(--color-primary)] transition-colors group"
                    >
                      <span className="w-6 h-6 rounded-full bg-[var(--color-bg)] text-[0.6875rem] font-semibold text-[color:var(--color-secondary-label)] group-hover: group-hover:text-[color:var(--color-primary)] flex items-center justify-center flex-shrink-0 transition-colors">
                        {i + 1}
                      </span>
                      <span className="leading-snug">{section.heading}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        )}

        {/* Article Content */}
        <article className="mb-6">
          {post.sections.map((section, i) => (
            <div key={i} className="mb-8 last:mb-0">
              <h2
                id={slugify(section.heading)}
                className="font-serif text-xl sm:text-2xl font-bold text-[color:var(--color-label)] mb-4 scroll-mt-6"
              >
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.content.split('\n\n').map((paragraph, j) => (
                  <p
                    key={j}
                    className="font-serif text-[0.9375rem] sm:text-base text-[color:var(--color-label)]/75 leading-[1.8]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.image && (
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mt-5">
                  <Image
                    src={section.image}
                    alt={section.imageAlt || section.heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
              )}
            </div>
          ))}
        </article>

        {/* FAQ Section */}
        {post.faq.length > 0 && (
          <div className="bg-[color:var(--color-surface)] rounded-2xl p-5 sm:p-7 mb-4">
            <h2 className="font-sans text-base font-semibold text-[color:var(--color-label)] mb-4">
              Frequently Asked Questions
            </h2>
            <BlogFAQ items={post.faq} />
          </div>
        )}

        {/* Key Verses — references now auto-link to /bible/<book>/<ch>/<verse>
            so each post becomes an internal-link source pointing at the
            verse-explainer pages. Big internal-linking win for both pages. */}
        {post.keyVerses.length > 0 && (
          <div className="bg-[color:var(--color-surface)] rounded-2xl p-5 sm:p-7 mb-4">
            <h2 className="font-sans text-base font-semibold text-[color:var(--color-label)] mb-4">Key Verses</h2>
            <div className="space-y-3">
              {post.keyVerses.map((verse, i) => {
                const verseUrl = referenceToUrl(verse.reference);
                return (
                  <div
                    key={i}
                    className="frost-card border-l-[3px] border-[color:var(--vesper-gold)]/40 rounded-r-xl p-4"
                  >
                    <p className="font-serif text-sm text-[color:var(--color-label)]/75 leading-relaxed italic mb-1">
                      &ldquo;{verse.text}&rdquo;
                    </p>
                    {verseUrl ? (
                      <Link
                        href={verseUrl}
                        className="text-xs font-medium text-[color:var(--color-primary)] hover:underline"
                      >
                        — {verse.reference}
                      </Link>
                    ) : (
                      <p className="text-xs font-medium text-[color:var(--color-primary)]/70">
                        &mdash; {verse.reference}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Continue Reading */}
        {post.bibleReading.length > 0 && (
          <div className="bg-[color:var(--color-surface)] rounded-2xl p-5 sm:p-7 mb-4">
            <h2 className="font-sans text-base font-semibold text-[color:var(--color-label)] mb-3">
              Continue Reading in the Bible
            </h2>
            <div className="card-grouped">
              {post.bibleReading.map((reading, i) => (
                <Link
                  key={i}
                  href={reading.link}
                  className="card-grouped-item flex items-center gap-3 group"
                >
                  <div className="step-number">{i + 1}</div>
                  <span className="text-sm text-[color:var(--color-label)]/70 group-hover:text-[color:var(--color-primary)] transition-colors flex-1">
                    {reading.reference}
                  </span>
                  <svg
                    className="w-4 h-4 text-[color:var(--color-tertiary-label)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-10">
            <h2 className="font-sans text-lg font-semibold text-[color:var(--color-label)] mb-4 px-1">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((related) =>
                related ? (
                  <Link
                    key={related.id}
                    href={`/blog/${related.id}`}
                    className="block bg-[color:var(--color-surface)] rounded-2xl overflow-hidden group transition-shadow duration-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)]"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className={`pill !py-0.5 !px-2 !text-[0.6rem] ${
                            categoryColors[related.category] || 'bg-gray-50 text-gray-600'
                          }`}
                        >
                          {related.category}
                        </span>
                        <span className="text-[0.6rem] text-[color:var(--color-tertiary-label)]">{related.readTime}</span>
                      </div>
                      <h3 className="font-sans text-sm font-semibold text-[color:var(--color-label)] group-hover:text-[color:var(--color-primary)] transition-colors leading-snug line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ) : null
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
