'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
              <span className="text-navy font-bold text-sm">LC</span>
            </div>
            <span className="text-xl font-serif font-bold text-navy hidden sm:inline">Learn of Christ</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-navy hover:bg-cream"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/bible" className="text-navy hover:text-gold transition-colors">
              Bible Study
            </Link>
            <Link href="/study-plans" className="text-navy hover:text-gold transition-colors">
              Study Plans
            </Link>
            <Link href="/questions" className="text-navy hover:text-gold transition-colors">
              Questions
            </Link>
            <Link href="/topics" className="text-navy hover:text-gold transition-colors">
              Topics
            </Link>
            <Link href="/blog" className="text-navy hover:text-gold transition-colors">
              Blog
            </Link>
            <Link href="/family" className="text-navy hover:text-gold transition-colors">
              Family
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-cream">
          <div className="px-4 py-4 space-y-2">
            <Link
              href="/bible"
              className="block text-navy hover:text-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Bible Study
            </Link>
            <Link
              href="/study-plans"
              className="block text-navy hover:text-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Study Plans
            </Link>
            <Link
              href="/questions"
              className="block text-navy hover:text-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Questions
            </Link>
            <Link
              href="/topics"
              className="block text-navy hover:text-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Topics
            </Link>
            <Link
              href="/blog"
              className="block text-navy hover:text-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/family"
              className="block text-navy hover:text-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Family
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
