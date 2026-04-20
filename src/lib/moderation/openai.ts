import type { ModerationProviderResult } from './types';

interface OpenAIModerationResponse {
  id: string;
  model: string;
  results: Array<{
    flagged: boolean;
    categories: Record<string, boolean>;
    category_scores: Record<string, number>;
  }>;
}

/**
 * OpenAI's omni-moderation-latest model accepts images by URL. Free tier.
 * Categories include sexual, sexual/minors, violence, violence/graphic,
 * hate, harassment, self-harm. We remap into our normalized label space.
 */
export async function moderateWithOpenAI(imageUrl: string): Promise<ModerationProviderResult> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return { provider: 'openai', ran: false, labels: {}, raw: null };
  }

  try {
    const res = await fetch('https://api.openai.com/v1/moderations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'omni-moderation-latest',
        input: [
          { type: 'image_url', image_url: { url: imageUrl } },
        ],
      }),
    });

    if (!res.ok) {
      return {
        provider: 'openai',
        ran: true,
        error: `openai ${res.status}: ${await res.text().catch(() => '')}`.slice(0, 300),
        labels: {},
        raw: null,
      };
    }

    const data: OpenAIModerationResponse = await res.json();
    const result = data.results?.[0];
    if (!result) {
      return { provider: 'openai', ran: true, labels: {}, raw: data };
    }

    const scores = result.category_scores || {};
    // Normalize to our canonical label set. Any category over ~0.2 is
    // notable; we pass them all through so the rules engine can decide.
    const labels: Record<string, number> = {
      'explicit-nudity': scores['sexual'] || 0,
      'sexual-minors': scores['sexual/minors'] || 0,
      'violence-graphic': scores['violence/graphic'] || 0,
      'violence': scores['violence'] || 0,
      'hate': scores['hate'] || 0,
      'self-harm': scores['self-harm'] || 0,
      'harassment': scores['harassment'] || 0,
    };

    return { provider: 'openai', ran: true, labels, raw: data };
  } catch (err) {
    return {
      provider: 'openai',
      ran: true,
      error: err instanceof Error ? err.message.slice(0, 300) : String(err),
      labels: {},
      raw: null,
    };
  }
}
