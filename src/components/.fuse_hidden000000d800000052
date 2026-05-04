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
const MANUSCRIPT_RAIL_CAP = 8;

/** True if the artwork carries the 'manuscript-page' tag — i.e. it's a
 *  folio of an ancient Bible manuscript (Vivian Bible, Codex Amiatinus,
 *  Stuttgart Psalter, etc.) rather than a painted artwork. Manuscript
 *  pages are shown in their own rail below the artworks rail. */
function isManuscriptPage(art: ArtworkWithArtist): boolean {
  return art.tags?.includes('manuscript-page') ?? false;
}

export default function ChapterArtStrip({ bookSlug, chapter, bookName, artworks }: ChapterArtStripProps) {
  if (artworks.length === 0) return null;

  // Split painted artworks from manuscript-page folios so each gets its
  // own rail with its own heading. Painted art always appears first.
  const paintings = artworks.filter((a) => !isManuscriptPage(a));
  const manuscripts = artworks.filter(isManuscriptPage);

  const visiblePaintings = paintings.slice(0, RAIL_CAP);
  const paintingOverflow = paintings.length - visiblePaintings.length;
  const visibleManuscripts = manuscripts.slice(0, MANUSCRIPT_RAIL_CAP);
  const manuscriptOverflow = manuscripts.length - visibleManuscripts.length;

  return (
    <>
      {paintings.length > 0 && (
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
            {visiblePaintings.map((art, i) => (
              <div key={art.id} className="chapter-art-strip__slide">
                {/* The first card in the rail is the most likely candidate for
                    "what the user sees first" on a study page that doesn't
                    inline its own opener. Hint priority so it loads eagerly. */}
                <ArtCard artwork={art} priority={i === 0} />
              </div>
            ))}
            {paintingOverflow > 0 && (
              <Link
                href={`/art/book/${bookSlug}/${chapter}`}
                className="chapter-art-strip__overflow"
              >
                +{paintingOverflow} more →
              </Link>
            )}
          </div>
        </section>
      )}

      {manuscripts.length > 0 && (
        <section className="chapter-art-strip chapter-art-strip--manuscripts">
          <div className="chapter-art-strip__head">
            <div>
              <p className="chapter-art-strip__kicker">Ancient manuscript</p>
              <h2 className="chapter-art-strip__title">
                The chapter as it appeared in surviving Latin Bibles
              </h2>
            </div>
          </div>

          <div className="chapter-art-strip__rail" role="region" aria-label="Ancient manuscript folios for this chapter">
            {visibleManuscripts.map((art) => (
              <div key={art.id} className="chapter-art-strip__slide">
                <ArtCard artwork={art} />
              </div>
            ))}
            {manuscriptOverflow > 0 && (
              <Link
                href={`/art/book/${bookSlug}/${chapter}`}
                className="chapter-art-strip__overflow"
              >
                +{manuscriptOverflow} more →
              </Link>
            )}
          </div>
        </section>
      )}
    </>
  );
}
