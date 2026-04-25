'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import AuthButton from './AuthButton';
import SettingsMenu from './SettingsMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on outside click / Escape.
  useEffect(() => {
    if (!isOpen) return;
    function onClick(e: MouseEvent) {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
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

  const navLinks = [
    { href: '/bible', label: 'Bible' },
    { href: '/study', label: 'Study' },
    { href: '/art', label: 'Art' },
    { href: '/topics', label: 'Topics' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-heavy shadow-sm' : 'backdrop-blur-md'
      } site-nav`}
      style={{
        borderBottom: scrolled ? '1px solid var(--color-separator)' : '1px solid transparent',
        background: scrolled ? undefined : 'color-mix(in srgb, var(--color-bg) 60%, transparent)',
      }}
    >
      <div className="max-w-4xl mx-auto px-5">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Learn of Christ — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt=""
              width={28}
              height={28}
              className="block site-logo"
              style={{ width: 28, height: 28, objectFit: 'contain' }}
            />
            <span
              className="text-[1.0625rem] font-semibold tracking-tight"
              style={{ color: 'var(--color-label)' }}
            >
              Learn of Christ
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="nav-link px-3 py-1.5 rounded-full text-[0.8125rem] font-medium transition-all"
              >
                {label}
              </Link>
            ))}
            <span className="ml-1">
              <SettingsMenu />
            </span>
            <AuthButton variant="desktop" />
          </div>

          {/* Mobile right: settings popover + hamburger */}
          <div ref={mobileRef} className="md:hidden flex items-center gap-1 relative">
            <SettingsMenu />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="nav-link nav-icon-link w-9 h-9 rounded-full flex items-center justify-center transition-colors active:scale-95"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {isOpen && (
              <div className="absolute right-0 top-full mt-2 z-[60] min-w-[220px] bg-[color:var(--color-surface)] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-[color:var(--color-separator)] overflow-hidden animate-fade-in nav-mobile-panel">
                <div className="py-1">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="nav-link block px-4 py-2.5 text-[0.9375rem] font-medium transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    href="/settings"
                    className="nav-link block px-4 py-2.5 text-[0.9375rem] font-medium transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Settings
                  </Link>
                  <AuthButton variant="mobile" onNavigate={() => setIsOpen(false)} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
