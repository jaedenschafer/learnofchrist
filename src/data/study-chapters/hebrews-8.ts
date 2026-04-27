import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const HEBREWS_8: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 8,

  intros: [
    'The author has established Christ&apos;s superior priesthood. Now he explains the superior covenant. The old covenant was mediated through Moses at Sinai. Its strength was external—laws, commandments, regulations. But the new covenant is written on the heart. God will be the God of His people, and they shall be His people. All shall know Him, from the least to the greatest. This is the transformation the gospel accomplishes.',
    'The old covenant was not bad. It was a preparation, a shadow. But Christ brings the substance. He mediates a better covenant based on better promises.',
  ],

  sections: [
    {
      ref: 'Hebrews 8:1–13',
      title: 'A Better Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'Now of the things which we have spoken this is the sum: We have such an high priest, who is set on the right hand of the throne of the Majesty in the heavens;'),
            plain(6, 'But now hath he obtained a more excellent ministry, by how much also he is the mediator of a better covenant, which was established upon better promises.'),
            plain(8, 'For finding fault with them, he saith, Behold, the days come, saith the Lord, when I will make a new covenant with the house of Israel and with the house of Judah:'),
            plain(10, 'For this is the covenant that I will make with the house of Israel after those days, saith the Lord; I will put my laws into their mind, and write them in their hearts: and I will be to them a God, and they shall be to me a people:'),
            plain(12, 'For I will be merciful to their unrighteousness, and their sins and their iniquities will I remember no more.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb8-excellent-ministry',
          html:
            'Christ&apos;s ministry is superior. Not in effort or difficulty, but in efficacy. He mediated a better covenant. Not because the old was worthless, but because the new fulfills what the old only promised.',
        },
        {
          kind: 'greek',
          id: 'heb8-diatheke',
          title: 'Diatheke — Covenant, Testament',
          script: 'διαθήκη',
          translit: '<strong>Diatheke</strong> · covenant; agreement; last will and testament',
          description:
            'A covenant is not a contract between equals. It is the will of God laid down. The old covenant was God&apos;s provision for His people under the Law. The new covenant is His provision through grace in Christ.',
        },
        {
          kind: 'commentary',
          id: 'heb8-written-heart',
          html:
            '"I will put my laws into their mind, and write them in their hearts." This is revolutionary. The Law was carved in stone. The new covenant is inscribed on the human heart. Obedience is not external compulsion but internal transformation.',
        },
        {
          kind: 'christ',
          id: 'heb8-christ-mediator',
          title: 'Christ Connection — Heart Transformation',
          html:
            'Jesus does not give you a list of rules to obey. He gives you a new heart. The Spirit rewrites your desires. What once seemed impossible—genuine obedience—becomes natural, even joyful. This is the new covenant. This is grace.',
        },
        {
          kind: 'carry',
          html:
            'Do you feel the weight of external demands? The Law condemns. Grace renews. God promises to remember your sin no more. To write His will not on tablets but on your heart. Believe this transformation is possible. It is the substance of the new covenant.',
        },
        {
          kind: 'reflection',
          id: 'heb8-heart',
          prompt: 'Where has God written His law on your heart? Where are you still living under external constraint instead of internal transformation?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I will put my laws into their mind, and write them in their hearts: and I will be to them a God, and they shall be to me a people. For I will be merciful to their unrighteousness, and their sins will I remember no more.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 8 · Study Guide',
  },

  hasHebrew: false,
};
