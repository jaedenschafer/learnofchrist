import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 110 — The Lord Said Unto My Lord
 *
 * "The Lord said unto my Lord, Sit thou at my right hand, until I make thine
 * enemies thy footstool." This is the most quoted Old Testament verse in the
 * New Testament. It appears in Matthew 22, Mark 12, Luke 20, Acts 2, Hebrews 1,
 * Hebrews 10, and 1 Corinthians 15. Every New Testament author saw in it a
 * prophecy of Christ&apos;s exaltation and eternal priesthood: "Thou art a priest
 * for ever after the order of Melchizedek."
 */
export const PSALMS_110: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 110,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Psalm 110 is the shortest chapter that carries the greatest christological weight. It opens with God speaking to the Messiah: sit at my right hand. Your enemies will be made your footstool. Then: you are a priest forever, after the order of Melchizedek. David wrote this psalm about someone greater than himself—the Messiah. The New Testament repeatedly quotes it to prove that Jesus is not merely the descendant of David but the Messiah himself, seated at God&apos;s right hand, ruling until all enemies are put under His feet. This psalm is the scriptural foundation for the Church&apos;s understanding of Christ&apos;s ascension, exaltation, and ongoing priesthood.',
    'The shortness of the psalm does not diminish its significance. Sometimes the most important truths are the most concise. Psalm 110 distills the entire plot of redemption into a few lines: the Messiah is exalted, His enemies are defeated, He reigns as both King and Priest forever. All of this is contained here.',
  ],

  sections: [
    {
      ref: 'Psalm 110:1–7',
      title: 'The Priest-King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 110,
          lines: [
            plain(1, 'The Lord said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool.'),
            plain(2, 'The Lord shall send the rod of thy strength out of Zion: rule thou in the midst of thine enemies.'),
            plain(3, 'Thy people shall be willing in the day of thy power, in the beauties of holiness from the womb of the morning: thou hast the dew of thy youth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-110-78mid-1',
          html:
            'The psalm turns here. The verses ahead are not the same key as the ones behind; the camera has moved.',
        },
        {
          kind: 'scripture',
          chapter: 110,
          lines: [
            plain(4, 'The Lord hath sworn, and will not repent, Thou art a priest for ever after the order of Melchizedek.'),
            plain(5, 'The Lord at thy right hand shall strike through kings in the day of his wrath.'),
            plain(6, 'He shall judge among the heathen, he shall fill the places with the dead bodies; he shall wound the heads over many countries.'),
            plain(7, 'He shall drink of the brook in the way: therefore shall he lift up his head.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps110-lord-said',
          html:
            '"The Lord said unto my Lord"—this is a voice from within the Godhead, the Father speaking to the Son. The command is: sit at my right hand. This is not a command to wait passively. It is a command to take the place of highest authority and honor. And the purpose: "until I make thine enemies thy footstool." The enemies of the Messiah will be completely subdued and put under His authority.',
        },
        {
          kind: 'commentary',
          id: 'ps110-rod-strength',
          html:
            '"The Lord shall send the rod of thy strength out of Zion." The rod is a symbol of power and authority. From Zion—God&apos;s holy mountain, the seat of His kingdom—the Messiah&apos;s power extends. He rules "in the midst of thine enemies," not in safety but in the very place of opposition. His kingdom is not withdrawn from the world but actively governing within it.',
        },
        {
          kind: 'hebrew',
          id: 'ps110-yom-koach',
          title: 'Yom Koach — "Day of Power" (The Appointed Day)',
          script: 'יוֹם כֹחַ',
          translit: '<strong>Yom Koach</strong> · day of power; the appointed day when power is fully manifested',
          description:
            'The "day of power" is not a single moment but the entire period of the Messiah&apos;s reign—from His ascension through His return. It is the day when His power is fully displayed, and His people willingly join His cause.',
        },
        {
          kind: 'commentary',
          id: 'ps110-priest-forever',
          html:
            '"Thou art a priest for ever after the order of Melchizedek." This oath is eternal and irrevocable. The Messiah is not merely a priest in the Levitical line but a priest after the order of Melchizedek—a figure from Genesis who was both priest and king, who offered bread and wine, and who blessed Abraham. This priesthood is not temporary but forever. The Messiah&apos;s work is not limited to a single offering on a single day but encompasses an eternal intercession.',
        },
        {
          kind: 'commentary',
          id: 'ps110-judge-nations',
          html:
            '"He shall judge among the heathen, he shall fill the places with the dead bodies; he shall wound the heads over many countries." The Messiah&apos;s authority extends to all nations. He is judge, not merely of Israel but of all peoples. His rule is universal and final. All opposition will be subdued. All rebellion will be judged.',
        },
        {
          kind: 'christ',
          id: 'ps110-christ-exalted',
          title: 'Christ Connection — Seated at God&apos;s Right Hand',
          html:
            'Psalm 110:1 is the foundation stone of New Testament christology. Jesus quotes it in Matthew 22:41–45 to show that the Messiah is greater than David himself. Peter cites it on Pentecost (Acts 2:34–35) as proof of Jesus&apos; resurrection and exaltation. The author of Hebrews quotes it repeatedly to establish Jesus&apos; superiority over angels and His eternal priesthood (Hebrews 1:13, 10:12–13). Jesus sits at God&apos;s right hand, ruling the cosmos, interceding for His people, waiting until all enemies are put under His feet. This is not a future promise but a present reality. Christ reigns now.',
        },
        {
          kind: 'carry',
          html:
            'To live in light of Psalm 110 is to live under a King who reigns even now. Our struggles are not the final word. Christ is reigning. Our enemies—sin, death, darkness—have been defeated, though the final victory is not yet fully revealed. We are invited to bow to His kingship now, to serve Him as priests, to claim our share in His victory.',
        },
        {
          kind: 'reflection',
          id: 'ps110-king-priest',
          prompt: 'How does it change your faith to know that Christ is not merely exalted but actively reigning now as both King and Priest? What would you do differently if you truly believed you serve a victorious King?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: '"The Lord said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool." Thou art a priest for ever after the order of Melchizedek.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 110 · Study Guide',
  },

  hasHebrew: true,
};
