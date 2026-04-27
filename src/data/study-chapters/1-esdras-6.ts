import { hp, hy, hg, t, plain, type RichChapterContent } from './types';
export const FIRST_ESDRAS_6: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 6,
  intros: [
    'The work on the temple continues. Local people who oppose the rebuilding send a letter to the Persian king, claiming the Jews are rebellious and will refuse to pay taxes. They demand the work be stopped. The letter reaches the king, and he orders the construction halted. The work ceases. The enemy has succeeded.',
    "Yet the opposition does not last. The governor of the province and the leaders of Israel investigate the original decree from King Cyrus. They find it. They write to the new king, reminding him of Cyrus&apos;s authorization. The king responds: the work shall resume. Opposition is overcome not by might but by the discovery of truth written down.",
  ],
  sections: [
    {
      ref: '1 Esdras 6:1–12',
      title: 'The Opposition Rises',
      blocks: [
        { kind: 'scripture', chapter: 6, lines: [
          plain(1, 'Now the inhabitants of the country round about hindered the Jews from building.'),
          plain(7, 'And they sent unto king Artaxerxes a letter against those that dwelt in Judea and Jerusalem.'),
          plain(12, 'Whereupon the king made a decree, that the work of the house should cease.'),
        ] },
        { kind: 'commentary', id: 'esdras6-opposition', html: 'The opposition takes the form of a letter—a formal accusation to the throne. This is sophisticated adversity. The enemy does not attack with swords but with words and authority. The king believes the letter and orders work to stop. The building lies abandoned. The enemy has seemingly won.' },
        { kind: 'greek', id: 'esdras6-epistolē', title: 'Epistolē — Letter; Written Word', script: 'ἐπιστολή', translit: '<strong>Epistolē</strong> · letter; written word; message', description: 'The power of written authority. A letter carries weight beyond spoken word. It can travel where the speaker cannot. It can command even kings. Yet letters can also be challenged—by other letters, other testimony, other truth.' },
        { kind: 'christ', id: 'esdras6-christ-opposition', title: 'Christ Connection — Opposition That Cannot Stand', html: 'Jesus faces opposition from religious and civil authorities. They seek to stop His work. Yet His word endures. Their opposition cannot ultimately prevail against the truth He embodies.' },
        { kind: 'carry', html: 'When you face opposition, remember: it is often orchestrated through words and authority. Do not assume that authority is truth. The true authority is the one who speaks what is right.' },
        { kind: 'reflection', id: 'esdras6-opposed', prompt: 'When have you faced opposition to good work? How did you respond? What gave you courage to continue?' },
      ],
    },
    {
      ref: '1 Esdras 6:28–33',
      title: 'The Decree Confirmed',
      blocks: [
        { kind: 'scripture', chapter: 6, lines: [
          plain(28, 'And the elders of the Jews, being asked what manner of persons they were, and what manner of persons were those that builded the city, answered and said, We are the servants of the Lord that made heaven and earth.'),
          plain(32, 'Wherefore I have now made a decree, that if any man shall alter this edict, or shall hinder the work, timber shall be pulled from his house, and he shall be hanged thereon, and his goods shall be forfeited unto the king.'),
          plain(33, 'Now therefore, Shedbar, governor of Syria and Phenice, and Satharbuzanes, and their companions, because of the decree which hath been sent unto you, see that ye hinder not the work of the house of the Lord.'),
        ] },
        { kind: 'commentary', id: 'esdras6-confirmation', html: 'The truth is discovered, and the king reverses his decree. Now the authority of the crown backs the work instead of opposing it. The elders appeal not to force but to the original truth—the decree of Cyrus. Truth, when recovered and remembered, has power to overturn even royal opposition.' },
        { kind: 'hebrew', id: 'esdras6-emet2', title: 'Emet — Truth', script: 'אֱמֶת', translit: '<strong>Emet</strong> · truth; faithfulness; reliability', description: 'The decree written by Cyrus is emet—a true word that stands. It does not fade with time. The search for the original decree is a search for truth that endures.' },
        { kind: 'christ', id: 'esdras6-christ-vindicated2', title: 'Christ Connection — Truth Vindicated', html: 'The resurrection vindicates Christ. What appeared as defeat is revealed as truth triumphant. His word, His work cannot be stopped by opposition.' },
        { kind: 'carry', html: 'Record truth. Write it down. Let it stand. Opposition may rise, but truth—once written and preserved—cannot be permanently erased. Build on truth alone.' },
        { kind: 'reflection', id: 'esdras6-truth-stands', prompt: 'What truth have you discovered that changed your perspective? How does that truth sustain you when opposition comes?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'We are the servants of the Lord that made heaven and earth. See that ye hinder not the work of the house of the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 6 · Study Guide',
  },
  hasHebrew: true,
};
