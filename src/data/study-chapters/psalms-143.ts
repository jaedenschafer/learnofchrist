import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 143 — Righteousness as Deliverance
 *
 * "Hear my prayer, O Lord...In thy righteousness deliver me out of trouble." The
 * psalmist does not ask to be saved by his own righteousness—he knows he is
 * flawed, sinful, unworthy. Instead, he appeals to God&apos;s righteousness. Let
 * God&apos;s justice, God&apos;s faithful character, God&apos;s commitment to what is
 * right be the grounds of deliverance. The prayer is simple: a righteous God will
 * not abandon a soul that cries out in truth. Teach me Your way. Let Your spirit
 * guide me. Deliver me by Your righteousness.
 */
export const PSALMS_143: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 143,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  opener: {
    matchTitle: /Utrecht Psalter Psalm/i,
    caption: 'Psalms 143',
  },
  intros: [
    'Psalm 143 is the last of the great penitential psalms—a prayer of David offered in deep distress. But unlike many laments, this psalm has a unique focus: it appeals not to the psalmist&apos;s own worth or righteousness, but to God&apos;s. "In thy righteousness deliver me," the psalmist cries. This is the breakthrough of the gospel in the Old Testament. The psalmist knows that his own righteousness is insufficient. He knows that he has sinned. His only hope is God&apos;s righteousness—God&apos;s commitment to what is right and just, God&apos;s covenant faithfulness, God&apos;s mercy toward the repentant.',
  ],

  sections: [
    {
      ref: 'Psalm 143:1–6',
      title: 'Hear My Prayer, Teach Me Your Way',
      blocks: [
        {
          kind: 'scripture',
          chapter: 143,
          lines: [
            plain(1, 'Hear my prayer, O Lord, give ear to my supplications: in thy faithfulness answer me, and in thy righteousness.'),
            plain(2, 'And enter not into judgment with thy servant: for in thy sight shall no man living be justified.'),
            plain(3, 'For the enemy hath persecuted my soul; he hath smitten my life down to the ground; he hath made me to dwell in darkness, as those that have been long dead.'),
            plain(4, 'Therefore is my spirit overwhelmed within me; my heart within me is desolate.'),
            plain(5, 'I remember the days of old; I meditate on all thy works; I muse on the work of thy hands.'),
            plain(6, 'I stretch forth my hands unto thee: my soul thirsteth after thee, as a thirsty land. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm143-faithfulness',
          html:
            '"Hear my prayer, O Lord, give ear to my supplications: in thy faithfulness answer me, and in thy righteousness." The psalmist appeals to God&apos;s character. He asks God to answer not because the psalmist deserves it, but because God is faithful, because God is righteous. God&apos;s nature—His commitment to truth and to His covenant—is the ground of hope. [res:sefaria-psalm-143]',
        },
        {
          kind: 'hebrew',
          id: 'psalm143-tsedaqah',
          title: 'Tsedaqah — "Righteousness" (Justice)',
          script: 'צְדָקָה',
          translit: '<strong>Tsedaqah</strong> · righteousness, justice, right-doing, faithfulness to covenant',
          description:
            'Tsedaqah is not mere moral perfection. It is the righteousness of one who keeps covenant, who does what is right and just, who is faithful to their commitments. God&apos;s tsedaqah is His unwavering commitment to justice and mercy.',
        },
        {
          kind: 'commentary',
          id: 'psalm143-judgment',
          html:
            '"And enter not into judgment with thy servant: for in thy sight shall no man living be justified." This is extraordinary. The psalmist does not ask that God ignore his sin. He asks that God not enter into judgment with him on the basis of his own righteousness. For no one, standing before God in judgment, would be found righteous. All are sinners. The psalmist is saying: I cannot defend myself before Your justice. My only hope is Your mercy[res:bibleodyssey-psalter-laments].',
        },
        {
          kind: 'commentary',
          id: 'psalm143-enemy',
          html:
            '"For the enemy hath persecuted my soul; he hath smitten my life down to the ground." The psalmist faces real enemies. But notice the progression: from the weight of judgment with God, to the persecution of enemies, to the darkness that makes him feel as dead. The external threat mirrors the internal despair.',
        },
        {
          kind: 'commentary',
          id: 'psalm143-remember',
          html:
            'Yet the psalmist then does something remarkable: "I remember the days of old; I meditate on all thy works; I muse on the work of thy hands." He turns from his despair to remembrance. He recalls the Lord&apos;s mighty deeds of old. He meditates on what God has done. And "I stretch forth my hands unto thee: my soul thirsteth after thee, as a thirsty land." The memory of God&apos;s faithfulness awakens longing and renewed trust.',
        },
      ],
    },

    {
      ref: 'Psalm 143:7–12',
      title: 'Deliver Me by Your Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 143,
          lines: [
            plain(7, 'Hear me speedily, O Lord: my spirit faileth: hide not thy face from me, lest I be like unto them that go down into the pit.'),
            plain(8, 'Cause me to hear thy lovingkindness in the morning; for in thee do I trust: cause me to know the way wherein I should walk; for I lift up my soul unto thee.'),
            plain(9, 'Deliver me, O Lord, from mine enemies: I flee unto thee to hide me.'),
            plain(10, 'Teach me to do thy will; for thou art my God: thy spirit is good; lead me into the land of uprightness.'),
            plain(11, 'Quicken me, O Lord, for thy name&apos;s sake: for thy righteousness&apos; sake bring my soul out of trouble.'),
            plain(12, 'And of thy mercy cut off mine enemies: for I am thy servant.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm143-speedily',
          html:
            '"Hear me speedily, O Lord: my spirit faileth: hide not thy face from me, lest I be like unto them that go down into the pit." The psalmist&apos;s spirit is failing. He needs a quick response. The worst outcome would be if God hid His face—if God seemed absent. That would be like being among the dead, in the pit. To be hidden from God is death.',
        },
        {
          kind: 'commentary',
          id: 'psalm143-morning',
          html:
            '"Cause me to hear thy lovingkindness in the morning; for in thee do I trust: cause me to know the way wherein I should walk; for I lift up my soul unto thee." The prayer shifts to petition. The psalmist asks to hear God&apos;s lovingkindness in the morning—to awaken to comfort and reassurance. He asks to know the way to walk. He lifts his soul to God—an offering, a gesture of surrender and trust.',
        },
        {
          kind: 'carry',
          html:
            'Some mornings you can&apos;t get out of bed. Not because you&apos;re lazy—because the weight is unbearable, because the day ahead is one impossible thing after another. When that happens, you don&apos;t need a ten-step plan. You need one short prayer for the first thing: "Show me the next step. Just the next step." Not the whole mountain, not the month. The hour. The task. The conversation. God will meet you there, one small yes at a time.',
        },
        {
          kind: 'commentary',
          id: 'psalm143-thy-will',
          html:
            '"Teach me to do thy will; for thou art my God: thy spirit is good; lead me into the land of uprightness." The psalmist asks to be taught God&apos;s will. Not to fight it, but to do it. The recognition is clear: thou art my God—my loyalty is to Him. His spirit is good. Where He leads, the land is upright, true, right.',
        },
        {
          kind: 'commentary',
          id: 'psalm143-quicken',
          html:
            '"Quicken me, O Lord, for thy name&apos;s sake: for thy righteousness&apos; sake bring my soul out of trouble." Quicken means to make alive, to restore. The psalmist asks to be revived. And once again, he appeals not to his own merit, but to God&apos;s: for Your name&apos;s sake, for Your righteousness&apos; sake. Let God&apos;s character be the reason for deliverance.',
        },
        {
          kind: 'christ',
          id: 'psalm143-christ-righteousness',
          title: 'Christ Connection — God&apos;s Righteousness Revealed',
          html:
            'In Romans 3:21–22, Paul writes: "The righteousness of God has been manifested...the righteousness of God through faith in Jesus Christ for all those who believe." Christ is the embodiment of God&apos;s righteousness. In Him, God&apos;s character—His justice, His mercy, His faithfulness—is fully revealed. To trust in Christ&apos;s righteousness is what the psalmist was reaching for. [res:bible-odyssey-psalm-143]',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Hear my prayer, O Lord...In thy righteousness deliver me out of trouble.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 143 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-143',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 143 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.143',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-143',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 143 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+143',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },

  ],

  hasHebrew: true,
};
