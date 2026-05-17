import Link from 'next/link';
import Image from 'next/image';
import type { ArtworkWithArtist } from '@/lib/supabase';
import './ArtShowcaseHero.css';

/**
 * Cinematic hero for the /art landing page.
 *
 * Full-bleed featured artwork (rotates daily — see getFeaturedHeroArtwork)
 * fills the top of the page edge-to-edge. The image is dimmed with a
 * vertical gradient so the overlaid serif title pops; a soft Ken-Burns
 * scale animation gives the still image a hint of motion on first paint.
 *
 * Falls back to a typographic-only hero if no featured artwork is
 * available — the page still has a strong opener.
 */
export default function ArtShowcaseHero({
  artwork,
}: {
  artwork: ArtworkWithArtist | null;
}) {
  if (!artwork) {
    return (
      <header className="art-hero art-hero--no-image">
        <p className="art-hero__kicker">
          <span>Christian Art Library</span>
          <span aria-hidden="true">·</span>
          <span>Public Domain</span>
        </p>
        <h1 className="art-hero__title">
          Two thousand years of Christian art, indexed to scripture.
        </h1>
        <p className="art-hero__dek">
          Renaissance masters, Russian icons, 19th-century engravings,
          ancient Latin manuscripts — every piece linked to the chapter
          it depicts.
        </p>
      </header>
    );
  }

  const heroSrc =
    artwork.thumbnail_800_url ?? artwork.thumbnail_url ?? artwork.image_url;
  const artistName = artwork.artist?.name ?? 'Anonymous';

  return (
    <header
      className="art-hero"
      style={
        artwork.dominant_color
          ? { backgroundColor: artwork.dominant_color }
          : undefined
      }
    >
      <Image
        src={heroSrc}
        alt={`${artwork.title} by ${artistName}`}
        fill
        sizes="100vw"
        quality={75}
        priority
        className="art-hero__image"
      />
      <div className="art-hero__scrim" aria-hidden="true" />

      <div className="art-hero__content">
        <p className="art-hero__kicker">
          <span className="art-hero__kicker-label">Today&rsquo;s piece</span>
          <span aria-hidden="true">·</span>
          <span>{artistName}</span>
          {artwork.year && (
            <>
              <span aria-hidden="true">·</span>
              <span>{artwork.year}</span>
            </>
          )}
        </p>
        <h1 className="art-hero__title">{artwork.title}</h1>
        <p className="art-hero__dek">
          A free, growing showcase of historic Christian art — every piece
          indexed to the chapter it depicts.
        </p>
        <div className="art-hero__ctas">
          <Link href={`/art/artwork/${artwork.slug}`} className="art-hero__cta art-hero__cta--primary">
            View this piece
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="#showcase-rows" className="art-hero__cta art-hero__cta--secondary">
            Browse the library
          </Link>
        </div>
      </div>
    </header>
  );
}
