import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Lamentations 2 — The Lord's Anger
 *
 * If Lamentations 1 gives voice to Jerusalem's grief, Lamentations 2 speaks of
 * God's anger itself. "The Lord hath cast off his altar, he hath abhorred his
 * sanctuary." God Himself has brought the destruction, and the fact that it is
 * God's hand that strikes makes the wound deeper. Yet even here, in the midst of
 * describing divine judgment, there is a call to bring pain to God.
 */
export const LAMENTATIONS_2: RichChapterContent = {
  bookSlug: 'lamentations',
  bookName: 'Lamentations',
  chapter: 2,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Lamentations 2 shifts focus from Jerusalem&apos;s voice to God&apos;s role in the destruction. The chapter is unflinching in its attribution: it is God who has destroyed Jerusalem. "How hath the Lord covered the daughter of Zion with a cloud in his anger, and cast down from heaven unto the earth the beauty of Israel!" God does not merely allow the destruction. God actively brings it about. The temple He inhabited is profaned. His altar is cast down. His people are scattered.',
    'The chapter is difficult because it holds two truths together: God is righteous in His judgment, and the destruction is unbearable in its totality. There is no refuge. The prophets have no vision from the Lord. The priests have no knowledge of His will. The people are left in absolute desolation. Yet even in this darkness, the poet calls to the reader to bring their tears and their cries to God. "Arise, cry out in the night: pour out thine heart like water before the face of the Lord."',
  ],

  sections: [
    /* ─── Lamentations 2:1–12 — The Anger Made Manifest ──────────────── */
    {
      ref: 'Lamentations 2:1–12',
      title: 'God&apos;s Judgment Unleashed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'How hath the Lord covered the daughter of Zion with a cloud in his anger, and cast down from heaven unto the earth the beauty of Israel, and remembered not his footstool in the day of his anger!'),
            plain(5, 'The Lord was as an enemy: he hath swallowed up Israel, he hath swallowed up all her palaces: he hath destroyed his strong holds, and hath increased the mourning and lamentation in the daughter of Judah.'),
            plain(8, 'The Lord hath purposed to destroy the wall of the daughter of Zion: he hath stretched out a line, he hath not withdrawn his hand from destroying: therefore he made the rampart and the wall to lament; they languished together.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'lam2-covered-cloud',
          html:
            'The opening image is of God covering Jerusalem with a cloud—not a cloud of protection, but of anger. God has cast down the beauty of Israel from heaven to earth. The "footstool" refers to the temple, where God&apos;s presence dwelt. God has forgotten even His own sanctuary in His anger. The implication is that nothing is beyond the reach of divine judgment.',
        },
        {
          kind: 'commentary',
          id: 'lam2-enemy',
          html:
            'God is described as an enemy: "The Lord was as an enemy: he hath swallowed up Israel." The word "as" is crucial—this is how God appears in the moment of judgment. This is not God abandoned His people. This is God actively turning against them. God has swallowed up their palaces, destroyed their strongholds, increased their mourning. All of this is attributed directly to God.',
        },
        {
          kind: 'commentary',
          id: 'lam2-purposed',
          html:
            'God has "purposed to destroy the wall." It is not random. It is not accidental. It is God&apos;s intention, God&apos;s deliberate plan. "He hath not withdrawn his hand from destroying." God&apos;s hand remains extended in judgment. The ramparts and walls, the physical defenses of Jerusalem, are made to lament. They languish. They fall silent. The entire city has become a monument to God&apos;s judgment.',
        },
        {
          kind: 'carry',
          html:
            'This passage presents a hard truth: sometimes our suffering is not accidental or circumstantial. Sometimes it is directly the result of God&apos;s judgment on our sin. The call is not to blame God or rebel against Him, but to receive the judgment, acknowledge the sin that prompted it, and turn.',
        },
        {
          kind: 'reflection',
          id: 'lam2-judgment-why',
          prompt: 'Is there an area of your life where God&apos;s judgment seems evident? Can you acknowledge both God&apos;s righteousness in that judgment and your own pain?',
        },
      ],
    },

    /* ─── Lamentations 2:13–22 — A Call to Lament ──────────────────── */
    {
      ref: 'Lamentations 2:13–22',
      title: 'Lamentation Without Despair',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(18, 'Their heart cried unto the Lord, O wall of the daughter of Zion, let tears run down like a river day and night: give thyself no rest; let not the apple of thine eye cease.'),
            plain(19, 'Arise, cry out in the night: in the beginning of the watches pour out thine heart like water before the face of the Lord: lift up thy hands toward him for the life of thy young children, that faint for hunger in every street.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'lam2-cry-heart',
          html:
            'In the midst of describing divine judgment, the poet turns to address Jerusalem herself. He calls on her to cry out. Her heart should cry to the Lord. She should let tears run like a river day and night, without ceasing. The image is of unrelenting, persistent lamentation. She is to "give thyself no rest." The tears should flow constantly. This is not a call to despair, but a call to bring her entire anguish to God.',
        },
        {
          kind: 'commentary',
          id: 'lam2-arise-cry',
          html:
            '"Arise, cry out in the night." The call comes at the darkest hour—in the night, during the watches when darkness is deepest. Even then, even in that darkness, Jerusalem is called to cry out. "Pour out thine heart like water before the face of the Lord." Do not hold back. Do not bottle up your pain. Pour it out. Let it flow like water before God&apos;s face. Lift your hands toward Him—the gesture of prayer, of desperation, of openness.',
        },
        {
          kind: 'hebrew',
          id: 'lam2-ntzk',
          title: 'Natzak — "Pour Out" (Nitzku)',
          script: 'נִצְקוּ',
          translit: '<strong>Nitzku</strong> · pour out; spill; pour forth; let flow',
          description:
            'The Hebrew word natzak means to pour out, to spill, to let flow. It suggests the uninhibited flow of emotion, the refusal to dam up or hold back grief. To pour out one&apos;s heart is to let it spill forth without restraint before God.',
        },
        {
          kind: 'christ',
          id: 'lam2-christ-bearing',
          title: 'Christ Connection — Christ Bears the Wrath',
          html:
            'Lamentations 2 speaks of God&apos;s wrath poured out on Jerusalem. In Christ, this wrath reaches its culmination and its redemption. Christ bears the wrath that belongs to us. On the cross, Christ receives the judgment that our sin deserves. He does not simply sympathize with our suffering. He takes it upon Himself. The God who was an enemy in Lamentations 2—who poured out wrath, who destroyed, who was set against His people—becomes in Christ the God who bears wrath for us, absorbs it, and transforms it into redemption.',
        },
        {
          kind: 'carry',
          html:
            'Lamentations teaches that lament itself is a form of faith. When you pour out your heart like water before God, you are not expressing lack of faith. You are exercising faith. You are bringing your pain to the one God who can receive it, acknowledge it, and ultimately heal it. The tears should flow without ceasing. The cry should ring out in the night. And God receives it.',
        },
        {
          kind: 'reflection',
          id: 'lam2-pour-out',
          prompt: 'What would it look like for you to "pour out your heart like water" before God? What pain have you been holding back, trying to contain? What would release feel like?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Arise, cry out in the night: pour out thine heart like water before the face of the Lord: lift up thy hands toward him for the life of thy young children.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Lamentations 2 · Study Guide',
  },
};
