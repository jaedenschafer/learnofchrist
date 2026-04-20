'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSpeech } from '@/lib/useSpeech';

interface Mount {
  anchor: HTMLElement;
  word: string;        // transliteration to speak, e.g. "tehom"
  full: string;        // raw transliteration text for display
}

/**
 * Attaches a small speaker icon next to every <.hebrew .script> in the
 * study container so readers can hear the transliteration pronounced.
 *
 * We speak the English transliteration (not the Hebrew script) because
 * very few default browser voices include Hebrew — but every voice can
 * reliably read a Latin-script word like "tehom" or "raqia".
 */
export default function HebrewAudio({
  containerSelector = '.rich-study',
}: {
  containerSelector?: string;
} = {}) {
  const { supported, speakOnce } = useSpeech();
  const [mounts, setMounts] = useState<Mount[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const blocks = Array.from(
      container.querySelectorAll<HTMLElement>('.hebrew'),
    );
    const out: Mount[] = [];
    for (const block of blocks) {
      const script = block.querySelector<HTMLElement>('.script');
      const translitEl = block.querySelector<HTMLElement>('.translit');
      if (!script || !translitEl) continue;
      // The transliteration is something like:
      //   "tehom · the primeval chaos-waters"
      // The word itself is the first chunk (before the · separator).
      // The <strong> inside is also the word.
      const strongText = translitEl.querySelector('strong')?.textContent?.trim();
      const full = translitEl.textContent?.trim() || '';
      const word = strongText || full.split(/[·•-]/)[0].trim();
      if (!word) continue;
      // Create a mount node and append it as the last child of `.script`.
      // `.script` uses `display: flex; justify-content: center` so the
      // Hebrew text and the mount render side-by-side, with the mount
      // always to the right of the text regardless of bidi quirks.
      const mount = document.createElement('span');
      mount.className = 'hebrew-audio-mount';
      script.appendChild(mount);
      out.push({ anchor: mount, word, full });
    }
    setMounts(out);
  }, [containerSelector]);

  if (!supported || !mounted) return null;

  return (
    <>
      {mounts.map((m, i) =>
        createPortal(
          <SpeakerButton
            key={i}
            word={m.word}
            onSpeak={() =>
              speakOnce(m.word, { rate: 0.85, lang: 'en-US' })
            }
          />,
          m.anchor,
        ),
      )}
    </>
  );
}

function SpeakerButton({ word, onSpeak }: { word: string; onSpeak: () => void }) {
  const [pulsing, setPulsing] = useState(false);
  const handle = () => {
    onSpeak();
    setPulsing(true);
    window.setTimeout(() => setPulsing(false), 900);
  };
  return (
    <button
      type="button"
      className={`hebrew-audio-btn ${pulsing ? 'pulsing' : ''}`}
      onClick={handle}
      aria-label={`Play pronunciation of ${word}`}
      title={`Play “${word}”`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3 10v4a1 1 0 001 1h3l4 4a1 1 0 001.7-.7V5.7A1 1 0 0011 5L7 9H4a1 1 0 00-1 1z" />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          d="M15.5 8.5a5 5 0 010 7M18 6a8 8 0 010 12"
        />
      </svg>
    </button>
  );
}
