import { hp, t, plain, type RichChapterContent } from './types';

/**
 * Matthew 19 — Marriage, Wealth, and the Kingdom
 *
 * Jesus addresses divorce: "What therefore God hath joined together, let not man
 * put asunder." Children are brought to Him; He says the kingdom belongs to such
 * as these. A rich young ruler asks about eternal life. Jesus calls him to sell all
 * and follow. The ruler goes away grieved, for he has great possessions. "With God
 * all things are possible"—but that possibility requires letting go of what we
 * cling to.
 */
export const MATTHEW_19: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 19,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 5 },
  intros: [
    'Jesus journeys to Judea, and crowds follow. He teaches about marriage and divorce, declaring that God joins a man and woman together, and what He has joined, no human should separate. Children are brought to Jesus for blessing. The disciples try to turn them away, but Jesus welcomes them, saying the kingdom of heaven belongs to such as these.',
    'A young man approaches Jesus, kneeling respectfully. He has kept the commandments from his youth. What more does he lack? Jesus sees into his heart and identifies what binds him: his wealth. "If thou wilt be perfect, go and sell that thou hast, and give to the poor... and come and follow me." The young man goes away grieved. He cannot let go. The chapter closes with the somber reminder: many are called, but how few are chosen?',
  ],

  sections: [
    /* ─── Matthew 19:1–15 — Marriage and Children ───────────────────────── */
    {
      ref: 'Matthew 19:1–15',
      title: 'Covenant and Belonging',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(3, 'The Pharisees also came unto him, tempting him, and saying unto him, Is it lawful for a man to put away his wife for every cause?'),
            plain(4, 'And he answered and said unto them, Have ye not read, that he which made them at the beginning made them male and female,'),
            plain(6, 'Wherefore they are no more twain, but one flesh. What therefore God hath joined together, let not man put asunder.'),
            plain(13, 'Then were there brought unto him little children, that he should put his hands on them, and pray: and the disciples rebuked them.'),
            plain(14, 'But Jesus said, Suffer little children to come unto me: and forbid them not: for of such is the kingdom of heaven.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt19-marriage',
          html:
            'The Pharisees test Jesus on divorce [res:sefaria-genesis-2-24]. Jewish law permitted divorce, but the debate centered on grounds. Jesus goes to the heart: at creation, God made them male and female and joined them. Marriage is not a contract to be dissolved at pleasure. It is a covenant bond—"one flesh." What God has joined, humans lack the authority to separate[res:intertextual-laborers-vineyard].',
        },
        {
          kind: 'commentary',
          id: 'matt19-children',
          html:
            'When children are brought to Jesus, the disciples try to turn them away. They are busy, important, occupied with serious matters. Jesus rebukes this. He touches them. He prays for them. He teaches His disciples: the kingdom of heaven is not for the powerful and accomplished. It belongs to children—the dependent, the vulnerable, the small.',
        },
        {
          kind: 'greek',
          id: 'matt19-syzeugnymi',
          title: 'Syzeugnymi — Joined',
          script: 'συζεύγνυμι',
          translit: '<strong>Syzeugnymi</strong> · to join together; to yoke together; to unite',
          description:
            'The Greek word refers to yoking animals together, to joining in harness. Marriage is God&apos;s yoking—a binding together of two persons into one household, one life. The word emphasizes not sentiment but deep, structural unity.',
        },
        {
          kind: 'christ',
          id: 'matt19-christ-covenant',
          title: 'Christ Connection — Christ the Covenant Keeper',
          html:
            'Jesus teaches that marriage reflects God&apos;s covenant faithfulness. Just as God keeps His covenant with His people, husbands and wives are called to covenant fidelity. Christ Himself is the bridegroom, the church His bride. His love for the church is steadfast, covenant love that does not abandon.',
        },
        {
          kind: 'carry',
          html:
            'In what relationships have you made covenants? How seriously do you honor them? Jesus teaches that binding commitments reflect something sacred about how God loves us.',
        },
        {
          kind: 'reflection',
          id: 'matt19-covenant',
          prompt: 'What does it mean to you that Jesus welcomes children? How does that challenge your view of who belongs in the kingdom?',
        },
      ],
    },

    /* ─── Matthew 19:16–30 — The Rich Young Ruler ──────────────────────── */
    {
      ref: 'Matthew 19:16–30',
      title: 'The Cost of Perfection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(16, 'And, behold, one came and said unto him, Good Master, what good thing shall I do that I may have eternal life?'),
            plain(17, 'And he said unto him, Why callest thou me good? there is none good but one, that is, God: but if thou wilt enter into life, keep the commandments.'),
            plain(21, 'Jesus said unto him, If thou wilt be perfect, go and sell that thou hast, and give to the poor, and thou shalt have treasure in heaven: and come and follow me.'),
            plain(22, 'But when the young man heard that saying, he went away sorrowful: for he had great possessions.'),
            plain(26, 'But Jesus looked upon them and said unto them, With men this is impossible; but with God all things are possible.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt19-ruler',
          html:
            'A young man, addressed as a ruler—likely wealthy and of high social standing—approaches Jesus respectfully. He claims to have kept all the commandments from his youth. What lack he? He wants perfection, completeness, fullness of life. Jesus does not deny this is possible. But He identifies the obstacle: possessions. The man is bound, though he does not see it.',
        },
        {
          kind: 'commentary',
          id: 'matt19-sell-all',
          html:
            'Jesus does not demand that all who follow Him sell everything. But He knows this man [res:bibleodyssey-rich-ruler]. His wealth is his god, his security, his identity. "If thou wilt be perfect, go and sell that thou hast, and give to the poor... and come and follow me." The cost of following is everything. The man counts the cost, finds it too high, and walks away. His great possessions keep him from the greatest possession—eternal life.',
        },
        {
          kind: 'greek',
          id: 'matt19-teleioo',
          title: 'Teleios — Perfect; Complete',
          script: 'τέλειος',
          translit: '<strong>Teleios</strong> · perfect; complete; whole; lacking nothing',
          description:
            'Teleios refers to wholeness, completeness, the fulfillment of purpose. The young man seeks to be teleios—complete, lacking nothing. Yet what he lacks is invisible to him. True completeness comes not through addition but through release.',
        },
        {
          kind: 'commentary',
          id: 'matt19-impossible',
          html:
            'Jesus speaks the astounding truth: "With men this is impossible; but with God all things are possible." Humans cannot save themselves by keeping laws or accumulating virtue. But God can transform a human heart, release it from bondage to possessions, and make it whole. What is humanly impossible becomes possible through divine grace.',
        },
        {
          kind: 'christ',
          id: 'matt19-christ-above-wealth',
          title: 'Christ Connection — Christ Above All Wealth',
          html:
            'Jesus teaches that He is more valuable than any earthly possession. To follow Him, you must be willing to release all competing claims—status, wealth, security. Yet the trade is astounding: loss of earthly treasure for heavenly treasure, loss of temporal security for eternal life.',
        },
        {
          kind: 'carry',
          html:
            'What possessions, relationships, or pursuits are you unwilling to relinquish? What are you clinging to that Christ is asking you to release? The promise is that what you lose in following Him, you will find again—transformed, sanctified, and eternal.',
        },
        {
          kind: 'reflection',
          id: 'matt19-surrender',
          prompt: 'If Jesus looked at you and asked, "What one thing are you unwilling to surrender?" what would you say? Why?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'If thou wilt be perfect, go and sell that thou hast, and give to the poor... With God all things are possible.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 19 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-2-24',
      kind: 'study',
      source: 'Sefaria',
      label: 'Genesis 2:24 — Marriage Covenant',
      url: 'https://www.sefaria.org/Genesis.2.24',
      description: 'Old Testament foundation for Jesus&apos; teaching on marriage as a sacred union "one flesh."',
    },
    {
      id: 'bibleodyssey-rich-ruler',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Rich Young Ruler — Gospel Parallels',
      url: 'https://www.bibleodyssey.org/dictionary/rich-young-ruler/',
      description: 'Comparison of the encounter across Matthew, Mark, and Luke, with theological implications.',
    },
    {
      id: 'intertextual-laborers-vineyard',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Laborers in the Vineyard — Matthew Only',
      url: 'https://intertextual.bible/text/matthew-20.1',
      description: 'Parable of grace and God&apos;s generous reward, unique to Matthew&apos;s Gospel.',
    },
  ],

  hasHebrew: false,
};
