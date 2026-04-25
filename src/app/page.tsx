import Link from 'next/link';
import dynamic from 'next/dynamic';
import { getAllBlogPosts, categoryColors } from '@/data/blog-posts';
import { getArtworksBrowse } from '@/lib/supabase';
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
  hero:        'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=2400&q=85',
  mission:     'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1800&q=85',
  feat1:       'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1800&q=85',
  feat2:       'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1800&q=85',
  feat3:       'https://images.unsplash.com/photo-1438236320873-9c4ff3eb51f9?auto=format&fit=crop&w=1800&q=85',
  feat4:       'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1800&q=85',
  story1:      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85',
  story2:      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=1200&q=85',
  story3:      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1200&q=85',
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
  img: string;
}> = [
  {
    name: 'Anna',
    place: 'Phoenix, AZ',
    quote: 'I came back to the Bible after a decade away. The Hebrew, the art, the clean voice — it felt like permission to start again.',
    img: IMG.story1,
  },
  {
    name: 'Marcus',
    place: 'Brooklyn, NY',
    quote: 'The translation switcher and the lenses changed how I read Romans. I see what I had always missed sitting in only one tradition.',
    img: IMG.story2,
  },
  {
    name: 'Lena',
    place: 'Glasgow, UK',
    quote: 'I am a skeptic by training. Reading the historical-critical lens alongside the others finally gave me a way to read this honestly.',
    img: IMG.story3,
  },
];

// ─── Features — 4 alternating image / text rows ───
const features: Array<{
  eyebrow: string;
  title: string;
  body: string;
  cta: { href: string; label: string };
  img: string;
  alt: string;
}> = [
  {
    eyebrow: 'Multi-Lens Theology',
    title: 'The same passage, six perspectives.',
    body: 'Read every chapter through Catholic, Reformed, Latter-day Saint, Orthodox, Messianic, and historical-critical lenses, side by side. See where the Church agrees, and where it has always read this text differently.',
    cta: { href: '/study', label: 'Open a chapter' },
    img: IMG.feat1,
    alt: 'An open Bible lit by morning light',
  },
  {
    eyebrow: 'Living Translations',
    title: 'Switch translations. Stay in the verse.',
    body: 'KJV, ASV, WEB and more, swap instantly without losing your place. The commentary stays anchored, the verse text adapts, and the chapter you are reading does not skip a beat.',
    cta: { href: '/bible', label: 'Browse the Bible' },
    img: IMG.feat2,
    alt: 'A Bible viewed from above on a wooden table',
  },
  {
    eyebrow: 'Sacred Art Library',
    title: 'Scripture, painted.',
    body: 'Caravaggio, Rembrandt, Tissot, Doré — over a thousand classical artworks indexed by chapter and verse. Every piece is anchored to the passage it depicts so the painting and the text stay together.',
    cta: { href: '/art', label: 'See the gallery' },
    img: IMG.feat3,
    alt: 'Stained glass windows in a quiet stone chapel',
  },
  {
    eyebrow: 'Highlight, Note, Compare',
    title: 'Your study, saved.',
    body: 'Select any phrase to highlight in three colors with one tap. Add a note. Compare the verse across translations without leaving the chapter you are in.',
    cta: { href: '/study/genesis/1', label: 'Try it on Genesis 1' },
    img: IMG.feat4,
    alt: 'Hands writing in a journal beside an open Bible',
  },
];

