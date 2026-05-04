import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Zechariah 12 — The Pierced Messiah and Israel&apos;s Repentance
 */
export const ZECHARIAH_12: RichChapterContent = {
  bookSlug: 'zechariah',
  bookName: 'Zechariah',
  chapter: 12,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  topicTags: ['hope', 'messianic-prophecy', 'second-coming', 'kingship'],
  opener: {
    topical: true,
    caption: 'Zechariah 12',
  },
  intros: [
    'In Zechariah 12, God speaks of the future of Jerusalem. A day is coming when the nations will surround the city, but God will defend it. And then comes one of the clearest messianic verses in the Old Testament: "They shall look upon me whom they have pierced." John 19:37 quotes this verse as fulfilled in Christ&apos;s crucifixion. The piercing of the Messiah leads to Israel&apos;s repentance and blessing.',
  ],

  sections: [
    {
      ref: 'Zechariah 12:1–9',
      title: 'God Defends Jerusalem',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'The burden of the word of the Lord for Israel, saith the Lord, which stretcheth forth the heavens, and layeth the foundation of the earth, and formeth the spirit of man within him:'),
            plain(2, 'Behold, I will make Jerusalem a cup of trembling unto all the people round about, when they shall be in the siege both against Judah and against Jerusalem.'),
            plain(3, 'And in that day will I make Jerusalem a burdensome stone for all people: all that burden themselves with it shall be cut in pieces, though all the people of the earth be gathered together against it.'),
            plain(9, 'And it shall come to pass in that day, that I will seek to destroy all the nations that come against Jerusalem.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zech12-burden',
          html: 'The burden of God&apos;s word is a word about Jerusalem&apos;s future. God, who created the heavens and earth and formed the human spirit, will make Jerusalem a cup of trembling to the nations surrounding it. Those who seek to burden themselves with Jerusalem by attacking it will be cut to pieces. God Himself will defend His city. The vision assures Israel that God has not abandoned them[res:intertextual-zechariah-12-john-19][res:sefaria-zechariah-12].',
        },
        {
          kind: 'hebrew',
          id: 'zech12-cuphag',
          title: 'Saf-Raah — "Cup of Trembling"',
          script: 'כוס תרעלה',
          translit: '<strong>Saf-raah</strong> · cup of trembling; intoxication; stumbling',
          description: 'The nations that attack Jerusalem will drink from a cup that makes them reel and stumble. God&apos;s judgment will confound their plans. The image is of judgment and defeat.',
        },
        {
          kind: 'christ',
          id: 'zech12-christ-defend',
          title: 'Christ Connection — The Defender of His People',
          html: 'Christ is the defender of God&apos;s people. He intercedes for them and will ultimately vindicate them. The defense of Jerusalem points to Christ&apos;s work of salvation—He defends His people from sin and death itself[res:bibleodyssey-zechariah-messiah-repentance].',
        },
        {
          kind: 'carry',
          html: 'When you feel surrounded by opposition or threat, remember that God sees you and will defend you. The nations that rise against God&apos;s people will falter. Your security does not rest in walls or weapons but in God&apos;s faithfulness.',
        },
        {
          kind: 'reflection',
          id: 'zech12-reflect-defend',
          prompt: 'What threats or opposition do you face? How does it comfort you to know that God says, "I will seek to destroy all the nations that come against Jerusalem"?',
        },
      ],
    },

    {
      ref: 'Zechariah 12:10–14',
      title: 'Mourning for the Pierced One',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(10, 'And I will pour upon the house of David, and upon the inhabitants of Jerusalem, the spirit of grace and of supplications: and they shall look upon me whom they have pierced, and they shall mourn for him, as one mourneth for his only son, and shall be in bitterness for him, as one that is in bitterness for his firstborn.'),
            plain(11, 'In that day shall there be a great mourning in Jerusalem, as the mourning of Hadadrimmon in the valley of Megiddon.'),
            plain(12, 'And the land shall mourn, every family apart; the family of the house of David apart, and their wives apart; the family of the house of Nathan apart, and their wives apart;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zech12-pierced',
          html: 'God will pour out a spirit of grace and prayer upon Jerusalem. And then they will look upon the one whom they have pierced. This is the Messiah—the one rejected, wounded, and put to death by His own people. The mourning that follows is not merely sorrow but repentance. They mourn as one mourns for an only son, recognizing what they have lost and what they have done. John 19:37 cites this verse as fulfilled in Christ&apos;s crucifixion.',
        },
        {
          kind: 'commentary',
          id: 'zech12-mourning',
          html: 'The mourning will be universal and bitter—every family mourning separately, each aware of their own part in the tragedy. This is not performative grief but deep repentance. The piercing of the Messiah awakens Israel to their sin and their need for forgiveness. The mourning leads to cleansing and restoration.',
        },
        {
          kind: 'hebrew',
          id: 'zech12-daqar',
          title: 'Daqar — "Pierced" (Thrust Through)',
          script: 'דקר',
          translit: '<strong>Daqar</strong> · to pierce; to thrust through; to wound mortally',
          description: 'The piercing is a mortal wound. The one pierced is the Messiah, whose suffering becomes the means of redemption for those who look upon Him with faith and repentance.',
        },
        {
          kind: 'christ',
          id: 'zech12-christ-pierced',
          title: 'Christ Connection — The Pierced Messiah',
          html: 'This is Christ on the Cross. "One of the soldiers with a spear pierced his side" (John 19:34). And John explicitly connects this moment to Zechariah&apos;s prophecy: "They shall look on him whom they pierced." The piercing of Christ is the means of redemption—through His wound we are healed.',
        },
        {
          kind: 'carry',
          html: 'When you look upon Christ pierced for you, repentance and grace meet. You mourn your sin—the sin that pierced Him—and you receive His forgiveness. This is the turning point: looking upon Him, recognizing what you have done, and being transformed by His grace.',
        },
        {
          kind: 'reflection',
          id: 'zech12-reflect-pierced',
          prompt: 'What does it mean to "look upon Him whom they have pierced"? How does meditating on Christ&apos;s crucifixion awaken repentance and grace in your heart?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'They shall look upon me whom they have pierced, and they shall mourn for him, as one mourneth for his only son.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Zechariah 12 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-zechariah-12',
      kind: 'study',
      source: 'Sefaria',
      label: 'Zechariah 12 · Texts & Translations',
      url: 'https://www.sefaria.org/Zechariah.12',
      description: 'Primary sources on God&apos;s defense of Jerusalem and the prophecy of mourning for the pierced Messiah.',
    },
    {
      id: 'intertextual-zechariah-12-john-19',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Zechariah 12:10 → John 19:34–37 — The Pierced Messiah',
      url: 'https://intertextual.bible/search?query=zechariah+john',
      description: 'The explicit fulfillment of Zechariah&apos;s prophecy of the pierced Messiah in Christ&apos;s crucifixion, when a Roman soldier pierced His side and those who saw it look upon Him whom they have pierced.',
    },
    {
      id: 'bibleodyssey-zechariah-messiah-repentance',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Pierced Messiah and the Spirit of Repentance',
      url: 'https://www.bibleodyssey.org/en/passages/main-passages/the-book-of-zechariah/',
      description: 'Study of Zechariah&apos;s vision of Israel&apos;s repentance through the piercing of the Messiah and the outpouring of grace upon Jerusalem.',
    },
  ],

  hasHebrew: true,
};
