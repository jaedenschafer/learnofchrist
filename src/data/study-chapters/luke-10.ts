import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 10 — Sending the Seventy and Mary and Martha
 *
 * Jesus appoints seventy others and sends them two by two before His face
 * into every city and place whither He Himself will come. They are lambs
 * among wolves. They carry no purse, no scrip, no shoes. They greet no man
 * by the way. They preach: "The kingdom of God is come nigh unto you." They
 * return with joy: "Even the devils are subject unto us through thy name."
 * Jesus rejoices. Later, in a certain village, Jesus enters the house of
 * Martha. Martha serves. Mary sits at Jesus&apos; feet and hears His word.
 * Martha is distracted. Jesus says: "Mary hath chosen that good part, which
 * shall not be taken away from her."
 */
export const LUKE_10: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 10,

  estimatedMinutes: { 5: 1, 10: 4, 15: 5 },
  intros: [
    'Jesus appoints seventy others and sends them two by two before His face into every city and place whither He Himself will come. He says to them: "The harvest truly is great, but the labourers are few: pray ye therefore the Lord of the harvest, that he would send forth labourers into his harvest." They are sent as lambs among wolves. They carry no purse, no scrip, no shoes. They are to salute no man by the way. Into whatever house they enter, they are to say: "Peace be to this house." If a son of peace be there, their peace shall rest on him. If not, it shall turn to them again.',
    'The seventy return with joy. "Even the devils are subject unto us through thy name." Jesus says: "I beheld Satan as lightning fall from heaven. Behold, I give unto you power to tread on serpents and scorpions, and over all the power of the enemy: and nothing shall by any means hurt you."',
  ],

  sections: [
    {
      ref: 'Luke 10:1–24',
      title: 'The Seventy Sent',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(1, 'After these things the Lord appointed other seventy also, and sent them two and two before his face into every city and place, whither he himself would come.'),
            plain(2, 'Therefore said he unto them, The harvest truly is great, but the labourers are few: pray ye therefore the Lord of the harvest, that he would send forth labourers into his harvest.'),
            plain(3, 'Go your ways: behold, I send you forth as lambs among wolves.'),
            plain(9, 'And heal the sick that are therein, and say unto them, The kingdom of God is come nigh unto you.'),
            plain(17, 'And the seventy returned again with joy, saying, Lord, even the devils are subject unto us through thy name.'),
            plain(21, 'In that hour Jesus rejoiced in spirit, and said, I thank thee, O Father, Lord of heaven and earth, that thou hast hid these things from the wise and prudent, and hast revealed them unto babes:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke10-seventy',
          html:
            'Jesus appoints seventy others—beyond the twelve. The twelve are the foundation of the church, but the work of the kingdom extends far beyond them. The seventy represent the broader missionary movement. They are sent two by two—for companionship, for witness, for accountability. They are sent as lambs among wolves—vulnerable, unprotected by earthly power, yet sent in the authority of Jesus.',
        },
        {
          kind: 'greek',
          id: 'luke10-therizo',
          title: 'Therizo — Reap; Harvest',
          script: 'θερίζω',
          translit: '<strong>Therizo</strong> · reap; harvest; gather grain',
          description:
            'The harvest is great. The kingdom grows. But there are not enough workers. Jesus calls for prayer that the Lord would send laborers. The work is His work. The laborers are His laborers. Yet He calls us to pray for them, to be among them.',
        },
        {
          kind: 'commentary',
          id: 'luke10-return',
          html:
            'The seventy return with joy. They have seen the power of Jesus&apos; name. Demons have been subject to them. Jesus says: "I beheld Satan as lightning fall from heaven." The kingdom of God is advancing. The powers of darkness are being overcome. Yet Jesus adds a necessary corrective: "Notwithstanding in this rejoice not, that the spirits are subject unto you; but rather rejoice, because your names are written in heaven."',
        },
        {
          kind: 'commentary',
          id: 'luke10-babes',
          html:
            'Jesus rejoices. He thanks the Father that these things are "hid from the wise and prudent, and revealed unto babes." The kingdom is not received by intellectual mastery or sophisticated argument. It is received by those who come as children—receptive, dependent, trusting. "Blessed are your eyes which see the things that ye see... for many prophets and kings have desired to see those things which ye see, and have not seen them."',
        },
        {
          kind: 'christ',
          id: 'luke10-christ-mission',
          title: 'Christ Connection — The Mission Extended',
          html:
            'Jesus&apos; work is extended through the seventy. They go in His authority. They preach His kingdom. They heal in His name. The mission is not confined to Jesus Himself. It is shared with those who believe in Him.',
        },
        {
          kind: 'carry',
          html:
            'Jesus also shares the parable of the Good Samaritan with a lawyer who asks: "Who is my neighbour?" A man is beaten and left for dead. A priest passes by. A Levite passes by. But a Samaritan—an outsider, a heretic by Jewish standards—stops. He binds the man&apos;s wounds. He brings him to an inn. He cares for him. Jesus says: "Go, and do thou likewise." Neighbourliness is not defined by kinship or religion. It is defined by compassion in action.',
        },
        {
          kind: 'reflection',
          id: 'luke10-seventy-reflect',
          prompt: 'Jesus sent the seventy. Do you see yourself as sent? Where and to whom is Jesus sending you?',
        },
      ],
    },

    {
      ref: 'Luke 10:38–42',
      title: 'Mary and Martha',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(38, 'Now it came to pass, as they went, that he entered into a certain village: and a certain woman named Martha received him into her house.'),
            plain(39, 'And she had a sister called Mary, which also sat at Jesus&apos; feet, and heard his word.'),
            plain(40, 'But Martha was cumbered about much serving, and came to him, and said, Lord, dost thou not care that my sister hath left me to serve alone? bid her therefore that she help me.'),
            plain(41, 'And Jesus answered and said unto her, Martha, Martha, thou art careful and troubled about many things:'),
            plain(42, 'But one thing is needful: and Mary hath chosen that good part, which shall not be taken away from her.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke10-martha',
          html:
            'Martha receives Jesus into her house. She is hospitable, busy, serving. She wants to provide for Jesus and His disciples. Yet her busyness troubles her. She complains to Jesus: "Lord, dost thou not care that my sister hath left me to serve alone?" She asks Jesus to tell Mary to help her. But Jesus does not rebuke Mary.',
        },
        {
          kind: 'commentary',
          id: 'luke10-mary',
          html:
            'Mary sits at Jesus&apos; feet. She hears His word. She does not serve. She does not prepare food or arrange the house. She listens. She learns. She is present to Jesus in the way that matters most—as a student, a disciple. She has "chosen that good part." Her choice will not be taken from her.',
        },
        {
          kind: 'greek',
          id: 'luke10-perisseuō',
          title: 'Perisspeuō — Busy; Occupied; Encumbered',
          script: 'περισσεύω',
          translit: '<strong>Perisseuō</strong> · abound; be occupied with; be encumbered',
          description:
            'Martha is "cumbered about much serving." She is encumbered, preoccupied, distracted. Good works have become a burden rather than a joy. The serving has taken the place of the one being served.',
        },
        {
          kind: 'christ',
          id: 'luke10-christ-presence',
          title: 'Christ Connection — Presence Over Performance',
          html:
            'The story of Mary and Martha teaches a fundamental truth: presence with Jesus is more important than any activity performed in His name. To sit at His feet and hear His word is the better choice. The work will follow. But the work without the presence becomes empty.',
        },
        {
          kind: 'reflection',
          id: 'luke10-mary-martha-reflect',
          prompt: 'Are you more like Mary or Martha? What would it mean to choose the "good part" that cannot be taken away from you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The harvest truly is great, but the labourers are few. Mary hath chosen that good part, which shall not be taken away from her.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 10 · Study Guide',
  },

  hasHebrew: false,
};
