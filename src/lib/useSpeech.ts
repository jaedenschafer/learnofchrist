'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export interface SpeechSegment {
  text: string;
  label?: string;
  element?: HTMLElement;
}

export interface SpeechOptions {
  rate?: number;
  lang?: string;
  pitch?: number;
}

/**
 * Thin wrapper around the browser's SpeechSynthesis API with a segment
 * queue, play/pause/stop/skip controls, and index tracking. Segments play
 * one-at-a-time so we can reliably advance on onend — this avoids Chrome's
 * ~15-second auto-pause bug that shows up when queueing many utterances at
 * once.
 */
export function useSpeech() {
  const [supported, setSupported] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [rate, setRate] = useState(1);

  const segmentsRef = useRef<SpeechSegment[]>([]);
  const cancelledRef = useRef(false);
  const rateRef = useRef(rate);

  useEffect(() => {
    rateRef.current = rate;
  }, [rate]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSupported(false);
    }
    return () => {
      // Clean up on unmount
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speakIndex = useCallback((i: number) => {
    if (cancelledRef.current) return;
    const segs = segmentsRef.current;
    if (!segs || i >= segs.length) {
      setPlaying(false);
      setPaused(false);
      setCurrentIndex(-1);
      return;
    }
    const seg = segs[i];
    const text = (seg.text || '').trim();
    if (!text) {
      speakIndex(i + 1);
      return;
    }
    setCurrentIndex(i);

    const u = new SpeechSynthesisUtterance(text);
    u.rate = rateRef.current;
    u.onend = () => {
      if (cancelledRef.current) return;
      speakIndex(i + 1);
    };
    u.onerror = () => {
      if (cancelledRef.current) return;
      speakIndex(i + 1);
    };
    window.speechSynthesis.speak(u);
  }, []);

  const play = useCallback(
    (segments: SpeechSegment[], startIndex = 0) => {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      cancelledRef.current = false;
      segmentsRef.current = segments;
      setPlaying(true);
      setPaused(false);
      speakIndex(startIndex);
    },
    [speakIndex],
  );

  const pause = useCallback(() => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.pause();
    setPaused(true);
  }, []);

  const resume = useCallback(() => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.resume();
    setPaused(false);
  }, []);

  const stop = useCallback(() => {
    if (!('speechSynthesis' in window)) return;
    cancelledRef.current = true;
    window.speechSynthesis.cancel();
    segmentsRef.current = [];
    setPlaying(false);
    setPaused(false);
    setCurrentIndex(-1);
  }, []);

  const skipNext = useCallback(() => {
    if (currentIndex < 0) return;
    const next = currentIndex + 1;
    window.speechSynthesis.cancel();
    cancelledRef.current = false;
    if (next < segmentsRef.current.length) {
      speakIndex(next);
    } else {
      stop();
    }
  }, [currentIndex, speakIndex, stop]);

  const skipBack = useCallback(() => {
    if (currentIndex <= 0) return;
    const prev = currentIndex - 1;
    window.speechSynthesis.cancel();
    cancelledRef.current = false;
    speakIndex(prev);
  }, [currentIndex, speakIndex]);

  // Apply rate change mid-playback: cancel and resume from current index
  const setRateLive = useCallback(
    (r: number) => {
      setRate(r);
      rateRef.current = r;
      if (playing && currentIndex >= 0) {
        window.speechSynthesis.cancel();
        cancelledRef.current = false;
        speakIndex(currentIndex);
      }
    },
    [playing, currentIndex, speakIndex],
  );

  /**
   * One-shot utterance for Hebrew / single-word pronunciation.
   * Does not touch the main segment queue.
   */
  const speakOnce = useCallback((text: string, opts: SpeechOptions = {}) => {
    if (!('speechSynthesis' in window)) return;
    // Don't cancel the main queue — create a separate utterance and let it play
    // over the main one briefly. For a tiny word (<1s) this is fine.
    const u = new SpeechSynthesisUtterance(text);
    if (opts.rate) u.rate = opts.rate;
    if (opts.pitch) u.pitch = opts.pitch;
    if (opts.lang) u.lang = opts.lang;
    window.speechSynthesis.speak(u);
  }, []);

  return {
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
    setRate: setRateLive,
    speakOnce,
  };
}
