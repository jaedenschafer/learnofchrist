import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 1 Corinthians 15 — Resurrection
 *
 * The longest chapter in Paul&apos;s letter, and the heart of the gospel he preaches.
 * Some in Corinth denied the resurrection. Paul does not argue theology in a vacuum—
 * he argues from history, from the witness, from the logic of the gospel itself.
 * If Christ has not risen, faith is futile. But Christ IS risen. And because He is,
 * death is defeated. The body will be transformed. God will be all in all.
 *
 * This chapter is the climax of 1 Corinthians and the most extensive treatment of
 * the resurrection in the New Testament.
 */
export const FIRST_CORINTHIANS_15: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 15,

  estimatedMinutes: { beginner: 11, intermediate: 24, deep: 30 },
  intros: [
    'First Corinthians 15 begins where Romans ends: "There is therefore now no condemnation to them which are in Christ Jesus" (Rom. 8:1). But some Corinthians have embraced Greek dualism and concluded that the body is inherently evil, unworthy of resurrection. Only the soul matters. Paul vigorously rejects this error. The resurrection is not spiritual fantasy—it is historical fact. Christ died. Christ was buried. Christ rose. And His rising is not anomalous. It is the beginning of a new creation.',
    'Paul does not think the body is a problem to escape but a creation to redeem. The resurrection is not the soul&apos;s ascent to heaven. It is the body&apos;s transformation from decay to incorruption, from mortality to life eternal. You will not be disembodied forever. You will be raised. The dead will be raised. All things will be subdued under Christ, and then Christ Himself will be subdued to the Father, so that God may be all in all.',
    'This is the longest chapter in Paul&apos;s letters and the most carefully argued defense of bodily resurrection in Scripture. It moves from the gospel itself (Christ died, rose, appeared to witnesses) through the logic of resurrection (if Christ rose, His people will rise) through the mystery of transformation (what is sown corruptible is raised incorruptible) to the shout of triumph: "O death, where is thy sting? O grave, where is thy victory?"',
  ],

  sections: [
    /* ─── 1 Corinthians 15:1–4 — The Gospel I Preached ─────────────────────── */
    {
      ref: '1 Corinthians 15:1–4',
      title: 'The Gospel I Preached',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(1,
              t('Moreover, brethren, I declare unto you '),
              hp('the gospel which I preached unto you', 'cor15-gospel-preached'),
              t(', which also ye have received, and wherein ye stand;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-gospel-preached',
          html:
            'Paul does not call the gospel a doctrine or a philosophy. He calls it something he "preached"—something proclaimed, announced, declared. The gospel is not abstract truth floating in the realm of ideas. It is a historical proclamation rooted in events that happened.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(3,
              t('For I delivered unto you '),
              hy('first of all', 'cor15-first-of-all'),
              t(' that which I also received, how that '),
              hp('Christ died for our sins', 'cor15-christ-died'),
              t(' according to the scriptures;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-first-of-all',
          html:
            'Paul says "first of all"—<em>protōn</em> in Greek, meaning the most fundamental, the primary. What comes first in the gospel is not your growth in holiness, not your moral improvement, not your spiritual experience. First comes the death of Christ for sins. Everything else flows from this.',
        },
        {
          kind: 'commentary',
          id: 'cor15-christ-died',
          html:
            'The phrase "according to the scriptures" is key. Paul is not inventing a new interpretation. He is claiming that Christ&apos;s death for sins was the fulfillment of the Old Testament prophets—Isaiah 53, the Psalms, the sacrificial system itself. What happened at the cross was not a surprise to God. It was written beforehand.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(4,
              t('And that '),
              hp('he was buried', 'cor15-buried'),
              t(', and that '),
              hp('he rose again the third day', 'cor15-rose-third'),
              t(' according to the scriptures:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-buried',
          html:
            'The burial is not incidental detail. It establishes that Jesus truly died. Not swooned, not fainted, not metaphorically passed away—truly died. His body was placed in a tomb. This is why resurrection is necessary: the man was dead.',
        },
        {
          kind: 'commentary',
          id: 'cor15-rose-third',
          html:
            'The third day is specified with precision. This is not mythology. This is testimony. The women found the tomb empty. The disciples saw Him. Paul will list witnesses by name. Resurrection is not a spiritual principle but a historical event that happened on a specific day.',
        },
        {
          kind: 'christ',
          id: 'cor15-christ-gospel',
          title: 'Christ Connection — The Gospel in Three Sentences',
          html:
            'Here are the three sentences that contain the entire gospel: Christ died for our sins. He was buried. He rose the third day. His death addresses what separates us from God—sin. His resurrection demonstrates that death itself has been overcome. Paul will spend the rest of the chapter unpacking what this means for our bodies and our eternal life.',
        },
        {
          kind: 'carry',
          html:
            'When you are confused about the Christian faith, when you are uncertain what you truly believe, come back to these three sentences. Christ died for your sins. His body was raised. And you, by faith in Him, will be raised too. This is the foundation. Everything else is commentary.',
        },
        {
          kind: 'reflection',
          id: 'cor15-gospel-foundation',
          prompt: 'What would it mean if Christ did not rise from the dead? Now, what does it mean that He did?',
        },
      ],
    },

    /* ─── 1 Corinthians 15:5–11 — Witnesses of the Resurrection ──────────────── */
    {
      ref: '1 Corinthians 15:5–11',
      title: 'Witnesses of the Resurrection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(5,
              t('And that '),
              hp('he was seen of Cephas', 'cor15-seen-cephas'),
              t(', then of the twelve:')
            ),
            verse(6,
              t('After that, he was seen of '),
              hy('above five hundred brethren at once', 'cor15-five-hundred'),
              t('; of whom the greater part remain unto this present, but some are fallen asleep.')
            ),
            verse(7,
              t('After that, he was seen of James; then of all the apostles.')
            ),
            verse(8,
              t('And last of all '),
              hp('he was seen of me also', 'cor15-seen-of-me'),
              t(', as of one '),
              hy('born out of due time', 'cor15-born-out-due-time'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-seen-cephas',
          html:
            'Cephas—Peter—was the first to see the risen Jesus. The Gospels confirm this (Luke 24:34). Paul is recounting not legend but the eyewitness testimony of the apostles. These are people you could have asked about. Some, Paul notes, are still alive. This is not mythology. It is reportage.',
        },
        {
          kind: 'commentary',
          id: 'cor15-five-hundred',
          html:
            'Above five hundred believers saw Jesus at once. This is not a small, shadowy appearance that only the credulous would believe. This is a public appearance to a crowd. And most of them, Paul says, are still alive. If anyone in the Corinthian church doubted the resurrection, they could have gone and asked someone who was there.',
        },
        {
          kind: 'commentary',
          id: 'cor15-seen-of-me',
          html:
            'Paul includes himself in the chain of witnesses. He did not see the risen Jesus during the forty days after the resurrection. He saw Him later, on the Damascus Road, when Christ arrested his life. Yet Paul calls this the same kind of appearance—the risen Christ, visible, real, transformative.',
        },
        {
          kind: 'commentary',
          id: 'cor15-born-out-due-time',
          html:
            'Paul calls himself "born out of due time." The phrase suggests he is like an abortion or miscarriage—a being whose coming was premature, anomalous. But he received the same commission as the twelve: to testify that Christ is risen. His encounter with the risen Jesus changed his entire life.',
        },
        {
          kind: 'greek',
          id: 'cor15-horao',
          title: 'Horaō — To See',
          script: 'ὁράω',
          translit: '<strong>horaō</strong> · to see; to witness; to perceive with the eyes',
          description:
            'Paul uses the same verb—<em>horaō</em>—for every appearance of the risen Jesus: He was seen by Peter, by the five hundred, by James, by all the apostles, by Paul. These are not visions or spiritual experiences. They are sightings—visible encounters with the risen, bodily Christ.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(9,
              t('For I am the least of the apostles, that am not meet to be called an apostle, because '),
              hg('I persecuted the church of God', 'cor15-persecuted-church'),
              t('.')
            ),
            verse(10,
              t('But by the grace of God I am what I am: and '),
              hp('his grace which was bestowed upon me', 'cor15-grace-bestowed'),
              t(' was not in vain; but I laboured more abundantly than they all: yet not I, but the grace of God which was with me.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-persecuted-church',
          html:
            'Paul does not hide his past. He persecuted Christians. He was complicit in Stephen&apos;s death. He hunted down believers to lock them in prison. When he says he is the "least of the apostles," he means it. He has less right to the title than any other. Yet that is precisely his point: what made him an apostle was not his merit or his preparation. It was the grace of the risen Christ, who appeared to him despite what he had done.',
        },
        {
          kind: 'commentary',
          id: 'cor15-grace-bestowed',
          html:
            'The grace that appeared to Paul was not a small, private gift. It was transformative. It made him labor "more abundantly than they all." Yet he does not boast in his labor. He credits it all to grace. This is the pattern: the risen Christ appears, grace flows, and the entire life is reordered in response.',
        },
        {
          kind: 'carry',
          html:
            'You need not have seen Jesus yourself. You are reading the testimony of those who did. Peter saw Him. The five hundred saw Him. Paul saw Him. And they are not asking for blind faith—they are asking you to weigh the evidence, to consider the witnesses, to decide whether you believe their account. Do you believe that Christ rose from the dead?',
        },
        {
          kind: 'reflection',
          id: 'cor15-witnesses-reflect',
          prompt: 'If Paul, a former persecutor of the church, could become an apostle through an encounter with the risen Jesus, what might a genuine encounter with Christ do in your life?',
        },
      ],
    },

    /* ─── 1 Corinthians 15:12–19 — If Christ Be Not Raised ──────────────────── */
    {
      ref: '1 Corinthians 15:12–14',
      title: 'If Christ Be Not Raised',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(12,
              t('Now if Christ be preached that he rose from the dead, how say some among you that there is no resurrection of the dead?')
            ),
            verse(13,
              t('But if there be no resurrection of the dead, then is Christ not risen:')
            ),
            verse(14,
              t('And if Christ be not risen, then is our preaching vain, and your faith is also vain.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-logic-vain',
          html:
            'Paul uses pure logic. Some Corinthians deny the resurrection of the dead. But they claim to believe that Christ rose. This is incoherent. You cannot believe in Christ&apos;s resurrection and deny that anyone rises. If the dead do not rise, then Christ did not rise. If Christ did not rise, then everything Paul has preached is empty. The entire structure of the gospel collapses.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(15,
              t('Yea, and we are found false witnesses of God; because we have testified of God that '),
              hp('he raised up Christ', 'cor15-testified-god'),
              t(': whom he raised not up, if so be that the dead rise not.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-testified-god',
          html:
            'If the dead do not rise and Christ did not rise, then Paul and the apostles have born false witness. They have claimed God did something He did not do. They are not merely mistaken. They are liars. This is the stakes. The resurrection cannot be a minor doctrine. It is central.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(16,
              t('For if the dead rise not, then is not Christ raised:')
            ),
            verse(17,
              t('And if Christ be not raised, '),
              hg('your faith is vain', 'cor15-faith-vain'),
              t('; ye are yet in your sins.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-faith-vain',
          html:
            'Without the resurrection, your faith is vain—empty, without power, unable to save. More than that, you are "yet in your sins." Your sins have not been forgiven because the one who died for them is still dead. The death of Christ accomplishes nothing if He does not rise.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(18,
              t('Then they also which are fallen asleep in Christ are perished.')
            ),
            verse(19,
              t('If in this life only we have hope in Christ, we are of all men most miserable.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-fallen-asleep',
          html:
            'If Christ did not rise, then those who died believing in Him are simply dead. They have perished. There is no resurrection for them. The whole project of the Christian faith collapses into tragedy: those who trusted and died have been deceived. They will never rise. And you, the living, have thrown away your life for a hoax.',
        },
        {
          kind: 'christ',
          id: 'cor15-christ-foundation',
          title: 'Christ Connection — Christ Is the Foundation',
          html:
            'Everything Paul teaches rests on this foundation: Christ did rise from the dead. If He did not, nothing matters. But He did. Because He rose, the resurrection is guaranteed for all believers (Rom. 8:11, "If the Spirit of him that raised up Jesus from the dead dwell in you, he that raised up Christ from the dead shall also quicken your mortal bodies"). His resurrection is the proof that death has lost its power.',
        },
        {
          kind: 'carry',
          html:
            'The resurrection is not a side issue. It is everything. If Christ rose, then death is not final. Your body matters. Your love for people will not be erased by death. The work you do in Christ will not be forgotten. But if Christ did not rise, then all of this is illusion, and you are wasting your life. Which do you believe?',
        },
        {
          kind: 'reflection',
          id: 'cor15-raises-stakes',
          prompt: 'Why does Paul raise these stakes so starkly? What changes about your faith if you genuinely believe Christ rose—not metaphorically, but bodily, historically, actually?',
        },
      ],
    },

    /* ─── 1 Corinthians 15:20–28 — But Now Is Christ Risen ──────────────────── */
    {
      ref: '1 Corinthians 15:20–23',
      title: 'But Now Is Christ Risen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(20,
              t('But now is '),
              hp('Christ risen from the dead', 'cor15-christ-risen-now'),
              t(', and become the '),
              t('firstfruits'),
              t(' of them that slept.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-christ-risen-now',
          html:
            'Paul moves from the conditional—"if Christ be not raised"—to the affirmation. "But now is Christ risen." This is not a hope. This is a proclamation of fact. Christ is risen. Not merely spiritually present, but bodily raised from the dead.',
        },
        {
          kind: 'greek',
          id: 'cor15-aparchē',
          title: 'Aparchē — Firstfruits',
          script: 'ἀπαρχή',
          translit: '<strong>aparchē</strong> · firstfruits; the first portion of a harvest that guarantees the whole harvest',
          description:
            'In the Old Testament, the firstfruits were the first sheaf of grain offered to God at harvest. They were proof that a harvest had come and a guarantee that more would follow. Christ&apos;s resurrection is the firstfruits of the resurrection of the dead—a guarantee that those who belong to Him will also rise.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(21,
              t('For since by man came death, by man came also the resurrection of the dead.')
            ),
            verse(22,
              t('For as in Adam all die, even so in Christ shall all be made alive.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-adam-christ',
          html:
            'Paul draws a parallel between Adam and Christ. Adam is the man through whom death entered the world (Rom. 5:12). Christ is the man through whom resurrection enters the world. The two are cosmic representatives: all humanity fell in Adam; all humanity that believes in Christ is made alive in Him. The logic is parallel: one man&apos;s transgression brought death to all; one man&apos;s obedience brings life to all.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(23,
              t('But every man in his own order: Christ the '),
              hp('firstfruits', 'cor15-order-firstfruits'),
              t('; afterward they that are Christ&apos;s at his coming.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-order-firstfruits',
          html:
            'The resurrection has an order. Christ is first. Then, at His coming, those who belong to Him will be raised. This is not simultaneous. This is sequential. Christ&apos;s resurrection happened at a specific moment in history. The resurrection of believers will happen at His return.',
        },
        {
          kind: 'carry',
          html:
            'If you believe that Christ rose, you are staking a claim on resurrection yourself. His rising is the guarantee of yours. When death comes—your own, or someone you love—remember this: it is not final. The firstfruits have come. The harvest will follow.',
        },
        {
          kind: 'reflection',
          id: 'cor15-firstfruits-reflect',
          prompt: 'What comfort does it bring you to know that Christ is the firstfruits—that His resurrection is a guarantee of your own?',
        },
      ],
    },

    /* ─── 1 Corinthians 15:24–28 — All Things Subdued ─────────────────────────── */
    {
      ref: '1 Corinthians 15:24–28',
      title: 'All Things Subdued',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(24,
              t('Then cometh the end, when he shall have delivered up the kingdom to God, even the Father; when he shall have '),
              hy('put down all rule', 'cor15-put-down-rule'),
              t(' and all authority and power.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-put-down-rule',
          html:
            'Christ will deliver the kingdom to the Father. But before He does, He must put down all rule, all authority, all power that opposes God. This includes, Paul will clarify, death itself. The final enemy to be destroyed is death (v. 26). Until it is destroyed, the work is not complete.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(25,
              t('For he must reign, till he hath put all enemies under his feet.')
            ),
            verse(26,
              t('The '),
              hy('last enemy that shall be destroyed is death', 'cor15-last-enemy'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-last-enemy',
          html:
            'Death is not a transitional problem. It is the final enemy. All other enemies—sin, Satan, human rebellion—are dealt with. But death remains. Death is universal. It claims everyone. And Christ&apos;s work is not complete until death itself is destroyed. This is what the resurrection of the dead accomplishes: death loses its hold.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(27,
              t('For he hath put all things under his feet. But when he saith all things are put under him, it is manifest that he is excepted, which did put all things under him.')
            ),
            verse(28,
              t('And when all things shall be subdued unto him, then shall the '),
              hp('Son also himself be subject unto him that put all things under him', 'cor15-son-subject'),
              t(', that God may be all in all.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-son-subject',
          html:
            'Paul is describing the ultimate end: the Son voluntarily subjects Himself to the Father, so that God might be "all in all." This is not the Son losing power or authority. It is the perfect union of the Son with the Father&apos;s will—the harmony of creation reunited under God&apos;s sovereignty. The goal is not the Son&apos;s diminishment but the reordering of all things into perfect relationship with God.',
        },
        {
          kind: 'christ',
          id: 'cor15-christ-subdues',
          title: 'Christ Connection — Christ Subdues All Things',
          html:
            'Christ&apos;s resurrection is not the end. It is the beginning of His reign. He is seated at the right hand of God (Heb. 1:3), from where He subjects all enemies under His feet. The resurrection is not Christ&apos;s escape from the world but His establishment as Lord of all creation. One day every knee will bow and every tongue confess that Jesus Christ is Lord (Phil. 2:10–11).',
        },
        {
          kind: 'carry',
          html:
            'Everything you see that is broken—disease, injustice, suffering, death itself—is temporary. Christ is working to subdue it all. Your suffering is real. But it is not eternal. Death is real. But it is the last enemy, and it will be destroyed. Hold on to this when the world seems to be winning. Christ is already winning.',
        },
        {
          kind: 'reflection',
          id: 'cor15-subdued-reflect',
          prompt: 'What enemy in your life feels undefeated right now? How does the promise that Christ will subdue all things change your response to it?',
        },
      ],
    },

    /* ─── 1 Corinthians 15:29–34 — Baptized for the Dead ───────────────────────── */
    {
      ref: '1 Corinthians 15:29–34',
      title: 'Baptized for the Dead',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(29,
              t('Else what shall they do which are baptized for the dead, if the dead rise not at all? why are they then baptized for the dead?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-baptized-dead',
          html:
            'Paul mentions a practice in the Corinthian church: some believers are being baptized for the dead. He does not explain the practice. He does not endorse or condemn it. He simply uses it as an argument. If the dead do not rise, why would the Corinthians practice this? The practice itself assumes resurrection. If there is no resurrection, the practice is pointless.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(30,
              t('And why stand we in jeopardy every hour?')
            ),
            verse(31,
              t('I protest by your rejoicing which I have in Christ Jesus our Lord, '),
              hg('I die daily', 'cor15-die-daily'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-die-daily',
          html:
            'Paul moves from the Corinthians&apos; practice to his own. He faces danger constantly. He says, "I die daily." This is not metaphor for spiritual growth or denial. It is literal: Paul is endangered, persecuted, in jeopardy constantly. If there is no resurrection, if this life is all there is, then Paul is the most foolish of men. He is throwing away his one chance at comfort and safety for nothing.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(32,
              t('If after the manner of men I have fought with beasts at Ephesus, what advantageth it me, if the dead rise not? let us eat and drink; for to morrow we die.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-fought-beasts',
          html:
            'Whether Paul literally fought beasts at Ephesus or is speaking metaphorically of intense persecution, his point is clear: he has endured hardship. If there is no resurrection, the reasonable response is the Epicurean motto: "Let us eat and drink, for tomorrow we die." But Paul has not lived that way. He has lived as though resurrection is real.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(33,
              t('Be not deceived: evil communications corrupt good manners.')
            ),
            verse(34,
              t('Awake to righteousness, and sin not; for some have not the knowledge of God: I speak this to your shame.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-evil-communications',
          html:
            'Paul quotes a Greek saying: "Evil communications corrupt good manners." If some Corinthians truly do not believe in resurrection, they will inevitably live as though this life is all that matters. They will pursue pleasure, comfort, status. Their unbelief will corrupt their character. Paul urges them to wake up. Believe in the resurrection. Live as though God sees, as though you will give account, as though there is an eternity.',
        },
        {
          kind: 'carry',
          html:
            'Do you believe in the resurrection? Not as a vague hope, but as a conviction that shapes how you live? If you do, you will face suffering differently. You will pursue holiness differently. You will spend your money and time differently. You will look at death differently. The resurrection is not a sidelight. It is the organizing principle of the Christian life.',
        },
        {
          kind: 'reflection',
          id: 'cor15-daily-dying',
          prompt: 'Would you be willing to "die daily" for something you are not sure will be resurrected? What would it take for you to live as confidently in the resurrection as Paul did?',
        },
      ],
    },

    /* ─── 1 Corinthians 15:35–49 — What Is Sown and What Is Raised ──────────────── */
    {
      ref: '1 Corinthians 15:35–44',
      title: 'The Seed and the Body',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(35,
              t('But some man will say, How are the dead raised up? and with what body do they come?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-how-raised',
          html:
            'The Corinthians are asking the practical question: if the dead are raised, what kind of body do they have? Is it the same body? How can a body that has decomposed be restored? These are the questions of a skeptic in any age. Paul answers with an analogy.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(36,
              t('Thou fool, that which thou sowest is not quickened, except it die:')
            ),
            verse(37,
              t('And that which thou sowest, thou sowest not that body that shall be, but bare grain, it may chance of wheat, or of some other grain:')
            ),
            verse(38,
              t('But God giveth it a body as it hath pleased him, and to every seed his own body.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-seed-analogy',
          html:
            'When you plant a seed, you plant what appears dead. The seed falls to the ground and rots. The form you plant is not the form that grows. Yet the plant that comes up is not a different substance. It is the development of what was always in the seed. God transforms it. The grain you sow is "bare." The stalk that grows is clothed in life.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(39,
              t('All flesh is not the same flesh: but there is one kind of flesh of men, another flesh of beasts, another of fishes, and another of birds.')
            ),
            verse(40,
              t('There are also celestial bodies, and bodies terrestrial: but the glory of the celestial is one, and the glory of the terrestrial is another.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-kinds-bodies',
          html:
            'Paul&apos;s point: there are many kinds of bodies. Each suits its realm. Fish bodies are suited to water. Bird bodies to air. Terrestrial bodies to earth. Celestial bodies to heaven. The resurrection body is not an earthly body translated to heaven. It is a body suited to the new creation.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(41,
              t('There is one glory of the sun, and another glory of the moon, and another glory of the stars: for one star differeth from another star in glory.')
            ),
            verse(42,
              t('So also is the resurrection of the dead. It is sown in corruption; it is raised in incorruption:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-raised-incorruption',
          html:
            'The body is sown "in corruption"—it decays, rots, returns to dust. It is raised "in incorruption"—imperishable, eternal, no longer subject to decay. This is not the same body. This is the same <em>person</em> in a transformed body.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(43,
              t('It is sown in dishonour; it is raised in glory: it is sown in weakness; it is raised in power:')
            ),
            verse(44,
              t('It is sown a natural body; it is raised a '),
              hy('spiritual body', 'cor15-spiritual-body'),
              t('. There is a natural body, and there is a spiritual body.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-spiritual-body',
          html:
            'Paul distinguishes the "natural body" (<em>soma psychikon</em>) from the "spiritual body" (<em>soma pneumatikon</em>). The natural body is animated by <em>psychē</em>, the life-force. The spiritual body is animated by <em>pneuma</em>, the Spirit. This is not escape from embodiment. It is transformation of embodiment. You will have a body in the resurrection—a real, tangible body—but one animated by the Spirit instead of the flesh.',
        },
        {
          kind: 'greek',
          id: 'cor15-soma',
          title: 'Soma — Body',
          script: 'σῶμα',
          translit: '<strong>soma</strong> · body; the physical form; the whole person',
          description:
            'Paul does not teach the escape of a soul from its body prison. He teaches the transformation of the body. The resurrection is the redemption of the body. You are a body. In the resurrection, you will still be a body—transformed, imperishable, spiritual—but a body nonetheless.',
        },
        {
          kind: 'carry',
          html:
            'Your body is not a problem. It is not a prison. It is a creation. Yes, it decays. Yes, it dies. But it will be redeemed. You will not float as a disembodied spirit forever. You will have a resurrected body—a real, tangible, spiritual body. This transforms how you treat your body now. It is not temporary. It is destined for eternity.',
        },
        {
          kind: 'reflection',
          id: 'cor15-body-reflect',
          prompt: 'How does the promise of a resurrected body change your understanding of your physical existence? How should it change the way you treat your body?',
        },
      ],
    },

    /* ─── 1 Corinthians 15:45–49 — The First Adam and the Last Adam ──────────── */
    {
      ref: '1 Corinthians 15:45–49',
      title: 'The First Adam and the Last Adam',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(45,
              t('And so it is written, The first man Adam was made a '),
              hy('living soul', 'cor15-living-soul'),
              t('; the '),
              hp('last Adam', 'cor15-last-adam'),
              t(' was made a '),
              hy('quickening spirit', 'cor15-quickening-spirit'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-living-soul',
          html:
            'Paul quotes Genesis 2:7: "The Lord God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul." Adam was alive, but his life was natural, mortal, subject to death. He breathed air and ate food. He was sustained by earthly things.',
        },
        {
          kind: 'commentary',
          id: 'cor15-last-adam',
          html:
            'The "last Adam" is Christ. Just as Adam was the first human, Christ is the new human, the second man, the one who overcomes what Adam could not. If Adam brought death, Christ brings resurrection.',
        },
        {
          kind: 'commentary',
          id: 'cor15-quickening-spirit',
          html:
            'Christ "was made a quickening spirit." <em>Zōopoieō</em> means to make alive, to give life. Christ is not merely alive; He is life-giving. His resurrection is not just about Himself. It gives life to all who believe in Him.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(46,
              t('Howbeit that was not first which is spiritual, but that which is natural; and afterward that which is spiritual.')
            ),
            verse(47,
              t('The first man is of the earth, earthy: the second man is the Lord from heaven.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-second-man',
          html:
            'The order is fixed: the natural comes first, the spiritual afterward. Adam came first, earthly and natural. Christ comes second, from heaven, eternal, spiritual. This is not a cycle that can be reversed. Christ is not re-cycling to the earthly plane. He is introducing a new creation.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(48,
              t('As is the earthy, such are they also that are earthy: and as is the heavenly, such are they also that are heavenly.')
            ),
            verse(49,
              t('And as we have borne the image of the earthy Adam, we shall also bear the '),
              hp('image of the heavenly', 'cor15-image-heavenly'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-image-heavenly',
          html:
            'You inherited Adam&apos;s nature—you are earthly, mortal, subject to death. But when Christ appears, those who believe in Him will be transformed. You will "bear the image of the heavenly." You will become like Christ. Not that you will become divine. But you will be like Him in His resurrection—imperishable, spiritual, eternal.',
        },
        {
          kind: 'christ',
          id: 'cor15-christ-second-man',
          title: 'Christ Connection — Christ as the Second Man',
          html:
            'Christ is not merely a spiritual principle or a moral example. He is a person—the last Adam, the new human, the one who breaks the grip of death that has held humanity since the first Adam. To be "in Christ" (a phrase Paul uses constantly) is to be transferred from Adam&apos;s humanity to Christ&apos;s humanity. You are no longer merely natural; you are becoming spiritual. You are no longer merely earthy; you are becoming heavenly.',
        },
        {
          kind: 'carry',
          html:
            'You are made in the image of Adam—and therefore you are mortal, earthly, subject to corruption. But you are being transformed into the image of Christ—and therefore you will be raised, immortal, heavenly. This is not something you earn or achieve. It is what Christ&apos;s resurrection does in you, by grace.',
        },
        {
          kind: 'reflection',
          id: 'cor15-adam-reflect',
          prompt: 'In what ways do you see yourself bearing the image of the earthly Adam? In what ways are you already becoming like Christ? How will the resurrection perfect that transformation?',
        },
      ],
    },

    /* ─── 1 Corinthians 15:50–58 — We Shall All Be Changed ────────────────────── */
    {
      ref: '1 Corinthians 15:50–58',
      title: 'We Shall All Be Changed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(50,
              t('Now this I say, brethren, that flesh and blood cannot inherit the kingdom of God; neither doth corruption inherit incorruption.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-cannot-inherit',
          html:
            'Paul is blunt: your current body cannot enter the kingdom. This is not because matter is evil (the Greek error). It is because your current body is <em>corruptible</em>—it decays, it dies, it is temporary. The kingdom requires an incorruptible body. You need to be transformed.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(51,
              t('Behold, I shew you a '),
              hy('mystery', 'cor15-mystery'),
              t('; We shall not all sleep, but we shall all be changed,')
            ),
            verse(52,
              t('In a moment, in the '),
              hg('twinkling of an eye', 'cor15-twinkling'),
              t(', at the last trump: for the trumpet shall sound, and the dead shall be raised incorruptible, and we shall be changed.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-mystery',
          html:
            'Paul says "mystery"—not because it is magical or irrational, but because it is something previously hidden that God has now revealed. The transformation of our mortal bodies happens in the twinkling of an eye. It is not a process. It is instantaneous.',
        },
        {
          kind: 'commentary',
          id: 'cor15-twinkling',
          html:
            'The phrase is unforgettable. In the blink of an eye. So fast you cannot measure it. Yet in that moment, everything changes. The dead are raised incorruptible. The living are transformed. Mortality becomes immortality.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(53,
              t('For this corruptible must put on incorruption, and this mortal must put on '),
              hy('immortality', 'cor15-immortality'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-immortality',
          html:
            'Paul uses the image of putting on clothes. Your current body is like a garment that is falling apart. You will put it off and put on a garment of immortality. <em>Athanasia</em>—literally, not-death. The condition of not being subject to death.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(54,
              t('So when this corruptible shall have put on incorruption, and this mortal shall have put on immortality, then shall be brought to pass the saying that is written, '),
              hp('Death is swallowed up in victory', 'cor15-death-swallowed'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-death-swallowed',
          html:
            'Paul quotes Isaiah 25:8. Death is "swallowed up"—<em>katapinō</em>, to drink down, to consume completely. Death does not simply lose a battle. It is consumed by victory. It ceases to exist. This is the ultimate end.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(55,
              t('O death, where is thy sting? O grave, where is thy victory?')
            ),
            verse(56,
              t('The sting of death is sin; and the strength of sin is the law.')
            ),
            verse(57,
              t('But thanks be to God, which giveth us the '),
              hp('victory', 'cor15-victory-god'),
              t(' through our Lord Jesus Christ.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-victory-god',
          html:
            'The victory is God&apos;s, not ours. We do not defeat death by our own strength. We are given victory through Christ. His resurrection is the ground of ours. His defeat of death is the source of our freedom.',
        },
        {
          kind: 'greek',
          id: 'cor15-nikos',
          title: 'Nikē — Victory',
          script: 'νίκη',
          translit: '<strong>nikē</strong> · victory; conquest; triumph; overcoming',
          description:
            'The same word Paul uses here is the root of "Nike"—not the shoe brand, but the Greek goddess of victory. <em>Nikē</em> is not achieved by might alone; it is the overcoming of an enemy, the triumph that comes when what seemed impossible is accomplished.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            verse(58,
              t('Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord, forasmuch as ye know that your labour is not in vain in the Lord.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor15-labor-not-vain',
          html:
            'Paul does not end with future hope alone. He ends with a command: be steadfast, be unmoveable, abound in the Lord&apos;s work. Why? Because your labor is not in vain. Nothing you do for Christ will be lost. It will all be redeemed, resurrected, perfected in the age to come. You are not throwing your life away. You are investing it in something eternal.',
        },
        {
          kind: 'christ',
          id: 'cor15-christ-victory-final',
          title: 'Christ Connection — Christ Gives Victory Now and Forever',
          html:
            'The victory belongs to Christ. He defeated death. He rose on the third day. And His victory is given to us—not at some distant future, but beginning now. You do not have to wait for the resurrection to know that Christ has won. You know it now. Live as though it is true. Because it is.',
        },
        {
          kind: 'carry',
          html:
            'Your work—raising your children, serving at church, loving your neighbor, building something, creating, teaching, helping—is not temporary. It is not lost at death. It is sown into the age to come. One day every act of love, every moment of faithfulness, every sacrifice made for Christ will be revealed and rewarded. Be steadfast. Your labor is not in vain.',
        },
        {
          kind: 'reflection',
          id: 'cor15-labor-reflect',
          prompt: 'What work or calling have you felt tempted to abandon because it seems insignificant or because you won&apos;t see its fruit? How does the promise that your labor is not in vain change that perspective?',
        },
        {
          kind: 'artwork',
          matchTitle: /resurrection|easter|risen|tomb/i,
          caption: '1 Corinthians 15 — The Resurrection of Christ',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O death, where is thy sting? O grave, where is thy victory? But thanks be to God, which giveth us the victory through our Lord Jesus Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 15:55, 57',
  },

  hasHebrew: false,
};
