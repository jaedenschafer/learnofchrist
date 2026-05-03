import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Matthew 7 — Judgment, Prayer, and the Foundation
 *
 * Jesus continues the Sermon on the Mount with radical teaching about judgment:
 * "Judge not, that ye be not judged." Do not remove the speck from your
 * brother&apos;s eye when a beam is in your own. Then He invites prayer: "Ask,
 * and it shall be given you; seek, and ye shall find; knock, and it shall be
 * opened unto you." Prayer is not a device to manipulate God but to align
 * ourselves with His giving nature. The narrow gate leads to life; the broad
 * way leads to destruction. False prophets come in sheep&apos;s clothing but are
 * known by their fruits. And finally: "Everyone therefore which heareth these
 * sayings of mine, and doeth them, I will liken him unto a wise man, which
 * built his house upon a rock." Jesus is the Foundation.
 */
export const MATTHEW_7: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 7,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Jesus closes the Sermon on the Mount with warnings and promises. He has taught about the kingdom, about righteousness, about trust and prayer. Now He addresses how His disciples are to live in relation to others: with humility, without judgment, with generosity and honesty. The teaching is increasingly practical: how do you treat those with whom you disagree? How do you discern truth from falsehood? What is the foundation on which you will build your life?',
    'The chapter culminates with the image of two builders—one who builds on rock, one on sand. Both face the same storm. Both experience the rain and the wind and the rising water. The difference is not in circumstance but in foundation. "Everyone therefore which heareth these sayings of mine, and doeth them, I will liken him unto a wise man, which built his house upon a rock." Jesus Himself is that rock. To hear and to do His words is to build upon the unshakeable foundation.',
  ],

  sections: [
    {
      ref: 'Matthew 7:1–12',
      title: 'Judgment, Prayer, and the Golden Rule',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'Judge not, that ye be not judged.'),
            plain(3, 'And why beholdest thou the mote that is in thy brother&apos;s eye, but considerest not the beam that is in thine own eye?'),
            plain(7, 'Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you:'),
            plain(8, 'For every one that asketh receiveth; and he that seeketh findeth; and to him that knocketh it shall be opened.'),
            plain(12, 'Therefore all things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt7-judge-not',
          html:
            '"Judge not, that ye be not judged."[res:intertextual-judge-not] This is not a call to ignore evil or to pretend all things are equally valid. Rather, it is a call to humility about our own spiritual state. We are prone to see the speck in our brother&apos;s eye while missing the beam in our own. We judge harshly what we overlook in ourselves. Jesus calls for a kind of spiritual self-awareness that precedes criticism of others. Deal with your own heart first. Then, from a position of honesty and humility, you are in a place to help others[res:bibleodyssey-golden-rule].',
        },
        {
          kind: 'commentary',
          id: 'matt7-ask-seek-knock',
          html:
            'Jesus teaches about prayer through the pattern of asking, seeking, and knocking. "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you." Each of these is progressively more active. Asking is receptive. Seeking requires movement. Knocking requires persistence and action. Prayer is not passive waiting but active engagement with God&apos;s invitation. And God responds: "Every one that asketh receiveth; and he that seeketh findeth; and to him that knocketh it shall be opened."',
        },
        {
          kind: 'commentary',
          id: 'matt7-golden-rule',
          html:
            '"Therefore all things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets." This is the Golden Rule—the summation of all ethical teaching. It is not derived from careful moral reasoning about rights and duties. It is rooted in empathy: imagine what you would want if you were in the other person&apos;s place, and do that. Jesus says this is what the law and the prophets amount to. All of Scripture points toward this capacity for imaginative love[res:sefaria-psalms-40].',
        },
        {
          kind: 'greek',
          id: 'matt7-diphtherizo',
          title: 'Mote and Beam',
          script: 'κάρφος, δοκός',
          translit: '<strong>Karphos</strong> · mote; speck; splinter. <strong>Dokos</strong> · beam; log; plank',
          description:
            'The Greek contrast between karphos (a tiny speck) and dokos (a large beam) is vivid and humorous. You go about trying to remove a splinter from someone&apos;s eye while a plank is sticking out of your own face. The absurdity of the image underscores the spiritual blindness of judgment without self-awareness.',
        },
        {
          kind: 'christ',
          id: 'matt7-christ-foundation',
          title: 'Christ Connection — Christ the Foundation',
          html:
            'Jesus teaches about the nature of Christian community: it is marked by humility, by refusal to judge, by generous prayer, and by the practice of the Golden Rule. These practices are not optional. They are the shape of the kingdom. And they are possible only if we are built on the right foundation—the foundation of Jesus Himself.',
        },
        {
          kind: 'carry',
          html:
            'The prohibition on judgment is not about indifference to truth. It is about humility. We are called to be aware of our own spiritual blindness and to extend the same mercy to others that we need for ourselves. Before you judge another, examine your own heart. Before you offer criticism, ask what you yourself need to hear.',
        },
        {
          kind: 'reflection',
          id: 'matt7-beam',
          prompt: 'What "beam" in your own eye are you avoiding while judging a "mote" in someone else? What would it look like to address your own heart first?',
        },
      ],
    },

    {
      ref: 'Matthew 7:13–27',
      title: 'The Narrow Gate, False Prophets, and the Two Builders',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(13, 'Enter ye in at the strait gate: for wide is the gate, and broad is the way, that leadeth to destruction, and many there be which go in thereat:'),
            plain(14, 'Because strait is the gate, and narrow is the way, which leadeth unto life, and few there be that find it.'),
            plain(15, 'Beware of false prophets, which come to you in sheep&apos;s clothing, but inwardly they are ravening wolves.'),
            plain(16, 'Ye shall know them by their fruits. Do men gather grapes of thorns, or figs of thistles?'),
            plain(24, 'Therefore whosoever heareth these sayings of mine, and doeth them, I will liken him unto a wise man, which built his house upon a rock:'),
            plain(25, 'And the rain descended, and the floods came, and the winds blew, and beat upon that house; and it fell not: for it was founded upon a rock.'),
            plain(26, 'And every one that heareth these sayings of mine, and doeth them not, shall be likened unto a foolish man, which built his house upon the sand:'),
            plain(27, 'And the rain descended, and the floods came, and the winds blew, and beat upon that house; and it fell: and great was the fall of it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt7-narrow-gate',
          html:
            '"Enter ye in at the strait gate: for wide is the gate, and broad is the way, that leadeth to destruction." The way of the world is easy and spacious. It requires no radical reorientation. It is followed by many. But it leads to destruction. The gate to life is narrow. The way is constricted. It demands sacrifice, surrender, dying to self. Few find it. This is not because the truth is obscure, but because it is costly. The kingdom is not for the half-hearted.',
        },
        {
          kind: 'commentary',
          id: 'matt7-false-prophets',
          html:
            '"Beware of false prophets, which come to you in sheep&apos;s clothing, but inwardly they are ravening wolves." False teachers come with the appearance of wisdom and gentleness. They do not announce themselves as deceivers. But they may be identified by their fruits: "Do men gather grapes of thorns, or figs of thistles?" A tree is known by what it produces. A false prophet produces corruption, division, and spiritual death. A true prophet bears fruit of righteousness and life.',
        },
        {
          kind: 'commentary',
          id: 'matt7-two-builders',
          html:
            'The Sermon ends with the parable of the two builders. Both hear the same words. Both experience the same storm—the rain and floods and winds. The difference is foundation. One has built on rock; the other on sand. Rock is Jesus Himself—hearing His words and doing them. Sand is everything else—cultural values, conventional wisdom, personal preference. When the storm comes, the foundation is tested. The house built on sand falls with a great crash.',
        },
        {
          kind: 'greek',
          id: 'matt7-lithos',
          title: 'Lithos — Rock',
          script: 'λίθος',
          translit: '<strong>Lithos</strong> · rock; stone; foundation; that which is solid and unmoved',
          description:
            'The Greek word lithos suggests something solid, unshakeable, substantial. The foundation of Jesus is like a rock. It does not move with every wind of doctrine. It does not crumble under pressure. It stands when all else falls. To build on Jesus is to build on the only foundation that will hold when the storms come.',
        },
        {
          kind: 'christ',
          id: 'matt7-christ-foundation-2',
          title: 'Christ Connection — Christ the Foundation',
          html:
            'The Sermon on the Mount closes with Jesus Himself as the foundation. He is not merely a teacher to be understood or a moral example to be emulated. He is the rock on which life is built. To hear His words and do them is to build upon the unshakeable foundation. Every other foundation—wealth, reputation, knowledge, power—is sand. When the storms of life come, only the foundation of Jesus holds.',
        },
        {
          kind: 'carry',
          html:
            'Jesus teaches that discipleship is not about private spiritual experience alone. It is about doing—about acting on the words, the commands, the principles He has taught. The wise builder does not merely admire the architect&apos;s plan. He builds according to it. Similarly, the wise disciple does not merely appreciate Jesus&apos; teaching. He orders his life according to it.',
        },
        {
          kind: 'reflection',
          id: 'matt7-foundation',
          prompt: 'What is your foundation? In what or whom do you ultimately trust when the storms of life come? How solid is that foundation?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Judge not. Ask, and it shall be given you. Everyone that heareth these sayings of mine, and doeth them, I will liken him unto a wise man, which built his house upon a rock.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 7 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-judge-not',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Judge Not — OT Parallels',
      url: 'https://intertextual.bible/text/matthew-7.1',
      description: 'Cross-references to Old Testament teachings on judgment and discernment that inform Jesus&apos; teaching on non-judgmentalism.',
    },
    {
      id: 'bibleodyssey-golden-rule',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Golden Rule',
      url: 'https://www.bibleodyssey.org/dictionary/golden-rule/',
      description: 'Analysis of Matthew 7:12 as a summary of the entire law and prophets, and its parallels across religious traditions.',
    },
    {
      id: 'sefaria-psalms-40',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 40:6–8 — Do Your Will',
      url: 'https://www.sefaria.org/Psalms.40.6-8',
      description: 'A psalm that undergirds Jesus&apos; emphasis on doing God&apos;s will rather than empty ritual sacrifice.',
    },
  ],

  hasHebrew: false,
};
