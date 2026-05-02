import Link from 'next/link';
import type { ArtworkWithArtist } from '@/lib/supabase';

/**
 * Dual-arch scrolling artwork band.
 *
 * Two horizontal rows of artwork tiles that drift in opposite directions
 * on an infinite CSS marquee. Each row sits inside its own perspective
 * stage so the strip reads as a shallow arch / proscenium curve rather
 * than a flat marquee — the visual cue inspired by BibleProject's home
 * page resource band.
 *
 * - Server component. No JS needed: animation, hover-pause, and reduced
 *   motion are all CSS.
 * - Each row dupes its tile list so the loop is seamless (translate -50%
 *   lands on an identical frame).
 * - Cards link to the artwork detail page so the band is an active part
 *   of the gallery, not just a decorative strip.
 */
export default function ArtArches({
  artworks,
  caption,
}: {
  artworks: ArtworkWithArtist[];
  caption?: string;
}) {
  // Need a healthy number of tiles for the perception of motion. If the
  // caller hands us fewer than 8 we silently render nothing rather than
  // shipping a janky half-band.
  if (!artworks || artworks.length < 8) return null;

  // Split the supply roughly in half between the two rows. Use stride-2
  // sampling so adjacent rows feel visually distinct rather than two
  // halves of the same shelf.
  const odd: ArtworkWithArtist[] = [];
  const even: ArtworkWithArtist[] = [];
  artworks.forEach((a, i) => (i % 2 === 0 ? even : odd).push(a));

  const topRow = even.length >= 6 ? even : artworks.slice(0, Math.ceil(artworks.length / 2));
  const bottomRow = odd.length >= 6 ? odd : artworks.slice(Math.ceil(artworks.length / 2));

  return (
    <section className="loc-arches" aria-label="From the art library">
      <div className="loc-arches__stage">
        <ArchRow tiles={topRow} direction="left" variant="top" />
        <ArchRow tiles={bottomRow} direction="right" variant="bottom" />
      </div>
      {caption && (
        <p className="loc-arches__caption">{caption}</p>
      )}
    </section>
  );
}

function ArchRow({
  tiles,
  direction,
  variant,
}: {
  tiles: ArtworkWithArtist[];
  direction: 'left' | 'right';
  variant: 'top' | 'bottom';
}) {
  // Duplicate the tile array so translateX(-50%) lands on an identical
  // frame and the loop is perfectly seamless.
  const doubled = [...tiles, ...tiles];
  const period = tiles.length || 1;

  return (
    <div className={`loc-arch loc-arch--${variant}`} aria-hidden="true">
      <div
        className={`loc-arch__strip loc-arch__strip--${direction}`}
        // Period in tiles for one full sine-wave cycle. Setting it on
        // the strip lets every child read it without cascading inline
        // overrides.
        style={{ ['--period' as string]: period } as React.CSSProperties}
      >
        {doubled.map((art, i) => {
          const src =
            art.thumbnail_800_url ||
            art.thumbnail_256_url ||
            art.thumbnail_url ||
            art.image_url ||
            '';
          return (
            <Link
              key={`${art.id}-${i}`}
              href={`/art/artwork/${art.slug}`}
              className="loc-arch__tile"
              tabIndex={-1}
              // Each tile knows its own index so the CSS cos() can offset
              // it vertically along the arch. Index repeats every
              // `period` so the wave loops with the marquee.
              style={
                {
                  ['--i' as string]: i,
                  ...(art.dominant_color
                    ? { backgroundColor: art.dominant_color }
                    : {}),
                } as React.CSSProperties
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
