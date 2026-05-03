import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Acts 26 — Paul&apos;s Defence Before King Agrippa II
 *
 * This is the climactic apologia of Acts. Paul stands before King Agrippa II—a
 * Jewish king who knows the prophets—and makes his defence not as a prisoner
 * in chains, but as a man who has seen the risen Christ. The defence has a
 * structure: who he was, how he persecuted, how Christ arrested him on the
 * Damascus road, and what he was commissioned to do. But the signature moment
 * comes when Agrippa interrupts: &ldquo;Paul, thou art beside thyself.&rdquo;
 * Paul&apos;s answer is steady: &ldquo;I am not mad, most noble Festus.&rdquo; And
 * then the king hears the punchline of the entire Gospel: &ldquo;King Agrippa,
 * believest thou the prophets? I know that thou believest.&rdquo; Agrippa&apos;s
 * answer: &ldquo;Almost thou persuadest me to be a Christian.&rdquo; Almost. The
 * closest a man can come to faith while turning away. And Paul&apos;s prayer—the
 * deepest prayer in Acts—is that not just Agrippa but everyone listening would
 * be &ldquo;both almost, and altogether such as I am, except these bonds.&rdquo;
 */
export const ACTS_26: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 26,

  estimatedMinutes: { beginner: 9, intermediate: 18, deep: 24 },
  intros: [
    'Paul stands before Agrippa—a king, not a mob. A man educated in Scripture, not hostile to it. In this moment, Paul is allowed to extend his hand and speak. And he does not speak as a prisoner who is sorry or afraid. He speaks as a man who has been apprehended by the risen Christ and has lived thirty years in that grip.',

    'The defence unfolds with the clarity of a man who has testified the same story many times: he was once a Pharisee, zealously persecuting the church. On the Damascus road, a light brighter than the sun arrested him. A voice spoke: &ldquo;I am Jesus… and I am sending thee.&rdquo; From that moment, Paul&apos;s entire life has been reoriented. He has been a minister and a witness to both small and great. And he stands now, imprisoned, unbroken.',

    'The king hears this and cannot remain unmoved. When Festus shouts that Paul is mad, it is Agrippa—who knows the prophets—who must decide. And Paul, in what may be the most pastoral moment in his entire defence, asks him directly: &ldquo;Believest thou the prophets?&rdquo; The king admits he does. And Paul tells him that faith in the prophets is faith in the very Jesus who appeared to Paul. Almost, Agrippa replies. So close. And yet—without the leap of faith—all the knowledge in the world is not enough.',
  ],

  opener: {
    matchTitle: /paul|agrippa|damascus|conversion/i,
    caption: 'Paul Addresses King Agrippa II',
  },

  sections: [
    /* ─── Acts 26:1–3 — The Hand Stretched Forth ────────────────────────── */
    {
      ref: 'Acts 26:1–3',
      title: 'The Hand Stretched Forth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            verse(
              1,
              t('Then Agrippa said unto Paul, Thou art permitted to '),
              hp('speak for thyself', 'acts26-speak'),
              t('. Then Paul stretched forth the hand, and answered,'),
            ),
            verse(
              2,
              t('I '),
              hg('think myself happy, king Agrippa', 'acts26-happy'),
              t(', because I shall answer for myself this day before thee touching all the things whereof I am accused of the Jews:'),
            ),
            verse(
              3,
              t('Especially because thou art expert in all customs and questions which are among the Jews: wherefore I beseech thee to hear me patiently.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts26-speak',
          html:
            'Paul is permitted to speak. No centurion interrupts him. No council shouts him down. The hand stretched forth is an ancient gesture of authority and dignity—Paul is no longer the prisoner in chains but the orator making his case. Yet the chains are still there, just behind him. The text holds both realities: Paul is imprisoned and free at once.',
        },
        {
          kind: 'commentary',
          id: 'acts26-happy',
          html:
            'Paul says he thinks himself <em>happy</em>—not in the sense of cheerful, but in the sense of blessed, fortunate, even honoured. He is standing in chains before a king. The next words he speaks will determine his fate. Yet he opens with gratitude. This is the voice of a man who has been apprehended by something greater than any court. His happiness is not circumstantial. It is rooted in something that neither Rome nor Jerusalem can touch.',
        },
        {
          kind: 'carry',
          html:
            'When your turn comes to defend yourself—when you are accused, misunderstood, or forced to explain yourself—the question is whether you will speak from fear or from gratitude. Paul&apos;s opening sets the tone of everything that follows. He is not trying to escape his chains. He is trying to invite Agrippa into the light that transformed him. Your words of explanation can become an invitation if you speak from the place where you have already been found.',
        },
        {
          kind: 'reflection',
          id: 'acts26-happy-reflect',
          prompt:
            'When have you had to defend yourself or explain yourself to someone? What made the difference—was it fear or something deeper?',
        },
      ],
    },

    /* ─── Acts 26:4–8 — After the Strictest Sect ─────────────────────────── */
    {
      ref: 'Acts 26:4–8',
      title: 'After the Strictest Sect',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            verse(
              4,
              t('My manner of life from my youth, which was at the first among mine own nation at Jerusalem, all the Jews know;'),
            ),
            verse(
              5,
              t('Which knew me from the beginning, if they would testify, that '),
              hg('after the most straitest sect of our religion I lived a Pharisee', 'acts26-pharisee'),
              t('.'),
            ),
            verse(
              6,
              t('And now I stand and am judged for the '),
              hy('hope of the promise made of God unto our fathers', 'acts26-hope'),
              t(':'),
            ),
            verse(
              7,
              t('Unto which promise our twelve tribes, instantly serving God day and night, hope to come. For which hope&apos;s sake, king Agrippa, I am accused of the Jews.'),
            ),
            verse(
              8,
              t('Why should it be thought a thing incredible with you, that God should raise the dead?'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'acts26-akribesteron',
          title: 'Akribesteron — Strictest',
          script: 'ἀκριβέστερον',
          translit: '<strong>akribesteron</strong> · strictest; most accurate; most precise',
          description:
            'Paul was not a moderate Pharisee. He was of the strictest sect—the most exacting, the most rigorous. He did not come to faith gradually or through doubt. He came to faith through a catastrophe so complete that it overturned everything he had built his identity upon.',
        },
        {
          kind: 'commentary',
          id: 'acts26-pharisee',
          html:
            'Paul reminds the court: <em>you all know this about me.</em> He is not claiming to be someone other than who he was. He was a Pharisee[res:bibleodyssey-pharisees]—a man of the law, zealous, meticulous, devoted. He did not become this by accident. His entire youth was shaped toward it. His credentials are real. The Jerusalem community witnessed it. And yet, he will tell them, all of that devotion was devotion to something false. This is why his conversion matters: he did not give up righteousness; he discovered that the righteousness he sought was pointing him in the wrong direction.',
        },
        {
          kind: 'greek',
          id: 'acts26-elpis',
          title: 'Elpis — Hope',
          script: 'ἐλπίς',
          translit: '<strong>elpis</strong> · hope; expectation; confidence in the future',
          description:
            'Paul reframes the charge. He is not on trial for abandoning Judaism. He is on trial for <em>hope</em>—for believing the promise God made to the fathers. The resurrection of the dead is not a Christian novelty; it is a Jewish hope, embedded in the prophets. Paul is guilty of believing the covenant promise.',
        },
        {
          kind: 'commentary',
          id: 'acts26-hope',
          html:
            'The promise Paul speaks of is the resurrection. The prophets spoke of it. Israel&apos;s covenant hope for centuries has been that God would raise the dead. Paul is saying: <em>I am on trial for believing what your own prophets taught you.</em> This is Paul&apos;s rhetorical genius. He is not introducing a foreign idea. He is showing that faith in Jesus is faith in what the Law and the Prophets already promised.',
        },
        {
          kind: 'carry',
          html:
            'There is often a moment in faith when you realize that what you thought was rebellion is actually obedience—obedience to something deeper than you knew. Paul lived one life, thinking he was obeying God. Then he met the risen Christ and understood that the God he thought he was serving was calling him to serve something else. When you change your mind about what matters, it often feels like betrayal at first. But it might be the deepest loyalty you have ever known.',
        },
        {
          kind: 'reflection',
          id: 'acts26-sect-reflect',
          prompt:
            'What did you once believe absolutely, only to discover later it was leading you away from truth? How did you recognize the difference?',
        },
      ],
    },

    /* ─── Acts 26:9–11 — The Persecutor and the Traveller ─────────────────── */
    {
      ref: 'Acts 26:9–11',
      title: 'The Persecutor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            verse(
              9,
              t('I verily thought with myself, that I ought to do many things contrary to the name of Jesus of Nazareth.'),
            ),
            verse(
              10,
              t('Which thing I also did in Jerusalem: and I shut up many of the saints in prison, having received authority from the chief priests; and when they were put to death, I '),
              hg('gave my voice against them', 'acts26-voice'),
              t('.'),
            ),
            verse(
              11,
              t('And I punished them oft in every synagogue, and '),
              hg('compelled them to blaspheme', 'acts26-compelled'),
              t('; and being exceeding mad against them, I persecuted them even unto strange cities.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts26-voice',
          html:
            'Paul did not merely witness the executions. He <em>gave his voice against them</em>—he voted for their death. He had authority. He had power. He carried letters from the high priest. He was not a rogue agent; he was operating within the religious establishment. He is confessing to the court not peripheral sins but the exercise of authorized violence. And he is doing so in front of the man he once sought to destroy—he is looking toward James, toward the apostles, and saying: <em>I hunted you.</em>',
        },
        {
          kind: 'greek',
          id: 'acts26-dioko',
          title: 'Diok&ō; — Persecuted',
          script: 'διώκω',
          translit: '<strong>diok&ō;</strong> · to hunt; to chase; to pursue with intent to harm',
          description:
            'The verb is <em>hunt.</em> Not debate or persuade—hunt. Paul is describing himself not as a theological opponent but as a predator. This is his own judgment on his former life, spoken in court, in front of his accusers.',
        },
        {
          kind: 'commentary',
          id: 'acts26-compelled',
          html:
            'Paul compelled believers to blaspheme. He forced them to curse the name of Christ. This is a sin Paul will remember for the rest of his life. In 1 Timothy he will call himself &ldquo;a blasphemer, and a persecutor, and injurious.&rdquo; Yet he will also say something harder to hear: &ldquo;Howbeit for this cause I obtained mercy, that in me first Jesus Christ might shew forth all longsuffering, for a pattern to them which should hereafter believe on him to life everlasting&rdquo; (1 Tim. 1:16). Paul&apos;s violence is not excused. It is transformed into a testimony to the power of forgiveness.',
        },
        {
          kind: 'carry',
          html:
            'If the resurrection of Jesus is real, then no one is beyond forgiveness. Paul hunted believers. Yet he stands alive, unchained in spirit, thirty years later. Whatever you have done, whoever you have hurt, whatever violence your words or hands have committed—the light that struck Paul down on the Damascus road is still breaking into the world. The question is whether you will let it.',
        },
        {
          kind: 'reflection',
          id: 'acts26-persist-reflect',
          prompt:
            'When have you pursued something or someone with all your energy, only to discover later you were heading in the wrong direction? What was it like to turn around?',
        },
        {
          kind: 'artwork',
          matchTitle: /damascus|conversion|paul/i,
          caption: 'Acts 26:9–11 · The Persecutor and the Traveller',
        },
      ],
    },

    /* ─── Acts 26:12–18 — The Voice on the Road ──────────────────────────── */
    {
      ref: 'Acts 26:12–18',
      title: 'The Voice on the Road',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            verse(
              12,
              t('Whereupon as I went to Damascus with authority and commission from the chief priests,'),
            ),
            verse(
              13,
              t('At midday, O king, I saw in the way a light from heaven, '),
              hp('above the brightness of the sun', 'acts26-light-sun'),
              t(', shining round about me and them which journeyed with me.'),
            ),
            verse(
              14,
              t('And when we were all fallen to the ground, I heard a voice speaking unto me, and saying in the Hebrew tongue, Saul, Saul, '),
              hp('why persecutest thou me? it is hard for thee to kick against the pricks', 'acts26-pricks'),
              t('.'),
            ),
            verse(
              15,
              t('And I said, Who art thou, Lord? And he said, '),
              hp('I am Jesus whom thou persecutest', 'acts26-jesus-persecutes'),
              t('.'),
            ),
            verse(
              16,
              t('But rise, and stand upon thy feet: for '),
              hy('I have appeared unto thee for this purpose', 'acts26-appeared'),
              t(', to '),
              hg('make thee a minister and a witness both of these things which thou hast seen, and of those things in the which I will appear unto thee', 'acts26-minister'),
              t(';'),
            ),
            verse(
              17,
              t('Delivering thee from the people, and from the Gentiles, unto whom now I send thee,'),
            ),
            verse(
              18,
              t('To open their eyes, and '),
              hg('to turn them from darkness to light', 'acts26-darkness-light'),
              t(', and from the power of Satan unto God, that they may receive forgiveness of sins, and inheritance among them which are sanctified by faith that is in me.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts26-light-sun',
          html:
            'The light is not like the sun. It is brighter. It is noon, the brightest part of the day, and still this light overwhelms it. This is not a subjective experience—the men with Paul see it too. A crack opens in the fabric of the ordinary world, and the glory of the risen Christ comes through. Paul is struck blind by it. All of his sight—all of his understanding, his confidence, his momentum—goes dark in that instant.',
        },
        {
          kind: 'greek',
          id: 'acts26-ophthe',
          title: 'Ophtē — Appeared',
          script: 'ὤφθη',
          translit: '<strong>ophtē</strong> · appeared; was seen; became visible',
          description:
            'This is the word used of the risen Jesus appearing to the apostles, to James, to five hundred brethren at once, and finally to Paul. The appearance is not visionary or subjective. It is an objective encounter with the risen Lord. Paul has seen Jesus.',
        },
        {
          kind: 'commentary',
          id: 'acts26-pricks',
          html:
            'The image is of an ox kicking against the <em>pricks</em>—the goads, the sharp instruments used to drive a yoke animal. To kick against the pricks is to resist the one who is trying to direct you, and in resisting, to harm yourself. The harder you kick, the deeper the goads cut. Paul has been kicking against God all his life—trying to extinguish what he thought was heresy, not knowing he was kicking against the hands that made him. The resistance only wounded him. And now those hands have caught him.',
        },
        {
          kind: 'commentary',
          id: 'acts26-jesus-persecutes',
          html:
            'The risen Jesus tells Paul: <em>You are persecuting me.</em> Not &ldquo;You are persecuting my church.&rdquo; But &ldquo;You are persecuting <em>me.</em>&rdquo; The union between Christ and His body is so complete that what touches them touches Him. Paul has been hunting the members, and in doing so, has been wounding the head. This revelation—that he has been hurting Christ himself—may be the deepest wound of all to a man of Paul&apos;s conscience.',
        },
        {
          kind: 'greek',
          id: 'acts26-hyperetes',
          title: 'Hyperetes — Minister',
          script: 'ὑπηρέτης',
          translit: '<strong>hyperetes</strong> · a servant; a minister; an attendant; one under authority',
          description:
            'Paul is not appointed as an emperor or a judge. He is appointed as a <em>hyperetes</em>—a servant, someone under authority, someone who executes the will of the one who commissioned him. This entire life will be Paul saying: I am not my own. I belong to the One who arrested me on the Damascus road.',
        },
        {
          kind: 'commentary',
          id: 'acts26-appeared',
          html:
            'Jesus says He has appeared to Paul <em>for this purpose</em>—not randomly, not as a ghostly visitation, but as a deliberate act with a mission attached. The appearance itself is the commissioning. To see the risen Christ is to be sent. There is no neutral encounter with the resurrection. It always reorients the whole of a life toward witness. This encounter on the Damascus road—the third account of it in Acts[res:intertextual-damascus-accounts]—carries the weight of Paul&apos;s entire apostolic authority.',
        },
        {
          kind: 'commentary',
          id: 'acts26-minister',
          html:
            'Paul is appointed to do two things: to testify to what he has seen, and to testify to what Christ will show him. His apostleship is not based on a single vision at Damascus. It is based on an ongoing relationship with the risen Jesus—appearance after appearance, revelation after revelation. Paul will spend decades in that grip, being shown things, being told things, being prepared for every circumstance he will face.',
        },
        {
          kind: 'commentary',
          id: 'acts26-darkness-light',
          html:
            'Paul is sent to the Gentiles with a cosmic purpose: <em>to turn them from darkness to light, and from the power of Satan unto God.</em> This is not cultural diplomacy or political negotiation. This is a confrontation with spiritual powers. The work is to open eyes that have been kept shut, to move people from one kingdom to another. The language echoes Isaiah 42:7 and 49:6—the Servant Songs. Paul&apos;s commission is the commission of the Servant of the Lord. What was written for the Messiah, Paul is being sent to carry out.',
        },
        {
          kind: 'christ',
          id: 'acts26-christ-commission',
          title: 'Christ Connection — The Master Commissions the Servant',
          html:
            'Jesus tells Paul: &ldquo;I have appeared unto thee for this purpose, to make thee a minister and a witness.&rdquo; This echoes the very pattern of Christ&apos;s own commissioning. After His resurrection, Jesus told His disciples: &ldquo;All power is given unto me in heaven and in earth. Go ye therefore, and teach all nations&rdquo; (Matthew 28:18–19). Paul is being appointed to continue what Christ started—to be Christ&apos;s agent in opening the eyes of the Gentiles. Every faithful disciple receives the same structure: encounter the risen Christ, receive a commission, be sent. Paul&apos;s life is not unique in this pattern. It is the pattern itself made visible.',
        },
        {
          kind: 'carry',
          html:
            'You do not have to be as zealous, as brilliant, or as broken as Paul to be commissioned by the risen Christ. But you do have to let the light that broke him break you too. The same question the Damascus-road voice asked Paul is being asked of you: &ldquo;Why are you kicking against me? Why are you heading in the direction that wounds you?&rdquo; And the same commission is available: rise, stand, and be a witness. To the people in your circle. To the people in your spheres of influence. To open eyes. To turn people from darkness to light. Not as an empire-builder or a celebrity. As a servant. As a <em>hyperetes</em> who knows she does not work alone.',
        },
        {
          kind: 'reflection',
          id: 'acts26-commission-reflect',
          prompt:
            'What is one sphere of your life where you could be a witness to Christ&apos;s power? Not in a preachy way, but simply by being open about what you have encountered?',
        },
      ],
    },

    /* ─── Acts 26:19–23 — I Was Not Disobedient ───────────────────────────── */
    {
      ref: 'Acts 26:19–23',
      title: 'I Was Not Disobedient',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            verse(
              19,
              t('Whereupon, O king Agrippa, '),
              hy('I was not disobedient unto the heavenly vision', 'acts26-obedient'),
              t(':'),
            ),
            verse(
              20,
              t('But shewed first them at Damascus, and at Jerusalem, and throughout all the coasts of Judaea, and then to the Gentiles, that they should repent and turn to God, and do works meet for repentance.'),
            ),
            verse(
              21,
              t('For these causes the Jews caught me in the temple, and went about to kill me.'),
            ),
            verse(
              22,
              t('Having therefore obtained help of God, I continue unto this day, '),
              hg('witnessing both to small and great', 'acts26-small-great'),
              t(', saying none other things than those which the prophets and Moses did say should come:'),
            ),
            verse(
              23,
              t('That Christ should suffer, and that he should be the first that should rise from the dead, and should shew light unto the people, and to the Gentiles.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts26-obedient',
          html:
            'Paul sums up three decades with a single statement: <em>I was not disobedient unto the heavenly vision.</em> Not once. Not when imprisoned. Not when shipwrecked. Not when beaten. Not when abandoned. The vision did not fade. It did not lose its authority. It set the direction of his entire life, and he kept walking in that direction.',
        },
        {
          kind: 'commentary',
          id: 'acts26-small-great',
          html:
            'Paul has been a witness to <em>both small and great.</em> Kings and beggars. Philosophers and slaves. His witness was not stratified by social status. A centurion was as important as a governor. A household servant&apos;s faith mattered as much as a Pharisee&apos;s. This is the democratization of the Gospel that the Gentile mission enacted. The good news is not reserved for the powerful or the privileged. It comes to all.',
        },
        {
          kind: 'carry',
          html:
            'The question that defines a faithful life is not whether you understood everything that would happen. It is whether you kept walking in the direction you were shown. Paul could not have predicted where Damascus would lead—the shipwrecks, the imprisonments, the journeys to Rome. But at each crossroads, he asked: <em>Is this obedience to what I was shown?</em> And he kept walking. You are probably not yet at the bottom of what you were shown either. Keep walking.',
        },
        {
          kind: 'reflection',
          id: 'acts26-obedient-reflect',
          prompt:
            'What vision or calling have you been given, even if you do not yet understand where it leads? What would it look like to be faithful to it this week?',
        },
      ],
    },

    /* ─── Acts 26:24–29 — Almost Thou Persuadest Me ────────────────────────── */
    {
      ref: 'Acts 26:24–29',
      title: 'Almost Thou Persuadest Me',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            verse(
              24,
              t('And as he thus spake for himself, Festus said with a loud voice, Paul, thou art beside thyself; much learning doth make thee mad.'),
            ),
            verse(
              25,
              t('But Paul said, I am not mad, most noble Festus; but '),
              hg('speak the words of truth and soberness', 'acts26-truth'),
              t('.'),
            ),
            verse(
              26,
              t('For the king knoweth of these things, before whom also I speak freely: for I am persuaded that none of these things are hidden from him; for this thing was not done in a corner.'),
            ),
            verse(
              27,
              t('King Agrippa, '),
              hp('believest thou the prophets?', 'acts26-prophets'),
              t(' I know that thou believest.'),
            ),
            verse(
              28,
              t('Then Agrippa said unto Paul, '),
              hp('Almost thou persuadest me to be a Christian', 'acts26-almost'),
              t('.'),
            ),
            verse(
              29,
              t('And Paul said, I would to God, that not only thou, but also all that hear me this day, were '),
              hp('both almost, and altogether such as I am, except these bonds', 'acts26-bonds'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts26-truth',
          html:
            'Festus, the governor, has interrupted with mockery. <em>You are mad.</em> Your learning has driven you insane. Paul&apos;s response does not attack Festus. It simply restates his own position: <em>I am speaking words of truth and soberness.</em> Not ecstasy. Not fanaticism. Truth and clarity. The most sane thing anyone has ever said in that courtroom is being called madness because it announces a reality Festus cannot absorb.',
        },
        {
          kind: 'commentary',
          id: 'acts26-prophets',
          html:
            'Paul turns from the governor to the king. <em>Agrippa, believest thou the prophets?</em> The king who knows Scripture. The king educated in Israel&apos;s heritage. Paul is asking not &ldquo;Do you believe me?&rdquo; but &ldquo;Do you believe the prophets?&rdquo; And he answers his own question with audacity: <em>I know that thou believest.</em> Paul is placing a responsibility before Agrippa: your own faith in the prophets commits you to faith in Christ. They point to Him. You cannot have one without the other.',
        },
        {
          kind: 'greek',
          id: 'acts26-oligon',
          title: 'Oligon — Almost',
          script: 'ὀλίγον',
          translit: '<strong>oligon</strong> · a little; almost; nearly; in a small measure',
          description:
            'The word means &ldquo;a little,&rdquo; and in this context, &ldquo;almost.&rdquo; But almost is not a small thing. Almost is the difference between faith and unbelief. Almost is standing on the threshold with the door open, and choosing not to walk through. The weight of that word should not be underestimated.',
        },
        {
          kind: 'commentary',
          id: 'acts26-almost',
          html:
            'Agrippa&apos;s answer is one of the most tragic words in Scripture: <em>Almost thou persuadest me to be a Christian.</em> He has heard the defence. He has heard the case made that faith in the prophets is faith in Christ. He is intellectually convinced. He is emotionally moved. He is <em>almost</em> persuaded. And yet—he does not yield. He does not stand and declare allegiance to Jesus. He does not take the step from almost to altogether. He remains on the threshold. The door remains open. And after this, it will not. History moves on. Agrippa will not appear in Scripture again. The moment of choice has passed.',
        },
        {
          kind: 'commentary',
          id: 'acts26-bonds',
          html:
            'Paul&apos;s response is pastoral and profound. He does not shame Agrippa for his hesitation. Instead, he prays a prayer so generous it breaks the heart: &ldquo;I would to God, that not only thou, but also all that hear me this day, were both almost, and altogether such as I am, except these bonds.&rdquo; He is saying: <em>I wish you had not just my conviction but my freedom. Not my chains, but my joy. Not my imprisonments, but my liberty in Christ.</em> This is the prayer of a man who has nothing left to lose, praying for the wholeness of those who have everything to gain.',
        },
        {
          kind: 'christ',
          id: 'acts26-christ-almost',
          title: 'Christ Connection — The Closest Rejection',
          html:
            'Almost is not the same as yes. Almost is the saddest word in the Gospel, because it describes the proximity without the commitment. John&apos;s Gospel records many who came close: &ldquo;Many believed on his name when they saw the miracles which he did. But Jesus did not commit himself unto them&rdquo; (John 2:23–24). Agrippa was as close as a man can be without surrendering. He knew the prophets. He heard the argument. He felt the power. And he walked away. Jesus warned His disciples that &ldquo;no one, having put his hand to the plough, and looking back, is fit for the kingdom of God&rdquo; (Luke 9:62). Agrippa looked back. And he was left on the other side of the door.',
        },
        {
          kind: 'carry',
          html:
            'There is a kind of proximity to faith that is worse than distance. To understand the argument, to feel the pull, to see the light, and then to turn away—that is to become harder to reach, not closer. The question Paul is asking you is the question he asked Agrippa: &ldquo;Do you believe the prophets?&rdquo; If you do, then you believe they point to Christ. If you do, then you cannot stay in the almost. You have to decide. Almost will not save you. Only altogether will.',
        },
        {
          kind: 'reflection',
          id: 'acts26-almost-reflect',
          prompt:
            'Where in your faith do you find yourself? Are you still moving toward Christ, or have you found yourself lingering in the almost, looking back?',
        },
        {
          kind: 'artwork',
          matchTitle: /agrippa|paul|trial|bound/i,
          caption: 'Acts 26:24–29 · Almost Thou Persuadest Me',
        },
      ],
    },

    /* ─── Acts 26:30–32 — This Man Might Have Been Set at Liberty ────────── */
    {
      ref: 'Acts 26:30–32',
      title: 'This Man Might Have Been Set at Liberty',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            verse(
              30,
              t('And when he had thus spoken, the king rose up, and the governor, and '),
              hy('Bernice', 'acts26-bernice'),
              t(', and they that sat with them:'),
            ),
            verse(
              31,
              t('And when they were gone aside, they talked between themselves, saying, This man doeth nothing worthy of death or of bonds.'),
            ),
            verse(
              32,
              t('Then said Agrippa unto Festus, '),
              hg('This man might have been set at liberty, if he had not appealed unto Caesar', 'acts26-liberty'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts26-bernice',
          html:
            'Bernice[res:bibleodyssey-bernice] was Agrippa&apos;s sister, and she is present at the trial. Her presence is significant: she is a woman of authority and influence in her own right, a widow who has returned to her brother&apos;s court. That she hears Paul&apos;s defence alongside the king suggests the defence was not a private matter but a public hearing. Whether she believed or not, Scripture does not say. But she stood in the presence of the risen Christ&apos;s witness, as did her brother.',
        },
        {
          kind: 'commentary',
          id: 'acts26-liberty',
          html:
            'The court adjourns. The king[res:bibleodyssey-agrippa] and the governor confer in private. And their conclusion is stark: <em>This man does nothing worthy of death or of bonds.</em> Paul is innocent. Not of the charges his enemies bring, but of any crime against Rome. Agrippa is explicit: Paul could be released right now. The only thing stopping him is his own appeal to Caesar. He asked for Rome&apos;s hearing, and Rome will hear him. He has bound himself by his own petition. His chains are, in a sense, self-imposed.',
        },
        {
          kind: 'greek',
          id: 'acts26-dunamai-apolyein',
          title: 'Dunamai Apolyein — Might Be Released',
          script: 'δύναμαι ἀπολύω',
          translit: '<strong>dunamai</strong> · to be able; <strong>apolyō</strong> · to release; to set free',
          description:
            'Agrippa has the authority. He could open the prison door. But Paul has invoked a higher authority—Caesar himself. Paul has appealed beyond the local tribunal to the imperial court. And once that appeal is made, even a king cannot undo it. The machinery of Rome takes over.',
        },
        {
          kind: 'carry',
          html:
            'There is a paradox in Paul&apos;s life: he could have been freed, yet he went to Rome in chains. He chose to appeal to Caesar not to save himself but to widen the hearing—so that the Gospel would be proclaimed in the very capital of the empire. His imprisonment becomes his platform. His chains become his credential. What looks like a defeat in one light is victory in another. The question for you is the same: are you fighting for your freedom, or are you willing to let your circumstances become the vehicle of your testimony?',
        },
        {
          kind: 'reflection',
          id: 'acts26-liberty-reflect',
          prompt:
            'When have you discovered that the obstacle in your path was actually the opportunity? What changed your perspective?',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Acts 26',
    quote:
      'King Agrippa, believest thou the prophets? I know that thou believest. Almost thou persuadest me to be a Christian.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 26 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-agrippa',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Herod Agrippa II',
      url: 'https://www.bibleodyssey.org/dictionary/agrippa/',
      description: 'Open-access SBL entry on the Jewish king before whom Paul made his final defence, with historical context.',
    },
    {
      id: 'bibleodyssey-bernice',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Bernice',
      url: 'https://www.bibleodyssey.org/dictionary/bernice/',
      description: 'Open-access SBL entry on Bernice, Agrippa II&apos;s sister, who heard Paul&apos;s defence at Caesarea.',
    },
    {
      id: 'intertextual-damascus-accounts',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Paul&apos;s Three Damascus-Road Accounts',
      url: 'https://intertextual.bible/',
      description: 'Comparative resource exploring the three parallel accounts of Paul&apos;s conversion (Acts 9, 22, 26) and their literary relationships.',
    },
    {
      id: 'bibleodyssey-pharisees',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Pharisees',
      url: 'https://www.bibleodyssey.org/dictionary/pharisees/',
      description: 'Open-access SBL entry on the Pharisaic sect, Paul&apos;s former devotion to its strictest observance, and their theology.',
    },
  ],

  hasHebrew: false,
};
