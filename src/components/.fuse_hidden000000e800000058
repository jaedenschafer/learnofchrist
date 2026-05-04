import Link from 'next/link';

/**
 * Four-card vertical sticky stack for the study guide's features.
 *
 * Inspired by base44.com's "01/04 Create at the speed of thought" stack.
 * Each card is its own 100svh sticky section that slides up over the
 * previous one as the user scrolls — the experience feels like cards
 * replacing each other in place, not a sideways carousel.
 *
 * Pure CSS via `position: sticky; top: 0` on each card. No JS.
 */

interface ShowcaseCard {
  n: string; // "01" through "04"
  eyebrow: string;
  title: string;
  body: string;
  cta: { href: string; label: string };
  visual: 'rich' | 'translations' | 'depth' | 'audio';
}

const CARDS: ShowcaseCard[] = [
  {
    n: '01',
    eyebrow: 'Rich study content',
    title: 'Hebrew, Greek, and the painters who saw it.',
    body: 'Every chapter pairs the verse with original-language callouts, Christ-connection notes, and classical art anchored to the passage it depicts.',
    cta: { href: '/study/genesis/1', label: 'Open Genesis 1' },
    visual: 'rich',
  },
  {
    n: '02',
    eyebrow: 'Eight translations',
    title: 'Switch translations without losing your place.',
    body: 'KJV, ASV, WEB, BSB, JST, NWT, LSV, and DRA — swap instantly and the commentary stays anchored to the verse.',
    cta: { href: '/bible/translations', label: 'See all translations' },
    visual: 'translations',
  },
  {
    n: '03',
    eyebrow: 'Depths and academic resources',
    title: 'Read in five minutes or five hours.',
    body: 'Toggle between Quick, Standard, and Deep. Cite Hebrew lexicons, manuscript variants, and church-father commentary at every level.',
    cta: { href: '/study', label: 'Browse study guides' },
    visual: 'depth',
  },
  {
    n: '04',
    eyebrow: 'Audio, notes, and your highlights',
    title: 'A study that remembers where you left off.',
    body: 'Listen to any chapter, highlight in three colors with one tap, leave verse-by-verse notes, and pick up exactly where you stopped — across devices.',
    cta: { href: '/account', label: 'Make it yours' },
    visual: 'audio',
  },
];

export default function StudyShowcase() {
  return (
    <div className="loc-showcase-stack" aria-label="What's inside the study">
      {CARDS.map((c) => (
        <section
          key={c.n}
          className="loc-showcase-card"
          aria-label={`${c.eyebrow}: ${c.title}`}
        >
          <div className="loc-wrap loc-showcase-card__inner">
            <div className="loc-showcase-card__copy">
              <p className="loc-showcase-card__pager">
                <span className="loc-showcase-card__num">{c.n}</span>
                <span className="loc-showcase-card__num-divider">{' / '}</span>
                <span className="loc-showcase-card__num-total">04</span>
                <span className="loc-showcase-card__pager-title">{c.eyebrow}</span>
              </p>
              <h2 className="loc-showcase-card__title">{c.title}</h2>
              <p className="loc-showcase-card__body">{c.body}</p>
              <Link href={c.cta.href} className="loc-btn loc-btn--solid loc-showcase-card__cta">
                {c.cta.label}
              </Link>
            </div>
            <div className="loc-showcase-card__visual" aria-hidden="true">
              <ShowcaseVisual kind={c.visual} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

/**
 * Inline frosted-glass mockups — one per card. Each is a small visual
 * vignette of the feature (sample verse with Hebrew callout, translation
 * tabs, depth pills, audio + note row). All built from the existing
 * frost tokens so they read as part of the same brand material.
 */
function ShowcaseVisual({ kind }: { kind: ShowcaseCard['visual'] }) {
  if (kind === 'rich') {
    return (
      <div className="loc-mock loc-mock--rich">
        <p className="loc-mock__verse">
          <sup>1</sup> In the beginning God created the heaven and the earth.
        </p>
        <div className="loc-mock__hebrew">
          <span className="loc-mock__hebrew-mark">&#1489;&#1468;&#1456;&#1512;&#1461;&#1488;&#1513;&#1473;&#1460;&#1497;&#1514;</span>
          <span className="loc-mock__hebrew-translit">b&#601;r&ecirc;&shy;&rsquo;&shy;&scaron;&icirc;t · in the beginning</span>
        </div>
        <p className="loc-mock__christ">
          <span className="loc-mock__pill">Christ connection</span>
          The same Word who spoke creation into being later took on flesh.
        </p>
      </div>
    );
  }
  if (kind === 'translations') {
    return (
      <div className="loc-mock loc-mock--trans">
        <div className="loc-mock__tabs">
          {['KJV', 'ASV', 'WEB', 'BSB'].map((t, i) => (
            <span key={t} className={`loc-mock__tab${i === 0 ? ' is-active' : ''}`}>{t}</span>
          ))}
        </div>
        <p className="loc-mock__verse loc-mock__verse--soft">
          <sup>1</sup> In the beginning God created the heaven and the earth.
        </p>
        <p className="loc-mock__alt">
          <strong>BSB</strong> · In the beginning God created the heavens and the earth.
        </p>
      </div>
    );
  }
  if (kind === 'depth') {
    return (
      <div className="loc-mock loc-mock--depth">
        <div className="loc-mock__depth-row">
          <span className="loc-mock__depth-pill">Quick · 5 min</span>
        </div>
        <div className="loc-mock__depth-row">
          <span className="loc-mock__depth-pill is-active">Standard · 18 min</span>
        </div>
        <div className="loc-mock__depth-row">
          <span className="loc-mock__depth-pill">Deep · 1 hr</span>
        </div>
        <p className="loc-mock__depth-foot">
          + manuscript variants &middot; lexicon &middot; church fathers
        </p>
      </div>
    );
  }
  // audio + notes
  return (
    <div className="loc-mock loc-mock--audio">
      <div className="loc-mock__audio-row">
        <span className="loc-mock__play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </span>
        <span className="loc-mock__audio-label">Genesis 1 &middot; 18 min</span>
        <span className="loc-mock__audio-bar"><span /></span>
      </div>
      <div className="loc-mock__note">
        <span className="loc-mock__note-tag">Verse 3</span>
        Light before the sun — God&rsquo;s creation isn&rsquo;t bound to its instruments.
      </div>
      <div className="loc-mock__highlight">
        <span className="loc-mock__hl loc-mock__hl--gold" />
        <span className="loc-mock__hl loc-mock__hl--peach" />
        <span className="loc-mock__hl loc-mock__hl--sky" />
        <span className="loc-mock__highlight-label">Highlight in three colors</span>
      </div>
    </div>
  );
}
