import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const PSALMS_63: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 63,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 63',
  },
  intros: [
    'David is in the wilderness[res:bible-odyssey-desert-psalms] of Judah, far from the sanctuary, far from the normal rhythms of worship. He is a fugitive, hunted, homeless. And yet his deepest longing is not for physical comfort or safety, but for God. "O God, thou art my God; early will I seek thee: my soul thirsteth for thee, my flesh longeth for thee in a weary and thirsty land, where no water is." His thirst for God is more urgent, more real, than his physical need for water.',
    'Psalm 63 is one of the most intimate prayers in Scripture—the cry of a soul parched for the presence of God. "Because thy lovingkindness is better than life, my lips shall praise thee." Better than life itself—this is David&apos;s assessment of God&apos;s lovingkindness. And in that assessment, he finds satisfaction that no earthly circumstance can take away.',
  ],

  sections: [
    {
      ref: 'Psalm 63:1–8',
      title: 'Thirsting for God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 63,
          lines: [
            plain(1, 'O God, thou art my God; early will I seek thee: my soul thirsteth for thee, my flesh longeth for thee in a weary and thirsty land, where no water is.'),
            plain(2, 'To see thy power and thy glory, so as I have seen thee in the sanctuary.'),
            plain(3, 'Because thy lovingkindness is better than life, my lips shall praise thee.'),
            plain(4, 'Thus will I bless thee while I live: I will lift up my hands in thy name.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-63-78mid-1',
          html:
            'Thirst in the wilderness gives way to joy and praise. The desert[res:sefaria-psalms-63]&apos;s desolation becomes the soul&apos;s exultation[res:bibleodyssey-psalter-laments].',
        },
        {
          kind: 'scripture',
          chapter: 63,
          lines: [
            plain(5, 'My soul shall be satisfied as with marrow and fatness; and my mouth shall praise thee with joyful lips:'),
            plain(6, 'When I remember thee upon my bed, and meditate upon thee in the night watches.'),
            plain(7, 'Because thou hast been my help, therefore in the shadow of thy wings will I rejoice.'),
            plain(8, 'My soul followeth hard after thee: thy right hand upholdeth me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms63-thirsteth',
          html: '"O God, thou art my God; early will I seek thee: my soul thirsteth for thee." David&apos;s thirst is not a metaphor. It is a lived experience in the wilderness. His soul is parched. He longs for God as desperately as his body longs for water. And he seeks God early—not as an afterthought, but first, before all else.',
        },
        {
          kind: 'hebrew',
          id: 'psalms63-tzama',
          title: 'Tzama — "Thirsts" (Yearns)',
          script: 'צָמֵא',
          translit: '<strong>Tzama</strong> · to thirst; to long for; to yearn',
          description: 'The Hebrew tzama is the cry of one parched, desperate for water. David uses this word for his longing for God. His spiritual thirst is as real, as urgent as physical thirst.',
        },
        {
          kind: 'commentary',
          id: 'psalms63-lovingkindness-life',
          html: '"Because thy lovingkindness is better than life, my lips shall praise thee." This is David&apos;s radical assessment. God&apos;s covenant love is better than life itself. More valuable, more desirable, more worth praising than the mere continuation of existence.',
        },
        {
          kind: 'commentary',
          id: 'psalms63-marrow-fatness',
          html: '"My soul shall be satisfied as with marrow and fatness; and my mouth shall praise thee with joyful lips." David uses the image of the richest, most nourishing food. This is the satisfaction he finds in God. The deepest hunger of his soul is fed.',
        },
        {
          kind: 'commentary',
          id: 'psalms63-remember-night',
          html: '"When I remember thee upon my bed, and meditate upon thee in the night watches." Even in the darkness of night, alone in the wilderness, David remembers God. He meditates on Him. God&apos;s presence keeps him awake in worship.',
        },
        {
          kind: 'christ',
          id: 'psalms63-christ-thirst',
          title: 'Christ Connection — Thirst Satisfied',
          html: 'Christ speaks in John 4:14: "whosoever drinketh of the water that I shall give him shall never thirst; but the water that I shall give him shall be in him a well of water springing up into everlasting life." Christ is the answer to David&apos;s thirst. In Him, the soul finds satisfaction that no circumstance can diminish.',
        },
        {
          kind: 'carry',
          html: 'Psalm 63 teaches that our deepest need is not for physical comfort or security, but for God Himself. When we make Him our chief desire, when we thirst for His presence above all else, we discover a satisfaction that no external circumstance can take away.',
        },
        {
          kind: 'reflection',
          id: 'psalms63-thirst-for-god',
          prompt: 'What does your soul truly thirst for? Can you say with David that God&apos;s lovingkindness is better than life itself?',
        },
      ],
    },

    {
      ref: 'Psalm 63:9–11',
      title: 'Enemies Brought Low',
      blocks: [
        {
          kind: 'scripture',
          chapter: 63,
          lines: [
            plain(9, 'But those that seek my soul, to destroy it, shall go into the lower parts of the earth.'),
            plain(10, 'They shall fall by the sword: they shall be a portion for foxes.'),
            plain(11, 'But the king shall rejoice in God; every one that sweareth by him shall glory: but the mouth of them that speak lies shall be stopped.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms63-lower-parts',
          html: '"But those that seek my soul, to destroy it, shall go into the lower parts of the earth." His enemies will be brought down, will descend to the grave. While David is lifted up in worship and joy, his enemies descend to death and destruction.',
        },
        {
          kind: 'commentary',
          id: 'psalms63-portion-foxes',
          html: '"They shall fall by the sword: they shall be a portion for foxes." The imagery is stark: death by violence, and their bodies left for scavengers. This is the end of those who pursue wickedness.',
        },
        {
          kind: 'commentary',
          id: 'psalms63-king-rejoice',
          html: '"But the king shall rejoice in God; every one that sweareth by him shall glory." David—the king—will rejoice. Those who swear by God, who make their covenant with Him, will find glory. But the liars will be silenced.',
        },
        {
          kind: 'carry',
          html: 'Psalm 63 assures us that when our deepest satisfaction is found in God, we cannot be ultimately defeated by our enemies. They may pursue us, but they cannot take from us what matters most: our communion with God, our assurance of His love, our joy in His presence.',
        },
        {
          kind: 'reflection',
          id: 'psalms63-king-rejoice-2',
          prompt: 'How would your life change if your primary joy came from God rather than from defeating your enemies or securing your circumstances?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O God, thou art my God; early will I seek thee: my soul thirsteth for thee.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 63 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-63',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 63 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.63',
      description: 'Desert meditation on God with Jewish medieval exegesis.',
    },

  ],

  hasHebrew: true,
};
