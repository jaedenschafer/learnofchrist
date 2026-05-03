import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Hebrews 11 — The Hall of Faith.
 *
 * "Now faith is the substance of things hoped for, the evidence of things not seen."
 * Abel, Enoch, Noah, Abraham, Isaac, Jacob, Joseph, Moses, Rahab, and the unnamed
 * multitude. Each lived and died in faith, persuaded of the promises from afar.
 * They did not receive them in their lifetime. But they confessed themselves pilgrims
 * and strangers on the earth, seeking a better country. God is not ashamed to be
 * called their God, for He has prepared for them a city.
 *
 * This chapter is a meditation on the invisible made real, the future made present,
 * the promise believed before it is seen. It begins with a definition and ends with
 * a declaration: "These all received not the promise, God having provided some better
 * thing for us, that they without us should not be made perfect." We are perfected
 * together—with Abel, with Enoch, with Noah, with all the faithful across time,
 * in communion at the throne of God.
 */
export const HEBREWS_11: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 11,

  intros: [
    'Hebrews 11 is the hall of faith. Abel, Enoch, Noah, Abraham, Isaac, Jacob, Joseph, Moses, Rahab, Samson, David—and many unnamed—all lived and died in faith, not having received the promises, but having seen them afar off. They were persuaded of them and embraced them. They confessed themselves pilgrims and strangers on the earth, seeking a better country. Their faith is not blind. It is grounded in reality, even when that reality is invisible.',
    'The passage defines faith: "Now faith is the substance of things hoped for, the evidence of things not seen." Not wishful thinking. Not denial of reality. But the conviction that God\'s word is as solid as what you can touch. And it opens with a simple truth: faith pleases God. Everything in this chapter flows from that.',
  ],

  opener: {
    matchTitle: /faith|witness|cloud/i,
    matchArtist: /tissot|church|religious/i,
    caption: 'The Hall of Faith',
  },

  bottomShare: {
    label: 'Share Hebrews 11',
    quote:
      'Now faith is the substance of things hoped for, the evidence of things not seen. These all died in faith, not having received the promises, but having seen them afar off, and were persuaded of them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 11 · Study Guide',
  },

  sections: [
    /* ─── Hebrews 11:1–3 — Faith Defined ──────────────────────────────── */
    {
      ref: 'Hebrews 11:1–3',
      title: 'Faith Is the Substance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 1,
              spans: [
                t('Now '),
                hp('faith is the substance of things hoped for', 'c-hypostasis'),
                t(', the '),
                hp('evidence of things not seen', 'c-elenchos'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hypostasis',
          html:
            'Faith is not a feeling you muster. It is <em>substance</em>—the thing that stands under, the foundation. Hope is what you long for; faith is what makes that longing real. Faith is the scaffolding upon which invisible promises become as solid as ground beneath your feet.',
        },
        {
          kind: 'greek',
          id: 'heb11-hypostasis',
          title: 'Hypostasis — Substance, Essential Nature',
          script: 'ὑπόστασις',
          translit: '<strong>hypostasis</strong> · what stands under; substance; essence; confidence',
          description:
            'Hypostasis is the reality beneath. It is used elsewhere for the radiance and substantial being of God (Heb. 1:3). Your faith is a real, solid thing—not a phantom, not a wish, but an actual foundation you can build a life on.',
        },
        {
          kind: 'commentary',
          id: 'c-elenchos',
          html:
            'And faith is <em>evidence</em>—not emotional certainty, but the kind of proof you can point to. The invisible becomes visible through faith. You believe what you cannot see, and that belief becomes the evidence itself.',
        },
        {
          kind: 'greek',
          id: 'heb11-elenchos',
          title: 'Elenchos — Evidence, Proof, Conviction',
          script: 'ἔλεγχος',
          translit: '<strong>elenchos</strong> · conviction of sin; proof; evidence that convinces',
          description:
            'Elenchos is used in law for evidence brought before a judge. It is the proof that compels a verdict. Your faith is the evidence that presents God\'s invisible promises to the bench of your own heart and convinces you they are real.',
        },

        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 2,
              spans: [
                t('For by it the elders '),
                hg('obtained a good report', 'c-martyreo'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-martyreo',
          html:
            'The "elders"—the witnesses, the ancestors, the faithful across all history. They obtained a good report not through achievement, not through power, not through success in the world\'s eyes. Through faith. God watched them believe what they could not see, and He testified: <em>This pleases me. This is good.</em>',
        },
        {
          kind: 'greek',
          id: 'heb11-martyreo',
          title: 'Martyreō — Witnessed, Testified, Obtained a Good Report',
          script: 'μαρτυρέω',
          translit: '<strong>martyreō</strong> · to witness, to testify, to bear witness',
          description:
            'God Himself is the witness. When the text says they "obtained a good report," it means God testified of them, witnessed their faith, affirmed them. To be witnessed by God—to have His testimony—is the deepest honor.',
        },

        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 3,
              spans: [
                t('Through faith we understand that the worlds were '),
                hy('framed by the word of God', 'c-frame-katartizo'),
                t(', so that things which are seen were not made of things which do appear.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-frame-katartizo',
          html:
            'Faith is not anti-rational. It does not deny what we can see. But faith sees <em>through</em> what we can see. The visible world was framed by an invisible Word. Matter itself came from nothing visible. Our very eyes are proof of an invisible reality they cannot explain. Faith understands this. It reads the universe as a text written by an invisible Author.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world designed to be understood through faith. The sun rose without your permission. Your heartbeat continues without your effort. The people you love exist independent of your belief in them. The universe runs on patterns you did not invent. All of it speaks of an invisible ordering power, an invisible Word holding things together. Faith simply listens to what the world has been saying all along.',
        },
        {
          kind: 'christ',
          id: 'heb11-christ-word',
          title: 'Christ Connection — The Word That Frames All Things',
          html:
            'John opens his Gospel by placing Jesus inside this truth: "In the beginning was the Word, and the Word was with God, and the Word was God... All things were made by him" (John 1:1, 3). Every time Hebrews speaks of God\'s word framing the worlds, it is speaking of Jesus. He is the invisible Word that holds all visible things together. To have faith in God is to have faith in Christ.',
        },
        {
          kind: 'reflection',
          id: 'heb11-substance',
          prompt: 'Where in your life have you experienced faith—the substance of things hoped for, the evidence of things unseen? What became real because you believed it first?',
        },
      ],
    },

    /* ─── Hebrews 11:4 — Abel & the Better Sacrifice ──────────────────── */
    {
      ref: 'Hebrews 11:4',
      title: 'Abel: The More Excellent Sacrifice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 4,
              spans: [
                t('By faith '),
                hg('Abel offered unto God a more excellent sacrifice than Cain', 'c-abel-firstborn'),
                t('; by which he obtained witness that he was righteous, God testifying of his gifts: and by it he being dead yet speaketh.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abel-firstborn',
          html:
            'Two brothers offer. The same God receives both gifts—yet accepts one and refuses the other. The text in Genesis does not explicitly say why. But Hebrews tells us: it is faith. Abel\'s sacrifice was <em>more excellent</em> because it came from a heart that believed God\'s promise, that pointed forward to the Lamb God would provide. Cain\'s came from a heart turned inward, toward his own work, his own offering. Faith is the difference between a gift that echoes eternity and a gift that ends with itself.',
        },
        {
          kind: 'carry',
          html:
            'Your gifts to God matter far less than the faith behind them. A quiet word spoken in faith carries more weight than a public work done in pride. A dollar given without fanfare, in faith that God sees and rewards, is richer than a thousand given to be seen. Abel\'s faith—the belief that he was offering to a real God who watches and rewards—made his sacrifice eternal. By it, he, being dead, yet speaks.',
        },
        {
          kind: 'christ',
          id: 'heb11-christ-abel',
          title: 'Christ Connection — The Lamb Received',
          html:
            'Abel offers a firstborn lamb. God receives it. Through the rest of Scripture, the lamb becomes the image of the one God receives absolutely—the Lamb of God who takes away the sin of the world. What God was looking for in Abel\'s faith was the same faith in the ultimate Lamb that would finally end all offerings.',
        },
      ],
    },

    /* ─── Hebrews 11:5 — Enoch & Translation ────────────────────────── */
    {
      ref: 'Hebrews 11:5',
      title: 'Enoch: Translated, Not Tasting Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 5,
              spans: [
                t('By faith '),
                hg('Enoch was translated that he should not see death', 'c-enoch-translated'),
                t('; and was not found, because God had '),
                hp('translated him', 'c-enoch-metathesis'),
                t(': for before his translation he had this testimony, that he pleased God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-enoch-translated',
          html:
            'Enoch walked with God. Genesis tells us he "walked with God: and he was not; for God took him" (Gen. 5:24). He never died. His faith—his consistent trust in God, his daily conversation with God—was so real that God took him directly into His presence. Enoch lived as if the invisible was more solid than the visible. And the visible world released its claim on him.',
        },
        {
          kind: 'commentary',
          id: 'c-enoch-metathesis',
          html:
            'The Greek word is <em>metathesis</em>—a transposition, a change from one state to another. Enoch was taken. Not slowly fading. Not gradually withdrawn. Taken directly into God\'s presence, his whole existence transposed from the visible to the invisible realm.',
        },
        {
          kind: 'greek',
          id: 'heb11-metathesis',
          title: 'Metathesis — Transposition, Translation',
          script: 'μετάθεσις',
          translit: '<strong>metathesis</strong> · removal, transposition, a change of position or state',
          description:
            'The same word used for when Paul was "caught up to the third heaven" (2 Cor. 12:2). It means to be moved from one place to another, one state to another. Enoch\'s whole existence was transposed from the visible realm to the presence of God.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 6,
              spans: [
                t('But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a '),
                hy('rewarder of them that diligently seek him', 'c-rewarder'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rewarder',
          html:
            'This is the hinge of all faith: God is real and God is generous. He rewards those who seek Him. Not with wealth, not always with comfort, but with Himself. Enoch sought God every day, and God met him. That seeking, that daily coming, pleased God more than any external work could. And it changed everything.',
        },
        {
          kind: 'carry',
          html:
            'Do you believe God is real? And that He rewards those who seek Him? This is the foundation. Not God as a distant force or a philosophical principle. God as a presence you can approach, a voice that answers, a Rewarder who delights in those who draw near. Enoch\'s entire life was faith in these two things. And his faith made him so real that he did not disappear into death—he disappeared into God.',
        },
        {
          kind: 'christ',
          id: 'heb11-christ-enoch',
          title: 'Christ Connection — The Ascension',
          html:
            'Only two people in Scripture are taken directly to God without dying: Enoch and Elijah. Jesus did both—He died and rose, and He ascended into the presence of God. And now, through faith in Him, you are seated with Him in heavenly places (Eph. 2:6). What Enoch tasted once, you taste in Him.',
        },
      ],
    },

    /* ─── Hebrews 11:7 — Noah & the Ark ────────────────────────────── */
    {
      ref: 'Hebrews 11:7',
      title: 'Noah: Moved with Fear, Built an Ark',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 7,
              spans: [
                t('By faith '),
                hg('Noah, being warned of God of things not seen as yet', 'c-noah-warning'),
                t(', '),
                hg('moved with fear, prepared an ark', 'c-noah-fear-work'),
                t(', to the saving of his house; by the which he condemned the world, and became heir of the '),
                hy('righteousness which is by faith', 'c-noah-righteousness'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-noah-righteousness',
          html:
            'Noah\'s righteousness—his right standing before God—came not from external works, not from his building project, but from faith. He believed God\'s warning. That belief made him righteous. And in believing, he condemned the world. His faith made the world\'s unbelief visible.',
        },
        {
          kind: 'commentary',
          id: 'c-noah-warning',
          html:
            'God warned Noah of judgment to come. The world saw no sign of it. The sky was still clear. The rain had never fallen. Yet Noah heard God\'s warning and believed it. He staked his entire life and the lives of his family on the reality of a judgment he had never seen.',
        },
        {
          kind: 'commentary',
          id: 'c-noah-fear-work',
          html:
            'And his faith moved him to action. "Moved with fear" does not mean cowering in terror—it means moved with reverence, with the fear of God. That reverence produced one hundred years of work. He built an ark in a world that had never seen rain, mocked by everyone around him, preparing for a deluge he could not see. This is faith: invisible conviction producing visible action.',
        },
        {
          kind: 'carry',
          html:
            'Faith is not passive. It does not wait for certainty. It takes what God has warned of or promised, and it gets to work. What has God warned you about—what judgment, what consequence, what coming change—that you have not yet seen but are called to prepare for? What would it look like to take that warning seriously, the way Noah did, and let it reshape how you live right now?',
        },
        {
          kind: 'christ',
          id: 'heb11-christ-noah',
          title: 'Christ Connection — The Flood and Baptism',
          html:
            'Peter connects Noah\'s salvation in the flood with baptism in Christ: "Baptism doth also now save us... wherein few, that is, eight souls were saved by water" (1 Pet. 3:20–21). The flood is a picture of judgment passed over, salvation through water, a new creation waiting on the other side. Through faith in Christ, you are saved from the judgment to come.',
        },
      ],
    },

    /* ─── Hebrews 11:8–10 — Abraham Called Out ───────────────────────── */
    {
      ref: 'Hebrews 11:8–10',
      title: 'Abraham: Not Knowing Whither He Went',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 8,
              spans: [
                t('By faith '),
                hp('Abraham, when he was called to go out into a place which he should after receive for an inheritance', 'c-abraham-call'),
                t(', '),
                hg('obeyed', 'c-abraham-obedience'),
                t('; and he went out, not knowing whither he went.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abraham-call',
          html:
            'God speaks one word to Abraham: "Go." Not <em>where</em> to go—just go. The destination is hidden. But God has hidden it deliberately, because the test of faith is not whether you will go if you see the end from the beginning. The test is whether you will go <em>into the dark</em>, following only the voice of the One calling you.',
        },
        {
          kind: 'commentary',
          id: 'c-abraham-obedience',
          html:
            'And Abraham obeyed. He packed his household, left the security of Ur, left his father\'s house, and stepped into uncertainty. This is faith: the refusal to demand certainty before moving. The willingness to be directed by a voice you trust more than by a map you can see.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 9,
              spans: [
                t('By faith he sojourned in the land of promise, as in a strange country, dwelling in '),
                hy('tabernacles', 'c-abraham-strangers'),
                t(' with Isaac and Jacob, the heirs with him of the same promise:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('For he looked for a city which hath '),
                hg('foundations, whose builder and maker is God', 'c-city-builder'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-city-builder',
          html:
            'A city with foundations. Real. Solid. Built by God, not by human hands or human effort. Abraham was not just looking for a physical place. He was looking for a city that would not fall, a kingdom that cannot be shaken, a home that is eternal because God Himself is building it.',
        },
        {
          kind: 'commentary',
          id: 'c-abraham-strangers',
          html:
            'Abraham lived in tents in the land God promised. He never built a permanent home there. Why? Because he was looking for something beyond the physical land. The promise of Canaan was real, but Abraham\'s faith reached past it to the city God Himself had built—an eternal home not made with human hands.',
        },
        {
          kind: 'carry',
          html:
            'There is a difference between the promises you see and the Promise you believe. Abraham was promised a land, and he lived in it as a stranger, because his faith saw through to a city only God could build. What promise are you looking through, toward something greater? What invisible city is your faith straining to see?',
        },
        {
          kind: 'christ',
          id: 'heb11-christ-abraham',
          title: 'Christ Connection — The City with Foundations',
          html:
            'Jesus told His disciples, "My Father\'s house has many mansions... I go to prepare a place for you" (John 14:2–3). The city Abraham looked for—the one with foundations, whose builder is God—that is Christ\'s city. It is the New Jerusalem, coming down from God. Abraham saw it from afar and embraced it (verse 13). You can enter it through Him.',
        },
      ],
    },

    /* ─── Hebrews 11:11–13 — Looking for a Better Country ───────────── */
    {
      ref: 'Hebrews 11:11–13',
      title: 'Looking for a Better Country',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 11,
              spans: [
                t('Through faith also Sara herself received strength to conceive seed, and was delivered of a child when she was past age, because she '),
                hg('judged him faithful who had promised', 'c-sara-faith'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sara-faith',
          html:
            'Sarah\'s faith was the faith of a woman who looked at her own body—barren, aged, empty—and looked at God\'s promise, and said: <em>I believe He is faithful.</em> Not because her circumstances changed. Because she judged God to be true. That judgment, that decision to trust God\'s character over what she could see in the mirror, opened the way for the impossible.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 12,
              spans: [
                t('Therefore sprang there even of one, and him as good as dead, so many as the stars of the sky in multitude, and as the sand which is by the sea shore innumerable.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('These all '),
                hp('died in faith, not having received the promises', 'c-died-believing'),
                t(', but '),
                hp('having seen them afar off', 'c-seen-afar'),
                t(', and '),
                hg('were persuaded of them, and embraced them', 'c-embraced'),
                t(', and '),
                hg('confessed that they were strangers and pilgrims on the earth', 'c-strangers-pilgrims'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-died-believing',
          html:
            'Abraham died. Sarah died. Isaac died. None of them received the full inheritance they were promised. The land they were promised became the land their descendants would inherit. The blessing promised to Abraham would be fulfilled in a Messiah they would never meet. Yet they died in faith—faith that did not require them to see the completion, faith that was real and whole and sufficient even in the face of death.',
        },
        {
          kind: 'commentary',
          id: 'c-seen-afar',
          html:
            'But they saw the promises "from afar off." This is vision without possession. Faith that can look across centuries and see what God has promised, even though the watcher will not live to see it fulfilled. This is not delusion. This is the vision that comes from belonging to a God who exists outside of time.',
        },
        {
          kind: 'commentary',
          id: 'c-embraced',
          html:
            'And they were persuaded. They embraced these promises as if they were already in hand. Their faith was not weak or hesitant. It was full-bodied, wholehearted, a complete commitment to the reality of what God had said, even though their eyes had never seen it.',
        },
        {
          kind: 'commentary',
          id: 'c-strangers-pilgrims',
          html:
            'And they confessed it. They did not hide their faith or live as if they belonged to the world. They openly acknowledged: we are strangers and pilgrims here. This world is not our home. We are passing through on our way to a city God is building.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 14,
              spans: [
                t('For they that say such things declare plainly that they seek a '),
                hy('country', 'c-country-patris'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-country-patris',
          html:
            'The word for "country" is <em>patris</em>—fatherland, homeland. Not just a place, but the place that belongs to your family, that your family belongs to. Abraham was looking for his fatherland—not just Canaan, but the place where God\'s family gathers, the inheritance of the sons and daughters of God.',
        },
        {
          kind: 'carry',
          html:
            'Are you a pilgrim and a stranger on the earth? Or have you settled in, built your nest, claimed permanent residence in a world that is passing away? Faith looks through the temporary to the eternal. It says with Abraham: I am just passing through. My home is somewhere else, with Someone else, in a city only God could build.',
        },
        {
          kind: 'christ',
          id: 'heb11-christ-pilgrims',
          title: 'Christ Connection — Our Citizenship Elsewhere',
          html:
            'Paul writes, "Our conversation is in heaven; from whence also we look for the Saviour, the Lord Jesus Christ" (Phil. 3:20). You are a citizen of a country not yet visible, a kingdom ruled by Jesus. Your residence here is temporary. Your true home is in Him.',
        },
      ],
    },

    /* ─── Hebrews 11:15–16 — A Better Country ───────────────────────── */
    {
      ref: 'Hebrews 11:15–16',
      title: 'They Desire a Better Country',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 15,
              spans: [
                t('And truly, if they had been mindful of that country from whence they came out, they might have had opportunity to have returned.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('But now they desire a '),
                hg('better country, that is, an heavenly', 'c-heavenly-country'),
                t(': wherefore God is not ashamed to be called their God: for he hath prepared for them a '),
                hp('city', 'c-prepared-city'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-heavenly-country',
          html:
            'Abraham could have looked back. Ur was prosperous, secure, a known world. But he did not turn back. His heart was set on something better—not a restoration of what was, but a revelation of what God had prepared. A country that is heavenly, that belongs to God\'s kingdom, that exists in the realm of the eternal.',
        },
        {
          kind: 'commentary',
          id: 'c-prepared-city',
          html:
            'And God prepared this city. It is not accidental. Not thrown together. God has been building it, preparing it, making it ready for those who love Him. This is the intimacy of faith: God prepares a place because He wants you there.',
        },
        {
          kind: 'carry',
          html:
            'What are you homesick for? What place have you been homesick for your whole life—not a return to what was, but an arrival at what was always meant to be? That longing is the echo of faith. God put it there. He is building the place you are homesick for. He has prepared it. And He is not ashamed to be called your God—the God who is taking you there.',
        },
        {
          kind: 'reflection',
          id: 'heb11-country',
          prompt: 'What would change in how you live this week if you truly believed God has prepared a city for you—a place where you fully belong?',
        },
      ],
    },

    /* ─── Hebrews 11:17–19 — Abraham on the Altar ───────────────────── */
    {
      ref: 'Hebrews 11:17–19',
      title: 'Isaac on the Altar: Faith in Resurrection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 17,
              spans: [
                t('By faith '),
                hp('Abraham, when he was tried, offered up Isaac', 'c-abraham-offered'),
                t(': and he that had received the promises offered up his only begotten son,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Of whom it was said, That in Isaac shall thy seed be called:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Accounting that God was able to raise him up, even from the dead; '),
                hg('from whence also he received him in a figure', 'c-abraham-resurrection'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abraham-offered',
          html:
            'Abraham lifted the knife. Everything God had promised depended on Isaac. Yet Abraham was willing to let him go. Why? Because his faith was not in Isaac. His faith was in God\'s faithfulness. If God said "through Isaac will your seed be blessed," then even if Isaac died, God would have to raise him, because God cannot break His word.',
        },
        {
          kind: 'commentary',
          id: 'c-abraham-resurrection',
          html:
            'Abraham "received him in a figure"—which is to say, Isaac came back to him. The ram was caught in the thicket. Isaac descended the mountain alive. In a way, Abraham did experience his son\'s resurrection, a shadow of something greater to come. Faith that reaches to resurrection is faith at its deepest.',
        },
        {
          kind: 'carry',
          html:
            'What have you been asked to offer up to God? What is your Isaac—the thing you love most, the promise that seems to depend on having it, the future you have staked everything on? That is precisely what faith means: the willingness to lay it on the altar, trusting that God is faithful even to the point of death, even to the point of resurrection.',
        },
        {
          kind: 'christ',
          id: 'heb11-christ-isaac',
          title: 'Christ Connection — The Only Begotten Son',
          html:
            'Abraham, the text says, "offered up his only begotten son." John uses this same phrase for Jesus: "God so loved the world, that he gave his only begotten Son" (John 3:16). God did not stop His knife. The Lamb died. And three days later, He rose. Abraham\'s willingness to sacrifice Isaac was a shadow of God the Father\'s actual sacrifice of His Son. And it shows us the resurrection that followed.',
        },
      ],
    },

    /* ─── Hebrews 11:20–22 — Isaac, Jacob, Joseph ──────────────────── */
    {
      ref: 'Hebrews 11:20–22',
      title: 'By Faith They Blessed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 20,
              spans: [
                t('By faith '),
                hg('Isaac blessed Jacob and Esau', 'c-isaac-blessing'),
                t(' concerning things to come.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-isaac-blessing',
          html:
            'Isaac is old and blind. He cannot see which son stands before him. Yet his words carry the force of destiny. He speaks things into existence—not by his own power, but by faith in God\'s power. When we bless, we are participating in God\'s power to speak reality into being.',
        },

        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 21,
              spans: [
                t('By faith '),
                hg('Jacob, when he was a dying, blessed both the sons of Joseph', 'c-jacob-blessing'),
                t('; and '),
                hy('worshipped, leaning upon the top of his staff', 'c-jacob-worship'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jacob-worship',
          html:
            'In his weakness, leaning on a staff, Jacob worshipped. Not asking for anything. Not begging for comfort. Simply worshipping. This is the posture of faith: gratitude and adoration even when the body is failing, even as death approaches. Jacob\'s worship was stronger than his weakness.',
        },
        {
          kind: 'commentary',
          id: 'c-jacob-blessing',
          html:
            'Jacob, Israel, the one who struggled with God and was renamed—now at the end of his life he speaks blessings over the next generation. His faith is not that his circumstances are comfortable or his life is wrapped up neatly. His faith is that God\'s promises continue beyond him, into the children who will carry them forward.',
        },
        {
          kind: 'carry',
          html:
            'Blessing is an act of faith. When you speak blessing over someone—over your children, over a friend, over an enemy—you are participating in God\'s creative power. You are speaking the future into being. You are saying: I believe God will do something good in this person\'s life.',
        },

        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 22,
              spans: [
                t('By faith '),
                hg('Joseph, when he was dying, made mention of the departing of the children of Israel', 'c-joseph-exodus'),
                t('; and '),
                hg('gave commandment concerning his bones', 'c-joseph-bones'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-joseph-exodus',
          html:
            'Joseph was sold into slavery, rose to power in Egypt, and lived there the rest of his life. Yet he never forgot that his people were slaves. He believed God would bring them out. He died in Egypt, but his faith reached across generations to the day of deliverance.',
        },
        {
          kind: 'commentary',
          id: 'c-joseph-bones',
          html:
            'He commanded that his bones be carried out of Egypt when the Exodus came. A strange request—to insist on burial not in the land of his greatest earthly success, but in the land of promise his people had not yet inherited. But it was an act of faith: <em>I believe God will bring us out.</em> My bones will leave Egypt because my people will leave Egypt.',
        },
        {
          kind: 'christ',
          id: 'heb11-christ-blessings',
          title: 'Christ Connection — Blessings from the Patriarchs',
          html:
            'Paul tells the Galatians, "The blessing of Abraham came on the Gentiles through Jesus Christ" (Gal. 3:14). Every blessing these patriarchs spoke—the blessings that have echoed through history—they all flow through Christ. He is the channel through which the promises come to you.',
        },
      ],
    },

    /* ─── Hebrews 11:23–28 — Moses & the Reproach ──────────────────── */
    {
      ref: 'Hebrews 11:23–28',
      title: 'Moses: Choosing Affliction Over Treasures',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 23,
              spans: [
                t('By faith '),
                hg('Moses was hid three months of his parents', 'c-moses-hiding'),
                t(', '),
                hg('because they saw he was a proper child', 'c-moses-godly'),
                t('; and they were not afraid of the king\'s commandment.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-moses-godly',
          html:
            'His parents saw that he was a proper child—a fair, goodly child. But more than that: they saw in him the mark of God, the promise of something greater. Faith is not blind. It sees what others miss. Moses\' parents saw a deliverer before he was born.',
        },
        {
          kind: 'commentary',
          id: 'c-moses-hiding',
          html:
            'Pharaoh has commanded all Hebrew boys to be killed. Moses\' parents hide him in a basket. This is not an act of desperation. It is an act of faith. They believe God is greater than Pharaoh\'s power. They trust their son to God\'s hands.',
        },

        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 24,
              spans: [
                t('By faith '),
                hg('Moses, when he was come to years, refused to be called the son of Pharaoh\'s daughter', 'c-moses-refused'),
                t(';'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Choosing rather to '),
                hg('suffer affliction with the people of God', 'c-moses-affliction'),
                t(', than to enjoy the '),
                hy('pleasures of sin for a season', 'c-moses-pleasures'),
                t(';'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Esteeming the '),
                hp('reproach of Christ greater riches than the treasures in Egypt', 'c-moses-reproach'),
                t('; for he had respect unto the '),
                hg('recompence of the reward', 'c-moses-reward'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-moses-refused',
          html:
            'Moses could have stayed. Pharaoh\'s daughter had raised him as her own son. He had access to power, wealth, comfort, everything the world offers. But at the moment of choice, he refused. He gave it all up.',
        },
        {
          kind: 'commentary',
          id: 'c-moses-affliction',
          html:
            'He chose instead to suffer with God\'s people. To share their burden, their reproach, their hope. This is faith: the decision that belonging to God\'s people is worth more than belonging to the world\'s palaces.',
        },
        {
          kind: 'commentary',
          id: 'c-moses-pleasures',
          html:
            'The "pleasures of sin for a season"—the world offers pleasure, and it is real. Comfort is real. Power is real. But it is temporary. <em>For a season.</em> Moses saw through it. He saw that what the world offers is a rented room, not a home.',
        },
        {
          kind: 'commentary',
          id: 'c-moses-reproach',
          html:
            'Most remarkably, Moses esteems the reproach of Christ. The reproach—the shame, the contempt—of being associated with God\'s people, of standing outside power, of being mocked by the world. Moses sees this as greater riches than all the treasures of Egypt. How? Because he sees that this reproach belongs to Christ. To suffer it is to belong to Christ.',
        },
        {
          kind: 'commentary',
          id: 'c-moses-reward',
          html:
            'Moses had respect to the recompense of the reward. He was not blind about this. He knew that choosing to suffer with God\'s people meant losing Egypt\'s wealth. But he had his eyes on a better reward—one that God Himself was preparing. Faith sees the invisible reward that far outweighs any earthly loss.',
        },
        {
          kind: 'carry',
          html:
            'What pleasures are you being offered? What comfort, what success, what acceptance by the world? Moses shows us that the real question is not whether those things are good. The question is: Are they worth more to me than belonging to God? Are they worth more than the reproach that comes with standing with Him?',
        },
        {
          kind: 'christ',
          id: 'heb11-christ-reproach',
          title: 'Christ Connection — The Reproach That Belongs to Him',
          html:
            'The text says Moses esteemed "the reproach of Christ." Not his own reproach, but Christ\'s. Paul writes, "Let us go forth therefore unto him without the camp, bearing his reproach" (Heb. 13:13). When you suffer for believing in Jesus, when you are mocked for your faith, when you choose God over the world\'s approval—you are bearing Christ\'s reproach. And as Moses understood, that is greater riches than any treasure.',
        },

        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 27,
              spans: [
                t('By faith he '),
                hg('forsook Egypt, not fearing the wrath of the king', 'c-moses-forsook'),
                t(': for he endured, as seeing him who is invisible.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Through faith he kept the '),
                hy('passover, and the sprinkling of blood', 'c-passover-blood'),
                t(', lest he that destroyed the firstborn should touch them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-moses-forsook',
          html:
            'Moses fled Egypt. The narrative says he fled in fear, but Hebrews reframes it: he did not fear Pharaoh\'s wrath. Why? "As seeing him who is invisible." Moses saw God. That vision made Pharaoh\'s wrath small. You can be brave in the face of any earthly threat if you can see the God who rules over all earthly powers.',
        },
        {
          kind: 'commentary',
          id: 'c-passover-blood',
          html:
            'The blood on the doorposts. The angel of death passes over the houses marked with blood. This is perhaps the most profound image in all Scripture: separation by blood, salvation by blood, the future Lamb foreshadowed in every lamb slaughtered on that night.',
        },
      ],
    },

    /* ─── Hebrews 11:29 — The Red Sea ────────────────────────────────── */
    {
      ref: 'Hebrews 11:29',
      title: 'By Faith They Passed Through the Red Sea',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 29,
              spans: [
                t('By faith they '),
                hg('passed through the Red sea as by dry land', 'c-red-sea-dry'),
                t(': which the Egyptians assaying to do were '),
                hg('drowned', 'c-egyptians-drowned'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-red-sea-dry',
          html:
            'The sea that looks impassable becomes a highway. The water that looks like death becomes a road to life. This is the way God works: He takes what seems to block your path and makes it the path itself. Israel walked through the sea on dry ground. They went through what would have been death, and came out alive on the other side.',
        },
        {
          kind: 'commentary',
          id: 'c-egyptians-drowned',
          html:
            'The Egyptians tried to follow. But for them, the waters came back. The same sea that was salvation for Israel was judgment for those who pursued her. The wall of water stood between them—a wall of salvation and a wall of condemnation, depending on which side you stood.',
        },
        {
          kind: 'carry',
          html:
            'Are you facing a sea? A barrier that looks like it cannot be crossed, a wall of circumstance too high to climb, too wide to go around? Faith does not deny the barrier. But faith believes that God can make even the impossible into a highway. That He can turn what looks like death into the path to life.',
        },
        {
          kind: 'christ',
          id: 'heb11-christ-red-sea',
          title: 'Christ Connection — The Baptism in the Sea',
          html:
            'Paul writes, "All our fathers were under the cloud, and all passed through the sea... and were all baptized unto Moses in the cloud and in the sea" (1 Cor. 10:1–2). The Red Sea crossing is baptism—dying to the old life, rising to the new. Every baptism in Christ re-enacts that crossing. You are baptized into His death and resurrection, passing through the water into new life.',
        },
      ],
    },

    /* ─── Hebrews 11:30–31 — Jericho & Rahab ──────────────────────────── */
    {
      ref: 'Hebrews 11:30–31',
      title: 'Jericho Falls; Rahab Is Saved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 30,
              spans: [
                t('By faith the '),
                hg('walls of Jericho fell down, after they were compassed about seven days', 'c-jericho-walls'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jericho-walls',
          html:
            'The most fortified city in Canaan. Walls so thick that houses were built into them. And God\'s strategy: march around it seven times, blow trumpets, and shout. It is not a military strategy. It is not siege warfare. It is pure faith. Israel does what makes no sense, and God does what is impossible. The walls collapse.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 31,
              spans: [
                t('By faith the '),
                hg('harlot Rahab perished not with them that believed not', 'c-rahab-harlot'),
                t(', when she had '),
                hy('received the spies with peace', 'c-rahab-spies'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rahab-harlot',
          html:
            'Rahab was a prostitute in Jericho. She lived outside the law, outside respectability, outside the community. Yet when the spies came, she believed that God had given them the land. She acted on that belief. And when judgment fell, she and her household were saved. Faith is not about your past or your status. It is about whether you believe God.',
        },
        {
          kind: 'commentary',
          id: 'c-rahab-spies',
          html:
            'She hid the spies and sent them out by another way. She risked everything—her life, her home—on the belief that Israel\'s God was real and would honor her faith. And He did. She married Salmon, became part of Israel\'s community, and her grandson was David. The woman from the walls of Jericho became an ancestor of the King.',
        },
        {
          kind: 'carry',
          html:
            'If you have lived a life far from God, or if you are far from God now—Rahab shows you that faith can save. Not your status, not your history, not how long you\'ve been away. Just the belief that God is real, and the choice to act on that belief. Rahab believed, and she was saved. You can too.',
        },
        {
          kind: 'christ',
          id: 'heb11-christ-rahab',
          title: 'Christ Connection — Rahab in the Genealogy',
          html:
            'Matthew names Rahab in the genealogy of Jesus (Matt. 1:5). A Gentile. A woman. A former prostitute. Becomes the great-great-grandmother of the Messiah. This is the scandal and the grace of God. No one is too far gone. No one is too disqualified. Faith saves, and faith changes everything.',
        },
      ],
    },

    /* ─── Hebrews 11:32–38 — The Heroes of Faith ──────────────────────── */
    {
      ref: 'Hebrews 11:32–38',
      title: 'Gedeon, Barak, Samson, and Beyond',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 32,
              spans: [
                t('And what shall I more say? for the time would fail me to tell of '),
                hg('Gedeon, and of Barak, and of Samson, and of Jephthae', 'c-judges'),
                t('; of '),
                hg('David also, and Samuel, and of the prophets', 'c-kings-prophets'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judges',
          html:
            'Gideon. Barak. Samson. Jephthah. The judges of Israel. They were flawed men—Gideon doubted, Samson fell into temptation, Jephthah made a rash vow. Yet they all acted in faith. They defeated enemies. They delivered Israel. Their weakness did not disqualify them. Their faith made them mighty.',
        },
        {
          kind: 'commentary',
          id: 'c-kings-prophets',
          html:
            'David. Samuel. And all the prophets. The line stretches back through generations. Men and women who took God at His word, who spoke what He told them to speak, who acted when He told them to act. Their lives became the history of God\'s covenant with His people.',
        },

        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 33,
              spans: [
                t('Who through faith '),
                hg('subdued kingdoms, wrought righteousness, obtained promises, stopped the mouths of lions', 'c-victories'),
                t(','),
              ],
            },
            {
              number: 34,
              spans: [
                t('Quenched the violence of fire, escaped the edge of the sword, out of weakness were made strong, waxed valiant in fight, '),
                hg('turned to flight the armies of the aliens', 'c-armies'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-victories',
          html:
            'These are the deeds of faith: kingdoms subdued, righteousness wrought, promises obtained, lions\' mouths stopped (think of Daniel), fire quenched (the three Hebrew children), escape from the sword. These are not the deeds of the powerful. They are the deeds of people who had nothing but faith in God, and faith made them mighty.',
        },
        {
          kind: 'commentary',
          id: 'c-armies',
          html:
            '"Out of weakness were made strong." This is the pattern of the kingdom of God. You do not have to be strong to begin with. You have to believe God is strong, and then your weakness becomes the stage on which His power is displayed.',
        },

        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 35,
              spans: [
                t('Women received their dead raised to life again: and others were '),
                hg('tortured, not accepting deliverance', 'c-tortured-refuse'),
                t('; that they might obtain a better resurrection:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tortured-refuse',
          html:
            'Some were delivered. Others were tortured and refused to accept their release if it meant denying God. They could have lived if they recanted. But they chose death rather than betray their faith. This is not a heroic choice by the world\'s measure. This is faith at its most radical: willing to die for the invisible, knowing that God is more real than breath.',
        },

        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 36,
              spans: [
                t('And others had '),
                hg('trial of cruel mockings and scourgings, yea, moreover of bonds and imprisonment', 'c-trials'),
                t(':'),
              ],
            },
            {
              number: 37,
              spans: [
                t('They were stoned, they were sawn asunder, were tempted, were slain with the sword: they '),
                hg('wandered about in sheepskins and goatskins', 'c-wanderers'),
                t('; being '),
                hg('destitute, afflicted, tormented', 'c-destitute'),
                t(';'),
              ],
            },
            {
              number: 38,
              spans: [
                t('(Of whom the world was not worthy:) they wandered in deserts, and in mountains, and in '),
                hg('dens and caves of the earth', 'c-caves'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-trials',
          html:
            'Listen to this: cruel mockings. Scourgings. Bonds. Imprisonment. These faithful ones endured not just death, but degradation. The mockery of those who despised them. The pain of torture. The loss of freedom. And they endured it in faith.',
        },
        {
          kind: 'commentary',
          id: 'c-wanderers',
          html:
            'They wandered in sheepskins and goatskins. Hiding. Hunted. Living like animals in the wilderness, not because they were weak but because their faith made them dangerous to earthly powers.',
        },
        {
          kind: 'commentary',
          id: 'c-destitute',
          html:
            'Destitute. Afflicted. Tormented. And yet the text says of them: the world was not worthy. Their poverty made the world poor. Their affliction exposed the world\'s cruelty. Their faith made the world\'s power look small.',
        },
        {
          kind: 'commentary',
          id: 'c-caves',
          html:
            'They hid in dens and caves. Fugitives. Refugees. Living like hunted animals. And the passage implies: this is the cost of faith. This is what it means to believe God when the world says no.',
        },
        {
          kind: 'carry',
          html:
            'Are you facing trial for your faith? Mockery, loss, affliction? You stand in a long line. The world was not worthy of them, and the world is not worthy of you. Your faith makes the world\'s threats small. Your belief in God makes the world\'s power look empty. Stand firm.',
        },
        {
          kind: 'christ',
          id: 'heb11-christ-martyrs',
          title: 'Christ Connection — Those Who Suffered for Him',
          html:
            'Jesus Himself experienced all of this. Mockery. Scourging. Bonds. Death. He did not resist. He endured it in faith, trusting the Father, believing in a resurrection He could not yet see. You follow in His footsteps when you stand firm in faith despite trial.',
        },
      ],
    },

    /* ─── Hebrews 11:39–40 — Together Made Perfect ──────────────────── */
    {
      ref: 'Hebrews 11:39–40',
      title: 'Received Not the Promise; God Provided a Better Thing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 39,
              spans: [
                t('And these all, having obtained a good report through faith, '),
                hp('received not the promise', 'c-promise-not-received'),
                t(':'),
              ],
            },
            {
              number: 40,
              spans: [
                t('God having provided some '),
                hp('better thing for us', 'c-better-thing-us'),
                t(', that they without us should '),
                hy('not be made perfect', 'c-teleio-together'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-promise-not-received',
          html:
            'Abel never saw justice for his blood. Enoch never built a city with his own hands. Noah never saw the world restored to innocence. Abraham never saw Isaac as the father of nations. They all died before the promise was fulfilled in their lifetimes. Yet they obtained a good report. They are called the faithful. Why? Because they believed God\'s promise was good even though they would not see its completion.',
        },
        {
          kind: 'commentary',
          id: 'c-better-thing-us',
          html:
            'But God provided something better—not just for them, but for us. A better thing than what was promised in the Old Testament. What? The revelation of Christ. The cross. The blood. The resurrection. The opening of heaven itself. We stand on this side of the cross. We have seen what they only glimpsed.',
        },
        {
          kind: 'commentary',
          id: 'c-teleio-together',
          html:
            'They will not be made perfect without us. We will not be made perfect without them. We are perfected together. The communion of saints is not poetic language—it is theology. Your faith is woven together with theirs. Their witness holds up your faith. Your faith vindicates theirs across the centuries.',
        },
        {
          kind: 'greek',
          id: 'heb11-teleio-together',
          title: 'Teleioō — Made Perfect, Completed, Together',
          script: 'τελειόω',
          translit: '<strong>teleioō</strong> · to make perfect; to complete; to bring to full maturity; to consecrate',
          description:
            'They will not be made perfect without us. We will not be made perfect without them. We are perfected together. The communion of saints is not poetic language—it is theology. Your faith is woven together with theirs. Their witness holds up your faith. Your faith vindicates theirs across the centuries.',
        },
        {
          kind: 'carry',
          html:
            'You are not alone in your faith. You are surrounded by a great cloud of witnesses (Heb. 12:1). Abel is watching. Enoch is watching. Noah is watching. Abraham is watching. And you are their vindication. Your faith proves that their faith was not in vain. Their hope was not delusion. They believed for you. You are what they were believing for.',
        },
        {
          kind: 'christ',
          id: 'heb11-christ-perfect',
          title: 'Christ Connection — The Perfection Christ Made Possible',
          html:
            'Only through Christ are any of us made perfect. "By one offering he hath perfected for ever them that are sanctified" (Heb. 10:14). Christ opened the way that the Old Testament saints looked for. He is the fulfillment of every promise. He is the High Priest who made one sacrifice forever. Through His blood, we are all—ancients and moderns—made perfect together.',
        },
        {
          kind: 'reflection',
          id: 'heb11-together',
          prompt: 'How does it change your faith to know that you are part of a communion of saints stretching back through history? Who have you been influenced by? Whose faith is now being vindicated through yours?',
        },
      ],
    },
  ],

  hasHebrew: false,
};
