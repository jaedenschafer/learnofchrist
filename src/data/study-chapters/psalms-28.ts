import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 28 — My Rock and Fortress
 *
 * "Unto thee will I cry, O Lord my rock." The psalm opens with petition and
 * closes with answered prayer. "The Lord is my strength and my shield." In this
 * short psalm, the psalmist moves from desperate prayer to confident praise. God
 * is the rock upon which one stands, unshakable, immovable. And Christ is
 * presented throughout Scripture as the Rock, the one upon whom the Church is
 * built, the foundation that cannot be moved.
 */
export const PSALMS_28: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 28,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Psalm 28 is brief but profound. It moves with remarkable swiftness from anguished petition to joyful confidence. The psalmist cries out to God as his rock, and by the end of the psalm, he is already praising God for having answered him. This movement—from prayer to thanksgiving before the answer is physically visible—is the mark of genuine faith.',
  ],

  sections: [
    {
      ref: 'Psalm 28:1–9',
      title: 'From Cry to Strength',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(1, 'Unto thee will I cry, O Lord my rock; be not silent to me: lest, if thou be silent to me, I become like them that go down into the pit.'),
            plain(2, 'Hear the voice of my supplications, when I cry unto thee, when I lift up my hands toward thy holy oracle.'),
            plain(3, 'Draw me not away with the wicked, and with the workers of iniquity, which speak peace to their neighbours, but mischief is in their hearts.'),
            plain(4, 'Give them according to their deeds, and according to the wickedness of their endeavours: give them after the work of their hands; render to them their desert.'),
            plain(5, 'Because they regard not the works of the Lord, nor the operation of his hands, therefore he shall destroy them, and not build them up.'),
            plain(6, 'Blessed be the Lord, because he hath heard the voice of my supplications.'),
            plain(7, 'The Lord is my strength and my shield; my heart trusted in him, and I am helped: therefore my heart greatly rejoiceth; and with my song will I praise him.'),
            plain(8, 'The Lord is the strength of his people, and he is the saving strength of his anointed.'),
            plain(9, 'Save thy people, and bless thine inheritance: feed them also, and lift them up for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms28-rock-cry',
          html: 'The psalm opens with an urgent cry: "Unto thee will I cry, O Lord my rock." The rock is not merely a symbol of God&apos;s strength. It is the foundation upon which one stands. To call God "my rock" is to declare that all stability, all security, all solid ground comes from Him. And the fear is stark: "lest, if thou be silent to me, I become like them that go down into the pit." To be abandoned by God is to descend into death itself.',
        },
        {
          kind: 'hebrew',
          id: 'psalms28-tsur',
          title: 'Tsur — "Rock" (Foundation)',
          script: 'צוּר',
          translit: '<strong>Tsur</strong> · rock; cliff; strength; foundation',
          description: 'The Hebrew word tsur refers to the solid rock upon which structures are built. It is immovable, enduring, a sure foundation. When the psalmist calls God his tsur, he is expressing absolute dependence on God&apos;s unchanging character. God is not a foundation that shifts or crumbles. He is the Rock.',
        },
        {
          kind: 'commentary',
          id: 'psalms28-answer-swift',
          html: 'Remarkably, the shift from petition to praise comes swiftly. Between verse 5 and verse 6, the prayer is answered. "Blessed be the Lord, because he hath heard the voice of my supplications." There is no lingering doubt, no waiting for physical evidence. The psalmist believes God has heard and answered. His faith does not rest on what he can see, but on God&apos;s character.',
        },
        {
          kind: 'christ',
          id: 'psalms28-christ-rock',
          title: 'Christ Connection — The Rock',
          html: '1 Corinthians 10:4 declares that the rock that followed Israel in the wilderness "was Christ." Matthew 16:18 records Jesus saying, "Upon this rock I will build my church." Christ is the Rock upon which God&apos;s people are built. He is the unshakable foundation. He is the strength that does not fail. In Him, we find our standing, our security, our hope.',
        },
        {
          kind: 'carry',
          html: 'The psalmist teaches that to pray is to believe that God hears. To call upon Him is to trust that He has already answered, even if we cannot yet see the answer. This is faith: not the absence of struggle, but the conviction that the Rock upon which we stand will not slip beneath our feet.',
        },
        {
          kind: 'reflection',
          id: 'psalms28-rock-trust',
          prompt: 'What does it mean for you to stand upon God as your rock? When have you experienced Him as a stable foundation when everything else was shifting? How might that past experience deepen your trust in Him now?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Unto thee will I cry, O Lord my rock. ...The Lord is my strength and my shield; my heart trusted in him, and I am helped.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 28 · Study Guide',
  },

  hasHebrew: true,
};
