import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Corinthians 11 — Head Coverings, Headship, and the Lord&apos;s Supper
 *
 * Paul addresses two scandal-points in the Corinthian assembly: the custom of head coverings in worship
 * (tied to questions of order and reflection of glory) and the abuse of the Lord&apos;s Supper itself, which
 * has become a scene of division and drunkenness rather than remembrance and covenant. Both are about
 * how the gathered church embodies the gospel—first through humble submission to created order, then
 * through reverent participation in Christ&apos;s self-giving death.
 */
export const FIRST_CORINTHIANS_11: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 11,

  estimatedMinutes: { 5: 10, 10: 18, 15: 23 },
  intros: [
    '1 Corinthians 11 tackles two issues tearing apart the gathered church in Corinth. First, the question of head coverings in worship—who covers, who doesn&apos;t, and why it matters. Second, the abuse of the Lord&apos;s Supper itself, where selfishness and division have replaced remembrance. Paul&apos;s letter to the Corinthians is full of his corrections, but these two passages are among the most doctrinally dense and culturally complex in the New Testament. Both touch on the nature of headship, submission, and the body of Christ.',
    'Behind both issues lies a single problem: the church has forgotten what it is. It has stopped being a reflection of Christ&apos;s headship and covenant love, and has become, instead, a mirror of Corinth&apos;s appetite and pride. Paul must restore both the custom of the head coverings (a sign of created order and humble reflection) and the sacred weight of the meal (which proclaims the Lord&apos;s death until He comes). Both are about alignment—alignment with the Head, and alignment with one another in His body.',
  ],

  sections: [
    /* ─── 1 Corinthians 11:1 — Be Ye Followers of Me ───────────────────── */
    {
      ref: '1 Corinthians 11:1',
      title: 'Be Ye Followers of Me, Even As I Also Am of Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              1,
              hp('Be ye followers of me, even as I also am of Christ', 'christ-imitate')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-intro-followers',
          html:
            'Paul does not ask the Corinthians to follow him for his own sake. He asks them to follow his example <em>of following Christ.</em> The chain of imitation—from Christ to Paul to the Corinthians—flows downward. Each person is meant to reflect the one above them, as a mirror reflects light.',
        },
        {
          kind: 'christ',
          id: 'christ-imitate',
          title: 'Christ Connection — The Head of the Chain',
          html:
            'Paul says he imitates Christ even as the Corinthians are to imitate him. Christ is the original of the pattern, the one every following is meant to trace back to. &ldquo;For to this you have been called, because Christ also suffered for you, leaving you an example, that you should follow in his steps&rdquo; (1 Pet. 2:21). Imitation is not mere behavior-copying; it is alignment with the One who holds all things together.',
        },
        {
          kind: 'carry',
          html:
            'When you look at who you&apos;re following—what voices shape your day, what examples you&apos;re imitating, whose life you&apos;re copying—trace the chain backward. Does it lead to Christ? Or has it gotten tangled somewhere along the way? Paul&apos;s point is not that you should blindly follow him, but that when you do, you&apos;re not following Paul at all—you&apos;re following Christ through Paul&apos;s obedience.',
        },
        {
          kind: 'reflection',
          id: 'cor11-1-imitate',
          prompt:
            'Whose example are you following most closely right now? Trace it backward: does that chain ultimately lead you to Christ?',
        },
      ],
    },

    /* ─── 1 Corinthians 11:3 — The Head of Every Man ─────────────────── */
    {
      ref: '1 Corinthians 11:3',
      title: 'The Head of Every Man Is Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              3,
              t('But I would have you know, that '),
              hg('the head of every man is Christ', 'cor11-head-christ'),
              t('; and the head of the woman is the man; and '),
              hg('the head of Christ is God', 'cor11-head-god'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-head-christ',
          html:
            'Paul establishes a chain: God, then Christ, then man, then woman. This is <em>not</em> a chain of worth—it is a chain of <em>headship</em> and <em>reflection.</em> A head does not value the body less; a head sustains and leads the body. This verse has sparked centuries of debate across Christian traditions, and the honest truth is: serious readers of Scripture disagree about what it prescribes for church life today. What no reader disagrees about is this: Christ is the head. That is the foundation.',
        },
        {
          kind: 'greek',
          id: 'cor11-kephale',
          title: 'Kephalē — &ldquo;head&rdquo;',
          script: 'κεφαλή',
          translit: '<strong>kephalē</strong> · head; source; beginning',
          description:
            'In Greek thought, the head was often understood as the source and coordinator of the body&apos;s life, not merely its ornament. A head submits and directs simultaneously.',
        },
        {
          kind: 'commentary',
          id: 'cor11-head-god',
          html:
            'Here is the surprising move: even Christ has a head, and that head is God. Christ submitted to the Father&apos;s will. The pattern Paul describes—headship flowing downward, submission flowing upward—is not a pyramid of dominance. It is a structure of <em>alignment with the One Above.</em> Christ models this perfectly: &ldquo;Nevertheless, not my will, but thine, be done&rdquo; (Luke 22:42).',
        },
        {
          kind: 'carry',
          html:
            'The question of headship and submission divides Christians. But there is one thing every tradition agrees on: Christ is your head, and He is <em>submitted</em> to God. Whether you wear a head covering or not, whether you are man or woman, you are called to the same pattern Christ showed: alignment with the One above you. That is the deepest thing Paul is saying here.',
        },
        {
          kind: 'reflection',
          id: 'cor11-3-alignment',
          prompt:
            'How are you aligned with Christ today? Where have you slipped out of that alignment?',
        },
      ],
    },

    /* ─── 1 Corinthians 11:4–7 — Head Coverings and Glory ──────────────── */
    {
      ref: '1 Corinthians 11:4–7',
      title: 'Covering the Head; Reflecting the Glory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              4,
              t('Every man praying or prophesying, having '),
              hy('his head covered', 'cor11-covered'),
              t(', disgraces his head.')
            ),
            verse(
              5,
              t('But every woman that prays or prophesies with her head uncovered dishonors her head: for that is even all one as if she were shaven.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-covered',
          html:
            'In Corinthian culture (and much of the Mediterranean world), the covering signified different things for men and women. A man who covered his head in prayer dishonored Christ, his head, by hiding the very image-bearer God appointed. The logic is: the image should not be hidden.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              6,
              t('For if the woman be not covered, let her also be shorn: but if it be a shame for a woman to be shorn or shaven, let her be covered.')
            ),
            verse(
              7,
              t('For a man indeed ought not to cover his head, forasmuch as he is '),
              hg('the image and glory of God', 'cor11-image-man'),
              t(': but the woman is the glory of the man.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-image-man',
          html:
            'The shearing or shaving of a woman&apos;s head in Corinth was a mark of shame—a sign of adultery or punishment. Paul uses this to show the social seriousness of the covering. But notice: he also says <em>a man</em> is the image and glory of God, and <em>the woman</em> is the glory of the man. These are statements about <em>reflected order</em>, not about inherent worth. Both are image-bearers of God (Gen. 1:27). The difference is about who reflects whom in the order of creation and the structure of the assembly.',
        },
        {
          kind: 'carry',
          html:
            'This passage is admittedly thorny across Christian traditions. Rather than resolve the debate here, notice what Paul is <em>trying to do</em>: he is asking the Corinthians to live in a way that <em>visibly shows</em> they understand the created order. Whether you interpret that as a call to literal head coverings today or not, the underlying principle remains: the gathered church is meant to be a <em>sign</em> of God&apos;s covenant order, a visible reminder that we are not autonomous but aligned with one another in Christ.',
        },
      ],
    },

    /* ─── 1 Corinthians 11:8–12 — Neither Is the Man Without the Woman ─── */
    {
      ref: '1 Corinthians 11:8–12',
      title: 'Neither the Man Without the Woman, Nor the Woman Without the Man, in the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              8,
              t('For the man is not of the woman; but the woman of the man.')
            ),
            verse(
              9,
              t('Neither was the man created for the woman; but the woman for the man.')
            ),
            verse(
              10,
              t('For this cause ought the woman to have '),
              hg('power on her head', 'cor11-power'),
              t(' because of the angels.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-power',
          html:
            'The word translated &ldquo;power&rdquo; is subtle and debated. It may mean the power of her own choice (the covering as a sign of her authority), or it may mean the authority that covers her (the protection of headship). The phrase &ldquo;because of the angels&rdquo; is also cryptic—perhaps meaning the angels witness the church&apos;s order, or perhaps alluding to Genesis 6:1–4. What is clear: the covering is not meant as a mark of powerlessness, but as a sign of <em>covenant alignment.</em>',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              11,
              t('Nevertheless '),
              hg('neither is the man without the woman, neither the woman without the man, in the Lord', 'cor11-interdependence'),
              t('.')
            ),
            verse(
              12,
              t('For as the woman is of the man, even so is the man also by the woman; but all things of God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-interdependence',
          html:
            'After laying out the created order, Paul immediately <em>qualifies</em> it: in the Lord, neither stands alone. The man came from God; the woman came from the man; but now all men come <em>through</em> women. They are woven together. Paul is not erasing the difference he just described; he is situating it inside a larger truth: mutual dependence. The ordering is real; the separation is false.',
        },
        {
          kind: 'greek',
          id: 'cor11-chōris',
          title: 'Chōris — &ldquo;apart from&rdquo;',
          script: 'χωρίς',
          translit: '<strong>chōris</strong> · apart from; without; separated',
          description:
            'Paul uses this word to deny a false separation. In Christ, the created order does not isolate; it connects. The head and body are not apart; they are one.',
        },
        {
          kind: 'carry',
          html:
            'Whether you land on the complementarian or egalitarian side of this passage, Paul&apos;s final word should sting you a little: all things come from God. Whatever authority or order you exercise, it is not <em>yours.</em> It belongs to God. You are steward, not owner. You are vessel, not source. That changes everything.',
        },
        {
          kind: 'reflection',
          id: 'cor11-8-12-mutuality',
          prompt:
            'In your own relationships, where have you acted as if you could stand alone? What would change if you truly believed you cannot?',
        },
      ],
    },

    /* ─── 1 Corinthians 11:13–16 — Doth Not Even Nature Itself Teach You ── */
    {
      ref: '1 Corinthians 11:13–16',
      title: 'Doth Not Even Nature Itself Teach You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              13,
              t('Judge in yourselves: is it '),
              hg('comely that a woman pray unto God uncovered', 'cor11-comely'),
              t('?')
            ),
            verse(
              14,
              t('Doth not even nature itself teach you, that, if a man have long hair, it is a shame unto him?')
            ),
            verse(
              15,
              t('But if a woman have long hair, it is a glory to her: for her hair is given her for a covering.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-comely',
          html:
            'Paul appeals to the Corinthians&apos; own judgment. He is not issuing a harsh decree; he is inviting them to <em>see</em> for themselves. The covering, he suggests, is natural—almost instinctive. Hair itself, grown long, serves the purpose of covering. Nature (understood as God&apos;s design embedded in creation) teaches the principle.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              16,
              t('But if any man seem to be contentious, we have no such custom, neither the churches of God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-contentious',
          html:
            'Paul closes the head-covering section by stepping back from absolutism. If someone wishes to contend about it, he says, the practice is not universal across the churches—but it is practiced by those who understand its meaning. The principle (submission to created order, visible alignment) is binding; the specific application may vary.',
        },
        {
          kind: 'carry',
          html:
            'Paul&apos;s appeal to nature and custom suggests something worth noting: some truths are embedded so deeply in God&apos;s design that they appear in both nature and culture. That does not make them absolute rules—cultures shift, and so should our readings. But it does suggest there is <em>something real</em> being pointed at. Take time to ask: what is Paul really calling for? Not necessarily a covering, maybe, but a <em>visible humility</em> before the created order. What would that look like in your own worship?',
        },
        {
          kind: 'reflection',
          id: 'cor11-13-16-nature',
          prompt:
            'What does it mean to you to live in alignment with created order? Where might you need to humble yourself?',
        },
      ],
    },

    /* ─── 1 Corinthians 11:17–22 — Coming Together for the Worse ──────── */
    {
      ref: '1 Corinthians 11:17–22',
      title: 'Coming Together, Not for the Better, But for the Worse',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              17,
              t('Now in this that I declare unto you '),
              hg('I praise you not', 'cor11-praise-not'),
              t(', that ye come together not for the better, but for the worse.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-praise-not',
          html:
            'Paul is blunt. When the Corinthians gather, he cannot praise them. This is the harshest opening to a section in this letter. Something has gone deeply wrong.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              18,
              t('For first of all, when ye come together in the church, I hear that there be '),
              hg('divisions among you', 'cor11-divisions'),
              t('; and I partly believe it.')
            ),
            verse(
              19,
              t('For there must be also '),
              hg('heresies among you', 'cor11-heresies'),
              t(', that they which are approved may be made manifest among you.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-divisions',
          html:
            'Division at the meal. Paul has heard of factions, and he believes the reports. The unity that should mark the table is shattered by preference, status, and selfishness.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              20,
              t('When ye come together therefore into one place, '),
              hp('this is not to eat the Lord&apos;s supper', 'chr-not-supper'),
              t('.')
            ),
            verse(
              21,
              t('For in eating every one taketh before other his own supper: and one is hungry, and another is drunken.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-heresies',
          html:
            'The word &ldquo;heresies&rdquo; does not necessarily mean false doctrine, but &ldquo;sects&rdquo; or &ldquo;factions.&rdquo; Divisions in the church are inevitable, Paul says—they reveal who is really devoted to Christ and who is just chasing status. The test of devotion is the meal itself.',
        },
        {
          kind: 'commentary',
          id: 'chr-not-supper',
          html:
            'The Corinthians are eating in the same location, but it is no longer the Lord&apos;s Supper. They have turned a covenant meal into a social meal. The wealthy bring plenty and eat well; the poor arrive late and find nothing. Some are getting drunk. The shame is cosmic.',
        },
        {
          kind: 'christ',
          id: 'christ-not-supper',
          title: 'Christ Connection — The Table That Was Mean to Unite',
          html:
            'The Lord&apos;s Supper is the one meal that is supposed to level everyone—master and slave, rich and poor, male and female, all eating one bread and drinking one cup. Paul later writes that &ldquo;as many of you as have been baptized into Christ have put on Christ. There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus&rdquo; (Gal. 3:27–28). The Supper is that baptism&apos;s lived-out truth. When the Corinthians turned it into a buffet for the rich, they murdered that unity.',
        },
        {
          kind: 'carry',
          html:
            'The Corinthians were doing the mechanics of the meal—bread, wine, the words—but they had gutted it of meaning. They came together, but not for <em>one another.</em> Ask yourself: when you gather with other Christians to worship, to pray, to break bread—are you truly there for the others? Or are you performing the ritual while your attention and your stomach and your allegiance are still claimed by something else? Paul would say: that is no longer the Lord&apos;s Supper. That is just eating.',
        },
        {
          kind: 'reflection',
          id: 'cor11-17-22-unity',
          prompt:
            'When you gather with God&apos;s people, are you truly present for <em>them</em>, or are you just going through the motions?',
        },
      ],
    },

    /* ─── 1 Corinthians 11:23–24 — I Have Received of the Lord ───────── */
    {
      ref: '1 Corinthians 11:23–24',
      title: 'I Have Received of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              23,
              t('For I have '),
              hg('received of the Lord', 'cor11-received'),
              t(' that which also I delivered unto you, That the Lord Jesus '),
              hg('the same night in which he was betrayed', 'cor11-betrayed'),
              t(' took bread:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-received',
          html:
            'Paul claims apostolic authority: he has received this directly from the Lord. He is not inventing a rule; he is <em>transmitting</em> what was handed to him. This is paradosis in Greek—tradition, handed down. Not dead tradition, but living covenant.',
        },
        {
          kind: 'greek',
          id: 'cor11-paradosis',
          title: 'Paradosis — &ldquo;tradition&rdquo;',
          script: 'παράδοσις',
          translit: '<strong>paradosis</strong> · that which is handed down; transmission; tradition',
          description:
            'Paul uses this word to claim continuity with Christ Himself. The words of institution are not Paul&apos;s commentary; they are Christ&apos;s own words, delivered to Paul, and now delivered to Corinth. The tradition is both holy and communal.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              24,
              t('And when he had given thanks, he brake it, and said, '),
              hp('Take, eat: this is my body, which is broken for you', 'chr-body-broken'),
              t(': '),
              hg('this do in remembrance of me', 'cor11-remembrance'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-betrayed',
          html:
            'The timing is crucial: the night of His betrayal. Jesus established this meal not in triumph but in betrayal—facing abandonment by His closest friends and imminent death. The meal is rooted in the darkest moment of His earthly life.',
        },
        {
          kind: 'commentary',
          id: 'cor11-remembrance',
          html:
            'The word <em>remembrance</em> is not mere mental recall. It is anamnesis in Greek—a making-present of a past reality. When you eat in remembrance, you are not merely thinking about the cross; you are making it present, standing before it, aligning yourself with its power.',
        },
        {
          kind: 'christ',
          id: 'chr-body-broken',
          title: 'Christ Connection — His Body, Broken for You',
          html:
            'The body of Jesus was literally broken on the cross—hands pierced, flesh torn, bones dislocated. The bread is called &ldquo;my body, which is broken for you&rdquo; because the breaking of that body was <em>for us.</em> His fracture is our healing. His death is our life. To eat the bread is to acknowledge: I live because He was broken. I am forgiven because He bled. I am His because He chose to be torn apart for me.',
        },
        {
          kind: 'carry',
          html:
            'The next time you hold bread meant for the Lord&apos;s Supper—whether literal bread or a memory of it—pause. Let the brokenness sink in. Not figuratively. He was broken. For you. Not as payment to an angry father, but as a mother throws herself in front of her child. Christ&apos;s body was crushed because He loves you. That is what the meal means. Everything else—division, status, the question of who gets to eat—dies before that.',
        },
      ],
    },

    /* ─── 1 Corinthians 11:25–26 — The New Testament in My Blood ───────── */
    {
      ref: '1 Corinthians 11:25–26',
      title: 'The Cup; The New Testament in His Blood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              25,
              t('After the same manner also he took the cup, when he had supped, saying, '),
              hp('This cup is the new testament in my blood', 'chr-new-covenant'),
              t(': '),
              hg('this do ye, as oft as ye drink it, in remembrance of me', 'cor11-cup-remembrance'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-cup-remembrance',
          html:
            'The cup is the <em>covenant</em> cup. The Hebrew word for &ldquo;testament&rdquo; is berith—covenant. Jesus is saying: the old covenant, ratified by the blood of animals at Sinai, is being replaced. My blood seals a new covenant. It is personal, intimate, eternal. To drink the cup is to say: I am grafted into this covenant.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              26,
              t('For as often as ye eat this bread, and drink this cup, ye '),
              hg('do shew the Lord&apos;s death till he come', 'cor11-proclaim-death'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-proclaim-death',
          html:
            '&ldquo;Shew&rdquo; is the word katengello in Greek—to display, to proclaim publicly. Every time believers eat and drink, they are making a public declaration: <em>He died. We remember. We wait for His return.</em> The meal is not private piety; it is public testimony. The Corinthians were eating, but they were not proclaiming. They were not showing the Lord&apos;s death; they were showing their own appetites.',
        },
        {
          kind: 'christ',
          id: 'chr-new-covenant',
          title: 'Christ Connection — Past, Present, and Future All at Once',
          html:
            'When the Corinthians eat and drink, they &ldquo;shew the Lord&apos;s death.&rdquo; That means they simultaneously remember His <em>past</em> death, encounter His <em>present</em> Spirit, and proclaim His <em>future</em> return. The meal holds all three tenses at once. &ldquo;For as often as ye eat this bread, and drink this cup, ye do shew the Lord&apos;s death <em>till he come.</em>&rdquo; The meal is a three-tense prayer: <em>He came. He comes. He will come.</em>',
        },
        {
          kind: 'carry',
          html:
            'The Supper is meant to crack you open to three realities at once: you are living <em>because</em> He died (past); you are living <em>in Him</em> right now (present); you are living <em>toward</em> His return (future). If your participation in the meal does not touch all three of these, you are not yet eating in remembrance. You are just eating.',
        },
        {
          kind: 'reflection',
          id: 'cor11-25-26-tenses',
          prompt:
            'When you think of Christ&apos;s death, which tense do you feel most acutely—the past sacrifice, the present reality, or the future hope?',
        },
      ],
    },

    /* ─── 1 Corinthians 11:27–29 — Eat and Drink Unworthily ───────────── */
    {
      ref: '1 Corinthians 11:27–29',
      title: 'Examine Yourself; Discern the Body',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              27,
              t('Wherefore whosoever shall eat this bread, and drink this cup of the Lord, '),
              hg('unworthily', 'cor11-unworthily'),
              t(', shall be '),
              hy('guilty of the body and blood of the Lord', 'cor11-guilty'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-unworthily',
          html:
            'To eat unworthily is not to eat while sinful—everyone is sinful. It is to eat <em>without understanding</em> the meal, or <em>while harboring contempt</em> for others, or <em>while living in flagrant rebellion</em> against the Lord. It is to eat as if the bread and cup were just bread and cup, with no cosmic weight behind them.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              28,
              t('But '),
              hg('let a man examine himself', 'cor11-examine'),
              t(', and so let him eat of that bread, and drink of that cup.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-examine',
          html:
            'Paul calls for introspection—not morbid self-condemnation, but honest assessment. <em>Am I approaching this meal with reverence? Am I broken over my sin, or defending it? Am I at peace with my brothers and sisters, or nursing a grudge? Am I ready to meet my Lord?</em> The examination is not meant to paralyze; it is meant to align.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              29,
              t('For he that eateth and drinketh unworthily, eateth and drinketh '),
              hg('damnation to himself', 'cor11-damnation'),
              t(', '),
              hy('not discerning the Lord&apos;s body', 'cor11-discern'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-guilty',
          html:
            'This is staggering language. To eat unworthily is to become &ldquo;guilty of the body and blood of the Lord&rdquo;—as if you yourself had betrayed Him, as if you yourself had pierced Him. That is how serious the meal is. It is not a symbol you can take lightly; it is a covenant you are entering, or renewing.',
        },
        {
          kind: 'commentary',
          id: 'cor11-damnation',
          html:
            'Paul uses the word krima—judgment, condemnation. To eat unworthily is to draw judgment on yourself. This is not annihilation; it is correction. God judges His own children to restore them.',
        },
        {
          kind: 'greek',
          id: 'cor11-diakrinō',
          title: 'Diakrinō — &ldquo;to discern&rdquo;',
          script: 'διακρίνω',
          translit: '<strong>diakrinō</strong> · to distinguish; to recognize; to judge between',
          description:
            'To &ldquo;discern the Lord&apos;s body&rdquo; means to recognize and honor what the meal <em>is</em>—not just bread, but the body of Christ. It is to see with eyes that understand the weight.',
        },
        {
          kind: 'commentary',
          id: 'cor11-discern',
          html:
            'Discernment is the key. You must recognize the Lord&apos;s body—not just acknowledge it intellectually, but <em>see it</em> as holy. The Corinthians were eating, but their eyes were not open. They were not seeing.',
        },
        {
          kind: 'carry',
          html:
            'Before the next time you partake, spend real time examining your heart. Not to condemn yourself into a corner, but to align. Do you truly believe who Jesus is? Do you trust His death was for you? Are there relationships in your life that need repair? Is there sin you need to confess? Spend time with the Lord about these things. That is the examination Paul is calling for. When you come to the table, come clean.',
        },
        {
          kind: 'reflection',
          id: 'cor11-27-29-discern',
          prompt:
            'What does it look like for you to truly <em>discern</em> the Lord&apos;s body? What would need to change in your heart?',
        },
      ],
    },

    /* ─── 1 Corinthians 11:30–34 — Judge Ourselves ─────────────────────── */
    {
      ref: '1 Corinthians 11:30–34',
      title: 'Weakness, Sickness, and the Mercy of Self-Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              30,
              t('For this cause many are '),
              hg('weak and sickly among you, and many sleep', 'cor11-weak'),
              t('.')
            ),
            verse(
              31,
              t('For '),
              hg('if we would judge ourselves, we should not be judged', 'cor11-judge-self'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-weak',
          html:
            'Paul connects the physical afflictions in the Corinthian congregation to their unworthy participation in the meal. Some are weak. Some are sick. Many have died—&ldquo;sleep&rdquo; is Paul&apos;s word for death. The consequences are not merely spiritual; they are embodied. God takes the meal seriously, and so does His judgment.',
        },
        {
          kind: 'commentary',
          id: 'cor11-judge-self',
          html:
            'Paul offers an escape clause—not from judgment, but from harsh judgment. If the Corinthians would <em>judge themselves</em> first, would <em>examine themselves</em> and repent, then they would escape the Lord&apos;s discipline. Self-judgment is mercy. It prevents harder judgment later.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              32,
              t('But when we are judged, we are chastened of the Lord, that we should not be condemned with the world.')
            ),
            verse(
              33,
              t('Wherefore, my brethren, when ye come together to eat, '),
              hg('tarry one for another', 'cor11-tarry'),
              t('.')
            ),
            verse(
              34,
              t('And if any man hunger, let him eat at home; that ye come not together unto condemnation. And the rest will I set in order when I come.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor11-tarry',
          html:
            'Paul&apos;s solution is simple and devastating: <em>wait for one another.</em> If the meal is truly the Lord&apos;s Supper, then no one eats alone. The wealthy must wait for the poor. The early arrivals must wait for the latecomers. To come together and not wait for one another is to make the meal a <em>mockery</em> of the body it is supposed to celebrate.',
        },
        {
          kind: 'christ',
          id: 'christ-chastened',
          title: 'Christ Connection — The Father&apos;s Discipline Is Love',
          html:
            'Paul says: when we are judged, we are &ldquo;chastened of the Lord, that we should not be condemned with the world.&rdquo; The Lord&apos;s judgment on His own children is corrective, not condemning. &ldquo;Whom the Lord loves he chastens, and scourgeth every son whom he receives&rdquo; (Heb. 12:6). If God is disciplining you, it is because you are His, and He wants you restored.',
        },
        {
          kind: 'carry',
          html:
            'Paul&apos;s final word to the Corinthians is profoundly practical: when you come together, wait for one another. Do not eat your fill while others wait. That simple act—waiting—is itself a kind of communion, a statement that you believe you are bound to one another in Christ. The meal means nothing if it becomes an occasion for selfishness. Make your gathering a place where nobody eats alone.',
        },
        {
          kind: 'reflection',
          id: 'cor11-30-34-wait',
          prompt:
            'In your own faith community, who do you need to wait for? What would it look like to truly make space?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'For as often as ye eat this bread, and drink this cup, ye do shew the Lord&apos;s death till he come.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 11 · Study Guide',
  },

  hasHebrew: false,
};
