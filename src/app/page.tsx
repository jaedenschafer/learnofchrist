import Link from 'next/link';
import dynamic from 'next/dynamic';
import { getAllBlogPosts, categoryColors } from '@/data/blog-posts';
import { getCuratedHighlights } from '@/lib/supabase';
import ArtArches from '@/components/ArtArches';
import AppDashboard from '@/components/AppDashboard';
import './home.css';

// Below-the-fold + client-only — code-split so it doesn't block the hero.
const ContinueReading = dynamic(() => import('@/components/ContinueReading'), {
  loading: () => <div className="h-20" aria-hidden="true" />,
});

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
  hero:    'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=2400&q=85',
  mission: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1800&q=85',
};

// ─── Stats — facts a reader can verify quickly ───
const stats: Array<{ value: string; label: string }> = [
  { value: '1,189', label: 'Chapters of the Bible' },
  { value: '13+',   label: 'Translations side by side' },
  { value: '1,000+',label: 'Sacred artworks indexed by passage' },
  { value: 'Free',  label: 'No accounts, no ads' },
];

// ─── Stories — quotes the user will replace later ───
const stories: Array<{
  name: string;
  place: string;
  quote: string;
}> = [
  {
    name: 'Anna',
    place: 'Phoenix, AZ',
    quote: 'I came back to the Bible after a decade away. The Hebrew, the art, the clean voice — it felt like permission to start again.',
  },
  {
    name: 'Marcus',
    place: 'Brooklyn, NY',
    quote: 'The translation switcher and the lenses changed how I read Romans. I see what I had always missed sitting in only one tradition.',
  },
  {
    name: 'Lena',
    place: 'Glasgow, UK',
    quote: 'I am a skeptic by training. Reading the historical-critical lens alongside the others finally gave me a way to read this honestly.',
  },
];

