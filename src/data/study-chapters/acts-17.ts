import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const ACTS_17: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 17,

  intros: [
    'Paul travels to Berea, where the Jews "received the word with all readiness of mind, and searched the scriptures daily." He then goes to Athens, where he encounters Stoic and Epicurean philosophers. They mock him, calling him a "babbler." But Paul speaks on Mars Hill, proclaiming the unknown God to those who have sought Him: "In him we live, and move, and have our being." Some believe. Some mock. But the seed is sown.',
  ],

  sections: [
    {
      ref: 'Acts 17:1–15',
      title: 'Berea: The Searching Believers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(11, 'These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts17-berea',
          html: 'The Bereans are commended for their approach to the gospel. They receive Paul&apos;s words with readiness but also search the scriptures to verify what they hear. Belief and discernment go together.',
        },
        {
          kind: 'greek',
          id: 'acts17-eugenes',
          title: 'Eugenes — Noble',
          script: 'εὐγενής',
          translit: '<strong>Eugenes</strong> · noble; of noble birth; honest',
          description: 'The word suggests not social status but moral nobility—an openness to truth paired with diligence in seeking it.',
        },
        {
          kind: 'christ',
          id: 'acts17-christ-scripture',
          title: 'Christ Connection — Known Through Scripture',
          html: 'Jesus told the disciples that all Scripture bears witness to Him. The Bereans search Scripture to verify the gospel. They find Him in the law, the prophets, and the writings.',
        },
        {
          kind: 'carry',
          html: 'Many Berean believers are born from this combination of openness and diligent study. We are called to hear the word with readiness and examine Scripture with care.',
        },
        {
          kind: 'reflection',
          id: 'acts17-berea-reflect',
          prompt: 'How do you verify what you believe about Jesus through Scripture?',
        },
      ],
    },

    {
      ref: 'Acts 17:22–31',
      title: 'Mars Hill: The Unknown God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(23, 'For as I passed by, and beheld your devotions, I found an altar with this inscription, TO THE UNKNOWN GOD. Whom therefore ye ignorantly worship, him declare I unto you.'),
            plain(28, 'For in him we live, and move, and have our being; as certain also of your own poets have said, For we are also his offspring.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts17-unknown',
          html: 'Paul observes an altar dedicated to an unknown god. He seizes the moment to reveal what these Athenians seek but have not found: the living God who made all things.',
        },
        {
          kind: 'commentary',
          id: 'acts17-poets',
          html: 'Paul quotes pagan poets: "In him we live, and move, and have our being." He uses their own wisdom to point them toward the God they do not know. The gospel speaks the language of every culture.',
        },
        {
          kind: 'greek',
          id: 'acts17-zoon',
          title: 'Zoon — Living',
          script: 'ζῷον',
          translit: '<strong>Zoon</strong> · living; alive; a living being',
          description: 'God is living, active, present. Not an abstraction or philosophical principle, but the living God.',
        },
        {
          kind: 'christ',
          id: 'acts17-christ-athens',
          title: 'Christ Connection — The Word Made Known',
          html: 'Jesus is the self-revelation of the unknowable God. He came that all might know the Father. Paul on Mars Hill proclaims the God revealed in Christ to those who have sought Him without knowing His name.',
        },
        {
          kind: 'carry',
          html: 'Some mock. Some believe. But Paul has sown the seed in Athens. The gospel meets the city of human wisdom with the wisdom of God.',
        },
        {
          kind: 'reflection',
          id: 'acts17-unknown-reflect',
          prompt: 'Who are you still seeking without knowing you seek Jesus?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'In him we live, and move, and have our being.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 17 · Study Guide',
  },

  hasHebrew: false,
};
