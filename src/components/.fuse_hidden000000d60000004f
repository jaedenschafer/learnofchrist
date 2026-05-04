'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/TranslationContext';
import { useReadingPrefs } from '@/lib/ReadingPrefsContext';
import { fetchVersesClient, Verse } from '@/lib/supabase';

interface VerseDisplayProps {
  bookSlug: string;
  chapter: number;
  initialVerses: Verse[];
  explainedVerses?: number[];
  defaultTranslation?: string;
}

function cleanVerseText(text: string): string {
  return text
    .replace(/<\/?FI>/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

const FONT_SIZE_CLASSES = {
  small: 'text-[1rem] leading-[1.7]',
  medium: 'text-[1.125rem] leading-[1.8]',
  large: 'text-[1.3125rem] leading-[1.9]',
  xlarge: 'text-[1.5625rem] leading-[1.95]',
};

export default function VerseDisplay({ bookSlug, chapter, initialVerses, explainedVerses = [], defaultTranslation = 'kjv' }: VerseDisplayProps) {
  const { currentTranslation } = useTranslation();
  const { fontSize, readingMode } = useReadingPrefs();
  const [verses, setVerses] = useState<Verse[]>(initialVerses);
  const [loading, setLoading] = useState(false);
  const [loadedTranslation, setLoadedTranslation] = useState(defaultTranslation);

  useEffect(() => {
    if (currentTranslation === loadedTranslation) return;

    if (currentTranslation === defaultTranslation && initialVerses.length > 0) {
      setVerses(initialVerses);
      setLoadedTranslation(defaultTranslation);
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetchVersesClient(bookSlug, chapter, currentTranslation).then((newVerses) => {
      if (!cancelled) {
        if (newVerses.length > 0) {
          setVerses(newVerses);
        } else if (initialVerses.length > 0) {
          // If the selected translation has no verses (e.g. KJV for Apocrypha), keep showing initial
          setVerses(initialVerses);
        }
        setLoadedTranslation(newVerses.length > 0 ? currentTranslation : defaultTranslation);
        setLoading(false);
      }
    });

    return () => { cancelled = true; };
  }, [currentTranslation, bookSlug, chapter, loadedTranslation, initialVerses, defaultTranslation]);

  if (verses.length === 0) {
    return (
      <div className="bg-[color:var(--color-surface)] rounded-2xl text-center py-16">
        <p className="text-[color:var(--color-tertiary-label)] text-[0.9375rem]">
          {defaultTranslation === 'dra'
            ? 'This book is available in the Douay-Rheims (DRA) translation. Switch to DRA to read.'
            : 'No verses available for this chapter yet.'}
        </p>
      </div>
    );
  }

  const fontClass = FONT_SIZE_CLASSES[fontSize];

  // Paragraph mode: render all verses inline in a single block
  if (readingMode === 'paragraph') {
    return (
      <div className="bg-[color:var(--color-surface)] rounded-2xl p-5 sm:p-7 relative">
        {loading && (
          <div className="absolute inset-0 glass rounded-2xl flex items-center justify-center z-10">
            <div className="flex items-center gap-2 text-[0.875rem] text-[color:var(--color-secondary-label)]">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Loading {currentTranslation.toUpperCase()}...
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[1.0625rem] font-semibold text-[color:var(--color-label)]">Scripture</h2>
          <span className="text-[0.6875rem] font-semibold text-[color:var(--color-primary)] bg-[color:var(--vesper-gold)]/[0.08] px-2.5 py-1 rounded-lg">{loadedTranslation.toUpperCase()}</span>
        </div>

        <div className={`font-serif ${fontClass} text-[color:var(--color-label)]`}>
          {verses.map((verse) => {
            const hasExplanation = explainedVerses.includes(verse.verse_number);
            return (
              <span key={verse.verse_number}>
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
                {cleanVerseText(verse.text)}{' '}
              </span>
            );
          })}
        </div>
      </div>
    );
  }

  // Verse-by-verse mode (default)
  return (
    <div className="bg-[color:var(--color-surface)] rounded-2xl p-5 sm:p-7 relative">
      {loading && (
        <div className="absolute inset-0 glass rounded-2xl flex items-center justify-center z-10">
          <div className="flex items-center gap-2 text-[0.875rem] text-[color:var(--color-secondary-label)]">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            Loading {currentTranslation.toUpperCase()}...
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[1.0625rem] font-semibold text-[color:var(--color-label)]">Scripture</h2>
        <span className="text-[0.6875rem] font-semibold text-[color:var(--color-primary)] bg-[color:var(--vesper-gold)]/[0.08] px-2.5 py-1 rounded-lg">{loadedTranslation.toUpperCase()}</span>
      </div>

      <div className={`font-serif ${fontClass} text-[color:var(--color-label)]`}>
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
