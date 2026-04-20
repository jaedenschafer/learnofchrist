'use client';

import { useJournalEntry } from '@/lib/useStudyJournal';

export default function ReflectionBlock({
  studyId,
  id,
  prompt,
  placeholder = 'Record your thoughts here…',
}: {
  studyId: string;
  id: string;
  prompt: string;
  placeholder?: string;
}) {
  const key = `loc-reflect:${studyId}:${id}`;
  const { value, save, loaded } = useJournalEntry(key);

  return (
    <div className="reflection-block">
      <div className="reflection-head">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-6-6a6 6 0 0112 0M7 7h.01M17 7h.01" />
        </svg>
        <span className="reflection-label">Ideas for Reflection</span>
      </div>
      <p className="reflection-prompt">{prompt}</p>
      <textarea
        className="reflection-textarea"
        placeholder={placeholder}
        value={value}
        onChange={(e) => save(e.target.value)}
        rows={4}
      />
      <p className="reflection-foot">
        {loaded && value
          ? <><span className="reflection-saved-dot" /> Saved on this device</>
          : 'Saved locally · syncs later when you sign in'}
      </p>
    </div>
  );
}
