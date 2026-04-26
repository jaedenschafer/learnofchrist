import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getArtistBySlug,
  getAllArtistSlugs,
  getArtworksByArtist,
  type ArtistSource,
} from '@/lib/supabase';
import ArtCard from '@/components/ArtCard';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import JsonLd from '@/components/JsonLd';
import './artist.css';

// Artist hub pages are content-light until a bio is written, so we cache
// generously and rebuild on-demand when an editor saves new copy.
export const revalidate = 86400;
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllArtistSlugs();
  return slugs;
}

function lifespanLabel(birth: number | null, death: number | null): string | null {
  if (birth == null && death == null) return null;
  const b = birth != null ? String(birth) : '?';
  const d = death != null ? String(death) : '?';
  return `${b}–${d}`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = await getArtistBySlug(slug);
  if (!artist) return { title: 'Artist Not Found | Learn of Christ' };

  const lifespan = lifespanLabel(artist.birth_year, artist.death_year);
  const lifespanPart = lifespan ? `, ${lifespan}` : '';
  const title = `${artist.name}${lifespanPart} — Bible Paintings & Notable Works | Learn of Christ`;

  // Description: prefer the first 155 chars of the long bio when present,
  // otherwise a structural sentence built from facts.
  const description = artist.bio_long
    ? artist.bio_long.replace(/\s+/g, ' ').trim().slice(0, 155)
    : `Explore biblical artwork by ${artist.name}${lifespan ? ` (${lifespan})` : ''}${
        artist.nationality ? `, ${artist.nationality}` : ''
      }, indexed by chapter and verse.`;

  // The page renders for everyone, but until a real bio lives in bio_long
  // we ask Google not to index it — a thin page would drag the whole
  // /art/artist/* cluster down. Once content lands, the field flips off.
  const bioReady = (artist.bio_long ?? '').trim().length >= 200;

  return {
    title,
    description,
    openGraph: {
      title: `${artist.name}${lifespanPart} — Biblical Art`,
      description,
      url: `https://learnofchrist.com/art/artist/${artist.slug}`,
    },
    alternates: {
      canonical: `https://learnofchrist.com/art/artist/${artist.slug}`,
    },
    robots: bioReady ? undefined : { index: false, follow: true },
  };
}

