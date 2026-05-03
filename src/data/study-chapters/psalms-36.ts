import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 36 — The Fountain of Life
 *
 * David begins with the heart of the wicked: transgression speaks within,
 * "There is no fear of God before his eyes." Yet the psalm pivots swiftly
 * to the mercy of God. "Thy mercy, O Lord, is in the heavens; thy
 * faithfulness reacheth unto the clouds." The wicked chase shadows. But God
 * offers a fountain—an inexhaustible source of life and light. In Christ,
 * this fountain flows for all who thirst.
 */
export const PSALMS_36: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 36,

  estimatedMinutes: { 5: 2, 10: 4, 15: 6 },
  intros: [
    'Psalm 36 opens with a dark vision of the human heart when it turns from God. The transgression of the wicked speaks within their heart, and they see no reason to fear God or seek His favor. They lie awake plotting evil, setting themselves on paths that are not good. Yet this is not the psalm&apos;s final word. David raises his eyes to heaven and sees there an altogether different reality: God&apos;s mercy reaches to the heavens, His faithfulness to the clouds. His righteousness is like the great mountains, His judgments like a great deep.',
    'But the most striking promise comes near the close: "For with thee is the fountain of life." Not a stream that may dry up, not a well that may fail, but a fountain—a source. In this fountain is light, and in that light, all things are seen truly. The psalm moves from the darkness of human transgression to the radiance of God&apos;s eternal provision. It is an invitation to drink.',
  ],

  sections: [
    {
      ref: 'Psalm 36:1–4',
      title: 'The Heart of Transgression',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            plain(1, 'The transgression of the wicked saith within my heart, that there is no fear of God before his eyes.'),
            plain(2, 'For he flattereth himself in his own eyes, until his iniquity be found to be hateful.'),
            plain(3, 'The words of his mouth are iniquity and deceit: he hath left off to be wise, and to do good.'),
            plain(4, 'He deviseth mischief upon his bed; he setteth himself in a way that is not good; he abhorreth not evil.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms36-transgression',
          html:
            'David does not describe the wicked from a safe distance. He says the transgression "speaketh within my heart"—as though he himself is listening to its voice, understanding its reasoning. This is the psalm of a man who knows temptation, who has heard the whisper that says "God will not notice," or "no one will know." The wicked do not typically announce their evil. They flatter themselves. They rationalize. They tell themselves a story that makes sense of their choices.',
        },
        {
          kind: 'hebrew',
          id: 'psalms36-pesha',
          title: 'Pesha — "Transgression"',
          script: 'פֶּשַׁע',
          translit: '<strong>Pesha</strong> · transgression; rebellion; willful breaking of covenant',
          description:
            'The Hebrew word pesha is not mere error or weakness. It is rebellion—a conscious turning away from what is known to be right. It describes not a stumble but a stance. The transgression "speaks within the heart" of the wicked because they have chosen to listen to it, to give it voice, to let it shape their counsel.',
        },
        {
          kind: 'commentary',
          id: 'psalms36-no-fear',
          html:
            'The root of all this transgression is simple: "There is no fear of God before his eyes." This is not intellectual doubt. This is a failure to look, to consider, to recognize. The wicked do not gaze upon God. They turn their attention elsewhere. And in that avoidance, they are free to rationalize, to scheme, to settle into a path that leads nowhere good.',
        },
        {
          kind: 'reflection',
          id: 'psalms36-hear-voice',
          prompt: 'When you find yourself flattering yourself, rationalizing a choice you know is not fully good, what would it take to stop and listen to the fear of God—not as punishment, but as a call to look up?',
        },
      ],
    },

    {
      ref: 'Psalm 36:5–9',
      title: 'The Mercy That Reaches',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            plain(5, 'Thy mercy, O Lord, is in the heavens; and thy faithfulness reacheth unto the clouds.'),
            plain(6, 'Thy righteousness is like the great mountains; thy judgments are a great deep: O Lord, thou preservest man and beast.'),
            plain(7, 'How excellent is thy lovingkindness, O God! therefore the children of men put their trust under the shadow of thy wings.'),
            plain(8, 'They shall be abundantly satisfied with the fatness of thy house; and thou shalt make them drink of the river of thy pleasures.'),
            plain(9, 'For with thee is the fountain of life: in thy light shall we see light.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms36-mercy-heaven',
          html:
            'The psalm turns with sudden radiance. From the darkness of the transgressor&apos;s heart, David lifts his eyes to heaven and sees there what is eternally true: God&apos;s mercy reaches to the heavens. His faithfulness is not confined to moments or moods. It reaches to the clouds—vast, enduring, encompassing. This is not mercy that shows up sometimes. This is mercy that is the very fabric of God&apos;s throne.',
        },
        {
          kind: 'commentary',
          id: 'psalms36-mountains-deep',
          html:
            'God&apos;s righteousness is described as "great mountains"—immovable, permanent, visible from far away. His judgments are "a great deep"—fathomless, beyond full comprehension, yet real and present. The psalmist is not afraid of God&apos;s judgment here. He stands in awe of it. This is a God worthy of trust because His righteousness and His judgments are not arbitrary. They are as fixed and dependable as mountains and as full of presence as the depths of the sea.',
        },
        {
          kind: 'hebrew',
          id: 'psalms36-chesed',
          title: 'Chesed — "Lovingkindness"',
          script: 'חֶסֶד',
          translit: '<strong>Chesed</strong> · covenant mercy; lovingkindness; faithful love',
          description:
            'Chesed is not transient mercy. It is mercy rooted in covenant, in commitment, in the binding together of God&apos;s heart with His people. "How excellent is thy lovingkindness!" The Hebrew word conveys both the beauty of this mercy and its reliability. It is not sentiment. It is love that keeps its word.',
        },
        {
          kind: 'commentary',
          id: 'psalms36-shadow-wings',
          html:
            'The children of men "put their trust under the shadow of thy wings." This image appears again and again in the Psalms—the picture of being hidden, protected, gathered like birds beneath the wings of a parent. There is no fear here, only shelter. Only safety. To trust God is not to earn a wage. It is to find refuge.',
        },
        {
          kind: 'christ',
          id: 'psalms36-christ-fountain',
          title: 'Christ Connection — The Fountain of Living Water',
          html:
            'In John 4, Jesus sits by a well and tells a Samaritan woman, "Whosoever drinketh of the water that I shall give him shall never thirst; but the water that I shall give him shall be in him a well of water springing up into everlasting life." This is the fountain of Psalm 36 made flesh. Christ is the source. In Him is the life that does not fail. And in His light—the light of His truth, His love, His resurrection—we see light. We see ourselves, our world, our God in their true nature at last.',
        },
        {
          kind: 'carry',
          html:
            'The question Psalm 36 poses is this: are you still listening to the flattering voice that says no one will notice, or have you lifted your eyes to the God whose mercy reaches to the heavens? The wicked devise mischief upon their beds. But God offers something infinitely better: to put your trust under the shadow of His wings, to drink of the river of His pleasures, to enter the fountain of life. The choice is not between punishment and reward. It is between the shadow of transgression and the light of His presence.',
        },
        {
          kind: 'reflection',
          id: 'psalms36-fountain',
          prompt: 'What thirsts in you right now? What are you seeking to fill the empty places? Can you imagine coming to Christ as the fountain—not earning your drink, but simply accepting what He freely gives?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For with thee is the fountain of life: in thy light shall we see light.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 36 · Study Guide',
  },

  hasHebrew: true,
};
