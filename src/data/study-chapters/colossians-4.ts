import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Colossians 4 — Masters, Servants, Prayer, Witness, and a Prison Fellowship
 *
 * Paul closes his letter with a turn from household codes to the life of prayer
 * and witness. He calls the church to "continue in prayer" and "walk in wisdom
 * toward them that are without." And then, unexpectedly warmly, he names—one
 * by one—his brothers and sisters laboring with him. Tychicus, Onesimus,
 * Aristarchus, Marcus, Jesus called Justus, Epaphras, Luke, Demas. Even in
 * prison, Paul&apos;s world is full of co-laborers and love.
 */
export const COLOSSIANS_4: RichChapterContent = {
  bookSlug: 'colossians',
  bookName: 'Colossians',
  chapter: 4,

  estimatedMinutes: { beginner: 7, intermediate: 13, deep: 19 },
  intros: [
    'Colossians 4 closes Paul&apos;s letter to a congregation he has never met, yet loves deeply. After three chapters of teaching—Christ&apos;s supremacy, freedom in Him, and the household codes—Paul makes a turn. He calls the church to master and servant relationships that honor a Master in heaven, to prayer that never ceases, to witness that is graceful and wise.',
    'Then the chapter becomes unexpectedly tender. Paul is in prison, yet his heart is full of the names and work of those around him. Tychicus will carry the letter. Onesimus will go with him—a formerly enslaved man now beloved brother. Aristarchus, Marcus, Jesus called Justus, all are there. Epaphras labors fervently in prayer. Luke the physician and Demas send greetings. Even in captivity, Paul&apos;s letters close not with lament but with a roll call of love.',
  ],

  bottomShare: {
    label: 'Share Colossians 4',
    quote:
      'Masters, give unto your servants that which is just and equal. Continue in prayer, and watch in the same with thanksgiving. Walk in wisdom toward them that are without, redeeming the time. Let your speech be always with grace, seasoned with salt. Remember my bonds. Grace be with you. Amen.',
    snippet: 'The closing chapter from a chapter-by-chapter study guide at Learn of Christ.',
    ref: 'Colossians 4 · Study Guide',
  },

  sections: [
    /* ─── Colossians 4:1 — The Heavenly Master ──────────────────────────── */
    {
      ref: 'Colossians 4:1',
      title: 'Masters and the Heavenly Master',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              1,
              t('Masters, give unto your servants that which is '),
              hy('just and equal', 'c4-just-equal'),
              t('; knowing that ye also have a '),
              hp('Master in heaven', 'c4-heavenly-master'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c4-just-equal',
          html:
            'Paul does not abolish slavery here; he transforms the relationship from within. Masters are called to justice and fairness—radical words in a world where masters held absolute power. "Just" (<em>dikaios</em>) means righteous, fitting, fair. "Equal" (<em>isos</em>) means equal worth, equal dignity. A master who remembers he is also a servant has nothing left to prove by cruelty.',
        },
        {
          kind: 'christ',
          id: 'c4-heavenly-master',
          title: 'Christ Connection — The Master Above All Masters',
          html:
            'Ephesians 6:9 makes this explicit: "Ye masters, do the same things unto them [servants], forbearing threatening: knowing that your Master also is in heaven; neither is there respect of persons with him." Every earthly relationship of authority stands under the judgment of the heavenly Master. Christ has not authorized cruelty; He has authorized service. The master is not serving the servant—but both are serving Christ.',
        },
        {
          kind: 'carry',
          html:
            'Wherever you have power—in a workplace, a home, a classroom—you are being watched by your Master in heaven. This is not meant to oppress you; it is meant to liberate you from the need to hoard power or prove yourself through it. You can be fair because you don&apos;t have to be superior. You can be kind because your standing does not depend on anyone&apos;s fear.',
        },
        {
          kind: 'reflection',
          id: 'c4-masters',
          prompt:
            'Where do you have authority—even small authority—over others? How would fairness and justice look if you truly remembered a Master above?',
        },
      ],
    },

    /* ─── Colossians 4:2–3 — Continue in Prayer ──────────────────────────── */
    {
      ref: 'Colossians 4:2–3',
      title: 'Continue in Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              2,
              t('Continue in prayer, and '),
              hy('watch in the same', 'c4-watch'),
              t(' with '),
              hp('thanksgiving', 'c4-thanksgiving'),
              t(';')
            ),
            verse(
              3,
              t('Withal praying also for us, that God would '),
              hg('open unto us a door of utterance', 'c4-door'),
              t(', to speak the mystery of Christ, for which I am also in bonds.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'c4-proskartereuo',
          title: 'Proskartereō — "Continue" or "Persevere"',
          script: 'προσκαρτερέω',
          translit: '<strong>proskartereō</strong> · to persist, be devoted to, hold fast',
          description:
            'Not a casual prayer before bed, but a committed devotion. The word implies steadiness, constancy, the kind of attention an athlete gives to training. Prayer is not optional extras; it is the central discipline of the Christian life.',
        },
        {
          kind: 'commentary',
          id: 'c4-watch',
          html:
            'To "watch in the same" (<em>grēgoreō</em>) means to stay alert, awake, vigilant. Prayer is not half-awake; it is eyes-open communion with God. Thanksgiving sharpens that alertness because gratitude requires you to notice what God has done.',
        },
        {
          kind: 'commentary',
          id: 'c4-thanksgiving',
          html:
            'Thanksgiving is not a mood Paul adds to prayer; it is the very substance of it. A praying heart that does not give thanks is trying to negotiate with God, not commune with Him. Gratitude says: "I see what You have done. I trust You with what comes next."',
        },
        {
          kind: 'commentary',
          id: 'c4-door',
          html:
            'Paul is in prison, yet he prays for an open door—a divine opportunity to speak. He does not pray for release or comfort; he prays for utterance, for the chance to testify to "the mystery of Christ." His concern is not his own freedom but the gospel&apos;s progress.',
        },
        {
          kind: 'carry',
          html:
            'Prayer is not escape from the world; it is alignment with God&apos;s purposes in the world. When you pray, you are not waiting passively; you are standing ready for the doors God opens. And notice: Paul asks others to pray for him, not out of despair but out of partnership. He invites the Colossians into his mission.',
        },
        {
          kind: 'reflection',
          id: 'c4-prayer',
          prompt:
            'What would it look like to continue in prayer—not as a quick habit, but as a devoted watch? What door might God be preparing to open in your life?',
        },
      ],
    },

    /* ─── Colossians 4:5–6 — Walk in Wisdom; Speech with Grace ──────────── */
    {
      ref: 'Colossians 4:5–6',
      title: 'Walk in Wisdom Toward Those Without',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              5,
              t('Walk in '),
              hg('wisdom toward them that are without', 'c4-wisdom'),
              t(', '),
              t('redeeming the time'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c4-wisdom',
          html:
            'Believers live in two worlds simultaneously: the world of those inside the faith and the world of those without. Toward those outside, "wisdom" means thinking carefully about what they see in you, what you communicate by your life. It means not being self-righteous, not being quarrelsome, not being naive about human nature. It means being shrewd, thoughtful, winsome.',
        },
        {
          kind: 'greek',
          id: 'c4-exagorazo',
          title: 'Exagorazō — "Redeeming" or "Buying Up"',
          script: 'ἐξαγοράζω',
          translit: '<strong>exagorazō</strong> · to buy up, purchase, make full use of',
          description:
            'The word is mercantile—imagine a merchant buying up all the bolts of cloth from the loom before anyone else has a chance. Applied to time, it means seizing every moment, making full use of the opportunities before you to witness, to serve, to point toward Christ. Time is not infinite; it must be actively redeemed.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              6,
              t('Let your '),
              hp('speech be alway with grace', 'c4-grace-speech'),
              t(', seasoned with '),
              t('salt'),
              t(', that ye may know how ye ought to answer every man.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c4-grace-speech',
          html:
            'Grace (<em>charis</em>) in speech means kindness, generosity of tone, a willingness to see the best in your listener. It means not being sharp, not being superior, not being contemptuous. Every word is an invitation, not a judgment. Your speech should make faith look attractive.',
        },
        {
          kind: 'christ',
          id: 'c4-salt-connection',
          title: 'Christ Connection — Salt of the Earth',
          html:
            'Jesus told His disciples: "Ye are the salt of the earth: but if the salt have lost his savour, wherewith shall it be salted?" (Matt. 5:13). Salt preserves—it keeps meat from rotting. Salt also flavors—it makes food worth eating. Your presence in a conversation, in a workplace, in a neighborhood, should preserve truth and make faith attractive. When your speech is graceful and seasoned with salt, you are fulfilling that calling.',
        },
        {
          kind: 'carry',
          html:
            'You do not need to have all the answers. The phrase "ye may know how ye ought to answer every man" does not mean you become a walking encyclopedia. It means you learn to listen, to understand what a person is really asking, and then to answer with grace. Winsome answers are prepared by a winsome life.',
        },
        {
          kind: 'reflection',
          id: 'c4-speech',
          prompt:
            'Where do you spend time with people outside the faith? How is your speech seasoned—with salt, or with something else? What would it look like to answer with grace this week?',
        },
      ],
    },

    /* ─── Colossians 4:7–9 — Tychicus and Onesimus Sent ────────────────── */
    {
      ref: 'Colossians 4:7–9',
      title: 'Tychicus and Onesimus Sent',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              7,
              t('All my state shall '),
              hg('Tychicus', 'c4-tychicus'),
              t(' declare unto you, who is a beloved brother, and a faithful minister and fellowservant in the Lord:')
            ),
            verse(
              8,
              t('Whom I have sent unto you for the same purpose, that he might know your state, and comfort your hearts;')
            ),
            verse(
              9,
              t('With '),
              hy('Onesimus', 'c4-onesimus'),
              t(', a '),
              hp('faithful and beloved brother', 'c4-onesimus-faith'),
              t(', who is one of you. They shall make known unto you all things which are done here.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c4-tychicus',
          html:
            'Tychicus is Paul&apos;s emissary, the one who will carry this letter to Colossae and report back on the church&apos;s state. He is called "beloved" and "faithful"—words Paul reserves for those of deepest trust. Even in prison, Paul is not isolated; his world is full of co-laborers who love the gospel and love the churches.',
        },
        {
          kind: 'commentary',
          id: 'c4-onesimus',
          html:
            'The book of Philemon tells us who Onesimus is: a formerly enslaved person who has fled to Paul in Rome and become a Christian. He is now being sent back to Philemon—not in chains, but as a brother. This is the scandal and the gospel: a runaway slave becoming a faithful brother in Christ. His inclusion in this greeting is Paul&apos;s way of saying: "He is one of you. Welcome him as you would welcome me."',
        },
        {
          kind: 'christ',
          id: 'c4-onesimus-faith',
          title: 'Christ Connection — The Gospel Breaks Every Chain',
          html:
            'Paul does not argue for the abolition of slavery—that was not his immediate strategy. Instead, he writes a letter that makes slavery impossible to sustain among Christians. If a master knows that his enslaved servant is now his brother in Christ, if he reads that Onesimus is "beloved" and "faithful," can he still treat him as property? The gospel&apos;s power is in redefining relationships so thoroughly that the old ones cannot survive.',
        },
        {
          kind: 'carry',
          html:
            'Paul is doing something remarkable here: he is affirming community even across the prison walls. Tychicus and Onesimus will carry Paul&apos;s heart to Colossae, and their very journey is a message—that even in captivity, Paul&apos;s world is alive with love and partnership. You are never truly alone if you are in Christ.',
        },
        {
          kind: 'reflection',
          id: 'c4-tychicus-reflect',
          prompt:
            'Who are the Tychicuses and Onesimuses in your life—the ones who carry your love to others? How are you affirming the unity that Christ makes possible?',
        },
      ],
    },

    /* ─── Colossians 4:10–11 — Aristarchus, Marcus, Jesus called Justus ──── */
    {
      ref: 'Colossians 4:10–11',
      title: 'Aristarchus, Marcus, and Jesus Called Justus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              10,
              t('Aristarchus my fellowprisoner saluteth you, and Marcus, '),
              hg('sister&apos;s son to Barnabas', 'c4-marcus'),
              t(' (touching whom ye received commandments: if he come unto you, receive him;)')
            ),
            verse(
              11,
              t('And Jesus, which is called '),
              hy('Justus', 'c4-justus'),
              t(', who are of the circumcision. These only are my fellowworkers unto the kingdom of God, which have been a comfort unto me.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c4-marcus',
          html:
            'Marcus is John Mark, Barnabas&apos;s cousin—the young man who abandoned Paul and Barnabas on their first missionary journey (Acts 13:13). The failure caused such tension that Paul and Barnabas parted ways (Acts 15:37–39). And yet here, years later, Paul is commending him to the Colossians: "If he come unto you, receive him." This is a word of restoration. Mark has been restored to usefulness.',
        },
        {
          kind: 'commentary',
          id: 'c4-justus',
          html:
            'Jesus called Justus is almost unknown to us—a brief mention here, and nowhere else in Scripture. Yet Paul knows him. He is a laborer, a comfort, a faithful co-worker. Paul&apos;s letters do not only name the famous or the spectacular; they name the faithful quietly working in the margins.',
        },
        {
          kind: 'commentary',
          id: 'c4-circumcision',
          html:
            'The phrase "of the circumcision" likely means these are Jewish believers—possibly the only Jewish co-workers with Paul, or at least the ones who stayed faithful during this imprisonment. They are a comfort to him. Loneliness is eased not by the absence of difficulty, but by the presence of faithful friends.',
        },
        {
          kind: 'carry',
          html:
            'Notice how Paul affirms people. He does not say "Marcus failed once; don&apos;t trust him." He says "receive him." He does not forget that Jesus called Justus is barely known; he calls him a fellow-worker and a comfort. You are not measured by your prominence but by your faithfulness. And your faithfulness matters to people you may never think notice you.',
        },
        {
          kind: 'reflection',
          id: 'c4-marcus-reflect',
          prompt:
            'Have you ever failed and been restored? Or watched someone else be restored? What does it feel like when someone affirms you quietly, without fanfare?',
        },
      ],
    },

    /* ─── Colossians 4:12–13 — Epaphras Laboring Fervently ──────────────── */
    {
      ref: 'Colossians 4:12–13',
      title: 'Epaphras: Prayer as Labor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              12,
              t('Epaphras, who is one of you, a servant of Christ, saluteth you, always '),
              t('labouring fervently for you in prayers'),
              t(', that ye may '),
              hp('stand perfect and complete in all the will of God', 'c4-perfect-will'),
              t(';')
            ),
            verse(
              13,
              t('For I bear him record, that he hath a great zeal for you, and them that are in Laodicea, and them in Hierapolis.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'c4-agonizo',
          title: 'Agōnizomai — "Labour Fervently" or "Struggle"',
          script: 'ἀγωνίζομαι',
          translit: '<strong>agōnizomai</strong> · to struggle, strive, contend; athletic exertion',
          description:
            'Prayer is not passive meditation for Paul; it is work, effort, struggle. Epaphras is "agonizing" in prayer—the same word used for athletic competition. He is expending energy, intensity, persistent effort on behalf of the churches. His prayer is his work.',
        },
        {
          kind: 'christ',
          id: 'c4-perfect-will',
          title: 'Christ Connection — Christ&apos;s Intercession',
          html:
            'Epaphras prays that the Colossians "stand perfect and complete in all the will of God." This echoes Christ&apos;s own intercession in John 17, where He prays for His disciples: "I pray not that thou shouldest take them out of the world, but that thou shouldest keep them from the evil... Sanctify them through thy truth." Epaphras is participating in the same intercession—standing with Christ in prayer for the perfection and completion of the saints.',
        },
        {
          kind: 'commentary',
          id: 'c4-zeal',
          html:
            'Epaphras is probably the one who founded the church at Colossae (Colossians 1:7). He carries a pastor&apos;s zeal for his flock—not just in preaching or teaching, but in prayer. His labor in prayer is his pastoral work. The churches at Laodicea and Hierapolis are also on his heart. He is a small-town pastor, yet his intercession reaches wide.',
        },
        {
          kind: 'carry',
          html:
            'Intercession is not easier than ministry; it is the deepest part of ministry. When you pray for someone&apos;s growth, you are agonizing—not physically, but spiritually. You are wrestling with God on their behalf, asking for their perfection and completion in Christ. This is labor, and it matters.',
        },
        {
          kind: 'reflection',
          id: 'c4-epaphras-reflect',
          prompt:
            'Who are you praying for fervently—laboring in prayer for their growth in God? What might it look like to "agonize" in intercession this week?',
        },
      ],
    },

    /* ─── Colossians 4:14 — Luke and Demas ───────────────────────────────── */
    {
      ref: 'Colossians 4:14',
      title: 'Luke the Beloved Physician and Demas',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              14,
              t('Luke, the beloved physician, and Demas, greet you.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c4-luke',
          html:
            'Luke is Paul&apos;s physician—a detail that says much about early Christian community. Paul had a doctor traveling with him. Luke is also the author of the Gospel of Luke and the Acts of the Apostles. In Paul&apos;s circle, he is "beloved"—not for his famous writings (which may not be written yet), but for his faithful presence as healer and companion. His love for Christ is expressed through his care for Paul&apos;s body.',
        },
        {
          kind: 'commentary',
          id: 'c4-demas',
          html:
            'Demas appears here and nowhere else in Paul&apos;s letters at this moment. Later, Paul will say of him: "Demas hath forsaken me, having loved this present world" (2 Timothy 4:10). But here, in prison, Demas is still with Paul. He will not always remain faithful, but now he sends greetings. This is a sober reminder: faithfulness in the present is all we can know.',
        },
        {
          kind: 'carry',
          html:
            'You do not need to be famous or powerful to be beloved in the eyes of God. Luke is "the beloved physician"—beloved for showing up, for caring for a prisoner&apos;s body, for being present. That is enough. That is everything.',
        },
        {
          kind: 'reflection',
          id: 'c4-luke-reflect',
          prompt:
            'How are you beloved by the people around you? Are you known for your faithful presence, your care, your steadiness? What might that look like in your own circle?',
        },
      ],
    },

    /* ─── Colossians 4:15 — Salute the Churches ──────────────────────────── */
    {
      ref: 'Colossians 4:15',
      title: 'Salute the Brethren; Nymphas and Her House Church',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              15,
              t('Salute the brethren which are in Laodicea, and Nymphas, and the church which is in his house.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c4-nymphas',
          html:
            'Nymphas (or Nympha—the name could be male or female, and the manuscripts vary) opens her or his home to the church. House churches were the normal Christian gathering in the first century—no buildings, no denominations, just believers gathered around a table in a home. Nymphas is probably a person of some means, since large homes were expensive. She or he is using that wealth for the kingdom.',
        },
        {
          kind: 'carry',
          html:
            'The early church did not build synagogues or temples; they met in homes. Nymphas&apos;s hospitality was itself a form of ministry. In a small way, she made Jesus&apos;s words come true: "Where two or three are gathered together in my name, there am I in the midst of them." Your home, your table, your hospitality—these are spiritual gifts. They are the place where the church becomes real.',
        },
        {
          kind: 'reflection',
          id: 'c4-nymphas-reflect',
          prompt:
            'What does hospitality look like for you? How might your home, your table, or your gathering space become a place where the church is real?',
        },
      ],
    },

    /* ─── Colossians 4:16–17 — The Letter and Archippus ───────────────── */
    {
      ref: 'Colossians 4:16–17',
      title: 'Read This Letter; Archippus, Fulfill Your Ministry',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              16,
              t('And when this epistle is read among you, cause that it be read also in the church of the Laodiceans; and that ye likewise read the epistle from Laodicea.')
            ),
            verse(
              17,
              t('And say to '),
              hy('Archippus', 'c4-archippus'),
              t(', Take heed to the '),
              hg('ministry which thou hast received in the Lord', 'c4-ministry'),
              t(', that thou fulfil it.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c4-archippus',
          html:
            'Archippus is mentioned again in Philemon 2 as a "fellowsoldier." He is a leader in the Colossian church, yet Paul—a prisoner, an outsider to the community—addresses him with a gentle but direct charge: "Take heed to the ministry thou hast received." This is accountability without harshness. Paul does not say "your ministry is failing"; he says "you received it; fulfill it."',
        },
        {
          kind: 'commentary',
          id: 'c4-ministry',
          html:
            'The Greek word is <em>diakonia</em>—not necessarily a formal office, but a calling to serve. Archippus has been entrusted with this work by the Lord. That trust is not light. It requires him to be careful, attentive, faithful to the end.',
        },
        {
          kind: 'carry',
          html:
            'If you have been given a calling—in your church, your family, your work—you have been entrusted with it by the Lord. Paul&apos;s words to Archippus are words to you: "Take heed to the ministry which thou hast received. Fulfill it." Not perfectly. Not without stumbling. But faithfully. See it through.',
        },
        {
          kind: 'reflection',
          id: 'c4-archippus-reflect',
          prompt:
            'What ministry or calling have you received from the Lord? What would it look like to take heed to it this season and see it through?',
        },
      ],
    },

    /* ─── Colossians 4:18 — Grace and Bonds ──────────────────────────────── */
    {
      ref: 'Colossians 4:18',
      title: 'The Salutation by Paul&apos;s Hand; Grace in Bonds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              18,
              t('The salutation by the hand of me Paul. '),
              hp('Remember my bonds', 'c4-bonds'),
              t('. Grace be with you. Amen.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c4-bonds',
          html:
            'Paul often dictated his letters to a scribe. Here, he takes the pen in his own hand—a personal gesture, a signature. And his final request is not "pray for my release" but "remember my bonds." Do not forget that I am in prison. Do not forget that following Christ may cost you freedom. And do not forget that grace meets you even there.',
        },
        {
          kind: 'carry',
          html:
            'Paul closes as he opens—with grace. Grace at the beginning of the letter (Colossians 1:2), grace at the end. In all things, through all circumstances, the presence of God&apos;s grace is the constant. You are not sustained by your strength or your circumstances; you are sustained by grace. That grace is enough.',
        },
        {
          kind: 'reflection',
          id: 'c4-grace-reflect',
          prompt:
            'What bonds—what constraints, what hardships—are you carrying? Can you believe that grace meets you there, just as it met Paul in prison?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'hals-scaife',
      kind: 'lexicon',
      source: 'Perseus Scaife',
      label: 'Halas (ἅλας) — Salt',
      url: 'https://scaife.perseus.org/lexica/lsj/ἅλας/',
      description: 'Salt as seasoning and preservative: speech seasoned with grace and salt (Colossians 4:6) brings flavor and preserves truth.',
    },
    {
      id: 'onesimus-philemon-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Onesimus (Colossians 4:9 ↔ Philemon)',
      url: 'https://intertextual.bible/text/colossians-4.9/',
      description: 'The runaway slave Onesimus, now beloved brother, sent with Tychicus—the letter to Philemon expands his story.',
    },
    {
      id: 'aristarchus-luke-companionship',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Paul&apos;s Co-Laborers (Aristarchus, Marcus, Luke)',
      url: 'https://www.bibleodyssey.org/dictionary/aristarchus/',
      description: 'Paul&apos;s circle of companions in prison and ministry—Aristarchus, Mark, Luke, and others who remained faithful.',
    },
  ],
};
