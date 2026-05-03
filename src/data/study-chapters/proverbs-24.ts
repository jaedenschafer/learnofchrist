import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Proverbs 24 — Building Through Wisdom and Love for Enemies
 *
 * Through wisdom is an house builded. Rejoice not when thine enemy falleth.
 * The chapter teaches the power of wisdom in creating what endures, and calls
 * the reader to a love that transcends the natural impulse to gloat.
 */
export const PROVERBS_24: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 24,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Proverbs 24 celebrates what wisdom builds and warns against the small cruelties that diminish us. A house—a life, a legacy—is built not through luck or force, but through wisdom, understanding, and knowledge. And when your enemy falls, the natural human reaction is satisfaction, vindication, schadenfreude. But Proverbs calls for something higher: restraint, and even compassion.',
  ],

  sections: [
    {
      ref: 'Proverbs 24:3–4',
      title: 'Building a House Through Wisdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(3, 'Through wisdom is an house builded; and by understanding it is established:'),
            plain(4, 'And by knowledge shall the chambers be filled with all precious and pleasant riches.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov24-house-builded',
          html:
            'A house is not built by accident or by force. It is built through wisdom—the choice of a good location, sound architecture, durable materials. It is established through understanding—the knowledge of how things work, how to endure, how to stand. And through knowledge, the chambers are filled—not merely with shelter, but with riches, with everything that makes a life full and pleasant.',
        },
        {
          kind: 'commentary',
          id: 'prov24-precious',
          html:
            'The riches that fill the house of the wise are both precious and pleasant. They have value and they bring joy. This is not the anxious accumulation of wealth. This is the natural overflow of a life ordered by wisdom. The wise man is not poor. He builds, he fills his chambers, he enjoys the fruits of his understanding.',
        },
        {
          kind: 'carry',
          html:
            'What house are you building? Is your life, your home, your family built on the foundation of wisdom? Or are you building on something less stable?',
        },
        {
          kind: 'reflection',
          id: 'prov24-build',
          prompt: 'What would change in your life if you made every decision—large and small—according to wisdom rather than impulse?',
        },
      ],
    },

    {
      ref: 'Proverbs 24:17–18',
      title: 'Rejoice Not at an Enemy&apos;s Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(17, 'Rejoice not when thine enemy falleth, and let not thine heart be glad when he stumbleth:'),
            plain(18, 'Lest the Lord see it, and it displease him, and he turn away his wrath from him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov24-enemy-fall',
          html:
            'When your enemy falls, something in you wants to celebrate. You have been vindicated. Justice has been served. But Proverbs asks for restraint. Do not let your heart be glad. Why? Not primarily for the enemy&apos;s sake, but for your own. The gloating over another&apos;s fall diminishes you, darkens your own spirit.',
        },
        {
          kind: 'commentary',
          id: 'prov24-turn-wrath',
          html:
            'The verse suggests that your gloating may actually invoke God&apos;s attention in a way you do not want. To rejoice at an enemy&apos;s fall is to reveal something ugly in your own heart. It is to show that you are more interested in their pain than in justice. And the Lord may turn from His wrath toward the fallen and direct it instead toward the one who gloats.',
        },
        {
          kind: 'christ',
          id: 'prov24-christ-enemies',
          title: 'Christ Connection — Love Your Enemies',
          html:
            'Jesus taught, "Love your enemies, bless them that curse you, do good to them that hate you." This is not sentimental. It is the command to transcend the natural human impulse toward vindication and triumph. Christ&apos;s love extends even to those who crucified Him. This is the model for the Christian response to enemies.',
        },
        {
          kind: 'carry',
          html:
            'Who is your enemy? When you imagine their fall, does your heart leap with satisfaction? Proverbs calls you to a higher ground—to see their suffering without joy, and perhaps even to pity.',
        },
        {
          kind: 'reflection',
          id: 'prov24-enemy',
          prompt: 'Can you imagine truly not wanting your enemy to fall? What would that require of you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Through wisdom is an house builded; and by understanding it is established.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 24 · Study Guide',
  },
};
