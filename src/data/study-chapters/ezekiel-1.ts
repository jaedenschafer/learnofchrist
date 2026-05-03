import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezekiel 1 — Visions of God
 *
 * In the fifth year of King Jehoiachin's captivity, by the river Chebar,
 * Ezekiel beholds a vision that defies description. Four living creatures —
 * each with the face of a man, a lion, an ox, and an eagle — move with
 * perfect unity within wheels that spin in all directions. Above them, a
 * firmament of crystal. Above that, a throne. And upon the throne, the
 * likeness of the glory of the Lord. Here is a vision not of comfort but of
 * overwhelming encounter with the transcendent God.
 */
export const EZEKIEL_1: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 1,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 5 },
  intros: [
    'The book of Ezekiel opens with a moment of rupture. Ezekiel is among the exiles by the Chebar River when heaven opens and he sees visions of God. What he witnesses is not gentle or easily grasped. It is terrible and beautiful — a throne borne by creatures whose very complexity suggests that God&apos;s nature cannot be captured in simple forms. The four faces point in all directions at once: man, lion, ox, eagle. Each face sees what the others cannot. Straight lines do not constrain these creatures. They move together, powered by a spirit within the wheels, each wheel within a wheel, suggesting infinite complexity and perfect coordination. This is the God who meets Ezekiel in exile.',
  ],

  sections: [
    {
      ref: 'Ezekiel 1:1–14',
      title: 'The Creatures and the Wheels',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Now it came to pass in the thirtieth year, in the fourth month, in the fifth day of the month, as I was among the captives by the river of Chebar, that the heavens were opened, and I saw visions of God.'),
            plain(4, 'And I looked, and, behold, a whirlwind came out of the north, a great cloud, and a fire infolding itself, and a brightness was about it, and out of the midst thereof as the colour of amber, out of the midst of the fire.'),
            plain(5, 'Also out of the midst thereof came the likeness of four living creatures. And this was their appearance; they had the likeness of a man.'),
            plain(10, 'As for the likeness of their faces, they four had the face of a man, and the face of a lion, on the right side: and they four had the face of an ox on the left side; they also had the face of an eagle.'),
            plain(16, 'The appearance of the wheels and their work was like unto the colour of a beryl: and they four had one likeness: and their appearance and their work was as it were a wheel in the middle of a wheel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk1-vision-opening',
          html:
            'Ezekiel&apos;s vision arrives as judgment falls on Judah. He is in exile, stripped of temple, home, and the visible signs of God&apos;s presence. Yet it is precisely here, in this moment of national collapse, that heaven opens. The vision comes not with gentle whisper but with whirlwind and cloud and fire. God does not leave His prophet comfortless in captivity. He appears.',
        },
        {
          kind: 'hebrew',
          id: 'ezk1-merkabah',
          title: 'Merkabah — "Throne Chariot"',
          script: 'מֶרְכָּבָה',
          translit: '<strong>Merkabah</strong> · chariot; seat of honor; the divine throne-vehicle',
          description:
            'The vision Ezekiel sees would later be called "Merkabah mysticism" — the mystical contemplation of God&apos;s throne-chariot. The word merkabah literally means chariot, but here it means far more than a conveyance. It is the visible manifestation of God&apos;s glory and power. The four creatures bear the throne. The wheels suggest omniscience—eyes on all sides, moving in all directions at once, subject to no limitation.',
        },
        {
          kind: 'commentary',
          id: 'ezk1-four-faces',
          html:
            'Four faces, each different: man (reason, the human form), lion (majesty and power), ox (service and strength), eagle (speed and the transcendent). Together they suggest that God comprehends all that creation is — human wisdom, sovereign power, faithful service, soaring transcendence. No single face contains Him. All four together barely suggest His fullness.',
        },
        {
          kind: 'carry',
          html:
            'When we feel far from God, when we are stripped of the familiar signs of His presence, we may believe He has withdrawn. But Ezekiel&apos;s vision declares that God meets us most profoundly in exile. He comes with overwhelming reality precisely when we are most alone. The God who meets us is not small or easily understood. He transcends our categories. And yet He comes.',
        },
        {
          kind: 'reflection',
          id: 'ezk1-where-meet-god',
          prompt: 'Where in your own exile — in loss, confusion, or distance — might you encounter God more fully than in times of comfort? What would it mean to see His transcendence, not as threatening, but as the proof of His sufficiency?',
        },
      ],
    },

    {
      ref: 'Ezekiel 1:26–28',
      title: 'The Likeness of the Glory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(26, 'And above the firmament that was over their heads was the likeness of a throne, as the appearance of a sapphire stone: and upon the likeness of the throne was the likeness as the appearance of a man above upon it.'),
            plain(27, 'And I saw as the colour of amber, as the appearance of fire round about within it, from the appearance of his loins even upward, and from the appearance of his loins even downward, I saw as it were the appearance of fire, and it had brightness round about.'),
            plain(28, 'As the appearance of the bow that is in the cloud in the day of rain, so was the appearance of the brightness round about. This was the appearance of the likeness of the glory of the Lord. And when I saw it, I fell upon my face, and I heard a voice of one that spake.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk1-throne-sapphire',
          html:
            'Above all this — the creatures, the wheels, the firmament — sits a throne. And upon that throne, the likeness of a man. The phrase "likeness of the glory of the Lord" is carefully chosen. Ezekiel does not claim to see God himself, but the appearance of His glory — the revealed aspect of His transcendent being. That glory appears in human form, suggesting that God has always, even before the Incarnation, the pattern of humanity as the vehicle of His self-revelation.',
        },
        {
          kind: 'christ',
          id: 'ezk1-christ-throne',
          title: 'Christ Connection — The Throne of Glory',
          html:
            'John, in Revelation, sees a similar throne, encircled by the four living creatures Ezekiel describes. Around that throne stand the twenty-four elders, and from the throne proceed the seven spirits of God. And then comes the Lamb of God, who takes the scroll and opens the seals of all history. The throne Ezekiel sees in exile is the same throne John sees opened at the end of time — and at its center, not just the glory of God, but God incarnate in Christ, the one who bears all authority in heaven and on earth.',
        },
        {
          kind: 'carry',
          html:
            'The vision of Ezekiel 1 proclaims a truth that sustains faith in darkness: God&apos;s throne is not diminished by Babylon, not distant from the exiled, not weakened by the visible fall of Jerusalem. It remains — sapphire-bright, ringed with fire, moving in perfect order, sustained by spirits of irresistible power. And above all stands the likeness of God Himself, ruling over all.',
        },
        {
          kind: 'reflection',
          id: 'ezk1-faith-midst-darkness',
          prompt: 'What does it change in your own faith to know that God&apos;s throne continues — unmoved, unshadowed, undiminished — even in times when you feel most abandoned? How can the transcendence of God become a comfort rather than a terror?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: '"This was the appearance of the likeness of the glory of the Lord." — Ezekiel 1:28',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 1 · Study Guide',
  },

  hasHebrew: true,
};
