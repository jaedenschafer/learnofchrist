#!/usr/bin/env node
/**
 * Bulk moderation runner.
 *
 * Usage:
 *   node scripts/moderate-all-artworks.mjs            # scan every pending/unscanned
 *   node scripts/moderate-all-artworks.mjs --all      # rescan everything
 *   node scripts/moderate-all-artworks.mjs --limit 50 # cap batch size
 *
 * Reads env from .env.local automatically. Requires:
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 *   AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION (optional)
 *   OPENAI_API_KEY (optional)
 *
 * If neither OpenAI nor AWS keys are set, every image will be marked
 * 'flagged' (no-provider-ran) so a human still has to approve before
 * anything reaches readers. That's the safe default.
 */

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import {
  RekognitionClient,
  DetectModerationLabelsCommand,
} from '@aws-sdk/client-rekognition';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false },
});

const args = process.argv.slice(2);
const rescanAll = args.includes('--all');
const limitIdx = args.indexOf('--limit');
const limit = limitIdx >= 0 ? parseInt(args[limitIdx + 1], 10) : null;

const HIGH_RISK_CHAPTERS = new Set([
  'genesis/2','genesis/3','genesis/6','genesis/9','genesis/19','genesis/38','genesis/39',
  'judges/14','judges/16','judges/19','2-samuel/11','2-samuel/13','1-kings/1',
  'proverbs/5','proverbs/7',
  'song-of-solomon/1','song-of-solomon/2','song-of-solomon/3','song-of-solomon/4',
  'song-of-solomon/5','song-of-solomon/6','song-of-solomon/7','song-of-solomon/8',
  'hosea/1','hosea/2','hosea/3',
  'matthew/27','mark/15','luke/23','john/19',
  'revelation/17','revelation/18',
]);

const REJECT_THRESHOLDS = {
  'explicit-nudity': 0.55,
  'sexual-minors': 0.2,
  'violence-graphic': 0.75,
  'hate': 0.7,
};
const FLAG_THRESHOLDS = {
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

async function moderateOpenAI(url) {
  if (!OPENAI_API_KEY) return { provider: 'openai', ran: false, labels: {} };
  try {
    const r = await fetch('https://api.openai.com/v1/moderations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'omni-moderation-latest',
        input: [{ type: 'image_url', image_url: { url } }],
      }),
    });
    if (!r.ok) return { provider: 'openai', ran: true, error: `${r.status}`, labels: {} };
    const j = await r.json();
    const s = j.results?.[0]?.category_scores || {};
    return {
      provider: 'openai',
      ran: true,
      labels: {
        'explicit-nudity': s['sexual'] || 0,
        'sexual-minors': s['sexual/minors'] || 0,
        'violence-graphic': s['violence/graphic'] || 0,
        'violence': s['violence'] || 0,
        'hate': s['hate'] || 0,
        'self-harm': s['self-harm'] || 0,
      },
    };
  } catch (e) {
    return { provider: 'openai', ran: true, error: e.message, labels: {} };
  }
}

let rekClient = null;
function getRekognitionClient() {
  if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY) return null;
  if (!rekClient) {
    rekClient = new RekognitionClient({
      region: AWS_REGION,
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      },
    });
  }
  return rekClient;
}

function awsLabelToCanonical(name) {
  const l = name.toLowerCase();
  if (l === 'explicit nudity' || l === 'nudity' || l.startsWith('graphic ')) return 'explicit-nudity';
  if (l.includes('non-explicit nudity') || l === 'partial nudity') return 'partial-nudity';
  if (l.includes('swimwear') || l.includes('underwear')) return 'underwear-or-swimwear';
  if (l.includes('revealing clothes')) return 'revealing-clothes';
  if (l === 'suggestive' || l.includes('sexual situations')) return 'suggestive';
  if (l.includes('visually disturbing') || l.includes('corpses')) return 'disturbing';
  if (l.includes('graphic violence') || l === 'violence') return 'violence-graphic';
  if (l.includes('weapons')) return 'weapons';
  if (l.includes('hate symbols')) return 'hate';
  return null;
}

async function moderateAws(url) {
  const client = getRekognitionClient();
  if (!client) return { provider: 'aws', ran: false, labels: {} };
  try {
    const imgRes = await fetch(url);
    if (!imgRes.ok) return { provider: 'aws', ran: true, error: `fetch ${imgRes.status}`, labels: {} };
    const buf = Buffer.from(await imgRes.arrayBuffer());
    const out = await client.send(
      new DetectModerationLabelsCommand({
        Image: { Bytes: buf },
        MinConfidence: 30,
      }),
    );
    const labels = {};
    for (const l of out.ModerationLabels || []) {
      const k = awsLabelToCanonical(l.Name || '');
      if (!k) continue;
      const c = (l.Confidence || 0) / 100;
      labels[k] = Math.max(labels[k] || 0, c);
    }
    return { provider: 'aws', ran: true, labels };
  } catch (e) {
    return { provider: 'aws', ran: true, error: e.message, labels: {} };
  }
}

