import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 34 — The Day of the Lord and Final Judgment
 *
 * "For it is the day of the Lord&apos;s vengeance, and the year of recompences
 * for the controversy of Zion." The nations, especially Edom, will face
 * God&apos;s judgment. "And the streams thereof shall be turned into pitch, and
 * the dust thereof into brimstone, and the land thereof shall become burning
 * pitch. It shall not be quenched night nor day." This is apocalyptic vision—
 * the final reckoning, the judgment of God poured out, the old order passing
 * away.
 */
export const ISAIAH_34: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 34,

  estimatedMinutes: { 5: 2, 10: 4, 15: 6 },
  intros: [
    'After the vision of the king and the city at rest comes a vision of judgment. Isaiah calls the nations to witness. The Lord will have judgment against all nations, and fury against all their armies. But the focus falls on Edom—the ancient enemy, the nation that has gloated over Israel&apos;s suffering. Upon Edom, the sword of God will fall. The land will burn. The streams will become pitch. Fire will consume the earth and all that is in it. This is not a chapter of comfort. This is a chapter of justice—the promise that those who oppose God and His people will face reckoning.',
  ],

  sections: [
    {
      ref: 'Isaiah 34:1–7',
      title: 'The Judgment Against the Nations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            plain(1, 'Come near, ye nations, to hear; and hearken, ye people: let the earth hear, and all that is therein; the world, and all things that come forth of it.'),
            plain(2, 'For the indignation of the Lord is upon all nations, and his fury upon all their armies: he hath utterly destroyed them, he hath delivered them to the slaughter.'),
            plain(3, 'Their slain also shall be cast out, and their stink shall come up out of their carcases, and the mountains shall be melted with their blood.'),
            plain(4, 'And all the host of heaven shall be dissolved, and the heavens shall be rolled together as a scroll: and all their host shall fall down, as the leaf falleth off from the vine, and as a falling fig from the fig tree.'),
            plain(5, 'For my sword shall be bathed in heaven: behold, it shall come down upon Idumea, and upon the people of my curse, to judgment.'),
            plain(6, 'The sword of the Lord is filled with blood, it is made fat with fatness, and with the blood of lambs and goats, with the fat of the kidneys of rams: for the Lord hath a sacrifice in Bozrah, and a great slaughter in the land of Idumea.'),
            plain(7, 'And the unicorns shall come down with them, and the bullocks with the bulls; and their land shall be soaked with blood, and their dust made fat with fatness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah34-judgment',
          html:
            'Isaiah opens with a call to witness: "Come near, ye nations, to hear." All creation is summoned to see what God is about to do. The Lord has indignation against all nations and fury against all their armies. He will utterly destroy them. This is comprehensive. This is final. This is the judgment of God against those who have resisted Him.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah34-cherem',
          title: 'Cherem — "Curse" (Devoted to Destruction)',
          script: 'חֵרֶם',
          translit: '<strong>Cherem</strong> · curse, devoted thing; something set apart for destruction or destruction',
          description:
            'The word cherem carries the weight of being devoted to the Lord—but devoted to destruction, not blessing. It refers to something wholly destroyed, utterly cut off. When Isaiah says "the people of my curse," he is saying they are a people wholly devoted to destruction, marked for complete obliteration.',
        },
        {
          kind: 'commentary',
          id: 'isaiah34-sword',
          html:
            'The image of God&apos;s sword is striking. It is "bathed in heaven" and "filled with blood." It is "made fat" with the sacrifice of Bozrah (capital of Edom). This is not the language of orderly judgment. This is the language of decisive, overwhelming, total destruction. Those who have resisted God will find no shelter. No defense will stand.',
        },
        {
          kind: 'christ',
          id: 'isaiah34-christ-judge',
          title: 'Christ Connection — The Judge of All the Earth',
          html:
            'In Revelation 19, John sees Christ returning in judgment, riding on a white horse with a sword coming from His mouth. This echoes Isaiah&apos;s vision of God&apos;s sword of judgment. Christ is not only the merciful Savior who died for the world. He is also the judge before whom every knee will bow and every account will be settled. The same Christ who offers mercy will execute perfect justice.',
        },
        {
          kind: 'carry',
          html:
            'This passage confronts the reader with the reality of God&apos;s justice. We live in an age that emphasizes God&apos;s mercy, and rightly so. But Isaiah insists that God is also just. Evil will not stand forever. Those who oppose God and persecute His people will face reckoning. This is not a promise of personal vengeance for the believer to execute. It is a promise that God Himself is the ultimate protector of His people and the ultimate judge of wickedness.',
        },
        {
          kind: 'reflection',
          id: 'isaiah34-justice',
          prompt: 'How does it affect you to contemplate God as a judge of nations and wickedness? Does it comfort you that God will right wrongs, or does it challenge you? How does God&apos;s justice inform your own pursuit of justice in this world?',
        },
      ],
    },

    {
      ref: 'Isaiah 34:8–17',
      title: 'The Land of Edom Laid Waste',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            plain(8, 'For it is the day of the Lord&apos;s vengeance, and the year of recompences for the controversy of Zion.'),
            plain(9, 'And the streams thereof shall be turned into pitch, and the dust thereof into brimstone, and the land thereof shall become burning pitch.'),
            plain(10, 'It shall not be quenched night nor day; the smoke thereof shall go up for ever: from generation to generation it shall lie waste; none shall pass through it for ever and ever.'),
            plain(11, 'But the cormorant and the bittern shall possess it; the owl also and the raven shall dwell in it: and he shall stretch out upon it the line of confusion, and the stones of emptiness.'),
            plain(12, 'They shall call the nobles thereof to the kingdom, but none shall be there, and all her princes shall be nothing.'),
            plain(13, 'And thorns shall come up in her palaces, nettles and brambles in the fortresses thereof: and it shall be an habitation of dragons, and a court for owls.'),
            plain(14, 'The wild beasts of the desert shall also meet with the wild beasts of the island, and the satyr shall cry to his fellow; the screech owl also shall rest there, and find for herself a place of rest.'),
            plain(15, 'There shall the great owl make her nest, and lay, and hatch, and gather under her shadow: there shall the vultures also be gathered, every one with her mate.'),
            plain(16, 'Seek ye out of the book of the Lord, and read: no one of these shall fail, nor one shall be missing thereof; for my mouth it hath commanded, and his spirit it hath gathered them.'),
            plain(17, 'And he hath cast the lot for them, and his hand hath divided it unto them by line: they shall possess it for ever, from generation to generation shall they dwell therein.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah34-vengeance',
          html:
            'The day of the Lord&apos;s vengeance is explicitly tied to "the controversy of Zion"—the dispute between God and those who have resisted His people. This is not arbitrary punishment. This is God&apos;s response to the persecution of the faithful. The land of Edom will be transformed into a wasteland—streams turned to pitch, dust to brimstone, the land burning forever.',
        },
        {
          kind: 'commentary',
          id: 'isaiah34-emptiness',
          html:
            'The language of desolation is relentless. A "line of confusion" and "stones of emptiness" will be stretched out. The nobles will be called to the kingdom, but none will be there. Thorns and nettles will cover the palaces. Wild beasts and owls will possess the land. From generation to generation it will lie waste. This is not temporary judgment. This is permanent destruction, an utter reversal of the order and comfort that had once existed.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah34-tohu',
          title: 'Tohu — "Emptiness" (Confusion, Formlessness)',
          script: 'תֹהוּ',
          translit: '<strong>Tohu</strong> · emptiness, void, formlessness; the state before creation',
          description:
            'The Hebrew tohu is the same word used in Genesis 1:2—"without form and void"—to describe the chaos before God ordered creation. When Isaiah says "stones of emptiness," he is saying the land will return to primordial chaos, to the state before God brought order. It is a reversal of creation itself.',
        },
        {
          kind: 'commentary',
          id: 'isaiah34-book-lord',
          html:
            'A striking verse interrupts the vision: "Seek ye out of the book of the Lord, and read: no one of these shall fail, nor one shall be missing thereof; for my mouth it hath commanded, and his spirit it hath gathered them." The reader is invited to read about this in the "book of the Lord"—the eternal record where God has written what shall come to pass. Not one word will fail. Not one prophecy will be missing. All will come to pass exactly as written.',
        },
        {
          kind: 'christ',
          id: 'isaiah34-christ-authority',
          title: 'Christ Connection — The Word That Does Not Return Empty',
          html:
            'In Isaiah 55, we read that God&apos;s word will not return empty but will accomplish what He purposes. This echoes through Isaiah 34: the prophecies will be fulfilled because God has spoken them. In John 1, Christ is called "the Word"—the living expression of God&apos;s will and purpose. Christ&apos;s judgment, like God&apos;s word, will be unfailingly executed. Not one word from His mouth will fall to the ground.',
        },
        {
          kind: 'carry',
          html:
            'The promise of this chapter, difficult as it is, is that God&apos;s judgment is certain and will be executed. For those who have suffered at the hands of the wicked, this is comfort. For those who persist in wickedness, this is warning. The reader must ask: On whose side of this division will you stand? Will you align with God and His purposes, or will you resist and face His judgment?',
        },
        {
          kind: 'reflection',
          id: 'isaiah34-book-lord',
          prompt: 'What does it mean to you that God&apos;s words and purposes are written in a book that cannot fail? How does this truth comfort you when you face injustice or suffering?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'It is the day of the Lord&apos;s vengeance, and the year of recompences for the controversy of Zion.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 34 · Study Guide',
  },

  hasHebrew: true,
};
