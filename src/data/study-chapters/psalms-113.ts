import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 113 — The God Who Lifts the Lowly
 *
 * "Praise ye the Lord. Praise, O ye servants of the Lord." A call to worship.
 * "He raiseth up the poor out of the dust, and lifteth the needy out of the
 * dunghill." This is the character of God: He lifts the lowly. He exalts the
 * humble. Mary echoes this psalm in her Magnificat: "He hath put down the mighty
 * from their seats, and exalted them of low degree." God&apos;s way is to reverse
 * the world&apos;s order.
 */
export const PSALMS_113: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 113,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'Psalm 113 is a brief, pure hymn of praise. It opens and closes with the call to praise: "Praise ye the Lord." In between, it describes God&apos;s character and His actions. God&apos;s name is blessed from the rising of the sun to the going down of the same. God is exalted far above all nations. Yet—and this is the paradox that runs through the psalm—this exalted God bows down to look at heaven and earth. He humbles Himself to notice the poor, the needy, the barren. He lifts them from the dust and the dunghill and places them among the honored.',
    'Mary, the mother of Jesus, quotes this psalm in her Magnificat. She has been chosen for the highest honor any woman could receive, yet she sees it as an example of God&apos;s characteristic action: lifting the lowly. The message reverberates through Scripture: God&apos;s power is shown not in dominating the strong but in lifting the weak.',
  ],

  sections: [
    {
      ref: 'Psalm 113:1–9',
      title: 'From Ash to Honor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 113,
          lines: [
            plain(1, 'Praise ye the Lord. Praise, O ye servants of the Lord, praise the name of the Lord.'),
            plain(2, 'Blessed be the name of the Lord from this time forth and for evermore.'),
            plain(3, 'From the rising of the sun unto the going down of the same the Lord&apos;s name is to be praised.'),
            plain(4, 'The Lord is high above all nations, and his glory above the heavens.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps113-praise-humility',
          html:
            'The Lord is praised on high. Now the psalm descends: he lifts the poor from the dust.',
        },
        {
          kind: 'scripture',
          chapter: 113,
          lines: [
            plain(5, 'Who is like unto the Lord our God, who dwelleth on high,'),
            plain(6, 'Who humbleth himself to behold the things that are in heaven, and in the earth!'),
            plain(7, 'He raiseth up the poor out of the dust, and lifteth the needy out of the dunghill;'),
            plain(8, 'That he may set him with princes, even with the princes of his people.'),
            plain(9, 'He maketh the barren woman to keep house, and to be a joyful mother of children. Praise ye the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps113-praise-servants',
          html:
            '"Praise, O ye servants of the Lord, praise the name of the Lord." The call to praise is directed specifically to servants. A servant is someone who has submitted himself to another&apos;s authority. The psalm invites those who know themselves to be God&apos;s servants to praise His name. In praising God, servants recognize their status and their joy: to serve God is to serve the highest purpose.',
        },
        {
          kind: 'commentary',
          id: 'ps113-high-above',
          html:
            '"The Lord is high above all nations, and his glory above the heavens. Who is like unto the Lord our God, who dwelleth on high." The exaltation of God is complete. He is above all nations, above all powers, beyond the heavens. And yet the next line brings a stunning reversal: "Who humbleth himself to behold the things that are in heaven, and in the earth!" This exalted God stoops to look.',
        },
        {
          kind: 'hebrew',
          id: 'ps113-shakak',
          title: 'Shakak — "Humbleth" (to Stoop, to Lower)',
          script: 'שָׁכַךְ',
          translit: '<strong>Shakak</strong> · humbles; stoops; bows down to see; lowers himself',
          description:
            'The Hebrew word shakak means to lower, to stoop, to bow down. The image is of someone of great height and dignity choosing to bow so low that they can see what is small. This is a chosen act of humility by one who need not humble himself at all.',
        },
        {
          kind: 'commentary',
          id: 'ps113-raiseth-poor',
          html:
            '"He raiseth up the poor out of the dust, and lifteth the needy out of the dunghill; that he may set him with princes, even with the princes of his people." The poor man sits in dust. The needy man sits on a dunghill—the lowest, filthiest place. And God raises him up. Not merely to normalcy, but to a place of honor—among princes. This is not a metaphor for improved circumstances. This is a reversal of status. The lowly are lifted to the highest place.',
        },
        {
          kind: 'christ',
          id: 'ps113-christ',
          title: 'Christ Connection — Divine Humility Fulfilled',
          html:
            'The paradox of verse 6—the Most High humbling Himself to look—finds its ultimate fulfillment in Christ. Paul writes: "Who, being in the form of God, thought it not robbery to be equal with God: but made himself of no reputation, and took upon him the form of a servant, and was made in the likeness of men" (Phil. 2:6–7). The King of kings was born poor, in a stable. The Lord of lords took the form of a servant and washed the feet of His disciples. He died between two criminals. This is divine humility incarnate—God bending so low that He could lift the lowest of the low.',
        },
        {
          kind: 'carry',
          html:
            'The psalm confronts our assumptions about status and honor. In the world&apos;s eyes, the powerful and wealthy are exalted and the poor are beneath notice. But God&apos;s way reverses this. He sees the poor, the weak, the overlooked—and He honors them. He makes the barren woman fruitful. He lifts the needy to sit with princes. This is a call to examine our own hearts: Do we, too, lift the lowly? Or do we, like the world, honor only the strong?',
        },
        {
          kind: 'reflection',
          id: 'ps113-lowly-exalted',
          prompt: 'How would your life change if you truly believed that God habitually lifts the lowly and humbles the proud? How would you treat those the world deems worthless?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Lord is high above all nations. He raiseth up the poor out of the dust, and lifteth the needy out of the dunghill.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 113 · Study Guide',
  },

  hasHebrew: true,
};
