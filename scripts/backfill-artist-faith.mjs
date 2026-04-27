#!/usr/bin/env node
/**
 * Generate `faith_story` + curated `faqs` for every artist with a
 * substantive bio.
 *
 * The audience for /art/artist/[slug] is overwhelmingly Christians who
 * just saw a painting and want to know *why* the artist painted Christ.
 * Wikipedia and Britannica answer the bio question well enough; what
 * they don't lead with is the faith narrative — conversion, vocation,
 * the relationship between the artist's belief and their choice of
 * biblical subjects, faith-promoting anecdotes from the early
 * biographers (Vasari, Malvasia, etc.).
 *
 * This script feeds each artist's existing `bio_long` to gpt-4o-mini
 * with a tight prompt that produces:
 *
 *   1. A 250-400 word `faith_story` paragraph in our editorial voice.
 *      Doctrinally neutral (per docs/study-guide-authoring-rules.md).
 *      Anchored in real biographical facts only — if the bio doesn't
 *      mention the artist's faith at all, the model returns null.
 *
 *   2. 4–5 `faqs` items phrased to mirror Google "People Also Ask"
 *      patterns for searches like "{artist} religion", "{artist}
 *      faith", "{artist} Christianity", "did {artist} believe in
 *      God", "why did {artist} paint Bible scenes". Answers cite
 *      specific facts from the bio. Generic auto-FAQs are gone.
 *
 * Run order:
 *   - apply migration 054 (adds faith_story, faqs)
 *   - node --env-file=.env.local scripts/backfill-artist-faith.mjs --dry-run
 *   - node --env-file=.env.local scripts/backfill-artist-faith.mjs --slug fra-angelico
 *   - node --env-file=.env.local scripts/backfill-artist-faith.mjs --limit 5
 *   - node --env-file=.env.local scripts/backfill-artist-faith.mjs   # full
 */
import { createClient } from '@supabase/supabase-js';

if (!process.env.OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY missing in env.');
  process.exit(1);
}

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } },
);

const DRY = process.argv.includes('--dry-run');
const REFRESH = process.argv.includes('--refresh');
const slugIdx = process.argv.indexOf('--slug');
const ONLY_SLUG = slugIdx >= 0 ? process.argv[slugIdx + 1] : null;
const limitIdx = process.argv.indexOf('--limit');
const LIMIT = limitIdx >= 0 ? parseInt(process.argv[limitIdx + 1], 10) : Infinity;

const MODEL = 'gpt-4o-mini';

