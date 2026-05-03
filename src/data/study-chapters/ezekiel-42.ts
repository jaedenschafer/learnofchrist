import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 42 — Priests&apos; Chambers
 *
 * The vision reveals rooms where the priests will dwell and where holy things will
 * be kept. These chambers are separated from the outer courts, sanctified space where
 * the service of God is conducted. The measurement of these chambers reveals the
 * careful provision God makes for those who serve Him.
 */
export const EZEKIEL_42: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 42,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 2 },
  intros: [
    'The vision now shows the support structures of the temple—the chambers where the priests will live and work. These are not mere administrative rooms. They are sanctified spaces, separate from the common areas, where those who serve God maintain the holiness of the sanctuary. The priests must themselves be holy, and their dwelling places reflect that requirement.',
    'The dimensions of these chambers, like all the other measurements in this extended vision, are given with precision. God provides for His servants. He measures out exactly what they need. The priests are not left to fend for themselves. They are cared for, housed, and given the space they need to fulfill their calling.',
  ],

  sections: [
    {
      ref: 'Ezekiel 42:1–14',
      title: 'The Priest&apos;s Chambers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            plain(1, 'Then he brought me forth into the utter court, the way toward the north: and he brought me into the chamber that was over against the separate place, and which was before the building toward the north.'),
            plain(4, 'And before the chambers was a walk of ten cubits breadth inward, a way of one cubit; and their doors toward the north.'),
            plain(12, 'And according to the doors of the chambers that were toward the south was a door in the head of the way, even the way directly before the wall toward the east, as one entereth them.'),
            plain(13, 'Then said he unto me, The north chambers and the south chambers, which are before the separate place, they be holy chambers, where the priests that approach unto the Lord shall eat the most holy things: there shall they lay the most holy things, and the flour, and the meat offering, and the sin offering, and the trespass offering; for the place is holy.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel42-chambers',
          html:
            'The chambers are designated as holy. They are not ordinary residences. They are where sacred service is conducted, where holy things are stored and prepared. To dwell here is to accept the consecration that comes with serving God.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel42-eat-holy',
          html:
            'The priests will eat "the most holy things" in these chambers. This is not mere sustenance. This is participation in the holy offerings, the nourishment that comes from God&apos;s provision and the priest&apos;s service. To eat in these chambers is to be sustained by your calling.',
        },
        {
          kind: 'hebrew',
          id: 'ezekiel42-kodesh',
          title: 'Kodesh — "Holy" ',
          script: 'קֹדֶשׁ',
          translit: '<strong>Kodesh</strong> · holiness; that which is set apart for God; sacred; sanctified',
          description:
            'Kodesh is not merely a moral quality. It is a state of being set apart, separated unto God. To be in kodesh space is to be in a realm governed by different laws and different expectations than the common world.',
        },
        {
          kind: 'christ',
          id: 'ezekiel42-christ-priests',
          title: 'Christ Connection — Priests in Christ',
          html:
            'In 1 Peter 2:9, Peter writes: "Ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people." Every believer is now a priest, dwelling in holy space, set apart for God&apos;s service. The separation between priest and people, so carefully maintained in the old temple, is broken down in Christ. All are sanctified.',
        },
        {
          kind: 'carry',
          html:
            'If you serve God—whether in ministry, in work, in family, or in any calling—these chambers are for you. God makes provision for those who serve Him. You are not left unsupported. Your labor is recognized, your dwelling place is holy, and your sustenance comes from the holy things of God.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel42-serve',
          prompt: 'How do you experience God&apos;s provision in your calling? Do you feel that your work is sanctified, or do you feel the sacred and the mundane are separate?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'They be holy chambers, where the priests that approach unto the Lord shall eat the most holy things.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 42 · Study Guide',
  },

  hasHebrew: true,
};
