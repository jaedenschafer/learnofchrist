'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="font-serif font-bold text-sm text-white">Learn of Christ</span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed max-w-[200px]">
              Free Bible study resources to help you understand every chapter of scripture.
            </p>
          </div>

          {/* Study */}
          <div>
            <h4 className="font-sans font-semibold text-xs uppercase tracking-wider text-white/30 mb-4">Study</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/bible" className="text-white/50 hover:text-white transition-colors">Read the Bible</Link></li>
              <li><Link href="/study-plans" className="text-white/50 hover:text-white transition-colors">Study Plans</Link></li>
              <li><Link href="/topics" className="text-white/50 hover:text-white transition-colors">Topics</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-sans font-semibold text-xs uppercase tracking-wider text-white/30 mb-4">Learn</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/questions" className="text-white/50 hover:text-white transition-colors">Questions</Link></li>
              <li><Link href="/blog" className="text-white/50 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-white/50 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-sans font-semibold text-xs uppercase tracking-wider text-white/30 mb-4">Connect</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/contact" className="text-white/50 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-white/50 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-white/50 hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25">&copy; {new Date().getFullYear()} Learn of Christ. All rights reserved.</p>
          <p className="text-xs text-white/25">Made with faith, freely given.</p>
        </div>
      </div>
    </footer>
  );
}
