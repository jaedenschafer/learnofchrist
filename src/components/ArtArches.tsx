'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import type { ArtworkWithArtist } from '@/lib/supabase';

/**
 * Dual-arch scrolling artwork band.
 *
 * Two horizontal rows of artwork tiles drift in opposite directions on
 * an infinite CSS marquee. A `requestAnimationFrame` loop reads each
 * tile's screen-x position every frame and applies a translateY +
 * rotate based on its distance from viewport center, so the rows
 * silhouette into a fixed dome — cards rise as they cross the center
 * and descend as they slide off either edge.
 *
 * - Animation runs only while the band is in the viewport (gated by
 *   IntersectionObserver). Idle CPU when scrolled away.
 * - Honors `prefers-reduced-motion`.
 * - Pure-CSS fallback (subtle perspective tilt) is in place for the
 *   first paint before JS hydrates.
 */
export default function ArtArches({
  artworks,
  caption,
}: {
  artworks: ArtworkWithArtist[];
  caption?: string;
}) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let running = false;

    function tick() {
      if (!root) return;
      const vw = window.innerWidth;
      const cx = vw / 2;
      // Half-width of the arch in pixels. Wider radius → flatter arch;
      // narrower → steeper dome. ~55% of viewport gives a generous
      // spread that still reads as curved on ultrawide screens.
      const radius = vw * 0.55;
      // Maximum vertical lift at the center of the arch.
      const amp = Math.min(72, vw * 0.065);
      // Maximum tilt in degrees at the edges.
      const tiltMax = 4.5;

      const tiles = root.querySelectorAll<HTMLElement>('.loc-arch__tile');
      tiles.forEach((t) => {
        const rect = t.getBoundingClientRect();
        const tx = rect.left + rect.width / 2;
        // Distance from viewport center, normalized to [-1.2, 1.2].
        // Beyond ±1 the cosine goes negative, which we want — tiles
        // off the visible edges naturally drop further than the in-arch
        // tiles.
        const dn = Math.max(-1.4, Math.min(1.4, (tx - cx) / radius));
        // Cosine arch: 1 at center (highest), 0 at ±1 (baseline),
        // negative beyond. Negative arc = drop below baseline.
        const arc = Math.cos(dn * (Math.PI / 2));
        const y = -arc * amp;
        // Tilt: -dn so cards on the left lean left, cards on the right
        // lean right — like books on a shelf.
        const rot = dn * tiltMax;
        t.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) rotate(${rot.toFixed(2)}deg)`;
      });

      if (running) raf = requestAnimationFrame(tick);
    }

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting ?? false;
        if (visible && !running) {
          running = true;
          raf = requestAnimationFrame(tick);
        } else if (!visible && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 },
    );
    io.observe(root);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      running = false;
    };
  }, []);

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

  const topRow =
    even.length >= 6 ? even : artworks.slice(0, Math.ceil(artworks.length / 2));
  const bottomRow =
    odd.length >= 6 ? odd : artworks.slice(Math.ceil(artworks.length / 2));

  return (
    <section
      ref={rootRef}
      className="loc-arches"
      aria-label="From the art library"
    >
      <div className="loc-arches__stage">
        <ArchRow tiles={topRow} direction="left" variant="top" />
        <ArchRow tiles={bottomRow} direction="right" variant="bottom" />
      </div>
      {caption && <p className="loc-arches__caption">{caption}</p>}
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
  // Duplicate the tile list so translateX(-50%) lands on an identical
  // frame and the loop is perfectly seamless.
  const doubled = [...tiles, ...tiles];

  return (
    <div className={`loc-arch loc-arch--${variant}`} aria-hidden="true">
      <div className={`loc-arch__strip loc-arch__strip--${direction}`}>
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
              style={
                art.dominant_color
                  ? { backgroundColor: art.dominant_color }
                  : undefined
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
