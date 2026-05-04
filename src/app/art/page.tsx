import Link from 'next/link';
import type { Metadata } from 'next';
import {
  getArtworksBySources,
  getManuscriptArtworks,
  getBooksWithArt,
  getArtistsWithArt,
  getFeaturedHeroArtwork,
  getFeaturedArtistShowcase,
  getFilteredArtworks,
  decodeCursor,
  encodeCursor,
  type ArtSort,
} from '@/lib/supabase';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ArtRowCarousel from '@/components/ArtRowCarousel';
import ArtFilterBar from '@/components/ArtFilterBar';
import ArtCard from '@/components/ArtCard';
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

const VALID_SORTS: ArtSort[] = [
  'recent', 'oldest', 'az', 'za', 'year_asc', 'year_desc', 'popular', 'relevance',
];

const RESULTS_PAGE_SIZE = 48;

const SHOWCASE_ROWS = [
  {
    title: 'Renaissance & Baroque masters',
    subtitle:
      'Caravaggio, Michelangelo, Raphael, Rembrandt, Rubens, Fra Angelico — the painters who shaped Western religious imagery.',
    kicker: 'Style',
    sources: ['caravaggio', 'michelangelo', 'raphael', 'rembrandt', 'rubens', 'fra-angelico', 'giotto', 'duccio'],
    seeAllHref: '/art?era=renaissance&era=baroque&era=medieval&sort=year_asc',
  },
  {
    title: 'Devotional realism',
    subtitle:
      'Nineteenth-century Northern European painters whose intimate images of Christ were copied into Bibles, prayer cards, and church windows worldwide.',
    kicker: 'Style',
    sources: ['bloch', 'hofmann', 'bouguereau', 'plockhorst'],
    seeAllHref:
      '/art?artist=carl-bloch&artist=heinrich-hofmann&artist=william-adolphe-bouguereau&artist=bernhard-plockhorst',
  },
  {
    title: 'Romantic & visionary',
    subtitle:
      "William Blake's apocalyptic visions, Edward Hicks's Peaceable Kingdoms, Holman Hunt's Pre-Raphaelite light.",
    kicker: 'Style',
    sources: ['blake', 'gap_fill'],
    seeAllHref: '/art?artist=william-blake&artist=edward-hicks&artist=william-holman-hunt&artist=george-frederic-watts&artist=thomas-cole',
  },
  {
    title: 'Russian & Byzantine icons',
    subtitle:
      'Andrei Rublev and Theophanes the Greek, plus the marginal psalters that survived the Iconoclast Controversy.',
    kicker: 'Style',
    sources: ['rublev', 'theophanes'],
    seeAllHref: '/art?artist=andrei-rublev&artist=theophanes-the-greek&artist=khludov-master',
  },
  {
    title: '19th-century Bible illustrators',
    subtitle:
      "Gustave Doré's 241 wood engravings, Schnorr von Carolsfeld's German Picture Bible — the popular illustrated Bibles that shaped modern visual imagination.",
    kicker: 'Style',
    sources: ['dore', 'schnorr'],
    seeAllHref: '/art?artist=gustave-dore&artist=julius-schnorr-von-carolsfeld&era=modern',
  },
  {
    title: 'From the great museums',
    subtitle:
      'Public-domain works from the Metropolitan Museum and Rijksmuseum, including Renaissance Madonnas, Dutch genre scenes, and devotional prints.',
    kicker: 'Source',
    sources: ['met_openaccess', 'rijksmuseum'],
    seeAllHref: '/art?sort=popular',
  },
  {
    title: "Caravaggio's chiaroscuro",
    subtitle:
      'Tenebrist drama from the painter who taught the Baroque how to use light. The Calling of Saint Matthew, the Conversion of Saul, the Supper at Emmaus.',
    kicker: 'Artist',
    sources: ['caravaggio'],
    seeAllHref: '/art?artist=caravaggio',
  },
  {
    title: "Rembrandt's gospel scenes",
    subtitle:
      "The Return of the Prodigal Son, Christ in the Storm on the Sea of Galilee, Belshazzar's Feast — Rembrandt's tender, light-soaked biblical paintings.",
    kicker: 'Artist',
    sources: ['rembrandt'],
    seeAllHref: '/art?artist=rembrandt-van-rijn',
  },
  {
    title: "Doré's Bible engravings",
    subtitle:
      'Two hundred and forty-one wood engravings published in 1866, the most widely reproduced visual Bible of the modern era.',
    kicker: 'Artist',
    sources: ['dore'],
    seeAllHref: '/art?artist=gustave-dore',
  },
  {
    title: 'The Italian Trecento',
    subtitle:
      'Giotto and Duccio at the dawn of Renaissance painting — gold-ground panels that taught Europe how to render sacred figures with weight, gesture, and inner life.',
    kicker: 'Era',
    sources: ['giotto', 'duccio'],
    seeAllHref: '/art?artist=giotto-di-bondone&artist=duccio-di-buoninsegna&era=medieval',
  },
  {
    title: 'Madonnas of the Renaissance',
    subtitle:
      'Raphael, Fra Angelico, Bellini, Botticelli — the painters who gave Western Christianity its enduring image of the Virgin and Child.',
    kicker: 'Theme',
    sources: ['raphael', 'fra-angelico', 'bellini', 'botticelli', 'lippi'],
    seeAllHref: '/art?artist=raphael-sanzio&artist=fra-angelico&artist=giovanni-bellini&artist=sandro-botticelli&artist=fra-filippo-lippi',
  },
] as const;

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

