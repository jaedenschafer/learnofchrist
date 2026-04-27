import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 1 — The Way of the Righteous
 *
 * The book of Psalms opens not with ceremony or command, but with blessing.
 * "Blessed is the man that walketh not in the counsel of the ungodly." Here
 * is a simple truth about two ways: the way of the righteous, who delight in
 * God's law and meditate upon it day and night, and the way of the ungodly,
 * who are like chaff driven by the wind. The first bears fruit in its season,
 * permanent and prosperous. The second has no standing, no future. The choice
 * between these ways shapes not just a moment, but eternity.
 */
export const PSALMS_1: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 1,

  intros: [
    'The book of Psalms begins with a vision of blessedness. Not the blessedness of circumstance or fortune, but the blessedness of a life ordered toward God. The psalmist opens by describing a man who has learned to walk a certain way: not in the counsel of the ungodly, not standing in the way of sinners, not sitting in the seat of the scornful. These are not moments of temptation resisted, but a pattern of avoidance, a habitual turning away from foolishness and toward wisdom. And what does this man choose instead? He chooses delight. He chooses meditation. He chooses to fix his mind on the law of the Lord, day and night, until God&apos;s word becomes the landscape of his inner life.',
    'What follows is a promise: such a man shall be like a tree planted by rivers of water. He shall bring forth fruit in his season. His leaf shall not wither. Whatsoever he doeth shall prosper. This is not reward in the sense of payment for good behavior. This is the natural fruiting of a life rooted in God&apos;s word. The ungodly, by contrast, are like chaff—weightless, driven by every wind, having no permanence, no substance, no future. Between these two images the reader must choose. And the psalm opens by asking: which way will you walk?',
  ],

  sections: [
    /* ─── Psalm 1:1–3 — The Blessed Man ────────────────────────────────── */
    {
      ref: 'Psalm 1:1–3',
      title: 'The Way of Delight',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful;'),
            plain(2, 'But his delight is in the law of the Lord; and in his law doth he meditate day and night.'),
            plain(3, 'And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms1-blessed',
          html:
            'The first word of the Psalms is "Blessed"—not commanded, not threatened, but blessed. The man described here has not earned his blessing through sacrifice or ritual. He has earned it through the ordering of his life. He walks a certain way. He stands in a certain place. He sits in a certain seat. The progression is subtle but deliberate: walking, then standing, then sitting. Each suggests a deepening, a settling, a habitual choice made over time. This is not a moment of virtue. This is a life pattern.',
        },
        {
          kind: 'commentary',
          id: 'psalms1-counsel',
          html:
            'To walk in the counsel of the ungodly is to receive guidance from those who do not know God, to let their wisdom shape your path. To stand in the way of sinners is to join their ranks, to make their path your own. To sit in the seat of the scornful is to take up their mocking posture, to judge all things through the lens of their cynicism. The blessed man does none of these. He turns away. He avoids. He practices a holy separation not from people, but from ways of thinking that lead away from God.',
        },
        {
          kind: 'hebrew',
          id: 'psalms1-asher',
          title: 'Asher — "Blessed" (Ashrei)',
          script: 'אַשְׁרֵי',
          translit: '<strong>Ashrei</strong> · blessed; happy; in a state of well-being',
          description:
            'The Hebrew word ashrei does not mean "blessed by God" in the sense of favored. It means "in a state of well-being," "happy," "blessed." It refers to a condition of flourishing that comes from right living. The Greek translators rendered it makarios—the same word Jesus uses when He pronounces blessings on the poor in spirit, the mourning, the meek. Ashrei is not a gift given. It is a state entered through the deliberate ordering of one&apos;s life toward God&apos;s law.',
        },
        {
          kind: 'commentary',
          id: 'psalms1-delight',
          html:
            'But the blessed man does not merely avoid foolishness. He chooses something positive: delight in the law of the Lord. His pleasure, his joy, his deepest satisfaction comes from God&apos;s word. And this delight is not passive. He meditates day and night. The Hebrew word for meditate means to murmur, to mutter, to roll over in the mind, to speak to oneself. He is not merely reading. He is absorbing, internalizing, letting the word become his own thought.',
        },
        {
          kind: 'christ',
          id: 'psalms1-christ-tree',
          title: 'Christ Connection — The Tree of Life',
          html:
            'The blessed man is like a tree planted by rivers of water, bearing fruit in season. In Revelation 22, John sees the Tree of Life standing on either side of the river of the water of life in the heavenly city. That tree yields fruit every month and its leaves are for the healing of the nations. Christ is that Tree—rooted in the Father, drawing sustenance from eternal springs, bringing forth the fruit of redemption in its season. To be in Christ is to be transplanted from barren ground to the riverside, to draw from waters that never fail, to bring forth a crop that lasts forever.',
        },
        {
          kind: 'carry',
          html:
            'The question the first psalm poses is simple but searching: What do you delight in? What captures your attention and shapes your thoughts as you fall asleep and as you wake? What counsel do you listen to? Whose way have you chosen to walk? The blessed life is not the life of circumstance. It is the life of careful, deliberate choice—choosing again and again to turn away from voices that draw you from God, and choosing again and again to turn toward His word, to meditate on it, to let it reshape your mind.',
        },
        {
          kind: 'reflection',
          id: 'psalms1-choose-way',
          prompt: 'When you find yourself in the counsel of the ungodly, whether through media, conversation, or the voices in your own head, what would it take to walk away? How could you cultivate delight in God&apos;s word the way the psalmist describes?',
        },
      ],
    },

    /* ─── Psalm 1:4–6 — The Way of the Ungodly ──────────────────────────── */
    {
      ref: 'Psalm 1:4–6',
      title: 'Two Ends, Two Destinies',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(4, 'The ungodly are not so: but are like the chaff which the wind driveth away.'),
            plain(5, 'Therefore the ungodly shall not stand in the judgment, nor sinners in the congregation of the righteous.'),
            plain(6, 'For the Lord knoweth the way of the righteous: but the way of the ungodly shall perish.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms1-chaff',
          html:
            'The contrast could not be starker. The righteous are like a tree—rooted, established, bearing fruit. The ungodly are like chaff—weightless, insubstantial, carried away by every wind. Chaff is what remains after the wheat has been threshed. It is not merely different from the grain. It is waste. It is nothing. This is not a statement about the moral worth of ungodly persons. It is a statement about the ultimate substance of lives built without reference to God.',
        },
        {
          kind: 'commentary',
          id: 'psalms1-judgment',
          html:
            'The psalm then moves to the judgment. "Therefore the ungodly shall not stand in the judgment." The word "stand" echoes the earlier language—to stand in the way of sinners was to join them. Now to stand in the judgment means to endure it, to survive it, to have substance before God. The ungodly will not stand. They will not endure. And they will not be found "in the congregation of the righteous"—that gathered company of those who have chosen the way of delight in God&apos;s law.',
        },
        {
          kind: 'commentary',
          id: 'psalms1-knoweth',
          html:
            'The final word belongs to God: "The Lord knoweth the way of the righteous." Not merely that He approves it, but that He knows it intimately, guards it, sustains it. His knowledge is not passive observation. It is active care. By contrast, "the way of the ungodly shall perish"—not because God punishes it, but because it leads nowhere. It has no foundation. It ends in dissolution.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 1 offers no middle ground. There are two ways, two kinds of life, two destinies. The righteous man meditates on God&apos;s law and prospers. The ungodly man is blown about by every wind and comes to nothing. The choice before each reader is stark: Which way will you walk? What counsel will you receive? Where will you plant your roots? The psalm opens the book of Psalms by insisting that this choice—the ordering of your life toward God or away from Him—is the most important choice you will ever make.',
        },
        {
          kind: 'reflection',
          id: 'psalms1-what-remains',
          prompt: 'If everything in your life that does not connect to God were stripped away—all the approval, all the money, all the distraction—what would remain? What has genuine substance in your life?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Blessed is the man that walketh not in the counsel of the ungodly...but his delight is in the law of the Lord; and in his law doth he meditate day and night.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 1 · Study Guide',
  },

  hasHebrew: true,
};
