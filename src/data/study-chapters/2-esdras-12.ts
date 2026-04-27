import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_12: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 12,
  intros: [
    'In a vision, Ezra sees an eagle—symbol of earthly empire. A lion rises to confront it, speaking with a human voice. This is the Messiah, the anointed judge.',
    'As the lion speaks, the eagle crumbles. Ezra weeps at the destruction, yet understands: God&apos;s kingdom comes not by might, but by righteousness.',
  ],
  sections: [
    {
      ref: '2 Esdras 12:1–13',
      title: 'The Eagle\'s Vision',
      blocks: [
        { kind: 'scripture', chapter: 12, lines: [
          plain(1, 'And it came to pass when I had finished speaking, that the eagle rose up from his place, and said unto me:'),
          plain(7, 'Thou hast seen the eagle, which thou didst see rise up from the sea.'),
          plain(11, 'And whereas thou sawest that the strong lion came forth out of the wood, and spake to the eagle, and rebuked her for her unrighteousness; this is the anointed one.'),
        ] },
        { kind: 'commentary', id: 'esd12-eagle', html: 'The eagle represents the kingdoms of this world, grown bloated with power. Its wings and heads multiply, yet all are empty of justice. The vision shows not conquest, but reckoning.' },
        { kind: 'hebrew', id: 'esd12-mashiah', title: 'Mashiah — The Anointed', script: 'מָשִׁיחַ', translit: '<strong>Mashiah</strong> · anointed; messiah', description: 'The anointed one is God&apos;s chosen judge, set apart to execute justice and restore what empires destroyed.' },
        { kind: 'christ', id: 'esd12-christ', title: 'Christ Connection — The Lion Who Judges', html: 'Ezra sees the Messiah as a lion confronting the eagle. In the gospels, Jesus is the Lion of Judah who will judge all nations and establish God&apos;s eternal kingdom.' },
        { kind: 'carry', html: 'The lion speaks truth that the eagle does not want to hear. Who are you willing to hear? What truth from God might your life resist?' },
        { kind: 'reflection', id: 'esd12-mighty', prompt: 'What does it mean that the Messiah comes not as a mighty emperor, but as one who rebukes injustice? How does this reshape your understanding of God&apos;s power?' },
      ],
    },
    {
      ref: '2 Esdras 12:14–39',
      title: 'The Eagle\'s Destruction',
      blocks: [
        { kind: 'scripture', chapter: 12, lines: [
          plain(14, 'The eagle thou sawest coming up from the sea, is the kingdom which was seen in the vision of thy brother Daniel.'),
          plain(31, 'And whereas the eagle was smitten and destroyed, and all the earth was full of the dread of her, the whole creation shall be amazed.'),
          plain(34, 'Wherefore weep and sorrow: for the high God hath not yet shewed the end of his designs.'),
        ] },
        { kind: 'commentary', id: 'esd12-weeping', html: 'Ezra weeps not for the eagle\'s fall, but for the suffering of nations caught in its shadow. Yet he is told: the end is not yet shown. Faith means trusting God&apos;s designs even when tears come.' },
        { kind: 'greek', id: 'esd12-telos', title: 'Telos — The End; Purpose', script: 'τέλος', translit: '<strong>Telos</strong> · end; completion; purpose', description: 'God&apos;s telos is both the end of earthly kingdoms and the fulfillment of all He has planned. Believers await its revealing.' },
        { kind: 'christ', id: 'esd12-christ2', title: 'Christ Connection — The Judge Who Weeps', html: 'Jesus sees Jerusalem&apos;s destruction and weeps. Like Ezra, He grieves over the suffering of the lost, even as He executes judgment.' },
        { kind: 'carry', html: 'You are invited into God&apos;s sorrow—not despair, but compassion for those who resist Him. What would it mean to weep with God over injustice?' },
        { kind: 'reflection', id: 'esd12-designs', prompt: 'Ezra is told: "the high God hath not yet shewed the end of his designs." What does it mean to trust in God\'s purposes when you cannot see them?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'A strong lion came forth out of the wood, and spake to the eagle, and rebuked her for her unrighteousness: this is the anointed one.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 12 · Study Guide',
  },
};
