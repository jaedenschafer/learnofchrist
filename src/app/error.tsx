'use client';

import { useEffect } from 'react';
import Link from 'next/link';

/**
 * Root error boundary — catches unhandled errors in any route.
 * App-router convention: this file must be a client component
 * and default-export a function taking { error, reset }.
 */
export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production, this is where we'd forward to Sentry / PostHog etc.
    // For now log to console so it shows up in Vercel logs.
    // eslint-disable-next-line no-console
    console.error('[root error]', error);
  }, [error]);

  return (
    <div className="page-container">
      <div className="max-w-lg mx-auto text-center py-20">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FF3B30]/[0.08] mb-5">
          <svg
            className="w-6 h-6 text-[#FF3B30]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m0-10.036A9.96 9.96 0 002.036 12a9.96 9.96 0 009.964 9.964A9.96 9.96 0 0021.964 12 9.96 9.96 0 0012 2.036zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[color:var(--color-label)] tracking-tight mb-3">
          Something went wrong
        </h1>
        <p className="text-[0.9375rem] text-[color:var(--color-secondary-label)] leading-relaxed mb-6 max-w-md mx-auto">
          We hit an unexpected error on this page. You can try again, or return
          home — the rest of the site is still working.
        </p>
        {error.digest && (
          <p className="text-[0.75rem] text-[color:var(--color-tertiary-label)] font-mono mb-6">
            Reference: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-1.5 px-5 h-11 rounded-full bg-[#007AFF] text-white text-[0.9375rem] font-semibold hover:bg-[#0056CC] active:scale-[0.98] transition-all"
          >
            Try again
          </button>
          <Link
            href="/"
            className="btn-outline inline-flex items-center justify-center gap-1.5 px-5 h-11 rounded-full text-[0.9375rem] font-semibold active:scale-[0.98] transition-all"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
