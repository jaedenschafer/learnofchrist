import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Proverbs 29 — Vision, Fear, and the Way Forward
 *
 * Where there is no vision, the people perish. The fear of man bringeth a
 * snare. This chapter teaches the necessity of purpose and the freedom that
 * comes from fearing only God, not the opinions of others.
 */
export const PROVERBS_29: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 29,

  estimatedMinutes: { 5: 1, 10: 2, 15: 3 },
  intros: [
    'Proverbs 29 begins with a crisis: where there is no vision, the people perish. Without a sense of ultimate purpose, without a grasp of what life is for, people drift and decay. The chapter also teaches that the fear of man is a snare—a trap that catches and holds you. But fear the Lord, and you are free. You are liberated from the endless competition for others&apos; approval.',
  ],

  sections: [
    {
      ref: 'Proverbs 29:18',
      title: 'Where Vision Fails, the People Perish',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(18, 'Where there is no vision, the people perish: but he that keepeth the law, happy is he.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov29-vision-perish',
          html:
            'Vision is not mere daydreaming. It is a sense of purpose, of direction, of what life is ultimately for. Where people have no vision—no sense of meaning or transcendent purpose—they perish. Not quickly, perhaps, but steadily, until what made them fully human has died away. They become mere functionaries, servants of appetite and circumstance.',
        },
        {
          kind: 'hebrew',
          id: 'prov29-hazon',
          title: 'Hazon — "Vision" (Revelation, Sight)',
          script: 'חָזוֹן',
          translit: '<strong>Hazon</strong> · vision; revelation; that which is seen by inner sight',
          description:
            'A hazon is not hallucination. It is a seeing—an apprehension of reality and purpose that goes beyond mere material facts. It is what the prophet sees when God reveals something true. In this verse, every person needs some such vision to sustain them.',
        },
        {
          kind: 'commentary',
          id: 'prov29-keep-law',
          html:
            'Those who keep the law—who live by a sense of transcendent purpose and value—find happiness. The law here represents the ordering of life according to God&apos;s intention. To keep it is to live in alignment with reality, with meaning, with what you are truly made for.',
        },
        {
          kind: 'christ',
          id: 'prov29-christ-vision',
          title: 'Christ Connection — The Vision Made Flesh',
          html:
            'Jesus came preaching the kingdom of God—a vision of reality fundamentally transformed by God&apos;s reign. He offered His disciples, and offers you, a vision of life lived in alignment with the Father&apos;s purpose. Without this vision, people perish. With it, they find the joy that nothing external can take away.',
        },
        {
          kind: 'carry',
          html:
            'Do you have a vision? A sense of purpose beyond mere survival or accumulation? Proverbs says your life depends on it.',
        },
        {
          kind: 'reflection',
          id: 'prov29-vision',
          prompt: 'What is your vision for your life? Does it transcend mere comfort and success? What would it take to discover it?',
        },
      ],
    },

    {
      ref: 'Proverbs 29:25',
      title: 'Freedom From the Fear of Man',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(25, 'The fear of man bringeth a snare: but whoso putteth his trust in the Lord shall be safe.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov29-fear-man',
          html:
            'To fear man—to be constantly aware of and concerned with others&apos; judgment—is to be caught in a snare. You cannot move freely. You are always watching, always calculating, always cautious. The opinions of others become your master, and you are enslaved to their moods and judgments.',
        },
        {
          kind: 'commentary',
          id: 'prov29-trust-lord',
          html:
            'But to put your trust in the Lord is to be safe. His judgment is just. His love is sure. His opinion of you does not shift with the wind. When you fear only Him, you are free to be yourself, to do what is right regardless of what others think, to move with the courage that only comes from trusting something greater than yourself.',
        },
        {
          kind: 'carry',
          html:
            'Who do you fear? Whose judgment controls you? Proverbs calls you out of that fear into trust in God, where alone you are truly safe.',
        },
        {
          kind: 'reflection',
          id: 'prov29-fear',
          prompt: 'From whose judgment are you most afraid? What would change if you placed your trust in God alone?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Where there is no vision, the people perish: but he that keepeth the law, happy is he.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 29 · Study Guide',
  },
};
