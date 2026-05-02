// bible-translation-proxy
// ────────────────────────────────────────────────────────────────────────────
// Future infra — NOT shipping in v1.
//
// Server-side proxy to API.Bible for copyrighted translations (NIV, ESV,
// CSB, etc.). Public-domain translations (KJV, ASV, WEB, JST) are NOT
// served here — they ship in the mobile content packs and are the only
// translations available in v1.
//
// When paid translations come back into scope, this file is the
// starting point: API.Bible key stays server-side; premium gating via
// is_premium() (table already exists from migration 057).
//
// Request shape:
//   GET /functions/v1/bible-translation-proxy
//     ?translation=niv
//     &book=john
//     &chapter=3
//     &verse=16        (optional; verse-only fetch)
//
// Response: { reference, verses: [{ number, text }], translation, license }

import { handleOptions, jsonResponse } from '../_shared/cors.ts';
import { requireUser, HttpError } from '../_shared/auth.ts';

const API_BIBLE_KEY = Deno.env.get('API_BIBLE_KEY');
const API_BIBLE_BASE = 'https://api.scripture.api.bible/v1';

// Map of translation slug → API.Bible bibleId. Filled in by ops.
// Each entry should be { bibleId, premium } where premium gates to subs.
const TRANSLATION_REGISTRY: Record<string, { bibleId: string; premium: boolean }> = {
  // examples — replace with real bibleIds from API.Bible portal
  // 'niv': { bibleId: '...', premium: true },
  // 'esv': { bibleId: '...', premium: true },
};

Deno.serve(async (req) => {
  const preflight = handleOptions(req);
  if (preflight) return preflight;

  try {
    const { userId, serviceClient } = await requireUser(req);

    const url = new URL(req.url);
    const translation = (url.searchParams.get('translation') ?? '').toLowerCase();
    const book = (url.searchParams.get('book') ?? '').toLowerCase();
    const chapter = parseInt(url.searchParams.get('chapter') ?? '', 10);
    const verseParam = url.searchParams.get('verse');
    const verse = verseParam ? parseInt(verseParam, 10) : null;

    if (!translation || !book || !chapter) {
      throw new HttpError(400, 'translation, book, chapter required');
    }

    const entry = TRANSLATION_REGISTRY[translation];
    if (!entry) throw new HttpError(404, `unknown translation: ${translation}`);

    // Premium gate (post-v1; harmless while is_premium returns false for everyone).
    if (entry.premium) {
      const { data, error } = await serviceClient.rpc('is_premium', {
        p_user_id: userId,
      });
      if (error) throw new HttpError(500, 'premium check failed');
      if (!data) throw new HttpError(402, 'premium subscription required');
    }

    if (!API_BIBLE_KEY) throw new HttpError(503, 'translation provider not configured');

    // API.Bible expects passage refs like "JHN.3.16" — book mapping
    // table lives in DB seed (`books.abbreviation`). For v1 we accept
    // a USFM-style book code from the client to keep this function dumb.
    const ref = verse
      ? `${book.toUpperCase()}.${chapter}.${verse}`
      : `${book.toUpperCase()}.${chapter}`;

    const upstream = await fetch(
      `${API_BIBLE_BASE}/bibles/${entry.bibleId}/passages/${ref}` +
        '?content-type=text&include-notes=false&include-verse-numbers=true',
      { headers: { 'api-key': API_BIBLE_KEY } }
    );

    if (!upstream.ok) {
      const body = await upstream.text();
      console.error('api.bible error', upstream.status, body);
      throw new HttpError(502, 'translation provider error');
    }

    const upstreamJson = await upstream.json();

    return jsonResponse(
      {
        translation,
        reference: ref,
        verses: extractVerses(upstreamJson),
        license: upstreamJson?.data?.copyright ?? null,
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

function extractVerses(payload: any): { number: number; text: string }[] {
  // API.Bible returns content as a single string blob. We parse out
  // verse markers; in practice the mobile client only needs the rendered
  // text per verse so this stays minimal.
  const content = payload?.data?.content ?? '';
  const matches = [...String(content).matchAll(/\[(\d+)\]\s*([^[]+)/g)];
  if (matches.length === 0) {
    return [{ number: 0, text: String(content).trim() }];
  }
  return matches.map((m) => ({
    number: parseInt(m[1], 10),
    text: m[2].trim(),
  }));
}
