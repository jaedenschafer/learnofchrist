import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_8: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 8,
  intros: [
    'After Eleazar\'s steadfastness, Antiochus turns his rage on seven brothers. They are brought to the king, and he demands they eat forbidden meat.',
    'The brothers look at one another. They know what lies ahead. Yet their eyes do not hold despair, but resolve. They will suffer together.',
  ],
  sections: [
    {
      ref: '4 Maccabees 8:1–16',
      title: 'The Seven Brothers',
      blocks: [
        { kind: 'scripture', chapter: 8, lines: [
          plain(1, 'And Antiochus, being enraged that Eleazar had not yielded, brought forth seven brothers, young men, saying unto them:'),
          plain(4, 'Ye see what befell the old man who would not obey. Will ye not learn from his fate?'),
          plain(10, 'But the brothers looked upon one another, and their eyes were not afraid. For they understood that they had been given unto God.'),
        ] },
        { kind: 'commentary', id: 'mac4-8-brothers', html: 'Seven brothers—a symbolic number of completeness. They face death as a unit. Their bond with one another is inseparable from their bond with God.' },
        { kind: 'hebrew', id: 'mac4-8-acim', title: 'Achim — Brothers; Those of One Womb', script: 'אַחִים', translit: '<strong>Achim</strong> · brothers; those bound together', description: 'Brothers share blood, history, home. Their loyalty to God is lived in loyalty to each other.' },
        { kind: 'christ', id: 'mac4-8-christ', title: 'Christ Connection — Community of Believers', html: 'Jesus speaks of His disciples as family: "Whoever does the will of God is my brother and sister and mother." The faithful form a new kinship.' },
        { kind: 'carry', html: 'Who are your spiritual brothers and sisters? How do you stand together when trials come? What binds you besides blood?' },
        { kind: 'reflection', id: 'mac4-8-together', prompt: 'The brothers faced death together. Is there strength in this? What does it cost to stand with others rather than suffer alone?' },
      ],
    },
    {
      ref: '4 Maccabees 8:17–28',
      title: 'The First Answer',
      blocks: [
        { kind: 'scripture', chapter: 8, lines: [
          plain(17, 'And the king said unto them, Surely ye are wiser than this foolish old man. Ye will obey, and live.'),
          plain(21, 'But the first brother answered, saying, We are sons of Abraham, and the God of our fathers is alive in us. We shall not betray Him.'),
          plain(26, 'And the king\'s face grew dark with rage, for he had been answered by a youth where the elder would not speak.'),
        ] },
        { kind: 'commentary', id: 'mac4-8-answer', html: 'The king expected wavering from youth. Instead, the youngest brother speaks with authority. His answer is not defiance but clarity. He knows whose son he is.' },
        { kind: 'greek', id: 'mac4-8-uios', title: 'Uios — Son; One Who Belongs', script: 'υἱός', translit: '<strong>Uios</strong> · son; one who carries the father\'s name', description: 'To be a uios is to inherit the father\'s identity. The brother\'s loyalty flows from who he is.' },
        { kind: 'christ', id: 'mac4-8-christ2', title: 'Christ Connection — Sons of God', html: 'Jesus said: "If ye continue in my word, then are ye truly my disciples." To belong to God is to be shaped by His will.' },
        { kind: 'carry', html: 'Whose son or daughter are you? What does it mean to carry that identity into a hostile world?' },
        { kind: 'reflection', id: 'mac4-8-fathers', prompt: 'The brother speaks of "the God of our fathers." What inheritance has your faith received from those who came before?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Antiochus brought seven brothers before him. The king said: "Will ye not learn from the old man\'s fate?" But the first brother answered: "We are sons of Abraham. The God of our fathers is alive in us."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 8 · Study Guide',
  },
};
