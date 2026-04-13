// This file is imported by the verse page to generate static params
// It will be populated once verse-explanations.ts is created

export async function generateStaticParams() {
  try {
    // Dynamically import to avoid build errors if file doesn't exist yet
    const { verseExplanations } = await import('@/data/verse-explanations');
    return Object.keys(verseExplanations).map((key) => {
      const [book, chapter, verse] = key.split('/');
      return { book, chapter, verse };
    });
  } catch {
    return [];
  }
}
