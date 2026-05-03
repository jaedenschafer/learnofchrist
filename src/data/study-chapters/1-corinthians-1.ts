import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 1 — Christ the Wisdom and Power of God
 *
 * Corinth was Paul&apos;s "I will dwell here, I have much people in this city"
 * city (Acts 18:10). This letter answers a church fractured by ego, divided
 * between rival teachers, tolerating sexual sin, and suing one another in
 * pagan courts. Chapter 1 diagnoses the sickness: they think they are wise.
 * Paul redirects their gaze. The gospel measures nothing by human eloquence.
 * Christ alone is the wisdom and power of God.
 */
export const FIRST_CORINTHIANS_1: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 1,

  estimatedMinutes: { beginner: 5, intermediate: 10, deep: 15 },
  intros: [
    'The church at Corinth was young, gifted, and dangerously divided. Their city sat at the crossroads of empire—a place of wealth, ambition, and competing philosophies. The Corinthians brought that competitive spirit into the body of Christ. They admired the gifted, collected the eloquent, and began to form factions around their favorite teachers. Paul&apos;s opening move is not to shame them (though rebuke comes), but to reorient their entire vision of what the gospel is and whose opinion matters.',
    'Corinth had confused the power of God with the power of words. They valued what the world values: skill, status, the ability to persuade by rhetoric. But Paul insists—and the whole of 1 Corinthians returns again and again to this point—that God&apos;s power works through weakness. A carpenter executed on a Roman cross. The message of the cross, which looked like utter defeat to the pagan eye, is actually the greatest power and deepest wisdom the universe has ever seen.',
    'If you have ever felt the pressure to make your faith look impressive to the world, to dress it in language the educated will approve of, to climb the ladder of respect by adding credentials—this chapter is written to you.',
  ],

  sections: [
    /* ─── 1 Corinthians 1:1–3 — Greeting ─────────────────────────────── */
    {
      ref: '1 Corinthians 1:1–3',
      title: 'Called to Be Saints',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Paul, called to be an apostle of Jesus Christ through the will of God, and Sosthenes our brother,'),
            plain(2, 'Unto the church of God which is at Corinth, to them that are sanctified in Christ Jesus, called to be saints, with all that in every place call upon the name of Jesus Christ our Lord, both theirs and ours:'),
            plain(3, 'Grace be unto you, and peace, from God our Father, and from the Lord Jesus Christ.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor1-greeting-apostle',
          html:
            'Paul begins where he always does—by grounding his authority not in education or rhetorical skill, but in the will of God. He is an apostle because God called him. The church at Corinth is addressed as &ldquo;sanctified in Christ Jesus, called to be saints.&rdquo; They are not saints because of their gifts or their wisdom. They are sanctified—set apart, made holy—by Christ&apos;s blood, by His work alone.',
        },
        {
          kind: 'greek',
          id: 'greek-hagios',
          title: 'Hagios — &ldquo;holy, sanctified&rdquo;',
          script: 'ἅγιος',
          translit: '<strong>hagios</strong> · set apart for God; made holy; saint',
          description:
            'A saint is not a person who has achieved moral perfection. A saint is someone called out, separated from the world, and dedicated to God. The Corinthians, for all their divisions and immaturity, are already sanctified in Christ Jesus. Their holiness is not a goal they are working toward; it is their status in Him.',
        },
        {
          kind: 'carry',
          html:
            'You are not a Christian because you are smart enough to believe the right things. You are not righteous because you have kept the rules better than others. You are sanctified, set apart, made holy—by Christ&apos;s work, by God&apos;s calling, by grace. Whatever you feel today—worthy or worthless, confident or ashamed—that calling does not change. Grace is not a reward you have earned. It is a greeting from a God who called you before you could call yourself.',
        },
      ],
    },

    /* ─── 1 Corinthians 1:4–9 — Thanksgiving ─────────────────────────── */
    {
      ref: '1 Corinthians 1:4–9',
      title: 'Enriched in Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(4, 'I thank my God always on your behalf for the grace of God which is given you by Jesus Christ;'),
            plain(5, 'That in every thing ye are enriched by him, in all utterance, and in all knowledge;'),
            plain(6, 'Even as the testimony of Christ was confirmed in you:'),
            plain(7, 'So that ye come behind in no gift; waiting for the coming of our Lord Jesus Christ:'),
            plain(8, 'Who shall also confirm you unto the end, that ye may be blameless in the day of our Lord Jesus Christ.'),
            plain(9, 'God is faithful, by whom ye were called into the fellowship of Jesus Christ our Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor1-enriched',
          html:
            'The Corinthians have not lacked spiritual gifts. They speak well. They are full of knowledge. Paul does not ignore this. He thanks God for it. But in a few verses, he will reveal the hidden cost of such abundance: they have begun to glory in the gifts and forget the Giver. Their eloquence has become a mirror, and they love what they see in it.',
        },
        {
          kind: 'greek',
          id: 'greek-charisma',
          title: 'Charisma — &ldquo;grace gift&rdquo;',
          script: 'χάρισμα',
          translit: '<strong>charisma</strong> · a gift of grace freely given',
          description:
            'The word carries the root of grace (<em>charis</em>). A charisma is not earned; it is a gift. The Corinthians have received real gifts of the Spirit—prophecy, knowledge, healing, tongues. But a gift used to build oneself is a gift corrupted. The tragedy of Corinth is not the gifts; it is the hearts that have made gifts into trophies.',
        },
        {
          kind: 'commentary',
          id: 'cor1-confirm',
          html:
            'Paul tells them Christ &ldquo;shall also confirm you unto the end, that ye may be blameless.&rdquo; Their security does not rest in their gifts. It rests in Christ&apos;s faithfulness to complete what He has begun. They will be confirmed, made solid, not by achieving more knowledge or eloquence, but by His work in them.',
        },
        {
          kind: 'christ',
          id: 'christ-confirm',
          title: 'Christ Connection — Your Confirmation',
          html:
            'Christ is faithful. He will confirm us to the end. We do not stand by our own gifts or by the gifts of the teacher we admire. We stand only by Christ&apos;s faithfulness—His promise to complete the good work He starts in us (Phil. 1:6). That faithfulness is not earned. It is given. The apostle Paul cannot confirm the Corinthians; only Jesus can.',
        },
        {
          kind: 'reflection',
          id: 'cor1-enriched-reflect',
          prompt: 'What gifts have you received that you are tempted to take credit for? How might your pride in a gift be distracting you from the Giver?',
        },
      ],
    },

    /* ─── 1 Corinthians 1:10–13 — No Divisions ───────────────────────── */
    {
      ref: '1 Corinthians 1:10–13',
      title: 'No Divisions Among You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(10, 'Now I beseech you, brethren, by the name of our Lord Jesus Christ, that ye all speak the same thing, and that there be no divisions among you; but that ye be perfectly joined together in the same mind and in the same judgment.'),
            plain(11, 'For it hath been declared unto me of you, my brethren, by them which are of the house of Chloe, that there are contentions among you.'),
            plain(12, 'Now this I say, that every one of you saith, I am of Paul; and I of Apollos; and I of Cephas; and I of Christ.'),
            plain(13, 'Is Christ divided? was Paul crucified for you? or were ye baptized in the name of Paul?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor1-divisions',
          html:
            'The Corinthians have formed factions. Some say, &ldquo;I am of Paul&rdquo;—he founded us. Others, &ldquo;I am of Apollos&rdquo;—he speaks with eloquence. Some claim Cephas (Peter), or even (with what may be false piety) Christ. But Paul&apos;s response cuts to the root. A divided church reveals a divided allegiance. How can you follow Christ and quarrel over whose teacher you belong to? The question is not rhetorical. It is the diagnosis of idolatry.',
        },
        {
          kind: 'greek',
          id: 'greek-schisma',
          title: 'Schisma — &ldquo;split, division&rdquo;',
          script: 'σχίσμα',
          translit: '<strong>schisma</strong> · a rending, a tearing apart',
          description:
            'The word is physical—a rip in fabric. A church divided over teachers is not just disagreeing; it is tearing itself to pieces. The Corinthians, jealous for their preferred preacher, have wounded the body of Christ.',
        },
        {
          kind: 'commentary',
          id: 'cor1-crucified',
          html:
            'Paul asks: &ldquo;Was Paul crucified for you?&rdquo; The logic is devastating. Only the one who died for you has a claim on your allegiance. You were not baptized into Paul. You were not baptized into Apollos. Only Christ died. Only His blood makes you His. Any other loyalty is a betrayal of that covenant.',
        },
        {
          kind: 'christ',
          id: 'christ-divided',
          title: 'Christ Connection — Christ Not Divided',
          html:
            'Christ is not divided. One body, one Spirit, one Lord, one faith, one baptism (Eph. 4:4–6). When the Corinthians divide over teachers, they tear the body that belongs to Christ alone. The unity of the church is not a political achievement or an organizational goal. It is a fact—Christ&apos;s body cannot be rent. Schism is not schism in the church; it is schism in Christ Himself. That is why it matters so utterly.',
        },
        {
          kind: 'carry',
          html:
            'You may admire a pastor, a teacher, a leader whose ministry has shaped you. That is not wrong. But if your allegiance follows them rather than Christ, if their opinion replaces His word, if their fate becomes your anxiety—you have reversed the order. You have made a servant into a savior. Only Christ was crucified for you. Only Christ rose from the dead. Only Christ judges in the end. Hold your leaders lightly. Hold Christ with all your strength.',
        },
        {
          kind: 'reflection',
          id: 'cor1-divisions-reflect',
          prompt: 'Whom do you secretly believe is the wisest voice you should follow? How might you be listening to a human leader more than to Christ?',
        },
      ],
    },

    /* ─── 1 Corinthians 1:14–17 — Not Baptizing ────────────────────────── */
    {
      ref: '1 Corinthians 1:14–17',
      title: 'Christ Sent Me Not to Baptize',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(14, 'I thank Christ that I baptized none of you, but Crispus and Gaius;'),
            plain(15, 'Lest any should say that I had baptized in mine own name.'),
            plain(16, 'And I baptized also the household of Stephanas: besides, I know not whether I baptized any other.'),
            plain(17, 'For Christ sent me not to baptize, but to preach the gospel: not with wisdom of words, lest the cross of Christ should be made of none effect.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor1-baptism',
          html:
            'Paul is grateful he did not baptize many Corinthians. Why? Because the Corinthians might have made his name a rival to Christ&apos;s. &ldquo;I was baptized by Paul,&rdquo; they might boast—and thus separate themselves from those baptized by Apollos. Paul&apos;s restraint is not humility for its own sake. It is strategy: he will not allow his name to become a trophy that divides the church.',
        },
        {
          kind: 'greek',
          id: 'greek-euangelion',
          title: 'Euangelion — &ldquo;gospel&rdquo;',
          script: 'εὐαγγέλιον',
          translit: '<strong>euangelion</strong> · good news; gospel; glad tidings',
          description:
            'In Greek, euangelion was originally the announcement of victory—the news a messenger brought back from a battle. In Paul&apos;s hands, it is the announcement of God&apos;s ultimate victory: that through Christ&apos;s death and resurrection, God has defeated sin and opened the way to eternal life.',
        },
        {
          kind: 'commentary',
          id: 'cor1-preach',
          html:
            'Christ sent Paul to preach, not to baptize. And he will preach &ldquo;not with wisdom of words, lest the cross of Christ should be made of none effect.&rdquo; If Paul arrived in Corinth as a philosopher-king, dazzling them with rhetoric, the message would be drowned out by the messenger. The glory would stick to Paul, not to the cross. Paul will trade eloquence for clarity. He will let the message stand naked and unadorned.',
        },
        {
          kind: 'carry',
          html:
            'You may have been mentored by a powerful speaker, or drawn into faith by an impressive argument. Be grateful. But do not mistake the messenger for the message. The cross cannot be dressed up in eloquence without being cheapened. The gospel does not need your rhetorical skill or your credentials. It needs only to be spoken plainly: Christ died. Christ rose. His power is freely given. That is enough.',
        },
        {
          kind: 'reflection',
          id: 'cor1-preach-reflect',
          prompt: 'How might you be compromising the simplicity of the gospel by trying to make it impressive or intellectually respectable?',
        },
      ],
    },

    /* ─── 1 Corinthians 1:18–21 — The Foolishness of the Cross ────────── */
    {
      ref: '1 Corinthians 1:18–21',
      title: 'Foolishness to Those Who Perish',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(18, 'For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God.'),
            plain(19, 'For it is written, I will destroy the wisdom of the wise, and will bring to nothing the understanding of the prudent.'),
            plain(20, 'Where is the wise? where is the scribe? where is the disputer of this world? hath not God made foolish the wisdom of this world?'),
            plain(21, 'For after that in the wisdom of God the world by wisdom knew not God, it pleased God by the foolishness of preaching to save them that believe.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor1-foolishness',
          html:
            'To the pagan world—to the Greek philosopher, the Roman senator, the person whose life is ordered by the logic of power and prestige—the cross is absurd. It is the instrument of Roman shame, reserved for the lowest criminals. How could God work through such degradation? How could salvation come through such weakness? Yet Paul does not apologize. He embraces the offense. The gospel will always look like foolishness to those whose eyes are fixed on this age. The question is not whether the cross will look wise to the world. The question is: whose eyes are you trusting?',
        },
        {
          kind: 'greek',
          id: 'greek-moria',
          title: 'Mōria — &ldquo;foolishness&rdquo;',
          script: 'μωρία',
          translit: '<strong>mōria</strong> · foolishness; the opposite of sophia (wisdom)',
          description:
            'Paul does not soften the word. The cross is mōria to the world—absurd, ridiculous. Yet Paul will spend the whole chapter arguing that this &ldquo;foolishness&rdquo; is actually the deepest wisdom, and the world&apos;s &ldquo;wisdom&rdquo; is actually the deepest foolishness.',
        },
        {
          kind: 'christ',
          id: 'christ-cross-power',
          title: 'Christ Connection — The Wisdom of the Cross',
          html:
            'Christ crucified is the wisdom and power of God (1 Cor. 1:24). The cross, which appears to be defeat, is actually the overthrow of sin and death. The weapon of Rome, meant to shame the Messiah, becomes the instrument of salvation. God&apos;s power does not work through the kind of domination the world respects—force, rhetoric, status. It works through self-giving, through weakness, through the laying down of life. The cross is the deepest revolution in the definition of power the universe has ever seen.',
        },
        {
          kind: 'reflection',
          id: 'cor1-foolishness-reflect',
          prompt: 'Where do you feel pressure to make the gospel look smart or respectable to the world? Where can you instead simply say: Christ died and rose?',
        },
      ],
    },

    /* ─── 1 Corinthians 1:22–25 — Christ the Power and Wisdom ────────────── */
    {
      ref: '1 Corinthians 1:22–25',
      title: 'Christ the Wisdom and Power of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(22, 'For the Jews require a sign, and the Greeks seek after wisdom:'),
            plain(23, 'But we preach Christ crucified, unto the Jews a stumblingblock, and unto the Greeks foolishness;'),
            plain(24, 'But unto them which are called, both Jews and Greeks, Christ the power of God, and the wisdom of God.'),
            plain(25, 'Because the foolishness of God is wiser than men; and the weakness of God is stronger than men.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor1-require',
          html:
            'The Jews want a king who will restore the kingdom, overthrow Rome, and bring the age to come. The Greeks want a philosophy that explains the nature of reality through human reason. Neither can see in a carpenter executed by Rome anything worth following. The cross breaks every category the world uses to measure power and wisdom.',
        },
        {
          kind: 'greek',
          id: 'greek-dynamis',
          title: 'Dynamis — &ldquo;power, strength&rdquo;',
          script: 'δύναμις',
          translit: '<strong>dynamis</strong> · power; the ability to accomplish, to transform',
          description:
            'Paul uses this word deliberately. When the Corinthians think of power, they think of dynamis—military might, rhetorical persuasion, the ability to dominate. But Christ&apos;s power is real dynamis: it conquers sin, raises the dead, transforms the human heart. It is hidden from the world&apos;s eyes until the resurrection reveals it.',
        },
        {
          kind: 'commentary',
          id: 'cor1-weakness-stronger',
          html:
            'The climax: &ldquo;the weakness of God is stronger than men.&rdquo; There is no such thing as weakness in God. But the incarnate Christ chose weakness. He let Himself be arrested, beaten, mocked, crucified. That chosen weakness—that laying down of power—is the strongest force in the universe, because it alone conquers death and evil not by dominating them but by absorbing them, by taking them into Himself and rising. No earthly power can do that.',
        },
        {
          kind: 'christ',
          id: 'christ-wisdom-power',
          title: 'Christ Connection — Wisdom Made Flesh',
          html:
            'Christ is simultaneously the wisdom and the power of God. He is not merely a teacher who explains God&apos;s plan. He is wisdom incarnate—the Logos, through whom all things were made (John 1:3; Col. 1:16–17). And His power is not dominance but self-giving: He took our place, bore our judgment, paid our debt. The cross is where all the universe&apos;s power is revealed to concentrate—not in the form the world expects, but in the form the world most desperately needs.',
        },
        {
          kind: 'carry',
          html:
            'The world still peddles the same two answers to suffering: the sign (the miracle that proves God) and the wisdom (the explanation that makes sense of it). But Christ offers neither. He offers Himself. Not an explanation of suffering, but Someone who suffered with you. Not a miracle that rescues you from the cross, but a God who climbed one. That is not what you asked for. It is infinitely better.',
        },
        {
          kind: 'artwork',
          matchTitle: /cross|crucif/i,
          caption: '1 Corinthians 1:22–25 · Christ the Power and Wisdom',
        },
      ],
    },

    /* ─── 1 Corinthians 1:26–31 — God Has Chosen the Foolish ────────────── */
    {
      ref: '1 Corinthians 1:26–31',
      title: 'God Has Chosen the Foolish Things',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(26, 'For ye see your calling, brethren, how that not many of you were wise men after the flesh, not many mighty, not many noble, are called:'),
            plain(27, 'But God hath chosen the foolish things of the world to confound the wise; and God hath chosen the weak things of the world to confound the things which are mighty;'),
            plain(28, 'And base things of the world, and things which are despised, hath God chosen, yea, and things which are not, to bring to nought things that are:'),
            plain(29, 'That no flesh should glory in his presence.'),
            plain(30, 'But of him are ye in Christ Jesus, who of God is made unto us wisdom, and righteousness, and sanctification, and redemption:'),
            plain(31, 'That, as it is written, He that glorieth, let him glory in the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor1-not-many-wise',
          html:
            'Look at the Corinthian church. Not many of you are wise by the world&apos;s standards. Not many are mighty. Not many are noble. Why? Because God has chosen what looks foolish to confound the wise. God has chosen what looks weak to overthrow what looks mighty. The very composition of the church is an insult to the world&apos;s logic and an argument against the Corinthians&apos; temptation to glory in wisdom.',
        },
        {
          kind: 'commentary',
          id: 'cor1-no-flesh-glory',
          html:
            '&ldquo;That no flesh should glory in his presence.&rdquo; This is the point. If the church were composed of the wise, the mighty, and the noble, they could take credit for the gospel&apos;s success. But a church of the foolish and the weak proves one thing: God did it. Your smallness, your limitation, your lack of credential—these are not obstacles to Christ&apos;s work. They are the proof that it is Christ&apos;s work alone.',
        },
        {
          kind: 'greek',
          id: 'greek-sophia',
          title: 'Sophia — &ldquo;wisdom&rdquo;',
          script: 'σοφία',
          translit: '<strong>sophia</strong> · wisdom; understanding of how things truly are',
          description:
            'Paul uses this word to mean human wisdom—worldly understanding, the accumulated knowledge of philosophers and teachers. But then Christ becomes our sophia: not merely a teacher of wisdom, but wisdom itself, the very mind of God now available to us.',
        },
        {
          kind: 'commentary',
          id: 'cor1-christ-four-fold',
          html:
            'Notice the four-fold description: Christ is made unto us wisdom, righteousness, sanctification, and redemption. This is not four separate gifts stacked on top of each other. It is Christ Himself understood from four angles. He is our complete standing before God.',
        },
        {
          kind: 'christ',
          id: 'christ-wisdom-righteousness',
          title: 'Christ Connection — The Four-Fold Gift',
          html:
            'Christ is made unto us wisdom, righteousness, sanctification, and redemption (1 Cor. 1:30). This is not four separate gifts; it is Christ Himself understood in four ways. He is our wisdom (the mind of God directing us), our righteousness (His perfection covering our failure), our sanctification (His work making us holy), our redemption (His payment freeing us from bondage). You have not become wise by study. You have become wise by knowing Christ. You have not become righteous by effort. You are righteous in Him. That is the gospel&apos;s reversal.',
        },
        {
          kind: 'carry',
          html:
            'You do not have the credentials the world respects. You have not read the books or studied at the schools or earned the titles. You may feel foolish by the world&apos;s measure. But that very foolishness is the mark of faith. It is a sign that you are not trusting in yourself. You are trusting in Christ. Your weakness is the place where His strength shows up clearest. And it makes your life an argument—a living proof that God&apos;s power does not require human achievement. It requires only faith.',
        },
        {
          kind: 'reflection',
          id: 'cor1-foolish-reflect',
          prompt: 'What part of your life feels too small or weak to matter? How might God be planning to use that very smallness to show His power?',
        },
        {
          kind: 'artwork',
          matchTitle: /paul|strength|weak/i,
          caption: '1 Corinthians 1:26–31 · The Strength in Weakness',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Corinthians 1',
    quote: 'Christ the power of God, and the wisdom of God. Because the foolishness of God is wiser than men; and the weakness of God is stronger than men.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 1 · Study Guide',
  },

  hasHebrew: false,
};
