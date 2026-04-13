import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBlogPosts, getBlogPostById, categoryColors } from '@/data/blog-posts';
import BreadcrumbNav from '@/components/BreadcrumbNav';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostById(slug);

  if (!post) {
    return { title: 'Post Not Found | Learn of Christ' };
  }

  return {
    title: `${post.title} | Learn of Christ Blog`,
    description: post.excerpt,
    keywords: `${post.category}, Bible study, Jesus Christ, ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://learnofchrist.com/blog/${slug}`,
      type: 'article',
    },
    alternates: {
      canonical: `https://learnofchrist.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostById(slug);

  if (!post) {
    return (
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="font-serif text-3xl font-bold text-navy mb-3">Post Not Found</h1>
          <p className="text-navy/50 mb-6">The blog post you&apos;re looking for couldn&apos;t be found.</p>
          <Link href="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  // Schema.org structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `https://learnofchrist.com/blog/${slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Learn of Christ',
      url: 'https://learnofchrist.com',
    },
    author: {
      '@type': 'Organization',
      name: 'Learn of Christ',
    },
  };

  return (
    <div className="page-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <BreadcrumbNav items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: '#' },
        ]} />

        {/* Header */}
        <div className="card mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className={`pill !py-0.5 !px-2.5 !text-[0.65rem] ${categoryColors[post.category] || 'bg-gray-50 text-gray-600'}`}>{post.category}</span>
            <span className="text-xs text-navy/40">{post.date}</span>
            <span className="text-xs text-navy/40">{post.readTime}</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-3 leading-tight">{post.title}</h1>
          <p className="text-sm text-navy/55 leading-relaxed">{post.excerpt}</p>
        </div>

        {/* Article Content */}
        <article className="card mb-4">
          <div className="prose-content space-y-4">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-sm sm:text-[0.9375rem] text-navy/70 leading-[1.8]">{paragraph}</p>
            ))}
          </div>
        </article>

        {/* Key Verses */}
        {post.keyVerses.length > 0 && (
          <div className="card mb-4">
            <h2 className="font-sans text-base font-semibold text-navy mb-4">Key Verses</h2>
            <div className="space-y-3">
              {post.keyVerses.map((verse, i) => (
                <div key={i} className="bg-gold/[0.04] border-l-[3px] border-gold/40 rounded-r-xl p-4">
                  <p className="font-serif text-sm text-navy/75 leading-relaxed italic mb-1">
                    &ldquo;{verse.text}&rdquo;
                  </p>
                  <p className="text-xs font-medium text-gold/70">&mdash; {verse.reference}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Continue Reading */}
        {post.bibleReading.length > 0 && (
          <div className="card mb-4">
            <h2 className="font-sans text-base font-semibold text-navy mb-3">Continue Reading in the Bible</h2>
            <div className="card-grouped">
              {post.bibleReading.map((reading, i) => (
                <Link key={i} href={reading.link} className="card-grouped-item flex items-center gap-3 group">
                  <div className="step-number">{i + 1}</div>
                  <span className="text-sm text-navy/70 group-hover:text-gold transition-colors flex-1">{reading.reference}</span>
                  <svg className="w-4 h-4 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-8">
            <h2 className="font-sans text-lg font-semibold text-navy mb-4 px-1">More Articles</h2>
            <div className="space-y-3">
              {relatedPosts.map((related) => (
                <Link key={related.id} href={`/blog/${related.id}`} className="card group block">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`pill !py-0.5 !px-2 !text-[0.6rem] ${categoryColors[related.category] || 'bg-gray-50 text-gray-600'}`}>{related.category}</span>
                    <span className="text-[0.65rem] text-navy/30">{related.readTime}</span>
                  </div>
                  <h3 className="font-sans text-sm font-semibold text-navy group-hover:text-gold transition-colors">{related.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
