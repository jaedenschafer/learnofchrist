import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 1 Corinthians 9 — All Things to All Men
 *
 * Paul illustrates the principle of self-limitation through his own example. He
 * has the right to be supported by the church, yet he has voluntarily worked with
 * his own hands. He has the right to bring a believing wife on his missionary
 * journeys, yet he has chosen not to. His aim: to &quot;become all things to all men,&quot;
 * removing obstacles to the gospel. This chapter reveals the cost of being a faithful
 * witness: the willing surrender of legitimate rights for the sake of others&apos; salvation.
 */
export const FIRST_CORINTHIANS_9: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 9,

  intros: [
    'Paul does not ask the Corinthians to do anything he has not already done. He speaks from hard-won experience. He has given up legitimate rights—the right to financial support, the right to marry and have his family supported, the right to ease—all in order to remove barriers between himself and those he is trying to reach. His example is one of radical accommodation, driven by a single vision: to save souls.',
    'The chapter begins in the context of chapter 8, where Paul taught that knowledge about food offered to idols should bow to love for those who are weak in conscience. Now he proves it: "I will eat no flesh while the world standeth, if it make my brother to offend" (8:13). He does not ask this without having done it himself. He has laid down his own rights. His rights, his freedom, his comfort—all subordinate to the gospel.',
    'As you read, notice the shift in tone. Paul moves from questions (Do I not have these rights?) to declaration (I have used none of these things) to exhortation (So run). The chapter is a mirror. Paul holds up his own life and asks the Corinthians to look. Will you run the race? Will you bring your body into subjection? Will you become all things to all men, that you might by all means save some?'
  ],

  sections: [
    /* ─── 1 Corinthians 9:1–3 — Am I Not an Apostle? ───────────────────── */
    {
      ref: '1 Corinthians 9:1–3',
      title: 'Am I Not an Apostle?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(1,
              hy('Am I not an apostle?', 'c-apostle'),
              t(' '),
              hy('am I not free?', 'c-free-exousia'),
              t(' have I not seen Jesus Christ our Lord? are not ye '),
              hg('my work in the Lord?', 'c-work')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-apostle',
          html:
            'Paul establishes his apostolic authority. An apostle is one who has seen the risen Christ. Paul did—on the Damascus Road (Acts 9). This is his credential, not his boast. He wears it as a foundation for what he will ask the Corinthians to consider.',
        },
        {
          kind: 'greek',
          id: 'c-free-exousia',
          title: 'Eleutheros — "Free"; Freedom',
          script: 'ἐλεύθερος',
          translit: '<strong>eleutheros</strong> · free; liberated; not bound',
          description:
            'Paul asks if he is not free. Freedom in Christ is real. It is not servile. Yet Paul will use this freedom—this exousia, this legitimate right—by <em>choosing</em> not to exercise it. That is the paradox of Christian liberty.',
        },
        {
          kind: 'commentary',
          id: 'c-work',
          html:
            'The Corinthians are the fruit of Paul&apos;s apostolic labor. They were born into faith through his preaching, his prayers, his sacrifice. If anyone has rights over them, it is Paul. Yet he will lay those rights down.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(2, 'If I be not an apostle unto others, yet doubtless I am to you: for the seal of mine apostleship are ye in the Lord.'),
            plain(3, 'Mine answer to them that do examine me is this,'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-seal',
          html:
            'Paul&apos;s apostleship does not rest on Jerusalem&apos;s approval or the Twelve&apos;s endorsement. It rests on <em>fruit</em>. You are his seal. You are the proof. By that measure, his apostolic rights are unquestionable.',
        },
      ],
    },

    /* ─── 1 Corinthians 9:4–12 — Have We Not Power to Eat and Drink? ────── */
    {
      ref: '1 Corinthians 9:4–12',
      title: 'The Right to Eat and Be Supported',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(4,
              hy('Have we not power to eat and to drink?', 'c-power-eat'),
              t('')
            ),
            plain(5, 'Have we not power to lead about a sister, a wife, as well as other apostles, and as the brethren of the Lord, and Cephas?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-power-eat',
          html:
            'Paul lists his rights: the right to eat, to drink, to marry and have his wife supported while traveling. These are not luxuries. An apostle who labors in the gospel—who travels, teaches, endures hardship—has the right to food and shelter. This is Paul&apos;s first right. But he surrenders it.',
        },
        {
          kind: 'greek',
          id: 'c-exousia-right',
          title: 'Exousia — "Authority"; "Right"; "Power to Act"',
          script: 'ἐξουσία',
          translit: '<strong>exousia</strong> · authority; legitimate power; the right to do something',
          description:
            'Exousia is not permission grudgingly granted. It is the genuine, God-ordained power to act. Paul has it. The Lord has ordained that those who preach the gospel should live of the gospel (1 Cor. 9:14). Yet Paul chooses not to use this exousia.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(6, 'Or I only and Barnabas, have not we power to forbear working?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-forbear',
          html:
            'Paul is not claiming something unique. Barnabas, Peter, James, the other apostles—they all have the same right. They have exercised it. The church has supported them. And Paul&apos;s question is gentle, almost rhetorical: Do I not have the same right they do?',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(7, 'Who goeth a warfare any time at his own charges? who planteth a vineyard, and eateth not of the fruit thereof? or who feedeth a flock, and eateth not of the milk of the flock?'),
            plain(8, 'Say I these things as a man? or saith not the law the same also?'),
            plain(9, 'For it is written in the law of Moses, Thou shalt not muzzle the mouth of the ox that treadeth out the corn. Doth God take care for oxen?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-muzzle',
          html:
            'Paul draws from Deuteronomy 25:4: an ox working in the fields must be allowed to eat. The principle is simple and profound: the laborer deserves his wages. If God cares for an ox&apos;s hunger, how much more for an apostle&apos;s? Yet Paul—this ox—has muzzled himself.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(10, 'Or saith he it altogether for our sakes? For our sakes, no doubt, this is written: that he that ploweth should plow in hope; and that he that thresheth in hope should be partaker of his hope.'),
            plain(12, 'If others be partakers of this power over you, are not we rather? nevertheless we have not used this power; but suffer all things, lest we should hinder the gospel of Christ.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hinder',
          html:
            'Here is the hinge. Paul has the right—exousia. Other apostles use it. The church acknowledges it. Yet Paul says: "We have not used this power." Why? "Lest we should hinder the gospel of Christ." He fears that if he accepted support, some Corinthians would say he was preaching for profit. He will not give them that excuse.',
        },
        {
          kind: 'carry',
          html:
            'Paul is showing you something about the cost of faithful witness. You have rights—legitimate ones, won by your labor and your calling. But before you exercise them, ask: will this remove barriers to the gospel, or raise them? Will this help someone believe, or give them a reason not to? This does not mean you are always wrong to claim what is yours. It means you are always wise to count the cost.',
        },
        {
          kind: 'reflection',
          id: 'c-power-reflect',
          prompt:
            'What legitimate right are you exercising that might be raising a barrier between you and someone you are trying to reach? Could you lay it down? What would that cost you?',
        },
      ],
    },

    /* ─── 1 Corinthians 9:13–14 — They Which Preach Should Live of Gospel ── */
    {
      ref: '1 Corinthians 9:13–14',
      title: 'The Gospel&apos;s Provision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(13, 'Know ye not that they which minister about holy things live of the things of the temple? and they which wait at the altar are partakers with the altar?'),
            verse(14,
              t('Even so hath the Lord '),
              hg('ordained that they which preach the gospel', 'c-ordained'),
              t(' '),
              hp('should live of the gospel.', 'c-live-gospel')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ordained',
          html:
            'Paul anchors his right in Old Testament precedent. The Levites who served in the temple lived on the temple offerings. This was God&apos;s design. Likewise, the Lord has ordained—commanded, established—that those who preach the gospel should be supported by the gospel. This is not a suggestion. It is a divine order.',
        },
        {
          kind: 'christ',
          id: 'c-live-gospel',
          title: 'Christ Connection — Freely Received, Freely Given',
          html:
            'Jesus sent His disciples out with no purse, no script, no sandals (Luke 10:4). Yet He also said, "The laborer is worthy of his hire" (Luke 10:7). Christ does not ask poverty of His messengers; He asks trust. Paul&apos;s choice not to be supported was his own—and it stands as a rebuke to those who take more than they are given, or lord their rights over the vulnerable. But Paul would also affirm: the gospel does provide. God&apos;s work is never left unfunded by God.',
        },
        {
          kind: 'carry',
          html:
            'If you serve in any capacity—pastoral, teaching, leading, ministry—remember that provision is God&apos;s responsibility, not yours to grasp or hoard. And if you receive provision, receive it gratefully and use it wisely, knowing you will answer for it. The gospel provides, but generosity—from God and to others—is the shape it takes.',
        },
      ],
    },

    /* ─── 1 Corinthians 9:15–18 — I Have Used None of These Things ────────── */
    {
      ref: '1 Corinthians 9:15–18',
      title: 'Paul&apos;s Refusal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(15, 'But I have used none of these things: neither have I written these things, that it should be so done unto me: for it were better for me to die, than that any man should make my glorying void.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-die',
          html:
            'Paul does not write this to manipulate the Corinthians into supporting him now. He is saying the opposite: he would rather die than take payment. "Do not let anyone use this epistle to obligate yourselves to feed me." His refusal is absolute and self-sacrificial.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(16, 'For though I preach the gospel, I have nothing to glory of: for necessity is laid upon me; yea, woe is unto me, if I preach not the gospel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-necessity',
          html:
            'Paul is not being noble or earning spiritual merit. He is answering necessity. The gospel has <em>seized</em> him. He cannot not preach it. "Woe is unto me if I preach not the gospel"—not woe if I am not supported, but woe if I do not proclaim it. That is the compulsion driving him.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(17, 'For if I do this thing willingly, I have a reward: but if against my will, a dispensation of the gospel is committed unto me.'),
            plain(18, 'What is my reward then? Verily that, when I preach the gospel, I may make the gospel of Christ without charge, that I abuse not my power in the gospel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-reward',
          html:
            'Paul&apos;s reward is not payment. It is the freedom to preach without suspicion. By working with his own hands, he removes the taint. No one can say he is in it for the money. His reward is the unobstructed proclamation of Christ, clear of any charge of greed. That is prize enough.',
        },
        {
          kind: 'carry',
          html:
            'Paul teaches a hard lesson: sometimes the reward for your labor is not payment, comfort, or recognition. Sometimes the reward is simply the ability to do what God has called you to do without asterisks or suspicion. That—the clear proclamation, the uncompromised witness—is worth more than anything the world can pay.',
        },
      ],
    },

    /* ─── 1 Corinthians 9:19–23 — Servant Unto All ───────────────────────── */
    {
      ref: '1 Corinthians 9:19–23',
      title: 'Becoming All Things to All Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(19,
              t('For though I be '),
              hp('free from all men', 'c-freedom-christ'),
              t(', yet have I made myself '),
              hg('servant unto all,', 'c-servant'),
              t(' that I might gain the more.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-servant',
          html:
            'This is the paradox of Christian freedom. Paul is <em>free</em>. But he voluntarily becomes a <em>servant</em>. Not because he is compelled by law, but because he has chosen a higher constraint: love. He lays down his freedom to serve others.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(20, 'And unto the Jews I became as a Jew, that I might gain the Jews; to them that are under the law, as under the law, that I might gain them that are under the law;'),
            plain(21, 'To them that are without law, as without law, (being not without law to God, but under the law to Christ,) that I might gain them that are without law;'),
            plain(22, 'To the weak became I as weak, that I might gain the weak: I am made all things to all men, that I might by all means save some.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-weak',
          html:
            'Paul does not preach <em>about</em> the weak from a distance. He enters into their condition. He "becomes weak." This is empathy born of sacrifice—a willingness to feel what they feel, to honor their scruples, to move at their pace. His aim is always the same: "that I might by all means save some."',
        },
        {
          kind: 'christ',
          id: 'c-freedom-christ',
          title: 'Christ Connection — The Servant King',
          html:
            'Paul&apos;s self-limitation mirrors Christ&apos;s. "Though I be free"—Jesus was free. The Son of God, yet He &quot;made himself of no reputation, and took upon him the form of a servant, and was made in the likeness of men&quot; (Phil. 2:7). Jesus did not hold onto His rights. He emptied Himself. Paul is not imitating something foreign to Christ; he is following Christ&apos;s own pattern. When you give up a legitimate right for love&apos;s sake, you are becoming like Jesus.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(23, 'And this I do for the gospel&apos;s sake, that I might be partaker thereof with you.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gospel-sake',
          html:
            'That final phrase matters: "for the gospel&apos;s sake, that I might be partaker thereof with you." Paul is not trying to earn favor with the Corinthians. He is participating <em>with</em> them in the gospel—the good news of Christ. His self-limitation is his participation. He is in it together with them.',
        },
        {
          kind: 'carry',
          html:
            'You will meet people whose scruples differ from yours, whose culture differs, whose conscience is more tender. The temptation is to dismiss them or to stand on what is yours to stand on. Paul teaches a better way: become weak with them. Lay aside what is legitimate for you if it would wound them. Not forever—this is not ethical relativism. But for the sake of the gospel, for the sake of drawing them closer to Christ. That is the cost of real love.',
        },
        {
          kind: 'reflection',
          id: 'c-all-things',
          prompt:
            'For whom do you need to "become weak"? What legitimate way of yours would you have to set aside to help them hear the gospel? Will you?',
        },
      ],
    },

    /* ─── 1 Corinthians 9:24–27 — I Keep Under My Body ──────────────────── */
    {
      ref: '1 Corinthians 9:24–27',
      title: 'The Race and the Prize',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(24,
              t('Know ye not that they which run in a race run all, but one receiveth the prize? So run, that '),
              hg('ye may obtain.', 'c-obtain')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-obtain',
          html:
            'Paul shifts from the Corinthians&apos; weakness to their calling. Yes, you are weak. But run. The Christian life is not casual. It is a race, and the prize is real. The image comes from the Isthmian Games—the athletic competitions held near Corinth. Every Corinthian knew what it meant to run to win.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(25, 'And every man that striveth for the mastery is temperate in all things. Now they do it to obtain a corruptible crown; but we an incorruptible.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-temperate',
          html:
            'Athletes discipline themselves utterly. They abstain from wine, from excess food, from other pleasures. Why? For a crown that fades. But the Christian runs for an incorruptible crown—one that does not wilt, rust, or perish. If a worldly athlete will deny himself for a temporary prize, how much more should we for one that is eternal?',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(26,
              t('I therefore so '),
              hg('run, not as uncertainly;', 'c-run-certain'),
              t(' so '),
              hg('fight I, not as one that beateth the air:', 'c-fight')
            ),
            verse(27,
              t('But I '),
              hy('keep under my body, and bring it into subjection:', 'c-body'),
              t(' lest that by any means, when I have preached to others, I myself should be a castaway.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-run-certain',
          html:
            'Paul does not run aimlessly. He knows where the finish line is. He knows what he is running toward. This is not blind faith; it is conviction grounded in the risen Christ.',
        },
        {
          kind: 'commentary',
          id: 'c-fight',
          html:
            '"Not as one that beateth the air"—Paul does not shadowbox. Every blow lands. Every step counts. His life is directed, purposeful, disciplined.',
        },
        {
          kind: 'greek',
          id: 'c-hypopiazo',
          title: 'Hypopiazo — "To Beat Into Subjection"; "To Buffet"',
          script: 'ὑποπιάζω',
          translit: '<strong>hypopiazo</strong> · to beat black and blue; to subdue by blows; to keep under control',
          description:
            'Paul uses a violent word for what he does to his body. This is not asceticism for its own sake. It is the discipline an athlete brings to training. He will not let his body run the race; he will let his spirit, his calling, his faith in Christ direct him.',
        },
        {
          kind: 'commentary',
          id: 'c-castaway',
          html:
            'Why such severity? "Lest that by any means, when I have preached to others, I myself should be a castaway." The Greek word is adokimos—disapproved, disqualified. Paul is not trusting in predestination or a false security. He is saying: I will not become complacent. I will keep running. I will keep my body, my desires, my ambitions in line with the gospel. The race is not finished; the prize is not yet won.',
        },
        {
          kind: 'christ',
          id: 'c-body',
          title: 'Christ Connection — The Discipline of the Cross',
          html:
            'The cross is the pattern. Jesus denied Himself, took up His cross, and followed through to the very end (Matt. 16:24–25). Paul is not inventing a new form of piety. He is taking up his cross daily, keeping his body—his impulses, his desires, his natural inclinations—in subjection to Christ&apos;s call. This is what the imitation of Christ looks like: discipline born of love, not fear.',
        },
        {
          kind: 'carry',
          html:
            'You have a body. It has appetites, desires, and whims. The world will tell you to follow them. Paul tells you to befriend them like an athlete befriends her body—not with hatred or contempt, but with the discipline of training. Your body is not your enemy. But neither is it your master. You are running a race. Keep yourself in condition. Every day. Every choice. The prize is incorruptible.',
        },
        {
          kind: 'reflection',
          id: 'c-castaway',
          prompt:
            'Where are you running this week? What is one area where you have let your body, your appetites, your comfort, set the pace instead of your calling? How will you bring it back into line?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Corinthians 9',
    quote:
      'I am made all things to all men, that I might by all means save some. I therefore so run, not as uncertainly; I keep under my body, and bring it into subjection.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 9 · Study Guide',
  },

  hasHebrew: false,
};
