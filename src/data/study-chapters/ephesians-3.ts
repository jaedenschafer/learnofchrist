import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Ephesians 3 — The Mystery Revealed; Christ Dwelling in Your Heart
 *
 * Paul opens as a prisoner of Jesus Christ for the sake of Gentiles—
 * a mystery hidden for ages now revealed: that Gentiles are not converts
 * to Judaism, but fellowheirs, members of the same body, partakers of God&apos;s
 * promise in Christ. The chapter culminates in one of Scripture&apos;s most
 * expansive prayers: that you would be strengthened to comprehend the
 * dimensions of Christ&apos;s love that surpasses knowledge, and be filled
 * with all the fullness of God.
 */
export const EPHESIANS_3: RichChapterContent = {
  bookSlug: 'ephesians',
  bookName: 'Ephesians',
  chapter: 3,

  estimatedMinutes: { beginner: 7, intermediate: 15, deep: 21 },
  intros: [
    'Ephesians 3 opens with Paul reflecting on his calling as "the prisoner of Jesus Christ for you Gentiles"—not in shame, but in stewardship. He then unveils the mystery: what was hidden "from the beginning of the world" is now revealed. Gentiles and Jews share one body, one Spirit, one Lord, one faith. They are not secondary or marginal. They are co-heirs.',
    'The chapter concludes with one of the Bible&apos;s most stretching prayers. Paul prays that you would be strengthened to comprehend the breadth, length, depth, and height of Christ&apos;s love—a love that surpasses knowing. He prays that you would be filled with all the fullness of God. Not as isolated individuals, but as a community rooted and grounded in love, indwelt by Christ through faith.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /paul.*prison|imprisoned|captive/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Ephesians 3',
    quote:
      'The mystery hidden for ages is revealed: Gentiles are co-heirs with Israel in Christ. Paul prays that believers would be rooted in love, comprehending the infinite dimensions of Christ&apos;s love, filled with all of God&apos;s fullness.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ephesians 3 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-ephesians-3-mystery',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'The Mystery Revealed — Gentiles and Jews United',
      url: 'https://intertextual.bible/text/ephesians-3',
      description: 'Cross-references showing how OT prophecy of gentile inclusion finds fulfillment in the church.',
    },
    {
      id: 'sefaria-genesis-2-love',
      kind: 'study',
      source: 'Sefaria',
      label: 'Genesis 2:24 — Love as Foundation',
      url: 'https://www.sefaria.org/Genesis.2.24',
      description: 'OT basis for understanding love as the foundation on which believers are rooted and grounded.',
    },
    {
      id: 'perseus-pleroma-love',
      kind: 'lexicon',
      source: 'Perseus Scaife',
      label: 'Plērōma — Fullness (Greek Lexicon)',
      url: 'https://scaife.perseus.org/library/lsj/πλήρωμα/1',
      description: 'Classical Greek concept of fullness and completion, enriching Paul&apos;s vision of being filled with God&apos;s fullness.',
    },
  ],

  sections: [
    /* ─── Ephesians 3:1 — The Prisoner of Jesus Christ for You Gentiles ──────── */
    {
      ref: 'Ephesians 3:1',
      title: 'The Prisoner of Jesus Christ for You Gentiles',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('For this cause '),
                hp('I Paul, the prisoner of Jesus Christ', 'c-prisoner'),
                t(' for you Gentiles,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-prisoner',
          html:
            'Paul is literally imprisoned in Rome when he writes this. Yet he does not call himself "a prisoner of Rome" or "a prisoner of circumstance." He calls himself "the prisoner of Jesus Christ." His confinement has been reframed. It is no longer a diminishment—it is a stewardship. Every constraint he faces is in service to the gospel reaching Gentiles. This is how faith rewrites a story.',
        },
        {
          kind: 'carry',
          html:
            'You may be in your own kind of captivity: a job that confines you, a schedule that leaves no room, a diagnosis, a relationship, a grief. The question Paul raises is whether that confinement can be reframed as Christ&apos;s captivity of you—not for your diminishment, but for something larger. What if your constraint is not a mistake, but a stewardship?',
        },
        {
          kind: 'reflection',
          id: 'prisoner-reflect',
          prompt:
            'In what ways are you constrained right now? Could any of those constraints be reframed not as a prison, but as a calling?',
        },
      ],
    },

    /* ─── Ephesians 3:2–3a — The Mystery by Revelation ──────────────────────── */
    {
      ref: 'Ephesians 3:2–3',
      title: 'How the Mystery Was Made Known',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 2,
              spans: [
                t('If ye have heard of the '),
                hy('dispensation of the grace of God', 'c-dispensation'),
                t(' which is given me to you-ward:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('How that '),
                hp('by revelation he made known unto me the mystery', 'c-revelation'),
                t('; (as I wrote afore in few words,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-revelation',
          html:
            'Paul did not learn the mystery through study of the Old Testament or instruction from other apostles. He says explicitly: "by revelation he made known unto me the mystery." God revealed it to Paul directly. The risen Christ disclosed what had been hidden—not because it contradicts the Old Testament, but because its time had come.',
        },
        {
          kind: 'commentary',
          id: 'c-dispensation',
          html:
            'A "dispensation" here means a stewardship or commission—a specific season and task assigned by God. Paul has been given a stewardship: to make the mystery known to the Gentiles. He is not inventing this; he is transmitting what he received.',
        },
        {
          kind: 'reflection',
          id: 'revelation-reflect',
          prompt:
            'Are there truths about Christ or the gospel that have come to you not through instruction but through a moment of sudden clarity—a revelation? What was one?',
        },
      ],
    },

    /* ─── Ephesians 3:4–6 — Gentiles as Fellowheirs ────────────────────────── */
    {
      ref: 'Ephesians 3:4–6',
      title: 'Gentiles as Fellowheirs',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 4,
              spans: [
                t('Whereby, when ye read, ye may understand my knowledge in the '),
                hy('mystery of Christ', 'c-mystery-christ'),
                t(','),
              ],
            },
            {
              number: 5,
              spans: [
                t('Which in other ages was '),
                hy('not made known unto the sons of men', 'c-hidden-ages'),
                t(', as it is now '),
                hp('revealed unto his holy apostles and prophets by the Spirit', 'c-spirit-reveal'),
                t(';'),
              ],
            },
            {
              number: 6,
              spans: [
                t('That '),
                hg('the Gentiles should be fellowheirs, and of the same body, and partakers of his promise in Christ by the gospel', 'c-fellowheirs'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hidden-ages',
          html:
            'Paul emphasizes the newness of this revelation. It was "not made known unto the sons of men" in other ages. This is not because the Old Testament contradicts it, but because the time for its revelation had not yet come. The incarnation, the cross, the resurrection—these events changed what could now be disclosed.',
        },
        {
          kind: 'commentary',
          id: 'c-spirit-reveal',
          html:
            'The revelation is not given to Paul alone in isolation. It is given "unto his holy apostles and prophets by the Spirit." The mystery is disclosed through the apostolic company, through the gift of prophecy, through the work of the Spirit. It is a corporate revelation, not a private one.',
        },
        {
          kind: 'commentary',
          id: 'c-fellowship-mystery',
          html:
            'To "make all men see what is the fellowship of the mystery" means to bring all people into understanding of the mystery&apos;s content and reality. The fellowship is not primarily a social relationship, but a shared participation in the revealed truth: that Gentiles and Jews are one body in Christ.',
        },
        {
          kind: 'commentary',
          id: 'c-mystery-christ',
          html:
            'The mystery is fundamentally about Christ. It is not a riddle or a puzzle. It is the revealed truth that Christ&apos;s work has broken down the barrier between Jew and Gentile, creating one new body. The mystery is who Christ is and what He has accomplished.',
        },
        {
          kind: 'commentary',
          id: 'c-fellowheirs',
          html:
            '"Fellowheirs"—equal partners in inheritance. "Of the same body"—one organism, not two. "Partakers of his promise"—sharers in the covenant. Three times Paul names it: not addition, not conversion to Judaism, not secondary status. Equality. Inclusion. Oneness.',
        },
        {
          kind: 'greek',
          id: 'e3-mysterion',
          title: 'Mystērion — "Mystery"',
          script: 'μυστήριον',
          translit: '<strong>mystērion</strong> · mystery; secret; something hidden then revealed',
          description:
            'In Paul&apos;s language, a mystery is not irrational or incomprehensible. It is a plan of God that was hidden in former ages but is now made known. The mystery of Ephesians is that God&apos;s redemption extends to all people, Jew and Gentile alike, uniting them in one body through Christ.',
        },
        {
          kind: 'christ',
          id: 'e3-christ-uniter',
          title: 'Christ Connection — The Mystery Revealed in Christ',
          html:
            'Colossians 1:26–27 speaks of "the mystery which hath been hid from ages and from generations, but now is made manifest to his saints… which is Christ in you, the hope of glory." Christ Himself is the mystery. His incarnation, His cross, His resurrection—these enact the breaking down of every barrier. The wall between Jew and Gentile stood for centuries. Through Christ, it is gone. And that same Christ indwells you.',
        },
        {
          kind: 'carry',
          html:
            'For centuries, a boundary stood. Gentiles were outside the covenant, excluded from the temple, foreign to the promises. Then Christ came. One death, one resurrection, one Spirit poured out on all flesh. The boundary collapsed. If you are a follower of Christ, you are not a convert to Israel&apos;s religion; you are a co-heir in a new kind of family—not Jewish, not Gentile, but one body. That kind of inclusion is a mystery so large that Paul prays the rest of his life that believers would comprehend it.',
        },
        {
          kind: 'reflection',
          id: 'fellowheirs-reflect',
          prompt:
            'You are a fellowheir with believers of every background in Christ. Who is one person from a different culture, country, or tradition whose partnership in Christ has changed your understanding of God?',
        },
        {
          kind: 'artwork',
          matchTitle: /reconciliation|breaking.*wall|unity|church/i,
          caption: 'Ephesians 3:4–6 · One New Body',
        },
      ],
    },

    /* ─── Ephesians 3:7–8 — "Less Than the Least of All Saints" ─────────────── */
    {
      ref: 'Ephesians 3:7–8',
      title: '"Less Than the Least of All Saints"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 7,
              spans: [
                t('Whereof I was made a minister, according to the gift of the grace of God given unto me by the '),
                hy('effectual working of his power', 'c-effective'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Unto me, who am '),
                hg('less than the least of all saints', 'c-least'),
                t(', is this grace given, that I should preach among the Gentiles the '),
                hp('unsearchable riches of Christ', 'c-riches'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-least',
          html:
            'Paul calls himself "less than the least of all saints." He is not performing humility. Earlier in 1 Corinthians 15:9, he called himself "the least of the apostles… not meet to be called an apostle," remembering that he had persecuted the church before his conversion. Here, years later, he is still marked by that memory. He has never recovered from the grace that arrested him.',
        },
        {
          kind: 'commentary',
          id: 'c-riches',
          html:
            'Despite calling himself "less than the least," Paul speaks of "the unsearchable riches of Christ." The Greek word is <em>anexichniastos</em>—literally "unable to be traced out." These riches are not hidden because they cannot be known, but because they are inexhaustible. No matter how deep you dig, there is always more. A lifetime of searching will not reach the bottom.',
        },
        {
          kind: 'commentary',
          id: 'c-effective',
          html:
            'Paul attributes his ministry not to his own ability or worthiness, but to "the effectual working of his power." The power is not Paul&apos;s; it belongs to God. Paul is simply the vessel through which it flows. This is why he can be "less than the least" and still do the work of an apostle. His sufficiency is not in himself.',
        },
        {
          kind: 'greek',
          id: 'e3-anexichiastos',
          title: 'Anexichniastos — "Unsearchable"',
          script: 'ἀνεξιχνίαστος',
          translit: '<strong>anexichniastos</strong> · unable to be traced out; unsearchable; inexhaustible',
          description:
            'This word appears only twice in the New Testament—here and in Romans 11:33 ("O the depth of the riches… both of the wisdom and knowledge of God! how unsearchable are his judgments, and his ways past finding out"). The riches of Christ are not mysterious in the sense of being unclear, but vast in the sense of being infinite.',
        },
        {
          kind: 'carry',
          html:
            'Paul is deeply conscious of his own unworthiness. He was a persecutor. Yet he has been entrusted with the gospel. That paradox—grace given to "the least"—is the whole point. The gospel is not for people who have earned it, but for people who know they haven&apos;t. If you have ever thought yourself too broken, too far gone, too small for God to use, Paul is speaking directly to you. "Unto me, who am less than the least… is this grace given."',
        },
        {
          kind: 'reflection',
          id: 'least-reflect',
          prompt:
            'What is one area where you feel "less than the least"? How might God&apos;s grace still be working through exactly that?',
        },
      ],
    },

    /* ─── Ephesians 3:9–10 — The Manifold Wisdom of God to Principalities ───── */
    {
      ref: 'Ephesians 3:9–10',
      title: 'The Manifold Wisdom of God to Principalities',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 9,
              spans: [
                t('And to '),
                hg('make all men see what is the fellowship of the mystery', 'c-fellowship-mystery'),
                t(', which '),
                hy('from the beginning of the world hath been hid in God', 'c-hid-god'),
                t(', who created all things by '),
                hp('Jesus Christ', 'c-creator'),
                t(':'),
              ],
            },
            {
              number: 10,
              spans: [
                t('To the intent that now unto the '),
                hy('principalities and powers in heavenly places', 'c-heavenly-powers'),
                t(' might be known by the church the '),
                hg('manifold wisdom of God', 'c-manifold-wisdom'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-manifold-wisdom',
          html:
            'The Greek word is <em>polypoikilos</em>—literally "many-colored" or "many-variegated." The wisdom of God is not uniform or simple. It has many hues, many facets, many colors. The inclusion of Gentiles as fellowheirs is one brilliant color in that many-colored wisdom. Every time a Jew and Gentile kneel together in prayer, they are displaying God&apos;s wisdom.',
        },
        {
          kind: 'commentary',
          id: 'c-heavenly-powers',
          html:
            'Paul speaks of revealing God&apos;s wisdom "unto the principalities and powers in heavenly places." These are not demons but divine intelligences—the angels and powers that inhabit the heavenly realm. The very structures of creation are watching to see how the church reveals God&apos;s wisdom. Your life in community displays something to the cosmos.',
        },
        {
          kind: 'commentary',
          id: 'c-hid-god',
          html:
            'The mystery was "from the beginning of the world hid in God." It was not unknown to God; it was hidden in Him, waiting for its revelation. God has never been surprised. He always knew the end from the beginning. This mystery has been in His heart from eternity.',
        },
        {
          kind: 'commentary',
          id: 'c-creator',
          html:
            'Paul attributes the creation of all things to Jesus Christ. John opens his Gospel the same way: "In the beginning was the Word… all things were made by him." Christ is not a late addition to God&apos;s plan. He is the one through whom the world was made, the one in whom the mystery was hidden, the one through whom it is revealed.',
        },
        {
          kind: 'greek',
          id: 'e3-polypoikilos',
          title: 'Polypoikilos — "Manifold"',
          script: 'πολυποίκιλος',
          translit: '<strong>polypoikilos</strong> · many-colored; many-variegated; manifold',
          description:
            'This word appears only here in the New Testament. It carries the image of something woven with many colors—a tapestry. God&apos;s wisdom is not simple or monochromatic. It is a tapestry of many hues, and the inclusion of Gentiles is one brilliant thread in that pattern.',
        },
        {
          kind: 'carry',
          html:
            'You are not just a believer; you are part of a display. The principalities and powers in heavenly places are watching to see whether believers of different backgrounds will actually live as one body. Every time you choose to see another believer—regardless of their culture, race, or language—as a fellowheir and not a stranger, you are displaying the many-colored wisdom of God to the cosmos. That is not a small thing.',
        },
        {
          kind: 'reflection',
          id: 'manifold-reflect',
          prompt:
            'What color or hue does your life and community add to the display of God&apos;s many-colored wisdom?',
        },
      ],
    },

    /* ─── Ephesians 3:14–15 — "I Bow My Knees" ─────────────────────────────── */
    {
      ref: 'Ephesians 3:14–15',
      title: '"I Bow My Knees" unto the Father',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 14,
              spans: [
                t('For this cause '),
                hp('I bow my knees unto the Father of our Lord Jesus Christ', 'c-bow'),
                t(','),
              ],
            },
            {
              number: 15,
              spans: [
                t('Of whom the whole '),
                hy('family in heaven and earth', 'c-family'),
                t(' is named,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bow',
          html:
            'Paul is literally in prison. He cannot fall to his knees without pain and chains. Yet it is precisely because he has grasped the mystery—that Gentiles and Jews are one body, that the church displays God&apos;s wisdom to the heavens—that he bows. His posture is prayer. Prayer is not an escape from his captivity; it is his engagement with what is most real.',
        },
        {
          kind: 'commentary',
          id: 'c-family',
          html:
            'Paul speaks of one family "in heaven and earth." There is a family above—the angels, the powers, the host of heaven. There is a family on earth—believers across every tribe and tongue. It is one family, named by one Father, belonging to one household. Paul kneels with the full weight of that vision.',
        },
        {
          kind: 'carry',
          html:
            'Prayer is an act of faith in what you cannot yet see. Paul prays for a church whose full comprehension of Christ&apos;s love has not yet arrived. He prays for a fullness not yet visible. He kneels toward a reality that the principalities have seen but humans are still learning. That is what real prayer looks like.',
        },
        {
          kind: 'reflection',
          id: 'bow-reflect',
          prompt:
            'What would it look like for you to "bow your knees" to the Father—to position your whole life as a posture of dependence and prayer?',
        },
      ],
    },

    /* ─── Ephesians 3:16–17a — Strengthened by His Spirit in the Inner Man ─── */
    {
      ref: 'Ephesians 3:16–17',
      title: 'Strengthened by His Spirit in the Inner Man',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 16,
              spans: [
                t('That he would grant you, according to the riches of his glory, to be '),
                hp('strengthened with might by his Spirit in the inner man', 'c-inner-man'),
                t(';'),
              ],
            },
            {
              number: 17,
              spans: [
                t('That '),
                hp('Christ may dwell in your hearts by faith', 'c-dwell'),
                t('; that ye, being '),
                hy('rooted and grounded in love', 'c-rooted'),
                t(','),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-inner-man',
          html:
            'Paul prays for strength "in the inner man"—not physical power, but spiritual resilience. This is the strength to endure, to resist, to stand firm in conviction. It is given by the Spirit, not earned by effort. And it is given "according to the riches of his glory"—abundant, inexhaustible, matched to God&apos;s infinite resources.',
        },
        {
          kind: 'commentary',
          id: 'c-dwell',
          html:
            '"That Christ may dwell in your hearts by faith." Not as a guest, not as a visitation, but as a resident. He takes up permanent residence. And this happens through faith—trust, reliance, the willingness to let Him occupy the center of your being. The more you trust, the more fully He dwells.',
        },
        {
          kind: 'commentary',
          id: 'c-rooted',
          html:
            '"Rooted and grounded in love."[res:sefaria-genesis-2-love] A tree is rooted in the soil; a building is grounded in the foundation. Your life is rooted and grounded in love—not your love for God, but His love for you. That is the soil from which everything grows. That is the bedrock on which everything stands.',
        },
        {
          kind: 'carry',
          html:
            'You cannot manufacture the strength you need to live this life. You cannot force Christ to dwell in your heart. You cannot ground yourself in love through discipline alone. All of it is gift. All of it flows from the Spirit. All of it is received by faith. Paul prays this not as a possibility but as a plea. He is asking God to do in you what only God can do.',
        },
        {
          kind: 'reflection',
          id: 'inner-man-reflect',
          prompt:
            'Where do you need to be strengthened "in the inner man" right now? What would it look like to let Christ dwell more fully in that place?',
        },
      ],
    },

    /* ─── Ephesians 3:18–19 — The Dimensions of Christ&apos;s Love ──────────────── */
    {
      ref: 'Ephesians 3:18–19',
      title: 'The Dimensions of Christ&apos;s Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 18,
              spans: [
                t('May be able to '),
                hg('comprehend with all saints what is the breadth, and length, and depth, and height', 'c-dimensions'),
                t(';'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And to '),
                hy('know the love of Christ, which passeth knowledge', 'c-love-surpasses'),
                t(', that ye might be '),
                hp('filled with all the fulness of God', 'c-fullness'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dimensions',
          html:
            'The breadth: how wide is the circle of His love?[res:intertextual-ephesians-3-mystery] It reaches to the uttermost parts of the earth. The length: how long does it last? From before the foundation of the world to eternity. The depth: how profound is His commitment? Down to the cross, down into death, down into hell itself for your sake. The height: how high does it lift you? To the throne of God, to the right hand of Christ, to a seat in the heavens. These four dimensions can only be comprehended "with all saints"—not in isolation, but in community.',
        },
        {
          kind: 'commentary',
          id: 'c-love-surpasses',
          html:
            'Paul says this love "passeth knowledge." In other words, it exceeds understanding. Yet he also says "to know the love of Christ." How can something surpass knowledge and yet be known? The answer is that the love of Christ is not a proposition to be understood but a reality to be experienced. You don&apos;t primarily think about it; you live inside it. You discover it by trusting it.',
        },
        {
          kind: 'commentary',
          id: 'c-fullness',
          html:
            'The final destination of this prayer is that you would be "filled with all the fulness of God."[res:perseus-pleroma-love] The Greek word is <em>pleroma</em>—the fullness, the completion, the overflow. Paul is praying that you would be so indwelt by God that you lack nothing, that you are complete, that you overflow.',
        },
        {
          kind: 'greek',
          id: 'e3-pleroma',
          title: 'Plērōma — "Fulness"',
          script: 'πλήρωμα',
          translit: '<strong>plērōma</strong> · fulness; completeness; the totality of divine power and life',
          description:
            'To be filled with the pleroma of God is to be filled with the totality of God&apos;s presence, power, and life. It means lacking nothing, being complete, overflowing with His fullness. This is not a state you attain but a gift you receive.',
        },
        {
          kind: 'christ',
          id: 'e3-christ-love-dimensions',
          title: 'Christ Connection — The Love That Surpasses Knowing',
          html:
            'Jesus prayed in John 17:23, "I in them, and thou in me… that the world may know that thou hast sent me, and hast loved them, as thou hast loved me." The love Jesus speaks of is the very love of the Father toward the Son. That same love now extends to you. When Paul asks you to comprehend its dimensions, he is inviting you to experience the love the Father has for His Son—now directed toward you, now opening your heart, now filling you with all His fullness.',
        },
        {
          kind: 'carry',
          html:
            'This prayer is stretching. It asks you to comprehend something that surpasses comprehension. It asks you to know something that exceeds knowledge. It asks you to be filled with the fullness of the Infinite. You may feel small, incapable, insufficient for such a prayer. But notice that Paul does not ask you to accomplish this. He asks God to grant it. He asks you to open yourself to receive what only the Spirit can do. The love of Christ does not wait for you to be ready. It is already reaching toward you across all four dimensions—wider, longer, deeper, higher than you ever imagined.',
        },
        {
          kind: 'artwork',
          matchTitle: /cross|crucifixion|christ.*love|calvary/i,
          caption: 'Ephesians 3:18–19 · Dimensions of Love',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'dimensions-reflect',
          prompt:
            'Which dimension of Christ&apos;s love—breadth, length, depth, or height—do you most need to comprehend right now?',
        },
      ],
    },

    /* ─── Ephesians 3:20–21 — The Doxology ──────────────────────────────────── */
    {
      ref: 'Ephesians 3:20–21',
      title: 'The Doxology: Glory to Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 20,
              spans: [
                t('Now unto him that is able to do '),
                hg('exceeding abundantly above all that we ask or think', 'c-exceeding'),
                t(', according to the '),
                hy('power that worketh in us', 'c-power-in-us'),
                t(','),
              ],
            },
            {
              number: 21,
              spans: [
                t('Unto him be '),
                hp('glory in the church by Christ Jesus', 'c-glory'),
                t(' throughout all ages, world without end. Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-exceeding',
          html:
            'Paul closes his prayer with an affirmation of God&apos;s power. He can do "exceeding abundantly above all that we ask or think." Not just abundantly. Not just above what we ask. But <em>exceeding abundantly above</em> what we ask or think. God&apos;s capacity exceeds our requests, our imagination, our dreams. He is bigger than our biggest prayer.',
        },
        {
          kind: 'commentary',
          id: 'c-power-in-us',
          html:
            'This power "worketh in us." It is not remote or distant. It is actively working <em>in you</em> right now—transforming, strengthening, filling, completing. The power that spoke worlds into being, that raised Christ from the dead, that reconciled Jew and Gentile—that same power is at work inside you.',
        },
        {
          kind: 'commentary',
          id: 'c-glory',
          html:
            'The entire prayer and all of its content—the mystery revealed, Christ dwelling, comprehending His love, being filled with God&apos;s fullness—all of it exists for one purpose: that glory might come to God. Not self-fulfillment, not personal achievement, not comfort. Glory to Him. And this glory happens "in the church by Christ Jesus." The church is the vehicle through which the glory of God is released into the cosmos.',
        },
        {
          kind: 'carry',
          html:
            'You are not praying and growing for your own sake. You are praying and growing so that God might be glorified. Every time you comprehend a little more of Christ&apos;s love, every time you are strengthened in the inner man, every time you are filled with more of His fullness—you are adding your voice to the doxology. "Unto him be glory in the church by Christ Jesus throughout all ages, world without end. Amen." That Amen is not just Paul&apos;s. It is yours. It will be sung through the ages.',
        },
        {
          kind: 'reflection',
          id: 'doxology-reflect',
          prompt:
            'What would change in your life if you lived each day knowing that your growth and transformation exist so that God might be glorified in the church?',
        },
        {
          kind: 'artwork',
          matchTitle: /doxology|glory|praise|throne|heaven/i,
          caption: 'Ephesians 3:20–21 · Glory to God',
        },
      ],
    },
  ],
};
