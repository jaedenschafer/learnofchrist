import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezekiel 21 — The Sword of the Lord
 *
 * God draws His sword against Jerusalem. The blade is sharp, burnished bright,
 * meant to devour and consume. The prophet sings a dirge: the sword is made
 * ready, sharpened for slaughter. Then comes the image of the king of Babylon
 * at a crossroads, divining which way to go—toward Jerusalem or toward Ammon.
 * But there is another king coming, whose right it is to rule. The sword of
 * judgment will clear the way for Him. "I will overturn, overturn, overturn
 * it: and it shall be no more, until he come whose right it is; and I will
 * give it him." The hope is not in earthly power, but in the King whose right
 * is absolute.
 */
export const EZEKIEL_21: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 21,

  intros: [
    'Ezekiel 21 opens with a vision of God&apos;s sword. It is sharp, burnished, meant to devour and consume. The prophet is told to sigh and lament—to sing a dirge for the coming slaughter. This is not metaphorical anger. This is the judgment of God moving against His people. Yet even within this fierce judgment, there is a deeper word: the overturning of earthly thrones and the promise of the One "whose right it is" to rule.',
    'The chapter uses the language of Babylonian divination—the king of Babylon casting lots at the crossroads to decide which city to attack. But the outcome is already determined. And beyond Babylon&apos;s conquest lies another kingdom, another King, whose throne will not be overturned but will endure forever.',
  ],

  sections: [
    {
      ref: 'Ezekiel 21:1–17',
      title: 'The Sword Drawn Against the Land',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(3, 'And say to the land of Israel, Thus saith the Lord; Behold, I am against thee, and will draw forth my sword out of his sheath, and will cut off from thee the righteous and the wicked.'),
            plain(9, 'Son of man, prophesy, and say, Thus saith the Lord; Say, A sword, a sword is sharpened, and also furbished:'),
            plain(10, 'It is sharpened to make a sore slaughter; it is furbished that it may glitter: should we then make mirth? it contemneth the rod of my son, as every tree.'),
            plain(12, 'Cry and howl, son of man: for it shall be upon my people, it shall be upon all the princes of Israel: terrors by reason of the sword shall be upon my people: smite therefore upon thy thigh.'),
            plain(14, 'Thou therefore, son of man, prophesy, and smite thine hands together, and let the sword be doubled the third time, the sword of the slain: it is the sword of the great men that are slain, which entereth into their privy chambers.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek21-sword',
          html:
            'God draws His sword. The image is stark and terrible. "I will cut off from thee the righteous and the wicked." This is not surgical judgment. This is wholesale judgment—the sword falls indiscriminately on the land. The sword is sharpened for "sore slaughter," burnished so that it glitters in the light. Judgment is not hidden. It is public, visible, terrible in its clarity.',
        },
        {
          kind: 'commentary',
          id: 'ezek21-dirge',
          html:
            'Ezekiel is told not to speak words of comfort, but to lament. "Cry and howl." This is not professional detachment. The prophet is to embody the pain of what is coming. He is to smite his thigh—the gesture of deepest anguish. And why? "For it shall be upon my people." The sword comes against God&apos;s own people. This judgment is not God&apos;s delight. It is God&apos;s hard necessity.',
        },
        {
          kind: 'hebrew',
          id: 'ezek21-sword-herev',
          title: 'Cherev — "Sword" (Judgment, Division)',
          script: 'חֶרֶב',
          translit: '<strong>Cherev</strong> · sword; instrument of judgment and division',
          description:
            'Cherev appears throughout Ezekiel as an image of God&apos;s judgment. It cuts and divides. In New Testament language, the "sword of the Spirit" is the word of God—it pierces to the dividing of soul and spirit. Judgment and truth are inseparable.',
        },
        {
          kind: 'reflection',
          id: 'ezek21-judgment',
          prompt: 'How do you respond when you encounter God&apos;s judgment in Scripture? With fear? With detachment? With acceptance?',
        },
      ],
    },

    {
      ref: 'Ezekiel 21:24–27',
      title: 'The King of Babylon and the Coming King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(24, 'Therefore thus saith the Lord God; Because ye have made your iniquity to be remembered, in that your transgressions are discovered, so that in all your doings your sins do appear; because, I say, that ye are come to remembrance, ye shall be taken with the hand.'),
            plain(25, 'And thou, profane wicked prince of Israel, whose day is come, when iniquity shall have an end,'),
            plain(26, 'Thus saith the Lord God; Remove the diadem, and take off the crown: this shall not be the same: exalt him that is low, and abase him that is high.'),
            plain(27, 'I will overturn, overturn, overturn it: and it shall be no more, until he come whose right it is; and I will give it him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek21-overturned',
          html:
            'The earthly throne of Judah will be overturned. The diadem will be removed. The crown will be taken off. This is not the end of judgment. It is the clearing of the way. "Exalt him that is low, and abase him that is high." God will reverse the order of power in the world. The mighty will be brought down. The humble will be exalted. The throne of David—which had endured for four hundred years—will pass away.',
        },
        {
          kind: 'commentary',
          id: 'ezek21-until-he-come',
          html:
            '"I will overturn, overturn, overturn it: and it shall be no more, until he come whose right it is." Three times God says "overturn." The repetition conveys not just judgment but a kind of relentlessness. And yet, even in this relentless judgment, there is a "until"—a waiting. A limit. A point beyond which the overturning will cease. "Until he come whose right it is." This echoes Genesis 49:10: "The sceptre shall not depart from Judah...until Shiloh come." It is a prophecy of Messiah.',
        },
        {
          kind: 'christ',
          id: 'ezek21-christ-shiloh',
          title: 'Christ Connection — Whose Right It Is',
          html:
            'The phrase "he come whose right it is" connects directly to Genesis 49:10, a passage understood throughout Jewish tradition as referring to the Messiah. Jesus came when the scepter of Judah had long departed, when the earthly throne had been overturned by Babylon and Rome. Yet He came not to restore an earthly kingdom, but to establish an eternal kingdom "not of this world." His right is not based on human lineage or earthly power, but on His nature as the Son of God.',
        },
        {
          kind: 'carry',
          html:
            'Every earthly throne will be overturned. Every power will eventually fall. But there is a King coming—is come—whose right cannot be questioned, whose throne cannot be shaken. When we place our trust in human power or human solutions, we are placing our trust in what will inevitably be overturned. Only the kingdom of Christ endures.',
        },
        {
          kind: 'reflection',
          id: 'ezek21-kingdom',
          prompt: 'Where are you seeking security in earthly powers or institutions? What would it look like to place your hope entirely in the King whose right is absolute?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I will overturn, overturn, overturn it: and it shall be no more, until he come whose right it is; and I will give it him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 21 · Study Guide',
  },

  hasHebrew: true,
};
