'use client';

import {
  STUDY_LEVELS,
  useStudyLevel,
  type StudyLevel,
} from '@/lib/StudyLevelContext';
import type { EstimatedMinutes } from '@/data/study-chapters/types';
import './StudyLevelControl.css';

/**
 * Three-pill segmented control for the chapter's study depth.
 *
 * Beginner (1) · Intermediate (2) · Deep Dive (3)
 *
 * Tap → StudyLevelContext.setLevel → context updates → RichStudyGuide
 * re-renders with filterContentByLevel applied. No fetch, no navigation; the
 * page swaps depth in well under 100ms.
 *
 * Pass `estimatedMinutes` to surface the *actual* per-chapter minutes inside
 * each pill. Long chapters that can't honestly fit Beginner show their real
 * number — the control never lies.
 */

interface Props {
  /** Per-level minutes for the chapter currently on screen. Optional — when
   *  the chapter hasn't been re-audited yet, the pills render label-only. */
  estimatedMinutes?: EstimatedMinutes;
}

export default function StudyLevelControl({ estimatedMinutes }: Props) {
  const { level, setLevel } = useStudyLevel();

  return (
    <div
      className="study-level-control"
      role="radiogroup"
      aria-label="Study depth"
    >
      {STUDY_LEVELS.map((opt) => {
        const active = opt.id === level;
        const minutes = estimatedMinutes?.[opt.id as StudyLevel];
        return (
          <button
            key={opt.id}
            type="button"
            role="radio"
            aria-checked={active}
            title={opt.description}
            className={active ? 'level-pill active' : 'level-pill'}
            onClick={() => setLevel(opt.id)}
          >
            <span className="level-pill-icon" aria-hidden="true">{opt.icon}</span>
            <span className="level-pill-body">
              <span className="level-pill-label">{opt.label}</span>
              {minutes !== undefined && (
                <span className="level-pill-time">{minutes}m</span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
