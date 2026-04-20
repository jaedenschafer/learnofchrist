import Link from 'next/link';
import type { ArtworkWithArtist } from '@/lib/supabase';
import ArtCard from './ArtCard';
import ReportArtworkButton from './ReportArtworkButton';

interface ChapterArtStripProps {
  bookSlug: string;
  chapter: number;
  bookName: string;
  artworks: ArtworkWithArtist[];
}

/**
 * "Art for this chapter" strip on the bottom of study-guide pages.
 * Renders nothing when there's no art indexed — the slot is invisible until
 * we have imagery for the passage.
 */
export default function ChapterArtStrip({ bookSlug, chapter, bookName, artworks }: ChapterArtStripProps) {
  if (artworks.length === 0) return null;

  const preview = artworks.slice(0, 4);
  const hasMore = artworks.length > preview.length;

  return (
    <section className="mt-10 mb-4 border-t border-[color:var(--color-separator)] pt-8">
      <div className="flex items-baseline justify-between mb-4 px-1">
        <div>
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-tertiary-label)] mb-1">
            Art for this chapter
          </p>
          <h2 className="text-[1.125rem] font-semibold text-[color:var(--color-label)]">
            How artists have pictured {bookName} {chapter}
          </h2>
        </div>
        {hasMore && (
          <Link
            href={`/art/book/${bookSlug}/${chapter}`}
            className="text-[0.8125rem] font-medium text-[color:var(--color-primary)] hover:underline shrink-0"
          >
            See all {artworks.length} →
          </Link>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {preview.map((art) => (
          <div key={art.id} className="relative group">
            <ArtCard artwork={art} />
            <ReportArtworkButton artworkId={art.id} artworkTitle={art.title} />
          </div>
        ))}
      </div>
    </section>
  );
}
