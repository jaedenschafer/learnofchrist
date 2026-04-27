import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 8 — The Seventh Seal and the Trumpet Judgments
 *
 * The Lamb opens the seventh seal, and heaven falls silent. Then an angel
 * with a censer offers the prayers of the saints before God&apos;s throne. Seven
 * angels are given seven trumpets. The first four sound, and a third of the
 * world is struck.
 */
export const REVELATION_8: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 8,

  intros: [
    'The seventh seal marks a transition. The scroll is fully open. But before judgment accelerates, there is silence in heaven. The prayers of the saints rise before God&apos;s throne like incense. They have been heard. They matter. And now the response begins.',
    'Seven angels receive seven trumpets. Each trumpet blast brings a new judgment. Yet these are not the final destruction. They are warnings—a third of the earth, a third of the sea, a third of the trees. Mercy and judgment are intertwined.',
  ],

  sections: [
    {
      ref: 'Revelation 8:1–6',
      title: 'The Seventh Seal and the Prayers of the Saints',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'And when he had opened the seventh seal, there was silence in heaven about the space of half an hour.'),
            plain(3, 'And another angel came and stood at the altar, having a golden censer; and there was given unto him much incense, that he should offer it with the prayers of all saints upon the golden altar which was before the throne of God.'),
            plain(4, 'And the smoke of the incense, which came with the prayers of the saints, ascended up before God out of the angel&apos;s hand.'),
            plain(5, 'And the angel took the censer, and filled it with fire of the altar, and cast it into the earth: and there were voices, and thunderings, and lightnings, and an earthquake.'),
            plain(6, 'And the seven angels which had the seven trumpets prepared themselves to sound.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev8-silence',
          html:
            'Silence in heaven—an extraordinary moment. The cosmos pauses. The prayers of the saints are offered as incense before God. Every prayer of the faithful, every cry for justice, every petition rises before the throne. They are not forgotten. They are heard. Then, the angel fills the censer with fire from the altar and casts it to earth. Prayer is not passive. Prayer releases divine action.',
        },
        {
          kind: 'greek',
          id: 'rev8-thumiama',
          title: 'Thumiama — Incense',
          script: 'θυμίαμα',
          translit: '<strong>Thumiama</strong> · incense; sweet-smelling smoke',
          description:
            'Incense rises. It is sweet to God. The prayers of the saints are like incense—they ascend to heaven. They are acceptable. They are pleasing to God. The metaphor says that prayer is not lost. It reaches the throne.',
        },
        {
          kind: 'christ',
          id: 'rev8-christ-intercede',
          title: 'Christ Connection — Our Intercessor',
          html:
            'In Hebrews 7:25, Paul writes that Jesus "ever liveth to make intercession for them." The angel offering incense may represent Christ Himself, our High Priest, presenting our prayers before the Father.',
        },
        {
          kind: 'carry',
          html:
            'Your prayers are not lost in the void. They rise before God&apos;s throne as incense. They are heard. They move heaven to action. Pray with confidence. Pray for justice. Pray for the kingdom. Your prayers matter.',
        },
        {
          kind: 'reflection',
          id: 'rev8-prayers',
          prompt: 'How would praying change if you truly believed your prayers rise as incense before the throne of God?',
        },
      ],
    },

    {
      ref: 'Revelation 8:7–13',
      title: 'The Four Trumpets',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(7, 'The first angel sounded, and there followed hail and fire mingled with blood: and they were cast upon the earth: and the third part of trees was burnt up, and all green grass was burnt up.'),
            plain(8, 'And the second angel sounded, and as it were a great mountain burning with fire was cast into the sea: and the third part of the sea became blood;'),
            plain(10, 'And the third angel sounded, and there fell a great star from heaven, burning as it were a lamp: and it fell upon the third part of the rivers, and upon the fountains of waters;'),
            plain(12, 'And the fourth angel sounded, and the third part of the sun was smitten, and the third part of the moon, and the third part of the stars; so as the third part of them was darkened, and the day shone not for a third part of it, and the night likewise.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev8-trumpets',
          html:
            'The first four trumpets affect the natural order. A third of the grass and trees burn. A third of the sea becomes blood. The waters are poisoned. The heavenly bodies are darkened. These are not random catastrophes but systematic judgments. God&apos;s sovereignty extends over all creation.',
        },
        {
          kind: 'greek',
          id: 'rev8-salpigx',
          title: 'Salpigx — Trumpet',
          script: 'σάλπιγξ',
          translit: '<strong>Salpigx</strong> · trumpet; a signal instrument',
          description:
            'The trumpet is a call to action. In the Old Testament, trumpets announce judgment and the coming of God. The seven trumpets announce successive judgments, each one a call to repentance.',
        },
        {
          kind: 'christ',
          id: 'rev8-christ-judge',
          title: 'Christ Connection — The Judge of All Creation',
          html:
            'Christ holds dominion over all creation. The natural order obeys His command. When He judges, the cosmos responds. Yet these judgments come in stages. They are meant to call people to repentance.',
        },
        {
          kind: 'carry',
          html:
            'The warnings are real. Creation convulses under God&apos;s judgment. Yet a third remains—not all is destroyed. There is still time to repent, to return, to believe.',
        },
        {
          kind: 'reflection',
          id: 'rev8-judgment-warning',
          prompt: 'How do you understand God&apos;s use of judgment as a call to repentance rather than mere destruction?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The smoke of the incense, which came with the prayers of the saints, ascended up before God out of the angel&apos;s hand.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 8 · Study Guide',
  },

  hasHebrew: false,
};
