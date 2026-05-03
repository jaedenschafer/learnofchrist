import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Malachi 4 — The Sun of Righteousness and the Coming of Elijah
 */
export const MALACHI_4: RichChapterContent = {
  bookSlug: 'malachi',
  bookName: 'Malachi',
  chapter: 4,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Malachi closes with the final words of the Old Testament. Christ is promised as the Sun of Righteousness, rising with healing in His wings. And the prophet Elijah is promised to come before the great and dreadful day of the Lord—a promise fulfilled in John the Baptist. The book ends in hope: God has not abandoned His people. The Messiah is coming. The healing and redemption of all things awaits.',
  ],

  sections: [
    {
      ref: 'Malachi 4:1–3',
      title: 'The Sun of Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'For, behold, the day cometh, that shall burn as an oven; and all the proud, yea, and all that do wickedly, shall be stubble: and the day that cometh shall burn them up, saith the Lord of hosts, that it shall leave them neither root nor branch.'),
            plain(2, 'But unto you that fear my name shall the Sun of righteousness arise with healing in his wings; and ye shall go forth, and grow up as calves of the stall.'),
            plain(3, 'And ye shall tread down the wicked; for they shall be ashes under the soles of your feet in the day that I shall do this, saith the Lord of hosts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'malachi4-sun',
          html: 'Malachi speaks of a day that will burn like an oven. The proud and the wicked will be consumed like stubble. But for those who fear God&apos;s name, the Sun of Righteousness will rise with healing in His wings. This is Christ—the Sun whose rays bring warmth, light, and healing. Those who fear God will grow up strong, like well-fed cattle. They will triumph over the wicked. The vision balances judgment on the ungodly with blessing on the faithful.',
        },
        {
          kind: 'hebrew',
          id: 'malachi4-shemesh',
          title: 'Shemesh Tzedaka — "Sun of Righteousness"',
          script: 'שמש צדקה',
          translit: '<strong>Shemesh Tzedaka</strong> · sun of righteousness; the light of God&apos;s justice and healing',
          description: 'The sun brings light and healing. Christ is the Sun—the source of light, warmth, and healing for all who come to Him.',
        },
        {
          kind: 'christ',
          id: 'malachi4-christ-sun',
          title: 'Christ Connection — The Sun of Righteousness',
          html: 'Christ is the Sun of Righteousness. "I am the light of the world," He declares. His healing is not merely physical but spiritual—restoration to right relationship with God. His wings of healing encompass all who believe, bringing wholeness and redemption.',
        },
        {
          kind: 'carry',
          html: 'When darkness surrounds you and the world seems consumed by wickedness, remember the Sun of Righteousness. Its light will break through. Its healing is available to you. As you fear God and remain faithful, you will grow strong and ultimately triumph.',
        },
        {
          kind: 'reflection',
          id: 'malachi4-reflect-sun',
          prompt: 'What areas of your life need healing? How does the image of the Sun of Righteousness rising with healing in His wings speak to that need?',
        },
      ],
    },

    {
      ref: 'Malachi 4:4–6',
      title: 'Remember the Law and Expect Elijah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(4, 'Remember ye the law of Moses my servant, which I commanded unto him in Horeb for all Israel, with the statutes and judgments.'),
            plain(5, 'Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the Lord:'),
            plain(6, 'And he shall turn the heart of the fathers to the children, and the heart of the children to their fathers, lest I come and smite the earth with a curse.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'malachi4-moses',
          html: 'The Old Testament closes by pointing backward to Moses and forward to Elijah. Israel is to remember the law given at Sinai—the statutes and judgments that bind them to God. This is not a call to legalism but to covenant faithfulness. Then comes the promise of Elijah—the one who will restore broken relationships between fathers and children, preparing the way for the Lord&apos;s coming.',
        },
        {
          kind: 'commentary',
          id: 'malachi4-elijah',
          html: 'John the Baptist comes in the spirit and power of Elijah, calling Israel to repentance and preparing for Christ&apos;s coming. The promise of Elijah restoring the hearts of fathers and children points to reconciliation—not just family reconciliation but reconciliation between God and His people, between the old covenant and the new.',
        },
        {
          kind: 'hebrew',
          id: 'malachi4-eliyahu',
          title: 'Eliyahu — "Elijah"',
          script: 'אליהו',
          translit: '<strong>Eliyahu</strong> · Elijah; "my God is Yahweh"',
          description: 'Elijah was the great prophet who called Israel back to God. The promise of his return (or one in his spirit) is a promise that the prophetic voice calling people to faithfulness will not be silenced.',
        },
        {
          kind: 'christ',
          id: 'malachi4-christ-prepare',
          title: 'Christ Connection — The Forerunner and the Lord',
          html: 'John the Baptist is the forerunner, the Elijah figure who prepares for Christ. Christ Himself comes not to curse but to redeem. His coming is great and dreadful—judgment on sin, but mercy for those who repent and believe.',
        },
        {
          kind: 'carry',
          html: 'The Old Testament ends with a call to remember the law and to prepare for Christ&apos;s coming. You are called to the same faithfulness Israel was called to—obedience rooted in love, hearts turned toward God and toward one another. The promise is that God will send messengers to call you back. Listen when they come.',
        },
        {
          kind: 'reflection',
          id: 'malachi4-reflect-prepare',
          prompt: 'How are you preparing your heart for Christ&apos;s return? What "broken relationships" in your life—with God, with family, with others—need reconciliation before He comes?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'But unto you that fear my name shall the Sun of righteousness arise with healing in his wings...Behold, I will send you Elijah the prophet.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Malachi 4 · Study Guide',
  },

  hasHebrew: true,
};
