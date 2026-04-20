import type {
  ModerationDecision,
  ModerationProviderResult,
} from './types';
import { moderateWithOpenAI } from './openai';
import { moderateWithAws } from './aws';

export type { ModerationDecision, ModerationProviderResult, ModerationStatus } from './types';

/**
 * High-risk (book_slug, chapter) combinations where biblical subject matter
 * very often involves nudity / adultery / violence in the historical art
 * record. Any artwork attached to one of these is forced through manual
 * review regardless of automated scores.
 */
const HIGH_RISK_CHAPTERS = new Set([
  'genesis/2',   // Eden, pre-fall
  'genesis/3',   // Fall, nakedness named
  'genesis/6',   // "sons of God" and the daughters
  'genesis/9',   // Noah's nakedness
  'genesis/19',  // Lot and his daughters
  'genesis/38',  // Tamar
  'genesis/39',  // Joseph and Potiphar's wife
  'judges/14',   // Samson
  'judges/16',   // Samson and Delilah
  'judges/19',   // Levite's concubine
  '2-samuel/11', // David and Bathsheba
  '2-samuel/13', // Amnon and Tamar
  '1-kings/1',   // David and Abishag
  'proverbs/5',
  'proverbs/7',
  'song-of-solomon/1',
  'song-of-solomon/2',
  'song-of-solomon/3',
  'song-of-solomon/4',
  'song-of-solomon/5',
  'song-of-solomon/6',
  'song-of-solomon/7',
  'song-of-solomon/8',
  'hosea/1',
  'hosea/2',
  'hosea/3',
  'matthew/27', // crucifixion — often depicted with loincloth only
  'mark/15',
  'luke/23',
  'john/19',
  'revelation/17', // Whore of Babylon
  'revelation/18',
]);

/** A score at or above this threshold on a banned label → auto-reject. */
const REJECT_THRESHOLDS: Record<string, number> = {
  'explicit-nudity': 0.55,
  'sexual-minors': 0.2,      // very low — never OK
  'violence-graphic': 0.75,
  'hate': 0.7,
};

/** At or above this → flag for manual review. */
const FLAG_THRESHOLDS: Record<string, number> = {
  'explicit-nudity': 0.2,
  'partial-nudity': 0.35,
  'underwear-or-swimwear': 0.45,
  'revealing-clothes': 0.5,
  'suggestive': 0.4,
  'disturbing': 0.55,
  'violence-graphic': 0.5,
  'violence': 0.55,
  'weapons': 0.7,
};

export async function moderateArtwork({
  imageUrl,
  scriptureRefs = [],
}: {
  imageUrl: string;
  /** List of "book/chapter" strings this artwork is attached to. */
  scriptureRefs?: string[];
}): Promise<ModerationDecision> {
  const [openai, aws] = await Promise.all([
    moderateWithOpenAI(imageUrl),
    moderateWithAws(imageUrl),
  ]);
  const providers: ModerationProviderResult[] = [openai, aws];
  return decideFromProviders(providers, scriptureRefs);
}

export function decideFromProviders(
  providers: ModerationProviderResult[],
  scriptureRefs: string[] = [],
): ModerationDecision {
  // Aggregate max score per label across providers.
  const maxByLabel: Record<string, number> = {};
  for (const p of providers) {
    if (!p.ran) continue;
    for (const [label, score] of Object.entries(p.labels)) {
      maxByLabel[label] = Math.max(maxByLabel[label] || 0, score);
    }
  }

  const reasons: string[] = [];
  const contextFlags: string[] = [];
  let worstScore = 0;
  let worstLabel: string | null = null;
  let rejected = false;
  let flagged = false;

  for (const [label, score] of Object.entries(maxByLabel)) {
    if (score > worstScore) {
      worstScore = score;
      worstLabel = label;
    }
    const rj = REJECT_THRESHOLDS[label];
    if (rj !== undefined && score >= rj) {
      rejected = true;
      reasons.push(`${label} ${pct(score)}≥${pct(rj)} (auto-reject)`);
      continue;
    }
    const fl = FLAG_THRESHOLDS[label];
    if (fl !== undefined && score >= fl) {
      flagged = true;
      reasons.push(`${label} ${pct(score)}≥${pct(fl)} (flag)`);
    }
  }

  // High-risk chapter override: always at least flag.
  for (const ref of scriptureRefs) {
    if (HIGH_RISK_CHAPTERS.has(ref)) {
      contextFlags.push(`high-risk-chapter:${ref}`);
      if (!rejected) flagged = true;
    }
  }

  // If a provider explicitly failed, hold for review.
  for (const p of providers) {
    if (p.ran && p.error) {
      contextFlags.push(`provider-error:${p.provider}`);
      if (!rejected) flagged = true;
    }
  }

  // If NO provider ran (no API keys configured) → flag, never auto-approve.
  const anyRan = providers.some((p) => p.ran);
  if (!anyRan) {
    contextFlags.push('no-provider-ran');
    flagged = true;
  }

  const status: ModerationDecision['status'] = rejected
    ? 'rejected'
    : flagged
      ? 'flagged'
      : 'pending';
  // `pending` with no flags means "nothing triggered" → still not auto-approved.
  // An admin must move it to 'approved' explicitly. (This is the invariant the
  // whole pipeline protects: automation never ships a new image without a
  // human looking at it.)

  return {
    status,
    reasons,
    worstScore,
    worstLabel,
    providers,
    contextFlags,
  };
}

function pct(n: number): string {
  return `${Math.round(n * 100)}%`;
}
