import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Jude — the entire letter from Jesus' brother.
 *
 * A fierce defense of the faith once delivered, written against false teachers
 * who have crept in unawares. 25 verses. One of the highest doxologies in Scripture.
 */
export const JUDE_1: RichChapterContent = {
  bookSlug: 'jude',
  bookName: 'Jude',
  chapter: 1,

  estimatedMinutes: { 5: 9, 10: 14, 15: 19 },
  intros: [
    'Jude is the only letter in the New Testament from one of Jesus\' brothers. James wrote a letter too, but Jude was Jesus\' actual sibling — raised in the same house, watching Him grow up. That proximity to Jesus gives Jude\'s words a certain weight. He knows what true faith looks like because he has seen it. And he is writing to sound the alarm.',
    'The alarm is about false teachers — men who have slipped into the church unnoticed, twisting grace into lawlessness and denying the lordship of Christ. Jude\'s letter is short and fierce. He marshals three Old Testament examples, names the danger explicitly, urges the church to stand. And then he ends with one of the highest doxologies in all of Scripture — a five-line ascription of glory to Christ so dense with grace it almost defies reading. The letter is a call to contend for the faith, and a reminder that the one who holds us is completely able.',
  ],

  opener: {
    matchTitle: /letter|epistle/i,
    matchArtist: /rembrandt|caravaggio/i,
    caption: 'The Letter of Jude',
  },

  bottomShare: {
    label: 'Share Jude 1',
    quote:
      'Jude calls the church to contend for the faith once delivered to the saints. His final words are a doxology: "Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy, To the only wise God our Saviour, be glory and majesty, dominion and power, both now and ever. Amen."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jude 1 · Study Guide',
  },

  sections: [
    /* ─── Jude 1:1 — Greeting ────────────────────────────────────────────── */
    {
      ref: 'Jude 1:1',
      title: 'The Servant of Jesus Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('Jude, the '),
                hy('servant', 'greek-doulos'),
                t(' of Jesus Christ, and '),
                hp('brother of James', 'christ-brother'),
                t(', to them that are '),
                hg('sanctified by God the Father', 'c-sanctified'),
                t(', and preserved in Jesus Christ, and called: Mercy unto you, and peace, and love, be multiplied.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'greek-doulos',
          title: 'Doulos — "servant"',
          script: 'δοῦλος',
          translit: '<strong>doulos</strong> · a slave, one in complete submission',
          description:
            'Jude opens not as James\' brother, not as apostolic authority, but as a <em>doulos</em> — a slave wholly owned by Christ. The biological relationship fades. The spiritual alignment is everything.',
        },
        {
          kind: 'commentary',
          id: 'c-sanctified',
          html:
            'The church is described with three words: <em>sanctified</em> (set apart), <em>preserved</em> (kept safe), and <em>called</em> (summoned into relationship). These are not accomplishments the church has achieved. They are the work of the Father and Christ already done. Jude writes to remind them what they are.',
        },
        {
          kind: 'christ',
          id: 'christ-brother',
          title: 'Christ Connection — The Brother',
          html:
            'Jude is Jesus\' brother — they shared a mother, Mary. Yet Jude calls himself a servant of Jesus. After the resurrection, the siblings of Jesus became believers (John 7:5 implies they didn\'t believe during His ministry). Jude\'s shift from family member to \'<em>doulos</em>\' is the shift every believer must make: knowing Christ not by blood but by surrender. Jesus told His disciples, "Whosoever shall do the will of my Father… the same is my brother, and sister, and mother" (Matt. 12:50). Jude has become a brother in that deeper sense.',
        },
        {
          kind: 'carry',
          html:
            'Jude was Jesus\' actual sibling and yet named himself a servant. There is something freeing in that — the people closest to the spiritual authority we respect are often the ones who bow lowest. If Jude, who grew up with Jesus, leads with \'<em>doulos</em>,\' the ground beneath your own faith shifts. You are not asked to be impressive. You are asked to be owned.',
        },
      ],
    },

    /* ─── Jude 1:2–4 — "Earnestly contend for the faith" ─────────────────── */
    {
      ref: 'Jude 1:2–4',
      title: 'Earnestly Contend for the Faith Once Delivered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 2,
              spans: [
                t('Beloved, when I gave all diligence to write unto you of the common salvation, it was needful for me to write unto you, and '),
                hp('exhort', 'greek-parakaleō'),
                t(' you that ye should '),
                hy('earnestly contend', 'greek-epagonizomai'),
                t(' for the faith which was once delivered unto the saints.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'greek-parakaleō',
          title: 'Parakaleō — "exhort"',
          script: 'παρακαλέω',
          translit: '<strong>parakaleō</strong> · to call alongside, encourage, urge',
          description:
            'The same word Paul uses in Romans 12:1: "I beseech you therefore." It is a humble summons — not an order but an intimate appeal.',
        },
        {
          kind: 'greek',
          id: 'greek-epagonizomai',
          title: 'Epagōnizomai — "earnestly contend"',
          script: 'ἐπαγωνίζομαι',
          translit: '<strong>epagōnizomai</strong> · to struggle against, fight for, compete intensely',
          description:
            'The word carries the weight of an athlete or soldier. To contend for the faith is not passive. It requires effort, vigilance, and courage.',
        },
        {
          kind: 'commentary',
          id: 'c-once-delivered',
          html:
            'The faith was "once delivered." Not evolving. Not up for negotiation. Delivered by the apostles as a deposit. The church\'s job is not to improve it or soften it, but to hold it fast, guard it, and pass it on unchanged.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 3,
              spans: [
                t('For there are certain men '),
                hy('crept in unawares', 'greek-parareō'),
                t(', who were before of old ordained to this condemnation, ungodly men, turning the '),
                hy('grace', 'c-charis'),
                t(' of our God into '),
                hg('lasciviousness', 'greek-aselgeia'),
                t(', and denying the only Lord God, and our Lord Jesus Christ.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'greek-parareō',
          title: 'Parareō — "crept in unawares"',
          script: 'παραρέω',
          translit: '<strong>parareō</strong> · to slip in, flow in, enter by stealth',
          description:
            'These are not open enemies with credentials. They slip in quietly, like water finding a crack. By the time the church notices, they have already spread.',
        },
        {
          kind: 'commentary',
          id: 'c-charis',
          html:
            'Grace (<em>charis</em>) is the free gift of God\'s favor in Christ. These false teachers take that grace — "if God has already forgiven us, we are free" — and twist it into license to sin. They confuse freedom from the law with freedom to disobey God. It is the abuse Jude calls "lasciviousness."',
        },
        {
          kind: 'greek',
          id: 'greek-aselgeia',
          title: 'Aselgeia — "lasciviousness"',
          script: 'ἀσέλγεια',
          translit: '<strong>aselgeia</strong> · unbridled lust, shameless indulgence, excess',
          description:
            'The word refers not to private sin but to brazen, unashamed behavior. These teachers are not quietly stumbling; they are openly flaunting their disobedience.',
        },
        {
          kind: 'christ',
          id: 'christ-only-lord',
          title: 'Christ Connection — The Only Lord Denied',
          html:
            'The central heresy Jude identifies is the denial of "the only Lord God, and our Lord Jesus Christ." These teachers are trying to have Jesus as a teacher or moral example while denying His exclusive lordship. Paul makes the same point: "Jesus Christ is Lord, to the glory of God the Father" (Phil. 2:11). A Jesus who is not Lord is not Jesus at all.',
        },
        {
          kind: 'carry',
          html:
            'Jude doesn\'t describe heresy as outright denial. He describes it as a creep — truth gradually loosened, grace twisted into permission to sin, Christ\'s lordship assumed away. The contending he asks for is not always a public battle. Sometimes it is a steady return: to the apostles\' teaching, to the boundaries of Scripture, to the actual lordship of Christ over your own life. Where is the grace you have received being twisted into permission to sin?',
        },
        {
          kind: 'reflection',
          id: 'contend-faith',
          prompt:
            'What does "earnestly contend for the faith" look like in your own context? Where are you called to hold fast to what was once delivered?',
        },
      ],
    },

    /* ─── Jude 1:5–10 — Three OT Examples and Michael ───────────────────── */
    {
      ref: 'Jude 1:5–10',
      title: 'Remember: The Lord, the Angels, Sodom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 5,
              spans: [
                t('I will therefore put you in remembrance, though ye once knew this, how that '),
                hg('the Lord', 'c-lord-saved'),
                t(' having saved the people out of the land of Egypt, afterward destroyed them that believed not.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lord-saved',
          html:
            'The same God who delivered Israel from Egypt later destroyed those who rejected Him in the wilderness. Salvation and judgment are not opposites in Scripture. They are the same God, the same standard, operating at different moments.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 6,
              spans: [
                t('And the '),
                hg('angels which kept not their first estate', 'c-angels-fall'),
                t(', but left their own habitation, he hath reserved in everlasting chains under darkness unto the judgment of the great day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-angels-fall',
          html:
            'Jude refers to the rebellion of angels — the same event Peter and the author of Hebrews allude to. Some angels abandoned their appointed place and station. God bound them in chains of darkness until judgment. The point is clear: rebellion has consequences, even for beings of immense power.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 7,
              spans: [
                t('Even as Sodom and Gomorrha, and the cities about them in like manner, giving themselves over to '),
                hy('fornication', 'c-sexual-sin'),
                t(', and going after strange flesh, are set forth for an example, suffering the vengeance of eternal fire.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sexual-sin',
          html:
            'Sodom and Gomorrah are Jude\'s third example of judgment. The cities rejected God\'s order for sexuality and were destroyed. Jude names this not to condemn individuals struggling with temptation, but to show the logic: when a city, a community, or a church collectively abandons God\'s boundaries, judgment follows.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 8,
              spans: [
                t('Likewise also these filthy dreamers defile the flesh, despise '),
                hg('dominion', 'greek-kyriotes'),
                t(', and speak evil of '),
                hp('dignities', 'c-doxas'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'greek-kyriotes',
          title: 'Kyriotes — "dominion"',
          script: 'κυριότης',
          translit: '<strong>kyriotes</strong> · lordship, authority, dominion',
          description:
            'These teachers despise lordship itself — God\'s dominion over creation, Christ\'s authority, any authority structure. It is anarchic rebellion dressed up as freedom.',
        },
        {
          kind: 'commentary',
          id: 'c-doxas',
          html:
            'The word "dignities" translates <em>doxas</em> — glories or honorable positions. These false teachers speak evil of authorities and delegated powers. They scorn any chain of command, whether earthly or heavenly.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 9,
              spans: [
                t('Yet '),
                hy('Michael the archangel', 'c-michael'),
                t(', when contending with the devil he disputed about the body of Moses, '),
                hg('durst not bring against him a railing accusation', 'c-michael-restraint'),
                t(', but said, The Lord rebuke thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-michael',
          html:
            'Michael appears in Daniel as a high angelic prince. Even he, with power far beyond human comprehension, does not bring a "railing accusation" against the devil. He appeals to the Lord.',
        },
        {
          kind: 'commentary',
          id: 'c-michael-restraint',
          html:
            'This is extraordinary restraint. Michael does not curse the devil or fling accusations. He says simply, "The Lord rebuke thee." He submits his grievance to a higher authority — God Himself. The contrast is about to become clear.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 10,
              spans: [
                t('But these speak '),
                hy('evil of things they understand not', 'c-ignorant-speech'),
                t(': but what they know naturally, as brute beasts, in those things they corrupt themselves.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ignorant-speech',
          html:
            'The false teachers have none of Michael\'s humility. They speak with authority about spiritual realities they do not understand. They rely on instinct and appetite rather than submission to God\'s revealed truth.',
        },

        {
          kind: 'carry',
          html:
            'Jude names three moments when God\'s people or His creation rebelled, and in each case judgment followed. He is not threatening you. He is reminding you: the moral order of creation is real. Disobedience has consequences. And even Michael the archangel, facing evil itself, deferred to God rather than taking authority into his own hands. Where in your own life are you tempted to step outside the boundaries God has set? Where could you, like Michael, simply say, "The Lord rebuke thee" and let God handle it?',
        },

        {
          kind: 'reflection',
          id: 'examples-judgment',
          prompt:
            'Egypt, the fallen angels, Sodom. What do these three examples share? How does knowing that God judges rebellion change how you see the false teachers Jude is warning about?',
        },
      ],
    },

    /* ─── Jude 1:11–13 — The Way of Cain, Balaam, Korah ─────────────────── */
    {
      ref: 'Jude 1:11–13',
      title: 'The Way of Cain, the Error of Balaam, the Gainsaying of Korah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 11,
              spans: [
                t('Woe unto them! for they have gone in '),
                hg('the way of Cain', 'c-cain'),
                t(', and ran greedily after '),
                hg('the error of Balaam', 'c-balaam'),
                t(' for reward, and perished in '),
                hg('the gainsaying of Core', 'c-core'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cain',
          html:
            'Cain brought a sacrifice to God, but it was not the sacrifice God asked for. Abel obeyed; Cain presumed. Cain\'s "way" is to worship according to your own preference rather than God\'s instruction. The false teachers have done the same: worshiped their own way, set up their own authority.',
        },
        {
          kind: 'commentary',
          id: 'c-balaam',
          html:
            'Balaam was a prophet who knew God\'s will but was willing to curse God\'s people for money. His "error" was not ignorance but greed — letting reward dictate doctrine. The false teachers, Jude says, follow the same path: they teach what their audiences want to hear because it brings them influence or money.',
        },
        {
          kind: 'commentary',
          id: 'c-core',
          html:
            'Korah rebelled against Moses\' authority, claiming that all God\'s people were equally holy and didn\'t need leadership. God swallowed him and his followers alive. The "gainsaying" (contradiction) of Korah is the refusal to submit to authority — spiritual or otherwise.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 12,
              spans: [
                t('These are spots in your feasts of charity, when they feast with you, feeding themselves without fear: clouds they are without water, carried about of winds; '),
                hg('trees whose fruit withereth', 'c-unfruitful'),
                t(', without fruit, twice dead, plucked up by the roots.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Raging waves of the sea, foaming out their own shame; wandering stars, to whom is reserved the blackness of darkness for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-unfruitful',
          html:
            'Jude uses a cascade of images — all pointing to the same reality. These teachers are stains on fellowship meals, clouds with no rain, trees with no fruit. Each image is of something that promises but does not deliver. They appear to be part of the church but are spiritually sterile.',
        },

        {
          kind: 'carry',
          html:
            'Three Old Testament figures represent three kinds of false teaching: Cain (doing it your way), Balaam (following the money), and Korah (refusing authority). As you look at your own heart, where are you most tempted? To worship on your own terms? To compromise for comfort or approval? To resist the authority God has placed over you? Jude names these not to shame you but to sharpen your sight.',
        },

        {
          kind: 'reflection',
          id: 'three-ways',
          prompt:
            'The way of Cain, the error of Balaam, the gainsaying of Korah — which of these three temptations is closest to your own struggle right now?',
        },
      ],
    },

    /* ─── Jude 1:14–20 — Enoch's Prophecy & Building Yourselves Up ───────── */
    {
      ref: 'Jude 1:14–20',
      title: 'Enoch Prophesied; Build Yourselves Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 14,
              spans: [
                t('And '),
                hg('Enoch also, the seventh from Adam', 'c-enoch'),
                t(', prophesied of these, saying, Behold, the '),
                hp('Lord cometh with ten thousands of his saints', 'christ-parousia'),
                t(','),
              ],
            },
            {
              number: 15,
              spans: [
                t('To execute judgment upon all, and to convince all that are ungodly among them of all their ungodly deeds which they have ungodly committed, and of all their hard speeches which ungodly sinners have spoken against him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-enoch',
          html:
            'Enoch was "the seventh from Adam," the great-great-great-great-grandfather of Noah. He walked so closely with God that he was taken up without dying (Genesis 5:24). Jude quotes from the book of Enoch (an extra-biblical text) as prophetic. Enoch saw the coming judgment and recorded it.',
        },
        {
          kind: 'christ',
          id: 'christ-parousia',
          title: 'Christ Connection — The Lord Comes with Ten Thousands of Saints',
          html:
            'Enoch\'s vision is of Christ returning in judgment. "When the Son of man shall come in his glory, and all the holy angels with him" (Matt. 25:31). The return is not in private; it is public, powerful, and attended by all the saints of all the ages. This is the climax every Christian waits for — the day when every godless deed is exposed and Christ returns as King.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 16,
              spans: [
                t('These are murmurers, complainers, walking after their lusts; and their mouth speaketh great swelling words, having men\'s persons in admiration because of advantage.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-false-markers',
          html:
            'Jude describes the marks of the false teachers: murmuring (discontent), complaining, following their own desires, speaking boastfully, flattering others for gain. They use charm, not truth, to gain followers.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 17,
              spans: [
                t('But, beloved, remember ye the words which were spoken before of the apostles of our Lord Jesus Christ;'),
              ],
            },
            {
              number: 18,
              spans: [
                t('How that they told you there should be mockers in the last time, who should walk after their own ungodly lusts.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('These be they who separate themselves, sensual, having not the Spirit.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-remember-apostles',
          html:
            'The apostles warned about false teachers to come. Jude reminds his readers: this is not new. The apostles saw it coming. These teachers are not surprising; they are predictable.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 20,
              spans: [
                t('But ye, beloved, building up yourselves on your '),
                hy('most holy faith', 'greek-pistis'),
                t(', praying in the '),
                hy('Holy Ghost', 'c-spirit-praying'),
                t(','),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'greek-pistis',
          title: 'Pistis — "faith"',
          script: 'πίστις',
          translit: '<strong>pistis</strong> · trust, belief, conviction in God\'s truthfulness',
          description:
            'Your faith is not something others build. You build yourselves on it — it is the ground you stand on, the foundation of your life.',
        },
        {
          kind: 'commentary',
          id: 'c-spirit-praying',
          html:
            'To pray in the Holy Ghost is to align your prayer with the Spirit\'s own intercession. Romans 8:26 says the Spirit "maketh intercession for us with groanings which cannot be uttered." When you pray aligned with God\'s will and nature, you are praying in the power of His Spirit.',
        },

        {
          kind: 'carry',
          html:
            'In the face of false teachers, Jude doesn\'t say "defend yourselves" or "win an argument." He says "build yourselves up." The strongest defense against deception is not debate skills but a deepening foundation in the true faith. Praying in the Holy Ghost, holding fast to the apostles\' teaching, building on what you know to be true — this is the posture of the mature believer when surrounded by lies.',
        },

        {
          kind: 'reflection',
          id: 'build-yourselves',
          prompt:
            'What does "building up yourselves on your most holy faith" look like for you? Where can you deepen your foundation this week?',
        },
      ],
    },

    /* ─── Jude 1:21–23 — Keep Yourselves in Love; Have Compassion ───────── */
    {
      ref: 'Jude 1:21–23',
      title: 'Keep Yourselves in the Love of God; Have Compassion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 21,
              spans: [
                t('Keep yourselves in the '),
                hp('love of God', 'c-love-god'),
                t(', looking for the mercy of our Lord Jesus Christ unto eternal life.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-love-god',
          html:
            'To keep yourself in God\'s love is not to make yourself lovable. It is to remain within the sphere where God\'s love operates — within submission to Him, within faith in Christ, within the community of the believing. It is a posture of receiving.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 22,
              spans: [
                t('And of some have compassion, making a difference:'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And others save with fear, pulling them out of the fire; hating even the garment spotted by the flesh.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-discernment-compassion',
          html:
            'Jude asks for a nuanced response. Some are to be met with compassion — they may be wavering, caught in confusion. Others need to be "pulled out of the fire" — rescued with urgency and firmness. And the church must be careful not to be contaminated itself. It is a call for discernment: some people need gentle teaching, some need urgent intervention, and all need the church to maintain its own boundaries.',
        },

        {
          kind: 'carry',
          html:
            'Contending for the faith does not mean being harsh with everyone. Jude calls you to compassion toward some, urgent rescue toward others, and careful boundaries for yourself. This requires wisdom — knowing who needs what kind of love. When you encounter false teaching or false teachers, pause before you respond. Are they wavering and confused, or are they hardened in rebellion? Do they need gentleness or a firm boundary? Do you need to set a limit to protect the community? God\'s kindness sometimes looks like a gentle hand, and sometimes like a firm "no."',
        },

        {
          kind: 'reflection',
          id: 'compassion-discern',
          prompt:
            'When you encounter teaching or behavior that contradicts Scripture, how do you discern whether to respond with compassion, urgent intervention, or boundaries?',
        },
      ],
    },

    /* ─── Jude 1:24–25 — The Doxology ───────────────────────────────────── */
    {
      ref: 'Jude 1:24–25',
      title: 'Now Unto Him That Is Able',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 24,
              spans: [
                t('Now unto him that is '),
                hp('able to keep you from falling', 'c-preservation'),
                t(', and to '),
                hp('present you faultless', 'c-faultless'),
                t(' before the presence of his glory with exceeding joy,'),
              ],
            },
            {
              number: 25,
              spans: [
                t('To the only wise God our '),
                hp('Saviour', 'christ-saviour'),
                t(', be glory and majesty, dominion and power, both now and ever. Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-preservation',
          html:
            'After the warnings, the false teachers, the need to contend and fight — Jude ends with preservation. The God who asks you to defend the faith is also the one who keeps you from falling. You are not left to your own strength. The defense is His work as much as yours.',
        },
        {
          kind: 'commentary',
          id: 'c-faultless',
          html:
            'To be "presented faultless" means to stand before God without blemish, spotless, complete. This is not a status you have earned. It is what Christ will do — present you, on that final day, having removed every stain.',
        },
        {
          kind: 'christ',
          id: 'christ-saviour',
          title: 'Christ Connection — Christ as Saviour and Keeper',
          html:
            'In this final ascription, Christ is explicitly named Saviour. "To the only wise God our Saviour." The letter that began with the grace of God now ends with explicit ascription to Christ: Jesus is Lord, Jesus is Saviour, Jesus will present you faultless. This is not theology to defend but a reality to rest in. Christ has saved you. Christ will keep you. Christ will present you.',
        },
        {
          kind: 'artwork',
          matchTitle: /judgment|glory|heaven/i,
          matchArtist: /michelangelo|caravaggio|blake/i,
          caption: 'Jude 1:24–25 · Faultless Before His Glory',
        },
        {
          kind: 'carry',
          html:
            'Jude ends not by telling you to try harder or stay vigilant — though the letter is full of warnings. He ends by reminding you that the one guarding the faith is the one who keeps you. You are not holding yourself up. You are being held. All the exhortation to contend and build and keep and rescue your friends — all of it is possible because you are being kept. The doxology is not a reward for your faithfulness. It is the assurance that your faithfulness is upheld by His. Glory and majesty and dominion and power belong to Him, now and forever.',
        },

        {
          kind: 'reflection',
          id: 'able-to-keep',
          prompt:
            'What does it mean to you that God is "able to keep you from falling"? Where in your faith do you most need that promise right now?',
        },
      ],
    },
  ],
};
