'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useStudyLevel } from '@/lib/StudyLevelContext';
import {
  getCharacter,
  type BibleCharacter,
} from '@/data/study-chapters/characters';
import type { ChapterCharacter } from '@/data/study-chapters/types';
import './PeopleInChapter.css';

/**
 * Ribbon of "People in this chapter" cards rendered between the chapter
 * intros and the first scripture section. Lookups go through the shared
 * characters library; unknown slugs are quietly skipped so a typo doesn't
 * break the page.
 *
 * Bios deepen with the active study level — beginner sees a one-liner,
 * intermediate sees a short paragraph, deep sees the fuller bio that
 * places the figure in the larger biblical arc.
 *
 * Tap a card to expand it inline (without navigating). The card title
 * also links to the character's primary chapter when one is set.
 */
export default function PeopleInChapter({
  characters,
}: {
  characters: ChapterCharacter[];
}) {
  const { level } = useStudyLevel();
  const resolved = characters
    .map((c) => ({ chapter: c, lib: getCharacter(c.slug) }))
    .filter((entry): entry is { chapter: ChapterCharacter; lib: BibleCharacter } =>
      entry.lib !== null,
    );

  if (resolved.length === 0) return null;

  return (
    <section className="people-in-chapter" aria-labelledby="people-in-chapter-heading">
      <h2 id="people-in-chapter-heading" className="people__title">
        People in this chapter
      </h2>
      <ul className="people__row">
        {resolved.map(({ chapter, lib }) => (
          <PersonCard key={lib.slug} chapter={chapter} lib={lib} level={level} />
        ))}
      </ul>
    </section>
  );
}

function PersonCard({
  chapter,
  lib,
  level,
}: {
  chapter: ChapterCharacter;
  lib: BibleCharacter;
  level: 'beginner' | 'intermediate' | 'deep';
}) {
  const [expanded, setExpanded] = useState(false);
  const role = chapter.role || lib.role;
  // Beginner cards stay compact by default; user can tap to expand to the
  // intermediate bio. Intermediate/deep readers get the matching bio inline.
  const visibleBio =
    level === 'beginner' && !expanded
      ? lib.bios.beginner
      : level === 'beginner'
        ? lib.bios.intermediate
        : level === 'intermediate'
          ? lib.bios.intermediate
          : lib.bios.deep;
  const canExpand = level === 'beginner' && !expanded;

  return (
    <li className="people__card" data-level={level} data-expanded={expanded ? '1' : '0'}>
      <div className="people__card-head">
        {lib.primaryChapter ? (
          <Link
            href={`/study/${lib.primaryChapter.bookSlug}/${lib.primaryChapter.chapter}`}
            className="people__name-link"
          >
            <span className="people__name">{lib.name}</span>
          </Link>
        ) : (
          <span className="people__name">{lib.name}</span>
        )}
        {role && <span className="people__role">{role}</span>}
        {lib.era && <span className="people__era">{lib.era}</span>}
      </div>
      <p className="people__bio">{visibleBio}</p>
      {canExpand && (
        <button
          type="button"
          className="people__expand"
          onClick={() => setExpanded(true)}
        >
          More about {lib.name.split(' ')[0]} →
        </button>
      )}
    </li>
  );
}