function decide(providers, refs) {
  const maxByLabel = {};
  for (const p of providers) {
    if (!p.ran) continue;
    for (const [k, v] of Object.entries(p.labels)) {
      maxByLabel[k] = Math.max(maxByLabel[k] || 0, v);
    }
  }
  const reasons = [];
  const contextFlags = [];
  let worstScore = 0, worstLabel = null, rejected = false, flagged = false;
  for (const [k, v] of Object.entries(maxByLabel)) {
    if (v > worstScore) { worstScore = v; worstLabel = k; }
    if (REJECT_THRESHOLDS[k] !== undefined && v >= REJECT_THRESHOLDS[k]) {
      rejected = true;
      reasons.push(`${k} ${Math.round(v*100)}% (auto-reject)`);
      continue;
    }
    if (FLAG_THRESHOLDS[k] !== undefined && v >= FLAG_THRESHOLDS[k]) {
      flagged = true;
      reasons.push(`${k} ${Math.round(v*100)}% (flag)`);
    }
  }
  for (const r of refs) {
    if (HIGH_RISK_CHAPTERS.has(r)) {
      contextFlags.push(`high-risk-chapter:${r}`);
      if (!rejected) flagged = true;
    }
  }
  for (const p of providers) {
    if (p.ran && p.error) {
      contextFlags.push(`provider-error:${p.provider}`);
      if (!rejected) flagged = true;
    }
  }
  if (!providers.some((p) => p.ran)) {
    contextFlags.push('no-provider-ran');
    flagged = true;
  }
  return {
    status: rejected ? 'rejected' : flagged ? 'flagged' : 'pending',
    reasons, worstScore, worstLabel, contextFlags,
    providers,
  };
}

async function getRefsForArtwork(artworkId) {
  const { data } = await supabase
    .from('artwork_scripture_refs')
    .select('chapter, books(slug)')
    .eq('artwork_id', artworkId);
  return (data || [])
    .map((r) => {
      const b = Array.isArray(r.books) ? r.books[0] : r.books;
      return b ? `${b.slug}/${r.chapter}` : null;
    })
    .filter(Boolean);
}

async function main() {
  let q = supabase
    .from('artworks')
    .select('id, image_url, title, moderation_status')
    .order('created_at', { ascending: true });

  if (!rescanAll) {
    q = q.or('moderation_status.eq.pending,moderation_status.is.null');
  }
  if (limit) q = q.limit(limit);

  const { data: artworks, error } = await q;
  if (error) {
    console.error('query failed', error);
    process.exit(1);
  }

  console.log(`Scanning ${artworks?.length ?? 0} artwork(s)…`);
  if (!OPENAI_API_KEY && !AWS_ACCESS_KEY_ID) {
    console.warn('⚠  No moderation providers configured — every image will be flagged for manual review.');
  }

  let ok = 0, rejected = 0, flagged = 0, pending = 0;
  for (const art of artworks || []) {
    process.stdout.write(`  ${art.title.slice(0, 50)}…  `);
    const refs = await getRefsForArtwork(art.id);
    const [openai, aws] = await Promise.all([
      moderateOpenAI(art.image_url),
      moderateAws(art.image_url),
    ]);
    const d = decide([openai, aws], refs);
    await supabase
      .from('artworks')
      .update({
        moderation_status: d.status,
        moderation_scores: {
          worstScore: d.worstScore,
          worstLabel: d.worstLabel,
          reasons: d.reasons,
          contextFlags: d.contextFlags,
          providers: d.providers.map((p) => ({
            provider: p.provider,
            ran: p.ran,
            error: p.error,
            labels: p.labels,
          })),
          scannedAt: new Date().toISOString(),
        },
      })
      .eq('id', art.id);
    console.log(d.status, d.worstLabel || '', d.worstScore ? `(${Math.round(d.worstScore*100)}%)` : '');
    if (d.status === 'rejected') rejected++;
    else if (d.status === 'flagged') flagged++;
    else if (d.status === 'pending') pending++;
    else ok++;
    await new Promise((r) => setTimeout(r, 200));
  }
  console.log(`\nDone. ${ok} ok · ${flagged} flagged · ${rejected} rejected · ${pending} pending.`);
  console.log(`Review at http://localhost:3000/admin/artwork-moderation`);
}

main().catch((e) => { console.error(e); process.exit(1); });
