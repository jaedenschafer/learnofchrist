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
import { firstCorinthiansChapters } from './chapters/1-corinthians';
import { ephesiansChapters } from './chapters/ephesians';
import { philippiansChapters } from './chapters/philippians';
import { exodusChapters } from './chapters/exodus';
import { isaiahChapters } from './chapters/isaiah';
import { hebrewsChapters } from './chapters/hebrews';
import { jamesChapters } from './chapters/james';
import { firstPeterChapters } from './chapters/1-peter';
import { secondPeterChapters } from './chapters/2-peter';
import { firstJohnChapters } from './chapters/1-john';
import { secondJohnChapters } from './chapters/2-john';
import { thirdJohnChapters } from './chapters/3-john';
import { judeChapters } from './chapters/jude';
import { leviticusChapters } from './chapters/leviticus';
import { joshuaChapters } from './chapters/joshua';
import { firstKingsChapters } from './chapters/1-kings';
import { numbersChapters } from './chapters/numbers';
import { judgesChapters } from './chapters/judges';
import { ruthChapters } from './chapters/ruth';
import { secondKingsChapters } from './chapters/2-kings';
import { ezraChapters } from './chapters/ezra';
import { nehemiahChapters } from './chapters/nehemiah';
import { firstSamuelChapters } from './chapters/1-samuel';
import { estherChapters } from './chapters/esther';

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
  ...firstCorinthiansChapters,
  ...ephesiansChapters,
  ...philippiansChapters,
  ...exodusChapters,
  ...isaiahChapters,
  ...hebrewsChapters,
  ...jamesChapters,
  ...firstPeterChapters,
  ...secondPeterChapters,
  ...firstJohnChapters,
  ...secondJohnChapters,
  ...thirdJohnChapters,
  ...judeChapters,
  ...leviticusChapters,
  ...joshuaChapters,
  ...firstKingsChapters,
  ...numbersChapters,
  ...judgesChapters,
  ...ruthChapters,
  ...secondKingsChapters,
  ...ezraChapters,
  ...nehemiahChapters,
  ...firstSamuelChapters,
  ...estherChapters,
};

export function getChapterContent(
  bookSlug: string,
  chapter: number,
): ChapterContent | null {
  return chapterContent[`${bookSlug}/${chapter}`] || null;
}
