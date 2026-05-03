import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Acts 21 — Paul's arrival in Jerusalem; warnings from prophets; the Spirit confirms bonds and afflictions
 *
 * Paul sails toward Jerusalem despite every voice urging him to stop. Disciples in Tyre and Caesarea
 * beg him not to go. Philip&apos;s daughters prophesy his suffering. Agabus takes Paul&apos;s belt and binds
 * himself, saying: "So shall the Jews at Jerusalem bind the man that owneth this girdle." But Paul
 * answers with the chapter&apos;s hinge: "What mean ye to weep and to break mine heart? for I am ready
 * not to be bound only, but also to die at Jerusalem for the name of the Lord Jesus." The disciples
 * respond: "The will of the Lord be done." Paul arrives in Jerusalem. James greets him warmly. But
 * the temple uproar erupts—Jews from Asia accuse him of teaching against the law. The mob nearly kills him.
 * A Roman chief captain arrives, binds him with chains, and carries him up the castle stairs. Paul asks
 * permission to speak, and the chapter closes with his question: "May I speak unto thee?"
 */
export const ACTS_21: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 21,

  estimatedMinutes: { 5: 11, 10: 21, 15: 27 },
  intros: [
    'Paul sails toward Jerusalem knowing the Spirit has already told him in every city that bonds and afflictions await him there. He cannot turn back. Every prophet, every disciple who hears of his intention begs him to stay away. But Paul has counted the cost and found that following Christ is worth it. He will not be dissuaded by tears or prophecy. The theme of Acts 21 is the paradox at the heart of the gospel: a man can be bound in chains and still be perfectly free, because his allegiance runs deeper than anything the world can do to his body.',
    'Along the way, the Spirit confirms his path through every voice he hears. In Tyre, disciples say through the Spirit: "Go not up to Jerusalem" (21:4). Philip&apos;s daughters prophesy his suffering (21:9). Agabus takes Paul&apos;s belt and says the Jews will bind him (21:11). Yet Paul presses on. The disciples finally say, "The will of the Lord be done," and they understand: Paul has heard from the Spirit too, and his obedience is not stubbornness but faith. What unfolds in Jerusalem is the living out of that faith—a man betrayed by his own people, rescued by a pagan authority, carried into captivity, yet asking permission to speak the gospel to the very crowd that wanted to kill him.',
  ],

  opener: {
    matchTitle: /paul|jerusalem|temple|agabus|prophet/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── Acts 21:1–6 — Tyre and the Spirit&apos;s Warning ─────────────────── */
    {
      ref: 'Acts 21:1–6',
      title: 'Tyre: The Spirit Speaks Against the Path',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(
              1,
              t('And when we were gotten away from them, and had launched, we came with a straight course unto Coos, and the day following unto Rhodes, and from thence unto Patara:'),
            ),
            verse(
              2,
              t('And finding a ship sailing over unto Phenicia, we went aboard, and set forth.'),
            ),
            verse(
              3,
              t('Now when we had discovered Cyprus, we left it on the left hand, and sailed into Syria, and '),
              hg('landed at Tyre', 'acts21-tyre'),
              t(': for there the ship was to unlade her burden.'),
            ),
            verse(
              4,
              t('And '),
              hy('finding disciples, we tarried there seven days', 'acts21-finding-disciples'),
              t(': and '),
              hp('they said to Paul through the Spirit, That he should not go up to Jerusalem', 'acts21-spirit-warning'),
              t('.'),
            ),
            verse(
              5,
              t('And when we had accomplished those days, we departed and went our way; and they all brought us on our way, with wives and children, till we were out of the city: and we kneeled down on the shore, and prayed.'),
            ),
            verse(
              6,
              t('And when we had taken our leave one of another, we took ship; and they returned home again.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts21-tyre',
          html:
            'Tyre was one of the great merchant cities—a place of busy trade and wealth. But Paul has no time for sightseeing. The ship needs to unload cargo, and Paul will spend seven days there. Seven days is enough time to find the disciples and for a deep knowing to grow between Paul and them.',
        },
        {
          kind: 'commentary',
          id: 'acts21-finding-disciples',
          html:
            'Paul finds the disciples in Tyre—likely the fruit of Philip&apos;s evangelism in Samaria (Acts 8:40) or later church-planting. Tyre is on the way, but not essential to Paul&apos;s route. He chooses to stop and gather with them. Community over schedule. Fellowship over speed.',
        },
        {
          kind: 'greek',
          id: 'acts21-parakaleo',
          title: 'Parakaleo — Exhort; Beseech; Comfort',
          script: 'παρακαλέω',
          translit: '<strong>parakaleo</strong> · to call alongside; to exhort; to encourage; to beg',
          description:
            'The disciples speak to Paul "through the Spirit"—meaning the Spirit of God is bearing witness through their lips. They are not contradicting God; they are speaking God&apos;s own word. Yet Paul does not obey. He has heard the Spirit&apos;s answer to this too.',
        },
        {
          kind: 'commentary',
          id: 'acts21-spirit-warning',
          html:
            'The Spirit says: "Do not go up to Jerusalem." The words are clear. The speakers are faithful. The intent is pure—the disciples are trying to save Paul&apos;s life. Yet Paul receives the word and then rejects the conclusion. He understands something the disciples have not fully grasped: the Spirit&apos;s warning is not always a command to turn back. Sometimes the Spirit warns so you can walk forward with your eyes open, ready to meet what comes.',
        },
        {
          kind: 'carry',
          html:
            'You will have people in your life—wise, faithful, Spirit-filled people—who will beg you not to do something you feel called to do. They will weep. They will cite Scripture. They will make a compelling case. But if the Spirit in you has borne witness to a calling, do not mistake their love for God&apos;s will. Sometimes a warning from a friend is a test of your obedience. Press forward with your eyes open and your heart grateful for their care, but do not let their fear write the end of your story.',
        },
        {
          kind: 'reflection',
          id: 'acts21-tyre-reflect',
          prompt:
            'Has anyone ever begged you not to do something you felt called to? How did you sort between their legitimate concern and God&apos;s direction for you?',
        },
        {
          kind: 'artwork',
          matchTitle: /tyre|paul|journey|sailing|ship/i,
          caption: 'Acts 21:1–6 · Tyre and the Spirit&apos;s Warning',
        },
      ],
    },

    /* ─── Acts 21:7–9 — Caesarea and Philip&apos;s Daughters ────────────── */
    {
      ref: 'Acts 21:7–9',
      title: 'Caesarea: The Prophesying Daughters',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(
              7,
              t('And when we had finished our course from Tyre, we came to Ptolemais, and saluted the brethren, and abode with them one day.'),
            ),
            verse(
              8,
              t('And the next day we that were with Paul departed, and came unto Caesarea: and we entered into the house of Philip the '),
              hg('evangelist', 'acts21-philip-evangelist'),
              t(', which was one of the seven; and '),
              hy('abode with him', 'acts21-tarrying'),
              t('.'),
            ),
            verse(
              9,
              t('And the same man had '),
              hy('four daughters, virgins, which did prophesy', 'acts21-daughters-prophesy'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts21-philip-evangelist',
          html:
            'Philip is the same man we met in Acts 6 and 8—one of the seven chosen to distribute food to widows. He became an evangelist, fled Jerusalem during Stephen&apos;s martyrdom, preached in Samaria, baptized the Ethiopian eunuch on a desert road, and somehow ended up in Caesarea. His home became a place where apostles were welcomed and the gospel was spoken freely.',
        },
        {
          kind: 'commentary',
          id: 'acts21-tarrying',
          html:
            'Paul and his companions stay in Philip&apos;s house. Days pass. It is a place of rest and fellowship before the storm. Philip knows Paul&apos;s heart and stakes in Jerusalem. His four daughters know it too. They are not casual acquaintances. There is time enough for real knowing to develop.',
        },
        {
          kind: 'commentary',
          id: 'acts21-daughters-prophesy',
          html:
            'Philip&apos;s four daughters prophesy—they speak the word of God. This is remarkable in any tradition. They are women. They are young. Yet the Spirit of God speaks through them just as He speaks through the prophets. Their prophecy is not recorded here; we will hear it in the form of Agabus&apos; prophecy next. But their voices matter. They are part of the chorus warning Paul.',
        },
        {
          kind: 'greek',
          id: 'acts21-propheteuo',
          title: 'Propheteuo — Prophesy; Speak Forth',
          script: 'προφητεύω',
          translit: '<strong>propheteuo</strong> · to prophesy; to speak the word of God; to declare what is to come',
          description:
            'To prophesy is not primarily to predict the future, though it can include that. It is to speak God&apos;s word into the present moment. Philip&apos;s daughters are speakers of the word, carriers of the Spirit&apos;s voice, just as the prophets of Israel were.',
        },
        {
          kind: 'carry',
          html:
            'There is something quieter in this scene than in Tyre&apos;s tearful goodbye. Paul stays with Philip&apos;s family. The daughters prophesy. The word of God is spoken. And Paul hears it. He does not argue. He does not debate. He sits in a house where the Spirit is moving, and he listens. Sometimes the most faithful thing you can do is stay still, sit in community, and let God&apos;s word wash over you. Not everything requires a decision. Some things just require presence.',
        },
        {
          kind: 'reflection',
          id: 'acts21-caesarea-reflect',
          prompt:
            'Where is there a home or a community where you can simply sit and let God&apos;s word speak? What would change if you made that a regular practice?',
        },
      ],
    },

    /* ─── Acts 21:10–14 — Agabus Binds Himself ──────────────────────────── */
    {
      ref: 'Acts 21:10–14',
      title: 'Agabus: The Living Prophecy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(
              10,
              t('And as we tarried there many days, there came down from Judaea a certain prophet named '),
              hg('Agabus', 'acts21-agabus'),
              t('.'),
            ),
            verse(
              11,
              t('And when he was come unto us, he took Paul&apos;s '),
              hy('girdle, and bound his own hands and feet', 'acts21-agabus-action'),
              t(', and said, '),
              hp('Thus saith the Holy Ghost, So shall the Jews at Jerusalem bind the man that owneth this girdle, and shall deliver him into the hands of the Gentiles', 'acts21-agabus-word'),
              t('.'),
            ),
            verse(
              12,
              t('And when we heard these things, both we and they of that place '),
              hg('besought him not to go up to Jerusalem', 'acts21-besought'),
              t('.'),
            ),
            verse(
              13,
              t('Then Paul answered, '),
              hg('What mean ye to weep and to break mine heart', 'acts21-paul-answer'),
              t('? for I am ready not to be bound only, but also to die at Jerusalem for the name of the Lord Jesus.'),
            ),
            verse(
              14,
              t('And when he would not be persuaded, we ceased, and said, '),
              hg('The will of the Lord be done', 'acts21-thy-will'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts21-agabus',
          html:
            'Agabus is a prophet we have met before (Acts 11:28), where he predicted a great famine in Judaea in the days of Claudius. He is a man who speaks God&apos;s word with accuracy. His presence in Caesarea is no accident. He has come to bear witness to what Paul already knows in his spirit.',
        },
        {
          kind: 'commentary',
          id: 'acts21-agabus-action',
          html:
            'Agabus does not simply announce the prophecy. He enacts it. He takes Paul&apos;s belt—Paul&apos;s own possession, the thing that belongs to Paul—and binds himself with it. This is street prophecy, embodied prophecy. Everyone watching understands instantly: what is coming to Paul is not vague. It is specific. It is soon.',
        },
        {
          kind: 'greek',
          id: 'acts21-zone',
          title: 'Zone — Girdle; Belt',
          script: 'ζώνη',
          translit: '<strong>zone</strong> · a girdle; a belt; a piece of clothing worn around the waist',
          description:
            'The girdle was not just decoration—it was functional, a place to keep money and tools. Paul&apos;s zone is the symbol of his person, his property, his identity. When Agabus binds himself with it, he is saying: you, Paul, will be bound.',
        },
        {
          kind: 'commentary',
          id: 'acts21-agabus-word',
          html:
            'The prophecy is exact: the Jews will bind Paul, and they will deliver him to the Gentiles. This is precisely what will happen. The Jewish mob will seize him, the Roman authority will intervene and arrest him, and he will be delivered from the hands of his own people into the hands of Rome. The Spirit knows the future perfectly. The Spirit has told Paul before he ever left Antioch. Yet He tells him again, through Agabus, so there is no ambiguity. Paul is walking into this with his eyes wide open.',
        },
        {
          kind: 'commentary',
          id: 'acts21-besought',
          html:
            'The company beseeches Paul. Not just the Tyrian disciples now, but the travelers with Paul, the people of Caesarea, all united in one voice: do not go. The pressure is enormous. The logic is sound. The love is genuine. Yet Paul will not bend.',
        },
        {
          kind: 'commentary',
          id: 'acts21-paul-answer',
          html:
            'Paul&apos;s answer breaks open the chapter. "What mean ye to weep and to break mine heart?" He is not unmoved. He is not cold. Their tears genuinely wound him. But his calling wounds him more. The two compete, and his calling wins. This is what it looks like when a man has really given everything to Christ—even the tears of people he loves cannot pull him away.',
        },
        {
          kind: 'carry',
          html:
            'When the time comes that following Jesus will cost you something—your comfort, your approval, your safety, or the comfort and approval of people you love—you will need to know that the cost is worth it. Paul does not make this decision on the spot. He has had years to count it. Days to pray about it. The prophecies confirm it. And when the moment arrives, he knows: "I am ready." If you are following Christ, the question is not <em>if</em> the cost will come, but whether you have already counted it and found Him worth it.',
        },
        {
          kind: 'commentary',
          id: 'acts21-thy-will',
          html:
            'This is the hinge of the chapter. After Paul speaks his resolve, something shifts in those around him. They stop arguing. They stop beseeching. Instead, they say: "The will of the Lord be done." They have heard from Paul that he has heard from God. They stop trying to rewrite his story. They surrender to it. This is what it looks like when a church learns to say yes to the Spirit, even when it means losing someone they love.',
        },
        {
          kind: 'christ',
          id: 'acts21-christ-jerusalem',
          title: 'Christ Connection — Setting the Face Toward Jerusalem',
          html:
            'Luke tells us that Jesus "set his face to go to Jerusalem" (Luke 9:51), knowing He would suffer there. Every step from Caesarea Philippi onward was a step toward the cross. Paul sets his face the same way—not toward the cross, but toward the same Jerusalem, toward suffering at the hands of his own people, toward a trial before a Gentile authority. The pattern echoes: the apostle follows the Teacher into the very city that will reject them both.',
        },
        {
          kind: 'reflection',
          id: 'acts21-agabus-reflect',
          prompt:
            'What is the hardest calling God has asked of you? How did you know you were willing to pay the price?',
        },
        {
          kind: 'artwork',
          matchTitle: /agabus|prophecy|bound|belt|girdle/i,
          caption: 'Acts 21:10–14 · Agabus Binds Himself',
        },
      ],
    },

    /* ─── Acts 21:15–26 — Up to Jerusalem; James and the Four Men ────────── */
    {
      ref: 'Acts 21:15–26',
      title: 'James: The Vow and the Temple',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(
              15,
              t('And after those days we took up our carriages, and went up to Jerusalem.'),
            ),
            verse(
              16,
              t('And there went with us also certain of the disciples of Caesarea, and brought with them one Mnason of Cyprus, an old disciple, with whom we should lodge.'),
            ),
            verse(
              17,
              t('And when we were come to Jerusalem, the brethren received us gladly.'),
            ),
            verse(
              18,
              t('And the day following Paul went in with us unto James; and all the elders were present.'),
            ),
            verse(
              19,
              t('And when he had saluted them, he declared particularly what things God had wrought among the Gentiles by his ministry.'),
            ),
            verse(
              20,
              t('And when they heard it, they glorified the Lord, and said unto him, Thou seest, brother, how many thousands of Jews which believe; and they are all '),
              hg('zealous of the law', 'acts21-zealous-law'),
              t(':'),
            ),
            verse(
              21,
              t('And they are informed of thee, that thou teachest all the Jews which are among the Gentiles to forsake Moses, saying that they ought not to circumcise their children, neither to walk after the customs.'),
            ),
            verse(
              22,
              t('What is it therefore? the multitude must needs come together: for they will hear that thou art come.'),
            ),
            verse(
              23,
              t('Do therefore this that we say to thee: We have four men which have a vow on them;'),
            ),
            verse(
              24,
              t('Them take, and purify thyself with them, and bear their charges with them, that they may '),
              hy('shave their heads', 'acts21-shave-heads'),
              t(': and all may know that those things, whereof they were informed concerning thee, are nothing; but that thou thyself also '),
              hg('walkest orderly, and keepest the law', 'acts21-orderly-law'),
              t('.'),
            ),
            verse(
              25,
              t('As touching the Gentiles which believe, we have written a letter that they observe no such thing, save only that they keep themselves from things offered to idols, and from blood, and from strangled, and from fornication.'),
            ),
            verse(
              26,
              t('Then Paul took the men, and the next day purifying himself with them entered into the temple, to signify the accomplishment of the days of purification, until that an offering should be offered for every one of them.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts21-jerusalem-arrival',
          html:
            'Paul arrives in Jerusalem. The brethren receive him gladly. There is no coldness here, no rejection. James and the elders are delighted to hear of what God has done among the Gentiles through Paul&apos;s ministry. But there is also a problem brewing. The thousands of Jewish believers are zealous for the law. They have heard that Paul teaches Jews in the Diaspora to abandon Moses and the circumcision. The rumor is both true and false—Paul teaches grace over legalism, but he has not said Jews should not circumcise. Perception, in a crowd, becomes reality.',
        },
        {
          kind: 'commentary',
          id: 'acts21-zealous-law',
          html:
            'Zealous for the law—they are not hostile yet, but they are protective. The law is their heritage, their identity, the thing that marks them as God&apos;s people. If Paul&apos;s teaching is seen as an attack on the law, they will rise up to defend it. James and the elders understand this. They love Paul, but they also know their people.',
        },
        {
          kind: 'commentary',
          id: 'acts21-shave-heads',
          html:
            'Under Jewish law, a man could take a Nazarite vow—a temporary vow of consecration to the Lord, ending in the temple with a sacrifice and the shaving of the head. Paul agrees to sponsor four men through their vow. This is a statement. He is saying: I honor the law. I honor our Jewish heritage. I am not your enemy. Watch me in the temple.',
        },
        {
          kind: 'greek',
          id: 'acts21-hagnizo',
          title: 'Hagnizo — Purify; Consecrate',
          script: 'ἁγνίζω',
          translit: '<strong>hagnizo</strong> · to purify; to consecrate; to make holy',
          description:
            'Paul purifies himself along with the men. He participates fully in the Nazarite vow ceremony. This is not theater or dishonesty—Paul is Jewish and can authentically participate in a Jewish custom. But it is also a peace offering, a statement that he is not against the law or the people who keep it.',
        },
        {
          kind: 'commentary',
          id: 'acts21-orderly-law',
          html:
            'Paul is asked to demonstrate that he walks orderly and keeps the law. The request is political, a way to defuse the rumors and calm the crowd. Paul agrees. He will enter the temple, sponsor the vow, submit himself to the ritual, and in doing so, he will testify that the rumors are false. What he does not know is that the ritual will be interrupted, and his walk in the temple will not end in peace.',
        },
        {
          kind: 'carry',
          html:
            'Paul is willing to do something costly—to spend his own money, to participate in a ritual, to make a statement—all for the sake of unity and witness. He is not so committed to his own freedom that he cannot submit to customs for the sake of peace. There is a wisdom here: knowing which battles are about the gospel and which are about ego, and being willing to lay down your preferences when love demands it. Where can you make space today, not because you were wrong, but because unity matters?',
        },
        {
          kind: 'reflection',
          id: 'acts21-james-reflect',
          prompt:
            'When have you had to defend yourself against a misunderstanding? What would it look like to respond with actions that speak louder than words?',
        },
      ],
    },

    /* ─── Acts 21:27–32 — Men of Israel, Help! ─────────────────────────── */
    {
      ref: 'Acts 21:27–32',
      title: 'The Uproar in the Temple',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(
              27,
              t('And when the seven days were almost finished, the Jews which were from Asia, when they saw him in the temple, stirred up all the people, and laid hands on him,'),
            ),
            verse(
              28,
              t('Crying out, Men of Israel, help: This is the man, that '),
              hg('teacheth all men everywhere against the people, and the law, and this place', 'acts21-charge'),
              t(': and further brought Greeks also into the temple, and hath polluted this holy place.'),
            ),
            verse(
              29,
              t('(For they had seen before with him in the city Trophimus an Ephesian, whom they supposed Paul had brought into the temple.)'),
            ),
            verse(
              30,
              t('And all the city was moved, and the people ran together: and they took Paul, and '),
              hg('drew him out of the temple', 'acts21-dragged-out'),
              t(': and forthwith the gates were shut.'),
            ),
            verse(
              31,
              t('And as they went about to '),
              hg('kill him, tidings came unto the chief captain of the band', 'acts21-chief-captain'),
              t(', that all Jerusalem was in an uproar.'),
            ),
            verse(
              32,
              t('Who immediately took soldiers and centurions, and ran down unto them: and when they saw the chief captain and the soldiers, they left off beating Paul.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts21-charge',
          html:
            'The accusation is explosive: Paul teaches against the people, against the law, against the temple itself. The charge is both personal and theological—it strikes at the heart of Jewish identity. The temple is where God&apos;s presence dwells. The law is God&apos;s word. To be accused of teaching against them is to be accused of teaching against God Himself. The crowd does not need to hear more. They hear the charge and they erupt.',
        },
        {
          kind: 'commentary',
          id: 'acts21-dragged-out',
          html:
            'Paul is dragged out of the temple and the gates slam shut behind him. He is stripped of the sanctuary. The city that was supposed to receive him has instead rejected him. The Jewish believers who were supposed to be comforted by his presence in the temple have instead abandoned him to the mob. Paul has become a man with no people, no home, no shelter.',
        },
        {
          kind: 'greek',
          id: 'acts21-dakryo',
          title: 'Dakryo — Weep; Shed Tears',
          script: 'δακρύω',
          translit: '<strong>dakryo</strong> · to weep; to shed tears; to cry',
          description:
            'Paul wept at Miletus when he said goodbye to the Ephesian elders, knowing he would see their faces no more. Now his own people, the Jews of Jerusalem, are trying to kill him. The tears the disciples shed in Tyre and Caesarea were prophetic. They knew what was coming. Paul knew it too. But he came anyway.',
        },
        {
          kind: 'commentary',
          id: 'acts21-chief-captain',
          html:
            'The Roman chief captain of the Jerusalem garrison hears the commotion. He does not ask questions. He brings soldiers. He descends on the mob. The irony is stark: Paul is rescued by the very Gentile authority that will later imprison him. For this moment, Rome is his shield. The Jewish mob is stopped. The beating ceases. But Paul&apos;s freedom is over.',
        },
        {
          kind: 'christ',
          id: 'acts21-christ-trial',
          title: 'Christ Connection — Rejected by His Own',
          html:
            'John 1:11 says of Jesus: "He came unto his own, and his own received him not." Paul comes to his own people in Jerusalem, and his own people seize him and seek to kill him. The apostle walks the path of the Teacher. Rejected by the nation he came to save, delivered into the hands of pagan authority for a trial he cannot escape. This is the cost of faithfulness in a people that has not yet received the gospel.',
        },
        {
          kind: 'carry',
          html:
            'You may find yourself in a moment where everything you warned people about comes true, but in the midst of it, you are alone. The very people you came to help turn against you. Your words are twisted. Your presence is seen as a threat. You are dragged out and left to the mob. Do not let that moment be the end of your faith. Paul is beaten but not broken. He is arrested but not silenced. The worst that can happen is not the worst thing—losing your faith would be. Hold fast.',
        },
        {
          kind: 'reflection',
          id: 'acts21-uproar-reflect',
          prompt:
            'When have you been misunderstood or rejected despite your best intentions? How did you know whether to stay or to go?',
        },
        {
          kind: 'artwork',
          matchTitle: /temple|jerusalem|paul|mob|uproar|arrest/i,
          caption: 'Acts 21:27–32 · The Uproar in the Temple',
        },
      ],
    },

    /* ─── Acts 21:33–39 — Carried Up the Stairs ──────────────────────────── */
    {
      ref: 'Acts 21:33–39',
      title: 'Bound with Chains; Carried Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(
              33,
              t('Then the chief captain came near, and took him, and '),
              hg('commanded him to be bound with two chains', 'acts21-two-chains'),
              t('; and demanded who he was, and what he had done.'),
            ),
            verse(
              34,
              t('And some cried one thing, some another, among the multitude: and when he could not know the certainty for the tumult, he commanded him to be carried into the castle.'),
            ),
            verse(
              35,
              t('And when he came upon the stairs, so it was, that he was borne of the soldiers because of the violence of the people.'),
            ),
            verse(
              36,
              t('For the multitude of the people followed after, crying, Away with him.'),
            ),
            verse(
              37,
              t('And as Paul was to be led into the castle, he said unto the chief captain, May I speak unto thee? Who said, Canst thou speak Greek?'),
            ),
            verse(
              38,
              t('Art not thou that Egyptian, which before these days madest an uproar, and leddest out into the wilderness four thousand men that were murderers?'),
            ),
            verse(
              39,
              t('But Paul said, I am a man which am a Jew of Tarsus, a city in Cilicia, a citizen of no mean city: and, I beseech thee, '),
              hp('suffer me to speak unto the people', 'acts21-speak-reflect'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts21-two-chains',
          html:
            'Paul is bound with two chains. This is the fulfillment of Agabus&apos; prophecy: the Jews have bound him, and he is now being delivered into the hands of the Gentiles. Yet something crucial has happened: the Roman authority has intervened. The mob cannot kill him now. The law of Rome protects him, even in captivity. He is bound, but he is not dead. The worse thing did not happen.',
        },
        {
          kind: 'greek',
          id: 'acts21-desmos',
          title: 'Desmos — Bond; Chain; Imprisonment',
          script: 'δεσμός',
          translit: '<strong>desmos</strong> · a bond; a chain; a fetter; imprisonment',
          description:
            'Paul is now a prisoner—a man bound by Rome. But he has faced this before (Acts 16, Philippi). He knows how to conduct himself as a captive. He knows that a man can be in chains and still be free in spirit. The chains fulfill the prophecy, but they do not silence him.',
        },
        {
          kind: 'commentary',
          id: 'acts21-carried',
          html:
            'Paul is carried up the castle stairs by the soldiers, borne on their shoulders because the crowd is too violent. He is helpless, at the mercy of Rome. The man who was free to walk through the Mediterranean, free to plant churches, free to speak in synagogues and marketplaces—that freedom is gone. What remains is something different: the freedom of a man with nothing left to lose.',
        },
        {
          kind: 'commentary',
          id: 'acts21-away-with-him',
          html:
            'The crowd cries, "Away with him!"—the same cry that will echo in another Jerusalem, at another trial, centuries later. The words are generic, but the rhythm is the same. A people rejecting someone they once hoped in. A mob consuming a man they fear.',
        },
        {
          kind: 'commentary',
          id: 'acts21-chief-captain-greek',
          html:
            'The chief captain is surprised when Paul speaks to him in Greek. He assumes Paul is an illiterate Egyptian, a terrorist who led a failed rebellion. But Paul reveals himself: educated, a citizen of Tarsus, from the Cilician province. He is not who the captain thought. He is a man of learning, a man with standing. The captain is intrigued. He allows Paul to speak.',
        },
        {
          kind: 'carry',
          html:
            'In the moment when everything has been taken from you—your freedom, your reputation, the respect of your own people—you still have your voice. Paul asks permission to speak. The chief captain grants it, not out of pity, but out of curiosity. He wants to know who this man is. And Paul, bound in chains, will speak the gospel. This is the test: when you have nothing left but your words, what will you say? Will you defend yourself? Complain? Or will you speak Christ?',
        },
        {
          kind: 'reflection',
          id: 'acts21-chains-reflect',
          prompt:
            'When you are stripped of power, status, and freedom, what remains? What would you say if that were all you had left to give?',
        },
      ],
    },

    /* ─── Acts 21:40 — "May I Speak Unto Thee?" ───────────────────────── */
    {
      ref: 'Acts 21:40',
      title: 'Permission to Speak',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(
              40,
              t('And when he had given him licence, Paul stood on the stairs, and '),
              hy('beckoned with the hand unto the people', 'acts21-gesture'),
              t('. And when there was made a great silence, he spake unto them in the '),
              hg('Hebrew tongue, saying', 'acts21-hebrew-speech'),
              t(','),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts21-gesture',
          html:
            'Paul raises his hand—a gesture asking for attention, for silence, for a moment. The crowd quiets. They are curious now. Who is this man in chains? Why would the Roman captain allow him to speak? What does he have to say? The gesture itself is a kind of speech: the word of a man asking to be heard.',
        },
        {
          kind: 'commentary',
          id: 'acts21-hebrew-speech',
          html:
            'Paul speaks in Hebrew—not Greek, the lingua franca, but the language of his people, the language of the temple. He is speaking to the Jews of Jerusalem in their own tongue. He is not a stranger. He is one of them. He is their brother. And he will tell them why.',
        },
        {
          kind: 'greek',
          id: 'acts21-sige',
          title: 'Sige — Silence; Stillness',
          script: 'σιγή',
          translit: '<strong>sige</strong> · silence; quietness; a moment of stillness',
          description:
            'When Paul raises his hand, there is a great silence. The mob that was crying "Away with him!" falls quiet. The power of silence is the power of a single voice that has something to say. Paul speaks into that silence, and the whole of Jerusalem holds its breath.',
        },
        {
          kind: 'commentary',
          id: 'acts21-testimony',
          html:
            'Acts 22 will give us Paul&apos;s speech. He will tell the story of his persecution of Christians, his encounter with Jesus on the Damascus road, his blindness and healing, his call to minister to the Gentiles. He will speak his testimony—the gospel made personal, the gospel lived in a single life. And he will speak it from the stairs of a Roman castle, bound in chains, to a people who want him dead.',
        },
        {
          kind: 'christ',
          id: 'acts21-christ-witness',
          title: 'Christ Connection — Witness in Chains',
          html:
            'Peter and John stood before the Sanhedrin and said, "We cannot but speak the things which we have seen and heard" (Acts 4:20). Paul, bound on the stairs of the Jerusalem fortress, stands in that same tradition. His chains do not silence him. His trial is his platform. His persecution is his opportunity. The gospel is not something he can stop speaking about, because it has become the truest thing about him.',
        },
        {
          kind: 'carry',
          html:
            'Your story matters. The gospel made flesh in your life, in your choices, in the way you respond when everything goes wrong—that story is powerful. Someone in your life is in a position to hear it precisely because you have suffered, because you have failed, because you have been misunderstood. The chief captain is listening not because Paul is successful, but because Paul is real. Do not wait for the perfect moment. When you are given permission to speak—whether it is in chains or in freedom—speak the truth you have been given.',
        },
        {
          kind: 'reflection',
          id: 'acts21-speak-reflect',
          prompt:
            'What is your testimony? The one thing about Jesus that is so true for you that you could say it even if no one else believed?',
        },
        {
          kind: 'artwork',
          matchTitle: /paul|stairs|speak|hand|gesture|silence/i,
          caption: 'Acts 21:40 · Permission to Speak',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Acts 21',
    quote:
      'The disciples ceased weeping and said, "The will of the Lord be done." Paul was bound with chains, yet his spirit remained free, ready to speak the gospel even from the stairs of a Roman castle.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 21 · Study Guide',
  },

  hasHebrew: false,
};
