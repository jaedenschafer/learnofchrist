import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Matthew 10 — The Twelve Sent and the Cost of Discipleship
 *
 * Jesus calls the twelve apostles and sends them out to preach, heal, and cast
 * out demons. "Go not into the way of the Gentiles, and into any city of the
 * Samaritans enter ye not: but rather go to the lost sheep of the house of
 * Israel." He warns them: "Behold, I send you forth as sheep in the midst of
 * wolves: be ye therefore wise as serpents, and harmless as doves." They will
 * be brought before governors and kings. But "He that taketh not his cross, and
 * followeth after me, is not worthy of me." Discipleship costs. It demands the
 * willingness to lose all, including life itself, for the sake of Jesus and the
 * kingdom.
 */
export const MATTHEW_10: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 10,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Jesus calls the twelve apostles and sends them on a mission. He gives them power to cast out unclean spirits and to heal every sickness and disease. He sends them to the lost sheep of Israel—those who are without a shepherd, scattered and broken. He tells them to go without supplies: "Provide neither gold, nor silver, nor brass in your purses." Trust in the Father to provide. The mission is urgent and total.',
    'But Jesus also prepares them for opposition. "Behold, I send you forth as sheep in the midst of wolves." They will be brought before governors and kings. Families will be divided. Some will hate them. Yet Jesus calls them to faithfulness: "Be ye therefore wise as serpents, and harmless as doves." Watchfulness and innocence, intelligence and purity. The disciples are sent as lambs among wolves, yet they are not to become wolves themselves.',
  ],

  sections: [
    {
      ref: 'Matthew 10:1–25',
      title: 'The Apostolic Commission and the Cost of Following',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(1, 'And when he had called unto him his twelve disciples, he gave them power against unclean spirits, to cast them out, and to heal all manner of sickness and all manner of disease.'),
            plain(5, 'These twelve Jesus sent forth, and commanded them, saying, Go not into the way of the Gentiles, and into any city of the Samaritans enter ye not:'),
            plain(6, 'But rather go to the lost sheep of the house of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matthew-10-78mid-1',
          html:
            'Jesus warns of persecution coming to His disciples; now He moves to comfort. Fear them not; what is covered will be revealed, what is hidden will be made known.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(9, 'Provide neither gold, nor silver, nor brass in your purses;'),
            plain(16, 'Behold, I send you forth as sheep in the midst of wolves: be ye therefore wise as serpents, and harmless as doves.'),
            plain(24, 'The disciple is not above his master, nor the servant above his lord.'),
            plain(28, 'And fear them not which kill the body, but are not able to kill the soul: but rather fear him which is able to destroy both soul and body in hell.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt10-sent-forth',
          html:
            'Jesus sends the twelve "as sheep in the midst of wolves." This is not metaphor only. The disciples will face real opposition. They will be arrested, brought before governors and kings, beaten in synagogues. Yet their posture is not to become predators. They are called to be "wise as serpents, and harmless as doves"—to be alert and watchful, but innocent and pure. They do not fight back with worldly weapons. Their weapon is witness, presence, and faithfulness[res:bibleodyssey-apostles][res:sefaria-psalms-23].',
        },
        {
          kind: 'commentary',
          id: 'matt10-lost-sheep',
          html:
            'Jesus sends the disciples first to "the lost sheep of the house of Israel." Israel is scattered, broken, without a shepherd. The disciples are sent as under-shepherds to gather the lost, to proclaim the coming kingdom, to heal the broken. The mission is to those who belong to God&apos;s covenant people yet are separated from God&apos;s purpose. Later, the gospel will extend to the Gentiles. But first, to the lost sheep of Israel[res:bibleodyssey-persecution].',
        },
        {
          kind: 'commentary',
          id: 'matt10-without-supply',
          html:
            'Jesus tells the disciples to go without money, without extra clothes, without staff: "Provide neither gold, nor silver, nor brass in your purses." This is not ascetic severity for its own sake. It is cultivation of trust. The disciples are to depend wholly on the Father and on the hospitality of those who receive them. They carry no security blankets. They carry only the message.',
        },
        {
          kind: 'greek',
          id: 'matt10-apostolos',
          title: 'Apostolos — Sent One',
          script: 'ἀπόστολος',
          translit: '<strong>Apostolos</strong> · apostle; messenger; one sent forth with authority',
          description:
            'The Greek word apostolos refers to one who is sent with authority to represent the sender. The twelve are apostles—sent by Jesus with His authority to cast out demons, to heal, to preach. They are not independent agents. They are envoys of the kingdom, speaking and acting with the authority of the King Himself.',
        },
        {
          kind: 'commentary',
          id: 'matt10-not-above',
          html:
            '"The disciple is not above his master, nor the servant above his lord." Jesus prepares the disciples for the reality that they will suffer as He will suffer. They will be persecuted, rejected, opposed. But they are not better than He is. If the world hates the master, it will hate the servant. This is the pattern of the kingdom: servanthood, humility, willingness to suffer for the sake of the message.',
        },
        {
          kind: 'christ',
          id: 'matt10-christ-cost',
          title: 'Christ Connection — Discipleship Cost',
          html:
            'Jesus sends the twelve with power and authority, but He sends them into a hostile world. They will face opposition, rejection, even death. Yet He calls them to faithfulness. Discipleship is not comfortable. It is costly. But it is worth the cost, because it is alignment with the kingdom of God and the will of the Father.',
        },
        {
          kind: 'carry',
          html:
            'The disciples&apos; mission reveals a pattern: you are sent to the broken and lost. You are given authority and power. But you go without worldly security. You trust in the Father. You face opposition with faithfulness. You maintain innocence and purity even in the midst of wolves. This is the shape of Christian witness in every age.',
        },
        {
          kind: 'reflection',
          id: 'matt10-sent',
          prompt: 'In what way are you "sent" by Jesus? To whom are you called to witness, to heal, to bring the gospel? What opposition do you face, and how does Jesus&apos; calling shape your response?',
        },
      ],
    },

    {
      ref: 'Matthew 10:26–42',
      title: 'Courage, Confession, and Cross-Bearing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(26, 'Fear them not therefore: for there is nothing covered, that shall not be revealed; and hid, that shall not be known.'),
            plain(32, 'Whosoever therefore shall confess me before men, him will I confess also before my Father which is in heaven.'),
            plain(33, 'But whosoever shall deny me before men, him will I also deny before my Father which is in heaven.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matthew-10-78mid-2',
          html:
            'The scene shifts here — a new dialogue, a new healing, a new parable. Matthew gathers Jesus&apos; teaching by theme, not always by chronology.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(34, 'Think not that I am come to send peace on earth: I came not to send peace, but a sword.'),
            plain(37, 'He that loveth father or mother more than me is not worthy of me: and he that loveth son or daughter more than me is not worthy of me.'),
            plain(38, 'And he that taketh not his cross, and followeth after me, is not worthy of me.'),
            plain(39, 'He that findeth his life shall lose it: and he that loseth his life for my sake shall find it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt10-confess',
          html:
            '"Whosoever therefore shall confess me before men, him will I confess also before my Father." Public confession matters. It is not enough to believe in secret. The disciple must be willing to confess Jesus openly, before the world, even at the cost of rejection or persecution. Conversely, "Whosoever shall deny me before men, him will I also deny before my Father." Discipleship requires the courage to be known as a follower of Jesus.',
        },
        {
          kind: 'commentary',
          id: 'matt10-sword',
          html:
            '"Think not that I am come to send peace on earth: I came not to send peace, but a sword." This verse is often misunderstood as advocating violence. Rather, Jesus is saying that His coming will divide. Families will be split between those who follow Him and those who do not. The gospel creates division not because it is violent, but because it demands an ultimate choice. You cannot be neutral about the Messiah.',
        },
        {
          kind: 'commentary',
          id: 'matt10-cross',
          html:
            '"He that taketh not his cross, and followeth after me, is not worthy of me." To take up the cross is to accept death—voluntary, willing death to self and to the world&apos;s demands. It is not the cross Christ takes (He takes it for our redemption), but the cross the disciple takes—the willingness to die, to be crucified with Christ. "He that findeth his life shall lose it: and he that loseth his life for my sake shall find it." The paradox is ultimate: to save your life is to lose it. To lose your life for Jesus is to find true life.',
        },
        {
          kind: 'greek',
          id: 'matt10-stauron',
          title: 'Stauron — Cross',
          script: 'σταυρός',
          translit: '<strong>Stauron</strong> · cross; stake; instrument of death; instrument of identification with Christ',
          description:
            'The cross is the instrument of crucifixion, but for the disciple, it becomes the symbol of voluntary identification with Christ&apos;s suffering and death. To take up the cross is to accept the path of the Messiah—the path of rejection, suffering, and death that leads to resurrection and glory.',
        },
        {
          kind: 'christ',
          id: 'matt10-christ-confession',
          title: 'Christ Connection — Confession of Christ',
          html:
            'Jesus makes the stakes absolutely clear. Discipleship is public. It is costly. It requires the willingness to confess before men, to take up the cross, to lose your life for His sake. Yet He promises: "He that loseth his life for my sake shall find it." The kingdom of God is not for the half-hearted. It calls for total allegiance, total surrender, willingness to follow even unto death.',
        },
        {
          kind: 'carry',
          html:
            'The call to take up the cross is not an abstract ideal. It is the invitation to radical following. You put Jesus first, before family, before security, before comfort. You are willing to be rejected, to suffer, to die. Not because suffering is holy in itself, but because the kingdom is worth it. And in losing your life for His sake, you find true life.',
        },
        {
          kind: 'reflection',
          id: 'matt10-cross-2',
          prompt: 'What would taking up your cross look like in your concrete situation? What is Jesus asking you to surrender? What is He promising you will find?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Go to the lost sheep of the house of Israel. Be ye wise as serpents, and harmless as doves. He that taketh not his cross, and followeth after me, is not worthy of me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 10 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-apostles',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Twelve Apostles',
      url: 'https://www.bibleodyssey.org/dictionary/apostles/',
      description: 'Overview of the apostolic calling and the twelve Jesus selected as His core missionary team.',
    },
    {
      id: 'sefaria-psalms-23',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 23 — The Lord as Shepherd',
      url: 'https://www.sefaria.org/Psalms.23',
      description: 'The psalm underlying Jesus&apos; language of shepherding the lost sheep of Israel.',
    },
    {
      id: 'bibleodyssey-persecution',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Early Christian Persecution',
      url: 'https://www.bibleodyssey.org/dictionary/persecution/',
      description: 'Historical context for Jesus&apos; warnings about persecution, imprisonment, and opposition the apostles would face.',
    },
  ],

  hasHebrew: false,
};
