import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 21 — The King's Joy in God's Strength
 *
 * The king rejoices in God's strength and power. "Thou hast given him his
 * heart's desire." Here the psalmist presents a king exalted by God, crowned
 * with glory and honor, whose enemies are overthrown by the strength of the
 * Lord. The psalm moves from the king's rejoicing in his strength to the
 * certain victory he shall experience. This is a psalm of kingly triumph,
 * ultimately finding its fulfillment in Christ the King, exalted at the right
 * hand of God.
 */
export const PSALMS_21: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 21,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Psalm 21 celebrates the strength of a king who has received his heart&apos;s desire from the Lord. This is not a king who trusts in his own arm, but one who rejoices in God&apos;s power working[res:bible-odyssey-kingship-psalms] through him. The psalmist shows us a vision of regal triumph rooted not in earthly conquest, but in the favor and blessing of God.',
  ],

  sections: [
    {
      ref: 'Psalm 21:1–7',
      title: 'The King Rejoices in His Strength',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(1, 'The king shall joy in thy strength, O Lord; and in thy salvation how greatly shall he rejoice!'),
            plain(2, 'Thou hast given him his heart&apos;s desire, and hast not withholden the request of his lips. Selah.'),
            plain(3, 'For thou preventest him with the blessings of goodness: thou settest a crown of pure gold on his head.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-21-78mid-1',
          html:
            'Thanksgiving for what the Lord has done opens into prayer for what the Lord will do. Praise summons trust.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(4, 'He asked life of thee, and thou gavest it him, even length of days for ever and ever.'),
            plain(5, 'His glory is great in thy salvation: honour and majesty hast thou laid upon him.'),
            plain(6, 'For thou hast made him most blessed for ever: thou hast made him exceeding glad with thy countenance.'),
            plain(7, 'For the king trusteth in the Lord, and through the mercy of the most High he shall not be moved.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms21-joy-strength',
          html: 'The king&apos;s joy is rooted not in his own power, but in the Lord&apos;s. This distinction is crucial. Many kings rejoice in their armies, their treasury, their political cunning. But this king rejoices in God&apos;s strength—the inexhaustible source from which all true victory flows. His salvation is the Lord&apos;s doing, and his joy is accordingly secure, untouched by the uncertainties that plague those who trust in themselves.',
        },
        {
          kind: 'hebrew',
          id: 'psalms21-simchah',
          title: 'Simchah — "Joy" (Rejoicing)',
          script: 'שִׂמְחָה',
          translit: '<strong>Simchah</strong> · joy; gladness; a deep state of delight',
          description: 'Simchah is not mere happiness or pleasure. It is a joy that flows from knowing oneself to be favored by God, to be in right relationship with the Almighty. It is the joy that fills the grateful heart. When the king rejoices in God&apos;s strength, he experiences simchah—the deep satisfaction of one who knows his victories are God&apos;s victories, his strength is God&apos;s strength.',
        },
        {
          kind: 'christ',
          id: 'psalms21-christ-king',
          title: 'Christ Connection — The King Exalted',
          html: 'Philippians 2:9–11 reveals the ultimate fulfillment: "God also hath highly exalted him, and given him a name which is above every name: That at the name of Jesus every knee should bow...and that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father." Christ the King has received from His Father the throne, the crown, the honor that this psalm celebrates. His heart&apos;s desire was the redemption of His people, and His Father withheld nothing from Him.',
        },
        {
          kind: 'carry',
          html: 'Where do you place your trust? The king in this psalm teaches a lesson the modern world resists: that true strength and true security come not from yourself, but from your relationship with God. The king asks for life, and receives it. He asks for victory, and it is given. What would change in your life if you learned to find your joy not in your own accomplishments, but in God&apos;s strength working through you?',
        },
        {
          kind: 'reflection',
          id: 'psalms21-trust',
          prompt: 'When have you experienced joy that came from trusting God rather than from your own efforts? What would it mean for you to consciously rejoice in God&apos;s strength today?',
        },
      ],
    },

    {
      ref: 'Psalm 21:8–13',
      title: 'The King&apos;s Enemies Overcome',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(8, 'Thine hand shall find out all thine enemies: thy right hand shall find out those that hate thee.'),
            plain(9, 'Thou shalt make them as a fiery oven in the time of thine anger: the Lord shall swallow them up in his wrath, and the fire shall devour them.'),
            plain(10, 'Their fruit shalt thou destroy from the earth, and their seed from among the children of men.'),
            plain(11, 'For they intended evil against thee: they imagined a mischievous device, which they are not able to perform.'),
            plain(12, 'Therefore shalt thou make them turn their back, when thou shalt make ready thine arrows upon thy strings against the face of them.'),
            plain(13, 'Be thou exalted, Lord, in thine own strength: so will we sing and praise thy power.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms21-enemies-found',
          html: 'The shift is sudden and stark. From blessing the king, the psalm turns to the judgment of his enemies. But this judgment is not the king&apos;s doing. It is God&apos;s work. The Lord&apos;s hand finds them out. The Lord&apos;s right hand discovers them. The imagery is of a God who is both searching judge and executing power. His enemies cannot hide from Him, and when they are found, they face the consuming fire of His wrath.',
        },
        {
          kind: 'commentary',
          id: 'psalms21-intent-evil',
          html: 'Notably, the enemies have "intended evil" and "imagined a mischievous device." They have not merely opposed the king; they have plotted actively against him. Yet their plots come to nothing. They are "not able to perform" their mischief. This is a psalm not of mere victory, but of the reversal of evil intent. The wrath they meant for the king falls upon their own heads.',
        },
        {
          kind: 'carry',
          html: 'The psalm closes with an exaltation of God&apos;s strength. The proper response to witnessing God&apos;s power—His care for His king and His judgment of His enemies—is to "sing and praise thy power." To see God work is to be moved to worship. To understand His strength is to join the chorus of praise that rises eternally before Him.',
        },
        {
          kind: 'reflection',
          id: 'psalms21-sing-praise',
          prompt: 'How do you respond when you see God at work—when good triumphs over evil, when the weak are protected, when injustice is checked? Do you find yourself naturally breaking into praise?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The king shall joy in thy strength, O Lord; and in thy salvation how greatly shall he rejoice!',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 21 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-21',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 21 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.21',
      description: 'Royal thanksgiving with medieval Jewish exegesis.',
    },
    {
      id: 'bible-odyssey-kingship-psalms',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Kingship & Anointing',
      url: 'https://www.bibleodyssey.org/dictionary/royal[res:sefaria-psalms-21]-psalms/',
      description: 'Psalms affirming the king&apos;s divine appointment.',
    },
  ],

  hasHebrew: true,
};
