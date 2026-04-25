'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Detects when a `position: sticky` element has become "pinned" — i.e. the
 * spot above it scrolled out of view and the sticky element is now flush
 * against its containing block's top edge (or whatever offset CSS gave it).
 *
 * Returns a ref to attach to a sentinel <div> placed *just above* the
 * sticky element, plus a boolean. Use the boolean to apply a compact /
 * merged style class.
 *
 * Example:
 *   const { sentinelRef, stuck } = useStuckToTop();
 *   return (<>
 *     <div ref={sentinelRef} aria-hidden style={{ height: 0 }} />
 *     <div className={`sticky top-12 ${stuck ? 'is-pinned' : ''}`}>...</div>
 *   </>);
 */
export function useStuckToTop(rootMarginTop = 0) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0, rootMargin: `${rootMarginTop}px 0px 0px 0px` },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMarginTop]);

  return { sentinelRef, stuck };
}
