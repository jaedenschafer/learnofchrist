import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 50 — The True Offering
 *
 * God speaks: "Hear, O my people." "I will take no bullock out of thy house."
 * The psalmist describes a God unimpressed with external ritual. "Whoso offereth
 * praise glorifieth me." The true offering is thanksgiving, gratitude from the
 * heart. Hebrews 13:15: "By him therefore let us offer the sacrifice of praise
 * to God continually." The ultimate fulfillment in Christ.
 */
export const PSALMS_50: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 50,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Psalm 50 begins with a remarkable image: God is speaking. "The mighty God, even the Lord, hath spoken, and called the earth from the rising of the sun unto the going down thereof." God is calling the whole creation into judgment[res:bible-odyssey-covenant-psalms]. But His judgment is not about the external ritual that seems to dominate Israel&apos;s worship. It is about the heart. He says directly: "I will take no bullock out of thy house, nor he goats out of thy folds." This would have been shocking. The Temple system was built on sacrifice. Yet God declares that sacrifice without thanksgiving, sacrifice that masks an ungrateful heart, is worthless. What does He want? "Whoso offereth praise glorifieth me."',
    'The psalm is a call to transform worship from external ritual to internal reality. The true offering is not an animal on an altar. It is a grateful, thankful, praising heart. This echoes through Scripture and reaches its culmination in the New Testament, where Christ Himself becomes the final sacrifice, and believers are called to present themselves "a living sacrifice, holy, acceptable unto God, which is your reasonable service" (Romans 12:1). The psalm teaches that what God wants most is not our things, but ourselves.',
  ],

  sections: [
    {
      ref: 'Psalm 50:1–15',
      title: 'God Speaks Against Empty Sacrifice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 50,
          lines: [
            plain(1, 'The mighty God, even the Lord, hath spoken, and called the earth from the rising of the sun unto the going down thereof.'),
            plain(2, 'Out of Zion, the perfection of beauty, God hath shined.'),
            plain(7, 'Hear, O my people, and I will speak; O Israel, and I will testify against thee: I am God, even thy God.'),
            plain(8, 'I will not reprove thee for thy sacrifices or thy burnt offerings, to have been continually before me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-50-78mid-1',
          html:
            'God&apos;s gathering of His people for judgment transitions to judgment itself. The call to assemble becomes the call to hear[res:bibleodyssey-asaph].',
        },
        {
          kind: 'scripture',
          chapter: 50,
          lines: [
            plain(9, 'I will take no bullock out of thy house, nor he goats out of thy folds.'),
            plain(12, 'If I were hungry, I would not tell thee: for the world is mine, and the fulness thereof.'),
            plain(14, 'Offer unto God thanksgiving; and pay thy vows unto the most High:'),
            plain(15, 'And call upon me in the day of trouble: I will deliver thee, and thou shalt glorify me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms50-mighty-god',
          html:
            'God speaks—not in a whisper, not in a still small voice, but in majesty. "The mighty God, even the Lord, hath spoken, and called the earth from the rising of the sun unto the going down thereof." God is calling the entire creation. He is summoning all peoples from east to west. This is not a private oracle. This is a public declaration. And it comes "out of Zion, the perfection of beauty." God shines from His holy city, and the light of that holiness illumines all the earth.',
        },
        {
          kind: 'hebrew',
          id: 'psalms50-elohim',
          title: 'Elohim Adonai — "Mighty God, Even the Lord"',
          script: 'אֱלֹהִים אֲדֹנָי',
          translit: '<strong>El Adonai</strong> · God, sovereign Lord; the One with absolute power and authority',
          description:
            'El Adonai—the Mighty God, the Lord—is the full revelation of God&apos;s power and authority. When God speaks in this capacity, it is with absolute power and absolute righteousness.',
        },
        {
          kind: 'commentary',
          id: 'psalms50-reprove',
          html:
            '"I will not reprove thee for thy sacrifices or thy burnt offerings, to have been continually before me." This seems to soften the message—God is not condemning the people for offering sacrifices. But then the hammer falls: "I will take no bullock out of thy house, nor he goats out of thy folds."',
        },
        {
          kind: 'commentary',
          id: 'psalms50-hungry',
          html:
            '"If I were hungry, I would not tell thee: for the world is mine, and the fulness thereof." God is saying: do you think your sacrifice feeds me? Do you imagine I need your bullocks and goats? The entire world belongs to me. All the animals of the forest are mine. If I were hungry, I would not depend on your sacrifice. But I am not hungry. The question is not whether you have given me things. The question is whether your heart is aligned with mine.',
        },
        {
          kind: 'commentary',
          id: 'psalms50-thanksgiving',
          html:
            '"Offer unto God thanksgiving; and pay thy vows unto the most High." This is what God wants. Not animals, but gratitude. Not ritual, but the posture of a heart that recognizes His goodness, His power, His provision, and responds with praise. This is the true offering.',
        },
        {
          kind: 'reflection',
          id: 'psalms50-true-offering',
          prompt: 'What does it mean to offer thanksgiving as a sacrifice? When was the last time you recognized God&apos;s goodness and responded with genuine gratitude, not as a ritual, but as a pouring out of your heart?',
        },
      ],
    },

    {
      ref: 'Psalm 50:16–23',
      title: 'The Glory of Thanksgiving',
      blocks: [
        {
          kind: 'scripture',
          chapter: 50,
          lines: [
            plain(16, 'But unto the wicked God saith, What hast thou to do to declare my statutes, or that thou shouldest take my covenant[res:sefaria-psalms-50] in thy mouth?'),
            plain(17, 'Seeing thou hatest instruction, and castest my words behind thee.'),
            plain(21, 'These things hast thou done, and I kept silence; thou thoughtest that I was altogether such an one as thyself: but I will reprove thee, and set them in order before thine eyes.'),
            plain(22, 'Now consider this, ye that forget God, lest I tear you in pieces, and there be none to deliver.'),
            plain(23, 'Whoso offereth praise glorifieth me: and to him that ordereth his conversation aright will I shew the salvation of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms50-wicked',
          html:
            'God then turns to address the wicked—not those who fail to sacrifice perfectly, but those who speak God&apos;s words while living according to their own desires. "What hast thou to do to declare my statutes, or that thou shouldest take my covenant in thy mouth?" The hypocrisy is called out directly. You say the right words, but your life contradicts them. You speak of covenant while violating covenant.',
        },
        {
          kind: 'hebrew',
          id: 'psalms50-toda',
          title: 'Toda — "Praise" / "Thanksgiving"',
          script: 'תוֹדָה',
          translit: '<strong>Toda</strong> · praise; thanksgiving; a thank offering given with gladness',
          description:
            'Toda is not complaint. It is not obligation. It is the voluntary, joyful recognition of God&apos;s goodness. When someone offers toda, they are declaring: God, I have seen what You have done. I am grateful. I glorify Your name.',
        },
        {
          kind: 'commentary',
          id: 'psalms50-silence',
          html:
            '"These things hast thou done, and I kept silence." God has not immediately struck down the wicked. He has let them continue in their hypocrisy. "Thou thoughtest that I was altogether such an one as thyself." The wicked have imagined that God is like them—able to be deceived, indifferent to truth, willing to overlook evil if external forms are kept. But now the silence is broken. "I will reprove thee, and set them in order before thine eyes." The wicked will see their deeds enumerated, judged, exposed.',
        },
        {
          kind: 'commentary',
          id: 'psalms50-glorify',
          html:
            '"Whoso offereth praise glorifieth me: and to him that ordereth his conversation aright will I shew the salvation of God." The final word is not judgment but invitation. The one who offers praise—genuinely, from the heart—glorifies God. And the one who "ordereth his conversation aright"—who lives rightly, consistently, with integrity—will see God&apos;s salvation. Not as a reward for good behavior, but as the natural outcome of a life aligned with God.',
        },
        {
          kind: 'christ',
          id: 'psalms50-christ-praise',
          title: 'Christ Connection — The Sacrifice of Praise',
          html:
            'In Hebrews 13:15–16, the writer draws directly from this psalm: "By him therefore let us offer the sacrifice of praise to God continually, that is, the fruit of our lips giving thanks to his name. But to do good and to communicate forget not: for with such sacrifices God is well pleased." Christ is the One who has offered the ultimate sacrifice. His blood has been shed for us. And now, in response, we are called to offer what God has always wanted: praise, thanksgiving, a life ordered toward Him. This is the "sacrifice" of the new covenant. Not animals, but hearts transformed by Christ&apos;s love, overflowing with gratitude.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 50 calls us to honesty about worship. If your words are pious but your life is selfish, God is not impressed. If you mouth the right things while your heart remains unchanged, you are building nothing that lasts. But if you offer praise—genuine, joyful recognition of God&apos;s goodness—then you glorify Him. If you order your life toward Him, live with integrity, respond to His call, then you will see His salvation. The true offering is not what you bring to God in your hands. It is what you bring in your heart: a grateful, praising, transformed self.',
        },
        {
          kind: 'reflection',
          id: 'psalms50-salvation-order',
          prompt: 'What would it mean to "order your conversation aright"—to live in a way that matches your words of faith, that glorifies God not just in what you say but in how you live? What would need to change?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Whoso offereth praise glorifieth me: and to him that ordereth his conversation aright will I shew the salvation of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 50 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-50',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 50 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.50',
      description: 'Covenant lawsuit psalm with Jewish medieval interpretation.',
    },
    {
      id: 'bible-odyssey-covenant-psalms',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Covenant & Judgment Psalms',
      url: 'https://www.bibleodyssey.org/dictionary/psalms/',
      description: 'Psalms on God&apos;s covenantal lawsuit against false worship.',
    },
    {
      id: 'bibleodyssey-asaph',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Asaph and the Temple Singers',
      url: 'https://www.bibleodyssey.org/dictionary/asaph/',
      description: 'SBL entry on Asaph as appointed musician and the guild of singers responsible for these psalms.',
    },

  ],

  hasHebrew: true,
};
