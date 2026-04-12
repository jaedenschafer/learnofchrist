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
  {
    id: '1',
    title: 'Understanding the Parables of Jesus',
    excerpt: 'Jesus taught through parables to reveal spiritual truths. Discover how these stories continue to transform our understanding of God\'s kingdom.',
    date: 'March 15, 2026',
    category: 'Teaching',
  },
  {
    id: '2',
    title: 'The Meaning of Grace in Scripture',
    excerpt: 'Grace is more than a concept—it\'s the foundation of our relationship with God. Explore what Scripture says about this transformative gift.',
    date: 'March 8, 2026',
    category: 'Theology',
  },
  {
    id: '3',
    title: 'Finding Peace in a Chaotic World',
    excerpt: 'Jesus offers a peace that transcends circumstances. Learn how to cultivate inner peace through trust and prayer.',
    date: 'March 1, 2026',
    category: 'Application',
  },
  {
    id: '4',
    title: 'The Resurrection: Christ\'s Ultimate Victory',
    excerpt: 'The resurrection of Jesus is the cornerstone of Christian faith. Discover its profound implications for our hope and eternity.',
    date: 'February 22, 2026',
    category: 'Theology',
  },
  {
    id: '5',
    title: 'Living Out the Sermon on the Mount',
    excerpt: 'Jesus\'s teachings in the Sermon on the Mount challenge us to transform from the inside out. How can we apply these principles today?',
    date: 'February 15, 2026',
    category: 'Teaching',
  },
  {
    id: '6',
    title: 'Forgiveness: Releasing Hurt and Finding Healing',
    excerpt: 'Forgiveness is both a spiritual principle and a healing practice. Learn how to forgive as Jesus forgave.',
    date: 'February 8, 2026',
    category: 'Application',
  },
];

export default function BlogPage() {
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-navy mb-4">Blog</h1>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto">
            Insights, devotionals, and articles about understanding Jesus Christ and living out your faith.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <button className="px-4 py-2 rounded-full bg-gold text-navy font-medium hover:bg-opacity-90 transition-all">
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-white border-2 border-navy text-navy font-medium hover:bg-navy hover:text-cream transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Placeholder for featured image */}
                <div className="md:w-64 h-48 md:h-auto bg-gradient-to-br from-gold to-sage rounded-lg flex-shrink-0 flex items-center justify-center">
                  <div className="text-white text-4xl">📖</div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-3 mb-3">
                      <span className="text-xs font-semibold text-sage uppercase tracking-wide">{post.category}</span>
                      <span className="text-xs text-sage">{post.date}</span>
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-navy mb-3">{post.title}</h2>
                    <p className="text-navy/80 mb-4">{post.excerpt}</p>
                  </div>
                  <div>
                    <Link href={`/blog/${post.id}`} className="text-gold font-medium hover:text-navy transition-colors flex items-center gap-2">
                      Read More
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
}
