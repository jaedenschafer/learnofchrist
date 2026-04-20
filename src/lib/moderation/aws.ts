import {
  RekognitionClient,
  DetectModerationLabelsCommand,
  type ModerationLabel,
} from '@aws-sdk/client-rekognition';
import type { ModerationProviderResult } from './types';

/**
 * AWS Rekognition DetectModerationLabels has the richest label taxonomy for
 * this use case. Top-level categories we care about for a kids-friendly
 * religious site:
 *
 *   Explicit Nudity          (hard block — rejects)
 *   Non-Explicit Nudity of Intimate parts and Kissing
 *   Swimwear or Underwear
 *   Revealing Clothes
 *   Suggestive
 *   Violence / Visually Disturbing
 *
 * AWS returns Confidence on a 0-100 scale; we normalize to 0-1.
 */
export async function moderateWithAws(imageUrl: string): Promise<ModerationProviderResult> {
  const region = process.env.AWS_REGION || 'us-east-1';
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  if (!accessKeyId || !secretAccessKey) {
    return { provider: 'aws', ran: false, labels: {}, raw: null };
  }

  try {
    const imgRes = await fetch(imageUrl);
    if (!imgRes.ok) {
      return {
        provider: 'aws',
        ran: true,
        error: `fetch ${imgRes.status} for ${imageUrl}`,
        labels: {},
        raw: null,
      };
    }
    const buf = Buffer.from(await imgRes.arrayBuffer());

    const client = new RekognitionClient({
      region,
      credentials: { accessKeyId, secretAccessKey },
    });
    const out = await client.send(
      new DetectModerationLabelsCommand({
        Image: { Bytes: buf },
        MinConfidence: 30, // catch soft signals; rules engine filters from here
      }),
    );

    const labels = normalizeAwsLabels(out.ModerationLabels || []);
    return { provider: 'aws', ran: true, labels, raw: out };
  } catch (err) {
    return {
      provider: 'aws',
      ran: true,
      error: err instanceof Error ? err.message.slice(0, 300) : String(err),
      labels: {},
      raw: null,
    };
  }
}

function normalizeAwsLabels(labels: ModerationLabel[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const l of labels) {
    const name = l.Name || '';
    const conf = (l.Confidence || 0) / 100;
    const canonical = toCanonical(name);
    if (!canonical) continue;
    out[canonical] = Math.max(out[canonical] || 0, conf);
  }
  return out;
}

// AWS taxonomy → our normalized labels. A single label may map to multiple
// canonical labels so the rules engine can treat e.g. "Female Swimwear or
// Underwear" as BOTH `revealing-clothes` AND `underwear-or-swimwear`.
function toCanonical(awsLabel: string): string | null {
  const l = awsLabel.toLowerCase();
  if (l === 'explicit nudity' || l === 'nudity' || l === 'graphic male nudity' || l === 'graphic female nudity') {
    return 'explicit-nudity';
  }
  if (l.includes('non-explicit nudity') || l === 'partial nudity') {
    return 'partial-nudity';
  }
  if (l.includes('swimwear') || l.includes('underwear')) {
    return 'underwear-or-swimwear';
  }
  if (l.includes('revealing clothes')) {
    return 'revealing-clothes';
  }
  if (l === 'suggestive' || l.includes('sexual situations')) {
    return 'suggestive';
  }
  if (l.includes('visually disturbing') || l.includes('emaciated') || l.includes('corpses') || l.includes('self-injury')) {
    return 'disturbing';
  }
  if (l.includes('graphic violence') || l === 'violence') {
    return 'violence-graphic';
  }
  if (l.includes('weapons')) {
    return 'weapons';
  }
  if (l.includes('hate symbols')) {
    return 'hate';
  }
  return null;
}
