'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import ArtFilterDrawer, { type FilterOption } from './ArtFilterDrawer';
import './ArtFilterBar.css';

interface ArtFilterBarProps {
  totalCount: number;
  bookCount: number;
  /** Drives the drawer's multi-selects. */
  books: FilterOption[];
  artists: FilterOption[];
  /** Initial filter state read from URL searchParams on /art. */
  initialQuery?: string;
  initialBooks?: string[];
  initialArtists?: string[];
  initialEras?: string[];
  initialCharacters?: string[];
  initialThemes?: string[];
  initialTestament?: 'old' | 'new' | '';
  initialSort?: string;
}

/**
 * Compact filter pill above the showcase carousels on /art.
 *
 *   [ search ] [ era ▾ ] [ sort ▾ ] [ All filters ]
 *
 * Inline controls write directly to /art?... and re-render the page.
 * "All filters" opens the Redfin-style drawer for the multi-select
 * book / artist / character / theme / testament filters.
 */
export default function ArtFilterBar({
  totalCount,
  bookCount,
  books,
  artists,
  initialQuery = '',
  initialBooks = [],
  initialArtists = [],
  initialEras = [],
  initialCharacters = [],
  initialThemes = [],
  initialTestament = '',
  initialSort = 'recent',
}: ArtFilterBarProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [q, setQ] = useState(initialQuery);
  const [era, setEra] = useState(initialEras[0] ?? '');
  const [sort, setSort] = useState(initialSort);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const submit = (overrides: Partial<{ q: string; era: string; sort: string }> = {}) => {
    const params = new URLSearchParams();
    const Q = overrides.q ?? q;
    const E = overrides.era ?? era;
    const S = overrides.sort ?? sort;
    if (Q) params.set('q', Q);
    if (E) params.append('era', E);
    if (S && S !== 'recent') params.set('sort', S);
    // Preserve any multi-select filters that were applied via the drawer.
    for (const b of initialBooks) params.append('book', b);
    for (const a of initialArtists) params.append('artist', a);
    for (const c of initialCharacters) params.append('character', c);
    for (const t of initialThemes) params.append('theme', t);
    if (initialTestament) params.set('testament', initialTestament);
    const qs = params.toString();
    startTransition(() => {
      router.push(qs ? `/art?${qs}` : '/art');
    });
  };

  return (
    <>
      <div className="art-filter-bar" role="search">
        <form
          className="art-filter-bar__row"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <label className="art-filter-bar__field art-filter-bar__field--search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
            </svg>
            <input
              type="search"
              placeholder="Search by artwork, scene, or scripture"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search artworks"
            />
          </label>

          <label className="art-filter-bar__field art-filter-bar__field--select">
            <select
              value={era}
              onChange={(e) => {
                setEra(e.target.value);
                submit({ era: e.target.value });
              }}
              aria-label="Filter by style or era"
            >
              <option value="">Any style</option>
              <option value="early-christian">Early Christian</option>
              <option value="byzantine">Byzantine</option>
              <option value="medieval">Medieval</option>
              <option value="renaissance">Renaissance</option>
              <option value="baroque">Baroque</option>
              <option value="modern">19th-century</option>
              <option value="contemporary">Modern</option>
            </select>
          </label>

          <label className="art-filter-bar__field art-filter-bar__field--select art-filter-bar__field--sort">
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                submit({ sort: e.target.value });
              }}
              aria-label="Sort"
            >
              <option value="recent">Recently added</option>
              <option value="popular">Most referenced</option>
              <option value="year_asc">Oldest first</option>
              <option value="year_desc">Newest first</option>
              <option value="az">Title A–Z</option>
            </select>
          </label>

          <button
            type="button"
            className="art-filter-bar__all"
            onClick={() => setDrawerOpen(true)}
            aria-haspopup="dialog"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
              <path strokeLinecap="round" d="M4 7h16M7 12h10M10 17h4" />
            </svg>
            <span>All filters</span>
          </button>
        </form>

        <p className="art-filter-bar__meta" aria-live="polite">
          {pending
            ? 'Loading…'
            : `${totalCount.toLocaleString()} artworks · ${bookCount} books covered`}
        </p>
      </div>

      <ArtFilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        initialQuery={initialQuery}
        initialBooks={initialBooks}
        initialArtists={initialArtists}
        initialEras={initialEras}
        initialCharacters={initialCharacters}
        initialThemes={initialThemes}
        initialTestament={initialTestament}
        initialSort={initialSort}
        books={books}
        artists={artists}
      />
    </>
  );
}
