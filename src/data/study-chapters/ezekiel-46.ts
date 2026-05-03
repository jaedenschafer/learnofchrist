import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 46 — Worship Regulations
 *
 * The worship life of the renewed community is detailed. The prince will worship
 * with the people. The sabbath is honored. The regular offerings sustain the
 * covenant relationship. These are not grievous rules but the rhythms of a people
 * aligned with God, marking time by their devotion to Him.
 */
export const EZEKIEL_46: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 46,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 4 },
  intros: [
    'Worship sustains covenant relationship. In this chapter, Ezekiel describes the patterns of worship in the renewed temple: daily offerings, sabbath observances, new moon festivals, and the prince&apos;s role in leading the people in worship. The prince is not above worship or exempt from it. He worships alongside his people. He leads them by example. The worship patterns are regular, sustainable, and shared.',
    'There is grace in the structure. The worship is not excessive or burdensome. It fits within the rhythm of daily and weekly life. The people know when to gather, what to bring, and what to expect. This is not oppressive law but the orderly pattern of a people learning to live continually in God&apos;s presence.',
  ],

  sections: [
    {
      ref: 'Ezekiel 46:1–18',
      title: 'The Prince&apos;s Worship',
      blocks: [
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            plain(1, 'Thus saith the Lord God; The gate of the inner court that looketh toward the east shall be shut the six working days; but on the sabbath it shall be opened, and in the day of the new moon it shall be opened.'),
            plain(2, 'And the prince shall enter by the way of the porch of that gate without, and shall stand by the post of the gate, and the priests shall prepare his burnt offering and his peace offerings, and he shall worship at the threshold of the gate: then he shall go forth; but the gate shall not be shut until the evening.'),
            plain(4, 'And the burnt offering that the prince shall offer unto the Lord in the sabbath day shall be six lambs without blemish, and a ram without blemish.'),
            plain(16, 'Thus saith the Lord God; If the prince give a gift to any of his sons, the inheritance thereof shall be his sons&apos;; it shall be their possession by inheritance.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel46-gate-closed',
          html:
            'The eastern gate, through which God&apos;s glory entered, is kept closed on working days. It opens only on the sabbath and at the new moon—times of special worship and celebration. The closed gate reminds the people that what is holy is also separate, set apart, not for everyday commerce.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel46-prince-worship',
          html:
            'The prince does not sit in a private chamber while priests offer. He stands at the threshold and worships with the people. His offering is prescribed, regular, and public. Leadership is demonstrated not by exemption from worship but by participation in it.',
        },
        {
          kind: 'hebrew',
          id: 'ezekiel46-olah',
          title: 'Olah — "Burnt Offering" ',
          script: 'עוֹלָה',
          translit: '<strong>Olah</strong> · burnt offering; a whole offering consumed in fire, rising to God',
          description:
            'The burnt offering symbolizes complete dedication. The whole animal is burned, nothing reserved. It represents the whole person given to God.',
        },
        {
          kind: 'christ',
          id: 'ezekiel46-christ-worship',
          title: 'Christ Connection — Christ the Worship-Offering',
          html:
            'In Hebrews 10:10, the writer says "we are sanctified through the offering of the body of Jesus Christ once for all." Christ is the perfect burnt offering. His entire self was offered to the Father, burning away the barriers between human and divine. And in Him, all believers become a holy and acceptable offering to God.',
        },
        {
          kind: 'carry',
          html:
            'Worship is not a private thing. The prince worships with the people. The people see their leader at the threshold, offering with them. This is the pattern: leaders lead by worshiping, by demonstrating dependence on God, by setting the rhythm of devotion.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel46-worship-pattern',
          prompt: 'What role does regular worship play in your life? Does it mark your time and shape your rhythm, or does it feel disconnected from daily living?',
        },
      ],
    },

    {
      ref: 'Ezekiel 46:19–24',
      title: 'The Kitchens of the Temple',
      blocks: [
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            plain(19, 'After he brought me through the entry, which was at the side of the gate, into the holy chambers of the priests, which looked toward the north: and, behold, there was a place on the two sides westward.'),
            plain(20, 'Then said he unto me, This is the place where the priests shall boil the trespass offering and the sin offering, where they shall bake the meat offering; that they bear them not out into the utter court, to sanctify the people.'),
            plain(23, 'And there were four little chambers, one in the corner of another, foursquare, and they were not joined together.'),
            plain(24, 'Then said he unto me, These are the places of them that boil, where the ministers of the house shall boil the sacrifice of the people.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel46-kitchens',
          html:
            'Even the kitchens of the temple are measured and described. The sanctification of space extends to the practical, the mundane, the place where offerings are prepared. Nothing is too small to be sanctified. Nothing is outside the order of God&apos;s dwelling place.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel46-sanctify',
          html:
            'The offerings are prepared in the holy chambers so that "they bear them not out into the utter court, to sanctify the people." The sanctifying power comes from the holy place, from proximity to God. The preparation itself communicates the sacred to those who receive the offering.',
        },
        {
          kind: 'carry',
          html:
            'In your own life, what areas do you consider too mundane to be sacred? Ezekiel&apos;s vision suggests that all of life—even the kitchen, the place of preparation—can be sanctified and ordered toward God.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel46-sacred-mundane',
          prompt: 'How can you sanctify the mundane tasks of your day? How can the routine work of living become an offering to God?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The prince shall enter...and shall worship at the threshold of the gate.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 46 · Study Guide',
  },

  hasHebrew: true,
};
