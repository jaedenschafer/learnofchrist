import Link from 'next/link';
import '@/styles/page-shell.css';

// ─── ISR ───
export const revalidate = 86400;

export const metadata = {
  title: 'About · Learn of Christ',
  description:
    'Learn of Christ is a free, beautiful place to study the Bible — chapter by chapter, in plain language, anchored to scripture.',
};

const VALUES = [
  {
    title: 'Free for everyone',
    desc:
      'Every chapter, study guide, and image is free to read. No paywall, no email gate, no sign-up wall standing between you and Scripture.',
  },
  {
    title: 'Anchored to scripture',
    desc:
      'Every page traces back to the Bible itself. We quote it, link to it, and try not to write a sentence the text would not back up.',
  },
  {
    title: 'Beautiful by default',
    desc:
      'Reading God&rsquo;s Word should feel like sitting in a cathedral, not staring at a tax form. Typography, light, and quiet space matter.',
  },
  {
    title: 'Christ at the center',
    desc:
      'Genesis to Revelation, one story is being told. Every study guide tries to show how its chapter fits into the larger arc that points to Jesus.',
  },
];

const OFFERS = [
  { title: 'Chapter-by-chapter study guides', desc: 'Detailed exploration of every chapter with key themes, original-language notes, and Christ connections.' },
  { title: 'Multiple translations', desc: 'KJV, ASV, BSB, WEB, JST, NWT, LSV, DRA — switch translations on any page.' },
  { title: 'Sacred art library', desc: '7,000+ public-domain Christian artworks indexed to the chapters they depict.' },
  { title: 'Guided study plans', desc: 'Short, focused journeys — Gospel of John, Genesis, the Psalms.' },
  { title: 'Topical resources', desc: 'Themes that run across the whole Bible, with verses and cross-references.' },
];

export default function AboutPage() {
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
            <p className="lop-eyebrow">About</p>
            <h1 className="lop-hero__title">
              A free, beautiful<br />place to study.
            </h1>
            <p className="lop-hero__sub">
              Learn of Christ is a study Bible for the open web &mdash;
              every chapter, every translation, every painting, all free
              and always will be.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ What we believe (values) ═══════════ */}
      <section className="lop-section">
        <div className="lop-wrap">
          <div className="lop-section__head">
            <p className="lop-eyebrow">What we believe</p>
            <h2 className="lop-section__title">Four things we will not move on.</h2>
          </div>
          <div className="lop-grid lop-grid--2">
            {VALUES.map((v) => (
              <article key={v.title} className="lop-card">
                <h3 className="lop-card__title">{v.title}</h3>
                <p
                  className="lop-card__copy"
                  dangerouslySetInnerHTML={{ __html: v.desc }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ What's here ═══════════ */}
      <section className="lop-section">
        <div className="lop-wrap">
          <div className="lop-section__head">
            <p className="lop-eyebrow">What&rsquo;s here</p>
            <h2 className="lop-section__title">Everything is free.</h2>
          </div>
          <div className="lop-grid">
            {OFFERS.map((o) => (
              <div key={o.title} className="lop-list-card">
                <div className="lop-list-card__body">
                  <h3 className="lop-card__title" style={{ fontSize: '1.25rem' }}>
                    {o.title}
                  </h3>
                  <p
                    className="lop-card__copy"
                    style={{ marginBottom: 0, WebkitLineClamp: 'unset' }}
                  >
                    {o.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ Closer ═══════════ */}
      <section className="lop-closer">
        <div className="lop-wrap lop-closer__inner">
          <div className="lop-closer__pane">
            <p className="lop-eyebrow lop-closer__eyebrow">Begin</p>
            <h2 className="lop-closer__title">Open the Word.</h2>
            <p className="lop-closer__sub">
              Pick a chapter, a topic, or a guided plan. The Bible is open.
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
