'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import './ArtFilterBar.css';

/**
 * Compact, Airbnb-style filter bar for the /art landing page.
 *
 * One slim pill row containing:
 *   • Search input (full-text artwork search)
 *   • Era selector (dropdown — single value)
 *   • Sort selector (dropdown — single value)
 *   • "All filters" → links to /art/browse with the same query state
 *
 * Submitting any control navigates to /art/browse?... with the chosen
 * params. The showcase carousels above stay editorial; the browse view
 * is the multi-dimensional faceted search experience the user already
 * knows. This bar is the on-ramp.
 */
export default function ArtFilterBar({
  totalCount,
  bookCount,
}: {
  totalCount: number;
  bookCount: number;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [q, setQ] = useState('');
  const [era, setEra] = useState('');
  const [sort, setSort] = useState('');

  const submit = (overrides: Partial<{ q: string; era: string; sort: string }> = {}) => {
    const params = new URLSearchParams();
    const Q = overrides.q ?? q;
    const E = overrides.era ?? era;
    const S = overrides.sort ?? sort;
    if (Q) params.set('q', Q);
    if (E) params.set('era', E);
    if (S) params.set('sort', S);
    const qs = params.toString();
    startTransition(() => {
      router.push(qs ? `/art/browse?${qs}` : '/art/browse');
    });
  };

  return (
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
          <span className="art-filter-bar__label">Style</span>
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
          <span className="art-filter-bar__label">Sort</span>
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              submit({ sort: e.target.value });
            }}
            aria-label="Sort"
          >
            <option value="">Recently added</option>
            <option value="popular">Most referenced</option>
            <option value="year_asc">Oldest first</option>
            <option value="year_desc">Newest first</option>
            <option value="az">Title A–Z</option>
          </select>
        </label>

        <Link href="/art/browse" className="art-filter-bar__all">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <path strokeLinecap="round" d="M4 7h16M7 12h10M10 17h4" />
          </svg>
          <span>All filters</span>
        </Link>
      </form>

      <p className="art-filter-bar__meta" aria-live="polite">
        {pending
          ? 'Loading…'
          : `${totalCount.toLocaleString()} artworks · ${bookCount} books covered`}
      </p>
    </div>
  );
}
