import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Titus 1 — Authority, Character, and the War Against Deception
 *
 * Paul opens Titus with his own calling: servant of God, apostle of Jesus Christ,
 * herald of the faith that leads to godliness. He charges Titus to complete the
 * work in Crete—a place notorious for lying and chaos—by appointing elders of
 * unshakable character. An overseer must be blameless, faithful to one wife,
 * temperate, just, holy. He must hold fast sound doctrine and be able to refute
 * error. For false teachers swarm Crete, ruining whole households with deception.
 * Titus has authority to rebuke sharply. The church&apos;s very integrity hangs in
 * the balance.
 */
export const TITUS_1: RichChapterContent = {
  bookSlug: 'titus',
  bookName: 'Titus',
  chapter: 1,

  estimatedMinutes: { 5: 6, 10: 13, 15: 17 },
  intros: [
    'Crete had a reputation—and it was earned. A saying ran among the Greeks: "Cretans are always liars." It was a joke everywhere but in Crete, where Paul is sending Titus to finish what Paul started. The work is not ceremonies or nice words. It is urgent, spiritual surgery: appoint elders of such integrity they can hold back the tide of false teaching flooding the island.',
    'Watch how Paul opens the letter. He does not begin with problems. He begins with himself—who he is, whose he is, what he stands for. A servant of God. An apostle of Jesus Christ. A herald of a gospel that makes people godly, not just informed. In one breath, Paul gives Titus his own foundation. Then he turns to the work: apostolic authority to set things in order, godly character as the only defense against seduction, and permission to be sharp when gentleness would betray the flock.',
    'The chapter moves in three movements: Paul&apos;s calling (1–4), the character of an elder (5–9), and the urgency of refuting deceivers (10–16). Read it as a whole, and you see why Titus is not frantic. He moves with divine authority, clear vision, and a standard that cannot be bent.',
  ],

  opener: {
    matchTitle: /paul|letter|crete|elder/i,
    caption: 'Titus sent to Crete — to set in order and appoint leaders',
  },

  sections: [
    /* ─── Titus 1:1–4 — Paul's Identity and Authority ──────────────────── */
    {
      ref: 'Titus 1:1–4',
      title: 'Servant, Apostle, Herald of Godliness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              1,
              t('Paul, a '),
              hy('servant of God', 'greek-doulos'),
              t(', and an apostle of Jesus Christ, according to the '),
              hp('faith of God&apos;s elect', 'christ-election'),
              t(', and the '),
              hg('acknowledging of the truth which is after godliness', 'c-truth-godliness'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'greek-doulos',
          html:
            'Paul begins by naming himself <em>doulos</em>—servant. Not "leader" or "founder." Not even "apostle" first. <em>Servant</em> comes first. A servant owns nothing, makes no decisions alone, submits wholly to the will of his Master. This resets everything. Paul&apos;s authority is not self-derived. It flows from his utter dependence on God.',
        },
        {
          kind: 'greek',
          id: 'greek-doulos-full',
          title: 'Doulos — "Servant"',
          script: 'δοῦλος',
          translit: '<strong>doulos</strong> · slave; one wholly subject to another',
          description:
            'In the ancient world, slavery was about power structures. <em>Doulos</em> meant complete submission. Paul takes the word and makes it the highest honor. To be God&apos;s servant is not degradation; it is the truest freedom. It frees you from having to be your own god.',
        },
        {
          kind: 'christ',
          id: 'christ-election',
          title: 'Christ Connection — The Elect and God&apos;s Purpose',
          html:
            'Paul anchors his apostolic work in a doctrine that puzzles the modern reader: the faith of "God&apos;s elect." He means the faith that belongs to those God has chosen. But chosen when? Before the world began. Ephesians 1:4 tells us Christ saw us and loved us before the foundation of the world was laid. Your faith is not an accident. It rests on an election older than time. God was aiming at you before you ever turned to aim at Him.',
        },
        {
          kind: 'commentary',
          id: 'c-truth-godliness',
          html:
            'Notice the order: "the acknowledging of the truth which is <em>after</em> godliness." Not "the truth that makes you feel smart." Not "the truth that wins arguments." But truth that <em>leads to</em> godliness—that shapes how you live, the way you treat a friend, the way you hold yourself in anger. Gospel truth does something. It makes you holy.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              2,
              t('In hope of '),
              hp('eternal life, which God, that cannot lie, promised before the world began', 'c-promise-eternity'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-promise-eternity',
          html:
            'God "cannot lie." <em>Apseudēs</em>—a word almost untranslatable, meaning one whose very nature excludes falsehood. This is your anchor. In a world drowning in deception, your faith rests on a God who is constitutionally, eternally unable to deceive. The promise of eternal life was not an afterthought. It was made "before the world began." You are living in the fulfillment of a purpose older than time itself.',
        },
        {
          kind: 'greek',
          id: 'greek-apseudes',
          title: 'Apseudēs — "Cannot Lie"',
          script: 'ἀψευδής',
          translit: '<strong>apseudēs</strong> · incapable of falsehood; truthful by nature',
          description:
            'A negative prefix <em>a-</em> (not) joined to <em>pseudēs</em> (false). God is not merely unwilling to lie. He is ontologically incapable of it. Lying would be a contradiction of His being, like darkness emanating from light.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              3,
              t('But hath in due times '),
              hg('manifested his word through preaching', 'c-word-preaching'),
              t(', which is committed unto me according to the commandment of God our Saviour;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-word-preaching',
          html:
            'The promise made in eternity becomes flesh in "due times"—appointed moments, the fullness of time when God judges the hour is ripe. And how does God make the promise known? Through <em>preaching</em>. Not a book alone. Not a doctrine alone. But proclamation—a human mouth speaking truth to a human ear. God entrusts His Word to weaknesses like us.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              4,
              t('To Titus, mine own '),
              hp('son after the common faith', 'christ-family-faith'),
              t(': Grace, mercy, and peace, from God the Father and the Lord Jesus Christ our Saviour.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-titus-son',
          html:
            '"Mine own son after the common faith." Titus is not a junior subordinate. He is a spiritual son—someone who shares Paul&apos;s faith, his calling, his passion for truth. The church is God&apos;s family. Apprenticeship in that family runs through relationships like this one: an older man pouring himself into a younger, saying in effect, "Take what I have. Go further than I went."',
        },
        {
          kind: 'christ',
          id: 'christ-family-faith',
          title: 'Christ Connection — Redeemed into Family',
          html:
            'Titus becomes Paul&apos;s "son after the common faith"—the faith both share in Christ. This is adoption language. Ephesians 1:5 says God "predestinated us unto the adoption of children by Jesus Christ." Every believer enters a family older than blood. You have brothers and sisters you&apos;ve never met who belong to you. And the "Grace, mercy, and peace" Paul invokes flows from the Father and the Lord Jesus Christ—the Son named as Saviour in the greeting itself. Your peace is not your achievement. It comes from outside you, from Him.',
        },

        {
          kind: 'carry',
          html:
            'You might not be an apostle. You might not be training someone to plant churches. But you are a servant of God and a herald of truth. That word—<em>gospel</em>—was committed to you not as a burden but as a treasure. And the people around you, your coworkers, your family, your neighbors, are among "God&apos;s elect." You do not know all their names. But God does. And He is counting on you to carry His truth into the ordinary Tuesday of their lives.',
        },
        {
          kind: 'reflection',
          id: 'tit1-servant-herald',
          prompt:
            'How would your week change if you saw yourself first as a servant of God, and second as a herald of truth? Where is the Spirit nudging you to speak what you have been given?',
        },
      ],
    },

    /* ─── Titus 1:5–9 — Set in Order; Appoint Elders ──────────────────── */
    {
      ref: 'Titus 1:5–9',
      title: 'Set in Order—Appoint Elders of Unblamable Character',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              5,
              t('For this cause left I thee in Crete, that thou shouldest '),
              hg('set in order the things that are wanting', 'c-set-order'),
              t(', and ordain elders in every city, as I had appointed thee;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-set-order',
          html:
            'Paul did not finish. He left the work for Titus—a pattern we see throughout the New Testament. Authority in the church is not about control from the center. It is about apostles apprenticing leaders who will apprentice others. Titus inherits a partly-finished work and the authority to complete it. You have been left in a "Crete"—a place of disorder, deception, half-formed structures. You have authority to set things right.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              6,
              t('If any be '),
              hy('blameless', 'greek-anepileps'),
              t(', the husband of one wife, having faithful children '),
              hg('not accused of riot or unruly', 'c-children-faithful'),
              t(';')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-anepileps',
          title: 'Anepilēptos — "Blameless"',
          script: 'ἀνεπίληπτος',
          translit: '<strong>anepilēptos</strong> · not to be laid hold of; above reproach; blameless',
          description:
            'Not sinless—no human is. But not someone who can be caught in obvious contradiction between profession and practice. His life is defensible. When someone points a finger, others say: "No. You are wrong about him. I know his life." An elder&apos;s witness must be clean.',
        },
        {
          kind: 'commentary',
          id: 'c-children-faithful',
          html:
            'Notice: an elder&apos;s children must be "faithful" and "not unruly." Paul is saying something radical for the ancient world and ours: you cannot lead anyone else&apos;s family well if you have failed to lead your own. Leadership is not one thing in the pulpit and another at home. It is a coherence, a whole life testifying to the same truth.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              7,
              t('For a bishop must be '),
              hy('blameless, as the steward of God', 'greek-oikonomos'),
              t('; not selfwilled, '),
              hg('not soon angry', 'c-anger'),
              t(', not given to wine, no striker, not given to filthy lucre;')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-oikonomos',
          title: 'Oikonomos — "Steward"',
          script: 'οἰκονόμος',
          translit: '<strong>oikonomos</strong> · manager of a household; steward; one entrusted with another&apos;s goods',
          description:
            'Breaking it down: <em>oikos</em> = house, <em>nomos</em> = law or management. A steward owns nothing. He answers to the owner. His job is to manage the Master&apos;s household so that it flourishes according to the Master&apos;s will. Every elder is a <em>steward of God</em>. This reframes leadership entirely.',
        },
        {
          kind: 'commentary',
          id: 'c-anger',
          html:
            '"Not soon angry." The Greek is <em>aorgētos</em>—not quick to rage. An angry leader rules through fear, not love. An elder must have the emotional stability to hear hard things, to be contradicted, to make decisions under pressure without striking out. He is "not selfwilled"—not driven by ego. Not a person who needs to be right. He can be wrong, admit it, move on.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              8,
              t('But a lover of hospitality, '),
              hy('a lover of good men', 'c-lover-good'),
              t(', sober, just, holy, '),
              hg('temperate', 'c-temperate'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lover-good',
          html:
            '"A lover of good men." Not just hospitable to power, to the wealthy, to those useful to him. But someone who loves goodness in people—who delights in simple righteousness, in faithfulness, in humility. He creates an environment where truth can flourish because he loves truth in others.',
        },
        {
          kind: 'commentary',
          id: 'c-temperate',
          html:
            'The Greek word <em>enkratēs</em> means self-controlled, disciplined, one who holds himself in hand. An elder is not enslaved to appetite—food, wine, money, status, anger, lust. He is the steward of himself first, so he can be steward of others.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              9,
              t('Holding fast the '),
              hp('faithful word as he hath been taught', 'christ-word-faithful'),
              t(', that he may be able by '),
              hy('sound doctrine', 'c-doctrine'),
              t(' both to '),
              hg('exhort and to convince the gainsayers', 'c-exhort-convince'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-doctrine',
          html:
            'Sound doctrine means teaching that is whole, healthy, and complete—<em>hugiainō</em> in Greek, the root of our word "hygiene." Bad teaching is a disease. Sound teaching is health. An elder must know the faith well enough to feed the flock and repel wolves.',
        },
        {
          kind: 'greek',
          id: 'greek-didaktos',
          title: 'Didaktos — "Taught"',
          script: 'δίδακτος',
          translit: '<strong>didaktos</strong> · taught; instructed; one who has learned',
          description:
            'An elder is <em>didaktos</em>—not self-taught, but trained in sound doctrine. He has sat under teachers. He has been corrected. He knows the difference between his opinion and what Scripture says. This humbles a leader. It keeps him teachable.',
        },
        {
          kind: 'commentary',
          id: 'c-exhort-convince',
          html:
            'Two tasks: "exhort and convince the gainsayers." <em>Exhort</em> is to encourage, build up, strengthen the believers. <em>Convince</em> is to refute, to silence through clear argument those who contradict the truth. The elder must be both encourager and warrior.',
        },
        {
          kind: 'greek',
          id: 'greek-elegcho',
          title: 'Elegchō — "Convince" or "Refute"',
          script: 'ἐλέγχω',
          translit: '<strong>elegchō</strong> · to convict; to refute; to expose error',
          description:
            'More than argument—<em>elegchō</em> means to expose falsehood so thoroughly that the one making it sees their error. Not through force but through truth made clear. When an elder teaches sound doctrine publicly, gainsayers have nowhere to hide.',
        },
        {
          kind: 'christ',
          id: 'christ-word-faithful',
          title: 'Christ Connection — The Faithful Word and the True Steward',
          html:
            'An elder holds fast "the faithful word as he hath been taught"—the word of God, which cannot lie, which stands forever. In Hebrews 3:6, Jesus is called the faithful steward over God&apos;s house. Every elder on earth echoes that pattern: a steward of God&apos;s household, responsible for the flock, faithful to a Word that transcends him. The standard is high because the model is Christ Himself.',
        },

        {
          kind: 'carry',
          html:
            'You may never be nominated to a board or leadership position. But you are called to be a steward—of your marriage, your children, your work, your witness. Look at Paul&apos;s list: blameless, one-woman man or one-man woman, self-controlled, not angry, hospitable, a lover of good. This is not a portrait of perfection. It is a portrait of someone whose life is legible, whose words match their walk, who loves truth more than comfort. That is available to you today.',
        },
        {
          kind: 'reflection',
          id: 'tit1-steward-life',
          prompt:
            'Where are you a steward of God&apos;s work? Of what has someone entrusted you? Is your life above reproach in that stewardship, or are there hidden contradictions between what you claim and what you live?',
        },
      ],
    },

    /* ─── Titus 1:10–14 — Many Unruly; Few Sound ──────────────────────── */
    {
      ref: 'Titus 1:10–14',
      title: 'Many Unruly and Vain; False Teachers Must Be Stopped',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              10,
              t('For there are many '),
              hg('unruly and vain talkers and deceivers', 'c-false-teachers-many'),
              t(', specially they of the circumcision:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-false-teachers-many',
          html:
            '"Unruly"—<em>anupotaktos</em>, refusing to be subjected. "Vain talkers"—those who speak much but say little, empty sound, no substance. "Deceivers"—not mistaken but deliberately leading others astray. And they are not just a fringe. They are <em>many</em>. The church in Crete is swarming with them.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              11,
              t('Whose mouths must be stopped, who subvert whole houses, teaching things which they ought not, for filthy lucre&apos;s sake.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mouths-stopped',
          html:
            '"Whose mouths must be stopped." Not through violence. Through refutation. When their false teaching is exposed by sound doctrine clearly proclaimed, they lose their power to seduce. But notice: they are not motivated by theological confusion. They teach "for filthy lucre&apos;s sake"—for money. They are predators.',
        },
        {
          kind: 'greek',
          id: 'greek-stomatizo',
          title: 'Stomatizō — "Stop the Mouth"',
          script: 'στοματίζω',
          translit: '<strong>stomatizō</strong> · to muzzle; to silence',
          description:
            'Harsh word. But Paul is clear: deception that ruins families must be confronted. Not with rage but with clarity. The corrective to a lie is not avoidance. It is truth spoken plainly.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              13,
              t('This witness is true. '),
              hg('Wherefore rebuke them sharply', 'c-rebuke-sharply'),
              t(', that they may be '),
              hp('sound in the faith', 'christ-health-faith'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rebuke-sharply',
          html:
            'Paul is saying: the reputation of Cretans as liars is well-earned. That is your cultural context. In such a place, half-measures are useless. When you find false teaching, rebuke it <em>sharply</em>. Call it what it is. Do not soften the rebuke for politeness&apos; sake. A sick person needs medicine, not sugar.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              14,
              t('Not giving heed to Jewish fables, nor to commandments of men that turn from the truth.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fables-commandments',
          html:
            'The false teachers in Crete were peddling "Jewish fables"—made-up stories cloaked in biblical language. And "commandments of men that turn from the truth"—human rules dressed up as divine law. The flock must learn to discriminate: between tradition and Scripture, between human opinion and God&apos;s Word.',
        },
        {
          kind: 'christ',
          id: 'christ-health-faith',
          title: 'Christ Connection — Soundness and the Master Physician',
          html:
            'To be "sound in the faith" is to be healthy. The word is <em>hugiainō</em>—the same root as "hygiene." Jesus is called the physician. In Matthew 9, He says, "They that be whole need not a physician; but they that are sick." The whole point of the gospel is restoration—making us whole, healthy, able to flourish. Sharp rebuke that awakens someone to truth serves them better than gentle affirmation that leaves them dying.',
        },

        {
          kind: 'carry',
          html:
            'In a culture that prizes niceness above truth, Paul is radical. He is saying: some teachings are simply poison. Some voices are simply deceitful. To love your people means to protect them from those voices, even if that protection feels unkind to the person spreading the lies. Have you the courage to name error for what it is? Or do you let falsehood spread to avoid the discomfort of conflict?',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'tit1-false-teaching',
          prompt:
            'Where are you tempted to tolerate false teaching rather than address it? What would it cost to speak truth clearly? What would it cost not to?',
        },
      ],
    },

    /* ─── Titus 1:15–16 — The Defiled Mind ──────────────────────────── */
    {
      ref: 'Titus 1:15–16',
      title: 'The Pure See Purity; The Defiled See Defilement',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              15,
              t('Unto the '),
              hy('pure all things are pure', 'c-pure-see-pure'),
              t(': but unto them that are '),
              hg('defiled and unbelieving', 'c-defiled-mind'),
              t(', nothing is pure; but even their mind and conscience is defiled.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-pure-see-pure',
          html:
            'A pure conscience sees the world rightly. It sees God&apos;s provision as good, His law as life-giving, His creation as trustworthy. But a defiled conscience—one stained by unbelief and separated from God—sees poison everywhere. Everything is suspect. Everything is dangerous or impure. The problem is not the world. The problem is the eye looking at it.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              16,
              t('They '),
              hp('profess that they know God', 'christ-deny-works'),
              t('; but in works they deny him, being abominable, and disobedient, and unto every good work reprobate.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-defiled-mind',
          html:
            'A defiled mind not only sees wrongly. It is defiled itself. The conscience—the inner witness of right and wrong—is twisted. This is why theological error is so dangerous: it does not remain abstract. It warps the person from the inside out, making them incapable of seeing truth even when it stands plainly before them.',
        },
        {
          kind: 'commentary',
          id: 'c-abominable-works',
          html:
            'The final verdict is devastating: they call themselves believers, but their works deny Him. They are "abominable" in their conduct, "disobedient" to the Word of God, and "reprobate to every good work"—disqualified, failing every test of genuine faith. Paul is not being uncharitable. He is being accurate. False faith inevitably produces false fruit.',
        },
        {
          kind: 'christ',
          id: 'christ-deny-works',
          title: 'Christ Connection — Belief That Works',
          html:
            'Paul echoes what James says: "Faith without works is dead" (James 2:26). And what John says: "Whoever says, I know him, but keeps not his commandments, is a liar" (1 John 2:4). Jesus Himself judges not by profession but by fruit: "Ye shall know them by their fruits. Do men gather grapes of thorns, or figs of thistles?" (Matt. 7:16). A true knowledge of God transforms you from the inside out. If it doesn&apos;t change how you live, it is not knowledge of the true God.',
        },

        {
          kind: 'carry',
          html:
            'You cannot fake integrity. You cannot live one way and speak another without your conscience registering the lie. If you are fighting contradiction in yourself—claiming to follow Christ but disobeying Him in secret—the way forward is not to rationalize it. It is to come clean, to repent, to let Him remake you from the inside out. And if you see that contradiction in someone else, especially someone in a position of teaching or leadership, you have a duty to name it. False doctrine paired with false living is the deadliest combination in the church.',
        },
        {
          kind: 'reflection',
          id: 'tit1-fruit-works',
          prompt:
            'What does your fruit say about your faith? If someone knew you only by your actions, what would they believe about your allegiance to Christ? Where is there a gap between profession and practice?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Titus 1',
    quote:
      'Paul, a servant of God and an apostle of Jesus Christ. For this cause left I thee in Crete, that thou shouldest set in order the things that are wanting, and ordain elders in every city. For a bishop must be blameless, as the steward of God; not selfwilled, not soon angry, not given to wine; but a lover of hospitality, a lover of good men, sober, just, holy, temperate.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Titus 1 · Study Guide',
  },

  hasHebrew: false,
};
