import Link from 'next/link';
import dynamic from 'next/dynamic';
import { getAllTopics } from '@/data/topics';
import { getAllBlogPosts, categoryColors } from '@/data/blog-posts';
import { getArtworksBrowse } from '@/lib/supabase';

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

const doorways = [
  {
    href: '/bible',
    eyebrow: 'Read',
    title: 'The whole Bible',
    body: 'Every chapter, eight translations side by side, a clean reading experience.',
    glyph: 'book',
    bg: 'linear-gradient(135deg, #2B3A55 0%, #4A5A7A 100%)',
    accent: '#F2C265',
  },
  {
    href: '/study',
    eyebrow: 'Study',
    title: 'Chapter deep dives',
    body: 'Hebrew and Greek where it matters. Themes, questions, and the thread of Christ from page one.',
    glyph: 'spark',
    bg: 'linear-gradient(135deg, #5C3B36 0%, #7E5247 100%)',
    accent: '#F0DABE',
  },
  {
    href: '/art',
    eyebrow: 'See',
    title: 'Sacred art, by passage',
    body: '1,000+ classical paintings — Caravaggio, Rembrandt, Tissot, Doré — anchored to scripture.',
    glyph: 'frame',
    bg: 'linear-gradient(135deg, #1F3A2F 0%, #3F6053 100%)',
    accent: '#E8C9A0',
  },
] as const;

