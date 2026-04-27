import { hp, hy, hg, t, plain, type RichChapterContent } from './types';
export const FIRST_ESDRAS_3: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 3,
  intros: [
    'King Darius holds a great festival. He poses a riddle to three young men: What is strongest? One says wine; another the king; a third says women. But Zerubbabel, a Jewish returnee, answers: "Truth is great and mightier than all things." This answer changes the course of the return.',
    'The debate reveals philosophies of power. Wine represents appetite. The king represents authority. Women represent relationship. Yet are any ultimate? Zerubbabel sees deeper: the only power that cannot be conquered is truth. It is eternal, the foundation of all order. A kingdom built on truth endures.',
  ],
  sections: [
    {
      ref: '1 Esdras 3:1–36',
      title: 'The Question of Strength',
      blocks: [
        { kind: 'scripture', chapter: 3, lines: [
          plain(1, 'And Darius made a great feast, and called together all the princes of his empire, and all the governors, and captains, and counsellors of his realm.'),
          plain(4, 'And the king said unto them, Let each one of you speak a sentence, and he whose words shall appear the most excellent, to him will I give great gifts and rewards of victory.'),
          plain(40, 'Then said Zerubbabel, Blessed be the God of truth! And all the people said with a loud voice, Great is truth, and mighty above all things!'),
        ] },
        { kind: 'commentary', id: 'esdras3-riddle', html: 'The contest is ostensibly playful, but stakes are real. Each answer reveals a philosophy of power. Zerubbabel reframes entirely. He concedes arguments about wine, king, women. But he points beyond them to what is ultimate. Truth simply is. It cannot be destroyed.' },
        { kind: 'hebrew', id: 'esdras3-kozak', title: 'Kozak — Strength', script: 'כֹּזַק', translit: '<strong>Kozak</strong> · strength; power; might', description: 'Hebrew distinguishes between kozak—power or might—and other forms of strength. Kozak can refer to physical force, political power, military strength. The question: what power ultimately prevails?' },
        { kind: 'christ', id: 'esdras3-christ-power', title: 'Christ Connection — The Power That Conquers All', html: 'Jesus is rejected by the powerful—kings, authorities, forces of the world. Yet through His apparent weakness—His execution—He conquers death itself. His power is not wine, kingdoms, or human might. It is the power of truth and love incarnate.' },
        { kind: 'carry', html: 'What do you believe is strongest? What power do you most fear? Zerubbabel understood: the only power that cannot be conquered is truth. Build your life on it.' },
        { kind: 'reflection', id: 'esdras3-strongest', prompt: 'In your life, what power has proven strongest—wealth, status, relationships, or truth? How has that shaped your choices?' },
      ],
    },
    {
      ref: '1 Esdras 4:41–57',
      title: 'The King&apos;s Grant',
      blocks: [
        { kind: 'scripture', chapter: 4, lines: [
          plain(41, 'Then said the king unto him, Ask what thou wilt more than is already appointed, seeing thou art found to be the wisest.'),
          plain(47, 'Now therefore I make a decree: that all those who have fled from Judea, the treasures of the people, shall be restored to them.'),
          plain(57, 'And I myself will cause the treasure to be paid for the building of the house of God.'),
        ] },
        { kind: 'commentary', id: 'esdras4-grant', html: 'The king is won over by truth. He grants not merely permission but active support. The exiles are allowed to return. Their property is restored. The king himself funds the temple. Truth, once recognized, compels right action.' },
        { kind: 'greek', id: 'esdras4-doxa', title: 'Doxa — Glory; Judgment', script: 'δόξα', translit: '<strong>Doxa</strong> · glory; honor; judgment; appearance', description: 'The king says Zerubbabel&apos;s judgment is approved. Doxa here means judgment or decision that carries authority. A person of true doxa is one whose judgment can be trusted because it is rooted in truth.' },
        { kind: 'christ', id: 'esdras4-christ-vindicated', title: 'Christ Connection — The Vindicated Truth', html: 'Jesus is condemned by the powers of the world. Yet God vindicates Him in the resurrection. What appeared as defeat is revealed as victory. Truth, though attacked, is ultimately vindicated.' },
        { kind: 'carry', html: 'When you speak truth, you may face opposition. The powers may suppress it. But truth has a way of being recognized, and once recognized, it commands respect. Hold to truth, and trust God to vindicate it.' },
        { kind: 'reflection', id: 'esdras4-vindication', prompt: 'Have you ever been vindicated by truth after facing opposition? How did it feel? What does it mean to trust God&apos;s vindication?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Great is truth, and mighty above all things! Then said Zerubbabel, Blessed be the God of truth! And all the people said with a loud voice, Great is truth, and mighty above all things!',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 3 · Study Guide',
  },
  hasHebrew: true,
};
