import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Timothy 5 — The Household of Faith
 *
 * Paul instructs Timothy on how to treat different members of the church family—
 * elders, younger men, widows of various situations. The theme is relational
 * respect: rebuke not an elder harshly, but entreat him as a father; younger men
 * as brothers; elder women as mothers; younger women as sisters with purity.
 * The church, like any household, has its rhythms and its vulnerabilities.
 * Care for widows, honor for elders, and protection of reputations all flow from
 * recognizing one another as family. Paul closes with a charge before God and
 * Christ: observe these things with integrity.
 */
export const FIRST_TIMOTHY_5: RichChapterContent = {
  bookSlug: '1-timothy',
  bookName: '1 Timothy',
  chapter: 5,

  estimatedMinutes: { beginner: 9, intermediate: 17, deep: 25 },
  topicTags: ['leadership', 'faithfulness', 'witness', 'integrity'],
  opener: {
    topical: true,
    caption: '1 Timothy 5',
  },
  intros: [
    'In the ancient world, widows had few protections. No welfare systems, no pension. They depended on family or charity. The early church made care of widows a defining practice—an outward sign of inward gospel transformation. Yet Paul brings practical wisdom. Not every request for aid is legitimate. The church must be shrewd about its generosity, making sure resources reach those truly in need. This is not hardness. It is faithfulness.',
    'Paul also elevates the role of elders—those who govern the church and teach. They are worthy of honor and support. Yet standards matter. Not every elder deserves the same wage. Those who labor in preaching and doctrine deserve double honor. This chapter is about the ordering of a community that values what God values: the care of the vulnerable, the honor of faithful leadership, and the integrity of reputation.',
  ],

  sections: [
    /* ─── 1 Timothy 5:1–2 — Rebuke Not an Elder ──────────────────────────── */
    {
      ref: '1 Timothy 5:1–2',
      title: 'Rebuke Not an Elder',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(1,
              t('Rebuke not an '),
              hy('elder', 'tim5-presbyteros'),
              t(', but '),
              t('intreat him as a father'),
              t('; and the younger men as brethren;'),
            ),
            verse(2,
              t('The elder women as mothers; the younger as sisters, with all '),
              hy('purity', 'tim5-hagneia'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim5-rebuke-not',
          html:
            'Timothy is a young man in a leadership role. The temptation is to exercise authority harshly, to prove himself by taking a tough line. Paul counters: "Rebuke not an elder." The church is not a military hierarchy. It is a family. When you confront a faltering elder, you do not command him like a superior to a subordinate. You entreat him like a son appealing to a father—with respect, with gentleness, with the assumption that he has wisdom you do not yet see. [res:sefaria-1tim-5]',
        },
        {
          kind: 'greek',
          id: 'tim5-presbyteros',
          title: 'Presbyteros — Elder, Older Man',
          script: 'πρεσβύτερος',
          translit: '<strong>presbyteros</strong> · elder; older; worthy of respect due to age and experience',
          description:
            'The word combines the root for "elder" with connotations of authority and wisdom. An elder is not merely someone who is old. An elder is someone whose years have produced maturity, and whose position carries responsibility for the flock. But age and position do not exempt one from correction—they simply change how correction is given.',
        },
        {
          kind: 'commentary',
          id: 'tim5-family-hierarchy',
          html:
            'Paul then extends the principle: younger men as brothers (peers, equals in dignity), elder women as mothers (deserving the same respect as an elder man, and the tenderness of familial affection), younger women as sisters "with all purity." That last phrase is crucial. The church is a family, but it is not naive about the body and desire. Relating to younger women as sisters means protecting the boundaries that make familial love possible. [res:bibleodyssey-widows]',
        },
        {
          kind: 'greek',
          id: 'tim5-hagneia',
          title: 'Hagneia — Purity, Chastity',
          script: 'ἁγνεία',
          translit: '<strong>hagneia</strong> · purity; cleanness; holiness; chastity',
          description:
            'Hagneia is not mere physical virginity. It is the purity of intention and of boundary. It is keeping something set apart for its proper use. In a church family, younger women are set apart not as objects of desire but as sisters—and that apartness is preserved through self-control and respect.',
        },
        {
          kind: 'christ',
          id: 'tim5-christ-family',
          title: 'Christ Connection — The Family He Gathers',
          html:
            'When Jesus was told His mother and brothers were outside seeking Him, He asked, "Who is my mother? Who are my brethren?" and stretched out His hand to the disciples: "Behold my mother and my brethren." The church is the family of Jesus—not by blood but by His calling. That same relational language shapes how we address one another: as family, not subjects.',
        },
        {
          kind: 'carry',
          html:
            'How do you speak to authority figures in your church or community? With distance? With fear? With contempt? Paul is suggesting a middle way: respect for their office and experience, but relational tenderness that reflects kinship. If you are in a position of authority over younger people, are you thinking of them as family—with all the care that implies—or as subordinates to be managed?',
        },
        {
          kind: 'reflection',
          id: 'tim5-family-language',
          prompt: 'Think of an elder you know. How would your approach to any disagreement or concern shift if you spoke to them as you would to a beloved parent?',
        },
      ],
    },

    /* ─── 1 Timothy 5:3–8 — Honour Widows That Are Widows Indeed ──────────── */
    {
      ref: '1 Timothy 5:3–8',
      title: 'Honour Widows That Are Widows Indeed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(3,
              hy('Honour widows that are widows indeed', 'tim5-chera-ontōs'),
              t('.'),
            ),
            verse(4,
              t('But if any widow have children or nephews, let them learn first to '),
              hg('shew piety at home', 'tim5-eusebeia'),
              t(', and to requite their parents: for that is good and acceptable before God.'),
            ),
            verse(5,
              t('Now she that is a widow indeed, and desolate, trusteth in God, and continueth in supplications and prayers night and day.'),
            ),
            verse(6,
              t('But she that liveth in pleasure is dead while she liveth.'),
            ),
            verse(8,
              t('But '),
              t('if any provide not for his own, and specially for those of his own house, he hath denied the faith, and is worse than an infidel'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'tim5-chera-ontōs',
          title: 'Chēra Ontōs — Widow Indeed',
          script: 'χήρα ὄντως',
          translit: '<strong>chēra</strong> · widow; <strong>ontōs</strong> · truly, really, indeed',
          description:
            'The addition of "indeed" or "truly" distinguishes those truly destitute from those who have other means. This is not callousness. It is stewardship. The church&apos;s resources are finite. They must serve those with the greatest need.',
        },
        {
          kind: 'commentary',
          id: 'tim5-honor-widows-context',
          html:
            '"Honour widows that are widows indeed." The phrase is not sentimental. Honor is not feelings. It is practical recognition of worth. A widow is honored by being cared for—by having her dignity preserved, her vulnerability acknowledged, her faithfulness respected. In the ancient world, widowhood was a precarious estate. A young widow without children or a son-in-law was especially at risk of destitution or exploitation.',
        },
        {
          kind: 'greek',
          id: 'tim5-eusebeia',
          title: 'Eusebeia — Piety, Godliness',
          script: 'εὐσέβεια',
          translit: '<strong>eusebeia</strong> · piety; godliness; reverence; dutifulness toward family and God',
          description:
            'Piety begins at home. It means honoring father and mother (the fifth commandment), caring for those who bore and raised you. A child who neglects an aging parent to give to the church has inverted the divine order. Love does not bypass the person nearest to you.',
        },
        {
          kind: 'commentary',
          id: 'tim5-family-responsibility',
          html:
            'Paul establishes a hierarchy of obligation. First: family is responsible for its own widows. A widow with children or grandchildren should be sustained by them—not abandoned to the church. Only when family cannot or will not provide does the church step in. Second: a widow "desolate"—truly alone—who is faithful (continuing "in supplications and prayers night and day") deserves the church&apos;s care. Third: a widow living in worldly pleasure has forfeited her claim. She is "dead while she liveth," Paul says harshly, because she has abandoned the faith that should guide a widow&apos;s life.',
        },
        {
          kind: 'commentary',
          id: 'tim5-denial-of-faith',
          html:
            'Verse 8 is startling in its severity. "If any provide not for his own... he hath denied the faith, and is worse than an infidel." Why so harsh? Because faith is not merely internal conviction. Faith is lived out in the actual care of those entrusted to you. A man who claims to believe in Jesus while neglecting his mother or daughter has severed himself from the gospel itself. He is "worse than an infidel"—worse than someone who never claimed faith—because he has openly contradicted it.',
        },
        {
          kind: 'christ',
          id: 'tim5-christ-compassion',
          title: 'Christ Connection — Preferential Care for the Vulnerable',
          html:
            'From the beginning of Jesus&apos; ministry, He showed a particular tenderness toward the vulnerable. He healed on the Sabbath when the law said rest—because the law is servant to mercy, not master. He touched lepers. He let a woman with an issue of blood touch His garment. He wept at the grave of His friend. A church that follows Him will mirror His compassion, especially toward the defenseless: widows, orphans, refugees, the poor. This is not an optional extra. It is the visible sign of inward gospel transformation.',
        },
        {
          kind: 'carry',
          html:
            'Paul&apos;s instruction applies far beyond widows. It is a call to look after the most vulnerable in your community—the old, the poor, the lonely. But it is also a call to order your own household first. Do your parents or elders feel your care? Do your children know you place family bonds above external duty? Do you uphold the reputation of those who depend on you? This is where Christian love is tested first, not in grand gestures but in daily faithfulness to those nearest you.',
        },
        {
          kind: 'reflection',
          id: 'tim5-vulnerable',
          prompt: 'Who is vulnerable or overlooked in your circle—at home, at work, in your community? What would it look like to "honour" them as Paul describes—not with pity but with practical care and respect?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 1 Timothy 5:9–16 — Younger Widows ───────────────────────────────── */
    {
      ref: '1 Timothy 5:9–16',
      title: 'Younger Widows',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(9,
              t('Let not a widow be '),
              hg('taken into the number', 'tim5-katalego'),
              t(' under threescore years old, having been the wife of one man,'),
            ),
            verse(10,
              t('Well reported of for good works; if she have brought up children, if she have lodged strangers, if she have washed the saints&apos; feet, if she have relieved the afflicted, if she have diligently followed every good work.'),
            ),
            verse(11,
              t('But the younger widows refuse: for when they have begun to wax wanton against Christ, they will marry;'),
            ),
            verse(12,
              t('Having damnation, because they have cast off their first faith;'),
            ),
            verse(13,
              t('And withal they learn to be idle, wandering about from house to house; and not only idle, but tattlers also and busybodies, speaking things which they ought not.'),
            ),
            verse(14,
              t('I will therefore that the younger widows '),
              hy('marry, bear children, guide the house', 'tim5-marriage'),
              t(', give none occasion to the adversary to speak reproachfully.'),
            ),
            verse(15,
              t('For some are already turned aside after Satan.'),
            ),
            verse(16,
              t('If any man or woman that believeth have widows, let them relieve them, and let not the church be charged; that it may relieve them that are widows indeed.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'tim5-katalego',
          title: 'Katalego — Enroll, Enlist',
          script: 'κατάλέγω',
          translit: '<strong>katalego</strong> · to enrol; to enlist; to register officially',
          description:
            'The church maintained an official list—a register—of widows who qualified for church support. This was not charitable handout but formal welfare provision. Being "taken into the number" meant official recognition and regular support. It was a serious designation, one that required specific qualifications.',
        },
        {
          kind: 'commentary',
          id: 'tim5-sixty-years',
          html:
            'Paul sets an age threshold: sixty years old (or older). A widow of sixty was unlikely to remarry. She had lived a full life, accumulated experience, and settled into widowhood. But a young widow—say, thirty or forty—faced pressure or temptation to remarry. Paul is not condemning remarriage. He is acknowledging reality: a young widow on the church rolls might be tempted to break her commitment for marriage, leaving the church with broken trust.',
        },
        {
          kind: 'commentary',
          id: 'tim5-reputation',
          html:
            'For an older widow to qualify for support, she must be "well reported of for good works"—her reputation must be impeccable. She has brought up children (if she had them), lodged strangers (showing hospitality), washed the saints&apos; feet (showing humble service), relieved the afflicted (showing compassion). She has "diligently followed every good work." Character is not hidden. Over years, a person&apos;s true nature becomes apparent. The church discerns widows worthy of support by their fruits.',
        },
        {
          kind: 'greek',
          id: 'tim5-marriage',
          title: 'Gameō, Teknogoneō, Oikodeospoteō — Marriage, Children, Household',
          script: 'γαμέω, τεκνογονέω, οἰκοδεσποτέω',
          translit: '<strong>gameō</strong> · to marry; <strong>teknogoneō</strong> · to bear children; <strong>oikodeospoteō</strong> · to manage/guide a household',
          description:
            'Paul advocates that younger widows should marry again and return to their natural calling: motherhood and household management. He is not elevating singleness as a higher calling. He is recognizing that young widows, without other occupation, can drift into idleness and gossip. Marriage refocuses their energies and protects their reputation.',
        },
        {
          kind: 'commentary',
          id: 'tim5-wanton-against-christ',
          html:
            'The phrase "wax wanton against Christ" (verse 11) is striking. To desire marriage against an earlier commitment made to Christ is to grow "wanton"—unrestrained, unreliable—toward Him. This is not about the morality of remarriage itself. It is about the seriousness of a vow. A young widow who enrolled in the church&apos;s widow-list may have made an implicit commitment to serve. Breaking that commitment is a spiritual failure.',
        },
        {
          kind: 'commentary',
          id: 'tim5-idleness-gossip',
          html:
            'Idle hands breed mischief. Young widows without work, without family, without structure, became "tattlers also and busybodies, speaking things which they ought not." The problem is not marriage but purpose. A woman who is occupied—by marriage, by children, by managing a household—does not have the energy or opportunity to drift into malicious gossip. Paul is not insulting women. He is observing human nature: purpose protects character.',
        },
        {
          kind: 'christ',
          id: 'tim5-christ-household',
          title: 'Christ Connection — The Family of God',
          html:
            'When Paul speaks of widows marrying, bearing children, and guiding the household, he echoes the Old Testament vision of the blessing: a woman surrounded by children and grandchildren, the fruit of her faithfulness (Ps. 113:9). But he also reflects the New Testament truth: the family of God is not limited to biology. The church itself is the household of God, where older women mother younger ones, where young women grow into maturity, where the vulnerable are cared for as family. Both biological family and church family matter. Both are callings.',
        },
        {
          kind: 'carry',
          html:
            'Do you have a clear sense of your calling and its boundaries? A widow on the church list had a specific role, a specific commitment. Today, the language is different, but the principle remains: we thrive when we know what we are for. Are you drifting, without clear purpose? Or are you occupied in something that gives shape to your days? The contrast Paul draws is not between marriage and singleness but between purposeful living and purposeless wandering.',
        },
        {
          kind: 'reflection',
          id: 'tim5-purpose',
          prompt: 'What is your current calling or primary purpose—whether marriage, parenting, work, service, or something else? Does your life reflect that, or have you drifted? What would recommitment look like?',
        },
      ],
    },

    /* ─── 1 Timothy 5:17–18 — Elders Worthy of Double Honour ───────────────── */
    {
      ref: '1 Timothy 5:17–18',
      title: 'Elders Worthy of Double Honour',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(17,
              t('Let the elders that rule well be counted worthy of '),
              t('double honour'),
              t(', especially they who '),
              hy('labour in the word and doctrine', 'tim5-kopiao'),
              t('.'),
            ),
            verse(18,
              t('For the scripture saith, '),
              t('Thou shalt not muzzle the ox that treadeth out the corn'),
              t('. And, '),
              t('The labourer is worthy of his reward'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim5-double-honor',
          html:
            '"Double honour" likely refers to both respect and material support. An elder who rules well deserves both. But special honor is reserved for those "who labour in the word and doctrine"—those who preach and teach Scripture, who help the flock understand God&apos;s truth. They give themselves to helping others grow in faith. This labor is arduous and worthy of sustenance.',
        },
        {
          kind: 'greek',
          id: 'tim5-kopiao',
          title: 'Kopiao — Labour, Toil, Work Hard',
          script: 'κοπιάω',
          translit: '<strong>kopiao</strong> · to labour; to toil; to work hard; to become weary from effort',
          description:
            'This is not easy work. Kopiao implies sweat, exhaustion, effort. Teaching the word, caring for souls, resisting false doctrine—it is wearying. Paul insists that those who do such work should not be forced to support themselves through other labor. They deserve to be sustained by those they serve. A pastor who must work a second job to survive cannot give full energy to the flock.',
        },
        {
          kind: 'commentary',
          id: 'tim5-scripture-double-meaning',
          html:
            'Paul quotes two passages to justify the principle. First, Deuteronomy 25:4: "Thou shalt not muzzle the ox that treadeth out the corn." An ox working in the harvest should be allowed to eat from the grain. The principle is simple: a worker deserves to benefit from his work. Second, an implicit quote of Jesus: "The labourer is worthy of his reward" (see Luke 10:7, Matthew 10:10). Jesus said this when He sent out the seventy. Those who preach the gospel should live by the gospel.',
        },
        {
          kind: 'christ',
          id: 'tim5-christ-laborer',
          title: 'Christ Connection — The Labourer in the Harvest',
          html:
            'Jesus Himself said, "The labourer is worthy of his reward." He spoke these words when He sent out the seventy to proclaim the kingdom. Those who proclaim His gospel, who feed His flock, who hold fast to sound doctrine in the face of opposition—they follow in His footsteps. The church that sustains such workers honors Jesus Himself. To underpay or undervalue those who labor in Scripture is to undervalue the gospel itself.',
        },
        {
          kind: 'carry',
          html:
            'Do you support those who teach you—not just financially, but in genuine honor and respect? Do you understand the labor it takes to preach week after week, to counsel the broken, to hold the line against error? Conversely, if you are entrusted with teaching, do you labor with integrity? Do you hold yourself to a higher standard? Character is not hidden. Over time, your fruits become apparent. Build your life—whether you teach or you listen—so that the truth about you is honorable.',
        },
        {
          kind: 'reflection',
          id: 'tim5-labor',
          prompt: 'Who labors in serving or teaching you? How might you honor them more fully—materially, relationally, or in prayer—this week?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 1 Timothy 5:19–20 — Accusations Against an Elder ───────────────── */
    {
      ref: '1 Timothy 5:19–20',
      title: 'Accusations Against an Elder',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(19,
              t('Against an elder '),
              t('receive not an accusation'),
              t(', but '),
              hy('before two or three witnesses', 'tim5-martys'),
              t('.'),
            ),
            verse(20,
              t('Them that sin '),
              hg('rebuke before all', 'tim5-elegcho'),
              t(', that others also may fear.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'tim5-martys',
          title: 'Martys — Witness',
          script: 'μάρτυς',
          translit: '<strong>martys</strong> · witness; one who testifies to what they have seen',
          description:
            'A witness is not a hearsay reporter but an eyewitness. The requirement of two or three witnesses protects against slander and baseless charges. It also ensures that a serious accusation against an elder (who holds a position of trust) is not made lightly or from malice. The bar for accusation is high precisely because the office carries weight.',
        },
        {
          kind: 'commentary',
          id: 'tim5-protection-from-slander',
          html:
            'Paul protects elders from baseless accusation while protecting the church from corrupt leaders. An accusation against an elder requires two or three witnesses—not because elders are above accountability, but because they are likely targets for slander. A person who has been rebuked or a rival faction might fabricate charges. The requirement of witnesses is a safeguard.',
        },
        {
          kind: 'greek',
          id: 'tim5-elegcho',
          title: 'Elegcho — Rebuke, Convict, Expose',
          script: 'ἐλέγχω',
          translit: '<strong>elegcho</strong> · to rebuke; to convict; to expose; to bring to light',
          description:
            'When an elder is found guilty of sin, he is not quietly removed or hidden away. He is rebuked before all. This is not vindictive. It is a safeguard for the flock. If an elder falls into sin and it is covered up, others are tempted to think they too can sin without consequence. Public rebuke serves as a warning.',
        },
        {
          kind: 'commentary',
          id: 'tim5-public-rebuke',
          html:
            'But when an elder does sin, he is rebuked publicly so that others fear falling into the same trap. There is no cover-up. There is also no mob justice—just clear, sobering accountability. The message is: if you lead, you are held to a higher standard. Not a different standard, but a higher one.',
        },
        {
          kind: 'carry',
          html:
            'Do you jump to accusations, or do you wait for evidence? Do you believe the worst about leaders too quickly? Conversely, do you excuse the misconduct of someone you like? Paul calls for a middle way: protection of the innocent through the requirement of witnesses, and protection of the flock through public accountability when guilt is established. Both matter.',
        },
        {
          kind: 'reflection',
          id: 'tim5-judgment',
          prompt: 'How do you typically respond to accusations about someone in authority—skeptical, believing, or uncertain? What would it look like to hold both compassion for the accused and care for the vulnerable?',
        },
      ],
    },

    /* ─── 1 Timothy 5:21–22 — The Charge Before God ───────────────────────── */
    {
      ref: '1 Timothy 5:21–22',
      title: 'The Charge Before God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(21,
              t('I '),
              t('charge thee before God, and the Lord Jesus Christ, and the elect angels'),
              t(', that thou observe these things without preferring one before another, doing nothing by partiality.'),
            ),
            verse(22,
              t('Lay hands '),
              hg('suddenly on no man', 'tim5-hands-suddenly'),
              t(', neither be partaker of other men&apos;s sins: keep thyself pure.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim5-charge-solemnity',
          html:
            'Paul does not give this instruction lightly. He charges Timothy "before God, and the Lord Jesus Christ, and the elect angels." This is not a casual memo. This is a covenant charge, witnessed by heaven itself. Timothy is accountable to God for how he treats widows, how he honors elders, how he judges accusations. And he is called to do all this "without preferring one before another, doing nothing by partiality." No favoritism. No looking out for the wealthy or influential at the expense of the poor or unpopular.',
        },
        {
          kind: 'greek',
          id: 'tim5-hands-suddenly',
          title: 'Hands Suddenly, Part of / Partaker',
          script: 'ταχέως χεῖρας / κοινωνέω',
          translit: '<strong>tacheos cheiras</strong> · hastily lay on hands; <strong>koinōneō</strong> · to participate in; to share in; to be a partner',
          description:
            '"Lay hands suddenly" refers to the ordination or commissioning of church leaders. Paul warns Timothy not to rush this process. Careful discernment takes time. If you ordain someone hastily and they later fall into sin, you are "partaker" (koinōneō)—you share in their guilt. Your carelessness enabled their downfall.',
        },
        {
          kind: 'commentary',
          id: 'tim5-ordination-care',
          html:
            '"Lay hands suddenly on no man." To lay on hands was to ordain, to commission, to authorize someone for ministry. Paul urges Timothy not to do this hastily. A person may seem righteous at first, but character is revealed over time. If you ordain someone without properly testing them, and they later fall into sin or false doctrine, you bear part of the responsibility. Your haste enabled their corruption. Timothy must be careful—exceedingly careful—about who he entrusts with authority.',
        },
        {
          kind: 'commentary',
          id: 'tim5-keep-thyself-pure',
          html:
            'The final instruction is personal: "keep thyself pure." Timothy is young, surrounded by temptations—financial pressure, sexual opportunity, the flattery of followers, the ease of small compromises. But he is a steward of the gospel. His integrity matters. His purity of motive and conduct matters. The whole instruction—about widows, elders, accusers, ordination—only works if Timothy himself is walking in integrity.',
        },
        {
          kind: 'christ',
          id: 'tim5-christ-witness',
          title: 'Christ Connection — Accountability to Christ',
          html:
            'Paul invokes Christ as a witness to this charge. In 2 Timothy 4:1, Paul will make a similar charge "before God, and the Lord Jesus Christ, who shall judge both the quick and the dead." We are not accountable merely to our congregation or to our conscience. We are accountable to Christ Himself. He sees all our motives, all our partiality, all our compromises. This is not meant to terrify but to clarify: our true audience is one, and His name is Jesus.',
        },
        {
          kind: 'carry',
          html:
            'What decisions are you making right now where you are tempted to play favorites, to rush judgment, to ordain someone (give authority to someone) before they are ready? What small compromises are you tolerating in your own life that chip away at your purity? Paul&apos;s charge is not just for Timothy. It is for anyone entrusted with responsibility over others. Observe these things. Do nothing by partiality. Keep thyself pure.',
        },
        {
          kind: 'reflection',
          id: 'tim5-accountability',
          prompt: 'Before whom do you truly live—your peers, your boss, your conscience, or God and Christ? How would that answer change the decisions you face this week?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 1 Timothy 5:23 — Drink No Longer Water ──────────────────────────── */
    {
      ref: '1 Timothy 5:23',
      title: 'Drink No Longer Water',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(23,
              t('Drink no longer water, but use a little wine for thy stomach&apos;s sake and thine often infirmities.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim5-water-wine',
          html:
            'This verse seems abrupt—a sudden shift from church order to Timothy&apos;s stomach. But it reveals Paul&apos;s pastoral care. Timothy is young, idealistic, possibly ascetic in his practices. He has been drinking only water, perhaps as a spiritual discipline or for some other reason. But his health is suffering. He has "often infirmities." Paul says: use wine medicinally. A little wine aids digestion and can help with illness. This is not permission for drunkenness. It is permission for self-care.',
        },
        {
          kind: 'carry',
          html:
            'Paul&apos;s word to Timothy is a word to all zealous followers: your body matters. Rest matters. Health matters. You cannot serve God if you are destroyed by your own asceticism. The gospel does not demand martyrdom by exhaustion. If a little wine helps your digestion, drink it. If you need sleep, sleep. If you are sick, seek help. Taking care of your body is not selfishness. It is stewardship of the instrument through which you serve.',
        },
        {
          kind: 'reflection',
          id: 'tim5-body',
          prompt: 'Are you neglecting your body in some way—sleep, food, rest, medical care—thinking it is spiritual? What would it look like to care for yourself as a "temple" worth maintaining?',
        },
      ],
    },

    /* ─── 1 Timothy 5:24–25 — Some Men's Sins Are Open Beforehand ────────── */
    {
      ref: '1 Timothy 5:24–25',
      title: 'Some Men\'s Sins Are Open Beforehand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(24,
              t('Some men&apos;s sins are '),
              hg('open beforehand, going before to judgment', 'tim5-sins-open'),
              t('; and some men they follow after.'),
            ),
            verse(25,
              t('Likewise also the good works of some are manifest beforehand; and they that are otherwise cannot be hid.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'tim5-sins-open',
          title: 'Sins "Going Before" to Judgment',
          script: 'προάγω (sins)',
          translit: '<strong>proagō</strong> · to go before; to precede; to make known beforehand',
          description:
            'Some people&apos;s sins are so obvious, so public, that they "go before" the person—preceding them, making judgment easy. A habitual drunkard, a serial liar, an abuser—their sins arrive before they do. But others hide their sin skillfully. The truth only emerges later. The point: be patient. Do not rush to judge the hidden, and do not be blind to the obvious.',
        },
        {
          kind: 'commentary',
          id: 'tim5-character-revealed',
          html:
            'This is Paul&apos;s closing wisdom: character is not hidden. Some people sin openly; their failures precede them and make judgment straightforward. Others commit hidden sin; their corruption emerges only over time. But whether open or hidden, the truth eventually surfaces. Similarly, some people\'s good works are "manifest beforehand"—obvious to all. Others do good quietly, and their goodness becomes apparent only when you know them well. But in all cases, over time, the truth about a person becomes clear. This is why the election of leaders must not be rushed. This is why accusations must not be believed without witnesses. This is why ordination must be careful. Time reveals truth. [res:intertextual-deut25-1tim5]',
        },
        {
          kind: 'christ',
          id: 'tim5-christ-light',
          title: 'Christ Connection — Nothing Hidden from the Light',
          html:
            'Jesus taught, "Nothing is hid, that shall not be made manifest; neither was any thing kept secret, but that it should come abroad" (Mark 4:22). Paul echoes this: character is eventually revealed. No reputation (good or bad) can be forever hidden. This is both warning and comfort. A warning: do not think your hidden sin will never be exposed. A comfort: do not despair if you are slandered now. Truth has a way of emerging. Live in the light. Keep yourself pure. And wait for the truth to vindicate you.',
        },
        {
          kind: 'carry',
          html:
            'You live in an age of carefully curated images. Someone can appear righteous on social media while living corruptly. But Paul promises: time reveals truth. The façade cracks. The goodness that is genuine becomes obvious. So build a life that is the same in public and in private. Do good works not for acclaim but because they are right. Avoid sin not because you fear exposure but because sin contradicts your love for Christ. Then, whether your goodness is noticed or hidden, you can rest knowing the truth will eventually emerge.',
        },
        {
          kind: 'reflection',
          id: 'tim5-character',
          prompt: 'Is there any significant gap between who you are in public and who you are in private? What would it take to integrate them into one consistent character?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Let the elders that rule well be counted worthy of double honour, especially they who labour in the word and doctrine. For the scripture saith, Thou shalt not muzzle the ox that treadeth out the corn.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Timothy 5 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-1tim-5',
      kind: 'study',
      source: 'Sefaria',
      label: '1 Timothy 5',
      url: 'https://www.sefaria.org/1%20Timothy.5',
      description: 'Multiple translations and commentary on widows, elders, honor, and pastoral care.',
    },
    {
      id: 'bibleodyssey-widows',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Widows in Early Christian Communities',
      url: 'https://www.bibleodyssey.org/dictionary/widow/',
      description: 'Historical and social context of widow care and support systems in the early church.',
    },
    {
      id: 'intertextual-deut25-1tim5',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Deuteronomy 25:4 ↔ 1 Timothy 5:18',
      url: 'https://intertextual.bible/text/deuteronomy-25.4/1-timothy-5.18',
      description: 'Paul&apos;s application of the law on muzzling oxen to the honor and support of those who labor in word and doctrine.',
    },
  ],

  hasHebrew: false,
};
