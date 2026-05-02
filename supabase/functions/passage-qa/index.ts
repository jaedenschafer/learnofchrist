// passage-qa
// ────────────────────────────────────────────────────────────────────────────
// "Ask About This Passage" AI Q&A. Anthropic Messages API on the backend
// so the model key never leaves Supabase. Per-user rate limit, premium
// gating optional, prompt template built server-side so the client can't
// override the system prompt.
//
// Request:
//   POST /functions/v1/passage-qa
//   { reference: 'gen.1.1', question: 'What does ...?', lens?: 'reformed' }
//
// Response:
//   { answer: string, citations: [{ ref, text }], model: 'claude-sonnet-4-6' }

import { handleOptions, jsonResponse } from '../_shared/cors.ts';
import { requireUser, rateLimit, HttpError } from '../_shared/auth.ts';

const ANTHROPIC_KEY = Deno.env.get('ANTHROPIC_API_KEY');
const MODEL = 'claude-sonnet-4-6';

interface QARequest {
  reference: string;
  question: string;
  lens?: string;
  translation?: string;
}

const SYSTEM_PROMPT = `You are a Bible study assistant for Learn of Christ. Answer
questions about a specific passage clearly and faithfully to the requested
theological lens. Rules:

1. Stay focused on the passage. If the question wanders, gently redirect.
2. When the user picks a lens (Reformed, Catholic, LDS, Messianic Jewish,
   Orthodox, Historical-Critical), present that lens's reading. Do not
   editorialize; do not flatten distinctives across traditions.
3. Quote scripture sparingly — under 25 words per quote. Always cite the
   reference (e.g., "Romans 8:28").
4. Never refer to anything as "the Trinity" in your answer. If you must
   speak of Father, Son, and Holy Spirit, name them individually.
5. If you do not know something, say so.
6. End with one or two short reflection prompts the reader could journal.

Output as plain prose; no markdown headings; one or two short paragraphs.`;

Deno.serve(async (req) => {
  const preflight = handleOptions(req);
  if (preflight) return preflight;

  try {
    if (req.method !== 'POST') throw new HttpError(405, 'POST required');
    const { userId } = await requireUser(req);

    // Rate limit: 20 questions per minute per user. AI calls are
    // expensive; a real human can't think faster than this.
    const rl = rateLimit(`qa:${userId}`, 20);
    if (!rl.ok) {
      return jsonResponse(
        { error: 'rate_limited', retry_after: rl.retryAfterSec },
        { status: 429, req, headers: { 'Retry-After': String(rl.retryAfterSec) } }
      );
    }

    const body = (await req.json().catch(() => null)) as QARequest | null;
    if (!body?.reference || !body.question) {
      throw new HttpError(400, 'reference and question required');
    }
    if (body.question.length > 1000) {
      throw new HttpError(400, 'question too long (max 1000 chars)');
    }

    if (!ANTHROPIC_KEY) throw new HttpError(503, 'qa provider not configured');

    const userPrompt = [
      `Passage: ${body.reference}`,
      body.translation ? `Translation: ${body.translation.toUpperCase()}` : null,
      body.lens ? `Lens: ${body.lens}` : 'Lens: universal (no tradition-specific reading)',
      '',
      `Question: ${body.question}`,
    ]
      .filter(Boolean)
      .join('\n');

    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 800,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });

    if (!upstream.ok) {
      const text = await upstream.text();
      console.error('anthropic error', upstream.status, text);
      throw new HttpError(502, 'qa provider error');
    }

    const json = await upstream.json();
    const answer = (json.content ?? [])
      .filter((b: any) => b.type === 'text')
      .map((b: any) => b.text)
      .join('\n')
      .trim();

    return jsonResponse(
      {
        answer,
        model: MODEL,
        reference: body.reference,
        lens: body.lens ?? 'universal',
      },
      { req }
    );
  } catch (e) {
    if (e instanceof HttpError) {
      return jsonResponse({ error: e.message }, { status: e.status, req });
    }
    console.error(e);
    return jsonResponse({ error: 'internal_error' }, { status: 500, req });
  }
});
