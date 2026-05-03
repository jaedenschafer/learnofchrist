import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 63 — The Lone Warrior and the Winepress
 *
 * "Who is this that cometh from Edom, with dyed garments from Bozrah? this that
 * is glorious in his apparel, travelling in the greatness of his strength?" A lone
 * figure approaches, His garments stained red. "I have trodden the winepress alone;
 * and of the people there was none with me: for I will tread them in mine anger,
 * and trample them in my fury." This is Christ at the end of the age, treading the
 * winepress of God\'s judgment alone, as described also in Revelation 19.
 */
export const ISAIAH_63: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 63,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 3 },
  intros: [
    'Isaiah 63 opens with a vision of the Messiah returning in judgment. He comes from Edom, His garments stained with the blood of those He has judged. He treads the winepress alone—no one helps Him, because His judgment is His work alone. This is the answer to the question of justice: God will not leave injustice unpunished. The passage then shifts to prayer, remembering God\'s mercy in the past, His leadership through the wilderness, His Spirit given to His people. The prayer ends with a cry: God, where are You? Your people are suffering. Return and help us.',
  ],

  sections: [
    {
      ref: 'Isaiah 63:1–6',
      title: 'The Warrior Judge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 63,
          lines: [
            plain(1, 'Who is this that cometh from Edom, with dyed garments from Bozrah? this that is glorious in his apparel, travelling in the greatness of his strength? I that speak in righteousness, mighty to save.'),
            plain(2, 'Wherefore art thou red in thine apparel, and thy garments like him that treadeth in the winefat?'),
            plain(3, 'I have trodden the winepress alone; and of the people there was none with me: for I will tread them in mine anger, and trample them in my fury; and their blood shall be sprinkled upon my garments, and I will stain all my raiment.'),
            plain(4, 'For the day of vengeance is in mine heart, and the year of my redeemed is come.'),
            plain(5, 'And I looked, and there was none to help; and I wondered that there was none to uphold: therefore mine own arm brought salvation unto me; and my fury, it upheld me.'),
            plain(6, 'And I will tread down the people in mine anger, and make them drunk in my fury, and I will bring down their strength to the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa63-edom',
          html:
            'A figure approaches from Edom, from Bozrah. His garments are red, dyed as if from the winepress. He speaks in righteousness, mighty to save. Yet He is also stained with blood. He has trodden the winepress alone. The image is of one who has executed judgment without help, without support.[res:sefaria-isaiah-63]',        },
        {
          kind: 'hebrew',
          id: 'isaiah63-goel',
          title: 'Goel — "Redeemer"',
          script: 'גֹּאֵל',
          translit: '<strong>Goel</strong> · redeemer; kinsman-redeemer; one who rescues',
          description: 'The Redeemer is the one who was with Israel from the beginning.',
        },
        {
          kind: 'commentary',
          id: 'isa63-winepress',
          html:
            'The winepress is a symbol of judgment throughout Scripture. What grapes are to the winepress, enemies are to God\'s judgment. He treads them in anger and fury. Their blood stains His garments. This is divine vengeance, the day when God\'s justice is executed against those who have oppressed His people.',
        },
        {
          kind: 'hebrew',
          id: 'isa63-darak',
          title: 'Darak — "Tread" (Trample)',
          script: 'דָרַךְ',
          translit: '<strong>Darak</strong> · to tread; to trample; to walk on',
          description:
            'The Hebrew verb darak conveys forceful treading, the crushing weight of judgment. It is not gentle. It is the exercise of power against enemies.',
        },
        {
          kind: 'christ',
          id: 'isa63-christ-judgment',
          title: 'Christ Connection — The Judge',
          html:
            'In Revelation 19:11–16, John sees Christ coming on a white horse, His eyes like a flame of fire, His name called "The Word of God," with armies following Him. He wears a robe "dipped in blood." The vision matches Isaiah 63: Christ will tread the winepress of the wrath of God. Every act of injustice, every oppression, every violation will be answered. The day of vengeance is in God\'s heart, but so is the year of the redeemed.',
        },
        {
          kind: 'carry',
          html:
            'Isaiah 63 is a word to the oppressed and the suffering. God sees. God remembers. His day of justice will come. The blood-stained warrior is coming. For the enemies of God, this is terrible news. For the redeemed, it is the promise that injustice will not have the final word.',        },
      ],
    },

    {
      ref: 'Isaiah 63:7–19',
      title: 'Prayer for God\'s Mercy and Return',
      blocks: [
        {
          kind: 'scripture',
          chapter: 63,
          lines: [
            plain(7, 'I will mention the lovingkindnesses of the Lord, and the praises of the Lord, according to all that the Lord hath bestowed upon us, and the great goodness toward the house of Israel which he hath bestowed upon them according to his mercies, and according to the multitude of his lovingkindnesses.'),
            plain(8, 'For he said, Surely they are my people, children that will not lie: so he was their Saviour.'),
            plain(9, 'In all their affliction he was afflicted, and the angel of his presence saved them: in his love and in his pity he redeemed them; and he bare them, and carried them all the days of old.'),
            plain(16, 'Doubtless thou art our Father, though Abraham be ignorant of us, and Israel acknowledge us not: thou, O Lord, art our Father, our Redeemer; thy name is of old.'),
            plain(17, 'O Lord, why hast thou made us to err from thy ways, and hardened our heart from thy fear? Return for thy servants\' sake, the tribes of thy inheritance.'),
            plain(19, 'We are thine: thou never barest rule over us; thou didst never call thyself by our name.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa63-lovingkindness',
          html:
            'The prayer shifts from judgment to remembrance of God\'s mercy. The people recall God\'s lovingkindnesses, His great goodness. In their affliction, He was afflicted. The angel of His presence saved them. In His love and pity, He redeemed them, carried them through all their days.',
        },
        {
          kind: 'commentary',
          id: 'isa63-father',
          html:
            'The people cry: "Doubtless thou art our Father." Abraham may not know them, Israel may not acknowledge them, but God is their Father, their Redeemer. Yet the prayer also cries out in confusion: Why have You made us to err? Why have You hardened our hearts? Return to us. We are yours.',        },
        {
          kind: 'carry',
          html:
            'Isaiah 63\'s prayer is the prayer of those who love God even in confusion, who remember His faithfulness even when He seems absent, who call upon Him to return. This is the prayer of faith in the midst of suffering—not blind certainty, but trust rooted in memory of God\'s past mercy.',
        },
        {
          kind: 'reflection',
          id: 'isa63-father-2',
          prompt: 'When God seems distant or you do not understand His ways, what enables you to call Him "Father"? How do you hold both the memory of His past faithfulness and your current questions?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I have trodden the winepress alone...for the day of vengeance is in mine heart, and the year of my redeemed is come.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 63 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-isaiah-63',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 63',
      url: 'https://www.sefaria.org/Isaiah.63',
      description: 'Sefaria open-access source text and translations for Isaiah 63.',
    },
  ],

  hasHebrew: true,
};
