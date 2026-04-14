import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts, categoryColors } from '@/data/blog-posts';

export const metadata = {
  title: 'Blog — Bible Study Articles & Devotionals | Learn of Christ',
  description: 'Read articles about understanding Jesus Christ, studying the Bible effectively, and applying Scripture to daily life.',
  openGraph: {
    title: 'Blog — Learn of Christ',
    description: 'Bible study articles, devotionals, and theological insights.',
    url: 'https://learnofchrist.com/blog',
  },
  alternates: {
    canonical: 'https://learnofchrist.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="page-header">
          <span className="inline-block pill pill-gold text-[0.6875rem] font-semibold tracking-wide uppercase mb-3">
            From the Study
          </span>
          <h1>Blog</h1>
          <div className="section-divider mt-3"></div>
          <p>Insights, devotionals, and articles about understanding Jesus Christ.</p>
        </div>

        {/* Featured Post */}
        {featured && (
          <Link
            href={`/blog/${featured.id}`}
            className="block bg-white rounded-2xl overflow-hidden mb-8 group transition-shadow duration-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)]"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
            <div className="p-5 sm:p-7">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`pill !py-0.5 !px-2.5 !text-[0.65rem] font-medium ${
                    categoryColors[featured.category] || 'bg-gray-50 text-gray-600'
                  }`}
                >
                  {featured.category}
                </span>
                <span className="text-xs text-[#86868B]">{featured.readTime}</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1D1D1F] mb-2 group-hover:text-[#007AFF] transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="text-sm text-[#86868B] leading-relaxed mb-4 line-clamp-3">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#007AFF]">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {rest.map((post) => (
            <article key={post.id}>
              <Link
                href={`/blog/${post.id}`}
                className="block bg-white rounded-2xl overflow-hidden h-full group transition-shadow duration-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 448px"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`pill !py-0.5 !px-2 !text-[0.6rem] font-medium ${
                        categoryColors[post.category] || 'bg-gray-50 text-gray-600'
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-[0.65rem] text-[#AEAEB2]">{post.readTime}</span>
                  </div>
                  <h2 className="font-sans text-base font-semibold text-[#1D1D1F] mb-1.5 group-hover:text-[#007AFF] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-xs text-[#86868B] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
