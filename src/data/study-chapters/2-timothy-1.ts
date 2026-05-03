import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 2 Timothy 1 — Power, Love, and a Sound Mind
 *
 * Paul writes from prison. The end is near. Yet his words to Timothy ring with
 * courage, not despair. He reminds Timothy that God has not given the spirit of
 * fear, but of power, and of love, and of a sound mind. This is Paul&apos;s legacy
 * to his son in the faith: not comfort, but calling. Not ease, but endurance.
 * The gospel is worth suffering for.
 */
export const SECOND_TIMOTHY_1: RichChapterContent = {
  bookSlug: '2-timothy',
  bookName: '2 Timothy',
  chapter: 1,

  estimatedMinutes: { beginner: 10, intermediate: 16, deep: 23 },
  intros: [
    'Paul writes his final letter. He is in chains, awaiting execution. Rome does not recognize Christian faith as legitimate religion. The emperor is hostile. Believers are turning away from Paul for fear of association. Yet Paul does not rage or despair. He turns to Timothy with a clear-eyed encouragement. The gospel does not promise comfort in this age. It promises power to endure, love to sustain, and a mind kept clear by God&apos;s Spirit.',
    'Timothy is young. He is in a city hostile to the gospel. Pressure mounts to compromise. Paul&apos;s word is not "avoid danger" but "be strong in the grace that is in Christ Jesus." Not immunity from suffering. Not escape from the conflict. But strength, love, and clarity to face it.',
  ],

  sections: [
    /* ─── 2 Timothy 1:1–2 — Greeting ────────────────────────────────────── */
    {
      ref: '2 Timothy 1:1–2',
      title: 'Greeting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              1,
              t('Paul, an apostle of Jesus Christ by the will of God, according to the '),
              hp('promise of life which is in Christ Jesus', 'christ-eternal-life'),
              t(',')
            ),
            verse(
              2,
              t('To Timothy, my '),
              hp('dearly beloved son', 'timothy-beloved'),
              t(': Grace, mercy, and peace, from God the Father and Christ Jesus our Lord.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim2-apostle-will',
          html:
            'Paul opens by grounding his apostleship in God&apos;s will, not human appointment. His authority does not rest on survival or popular acclaim. It rests on divine calling. And his promise to Timothy is rooted in "the promise of life which is in Christ Jesus"—not temporal survival, but eternal life. This is what Paul will be executed for. This is what he asks Timothy to defend.',
        },
        {
          kind: 'commentary',
          id: 'timothy-beloved',
          html:
            'Paul does not write to a subordinate. He writes to his beloved son. The affection is not incidental; it is the foundation. Timothy&apos;s calling is not abstract duty but relationship. Paul&apos;s faith is not disembodied doctrine but trust in a Person. That personal dimension runs through the whole letter.',
        },
        {
          kind: 'christ',
          id: 'christ-eternal-life',
          title: 'Christ Connection — The Promise of Eternal Life',
          html:
            'The gospel is not primarily about morality or moral improvement. It is about life itself. Jesus said, "I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live" (John 11:25). The promise of life that Paul stakes his apostleship on is the resurrection promise. Death is not the end. Life reigns.',
        },
        {
          kind: 'carry',
          html:
            'Paul is writing to Timothy from prison, about to be executed. The promise he leads with is not "you will avoid suffering" but "eternal life is yours." This is not escapism. It is clarity about what endures. When pressure comes today to compromise, to hide, to deny—ask yourself: what am I protecting? A temporary comfort? Or eternal life? The answer changes everything.',
        },
        {
          kind: 'reflection',
          id: 'tim2-life-promise',
          prompt:
            'How would your choices change this week if you truly believed in the promise of eternal life in Christ, not just as doctrine but as lived reality?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 2 Timothy 1:3 — Pure Conscience ────────────────────────────────── */
    {
      ref: '2 Timothy 1:3',
      title: 'Remembrance and Pure Conscience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              3,
              t('I thank God, whom I serve from my forefathers with a '),
              hy('pure conscience', 'pure-conscience'),
              t(', that without ceasing I have '),
              hp('remembrance of thee in my prayers', 'remembrance-prayers'),
              t(' night and day;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pure-conscience',
          html:
            'A pure conscience is not the absence of temptation or struggle. It is the absence of known guilt—the condition of having nothing to hide from God. Paul served God this way from the beginning, following his Jewish heritage with integrity. Then he encountered Christ and his entire understanding of service transformed. Yet his conscience remained pure—not because he denied his past but because he brought it all to Christ and was forgiven.',
        },
        {
          kind: 'commentary',
          id: 'remembrance-prayers',
          html:
            'Paul does not pray for Timothy once a week or once a day. He prays night and day, without ceasing. This is not heaviness but love. The rhythm of his prayer life has Timothy woven through it. Before he exhorts Timothy to be bold, he shows Timothy he is carried. You cannot pour strength into someone you do not hold in prayer.',
        },
        {
          kind: 'carry',
          html:
            'Paul serves "from his forefathers"—he stands in a lineage of faith. He carries the faith forward. He does not invent it from scratch. If you are a believer, you also stand in a lineage: the communion of saints across centuries. Grandmothers and grandfathers in the faith you have never met but whose prayers and struggles cleared the path you now walk. That inheritance is real. That cloud of witnesses is present.',
        },
        {
          kind: 'reflection',
          id: 'tim2-lineage',
          prompt:
            'Who are the faithful ancestors you stand in lineage with? What would it mean to carry their faith forward into this generation?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 2 Timothy 1:4–5 — Eunice and Lois ────────────────────────────── */
    {
      ref: '2 Timothy 1:4–5',
      title: 'Eunice and Lois',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              4,
              t('Greatly desiring to see thee, being mindful of thy tears, that I may be filled with joy;')
            ),
            verse(
              5,
              t('When I call to remembrance the '),
              hy('unfeigned faith that is in thee', 'unfeigned-faith'),
              t(', which dwelt first in thy '),
              hp('grandmother Lois, and thy mother Eunice', 'lois-eunice'),
              t('; and I am persuaded that in thee also.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'unfeigned-faith',
          html:
            'The Greek word for "unfeigned" is <em>anupokritos</em> — without pretense, without acting. It is faith that does not perform for an audience. It is the real thing. Paul recognizes this authentic quality in Timothy and traces it backward. This faith did not appear with Timothy. It lived first in his grandmother Lois, then his mother Eunice. Timothy inherited something real.',
        },
        {
          kind: 'commentary',
          id: 'lois-eunice',
          html:
            'These are the only two women mentioned by name in 2 Timothy. Lois and Eunice—grandmother and mother. Both women had genuine faith. Both passed it on. Timothy&apos;s boldness does not spring from a vacuum. It comes from women who loved God and loved him. The church was sustained in the earliest years not by the famous but by mothers and grandmothers who prayed and taught in homes while persecution raged. Their work was invisible. It was everything.',
        },
        {
          kind: 'christ',
          id: 'christ-lineage',
          title: 'Christ Connection — The Communion of Saints',
          html:
            'Jesus told Peter, "upon this rock I will build my church" (Matt. 16:18). The church is not a collection of isolated believers. It is a body—a family that spans generations. "Therefore, brethren, we are debtors, not to the flesh, to live after the flesh. For if ye live after the flesh, ye shall die: but if ye through the Spirit do mortify the deeds of the body, ye shall live" (Rom. 8:12–13). The faith you carry did not start with you. It was purchased by Christ&apos;s death and passed to you by those who came before.',
        },
        {
          kind: 'carry',
          html:
            'If you are a woman of faith, your legacy is not your achievement alone. You are a link in a chain. Those who come after you are watching. They are learning. Your unfeigned faith—lived quietly, authentically, in your home and in your prayers—shapes them more than any public speech could. If you are a young believer, look back. Who were the Lois and Eunice in your story? How did they live? You owe them gratitude. And you owe it to the next generation to become that kind of faithful presence.',
        },
        {
          kind: 'reflection',
          id: 'tim2-women-of-faith',
          prompt:
            'Who are the women of authentic faith in your lineage? How did they live their faith? What part of their legacy will you pass forward?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 2 Timothy 1:6–7 — Stir Up the Gift ──────────────────────────── */
    {
      ref: '2 Timothy 1:6–7',
      title: 'Stir Up the Gift of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              6,
              t('Wherefore I put thee in remembrance that thou '),
              hy('stir up the gift of God', 'stir-up-gift'),
              t(', which is in thee by the putting on of my hands.')
            ),
            verse(
              7,
              t('For God hath not given us the '),
              hg('spirit of fear', 'spirit-fear'),
              t('; but of '),
              hp('power, and of love, and of a sound mind', 'spirit-threefold'),
              t('.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'stir-up-gift',
          title: 'Anazōpureō — Stir Up, Kindle',
          script: 'ἀναζωπυρέω',
          translit: '<strong>anazōpureō</strong> · to kindle afresh; to rekindle a fire; to stir up dormant power',
          description:
            'The word is built from "ana" (again), "zōo" (to live), and "pur" (fire). A spiritual gift is not a static possession. It is a live coal that can grow cold from disuse. Paul is telling Timothy: your gift is real, but it requires tending. Stir it. Feed it with prayer. Let it burn hot again.',
        },
        {
          kind: 'commentary',
          id: 'laying-on-hands',
          html:
            '"By the putting on of my hands." When Paul laid hands on Timothy, the Holy Spirit equipped him for ministry. That gift is not removed because Timothy is afraid. It is not gone because the opposition is fierce. It sleeps. Paul is waking him up. The apostolic action created a living commission. Now Timothy must live into it.',
        },
        {
          kind: 'greek',
          id: 'spirit-fear',
          title: 'Deilia — Fear, Cowardice',
          script: 'δειλία',
          translit: '<strong>deilia</strong> · fear; cowardice; the spirit that shrinks back',
          description:
            'This is not fear as caution or prudence. It is deilia—the spirit of cowardice that leads you to deny the truth to save your skin. It is the spirit of shame, of hiding. God does not give this spirit. It comes from the enemy, or from our own flesh when we forget who we are.',
        },
        {
          kind: 'commentary',
          id: 'spirit-threefold',
          html:
            'God gives three gifts to replace the spirit of fear. Power to act, to speak, to endure. Love that casts out fear. And a sound mind—discipline, discernment, clarity. These three compose the armor of the Spirit-filled believer.',
        },
        {
          kind: 'greek',
          id: 'sound-mind',
          title: 'Sōphronismos — Sound Mind, Discipline',
          script: 'σωφρονισμός',
          translit: '<strong>sōphronismos</strong> · a sound mind; self-control; discernment and discipline',
          description:
            'A sound mind is not the absence of emotion. It is a disciplined mind—clear, able to distinguish truth from lies, strong enough to resist the panic that fear brings. God gives Timothy not numbness but clarity.',
        },
        {
          kind: 'christ',
          id: 'christ-power-love',
          title: 'Christ Connection — Power, Love, Sound Mind in Jesus',
          html:
            'Jesus is the source of all three gifts Paul names. He spoke with authority—power to teach, to heal, to command demons. His love moved Him to the cross—willing to die for those He loved. His mind was clear even in anguish—He prayed, He submitted to His Father&apos;s will, He faced crucifixion with open eyes. "Strengthened with all might, according to his glorious power, unto all patience and longsuffering with joyfulness" (Col. 1:11). This is the model Timothy is called to embody.',
        },
        {
          kind: 'carry',
          html:
            'Fear is real. The opposition Timothy faces is real. But Paul is telling him something radical: that spirit of fear, that whisper to hide, to deny, to protect yourself—it does not come from God. What God gives is different. Power to act. Love strong enough to face cost. A mind clear enough not to be paralyzed by panic. When you feel afraid today, name the source. Whose spirit is this? Then quiet it. And kindle the gifts God actually gave you.',
        },
        {
          kind: 'reflection',
          id: 'tim2-fear-power',
          prompt:
            'In what area of your life is the spirit of fear most active? What would it look like to stir up the gift of power, love, and a sound mind instead?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 2 Timothy 1:8 — Not Ashamed ───────────────────────────────────── */
    {
      ref: '2 Timothy 1:8',
      title: 'Be Not Ashamed of the Testimony',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              8,
              t('Be not thou therefore '),
              hg('ashamed of the testimony of our Lord', 'ashamed-testimony'),
              t(', nor of me his prisoner: but be thou '),
              hp('partaker of the afflictions of the gospel', 'partaker-afflictions'),
              t(' according to the power of God;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'ashamed-testimony',
          html:
            'Paul does not ask Timothy to be brave in the abstract. He calls him to be unashamed of three things: the testimony of the Lord, Paul himself, and the afflictions that come with the gospel. This is counterintuitive. Usually we are ashamed of suffering, of association with the condemned, of unpopular truth. Paul inverts the order. The gospel is not shameful. Denying it would be. Hiding from it would be the real cowardice.',
        },
        {
          kind: 'commentary',
          id: 'partaker-afflictions',
          html:
            'Paul does not promise immunity from suffering. He invites Timothy into it. "Partaker of the afflictions of the gospel." But notice the other half: "according to the power of God." Suffering is not meaningless. It is not punishment disguised as calling. It is the cost of bearing witness to something true and good in a world hostile to both. And you do not bear it alone. God&apos;s power sustains you.',
        },
        {
          kind: 'carry',
          html:
            'Where does shame grip you? Where do you feel the pressure to deny or hide the faith? A work situation where honesty about your values might cost you. A family dynamic where standing firm might create conflict. A social context where Christian conviction is mocked. Paul&apos;s word is stark: do not be ashamed. The gospel is not shameful. Your faith is not shameful. The only shame is in hiding it.',
        },
        {
          kind: 'reflection',
          id: 'tim2-shame',
          prompt:
            'In what situation are you most tempted to hide your faith for comfort or approval? What would courage look like there?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 2 Timothy 1:9–10 — Saved Before Time ─────────────────────────── */
    {
      ref: '2 Timothy 1:9–10',
      title: 'Saved According to His Own Purpose and Grace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              9,
              t('Who hath '),
              hp('saved us, and called us with an holy calling', 'saved-called-holy'),
              t(', not according to our works, but according to his own purpose and grace, which was given us in '),
              hp('Christ Jesus before the world began', 'grace-before-ages'),
              t(',')
            ),
            verse(
              10,
              t('But is now made manifest by the appearing of our Saviour Jesus Christ, who hath '),
              hp('abolished death', 'christ-abolished-death'),
              t(', and hath brought '),
              hp('life and immortality to light through the gospel', 'christ-life-immortality'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'saved-called-holy',
          html:
            'Paul opens with the full scope of salvation. God saved you. God called you. And that calling is holy—set apart, consecrated, not for your comfort but for His purposes. Yet this is not burden. It is gift. It is grace. You are not drafted. You are chosen.',
        },
        {
          kind: 'commentary',
          id: 'grace-before-ages',
          html:
            '"Which was given us in Christ Jesus before the world began." This is not an afterthought. Your salvation is not God&apos;s plan B after Adam and Eve sinned. It was conceived before the foundations of the world. Before time. Before creation. This gives immense dignity to your calling. You are not a latecomer. You are part of an eternal purpose laid before the ages.',
        },
        {
          kind: 'greek',
          id: 'katargeo',
          title: 'Katargēō — Abolished, Nullified, Rendered Powerless',
          script: 'κατάργησεν',
          translit: '<strong>katargēō</strong> · to abolish; to render powerless; to put an end to',
          description:
            'Christ did not negotiate with death or make a truce with it. He abolished it. Completely. Death no longer has dominion. This is not metaphor. It is the proclamation of the Resurrection. Death is the last enemy, and it has been defeated.',
        },
        {
          kind: 'commentary',
          id: 'christ-abolished-death',
          html:
            'The power of death is broken. It no longer holds sway over those who are in Christ. This is not merely comfort or hope. It is victory. Christ achieved it. The resurrection proves it.',
        },
        {
          kind: 'greek',
          id: 'photizo',
          title: 'Phōtizō — Brought to Light, Illuminated',
          script: 'φωτίσαντος',
          translit: '<strong>phōtizō</strong> · to bring to light; to illuminate; to make manifest',
          description:
            'Life and immortality always existed in God&apos;s purpose. But they were hidden, veiled. Jesus brought them to light. His resurrection is the proclamation, the unveiling, the revelation of what was always true.',
        },
        {
          kind: 'commentary',
          id: 'christ-life-immortality',
          html:
            'The gospel is not a theory about what might be true. It is the announcement of what is real. Life. Immortality. Not as abstract concepts but as lived reality—purchased by Christ&apos;s death, offered to every believer, sealed by the resurrection.',
        },
        {
          kind: 'christ',
          id: 'christ-abolishes-death',
          title: 'Christ Connection — Victor Over Death',
          html:
            '"Jesus saith unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live" (John 11:25). This is the heart of the gospel. Death is the ultimate fear. Christ has stripped it of its power. He did not make death tolerable or meaningful. He abolished it. And through the gospel, that victory is brought to light—made plain, made public, offered to every believer.',
        },
        {
          kind: 'carry',
          html:
            'Paul is writing this from prison, about to be executed. Yet the triumphalism of these verses is unshakeable. He has seen Christ&apos;s resurrection. He has experienced the power that raised Jesus from the dead. Death is not the end. This is not whistling past the graveyard. This is clarity about what endures. When fear comes, when doubts arise, remember: the One you have believed in has abolished death. What does it matter if you lose temporal comfort? Life and immortality are not comforts. They are realities. They endure.',
        },
        {
          kind: 'reflection',
          id: 'tim2-death-abolished',
          prompt:
            'If you truly believed that Christ has abolished death and brought life and immortality to light, how would you live differently today?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 2 Timothy 1:11–12 — I Know Whom I Have Believed ────────────── */
    {
      ref: '2 Timothy 1:11–12',
      title: 'I Know Whom I Have Believed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              11,
              t('Whereunto I am appointed a preacher, and an apostle, and a teacher of the Gentiles.')
            ),
            verse(
              12,
              t('For the which cause I also suffer these things: nevertheless I am not ashamed: for I '),
              hp('know whom I have believed', 'know-whom-believed'),
              t(', and am persuaded that he is '),
              hy('able to keep that which I have committed unto him', 'able-keep-deposit'),
              t(' against that day.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'know-whom-believed',
          html:
            'Paul does not say "I know what I have believed." Doctrine matters, but his faith rests on a person. Not an idea. Not a philosophy. Not a system. A person. Jesus Christ. This is the bedrock. When everything else shakes—when his body fails, when friends abandon him, when death approaches—he knows whom he has believed. The person is constant. Unchanging. Reliable.',
        },
        {
          kind: 'greek',
          id: 'peithō',
          title: 'Peithō — Persuaded, Convinced, Convinced by Trust',
          script: 'πέπεισμαι',
          translit: '<strong>peithō</strong> · to be convinced; to trust; to be persuaded by experience and relationship',
          description:
            'Paul is not merely doctrinal in his belief. He is persuaded—he has experienced Christ&apos;s faithfulness. His persuasion comes from lived relationship, not abstract conviction. He has seen Christ keep His word. Again and again. So he trusts Him now.',
        },
        {
          kind: 'commentary',
          id: 'able-keep-deposit',
          html:
            'Paul uses the language of a deposit—a treasure entrusted to another for safekeeping. He has committed his soul, his life, his very self into Christ&apos;s hands. And he is persuaded that Christ will guard that deposit faithfully. It is not on Paul to keep himself alive or safe. That burden belongs to Christ. "Against that day"—the day of judgment, the day of reckoning. Paul will be tested. But he is persuaded that Christ will hold fast.',
        },
        {
          kind: 'greek',
          id: 'paratheke',
          title: 'Parathēkē — Deposit, Sacred Trust',
          script: 'παραθήκη',
          translit: '<strong>parathēkē</strong> · a deposit; something entrusted to another for safekeeping',
          description:
            'The image is of treasure given into another&apos;s hands to guard. Paul has committed his soul, his life, his very self into Christ&apos;s keeping. And he is persuaded that Christ will guard that deposit faithfully. It is not on Paul to keep himself alive or safe. That burden belongs to Christ.',
        },
        {
          kind: 'christ',
          id: 'christ-keeper',
          title: 'Christ Connection — Christ as the Keeper of the Soul',
          html:
            '"The Lord is my shepherd; I shall not want… Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me" (Psalm 23:1, 4). Jesus echoed this in John 10: "My sheep hear my voice, and I know them, and they follow me: And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand" (John 10:27–28). This is the keeper of the soul. Not distant. Present. Not careless. Attentive. Not forgetful. Remembering.',
        },
        {
          kind: 'carry',
          html:
            'Have you committed your soul to Christ? Your true self, your deepest fears, the parts of you that you hide from others—have you brought them all and laid them at His feet? Then He is faithful. Not a question of your merit or your strength. A question of His faithfulness. "He is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness" (1 John 1:9). When you are weak, when you fail, when you want to deny Him to save yourself, remember: you have already committed yourself to Him. He will not let you go.',
        },
        {
          kind: 'reflection',
          id: 'tim2-commitment',
          prompt:
            'What have you committed to Christ? What are you still holding back, still trying to keep safe in your own hands? What would it mean to let Him guard those things?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 2 Timothy 1:13–14 — Hold Fast the Pattern ──────────────────── */
    {
      ref: '2 Timothy 1:13–14',
      title: 'Hold Fast the Pattern of Sound Words',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              13,
              t('Hold fast the '),
              hy('form of sound words', 'sound-words'),
              t(', which thou hast heard of me, in faith and love which is in Christ Jesus.')
            ),
            verse(
              14,
              t('That good thing which was committed unto thee keep by the Holy Ghost which dwelleth in us.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'sound-words',
          html:
            'Paul is not asking Timothy to be rigid or to treat doctrine as lifeless. But there is a form—a shape—to the gospel. True words. Sound teaching. Not every form of speech is equal. Some teachings lead to life. Others lead to confusion. Timothy is to hold fast to the form Paul has handed down, grounded in faith and love.',
        },
        {
          kind: 'commentary',
          id: 'good-thing-committed',
          html:
            'This picks up the language from verse 12. Paul committed his deposit to Christ. Now he commits a deposit to Timothy—the gospel, the teaching, the faith once delivered. Timothy does not invent it. He receives it. He guards it. And the guardian is not Timothy&apos;s cleverness or effort. It is the Holy Ghost. The Spirit empowers the guardianship.',
        },
        {
          kind: 'carry',
          html:
            'You have received a deposit too. Not just Timothy. You. The faith that was handed to you by those who came before, refined through centuries, purchased with the blood of martyrs. You are not free to reshape it to fit the culture. You are called to guard it, to live it, to pass it forward. And you do not guard it alone. The Holy Ghost dwells in you. He sustains the work.',
        },
        {
          kind: 'reflection',
          id: 'tim2-pattern-words',
          prompt:
            'What deposit of faith have you received? How will you guard it? How will you live it so that the next generation sees it as something worth keeping?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 2 Timothy 1:15–18 — Onesiphorus ──────────────────────────────── */
    {
      ref: '2 Timothy 1:15–18',
      title: 'Turning Away and Standing Firm',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              15,
              t('This thou knowest, that all they which are in Asia be turned away from me; of whom are Phygellus and Hermogenes.')
            ),
            verse(
              16,
              t('The Lord give mercy unto the house of '),
              hp('Onesiphorus', 'onesiphorus-faithful'),
              t('; for he oft refreshed me, and was not ashamed of my chain:')
            ),
            verse(
              17,
              t('But when he was in Rome, he sought me out very diligently, and found me.')
            ),
            verse(
              18,
              t('The Lord grant unto him that he may find mercy of the Lord in that day: and in how many things he ministered unto me at Ephesus, thou knowest very well.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'asia-turned-away',
          html:
            'Paul is in Rome, in prison. Meanwhile, the churches he planted in Asia Minor have abandoned him. By name he remembers Phygellus and Hermogenes. This is not bitterness on Paul&apos;s part—he states it plainly as fact. Fear is contagious. When the apostle is imprisoned, when supporting him could get you arrested, when survival seems to depend on denying association—many turn away.',
        },
        {
          kind: 'commentary',
          id: 'onesiphorus-faithful',
          html:
            'Against this backdrop stands Onesiphorus. He does not fear. He seeks Paul out. In Rome, where being found with the prisoner could mean becoming a prisoner yourself, Onesiphorus searches diligently and finds him. Not once. Repeatedly. He refreshes Paul. He is not ashamed of his chain. This is fidelity. This is what a friend looks like in the furnace.',
        },
        {
          kind: 'christ',
          id: 'christ-faithful-friend',
          title: 'Christ Connection — The Faithful Friend Who Sticks Closer Than a Brother',
          html:
            '"A man that hath friends must shew himself friendly: and there is a friend that sticketh closer than a brother" (Proverbs 18:24). Jesus calls His disciples His friends (John 15:15). He did not abandon them when the cost came. He walked to the cross. Onesiphorus is imaging that faithfulness—he sticks with Paul when it costs, when it risks, when it is easier to disappear. This is Christlikeness in the ordinary.',
        },
        {
          kind: 'carry',
          html:
            'Where is your Onesiphorus? Who has sought you out, refreshed you, stood with you when it was not convenient? And where are you called to be an Onesiphorus to someone else? The world has no shortage of people who will abandon you when the pressure comes. But it has a shortage of those who will search you out, refresh you, stand with you not because it profits them but because they love you and the Lord you serve.',
        },
        {
          kind: 'reflection',
          id: 'tim2-onesiphorus',
          prompt:
            'Who is an Onesiphorus in your life—someone who has stood with you when it cost them? How will you become that kind of faithful presence to someone in need?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Timothy 1 · Study Guide',
  },

  hasHebrew: false,
};
