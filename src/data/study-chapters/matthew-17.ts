import { hp, t, plain, type RichChapterContent } from './types';

/**
 * Matthew 17 — Transfiguration and Faith
 *
 * Jesus takes Peter, James, and John up a high mountain. There He is transfigured—
 * His face shines like the sun, His garments become white as snow. Moses and Elijah
 * appear and converse with Him. A cloud overshadows them. A voice from heaven:
 * "This is my beloved Son... hear ye him." Down the mountain, a demonized boy
 * awaits. The disciples cannot cast out the demon. Jesus teaches: faith, even as
 * a grain of mustard seed, can move mountains.
 */
export const MATTHEW_17: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 17,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  opener: {
    matchTitle: /The Possessed Boy at/i,
    caption: 'Matthew 17',
  },
  intros: [
    'After six days of withdrawal, Jesus takes three disciples—Peter, James, and John—up a high mountain. There, something unprecedented occurs. Jesus is transfigured before them. His face shines with the brightness of the sun. His garments become white as snow. Moses and Elijah, figures from the old covenant, appear and speak with Him. The earthly ministry is momentarily revealed in its heavenly glory.',
    'A voice from the cloud speaks: "This is my beloved Son, in whom I am well pleased; hear ye him." The disciples fall on their faces in fear. Jesus touches them and speaks peace. But when they descend and encounter a demon-possessed boy, the disciples are powerless. Jesus casts out the demon and teaches His disciples about faith—how a faith even the size of a mustard seed can accomplish what seems impossible.',
  ],

  sections: [
    /* ─── Matthew 17:1–13 — Transfiguration ───────────────────────────────── */
    {
      ref: 'Matthew 17:1–13',
      title: 'Unveiled Glory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(1, 'And after six days Jesus taketh with him Peter, and James, and John his brother, and bringeth them up into a high mountain apart,'),
            plain(2, 'And was transfigured before them: and his face did shine as the sun, and his raiment was white as the light.'),
            plain(3, 'And, behold, there appeared unto them Moses and Elias talking with him.'),
            plain(5, 'While he yet spake, behold, a bright cloud overshadowed them: and behold a voice out of the cloud, which said, This is my beloved Son, in whom I am well pleased; hear ye him.'),
            plain(6, 'And when the disciples heard it, they fell on their face, and were sore afraid.'),
            plain(8, 'And Jesus came and touched them, and said, Arise, and be not afraid.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt17-transfigured',
          html:
            'On the high mountain, Jesus is transfigured—His divine nature shines forth [res:intertextual-transfiguration]. His face gleams like the sun. His garments become luminous white. For a moment, the veil between heaven and earth is thin. The disciples behold Jesus in glory—not as a rabbi or healer, but as the radiant Lord. They see not merely a human teacher but the divine reality He had been all along[res:sefaria-exodus-34-29].',
        },
        {
          kind: 'commentary',
          id: 'matt17-moses-elijah',
          html:
            'Moses and Elijah appear with Jesus—figures representing the Law and the Prophets. Their presence testifies that Jesus is the fulfillment of all that the old covenant pointed toward. Peter, in confusion and awe, suggests building three tabernacles, as if to preserve and honor this moment. But Jesus is not meant to be enshrined on a mountain. He must descend and face the cross.',
        },
        {
          kind: 'greek',
          id: 'matt17-metamorphoo',
          title: 'Metamorphoo — Transfigured',
          script: 'μεταμορφόω',
          translit: '<strong>Metamorphoo</strong> · to transfigure; to transform; to change form',
          description:
            'Metamorphoo refers to a change of form or appearance. It is not a costume change or illusion. It is a real transformation revealing what is truly there. Jesus&apos; transfiguration unveils His divine nature—the glory that was always His, now visible to human eyes.',
        },
        {
          kind: 'commentary',
          id: 'matt17-cloud',
          html:
            'The cloud that overshadows the disciples echoes the cloud of God&apos;s presence at Sinai, at the tabernacle, and throughout Israel&apos;s history. The voice from the cloud—"Hear ye him"—commands the disciples to listen to Jesus above all else. The old covenant is fulfilled. Jesus is the end and the fulfillment of the law and the prophets.',
        },
        {
          kind: 'christ',
          id: 'matt17-christ-glory',
          title: 'Christ Connection — Christ in Glory',
          html:
            'The transfiguration reveals Jesus as He is in His risen and exalted state. What the disciples witness is not a transformation into something Jesus was not, but the unveiling of His true identity. In the resurrection, all believers will be similarly transfigured—transformed into the likeness of Christ.',
        },
        {
          kind: 'carry',
          html:
            'Peter wanted to stay on the mountain, to preserve the moment of glory. But Jesus calls us to descend—to return to the world, to face its pain, its darkness, and its need. The glimpse of glory strengthens us for the work below.',
        },
        {
          kind: 'reflection',
          id: 'matt17-mountain',
          prompt: 'When have you experienced a moment of clarity or closeness to God? How did that experience prepare you for what came next?',
        },
      ],
    },

    /* ─── Matthew 17:14–27 — Faith, Demons, and Tribute ──────────────────── */
    {
      ref: 'Matthew 17:14–27',
      title: 'Faith and Provision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(14, 'And when they were come to the multitude, there came to him a certain man, kneeling down to him, and saying,'),
            plain(15, 'Lord, have mercy on my son: for he is lunatick, and sore vexed: for ofttimes he falleth into the fire, and oft into the water.'),
            plain(20, 'And Jesus said unto them, Because of your unbelief: for verily I say unto you, If ye have faith as a grain of mustard seed, ye shall say unto this mountain, Remove hence to yonder place; and it shall remove; and nothing shall be impossible unto you.'),
            plain(24, 'And when they were come to Capernaum, they that received tribute money came to Peter, and said, Doth not your master pay tribute?'),
            plain(26, 'Jesus said unto him, Notwithstanding, lest we should offend them, go thou to the sea, and cast an hook, and take up the fish that first cometh up; and when thou hast opened his mouth, thou shalt find a piece of money.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt17-lunatick',
          html:
            'When Jesus descends with His transfigured glory still fresh, a man brings his son—a boy gripped by violent affliction, thrown repeatedly into fire and water [res:bibleodyssey-demon-possession]. The disciples have tried and failed to cast out the demon. Jesus heals the boy with a word. Then He explains the disciples&apos; failure: unbelief. They lacked faith—not belief that Jesus could heal, but belief that transcends reason and circumstance.',
        },
        {
          kind: 'commentary',
          id: 'matt17-mustard',
          html:
            'Jesus teaches that faith as small as a mustard seed—the tiniest seed, barely visible—can accomplish the seemingly impossible. Moving a mountain is a metaphor for overcoming great obstacles. The issue is not the size of faith but its reality. Even tiny, genuine faith can accomplish what mighty doubt cannot.',
        },
        {
          kind: 'greek',
          id: 'matt17-pistis',
          title: 'Pistis — Faith',
          script: 'πίστις',
          translit: '<strong>Pistis</strong> · faith; trust; belief; reliance',
          description:
            'Pistis is not mere assent to doctrine. It is trust—a resting of one&apos;s entire self upon the faithfulness of another. Faith as a mustard seed is small but genuine—it is trust that God can do what He says, regardless of the apparent obstacle.',
        },
        {
          kind: 'commentary',
          id: 'matt17-tribute',
          html:
            'The tax collectors ask Peter whether Jesus pays the temple tribute. Rather than debate whether the Lord should pay taxes to support the temple, Jesus provides the money in a remarkable way: a coin is found in a fish&apos;s mouth. The miracle is almost whimsical—a reminder that Jesus&apos; power extends over nature itself, and that He provides for all necessary things.',
        },
        {
          kind: 'christ',
          id: 'matt17-christ-kingdom',
          title: 'Christ Connection — Christ Above All Kingdoms',
          html:
            'Jesus demonstrates His authority over demons, disease, nature, and the authorities themselves. He is not bound by earthly categories of obligation. Yet He pays the tribute lest He give offense—a principle of willing accommodation to human custom, even as He remains sovereign over all things.',
        },
        {
          kind: 'carry',
          html:
            'What mountains of opposition or doubt stand in your way? Where do you need to exercise faith, even if it is no larger than a mustard seed? Jesus promises that such faith—genuine, resting in Him—can accomplish what seems impossible.',
        },
        {
          kind: 'reflection',
          id: 'matt17-faith',
          prompt: 'What difference would it make in your life if you truly believed that a grain of mustard seed of faith could move mountains?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'If ye have faith as a grain of mustard seed, ye shall say unto this mountain, Remove hence to yonder place; and it shall remove; and nothing shall be impossible unto you.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 17 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-transfiguration',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Transfiguration — Gospel Parallels',
      url: 'https://intertextual.bible/search?q=Matthew+17+1',
      description: 'Comparison of the transfiguration account across Matthew, Mark, and Luke with interpretative variations.',
    },
    {
      id: 'sefaria-exodus-34-29',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 34:29 — Moses on Mount Sinai',
      url: 'https://www.sefaria.org/Exodus.34.29',
      description: 'Old Testament parallel to Jesus&apos; transfiguration, where Moses&apos; face shines after encountering God.',
    },
  ],

  hasHebrew: false,
};
