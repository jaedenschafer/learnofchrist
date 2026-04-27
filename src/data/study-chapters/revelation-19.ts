import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const REVELATION_19: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 19,

  intros: [
    "Heaven erupts in &quot;Hallelujah!&quot; — the only place this word appears in the New Testament, four times in this chapter alone. The marriage supper of the Lamb is announced: &quot;Blessed are they which are called unto the marriage supper of the Lamb.&quot; The Bride has made herself ready.",
    "Then heaven opens. A rider on a white horse appears, called Faithful and True. His eyes are as a flame of fire. On His thigh is written: KING OF KINGS, AND LORD OF LORDS. The beast and the false prophet are taken and cast into the lake of fire. The long arc of evil ends with the King.",
  ],

  sections: [
    {
      ref: 'Revelation 19:1–10',
      title: 'Hallelujah and the Marriage Supper',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(1, 'And after these things I heard a great voice of much people in heaven, saying, Alleluia; Salvation, and glory, and honour, and power, unto the Lord our God:'),
            plain(6, 'And I heard as it were the voice of a great multitude, and as the voice of many waters, and as the voice of mighty thunderings, saying, Alleluia: for the Lord God omnipotent reigneth.'),
            plain(7, 'Let us be glad and rejoice, and give honour to him: for the marriage of the Lamb is come, and his wife hath made herself ready.'),
            plain(9, 'And he saith unto me, Write, Blessed are they which are called unto the marriage supper of the Lamb. And he saith unto me, These are the true sayings of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev19-hallelujah',
          html: 'After all the trumpets and bowls, after Babylon&apos;s fall, the dominant sound is not lament but Hallelujah. The redemption story ends in a wedding. The heavenly multitude has been waiting for this moment since Genesis 2 — when Adam first slept and woke to a bride. The True Adam now wakes to His.',
        },
        {
          kind: 'greek',
          id: 'rev19-hallelujah',
          title: 'Hallēlouia — Praise the Lord',
          script: 'ἁλληλουϊά',
          translit: '<strong>hallēlouia</strong> · &quot;praise Yah&quot;',
          description: 'Greek transliteration of Hebrew hallelu-Yah. It is the chorus of the Psalms, especially Psalms 113-118 and 146-150, brought into the climactic moment of the New Testament.',
        },
        {
          kind: 'christ',
          id: 'rev19-christ-bridegroom',
          title: 'Christ Connection — The Marriage of the Lamb',
          html: 'Every wedding in Scripture has been pointing here — Adam and Eve, Isaac and Rebekah, Boaz and Ruth. Even the prophets of the Old Testament described Israel as God&apos;s wife. Christ comes in the New Testament as Bridegroom (Mark 2:19, Ephesians 5:25-27). Revelation 19 is the consummation: the long story of love finally completed.',
        },
        {
          kind: 'carry',
          html: 'Whatever else is true of you, if you are in Christ, you are invited to the marriage supper of the Lamb. The deepest definition of your future is not your fears or your failures — it is His joy in receiving you.',
        },
        {
          kind: 'reflection',
          id: 'rev19-ref-bride',
          prompt: 'What would change in your life this week if you really believed you are invited to the marriage supper of the Lamb?',
        },
      ],
    },

    {
      ref: 'Revelation 19:11–21',
      title: 'King of Kings and Lord of Lords',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(11, 'And I saw heaven opened, and behold a white horse; and he that sat upon him was called Faithful and True, and in righteousness he doth judge and make war.'),
            plain(13, 'And he was clothed with a vesture dipped in blood: and his name is called The Word of God.'),
            plain(15, 'And out of his mouth goeth a sharp sword, that with it he should smite the nations: and he shall rule them with a rod of iron: and he treadeth the winepress of the fierceness and wrath of Almighty God.'),
            plain(16, 'And he hath on his vesture and on his thigh a name written, KING OF KINGS, AND LORD OF LORDS.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev19-rider',
          html: 'The Rider does not come with a sword in His hand — the sword comes out of His mouth. He conquers by His Word. The same Word that spoke creation into being now speaks the kingdom of evil out of being. His vesture is dipped in blood — His own, shed at Calvary. He fights by what He has already finished.',
        },
        {
          kind: 'christ',
          id: 'rev19-christ-king',
          title: 'Christ Connection — Faithful and True',
          html: 'In Revelation 1, John saw the Christ who was. In Revelation 19, John sees the Christ who returns. The same Word, same flame-eyes, same unshakable name. Faithful and True. The King is faithful to every promise He has ever made — and true to every word He has ever spoken.',
        },
        {
          kind: 'carry',
          html: 'You do not need to defeat evil. The King defeats it. You need to recognize the King when He comes — and to be one of those whose vesture is washed in His blood, not stained with the blood of the saints.',
        },
        {
          kind: 'reflection',
          id: 'rev19-ref-king',
          prompt: 'How does seeing Christ as Faithful and True, riding to make all things right, change the way you face injustice today?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Revelation 19',
    quote: '&quot;Blessed are they which are called unto the marriage supper of the Lamb.&quot;',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 19 · Study Guide',
  },
};
