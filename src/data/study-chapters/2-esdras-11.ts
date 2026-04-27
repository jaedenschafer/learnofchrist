import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_11: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 11,

  intros: [
    'In a symbolic vision, Ezra sees an eagle with twelve wings rising from the sea. The eagle is often read as the Roman Empire—vast, powerful, menacing. Yet the vision is not final prediction but invitation to discernment.',
    'The chapter calls readers to perceive the times: empires rise and fall according to divine permission, not chance. History is God&apos;s narrative, moving toward a redemptive conclusion.',
  ],

  sections: [
    {
      ref: '2 Esdras 11:1–12',
      title: 'The Eagle Vision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(1, 'And I saw in the night visions, and behold, there came up from the sea an eagle, mighty and terrible.'),
            plain(3, 'And it had twelve wings, and three heads, and it held dominion over all the earth.'),
            plain(5, 'And I said, What meaneth this vision? And the angel said unto me, This is the power that ruleth in thy days.'),
            plain(12, 'But know that this dominion shall not endure for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-eagle',
          html:
            'The eagle represents worldly power—wealth, military strength, dominion. It appears invincible. Yet the angel&apos;s message is clear: this dominion, though terrible and vast, is not permanent. God alone is eternal.',
        },
        {
          kind: 'hebrew',
          id: 'esdras11-nesher',
          title: 'Nesher—Eagle',
          script: 'נֶשֶׁר',
          translit: '<strong>Nesher</strong> · eagle; power; dominion',
          description: 'The eagle symbolizes power and vision. In Scripture, God&apos;s strength is compared to eagle&apos;s wings. Here, the eagle represents corrupted power—dominion used for conquest, not righteousness.',
        },
        {
          kind: 'christ',
          id: 'esdras11-christ-kingdom',
          title: 'Christ Connection—An Eternal Kingdom',
          html:
            'Jesus announces that His kingdom is not of this world. Where the eagle represents temporal power that will fall, Christ offers eternal kingship. His dominion shall have no end.',
        },
        {
          kind: 'carry',
          html:
            'Do not be intimidated by earthly powers, however vast. They are not ultimate. God has determined their end. Your allegiance belongs to the One whose kingdom is eternal.',
        },
        {
          kind: 'reflection',
          id: 'esdras11-power',
          prompt: 'What earthly powers intimidate you? How does the promise that they are temporary change your perspective?',
        },
      ],
    },

    {
      ref: '2 Esdras 11:37–46',
      title: 'The Limit of Dominion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(37, 'Thus shall the eagle be no more, and her wings shall fail.'),
            plain(39, 'And I saw the earth open, and swallow her.'),
            plain(42, 'And there shall be silence in heaven, and the angel said, This is the ending of the eagle&apos;s reign.'),
            plain(46, 'But a greater power shall rise, and it shall be the power of righteousness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-fall',
          html:
            'The vision shows the eagle&apos;s inevitable fall. Not through external conquest but through the judgment of God. The earth itself swallows her. Then silence—and a new power arising, rooted in righteousness rather than dominion.',
        },
        {
          kind: 'greek',
          id: 'esdras11-dikaiosyne',
          title: 'Dikaiosyne—Righteousness',
          script: 'δικαιοσύνη',
          translit: '<strong>Dikaiosyne</strong> · righteousness; justice; right living',
          description: 'True power flows from righteousness, not conquest. God&apos;s dikaiosyne is His just rule, which endures while all other powers fall.',
        },
        {
          kind: 'christ',
          id: 'esdras11-christ-rise',
          title: 'Christ Connection—The Righteous One',
          html:
            'Christ is the power of righteousness. He does not conquer by sword but by truth. His kingdom grows not through intimidation but through transformation of hearts.',
        },
        {
          kind: 'carry',
          html:
            'Invest your hope in righteousness, not in earthly power. The kingdoms of this world will fall. Only the kingdom of God, built on justice and truth, shall stand eternally.',
        },
        {
          kind: 'reflection',
          id: 'esdras11-righteous',
          prompt: 'Where do you invest your hope and trust? Are you building on the unstable foundation of earthly power or on the rock of God&apos;s righteousness?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And I saw in the night visions, and behold, there came up from the sea an eagle, mighty and terrible. But know that this dominion shall not endure for ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 11 · Study Guide',
  },

  hasHebrew: true,
};
