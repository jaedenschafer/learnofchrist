'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import AuthButton from './AuthButton';
import SiteSearch from './SiteSearch';

/**
 * Top navigation bar — BibleProject-style layout.
 *
 * Left:   logo
 * Center: three primary nav links (Bible · Study · Art) followed by a
 *         generous SiteSearch pill that is the visual anchor of the bar.
 * Right:  "Get the app" CTA, hamburger overflow (Plans, Topics, Blog,
 *         Translations), and the AuthButton (profile circle / sign in).
 *
 * On mobile we hide the inline links and search; the hamburger panel
 * takes over with a stacked menu and a dedicated mobile search row at
 * the top.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overflowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close overflow menu on outside click / Escape / route change-ish.
  useEffect(() => {
    if (!isOpen) return;
    function onClick(e: MouseEvent) {
      if (overflowRef.current && !overflowRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  // Three primary links sit inline next to the logo. Overflow lives in
  // the hamburger panel.
  const primaryLinks = [
    { href: '/bible', label: 'Bible' },
    { href: '/study', label: 'Study' },
    { href: '/art', label: 'Art' },
  ];
  const overflowLinks = [
    { href: '/study-plans', label: 'Plans' },
    { href: '/topics', label: 'Topics' },
    { href: '/questions', label: 'Questions' },
    { href: '/blog', label: 'Blog' },
    { href: '/bible/translations', label: 'Translations' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 site-nav ${
        scrolled ? 'glass-heavy shadow-sm' : 'backdrop-blur-md'
      }`}
      style={{
        borderBottom: scrolled ? '1px solid var(--color-separator)' : '1px solid transparent',
        background: scrolled ? undefined : 'color-mix(in srgb, var(--color-bg) 60%, transparent)',
      }}
    >
      <div className="site-nav__bar">
        {/* ── Logo ───────────────────────────────────────────── */}
        <Link
          href="/"
          className="site-nav__brand"
          aria-label="Learn of Christ — home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt=""
            width={26}
            height={26}
            className="site-nav__logo"
          />
          <span className="site-nav__brand-name">Learn of Christ</span>
        </Link>

        {/* ── Inline primary links (desktop) ─────────────────── */}
        <div className="site-nav__links">
          {primaryLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="site-nav__link">
              {label}
            </Link>
          ))}
        </div>

        {/* ── Search (desktop) ───────────────────────────────── */}
        <div className="site-nav__search">
          <SiteSearch />
        </div>

        {/* ── Right cluster ─────────────────────────────────── */}
        <div className="site-nav__right">
          <Link href="/about#app" className="site-nav__cta">
            Get the app
          </Link>

          <div ref={overflowRef} className="site-nav__overflow">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="site-nav__icon-btn"
              aria-label="More menu"
              aria-expanded={isOpen}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                {isOpen ? (
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    d="M6 6l12 12M18 6L6 18"
                  />
                ) : (
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>

            {isOpen && (
              <div className="site-nav__overflow-panel">
                {/* Mobile-only inline search */}
                <div className="site-nav__overflow-search">
                  <SiteSearch compact />
                </div>

                <div className="site-nav__overflow-section">
                  <p className="site-nav__overflow-label">Browse</p>
                  {primaryLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="site-nav__overflow-link site-nav__overflow-link--mobile"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>

                <div className="site-nav__overflow-section">
                  <p className="site-nav__overflow-label">More</p>
                  {overflowLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="site-nav__overflow-link"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>

                <div className="site-nav__overflow-section site-nav__overflow-section--cta">
                  <Link
                    href="/about#app"
                    className="site-nav__overflow-link"
                    onClick={() => setIsOpen(false)}
                  >
                    Get the app
                  </Link>
                  <AuthButton variant="mobile" onNavigate={() => setIsOpen(false)} />
                </div>
              </div>
            )}
          </div>

          <AuthButton variant="desktop" />
        </div>
      </div>
    </nav>
  );
}
