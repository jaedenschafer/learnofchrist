import Link from 'next/link';
import type { ArtworkWithArtist } from '@/lib/supabase';
import ArtCard from './ArtCard';
import './ArtRowCarousel.css';

export interface ArtRowCarouselProps {
  /** Section heading (e.g. "Renaissance & Baroque masters"). */
  title: string;
  /** Optional one-line subtitle below the heading. */
  subtitle?: string;
  /** Optional small uppercase kicker above the heading (e.g. "Style"). */
  kicker?: string;
  /** "See all" destination — usually a /art/browse?artist=… deep link. */
  seeAllHref?: string;
  /** Cap the rail to this many cards. */
  limit?: number;
  /** Whether the first card on the page should hint priority loading.
   *  Set true only on the first row above the fold. */
  priorityFirst?: boolean;
  /** Optional accent color for this row — shown as a small dot in the
   *  kicker. Pulled by the page from a representative artwork's
   *  dominant_color so each section gets its own visual signature. */
  accentColor?: string | null;
  artworks: ArtworkWithArtist[];
}

/**
 * Horizontal-scroll showcase row used by the /art landing page.
 * Each row groups artworks by style or artist (Renaissance masters,
 * 19th-century illustrators, Russian icons, ancient manuscripts, etc.).
 *
 * Layout: kicker + title + optional subtitle, with a right-aligned
 * "See all →" link. Below: a horizontally-scrollable rail of fixed-width
 * ArtCards. Snap scrolling, scroll-shadow gutters, and a subtle peek
 * of the next card so readers know the row is swipeable.
 */
export default function ArtRowCarousel({
  title,
  subtitle,
  kicker,
  seeAllHref,
  limit = 18,
  priorityFirst = false,
  accentColor,
  artworks,
}: ArtRowCarouselProps) {
  if (artworks.length === 0) return null;
  const visible = artworks.slice(0, limit);

  return (
    <section className="art-row">
      <header className="art-row__head">
        <div className="art-row__head-text">
          {kicker && (
            <p className="art-row__kicker">
              {accentColor && (
                <span
                  className="art-row__accent-dot"
                  style={{ backgroundColor: accentColor }}
                  aria-hidden="true"
                />
              )}
              {kicker}
            </p>
          )}
          <h2 className="art-row__title">{title}</h2>
          {subtitle && <p className="art-row__subtitle">{subtitle}</p>}
        </div>
        {seeAllHref && (
          <Link href={seeAllHref} className="art-row__see-all">
            See all
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </header>

      <div className="art-row__rail" role="region" aria-label={`${title} carousel`}>
        {visible.map((art, i) => (
          <div key={art.id} className="art-row__slide">
            <ArtCard artwork={art} priority={priorityFirst && i === 0} />
          </div>
        ))}
      </div>
    </section>
  );
}
