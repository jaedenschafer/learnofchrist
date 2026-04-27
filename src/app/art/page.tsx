import Link from 'next/link';
import type { Metadata } from 'next';
import {
  getArtworksBySources,
  getManuscriptArtworks,
  getBooksWithArt,
  getFeaturedHeroArtwork,
  getFeaturedArtistShowcase,
} from '@/lib/supabase';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ArtRowCarousel from '@/components/ArtRowCarousel';
import ArtFilterBar from '@/components/ArtFilterBar';
import ArtShowcaseHero from '@/components/ArtShowcaseHero';
import ArtFeaturedArtist from '@/components/ArtFeaturedArtist';

// Cache for an hour — showcase rows + featured artist are deterministic
// rotations so the same visitor gets the same look until the cache flips.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Christian Art — Public Domain Bible Illustrations | Learn of Christ',
  description:
    'A free, growing showcase of historic Christian art — Renaissance masters, Russian icons, 19th-century engravings, ancient Latin manuscripts — all indexed to scripture.',
  openGraph: {
    title: 'Christian Art — Public Domain Bible Illustrations',
    description:
      'A free, growing showcase of historic Christian art, indexed to scripture.',
    url: 'https://learnofchrist.com/art',
  },
  alternates: {
    canonical: 'https://learnofchrist.com/art',
  },
};

const SHOWCASE_ROWS = [
  {
    title: 'Renaissance & Baroque masters',
    subtitle:
      'Caravaggio, Michelangelo, Raphael, Rembrandt, Rubens, Fra Angelico — the painters who shaped Western religious imagery.',
    kicker: 'Style',
    sources: ['caravaggio', 'michelangelo', 'raphael', 'rembrandt', 'rubens', 'fra-angelico', 'giotto', 'duccio'],
    seeAllHref: '/art/browse?era=renaissance&era=baroque&era=medieval&sort=year_asc',
  },
  {
    title: 'Devotional realism',
    subtitle:
      'Nineteenth-century Northern European painters whose intimate images of Christ were copied into Bibles, prayer cards, and church windows worldwide.',
    kicker: 'Style',
    sources: ['bloch', 'hofmann', 'bouguereau', 'plockhorst'],
    seeAllHref:
      '/art/browse?artist=carl-bloch&artist=heinrich-hofmann&artist=william-adolphe-bouguereau&artist=bernhard-plockhorst',
  },
  {
    title: 'Romantic & visionary',
    subtitle:
      "William Blake's apocalyptic visions, Edward Hicks's Peaceable Kingdoms, Holman Hunt's Pre-Raphaelite light.",
    kicker: 'Style',
    sources: ['blake', 'gap_fill'],
    seeAllHref: '/art/browse?artist=william-blake&artist=edward-hicks&artist=william-holman-hunt&artist=george-frederic-watts&artist=thomas-cole',
  },
  {
    title: 'Russian & Byzantine icons',
    subtitle:
      'Andrei Rublev and Theophanes the Greek, plus the marginal psalters that survived the Iconoclast Controversy.',
    kicker: 'Style',
    sources: ['rublev', 'theophanes'],
    seeAllHref: '/art/browse?artist=andrei-rublev&artist=theophanes-the-greek&artist=khludov-master',
  },
  {
    title: '19th-century Bible illustrators',
    subtitle:
      "Gustave Doré's 241 wood engravings, James Tissot's Brooklyn watercolors, Schnorr von Carolsfeld's German Picture Bible — the popular illustrated Bibles that shaped modern visual imagination.",
    kicker: 'Style',
    sources: ['dore', 'tissot', 'schnorr'],
    seeAllHref: '/art/browse?artist=gustave-dore&artist=james-tissot&artist=julius-schnorr-von-carolsfeld&era=modern',
  },
  {
    title: 'From the great museums',
    subtitle:
      'Public-domain works from the Metropolitan Museum and Rijksmuseum, including Renaissance Madonnas, Dutch genre scenes, and devotional prints.',
    kicker: 'Source',
    sources: ['met_openaccess', 'rijksmuseum'],
    seeAllHref: '/art/browse?sort=popular',
  },
] as const;

/**
 * Italic scripture pull-quotes that sit between major sections — a small
 * editorial moment that breaks up the rhythm and connects the art back to
 * the reason any of it exists. We rotate through them in sequence and
 * stop once we run out, leaving the remaining rows undivided.
 */
const PULL_QUOTES = [
  {
    text: 'Behold, I make all things new.',
    citation: 'Revelation 21:5',
  },
  {
    text: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
    citation: 'John 1:1',
  },
  {
    text: 'Let the little children come unto me.',
    citation: 'Mark 10:14',
  },
];

