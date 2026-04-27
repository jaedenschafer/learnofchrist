import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Esdras 7 — The Temple Finished; The Passover Kept
 *
 * The temple is completed and dedicated. The Passover is celebrated with joy.
 * The exiles have returned home. The temple is rebuilt. The covenant is renewed.
 * It is not the end of the restoration, but it is the restoration of what was
 * most essential: the place where God&apos;s presence dwells.
 */
export const FIRST_ESDRAS_7: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 7,

  intros: [
    'After years of labor, the temple is finally finished. The dedication ceremony is magnificent. Priests and Levites process. Sacrifices are offered. The building that stands now is not as grand as Solomon&apos;s, but it is theirs. The exiles have built it with their own hands. They have restored the place of God&apos;s presence.',
    'And then, as in the days of Josiah, they keep the Passover. Families gather. The lamb is slain. The feast is celebrated. The meaning is profound: they have been delivered from exile as their ancestors were delivered from Egypt. God has not forgotten. God has brought them home. The old covenant is renewed in the new land.',
  ],

  sections: [
    {
      ref: '1 Esdras 7:1–15',
      title: 'The Temple Dedicated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'And so the house of the Lord was finished in the twenty-third day of the month Adar, in the sixth year of the reign of Darius the king.'),
            plain(2, 'And the children of Israel, the priests, and the Levites, and the rest of them that were of the captivity, kept the dedication of this house of God with joy.'),
            plain(5, 'And they offered at the dedication of this house of God a hundred bullocks, a hundred and ninety rams, seventy and two lambs, and twelve he-goats.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-finished',
          html:
            'The work is complete. The date is recorded. The dedication is a celebration of what God has enabled. The returnees have done their part; now they give thanks. The magnitude of the sacrifice shows the depth of their gratitude. They do not hold back. This is the moment they have waited for.',
        },
        {
          kind: 'hebrew',
          id: 'esdras7-chanut',
          title: 'Chanut — Dedication',
          script: 'חָנוּךְ',
          translit: '<strong>Chanut</strong> · dedication; consecration; opening',
          description:
            'Chanut is the ceremonial opening of a place to God. When the temple is dedicated, it is opened to its true purpose: to be the dwelling place of God&apos;s presence. Every dedication is a return to purpose.',
        },
        {
          kind: 'christ',
          id: 'esdras7-christ-temple',
          title: 'Christ Connection — The New Temple',
          html:
            'Jesus speaks of Himself as the temple. His body is the dwelling place of God. When He rises, He opens the way for all believers to become temples of the Holy Spirit. The old temple pointed forward; Christ is the fulfillment.',
        },
        {
          kind: 'carry',
          html:
            'The exiles waited for the dedication. The moment came. All their labor bore fruit. Are you waiting for something God has promised? The wait may be long, but the fulfillment is real. The temple is standing.',
        },
        {
          kind: 'reflection',
          id: 'esdras7-waiting',
          prompt: 'What are you waiting for God to complete? How does the exiles&apos; patience and persistence speak to your situation?',
        },
      ],
    },

    {
      ref: '1 Esdras 7:10–36',
      title: 'The Passover Celebrated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(10, 'And the children of Israel that were of the captivity, kept the passover, since those that had been carried away had been freed.'),
            plain(12, 'And they offered the passover on the fourteenth day of the first month: for the priests and Levites were purified together.'),
            plain(15, 'And all they that were of the captivity kept it, being separated, and did eat it in holiness according to the law of the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-passover',
          html:
            'The Passover is the memory of deliverance. As the exiles celebrate it in the rebuilt temple, they are saying: "We have been delivered. God remembers. God delivers." The Passover connects them to their ancestors and to the God who is constant. They are not new people in a strange land. They are the ancient people, returned home.',
        },
        {
          kind: 'greek',
          id: 'esdras7-agnos',
          title: 'Agnos — Pure; Holy',
          script: 'ἁγνός',
          translit: '<strong>Agnos</strong> · pure; holy; free from defilement',
          description:
            'The returnees purify themselves to keep the Passover. Agnos is not merely ritual cleanliness; it is the state of being prepared to approach God. To be agnos is to be free of impediment in one&apos;s relationship with the holy.',
        },
        {
          kind: 'christ',
          id: 'esdras7-christ-pure',
          title: 'Christ Connection — The Pure Sacrifice',
          html:
            'Jesus is the Passover Lamb, agnos—pure and without blemish. His sacrifice opens the way for all people to approach God in purity. Through His blood, we are made agnos before the Father.',
        },
        {
          kind: 'carry',
          html:
            'To celebrate with the exiles is to know something profound: freedom is real. Deliverance is possible. God remembers. God acts. Gather with others who believe. Celebrate the God who has delivered you. Renew the covenant.',
        },
        {
          kind: 'reflection',
          id: 'esdras7-celebrate',
          prompt: 'How do you celebrate God&apos;s deliverance in your life? What covenant are you renewing with Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And so the house of the Lord was finished. And the children of Israel, the priests, and the Levites, and the rest of them that were of the captivity, kept the dedication of this house of God with joy. And they kept the passover, being separated, and did eat it in holiness according to the law of the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 7 · Study Guide',
  },

  hasHebrew: true,
};
