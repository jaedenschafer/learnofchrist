import type { KidsChapterContent } from './types';

/**
 * Luke 2 — kids guide.
 *
 * The Christmas chapter. Most-asked-for kids chapter of every December.
 * Story includes the trip to Bethlehem, the manger, the shepherds, and
 * the angel announcement, but trims down the formal census detail and
 * the Simeon/Anna scene (which doesn&apos;t fit kid format) — those
 * stay in the adult chapter where the depth picker can show them.
 *
 * Memory verse is Luke 2:11 (the angel&apos;s announcement) — the line
 * any family can use as a Christmas memory piece.
 */
export const LUKE_2_KIDS: KidsChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 2,
  ageBand: 'all',
  estimatedMinutes: 5,
  topicTags: ['incarnation', 'humility', 'good-news'],

  intros: [
    'This is the Christmas story &mdash; how the King of everything was born in a place where animals eat dinner.',
  ],

  sections: [
    {
      title: "Today's Story",
      blocks: [
        {
          kind: 'story',
          html:
            '<p>The Roman emperor decided he wanted to count every person in his huge empire. So he sent out the rule: <em>Everybody go back to your hometown to be counted.</em></p>' +
            '<p>That&apos;s why a man named Joseph and a young woman named Mary set out for a tiny town called Bethlehem. They walked, mostly. Mary was very, very pregnant. Her baby was coming any day.</p>' +
            '<p>When they finally got to Bethlehem, every house was full. Every guest room was packed. There was nowhere to sleep. The only spot they could find was a little stable where the animals slept.</p>' +
            '<p>And right there &mdash; on a pile of straw, in the dark, surrounded by sheep and donkeys &mdash; the baby was born. Mary wrapped Him up tight and laid Him in a manger. (A manger is a feeding box. Where the animals eat.)</p>' +
            '<p>Out in the fields nearby, some shepherds were watching their flocks. It was the middle of the night, very dark. Suddenly &mdash; <em>BLAZING LIGHT.</em> An angel was standing right in front of them, and the glory of God was shining all around.</p>' +
            '<p>The shepherds were terrified. But the angel said, &ldquo;Don&apos;t be afraid! I&apos;ve got <em>good news.</em> A Savior has just been born for you in Bethlehem &mdash; Christ the Lord. You&apos;ll find Him as a tiny baby, wrapped up tight, lying in a manger.&rdquo;</p>' +
            '<p>Then the whole sky filled up with angels singing. <em>Glory to God in the highest, and on earth peace.</em></p>' +
            '<p>The shepherds ran into Bethlehem as fast as they could go. And they found Mary and Joseph and the baby, just like the angel said. Then they ran back out and told everyone they met &mdash; <em>The Savior is here. He looks like a baby. But it&apos;s really Him.</em></p>',
        },
        {
          kind: 'bigIdea',
          html:
            '<p>God loved the world so much that He came to it &mdash; not as a king on a throne, but as a baby in a feeding box, so He could be close to anyone who needed Him.</p>',
        },
      ],
    },
    {
      title: 'A Big Word',
      blocks: [
        {
          kind: 'keyWord',
          word: 'Savior',
          meaning:
            'The one who rescues you. Jesus is your Savior. The angel told the shepherds the baby in the manger was &ldquo;Christ the Lord, the Savior&rdquo; &mdash; God Himself, come to rescue people who couldn&apos;t rescue themselves.',
        },
      ],
    },
    {
      title: 'Memory Verse',
      blocks: [
        {
          kind: 'memoryVerse',
          verse: {
            ref: 'Luke 2:11',
            text:
              'Today in the town of David a Savior has been born to you. He is the Messiah, the Lord.',
            translation: 'NIrV',
          },
        },
      ],
    },
    {
      title: 'Talk About It',
      blocks: [
        {
          kind: 'talkTogether',
          questions: [
            'God could have come into the world any way He wanted &mdash; in a palace, on a mountain, with trumpets. He picked a stable. Why do you think He did that?',
            'The angel told the shepherds &mdash; not the kings, not the priests &mdash; first. What does that tell you about who Jesus came for?',
            'If you had been one of the shepherds in the field that night, what would you have done after the angels left?',
          ],
        },
      ],
    },
    {
      title: 'Try This',
      blocks: [
        {
          kind: 'tryThis',
          title: 'Make a manger',
          html:
            '<p>Get a small box, a cup, or a bowl. Put some shredded paper, a tea towel, or a handful of grass inside as &ldquo;straw.&rdquo;</p>' +
            "<p>Now find a small toy or a little stuffed animal &mdash; that&apos;s your baby Jesus. Lay it down inside.</p>" +
            "<p>Sit and look at it for a minute. The God who made the whole world &mdash; this is how small He chose to start.</p>",
          supplies: ['A small box, cup, or bowl', 'Something soft for &ldquo;straw&rdquo;', 'A small toy or stuffed animal'],
        },
      ],
    },
    {
      title: 'Pray Together',
      blocks: [
        {
          kind: 'prayTogether',
          html:
            '<p>Jesus,</p>' +
            '<p>Thank You for coming to us. Thank You for being born in a feeding box so You could meet us where we are.</p>' +
            '<p>Help me make room for You today, the way the manger made room.</p>' +
            '<p>In Your name, amen.</p>',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Luke 2',
    quote:
      "We&apos;re reading Luke 2 with our family today &mdash; the night God came to earth as a baby, in a stable, for everyone.",
    snippet: 'Family-friendly Bible study from Learn of Christ.',
    ref: 'Luke 2 · Kids Study',
  },
};
