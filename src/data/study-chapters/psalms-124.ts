import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 124 — If It Had Not Been the Lord
 *
 * "If it had not been the Lord who was on our side, now may Israel say..."
 * A song of ascents celebrating God's deliverance in a past crisis.
 * The enemies rose up as waters, as a torrent, about to sweep away.
 * But the Lord broke their power. The psalmist and his people escaped
 * like a bird from the snare.
 * Christ connection: God's deliverance; the breaking of all powers
 * that seek to destroy the people of God.
 */
export const PSALMS_124: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 124,

  intros: [
    'Psalm 124 is a corporate testimony of deliverance. Something terrible was nearly accomplished against God&apos;s people. An enemy arose, bent on destruction. The waters of affliction nearly swept them away, nearly drowned them. But at the crucial moment, the Lord intervened. The snare that had been laid was broken. The psalmist and the community emerge from the danger alive, amazed, grateful. The whole psalm hinges on a single word: "if." If the Lord had not been on our side. If. Because the Lord was on their side, all was transformed.',
  ],

  sections: [
    {
      ref: 'Psalm 124:1–8',
      title: 'Escaped as a Bird from the Snare',
      blocks: [
        {
          kind: 'scripture',
          chapter: 124,
          lines: [
            plain(1, 'If it had not been the Lord who was on our side, now may Israel say;'),
            plain(2, 'If it had not been the Lord who was on our side, when men rose up against us:'),
            plain(3, 'Then they had swallowed us up quick: when their wrath was kindled against us.'),
            plain(4, 'Then the waters had overwhelmed us, the stream had gone over our soul:'),
            plain(5, 'Then the proud waters had gone over our soul.'),
            plain(6, 'Blessed be the Lord, who hath not given us as a prey to their teeth.'),
            plain(7, 'Our soul is escaped as a bird out of the snare of the fowlers: the snare is broken, and we are escaped.'),
            plain(8, 'Our help is in the name of the Lord, who made heaven and earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps124-swallowed',
          html:
            'The psalmist does not minimize the danger. "They had swallowed us up quick." The enemy was not a gentle threat. It was ravenous, carnivorous, bent on consuming the people of God. The wrath that kindled against them was sufficient to destroy them utterly. Had God not intervened, had He not been on their side, there would be no psalmist, no people, no testimony.',
        },
        {
          kind: 'commentary',
          id: 'ps124-waters',
          html:
            'The image shifts to water—torrents, floods, waters overwhelming. The enemy is depicted not as one force, but as multiple forces: the teeth of the beast, the waters of the flood, the proud waves sweeping over. It is a picture of total, comprehensive assault from every direction. Yet in the midst of this, the psalmist testifies: "Blessed be the Lord, who hath not given us as a prey to their teeth."',
        },
        {
          kind: 'commentary',
          id: 'ps124-snare',
          html:
            'And then the pivotal image: "Our soul is escaped as a bird out of the snare of the fowlers." A bird trapped in a snare, struggling, bound, about to be captured. And then—the snare breaks. The bird is free. It flies. This is not gradual deliverance or partial escape. It is sudden, complete liberation. The very instrument of capture becomes the instrument of freedom—the snare is broken.',
        },
        {
          kind: 'christ',
          id: 'ps124-christ-deliverance',
          title: 'Christ Connection — Breaking the Snare',
          html:
            'Christ spoke of His mission as setting captives free (Luke 4:18). By His death and resurrection, He broke the snares that held humanity captive—sin, death, the power of the enemy. Colossians 2:15 declares that Christ "spoiled principalities and powers...making a shew of them openly, triumphing over them." The snare was broken, and we are escaped. All who are in Christ share in this deliverance.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 124 invites you to look back on God&apos;s deliverance in your own life. To recognize the moments when you could have been destroyed but were not. When the enemy seemed to have the upper hand, yet God intervened. The psalm calls you not to forget these mercies, but to declare them, to testify to them, to let them reshape your faith. And it calls you to recognize that your help is in the name of the Lord, the Maker of heaven and earth.',
        },
        {
          kind: 'reflection',
          id: 'ps124-deliverance',
          prompt:
            'What is a time when God delivered you from a snare or an overwhelming circumstance? How do you tend to respond—with gratitude, or with forgetting? How might regularly remembering God&apos;s past deliverances strengthen your faith in present difficulties?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'If it had not been the Lord who was on our side...then they had swallowed us up quick. Blessed be the Lord, who hath not given us as a prey.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 124 · Study Guide',
  },
};
