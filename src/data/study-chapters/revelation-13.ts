import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 13 — The Beasts and the Mark
 *
 * A beast rises from the sea with ten horns and seven heads—it speaks
 * blasphemies and makes war on the saints. A second beast rises from the
 * earth, bearing the mark 666. The beasts represent the rebellion of earthly
 * powers against God. Yet their days are numbered.
 */
export const REVELATION_13: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 13,

  intros: [
    'Satan, cast from heaven, works through earthly powers. The beast from the sea represents political authority in rebellion against God. The beast from the earth represents religious deception. Together they demand worship. They mark their followers with 666—a symbol of rebellion, of falling short of the perfection signified by 7.',
    'Yet this is not the end. The vision is not designed to instill hopelessness, but to show that God sees all. He knows the number of every beast. He counts the reign of every tyrant. All are weighed and measured.',
  ],

  sections: [
    {
      ref: 'Revelation 13:1–10',
      title: 'The Beast from the Sea',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'And I stood upon the sand of the sea, and saw a beast rise up out of the sea, having seven heads and ten horns, and upon his horns ten crowns, and upon his heads the name of blasphemy.'),
            plain(2, 'And the beast which I saw was like unto a leopard, and his feet were as the feet of a bear, and his mouth as the mouth of a lion: and the dragon gave him his power, and his seat, and great authority.'),
            plain(4, 'And they worshipped the dragon which gave power unto the beast: and they worshipped the beast, saying, Who is like unto the beast? who is able to make war with him?'),
            plain(5, 'And there was given unto him a mouth speaking great things and blasphemies; and power was given unto him to continue forty and two months.'),
            plain(8, 'And all that dwell upon the earth shall worship him, whose names are not written in the book of life of the Lamb slain from the foundation of the world.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev13-beast-sea',
          html:
            'The beast from the sea represents earthly powers in rebellion against God. It bears the symbols of power (lion, bear, leopard). Yet it is given its authority by the dragon—by Satan. People worship the beast and the dragon behind it. But those whose names are written in the Lamb&apos;s book of life do not worship. They remain faithful.',
        },
        {
          kind: 'greek',
          id: 'rev13-therion',
          title: 'Therion — Beast',
          script: 'θηρίον',
          translit: '<strong>Therion</strong> · beast; wild animal; symbol of earthly power',
          description:
            'The therion is a beast—a wild, untamed creature. It represents power without virtue, force without mercy, rebellion without restraint.',
        },
        {
          kind: 'christ',
          id: 'rev13-christ-faithful',
          title: 'Christ Connection — The Faithful Witness Against All Powers',
          html:
            'Those whose names are written in the Lamb&apos;s book of life do not worship the beast. They have chosen Christ. Their names are written in His book. That is their security.',
        },
        {
          kind: 'carry',
          html:
            'The beast makes war on the saints. It speaks great blasphemies. Yet it cannot touch those whose names are in the Lamb&apos;s book. You are secure. Your allegiance is to Christ, not to the powers of this world.',
        },
        {
          kind: 'reflection',
          id: 'rev13-beast-worship',
          prompt: 'What beasts in your own time demand worship? Where are you tempted to bow to powers other than Christ?',
        },
      ],
    },

    {
      ref: 'Revelation 13:11–18',
      title: 'The Beast from the Earth and the Mark of 666',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(11, 'And I beheld another beast coming up out of the earth; and he had two horns like a lamb, and he spake as a dragon.'),
            plain(12, 'And he exerciseth all the power of the first beast before him, and causeth the earth and them which dwell therein to worship the first beast, whose deadly wound was healed.'),
            plain(16, 'And he causeth all, both small and great, rich and poor, free and bond, to receive a mark in their right hand, or in their foreheads:'),
            plain(17, 'And that no man might buy or sell, save he that had the mark, or the name of the beast, or the number of his name.'),
            plain(18, 'Here is wisdom. Let him that hath understanding count the number of the beast: for it is the number of a man; and his number is Six hundred threescore and six.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev13-mark',
          html:
            'The second beast looks like a lamb but speaks like a dragon—it is religious deception. It performs miracles that lead people to worship the first beast. It marks all—both small and great, rich and poor—with the mark of the beast. The mark grants access to the economy. Without the mark, you cannot buy or sell. This is control through dependence.',
        },
        {
          kind: 'greek',
          id: 'rev13-charagma',
          title: 'Charagma — Mark',
          script: 'χάραγμα',
          translit: '<strong>Charagma</strong> · mark; engraved mark; brand; ownership mark',
          description:
            'A charagma is a mark of ownership or identification. To bear the mark of the beast is to be identified with the beast, claimed by the beast, owned by the beast. The followers of Christ bear a different mark—the seal of God.',
        },
        {
          kind: 'christ',
          id: 'rev13-christ-seal',
          title: 'Christ Connection — Sealed by the Holy Spirit',
          html:
            'In contrast to the mark of the beast, believers are sealed by the Holy Spirit. They belong to Christ. They cannot be claimed by the beast. Their true citizenship is in the kingdom of God.',
        },
        {
          kind: 'carry',
          html:
            'Do not take the mark. Do not worship the beast. Do not bow to false religiosity that speaks with the voice of the dragon. Your true allegiance is to Christ. Your true security is in God&apos;s seal. Better to lack the means of commerce than to lose your soul.',
        },
        {
          kind: 'reflection',
          id: 'rev13-mark-refused',
          prompt: 'What would it cost you to refuse the mark of the beast? Are you willing to suffer economic deprivation to remain faithful to Christ?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'All that dwell upon the earth shall worship him, whose names are not written in the book of life of the Lamb slain from the foundation of the world.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 13 · Study Guide',
  },

  hasHebrew: false,
};
