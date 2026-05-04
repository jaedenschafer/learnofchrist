import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 2 — Water Turned to Wine, Temple Cleansed
 *
 * At Cana, a wedding runs short of wine. Jesus intervenes, and water becomes
 * wine—abundant, excellent, extravagant. His mother knows He will act. The
 * disciples begin to see. Then Jesus enters the Temple and overturns the
 * tables of the money changers, proclaiming: "It is written, My house shall
 * be called the house of prayer; but ye have made it a den of thieves."
 * The sign and the act reveal two faces of His mission: grace that
 * celebrates, and judgment that cleanses.
 */
export const JOHN_2: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 2,

  estimatedMinutes: { beginner: 2, intermediate: 6, deep: 7 },
  opener: {
    matchTitle: /The Marriage Feast of/i,
    caption: 'John 2',
  },
  intros: [
    'The wedding at Cana is Jesus&apos; first public sign in the Gospel of John. A celebration, a moment of joy, a crisis quietly unfolding: the wine has run out. To run short of wine at a wedding is to fail in hospitality, to bring shame on the bride and groom. Mary, Jesus&apos; mother, knows He can address this. She brings the need before Him without making a direct demand. Jesus responds with apparent distance—"Mine hour is not yet come"—yet He acts. Water becomes wine. Not a small emergency repair, but an abundance of the finest wine, five to six hundred liters of it.',
    'Days later, Jesus enters the Temple. He sees the money changers and merchants conducting business in the courtyard. The Temple has become a marketplace. Those coming to worship must exchange their coins, purchase sacrificial animals, navigate commerce disguised as devotion. Jesus makes a whip and drives them out, overturning tables, pouring out coins, commanding: "Take these things hence." His statement is both explanation and charge: "My house shall be called the house of prayer." The Temple is violated. It must be reclaimed.',
  ],

  sections: [
    /* ─── John 2:1–11 — Water to Wine ──────────────────────────────────── */
    {
      ref: 'John 2:1–11',
      title: 'Water Into Wine',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'And the third day there was a marriage in Cana of Galilee; and the mother of Jesus was there:'),
            plain(3, 'And when they wanted wine, the mother of Jesus saith unto him, They have no wine.'),
            plain(4, 'Jesus saith unto her, Woman, what have I to do with thee? mine hour is not yet come.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john-2-78mid-1',
          html:
            'Jesus turns water to wine at Cana; the steward marvels at the quality. This is His first sign; His glory is revealed and His disciples believe in Him.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(6, 'And there were set there six waterpots of stone, after the manner of the purifying of the Jews, containing two or three firkins apiece.'),
            plain(7, 'Jesus saith unto them, Fill the waterpots with water. And they filled them up to the brim.'),
            plain(9, 'When the ruler of the feast had tasted the water that was made wine, and knew not whence it was: (but the servants which drew the water knew;) he called the bridegroom,'),
            plain(10, 'And saith unto him, Every man at the beginning doth set forth good wine; and when men have well drunk, then that which is worse: but thou hast kept the good wine until now.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john2-cana-setting',
          html:
            'A wedding at Cana[res:iaa-cana-wedding]. A celebration, a moment of blessing and union, overshadowed by an embarrassment: the wine has run out. In the culture of first-century Palestine, this is a real crisis—a public failure of hospitality. The bridegroom will be shamed. Mary, Jesus&apos; mother, notices and brings it to Him. She does not ask directly. She simply states the fact: "They have no wine." This is a mother&apos;s way of inviting Him to act.',
        },
        {
          kind: 'commentary',
          id: 'john2-hour',
          html:
            'Jesus replies with what sounds like a refusal: "Woman, what have I to do with thee? mine hour is not yet come." The term "woman" is not rude in this context; it is formal and respectful. But the statement seems to place distance between them. His hour—the appointed time of His full manifestation and death—has not yet arrived. Yet His mother is not discouraged. She tells the servants: "Whatsoever he saith unto you, do it." She expects action even from an apparent refusal. And she is right.',
        },
        {
          kind: 'greek',
          id: 'john2-hora',
          title: 'Hora — Hour',
          script: 'ὥρα',
          translit: '<strong>Hora</strong> · hour; time; appointed moment; season',
          description:
            'Throughout John, "the hour" refers to the appointed time of Jesus&apos; passion, death, and glorification. It is the culmination toward which His entire ministry moves. Yet there are lesser hours—moments of revelation and power that anticipate the greater hour. The transformation of water into wine is one such sign, foreshadowing the greater transformation that will come through His death and resurrection.',
        },
        {
          kind: 'commentary',
          id: 'john2-water-wine',
          html:
            'Jesus commands the servants to fill six waterpots with water—pots used for the ceremonial cleansing of the Jews. He then tells them to draw from the pots and take it to the master of the feast. When tasted, the water has become wine. Not a weak wine, not an embarrassed substitute. The master of the feast tastes it and exclaims in confusion: this is the finest wine, kept until last. Custom dictates that the good wine is served first, and when guests are satisfied, the inferior wine. But here the order is reversed. The best is saved for the end.',
        },
        {
          kind: 'christ',
          id: 'john2-christ-abundance',
          title: 'Christ Connection — Grace and Abundance',
          html:
            'The sign at Cana reveals the character of grace. It is not stingy or reluctant. It does not meet need with bare minimum. Jesus produces not a single jar of wine, but six massive pots full—perhaps six hundred liters. Grace is abundant, generous, celebratory. He does not merely rescue the wedding; He elevates it. The best wine, kept for last. In Christ, the fullness of God&apos;s blessing is released to humanity.',
        },
        {
          kind: 'carry',
          html:
            'The servants knew what had happened. They alone witnessed the transformation because they obeyed the command to fill the pots and draw from them. Obedience often precedes understanding. You may not see how your obedience will matter; you may not understand until you act. But in acting, you participate in the miraculous.',
        },
        {
          kind: 'reflection',
          id: 'john2-finest',
          prompt: 'Where is God calling you to believe in abundance rather than scarcity? Where might He be preparing something better than what you expect?',
        },
      ],
    },

    /* ─── John 2:12–25 — Cleansing the Temple ──────────────────────────── */
    {
      ref: 'John 2:12–25',
      title: 'My House Shall Be a House of Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(13, 'And the Jews&apos; passover was at hand, and Jesus went up to Jerusalem.'),
            plain(14, 'And found in the temple those that sold oxen and sheep and doves, and the changers of money sitting:'),
            plain(15, 'And when he had made a scourge of small cords, he drove them all out of the temple, and the sheep, and the oxen; and poured out the changers&apos; money, and overthrew the tables;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john-2-78mid-2',
          html:
            'Jesus has done His first miracle; now He cleanses the temple. From sign to sign, from private revelation to public confrontation.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(16, 'And said unto them that sold doves, Take these things hence; make not my Father&apos;s house an house of merchandise.'),
            plain(17, 'And his disciples remembered that it was written, Zeal for thine house hath eaten me up.'),
            plain(18, 'Then answered the Jews unto him, What sign shewest thou unto us, seeing that thou doest these things?'),
            plain(19, 'Jesus answered and said unto them, Destroy this temple, and in three days I will raise it up.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john2-temple-market',
          html:
            'Jesus enters the Temple during Passover when Jerusalem is crowded with pilgrims. The courtyard has become a market[res:bible-odyssey-temple]. Money changers sit at tables converting foreign currency into Temple currency—for a fee. Merchants sell oxen, sheep, and doves for sacrifice. The system is convenient, perhaps even necessary, but it has transformed the Temple into a place of commerce. Those coming to pray must navigate a marketplace. The sacred has been compromised by profit.',
        },
        {
          kind: 'commentary',
          id: 'john2-whip',
          html:
            'Jesus does not debate with the merchants or lodge a complaint with the authorities. He makes a whip of small cords and drives them out[res:iaa-temple-cleansing]. He pours out the money of the changers, overturns their tables. To the sellers of doves—the poor person&apos;s sacrifice—He says: "Take these things hence; make not my Father&apos;s house an house of merchandise." The action is violent, disruptive, and purposeful. The Temple must be cleansed. The Father&apos;s house must be restored to prayer.',
        },
        {
          kind: 'greek',
          id: 'john2-naos',
          title: 'Naos — Temple (Sanctuary)',
          script: 'ναός',
          translit: '<strong>Naos</strong> · temple sanctuary; inner chamber; the dwelling place of God',
          description:
            'The naos is the inner sanctuary of the Temple, the holy of holies, the dwelling place of God. By extension, it refers to the entire Temple complex. When Jesus calls it "my Father&apos;s house" and forbids it from becoming a "house of merchandise," He asserts ownership and declares the Temple&apos;s true purpose: to be a place of encounter with God, not a venue for financial transaction.',
        },
        {
          kind: 'commentary',
          id: 'john2-three-days',
          html:
            'When the Jews demand a sign justifying His actions, Jesus speaks in riddle: "Destroy this temple, and in three days I will raise it up." The Jews misunderstand, assuming He speaks of the physical structure built over forty-six years. But Jesus speaks of His body. His death and resurrection will be the sign—the ultimate revelation that the old Temple system is superseded by the presence of the risen Christ Himself.',
        },
        {
          kind: 'christ',
          id: 'john2-christ-temple',
          title: 'Christ Connection — The True Temple',
          html:
            'Jesus cleanses the Temple because He Himself is the true Temple—the place where God dwells bodily, where heaven and earth meet, where the holy and the human are no longer separated. His resurrection will be the sign. He is the fulfillment of what the Temple merely anticipated. In Him, the barrier is torn. Access to God is no longer mediated through sacrifice and clergy. It is direct, through the risen Christ.',
        },
        {
          kind: 'carry',
          html:
            'Jesus shows us that righteous anger has a place. He is not indifferent to the violation of sacred space, to the corruption of worship through greed. Yet His anger is not rage or malice. It is purposeful, aimed at restoration. Where might your faith call you to righteous action rather than passive acceptance?',
        },
        {
          kind: 'reflection',
          id: 'john2-zeal',
          prompt: 'What are the "temples" in your life—the sacred spaces, practices, and commitments—that might be in danger of becoming marketplaces? How is God calling you to reclaim them?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Jesus saith unto her, Woman, what have I to do with thee? mine hour is not yet come. Make not my Father&apos;s house an house of merchandise. Destroy this temple, and in three days I will raise it up.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 2 · Study Guide',
  },

  resources: [
    {
      id: 'iaa-cana-wedding',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Cana of Galilee Archaeological Site',
      url: 'https://www.antiquities.org.il/en/',
      description: 'Archaeological evidence and excavation data from the traditional site of Cana, including early Christian veneration and Byzantine church remains.',
    },
    {
      id: 'iaa-temple-cleansing',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'First-Century Temple Commerce',
      url: 'https://www.antiquities.org.il/en/',
      description: 'Archaeological and historical evidence for the money-changing and animal-selling systems Jesus disrupted in the Temple courtyard.',
    },
  ],

  hasHebrew: false,
};
