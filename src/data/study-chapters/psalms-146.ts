import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 146 — Put Not Your Trust in Princes
 *
 * "Praise ye the Lord. Praise the Lord, O my soul...Put not your trust in
 * princes, nor in the son of man, in whom there is no help." The opening of
 * the final hymnic cycle of Psalms is a warning: do not trust in earthly power.
 * Kings fail. Men die. But "the Lord openeth the eyes of the blind...raiseth
 * them that are bowed down." The contrast is stark: human power is temporary
 * and ultimately helpless. God&apos;s power is eternal and merciful. The
 * affirmation of God&apos;s care for the vulnerable becomes the ground for praise.
 */
export const PSALMS_146: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 146,

  estimatedMinutes: { 5: 1, 10: 4, 15: 4 },
  intros: [
    'Psalm 146 opens the final collection of five psalms (146–150) that form a crescendo of praise. The psalm begins with a warning: "Put not your trust in princes, nor in the son of man, in whom there is no help." This is not cynicism about human nature, but realism about human limits. Princes die. Their plans come to nothing. But God—God remains. His compassion is eternal. And His particular care is for the vulnerable: the blind, the bowed down, the strangers, the fatherless, the widows. The psalm offers a vision of God as the defender of those whom earthly powers overlook or oppress.',
  ],

  sections: [
    {
      ref: 'Psalm 146:1–4',
      title: 'Trust Not in Princes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 146,
          lines: [
            plain(1, 'Praise ye the Lord. Praise the Lord, O my soul.'),
            plain(2, 'While I live will I praise the Lord: I will sing praises unto my God while I have any being.'),
            plain(3, 'Put not your trust in princes, nor in the son of man, in whom there is no help.'),
            plain(4, 'His breath goeth forth, he returneth to his earth; in that very day his thoughts perish.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm146-praise-life',
          html:
            'The opening command is emphatic: "Praise ye the Lord." And it is personal: "Praise the Lord, O my soul." The commitment follows immediately: "While I live will I praise the Lord: I will sing praises unto my God while I have any being." Praise is not contingent on circumstance. It is a lifelong commitment—as long as the psalmist exists, he will praise.',
        },
        {
          kind: 'hebrew',
          id: 'psalm146-shalom',
          title: 'Yeshuah — "Salvation" (Deliverance)',
          script: 'יְשׁוּעָה',
          translit: '<strong>Yeshuah</strong> · salvation, deliverance, help, rescue',
          description:
            'The word yeshuah means salvation or deliverance—the intervention of a savior. In the phrase "in whom there is no help," the psalmist is saying princes cannot deliver. They cannot save. Only God can.',
        },
        {
          kind: 'commentary',
          id: 'psalm146-princes',
          html:
            '"Put not your trust in princes, nor in the son of man, in whom there is no help." The warning is not against the existence of princes or princes themselves. It is against the idolatry of trusting in them. Princes are human. They cannot ultimately help. Their power is limited.',
        },
        {
          kind: 'commentary',
          id: 'psalm146-breath',
          html:
            '"His breath goeth forth, he returneth to his earth; in that very day his thoughts perish." The reason is simple and unavoidable: princes are mortal. Their breath—their life—departs. They return to earth. And in that day, their plans, their thoughts, their schemes come to nothing. Death ends the reach of earthly power.',
        },
      ],
    },

    {
      ref: 'Psalm 146:5–10',
      title: 'The God of the Vulnerable',
      blocks: [
        {
          kind: 'scripture',
          chapter: 146,
          lines: [
            plain(5, 'Happy is he that hath the God of Jacob for his help, whose hope is in the Lord his God:'),
            plain(6, 'Which made heaven, and earth, the sea, and all that therein is: which keepeth truth for ever:'),
            plain(7, 'Which executeth judgment for the oppressed: which giveth food to the hungry: the Lord looseth the prisoners:'),
            plain(8, 'The Lord openeth the eyes of the blind: the Lord raiseth them that are bowed down: the Lord loveth the righteous:'),
            plain(9, 'The Lord preserveth the strangers; he relieveth the fatherless and widow: but the way of the wicked he will turn upside down.'),
            plain(10, 'The Lord shall reign for ever, even thy God, O Zion, unto all generations. Praise ye the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm146-happy',
          html:
            '"Happy is he that hath the God of Jacob for his help, whose hope is in the Lord his God." True happiness, true security, comes not from princes but from God. Not from earthly power but from the God of Jacob—the God of covenant, of promise, of faithfulness.',
        },
        {
          kind: 'commentary',
          id: 'psalm146-creator',
          html:
            '"Which made heaven, and earth, the sea, and all that therein is: which keepeth truth for ever." The God in whom we trust is the Creator of all. His power is not limited to a kingdom or territory. He sustains all creation. And He keeps truth forever—He is faithful, reliable, constant.',
        },
        {
          kind: 'commentary',
          id: 'psalm146-oppressed',
          html:
            'Then comes the catalog of God&apos;s merciful acts: "Which executeth judgment for the oppressed: which giveth food to the hungry: the Lord looseth the prisoners." God cares for those whom princes ignore or exploit. The oppressed, the hungry, the imprisoned—these are God&apos;s concern. God executes justice on their behalf.',
        },
        {
          kind: 'commentary',
          id: 'psalm146-blind',
          html:
            '"The Lord openeth the eyes of the blind: the Lord raiseth them that are bowed down: the Lord loveth the righteous." The blind—both literal and metaphorical—receive sight from God. Those bowed down—by grief, by oppression, by burden—are raised up. And this is not mere sentiment. It is active, transformative care. The Lord loves the righteous and acts on their behalf.',
        },
        {
          kind: 'commentary',
          id: 'psalm146-strangers',
          html:
            '"The Lord preserveth the strangers; he relieveth the fatherless and widow: but the way of the wicked he will turn upside down." The particular focus on the vulnerable—strangers, orphans, widows—is striking. These are the people with no earthly power, no prince to advocate for them. Yet God preserves them. And the wicked? Their way will be turned upside down—overturned, defeated.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 146 invites reflection on where we place our trust and hope. In what or whom do we invest our confidence for security and well-being? What happens to us when that fails? The psalm suggests that the deepest security comes not from the powerful, but from the God of mercy, who is eternally faithful and eternally concerned with justice and compassion.',
        },
        {
          kind: 'christ',
          id: 'psalm146-christ-opens-eyes',
          title: 'Christ Connection — Eyes Opened',
          html:
            'In John 9, Christ opens the eyes of a man born blind. The Pharisees, the authorities of the day, question, doubt, accuse. But Christ sees past their power to the man himself. He opens blind eyes. He cares for the overlooked. This is the work of God—the very work Psalm 146 celebrates—and it is fulfilled in Christ.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Put not your trust in princes...The Lord openeth the eyes of the blind.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 146 · Study Guide',
  },

  hasHebrew: true,
};
