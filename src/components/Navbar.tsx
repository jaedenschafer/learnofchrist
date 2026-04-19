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
    { href: '/study-plans', label: 'Plans' },
    { href: '/topics', label: 'Topics' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'glass-heavy border-b border-black/[0.06] shadow-sm'
        : 'bg-[#F5F5F7]/60 backdrop-blur-md'
    }`}>
      <div className="max-w-4xl mx-auto px-5">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[1.0625rem] font-semibold tracking-tight text-[#1D1D1F]">
              Learn of Christ
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 rounded-full text-[0.8125rem] font-medium text-[#86868B] hover:text-[#1D1D1F] hover:bg-black/[0.04] transition-all"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#86868B] hover:bg-black/[0.04] transition-colors active:scale-95"
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

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[400px]' : 'max-h-0'
      }`}>
        <div className="px-4 py-2 space-y-0.5 border-t border-black/[0.04]">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block px-4 py-3 rounded-2xl text-[0.9375rem] font-medium text-[#86868B] hover:text-[#1D1D1F] hover:bg-black/[0.03] transition-all"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
