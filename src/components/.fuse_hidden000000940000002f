import Link from 'next/link';
import type { Artist, ArtworkWithArtist } from '@/lib/supabase';
import './ArtFeaturedArtist.css';

interface ArtFeaturedArtistProps {
  artist: Artist;
  works: ArtworkWithArtist[];
}

/**
 * Editorial "Featured artist" panel — magazine-style mosaic with one
 * large lead image and four supporting works in a 2×2 grid, plus the
 * artist's name in display serif and a one-paragraph bio in italic.
 *
 * Rotates weekly (see getFeaturedArtistShowcase). The five-image layout
 * collapses to a stacked column on mobile so each image still has room
 * to breathe.
 */
export default function ArtFeaturedArtist({ artist, works }: ArtFeaturedArtistProps) {
  if (works.length === 0) return null;

  const lead = works[0];
  const supporting = works.slice(1, 5); // up to 4

  const lifespan = formatLifespan(artist.birth_year, artist.death_year);
  const bio = artist.bio?.trim() ?? '';
  const tease = bio.length > 280 ? bio.slice(0, 277).trimEnd() + '…' : bio;

  return (
    <section className="featured-artist">
      <header className="featured-artist__head">
        <div>
          <p className="featured-artist__kicker">Featured artist · this week</p>
          <h2 className="featured-artist__name">{artist.name}</h2>
          {lifespan && (
            <p className="featured-artist__life">
              {lifespan}
              {artist.nationality && (
                <>
                  <span aria-hidden="true"> · </span>
                  <span>{artist.nationality}</span>
                </>
              )}
            </p>
          )}
        </div>
        <Link
          href={`/art/artist/${artist.slug}`}
          className="featured-artist__see-all"
        >
          See {works.length} {works.length === 1 ? 'work' : 'works'}
          <span aria-hidden="true">→</span>
        </Link>
      </header>

      <div className="featured-artist__mosaic">
        {/* Lead — spans 2 rows on tablet+ */}
        <Link
          href={`/art/artwork/${lead.slug}`}
          className="featured-artist__tile featured-artist__tile--lead"
          style={
            lead.dominant_color
              ? { backgroundColor: lead.dominant_color }
              : undefined
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lead.thumbnail_800_url || lead.thumbnail_url || lead.image_url}
            alt={lead.title}
            loading="lazy"
            decoding="async"
          />
          <span className="featured-artist__tile-meta">
            <span className="featured-artist__tile-title">{lead.title}</span>
            {lead.year && <span className="featured-artist__tile-year">{lead.year}</span>}
          </span>
        </Link>

        {supporting.map((w) => (
          <Link
            key={w.id}
            href={`/art/artwork/${w.slug}`}
            className="featured-artist__tile"
            style={
              w.dominant_color ? { backgroundColor: w.dominant_color } : undefined
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={w.thumbnail_256_url || w.thumbnail_url || w.image_url}
              alt={w.title}
              loading="lazy"
              decoding="async"
            />
            <span className="featured-artist__tile-meta">
              <span className="featured-artist__tile-title">{w.title}</span>
              {w.year && <span className="featured-artist__tile-year">{w.year}</span>}
            </span>
          </Link>
        ))}
      </div>

      {tease && (
        <p className="featured-artist__bio">
          {tease}{' '}
          <Link href={`/art/artist/${artist.slug}`} className="featured-artist__bio-link">
            Read more →
          </Link>
        </p>
      )}
    </section>
  );
}

function formatLifespan(birth: number | null, death: number | null): string {
  if (birth && death) return `${birth}–${death}`;
  if (birth) return `b. ${birth}`;
  if (death) return `d. ${death}`;
  return '';
}
