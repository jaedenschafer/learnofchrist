import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Psalm 119 — The Love of God's Word
 *
 * The longest chapter in the Bible — 176 verses organized as 22 acrostic stanzas,
 * each of eight verses beginning with successive letters of the Hebrew alphabet.
 * A meditation on the goodness of God's word, law, statutes, precepts, commandments,
 * and testimonies. "Thy word is a lamp unto my feet, and a light unto my path."
 * "I have hidden thy word in mine heart, that I might not sin against thee."
 * Christ connection: Christ as the Living Word (John 1:14), the Word made flesh,
 * in whom all Scripture finds its fulfillment.
 */
export const PSALMS_119: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 119,

  intros: [
    'Psalm 119 stands apart in Scripture as a meditation of extraordinary length and depth on a single theme: the beauty, power, and life-giving nature of God&apos;s word. To read it is to enter the inner life of someone who has made God&apos;s word the center of his existence. Not as obligation, but as delight. "O how love I thy law! it is my meditation all the day." Each of the 22 stanzas takes up a fresh aspect of this love—the comfort found in God&apos;s statutes, the light found in His precepts, the strength found in His commandments. To study this psalm is to encounter a heart remade by Scripture.',
    'The eight-verse acrostic structure—each stanza beginning with the next letter of the Hebrew alphabet—suggests a kind of completeness, a mapping of the whole alphabet across the whole range of human experience. The psalmist is afflicted, pursued, forgotten by men, yet none of these conditions shakes his devotion to God&apos;s word. Instead, they drive him deeper into it. "Before I was afflicted I went astray: but now have I kept thy word." The word becomes his refuge, his counselor, his treasure, his light in darkness.',
  ],

  sections: [
    /* ─── Aleph–Gimel (vv. 1–24) — The Way of Perfection ──────────────────── */
    {
      ref: 'Psalm 119:1–24 (Aleph, Beth, Gimel)',
      title: 'The Blessedness of Walking in the Law',
      blocks: [
        {
          kind: 'scripture',
          chapter: 119,
          lines: [
            plain(1, 'Blessed are the undefiled in the way, who walk in the law of the Lord.'),
            plain(5, 'O that my ways were directed to keep thy statutes!'),
            plain(9, 'Wherewithal shall a young man cleanse his way? by taking heed thereto according to thy word.'),
            plain(11, 'Thy word have I hid in mine heart, that I might not sin against thee.'),
            plain(18, 'Open thou mine eyes, that I may behold wondrous things out of thy law.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps119-undefiled',
          html:
            'The opening word "Blessed" returns the reader to Psalm 1—blessed is the man who walks in God&apos;s law, turning away from ungodliness. But here the focus intensifies: the psalmist is not merely avoiding evil. He is actively choosing to hide God&apos;s word in his heart. To cleanse one&apos;s way is not a matter of external enforcement, but of internal transformation through God&apos;s word. The young man asks: how shall I keep my way pure? The answer: by treasuring God&apos;s word.',
        },
        {
          kind: 'commentary',
          id: 'ps119-lamp',
          html:
            'The image of hiding God&apos;s word in the heart recurs throughout this psalm. It is not merely memorization or intellectual assent. It is internalization—making God&apos;s word one&apos;s own thought, one&apos;s own counselor. "Thy word is a lamp unto my feet, and a light unto my path" (v.105). In darkness, when the way is unclear, when the psalmist cannot see far ahead, he has a light. Not to illuminate the whole landscape, but to show him the next step.',
        },
        {
          kind: 'hebrew',
          id: 'ps119-dabar',
          title: 'Dabar — "Word" (The Thing Spoken)',
          script: 'דָּבָר',
          translit: '<strong>Dabar</strong> · word; thing; matter; that which is spoken or established',
          description:
            'The Hebrew dabar means both "word" and "thing"—what is spoken has weight, substance, reality. God&apos;s word is not merely sound or advice. It is a thing with power, an utterance that accomplishes what it intends. To hide dabar in one&apos;s heart is to internalize reality itself, to align one&apos;s mind with the actual nature of things as God has spoken them.',
        },
      ],
    },

    /* ─── Daleth–Vav (vv. 25–48) — Comfort in Affliction ──────────────────── */
    {
      ref: 'Psalm 119:25–48 (Daleth, He, Vav)',
      title: 'My Soul Cleaveth unto the Dust',
      blocks: [
        {
          kind: 'scripture',
          chapter: 119,
          lines: [
            plain(25, 'My soul cleaveth unto the dust: quicken thou me according to thy word.'),
            plain(28, 'My soul melteth for heaviness: strengthen thou me according unto thy word.'),
            plain(37, 'Turn away mine eyes from beholding vanity; and quicken thou me in thy way.'),
            plain(40, 'Behold, I have longed after thy precepts: quicken me in thy righteousness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps119-cleave',
          html:
            'The psalmist does not hide his condition. His soul clings to the dust—he is brought low, near despair. Yet notice where he turns: not away from God, but toward Him. "Quicken thou me according to thy word"—a plea for life, for renewal, for resurrection. The word quicken appears repeatedly in this psalm. To be quickened is to be made alive, to be revived, to be restored to function and purpose. And that quickening comes through God&apos;s word, His precepts, His way.',
        },
        {
          kind: 'commentary',
          id: 'ps119-melt',
          html:
            'The image of melting—"my soul melteth for heaviness"—captures the experience of grief or overwhelming sorrow. The psalmist is not stoic. He does not pretend the suffering does not affect him. He feels the weight of it. Yet in that very moment of melting, he calls out: strengthen me according to thy word. The word of God becomes his stabilizer, his strength in the moment of weakness.',
        },
      ],
    },

    /* ─── Zayin–Tet (vv. 49–72) — Affliction and Remembrance ────────────── */
    {
      ref: 'Psalm 119:49–72 (Zayin, Het, Tet)',
      title: 'Remember the Word upon Which Thou Hast Caused Me to Hope',
      blocks: [
        {
          kind: 'scripture',
          chapter: 119,
          lines: [
            plain(50, 'This is my comfort in my affliction: for thy word hath quickened me.'),
            plain(52, 'I remembered thy judgments of old, O Lord; and have comforted myself.'),
            plain(71, 'It is good for me that I have been afflicted; that I might learn thy statutes.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps119-remember',
          html:
            'The psalmist shifts from his present affliction to remembrance. He recalls God&apos;s faithfulness in times past—His judgments of old. To remember is not merely to recollect facts. It is to call God&apos;s character back into the present moment. If God was faithful then, He remains faithful now. If His word quickened then, it will quicken now. Memory becomes a spiritual discipline.',
        },
        {
          kind: 'commentary',
          id: 'ps119-good-affliction',
          html:
            'And here, perhaps the most counterintuitive claim: "It is good for me that I have been afflicted; that I might learn thy statutes." Not that suffering is good in itself, but that God uses affliction as a teacher. It strips away illusions, focuses the mind, drives the soul toward God&apos;s word. The gold of God&apos;s law is more precious than gold, and affliction refines us as fire refines gold.',
        },
      ],
    },

    /* ─── Yod–Lamed (vv. 73–96) — Understanding and Faithfulness ──────────── */
    {
      ref: 'Psalm 119:73–96 (Yod, Kaph, Lamed)',
      title: 'Thy Hands Have Made Me and Fashioned Me',
      blocks: [
        {
          kind: 'scripture',
          chapter: 119,
          lines: [
            plain(73, 'Thy hands have made me and fashioned me: give me understanding, that I may learn thy commandments.'),
            plain(89, 'For ever, O Lord, thy word is settled in heaven.'),
            plain(93, 'I will never forget thy precepts: for with them thou hast quickened me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps119-hands',
          html:
            'The psalmist appeals to God as his maker. "Thy hands have made me and fashioned me"—therefore, give me understanding to know my purpose. The Creator who shaped the body also shapes the mind through His word. To learn God&apos;s commandments is to align oneself with the intention of one&apos;s Maker.',
        },
        {
          kind: 'commentary',
          id: 'ps119-settled',
          html:
            '"Thy word is settled in heaven"—while earthly kingdoms rise and fall, while human counsels shift and fail, God&apos;s word stands fixed in the heavens. It is immovable, eternal, secure. That word stands above circumstance, above the afflictions that buffet the psalmist, above the opposition of those who hate him. His confidence rests not on changing conditions, but on a word that is forever.',
        },
      ],
    },

    /* ─── Mem–Nun (vv. 97–120) — The Law as Teacher ────────────────────── */
    {
      ref: 'Psalm 119:97–120 (Mem, Nun)',
      title: 'O How I Love Thy Law!',
      blocks: [
        {
          kind: 'scripture',
          chapter: 119,
          lines: [
            plain(97, 'O how love I thy law! it is my meditation all the day.'),
            plain(99, 'I have more understanding than all my teachers: for thy testimonies are my meditation.'),
            plain(103, 'How sweet are thy words unto my taste! yea, sweeter than honey to my mouth!'),
            plain(105, 'Thy word is a lamp unto my feet, and a light unto my path.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps119-love',
          html:
            'The psalm reaches perhaps its most emotional declaration: "O how love I thy law! it is my meditation all the day." This is not dutiful obedience. This is love, delight, a turning of the entire self toward God&apos;s word as a lover turns toward the beloved. The law is no burden to be borne, but a treasure to be treasured. And the psalmist&apos;s meditation—his rolling over of God&apos;s word in his mind—becomes his constant companion, his inner life, his sustenance.',
        },
        {
          kind: 'commentary',
          id: 'ps119-sweeter',
          html:
            '"Sweeter than honey to my mouth"—God&apos;s word is not merely intellectually true. It is delightful to the whole self. It tastes good. It nourishes. It satisfies. The psalmist has found that obedience to God&apos;s law is not a grim duty, but a joy. The path of righteousness is not a barren desert, but a garden of delight.',
        },
        {
          kind: 'christ',
          id: 'ps119-christ-word',
          title: 'Christ Connection — The Word Made Flesh',
          html:
            'John 1:14 declares: "The Word was made flesh, and dwelt among us." The entire psalmist&apos;s meditation—his love of God&apos;s word, his hiding it in his heart, his feeding on it as though it were sweet to the taste—finds its ultimate fulfillment in Jesus Christ. He is the Word in person, the truth in embodied form, the light that guides into all truth, the wisdom of God expressed not in rules, but in a Person. To love Christ is to love the Word made flesh.',
        },
      ],
    },

    /* ─── Samekh–Tzade (vv. 121–144) — Hope and Deliverance ────────────── */
    {
      ref: 'Psalm 119:121–144 (Samekh, Ayin, Tzade)',
      title: 'I Have Done Judgment and Justice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 119,
          lines: [
            plain(125, 'I am thy servant; give me understanding, that I may know thy testimonies.'),
            plain(129, 'Thy testimonies are wonderful: therefore doth my soul keep them.'),
            plain(133, 'Order my steps in thy word: and let not any iniquity have dominion over me.'),
            plain(138, 'Thy righteousness also is everlasting, and thy law is the truth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps119-servant',
          html:
            'The psalmist identifies himself as God&apos;s servant. "I am thy servant; give me understanding." Servanthood here is not slavery or degradation, but alignment with purpose. A servant seeks to know the master&apos;s will and to do it. The psalmist asks God to order his steps according to His word, to keep iniquity from having dominion over him. He is asking to be guided, to be freed, to be made useful.',
        },
        {
          kind: 'commentary',
          id: 'ps119-wonderful',
          html:
            '"Thy testimonies are wonderful"—God&apos;s words are not merely accurate or helpful. They are wonderful—full of wonder, arousing awe and amazement. The more the psalmist studies them, the more his soul keeps them, guards them, holds fast to them. They do not diminish upon inspection. They reveal themselves as ever deeper, ever more true.',
        },
      ],
    },

    /* ─── Qoph–Tav (vv. 145–176) — Watchfulness and Praise ────────────────── */
    {
      ref: 'Psalm 119:145–176 (Qoph, Resh, Shin, Tav)',
      title: 'I Cry with My Whole Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 119,
          lines: [
            plain(145, 'I cry with my whole heart; hear me, O Lord: I will keep thy statutes.'),
            plain(147, 'I prevented the dawning of the morning, and cried: I hoped in thy word.'),
            plain(162, 'I rejoice at thy word, as one that findeth great spoil.'),
            plain(174, 'I have longed for thy salvation, O Lord; and thy law is my delight.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps119-whole-heart',
          html:
            'The psalm draws toward its close with an intensification of the psalmist&apos;s prayer. "I cry with my whole heart"—not half-heartedly, not with reservation, but with the totality of his being. He rises before dawn, unable to sleep for his longing for God&apos;s word. He hopes in it, rejoices in it, finds in it great treasure. The whole self—heart, mind, body, will—has been remade by God&apos;s word.',
        },
        {
          kind: 'commentary',
          id: 'ps119-final',
          html:
            'And the final verses return to the opening theme: "Let thy mercies come also unto me, O Lord, even thy salvation, according to thy word." The psalmist closes as he began—with thanksgiving for God&apos;s mercy and an appeal to God&apos;s word as the foundation of hope. The psalm is a complete circle, a complete alphabet, a complete meditation on how God&apos;s word remakes a human life from affliction to joy.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 119 asks: What if you loved God&apos;s word as the psalmist loved it? What if it was not an obligation but a treasure? What if hiding God&apos;s word in your heart—meditating on it, letting it shape your thoughts, your decisions, your way forward—became your deepest joy? The psalm does not promise that affliction will stop or that enemies will cease. But it promises that God&apos;s word is a lamp, a light, a sweetness, a guide, a quickening life in the midst of all difficulty.',
        },
        {
          kind: 'reflection',
          id: 'ps119-delight',
          prompt:
            'If you are honest, what do you love more than God&apos;s word? What thoughts dominate your meditation? What if you committed this week to hiding one verse from God&apos;s word in your heart—reading it, rolling it over in your mind, letting it reshape you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O how love I thy law! it is my meditation all the day. Thy word is a lamp unto my feet, and a light unto my path.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 119 · Study Guide',
  },

  hasHebrew: true,
};
