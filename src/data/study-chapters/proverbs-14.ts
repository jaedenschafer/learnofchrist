import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Proverbs 14 — The Fear of the Lord, a Fountain of Life
 *
 * "The fear of the Lord is a fountain of life, to depart from the snares of
 * death." The chapter returns to its central theme: that reverence for God is
 * the source of life itself. It also insists: "Righteousness exalteth a nation:
 * but sin is a reproach to any people." The public health of a society is
 * determined by the moral character of its citizens.
 */
export const PROVERBS_14: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 14,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 7 },
  topicTags: ['wisdom', 'righteousness', 'folly', 'integrity'],
  opener: {
    topical: true,
    caption: 'Proverbs 14',
  },
  intros: [
    'The fourteenth chapter returns to the central concern of Proverbs: the fear of the Lord as the fountain of life. It also widens the scope beyond the individual life to the life of nations and communities. The righteousness or unrighteousness of a people shapes the destiny of their land. No nation, however powerful militarily or economically, can long survive without the foundation of moral truth.',
    'The chapter maintains the form of pithy sayings while returning to foundational themes. It is a gathering place where personal wisdom and communal responsibility meet.',
  ],

  sections: [
    {
      ref: 'Proverbs 14:1–18',
      title: 'Wisdom Builds; Folly Destroys',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(1, 'Every wise woman buildeth her house: but the foolish plucketh it down with her hands.'),
            plain(2, 'He that walketh in his uprightness feareth the Lord: but he that is perverse in his ways despiseth him.'),
            plain(3, 'In the mouth of the foolish is a rod of his own pride: but the lips of the wise shall preserve them.'),
            plain(4, 'Where no oxen are, the crib is clean: but much increase is by the strength of the ox.'),
            plain(5, 'A faithful witness will not lie: but a false witness will utter lies.'),
            plain(6, 'A scorner seeketh wisdom, and findeth it not: but knowledge is easy unto him that understandeth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov14-building-witnessing',
          html: 'Five proverbs on foundation: women build or tear down their houses. The upright fear the Lord; the perverse despise Him. Fools wound themselves with pride; the wise preserve themselves with restraint. The faithful witness stands; the false witness crumbles. These are the pillars of a life: reverence, speech, and truth.[res:british-museum-amenemope]',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(7, 'Go from the presence of a foolish man, when thou perceivest not in him the lips of knowledge.'),
            plain(8, 'The wisdom of the prudent is to understand his way: but the folly of fools is deceit.'),
            plain(9, 'Fools make a mock at sin: but among the righteous there is favour.'),
            plain(10, 'The heart knoweth his own bitterness; and a stranger doth not intermeddle with his joy.'),
            plain(11, 'The house of the wicked shall be overthrown: but the tabernacle of the upright shall flourish.'),
            plain(12, 'There is a way which seemeth right unto a man, but the end thereof are the ways of death.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov14-discernment-path',
          html: 'Six proverbs about discernment and the hidden path. Flee foolishness when you see it. The prudent understand their own way; fools deceive themselves. Fools mock sin; the righteous know shame. No one fully knows another&apos;s sorrows or joys. The wicked&apos;s house falls; the upright&apos;s flourishes. And the most dangerous error: the way that seems right but ends in death. Discernment is necessary.[res:sefaria-proverbs-14]',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(13, 'Even in laughter the heart is sorrowful; and the end of that mirth is heaviness.'),
            plain(14, 'The backslider in heart shall be filled with his own ways: and a good man shall be satisfied with his.'),
            plain(15, 'The simple believeth every word: but the prudent man looketh well to his going.'),
            plain(16, 'A wise man feareth, and departeth from evil: but the fool rageth, and is confident.'),
            plain(17, 'He that is soon angry dealeth foolishly: and a man of wicked devices is hated.'),
            plain(18, 'The simple inherit folly: but the prudent are crowned with knowledge.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov14-inner-state',
          html: 'Six proverbs on what is hidden and what is seen. Laughter can mask sorrow. The backslider is filled with his own emptiness; the good man is satisfied with his own fullness. The simple believe everything; the prudent are careful. The wise fear and depart; the fool rages and falls. Anger leads to folly. The end result: the simple inherit folly; the prudent are crowned with knowledge. You become what you repeatedly choose.[res:cambridge-up-proverbs-wisdom]',
        },
        {
          kind: 'commentary',
          id: 'prov14-woman-builds',
          html: '"Every wise woman buildeth her house: but the foolish plucketh it down with her hands." A woman who is wise builds. Not through dramatic gestures but through steady, wise choices—in how she orders her household, in what she teaches her children, in her faithfulness. But a foolish woman tears down what has been built, often without recognizing that she is doing it.',
        },
        {
          kind: 'hebrew',
          id: 'prov14-yetzer',
          title: 'Yetzer — "Ways" (Inclinations, Pathways)',
          script: 'יֵצֶר',
          translit: '<strong>Yetzer</strong> · ways; paths; inclinations; that which is formed',
          description: 'The way someone walks, the path they take repeatedly, shapes who they become. To walk in uprightness is to walk with reverence. To be perverse is to walk in contempt.',
        },
        {
          kind: 'commentary',
          id: 'prov14-rod-pride',
          html: '"In the mouth of the foolish is a rod of his own pride: but the lips of the wise shall preserve them." The fool speaks in pride, and his own words become a rod that beats him. The wise speak carefully, and their words preserve them. What comes out of the mouth reveals and shapes what is inside.',
        },
        {
          kind: 'commentary',
          id: 'prov14-way-seemeth-right',
          html: '"There is a way which seemeth right unto a man, but the end thereof are the ways of death." This is the most dangerous kind of error—the error that feels right, that seems aligned with what we want, but that leads actually to death. Discernment is necessary to see beyond the seeming to the actual.',
        },
        {
          kind: 'carry',
          html: 'The proverbs invite you to consider: What are you building or destroying through your choices? What words are coming out of your mouth? Are you walking in a way that seems right but actually leads to death? Are you living with the fear of the Lord?',
        },
        {
          kind: 'reflection',
          id: 'prov14-building-tearing',
          prompt: 'Are you building or tearing down in your relationships, your family, your community? What would change if you approached each day with the intention to build rather than tear down?',
        },
      ],
    },

    {
      ref: 'Proverbs 14:19–35',
      title: 'The Fear of the Lord and the Exaltation of Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(19, 'The evil bow before the good; and the wicked at the gates of the righteous.'),
            plain(20, 'The poor is hated even of his own neighbour: but the rich hath many friends.'),
            plain(21, 'He that despiseth his neighbour sinneth: but he that hath mercy on the poor, happy is he.'),
            plain(22, 'Do they not err that devise evil? but mercy and truth shall be to them that devise good.'),
            plain(23, 'In all labour there is profit: but the talk of the lips tendeth only to penury.'),
            plain(24, 'The crown of the wise is their riches: but the foolishness of fools is folly.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov14-evil-bows',
          html: 'Six proverbs on power and mercy. The evil bow before the good—true authority flows from righteousness, not from wealth or armies. The poor are despised, yet to despise them is to sin. To show mercy to them is to be happy. Those who devise good receive mercy and truth. Labor profits; empty talk impoverishes. Wisdom is the true crown.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(25, 'A true witness delivereth souls: but a deceitful witness speaketh lies.'),
            plain(26, 'In the fear of the Lord is strong confidence: and his children shall have a place of refuge.'),
            plain(27, 'The fear of the Lord is a fountain of life, to depart from the snares of death.'),
            plain(28, 'In the multitude of people is the king&apos;s honour: but in the want of people is the destruction of the prince.'),
            plain(29, 'He that is slow to wrath is of great understanding: but he that is hasty of spirit exalteth folly.'),
            plain(30, 'A sound heart is the life of the flesh: but envy the rottenness of the bones.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov14-fear-fountain-expanded',
          html: 'Six proverbs on the fear of the Lord as the wellspring. A true witness delivers; lies destroy. The fear of God gives strong confidence and a place of refuge. It is a fountain of life, delivering from death. Community matters: the king&apos;s honor flows through people. Patience brings understanding; haste brings folly. A sound heart gives life; envy rots you from inside.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(31, 'He that oppresseth the poor reproacheth his Maker: but he that honoureth him hath mercy on the poor.'),
            plain(32, 'The wicked is driven away in his wickedness: but the righteous hath hope in his death.'),
            plain(33, 'Wisdom resteth in the heart of him that hath understanding: but that which is in the midst of fools is made known.'),
            plain(34, 'Righteousness exalteth a nation: but sin is a reproach to any people.'),
            plain(35, 'The king&apos;s favour is toward a wise servant: but his wrath is against him that causeth shame.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov14-national-conscience',
          html: 'Five final proverbs move from the personal to the political. To oppress the poor is to insult their Maker. The wicked are driven away by their own wickedness; the righteous have hope even in death. Wisdom is silent in a wise heart; folly blares in fools. And here is the final truth: righteousness exalts a nation; sin shames it. This is not opinion. It is the structure of reality.',
        },
        {
          kind: 'commentary',
          id: 'prov14-fear-fountain',
          html: '"The fear of the Lord is a fountain of life, to depart from the snares of death." This is the central claim repeated throughout Proverbs. Reverence for God is not a burden or a restriction. It is a source of life itself, and it delivers us from the traps and snares that would destroy us. To fear the Lord is to escape death.',
        },
        {
          kind: 'commentary',
          id: 'prov14-righteousness-nation',
          html: '"Righteousness exalteth a nation: but sin is a reproach to any people." This shifts from personal to national. The character of individuals shapes the character of nations. A nation built on righteousness—on truth, on justice, on respect for the law of God—will be exalted. A nation that tolerates sin, that celebrates deception and cruelty, will be brought low. This is not arbitrary. It is the structure of reality itself.',
        },
        {
          kind: 'commentary',
          id: 'prov14-oppress-poor',
          html: '"He that oppresseth the poor reproacheth his Maker: but he that honoureth him hath mercy on the poor." To oppress the poor is to insult God. Every person is made in God&apos;s image. To degrade a poor person is to degrade the one whose image they bear. But to show mercy to the poor is to honor God.',
        },
        {
          kind: 'christ',
          id: 'prov14-christ-refuge',
          title: 'Christ Connection — Christ as Our Refuge',
          html: '"In the fear of the Lord is strong confidence: and his children shall have a place of refuge." In Christ, we find that place of refuge. His fear—reverence, awe, the knowledge of His power and majesty—gives us confidence, knowing that we are held in His hands.',
        },
        {
          kind: 'carry',
          html: 'The wisdom of Proverbs 14 calls you to see beyond the individual moment to the longer arc. How you treat the poor, what kind of nation we build, what we do with power—all of these matter. They shape the world. And at the root of it all is the fear of the Lord, which is a fountain of life.',
        },
        {
          kind: 'reflection',
          id: 'prov14-national-conscience-2',
          prompt: 'What role do you play in the moral character of your nation? Are you building righteousness or tolerating sin? Are you honoring the poor or oppressing them? What kind of foundation are you helping to lay?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The fear of the Lord is a fountain of life, to depart from the snares of death. Righteousness exalteth a nation: but sin is a reproach to any people.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 14 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-proverbs-14',
      kind: 'study',
      source: 'Sefaria',
      label: 'Proverbs 14',
      url: 'https://www.sefaria.org/Proverbs.14',
      description: 'Sefaria open-access source text and translations for Proverbs 14.',
    },
    {
      id: 'british-museum-amenemope',
      kind: 'museum',
      source: 'British Museum',
      label: 'Egyptian Instruction of Amenemope',
      url: 'https://www.britishmuseum.org/',
      description: 'ANE parallel to Proverbs 22:17–23:11 — Egypt&apos;s wisdom literature parallel to biblical instruction.',
    },
    {
      id: 'cambridge-up-proverbs-wisdom',
      kind: 'study',
      source: 'Cambridge UP',
      label: 'Proverbs and Ancient Near Eastern Wisdom',
      url: 'https://www.cambridge.org/',
      description: 'Scholarly analysis of Proverbs within ANE wisdom tradition.',
    },
  ],

  hasHebrew: true,
};