export default async function ArtistPage({ params }: PageProps) {
  const { slug } = await params;
  const artist = await getArtistBySlug(slug);
  if (!artist) return notFound();

  const works = await getArtworksByArtist(artist.id);
  const lifespan = lifespanLabel(artist.birth_year, artist.death_year);

  // Group artworks by Bible book so the "Bible scenes" section reads as a
  // structured table of contents rather than a flat list.
  const byBook = new Map<
    string,
    {
      bookName: string;
      bookSlug: string;
      chapters: Map<number, { title: string; slug: string }[]>;
    }
  >();
  for (const w of works) {
    if (!w.primary_ref) continue;
    const key = w.primary_ref.book_slug;
    const entry = byBook.get(key) ?? {
      bookName: w.primary_ref.book_name,
      bookSlug: w.primary_ref.book_slug,
      chapters: new Map<number, { title: string; slug: string }[]>(),
    };
    const chapter = w.primary_ref.chapter;
    const list = entry.chapters.get(chapter) ?? [];
    list.push({ title: w.title, slug: w.slug });
    entry.chapters.set(chapter, list);
    byBook.set(key, entry);
  }

  const sameAs: string[] = [];
  if (artist.wikipedia_url) sameAs.push(artist.wikipedia_url);
  if (artist.wikidata_id) sameAs.push(`https://www.wikidata.org/wiki/${artist.wikidata_id}`);
  for (const s of artist.bio_sources ?? []) {
    if (s.url && !sameAs.includes(s.url)) sameAs.push(s.url);
  }

  const heroImage = works.find((w) => Boolean(w.image_url || w.thumbnail_url));

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: artist.name,
    ...(artist.birth_year != null && { birthDate: String(artist.birth_year) }),
    ...(artist.death_year != null && { deathDate: String(artist.death_year) }),
    ...(artist.nationality && { nationality: artist.nationality }),
    ...(heroImage && { image: heroImage.image_url || heroImage.thumbnail_url }),
    ...(sameAs.length > 0 && { sameAs }),
    url: `https://learnofchrist.com/art/artist/${artist.slug}`,
    description:
      (artist.bio_long ?? artist.bio ?? '').slice(0, 600) || undefined,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Art', item: 'https://learnofchrist.com/art' },
      { '@type': 'ListItem', position: 2, name: artist.name, item: `https://learnofchrist.com/art/artist/${artist.slug}` },
    ],
  };

  // Bio paragraphs for rendering. Plain double-newline split for now —
  // editors write paragraphs separated by a blank line in the bio_long
  // text column.
  const bioParagraphs = (artist.bio_long ?? '')
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  // ─── FAQ ───────────────────────────────────────────────────────────
  // Auto-generated from facts in the row. Every answer is composed from
  // birth_year / death_year / nationality / work counts / book list, so
  // there is no copy-paste risk and the FAQ is always in sync with the
  // current data. We emit FAQPage JSON-LD when at least three answerable
  // questions exist.
  const lifespanForFaq = lifespanLabel(artist.birth_year, artist.death_year);
  const bookList = [...byBook.values()].map((b) => b.bookName);
  const bookListPhrase =
    bookList.length === 0
      ? null
      : bookList.length === 1
      ? bookList[0]
      : bookList.length === 2
      ? `${bookList[0]} and ${bookList[1]}`
      : `${bookList.slice(0, -1).join(', ')}, and ${bookList[bookList.length - 1]}`;

  const firstBioSentence = (() => {
    const flat = (artist.bio_long ?? '').replace(/\s+/g, ' ').trim();
    if (flat.length < 40) return null;
    // Take up to the first period followed by a space, capped at ~280 chars.
    const m = flat.match(/^[^.]{30,280}\./);
    return m ? m[0] : flat.slice(0, 240) + '…';
  })();

  const faqs: { q: string; a: string }[] = [];

  if (firstBioSentence) {
    faqs.push({ q: `Who was ${artist.name}?`, a: firstBioSentence });
  } else if (lifespanForFaq || artist.nationality) {
    const parts = [
      lifespanForFaq && `(${lifespanForFaq})`,
      artist.nationality && artist.nationality.toLowerCase(),
      'painter and illustrator of biblical scenes.',
    ]
      .filter(Boolean)
      .join(' ');
    faqs.push({
      q: `Who was ${artist.name}?`,
      a: `${artist.name}${parts ? ' ' + parts : ''}`,
    });
  }

  if (artist.birth_year != null || artist.death_year != null) {
    const b = artist.birth_year != null ? String(artist.birth_year) : 'an unknown date';
    const d = artist.death_year != null ? String(artist.death_year) : 'an unknown date';
    faqs.push({
      q: `When did ${artist.name} live?`,
      a: `${artist.name} was born in ${b} and died in ${d}.`,
    });
  }

  if (works.length > 0) {
    const verbList = bookListPhrase
      ? `, with works depicting passages from ${bookListPhrase}.`
      : '.';
    faqs.push({
      q: `What Bible scenes did ${artist.name} paint?`,
      a: `Our library currently holds ${works.length} approved ${works.length === 1 ? 'work' : 'works'} by ${artist.name}${verbList}`,
    });
  }

  faqs.push({
    q: `How many works by ${artist.name} are at Learn of Christ?`,
    a: `We currently have ${works.length} ${works.length === 1 ? 'work' : 'works'} by ${artist.name} in our public-domain library, indexed to the chapters and verses they depict.`,
  });

  const faqPageLd =
    faqs.length >= 3
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }
      : null;

  return (
    <div className="page-container">
      <JsonLd data={personLd} />
      <JsonLd data={breadcrumbLd} />
      {faqPageLd && <JsonLd data={faqPageLd} />}

      <div className="max-w-3xl mx-auto">
        <BreadcrumbNav
          items={[
            { label: 'Art', href: '/art' },
            { label: artist.name, href: '#' },
          ]}
        />

        {/* ── Hero ── */}
        <header className="artist-hero">
          <p className="artist-hero__kicker">Artist</p>
          <h1 className="artist-hero__name">{artist.name}</h1>
          <p className="artist-hero__meta">
            {[lifespan, artist.nationality].filter(Boolean).join(' · ')}
            {(lifespan || artist.nationality) && works.length > 0 ? ' · ' : ''}
            {works.length > 0 && (
              <span>{works.length} {works.length === 1 ? 'artwork' : 'artworks'} in our library</span>
            )}
          </p>
        </header>

        {/* ── Quick facts card ── */}
        <aside className="artist-facts">
          {artist.birth_year != null && (
            <div className="artist-facts__row">
              <span className="artist-facts__label">Born</span>
              <span>{artist.birth_year}</span>
            </div>
          )}
          {artist.death_year != null && (
            <div className="artist-facts__row">
              <span className="artist-facts__label">Died</span>
              <span>{artist.death_year}</span>
            </div>
          )}
          {artist.nationality && (
            <div className="artist-facts__row">
              <span className="artist-facts__label">Nationality</span>
              <span>{artist.nationality}</span>
            </div>
          )}
          <div className="artist-facts__row">
            <span className="artist-facts__label">Works in our library</span>
            <span>{works.length}</span>
          </div>
        </aside>

        {/* ── Life (long bio) ── */}
        {bioParagraphs.length > 0 ? (
          <section className="artist-section">
            <h2 className="artist-section__title">Life</h2>
            {bioParagraphs.map((p, i) => (
              <p key={i} className="artist-section__p">{p}</p>
            ))}
          </section>
        ) : (
          // Pre-bio placeholder. Page is set to noindex in metadata above
          // until bio_long has substantive content, so this never shows up
          // as a thin result in search.
          <section className="artist-section artist-section--pending">
            <p className="artist-section__placeholder">
              A full biography of {artist.name} is being written. In the
              meantime, browse every work by this artist below.
            </p>
          </section>
        )}

        {/* ── Bible scenes ── */}
        {byBook.size > 0 && (
          <section className="artist-section">
            <h2 className="artist-section__title">
              Bible scenes {artist.name} painted
            </h2>
            <ul className="artist-scenes">
              {[...byBook.values()].map((book) => (
                <li key={book.bookSlug} className="artist-scenes__book">
                  <p className="artist-scenes__book-name">{book.bookName}</p>
                  <ul className="artist-scenes__chapters">
                    {[...book.chapters.entries()]
                      .sort((a, b) => a[0] - b[0])
                      .map(([chapter, list]) => (
                        <li key={chapter}>
                          <Link
                            href={`/study/${book.bookSlug}/${chapter}`}
                            className="artist-scenes__chapter"
                          >
                            {book.bookName} {chapter}
                          </Link>
                          <span className="artist-scenes__count">
                            {' '}· {list.length} {list.length === 1 ? 'work' : 'works'}
                          </span>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ── Notable works (curated, original prose) ── */}
        {artist.notable_works.length > 0 && (
          <section className="artist-section">
            <h2 className="artist-section__title">Notable works in detail</h2>
            {artist.notable_works.map((nw) => {
              const linked = works.find((w) => w.slug === nw.artwork_slug);
              return (
                <div key={nw.artwork_slug} className="artist-notable">
                  {linked && (linked.image_url || linked.thumbnail_url) && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={linked.thumbnail_url || linked.image_url}
                      alt={linked.title}
                      loading="lazy"
                      className="artist-notable__img"
                    />
                  )}
                  <div className="artist-notable__body">
                    <p className="artist-notable__title">
                      {linked ? (
                        <Link href={`/art/artwork/${linked.slug}`}>{linked.title}</Link>
                      ) : (
                        nw.artwork_slug
                      )}
                    </p>
                    <p className="artist-notable__p">{nw.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {/* ── All works grid ── */}
        {works.length > 0 && (
          <section className="artist-section">
            <h2 className="artist-section__title">
              All works by {artist.name} in our library
            </h2>
            <div className="artist-works-grid">
              {works.map((w) => (
                <ArtCard key={w.id} artwork={w} />
              ))}
            </div>
          </section>
        )}

        {/* ── Frequently asked questions ── */}
        {faqs.length >= 2 && (
          <section className="artist-section">
            <h2 className="artist-section__title">
              Frequently asked questions
            </h2>
            <dl className="artist-faq">
              {faqs.map((f, i) => (
                <div key={i} className="artist-faq__row">
                  <dt className="artist-faq__q">{f.q}</dt>
                  <dd className="artist-faq__a">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* ── Further reading ── */}
        {(artist.bio_sources.length > 0 || artist.wikipedia_url) && (
          <section className="artist-section">
            <h2 className="artist-section__title">Further reading</h2>
            <ul className="artist-sources">
              {artist.wikipedia_url && (
                <li>
                  <a
                    href={artist.wikipedia_url}
                    target="_blank"
                    rel="noopener"
                    className="artist-sources__link"
                  >
                    {artist.name} on Wikipedia
                  </a>
                </li>
              )}
              {artist.bio_sources.map((s: ArtistSource, i) => (
                <li key={`${s.url}-${i}`}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener"
                    className="artist-sources__link"
                  >
                    {s.title}
                  </a>
                  <span className="artist-sources__type"> — {s.type}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
