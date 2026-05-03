import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 11 — Trust in the Lord
 *
 * Friends counsel David to flee: "Flee as a bird to your mountain." But David will
 * not run. "In the Lord put I my trust." He has examined God and found Him
 * steadfast. God sits in the heavens. His eyes see all. "His countenance doth
 * behold the upright." For those who love righteousness, this is comfort. For those
 * who love wickedness, it is terror. David will not flee from righteousness or from
 * God&apos;s sight.
 */
export const PSALMS_11: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 11,

  estimatedMinutes: { 5: 1, 10: 3, 15: 3 },
  intros: [
    'Psalm 11 is a psalm of resolve. David faces danger, and those around him offer counsel—flee, escape, run. They see the threat and assume the only rational response is to disappear. But David refuses. He will not flee. He will trust. This is not because the danger is not real. It is because he has looked toward heaven and found something more real than the threat: the presence and the sight of God.',
    'The psalm opens with a crisis and concludes with trust. It is brief—only nine verses—but in its brevity lies its power. Three simple facts: The Lord sits in the heavens. His eyes behold. His countenance looks upon the upright. These facts are enough.',
  ],

  sections: [
    {
      ref: 'Psalm 11:1–7',
      title: 'Foundations Shaken, Trust Held',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(1, 'In the Lord put I my trust: how say ye to my soul, Flee as a bird to your mountain?'),
            plain(2, 'For, lo, the wicked bend their bow, they make ready their arrow upon the string, that they may privily shoot at the upright in heart.'),
            plain(3, 'If the foundations be destroyed, what can the righteous do?'),
            plain(4, 'The Lord is in his holy temple, the Lord&apos;s throne is in heaven: his eyes behold, his eyelids try, the children of men.'),
            plain(5, 'The Lord trieth the righteous: but the wicked and him that loveth violence his soul abhorreth.'),
            plain(6, 'Upon the wicked he shall rain snares, fire and brimstone, and an horrible tempest: this shall be the portion of their cup.'),
            plain(7, 'For the righteous Lord loveth righteousness; his countenance doth behold the upright.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps11-flee',
          html:
            'David opens by affirming his trust: "In the Lord put I my trust." Then he reports what others are saying to him: "How say ye to my soul, Flee as a bird to your mountain?" His friends see the danger—the wicked bending their bows, preparing arrows to shoot at the upright. And their advice is simple: escape. Run. It is reasonable counsel. But David has already given his answer: trust.',
        },
        {
          kind: 'commentary',
          id: 'ps11-shoot',
          html:
            'The danger is real. The wicked aim their arrows at "the upright in heart." This is not random violence. It is targeted. Those who seek to do right are being hunted. The arrows are meant to strike in the darkness, "privily"—secretly, unexpectedly. No one can see them coming.',
        },
        {
          kind: 'hebrew',
          id: 'ps11-batach',
          title: 'Batach — "Trust"',
          script: 'בָּטַח',
          translit: '<strong>Batach</strong> · to trust; to rely; to have confidence',
          description:
            'Batach is not mere belief. It is reliance, dependence, the confident resting of one&apos;s full weight on something. To trust God is to lean entirely on His reality, His power, His faithfulness.',
        },
        {
          kind: 'commentary',
          id: 'ps11-foundations',
          html:
            'Then comes the existential question: "If the foundations be destroyed, what can the righteous do?" This is the heart of the fear. If all stable things collapse, if the very ground of society becomes unreliable, what hope remains? This is the question hidden in the advice to flee.',
        },
        {
          kind: 'commentary',
          id: 'ps11-temple',
          html:
            'David answers the cry to flee by turning his gaze upward. "The Lord is in his holy temple, the Lord&apos;s throne is in heaven." While his enemies move in secret, God sits openly on His throne. God is not absent. God is positioned above all. And His eyes behold. His eyelids try—they examine, they test—the children of men. Nothing is hidden from His sight.',
        },
        {
          kind: 'commentary',
          id: 'ps11-trieth',
          html:
            'God tests the righteous. This is not punishment but examination. Like refining fire that burns away dross to reveal pure gold. But God abhors the wicked and those who love violence. His soul—His essential nature—is opposed to them. For those who do violence, this is bad news. For those who seek righteousness, it is comfort.',
        },
        {
          kind: 'christ',
          id: 'ps11-christ-refuge',
          title: 'Christ Connection — Our Refuge',
          html:
            'Christ is our refuge, not in fleeing but in standing firm. "In the world ye shall have tribulation," He says, "but be of good cheer; I have overcome the world" (John 16:33). He does not remove us from danger but gives us a place to stand within it, just as the Father is His refuge. We need not run. We can face what comes with trust in the One who sits above all.',
        },
        {
          kind: 'reflection',
          id: 'ps11-behold',
          prompt: 'What would change if you truly believed that God&apos;s eyes behold you and know everything about your situation? How might trust in His gaze free you from the need to flee?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'In the Lord put I my trust. For the righteous Lord loveth righteousness; his countenance doth behold the upright.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 11 · Study Guide',
  },

  hasHebrew: true,
};
