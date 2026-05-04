import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 45 — The King and His Bride
 *
 * A royal wedding song. "Thy throne, O God, is for ever and ever." Hebrews[res:intertextual-psalms-45-nt]
 * 1:8 quotes this directly of Christ. The psalmist describes the King and His
 * Bride—united, radiant, victorious. Christ and the Church. A portrait of
 * eternal union and mutual devotion.
 */
export const PSALMS_45: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 45,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 45',
  },
  intros: [
    'Psalm 45 is a royal epithalamion—a wedding song for a king[res:sefaria-psalms-45]. The first half celebrates the King: His majesty, His justice, His power. "Gird thy sword upon thy thigh, O most mighty, with thy glory and thy majesty." He is radiant with splendor. The second half turns to His Bride: "Hearken, O daughter, and consider...forget also thine own people, and thy father&apos;s house; so shall the king greatly desire thy beauty." This is not a human wedding, though it may have been written as one. The psalm speaks of union at the deepest level—king and queen, kingdom and people, bridegroom and bride[res:bible-odyssey-bride-imagery].',
    'For Christian interpretation, the King is Christ, and the Bride is the Church. Hebrews 1:8 quotes verse 6—"Thy throne, O God, is for ever and ever"—and applies it directly to Christ. This is the ultimate marriage: Christ and His people, united eternally, transformed by His love into His image. The psalmist offers a portrait of the union that Jesus Himself came to make possible.',
  ],

  sections: [
    {
      ref: 'Psalm 45:1–9',
      title: 'The Majesty of the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 45,
          lines: [
            plain(1, 'My heart is inditing a good matter: I speak of the things which I have made touching the king: my tongue is the pen of a ready writer.'),
            plain(2, 'Thou art fairer than the children of men: grace is poured into thy lips: therefore God hath blessed thee for ever.'),
            plain(3, 'Gird thy sword upon thy thigh, O most mighty, with thy glory and thy majesty.'),
            plain(4, 'And in thy majesty ride prosperously because of truth and meekness and righteousness; and thy right hand shall teach thee terrible things.'),
            plain(6, 'Thy throne, O God, is for ever and ever: the sceptre of thy kingdom is a right sceptre.'),
            plain(7, 'Thou lovest righteousness, and hatest wickedness: therefore God, thy God, hath anointed thee with the oil of gladness above thy fellows.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms45-inditing',
          html:
            'The psalmist speaks as a court poet, commissioned to compose something noble. His heart is full of good things to say about the king. He will not hold back. His tongue is the pen of a ready writer—quick, fluent, eager to capture the majesty before him. This is not forced flattery. This is genuine awe.',
        },
        {
          kind: 'hebrew',
          id: 'psalms45-yafah',
          title: 'Yafah — "Fairer" / "Beautiful"',
          script: 'יָפָה',
          translit: '<strong>Yafah</strong> · fair; beautiful; excellent; distinguished in appearance',
          description:
            'The King is yafah—beautiful in a way that exceeds the children of men. This is not mere physical beauty. This is the beauty that comes from righteousness, from the alignment of character with truth. The King is more beautiful than any human because he embodies excellence in his very being.',
        },
        {
          kind: 'commentary',
          id: 'psalms45-grace',
          html:
            '"Grace is poured into thy lips." The King does not merely look the part. He speaks grace. His words are gracious. His speech heals, judges, teaches. And God has blessed him forever—the blessing is not temporary, not conditional, but perpetual. "Therefore God hath blessed thee for ever."',
        },
        {
          kind: 'commentary',
          id: 'psalms45-sword',
          html:
            'But the King is not only gracious. He is mighty. "Gird thy sword upon thy thigh, O most mighty, with thy glory and thy majesty." The sword speaks of power, of the ability to enforce justice, to overcome enemies. And this mighty King rides "prosperouly because of truth and meekness and righteousness." The combination is crucial: might coupled with meekness, power with righteousness.',
        },
        {
          kind: 'commentary',
          id: 'psalms45-throne',
          html:
            '"Thy throne, O God, is for ever and ever: the sceptre of thy kingdom is a right sceptre." This is the climax of the description. The King is not merely a human ruler. He is God. His throne endures forever. And the scepter with which he rules is right—not tyrannical, but just. In Hebrews 1, the writer uses this verse to prove that Christ is God, eternal, worthy of worship.',
        },
        {
          kind: 'reflection',
          id: 'psalms45-throne-god',
          prompt: 'The psalmist says the King is God with an eternal throne. For you, what does it mean to serve a King whose authority is eternal and whose rule is perfectly just?',
        },
      ],
    },

    {
      ref: 'Psalm 45:10–17',
      title: 'The Bride and the Kingdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 45,
          lines: [
            plain(10, 'Hearken, O daughter, and consider, and incline thine ear; forget also thine own people, and thy father&apos;s house;'),
            plain(11, 'So shall the king greatly desire thy beauty: for he is thy Lord; and worship thou him.'),
            plain(12, 'And the daughter of Tyre shall be there with a gift; even the rich among the people shall intreat thy favour.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-45-78mid-1',
          html:
            'Address to the king shifts to address to the bride. Strength gives way to honor; the king&apos;s glory becomes his wedding.',
        },
        {
          kind: 'scripture',
          chapter: 45,
          lines: [
            plain(13, 'The king&apos;s daughter is all glorious within: her clothing is of wrought gold.'),
            plain(14, 'She shall be brought unto the king in raiment of needlework: the virgins her companions that follow her shall be brought unto thee.'),
            plain(15, 'With gladness and rejoicing shall they be brought: they shall enter into the king&apos;s palace.'),
            plain(17, 'I will make thy name to be remembered in all generations: therefore shall the people praise thee for ever and ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms45-daughter',
          html:
            'Now the poet turns to address the Bride: "Hearken, O daughter, and consider." She is called to a choice. She must forget her own people, her father&apos;s house. This is not harsh rejection. It is transformation. To become the Bride of the King is to enter a new identity, a new allegiance, a new home.',
        },
        {
          kind: 'hebrew',
          id: 'psalms45-kalah',
          title: 'Kalah — "Bride"',
          script: 'כַּלָּה',
          translit: '<strong>Kalah</strong> · bride; daughter-in-law; the one betrothed',
          description:
            'Kalah is the bride—the one entering into covenant with the King. The word carries both the beauty of the wedding and the weight of the commitment. She is not merely invited. She is transformed by the union.',
        },
        {
          kind: 'commentary',
          id: 'psalms45-greatly-desire',
          html:
            '"So shall the king greatly desire thy beauty: for he is thy Lord; and worship thou him." The King desires the Bride. This is a mutual union, but not an equal one. He is the Lord. She is to worship Him. Yet His desire for her is great. He chooses her, transforms her, loves her with a love that is both kingly and personal.',
        },
        {
          kind: 'commentary',
          id: 'psalms45-glorious',
          html:
            '"The king&apos;s daughter is all glorious within: her clothing is of wrought gold." The Bride is transformed by her union with the King. She is glorious—resplendent, radiant. Her beauty is both inward (all glorious within) and outward (her clothing of wrought gold). She has been remade. She is no longer who she was. She is now the King&apos;s daughter, the King&apos;s Bride.',
        },
        {
          kind: 'commentary',
          id: 'psalms45-palace',
          html:
            'The Bride is brought to the King in needlework raiment, accompanied by virgins. "With gladness and rejoicing shall they be brought: they shall enter into the king&apos;s palace." This is joy. Complete, unqualified joy. The union with the King is not a burden. It is the object of rejoicing. The palace is the destination, the home, the place of fulfillment.',
        },
        {
          kind: 'christ',
          id: 'psalms45-christ-church',
          title: 'Christ Connection — Christ and the Church',
          html:
            'Ephesians 5:25–27 describes the union of Christ and the Church in language echoing Psalm 45: "Christ also loved the church, and gave himself for it; that he might sanctify and cleanse it...that he might present it to himself a glorious church, not having spot, or wrinkle, or any such thing; but that it should be holy and without blemish." Christ is the King. The Church is His Bride. He desires her beauty—not external, but the beauty that comes from holiness, from being transformed into His image. And He has paid the ultimate price for this union—His own life. The marriage of the Lamb (Rev 19) is the eternal union toward which all history moves.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 45 speaks of union at the deepest level. The King is mighty, eternal, perfectly just. The Bride is called to leave her former home and enter into covenant with Him. She is transformed by that union. She is remade, glorified, brought into joy. This is the promise of Christ to His people: that we who come to Him are not merely forgiven individuals. We are the Bride of the King. We are joined to Him in a union that is eternal, glorious, and beautiful.',
        },
        {
          kind: 'reflection',
          id: 'psalms45-bride-king',
          prompt: 'What would it mean to see yourself as the Bride of Christ—not as a metaphor, but as a reality? What would change in how you think about your union with Him, your place in His kingdom, your beauty in His sight?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thy throne, O God, is for ever and ever...Therefore God, thy God, hath anointed thee with the oil of gladness above thy fellows.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 45 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-45',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 45 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.45',
      description: 'Royal wedding song with medieval Jewish interpretation.',
    },
    {
      id: 'intertextual-psalms-45-nt',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 45 in Hebrews 1',
      url: 'https://intertextual.bible/search?q=Psalm+45',
      description: 'Hebrews applies Psalm 45 to Christ&apos;s divinity and throne.',
    },
  ],

  hasHebrew: true,
};
