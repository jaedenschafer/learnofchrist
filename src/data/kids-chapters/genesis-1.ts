import type { KidsChapterContent } from './types';

/**
 * Genesis 1 — kids guide pilot.
 *
 * The gold standard for the kids audience. Every future kids chapter
 * follows this shape: a short retelling, a big idea, a memory verse,
 * 2–3 talk-together questions, one quick activity, and a closing prayer.
 *
 * Target reading time: ~4 minutes when read aloud by a parent. Voice is
 * warm, simple, present tense where natural. No jargon, no Hebrew, no
 * museum links — those belong in the adult guide.
 */
export const GENESIS_1_KIDS: KidsChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 1,
  ageBand: 'all',
  estimatedMinutes: 4,
  topicTags: ['creation', 'sovereignty', 'glory'],

  intros: [
    'Genesis is the very first book of the Bible. It tells how everything began.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /creation/i,
    caption: 'How everything began',
  },

  sections: [
    {
      title: "Today's Story",
      blocks: [
        {
          kind: 'story',
          html:
            '<p>Before there was anything, there was God. No sky. No ground. No light. No people. Just God, in the dark.</p>' +
            "<p>Then God spoke. He said, &ldquo;Let there be light.&rdquo; And just like that &mdash; light. God called the light <em>day</em>, and the dark <em>night</em>. That was the very first day.</p>" +
            '<p>The next day, God made the sky. The day after that, He pulled the water back so dry land could come up, and He told the land to grow plants and trees and flowers.</p>' +
            '<p>On the fourth day, God hung the sun in the sky to shine in the day, and the moon and stars to shine at night.</p>' +
            '<p>On the fifth day, God filled the water with fish and the sky with birds. On the sixth day, He filled the land with animals &mdash; big ones, small ones, every kind you can think of.</p>' +
            '<p>And then, last of all, God made <strong>people</strong>. He made them like Himself, so they could love and think and care for things the way He does. He gave them the whole world to look after.</p>' +
            '<p>God looked at everything He had made. And He smiled. It was very good.</p>' +
            '<p>On the seventh day, God rested.</p>',
        },
        {
          kind: 'bigIdea',
          html:
            '<p>God made the world, and everything He made was good &mdash; and that includes <em>you</em>.</p>',
        },
      ],
    },
    {
      title: 'A Big Word',
      blocks: [
        {
          kind: 'keyWord',
          word: 'Create',
          meaning:
            "To make something brand new &mdash; something nobody has ever made before. When you draw a picture out of your own head, you're creating.",
        },
      ],
    },
    {
      title: 'Memory Verse',
      blocks: [
        {
          kind: 'memoryVerse',
          verse: {
            ref: 'Genesis 1:1',
            text: 'In the beginning, God created the heavens and the earth.',
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
            'If you could make anything you wanted &mdash; anything at all &mdash; what would you make?',
            'God made you on purpose, the same way He made the sun and the trees. How does it feel to know He wanted you here?',
            "What's one thing you saw today that God made? Why do you think He made it?",
          ],
        },
      ],
    },
    {
      title: 'Try This',
      blocks: [
        {
          kind: 'tryThis',
          title: 'Make your own creation',
          html:
            '<p>Get a piece of paper and some crayons or markers. Draw your own world. What does it look like? What kind of animals live there? What grows there?</p>' +
            "<p>When you're done, show your grown-up. Tell them about every part you made. That's a tiny taste of how God felt on day six &mdash; pleased with what He had made.</p>",
          supplies: ['Paper', 'Crayons or markers'],
        },
      ],
    },
    {
      title: 'Pray Together',
      blocks: [
        {
          kind: 'prayTogether',
          html:
            "<p>Dear God,</p>" +
            "<p>Thank You for making the world. Thank You for the sun and the stars and the animals. Thank You for making me.</p>" +
            "<p>Help me to take good care of the things You made today.</p>" +
            "<p>In Jesus' name, amen.</p>",
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Genesis 1',
    quote:
      "We're reading Genesis 1 with our family today &mdash; how God made the world, and how He made us on purpose.",
    snippet: 'Family-friendly Bible study from Learn of Christ.',
    ref: 'Genesis 1 · Kids Study',
  },
};
