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
    <footer className="bg-[#1a1a2e] text-cream/90">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-serif font-bold text-base mb-3 text-cream">Learn of Christ</h3>
            <p className="text-xs text-cream/50 leading-relaxed">Deepen your understanding of Jesus Christ through scripture study.</p>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-xs uppercase tracking-wider text-cream/40 mb-3">Study</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/bible" className="text-cream/60 hover:text-gold transition-colors">Bible Study</Link></li>
              <li><Link href="/study-plans" className="text-cream/60 hover:text-gold transition-colors">Study Plans</Link></li>
              <li><Link href="/topics" className="text-cream/60 hover:text-gold transition-colors">Topics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-xs uppercase tracking-wider text-cream/40 mb-3">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/questions" className="text-cream/60 hover:text-gold transition-colors">Questions</Link></li>
              <li><Link href="/blog" className="text-cream/60 hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-cream/60 hover:text-gold transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-xs uppercase tracking-wider text-cream/40 mb-3">Newsletter</h4>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 rounded-xl bg-white/10 text-cream text-sm placeholder-cream/30 border border-white/10 focus:outline-none focus:border-gold/40 transition-colors"
                required
              />
              <button type="submit" className="bg-gold text-navy px-3 py-2 rounded-xl font-semibold hover:bg-opacity-90 transition-all text-sm active:scale-[0.98]">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/35">
            <p>&copy; 2026 Learn of Christ. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-gold transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-gold transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