export default async function ArtShowcasePage() {
  const [
    booksWithArt,
    heroArtwork,
    featuredArtist,
    renaissance,
    devotional,
    romantic,
    icons,
    illustrators,
    museums,
    manuscripts,
  ] = await Promise.all([
    getBooksWithArt(),
    getFeaturedHeroArtwork(),
    getFeaturedArtistShowcase(),
    getArtworksBySources(SHOWCASE_ROWS[0].sources as unknown as string[], 18),
    getArtworksBySources(SHOWCASE_ROWS[1].sources as unknown as string[], 18),
    getArtworksBySources(SHOWCASE_ROWS[2].sources as unknown as string[], 18),
    getArtworksBySources(SHOWCASE_ROWS[3].sources as unknown as string[], 18),
    getArtworksBySources(SHOWCASE_ROWS[4].sources as unknown as string[], 18),
    getArtworksBySources(SHOWCASE_ROWS[5].sources as unknown as string[], 18),
    getManuscriptArtworks(18),
  ]);

  const rowData = [renaissance, devotional, romantic, icons, illustrators, museums];

  // Pull a representative dominant_color from each row's leading artwork
  // so the kicker gets a tiny color dot that signatures the section.
  const accentColors = rowData.map(
    (works) => works.find((w) => !!w.dominant_color)?.dominant_color ?? null,
  );

  const approxTotal = 7800;

  return (
    <div className="page-container">
      <ArtShowcaseHero artwork={heroArtwork} />

      <div className="max-w-6xl mx-auto">
        <BreadcrumbNav items={[{ label: 'Art', href: '#' }]} />

        <ArtFilterBar totalCount={approxTotal} bookCount={booksWithArt.length} />

        {/* Featured artist — magazine-style mosaic above the style rows. */}
        {featuredArtist && (
          <>
            <ArtFeaturedArtist artist={featuredArtist.artist} works={featuredArtist.works} />
            <PullQuote {...PULL_QUOTES[0]} />
          </>
        )}

        <div id="showcase-rows">
          {SHOWCASE_ROWS.map((row, i) => (
            <div key={row.title}>
              <ArtRowCarousel
                title={row.title}
                subtitle={row.subtitle}
                kicker={row.kicker}
                seeAllHref={row.seeAllHref}
                artworks={rowData[i] ?? []}
                priorityFirst={i === 0 && !heroArtwork}
                accentColor={accentColors[i]}
              />
              {/* Drop a pull-quote every two rows for editorial cadence —
                  but skip the last one so the manuscripts row sits clean. */}
              {(i === 1 || i === 3) && PULL_QUOTES[i === 1 ? 1 : 2] && (
                <PullQuote {...PULL_QUOTES[i === 1 ? 1 : 2]} />
              )}
            </div>
          ))}
        </div>

        <ArtRowCarousel
          title="Ancient Latin manuscripts"
          subtitle="Folios from the oldest surviving Bibles — the Codex Amiatinus (c. 700, Northumbria), the Vivian Bible (845, Tours), and the Stuttgart Psalter (c. 825, Saint-Germain-des-Prés). Most pages are parchment text; some are full-page illuminations."
          kicker="Source"
          seeAllHref="/art/browse?era=early-christian&era=byzantine&era=medieval&sort=year_asc"
          artworks={manuscripts}
        />

        <section className="art-showcase-byBook">
          <h2 className="art-showcase-byBook__title">Browse by book of the Bible</h2>
          <p className="art-showcase-byBook__subtitle">
            Every chapter has art indexed to it.
          </p>
          <div className="art-showcase-byBook__grid">
            {booksWithArt.map((b) => (
              <Link
                key={b.slug}
                href={`/art/book/${b.slug}`}
                className="art-showcase-byBook__chip"
              >
                {b.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

/** Editorial italic pull-quote divider between sections.
 *  (`citation` not `ref` — `ref` is a reserved React prop name and would
 *   trigger React's ref-forwarding behavior instead of being passed through.) */
function PullQuote({ text, citation }: { text: string; citation: string }) {
  return (
    <div className="art-pullquote" role="presentation">
      <span className="art-pullquote__ornament" aria-hidden="true">·</span>
      <blockquote className="art-pullquote__text">
        <span className="art-pullquote__open" aria-hidden="true">&ldquo;</span>
        {text}
        <span className="art-pullquote__close" aria-hidden="true">&rdquo;</span>
      </blockquote>
      <cite className="art-pullquote__cite">{citation}</cite>
      <span className="art-pullquote__ornament" aria-hidden="true">·</span>
    </div>
  );
}
