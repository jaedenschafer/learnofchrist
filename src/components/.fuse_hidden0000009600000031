'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import {
  ERAS,
  BIBLICAL_CHARACTERS,
  BIBLICAL_THEMES,
} from '@/lib/biblicalTags';

export interface ArtFilterOption {
  slug: string;
  name: string;
  count?: number;
}

interface ArtFiltersProps {
  books: ArtFilterOption[];
  artists: ArtFilterOption[];
  initialQuery?: string;
  initialBooks?: string[];
  initialArtists?: string[];
  initialEras?: string[];
  initialCharacters?: string[];
  initialThemes?: string[];
  initialSort?: string;
  totalCount: number;
}

type SortValue =
  | 'recent'
  | 'oldest'
  | 'az'
  | 'za'
  | 'year_asc'
  | 'year_desc'
  | 'popular'
  | 'relevance';

const SORT_OPTIONS: Array<{ value: SortValue; label: string }> = [
  { value: 'recent', label: 'Recently added' },
  { value: 'oldest', label: 'Oldest added' },
  { value: 'az', label: 'Title A–Z' },
  { value: 'za', label: 'Title Z–A' },
  { value: 'year_desc', label: 'Year (newest)' },
  { value: 'year_asc', label: 'Year (oldest)' },
  { value: 'popular', label: 'Most referenced' },
  { value: 'relevance', label: 'Relevance' },
];

/**
 * Filter + search bar for the /art index page. Updates URL searchParams —
 * the server component re-reads params and re-queries.
 *
 * Era / character / theme are multi-select chips. Book / Artist stay as
 * single-select dropdowns to avoid drowning the bar at scale (artist list
 * runs 100+ entries; chips would wrap forever).
 */
export default function ArtFilters({
  books,
  artists,
  initialQuery = '',
  initialBooks = [],
  initialArtists = [],
  initialEras = [],
  initialCharacters = [],
  initialThemes = [],
  initialSort = 'recent',
  totalCount,
}: ArtFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [q, setQ] = useState(initialQuery);
  const [debounced, setDebounced] = useState(initialQuery);
  const qTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Debounce the search input before writing to the URL.
  useEffect(() => {
    if (qTimer.current) clearTimeout(qTimer.current);
    qTimer.current = setTimeout(() => setDebounced(q), 250);
    return () => {
      if (qTimer.current) clearTimeout(qTimer.current);
    };
  }, [q]);

  // Write filter state to URL whenever the debounced query changes.
  useEffect(() => {
    if (debounced === (searchParams.get('q') || '')) return;
    const p = new URLSearchParams(searchParams.toString());
    if (debounced) p.set('q', debounced);
    else p.delete('q');
    p.delete('cursor'); // any change resets pagination
    router.replace(`${pathname}?${p.toString()}`, { scroll: false });
  }, [debounced, router, pathname, searchParams]);

  function setSingleParam(key: string, value: string) {
    const p = new URLSearchParams(searchParams.toString());
    if (value) p.set(key, value);
    else p.delete(key);
    p.delete('cursor');
    router.replace(`${pathname}?${p.toString()}`, { scroll: false });
  }

  function toggleMultiParam(key: string, value: string, current: string[]) {
    const p = new URLSearchParams(searchParams.toString());
    p.delete(key);
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    for (const v of next) p.append(key, v);
    p.delete('cursor');
    router.replace(`${pathname}?${p.toString()}`, { scroll: false });
  }

  function clearAll() {
    setQ('');
    router.replace(pathname, { scroll: false });
  }

  const hasActiveFilters = useMemo(
    () =>
      !!(
        q ||
        initialBooks.length ||
        initialArtists.length ||
        initialEras.length ||
        initialCharacters.length ||
        initialThemes.length ||
        (initialSort && initialSort !== 'recent' && initialSort !== 'relevance')
      ),
    [q, initialBooks, initialArtists, initialEras, initialCharacters, initialThemes, initialSort],
  );

  const book = initialBooks[0] ?? '';
  const artist = initialArtists[0] ?? '';
  const sort = initialSort;

  return (
    <div className="mt-6 mb-8">
      {/* Search bar */}
      <div className="relative">
        <svg
          aria-hidden="true"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--color-tertiary-label)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search artworks, artists, scenes…"
          className="w-full h-11 pl-10 pr-10 rounded-2xl bg-[color:var(--color-surface)] border border-[color:var(--color-separator)] text-[0.9375rem] text-[color:var(--color-label)] placeholder:text-[color:var(--color-tertiary-label)] focus:outline-none focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/20 transition-all"
          aria-label="Search artworks"
        />
        {q && (
          <button
            type="button"
            onClick={() => setQ('')}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center text-[color:var(--color-tertiary-label)] hover:text-[color:var(--color-label)] hover:bg-[color:var(--color-separator)]/50 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3 h-3">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Filter dropdowns (single-select) */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <FilterSelect
          label="Book"
          value={book}
          onChange={(v) => setSingleParam('book', v)}
          options={[
            { value: '', label: 'All books' },
            ...books.map((b) => ({ value: b.slug, label: b.name })),
          ]}
        />
        <FilterSelect
          label="Artist"
          value={artist}
          onChange={(v) => setSingleParam('artist', v)}
          options={[
            { value: '', label: 'All artists' },
            ...artists.map((a) => ({
              value: a.slug,
              label: a.count ? `${a.name} (${a.count})` : a.name,
            })),
          ]}
        />
        <FilterSelect
          label="Sort"
          value={sort === 'recent' ? '' : sort}
          onChange={(v) => setSingleParam('sort', v)}
          options={SORT_OPTIONS.map((s) => ({
            value: s.value === 'recent' ? '' : s.value,
            label: s.label,
          }))}
        />
        <div className="flex-1" />
        <span className="text-[0.8125rem] text-[color:var(--color-secondary-label)]">
          {totalCount.toLocaleString()} artwork{totalCount === 1 ? '' : 's'}
        </span>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearAll}
            className="text-[0.8125rem] font-medium text-[color:var(--color-primary)] hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      {/* Era chips */}
      <FacetChipRow
        label="Era"
        options={ERAS.map((e) => ({ key: e.key, label: e.label }))}
        active={initialEras}
        onToggle={(v) => toggleMultiParam('era', v, initialEras)}
      />

      {/* Theme chips (most useful for casual browsing) */}
      <FacetChipRow
        label="Scene"
        options={BIBLICAL_THEMES.map((t) => ({ key: t.key, label: t.label }))}
        active={initialThemes}
        onToggle={(v) => toggleMultiParam('theme', v, initialThemes)}
      />

      {/* Character chips — collapsed by default since this list is long */}
      <FacetChipRowCollapsible
        label="Character"
        options={BIBLICAL_CHARACTERS.map((c) => ({ key: c.key, label: c.label }))}
        active={initialCharacters}
        onToggle={(v) => toggleMultiParam('character', v, initialCharacters)}
      />
    </div>
  );
}

interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
}

function FilterSelect({ label, value, onChange, options }: FilterSelectProps) {
  const active = !!value;
  return (
    <label
      className={`relative inline-flex items-center h-9 rounded-full border px-3 text-[0.8125rem] font-medium transition-colors cursor-pointer ${
        active
          ? 'bg-[color:var(--color-primary)] border-[color:var(--color-primary)] text-white'
          : 'bg-[color:var(--color-surface)] border-[color:var(--color-separator)] text-[color:var(--color-label)] hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]'
      }`}
    >
      <span className="mr-1 opacity-70">{label}:</span>
      <span className="font-semibold">
        {options.find((o) => o.value === value)?.label ?? options[0]?.label}
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-1 w-3 h-3 opacity-70"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      >
        {options.map((o) => (
          <option key={o.value || 'any'} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

/* ─── Multi-select chip rows ──────────────────────────────────────────── */

interface FacetOption { key: string; label: string }
interface FacetChipRowProps {
  label: string;
  options: FacetOption[];
  active: string[];
  onToggle: (value: string) => void;
}

function FacetChipRow({ label, options, active, onToggle }: FacetChipRowProps) {
  return (
    <div className="mt-3">
      <div className="text-[0.6875rem] uppercase tracking-wider font-semibold text-[color:var(--color-tertiary-label)] mb-2 px-1">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <FacetChip
            key={o.key}
            label={o.label}
            active={active.includes(o.key)}
            onClick={() => onToggle(o.key)}
          />
        ))}
      </div>
    </div>
  );
}

function FacetChipRowCollapsible({ label, options, active, onToggle }: FacetChipRowProps) {
  const [expanded, setExpanded] = useState(active.length > 0);
  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-1 text-[0.6875rem] uppercase tracking-wider font-semibold text-[color:var(--color-tertiary-label)] mb-2 px-1 hover:text-[color:var(--color-label)] transition-colors"
        aria-expanded={expanded}
      >
        {label}
        {active.length > 0 && (
          <span className="normal-case tracking-normal text-[color:var(--color-primary)] font-bold">
            ({active.length})
          </span>
        )}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`w-3 h-3 transition-transform ${expanded ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {expanded && (
        <div className="flex flex-wrap gap-2">
          {options.map((o) => (
            <FacetChip
              key={o.key}
              label={o.label}
              active={active.includes(o.key)}
              onClick={() => onToggle(o.key)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FacetChip({
  label,
  active,
  onClick,
}: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center h-8 rounded-full px-3 text-[0.8125rem] font-medium border transition-colors ${
        active
          ? 'bg-[color:var(--color-primary)] border-[color:var(--color-primary)] text-white'
          : 'bg-[color:var(--color-surface)] border-[color:var(--color-separator)] text-[color:var(--color-label)] hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]'
      }`}
    >
      {label}
    </button>
  );
}
