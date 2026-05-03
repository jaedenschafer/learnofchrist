import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 80 — God&apos;s Face Shining
 *
 * "Stir up thy strength, and come and save us. Turn us again, O God of hosts,
 * cause thy face to shine; and we shall be saved." The refrain repeats three
 * times—each time calling on God to make His face shine. The ancient blessing
 * of the priests—"the Lord make his face to shine upon thee"—becomes the
 * desperate prayer of a people who have lost sight of God&apos;s favor.
 */
export const PSALMS_80: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 80,

  estimatedMinutes: { 5: 2, 10: 4, 15: 5 },
  intros: [
    'Psalm 80 is built around a repeated refrain: "Turn us again, O God of hosts, cause thy face to shine; and we shall be saved." This refrain appears three times, each time structured identically. The repetition is not monotony. It is the rhythm of desperate prayer, the circling back again and again to the one plea that matters. The psalmist is not asking for many things. He is asking for one thing: that God&apos;s face would shine.',
    'The image draws from the ancient blessing spoken by the priests of Israel: "The Lord bless thee, and keep thee: The Lord make his face to shine upon thee, and be gracious unto thee." But now that blessing seems to have been withdrawn. God&apos;s face is hidden. And without it, the people cannot be saved. The psalm teaches us what the psalmist has learned: we do not need many good things. We need God&apos;s face shining upon us.',
  ],

  sections: [
    {
      ref: 'Psalm 80:1–7',
      title: 'The Hidden Face',
      blocks: [
        {
          kind: 'scripture',
          chapter: 80,
          lines: [
            plain(1, 'Give ear, O Shepherd of Israel, thou that leadest Joseph like a flock; thou that dwellest between the cherubims, shine forth.'),
            plain(3, 'Turn us again, O God, and cause thy face to shine; and we shall be saved.'),
            plain(4, 'O Lord God of hosts, how long wilt thou be angry against the prayer of thy people?'),
            plain(7, 'Turn us again, O God of hosts, and cause thy face to shine; and we shall be saved.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms80-shepherd',
          html:
            'The psalm opens with a call to the Shepherd of Israel. God is addressed as the one who leads Israel like a flock, who dwells between the cherubims, the guardian of the holiest place. And yet: "Shine forth." The implication is that God&apos;s light is hidden. The Shepherd is not visible to the flock. The One who dwells in the holiest place seems remote.',
        },
        {
          kind: 'hebrew',
          id: 'psalms80-panecha',
          title: 'Panecha — "Thy Face" (Thy Countenance)',
          script: 'פָנַיִךָ',
          translit: '<strong>Panecha</strong> · thy face, thy countenance, thy presence made visible',
          description:
            'The Hebrew word panecha speaks of God&apos;s face, but more than that, God&apos;s presence revealed and visible. When God&apos;s face shines, it is not merely light. It is the visible presence of God, the assurance that He is near, that He sees, that He cares.',
        },
        {
          kind: 'commentary',
          id: 'psalms80-anger',
          html:
            'The refrain is repeated: "Turn us again, O God, and cause thy face to shine; and we shall be saved." And then a question: "How long wilt thou be angry against the prayer of thy people?" God&apos;s people are praying, and yet God seems to be angry with their prayers. The image is almost unbearable—to pray and to have your prayer met with anger rather than with compassion.',
        },
        {
          kind: 'christ',
          id: 'psalms80-christ-face',
          title: 'Christ Connection — God&apos;s Face in Christ',
          html:
            'In 2 Corinthians 4:6, Paul writes: "God, who commanded the light to shine out of darkness, hath shined in our hearts, to give the light of the knowledge of the glory of God in the face of Jesus Christ." Christ is the face of God shining. To see Christ is to see God&apos;s face. In His life, His death, His resurrection, God&apos;s face shines upon us with unambiguous clarity. We are saved by that shining.',
        },
        {
          kind: 'carry',
          html:
            'If you are in a place where God&apos;s face seems hidden, where your prayers seem to meet with silence, the psalm gives you words to cry out. But it also teaches you what you most deeply need: not comfort, not explanation, but the shining of God&apos;s face. Everything else flows from that.',
        },
        {
          kind: 'reflection',
          id: 'psalms80-face-shine',
          prompt: 'What does it feel like when God&apos;s face seems to shine upon you? What happens to your faith when it feels hidden?',
        },
      ],
    },

    {
      ref: 'Psalm 80:14–19',
      title: 'Restoration and Return',
      blocks: [
        {
          kind: 'scripture',
          chapter: 80,
          lines: [
            plain(14, 'Return, we beseech thee, O God of hosts: look from heaven, and behold, and visit this vine;'),
            plain(15, 'And the vineyard which thy right hand hath planted, and the branch that thou madest strong for thyself.'),
            plain(17, 'Let thy hand be upon the man of thy right hand, upon the son of man whom thou madest strong for thyself.'),
            plain(18, 'So will not we go back from thee: quicken us, and we will call upon thy name.'),
            plain(19, 'Turn us again, O Lord God of hosts, cause thy face to shine; and we shall be saved.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms80-vine',
          html:
            'The psalmist has been using the image of a vine throughout the psalm—a vine that God planted with His own hand, that He established and made strong. Now he appeals to God on the basis of what God has already done. "Return...and behold, and visit this vine." God has planted this vineyard. God established it. Will He not return to care for what He has planted?',
        },
        {
          kind: 'commentary',
          id: 'psalms80-son',
          html:
            'And then a curious phrase: "Let thy hand be upon the man of thy right hand, upon the son of man whom thou madest strong for thyself." The translation is difficult, but the language suggests a human leader—perhaps the king, perhaps the Messiah—upon whom God&apos;s hand rests. The salvation of the people is bound up with this figure.',
        },
        {
          kind: 'commentary',
          id: 'psalms80-final',
          html:
            'The psalm ends as it began, with the refrain repeated for the final time: "Turn us again, O Lord God of hosts, cause thy face to shine; and we shall be saved." The repetition itself is a kind of persistence, a refusal to accept that God has abandoned His people, a faith that holds onto one prayer through every darkness.',
        },
        {
          kind: 'christ',
          id: 'psalms80-christ-vine',
          title: 'Christ Connection — The True Vine',
          html:
            'In John 15, Jesus says: "I am the true vine, and my Father is the husbandman." The vine that God planted and established finds its fulfillment in Christ. And Christ is also "the man of thy right hand," the Son of Man upon whom God&apos;s hand rests. When God&apos;s face shines in Christ, the salvation of the whole people—the whole vineyard—is assured.',
        },
        {
          kind: 'carry',
          html:
            'You are part of God&apos;s vineyard, planted by His own hand, established by His own care. Though you may feel abandoned, though God&apos;s face may seem hidden, you belong to Him. And He will return. He will cause His face to shine. And in that shining, you shall be saved.',
        },
        {
          kind: 'reflection',
          id: 'psalms80-vineyard',
          prompt: 'How do you experience being part of God&apos;s vineyard? What does it mean that God has invested His own hand in your growth?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Turn us again, O God of hosts, cause thy face to shine; and we shall be saved...Let thy hand be upon the man of thy right hand.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 80 · Study Guide',
  },

  hasHebrew: true,
};
