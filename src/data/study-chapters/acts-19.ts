import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const ACTS_19: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 19,

  intros: [
    'Paul comes to Ephesus and baptizes believers with the Holy Ghost. Miracles follow: evil spirits leave, and handkerchiefs and aprons touched by Paul cure diseases. But opposition rises. Demetrius, a silversmith who makes shrines of the goddess Diana, stirs up a riot. "Great is Diana of the Ephesians!" The city is in uproar. Yet through all the turmoil, the word of God grows and prevails mightily.',
  ],

  sections: [
    {
      ref: 'Acts 19:1–10',
      title: 'Holy Spirit and Signs',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(5, 'When they heard this, they were baptized in the name of the Lord Jesus.'),
            plain(6, 'And when Paul had laid his hands upon them, the Holy Ghost came on them; and they spake with tongues, and prophesied.'),
            plain(11, 'And God wrought special miracles by the hands of Paul:'),
            plain(12, 'So that from his body were brought unto the sick handkerchiefs or aprons, and the diseases departed from them, and the evil spirits went out of them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts19-baptism',
          html: 'Paul baptizes believers in the name of the Lord Jesus. When he lays hands on them, the Holy Ghost comes. They speak with tongues and prophesy. The signs of the Spirit are evident.',
        },
        {
          kind: 'greek',
          id: 'acts19-sēmeion',
          title: 'Sēmeion — Signs; Miracles',
          script: 'σημεῖον',
          translit: '<strong>Sēmeion</strong> · sign; miracle; wonder',
          description: 'The signs that follow confirm the apostles&apos; message. They are not displays of power but evidence that God is at work.',
        },
        {
          kind: 'christ',
          id: 'acts19-christ-power',
          title: 'Christ Connection — Power Through Apostles',
          html: 'Jesus said His followers would do greater works than He did. Paul&apos;s miracles in Ephesus are the continuation of Jesus&apos; healing ministry through His church.',
        },
        {
          kind: 'carry',
          html: 'The gospel spreads through miracles and testimony. Healings and deliverances from evil spirits point to the power of Christ to free us from all bondage.',
        },
        {
          kind: 'reflection',
          id: 'acts19-healing-reflect',
          prompt: 'How have you experienced healing or deliverance through Christ?',
        },
      ],
    },

    {
      ref: 'Acts 19:24–41',
      title: 'The Diana Riot',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(28, 'And when they heard these sayings, they were full of wrath, and cried out, saying, Great is Diana of the Ephesians.'),
            plain(35, 'And when the town clerk had appeased the multitude, he said, Ye men of Ephesus, what man is there that knoweth not how that the city of the Ephesians is a worshipper of the great goddess Diana,'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts19-riot',
          html: 'Demetrius stirs up opposition because the gospel threatens his business. When people turn to Christ, they no longer buy idols. The shrine business declines. Economic self-interest fuels persecution.',
        },
        {
          kind: 'commentary',
          id: 'acts19-uproar',
          html: 'The city is in uproar. The crowd is confused. But the town clerk calms them: the city&apos;s honor depends on lawful behavior, not mob violence. Order is restored. Yet the word has spread.',
        },
        {
          kind: 'greek',
          id: 'acts19-pleonexia',
          title: 'Pleonexia — Covetousness',
          script: 'πλεονεξία',
          translit: '<strong>Pleonexia</strong> · greed; covetousness; the desire to have more',
          description: 'Greed for profit drives Demetrius to oppose the gospel. When faith challenges our economic interests, opposition often follows.',
        },
        {
          kind: 'christ',
          id: 'acts19-christ-economy',
          title: 'Christ Connection — Above All Commerce',
          html: 'Jesus warned against the love of money. The gospel is worth more than all the idols Demetrius sells. Faith in Christ liberates us from the tyranny of greed.',
        },
        {
          kind: 'carry',
          html: 'Despite the riot, Paul continues his work. The word of God grows and prevails. No opposition, no economic pressure, can stop the gospel.',
        },
        {
          kind: 'reflection',
          id: 'acts19-opposition-reflect',
          prompt: 'How can faith sustain us when cultural or economic forces oppose the gospel?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'So that from his body were brought unto the sick handkerchiefs or aprons, and the diseases departed from them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 19 · Study Guide',
  },

  hasHebrew: false,
};
