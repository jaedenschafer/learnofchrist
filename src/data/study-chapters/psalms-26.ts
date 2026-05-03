import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 26 — Prayer of Integrity
 *
 * "I will wash mine hands in innocency: so will I compass thine altar, O Lord."
 * David prays for vindication, asking God to examine him, to test his heart, to
 * see that he has walked in integrity. The psalm is a prayer of one who has
 * endeavored to live righteously, who asks God to judge him and find him true.
 * For Christians, this psalm finds its deepest meaning in Christ, whose hands
 * were clean, whose heart was pure, and whose sacrifice on the altar redeems all
 * uncleanness in those who believe.
 */
export const PSALMS_26: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 26,

  estimatedMinutes: { 5: 1, 10: 3, 15: 5 },
  intros: [
    'Psalm 26 is a prayer of integrity spoken before God. "Judge me, O Lord; for I have walked in mine integrity." The psalmist is not claiming sinlessness, but rather that he has genuinely attempted to live according to God&apos;s ways, that his heart is turned toward righteousness. He invites God&apos;s scrutiny. He asks to be tested. This is the confidence of one who has nothing to hide from God, though he knows he is not perfect.',
  ],

  sections: [
    {
      ref: 'Psalm 26:1–8',
      title: 'Walking in Integrity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(1, 'Judge me, O Lord; for I have walked in mine integrity: I have trusted also in the Lord; therefore I shall not slide.'),
            plain(2, 'Examine me, O Lord, and prove me; try my reins and my heart.'),
            plain(3, 'For thy lovingkindness is before mine eyes: and I have walked in thy truth.'),
            plain(4, 'I have not sat with men of falsehood; neither will I go in with dissemblers.'),
            plain(5, 'I have hated the congregation of evil doers; and will not sit with the wicked.'),
            plain(6, 'I will wash my hands in innocency: so will I compass thine altar, O Lord.'),
            plain(7, 'That I may publish with the voice of thanksgiving, and tell of all thy wondrous works.'),
            plain(8, 'Lord, I have loved the habitation of thy house, and the place where thine honour dwelleth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms26-judge-integrity',
          html: 'David opens with bold confidence: "Judge me, O Lord; for I have walked in mine integrity." He does not ask God to overlook his faults. He asks God to judge him. This requires great faith. To invite God&apos;s judgment is to place complete confidence in one&apos;s own alignment with God&apos;s will. David trusts not in his own perfection, but in his genuine desire to walk righteously.',
        },
        {
          kind: 'hebrew',
          id: 'psalms26-innocency',
          title: 'Tahor — "Innocency" (Cleanness)',
          script: 'טָהוֹר',
          translit: '<strong>Tahor</strong> · innocent; clean; untainted; pure',
          description: 'The Hebrew word tahor carries both ceremonial and moral cleanliness. Tahor does not mean sinless, but rather clean in the sense of not harboring willful corruption. When David says he will wash his hands in innocency, he means his hands are clean of deliberate wickedness. His heart is turned toward righteousness even as he acknowledges his imperfection.',
        },
        {
          kind: 'commentary',
          id: 'psalms26-sat-not-falsehood',
          html: 'David describes the associations he has avoided: "I have not sat with men of falsehood; neither will I go in with dissemblers." Integrity is not merely avoiding outright evil. It is choosing the company of the truthful, avoiding those whose words betray rather than reveal. Integrity shapes relationships.',
        },
        {
          kind: 'christ',
          id: 'psalms26-christ-clean-hands',
          title: 'Christ Connection — The Pure Heart and Clean Hands',
          html: 'Christ alone possessed hands absolutely clean and a heart absolutely pure. Yet He died for those whose hands are stained and whose hearts are divided. In His death, He washed away all uncleanness. Romans 3:25 declares, "Whom God hath set forth to be a propitiation through faith in his blood." Through Christ, our hands are washed clean, our hearts made pure, though we have not earned it. We approach God&apos;s altar not through our own integrity, but through His.',
        },
        {
          kind: 'carry',
          html: 'To walk in integrity does not mean achieving perfection. It means living with genuineness, with your outer life aligned to your inner commitment to God. It means choosing truthfulness over falsehood, even when falsehood is easier. It means surrounding yourself with those who encourage righteousness rather than compromise. And it means approaching God&apos;s altar not with arrogance, but with the confidence that comes from genuine endeavor.',
        },
        {
          kind: 'reflection',
          id: 'psalms26-integrity-test',
          prompt: 'Would you be comfortable inviting God to examine your heart and test your motives as David does? Where are you living in integrity, and where are you compromising? What would it take to walk more fully in truth?',
        },
      ],
    },

    {
      ref: 'Psalm 26:9–12',
      title: 'Vindication and Praise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(9, 'Gather not my soul with sinners, nor my life with bloody men:'),
            plain(10, 'In whose hands is mischief, and their right hand is full of bribes.'),
            plain(11, 'But as for me, I will walk in mine integrity: redeem me, and be merciful unto me.'),
            plain(12, 'My foot standeth in an even place: in the congregations will I bless the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms26-gather-not',
          html: 'David makes a clear distinction: "Gather not my soul with sinners." He is not asking God to forgive sinners. He is asking not to be grouped with them, not to be judged by the same measure they are judged. The basis of this distinction is not his own righteousness, but the fact that his heart, however imperfect, has been turned toward God.',
        },
        {
          kind: 'commentary',
          id: 'psalms26-foot-even-place',
          html: 'The final image is of stability: "My foot standeth in an even place." Integrity provides footing. It offers solid ground upon which to stand. Not the ground of one&apos;s own achievement, but the ground of one&apos;s genuine alignment with God&apos;s will. From this standing place, David will bless the Lord in the congregations.',
        },
        {
          kind: 'carry',
          html: 'Psalm 26 teaches that integrity—living with genuineness, with your word aligned to your truth—is not achieved through perfection, but through sincerity. You do not need to be flawless to ask God to examine you. You do need to be authentic, to want His truth more than your comfort, to choose righteousness over compromise. And from that ground, you stand firm.',
        },
        {
          kind: 'reflection',
          id: 'psalms26-bless-lord',
          prompt: 'The psalm ends with David blessing the Lord in the congregations. What would it mean for you to move from self-examination to praise? How might integrity prepare you for the kind of authentic worship David describes?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Judge me, O Lord; for I have walked in mine integrity. ...I will wash my hands in innocency: so will I compass thine altar, O Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 26 · Study Guide',
  },

  hasHebrew: true,
};
