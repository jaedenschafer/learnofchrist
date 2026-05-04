import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Timothy 3 — Qualifications for Leadership in the Church
 *
 * Paul sets before Timothy the character standards for those who would lead:
 * a bishop, blameless and hospitable; a deacon, proven faithful and pure of
 * conscience. Leadership is not a position to grasp but a service to give,
 * and the church stakes its witness on the integrity of those who lead.
 *
 * The qualifications Paul lists are not abstract ideals but fruits—what a
 * transformed heart looks like when it shows itself in a household, a marriage,
 * daily discipline. The chapter closes with the mystery of godliness itself:
 * "God was manifest in the flesh, justified in the Spirit, received up into
 * glory"—Christ as the pattern for all leadership to follow.
 */
export const FIRST_TIMOTHY_3: RichChapterContent = {
  bookSlug: '1-timothy',
  bookName: '1 Timothy',
  chapter: 3,

  estimatedMinutes: { beginner: 9, intermediate: 17, deep: 23 },
  intros: [
    'Leadership in the church begins not with aspiration but with character. Paul does not ask "Who wants to lead?" but "Who has already been remade?" A bishop or deacon is not chosen for eloquence, wealth, or social standing, but for the fruit of a life submitted to Christ—faithfulness in marriage, wisdom in the home, sobriety of mind, a conscience unmarred by the pursuit of money or status.',
    'The pattern Paul lays out is remarkable for what it omits: no mention of formal education, oratorical gifts, or political connections. What remains is the fiber of a person shaped by grace—someone whose private life matches his public claim, whose household witnesses to the gospel before his words do, whose integrity is open to public scrutiny because it is real.',
  ],

  opener: {
    matchTitle: /elder|bishop|leadership/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── 1 Timothy 3:1 — The Desire ──────────────────────────────────── */
    {
      ref: '1 Timothy 3:1',
      title: 'A Trustworthy Saying',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              1,
              t('This is a '),
              hg('true saying', 'c-logon-pistos'),
              t(', If a man '),
              hg('desire the office of a bishop', 'c-bishop-office'),
              t(', '),
              hp('he desireth a good work', 'christ-good-work'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-logon-pistos',
          html:
            'Paul begins with a formula he uses elsewhere: "This is a trustworthy saying." It marks a word worth remembering, worth passing down. What follows is not optional advice but a reliable principle about the church&apos;s life. [res:perseus-episkopos]',
        },
        {
          kind: 'greek',
          id: 'greek-episkopos',
          title: 'Episkopos — "Bishop"',
          script: 'ἐπίσκοπος',
          translit: '<strong>episkopos</strong> · overseer; one who watches over',
          description:
            'Not a title of rank but a function: one appointed to oversee the flock, to tend it, to keep watch. In the early church the terms "elder," "overseer," and "shepherd" are often used interchangeably. The word carries no assumption of elaborate church structure—only the pastoral care of the gathered people of God.',
        },
        {
          kind: 'commentary',
          id: 'c-bishop-office',
          html:
            'Notice the order: first comes desire, then comes qualification. A man may long to lead—and Paul does not dismiss that longing as wrong. Desire for a good work is not sinful ambition but a stirring toward service. Yet desire without character is dangerous. Character must come first. [res:sefaria-1tim-3]',
        },
        {
          kind: 'christ',
          id: 'christ-good-work',
          title: 'Christ Connection — The Good Work',
          html:
            'Jesus Himself said, "I must work the works of him that sent me, while it is day" (John 9:4). Every good work flows from the Father. When a believer desires to lead, he is desiring to participate in Christ&apos;s own shepherding. The good work is always His work, carried in our weakness.',
        },
        {
          kind: 'carry',
          html:
            'Examine your own aspirations. What work do you desire? If it is work that serves others, that points to Christ, that requires you to be more faithful and more holy—that desire may be from God. But also ask: What character would I need to live out? And am I willing to be tested?',
        },
        {
          kind: 'reflection',
          id: 'beginning-desire',
          prompt: 'What good work are you drawn toward? What would it require of your character to do it well?',
        },
      ],
    },

    /* ─── 1 Timothy 3:2–3 — The Bishop's Character (Part 1) ────────────── */
    {
      ref: '1 Timothy 3:2–3',
      title: 'A Blameless Steward',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              2,
              t('A bishop then must be '),
              hy('blameless', 'greek-anegkletos'),
              t(', the '),
              hg('husband of one wife', 'c-one-wife'),
              t(', '),
              hg('vigilant', 'c-nephalios'),
              t(', '),
              hg('sober', 'c-sophron'),
              t(', of '),
              hg('good behaviour', 'c-kosmios'),
              t(', given to hospitality, apt to teach;')
            ),
            verse(
              3,
              t('Not given to wine, '),
              hg('no striker', 'c-striker'),
              t(', not greedy of filthy lucre; but patient, not a brawler, not covetous;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'greek-anegkletos',
          html:
            'Blameless does not mean sinless—Paul knew no human was sinless. It means irreproachable: a life so marked by integrity that no legitimate accusation can be brought against him. In a world where a leader&apos;s personal failure becomes the church&apos;s scandal, a bishop&apos;s integrity cannot be hidden. It is lived out in the open, where everyone can see.',
        },
        {
          kind: 'commentary',
          id: 'c-one-wife',
          html:
            'The phrase "husband of one wife" appears twice in the pastoral epistles (here and in verse 12, for deacons). The Greek is not ambiguous about gender—it specifies a man. Paul is prescribing leadership for men in the specific culture he addresses. This does not settle modern debates about women in church leadership; it describes what Paul saw necessary in his moment. What it does settle is this: fidelity in marriage is non-negotiable for a leader. A man cannot lead the church if he is unfaithful at home.',
        },
        {
          kind: 'greek',
          id: 'c-nephalios',
          title: 'Nephalios — "Vigilant"',
          script: 'νηφάλιος',
          translit: '<strong>nephalios</strong> · clear-minded; free from addiction; temperate',
          description:
            'The word means more than mere sobriety (though that is part of it). It is clarity of mind, the opposite of the fog that comes from wine, drugs, or obsession. A leader must think straight.',
        },
        {
          kind: 'greek',
          id: 'c-sophron',
          title: 'Sophron — "Sober"',
          script: 'σώφρων',
          translit: '<strong>sophron</strong> · prudent; self-controlled; of sound mind',
          description:
            'This word implies self-mastery—not harshness toward oneself, but the kind of discipline that allows a person to say no to impulse and yes to what is true. A bishop must have command over his own appetites and desires.',
        },
        {
          kind: 'commentary',
          id: 'c-kosmios',
          html:
            'Kosmios, "of good behaviour," comes from the same root as kosmos, the ordered world. A leader&apos;s life should be orderly, respectable, showing the fruit of self-discipline. This is not about wealth or appearance; it is about the visible evidence of a life arranged around what matters.',
        },
        {
          kind: 'commentary',
          id: 'c-striker',
          html:
            '"No striker"—one who does not resort to violence or harsh words. A leader must have learned to master anger. He must be able to speak truth without clubbing people with it. Gentleness is not weakness; it is strength under control, like a powerful horse held to a soft walk by a gentle hand.',
        },
        {
          kind: 'christ',
          id: 'c-christ-gentle',
          title: 'Christ Connection — The Gentle Shepherd',
          html:
            '"He shall feed his flock like a shepherd… gently lead those that are with young" (Isa. 40:11). Jesus rebuked the disciples when they wanted to call fire from heaven (Luke 9:55). He answered Peter&apos;s violence at the arrest with a word of healing (Luke 22:51). A leader conformed to Christ must learn the strength of gentleness.',
        },
        {
          kind: 'carry',
          html:
            'Whether you lead a household, a workplace team, or a congregation, Paul&apos;s list applies. Can you speak the truth without cruelty? Can you say no to impulse—to anger, to greed, to the desire to be right? Can people see in your daily life the visible fruit of a person at peace, not driven, not grasping? These are not distant ideals. They are the shape your day takes.',
        },
        {
          kind: 'reflection',
          id: 'character-part-1',
          prompt: 'Where do you see yourself in this list? Which quality do you have in abundance? Which one do you struggle toward most?',
        },
      ],
    },

    /* ─── 1 Timothy 3:4–5 — The Bishop's Household ────────────────────── */
    {
      ref: '1 Timothy 3:4–5',
      title: 'Ruling His Own House',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              4,
              t('One that '),
              hg('ruleth well his own house', 'c-house-rule'),
              t(', having '),
              hg('his children in subjection with all gravity', 'c-children'),
              t(';')
            ),
            verse(
              5,
              t('(For if a man '),
              hg('know not how to rule his own house', 'c-know-not'),
              t(', how shall he take care of the '),
              hp('church of God', 'christ-church-body'),
              t('?)')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-house-rule',
          html:
            'The proof is not in words but in the home. A man may speak eloquently about leadership, but what does his wife say? What do his children reveal about him? Do they feel safe? Do they respect him? A leader&apos;s fitness for public trust is first visible in private life. There are no exceptions to this principle.',
        },
        {
          kind: 'greek',
          id: 'greek-oikos',
          title: 'Oikos — "House"',
          script: 'οἶκος',
          translit: '<strong>oikos</strong> · household; family; domestic sphere',
          description:
            'Oikos includes not just the building but everyone in it—wife, children, servants. A man&apos;s stewardship of his household is the training ground for his stewardship of God&apos;s family, the church.',
        },
        {
          kind: 'commentary',
          id: 'c-children',
          html:
            '"Having his children in subjection with all gravity." The phrase means respect, not fear. The children submit because they recognize their father&apos;s authority as real—consistent, just, loving. Gravity here is dignity, the kind of presence that commands respect without shouting. When a child knows a parent will follow through, will be fair, and actually loves them, submission flows naturally.',
        },
        {
          kind: 'commentary',
          id: 'c-know-not',
          html:
            'Paul&apos;s logic is unbreakable: "If a man know not how to rule his own house, how shall he take care of the church of God?" The smaller sphere precedes the larger. You cannot be trusted with many until you have been faithful with the few. A leader who neglects his family to serve the church has gotten the order backwards.',
        },
        {
          kind: 'christ',
          id: 'christ-church-body',
          title: 'Christ Connection — The Household of God',
          html:
            'Paul elsewhere calls the church "the household of God" (1 Tim. 3:15) and describes believers as "members of the household of God, built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone" (Eph. 2:19–20). A bishop&apos;s household is meant to be a model of Christ&apos;s care for His family. If a man cannot love and lead his own wife and children, how can he shepherd the church, Christ&apos;s beloved?',
        },
        {
          kind: 'carry',
          html:
            'The truth Paul states is hard for leaders to hear: your spiritual authority is built or broken in your own home. The hours you pour into work, ministry, or ambition at the expense of your family do not magnify your leadership—they undermine it. If you have responsibility for others, especially for God&apos;s people, the first people who have a claim on your faithfulness are the ones who sleep under your roof.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'household',
          prompt: 'How would your family describe your leadership at home? What would they say you prioritize? What would they wish you valued more?',
        },
      ],
    },

    /* ─── 1 Timothy 3:6 — The Danger of Pride ────────────────────────── */
    {
      ref: '1 Timothy 3:6',
      title: 'Not a Novice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              6,
              t('Not a '),
              hg('novice', 'greek-neophutos'),
              t(', lest being '),
              hg('lifted up with pride', 'c-conceit'),
              t(' he fall into the '),
              hp('condemnation of the devil', 'christ-devil-fall'),
              t('.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-neophutos',
          title: 'Neophutos — "Novice"',
          script: 'νεόφυτος',
          translit: '<strong>neophutos</strong> · newly planted; a recent believer',
          description:
            'The word literally means "newly planted." Someone young in the faith lacks the seasoning that only time and trial can provide. Character is not built in a moment; it is tested and strengthened over years.',
        },
        {
          kind: 'commentary',
          id: 'c-conceit',
          html:
            'The danger Paul identifies is subtly precise: not that a new believer is weak, but that he may become puffed up, intoxicated by his own position, impressed with himself. Pride is the particular danger that comes when someone is given authority before he is ready. He mistakes the gifts God gave him for proof that he is special.',
        },
        {
          kind: 'commentary',
          id: 'c-condemnation-devil',
          html:
            'The phrase "condemnation of the devil" is striking. Paul is saying that the pattern of Satan&apos;s own fall is a warning here: Satan was lifted up with pride and fell. A leader who begins to love his own authority more than the people he leads is walking the same path the devil walked. He is no longer a servant. He has become his own idol.',
        },
        {
          kind: 'christ',
          id: 'christ-devil-fall',
          title: 'Christ Connection — The Opposite of the Devil',
          html:
            'If Satan&apos;s fall was the result of pride—desiring to exalt himself above God—Christ&apos;s way was the opposite. "He emptied himself, taking the form of a servant… and humbled himself, and became obedient unto death, even the death of the cross" (Phil. 2:7–8). A leader shaped by Christ does the reverse of what the devil did. He stoops rather than climbs.',
        },
        {
          kind: 'carry',
          html:
            'If you have been given any kind of authority—over a team, a household, a group—Paul&apos;s warning is for you. The first sign of spiritual danger is when you begin to believe your own importance. Watch for it. When you find yourself irritated if someone doesn&apos;t recognize your position, when you begin to measure yourself by the position rather than the character, when you serve the role instead of the people in it—that is the moment to kneel and remember that all you have was given to you by grace.',
        },
        {
          kind: 'reflection',
          id: 'pride',
          prompt: 'How much time have you spent in training, trial, and testing for the responsibilities you carry? What would it look like to ask for that kind of seasoning intentionally?',
        },
      ],
    },

    /* ─── 1 Timothy 3:7 — A Good Report ──────────────────────────────── */
    {
      ref: '1 Timothy 3:7',
      title: 'Good Report of Them Which Are Without',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              7,
              t('Moreover he must have a '),
              hy('good report of them which are without', 'c-outsiders'),
              t('; lest he fall into '),
              hg('reproach and the snare of the devil', 'c-snare'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-outsiders',
          html:
            '"Them which are without"—unbelievers, neighbors, people outside the church. Paul is saying that a church leader&apos;s integrity must be visible to those who do not share his faith. His reputation cannot be maintained by the church alone defending him. It must be built in the marketplace, in the neighborhood, where people who have no reason to be kind to him nonetheless respect him.',
        },
        {
          kind: 'commentary',
          id: 'c-snare',
          html:
            'When a leader loses the respect of those outside the church, he becomes vulnerable to reproach and accusation. He may find his past raked up, his motives questioned, his character attacked—and because his public life did not match his private claims, the attacks stick. He has laid a snare for himself.',
        },
        {
          kind: 'carry',
          html:
            'Your witness to Christ is not measured only by what other Christians say about you. It is measured by what your neighbors say. Do they trust you to keep your word? If you borrow something, do you return it in good condition? Do you pay your bills? When you say you will do something, do you do it? The unbeliever does not care about your theology. He cares whether you live what you profess. That is the reputation that matters.',
        },
        {
          kind: 'reflection',
          id: 'reputation',
          prompt: 'What would an unbeliever who knows you well say about your character? What would they say you actually value, based on how you spend your time and money?',
        },
      ],
    },

    /* ─── 1 Timothy 3:8–10 — The Deacons ───────────────────────────────── */
    {
      ref: '1 Timothy 3:8–10',
      title: 'The Qualifications of Deacons',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              8,
              t('Likewise must the deacons be '),
              hg('grave', 'greek-semnos'),
              t(', not '),
              hg('doubletongued', 'c-doubletongued'),
              t(', not given to much wine, not greedy of filthy lucre;')
            ),
            verse(
              9,
              t('Holding the '),
              hy('mystery of the faith', 'greek-mysterion'),
              t(' in a '),
              hg('pure conscience', 'c-pure-conscience'),
              t('.')
            ),
            verse(
              10,
              t('And let these also first be '),
              hg('proved', 'c-proved'),
              t('; then let them use the office of a deacon, being found blameless.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'greek-semnos',
          html:
            'Deacons are servants. The word "deacon" comes from diakonos, which means servant or minister. Yet Paul gives them almost the same qualifications as bishops. This is not because he is redundant; it is because the deacon&apos;s work is just as consequential. A deacon handles money, distributes aid, tends to widows and the poor. He must be incorruptible.',
        },
        {
          kind: 'greek',
          id: 'greek-diakonos',
          title: 'Diakonos — "Deacon"',
          script: 'διάκονος',
          translit: '<strong>diakonos</strong> · servant; minister; one who serves at table',
          description:
            'The deacon is the servant leader par excellence. He does not seek prominence but is nonetheless accountable for the care he gives. His service to the church is inseparable from his integrity.',
        },
        {
          kind: 'commentary',
          id: 'c-doubletongued',
          html:
            'A doubletongued person speaks one way in one setting and another way in another. He tells people what they want to hear. He cannot be trusted because you do not know which tongue he will use. A deacon must be truthful and consistent.',
        },
        {
          kind: 'greek',
          id: 'greek-mysterion',
          title: 'Mysterion — "Mystery"',
          script: 'μυστήριον',
          translit: '<strong>mysterion</strong> · secret; hidden truth; now revealed',
          description:
            'In the New Testament, mystery is not something unknowable but something now revealed—the hidden purposes of God made known in Christ. The deacon who holds the mystery of the faith does not hoard it or distort it. He guards it as a sacred trust.',
        },
        {
          kind: 'commentary',
          id: 'c-pure-conscience',
          html:
            'A pure conscience means a conscience not stained by hypocrisy. You cannot preach grace and practice theft. You cannot speak of Christ&apos;s love and nurse bitterness toward a brother. The deacon&apos;s conscience is his safeguard. When it is pure—unmarred by double-dealing—he is safe to serve.',
        },
        {
          kind: 'commentary',
          id: 'c-proved',
          html:
            '"Let these also first be proved." A person is tested before appointment. How does he serve when no one is watching? How does he treat the poor? If he is given a small responsibility, does he handle it faithfully? Only when proven does he move into the office of deacon. This prevents unsuitable people from being placed in positions of trust.',
        },
        {
          kind: 'christ',
          id: 'c-christ-servant-feet',
          title: 'Christ Connection — The Servant Master',
          html:
            'Jesus washed the disciples&apos; feet—the work of a deacon, the lowest servant. "If I then, your Lord and Master, have washed your feet; ye also ought to wash one another&apos;s feet" (John 13:14). Every deacon is called to that kind of humble, loving service. The office is not a step toward power. It is an invitation to give yourself away.',
        },
        {
          kind: 'carry',
          html:
            'Service done well is almost invisible. The poor are fed, the widow receives her aid, the sick is visited—and no one applauds. Yet Paul tells deacons that such work "purchases a good degree" (verse 13). It builds standing with God and with His people. If you do work that no one sees, that no one thanks you for—take heart. Nothing is hidden from God.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'deacon-serve',
          prompt: 'What is one area of humble service that you could embrace more fully? What would it cost you? What might it gain you?',
        },
      ],
    },

    /* ─── 1 Timothy 3:11 — The Deacons' Wives ────────────────────────── */
    {
      ref: '1 Timothy 3:11',
      title: 'Even So Must Their Wives Be',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              11,
              t('Even so must their wives be '),
              hg('grave', 'c-wives-grave'),
              t(', not '),
              hg('slanderers', 'c-slanderers'),
              t(', sober, faithful in all things.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wives-grave',
          html:
            'Paul gives one verse to the wives of deacons. Some scholars debate whether he means deacons&apos; wives or deaconesses—an ancient church office for women. The text, as it stands, addresses the wives. And it places them under the same scrutiny as the deacons themselves. A woman whose husband serves the church has a responsibility of her own. She is not merely his companion but a partner in his service.',
        },
        {
          kind: 'commentary',
          id: 'c-slanderers',
          html:
            '"Not slanderers." The gossip that flows from a woman trusted in the church can damage reputations, divide families, and weaken unity. A deacon&apos;s wife must be someone whose words can be trusted, whose loyalty is not for sale, whose tongue does not betray confidence.',
        },
        {
          kind: 'carry',
          html:
            'If you are partnered with someone in service—whether in a formal role or simply in the daily work of faith—you share responsibility for how that service is carried out. Your words matter. Your loyalty matters. Your faithfulness in small things matters. You are not invisible, even if you are behind the scenes.',
        },
        {
          kind: 'reflection',
          id: 'wives-faithful',
          prompt: 'How do you use your influence as a partner, family member, or friend? Are you building up or tearing down? Are you loyal or scattered?',
        },
      ],
    },

    /* ─── 1 Timothy 3:12–13 — A Good Degree ────────────────────────── */
    {
      ref: '1 Timothy 3:12–13',
      title: 'The Reward of Faithful Service',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              12,
              t('Let the deacons be the husbands of one wife, ruling their children and their own houses well.')
            ),
            verse(
              13,
              t('For they that have used the office of a deacon well purchase to themselves a '),
              hg('good degree', 'c-good-degree'),
              t(', and great boldness in the faith which is in Christ Jesus.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-good-degree',
          html:
            'The Greek word for "degree" is bathos, which can mean standing, rank, or position. Paul is saying that faithful service—unseen, often unrewarded in earthly terms—produces something precious: a standing before God and His people, earned through faithful work. The deacon who serves faithfully becomes a person of authority and respect, not through seeking it but through having earned it through service.',
        },
        {
          kind: 'commentary',
          id: 'c-boldness-faith',
          html:
            '"Great boldness in the faith." A person who has served faithfully, who has handled money with integrity, who has cared for the vulnerable without seeking recognition, develops confidence. He knows God sees him. He is not paralyzed by the fear of man because his eye is on God. That boldness—not arrogance but assurance—marks him as someone truly alive in faith.',
        },
        {
          kind: 'christ',
          id: 'c-christ-boldness',
          title: 'Christ Connection — Boldness in Christ',
          html:
            '&ldquo;Yet in all these things we are more than conquerors through him that loved us&rdquo; (Rom. 8:37). The boldness Paul speaks of is not self-confidence but Christ-confidence. A person who has given himself to faithful service in the church has learned that Christ is faithful. That knowledge makes him bold. He is not defended by his own strength; he is held by Christ&apos;s.',
        },
        {
          kind: 'carry',
          html:
            'You may serve in a role that no one celebrates. You may give yourself to work that is invisible, unremarked. Yet Paul is telling you that such faithfulness builds something in you that cannot be built any other way: a genuine authority, a real standing, a boldness born of knowing that God sees and that Christ is your strength. That is worth more than any earthly recognition.',
        },
        {
          kind: 'reflection',
          id: 'boldness',
          prompt: 'What would it mean for you to serve something beyond yourself with complete faithfulness, even if no one noticed? How might that change you?',
        },
      ],
    },

    /* ─── 1 Timothy 3:14–16 — The Mystery of Godliness ──────────────────── */
    {
      ref: '1 Timothy 3:14–16',
      title: 'The House of God, Pillar and Ground of the Truth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              14,
              t('These things write I unto thee, hoping to come unto thee shortly;')
            ),
            verse(
              15,
              t('But if I tarry long, that thou mayest know how thou '),
              hg('oughtest to behave thyself in the house of God', 'c-house-of-god'),
              t(', which is '),
              hp('the church of the living God', 'christ-church-living'),
              t(', the '),
              hp('pillar and ground of the truth', 'c-pillar-truth'),
              t('.')
            ),
            verse(
              16,
              t('And without controversy great is the '),
              hy('mystery of godliness', 'greek-eusebeia'),
              t(': '),
              hp('God was manifest in the flesh', 'christ-incarnation'),
              t(', justified in the Spirit, seen of angels, preached unto the Gentiles, believed on in the world, received up into glory.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-house-of-god',
          html:
            'Paul is writing to Timothy with instructions for how to behave "in the house of God." This is not about etiquette or protocol. It is about the character and conduct required of those who belong to God&apos;s family. The qualifications he has just laid out for bishops and deacons are not abstract principles; they are the shape of Christ in His people.',
        },
        {
          kind: 'commentary',
          id: 'christ-church-living',
          html:
            'The church is not a building or an organization. It is "the church of the living God"—the assembly of people where God&apos;s life is present and active. This is the body of Christ, which He has promised never to abandon. To belong to it is to be in the presence of the living God.',
        },
        {
          kind: 'commentary',
          id: 'c-pillar-truth',
          html:
            'A pillar supports a structure; the ground supports the foundation. Paul is saying that the church—not the pope, not a council, not the Bible alone (though it contains the Word), but the gathering of the people of God—is the guardian and bearer of truth in the world. The church&apos;s integrity, its unity, its faithfulness, are inseparable from its witness to truth.',
        },
        {
          kind: 'greek',
          id: 'greek-eusebeia',
          title: 'Eusebeia — "Godliness"',
          script: 'εὐσέβεια',
          translit: '<strong>eusebeia</strong> · reverence toward God; piety; devotion',
          description:
            'Eusebeia is not mere religious correctness. It is reverence that flows from knowing God and being shaped by that knowledge. The mystery of godliness is that God, who is invisible and infinite, has made Himself known in Christ.',
        },
        {
          kind: 'christ',
          id: 'christ-incarnation',
          title: 'Christ Connection — God Manifest in the Flesh',
          html:
            'Paul closes with what appears to be an early Christian hymn or creedal statement: "God was manifest in the flesh, justified in the Spirit, seen of angels, preached unto the Gentiles, believed on in the world, received up into glory." This is the whole gospel in miniature. The invisible God became visible. The Word became flesh. Jesus died and was justified by the Spirit in the resurrection. He was witnessed by the heavenly powers, proclaimed to all nations, believed on in the world, and exalted to heaven. This is the pattern that every believer, and especially every leader, is called to embody: a life that points to God&apos;s revelation in Christ.',
        },
        {
          kind: 'commentary',
          id: 'c-manifest',
          html:
            'When Paul says "God was manifest in the flesh," he is saying that the eternal, invisible God stepped into time and space, took a body, walked among us, suffered, died, rose, and ascended. He was seen by angels—the heavenly powers themselves witnessed His exaltation. He was preached to the Gentiles—to all nations, not just Israel. He was believed on in the world—people gave their lives to follow Him. He was received up into glory—seated at the right hand of God. This is not doctrine to debate. It is the central mystery, the truth that holds everything else in place. [res:bibleodyssey-episcopal]',
        },
        {
          kind: 'carry',
          html:
            'You are part of this mystery. The church you belong to, the character you are meant to cultivate, the service you are called to—all of it exists to proclaim and embody the truth that God became flesh, died, rose, and is alive today. Every act of integrity you choose, every moment you refuse to sell yourself out for money or status, every time you wash another person&apos;s feet in Christ&apos;s name—you are saying with your life what Paul says with his words: "Great is the mystery of godliness: God was manifest in the flesh, and we have seen His glory."',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'mystery-godliness',
          prompt: 'How does the mystery of godliness—God made manifest in flesh—change the way you see your own body, your daily choices, your community?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Timothy 3',
    quote: 'A bishop then must be blameless, the husband of one wife, vigilant, sober, of good behaviour, given to hospitality, apt to teach. One that ruleth well his own house, having his children in subjection with all gravity.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Timothy 3 · Study Guide',
  },

  resources: [
    {
      id: 'perseus-episkopos',
      kind: 'lexicon',
      source: 'Perseus Scaife',
      label: 'Episkopos — Bishop, Overseer',
      url: 'https://www.perseus.tufts.edu/hopper/resolveform?type=exact&lookup=episkopos&lang=greek',
      description: 'Greek lexicon entry for episkopos (bishop/overseer), tracing its evolution in church structure and leadership.',
    },
    {
      id: 'bibleodyssey-episcopal',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Church Leadership and Ministry',
      url: 'https://www.bibleodyssey.org/dictionary/bishop/',
      description: 'Overview of the bishop, deacon, and elder roles in early Christian communities.',
    },
  ],

  hasHebrew: false,
};
