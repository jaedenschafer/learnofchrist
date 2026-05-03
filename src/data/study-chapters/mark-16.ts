import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Mark 16 — The Resurrection and Commission
 *
 * After the Sabbath, the women come to the tomb with spices. The stone is rolled
 * away. A young man in white sits in the tomb: "Be not affrighted: Ye seek Jesus
 * of Nazareth, which was crucified: he is risen; he is not here." The women are
 * told to tell the disciples that Jesus goes before them into Galilee. They will
 * see Him there. The women flee in fear and amazement. Then the risen Jesus
 * appears to Mary Magdalene. To the Eleven He says: "Go ye into all the world,
 * and preach the gospel to every creature. He that believeth and is baptized
 * shall be saved." The gospel of Mark ends with the risen Christ giving the Great
 * Commission. The church is sent forth to proclaim the good news. Every creature
 * will hear it. Faith and baptism bring salvation. Death is defeated. The
 * Resurrection is proclaimed.
 */
export const MARK_16: RichChapterContent = {
  bookSlug: 'mark',
  bookName: 'Mark',
  chapter: 16,

  estimatedMinutes: { beginner: 2, intermediate: 6, deep: 8 },
  intros: [
    'Mark 16 opens on the day after the Sabbath. The women—Mary Magdalene, Mary the mother of James, and Salome—go to the tomb, asking themselves: "Who shall roll us away the stone from the door of the sepulchre?" But they find the stone already rolled away. They enter the tomb and see a young man clothed in white sitting on the right side. He says: "Be not affrighted: Ye seek Jesus of Nazareth, which was crucified: he is risen; he is not here: behold the place where they laid him." The Resurrection has occurred. Jesus is not among the dead. He is risen.',
    'The young man tells the women: "But go your way, tell his disciples and Peter that he goeth before you into Galilee: there shall ye see him, as he said unto you." But the women flee the tomb in fear and amazement. Then the risen Jesus appears to Mary Magdalene and to the disciples. To them He gives the Great Commission: "Go ye into all the world, and preach the gospel to every creature. He that believeth and is baptized shall be saved; but he that believeth not shall be damned." The gospel is universal. It is addressed to every creature. And it culminates not in individual salvation alone, but in the proclamation of the risen Christ to all the world.',
  ],

  sections: [
    /* ─── Mark 16:1–11 — The Resurrection Witnessed ───────────────────── */
    {
      ref: 'Mark 16:1–11',
      title: 'He Is Risen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(1, 'And when the sabbath was past, Mary Magdalene, and Mary the mother of James, and Salome, had bought sweet spices, that they might come and anoint him.'),
            plain(3, 'And they said among themselves, Who shall roll us away the stone from the door of the sepulchre?'),
            plain(4, 'And when they looked, they saw that the stone was rolled away: for it was very great.'),
            plain(5, 'And entering into the sepulchre, they saw a young man sitting on the right side, clothed in a long white garment; and they were affrighted.'),
            plain(6, 'And he said unto them, Be not affrighted: Ye seek Jesus of Nazareth, which was crucified: he is risen; he is not here: behold the place where they laid him.'),
            plain(9, 'Now when Jesus was risen early the first day of the week, he appeared first to Mary Magdalene, out of whom he had cast seven devils.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark16-women-spices',
          html:
            'The women come to the tomb at sunrise to anoint Jesus&apos; body with spices—a final act of honor and love. This is the work of women: to tend to the dead, to anoint, to prepare the body for rest. They do not expect resurrection. They expect to find a corpse. Yet the stone is already rolled away. What was sealed is opened. What was hidden is revealed.',
        },
        {
          kind: 'commentary',
          id: 'mark16-young-man',
          html:
            'The women are affrighted by the sight of a young man in white garment sitting in the tomb. Angels often appear as young men or men in white. He speaks reassurance: "Be not affrighted." Then he announces the fact that overturns everything: "Ye seek Jesus of Nazareth, which was crucified: he is risen; he is not here." Jesus is not among the dead. He is not in the tomb. The Resurrection has occurred.',
        },
        {
          kind: 'greek',
          id: 'mark16-anestē',
          title: 'Anestē — Rose, Is Risen',
          script: 'ἀνέστη',
          translit: '<strong>Anestē</strong> · rose; stood up; was raised; was resurrected',
          description:
            'The word "risen" (anestē) means to stand up, to be raised. It is the most basic declaration: He is not dead. He is alive. Death could not hold Him. He stands. He is raised.',
        },
        {
          kind: 'commentary',
          id: 'mark16-galilee-promise',
          html:
            'The young man tells the women to inform the disciples and Peter: Jesus will meet them in Galilee. This recalls Jesus&apos; own word at the Last Supper: "After that I am risen, I will go before you into Galilee." The Resurrection does not end the story. It redirects it. The disciples will encounter the risen Jesus. The mission will continue.',
        },
        {
          kind: 'commentary',
          id: 'mark16-mary-magdalene',
          html:
            'The risen Jesus appears first to Mary Magdalene, "out of whom he had cast seven devils."[res:bible-odyssey-resurrection-witnesses] Her healing is complete. She is the first witness to the Resurrection. The gospel privileges women as the first witnesses—those whom Jewish law might not have accepted as witnesses in a court. Yet it is to them that the Risen One first appears. God&apos;s logic overturns the world&apos;s.',
        },
        {
          kind: 'christ',
          id: 'mark16-christ-risen',
          title: 'Christ Connection — Victory Over Death',
          html:
            'The Resurrection vindicates everything Jesus taught and did. He is the Son of God, the King of Kings. Death could not contain Him. The grave could not hold Him. The Resurrection is not a return to earthly life but the entrance into glorified, eternal life. It is the promise to all who believe.',
        },
        {
          kind: 'carry',
          html:
            'The Resurrection is not the end of a tragic story but the beginning of a triumphant one. The women who came to anoint a corpse encounter the living Lord. Their fear is transformed into joy. They become witnesses and proclaimers.',
        },
        {
          kind: 'reflection',
          id: 'mark16-resurrection-faith',
          prompt: 'What would it mean for you to truly believe that Jesus is risen? How would that transform your fear into courage and your despair into hope?',
        },
      ],
    },

    /* ─── Mark 16:12–20 — The Great Commission ────────────────────────── */
    {
      ref: 'Mark 16:12–20',
      title: 'Go and Proclaim',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(14, 'Afterward he appeared unto the eleven as they sat at meat; and upbraided them with their unbelief and hardness of heart, because they believed not them which had seen him after he was risen.'),
            plain(15, 'And he said unto them, Go ye into all the world, and preach the gospel to every creature.'),
            plain(16, 'He that believeth and is baptized shall be saved; but he that believeth not shall be damned.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark-16-78mid-1',
          html:
            'Mark moves quickly. The next verses press from one scene to the next without pause; the gospel is in a hurry.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(17, 'And these signs shall follow them that believe; In my name shall they cast out devils; they shall speak with new tongues;'),
            plain(18, 'They shall take up serpents; and if they drink any deadly thing, it shall not hurt them; they shall lay hands on the sick, and they shall recover.'),
            plain(19, 'So then after the Lord had spoken unto them, he was received up into heaven, and sat on the right hand of God.'),
            plain(20, 'And they went forth, and preached every where, the Lord working with them, and confirming the word with signs following. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark16-eleven-unbelief',
          html:
            'Jesus appears to the Eleven as they sit at meat. He "upbraided them with their unbelief and hardness of heart, because they believed not them which had seen him after he was risen." The disciples are slow to believe. Yet Jesus does not abandon them. Instead, He gives them a mission. The Risen One does not leave them orphaned. He sends them forth.',
        },
        {
          kind: 'commentary',
          id: 'mark16-great-commission',
          html:
            'Jesus gives the Great Commission: "Go ye into all the world, and preach the gospel to every creature."[res:intertextual-great-commission] This is universal. Not just to Jews, not just to the nearby, but to every creature in the whole world. The gospel is not a local affair. It is cosmic in scope. The Risen Christ intends for His message to reach all humanity.',
        },
        {
          kind: 'greek',
          id: 'mark16-panta-ta-ethne',
          title: 'Panta - All Things, All Creatures',
          script: 'πάντα',
          translit: '<strong>Panta</strong> · all things; everything; universal scope',
          description:
            'The universality of the mission cannot be overstated. Every creature. Every nation. The gospel is not limited by geography, culture, language, or ethnicity. Christ&apos;s redemption is offered to all.',
        },
        {
          kind: 'commentary',
          id: 'mark16-believe-baptize-saved',
          html:
            'The proclamation is simple: "He that believeth and is baptized shall be saved; but he that believeth not shall be damned." Faith is the necessary condition. Baptism is the outward sign and seal of that faith. Those who believe are saved. Those who reject the proclamation face damnation. The stakes are ultimate.',
        },
        {
          kind: 'commentary',
          id: 'mark16-signs-follow',
          html:
            'Signs follow those who believe: casting out demons, speaking new tongues, taking up serpents, drinking poison unharmed, healing the sick. These signs authenticate the message. They demonstrate that the kingdom of God has truly arrived in power. The disciples&apos; preaching is confirmed by these mighty deeds.',
        },
        {
          kind: 'commentary',
          id: 'mark16-ascension',
          html:
            'After speaking these words, Jesus is received up into heaven and sits on the right hand of God.[res:sefaria-exaltation-psalms] The incarnation ends. The exaltation begins. The risen and ascended Christ is now seated at God&apos;s right hand, the position of power and authority. From there He continues to rule and to work through His church.',
        },
        {
          kind: 'commentary',
          id: 'mark16-working-with',
          html:
            'The final word: "And they went forth, and preached every where, the Lord working with them, and confirming the word with signs following." The disciples obey. They preach. And the risen Lord works with them, confirming their word with signs. The mission is not the disciples&apos; alone. It is the risen Christ&apos;s mission, executed through the church He sends forth.',
        },
        {
          kind: 'christ',
          id: 'mark16-christ-king',
          title: 'Christ Connection — The Risen and Exalted King',
          html:
            'The gospel of Mark ends with the risen, exalted Christ seated at the right hand of God, ruling all things, sending His disciples into all the world to proclaim His salvation. He is not merely a teacher or a moral exemplar. He is the cosmic Lord, the King of Kings, whose rule extends to every creature and every nation.',
        },
        {
          kind: 'carry',
          html:
            'The Great Commission is addressed not only to the Eleven but to all disciples of all ages. Each reader of Mark is called to participate in this mission. The risen Christ sends you forth to proclaim the gospel to all creatures. He promises to work with you and confirm your word with signs.',
        },
        {
          kind: 'reflection',
          id: 'mark16-commission-calling',
          prompt: 'How do you understand the Great Commission in your own life? Whom are you called to proclaim the gospel to? What signs of God&apos;s work do you witness?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He is risen; he is not here. Go ye into all the world, and preach the gospel to every creature. He that believeth and is baptized shall be saved.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Mark 16 · Study Guide',
  },

  resources: [
    {
      id: 'bible-odyssey-resurrection-witnesses',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Resurrection Witnesses & Women',
      url: 'https://www.bibleodyssey.org/dictionary/resurrection/',
      description: 'Open-access entry on the biblical accounts of the Resurrection and the privileged role of women as the first witnesses.',
    },
    {
      id: 'intertextual-great-commission',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Great Commission & All Nations',
      url: 'https://intertextual.bible/text/genesis-12/mark-16.15',
      description: 'Intertextual links showing how Jesus&apos; universal commission fulfills the promise to Abraham that all nations would be blessed.',
    },
    {
      id: 'sefaria-exaltation-psalms',
      kind: 'study',
      source: 'Sefaria',
      label: 'Right Hand of God (Psalm 110)',
      url: 'https://www.sefaria.org/Psalms.110.1?lang=bi',
      description: 'Psalm declaring the exaltation of the Messiah to sit at God&apos;s right hand, fulfilled in the Ascension and ongoing reign of Christ.',
    },
  ],

  hasHebrew: false,
};
