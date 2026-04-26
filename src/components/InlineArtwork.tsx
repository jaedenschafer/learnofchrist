import Link from 'next/link';
import type { ArtworkWithArtist } from '@/lib/supabase';
import ArtworkActionsMenu from './ArtworkActionsMenu';

interface InlineArtworkProps {
  artwork: ArtworkWithArtist;
  /** Optional caption shown above the title — e.g. "Genesis 1:3-5 · Day 1" */
  caption?: string;
  /** True for the very first inline artwork on a page — renders eagerly with
   *  fetchPriority=high so it's a strong LCP candidate. */
  priority?: boolean;
}

/**
 * Editorial figure for placing a single artwork inline within a study guide.
 * Used by GenesisOneStudy to anchor key images at the relevant point in the
 * chapter. The figure itself is a server component; the ⋮ Hide / Report
 * action menu is a small client island.
 *
 * Source priority:
 *   thumbnail_800_url (pre-generated WebP, ~80 KB, visually identical at
 *                      typical inline widths)
 *   → thumbnail_url   (whatever the source provided)
 *   → image_url       (full-resolution original — last resort, can be 10+ MB)
 *
 * The detail page (/art/artwork/[slug]) still serves the original via a
 * "View full resolution" link from the hero — readers who want to zoom in
 * can opt in there. Inline doesn't pay that cost on first paint.
 */
export default function InlineArtwork({ artwork, caption, priority = false }: InlineArtworkProps) {
  const href = `/art/artwork/${artwork.slug}`;
  const thumb800 = artwork.thumbnail_800_url ?? null;
  const fallback = artwork.thumbnail_url ?? artwork.image_url ?? '';
  const src = thumb800 ?? fallback;
  const artistName = artwork.artist?.name ?? 'Unknown';

  // Pass known dimensions so the browser reserves space before bytes arrive.
  // Falls back to a 4:3 ratio that matches the existing inline-artwork CSS.
  const w = artwork.width ?? 1200;
  const h = artwork.height ?? 900;

  return (
    <figure
      className="inline-artwork"
      style={artwork.dominant_color ? { backgroundColor: artwork.dominant_color } : undefined}
    >
      <Link href={href} className="inline-artwork__media-link" aria-label={`View ${artwork.title}`}>
        <div className="inline-artwork__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            width={w}
            height={h}
            alt={artwork.title}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : undefined}
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
