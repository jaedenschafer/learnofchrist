'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="max-w-4xl mx-auto px-5 py-12 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <p className="footer-brand font-semibold text-sm mb-3">Learn of Christ</p>
            <p className="footer-muted text-[0.8125rem] leading-relaxed max-w-[200px]">
              Free Bible study for everyone. No account. No ads.
            </p>
          </div>

          {/* Study */}
          <div>
            <h4 className="footer-heading font-semibold text-[0.6875rem] uppercase tracking-wider mb-3">Study</h4>
            <ul className="space-y-2 text-[0.8125rem]">
              <li><Link href="/bible" className="footer-link transition-colors">Read the Bible</Link></li>
              <li><Link href="/study-plans" className="footer-link transition-colors">Study Plans</Link></li>
              <li><Link href="/topics" className="footer-link transition-colors">Topics</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="footer-heading font-semibold text-[0.6875rem] uppercase tracking-wider mb-3">Learn</h4>
            <ul className="space-y-2 text-[0.8125rem]">
              <li><Link href="/questions" className="footer-link transition-colors">Questions</Link></li>
              <li><Link href="/blog" className="footer-link transition-colors">Blog</Link></li>
              <li><Link href="/about" className="footer-link transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Settings */}
          <div>
            <h4 className="footer-heading font-semibold text-[0.6875rem] uppercase tracking-wider mb-3">More</h4>
            <ul className="space-y-2 text-[0.8125rem]">
              <li><Link href="/settings" className="footer-link transition-colors">Settings</Link></li>
              <li><Link href="/privacy" className="footer-link transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="footer-link transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="footer-copyright text-[0.75rem]">&copy; {new Date().getFullYear()} Learn of Christ</p>
          <p className="footer-copyright text-[0.75rem]">Made with faith, freely given.</p>
        </div>
      </div>
    </footer>
  );
}
