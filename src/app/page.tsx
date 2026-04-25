import Link from 'next/link';
import dynamic from 'next/dynamic';
import { getAllTopics } from '@/data/topics';
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

const dailyVerses = [
  { text: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.', ref: 'Matthew 11:28', href: '/bible/matthew/11/28' },
  { text: 'I am the way, the truth, and the life: no man cometh unto the Father, but by me.', ref: 'John 14:6', href: '/bible/john/14/6' },
  { text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.', ref: 'John 3:16', href: '/bible/john/3/16' },
  { text: 'The Lord is my shepherd; I shall not want.', ref: 'Psalm 23:1', href: '/bible/psalms/23/1' },
  { text: 'Trust in the Lord with all thine heart; and lean not unto thine own understanding.', ref: 'Proverbs 3:5', href: '/bible/proverbs/3/5' },
  { text: 'Be still, and know that I am God.', ref: 'Psalm 46:10', href: '/bible/psalms/46/10' },
  { text: 'And we know that all things work together for good to them that love God.', ref: 'Romans 8:28', href: '/bible/romans/8/28' },
];

function getDailyVerse() {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000,
  );
  return dailyVerses[dayOfYear % dailyVerses.length];
}

// ─── Unsplash placeholders ───
// Stable, high-quality Unsplash photos as a starting visual layer. The user will
// swap these for branded photography later — keep all references in one place
// so the swap is a single mechanical edit.
const IMG = {
  hero:        'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=2400&q=80',
  mission:     'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80',
  multiLens:   'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1600&q=80',
  translations:'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1600&q=80',
  highlights:  'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80',
  story1:      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80',
  story2:      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  story3:      'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=900&q=80',
  finalCta:    'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=2400&q=80',
};

// ─── Stats ───
// Numbers a curious reader can verify quickly. Update these as the library grows.
const stats: Array<{ value: string; label: string }> = [
  { value: '66',     label: 'Books, every chapter studied' },
  { value: '1,189',  label: 'Chapters of the Bible' },
  { value: '13+',    label: 'Translations to compare' },
  { value: '1,000+', label: 'Sacred artworks indexed by passage' },
];

// ─── Stories ───
const stories: Array<{
  name: string;
  place: string;
  tag: string;
  quote: string;
  img: string;
}> = [
  {
    name: 'Anna',
    place: 'Phoenix, AZ',
    tag: 'HEALING',
    quote: '“I came back to the Bible after a decade away. The way Genesis 1 was laid out — Hebrew, art, and a clean voice — felt like permission to start again.”',
    img: IMG.story1,
  },
  {
    name: 'Marcus',
    place: 'Brooklyn, NY',
    tag: 'PEACE',
    quote: '“The translation switcher and the lenses changed how I read Romans. I see what I’ve always missed sitting in only one tradition.”',
    img: IMG.story2,
  },
  {
    name: 'Lena',
    place: 'Glasgow, UK',
    tag: 'DOUBT',
    quote: '“I’m a skeptic by training. The historical-critical lens, side-by-side with the others, finally gave me a way to read the Bible honestly.”',
    img: IMG.story3,
  },
];

export default async function Home() {
  const topics = getAllTopics().slice(0, 6);
  const verse = getDailyVerse();
  const blogPosts = getAllBlogPosts().slice(0, 4);
  const artworks = await getArtworksBrowse(10);

  return (
    <>
      {/* ═══════════ 1. HERO — full-bleed cinematic ═══════════ */}
      <section className="home-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.hero}
          alt=""
          className="home-hero__bg"
          loading="eager"
          fetchPriority="high"
        />
        <div className="home-hero__veil" aria-hidden="true" />
        <div className="home-hero__inner">
          <h1 className="home-hero__title">
            Find God in <span className="home-hero__title-em">the story.</span>
          </h1>
          <p className="home-hero__sub">
            One narrative runs from Genesis to Revelation, and Jesus is the thread.
            Read every chapter, study the original languages, and see scripture
            through 2,000 years of sacred art — all in one quiet place.
          </p>
          <div className="home-hero__ctas">
            <Link href="/study/genesis/1" className="home-btn home-btn--primary">
              Start with Genesis 1
              <ArrowRightIcon />
            </Link>
            <Link href="/bible" className="home-btn home-btn--ghost">
              Browse the Bible
            </Link>
          </div>
        </div>
        <div className="home-hero__continue">
          <ContinueReading />
        </div>
      </section>

      {/* ═══════════ 2. MISSION CARD — light, with photo right ═══════════ */}
      <section className="home-section home-section--alt">
        <div className="home-mission">
          <div className="home-mission__copy">
            <p className="home-eyebrow">Built for everyone</p>
            <h2 className="home-h2">
              A study deep enough to live in.
            </h2>
            <p className="home-lede">
              Whether you’re new to the Bible, a lifelong student, or a pastor
              looking deeper — Learn of Christ adapts to where you are. Pick a
              translation, choose a depth, and read alongside the way the
              Church has read this text for two thousand years.
            </p>
            <Link href="/study" className="home-btn home-btn--outline">
              See how it works
            </Link>
          </div>
          <div className="home-mission__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.mission}
              alt="A small group reading scripture together"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ 3. STATS STRIP ═══════════ */}
      <section className="home-stats">
        <div className="home-stats__inner">
          {stats.map((s) => (
            <div key={s.label} className="home-stat">
              <p className="home-stat__value">{s.value}</p>
              <p className="home-stat__label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ 4. FEATURES — alternating image/text rows ═══════════ */}
      <section className="home-section">
        <div className="home-section__head">
          <p className="home-eyebrow">Our tools</p>
          <h2 className="home-h2 home-h2--center">Tools that help the Word stick.</h2>
          <p className="home-lede home-lede--center">
            From verse-by-verse study to translation-comparison and a curated
            library of sacred art — every part of the site is built to help you
            slow down and pay attention.
          </p>
        </div>

        <Feature
          eyebrow="Multi-Lens Theology"
          title="The same passage. Six perspectives."
          body="Read every chapter through Catholic, Reformed, Latter-day Saint, Orthodox, Messianic, and historical-critical lenses — side by side. See where the Church agrees, and where it has always read this text differently."
          cta={{ href: '/study', label: 'Open a chapter' }}
          img={IMG.multiLens}
          alt="An open Bible lit by morning light"
          flip={false}
        />

        <Feature
          eyebrow="Living Translations"
          title="Switch translations. Stay in the verse."
          body="KJV, ASV, WEB and more, swap instantly without losing your place. The commentary stays anchored, the verse text adapts — so you can read what you trust without leaving the conversation."
          cta={{ href: '/bible', label: 'Browse the Bible' }}
          img={IMG.translations}
          alt="Bible viewed top-down on a wooden table"
          flip={true}
        />

        <Feature
          eyebrow="Sacred Art Library"
          title="Scripture, painted."
          body="Caravaggio, Rembrandt, Tissot, Doré — over a thousand classical artworks indexed by chapter and verse. Every piece is anchored to the passage it depicts so the painting and the text stay together."
          cta={{ href: '/art', label: 'See the gallery' }}
          img={IMG.multiLens}
          alt="Renaissance painting in a museum gallery"
          flip={false}
        />

        <Feature
          eyebrow="Highlight, Note, Compare"
          title="Your study, saved."
          body="Highlight any phrase in three colors with one tap. Add a note. Compare the verse instantly across translations — without ever leaving the chapter you’re in."
          cta={{ href: '/study/genesis/1', label: 'Try it on Genesis 1' }}
          img={IMG.highlights}
          alt="Hands writing in a journal beside an open Bible"
          flip={true}
        />
      </section>

      {/* ═══════════ 5. STORIES ═══════════ */}
      <section className="home-section home-section--alt">
        <div className="home-section__head">
          <p className="home-eyebrow">Life-changing stories</p>
          <h2 className="home-h2 home-h2--center">Faith in real life.</h2>
          <p className="home-lede home-lede--center">
            Real readers tell us what changed for them — one verse, one moment,
            one quiet morning at a time.
          </p>
        </div>
        <div className="home-stories">
          {stories.map((s) => (
            <article key={s.name} className="home-story">
              <div className="home-story__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={`Portrait of ${s.name}`} loading="lazy" />
                <span className="home-story__tag">{s.tag}</span>
              </div>
              <blockquote className="home-story__quote">{s.quote}</blockquote>
              <p className="home-story__byline">
                <strong>{s.name}</strong>
                <span> · {s.place}</span>
              </p>
            </article>
          ))}
        </div>
        <div className="home-section__foot">
          <Link href="/blog" className="home-btn home-btn--outline">
            Read more stories
          </Link>
        </div>
      </section>

      {/* ═══════════ 6. SACRED ART CAROUSEL ═══════════ */}
      {artworks.length > 0 && (
        <section className="home-section">
          <div className="home-section__head home-section__head--row">
            <div>
              <p className="home-eyebrow">Sacred art</p>
              <h2 className="home-h2">Two thousand years of paintings, anchored to scripture.</h2>
            </div>
            <Link href="/art" className="home-section__see-all">
              See the gallery →
            </Link>
          </div>
          <div className="home-art-rail">
            {artworks.map((art) => (
              <Link
                key={art.id}
                href={`/art/artwork/${art.slug}`}
                className="home-art-card"
              >
                <div className="home-art-card__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={art.thumbnail_url || art.image_url}
                    alt={art.title}
                    loading="lazy"
                  />
                </div>
                <p className="home-art-card__title">{art.title}</p>
                {art.artist && (
                  <p className="home-art-card__artist">{art.artist.name}</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ═══════════ 7. TOPICS ═══════════ */}
      <section className="home-section home-section--alt">
        <div className="home-section__head home-section__head--row">
          <div>
            <p className="home-eyebrow">Topics</p>
            <h2 className="home-h2">What does the Bible say about…</h2>
          </div>
          <Link href="/topics" className="home-section__see-all">
            All topics →
          </Link>
        </div>
        <div className="home-topics">
          {topics.map((topic) => (
            <Link key={topic.id} href={`/topics/${topic.id}`} className="home-topic">
              <h3 className="home-topic__title">{topic.name}</h3>
              <p className="home-topic__desc">{topic.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════ 8. NEWS / BLOG ═══════════ */}
      {blogPosts.length > 0 && (
        <section className="home-section">
          <div className="home-section__head home-section__head--row">
            <div>
              <p className="home-eyebrow">From the blog</p>
              <h2 className="home-h2">Reading & writing about the Word.</h2>
            </div>
            <Link href="/blog" className="home-section__see-all">
              All posts →
            </Link>
          </div>
          <div className="home-blog">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="home-blog-card">
                <div className="home-blog-card__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.imageAlt} loading="lazy" />
                </div>
                <div className="home-blog-card__body">
                  <span
                    className={`home-blog-card__category ${
                      categoryColors[post.category] || ''
                    }`}
                  >
                    {post.category}
                  </span>
                  <h3 className="home-blog-card__title">{post.title}</h3>
                  <p className="home-blog-card__excerpt">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ═══════════ 9. VERSE OF THE DAY ═══════════ */}
      <section className="home-section home-section--alt home-verse">
        <p className="home-eyebrow home-eyebrow--center">Verse of the day</p>
        <Link href={verse.href} className="home-verse__link">
          <blockquote className="home-verse__quote">
            “{verse.text}”
          </blockquote>
          <cite className="home-verse__cite">{verse.ref}</cite>
        </Link>
      </section>

      {/* ═══════════ 10. FINAL CTA — full-bleed cinematic ═══════════ */}
      <section className="home-final">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.finalCta}
          alt=""
          className="home-final__bg"
          loading="lazy"
        />
        <div className="home-final__veil" aria-hidden="true" />
        <div className="home-final__inner">
          <p className="home-eyebrow home-eyebrow--gold">Free, forever</p>
          <h2 className="home-final__title">
            No accounts. No ads. Just the Word.
          </h2>
          <p className="home-final__sub">
            Pick a book. Read a chapter. Stay as long as you want.
          </p>
          <Link href="/bible" className="home-btn home-btn--primary">
            Open the Bible
            <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </>
  );
}

// ─── Subcomponents ──────────────────────────────────────────────────────

function Feature({
  eyebrow,
  title,
  body,
  cta,
  img,
  alt,
  flip,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta: { href: string; label: string };
  img: string;
  alt: string;
  flip: boolean;
}) {
  return (
    <div className={`home-feature ${flip ? 'home-feature--flip' : ''}`}>
      <div className="home-feature__copy">
        <p className="home-eyebrow">{eyebrow}</p>
        <h3 className="home-feature__title">{title}</h3>
        <p className="home-feature__body">{body}</p>
        <Link href={cta.href} className="home-btn home-btn--outline">
          {cta.label}
          <ArrowRightIcon />
        </Link>
      </div>
      <div className="home-feature__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={alt} loading="lazy" />
      </div>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="home-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
