import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 37 — The Thunder Speaks
 *
 * Elihu concludes his speech by pointing to the natural world. Thunder, snow, rain,
 * wind—all come from God. All display God&apos;s power and wisdom. "Hearken unto this,
 * O Job: stand still, and consider the wondrous works of God." The creation itself is
 * a revelation of God. To stand in awe before it is to stand in awe before God.
 */
export const JOB_37: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 37,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 5 },
  intros: [
    'Elihu&apos;s final speech moves from abstract theology to the natural world. He points to the storm, to thunder and snow and rain, to the intricate balance of nature. All of this, he argues, comes from God and reflects God&apos;s power and wisdom. The creation itself is a teacher. If Job would only stand still and listen, the works of God would instruct him.',
  ],

  bottomShare: {
    quote:
      '"Hearken unto this, O Job: stand still, and consider the wondrous works of God." The creation speaks if we will but listen.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 37 · Study Guide',
  },

  sections: [
    /* ─── Job 37:1–13 — The Storm, God&apos;s Voice ─────────────────────── */
    {
      ref: 'Job 37:1–13',
      title: 'The Thunder Declares His Praise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 37,
          lines: [
            plain(1, 'At this also my heart trembleth, and is moved out of his place.'),
            plain(2, 'Hear attentively the noise of his voice, and the sound that goeth out of his mouth.'),
            plain(3, 'He directeth it under the whole heaven, and his lightning unto the ends of the earth.'),
            plain(4, 'After it a voice roareth: he thundereth with the voice of his excellency; and he will not stay them when his voice is heard.'),
            plain(5, 'God thundereth marvellously with his voice; great things doeth he, which we cannot comprehend.'),
            plain(6, 'For he saith to the snow, Be thou on the earth; likewise to the small rain, and to the great rain of his strength.'),
            plain(7, 'He sealeth up the hand of every man; that all men may know his work.'),
            plain(8, 'Then the beasts go into dens, and remain in their places.'),
            plain(9, 'Out of the south cometh the whirlwind: and cold out of the north.'),
            plain(10, 'By the breath of God frost is given: and the breadth of the waters is straitened.'),
            plain(11, 'Also by watering he wearieth the thick cloud: he scattereth his bright cloud:'),
            plain(12, 'And it is turned round about by his counsels: that they may do whatsoever he commandeth them upon the face of the whole world.'),
            plain(13, 'He causeth it to come, whether for correction, or for his land, or for mercy.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job37-thunder',
          html:
            'Elihu himself trembles as he speaks of the thunder. This is not fear alone but awe, reverence, wonder. The thunder is the voice of God. It goes out from God&apos;s mouth. It reaches to the ends of the earth. It is power beyond human comprehension. When you hear thunder, you are hearing God speak.',
        },
        {
          kind: 'commentary',
          id: 'job37-seal-up-hand',
          html:
            '"He sealeth up the hand of every man"—when the storm comes, human work stops. The fields cannot be worked. The building cannot continue. God brings all human activity to a halt and says, in effect: Listen. Observe. Know my work. The storm is God&apos;s way of commanding human attention.',
        },
        {
          kind: 'hebrew',
          id: 'job37-kol',
          title: 'Kol — Voice or Sound',
          script: 'קוֹל',
          translit: '<strong>Kol</strong> · voice; sound; word; what is heard and must be heeded',
          description:
            'God&apos;s kol is not merely noise. It is communication that demands response. When God&apos;s voice is heard in the thunder, all creation responds. The beasts go into their dens. The clouds turn. The rain falls. Everything obeys the kol of God.',
        },
        {
          kind: 'carry',
          html:
            'Elihu is saying to Job: You want to hear from God? Listen to the thunder. You want to understand God&apos;s ways? Observe the storm. The creation is alive with God&apos;s voice. If you will stand still instead of arguing, you will hear it.',
        },
        {
          kind: 'reflection',
          id: 'job37-thunder-listen',
          prompt:
            'When you encounter the raw power of nature, what do you feel? Does it connect you to something larger than yourself? What might God be saying through creation?',
        },
      ],
    },

    /* ─── Job 37:14–24 — Stand Still and Consider ──────────────────────── */
    {
      ref: 'Job 37:14–24',
      title: 'The Wondrous Works of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 37,
          lines: [
            plain(14, 'Hearken unto this, O Job: stand still, and consider the wondrous works of God.'),
            plain(15, 'Dost thou know when God disposed them, and caused the light of his cloud to shine?'),
            plain(16, 'Dost thou know the balancings of the clouds, the wondrous works of him which is perfect in knowledge?'),
            plain(17, 'How thy garments are warm, when he quieteth the earth by the south wind?'),
            plain(18, 'Hast thou with him spread out the sky, which is strong, and as a molten looking glass?'),
            plain(19, 'Teach us what we shall say unto him; for we cannot order our speech by reason of darkness.'),
            plain(20, 'Shall it be told him that I speak? if a man speak, surely he shall be swallowed up.'),
            plain(21, 'And now men see not the bright light which is in the clouds: but the wind passeth, and cleanseth them.'),
            plain(22, 'Fair weather cometh out of the north: with God is terrible majesty.'),
            plain(23, 'Touching the Almighty, we cannot find him out: he is excellent in power, and in judgment, and in plenty of justice: he will not afflict.'),
            plain(24, 'Therefore men do fear him: he respecteth not any that are wise of heart.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job37-stand-still',
          html:
            'The command: "Stand still, and consider the wondrous works of God." Not argue. Not defend yourself. Not demand explanations. Stand still. Stop your activity. Stop your chatter. And simply observe what God has made. The creation is a text. If you will read it, it will teach you.',
        },
        {
          kind: 'commentary',
          id: 'job37-cannot-order-speech',
          html:
            '"We cannot order our speech by reason of darkness." Elihu admits that in the face of God&apos;s majesty, words fail. The proper response to such power is not eloquence but silence. "If a man speak, surely he shall be swallowed up"—speech in the presence of the infinite becomes insignificant.',
        },
        {
          kind: 'commentary',
          id: 'job37-wise-of-heart',
          html:
            '"He respecteth not any that are wise of heart"—this is not anti-intellectual. It is a reminder that human cleverness does not impress God. What impresses God is reverence, awe, fear in the sense of trembling respect. The wise of heart—those who trust in their own wisdom—will not be respected. Those who fear God will be.',
        },
        {
          kind: 'hebrew',
          id: 'job37-yara',
          title: 'Yara — Fear or Reverence',
          script: 'יָרְא',
          translit: '<strong>Yara</strong> · fear; reverence; the awe that silences speech and opens the heart',
          description:
            'To fear God is to be silenced by God&apos;s greatness, to be opened to God&apos;s instruction, to stand in reverent awe. This fear is the beginning of wisdom (Proverbs 1:7). It is not cowering in terror. It is standing still before majesty.',
        },
        {
          kind: 'christ',
          id: 'job37-christ-still',
          title: 'Christ Connection — Stilling Our Hearts',
          html:
            'The psalmist writes (Psalm 46:10): "Be still, and know that I am God." In the midst of the noise and chaos of the world, God calls us to stillness. And in stillness, we know—not as information, but as encounter. Christ embodies this perfect stillness before God. In the garden, He prays and becomes still, surrendering to the Father&apos;s will. On the cross, He is silent. Through His stillness, through His surrender, through His willingness not to speak or defend Himself, He reveals what human submission to God looks like. The cross is the point where all words fail and only silence—only presence—speaks.',
        },
        {
          kind: 'carry',
          html:
            'Elihu&apos;s final message to Job is simple: Stop talking. Stand still. Look around you. The works of God are wondrous beyond measure. Your understanding is too small to contain them. Your words are too feeble to address them. But your silence—your awe-struck silence—is the only adequate response. In that silence, God will speak.',
        },
        {
          kind: 'reflection',
          id: 'job37-stillness',
          prompt:
            'When was the last time you were still enough to simply observe and listen? What happens in you when you stop defending yourself and stand before God in silence?',
        },
      ],
    },
  ],
};
