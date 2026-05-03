import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 121 — My Help Cometh from the Lord
 *
 * "I will lift up mine eyes unto the hills, from whence cometh my help."
 * A song of ascents for pilgrims climbing toward the temple.
 * "My help cometh from the Lord, which made heaven and earth."
 * "The Lord shall preserve thee from all evil: he shall keep thy soul."
 * Christ connection: Christ our Keeper, the one who watches over us,
 * who neither slumbers nor sleeps.
 */
export const PSALMS_121: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 121,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 3 },
  intros: [
    'As pilgrims climb toward Jerusalem, the hills rise before them. It is a moment of vulnerability—the ascent is long, the way ahead uncertain. But the psalmist&apos;s gaze lifts upward: "I will lift up mine eyes unto the hills, from whence cometh my help." The hills are not merely obstacles. They remind the pilgrim of the One who made them. My help comes not from the strength of my legs or the resources in my pack, but from the Lord who created heaven and earth. The Keeper of the climbers is the Maker of the mountains.',
  ],

  sections: [
    {
      ref: 'Psalm 121:1–8',
      title: 'The Keeper That Slumbereth Not',
      blocks: [
        {
          kind: 'scripture',
          chapter: 121,
          lines: [
            plain(1, 'I will lift up mine eyes unto the hills, from whence cometh my help.'),
            plain(2, 'My help cometh from the Lord, which made heaven and earth.'),
            plain(4, 'Behold, he that keepeth thee will not slumber.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-121-78mid-1',
          html:
            'The psalm turns here. The verses ahead are not the same key as the ones behind; the camera has moved.',
        },
        {
          kind: 'scripture',
          chapter: 121,
          lines: [
            plain(5, 'The Lord is thy keeper: the Lord is thy shade upon thy right hand.'),
            plain(6, 'The sun shall not smite thee by day, nor the moon by night.'),
            plain(7, 'The Lord shall preserve thee from all evil: he shall keep thy soul.'),
            plain(8, 'The Lord shall preserve thy going out and thy coming in from this time forth, and even for evermore.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps121-maker',
          html:
            'The psalm does not rest in the hills themselves. "My help cometh from the Lord, which made heaven and earth." Help is not found in natural strength or providence. It is found in the One who stands above nature, who created it, who sustains it. The Maker is the source. Everything else—hills, strength, resources—are His creation.',
        },
        {
          kind: 'commentary',
          id: 'ps121-keeper',
          html:
            '"He that keepeth thee will not slumber." In ancient Near Eastern thought, gods were sometimes depicted as sleeping or inattentive. The psalm announces a revolutionary truth: the God who keeps us does not sleep. His watch is unbroken. His attention is constant. While the pilgrim sleeps, the Keeper watches. While the pilgrim grows weary, the Keeper does not. "The Lord is thy shade upon thy right hand"—the place of protection and strength.',
        },
        {
          kind: 'commentary',
          id: 'ps121-preserve',
          html:
            '"The sun shall not smite thee by day, nor the moon by night." Protection covers every circumstance, every time. The promise is not that harm will not approach, but that it will not strike, will not wound, will not destroy. The Lord preserves the soul—the inner life, the essential self—from the assaults of evil. "The Lord shall preserve thy going out and thy coming in from this time forth, and even for evermore." The protection is comprehensive and eternal.',
        },
        {
          kind: 'christ',
          id: 'ps121-christ-keeper',
          title: 'Christ Connection — Our Keeper',
          html:
            'Christ claimed in John 10:28–29 that His sheep will never be snatched out of His hand because the Father is greater. The vision of Psalm 121—a Keeper who never sleeps, who preserves from all evil, whose protection is eternal—is fulfilled in Christ. He is the Shepherd who watches the flock; He is the one who neither slumbers nor sleeps on our behalf.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 121 invites you to lift your eyes from the immediate difficulty to the One who made all things. The hills that seem to loom before you remind you of His power. Your vulnerability does not surprise Him; it is the occasion for you to recognize that your help does not come from your own strength but from the Lord. Even now, even as you sleep or struggle, you are being kept by Him whose watch never fails.',
        },
        {
          kind: 'reflection',
          id: 'ps121-lift',
          prompt:
            'What hills are before you now? Where do you tend to look for help first—to your own strength, to others, or to the Lord? What would change in your life if you truly believed that you are being kept by One who does not sleep?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the Lord, which made heaven and earth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 121 · Study Guide',
  },
};
