import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_9: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 9,

  intros: [
    'A vision appears to Ezra: a woman mourning her only son. She weeps, tears streaming, her grief inconsolable. The image haunts him—a mother&apos;s sorrow is the deepest human suffering.',
    'Yet this vision carries hidden meaning. The woman is not merely a human mother. She represents something far greater—the grief of Zion itself, awaiting redemption.',
  ],

  sections: [
    {
      ref: '2 Esdras 9:38–47',
      title: 'The Woman&apos;s Lament',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(38, 'And I beheld, and lo, there was a woman in the night, and her countenance was sorrowful.'),
            plain(40, 'And she said, I am become a widow, for my only son is dead.'),
            plain(42, 'My tears fail not, for I cannot cease to mourn.'),
            plain(47, 'And she wept sore, and all the earth echoed with her mourning.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras9-woman',
          html:
            'The woman represents ultimate grief—the loss of an only child. She is inconsolable. Her mourning echoes through all creation. This vision captures something true about human sorrow: some losses pierce to the heart of existence.',
        },
        {
          kind: 'hebrew',
          id: 'esdras9-even',
          title: 'Even—Stone',
          script: 'אֶבֶן',
          translit: '<strong>Even</strong> · stone; hardness',
          description: 'Grief can turn a human heart to stone. Yet even stone can be moved by tears. The woman&apos;s weeping is real, physical, undeniable.',
        },
        {
          kind: 'christ',
          id: 'esdras9-christ-sorrow',
          title: 'Christ Connection—The Man of Sorrows',
          html:
            'Jesus is called a man of sorrows, acquainted with grief. He entered human sorrow at its deepest point and transformed it through His resurrection. His own death and rising become the answer to the woman&apos;s grief.',
        },
        {
          kind: 'carry',
          html:
            'This vision honors real grief. It does not minimize loss or offer false comfort. Yet it sets grief in a larger narrative—one in which mourning is not the final word.',
        },
        {
          kind: 'reflection',
          id: 'esdras9-grieve',
          prompt: 'What losses have you suffered that feel inconsolable? Can you bring that grief to God, as the woman brings her tears?',
        },
      ],
    },

    {
      ref: '2 Esdras 9:47–50',
      title: 'The Mystery',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(47, 'And as she wept, I understood not her sorrow, yet her tears moved me deeply.'),
            plain(48, 'And she said unto me, Know me not, for I am a sign from the Highest.'),
            plain(49, 'In her suffering lies the suffering of Jerusalem.'),
            plain(50, 'Yet she shall be comforted.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras9-mystery',
          html:
            'The woman&apos;s tears are more than grief. She is Zion mourning her separation from God. Yet even as she weeps, a promise is embedded: "she shall be comforted." Redemption awaits the city.',
        },
        {
          kind: 'greek',
          id: 'esdras9-parakaleo',
          title: 'Parakaleo—Comfort',
          script: 'παρακαλέω',
          translit: '<strong>Parakaleo</strong> · comfort; console; encourage',
          description: 'Comfort is not mere consolation but encouragement—the restoration of hope and life. God comes alongside the mourner to lift them up.',
        },
        {
          kind: 'christ',
          id: 'esdras9-christ-comfort',
          title: 'Christ Connection—The Comforter',
          html:
            'In Christ, Zion finds her comfort. The Beloved returns. The separation is healed. He is the Answer to Jerusalem&apos;s tears—and to yours.',
        },
        {
          kind: 'carry',
          html:
            'Your sorrow matters to God. He does not dismiss it. Yet He has promised comfort. The tears are real, but they are not final. Redemption comes.',
        },
        {
          kind: 'reflection',
          id: 'esdras9-comforted',
          prompt: 'How do you experience the comfort of God in your sorrow? What would it look like for your weeping to turn to hope?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And she said, I am become a widow, for my only son is dead. My tears fail not, for I cannot cease to mourn.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 9 · Study Guide',
  },

  hasHebrew: true,
};
