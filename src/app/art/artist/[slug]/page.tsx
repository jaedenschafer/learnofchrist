import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getArtistBySlug,
  getAllArtistSlugs,
  getArtworksByArtist,
  type ArtistSource,
  type ArtistFaq,
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

  // Description: lead with the faith-focused narrative when present —
  // that's the clickable angle Wikipedia/Britannica don't give. Fall
  // back to the bio_long lede, then to a structural sentence built
  // from facts.
  const descriptionSource =
    (artist.faith_story && artist.faith_story.length > 60
      ? artist.faith_story
      : artist.bio_long) ?? '';
  const description = descriptionSource
    ? descriptionSource.replace(/\s+/g, ' ').trim().slice(0, 155)
    : `Explore biblical artwork by ${artist.name}${lifespan ? ` (${lifespan})` : ''}${
        artist.nationality ? `, ${artist.nationality}` : ''
      }, indexed by chapter and verse.`;

  // Indexability gate. The page flips out of `noindex` once it has any
  // of: a substantial bio (>=200 chars), a published faith narrative
  // (>=120 chars), or at least one curated notable_works essay. Without
  // any of those we'd publish thin content that drags the cluster down.
  const bioLen = (artist.bio_long ?? '').trim().length;
  const faithLen = (artist.faith_story ?? '').trim().length;
  const bioReady =
    bioLen >= 200 || faithLen >= 120 || artist.notable_works.length > 0;

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

  // Portrait URL is stored either as a first-class column (after migration
  // 053 is applied) or, until then, as a `{type: 'portrait'}` entry inside
  // the bio_sources jsonb. Filter that entry out of bio_sources so it
  // doesn't double up in Further reading.
  // Portrait URL lives in its own column (migration 053). Defensive
  // fallback to a `{type: 'portrait'}` entry in bio_sources covers the
  // window between column creation and the page deploy in case any
  // backfill writer is still pointing at the JSON path.
  const portraitFromJson =
    (artist.bio_sources ?? []).find(
      (s) => (s as { type?: string }).type === 'portrait',
    )?.url ?? null;
  const portraitUrl = artist.portrait_url || portraitFromJson || null;
  const citationSources = (artist.bio_sources ?? []).filter(
    (s) => (s as { type?: string }).type !== 'portrait',
  );

  const sameAs: string[] = [];
  if (artist.wikipedia_url) sameAs.push(artist.wikipedia_url);
  if (artist.wikidata_id) sameAs.push(`https://www.wikidata.org/wiki/${artist.wikidata_id}`);
  for (const s of citationSources) {
    if (s.url && !sameAs.includes(s.url)) sameAs.push(s.url);
  }

  // Pick the most "hero-worthy" work: prefer one referenced by a
  // notable_works essay (curator-picked), otherwise the first work
  // with an image.
  const notableSlugs = new Set(artist.notable_works.map((nw) => nw.artwork_slug));
  const heroImage =
    works.find(
      (w) => notableSlugs.has(w.slug) && (w.image_url || w.thumbnail_url),
    ) ?? works.find((w) => Boolean(w.image_url || w.thumbnail_url));

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: artist.name,
    ...(artist.birth_year != null && { birthDate: String(artist.birth_year) }),
    ...(artist.death_year != null && { deathDate: String(artist.death_year) }),
    ...(artist.nationality && { nationality: artist.nationality }),
    ...((portraitUrl || heroImage) && {
      image: portraitUrl || heroImage?.image_url || heroImage?.thumbnail_url,
    }),
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

  // First sentence used as the hero lede.
  const heroLede = (() => {
    const flat = (artist.bio_long ?? '').replace(/\s+/g, ' ').trim();
    if (flat.length < 60) return null;
    const m = flat.match(/^[^.]{40,260}\./);
    return m ? m[0] : flat.slice(0, 220) + '…';
  })();

  // ─── FAQ ───────────────────────────────────────────────────────────
  // Curated FAQs ship from the `faqs` jsonb column (migration 054),
  // populated by scripts/backfill-artist-faith.mjs to mirror the
  // questions Google surfaces in "People Also Ask" panels for the
  // artist's name + Christianity / Bible queries. The auto-generated
  // facts-based prompts that lived here previously ("How many works
  // by X are on this site?") were thin and matched no real PAA
  // pattern, so they're gone.
  //
  // Only fall back to a single auto-generated answer when no curated
  // FAQs exist yet — and even then, just one question, not four.
  const curatedFaqs = artist.faqs ?? [];

  const fallbackFaqs: ArtistFaq[] = [];
  if (curatedFaqs.length === 0) {
    const flat = (artist.bio_long ?? artist.faith_story ?? '')
      .replace(/\s+/g, ' ')
      .trim();
    const firstSentence = (() => {
      if (flat.length < 40) return null;
      const m = flat.match(/^[^.]{30,280}\./);
      return m ? m[0] : flat.slice(0, 240) + '…';
    })();
    if (firstSentence) {
      fallbackFaqs.push({
        question: `Who was ${artist.name}?`,
        answer: firstSentence,
      });
    }
  }

  const renderedFaqs: ArtistFaq[] =
    curatedFaqs.length > 0 ? curatedFaqs : fallbackFaqs;

  const faqPageLd =
    renderedFaqs.length >= 2
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: renderedFaqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : null;

  const totalChapters = [...byBook.values()].reduce(
    (n, b) => n + b.chapters.size,
    0,
  );

  return (
    <div className="page-container">
      <JsonLd data={personLd} />
      <JsonLd data={breadcrumbLd} />
      {faqPageLd && <JsonLd data={faqPageLd} />}

      <div className="artist-page">
        <BreadcrumbNav
          items={[
            { label: 'Art', href: '/art' },
            { label: 'Artists', href: '/art/artists' },
            { label: artist.name, href: '#' },
          ]}
        />

        {/* ── Hero ── */}
        <header className="artist-hero">
          <div className="artist-hero__inner">
            <div className="artist-hero__text">
              <p className="artist-hero__kicker">Painter of the Bible</p>
              <div className="artist-hero__heading">
                {portraitUrl && (
                  <Image
                    src={portraitUrl}
                    alt={`Portrait of ${artist.name}`}
                    width={208}
                    height={208}
                    className="artist-hero__portrait"
                    priority
                    sizes="(min-width: 768px) 104px, 84px"
                  />
                )}
                <h1 className="artist-hero__name">{artist.name}</h1>
              </div>

              <div className="artist-hero__metabar">
                {lifespan && (
                  <span className="artist-hero__chip">
                    <span className="artist-hero__chip-label">Years</span>
                    {lifespan}
                  </span>
                )}
                {artist.nationality && (
                  <span className="artist-hero__chip">
                    <span className="artist-hero__chip-label">From</span>
                    {artist.nationality}
                  </span>
                )}
                {works.length > 0 && (
                  <span className="artist-hero__chip">
                    <span className="artist-hero__chip-label">Works</span>
                    {works.length}
                  </span>
                )}
              </div>

              {heroLede && <p className="artist-hero__lede">{heroLede}</p>}
            </div>

            {heroImage && (heroImage.image_url || heroImage.thumbnail_url) && (
              <Link
                href={`/art/artwork/${heroImage.slug}`}
                className="artist-hero__art"
                aria-label={heroImage.title}
              >
                <Image
                  src={heroImage.image_url || heroImage.thumbnail_url || ''}
                  alt={heroImage.title}
                  fill
                  priority
                  sizes="(min-width: 880px) 480px, 100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <span className="artist-hero__art-caption">
                  {heroImage.title}
                </span>
              </Link>
            )}
          </div>
        </header>

        <div className="artist-body">
          <main className="artist-body__main">
            {/* ── Their faith (the lens that distinguishes us from
                Wikipedia: why the artist painted Christ) ── */}
            {artist.faith_story && artist.faith_story.trim().length >= 60 && (
              <section className="artist-section artist-faith">
                <p className="artist-faith__kicker">Their faith</p>
                <h2 className="artist-section__title artist-faith__title">
                  Why {artist.name} painted Christ
                </h2>
                {artist.faith_story
                  .split(/\n{2,}/)
                  .map((p) => p.trim())
                  .filter(Boolean)
                  .map((p, i) => (
                    <p key={i} className="artist-section__p">{p}</p>
                  ))}
              </section>
            )}

            {/* ── Life (long bio) ── */}
            {bioParagraphs.length > 0 ? (
              <section className="artist-section">
                <h2 className="artist-section__title">Life &amp; work</h2>
                {bioParagraphs.map((p, i) => (
                  <p key={i} className="artist-section__p">{p}</p>
                ))}
              </section>
            ) : !artist.faith_story ? (
              <section className="artist-section artist-section--pending">
                <p className="artist-section__placeholder">
                  A full biography of {artist.name} is being written. In the
                  meantime, browse every work by this artist below.
                </p>
              </section>
            ) : null}

            {/* ── Notable works ── */}
            {artist.notable_works.length > 0 && (
              <section className="artist-section">
                <h2 className="artist-section__title">Notable works in detail</h2>
                {artist.notable_works.map((nw) => {
                  const linked = works.find((w) => w.slug === nw.artwork_slug);
                  return (
                    <div key={nw.artwork_slug} className="artist-notable">
                      {linked && (linked.image_url || linked.thumbnail_url) && (
                        <Link
                          href={`/art/artwork/${linked.slug}`}
                          className="artist-notable__media"
                          aria-label={linked.title}
                        >
                          <Image
                            src={
                              linked.thumbnail_url ||
                              linked.image_url ||
                              ''
                            }
                            alt={linked.title}
                            fill
                            sizes="(min-width: 720px) 280px, 100vw"
                            loading="lazy"
                            className="artist-notable__img"
                            style={{ objectFit: 'cover' }}
                          />
                        </Link>
                      )}
                      <div className="artist-notable__body">
                        <p className="artist-notable__title">
                          {linked ? (
                            <Link href={`/art/artwork/${linked.slug}`}>
                              {linked.title}
                            </Link>
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
                          .map(([chapter]) => (
                            <li key={chapter}>
                              <Link
                                href={`/study/${book.bookSlug}/${chapter}`}
                                className="artist-scenes__chapter"
                              >
                                {book.bookName} {chapter}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* ── All works grid ── */}
            {works.length > 0 && (
              <section id="all-works" className="artist-section">
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

            {/* ── Frequently asked questions (curated, accordion) ── */}
            {renderedFaqs.length >= 1 && (
              <section className="artist-section">
                <h2 className="artist-section__title">
                  Frequently asked questions
                </h2>
                <div className="artist-faq">
                  {renderedFaqs.map((f, i) => (
                    <details
                      key={i}
                      className="artist-faq__row"
                      // First question expanded by default — better
                      // for users skimming AND for the rendered LCP.
                      {...(i === 0 ? { open: true } : {})}
                    >
                      <summary className="artist-faq__q">
                        <span>{f.question}</span>
                        <span className="artist-faq__chevron" aria-hidden="true">
                          +
                        </span>
                      </summary>
                      <div className="artist-faq__a">{f.answer}</div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* ── Further reading ── */}
            {(citationSources.length > 0 || artist.wikipedia_url) && (
              <section className="artist-section">
                <h2 className="artist-section__title">Further reading</h2>
                <ul className="artist-sources">
                  {artist.wikipedia_url && (
                    <li>
                      <a
                        href={artist.wikipedia_url}
                        target="_blank"
                        rel="noopener"
                        className="artist-sources__chip"
                      >
                        <span className="artist-sources__chip-type">Wikipedia</span>
                        {artist.name}
                      </a>
                    </li>
                  )}
                  {citationSources.map((s: ArtistSource, i) => (
                    <li key={`${s.url}-${i}`}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener"
                        className="artist-sources__chip"
                      >
                        <span className="artist-sources__chip-type">{s.type}</span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </main>

          {/* ── Sticky rail (Airbnb-style summary card) ── */}
          <aside className="artist-body__rail">
            <div className="artist-rail">
              <p className="artist-rail__title">At a glance</p>
              {artist.birth_year != null && (
                <div className="artist-rail__row">
                  <span className="artist-rail__label">Born</span>
                  <span className="artist-rail__value">{artist.birth_year}</span>
                </div>
              )}
              {artist.death_year != null && (
                <div className="artist-rail__row">
                  <span className="artist-rail__label">Died</span>
                  <span className="artist-rail__value">{artist.death_year}</span>
                </div>
              )}
              {artist.nationality && (
                <div className="artist-rail__row">
                  <span className="artist-rail__label">Origin</span>
                  <span className="artist-rail__value">{artist.nationality}</span>
                </div>
              )}
              <div className="artist-rail__row">
                <span className="artist-rail__label">Works</span>
                <span className="artist-rail__value">{works.length}</span>
              </div>
              {byBook.size > 0 && (
                <div className="artist-rail__row">
                  <span className="artist-rail__label">Books covered</span>
                  <span className="artist-rail__value">{byBook.size}</span>
                </div>
              )}
              {totalChapters > 0 && (
                <div className="artist-rail__row">
                  <span className="artist-rail__label">Chapters</span>
                  <span className="artist-rail__value">{totalChapters}</span>
                </div>
              )}
              {works.length > 0 && (
                <Link href="#all-works" className="artist-rail__cta">
                  Browse all works
                </Link>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
