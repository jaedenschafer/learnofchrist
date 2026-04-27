import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 136 — His Mercy Endureth Forever
 *
 * A responsive hymn of praise, where each verse ends with the refrain "for his
 * mercy endureth for ever"—spoken 26 times. The structure itself teaches: mercy
 * is the thread running through all of God&apos;s acts, from creation to
 * deliverance. It is not an afterthought or occasional grace. It is the
 * foundation, the constancy, the character that defines all the Lord does.
 */
export const PSALMS_136: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 136,

  intros: [
    'Psalm 136 is structured as a call-and-response song, likely sung in the temple with the congregation answering each line with the refrain "for his mercy endureth for ever." This ancient liturgical form teaches through repetition and rhythm. The psalmist recounts God&apos;s mighty deeds—creation, the exodus, the conquest—and after each one, the people respond with the same refrain. What does this relentless repetition accomplish? It drives home a single, transformative truth: everything the Lord does flows from mercy. Not from necessity, not from obligation, but from grace. Every act of power, every deliverance, every provision reveals a God whose character is fundamentally merciful, and whose mercy is eternal.',
  ],

  sections: [
    {
      ref: 'Psalm 136:1–9',
      title: 'Mercy in Creation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 136,
          lines: [
            plain(1, 'O give thanks unto the Lord; for he is good: for his mercy endureth for ever.'),
            plain(2, 'O give thanks unto the God of gods: for his mercy endureth for ever.'),
            plain(3, 'O give thanks unto the Lord of lords: for his mercy endureth for ever.'),
            plain(4, 'To him who alone doeth great wonders: for his mercy endureth for ever.'),
            plain(5, 'To him that by wisdom made the heavens: for his mercy endureth for ever.'),
            plain(6, 'To him that stretched out the earth above the waters: for his mercy endureth for ever.'),
            plain(7, 'To him that made great lights: for his mercy endureth for ever:'),
            plain(8, 'The sun to rule by day: for his mercy endureth for ever:'),
            plain(9, 'The moon and stars to rule by night: for his mercy endureth for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm136-good',
          html:
            'The opening declaration is simple but absolute: "O give thanks unto the Lord; for he is good." Goodness is the ground of thanksgiving. And this goodness has a name—mercy. The refrain drives this home with every line. Why give thanks? "For his mercy endureth for ever." Not His power alone, not His justice alone, but His mercy. And not a mercy that is occasional or conditional. A mercy that endures forever.',
        },
        {
          kind: 'hebrew',
          id: 'psalm136-hesed',
          title: 'Hesed — "Mercy" (Loving-Kindness)',
          script: 'חֶסֶד',
          translit: '<strong>Hesed</strong> · mercy, loving-kindness, steadfast love, covenant grace',
          description:
            'Hesed is one of the richest words in Hebrew Scripture. It means mercy, yes, but also faithful love, kindness that flows from covenant relationship. It is not sentimental. It is the active commitment of a person in power to honor their bond with those they love. God&apos;s hesed is His character revealed: He is faithful, He is committed, He pursues the welfare of His people.',
        },
        {
          kind: 'commentary',
          id: 'psalm136-wonders',
          html:
            'The psalm then catalogs God&apos;s acts of mercy. He alone does great wonders. He made the heavens by wisdom. He stretched out the earth above the waters. He made the great lights—the sun and moon and stars. Each of these is an act of creation, an act of power. Yet after each one, the refrain returns: "for his mercy endureth for ever." Creation is not an impersonal mechanism. It is an expression of mercy—a God providing light, order, sustenance, beauty to the world He brings into being.',
        },
        {
          kind: 'carry',
          html:
            'Notice what the psalm does: it attaches mercy to every act. The sun rules by day—for his mercy endureth forever. The moon and stars rule by night—for his mercy endureth forever. We live in a cosmos ordered by a merciful God. The light by which we see, the seasons that guide our work, the stars that mark the passage of time—all are expressions of a mercy that endures forever.',
        },
      ],
    },

    {
      ref: 'Psalm 136:10–22',
      title: 'Mercy in Deliverance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 136,
          lines: [
            plain(10, 'To him that smote Egypt in their firstborn: for his mercy endureth for ever:'),
            plain(11, 'And brought out Israel from among them: for his mercy endureth for ever:'),
            plain(12, 'With a strong hand, and with a stretched out arm: for his mercy endureth for ever.'),
            plain(13, 'To him which divided the Red sea into parts: for his mercy endureth for ever:'),
            plain(14, 'And made Israel to pass through the midst of it: for his mercy endureth for ever:'),
            plain(15, 'But overthrew Pharaoh and his host in the Red sea: for his mercy endureth for ever.'),
            plain(16, 'To him which led his people through the wilderness: for his mercy endureth for ever.'),
            plain(17, 'To him which smote great kings: for his mercy endureth for ever:'),
            plain(18, 'And slew famous kings: for his mercy endureth for ever:'),
            plain(19, 'Sihon king of the Amorites: for his mercy endureth for ever:'),
            plain(20, 'And Og the king of Bashan: for his mercy endureth for ever:'),
            plain(21, 'And gave their land for an heritage: for his mercy endureth for ever:'),
            plain(22, 'Even an heritage unto Israel his servant: for his mercy endureth for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm136-smote-egypt',
          html:
            'The psalm now moves to the exodus—Israel&apos;s deliverance from slavery. God smote Egypt in their firstborn. He brought Israel out from among the Egyptians with a strong hand and a stretched-out arm. He divided the Red Sea into parts and made Israel pass through the midst of it. But He overthrew Pharaoh and his host in the same waters. This is not merely power. This is power exercised for mercy toward Israel—to free the enslaved, to protect the vulnerable, to lead them to safety.',
        },
        {
          kind: 'commentary',
          id: 'psalm136-wilderness',
          html:
            'The refrain continues as the psalm recalls the wilderness journey: "To him which led his people through the wilderness: for his mercy endureth for ever." For forty years, God guided Israel through a land with no cities, no roads, no provisions. Yet they were fed with manna from heaven and water from the rock. They were clothed, their feet did not swell, and God&apos;s presence was with them. This too is mercy—sustained, patient, daily, unwavering.',
        },
        {
          kind: 'commentary',
          id: 'psalm136-kings-defeated',
          html:
            'Then God smote great kings—Sihon and Og—who would have prevented Israel from entering the promised land. And He gave their land to Israel as an heritage. Each act is mercy to His people. Each victory is framed not as conquest or triumph, but as the gracious work of a God who keeps covenant with those He loves. The refrain rings through it all: "for his mercy endureth for ever."',
        },
        {
          kind: 'christ',
          id: 'psalm136-christ-mercy',
          title: 'Christ Connection — Mercy Eternal in Christ',
          html:
            'The apostle Paul writes in Titus 3:4–7: "The kindness and love of God our Savior appeared when the grace of God that brings salvation has appeared to all people...He saved us, not on the basis of deeds which we have done in righteousness, but according to His mercy." All of God&apos;s mercy through history—in creation, in exodus, in covenant—finds its fullness in Christ. He is the display of mercy enduring forever. In Him, the old covenant of mercy gives way to the new covenant of grace.',
        },
      ],
    },

    {
      ref: 'Psalm 136:23–26',
      title: 'Mercy Eternal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 136,
          lines: [
            plain(23, 'Who remembered us in our low estate: for his mercy endureth for ever:'),
            plain(24, 'And hath redeemed us from our enemies: for his mercy endureth for ever.'),
            plain(25, 'Who giveth food to all flesh: for his mercy endureth for ever.'),
            plain(26, 'O give thanks unto the God of heaven: for his mercy endureth for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm136-remembered',
          html:
            'The psalm concludes by turning the focus to the present and the personal: "Who remembered us in our low estate: for his mercy endureth for ever." Israel has been brought low by exile or oppression. Yet God remembers them. Memory, in Scripture, is not passive recollection. To remember is to act. God&apos;s memory is loving action. He has redeemed His people from enemies. He gives food to all flesh. His mercy is not reserved for a few or for a moment. It extends to all the living.',
        },
        {
          kind: 'reflection',
          id: 'psalm136-mercy-life',
          prompt: 'Where have you experienced God&apos;s mercy in your own life? Not grand miracles necessarily, but steady, daily provision and care. How might you train yourself to see the mercies around you—in light, in sustenance, in guidance—and respond with the psalmist&apos;s gratitude?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O give thanks unto the Lord; for he is good: for his mercy endureth for ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 136 · Study Guide',
  },

  hasHebrew: true,
};
