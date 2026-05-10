import type { KidsChapterContent } from './types';

/**
 * Daniel 6 — kids guide.
 *
 * Daniel in the lions' den. The eternal Sunday-school favorite. Story
 * shape: Daniel keeps praying even when it's against the rules → the
 * king is upset but trapped by his own decree → lions don't touch
 * Daniel → the king learns who the real God is. Memory verse is
 * Daniel 6:23 ("no kind of harm was found on him") for the punchline,
 * with the alternative of Daniel 6:26 (the king's decree).
 */
export const DANIEL_6_KIDS: KidsChapterContent = {
  bookSlug: 'daniel',
  bookName: 'Daniel',
  chapter: 6,
  ageBand: 'all',
  estimatedMinutes: 5,
  topicTags: ['courage', 'prayer', 'faithfulness'],

  intros: [
    'Daniel was an old man with a big job — and he kept praying even when it was illegal. His story is one of the bravest in the Bible.',
  ],

  sections: [
    {
      title: "Today's Story",
      blocks: [
        {
          kind: 'story',
          html:
            '<p>Daniel had been the king&apos;s most trusted helper for a long time. He was so good at his job that the king was about to put him in charge of <em>everything</em>. The other helpers did not like that one bit.</p>' +
            '<p>So they made a sneaky plan. They went to the king and said, &ldquo;Your majesty, you&apos;re so wonderful &mdash; let&apos;s make a new rule. For thirty days, nobody can pray to anyone except YOU. If they do, they go in the lions&apos; den.&rdquo; The king liked that idea, and he signed it.</p>' +
            '<p>Daniel went home. He went up to his room. He opened the window. And he got down on his knees and prayed to God, just like he did every single day.</p>' +
            '<p>The sneaky men were watching, and they ran straight to the king. &ldquo;Daniel is praying to God! Throw him to the lions!&rdquo; The king was sick about it. He had been tricked. He liked Daniel. But he had signed the rule, and he couldn&apos;t un-sign it.</p>' +
            '<p>So they took Daniel to the lions&apos; den. As they shut the door, the king called down, &ldquo;Daniel &mdash; may the God you serve rescue you!&rdquo;</p>' +
            '<p>The king couldn&apos;t sleep all night. At sunrise he ran to the den and shouted, &ldquo;Daniel? Are you there?&rdquo;</p>' +
            '<p>And Daniel called back, &ldquo;Your majesty, my God sent His angel and shut the lions&apos; mouths! They didn&apos;t hurt me at all.&rdquo;</p>' +
            '<p>The king was so happy he made a new rule for the whole kingdom: <em>Everyone needs to know about Daniel&apos;s God.</em></p>',
        },
        {
          kind: 'bigIdea',
          html:
            '<p>When you do what&apos;s right, even when it&apos;s scary, God is with you &mdash; and He is bigger than the things you&apos;re afraid of.</p>',
        },
      ],
    },
    {
      title: 'A Big Word',
      blocks: [
        {
          kind: 'keyWord',
          word: 'Faithful',
          meaning:
            'Doing what&apos;s right even when nobody&apos;s watching, and even when it&apos;s hard. Daniel kept praying every day, the same way, his whole life. That&apos;s being faithful.',
        },
      ],
    },
    {
      title: 'Memory Verse',
      blocks: [
        {
          kind: 'memoryVerse',
          verse: {
            ref: 'Daniel 6:23',
            text:
              "He hadn't been hurt in any way. That was because he had trusted in his God.",
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
            'Daniel knew the rule, and he opened his window and prayed anyway. What&apos;s something hard you might have to do because it&apos;s right, even when other people don&apos;t want you to?',
            'God didn&apos;t take the lions away &mdash; He made Daniel safe IN the den. When have you been scared and felt God with you anyway?',
            'The king couldn&apos;t sleep all night. Do you ever lie awake worried about something? What&apos;s one thing you could pray about tonight before bed?',
          ],
        },
      ],
    },
    {
      title: 'Try This',
      blocks: [
        {
          kind: 'tryThis',
          title: 'Open the window',
          html:
            '<p>Find a window in your house. Open it (or just stand right next to it).</p>' +
            '<p>That&apos;s what Daniel did three times a day, every day, his whole life. He prayed where he could be seen.</p>' +
            "<p>Right now, take a turn each &mdash; you and your grown-up &mdash; saying one short prayer out loud at the window. It can be a thank-you. It can be a please. Anything.</p>" +
            "<p>That&apos;s the same kind of prayer Daniel was praying when the lions didn&apos;t hurt him.</p>",
          supplies: ['A window'],
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
            '<p>Help me be brave like Daniel. Help me do what&apos;s right even when it&apos;s scary.</p>' +
            '<p>Thank You that You are bigger than every lion and every worry I&apos;ve got.</p>' +
            '<p>In Jesus&apos; name, amen.</p>',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Daniel 6',
    quote:
      "We&apos;re reading Daniel 6 with our family today &mdash; how God shut the lions&apos; mouths and kept Daniel safe.",
    snippet: 'Family-friendly Bible study from Learn of Christ.',
    ref: 'Daniel 6 · Kids Study',
  },
};
