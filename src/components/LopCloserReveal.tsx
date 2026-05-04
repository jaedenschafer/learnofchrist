'use client';

import { useEffect } from 'react';

/**
 * Mounts a single IntersectionObserver site-wide that watches every
 * `.lop-closer` section and adds `.is-revealed` once the closer enters
 * the viewport. The CSS in page-shell.css then animates its background
 * blobs from off-screen into their resting positions.
 *
 * Tiny — one observer, one class toggle, no per-element wrapper. Works
 * across all the index pages (Plans, Topics, Questions, Blog, About,
 * Translations) without touching their JSX.
 */
export default function LopCloserReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typeof IntersectionObserver === 'undefined') {
      // Old browser — just reveal everything immediately so the design
      // doesn't look broken.
      document
        .querySelectorAll<HTMLElement>('.lop-closer')
        .forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target); // one-shot — no re-trigger
          }
        }
      },
      {
        // Fire when ~25% of the closer is in view, before the user is
        // looking directly at it, so the blobs are already finishing
        // their drift in by the time it's centered.
        threshold: 0.25,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    // Observe whatever closers are mounted now.
    const observe = () => {
      document
        .querySelectorAll<HTMLElement>('.lop-closer:not(.is-revealed)')
        .forEach((el) => observer.observe(el));
    };
    observe();

    // Re-observe after route changes (Next.js client navigation swaps the
    // tree without unmounting layout). We listen for navigation via a
    // MutationObserver on <body> — cheap, fires once per nav.
    const mo = new MutationObserver(() => {
      observe();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
