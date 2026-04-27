import { NextResponse, type NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { isAdmin } from '@/lib/isAdmin';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import type {
  ChapterOverride,
  LegacyChapterContentOverride,
  SerializedRichChapterContent,
} from '@/lib/chapterContent';

/**
 * POST /api/admin/chapter-content
 *
 * Two body shapes:
 *
 *   Legacy (overview/themes/questions/christConnection/keyVerse):
 *     { book_slug, chapter, content: Partial<ChapterContent>, kind?: 'legacy' }
 *
 *   Rich (full RichChapterContent override):
 *     { book_slug, chapter, kind: 'rich', content: SerializedRichChapterContent }
 *
 * In either case `content: {}` deletes the override row, restoring the
 * file-based default.
 */
export async function POST(req: NextRequest) {
  if (!(await isAdmin(req))) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  let body: {
    book_slug?: string;
    chapter?: number;
    kind?: 'legacy' | 'rich';
    content?: LegacyChapterContentOverride | SerializedRichChapterContent | Record<string, never>;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'bad json' }, { status: 400 });
  }

  const bookSlug = body.book_slug;
  const chapter = Number(body.chapter);
  const content = body.content ?? {};
  const kind: 'legacy' | 'rich' = body.kind ?? 'legacy';

  if (!bookSlug || !Number.isInteger(chapter) || chapter < 1) {
    return NextResponse.json({ error: 'missing/invalid book_slug or chapter' }, { status: 400 });
  }

  // Empty payload → delete the row (revert to file content).
  if (Object.keys(content).length === 0) {
    const { error } = await supabaseAdmin
      .from('chapter_overrides')
      .delete()
      .eq('book_slug', bookSlug)
      .eq('chapter', chapter);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    revalidatePath(`/study/${bookSlug}/${chapter}`);
    return NextResponse.json({ ok: true, reverted: true });
  }

  // ── Validation per shape ──
  if (kind === 'legacy') {
    const c = content as LegacyChapterContentOverride;
    if (
      (c.overview !== undefined && typeof c.overview !== 'string') ||
      (c.christConnection !== undefined && typeof c.christConnection !== 'string') ||
      (c.questions !== undefined &&
        (!Array.isArray(c.questions) || c.questions.some((q) => typeof q !== 'string'))) ||
      (c.themes !== undefined &&
        (!Array.isArray(c.themes) ||
          c.themes.some(
            (t) => !t || typeof t.title !== 'string' || typeof t.desc !== 'string',
          ))) ||
      (c.keyVerse !== undefined &&
        (!c.keyVerse ||
          typeof c.keyVerse.reference !== 'string' ||
          typeof c.keyVerse.text !== 'string'))
    ) {
      return NextResponse.json({ error: 'invalid legacy content shape' }, { status: 400 });
    }
  } else if (kind === 'rich') {
    const c = content as SerializedRichChapterContent;
    if (
      typeof c.bookSlug !== 'string' ||
      typeof c.bookName !== 'string' ||
      !Number.isInteger(c.chapter) ||
      !Array.isArray(c.intros) ||
      c.intros.some((i) => typeof i !== 'string') ||
      !Array.isArray(c.sections)
    ) {
      return NextResponse.json({ error: 'invalid rich content shape' }, { status: 400 });
    }
  } else {
    return NextResponse.json({ error: 'invalid kind' }, { status: 400 });
  }

  // Tagged storage: every new write carries a kind discriminator. Older
  // rows pre-tagging continue to work via parseOverrideRow's untagged
  // legacy fallback in src/lib/chapterContent.ts.
  const row: ChapterOverride =
    kind === 'rich'
      ? { kind: 'rich', data: content as SerializedRichChapterContent }
      : { kind: 'legacy', data: content as LegacyChapterContentOverride };

  const { error } = await supabaseAdmin
    .from('chapter_overrides')
    .upsert(
      {
        book_slug: bookSlug,
        chapter,
        content: row,
        updated_by: 'admin',
      },
      { onConflict: 'book_slug,chapter' },
    );
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  try {
    revalidatePath(`/study/${bookSlug}/${chapter}`);
  } catch (e) {
    console.warn('[chapter-content] revalidate failed', e);
  }
  return NextResponse.json({ ok: true });
}
