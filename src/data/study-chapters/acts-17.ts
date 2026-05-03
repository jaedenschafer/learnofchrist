import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Acts 17 — Three Cities, Three Audiences
 *
 * Paul moves through Thessalonica, Berea, and Athens—each city presents a
 * different kind of resistance and a different path to belief. In Thessalonica,
 * the synagogue opposes him; the gospel is called sedition. In Berea, believers
 * search Scripture daily, noble-minded enough to test what they hear. In Athens,
 * the center of Greek philosophy, Paul stands before pagan intellectuals and
 * speaks of an altar to "the unknown God," revealing the living God they
 * worship in ignorance. Some mock the resurrection. Some believe. But Paul
 * speaks to every kind of mind—the hostile, the noble, the philosophical—and
 * to each he proclaims that God is not distant or abstract, but living, present:
 * "In him we live, and move, and have our being."
 */
export const ACTS_17: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 17,

  estimatedMinutes: { 5: 9, 10: 12, 15: 16 },
  intros: [
    'Paul travels through three cities in Acts 17, and each city becomes a lesson in how the gospel meets different kinds of resistance. In Thessalonica, the Jews oppose him and drag him before the rulers. In Berea, believers search the scriptures daily to verify what Paul proclaims. In Athens, philosophers mock him in the marketplace, and he stands on Mars Hill[res:bibleodyssey-areopagus] to speak to a city built on human wisdom.',
    'The pattern is consistent: the gospel is preached, opposition arises, some believe. But what changes from city to city is the nature of the opposition and the kind of belief that follows. Thessalonica sees theological sedition. Berea sees noble discernment. Athens sees philosophers torn between mockery and genuine inquiry. By the end of the chapter, the unknown God is known, at least to some—Dionysius, Damaris, and others who heard and believed.',
    'This is Paul&apos;s strategy at work: meet people where they are. At the synagogue, he argues from Scripture. At Berea, he welcomes investigation. On Mars Hill, he quotes pagan poets and speaks of an altar to an unknown god. The message is constant—Jesus and the resurrection—but the door through which he enters each city changes. The gospel speaks every language.',
  ],

  sections: [
    /* ─── Acts 17:1–9 — Thessalonica: Turned the World Upside Down ──────── */
    {
      ref: 'Acts 17:1–9',
      title: 'Thessalonica: Uproar and Opposition',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 1,
              spans: [
                t('Now when they had passed through Amphipolis and Apollonia, they came to Thessalonica, where was a synagogue of the Jews:'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Paul, as his manner was, '),
                hg('went in unto them, and three sabbath days reasoned with them out of the scriptures', 'acts17-reasoned'),
                t(','),
              ],
            },
            {
              number: 3,
              spans: [
                t('Opening and alleging, that '),
                hp('Christ must needs have suffered', 'acts17-christ-suffering'),
                t(', and '),
                hp('risen again from the dead', 'acts17-christ-resurrection'),
                t('; and that this Jesus, whom I preach unto you, is Christ.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And some of them believed, and consorted with Paul and Silas; and of the devout Greeks a great multitude, and of the chief women not a few.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('But the Jews which believed not, moved with '),
                hy('envy', 'acts17-greek-zelos'),
                t(', took unto them certain lewd fellows of the baser sort, and gathering a company, set all the city on an uproar, and assaulted the house of Jason, and sought to bring them out to the people.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And when they found them not, they drew Jason and certain brethren unto the rulers of the city, crying, '),
                hg('These that have turned the world upside down are come hither also', 'acts17-upsidedown'),
                t(';'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Whom Jason hath received: and these all do contrary to the decrees of Caesar, saying that there is another king, one Jesus.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And they troubled the people and the rulers of the city, when they heard these things.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And when they had taken security of Jason, and of the other, they let them go.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts17-reasoned',
          html:
            'Paul follows a pattern: when he enters a city, he goes first to the synagogue. He argues from Scripture, using the texts his listeners already hold sacred. The gospel is not foreign doctrine dropped from the sky; it is the fulfillment of what Scripture has been preparing.',
        },
        {
          kind: 'christ',
          id: 'acts17-christ-suffering',
          title: 'Christ Connection — The Necessity of Suffering',
          html:
            'Paul argues that "Christ must needs have suffered." The Greek word is <em>edei</em>—a kind of moral necessity, a "must." This is not an accidental tragedy; it is the design of God. Jesus told the disciples on the road to Emmaus: "Ought not Christ to have suffered these things, and to enter into his glory?" (Luke 24:26). The cross is written into the gospel from the beginning.',
        },
        {
          kind: 'christ',
          id: 'acts17-christ-resurrection',
          title: 'Christ Connection — The Power of Resurrection',
          html:
            'Paul proclaims the resurrection: Christ "risen again from the dead." This is the hinge of the entire message. Without resurrection, the death of Jesus is tragedy and failure. With resurrection, it is redemption and victory. Paul will later tell the Corinthians: "If Christ be not risen, then is our preaching vain, and your faith is also vain" (1 Corinthians 15:14). The resurrection is the non-negotiable cornerstone.',
        },
        {
          kind: 'greek',
          id: 'acts17-greek-zelos',
          title: 'Zelos — &ldquo;Envy&rdquo;',
          script: 'ζῆλος',
          translit: '<strong>zelos</strong> · envy; jealousy; zeal (can mean either)',
          description:
            'The Jews who did not believe are moved by <em>zelos</em>—a burning feeling of threat to their authority and status. When the gospel gains a hearing, especially among respected women and Greeks, the synagogue&apos;s control is threatened. Zelos can be righteous passion or destructive jealousy. Here it becomes violence.',
        },
        {
          kind: 'commentary',
          id: 'acts17-upsidedown',
          html:
            'The phrase "turned the world upside down" is a stunning indictment and a compliment both at once. The accusers mean it as slander—these are troublemakers, seditionists. But the phrase is true. The gospel does turn things upside down: the last are first, the weak are strong, the death of God on a cross redeems the world. The kingdom of Jesus inverts every kingdom built on power and wealth.',
        },
        {
          kind: 'carry',
          html:
            'The world will sometimes accuse you of disturbing the peace when you speak the truth. That accusation may sting, but ask yourself: is the peace you&apos;re disturbing the peace of God, or the peace of something else? If the gospel you live is truly the gospel, it will trouble those who profit from the old order. That trouble is not always a sign you&apos;re wrong.',
        },
        {
          kind: 'reflection',
          id: 'acts17-thessalonica',
          prompt:
            'What part of your own comfort or status does the gospel ask you to relinquish? How do you respond when that costs you something?',
        },
      ],
    },

    /* ─── Acts 17:10–14 — Sent Away by Night ──────────────────────────────── */
    {
      ref: 'Acts 17:10–14',
      title: 'Sent Away by Night',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 10,
              spans: [
                t('And the brethren immediately sent away Paul and Silas by night unto Berea: who coming thither '),
                hg('went into the synagogue of the Jews', 'acts17-berea-pattern'),
                t('.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('These were '),
                hy('more noble', 'acts17-greek-eugeneis'),
                t(' than those in Thessalonica, in that they '),
                hg('received the word with all readiness of mind, and searched the scriptures daily, whether those things were so', 'acts17-berea-searching'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Therefore many of them believed; also of honourable women which were Greeks, and of men, not a few.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('But when the Jews of Thessalonica had knowledge that the word of God was preached of Paul at Berea, they came thither also, '),
                hg('stirring up the people', 'acts17-opposition-follows'),
                t('.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And then immediately the brethren sent away Paul to go as it were to the sea: but Silas and Timotheus abode there still.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts17-berea-pattern',
          html:
            'Paul&apos;s pattern persists: he goes to the synagogue first. Even when he is fleeing persecution, even when safety matters, he seeks out the place where Scripture is read and taught. This is not stubbornness. It is the conviction that the gospel is written into the texts the Jews themselves hold sacred.',
        },
        {
          kind: 'greek',
          id: 'acts17-greek-eugeneis',
          title: 'Eugenēs — &ldquo;Noble-minded&rdquo;',
          script: 'εὐγενής',
          translit: '<strong>eugeneis</strong> · of good birth; noble; generous-minded',
          description:
            'The Bereans are called <em>eugeneis</em>—not because they were wealthy or aristocratic, but because they had the moral nobility to listen, to test, to seek truth rather than defend their own authority. Noble-mindedness is openness to being wrong.',
        },
        {
          kind: 'commentary',
          id: 'acts17-berea-searching',
          html:
            'The Bereans did something remarkable: they received Paul&apos;s word "with all readiness" but also "searched the scriptures daily, whether those things were so." Faith and discernment walked together. They were not gullible. They were not skeptical. They were willing to believe, and willing to investigate. Many of them believed—because the evidence held.',
        },
        {
          kind: 'carry',
          html:
            'There is a kind of faith that comes from careful study and noble openness. You don&apos;t have to check your mind at the door to believe. The Bereans prove it: readiness of heart and diligent study produce belief that holds. Ask the hard questions. Search the text. A faith that cannot survive investigation is not worth holding.',
        },
        {
          kind: 'commentary',
          id: 'acts17-opposition-follows',
          html:
            'Even in Berea, opposition catches up. The enemies from Thessalonica pursue Paul, intent on stopping him. But by this time the seed is planted. The Bereans have investigated, believed, and their faith will not be easily shaken. Opposition that comes after belief is simply confirmation that the gospel matters.',
        },
        {
          kind: 'reflection',
          id: 'acts17-berea',
          prompt:
            'When you encounter a claim about Jesus or the gospel, do you respond first with openness or with skepticism? How do you balance the two?',
        },
        {
          kind: 'artwork',
          matchTitle: /berea/i,
          caption: 'Acts 17:11 · The Bereans',
        },
      ],
    },

    /* ─── Acts 17:15–17 — Paul Alone in Athens ────────────────────────────── */
    {
      ref: 'Acts 17:15–17',
      title: 'Paul Alone in Athens',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 15,
              spans: [
                t('And they that conducted Paul brought him unto Athens: and receiving a commandment unto Silas and Timotheus for to come to him with all speed, they departed.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Now while Paul waited for them at Athens, his '),
                hy('spirit was stirred in him', 'acts17-greek-paroxynai'),
                t(', when he saw the city wholly given to '),
                hg('idolatry', 'acts17-athens-idols'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Therefore disputed he in the synagogue with the Jews, and with the devout persons, and in the market daily with them that met with him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts17-athens-idols',
          html:
            'Athens in Paul&apos;s day was a city of temples and statues[res:ascsa-agora]. Nearly every street corner held a shrine, an altar, a god. For a man whose conviction was that "an idol is nothing in the world" (1 Corinthians 8:4) and that all such worship is misdirected devotion to demons, Athens must have been overwhelming—a sprawl of religious confusion, spiritual energy aimed at countless false gods.',
        },
        {
          kind: 'greek',
          id: 'acts17-greek-paroxynai',
          title: 'Paroxynō — &ldquo;Stirred&rdquo;',
          script: 'παροξύνω',
          translit: '<strong>paroxynō</strong> · to provoke; to stir up; to irritate',
          description:
            'Paul&apos;s <em>spirit</em>—his whole being—is <em>paroxynai</em>, stirred to emotion and action. The idolatry he witnesses is not merely wrong; it is a provocation. This emotion—this righteous disturbance—is what sends him into the marketplace and the synagogue to speak.',
        },
        {
          kind: 'carry',
          html:
            'There is a kind of sorrow that should stir your spirit: the sight of human beings devoted to false gods, real or cultural. Money, status, security, pleasure—people worship these as fervently as the Athenians worshipped Athena. When you see it, let your spirit be stirred. That stirring is the beginning of compassion and of witness.',
        },
        {
          kind: 'reflection',
          id: 'acts17-athens-solitude',
          prompt:
            'When you find yourself alone, surrounded by beliefs you cannot share, do you retreat into safety or speak up? What would change if you believed your loneliness had a purpose?',
        },
      ],
    },

    /* ─── Acts 17:18–21 — In the Marketplace ────────────────────────────────── */
    {
      ref: 'Acts 17:18–21',
      title: 'In the Marketplace: Philosophers and Babbler',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 18,
              spans: [
                t('Then certain philosophers of the Epicureans, and of the Stoicks, encountered him. And some said, What will this babbler say? other some, He seemeth to be a setter forth of '),
                hg('strange gods', 'acts17-foreign-demons'),
                t(': because he preached unto them Jesus, and the resurrection.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And they took him, and brought him unto Areopagus, saying, May we know what this new doctrine, whereof thou speakest, is?'),
              ],
            },
            {
              number: 20,
              spans: [
                t('For thou bringest certain strange things to our ears: we would know therefore what these things mean.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('(For all the Athenians and strangers which were there spent their time in nothing else, but either to tell, or to hear some new thing.)'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts17-foreign-demons',
          html:
            'The philosophers call Jesus and the resurrection "strange gods"—<em>xenoi daimones</em> in the Greek. From their perspective, Paul is introducing foreign deities, which was technically against Athenian law. They are not wrong that the gospel is foreign to their philosophy. But what they dismiss as strangeness is actually liberation.',
        },
        {
          kind: 'carry',
          html:
            'The gospel will always sound strange to a culture that has built itself on different foundations. Don&apos;t be surprised when others call it foolishness or babbling. The Stoics and Epicureans had built entire systems of ethics and understanding. The gospel was not just one more option; it was a threat to their whole framework. That strangeness is not a flaw in the gospel. It is a sign that the gospel is truly other, truly transcendent.',
        },
      ],
    },

    /* ─── Acts 17:22–28 — Mars Hill: The Unknown God ────────────────────────── */
    {
      ref: 'Acts 17:22–28',
      title: 'Mars Hill: "The Unknown God"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 22,
              spans: [
                t('Then Paul stood in the midst of Mars hill, and said, Ye men of Athens, I perceive that in all things ye are too superstitious.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('For as I passed by, and beheld your '),
                hy('devotions', 'acts17-greek-sebasmata'),
                t(', I found an altar with this inscription, '),
                hg('TO THE UNKNOWN GOD', 'acts17-unknown-god'),
                t('. Whom therefore ye ignorantly worship, him declare I unto you.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('God that made the world and all things therein, seeing that he is Lord of heaven and earth, dwelleth not in temples made with hands;'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Neither is worshipped with men&apos;s hands, as though he needed any thing, seeing he giveth to all life, and breath, and all things;'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation;'),
              ],
            },
            {
              number: 27,
              spans: [
                t('That they should seek the Lord, if haply they might feel after him, and find him, though he be not far from every one of us:'),
              ],
            },
            {
              number: 28,
              spans: [
                t('For '),
                hp('in him we live, and move, and have our being', 'acts17-christ-presence'),
                t('; as certain also of your own poets have said, For we are also his offspring.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'acts17-greek-sebasmata',
          title: 'Sebasmata — &ldquo;Objects of Worship&rdquo;',
          script: 'σέβασμα',
          translit: '<strong>sebasmata</strong> · objects of worship; things revered and worshipped',
          description:
            'Paul uses the Greek word <em>sebasmata</em> to describe what the Athenians revere. It is not a dismissive word; it acknowledges that the people genuinely seek to worship. What is lacking is not sincerity but knowledge of the true object of worship.',
        },
        {
          kind: 'commentary',
          id: 'acts17-unknown-god',
          html:
            'The altar to "the unknown God" is likely a real artifact—a safeguard in case some divinity was overlooked. But for Paul it becomes a door. The Athenians worship without knowing; Paul comes to make the unknown known[res:aratus-acts28-intertextual]. The line he quotes a few verses later — "we are also his offspring" — is taken straight from the opening of Aratus[res:aratus-phaenomena], a Stoic poet whose work would have been on the lips of any educated Athenian. Paul plants the gospel in soil their own poets had already turned. This is the entire gospel in one image: the God humanity seeks without seeing, now revealed in Christ.',
        },
        {
          kind: 'christ',
          id: 'acts17-christ-presence',
          title: 'Christ Connection — God Made Known',
          html:
            'Jesus told His disciples: "I am the way, the truth, and the life: no man cometh unto the Father, but by me" (John 14:6). The unknown God becomes known in Christ. Paul quotes the pagan poets—"In him we live, and move, and have our being"—and applies those words to the God of Scripture, the God revealed in Jesus. The God the philosophers sought is not an abstraction or a principle. He is living, present, personal, and He has a name: Jesus.',
        },
        {
          kind: 'carry',
          html:
            'You have been seeking God in a thousand places. In success, in security, in the approval of others, in your own achievements. The gospel says: stop seeking Him in false altars. Stop worship at shrines you cannot name. The God you seek is not distant. He is not hidden. In Christ, He has made Himself known, and He is nearer than your own breath.',
        },
        {
          kind: 'reflection',
          id: 'acts17-unknown',
          prompt:
            'What "unknown god" have you been seeking without knowing its name? How does it feel to discover that the seeking itself points toward Jesus?',
        },
        {
          kind: 'artwork',
          matchTitle: /areopagus|mars hill/i,
          caption: 'Acts 17:22–28 · Mars Hill',
        },
      ],
    },

    /* ─── Acts 17:29–31 — The Resurrection Mocked ──────────────────────────── */
    {
      ref: 'Acts 17:29–31',
      title: 'The Resurrection: Mocked and Believed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 29,
              spans: [
                t('Forasmuch then as we are the offspring of God, we ought not to think that the Godhead is like unto gold, or silver, or stone, graven by art and man&apos;s device.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And the times of this ignorance God winked at; but now commandeth all men every where to '),
                hg('repent', 'acts17-repent'),
                t(':'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Because he hath appointed a day, in which he will judge the world in righteousness by that man whom he hath ordained; '),
                hg('whereof he hath given assurance unto all men, in that he hath raised him from the dead', 'acts17-resurrection-proof'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts17-repent',
          html:
            'Paul calls for <em>metanoia</em>—a turning around, a complete reorientation of mind. It is not emotion or sentiment. It is a deliberate act of turning from false worship to the true God. The Athenians have been ignorant; now they are summoned to know.',
        },
        {
          kind: 'commentary',
          id: 'acts17-resurrection-proof',
          html:
            'The resurrection is Paul&apos;s evidence. God has "given assurance unto all men" of the coming judgment by raising Jesus from the dead. It is not merely a sign; it is proof that God&apos;s word is true, that His authority is absolute, and that the future He promises is certain.',
        },
        {
          kind: 'carry',
          html:
            'Repentance is not regret for the past. It is a turn toward the future—toward a God you are now beginning to know. When you encounter the truth of Christ, the question is not whether you have been good enough. The question is: will you turn? Will you repent? That turning, small as it seems, is the hinge on which everything turns.',
        },
      ],
    },

    /* ─── Acts 17:32–34 — Dionysius and Damaris ───────────────────────────── */
    {
      ref: 'Acts 17:32–34',
      title: 'Some Mocked; Some Believed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 32,
              spans: [
                t('And when they heard of the resurrection of the dead, some '),
                hg('mocked', 'acts17-greek-chleazo'),
                t(': and others said, We will hear thee again of this matter.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('So Paul departed from among them.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('Howbeit certain men clave unto him, and believed: among the which was Dionysius the Areopagite, and a woman named Damaris, and others with them.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'acts17-greek-chleazo',
          title: 'Chleazō — &ldquo;Mocked&rdquo;',
          script: 'χλευάζω',
          translit: '<strong>chleazō</strong> · to mock; to scoff; to jeer',
          description:
            'The resurrection of the dead was foolishness to Greek philosophy. Matter decays. The body dissolves. To the Stoics and Epicureans, the idea of bodily resurrection was not just false but absurd. They <em>chleazo</em>—they mocked openly. Yet others listened.',
        },
        {
          kind: 'commentary',
          id: 'acts17-dionysius-damaris',
          html:
            'Dionysius the Areopagite is named—a member of the highest court of Athens. Damaris is named—a woman of standing. These are not marginal people. They are people of authority and respect who heard Paul, questioned him, and believed. The gospel reaches into every level of Athenian society. Some mock. Some hear him again. Some cling to him and believe.',
        },
        {
          kind: 'carry',
          html:
            'You will speak the gospel to many, and some will mock. Some will postpone their decision, telling themselves they will "hear thee again of this matter." And some—perhaps fewer than you wish—will believe and cling to Jesus. Your job is to speak. What happens after is not your weight to carry. The seed has been sown in Athens.',
        },
        {
          kind: 'reflection',
          id: 'acts17-response',
          prompt:
            'When you share your faith, how do you respond to mockery? How do you continue speaking truth when the cost of speaking is ridicule?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'In him we live, and move, and have our being.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 17 · Study Guide',
  },

  hasHebrew: false,
};
