import { NextResponse, type NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { isAdmin } from '@/lib/isAdmin';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import type { ChapterContentOverride } from '@/lib/chapterContent';

/**
 * POST /api/admin/chapter-content
 * Body: {
 *   book_slug: string,
 *   chapter: number,
 *   content: Partial<ChapterContent>,   // any subset of fields
 * }
 *
 * Upserts the override row keyed on (book_slug, chapter). Empty `content`
 * (i.e. `{}`) deletes the row, restoring the file-based default.
 */
export async function POST(req: NextRequest) {
  if (!(await isAdmin(req))) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  let body: {
    book_slug?: string;
    chapter?: number;
    content?: ChapterContentOverride;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'bad json' }, { status: 400 });
  }

  const bookSlug = body.book_slug;
  const chapter = Number(body.chapter);
  const content = body.content ?? {};
  if (!bookSlug || !Number.isInteger(chapter) || chapter < 1) {
    return NextResponse.json({ error: 'missing/invalid book_slug or chapter' }, { status: 400 });
  }

  // Validate field shapes to keep clearly bad payloads out of the table.
  // We accept any subset of the ChapterContent shape; reject types that
  // would break the UI.
  if (
    (content.overview !== undefined && typeof content.overview !== 'string') ||
    (content.christConnection !== undefined && typeof content.christConnection !== 'string') ||
    (content.questions !== undefined &&
      (!Array.isArray(content.questions) || content.questions.some((q) => typeof q !== 'string'))) ||
    (content.themes !== undefined &&
      (!Array.isArray(content.themes) ||
        content.themes.some(
          (t) => !t || typeof t.title !== 'string' || typeof t.desc !== 'string',
        ))) ||
    (content.keyVerse !== undefined &&
      (!content.keyVerse ||
        typeof content.keyVerse.reference !== 'string' ||
        typeof content.keyVerse.text !== 'string'))
  ) {
    return NextResponse.json({ error: 'invalid content shape' }, { status: 400 });
  }

  // Empty payload → delete the override (revert to file content).
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

  const { error } = await supabaseAdmin
    .from('chapter_overrides')
    .upsert(
      {
        book_slug: bookSlug,
        chapter,
        content,
        updated_by: 'admin',
      },
      { onConflict: 'book_slug,chapter' },
    );
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Kick ISR for the page so the edit shows up immediately.
  try {
    revalidatePath(`/study/${bookSlug}/${chapter}`);
  } catch (e) {
    console.warn('[chapter-content] revalidate failed', e);
  }
  return NextResponse.json({ ok: true });
}
