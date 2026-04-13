'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/TranslationContext';
import { fetchVersesClient, Verse } from '@/lib/supabase';

interface VerseDisplayProps {
  bookSlug: string;
  chapter: number;
  initialVerses: Verse[];
}

export default function VerseDisplay({ bookSlug, chapter, initialVerses }: VerseDisplayProps) {
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

      <div className="flex items-center justify-between mb-4">
        <h2 className="font-sans text-base font-semibold text-navy">Scripture Text</h2>
        <span className="pill pill-gold !text-[0.6rem]">{loadedTranslation.toUpperCase()}</span>
      </div>

      <div className="space-y-0">
        {verses.map((verse) => (
          <span key={verse.verse_number} className="inline">
            <sup className="text-[0.6rem] font-bold text-gold/70 mr-0.5 select-none">
              {verse.verse_number}
            </sup>
            <span className="text-sm text-navy/75 leading-[1.85]">
              {verse.text}{' '}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
