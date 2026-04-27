import { hp, hy, hg, t, plain, type RichChapterContent } from './types';
export const FOURTH_MACCABEES_13: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 13,
  intros: [
    'The sixth brother is brought to the wheel. He is young, but his heart is old in devotion. He meditates not on pain but on the law and his brothers who have gone before him.',
    'In 4 Maccabees 13, the sixth brother shows us that faith is a living communion. He is surrounded by the witness of those already fallen, and their example becomes his strength.',
  ],
  sections: [
    {
      ref: '4 Maccabees 13:1–11',
      title: 'The Sixth Brother Meditates',
      blocks: [
        { kind: 'scripture', chapter: 13, lines: [
          plain(1, 'The sixth brother said to the executioners: Know that the law is my mother, and devotion my father and inheritance.'),
          plain(4, 'I look upon my brothers who have gone before me, and they stand as witnesses. I am not alone.'),
          plain(8, 'Even now, as you kindle the flame, I see them. They do not cry out. They stand firm. And I shall stand with them.'),
        ] },
        { kind: 'commentary', id: '4m13-meditation', html: 'The sixth brother practices meditation on witnesses. He does not try to ignore the pain by burying his mind in numbness. Instead, he gazes toward his brothers who have already made the passage. They become his present companions and his future home.' },
        { kind: 'greek', id: '4m13-theoria', title: 'Theoria — Contemplation; Vision', script: 'θεωρία', translit: '<strong>Theoria</strong> · contemplation; vision; beholding', description: 'Greek theoria is not abstract thought but active beholding. The brother beholds his brothers in the spiritual realm, and this vision sustains him.' },
        { kind: 'christ', id: '4m13-christ', title: 'Christ Connection — Cloud of Witnesses', html: 'Hebrews writes of "a cloud of witnesses" surrounding us. The sixth brother looks to those who have run before him. We, too, are surrounded by the communion of saints—those who have witnessed unto death.' },
        { kind: 'carry', html: 'When we suffer, we are not standing in isolation. Around us stands the communion of faithful ones who have endured before us. Their witness becomes our strength.' },
        { kind: 'reflection', id: '4m13-witnesses', prompt: 'Who are the witnesses that surround you—those whose faith went before you? How does their example sustain you?' },
      ],
    },
    {
      ref: '4 Maccabees 13:12–23',
      title: 'The Bond of Brotherly Devotion',
      blocks: [
        { kind: 'scripture', chapter: 13, lines: [
          plain(12, 'The sixth brother was laid upon the rack. Yet his soul did not abandon the law nor turn from the God of his fathers.'),
          plain(16, 'He said: The love of my brothers is stronger than pain. Their names are written on my heart. In death, we shall be closer than ever.'),
          plain(20, 'And when he expired, all those who had tortured him wept, saying: Who is this God whom none can make to deny?'),
        ] },
        { kind: 'commentary', id: '4m13-bond', html: 'The sixth brother discovers a mystery: the bond of brotherhood is not broken but deepened by sacrifice. He does not grieve the separation because he sees it as passage toward reunion. His brothers await him on the other side.' },
        { kind: 'hebrew', id: '4m13-sheol', title: 'She&apos;ol — The Dwelling of the Dead; Beyond', script: 'שְׁאוֹל', translit: '<strong>She&apos;ol</strong> · the dwelling of the dead; the world beyond', description: 'Hebrew she&apos;ol can mean death&apos;s darkness, but here it is redeemed: the place where the faithful gather, where covenant endures.' },
        { kind: 'christ', id: '4m13-christ2', title: 'Christ Connection — Communion of Saints', html: 'Jesus promised the thief: "Today you will be with me in paradise." The cross opens a way for the faithful to pass through death into communion. The sixth brother is ahead, preparing a place.' },
        { kind: 'carry', html: 'The sixth brother teaches us that love is not ended by death—it is transformed. The brothers are not separated by suffering and death but joined in a communion that outlasts the body.' },
        { kind: 'reflection', id: '4m13-love', prompt: 'What love has death not broken? How does faith transform our grief into hope?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'The love of my brothers is stronger than pain. Their names are written on my heart.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 13 · Study Guide',
  },
};
