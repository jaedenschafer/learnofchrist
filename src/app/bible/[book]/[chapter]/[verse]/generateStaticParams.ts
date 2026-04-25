import { verseExplanations } from '@/data/verse-explanations';

export function generateStaticParams() {
  return Object.keys(verseExplanations).map((key) => {
    const [book, chapter, verse] = key.split('/');
    return { book, chapter, verse };
  });
}