const SYSTEM_PROMPT = `You are an editor for Learn of Christ
(learnofchrist.com), a free Christian Bible-study site. You're
writing the "why this artist painted Christ" section of artist
hub pages — including a 250-400 word faith narrative AND a curated
FAQ block.

Audience: Christians who just saw a painting on the site and want
to know what inspired the person who painted it. They're not
scholars. They want to be inspired and edified by what they read.

VOICE — PRO-CHRISTIAN, FAITH-AFFIRMING, INSPIRING:
- Treat every artist who dedicated their life to sacred subjects as
  a believer until the bio says otherwise. A man who spent forty
  years painting the life of Christ was not a skeptic.
- Lead with what was DEVOUT, BEAUTIFUL, and INSPIRING about each
  artist's faith. Their religious order, their devotional practice,
  the reverence with which they approached scripture, the spiritual
  disciplines biographers documented, their patrons in the church.
- When an artist's life had darker chapters (Caravaggio's violence,
  Rembrandt's bankruptcy, Tissot's society career before his
  conversion), frame them as the BEFORE that makes the redemptive
  AFTER more powerful. Use the redemption arc, not the scandal arc.
- NEVER frame an artist's belief as questionable or controversial
  unless the bio explicitly says they renounced their faith. Do not
  ask "Did X believe in God?" — assume yes for sacred-art-painters.
- Do quote the artist or their early biographers when their words
  are devotional. Vasari, Malvasia, the Lives — they're full of
  faith-affirming anecdotes.

DOCTRINAL POSTURE:
- Write so an LDS theologian, a Baptist pastor, and a Catholic
  priest all find the content inspiring and agreeable.
- When traditions disagree about an artist (e.g., Bloch's place in
  LDS visual culture, Fra Angelico's Catholic veneration), state
  the historical fact warmly without endorsing one tradition.

GROUNDING:
- Anchor every claim in the source bio. Do NOT invent events.
- If a fact isn't in the bio but is reasonably well-known and
  Christian-positive (e.g., that Fra Angelico prayed before painting,
  that Bloch's Christ paintings are reproduced in LDS chapels), you
  may include it.
- NEVER reproduce more than 15 consecutive words from the source
  bio verbatim — synthesize.

Output JSON with this shape:

{
  "faith_story": "<250-400 words, two paragraphs separated by \\n\\n>",
  "faqs": [ { "question": "...", "answer": "..." }, ... ]
}

FAITH-STORY RULES:
- Two paragraphs separated by a blank line, 250-400 words total.
- Para 1: the artist's faith — denomination, religious order,
  conversion story, devotional habits, what scripture meant to them.
- Para 2: how that faith shaped specific works — name 1-2 paintings
  and explain what they reveal about the artist's spiritual vision.
- End on something inspiring or beautiful — a line about how the
  artist's devotion still reaches viewers through the work.
- For artists with thin documentation, lean on the universal truth
  that the act of returning to scripture again and again is itself
  a sustained devotion.
- If you genuinely cannot construct a faith narrative from the bio
  (e.g., anonymous workshop attribution), return null. Otherwise
  always provide one.

FAQ RULES — ALL QUESTIONS MUST BE FAITH-AFFIRMING:
- 4 FAQs minimum, 5 maximum. Phrase each as a real Google query.
- Use prompts like:
    "What was <artist>'s faith?"
    "Why did <artist> paint scenes from the Bible?"
    "Was <artist> a devout Christian?"
    "What inspired <artist>'s religious art?"
    "How did <artist>'s faith shape his/her painting?"
    "What is <artist> best known for in Christian art?"
    "Did <artist> belong to a religious order?"
    "What did <artist> believe about Christ?"
    "Who were <artist>'s most famous Christian works?"
- NEVER use "Did <artist> believe in God?" — it implies doubt.
  Replace with "What was <artist>'s faith?" or "Was <artist> a
  devout Christian?".
- Answers: 2-4 sentences, factual, edifying. Mention specific paintings
  or biographical details that prove their devotion.
- NO bullet points. NO lists. NO meta-content about our website.

Goal: a reader leaves the page MORE inspired about Christ and the
artist's love for him than when they arrived.`;

async function callOpenAI(artist, bio) {
  const userPrompt = `Artist: ${artist.name}${
    artist.birth_year || artist.death_year
      ? ` (${artist.birth_year ?? '?'}–${artist.death_year ?? '?'})`
      : ''
  }${artist.nationality ? `, ${artist.nationality}` : ''}.

Source biography:

${bio}`;

  const r = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      response_format: { type: 'json_object' },
      temperature: 0.4,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
    }),
  });

  if (!r.ok) {
    const txt = await r.text();
    throw new Error(`OpenAI ${r.status}: ${txt.slice(0, 300)}`);
  }
  const j = await r.json();
  const raw = j.choices?.[0]?.message?.content;
  if (!raw) throw new Error('OpenAI returned empty content');

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    throw new Error(`JSON parse: ${e.message}\n${raw.slice(0, 300)}`);
  }
  return parsed;
}

function isValidPayload(p) {
  if (!p || typeof p !== 'object') return false;
  // faith_story can be null or a string
  if (p.faith_story != null && typeof p.faith_story !== 'string') return false;
  // faqs must be an array of {question, answer}
  if (!Array.isArray(p.faqs)) return false;
  for (const f of p.faqs) {
    if (typeof f?.question !== 'string' || typeof f?.answer !== 'string') {
      return false;
    }
  }
  return true;
}

