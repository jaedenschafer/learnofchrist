import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 88 — The Darkest Psalm
 *
 * This is the only psalm that does not end in hope. It is a descent into
 * darkness without a corresponding ascent. The psalmist feels abandoned by
 * God. His cries go unheard. His friends have fled. He dwells in darkness,
 * in the depths of Sheol. "O Lord, why castest thou off my soul?" Yet even
 * here, in the deepest darkness, he still calls out to God. He still prays.
 * And in that persistence, there is a strange faith. Christ also descended
 * into the depths. He knows the darkness.
 */
export const PSALMS_88: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 88,

  estimatedMinutes: { 5: 1, 10: 2, 15: 3 },
  intros: [
    'Psalm 88 is attributed to the sons of Korah, and it is unique among all the psalms: it is the only one that begins in trouble and ends in trouble, with no resolution, no moment of deliverance, no triumphant return to hope. This is a psalm for those who know despair not as a passing cloud but as a state of being. It is honest. It does not pretend. And in its honesty, it speaks to anyone who has felt abandoned by God.',
  ],

  sections: [
    {
      ref: 'Psalm 88:1–12',
      title: 'The Cry from Darkness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 88,
          lines: [
            plain(1, 'O Lord God of my salvation, I have cried day and night before thee:'),
            plain(2, 'Let my prayer come before thee: incline thine ear unto my cry;'),
            plain(3, 'For my soul is full of troubles: and my life draweth nigh unto the grave.'),
            plain(4, 'I am counted with them that go down into the pit: I am as a man that hath no strength:'),
            plain(5, 'Free among the dead, like the slain that lie in the grave, whom thou rememberest no more: and they are cut off from thy hand.'),
            plain(6, 'Thou hast laid me in the lowest pit, in darkness, in the deeps.'),
            plain(7, 'Thy wrath lieth hard upon me, and thou hast afflicted me with all thy waves. Selah.'),
            plain(8, 'Thou hast put away mine acquaintance far from me; thou hast made me an abomination unto them: I am shut up, and I cannot come forth.'),
            plain(9, 'Mine eye mourneth by reason of affliction: Lord, I have called daily upon thee, I have stretched out my hands unto thee.'),
            plain(10, 'Wilt thou shew wonders to the dead? shall the dead arise and praise thee? Selah.'),
            plain(11, 'Shall thy lovingkindness be declared in the grave? or thy faithfulness in destruction?'),
            plain(12, 'Shall thy wonders be known in the dark? and thy righteousness in the land of forgetfulness?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps88-cry',
          html:
            'The psalmist cries day and night. He calls upon God. He stretches out his hands. And yet the answer does not come. This is not a psalm in which prayer is immediately answered. It is a psalm in which the psalmist continues to pray into the silence, continues to call into the void, and receives no answer. Yet he does not stop calling.',
        },
        {
          kind: 'commentary',
          id: 'ps88-abandoned',
          html:
            'The image is devastating: "I am as a man that hath no strength...whom thou rememberest no more...cut off from thy hand." The psalmist feels not just abandoned but forgotten. God remembers no more. He is cut off. Friends have abandoned him. And God seems to have abandoned him too. This is the darkest hour.',
        },
        {
          kind: 'hebrew',
          id: 'ps88-tzara',
          title: 'Tzara — "Troubles" (Distress)',
          script: 'צָרָה',
          translit: '<strong>Tzara</strong> · trouble; distress; narrow place; siege',
          description:
            'The psalmist is surrounded. Troubles press in from all sides like a siege. There is no escape, no relief, no moment of respite.',
        },
        {
          kind: 'reflection',
          id: 'ps88-darkness',
          prompt: 'Have you ever felt like God was not listening, like your prayers went unheard? What happened that helped you continue believing even in the darkness?',
        },
      ],
    },

    {
      ref: 'Psalm 88:13–18',
      title: 'The Persistence of Despair',
      blocks: [
        {
          kind: 'scripture',
          chapter: 88,
          lines: [
            plain(13, 'But unto thee have I cried, O Lord; and in the morning shall my prayer prevent thee.'),
            plain(14, 'Lord, why castest thou off my soul? why hidest thou thy face from me?'),
            plain(15, 'I am afflicted and ready to die from my youth up: while I suffer thy terrors I am distracted.'),
            plain(16, 'Thy fierce wrath goeth over me; thy terrors have cut me off.'),
            plain(17, 'They came round about me daily like water; they compassed me about together.'),
            plain(18, 'Lover and friend hast thou put far from me, and mine acquaintance into darkness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps88-morning',
          html:
            'Even in despair, the psalmist continues to pray. "In the morning shall my prayer prevent thee"—that is, meet you, come before you. He does not stop calling. He does not stop seeking. Even when God seems silent, even when friends have fled, even when the darkness seems complete, he still prays.',
        },
        {
          kind: 'commentary',
          id: 'ps88-why',
          html:
            'The question "Why castest thou off my soul?" is not answered in this psalm. The darkness does not lift. The friends do not return. The suffering does not cease. And yet the psalm ends with prayer still being offered. This is faith stripped of comfort, faith that persists not because it is rewarded but because it has nowhere else to go.',
        },
        {
          kind: 'christ',
          id: 'ps88-christ-depths',
          title: 'Christ Connection — The Depths of Sheol',
          html:
            'In Matthew 27:46, Christ cries out on the cross: "My God, my God, why hast thou forsaken me?" These are words of deepest abandonment. Christ descended into the depths. He experienced the absence of God&apos;s felt presence. He knows the darkness of Psalm 88. And in doing so, He hallowed even despair. No depth is beyond His reach.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 88 is a permission slip to feel what you truly feel. It does not demand false optimism. It does not insist that you pretend to be okay when you are not. It simply says: cry out. Keep calling. Even in darkness, even in abandonment, the cry itself is a form of prayer.',
        },
        {
          kind: 'reflection',
          id: 'ps88-why-persist',
          prompt: 'What does it mean to continue praying, continue believing, when you feel no response? What keeps you from giving up entirely?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'But unto thee have I cried, O Lord; and in the morning shall my prayer prevent thee.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 88 · Study Guide',
  },
};
