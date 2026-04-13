import Link from 'next/link';
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
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <div className="page-container">
      <div className="max-w-3xl mx-auto">
        <div className="page-header">
          <h1>Blog</h1>
          <div className="section-divider mt-3"></div>
          <p>Insights, devotionals, and articles about understanding Jesus Christ.</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <span className="pill pill-gold !font-semibold">All Posts</span>
          {categories.map((category) => (
            <span key={category} className={`pill ${categoryColors[category] || 'bg-gray-50 text-gray-600'}`}>{category}</span>
          ))}
        </div>

        {/* Featured Post */}
        {posts.length > 0 && (
          <Link href={`/blog/${posts[0].id}`} className="card group mb-6 block">
            <span className="pill pill-gold text-[10px] mb-3 inline-block">Latest</span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">{posts[0].title}</h2>
            <p className="text-sm text-navy/55 leading-relaxed mb-3">{posts[0].excerpt}</p>
            <div className="flex items-center gap-3 text-xs text-navy/40">
              <span className={`pill !py-0.5 !px-2 !text-[0.6rem] ${categoryColors[posts[0].category] || 'bg-gray-50 text-gray-600'}`}>{posts[0].category}</span>
              <span>{posts[0].date}</span>
              <span>{posts[0].readTime}</span>
            </div>
          </Link>
        )}

        {/* Posts */}
        <div className="space-y-3">
          {posts.slice(1).map((post) => (
            <article key={post.id}>
              <Link href={`/blog/${post.id}`} className="card group block">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-sage/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`pill !py-0.5 !px-2 !text-[0.6rem] ${categoryColors[post.category] || 'bg-gray-50 text-gray-600'}`}>{post.category}</span>
                      <span className="text-[0.65rem] text-navy/30">{post.date}</span>
                      <span className="text-[0.65rem] text-navy/30">{post.readTime}</span>
                    </div>
                    <h2 className="font-sans text-base font-semibold text-navy mb-1 group-hover:text-gold transition-colors leading-snug">{post.title}</h2>
                    <p className="text-xs text-navy/50 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                  <svg className="w-5 h-5 text-navy/20 flex-shrink-0 mt-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
