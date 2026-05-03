import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 41 — The Inner Sanctuary
 *
 * The vision continues deeper into the temple. The inner sanctuary is measured. The
 * walls are paneled with wood. Carvings of cherubim and palm trees adorn the walls—
 * symbols of God&apos;s protection and the flourishing of His creation. The measure of the
 * inner sanctuary reveals a place of perfect proportion and divine habitation.
 */
export const EZEKIEL_41: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 41,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'As Ezekiel and his guide move deeper into the temple, the vision becomes more intimate and more holy. They measure the inner sanctuary—the holy place where the priests serve before God. The walls are paneled with wood. The carvings are not random ornament but symbols laden with meaning: cherubim, the guardians of God&apos;s holiness, and palm trees, symbols of peace and blessing. Every decoration points to a deeper reality—that this is a place of beauty, protection, and flourishing.',
    'The measurements continue, each one precise and purposeful. This is not a castle or a fortress. This is a dwelling place, a home where God will be present. And its beauty, its order, its careful construction, all speak to the care that God takes with His dwelling among His people.',
  ],

  sections: [
    {
      ref: 'Ezekiel 41:1–26',
      title: 'The Holy Place',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            plain(1, 'Afterward he brought me to the temple, and measured the posts, six cubits broad on the one side, and six cubits broad on the other side, which was the breadth of the tabernacle.'),
            plain(5, 'Then said he unto me, The breadth of the face of the house, and the length of the sanctuary, and the lengths thereof, and the breadths thereof, were as the measures thereof.'),
            plain(15, 'And he measured the length of the building over against the separate place which was behind it, and the galleries thereof on the one side and on the other side, an hundred cubits, with the inner temple, and the porches of the court;'),
            plain(22, 'The altar of wood was three cubits high, and the length thereof two cubits; and the corners thereof, and the length thereof, and the walls thereof, were of wood. And he said unto me, This is the table that is before the Lord.'),
            plain(25, 'And there were made on them, on the doors of the temple, cherubim and palm trees, like as were made upon the walls; and there was a thick plank upon the face of the porch.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel41-posts',
          html:
            'The posts measure six cubits on each side—the breadth matches the tabernacle of old. There is continuity with the past, even as there is renewal. The new temple echoes the old, honoring what was while building what will be.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel41-cherubim',
          html:
            'Cherubim guard the entrance to the holy place. They are the symbols of God&apos;s holiness and of His protection of the sacred. Palm trees represent flourishing, growth, and the blessing of God. Together, they suggest that in the holy place, those who enter find both protection and abundance.',
        },
        {
          kind: 'hebrew',
          id: 'ezekiel41-heichel',
          title: 'Heichel — "Temple/Palace" ',
          script: 'הֵיכָל',
          translit: '<strong>Heichel</strong> · temple; palace; sanctuary; the inner dwelling place',
          description:
            'The heichel is not merely a building but a throne room. It is where the king dwells. In the temple, it is where God dwells among His people.',
        },
        {
          kind: 'christ',
          id: 'ezekiel41-christ-dwelling',
          title: 'Christ Connection — God Dwelling with Us',
          html:
            'In Revelation 21:3, John hears a great voice: "Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God." This is the culmination of Ezekiel&apos;s vision. The separated holy place is no longer needed because God&apos;s dwelling place is now universal. All who trust in Christ become the temple. God dwells not in a building, but in His people.',
        },
        {
          kind: 'carry',
          html:
            'The care taken with the construction of the temple speaks to the care God takes with His people. You are being built into a spiritual house. The measuring rod is in His hand. Each dimension of your life is being shaped by His purpose and His love.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel41-built',
          prompt: 'Do you see yourself as being built by God into a dwelling place of His Spirit? What areas of your life are still being measured and shaped?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'There were made on them, on the doors of the temple, cherubim and palm trees.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 41 · Study Guide',
  },

  hasHebrew: true,
};
