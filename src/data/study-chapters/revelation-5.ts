import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 5 — The Lamb Takes the Scroll
 *
 * In the Father&apos;s hand is a sealed scroll—the future, the kingdom to come.
 * No one can open it until the Lamb—Jesus Christ—steps forward. His slaughter
 * qualifies Him to rule. Heaven erupts in song: "Worthy is the Lamb."
 */
export const REVELATION_5: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 5,

  intros: [
    'In God&apos;s hand is a scroll, sealed with seven seals. It represents the future—what must come to pass. But no one is found worthy to open it. Not a creature in heaven, not in earth, not under the earth. The question hangs: Who can fulfill God&apos;s plan? Who is worthy?',
    'Then John is told: "Weep not; behold, the Lion of the tribe of Judah, the Root of David, hath prevailed to open the book." The Lion—the symbol of power and kingship—is revealed as the Lamb. Through His death, He has conquered. Through His sacrifice, He is worthy to rule.',
  ],

  sections: [
    {
      ref: 'Revelation 5:1–7',
      title: 'The Lamb Worthy to Open the Scroll',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'And I saw in the right hand of him that sat on the throne a book written within and on the backside, sealed with seven seals.'),
            plain(2, 'And I saw a strong angel proclaiming with a loud voice, Who is worthy to open the book, and to loose the seals thereof?'),
            plain(4, 'And I wept much, because no man was found worthy to open and to read the book, neither to look thereon.'),
            plain(5, 'And one of the elders saith unto me, Weep not: behold, the Lion of the tribe of Judah, the Root of David, hath prevailed to open the book, and to loose the seven seals thereof.'),
            plain(6, 'And I beheld, and, lo, in the midst of the throne and of the four beasts, and in the midst of the elders, stood a Lamb as it had been slain, having seven horns and seven eyes, which are the seven Spirits of God sent forth into all the earth.'),
            plain(7, 'And he came and took the book out of the right hand of him that sat on the throne.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev5-scroll',
          html:
            'The sealed scroll represents the future, God&apos;s plan, the unfolding of history toward its consummation. It is in the hand of the One on the throne. But none can open it. John weeps in despair—until he is told of the Lion of the tribe of Judah. Yet when he looks, he sees not a roaring lion, but a Lamb as if slaughtered. The paradox is the heart of the gospel: power through weakness, kingship through death.',
        },
        {
          kind: 'greek',
          id: 'rev5-arion',
          title: 'Arion — Lamb',
          script: 'ἀρνίον',
          translit: '<strong>Arion</strong> · lamb; young lamb',
          description:
            'The Lamb (arion) is the image of innocent sacrifice. It recalls the Passover lamb, the lamb led to slaughter in Isaiah 53, John the Baptist&apos;s declaration: "Behold the Lamb of God." Jesus is the Lamb—both innocent and willing, both vulnerable and ultimate in power.',
        },
        {
          kind: 'christ',
          id: 'rev5-christ-lion-lamb',
          title: 'Christ Connection — The Lion and the Lamb',
          html:
            'Christ is the Lion of Judah—the king, the conqueror. But He is also the Lamb slain. His triumph comes through His willingness to die. His kingship is secured by His sacrifice. In Him, divine power and human submission meet. He rules not by coercion but by love.',
        },
        {
          kind: 'carry',
          html:
            'The Lamb takes the scroll. The future is in His hands. What comes next—judgment, renewal, the final triumph—flows from His worthiness. Your task is not to fear the future but to trust the One who holds it. The Lamb has prevailed.',
        },
        {
          kind: 'reflection',
          id: 'rev5-lamb-worthy',
          prompt: 'What makes Christ worthy? How does His willingness to die as the Lamb prove His power as the Lion?',
        },
      ],
    },

    {
      ref: 'Revelation 5:8–14',
      title: 'The Song of Heaven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(8, 'And when he had taken the book, the four beasts and four and twenty elders fell down before the Lamb, having every one of them harps, and golden vials full of odours, which are the prayers of saints.'),
            plain(11, 'And I beheld, and I heard the voice of many angels round about the throne and the beasts and the elders: and the number of them was ten thousand times ten thousand, and thousands of thousands;'),
            plain(12, 'Saying with a loud voice, Worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing.'),
            plain(13, 'And every creature which is in heaven, and on the earth, and under the earth, and such as are in the sea, and all that are in them, heard I saying, Blessing, and honour, and glory, and power, be unto him that sitteth upon the throne, and unto the Lamb for ever and ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev5-song',
          html:
            'When the Lamb takes the scroll, heaven erupts in worship. The four beasts and twenty-four elders fall down. Myriads of angels join the song. And the song is this: Worthy is the Lamb that was slain. Not despite His death, but because of it. The Lamb receives the same honor as the Father. All creation—heaven, earth, sea—joins the chorus.',
        },
        {
          kind: 'greek',
          id: 'rev5-spoudais',
          title: 'Axios — Worthy',
          script: 'ἄξιος',
          translit: '<strong>Axios</strong> · worthy; deserving of honor',
          description:
            'Again, axios—worthy. The Lamb is worthy to receive power, riches, wisdom, strength, honor, glory, blessing. Nothing is held back. All that can be given is given to Him. His worthiness is declared by all creation.',
        },
        {
          kind: 'christ',
          id: 'rev5-christ-hymn',
          title: 'Christ Connection — Worthy Forever',
          html:
            'The hymn declares that blessing, honor, glory, and power belong to the One on the throne and to the Lamb for ever and ever. Christ is not a subordinate figure. He shares the throne. He receives the worship. He is Lord.',
        },
        {
          kind: 'carry',
          html:
            'If heaven itself breaks into song at the Lamb&apos;s worthiness, should we not join the chorus? Your praise, your faithfulness, your testimony is a small voice in an immense symphony. Sing with heaven. Declare His worthiness.',
        },
        {
          kind: 'reflection',
          id: 'rev5-chorus',
          prompt: 'What would change in your life if you truly believed that the Lamb is worthy of all power, riches, wisdom, strength, honor, glory, and blessing?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 5 · Study Guide',
  },

  hasHebrew: false,
};
