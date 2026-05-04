import { hp, t, plain, type RichChapterContent } from './types';

/**
 * Matthew 21 — Entry and Cleansing
 *
 * Jesus enters Jerusalem on a donkey. "Hosanna to the Son of David." He goes to
 * the temple and cleanses it, driving out those who buy and sell. "My house shall
 * be called the house of prayer; but ye have made it a den of thieves." He curses
 * a fig tree for bearing no fruit. Parables follow: the two sons, the vineyard
 * where tenants reject and kill the son. "Did ye never read, The stone which the
 * builders rejected, the same is become the head of the corner?" Christ is the
 * rejected stone who becomes the cornerstone.
 */
export const MATTHEW_21: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 21,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  opener: {
    matchTitle: /Jesus Forbids the Carrying/i,
    caption: 'Matthew 21',
  },
  intros: [
    'Jesus approaches Jerusalem. He sends two disciples ahead to find a donkey. "Ye shall find an ass tied, and a colt with her: loose them, and bring them unto me." Thus does Jesus enter the holy city, not on a warhorse but on a beast of burden. The crowds spread their garments and branches, crying "Hosanna to the Son of David." Yet the city that was meant to receive Him will reject Him.',
    'In the temple, Jesus finds money changers and those selling doves. He overturns their tables and speaks with prophetic authority: "It is written, My house shall be called the house of prayer; but ye have made it a den of thieves." The temple, meant to be a place of encounter with God, has become a marketplace. Jesus cleanses it, and those who are blind and lame come to Him for healing.',
  ],

  sections: [
    /* ─── Matthew 21:1–22 — Triumphal Entry and Cleansing ────────────────── */
    {
      ref: 'Matthew 21:1–22',
      title: 'The King Comes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(1, 'And when they drew nigh unto Jerusalem, and were come to Bethphage, unto the mount of Olives, then sent Jesus two disciples,'),
            plain(5, 'Tell ye the daughter of Sion, Behold, thy King cometh unto thee, meek, and sitting upon an ass, and a colt the foal of an ass.'),
            plain(9, 'And the multitudes that went before, and that followed, cried, saying, Hosanna to the son of David: Blessed is he that cometh in the name of the Lord; Hosanna in the highest.'),
            plain(12, 'And Jesus went into the temple of God, and cast out all them that sold and bought in the temple, and overthrew the tables of the moneychangers, and the seats of them that sold doves;'),
            plain(13, 'And said unto them, It is written, My house shall be called the house of prayer; but ye have made it a den of thieves.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt21-entry',
          html:
            'Jesus enters Jerusalem on a donkey, fulfilling the prophecy of Zechariah [res:sefaria-zechariah-9-9]: "Thy King cometh unto thee... meek." The crowds cry "Hosanna"—meaning "Save us!" They recognize Him as the Messiah, the Son of David. Yet they expect a king who will free them from Rome. They do not anticipate that the salvation He brings is spiritual, not political[res:sefaria-psalm-118-22].',
        },
        {
          kind: 'commentary',
          id: 'matt21-cleansing',
          html:
            'In the temple court, Jesus finds not worship but commerce. The money changers exchange foreign currency for temple currency at profit. Those who sell doves—required sacrifices for the poor—charge inflated prices. The temple has become a marketplace. Jesus&apos; action is prophetic: He drives out the buyers and sellers, overturns the tables, and reclaims the temple as a house of prayer.',
        },
        {
          kind: 'greek',
          id: 'matt21-proseuche',
          title: 'Proseuche — Prayer',
          script: 'προσευχή',
          translit: '<strong>Proseuche</strong> · prayer; the act of speaking to God; petition',
          description:
            'Proseuche is the place and act of prayer—encounter with God. The temple is meant to be a proseuche, a place where heaven and earth meet. Commerce obscures that meeting.',
        },
        {
          kind: 'commentary',
          id: 'matt21-fig-tree',
          html:
            'Jesus curses a fig tree that bears no fruit. "Let no fruit grow on thee henceforward for ever." Some see the tree as symbolic of Israel, bearing the appearance of faith but no fruit of genuine devotion. Others see it as teaching about the consequences of unproductive life. The tree withers immediately, teaching the disciples about the power of faith-filled speech.',
        },
        {
          kind: 'christ',
          id: 'matt21-christ-king',
          title: 'Christ Connection — Christ the King of Peace',
          html:
            'Jesus enters Jerusalem as a king, but not the kind the world expects. His kingdom is not advanced by military might but by truth, mercy, and the cleansing of hearts. He is the rightful king whose authority extends over the temple itself.',
        },
        {
          kind: 'carry',
          html:
            'In your own life, what "temple" has been turned into a marketplace? What commerce or distraction keeps you from encounter with God? Jesus cleanses the temple. He invites you to release what obscures your prayer and worship.',
        },
        {
          kind: 'reflection',
          id: 'matt21-temple',
          prompt: 'If Jesus looked at how you spend your time and energy, what would He see—a house of prayer or something else? What would need to change?',
        },
      ],
    },

    /* ─── Matthew 21:23–46 — Authority, Two Sons, and Rejected Stone ──────── */
    {
      ref: 'Matthew 21:23–46',
      title: 'The Stone the Builders Rejected',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(33, 'Hear another parable: There was a certain householder, which planted a vineyard, and hedged it round about, and digged a winepress in it, and built a tower, and let it out to husbandmen, and went into a far country:'),
            plain(38, 'But when the husbandmen saw the son, they said among themselves, This is the heir; come, let us kill him, and let us seize on his inheritance.'),
            plain(42, 'Jesus saith unto them, Did ye never read in the scriptures, The stone which the builders rejected, the same is become the head of the corner: this is the Lord&apos;s doing, and it is marvellous in our eyes?'),
            plain(43, 'Therefore say I unto you, The kingdom of God shall be taken from you, and given to a nation bringing forth the fruits thereof.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt21-vineyard',
          html:
            'The parable of the vineyard is an allegory of Israel&apos;s history [res:intertextual-vineyard-tenants]. The householder is God. The vineyard is Israel. The husbandmen are the religious leaders. God sends prophets (servants), and they are beaten, killed, and stoned. Finally, He sends His son. The husbandmen think: if we kill the heir, we can seize the inheritance. So they kill him. The parable lays bare the coming crucifixion and the rejection of Jesus by the authorities.',
        },
        {
          kind: 'commentary',
          id: 'matt21-rejected-stone',
          html:
            'Jesus quotes Psalm 118: "The stone which the builders rejected, the same is become the head of the corner." The builders—the chief priests and elders—reject Jesus, the true cornerstone. Yet He becomes the foundation of God&apos;s house, the center upon which all rests. What humans reject, God exalts.',
        },
        {
          kind: 'greek',
          id: 'matt21-akrogoniaios',
          title: 'Akrogoniaios — Cornerstone',
          script: 'ἀκρογωνιαῖος',
          translit: '<strong>Akrogoniaios</strong> · cornerstone; the chief stone at the corner',
          description:
            'The akrogoniaios is the stone placed at the corner of a building, where two walls meet. It bears great weight and determines the alignment of the whole structure. Christ is the akrogoniaios of God&apos;s house.',
        },
        {
          kind: 'commentary',
          id: 'matt21-kingdom',
          html:
            'Jesus announces that the kingdom of God will be taken from those who reject Him and given to "a nation bringing forth the fruits thereof." The kingdom is not reserved for the religious elite who fail to recognize and receive the Messiah. It is given to those who bear the fruit of faith, obedience, and genuine worship.',
        },
        {
          kind: 'christ',
          id: 'matt21-christ-cornerstone',
          title: 'Christ Connection — Christ the Cornerstone',
          html:
            'Jesus is rejected by the builders—the authorities of His day—yet He becomes the foundation of the church, the center upon which all is built. All who believe in Him are built together into a holy temple in the Lord.',
        },
        {
          kind: 'carry',
          html:
            'What have you rejected or refused that God is asking you to receive? Jesus teaches that what the world rejects, God often exalts. How might your rejections need to be reconsidered?',
        },
        {
          kind: 'reflection',
          id: 'matt21-reject',
          prompt: 'In what ways have you been a builder who rejected the stone Christ offers? What would it mean to receive Him as your cornerstone?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The stone which the builders rejected, the same is become the head of the corner... this is the Lord&apos;s doing.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 21 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-zechariah-9-9',
      kind: 'study',
      source: 'Sefaria',
      label: 'Zechariah 9:9 — The King Comes Humbly',
      url: 'https://www.sefaria.org/Zechariah.9.9',
      description: 'Old Testament prophecy of the Messiah&apos;s peaceful entry that Jesus fulfills on a donkey.',
    },
    {
      id: 'intertextual-vineyard-tenants',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Parable of the Vineyard and Tenants — Gospel Parallels',
      url: 'https://intertextual.bible/text/matthew-21.33',
      description: 'Comparison of the allegorical vineyard parable across Matthew, Mark, and Luke.',
    },
    {
      id: 'sefaria-psalm-118-22',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 118:22 — The Rejected Stone',
      url: 'https://www.sefaria.org/Psalms.118.22',
      description: 'Messianic psalm Jesus quotes to explain His rejection and exaltation as cornerstone.',
    },
  ],

  hasHebrew: false,
};
