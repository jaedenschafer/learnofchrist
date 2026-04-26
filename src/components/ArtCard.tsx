import Link from 'next/link';
import Image from 'next/image';
import type { ArtworkWithArtist } from '@/lib/supabase';
import { artImageLoader, hexToBlurDataURL } from '@/lib/imageLoaders';
import ArtworkActionsMenu from './ArtworkActionsMenu';

interface ArtCardProps {
  artwork: ArtworkWithArtist;
  /** Optional caption under the artist line (e.g. "Genesis 1:3"). */
  caption?: string;
  /** Set true for above-the-fold cards so Next sets fetchpriority="high"
   *  and skips lazy-loading. The /art page passes priority for the first
   *  ~12 cards so the initial paint isn't blocked on lazy hydration. */
  priority?: boolean;
}

/**
 * Compact artwork tile used on /art, /art/book/[slug], and the study-guide
 * art carousel.
 *
 * Image strategy:
 *   • Source URL is whichever pre-generated thumb is freshest:
 *     thumbnail_256_url (Supabase Storage WebP) → thumbnail_url → image_url.
 *   • next/image picks the right size from `sizes` and asks the matching
 *     loader (Wikimedia /thumb/, Met IIIF, etc.) for that exact width.
 *   • dominant_color seeds the blur placeholder so the card never flashes
 *     a gray rectangle. Falls back to a neutral if it isn't backfilled yet.
 */
export default function ArtCard({ artwork, caption, priority = false }: ArtCardProps) {
  const href = `/art/artwork/${artwork.slug}`;
  const src =
    artwork.thumbnail_256_url ||
    artwork.thumbnail_url ||
    artwork.image_url;

  const blurDataURL = hexToBlurDataURL(artwork.dominant_color);

  return (
    <div className="art-card-wrap relative">
      <Link
        href={href}
        className="group block rounded-2xl overflow-hidden bg-[color:var(--color-surface)] border border-[color:var(--color-separator)] hover:border-[color:var(--color-primary)]/40 hover:-translate-y-0.5 transition-all"
      >
        <div className="aspect-[4/5] bg-[color:var(--color-separator)] overflow-hidden relative">
          <Image
            loader={artImageLoader}
            src={src}
            alt={`${artwork.title}${artwork.artist?.name ? ` by ${artwork.artist.name}` : ''}`}
            fill
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
            placeholder="blur"
            blurDataURL={blurDataURL}
            priority={priority}
            // Tell the browser to start fetching as soon as the URL is known.
            // For non-priority cards next/image still applies lazy loading.
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
        <div className="p-3">
          <h3 className="text-[0.875rem] font-semibold text-[color:var(--color-label)] leading-snug line-clamp-2">
            {artwork.title}
          </h3>
          {/* Artist name is plain text inside the card. Tapping the card
              goes to the artwork detail page, where the artist name links
              to /art/artist/[slug] — keeps us from nesting <Link> in
              <Link> here. */}
          <p className="text-[0.75rem] text-[color:var(--color-secondary-label)] mt-0.5 truncate">
            {artwork.artist?.name ?? 'Unknown'}
            {artwork.year ? ` · ${artwork.year}` : ''}
          </p>
          {caption && (
            <p className="text-[0.6875rem] text-[color:var(--color-tertiary-label)] mt-1 uppercase tracking-wider font-semibold">
              {caption}
            </p>
          )}
        </div>
      </Link>
      <ArtworkActionsMenu artworkId={artwork.id} artworkTitle={artwork.title} />
    </div>
  );
}
