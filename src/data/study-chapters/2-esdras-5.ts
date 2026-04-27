import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_5: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 5,

  intros: [
    'Ezra receives a vision of signs that accompany the end of the age. These are not mere catastrophes but divine markers—earth shaking, blood flowing, stars falling. They announce that the old order is coming to an end and a new creation approaches.',
    'The chapter speaks to suffering and confusion in the latter days. Yet embedded in the chaos are promises: God is not absent. He is active, preparing the way for His coming kingdom.',
  ],

  sections: [
    {
      ref: '2 Esdras 5:1–9',
      title: 'Signs of the End',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'And I saw in the vision, and behold, the wind did shake the foundations of the earth.'),
            plain(3, 'And the sun turned black, and the moon turned to blood.'),
            plain(4, 'And the stars fell down, and there was great confusion upon the earth.'),
            plain(8, 'And I said, What meaneth these signs? The Lord sendeth them to show the destruction that approacheth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras5-signs',
          html:
            'Cosmic upheaval signals the age&apos;s end. The earth shakes, the sun darkens, the moon turns to blood, stars fall. These images appear throughout Scripture as the divine breaking into human history. They mark judgment and renewal.',
        },
        {
          kind: 'hebrew',
          id: 'esdras5-otot',
          title: 'Otot—Signs',
          script: 'אוֹתוֹת',
          translit: '<strong>Otot</strong> · signs; wonders; miracles',
          description: 'Signs (otot) are acts of God visible to all, declaring His sovereignty over creation. They interrupt the ordinary to announce the extraordinary work of God.',
        },
        {
          kind: 'christ',
          id: 'esdras5-christ-end',
          title: 'Christ Connection—Signs Fulfilled',
          html:
            'Jesus spoke of these very signs preceding His return. The cosmic upheaval is not chaos but a prelude—the universe itself trembles at the approach of its Creator.',
        },
        {
          kind: 'carry',
          html:
            'In times of confusion, these visions remind us that chaos is not ultimate. God is writing a story toward renewal. What seems like destruction is the birth pangs of a new creation.',
        },
        {
          kind: 'reflection',
          id: 'esdras5-trembling',
          prompt: 'When the world shakes—personal, social, or spiritual upheaval—can you trust that God is moving toward a purpose beyond your understanding?',
        },
      ],
    },

    {
      ref: '2 Esdras 5:39–49',
      title: 'Mercy in Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(39, 'Behold, the days come, and the times shall be multiplied, and the world shall be filled with trouble.'),
            plain(42, 'Yet because of the mercy of the Lord, a few shall be saved.'),
            plain(45, 'They that remain shall see the salvation of the Lord, and the glory of His kingdom.'),
            plain(49, 'Repent, therefore, and turn from thy iniquity, for the mercy of God remaineth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras5-remnant',
          html:
            'As the vision darkens with warnings of tribulation, mercy breaks through. A remnant shall be saved. This is not because of their strength but because of God&apos;s compassion. The call to repentance is an invitation into that mercy.',
        },
        {
          kind: 'greek',
          id: 'esdras5-eleos',
          title: 'Eleos—Mercy',
          script: 'ἔλεος',
          translit: '<strong>Eleos</strong> · mercy; compassion; pity',
          description: 'Mercy (eleos) is not earned; it flows from the compassionate nature of God. Even in judgment, mercy remains available to those who turn.',
        },
        {
          kind: 'christ',
          id: 'esdras5-christ-mercy',
          title: 'Christ Connection—Mercy Made Flesh',
          html:
            'In Christ, God&apos;s mercy takes human form. Even as judgment approaches, He walks among us offering forgiveness. The call to repentance is the call to accept His mercy.',
        },
        {
          kind: 'carry',
          html:
            'These visions are not meant to paralyze but to awaken. They call you to repentance—not from terror but from love. Mercy remains. It is offered to those who will turn and receive it.',
        },
        {
          kind: 'reflection',
          id: 'esdras5-mercy',
          prompt: 'What would it mean for you to truly turn—to repent and accept the mercy God offers? What holds you back?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And the sun turned black, and the moon turned to blood. Yet because of the mercy of the Lord, a few shall be saved.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 5 · Study Guide',
  },

  hasHebrew: true,
};
