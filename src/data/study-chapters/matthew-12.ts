import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Matthew 12 — Sabbath Disputes and the Blasphemy of the Spirit
 *
 * Jesus heals on the Sabbath, driving out demons and casting out the mute
 * spirit that had made a man unable to speak. The Pharisees ask "Is he the Son
 * of David?" but others say "This fellow doth not cast out devils, but by
 * Beelzebub the prince of the devils." Jesus rebukes this blasphemy: "Whosoever
 * speaketh a word against the Son of man, it shall be forgiven him: but
 * whosoever speaketh against the Holy Ghost, it shall not be forgiven him."
 * The unforgivable sin is the rejection of the Holy Spirit&apos;s testimony.
 * Jesus affirms His identity: "A greater than Solomon is here; a greater than
 * Jonas is here." He is Lord even of the Sabbath day.
 */
export const MATTHEW_12: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 12,

  intros: [
    'The conflict between Jesus and the Pharisees intensifies over the Sabbath. The law forbids work on the Sabbath day, yet Jesus heals on the Sabbath. He walks through the grain fields and His disciples pluck heads of grain to eat. "Behold, thy disciples do that which is not lawful to do upon the sabbath day." The Pharisees are scandalized. But Jesus responds: "The Son of man is Lord even of the sabbath day." He claims authority over the very law that governs Israel&apos;s relationship with God.',
    'Jesus heals a man with a withered hand and casts out a demon, making the man both to see and to speak. The crowds ask in amazement "Is not this the son of David?" Yet the Pharisees attribute His power to Beelzebub, the prince of demons. This provokes Jesus&apos; strongest rebuke: "Whosoever speaketh a word against the Son of man, it shall be forgiven him: but whosoever speaketh against the Holy Ghost, it shall not be forgiven him." The Spirit&apos;s testimony cannot be rejected without consequences.',
  ],

  sections: [
    {
      ref: 'Matthew 12:1–21',
      title: 'Lord of the Sabbath and Healing on the Sabbath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'At that time Jesus went on the sabbath day through the corn; and his disciples were an hungred, and began to pluck the ears of corn and to eat.'),
            plain(3, 'But Jesus said unto them, Have ye not read what David did, when he was an hungred, and they that were with him;'),
            plain(8, 'For the Son of man is Lord even of the sabbath day.'),
            plain(10, 'And, behold, there was a man which had his hand withered. And they asked him, saying, Is it lawful to heal on the sabbath day? that they might accuse him.'),
            plain(12, 'How much then is a man better than a sheep? Wherefore it is lawful to do well on the sabbath days.'),
            plain(13, 'Then saith he to the man, Stretch forth thine hand. And he stretched it forth; and it was restored whole, like as the other.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt12-sabbath-grain',
          html:
            'The Pharisees accuse Jesus&apos; disciples of breaking the Sabbath by plucking grain and eating it. Jesus responds by invoking David: David and his companions ate the shewbread, which was reserved for priests alone, yet no one condemned them. Why? Because human need supersedes ceremonial law. Hunger trumps Sabbath restriction. Compassion transcends regulation. The law exists to serve human flourishing, not to replace it.',
        },
        {
          kind: 'commentary',
          id: 'matt12-lord-sabbath',
          html:
            '"For the Son of man is Lord even of the sabbath day." Jesus claims absolute authority. The Sabbath is God&apos;s day, the sign of the covenant. Yet Jesus, the Son of Man, is Lord of it. He can determine what is and is not permissible on the Sabbath. This is a staggering claim—only God has such authority. Only the Messiah can speak this way.',
        },
        {
          kind: 'commentary',
          id: 'matt12-withered-hand',
          html:
            'Jesus heals the withered hand on the Sabbath, knowing the Pharisees watch to accuse Him. He asks them: "How much then is a man better than a sheep?" If you will lift a sheep from a pit on the Sabbath, surely you will heal a man on the Sabbath. The principle is clear: good is always lawful. Healing is always lawful. Compassion is always lawful. The law serves life; it does not impede it.',
        },
        {
          kind: 'greek',
          id: 'matt12-kalos',
          title: 'Kalos — Well; Good',
          script: 'καλός',
          translit: '<strong>Kalos</strong> · good; well; fine; beautiful; morally good; beneficial',
          description:
            'The Greek word kalos describes what is intrinsically good and beautiful. Jesus says "It is lawful to do well on the sabbath days"—to do what is kalos, what is intrinsically good. Healing is kalos. Helping those in need is kalos. The Sabbath law cannot override the fundamental call to do good.',
        },
        {
          kind: 'christ',
          id: 'matt12-christ-sabbath',
          title: 'Christ Connection — Greater Than the Sabbath',
          html:
            'Jesus reveals Himself as greater than the Sabbath law itself. He is Lord of the law, not subject to it. His presence and His healing power are the true point of the law. The Sabbath pointed forward to the rest that comes in Christ. Now that He is here, the Sabbath&apos;s meaning is fulfilled and transcended.',
        },
        {
          kind: 'carry',
          html:
            'The Pharisees&apos; error was prioritizing the law over compassion, the rule over the person in need. They were so focused on keeping the Sabbath perfectly that they opposed the one who embodied the Sabbath&apos;s true meaning. Where in your own life do you prioritize rules over people, law over love?',
        },
        {
          kind: 'reflection',
          id: 'matt12-sabbath-law',
          prompt: 'Are there "laws" or "rules" you live by that might be keeping you from compassion or from seeing Jesus clearly? Where might Jesus be asking you to choose good over correctness?',
        },
      ],
    },

    {
      ref: 'Matthew 12:22–45',
      title: 'Blasphemy Against the Holy Ghost and the Sign of Jonah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(22, 'Then was brought unto him one possessed with a devil, blind, and dumb: and he healed him, insomuch that the blind and dumb both spake and saw.'),
            plain(24, 'But when the Pharisees heard it, they said, This fellow doth not cast out devils, but by Beelzebub the prince of the devils.'),
            plain(28, 'But if I cast out devils by the Spirit of God, then the kingdom of God is come unto you.'),
            plain(31, 'Wherefore I say unto you, All manner of sin and blasphemy shall be forgiven unto men: but the blasphemy against the Holy Ghost shall not be forgiven unto men.'),
            plain(40, 'For as Jonas was three days and three nights in the whale&apos;s belly; so shall the Son of man be three days and three nights in the heart of the earth.'),
            plain(41, 'The men of Nineveh shall rise in judgment with this generation, and shall condemn it: because they repented at the preaching of Jonas; and, behold, a greater than Jonas is here.'),
            plain(42, 'The queen of the south shall rise up in the judgment with this generation, and shall condemn it: for she came from the uttermost parts of the earth to hear the wisdom of Solomon; and, behold, a greater than Solomon is here.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt12-demon-blind-dumb',
          html:
            'Jesus heals a man who is "possessed with a devil, blind, and dumb." The demon has rendered him unable to see, unable to speak. Jesus casts out the demon, and immediately the man can speak and see. It is a complete restoration. The crowds are amazed: "Is not this the son of David?" But the Pharisees see something different. They see a threat to their authority.',
        },
        {
          kind: 'commentary',
          id: 'matt12-beelzebub',
          html:
            '"This fellow doth not cast out devils, but by Beelzebub the prince of the devils." It is an absurd accusation—Satan casting out Satan? The kingdom divided against itself cannot stand. Yet the Pharisees prefer to attribute Jesus&apos; miracles to demonic power rather than to acknowledge Him as Messiah. This is the unforgivable sin: to see the work of the Holy Spirit and to attribute it to evil.',
        },
        {
          kind: 'commentary',
          id: 'matt12-blasphemy-spirit',
          html:
            '"All manner of sin and blasphemy shall be forgiven unto men: but the blasphemy against the Holy Ghost shall not be forgiven unto men." What is this unforgivable sin? Not a single harsh word or deed. It is the sustained, deliberate rejection of the Holy Spirit&apos;s testimony. It is seeing the kingdom of God at work and calling it evil. It is hardening the heart against the very power that alone can save you.',
        },
        {
          kind: 'commentary',
          id: 'matt12-jonah',
          html:
            '"For as Jonas was three days and three nights in the whale&apos;s belly; so shall the Son of man be three days and three nights in the heart of the earth." Jesus speaks of His coming death and resurrection. Jonah was delivered from the belly of the whale; Jesus will be delivered from death itself. The people of Nineveh repented at Jonah&apos;s preaching. Yet something greater than Jonah, greater than Solomon, is here. If you will not believe in Him, no sign will convince you.',
        },
        {
          kind: 'greek',
          id: 'matt12-hosia',
          title: 'Hosia — Blasphemy',
          script: 'βλασφημία',
          translit: '<strong>Hosia</strong> (Blasphemia) · blasphemy; speaking against God; rejection of divine power',
          description:
            'Blasphemy against the Holy Spirit is not an accidental word or an intellectual mistake. It is the deliberate rejection of the Spirit&apos;s work, the calling of good evil, the hardening of the heart against God&apos;s own power and presence. It is unforgivable because it refuses the only power that can forgive it.',
        },
        {
          kind: 'christ',
          id: 'matt12-christ-greater',
          title: 'Christ Connection — Greater Than the Temple',
          html:
            'Jesus establishes His identity through contrast. He is greater than Jonah, for Jonah was a sign, but Jesus is the substance. He is greater than Solomon, for Solomon was wise, but Jesus is wisdom itself. He is greater than the temple, for the temple was the place of God&apos;s dwelling, but Jesus is God&apos;s presence incarnate. The kingdom of God has come in His person.',
        },
        {
          kind: 'carry',
          html:
            'The Pharisees&apos; choice to attribute Jesus&apos; miracles to Beelzebub is a warning to us. It is possible to see the work of God and refuse to acknowledge it. It is possible to harden your heart against the truth. The unforgivable sin is not a moment of weakness but a trajectory: the sustained choice to turn away from the Spirit&apos;s testimony.',
        },
        {
          kind: 'reflection',
          id: 'matt12-spirit',
          prompt: 'Where do you see the Spirit of God at work in the world and in your own life? Are there ways you have been tempted to resist or explain away what God is doing?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Son of man is Lord even of the sabbath day. The blasphemy against the Holy Ghost shall not be forgiven. A greater than Solomon is here.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 12 · Study Guide',
  },

  hasHebrew: false,
};
