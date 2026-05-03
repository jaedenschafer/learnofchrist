import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * 2 Timothy 4 — I Have Fought a Good Fight
 *
 * Paul&apos;s final testimony. He has run the race. He has kept the faith. Ahead
 * lies the crown of righteousness. He urges Timothy to preach the word in season
 * and out, to do the work of an evangelist, to fulfill the ministry. The letter
 * ends not in triumph but in abandonment—many have forsaken Paul. Yet he stands.
 * The Lord will deliver him from every evil work and preserve him unto His kingdom.
 */
export const SECOND_TIMOTHY_4: RichChapterContent = {
  bookSlug: '2-timothy',
  bookName: '2 Timothy',
  chapter: 4,

  estimatedMinutes: { 5: 8, 10: 14, 15: 20 },
  intros: [
    'Paul is writing the very last words he will ever write. Execution is near. He will not send another letter, make another journey, or plant another church. But there is no bitterness in his words, only clarity. His life has been a race. He has run it. He has fought the good fight. And he is not afraid. A crown of righteousness awaits him. But before his death, he writes one final charge to Timothy: Hold fast. Preach the word. Fulfill your ministry. Do not be ashamed of the gospel.',
    'The letter ends with vulnerability. Paul is abandoned by many. Demas has loved this present world. Alexander has done him much evil. At his trial, no one stood with him. Yet Paul does not despair. He writes: "The Lord stood with me, and strengthened me." This is his final gift to Timothy: not the example of a life free from hardship, but the example of one who endured, held fast in loneliness, and found strength in Christ.',
  ],

  sections: [
    /* ─── 2 Timothy 4:1–2 — I Charge Thee ───────────────────────────────── */
    {
      ref: '2 Timothy 4:1–2',
      title: 'I Charge Thee Before God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              1,
              t('I charge thee therefore before '),
              hp('God, and the Lord Jesus Christ', 'tim4-judge'),
              t(', who shall judge both the quick and the dead at his appearing and his kingdom;')
            ),
            verse(
              2,
              t('Preach the word; be instant '),
              hy('in season, out of season', 'tim4-eukairia'),
              t('; reprove, rebuke, exhort with all longsuffering and doctrine.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim4-intro-charge',
          html:
            'Paul places Timothy&apos;s entire ministry in the ultimate context: before God and Christ, who will judge both living and dead. This is not meant to terrify but to clarify. Timothy&apos;s preaching is not a career or a reputation to manage. It is a sacred trust. He is accountable to the Judge of all.',
        },
        {
          kind: 'greek',
          id: 'tim4-eukairia',
          title: 'Eukairia — In Season, Out of Season',
          script: 'εὐκαιρία',
          translit: '<strong>eukairia</strong> · a good time; an opportune moment; season',
          description:
            'Paul is not calling for indiscriminate speech. "In season" means when people are listening, when circumstances favor the message, when silence would be easier. "Out of season" means when opposition rises, when the audience is hostile, when preaching would cost you. Faithfulness demands both. It demands you speak when convenient and when it costs.',
        },
        {
          kind: 'christ',
          id: 'tim4-judge',
          title: 'Christ Connection — Judge and Accountability',
          html:
            'Paul invokes Christ as Judge in verse 1—the One who "shall judge both the quick and the dead at his appearing and his kingdom." This echoes Peter&apos;s preaching in Acts 10:42 and Paul&apos;s own words in Romans 14:10. Christ is not only Savior; He is Judge. And every ministry, including Timothy&apos;s, is answerable to Him.',
        },
        {
          kind: 'carry',
          html:
            'What would change if you truly believed that your words—to your children, your workplace, your difficult neighbor, your scrolling feed—are spoken before the Judge of all? Not to paralyze you with fear, but to clarify what matters. You answer to Him, not to applause. You answer to Him, not to silence.',
        },
        {
          kind: 'reflection',
          id: 'tim4-charge',
          prompt: 'Where are you being called to speak in season and out of season right now? What would it cost you? What would it cost if you didn&apos;t?',
        },
      ],
    },

    /* ─── 2 Timothy 4:3–4 — The Time Will Come ──────────────────────────── */
    {
      ref: '2 Timothy 4:3–4',
      title: 'They Will Not Endure Sound Doctrine',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              3,
              t('For the time will come when they will not endure '),
              hg('sound doctrine', 'tim4-doctrine-time'),
              t('; but after their own lusts shall they heap to themselves teachers, having itching ears;')
            ),
            verse(
              4,
              t('And '),
              hg('they shall turn away their ears from the truth', 'tim4-itching-ears'),
              t(', and shall be turned unto fables.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim4-doctrine-time',
          html:
            'Paul is describing a future—our present. People will gather teachers who tell them what their ears itch to hear. They will prefer fables to truth. Not because the truth is boring, but because it requires something of them: surrender, repentance, obedience. Fables never demand. That is why they are so popular.',
        },
        {
          kind: 'commentary',
          id: 'tim4-itching-ears',
          html:
            'The image is visceral: an ear that itches, restlessly seeking something to scratch it. This is the spiritual hunger of people who want to feel better, not to become better. A teacher who tickles ears gets crowds. A teacher who preaches truth gets a cross. Timothy—and every preacher since—must choose which kind of teacher to be.',
        },
        {
          kind: 'carry',
          html:
            'You encounter this every day: the voices that promise ease, prosperity, affirmation without cost. They itch ears. But the gospel never promises ease. It promises peace underneath suffering, joy underneath loss, righteousness underneath shame. When you feel yourself drawn toward what scratches, what feels good without demanding anything—that is the moment Paul is warning about.',
        },
        {
          kind: 'reflection',
          id: 'tim4-doctrine',
          prompt: 'What "itching ears" teaching have you been drawn to lately? What truth is it keeping you from?',
        },
      ],
    },

    /* ─── 2 Timothy 4:5 — Watch, Endure, Do the Work ───────────────────────── */
    {
      ref: '2 Timothy 4:5',
      title: 'Watch in All Things, Endure Afflictions',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              5,
              t('But watch thou in all things, endure afflictions, do the work of an evangelist, make '),
              hy('full proof of thy ministry', 'tim4-plerophoreo'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim4-watchfulness',
          html:
            'While others turn their ears from truth, Timothy must remain awake. "Watch in all things"—spiritual vigilance. The Greek word for "watch" carries the sense of being sober, clear-eyed, awake to reality. Timothy cannot afford to drift.',
        },
        {
          kind: 'commentary',
          id: 'tim4-endurance',
          html:
            'Timothy is not promised ease. He will face opposition. The charge is not to avoid affliction but to endure it. And he must do this not someday, when conditions are perfect, but now. The work of an evangelist cannot wait for a comfortable season. There may never be one.',
        },
        {
          kind: 'greek',
          id: 'tim4-plerophoreo',
          title: 'Plerophoreo — Full Proof of Ministry',
          script: 'πληροφορέω',
          translit: '<strong>plerophoreo</strong> · to fulfill fully; to convince completely; to carry to full measure',
          description:
            'Timothy is to make "full proof" of his ministry—not to leave anything undone, not to withhold anything, not to hold back when circumstances become difficult. The word carries the sense of bringing something to its complete, full measure. A life poured out.',
        },
        {
          kind: 'carry',
          html:
            'Are you awake to what is happening around you spiritually? Are you enduring when comfort would be easier? Are you doing the work you have been given, not waiting for a better season? Paul&apos;s charge to Timothy is His charge to anyone who names the name of Christ. Hold on. Stay watchful. Finish the work He gave you.',
        },
        {
          kind: 'reflection',
          id: 'tim4-work',
          prompt: 'What ministry or work has God given you? What would it look like to make "full proof" of it—to hold nothing back?',
        },
      ],
    },

    /* ─── 2 Timothy 4:6–8 — I Am Ready to Be Offered ────────────────────── */
    {
      ref: '2 Timothy 4:6–8',
      title: 'I Have Fought a Good Fight, Finished My Course',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              6,
              t('For I am now ready to be offered, and the time of my '),
              hy('departure', 'tim4-exodus'),
              t(' is at hand.')
            ),
            verse(
              7,
              t('I have fought a good '),
              hy('fight', 'tim4-agone-dromos'),
              t(', I have finished my '),
              hy('course', 'tim4-agone-dromos'),
              t(', I have kept the '),
              hp('faith', 'tim4-faith'),
              t(':')
            ),
            verse(
              8,
              t('Henceforth there is laid up for me a '),
              hg('crown of righteousness', 'tim4-stephanos'),
              t(', which the Lord, the righteous judge, shall give me at that day: and not to me only, but unto all them also that love his appearing.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim4-offered',
          html:
            'Paul uses the language of a drink offering—a libation poured out. He does not mourn his approaching death. He frames it as a completed sacrifice. His life, from beginning to end, is being offered to God. This is the deep peace of a man who has finished what he was sent to do.',
        },
        {
          kind: 'greek',
          id: 'tim4-exodus',
          title: 'Exodus — Departure',
          script: 'ἔξοδος',
          translit: '<strong>exodus</strong> · a going out; a departure; a way out; exodus',
          description:
            'The word is literally "way out"—and it carries overtones of the Exodus from Egypt, the great deliverance. Paul does not see death as defeat but as the final exodus: freedom from bondage, the last step home.',
        },
        {
          kind: 'commentary',
          id: 'tim4-three-marks',
          html:
            'Three things Paul can claim: he fought a good fight (the Greek word <em>agōn</em> means struggle, contest—his life has been a sustained, honest effort), he finished his course (the word for "course" is <em>dromos</em>, a running track—his race is complete), he kept the faith (not just intellectually, but lived it, guarded it, remained faithful to it through hardship). These are not proud boasts. They are a finished man&apos;s sober accounting.',
        },
        {
          kind: 'greek',
          id: 'tim4-agone-dromos',
          title: 'Agōn & Dromos — Fight & Course',
          script: 'ἀγών · δρόμος',
          translit: '<strong>agōn</strong> (fight, struggle) · <strong>dromos</strong> (race, course)',
          description:
            'Both words come from athletic contests. The "fight" is an agon—wrestling, boxing, struggle. The "course" is a dromos—a track you run. Paul&apos;s ministry was a contest with real opponents, a race to be finished. Not a stroll. A fight. A race. And both are done.',
        },
        {
          kind: 'christ',
          id: 'tim4-faith',
          title: 'Christ Connection — Righteousness and Appearing',
          html:
            'Paul calls Christ "the righteous judge" in verse 8. This echoes Acts 17:31: God "will judge the world… by that man whom he hath ordained." At the same moment, Christ is also the Rewarder of all who "love his appearing"—a phrase from Titus 2:13, where loving Christ&apos;s parousia (appearing) is the mark of a believer. The crown is not given to the successful or the famous; it is given to those who loved His coming. You can love someone&apos;s appearing only if you belong to them.',
        },
        {
          kind: 'commentary',
          id: 'tim4-stephanos',
          html:
            'The "crown of righteousness" is not a crown awarded for human achievement. It is the gift of the righteous Judge Himself. Paul will wear it. And so will everyone "that love his appearing." The promise is not to the perfect, but to the faithful—those whose eyes are on Christ&apos;s return.',
        },
        {
          kind: 'carry',
          html:
            'Paul is ready. Not ready to die—ready to be offered. Ready because his race is finished, his fight is fought, his faith is kept. You cannot earn this peace by achievement. You can only reach it by finishing what you were given to finish, holding fast what you were given to hold, and keeping faith when keeping faith is all you have left. The crown awaits not the triumphant, but the faithful.',
        },
        {
          kind: 'reflection',
          id: 'tim4-crown',
          prompt: 'If your race ended today, could you say you fought well, finished, kept faith? What would you need to finish before you could say that?',
        },
      ],
    },

    /* ─── 2 Timothy 4:9–12 — Demas Forsaken, Timothy Summoned ───────────── */
    {
      ref: '2 Timothy 4:9–12',
      title: 'Demas Hath Forsaken Me, Only Luke Is With Me',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(9, t('Do thy diligence to come unto me quickly:')),
            verse(
              10,
              t('For '),
              hg('Demas hath forsaken me', 'tim4-demas'),
              t(', having loved this present world, and is departed unto Thessalonica; Crescens to Galatia, Titus unto Dalmatia.')
            ),
            verse(
              11,
              t('Only '),
              hp('Luke is with me', 'tim4-luke-present'),
              t('. Take Mark, and bring him with thee: for he is profitable to me for the ministry;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim4-abandonment',
          html:
            'Paul is alone. This is not the triumph of a victorious apostle surrounded by admirers. This is the abandonment of an aged man awaiting execution. The note is almost unbearably tender: he does not rage at Demas. He simply states the fact: Demas loved this present world. And in loving the world, he abandoned Paul. Yet there is no self-pity here. Paul moves on. Luke is with him. Mark can come. Life continues.',
        },
        {
          kind: 'commentary',
          id: 'tim4-demas',
          html:
            'Demas appears twice before: in Colossians 4:14 (greeted as a fellow laborer) and in Philemon 24 (called a co-worker). He was trusted. And he abandoned Paul. Not to persecution—to "the present world." He did not lose faith in a moment of crisis. He lost faith slowly, through a thousand small choices toward comfort.',
        },
        {
          kind: 'commentary',
          id: 'tim4-luke-mark',
          html:
            'Luke the physician (Col. 4:14) remains. Mark, who once abandoned Paul in Pamphylia (Acts 13:13), is now valuable again. Paul does not hold grudges. He sees people for what they are becoming, not only what they were. This is mercy given to others, and modeled for Timothy: forgive, restore, give second chances.',
        },
        {
          kind: 'christ',
          id: 'tim4-luke-present',
          title: 'Christ Connection — Forsaken by Many, Loved by the Father',
          html:
            'Paul&apos;s abandonment echoes Christ in the Garden: "Could ye not watch with me one hour?" (Matt. 26:40). More profoundly, it echoes Christ on the cross: "My God, my God, why hast thou forsaken me?" (Matt. 27:46). Yet Christ was not actually forsaken. His Father was with Him. So with Paul: in verse 17 he will write, "Notwithstanding the Lord stood with me." In His darkest hour, a faithful servant is never truly alone.',
        },
        {
          kind: 'carry',
          html:
            'Have people you trusted turned away? The gospel does not promise you will be surrounded by faithful friends. It promises you the Lord will not abandon you. Paul&apos;s testimony is not that everyone stayed; it is that the One who mattered stayed. One faithful friend like Luke may be all you get. It is all you need.',
        },
        {
          kind: 'reflection',
          id: 'tim4-friends',
          prompt: 'Who is your Luke—the one who stayed? And whom are you being called to be like Luke for?',
        },
      ],
    },

    /* ─── 2 Timothy 4:13 — The Cloke and the Parchments ──────────────────── */
    {
      ref: '2 Timothy 4:13',
      title: 'The Cloke and the Parchments',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              13,
              t('The cloke that I left at Troas with Carpus, when thou comest, bring with thee, and the books, but especially the parchments.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim4-cloke',
          html:
            'In the middle of his final charge, Paul pauses to ask for a cloak and books. It is one of Scripture&apos;s most human moments. The apostle is cold. His execution is near. He still wants to read. This is not a distraction from his letter&apos;s spiritual purpose. It is its purpose: to show that faith is lived in particular bodies, at particular temperatures, with particular needs. Paul is not a ghost. He is a man in a cell, cold, waiting to die, asking for warmth and words.',
        },
        {
          kind: 'commentary',
          id: 'tim4-books-parchments',
          html:
            'The distinction between "books" (likely papyrus rolls) and "parchments" (more durable vellum, likely Old Testament texts) suggests Paul kept studying Scripture to the end. He is asking for blankets and theology. The life of faith is not elevated above creature comfort. We need both warmth and words to survive.',
        },
        {
          kind: 'carry',
          html:
            'There is grace in asking for what you need. Paul does not present himself as a stoic martyr above warmth and books. He asks. He names the person who has what he needs (Carpus). He is specific (the cloak, the parchments, not just "things"). This is how faith lives in bodies—not denying that we are bodies, but trusting God in the midst of our creaturely needs.',
        },
        {
          kind: 'reflection',
          id: 'tim4-needs',
          prompt: 'What do you need—something practical, something for the soul—that you have been ashamed to ask for?',
        },
      ],
    },

    /* ─── 2 Timothy 4:14–15 — Alexander the Coppersmith ──────────────────── */
    {
      ref: '2 Timothy 4:14–15',
      title: 'Alexander the Coppersmith Did Much Evil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              14,
              t('Alexander the coppersmith did me much evil: the Lord reward him according to his works:')
            ),
            verse(15, t('Of whom be thou ware also; for he hath greatly withstood our words.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim4-alexander',
          html:
            'Paul names his enemy. Not with rage, but with clarity. Alexander did much evil. Paul is not pretending otherwise. He is warning Timothy. But notice: Paul does not take vengeance. He leaves Alexander to the Lord—"The Lord reward him according to his works." This is not softness. It is trust.',
        },
        {
          kind: 'commentary',
          id: 'tim4-ware',
          html:
            'Paul tells Timothy to be "ware"—to watch out, to be careful. This is not vindictiveness. It is wisdom. Some people work against the gospel. Some oppose with words. Knowing this does not make Paul bitter; it makes him practical. Timothy should know who Alexander is and what he does.',
        },
        {
          kind: 'carry',
          html:
            'The gospel does not ask you to be naive about people who oppose it. Paul knows his enemies by name. He warns Timothy. At the same time, Paul leaves vengeance to the Lord. This is the balance Scripture calls you to: eyes open, judgment left to God.',
        },
      ],
    },

    /* ─── 2 Timothy 4:16–18 — The Lord Stood With Me ──────────────────────── */
    {
      ref: '2 Timothy 4:16–18',
      title: 'The Lord Stood With Me and Strengthened Me',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              16,
              t('At my first answer no man stood with me, but all men forsook me: I pray God that it may not be laid to their charge.')
            ),
            verse(
              17,
              t('Notwithstanding the Lord '),
              hp('stood with me', 'tim4-paresteken'),
              t(', and '),
              hp('strengthened me', 'tim4-dynamoo'),
              t('; that by me the preaching might be fully known, and that all the Gentiles might hear: and I was delivered out of the '),
              hy('mouth of the lion', 'tim4-lion'),
              t('.')
            ),
            verse(
              18,
              t('And the Lord shall deliver me from every evil work, and will preserve me unto his heavenly kingdom: to whom be glory for ever and ever. Amen.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim4-trial',
          html:
            'Paul is describing his first Roman trial (likely his first hearing before a magistrate). No lawyer, no friend, no supporter stood with him. Everyone abandoned him. But instead of bitterness, Paul moves immediately to what matters: "Notwithstanding the Lord stood with me." The conjunction is stark. Men forsook. The Lord did not. That reversal is everything.',
        },
        {
          kind: 'greek',
          id: 'tim4-paresteken',
          title: 'Paresteken — Stood By, Stood With',
          script: 'παρέστηκεν',
          translit: '<strong>paresteken</strong> · stood by; was present; stood with',
          description:
            'Even in abandonment, the Lord is not absent. He stands—not at a distance, but "with," <em>para</em>. The word suggests presence at a critical moment. The kind of standing-with that matters when everything else falls away.',
        },
        {
          kind: 'greek',
          id: 'tim4-dynamoo',
          title: 'Dynamoo — Strengthened, Made Powerful',
          script: 'δυναμόω',
          translit: '<strong>dynamoo</strong> · to strengthen; to make powerful; to empower',
          description:
            'The Lord did not spare Paul from trial. He strengthened him through it. This is not a dramatic rescue but a quiet empowering—the kind that allows you to stand when standing is the only thing left to do.',
        },
        {
          kind: 'commentary',
          id: 'tim4-lion',
          html:
            'Paul speaks of being "delivered out of the mouth of the lion." This likely refers to his trial. He was facing execution (the "mouth of the lion") and was delivered—not from death, but through it, into the hands of God. True deliverance, in Paul&apos;s thinking, is not always escape from danger. It is the Lord standing with you inside danger.',
        },
        {
          kind: 'christ',
          id: 'tim4-standing',
          title: 'Christ Connection — Never Alone, Never Without Power',
          html:
            'Paul&apos;s testimony echoes Hebrews 13:5—"I will never leave thee, nor forsake thee"—and also Matthew 28:20—"Lo, I am with you always." When Paul writes that Christ strengthened him, he uses the same word (dynamis) that the disciples would receive at Pentecost (Acts 1:8). In prison, awaiting death, Paul has the power of Pentecost. This is not sentiment. It is the presence of the Holy Spirit making him able to endure.',
        },
        {
          kind: 'carry',
          html:
            'Have you felt abandoned? Not merely by one person, but by many? The gospel does not promise that everyone will stay. It promises the Lord will not leave. Paul knows this from experience. In his loneliest hour, with his trial lost and friends gone, the Lord was there, making him strong enough to preach, to stand, to die. That power is not meant for Paul alone. It is meant for you too.',
        },
        {
          kind: 'reflection',
          id: 'tim4-standing',
          prompt: 'When have you felt most abandoned by people? How did you sense the Lord standing with you in that moment?',
        },
      ],
    },

    /* ─── 2 Timothy 4:19–22 — Prisca, Aquila, Onesiphorus, Grace ──────────── */
    {
      ref: '2 Timothy 4:19–22',
      title: 'Greet Prisca and Aquila. Grace Be With You.',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              19,
              t('Salute '),
              hg('Prisca and Aquila', 'tim4-greetings'),
              t(', and the household of Onesiphorus.')
            ),
            verse(
              20,
              t('Erastus abode at Corinth: but Trophimus have I left at Miletum sick.')
            ),
            verse(21, t('Do thy diligence to come before winter. Eubulus greeteth thee, and Pudens, and Linus, and Claudia, and all the brethren.')),
            verse(22, t('The Lord Jesus Christ be with thy spirit. Grace be with you. Amen.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim4-greetings',
          html:
            'The letter closes with greetings. Paul names people—Prisca and Aquila, Erastus, Trophimus, Eubulus, Pudens, Linus, Claudia. Not faceless comrades, but people with names, faces, histories. Prisca risked her neck for Paul (Rom. 16:4). Onesiphorus sought Paul out when he came to Rome (2 Tim. 1:16–17). These are people Paul loves, named aloud at the moment of his death. This is not the letter of a man who feels truly alone.',
        },
        {
          kind: 'commentary',
          id: 'tim4-before-winter',
          html:
            'Paul asks Timothy to come "before winter." Winter means harder travel, closed roads, danger. The urgency is tender—he wants Timothy there while travel is still possible. There is something beautiful in how specific Paul is about death. Not theoretical. Not "whenever." Before winter. Come soon.',
        },
        {
          kind: 'commentary',
          id: 'tim4-trophimus',
          html:
            'Paul mentions that Trophimus was left sick at Miletum. This is not said defensively. It is context. Paul is helping Timothy understand why his friends are scattered—some at work, some ill, some traveling. Ministry is life, lived in bodies, with all the messiness bodies bring. Paul does not hide this.',
        },
        {
          kind: 'christ',
          id: 'tim4-spirit',
          title: 'Christ Connection — The Lord With Your Spirit',
          html:
            'The final salutation is extraordinary: "The Lord Jesus Christ be with thy spirit." Paul leaves Timothy (and us) with a promise: Christ is not only with us externally, in circumstances. He is with our spirit—the deepest part of us, the part that fears, hopes, endures. Whatever the world takes from you, Christ abides with your spirit.',
        },
        {
          kind: 'carry',
          html:
            'Paul ends where he must. Not in victory, not in comfort, not even in the company of many. He ends in grace. "Grace be with you." This is his final word. Not judgment. Not command. Grace. Unearned, undeserved, unshakeable. This is what has sustained him. This is what will sustain Timothy. And you.',
        },
        {
          kind: 'reflection',
          id: 'tim4-grace',
          prompt: 'Paul&apos;s last word is grace. What would it mean for grace to be your last word too—to yourself, to others, at the end of your day?',
        },
        {
          kind: 'artwork',
          matchTitle: /paul.*prison|martyr|apostle.*death/i,
          caption: '2 Timothy 4:6–8 · Ready to Be Offered',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I have fought a good fight, I have finished my course, I have kept the faith: Henceforth there is laid up for me a crown of righteousness, which the Lord, the righteous judge, shall give me at that day.',
    snippet: 'Paul&apos;s final words, a chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Timothy 4 · Study Guide',
    label: 'Share 2 Timothy 4',
  },

  hasHebrew: false,
};
