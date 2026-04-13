'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/TranslationContext';
import { fetchVersesClient, Verse } from '@/lib/supabase';

interface VerseDisplayProps {
  bookSlug: string;
  chapter: number;
  initialVerses: Verse[];
  explainedVerses?: number[];
}

function cleanVerseText(text: string): string {
  return text
    .replace(/<\/?FI>/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export default function VerseDisplay({ bookSlug, chapter, initialVerses, explainedVerses = [] }: VerseDisplayProps) {
  const { currentTranslation } = useTranslation();
  const [verses, setVerses] = useState<Verse[]>(initialVerses);
  const [loading, setLoading] = useState(false);
  const [loadedTranslation, setLoadedTranslation] = useState('kjv');

  useEffect(() => {
    if (currentTranslation === loadedTranslation) return;

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
        setLoadedTranslation(currentTranslation);
        setLoading(false);
      }
    });

    return () => { cancelled = true; };
  }, [currentTranslation, bookSlug, chapter, loadedTranslation, initialVerses]);

  if (verses.length === 0) {
    return (
      <div className="bg-white rounded-2xl text-center py-16">
        <p className="text-[#AEAEB2] text-[0.9375rem]">No verses available for this chapter yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-7 relative">
      {loading && (
        <div className="absolute inset-0 glass rounded-2xl flex items-center justify-center z-10">
          <div className="flex items-center gap-2 text-[0.875rem] text-[#86868B]">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            Loading {currentTranslation.toUpperCase()}...
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[1.0625rem] font-semibold text-[#1D1D1F]">Scripture</h2>
        <span className="text-[0.6875rem] font-semibold text-[#007AFF] bg-[#007AFF]/[0.08] px-2.5 py-1 rounded-lg">{loadedTranslation.toUpperCase()}</span>
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
