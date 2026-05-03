import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Mark 3 — The Family of the King
 *
 * On the Sabbath in the synagogue, Jesus encounters a man with a withered hand.
 * He heals him—and the Pharisees immediately plot His destruction. The kingdom
 * of God divides. Jesus withdraws, calls the Twelve, and His family comes
 * seeking Him. But when told "thy mother and thy brethren...seek for thee," He
 * looks at those sitting about Him and says: "Whosoever shall do the will of God,
 * the same is my brother, and my sister, and mother." The true family of Jesus
 * is not defined by blood but by faith. Whoever does the will of God belongs to
 * Him. This is the radical claim: through Jesus, the outsider becomes family.
 */
export const MARK_3: RichChapterContent = {
  bookSlug: 'mark',
  bookName: 'Mark',
  chapter: 3,

  estimatedMinutes: { beginner: 2, intermediate: 6, deep: 8 },
  intros: [
    'Mark 3 begins with another Sabbath confrontation. A man with a withered hand enters the synagogue. The Pharisees watch Jesus closely, hoping He will heal on the Sabbath so they can accuse Him. But Jesus turns the question back on them: "Is it lawful to do good on the sabbath days, or to do evil? to save life, or to kill?" And He heals the man. The Pharisees leave in fury and begin plotting with the Herodians—those who support Herod, Rome&apos;s client king—how they might destroy Jesus. The authority of Jesus is now openly opposed.',
    'As Jesus withdraws, great multitudes follow Him. The chapter crescendos with a new definition of family. Jesus&apos; mother and brothers come looking for Him. Perhaps they think He is mad, perhaps they wish to protect Him. But when told of their arrival, Jesus redefines everything: "Whosoever shall do the will of God, the same is my brother, and my sister, and mother." In His kingdom, the bonds of faith supersede the bonds of blood. The true family is constituted not by genealogy but by obedience to God.',
  ],

  sections: [
    /* ─── Mark 3:1–12 — Healing and Hostility ─────────────────────────── */
    {
      ref: 'Mark 3:1–12',
      title: 'Good and Evil on the Sabbath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'And he entered again into the synagogue; and there was a man there which had a withered hand.'),
            plain(4, 'And he saith unto them, Is it lawful to do good on the sabbath days, or to do evil? to save life, or to kill? But they held their peace.'),
            plain(5, 'And when he had looked round about on them with anger, being grieved for the hardness of their hearts, he saith unto the man, Stretch forth thine hand. And he stretched it out: and his hand was restored whole as the other.'),
            plain(6, 'And the Pharisees went forth, and straightway took counsel with the Herodians against him, how they might destroy him.'),
            plain(7, 'But Jesus withdrew himself with his disciples to the sea: and a great multitude from Galilee followed him, and from Judaea,'),
            plain(11, 'And unclean spirits, when they saw him, fell down before him, and cried, saying, Thou art the Son of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark3-withered-hand',
          html:
            'A man with a withered hand enters the synagogue[res:israel-museum-galilean]. In the ancient world, to lose the use of one&apos;s hand was to lose one&apos;s livelihood, one&apos;s identity, one&apos;s place in society. The Pharisees watch to see if Jesus will heal on the Sabbath. They know the law forbids work on the Sabbath. They have a trap set. But Jesus refuses to be entrapped by a false choice. He turns their question around: what is the Sabbath for? Is it for the preservation of life or the destruction of it?',
        },
        {
          kind: 'commentary',
          id: 'mark3-anger-grief',
          html:
            'Mark notes that Jesus looked at the Pharisees "with anger, being grieved for the hardness of their hearts." He does not become angry at the man&apos;s suffering. He becomes angry at the Pharisees&apos; refusal to see suffering as a call to action. Their interpretation of the law has hardened their hearts. They cannot see a man in need. They can only see a legal problem to solve.',
        },
        {
          kind: 'greek',
          id: 'mark3-xerainō',
          title: 'Xerainō — Withered',
          script: 'ξηραίνω',
          translit: '<strong>Xerainō</strong> · withered; dried up; lacking strength and vitality',
          description:
            'The man&apos;s hand is xerainē—dried up, withered, lacking the vitality of a healthy limb. This word suggests not merely physical damage but a life diminished, incomplete. Jesus restores not just function but wholeness.',
        },
        {
          kind: 'commentary',
          id: 'mark3-herodians',
          html:
            'The Pharisees plot with the Herodians. This is extraordinary—these are groups that normally oppose each other. The Pharisees are religious purists who view Rome as defiling. The Herodians support Herod, who collaborated with Rome. Yet their common opposition to Jesus unites them. The kingdom He proclaims threatens both religious authority and political order.',
        },
        {
          kind: 'christ',
          id: 'mark3-christ-wholeness',
          title: 'Christ Connection — Restoration to Wholeness',
          html:
            'Jesus restores the withered hand to full strength and function. This is not mere repair but redemption—the restoration of a person to wholeness, to their place in the human community, to the ability to work and contribute and be part of society. His healing is always aimed at integration, at restoration, at making people whole.',
        },
        {
          kind: 'carry',
          html:
            'The Pharisees in this passage are not evil men. They are devoted to God&apos;s law. But their interpretation has become rigid, disconnected from the purpose behind it. When have you substituted the letter of the law for its spirit? When have you allowed rules to shield you from the call to compassion?',
        },
        {
          kind: 'reflection',
          id: 'mark3-hardness',
          prompt: 'When have you felt your heart growing hard? What would it take for you to feel again the grief of suffering in others?',
        },
      ],
    },

    /* ─── Mark 3:13–30 — The Twelve and the Unforgivable Sin ──────────── */
    {
      ref: 'Mark 3:13–30',
      title: 'The Twelve Chosen, Satan Divided',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(13, 'And he goeth up into a mountain, and calleth unto him whom he would: and they came unto him.'),
            plain(14, 'And he ordained twelve, that they should be with him, and that he might send them forth to preach,'),
            plain(15, 'And to have power to cast out devils:'),
            plain(22, 'And the scribes which came down from Jerusalem said, He hath Beelzebub, and by the prince of the devils casteth he out devils.'),
            plain(24, 'And if a kingdom be divided against itself, that kingdom cannot stand.'),
            plain(25, 'And if a house be divided against itself, that house cannot stand.'),
            plain(28, 'Verily I say unto you, All sins shall be forgiven unto the sons of men, and blasphemies wherewith soever they shall blaspheme:'),
            plain(29, 'But he that shall blaspheme against the Holy Ghost hath never forgiveness, but is in danger of eternal damnation:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark3-twelve-called',
          html:
            'Jesus goes into the mountain and calls twelve disciples[res:bible-odyssey-apostles]. These are not the most learned, the most powerful, the most connected. They are ordinary men—fishermen, a tax collector, zealots. They are called to "be with him" and to be sent out to preach and cast out demons. The purpose of their calling is both relational (to be with Jesus) and missional (to proclaim the kingdom).',
        },
        {
          kind: 'commentary',
          id: 'mark3-kingdom-divided',
          html:
            'The scribes from Jerusalem accuse Jesus of casting out demons by the power of Beelzebub, the prince of demons. Jesus responds with a logical refutation: a kingdom divided against itself cannot stand. If Satan casts out Satan, his kingdom is internally destroyed. The very fact that demons are being cast out proves that the kingdom of God is arriving, not the kingdom of Satan.',
        },
        {
          kind: 'greek',
          id: 'mark3-blasphemia',
          title: 'Blasphemia — Blasphemy',
          script: 'βλασφημία',
          translit: '<strong>Blasphemia</strong> · blasphemy; reviling; speaking against God',
          description:
            'Blasphemy[res:perseus-blasphemia] is speech that reviles God, that attributes God&apos;s work to evil. The unforgivable blasphemy is against the Holy Spirit—a hardened refusal to acknowledge God&apos;s work as divine. It is not a sin of weakness but of hardened rebellion.',
        },
        {
          kind: 'commentary',
          id: 'mark3-unforgivable',
          html:
            'The teaching on the unforgivable sin is not a legal pronouncement but a statement about human nature. If a person sees the healing, restorative work of the Holy Spirit and attributes it to demons, they have closed themselves off from redemption. Not because God will not forgive, but because they have chosen to see good as evil, and will never repent of it. They have hardened their heart beyond return.',
        },
        {
          kind: 'christ',
          id: 'mark3-christ-twelve',
          title: 'Christ Connection — The New Israel',
          html:
            'The calling of Twelve apostles parallels the choosing of twelve tribes. Jesus is reconstituting Israel around Himself. The new people of God is not a nation defined by genealogy or territory, but a community called and sent by Jesus to witness to the kingdom.',
        },
        {
          kind: 'carry',
          html:
            'The unforgivable sin is not a momentary failure but a sustained refusal to acknowledge God&apos;s work. Jesus teaches that all sins can be forgiven—all betrayals, all failures, all weaknesses. The only unforgiven state is the one that refuses forgiveness, that closes its eyes to the work of the Holy Spirit.',
        },
        {
          kind: 'reflection',
          id: 'mark3-hardened',
          prompt: 'Is there a way in which you have been tempted to attribute God&apos;s work to evil, to refuse to see His hand? What would it take to open your eyes?',
        },
      ],
    },

    /* ─── Mark 3:31–35 — The True Family ──────────────────────────────── */
    {
      ref: 'Mark 3:31–35',
      title: 'Blood and Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(31, 'There came then his brethren and his mother, and, standing without, sent unto him, calling him.'),
            plain(32, 'And the multitude sat about him, and they said unto him, Behold, thy mother and thy brethren without seek for thee.'),
            plain(33, 'And he answered them, saying, Who is my mother, or my brethren?'),
            plain(34, 'And he looked round about on them which sat about him, and said, Behold my mother and my brethren!'),
            plain(35, 'For whosoever shall do the will of God, the same is my brother, and my sister, and mother.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark3-family-comes',
          html:
            'Jesus&apos; mother and brothers arrive and wait outside, sending word for Him to come. We do not know their motives. Perhaps Mary wishes to protect her son. Perhaps His brothers think He has gone too far. But when Jesus is told of their arrival, He does not rush to greet them. Instead, He asks: "Who is my mother, or my brethren?" This is not rejection but redefinition.',
        },
        {
          kind: 'commentary',
          id: 'mark3-redefined-family',
          html:
            'Jesus looks at those sitting about Him—crowds of followers, some devoted, some curious, all having come to hear the word of God—and says: "Behold my mother and my brethren! For whosoever shall do the will of God, the same is my brother, and my sister, and mother." The family of Jesus is constituted not by blood but by obedience to God. This is revolutionary: blood relationships, the most fundamental bonds in ancient society, are relativized.',
        },
        {
          kind: 'greek',
          id: 'mark3-thelēma',
          title: 'Thelēma — Will',
          script: 'θέλημα',
          translit: '<strong>Thelēma</strong> · will; desire; intention; purpose',
          description:
            'Doing the will of God means aligning oneself with God&apos;s purpose and intention. It is not mere obedience to law but a heart-directed conformity to God&apos;s vision for the world and for humanity.',
        },
        {
          kind: 'christ',
          id: 'mark3-christ-family',
          title: 'Christ Connection — The Family of God',
          html:
            'In Christ, a new kinship is established. Those who were distant from God are made near. Those who had no family become part of God&apos;s household. The blood of Christ—shed for the redemption of humanity—creates a bond deeper than genetic relationship. To be in Christ is to become daughter or son, sister or brother to all who follow Him.',
        },
        {
          kind: 'carry',
          html:
            'Mark 3 closes with a profound reorientation of identity. You are not finally defined by your family of origin, your ethnicity, your social position. You are defined by whether you do the will of God. That will is love, mercy, the healing of the broken, the restoration of the outcast. Whosoever does these things is the family of Jesus.',
        },
        {
          kind: 'reflection',
          id: 'mark3-family-true',
          prompt: 'What would change in how you see yourself and others if you truly believed you were siblings in God&apos;s family? Where would that redefine your loyalties?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Whosoever shall do the will of God, the same is my brother, and my sister, and mother.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Mark 3 · Study Guide',
  },

  resources: [
    {
      id: 'israel-museum-galilean',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Galilean Life & Synagogues',
      url: 'https://www.imj.org.il/en/collections/search?q=galilee+synagogue',
      description: 'Museum artifacts from first-century Galilean synagogues and domestic life, grounding the setting of Mark&apos;s miracles.',
    },
    {
      id: 'bible-odyssey-apostles',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Apostles & Disciples',
      url: 'https://www.bibleodyssey.org/dictionary/apostles/',
      description: 'Open-access entry on the calling and role of the Twelve as witnesses and leaders in the early Jesus movement.',
    },
    {
      id: 'perseus-blasphemia',
      kind: 'lexicon',
      source: 'Perseus Scaife',
      label: 'βλασφημία (blasphemia)',
      url: 'https://scaife.perseus.org/lexica/lsj/βλασφημία/',
      description: 'Greek lexicon entry on blasphemy as reviling speech that attributes divine work to evil sources.',
    },
  ],

  hasHebrew: false,
};
