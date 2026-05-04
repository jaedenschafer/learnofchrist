import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 56 — The House of Prayer for All Peoples
 *
 * "My house shall be called an house of prayer for all people." This promise,
 * spoken by God through Isaiah, is quoted by Jesus Himself in the Gospels when
 * He cleanses the temple. The house of God is meant to gather all peoples,
 * foreigners and eunuchs, all who seek His face. But corruption has made it a
 * den of thieves. The chapter both promises restoration and warns against
 * spiritual blindness.
 */
export const ISAIAH_56: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 56,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  topicTags: ['hope', 'deliverance', 'messianic-prophecy', 'new-creation'],
  opener: {
    topical: true,
    caption: 'Isaiah 56',
  },
  intros: [
    'Isaiah 56 marks a shift. Chapters 49–55 have focused on the Servant and His redemptive work. Now the attention turns to the community that will be gathered through that redemption. The temple, God\'s house, is to be a place of prayer for all peoples—not just the elect, not just the ritually pure, but all who hunger to know God. Yet this chapter also warns: the watchmen, the shepherds, the leaders are often blind and dumb. They do not see their duty. They feed themselves instead of feeding the flock. Restoration of the temple must include restoration of its leaders.',
  ],

  sections: [
    {
      ref: 'Isaiah 56:1–8',
      title: 'The Open House of Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 56,
          lines: [
            plain(1, 'Thus saith the Lord, Keep ye judgment, and do justice: for my salvation is near to come, and my righteousness to be revealed.'),
            plain(2, 'Blessed is the man that doeth this, and the son of man that layeth hold on it; that keepeth the sabbath from polluting it, and keepeth his hand from doing any evil.'),
            plain(3, 'Neither let the son of the stranger, that hath joined himself to the Lord, speak, saying, The Lord hath utterly separated me from his people: neither let the eunuch say, Behold, I am a dry tree.'),
            plain(4, 'For thus saith the Lord unto the eunuchs that keep my sabbaths, and choose the things that please me, and take hold of my covenant;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-gate-open',
          html:
            '<p>All nations will gather on God&apos;s holy mountain. His house is a house of prayer for all peoples.[res:sefaria-isaiah-56]</p>',        },
        {
          kind: 'hebrew',
          id: 'isaiah56-shabbat',
          title: 'Shabbat — "Sabbath"',
          script: 'שַׁבָּת',
          translit: '<strong>Shabbat</strong> · Sabbath; day of rest',
          description: 'The Sabbath is a sign of God\'s covenant with all who keep it.',
        },
        {
          kind: 'scripture',
          chapter: 56,
          lines: [
            plain(5, 'Even unto them will I give in mine house and within my walls a place and a name better than of sons and of daughters: I will give them an everlasting name, that shall not be cut off.'),
            plain(6, 'Also the sons of the stranger, which join themselves to the Lord, to serve him, and to love the name of the Lord, to be his servants, every one that keepeth the sabbath from polluting it, and taketh hold of my covenant;'),
            plain(7, 'Even them will I bring to my holy mountain, and make them joyful in my house of prayer: their burnt offerings and their sacrifices shall be accepted upon mine altar; for mine house shall be called an house of prayer for all people.'),
            plain(8, 'The Lord God which gathereth the outcasts of Israel saith, Yet will I gather others to him, beside those that are gathered unto him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa56-judgment',
          html:
            'The call to keep judgment and do justice frames the chapter. God\'s salvation is near, His righteousness about to be revealed. Those who do justice, who keep the Sabbath, who refrain from evil—these are blessed[res:sefaria-isaiah-56-v1][res:bibleodyssey-isaiah-overview-56].',
        },
        {
          kind: 'commentary',
          id: 'isa56-stranger',
          html:
            'Isaiah addresses those who feel excluded. The foreigner who joins himself to the Lord may fear: "Has the Lord utterly separated me?" The eunuch, unable to bear children, may think: "I am a dry tree, with no future." But God says no. To those who keep His covenant, who take hold of His Sabbath, He will give a place in His house and an everlasting name. This is radical inclusion.',        },
        {
          kind: 'hebrew',
          id: 'isa56-ger',
          title: 'Ger — "Stranger" (Foreigner)',
          script: 'גֵר',
          translit: '<strong>Ger</strong> · stranger; sojourner; foreigner who joins the covenant',
          description:
            'The Hebrew ger refers not to a temporary visitor, but to a foreigner who has committed to live among the covenant people. Such a person is explicitly included in God\'s promises.',
        },
        {
          kind: 'christ',
          id: 'isa56-christ-temple',
          title: 'Christ Connection — The Temple Cleanser',
          html:
            'In all four Gospels, Jesus enters the temple and clears out those who buy and sell. He overturns the tables of the money changers and declares: "My house shall be called the house of prayer; but ye have made it a den of thieves" (Matt. 21:13, quoting Isaiah 56:7). Christ\'s action reveals that the temple—and later, His Church—is meant to be a gathering place for all peoples, not a market for the corrupt. The temple must be a place where foreigners, outcasts, those considered ritually unclean can come and be welcomed into God\'s presence.',
        },
        {
          kind: 'carry',
          html:
            'Isaiah\'s vision speaks to all who feel they do not belong in God\'s house. The divorced, the LGBTQ+, the poor, the immigrant, those with disabilities—all who feel labeled as "unclean" are welcome. The house of God is for prayer, for all peoples. This is the gospel\'s radical inclusion.',
        },
        {
          kind: 'reflection',
          id: 'isa56-welcome',
          prompt: 'Who do you feel the Church should welcome more fully? How might Isaiah 56 challenge your understanding of who belongs in God\'s house?',
        },
      ],
    },

    {
      ref: 'Isaiah 56:9–12',
      title: 'The Blind Watchmen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 56,
          lines: [
            plain(9, 'All ye beasts of the field, come to devour, yea, all ye beasts in the forest.'),
            plain(10, 'His watchmen are blind: they are all ignorant, they are all dumb dogs, that cannot bark; sleeping, lying down, loving to slumber.'),
            plain(11, 'Yea, they are greedy dogs which can never have enough, and they are shepherds that cannot understand: they all look to their own way, every one for his gain, from his quarter.'),
            plain(12, 'Come ye, say they, I will fetch wine, and we will fill ourselves with strong drink; and to morrow shall be as this day, and much more abundant.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa56-beasts',
          html:
            'The vision shifts. The open house of prayer is threatened by beasts, by predators. Why? Because the watchmen are blind. They are dumb dogs, unable to bark, unable to warn. They sleep while danger approaches. They are greedy, focused on their own gain. They shepherd not the flock, but their own interests.',        },
        {
          kind: 'commentary',
          id: 'isa56-shepherds',
          html:
            'This is a scathing indictment of leadership that has lost its way. The watchmen are meant to protect God\'s people. The shepherds are meant to feed the flock. Instead, they feed themselves. They pursue their own gain. They look to their own way. They drink and carouse, seeking pleasure instead of serving.',
        },
        {
          kind: 'carry',
          html:
            'Isaiah\'s warning applies not only to ancient Israel, but to every age and every community claiming to follow God. When leaders become blind to their duty, when they serve their own interests instead of God\'s people, corruption enters. The remedy is repentance: a return to the Servant\'s model of self-sacrificial leadership.',
        },
        {
          kind: 'reflection',
          id: 'isa56-watchmen',
          prompt: 'What does it look like for spiritual leaders to be blind watchmen? How can you hold leadership accountable to protect and serve God\'s people?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'My house shall be called an house of prayer for all people.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 56 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-isaiah-56',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 56',
      url: 'https://www.sefaria.org/Isaiah.56',
      description: 'Sefaria open-access source text and translations for Isaiah 56.',
    },
    {
      id: 'sefaria-isaiah-56-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 56 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Isaiah.56',
      description: 'The Hebrew text of Isaiah 56 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-isaiah-overview-56',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Isaiah — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/isaiah/',
      description: 'Open-access SBL essay on the historical and literary setting of Isaiah.',
    },

  ],

  hasHebrew: true,
};
