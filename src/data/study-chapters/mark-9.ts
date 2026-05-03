import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Mark 9 — Glory and Service
 *
 * Six days after His teaching on the cross, Jesus takes Peter, James, and John
 * up a high mountain. There He is transfigured before them: His garments become
 * white as snow, shining exceeding bright. Elijah and Moses appear with Him,
 * speaking of His departure. Peter wants to build three tabernacles. But a cloud
 * overshadows them, and a voice speaks: "This is my beloved Son: hear him." Then,
 * descending, Jesus heals a demon-possessed boy. The disciples had failed. Jesus
 * rebukes them and teaches about faith. Then He foretells His death a second time
 * and teaches about service. "If any man desire to be first, the same shall be
 * last of all, and servant of all." The chapter reveals Christ&apos;s hidden glory and
 * the cost of discipleship: service, humility, embrace of the little child.
 */
export const MARK_9: RichChapterContent = {
  bookSlug: 'mark',
  bookName: 'Mark',
  chapter: 9,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Mark 9 opens with one of the most extraordinary moments in the gospel narrative. Six days after teaching on the cross, Jesus ascends a high mountain with Peter, James, and John. There He is transfigured. His garments become radiantly white. Elijah and Moses appear and speak with Him. The veil between heaven and earth seems to part. Peter, awed and confused, wishes to remain in this moment of glory. But a cloud shadows them, and a voice speaks: "This is my beloved Son: hear him." The vision fades. Coming down, they encounter a boy possessed with a spirit, violently convulsing. The disciples have tried to cast out the demon and failed. Jesus rebukes the spirit and casts it out.',
    'The chapter weaves together the theme of hidden glory and the cost of discipleship. Jesus foretells His death again—the second prediction. The disciples do not understand and are afraid to ask. When they arrive at a house in Capernaum, Jesus teaches them: "If any man desire to be first, the same shall be last of all, and servant of all." He takes a little child in His arms: "Whosoever shall receive one of such children in my name, receiveth me." The church is not built on power or prestige but on service to the vulnerable, the little, the overlooked.',
  ],

  sections: [
    /* ─── Mark 9:1–13 — The Transfiguration ──────────────────────────── */
    {
      ref: 'Mark 9:1–13',
      title: 'The Hidden Glory Revealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(2, 'And after six days Jesus taketh with him Peter, and James, and John, and leadeth them up into an high mountain apart by themselves: and he was transfigured before them.'),
            plain(3, 'And his raiment became shining, exceeding white as snow; so as no fuller on earth can white them.'),
            plain(4, 'And there appeared unto them Elias with Moses: and they were talking with Jesus.'),
            plain(7, 'And there was a cloud that overshadowed them: and a voice came out of the cloud, saying, This is my beloved Son: hear him.'),
            plain(8, 'And suddenly, when they had looked round about, they saw no man any more, save Jesus only with themselves.'),
            plain(9, 'And as they came down from the mountain, he charged them that they should tell no man what things they had seen, till the Son of man were risen from the dead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark9-transfigured',
          html:
            'Jesus is transfigured—changed in appearance, revealing an inner reality hidden during His earthly ministry. His garments become white, shining with a light that no earthly fuller could achieve. This whiteness suggests purity, holiness, divine radiance. The three disciples witness the transformation. They are seeing, briefly, the glory that Jesus bears eternally but has veiled in human flesh.',
        },
        {
          kind: 'commentary',
          id: 'mark9-moses-elijah',
          html:
            'Moses and Elijah appear—the law and the prophets[res:intertextual-moses-elijah], the two pillars of the Hebrew Scripture. They speak with Jesus, presumably about His coming departure (His exodus, as Luke says). The law and the prophets testify to the centrality of Jesus. The old covenant finds its fulfillment in Him.',
        },
        {
          kind: 'greek',
          id: 'mark9-metamorphoō',
          title: 'Metamorphoō — Transfigured',
          script: 'μεταμορφόω',
          translit: '<strong>Metamorphoō</strong> · transfigured; transformed; changed in form',
          description:
            'The Greek word metamorphoō means to be transformed in appearance, to undergo a change of form. It is used in Romans 12 for spiritual transformation. Jesus&apos; transfiguration is a visible manifestation of what He truly is—glory temporarily unveiled.',
        },
        {
          kind: 'commentary',
          id: 'mark9-voice-cloud',
          html:
            'A cloud overshadows them, reminiscent of the pillar of cloud that guided Israel in the wilderness and of the cloud that descended on the tabernacle[res:sefaria-tabernacle-cloud]. Out of the cloud comes a voice: "This is my beloved Son: hear him." This is God&apos;s affirmation not of Peter&apos;s desire to build tabernacles but of Jesus as the sole focus of faith and obedience. The law and the prophets give way. Jesus alone must be heard.',
        },
        {
          kind: 'commentary',
          id: 'mark9-silence',
          html:
            'Jesus charges them to tell no one what they have seen until the Son of Man has risen from the dead. The transfiguration is not meant as a public proof of divinity. It is a private revelation given to strengthen the faith of the disciples before the passion. They are to keep silence until the resurrection makes sense of it.',
        },
        {
          kind: 'christ',
          id: 'mark9-christ-glory',
          title: 'Christ Connection — The Glory and the Passion',
          html:
            'The transfiguration reveals the glory that Jesus will recover after His death and resurrection. It is a glimpse of the resurrection body, of the glorified Christ seated at the right hand of God. For the disciples, it is an assurance that the suffering and death that will follow are not final. They lead to glory.',
        },
        {
          kind: 'carry',
          html:
            'The disciples wish to remain on the mountain in the presence of glory. Peter wants to build tabernacles—to stay in that moment. But Jesus leads them down to the valley, where a boy possessed with a spirit awaits healing, where service and suffering wait.',
        },
        {
          kind: 'reflection',
          id: 'mark9-mountain-valley',
          prompt: 'What would it mean for you to come down from the mountain of glory and enter the valley of service and suffering? Where is God calling you to serve?',
        },
      ],
    },

    /* ─── Mark 9:14–37 — Faith and Service ────────────────────────────── */
    {
      ref: 'Mark 9:14–37',
      title: 'The Little Child and Greatness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(17, 'And one of the multitude answered and said, Master, I have brought unto thee my son, which hath a dumb spirit;'),
            plain(23, 'Jesus said unto him, If thou canst believe, all things are possible to him that believeth.'),
            plain(24, 'And straightway the father of the child cried out, and said with tears, Lord, I believe; help thou mine unbelief.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark-9-78mid-1',
          html:
            'Mark moves quickly. The next verses press from one scene to the next without pause; the gospel is in a hurry.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(31, 'For he taught his disciples, and said unto them, The Son of man is delivered into the hands of men, and they shall kill him; and after that he is killed, he shall rise the third day.'),
            plain(35, 'And he sat down, and called the twelve, and saith unto them, If any man desire to be first, the same shall be last of all, and servant of all.'),
            plain(36, 'And he took a child, and set him in the midst of them: and when he had taken him in his arms, he said unto them,'),
            plain(37, 'Whosoever shall receive one of such children in my name, receiveth me: and whosoever shall receive me, receiveth not me, but him that sent me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark9-dumb-spirit',
          html:
            'A man brings his son possessed with a dumb spirit. The disciples have tried to cast it out and failed. Jesus asks the father: "How long is it ago since this came unto him?" The father responds that it has afflicted him from childhood. Jesus says: "If thou canst believe, all things are possible to him that believeth." The father cries out with tears: "Lord, I believe; help thou mine unbelief." This prayer encompasses the human condition—faith and doubt mingled together. Jesus heals the boy.',
        },
        {
          kind: 'commentary',
          id: 'mark9-second-passion',
          html:
            'Jesus foretells His death a second time: "The Son of man is delivered into the hands of men, and they shall kill him; and after that he is killed, he shall rise the third day." The disciples do not understand. Mark notes they are afraid to ask Him. The cross looms. They have witnessed the transfiguration—the glory hidden in Jesus. Now they must understand that this glory is achieved through suffering.',
        },
        {
          kind: 'greek',
          id: 'mark9-apistia',
          title: 'Apistia — Unbelief',
          script: 'ἀπιστία',
          translit: '<strong>Apistia</strong> · unbelief; lack of faith; distrust',
          description:
            'The father of the boy confesses not only faith but the struggle against unbelief. This is the reality of human faith—it is always mixed with doubt, with the need for God to sustain it. Faith is not the absence of doubt but the turning toward God despite doubt.',
        },
        {
          kind: 'commentary',
          id: 'mark9-servant-child',
          html:
            'Jesus sits down and calls the Twelve. He teaches them the paradox of greatness: "If any man desire to be first, the same shall be last of all, and servant of all." He takes a child in His arms. In that culture, children have no status, no power, no claim to honor[res:bible-odyssey-childhood-ancient]. Jesus makes the child the model of the kingdom. "Whosoever shall receive one of such children in my name, receiveth me."',
        },
        {
          kind: 'christ',
          id: 'mark9-christ-servant',
          title: 'Christ Connection — The Servant King',
          html:
            'Jesus embodies the paradox He teaches. He is the Son of Man, the one to whom all authority is given. Yet He comes to serve, to give His life as a ransom for many. Greatness in His kingdom is measured by humility, by willingness to serve the powerless, the overlooked, the child.',
        },
        {
          kind: 'carry',
          html:
            'The teaching on the child challenges every worldly measure of success. In the kingdom of God, the greatest is the one who serves the least. Power and prestige are inverted. Favor falls on the little, the vulnerable, the dependent.',
        },
        {
          kind: 'reflection',
          id: 'mark9-child-serve',
          prompt: 'How does Jesus&apos; teaching on the child as the model of the kingdom challenge your ambitions? What would it mean for you to truly serve the small and overlooked?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'This is my beloved Son: hear him. If any man desire to be first, the same shall be last of all, and servant of all. Whosoever shall receive one of such children in my name, receiveth me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Mark 9 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-moses-elijah',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Moses & Elijah in Mark',
      url: 'https://intertextual.bible/text/deuteronomy-18/mark-9.4',
      description: 'Intertextual links showing how the law (Moses) and prophecy (Elijah) are fulfilled and transformed in Jesus.',
    },
    {
      id: 'sefaria-tabernacle-cloud',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 24: Cloud & Divine Presence',
      url: 'https://www.sefaria.org/Exodus.24.15-18?lang=bi',
      description: 'Torah account of the cloud of God&apos;s presence at Sinai, illuminating the symbolism of the cloud at the transfiguration.',
    },
    {
      id: 'bible-odyssey-childhood-ancient',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Childhood in the First Century',
      url: 'https://www.bibleodyssey.org/dictionary/children-childhood/',
      description: 'Open-access entry on the social position of children in ancient Mediterranean culture, showing why Jesus&apos; elevation of the child was radical.',
    },
  ],

  hasHebrew: false,
};
