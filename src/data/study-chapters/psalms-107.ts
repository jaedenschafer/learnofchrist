import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 107 — Redemption in Every Circumstance
 *
 * "O give thanks unto the Lord, for he is good: for his mercy endureth for ever."
 * The psalm then presents four scenes: wanderers lost in the desert, captives
 * in darkness, the sick brought low, sailors in the storm. Each is in a different
 * kind of trouble. Yet each has the same outcome: they cry to God, He delivers
 * them. "Oh that men would praise the Lord for his goodness, and for his wonderful
 * works to the children of men!"
 */
export const PSALMS_107: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 107,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'Psalm 107 is a song about deliverance in all circumstances. Whether you are lost in the desert, imprisoned in darkness, sick and dying, or drowning in a storm, the psalm says, you are not beyond God&apos;s reach. Each of the four scenes depicts a different kind of human trouble—physical lostness, captivity, sickness, danger. But in each case, the mechanism of deliverance is the same: the afflicted cry out to God, and He hears and delivers them. The psalm is structured like a refrain: trouble, cry, deliverance, praise. Four times this pattern repeats. The message is clear: no matter what form your trouble takes, God can rescue you.',
    'The psalm ends with a call to pay attention: "Oh that men would praise the Lord for his goodness, and for his wonderful works to the children of men!" The psalmist is saying: look at these stories of deliverance. See yourself in them. And understand that they are not exceptions. They are examples of how God regularly and habitually acts toward His people.',
  ],

  sections: [
    {
      ref: 'Psalm 107:1–43',
      title: 'Four Scenes of Trouble and Rescue',
      blocks: [
        {
          kind: 'scripture',
          chapter: 107,
          lines: [
            plain(1, 'O give thanks unto the Lord, for he is good: for his mercy endureth for ever.'),
            plain(4, 'They wandered in the wilderness in a solitary way; they found no city to dwell in.'),
            plain(5, 'Hungry and thirsty, their soul fainted in them.'),
            plain(6, 'Then they cried unto the Lord in their trouble: and he delivered them out of their distresses.'),
            plain(8, 'Oh that men would praise the Lord for his goodness, and for his wonderful works to the children of men!'),
            plain(10, 'Such as sit in darkness and in the shadow of death, being bound in affliction and iron;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps107-lostness-to-captivity',
          html:
            'The first scene—wanderers lost in the wilderness—concludes with deliverance and the call to give thanks. Now the second scene begins: captives in darkness and chains. Each subsequent scene will repeat the same pattern: deepening trouble, desperate prayer, and God&apos;s saving response. [res:sefaria-psalm-107]',
        },
        {
          kind: 'scripture',
          chapter: 107,
          lines: [
            plain(13, 'Then they cried unto the Lord in their trouble: and he saved them out of their distresses.'),
            plain(17, 'Fools because of their transgression, and because of their iniquities, are afflicted.'),
            plain(19, 'Then they cry unto the Lord in their trouble, and he saveth them out of their distresses.'),
            plain(28, 'Then they cry unto the Lord in their trouble: and he bringeth them out of their distresses.'),
            plain(29, 'He maketh the storm a calm, so that the waves thereof are still.'),
            plain(31, 'Oh that men would praise the Lord for his goodness, and for his wonderful works to the children of men!'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps107-wanderers',
          html:
            'The first scene: wanderers lost in the wilderness. They are hungry, thirsty, dying of thirst, with no city to dwell in. They have no map, no guide, no hope. Yet "they cried unto the Lord in their trouble: and he delivered them out of their distresses." Rescue comes through prayer.',
        },
        {
          kind: 'commentary',
          id: 'ps107-captives',
          html:
            'The second scene: captives sitting in darkness, bound with iron chains. They are prisoners with no way out, no hope of release. Yet when they cry to God, He saves them. He breaks their chains. He brings them out of the shadow of death.',
        },
        {
          kind: 'commentary',
          id: 'ps107-sick',
          html:
            'The third scene: the sick, brought low by their transgressions. They abhor all manner of meat, they draw near to the gates of death. Yet when they cry, God sends His word and heals them. Deliverance comes even to those who have brought suffering upon themselves through their own sin.',
        },
        {
          kind: 'hebrew',
          id: 'ps107-tza-akah',
          title: 'Tza&apos;akah — "Cried" (A Desperate Cry)',
          script: 'צָעַק',
          translit: '<strong>Tza&apos;akah</strong> · cried out; called out in distress; made an urgent call',
          description:
            'The Hebrew word za&apos;akah means to cry out in distress, to make a desperate, urgent call. It is not a quiet request. It is the cry of someone in extremity, who has nowhere else to turn. This is the cry that God hears.',
        },
        {
          kind: 'commentary',
          id: 'ps107-storm',
          html:
            'The fourth scene: sailors in a storm at sea, going down into the depths, their courage melting away. Yet when they cry to God, He quiets the storm. The waves become still. The danger passes.',
        },
        {
          kind: 'christ',
          id: 'ps107-christ',
          title: 'Christ Connection — The Word That Heals',
          html:
            'Verse 20 says: "He sent his word, and healed them." John opens his Gospel with: "In the beginning was the Word, and the Word was God" (John 1:1–3). Jesus is that Word made flesh. He stilled the storm with a single command: "Peace, be still" (Mark 4:39)—the same God who quiets the sea here. He healed the sick, freed the captives, and spoke to those sitting in darkness. When sailors cry in a storm, when the sick cry for healing, when captives cry for freedom—they cry out to the One who does these things. Christ is the fulfillment of every deliverance promised in this psalm. [res:bible-odyssey-psalm-107]',
        },
        {
          kind: 'carry',
          html:
            'The refrain echoes across all four scenes: "Oh that men would praise the Lord for his goodness." The psalmist is not merely describing past events. He is calling us to recognize that these stories are still happening. When you are lost and find your way, when you escape captivity, when you recover from sickness, when you survive danger—these are your moments of deliverance. The question is: will you recognize them as God&apos;s work and praise Him?',
        },
        {
          kind: 'reflection',
          id: 'ps107-your-rescue',
          prompt: 'Which of these four scenes—lostness, captivity, sickness, danger—best describes a time you needed rescue? How did God deliver you? Did you recognize it as deliverance?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O give thanks unto the Lord, for he is good: for his mercy endureth for ever. Then they cried unto the Lord in their trouble: and he delivered them out of their distresses.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 107 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-107',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 107 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.107',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-107',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 107 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+107',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
  ],

  hasHebrew: true,
};
