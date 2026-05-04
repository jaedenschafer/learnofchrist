import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Zechariah 5 — The Flying Scroll and the Ephah
 */
export const ZECHARIAH_5: RichChapterContent = {
  bookSlug: 'zechariah',
  bookName: 'Zechariah',
  chapter: 5,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 4 },
  topicTags: ['hope', 'messianic-prophecy', 'second-coming', 'kingship'],
  opener: {
    topical: true,
    caption: 'Zechariah 5',
  },
  intros: [
    'In the fifth and sixth visions, Zechariah sees wickedness being removed from the land. A flying scroll carries curses against thieves and liars, and a woman representing wickedness is carried away in a basket to a distant land. These visions assure Israel that God will cleanse the land of sin and that His restoration is not merely external but involves the removal of moral corruption.',
  ],

  sections: [
    {
      ref: 'Zechariah 5:1–4',
      title: 'The Flying Scroll',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Then I turned, and lifted up mine eyes, and looked, and behold a flying roll.'),
            plain(2, 'And he said unto me, What seest thou? And I answered, I see a flying roll; the length thereof is twenty cubits, and the breadth thereof ten cubits.'),
            plain(3, 'Then said he unto me, This is the curse that goeth forth over the face of the whole earth: for every one that stealeth shall be cut off as on this side according to it; and every one that sweareth shall be cut off as on that side according to it.'),
            plain(4, 'I will bring it forth, saith the Lord of hosts, and it shall enter into the house of the thief, and into the house of him that sweareth falsely by my name: and it shall remain in the midst of his house, and shall consume it with the timber thereof and the stones thereof.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zech5-scroll',
          html: 'A scroll flies through the air, carrying curses against those who steal and swear falsely. The scroll is enormous—twenty by ten cubits—large enough to cover each offender&apos;s house. The vision promises that wickedness will not go unaddressed. God will bring judgment against those who violate the covenant through theft and false swearing. The curse is not arbitrary but rooted in the moral order God has established[res:sefaria-zechariah-5][res:bibleodyssey-zechariah-cleansing].',
        },
        {
          kind: 'hebrew',
          id: 'zech5-megillah',
          title: 'Megillah — "Scroll"',
          script: 'מגילה',
          translit: '<strong>Megillah</strong> · scroll; something rolled up that unfolds to reveal',
          description: 'The flying scroll unfolds the justice of God. The scroll is the revelation of God&apos;s judgment, made manifest to all so that wrongdoing cannot be hidden.',
        },
        {
          kind: 'christ',
          id: 'zech5-christ-curse',
          title: 'Christ Connection — Bearing the Curse',
          html: 'The flying scroll carrying curses points to Christ, who bore the curse of the law. "Christ hath redeemed us from the curse of the law," Paul writes. Christ took upon Himself the scroll of curses so that those who trust in Him could be freed from condemnation[res:intertextual-zechariah-5-galatians-3].',
        },
        {
          kind: 'carry',
          html: 'The vision does not hide the reality of judgment. God sees theft and false swearing. But the ultimate promise is not endless judgment but redemption for those who turn from wickedness. The scroll is not the end of the story—it is the prelude to cleansing and restoration.',
        },
        {
          kind: 'reflection',
          id: 'zech5-reflect-curse',
          prompt: 'What does it mean that wickedness cannot be hidden from God? How does that reality shape your own choices in ways no one else would see?',
        },
      ],
    },

    {
      ref: 'Zechariah 5:5–11',
      title: 'The Woman in the Basket',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(5, 'Then the angel that talked with me went forth, and said unto me, Lift up now thine eyes, and see what is this that goeth forth.'),
            plain(6, 'And I said, What is it? And he said, This is an ephah that goeth forth. He said moreover, This is their resemblance through all the earth.'),
            plain(7, 'And, behold, there was lifted up a talent of lead: and this is a woman that sitteth in the midst of the ephah.'),
            plain(8, 'And he said, This is wickedness: and he cast it into the midst of the ephah; and he cast the weight of lead upon the mouth thereof.'),
            plain(11, 'And he said unto me, To build it an house in the land of Shinar: and it shall be established, and set there upon her own base.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zech5-woman',
          html: 'Wickedness is personified as a woman sitting in a basket (ephah). The angel thrusts her back into the basket, seals it with a lead weight, and two women with wings carry it away to the land of Shinar—Babylon, the symbol of exile and separation from God. The vision promises that wickedness will be removed from the land and exiled far away. The restoration of Jerusalem involves not just rebuilding but the cleansing of moral corruption.',
        },
        {
          kind: 'hebrew',
          id: 'zech5-ephah',
          title: 'Ephah — "Basket" (Measure)',
          script: 'אפה',
          translit: '<strong>Ephah</strong> · a dry measure; a basket used for commerce',
          description: 'An ephah is a measure of wheat or barley. That wickedness is carried in a commercial measure suggests that sin corrupts even the ordinary transactions of life. But it will be removed and exiled far away.',
        },
        {
          kind: 'christ',
          id: 'zech5-christ-removal',
          title: 'Christ Connection — God Removes Wickedness',
          html: 'Christ came to remove the wickedness of the world. "Behold the Lamb of God, which taketh away the sin of the world." His death and resurrection accomplish what this vision promises—the ultimate removal of sin from those who belong to Him.',
        },
        {
          kind: 'carry',
          html: 'God does not minimize or ignore wickedness. He sees it, names it, and removes it. The vision is a comfort: your sin will not remain in your midst forever. In Christ, it is exiled far away, and you are cleansed.',
        },
        {
          kind: 'reflection',
          id: 'zech5-reflect-wickedness',
          prompt: 'What wickedness do you recognize in yourself that you wish could be removed and exiled far away? How does Christ&apos;s removal of sin change your understanding of that struggle?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'This is the curse that goeth forth over the face of the whole earth...And he said, This is wickedness.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Zechariah 5 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-zechariah-5',
      kind: 'study',
      source: 'Sefaria',
      label: 'Zechariah 5 · Texts & Translations',
      url: 'https://www.sefaria.org/Zechariah.5',
      description: 'Primary sources on the visions of the flying scroll and the woman in the basket, symbolizing judgment and the removal of wickedness.',
    },
    {
      id: 'intertextual-zechariah-5-galatians-3',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Zechariah 5:3 → Galatians 3:13 — Christ Redeemed Us From the Curse',
      url: 'https://intertextual.bible/search?query=zechariah+galatians',
      description: 'The connection between Zechariah&apos;s curse of the scroll and Paul&apos;s declaration that Christ redeemed us from the curse of the law.',
    },
    {
      id: 'bibleodyssey-zechariah-cleansing',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Divine Judgment and the Cleansing of Sin',
      url: 'https://www.bibleodyssey.org/en/passages/main-passages/the-book-of-zechariah/',
      description: 'Study of Zechariah&apos;s visions of God&apos;s judgment on wickedness and the removal of corruption from the land.',
    },
  ],

  hasHebrew: true,
};
