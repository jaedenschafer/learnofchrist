import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_8: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 8,

  intros: [
    'Ezra offers a prolonged prayer for mercy, wrestling with God&apos;s justice. Can a perfect God show mercy to an imperfect people? Can justice and mercy coexist? Yet in the dialogue, God promises: a remnant shall be preserved.',
    'The chapter teaches that prayer is not about changing God&apos;s nature but about alignment with it. Even in judgment, God&apos;s purpose is to preserve a people for Himself.',
  ],

  sections: [
    {
      ref: '2 Esdras 8:1–19',
      title: 'Ezra&apos;s Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'And Ezra said, O Lord, I beseech thee, have mercy upon thy people.'),
            plain(3, 'How long shall I cry unto thee, and thou hear me not?'),
            plain(5, 'Let not the sins of the people destroy them utterly.'),
            plain(9, 'For if there be no mercy, how shall they be saved?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras8-mercy',
          html:
            'Ezra&apos;s prayer is bold. He does not grovel but argues with God. He asks the hard question: without mercy, how can anyone be saved? This is the prayer of one who knows justice and cannot rest until mercy is acknowledged.',
        },
        {
          kind: 'hebrew',
          id: 'esdras8-rachamim',
          title: 'Rachamim—Mercy',
          script: 'רַחֲמִים',
          translit: '<strong>Rachamim</strong> · mercy; compassion; womb-love',
          description: 'Rachamim is not sentimental compassion but merciful justice—the tenderness of a mother for her children. It is God&apos;s deepest nature.',
        },
        {
          kind: 'christ',
          id: 'esdras8-christ-intercede',
          title: 'Christ Connection—The Intercessor',
          html:
            'Jesus stands before God as the perfect Intercessor, offering the prayer Ezra cannot. He does not ask for mercy but provides it—His own body and blood a covenant of grace.',
        },
        {
          kind: 'carry',
          html:
            'Bring your hard questions to God. Ask Him to show mercy. The prayer of honest seeking is not insult but the deepest form of faith. God invites you to wrestle with Him.',
        },
        {
          kind: 'reflection',
          id: 'esdras8-mercy-plea',
          prompt: 'What would you ask God for if you knew He would hear and respond? How does mercy fit into your understanding of justice?',
        },
      ],
    },

    {
      ref: '2 Esdras 8:31–36',
      title: 'The Promise of Remnant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(31, 'And the Lord said unto me, Many shall perish, yet many more shall be saved.'),
            plain(32, 'For the mercy of the Lord is sure, and His covenant shall not fail.'),
            plain(34, 'There remaineth a people chosen before the foundation of the world.'),
            plain(36, 'Them shall I preserve unto the day of salvation.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras8-remnant',
          html:
            'God&apos;s answer to Ezra&apos;s prayer: mercy is certain. A remnant—not many, but true—shall be saved. They are chosen before the foundation of the world, preserved until the day of salvation. Justice and mercy meet in this promise.',
        },
        {
          kind: 'greek',
          id: 'esdras8-leipo',
          title: 'Leipo—Remain',
          script: 'λείπω',
          translit: '<strong>Leipo</strong> · remain; be left behind; survive',
          description: 'A remnant leipo—remains, survives. God&apos;s judgment is real, yet His purpose always preserves a people through whom He works.',
        },
        {
          kind: 'christ',
          id: 'esdras8-christ-chosen',
          title: 'Christ Connection—Chosen in Him',
          html:
            'In Christ, you are chosen before the foundation of the world. His blood preserves you until the day of salvation. You are part of the remnant—kept by His faithfulness, not your own merit.',
        },
        {
          kind: 'carry',
          html:
            'You are preserved. Not because you earn it but because God&apos;s mercy is sure. This is the comfort at the heart of Ezra&apos;s prayer: mercy will not fail.',
        },
        {
          kind: 'reflection',
          id: 'esdras8-chosen',
          prompt: 'What does it mean to you that you were chosen before the foundation of the world? How does this affect your sense of identity and purpose?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Many shall perish, yet many more shall be saved. For the mercy of the Lord is sure, and His covenant shall not fail.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 8 · Study Guide',
  },

  hasHebrew: true,
};