async function fetchAllCandidates() {
  const out = [];
  const PAGE = 1000;
  for (let from = 0; ; from += PAGE) {
    let q = sb
      .from('artists')
      .select('id, slug, name, birth_year, death_year, nationality, bio_long, faith_story, faqs')
      .order('id', { ascending: true })
      .range(from, from + PAGE - 1);
    if (ONLY_SLUG) q = q.eq('slug', ONLY_SLUG);
    const { data, error } = await q;
    if (error) throw error;
    if (!data || data.length === 0) break;
    out.push(...data);
    if (data.length < PAGE) break;
    if (ONLY_SLUG) break;
  }
  return out.filter((a) => (a.bio_long ?? '').trim().length >= 200);
}

async function processOne(a) {
  // Skip only when explicitly opting out of refresh AND we already
  // have BOTH a faith story and a curated FAQ block. The default
  // behavior reprocesses everything so prompt updates propagate.
  const hasFaqs = Array.isArray(a.faqs) && a.faqs.length >= 3;
  const hasFaith =
    typeof a.faith_story === 'string' && a.faith_story.trim().length >= 100;
  if (hasFaqs && hasFaith && !REFRESH) return { skipped: 1 };

  let payload;
  try {
    payload = await callOpenAI(a, a.bio_long);
  } catch (e) {
    console.error(`✗ ${a.slug}: ${e.message}`);
    return { failed: 1 };
  }

  if (!isValidPayload(payload)) {
    console.error(`✗ ${a.slug}: invalid payload shape`);
    return { failed: 1 };
  }

  const update = {};
  if (typeof payload.faith_story === 'string') {
    const fs = payload.faith_story.trim();
    if (fs.length >= 100) update.faith_story = fs;
  }
  if (payload.faqs.length >= 3) {
    update.faqs = payload.faqs.map((f) => ({
      question: f.question.trim(),
      answer: f.answer.trim(),
    }));
  }

  if (Object.keys(update).length === 0) {
    console.log(`- ${a.slug}: model returned nothing usable`);
    return { failed: 1 };
  }

  if (DRY) {
    console.log(`[dry] ${a.slug}: ${Object.keys(update).join(', ')}`);
    if (update.faith_story) {
      console.log(`      faith_story (${update.faith_story.length} chars): ${update.faith_story.slice(0, 120)}…`);
    }
    if (update.faqs) {
      for (const f of update.faqs) console.log(`      Q: ${f.question}`);
    }
    return { updated: 1 };
  }

  const { error } = await sb.from('artists').update(update).eq('id', a.id);
  if (error) {
    console.error(`✗ ${a.slug}: db ${error.message}`);
    return { failed: 1 };
  }
  console.log(
    `✓ ${a.slug} (${update.faith_story ? 'story+' : ''}${update.faqs?.length ?? 0} FAQs)`,
  );
  return { updated: 1 };
}

async function main() {
  const candidates = await fetchAllCandidates();
  const work = LIMIT < Infinity ? candidates.slice(0, LIMIT) : candidates;
  console.log(
    `${candidates.length} artists with bio_long >= 200 chars. Processing ${work.length}.`,
  );

  // Bounded concurrency (OpenAI rate-limits + our wallet). 8 keeps
  // gpt-4o-mini happy and gets us through 186 bio artists in ~3 mins.
  const CONCURRENCY = 8;
  let cursor = 0;
  let updated = 0;
  let skipped = 0;
  let failed = 0;

  async function worker() {
    while (true) {
      const i = cursor++;
      if (i >= work.length) return;
      const r = await processOne(work[i]);
      updated += r.updated || 0;
      skipped += r.skipped || 0;
      failed += r.failed || 0;
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  console.log(
    `\n${DRY ? '[dry-run] ' : ''}processed ${work.length}; updated ${updated}; skipped ${skipped} (already populated); failed ${failed}.`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
