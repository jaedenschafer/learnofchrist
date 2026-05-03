import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 15 — The Upright Character
 *
 * "Lord, who shall abide in thy tabernacle?" David then describes the person who
 * can stand in God&apos;s presence: the one who walks uprightly, works righteousness,
 * speaks the truth, does not backbite, does not accept a bribe. These are not rules
 * imposed externally but the natural fruit of a heart oriented toward God. No one
 * perfectly meets these qualifications—but in Christ, we are accepted.
 */
export const PSALMS_15: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 15,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Psalm 15 is a question followed by a description. The question: "Lord, who shall abide in thy tabernacle? who shall dwell in thy holy hill?" In other words, who is permitted to approach God, to stand in His presence, to make His dwelling place their own? The answer occupies the rest of the psalm: the one who walks uprightly, who works righteousness, who speaks the truth in his heart. This is a portrait of moral integrity.',
    'What makes this psalm remarkable is that it does not present these qualities as earning a place with God. Rather, they are the necessary fruit of someone who genuinely seeks God. You cannot stand in the presence of the holy God while harboring dishonesty, exploitation, or corruption. The description is not a ladder to climb but a mirror—it shows us what we need to become.',
  ],

  sections: [
    {
      ref: 'Psalm 15:1–5',
      title: 'The Character of the Righteous',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(1, 'Lord, who shall abide in thy tabernacle? who shall dwell in thy holy hill?'),
            plain(2, 'He that walketh uprightly, and worketh righteousness, and speaketh the truth in his heart.'),
            plain(3, 'He that backbiteth not with his tongue, nor doeth evil to his neighbour, nor taketh up a reproach against his neighbour.'),
            plain(4, 'In whose eyes a vile person is contemned: but he honoureth them that fear the Lord. He that sweareth to his own hurt, and changeth not.'),
            plain(5, 'He that putteth not out his money to usury, nor taketh reward against the innocent. He that doeth these things shall never be moved.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps15-abide',
          html:
            'The question is direct and simple: "Who shall abide in thy tabernacle?" To abide is to dwell, to make one&apos;s home, to have the right to enter and remain. David asks who has this privilege—who is permitted to stand in God&apos;s presence?',
        },
        {
          kind: 'hebrew',
          id: 'ps15-tom',
          title: 'Tom — "Uprightly" / Integrity',
          script: 'תָּם',
          translit: '<strong>Tom</strong> · whole; complete; upright; complete integrity',
          description:
            'Tom means to be whole, complete, without division. The upright person is one whose inner life and outer life align, whose heart and actions are integrated. There is no split between the public and private self.',
        },
        {
          kind: 'commentary',
          id: 'ps15-works',
          html:
            'The person described here walks uprightly—this is his whole pattern of life. He works righteousness—it is not passive virtue but active, intentional right-doing. He speaks the truth in his heart—even when no one is listening, even when lying would be easier or more profitable, he maintains truthfulness.',
        },
        {
          kind: 'commentary',
          id: 'ps15-backbite',
          html:
            'What he does not do is as important as what he does. He does not backbite—he does not spread slander, does not attack others when they are absent. He does not do evil to his neighbor. He does not spread false reports. His tongue is guarded. His relationships are honest.',
        },
        {
          kind: 'commentary',
          id: 'ps15-vile',
          html:
            'In his eyes, a vile person is contemned. He recognizes wickedness and judges it accordingly. Yet he honors those who fear the Lord. He shows respect where respect is due. He has moral discernment. He knows the difference between the noble and the base.',
        },
        {
          kind: 'christ',
          id: 'ps15-christ-qualifications',
          title: 'Christ Connection — Perfect Righteousness',
          html:
            'No human meets all these qualifications perfectly. We all fall short. We all have spoken falsely, harbored resentment, compromised our integrity. But Christ is the one who perfectly embodies what this psalm describes. He walked uprightly. He worked righteousness. He spoke truth. He honored the righteous and judged the wicked. In Him, we are accepted—not because we have achieved this standard, but because His righteousness covers us.',
        },
        {
          kind: 'commentary',
          id: 'ps15-usury',
          html:
            'The person described does not exploit others for profit. He does not lend at usury—charging interest to the poor. He does not accept a bribe against the innocent. His life is marked by a refusal to use others, to exploit weakness for gain. And the promise: "He that doeth these things shall never be moved." Such a person stands on solid ground. His life will not crumble.',
        },
        {
          kind: 'reflection',
          id: 'ps15-mirror',
          prompt: 'Read through each quality described in this psalm. Which ones come most naturally to you, and which challenge you? How does seeing Christ as the perfect embodiment of these qualities change your understanding of your own journey?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Lord, who shall abide in thy tabernacle? He that walketh uprightly, and worketh righteousness, and speaketh the truth in his heart.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 15 · Study Guide',
  },

  hasHebrew: true,
};
