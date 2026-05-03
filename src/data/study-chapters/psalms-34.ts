import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 34 — O Taste and See
 *
 * "I sought the Lord, and he heard me." This acrostic psalm celebrates God&apos;s
 * faithfulness to those who seek Him. "O taste and see that the Lord is good."
 * The psalmist invites not merely intellectual assent, but experiential
 * knowledge. The psalm contains a detailed prophecy of Christ: "He keepeth all
 * his bones: not one of them is broken." This verse, quoted in John 19:36,
 * refers directly to Christ crucified, whose bones, unlike those of the
 * criminals crucified with Him, were not broken.
 */
export const PSALMS_34: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 34,

  estimatedMinutes: { 5: 1, 10: 2, 15: 3 },
  intros: [
    'Psalm 34 is another acrostic, with verses generally beginning with successive letters of the Hebrew alphabet. The psalm celebrates answered prayer, God&apos;s protection, and deliverance. It moves through praise, testimony, instruction, and prophecy. The psalmist invites the reader into his experience: he sought God, God heard him and delivered him from his fears. Now he calls others to taste and see that the Lord is good. And embedded within this celebration is one of the Bible&apos;s most precise prophecies of Christ.',
  ],

  sections: [
    {
      ref: 'Psalm 34:1–22',
      title: 'Deliverance and Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            plain(1, 'I will bless the Lord at all times: his praise shall continually be in my mouth.'),
            plain(2, 'My soul shall make her boast in the Lord: the humble shall hear thereof, and be glad.'),
            plain(3, 'O magnify the Lord with me, and let us exalt his name together.'),
            plain(4, 'I sought the Lord, and he heard me, and delivered me from all my fears.'),
            plain(7, 'This poor man cried, and the Lord heard him, and saved him out of all his troubles.'),
            plain(8, 'The angel of the Lord encampeth round about them that fear him, and delivereth them.'),
            plain(9, 'O taste and see that the Lord is good: blessed is the man that trusteth in him.'),
            plain(15, 'The eyes of the Lord are upon the righteous, and his ears are open unto their cry.'),
            plain(17, 'The righteous cry, and the Lord heareth, and delivereth them out of all their troubles.'),
            plain(19, 'Many are the afflictions of the righteous: but the Lord delivereth him out of them all.'),
            plain(20, 'He keepeth all his bones: not one of them is broken.'),
            plain(22, 'The Lord redeemeth the soul of his servants: and none of them that trust in him shall be desolate.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms34-bless-always',
          html: '"I will bless the Lord at all times: his praise shall continually be in my mouth." This is not conditional praise—praising God only when circumstances are pleasant. It is continual praise, praise at all times, praise that never ceases. The psalmist has discovered that praise is not merely a response to blessing. It is a way of life.',
        },
        {
          kind: 'hebrew',
          id: 'psalms34-taste-see',
          title: 'Ta&apos;am — "Taste" (Experience)',
          script: 'טָעַם',
          translit: '<strong>Ta&apos;am</strong> · to taste; to experience; to know intimately through direct encounter',
          description: 'The Hebrew word ta&apos;am goes beyond mere intellectual understanding. To taste is to experience directly. When the psalmist invites readers to "taste and see that the Lord is good," he is inviting them to move from hearsay to personal experience, from belief to knowledge.',
        },
        {
          kind: 'commentary',
          id: 'psalms34-sought-heard',
          html: '"I sought the Lord, and he heard me, and delivered me from all my fears." The progress is notable. Seeking precedes finding. Crying precedes hearing. The psalmist did not passively wait for God. He sought actively. Yet his seeking was not without result. God heard and delivered. The fear that had constrained him was removed.',
        },
        {
          kind: 'commentary',
          id: 'psalms34-bones-broken',
          html: 'Then comes a striking statement: "He keepeth all his bones: not one of them is broken." In the context of Psalm 34, this refers to the righteous being preserved by God. But in the Gospel accounts, this verse takes on new meaning. John 19:36 explicitly quotes this verse in reference to Jesus on the Cross: when the soldiers came to break the legs of those crucified, they found Jesus already dead and broke not His legs, fulfilling this prophecy.',
        },
        {
          kind: 'christ',
          id: 'psalms34-christ-bones',
          title: 'Christ Connection — The Righteous Sufferer',
          html: 'Psalm 34:20 is quoted directly in John 19:36 as being fulfilled by Christ: "These things were done, that the scripture should be fulfilled, A bone of him shall not be broken." The psalm speaks of God&apos;s protection of the righteous. Christ is the perfectly righteous one. His body, even in death, was treated with a care that fulfilled Scripture. In His preservation, the psalm finds its deepest fulfillment.',
        },
        {
          kind: 'carry',
          html: 'To follow the way of Psalm 34 is to seek the Lord actively, to trust that when we cry out He hears us, to taste and experience His goodness directly, and to praise Him continually—not waiting for perfect circumstances, but blessing Him in all times. This is the discipline and joy of faith.',
        },
        {
          kind: 'reflection',
          id: 'psalms34-taste-goodness',
          prompt: 'Have you genuinely "tasted" God&apos;s goodness? When have you experienced His deliverance from fear? How might you cultivate a practice of blessing the Lord at all times, not just in moments of ease?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I sought the Lord, and he heard me, and delivered me from all my fears. ...O taste and see that the Lord is good: blessed is the man that trusteth in him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 34 · Study Guide',
  },

  hasHebrew: true,
};
