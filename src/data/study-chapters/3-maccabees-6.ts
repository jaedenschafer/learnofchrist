import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const THIRD_MACCABEES_6: RichChapterContent = {
  bookSlug: '3-maccabees',
  bookName: '3 Maccabees',
  chapter: 6,
  intros: [
    'In the darkness of the hippodrome, before the elephants turn, Eleazar the priest lifts his voice. His prayer is the deepest intercession—not for himself, but for his people.',
    'As his prayer rises, two angels appear, visible only to him. They stand with him in the moment of greatest peril. His prayer becomes the turning point.',
  ],
  sections: [
    {
      ref: '3 Maccabees 6:1–17',
      title: 'Eleazar\'s Prayer of Intercession',
      blocks: [
        { kind: 'scripture', chapter: 6, lines: [
          plain(3, 'And Eleazar the priest lifted up his hands to heaven, and cried with a loud voice, saying, O Lord God, Thou seest our affliction.'),
          plain(4, 'Remember Thy covenant with Abraham, with Isaac, and with Jacob. Save us from this great tribulation, not for our sake, but for Thy name.'),
          plain(14, 'And behold, two men appeared in shining garments, and they stood beside Eleazar, saying, Fear not.'),
        ] },
        { kind: 'commentary', id: 'mac3-6-eleazar', html: 'Eleazar does not pray for safety; he prays for God\'s honor. His intercession appeals not to his own righteousness, but to God\'s covenant. Angels appear—God\'s answer is presence itself.' },
        { kind: 'hebrew', id: 'mac3-6-brith', title: 'Brit — Covenant; Agreement', script: 'בְרִית', translit: '<strong>Brit</strong> · covenant; binding agreement', description: 'A brit is not a contract but a binding relationship. Eleazar appeals to the brit—the bond between God and Abraham\'s children.' },
        { kind: 'christ', id: 'mac3-6-christ', title: 'Christ Connection — Intercession for the World', html: 'Jesus intercedes before the Father: "I pray not for these alone, but for all who believe through their word." His prayer covers all humanity.' },
        { kind: 'carry', html: 'Will you pray not for yourself, but for God\'s honor? For the salvation of others? How does intercessory prayer change your heart?' },
        { kind: 'reflection', id: 'mac3-6-angels', prompt: 'Angels appeared to Eleazar. What does it mean to sense God\'s presence with you in prayer? How is that presence real?' },
      ],
    },
    {
      ref: '3 Maccabees 6:18–35',
      title: 'Heavenly Presence in Earthly Darkness',
      blocks: [
        { kind: 'scripture', chapter: 6, lines: [
          plain(18, 'And Eleazar perceived that his prayer was heard, and the Lord was with him.'),
          plain(21, 'And all the Jews saw the two men in shining garments standing beside Eleazar, though they could not speak.'),
          plain(32, 'And at that moment, the Lord showed His power, and the elephants turned upon those who would have harmed His people.'),
        ] },
        { kind: 'commentary', id: 'mac3-6-perception', html: 'Eleazar perceives God\'s answer before it is visible. He knows, at that moment, that he is not alone. Yet the people see the angels—proof that his prayer has opened heaven.' },
        { kind: 'greek', id: 'mac3-6-doxes', title: 'Doxa — Glory; Manifestation', script: 'δόξα', translit: '<strong>Doxa</strong> · glory; manifest presence', description: 'God\'s doxa is His presence made visible. When Eleazar prays, the doxa becomes apparent even to those watching.' },
        { kind: 'christ', id: 'mac3-6-christ2', title: 'Christ Connection — The Glory of God', html: 'In Jesus, the full doxa of God is revealed. He is the manifest presence of the invisible God.' },
        { kind: 'carry', html: 'When you pray, do you sense that you are heard? That heaven attends to your intercession? What would it mean to trust that?' },
        { kind: 'reflection', id: 'mac3-6-moment', prompt: 'At a single moment, everything turned. What moments in your life have been turning points? How did prayer precede them?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Eleazar the priest cried out: "O Lord God, Thou seest our affliction. Remember Thy covenant. Save us for Thy name." And two angels in shining garments appeared beside him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '3 Maccabees 6 · Study Guide',
  },
};
