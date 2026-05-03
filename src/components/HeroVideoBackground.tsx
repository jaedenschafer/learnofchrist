'use client';

import { useEffect, useRef } from 'react';

/**
 * YouTube video background for the home hero.
 *
 * - Autoplays muted (browser autoplay requirement) and loops.
 * - Loops at 57s so the video never reveals its logo card at the end.
 * - Hides every YouTube UI affordance (controls, branding, related,
 *   annotations, captions).
 * - Polls currentTime every 250ms and seeks back when we reach 57s,
 *   which is more reliable than YouTube's own `end` parameter (which
 *   doesn't always fire on subsequent loops with `loop=1`).
 * - Scales the iframe to "cover" the hero container the same way
 *   object-fit: cover would for an <img>.
 *
 * Falls back gracefully — if YouTube fails to load, the hero just
 * shows the dark veil + content (no broken state).
 */

const VIDEO_ID = 'HVIhlyW7qUw';
const LOOP_END_SECONDS = 57;

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

  useEffect(() => {
    let cancelled = false;

    function createPlayer() {
      if (cancelled || !window.YT?.Player) return;
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
          },
          onStateChange: (e: { data: number }) => {
            // 0 = ENDED. Some browsers fire this when YouTube respects
            // the `end` param; seek and replay to keep the loop tight.
            if (e.data === 0 && playerRef.current) {
              playerRef.current.seekTo(0, true);
              playerRef.current.playVideo();
            }
          },
        },
      });

      // Backup loop watchdog. YouTube's loop+end combo isn't reliable
      // — poll currentTime and seek back when we cross the threshold.
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
      }, 250);
    }

    // Load IFrame API once. If it's already loaded (other component on
    // the page), reuse it.
    if (window.YT?.Player) {
      createPlayer();
    } else {
      // Stash any existing handler so we don't clobber it.
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prev) prev();
        createPlayer();
      };
      // Inject the script tag if it isn't already on the page.
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.async = true;
        document.body.appendChild(tag);
      }
    }

    return () => {
      cancelled = true;
      if (intervalRef.current) clearInterval(intervalRef.current);
      try {
        playerRef.current?.destroy?.();
      } catch {
        /* ignore */
      }
    };
  }, []);

  return (
    <div className="loc-hero__video" aria-hidden="true">
      <div id="hero-video" />
    </div>
  );
}
