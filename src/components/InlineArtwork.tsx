import Link from 'next/link';
import type { ArtworkWithArtist } from '@/lib/supabase';
import ArtworkActionsMenu from './ArtworkActionsMenu';

interface InlineArtworkProps {
  artwork: ArtworkWithArtist;
  /** Optional caption shown above the title — e.g. "Genesis 1:3-5 · Day 1" */
  caption?: string;
}

/**
 * Editorial figure for placing a single artwork inline within a study guide.
 * Used by GenesisOneStudy to anchor key images at the relevant point in the
 * chapter. The figure itself is a server component; the ⋮ Hide / Report
 * action menu is a small client island.
 */
export default function InlineArtwork({ artwork, caption }: InlineArtworkProps) {
  const href = `/art/artwork/${artwork.slug}`;
  const src = artwork.image_url || artwork.thumbnail_url || '';
  const artistName = artwork.artist?.name ?? 'Unknown';

  return (
    <figure className="inline-artwork">
      <Link href={href} className="inline-artwork__media-link" aria-label={`View ${artwork.title}`}>
        <div className="inline-artwork__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={artwork.title}
            loading="lazy"
            decoding="async"
            className="inline-artwork__img"
          />
        </div>
      </Link>
      <ArtworkActionsMenu
        artworkId={artwork.id}
        artworkTitle={artwork.title}
        showHide
      />
      <figcaption className="inline-artwork__caption">
        {caption && (
          <span className="inline-artwork__kicker">{caption}</span>
        )}
        <span className="inline-artwork__title">{artwork.title}</span>
        <span className="inline-artwork__artist">
          {artwork.artist ? (
            <Link
              href={`/art/artist/${artwork.artist.slug}`}
              className="inline-artwork__artist-link"
            >
              {artistName}
            </Link>
          ) : (
            artistName
          )}
          {artwork.year ? ` · ${artwork.year}` : ''}
        </span>
      </figcaption>
    </figure>
  );
}
