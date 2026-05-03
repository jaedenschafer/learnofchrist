import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 13 — How Long, O Lord?
 *
 * David cries out in desperation. "How long wilt thou forget me, O Lord? for ever?
 * How long wilt thou hide thy face from me?" His prayer is one of anguish and
 * confusion. Yet in the midst of the darkness, faith rises. The psalm ends not with
 * resolution of his suffering but with trust in God&apos;s mercy: "My heart shall
 * rejoice in thy salvation. I will sing unto the Lord, because he hath dealt
 * bountifully with me."
 */
export const PSALMS_13: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 13,

  estimatedMinutes: { 5: 1, 10: 3, 15: 4 },
  intros: [
    'Psalm 13 is the shortest of David&apos;s cries for help. In just six verses, it moves from desperate questioning to confident faith. David asks "how long" four times—each question pressing deeper into the abyss. He is forgotten. God hides His face. His soul is sorrowful. His enemy is exalted. Everything is wrong. Yet in this brief psalm, something shifts. Not because circumstances change but because David&apos;s trust in God&apos;s mercy rises above the darkness.',
    'This is a psalm for moments when you cannot see beyond your suffering, when God seems to have abandoned you, when you cannot imagine how things will ever be right again. It validates the darkness while insisting that it is not the final word.',
  ],

  sections: [
    {
      ref: 'Psalm 13:1–2',
      title: 'Forgotten by God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'How long wilt thou forget me, O Lord? for ever? how long wilt thou hide thy face from me?'),
            plain(2, 'How long shall I take counsel in my soul, having sorrow in my heart daily? how long shall mine enemy be exalted over me?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps13-how-long',
          html:
            'The prayer opens with a question repeated twice, each repetition intensifying the desperation: "How long wilt thou forget me?" This is not theology. This is the raw cry of someone who feels abandoned. And David dares to ask: "For ever?" Is this forgetfulness permanent? Will it never end?',
        },
        {
          kind: 'commentary',
          id: 'ps13-hide',
          html:
            'Then another dimension of the same abandonment: "How long wilt thou hide thy face from me?" To hide one&apos;s face is to turn away. God has turned away from David. And in His absence, David is left to "take counsel" in his own soul—to rely on his own thoughts, his own resources—and finding only sorrow.',
        },
        {
          kind: 'hebrew',
          id: 'ps13-shakach',
          title: 'Shakach — "Forget"',
          script: 'שָׁכַח',
          translit: '<strong>Shakach</strong> · to forget; to overlook; to cease to care for',
          description:
            'Shakach is not merely the failure to remember. It suggests the cessation of care. To be forgotten by God is to be overlooked, to be outside the sphere of His attention. David fears this most basic of abandonments.',
        },
        {
          kind: 'commentary',
          id: 'ps13-enemy',
          html:
            'And to complete the picture: his enemy is exalted. While God seems to have forgotten, the one who opposes David has grown strong. Everything that David cares about—being remembered by God, experiencing God&apos;s presence, being protected from his enemies—has been inverted.',
        },
        {
          kind: 'carry',
          html:
            'There are seasons when God feels absent. When you feel overlooked. When your enemies seem to prosper while you suffer. These seasons are real, and the Psalms give you permission to name them as David does. You do not have to pretend everything is fine.',
        },
      ],
    },

    {
      ref: 'Psalm 13:3–6',
      title: 'Faith in God&apos;s Mercy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(3, 'Consider and hear me, O Lord my God: lighten mine eyes, lest I sleep the sleep of death;'),
            plain(4, 'Lest mine enemy say, I have prevailed against him; and those that trouble me rejoice when I am moved.'),
            plain(5, 'But I have trusted in thy mercy; my heart shall rejoice in thy salvation.'),
            plain(6, 'I will sing unto the Lord, because he hath dealt bountifully with me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps13-consider',
          html:
            'Then the turn. David cries: "Consider and hear me, O Lord my God." He calls God back by name, by relationship. "My God." And he asks for one thing: "lighten mine eyes." Give me light. Keep me from the sleep of death—the darkness of despair that leads to surrendering entirely.',
        },
        {
          kind: 'commentary',
          id: 'ps13-prevailed',
          html:
            'His concern is not merely for himself but for God&apos;s honor. If he dies—if his enemy triumphs over him—then his enemy will say, "I have prevailed." God&apos;s name will be tarnished. Those who trouble David will rejoice. The triumph of evil will appear complete.',
        },
        {
          kind: 'commentary',
          id: 'ps13-trusted',
          html:
            'But here is the pivot: "But I have trusted in thy mercy." Not "I will trust." He speaks as though the trust is already settled. And from that trust flows joy: "my heart shall rejoice in thy salvation." Not his circumstances, but his heart. Not his outward situation, but his inner orientation. His joy is anchored not in what he sees but in what he trusts.',
        },
        {
          kind: 'christ',
          id: 'ps13-christ-mercy',
          title: 'Christ Connection — Trusting in Mercy',
          html:
            'Christ came that mercy might triumph. When we feel abandoned, unseen, forgotten, we come to Him with David&apos;s cry—"how long?"—and we find that His mercy is endless, unceasing, unchanging. In His resurrection, He vindicated the righteous who cried out and were heard. Our trust is in a mercy that has already been proven.',
        },
        {
          kind: 'commentary',
          id: 'ps13-sing',
          html:
            'And the final verse: "I will sing unto the Lord, because he hath dealt bountifully with me." David will sing, not because his suffering has ended, but because He knows God has been—is—and will be bountiful. The song is an affirmation of God&apos;s character despite circumstances that seem to contradict it.',
        },
        {
          kind: 'reflection',
          id: 'ps13-silence',
          prompt: 'When have you felt God&apos;s silence most acutely? What would it mean to trust in His mercy even while crying "how long?"',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I have trusted in thy mercy; my heart shall rejoice in thy salvation.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 13 · Study Guide',
  },

  hasHebrew: true,
};
