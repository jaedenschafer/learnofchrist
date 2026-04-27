import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const HEBREWS_11: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 11,

  intros: [
    'Hebrews 11 is the hall of faith. Abel, Enoch, Noah, Abraham, Isaac, Jacob, Joseph, Moses, Rahab, Samson, David—and many unnamed—all lived and died in faith, not having received the promises, but having seen them afar off. They were persuaded of them and embraced them. They confessed themselves pilgrims and strangers on the earth, seeking a better country. Their faith is not blind. It is grounded in reality, even when that reality is invisible.',
    'The passage defines faith: "Now faith is the substance of things hoped for, the evidence of things not seen." Not wishful thinking. Not denial of reality. But the conviction that God&apos;s word is as solid as what you can touch.',
  ],

  sections: [
    {
      ref: 'Hebrews 11:1–29',
      title: 'The Definition and Examples of Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(1, 'Now faith is the substance of things hoped for, the evidence of things not seen.'),
            plain(3, 'Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which do appear.'),
            plain(6, 'But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.'),
            plain(8, 'By faith Abraham, when he was called to go out into a place which he should after receive for an inheritance, obeyed; and he went out, not knowing whither he went.'),
            plain(13, 'These all died in faith, not having received the promises, but having seen them afar off, and were persuaded of them, and embraced them, and confessed that they were strangers and pilgrims on the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb11-faith-definition',
          html:
            'Faith is not feeling. It is substance—something solid, something you can build on. It is evidence—something you can point to, even though it is unseen. Faith is the conviction that the invisible is as real as the visible.',
        },
        {
          kind: 'greek',
          id: 'heb11-hypostasis',
          title: 'Hypostasis — Substance, Essence',
          script: 'ὑπόστασις',
          translit: '<strong>Hypostasis</strong> · substance; essence; underlying reality',
          description:
            'Hypostasis is what stands under—the foundation. Faith is the foundation of things hoped for. When you hope for heaven, faith is the reality under that hope, making it more than a dream.',
        },
        {
          kind: 'commentary',
          id: 'heb11-rewarder',
          html:
            'God is both real and rewarding. He exists. And He rewards those who seek Him. Faith rests on both truths. He is not distant or indifferent. He is active, responsive, generous toward those who believe.',
        },
        {
          kind: 'christ',
          id: 'heb11-christ-faith',
          title: 'Christ Connection — The Author and Finisher',
          html:
            'Jesus is "the author and finisher of our faith." He begins faith in you. He sustains it. He completes it. Your faith is not your achievement. It is His work in you, from start to finish.',
        },
        {
          kind: 'carry',
          html:
            'Do you believe that God is? Do you believe He rewards those who seek Him? This is the foundation of faith. Build on it. Live as a pilgrim and stranger, knowing that a better country awaits.',
        },
        {
          kind: 'reflection',
          id: 'heb11-substance',
          prompt: 'What is the substance of your faith? Can you point to evidence of invisible realities that God has made real in your life?',
        },
      ],
    },

    {
      ref: 'Hebrews 11:39–40',
      title: 'Together Made Perfect',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(39, 'And these all, having obtained a good report through faith, received not the promise:'),
            plain(40, 'God having provided some better thing for us, that they without us should not be made perfect.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb11-without-promise',
          html:
            'The heroes of faith died without seeing the fulfillment they believed for. Yet their faith was not empty. Their hope was not mistaken. The promise came—in Christ. They are made perfect—with us, in the communion of saints.',
        },
        {
          kind: 'greek',
          id: 'heb11-teleioo-together',
          title: 'Teleioō — Made Perfect Together',
          script: 'τελειόω',
          translit: '<strong>Teleioō</strong> · to perfect; to complete; to make mature',
          description:
            'The faith of the ancients and our faith are connected. They believed forward. We believe back to what was accomplished. Together, we are perfected. The communion of saints is real.',
        },
        {
          kind: 'commentary',
          id: 'heb11-better-thing',
          html:
            'God provided something better—the direct knowledge of Christ, the reality of redemption, the fulfillment of all that was promised. We stand on the other side of the cross. The faith that was once future-oriented can now rest on accomplished reality.',
        },
        {
          kind: 'christ',
          id: 'heb11-christ-fulfills-all',
          title: 'Christ Connection — The Promise Fulfilled',
          html:
            'Jesus is the fulfillment of every promise. The faith of Abraham reaches to Him. The hope of David is found in Him. The expectation of all the ages is met in Him. You live in the time of fulfillment.',
        },
        {
          kind: 'carry',
          html:
            'You inherit their faith. You stand on their shoulders. Their perseverance speaks to you across centuries. Their hope is your hope. Their God is your God. Do not grow weary. Do not doubt. Hold fast.',
        },
        {
          kind: 'reflection',
          id: 'heb11-together',
          prompt: 'How do you connect with the "cloud of witnesses"? How does their faith strengthen yours?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Now faith is the substance of things hoped for, the evidence of things not seen. These all died in faith, not having received the promises, but having seen them afar off, and were persuaded of them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 11 · Study Guide',
  },

  hasHebrew: false,
};
