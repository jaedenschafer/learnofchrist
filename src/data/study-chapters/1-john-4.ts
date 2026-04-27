import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 John 4 — God Is Love
 *
 * Beloved, let us love one another: for love is of God; and every one that loveth is born
 * of God, and knoweth God. He that loveth not knoweth not God; for God is love. Herein is
 * love, not that we loved God, but that he loved us, and sent his Son to be the propitiation
 * for our sins. Test the spirits, for many false prophets are gone out into the world.
 */
export const FIRST_JOHN_4: RichChapterContent = {
  bookSlug: '1-john',
  bookName: '1 John',
  chapter: 4,

  intros: [
    'John now approaches love from a different angle. Love is not merely a commandment we obey. It flows from the nature of God Himself. God is love. This is not metaphor or poetic language. It is the deepest truth about God. The universe is not fundamentally ruled by force, chance, or law, but by love. And those who know God are drawn into that love, becoming lovers themselves.',
    'He then addresses how to discern true and false prophets. Many deceivers are in the world. But there is a test: do they confess Jesus Christ as Lord? Do they affirm the incarnation? Those who deny that God became flesh deny the essence of the gospel. Test the spirits, beloved. Know who you are listening to.',
  ],

  sections: [
    /* ─── 1 John 4:1–12 — God Is Love ─────────────────────────────── */
    {
      ref: '1 John 4:1–12',
      title: 'Perfect Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'Beloved, believe not every spirit, but try the spirits whether they are of God: because many false prophets are gone out into the world.'),
            plain(2, 'Hereby know ye the Spirit of God: Every spirit that confesseth that Jesus Christ is come in the flesh is of God:'),
            plain(7, 'Beloved, let us love one another: for love is of God; and every one that loveth is born of God, and knoweth God.'),
            plain(8, 'He that loveth not knoweth not God; for God is love.'),
            plain(9, 'In this was manifested the love of God toward us, because that God sent his only begotten Son into the world, that we might live through him.'),
            plain(11, 'Beloved, if God so loved us, we ought also to love one another.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1john4-test-spirits',
          html:
            'John calls believers to test the spirits. Not every voice claiming spiritual authority is from God. Many false prophets are at work. The test is whether they affirm that Jesus Christ has come in the flesh. This seems simple, but it gets at the heart of the gospel. Some deny the incarnation, claiming Jesus was only spiritual. Others deny His humanity or His full divinity. True faith confesses Jesus as both fully human and fully God.',
        },
        {
          kind: 'greek',
          id: '1john4-dokimazo',
          title: 'Dokimazo — To Test',
          script: 'δοκιμάζω',
          translit: '<strong>Dokimazo</strong> · to test; to examine; to approve after testing; to discern',
          description:
            'Testing is not suspicious or hostile. It is discernment. You test gold to determine if it is genuine. You test what spiritual teachers claim to determine if they speak the truth. This is responsible faith, not gullibility.',
        },
        {
          kind: 'commentary',
          id: '1john4-god-is-love',
          html:
            'John makes the stunning claim: God is love. Not "God loves" (which is true) but "God is love"—love is His fundamental nature. All other attributes flow from this. His justice is love protecting what is good. His mercy is love extending forgiveness. His wrath is love opposing what destroys. To know God is to be drawn into love.',
        },
        {
          kind: 'christ',
          id: '1john4-christ-sent',
          title: 'Christ Connection — Sent in Love',
          html:
            'God&apos;s love is demonstrated in sending His only begotten Son. The incarnation is the ultimate gift. God did not send judgment or a teacher or a book. He sent Himself—in human form. He walked among us. He suffered with us. He died for us. This is the measure of God&apos;s love.',
        },
        {
          kind: 'carry',
          html:
            'The logic is compelling: if God loved us so much that He sent His Son to save us, then we ought to love one another. Love is not a nice sentiment or a religious duty. It is a response to God&apos;s own love. We love because He first loved us. We give because He gave everything.',
        },
        {
          kind: 'reflection',
          id: '1john4-love',
          prompt: 'How has God&apos;s love for you become real? How does that love move you to love others?',
        },
      ],
    },

    /* ─── 1 John 4:18–21 — Fear & Love ────────────────────────────── */
    {
      ref: '1 John 4:18–21',
      title: 'Love Casts Out Fear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(18, 'There is no fear in love; but perfect love casteth out fear: because fear hath torment. He that feareth is not made perfect in love.'),
            plain(19, 'We love him, because he first loved us.'),
            plain(20, 'If a man say, I love God, and hateth his brother, he is a liar: for he that loveth not his brother whom he hath seen, how can he love God whom he hath not seen?'),
            plain(21, 'And this commandment have we from him, That he who loveth God love his brother also.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1john4-fear',
          html:
            'John speaks of fear—the fear that torments. This may be fear of punishment, fear of judgment, fear of loss. But perfect love casts it out. When you truly know that God loves you, that your sin is forgiven, that your future is secure in Him, fear loses its grip. Love and fear are incompatible in a perfected heart.',
        },
        {
          kind: 'greek',
          id: '1john4-teleia',
          title: 'Teleia — Perfect',
          script: 'τέλεια',
          translit: '<strong>Teleia</strong> · perfect; complete; mature; fully developed',
          description:
            'Perfection in John is not sinlessness but maturity—a heart fully formed in love, no longer driven by fear but by trust and affection toward God.',
        },
        {
          kind: 'commentary',
          id: '1john4-love-him',
          html:
            'We love Him because He first loved us. Our love is a response, not the origin. We do not generate love for God through willpower or duty. We love Him because He loved us first—so completely, so sacrificially, so personally that we cannot help but love Him back.',
        },
        {
          kind: 'christ',
          id: '1john4-christ-first-loved',
          title: 'Christ Connection — He Loved Us First',
          html:
            'Christ is the embodiment of God&apos;s love. He loved us before we loved Him, before we even knew Him. He died for sinners. He intercedes for us. He welcomes us home. His love is not earned or deserved. It is a gift poured out freely.',
        },
        {
          kind: 'carry',
          html:
            'John ends with a stark test: if you love God but hate your brother, you are a liar. You cannot truly love the invisible God while despising the visible brother. Love must be concrete. It must extend to others. The commandment is simple and absolute: love God and love your brother. The two are inseparable.',
        },
        {
          kind: 'reflection',
          id: '1john4-brother',
          prompt: 'Is there someone you struggle to love? How might God&apos;s love for them help you love them?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'God is love. Every one that loveth is born of God, and knoweth God. He that loveth not knoweth not God. God sent his only begotten Son into the world, that we might live through him. Perfect love casteth out fear. We love him, because he first loved us.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 John 4 · Study Guide',
  },

  hasHebrew: false,
};
