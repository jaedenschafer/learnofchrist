import Link from 'next/link';
import type { ArtworkWithArtist } from '@/lib/supabase';
import ArtCard from './ArtCard';
import './ChapterArtStrip.css';

interface ChapterArtStripProps {
  bookSlug: string;
  chapter: number;
  bookName: string;
  artworks: ArtworkWithArtist[];
}

/**
 * Horizontal-scroll carousel of artworks for the chapter, anchored to the
 * bottom of every study-guide page. Renders nothing when there's no art
 * indexed for the chapter.
 *
 * Cap: caps the rail at 24 artworks. The "See all NN →" link in the header
 * goes to /art/book/[slug]/[chapter], which paginates through the full
 * set with a proper grid + filters. The cap prevents heavy chapters
 * (Luke 1, Matthew 27) from mounting hundreds of cards on first paint —
 * each card is a Link + img + interaction handlers, and the cost adds up
 * fast even with lazy loading.
 */
const RAIL_CAP = 24;

export default function ChapterArtStrip({ bookSlug, chapter, bookName, artworks }: ChapterArtStripProps) {
  if (artworks.length === 0) return null;

  const visible = artworks.slice(0, RAIL_CAP);
  const overflow = artworks.length - visible.length;

  return (
    <section className="chapter-art-strip">
      <div className="chapter-art-strip__head">
        <div>
          <p className="chapter-art-strip__kicker">Art for this chapter</p>
          <h2 className="chapter-art-strip__title">
            How artists have pictured {bookName} {chapter}
          </h2>
        </div>
        <Link
          href={`/art/book/${bookSlug}/${chapter}`}
          className="chapter-art-strip__see-all"
        >
          See all {artworks.length} →
        </Link>
      </div>

      <div className="chapter-art-strip__rail" role="region" aria-label="Chapter artwork carousel">
        {visible.map((art, i) => (
          <div key={art.id} className="chapter-art-strip__slide">
            {/* The first card in the rail is the most likely candidate for
                "what the user sees first" on a study page that doesn't
                inline its own opener. Hint priority so it loads eagerly. */}
            <ArtCard artwork={art} priority={i === 0} />
          </div>
        ))}
        {overflow > 0 && (
          <Link
            href={`/art/book/${bookSlug}/${chapter}`}
            className="chapter-art-strip__overflow"
          >
            +{overflow} more →
          </Link>
        )}
      </div>
    </section>
  );
}
