import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 11 — The Two Witnesses and the Seventh Trumpet
 *
 * Two witnesses prophesy in sackcloth for 1260 days. The beasts overcome them,
 * and their bodies lie in the street for three and a half days. Then they are
 * called up to heaven. The seventh trumpet sounds: "The kingdoms of this world
 * are become the kingdoms of our Lord, and of his Christ."
 */
export const REVELATION_11: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 11,

  intros: [
    'God gives His two witnesses power to testify. They stand in sackcloth—symbols of repentance and suffering. They prophesy, and enemies war against them. Yet their power is from on high. Fire consumes their enemies. Water and plague obey their word. But they are allowed to be defeated, and their bodies lie exposed. All seems lost. Then the trumpet sounds.',
    'The seventh trumpet is the final judgment, the ultimate vindication. The kingdoms of the earth become the kingdoms of Christ. The moment toward which all history moves has come.',
  ],

  sections: [
    {
      ref: 'Revelation 11:1–14',
      title: 'The Two Witnesses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(1, 'And there was given me a reed like unto a rod: and the angel stood, saying, Rise, and measure the temple of God, and the altar, and them that worship therein.'),
            plain(3, 'And I will give power unto my two witnesses, and they shall prophesy a thousand two hundred and threescore days, clothed in sackcloth.'),
            plain(4, 'These are the two olive trees, and the two candlesticks standing before the God of the world.'),
            plain(5, 'And if any man will hurt them, fire proceedeth out of their mouth, and devoureth their enemies: and if any man will hurt them, he must in this manner be killed.'),
            plain(7, 'And when they shall have finished their testimony, the beast that ascendeth out of the bottomless pit shall make war against them, and shall overcome them, and kill them.'),
            plain(11, 'And after three days and an half the Spirit of life from God entered into them, and they stood upon their feet; and great fear fell upon them which saw them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-witnesses',
          html:
            'The two witnesses are God&apos;s prophets in the world. They are described as olive trees and candlesticks—symbols of the Spirit&apos;s anointing and light. Their power is real. Yet they are allowed to be overcome. Their bodies lie exposed for three and a half days—the time of humiliation. Then God vindicates them. They rise. They ascend to heaven.',
        },
        {
          kind: 'greek',
          id: 'rev11-martys',
          title: 'Martys — Witness',
          script: 'μάρτυς',
          translit: '<strong>Martys</strong> · witness; one who testifies',
          description:
            'The two witnesses are martys—they bear witness. To witness may cost the witness everything. But their testimony remains. Even in death, the witnesses cry out.',
        },
        {
          kind: 'christ',
          id: 'rev11-christ-witness',
          title: 'Christ Connection — The Faithful Witness',
          html:
            'Christ Himself is the Faithful Witness. The two witnesses echo His pattern: prophecy, rejection, death, and vindication. As He rose, they are raised. As He ascended, they ascend.',
        },
        {
          kind: 'carry',
          html:
            'To be a witness may bring opposition. But your testimony is sealed. It cannot be destroyed. Even if you fall, if your words are suppressed, the Spirit of God will vindicate. Stand firm in your testimony.',
        },
        {
          kind: 'reflection',
          id: 'rev11-witness',
          prompt: 'What does it mean to be a witness to Christ? What testimony has God given you to bear?',
        },
      ],
    },

    {
      ref: 'Revelation 11:15–19',
      title: 'The Seventh Trumpet: The Kingdom Come',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(15, 'And the seventh angel sounded; and there were great voices in heaven, saying, The kingdoms of this world are become the kingdoms of our Lord, and of his Christ; and he shall reign for ever and ever.'),
            plain(16, 'And the four and twenty elders, which sat before God on their seats, fell upon their faces, and worshipped God,'),
            plain(17, 'Saying, We give thee thanks, O Lord God Almighty, which art, and wast, and art to come; because thou hast taken to thee thy great power, and hast reigned.'),
            plain(18, 'And the nations were angry, and thy wrath is come, and the time of the dead, that they should be judged, and that thou shouldest give reward unto thy servants the prophets, and to the saints, and them that fear thy name, small and great; and shouldest destroy them which destroy the earth.'),
            plain(19, 'And the temple of God was opened in heaven: and there was seen in his temple the ark of his covenant: and there were lightnings, and voices, and thunderings, and an earthquake, and great hail.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-kingdom',
          html:
            'The seventh trumpet is the declaration of Christ&apos;s reign. The kingdoms of the earth are now the kingdoms of Christ. This is the consummation toward which all history has moved. The God who was, and is, and is to come, has taken His power and reigned. The judgment of the dead and the reward of the faithful are at hand.',
        },
        {
          kind: 'greek',
          id: 'rev11-basileia',
          title: 'Basileia — Kingdom',
          script: 'βασιλεία',
          translit: '<strong>Basileia</strong> · kingdom; reign; rule',
          description:
            'The basileia of God is His reign, His sovereignty, His rule. When the seventh trumpet sounds, the kingdoms of the earth pass away and the kingdom of Christ emerges triumphant. His reign is eternal.',
        },
        {
          kind: 'christ',
          id: 'rev11-christ-king',
          title: 'Christ Connection — King of Kings, Lord of Lords',
          html:
            'Christ reigns forever and ever. This is not a future hope only. It is the proclamation of a reality—that Christ is already exalted, already sovereign. Yet the full manifestation of His reign is reserved for this moment.',
        },
        {
          kind: 'carry',
          html:
            'The kingdom of Christ has come. You are subjects of this kingdom. You serve the King who reigns forever. Live accordingly. Live as citizens of the kingdom that cannot be shaken.',
        },
        {
          kind: 'reflection',
          id: 'rev11-kingdom',
          prompt: 'What does it mean that the kingdoms of this world are become the kingdoms of Christ? How should this change the way you live?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The kingdoms of this world are become the kingdoms of our Lord, and of his Christ; and he shall reign for ever and ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 11 · Study Guide',
  },

  hasHebrew: false,
};
