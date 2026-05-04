import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 42 — Hearing and Doing
 *
 * After Gedaliah&apos;s murder, the remnant flees in fear. They ask Jeremiah to
 * inquire of God on their behalf: should we flee to Egypt? God&apos;s answer is
 * clear: stay in the land. But the answer is not what they want to hear. The
 * chapter poses the eternal question: will we obey God when His word contradicts
 * our desires?
 */
export const JEREMIAH_42: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 42,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  topicTags: ['lament', 'judgment', 'hope', 'calling'],
  opener: {
    topical: true,
    caption: 'Jeremiah 42',
  },
  intros: [
    'The remnant is in crisis. Gedaliah is dead. Ishmael has scattered them. Fear has seized the people. They come to Jeremiah and ask him to pray, to inquire of God, to ask whether they should flee to Egypt. Egypt is old hope. Egypt is the known quantity. Egypt is where they can escape the violence and uncertainty of the land.',
    'Jeremiah prays, as they have asked. God answers clearly: do not go to Egypt. Stay in the land. Do not flee. But staying means facing uncertainty. It means trusting God in a broken situation. It means accepting the loss of control. And so the remnant promises to obey. But promises made in seeking truth are often broken when truth arrives.',
  ],

  sections: [
    {
      ref: 'Jeremiah 42:1–22',
      title: 'The Word Spoken; the Promise Made',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            plain(5, 'Then they said to Jeremiah, The Lord be a true and faithful witness between us, if we do not even according to all things for the which the Lord thy God shall send thee to us.'),
            plain(6, 'Whether it be good, or whether it be evil, we will obey the voice of the Lord our God, to whom we send thee; that it may be well with us, when we obey the voice of the Lord our God.'),
            plain(9, 'And said unto them, Thus saith the Lord, the God of Israel, unto whom ye sent me to make your supplication before him;'),
            plain(10, 'If ye will still abide in this land, then will I build you, and not pull you down, and I will plant you, and not pluck you up: for I repent me of the evil that I have done unto you.'),
            plain(15, 'And now therefore hear the word of the Lord, all ye remnant of Judah; Thus saith the Lord of hosts, the God of Israel; If ye wholly turn your faces toward Egypt, and go to sojourn there;'),
            plain(16, 'Then it shall come to pass, that the sword, which ye feared, shall overtake you there in the land of Egypt, and the famine, whereof ye were afraid, shall follow close after you there in Egypt; and there ye shall die.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer42-promise',
          html: 'The remnant makes a solemn oath: "Whether it be good, or whether it be evil, we will obey the voice of the Lord." This is a statement of radical openness. They are committing to obey not just if God&apos;s answer pleases them, but if it does not. They are inviting God to speak, and they are pledging to listen. It is a beautiful promise[res:lachish-letters][res:sefaria-jeremiah-42].',
        },
        {
          kind: 'commentary',
          id: 'jer42-gods-answer',
          html: 'God&apos;s answer is not Egypt. It is stay. "If ye will still abide in this land, then will I build you." The promise is reconstruction, not escape. The promise is that God will be with them in the land where they fear, not in the safety of Egypt where they imagine refuge. God calls them not to flee from difficulty, but to face it in faith[res:sefaria-jeremiah].',
        },
        {
          kind: 'commentary',
          id: 'jer42-contrast',
          html: 'The contrast is stark. In the land: "I will build you, and not pull you down, and I will plant you, and not pluck you up." In Egypt: "the sword...shall overtake you...and the famine...shall follow close after you there in Egypt; and there ye shall die." There is no refuge in Egypt. There is no escape from God&apos;s purposes. The only true safety is in obedience to God&apos;s word, in the place of God&apos;s choosing.',
        },
        {
          kind: 'carry',
          html: 'God&apos;s call is often to remain, not to flee. To trust, not to escape. To obey even when obedience seems dangerous. The remnant will answer this call in the next chapter with disobedience. But the call itself stands: you are not called to escape your circumstances, but to meet God in them.',
        },
        {
          kind: 'reflection',
          id: 'jer42-hearing-and-obeying',
          prompt: 'When you ask God a question, can you truly promise to obey the answer, whether it pleases you or not? What makes it difficult to obey God&apos;s word when it contradicts what you want to do?',
        },
        {
          kind: 'christ',
          id: 'jer42-christ',
          title: 'Christ Connection — Count the Cost',
          html:
            'The remnant promises to obey but will not. They hear God&apos;s word but choose their own path. Christ warned against this very thing: "Whosoever doth not bear his cross, and come after me, cannot be my disciple. For which of you, intending to build a tower, sitteth not down first, and counteth the cost, whether he have sufficient to finish it?" (Luke 14:27–28). And James echoes the danger: "Be ye doers of the word, and not hearers only, deceiving yourselves" (James 1:22). The rocky-soil hearer receives the word with joy but has no root. "Yet hath he not root in himself, but dureth for a while: for when tribulation or persecution ariseth because of the word, by and by he is offended" (Matthew 13:20–21). The remnant&apos;s failure foreshadows the necessity of Christ&apos;s cross—not as symbol only, but as the reality that demands everything.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'We will obey the voice of the Lord our God, to whom we send thee...If ye will still abide in this land, then will I build you, and not pull you down.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 42 · Study Guide',
  },  resources: [
    {
      id: 'lachish-letters',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Lachish Letters',
      url: 'https://www.imj.org.il/en/collections/lachish-letters',
      description: 'Ancient inscribed potsherds from the Judean siege of Lachish (587 BCE), contemporary with Jeremiah.',
    },
    {
      id: 'sefaria-jeremiah',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah',
      url: 'https://www.sefaria.org/Jeremiah',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    },
    {
      id: 'sefaria-jeremiah-42',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah 42 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Jeremiah.42',
      description: 'The Hebrew text of Jeremiah 42 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: false,
};
