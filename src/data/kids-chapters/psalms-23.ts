import type { KidsChapterContent } from './types';

/**
 * Psalm 23 — kids guide.
 *
 * The other most-asked-for kids chapter. The original psalm is short
 * and image-heavy already, so the "story" here re-imagines it as a
 * day in the life of a sheep with a really good shepherd. Memory
 * verse is the opening line, in NIrV. Activity is tactile (drawing
 * a path with rest stops) so even pre-readers can engage.
 */
export const PSALMS_23_KIDS: KidsChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 23,
  ageBand: 'all',
  estimatedMinutes: 4,
  topicTags: ['shepherd', 'comfort', 'trust'],

  intros: [
    'Psalm 23 is the most loved poem in the Bible. King David wrote it. He used to be a shepherd, so he knew exactly what he was talking about.',
  ],

  sections: [
    {
      title: "Today's Story",
      blocks: [
        {
          kind: 'story',
          html:
            '<p>Imagine you are a little sheep.</p>' +
            '<p>You wake up in the morning and your shepherd is already awake. He knows your name. He counts you to make sure you&apos;re there. He&apos;s done that every morning of your whole life.</p>' +
            '<p>He walks you to a green field where the grass is soft and there&apos;s a quiet little stream. You eat. You drink. You lie down. You don&apos;t worry about anything because you can see him standing right there.</p>' +
            '<p>Then it&apos;s time to walk to a new field. The path goes through a dark valley between two big hills. It&apos;s shady. It&apos;s a little scary. But the shepherd goes <em>first</em>, and he carries a stick to keep the wild animals away. So you&apos;re not afraid.</p>' +
            '<p>That night, in the new field, the shepherd makes you a kind of dinner table right there in the grass. He puts oil on your head where the bugs were biting. He fills your water bowl until it spills over.</p>' +
            '<p>And you think to yourself: <em>I get to live with my shepherd forever.</em></p>' +
            '<p>That&apos;s the song King David wrote &mdash; only he wasn&apos;t talking about a sheep and a shepherd. He was talking about <strong>you</strong> and <strong>God</strong>.</p>',
        },
        {
          kind: 'bigIdea',
          html:
            '<p>God is your shepherd &mdash; He goes with you everywhere, even through the scary parts, and He never leaves.</p>',
        },
      ],
    },
    {
      title: 'A Big Word',
      blocks: [
        {
          kind: 'keyWord',
          word: 'Shepherd',
          meaning:
            'A person whose job is to take care of sheep &mdash; feed them, find them when they&apos;re lost, keep them safe from anything dangerous. Jesus calls Himself <em>the Good Shepherd</em>.',
        },
      ],
    },
    {
      title: 'Memory Verse',
      blocks: [
        {
          kind: 'memoryVerse',
          verse: {
            ref: 'Psalm 23:1',
            text: 'The Lord is my shepherd. He gives me everything I need.',
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
            'David says walking through the dark valley isn&apos;t scary because the shepherd is there. What&apos;s a &ldquo;dark valley&rdquo; in your life right now &mdash; something hard or worrying you?',
            'The shepherd in this song knows the sheep by name. How does it feel to know God knows your name and your favorite things and what makes you sad?',
            'If you could tell God thank You for one way He has taken care of you this week, what would it be?',
          ],
        },
      ],
    },
    {
      title: 'Try This',
      blocks: [
        {
          kind: 'tryThis',
          title: 'Draw the path',
          html:
            '<p>Get a piece of paper. Draw a winding path from one corner to the other. Along the path, draw three things from the psalm:</p>' +
            '<ol><li>A green field with quiet water (verse 2)</li>' +
            '<li>A dark valley (verse 4)</li>' +
            '<li>A table set with food (verse 5)</li></ol>' +
            '<p>Then draw a little sheep on the path &mdash; that&apos;s you. And draw a shepherd next to the sheep, walking with you the whole way.</p>',
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
            '<p>Dear God,</p>' +
            '<p>Thank You for being my shepherd. Thank You that You know my name.</p>' +
            '<p>When I&apos;m scared, help me remember You are walking right next to me. When I&apos;m happy, help me remember You gave me good things.</p>' +
            '<p>In Jesus&apos; name, amen.</p>',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Psalm 23',
    quote:
      "We&apos;re reading Psalm 23 with our family today &mdash; the most-loved poem in the Bible, about a shepherd who never leaves.",
    snippet: 'Family-friendly Bible study from Learn of Christ.',
    ref: 'Psalm 23 · Kids Study',
  },
};
