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
(learnofchrist.com), a free Bible-study site. You're rewriting the
"why this artist painted Christ" section of artist hub pages.

Audience: Christians who just saw a painting on the site and clicked
through. They are NOT scholars. They want to know what the artist
actually believed and why they kept returning to biblical subjects.

Voice: clear, warm, factual, third-person. Editorial, not sermonic.
NEVER preachy. Anchor every claim in the source bio — do not invent
events. If the bio doesn't include faith details, return faith_story
null and only add factual FAQs.

Doctrinal posture: write so that both an LDS theologian and a Baptist
pastor would find nothing to disagree with. When traditions disagree
about an artist (e.g., Bloch's reception in LDS visual culture), state
the historical fact without endorsing one tradition's theology.

NEVER reproduce more than 15 consecutive words from the source bio
verbatim. Synthesize, don't copy.

Output JSON with exactly this shape:

{
  "faith_story": "<250-400 words, plain text, two paragraphs separated by \\n\\n, OR null if the bio has no faith content>",
  "faqs": [
    { "question": "Did <artist> believe in God?", "answer": "<2-4 sentences, anchored in specific bio facts>" },
    { "question": "Why did <artist> paint Bible scenes?", "answer": "..." },
    { "question": "<question phrased like a Google People Also Ask result>", "answer": "..." },
    { "question": "<question>", "answer": "..." }
  ]
}

FAQ rules:
- Phrase questions exactly as a real person would type into Google.
  Use "Did", "Was", "Why", "What", "How", never "Who was" alone.
- 4 FAQs minimum, 5 maximum.
- NEVER ask "How many works by X are at Learn of Christ?" — that's
  meta-content nobody searches for.
- Cover the full breadth of common faith-related searches: belief,
  vocation, religious order or denomination, controversies if any,
  notable acts of devotion, the relationship between life events and
  biblical subjects.
- Each answer is 2-4 sentences. NO bullet points. NO lists.
- If a question would require speculation (e.g., faith of an
  anonymous workshop attribution), drop the FAQ and submit fewer.

Faith story rules:
- Two paragraphs, separated by a blank line.
- Open with the artist's relationship to Christianity (denomination,
  order, conversion, devotional practice).
- Connect that to ONE or TWO specific paintings from the bio that
  illustrate the faith → art link.
- Close with the broader cultural-religious context of their work.
- 250-400 words total. NO subheadings.`;

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
  const hasFaith =
    typeof a.faith_story === 'string' && a.faith_story.trim().length > 60;
  const hasFaqs = Array.isArray(a.faqs) && a.faqs.length >= 3;
  if (hasFaith && hasFaqs && !REFRESH) return { skipped: 1 };

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

  // Bounded concurrency (OpenAI rate-limits + our wallet).
  const CONCURRENCY = 4;
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
