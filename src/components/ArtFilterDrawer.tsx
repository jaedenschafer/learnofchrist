'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ERAS, BIBLICAL_CHARACTERS, BIBLICAL_THEMES } from '@/lib/biblicalTags';
import './ArtFilterDrawer.css';

export interface FilterOption {
  slug: string;
  name: string;
  count?: number;
}

const SORT_OPTIONS = [
  { value: 'recent', label: 'Recently added' },
  { value: 'popular', label: 'Most referenced' },
  { value: 'year_asc', label: 'Year — oldest first' },
  { value: 'year_desc', label: 'Year — newest first' },
  { value: 'az', label: 'Title A–Z' },
  { value: 'za', label: 'Title Z–A' },
] as const;

const TESTAMENT_OPTIONS = [
  { value: '', label: 'All' },
  { value: 'old', label: 'Old Testament' },
  { value: 'new', label: 'New Testament' },
] as const;

interface ArtFilterDrawerProps {
  open: boolean;
  onClose: () => void;
  /** Initial state, read from URL searchParams. */
  initialQuery?: string;
  initialBooks?: string[];
  initialArtists?: string[];
  initialEras?: string[];
  initialCharacters?: string[];
  initialThemes?: string[];
  initialTestament?: 'old' | 'new' | '';
  initialSort?: string;
  /** Drives the multi-select lists. */
  books: FilterOption[];
  artists: FilterOption[];
}

/**
 * Redfin-style filter drawer for the /art page. Slides in from the right
 * (mobile = full screen, desktop = 460px panel) over a dimmed backdrop.
 *
 * Sections (top to bottom): Search · Sort · Testament · Era · Book ·
 * Artist · Character · Theme. Sticky footer with Clear all + Apply.
 *
 * On Apply, navigates to /art?{params} with all selections in the URL.
 * The /art page reads those params server-side and renders a filtered
 * grid in place of the showcase rows.
 */
