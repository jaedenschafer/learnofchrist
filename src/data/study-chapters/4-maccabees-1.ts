import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_1: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 1,
  intros: [
    'Devout reason is not logic alone, but the wisdom that orders the passions. It is the mind aligned with God\'s law, governing all desires.',
    'A man who masters his appetites through reason masters more than any warrior on the battlefield. He conquers the true enemy: himself.',
  ],
  sections: [
    {
      ref: '4 Maccabees 1:1–12',
      title: 'Reason\'s Dominion',
      blocks: [
        { kind: 'scripture', chapter: 1, lines: [
          plain(1, 'Truly, O men, devout reason is the master of the passions, and of sorrows also, and of evils of all kinds.'),
          plain(3, 'I can prove this by the law of the Jews, for the law itself is most wise and divine.'),
          plain(10, 'For he that ruleth his own spirit is greater than he who taketh a city.'),
        ] },
        { kind: 'commentary', id: 'mac4-1-reason', html: 'Devout reason is not cold or heartless. It is the alignment of human will with divine law. Such reason brings peace—the mastery of appetites through love of God.' },
        { kind: 'hebrew', id: 'mac4-1-binah', title: 'Binah — Understanding; Divine Reason', script: 'בִּינָה', translit: '<strong>Binah</strong> · understanding; divine reason; wisdom', description: 'Binah is not mere intellect but the depth of understanding that comes from communion with God.' },
        { kind: 'christ', id: 'mac4-1-christ', title: 'Christ Connection — The Mind of Christ', html: 'Paul wrote: "Let this mind be in you, which was also in Christ Jesus." Jesus masters every passion through alignment with His Father\'s will.' },
        { kind: 'carry', html: 'What passion rules you? Where do your appetites override your reason? The way to mastery is not through force, but through love of God\'s law.' },
        { kind: 'reflection', id: 'mac4-1-spirit', prompt: 'To rule your own spirit—what does this mean? What would change if you made this your first victory?' },
      ],
    },
    {
      ref: '4 Maccabees 1:13–35',
      title: 'The Law\'s Instruction',
      blocks: [
        { kind: 'scripture', chapter: 1, lines: [
          plain(16, 'The law teacheth us to love righteousness, and to hate evil. It showeth the way of virtue, and the way of vice.'),
          plain(22, 'Blessed are those who yield to the law, for they have found the path to true freedom.'),
          plain(30, 'For the law is not burden, but liberty. It is the word that sets free those who trust in it.'),
        ] },
        { kind: 'commentary', id: 'mac4-1-law', html: 'God\'s law is not oppression but instruction. It teaches the wise the difference between honor and shame. Those who follow it find true freedom—the liberty of those whose passions are at peace.' },
        { kind: 'greek', id: 'mac4-1-nomos', title: 'Nomos — Law; Order; Divine Teaching', script: 'νόμος', translit: '<strong>Nomos</strong> · law; order; the structure of righteousness', description: 'God\'s nomos is the order He has written into creation. To follow it is to flow with reality itself.' },
        { kind: 'christ', id: 'mac4-1-christ2', title: 'Christ Connection — The Fulfillment of the Law', html: 'Jesus said: "I have not come to abolish the law, but to fulfill it." He embodies perfect alignment with God\'s will.' },
        { kind: 'carry', html: 'Is God\'s law a burden to you, or a liberation? What changes when you see it as the path to true freedom?' },
        { kind: 'reflection', id: 'mac4-1-liberty', prompt: 'True freedom comes through obedience to God\'s law. How does this seem paradoxical? How might it be true?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Devout reason is the master of the passions. The law teacheth us to love righteousness. Blessed are those who yield to the law, for they have found true freedom.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 1 · Study Guide',
  },
};
