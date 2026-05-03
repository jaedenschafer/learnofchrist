import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Acts 6 — The Seven Deacons, Stephen&apos;s Wonder
 *
 * The apostolic church swells beyond what the apostles alone can serve.
 * Widows are neglected in the daily distribution. The twelve convene and
 * propose that seven men be chosen to oversee this labor of love. Stephen,
 * full of faith and the Holy Spirit, is lifted up—but his great works provoke
 * opposition, false witnesses, and the beginning of the first martyr&apos;s witness.
 */
export const ACTS_6: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 6,

  estimatedMinutes: { 5: 6, 10: 11, 15: 16 },
  intros: [
    'The apostolic church has swollen from a few hundred to thousands in mere weeks. The growth is a sign of the Spirit&apos;s power. But growth brings a problem: the daily distribution of food and aid to widows—the vulnerable at the heart of the Christian community—is being overlooked. Some widows are being neglected. The apostles could attempt to manage it themselves, but they recognize something the church would need for centuries to come: leadership means delegation, not domination.',
    'They call the multitude together and propose that seven men of honest report, full of the Holy Spirit and wisdom, be chosen to oversee this work. It is a beautiful moment: the apostles affirm that service to the poor is not a second-class task. The Spirit fills the servants as fully as He fills the preachers. Stephen is chosen—a man full of faith and power. But within verses, he is also described as doing great wonders and signs among the people. His appointment to serve at tables will become the doorway to something much larger.',
    'Controversy erupts. Freedmen from various synagogues rise to dispute with Stephen. They cannot resist the wisdom and the Spirit by which he speaks. Unable to answer him, they suborn false witnesses to accuse him of blasphemy against Moses and against God. And as he stands before the council, his face becomes like the face of an angel.',
  ],

  sections: [
    /* ─── Acts 6:1 — The Neglect ───────────────────────────────────────── */
    {
      ref: 'Acts 6:1',
      title: 'The Widows Left Behind',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 1,
              spans: [
                t('And in those days, when '),
                hg('the number of the disciples was multiplied', 'acts6-multiplied'),
                t(', there arose a '),
                hg('murmuring', 'acts6-murmuring'),
                t(' of the '),
                hy('Grecians', 'acts6-hellenes'),
                t(' against the '),
                hy('Hebrews', 'acts6-hebrews'),
                t(', because their widows were '),
                hg('neglected', 'acts6-neglected'),
                t(' in the daily ministration.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts6-multiplied',
          html:
            'The multiplication of disciples is a sign of the Spirit&apos;s work. Every mention of growth in Acts is followed by complication. Growth without structure becomes chaos. The word <em>multiplied</em> sounds like victory—and it is—but victory brings responsibility that demands a new form of order.',
        },
        {
          kind: 'commentary',
          id: 'acts6-murmuring',
          html:
            'A <em>murmuring</em> rises. In the Old Testament, murmuring is what the Israelites do in the wilderness when they doubt God. Here the murmuring is legitimate complaint. There is injustice to address. The church does not shut down the complaint; it hears it and acts.',
        },
        {
          kind: 'greek',
          id: 'acts6-hellenes',
          title: 'Hellenes — Greek-speaking Jews',
          script: 'Ἕλληνες',
          translit: '<strong>Hellenes</strong> · Greek-speaking; Jews of the diaspora',
          description:
            'The Grecians are Jews from outside Palestine who speak Greek as their first language. The Hebrews are Aramaic-speaking Jews of Judea. These are two cultures within one faith, and the structure of the church has favor the Aramaic-speaking inner circle. The complaint reveals an institutional blind spot.',
        },
        {
          kind: 'commentary',
          id: 'acts6-hebrews',
          html:
            'The Hebrew-speaking believers, closer to the apostles, have their needs met first. This is not malice—it is proximity and language. But the gospel demands better. Justice means seeing the ones at the edge, the ones who are most easily forgotten.',
        },
        {
          kind: 'commentary',
          id: 'acts6-neglected',
          html:
            'Widows were among the most vulnerable in the ancient world. No social security, no pension, no husband to provide. The early church understood that care for widows was not optional, peripheral, or a lower form of ministry. It was central. To neglect them was to fail the gospel itself.',
        },
        {
          kind: 'carry',
          html:
            'Who are the overlooked in your circle? Not the most visible, the most well-off, the ones closest to power—but the widows, the lonely, the ones whose names nobody gets right, the ones whose needs are just complicated enough that everyone assumes someone else is handling it. Growth is good. But growth that forgets the vulnerable is not the Spirit&apos;s work.',
        },
        {
          kind: 'reflection',
          id: 'acts6-neglect',
          prompt:
            'What needs in your community or church are being overlooked because people assume someone else is handling them? Whose widows are you walking past?',
        },
      ],
    },

    /* ─── Acts 6:2–4 — The Apostles Hear and Respond ──────────────────── */
    {
      ref: 'Acts 6:2–4',
      title: 'The Apostles Hear and Delegate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 2,
              spans: [
                t('Then the twelve called the multitude of the disciples unto them, and said, It is not '),
                hg('reason that we should leave the word of God', 'acts6-reason'),
                t(', and serve tables.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Wherefore, brethren, '),
                hy('look ye out among you', 'acts6-episkeptomai'),
                t(' '),
                hg('seven men', 'acts6-seven'),
                t(' of honest report, full of the Holy Ghost and of wisdom, whom we may appoint over this business.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('But we will give ourselves continually to '),
                hp('prayer, and to the ministry of the word', 'acts6-christ-servant'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts6-reason',
          html:
            'The apostles speak frankly. Not because serving widows is unimportant—but because they have been called to something specific: the word and prayer. They are not saying <em>serving tables is beneath us</em>. They are saying <em>we cannot be the ones to do this well, and you deserve better than divided attention.</em> Leadership sometimes means knowing what you cannot do.',
        },
        {
          kind: 'greek',
          id: 'acts6-episkeptomai',
          title: 'Episkeptomai — Look out for; visit',
          script: 'ἐπισκέπτομαι',
          translit: '<strong>episkeptomai</strong> · look out for; oversee; examine carefully',
          description:
            'The apostles ask the community to <em>look out for</em> good men. The root echoes the word for bishop—overseer. To look out for someone is to see them, to know them, to be responsible for their welfare.',
        },
        {
          kind: 'commentary',
          id: 'acts6-seven',
          html:
            'Seven men. Not one. Not a hierarchy of deacons with a chief. Seven equals, each one full of the Holy Ghost and wisdom—the same qualifications that would apply to the apostles themselves. The church is affirming that those who serve the body materially are no less filled with the Spirit than those who serve it through word.',
        },
        {
          kind: 'carry',
          html:
            'There is work in your life that only <em>you</em> can do, and there is work that someone else should be trusted with. Saying no to one thing—even a good thing—is how you say yes to what you were made for. And when you delegate, you release others to discover their own calling, their own giftedness, their own place in the body of Christ.',
        },
        {
          kind: 'reflection',
          id: 'acts6-delegate',
          prompt:
            'What is one good thing you are doing that you are not uniquely called to? Who could you trust with it? What would open up for you if you said yes to that?',
        },
      ],
    },

    /* ─── Acts 6:5–7 — The Seven Chosen ──────────────────────────────── */
    {
      ref: 'Acts 6:5–7',
      title: 'The Laying on of Hands',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 5,
              spans: [
                t('And the saying pleased the whole multitude: and they chose '),
                hg('Stephen', 'acts6-stephen'),
                t(', a man full of faith and of the Holy Ghost, and Philip, and Prochorus, and Nicanor, and Timon, and Parmenas, and Nicolas a proselyte of Antioch:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Whom they set before the apostles: and when they had prayed, they '),
                hp('laid their hands on them', 'acts6-laying-hands'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the word of God '),
                hg('increased', 'acts6-word-increased'),
                t('; and the number of the disciples multiplied in Jerusalem greatly; and a great company of the priests were obedient to the faith.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts6-stephen',
          html:
            'Stephen appears fourth on the list, but he will dominate the rest of the chapter. Described simply as <em>full of faith and of the Holy Ghost</em>—the same terms used for the apostles—he is about to become the church&apos;s first martyr. The last words spoken about him before his death are the same words spoken when he is appointed to serve widows: he is full of the Spirit.',
        },
        {
          kind: 'commentary',
          id: 'acts6-laying-hands',
          html:
            'The apostles pray and lay hands on the seven. Hands are the channel of the Spirit&apos;s transfer in Acts. The same gesture that healed the sick, commissioned missionaries, and conveyed the Spirit now consecrates these servers. Their work is sacred. Their hands carry the apostolic blessing.',
        },
        {
          kind: 'christ',
          id: 'acts6-christ-servant',
          title: 'Christ Connection — The Servant Who Came to Serve',
          html:
            'Jesus said, &ldquo;The Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many&rdquo; (Mark 10:45). The apostles have learned this. They do not cling to prominence. They give themselves to the apostolic task, and they empower others to do the work of ministry. Stephen&apos;s ordination to serve tables is the church learning the fundamental lesson of the Incarnation: the greatest among you must be the servant of all.',
        },
        {
          kind: 'commentary',
          id: 'acts6-word-increased',
          html:
            'Verse 7 is the third <em>summary statement</em> in Acts—a mark that something significant has happened. The word multiplies. Disciples multiply. Even priests become obedient to the faith. The result of <em>not</em> trying to do everything is that <em>everything</em> grows. This is the paradox of multiplication: you must let go to increase.',
        },
        {
          kind: 'carry',
          html:
            'When work is done prayerfully, with good order, and in genuine delegation, the whole body thrives. Not just efficiency. Not just the work getting done. But the word of God itself increasing, the Spirit moving freely through every member, and even those who seemed closed to the gospel beginning to respond. Your willingness to hand something off is not laziness. It is trust in the Spirit&apos;s ability to work through others.',
        },
        {
          kind: 'reflection',
          id: 'acts6-pray-hands',
          prompt:
            'When you pray for and commission someone else to work, what happens in your own faith? How does releasing control actually deepen your dependence on God?',
        },
        {
          kind: 'artwork',
          matchTitle: /laying of hands/i,
          caption: 'Acts 6:6 · The Seven Commissioned',
        },
      ],
    },

    /* ─── Acts 6:8 — Stephen&apos;s Power ───────────────────────────────────── */
    {
      ref: 'Acts 6:8',
      title: 'The Servant Overflows',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 8,
              spans: [
                t('And Stephen, '),
                hy('full of faith and power', 'acts6-pleres'),
                t(', did '),
                hg('great wonders and miracles', 'acts6-dunamis'),
                t(' among the people.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'acts6-pleres',
          title: 'Pleres — Full',
          script: 'πλήρης',
          translit: '<strong>pleres</strong> · full; filled to capacity; overflowing',
          description:
            'Stephen is <em>full</em> of faith and power. Not partly filled. Not managing it carefully. Full to overflowing, so that the overflow spills out as wonders and miracles. A life filled with the Spirit cannot help but overflow.',
        },
        {
          kind: 'commentary',
          id: 'acts6-dunamis',
          html:
            'Stephen was chosen for a practical task: serving widows at tables. But he is so full of the Spirit that wonders and miracles pour out of him. This is the theme of Acts: when the Spirit fills a believer, that believer&apos;s work expands far beyond what was anticipated. The Spirit will not be confined to a job description.',
        },
        {
          kind: 'carry',
          html:
            'You were given your assignment—your job, your family, your local church, your daily work. But the Holy Spirit is not hemmed in by job descriptions. If you are truly filled with His presence, your life will overflow with gifts and graces that reach far beyond your title. The widows get served, yes. But they get served by a man whose faith is so alive that miracles follow him.',
        },
        {
          kind: 'reflection',
          id: 'acts6-overflow',
          prompt:
            'What part of your calling are you containing when God is asking it to overflow? How could your faith expand beyond the boundaries you&apos;ve drawn?',
        },
      ],
    },

    /* ─── Acts 6:9–10 — The Disputers ────────────────────────────────── */
    {
      ref: 'Acts 6:9–10',
      title: 'Wisdom They Cannot Resist',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 9,
              spans: [
                t('Then there arose certain of the synagogue, which is called the synagogue of the Libertines, and Cyrenians, and Alexandrians, and of them of Cilicia and of Asia, disputing with Stephen.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And they were not able to resist the '),
                hg('wisdom and the spirit', 'acts6-sophia'),
                t(' by which he spake.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts6-sophia',
          html:
            'The word for wisdom is <em>sophia</em>—not the practical wisdom of knowing what to do, but the deeper wisdom of understanding God&apos;s will and speaking it. Stephen speaks with a <em>spirit</em>—the Holy Ghost working through his words. Truth spoken in power cannot be answered by argument alone.',
        },
        {
          kind: 'greek',
          id: 'acts6-sophia',
          title: 'Sophia — Wisdom',
          script: 'σοφία',
          translit: '<strong>sophia</strong> · wisdom; understanding; divine insight',
          description:
            'Sophia is the wisdom that comes from knowing God, not merely from study or skill. It is the kind of wisdom the apostles prayed the church would receive (Eph. 1:17). When it speaks, it carries an authority that argument cannot touch.',
        },
        {
          kind: 'commentary',
          id: 'acts6-disputers',
          html:
            'These are powerful men. They come from the diaspora—from Cyrene, Alexandria, Cilicia, Asia. They are cosmopolitan, educated, trained in rhetoric. They come together in a united synagogue to dispute with Stephen. But they cannot <em>resist</em> him. The Greek word means they cannot stand against him. He is too full of the Spirit.',
        },
        {
          kind: 'carry',
          html:
            'You will face disputation. People trained in argument, confident in their position, united against what you believe. And they may be genuinely smart, genuinely educated, genuinely wrong. But if your words are rooted in the Spirit—if you speak from prayer and truth rather than from your own cleverness—you will have a kind of power that argument cannot touch.',
        },
        {
          kind: 'reflection',
          id: 'acts6-disputers-ref',
          prompt:
            'Where are you tempted to defend yourself with your own wit when what God wants is for you to speak His truth? Whose approval are you seeking?',
        },
      ],
    },

    /* ─── Acts 6:11–14 — False Witnesses ────────────────────────────── */
    {
      ref: 'Acts 6:11–14',
      title: 'The Witness of False Witnesses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 11,
              spans: [
                t('Then they suborned men, which said, We have heard him speak '),
                hg('blasphemous words', 'acts6-blasphemy'),
                t(' against Moses, and against God.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And they stirred up the people, and the elders, and the scribes, and came upon him, and caught him, and brought him unto the council,'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And set up false witnesses, which said, This man ceaseth not to speak blasphemous words against this holy place, and the law:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('For we have heard him say, that this Jesus of Nazareth shall destroy this temple, and shall change the customs which Moses delivered us.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts6-blasphemy',
          html:
            'They suborn false witnesses. They cannot answer Stephen&apos;s wisdom, so they resort to lies. The pattern is ancient: when truth cannot be defeated by argument, power tries to defeat it by violence. The charge is the same charge that will be brought against Jesus: words against the temple, against the Law, against God Himself.',
        },
        {
          kind: 'commentary',
          id: 'acts6-false-witnesses',
          html:
            'These witnesses are false. Their testimony is manufactured, not discovered. And yet it will lead to Stephen&apos;s death. The truth of their words does not guarantee their safety. Stephen has already told the truth. These men have power. In the short term, power wins. But Acts is not written in the short term.',
        },
        {
          kind: 'christ',
          id: 'acts6-christ-martyr',
          title: 'Christ Connection — The Testimony of Martyrs',
          html:
            'Stephen is about to follow Jesus to his death—not because he has lost the argument, but because the truth about Jesus makes power uncomfortable. Jesus was also accused of blasphemy. Jesus was also condemned on false testimony. But between the cross and the empty tomb, everything changed. The same power that silences one voice cannot silence the one Voice. Stephen&apos;s death becomes his resurrection. His blood will water the seed that grows into Paul.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world where false witnesses still have power. Where argument is still overridden by institutional force. Where speaking truth can still cost you. But you do not live in the short term. You live in the light of resurrection. The last word is not with the council. The last word is with God.',
        },
        {
          kind: 'reflection',
          id: 'acts6-false-witness',
          prompt:
            'What truth are you afraid to speak because you know the cost? Where might your faithfulness become your witness—not because you convince them, but because you show the world what it looks like to belong to Christ?',
        },
      ],
    },

    /* ─── Acts 6:15 — The Face of an Angel ─────────────────────────── */
    {
      ref: 'Acts 6:15',
      title: 'A Face Like an Angel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 15,
              spans: [
                t('And all that sat in the council, looking steadfastly on him, saw '),
                hp('his face as it had been the face of an angel', 'acts6-angel-face'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts6-face-description',
          html:
            'Stephen&apos;s face shines. Not because he is not human—but because the divine glory is visible through him. The same thing happened on Mount Sinai, when <em>the skin of his face shone</em> because Moses had been in the presence of God (Ex. 34:29). A human face transformed by encounter with the divine.',
        },
        {
          kind: 'commentary',
          id: 'acts6-angel-face',
          html:
            'An angel&apos;s face. The image echoes Gabriel appearing to Zechariah, appearing to Mary—the moment the heavenly breaks into the earthly. Stephen&apos;s face is a doorway between worlds. What he is about to experience—his death, his vision of the heavens opening, the Son of Man standing to receive him—is already visible in his countenance. The council can see it and cannot explain it.',
        },
        {
          kind: 'carry',
          html:
            'Your face tells a story. Not because you are performing—but because what is on the inside eventually appears on the outside. If your inner world is fractured, anxious, aligned with power instead of with God, your face will say so. If your inner world is anchored in Christ, in His resurrection, in His care, that too will show. Stephen&apos;s face was not what he created. It was what happened to him when he stopped defending himself and let God&apos;s glory show through.',
        },
        {
          kind: 'reflection',
          id: 'acts6-angel-face-ref',
          prompt:
            'What does your face say right now about what you believe? If someone looked at you steadfastly, what would they see of your trust in God? What would change if you knew they were looking?',
        },
        {
          kind: 'artwork',
          matchTitle: /stephen/i,
          matchArtist: /tissot/i,
          caption: 'Acts 6:15 · Stephen Before the Council',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Acts 6',
    quote:
      'Stephen, full of faith and power, did great wonders and miracles among the people. And all that sat in the council, looking steadfastly on him, saw his face as it had been the face of an angel.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 6 · Study Guide',
  },

  hasHebrew: false,
};
