import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Revelation 22 — The Final Chapter of the Bible.
 *
 * The curse of Eden is undone. The river of water of life, the tree whose leaves heal the nations,
 * the throne of God and of the Lamb, the redeemed seeing His face. Three times: "Behold, I come quickly."
 * The Spirit and the Bride say, "Come." The Bible closes not with doctrine but with longing:
 * "Even so, come, Lord Jesus. The grace of our Lord Jesus Christ be with you all. Amen."
 */
export const REVELATION_22: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 22,

  estimatedMinutes: { beginner: 9, intermediate: 14, deep: 20 },
  intros: [
    'You have read 1,189 chapters to reach this one. The Bible opened in a garden with a river and a tree of life. Humanity was barred from both. Now, in the final chapter, both are restored — and enlarged. The river flows clear as crystal from the throne of God and of the Lamb. The tree bears fruit every month, its leaves for the healing of the nations. The curse is gone. The redeemed see His face.',
    'Three times in this final chapter Christ says the same words: "Behold, I come quickly." The Spirit and the Bride answer with the same prayer: "Come." The Bible does not end with systematic theology or heavenly real estate. It ends with the oldest prayer of the church, repeated across twenty centuries: Even so, come, Lord Jesus. Come.',
  ],

  sections: [
    /* ─── Revelation 22:1–2 · The River and the Tree ────────────────────── */
    {
      ref: 'Revelation 22:1–2',
      title: 'The River and the Tree',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(1,
              t('And '),
              hp('he shewed me a pure river of water of life', 'rev22-potamos'),
              t(', clear as crystal, proceeding out of '),
              hp('the throne of God and of the Lamb', 'rev22-christ-tree'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev22-river-intro',
          html:
            'You are reading the last page of Scripture. The first page opened in Genesis 2 with a garden, a river, and a tree of life. Adam and Eve lost access to both when they fell. For 1,188 chapters the redeemed have longed for them. Now, Revelation 22 announces what Christ has accomplished: the river flows again. The tree stands. And this time it will not be guarded by cherubim. It will be open to all who drink.',
        },

        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(2,
              t('In the midst of the street of it, and on either side of the river, was there '),
              hp('the tree of life', 'rev22-xulon-zoes'),
              t(', which bare '),
              hg('twelve manner of fruits', 'rev22-tree-both-sides'),
              t(', and yielded her fruit every month: and '),
              hg('the leaves of the tree were for the healing of the nations', 'rev22-tree-both-sides'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev22-tree-both-sides',
          html:
            'The tree of life grows on both sides of the river — or perhaps it is one tree whose roots drink from the water and whose branches spread across the street. Either way, the image is abundance without scarcity. Every person who enters the city has access. There is no gate-keeper, no serpent, no fear of losing it again. The fruit never fails. The leaves never cease their healing work.',
        },
        {
          kind: 'greek',
          id: 'rev22-potamos',
          title: 'Potamos — River',
          script: 'ποταμός',
          translit: '<strong>potamos</strong> · a river, a flowing stream',
          description:
            'In Psalm 46:4 God\'s river gladdens the city of God. In John 7:38 rivers of living water flow from the believer\'s innermost being. Here in Revelation the river originates in the throne itself — the source of all life, flowing out for the healing and delight of all the redeemed.',
        },
        {
          kind: 'greek',
          id: 'rev22-xulon-zoes',
          title: 'Xulon Zōēs — Tree of Life',
          script: 'ξύλον ζωῆς',
          translit: '<strong>xulon zōēs</strong> · the tree (or wood) of life',
          description:
            'The same Greek phrase appears in Revelation 2:7 (the promise to the overcomer), in Proverbs (tree of life as the fruit of righteousness), and here in 22:2 and 22:14. It is the prize at the end of Scripture — accessible at last.',
        },
        {
          kind: 'christ',
          id: 'rev22-christ-tree',
          title: 'Christ Connection — The Tree and the Cross',
          html:
            'Genesis 3 shows the tree of life hidden, forbidden, guarded. Revelation 22 shows it restored. But what happened in between? Christ. Paul writes: "As by one man\'s disobedience many were made sinners, so by the obedience of one shall many be made righteous" (Rom. 5:19). The tree of life that was lost through disobedience in a garden is regained through obedience on a tree — the cross. Every fruit on this tree, every leaf of healing, is the fruit of His finished work.',
        },
        {
          kind: 'carry',
          html:
            'You have a thousand needs right now — healing for something broken in you, fruit you want to bear, restoration you cannot produce on your own. Look at Revelation 22. The tree yields its fruit every month. The leaves are for your healing. Not someday, not someplace else, but in the city you are entering now through Him. He did not restore the tree to withhold it. Every leaf, every fruit — it is for you.',
        },
        {
          kind: 'reflection',
          id: 'rev22-ref-tree',
          prompt: 'What healing do you need most? What fruit would you like to bear? Speak it as a prayer to the One who has made the tree of life open to you.',
        },
      ],
    },

    /* ─── Revelation 22:3 · No More Curse ──────────────────────────────── */
    {
      ref: 'Revelation 22:3',
      title: 'No More Curse',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(3,
              t('And '),
              hg('there shall be no more curse', 'rev22-katara'),
              t(': but the '),
              hp('throne of God and of the Lamb', 'rev22-christ-curse-bearer'),
              t(' shall be in it; and his servants shall serve him:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev22-curse-catalog',
          html:
            'In Genesis 3, after Adam and Eve ate the forbidden fruit, God pronounced a catalog of curses. The ground would yield thorns and thistles. Labor would become toilsome. Bearing children would bring pain. Relationships would fracture. The body would return to dust. For six thousand years that curse has pressed on every human life — every act of work that exhausts, every grief that breaks us, every loss, every death. Revelation 22:3 announces the end of all of it. The curse is not modified or lightened. It is gone.',
        },
        {
          kind: 'greek',
          id: 'rev22-katara',
          title: 'Katara — Curse',
          script: 'κατάρα',
          translit: '<strong>katara</strong> · a curse, a condemnation',
          description:
            'Paul uses this exact word in Galatians 3:13: "Christ hath redeemed us from the curse of the law, being made a curse for us." The same curse that fell on Adam falls on Jesus at the cross. And when Jesus rose, the curse rose no more. It stays dead.',
        },
        {
          kind: 'christ',
          id: 'rev22-christ-curse-bearer',
          title: 'Christ Connection — He Became the Curse',
          html:
            'Galatians 3:13 spells it out: Christ "was made a curse for us." He did not merely forgive the curse — He took it. Every thorn that should have been yours fell on His brow. Every sweat of toilsome labor He knew in Gethsemane and on Golgotha. Every pain that was yours to bear became His. And when He rose, the curse could not follow Him. Revelation 22:3 is the announcement that what He accomplished is now the reality of the redeemed. The throne of God and of the Lamb is in the city — and wherever His throne is, the curse is not.',
        },
        {
          kind: 'carry',
          html:
            'Your labor will not be exhausting forever. Your losses will not crush you forever. Your pain will not define you forever. The curse has an expiration date — and it is written in heaven. Every broken thing in your life is already being redeemed. The throne of God and of the Lamb has set a date for its end.',
        },
        {
          kind: 'reflection',
          id: 'rev22-ref-curse',
          prompt: 'What curse are you bearing right now that the cross has already broken? Name it. Claim the freedom.',
        },
      ],
    },

    /* ─── Revelation 22:4–5 · Seeing His Face ───────────────────────────── */
    {
      ref: 'Revelation 22:4–5',
      title: 'They Shall See His Face',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(4,
              t('And '),
              hp('they shall see his face', 'rev22-prosopon'),
              t('; and '),
              hg('his name shall be in their foreheads', 'rev22-no-more-hiding'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev22-no-more-hiding',
          html:
            'In Exodus 33:20 Moses begged to see God\'s face. God answered: "Thou canst not see my face: for there shall no man see me, and live." It was not cruelty. It was truth. The unshielded presence of infinite holiness is more than a mortal frame can endure. But now, at the end of Scripture, the redeemed enter the presence and they live. They do not merely live — they see Him. Not His back, not a reflection, not a representation. His face. The longing of every believer across every age is fulfilled in a single moment: they see Him.',
        },

        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(5,
              t('And there shall be no night there; and '),
              hg('they need no candle, neither light of the sun', 'rev22-perpetual-light'),
              t('; for the '),
              hp('Lord God giveth them light', 'rev22-christ-face'),
              t(': and they shall reign for ever and ever.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev22-perpetual-light',
          html:
            'Night ends. Darkness ends. The lanterns and lamps that mortals light to hold back the dark are not needed anymore. Even the sun, that has lit the earth since day four of creation, will not be needed. "For the Lamb is the light thereof" (Rev. 21:23). The source of all light stands present, and His light is enough. It always was. It always will be.',
        },
        {
          kind: 'christ',
          id: 'rev22-christ-face',
          title: 'Christ Connection — The Face of God',
          html:
            '"No man hath seen God at any time; the only begotten Son, which is in the bosom of the Father, he hath declared him" (John 1:18). Jesus, in His incarnation, was God\'s face made visible. But the incarnation was temporary — thirty-three years, and then the ascension. Revelation 22:4 promises something permanent: a face you can see forever. Not Jesus\' temporary humanity, but His everlasting presence in glorified flesh. The One you see in Revelation 22 is the same Jesus who walked with the disciples, who died and rose, and who will never leave you again.',
        },
        {
          kind: 'greek',
          id: 'rev22-prosopon',
          title: 'Prosopon — Face',
          script: 'πρόσωπον',
          translit: '<strong>prosopon</strong> · face, presence, person',
          description:
            'The same word Paul uses in 1 Corinthians 13:12: "Now we see through a glass, darkly; but then face to face." Every indirect encounter with God in Scripture points toward this moment. The veil is torn. The obscurity is gone. Face to face.',
        },
        {
          kind: 'carry',
          html:
            'You have never seen the face of the One who made you, died for you, and loves you past every limit you can imagine. That is not forever. The day is coming when you will. When you do, you will finally understand that every moment of faith, every step of trust, every time you believed Him without seeing — all of it was walking toward that face. All of it was worth it.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'rev22-ref-face',
          prompt: 'Imagine seeing His face. Not metaphorically — actually seeing Him. What changes about today?',
        },
      ],
    },

    /* ─── Revelation 22:6–7 · Behold, I Come Quickly ──────────────────── */
    {
      ref: 'Revelation 22:6–7',
      title: 'Behold, I Come Quickly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(6,
              t('And he said unto me, These sayings are faithful and true: and the Lord God of the holy prophets sent his angel to shew unto his servants the things which must shortly be done.')
            ),
            verse(7,
              t('Behold, '),
              hp('I come quickly', 'rev22-faithful-true'),
              t(': blessed is he that keepeth the sayings of the prophecy of this book.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev22-faithful-true',
          html:
            '"These sayings are faithful and true." Not metaphor, not vision-speak, not a symbol to be decoded into some other meaning. The things shown to John are real. They are coming. The patience of the church — 1,900 years since Revelation was written, and still waiting — does not make the promise less true. Quickly, in biblical terms, means it is the next great event on God\'s calendar. When it happens, it will happen suddenly.',
        },
        {
          kind: 'carry',
          html:
            'You live in the "meanwhile." The promise is sure; the date is not revealed. Some mornings you wake up and the world looks normal and you wonder if He is really coming. That doubt is not a sin — it is part of the longing. But the promise stands: He is coming. The wait will not be forever. And the waiting itself is a gift — time to learn His character, time to love each other, time to become like Him.',
        },
        {
          kind: 'reflection',
          id: 'rev22-ref-quickly',
          prompt: 'What would change about your priorities this week if you actually believed He is coming quickly?',
        },
      ],
    },

    /* ─── Revelation 22:12–13 · Alpha and Omega ──────────────────────── */
    {
      ref: 'Revelation 22:12–13',
      title: 'Alpha and Omega',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(12,
              t('And, behold, '),
              hp('I come quickly', 'rev22-reward-work'),
              t('; and my reward is with me, to give every man according as his work shall be.')
            ),
            verse(13,
              t('I am '),
              hy('Alpha and Omega', 'rev22-arche-telos'),
              t(', the beginning and the end, the first and the last.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev22-reward-work',
          html:
            'Christ comes with His reward — not to punish, but to give. Every work done in His name, every act of faithfulness, every prayer, every act of mercy, every time you chose Him over lesser things — it is seen and remembered. Not because you performed well enough to earn heaven (you cannot), but because what you did mattered to the One who made you. Your work is not erased. It is remembered. It is crowned.',
        },
        {
          kind: 'greek',
          id: 'rev22-arche-telos',
          title: 'Arche and Telos — Beginning and End',
          script: 'ἀρχή · τέλος',
          translit: '<strong>arche</strong> (beginning) · <strong>telos</strong> (end, completion)',
          description:
            'Christ frames Himself with these two words. He is not one point among many in the timeline. He is the entire story. In Colossians 1:16–17 Paul says all things were created by Him and for Him, and by Him all things consist (are held together). He is the Alpha and the Omega of your life too.',
        },
        {
          kind: 'christ',
          id: 'rev22-christ-beginning-end',
          title: 'Christ Connection — From Beginning to End',
          html:
            'In Revelation 1:8 Christ first calls Himself the Alpha and Omega. Fifty-five chapters of judgment, triumph, dragon-fighting, and cosmic restoration later, He says it again. The first and the last. Not one god at the beginning and another at the end. One Person. One story. Everything that has unfolded across Revelation happened between His two arms. And if that is true in the book, it is true in your life. Whatever you are walking through right now — the end is already written, and He holds it.',
        },
        {
          kind: 'carry',
          html:
            'You are somewhere in the middle of a story written by Someone who knows the beginning and the end. You cannot see the end yet. But the One who does is not anxious. He knows how it finishes. And He invites you to trust the middle because you know His character. That is not blind faith. That is faith with eyes open.',
        },
        {
          kind: 'reflection',
          id: 'rev22-ref-alpha',
          prompt: 'What area of your life feels unfinished or uncertain? What would it mean to trust that Christ, who sees the end, has already gone before you?',
        },
      ],
    },

    /* ─── Revelation 22:16–17 · Root and Offspring; Come ────────────────── */
    {
      ref: 'Revelation 22:16–17',
      title: 'The Bright and Morning Star; Come',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(16,
              t('I Jesus have sent mine angel to testify unto you these things in the churches. '),
              hp('I am the root and the offspring of David, and the bright and morning star', 'rev22-aster-proinios'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev22-root-offspring',
          html:
            'Christ is the root of David — meaning He existed before David, He caused David to be, He is the source. But He is also the offspring of David — meaning He descended from David, He fulfilled the promise made to David that his throne would be established forever. He is before and after, source and fruit, eternal and incarnate. The same paradox holds for you: He is the source of your faith, but also its fulfillment.',
        },

        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(17,
              t('And the Spirit and the bride say, '),
              hp('Come', 'rev22-erchou'),
              t('. And let him that heareth say, '),
              hp('Come', 'rev22-erchou'),
              t('. And let him that is athirst come. And '),
              hg('whosoever will, let him take the water of life freely', 'rev22-come-echo'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev22-come-echo',
          html:
            'The Bible closes with an echo. Christ says to His people: "I come quickly." His people answer Him: "Come." It is not a demand. It is a prayer. The most fragile, most honest prayer the church has ever prayed, across every century: Come, Lord Jesus. Come. And threaded through it is the most open invitation ever offered: "Whosoever will." Not the elite, not the worthy, not those who have cleaned up their act. Whoever is thirsty. Whoever wills. The water of life is free.',
        },
        {
          kind: 'greek',
          id: 'rev22-aster-proinios',
          title: 'Aster Prōinios — Morning Star',
          script: 'ἀστὴρ πρωϊνός',
          translit: '<strong>aster prōinios</strong> · the morning star, the first light of the new day',
          description:
            'In 2 Peter 1:19 this phrase refers to the word of prophecy, a lamp shining in a dark place until the day dawns. Jesus calling Himself the morning star means: I am the first light of the new age. I am the herald of your resurrection. I am the promise that night is ending.',
        },
        {
          kind: 'christ',
          id: 'rev22-christ-morning-star',
          title: 'Christ Connection — The Hope of Morning',
          html:
            'Malachi 4:2, the last promise of the Old Testament, calls the coming Messiah "the Sun of righteousness… with healing in his wings." Five hundred years of silence follow. Then John the Baptist appears and points to Jesus: "Behold the Lamb of God." Jesus is that Sun. But in the darkness of this age, He comes first as the morning star — a promise that dawn is coming. Those who see the morning star have already begun to see the edge of light. You are living in the starlight. The sunrise is not far.',
        },
        {
          kind: 'greek',
          id: 'rev22-erchou',
          title: 'Erchou — Come',
          script: 'ἔρχου',
          translit: '<strong>erchou</strong> · an imperative; come, arrive',
          description:
            'The same word is spoken twice in Revelation 22:17 — once by Christ to His people ("I come quickly") and once by His people to Him ("Come, Lord Jesus"). The Bible ends with the Bridegroom and the Bride saying the same word to each other, from opposite sides of the same longing.',
        },
        {
          kind: 'carry',
          html:
            'You are thirsty. You do not have to earn the water of life. You do not have to become worthy of it. It is free. The only condition is thirst and willingness. If you have ever felt an ache for something more than what the world offers, that thirst is the Holy Spirit\'s work in you. Come. Drink. The water is not poisoned. The offer is real.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'rev22-ref-come',
          prompt: 'The Spirit and the Bride say, "Come." What is keeping you from answering "Amen. Even so, come, Lord Jesus"?',
        },
      ],
    },

    /* ─── Revelation 22:18–19 · Warning ────────────────────────────────── */
    {
      ref: 'Revelation 22:18–19',
      title: 'The Warning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(18,
              t('For I testify unto every man that heareth the words of the prophecy of this book, If any man shall '),
              hy('add unto these things', 'rev22-warning-text'),
              t(', God shall add unto him the plagues that are written in this book:')
            ),
            verse(19,
              t('And if any man shall '),
              hy('take away from the words', 'rev22-warning-text'),
              t(' of the book of this prophecy, God shall take away his part out of the book of life, and out of the holy city, and from the things which are written in this book.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev22-warning-text',
          html:
            'This warning has sometimes been interpreted to forbid any interpretation or teaching of Revelation. But that is not what it means. It is a warning against textual tampering — adding new "revelations" or deleting inconvenient passages. The early church faced heretics who tried to edit Scripture to match their theology. This warning guards the text itself. The words matter. They are not suggestions. They are not subject to our preferences. They are the very words God gave.',
        },
        {
          kind: 'carry',
          html:
            'You have reached the end of Scripture. Everything you have read is true. You cannot improve it. You cannot select which parts to believe and which to skip. But you can live it. The warning is not harsh — it is loving. It is the last guardrail before you step back into a world that will tell you a thousand things that contradict what you have just read. Hold fast to the words. They are faithful and true.',
        },
      ],
    },

    /* ─── Revelation 22:20–21 · The Final Prayer and Grace ───────────── */
    {
      ref: 'Revelation 22:20–21',
      title: 'Even So, Come, Lord Jesus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(20,
              hp('He which testifieth these things saith, Surely I come quickly', 'rev22-sure-and-amen'),
              t('. '),
              hp('Amen. Even so, come, Lord Jesus', 'rev22-christ-final'),
              t('.')
            ),
            verse(21,
              t('The grace of our Lord Jesus Christ be with you all. Amen.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev22-sure-and-amen',
          html:
            'A third time: "Surely I come quickly." This is not a question. It is not a hope. It is the statement of fact from the One who sees all things. And the response of the redeemed is not debate or doubt — it is "Amen. Even so, come." The Bible does not close with a final sermon or a doctrinal summary. It closes with a prayer. It closes with longing.',
        },
        {
          kind: 'christ',
          id: 'rev22-christ-final',
          title: 'Christ Connection — Grace to the Very End',
          html:
            'The final verse of the Bible is a benediction: "The grace of our Lord Jesus Christ be with you all. Amen." Not judgment. Not a final list of rules you failed to keep. Grace. The unearned favor of God, the kindness He gives that you did not deserve. That is how the book ends. With grace. It is how it began too — "In the beginning God created" — not from obligation or necessity, but from generosity. The whole story is bracketed by grace. Your life, from beginning to end, is bracketed by the same. His grace is with you. Now. And when He comes, His grace will still be with you. Amen.',
        },
        {
          kind: 'greek',
          id: 'rev22-taxy',
          title: 'Taxy — Grace',
          script: 'χάρις',
          translit: '<strong>taxy</strong> (or <strong>charis</strong>) · grace, favor, kindness',
          description:
            'The New Testament is saturated with this word. It is the answer to human need — not earned, not deserved, simply given. The final word of Scripture places this grace in your hands. His grace is not conditional on your performance. It is yours. That is how the Book closes.',
        },
        {
          kind: 'carry',
          html:
            'You have walked through 1,189 chapters. You have read stories of faith and failure, judgment and mercy, darkness and light. All of it points to the grace of one Person — Jesus. And that grace is not reserved for the end. It is for right now. Every morning you wake. Every mistake you make. Every moment you feel far from Him. The grace of our Lord Jesus Christ is with you all. Not just the worthy. All.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'rev22-ref-final',
          prompt:
            'You have now read every chapter of Scripture. What single thing has God said to you most clearly in this entire journey? What will you carry into today, and into the day of His coming?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Revelation 22 — The Final Chapter',
    quote:
      'The Spirit and the bride say, Come. And let him that heareth say, Come. And let him that is athirst come. And whosoever will, let him take the water of life freely.',
    snippet: 'The final chapter of Scripture — the restoration of Eden, the call to come, the promise of grace. Completing 1,189 chapters of Bible study at learnofchrist.com.',
    ref: 'Revelation 22 · Study Guide',
  },
};
