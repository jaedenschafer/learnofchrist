import { hp, hg, t, plain, type RichChapterContent } from './types';

/**
 * Matthew 15 — Tradition vs. Commandment
 *
 * "These people draweth nigh unto me with their mouth, and their heart is far
 * from me." Jesus confronts the Pharisees over ceremonial washing and oath-keeping
 * that contradict God&apos;s law. What defiles a person comes not from unwashed
 * hands but from an evil heart. A Canaanite woman—a Gentile—cries out for mercy
 * for her daughter: "Even the dogs eat of the crumbs." Jesus honors her faith and
 * grants her request. The kingdom expands. Then Jesus feeds 4,000 in the
 * wilderness, echoing the abundance of God&apos;s care.
 */
export const MATTHEW_15: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 15,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 5 },
  opener: {
    matchTitle: /Jesus Heals the Blind/i,
    caption: 'Matthew 15',
  },
  intros: [
    'The scribes and Pharisees come from Jerusalem to challenge Jesus about His disciples, who eat bread with unwashed hands, violating the traditions of the elders. Jesus responds not by defending His disciples&apos; behavior, but by exposing the deeper issue: the Pharisees have made tradition a substitute for God&apos;s commandment. Their oral laws have become more binding than the written Word.',
    'In the middle of Matthew 15, a Canaanite woman—a Gentile, an outsider—comes to Jesus crying for mercy. Her daughter is grievously vexed by a demon. Jesus&apos; initial silence and the disciples&apos; dismissal seem harsh. But the woman persists, and her faith is rewarded. The lesson shifts: the kingdom of God is not reserved for the sons of Israel alone. Even a despised outsider can find grace when she comes with desperate faith.',
  ],

  sections: [
    /* ─── Matthew 15:1–20 — Tradition vs. God&apos;s Command ───────────────── */
    {
      ref: 'Matthew 15:1–20',
      title: 'What Defiles a Person',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(1, 'Then came to Jesus scribes and Pharisees, which were of Jerusalem, saying,'),
            plain(2, 'Why do thy disciples transgress the tradition of the elders? for they wash not their hands when they eat bread.'),
            plain(8, 'This people draweth nigh unto me with their mouth, and honoureth me with their lips; but their heart is far from me.'),
            plain(10, 'Not that which goeth into the mouth defileth a man; but that which cometh out of the mouth, this defileth a man.'),
            plain(19, 'For out of the heart proceed evil thoughts, murders, adulteries, fornications, thefts, false witness, blasphemies.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt15-tradition',
          html:
            'The Pharisees hold to the traditions of the elders—elaborate oral laws developed to protect God&apos;s written commandment from being broken [res:bibleodyssey-pharisees]. Yet in their zeal, they have made tradition equal to, or even superior to, God&apos;s law itself. They honor God with their lips while their hearts are far from Him. Jesus sees through this: they have substituted external compliance for inner transformation[res:sefaria-mark-7-purity].',
        },
        {
          kind: 'commentary',
          id: 'matt15-heart',
          html:
            'Jesus redirects the entire conversation away from hands and toward the heart. "Not that which goeth into the mouth defileth a man; but that which cometh out of the mouth, this defileth a man." What you eat does not make you unclean. What flows from your heart—envy, murder, adultery, theft, lies—this is what separates you from God. Righteousness is a matter of the interior, not mere exterior performance.',
        },
        {
          kind: 'greek',
          id: 'matt15-kardia',
          title: 'Kardia — Heart',
          script: 'καρδία',
          translit: '<strong>Kardia</strong> · heart; center of affection, will, and thought',
          description:
            'The Greek word kardia refers to the heart not as an organ but as the seat of understanding, intention, and moral will. In biblical usage, the heart is where truth is known, where devotion is offered, where sin originates. Jesus teaches that God cares not for outward ritual but for the condition of the heart.',
        },
        {
          kind: 'christ',
          id: 'matt15-christ-heart',
          title: 'Christ Connection — Circumcision of Heart',
          html:
            'Jesus calls for an inward change, a circumcision not of flesh but of the heart. He fulfills the promise of Deuteronomy: "The LORD thy God will circumcise thine heart." External observance means nothing without genuine transformation within. Christ offers that transformation—forgiveness that cleanses not merely your behavior but your very being.',
        },
        {
          kind: 'carry',
          html:
            'In your own spiritual life, what traditions are you keeping that may have become hollow? What external rules are you following while your heart drifts? Jesus&apos; challenge here is to examine the interior: your motives, your desires, your true allegiances.',
        },
        {
          kind: 'reflection',
          id: 'matt15-traditions',
          prompt: 'What religious practices feel most alive and meaningful to you? Which ones have begun to feel like mere obligation? What would help you reconnect the outer form with inner belief?',
        },
      ],
    },

    /* ─── Matthew 15:21–39 — Faith of a Canaanite Woman and 4,000 Fed ────── */
    {
      ref: 'Matthew 15:21–39',
      title: 'Faith Beyond Boundaries',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(22, 'And, behold, a woman of Canaan came out of the same coasts, and cried unto him, saying, Have mercy on me, O Lord, thou son of David; my daughter is grievously vexed with a devil.'),
            plain(24, 'But he answered and said, I am not sent but unto the lost sheep of the house of Israel.'),
            plain(27, 'And she said, Truth, Lord: yet the dogs eat of the crumbs which fall from their masters&apos; table.'),
            plain(28, 'Then Jesus answered and said unto her, O woman, great is thy faith: be it unto thee even as thou wilt. And her daughter was made whole from that very hour.'),
            plain(32, 'Then Jesus called his disciples unto him, and said, I have compassion on the multitude, because they continue with me now three days, and have nothing to eat: and I will not send them away fasting, lest they faint in the way.'),
            plain(38, 'And they that did eat were four thousand men, beside women and children.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt15-canaanite',
          html:
            'A woman of Canaan—a pagan woman, an outsider, a member of a people the Israelites were commanded to drive out—comes to Jesus in desperation [res:intertextual-canaanite-woman]. Her daughter is tormented by a demon. She calls Jesus "Lord" and "Son of David." Jesus&apos; initial response seems cold: "I am not sent but unto the lost sheep of the house of Israel." But the woman does not retreat. She knows the crumbs from the master&apos;s table are enough.',
        },
        {
          kind: 'commentary',
          id: 'matt15-crumbs',
          html:
            'The woman&apos;s humility and faith are extraordinary. She accepts the position of a dog under the table, yet she trusts that even the crumbs falling from Jesus&apos; bounty are sufficient. Jesus honors her faith—the very quality the scribes and Pharisees lack. He grants her request immediately. Her daughter is healed in that hour. The kingdom expands to include those deemed unworthy by the law.',
        },
        {
          kind: 'greek',
          id: 'matt15-pistis',
          title: 'Pistis — Faith',
          script: 'πίστις',
          translit: '<strong>Pistis</strong> · faith; trust; reliance; conviction',
          description:
            'Pistis is not mere intellectual agreement. It is trust—a turning of one&apos;s whole self toward another, a reliance, a resting upon. The Canaanite woman&apos;s faith means she trusts Jesus beyond the boundaries of law and custom. She believes He has the power and the will to heal.',
        },
        {
          kind: 'christ',
          id: 'matt15-christ-gentiles',
          title: 'Christ Connection — Christ for All Nations',
          html:
            'Jesus&apos; healing of the Canaanite woman&apos;s daughter signals a truth that will become explicit at the end of Matthew: the gospel is for all nations. The boundary between Jew and Gentile, clean and unclean, insider and outsider is being erased. Christ&apos;s authority and compassion extend to anyone who comes to Him with faith, regardless of lineage or status.',
        },
        {
          kind: 'carry',
          html:
            'The feeding of the 4,000 echoes the earlier feeding of the 5,000 but occurs in a different context, among a mixed multitude. Jesus&apos; compassion knows no borders. He sees their hunger and responds. In your own life, to whom do you refuse to extend compassion because they seem undeserving? What boundaries might Christ be calling you to cross?',
        },
        {
          kind: 'reflection',
          id: 'matt15-faith',
          prompt: 'What would it take for you to persist in asking Jesus for something after receiving what feels like a "no"? Where do you need greater faith?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Then Jesus answered and said unto her, O woman, great is thy faith: be it unto thee even as thou wilt.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 15 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-pharisees',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Pharisees and Their Traditions',
      url: 'https://www.bibleodyssey.org/dictionary/pharisees/',
      description: 'Overview of Pharisaic thought, oral traditions, and their conflicts with Jesus over law and purity.',
    },
    {
      id: 'intertextual-canaanite-woman',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Canaanite Woman — Gospel Parallels',
      url: 'https://intertextual.bible/search?q=Matthew+15+21',
      description: 'Comparison of the Canaanite woman story across Matthew and Mark, with interpretative notes.',
    },
    {
      id: 'sefaria-mark-7-purity',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jewish Purity Laws and Tradition',
      url: 'https://www.sefaria.org/Leviticus.11',
      description: 'Old Testament foundation for purity laws that Jesus challenges in His teaching on defilement.',
    },
  ],

  hasHebrew: false,
};
