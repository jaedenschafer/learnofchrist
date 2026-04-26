import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArtworkBySlug, getAllArtworkSlugs } from '@/lib/supabase';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import JsonLd from '@/components/JsonLd';
import ArtworkActionsMenu from '@/components/ArtworkActionsMenu';

export const revalidate = 86400;
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllArtworkSlugs();
  return slugs;
}

function formatRef(ref: { book_name: string; chapter: number; verse_start: number | null; verse_end: number | null }): string {
  const base = `${ref.book_name} ${ref.chapter}`;
  if (ref.verse_start == null) return base;
  if (ref.verse_end == null || ref.verse_end === ref.verse_start) return `${base}:${ref.verse_start}`;
  return `${base}:${ref.verse_start}-${ref.verse_end}`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const art = await getArtworkBySlug(slug);
  if (!art) return { title: 'Artwork Not Found | Learn of Christ' };

  const artist = art.artist?.name ?? 'Unknown';
  const ref = art.scripture_refs[0];
  const refStr = ref ? ` — ${formatRef(ref)}` : '';

  return {
    title: `${art.title} by ${artist}${refStr} | Learn of Christ`,
    description:
      art.description ??
      `${art.title} — a public-domain work${art.year ? ` from ${art.year}` : ''} by ${artist}${refStr}.`,
    openGraph: {
      title: `${art.title} — ${artist}`,
      description: art.description ?? `Public-domain Christian art${refStr}.`,
      url: `https://learnofchrist.com/art/artwork/${art.slug}`,
      images: art.image_url ? [{ url: art.image_url }] : undefined,
    },
    alternates: {
      canonical: `https://learnofchrist.com/art/artwork/${art.slug}`,
    },
  };
}

export default async function ArtworkPage({ params }: PageProps) {
  const { slug } = await params;
  const art = await getArtworkBySlug(slug);
  if (!art) return notFound();

  const primaryRef = art.scripture_refs.find((r) => r.is_primary) ?? art.scripture_refs[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name: art.title,
    artist: art.artist ? { '@type': 'Person', name: art.artist.name } : undefined,
    dateCreated: art.year?.toString(),
    artMedium: art.medium ?? undefined,
    artform: art.medium ?? undefined,
    image: art.image_url,
    url: `https://learnofchrist.com/art/artwork/${art.slug}`,
    license: 'https://creativecommons.org/publicdomain/mark/1.0/',
  };

  return (
    <div className="page-container">
      <JsonLd data={jsonLd} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbNav items={[
          { label: 'Art', href: '/art' },
          ...(primaryRef ? [
            { label: primaryRef.book_name, href: `/art/book/${primaryRef.book_slug}` },
          ] : []),
          { label: art.title, href: '#' },
        ]} />

        <header className="study-hero">
          <p className="study-hero__kicker">
            {art.artist && (
              <>
                <Link
                  href={`/art/artist/${art.artist.slug}`}
                  className="study-hero__kicker-book"
                >
                  {art.artist.name}
                </Link>
                <span className="study-hero__kicker-sep" aria-hidden="true">·</span>
              </>
            )}
            <span>{art.year ?? 'Public domain'}</span>
          </p>
          <h1 className="study-hero__title">{art.title}</h1>
          {art.description && (
            <p className="study-hero__dek">{art.description}</p>
          )}
        </header>

        {/*
          Hero strategy:
            - First paint loads thumbnail_800_url (~80 KB WebP) so the page
              becomes visible instantly even on heavy original artworks.
            - "View full resolution" link below opens the original
              (image_url) for users who want to zoom — preserves
              discoverability without forcing the heavy bytes on every
              visit.
            - dominant_color paints the placeholder so layout is stable
              before any pixels land; width/height attrs reserve the
              aspect ratio.
            - fetchPriority="high" + eager loading: this is the LCP
              element for the page.
        */}
        <figure className="mt-6 mb-10 relative artwork-detail-figure">
          {/* The ⋮ menu (Report image) — same component the carousel cards
              and inline study artworks use, so the affordance is consistent
              everywhere a reader sees art. Positioned absolutely top-right
              of the figure via .art-actions in globals.css. The
              artwork-detail-figure class makes the button always visible
              here (rather than the hover-only behavior on grid tiles)
              since this is a focused single-artwork view. */}
          <ArtworkActionsMenu artworkId={art.id} artworkTitle={art.title} />
          <div
            className="rounded-2xl overflow-hidden border border-[color:var(--color-separator)]"
            style={{
              backgroundColor:
                art.dominant_color || 'var(--color-separator)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={art.thumbnail_800_url || art.image_url}
              width={art.width || 1200}
              height={art.height || 900}
              alt={art.title}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-auto block"
            />
          </div>
          <figcaption className="text-[0.75rem] text-[color:var(--color-tertiary-label)] mt-2 px-1 flex flex-wrap gap-x-2 gap-y-1 items-baseline">
            <a
              href={art.image_url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[color:var(--color-primary)] font-medium"
            >
              View full resolution
            </a>
            {art.license_note && (
              <>
                <span aria-hidden="true">·</span>
                <span>{art.license_note}</span>
              </>
            )}
            {art.source_url && (
              <>
                <span aria-hidden="true">·</span>
                <a
                  href={art.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[color:var(--color-primary)]"
                >
                  Source
                </a>
              </>
            )}
          </figcaption>
        </figure>

        {art.scripture_refs.length > 0 && (
          <section className="mb-10">
            <h2 className="text-[1.125rem] font-semibold text-[color:var(--color-label)] mb-3 px-1">
              Depicted passages
            </h2>
            <div className="flex flex-wrap gap-2">
              {art.scripture_refs.map((ref, i) => (
                <Link
                  key={i}
                  href={`/study/${ref.book_slug}/${ref.chapter}`}
                  className="inline-flex items-center gap-1 px-3 h-9 rounded-full bg-[color:var(--color-surface)] border border-[color:var(--color-separator)] text-[0.8125rem] font-medium text-[color:var(--color-label)] hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)] transition-colors"
                >
                  {formatRef(ref)}
                  {ref.is_primary && (
                    <span className="text-[0.625rem] uppercase tracking-wider text-[color:var(--color-primary)] font-semibold">Primary</span>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        {art.artist && (
          <section className="mb-10 border-t border-[color:var(--color-separator)] pt-8">
            <h2 className="text-[1.125rem] font-semibold text-[color:var(--color-label)] mb-2 px-1">
              About {art.artist.name}
            </h2>
            {art.artist.bio && (
              <p className="text-[0.9375rem] leading-relaxed text-[color:var(--color-label)] px-1">
                {art.artist.bio}
              </p>
            )}
            <div className="px-1 mt-3 flex items-center gap-3 flex-wrap">
              <Link
                href={`/art/artist/${art.artist.slug}`}
                className="inline-block text-[0.8125rem] font-semibold text-[color:var(--color-primary)] hover:underline"
              >
                Full biography &amp; works →
              </Link>
              {art.artist.wikipedia_url && (
                <a
                  href={art.artist.wikipedia_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[0.8125rem] text-[color:var(--color-tertiary-label)] hover:underline"
                >
                  Wikipedia
                </a>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
