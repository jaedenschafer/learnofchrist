import Link from 'next/link';
import type { Metadata } from 'next';
import { getArtistsDirectory } from '@/lib/supabase';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import JsonLd from '@/components/JsonLd';
import './artists.css';

// Cache a day; the list moves only when an artist gains a first approved
// work or a bio is published.
export const revalidate = 86400;

const TITLE = 'Artists — Painters of the Bible | Learn of Christ';
const DESCRIPTION =
  'Explore the painters, illustrators, and iconographers behind two thousand years of biblical art — Caravaggio, Michelangelo, Rembrandt, Tissot, Doré, Bloch, Rublev and more, indexed to scripture.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: 'Artists — Painters of the Bible',
    description: DESCRIPTION,
    url: 'https://learnofchrist.com/art/artists',
  },
  alternates: {
    canonical: 'https://learnofchrist.com/art/artists',
  },
};

function lifespanLabel(birth: number | null, death: number | null): string | null {
  if (birth == null && death == null) return null;
  const b = birth != null ? String(birth) : '?';
  const d = death != null ? String(death) : '?';
  return `${b}–${d}`;
}

export default async function ArtistsDirectoryPage() {
  const artists = await getArtistsDirectory();

  // Sort: bio-ready artists first (these are the pages that actually rank),
  // then by work count descending, then alphabetically as a tiebreak.
  const sorted = [...artists].sort((a, b) => {
    if (a.has_bio !== b.has_bio) return a.has_bio ? -1 : 1;
    if (b.count !== a.count) return b.count - a.count;
    return a.name.localeCompare(b.name);
  });

  // ItemList JSON-LD — each artist a ListItem pointing at their hub page.
  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Painters of the Bible — Learn of Christ',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: sorted.length,
    itemListElement: sorted.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://learnofchrist.com/art/artist/${a.slug}`,
      name: a.name,
    })),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Art', item: 'https://learnofchrist.com/art' },
      { '@type': 'ListItem', position: 2, name: 'Artists', item: 'https://learnofchrist.com/art/artists' },
    ],
  };

  return (
    <div className="page-container">
      <JsonLd data={itemListLd} />
      <JsonLd data={breadcrumbLd} />

      <div className="max-w-4xl mx-auto">
        <BreadcrumbNav
          items={[
            { label: 'Art', href: '/art' },
            { label: 'Artists', href: '#' },
          ]}
        />

        <header className="artists-dir-hero">
          <p className="artists-dir-hero__kicker">Artists</p>
          <h1 className="artists-dir-hero__title">Painters of the Bible</h1>
          <p className="artists-dir-hero__lede">
            Two thousand years of biblical art, anchored to chapter and verse.
            From Fra Angelico&rsquo;s San Marco frescoes to Rembrandt&rsquo;s
            Amsterdam etchings, from Tissot&rsquo;s Holy Land watercolors to
            Bloch&rsquo;s Frederiksborg Christ cycle — every artist whose
            work appears in our library has a page here.
          </p>
          <p className="artists-dir-hero__count">
            {sorted.length} {sorted.length === 1 ? 'artist' : 'artists'} in the
            library.
          </p>
        </header>

        <ul className="artists-dir-grid">
          {sorted.map((a) => {
            const lifespan = lifespanLabel(a.birth_year, a.death_year);
            return (
              <li key={a.id} className="artists-dir-card">
                <Link
                  href={`/art/artist/${a.slug}`}
                  className="artists-dir-card__link"
                >
                  <h2 className="artists-dir-card__name">{a.name}</h2>
                  <p className="artists-dir-card__meta">
                    {[lifespan, a.nationality].filter(Boolean).join(' · ')}
                  </p>
                  <p className="artists-dir-card__count">
                    {a.count} {a.count === 1 ? 'work' : 'works'}
                    {a.has_bio && (
                      <span className="artists-dir-card__bio-flag">
                        {' '}· biography
                      </span>
                    )}
                  </p>
                  <span className="artists-dir-card__arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
