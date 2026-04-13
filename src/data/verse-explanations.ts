// Placeholder - will be populated with 25 verse explanations
export interface VerseExplanation {
  bookSlug: string;
  chapter: number;
  verse: number;
  reference: string;
  kjvText: string;
  explanation: string[];
  context: string;
  originalLanguage: string;
  application: string;
  crossReferences: { reference: string; text: string; link: string }[];
  relatedVerses: string[];
}

export const verseExplanations: Record<string, VerseExplanation> = {};

export function getVerseExplanation(bookSlug: string, chapter: number, verse: number): VerseExplanation | null {
  return verseExplanations[`${bookSlug}/${chapter}/${verse}`] || null;
}
