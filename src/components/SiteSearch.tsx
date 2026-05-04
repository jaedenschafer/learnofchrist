'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';

/**
 * Site-wide search input with grouped typeahead.
 *
 * Hits /api/search and renders results grouped by Bible / Study / Art /
 * Topics / Blog. Keyboard nav: ↑ ↓ moves selection across the flat
 * result list, Enter follows it, Escape closes. Click anywhere outside
 * to dismiss. Debounced 180ms so we don't fire a fetch on every key.
 *
 * Visual: pill input, expanded panel below with thumbnails for art and
 * a bare list for everything else. Lives inside the navbar but is
 * sized to feel like the BibleProject top-bar search.
 */

type Kind = 'bible' | 'study' | 'art' | 'artist' | 'topic' | 'blog';

interface SearchResult {
  kind: Kind;
  title: string;
  subtitle: string | null;
  href: string;
  thumbnail_url?: string | null;
}

interface SearchGroup {
  label: string;
  results: SearchResult[];
}

export default function SiteSearch({ compact = false }: { compact?: boolean }) {
  const [q, setQ] = useState('');
  const [groups, setGroups] = useState<SearchGroup[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  // Flatten results once per render so keyboard nav doesn't have to walk
  // groups every time the user presses a key.
  const flat = useMemo(
    () => groups.flatMap((g) => g.results),
    [groups],
  );

  // Debounced fetch. Cancel in-flight on each new keystroke so the
  // dropdown reflects the latest query rather than whichever response
  // happens to land last.
  useEffect(() => {
    const term = q.trim();
    if (term.length < 2) {
      setGroups([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const ctrl = new AbortController();
    const t = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(term)}&limit=12`,
          { signal: ctrl.signal },
        );
        if (!res.ok) throw new Error(`search ${res.status}`);
        const data = (await res.json()) as { groups: SearchGroup[] };
        setGroups(data.groups || []);
        setActive(0);
      } catch (err) {
        if ((err as { name?: string })?.name !== 'AbortError') {
          console.error('Search failed:', err);
          setGroups([]);
        }
      } finally {
        setLoading(false);
      }
    }, 180);
    return () => {
      clearTimeout(t);
      ctrl.abort();
    };
  }, [q]);

  // Outside-click dismiss.
  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  function onKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(i + 1, Math.max(flat.length - 1, 0)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      const target = flat[active];
      if (target) {
        e.preventDefault();
        router.push(target.href);
        setOpen(false);
        setQ('');
        inputRef.current?.blur();
      } else if (q.trim()) {
        // No typeahead match — fall back to the art search results page.
        e.preventDefault();
        router.push(`/art?q=${encodeURIComponent(q.trim())}`);
        setOpen(false);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
      inputRef.current?.blur();
    }
  }

  // Walk-through index for active highlighting across groups.
  let cursor = -1;

  return (
    <div
      ref={wrapRef}
      className={`site-search${compact ? ' site-search--compact' : ''}`}
    >
      <label className="site-search__field">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className="site-search__icon"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
          />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKey}
          placeholder="Search verses, topics, and questions…"
          role="combobox"
          aria-label="Search the site"
          aria-autocomplete="list"
          aria-controls={listboxId}
          aria-expanded={open}
          autoComplete="off"
          spellCheck={false}
          className="site-search__input"
        />
        {q && (
          <button
            type="button"
            onClick={() => {
              setQ('');
              setGroups([]);
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            className="site-search__clear"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          </button>
        )}
      </label>

      {open && (q.trim().length >= 2 || loading) && (
        <div
          className="site-search__panel"
          role="listbox"
          id={listboxId}
        >
          {loading && groups.length === 0 ? (
            <div className="site-search__empty">Searching…</div>
          ) : groups.length === 0 ? (
            <div className="site-search__empty">
              No matches for &ldquo;{q}&rdquo;.
            </div>
          ) : (
            groups.map((g) => (
              <div key={g.label} className="site-search__group">
                <p className="site-search__group-label">{g.label}</p>
                <ul className="site-search__list">
                  {g.results.map((r) => {
                    cursor += 1;
                    const isActive = cursor === active;
                    return (
                      <li key={r.href}>
                        <Link
                          href={r.href}
                          role="option"
                          aria-selected={isActive}
                          className={`site-search__item${
                            isActive ? ' is-active' : ''
                          }`}
                          onMouseEnter={() => setActive(cursor)}
                          onClick={() => {
                            setOpen(false);
                            setQ('');
                          }}
                        >
                          <ResultIcon kind={r.kind} thumb={r.thumbnail_url} />
                          <div className="site-search__item-body">
                            <span className="site-search__item-title">
                              {r.title}
                            </span>
                            {r.subtitle && (
                              <span className="site-search__item-sub">
                                {r.subtitle}
                              </span>
                            )}
                          </div>
                          <span
                            className="site-search__item-chevron"
                            aria-hidden="true"
                          >
                            ↗
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

function ResultIcon({
  kind,
  thumb,
}: {
  kind: Kind;
  thumb: string | null | undefined;
}) {
  if (thumb) {
    return (
      <span className="site-search__thumb">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={thumb} alt="" loading="lazy" />
      </span>
    );
  }
  // SVG-only kinds — keep them as flat glyphs in a colored circle so
  // they read as a result type, not a missing image.
  const map: Record<Kind, { d: string; tone: string }> = {
    bible: {
      d: 'M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z M5 17a3 3 0 0 1 3-3h11',
      tone: 'site-search__icon--bible',
    },
    study: {
      d: 'M4 5l8-2 8 2v13l-8 2-8-2V5z M12 3v17',
      tone: 'site-search__icon--study',
    },
    art: {
      d: 'M4 4h16v16H4z M4 14l4-4 4 4 4-4 4 4 M9 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z',
      tone: 'site-search__icon--art',
    },
    artist: {
      d: 'M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21a8 8 0 0 1 16 0',
      tone: 'site-search__icon--art',
    },
    topic: {
      d: 'M7 7h10v10H7z M7 11h10 M7 15h6',
      tone: 'site-search__icon--topic',
    },
    blog: {
      d: 'M5 4h14v16H5z M8 8h8 M8 12h8 M8 16h5',
      tone: 'site-search__icon--blog',
    },
  };
  const { d, tone } = map[kind];
  return (
    <span className={`site-search__glyph ${tone}`}>
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
