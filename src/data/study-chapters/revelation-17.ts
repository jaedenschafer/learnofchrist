import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const REVELATION_17: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 17,

  estimatedMinutes: { beginner: 4, intermediate: 8, deep: 13 },
  intros: [
    "An angel shows John the great whore — the woman who has seduced the kingdoms of the earth with fornication and wealth. She sits on a scarlet beast, drunk with the blood of the saints. Her name is Mystery, Babylon the Great. Identifying her with any single historical power misses the point: she is the pattern of every seductive false kingdom, dressed in gold and scarlet, offering power and prosperity to those who will worship her instead of God.",
    "But the Lamb shall overcome them. He is Lord of lords and King of kings. The same beast that carried the woman will turn and devour her — evil has no loyalty even to itself. This vision is not vindication delayed; it is victory already won, shown to believers who are called, chosen, and faithful. You are in that company if you are with Him.",
  ],

  opener: {
    matchArtist: /tissot|dore/i,
    matchTitle: /babylon|whore|great woman/i,
    caption: 'Revelation 17 · The Great Whore',
  },

  sections: [
    {
      ref: 'Revelation 17:1–3',
      title: 'The Angel&apos;s Invitation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(1, 'And there came one of the seven angels which had the seven vials, and talked with me, saying unto me, Come hither; I will shew unto thee the judgment of the great whore that sitteth upon many waters:'),
            plain(2, 'With whom the kings of the earth have committed fornication, and the inhabitants of the earth have been made drunk with the wine of her fornication.'),
            plain(3, 'So he carried me away in the spirit into the wilderness: and I saw a woman sit upon a scarlet coloured beast, full of names of blasphemy, having seven heads and ten horns.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev17-angel-intro',
          html: 'An angel who poured out God&apos;s wrath now shows John the judgment that follows. This is spiritual sight — &quot;in the spirit&quot; John is carried into the wilderness to see what the world calls civilized power: a woman riding a beast, dressed in wealth and seduction, intoxicating nations with her promises. The wilderness is where John can see truly.',
        },
        {
          kind: 'greek',
          id: 'rev17-porneia',
          title: 'Porneia — Fornication',
          script: 'πορνεία',
          translit: '<strong>porneia</strong> · covenant-breaking, idolatrous unfaithfulness',
          description: 'Not mere lust, but the breaking of covenant. The great whore seduces kingdoms away from loyalty to God — the ultimate fornication.',
        },
        {
          kind: 'reflection',
          id: 'rev17-ref-1a',
          prompt: 'What power, wealth, or system are you most tempted to become "drunk" on? What does "fornication with Babylon" look like in your daily choices?',
        },
      ],
    },

    {
      ref: 'Revelation 17:4–6',
      title: 'The Woman Arrayed in Purple and Scarlet',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(4, 'And the woman was arrayed in purple and scarlet colour, and decked with gold and precious stones and pearls, having a golden cup in her hand full of abominations and filthiness of her fornication:'),
            plain(5, 'And upon her forehead was a name written, MYSTERY, BABYLON THE GREAT, THE MOTHER OF HARLOTS AND ABOMINATIONS OF THE EARTH.'),
            plain(6, 'And I saw the woman drunken with the blood of the saints, and with the blood of the martyrs of Jesus: and when I saw her, I wondered with great admiration.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev17-babylon-name',
          html: 'She is called Mystery — the hidden reality unveiled. Babylon is more than any single city or empire. She is the archetypal seductive power system: robed in the colors of royalty (purple and scarlet), adorned with wealth and beauty, offering a golden cup. But inside the cup is filthiness. This is the fundamental deception: Babylon always looks more beautiful than she is, and what she offers always costs more than it appears.',
        },
        {
          kind: 'greek',
          id: 'rev17-mysterion',
          title: 'Mysterion — Mystery',
          script: 'μυστήριον',
          translit: '<strong>mystērion</strong> · hidden truth now disclosed',
          description: 'The mystery is not a puzzle with a riddle-answer, but a hidden reality laid bare. What the world admires in secret is revealed for what it is.',
        },
        {
          kind: 'christ',
          id: 'rev17-christ-blood',
          title: 'Christ Connection — The Woman Drunk with the Blood of Saints',
          html: 'The woman is drunk with the blood of the saints — but whose blood bought them? &quot;Thou wast slain, and hast redeemed us to God by thy blood&quot; (Revelation 5:9). She has spilled the blood of those whom Christ&apos;s own blood redeemed. This is the final answer to her seduction: she offers you a seat at her table; Christ offers you redemption by His death. One costs your integrity; the other costs Him everything.',
        },
        {
          kind: 'carry',
          html: 'You meet Babylon every day. She comes in the form of every system that promises you comfort, influence, or security in exchange for a little compromise. &quot;Everyone does this.&quot; &quot;Just this once.&quot; &quot;You deserve it.&quot; The gold and pearls are real; so is the filth inside the cup. The question is not whether Babylon is attractive — she is. The question is whether you can see what your admiration is actually feeding.',
        },
        {
          kind: 'reflection',
          id: 'rev17-ref-1b',
          prompt: 'What form of Babylon are you most likely to admire without question — in your career, your finances, your relationships, your consumption? What would it take to remember what&apos;s really in that golden cup?',
        },
      ],
    },

    {
      ref: 'Revelation 17:7–11',
      title: 'The Beast That Was and Is Not',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(7, 'And the angel said unto me, Wherefore didst thou marvel? I will tell thee the mystery of the woman, and of the beast that carrieth her, which hath the seven heads and ten horns.'),
            plain(8, 'The beast that thou sawest was, and is not; and shall ascend out of the bottomless pit, and go into perdition: and they that dwell on the earth shall wonder, whose names were not written in the book of life from the foundation of the world, when they behold the beast that was, and is not, and yet is.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev17-was-is-not',
          html: 'The beast &quot;was, and is not, and yet is&quot; — a riddling phrase that captures the nature of Babylon&apos;s power. Every empire that seems invincible carries the seeds of its own collapse. Rome was thought eternal; Babylon was thought unshakeable. The vision shows not what is but what will be: the beast rising again out of the abyss, only to go into perdition. Those who wonder at it, who marvel at its power and crown it with their loyalty, are those whose names were never written in the Lamb&apos;s book. From the foundation of the world, God knew who would choose the beast and who would choose the Lamb.',
        },
        {
          kind: 'greek',
          id: 'rev17-thērion',
          title: 'Thērion — Beast',
          script: 'θηρίον',
          translit: '<strong>thērion</strong> · a wild beast, something irrational and violent',
          description: 'The power that carries Babylon is not wise or orderly — it is animal, driven by appetite, subject to the one who commands it. What Babylon rides is not throne but chaos.',
        },
        {
          kind: 'reflection',
          id: 'rev17-ref-2a',
          prompt: 'What system are you tempted to trust as permanent and unshakeable? What would it mean to remember that it will be judged?',
        },
      ],
    },

    {
      ref: 'Revelation 17:12–14',
      title: 'The Ten Kings and the Lamb&apos;s Victory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(12, 'And the ten horns which thou sawest are ten kings, which have received no kingdom as yet; but receive power as kings one hour with the beast.'),
            plain(13, 'These have one mind, and shall give their power and strength unto the beast.'),
            plain(14, 'These shall make war with the Lamb, and the Lamb shall overcome them: for he is Lord of lords, and King of kings: and they that are with him are called, and chosen, and faithful.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev17-ten-kings',
          html: 'The ten horns are ten kings who receive their authority &quot;one hour with the beast&quot; — a single, brief moment in the scope of eternity. They pool their power, their minds unified in opposition to the Lamb. This is the coalescence of all earthly power against God. And yet — &quot;the Lamb shall overcome them.&quot; Not through superior force but through the nature of who He is: Lord of lords, King of kings. His title is not something He must prove through conquest; it is what He is. Those who are with Him are not powerful warriors but the called, the chosen, the faithful — believers.',
        },
        {
          kind: 'greek',
          id: 'rev17-basilei',
          title: 'Basilei Basileōn — King of Kings',
          script: 'βασιλεῖ βασιλέων',
          translit: '<strong>basilei basileōn</strong> · King over all authorities and powers',
          description: 'The phrase strips away all other kingship as subordinate. Every other crown bows before this one.',
        },
        {
          kind: 'christ',
          id: 'rev17-christ-king',
          title: 'Christ Connection — He Overcomes Not by Force but by Truth',
          html: 'The Lamb makes war with the ten kings, and the Lamb overcomes them. Yet Revelation 19 shows this victory is not a battle of armies but a word from His mouth: &quot;Out of his mouth goeth a sharp sword, that with it he should smite the nations&quot; (19:15). The Lamb overcomes by speaking truth into a cosmos built on lies. His victory is the victory of reality over delusion.',
        },
        {
          kind: 'carry',
          html: 'If you are called, chosen, and faithful, you stand on the side that has already won. Not because you are strong or numerous or influential, but because you are with the One who is. Your faithfulness is not what saves you — it is your response to being saved.',
        },
        {
          kind: 'reflection',
          id: 'rev17-ref-2b',
          prompt: 'What does it mean to be &quot;called, chosen, and faithful&quot; in a week when all the world&apos;s systems are arrayed against your values? What does your faithfulness look like?',
        },
      ],
    },

    {
      ref: 'Revelation 17:15–18',
      title: 'The Waters Are Peoples, and Nations Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(15, 'And he saith unto me, The waters which thou sawest, where the whore sitteth, are peoples, and multitudes, and nations, and tongues.'),
            plain(16, 'And the ten horns which thou sawest upon the beast, these shall hate the whore, and shall make her desolate and naked, and shall eat her flesh, and burn her with fire.'),
            plain(17, 'For God hath put in their hearts to fulfil his will, and to agree, and give their kingdom unto the beast, until the words of God shall be fulfilled.'),
            plain(18, 'And the woman which thou sawest is that great city, which reigneth over the kings of the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev17-waters-peoples',
          html: 'The whore sits on many waters — and the waters are peoples, multitudes, nations, tongues. She does not rule through intrinsic power but through the consent of the masses she has seduced. She reigns by making people drunk on her wine. But her end comes not from heaven but from the very powers she has ridden: the ten kings will turn on her. They will strip her naked, eat her flesh, and burn her with fire. This is not external judgment but internal collapse — the beast turns on the woman who rode it. And God has put it in their hearts to fulfill His will. Even the turning against her becomes the instrument of His purpose.',
        },
        {
          kind: 'greek',
          id: 'rev17-potērion',
          title: 'Potērion — Cup',
          script: 'ποτήριον',
          translit: '<strong>potērion</strong> · a vessel to drink from; what one is destined to drink',
          description: 'In Scripture the cup is often fate or judgment. Babylon gives her cup to others; in the end she drinks what she gave.',
        },
        {
          kind: 'carry',
          html: 'The great whore&apos;s end comes not from a distant God but from the erosion of her own foundation. She reigns only as long as people choose to be drunk on her wine. When they awaken — when they see her for what she is — her power crumbles. This is mercy: it means that no seductive system, no matter how grand, can hold forever. Change is possible. Repentance is possible. The spell can be broken.',
        },
        {
          kind: 'reflection',
          id: 'rev17-ref-3',
          prompt: 'What seductive system do you need to see clearly — stripped of its glamour, shown for what it really feeds on? What would it take to refuse to be drunk on its wine?',
        },
      ],
    },

    {
      ref: 'Revelation 17 · The Pattern Across History',
      title: 'Babylon Is a Pattern, Not Just a City',
      blocks: [
        {
          kind: 'commentary',
          id: 'rev17-babylon-pattern',
          html: 'Identifying the woman with any single historical power — Rome, papal power, any modern nation — misses the point. The vision is not history-code but theology. Babylon is the pattern: any city, system, or kingdom that promises security and meaning without God, that seduces by wealth and false religion, that drinks the blood of the faithful while serving other gods. She has sat in many places — ancient Babel, imperial Rome, the centers of commerce in every age. The vision warns that the seduction will keep repeating: each generation will see her dressed in the clothes of its own era, speaking in its own language, offering its own version of glory. And each generation will face the same choice: to admire her from the outside, or to be carried away drunk on her wine.',
        },
        {
          kind: 'carry',
          html: 'If you live in a prosperous, influential society, you live inside Babylon&apos;s reach. You are not in danger of the vision just because you live in a certain place, but because any of us can be seduced by the wine of power, wealth, and belonging that Babylon offers. The antidote is not withdrawal from the world but clear sight — the ability to see what you admire and ask: Does this draw me closer to God, or away? Does it demand compromise? Does it offer me a place at a table that requires me to forget His blood? The call is not to condemnation but to discernment.',
        },
      ],
    },

    {
      ref: 'Revelation 17 · The Identity of the Called, Chosen, Faithful',
      title: 'Called, Chosen, and Faithful',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(14, 'These shall make war with the Lamb, and the Lamb shall overcome them: for he is Lord of lords, and King of kings: and they that are with him are called, and chosen, and faithful.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev17-identity',
          html: 'Three words name those who stand with the Lamb: called, chosen, faithful. You are called — invited, summoned by name out of the masses. You are chosen — selected, known, set apart before the foundation of the world. And you are faithful — not sinless, but loyal, showing up, staying turned toward Him even when the world offers easier paths. These three are not rewards you earn; they are graces you receive and then respond to. To be called is to know you matter to Him. To be chosen is to know you were never an accident. To be faithful is to know that your showing up, your yes, your small acts of loyalty matter to Him.',
        },
        {
          kind: 'greek',
          id: 'rev17-kletos',
          title: 'Klētos — Called',
          script: 'κλητός',
          translit: '<strong>kletos</strong> · invited, summoned, designated',
          description: 'Not a passive word but one of summons — you have been called out, called forward, called by name.',
        },
        {
          kind: 'greek',
          id: 'rev17-eklektos',
          title: 'Eklektos — Chosen',
          script: 'ἐκλεκτός',
          translit: '<strong>eklektos</strong> · selected, picked out, beloved',
          description: 'From the root &quot;to pick out.&quot; Not random selection but the choosing of one you love.',
        },
        {
          kind: 'greek',
          id: 'rev17-pistos',
          title: 'Pistos — Faithful',
          script: 'πιστός',
          translit: '<strong>pistos</strong> · reliable, trustworthy, steadfast',
          description: 'The same word used of God&apos;s faithfulness. To be faithful is to be faithful like Him — not perfect, but true.',
        },
        {
          kind: 'christ',
          id: 'rev17-christ-identity',
          title: 'Christ Connection — In Him You Are Called, Chosen, Faithful',
          html: 'Every Christian can claim these three names — not because of their performance but because they are in Christ. In Ephesians 1:4 Paul says God &quot;hath chosen us in him before the foundation of the world.&quot; Your calling and election are certain because they are His work. And when you are faithful, you are not earning favor — you are simply responding to the fact that you have already been loved and chosen. The Lamb overcomes not because He has better soldiers, but because He rides with the chosen of God.',
        },
        {
          kind: 'carry',
          html: 'If you are with the Lamb, your victory is not uncertain. It is not dependent on whether you are powerful or influential or whether the world respects you. You stand on the side where Lord of lords is your King. That is enough.',
        },
        {
          kind: 'reflection',
          id: 'rev17-ref-4',
          prompt: 'Which of these three names — called, chosen, faithful — do you most need to hear about yourself today? What would change if you really believed it?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Revelation 17',
    quote: 'The Lamb shall overcome them: for he is Lord of lords, and King of kings: and they that are with him are called, and chosen, and faithful.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 17 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-isaiah-13-14',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 13–14 — The Burden of Babylon',
      url: 'https://www.sefaria.org/Isaiah.13-14',
      description: 'OT prophecy of Babylon&apos;s fall — the template for John&apos;s harlot city.',
    },
    {
      id: 'british-museum-babylon-archaeology',
      kind: 'archaeology',
      source: 'British Museum',
      label: 'Babylon Excavations and Artifacts',
      url: 'https://www.britishmuseum.org',
      description: 'Archaeology of ancient Babylon — Ishtar gate, Nebuchadnezzar II, and the city&apos;s grandeur.',
    },
    {
      id: 'met-ancient-mesopotamia',
      kind: 'archaeology',
      source: 'Metropolitan Museum of Art',
      label: 'Ancient Mesopotamia — Babylon Collection',
      url: 'https://www.metmuseum.org',
      description: 'Metropolitan Museum&apos;s collection of Mesopotamian artifacts illustrating Babylon&apos;s power.',
    },
  ],

  hasHebrew: false,
};
