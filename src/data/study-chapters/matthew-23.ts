import { hp, t, plain, type RichChapterContent } from './types';

/**
 * Matthew 23 — Woes to the Pharisees
 *
 * Jesus pronounces seven woes against the scribes and Pharisees. They bind heavy
 * burdens on others but lift not a finger. They seek honor and applause. They shut
 * the kingdom against others. "Ye are like unto whited sepulchres... full of hypocrisy
 * and iniquity." Then: "O Jerusalem, Jerusalem, thou that killest the prophets... how
 * often would I have gathered thy children together, even as a hen gathereth her
 * chickens under her wings, and ye would not!" Jesus&apos; grief over the city He came to save.
 */
export const MATTHEW_23: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 23,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'Jesus speaks to the crowds and His disciples about the scribes and Pharisees. He does not attack them personally but critiques their teachings and actions. They sit in the seat of Moses—they claim authority based on the law—yet they do not live by what they teach. They make broad their phylacteries and enlarge the borders of their garments. They love the uppermost rooms at feasts and the chief seats in the synagogues.',
    'Then Jesus pronounces a series of woes, seven in total, each beginning with "Woe unto you, scribes and Pharisees, hypocrites." The word hypocrite means actor—one who plays a role. They appear righteous outwardly but are full of hypocrisy and iniquity within. The chapter culminates in Jesus&apos; lament over Jerusalem: His grief over a city that has rejected Him and will kill the messengers He sends.',
  ],

  sections: [
    /* ─── Matthew 23:1–36 — The Woes ───────────────────────────────────── */
    {
      ref: 'Matthew 23:1–36',
      title: 'Hypocrisy Exposed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(2, 'Saying, The scribes and the Pharisees sit in Moses&apos; seat:'),
            plain(3, 'All therefore whatsoever they bid you observe, that observe and do; but do not ye after their works: for they say, and do not.'),
            plain(23, 'Woe unto you, scribes and Pharisees, hypocrites! for ye pay tithe of mint and anise and cummin, and have omitted the weightier matters of the law, judgment, mercy, and faith.'),
            plain(25, 'Woe unto you, scribes and Pharisees, hypocrites! for ye make clean the outside of the cup and of the platter, but within they are full of extortion and excess.'),
            plain(27, 'Woe unto you, scribes and Pharisees, hypocrites! for ye are like unto whited sepulchres, which indeed appear beautiful outward, but are within full of dead men&apos;s bones, and of all uncleanness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt23-say-not-do',
          html:
            'Jesus acknowledges that the Pharisees sit in the seat of Moses—they claim authority over the interpretation of the law. "All therefore whatsoever they bid you observe, that observe and do; but do not ye after their works: for they say, and do not." The problem is not the law itself. The problem is hypocrisy—teaching one thing while living another. Their lives contradict their words.',
        },
        {
          kind: 'commentary',
          id: 'matt23-tithe',
          html:
            'The Pharisees meticulously tithe mint, anise, and cummin—spices and herbs. They observe every detail of the law. Yet they omit "the weightier matters of the law, judgment, mercy, and faith." They strain at gnats and swallow camels. Precision in the trivial masks neglect of the essential. Jesus calls them to invert their priorities.',
        },
        {
          kind: 'greek',
          id: 'matt23-hypokrites',
          title: 'Hypokrites — Hypocrite',
          script: 'ὑποκριτής',
          translit: '<strong>Hypokrites</strong> · hypocrite; actor; one who plays a role',
          description:
            'A hypokrites originally was an actor in a Greek play, one who wore a mask and pretended to be someone else. Jesus uses the word to describe those who present a false appearance—clean on the outside, corrupt within.',
        },
        {
          kind: 'commentary',
          id: 'matt23-sepulcher',
          html:
            'Jesus uses a stark image: "Ye are like unto whited sepulchres, which indeed appear beautiful outward, but are within full of dead men&apos;s bones, and of all uncleanness." Tombs are whitewashed to mark them as places of death and impurity. The Pharisees present an appearance of purity while harboring spiritual death within. They are "full of hypocrisy and iniquity."',
        },
        {
          kind: 'commentary',
          id: 'matt23-serpents',
          html:
            'Jesus speaks of their father: "Ye are of your father the devil." They are like serpents, a generation of vipers. Their nature is to oppose the truth. Yet Jesus also speaks of prophets sent to them—some killed, some scourged. They have persistently rejected God&apos;s messengers. Now the fullness of their sin approaches judgment.',
        },
        {
          kind: 'christ',
          id: 'matt23-christ-truth',
          title: 'Christ Connection — Christ the Truth Made Manifest',
          html:
            'Jesus embodies the justice, mercy, and faith the Pharisees omit. He is the truth—not merely speaking truth, but being truth incarnate. Where they hide behind masks and external observance, He lives with complete integrity of word and deed.',
        },
        {
          kind: 'carry',
          html:
            'Where are you clean on the outside but corrupt within? Where do your words contradict your actions? Where do you major in minors—attending to trivial laws while neglecting justice, mercy, and faith? Jesus calls you to alignment between inner and outer, between what you profess and how you live.',
        },
        {
          kind: 'reflection',
          id: 'matt23-hypocrisy',
          prompt: 'In what area of your life might you be a hypocrite—saying one thing and doing another? What would genuine alignment look like?',
        },
      ],
    },

    /* ─── Matthew 23:37–39 — Lament Over Jerusalem ────────────────────── */
    {
      ref: 'Matthew 23:37–39',
      title: 'Christ&apos;s Grief',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(37, 'O Jerusalem, Jerusalem, thou that killest the prophets, and stonest them which are sent unto thee, how often would I have gathered thy children together, even as a hen gathereth her chickens under her wings, and ye would not!'),
            plain(38, 'Behold, your house is left unto you desolate.'),
            plain(39, 'For I say unto you, Ye shall not see me henceforward, till ye shall say, Blessed is he that cometh in the name of the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt23-jerusalem',
          html:
            'The chapter concludes not with condemnation but with lament. "O Jerusalem, Jerusalem, thou that killest the prophets... how often would I have gathered thy children together... and ye would not!" Jesus speaks from longing, not anger. He desired to gather the people as a hen gathers her chicks under her wings. But they refused. The city that killed the prophets will kill the Messiah.',
        },
        {
          kind: 'commentary',
          id: 'matt23-desolate',
          html:
            'Jesus says: "Behold, your house is left unto you desolate." The temple, the seat of God&apos;s dwelling—your house. Soon it will be abandoned. The presence of God departs. Yet Jesus&apos; words also contain hope: "Ye shall not see me henceforward, till ye shall say, Blessed is he that cometh in the name of the Lord." When Jerusalem finally recognizes and welcomes Him, then He returns.',
        },
        {
          kind: 'greek',
          id: 'matt23-thelo',
          title: 'Thelo — Will; Wish; Desire',
          script: 'θέλω',
          translit: '<strong>Thelo</strong> · to will; to wish; to desire; to choose',
          description:
            'Jesus says "I would have gathered... and ye would not." The word captures both His willing desire and their refusal. God wills our good. Human freedom sometimes chooses otherwise.',
        },
        {
          kind: 'christ',
          id: 'matt23-christ-grief',
          title: 'Christ Connection — Christ&apos;s Compassion',
          html:
            'Jesus grieves over Jerusalem not as judge pronouncing sentence, but as shepherd weeping over lost sheep. He wanted to gather them, to protect them, to bring them home. Their refusal is not met with rage but with sorrow. This is a God who suffers when His people reject Him.',
        },
        {
          kind: 'carry',
          html:
            'Jesus extends an invitation to all. He gathers not by force but by love. Yet love requires a response. Where are you like Jerusalem, resisting Jesus&apos; invitation? What would it take for you to say, "Blessed is he that cometh in the name of the Lord"?',
        },
        {
          kind: 'reflection',
          id: 'matt23-gathered',
          prompt: 'Jesus wanted to gather Jerusalem. Are you resisting His gathering? What prevents you from coming fully under His wing?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O Jerusalem, Jerusalem... how often would I have gathered thy children together, even as a hen gathereth her chickens under her wings, and ye would not.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 23 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-pharisees-hypocrisy',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Pharisaic Hypocrisy and Jesus&apos; Critique',
      url: 'https://www.bibleodyssey.org/dictionary/pharisees/',
      description: 'Overview of Pharisaic practices and Jesus&apos; condemnation of their outward piety without inner transformation.',
    },
    {
      id: 'sefaria-matthew-23-woes',
      kind: 'study',
      source: 'Sefaria',
      label: 'Seven Woes of Matthew 23 — Literary Structure',
      url: 'https://www.sefaria.org/Matthew.23',
      description: 'Analysis of the seven-fold woe structure and Jesus&apos; prophetic confrontation of religious leadership.',
    },
    {
      id: 'bibleodyssey-jerusalem-destruction',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Jesus&apos; Lament Over Jerusalem',
      url: 'https://www.bibleodyssey.org/dictionary/jerusalem/',
      description: 'Historical context for Jesus&apos; grief over Jerusalem and prophecy of the temple&apos;s destruction.',
    },
  ],

  hasHebrew: false,
};
