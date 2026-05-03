import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Hebrews 13 — The closing chapter of the most theological book in the New Testament.
 * The epistle moves from the supremacy of Christ and His priesthood to the practical
 * fruit that doctrine must bear: brotherly love, hospitality, fidelity in marriage,
 * contentment, and unwavering allegiance to Jesus Christ.
 *
 * Hebrews began by placing Christ in the highest heavens. It ends in the streets,
 * calling believers to let their faith transform how they love, live, and suffer.
 * The benediction gathers up the entire letter: Christ is supreme, constant, and
 * all-sufficient for those who trust Him.
 */

export const HEBREWS_13: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 13,

  intros: [
    'Hebrews closes not with abstract theology but with living, breathing exhortations. Let brotherly love continue. Be hospitable. Remember those in bonds. Honor marriage. Be content. Refuse strange doctrines. And remember Jesus—the same yesterday, today, and forever. The letter&apos;s profound vision of Christ&apos;s supremacy must produce fruit in how you love others and how you endure hardship.',
    'The final chapter is a tapestry of practical Christian life held together by one thread: the unchanging person of Jesus Christ. In a world of constant flux, He is your stable center. Everything in this chapter—compassion, faithfulness, endurance, sacrifice—flows from resting in His eternal constancy.',
  ],

  sections: [
    /* ─── Hebrews 13:1–2 — Let Brotherly Love Continue ────────────────────── */
    {
      ref: 'Hebrews 13:1–2',
      title: 'Let Brotherly Love Continue',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'Let brotherly love continue.'),
            plain(2, 'Be not forgetful to entertain strangers: for thereby some have entertained angels unawares.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb13-philadelphia',
          html:
            'The first word is grace and love. "Let brotherly love continue"—not begin, but <em>continue</em>. This signals that love is not a starting point but a discipline, something to be maintained and nourished. The Greek word is <em>philadelphia</em>, a familial, tender love within the household of faith. You love your brothers not as a rule, but as family.',
        },
        {
          kind: 'greek',
          id: 'heb13-philadelphia-callout',
          title: 'Philadelphia — Brotherly Love',
          script: 'φιλαδέλφια',
          translit: '<strong>philadelphia</strong> · love of brothers; familial affection within the faith community',
          description:
            'Philadelphia is the love of family—intimate, protective, self-giving. It is distinct from the broad agape (universal love) and the romantic eros. It is the love you extend to those who share your faith, your struggle, your hope. This is the baseline of Christian community.',
        },
        {
          kind: 'commentary',
          id: 'heb13-entertain-angels',
          html:
            '"Be not forgetful to entertain strangers: for thereby some have entertained angels unawares." Hospitality is not incidental. It is a spiritual practice rooted in the possibility that you are entertaining more than you see. Every stranger may be a messenger from God. Generosity opens not just a door, but your heart to divine presence.',
        },
        {
          kind: 'carry',
          html:
            'Do not let your love grow cold. Keep it active, conscious, deliberate. Extend your table. Open your home. You never know whom you welcome. When you serve a stranger in the name of Christ, you serve Christ Himself.',
        },
        {
          kind: 'reflection',
          id: 'heb13-brotherly-love',
          prompt: 'Who in your faith community most needs your brotherly love right now? How can you practice hospitality this week?',
        },
      ],
    },

    /* ─── Hebrews 13:3 — Remember Them in Bonds ────────────────────────────── */
    {
      ref: 'Hebrews 13:3',
      title: 'Remember Them That Are in Bonds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(3, 'Remember them that are in bonds, as bound with them; and them which suffer adversity, as being yourselves also in the body.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb13-remember-bonds',
          html:
            'The first generation of Hebrew believers faced imprisonment, pillaging, and persecution (Heb 10:32–34). Some were still in bonds. The author commands: "Remember them." This is not sentimental. It is the bone-deep solidarity of the Body of Christ—suffer with those who suffer, as if you are bound together in one flesh.',
        },
        {
          kind: 'greek',
          id: 'heb13-sympatheo',
          title: 'Sympatheo — Suffer With',
          script: 'συμπάσχω',
          translit: '<strong>sympatheo</strong> · to suffer together; to experience the same suffering',
          description:
            'To sympathize is literally to suffer alongside. Not from a distance, not as an observer, but as one who enters into the pain. The body cannot be divided. One member&apos;s suffering is every member&apos;s responsibility.',
        },
        {
          kind: 'commentary',
          id: 'heb13-in-the-body',
          html:
            '"As being yourselves also in the body." This is the theology of the Body of Christ made concrete. When your brother is imprisoned, you are imprisoned. When your sister is tortured, you are tortured. This is not metaphor. It is the mutual responsibility of those who share one Lord, one faith, one baptism.',
        },
        {
          kind: 'carry',
          html:
            'Do not forget those who suffer for their faith. Pray for them. Advocate for them. Send relief. Write letters. Your solidarity is a form of spiritual warfare. You declare that their suffering is real, their cause is just, and Christ is watching.',
        },
        {
          kind: 'reflection',
          id: 'heb13-bonds',
          prompt: 'Who in your broader Christian family is suffering for their faith? How can you embody Christ&apos;s presence to them?',
        },
      ],
    },

    /* ─── Hebrews 13:4 — Marriage Honourable in All ──────────────────────── */
    {
      ref: 'Hebrews 13:4',
      title: 'Marriage is Honourable in All',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(4, 'Marriage is honourable in all, and the bed undefiled: but whoremongers and adulterers God will judge.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb13-marriage-honour',
          html:
            'Some early Christian movements despised the body. Not so the apostle. "Marriage is honourable in all." Not just for the weak. Not as a concession to the flesh. As something honourable, worthy of celebration and fidelity. The marriage bed is undefiled—pure in God&apos;s sight when it remains within its proper bounds.',
        },
        {
          kind: 'greek',
          id: 'heb13-koite',
          title: 'Koite — The Marriage Bed',
          script: 'κοίτη',
          translit: '<strong>koite</strong> · bed; marital cohabitation; sexual union within marriage',
          description:
            'The word literally names the bed itself, the place of intimate union. The author is not euphemistic. Sexual union within marriage is not shameful. It is part of God&apos;s design for human love. The boundaries matter—fidelity, consent, permanence—but within them, the marriage bed is blessed.',
        },
        {
          kind: 'commentary',
          id: 'heb13-adultery-judged',
          html:
            'But "whoremongers and adulterers God will judge." There are boundaries. Sex outside marriage—whether casual encounters or affairs—breaks covenant. God is the judge. His judgment is not arbitrary but rooted in His care for human souls and the binding nature of covenant.',
        },
        {
          kind: 'carry',
          html:
            'If you are married, guard and cherish your union. Make love tenderly and faithfully. If you are single, keep your body holy. Either way, remember that sexual union means something—it is a covenant act, not a recreational activity. Honor marriage by fidelity or abstinence.',
        },
        {
          kind: 'reflection',
          id: 'heb13-marriage',
          prompt: 'How does honoring marriage shape your view of sexuality and fidelity? What does it mean to you that God cares about these boundaries?',
        },
      ],
    },

    /* ─── Hebrews 13:5 — I Will Never Leave Thee, Nor Forsake Thee ────────── */
    {
      ref: 'Hebrews 13:5',
      title: '"I Will Never Leave Thee, Nor Forsake Thee"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(5, 'Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb13-conversation-covetousness',
          html:
            'Covetousness is the root disease. It is the belief that what you have is not enough, that you need more to be secure, to be loved, to be whole. The cure is contentment, grounded not in circumstance but in covenant. "He hath said, I will never leave thee, nor forsake thee." This is the promise to Joshua at the threshold of the Promised Land, now extended to every believer.',
        },
        {
          kind: 'greek',
          id: 'heb13-aphilarguria',
          title: 'Aphilarguria — Without Covetousness',
          script: 'ἀφιλάργυρος',
          translit: '<strong>aphilarguria</strong> · without love of silver; free from the desire for wealth; contentment',
          description:
            'The word is built from <em>a</em> (without) + <em>phileo</em> (to love) + <em>argyros</em> (silver). It is not the absence of money, but the absence of the *love* for it. You can be wealthy and aphilarguria—free from the enslaving desire. You can be poor and avaricious. The heart is what matters.',
        },
        {
          kind: 'commentary',
          id: 'heb13-never-forsake',
          html:
            'God says, "I will never leave thee." This is the ultimate security. Not money, not status, not health—these all fail. But God&apos;s presence, His commitment to you, His refusal to abandon you—this is the foundation that makes contentment possible.',
        },
        {
          kind: 'christ',
          id: 'heb13-christ-presence',
          title: 'Christ Connection — The Risen Christ with You',
          html:
            'Jesus promised His disciples: "Lo, I am with you alway, even unto the end of the world" (Matthew 28:20). The God who will never leave you has taken human form in Jesus. He has died and risen. He is at God&apos;s right hand. And by His Spirit, He is with you. You cannot be left or forsaken.',
        },
        {
          kind: 'carry',
          html:
            'Resist the lie that you need more to be happy, more to be safe, more to be loved. You have Christ. His presence is everything. When you are tempted to covet, turn your eyes to the One who promised never to forsake you. That is contentment.',
        },
        {
          kind: 'reflection',
          id: 'heb13-forsake',
          prompt: 'Where in your life are you still trying to secure yourself through accumulation? How might contentment in Christ&apos;s presence free you?',
        },
      ],
    },

    /* ─── Hebrews 13:8 — Jesus Christ the Same Yesterday, To-day, and For Ever ── */
    {
      ref: 'Hebrews 13:8',
      title: 'Jesus Christ the Same Yesterday, To-day, and For Ever',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(8, 'Jesus Christ the same yesterday, and to day, and for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb13-christ-same-yesterday',
          html:
            'This verse stands alone, isolated by whitespace in the original, as the hinge of the entire letter. Jesus does not change. He was the same in the Old Covenant—the Angel of the Lord, the Word speaking through the prophets, the God of Abraham. He is the same today, walking with you, interceding for you, holding all things together. He will be the same forever, your judge, your shepherd, your eternal High Priest.',
        },
        {
          kind: 'greek',
          id: 'heb13-houtos-autos',
          title: 'Houtos Autos — The Same',
          script: 'αὐτός',
          translit: '<strong>autos</strong> · he himself; the same; unchanged',
          description:
            'The Greek is emphatic. Not a similar Christ, not a Christ who evolves or grows, but <em>the same</em> Christ—in His person, His power, His promises, His love. Yesterday, today, forever. This is the foundation of all Christian hope.',
        },
        {
          kind: 'christ',
          id: 'heb13-christ-unchanging-center',
          title: 'Christ Connection — Your Unchanging Anchor',
          html:
            'In a world where everything else changes—kings fall, empires crumble, loved ones pass away, bodies age, empires rise and fall—Jesus Christ remains. He is not a moment, not a trend, not a phase. He is the same yesterday, today, forever. This is the sentence on which all of Hebrews rests. This is your anchor.',
        },
        {
          kind: 'carry',
          html:
            'When the world shakes, remember: Jesus is constant. When you fail, remember: Jesus is the same. When you doubt, remember: Jesus is yesterday&apos;s Savior, today&apos;s companion, and forever&apos;s hope. Build everything on this truth.',
        },
        {
          kind: 'reflection',
          id: 'heb13-unchanging',
          prompt: 'What in your life has changed unexpectedly? How does Christ&apos;s unchangeability help you face it?',
        },
      ],
    },

    /* ─── Hebrews 13:9 — Be Not Carried About with Strange Doctrines ──────── */
    {
      ref: 'Hebrews 13:9',
      title: 'Be Not Carried About with Strange Doctrines',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(9, 'Be not carried about with divers and strange doctrines. For it is a good thing that the heart be established with grace; not with meats, which have not profited them that have been occupied therein.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb13-strange-doctrines',
          html:
            'The first-century believers faced pressure to return to Jewish food laws and rituals. Do not, says the author. You are not stabilized by what you eat or do not eat, by what you observe or abandon. "A good thing that the heart be established with grace." Your heart is held stable by one thing: God&apos;s grace in Christ.',
        },
        {
          kind: 'greek',
          id: 'heb13-doktrinas',
          title: 'Doktrinas — Teachings; Doctrines',
          script: 'δόγμα',
          translit: '<strong>dogma</strong> · teaching; doctrine; decree; command',
          description:
            'Doctrines are teachings meant to guide and direct. Some are from God and true. Others are human inventions, "divers and strange." The test is simple: Do they lead you to Christ? Do they establish your heart in grace? Or do they distract you with rules and practices that have no power to save?',
        },
        {
          kind: 'commentary',
          id: 'heb13-meats-no-profit',
          html:
            'The example is dietary law, but the principle is universal. Rules about what you eat or wear, practices you perform, customs you follow—none of these make you right with God. Only grace. Only Christ. Only faith in His finished work.',
        },
        {
          kind: 'carry',
          html:
            'Be skeptical of doctrines that pull you away from Christ. Be skeptical of teachings that promise spiritual power through your own effort, your own discipline, your own performance. The heart is established in grace, not in works. Rest in Christ&apos;s sufficiency.',
        },
        {
          kind: 'reflection',
          id: 'heb13-doctrines',
          prompt: 'What false doctrines or worldly teachings tempt you to add to faith in Christ? How can you keep your heart fixed on grace?',
        },
      ],
    },

    /* ─── Hebrews 13:10–14 — Jesus Suffered Without the Gate ──────────────── */
    {
      ref: 'Hebrews 13:10–14',
      title: 'Jesus Suffered Without the Gate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(10, 'We have an altar, whereof they have no right to eat which serve the tabernacle.'),
            plain(11, 'For the bodies of those beasts, whose blood is brought into the holy place by the high priest for sin, are burned without the camp.'),
            plain(12, 'Wherefore Jesus also, that he might sanctify the people with his own blood, suffered without the gate.'),
            plain(13, 'Let us go forth therefore unto him without the camp, bearing his reproach.'),
            plain(14, 'For here have we no continuing city, but we seek one to come.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb13-altar-believers',
          html:
            'Believers have an altar, but it is not the tabernacle altar. The sacrifice has been offered—Jesus, once and for all. The old system, with its burnt offerings and priestly meals, cannot save those who cling to it. But the altar of Christ remains open to all who believe.',
        },
        {
          kind: 'commentary',
          id: 'heb13-without-gate',
          html:
            'Jesus suffered "without the gate"—outside Jerusalem, outside the camp, outside the place of power and prestige. This was the place of shame, the place of execution reserved for criminals and the unclean. Jesus went there willingly, to sanctify His people with His own blood.',
        },
        {
          kind: 'greek',
          id: 'heb13-oneidismos',
          title: 'Oneidismos — Reproach; Shame',
          script: 'ὀνειδισμός',
          translit: '<strong>oneidismos</strong> · reproach; disgrace; insult; shame',
          description:
            'Jesus bore the reproach, the public shame, the disgrace. When you follow Him, you may be called a fool, a fanatic, a narrow-minded believer. That is your reproach—His reproach, which He has already carried. You are not ashamed to bear it with Him.',
        },
        {
          kind: 'commentary',
          id: 'heb13-without-camp',
          html:
            '"Let us go forth therefore unto him without the camp, bearing his reproach." The author calls believers to leave the comfort of the old system. Leave the prestige of Jerusalem. Leave the security of the temple. Go to Jesus. Yes, you will face reproach. But you will find Him.',
        },
        {
          kind: 'christ',
          id: 'heb13-christ-sin-offering',
          title: 'Christ Connection — The Sin-Offering Identified Outside',
          html:
            'In Leviticus, the sin-offering bull is burned outside the camp. In Hebrews 13, Jesus is identified with that offering. He is the sin-bearer, the one set apart and cast out, so that those who believe in Him might be sanctified. His shame becomes your salvation. His rejection becomes your adoption.',
        },
        {
          kind: 'carry',
          html:
            'Do not be ashamed of Jesus. Do not shrink from His reproach. In a world that honors power, wealth, and status, Jesus calls you to walk the way of humility and sacrifice. That is where salvation is. That is where you find Him.',
        },
        {
          kind: 'reflection',
          id: 'heb13-reproach',
          prompt: 'In what ways have you experienced reproach for your faith? How does knowing Jesus bore the ultimate shame help you?',
        },
      ],
    },

    /* ─── Hebrews 13:15–16 — The Sacrifice of Praise ───────────────────────── */
    {
      ref: 'Hebrews 13:15–16',
      title: 'The Sacrifice of Praise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(15, 'By him therefore let us offer the sacrifice of praise to God continually, that is, the fruit of our lips giving thanks to his name.'),
            plain(16, 'But to do good and to communicate forget not: for with such sacrifices God is well pleased.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb13-sacrifice-praise',
          html:
            'The old sacrifices are gone. The new sacrifice is praise. Not blood of animals, but the fruit of your lips—thanksgiving, prayer, testimony, song. You do not bring animals to the altar anymore. You bring your voice, your heart, your voice broken in gratitude.',
        },
        {
          kind: 'greek',
          id: 'heb13-thysia-ainesis',
          title: 'Thysia Ainēseōs — Sacrifice of Praise',
          script: 'θυσία αἰνέσεως',
          translit: '<strong>thysia</strong> · sacrifice; <strong>ainēseōs</strong> · praise; song of praise',
          description:
            'The ancient temple sacrifice is replaced by the sacrifice of the voice. Praise offered to God is a true sacrifice—it costs you breath, effort, vulnerability. It requires faith to sing when circumstances are dark. That is why God prizes it.',
        },
        {
          kind: 'commentary',
          id: 'heb13-continually',
          html:
            '"Continually." Not just on good days. Not just when circumstances warrant it. To praise God <em>continually</em> is to develop a habit of thanksgiving that outlasts circumstance. This is the spiritual discipline of joy.',
        },
        {
          kind: 'commentary',
          id: 'heb13-good-communicate',
          html:
            'But praise is not enough. "To do good and to communicate forget not." You must also serve, give, share your resources. The sacrifices God prizes are the daily offerings of love—kindness, generosity, presence. These are the new temple worship.',
        },
        {
          kind: 'carry',
          html:
            'Make praise a discipline. Thank God in all things—not for the suffering, but in the suffering, knowing He is present. And let your gratitude become generous. Share what you have. Serve those in need. This is worship in the new covenant.',
        },
        {
          kind: 'reflection',
          id: 'heb13-praise',
          prompt: 'When is praise hardest for you? How can you practice the sacrifice of praise today?',
        },
      ],
    },

    /* ─── Hebrews 13:17–19 — Obey Them That Have the Rule ──────────────────── */
    {
      ref: 'Hebrews 13:17–19',
      title: 'Obey Them That Have the Rule Over You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(17, 'Obey them that have the rule over you, and submit yourselves: for they watch for your souls, as they that must give account. Let them do this with joy, and not with grief: for that is unprofitable for you.'),
            plain(18, 'Pray for us: for we trust we have a good conscience, desiring to live honestly in all things.'),
            plain(19, 'But I beseech you the rather to do this, that I may be restored to you the sooner.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb13-obey-leaders',
          html:
            'The author speaks of spiritual leaders, those who watch for your souls. To obey them is not blind allegiance but recognition that some are called to shepherd, to warn, to encourage. These leaders will give an account to God for how they have cared for you.',
        },
        {
          kind: 'greek',
          id: 'heb13-hegeomai',
          title: 'Hegeomai — Lead; Have Authority',
          script: 'ἡγέομαι',
          translit: '<strong>hegeomai</strong> · to lead; to govern; to have authority; to consider',
          description:
            'Leaders are not lords. They are those who go before, who show the way. Their authority is real but limited—it serves the flock, not itself. And their authority is accountable. They will answer to God for how they have led.',
        },
        {
          kind: 'commentary',
          id: 'heb13-with-joy',
          html:
            'Let them do their work "with joy, and not with grief." Grief-stricken leaders become harsh or withdrawn. Joyful leaders are effective. You can help leaders rejoice by honoring their calling, by following with good faith, and by praying for them.',
        },
        {
          kind: 'carry',
          html:
            'Respect those who shepherd you. They bear real responsibility. But remember: all authority is under Christ&apos;s authority. If a leader leads you away from Christ, follow Christ instead. And always pray for those who lead. Their work is hard, and they need your intercession.',
        },
        {
          kind: 'reflection',
          id: 'heb13-leaders',
          prompt: 'Who are your spiritual leaders? How can you honor them and pray for them this week?',
        },
      ],
    },

    /* ─── Hebrews 13:20–21 — The God of Peace, The Great Shepherd ──────────── */
    {
      ref: 'Hebrews 13:20–21',
      title: 'The God of Peace · The Great Shepherd of the Sheep',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(20, 'Now the God of peace, that brought again from the dead our Lord Jesus, that great shepherd of the sheep, through the blood of the everlasting covenant,'),
            plain(21, 'Make you perfect in every good work to do his will, working in you that which is wellpleasing in his sight, through Jesus Christ; to whom be glory for ever and ever. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb13-god-peace-intro',
          html:
            'The benediction begins not with "May you have peace" but with "The God of peace." Your peace does not come from circumstances or achievement. It comes from a Person. God is the source. His very nature is peace. To know Him is to have peace.',
        },
        {
          kind: 'greek',
          id: 'heb13-aiOnios',
          title: 'Aiōnios — Everlasting; Eternal',
          script: 'αἰώνιος',
          translit: '<strong>aiōnios</strong> · eternal; everlasting; without end',
          description:
            'The covenant is not temporary, not provisional, not subject to revision. It is <em>aiōnios</em>—eternal. It cannot be broken, revoked, or superseded. The blood of Christ sealed it forever. You stand within a covenant that will never end.',
        },
        {
          kind: 'commentary',
          id: 'heb13-brought-from-dead',
          html:
            'God "brought again from the dead our Lord Jesus." The Resurrection is the centerpiece. It proves that the covenant is effective. It proves that Jesus conquered sin and death. It proves that the sacrifice was accepted. You serve a risen Lord.',
        },
        {
          kind: 'greek',
          id: 'heb13-poimen',
          title: 'Poimen — Shepherd',
          script: 'ποιμήν',
          translit: '<strong>poimen</strong> · shepherd; pastor; one who tends flocks',
          description:
            'Jesus is the "great shepherd of the sheep." He tends you, knows your name, goes before you, protects you from harm, and carries you when you are weak. You are not livestock. You are His flock, known and loved.',
        },
        {
          kind: 'commentary',
          id: 'heb13-make-perfect',
          html:
            '"Make you perfect in every good work." Perfect here does not mean sinless. It means complete, whole, fully equipped. God works in you—and this is the miracle—He works in you to accomplish His will, to perfect you for every good work.',
        },
        {
          kind: 'greek',
          id: 'heb13-katartizo',
          title: 'Katartizō — Make Perfect; Equip; Mend',
          script: 'καταρτίζω',
          translit: '<strong>katartizō</strong> · to equip; to make complete; to prepare; to mend',
          description:
            'The word means to prepare, equip, or mend. A fisherman mending nets is doing <em>katartizō</em>. God is not shattering you or judging you harshly. He is carefully mending and equipping you for the work He has called you to do.',
        },
        {
          kind: 'christ',
          id: 'heb13-christ-shepherd-peace',
          title: 'Christ Connection — Your Shepherd, Your Peace',
          html:
            'Jesus is the Good Shepherd of John 10. He calls you by name. He lays down His life for you. He knows the Father&apos;s will and does it. He is your peace because He is present, constant, and all-sufficient. In Him, the covenant is sealed. In Him, you are made perfect. In Him, you rest.',
        },
        {
          kind: 'carry',
          html:
            'This is the word Hebrews gives you: You are not abandoned. You are not uncertain. You have the God of peace. You have the Shepherd who laid down His life for you. You have an eternal covenant written in His blood. Let this reshape your entire life.',
        },
        {
          kind: 'reflection',
          id: 'heb13-shepherd-peace',
          prompt: 'In what way do you most need Jesus as your Shepherd right now? Where do you most need the peace of God?',
        },
      ],
    },

    /* ─── Hebrews 13:22–25 — Salutations and Closing Grace ───────────────── */
    {
      ref: 'Hebrews 13:22–25',
      title: 'Salutations and Closing Grace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(22, 'And I beseech you, brethren, suffer the word of exhortation: for I have written a letter unto you in few words.'),
            plain(24, 'Salute all them that have the rule over you, and all the saints. They of Italy salute you.'),
            plain(25, 'Grace be with you all. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb13-word-exhortation',
          html:
            'The author apologizes for the brevity of what is actually one of the longest epistles in the New Testament. "I have written a letter unto you in few words." The modesty is real. He has said what needed to be said: Christ is supreme. Build your life on Him.',
        },
        {
          kind: 'commentary',
          id: 'heb13-salutations',
          html:
            '"Salute all them that have the rule over you, and all the saints." Personal greetings close the letter. This is not impersonal theology. This is written to real people—leaders and congregants—all of whom are holy in Christ.',
        },
        {
          kind: 'commentary',
          id: 'heb13-closing-grace',
          html:
            'And then, the final word: "Grace be with you all." Not "May grace come." Not "Seek grace." But "Grace <em>is</em> with you." Present tense. Immediate. Available. The entire epistle is gathered into this one word: <em>Grace</em>. God&apos;s unmerited favor poured out through Jesus Christ, poured out to all who believe.',
        },
        {
          kind: 'carry',
          html:
            'You have read Hebrews. You have seen that Christ is supreme—eternal, unchanging, all-sufficient. You have heard the call to draw near to God through Him. You have been challenged to stand firm in faith. And you have been assured: Grace is with you. Not merit, not achievement. Grace. Rest in it. Live from it.',
        },
        {
          kind: 'reflection',
          id: 'heb13-final',
          prompt: 'As you close Hebrews, what is the one truth about Christ that most shapes how you will live this week?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Hebrews 13',
    quote: 'Jesus Christ the same yesterday, and to day, and for ever. Now the God of peace, that brought again from the dead our Lord Jesus, that great shepherd of the sheep, through the blood of the everlasting covenant, Make you perfect in every good work to do his will.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 13 · Study Guide',
  },

  hasHebrew: false,
};
