import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 9 — The Fifth and Sixth Trumpets
 *
 * The fifth trumpet opens the abyss, and locusts emerge—tormentors, not
 * killers. The sixth trumpet releases four angels bound at the Euphrates,
 * leading an army of two hundred million. Yet even in the face of these
 * horrors, many refuse to repent.
 */
export const REVELATION_9: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 9,

  intros: [
    'The trumpets intensify. The fifth and sixth trumpet blasts release forces of darkness—first locusts that torment, then an army beyond counting. Yet the terrifying thing is not the locusts or the army. It is that people witness these horrors and refuse to repent. They do not turn from idols, from sorcery, from murder.',
    'This is the hardness of the human heart. Even judgment does not break it. Even the revelation of the invisible world—the demonic horde—does not shake people from their rebellion.',
  ],

  sections: [
    {
      ref: 'Revelation 9:1–12',
      title: 'The Fifth Trumpet: Locusts from the Abyss',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'And the fifth angel sounded, and I saw a star fall from heaven unto the earth: and to him was given the key of the bottomless pit.'),
            plain(2, 'And he opened the bottomless pit; and there arose a smoke out of the pit, as the smoke of a great furnace; and the sun and the air were darkened by reason of the smoke of the pit.'),
            plain(3, 'And there came out of the smoke locusts upon the earth: and unto them was given power, as the scorpions of the earth have power.'),
            plain(4, 'And it was commanded them that they should not hurt the grass of the earth, neither any green thing, neither any tree; but only those men which have not the seal of God in their foreheads.'),
            plain(5, 'And to them it was given that they should not kill them, but that they should be tormented five months: and their torment was as the torment of a scorpion, when he striketh a man.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev9-locusts',
          html:
            'The abyss is opened. Demons are released—described as locusts, a plague without precedent. But they have limits. They are not permitted to touch the grass or trees. They cannot touch those sealed with God&apos;s seal. They can torment, but not kill. Even the demonic horde operates under God&apos;s restriction.',
        },
        {
          kind: 'greek',
          id: 'rev9-abyssos',
          title: 'Abyssos — Abyss',
          script: 'ἄβυσσος',
          translit: '<strong>Abyssos</strong> · abyss; bottomless pit; the realm of demons',
          description:
            'The abyss is the place of imprisonment for demonic forces. It is not eternal hell, but a holding place. The abyss represents the spiritual reality beneath the visible world—the realm of rebellion and darkness.',
        },
        {
          kind: 'christ',
          id: 'rev9-christ-authority',
          title: 'Christ Connection — All Authority in Heaven and Earth',
          html:
            'The key to the abyss is given to an angel. Ultimately, all keys belong to Christ. He permits the opening. He sets the limits. Even the demonic realm operates under His sovereignty.',
        },
        {
          kind: 'carry',
          html:
            'The invisible world is more real than the visible. Demons exist. Their hatred is directed at those who bear God&apos;s seal. Yet the seal protects. You are marked as God&apos;s own. The locusts cannot touch you.',
        },
        {
          kind: 'reflection',
          id: 'rev9-abyss-sealed',
          prompt: 'How does knowing that you are sealed by God change how you respond to spiritual opposition?',
        },
      ],
    },

    {
      ref: 'Revelation 9:13–21',
      title: 'The Sixth Trumpet: The Army at the Euphrates',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(13, 'And the sixth angel sounded, and I heard a voice from the four horns of the golden altar which is before God,'),
            plain(14, 'Saying to the sixth angel which had the trumpet, Loose the four angels which are bound in the great river Euphrates.'),
            plain(15, 'And the four angels were loosed, which were prepared for an hour, and a day, and a month, and a year, for to slay the third part of men.'),
            plain(16, 'And the number of the army of the horsemen were two hundred thousand thousand: and I heard the number of them.'),
            plain(20, 'And the rest of the men which were not killed by these plagues yet repented not of the deeds of their hands, that they should not worship devils, and idols of gold, and silver, and brass, and stone, and of wood: which neither can see, nor hear, nor walk:'),
            plain(21, 'Neither repented they of their murders, nor of their sorceries, nor of their fornication, nor of their thefts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev9-army',
          html:
            'Four angels are loosed at the Euphrates—angels of judgment, prepared for this hour. They lead an army of two hundred million horsemen. A third of mankind is killed. Yet those who survive do not repent. They continue in idolatry, sorcery, murder, theft. The human heart is hardened by something deeper than judgment.',
        },
        {
          kind: 'greek',
          id: 'rev9-metanoia',
          title: 'Metanoia — Repentance',
          script: 'μετάνοια',
          translit: '<strong>Metanoia</strong> · repentance; turning around; change of mind',
          description:
            'Metanoia is not regret. It is not sorrow for being caught. It is a turning, a fundamental change of mind and direction. The survivors do not metanoia. They do not turn.',
        },
        {
          kind: 'christ',
          id: 'rev9-christ-repent',
          title: 'Christ Connection — The Call to Repentance',
          html:
            'Judgment without repentance is tragedy. Christ calls people to turn. Yet many will not. They will face plague after plague and refuse to return. This is the freedom God grants—the freedom to reject Him, even unto the end.',
        },
        {
          kind: 'carry',
          html:
            'What will it take for you to repent? Will you wait until judgment falls? Turn now. Turn freely. Turn to Christ. Do not harden your heart like those who refuse even in the face of the abyss opened.',
        },
        {
          kind: 'reflection',
          id: 'rev9-repent-now',
          prompt: 'What idols, what practices, what deeds of your hands is God calling you to turn from? Why wait for judgment?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The rest of the men which were not killed by these plagues yet repented not of the deeds of their hands, that they should not worship devils, and idols of gold, and silver, and brass, and stone, and of wood.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 9 · Study Guide',
  },

  hasHebrew: false,
};
