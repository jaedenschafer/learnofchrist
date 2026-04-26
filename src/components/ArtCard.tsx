'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { ArtworkWithArtist } from '@/lib/supabase';
import ArtworkActionsMenu from './ArtworkActionsMenu';

interface ArtCardProps {
  artwork: ArtworkWithArtist;
  /** Optional caption under the artist line (e.g. "Genesis 1:3"). */
  caption?: string;
  /** Set true for above-the-fold cards so the browser fetches the image
   *  eagerly. Below the fold uses native lazy loading. */
  priority?: boolean;
}

/**
 * Compact artwork tile used on /art, /art/book/[slug], and the study-guide
 * art carousel.
 *
 * Image source priority:
 *   thumbnail_256_url (pre-generated Supabase Storage WebP, ~15KB)
 *   → thumbnail_url  (whatever the source provided)
 *   → image_url      (full-resolution original — last resort, can be 10+ MB)
 *
 * Responsive sizing:
 *   When both thumbnail_256_url and thumbnail_800_url are populated we
 *   emit a `srcset` so the browser picks the right tier per viewport.
 *
 * Layout stability:
 *   width / height attributes are passed to <img> so the browser reserves
 *   the correct aspect ratio before bytes arrive (CLS = 0).
 *
 * Failure handling:
 *   On <img onError> the card falls back to a flat dominant_color tile
 *   instead of a broken-image icon. Useful when a source CDN 404s.
 */
export default function ArtCard({ artwork, caption, priority = false }: ArtCardProps) {
  const href = `/art/artwork/${artwork.slug}`;

  // Source priority. When the small/large thumbs are absent we use whatever
  // we have, and the srcset below will reduce to a single source.
  const thumb256 = artwork.thumbnail_256_url ?? null;
  const thumb800 = artwork.thumbnail_800_url ?? null;
  const fallback = artwork.thumbnail_url ?? artwork.image_url;
  const primary = thumb256 ?? fallback;
  // Build a srcset only when we have multiple distinct sizes — otherwise the
  // browser does the right thing with just `src`.
  const srcSet =
    thumb256 && thumb800
      ? `${thumb256} 256w, ${thumb800} 800w`
      : undefined;

  const placeholderColor = artwork.dominant_color || undefined;
  const [broken, setBroken] = useState(false);

  // Pass the known dimensions so layout reserves the right aspect ratio.
  // Falls back to 4:5 (which our CSS aspect-[4/5] already enforces) when
  // unknown — the visual outcome is the same, but width/height attrs are
  // still cheap signal for the browser.
  const w = artwork.width ?? 256;
  const h = artwork.height ?? 320;

  return (
    <div className="art-card-wrap relative">
      <Link
        href={href}
        className="group block rounded-2xl overflow-hidden bg-[color:var(--color-surface)] border border-[color:var(--color-separator)] hover:border-[color:var(--color-primary)]/40 hover:-translate-y-0.5 transition-all"
      >
        <div
          className="aspect-[4/5] overflow-hidden flex items-end justify-center"
          style={placeholderColor ? { backgroundColor: placeholderColor } : undefined}
        >
          {broken ? (
            <span className="text-[10px] uppercase tracking-wider font-semibold text-white/70 m-2 drop-shadow">
              image unavailable
            </span>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={primary}
              srcSet={srcSet}
              sizes="(max-width: 600px) 45vw, 240px"
              width={w}
              height={h}
              alt={`${artwork.title}${artwork.artist?.name ? ` by ${artwork.artist.name}` : ''}`}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={priority ? 'high' : undefined}
              onError={() => setBroken(true)}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
          )}
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
