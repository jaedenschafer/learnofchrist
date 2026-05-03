import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 40 — The Vision of the New Temple
 *
 * In a series of visions extending through chapter 48, Ezekiel is shown a temple
 * restored and renewed in Jerusalem. The vision begins here with detailed measurements,
 * rooms, gates, and dimensions. Every number matters. Every detail points to order,
 * precision, and the return of God&apos;s dwelling place to His people. This foreshadows
 * Christ, who becomes the true Temple.
 */
export const EZEKIEL_40: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 40,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'In the twenty-fifth year of exile, in visions as clear as the day he was taken captive, Ezekiel is transported back to the land of Israel. He is placed high on a mountain, and before him is a vision of a city. A man with a measuring rod stands beside him. This man—some have understood him to be an angel, others to be a representative of God Himself—will show Ezekiel every detail of a new temple. Every measurement is precise. Every dimension is given.',
    'To modern readers, the descriptions can seem tedious. Why such attention to detail? Why measure every cubit? Because the temple is not merely a building. It is the throne room of God, the place where heaven and earth meet. And its restoration, its renewal, its perfection, is the sign that God is coming home to His people. After exile, after judgment, after cleansing—God returns.',
  ],

  sections: [
    {
      ref: 'Ezekiel 40:1–27',
      title: 'The Measuring of the Temple',
      blocks: [
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            plain(1, 'In the twenty-fifth year of our captivity, in the beginning of the year, in the tenth day of the month, in the fourteenth year after that the city was smitten, in the selfsame day the hand of the Lord was upon me, and brought me thither.'),
            plain(3, 'And he brought me thither, and, behold, there was a man, whose appearance was like the appearance of brass, with a line of flax in his hand, and a measuring reed; and he stood in the gate.'),
            plain(5, 'And behold a wall on the outside of the house round about, and in the man&apos;s hand a measuring reed of six cubits long by the cubit and an hand breadth: so he measured the breadth of the building, one reed; and the height, one reed.'),
            plain(28, 'Then he brought me to the temple, and measured the posts of the temple, six cubits broad on the one side, and six cubits broad on the other side, which was the breadth of the tabernacle.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel40-measuring',
          html:
            'The appearance of a figure with a measuring rod is the sign that order and plan are being restored. Exile was chaos—the temple destroyed, the people scattered, the boundaries of the holy land violated. Now measurement returns. This is the return of civilization, of order, of the divine blueprint.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel40-numbers',
          html:
            'The obsessive attention to measurement is not mere architectural detail. In biblical thought, numbers carry meaning. Six is the number of humanity and imperfection. Seven is completion. Twelve is God&apos;s people. The specific measurements of the temple encode theological meaning into its very structure.',
        },
        {
          kind: 'hebrew',
          id: 'ezekiel40-ammah',
          title: 'Ammah — "Cubit" ',
          script: 'אַמָּה',
          translit: '<strong>Ammah</strong> · cubit; the distance from elbow to fingertip; a measure of length',
          description:
            'A cubit is the distance from the elbow to the tip of the fingers—roughly 18 inches. It is a human measurement, yet here applied to the divine dwelling place. The temple is measured in human terms because it is the place where human and divine meet.',
        },
        {
          kind: 'christ',
          id: 'ezekiel40-christ-temple',
          title: 'Christ Connection — Christ the True Temple',
          html:
            'In John 2:19–21, Christ says: "Destroy this temple, and in three days I will raise it up." And John explains: "He spake of the temple of his body." Christ is the true temple. In Him, the separated holy place and the outer court are united. In Him, heaven and earth meet. His body is the dwelling place of God.',
        },
        {
          kind: 'carry',
          html:
            'Ezekiel&apos;s meticulous vision teaches that God pays attention to detail. He notices measurements. He cares about order and structure. He is not abstract or vague. He is precise, present, and concerned with the actual world of His people.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel40-blueprint',
          prompt: 'Do you tend to think of God as concerned with details, or as caring only about broad strokes? How might Ezekiel&apos;s precision change the way you see God&apos;s attention to your life?',
        },
      ],
    },

    {
      ref: 'Ezekiel 40:28–49',
      title: 'The Gates and Chambers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            plain(28, 'And he brought me to the inner court by the south gate: and he measured the south gate according to these measures;'),
            plain(38, 'And the chambers and the entries thereof were by the posts of the gates, where they washed the burnt offering.'),
            plain(48, 'And he brought me to the porch of the house, and measured each post of the porch, five cubits on this side, and five cubits on that side: and the breadth of the gate was three cubits on this side, and three cubits on that side.'),
            plain(49, 'The length of the porch was twenty cubits, and the breadth eleven cubits; and he brought me by the steps whereby they went up to it: and there were pillars by the posts, one on this side, and another on that side.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel40-gates',
          html:
            'Gates and entries represent access—who can enter, at what stages, by what path. The temple is not open to all equally. There is an outer court for the people, an inner court for the priests, a holy place, and a holy of holies. Each has its place. Each has its boundary.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel40-wash',
          html:
            'The chambers are places where the priests wash. Washing and purification are central to access to the holy. You cannot enter the presence of God without being cleansed. This is not a New Testament insight alone, but a truth embedded in the structure of the temple itself.',
        },
        {
          kind: 'carry',
          html:
            'The vision reveals that relationship with God is not abstract. It has structure. It has steps. It has gates and chambers. To approach God is to move through ordered stages of drawing closer, each one requiring preparation and purity.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel40-approach',
          prompt: 'Do you think of approaching God as something that requires steps and preparation, or as instantaneous and without barriers? What would it mean to take the journey of the temple seriously?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'There was a man, whose appearance was like the appearance of brass, with a line of flax in his hand, and a measuring reed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 40 · Study Guide',
  },

  hasHebrew: true,
};
