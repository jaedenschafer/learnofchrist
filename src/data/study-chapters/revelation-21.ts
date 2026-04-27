import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const REVELATION_21: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 21,

  intros: [
    "&quot;And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away.&quot; The holy city, new Jerusalem, comes down from God. &quot;Behold, the tabernacle of God is with men.&quot; God Himself shall wipe away all tears. There shall be no more death, neither sorrow, nor crying. The former things are passed away.",
    "John is shown the Bride, the Lamb&apos;s wife — a city of pure gold, with twelve gates of pearl, twelve foundations bearing the names of the apostles. There is no temple in it, &quot;for the Lord God Almighty and the Lamb are the temple of it.&quot; No sun, no moon — &quot;the glory of God did lighten it, and the Lamb is the light thereof.&quot;",
  ],

  sections: [
    {
      ref: 'Revelation 21:1–7',
      title: '&quot;Behold, I Make All Things New&quot;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(1, 'And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away; and there was no more sea.'),
            plain(2, 'And I John saw the holy city, new Jerusalem, coming down from God out of heaven, prepared as a bride adorned for her husband.'),
            plain(3, 'And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God.'),
            plain(4, 'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.'),
            plain(5, 'And he that sat upon the throne said, Behold, I make all things new. And he said unto me, Write: for these words are true and faithful.'),
            plain(6, 'And he said unto me, It is done. I am Alpha and Omega, the beginning and the end. I will give unto him that is athirst of the fountain of the water of life freely.'),
            plain(7, 'He that overcometh shall inherit all things; and I will be his God, and he shall be my son.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev21-newcreation',
          html: 'The whole story arcs from Genesis 1 — &quot;In the beginning God created the heaven and the earth&quot; — to Revelation 21 — &quot;A new heaven and a new earth.&quot; The first creation became groaning. The new creation is unbreakable. God&apos;s presence, which has lived in tabernacle and temple, now dwells fully with His people.',
        },
        {
          kind: 'commentary',
          id: 'rev21-tears',
          html: 'Notice God Himself wipes the tears. He does not delegate it. The same God whose throne shook in earlier chapters now stoops to dry the eyes of His people one face at a time. The intimacy of this is staggering.',
        },
        {
          kind: 'greek',
          id: 'rev21-kainos',
          title: 'Kainos — New (in Quality, Not Just in Time)',
          script: 'καινός',
          translit: '<strong>kainos</strong> · new in nature, fresh, unprecedented',
          description: 'Kainos means new not as the next replacement, but new as redeemed and renewed. The new heaven and new earth are not simply later copies — they are creation as God always intended, freed from the curse.',
        },
        {
          kind: 'christ',
          id: 'rev21-christ-omega',
          title: 'Christ Connection — &quot;It Is Done&quot; (Again)',
          html: 'Three times in Scripture this phrase rings out: &quot;It is finished&quot; on the cross (John 19:30); &quot;It is done&quot; from the throne when wrath ends (Revelation 16:17); and now &quot;It is done&quot; here as creation itself is renewed. Calvary, judgment, and re-creation are not three projects — they are three movements of the one finishing work of Christ.',
        },
        {
          kind: 'carry',
          html: 'Whatever you mourn today, however broken your story, the One on the throne says: &quot;Behold, I make all things new.&quot; Not new in the sense of merely different — new in the sense of healed, redeemed, glorified.',
        },
        {
          kind: 'reflection',
          id: 'rev21-ref-1',
          prompt: 'Which tears do you most want God to wipe away? What does it mean to you that He says, &quot;I will&quot;?',
        },
      ],
    },

    {
      ref: 'Revelation 21:22–27',
      title: 'The Lamb Is the Light',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(22, 'And I saw no temple therein: for the Lord God Almighty and the Lamb are the temple of it.'),
            plain(23, 'And the city had no need of the sun, neither of the moon, to shine in it: for the glory of God did lighten it, and the Lamb is the light thereof.'),
            plain(24, 'And the nations of them which are saved shall walk in the light of it: and the kings of the earth do bring their glory and honour into it.'),
            plain(27, 'And there shall in no wise enter into it any thing that defileth, neither whatsoever worketh abomination, or maketh a lie: but they which are written in the Lamb&apos;s book of life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev21-temple',
          html: 'No temple — because the whole city is the meeting place of God and people. No sun — because the Lamb shines. The architecture of the city is not stone and gold finally, but presence. To live there is to live in unmediated nearness to the One who loves us.',
        },
        {
          kind: 'christ',
          id: 'rev21-christ-light',
          title: 'Christ Connection — The Lamb the Light',
          html: 'In Genesis the first words of creation were &quot;Let there be light&quot; — before sun, moon, and stars existed. The light came from God Himself. Revelation 21 closes the circle: in the new creation the light comes again from God Himself, in the Person of the Lamb. He was the Light of the world (John 8:12); now He is the Light of the city forever.',
        },
        {
          kind: 'carry',
          html: 'You will never need a sun in heaven, because Christ Himself will light every street. The future you are walking toward is unimaginable not because it is empty, but because He fills it.',
        },
        {
          kind: 'reflection',
          id: 'rev21-ref-2',
          prompt: 'If Christ Himself is the light of the city, how does that change what you long for in eternity?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Revelation 21',
    quote: '&quot;And God shall wipe away all tears from their eyes; and there shall be no more death... Behold, I make all things new.&quot;',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 21 · Study Guide',
  },
};
