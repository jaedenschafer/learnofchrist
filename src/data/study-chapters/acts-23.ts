import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Acts 23 — Paul Before the Sanhedrin
 *
 * Paul is brought before the Sanhedrin to answer charges. He begins to speak,
 * but the high priest orders him struck for his boldness. Paul denounces the
 * high priest with words drawn from Scripture itself, then shrewdly divides the
 * council by appealing to the resurrection — the very doctrine that splits
 * Pharisees from Sadducees. That night, in the barracks, the Lord Jesus stands
 * by him and tells him: "Be of good cheer, Paul: for as thou hast testified of
 * me in Jerusalem, so must thou bear witness also at Rome." The chapter traces
 * God&apos;s providence through earthly instruments: a nephew overhears a plot, 470
 * soldiers march Paul to safety under cover of darkness, and a Roman officer&apos;s
 * letter to the governor preserves the prisoner who will carry the gospel to Rome.
 */
export const ACTS_23: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 23,

  estimatedMinutes: { beginner: 11, intermediate: 20, deep: 27 },
  intros: [
    'Paul stands before the Sanhedrin — the same council that condemned Jesus. He is arrested, accused, and about to be examined. What unfolds is a masterpiece of divine providence working through human weakness. God does not intervene with thunder or earthquake. He works through a young man&apos;s eavesdropping, through the fears of a Roman officer, through the divisions already present in the council itself, and through the living presence of Jesus appearing to Paul in the night.',
    'The chapter is a series of nested scenes: Paul before the council, the high priest&apos;s blow, Paul&apos;s retaliation and apology, the resurrection controversy that splits the council, the Lord standing by Paul in the darkness, the nephew&apos;s warning of a murder plot, the night march of 470 soldiers, the letter to Felix. At every turn, what looks like chaos or defeat becomes the opening through which God moves Paul closer to Rome and farther from the hands of those who seek his death.',
    'The light of this chapter is a single sentence, spoken in the dark: "Be of good cheer, Paul: for as thou hast testified of me in Jerusalem, so must thou bear witness also at Rome." Christ Himself standing by, not withdrawing, not silent — testifying that He will be with Paul through every trial that lies ahead.',
  ],

  sections: [
    /* ─── Acts 23:1–5 — Paul Addresses the Council ─────────────────────── */
    {
      ref: 'Acts 23:1–5',
      title: 'Before the Council',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            verse(
              1,
              t('And Paul, earnestly beholding the council, said, '),
              hg('Men and brethren, I have lived in all good conscience before God', 'acts23-good-conscience'),
              t(' until this day.'),
            ),
            verse(
              2,
              t('And the high priest Ananias commanded them that stood by him to smite him on the mouth.'),
            ),
            verse(
              3,
              t('Then said Paul unto him, '),
              hg('God shall smite thee, thou whited wall', 'acts23-whited-wall'),
              t(': for sittest thou to judge me after the law, and commandest me to be smitten contrary to the law?'),
            ),
            verse(
              4,
              t('And they that stood by said, Revilest thou God&apos;s high priest?'),
            ),
            verse(
              5,
              t('Then said Paul, '),
              hg('I wist not, brethren, that he was the high priest', 'acts23-did-not-know'),
              t(': for it is written, Thou shalt not speak evil of the ruler of thy people.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts23-good-conscience',
          html:
            'Paul&apos;s opening is bold but not reckless. He appeals to his conscience — the inner witness that judges his own conduct. He has lived before God with a clean conscience. This is not boasting. It is testimony. Whatever charges the council brings, Paul can answer with integrity.',
        },
        {
          kind: 'commentary',
          id: 'acts23-whited-wall',
          html:
            'The high priest&apos;s order to strike Paul violates the very law he is meant to uphold. Paul responds in kind with a phrase drawn from Scripture itself — "whited wall." He is quoting imagery of outward cleanliness masking inward corruption, echoing Christ&apos;s condemnation of the Pharisees as "whited sepulchres" (Matt. 23:27). In a single phrase, Paul exposes the hypocrisy of a high priest who commands illegal violence in the name of justice.',
        },
        {
          kind: 'greek',
          id: 'acts23-koniao',
          title: 'Koniao — &ldquo;whitewash&rdquo;',
          script: 'κονιάω',
          translit: '<strong>koniao</strong> · to whitewash; to coat with white plaster',
          description:
            'The word evokes the image of a wall painted white on the outside to hide the decay within. A whited wall looks clean, impressive, respectable — but the whitewash is only surface. Jesus used the same imagery: "whited sepulchres, which indeed appear beautiful outward, but are within full of dead men&apos;s bones" (Matt. 23:27). Paul is saying: your office is respected, your robes are fine, your words are smooth — but your conduct contradicts the law you claim to defend.',
        },
        {
          kind: 'commentary',
          id: 'acts23-did-not-know',
          html:
            'Paul&apos;s apology is not weakness. It is an acknowledgment of the law itself. He immediately cites the commandment: "Thou shalt not speak evil of the ruler of thy people." This is from Exodus 22:28. Paul respects the law more than the bystanders do. They expect him to grovel. Instead, he demonstrates that he is the one holding to Scripture while the high priest violated it. His "I knew not" is a rebuke dressed as humility.',
        },
        {
          kind: 'christ',
          id: 'acts23-christ-whited-sepulchres',
          title: 'Christ Connection — The Whited Sepulcher',
          html:
            'Jesus used the image of whited sepulchres to condemn the Pharisees: "Woe unto you… for ye are like unto whited sepulchres, which indeed appear beautiful outward, but are within full of dead men&apos;s bones, and of all uncleanness" (Matt. 23:27–28). When Paul calls the high priest a "whited wall," he is applying Christ&apos;s judgment to the very institution that condemned Jesus. The Sanhedrin has not changed. The coat of respectability still hides the decay within. Yet the resurrection makes all such masks irrelevant: judgment belongs to the One who rose, not to those who sit in council.',
        },
        {
          kind: 'carry',
          html:
            'Paul begins with integrity, is struck unjustly, and responds by appealing to something higher — the law itself. When you are wronged, the question is not how to retaliate but whether you can appeal to a standard you both claim to honor. If you cannot reach that standard together, at least you have shown what you actually believe — and you have shown it clearly.',
        },
        {
          kind: 'reflection',
          id: 'acts23-conscience-speech',
          prompt:
            'When have you been pressured to speak or act against your conscience? What does it look like to answer, as Paul does, by appealing to something higher than your accuser&apos;s power?',
        },
      ],
    },

    /* ─── Acts 23:6–10 — The Council Divides ──────────────────────────── */
    {
      ref: 'Acts 23:6–10',
      title: 'The Hope of Resurrection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            verse(
              6,
              t('But when Paul perceived that the one part were Sadducees, and the other Pharisees, he cried out in the council, '),
              hg('Men and brethren, I am a Pharisee, the son of a Pharisee', 'acts23-pharisee-claim'),
              t(': '),
              hy('of the hope and resurrection of the dead I am called in question', 'acts23-anastasis'),
              t('.'),
            ),
            verse(
              7,
              t('And when he had so said, there arose a dissension between the Pharisees and the Sadducees: and the multitude was divided.'),
            ),
            verse(
              8,
              t('For the Sadducees say that there is no resurrection, neither angel, nor spirit: but the Pharisees confess both.'),
            ),
            verse(
              9,
              t('And there arose a great cry: and the scribes that were of the Pharisees&apos; part arose, and strove, saying, '),
              hg('We find no evil in this man', 'acts23-no-evil'),
              t(': but if a spirit or an angel hath spoken to him, let us not fight against God.'),
            ),
            verse(
              10,
              t('And when there arose a great dissension, the chief captain, fearing lest Paul should have been pulled in pieces of them, commanded the soldiers to go down, and to take him by force from among them, and to bring him into the castle.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts23-pharisee-claim',
          html:
            'Paul identifies himself as a Pharisee — which is true. Before his conversion, he was a zealous Pharisee, trained under Gamaliel. But more importantly, he perceives the council&apos;s internal division. The Sadducees and Pharisees have fundamental disagreements about resurrection, angels, and the spirit. Paul does not appeal to this division from cynicism. He appeals to it because his case truly centers on the resurrection.',
        },
        {
          kind: 'commentary',
          id: 'acts23-anastasis',
          html:
            'The resurrection is not incidental to Paul&apos;s faith. It is the foundation. He testifies to having seen the risen Jesus. He proclaims that all must be judged by Him. The Pharisees, despite their many errors, agree that there is a resurrection. The Sadducees deny it absolutely. By shifting the question to the resurrection, Paul moves from his own character to something the Pharisees must defend.',
        },
        {
          kind: 'greek',
          id: 'acts23-anastasis-word',
          title: 'Anastasis — &ldquo;resurrection&rdquo;',
          script: 'ἀνάστασις',
          translit: '<strong>anastasis</strong> · standing up again; resurrection; rising from the dead',
          description:
            'Anastasis is not merely a doctrine or a future event. It is the power of standing up again. Christ&apos;s resurrection is not a return to the past. It is an ascent into a new kind of being, embodied yet transformed. Paul&apos;s whole gospel rests on this: death has not won; the body will rise; Jesus is the firstfruits. This is what Paul means by "the hope of resurrection." Not merely that it will happen. That Christ has already made it happen.',
        },
        {
          kind: 'commentary',
          id: 'acts23-no-evil',
          html:
            'The Pharisees, Paul&apos;s former brothers, suddenly find no evil in him. They have just heard him speak. They have not forgiven him. But they perceive that he is one of them in the deepest way — he believes what they believe about resurrection and the spirit world. So they pivot. They move from judge to defender. "If a spirit or an angel hath spoken to him, let us not fight against God." In an instant, the council that convened to condemn Paul becomes divided over whether he should be condemned at all.',
        },
        {
          kind: 'commentary',
          id: 'acts23-pulled-to-pieces',
          html:
            'The dissension becomes violent. The council threatens to tear Paul apart physically. So the captain of the guard forcibly takes Paul from the council and brings him into the barracks. Paul is protected — but not by anyone in the council, not by any sympathizer among them. He is protected by Roman soldiers. God uses the very apparatus of empire to preserve His servant from Jewish violence.',
        },
        {
          kind: 'christ',
          id: 'acts23-christ-resurrection-power',
          title: 'Christ Connection — The Resurrection Hope',
          html:
            'Paul&apos;s entire defense rests on the resurrection of Jesus. He is not charged with preaching resurrection in general — that is a Pharisaic doctrine. He is charged with preaching the resurrection of the crucified Jesus. That is unique. That is dangerous. That is the gospel. As Paul will write later: "If Christ be not risen, then is our preaching vain, and your faith is also vain… But now is Christ risen from the dead, and become the firstfruits of them that slept" (1 Cor. 15:14, 20). The council divides over a doctrine. But Paul stakes his life on a person: the risen Christ.',
        },
        {
          kind: 'carry',
          html:
            'You do not need to know everything to speak clearly about what you do know. Paul enters a hostile council and could have frozen. Instead, he perceives the fault lines and speaks to the center of the matter: the resurrection. When you are questioned about your faith, what is the irreducible core you would stake your life on? That clarity, when you speak it, cuts through everything else.',
        },
        {
          kind: 'reflection',
          id: 'acts23-resurrection-center',
          prompt:
            'What would it mean for your faith if Christ had not risen? Now, what does it mean that He has? How does the resurrection change the way you live this week?',
        },
      ],
    },

    /* ─── Acts 23:11 — The Lord Stands By ──────────────────────────────── */
    {
      ref: 'Acts 23:11',
      title: 'The Lord Standing By Him in the Night',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            verse(
              11,
              t('And the night following the Lord '),
              hp('stood by him', 'acts23-stood-by'),
              t(', and said, '),
              hp('Be of good cheer, Paul: for as thou hast testified of me in Jerusalem, so must thou bear witness also at Rome', 'acts23-good-cheer'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts23-stood-by',
          html:
            'In the darkness of the barracks, after his trial before the Sanhedrin, after his near-destruction by the council, after Roman soldiers have seized him by force — in that moment of isolation and uncertainty, Jesus appears. Not as a vision at a distance. The word is &ldquo;stood by&rdquo; — He positions Himself at Paul&apos;s side, as close as a friend. This is intimacy in the midst of abandonment. This is the presence that makes captivity bearable.',
        },
        {
          kind: 'commentary',
          id: 'acts23-good-cheer',
          html:
            'Jesus does not tell Paul he will be released. He does not promise that the Sanhedrin will recant or that Paul&apos;s enemies will repent. He does not explain why Paul is in the barracks or what will happen next. He says: "Be of good cheer." The command is not to be optimistic about circumstances. It is to take courage from the fact that Christ is standing by him. Then Jesus tells Paul why: because he has testified in Jerusalem, he must testify in Rome. This is not a promise of escape. It is a mission assignment. Your trials are not interruptions to your calling. They are the path through which your calling will be fulfilled.',
        },
        {
          kind: 'greek',
          id: 'acts23-tharsos',
          title: 'Tharsos — &ldquo;be of good cheer&rdquo;',
          script: 'θαρσέω',
          translit: '<strong>tharso</strong> · to be of good courage; to be confident; to take heart',
          description:
            'Tharsos is not the absence of fear. It is the choice to take courage despite fear. It is the faith that stands up inside you and says: &ldquo;I will not yield to this.&rdquo; Jesus does not remove Paul&apos;s circumstances. He gives Paul the courage to face them, knowing that He is standing by.',
        },
        {
          kind: 'commentary',
          id: 'acts23-witness-rome',
          html:
            'This is one of the few times in Acts where Jesus explicitly directs the future. Jesus tells Paul: you will witness in Rome. Paul does not choose this. He does not plan it. The Roman system, the Sanhedrin&apos;s hatred, the nephew&apos;s warning, the governor&apos;s decision, the ship&apos;s journey, the shipwreck, the serpent, the healing on Malta — all of it will be the machinery through which Paul arrives at Rome. But Jesus has already declared it. Paul is not a prisoner being moved by bureaucracy. He is an apostle being led by the risen Lord.',
        },
        {
          kind: 'christ',
          id: 'acts23-christ-never-leaves',
          title: 'Christ Connection — Christ&apos;s Abiding Presence',
          html:
            'In His final words to the disciples before the cross, Jesus said: "I will never leave thee, nor forsake thee" (Heb. 13:5). Paul is experiencing that promise in the dark. The voice that called him on the Damascus road, the presence he encountered in the third heaven, the Christ he has preached across Asia and Greece — that same Jesus stands by him in the barracks. Not as memory. Not as hope. As present reality. Later Paul will write: "I am now ready to be offered… I have fought a good fight… the Lord stood with me, and strengthened me" (2 Tim. 4:6–7, 17). This verse is the foundation of that confidence.',
        },
        {
          kind: 'carry',
          html:
            'You may find yourself in a moment when everything has fallen apart — your circumstances are out of control, your enemies are circling, you are isolated, and you can see no way forward. The presence that came to Paul in the barracks can come to you. Not to explain everything. Not to remove the trial. But to stand by you and tell you what you must do next. That presence changes everything.',
        },
        {
          kind: 'reflection',
          id: 'acts23-christ-presence',
          prompt:
            'When have you felt most abandoned? If Christ stood by you in that moment, even silently, would you have known it? What would it change to trust that He is standing by you now?',
        },
        {
          kind: 'artwork',
          matchTitle: /night|darkness|vision|paul|prison/i,
          caption: 'Acts 23:11 · The Lord Standing By',
        },
      ],
    },

    /* ─── Acts 23:12–15 — Forty Men Under Oath ──────────────────────── */
    {
      ref: 'Acts 23:12–15',
      title: 'Forty Men Under Oath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            verse(
              12,
              t('And when it was day, certain of the Jews '),
              hg('banded together, and bound themselves under a curse', 'acts23-anathema'),
              t(', saying that they would neither eat nor drink till they had killed Paul.'),
            ),
            verse(
              13,
              t('And they were more than forty which had made this conspiracy.'),
            ),
            verse(
              14,
              t('And they came to the chief priests and elders, and said, We have bound ourselves under a great curse, that we will eat nothing until we have slain Paul.'),
            ),
            verse(
              15,
              t('Now therefore ye with the council signify to the chief captain that he bring him down unto you to morrow, as though ye would inquire something more perfectly concerning him: and we, or ever he come near, are ready to kill him.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts23-anathema',
          html:
            'Forty men bind themselves under a curse — they place themselves under divine judgment if they do not kill Paul. They will not eat or drink until Paul is dead. This is not hyperbole. This is a vow that transforms murder into religious duty, at least in their minds. They are not criminals plotting in secret. They are self-righteous men who believe they are doing God a favor.',
        },
        {
          kind: 'greek',
          id: 'acts23-anathema-curse',
          title: 'Anathema — &ldquo;curse&rdquo;',
          script: 'ἀνάθεμα',
          translit: '<strong>anathema</strong> · a curse; something devoted to destruction',
          description:
            'An anathema is something cursed, set apart for destruction, devoted entirely to judgment. By binding themselves under an anathema, the forty men are saying: if we fail to kill Paul, may we be destroyed ourselves. They invoke the curse of God upon their own heads. Yet God does not execute that curse. Instead, God — through a boy overheard, through a Roman officer, through the apparatus of empire — will break the conspiracy and render their curse void.',
        },
        {
          kind: 'commentary',
          id: 'acts23-thymos-fury',
          html:
            'Behind the conspiracy is not reason but fury. The Sanhedrin rejected Paul&apos;s testimony. The council divided. The Sadducees saw no evil in him. So the ones who most wanted him dead — those who felt most threatened by his claim of resurrection — resort to murder. Their rage is that of men who know they are losing the argument and cannot accept it.',
        },
        {
          kind: 'carry',
          html:
            'People will sometimes become most dangerous when they are losing a battle of belief. The forty men are not uncertain. They are certain — and that certainty drives them to kill. This should warn us: confidence that we are right is not enough. We must also ask whether we are becoming the kind of people who would do violence to silence opposition. The moment that question becomes relevant, we have already lost something essential.',
        },
        {
          kind: 'reflection',
          id: 'acts23-conviction-violence',
          prompt:
            'When have you felt your convictions threatened? Did you respond by listening more carefully or by dismissing and rejecting? What would it look like to hold truth without requiring violence, literal or otherwise, against those who disagree?',
        },
      ],
    },

    /* ─── Acts 23:16–22 — Paul&apos;s Nephew ──────────────────────────── */
    {
      ref: 'Acts 23:16–22',
      title: 'A Boy Overhears',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            verse(
              16,
              t('And when Paul&apos;s sister&apos;s son heard of their lying in wait, he went and entered into the castle, and told Paul.'),
            ),
            verse(
              17,
              t('Then Paul called one of the centurions unto him, and said, Bring this young man unto the chief captain: for he hath a certain thing to tell him.'),
            ),
            verse(
              18,
              t('So he took him, and brought him to the chief captain: and said, Paul the prisoner called me unto him, and prayed me to bring this young man unto thee, who hath something to say unto thee.'),
            ),
            verse(
              19,
              t('Then the chief captain took him by the hand, and went with him aside privately, and asked him, What is that thou hast to tell me?'),
            ),
            verse(
              20,
              t('And he said, The Jews have agreed to desire thee that thou wouldest bring Paul down into the council to morrow, as though they would inquire somewhat of him more perfectly.'),
            ),
            verse(
              21,
              t('But do not thou yield unto them: for there lie in wait for him of them more than forty men, which have bound themselves with an oath, that they will neither eat nor drink till they have killed him: and now are they ready, looking for a promise from thee.'),
            ),
            verse(
              22,
              t('So the chief captain let the young man depart, and charged him, See thou tell no man that thou hast shewed these things to me.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts23-sister-son',
          html:
            'Paul&apos;s sister&apos;s son overhears the conspiracy. We know nothing else about him — his name, his age, his faith. But he hears the plot, and instead of passing it along with a shrug, he acts. He enters the fortress and finds Paul. This is a boy who loves his uncle enough to risk the enmity of the entire Sanhedrin. God uses family affection as the instrument of rescue.',
        },
        {
          kind: 'commentary',
          id: 'acts23-centurion-chief-captain',
          html:
            'Paul does not waste time. He does not ask the boy to explain in detail. He immediately brings him to the centurion, who brings him to the chief captain. The Roman officer listens. He believes the boy. He understands the danger. And he acts. There is no bureaucratic delay. No doubt. The chief captain recognizes that the conspiracy is credible because it is in character for the Sanhedrin.',
        },
        {
          kind: 'commentary',
          id: 'acts23-take-by-hand',
          html:
            'Notice the gesture: the chief captain "took him by the hand." It is a small detail, but it shows respect. The chief captain does not interrogate the boy harshly. He takes him aside privately and asks him directly. The boy is treated as a credible witness. And his information is immediately acted upon. Rome&apos;s bureaucracy, for all its corruption and cruelty, has a certain procedural integrity. A witness is heard. A threat is assessed. The prisoner is protected.',
        },
        {
          kind: 'carry',
          html:
            'You may be the only one who overhears something important. You may have information that could change the course of events. The question is whether you will act, or whether you will stay silent. Paul&apos;s nephew did not know all the consequences of his choice. He only knew: my uncle is in danger, I must tell. That willingness to act on what you know is how God moves through the world.',
        },
        {
          kind: 'reflection',
          id: 'acts23-courage-act',
          prompt:
            'What situation in your own life has required you to speak up, even when it was risky? What gave you the courage to act rather than stay silent?',
        },
      ],
    },

    /* ─── Acts 23:23–30 — The Night March ────────────────────────────── */
    {
      ref: 'Acts 23:23–30',
      title: 'The Night March to Caesarea',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            verse(
              23,
              t('And he called unto him two centurions, saying, Make ready two hundred soldiers to go to Caesarea, and horsemen threescore and ten, and spearmen two hundred, at the third hour of the night;'),
            ),
            verse(
              24,
              t('And provide them beasts, that they may set Paul on, and bring him safely unto Felix the governor.'),
            ),
            verse(
              25,
              t('And he wrote a letter after this manner:'),
            ),
            verse(
              26,
              t('Claudius Lysias unto the most excellent governor Felix sendeth greeting.'),
            ),
            verse(
              27,
              t('This man was taken of the Jews, and should have been killed of them: then came I with an army, and rescued him, having understood that he was a Roman.'),
            ),
            verse(
              28,
              t('And when I would have known the cause wherefore they accused him, I brought him forth into their council:'),
            ),
            verse(
              29,
              t('Whom I perceived to be accused of questions of their law, but to have nothing laid to his charge worthy of death or of bonds.'),
            ),
            verse(
              30,
              t('And when it was told me how that the Jews laid wait for the man, I sent immediately unto thee, and gave commandment to his accusers also to say before thee what they have against him. Farewell.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts23-chiliarchos',
          html:
            'Claudius Lysias, the chief captain (the Greek word is chiliarchos, commander of a thousand), acts with decisive authority. He mobilizes 470 soldiers — 200 foot soldiers, 70 cavalry, and 200 spearmen — to escort one prisoner to Caesarea. This is not the response of a man who thinks he is dealing with a religious dispute. This is the response of a Roman officer who understands that there is a genuine threat of assassination.',
        },
        {
          kind: 'greek',
          id: 'acts23-chiliarchos-word',
          title: 'Chiliarchos — &ldquo;chief captain&rdquo;',
          script: 'χιλίαρχος',
          translit: '<strong>chiliarchos</strong> · commander of a thousand; chief captain',
          description:
            'The chiliarchos was a military officer with authority over a thousand soldiers. Claudius Lysias commands the Roman garrison in Jerusalem. He is not acting out of sympathy for Paul. He is acting out of duty: a Roman citizen has been seized illegally, and Roman authority requires that he be protected and brought safely before the proper authorities.',
        },
        {
          kind: 'commentary',
          id: 'acts23-night-march',
          html:
            'The movement begins "at the third hour of the night" — about 9 p.m. The soldiers march all night and the next day to reach Caesarea. Forty miles in darkness, under cover, with a prisoner who is both prize and protected. The whole operation speaks of Roman efficiency and the determination to prevent the assassination. God does not work through miracles here. He works through the machinery of empire, through the competence of a Roman officer, through the simple fact that Paul is a Roman citizen and Rome protects its own.',
        },
        {
          kind: 'commentary',
          id: 'acts23-lysias-letter',
          html:
            'Lysias&apos; letter to the governor Felix is a masterpiece of administrative realism. He reports the facts: the Jews seized Paul, I rescues him, I questioned him, he is accused of religious matters only, the Jews are plotting his assassination. He does not embellish. He does not make a case for Paul&apos;s innocence or guilt. He simply states the situation and leaves the decision to Felix. It is bureaucracy functioning exactly as it is supposed to: transfer the prisoner, present the accusations, let the governor decide.',
        },
        {
          kind: 'carry',
          html:
            'You are never alone, even when you feel most abandoned. In Paul&apos;s case, rescue comes from a boy&apos;s courage, a Roman officer&apos;s competence, and the machinery of an empire. None of it was orchestrated by Paul. All of it was orchestrated by God, working through the ordinary instruments of human society. When you are in danger, the first thing to do is not to panic. It is to see what ordinary means are available to you — and trust God to work through them.',
        },
        {
          kind: 'reflection',
          id: 'acts23-providence-means',
          prompt:
            'When have you seen God work through ordinary, human circumstances to accomplish something that seemed impossible? What did it teach you about trusting God while also using available means?',
        },
        {
          kind: 'artwork',
          matchTitle: /march|soldiers|night|journey|caesarea/i,
          caption: 'Acts 23:23–30 · The Night March',
        },
      ],
    },

    /* ─── Acts 23:31–35 — Arrived at Caesarea ─────────────────────────── */
    {
      ref: 'Acts 23:31–35',
      title: 'Arrived at the Governor&apos;s Palace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            verse(
              31,
              t('Then the soldiers, as it was commanded them, took Paul, and brought him by night to Antipatris.'),
            ),
            verse(
              32,
              t('On the morrow they left the horsemen to go with him, and returned to the castle:'),
            ),
            verse(
              33,
              t('Who, when they came to Caesarea, and delivered the epistle to the governor, presented also Paul before him.'),
            ),
            verse(
              34,
              t('And when the governor had read the letter, he asked of what province he was. And when he understood that he was of Cilicia;'),
            ),
            verse(
              35,
              t('I will hear thee, said he, when thine accusers also shall come. And he commanded him to be kept in Herod&apos;s judgment hall.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts23-safe-passage',
          html:
            'The soldiers deliver Paul safely to Caesarea. The foot soldiers return to Jerusalem after reaching Antipatris, some thirty miles south. The cavalry continues to Caesarea to deliver Paul to the governor. This is the machinery of Roman law functioning as designed. A citizen is arrested, the facts are reported to the proper authority, the prisoner is transferred, and the governor takes jurisdiction. There is nothing miraculous in these verses. But there is something providential: every step that was meant to end in Paul&apos;s death has been redirected toward his transfer to the seat of Roman authority.',
        },
        {
          kind: 'commentary',
          id: 'acts23-felix-listens',
          html:
            'Felix asks Paul&apos;s province of origin. Learning he is from Cilicia, the governor agrees to hear him — but not without his accusers present. This is proper procedure. Paul is not tried, not condemned, not even formally charged yet. He is held pending the arrival of the Jewish authorities who will press charges. What Felix does not know is that he is holding the apostle to the Gentiles, the author of letters that will echo through centuries. He is holding him simply as a prisoner whose province gives Rome jurisdiction.',
        },
        {
          kind: 'commentary',
          id: 'acts23-herods-judgment-hall',
          html:
            'Paul is kept in Herod&apos;s judgment hall — the praetorium, the governor&apos;s palace. It was King Herod&apos;s palace before Rome took direct control of Judea. Now it is the seat of Roman authority. Paul, the prisoner of the Sanhedrin, is now the prisoner of Rome. This shift in custody is everything. The Sanhedrin wanted him dead. Rome wants him judged. There is a vast difference between the two.',
        },
        {
          kind: 'christ',
          id: 'acts23-christ-journey-to-rome',
          title: 'Christ Connection — The Way to Rome',
          html:
            'Jesus promised Paul that he would witness in Rome. This chapter is the beginning of that journey. Paul does not choose it. He does not plan it. But every step — the hearing before the Sanhedrin, the conspiracy, the boy&apos;s courage, the Roman officer&apos;s decisiveness, the night march, the transfer to Caesarea — every step moves him closer to Rome. When Jesus said, "Thou must bear witness also at Rome," He was declaring the future. Paul&apos;s task is not to escape or to defend himself. His task is to testify. The journey will be long and hard. But it leads to Rome, and Rome will hear the gospel.',
        },
        {
          kind: 'carry',
          html:
            'You may find yourself moving in a direction you never chose, following a path you did not plan. The circumstances may seem to be working against you. But if you are aligned with God&apos;s purpose, the very obstacles and authorities that seem to oppose you may be the instruments through which you are moved toward your calling. Paul did not travel to Caesarea by choice. But that journey was the first step to Rome and the proclamation of the gospel to the very seat of empire.',
        },
        {
          kind: 'reflection',
          id: 'acts23-providence-direction',
          prompt:
            'Is there a direction God seems to be moving you that you did not choose? What would change if you trusted that the obstacles in your way might be redirecting you toward His purpose rather than away from it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Be of good cheer, Paul: for as thou hast testified of me in Jerusalem, so must thou bear witness also at Rome.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 23 · Study Guide',
  },

  hasHebrew: false,
};
