import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Proverbs 30 — The Humility of Agur and the Mysteries of the World
 *
 * Two things have I required of thee; deny me them not before I die: Remove
 * far from me vanity and lies; give me neither poverty nor riches. This is
 * the testimony of Agur, who knows that he knows little, and asks for wisdom
 * to live well in a world of mysteries.
 */
export const PROVERBS_30: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 30,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Proverbs 30 shifts voice. Now we hear from Agur, who opens by confessing his ignorance: "I am more brutish than any man, and have not the understanding of a man. I neither learned wisdom, nor have the knowledge of the holy ones." Yet from this very humility comes a clear request: Remove vanity and lies from me. Give me neither poverty nor riches, but my necessary food. This is the prayer of one who has learned to ask wisely because he has learned how little he knows.',
  ],

  sections: [
    {
      ref: 'Proverbs 30:2–4',
      title: 'The Knowledge of Ignorance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(2, 'Surely I am more brutish than any man, and have not the understanding of a man.'),
            plain(3, 'I neither learned wisdom, nor have the knowledge of the holy ones.'),
            plain(4, 'Who hath ascended up into heaven, or descended? who hath gathered the wind in his fists? who hath bound the waters in a garment? who hath established all the ends of the earth? what is his name, and what is his son&apos;s name, if thou canst tell?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov30-brutish',
          html:
            'Agur opens not with boasts of learning but with a confession of brutish ignorance. This is not false modesty. This is the honest assessment of someone who understands how little he grasps. He has not learned the wisdom he pursued. He does not have access to the knowledge of the holy ones. And this knowledge of his ignorance is the beginning of real wisdom.[res:british-museum-amenemope]',
        },
        {
          kind: 'hebrew',
          id: 'prov30-agur-name',
          title: 'Agur — "The Gatherer"',
          script: 'אָגוּר',
          translit: '<strong>Agur</strong> · gatherer; collector',
          description: 'Agur&apos;s name means "gatherer"—one who collects wisdom. Yet his confession is that he has not gathered understanding, but rather knows his own ignorance. The name itself is ironic, setting up the theme of the chapter.',
        },
        {
          kind: 'commentary',
          id: 'prov30-mysteries',
          html: 'Then Agur poses a series of questions about the cosmic mysteries: Who has ascended into heaven? Who has gathered the wind? Who has clothed the waters? Who has set the bounds of the earth? These are not rhetorical questions seeking a "God" answer. They are expressions of genuine mystery. The world is vast and strange, and human understanding is small.[res:sefaria-proverbs-30][res:cambridge-up-proverbs-wisdom]',
        },
        {
          kind: 'carry',
          html:
            'What have you assumed you understood that you actually know little about? Where might humility open doors that confidence closes?',
        },
        {
          kind: 'reflection',
          id: 'prov30-learn',
          prompt: 'What is the most important thing you have learned about your own ignorance?',
        },
      ],
    },

    {
      ref: 'Proverbs 30:7–9',
      title: 'A Prayer for Sufficiency',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(7, 'Two things have I required of thee; deny me them not before I die:'),
            plain(8, 'Remove far from me vanity and lies: give me neither poverty nor riches; feed me with food convenient for me:'),
            plain(9, 'Lest I be full, and deny thee, and say, Who is the Lord? or lest I be poor, and steal, and take the name of my God in vain.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov30-two-things',
          html:
            'From his humility, Agur asks for two things. First, remove from him vanity and lies. He wants to be freed from the illusion that he is more than he is, from the deception that he can control or fully understand the world. He wants truth, nothing but truth.',
        },
        {
          kind: 'commentary',
          id: 'prov30-neither-poverty',
          html:
            'Second, give him neither poverty nor riches—just his daily bread. This is the prayer of one who understands the dangers of both extremes. Riches can lead to forgetting God, to the pride that says "I have no need of God." Poverty can lead to desperation, to stealing, to taking God&apos;s name in vain through broken promises. Give me the middle ground, he asks. Give me enough, and not too much.',
        },
        {
          kind: 'carry',
          html:
            'Do you pray this prayer? For truth over flattery? For sufficiency over excess? This is the prayer of the truly wise.',
        },
        {
          kind: 'christ',
          id: 'prov30-christ',
          title: 'Christ Connection — The Son Revealed',
          html:
            'Agur asks the cosmic question: "What is his name, and what is his son&apos;s name, if thou canst tell?" (Prov. 30:4). The question hangs unanswered in Proverbs. But Matthew answers it directly: "Thou shalt call his name JESUS: for he shall save his people from their sins" (Matt. 1:21). The Father&apos;s name is holy and high; the Son&apos;s name is Jesus—the one who saves. And John reveals the mystery fully: "In the beginning was the Word… and the Word was made flesh" (John 1:1, 14). The Son&apos;s name is given. The question is answered.',
        },
        {
          kind: 'reflection',
          id: 'prov30-pray',
          prompt: 'What would change if you asked God for exactly what you need and nothing more?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Two things have I required of thee; deny me them not before I die: Remove far from me vanity and lies; give me neither poverty nor riches.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 30 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-proverbs-30',
      kind: 'study',
      source: 'Sefaria',
      label: 'Proverbs 30',
      url: 'https://www.sefaria.org/Proverbs.30',
      description: 'Sefaria open-access source text and translations for Proverbs 30.',
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

};
