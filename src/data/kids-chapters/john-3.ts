import type { KidsChapterContent } from './types';

/**
 * John 3 — kids guide.
 *
 * One of the most-asked-for kids chapters: contains John 3:16, plus
 * Nicodemus and the "born again" conversation. The story compresses
 * Nicodemus into a single visit with two simple ideas (a new kind of
 * birth; how much God loved the world). Memory verse is John 3:16
 * itself, in NIrV — most kids will already half-know it from family
 * or Sunday school.
 */
export const JOHN_3_KIDS: KidsChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 3,
  ageBand: 'all',
  estimatedMinutes: 4,
  topicTags: ['salvation', 'love', 'faith'],

  intros: [
    'A teacher named Nicodemus comes to Jesus at night with a question. The answer Jesus gives him is the heart of the whole Bible.',
  ],

  sections: [
    {
      title: "Today's Story",
      blocks: [
        {
          kind: 'story',
          html:
            '<p>It is dark outside. A man named Nicodemus is walking quietly through the streets so nobody sees him. He is an important teacher in his town, and he is going to talk to Jesus. He has been thinking about Jesus a lot.</p>' +
            '<p>When Nicodemus finds Jesus, he says, &ldquo;Teacher, we know God sent you. Nobody could do the things you do without God&apos;s help.&rdquo;</p>' +
            '<p>Jesus looks at him kindly. Then He says something strange. &ldquo;Nicodemus, if a person wants to belong to God&apos;s family, that person has to be born all over again.&rdquo;</p>' +
            '<p>Nicodemus is confused. &ldquo;Born again? But I&apos;m a grown-up! I can&apos;t be a baby again.&rdquo;</p>' +
            '<p>Jesus smiles. &ldquo;Not a baby like before. A new kind of life — one that comes from God&apos;s Spirit. The wind blows wherever it wants. You can&apos;t see it, but you can hear it and feel it. It&apos;s like that.&rdquo;</p>' +
            '<p>Then Jesus tells Nicodemus the most important sentence in the whole Bible. &ldquo;God loved the world so much that He gave His only Son. Anyone who believes in Him will not be lost. They will live forever with God.&rdquo;</p>' +
            '<p>Nicodemus walks home in the dark. But inside, something has started to feel like morning.</p>',
        },
        {
          kind: 'bigIdea',
          html:
            '<p>God loved you so much that He sent Jesus &mdash; and when you trust Jesus, He gives you a brand-new kind of life that lasts forever.</p>',
        },
      ],
    },
    {
      title: 'A Big Word',
      blocks: [
        {
          kind: 'keyWord',
          word: 'Believe',
          meaning:
            'To trust someone with your whole self &mdash; not just to know <em>about</em> Jesus, but to actually count on Him, the way you count on the chair when you sit down.',
        },
      ],
    },
    {
      title: 'Memory Verse',
      blocks: [
        {
          kind: 'memoryVerse',
          verse: {
            ref: 'John 3:16',
            text:
              'God loved the world so much that he gave his one and only Son. Anyone who believes in him will not die but will have eternal life.',
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
            'Nicodemus came to Jesus in the dark with a question. If you could ask Jesus one question, what would it be?',
            'Jesus says God&apos;s love is for &ldquo;the world&rdquo; &mdash; that means everyone, even people who feel forgotten. Who is one person you know who needs to hear that God loves them?',
            'What&apos;s something you have to <em>trust</em> to use, even when you can&apos;t see how it works inside &mdash; like a light switch, or a car? What does it feel like to trust Jesus the same way?',
          ],
        },
      ],
    },
    {
      title: 'Try This',
      blocks: [
        {
          kind: 'tryThis',
          title: 'The wind you can&apos;t see',
          html:
            '<p>Get a piece of paper or a paper towel. Step outside, or stand by an open window. Hold the paper up.</p>' +
            '<p>Wait. When the wind blows, watch what the paper does. You can&apos;t see the wind itself &mdash; but you can see what it <em>moves</em>.</p>' +
            '<p>Jesus said God&apos;s Spirit is like that. You don&apos;t see Him. But you start to see what He does &mdash; in you, in your family, in the world.</p>',
          supplies: ['A piece of paper', 'A breezy spot (window or outside)'],
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
            '<p>Thank You that God loved the world &mdash; and that includes me &mdash; so much that He sent You.</p>' +
            '<p>I want to trust You. Help me believe You with my whole self.</p>' +
            '<p>In Your name, amen.</p>',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share John 3',
    quote:
      "We&apos;re reading John 3 with our family today &mdash; the chapter where Jesus tells Nicodemus how much God loves the world.",
    snippet: 'Family-friendly Bible study from Learn of Christ.',
    ref: 'John 3 · Kids Study',
  },
};
