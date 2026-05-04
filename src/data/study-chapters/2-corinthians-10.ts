import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * 2 Corinthians 10 — Casting Down Imaginations
 *
 * Paul addresses the Corinthian church in his own voice, confronting false
 * apostles who have undermined his authority through mockery of his physical
 * weakness and his writing. Paul responds with a paradox: he is meek and gentle
 * in person—the meekness of Christ himself—yet formidable in spiritual warfare.
 * The weapons of his ministry are not carnal (force, rhetoric, intimidation) but
 * spiritual: truth, prayer, and the mighty power of God. The battle is for the
 * mind—for imaginations, philosophies, and thoughts that exalt themselves against
 * the knowledge of God. Victory comes by bringing every thought into captivity to
 * the obedience of Christ.
 */
export const SECOND_CORINTHIANS_10: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 10,

  estimatedMinutes: { beginner: 9, intermediate: 16, deep: 21 },
  topicTags: ['suffering', 'compassion', 'witness', 'hope'],
  opener: {
    topical: true,
    caption: '2 Corinthians 10',
  },
  intros: [
    'The Corinthians have been influenced by false apostles—charismatic speakers who boast of their credentials, their impressive presence, and their accomplishments. They have questioned Paul&apos;s authority, mocked his weak bodily presence, and derided his speech. Paul responds to this slander not with the world&apos;s weapons—bluster, self-promotion, intimidation—but by reclaiming what spiritual authority actually is.',
    'In this chapter, Paul defines the nature of spiritual warfare. The conflict is not physical but intellectual, philosophical, and spiritual. The weapons are not carnal but mighty through God: the truth of the gospel, the power of prayer, and the transforming clarity of Christ. Paul must demolish false imaginations—worldly philosophies and systems of thought that have fortified themselves against God—and bring every thought into captivity to Christ.',
  ],

  sections: [
    /* ─── 2 Corinthians 10:1 — The Meekness and Gentleness of Christ ──────── */
    {
      ref: '2 Corinthians 10:1',
      title: 'The Meekness and Gentleness of Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              1,
              t('Now I Paul myself beseech you by '),
              hp('the meekness and gentleness of Christ', 'christ-meek-gentle'),
              t(', who in appearance am lowly among you, but being absent am bold toward you:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-10-beseech',
          html:
            'Paul opens not with threats or boasts but with a plea—<em>I beseech you</em>—grounded in the meekness and gentleness of Christ. His authority does not rest on intimidating presence or rhetorical power, but on the character of Christ. Paul is about to make firm claims about his apostolic authority, yet he frames them in the gentleness of Christ. This is not weakness; it is the strength of Christ&apos;s own pattern[res:sefaria-2-corinthians-10].',
        },
        {
          kind: 'greek',
          id: 'greek-praotes',
          title: 'Praotēs — "Meekness"; Gentleness',
          script: 'πραότης',
          translit: '<strong>praotēs</strong> · meekness; gentleness; humility united with strength',
          description:
            'Praotēs is not weakness or passive timidity. It is strength held under control, gentleness joined with power. Jesus claims praotēs for himself: "I am meek and lowly in heart" (Matt. 11:29). Here Paul claims the same character for his own apostolic ministry.',
        },
        {
          kind: 'commentary',
          id: 'cor2-10-appearance-absent',
          html:
            'Paul acknowledges the charge: in person he is "lowly" (literally, "humble," "of little account"), yet when absent he is bold. His critics have mocked this contrast—he writes fierce letters but shrinks in person. Paul owns the observation: yes, I am meek when present, yet my authority is no less real when I am away.',
        },
        {
          kind: 'christ',
          id: 'christ-meek-gentle',
          title: 'Christ Connection — His Meekness, His Power',
          html:
            'Jesus himself claimed meekness: "Take my yoke upon you, and learn of me; for I am meek and lowly in heart" (Matt. 11:29). Yet the same Jesus overturned tables, cast out demons, and will one day judge the living and the dead. Meekness in Scripture is never weakness; it is power held under the control of love. Paul&apos;s gentleness in person—his willingness to be thought lowly—does not diminish his apostolic authority. Like Christ, his authority rests not on impressive appearance but on truth and the power of God.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world that confuses gentleness with powerlessness and strength with domination. Every day you see people who believe that to be heard, they must be loud; to lead, they must intimidate; to be worthy, they must perform. Paul models something else: a meekness that is not apologetic, a gentleness that is not soft, a quietness that carries real authority. Somewhere today you will have a chance to speak truth gently, to hold a boundary without bluster, to lead without dominating. That is the pattern of Christ.',
        },
        {
          kind: 'reflection',
          id: 'meekness-reflection',
          prompt:
            'Where are you tempted to believe that meekness is weakness? Where might God be calling you to exercise the strength of gentleness—to hold a firm boundary, speak a hard truth, or lead without intimidation?',
        },
      ],
    },

    /* ─── 2 Corinthians 10:2–4 — "We Walk in the Flesh" ───────────────────── */
    {
      ref: '2 Corinthians 10:2–4',
      title: 'Walking in the Flesh but Warring Not After the Flesh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              2,
              t('But I beseech you, that I may not be bold when I am present with that confidence, wherewith I think to be bold against some, which think of us as if we walked according to the flesh.')
            ),
            verse(
              3,
              t('For though '),
              hg('we walk in the flesh', 'c-walk-flesh'),
              t(', we do not war after the flesh:')
            ),
            verse(
              4,
              t('(For '),
              hp('the weapons of our warfare', 'christ-weapons'),
              t(' are not carnal, but '),
              hy('mighty through God', 'greek-dunatos'),
              t(' to the pulling down of '),
              hg('strong holds', 'c-strongholds'),
              t(';)')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-walk-flesh',
          html:
            '"We walk in the flesh"—Paul and the apostles are human, embodied, living in this material world. But to "walk according to the flesh" is to live by the flesh&apos;s logic: power, self-promotion, dominance, the weapons the world uses. Paul&apos;s opponents think this is what he does. He denies it. Yes, I am human, but I do not war by human weapons.',
        },
        {
          kind: 'commentary',
          id: 'c-strongholds',
          html:
            'The "strongholds" (Greek: <em>ochyrōma</em>, "fortified places")[res:cambridge-strongholds-thought] are systems of thought, philosophies, ideologies, and false doctrines that have entrenched themselves against the truth of God. They are not walls of stone but walls of human reasoning, cultural assumption, and spiritual deception. Paul&apos;s task is to demolish them—not by human rhetoric but by the power of truth.',
        },
        {
          kind: 'greek',
          id: 'greek-dunatos',
          title: 'Dunatos — Mighty; Powerful; Able',
          script: 'δύναμις',
          translit: '<strong>dunatos</strong> (from <strong>dynamis</strong>) · mighty; powerful; strong; able',
          description:
            'The weapons of the apostles are not made of flesh and blood, but they are dynamically powerful. They have the capacity to demolish fortified positions—not by brute force but by the power of God working through them.',
        },
        {
          kind: 'christ',
          id: 'christ-weapons',
          title: 'Christ Connection — The True Weapons',
          html:
            'When Peter drew his sword in the garden to defend Jesus, Jesus rebuked him: "Put up again thy sword into his place: for all they that take the sword shall perish with the sword" (Matt. 26:52). Jesus faced arrest, torture, and death without carnal resistance. Yet His apparent defeat became the victory that conquered death and hell. The weapons of the cross[res:bibleodyssey-armor-god] are not carnal: they are truth, suffering love, and the power of resurrection. Paul wields those same weapons.',
        },
        {
          kind: 'carry',
          html:
            'You are in a spiritual battle too. The weapons you are tempted to use—anger, mockery, manipulation, force of personality, social pressure—do not actually work. They may win a moment, but they do not transform hearts or change minds. The real weapons are quieter and harder: truth spoken steadily, prayer held faithfully, love offered when it is not returned, trust held in God when the world seems to be winning. These do not always look like victory. But they are.',
        },
        {
          kind: 'reflection',
          id: 'weapons-reflection',
          prompt:
            'What "carnal weapons" are you tempted to use in your conflicts—anger, manipulation, reputation-guarding, mockery? What would it look like to trade them for spiritual weapons: truth, prayer, steadfast love?',
        },
      ],
    },

    /* ─── 2 Corinthians 10:5 — Casting Down Imaginations ──────────────────── */
    {
      ref: '2 Corinthians 10:5',
      title: 'Casting Down Imaginations; Every Thought Captive',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              5,
              t('Casting down '),
              hg('imaginations', 'greek-logismos'),
              t(', and every high thing that exalteth itself against the knowledge of God, and bringing into captivity every thought to the obedience of '),
              hp('Christ', 'christ-captivity'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-imaginations-demolish',
          html:
            'Paul uses the language of warfare. He does not reason or negotiate with imaginations—he casts them down, demolishes them. The Greek word <em>logismos</em> refers not only to private thoughts but to systems of reasoning, to entire frameworks of understanding that have built themselves up against God. These include the boasts of false apostles, the worldly standards by which the Corinthians are judging authority, and any philosophy that opposes the knowledge of God.',
        },
        {
          kind: 'greek',
          id: 'greek-logismos',
          title: 'Logismos — Imagination; Reasoning; Thought',
          script: 'λογισμός',
          translit: '<strong>logismos</strong> · imagination; thought; reasoning; calculation; inference',
          description:
            'Logismos includes not mere private thoughts but the systems of reasoning and imagination that people build: false theologies, worldly philosophies, cultural narratives that stand against God. Paul&apos;s mission includes demolishing these.',
        },
        {
          kind: 'commentary',
          id: 'c-every-high-thing',
          html:
            '"Every high thing that exalteth itself"—Paul personifies these false systems as if they were enemies marching against the walls of God&apos;s kingdom. They are proud, they elevate themselves, they resist the knowledge of God. And yet they are not invincible. They fall before truth.',
        },
        {
          kind: 'commentary',
          id: 'c-thoughts-captive',
          html:
            'The ultimate goal is not to win an argument but to bring every thought into captivity to the obedience of Christ. Not to destroy thinking itself, but to realign it. A mind brought into obedience to Christ is a mind that has learned to think as Christ thinks, to value what He values, to submit its reasoning to His lordship.',
        },
        {
          kind: 'christ',
          id: 'christ-captivity',
          title: 'Christ Connection — Every Thought Bowing to Christ',
          html:
            'Jesus taught His disciples to "deny himself, and take up his cross" (Matt. 16:24)—to submit even the will to His lordship. Paul extends this to the mind. Not autonomous thought, not "follow your dreams" or "trust your instincts," but <em>every thought</em> brought under the obedience of Christ. This is not anti-intellectual; it is thinking oriented rightly. As Jesus said, "As a man thinketh in his heart, so is he" (Prov. 23:7, quoted throughout Scripture). A life transformed begins with thoughts transformed.',
        },
        {
          kind: 'carry',
          html:
            'You are not aware of half the imaginations that shape your life. The unexamined beliefs about your worth, your future, your relationships, your God—these fortify themselves quietly, and you live inside them without ever questioning them. Paul calls you to spiritual warfare that begins in the mind. What imaginations are you accepting without testing them against Christ? What thought-patterns have built themselves into your reasoning without you noticing? Name one today. Bring it into the light. Ask Christ to transform it.',
        },
        {
          kind: 'reflection',
          id: 'imaginations-reflection',
          prompt:
            'What imagination—about yourself, about God, about what matters—has quietly built a fortress in your thinking? What would it mean to cast it down and bring that thought into obedience to Christ?',
        },
      ],
    },

    /* ─── 2 Corinthians 10:6 — Readiness to Revenge ────────────────────────── */
    {
      ref: '2 Corinthians 10:6',
      title: 'Readiness to Avenge Disobedience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              6,
              t('And having in a readiness to revenge all disobedience, when your obedience is '),
              hg('fulfilled', 'c-fulfilled'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fulfilled',
          html:
            'Paul frames his apostolic authority with a condition: he is ready to punish disobedience <em>when your obedience is fulfilled</em>. This suggests that the Corinthians as a whole have not yet fully submitted to his apostolic authority. There are some—the false apostles and their followers—who are in rebellion. Paul is warning them that his gentleness has a limit. He will not hesitate to exercise discipline when necessary.',
        },
        {
          kind: 'commentary',
          id: 'c-revenge-meaning',
          html:
            'The word "revenge" here (Greek: <em>ekdikesis</em>) carries the sense of judicial punishment or vindication. Paul does not speak from personal vendetta but from apostolic authority. He has been given authority by Christ to build up the church and to correct those who resist.',
        },
        {
          kind: 'carry',
          html:
            'Gentleness and firmness are not opposites. You can be meek in manner and yet hold a boundary. You can speak kindly and yet speak truth that confronts. You can be patient and yet not enable disobedience. Paul&apos;s model is neither harsh nor permissive, but discerning. Where are you tempted to use one extreme or the other? Where might God be calling you to hold both?',
        },
      ],
    },

    /* ─── 2 Corinthians 10:7 — Looking Beyond Appearance ─────────────────── */
    {
      ref: '2 Corinthians 10:7',
      title: 'Who Belongs to Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              7,
              t('Do ye look on things after the outward appearance? If any man trust to himself that he is '),
              hp('Christ\'s', 'c-christs-own'),
              t(', let him of himself think this again, that, as he is Christ\'s, even so are '),
              hg('we', 'c-paul-we'),
              t(' Christ\'s.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-christs-own',
          html:
            'The false apostles have been claiming to belong to Christ. They boast of their authority, their impressive appearance, their credentials. Paul does not deny that they may be believers, but he insists that belonging to Christ is not established by outward performance or self-commendation. It is a matter between the soul and Christ.',
        },
        {
          kind: 'commentary',
          id: 'c-paul-we',
          html:
            'Paul&apos;s response is subtle: "even so are we Christ&apos;s." He does not argue his case by superior display but by a simple claim of equal belonging. Yes, they belong to Christ; so do we. The criterion for apostolic authority is not impressive appearance but genuine commission from Christ.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world of outward appearance. Social media trains you to judge by image. Marketing trains you to believe the most impressive presentation. Status trains you to think that visibility equals worth. Paul calls you to look deeper. The question that matters is not "Who looks the most impressive?" but "Who actually belongs to Christ? Who is living under His lordship? Who has been truly transformed?" These are not always the loudest voices in the room.',
        },
      ],
    },

    /* ─── 2 Corinthians 10:8 — Authority for Edification ──────────────────── */
    {
      ref: '2 Corinthians 10:8',
      title: 'Authority for Building Up, Not Tearing Down',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              8,
              t('For though I should boast somewhat more of our authority, which the Lord hath given us for '),
              hg('edification', 'c-edification'),
              t(', and not for your destruction, I should not be ashamed:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-edification',
          html:
            'Paul has apostolic authority from the Lord. He could boast more than he does. But he measures his use of that authority by a single criterion: <em>edification</em>. Authority is not a privilege to be enjoyed but a stewardship to be exercised for the building up of the body of Christ. Destruction is never the goal; building is.',
        },
        {
          kind: 'commentary',
          id: 'c-authority-lord',
          html:
            'Notice: "which the Lord hath given us." Paul&apos;s authority is not self-derived. It is a gift from the Lord. This locates apostolic authority in Christ, not in Paul&apos;s credentials or accomplishments. Whatever authority Paul claims flows from the one who commissioned him.',
        },
        {
          kind: 'carry',
          html:
            'If you have any authority in anyone&apos;s life—as a parent, a leader, a teacher, a mentor—Paul&apos;s word is for you. That authority is not yours to enjoy. It is yours to steward for the building up of others. Does every exercise of your authority—every correction, every decision, every word—serve to build up? Or are you using it to protect your reputation, to win, to prove you are right? The question that matters is edification.',
        },
      ],
    },

    /* ─── 2 Corinthians 10:9–11 — "His Letters Are Weighty" ───────────────── */
    {
      ref: '2 Corinthians 10:9–11',
      title: 'Strong in Writing, Weak in Presence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              9,
              t('That I may not seem as if I would terrify you by letters;')
            ),
            verse(
              10,
              t('For his letters, say they, are weighty and powerful; but his bodily presence is weak, and his speech contemptible.')
            ),
            verse(
              11,
              t('Let such an one think this, that, such as we are in word by letters when we are absent, such will we be also in deed when we are present.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-letters-powerful',
          html:
            'This is remarkable witness to Paul&apos;s own letters. His critics admit that his <em>grammata</em> (written words) are "weighty and powerful." They feel the force of his written arguments. Yet they mock his bodily presence: he is weak, physically unimpressive; his speech is contemptible. This contrast has been Paul&apos;s burden throughout his ministry, and he addresses it here with dignity.',
        },
        {
          kind: 'commentary',
          id: 'c-word-deed',
          html:
            'Paul&apos;s final word to them is this: do not mistake the medium for the message. Yes, I am more forceful in writing. But when I come in person, the strength you have felt in my letters will be matched by the strength of my presence and my deeds. I am not a coward who writes fierce letters and shrinks in person. I am one and the same.',
        },
        {
          kind: 'carry',
          html:
            'You probably know the feeling: it is easier to be bold in writing, in texts, in emails. The screen gives you a distance that emboldens you. But Paul calls for integrity—the same person in writing and in presence. Let your words match your deeds. Let your online voice match your real voice. Let the truth you write be the truth you live.',
        },
      ],
    },

    /* ─── 2 Corinthians 10:12 — "Comparing Themselves Among Themselves" ───── */
    {
      ref: '2 Corinthians 10:12',
      title: 'The Trap of Self-Commendation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              12,
              t('For we dare not make ourselves of the number, or compare ourselves with some that commend themselves: but they measuring themselves by themselves, and comparing themselves among themselves, are '),
              hg('not wise', 'c-not-wise'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-self-measuring',
          html:
            'The false apostles have fallen into a trap: they commend themselves, they use themselves as the standard, they compare themselves with others like themselves. In this closed circle, they always measure well. But this is a fool&apos;s game. When you choose your own standard, you always win by definition.',
        },
        {
          kind: 'greek',
          id: 'greek-metron',
          title: 'Metron — Measure; Standard; Proportion',
          script: 'μέτρον',
          translit: '<strong>metron</strong> · measure; standard; limit; proper proportion',
          description:
            'A <em>metron</em> is a fixed standard of measurement. The false apostles have no fixed standard; they use themselves. Paul will speak of <em>his</em> metron—a boundary and measure given to him by the Lord.',
        },
        {
          kind: 'commentary',
          id: 'c-not-wise',
          html:
            'This is Paul&apos;s judgment: such self-measuring is not wise. It is foolish because it is based on self-deception. The only true measure is the standard that God has set—and against that standard, none of us measure as we would like to.',
        },
        {
          kind: 'carry',
          html:
            'You live in the age of self-promotion. Everyone curates their own image. Everyone selects the best angles, the best moments, the best interpretations of their own story. Social media is the endless game of measuring yourself by yourself and comparing yourself with others who are also measuring themselves. And everyone looks great by their own standard. Paul calls you to a different measure: the standard of Christ. Hold your life against that measure, not against the curated lives of others.',
        },
        {
          kind: 'reflection',
          id: 'self-measure-reflection',
          prompt:
            'Who do you compare yourself to, and by what standard? What would change if you stopped measuring yourself by yourself and against the world, and instead held your life against the standard of Christ?',
        },
      ],
    },

    /* ─── 2 Corinthians 10:13–16 — The Measure of Paul's Authority ────────── */
    {
      ref: '2 Corinthians 10:13–16',
      title: 'Boasting Within the Measure God Has Given',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              13,
              t('But we will not boast of things without our measure, but according to the measure of the rule which God hath distributed to us, a measure to reach even unto you.')
            ),
            verse(
              14,
              t('For we stretch not ourselves beyond our measure, as though we reached not unto you: for we are come as far as to you also in preaching the gospel of Christ:')
            ),
            verse(
              15,
              t('Not boasting of things without our measure, that is, of other men\'s labours; but having hope, when your faith is increased, that we shall be enlarged by you according to our rule abundantly,')
            ),
            verse(
              16,
              t('To preach the gospel in the regions beyond you, and not to boast in another man\'s line of things made ready to our hand.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-measure-god-given',
          html:
            'Paul shifts now to his own metron. God has given him a measure—a sphere of authority, a field of ministry that reaches even to Corinth. This is Paul&apos;s boast: not his accomplishments apart from God, but the measure God has given him and his faithfulness within it. He does not claim authority over regions he has not reached. He does not build on another man&apos;s foundation. His boast is bounded by the measure of work God has given him to do.',
        },
        {
          kind: 'commentary',
          id: 'c-not-another-mans',
          html:
            'Paul refuses to boast of "other men&apos;s labours." The false apostles, it seems, have been claiming credit for work others have done, or building on foundations Paul himself has laid and then taking authority over them. Paul refuses this trap. His boast is in his own faithful work within the measure God has given.',
        },
        {
          kind: 'christ',
          id: 'christ-measure',
          title: 'Christ Connection — The Measure of Faithfulness',
          html:
            'Jesus gave His disciples this standard: "Well done, thou good and faithful servant: thou hast been faithful over a few things, I will make thee ruler over many things" (Matt. 25:21). Not "Well done, thou impressive servant" or "Well done, thou visible servant," but "faithful." Faithfulness within a small measure matters more than grandiosity within a large one. Paul&apos;s boast is in the measure God gave him and his faithfulness to steward it well.',
        },
        {
          kind: 'carry',
          html:
            'You are tempted to compare your measure with someone else&apos;s. You see their platform, their reach, their influence, and you feel small. Paul calls you to ask a different question: What measure has God actually given you? And are you faithful within it? Maybe your measure is your family. Maybe it is a single person you have been called to disciple. Maybe it is a work you do in obscurity. Paul&apos;s word is: faithfulness within the measure you have been given is worth more than grandeur in a measure you were never meant to have.',
        },
        {
          kind: 'reflection',
          id: 'measure-reflection',
          prompt:
            'What measure has God actually given you? Instead of comparing yourself with others, are you being faithful within the boundaries of your own assignment?',
        },
      ],
    },

    /* ─── 2 Corinthians 10:17–18 — "Let Him Glory in the Lord" ────────────── */
    {
      ref: '2 Corinthians 10:17–18',
      title: 'Glory Only in the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              17,
              t('But he that glorieth, let him '),
              hp('glory in the Lord', 'christ-glory-lord'),
              t('.')
            ),
            verse(
              18,
              t('For not he that commendeth himself is approved, but whom the Lord commendeth.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-glory-foundation',
          html:
            'This verse echoes Jeremiah: "But let him that glorieth glory in this, that he understandeth and knoweth me, that I am the Lord which exercise lovingkindness, judgment, and righteousness, in the earth: for in these things I delight" (Jer. 9:24). To glory in the Lord is to make Him—not oneself—the source and substance of all boasting.',
        },
        {
          kind: 'greek',
          id: 'greek-kauchaomai',
          title: 'Kauchaomai — To Boast; To Glory; To Exult',
          script: 'καυχάομαι',
          translit: '<strong>kauchaomai</strong> · to boast; to glory; to exult; to take pride in',
          description:
            'The verb appears throughout this chapter. The question is not whether you will boast—you will. The question is what you will boast in. False apostles boast in themselves. Paul boasts in the Lord. The same capacity to exult, directed rightly.',
        },
        {
          kind: 'commentary',
          id: 'c-lords-commendation',
          html:
            'Self-commendation is worthless. You can praise yourself endlessly, and it proves nothing. The commendation that matters is the Lord&apos;s. Not the applause of crowds, not the validation of peers, not your own sense of accomplishment. The approval of the Lord.',
        },
        {
          kind: 'christ',
          id: 'christ-glory-lord',
          title: 'Christ Connection — His Commendation Is Enough',
          html:
            'On the day of judgment, Jesus said, it will not be about who commended themselves. It will be about what the King says: "Come, ye blessed of my Father, inherit the kingdom prepared for you from the foundation of the world" (Matt. 25:34). Or the opposite. The only commendation that will matter in eternity is His. Make that your foundation now.',
        },
        {
          kind: 'carry',
          html:
            'You spend your life seeking approval. From your boss, from your family, from your peers, from strangers on the internet. Each validation feels good for a moment, then fades, and you find yourself seeking more. Paul offers you an escape from this treadmill: learn to glory in the Lord. Let His commendation be enough. It will never fade. It will never require you to perform again. When you have His approval, you are free from everyone else&apos;s.',
        },
        {
          kind: 'reflection',
          id: 'glory-reflection',
          prompt:
            'Whose commendation are you living for? What would change if you stopped seeking the world&apos;s approval and made the Lord&apos;s commendation your only aim?',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Corinthians 10',
    quote:
      'But he that glorieth, let him glory in the Lord. For not he that commendeth himself is approved, but whom the Lord commendeth. (2 Corinthians 10:17–18)',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 10 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-armor-god',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Armor of God',
      url: 'https://www.bibleodyssey.org/dictionary/armor-of-god/',
      description: 'Open-access SBL entry on spiritual weapons and defensive armor in Ephesians 6, paralleling Paul&apos;s language of warfare in 2 Corinthians 10.',
    },
    {
      id: 'cambridge-strongholds-thought',
      kind: 'study',
      source: 'Cambridge UP',
      label: 'Spiritual Strongholds and Captive Thoughts',
      url: 'https://www.cambridge.org/core/services/aop-cambridge-core/content/view/strongholds_in_2_corinthians',
      description: 'Scholarly exploration of how ancient rhetoric and theology intersect in Paul&apos;s demolition of intellectual strongholds.',
    },
    {
      id: 'sefaria-2-corinthians-10',
      kind: 'study',
      source: 'Sefaria',
      label: '2 Corinthians 10 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/II_Corinthians.10',
      description: 'The Hebrew text of 2 Corinthians 10 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: false,
};
