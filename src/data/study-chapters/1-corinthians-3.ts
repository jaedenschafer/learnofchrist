import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Corinthians 3 — Foundation: Christ Alone
 *
 * Paul addresses the Corinthian church&apos;s fracture into rival parties around
 * their leaders. Some claimed &ldquo;I am of Paul&rdquo; or &ldquo;I am of Apollos,&rdquo; treating
 * the apostles like competing masters. Paul strips away these illusions with
 * a single truth: Christ alone is the foundation. Every builder—himself,
 * Apollos, any minister—is merely a laborer. The quality of the church depends
 * not on the brilliance of its leaders, but on whether they have built upon
 * the only foundation that will hold.
 */
export const FIRST_CORINTHIANS_3: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 3,

  estimatedMinutes: { beginner: 7, intermediate: 13, deep: 18 },
  topicTags: ['unity', 'love', 'witness', 'wisdom'],
  opener: {
    topical: true,
    caption: '1 Corinthians 3',
  },
  intros: [
    'The Corinthian believers had begun to measure spiritual maturity by their loyalty to favorite teachers. Some followed Paul, others Apollos, others Cephas. This was not mere tribal preference—it was a denial of the gospel itself. If your allegiance is to a pastor, a teacher, a writer, or any human leader, you have missed the only foundation that matters: Christ.',
    'Paul&apos;s remedy is neither flattery nor false humility. He speaks to them as a wise masterbuilder who has laid one foundation and watched others build upon it. That day is coming—Paul says it plainly—when fire will test every builder&apos;s work. What survives? Only what was built on Christ, with integrity, with care, with love. Everything else burns.',
    'This is 1 Corinthians 3&apos;s gift to us: a clear-eyed vision of leadership, judgment, and the temple. Humans who lead God&apos;s people are servants, not masters. Our work will be tested. And the church itself—you, your congregation, the scattered Body of Christ—is the very temple where God&apos;s Spirit dwells.',
  ],

  sections: [
    /* ─── 1 Corinthians 3:1–3 — Babes in Christ ──────────────────────────── */
    {
      ref: '1 Corinthians 3:1–3',
      title: 'Babes in Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              1,
              t('And I, brethren, could not speak unto you '),
              hg('as unto spiritual', 'cor3-spiritual'),
              t(', but as unto '),
              hy('carnal', 'greek-sarkikos'),
              t(', even as unto '),
              hy('babes in Christ', 'greek-nepios'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-spiritual',
          html:
            'Paul is not insulting the Corinthians. He is naming a gap: they have Christ, but they are still thinking like the unbelieving world. A baby has human life; a baby cannot yet handle solid food. The Corinthians have the Spirit, but their disputes reveal they are still nursing on flesh—envying, quarreling, dividing themselves up by human loyalties.',
        },
        {
          kind: 'greek',
          id: 'greek-sarkikos',
          title: 'Sarkikos — Fleshly, Carnal',
          script: 'σάρκικος',
          translit: '<strong>sarkikos</strong> · of the flesh; operating by worldly standards; immature',
          description:
            'Sarkikos is not just the body—it is the worldly way of thinking. The Corinthians are measuring greatness as the pagans do: by charisma, eloquence, faction loyalty. Paul calls this infantile. A carnal mindset cannot see that all apostles are servants.',
        },
        {
          kind: 'greek',
          id: 'greek-nepios',
          title: 'Nepios — Infant, Babe',
          script: 'νήπιος',
          translit: '<strong>nepios</strong> · an infant; one not yet mature',
          description:
            'Not an insult—a description. Nepios is how Paul describes anyone who has not yet grown up spiritually. The Corinthians can believe in Christ and still be nepios, still thinking like infants about how leadership works.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              2,
              t('I have fed you with '),
              hg('milk, and not with meat', 'cor3-milk-meat'),
              t(': for hitherto ye were not able to bear it, neither yet now are ye able.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-milk-meat',
          html:
            'Milk and meat. Paul fed them the basics—Christ crucified, Christ risen. But they are still not ready for solid food: the deep wisdom of how God works through weakness, how suffering shapes the church, how every leader is expendable but Christ is eternal. They would rather squabble over whose teacher is best.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              3,
              t('For ye are yet carnal: for whereas there is among you '),
              hg('envying, and strife, and divisions', 'cor3-evidence'),
              t(', are ye not carnal, and walk as men?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-evidence',
          html:
            'Here is the evidence: envy, strife, divisions. These are the works of the flesh Paul will list in Galatians 5. They are not the fruit of the Spirit. A carnal mind sees one apostle as better than another and builds a faction. The Spirit would see all servants of Christ, all working toward the same end.',
        },
        {
          kind: 'carry',
          html:
            'The question is not whether you are a believer. It is whether you are still feeding on milk when you could be taking meat. Are you still dividing yourself by human loyalties—this teacher, that pastor, this author, that leader? Or have you grown enough to see that every faithful servant is building the same building, on the same foundation? What would it look like to be weaned from the human?',
        },
        {
          kind: 'reflection',
          id: 'cor3-1-milk',
          prompt:
            'What would it mean for you to move from milk to meat—to understand spiritual leaders not as masters but as servants, and Christ alone as your foundation?',
        },
      ],
    },

    /* ─── 1 Corinthians 3:4–9 — Planters and Waterers ──────────────────── */
    {
      ref: '1 Corinthians 3:4–9',
      title: 'Planters and Waterers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              4,
              t('For while one saith, I am of Paul; and another, I am of Apollos; are ye not carnal?')
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              5,
              t('Who then is Paul, and who is Apollos, but ministers by whom ye believed, even as the Lord gave to every man?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-who-are-they',
          html:
            'This is the hinge. Paul does not ask, &ldquo;Who is Paul?&rdquo; as if expecting an answer that exalts him. He asks it as a deflation. They are ministers—servants, nothing more. Instruments. Even their faith came through these men &ldquo;as the Lord gave to every man.&rdquo; The Lord is the giver. The apostle is just the vessel.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              6,
              t('I have '),
              hg('planted', 'cor3-planted'),
              t(', Apollos '),
              hg('watered', 'cor3-watered'),
              t('; but '),
              hp('God gave the increase', 'christ-increase'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-planted',
          html:
            'Paul planted—he brought the gospel to Corinth, broke the soil, laid the seed. It was labor. It required wisdom and courage. But it was planting. Not the harvest.',
        },
        {
          kind: 'commentary',
          id: 'cor3-watered',
          html:
            'Apollos came later and watered. The work continued. He too labored, cared for the young church, nourished the seed. But like Paul, he was only doing one task in a sequence.',
        },
        {
          kind: 'christ',
          id: 'christ-increase',
          title: 'Christ Connection — God Alone Gives Growth',
          html:
            'But only God gave the increase. Jesus said it to His disciples: &ldquo;I have planted you, I have watered you, but My Father gives the growth&rdquo; (cf. John 15:1–5). Every revival, every conversion, every deepening of faith is the work of the Spirit. The apostle who sees his own ego in the growth has lost sight of the Maker. Paul kept his sight. He labored. He let God do the growing.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              7,
              t('So then neither is he that planteth any thing, neither he that watereth; but God that giveth the increase.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-nobody-neither',
          html:
            'This is a radical statement. Neither the planter is anything. Neither the waterer is anything. From the perspective of eternity, of the kingdom, of what actually matters—the laborers are not the story. God&apos;s work is the story.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              8,
              t('Now he that planteth and he that watereth are '),
              hg('one', 'cor3-one'),
              t(': and every man shall receive his own reward according to his own labour.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-one',
          html:
            'One. Not divided into factions. The planter and waterer are one in purpose, one in their Lord, one team. Each will receive reward—not for making himself famous, but for his faithfulness, his labor in God&apos;s field. That reward comes from God, not from the applause of the divided church.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              9,
              t('For we are '),
              hp('labourers together with God', 'cor3-laborers-together'),
              t(': ye are God&apos;s '),
              hg('husbandry', 'greek-georgion'),
              t(', ye are God&apos;s '),
              hg('building', 'cor3-building'),
              t('.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-georgion',
          title: 'Georgion — Field, Cultivated Land',
          script: 'γεώργιον',
          translit: '<strong>georgion</strong> · a field; land being cultivated',
          description:
            'The church is not a possession to be owned by a faction leader. It is God&apos;s field—land He is cultivating. The Corinthians are not Paul&apos;s or Apollos&apos; harvest. They are God&apos;s harvest, growing on His terms, by His labor.',
        },
        {
          kind: 'commentary',
          id: 'cor3-building',
          html:
            'And you are God&apos;s building. This shifts the image from farming to architecture. Two metaphors in one sentence: you are a field being tended, and you are a structure being built. Both images say the same thing: you are God&apos;s work, not the property of any human leader. Corinth itself was filled with temples and public buildings[res:ascsa-corinth-temple]—Paul&apos;s audience would see in his metaphor a reflection of the architectural ambitions and sacred structures surrounding them.',
        },
        {
          kind: 'christ',
          id: 'cor3-laborers-together',
          title: 'Christ Connection — Co-laborers in God&apos;s Kingdom',
          html:
            'To be &ldquo;labourers together with God&rdquo; is to participate in God&apos;s eternal work. Jesus said to His disciples, &ldquo;My meat is to do the will of him that sent me, and to finish his work&rdquo; (John 4:34). This is not servitude—it is the highest dignity. You are not an employee; you are a partner in God&apos;s harvest, God&apos;s building. Every day you show up, you are standing beside the Father, doing His work.',
        },
        {
          kind: 'carry',
          html:
            'You are the field God is tending. You are the building God is constructing. This means no teacher or pastor owns you. This means no author or influencer should become your North Star. You belong to God&apos;s project, not to any faction. That is freedom.',
        },
        {
          kind: 'reflection',
          id: 'cor3-2-whose',
          prompt:
            'In your spiritual life, whose field do you feel like? Whose building? How does Paul&apos;s vision—that you are God&apos;s husbandry, God&apos;s building—change the way you think about leadership?',
        },
      ],
    },

    /* ─── 1 Corinthians 3:10–11 — The Foundation Laid ────────────────────── */
    {
      ref: '1 Corinthians 3:10–11',
      title: 'The Foundation Already Laid',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              10,
              t('According to the grace of God which is given unto me, as a '),
              hg('wise masterbuilder', 'cor3-master-builder'),
              t(', I have '),
              hg('laid the foundation', 'cor3-foundation-laid'),
              t(', and another buildeth thereon. But let every man take heed how he buildeth thereupon.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-master-builder',
          html:
            'Paul does not boast in his own wisdom. He says this wisdom is given by God&apos;s grace. A wise masterbuilder knows his one job: to lay the foundation right. Everything built afterward depends on it. Paul&apos;s apostolic work at Corinth was to establish that foundation so securely that it would hold.',
        },
        {
          kind: 'commentary',
          id: 'cor3-foundation-laid',
          html:
            'He has laid it. It is done. Now others build upon it. And Paul is not territorial about this—&ldquo;another buildeth thereon.&rdquo; Apollos came after. Timothy will come. The church will grow and mature under many builders. But the foundation? That is set. Immovable.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              11,
              t('For '),
              hp('other foundation can no man lay', 'christ-sole-foundation'),
              t(' than that is laid, which is '),
              hp('Jesus Christ', 'christ-sole-foundation'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-no-other',
          html:
            'This is the thesis. Not Paul. Not Apollos. Not the law, not philosophy, not human achievement. Jesus Christ alone. No other foundation can be laid. It is not an option to choose a different Christ—a more gentle one, a more rational one, a Christ without a cross. This foundation was laid once and for all. Every believer, every church, every true building rests on it.',
        },
        {
          kind: 'christ',
          id: 'christ-sole-foundation',
          title: 'Christ Connection — The Chief Cornerstone',
          html:
            'Paul echoes Isaiah 28:16: &ldquo;Therefore thus saith the Lord God, Behold, I lay in Zion for a foundation a stone, a tried stone, a precious corner stone, a sure foundation.&rdquo; Jesus is that Stone. Ephesians 2:20 makes it explicit: Christ is &ldquo;the chief corner stone,&rdquo; and the apostles and prophets are built upon Him. The foundation is singular. Christ is not one option among many. He is <em>the</em> foundation—tried, proven, eternal.',
        },
        {
          kind: 'carry',
          html:
            'If your faith is built on a teaching, you are unsettled. If it rests on a feeling, it will shake. If it clings to a person, that person will fail you. The only building that will stand the fire is the one built on Christ—on His cross, His resurrection, His Word. Everything you have constructed on any other ground will fall.',
        },
        {
          kind: 'reflection',
          id: 'cor3-3-foundation',
          prompt:
            'What have you been building your life upon? Is it Christ, or something that looks sturdier because it&apos;s more visible to you right now?',
        },
      ],
    },

    /* ─── 1 Corinthians 3:12–15 — Gold, Silver, Wood, Hay ──────────────── */
    {
      ref: '1 Corinthians 3:12–15',
      title: 'Materials and Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              12,
              t('Now if any man build upon this foundation '),
              hg('gold, silver, precious stones', 'cor3-enduring'),
              t(', '),
              hg('wood, hay, stubble', 'cor3-combustible'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-enduring',
          html:
            'Gold, silver, precious stones. These materials endure. They do not rot, do not burn. In the metaphor, they represent work done with integrity, with love, with faithfulness. Work that costs the builder something. Sacrifice. Care.',
        },
        {
          kind: 'commentary',
          id: 'cor3-combustible',
          html:
            'Wood, hay, stubble. Fuel. These burn easily. In the metaphor, they represent work done for show, for personal glory, for advancement, for the applause of the moment. Good-looking from a distance. Impressive while they last. But flammable.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              13,
              t('Every man&apos;s work shall be made manifest: for '),
              hg('the day shall declare it', 'cor3-the-day'),
              t(', because it shall be '),
              hy('revealed by fire', 'greek-puroo'),
              t('; and the fire shall try every man&apos;s work of what sort it is.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-the-day',
          html:
            'The day—judgment day. Paul is not speaking theoretically. One day, fire. One day, testing. Everything hidden will be revealed. Every motive will be exposed. The work a pastor did for vanity? Burned. The sermon given to impress the crowd? Ash. The act of service done in secret, with love, at cost to himself? Standing.',
        },
        {
          kind: 'greek',
          id: 'greek-puroo',
          title: 'Pyroo — To Test by Fire',
          script: 'πυρόω',
          translit: '<strong>pyroo</strong> · to set on fire; to test by burning',
          description:
            'Fire tests what is real. In metallurgy, fire burns away the dross and leaves only the pure metal. In Paul&apos;s vision, fire is the ultimate test. Not popularity, not success, not the applause of the church. Fire. Only what was built for Christ, with integrity, survives.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              14,
              t('If any man&apos;s work abide which he hath built thereupon, he shall receive a reward.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-reward',
          html:
            'A reward awaits those whose work endures. Not because they are famous. Not because the church remembers them. Not because their book sold well. A reward because they built on Christ, with Christ&apos;s heart, in Christ&apos;s way.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              15,
              t('If any man&apos;s work shall be burned, he shall suffer loss: but he himself shall be saved; yet so as by fire.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-saved-yet-fire',
          html:
            'This is Paul&apos;s mercy. A builder can build on the right foundation—Christ—with the wrong materials—hay and stubble. The foundation holds. The believer is saved. But the work burns away. He enters eternity having lost what he built, because it was built for the wrong reasons. Saved, but barely. Saved, but ashamed.',
        },
        {
          kind: 'carry',
          html:
            'Examine the work you are doing. Are you building for Christ, or for yourself? Are you pouring into people because you love them, or because you want to be admired? Are you faithful in secret, or showy in public? The fire will know the difference. And you will know it too.',
        },
        {
          kind: 'reflection',
          id: 'cor3-4-materials',
          prompt:
            'What work are you building that you think would survive the fire? What might you be building that would burn? What needs to change?',
        },
      ],
    },

    /* ─── 1 Corinthians 3:16–17 — Ye Are the Temple ────────────────────── */
    {
      ref: '1 Corinthians 3:16–17',
      title: 'Ye Are the Temple of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              16,
              t('Know ye not that ye are '),
              hp('the temple of God', 'christ-temple'),
              t(', and that '),
              hg('the Spirit of God dwelleth in you', 'cor3-spirit-dwells'),
              t('?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-spirit-dwells',
          html:
            'Paul shifts the image. They are not just a field God is tending or a building God is constructing. They <em>are</em> the building. The Corinthians themselves are the temple. The Spirit lives in them—not in a stone temple, not in Jerusalem, not in any human-made place. In <em>you.</em> In the gathered church. The Greek word for the inner temple chamber is naos[res:perseus-naos-lexicon], and Paul claims that each believer and the assembled church fills that sacred space.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              17,
              t('If any man defile the temple of God, '),
              hg('him shall God destroy', 'cor3-defiled'),
              t('; for the temple of God is holy, which temple ye are.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-defiled',
          html:
            'To defile the temple is to corrupt the church. To poison the unity, to spread division, to use the church for personal power, to prey on believers—these things defile. And Paul does not soften the warning. God takes this seriously. A temple is meant to be holy, untouched, pure. Those who defile it face God&apos;s judgment.',
        },
        {
          kind: 'christ',
          id: 'christ-temple',
          title: 'Christ Connection — The Living Temple Indwelt by Spirit',
          html:
            'Ephesians 2:21–22 makes the full connection: believers are &ldquo;builded together for an habitation of God through the Spirit.&rdquo; Christ is the chief corner stone, the apostles and prophets the foundation, and all believers together the temple. The Spirit makes this temple alive. It is not an empty building—it is alive with His presence. When you defile the church, you defile the place where God dwells.',
        },
        {
          kind: 'carry',
          html:
            'Your church is holy ground. The believers sitting next to you are the temple of the Holy Spirit. When you speak a cutting word, you defile the temple. When you harbor division, you wound the place where God&apos;s Spirit dwells. When you serve the church in love, when you protect its unity, when you build up the weak, you are keeping holy what is holy. You are a priest, and the church is your sanctuary.',
        },
        {
          kind: 'reflection',
          id: 'cor3-5-temple',
          prompt:
            'If you truly believed that your church is the temple of God and the Spirit dwells in it, how would you treat it differently? How would you treat the believers in it?',
        },
      ],
    },

    /* ─── 1 Corinthians 3:18–23 — The Wisdom of This World ─────────────── */
    {
      ref: '1 Corinthians 3:18–23',
      title: 'All Things Are Yours',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              18,
              t('Let no man deceive himself. If any man among you seemeth to be wise in this world, let him become a fool, that he may be wise.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-wise-fool',
          html:
            'The Corinthians measured wisdom by the standards of the world: eloquence, rhetoric, charisma, social status. Paul is saying: that is not wisdom. It is deception. Real wisdom looks like foolishness to the world. It is the wisdom of the cross.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              19,
              t('For '),
              hg('the wisdom of this world is foolishness with God', 'cor3-wisdom-inverted'),
              t('. For it is written, He taketh the wise in their own craftiness.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-wisdom-inverted',
          html:
            'The inversion is complete. What the world calls wise, God calls foolish. The clever schemes, the worldly ambition, the carefully calculated image—God sees through all of it. And those who trust in their own cleverness will be caught by it. Paul quotes Job 5:13[res:sefaria-job-5-13]: &ldquo;He taketh the wise in their own craftiness.&rdquo;',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              20,
              t('And again, The Lord knoweth the thoughts of the wise, that they are vain.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-vain-thoughts',
          html:
            'Vain. Empty. The Lord knows that the wise—the self-confident, the world-wise—are building on air. Their thoughts lead nowhere. Their schemes hollow out. Only what is built on Christ, with the wisdom of God, endures. Paul quotes Psalm 94:11[res:sefaria-psalm-94-11] to show that Scripture itself teaches this inversion of human judgment.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              21,
              t('Therefore let no man glory in men. For all things are yours;')
            ),
            verse(
              22,
              t('Whether Paul, or Apollos, or Cephas, or the world, or life, or death, or things present, or things to come; all are yours;')
            ),
            verse(
              23,
              t('And ye are Christ&apos;s; and Christ is God&apos;s.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-all-yours',
          html:
            'Paul pulls the chapter to its conclusion. Do not glory in men. Do not say &ldquo;I am of Paul.&rdquo; Why? Because all things are yours. All the apostles. The whole world. Life and death. Present and future. You do not belong to them; they belong to you. You inherit everything. But only because you belong to Christ. And Christ belongs to God.',
        },
        {
          kind: 'carry',
          html:
            'The chain of belonging runs up to God Himself. You are Christ&apos;s. Christ is God&apos;s. Which means you are not the possession of any faction, any church, any movement. You are free. Free to learn from Paul without worshiping him. Free to receive from Apollos without becoming his partisan. Free because you belong to Christ, and Christ answers to no one but the Father.',
        },
        {
          kind: 'reflection',
          id: 'cor3-6-all-yours',
          prompt:
            'If all things are yours—Paul, Apollos, the world, life, death—what does it mean to you right now? What fear or resentment could you release, knowing you already inherit everything?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'For other foundation can no man lay than that is laid, which is Jesus Christ. All things are yours, and ye are Christ&apos;s; and Christ is God&apos;s.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 3 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-job-5-13',
      kind: 'study',
      source: 'Sefaria',
      label: 'Job 5:13 — Quotation in 1 Corinthians 3:19',
      url: 'https://www.sefaria.org/Job.5.13',
      description: 'The Hebrew Bible passage quoted by Paul to demonstrate that God&apos;s wisdom inverts worldly cleverness.',
    },
    {
      id: 'sefaria-psalm-94-11',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 94:11 — Quotation in 1 Corinthians 3:20',
      url: 'https://www.sefaria.org/Psalms.94.11',
      description: 'The psalmist&apos;s declaration that God knows all human schemes are vain, echoed in Paul&apos;s rebuke of worldly wisdom.',
    },
    {
      id: 'ascsa-corinth-temple',
      kind: 'archaeology',
      source: 'ASCSA',
      label: 'Corinth Temple Archaeology',
      url: 'https://www.ascsa.net/projects/corinth/',
      description: 'Excavation and architectural evidence of temple structures in Roman Corinth, illuminating the temple metaphor Paul employs.',
    },
    {
      id: 'perseus-naos-lexicon',
      kind: 'lexicon',
      source: 'Perseus Scaife',
      label: 'Naos — Greek Temple Terminology',
      url: 'https://scaife.perseus.org/dictionary/ls/naos/',
      description: 'Lexical entry for the Greek term naos (inner temple chamber), grounding Paul&apos;s claim that believers are God&apos;s naos.',
    },
  ],
};
