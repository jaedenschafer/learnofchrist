import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Proverbs 9 — Wisdom's Banquet and Folly's Table
 *
 * "Wisdom hath builded her house, she hath hewn out her seven pillars." Here
 * are two invitations, two tables, two ways of living. Wisdom prepares a
 * banquet and calls to all to come and eat. Folly does the same, sitting at her
 * door, calling to the simple. One leads to life. The other leads to the grave.
 * The choice is stark. The invitation is extended to all.
 */
export const PROVERBS_9: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 9,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  topicTags: ['wisdom', 'righteousness', 'folly', 'integrity'],
  opener: {
    topical: true,
    caption: 'Proverbs 9',
  },
  intros: [
    'The ninth chapter of Proverbs presents a vision of two houses, two banquets, two calls. Wisdom has built her house with seven pillars—a sign of completeness and strength. She has prepared her wine, she has set her table, and she calls: "Come, eat of my bread, and drink of the wine which I have mingled." It is an invitation not to asceticism but to feasting, to joy, to the abundance of life well-lived.',
    'But Folly also sits at her door, and she too calls. And the invitation she makes is also attractive, especially to those who lack understanding. She speaks of stolen waters and bread eaten in secret. The chapter asks: Whose call will you answer? Which table will you approach? The choice shapes your destiny.',
  ],

  sections: [
    {
      ref: 'Proverbs 9:1–12',
      title: "Wisdom&apos;s Banquet",
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'Wisdom hath builded her house, she hath hewn out her seven pillars:'),
            plain(2, 'She hath killed her beasts; she hath mingled her wine; she hath also furnished her table.'),
            plain(3, 'She hath sent forth her maidens: she crieth upon the highest places of the city,'),
            plain(4, 'Whoso is simple, let him turn in hither: as for him that wanteth understanding, she saith to him,'),
            plain(5, 'Come, eat of my bread, and drink of the wine which I have mingled.'),
            plain(6, 'Forsake the foolish, and live; and go in the way of understanding.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov9-banquet-call',
          html: 'Wisdom opens her house and invites all to feast—the simple are welcome, the way of understanding is open to all who will answer her call.[res:british-museum-amenemope]',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(7, 'He that reproveth a scorner getteth to himself shame: and he that rebuketh a wicked man getteth himself a blot.'),
            plain(8, 'Reprove not a scorner, lest he hate thee: rebuke a wise man, and he will love thee.'),
            plain(9, 'Give instruction to a wise man, and he will be yet wiser: teach a righteous man, and he will increase in learning.'),
            plain(10, 'The fear of the Lord is the beginning of wisdom: and the knowledge of the holy is understanding.'),
            plain(11, 'For by me thy days shall be multiplied, and the years of thy life shall be increased.'),
            plain(12, 'If thou be wise, thou shalt be wise for thyself: but if thou scornest, thou alone shalt bear it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov9-house-pillars',
          html: 'Wisdom has built her house with seven pillars—a foundation of strength and completeness. She has prepared a feast: killed her beasts, mingled her wine, furnished her table. The image is not of deprivation but of abundance, of celebration, of the joy that comes from living in alignment with truth. And her call is to all: "Whoso is simple, let him turn in hither." The invitation is universal.[res:sefaria-proverbs-9]',
        },
        {
          kind: 'hebrew',
          id: 'prov9-etzet',
          title: 'Etzet — "Counsel" (Prudence)',
          script: 'עֵצָה',
          translit: '<strong>Etzet</strong> · counsel; advice; prudence; planning',
          description: 'Wisdom offers not merely information but guidance, the kind of counsel that comes from seeing the whole of a situation and knowing the way forward.',
        },
        {
          kind: 'commentary',
          id: 'prov9-reprove',
          html: 'A striking verse: "He that reproveth a scorner getteth to himself shame." Not all who reject wisdom can be taught. Some have so hardened themselves that correction only brings shame to the one who offers it. But a wise man will receive reproof and love you for it. A righteous man will increase in learning. There is a difference between those who are open to truth and those who are closed.[res:cambridge-up-proverbs-wisdom]',
        },
        {
          kind: 'christ',
          id: 'prov9-christ-banquet',
          title: 'Christ Connection — Christ&apos;s Banquet',
          html: 'In Luke 14, Jesus speaks of the kingdom of heaven as a great banquet. In Revelation 19, John sees the marriage feast of the Lamb. The feast that wisdom prepares is an image of the feast Christ prepares for those who will come to Him. To feast with wisdom is to feast with Christ, to be nourished by His truth and His life.',
        },
        {
          kind: 'carry',
          html: 'The question Proverbs poses is simple but searching: Which banquet will you approach? Wisdom offers her feast openly, her invitation is to all, her table is set. She does not coerce or manipulate. She simply announces: Come. Eat. Drink. Live. The choice is yours.',
        },
        {
          kind: 'reflection',
          id: 'prov9-which-feast',
          prompt: 'What is your life a feast toward? Whose banquet are you approaching through your daily choices? What would it mean to truly feast at wisdom&apos;s table?',
        },
      ],
    },

    {
      ref: 'Proverbs 9:13–18',
      title: "Folly&apos;s Deception",
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(13, 'A foolish woman is clamorous: she is simple, and knoweth nothing.'),
            plain(14, 'For she sitteth at the door of her house, on a seat in the high places of the city,'),
            plain(15, 'To call passengers who go right on their ways:'),
            plain(16, 'Whoso is simple, let him turn in hither: and as for him that wanteth understanding, she saith to him,'),
            plain(17, 'Stolen waters are sweet, and bread eaten in secret is pleasant.'),
            plain(18, 'But he knoweth not that the dead are there; and that her guests are in the depths of hell.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov9-folly-clamorous',
          html: 'Folly is loud and insistent. She sits at the door of her house, calling to those who pass by. She uses the same language as Wisdom: "Whoso is simple, let him turn in hither." But her invitation leads not to life but to death. Her appeal is to something in the human heart: the attraction of the forbidden, the sweetness of what is stolen, the pleasure of what is secret.',
        },
        {
          kind: 'commentary',
          id: 'prov9-dead-depths',
          html: 'The devastating last verse: "But he knoweth not that the dead are there; and that her guests are in the depths of hell." Folly does not announce her end. She hides it. Those who come to her banquet do not know that they are walking into a house of death, that her feast is the prelude to the grave. This is the nature of folly: it conceals its consequences until they are inescapable.',
        },
        {
          kind: 'commentary',
          id: 'prov9-stolen-sweet',
          html: 'The comparison is telling: "Stolen waters are sweet, and bread eaten in secret is pleasant." Stolen things taste sweeter than freely given things. Secret indulgences seem more pleasurable than open delight. But the sweetness is fleeting, and the cost is eternal. Folly offers a moment of pleasure for a lifetime of ruin.',
        },
        {
          kind: 'carry',
          html: 'The chapter ends with a choice. Two invitations. Two tables. Two ends. Wisdom prepares an open feast, her invitation is announced in the streets, her promise is life multiplied. Folly calls from her door, her invitation is to secrecy, her end is death. The chapter asks: Will you see clearly before you choose? Will you follow the call of wisdom or the call of folly?',
        },
        {
          kind: 'reflection',
          id: 'prov9-folly-appeal',
          prompt: 'Where in your own life is Folly calling? What sweetness is she promising that would actually lead you away from life? What would wisdom say about this choice?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Wisdom hath builded her house...Come, eat of my bread, and drink of the wine which I have mingled. Forsake the foolish, and live.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 9 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-proverbs-9',
      kind: 'study',
      source: 'Sefaria',
      label: 'Proverbs 9',
      url: 'https://www.sefaria.org/Proverbs.9',
      description: 'Sefaria open-access source text and translations for Proverbs 9.',
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
