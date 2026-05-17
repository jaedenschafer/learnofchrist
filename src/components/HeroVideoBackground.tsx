'use client';

import { useEffect, useRef } from 'react';

/**
 * YouTube video background for the home hero.
 *
 * - Autoplays muted (browser autoplay requirement) and loops.
 * - Loops at 57s so the video never reveals its logo card at the end.
 * - Hides every YouTube UI affordance (controls, branding, related,
 *   annotations, captions).
 * - Scales the iframe to "cover" the hero container the same way
 *   object-fit: cover would for an <img>.
 *
 * Falls back gracefully — if YouTube fails to load, the hero just
 * shows the dark veil + content (no broken state).
 */

const VIDEO_ID = '36gA40ArYFY';
const LOOP_END_SECONDS = 57;
const DESKTOP_MIN_WIDTH = '(min-width: 768px)';

// Loose YouTube IFrame API typing — the real types from @types/youtube
// would pull in DOM augmentations we don't need.
type YTPlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
  getCurrentTime: () => number;
  destroy: () => void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        elementOrId: string | HTMLElement,
        options: Record<string, unknown>,
      ) => YTPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export default function HeroVideoBackground() {
  const playerRef = useRef<YTPlayer | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // ----------------------------------------------------------------
    // Performance gating for the YouTube iframe.
    //
    // 1. MOBILE SKIP: viewports < 768px never load the iframe at all.
    //    The still photo (`.loc-hero__bg` in page.tsx) is already the
    //    LCP element, so mobile users get the intended visual without
    //    paying ~1MB of JS, an ongoing watchdog interval, or the
    //    battery cost of decoding a background video.
    // 2. IDLE DEFER: on desktop we wait for requestIdleCallback (or a
    //    2s setTimeout fallback) so the iframe injection never
    //    competes with React hydration on the first interaction.
    // 3. INTERSECTION GATE: we additionally wait for an
    //    IntersectionObserver hit before injecting. The hero is on
    //    screen on a fresh load, but on a back-navigation the user
    //    may already be scrolled past it — no need to load there.
    // ----------------------------------------------------------------

    if (typeof window === 'undefined') return;

    // Mobile: bail out entirely. Still photo handles it.
    if (!window.matchMedia(DESKTOP_MIN_WIDTH).matches) {
      return;
    }

    let cancelled = false;
    let idleHandle: number | null = null;
    let timeoutHandle: ReturnType<typeof setTimeout> | null = null;
    let observer: IntersectionObserver | null = null;
    let hasStarted = false;

    function createPlayer() {
      if (cancelled || hasStarted || !window.YT?.Player) return;
      hasStarted = true;
      playerRef.current = new window.YT.Player('hero-video', {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          loop: 1,
          playlist: VIDEO_ID, // required for loop on a single video
          playsinline: 1,
          iv_load_policy: 3,
          cc_load_policy: 0,
          disablekb: 1,
          start: 0,
          end: LOOP_END_SECONDS,
        },
        events: {
          onReady: (e: { target: YTPlayer }) => {
            try {
              e.target.playVideo();
            } catch {
              /* ignore — autoplay denied */
            }
            // Tag the rendered iframe with loading="lazy" so the
            // browser can defer offscreen network work if the hero
            // ever ends up below the fold.
            try {
              const iframe = document.querySelector<HTMLIFrameElement>(
                '#hero-video iframe, iframe#hero-video',
              );
              if (iframe) iframe.loading = 'lazy';
            } catch {
              /* ignore */
            }
          },
          onStateChange: (e: { data: number }) => {
            // 0 = ENDED. Prefer YouTube's own state-change callback
            // for the loop — when it fires, we restart immediately
            // and skip the polling tick.
            if (e.data === 0 && playerRef.current) {
              playerRef.current.seekTo(0, true);
              playerRef.current.playVideo();
            }
          },
        },
      });

      // Backup loop watchdog. YouTube's onEnded fires unreliably with
      // loop=1, so we still poll currentTime — but at 1s (down from
      // 250ms) since the state-change callback is the primary path.
      intervalRef.current = setInterval(() => {
        try {
          const t = playerRef.current?.getCurrentTime?.();
          if (typeof t === 'number' && t >= LOOP_END_SECONDS) {
            playerRef.current?.seekTo(0, true);
            playerRef.current?.playVideo();
          }
        } catch {
          /* ignore — player not ready yet */
        }
      }, 1000);
    }

    function loadApiAndCreate() {
      if (cancelled) return;
      if (window.YT?.Player) {
        createPlayer();
        return;
      }
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prev) prev();
        createPlayer();
      };
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.async = true;
        document.body.appendChild(tag);
      }
    }

    function scheduleLoad() {
      if (cancelled) return;
      const ric = (
        window as typeof window & {
          requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        }
      ).requestIdleCallback;
      if (typeof ric === 'function') {
        idleHandle = ric(loadApiAndCreate, { timeout: 3000 });
      } else {
        timeoutHandle = setTimeout(loadApiAndCreate, 2000);
      }
    }

    // IntersectionObserver gate — only schedule the idle load once
    // the hero container is actually in the viewport.
    const target = containerRef.current;
    if (target && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              observer?.disconnect();
              observer = null;
              scheduleLoad();
              break;
            }
          }
        },
        { rootMargin: '0px', threshold: 0.01 },
      );
      observer.observe(target);
    } else {
      // No IO support — just schedule on idle directly.
      scheduleLoad();
    }

    return () => {
      cancelled = true;
      if (observer) observer.disconnect();
      if (idleHandle != null) {
        const cic = (
          window as typeof window & {
            cancelIdleCallback?: (handle: number) => void;
          }
        ).cancelIdleCallback;
        if (typeof cic === 'function') cic(idleHandle);
      }
      if (timeoutHandle) clearTimeout(timeoutHandle);
      if (intervalRef.current) clearInterval(intervalRef.current);
      try {
        playerRef.current?.destroy?.();
      } catch {
        /* ignore */
      }
    };
  }, []);

  return (
    <div className="loc-hero__video" aria-hidden="true" ref={containerRef}>
      <div id="hero-video" />
    </div>
  );
}
