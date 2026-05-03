import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Proverbs 10 — The Proverbs of Solomon Proper Begin
 *
 * "The proverbs of Solomon." Here begins the collection of short, pithy sayings
 * that dominate the rest of the book. "He that gathereth in summer is a wise
 * son; but he that sleepeth in harvest is a son that causeth shame." The sayings
 * are presented without narrative, without explanation. They are compressed
 * wisdom: observation of cause and effect, of the way life actually works, of
 * the consequences that follow from our choices.
 */
export const PROVERBS_10: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 10,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'With Proverbs 10, the form of the book changes. The extended narratives and personifications of Wisdom and Folly are set aside. Now we enter the realm of short, punchy sayings—the famous proverbs that people quote and live by. Each verse is generally a couplet, often built on stark contrasts: the righteous and the wicked, the wise and the fool, the diligent and the lazy. Each saying is a distilled observation about how the world works.',
    'The genius of these short sayings is that they force us to see connections we might otherwise miss. A verse about gathering in summer is not merely about agriculture. It is about foresight, about the difference between those who prepare and those who sleep through their opportunities. The proverbs invite us to see our own lives in these images.',
  ],

  sections: [
    {
      ref: 'Proverbs 10:1–15',
      title: 'The Wise and the Fool Contrasted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(1, 'The proverbs of Solomon. A wise son maketh a glad father: but a foolish son is the heaviness of his mother.'),
            plain(2, 'Treasures of wickedness profit nothing: but righteousness delivereth from death.'),
            plain(3, 'The Lord will not suffer the soul of the righteous to famish: but he casteth away the substance of the wicked.'),
            plain(4, 'He that dealeth with a slack hand becometh poor: but the hand of the diligent maketh rich.'),
            plain(5, 'He that gathereth in summer is a wise son: but he that sleepeth in harvest is a son that causeth shame.'),
            plain(6, 'Blessings are upon the head of the just: but violence covereth the mouth of the wicked.'),
            plain(7, 'The memory of the just is blessed: but the name of the wicked shall rot.'),
            plain(8, 'The wise in heart will receive commandments: but a prating fool shall fall.'),
            plain(9, 'He that walketh uprightly walketh surely: but he that perverteth his ways shall be known.'),
            plain(10, 'He that winketh with the eye causeth sorrow: but a prating fool shall fall.'),
            plain(11, 'The mouth of a righteous man is a well of life: but violence covereth the mouth of the wicked.'),
            plain(12, 'Hatred stirreth up strifes: but love covereth all sins.'),
            plain(13, 'In the lips of him that hath understanding wisdom is found: but a rod is for the back of him that is void of understanding.'),
            plain(14, 'Wise men lay up knowledge: but the mouth of the foolish is near destruction.'),
            plain(15, 'The rich man&apos;s wealth is his strong city: the destruction of the poor is their poverty.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov10-contrast',
          html: 'Each verse builds on contrast. A wise son brings joy to his father. A foolish son brings heaviness to his mother. Treasures won through wickedness profit nothing. Righteousness delivers from death. The pattern is consistent: two ways, two outcomes. The proverbs assume that the world responds to the way you live. You cannot walk in folly and expect to enjoy the fruits of wisdom.',
        },
        {
          kind: 'hebrew',
          id: 'prov10-qatzir',
          title: 'Qatzir — "Harvest" (Reaping)',
          script: 'קָצִיר',
          translit: '<strong>Qatzir</strong> · harvest; reaping; the gathered crop',
          description: 'The word suggests both the labor of gathering and what is gathered. To harvest is to reap what has been sown. The proverbs are filled with this agricultural metaphor: you reap what you sow.',
        },
        {
          kind: 'commentary',
          id: 'prov10-slack-hand',
          html: 'Laziness and diligence are not abstract qualities. They have concrete effects. "He that dealeth with a slack hand becometh poor: but the hand of the diligent maketh rich." This is not primarily moral judgment. It is observation. Those who work grow wealthy. Those who do not work grow poor. The world has a built-in logic.',
        },
        {
          kind: 'commentary',
          id: 'prov10-memory-blessed',
          html: 'Perhaps the most poignant saying: "The memory of the just is blessed: but the name of the wicked shall rot." It is not enough to live well in the moment. What matters is what your life means in memory. What do people say about you after you are gone? The righteous are remembered with blessing. The wicked are forgotten with contempt.',
        },
        {
          kind: 'christ',
          id: 'prov10-christ-life',
          title: 'Christ Connection — The Well of Life',
          html: 'Verse 11 speaks of "the mouth of a righteous man is a well of life." In John 4, Jesus speaks of water that springs up to eternal life. He is that well. His words are the well from which eternal life flows. To drink of His words is to drink from the well of life itself.',
        },
        {
          kind: 'carry',
          html: 'The proverbs assume that you can see cause and effect if you pay attention. Look at those who are diligent—they grow wealthy. Look at those who are lazy—they grow poor. Look at those whose words are kind—they build community. Look at those whose words are cutting—they sow discord. The question is: Are you paying attention? Are you gathering in your summer, or sleeping through your harvest?',
        },
        {
          kind: 'reflection',
          id: 'prov10-own-proverbs',
          prompt: 'What do your own choices, repeated day after day, say about you? What would your life look like five years from now if you continued in the path you&apos;re walking?',
        },
      ],
    },

    {
      ref: 'Proverbs 10:16–32',
      title: 'Words, Work, and Wisdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(16, 'The labour of the righteous tendeth to life: the fruit of the wicked to sin.'),
            plain(17, 'He is in the way of life that keepeth instruction: but he that refuseth reproof erreth.'),
            plain(18, 'He that hideth hatred with lying lips, and he that uttereth a slander, is a fool.'),
            plain(19, 'In the multitude of words there wanteth not sin: but he that refraineth his lips is wise.'),
            plain(20, 'The tongue of the just is as choice silver: the heart of the wicked is little worth.'),
            plain(21, 'The lips of the righteous feed many: but fools die for want of wisdom.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov10-labor-lips-first',
          html: 'Five proverbs turn on the connection between labor, instruction, and the power of words. Righteous labor tends to life; the wicked fruit tends to sin. Those who heed instruction walk in life; those who refuse reproof go astray. Your tongue is either choice silver or worthless—your words either feed others or expose your fool-ness. The righteous choose to speak truth and restraint; the wicked hide hatred behind lies.',
        },
        {
          kind: 'commentary',
          id: 'prov10-labor-lips',
          html: 'Five proverbs turn on the same axis: the righteous build themselves up through work and restraint, the wicked tear themselves down through talk and deception. Your labor tends somewhere. Your silence is sometimes your greatest tool. Your tongue is either silver or worthless—the choice is yours.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(22, 'The blessing of the Lord, it maketh rich, and he addeth no sorrow with it.'),
            plain(23, 'It is as sport to a fool to do mischief: but a man of understanding hath wisdom.'),
            plain(24, 'The fear of the wicked, it shall come upon him: but the desire of the righteous shall be granted.'),
            plain(25, 'As the whirlwind passeth, so is the wicked no more: but the righteous is an everlasting foundation.'),
            plain(26, 'As vinegar to the teeth, and as smoke to the eyes, so is the sluggard to them that send him.'),
            plain(27, 'The fear of the Lord prolongeth days: but the years of the wicked shall be shortened.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov10-blessing-endure',
          html: 'Six proverbs about what endures and what passes. God&apos;s blessing brings wealth without sorrow. The wicked pass away like a whirlwind—they seem solid, but they are not. The righteous are an everlasting foundation. To be close to a sluggard is to taste vinegar and smoke. These contrasts are absolute: longevity, foundation, permanence on one side; ruin, dissolution, brevity on the other.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(28, 'The hope of the righteous shall be gladness: but the expectation of the wicked shall perish.'),
            plain(29, 'The way of the Lord is strength to the upright: but destruction shall be to the workers of iniquity.'),
            plain(30, 'The righteous shall never be removed: but the wicked shall not inhabit the earth.'),
            plain(31, 'The mouth of the just bringeth forth wisdom: but the froward tongue shall be cut out.'),
            plain(32, 'The lips of the righteous know what is acceptable: but the mouth of the wicked speaketh frowardness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov10-hope-permanence',
          html: 'Five final proverbs return to the promise: your hope, if you are righteous, will be gladness. You will not be removed. You belong. Your words matter. But the wicked—their expectations perish, they are destroyed, they are cut out. The chapter closes with this absolute division: two categories, two destinies, two visions of what is true.',
        },
        {
          kind: 'commentary',
          id: 'prov10-multitude-words',
          html: 'One of the most practical proverbs: "In the multitude of words there wanteth not sin: but he that refraineth his lips is wise." The more you talk, the more likely you are to stumble into sin. But the person who knows when to be silent, who restrains their lips, demonstrates wisdom. Less is more. Silence is a virtue.',
        },
        {
          kind: 'commentary',
          id: 'prov10-tongue-silver',
          html: 'The tongue of the just is compared to choice silver—valuable, refined, treasured. The heart of the wicked is little worth—whatever treasure they accumulate in other ways, their inner nature is worthless. What you are inside, what your character is, is what truly matters.',
        },
        {
          kind: 'commentary',
          id: 'prov10-whirlwind',
          html: 'The image of the wicked passing away like a whirlwind is striking. They seem powerful, they seem dangerous, but they are without substance. They pass and are gone. The righteous, by contrast, are "an everlasting foundation." Built on rock, not sand. Permanent, not temporary.',
        },
        {
          kind: 'carry',
          html: 'The proverbs of Solomon assume a moral order built into the world. Righteous labor tends to life. The blessing of the Lord makes rich. The fear of the Lord prolongs days. Work with this grain, and you flourish. Work against it, and you struggle. The question is: Will you arrange your life according to what you observe to be true?',
        },
        {
          kind: 'reflection',
          id: 'prov10-everlasting-foundation',
          prompt: 'What kind of foundation are you building with your choices? Are you building something that will last, or something that will pass away like the whirlwind?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He that gathereth in summer is a wise son: but he that sleepeth in harvest is a son that causeth shame. The memory of the just is blessed: but the name of the wicked shall rot.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 10 · Study Guide',
  },

  hasHebrew: true,
};