function DoorwayGlyph({ kind }: { kind: 'book' | 'spark' | 'frame' }) {
  if (kind === 'book') {
    return (
      <svg viewBox="0 0 64 64" className="w-12 h-12" aria-hidden="true">
        <path
          d="M10 14c0-1.6 1.4-3 3-3h36c1.6 0 3 1.4 3 3v36c0 1.6-1.4 3-3 3H13c-1.6 0-3-1.4-3-3V14z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M32 11v42" stroke="currentColor" strokeWidth="2" />
        <path d="M18 22h8M18 30h8M38 22h8M38 30h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === 'spark') {
    return (
      <svg viewBox="0 0 64 64" className="w-12 h-12" aria-hidden="true">
        <path
          d="M32 6c0 8 4 14 12 14-8 0-12 6-12 14 0-8-4-14-12-14 8 0 12-6 12-14z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M48 38c0 6 3 10 9 10-6 0-9 4-9 10 0-6-3-10-9-10 6 0 9-4 9-10z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" className="w-12 h-12" aria-hidden="true">
      <rect
        x="10"
        y="14"
        width="44"
        height="36"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M16 44l10-12 8 8 6-6 8 10" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="42" cy="24" r="3" fill="currentColor" />
    </svg>
  );
}

export default async function Home() {
  const topics = getAllTopics().slice(0, 6);
  const verse = getDailyVerse();
  const blogPosts = getAllBlogPosts().slice(0, 3);
  const artworks = await getArtworksBrowse(8);

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(242,194,101,0.12) 0%, transparent 60%), linear-gradient(180deg, #0F1217 0%, #131820 100%)',
          }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto px-5 pt-20 pb-24 sm:pt-32 sm:pb-32 text-center">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-[#F2C265] mb-5">
            A free Bible study for everyone
          </p>
          <h1
            className="font-serif text-[2.75rem] sm:text-[4.25rem] lg:text-[5rem] leading-[1.02] tracking-tight text-white mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Find God in <span className="italic" style={{ color: '#F2C265' }}>the story.</span>
          </h1>
          <p className="text-[1.0625rem] sm:text-[1.1875rem] text-white/65 leading-relaxed max-w-2xl mx-auto mb-10">
            One narrative runs from Genesis to Revelation, and Jesus is the thread.
            Read every chapter, study the original languages, and see scripture
            through 2,000 years of sacred art — all in one quiet place.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/study/genesis/1"
              className="inline-flex items-center gap-2 bg-[#F2C265] text-[#1D1D1F] px-7 py-3.5 rounded-full text-[0.9375rem] font-semibold hover:bg-[#F5CB7A] transition-all active:scale-95"
            >
              Start with Genesis 1
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link
              href="/bible"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-7 py-3.5 rounded-full text-[0.9375rem] font-semibold hover:bg-white/15 transition-all active:scale-95 border border-white/15"
            >
              Browse the Bible
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ CONTINUE READING ═══════════ */}
      <section className="px-5 -mt-8 mb-12 sm:-mt-12 sm:mb-16 relative z-10">
        <div className="max-w-xl mx-auto">
          <ContinueReading />
        </div>
      </section>

      {/* ═══════════ THREE DOORWAYS ═══════════ */}
      <section className="px-5 pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-secondary-label)] mb-2">
              Three ways in
            </p>
            <h2 className="font-serif text-[2rem] sm:text-[2.5rem] tracking-tight text-[color:var(--color-label)] leading-tight">
              Read it. Study it. See it.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {doorways.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group relative overflow-hidden rounded-3xl p-7 sm:p-8 min-h-[260px] flex flex-col justify-between transition-transform active:scale-[0.99]"
                style={{ background: d.bg }}
              >
                <div style={{ color: d.accent }} className="opacity-90">
                  <DoorwayGlyph kind={d.glyph} />
                </div>
                <div className="text-white">
                  <p
                    className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] mb-2"
                    style={{ color: d.accent }}
                  >
                    {d.eyebrow}
                  </p>
                  <h3 className="font-serif text-[1.5rem] leading-tight mb-2">{d.title}</h3>
                  <p className="text-[0.9375rem] text-white/70 leading-relaxed">{d.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-white/90 group-hover:text-white transition-colors">
                    Open
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURED STUDY: GENESIS 1 ═══════════ */}
      <section className="px-5 pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/study/genesis/1"
            className="block relative overflow-hidden rounded-[2rem] group"
            style={{
              background:
                'radial-gradient(ellipse 60% 80% at 100% 0%, rgba(242,194,101,0.18) 0%, transparent 55%), linear-gradient(135deg, #1A1F2A 0%, #2C3548 100%)',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 sm:p-12 lg:p-16">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-[#F2C265] mb-3">
                  Featured study · 18 min
                </p>
                <h3 className="font-serif text-[2.25rem] sm:text-[2.75rem] tracking-tight text-white leading-[1.05] mb-4">
                  In the beginning,<br />God created.
                </h3>
                <p className="text-[1rem] sm:text-[1.0625rem] text-white/65 leading-relaxed mb-6 max-w-md">
                  Walk through Genesis 1 verse by verse — the Hebrew behind <em>tehom</em>,{' '}
                  <em>raqia&apos;</em>, and <em>bara&apos;</em>; the rhythm of seven days; the
                  thread that runs forward to John 1.
                </p>
                <span className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[#F2C265] group-hover:gap-3 transition-all">
                  Begin the deep dive
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
              <div className="hidden lg:flex items-center justify-center px-8 py-12">
                <div
                  className="font-serif italic text-white/30 text-center leading-snug"
                  style={{ fontSize: 'clamp(1.5rem, 1.8vw, 1.75rem)' }}
                >
                  &ldquo;And the Spirit of God moved upon the face of the waters.&rdquo;
                  <span className="block mt-3 not-italic text-[0.75rem] tracking-[0.22em] uppercase text-[#F2C265]/80">Genesis 1:2 · KJV</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══════════ VERSE OF THE DAY ═══════════ */}
      <section className="px-5 pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-secondary-label)] mb-5">
            Verse of the day
          </p>
          <Link href={verse.href} className="block group">
            <blockquote
              className="font-serif italic text-[color:var(--color-label)] leading-[1.25] mb-5"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              &ldquo;{verse.text}&rdquo;
            </blockquote>
            <cite className="not-italic text-[0.8125rem] font-semibold tracking-[0.22em] uppercase text-[color:var(--color-primary)] group-hover:underline">
              {verse.ref}
            </cite>
          </Link>
        </div>
      </section>

      {/* ═══════════ FEATURED ARTWORK STRIP ═══════════ */}
      {artworks.length > 0 && (
        <section className="pb-16 sm:pb-24">
          <div className="max-w-5xl mx-auto px-5 mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-secondary-label)] mb-2">
                Sacred art
              </p>
              <h2 className="font-serif text-[1.75rem] sm:text-[2.125rem] tracking-tight text-[color:var(--color-label)] leading-tight">
                Scripture, painted.
              </h2>
            </div>
            <Link
              href="/art"
              className="text-[0.875rem] font-semibold text-[color:var(--color-primary)] whitespace-nowrap hover:underline"
            >
              See the gallery →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <div className="px-5 max-w-5xl mx-auto flex gap-3 pb-3" style={{ scrollSnapType: 'x mandatory' }}>
              {artworks.map((art) => (
                <Link
                  key={art.id}
                  href={`/art/artwork/${art.slug}`}
                  className="flex-shrink-0 w-56 sm:w-64 group"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[color:var(--color-surface)] mb-2 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={art.thumbnail_url || art.image_url}
                      alt={art.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-[0.8125rem] font-semibold text-[color:var(--color-label)] line-clamp-1">
                    {art.title}
                  </p>
                  {art.artist && (
                    <p className="text-[0.75rem] text-[color:var(--color-tertiary-label)] line-clamp-1">
                      {art.artist.name}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ TOPICS ═══════════ */}
      <section className="px-5 pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-6 gap-4">
            <div>
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-secondary-label)] mb-2">
                Topics
              </p>
              <h2 className="font-serif text-[1.75rem] sm:text-[2.125rem] tracking-tight text-[color:var(--color-label)] leading-tight">
                What does the Bible say about…
              </h2>
            </div>
            <Link
              href="/topics"
              className="text-[0.875rem] font-semibold text-[color:var(--color-primary)] whitespace-nowrap hover:underline"
            >
              All topics →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                href={`/topics/${topic.id}`}
                className="bg-[color:var(--color-surface)] rounded-2xl p-5 group hover:shadow-md transition-all active:scale-[0.99] border border-[color:var(--color-separator)]"
              >
                <h3 className="font-serif text-[1.0625rem] text-[color:var(--color-label)] group-hover:text-[color:var(--color-primary)] transition-colors mb-1">
                  {topic.name}
                </h3>
                <p className="text-[0.8125rem] text-[color:var(--color-tertiary-label)] leading-relaxed line-clamp-2">
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FROM THE BLOG ═══════════ */}
      {blogPosts.length > 0 && (
        <section className="px-5 pb-16 sm:pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-6 gap-4">
              <div>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-secondary-label)] mb-2">
                  Reading & writing
                </p>
                <h2 className="font-serif text-[1.75rem] sm:text-[2.125rem] tracking-tight text-[color:var(--color-label)] leading-tight">
                  From the blog
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-[0.875rem] font-semibold text-[color:var(--color-primary)] whitespace-nowrap hover:underline"
              >
                All posts →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="bg-[color:var(--color-surface)] rounded-2xl overflow-hidden border border-[color:var(--color-separator)] hover:shadow-md transition-all group"
                >
                  <div className="aspect-[16/10] bg-[var(--color-fill-subtle)] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span
                      className={`inline-block text-[0.6875rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md mb-2 ${
                        categoryColors[post.category] || 'bg-gray-50 text-gray-700'
                      }`}
                    >
                      {post.category}
                    </span>
                    <h3 className="font-serif text-[1.125rem] text-[color:var(--color-label)] leading-tight mb-2 group-hover:text-[color:var(--color-primary)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[0.8125rem] text-[color:var(--color-tertiary-label)] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="px-5 pb-20 sm:pb-28">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-[2rem] p-10 sm:p-16 text-center"
            style={{
              background:
                'radial-gradient(ellipse 70% 80% at 50% 0%, rgba(242,194,101,0.15) 0%, transparent 60%), linear-gradient(180deg, #0F1217 0%, #131820 100%)',
            }}
          >
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-[#F2C265] mb-4">
              Free, forever
            </p>
            <h2 className="font-serif text-[2rem] sm:text-[2.75rem] tracking-tight text-white leading-tight mb-4">
              No accounts. No ads. Just the Word.
            </h2>
            <p className="text-[1rem] text-white/60 max-w-md mx-auto mb-8 leading-relaxed">
              Pick a book. Read a chapter. Stay as long as you want.
            </p>
            <Link
              href="/bible"
              className="inline-flex items-center gap-2 bg-[#F2C265] text-[#1D1D1F] px-7 py-3.5 rounded-full text-[0.9375rem] font-semibold hover:bg-[#F5CB7A] transition-all active:scale-95"
            >
              Open the Bible
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
