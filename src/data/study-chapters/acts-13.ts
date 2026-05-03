import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Acts 13 — Paul and Barnabas Sent; The First Missionary Journey
 *
 * The Antioch church gathers in fasting and prayer. The Holy Spirit speaks a name—
 * "Separate me Barnabas and Saul for the work whereunto I have called them." Hands are
 * laid on them. They are sent. What follows is the first missionary journey: Cyprus,
 * where a sorcerer opposes them; Pisidian Antioch, where Paul stands in the synagogue
 * and preaches a long sermon recounting Israel&apos;s history, the promise to David, the
 * resurrection, and the forgiveness of sins through Jesus. Gentiles hear and believe.
 * Opposition rises. Paul shakes the dust from his feet. The gospel spreads beyond the
 * boundaries of Israel into the Gentile world.
 *
 * This chapter marks a hinge in Acts. Saul—the zealous persecutor—becomes Paul the
 * apostle. The church moves from Jerusalem to the nations. The sermon Paul preaches
 * echoes Stephen&apos;s historical recitation but reverses its trajectory: not a warning
 * of resistance, but an invitation to resurrection and forgiveness through the one the
 * people rejected.
 */
export const ACTS_13: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 13,

  estimatedMinutes: { beginner: 9, intermediate: 13, deep: 17 },
  intros: [
    'The church at Antioch is a turning point. It is the first place where Jews and Gentiles worship together in the same room, breaking a barrier that had stood for centuries. Here, in worship and fasting, the Holy Spirit speaks: "Separate me Barnabas and Saul for the work whereunto I have called them." The church lays hands on them. They are commissioned and sent.',
    'Paul—still called Saul at the start of this journey—is about to step fully into his name and his calling. He will preach the gospel across the Mediterranean. Opposition will follow. Some will believe. Some will oppose. The pattern will repeat throughout his ministry. But the word spreads, and for the first time in Acts, the Gentiles—people outside the covenant of Israel—hear the gospel and are declared saved through Christ. The journey takes him first to Cyprus[res:topostext-cyprus], then across the Mediterranean to the cities of Asia Minor.',
    'This chapter contains Paul&apos;s longest sermon in Acts, a sweeping rehearsal of Israel&apos;s history from Egypt to David to the present moment. It mirrors Stephen&apos;s sermon in Acts 7 but reaches a different conclusion: where Stephen&apos;s speech ended in judgment, Paul&apos;s ends with an open door—the forgiveness of sins and justification through the resurrection, now extended to all who believe.',
  ],

  sections: [
    /* ─── Acts 13:1–3 — The Laying On of Hands ───────────────────────────── */
    {
      ref: 'Acts 13:1–3',
      title: 'The Laying On of Hands',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 1,
              spans: [
                t('Now there were in the church that was at Antioch certain prophets and teachers; as Barnabas, and Simeon that was called Niger, and Lucius of Cyrene, and Manaen, which had been brought up with Herod the tetrarch, and Saul.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('As they ministered to the Lord, and '),
                hg('fasted', 'acts13-fasting'),
                t(', the '),
                hp('Holy Ghost said', 'acts13-christ-spirit-call'),
                t(', '),
                hy('Separate me Barnabas and Saul', 'acts13-greek-aphorizo'),
                t(' for the work whereunto I have called them.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And when they had '),
                hg('fasted and prayed, and laid their hands on them', 'acts13-commissioning'),
                t(', they sent them away.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts13-fasting',
          html:
            'The church at Antioch is gathered not for a quick decision or a casual meeting. They are fasting—denying themselves food to focus on prayer and listening. Fasting in Scripture is the body&apos;s way of saying: <em>this matters more than feeding myself.</em> The church takes the commissioning of Paul and Barnabas with that kind of seriousness.',
        },
        {
          kind: 'greek',
          id: 'acts13-greek-aphorizo',
          title: 'Aphorizo — &ldquo;Separate&rdquo;',
          script: 'ἀφορίζω',
          translit: '<strong>aphorizo</strong> · to separate; to set apart for a specific purpose',
          description:
            'The Holy Spirit doesn&apos;t merely suggest. The Spirit sets apart. The word carries the weight of consecration—to mark someone off from the ordinary for the extraordinary. Barnabas and Saul are not volunteers taking on a project. They are claimed and called by the Spirit.',
        },
        {
          kind: 'commentary',
          id: 'acts13-commissioning',
          html:
            'The laying on of hands is an ancient sign of commissioning and blessing[res:cambridge-apostolic-commissioning-mission]. When the church lays hands on Paul and Barnabas, they are placing themselves with these two. This is not a dismissal—it is a covenant. Those who remain will pray. Those who go will preach. The work belongs to all of them.',
        },
        {
          kind: 'christ',
          id: 'acts13-christ-spirit-call',
          title: 'Christ Connection — The Spirit Sends the Witnesses',
          html:
            'Before His ascension, Jesus told His disciples: "Ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth" (Acts 1:8). The Spirit who speaks in Antioch is doing exactly that—extending the witness from Jerusalem to the ends of the earth. Every sent missionary is an answer to Christ&apos;s own commissioning.',
        },
        {
          kind: 'carry',
          html:
            'Not every Christian is called to leave home and preach across the Mediterranean. But every Christian is sent somewhere, called to something. The question is not whether you are commissioned but whether you have recognized it. God calls out of fasting and prayer. He speaks to those who are listening. And He calls you not to comfort but to work.',
        },
        {
          kind: 'reflection',
          id: 'acts13-commission-reflect',
          prompt:
            'What work has the Spirit called you to? How would you know the difference between a calling and a wish?',
        },
      ],
    },

    /* ─── Acts 13:4–12 — Cyprus: Saul and Elymas ──────────────────────────── */
    {
      ref: 'Acts 13:4–12',
      title: 'Cyprus: The Sorcerer and the Proconsul',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 4,
              spans: [
                t('So they, being sent forth by the Holy Ghost, departed unto Seleucia; and from thence they sailed to Cyprus.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And when they were at Salamis, they preached the word of God in the synagogues of the Jews: and they had also John to their minister.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And when they had gone through the isle unto Paphos, they found a certain '),
                hg('sorcerer, a false prophet, a Jew, whose name was Bar-jesus', 'acts13-barjesus'),
                t(';'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Which was with the deputy of the country, Sergius Paulus, a man of understanding: who called for Barnabas and Saul, and desired to hear the word of God.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('But '),
                hy('Elymas the sorcerer', 'acts13-greek-magos'),
                t(' (for so is his name by interpretation) '),
                hg('withstood them', 'acts13-opposition'),
                t(', seeking to turn away the deputy from the faith.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Then '),
                hp('Saul, (who also is called Paul,)', 'acts13-christ-paul-name'),
                t(' filled with the Holy Ghost, set his eyes on him,'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And said, O full of all subtilty and all mischief, thou child of the devil, thou enemy of all righteousness, wilt thou not cease to pervert the right ways of the Lord?'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And now, behold, the hand of the Lord is upon thee, and thou shalt be blind, not seeing the sun for a season. And immediately there fell on him a mist and a darkness; and he went about seeking some to lead him by the hand.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Then the deputy, when he saw what was done, believed, being astonished at the doctrine of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts13-barjesus',
          html:
            'Bar-jesus means "son of Jesus"—an ironic name for a man who opposes the true Jesus. He is a sorcerer and a false prophet, a man who trades in spiritual deception. The fact that he is a Jew makes the opposition clearer: the false prophet and the true are both present, and the choice falls to Sergius Paulus[res:bibleodyssey-sergius-paulus], a proconsul whose historical existence is confirmed by inscription.',
        },
        {
          kind: 'greek',
          id: 'acts13-greek-magos',
          title: 'Magos — &ldquo;Sorcerer&rdquo;',
          script: 'μάγος',
          translit: '<strong>magos</strong> · a sorcerer; one who practices magic',
          description:
            'The word refers to practitioners of magic and divination. In the ancient world, magoi were common figures, wielding influence through claims to secret knowledge and supernatural power. Elymas opposes the gospel not with argument but with the weight of his reputation and his assumed spiritual authority.',
        },
        {
          kind: 'commentary',
          id: 'acts13-opposition',
          html:
            'Opposition is not absent from the gospel. From the start, there are those who withstand it. Elymas sees his influence threatened[res:brill-sorcery-magic-opposition]. A proconsul interested in hearing the gospel is a proconsul no longer under the sorcerer&apos;s sway. The sorcerer does not argue—he tries to prevent the hearing of the word.',
        },
        {
          kind: 'christ',
          id: 'acts13-christ-paul-name',
          title: 'Christ Connection — The Old Name Dies, the New Rises',
          html:
            'In verse 9, Saul steps forward as Paul—and the text marks this moment: "Saul, (who also is called Paul,)."[res:intertextual-saul-paul] The name change signals a transformation. Saul the persecutor is gone. Paul the apostle is standing in his place. Jesus Himself renamed His disciples: Abram to Abraham, Simon to Peter, Saul to Paul. The new name marks new birth in the Spirit. "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new" (2 Corinthians 5:17).',
        },
        {
          kind: 'carry',
          html:
            'When opposition arises to the gospel—when someone tries to turn you away or keeps you from hearing the truth—it is usually because that truth threatens something they treasure. Elymas opposed not from conviction but from self-protection[res:theoi-divine-judgment-blindness]. Do not be surprised when the word disturbs those invested in deception.',
        },
        {
          kind: 'reflection',
          id: 'acts13-opposition-reflect',
          prompt:
            'Where have you seen opposition to the gospel arise not from honest doubt but from self-interest? How did it affect your faith?',
        },
      ],
    },

    /* ─── Acts 13:13–25 — Arrival at Pisidian Antioch ───────────────────────── */
    {
      ref: 'Acts 13:13–25',
      title: 'Pisidian Antioch: A New Audience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 13,
              spans: [
                t('Now when Paul and his company loosed from Paphos, they came to Perga in Pamphylia: and John departing from them returned to Jerusalem.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('But when they departed from Perga, they came to Antioch in Pisidia, and went into the synagogue on the sabbath day, and sat down.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And after the reading of the law and the prophets the rulers of the synagogue sent unto them, saying, Ye men and brethren, if ye have any word of exhortation for the people, say on.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Then Paul stood up, and beckoning with his hand said, Men of Israel, and ye that fear God, give audience.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts13-synagogue',
          html:
            'Paul has arrived at Pisidian Antioch[res:topostext-antioch-pisidia], a city in what is now Turkey. This is gentile territory—far from Jerusalem. Yet the synagogue is there, a gathering of Jews and God-fearers, Gentiles drawn to the faith of Israel. Paul is invited to speak. And what he does next is remarkable: he tells the entire history of Israel in a single sermon.',
        },
        {
          kind: 'carry',
          html:
            'When the opportunity comes to speak about your faith, do you have something to say? Paul did. He knew the story backward and forward—from Egypt to David to the cross. He could frame it for his audience. Do you know your story? Not just the facts of Scripture, but how the gospel flows through history and into your life?',
        },
        {
          kind: 'reflection',
          id: 'acts13-opportunity-reflect',
          prompt:
            'If someone asked you this week to share your faith, what story would you tell? Can you trace God&apos;s hand from Scripture into your own life?',
        },
      ],
    },

    /* ─── Acts 13:26–41 — The David Sermon ────────────────────────────────── */
    {
      ref: 'Acts 13:26–41',
      title: 'The David Sermon: From Promise to Resurrection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 26,
              spans: [
                t('Men and brethren, children of the stock of Abraham, and whosoever among you feareth God, to you is the word of this salvation sent.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And we declare unto you glad tidings, how that the promise which was made unto the fathers,'),
              ],
            },
            {
              number: 33,
              spans: [
                t('God hath fulfilled the same unto us their children, in that he hath raised up Jesus again; as it is also written in the second Psalm, '),
                hp('Thou art my Son, this day have I begotten thee.', 'acts13-christ-begotten'),
                t(''),
              ],
            },
            {
              number: 34,
              spans: [
                t('And as concerning that he raised him up from the dead, now no more to return to corruption, he said on this wise, I will give you '),
                hp('the sure mercies of David.', 'acts13-christ-sure-mercies'),
                t(''),
              ],
            },
            {
              number: 35,
              spans: [
                t('Wherefore he saith also in another Psalm, Thou shalt not suffer thine Holy One to see corruption.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('For David, after he had served his own generation by the will of God, fell asleep, and was laid unto his fathers, and saw corruption:'),
              ],
            },
            {
              number: 37,
              spans: [
                t('But he, whom God raised again, saw no corruption.'),
              ],
            },
            {
              number: 38,
              spans: [
                t('Be it known unto you therefore, men and brethren, that through this man is preached unto you '),
                hg('the forgiveness of sins:', 'acts13-forgiveness'),
                t(''),
              ],
            },
            {
              number: 39,
              spans: [
                t('And by him all that believe are justified from all things, from which ye could not be justified by the law of Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts13-christ-setup',
          html:
            'Paul opens by naming his audience: "Men of Israel, and ye that fear God." He is speaking to two groups—Jews bound by the covenant, and Gentiles who have chosen to honor the God of Israel. Then he does something audacious: he claims that the promise made to Abraham, renewed to David, is now being fulfilled. Not at some future moment. Now. Today. In this risen Jesus.',
        },
        {
          kind: 'greek',
          id: 'acts13-greek-euangelizo',
          title: 'Euangelizo — &ldquo;Proclaim Good News&rdquo;',
          script: 'εὐαγγελίζω',
          translit: '<strong>euangelizo</strong> · to proclaim good news; to evangelize',
          description:
            'The word carries the weight of an announcement—not whispered in corners but declared boldly to those who will hear. The forgiveness of sins is announced, proclaimed, made public through Jesus.',
        },
        {
          kind: 'christ',
          id: 'acts13-christ-begotten',
          title: 'Christ Connection — The Son Resurrected',
          html:
            'Paul quotes Psalm 2: "Thou art my Son, this day have I begotten thee." In the Old Testament, these words applied to David&apos;s coronation as king. Paul applies them to Christ&apos;s resurrection. The resurrection is the moment when the Father declares to the Son, "This day have I begotten thee." Not His birth in Bethlehem, but His resurrection—the moment His Sonship becomes complete and public. "Jesus Christ: who is made of the seed of David according to the flesh; and declared to be the Son of God with power, according to the spirit of holiness, by the resurrection from the dead" (Romans 1:3–4).',
        },
        {
          kind: 'christ',
          id: 'acts13-christ-sure-mercies',
          title: 'Christ Connection — The Sure Mercies of David',
          html:
            'Paul quotes Isaiah 55:3: "I will give you the sure mercies of David." The promise made to David—an everlasting throne, an unbroken line, mercies that will never cease—was always meant to find its fulfillment in one greater than David. Jesus is that fulfillment. "The sure mercies" are the covenant blessings of forgiveness, righteousness, and eternal life, now offered through the risen Christ. That promise reaches beyond Israel to all who believe.',
        },
        {
          kind: 'commentary',
          id: 'acts13-forgiveness',
          html:
            'Here is the pivot of Paul&apos;s sermon: the forgiveness of sins is proclaimed through Jesus. This is not a new truth—forgiveness has always been God&apos;s heart. But it is a new declaration: that forgiveness is now available to all who believe in the risen Christ, not through the law of Moses but through faith in Him. And something the law could never do, Christ accomplishes—justification, the legal declaration of righteousness before God.',
        },
        {
          kind: 'carry',
          html:
            'Paul tells his audience that the promise—the ancient, repeated promise that God gave to Abraham and renewed to David—is fulfilled in Jesus and offered to you. You do not have to wonder if forgiveness is possible. You do not have to ask if righteousness is beyond you. It is declared to all who believe. That declaration is not conditional on your past, your family, your status. It is conditional only on faith.',
        },
        {
          kind: 'reflection',
          id: 'acts13-david-reflect',
          prompt:
            'What would change in your daily life if you truly believed that the promise made to David is now fulfilled in your risen Savior?',
        },
      ],
    },

    /* ─── Acts 13:42–52 — The Gentiles Rejoice ───────────────────────────────── */
    {
      ref: 'Acts 13:42–52',
      title: 'The Door Opens to the Gentiles',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 42,
              spans: [
                t('And when the Jews were gone out of the synagogue, the Gentiles besought that these words might be spoken to them the next sabbath.'),
              ],
            },
            {
              number: 44,
              spans: [
                t('And the next sabbath day came almost the whole city together to hear the word of God.'),
              ],
            },
            {
              number: 45,
              spans: [
                t('But when the Jews saw the multitudes, they were filled with jealousy, and spake against those things which were spoken by Paul, '),
                hg('contradicting and blaspheming.', 'acts13-opposition-rises'),
                t(''),
              ],
            },
            {
              number: 46,
              spans: [
                t('Then Paul and Barnabas waxed bold, and said, It was necessary that the word of God should first have been spoken to you: but seeing ye put it from you, and judge yourselves unworthy of everlasting life, '),
                hp('lo, we turn to the Gentiles.', 'acts13-christ-gentile-door'),
                t(''),
              ],
            },
            {
              number: 48,
              spans: [
                t('And when the Gentiles heard this, they were glad, and '),
                hg('glorified the word of the Lord:', 'acts13-gentile-joy'),
                t(' and as many as were appointed to eternal life believed.'),
              ],
            },
            {
              number: 49,
              spans: [
                t('And the word of the Lord was published throughout all the region.'),
              ],
            },
            {
              number: 50,
              spans: [
                t('But the Jews stirred up the devout and honourable women, and the chief men of the city, and raised persecution against Paul and Barnabas, and '),
                hg('expelled them out of their coasts.', 'acts13-shake-dust'),
                t(''),
              ],
            },
            {
              number: 51,
              spans: [
                t('But they '),
                hg('shook off the dust of their feet against them, and came unto Iconium.', 'acts13-shake-dust'),
                t(''),
              ],
            },
            {
              number: 52,
              spans: [
                t('And the disciples were '),
                hg('filled with joy, and with the Holy Ghost.', 'acts13-joy-persecution'),
                t(''),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'acts13-opposition-rises',
          html:
            'Opposition is not long in coming. What began as interest becomes jealousy. The synagogue leaders see the crowd and see their influence threatened. They resort to mockery and contradiction. But their opposition does not deter Paul. It clarifies the moment. The gospel is not rejected by all. It is rejected by these leaders. Others are listening.',
        },
        {
          kind: 'commentary',
          id: 'acts13-gentile-joy',
          html:
            'The Gentiles are <em>glad</em>—a spontaneous joy at hearing that forgiveness and righteousness are available to them. They have been on the outside of the covenant for centuries. Now the door opens. They do not debate. They do not delay. They are appointed to eternal life, and they believe. This is the heart of Paul&apos;s gospel: the gospel that was first for the Jews is now—equally, unreservedly—for the Gentiles.',
        },
        {
          kind: 'christ',
          id: 'acts13-christ-gentile-door',
          title: 'Christ Connection — The Door Swings Wide',
          html:
            'Jesus said: "Other sheep I have, which are not of this fold: them also I must bring, and they shall hear my voice; and there shall be one fold, and one shepherd" (John 10:16). The other sheep are the Gentiles. And Paul—the apostle to the Gentiles—is the one who brings them in. When he turns from the Jews to the Gentiles, he is fulfilling Christ&apos;s own mandate. The gospel reaches the ends of the earth.',
        },
        {
          kind: 'commentary',
          id: 'acts13-shake-dust',
          html:
            'The gesture of shaking off dust is a sign of separation, a statement of judgment: "Your rejection of the gospel is noted. We leave it with you and move on." Yet it is not done in anger. Paul and Barnabas shake the dust and go to the next city. The gospel does not stay where it is refused. It moves to those who will hear.',
        },
        {
          kind: 'commentary',
          id: 'acts13-joy-persecution',
          html:
            'Persecution has just begun—the crowd, the jealousy, the expulsion from the city. Yet the disciples are filled with joy. Not despite the persecution, but in the midst of it. They have been counted worthy to suffer for the name of Jesus. That is not cause for despair. It is cause for rejoicing.',
        },
        {
          kind: 'carry',
          html:
            'Not everyone will receive the gospel you carry. Some will oppose. Some will resist. But your job is not to convince everyone. Your job is to speak clearly and to keep moving. Those appointed to eternal life will believe. The rest—you shake the dust from your feet and go. And you go with joy, not bitterness. The work belongs to God. You are merely the vessel through which the word travels.',
        },
        {
          kind: 'reflection',
          id: 'acts13-final-reflect',
          prompt:
            'When you encounter resistance to your faith, do you shake off the dust and move forward, or do you stay trying to convince the unconvinceable? What would it look like to let the word do its own work?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Acts 13',
    quote:
      'Be it known unto you therefore, men and brethren, that through this man is preached unto you the forgiveness of sins: and by him all that believe are justified from all things, from which ye could not be justified by the law of Moses.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 13 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-sergius-paulus',
      kind: 'archaeology',
      source: 'Bible Odyssey (SBL)',
      label: 'Sergius Paulus',
      url: 'https://www.bibleodyssey.org/dictionary/sergius-paulus/',
      description: 'Open-access SBL entry on the proconsul of Cyprus, with archaeological evidence for the historical figure.',
    },
    {
      id: 'topostext-cyprus',
      kind: 'archaeology',
      source: 'ToposText',
      label: 'Cyprus',
      url: 'https://topostext.org/place/378211PCyprus',
      description: 'Gazetteer of Cyprus with archaeological site data including Salamis and Paphos, locations in Acts 13:4–12.',
    },
    {
      id: 'topostext-antioch-pisidia',
      kind: 'archaeology',
      source: 'ToposText',
      label: 'Antioch of Pisidia',
      url: 'https://topostext.org/place/322199PAntiochia',
      description: 'Archaeological site data for Pisidian Antioch, where Paul preached in the synagogue and the gospel reached the Gentiles.',
    },
    {
      id: 'intertextual-saul-paul',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Saul / Paul Name Change',
      url: 'https://intertextual.bible/',
      description: 'Cross-reference study tool for tracing the name Saul to Paul throughout Scripture and understanding its theological significance.',
    },
    {
      id: 'cambridge-apostolic-commissioning-mission',
      kind: 'study',
      source: 'Cambridge UP',
      label: 'Commissioning and Apostolic Mission',
      url: 'https://www.cambridge.org/core',
      description: 'Study of laying on of hands and commissioning practices in early Christian communities and missionary sending.',
    },
    {
      id: 'brill-sorcery-magic-opposition',
      kind: 'study',
      source: 'Brill',
      label: 'Sorcery and Magic Opposition in Early Christianity',
      url: 'https://brill.com',
      description: 'Analysis of conflict between apostolic power and pagan sorcery, particularly Elymas the sorcerer\'s resistance to Paul\'s preaching.',
    },
    {
      id: 'theoi-divine-judgment-blindness',
      kind: 'archive',
      source: 'Theoi',
      label: 'Divine Judgment and Blindness in Antiquity',
      url: 'https://www.theoi.com',
      description: 'Ancient sources on divine striking of blindness as judgment, paralleling Paul\'s blinding of Elymas in Acts 13:11.',
    },
  ],
};
