import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_2: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 2,
  intros: [
    'Can reason truly master all desires? Hunger, thirst, the call of the body—these cry louder than law. Yet a man filled with devotion to God can say no to his own appetites.',
    'The proof is not philosophical but practical: the wise show through their lives what reason can accomplish.',
  ],
  sections: [
    {
      ref: '4 Maccabees 2:1–14',
      title: 'Reason Against the Appetites',
      blocks: [
        { kind: 'scripture', chapter: 2, lines: [
          plain(2, 'But some might say, Does reason truly master all desires? Can it say no to hunger, to thirst, to the call of pleasure?'),
          plain(6, 'Yea, for reason that is devout can overcome even these, through love of the law and of righteousness.'),
          plain(10, 'The man who loves God\'s way will deny himself, not from hatred of himself, but from love of virtue.'),
        ] },
        { kind: 'commentary', id: 'mac4-2-appetites', html: 'The appetites are not evil in themselves; they are part of being human. But reason—wedded to love of God—can direct them toward good or resist them when they lead to evil.' },
        { kind: 'hebrew', id: 'mac4-2-yetzer', title: 'Yetzer — The Inclination; The Drive', script: 'יֵצֶר', translit: '<strong>Yetzer</strong> · inclination; drive; impulse toward good or evil', description: 'The yetzer is neither good nor evil—it is the raw force of desire. What matters is whether reason aligns it with God\'s law.' },
        { kind: 'christ', id: 'mac4-2-christ', title: 'Christ Connection — The Wilderness Fast', html: 'Jesus fasted forty days in the wilderness. When hunger cried out, He answered: "Man shall not live by bread alone, but by every word that proceeds from God\'s mouth."' },
        { kind: 'carry', html: 'Where do your appetites push you away from God? What would it look like to deny them—not from self-hatred, but from love of righteousness?' },
        { kind: 'reflection', id: 'mac4-2-no', prompt: 'To say "no" to desire—is this weakness or strength? What enables a person to refuse what they want most?' },
      ],
    },
    {
      ref: '4 Maccabees 2:15–24',
      title: 'The Victory of Restraint',
      blocks: [
        { kind: 'scripture', chapter: 2, lines: [
          plain(15, 'Blessed is he that overcometh hunger and thirst through righteousness.'),
          plain(19, 'For such a man has conquered his own flesh, which is harder than conquering a city with weapons.'),
          plain(24, 'In this way, reason mastering the passions becomes the way to true immortality.'),
        ] },
        { kind: 'commentary', id: 'mac4-2-victory', html: 'The restraint that says "no" to appetites is not deprivation; it is victory. It is the proof that the human spirit can transcend the body\'s demands.' },
        { kind: 'greek', id: 'mac4-2-enkrateia', title: 'Enkrateia — Self-Control; Mastery', script: 'ἐγκράτεια', translit: '<strong>Enkrateia</strong> · self-control; mastery of self', description: 'Enkrateia is not grim suppression but the joy of acting according to one\'s truest self—the spirit in alignment with God.' },
        { kind: 'christ', id: 'mac4-2-christ2', title: 'Christ Connection — Fruit of the Spirit', html: 'Paul lists enkrateia—self-control—as a fruit of the Holy Spirit. It comes not from law alone, but from the Spirit\'s transformation.' },
        { kind: 'carry', html: 'What appetites will you master today? What small "no" will prepare you for larger surrenders?' },
        { kind: 'reflection', id: 'mac4-2-immortality', prompt: 'How does mastering the passions lead to immortality? What does this suggest about what it means to truly live?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Does reason truly master all desires? Yea, for devout reason can overcome even hunger and thirst, through love of the law. Such a man has conquered what is harder than conquering a city.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 2 · Study Guide',
  },
};
