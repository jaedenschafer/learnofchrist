import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 6 — The Six Seals
 *
 * The Lamb opens the seals one by one. The first four release the four
 * horsemen—conquest, war, famine, death. The fifth reveals souls beneath the
 * altar crying for justice. The sixth shakes the cosmos. Each seal reveals
 * a stage of God&apos;s judgment in history.
 */
export const REVELATION_6: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 6,

  intros: [
    'The scroll begins to open. With each breaking seal, a vision unfolds. These are not scenes of random chaos but of judgment—God&apos;s response to sin and rebellion. The horsemen ride not for their own pleasure but under God&apos;s authority. The souls under the altar cry out for justice, and they are told: wait a little longer.',
    'The sixth seal shakes the very foundations of creation—the sun blackens, the moon becomes blood, the stars fall, the sky rolls back. Yet in the midst of terror, a question emerges: "Who shall be able to stand?"',
  ],

  sections: [
    {
      ref: 'Revelation 6:1–8',
      title: 'The Four Horsemen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'And I saw when the Lamb opened one of the seals, and I heard, as it were the noise of thunder, one of the four beasts saying, Come and see.'),
            plain(2, 'And I saw, and behold a white horse: and he that sat on him had a bow; and a crown was given unto him: and he went forth conquering, and to conquer.'),
            plain(3, 'And when he had opened the second seal, I heard the second beast say, Come and see.'),
            plain(4, 'And there went out another horse that was red: and power was given to him that sat thereon to take peace from the earth, and that they should kill one another: and there was given unto him a great sword.'),
            plain(5, 'And when he had opened the third seal, I heard the third beast say, Come and see. And I beheld, and lo a black horse; and he that sat on him had a pair of balances in his hand.'),
            plain(8, 'And I looked, and behold a pale horse: and his name that sat on him was Death, and Hell followed with him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev6-horsemen',
          html:
            'The four horsemen are not loose agents of chaos. Each rides forth at the command of the Lamb. They represent conquest (or the false messiah), war, famine, and death—the judgment of God working through human history. They are not random calamities but the consequences of human rebellion against God.',
        },
        {
          kind: 'greek',
          id: 'rev6-hippos',
          title: 'Hippos — Horse',
          script: 'ἵππος',
          translit: '<strong>Hippos</strong> · horse; mount; instrument of power',
          description:
            'The horse in ancient literature represents power and dominion. The four horsemen ride under God&apos;s authority. They represent the outworking of God&apos;s judgment in the affairs of nations and peoples.',
        },
        {
          kind: 'christ',
          id: 'rev6-christ-judge',
          title: 'Christ Connection — Judge of All',
          html:
            'The Lamb opens the seals. This is His prerogative as King and Judge. The judgments are not arbitrary but reflect the moral order of creation. The consequences of sin are real. Yet Christ also shows restraint—the seals are not all opened at once. There is a pause before the final judgment.',
        },
        {
          kind: 'carry',
          html:
            'History is not meaningless or chaotic. God is not absent. The seals open according to His purpose. Yet none of this negates human responsibility or the call to righteousness. Live faithfully, not in fear of the horsemen, but in trust of the One who controls them.',
        },
        {
          kind: 'reflection',
          id: 'rev6-horsemen-judgment',
          prompt: 'What do the four horsemen represent in your own time? How do you see God&apos;s judgment working through human history?',
        },
      ],
    },

    {
      ref: 'Revelation 6:9–17',
      title: 'Souls Under the Altar and the Shaking of Heaven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(9, 'And when he had opened the fifth seal, I saw under the altar the souls of them that were slain for the word of God, and for the testimony which they held:'),
            plain(10, 'And they cried with a loud voice, saying, How long, O Lord, holy and true, dost thou not judge and avenge our blood on them that dwell on the earth?'),
            plain(11, 'And white robes were given unto every one of them; and it was said unto them, that they should rest yet for a little season, until their fellowservants also and their brethren, that should be killed as they were, should be fulfilled.'),
            plain(12, 'And I beheld when he had opened the sixth seal: and, lo, there was a great earthquake; and the sun became black as sackcloth of hair, and the moon became as blood;'),
            plain(14, 'And the heaven departed as a scroll when it is rolled together; and every mountain and island were moved out of their places.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev6-martyrs',
          html:
            'The souls of the martyrs cry out for justice. They have been killed for the word of God. They do not cry for personal vengeance, but for God to vindicate His word. They are given white robes—the sign of victory—and told to rest. More martyrs are coming. Judgment is coming. But not yet.',
        },
        {
          kind: 'greek',
          id: 'rev6-martys',
          title: 'Martys — Martyr',
          script: 'μάρτυς',
          translit: '<strong>Martys</strong> · witness; martyr; one who testifies at cost of life',
          description:
            'A martys is a witness. The word comes from testimony—one who testifies. Christian martyrs are those who witnessed to Christ even unto death. Their witness does not end with their death. They cry out. They are remembered. Their blood cries for justice.',
        },
        {
          kind: 'christ',
          id: 'rev6-christ-avenge',
          title: 'Christ Connection — The Judge of the Earth',
          html:
            'Christ hears the cry of the martyrs. He does not dismiss it. Yet He calls for patience. The full number of martyrs must be fulfilled. All the witnesses must complete their testimony. Then judgment comes.',
        },
        {
          kind: 'carry',
          html:
            'To the persecuted church: your suffering is seen. Your witness is remembered. God will judge. Wait. Be patient. The white robe awaits. When the sixth seal opens, creation itself convulses. The end is coming.',
        },
        {
          kind: 'reflection',
          id: 'rev6-cry-justice',
          prompt: 'What does it mean that the martyrs cry out for justice? How do you understand God&apos;s timing in bringing justice?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The souls of them that were slain for the word of God cried with a loud voice, saying, How long, O Lord, holy and true, dost thou not judge and avenge our blood?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 6 · Study Guide',
  },

  hasHebrew: false,
};
