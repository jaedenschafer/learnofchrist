export interface ChapterContent {
  overview: string;
  themes: { title: string; desc: string }[];
  questions: string[];
  christConnection: string;
  keyVerse: { reference: string; text: string };
}

// Per-book chapter data — split into separate files for maintainability
import { johnChapters } from './chapters/john';
import { genesisChapters } from './chapters/genesis';
import { psalmsChapters } from './chapters/psalms';
import { romansChapters } from './chapters/romans';
import { markChapters } from './chapters/mark';
import { matthewChapters } from './chapters/matthew';
import { lukeChapters } from './chapters/luke';
import { revelationChapters } from './chapters/revelation';
import { actsChapters } from './chapters/acts';
import { proverbsChapters } from './chapters/proverbs';

export const chapterContent: Record<string, ChapterContent> = {
  ...johnChapters,
  ...genesisChapters,
  ...psalmsChapters,
  ...romansChapters,
  ...markChapters,
  ...matthewChapters,
  ...lukeChapters,
  ...revelationChapters,
  ...actsChapters,
  ...proverbsChapters,
};

export function getChapterContent(
  bookSlug: string,
  chapter: number,
): ChapterContent | null {
  return chapterContent[`${bookSlug}/${chapter}`] || null;
}