function asStringArray(v: string | string[] | undefined): string[] {
  if (v == null) return [];
  if (Array.isArray(v)) return v.filter(Boolean);
  return v.split(',').map((s) => s.trim()).filter(Boolean);
}

interface ArtPageProps {
  searchParams: Promise<{
    q?: string;
    book?: string | string[];
    artist?: string | string[];
    era?: string | string[];
    character?: string | string[];
    theme?: string | string[];
    testament?: string;
    sort?: string;
    cursor?: string;
  }>;
}

export default async function ArtShowcasePage({ searchParams }: ArtPageProps) {
  const params = await searchParams;
  const q = (params.q || '').trim();
  const bookFilter = asStringArray(params.book);
  const artistFilter = asStringArray(params.artist);
  const eraFilter = asStringArray(params.era);
  const characterFilter = asStringArray(params.character);
  const themeFilter = asStringArray(params.theme);
  const testament =
    params.testament === 'old' || params.testament === 'new' ? params.testament : null;
  const sortRaw = (params.sort || 'recent').trim() as ArtSort;
  let sort: ArtSort = VALID_SORTS.includes(sortRaw) ? sortRaw : 'recent';
  if (q && !params.sort) sort = 'relevance';

  const hasFilters = !!(
    q ||
    bookFilter.length || artistFilter.length || eraFilter.length ||
    characterFilter.length || themeFilter.length ||
    testament || (params.sort && sort !== 'recent')
  );

  // Always load the books + artists facets — used by the drawer for
  // multi-select chips + by the showcase footer for "Browse by book".
  const [booksWithArt, artistsWithArt] = await Promise.all([
    getBooksWithArt(),
    getArtistsWithArt(),
  ]);

  // ─── Filtered results path ─── replaces showcase rows when any filter
  // is active. Same recipe as the old /art/browse page, just in-page.
  if (hasFilters) {
    const cursor = decodeCursor(params.cursor);
    const result = await getFilteredArtworks({
      q,
      book: bookFilter,
      artist: artistFilter,
      era: eraFilter,
      character: characterFilter,
      theme: themeFilter,
      testament,
      sort,
      limit: RESULTS_PAGE_SIZE,
      cursor,
    });
    const { artworks, total, nextCursor } = result;
    const remaining = Math.max(0, total - artworks.length);

    // Build "Show more" href preserving every active filter.
    const nextParams = new URLSearchParams();
    if (q) nextParams.set('q', q);
    for (const b of bookFilter) nextParams.append('book', b);
    for (const a of artistFilter) nextParams.append('artist', a);
    for (const e of eraFilter) nextParams.append('era', e);
    for (const c of characterFilter) nextParams.append('character', c);
    for (const t of themeFilter) nextParams.append('theme', t);
    if (testament) nextParams.set('testament', testament);
    if (sort !== 'recent' && !(q && sort === 'relevance')) nextParams.set('sort', sort);
    if (nextCursor) nextParams.set('cursor', encodeCursor(nextCursor));
    const loadMoreHref = nextCursor ? `/art?${nextParams.toString()}` : null;

    return (
      <div className="page-container">
        <div className="max-w-6xl mx-auto">
          <BreadcrumbNav items={[{ label: 'Art', href: '/art' }, { label: 'Filtered', href: '#' }]} />

          <ArtFilterBar
            totalCount={total}
            bookCount={booksWithArt.length}
            books={booksWithArt.map((b) => ({ slug: b.slug, name: b.name }))}
            artists={artistsWithArt.map((a) => ({ slug: a.slug, name: a.name, count: a.count }))}
            initialQuery={q}
            initialBooks={bookFilter}
            initialArtists={artistFilter}
            initialEras={eraFilter}
            initialCharacters={characterFilter}
            initialThemes={themeFilter}
            initialTestament={(testament ?? '') as '' | 'old' | 'new'}
            initialSort={sort}
          />

          <section className="mt-2">
            <h2 className="text-[1.125rem] font-semibold text-[color:var(--color-label)] mb-4 px-1">
              {total.toLocaleString()} {total === 1 ? 'result' : 'results'}
            </h2>
            {artworks.length === 0 ? (
              <div className="frost-card text-center py-16 px-4">
                <p className="text-[color:var(--color-label)] font-medium mb-1">No artworks match these filters.</p>
                <p className="text-[color:var(--color-secondary-label)] text-[0.9375rem]">
                  Try removing a filter or{' '}
                  <Link href="/art" className="text-[color:var(--color-primary)] hover:underline">
                    clear all
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {artworks.map((art, i) => (
                    <ArtCard key={art.id} artwork={art} priority={i < 8} />
                  ))}
                </div>
                {loadMoreHref && (
                  <div className="mt-8 flex justify-center">
                    <Link href={loadMoreHref} scroll={false} className="btn-primary">
                      Show more ({remaining.toLocaleString()} remaining)
                    </Link>
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      </div>
    );
  }

  // ─── Default showcase path ─── no filters → editorial rotation.
  const [
    heroArtwork,
    featuredArtist,
    tissot,
    renaissance,
    devotional,
    romantic,
    icons,
    illustrators,
    museums,
    caravaggio,
    rembrandt,
    dore,
    trecento,
    madonnas,
    manuscripts,
  ] = await Promise.all([
    getFeaturedHeroArtwork(),
    getFeaturedArtistShowcase(),
    getArtworksBySources(['tissot'], 24),
    getArtworksBySources(SHOWCASE_ROWS[0].sources as unknown as string[], 18),
    getArtworksBySources(SHOWCASE_ROWS[1].sources as unknown as string[], 18),
    getArtworksBySources(SHOWCASE_ROWS[2].sources as unknown as string[], 18),
    getArtworksBySources(SHOWCASE_ROWS[3].sources as unknown as string[], 18),
    getArtworksBySources(SHOWCASE_ROWS[4].sources as unknown as string[], 18),
    getArtworksBySources(SHOWCASE_ROWS[5].sources as unknown as string[], 18),
    getArtworksBySources(SHOWCASE_ROWS[6].sources as unknown as string[], 18),
    getArtworksBySources(SHOWCASE_ROWS[7].sources as unknown as string[], 18),
    getArtworksBySources(SHOWCASE_ROWS[8].sources as unknown as string[], 18),
    getArtworksBySources(SHOWCASE_ROWS[9].sources as unknown as string[], 18),
    getArtworksBySources(SHOWCASE_ROWS[10].sources as unknown as string[], 18),
    getManuscriptArtworks(18),
  ]);

  const rowData = [
    renaissance, devotional, romantic, icons, illustrators, museums,
    caravaggio, rembrandt, dore, trecento, madonnas,
  ];
  const accentColors = rowData.map(
    (works) => works.find((w) => !!w.dominant_color)?.dominant_color ?? null,
  );
  const approxTotal = 7800;

  return (
    <div className="page-container">
      <ArtShowcaseHero artwork={heroArtwork} />

      <div className="max-w-6xl mx-auto">
        <BreadcrumbNav items={[{ label: 'Art', href: '#' }]} />

        <ArtFilterBar
          totalCount={approxTotal}
          bookCount={booksWithArt.length}
          books={booksWithArt.map((b) => ({ slug: b.slug, name: b.name }))}
          artists={artistsWithArt.map((a) => ({ slug: a.slug, name: a.name, count: a.count }))}
        />

        {tissot.length > 0 && (
          <ArtRowCarousel
            title="James Tissot · The Life of Christ"
            subtitle="Three hundred and sixty-five gouache-on-board paintings completed between 1886 and 1894 — Tissot's pilgrimage to the Holy Land turned into a visual gospel."
            kicker="Featured"
            seeAllHref="/art/artist/james-tissot"
            artworks={tissot}
            priorityFirst={!heroArtwork}
            accentColor={tissot.find((w) => !!w.dominant_color)?.dominant_color ?? null}
          />
        )}

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
                priorityFirst={i === 0 && !heroArtwork && tissot.length === 0}
                accentColor={accentColors[i]}
              />
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
          seeAllHref="/art?era=early-christian&era=byzantine&era=medieval&sort=year_asc"
          artworks={manuscripts}
        />

        <section className="art-showcase-byBook">
          <h2 className="art-showcase-byBook__title">Browse by book of the Bible</h2>
          <p className="art-showcase-byBook__subtitle">
            Every chapter has art indexed to it.
          </p>
          <div className="art-showcase-byBook__grid">
            {booksWithArt.map((b) => (
              <Link key={b.slug} href={`/art/book/${b.slug}`} className="art-showcase-byBook__chip">
                {b.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

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
