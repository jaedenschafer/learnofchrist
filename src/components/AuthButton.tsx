'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase/browser';
import { useReadingPrefs } from '@/lib/ReadingPrefsContext';
import type { User } from '@supabase/supabase-js';

type Variant = 'desktop' | 'mobile';

export default function AuthButton({
  variant = 'desktop',
  onNavigate,
}: {
  variant?: Variant;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { setTheme, isDark } = useReadingPrefs();

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    let cancelled = false;

    supabase.auth.getUser().then(({ data }) => {
      if (!cancelled) {
        setUser(data.user ?? null);
        setLoaded(true);
      }
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoaded(true);
    });

    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  // Close desktop menu on outside click / escape.
  useEffect(() => {
    if (!menuOpen) return;
    function onDown(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  // Close desktop menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const signInHref = `/auth/sign-in${
    pathname && pathname !== '/auth/sign-in' ? `?next=${encodeURIComponent(pathname)}` : ''
  }`;

  // Skeleton slot during session load — preserves layout width, no flash.
  if (!loaded) {
    if (variant === 'mobile') return null;
    return (
      <span
        aria-hidden="true"
        className="ml-1 w-9 h-9 rounded-full"
      />
    );
  }

  if (!user) {
    if (variant === 'mobile') {
      return (
        <Link
          href={signInHref}
          onClick={onNavigate}
          className="nav-link block px-4 py-3 rounded-2xl text-[0.9375rem] font-medium transition-all"
        >
          Sign in
        </Link>
      );
    }
    return (
      <Link
        href={signInHref}
        className="ml-1 inline-flex items-center h-9 px-3 rounded-full text-[0.8125rem] font-medium border border-[color:var(--color-separator)] text-[color:var(--color-label)] hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)] transition-colors"
      >
        Sign in
      </Link>
    );
  }

  // Signed in.
  const displayName =
    (user.user_metadata?.full_name as string | undefined) ||
    (user.user_metadata?.name as string | undefined) ||
    user.email ||
    'Account';
  const avatar = user.user_metadata?.avatar_url as string | undefined;
  const initial = displayName.trim().charAt(0).toUpperCase() || '?';

  if (variant === 'mobile') {
    return (
      <>
        <Link
          href="/account"
          onClick={onNavigate}
          className="nav-link flex items-center gap-3 px-4 py-3 rounded-2xl text-[0.9375rem] font-medium transition-all"
        >
          <Avatar src={avatar} initial={initial} size={28} />
          <span className="truncate">{displayName}</span>
        </Link>
        <button
          type="button"
          aria-checked={isDark}
          role="switch"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="nav-link w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl text-[0.9375rem] font-medium transition-all"
        >
          <span className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center w-6 h-6"
              aria-hidden="true"
            >
              {isDark ? <MoonIconSmall /> : <SunIconSmall />}
            </span>
            <span>Dark mode</span>
          </span>
          <span
            className={`relative inline-flex w-10 h-6 rounded-full transition-colors ${
              isDark
                ? 'bg-[color:var(--color-primary)]'
                : 'bg-[color:var(--color-separator)]'
            }`}
            aria-hidden="true"
          >
            <span
              className={`absolute top-0.5 inline-block w-5 h-5 rounded-full bg-white shadow transition-transform ${
                isDark ? 'translate-x-[18px]' : 'translate-x-0.5'
              }`}
            />
          </span>
        </button>
        <form action="/auth/sign-out" method="post">
          <button
            type="submit"
            className="nav-link w-full text-left block px-4 py-3 rounded-2xl text-[0.9375rem] font-medium transition-all"
            onClick={onNavigate}
          >
            Sign out
          </button>
        </form>
      </>
    );
  }

  return (
    <div ref={menuRef} className="relative ml-1">
      <button
        type="button"
        onClick={() => setMenuOpen((v) => !v)}
        className="nav-link nav-icon-link w-9 h-9 rounded-full flex items-center justify-center transition-all"
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        aria-label="Account menu"
      >
        <Avatar src={avatar} initial={initial} size={28} />
      </button>
      {menuOpen && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-56 rounded-xl border border-[color:var(--color-separator)] bg-[color:var(--color-surface)] shadow-lg py-1 z-50"
        >
          <div className="px-3 py-2 border-b border-[color:var(--color-separator)]">
            <p className="text-[0.8125rem] font-medium text-[color:var(--color-label)] truncate">
              {displayName}
            </p>
            {user.email && (
              <p className="text-[0.75rem] text-[color:var(--color-tertiary-label)] truncate">
                {user.email}
              </p>
            )}
          </div>
          <Link
            href="/account"
            role="menuitem"
            className="block px-3 py-2 text-[0.875rem] text-[color:var(--color-label)] hover:bg-[color:var(--color-separator)]/40"
          >
            Account
          </Link>
          <div className="border-t border-[color:var(--color-separator)] my-1" />
          <div className="px-3 py-2">
            <p className="text-[0.6875rem] uppercase tracking-wide font-semibold text-[color:var(--color-tertiary-label)] mb-2">
              Settings
            </p>
            <button
              type="button"
              role="menuitemcheckbox"
              aria-checked={isDark}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="w-full flex items-center justify-between gap-3 px-2 py-1.5 rounded-lg text-[0.875rem] text-[color:var(--color-label)] hover:bg-[color:var(--color-separator)]/40 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span
                  className="inline-flex items-center justify-center w-5 h-5 text-[color:var(--color-secondary-label)]"
                  aria-hidden="true"
                >
                  {isDark ? <MoonIconSmall /> : <SunIconSmall />}
                </span>
                <span>Dark mode</span>
              </span>
              <span
                className={`relative inline-flex w-9 h-5 rounded-full transition-colors ${
                  isDark
                    ? 'bg-[color:var(--color-primary)]'
                    : 'bg-[color:var(--color-separator)]'
                }`}
                aria-hidden="true"
              >
                <span
                  className={`absolute top-0.5 inline-block w-4 h-4 rounded-full bg-white shadow transition-transform ${
                    isDark ? 'translate-x-[18px]' : 'translate-x-0.5'
                  }`}
                />
              </span>
            </button>
          </div>
          <div className="border-t border-[color:var(--color-separator)] my-1" />
          <form action="/auth/sign-out" method="post">
            <button
              type="submit"
              role="menuitem"
              className="w-full text-left block px-3 py-2 text-[0.875rem] text-[color:var(--color-label)] hover:bg-[color:var(--color-separator)]/40"
            >
              Sign out
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

function SunIconSmall() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIconSmall() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function Avatar({
  src,
  initial,
  size,
}: {
  src?: string;
  initial: string;
  size: number;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt=""
        width={size}
        height={size}
        className="rounded-full object-cover border border-[color:var(--color-separator)]"
        referrerPolicy="no-referrer"
      />
    );
  }
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-primary)] text-white font-semibold"
      style={{ width: size, height: size, fontSize: size * 0.45 }}
      aria-hidden="true"
    >
      {initial}
    </span>
  );
}
