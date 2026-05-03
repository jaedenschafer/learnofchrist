import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 15 — The Vine Wood
 *
 * God speaks of Israel in a parable: "The wood of the vine — is it better than the
 * wood of any tree? Shall wood be taken thereof to do any work?" A vine is useless
 * for anything but bearing fruit. Its wood is weak, not suitable for building or
 * crafting. And if the vine bears no fruit, it is good for nothing but the fire.
 * Israel has been given a singular purpose: to bear fruit. If it fails in that,
 * what is it? Only kindling.
 */
export const EZEKIEL_15: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 15,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'The book of Ezekiel moves toward its close with a final series of parables. The prophet has announced judgment. He has proclaimed the departure of God&apos;s glory. He has condemned false prophets and false worship. Now he speaks a parable about a vine. Israel is a vine, planted by God in the promised land. But what is a vine for? A vine is for bearing fruit. Its wood is useless for anything else — cannot be fashioned into handles or pegs or useful instruments. And if the vine fails to bear fruit, what is left? Only wood fit for burning. The parable is deceptively simple, but its meaning is clear: Israel has been given one purpose. To bear the fruit of faithfulness, of justice, of love. If it fails in that purpose, it has failed in everything. And the only recourse left is judgment.',
  ],

  sections: [
    {
      ref: 'Ezekiel 15:1–8',
      title: 'The Useless Vine',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(1, 'And the word of the Lord came unto me, saying,'),
            plain(2, 'Son of man, What is the vine tree more than any tree, or than a branch which is among the trees of the forest?'),
            plain(3, 'Shall wood be taken thereof to make any work? or will men take a pin of it to hang any vessel thereon?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-vine-burned',
          html: '<p>The vine is useless wood—burned by both sides of war. Without fruit, a life has no other purpose.</p>[res:babylonian-exile-context]',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(4, 'Behold, it is cast into the fire for fuel: the fire devoureth both the ends of it, and the midst of it is burned. Is it meet for any work?'),
            plain(5, 'Behold, when it was whole, it was meet for no work: how much less shall it be meet yet for any work, when the fire hath devoured it, and it is burned?'),
            plain(6, 'Therefore thus saith the Lord God; As the vine tree among the trees of the forest, which I have given to the fire for fuel, so will I give the inhabitants of Jerusalem.'),
            plain(7, 'And I will set my face against them; they shall go out from one fire, and another fire shall devour them; and ye shall know that I am the Lord, when I set my face against them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk15-vine-purpose',
          html: 'The vine is remarkable for one thing only: its fruit. Its wood is weak, unsuitable for crafting, unusable for anything but fuel. God poses the question with apparent surprise: What makes you think a vine is good for anything but bearing fruit? And if it does not bear fruit, it is only good for burning. Israel has been given a singular purpose, a singular reason for its existence: to bear the fruit of covenant faithfulness. To be a light to the nations, to display God&apos;s justice, to be a nation whose laws and whose witness draw others to the true God. If Israel fails in that, what is left? Only judgment[res:sefaria-ezekiel].',
        },
        {
          kind: 'hebrew',
          id: 'ezk15-gefen',
          title: 'Gefen — "Vine"',
          script: 'גֶּפֶן',
          translit: '<strong>Gefen</strong> · vine; grapevine; something fruitful or unfruitful depending on its productivity',
          description:
            'The vine is a symbol of Israel throughout Scripture — a plant that God planted, that should bear good fruit. In Ezekiel&apos;s parable, the vine is distinguished from all other trees not by its strength but by its vulnerability, its dependence on bearing fruit, its uselessness for any other purpose.',
        },
        {
          kind: 'commentary',
          id: 'ezk15-fire-judgment',
          html: 'The judgment is harsh but clear. As a vine is good for nothing but fuel, Israel, having failed to bear fruit, is given to the fire. The metaphor is extended: first one fire, then another. The fire of judgment will not pass quickly but will completely consume. And in the consuming, the purpose is the same as it has always been: "Ye shall know that I am the Lord." Even in judgment, God&apos;s purpose is revelation — that His people might know Him.',
        },
        {
          kind: 'carry',
          html: 'Each of us, like Israel, has been given to a singular purpose: to bear fruit. Not the fruit of our own achievement or reputation, but the fruit of the Spirit — love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control. If we focus on other things — on building our own kingdoms, on accumulating power or wealth — we miss our purpose. And we become like the vine that does not bear fruit: only kindling for the fire.',
        },
        {
          kind: 'reflection',
          id: 'ezk15-fruit-bearing',
          prompt: 'What fruit is God calling you to bear? Where are you trying to serve purposes other than the one God has for you? How would your life change if you focused entirely on fruitfulness — on becoming the kind of person who naturally produces the fruit of the Spirit?',
        },
        {
          kind: 'christ',
          id: 'ezk15-christ',
          title: 'Christ Connection — The True Vine',
          html:
            'Jesus said, "I am the true vine, and my Father is the husbandman... I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit" (John 15:1, 5). Where Ezekiel spoke of Israel as a vine that failed to bear fruit and faced judgment, Jesus offers a different possibility: abide in Him, and you will be fruitful. Apart from Him, the branches are useless—good only for burning. But in Him, attached to the true vine, you naturally produce the fruit the Father seeks. The judgment Ezekiel proclaimed teaches the severity of fruitlessness; Christ&apos;s promise teaches the joy of belonging to Him.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: '"As the vine tree among the trees of the forest, which I have given to the fire for fuel, so will I give the inhabitants of Jerusalem." — Ezekiel 15:6',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 15 · Study Guide',
  },  resources: [
    {
      id: 'babylonian-exile-context',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Exile Context',
      url: 'https://www.britishmuseum.org/collection/object/W_Y_EA25091',
      description: 'Cuneiform and archaeological evidence of Babylon under Nebuchadnezzar.',
    },
    {
      id: 'sefaria-ezekiel',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezekiel',
      url: 'https://www.sefaria.org/Ezekiel',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    }
  ],

  hasHebrew: true,
};
