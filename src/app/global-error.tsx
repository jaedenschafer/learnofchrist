'use client';

import { useEffect } from 'react';

/**
 * Last-resort error boundary — catches errors in the root layout
 * or any component above the root error.tsx. Must render its own
 * <html> and <body>.
 */
export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('[global error]', error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
          background: '#F5F5F7',
          color: '#1D1D1F',
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{ maxWidth: 480, textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: 12 }}>
            Learn of Christ is temporarily unavailable
          </h1>
          <p
            style={{
              fontSize: '0.9375rem',
              color: '#6E6E73',
              lineHeight: 1.6,
              marginBottom: 24,
            }}
          >
            We hit a critical error. Please try again in a moment.
          </p>
          <a
            href="/"
            style={{
              display: 'inline-block',
              background: '#007AFF',
              color: '#fff',
              textDecoration: 'none',
              padding: '12px 24px',
              borderRadius: 999,
              fontWeight: 600,
              fontSize: '0.9375rem',
            }}
          >
            Reload
          </a>
        </div>
      </body>
    </html>
  );
}
