import type { KidsChapterContent } from './types';

/**
 * Jonah 1 — kids guide.
 *
 * The storm and the great fish. Memory verse uses Jonah 1:17 directly
 * because the fish is the cliffhanger and kids will want it explicitly.
 * The story handles "the sailors threw Jonah into the sea" gently
 * (Jonah asked them to, and God had a fish ready) without sanitizing
 * it out — the chapter doesn&apos;t work otherwise. Closing prayer
 * pivots to "I can&apos;t run from God" which is the chapter&apos;s
 * actual point.
 */
export const JONAH_1_KIDS: KidsChapterContent = {
  bookSlug: 'jonah',
  bookName: 'Jonah',
  chapter: 1,
  ageBand: 'all',
  estimatedMinutes: 4,
  topicTags: ['obedience', 'mercy', 'pursuit'],

  intros: [
    'Jonah was supposed to be a messenger for God. He didn&apos;t want the job. So he tried to run away &mdash; and the chase is on.',
  ],

  sections: [
    {
      title: "Today's Story",
      blocks: [
        {
          kind: 'story',
          html:
            '<p>God said to Jonah, &ldquo;Go to the big city of Nineveh and tell them I&apos;m unhappy with how they&apos;re treating each other.&rdquo;</p>' +
            "<p>Jonah didn&apos;t want to. The people in Nineveh were enemies of his. So Jonah did the opposite. He went down to the docks, found a boat going the OTHER WAY, paid the fare, climbed in, and went down below to take a nap. He thought he could hide.</p>" +
            "<p>But out at sea, God sent a wind. Then bigger wind. Then a giant storm. The waves were taller than the boat. The sailors were terrified. They threw their cargo overboard. They prayed to every god they could think of. Then they went down and shook Jonah awake.</p>" +
            "<p>&ldquo;What did you DO?&rdquo; they yelled.</p>" +
            "<p>Jonah told them. &ldquo;I&apos;m running from the real God. The one who made the sea. This storm is for me.&rdquo; He swallowed hard. &ldquo;Throw me overboard. Then it will stop.&rdquo;</p>" +
            "<p>The sailors didn&apos;t want to. They tried to row back to land. They couldn&apos;t. Finally, with no other choice, they picked Jonah up and dropped him into the water.</p>" +
            "<p>And the moment he hit the sea &mdash; the storm stopped. Just like that. Like a switch.</p>" +
            "<p>But Jonah didn&apos;t drown. Because God had something ready. Out of the deep came a great big fish. And the fish swallowed Jonah whole.</p>" +
            "<p>Jonah sat down inside the fish, soaking wet, in the dark, alive. Three days. Three nights. And he started to think about the God he&apos;d been running from &mdash; the one who&apos;d caught him anyway.</p>",
        },
        {
          kind: 'bigIdea',
          html:
            '<p>You can&apos;t actually run away from God &mdash; and that&apos;s good news, because He&apos;s the one who loves you most.</p>',
        },
      ],
    },
    {
      title: 'A Big Word',
      blocks: [
        {
          kind: 'keyWord',
          word: 'Pursue',
          meaning:
            'To go after someone because you don&apos;t want to lose them. God pursued Jonah &mdash; with a wind, a storm, and a great big fish &mdash; because He wasn&apos;t going to let Jonah disappear.',
        },
      ],
    },
    {
      title: 'Memory Verse',
      blocks: [
        {
          kind: 'memoryVerse',
          verse: {
            ref: 'Jonah 1:17',
            text:
              'But the Lord sent a huge fish to swallow Jonah. And Jonah was inside the fish for three days and three nights.',
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
            'Jonah tried to hide from God in the bottom of a boat. Where do <em>you</em> sometimes try to &ldquo;hide&rdquo; when you don&apos;t want to do something hard &mdash; under the covers, in your room, on a screen?',
            'God didn&apos;t let Jonah drown &mdash; even when Jonah was running away. What does that tell you about how God feels about you when you mess up?',
            'Jonah ended up in the dark belly of a fish for three days. Have you ever had a hard time where it felt dark and quiet, but God was actually keeping you safe through it?',
          ],
        },
      ],
    },
    {
      title: 'Try This',
      blocks: [
        {
          kind: 'tryThis',
          title: 'Run from a wave',
          html:
            '<p>Get a kitchen sink or a bowl of water. Float a small toy or piece of paper as a &ldquo;boat.&rdquo; Now try to make a wave with your hand to push it across.</p>' +
            "<p>Try to outrun the wave. Try to push the boat away from your hand. You can&apos;t &mdash; the water always catches up to it.</p>" +
            "<p>That&apos;s a tiny picture of what Jonah found out: you can&apos;t outrun God. And the cool part is, you don&apos;t have to. He&apos;s the one who loves you most.</p>",
          supplies: ['Sink or bowl of water', 'A small floating toy or folded paper'],
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
            '<p>Thank You that I can&apos;t actually run away from You. Thank You that even when I make a wrong choice, You keep loving me.</p>' +
            '<p>Help me say yes to You today.</p>' +
            '<p>In Jesus&apos; name, amen.</p>',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Jonah 1',
    quote:
      "We&apos;re reading Jonah 1 with our family today &mdash; the storm, the great fish, and the God who chases the people He loves.",
    snippet: 'Family-friendly Bible study from Learn of Christ.',
    ref: 'Jonah 1 · Kids Study',
  },
};
