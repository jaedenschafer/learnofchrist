'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/TranslationContext';
import { fetchVersesClient, Verse } from '@/lib/supabase';

interface VerseDisplayProps {
  bookSlug: string;
  chapter: number;
  initialVerses: Verse[];
  explainedVerses?: number[];  // verse numbers that have explanation pages
}

/** Strip formatting tags like <FI>…<Fi> from source text and trim extra spaces */
function cleanVerseText(text: string): string {
  return text
    .replace(/<\/?FI>/gi, '')   // remove <FI> and <Fi> (and </FI> just in case)
    .replace(/\s{2,}/g, ' ')    // collapse double-spaces left behind
    .trim();
}

export default function VerseDisplay({ bookSlug, chapter, initialVerses, explainedVerses = [] }: VerseDisplayProps) {
  const { currentTranslation } = useTranslation();
  const [verses, setVerses] = useState<Verse[]>(initialVerses);
  const [loading, setLoading] = useState(false);
  const [loadedTranslation, setLoadedTranslation] = useState('kjv');

  useEffect(() => {
    // Skip if already on the correct translation
    if (currentTranslation === loadedTranslation) return;

    // If switching back to KJV, use initial verses
    if (currentTranslation === 'kjv' && initialVerses.length > 0) {
      setVerses(initialVerses);
      setLoadedTranslation('kjv');
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetchVersesClient(bookSlug, chapter, currentTranslation).then((newVerses) => {
      if (!cancelled) {
        if (newVerses.length > 0) {
          setVerses(newVerses);
        }
        // If no verses for this translation, keep showing current
        setLoadedTranslation(currentTranslation);
        setLoading(false);
      }
    });

    return () => { cancelled = true; };
  }, [currentTranslation, bookSlug, chapter, loadedTranslation, initialVerses]);

  if (verses.length === 0) {
    return (
      <div className="card text-center py-12">
        <p className="text-navy/40 text-sm">No verses available for this chapter yet.</p>
      </div>
    );
  }

  return (
    <div className="card relative">
      {loading && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
          <div className="flex items-center gap-2 text-sm text-navy/40">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            Loading {currentTranslation.toUpperCase()}...
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        <h2 className="font-sans text-base font-semibold text-navy">Scripture Text</h2>
        <span className="pill pill-gold !text-[0.6rem]">{loadedTranslation.toUpperCase()}</span>
      </div>

      <div className="scripture-body">
        {verses.map((verse) => {
          const hasExplanation = explainedVerses.includes(verse.verse_number);
          return (
            <p key={verse.verse_number} className="scripture-verse">
              {hasExplanation ? (
                <a
                  href={`/bible/${bookSlug}/${chapter}/${verse.verse_number}`}
                  className="scripture-verse-num scripture-verse-link"
                  title={`Read explanation of verse ${verse.verse_number}`}
                >
                  {verse.verse_number}
                </a>
              ) : (
                <span className="scripture-verse-num">
                  {verse.verse_number}
                </span>
              )}
              {cleanVerseText(verse.text)}
            </p>
          );
        })}
      </div>
    </div>
  );
}
