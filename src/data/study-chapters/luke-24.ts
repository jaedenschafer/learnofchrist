import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 24 — The Resurrection and Ascension
 *
 * The women come to the sepulchre with spices to anoint Jesus&apos; body. But they
 * find the stone rolled away and the body is gone. Two men in shining garments
 * say: "Why seek ye the living among the dead? He is not here, but is risen."
 * Remember His words: the Son of man must be delivered into the hands of sinful
 * men, be crucified, and the third day rise again. Two disciples walk to
 * Emmaus, sorrowful. Jesus Himself draws near but they know Him not. He opens
 * the scriptures: "Ought not Christ to have suffered these things?" They invite
 * Him to stay. At the table, He breaks bread, and their eyes are opened. They
 * recognize Him. Suddenly He vanishes. Jesus appears to the eleven: "Peace be
 * unto you." He eats fish. He opens their minds to understand the scriptures.
 * He ascends into heaven, blessing them.
 */
export const LUKE_24: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 24,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  opener: {
    matchTitle: /Apparition of Our Lord/i,
    caption: 'Luke 24',
  },
  intros: [
    'The women come to the sepulchre early in the morning to anoint Jesus&apos; body with the spices they have prepared. But they find the stone rolled away from the sepulchre. When they enter, they do not find the body of the Lord Jesus. Two men in shining garments stand by them. The women are afraid. The men say: "Why seek ye the living among the dead? He is not here, but is risen." They remind the women: Jesus said He must be delivered into the hands of sinful men, be crucified, and the third day rise again. The women remember His words.',
    'Two disciples walk to Emmaus, sad. Jesus Himself draws near but is hidden from their eyes. He asks: "What manner of communications are these that ye have one to another, as ye walk?" They tell Him of Jesus the prophet who was delivered to be condemned to death, whom they had hoped would redeem Israel. Jesus says: "O fools, and slow of heart to believe all that the prophets have spoken!" He expounds in all the scriptures the things concerning Himself. At Emmaus, He breaks bread with them. Their eyes are opened. They recognize Him. He vanishes from their sight.',
  ],

  sections: [
    {
      ref: 'Luke 24:1–27',
      title: 'The Resurrection and the Road to Emmaus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(5, 'And as they were afraid and bowed down their faces to the earth, they said unto them, Why seek ye the living among the dead?'),
            plain(6, 'He is not here, but is risen: remember how he spake unto you when he was yet in Galilee,'),
            plain(25, 'Then he said unto them, O fools, and slow of heart to believe all that the prophets have spoken:'),
            plain(32, 'And they said one to another, Did not our heart burn within us, while he talked with us by the way, and while he opened to us the scriptures?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke24-resurrection',
          html:
            'The women come to the sepulchre expecting death. Instead, they find absence. The stone is rolled away. The body is gone. The angel announces: "He is not here, but is risen[res:sefaria-resurrection-firstfruits]." The resurrection is sudden, uninvited, unexpected. The disciples did not believe even when He told them. Now they must believe the angel&apos;s word.',
        },
        {
          kind: 'greek',
          id: 'luke24-anistēmi',
          title: 'Anistēmi — Rise; Stand Up; Raise Up',
          script: 'ἀνίστημι',
          translit: '<strong>Anistēmi</strong> · rise; stand up; raise up; awaken',
          description:
            'Jesus anistēmi—rises, stands up, is raised. The verb can be active (He rises) or passive (He is raised). Either way, death does not have the final word. He emerges from death alive.',
        },
        {
          kind: 'commentary',
          id: 'luke24-emmaus',
          html:
            'Two disciples walk to Emmaus, sad. Jesus draws near, but they do not recognize Him. He asks what they discuss. They tell Him of Jesus, the prophet, whom they had hoped would redeem Israel. But He was delivered to be condemned and crucified. Their hope has collapsed. Jesus responds: "O fools, and slow of heart to believe all that the prophets have spoken!"',
        },
        {
          kind: 'commentary',
          id: 'luke24-scriptures-opened',
          html:
            'Jesus begins with Moses and all the prophets, expounding in all the scriptures the things concerning Himself[res:sefaria-messiah-scripture]. This is the first hermeneutic of the Resurrection. The entire scripture, rightly read, points to Christ. He was always the subject. The disciples had not understood.',
        },
        {
          kind: 'christ',
          id: 'luke24-christ-risen',
          title: 'Christ Connection — The Living Savior',
          html:
            'The risen Jesus walks with the disciples, though they do not know Him. He teaches them the scriptures. Later, He breaks bread, and they recognize Him. The risen Christ is present, teaching, breaking bread, comforting the sad.',
        },
        {
          kind: 'carry',
          html:
            'This week, let Him open the scriptures to you. Not by reading faster or checking off chapters. By reading one short passage and asking: What is He saying? How does this touch my Tuesday? Where is Jesus in this? You don&apos;t have to understand everything at once. The disciples on the road didn&apos;t recognize Him until bread was broken. Your burning heart is the sign. Trust it.',
        },
        {
          kind: 'reflection',
          id: 'luke24-emmaus-reflect',
          prompt: 'Why did the disciples not recognize the risen Jesus? What does it mean that their hearts burned when He opened the scriptures?',
        },
      ],
    },

    {
      ref: 'Luke 24:28–53',
      title: 'The Risen Lord and the Ascension',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(36, 'And as they thus spake, Jesus himself stood in the midst of them, and saith unto them, Peace be unto you.'),
            plain(39, 'Behold my hands and my feet, that it is I myself: handle me, and see; for a spirit hath not flesh and bones, as ye see me have.'),
            plain(44, 'And he said unto them, These are the words which I spake unto you, while I was yet with you, that all things must be fulfilled, which were written in the law of Moses, and in the prophets, and in the psalms, concerning me.'),
            plain(49, 'And, behold, I send the promise of my Father upon you: but tarry ye in the city of Jerusalem, until ye be endued with power from on high.'),
            plain(53, 'And were continually in the temple, praising and blessing God. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke24-appearance',
          html:
            'Jesus appears to the eleven and those gathered with them. He says: "Peace be unto you." They are terrified, thinking they see a spirit. But Jesus says: "Behold my hands and my feet, that it is I myself." He is not a phantom. He has flesh and bones. He eats fish to show He is not a spirit. The Resurrection is bodily, real, tangible.',
        },
        {
          kind: 'commentary',
          id: 'luke24-minds-opened',
          html:
            'Jesus opens their minds to understand the scriptures. "These are the words which I spake unto you, while I was yet with you, that all things must be fulfilled." The Law, the Prophets, the Psalms all testify to Him. The Christ had to suffer and rise the third day. Repentance and remission of sins must be preached in His name unto all nations, beginning at Jerusalem.',
        },
        {
          kind: 'greek',
          id: 'luke24-dynamis',
          title: 'Dynamis — Power; Strength; Might; Mighty Work',
          script: 'δύναμις',
          translit: '<strong>Dynamis</strong> · power; strength; ability; mighty work',
          description:
            'Jesus promises the disciples will be "endued with power from on high." This is the dynamis of the Holy Ghost—the power that enables witness, that transforms fear into courage, weakness into strength.',
        },
        {
          kind: 'commentary',
          id: 'luke24-ascension',
          html:
            'Jesus leads them as far as Bethany. He lifts up His hands and blesses them. While He blesses them, He is carried up into heaven[res:topos-bethany-ascension]. The disciples return to Jerusalem with great joy and are continually in the temple, praising and blessing God. The Ascension is not the end but the beginning. The disciples wait for the power promised.',
        },
        {
          kind: 'christ',
          id: 'luke24-christ-exalted',
          title: 'Christ Connection — The Exalted Lord',
          html:
            'Jesus rises from the dead, teaches the disciples, and ascends to the right hand of the Father. Yet He is not distant. He sends the Holy Ghost. He continues to lead, teach, and sustain His disciples.',
        },
        {
          kind: 'reflection',
          id: 'luke24-ascension-reflect',
          prompt: 'What does the Resurrection and Ascension mean for your faith? How does the promise of the Holy Ghost sustain the disciples?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He is not here, but is risen. Ought not Christ to have suffered these things? Peace be unto you. I send the promise of my Father upon you.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 24 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-resurrection-firstfruits',
      kind: 'study',
      source: 'Sefaria',
      label: 'Resurrection in Jewish Apocalyptic and Rabbinic Thought',
      url: 'https://www.sefaria.org/search?q=resurrection%20dead%20olam%20ha-ba%20firstfruits&tab=text',
      description: 'Sefaria texts on resurrection theology, the world to come, and the defeat of death in Jewish tradition.',
    },
    {
      id: 'sefaria-messiah-scripture',
      kind: 'study',
      source: 'Sefaria',
      label: 'Messianic Prophecy in Torah, Prophets, and Writings',
      url: 'https://www.sefaria.org/search?q=messiah%20suffering%20servant%20davidic%20prophecy&tab=text',
      description: 'Sefaria texts on messianic interpretation of Isaiah 53, Psalm 22, and other scriptural prophecies.',
    },
    {
      id: 'topos-bethany-ascension',
      kind: 'archaeology',
      source: 'ToposText',
      label: 'Bethany and the Mount of Olives in Geographical Context',
      url: 'https://topostext.org/place/924260SBeth',
      description: 'ToposText archaeological and topographical data on Bethany, its location east of Jerusalem, and the Mount of Olives.',
    },
  ],

  hasHebrew: false,
};
