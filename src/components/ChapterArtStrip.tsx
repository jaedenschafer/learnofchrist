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
 */
export default function ChapterArtStrip({ bookSlug, chapter, bookName, artworks }: ChapterArtStripProps) {
  if (artworks.length === 0) return null;

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
        {artworks.map((art) => (
          <div key={art.id} className="chapter-art-strip__slide">
            <ArtCard artwork={art} />
          </div>
        ))}
      </div>
    </section>
  );
}
