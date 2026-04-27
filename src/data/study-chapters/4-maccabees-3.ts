import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_3: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 3,
  intros: [
    'King David, mighty in battle, thirsts desperately in the desert. Three of his soldiers risk their lives to bring him water. Will the great king drink?',
    'David pours the water out onto the ground. He cannot drink what cost his men their blood. His restraint is his greatest victory.',
  ],
  sections: [
    {
      ref: '4 Maccabees 3:1–12',
      title: 'David\'s Thirst',
      blocks: [
        { kind: 'scripture', chapter: 3, lines: [
          plain(1, 'Now I shall show you an example of reason mastering appetite. David, the great king, was in the wilderness, and he was exceeding thirsty.'),
          plain(5, 'And three of his mighty men went through the camp of the enemies, and brought to him a drink of water.'),
          plain(9, 'But David said unto them, Is not this water the blood of men that risked their lives for me?'),
        ] },
        { kind: 'commentary', id: 'mac4-3-thirst', html: 'David\'s thirst is real and severe. His soldiers bring water at great cost. Yet David\'s reasoning is swift: what I desire cannot be separated from the price paid for it. Love of the soldiers overrides thirst.' },
        { kind: 'hebrew', id: 'mac4-3-dam', title: 'Dam — Blood; Life Poured Out', script: 'דָּם', translit: '<strong>Dam</strong> · blood; the life poured out', description: 'Blood is life. To pour out blood is to give oneself. David recognizes the sacrifice his men made.' },
        { kind: 'christ', id: 'mac4-3-christ', title: 'Christ Connection — The Cup of His Blood', html: 'Jesus looks at the cup set before Him—the cup of suffering—and prays. Yet He drinks it, not for His thirst, but for the salvation of all.' },
        { kind: 'carry', html: 'What is someone willing to sacrifice for you? Can you accept it, or must you refuse? What would refusal cost them?' },
        { kind: 'reflection', id: 'mac4-3-blood', prompt: 'David saw the soldiers\' sacrifice in the water. What sacrifices do you daily benefit from? Do you see them?' },
      ],
    },
    {
      ref: '4 Maccabees 3:13–18',
      title: 'The Offering Poured Out',
      blocks: [
        { kind: 'scripture', chapter: 3, lines: [
          plain(13, 'And David poured out the water upon the ground, as an offering unto the Lord.'),
          plain(14, 'And he said, Far be it from me that I should drink the blood of men that went in jeopardy of their lives.'),
          plain(16, 'Thus did reason master the appetite. Thus did the king honor his men, and his God.'),
        ] },
        { kind: 'commentary', id: 'mac4-3-poured', html: 'David\'s pouring out the water is not wasteful—it is sacramental. He refuses to profit from sacrifice. His restraint is reverence.' },
        { kind: 'greek', id: 'mac4-3-spende', title: 'Spende — Libation; Offering Poured Out', script: 'σπένδω', translit: '<strong>Spende</strong> · libation; something poured out to God', description: 'A spende is not a meal but a gift—something offered whole to God, not consumed by the self.' },
        { kind: 'christ', id: 'mac4-3-christ2', title: 'Christ Connection — The Poured-Out Life', html: 'Paul speaks of his life as a "drink offering poured out" for Christ. Jesus pours Himself out, not for Himself, but for all.' },
        { kind: 'carry', html: 'What will you pour out? What good thing will you refuse to keep for yourself?' },
        { kind: 'reflection', id: 'mac4-3-honor', prompt: 'David honored both his men and his God with one gesture. How does refusal sometimes honor better than acceptance?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'David was exceeding thirsty, and his soldiers brought water at great risk. But David said: "Is not this the blood of men who risked their lives?" He poured it out as an offering to the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 3 · Study Guide',
  },
};
