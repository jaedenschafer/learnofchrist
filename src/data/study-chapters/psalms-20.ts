import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 20 — The King Shall Be Saved
 *
 * "The Lord hear thee in the day of trouble; the name of the God of Jacob defend
 * thee." The psalm opens with a communal prayer for the king. The people cry out
 * for God to hear, defend, and deliver their king. "Save, Lord: let the king hear
 * us when we call." The psalm concludes with confidence: God will answer. God will
 * save the king. Christ is the King above all kings, whom God exalts and saves.
 */
export const PSALMS_20: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 20,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 4 },
  intros: [
    'Psalm 20 is a communal prayer. The congregation prays for its king, asking God to hear him in the day of trouble, to answer his cry for help, to deliver him from danger. This is not the king praying for himself but the people interceding for their leader. In doing so, they acknowledge a deep truth: the king&apos;s wellbeing is bound up with theirs. If the king is saved, the kingdom is saved.',
    'The psalm moves from petition to confidence. By the end, the people are certain: God will hear. God will save. "We will rejoice in thy salvation, and in the name of our God we will set up our banners." The final word belongs to the God who saves.',
  ],

  sections: [
    {
      ref: 'Psalm 20:1–5',
      title: 'A Prayer for the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(1, 'The Lord hear thee in the day of trouble; the name of the God of Jacob defend thee;'),
            plain(2, 'Send thee help from the sanctuary, and strengthen thee out of Zion;'),
            plain(3, 'Remember all thy offerings, and accept thy burnt sacrifice; Selah.'),
            plain(4, 'Grant thee according to thine own heart, and fulfil all thy counsel.'),
            plain(5, 'We will rejoice in thy salvation, and in the name of our God we will set up our banners: the Lord fulfil all thy petitions.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps20-hear',
          html:
            'The congregation prays: "The Lord hear thee in the day of trouble." The king faces a trial—battle, threat, danger. And the people ask God to hear his cry, to hear him in this dark hour. The prayer acknowledges that the king cannot save himself. Only God can deliver him.',
        },
        {
          kind: 'commentary',
          id: 'ps20-name',
          html:
            '"The name of the God of Jacob defend thee." The name of God—His character, His reputation, His power—is invoked. The God who was faithful to Jacob, who blessed the patriarchs, who made covenant promises—this God is asked to defend the king. The prayer anchors the king&apos;s case in the larger story of God&apos;s faithfulness.',
        },
        {
          kind: 'hebrew',
          id: 'ps20-shagab',
          title: 'Shagab — "Defend" / "Set on High"',
          script: 'שׂגַּב',
          translit: '<strong>Shagab</strong> · to set on high; to defend; to protect; to exalt',
          description:
            'To be defended by God is to be set on high, lifted up and protected. The enemy cannot touch what God has placed beyond reach. This is the security the people ask for their king.',
        },
        {
          kind: 'commentary',
          id: 'ps20-offerings',
          html:
            '"Remember all thy offerings, and accept thy burnt sacrifice." The king has brought offerings to God. Now the people ask God to remember these acts of devotion and accept them. The king has prepared himself spiritually for what lies ahead.',
        },
        {
          kind: 'commentary',
          id: 'ps20-heart',
          html:
            '"Grant thee according to thine own heart, and fulfil all thy counsel." The people ask God to give the king his heart&apos;s desire—not selfish desires, but the righteous desires that flow from devotion to God. They ask God to bring the king&apos;s counsels to completion.',
        },
        {
          kind: 'carry',
          html:
            'When you pray for a leader, you are not merely asking for their personal safety. You are praying for the wellbeing of all those they lead. Your leader&apos;s wisdom, strength, and protection matter to you. Intercede for those in authority with the understanding that their victory is your victory.',
        },
      ],
    },

    {
      ref: 'Psalm 20:6–9',
      title: 'God Will Save the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(6, 'Now know I that the Lord saveth his anointed; he will hear him from his holy heaven with the saving strength of his right hand.'),
            plain(7, 'Some trust in chariots, and some in horses: but we will remember the name of the Lord our God.'),
            plain(8, 'They are brought down and fallen: but we are risen, and stand upright.'),
            plain(9, 'Save, Lord: let the king hear us when we call.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps20-know',
          html:
            '"Now know I that the Lord saveth his anointed." The tone shifts from petition to certainty. The speaker is now sure, confident, assured. This shift from asking to knowing is significant. Even before the outcome is manifest, faith declares the truth: God saves His anointed.',
        },
        {
          kind: 'commentary',
          id: 'ps20-holy-heaven',
          html:
            'God will hear from His holy heaven with "the saving strength of His right hand." God hears from the position of supreme power. His right hand—the hand of power and action—reaches down to save. This is not weak or distant help. This is the intervention of the almighty.',
        },
        {
          kind: 'commentary',
          id: 'ps20-chariots',
          html:
            '"Some trust in chariots, and some in horses: but we will remember the name of the Lord our God." The people contrast earthly military strength with faith in God. Other nations rely on their war machines, their horses, their technology. Israel remembers the name of God. Their confidence is not in human strength but in divine power.',
        },
        {
          kind: 'christ',
          id: 'ps20-christ-king',
          title: 'Christ Connection — The King Our God Saves',
          html:
            'Christ is the anointed King, the one on whom God placed His Spirit. He trusted not in worldly power but in His Father. When He faced the cross—His moment of greatest danger—He committed Himself to God and was vindicated through resurrection. We trust in this King, knowing that God has saved Him and raised Him up.',
        },
        {
          kind: 'commentary',
          id: 'ps20-risen',
          html:
            '"They are brought down and fallen: but we are risen, and stand upright." The enemies of the king fall. But those who trust in God rise. This is the promise and the proclamation. Those who put their trust in the Lord cannot ultimately be defeated.',
        },
        {
          kind: 'reflection',
          id: 'ps20-save-lord',
          prompt: 'What is one area where you are tempted to trust in your own strength rather than in God&apos;s? How might remembering God&apos;s name change your confidence in that area?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Save, Lord: let the king hear us when we call. Some trust in chariots, and some in horses: but we will remember the name of the Lord our God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 20 · Study Guide',
  },
};
