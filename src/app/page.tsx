import Link from 'next/link';
import { getAllBlogPosts, categoryColors } from '@/data/blog-posts';
import { getCuratedHighlights } from '@/lib/supabase';
import ArtArches from '@/components/ArtArches';
import AppDashboard from '@/components/AppDashboard';
import StudyShowcase from '@/components/StudyShowcase';
import HeroVideoBackground from '@/components/HeroVideoBackground';
import './home.css';

// ─── ISR ───
// Cache pages for 24h; regenerate in background after that.
export const revalidate = 86400;

export const metadata = {
  title: 'Learn of Christ — Free Bible Study for Everyone',
  description:
    'A free, beautiful place to study the Bible. Chapter-by-chapter guides, multiple translations, classical art, and Christ-centered commentary.',
};

// ─── Unsplash placeholders ────────────────────────────────────────────
// Stable Unsplash IDs as a starting visual layer. The user will swap them
// for branded photography later — keep all references in one place so the
// swap is mechanical.
const IMG = {
  // Hero: warm interior light with a single ray — less "stock Bible on
  // table", more "morning prayer light through the window".
  hero:    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2400&q=85',
  // Closer: ridgeline at golden hour — quiet, contemplative, big sky.
  closer:  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=85',
};

export default async function Home() {
  const blogPosts = getAllBlogPosts().slice(0, 4);
  // Curated art feeds the arches band (the gallery preview row above).
  // No manuscript folios — see getCuratedHighlights for the filter.
  const archArt = await getCuratedHighlights(30);

  return (
    <>
      {/* ═══════════ 1. Hero — full viewport, bottom-aligned ═══════════ */}
      <section className="loc-hero">
        {/* Looping YouTube background, ends at 0:57 to skip the logo. */}
        <HeroVideoBackground />
        {/* Static fallback shown while the video loads (or if YT fails). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.hero}
          alt=""
          className="loc-hero__bg"
          loading="eager"
          fetchPriority="high"
        />
        <div className="loc-hero__veil" aria-hidden="true" />

        <div className="loc-hero__inner">
          <p className="loc-hero__eyebrow">A free Bible study, beautifully made.</p>
          <h1 className="loc-hero__title">
            Find God<br />in the story.
          </h1>
          <p className="loc-hero__sub">
            One narrative runs from Genesis to Revelation. Read every chapter,
            study the original languages, and see scripture through two
            thousand years of sacred art.
          </p>
          <div className="loc-hero__ctas">
            {/* Single primary CTA. The secondary action drops to a quiet
                text link below it so the eye has one focal point. */}
            <Link href="/study/genesis/1" className="loc-btn loc-btn--solid">
              Start with Genesis 1
            </Link>
            <Link href="/bible" className="loc-hero__textlink">
              or browse the Bible
            </Link>
          </div>
        </div>

        <span className="loc-hero__scroll" aria-hidden="true">
          <span className="loc-hero__scroll-line" />
        </span>
      </section>

      {/* ═══════════ 2. Study showcase — vertical sticky 4-card stack ═══════════ */}
      {/* Moved up to sit directly under the hero so the rich-study story
          is the first thing people see after the headline. */}
      <StudyShowcase />

      {/* ═══════════ 1a. App-style dashboard ═══════════ */}
      <AppDashboard />

      {/* ═══════════ 1b. Resources mission — arched scrolling artwork ═══════════ */}
      <section className="loc-resources">
        <div className="loc-wrap loc-resources__head">
          <h2 className="loc-resources__title">
            We make resources to help people understand the Bible.
          </h2>
          <p className="loc-resources__sub">
            Chapter-by-chapter studies, classical art, original-language
            insights, and a clean reader — all free, all anchored in scripture.
          </p>
        </div>
        <ArtArches
          artworks={archArt}
          caption="A glimpse of the painting library — over a thousand sacred works indexed by passage."
        />
        <div className="loc-resources__cta">
          <Link href="/art" className="loc-btn loc-btn--outline">
            Browse the art library
          </Link>
        </div>
      </section>

      {/* ═══════════ 4. Mission — one declarative line ═══════════ */}
      <section className="loc-mission">
        <div className="loc-wrap loc-mission__inner">
          <p className="loc-eyebrow">The mission</p>
          <h2 className="loc-mission__title">
            A study deep enough to live in.
          </h2>
        </div>
      </section>

      {/* ═══════════ 5. From the blog ═══════════ */}
      {blogPosts.length > 0 && (
        <section className="loc-blog">
          <header className="loc-wrap loc-blog__head">
            <div>
              <p className="loc-eyebrow">From the blog</p>
              <h2 className="loc-blog__title">Reading and writing about the Word.</h2>
            </div>
            <Link href="/blog" className="loc-blog__see-all">
              All posts &rarr;
            </Link>
          </header>
          <div className="loc-wrap loc-blog__grid">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="loc-blog-card">
                <div className="loc-blog-card__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.imageAlt} loading="lazy" />
                </div>
                <div className="loc-blog-card__body">
                  <span
                    className={`loc-blog-card__category ${
                      categoryColors[post.category] || ''
                    }`}
                  >
                    {post.category}
                  </span>
                  <h3 className="loc-blog-card__title">{post.title}</h3>
                  <p className="loc-blog-card__excerpt">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ═══════════ 7. Closer — sun circles + frosted pane ═══════════ */}
      <section className="loc-closer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.closer}
          alt=""
          className="loc-closer__bg"
          loading="lazy"
        />
        <div className="loc-closer__veil" aria-hidden="true" />

        {/* Sun-circles — concentric rings in the Vesper palette that
            scale up via @keyframes when the section enters the viewport. */}
        <div className="loc-closer__sun" aria-hidden="true">
          <span className="loc-closer__sun-ring loc-closer__sun-ring--4" />
          <span className="loc-closer__sun-ring loc-closer__sun-ring--3" />
          <span className="loc-closer__sun-ring loc-closer__sun-ring--2" />
          <span className="loc-closer__sun-ring loc-closer__sun-ring--1" />
          <span className="loc-closer__sun-core" />
        </div>

        <div className="loc-wrap loc-closer__inner">
          <div className="loc-closer__pane">
            <p className="loc-eyebrow loc-closer__eyebrow">Begin</p>
            <h2 className="loc-closer__title">
              What should we study?
            </h2>
            <div className="loc-closer__choices">
              <Link href="/bible/john/1" className="loc-closer__choice">
                <span className="loc-closer__choice-num">01</span>
                <span className="loc-closer__choice-name">John 1</span>
                <span className="loc-closer__choice-sub">The Word made flesh</span>
              </Link>
              <Link href="/bible/genesis/1" className="loc-closer__choice">
                <span className="loc-closer__choice-num">02</span>
                <span className="loc-closer__choice-name">Genesis 1</span>
                <span className="loc-closer__choice-sub">Creation of the world</span>
              </Link>
              <Link href="/bible/psalms/23" className="loc-closer__choice">
                <span className="loc-closer__choice-num">03</span>
                <span className="loc-closer__choice-name">Psalm 23</span>
                <span className="loc-closer__choice-sub">The Lord is my shepherd</span>
              </Link>
              <Link href="/bible/romans/8" className="loc-closer__choice">
                <span className="loc-closer__choice-num">04</span>
                <span className="loc-closer__choice-name">Romans 8</span>
                <span className="loc-closer__choice-sub">No condemnation in Christ</span>
              </Link>
            </div>
            <Link href="/bible" className="loc-btn loc-btn--solid loc-closer__cta">
              Open the Bible
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