export default function ArtFilterDrawer({
  open,
  onClose,
  initialQuery = '',
  initialBooks = [],
  initialArtists = [],
  initialEras = [],
  initialCharacters = [],
  initialThemes = [],
  initialTestament = '',
  initialSort = 'recent',
  books,
  artists,
}: ArtFilterDrawerProps) {
  const router = useRouter();

  // Local working state — only commits to URL on Apply. This keeps the
  // drawer feeling instant (Redfin-style) instead of debouncing every
  // checkbox into the URL.
  const [q, setQ] = useState(initialQuery);
  const [bookSel, setBookSel] = useState<string[]>(initialBooks);
  const [artistSel, setArtistSel] = useState<string[]>(initialArtists);
  const [eraSel, setEraSel] = useState<string[]>(initialEras);
  const [characterSel, setCharacterSel] = useState<string[]>(initialCharacters);
  const [themeSel, setThemeSel] = useState<string[]>(initialThemes);
  const [testament, setTestament] = useState<'' | 'old' | 'new'>(initialTestament);
  const [sort, setSort] = useState(initialSort);
  const [artistQuery, setArtistQuery] = useState('');

  // Re-hydrate when the drawer reopens (URL may have changed).
  useEffect(() => {
    if (!open) return;
    setQ(initialQuery);
    setBookSel(initialBooks);
    setArtistSel(initialArtists);
    setEraSel(initialEras);
    setCharacterSel(initialCharacters);
    setThemeSel(initialThemes);
    setTestament(initialTestament);
    setSort(initialSort);
    setArtistQuery('');
  }, [
    open,
    initialQuery,
    initialBooks,
    initialArtists,
    initialEras,
    initialCharacters,
    initialThemes,
    initialTestament,
    initialSort,
  ]);

  // Lock body scroll while open + close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const filteredArtists = useMemo(() => {
    if (!artistQuery.trim()) return artists;
    const needle = artistQuery.toLowerCase();
    return artists.filter((a) => a.name.toLowerCase().includes(needle));
  }, [artistQuery, artists]);

  const totalSelections =
    bookSel.length +
    artistSel.length +
    eraSel.length +
    characterSel.length +
    themeSel.length +
    (testament ? 1 : 0) +
    (sort !== 'recent' ? 1 : 0) +
    (q.trim() ? 1 : 0);

  function toggle(set: string[], setter: (next: string[]) => void, value: string) {
    if (set.includes(value)) setter(set.filter((v) => v !== value));
    else setter([...set, value]);
  }

  function clearAll() {
    setQ('');
    setBookSel([]);
    setArtistSel([]);
    setEraSel([]);
    setCharacterSel([]);
    setThemeSel([]);
    setTestament('');
    setSort('recent');
  }

  function apply() {
    const params = new URLSearchParams();
    if (q.trim()) params.set('q', q.trim());
    for (const b of bookSel) params.append('book', b);
    for (const a of artistSel) params.append('artist', a);
    for (const e of eraSel) params.append('era', e);
    for (const c of characterSel) params.append('character', c);
    for (const t of themeSel) params.append('theme', t);
    if (testament) params.set('testament', testament);
    if (sort && sort !== 'recent') params.set('sort', sort);
    const qs = params.toString();
    router.push(qs ? `/art?${qs}` : '/art');
    onClose();
  }

  if (!open) return null;

  return (
    <div className="art-drawer" role="dialog" aria-modal="true" aria-label="Filters">
      <div className="art-drawer__backdrop" onClick={onClose} />

      <div className="art-drawer__panel">
        <header className="art-drawer__head">
          <h2 className="art-drawer__title">Filters</h2>
          <button
            type="button"
            className="art-drawer__close"
            onClick={onClose}
            aria-label="Close filters"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        <div className="art-drawer__body">
          {/* ── Keyword search ── */}
          <Section title="Search">
            <div className="art-drawer__searchbox">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
              </svg>
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Title, scene, or scripture"
                aria-label="Keyword search"
              />
            </div>
          </Section>

          {/* ── Sort ── */}
          <Section title="Sort">
            <div className="art-drawer__chips">
              {SORT_OPTIONS.map((opt) => (
                <ChipButton
                  key={opt.value}
                  label={opt.label}
                  active={sort === opt.value}
                  onClick={() => setSort(opt.value)}
                />
              ))}
            </div>
          </Section>

          {/* ── Testament ── */}
          <Section title="Testament">
            <div className="art-drawer__chips">
              {TESTAMENT_OPTIONS.map((opt) => (
                <ChipButton
                  key={opt.value || 'all'}
                  label={opt.label}
                  active={testament === opt.value}
                  onClick={() => setTestament(opt.value as '' | 'old' | 'new')}
                />
              ))}
            </div>
          </Section>

          {/* ── Era ── */}
          <Section title="Era">
            <div className="art-drawer__chips">
              {ERAS.map((era) => (
                <ChipButton
                  key={era.key}
                  label={era.label}
                  active={eraSel.includes(era.key)}
                  onClick={() => toggle(eraSel, setEraSel, era.key)}
                />
              ))}
            </div>
          </Section>

          {/* ── Book ── */}
          {books.length > 0 && (
            <Section title={`Book (${bookSel.length || 'any'})`}>
              <div className="art-drawer__chips art-drawer__chips--scroll">
                {books.map((b) => (
                  <ChipButton
                    key={b.slug}
                    label={b.name}
                    active={bookSel.includes(b.slug)}
                    onClick={() => toggle(bookSel, setBookSel, b.slug)}
                  />
                ))}
              </div>
            </Section>
          )}

          {/* ── Artist (with inline filter input) ── */}
          {artists.length > 0 && (
            <Section title={`Artist (${artistSel.length || 'any'})`}>
              <div className="art-drawer__searchbox art-drawer__searchbox--inline">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />
                  <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
                </svg>
                <input
                  type="search"
                  value={artistQuery}
                  onChange={(e) => setArtistQuery(e.target.value)}
                  placeholder={`Filter ${artists.length} artists`}
                  aria-label="Filter artist list"
                />
              </div>
              <div className="art-drawer__chips art-drawer__chips--scroll">
                {filteredArtists.slice(0, 60).map((a) => (
                  <ChipButton
                    key={a.slug}
                    label={a.count ? `${a.name} · ${a.count}` : a.name}
                    active={artistSel.includes(a.slug)}
                    onClick={() => toggle(artistSel, setArtistSel, a.slug)}
                  />
                ))}
                {filteredArtists.length > 60 && (
                  <p className="art-drawer__hint">
                    {filteredArtists.length - 60} more — keep typing to narrow.
                  </p>
                )}
              </div>
            </Section>
          )}

          {/* ── Character ── */}
          <Section title={`Character (${characterSel.length || 'any'})`}>
            <div className="art-drawer__chips">
              {BIBLICAL_CHARACTERS.map((c) => (
                <ChipButton
                  key={c.key}
                  label={c.label}
                  active={characterSel.includes(c.key)}
                  onClick={() => toggle(characterSel, setCharacterSel, c.key)}
                />
              ))}
            </div>
          </Section>

          {/* ── Theme ── */}
          <Section title={`Theme (${themeSel.length || 'any'})`}>
            <div className="art-drawer__chips">
              {BIBLICAL_THEMES.map((t) => (
                <ChipButton
                  key={t.key}
                  label={t.label}
                  active={themeSel.includes(t.key)}
                  onClick={() => toggle(themeSel, setThemeSel, t.key)}
                />
              ))}
            </div>
          </Section>
        </div>

        <footer className="art-drawer__foot">
          <button
            type="button"
            className="btn-outline art-drawer__clear"
            onClick={clearAll}
            disabled={totalSelections === 0}
          >
            Clear all
          </button>
          <button
            type="button"
            className="btn-primary art-drawer__apply"
            onClick={apply}
          >
            {totalSelections > 0
              ? `Show results (${totalSelections} filter${totalSelections === 1 ? '' : 's'})`
              : 'Show all artworks'}
          </button>
        </footer>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="art-drawer__section">
      <h3 className="art-drawer__section-title">{title}</h3>
      {children}
    </section>
  );
}

function ChipButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`art-drawer__chip ${active ? 'is-active' : ''}`}
    >
      {label}
    </button>
  );
}
