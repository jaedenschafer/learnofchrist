import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 76 — The Fear of God
 *
 * "In Judah is God known: his name is great in Israel. In Salem also is his
 * tabernacle, and his dwelling place in Zion." This psalm celebrates God&apos;s
 * mighty acts and the fear those acts inspire. It is a psalm about the paradox
 * of the fear of God—the fear that comes from encountering divine power, yet
 * the fear that leads to faith, not despair.
 */
export const PSALMS_76: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 76,

  intros: [
    'Psalm 76 opens with the declaration that God is known in Judah. He is great in Israel. His name is not obscure or forgotten. It is proclaimed precisely through His mighty acts—acts of deliverance, acts of judgment, acts that demonstrate His power.',
    'The psalm moves to the reaction such power provokes: fear. But this is not the fear of despair. It is the fear of awe, of reverence, of standing before a power greater than oneself and bowing in submission. The fear of God is the beginning of wisdom. It is the proper human response to the knowledge of God&apos;s sovereignty and might.',
  ],

  sections: [
    {
      ref: 'Psalm 76:1–9',
      title: 'God Made Known',
      blocks: [
        {
          kind: 'scripture',
          chapter: 76,
          lines: [
            plain(1, 'In Judah is God known: his name is great in Israel.'),
            plain(2, 'In Salem also is his tabernacle, and his dwelling place in Zion.'),
            plain(3, 'There brake he the arrows of the bow, the shield, and the sword, and the battle. Selah.'),
            plain(4, 'Thou art more glorious and excellent than the mountains of prey.'),
            plain(5, 'The stouthearted are spoiled, they have slept their sleep: and none of the men of might have found their hands.'),
            plain(7, 'Thou, even thou, art to be feared: and who may stand in thy sight when once thou art angry?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms76-known',
          html: 'The psalm begins with a public declaration: God is known, God is great. This is not hidden knowledge or esoteric truth. It is proclaimed openly. And it is made known through God&apos;s mighty acts.',
        },
        {
          kind: 'hebrew',
          id: 'psalms76-nora',
          title: 'Nora — "To Be Feared" (Awesome)',
          script: 'נוֹרָא',
          translit: '<strong>Nora</strong> · to be feared, awesome, terrible, dreadful',
          description: 'The Hebrew word nora conveys the awe-inspiring quality of God, the quality that inspires fear. It is not the fear of arbitrary cruelty, but the fear of encountering something infinitely greater than oneself.',
        },
        {
          kind: 'commentary',
          id: 'psalms76-arrows',
          html: 'The psalm speaks of the breaking of arrows, shields, and swords. War instruments, weapons of pride and power, are broken by God. The might of human kingdoms cannot stand against God.',
        },
        {
          kind: 'commentary',
          id: 'psalms76-spoiled',
          html: 'And those who were stouthearted—proud, full of self-confidence—are spoiled. They sleep the sleep of death. Their might has come to nothing. "None of the men of might have found their hands"—they could not defend themselves.',
        },
        {
          kind: 'christ',
          id: 'psalms76-christ-feared',
          title: 'Christ Connection — The Awesome King',
          html: 'Christ is to be feared. He is the one who breaks the power of death and sin. He is glorious and excellent beyond all creation. Yet His fearfulness is not harsh. It is the fearfulness of infinite love, infinite justice, infinite power directed toward salvation.',
        },
        {
          kind: 'carry',
          html: 'The fear of God is not servile terror. It is the proper response to encountering the divine. It is awe. It is reverence. It is the recognition that you stand before one infinitely greater than yourself, one whose power is absolute, yet whose nature is merciful. Let the fear of God establish you in faith.',
        },
        {
          kind: 'reflection',
          id: 'psalms76-fear-awe',
          prompt: 'What does it mean to fear God? How is the fear of God different from the fear of man? What mighty acts of God inspire awe in you?',
        },
      ],
    },

    {
      ref: 'Psalm 76:10–12',
      title: 'Fear and Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 76,
          lines: [
            plain(10, 'Surely the wrath of man shall praise thee: the remainder of wrath shalt thou restrain.'),
            plain(11, 'Vow, and pay unto the Lord your God: let all that be round about him bring presents unto him that ought to be feared.'),
            plain(12, 'He shall cut off the spirit of princes: he is terrible unto the kings of the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms76-wrath-praise',
          html: 'A remarkable statement: "The wrath of man shall praise thee." Even human anger, meant to oppose God, ends up serving God&apos;s purposes. And the wrath that would destroy God&apos;s people, God restrains. Nothing escapes God&apos;s control.',
        },
        {
          kind: 'commentary',
          id: 'psalms76-vow',
          html: 'And the response to this knowledge is clear: "Vow, and pay unto the Lord your God." When you have encountered the awesome power of God, you are called to commitment, to vows, to bringing offerings. You are called to recognize God as the one to be feared and worshipped.',
        },
        {
          kind: 'commentary',
          id: 'psalms76-spirit',
          html: 'And the psalm concludes with assurance: "He shall cut off the spirit of princes; he is terrible unto the kings of the earth." The pride of earthly rulers is broken. God&apos;s power supersedes all human power.',
        },
        {
          kind: 'christ',
          id: 'psalms76-christ-restrains',
          title: 'Christ Connection — Wrath Restrained',
          html: 'In Christ, the wrath of God is satisfied, not through the destruction of humanity, but through the sacrifice of the divine Son. Even human wrath—the wrath of those who crucified Christ—ultimately served God&apos;s redemptive purpose. God turns all things, even human hatred, to His purposes.',
        },
        {
          kind: 'carry',
          html: 'Fear God and keep His commandments. Make your vows to Him and pay them. Recognize that He is terrible unto the kings of the earth, and yet merciful to those who fear Him. Your faith is grounded not in the weakness of earthly powers, but in the awesome strength of God.',
        },
        {
          kind: 'reflection',
          id: 'psalms76-vow-pay',
          prompt: 'What vow will you make to the God you fear? How will you bring your offerings and honor to the one who is terrible unto the kings of the earth?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'In Judah is God known...Thou art to be feared...The stouthearted are spoiled...He is terrible unto the kings of the earth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 76 · Study Guide',
  },

  hasHebrew: true,
};
