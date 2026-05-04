import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezekiel 28 — The King of Tyre and the Fall of Satan
 *
 * Ezekiel addresses the "prince of Tyrus" first, then the "king of Tyrus."
 * The language shifts from earthly ruler to cosmic being. "Thou hast been in
 * Eden the garden of God...thou wast perfect in thy ways from the day that
 * thou wast created, till iniquity was found in thee." The text moves from the
 * historical king to the spiritual being behind him. Theologians have long read
 * this passage as describing Satan&apos;s fall: a created being of surpassing
 * beauty, corrupted by pride. "Thine heart was lifted up because of thy beauty,
 * thou hast corrupted thy wisdom by reason of thy brightness." And the promise:
 * Christ, in Colossians, defeated the principalities and powers. The victory
 * over Tyre is part of a larger victory over the spiritual forces at work
 * through worldly pride.
 */
export const EZEKIEL_28: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 28,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  topicTags: ['judgment', 'glory', 'hope', 'second-coming'],
  opener: {
    topical: true,
    caption: 'Ezekiel 28',
  },
  intros: [
    'Ezekiel 28 moves from the external judgment of Tyre to a deeper revelation. The chapter addresses first the "prince of Tyrus"—the earthly ruler—and then the "king of Tyrus." The language of the second address shifts from political to cosmic. The being addressed has been "in Eden the garden of God," was "perfect in thy ways," wore "every precious stone" as covering. This is not typical language for a historical king.',
    'Theologians and commentators have long understood this passage as revealing the spiritual reality behind earthly powers. The king of Tyre is possessed by or embodies the spirit of pride and rebellion. And that spirit—once perfect, now corrupted—is the father of all earthly pride. The fall of Tyre is a sign of the defeat of the spiritual powers that inspire human rebellion against God.',
  ],

  sections: [
    {
      ref: 'Ezekiel 28:1–10',
      title: 'The Prince of Tyre Judged',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(2, 'Son of man, say unto the prince of Tyrus, Thus saith the Lord God; Because thine heart is lifted up, and thou hast said, I am a God, I sit in the seat of God, in the midst of the seas; yet thou art a man, and not God, though thou settest thine heart as the heart of God:'),
            plain(3, 'Behold, thou art wiser than Daniel; there is no secret that they can hide from thee:'),
            plain(5, 'By thy great wisdom and by thy traffick hast thou increased thy riches: and thine heart is lifted up because of thy riches:'),
            plain(8, 'Therefore thus saith the Lord God; Because thou hast set thine heart as the heart of God;'),
            plain(9, 'Behold, therefore I will bring strangers upon thee, the terrible of the nations: and they shall draw their swords against the beauty of thy wisdom, and they shall defile thy brightness.'),
            plain(10, 'They shall bring thee down to the pit, and thou shalt die the deaths of them that are slain in the midst of the seas.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek28-prince-heart',
          html: 'The prince of Tyre "hath said, I am a God, I sit in the seat of God." His heart is lifted up. He has become wise through his trading and accumulated such riches that he believes himself divine. This is the fundamental sin: the usurpation of God&apos;s seat, the claim to be what only God is. Tyre&apos;s king mistakes his wisdom and wealth for divinity[res:babylonian-exile-context].',
        },
        {
          kind: 'commentary',
          id: 'ezek28-pride',
          html: '"Thine heart is lifted up because of thy riches." Wealth becomes a kind of religion. It creates the illusion of self-sufficiency, of power independent of God. The king believes he is answerable to no one. But God promises judgment: "I will bring strangers upon thee, the terrible of the nations: and they shall draw their swords against the beauty of thy wisdom."[res:bibleodyssey-ezekiel]',
        },
        {
          kind: 'hebrew',
          id: 'ezek28-heart-lev',
          title: 'Lev — "Heart" (Center, Core Self)',
          script: 'לֵב',
          translit: '<strong>Lev</strong> · heart; the center of will, wisdom, and emotion',
          description:
            'In Hebrew, the lev (heart) is the seat of decision, intention, and spiritual orientation. When Tyre&apos;s heart is "lifted up," it means her entire core—her will, her sense of self—has become oriented toward pride and self-deification.',
        },
        {
          kind: 'reflection',
          id: 'ezek28-heart-lifted',
          prompt: 'When has your heart been "lifted up" because of success or riches? How did that affect your sense of dependence on God?',
        },
      ],
    },

    {
      ref: 'Ezekiel 28:11–19',
      title: 'The King of Tyre—A Cosmic Rebellion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(12, 'Son of man, take up a lamentation upon the king of Tyrus, and say unto him, Thus saith the Lord God; Thou sealest up the sum, full of wisdom, and perfect in beauty.'),
            plain(13, 'Thou hast been in Eden the garden of God; every precious stone was thy covering, the sardius, topaz, and the diamond, the beryl, the onyx, and the jasper, the sapphire, the emerald, and the carbuncle, and gold: the workmanship of thy tabrets and of thy pipes was prepared in thee in the day that thou wast created.'),
            plain(14, 'Thou art the anointed cherub that covereth; and I have set thee so: thou wast upon the holy mountain of God; thou hast walked up and down in the midst of the stones of fire.'),
            plain(15, 'Thou wast perfect in thy ways from the day that thou wast created, till iniquity was found in thee.'),
            plain(16, 'By the multitude of thy merchandise they have filled the midst of thee with violence, and thou hast sinned: therefore I will cast thee as profane out of the mountain of God: and I will destroy thee, O covering cherub, from the midst of the stones of fire.'),
            plain(17, 'Thine heart was lifted up because of thy beauty, thou hast corrupted thy wisdom by reason of thy brightness: I will cast thee to the ground, I will lay thee before kings, that they may behold thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek28-eden',
          html: 'The language now moves to cosmic mythology. The king of Tyre "hath been in Eden the garden of God." He is "the anointed cherub that covereth"—one of the highest order of heavenly beings, stationed on "the holy mountain of God." This is not earthly language. This is the description of a supernatural being corrupted by pride. "Thou wast perfect in thy ways from the day that thou wast created, till iniquity was found in thee."[res:tyre-archaeology]',
        },
        {
          kind: 'commentary',
          id: 'ezek28-fall',
          html: 'The fall comes through pride in beauty and wisdom. "Thine heart was lifted up because of thy beauty, thou hast corrupted thy wisdom by reason of thy brightness." The being was created perfect, adorned with every precious stone, filled with music and glory. But this very perfection became the occasion for pride. He began to believe in his own divinity. "Therefore I will cast thee as profane out of the mountain of God...I will cast thee to the ground, I will lay thee before kings, that they may behold thee."',
        },
        {
          kind: 'christ',
          id: 'ezek28-christ-victory',
          title: 'Christ Connection — Principalities and Powers Defeated',
          html: 'Paul writes in Colossians 2:15 that Christ, in His resurrection, "spoiled principalities and powers...making a shew of them openly, triumphing over them in it." The cosmic rebellion described in Ezekiel 28—the fall of the created being who tried to usurp God&apos;s throne—is overcome by Christ. Every earthly manifestation of this spiritual pride—every Tyre, every human kingdom built on power and self-deification—is ultimately subject to Christ&apos;s lordship.',
        },
        {
          kind: 'carry',
          html: 'Behind every earthly power that opposes God stands a spiritual force—the spirit of rebellion that began with Lucifer&apos;s pride in Eden. But that rebellion has been defeated. In Christ, the powers are "spoiled." We need not fear them. What appears strong and invincible is already subject to the One who has conquered all.',
        },
        {
          kind: 'reflection',
          id: 'ezek28-powers',
          prompt: 'Where do you see the spiritual force of pride and self-deification at work in the world? How does it comfort you to know Christ has defeated it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thou wast perfect in thy ways from the day that thou wast created, till iniquity was found in thee...Thine heart was lifted up because of thy beauty, thou hast corrupted thy wisdom by reason of thy brightness.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 28 · Study Guide',
  },  resources: [
    {
      id: 'babylonian-exile-context',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Exile Context',
      url: 'https://www.britishmuseum.org/collection/object/W_Y_EA25091',
      description: 'Cuneiform and archaeological evidence of Babylon under Nebuchadnezzar.',
    },
    {
      id: 'tyre-archaeology',
      kind: 'archaeology',
      source: 'Israel Museum / ToposText',
      label: 'Tyre Archaeology (Ezek 26-28)',
      url: 'https://www.imj.org.il/en',
      description: 'Archaeological record of ancient Tyre, subject of Ezekiel&apos;s prophecies.',
    }
  ],

  hasHebrew: true,
};
