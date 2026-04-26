'use client';

import { useStudyLevel } from '@/lib/StudyLevelContext';
import { useDenomination } from '@/lib/DenominationContext';
import { getDenominationPerspective } from '@/data/denomination-perspectives';

interface StudyGuideProps {
  bookName: string;
  chapter: number;
  content: {
    overview: string;
    themes: { title: string; desc: string }[];
    questions: string[];
    christConnection: string;
    keyVerse: { reference: string; text: string };
  } | null;
}

export default function StudyGuide({ bookName, chapter, content }: StudyGuideProps) {
  const { level } = useStudyLevel();
  const { denomination, currentDenomination } = useDenomination();
  const perspective = getDenominationPerspective(denomination);

  const genericOverview = `${bookName} Chapter ${chapter} continues the biblical narrative and provides important insights into God's character and His plan for redemption. As you study this chapter, discover themes of faith, obedience, grace, and God's unfailing love.`;

  const genericThemes = [
    { title: "God's Faithfulness", desc: "God's consistent character and His commitment to covenant promises." },
    { title: "Human Response", desc: "Various responses to God's word — showing consequences of belief and doubt." },
    { title: "Spiritual Truth", desc: "Spiritual principles applicable to our faith journey today." },
  ];

  const genericQuestions = [
    'What are the main events or teachings described in this chapter?',
    'How do the characters respond to God in this passage?',
    'What challenges are presented, and how are they resolved?',
    "What does this chapter reveal about God's character?",
    'What spiritual lessons can you apply to your own life?',
  ];

  const overview = content ? content.overview : genericOverview;
  const themes = content ? content.themes : genericThemes;
  const questions = content ? content.questions : genericQuestions;
  const christConnection = content
    ? content.christConnection
    : 'Every passage ultimately points to Jesus through prophecy, typology, or thematic connection.';

  return (
    <>
      {/* Denomination Lens Banner — when active */}
      {perspective && (
        <div className="bg-[#5856D6]/[0.04] border-l-[3px] border-[#5856D6]/30 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.6875rem] font-semibold bg-[#5856D6]/[0.1] text-[#5856D6]">
              {currentDenomination.label} Lens
            </span>
          </div>
          <p className="text-[0.8125rem] text-[color:var(--color-label)]/70 leading-relaxed">
            {perspective.approach}
          </p>
        </div>
      )}

      {/* Key Verse — all levels */}
      {content && (
        <div className="bg-[#007AFF]/[0.04] border-l-[3px] border-[#007AFF]/30 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="pill bg-[#007AFF]/[0.08] text-[color:var(--color-primary)] text-sm">Key Verse</span>
            <span
              data-editable="keyVerse-ref"
              className="text-sm font-medium text-[color:var(--color-tertiary-label)]"
            >
              {content.keyVerse.reference}
            </span>
          </div>
          <p className="text-lg text-[color:var(--color-label)]/80 leading-relaxed italic">
            &ldquo;<span data-editable="keyVerse-text">{content.keyVerse.text}</span>&rdquo;
          </p>
        </div>
      )}

      {/* Overview — all levels */}
      <div className="bg-[color:var(--color-surface)] rounded-2xl p-6">
        <h2 className="font-sans text-lg font-bold text-[color:var(--color-label)] mb-3">Overview</h2>
        <p
          data-editable="overview"
          className="text-base text-[color:var(--color-secondary-label)] leading-relaxed"
        >
          {overview}
        </p>
      </div>

      {/* Key Themes — intermediate & deep */}
      {(level === 'intermediate' || level === 'deep') && (
        <div className="bg-[color:var(--color-surface)] rounded-2xl p-6">
          <h2 className="font-sans text-lg font-bold text-[color:var(--color-label)] mb-3">Key Themes</h2>
          <div className="space-y-4" data-editable-list="themes">
            {themes.map((theme, i) => (
              <div key={i} className="flex gap-3" data-editable-theme>
                <div className="step-number">{i + 1}</div>
                <div>
                  <h3
                    data-editable="theme-title"
                    className="font-sans text-base font-semibold text-[color:var(--color-label)]"
                  >
                    {theme.title}
                  </h3>
                  <p
                    data-editable="theme-desc"
                    className="text-sm text-[color:var(--color-secondary-label)] mt-0.5 leading-relaxed"
                  >
                    {theme.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Denomination Emphasis — when active, intermediate & deep */}
      {perspective && (level === 'intermediate' || level === 'deep') && (
        <div className="bg-[color:var(--color-surface)] rounded-2xl p-6 border border-[#5856D6]/10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-[#5856D6]/[0.1] flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-[#5856D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="font-sans text-base font-semibold text-[color:var(--color-label)]">{currentDenomination.label} Emphasis</h2>
          </div>
          <p className="text-[0.875rem] text-[color:var(--color-secondary-label)] leading-relaxed mb-4">{perspective.emphasis}</p>

          {/* Study Tip */}
          <div className="bg-[#5856D6]/[0.04] rounded-xl p-4 mb-4">
            <p className="text-[0.75rem] font-semibold text-[#5856D6] mb-1">Study Tip</p>
            <p className="text-[0.8125rem] text-[color:var(--color-label)]/70 leading-relaxed">{perspective.studyTip}</p>
          </div>

          {/* Additional Reading */}
          <div>
            <p className="text-[0.75rem] font-semibold text-[color:var(--color-secondary-label)] mb-2">Suggested Reading</p>
            <div className="space-y-1.5">
              {perspective.additionalReading.map((reading, i) => (
                <div key={i} className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-[#5856D6] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="text-[0.8125rem] text-[color:var(--color-label)]/70 leading-snug">{reading}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Study Questions — intermediate & deep */}
      {(level === 'intermediate' || level === 'deep') && (
        <div className="bg-[color:var(--color-surface)] rounded-2xl p-6">
          <h2 className="font-sans text-lg font-bold text-[color:var(--color-label)] mb-3">Study Questions</h2>
          <div className="space-y-3">
            {questions.map((q, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-sm font-bold text-[color:var(--color-primary)] mt-0.5">{i + 1}.</span>
                <p className="text-base text-[color:var(--color-secondary-label)] leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Connection to Christ — intermediate & deep */}
      {(level === 'intermediate' || level === 'deep') && (
        <div className="bg-[color:var(--color-surface)] rounded-2xl p-6">
          <h2 className="font-sans text-lg font-bold text-[color:var(--color-label)] mb-3">Connection to Christ</h2>
          <p className="text-base text-[color:var(--color-secondary-label)] leading-relaxed mb-3">{christConnection}</p>
          {!content && (
            <div className="bg-[#007AFF]/[0.04] border-l-[3px] border-[#007AFF]/30 rounded-r-xl p-4">
              <p className="scripture-quote text-base text-[color:var(--color-secondary-label)] leading-relaxed">
                Jesus is the true source of faithfulness, the perfect response to God&apos;s word, and the embodiment of all spiritual truths presented throughout Scripture.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Deep Dive Extras — deep only */}
      {level === 'deep' && (
        <>
          {/* Historical & Cultural Context */}
          <div className="bg-[color:var(--color-surface)] rounded-2xl p-6">
            <h2 className="font-sans text-lg font-bold text-[color:var(--color-label)] mb-3">Historical &amp; Cultural Context</h2>
            <p className="text-base text-[color:var(--color-secondary-label)] leading-relaxed">
              Understanding the historical setting of {bookName} {chapter} enriches our reading. Consider the original audience, the cultural practices of the time, and how these details illuminate the text&apos;s meaning. Study the geography, customs, and political landscape that shaped this passage.
            </p>
          </div>

          {/* Original Language Insights */}
          <div className="bg-[color:var(--color-surface)] rounded-2xl p-6">
            <h2 className="font-sans text-lg font-bold text-[color:var(--color-label)] mb-3">Original Language Insights</h2>
            <div className="bg-[var(--color-bg)] rounded-xl p-4 mb-3">
              <p className="text-sm text-[color:var(--color-secondary-label)] leading-relaxed">
                The original Hebrew and Greek texts often contain nuances lost in translation. Key words in this chapter carry rich theological meaning that deepens our understanding of God&apos;s message.
              </p>
            </div>
            <p className="text-xs text-[color:var(--color-tertiary-label)]">
              Tip: Compare multiple translations (KJV, ASV, WEB) using the translation switcher above to see how different translators rendered key terms.
            </p>
          </div>

          {/* Cross-References */}
          <div className="bg-[color:var(--color-surface)] rounded-2xl p-6">
            <h2 className="font-sans text-lg font-bold text-[color:var(--color-label)] mb-3">Cross-References &amp; Connections</h2>
            <p className="text-base text-[color:var(--color-secondary-label)] leading-relaxed mb-3">
              Scripture interprets Scripture. The themes in {bookName} {chapter} echo and connect with passages throughout the Bible, forming a unified narrative of God&apos;s redemptive plan.
            </p>
            <div className="bg-[#007AFF]/[0.04] border-l-[3px] border-[#007AFF]/30 rounded-r-xl p-4">
              <p className="text-sm text-[color:var(--color-secondary-label)] leading-relaxed">
                As you study, look for parallel passages, fulfilled prophecies, and recurring themes that tie this chapter to the broader biblical story.
              </p>
            </div>
          </div>
        </>
      )}

      {/* Personal Reflection — all levels */}
      <div className="bg-[var(--color-bg)] rounded-2xl p-6">
        <h2 className="font-sans text-lg font-bold text-[color:var(--color-label)] mb-2">Personal Reflection</h2>
        <p className="text-base text-[color:var(--color-secondary-label)] leading-relaxed">
          {level === 'beginner'
            ? `What is one thing you learned from ${bookName} ${chapter} that you can carry with you today?`
            : level === 'intermediate'
              ? `Take time to journal or meditate on what God is teaching you through ${bookName} ${chapter}. How can these truths transform your thinking and actions today?`
              : `Spend time in prayer over ${bookName} ${chapter}. Journal your observations, interpretations, and applications. How does this passage shape your understanding of God's character and His purposes? What action will you take in response?`
          }
        </p>
      </div>
    </>
  );
}
