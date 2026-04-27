import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Peter 1 — Living Hope & Holy Lives
 *
 * Peter opens with a doxology of gratitude for salvation. Those who have been born
 * again not of corruptible seed but of incorruptible—through the living and enduring
 * word of God—now possess a living hope. They are being kept by God&apos;s power toward
 * salvation. As God is holy, so the redeemed are to be holy, not through their own
 * effort alone but through the transformative reality of being loved by the Father.
 */
export const FIRST_PETER_1: RichChapterContent = {
  bookSlug: '1-peter',
  bookName: '1 Peter',
  chapter: 1,

  intros: [
    'Peter writes to believers scattered throughout Asia Minor, many facing hostility and pressure to conform to pagan society. He does not begin with exhortation but with gratitude. God has given them a living hope through the resurrection of Jesus Christ. They are held secure by God&apos;s power. This is not merely future comfort but present reality—a hope that sustains even in trial.',
    'He then turns to the call to holiness. The word "holy" does not mean morally perfect or otherworldly. It means set apart—separated unto God, consecrated to His purposes. As the Father Himself is holy, so those who bear His name are to be holy. This holiness flows not from human willpower but from the reality of being loved, redeemed, and adopted into God&apos;s family.',
  ],

  sections: [
    /* ─── 1 Peter 1:1–12 — Living Hope ───────────────────────────────── */
    {
      ref: '1 Peter 1:1–12',
      title: 'A Living Hope',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Peter, an apostle of Jesus Christ, to the strangers scattered throughout Pontus, Galatia, Cappadocia, Asia, and Bithynia,'),
            plain(3, 'Blessed be the God and Father of our Lord Jesus Christ, which according to his mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead,'),
            plain(4, 'To an inheritance incorruptible, and undefiled, and that fadeth not away, reserved in heaven for you,'),
            plain(5, 'Who are kept by the power of God through faith unto salvation ready to be revealed in the last time.'),
            plain(8, 'Whom having not seen, ye love; in whom, though now ye see him not, yet believing, ye rejoice with joy unspeakable and full of glory:'),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet1-hope',
          html:
            'Peter opens with a doxology—a hymn of praise to God. He has begotten us again. This is not a gentle metaphor but a radical statement: we have been born anew, born again, into a living hope. The hope is not in our circumstances—which are often hostile—but in the resurrection of Christ. That resurrection has already occurred. The future is therefore already won.',
        },
        {
          kind: 'greek',
          id: '1pet1-zoe',
          title: 'Zoe — Life',
          script: 'ζωή',
          translit: '<strong>Zoe</strong> · life; living; the principle of life itself; the life of God',
          description:
            'Peter speaks of a "lively hope"—hope that is alive, that vibrates with the energy of God&apos;s life. It is not mere optimism but a hope rooted in the living reality of Christ&apos;s resurrection. It produces joy that is real and present even in the midst of trial.',
        },
        {
          kind: 'commentary',
          id: '1pet1-inheritance',
          html:
            'The inheritance Peter describes is incorruptible—it cannot decay or be lost. It is undefiled—it is not corrupted by sin or evil. It fades not away—it is permanent. And it is reserved in heaven, kept secure by God Himself. This is not a hope dependent on our strength or circumstances. We are kept by the power of God.',
        },
        {
          kind: 'christ',
          id: '1pet1-christ-resurrection',
          title: 'Christ Connection — The Living One',
          html:
            'The entire epistle is built on the resurrection of Christ. He died, and yet He lives. He is the living One who has opened the way for us to live as well. Our hope is not in a dead teacher or a past event, but in the living Christ who is alive forevermore.',
        },
        {
          kind: 'carry',
          html:
            'Peter notes that the believers have not seen Jesus. Yet they love him and believe in him. Their joy is "unspeakable and full of glory." This describes the experience of every Christian who has not walked with Jesus physically but knows Him in faith. Love precedes sight. Faith precedes understanding. Yet the joy is real—fuller, perhaps, than those who saw him and did not believe.',
        },
        {
          kind: 'reflection',
          id: '1pet1-love-unseen',
          prompt: 'You have not seen Jesus physically. Yet you are called to love him. How does that love express itself in your life?',
        },
      ],
    },

    /* ─── 1 Peter 1:14–25 — Be Ye Holy ───────────────────────────────── */
    {
      ref: '1 Peter 1:14–25',
      title: 'Holy Conduct',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(14, 'As obedient children, not fashioning yourselves according to the former lusts in your ignorance;'),
            plain(15, 'But as he which hath called you is holy, so be ye holy in all manner of conversation;'),
            plain(16, 'Because it is written, Be ye holy; for I am holy.'),
            plain(18, 'Forasmuch as ye know that ye were not redeemed with corruptible things, as silver and gold, from your vain conversation received by tradition from your fathers;'),
            plain(19, 'But with the precious blood of Christ, as of a lamb without blemish and without spot:'),
            plain(23, 'Being born again, not of corruptible seed, but of incorruptible, by the word of God, which liveth and abideth for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet1-holy',
          html:
            'Peter calls the believers to holiness. The command is rooted in God&apos;s own nature: "I am holy, therefore you be holy." This is not a distant moral ideal but a call flowing from the character of God Himself. Holiness means being set apart—consecrated to God, separated from the corruption of the world, devoted to His purposes.',
        },
        {
          kind: 'greek',
          id: '1pet1-hagios',
          title: 'Hagios — Holy',
          script: 'ἅγιος',
          translit: '<strong>Hagios</strong> · holy; sacred; set apart; consecrated',
          description:
            'Holiness is not primarily about moral perfection but about separation—being set apart for God&apos;s purposes. A holy object is one consecrated to God. A holy person is one devoted to God. The call to holiness is a call to belong wholly to God.',
        },
        {
          kind: 'commentary',
          id: '1pet1-blood',
          html:
            'Peter emphasizes the cost of redemption. We were not purchased with silver or gold—with corruptible things. We were purchased with the precious blood of Christ, a Lamb without blemish and without spot. This is the price of our freedom. We owe everything to the One who gave his life for us. How can we not consecrate ourselves wholly to Him?',
        },
        {
          kind: 'christ',
          id: '1pet1-christ-lamb',
          title: 'Christ Connection — The Lamb of God',
          html:
            'Jesus is the Lamb without blemish—the perfect sacrifice that opens the way for all who believe. His blood is poured out not for a nation but for humanity. His sacrifice is once for all. Through His death and resurrection, we are made holy, set apart, consecrated to God.',
        },
        {
          kind: 'carry',
          html:
            'Born again not of corruptible seed but of incorruptible—by the word of God which liveth and abideth forever. Our true nature is not determined by our earthly parents or our earthly origins. It is determined by the word of God that has taken root in us. That word is alive and will bear fruit unto eternal life.',
        },
        {
          kind: 'reflection',
          id: '1pet1-holiness',
          prompt: 'What does it mean in your daily life to "be holy"? Where is God calling you to be set apart for His purposes?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Blessed be the God and Father of our Lord Jesus Christ, which according to his mercy hath begotten us again unto a lively hope. Be ye holy; for I am holy. Being born again, not of corruptible seed, but of incorruptible.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Peter 1 · Study Guide',
  },

  hasHebrew: false,
};
