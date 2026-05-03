import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Matthew 13 — Parables of the Kingdom
 *
 * Jesus sits by the sea and teaches in parables. The kingdom of heaven is like a
 * sower scattering seed—some falling on the path, some on stony ground, some
 * among thorns, some on good soil. It is like a man sowing good seed whose field
 * an enemy has sown with tares. It is like a mustard seed, smallest of all seeds
 * yet growing into a great tree. It is like leaven hidden in meal. It is like a
 * treasure hidden in a field, like a pearl of great price, like a net cast into
 * the sea gathering all kinds of fish. The parables are hidden truth: "Therefore
 * speak I to them in parables: because they seeing see not; and hearing they hear
 * not, neither do they understand." The kingdom is hidden from those whose hearts
 * are hardened, yet revealed to those with ears to hear.
 */
export const MATTHEW_13: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 13,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Jesus sits by the sea and crowds gather around Him. He teaches them in parables—stories drawn from everyday life that contain hidden meaning. A sower goes out to sow. A mustard seed grows into a great tree. A woman hides leaven in meal. On the surface, they are simple agricultural scenes. But beneath, they reveal the nature of the kingdom of heaven. Parables are not meant to make truth easy. They are meant to hide it from those not ready to hear it, and to reveal it to those who seek earnestly.',
    'The disciples ask why Jesus teaches in parables. Jesus answers: "Therefore speak I to them in parables: because they seeing see not; and hearing they hear not, neither do they understand." The parables are a kind of divine judgment—those who are open to the kingdom hear and understand. Those whose hearts are hardened against truth neither see nor hear, even when truth stands before them. The kingdom is both hidden and revealed, both costly and precious.',
  ],

  sections: [
    {
      ref: 'Matthew 13:1–23',
      title: 'The Sower and the Four Kinds of Soil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(3, 'And he spake many things unto them in parables, saying, Behold, a sower went forth to sow;'),
            plain(4, 'And when he sowed, some seeds fell by the way side: and the fowls came and devoured them up:'),
            plain(5, 'Some fell upon stony places, where they had not much earth: and forthwith they sprung up, because they had no deepness of earth:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matthew-13-78mid-1',
          html:
            'Jesus interprets the parable of the sower and continues teaching; He shifts to the parables of the mustard seed and the leaven. Small beginnings yield great growth.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(6, 'And when the sun was up, they were scorched; and because they had no root, they withered away.'),
            plain(7, 'And some fell among thorns; and the thorns sprung up, and choked them:'),
            plain(8, 'But other fell into good ground, and brought forth fruit, some an hundredfold, some sixtyfold, some thirtyfold.'),
            plain(19, 'When any one heareth the word of the kingdom, and understandeth it not, then cometh the wicked one, and catcheth away that which was sown in his heart. This is he which received seed by the way side.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt13-sower',
          html:
            'The parable of the sower is about receptivity to the word of the kingdom. A sower plants seed indiscriminately, in all kinds of soil. Some seed is devoured by birds. Some springs up quickly but has no root and withers when tested. Some is choked by thorns and yields no fruit. But some falls on good soil and bears fruit—some thirtyfold, some sixtyfold, some a hundredfold. The difference is not in the seed (which is the same word of the kingdom) but in the heart that receives it[res:bibleodyssey-parables][res:sefaria-daniel-2-44].',
        },
        {
          kind: 'commentary',
          id: 'matt13-hardened-hearts',
          html:
            'Jesus explains the parable: the seed by the wayside is the word that is quickly forgotten, stolen away by the evil one before it can root. The seed on stony ground springs up quickly but has no depth; when affliction comes, it falls away. The seed among thorns grows but is choked by the cares of the world and the deceitfulness of riches. Only the seed on good soil produces fruit. The difference between the soils is not circumstance but the condition of the heart—its openness, its depth, its freedom from competing concerns[res:intertextual-sower].',
        },
        {
          kind: 'commentary',
          id: 'matt13-fruit',
          html:
            'The good soil produces fruit—not at a uniform rate, but at differing levels of abundance. Thirtyfold, sixtyfold, a hundredfold. The varying abundance suggests that there is growth in the Christian life, degrees of maturity and fruitfulness. The kingdom is not a single experience but a trajectory—the word takes root, grows, and bears increasing fruit.',
        },
        {
          kind: 'greek',
          id: 'matt13-karpos',
          title: 'Karpos — Fruit',
          script: 'καρπός',
          translit: '<strong>Karpos</strong> · fruit; the product of a tree or plant; the result of labor; evidence of character',
          description:
            'The Greek word karpos refers to the fruit that results from a tree or plant—what it naturally produces. In Jesus&apos; teaching, fruit is the evidence of the kingdom working in the human heart. The good soil produces fruit. The fruit shows that the word has taken root and is alive.',
        },
        {
          kind: 'christ',
          id: 'matt13-christ-kingdom-hidden',
          title: 'Christ Connection — The Kingdom Hidden',
          html:
            'The parable reveals that the kingdom of God is not visible, not forced, but grows in the receptive heart. It is sown through the word. It takes root when the heart is open. It produces fruit when it is nourished and protected from competing concerns. The presence of Jesus on earth did not force belief. He sows. He offers. Those with ears to hear respond.',
        },
        {
          kind: 'carry',
          html:
            'We are all kinds of soil at different moments. Sometimes our hearts are hard and the word finds no entry. Sometimes we receive with gladness but have no root. Sometimes we are choked by the worries and riches of this world. Jesus&apos; call is to examine the condition of your soil—your receptivity, your depth, your freedom from competing loves—and to allow the word to produce fruit.',
        },
        {
          kind: 'reflection',
          id: 'matt13-soil',
          prompt: 'What kind of soil is your heart right now? Is it open or hardened? Deep or shallow? Free or choked with competing concerns? What would it take to become good soil?',
        },
      ],
    },

    {
      ref: 'Matthew 13:24–52',
      title: 'Parables of the Hidden Kingdom: Growth, Treasure, and Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(31, 'Another parable put he forth unto them, saying, The kingdom of heaven is like to a grain of mustard seed, which a man took, and sowed in his field:'),
            plain(32, 'Which indeed is the least of all seeds: but when it is grown, it is the greatest among herbs, and becometh a tree, so that the birds of the air come and lodge in the branches thereof.'),
            plain(44, 'Again, the kingdom of heaven is like unto treasure hid in a field; the which when a man hath found, he hideth, and for joy thereof goeth and selleth all that he hath, and buyeth that field.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matthew-13-78mid-2',
          html:
            'The scene shifts here — a new dialogue, a new healing, a new parable. Matthew gathers Jesus&apos; teaching by theme, not always by chronology.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(45, 'Again, the kingdom of heaven is like unto a merchant man, seeking goodly pearls:'),
            plain(46, 'Who, when he hath found one pearl of great price, went and sold all that he had, and bought it.'),
            plain(47, 'Again, the kingdom of heaven is like unto a net that was cast into the sea, and gathered of every kind:'),
            plain(49, 'So shall it be at the end of the world: the angels shall come forth, and sever the wicked from among the just,'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt13-mustard',
          html:
            'The mustard seed is "the least of all seeds" yet grows into a great tree. The kingdom begins small, insignificant, hidden. A handful of disciples in Galilee, executed on a cross outside Jerusalem. Yet it grows. It spreads. It becomes a shelter for the nations. This parable assures the disciples that the kingdom&apos;s present smallness is not a defeat. It is the nature of the kingdom to grow from insignificance to immensity.',
        },
        {
          kind: 'commentary',
          id: 'matt13-treasure',
          html:
            'The kingdom is like treasure hidden in a field. A man finds it and, "for joy thereof," sells all he has to buy the field. The kingdom is precious beyond measure. It is worth the sacrifice of everything else. The man does not find treasure and count the cost. He finds treasure and acts immediately, joyfully, willing to lose all earthly possession for the sake of what he has found.',
        },
        {
          kind: 'commentary',
          id: 'matt13-pearl',
          html:
            'A merchant seeks goodly pearls and finds "one pearl of great price." He sells all he has and buys it. Like the treasure, the pearl represents the kingdom—of surpassing value, worth any sacrifice, worth every cost. The two parables emphasize the same truth: the kingdom is not something you stumble upon and half-heartedly embrace. It is something you see clearly and choose entirely, willing to give up everything.',
        },
        {
          kind: 'commentary',
          id: 'matt13-net',
          html:
            'The net is cast into the sea and gathers all kinds of fish. So also the kingdom gathers all kinds of people—righteous and unrighteous, good and bad. Yet at the end, the angels "sever the wicked from among the just." The kingdom is inclusive in its invitation but exclusive in its final judgment. For now, the righteous and unrighteous grow together. But the end will bring separation.',
        },
        {
          kind: 'greek',
          id: 'matt13-margarites',
          title: 'Margarites — Pearl',
          script: 'μαργαρίτης',
          translit: '<strong>Margarites</strong> · pearl; precious gem; thing of great value',
          description:
            'The pearl is a gem of rare beauty formed from the suffering of the oyster. It is an apt symbol for the kingdom, which is formed from the suffering, death, and resurrection of Christ, yet yields beauty and value beyond measure for those who possess it.',
        },
        {
          kind: 'christ',
          id: 'matt13-christ-priceless',
          title: 'Christ Connection — The Priceless Kingdom',
          html:
            'The parables of the hidden kingdom reveal that it is not obvious, not easy, not automatic. The kingdom grows in ways that are hidden from those who do not seek it. It requires the selling of all, the giving of everything. Yet for those who see it truly, it is the pearl of great price. It is worth any cost. It justifies every sacrifice.',
        },
        {
          kind: 'carry',
          html:
            'The parables challenge us to examine how we value the kingdom. Is it the treasure that justifies the selling of everything else? Or is it one interest among many? Is it the pearl of great price? Or something we hold loosely, willing to abandon it if worldly advantages require? The parables ask: what are you willing to give up for the kingdom?',
        },
        {
          kind: 'reflection',
          id: 'matt13-price',
          prompt: 'What would the kingdom of God be worth to you? What would you be willing to give up to fully possess it? Where is there a gap between your stated values and your actual choices?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The kingdom of heaven is like to a grain of mustard seed... like unto treasure hid in a field... like unto a merchant man, seeking goodly pearls.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 13 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-parables',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Jesus&apos; Parables',
      url: 'https://www.bibleodyssey.org/dictionary/parables-of-jesus/',
      description: 'Overview of Jesus&apos; parable teaching method and the parables specific to Matthew 13.',
    },
    {
      id: 'sefaria-daniel-2-44',
      kind: 'study',
      source: 'Sefaria',
      label: 'Daniel 2:44 — God&apos;s Eternal Kingdom',
      url: 'https://www.sefaria.org/Daniel.2.44',
      description: 'The Old Testament prophecy underlying the imagery of God&apos;s kingdom growing and filling the earth.',
    },
    {
      id: 'intertextual-sower',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Parable of the Sower — Synoptic Parallels',
      url: 'https://intertextual.bible/text/matthew-13.1',
      description: 'Comparison of the Sower parable across Matthew, Mark, and Luke with their interpretative differences.',
    },
  ],

  hasHebrew: false,
};
