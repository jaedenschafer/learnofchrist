'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/bible', label: 'Bible' },
    { href: '/study', label: 'Study' },
    { href: '/progress', label: 'Progress' },
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
          <Link href="/" className="flex items-center gap-2">
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
            <Link
              href="/settings"
              aria-label="Settings"
              className="nav-link nav-icon-link ml-1 w-9 h-9 rounded-full flex items-center justify-center transition-all"
            >
              <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
          </div>

          {/* Mobile right: settings shortcut + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <Link
              href="/settings"
              aria-label="Settings"
              className="nav-link nav-icon-link w-9 h-9 rounded-full flex items-center justify-center transition-colors active:scale-95"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="nav-link nav-icon-link w-9 h-9 rounded-full flex items-center justify-center transition-colors active:scale-95"
              aria-label="Toggle menu"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px]' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-2 space-y-0.5 nav-mobile-panel">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-link block px-4 py-3 rounded-2xl text-[0.9375rem] font-medium transition-all"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/settings"
            className="nav-link block px-4 py-3 rounded-2xl text-[0.9375rem] font-medium transition-all"
            onClick={() => setIsOpen(false)}
          >
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
}
