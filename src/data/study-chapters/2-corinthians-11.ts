import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 2 Corinthians 11 — Paul&apos;s Jealousy and Sufferings
 *
 * Paul opens with a plea: bear with him in his folly. He is jealous over the Corinthians
 * with a godly jealousy—he has espoused them to one husband, Christ, and fears they will
 * be seduced by false apostles preaching another Jesus, another gospel. Like the serpent
 * who beguiled Eve, false teachers work subtly. Paul will catalog his sufferings as proof
 * of apostolic authenticity: stripes, imprisonments, shipwrecks, perils from robbers and
 * false brethren, hunger, thirst, cold, nakedness. And finally, his escape from Damascus
 * in a basket—a humiliation that becomes, in Paul&apos;s eyes, a kind of glory. His boasting
 * is in his infirmities, for in weakness God&apos;s strength shines through.
 */
export const SECOND_CORINTHIANS_11: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 11,

  estimatedMinutes: { beginner: 12, intermediate: 23, deep: 32 },
  intros: [
    'Paul opens this chapter with what sounds like an apology: "Would to God ye could bear with me a little in my folly." But this is no apology—it is a rhetorical move. He is about to speak of his sufferings, his credentials, the weight of his love for the Corinthians. And he knows it will sound like boasting. In a world that measures apostles by their comfort, their status, their eloquence, Paul is about to measure himself by his scars.',
    'The Corinthians are being courted by false apostles—teachers who arrive with impressive credentials, smooth words, a polished gospel. They preach "another Jesus," offer "another spirit," demand a different allegiance. Paul is not polite about this. He is zealous. He fears for the Corinthians the way a father fears for a daughter on the verge of an unwise marriage. He has espoused them to Christ as a bride to a bridegroom. And he will not watch silently while they are seduced away.',
    'The rest of the chapter is Paul&apos;s testimony. It is a catalog of suffering: beatings, imprisonments, shipwrecks, perils from every direction. And beneath it all is a simple claim: this is what an apostle looks like. Not a man of ease, but a man who has emptied himself for the gospel. By the world&apos;s measure, it is weakness. By God&apos;s measure, it is power. Paul will close with his escape from Damascus—lowered in a basket, fleeing like a fugitive. And he will glory in it. Because he has learned something the false apostles have not: in Christ, the weak become strong.',
  ],

  opener: {
    matchTitle: /Paul|apostle|foolish/i,
    matchArtist: /Tissot|Caravaggio/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── 2 Corinthians 11:1–2 — Would to God Ye Could Bear With Me ───── */
    {
      ref: '2 Corinthians 11:1–2',
      title: 'Bear With Me in Folly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              1,
              hg('Would to God ye could bear with me a little in my folly', 'c11-folly'),
              t(': and indeed bear with me.'),
            ),
            verse(
              2,
              t('For '),
              hp('I am jealous over you with godly jealousy', 'c11-jealousy'),
              t(': for I have '),
              hg('espoused you to one husband', 'c11-espoused'),
              t(', that I may present you as a '),
              hy('chaste virgin to Christ', 'c11-parthenos'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c11-folly',
          html:
            'Paul prefaces what he is about to say with "I speak foolishly"—but he is not excusing himself. He is warning the Corinthians: what follows will sound like boasting, because by the world&apos;s standards, boasting in suffering is absurd. And it is. But it is the absurdity of the cross, the foolishness of God that is wiser than the wisdom of men.',
        },
        {
          kind: 'commentary',
          id: 'c11-jealousy',
          html:
            'Jealousy in Scripture is sometimes a sin—possessiveness masquerading as love. But it can also be the fierce protection of covenant. Paul&apos;s jealousy is godly, not self-serving. He is not defending his own reputation but guarding the Corinthians&apos; faithfulness to Christ.',
        },
        {
          kind: 'greek',
          id: 'c11-zelos',
          title: 'Zelos — Jealousy; Zealous Passion',
          script: 'ζῆλος',
          translit: '<strong>zēlos</strong> · jealousy; zeal; fervent devotion; passionate concern',
          description:
            'The same word used for God&apos;s jealousy in the Old Testament—a righteous intensity of passion, not a selfish guarding but a lover&apos;s fierce protection of the beloved from infidelity.',
        },
        {
          kind: 'commentary',
          id: 'c11-espoused',
          html:
            'To espouse is to betroth, to make a covenant. Paul has presented the Corinthians to Christ as a bride to a groom. They belong to Him. Their loyalty, their obedience, their very hearts are pledged to Him. In ancient marriage, any deviation was betrayal.',
        },
        {
          kind: 'hebrew',
          id: 'c11-parthenos',
          title: 'Parthenos — Chaste Virgin',
          script: 'παρθένος',
          translit: '<strong>parthenos</strong> · virgin; unmarried; pure and undivided',
          description:
            'The Corinthians are to remain pure—undivided in their devotion to Christ, uncompromised by false gospels. A chaste virgin is faithful to one husband alone.',
        },
        {
          kind: 'christ',
          id: 'c11-christ-bride',
          title: 'Christ Connection — The Church Betrothed to Christ',
          html:
            'Ephesians 5:25–27 develops this same bridal metaphor: Christ "loved the church, and gave himself for it; that he might sanctify and cleanse it… that he might present it to himself a glorious church, not having spot, or wrinkle… but that it should be holy and without blemish." The Corinthians are not Paul&apos;s to own. They are Christ&apos;s bride, and Paul is merely the friend of the bridegroom, preparing them for their covenant.',
        },
        {
          kind: 'carry',
          html:
            'You are betrothed to Christ. Not to a doctrine, not to a teacher, not to a movement—to Him. That betrothal is the foundation of your faith. When a teacher or a message tries to pull your primary allegiance toward itself, that is not a new opportunity. It is infidelity. Remain faithful to your first covenant.',
        },
        {
          kind: 'reflection',
          id: 'c11-jealousy-reflect',
          prompt:
            'What would it mean to renew your awareness that you are betrothed to Christ alone? Where might competing loyalties be creeping in—to a person, a movement, a lifestyle, a pursuit?',
        },
      ],
    },

    /* ─── 2 Corinthians 11:3 — The Serpent and Eve ───────────────────── */
    {
      ref: '2 Corinthians 11:3',
      title: 'The Serpent&apos;s Subtlety',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              3,
              t('But I fear, lest by any means, as the '),
              hg('serpent beguiled Eve through his subtilty', 'c11-serpent-eve'),
              t(', so your minds should be '),
              hy('corrupted from the simplicity that is in Christ', 'c11-haplotēs'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c11-serpent-eve',
          html:
            'Genesis 3—Eve stands in the garden and the serpent asks, "Did God really say?" It is a tiny question. It plants a doubt. It makes God&apos;s word seem uncertain, conditional, perhaps even unkind. The seduction was not violent. It was a conversation. And by the time it was over, Eve had reasoned herself into rebellion.',
        },
        {
          kind: 'greek',
          id: 'c11-haplotēs',
          title: 'Haplotēs — Simplicity; Singleness',
          script: 'ἁπλότης',
          translit: '<strong>haplotēs</strong> · simplicity; singleness of heart; undivided allegiance',
          description:
            'Not simplistic, but simple—the simplicity of a woman who trusts one man, a disciple who trusts one Master. The opposite is divided loyalty, a mind pulled between competing claims.',
        },
        {
          kind: 'commentary',
          id: 'c11-corruption',
          html:
            'Paul fears corruption of the mind, not of morals first. A corrupted mind will follow with corrupted actions. False teaching works on the intellect first—it offers new interpretations, more sophisticated understandings, a Jesus who is easier to please, a gospel that costs less.',
        },
        {
          kind: 'christ',
          id: 'c11-christ-eve',
          title: 'Christ Connection — Christ the True Light vs. Satan&apos;s Deception',
          html:
            'John 8:12—"Jesus said unto them, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life." The serpent works in shadows, in subtle suggestions, in reasonable doubts. Christ is light. His truth is direct, piercing, illuminating. The Corinthians do not need a more sophisticated gospel. They need to stay close to the Light.',
        },
        {
          kind: 'carry',
          html:
            'The subtlest deceptions often come as questions. "Did God really say?" "Don&apos;t you think Christ would want you to be happy?" "Isn&apos;t love more important than obedience?" "Wouldn&apos;t a truly merciful God not condemn?" Each one sounds reasonable. And each one is aimed at the same goal: to corrupt the simplicity of your faith. Guard your heart. The gospel doesn&apos;t get more sophisticated with age. It gets deeper, yes. But simpler—closer to this: Christ died, rose, and calls you to follow. Everything else is commentary.',
        },
        {
          kind: 'reflection',
          id: 'c11-serpent-reflect',
          prompt:
            'Where are you hearing subtle questions that cast doubt on Scripture? Where is your faith being pulled away from its simplicity? What would it look like to return to single-hearted devotion to Christ?',
        },
      ],
    },

    /* ─── 2 Corinthians 11:4 — Another Jesus, Another Gospel ──────────── */
    {
      ref: '2 Corinthians 11:4',
      title: 'Another Jesus, Another Gospel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              4,
              t('For if he that cometh preacheth '),
              hg('another Jesus', 'c11-allos-jesus'),
              t(', whom we have not preached, or if ye receive '),
              hg('another spirit', 'c11-allos-spirit'),
              t(', which ye have not received, or '),
              hg('another gospel', 'c11-heteros-gospel'),
              t(', which ye have not accepted, ye might well bear with him.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c11-allos-jesus',
          html:
            'Not a different person, but a different version. A Jesus who is less demanding, more accommodating, more interested in your happiness than your holiness. A Jesus who affirms your choices rather than calling you to change. This Jesus is invented. He does not exist. But he sounds better to ears that do not want to repent.',
        },
        {
          kind: 'commentary',
          id: 'c11-allos-spirit',
          html:
            'Along with another Jesus comes another spirit—not the Holy Spirit of conviction and transformation, but something that soothes, affirms, makes you feel good about yourself. The Holy Spirit is gentle, yes. But He is also relentless. He will not let you rest in your sin.',
        },
        {
          kind: 'commentary',
          id: 'c11-heteros-gospel',
          html:
            'Another gospel—a message of self-improvement rather than self-denial, of spiritual technique rather than surrender, of progress through effort rather than grace. The false teachers mix just enough truth with the lie that it sounds plausible. A little truth makes a big lie believable.',
        },
        {
          kind: 'greek',
          id: 'c11-pseudapostolos',
          title: 'Pseudapostolos — False Apostle',
          script: 'ψευδαπόστολος',
          translit: '<strong>pseudapostolos</strong> · false apostle; pretender; counterfeit messenger',
          description:
            'Paul does not hesitate to name them. They are not merely mistaken or misguided. They are false—imitators posing as authentic messengers. The term appears nowhere else in the New Testament. Paul saves it for this moment.',
        },
        {
          kind: 'christ',
          id: 'c11-christ-real',
          title: 'Christ Connection — The Real Jesus vs. Counterfeits',
          html:
            '1 John 4:1–3—"Beloved, believe not every spirit, but try the spirits whether they are of God: because many false prophets are gone out into the world. Hereby know ye the Spirit of God: Every spirit that confesseth that Jesus Christ is come in the flesh is of God; and every spirit that confesseth not that Jesus Christ is come in the flesh is not of God." The test is simple: Does this teaching lead you to the real Jesus—the One who came in flesh, died, rose, and calls you to take up your cross?',
        },
        {
          kind: 'carry',
          html:
            'You will hear many versions of Jesus in your lifetime. Some will come with authority, with apparent scholarship, with cultural respectability. The question is not whether the speaker sounds impressive. The question is: Does this lead me to the Jesus of Scripture—the One who demands everything, promises everything, and transforms me through suffering into His likeness?',
        },
        {
          kind: 'reflection',
          id: 'c11-allos-reflect',
          prompt:
            'What version of Jesus are you tempted to believe in? The one who makes demands less, costs less, requires less change? How might you be subtly accepting "another gospel" without realizing it?',
        },
      ],
    },

    /* ─── 2 Corinthians 11:5 — Behind No Apostle ───────────────────────── */
    {
      ref: '2 Corinthians 11:5',
      title: 'I Am Behind No Apostle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              5,
              t('For I suppose I was not a whit behind the very chiefest apostles.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c11-whit',
          html:
            'A "whit" is the smallest possible amount. Paul is not being modest here. He is making a claim: whatever authority the Jerusalem apostles have—Peter, James, John, the Twelve—Paul has it too. Not by virtue of having walked with Jesus in Galilee, but by virtue of having encountered the risen Jesus on the Damascus road. His apostleship is as real, as grounded, as theirs.',
        },
        {
          kind: 'carry',
          html:
            'Paul does not apologize for his credentials. He has seen the risen Lord. He has been sent by Christ. He bears the marks of his apostleship—not in letters of recommendation, but in sacrifice and suffering. You too have an authority in your faith that does not depend on the approval of impressive people. You have met Christ. That is enough.',
        },
        {
          kind: 'reflection',
          id: 'c11-behind-reflect',
          prompt:
            'Where are you tempted to think your faith is less real, less authoritative, less valid than someone else&apos;s? What would change if you truly believed Christ has called you and sent you?',
        },
      ],
    },

    /* ─── 2 Corinthians 11:7–9 — I Have Robbed Other Churches ─────────── */
    {
      ref: '2 Corinthians 11:7–9',
      title: 'Robbed Other Churches for Your Sake',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              7,
              t('Have I committed an offence in abasing myself that ye might be exalted, because I have preached to you the gospel of God '),
              hg('freely', 'c11-dorean'),
              t('?'),
            ),
            verse(
              8,
              t('I have robbed other churches, taking '),
              hg('wages of them', 'c11-wages'),
              t(', to do you service.'),
            ),
            verse(
              9,
              t('And when I was present with you, and wanted, I was chargeable to no man: for that which was lacking to me the brethren which came from Macedonia supplied: and in all things I have kept myself from being burdensome unto you, and so will I keep myself.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c11-dorean',
          html:
            'Paul preached the gospel to the Corinthians without charge. He did not demand payment. He did not leverage his position. This was deliberately humbling—in a culture where teachers and rabbis expected support, Paul&apos;s refusal to accept wages was almost an insult. But it was also a statement: I am not here for your money. I am here because Christ sent me.',
        },
        {
          kind: 'greek',
          id: 'c11-dorean',
          title: 'Dorean — Freely; Without Charge',
          script: 'δωρεάν',
          translit: '<strong>dorean</strong> · freely; without payment; for nothing',
          description:
            'Paul uses this word to emphasize the gratuity of his labor. He could have demanded support. Instead, he stripped himself of the very things the false apostles boast about—comfort, payment, the right to be maintained by the churches.',
        },
        {
          kind: 'commentary',
          id: 'c11-wages',
          html:
            'Paul accepted wages from other churches—the Macedonian churches—so that he could preach freely to Corinth. He was not simply independent. He was intentionally dependent on others so that the Corinthians would owe him nothing. This is humility so radical it almost looks like rejection.',
        },
        {
          kind: 'christ',
          id: 'c11-christ-empty',
          title: 'Christ Connection — Christ Emptied Himself',
          html:
            'Philippians 2:7—"But made himself of no reputation, and took upon him the form of a servant." Christ did not leverage His divinity, demand payment for His teaching, or require honor. He emptied Himself. Paul is echoing His Master. In a world that measures authority by what you can extract, Christ and Paul measure it by what you can give.',
        },
        {
          kind: 'carry',
          html:
            'What are you holding onto as a measure of your worth? Your income, your status, your right to be honored? The gospel calls you to empty yourself. Not because you are worthless, but because Christ is. Lay down your claims. Serve without demanding return. That is when you become most dangerous to the kingdom of darkness and most useful to the kingdom of light.',
        },
        {
          kind: 'reflection',
          id: 'c11-robbed-reflect',
          prompt:
            'Where are you demanding payment—literal or figurative—for your service? What would it look like to give freely, expecting nothing in return, as Christ did?',
        },
      ],
    },

    /* ─── 2 Corinthians 11:13–15 — Satan as Angel of Light ───────────── */
    {
      ref: '2 Corinthians 11:13–15',
      title: 'False Apostles as Ministers of Satan',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              13,
              t('For such are '),
              hg('false apostles', 'c11-false-apostles'),
              t(', '),
              hg('deceitful workers', 'c11-deceitful'),
              t(', '),
              hy('transforming themselves into the apostles of Christ', 'c11-schematizo'),
              t('.'),
            ),
            verse(
              14,
              t('And '),
              hp('no marvel; for Satan himself is transformed into an angel of light', 'c11-satan-light'),
              t('.'),
            ),
            verse(
              15,
              t('Therefore it is no great thing if his ministers also be transformed as the ministers of righteousness; whose end shall be according to their works.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c11-false-apostles',
          html:
            'Paul does not mince words. The teachers troubling the Corinthians are false. Not merely wrong, not merely mistaken—false. They are pretenders wearing apostolic authority they do not possess.',
        },
        {
          kind: 'commentary',
          id: 'c11-deceitful',
          html:
            'Deceitful workers. They work, yes. But their work is deception. They are industrious, effective, persuasive—all in service of a lie. This is what makes false teaching so dangerous: it comes with the appearance of sincerity and labor.',
        },
        {
          kind: 'greek',
          id: 'c11-schematizo',
          title: 'Schematizō — Transforming; Masquerading',
          script: 'σχηματίζω',
          translit: '<strong>schematizō</strong> · to form; to fashion; to transform into; to disguise',
          description:
            'The word suggests putting on a mask, donning a costume. The false apostles are actors wearing the costume of apostolic authority. And Satan himself does the same—appearing as an angel of light, wearing the costume of truth while spreading lies.',
        },
        {
          kind: 'commentary',
          id: 'c11-satan-light',
          html:
            'This is the most chilling verse in the chapter. Satan does not appear as darkness, as a demon with horns and tail. He appears as light. As truth. As beauty. As righteousness. This is why the test cannot be: "Does this feel good?" or "Does this sound true?" The test must be: "Does this align with Scripture? Does this lead to the real Jesus?"',
        },
        {
          kind: 'christ',
          id: 'c11-christ-true-light',
          title: 'Christ Connection — Christ the True Light vs. Satan&apos;s False Light',
          html:
            'John 8:12—"Jesus said unto them, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life." And 1 John 1:5—"God is light, and in him is no darkness at all." Satan&apos;s light is an illusion. It flatters, soothes, and deceives. Christ&apos;s light pierces, convicts, and transforms. The Corinthians must learn to tell the difference.',
        },
        {
          kind: 'carry',
          html:
            'You will meet smooth-talking people who sound wise, feel right, promise much. Some may even quote Scripture. But ask: Are they leading me closer to Jesus as He is revealed in the Gospels? Are they calling me to sacrifice, to obedience, to the hard road? Or are they offering me an easier path? Satan comes as light, not darkness. He is not obviously evil. He is subtly seductive. Develop the discernment to see through the disguise.',
        },
        {
          kind: 'reflection',
          id: 'c11-satan-reflect',
          prompt:
            'Where have you been charmed by false light? What teacher, message, or movement appeared righteous but was actually pulling you away from Christ? How will you develop discernment?',
        },
        {
          kind: 'artwork',
          matchTitle: /angel|light|deception/i,
          caption: '2 Corinthians 11:14 — Satan Transforming into an Angel of Light',
        },
      ],
    },

    /* ─── 2 Corinthians 11:21–22 — I Speak Foolishly ──────────────────── */
    {
      ref: '2 Corinthians 11:21–22',
      title: 'Speaking Foolishly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              21,
              t('I speak as concerning reproach, as though we had been weak. Howbeit whereinsoever any is bold, (I speak foolishly,) '),
              hg('I am bold also', 'c11-bold'),
              t('.'),
            ),
            verse(
              22,
              t('Are they Hebrews? so am I. Are they Israelites? so am I. Are they the seed of Abraham? so am I.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c11-bold',
          html:
            'If boasting by the world&apos;s measure is foolish, then Paul will be foolish. If the false apostles are bold in their claims, Paul will out-bold them. He is about to catalog his credentials, and they are impeccable. Born of Israel, trained in the Law, an apostle of Christ, a man who has suffered everything the world can throw at faith.',
        },
        {
          kind: 'carry',
          html:
            'You do not need to apologize for your faith. You do not need to diminish your experience with Christ, your knowledge of Scripture, your credentials as a follower. By the world&apos;s measure, it is foolish to believe in resurrection, to trust in grace, to give away your life. Be foolish. Out-bold the world. Be confident not in yourself, but in Christ who sent you.',
        },
      ],
    },

    /* ─── 2 Corinthians 11:23–24 — Stripes and Imprisonments ──────────── */
    {
      ref: '2 Corinthians 11:23–24',
      title: 'The Catalog of Suffering, Part 1: Stripes and Bonds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              23,
              t('Are they ministers of Christ? (I speak as a fool) '),
              hg('I am more', 'c11-suffering-intro'),
              t('; '),
              hg('in labours more abundant', 'c11-labours'),
              t(', '),
              hg('in stripes above measure', 'c11-stripes'),
              t(', '),
              hg('in prisons more frequent', 'c11-prisons'),
              t(', '),
              hg('in deaths oft', 'c11-deaths'),
              t('.'),
            ),
            verse(
              24,
              t('Of the Jews five times received I '),
              hg('forty stripes save one', 'c11-forty'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c11-suffering-intro',
          html:
            'Paul begins the catalog with a claim. "I am more"—more a minister of Christ because he has suffered more. This is radical. In a world that measures leadership by comfort, authority by status, success by ease, Paul insists the opposite. The deepest ministry comes through the deepest suffering.',
        },
        {
          kind: 'commentary',
          id: 'c11-labours',
          html:
            'Paul worked. He labored not just in ministry but with his own hands, making tents to support himself. His sufferings were not passive; they were the cost of active, relentless work for the gospel.',
        },
        {
          kind: 'commentary',
          id: 'c11-stripes',
          html:
            'Paul was beaten. Not once, but repeatedly, and "above measure"—beyond what the law allowed. The Roman and Jewish authorities saw him as a threat worth wounding. His body bears the marks of his faithfulness.',
        },
        {
          kind: 'commentary',
          id: 'c11-prisons',
          html:
            'Paul was imprisoned. He would later write from prison more than once. But before that, he had experienced imprisonment so frequent that it becomes a credential. He knew what it meant to be locked away, separated from the churches, dependent on the providence of God.',
        },
        {
          kind: 'commentary',
          id: 'c11-deaths',
          html:
            'Paul has been near death so many times that "deaths" becomes plural. He does not know how many times his life has hung in the balance. But each time, God has preserved him—not for ease, but for further labor.',
        },
        {
          kind: 'greek',
          id: 'c11-huperbole',
          title: 'Huperbole — Excess; Beyond Measure',
          script: 'ὑπερβολή',
          translit: '<strong>huperbole</strong> · excess; abundance; surpassing measure; extraordinary degree',
          description:
            'The word suggests going beyond what is normal, expected, or bearable. Paul&apos;s sufferings are not ordinary hardship. They are extraordinary, excessive, almost unendurable. And yet he endures.',
        },
        {
          kind: 'commentary',
          id: 'c11-forty',
          html:
            'The Jewish law limited whipping to forty strokes. Paul received "forty stripes save one"—not from the Romans, but from his own people. The Jews whipped him as a heretic, a traitor to the Law. He was rejected by the very community that formed him.',
        },
        {
          kind: 'carry',
          html:
            'When you face hardship for your faith, you may wonder if you are on the wrong path. Paul suggests the opposite: suffering may be evidence that you are faithful. What matters is not comfort, not ease, not the approval of the world. What matters is whether you have given yourself wholly to Christ. The cost is real. The reward is real. Which will you choose?',
        },
        {
          kind: 'reflection',
          id: 'c11-stripes-reflect',
          prompt:
            'What price have you paid for your faith? What are you willing to suffer for Christ? How does Paul&apos;s example reframe suffering from shame to credential?',
        },
      ],
    },

    /* ─── 2 Corinthians 11:25 — Beaten, Stoned, Shipwrecked ──────────── */
    {
      ref: '2 Corinthians 11:25',
      title: 'Beatings, Stoning, and Shipwreck',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              25,
              t('Thrice was I beaten with rods, once was I stoned, thrice I suffered shipwreck, '),
              hg('a night and a day I have been in the deep', 'c11-nuchthemeron'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c11-nuchthemeron',
          html:
            'Paul does not merely list his sufferings. He lingers on one: a night and a day in the depths. Alone in the sea, clinging to something—a piece of wood perhaps, or his own will to live. The image is terrifying. And Paul offers it as a credential. He has been down into the abyss and survived.',
        },
        {
          kind: 'greek',
          id: 'c11-nuchthēmeron',
          title: 'Nuchthēmeron — Night and Day; Twenty-Four Hours',
          script: 'νυχθήμερον',
          translit: '<strong>nuchthēmeron</strong> · a night and day; a full twenty-four-hour period',
          description:
            'The word appears nowhere else in Scripture. Paul creates it by joining night and day, suggesting the full measure of darkness and light, time and terror. For a full day and night, he was in the deep, between drowning and rescue.',
        },
        {
          kind: 'christ',
          id: 'c11-christ-jonah',
          title: 'Christ Connection — Jonah, the Deep, and Resurrection',
          html:
            'Jonah spent three days and nights in the belly of the whale, in the deep. Matthew 12:40—"As Jonas was three days and three nights in the whale&apos;s belly; so shall the Son of man be three days and three nights in the heart of the earth." Paul&apos;s night and day in the deep echoes this pattern. In the deep, in death, in the place of no return—and yet preserved. This is the gospel pattern: death that becomes resurrection, the abyss that becomes deliverance.',
        },
        {
          kind: 'carry',
          html:
            'There are nights in your faith when you will feel like you are drowning. Circumstances will close in. Answers will not come. You will feel abandoned, lost, in over your head. In those nights, remember: Paul was in the deep. Christ went down into death itself. And both rose. Your night will not last forever. The dawn will come.',
        },
        {
          kind: 'reflection',
          id: 'c11-deep-reflect',
          prompt:
            'When have you felt like you were in the deep—over your head, drowning, lost? How did God preserve you? What does that say about His commitment to you?',
        },
      ],
    },

    /* ─── 2 Corinthians 11:26 — Perils from Every Direction ──────────── */
    {
      ref: '2 Corinthians 11:26',
      title: 'Perils from Every Side',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              26,
              t('In journeyings often, in '),
              hg('perils of waters', 'c11-perils-waters'),
              t(', in '),
              hg('perils of robbers', 'c11-perils-robbers'),
              t(', in '),
              hg('perils by mine own countrymen', 'c11-perils-countrymen'),
              t(', in '),
              hg('perils by the heathen', 'c11-perils-heathen'),
              t(', in '),
              hg('perils in the city', 'c11-perils-city'),
              t(', in '),
              hg('perils in the wilderness', 'c11-perils-wilderness'),
              t(', in '),
              hg('perils in the sea', 'c11-perils-sea'),
              t(', in '),
              hg('perils among false brethren', 'c11-perils-false'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c11-perils-waters',
          html:
            'Water was unpredictable in the ancient world. Rivers would flood, storms would arise. Paul traveled constantly—by water, by road, by foot. Each journey carried danger.',
        },
        {
          kind: 'commentary',
          id: 'c11-perils-robbers',
          html:
            'The roads were not safe. Thieves preyed on travelers. Paul had valuables—the money he collected for Jerusalem, his own possessions. He was an obvious target.',
        },
        {
          kind: 'commentary',
          id: 'c11-perils-countrymen',
          html:
            'His own people. The Jews. Paul was born Jewish, trained in the Law, steeped in the traditions of Israel. And for that very reason, his conversion to Christ was a betrayal they could not forgive. The danger from his own people may have been the deepest.',
        },
        {
          kind: 'commentary',
          id: 'c11-perils-heathen',
          html:
            'The pagan world was not hospitable to Christian missionaries. Paul preached a gospel that undermined the worship of false gods, challenged the authority of emperors, offered salvation through a Jewish carpenter. He was a threat to the religious and political order.',
        },
        {
          kind: 'commentary',
          id: 'c11-perils-city',
          html:
            'Cities were centers of trade, wealth, and power—but also of mobs, authorities, and organized opposition. Paul was often seized in cities, dragged before magistrates, beaten by crowds.',
        },
        {
          kind: 'commentary',
          id: 'c11-perils-wilderness',
          html:
            'In the wilderness, Paul faced exposure, hunger, wild animals, the possibility of becoming lost. He traveled constantly between cities, and the roads between them were dangerous.',
        },
        {
          kind: 'commentary',
          id: 'c11-perils-sea',
          html:
            'The sea was especially treacherous. Storms arose suddenly. Ships sank. Paul mentioned three shipwrecks earlier. Each one a near-death experience.',
        },
        {
          kind: 'commentary',
          id: 'c11-perils-false',
          html:
            'The last peril may be the worst: perils among false brethren. From outside enemies, Paul could at least defend himself. But from those who claimed to follow Christ while leading others astray—from these, the danger was subtle, spiritual, impossible to see coming.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world of perils—not all of them physical. There are perils of false doctrine, of compromised conscience, of slow spiritual erosion. You cannot avoid all danger. But you can face it the way Paul did: with your eyes on Christ, knowing that suffering for His sake is not a mark of failure but of faithfulness.',
        },
        {
          kind: 'reflection',
          id: 'c11-perils-reflect',
          prompt:
            'What perils do you face in living out your faith? Which ones—external or internal—are most threatening? How can Paul&apos;s confidence in Christ&apos;s faithfulness strengthen you?',
        },
      ],
    },

    /* ─── 2 Corinthians 11:27 — Weariness, Hunger, Thirst, Cold ──────── */
    {
      ref: '2 Corinthians 11:27',
      title: 'Weariness and Want',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              27,
              t('In '),
              hg('weariness and painfulness', 'c11-weariness'),
              t(', in '),
              hg('watchings often', 'c11-watchings'),
              t(', in '),
              hg('hunger and thirst', 'c11-hunger'),
              t(', in '),
              hg('fastings often', 'c11-fastings'),
              t(', in '),
              hg('cold and nakedness', 'c11-cold'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c11-weariness',
          html:
            'Paul is tired. His body aches. The labor has worn him out. This is not metaphorical. This is the exhaustion of a man who has pushed himself beyond normal human limits, again and again, decade after decade.',
        },
        {
          kind: 'commentary',
          id: 'c11-watchings',
          html:
            'Sleeplessness. Paul watched—waited, stayed alert, prayed while others slept. He had too much to do and too little rest. His nights were spent in prayer, in study, in concern for the churches.',
        },
        {
          kind: 'commentary',
          id: 'c11-hunger',
          html:
            'Paul went hungry. He did not always have enough to eat. As a tentmaker, sometimes the work dried up. As a missionary, sometimes there was no hospitality, no support. He endured the physical reality of want.',
        },
        {
          kind: 'commentary',
          id: 'c11-fastings',
          html:
            'Some of Paul&apos;s hunger was chosen—fasting for prayer, fasting for the discipline of the spirit. But the word suggests a pattern, not an isolated moment. He fasted often.',
        },
        {
          kind: 'commentary',
          id: 'c11-cold',
          html:
            'Paul was sometimes without adequate clothing. Cold nights on the road, inadequate shelter, the stripping away of garments after beatings. His body bore the marks of exposure.',
        },
        {
          kind: 'carry',
          html:
            'You may never experience literal hunger or cold in service of the gospel. But you will experience weariness—the tiredness that comes from saying no to comfort, from keeping watch, from pouring yourself out. That weariness is not a sign of failure. It is the trademark of love. A parent who loses sleep for a child, a friend who stays up through the night with someone in crisis, a believer who prays when prayer is difficult—all of these are living out what Paul lived.',
        },
        {
          kind: 'reflection',
          id: 'c11-weariness-reflect',
          prompt:
            'Where are you weary in your faith? Where has service cost you comfort? What would renew your strength—not to avoid the weariness, but to endure it with joy?',
        },
      ],
    },

    /* ─── 2 Corinthians 11:28 — The Care of All the Churches ─────────── */
    {
      ref: '2 Corinthians 11:28',
      title: 'The Care of All the Churches',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              28,
              t('Beside those things that are without, that which cometh upon me daily, '),
              hp('the care of all the churches', 'c11-merimna'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c11-merimna',
          html:
            'This may be the most poignant line in the chapter. Beside the beatings, the shipwrecks, the hunger—there is something heavier. The daily weight of responsibility. Paul carries the churches. He lies awake thinking of their struggles, their temptations, their growth. The weight is constant, unrelenting, invisible to those who only see his external sufferings.',
        },
        {
          kind: 'greek',
          id: 'c11-merimna',
          title: 'Merimna — Anxious Care; Concern',
          script: 'μέριμνα',
          translit: '<strong>merimna</strong> · anxiety; care; solicitous concern; burden of responsibility',
          description:
            'The word suggests a weight, a burden carried daily. Not just one moment of crisis, but an ongoing, daily pressure. Paul wakes thinking of the churches. He sleeps with their names on his lips. They are his constant concern.',
        },
        {
          kind: 'christ',
          id: 'c11-christ-burden',
          title: 'Christ Connection — Jesus Carries the Care of the Church',
          html:
            'Ephesians 5:25—"Husbands, love your wives, even as Christ also loved the church, and gave himself for it." Christ did not merely die once for the church. He carries her continuously. He knows her struggles, her temptations, her growth. And He has committed that same care to His ambassadors—to pastors, to teachers, to every believer who loves His people. You too carry those Christ has given you. That care is not a burden to be resented. It is a privilege to be received.',
        },
        {
          kind: 'carry',
          html:
            'If you bear responsibility for others—children, friends, a community—you know this weight. It is heavier than any physical suffering. It wakes you at night. It accompanies you through the day. And it is holy. You are bearing what Christ bears. You are loving as He loves. That care, that sleeplessness, that weight—it is the very shape of His love made visible through you.',
        },
        {
          kind: 'reflection',
          id: 'c11-merimna-reflect',
          prompt:
            'Who are the people Christ has entrusted to your care? What is the daily weight you carry for them? How might seeing that weight as an echo of Christ&apos;s love transform how you bear it?',
        },
      ],
    },

    /* ─── 2 Corinthians 11:30 — I Will Glory in Mine Infirmities ────── */
    {
      ref: '2 Corinthians 11:30',
      title: 'Glory in the Things That Concern Mine Infirmities',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              30,
              t('If I must needs glory, I will glory of '),
              hp('the things which concern mine infirmities', 'c11-infirmities'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c11-infirmities',
          html:
            'Paul concludes the section with a paradox. He will boast. But his boast will not be in strength, eloquence, comfort, or status. It will be in weakness, in infirmity, in the very things the world considers shameful. This is the inversion of all worldly logic. And it is the heart of the gospel.',
        },
        {
          kind: 'christ',
          id: 'c11-christ-weakness',
          title: 'Christ Connection — Power Made Perfect in Weakness',
          html:
            '2 Corinthians 12:9—"And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me." Paul will continue this thought in the next chapter. But here, the foundation is laid: weakness is not a liability. It is the space where God&apos;s power becomes visible. When you are weak, Christ is strong. When you are empty, He is full. When you are broken, He is whole.',
        },
        {
          kind: 'carry',
          html:
            'The world teaches you to hide your weakness, to project strength, to never let anyone see the cracks. The gospel teaches the opposite. Your weakness is where you meet God. Your infirmity is the space where His power works. Instead of running from your weakness, turn to face it. In that moment, you will find that Christ is already there.',
        },
        {
          kind: 'reflection',
          id: 'c11-infirmities-reflect',
          prompt:
            'What infirmity do you most want to hide? What if you brought it not to hide but to reveal Christ&apos;s power? Where might boasting in weakness actually be boasting in Christ?',
        },
      ],
    },

    /* ─── 2 Corinthians 11:32–33 — Escape from Damascus ──────────────── */
    {
      ref: '2 Corinthians 11:32–33',
      title: 'Escape in a Basket at Damascus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              32,
              t('In Damascus the governor under Aretas the king kept the city of the Damascenes with a garrison, desirous to apprehend me:'),
            ),
            verse(
              33,
              t('And '),
              hg('through a window in a basket', 'c11-basket'),
              t(' was I let down by the wall, and escaped his hands.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c11-basket',
          html:
            'This is Paul&apos;s final credential. And it is humiliating. He was smuggled out of Damascus in a basket—not on a horse, not with dignity, but like contraband. He was rescued by ordinary believers who lowered him out a window in the darkness. By every measure of honor, it is shameful. And Paul uses it to end the catalog of his apostolic sufferings.',
        },
        {
          kind: 'carry',
          html:
            'The Christian life is not always triumphant. Sometimes it is a basket, a window at night, escape in darkness. Sometimes you do not leave victorious. You just leave alive, grateful, lowered by the hands of ordinary people who believed in you when the authorities wanted your head. That is still grace. That is still enough.',
        },
        {
          kind: 'christ',
          id: 'c11-christ-humility',
          title: 'Christ Connection — Humiliation as a Credential of Love',
          html:
            'Philippians 2:8—"And being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross." Christ did not end His earthly ministry in triumph. He ended it stripped naked on a cross, mocked by soldiers, abandoned by His disciples. Paul&apos;s basket echoes Christ&apos;s humiliation. Both prove the same thing: authentic love does not require dignity. It only requires faithfulness.',
        },
        {
          kind: 'artwork',
          matchTitle: /basket|Damascus|escape|window/i,
          caption: '2 Corinthians 11:33 — Escape from Damascus',
        },
        {
          kind: 'reflection',
          id: 'c11-basket-reflect',
          prompt:
            'Where in your faith have you had to retreat in a basket instead of advancing victoriously? What did you learn about Christ&apos;s faithfulness in that humiliation?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For I am jealous over you with godly jealousy: for I have espoused you to one husband, that I may present you as a chaste virgin to Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 11 · Study Guide',
  },

  hasHebrew: false,
};
