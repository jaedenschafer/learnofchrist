import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Philemon 1 — The Runaway Slave and Christian Brotherhood
 *
 * Paul writes to Philemon on behalf of Onesimus, a runaway slave. What makes this
 * 25-verse letter extraordinary is not its rhetoric but its theology: the gospel
 * applied to a single domestic crisis. In Christ, the enslaved becomes the beloved.
 * The unprofitable becomes profitable—not as property, but as brother. Paul does not
 * argue for abolition; he shows it happening in one transformed relationship.
 * This is the gospel becoming concrete.
 */
export const PHILEMON_1: RichChapterContent = {
  bookSlug: 'philemon',
  bookName: 'Philemon',
  chapter: 1,

  intros: [
    'Onesimus was Philemon&apos;s slave. He ran away—perhaps stole money—and ended up in Rome. There, he encountered Paul and became a believer. But Paul does not help him hide. He sends him back to face his master, armed only with a letter that asks Philemon to receive him as a brother. No abolition rhetoric. No legal argument. Just the quiet, revolutionary claim that the gospel has changed everything.',
    'Philemon is also a believer. He hosts a church in his house. He is known for love and faith. So Paul writes to him as an equal, as a fellow servant of Christ—a master of slaves, but also a servant of a King who taught that the greatest among you must become servant of all. The letter is intimate, personal, and disarmingly tender. It shows the gospel not as doctrine but as the redeeming power that unmakes the bonds of the world.',
    'This is the most intimate letter in the New Testament. It does not shout. It whispers. And what it whispers is that in Christ, the barriers that divided the ancient world—master, slave, rich, poor—do not disappear through political upheaval but through the slow, inexorable work of love transforming one human heart at a time.',
  ],

  opener: {
    matchArtist: /rembrandt|caravaggio|tisaot/i,
    matchTitle: /prison|letter|bond|embrace|reconciliation/i,
    caption: 'A Letter of Love and Reconciliation',
  },

  sections: [
    /* ─── Philemon 1–3 — Greeting and Household ──────────────────────── */
    {
      ref: 'Philemon 1–3',
      title: 'To Philemon, Our Dearly Beloved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('Paul, '),
                hp('a prisoner of Jesus Christ', 'phlm-prisoner'),
                t(', and Timothy our brother, unto Philemon our dearly beloved, and fellowlabourer,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm-prisoner',
          html:
            'Paul does not hide his condition. He is imprisoned—not by Christ in the sense of ownership, but bound to Him as a slave to a master of incomparable worth. He writes from a Roman cell. Yet his opening word is not complaint but claim: <em>prisoner of Jesus Christ</em>. His chains belong to a power higher than Rome. This is Paul&apos;s authority—not apostolic rank, but apostolic suffering.',
        },
        {
          kind: 'greek',
          id: 'phlm-desmos',
          title: 'Desmos — Bond, Chain, Prison',
          script: 'δεσμός',
          translit: '<strong>desmos</strong> · a physical bond; imprisonment',
          description:
            'The same word will ring through this letter: Paul is bound; Onesimus is bound; Philemon will be bound by the request Paul makes. The gospel does not liberate from all bonds but exchanges one bond—to fear, to sin, to status—for another: bond to Christ and to one another in Him.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 2,
              spans: [
                t('And to the '),
                hg('church in thy house', 'phlm-church'),
                t(': Grace to you, and peace, from God our Father and the Lord Jesus Christ.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm-church',
          html:
            'Philemon&apos;s home is a gathering place for believers—a living room sanctuary. Churches in this era met in houses, not buildings. This letter will be read aloud to that assembly. Philemon cannot refuse Paul&apos;s plea in private; his decision will be public, witnessed by his own household and the church that worships in it. He will be tested before his people.',
        },
        {
          kind: 'carry',
          html:
            'Paul does not write to Philemon alone. He writes to Philemon the householder, Philemon the brother, Philemon the man known for faith and love—and he writes knowing the letter will be heard by the church. Your private decisions about how you treat those below you, those you have power over, those you might dismiss—they are never private. They are always witnessed. They reveal whether your faith is real.',
        },
        {
          kind: 'reflection',
          id: 'phlm1-greeting',
          prompt:
            'How do the people in your household or workplace experience your faith? Does your love for those below you match your love for those at your level?',
        },
      ],
    },

    /* ─── Philemon 4–7 — Thanksgiving for Love ─────────────────────── */
    {
      ref: 'Philemon 4–7',
      title: 'I Hear of Thy Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 4,
              spans: [
                t('I thank my God, making '),
                hg('mention of thee always in my prayers', 'phlm-prayer'),
                t(','),
              ],
            },
            {
              number: 5,
              spans: [
                t('Hearing of thy love and faith, which thou hast toward the Lord Jesus, and toward all saints;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm-prayer',
          html:
            'Paul does not begin by making a request. He begins by praying. By naming what he has heard of Philemon. By locating Philemon in his own prayer life. This is the relational ground from which all that follows will flow. You cannot ask someone to do the impossible unless you first remind them of their own goodness.',
        },
        {
          kind: 'greek',
          id: 'phlm-agape',
          title: 'Agape — Love; Koinonia — Fellowship',
          script: 'ἀγάπη · κοινωνία',
          translit: '<strong>agape</strong> · sacrificial love | <strong>koinonia</strong> · shared participation',
          description:
            'Philemon&apos;s love is not sentimental. It is <em>agape</em>—the love that lays down its life, that chooses the other&apos;s good. His faith is toward the Lord Jesus and toward all saints. It overflows. It is shared—<em>koinonia</em>—with others. This is not private piety. It is love that moves through a community.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 6,
              spans: [
                t('That the '),
                hg('communication of thy faith', 'phlm-sharing'),
                t(' may become effectual by the acknowledging of every good thing which is in you in Christ Jesus.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm-sharing',
          html:
            'Paul prays that Philemon&apos;s faith will become <em>effectual</em>—working, active, alive. How? By Philemon acknowledging every good thing <em>in himself</em> "in Christ Jesus." This is not false humility. Paul is saying: Know who you are in Christ. You are loved. You are redeemed. You are capable of radical love. Let that knowledge become the ground of what you do next.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 7,
              spans: [
                t('For we have great joy and consolation in thy love, because the '),
                hy('bowels of the saints', 'phlm-splagchna'),
                t(' are refreshed by thee, brother.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'phlm-splagchna',
          title: 'Splagchna — Bowels, Heart, Tender Compassion',
          script: 'σπλάγχνα',
          translit: '<strong>splagchna</strong> · the seat of feeling; compassion; affection',
          description:
            'In biblical language, the inner organs are the seat of emotion and will. When Paul says Philemon has refreshed the "bowels" of the saints, he means the deepest part of them—their hearts, their core selves—have been restored by his love. He does not ask permission; he observes reality. Philemon is already a man of deep compassion.',
        },
        {
          kind: 'christ',
          id: 'phlm1-christ-love',
          title: 'Christ Connection — Christ&apos;s Love for the Beloved',
          html:
            'Paul&apos;s language echoes what will come: the tender identification of Christ with the beloved. Jesus does not stand apart from His people; He takes their burdens, their shame, their debt upon Himself. He refreshes their bowels—their deepest selves—with His love. Philemon has tasted this love. Paul reminds him he has tasted it so that he will extend it to another.',
        },
        {
          kind: 'carry',
          html:
            'Before Paul asks anything impossible of Philemon, he does something generous: he praises him. Not flattery, but truth. He has heard of your faith. Your love has refreshed the saints. You are capable of what I am about to ask. Paul treats Philemon as the man his best self already knows he is. This is how you change someone: by reminding them of their own goodness, by locating them in their own prayers.',
        },
        {
          kind: 'reflection',
          id: 'phlm1-love',
          prompt:
            'When was the last time someone reminded you of your own capacity for love? How did that change what you did next?',
        },
      ],
    },

    /* ─── Philemon 8–12 — "For Love&apos;s Sake I Rather Beseech Thee" ──── */
    {
      ref: 'Philemon 8–12',
      title: 'For Love&apos;s Sake I Beseech Thee',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 8,
              spans: [
                t('Wherefore, though I might be '),
                hy('much bold in Christ', 'phlm-bold'),
                t(' to '),
                hg('enjoin thee that which is convenient', 'phlm-command'),
                t(','),
              ],
            },
            {
              number: 9,
              spans: [
                t('Yet for love&apos;s sake I rather beseech thee, being such an one as Paul the aged, and now also a prisoner of Jesus Christ:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm-bold',
          html:
            'Paul has authority. He is an apostle. He could command Philemon to do what he is about to ask. But he will not. He could use apostolic power; he chooses instead the power of love. This is a crucially important moment in the letter: Paul demonstrates that the gospel is not enforced but freely chosen. Love must be voluntary to be real.',
        },
        {
          kind: 'greek',
          id: 'phlm-parakaleo',
          title: 'Parakaleo — to Beseech, to Appeal, to Exhort',
          script: 'παρακαλέω',
          translit: '<strong>parakaleo</strong> · to come alongside and appeal; to beseech',
          description:
            'Paul could have used <em>diatasso</em>, the word for commanding. Instead he uses <em>parakaleo</em>—to come alongside, to appeal, to invite someone to be their best self. This is the mode of the gospel with free people. God does not coerce; He persuades.',
        },
        {
          kind: 'commentary',
          id: 'phlm-command',
          html:
            'What is "convenient"? What is fitting and right. Paul knows that receiving Onesimus as a brother is the right thing—the gospel thing—to do. But he will not force it. He will not say, "You must do this." Instead he will appeal to Philemon&apos;s own love, his own faith, his own best self. The gospel trusts people to choose good.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 10,
              spans: [
                t('I beseech thee for my son '),
                hy('Onesimus', 'phlm-onesimus'),
                t(', whom I have '),
                hg('begotten in my bonds', 'phlm-gennao'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm-onesimus',
          html:
            'Onesimus means "useful" in Greek. The irony is crushing: Paul now calls him his beloved son, the child of his imprisonment and faith. In the eyes of the law, Onesimus is property, theft, worthless. In the eyes of Paul—in the eyes of Christ—he is a son, beloved, reborn. Names matter. Identity matters. The gospel gives Onesimus a new name.',
        },
        {
          kind: 'greek',
          id: 'phlm-gennao',
          title: 'Gennao — to Beget, to Father, to Give Birth',
          script: 'γεννάω',
          translit: '<strong>gennao</strong> · to beget; to father; to birth spiritually',
          description:
            'Paul did not father Onesimus in the flesh. He fathered him in faith. The spiritual bond is deeper than the biological. Paul has given Onesimus a new life, a new family, a new name. In the ancient world, this was revolutionary: a slave could become a son.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 11,
              spans: [
                t('Which in time past was to thee unprofitable, but now profitable to thee and to me:'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Whom I have sent again: thou therefore receive him, that is, mine own bowels:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm-unprofitable',
          html:
            'Onesimus ran away. In doing so, he betrayed his function as a slave—became "unprofitable," achreios, useless. But there is a deeper pun: before meeting Christ, Onesimus was a slave, bound to a life of servitude with no way out. His unprofitability was spiritual, not just economic.',
        },
        {
          kind: 'greek',
          id: 'phlm-achreios-euchreiost',
          title: 'Achreios—Unprofitable; Euchreiost—Profitable',
          script: 'ἄχρειος · εὔχρηστος',
          translit: '<strong>achreios</strong> · useless | <strong>euchreiost</strong> · useful, profitable',
          description:
            'The names bind to the transformation: Onesimus ("useful") was achreios ("useless"); now he is euchreiost ("profitable"). The gospel does not change his function; it transforms his very being. Not just to Philemon will he be profitable, but to Paul—to the gospel—to God.',
        },
        {
          kind: 'commentary',
          id: 'phlm-receive',
          html:
            'Paul does not ask Philemon to free Onesimus—at least not with that word. He asks him to <em>receive</em> him. To take him back not as property reclaimed but as a person restored. The legal status may remain; the relational reality has been unmade and remade.',
        },
        {
          kind: 'commentary',
          id: 'phlm-bowels',
          html:
            'Paul says to receive Onesimus is to receive "mine own bowels"—the deepest, most tender part of himself. This is an astonishing claim. Paul has so identified with Onesimus&apos; redemption, so claimed him as his own beloved, that to receive Onesimus is to receive Paul&apos;s own heart.',
        },
        {
          kind: 'christ',
          id: 'phlm1-christ-worthless',
          title: 'Christ Connection — The Gospel Makes the Worthless Valuable',
          html:
            'In Christ, the unprofitable becomes profitable. The slave becomes the beloved. The runaway becomes the brother. Peter writes of Christians redeemed by Christ: "Which in time past were not a people, but are now the people of God" (1 Pet. 2:10). This is what the gospel does: it takes the cast-off, the useless, the worthless—and makes them the beloved of God, redeemed by the blood of Christ. Onesimus is the gospel in miniature.',
        },
        {
          kind: 'carry',
          html:
            'There is someone in your world that the world has written off. A failure. A criminal. A shame. Someone you have written off, or someone the world has. The gospel says: that person is potentially a beloved of God. The unprofitable has the capacity to become profitable—not in worldly terms, but in the terms that matter eternally. Your reception of them may be the letter of Paul to Philemon that changes their life.',
        },
        {
          kind: 'reflection',
          id: 'phlm1-worthless',
          prompt:
            'Is there someone the world has written off that you have also dismissed? How might the gospel ask you to receive them as someone Christ has already redeemed?',
        },
      ],
    },

    /* ─── Philemon 13–16 — "Receive Him as Myself" ──────────────────── */
    {
      ref: 'Philemon 13–16',
      title: 'Not Now as a Servant, But a Brother Beloved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 13,
              spans: [
                t('Whom I '),
                hg('would have retained with me', 'phlm-retain'),
                t(', that in thy stead he might have ministered unto me in the bonds of the gospel:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('But '),
                hg('without thy mind', 'phlm-without-mind'),
                t(' would I do nothing; that thy benefit should not be as it were of necessity, but '),
                hp('willingly', 'phlm-hekousios'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm-retain',
          html:
            'Paul could have kept Onesimus. Onesimus could serve him in prison, minister to him. But Paul does not keep him. He sends him back. Why? Because the gospel does not permit shortcuts. True reconciliation requires facing the one you have wronged. True brotherhood requires consent, not capture.',
        },
        {
          kind: 'commentary',
          id: 'phlm-without-mind',
          html:
            'Paul will not keep Onesimus "without thy mind"—without your knowledge, without your permission, without your will being honored. He respects Philemon&apos;s autonomy even as he is about to ask him to surrender the economic benefit of slaveholding. The gospel asks, it does not steal.',
        },
        {
          kind: 'greek',
          id: 'phlm-hekousios',
          title: 'Hekousios — Willing, Voluntary, of One&apos;s Own Accord',
          script: 'ἑκούσιος',
          translit: '<strong>hekousios</strong> · done willingly; voluntary; by choice',
          description:
            'Paul wants the benefit to come "willingly"—not from necessity or obligation or the law, but from Philemon&apos;s own heart. Love must be chosen. Freedom must be granted. Slavery to righteousness must be embraced, not coerced.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 15,
              spans: [
                t('For perhaps he therefore departed for a season, that thou shouldest receive him for ever;'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Not now as a servant, but above a servant, a brother beloved, specially to me, but how much more unto thee, both in the flesh, and in the Lord?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm-perhaps',
          html:
            'Paul does not say Onesimus&apos; running was good. He says: perhaps God allowed it. Perhaps this crisis was the occasion for something greater. This is faith: the ability to see God&apos;s hand even in human failure and sin, redirecting it toward redemption. God is not caught off guard. He uses even our stumbles for His purposes.',
        },
        {
          kind: 'commentary',
          id: 'phlm-forever',
          html:
            'Not for a season, but forever. Onesimus is not being loaned back. He is being received <em>for ever</em>—into a new relationship that transcends the old one of slavery. This permanence is the reversal: where slavery was supposed to be permanent, the gospel offers a new permanence—the permanence of brotherhood.',
        },
        {
          kind: 'greek',
          id: 'phlm-aionios-adelphos',
          title: 'Aionios—Eternal; Adelphos—Brother',
          script: 'αἰώνιος · ἀδελφός',
          translit: '<strong>aionios</strong> · eternal; forever | <strong>adelphos</strong> · brother; born of the same womb',
          description:
            'Onesimus moves from the status of slave (doulos) to brother (adelphos). No longer is he one born into servitude; he is one born—born again—into the family of God and the family of Philemon in Christ.',
        },
        {
          kind: 'commentary',
          id: 'phlm-above-servant',
          html:
            '"Above a servant"—literally, "more than a servant." A servant performs duties. A brother shares life. A servant obeys from fear or law. A brother obeys from love. The social category has been transcended. Not erased, perhaps, but transcended by something greater.',
        },
        {
          kind: 'christ',
          id: 'phlm1-christ-brother',
          title: 'Christ Connection — Jesus Identifies With the Least',
          html:
            '"Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me" (Matt. 25:40). Christ identifies with Onesimus. He stands with the slave, the runaway, the one with no status. When Philemon receives Onesimus as a brother, he receives Christ Himself. This is not sentiment; it is the direct claim of Jesus on how we treat one another.',
        },
        {
          kind: 'carry',
          html:
            'The gospel does not ask Philemon to abolish slavery through legislation or revolution. It does something more dangerous: it asks him to look at the slave in his house and see a brother. To see the despised and recognize the beloved. To surrender the status that makes him powerful. This is how the gospel works: one transformed heart at a time, one relationship at a time—until the very structures that depend on dehumanization become impossible to sustain.',
        },
        {
          kind: 'reflection',
          id: 'phlm1-brother',
          prompt:
            'Who is someone you have the power over who you have not fully seen as a brother or sister in Christ? What would change if you did?',
        },
      ],
    },

    /* ─── Philemon 17–19 — "If He Hath Wronged Thee, Put That on Mine Account" */
    {
      ref: 'Philemon 17–19',
      title: 'If He Oweth Thee, Put That on Mine Account',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 17,
              spans: [
                t('If thou count me therefore a '),
                hy('partner', 'phlm-partner'),
                t(', receive him as myself.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm-partner',
          html:
            'Paul calls Philemon his "partner"—koinonos, one who shares in something. If Philemon counts Paul as a partner in the gospel, then they share a common loyalty, a common King. That loyalty transcends any property claim. You cannot be partners with Paul and treat his beloved son as mere property.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 18,
              spans: [
                t('If he hath wronged thee, or oweth thee ought, put that on mine account;'),
              ],
            },
            {
              number: 19,
              spans: [
                t('I Paul have written it with mine own hand, I will repay it: albeit I do not say to thee how thou owest unto me even thine own self besides.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm-oweth',
          html:
            'Onesimus may have stolen from Philemon. The debt may be real. Paul does not deny it. He simply says: charge it to me. Let me pay what he owes. This is the language of substitution, the very language of the gospel itself.',
        },
        {
          kind: 'greek',
          id: 'phlm-ellogeao',
          title: 'Ellogeao — to Charge to an Account, to Put on One&apos;s Tab',
          script: 'ἐλλογάω',
          translit: '<strong>ellogeao</strong> · to charge to an account; to put on one&apos;s books',
          description:
            'This is literal bookkeeping language. Paul says: transfer the debt from Onesimus&apos; account to mine. In the commerce of the gospel, this is what substitution looks like—a transfer of liability, a taking on of another&apos;s burden.',
        },
        {
          kind: 'commentary',
          id: 'phlm-account',
          html:
            'Paul offers to make himself liable for Onesimus&apos; debt. This is the very heart of the gospel: Christ taking our debt upon Himself, our sin placed on His account, our rightlessness paid for by His righteousness. Paul enacts the gospel with his own signature.',
        },
        {
          kind: 'commentary',
          id: 'phlm-own-hand',
          html:
            'Paul writes this promise in his own hand. It is personal, binding, irreversible. The signature makes it a legal document, a bond. This is not a suggestion; it is a guarantee. Paul stakes his own standing, his own name, his own reputation on Onesimus&apos; redemption.',
        },
        {
          kind: 'christ',
          id: 'phlm1-christ-imputation',
          title: 'Christ Connection — The Doctrine of Imputation Enacted Personally',
          html:
            'Paul&apos;s words here are the gospel doctrine of imputation made tangible. Our sin is placed on Christ&apos;s account. His righteousness is placed on ours. Paul writes to Philemon: "If he hath wronged thee, put that on mine account." This is not metaphor; this is Paul living out the logic of Christ&apos;s substitution. Christ did this for all of us: took our debt, paid our liability, put Himself between us and the judgment we deserve. Paul shows what that looks like when one believer does it for another.',
        },
        {
          kind: 'carry',
          html:
            'The gospel is not only something Christ did two thousand years ago. It is something you are called to enact in your own relationships. When someone wrongs you, you have a choice: demand payment, or absorb the cost yourself. When you choose the latter, you are living the gospel. You are showing what Christ did for you—taking the debt, paying the price, bearing the loss so that reconciliation becomes possible.',
        },
        {
          kind: 'reflection',
          id: 'phlm1-debt',
          prompt:
            'Is there a debt you are owed that you could absorb instead? What would it cost you? What might it make possible?',
        },
      ],
    },

    /* ─── Philemon 20–22 — "Refresh My Bowels in the Lord" ────────── */
    {
      ref: 'Philemon 20–22',
      title: 'Refresh My Bowels in the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 20,
              spans: [
                t('Yea, brother, let me have '),
                hp('joy of thee in the Lord', 'phlm-joy'),
                t(': refresh my bowels in the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm-joy',
          html:
            'Paul does not ask for obedience. He asks for joy. For the joy of seeing the gospel work in Philemon&apos;s choice, in his transformation of heart. This is what the gospel produces: not compliance but joy, not fear but gladness.',
        },
        {
          kind: 'greek',
          id: 'phlm-anapsuxis',
          title: 'Anapsuxis — Refreshment, Relief, Revival',
          script: 'ἀναψύξις',
          translit: '<strong>anapsuxis</strong> · refreshment; to catch one&apos;s breath; revival',
          description:
            'To refresh is literally to cool, to give relief as in the heat of the day. Paul is imprisoned and weary. He asks Philemon: let me know that the gospel works. Let me see you choose love over power. Let my heart be revived by the news of your generosity.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 21,
              spans: [
                t('Having confidence in thy obedience I wrote unto thee, knowing that thou wilt also '),
                hg('do more than I say', 'phlm-more-than'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm-more-than',
          html:
            'Paul has not asked for Onesimus&apos; freedom. He has asked for him to be received as a brother. But Paul trusts Philemon will go further. Love, once unleashed, goes further than what was asked. When the heart is changed, obedience becomes generosity. The minimum becomes the starting point.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 22,
              spans: [
                t('But withal prepare me also a lodging: for I trust that through your prayers I '),
                hp('shall be given unto you', 'phlm-given'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm-given',
          html:
            'Paul ends the personal appeal with a tender gesture: prepare a room for me. He is saying, I will come to visit you. I will see with my own eyes that Onesimus has been received as a brother. I will drink the cup of your love. The letter is a seed; Paul&apos;s visit will be the harvest. And through their prayers, Paul trusts he will be released from prison. Their faith will move mountains—or at least move Roman magistrates.',
        },
        {
          kind: 'carry',
          html:
            'Paul does not demand Philemon obey. He trusts him. He expresses confidence in him. He tells him: I know you will do even more than I ask. This is the power of faith in another person—the refusal to assume the worst, the choice to call forth the best. How you address someone shapes how they respond. Demand obedience, and you may get compliance and resentment. Trust them to be better than the minimum, and you invite them to become it.',
        },
        {
          kind: 'reflection',
          id: 'phlm1-trust',
          prompt:
            'Who is someone you have underestimated? How might your trust in them shape what they become?',
        },
      ],
    },

    /* ─── Philemon 23–25 — Salutations and Grace ──────────────────── */
    {
      ref: 'Philemon 23–25',
      title: 'Grace Be With You All',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 23,
              spans: [
                t('There salute thee '),
                hg('Epaphras', 'phlm-epaphras'),
                t(', my fellowprisoner in Christ Jesus;'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Marcus, Aristarchus, Demas, Lucas, my fellowlabourer.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('The grace of our Lord Jesus Christ be with your spirit. Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm-epaphras',
          html:
            'Paul names his companions. They are all with him in prison or labor. These are not great names in church history—we know almost nothing of Epaphras outside of Paul&apos;s letters. But they are known to God. They are loved by Paul. They are, like Onesimus, names written in the Lamb&apos;s Book of Life. This letter ends not with power but with community. Not with Paul alone, but Paul surrounded by those who share his burden.',
        },
        {
          kind: 'carry',
          html:
            'The letter began with grace and ends with grace. This is the frame of the entire gospel: grace at the beginning, grace at the end, grace sufficient for all that lies between. Philemon is asked to give grace to Onesimus. Paul gives grace to Philemon. Christ gives grace to them all. The letter is a three-way transaction of grace, moving in all directions, binding all parties into one body.',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'For love&apos;s sake I rather beseech thee. Not now as a servant, but above a servant, a brother beloved. If he hath wronged thee, put that on mine account; I Paul have written it with mine own hand, I will repay it.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Philemon 1 · Study Guide',
  },

  hasHebrew: false,
};
