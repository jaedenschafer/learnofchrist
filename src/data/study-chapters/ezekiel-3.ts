import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 3 — Watchman and Sweet Scroll
 *
 * Ezekiel eats the scroll given to him, and it is sweet in his mouth. Yet he
 * is sent to speak to a stubborn people. His task is clarified: he is appointed
 * a watchman over Israel. If he sees danger and does not warn, their blood is
 * on his hands. If he warns and they do not listen, he is blameless. The
 * responsibility is clear and fearsome.
 */
export const EZEKIEL_3: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 3,

  intros: [
    'Ezekiel is commanded to eat the scroll, and he obeys. What he has been given to carry becomes part of him. Surprisingly, though the scroll is written with words of judgment and sorrow, it tastes sweet in his mouth. The sweetness is not the sweetness of easy truth, but the sweetness of wholeness, of being fully known and fully commissioned by God. Then the weight of responsibility settles upon him. He is appointed as a watchman. A watchman stands on the wall and sees enemies approaching. His duty is to sound the alarm. If he fails in this duty, the blood of those he fails to warn falls on him. Ezekiel is given a terrible calling, but also a clear one.',
  ],

  sections: [
    {
      ref: 'Ezekiel 3:1–3',
      title: 'The Sweet Scroll',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'Moreover he said unto me, Son of man, eat that thou findest; eat this roll, and go speak unto the house of Israel.'),
            plain(2, 'So I opened my mouth, and he caused me to eat that roll.'),
            plain(3, 'And he said unto me, Son of man, cause thy belly to be filled with this roll that I give thee. Then did I eat it; and it was in my mouth as honey for sweetness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk3-sweetness',
          html:
            'The scroll that Ezekiel eats tastes like honey. This is astonishing. The scroll contained lamentations, mourning, and woe. Yet when it becomes part of him, it is sweet. The sweetness is not in the message — which is indeed a message of judgment — but in the intimacy with God it represents. To be fully known, fully commissioned, fully trusted with God&apos;s word: this is sweet beyond measure, even when the word itself is sorrowful.',
        },
        {
          kind: 'carry',
          html:
            'When we receive God&apos;s word fully — not just hearing it but making it part of ourselves — we taste a sweetness that goes beyond the content of what we receive. It is the sweetness of being loved by God, of being trusted with His truth, of being part of His redemptive work in the world. The hardest truths can taste sweet when they come from a God we know and love.',
        },
        {
          kind: 'reflection',
          id: 'ezk3-bitter-sweet',
          prompt: 'Have you experienced a difficult truth from God that tasted sweet to you? What made the difficulty itself a source of deeper joy?',
        },
      ],
    },

    {
      ref: 'Ezekiel 3:16–21',
      title: 'Watchman on the Wall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(16, 'And it came to pass at the end of seven days, that the word of the Lord came unto me, saying,'),
            plain(17, 'Son of man, I have made thee a watchman unto the house of Israel: therefore hear the word at my mouth, and give them warning from me.'),
            plain(18, 'When I say unto the wicked, Thou shalt surely die; and thou givest him not warning, nor speakest to warn the wicked from his wicked way, to save his life; the same wicked man shall die in his iniquity; but his blood will I require at thine hand.'),
            plain(19, 'Yet if thou warn the wicked, and he turn not from his wickedness, nor from his wicked way, he shall die in his iniquity; but thou hast delivered thy soul.'),
            plain(20, 'Again, When a righteous man doth turn from his righteousness, and commit iniquity, and I lay a stumblingblock before him, he shall die: because thou hast not given him warning, he shall die in his sin, and his righteousness which he hath done shall not be remembered; but his blood will I require at thine hand.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk3-watchman-duty',
          html:
            'The watchman&apos;s responsibility is unsparing. If the wicked man faces death and the watchman does not warn him, the blood is on the watchman&apos;s hands. If the watchman warns and the wicked man refuses to turn, then the wicked man dies in his sin, but the watchman has discharged his duty. The responsibility is not for the outcome but for faithfulness in the warning. This is a solemn calling, but it is also a just one. The watchman is not responsible for what others choose. He is responsible only for whether he speaks.',
        },
        {
          kind: 'hebrew',
          id: 'ezk3-tsofeh',
          title: 'Tsofeh — "Watchman"',
          script: 'צוֹפֶה',
          translit: '<strong>Tsofeh</strong> · watchman; sentinel; one who sees and warns',
          description:
            'A watchman stands elevated, able to see what others cannot. His role is not to judge but to observe and warn. The watchman in ancient Israel stood on the wall surrounding the city, watching for enemies and sounding the alarm when danger approached. Ezekiel is appointed to this office in the spiritual realm — to stand and watch and warn the house of Israel.',
        },
        {
          kind: 'christ',
          id: 'ezk3-christ-warning',
          title: 'Christ Connection — The Warning Prophet',
          html:
            'Jesus came as the ultimate watchman. He saw the danger approaching — not merely military danger but the danger of hearts turned away from God. He warned Jerusalem: "How often would I have gathered thy children together...and ye would not." He stood at the wall of human destiny and sounded every alarm He could. Yet many refused to hear. His faithfulness was not in their response but in His unwavering proclamation of truth. We are called to follow Him in this watchman role.',
        },
        {
          kind: 'carry',
          html:
            'In our own time, we are each called to be watchmen — not with judgment, but with care. We see things others might miss. We have responsibilities to warn those we love when we see them heading toward danger. The weight is real. But so is the release: we are not responsible for whether they listen. We are responsible only for whether we speak.',
        },
        {
          kind: 'reflection',
          id: 'ezk3-who-warn',
          prompt: 'Who in your life needs a watchman — someone willing to speak a hard truth in love? What fear keeps you silent, and how might Ezekiel&apos;s commission change what you say?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: '"And it was in my mouth as honey for sweetness." — Ezekiel 3:3',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 3 · Study Guide',
  },

  hasHebrew: true,
};
