import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 71 — The Aged Saint
 *
 * "Cast me not off in the time of old age[res:sefaria-psalms-71]; forsake me not when my strength
 * faileth." This is a psalm for those who have walked with God for decades,
 * who are now watching their strength decline, and who fear that God might
 * abandon them in their weakness. Yet the psalm moves from fear to praise,
 * from the anxiety of aging to the confidence of a life sustained by God.
 */
export const PSALMS_71: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 71,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 71',
  },
  intros: [
    'Psalm 71 is the psalm of old age. The psalmist has grown old. His strength is failing. His enemies are watching, waiting for the moment when he will no longer be able to defend himself. And his fear is profound: "Cast me not off in the time of old age; forsake me not when my strength faileth." It is not the fear of death that haunts him. It is the fear of abandonment, the fear that when he needs God most, God might turn away.',
    'Yet this psalm is also a testimony to a long life lived in God&apos;s presence. The psalmist can say: "By thee have I been holden up from the womb." All his life, God has sustained him. And he trusts that God will not begin to abandon him now, in his weakness. The psalm moves from anxiety to confidence, from "Cast me not off" to "I will still praise thee" even unto old age.',
  ],

  sections: [
    {
      ref: 'Psalm 71:1–8',
      title: 'The Long Faithfulness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 71,
          lines: [
            plain(1, 'In thee, O Lord, do I put my trust: let me never be put to confusion.'),
            plain(5, 'For thou art my hope, O Lord God: thou art my trust from my youth.'),
            plain(6, 'By thee have I been holden up from the womb: thou art he that took me out of my mother&apos;s bowels: my praise shall be continually of thee.'),
            plain(8, 'Let my mouth be filled with thy praise and with thy honour all the day.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms71-trust',
          html: 'The psalm opens with a declaration of lifelong trust: "In thee, O Lord, do I put my trust." This is not a new trust, not sudden faith. This is the continuation of a trust that has endured from youth[res:bibleodyssey-psalter-laments].',
        },
        {
          kind: 'hebrew',
          id: 'psalms71-nachal',
          title: 'Nachal — "Hold Up" (Support)',
          script: 'נָחַל',
          translit: '<strong>Nachal</strong> · hold up, support, uphold',
          description: 'The Hebrew word nachal speaks of being held up, as one holds up a child or a burden. From birth, God has been holding the psalmist up. This is not a burden to God. This is what God does.',
        },
        {
          kind: 'commentary',
          id: 'psalms71-continually',
          html: 'The psalmist says: "My praise shall be continually of thee." Even in old age, even as strength fails, the psalmist commits to praise. The mouth will be filled with God&apos;s praise, with His honor, all the day long.',
        },
        {
          kind: 'christ',
          id: 'psalms71-christ-lifelong',
          title: 'Christ Connection — Held from the Womb',
          html: 'Christ was held up by God from the womb. His whole life was the expression of God&apos;s sustaining power. And He continues to hold His people—from birth to old age, from strength to weakness. His faithfulness does not waver.',
        },
        {
          kind: 'carry',
          html: 'If you are aging, if your strength is declining, if you fear being cast off, remember this psalm. God did not hold you only in your youth. He held you through all your years. And He will not abandon you now. Your long life is a testimony to His faithfulness. Let your mouth be filled with His praise.',
        },
        {
          kind: 'reflection',
          id: 'psalms71-upheld',
          prompt: 'How has God upheld you from youth until now? What does it mean to praise Him continually, even as your strength changes?',
        },
      ],
    },

    {
      ref: 'Psalm 71:14–24',
      title: 'Praise Until the End',
      blocks: [
        {
          kind: 'scripture',
          chapter: 71,
          lines: [
            plain(14, 'But I will hope continually, and will yet praise thee more and more.'),
            plain(17, 'O God, thou hast taught me from my youth: and hitherto have I declared thy wondrous works.'),
            plain(18, 'Now also when I am old and grayheaded, O God, forsake me not; until I have shewed thy strength unto this generation, and thy power to every one that is to come.'),
            plain(23, 'My lips shall greatly rejoice when I sing unto thee; and my soul, which thou hast redeemed.'),
            plain(24, 'My tongue also shall talk of thy righteousness all the day long: for they are confounded, for they are brought unto shame, that seek to do me hurt.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms71-hope',
          html: 'The psalmist moves from fear to hope: "I will hope continually, and will yet praise thee more and more." This is not a hope that circumstances will improve. It is a hope in God himself, a commitment to continue praising even though circumstances are difficult.',
        },
        {
          kind: 'commentary',
          id: 'psalms71-taught',
          html: 'The psalmist has been taught by God from youth. And that teaching has not been merely intellectual. It has been expressed through action—through declaring God&apos;s wondrous works. A life of teaching others about God.',
        },
        {
          kind: 'commentary',
          id: 'psalms71-strength',
          html: 'And even in old age, the prayer continues: "Forsake me not; until I have shewed thy strength unto this generation." The psalmist asks not for leisure, but for the strength to continue witnessing, to continue telling the next generation what God has done.',
        },
        {
          kind: 'christ',
          id: 'psalms71-christ-redeemed',
          title: 'Christ Connection — The Redeemed Soul',
          html: 'Christ redeemed our souls. Not just once, but continually, throughout our lives. Even in old age, even in weakness, the redeemed soul sings. It talks of righteousness. It witnesses to the next generation. This is the work of the Holy Spirit, not of our natural strength.',
        },
        {
          kind: 'carry',
          html: 'Your life is a testimony. In youth, you witnessed to your own generation. In old age, you witness to the generation that comes after. Do not step aside. Do not think that your work is finished. God will uphold you to show His strength to those who come after you.',
        },
        {
          kind: 'reflection',
          id: 'psalms71-witness',
          prompt: 'What generation comes after you? How might you show God&apos;s strength to them, even as your own strength declines?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Cast me not off in the time of old age...By thee have I been holden up from the womb...I will yet praise thee more and more.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 71 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-71',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 71 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.71',
      description: 'Prayer of aged believer with Jewish commentary.',
    },

  ],

  hasHebrew: true,
};
