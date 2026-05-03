'use client';

import { useReadingPrefs, type DepthTier } from '@/lib/ReadingPrefsContext';
import type { EstimatedMinutes } from '@/data/study-chapters/types';
import './DepthTierControl.css';

/**
 * Three-pill segmented control for the chapter's study depth.
 *
 * Quick (≈5m) · Standard (≈10m) · Deep (full)
 *
 * Tap → ReadingPrefsContext.setDepthTier → context updates → RichStudyGuide
 * re-renders with filterContentByTier applied. No fetch, no navigation; the
 * page swaps depth in well under 100ms.
 *
 * Pass `estimatedMinutes` to surface the *actual* per-chapter minutes inside
 * each pill ("Quick · 4m"). Long chapters that can't honestly fit 5m show
 * their real number — the control never lies.
 */

const LABELS: Record<DepthTier, string> = {
  5: 'Quick',
  10: 'Standard',
  15: 'Deep',
};

interface Props {
  /** Per-tier minutes for the chapter currently on screen. Optional — when
   *  the chapter hasn't been re-audited yet, the pills render label-only. */
  estimatedMinutes?: EstimatedMinutes;
}

export default function DepthTierControl({ estimatedMinutes }: Props) {
  const { depthTier, setDepthTier } = useReadingPrefs();

  const tiers: DepthTier[] = [5, 10, 15];

  return (
    <div
      className="depth-tier-control"
      role="radiogroup"
      aria-label="Study depth"
    >
      {tiers.map((tier) => {
        const active = tier === depthTier;
        const minutes = estimatedMinutes?.[tier];
        return (
          <button
            key={tier}
            type="button"
            role="radio"
            aria-checked={active}
            className={active ? 'depth-pill active' : 'depth-pill'}
            onClick={() => setDepthTier(tier)}
          >
            <span className="depth-pill-label">{LABELS[tier]}</span>
            {minutes !== undefined && (
              <span className="depth-pill-time">{minutes}m</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
