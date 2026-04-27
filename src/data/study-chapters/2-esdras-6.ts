import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_6: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 6,

  intros: [
    'In a new vision, Ezra perceives the order of creation—the heavens and earth brought forth in their proper sequence. Yet even as creation stands complete, it is sealed. The present age is fixed; the age to come awaits.',
    'The vision holds creation and redemption together: the world was made good, yet it is not final. God has prepared an end to this age and a new beginning.',
  ],

  sections: [
    {
      ref: '2 Esdras 6:1–6',
      title: 'The Order of Creation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'And the Lord said unto me, On the second day thou didst command the firmament to be made.'),
            plain(2, 'And on the third day thou didst command the earth to appear.'),
            plain(3, 'And thou didst separate the waters, and the earth didst thou command to bring forth every kind of herb.'),
            plain(5, 'So stood all the works of the creation until the seventh day, and all things were made.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras6-creation',
          html:
            'God reviews the creation with Ezra in orderly progression. Each day builds upon the last. The pattern is one of intentionality and care. The world was not made by accident but by divine word and wisdom.',
        },
        {
          kind: 'hebrew',
          id: 'esdras6-maasim',
          title: 'Maasim—Works',
          script: 'מַעֲשִׂים',
          translit: '<strong>Maasim</strong> · works; deeds; creations',
          description: 'God&apos;s maasim are the visible evidence of His power and intention. They testify to His glory and order.',
        },
        {
          kind: 'christ',
          id: 'esdras6-christ-order',
          title: 'Christ Connection—All Things Held Together',
          html:
            'Jesus sustains all creation by His power. The order Ezra perceives is maintained by His constant presence. He is the Logos, the Word through which all things hold their meaning.',
        },
        {
          kind: 'carry',
          html:
            'The world you inhabit is not random or chaotic. It reflects divine order and wisdom. You are placed within a cosmos ordered by God, sustained by His power. You belong within this creation.',
        },
        {
          kind: 'reflection',
          id: 'esdras6-order',
          prompt: 'Where do you see God&apos;s order and wisdom in creation? How does this affect your sense of place and purpose?',
        },
      ],
    },

    {
      ref: '2 Esdras 6:17–28',
      title: 'The World Sealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(17, 'And the Lord said, Thou hast seen right. For this world is made for this age only.'),
            plain(18, 'But the age to come is prepared for those that love righteousness.'),
            plain(22, 'Behold, the days are sealed, and the mystery of the Most High is locked up.'),
            plain(28, 'Yet they that shall be saved shall see the salvation of the Lord in that coming age.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras6-sealed',
          html:
            'This world has boundaries. It is not eternal but preparatory. The present age is sealed—its duration fixed. Yet beyond the seal lies another age, prepared for the righteous. The mystery is hidden but not abandoned.',
        },
        {
          kind: 'greek',
          id: 'esdras6-mysterion',
          title: 'Mysterion—Mystery',
          script: 'μυστήριον',
          translit: '<strong>Mysterion</strong> · mystery; secret; hidden purpose',
          description: 'God&apos;s mysterion is not confusion but a secret plan revealed only to those with faith to receive it. It is the wisdom hidden from the foundation of the world but now unveiled.',
        },
        {
          kind: 'christ',
          id: 'esdras6-christ-mystery',
          title: 'Christ Connection—The Mystery Revealed',
          html:
            'Jesus is the revelation of God&apos;s mystery. In Him, the secret purposes hidden from ages past become visible. He is the bridge between this age and the age to come.',
        },
        {
          kind: 'carry',
          html:
            'You live in a sealed age with a hidden purpose. Yet that purpose is not beyond reach. It is made known through faith in Christ. Trust that God&apos;s mystery works toward your salvation.',
        },
        {
          kind: 'reflection',
          id: 'esdras6-coming',
          prompt: 'What does it mean to live knowing that this age is not final? How does hope for the coming age affect how you live now?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'This world is made for this age only. But the age to come is prepared for those that love righteousness.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 6 · Study Guide',
  },

  hasHebrew: true,
};
