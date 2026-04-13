'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1F]">
      <div className="max-w-4xl mx-auto px-5 py-12 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <p className="font-semibold text-sm text-white/90 mb-3">Learn of Christ</p>
            <p className="text-[0.8125rem] text-white/35 leading-relaxed max-w-[200px]">
              Free Bible study for everyone. No account. No ads.
            </p>
          </div>

          {/* Study */}
          <div>
            <h4 className="font-semibold text-[0.6875rem] uppercase tracking-wider text-white/25 mb-3">Study</h4>
            <ul className="space-y-2 text-[0.8125rem]">
              <li><Link href="/bible" className="text-white/45 hover:text-white/80 transition-colors">Read the Bible</Link></li>
              <li><Link href="/study-plans" className="text-white/45 hover:text-white/80 transition-colors">Study Plans</Link></li>
              <li><Link href="/topics" className="text-white/45 hover:text-white/80 transition-colors">Topics</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold text-[0.6875rem] uppercase tracking-wider text-white/25 mb-3">Learn</h4>
            <ul className="space-y-2 text-[0.8125rem]">
              <li><Link href="/questions" className="text-white/45 hover:text-white/80 transition-colors">Questions</Link></li>
              <li><Link href="/blog" className="text-white/45 hover:text-white/80 transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-white/45 hover:text-white/80 transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[0.6875rem] uppercase tracking-wider text-white/25 mb-3">Legal</h4>
            <ul className="space-y-2 text-[0.8125rem]">
              <li><Link href="/privacy" className="text-white/45 hover:text-white/80 transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-white/45 hover:text-white/80 transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[0.75rem] text-white/20">&copy; {new Date().getFullYear()} Learn of Christ</p>
          <p className="text-[0.75rem] text-white/20">Made with faith, freely given.</p>
        </div>
      </div>
    </footer>
  );
}
