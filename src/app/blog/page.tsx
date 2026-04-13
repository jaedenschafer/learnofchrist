import Link from 'next/link';

export const metadata = {
  title: 'Blog - Learn of Christ',
  description: 'Read insights, devotionals, and articles about understanding Jesus Christ and living out your faith.',
};

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const posts: BlogPost[] = [
  { id: '1', title: 'Understanding the Parables of Jesus', excerpt: 'Jesus taught through parables to reveal spiritual truths. Discover how these stories continue to transform our understanding of God\'s kingdom.', date: 'Mar 15, 2026', category: 'Teaching' },
  { id: '2', title: 'The Meaning of Grace in Scripture', excerpt: 'Grace is more than a concept — it\'s the foundation of our relationship with God. Explore what Scripture says about this transformative gift.', date: 'Mar 8, 2026', category: 'Theology' },
  { id: '3', title: 'Finding Peace in a Chaotic World', excerpt: 'Jesus offers a peace that transcends circumstances. Learn how to cultivate inner peace through trust and prayer.', date: 'Mar 1, 2026', category: 'Application' },
  { id: '4', title: 'The Resurrection: Christ\'s Ultimate Victory', excerpt: 'The resurrection of Jesus is the cornerstone of Christian faith. Discover its profound implications for our hope and eternity.', date: 'Feb 22, 2026', category: 'Theology' },
  { id: '5', title: 'Living Out the Sermon on the Mount', excerpt: 'Jesus\'s teachings in the Sermon on the Mount challenge us to transform from the inside out.', date: 'Feb 15, 2026', category: 'Teaching' },
  { id: '6', title: 'Forgiveness: Releasing Hurt and Finding Healing', excerpt: 'Forgiveness is both a spiritual principle and a healing practice. Learn how to forgive as Jesus forgave.', date: 'Feb 8, 2026', category: 'Application' },
];

const categoryColors: Record<string, string> = {
  Teaching: 'bg-blue-50 text-blue-700',
  Theology: 'bg-violet-50 text-violet-700',
  Application: 'bg-emerald-50 text-emerald-700',
};

export default function BlogPage() {
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
          <button className="pill pill-gold !font-semibold">All Posts</button>
          {categories.map((category) => (
            <button key={category} className="pill bg-white text-navy/60 ring-1 ring-black/[0.06]">{category}</button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-3">
          {posts.map((post) => (
            <article key={post.id} className="card group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-sage/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`pill !py-0.5 !px-2 !text-[0.6rem] ${categoryColors[post.category] || 'bg-gray-50 text-gray-600'}`}>{post.category}</span>
                    <span className="text-[0.65rem] text-navy/30">{post.date}</span>
                  </div>
                  <h2 className="font-sans text-base font-semibold text-navy mb-1 group-hover:text-gold transition-colors leading-snug">{post.title}</h2>
                  <p className="text-xs text-navy/50 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold mt-2 group-hover:gap-2 transition-all">
                    Read More
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="btn-secondary text-sm">Load More Posts</button>
        </div>
      </div>
    </div>
  );
}
