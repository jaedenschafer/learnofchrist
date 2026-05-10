import type { KidsChapterContent } from './types';

/**
 * Genesis 2 — kids guide.
 *
 * The garden, Adam, Eve, marriage. Companion piece to Genesis 1: where
 * chapter 1 zooms out to "God made everything," chapter 2 zooms in on
 * the first humans and how God designed them to be together. The
 * marriage piece is handled lightly ("a special promise") so the
 * chapter works for any family configuration without fudging the text.
 */
export const GENESIS_2_KIDS: KidsChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 2,
  ageBand: 'all',
  estimatedMinutes: 4,
  topicTags: ['creation', 'marriage', 'image-of-god'],

  intros: [
    'Yesterday we read about how God made everything. Today we get a closer look at how He made the very first people, and the very first home.',
  ],

  sections: [
    {
      title: "Today's Story",
      blocks: [
        {
          kind: 'story',
          html:
            '<p>God planted a garden. The most beautiful garden you can imagine &mdash; trees full of fruit, a river running through the middle, animals everywhere.</p>' +
            '<p>Then God did something special. He took some dirt from the ground, and He shaped it with His own hands. He bent down close, and He breathed His own breath into it. And the dirt sat up. It was a man. God called him Adam.</p>' +
            '<p>God brought Adam into the garden and gave him a job &mdash; to take care of every tree and every animal. God brought all the animals to Adam one by one, and Adam gave each one a name. Lion. Eagle. Otter. Bumblebee. Every name you can think of.</p>' +
            '<p>But God noticed something. Adam had every animal in the world for company, and he was still alone in a way the animals couldn&apos;t fix. So God said, &ldquo;That&apos;s not good. I&apos;m going to make him a partner.&rdquo;</p>' +
            '<p>God put Adam into a deep sleep. Then He took one of Adam&apos;s ribs and made it into a person too &mdash; a woman, named Eve. When Adam woke up and saw her, his whole face lit up. <em>Finally,</em> he thought. <em>Someone like me.</em></p>' +
            '<p>God put them together in the garden, and they belonged there, and they belonged to each other, and they belonged to Him.</p>',
        },
        {
          kind: 'bigIdea',
          html:
            '<p>God made you on purpose, with His own hands &mdash; and He made you to belong: to Him, and to other people too.</p>',
        },
      ],
    },
    {
      title: 'A Big Word',
      blocks: [
        {
          kind: 'keyWord',
          word: 'Belong',
          meaning:
            'To have a place that&apos;s really yours, with people who are really yours. God made you to belong to Him, and to a family, and to friends He gives you.',
        },
      ],
    },
    {
      title: 'Memory Verse',
      blocks: [
        {
          kind: 'memoryVerse',
          verse: {
            ref: 'Genesis 2:7',
            text:
              'Then the Lord God formed a man. He made him out of the dust of the ground. God breathed the breath of life into him. And the man became a living person.',
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
            'Adam got to name every animal. If you could name a brand-new animal nobody&apos;s ever seen, what would you call it and what would it look like?',
            'God said it wasn&apos;t good for Adam to be alone. Who are the people God has given you to belong with? Pick one and say one thing you&apos;re thankful for about them.',
            'God made you on purpose, with His own hands. What&apos;s one thing about <em>you</em> that you&apos;re glad He made the way He did?',
          ],
        },
      ],
    },
    {
      title: 'Try This',
      blocks: [
        {
          kind: 'tryThis',
          title: 'Make a person from dirt',
          html:
            '<p>Get a little dirt or some play dough. Try to shape a person with your hands &mdash; head, arms, legs, the whole thing.</p>' +
            '<p>It&apos;s harder than it looks, isn&apos;t it? Now imagine God doing the very same thing &mdash; only His person sat up and started breathing.</p>' +
            "<p>That&apos;s how God made you, too. On purpose. With care. And then He breathed life into you.</p>",
          supplies: ['Play dough or a small handful of dirt'],
        },
      ],
    },
    {
      title: 'Pray Together',
      blocks: [
        {
          kind: 'prayTogether',
          html:
            '<p>Dear God,</p>' +
            '<p>Thank You for making me with Your own hands. Thank You for the people You gave me to belong with.</p>' +
            '<p>Help me love them today the way You love me.</p>' +
            '<p>In Jesus&apos; name, amen.</p>',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Genesis 2',
    quote:
      "We&apos;re reading Genesis 2 with our family today &mdash; how God made the first people on purpose, with His own hands.",
    snippet: 'Family-friendly Bible study from Learn of Christ.',
    ref: 'Genesis 2 · Kids Study',
  },
};
