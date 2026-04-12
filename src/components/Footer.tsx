'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Learn of Christ</h3>
            <p className="text-sm text-cream/80">Deepen your understanding of Jesus Christ through scripture study.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Study</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/bible" className="hover:text-gold transition-colors">
                  Bible Study
                </Link>
              </li>
              <li>
                <Link href="/study-plans" className="hover:text-gold transition-colors">
                  Study Plans
                </Link>
              </li>
              <li>
                <Link href="/topics" className="hover:text-gold transition-colors">
                  Topics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/questions" className="hover:text-gold transition-colors">
                  Questions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 rounded text-navy text-sm"
                required
              />
              <button type="submit" className="bg-gold text-navy px-3 py-2 rounded font-medium hover:bg-opacity-90 transition-all text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-cream/60">
            <p>&copy; 2026 Learn of Christ. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
