import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 28 — The Hidden Wisdom
 *
 * A profound meditation on wisdom and where it is found. Man mines silver and
 * gold from deep places, discovering precious things by human ingenuity and labor.
 * Yet wisdom—true understanding of God and His ways—cannot be mined or purchased.
 * "Where shall wisdom be found? And where is the place of understanding?" The answer:
 * "The fear of the Lord, that is wisdom; and to depart from evil is understanding."
 */
export const JOB_28: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 28,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'In a moment of rare clarity within his suffering, Job speaks a poem about the nature of true wisdom. The passage contrasts earthly treasure—silver, gold, precious stones that men labor to extract from the earth—with wisdom, which cannot be bought or found through human effort alone. This chapter poses the fundamental question of the entire book: In a world of suffering and mystery, where is wisdom to be found?',
  ],

  bottomShare: {
    quote:
      'Where shall wisdom be found? The answer comes: "The fear of the Lord, that is wisdom; and to depart from evil is understanding."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 28 · Study Guide',
  },

  sections: [
    /* ─── Job 28:1–11 — Mining Earthly Treasures ─────────────────────── */
    {
      ref: 'Job 28:1–11',
      title: 'What Man Can Find Beneath the Earth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(1, 'Surely there is a vein for the silver, and a place for gold where they fine it.'),
            plain(2, 'Iron is taken out of the earth, and brass is molten out of the stone.'),
            plain(3, 'He setteth an end to darkness, and searcheth out all perfection: the stones of darkness, and the shadow of death.'),
            plain(4, 'The flood breaketh out from the inhabitant; even the waters forgotten of the foot: they are dried up, they are gone away from men.'),
            plain(5, 'As for the earth, out of it cometh bread: and under it is turned up as it were fire.'),
            plain(6, 'The stones of it are the place of sapphires: and it hath dust of gold.'),
            plain(7, 'There is a path which no fowl knoweth, and which the vulture&apos;s eye hath not seen:'),
            plain(8, 'The lion&apos;s whelps have not trodden it, nor the fierce lion passed by it.'),
            plain(9, 'He putteth forth his hand upon the rock; he overturneth the mountains by the roots.'),
            plain(10, 'He cutteth out rivers among the rocks; and his eye seeth every precious thing.'),
            plain(11, 'He bindeth the floods from overflowing; and the thing that is hid bringeth he forth to light.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job28-mining',
          html:
            'These verses celebrate human ingenuity. Man has learned to search out hidden treasure beneath the earth. He mines silver, extracts gold, brings up iron and brass. He digs into darkness and finds precious stones. He engineers waters and channels. Every tool of human skill and determination is on display. Man is a discoverer, a maker, a revealer of hidden things.',
        },
        {
          kind: 'hebrew',
          id: 'job28-cholel',
          title: 'Cholel — "Profane" or "Ordinary"',
          script: 'חֹלֵל',
          translit: '<strong>Cholel</strong> · to profane; to make common or ordinary; to search out',
          description:
            'The image here is of man taking what is hidden and making it common—drawing it into the light, making it ordinary and useable. Yet this same power to reveal and extract is about to face a limit: there is one thing that man&apos;s labor cannot uncover, one treasure that defies all human excavation.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age of unprecedented discovery. We map the human genome. We peer into space. We mine metals and energies that power civilizations. Our capacity to reveal hidden things seems almost limitless. Yet Job invites us to ask: For all our discoveries, have we found what truly matters? Have we discovered wisdom itself?',
        },
        {
          kind: 'reflection',
          id: 'job28-discovery',
          prompt:
            'What has your own labor and ingenuity uncovered? What are you still searching for that no amount of effort seems to reveal?',
        },
      ],
    },

    /* ─── Job 28:12–19 — The Unreachable Treasure ───────────────────── */
    {
      ref: 'Job 28:12–19',
      title: 'But Wisdom—Where Shall It Be Found?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(12, 'But where shall wisdom be found? and where is the place of understanding?'),
            plain(13, 'Man knoweth not the price thereof; neither is it found in the land of the living.'),
            plain(14, 'The depth saith, It is not in me: and the sea saith, It is not in me.'),
            plain(15, 'It cannot be gotten for gold, neither shall silver be weighed for the price thereof.'),
            plain(16, 'It cannot be valued with the gold of Ophir, with the precious onyx, or the sapphire.'),
            plain(17, 'The gold and the crystal cannot equal it: and the exchange of it shall not be for jewels of fine gold.'),
            plain(18, 'No mention shall be made of coral, or of pearls: for the price of wisdom is above rubies.'),
            plain(19, 'The topaz of Ethiopia shall not equal it, neither shall it be valued with pure gold.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job28-wisdom-hidden',
          html:
            'After celebrating what man can find, Job turns abruptly to what man cannot find: wisdom. The depth of the earth says "It is not in me." The sea says "It is not in me." All the treasures he has just described—gold, onyx, sapphire, coral, pearls, rubies, topaz—all the wealth of the earth cannot purchase it. Wisdom is not a commodity. It cannot be bought. It cannot be priced. It stands outside the economy of exchange.',
        },
        {
          kind: 'commentary',
          id: 'job28-not-pricing',
          html:
            'This is the central reversal of the poem. Man is a creature who mines and measures, who exchanges and trades. But wisdom refuses to be measured or traded. It is not in the land of the living—not accessible to the living eye, not graspable by living hands. All human labor, all human ingenuity, reaches a boundary. Beyond that boundary lies the thing we most need, and we cannot reach it by our own strength.',
        },
        {
          kind: 'hebrew',
          id: 'job28-bina',
          title: 'Bina — Understanding',
          script: 'בִּינָה',
          translit: '<strong>Bina</strong> · understanding; the capacity to discern, to see between things',
          description:
            'Bina is not mere knowledge (yada). It is understanding—the ability to see the relationship between things, to perceive what lies beneath the surface, to discern truth from falsehood. It is insight. It cannot be mined because it is not material. It cannot be purchased because it belongs to a different order of reality entirely.',
        },
        {
          kind: 'carry',
          html:
            'In our modern world, we are wealthy in information but sometimes poor in understanding. We have access to more knowledge than any previous generation, yet wisdom—the ability to see rightly, to live rightly, to understand what truly matters—often eludes us. Job&apos;s question haunts us still: Where shall wisdom be found?',
        },
        {
          kind: 'reflection',
          id: 'job28-wealth',
          prompt:
            'What are you willing to trade for wisdom? Is there anything you would surrender—wealth, security, comfort—to truly understand yourself and God?',
        },
      ],
    },

    /* ─── Job 28:20–28 — The Answer ───────────────────────────────────── */
    {
      ref: 'Job 28:20–28',
      title: 'The Fear of the Lord Is Wisdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(20, 'Whence then cometh wisdom? and where is the place of understanding?'),
            plain(21, 'Seeing it is hid from the eyes of all living, and kept close from the fowls of the air.'),
            plain(22, 'Destruction and death say, We have heard the fame thereof with our ears.'),
            plain(23, 'God understandeth the way thereof, and he knoweth the place thereof.'),
            plain(24, 'For he looketh to the ends of the earth, and seeth under the whole heaven;'),
            plain(25, 'To make the weight for the winds; and he weigheth the waters by measure.'),
            plain(26, 'When he made a decree for the rain, and a way for the lightning of the thunder:'),
            plain(27, 'Then did he see it, and declare it; he prepared it, yea, and searched it out.'),
            plain(28, 'And unto man he said, Behold, the fear of the Lord, that is wisdom; and to depart from evil is understanding.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job28-god-knows',
          html:
            'The answer comes in a reversal. Wisdom cannot be found by men, but God knows it perfectly. God looks to the ends of the earth and sees beneath the heavens. God ordains the rain, directs the lightning, measures the waters. All the things that are hidden from man are transparent to God. God understands what lies beyond human reach. And then, from this knowledge—from understanding God&apos;s infinite wisdom and care—a path is opened to man.',
        },
        {
          kind: 'commentary',
          id: 'job28-fear-lord',
          html:
            '"Behold, the fear of the Lord, that is wisdom." Wisdom is not attained by mining or searching. It is received through reverence. To fear the Lord is to stand in awe before His greatness, to acknowledge His power and His goodness, to surrender your own will to His. This fear is the beginning of wisdom because it places you in a correct relationship to the source of all understanding.',
        },
        {
          kind: 'hebrew',
          id: 'job28-yira',
          title: 'Yira — Fear',
          script: 'יִרְאָה',
          translit: '<strong>Yira</strong> · fear; reverence; awe in the presence of the holy',
          description:
            'This fear is not terror or cowering. It is the reverence that awakens in the presence of the infinite. It is a kind of trembling before beauty, before power, before truth. To fear God is to wake up to His reality and to let that reality reshape your understanding of everything. It is the first and foundational step toward wisdom.',
        },
        {
          kind: 'christ',
          id: 'job28-christ-wisdom',
          title: 'Christ Connection — The Wisdom of God',
          html:
            'Paul writes in 1 Corinthians 1:24 and 1:30 that Christ is "the wisdom of God" and that in Christ "are hid all the treasures of wisdom and knowledge." What man cannot discover, God has revealed in Christ. The fear of the Lord that opens wisdom is ultimately the awe that encounters Christ—God made visible, God made vulnerable, God made human. In Christ, the hidden wisdom becomes approachable. The infinite becomes incarnate. And the beginning of this wisdom is not philosophical but relational: to fear, to revere, to stand in awe before the one who loved us unto death.',
        },
        {
          kind: 'carry',
          html:
            'Wisdom begins not with achievement but with surrender. Not with grasping but with receiving. Not with your effort, but with your stance before God. To fear the Lord is to position yourself correctly—as a creature before the Creator, as a learner before the Source of all understanding. From that posture, wisdom flows.',
        },
        {
          kind: 'reflection',
          id: 'job28-fear',
          prompt:
            'What would it mean to genuinely fear the Lord? How does reverence before God reshape what you think you need to know?',
        },
      ],
    },
  ],
};
