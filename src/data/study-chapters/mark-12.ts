import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Mark 12 — The Stone That Becomes a Corner
 *
 * Jesus teaches the parable of the vineyard: a man plants it, rents it to
 * husbandmen, then sends servant after servant. They beat them, reject them, kill
 * them. Finally he sends his beloved son. The husbandmen say: "This is the heir;
 * come, let us kill him." Jesus asks: "What shall therefore the lord of the
 * vineyard do?" The answer: He will destroy the husbandmen and give the vineyard
 * to others. Then Jesus quotes Scripture: "The stone which the builders rejected,
 * the same is become the head of the corner." The rejected stone becomes the
 * cornerstone. The chapter shows Christ as the rejected heir, the stone cast aside,
 * the one who will be the foundation of a new people. The greatest commandment is
 * love—love God with all your heart, and love your neighbor as yourself.
 */
export const MARK_12: RichChapterContent = {
  bookSlug: 'mark',
  bookName: 'Mark',
  chapter: 12,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 6 },
  topicTags: ['ministry', 'witness', 'suffering', 'compassion'],
  opener: {
    topical: true,
    caption: 'Mark 12',
  },
  intros: [
    'Mark 12 opens with the parable of the vineyard. A man plants a vineyard, builds a hedge around it, digs a pit for the wine press, builds a tower, and rents it to husbandmen. Then he travels into another country. At harvest time he sends a servant to receive the fruit. The husbandmen beat him and send him away empty. He sends another servant. They beat him as well. A third they wound. Finally the lord sends his beloved son, thinking: "They will reverence my son." But the husbandmen see the son and say: "This is the heir; come, let us kill him, and the inheritance shall be ours." They kill him and cast him out of the vineyard. Jesus asks: "What shall therefore the lord of the vineyard do?" The answer: He will come and destroy the husbandmen and give the vineyard to others.',
    'Then Jesus quotes from Psalm 118: "The stone which the builders rejected, the same is become the head of the corner." The rejected heir becomes the foundation. The rejected stone becomes the cornerstone of a new building. The chapter moves through controversies—about taxes, about the resurrection—to the teaching on the greatest commandment: love God with all your heart, and love your neighbor as yourself. This is the fulfillment of all the law and the prophets. Christ is the stone the builders rejected. He is the cornerstone of the new Israel.',
  ],

  sections: [
    /* ─── Mark 12:1–17 — The Vineyard and Caesar ───────────────────────── */
    {
      ref: 'Mark 12:1–17',
      title: 'Rejected Heir, Cornerstone',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'And he began to speak unto them by parables. A certain man planted a vineyard, and set an hedge about it, and digged a place for the winefat, and built a tower, and let it out to husbandmen, and went into a far country.'),
            plain(6, 'Having yet therefore one son, his wellbeloved, he sent him also last unto them, saying, They will reverence my son.'),
            plain(7, 'But those husbandmen said among themselves, This is the heir; come, let us kill him, and the inheritance shall be ours.'),
            plain(8, 'And they took him, and killed him, and cast him out of the vineyard.'),
            plain(10, 'And have ye not read this scripture; The stone which the builders rejected, the same is become the head of the corner:'),
            plain(11, 'This was the Lord&apos;s doing, and it is marvellous in our eyes?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark12-vineyard-israel',
          html:
            'The vineyard represents Israel. The man who plants it is God. The husbandmen are the religious leaders. The servants sent are the prophets, whom Israel has rejected and persecuted. The beloved son is Jesus. The killing of the son in the parable points forward to the crucifixion. The religious leaders will indeed decide that Jesus, the heir, must be killed so that they can retain the inheritance.',
        },
        {
          kind: 'commentary',
          id: 'mark12-rejected-stone',
          html:
            'Jesus quotes Psalm 118: "The stone which the builders rejected, the same is become the head of the corner."[res:intertextual-cornerstone] The rejected stone becomes the cornerstone—the most important stone, the one upon which the whole structure rests. The religious leaders, the builders, reject Jesus. But God makes Him the foundation of the new temple, the new people, the new Israel. What is rejected by human authority is exalted by God.',
        },
        {
          kind: 'greek',
          id: 'mark12-lithos',
          title: 'Lithos — Stone',
          script: 'λίθος',
          translit: '<strong>Lithos</strong> · stone; rock; material for building',
          description:
            'The stone is common, seemingly worthless until it becomes the cornerstone. Jesus is rejected as unfit, yet becomes essential. His rejection reveals what is most important about Him.',
        },
        {
          kind: 'commentary',
          id: 'mark12-caesar-coin',
          html:
            'The Pharisees and Herodians come trying to trap Jesus with the question of taxes: "Is it lawful to give tribute unto Caesar?" Jesus asks for a coin and asks: "Whose image and superscription hath it?" Caesar&apos;s. Jesus responds: "Render to Caesar the things that are Caesar&apos;s; and to God the things that are God&apos;s." This teaches a distinction: some things belong to human authority, but ultimate loyalty belongs to God.',
        },
        {
          kind: 'christ',
          id: 'mark12-christ-cornerstone',
          title: 'Christ Connection — The Foundation Stone',
          html:
            'Jesus is the stone rejected by the builders but made the head of the corner. He is the foundation upon which the church—the new temple, the new people of God—is built. This rejection and exaltation is the pattern of redemption.',
        },
        {
          kind: 'carry',
          html:
            'The parable teaches that rejection by earthly authority is not final defeat. God&apos;s perspective differs from the world&apos;s. The world rejects; God exalts. The world destroys; God builds. Trust in God&apos;s ultimate judgment.',
        },
        {
          kind: 'reflection',
          id: 'mark12-rejection-faith',
          prompt: 'Where do you face rejection for your faith? How might that rejection, in God&apos;s perspective, become the foundation of something greater?',
        },
      ],
    },

    /* ─── Mark 12:18–34 — Resurrection and Love ──────────────────────── */
    {
      ref: 'Mark 12:18–34',
      title: 'The Greatest Commandment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(29, 'And Jesus answered him, The first of all the commandments is, Hear, O Israel; The Lord our God is one Lord:'),
            plain(30, 'And thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind, and with all thy strength: this is the first commandment.'),
            plain(31, 'And the second is like, namely this, Thou shalt love thy neighbour as thyself. There is none other commandment greater than these.'),
            plain(32, 'And the scribe said unto him, Well, Master, thou hast said the truth: for there is one God; and there is none other but he:'),
            plain(33, 'And to love him with all the heart, and with all the understanding, and with all the soul, and with all the strength, and to love his neighbour as himself, is more than all whole burnt offerings and sacrifices.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark12-sadducees-resurrection',
          html:
            'The Sadducees, who do not believe in the resurrection, come with a trick question. Under the law of Levirate marriage, a woman marries seven brothers in succession. Whose wife will she be in the resurrection? Jesus responds: they do not understand Scripture or the power of God. "When they shall rise from the dead, they neither marry, nor are given in marriage." The resurrection transforms all earthly relationships.',
        },
        {
          kind: 'commentary',
          id: 'mark12-greatest-commandment',
          html:
            'A scribe asks: "Which is the first commandment of all?" Jesus answers by quoting the Shema—"Hear, O Israel; The Lord our God is one Lord"[res:sefaria-shema]—and then teaching the two greatest commandments: love God with all your heart, soul, mind, and strength; and love your neighbor as yourself. He concludes: "There is none other commandment greater than these." All the law and the prophets hang on these two.',
        },
        {
          kind: 'greek',
          id: 'mark12-agapē',
          title: 'Agapē — Love',
          script: 'ἀγάπη',
          translit: '<strong>Agapē</strong> · love; unconditional self-giving love; God&apos;s love',
          description:
            'Agapē is not merely affection or emotion. It is a covenantal love, a commitment to the other&apos;s good, a self-giving that mirrors God&apos;s love. It is the foundation of all commandment.',
        },
        {
          kind: 'commentary',
          id: 'mark12-scribe-affirms',
          html:
            'The scribe affirms Jesus&apos; answer and goes further: "To love him with all the heart, and with all the understanding, and with all the soul, and with all the strength, and to love his neighbour as himself, is more than all whole burnt offerings and sacrifices."[res:bible-odyssey-love-covenant] The scribe sees that true religion is not ritual but relationship, not sacrifice but love. Jesus affirms him: "Thou art not far from the kingdom of God."',
        },
        {
          kind: 'christ',
          id: 'mark12-christ-love',
          title: 'Christ Connection — The Law Written in Love',
          html:
            'Jesus does not abolish the law. He fulfills it by condensing it into its essence: love. Love God completely. Love your neighbor as yourself. This is the law written on the heart. It is the principle by which all else is interpreted.',
        },
        {
          kind: 'carry',
          html:
            'The gospel is not a set of rules to obey but a relationship to enter. Love is the fulfillment of all law. When your life is ordered by love of God and love of neighbor, you have fulfilled everything.',
        },
        {
          kind: 'reflection',
          id: 'mark12-love-measure',
          prompt: 'How would your relationships change if you truly loved your neighbor as yourself? Where is that hardest to do?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The stone which the builders rejected, the same is become the head of the corner. Thou shalt love the Lord thy God with all thy heart...and thy neighbour as thyself.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Mark 12 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-cornerstone',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Cornerstone (Psalm 118 ↔ Mark 12)',
      url: 'https://intertextual.bible/text/psalms-118/mark-12.10',
      description: 'Intertextual links showing how Jesus fulfilled the psalm of the rejected stone becoming the foundation.',
    },
    {
      id: 'sefaria-shema',
      kind: 'study',
      source: 'Sefaria',
      label: 'The Shema (Deuteronomy 6:4-9)',
      url: 'https://www.sefaria.org/Deuteronomy.6.4-9?lang=bi',
      description: 'The central prayer of Judaism declaring the oneness of God, which Jesus affirmed as the first and greatest commandment.',
    },
    {
      id: 'bible-odyssey-love-covenant',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Love as Covenant Response',
      url: 'https://www.bibleodyssey.org/dictionary/love/',
      description: 'Open-access entry on love (agape) as the foundation of covenant relationship with God and others, surpassing ritual sacrifice.',
    },
  ],

  hasHebrew: false,
};
