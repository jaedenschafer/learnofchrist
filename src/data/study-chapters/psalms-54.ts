import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const PSALMS_54: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 54,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'The Ziphites lived in the hills near Ziph, David&apos;s hometown. Twice they betrayed his location to Saul, hoping for reward. "There is David hiding himself with us in strong holds in the wood, in the hill of Hachilah, which is on the south of Jeshimon." These were his neighbors, his kinsmen, men who knew the land as he did. Yet they sold him to his enemy. The betrayal cut deep—not because it was unexpected, but because it came from those who should have stood with him.',
    'Psalm 54 is David&apos;s prayer in the midst of this betrayal. Remarkably, he does not curse the Ziphites. He does not raise his own sword in self-defense. Instead, he turns to God. "Behold, God is mine helper." This is the deep faith that distinguishes David throughout his life in hiding. He knows he is hunted. Yet he believes that God is his help, his shield, his defender.',
  ],

  sections: [
    {
      ref: 'Psalm 54:1–5',
      title: 'God My Helper',
      blocks: [
        {
          kind: 'scripture',
          chapter: 54,
          lines: [
            plain(1, 'Save me, O God, by thy name, and judge me by thy strength.'),
            plain(2, 'Hear my prayer, O God; give ear to the words of my mouth.'),
            plain(3, 'For strangers are risen up against me, and oppressors seek after my soul: they have not set God before them. Selah.'),
            plain(4, 'Behold, God is mine helper: the Lord is with them that uphold my soul.'),
            plain(5, 'He shall reward the evil unto mine enemies: cut them off in thy truth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms54-save-by-name',
          html: '"Save me, O God, by thy name, and judge me by thy strength." David appeals to God&apos;s name—His character, His nature, His revealed identity. He does not appeal on the basis of his own righteousness, but on the basis of God&apos;s name.',
        },
        {
          kind: 'hebrew',
          id: 'psalms54-elohim',
          title: 'Elohim — "God"',
          script: 'אֱלוֹהִים',
          translit: '<strong>Elohim</strong> · God; the name emphasizing power, judgment, transcendence',
          description: 'David uses Elohim, the generic name for God, rather than YHWH. Elohim emphasizes God&apos;s power, His role as judge, His transcendence.',
        },
        {
          kind: 'commentary',
          id: 'psalms54-strangers-oppressors',
          html: '"For strangers are risen up against me, and oppressors seek after my soul: they have not set God before them." The Ziphites are called strangers—foreign to David&apos;s true allegiance. And the key insight: "they have not set God before them." Their betrayal flows from godlessness.',
        },
        {
          kind: 'commentary',
          id: 'psalms54-helper-uphold',
          html: 'But David&apos;s confidence is unshaken: "Behold, God is mine helper: the Lord is with them that uphold my soul." God is not distant. God is his helper—actively engaged in his defense, his protection, his vindication.',
        },
        {
          kind: 'christ',
          id: 'psalms54-christ-helper',
          title: 'Christ Connection — The Helper Sent',
          html: 'Christ is called Helper. In John 14:16, Jesus promises His disciples: "I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever"—the Holy Spirit, the Helper. Christ Himself becomes the Helper, the one who upholds our souls, the one who stands with us in betrayal.',
        },
        {
          kind: 'carry',
          html: 'When we experience betrayal, our first instinct is often to strike back, to defend ourselves. David shows a different way. He turns not to his own strength, but to God&apos;s. He does not demand justice for himself. He asks God to judge.',
        },
        {
          kind: 'reflection',
          id: 'psalms54-who-helps',
          prompt: 'When you have been betrayed, to whom do you turn first? Can you practice, like David, committing your defense to God and trusting in His justice?',
        },
      ],
    },

    {
      ref: 'Psalm 54:6–7',
      title: 'I Will Offer Willingly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 54,
          lines: [
            plain(6, 'I will freely sacrifice unto thee: I will praise thy name, O Lord; for it is good.'),
            plain(7, 'For he hath delivered me out of all trouble: and mine eye hath seen his desire upon mine enemies.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms54-freely-sacrifice',
          html: '"I will freely sacrifice unto thee." The word "freely" is crucial. David does not offer sacrifice reluctantly. He offers it willingly, eagerly, out of gratitude.',
        },
        {
          kind: 'commentary',
          id: 'psalms54-praise-good',
          html: '"I will praise thy name, O Lord; for it is good." God&apos;s name is good. His character is good. His dealings are good, even when they pass through trial and suffering.',
        },
        {
          kind: 'commentary',
          id: 'psalms54-delivered-eye',
          html: '"For he hath delivered me out of all trouble." And finally, the assurance that passes through the psalmist&apos;s own experience: God has delivered him. The trials are real, but the deliverance is real too.',
        },
        {
          kind: 'carry',
          html: 'In the face of betrayal and opposition, the believer does not take up the sword for self-defense. Rather, he commits himself to God&apos;s care, trusts in God&apos;s justice, and waits for God&apos;s deliverance. When that deliverance comes, the response is gratitude and praise.',
        },
        {
          kind: 'reflection',
          id: 'psalms54-freely-praise',
          prompt: 'How might your response to betrayal or opposition change if you truly believed that God will deliver you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Behold, God is mine helper: the Lord is with them that uphold my soul.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 54 · Study Guide',
  },

  hasHebrew: true,
};
