import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 27 — Jotham
 *
 * A brief reign of steadfast righteousness. Jotham follows his father Uzziah&apos;s
 * example of devotion but learns from his sin: he will not enter the Lord&apos;s
 * temple. Though the people remain corrupt, the king himself prospers because
 * he prepares his ways before God. In his building works and victories, we see
 * a king who strengthens the kingdom through discipline and dependence on the
 * Lord.
 */
export const CHRONICLES_2_27: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 27,

  estimatedMinutes: { beginner: 4, intermediate: 7, deep: 10 },
  intros: [
    'Jotham ascends the throne at twenty-five years old, a young king in a troubled kingdom. His father Uzziah has been a long reign &mdash; forty years of reform and power. But Uzziah&apos;s final act was transgression: he entered the temple of the Lord to burn incense, the privilege of priests alone, and God struck him with leprosy. The kingdom learned a hard lesson about the boundaries God sets.',
    'Into this inheritance steps Jotham. He does right in the sight of the Lord, following his father&apos;s example of devotion and reform. But he does something his father failed to do: he does not enter the temple. He honors the boundary that broke his father. And in this restraint &mdash; in knowing what he must not do &mdash; Jotham finds the foundation for a reign of building, victories, and increasing power. He prospers not because the people are righteous, for they remain corrupt. He prospers because he prepares his ways before the Lord his God.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 27',
    quote:
      'Jotham became mighty because he prepared his ways before the Lord his God. In a reign that seems brief and quiet, we see the power of disciplined devotion: knowing what not to do, and persisting in righteousness even when the people around you do not.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 27 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 27:1–2 — The King Who Learns From His Father's Fall ──── */
    {
      ref: '2 Chronicles 27:1–2',
      title: 'The King Who Does Not Enter the Temple',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 1,
              spans: [
                t('Jotham was '),
                hp('twenty and five years old', 'jotham-age'),
                t(' when he began to reign, and he reigned sixteen years in Jerusalem. His mother&apos;s name also was Jerushah, the daughter of Zadok.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he did that which was right in the sight of the Lord, '),
                hp('according to all that his father Uzziah did', 'jotham-like-uzziah'),
                t(': '),
                hg('howbeit he entered not into the temple of the Lord', 'jotham-not-temple'),
                t('. And the people did yet corruptly.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jotham-age',
          html:
            'Jotham ascends at twenty-five &mdash; young, but not untested. He has grown up watching his father&apos;s long and mostly righteous reign, and he has witnessed the catastrophe that fell when Uzziah transgressed by entering the holy place. The kingdom is stable in his hands; he will reign sixteen years, matching his father&apos;s steady model.',
        },
        {
          kind: 'commentary',
          id: 'jotham-like-uzziah',
          html:
            'Jotham follows his father&apos;s example of doing right in the sight of the Lord. This is no departure; it is continuity. The kingdom does not need revolution. It needs the same steadiness, the same pattern of devotion and reform that Uzziah gave it &mdash; or at least, the part of Uzziah that was faithful.',
        },
        {
          kind: 'commentary',
          id: 'jotham-not-temple',
          html:
            'But here is the crucial turning point: "Howbeit he entered not into the temple of the Lord." Jotham has learned from his father&apos;s fall. Uzziah, grown strong, grew proud, and entered the temple to burn incense &mdash; a privilege reserved for the Levitical priesthood. God struck him with leprosy. The boundary was unmistakable. And Jotham, watching his father suffer the consequences of transgression, chose obedience. He will not repeat that error. He will do what is right, but he will also do what is not his to do.',
        },
        {
          kind: 'hebrew',
          id: 'jotham-name',
          title: 'יוֹתָם Yotam — "Yah Is Perfect"',
          script: 'יוֹתָם',
          translit: '<strong>Yotam</strong> · from "Yah is perfect" or "Yah is upright"',
          description:
            'Jotham&apos;s name itself carries the weight of his calling: a name meaning perfection or uprightness in God. The meaning is not ironic. Rather, it is a calling &mdash; a name that reminds him, and Israel, that true perfection lies not in striving beyond God&apos;s boundaries, but in walking faithfully within them.',
        },
        {
          kind: 'carry',
          html:
            'We learn from others&apos; mistakes. Jotham had front-row access to the consequence of his father&apos;s transgression &mdash; a leprous king, unable to enter his own house. And from that painful lesson, Jotham drew the right conclusion: there are boundaries I must honor. There are things I must not do. This is not resignation or fear. This is the beginning of wisdom. What boundaries has God set for you? What have you learned from watching others cross them?',
        },
        {
          kind: 'reflection',
          id: 'jotham-not-temple',
          prompt:
            'Jotham becomes mighty by learning what he must not do. What boundary or limitation in your life is actually teaching you how to prosper, not holding you back?',
        },
      ],
    },

    /* ─── 2 Chronicles 27:3–6 — Building the Kingdom, Defeating the Ammonites ──── */
    {
      ref: '2 Chronicles 27:3–6',
      title: 'Building Works and Military Victories',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 3,
              spans: [
                t('He built the high gate of the house of the Lord, and on the wall of Ophel he built much.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Moreover he built cities in the mountains of Judah, and in the forests he built castles and towers.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('He fought also with the king of the Ammonites, and prevailed against them. And the children of Ammon gave him the same year '),
                hg('an hundred talents of silver', 'jotham-tribute-silver'),
                t(', and ten thousand measures of wheat, and ten thousand of barley. So much did the children of Ammon pay unto him, both in the second year, and in the third.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('So Jotham became '),
                hp('mighty, because he prepared his ways before the Lord his God', 'jotham-prepared-ways'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jotham-building',
          html:
            'While others might have rested on the achievements of previous kings, Jotham builds. He fortifies the house of the Lord &mdash; the very place he himself will not enter. He strengthens the walls of Jerusalem. He builds cities in the mountains, places of refuge and security. He constructs towers and castles. The kingdom grows stronger under his hand, not through conquest alone, but through the work of building and preparation.',
        },
        {
          kind: 'commentary',
          id: 'jotham-tribute-silver',
          html:
            'The Ammonites, the ancient enemies of Judah, are subdued. And they do not simply submit to a single payment; they return in the second year, and the third, bringing tribute. One hundred talents of silver is enormous wealth. Ten thousand measures of wheat and barley represent both food security and economic power. Jotham&apos;s victories bring lasting tribute, not merely temporary success.',
        },
        {
          kind: 'hebrew',
          id: 'hechin-prepared',
          title: 'הֵכִין Hechin — "To Prepare" or "To Establish"',
          script: 'הֵכִין',
          translit: '<strong>Hechin</strong> · to prepare, establish, or make firm',
          description:
            'The verb "prepared" (hechin) appears again and again in the language of the kingdom: to prepare ways, to prepare the heart, to establish in steadfastness. Jotham&apos;s reign is characterized by this verb. He prepares. He builds. He makes firm what is good. His power flows from preparation, not from conquest alone.',
        },
        {
          kind: 'carry',
          html:
            'Jotham becomes mighty not through the force of his personality or the glory of a single victory, but through consistent, unglamorous work: building walls, establishing cities, preparing his ways before God. There is a quiet power in this. The kingdom grows strong because someone labored to make it strong. We live in the fruit of preparation we may never see &mdash; the work of those who came before us. And we are called to prepare the way for those who come after.',
        },
        {
          kind: 'reflection',
          id: 'jotham-builds',
          prompt:
            'Jotham became mighty through patient building and preparation. What are you building or preparing in your own life that will outlast you or benefit others?',
        },
      ],
    },

    /* ─── 2 Chronicles 27:7–9 — "He Prepared His Ways Before the Lord" ──────── */
    {
      ref: '2 Chronicles 27:7–9',
      title: 'The Secret of His Strength',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 7,
              spans: [
                t('Now the rest of the acts of Jotham, and all his wars, and his ways, behold, they are written in the book of the kings of Israel and Judah.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('He was five and twenty years old when he began to reign, and reigned sixteen years in Jerusalem.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And Jotham slept with his fathers, and they buried him in the city of David: and Ahaz his son reigned in his stead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jotham-rest',
          html:
            'The chronicle notes that the full record of Jotham&apos;s acts, wars, and ways are written elsewhere &mdash; a reminder that even in a brief text, we are seeing a summary. His reign lasted sixteen years. Much was done. Much was built. Many decisions were made. And yet the text focuses on one thing: he prepared his ways before the Lord his God.',
        },
        {
          kind: 'commentary',
          id: 'jotham-slept',
          html:
            'Jotham "slept with his fathers" and was buried in the city of David. The language is peaceful. There is no scandal, no deathbed repentance, no dramatic end. He reigned as he began: doing right in the sight of the Lord. His son Ahaz follows him &mdash; a son who, we will learn, does not follow in his father&apos;s faithfulness. But Jotham&apos;s sixteen-year reign stands as a quiet testimony to the power of steadiness, of boundary-keeping, of preparation.',
        },
        {
          kind: 'christ',
          id: 'jotham-christ',
          title: 'Christ Connection — The King Who Prepares His Way',
          html:
            'Jotham became mighty because he prepared his ways before the Lord. Jesus, in His incarnation, also prepared His way through obedience. "I came not to do mine own will, but the will of him that sent me" (John 5:30). The perfect King does not grasp for power or transgress boundaries. He prepares His way through submission to the Father. And in Luke 1:17, John the Baptist is described as one who will "turn the hearts of the fathers to the children, and the disobedient to the wisdom of the just; to make ready a people prepared for the Lord." Christ&apos;s way is prepared by those who go before Him. And Christ Himself prepares the way for us &mdash; by His obedience, by His willingness to not transgress the boundary between human and divine, but to honor both perfectly. Through Him, we are made righteous not by our own striving, but by His preparation, His faithfulness, His ways made perfect before God (2 Corinthians 5:21).',
        },
        {
          kind: 'carry',
          html:
            'Strength is not the absence of constraint. Jotham was mighty because he knew his boundaries and honored them. We are strongest when we stop asking "What can I get away with?" and start asking "What does God ask of me?" The boundaries God sets are not obstacles to our flourishing. They are the foundation of it. In restraint, in obedience, in the daily preparation of our ways before Him, we discover a strength that outlasts us.',
        },
        {
          kind: 'reflection',
          id: 'prepared-ways',
          prompt:
            'How does your daily obedience to God &mdash; the small choices to honor boundaries, to do what is right when no one is watching &mdash; prepare your way before Him? What would change if you saw your discipline not as limitation, but as strength?',
        },
      ],
    },
  ],
};
