import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const HEBREWS_9: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 9,

  intros: [
    'The author describes the tabernacle—its furnishings, its structure, its purpose. The inner sanctum (the Holy of Holies) was entered once a year by the High Priest with blood. This was the pattern. But it was only a pattern. It could not perfect. Without shedding of blood there is no remission. Christ is the ultimate fulfillment. He entered once, with His own blood, into the heavenly sanctuary, to obtain eternal redemption.',
    'The old system repeated endlessly because it was never final. Christ&apos;s sacrifice is final. One offering. One blood. One entrance into heaven. Everything that came before pointed to this.',
  ],

  sections: [
    {
      ref: 'Hebrews 9:1–10',
      title: 'The Earthly Tabernacle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'Then verily the first covenant had also ordinances of divine service, and a worldly sanctuary.'),
            plain(2, 'For there was a tabernacle made; the first, wherein was the candlestick, and the table, and the shewbread; which is called the Sanctuary.'),
            plain(7, 'But into the second went the high priest alone once every year, not without blood, which he offered for himself, and for the errors of the people:'),
            plain(8, 'The Holy Ghost this signifying, that the way into the holiest of all was not yet made manifest, while as the first tabernacle was yet standing:'),
            plain(10, 'Which stood only in meats and drinks, and divers washings, and carnal ordinances, imposed on them until the time of reformation.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb9-pattern',
          html:
            'The tabernacle was God&apos;s design—a pattern on earth of heavenly reality. The furnishings, the sacrifices, the priesthood—all were shadows of what Christ would accomplish.',
        },
        {
          kind: 'greek',
          id: 'heb9-apax',
          title: 'Apax — Once',
          script: 'ἅπαξ',
          translit: '<strong>Apax</strong> · once; one time; once and for all',
          description:
            'The High Priest entered the Holy of Holies "once every year." That "once" was repeated. But Christ&apos;s "once" is eternal. His single sacrifice need never be repeated.',
        },
        {
          kind: 'commentary',
          id: 'heb9-way-not-manifest',
          html:
            '"The way into the holiest of all was not yet made manifest." While the tabernacle stood, the way was obscured. Only when Christ came, died, and rose could the way be fully open.',
        },
        {
          kind: 'christ',
          id: 'heb9-christ-tabernacle',
          title: 'Christ Connection — The True Tabernacle',
          html:
            'Jesus is the true tabernacle. In Him, God dwelt fully. His sacrifice opened the way into the holiest of all. You need no intermediary now. The veil is rent. The way is open through Him.',
        },
        {
          kind: 'carry',
          html:
            'The old system prepared. Now comes the fulfillment. You do not approach God through shadows or patterns. You approach through the blood of Christ, through the way He made, in the reality He secured.',
        },
        {
          kind: 'reflection',
          id: 'heb9-way-open',
          prompt: 'What shadows are you still clinging to? Where do you need to embrace the reality that Christ provides?',
        },
      ],
    },

    {
      ref: 'Hebrews 9:11–28',
      title: 'Once and For All',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(12, 'Neither by the blood of goats and calves, but by his own blood he entered in once into the holy place, having obtained eternal redemption for us.'),
            plain(15, 'And for this cause he is the mediator of the new testament, that by means of death, for the redemption of transgressions that were under the first testament, they which are called might receive the promise of eternal inheritance.'),
            plain(24, 'For Christ is not entered into the holy places made with hands, which are the figures of the true; but into heaven itself, now to appear in the presence of God for us:'),
            plain(26, 'For then must he often have suffered since the foundation of the world: but now once in the end of the world hath he appeared to put away sin by the sacrifice of himself.'),
            plain(28, 'So Christ was once offered to bear the sins of many; and unto them that look for him shall he appear the second time without sin unto salvation.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb9-eternal-redemption',
          html:
            '"He entered in once into the holy place, having obtained eternal redemption." Not temporary relief. Not annual renewal. Eternal redemption. Once, and it is done. Forever, and you are free.',
        },
        {
          kind: 'greek',
          id: 'heb9-apartempted',
          title: 'Apartempted — Put Away',
          script: 'ἀθετέω',
          translit: '<strong>Apartempted</strong> · to set aside; to abolish; to put away',
          description:
            'Sin is not reformed. It is abolished. Removed. Set aside. Christ&apos;s sacrifice does not modify sin. It eliminates it—for those who believe.',
        },
        {
          kind: 'commentary',
          id: 'heb9-second-time',
          html:
            '"Unto them that look for him shall he appear the second time without sin unto salvation." The first time, He came to die for sin. The second time, He comes to consummate salvation. No more offering. No more preparation. Fullness.',
        },
        {
          kind: 'christ',
          id: 'heb9-christ-coming-again',
          title: 'Christ Connection — Complete Redemption',
          html:
            'Christ appeared once to put away sin by the sacrifice of Himself. He will appear again—not to suffer, not to atone, but to complete what has been begun. To bring home those who have waited, watched, and believed.',
        },
        {
          kind: 'carry',
          html:
            'Your redemption is eternal because Christ&apos;s sacrifice is eternal. You are freed. You are covered. You are redeemed. And He is coming again. Not to judge believers, but to receive them. Look for Him.',
        },
        {
          kind: 'reflection',
          id: 'heb9-eternal-redemption',
          prompt: 'What does "eternal redemption" mean to you? How does the promise of His second coming change how you live now?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Neither by the blood of goats and calves, but by his own blood he entered in once into the holy place, having obtained eternal redemption for us. So Christ was once offered to bear the sins of many.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 9 · Study Guide',
  },

  hasHebrew: false,
};