export default async function Home() {
  const blogPosts = getAllBlogPosts().slice(0, 4);
  // One curated art query feeds both "Today" cards and the arches band.
  // Pulling from getCuratedHighlights guarantees no manuscript folios
  // surface anywhere on the home page (the previous secondaryArt was
  // showing a Codex Amiatinus page from the raw recent feed).
  const highlightArt = await getCuratedHighlights(30);
  const featuredArt =
    highlightArt.find((a) => /tissot|creation/i.test(a.title)) ||
    highlightArt[0] ||
    null;
  const secondaryArt =
    highlightArt.find((a) => featuredArt && a.id !== featuredArt.id) || null;
  const usedIds = new Set(
    [featuredArt?.id, secondaryArt?.id].filter(Boolean) as string[],
  );
  const archArt = highlightArt.filter((a) => !usedIds.has(a.id));

  return (
    <>
      {/* ═══════════ 1. Hero — full viewport, bottom-aligned ═══════════ */}
      <section className="loc-hero">
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
            <Link href="/study/genesis/1" className="loc-btn loc-btn--solid">
              Start with Genesis 1
            </Link>
            <Link href="/bible" className="loc-btn loc-btn--ghost">
              Browse the Bible
            </Link>
          </div>
        </div>

        <span className="loc-hero__scroll" aria-hidden="true">
          <span className="loc-hero__scroll-line" />
        </span>
      </section>

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

      {/* ═══════════ 2. Continue reading rail (only renders if state) ═══════════ */}
      <section className="loc-continue">
        <div className="loc-wrap">
          <ContinueReading />
        </div>
      </section>

      {/* ═══════════ 2b. From the gallery — art-focused so it doesn't
            duplicate the dashboard's reading slot ═══════════ */}
      <section className="loc-today">
        <div className="loc-wrap">
          <p className="loc-eyebrow loc-today__eyebrow">From the gallery</p>
          <div className="loc-today__grid">
            {/* Featured painting */}
            {featuredArt ? (
              <Link
                href={`/art/artwork/${featuredArt.slug}`}
                className="loc-today-card loc-today-card--feature"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featuredArt.image_url || featuredArt.thumbnail_url || ''}
                  alt=""
                  className="loc-today-card__bg"
                  loading="lazy"
                />
                <div className="loc-today-card__veil" aria-hidden="true" />
                <div className="loc-today-card__body">
                  <p className="loc-today-card__kicker">Today&rsquo;s painting</p>
                  <h3 className="loc-today-card__title">{featuredArt.title}</h3>
                  {featuredArt.artist && (
                    <p className="loc-today-card__sub">
                      {featuredArt.artist.name}
                      {featuredArt.year ? ` · ${featuredArt.year}` : ''}
                    </p>
                  )}
                </div>
                <span className="loc-today-card__cta" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                  View
                </span>
              </Link>
            ) : null}

            {/* Secondary painting or gallery CTA */}
            {secondaryArt ? (
              <Link
                href={`/art/artwork/${secondaryArt.slug}`}
                className="loc-today-card loc-today-card--small"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={secondaryArt.image_url || secondaryArt.thumbnail_url || ''}
                  alt=""
                  className="loc-today-card__bg"
                  loading="lazy"
                />
                <div className="loc-today-card__veil" aria-hidden="true" />
                <div className="loc-today-card__body">
                  <p className="loc-today-card__kicker">Also on view</p>
                  <h3 className="loc-today-card__title loc-today-card__title--small">
                    {secondaryArt.title}
                  </h3>
                  {secondaryArt.artist && (
                    <p className="loc-today-card__sub">{secondaryArt.artist.name}</p>
                  )}
                </div>
              </Link>
            ) : (
              <Link href="/art" className="loc-today-card loc-today-card--small loc-today-card--text">
                <div className="loc-today-card__body">
                  <p className="loc-today-card__kicker">Browse the library</p>
                  <h3 className="loc-today-card__title loc-today-card__title--small">
                    A thousand sacred works, indexed by passage.
                  </h3>
                  <p className="loc-today-card__sub">Open the gallery.</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════ 3. Mission — generous text on a clean surface ═══════════ */}
      <section className="loc-mission">
        <div className="loc-wrap loc-mission__inner">
          <p className="loc-eyebrow">The mission</p>
          <h2 className="loc-mission__title">
            A study deep enough to live in.
          </h2>
          <p className="loc-mission__lede">
            Whether you are new to the Bible, a lifelong student, or a pastor
            looking deeper, Learn of Christ adapts to where you are. Pick a
            translation, choose a depth, and read alongside the way the Church
            has read this text for two thousand years.
          </p>
          <Link href="/study" className="loc-btn loc-btn--outline">
            See how it works
          </Link>
        </div>
      </section>

      {/* ═══════════ 4. Stats — dark band, large numbers ═══════════ */}
      <section className="loc-stats">
        <div className="loc-wrap loc-stats__grid">
          {stats.map((s) => (
            <div key={s.label} className="loc-stat">
              <p className="loc-stat__value">{s.value}</p>
              <p className="loc-stat__label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ 6. Stories — editorial pull-quote grid ═══════════ */}
      <section className="loc-stories">
        <header className="loc-wrap loc-stories__head">
          <p className="loc-eyebrow">Real readers</p>
          <h2 className="loc-stories__title">Faith in real life.</h2>
          <p className="loc-stories__lede">
            Notes from people studying alongside us — pastors, skeptics,
            new believers, and lifelong students of the Word.
          </p>
        </header>
        <div className="loc-wrap loc-stories__grid">
          {stories.map((s) => (
            <article key={s.name} className="loc-story">
              <span className="loc-story__mark" aria-hidden="true">&ldquo;</span>
              <blockquote className="loc-story__quote">
                {s.quote}
              </blockquote>
              <p className="loc-story__byline">
                <strong>{s.name}</strong>
                <span> &middot; {s.place}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════ 7. From the blog ═══════════ */}
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

      {/* ═══════════ 8. Closer — invitation, full-bleed mission photo ═══════════ */}
      <section className="loc-closer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.mission}
          alt=""
          className="loc-closer__bg"
          loading="lazy"
        />
        <div className="loc-closer__veil" aria-hidden="true" />
        <div className="loc-wrap loc-closer__inner">
          <h2 className="loc-closer__title">
            Pick a book. Read a chapter.
          </h2>
          <p className="loc-closer__sub">
            No accounts. No ads. Just the Word.
          </p>
          <Link href="/bible" className="loc-btn loc-btn--solid">
            Open the Bible
          </Link>
        </div>
      </section>
    </>
  );
}
