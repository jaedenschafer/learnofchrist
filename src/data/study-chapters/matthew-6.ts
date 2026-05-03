import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Matthew 6 — The Lord&apos;s Prayer and Kingdom Priorities
 *
 * Jesus teaches on authentic prayer and the hidden character of true
 * righteousness. The Pharisees pray openly to be seen; Jesus teaches His
 * disciples to pray in secret, before the Father alone. He gives them the
 * prayer: "Our Father which art in heaven, Hallowed be thy name. Thy kingdom
 * come. Thy will be done in earth, as it is in heaven. Give us this day our
 * daily bread..." The prayer models the priorities of the kingdom: God&apos;s
 * name is hallowed, His kingdom comes, His will is done, human need is met,
 * sin is forgiven. Then Jesus turns to treasure and anxiety: "Lay not up for
 * yourselves treasures upon earth... Seek ye first the kingdom of God, and his
 * righteousness; and all these things shall be added unto you."
 */
export const MATTHEW_6: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 6,

  estimatedMinutes: { beginner: 2, intermediate: 6, deep: 8 },
  intros: [
    'Jesus teaches His disciples about the hidden character of kingdom righteousness. The Pharisees "sound a trumpet before thee" when they give alms, so that they might be seen of men. They pray standing in the synagogues and in the corners of the streets, making themselves visible. Jesus cuts through this hypocrisy: "Verily I say unto you, They have their reward." They have what they sought—human praise. But there is a far greater reward: the approval of the Father who sees in secret.',
    'Jesus teaches that true righteousness is hidden, interior, and motivated by love of God rather than by the desire for approval. Fasting, prayer, giving—all the disciplines of the spiritual life—are meant to be between the soul and God. Not broadcast. Not for show. And then Jesus teaches them to pray. Not with the empty repetitions of the heathen, not with flowery words designed to impress. But with simplicity and directness, child-like honesty before the Father.',
  ],

  sections: [
    {
      ref: 'Matthew 6:1–18',
      title: 'Hidden Righteousness: Prayer, Alms, and Fasting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'Take heed that ye do not your alms before men, to be seen of them: otherwise ye have no reward of your Father which is in heaven.'),
            plain(5, 'And when thou prayest, thou shalt not be as the hypocrites are: for they love to pray standing in the synagogues and in the corners of the streets, that they may be seen of men. Verily I say unto you, They have their reward.'),
            plain(6, 'But thou, when thou prayest, enter into thy closet, and when thou hast shut to thy door, pray to thy Father which is in secret; and thy Father which seeth in secret shall reward thee openly.'),
            plain(9, 'After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name.'),
            plain(10, 'Thy kingdom come. Thy will be done in earth, as it is in heaven.'),
            plain(11, 'Give us this day our daily bread.'),
            plain(12, 'And forgive us our debts, as we forgive our debtors.'),
            plain(13, 'And lead us not into temptation, but deliver us from evil: For thine is the kingdom, and the power, and the glory, for ever. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt6-hidden-alms',
          html:
            'Jesus begins by calling His disciples to practice righteousness without seeking the praise of men. "Take heed that ye do not your alms before men, to be seen of them." This is not because giving is bad, but because the motivation matters absolutely. If you give to be seen and praised, you have what you sought—human approval. But you have forfeited the deeper reward of the Father&apos;s approval, the reward of a conscience clear before God.',
        },
        {
          kind: 'commentary',
          id: 'matt6-secret-prayer',
          html:
            'The same principle applies to prayer. The hypocrites love to pray standing in the synagogues and in the corners of the streets, making themselves visible. Jesus teaches that genuine prayer is hidden. "Enter into thy closet, and when thou hast shut to thy door, pray to thy Father which is in secret." Prayer is not performance. It is communion with God. The Father "seeth in secret"—He knows what you truly seek, truly need, truly offer. And He rewards openly what is done in secret.',
        },
        {
          kind: 'commentary',
          id: 'matt6-lords-prayer',
          html:
            'Jesus then teaches the prayer that bears His name. It begins with recognition: "Our Father which art in heaven, Hallowed be thy name."[res:intertextual-lords-prayer] Before petition comes worship. The name of God is holy and must be honored. Then comes the petition for the kingdom: "Thy kingdom come. Thy will be done in earth, as it is in heaven." The disciple seeks not first his own comfort but the coming of God&apos;s reign and the alignment of earth with heaven&apos;s values. Only then come petitions for personal need: bread, forgiveness, protection.',
        },
        {
          kind: 'greek',
          id: 'matt6-epiousion',
          title: 'Epiousion — Daily Bread',
          script: 'ἐπιούσιος',
          translit: '<strong>Epiousion</strong> · daily; necessary; bread for the coming day',
          description:
            'The Greek word epiousion is remarkable because it appears nowhere else in ancient literature. Matthew likely translated it from the Aramaic word Jesus used. It suggests not abundance or excess, but what is needed for today. The prayer asks not for wealth or security or surplus, but for God to provide what the day requires. It is a prayer that cultivates trust and dependence.',
        },
        {
          kind: 'commentary',
          id: 'matt6-forgive-debtors',
          html:
            'A striking condition appears in the prayer: "Forgive us our debts, as we forgive our debtors." The prayer ties God&apos;s forgiveness of us to our forgiveness of others. Jesus later emphasizes this: there is a direct connection between the mercy we extend and the mercy we receive. To hold a grudge is to position ourselves as creditors, as judges. But we stand before God as debtors, as those who need mercy. To extend mercy is to align ourselves with the nature of the kingdom.',
        },
        {
          kind: 'christ',
          id: 'matt6-christ-kingdom-first',
          title: 'Christ Connection — Kingdom-First Living',
          html:
            'The Lord&apos;s Prayer reveals the priorities of Christ&apos;s kingdom. First: God&apos;s name is hallowed, His kingdom comes, His will is done. These are not subsidiary to human comfort or achievement. They are primary. Only within this framework of God&apos;s reign do we ask for our daily bread, our forgiveness, our protection. This is not selfish surrender of self-interest. It is the reordering of all interests around the single supreme interest: that God&apos;s kingdom come and His will be done.',
        },
        {
          kind: 'carry',
          html:
            'Jesus teaches us that spiritual discipline—giving, prayer, fasting—is meant to be hidden. Not to be ashamed of, but to be interior, sincere, done for God&apos;s eyes alone. In a world that measures everything by visibility and social media presence, this is a radical counter-claim. The most important things—your prayer life, your hidden generosity, your secret trust in God—are not performed for an audience. They are between you and the Father.',
        },
        {
          kind: 'reflection',
          id: 'matt6-hidden',
          prompt: 'What practices of righteousness do you do with awareness of an audience? What would it be like to do them in secret, for God&apos;s eyes alone?',
        },
      ],
    },

    {
      ref: 'Matthew 6:19–34',
      title: 'Treasure, Anxiety, and Seeking First the Kingdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(19, 'Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt, and where thieves break through and steal:'),
            plain(20, 'But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal:'),
            plain(21, 'For where your treasure is, there will your heart be also.'),
            plain(25, 'Therefore I say unto you, Take no thought for your life, what ye shall eat, or what ye shall drink; nor yet for your body, what ye shall put on. Is not the life more than meat, and the body than raiment?'),
            plain(31, 'Therefore take no thought, saying, What shall we eat? or, What shall we drink? or, Wherewithal shall we be clothed?'),
            plain(33, 'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt6-treasures',
          html:
            'Jesus commands: "Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt, and where thieves break through and steal." Earthly treasures are inherently unstable. They decay, they are lost, they are stolen. But heavenly treasure—investment in the kingdom, the growth of love and righteousness and faith—does not perish. "For where your treasure is, there will your heart be also." Where we put our resources reveals where our heart truly is. If our treasure is in earthly things, our heart will be bound to them. If our treasure is in the kingdom, our heart will be freed for God.',
        },
        {
          kind: 'commentary',
          id: 'matt6-birds-lilies',
          html:
            'Jesus teaches about anxiety through the example of nature. "Behold the fowls of the air: for they sow not, neither do they reap, nor gather into barns; yet your heavenly Father feedeth them. Are ye not much better than they?" The birds do not farm or save or plan, yet the Father feeds them. Humans are more valuable. Why would the Father not care for you? The argument is compelling: if God cares for what is less valuable, how much more does He care for you?',
        },
        {
          kind: 'commentary',
          id: 'matt6-seek-first',
          html:
            '"But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you." This is not a guarantee of wealth or comfort. It is a reordering of priorities. When the kingdom comes first, when righteousness is the chief aim, when trust in the Father is total—then the basic necessities of life are included. Not luxury. Not excess. But what is needed. The kingdom-first life is not impoverished but liberated from anxiety.',
        },
        {
          kind: 'greek',
          id: 'matt6-merimna',
          title: 'Merimna — Anxiety',
          script: 'μέριμνα',
          translit: '<strong>Merimna</strong> · anxiety; worry; care; concern; preoccupation',
          description:
            'The Greek word merimna describes the mental state of worry and preoccupation. Jesus does not say we will have no concerns or that we should be careless. Rather, He forbids the kind of divisive worry that tears the mind apart with anxiety about the future. Trust in the Father displaces such anxiety. We are freed to focus on what matters most.',
        },
        {
          kind: 'christ',
          id: 'matt6-christ-kingdom-provision',
          title: 'Christ Connection — The Father&apos;s Provision',
          html:
            'Jesus reveals the Father as generous and attentive. He feeds the birds. He clothes the grass of the field. He knows what we have need of before we ask. The kingdom is not characterized by scarcity and competition, but by abundance and care. When we seek first the kingdom and God&apos;s righteousness, we place ourselves under the Father&apos;s care. We become like children who are provided for, like servants who are fed by their master.',
        },
        {
          kind: 'carry',
          html:
            'Jesus&apos; teaching on anxiety and treasure invites us to examine where we have placed our confidence and our resources. Are we building treasure on earth or in heaven? Is our life oriented toward accumulation and security, or toward the kingdom and righteousness? The kingdom-first life is not a life of deprivation. It is a life liberated from the bondage of anxiety, free to trust and to love.',
        },
        {
          kind: 'reflection',
          id: 'matt6-treasure',
          prompt: 'If your financial choices, your time commitments, and your worries revealed where your treasure truly is, what would they show about your heart? Where do you need to reorder your priorities?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Our Father which art in heaven... Thy kingdom come. Seek ye first the kingdom of God, and his righteousness.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 6 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-lords-prayer',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Lord&apos;s Prayer — OT Parallels',
      url: 'https://intertextual.bible/text/matthew-6.9',
      description: 'Cross-references showing how the Lord&apos;s Prayer draws on Old Testament prayers and the covenant tradition.',
    },
    {
      id: 'sefaria-exodus-20-3-4',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 20:3–4 — No Other Gods',
      url: 'https://www.sefaria.org/Exodus.20.3-4',
      description: 'The first and second commandments, underlying Jesus&apos; teaching on divided loyalties and idolatry.',
    },
    {
      id: 'bibleodyssey-prayer',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Prayer in Early Christianity',
      url: 'https://www.bibleodyssey.org/dictionary/prayer/',
      description: 'Survey of prayer practices and theology in first-century Jewish Christianity and the place of the Lord&apos;s Prayer.',
    },
  ],

  hasHebrew: false,
};