export default async function Home() {
  const blogPosts = getAllBlogPosts().slice(0, 4);
  // Pull a few approved artworks to power the "Today" featured row. We pick
  // the first one with a Genesis 1 reference if we can find it; otherwise the
  // newest published piece in the gallery.
  const recentArt = await getArtworksBrowse(8);
  const featuredArt =
    recentArt.find((a) => /tissot|creation/i.test(a.title)) || recentArt[0] || null;
  const secondaryArt =
    recentArt.find((a) => featuredArt && a.id !== featuredArt.id) || null;

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
          <h1 className="loc-hero__title">
            Find God in the story.
          </h1>
          <p className="loc-hero__sub">
            One narrative runs from Genesis to Revelation. Read every chapter,
            study the original languages, and see scripture through two thousand
            years of sacred art.
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

      {/* ═══════════ 2. Continue reading rail (only renders if state) ═══════════ */}
      <section className="loc-continue">
        <div className="loc-wrap">
          <ContinueReading />
        </div>
      </section>

      {/* ═══════════ 2b. Today — image-forward featured cards ═══════════ */}
      <section className="loc-today">
        <div className="loc-wrap">
          <p className="loc-eyebrow loc-today__eyebrow">Today</p>
          <div className="loc-today__grid">
            {/* Featured: today's chapter */}
            <Link href="/study/genesis/1" className="loc-today-card loc-today-card--feature">
              {featuredArt && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={featuredArt.image_url || featuredArt.thumbnail_url || ''}
                  alt=""
                  className="loc-today-card__bg"
                  loading="lazy"
                />
              )}
              <div className="loc-today-card__veil" aria-hidden="true" />
              <div className="loc-today-card__body">
                <p className="loc-today-card__kicker">Featured study &middot; 18 min</p>
                <h3 className="loc-today-card__title">Genesis 1</h3>
                <p className="loc-today-card__sub">
                  Walk through the seven days, the Hebrew behind the words, and
                  how the chapter points to Christ.
                </p>
              </div>
              <span className="loc-today-card__cta" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Begin
              </span>
            </Link>

            {/* Secondary: today's art */}
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
                  <p className="loc-today-card__kicker">Today&rsquo;s painting</p>
                  <h3 className="loc-today-card__title loc-today-card__title--small">
                    {secondaryArt.title}
                  </h3>
                  {secondaryArt.artist && (
                    <p className="loc-today-card__sub">{secondaryArt.artist.name}</p>
                  )}
                </div>
              </Link>
            ) : (
              <Link href="/blog" className="loc-today-card loc-today-card--small loc-today-card--text">
                <div className="loc-today-card__body">
                  <p className="loc-today-card__kicker">From the blog</p>
                  <h3 className="loc-today-card__title loc-today-card__title--small">
                    What we are reading this week.
                  </h3>
                  <p className="loc-today-card__sub">Latest essays and reflections.</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════ 3. Mission — generous text on a clean surface ═══════════ */}
      <section className="loc-mission">
        <div className="loc-wrap loc-mission__inner">
          <p className="loc-eyebrow">Built for everyone</p>
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

      {/* ═══════════ 5. Features — 4 alternating image/text rows ═══════════ */}
      <section className="loc-features">
        <header className="loc-wrap loc-features__head">
          <p className="loc-eyebrow">Our tools</p>
          <h2 className="loc-features__title">Tools that help the Word stick.</h2>
          <p className="loc-features__lede">
            From verse-by-verse study to translation comparison and a curated
            library of sacred art, every part of the site is built to help you
            slow down and pay attention.
          </p>
        </header>

        {features.map((f, i) => (
          <div
            key={f.title}
            className={`loc-feature${i % 2 === 1 ? ' loc-feature--flip' : ''}`}
          >
            <div className="loc-wrap loc-feature__inner">
              <div className="loc-feature__copy">
                <p className="loc-eyebrow">{f.eyebrow}</p>
                <h3 className="loc-feature__title">{f.title}</h3>
                <p className="loc-feature__body">{f.body}</p>
                <Link href={f.cta.href} className="loc-btn loc-btn--outline">
                  {f.cta.label}
                </Link>
              </div>
              <div className="loc-feature__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.img} alt={f.alt} loading="lazy" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ═══════════ 6. Stories — 3 portraits ═══════════ */}
      <section className="loc-stories">
        <header className="loc-wrap loc-stories__head">
          <p className="loc-eyebrow">Real readers</p>
          <h2 className="loc-stories__title">Faith in real life.</h2>
        </header>
        <div className="loc-wrap loc-stories__grid">
          {stories.map((s) => (
            <article key={s.name} className="loc-story">
              <div className="loc-story__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={`Portrait of ${s.name}`} loading="lazy" />
              </div>
              <blockquote className="loc-story__quote">
                {`“${s.quote}”`}
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
