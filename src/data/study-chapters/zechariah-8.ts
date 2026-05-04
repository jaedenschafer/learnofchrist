import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Zechariah 8 — The Restoration of Jerusalem
 */
export const ZECHARIAH_8: RichChapterContent = {
  bookSlug: 'zechariah',
  bookName: 'Zechariah',
  chapter: 8,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 4 },
  topicTags: ['hope', 'messianic-prophecy', 'second-coming', 'kingship'],
  opener: {
    topical: true,
    caption: 'Zechariah 8',
  },
  intros: [
    'After calling Israel to turn from empty ritual and hardened hearts, Zechariah turns to promise. God has not abandoned Jerusalem. He will restore it, filling its streets with old men and women, boys and girls playing safely. Truth will flourish, commerce will prosper, and God&apos;s people will be a blessing to the nations. The chapter is one of hope—God&apos;s restoration is not distant but imminent.',
  ],

  sections: [
    {
      ref: 'Zechariah 8:1–8',
      title: 'The City Restored and Peaceful',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(3, 'Thus saith the Lord; I am returned unto Zion, and will dwell in the midst of Jerusalem: and Jerusalem shall be called a city of truth; and the mountain of the Lord of hosts the holy mountain.'),
            plain(4, 'Thus saith the Lord of hosts; There shall yet old men and old women dwell in the streets of Jerusalem, and every man with his staff in his hand for very age.'),
            plain(5, 'And the streets of the city shall be full of boys and girls playing in the streets thereof.'),
            plain(7, 'Thus saith the Lord of hosts; Behold, I will save my people from the east country, and from the west country;'),
            plain(8, 'And I will bring them, and they shall dwell in the midst of Jerusalem: and they shall be my people, and I will be their God, in truth and in righteousness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zech8-restore',
          html: 'God promises to return to Zion and dwell in Jerusalem. The city will be called "a city of truth"—integrity and honesty will flourish. The streets will be filled with the old and the young, a picture of a community at peace and at home. Children will play safely in the streets—a sign not just of prosperity but of the absence of war and fear. God gathers His people from east and west, from all directions, and they will dwell together as God&apos;s people[res:sefaria-zechariah-8][res:bibleodyssey-zechariah-peace-restoration].',
        },
        {
          kind: 'hebrew',
          id: 'zech8-emet',
          title: 'Emet — "Truth"',
          script: 'אמת',
          translit: '<strong>Emet</strong> · truth; faithfulness; reliability',
          description: 'The city of truth is a place where God&apos;s character—faithfulness, reliability, integrity—is lived out in the relationships and commerce of the people. When God dwells in the midst, truth becomes the foundation of all things.',
        },
        {
          kind: 'christ',
          id: 'zech8-christ-dwell',
          title: 'Christ Connection — God Dwelling in Truth',
          html: 'Christ is the Truth incarnate. "I am the way, the truth, and the life." When Christ dwells in the midst of believers, truth flourishes. The Church becomes a city of truth, a people committed to living in integrity and covenant faithfulness[res:intertextual-zechariah-8-ephesians-4].',
        },
        {
          kind: 'carry',
          html: 'The vision of Jerusalem restored is not only about a literal city rebuilt. It is about a community in which old and young, strong and weak, all find safety and belong. It is a vision of shalom—a wholeness and rightness that flows from God&apos;s presence and truth.',
        },
        {
          kind: 'reflection',
          id: 'zech8-reflect-restore',
          prompt: 'What does it mean that God promises His people will be safe, with young and old together? How might this vision challenge the divisions and fears that shape your world?',
        },
      ],
    },

    {
      ref: 'Zechariah 8:14–19',
      title: 'A Blessing to the Nations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(16, 'These are the things that ye shall do; Speak ye every man the truth to his neighbour; execute the judgment of truth and peace in your gates:'),
            plain(17, 'And let none of you imagine evil against his neighbour; and love no false oath: for all these are things that I hate, saith the Lord.'),
            plain(19, 'Thus saith the Lord of hosts; The fast of the fourth month, and the fast of the fifth, and the fast of the seventh, and the fast of the tenth, shall be to the house of Judah joy and gladness, and cheerful feasts; therefore love the truth and peace.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zech8-truth-peace',
          html: 'Zechariah circles back to the question of fasting. The fasts that commemorated destruction will be transformed into feasts of joy and gladness. But this transformation depends on living in truth and peace. If God&apos;s people will speak truth to one another, execute just judgment, love honesty and avoid false oaths, then their fasting will become celebration. The vows and commitments they make will be kept.',
        },
        {
          kind: 'commentary',
          id: 'zech8-love-truth',
          html: 'The final word is a command to love truth and peace. These are not abstract virtues but the living substance of a community restored to God. When a people chooses truth-telling and peacemaking, they build the kingdom of God on earth. The fasts become irrelevant because there is nothing to mourn—there is only joy.',
        },
        {
          kind: 'hebrew',
          id: 'zech8-shalom',
          title: 'Shalom — "Peace"',
          script: 'שלום',
          translit: '<strong>Shalom</strong> · peace; wholeness; completeness; well-being',
          description: 'Shalom is not merely the absence of war but the presence of wholeness, integrity, and right relationship. It flows from truth and comes when God&apos;s people choose to live in honesty and justice with one another.',
        },
        {
          kind: 'christ',
          id: 'zech8-christ-peace',
          title: 'Christ Connection — The Prince of Peace',
          html: 'Christ is called the Prince of Peace. His reign is characterized by the reconciliation of all things. Through Him, truth and peace kiss—God&apos;s justice and God&apos;s mercy meet in the Cross and Resurrection.',
        },
        {
          kind: 'carry',
          html: 'The promise is that when you and your community choose truth and peace, mourning transforms into joy. The discipline of fasting becomes the celebration of feasting. God&apos;s restoration is not distant—it begins wherever His people choose to live in integrity and reconciliation.',
        },
        {
          kind: 'reflection',
          id: 'zech8-reflect-peace',
          prompt: 'In what ways could you choose truth-telling and peacemaking in your relationships? What would change in your life or community if these became your habit?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Jerusalem shall be called a city of truth...Speak ye every man the truth to his neighbour; execute the judgment of truth and peace.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Zechariah 8 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-zechariah-8',
      kind: 'study',
      source: 'Sefaria',
      label: 'Zechariah 8 · Texts & Translations',
      url: 'https://www.sefaria.org/Zechariah.8',
      description: 'Primary sources on the promise of Jerusalem&apos;s restoration, the city of truth, and the future joy of God&apos;s people.',
    },
    {
      id: 'intertextual-zechariah-8-ephesians-4',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Zechariah 8:16 → Ephesians 4:15 — Speaking Truth in Love',
      url: 'https://intertextual.bible/search?query=zechariah+ephesians',
      description: 'The connection between Zechariah&apos;s call to speak truth and Paul&apos;s teaching on speaking truth in love as the foundation of community unity.',
    },
    {
      id: 'bibleodyssey-zechariah-peace-restoration',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Shalom and the Restoration of God&apos;s People',
      url: 'https://www.bibleodyssey.org/en/passages/main-passages/the-book-of-zechariah/',
      description: 'Study of peace and truth as the foundation of community wholeness and the promise of God&apos;s restoration.',
    },
  ],

  hasHebrew: true,
};
