import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 83 — Against the Anointed
 *
 * "Keep not thou silence, O God...They have taken crafty counsel against thy
 * people, and consulted against thy hidden ones." This psalm cries out against
 * confederacies formed against God&apos;s people. Yet beneath the historical
 * situation lies a universal truth: every alliance against God&apos;s anointed
 * will ultimately break, because God breaks it.
 */
export const PSALMS_83: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 83,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Psalm 83 names a specific coalition—a league of enemies united against Israel. The nations have come together with a single purpose: to destroy God&apos;s people. They have counseled craftily, determining that "Come, and let us cut them off from being a nation; that the name of Israel may be no more in remembrance." This is not a mere military conflict. This is a conspiracy to erase a people, to remove them from history itself.',
    'Yet the psalmist&apos;s response is not despair. It is a cry to God: "Keep not thou silence, O God." Do not remain removed. Do not stand back from this attempt to destroy what is yours. The psalmist trusts that God will not permit His anointed to be erased, that every alliance against God&apos;s purposes will dissolve, that God alone will be exalted over all the earth.',
  ],

  sections: [
    {
      ref: 'Psalm 83:1–8',
      title: 'The Conspiracy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 83,
          lines: [
            plain(1, 'Keep not thou silence, O God: hold not thy peace, and be not still, O God.'),
            plain(2, 'For, lo, thine enemies make a tumult: and they that hate thee have lifted up the head.'),
            plain(3, 'They have taken crafty counsel against thy people, and consulted against thy hidden ones.'),
            plain(4, 'They have said, Come, and let us cut them off from being a nation; that the name of Israel may be no more in remembrance.'),
            plain(6, 'The tabernacles of Edom, and the Ishmaelites; of Moab, and the Hagarenes;'),
            plain(8, 'Assur also is joined with them: they have holpen the children of Lot.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms83-silence',
          html:
            'The psalm opens with an urgent plea: "Keep not thou silence, O God." This is not a gentle request. This is a demand that God break silence, that He not remain neutral or distant. The situation is dire enough that the normal boundaries of reverent address are broken through in the passion of desperation.',
        },
        {
          kind: 'hebrew',
          id: 'psalms83-damiyah',
          title: 'Damiyah — "Be Silent" (Hold Peace)',
          script: 'דָּמִיָּה',
          translit: '<strong>Damiyah</strong> · be silent, hold peace, refrain from action',
          description:
            'The Hebrew word damiyah speaks of silence as withdrawal, as choosing not to act. The psalmist is asking God not to withdraw. In a moment when God&apos;s people face annihilation, silence itself would be a form of abandonment.',
        },
        {
          kind: 'commentary',
          id: 'psalms83-conspiracy',
          html:
            'The enemies have taken "crafty counsel"—they have conspired together with cunning and deception. And their goal is explicit: to cut off Israel from being a nation, to erase them from history. This is not a limited military goal. This is genocide. This is the attempt to remove from the earth any memory of God&apos;s people.',
        },
        {
          kind: 'commentary',
          id: 'psalms83-confederacy',
          html:
            'The psalm then lists the nations allied against Israel. The tabernacles of Edom, the Ishmaelites, Moab, Assyria—a wide-ranging confederacy. What unites them is their enmity toward God&apos;s people. And the psalmist makes it clear: this is not merely a political alliance. It is a spiritual conspiracy against God&apos;s anointed.',
        },
        {
          kind: 'christ',
          id: 'psalms83-christ-anointed',
          title: 'Christ Connection — The Anointed Savior',
          html:
            'Christ is the Anointed One par excellence. Every alliance against Him—the religious authorities, the Roman state, the powers of darkness—sought to cut Him off from the living. Yet He could not be cut off. His resurrection breaks every conspiracy. And now, seated at God&apos;s right hand, He reigns over all the earth, while every enemy at His feet becomes a footstool.',
        },
        {
          kind: 'carry',
          html:
            'If you face opposition—if alliances seem to form against you, if enemies conspire against what God has called you to do—remember this psalm. The confederacies of this world are temporary. God is not silent. God does not remain neutral. God will act, and in His action, all opposition will be exposed as futile.',
        },
        {
          kind: 'reflection',
          id: 'psalms83-opposition',
          prompt: 'What opposition do you face? What confederacies seem arrayed against God&apos;s purposes in your life or in the world?',
        },
      ],
    },

    {
      ref: 'Psalm 83:9–18',
      title: 'God Breaks Every Alliance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 83,
          lines: [
            plain(9, 'Do unto them as unto the Midianites; as to Sisera, as to Jabin, at the brook of Kison:'),
            plain(11, 'Make their nobles like Oreb, and like Zeeb: yea, all their princes as Zebah, and as Zalmunna.'),
            plain(13, 'O my God, make them like a wheel; as the stubble before the wind.'),
            plain(16, 'Fill their faces with shame; that they may seek thy name, O Lord.'),
            plain(18, 'That men may know that thou, whose name alone is JEHOVAH, art the most high over all the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms83-midianites',
          html:
            'The psalmist calls to mind God&apos;s past victories. "Do unto them as unto the Midianites...as to Sisera." These are not abstract historical references. They are memories of moments when God intervened decisively, when human confederacies were shattered by divine power. The psalmist is saying: You have done this before. Do it again.',
        },
        {
          kind: 'commentary',
          id: 'psalms83-wheel',
          html:
            '"Make them like a wheel; as the stubble before the wind." The image is vivid. The enemies are no more substantial than stubble. When the wind of God&apos;s judgment passes, they will roll away like dust. Their confederacy will dissolve. Their power will scatter.',
        },
        {
          kind: 'commentary',
          id: 'psalms83-shame',
          html:
            '"Fill their faces with shame; that they may seek thy name, O Lord." The prayer moves from judgment to the hope of repentance. Fill them with shame, yes—but so that they might turn from their conspiracy and seek God&apos;s name. Even in the call for God&apos;s judgment, there is the hope that enemies might become believers.',
        },
        {
          kind: 'christ',
          id: 'psalms83-christ-exalted',
          title: 'Christ Connection — The Exalted Name',
          html:
            'The psalm ends with a declaration: "Thou, whose name alone is JEHOVAH, art the most high over all the earth." All confederacies will break. All enemies will fall. And the name of the Lord will be exalted. In Christ, this declaration reaches its fulfillment. His name is above every name. Every knee will bow. Every tongue will confess that He is Lord.',
        },
        {
          kind: 'carry',
          html:
            'When you feel surrounded by opposition, when alliances seem arrayed against you, call to mind what God has done. Remember His past deliverances. Call on His name. And trust that every confederacy against God will ultimately break, and that His name will be exalted above all the earth.',
        },
        {
          kind: 'reflection',
          id: 'psalms83-trust-exaltation',
          prompt: 'How have you experienced God&apos;s deliverance in the past? What would it mean to trust that His name will be exalted, even when opposition surrounds you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Keep not thou silence, O God...They have said, Come, and let us cut them off from being a nation...Thou...art the most high over all the earth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 83 · Study Guide',
  },

  hasHebrew: true,
};
