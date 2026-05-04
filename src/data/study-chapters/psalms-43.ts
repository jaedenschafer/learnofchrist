import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 43 — Light and Truth
 *
 * "O send out thy light and thy truth: let them lead me." A short psalm of
 * longing for God&apos;s guidance. "Why art thou cast down, O my soul?" echoes
 * from Psalm 42. Christ is the Light (John 8:12) and the Truth (John 14:6),
 * the one who leads His people out of darkness into clarity.
 */
export const PSALMS_43: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 43,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  opener: {
    matchTitle: /Harley Psalter fol v/i,
    caption: 'Psalms 43',
  },
  intros: [
    'Psalm 43 is brief—a single, focused plea. David is still in the position of the previous psalm: cast down, separated from the presence of God, surrounded by enemies. But his request in this psalm is clear and specific: "O send out thy light and thy truth: let them lead me." He is not asking God to destroy his enemies or to vindicate him before them. He is asking God to send light and truth. To illumine his path. To guide him to God&apos;s holy hill, to his tabernacles.',
    'The psalm is a prayer for clarity. For the dispelling of confusion. For guidance that comes not from human wisdom or strategy, but from the very attributes of God Himself—His light and His truth. And in the darkness of doubt and despair, light becomes not merely a metaphor but a necessity. Without it, the path cannot be seen. Without truth, the path cannot be trusted. In Christ, both light and truth are offered.',
  ],

  sections: [
    {
      ref: 'Psalm 43:1–5',
      title: 'Light, Truth, and Guidance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 43,
          lines: [
            plain(1, 'Judge me, O God, and plead my cause against an ungodly nation: O deliver me from the deceitful and unjust man.'),
            plain(2, 'For thou art the God of my strength: why dost thou cast me off? why go I mourning because of the oppression of the enemy?'),
            plain(3, 'O send out thy light and thy truth: let them lead me: let them bring me unto thy holy hill, and to thy tabernacles.'),
            plain(4, 'Then will I go unto the altar of God, unto God my exceeding joy: yea, upon the harp will I praise thee, O God my God.'),
            plain(5, 'Why art thou cast down, O my soul? and why art thou disquieted within me? hope thou in God: for I shall yet praise him, who is the health of my countenance, and my God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms43-judge',
          html:
            'David begins with a plea for God to judge—to plead his cause against those who oppose him. Yet notice that he appeals to God, not to his enemies. The judgment[res:sefaria-psalms-43] he seeks is God&apos;s judgment, the vindication that comes from truth, not from the defeat of his opponents. He wants to be delivered from the deceitful and unjust man—not destroyed by him, but freed from his power[res:bibleodyssey-korah-singers].',
        },
        {
          kind: 'commentary',
          id: 'psalms43-strength',
          html:
            'The question then becomes poignant: "For thou art the God of my strength: why dost thou cast me off?" He knows God is his strength. Yet he feels cast off. This is not denial of God&apos;s power or goodness. This is the complaint of one who has been promised God&apos;s strength but who feels abandoned by it. The prayer holds the tension between faith and doubt.',
        },
        {
          kind: 'hebrew',
          id: 'psalms43-or-emet',
          title: 'Or v&apos;Emet — "Light and Truth"',
          script: 'אוֹר וֶאֱמֶת',
          translit: '<strong>Or v&apos;Emet</strong> · light and truth; illumination and reality',
          description:
            'Light (or) is illumination, clarity, the dispelling of darkness. Truth (emet) is reality as it truly is, the solid ground beneath the foot. Together, they describe what the psalmist needs: not comfort alone, not vindication alone, but clarity to see what is really true, and the guidance to walk the true path.',
        },
        {
          kind: 'commentary',
          id: 'psalms43-holy-hill',
          html:
            '"Let them lead me: let them bring me unto thy holy hill, and to thy tabernacles." Light and truth have a destination. They lead to God&apos;s holy hill, to the place where His presence dwells. They are not abstract concepts but active guides, shepherding the psalmist toward God&apos;s dwelling place. And once there, once he has arrived, he will go to the altar—the place of offering, of covenant, of sacrifice.',
        },
        {
          kind: 'commentary',
          id: 'psalms43-harp',
          html:
            'The arrival transforms everything. Once he reaches the holy hill, he will worship: "Then will I go unto the altar of God, unto God my exceeding joy: yea, upon the harp will I praise thee." This is not forced praise. God is his "exceeding joy." The harp will ring. Not because circumstances have changed, but because he has arrived where God dwells, and in that arrival, joy becomes possible again.',
        },
        {
          kind: 'christ',
          id: 'psalms43-christ-light-truth',
          title: 'Christ Connection — The Light and the Truth',
          html:
            'In John 8:12, Jesus declares: "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life." And in John 14:6, He says: "I am the way, the truth, and the life." Jesus embodies both the light and the truth that Psalm 43 requests. To follow Christ is to be guided by light—clarity about who God is and what He has done. To follow Christ is to walk in truth—aligned with reality, not delusion. And following Christ leads to the true altar, to the place of God&apos;s presence, to joy in God&apos;s dwelling place.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 43 teaches that in the face of oppression, deceit, and darkness, what we need most is clarity. Not to understand everything, but to know which way is true. To see the path that leads to God. And once we follow that path—guided by light and truth—we arrive at a place of joy, of worship, of the recovery of what was lost. The harp will ring again. Joy will return. Not because the enemies disappear, but because we have found our way home.',
        },
        {
          kind: 'reflection',
          id: 'psalms43-light-guidance',
          prompt: 'When you feel lost in darkness or confusion, what would it mean to ask God not for all the answers, but simply for light and truth to guide your next step? Can you trust that following that guidance will eventually lead you to joy?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O send out thy light and thy truth: let them lead me: let them bring me unto thy holy hill, and to thy tabernacles.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 43 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-43',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 43 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.43',
      description: 'Prayer for deliverance with medieval Jewish exegesis.',
    },
    {
      id: 'bibleodyssey-korah-singers',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Sons of Korah',
      url: 'https://www.bibleodyssey.org/dictionary/korah/',
      description: 'SBL entry on the Korahite guild of temple singers and the psalms attributed to them.',
    },

  ],

  hasHebrew: true,
};
