import Link from 'next/link';
import type { ArtworkWithArtist } from '@/lib/supabase';
import ArtworkActionsMenu from './ArtworkActionsMenu';

interface ArtCardProps {
  artwork: ArtworkWithArtist;
  /** Optional caption under the artist line (e.g. "Genesis 1:3"). */
  caption?: string;
}

/**
 * Compact artwork tile used on /art, /art/book/[slug], and the study-guide
 * art carousel. Wraps the link in a positioned host so a small ⋮ Hide /
 * Report image menu can anchor over the photo's top-right corner.
 */
export default function ArtCard({ artwork, caption }: ArtCardProps) {
  const href = `/art/artwork/${artwork.slug}`;
  const thumb = artwork.thumbnail_url || artwork.image_url;

  return (
    <div className="art-card-wrap relative">
      <Link
        href={href}
        className="group block rounded-2xl overflow-hidden bg-[color:var(--color-surface)] border border-[color:var(--color-separator)] hover:border-[color:var(--color-primary)]/40 hover:-translate-y-0.5 transition-all"
      >
        <div className="aspect-[4/5] bg-[color:var(--color-separator)] overflow-hidden">
          {/* Plain <img> keeps the component server-only and avoids bundling
              a remote-loader config for every Wikimedia host. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt={artwork.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
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
