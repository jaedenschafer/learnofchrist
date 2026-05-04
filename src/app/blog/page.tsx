import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/data/blog-posts';
import '@/styles/page-shell.css';

// ─── ISR ───
export const revalidate = 86400;

export const metadata = {
  title: 'Blog · Learn of Christ',
  description:
    'Articles, devotionals, and theological insights about understanding Jesus Christ and studying Scripture.',
  openGraph: {
    title: 'Blog · Learn of Christ',
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
    <main className="lop">
      {/* ═══════════ Hero ═══════════ */}
      <section className="lop-hero">
        <div className="lop-hero__sun" aria-hidden="true">
          <span className="lop-hero__sun-ring lop-hero__sun-ring--4" />
          <span className="lop-hero__sun-ring lop-hero__sun-ring--3" />
          <span className="lop-hero__sun-ring lop-hero__sun-ring--2" />
          <span className="lop-hero__sun-ring lop-hero__sun-ring--1" />
          <span className="lop-hero__sun-core" />
        </div>
        <div className="lop-wrap lop-hero__inner">
          <div className="lop-hero__pane">
            <p className="lop-eyebrow">From the Study</p>
            <h1 className="lop-hero__title">
              Reading and writing<br />about the Word.
            </h1>
            <p className="lop-hero__sub">
              Devotionals, deep dives, and short reflections on what we
              find when we read Scripture closely.
            </p>
            <div className="lop-hero__chips">
              <span>{posts.length} posts</span>
              <span className="lop-hero__chip-sep" aria-hidden="true">·</span>
              <span>Updated weekly</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ Featured + grid ═══════════ */}
      <section className="lop-section">
        <div className="lop-wrap">
          {featured && (
            <Link href={`/blog/${featured.id}`} className="lop-feature">
              <div className="lop-feature__media">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 1216px) 100vw, 1216px"
                  priority
                />
              </div>
              <div className="lop-feature__body">
                <span className="lop-card__meta">
                  <span className="lop-card__meta-key">{featured.category}</span>
                  <span className="lop-card__meta-sep" aria-hidden="true">·</span>
                  <span className="lop-card__meta-extra">{featured.readTime}</span>
                </span>
                <h2 className="lop-feature__title">{featured.title}</h2>
                <p className="lop-card__copy">{featured.excerpt}</p>
                <span className="lop-card__cta">Read it</span>
              </div>
            </Link>
          )}

          <div className="lop-section__head">
            <p className="lop-eyebrow">More from the blog</p>
            <h2 className="lop-section__title">Recent posts.</h2>
          </div>

          <div className="lop-grid lop-grid--2 lop-grid--3">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="lop-card">
                <div
                  className="lop-feature__media"
                  style={{ borderRadius: '18px', marginBottom: '1rem', aspectRatio: '16 / 10' }}
                >
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 720px) 100vw, (max-width: 1040px) 50vw, 380px"
                  />
                </div>
                <span className="lop-card__meta">
                  <span className="lop-card__meta-key">{post.category}</span>
                  <span className="lop-card__meta-sep" aria-hidden="true">·</span>
                  <span className="lop-card__meta-extra">{post.readTime}</span>
                </span>
                <h3 className="lop-card__title">{post.title}</h3>
                <p className="lop-card__copy">{post.excerpt}</p>
                <span className="lop-card__cta">Read</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ Closer ═══════════ */}
      <section className="lop-closer">
        <div className="lop-wrap lop-closer__inner">
          <div className="lop-closer__pane">
            <p className="lop-eyebrow lop-closer__eyebrow">Keep reading</p>
            <h2 className="lop-closer__title">
              The blog is short. The Bible is long.
            </h2>
            <p className="lop-closer__sub">
              Open Scripture itself when you&rsquo;re ready &mdash; or
              follow a guided reading plan to make the journey easier.
            </p>
            <div className="lop-closer__ctas">
              <Link href="/bible" className="btn-primary">Open the Bible</Link>
              <Link href="/study-plans" className="btn-outline">Pick a study plan</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
