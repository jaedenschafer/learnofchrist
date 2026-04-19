'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSpeech, type SpeechSegment } from '@/lib/useSpeech';

/**
 * Listen-to-the-chapter button + floating bottom player.
 *
 * On click, walks the `.rich-study` container to build a narration queue
 * covering: intro paragraphs, section headers, scripture verses, commentary,
 * Christ Connection, Hebrew word explanations (transliteration + meaning,
 * not the Hebrew script — which isn't reliably spoken by default voices),
 * Carry This prompts, and Reflection prompts.
 *
 * Uses the browser's Web Speech API — free, offline, works everywhere.
 */
export default function StudyAudioPlayer({
  containerSelector = '.rich-study',
}: {
  containerSelector?: string;
} = {}) {
  const {
    supported,
    playing,
    paused,
    currentIndex,
    rate,
    play,
    pause,
    resume,
    stop,
    skipNext,
    skipBack,
    setRate,
  } = useSpeech();
  const segmentsRef = useRef<SpeechSegment[]>([]);
  const [total, setTotal] = useState(0);
  const [showSpeed, setShowSpeed] = useState(false);

  const collect = useCallback((): SpeechSegment[] => {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return [];
    const out: SpeechSegment[] = [];

    const pushFrom = (el: HTMLElement, prefix = '', label?: string) => {
      const text = (el.textContent || '').trim();
      if (!text) return;
      out.push({ text: prefix + text, element: el, label });
    };

    for (const node of Array.from(container.children)) {
      const el = node as HTMLElement;

      if (el.classList.contains('intro')) {
        pushFrom(el, '', 'Introduction');
      } else if (el.tagName === 'H2' && el.classList.contains('section')) {
        const ref = el.querySelector<HTMLElement>('.ref')?.textContent?.trim() || '';
        // Remaining text after the ref span is the section title
        const rest = (el.textContent || '').replace(ref, '').trim();
        const label = ref || rest || 'Section';
        const text = ref ? `${ref}. ${rest}` : rest;
        if (text) out.push({ text, element: el, label });
      } else if (el.classList.contains('verse-section')) {
        const scripture = el.querySelector<HTMLElement>('.scripture');
        if (scripture) pushFrom(scripture, '', 'Scripture');
        // Direct child paragraphs that aren't scripture
        for (const p of Array.from(el.querySelectorAll<HTMLElement>(':scope > p'))) {
          if (p.classList.contains('scripture')) continue;
          pushFrom(p);
        }
        for (const c of Array.from(el.querySelectorAll<HTMLElement>(':scope > .christ'))) {
          const title = c.querySelector<HTMLElement>('.title')?.textContent?.trim() || 'Christ Connection';
          const body = (c.textContent || '').replace(title, '').trim();
          out.push({ text: `${title}. ${body}`, element: c, label: title });
        }
        for (const h of Array.from(el.querySelectorAll<HTMLElement>(':scope > .hebrew'))) {
          const title = h.querySelector<HTMLElement>('.title')?.textContent?.trim() || 'Hebrew word';
          const translit = h.querySelector<HTMLElement>('.translit')?.textContent?.trim() || '';
          const desc = h.querySelector<HTMLElement>('.desc')?.textContent?.trim() || '';
          out.push({
            text: `${title}. ${translit}. ${desc}`,
            element: h,
            label: title,
          });
        }
        for (const c of Array.from(el.querySelectorAll<HTMLElement>(':scope > .carry'))) {
          // Skip the commit button we attached
          const text = (c.textContent || '').replace(/\b(I'll try this|Committed.*)$/i, '').trim();
          out.push({ text: `Carry this. ${text}`, element: c, label: 'Carry this' });
        }
      } else if (el.classList.contains('reflection-block')) {
        const prompt = el.querySelector<HTMLElement>('.reflection-prompt')?.textContent?.trim();
        if (prompt) out.push({ text: `Reflection. ${prompt}`, element: el, label: 'Reflection' });
      }
    }
    return out;
  }, [containerSelector]);

  const startPlayback = useCallback(
    (fromIndex = 0) => {
      const segments = collect();
      if (!segments.length) return;
      segmentsRef.current = segments;
      setTotal(segments.length);
      play(segments, fromIndex);
    },
    [collect, play],
  );

  // Highlight the currently-reading element and scroll into view
  useEffect(() => {
    if (!playing || currentIndex < 0) {
      document.querySelectorAll('.rich-study .is-reading').forEach((el) => el.classList.remove('is-reading'));
      return;
    }
    const seg = segmentsRef.current[currentIndex];
    if (!seg?.element) return;
    document.querySelectorAll('.rich-study .is-reading').forEach((el) => {
      if (el !== seg.element) el.classList.remove('is-reading');
    });
    seg.element.classList.add('is-reading');
    // Scroll into view, but gently — only if element is off-screen
    const rect = seg.element.getBoundingClientRect();
    const vpHeight = window.innerHeight;
    if (rect.top < 80 || rect.bottom > vpHeight - 120) {
      seg.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [playing, currentIndex]);

  const currentLabel = useMemo(() => {
    if (currentIndex < 0) return '';
    return segmentsRef.current[currentIndex]?.label || '';
  }, [currentIndex]);

  const progressPct = useMemo(() => {
    if (total === 0 || currentIndex < 0) return 0;
    return Math.round(((currentIndex + 1) / total) * 100);
  }, [currentIndex, total]);

  if (!supported) return null;

  return (
    <>
      {/* The "Listen" CTA button — place where you render <StudyAudioPlayer.Launcher> */}
      {!playing && (
        <button
          type="button"
          className="audio-launch"
          onClick={() => startPlayback(0)}
          aria-label="Listen to this study"
        >
          <span className="audio-launch-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </span>
          <span className="audio-launch-text">
            <span className="audio-launch-title">Listen to this study</span>
            <span className="audio-launch-sub">Narrated · for walks & commutes</span>
          </span>
        </button>
      )}

      {/* Floating player bar — appears while playing */}
      {playing && (
        <div className="audio-player" role="region" aria-label="Audio player">
          <div className="audio-player-inner">
            <button
              type="button"
              className="audio-ctrl audio-skip"
              onClick={skipBack}
              aria-label="Previous section"
              disabled={currentIndex <= 0}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6l-8.5 6z" />
              </svg>
            </button>
            <button
              type="button"
              className="audio-ctrl audio-playpause"
              onClick={paused ? resume : pause}
              aria-label={paused ? 'Resume' : 'Pause'}
            >
              {paused ? (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              className="audio-ctrl audio-skip"
              onClick={skipNext}
              aria-label="Next section"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6v12l8.5-6L6 6zm10 0h2v12h-2z" />
              </svg>
            </button>

            <div className="audio-now">
              <p className="audio-now-label">
                {currentLabel || 'Reading…'}
                <span className="audio-now-progress">
                  {'  · '}
                  {currentIndex + 1}/{total}
                </span>
              </p>
              <div className="audio-progress">
                <div className="audio-progress-bar" style={{ width: `${progressPct}%` }} />
              </div>
            </div>

            <div className="audio-speed-wrap">
              <button
                type="button"
                className="audio-ctrl audio-speed"
                onClick={() => setShowSpeed((s) => !s)}
                aria-label="Playback speed"
              >
                {rate}×
              </button>
              {showSpeed && (
                <div className="audio-speed-menu" role="menu">
                  {[0.85, 1, 1.15, 1.3, 1.5].map((r) => (
                    <button
                      key={r}
                      type="button"
                      className={`audio-speed-opt ${r === rate ? 'active' : ''}`}
                      onClick={() => {
                        setRate(r);
                        setShowSpeed(false);
                      }}
                    >
                      {r}×
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              className="audio-ctrl audio-close"
              onClick={stop}
              aria-label="Stop listening"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
