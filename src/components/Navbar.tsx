'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/bible', label: 'Bible Study' },
    { href: '/study-plans', label: 'Study Plans' },
    { href: '/questions', label: 'Questions' },
    { href: '/topics', label: 'Topics' },
    { href: '/blog', label: 'Blog' },
    { href: '/family', label: 'Family' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-[0_0.5px_0_rgba(0,0,0,0.08)]'
        : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-12 sm:h-14">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-gold to-amber-600 rounded-[10px] flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xs">LC</span>
            </div>
            <span className="text-base font-serif font-bold text-navy hidden sm:inline tracking-tight">
              Learn of Christ
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded-lg text-navy/60 hover:bg-black/5 transition-colors active:scale-95"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 rounded-lg text-[0.8rem] font-medium text-navy/55 hover:text-navy hover:bg-black/[0.04] transition-all active:scale-95"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[400px]' : 'max-h-0'
      }`}>
        <div className="px-3 py-2 space-y-0.5 bg-white/95 backdrop-blur-xl border-t border-black/5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block px-3 py-2.5 rounded-xl text-[0.9rem] text-navy/70 hover:text-navy hover:bg-black/[0.04] transition-all font-medium active:scale-[0.99]"
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
