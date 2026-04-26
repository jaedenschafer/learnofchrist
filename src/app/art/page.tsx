import Link from 'next/link';
import type { Metadata } from 'next';
import {
  getArtworksBySources,
  getManuscriptArtworks,
  getBooksWithArt,
} from '@/lib/supabase';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ArtRowCarousel from '@/components/ArtRowCarousel';
import ArtFilterBar from '@/components/ArtFilterBar';

// Cache the showcase rows for an hour — they don't change often, and this
// page is the highest-traffic art surface.
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

/**
 * Curated rows for the showcase. Each row is "give me the latest from this
 * style/group of artists" — getArtworksBySources orders by created_at so
 * the row stays fresh as new ingests land. The seeAllHref deep-links into
 * /art/browse with the matching artist or theme params so the reader can
 * keep going.
 *
 * Row order is editorial: featured first (mixed), then by historical
 * style, then by source. The Ancient Manuscripts row is last because
 * those are visually similar parchment and are richer as context for an
 * individual chapter than as a browse experience.
 */
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
    sources: ['blake', 'gap_fill'], // gap_fill includes Hicks, Holman Hunt, Watts
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
];

export default async function ArtShowcasePage() {
  // Fetch all the rows in parallel + the meta numbers for the filter bar.
  const [
    booksWithArt,
    renaissance,
    devotional,
    romantic,
    icons,
    illustrators,
    museums,
    manuscripts,
  ] = await Promise.all([
    getBooksWithArt(),
    getArtworksBySources(SHOWCASE_ROWS[0].sources, 18),
    getArtworksBySources(SHOWCASE_ROWS[1].sources, 18),
    getArtworksBySources(SHOWCASE_ROWS[2].sources, 18),
    getArtworksBySources(SHOWCASE_ROWS[3].sources, 18),
    getArtworksBySources(SHOWCASE_ROWS[4].sources, 18),
    getArtworksBySources(SHOWCASE_ROWS[5].sources, 18),
    getManuscriptArtworks(18),
  ]);

  // Total count: rough estimate from row totals (we don't need exact for
  // the meta line, and a separate count query would slow first paint).
  // Fall back to a reasonable floor.
  const approxTotal = 7800; // post-dedupe live approved count, refreshed on next deploy
  const rowData = [renaissance, devotional, romantic, icons, illustrators, museums];

  return (
    <div className="page-container">
      <div className="max-w-6xl mx-auto">
        <BreadcrumbNav items={[{ label: 'Art', href: '#' }]} />

        <header className="art-showcase-hero">
          <p className="art-showcase-hero__kicker">
            <span>Christian Art Library</span>
            <span aria-hidden="true">·</span>
            <span>Public Domain</span>
          </p>
          <h1 className="art-showcase-hero__title">
            Two thousand years of Christian art, indexed to scripture.
          </h1>
          <p className="art-showcase-hero__dek">
            Renaissance masters, Russian icons, 19th-century engravings, ancient
            Latin manuscripts — every piece linked to the chapter it depicts.
            Browse by style below, or search by artist, scripture, or theme.
          </p>
        </header>

        <ArtFilterBar totalCount={approxTotal} bookCount={booksWithArt.length} />

        {SHOWCASE_ROWS.map((row, i) => (
          <ArtRowCarousel
            key={row.title}
            title={row.title}
            subtitle={row.subtitle}
            kicker={row.kicker}
            seeAllHref={row.seeAllHref}
            artworks={rowData[i] ?? []}
            priorityFirst={i === 0}
          />
        ))}

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
