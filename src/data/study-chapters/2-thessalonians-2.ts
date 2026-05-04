import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Thessalonians 2 — Now We Beseech You: Stand Fast in the Truth
 *
 * "Now we beseech you, brethren, by the coming of our Lord Jesus Christ, and by our
 * gathering together unto him; that ye be not soon shaken in mind, or be troubled."
 * The Thessalonians have been alarmed by false claims that the day of the Lord has already
 * arrived. Paul writes with pastoral urgency: no. Before Christ&apos;s coming, certain events
 * must unfold—a falling away, the revelation of lawlessness. But believers need not be shaken.
 * Christ&apos;s return is sure. Stand firm in what you have been taught.
 */
export const SECOND_THESSALONIANS_2: RichChapterContent = {
  bookSlug: '2-thessalonians',
  bookName: '2 Thessalonians',
  chapter: 2,

  estimatedMinutes: { beginner: 8, intermediate: 15, deep: 19 },
  intros: [
    'False prophets have alarmed the Thessalonians, claiming that the day of the Lord has already arrived. Some say it came through a spirit, through a word, or through a letter falsely attributed to Paul. These claims have shaken them—leaving them anxious, disturbed, doubting their faith. Paul writes not to scold but to steady them. The end is real. It will come. But not yet. And while believers wait, they are not left adrift.',
    'Paul teaches discernment. Not every supernatural claim is true. Not every teaching—however spiritual it sounds—is apostolic. Believers are called to test all things against Scripture, to hold firm to what they have been taught by word and letter, and to wait with patience. This is not a lesson in eschatology alone; it is a lesson in spiritual maturity. In an age of false claims and urgent messages, you are meant to think clearly, read carefully, and trust the Lord who holds all times in His hands.',
  ],

  opener: {
    matchTitle: /throne|judgment|coming|parousia/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 2 Thessalonians 2',
    quote:
      'Let no man deceive you by any means. Now our Lord Jesus Christ himself, and God, even our Father, comfort your hearts, and stablish you in every good word and work.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Thessalonians 2 · Study Guide',
  },

  sections: [
    /* ─── Opening: The Coming and the Gathering ───────────────────────── */
    {
      ref: '2 Thessalonians 2:1–2',
      title: 'Coming and Gathering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [
                t('Now we beseech you, brethren, by the '),
                hp('coming of our Lord Jesus Christ', 'parousia-def'),
                t(', and by our '),
                hg('gathering together unto him', '2t2-gathering'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'parousia-def',
          html:
            'Paul begins with the one thing that will settle all their fears: the return of Jesus. The Greek word is <em>parousia</em>—His "coming" or "presence." It is the same word used for the arrival of a king or dignitary. Jesus will come bodily, visibly, in person. This is not a spiritual doctrine; it is a historical, future event.',
        },
        {
          kind: 'commentary',
          id: '2t2-gathering',
          html:
            'The "gathering together unto him" is Paul&apos;s phrase for the rapture or the final ingathering of believers when Christ returns. In 1 Thessalonians 4:17, Paul describes it more fully: believers will be caught up together to meet the Lord in the air. This gathering is the culmination of Christ&apos;s coming—the moment when His church is united with Him forever.',
        },
        {
          kind: 'greek',
          id: 'greek-parousia',
          title: 'Parousia — &ldquo;The Coming&rdquo;',
          script: 'παρουσία',
          translit: '<strong>parousia</strong> · arrival, presence, coming',
          description:
            'The concrete, bodily arrival of Jesus Christ at the end of history. Not a doctrine about the state of souls after death, but the literal return of the historical Jesus to the earth He made. Paul uses this word to frame every major promise about the future.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 2,
              spans: [
                t('That ye be not soon '),
                hy('shaken in mind, or be troubled', 'shaken-troubled'),
                t(', neither by spirit, nor by word, nor by letter as from us, as that the day of Christ is at hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'shaken-troubled',
          html:
            'The Thessalonians are in genuine distress. Someone has claimed the day of the Lord is already here—perhaps through prophecy ("by spirit"), perhaps through preaching ("by word"), perhaps through a forged letter ("as from us"). Paul addresses all three channels of deception. The cure for being shaken is not information alone but the pastoral assurance that they have been fooled. The end is not here. Trust what you know to be true.',
        },
        {
          kind: 'carry',
          html:
            'You will hear urgent messages—through social media, through well-meaning friends, through prophecies that sound certain. "The end is here." "Christ will come this year." "This moment is the sign." Paul&apos;s word to you is gentle and firm: <em>do not be shaken.</em> Not because nothing matters, but because Christ&apos;s return is so certain and so planned that no false alarm can change it. The antidote to fear is not naïveté but clarity.',
        },
        {
          kind: 'reflection',
          id: 'false-alarms',
          prompt:
            'What false claim about the end times or the faith has unsettled you? How do you usually respond when someone speaks with certainty about secrets or imminent events?',
        },
      ],
    },

    /* ─── The Falling Away First ───────────────────────────────────────── */
    {
      ref: '2 Thessalonians 2:3',
      title: 'A Falling Away First',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 3,
              spans: [
                t('Let no man deceive you by any means: for that day shall not come, except there come a '),
                hp('falling away first', 'apostasia'),
                t(', and that man of sin be revealed, the son of perdition;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'apostasia',
          html:
            'Paul names two events that <em>must</em> precede the day of the Lord. First: a falling away[res:intertextual-2thess-2-apostasy]. A time of mass defection from the faith. Not mere disagreement, not cultural drift, but deliberate abandonment of what was once received as true. The church of that age will be tested. Some will hold fast. Others will turn away.',
        },
        {
          kind: 'greek',
          id: 'greek-apostasia',
          title: 'Apostasia — &ldquo;Falling Away&rdquo;',
          script: 'ἀποστασία',
          translit: '<strong>apostasia</strong> · defection, abandonment, apostasy from faith',
          description:
            'Not error or weakness, but deliberate turning away from truth once known. In the end times, faith itself becomes a choice point. Many will reject it. Believers who remain steadfast will be few.',
        },
        {
          kind: 'carry',
          html:
            'You live in a time when faith is optional and unfashionable. Around you, people once anchored in the church have quietly stepped away. Some with bitterness, some with what sounds like reason. Paul did not promise you the whole world would believe. He promised you this: <em>don&apos;t be surprised when it doesn&apos;t.</em> Your steadfastness in a time of falling away is not a failure; it is the narrowness of the way Christ described.',
        },
      ],
    },

    /* ─── The Man of Sin Revealed ──────────────────────────────────────── */
    {
      ref: '2 Thessalonians 2:3–4',
      title: 'The Man of Sin Revealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 3,
              spans: [
                t('and that '),
                hg('man of sin be revealed, the son of perdition', 'man-of-sin'),
                t(';'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Who opposeth and exalteth himself above all that is called God, or that is worshipped; so that he as God sitteth in the temple of God, shewing himself that he is God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'man-of-sin',
          html:
            'The "man of sin"—also called the "son of perdition"—is a figure of opposition to God. Throughout church history, Christians have debated his identity. Some saw him in Roman emperors, some in papal powers, some as a future Antichrist figure. Paul does not identify him by name; Paul names him by his character: he opposes God, exalts himself, and claims divine status. The text does not require you to fix his identity. It requires you to recognize the type: lawlessness personified, arrogance claiming divinity.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 4,
              spans: [
                t('Who opposeth and exalteth himself above all that is called God, or that is worshipped; so that he as God sitteth in the temple of God, shewing himself that he is God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'temple-claim',
          html:
            'The figure sits "in the temple of God" and claims to be God. This is not accidental desecration but calculated blasphemy. He does not merely deny God; he replaces Himself with God. This is the ultimate reversal: the creature claiming to be the Creator, and others believing the lie.',
        },
        {
          kind: 'reflection',
          id: 'opposition',
          prompt:
            'Throughout history, what figures or systems have most directly opposed the gospel and claimed authority that belongs to God alone? What made them compelling to people at the time?',
        },
      ],
    },

    /* ─── He Who Now Letteth ──────────────────────────────────────────── */
    {
      ref: '2 Thessalonians 2:5–7',
      title: 'He Who Letteth, Will Let',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 5,
              spans: [
                t('Remember ye not, that, when I was yet with you, I told you these things?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'remember-told',
          html:
            'Paul appeals to memory. He has already taught these things face-to-face. The Thessalonians are not learning this for the first time; they are being reminded. This is a pastoral move: you know this. Trust what you know. Do not be shaken by new claims.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 6,
              spans: [
                t('And now ye know what '),
                hy('withholdeth', 'katechon'),
                t(' that he might be revealed in his time.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'katechon',
          html:
            'Paul speaks of "what withholdeth"—that which restrains or holds back the revelation of the lawless one. The Thessalonians apparently knew what this was (Paul had told them). We do not. Throughout church history, interpreters have guessed: the Holy Spirit, the church, human government, divine order itself. The point is not to guess correctly but to trust: God has a limit on how far lawlessness can go. The restraint will be removed "in his time"—God&apos;s time, not the lawless one&apos;s.',
        },
        {
          kind: 'greek',
          id: 'greek-katechon',
          title: 'Katechōn — &ldquo;The One Restraining&rdquo;',
          script: 'κατέχων',
          translit: '<strong>katechōn</strong> · the one holding back, restraining, preventing',
          description:
            'A mysterious figure or force that God has placed to hold back the full revelation of lawlessness until the appointed time. God has not left the world to chaos. There is a limit, and that limit has a name—even if we don&apos;t know it.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 7,
              spans: [
                t('For the '),
                hg('mystery of iniquity doth already work', 'mystery-iniquity'),
                t(': only he who now letteth will let, until he be '),
                hy('taken out of the way', 'taken-away'),
                t('. And then shall that Wicked be revealed, whom the Lord shall consume with the spirit of his mouth, and shall destroy with the brightness of his coming;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'mystery-iniquity',
          html:
            'Even now, lawlessness is at work. It is not dormant or future alone; it is active in the world. But it is held in check by God&apos;s restraint. When that restraint is removed, full rebellion will be revealed. Until then, you live in the space between—lawlessness working, but not unopposed; the future coming, but not yet arrived.',
        },
        {
          kind: 'commentary',
          id: 'taken-away',
          html:
            'The restrainer will be "taken out of the way"—removed by God&apos;s action, not by the lawless one&apos;s power. And then the full reversal: the Wicked one is "consumed" and "destroyed" not by human power but by Christ. The phrase "spirit of his mouth" echoes Isaiah 11:4, where the Messiah slays the wicked "with the breath of his lips." This is Christ&apos;s parousia as final judgment.',
        },
        {
          kind: 'carry',
          html:
            'You live between the times. Lawlessness is real, active, powerful. But it has a limit. God has set a boundary on how far it can go. And when the final hour comes, it will not be law enforcement or human power that ends the rebellion—it will be Christ Himself, returning in judgment. Your job is not to defeat the wicked one. It is to remain steadfast, to test all teachings, and to trust the One who holds all times and powers in His hands.',
        },
        {
          kind: 'reflection',
          id: 'restraint',
          prompt:
            'Where do you see evil at work in the world right now? What keeps you from despair about it?',
        },
      ],
    },

    /* ─── The Wicked Consumed ──────────────────────────────────────────── */
    {
      ref: '2 Thessalonians 2:8',
      title: 'Whom the Lord Shall Consume',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 8,
              spans: [
                t('And then shall that Wicked be '),
                hg('revealed, whom the Lord shall consume with the spirit of his mouth, and shall destroy with the brightness of his coming', 'wicked-destroyed'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'wicked-destroyed',
          html:
            'The lawless one is not given a name—only a title: "that Wicked." When Christ comes, this figure is simply unmade. Not through a battle with weapons, not through human effort, but through Christ&apos;s very presence. The "spirit of his mouth" and "brightness of his coming" are Christ&apos;s parousia itself. His return is simultaneously the judgment. Light and darkness cannot coexist.',
        },
        {
          kind: 'christ',
          id: 'christ-judgment',
          title: 'Christ Connection — The Final Judge',
          html:
            'In Revelation 19:15, John pictures the risen Jesus coming in judgment with a sharp sword from His mouth, treading the winepress of God&apos;s wrath. Paul uses the same image here: the "spirit of his mouth"—His word—is the weapon of final judgment. Jesus taught, "By your words you will be justified, and by your words you will be condemned" (Matt. 12:37). At His return, His word will be the measure of all things. The lawless one, who exalted Himself above God, will be utterly destroyed by the presence of the One he opposed.',
        },
        {
          kind: 'carry',
          html:
            'The outcome is already decided. The wicked one will not prevail, not because you have defeated him or because the world has grown wise, but because Christ is returning. Your steadfastness is not futile hope; it is alignment with the already-decided future. When you stand against lawlessness in your own time, you are standing with the Judge who has already won.',
        },
      ],
    },

    /* ─── Signs and Lying Wonders ──────────────────────────────────────── */
    {
      ref: '2 Thessalonians 2:9–10',
      title: 'Signs and Lying Wonders',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 9,
              spans: [
                t('Even him, whose coming is after the working of Satan with all power and signs and '),
                hg('lying wonders', 'lying-wonders'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lying-wonders',
          html:
            'The lawless one does not appear through falsehood alone. He comes with "power and signs and lying wonders." That is, he will perform acts that look miraculous but are deceptive. The Greek word for "wonders" is <em>terasa</em>—signs that astonish, that seem to verify a claim. But they are <em>lies</em>—they confirm what is false. This is not magic; it is counterfeit spiritual authority. Satan has real power to perform signs; he uses them to lead astray.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 10,
              spans: [
                t('And with all deceivableness of unrighteousness in them that perish; because they received not the '),
                hy('love of the truth', 'love-truth'),
                t(', that they might be saved.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'love-truth',
          html:
            'The decisive factor is not the wonder itself but the heart of the one who encounters it. Those who "perish" do so because they "received not the love of the truth[res:sefaria-truth-discernment]." Not mere knowledge of truth, but <em>love</em> for it. This is the interior condition Paul addresses. If you love the truth—if you prize it, seek it, test all things against it—you will not be deceived. If you love comfort more than truth, if you prefer the wonder to the Word, you are vulnerable.',
        },
        {
          kind: 'carry',
          html:
            'You will see things that astonish you. Claims that sound authoritative. Healings and deliverances that seem genuine. The test is not the sign but your love for truth. Are you more invested in comfort than clarity? More eager for the spectacular than the scriptural? The antidote to deception is a deep, abiding love for what is true, tested, and delivered by the apostles—even when the truth is quieter than the wonder.',
        },
        {
          kind: 'reflection',
          id: 'love-of-truth',
          prompt:
            'What truth have you had to choose recently even when it was harder or less comfortable than an alternative? Where might you be prioritizing something other than truth in your spiritual life?',
        },
      ],
    },

    /* ─── Strong Delusion ──────────────────────────────────────────────── */
    {
      ref: '2 Thessalonians 2:11–12',
      title: 'God Sends a Strong Delusion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 11,
              spans: [
                t('And for this cause God shall send them '),
                hg('strong delusion, that they should believe a lie', 'strong-delusion'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'strong-delusion',
          html:
            'This verse troubles many readers: God sends delusion? The logic is judicial, not arbitrary. Those who "received not the love of the truth" receive instead the consequence of that choice. God does not force belief; nor does He prevent the natural fruit of rejecting truth. If you turn away from what is true, what remains is falsehood. God allows that consequence. He gives people over to the desires they have chosen (cf. Romans 1:24–28). This is not cruelty; it is justice.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 12,
              spans: [
                t('That they all might be damned who believed not the truth, but had pleasure in unrighteousness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'believed-not-truth',
          html:
            'The consequence is judgment. Those who reject truth and delight in unrighteousness will be judged. But notice the logic: they are judged because of a choice—a deep orientation toward falsehood and wickedness rather than truth and righteousness. This is not arbitrary condemnation but the natural end of the path they chose.',
        },
        {
          kind: 'carry',
          html:
            'God does not trick you into error. But He does honor your choices. If you consistently turn from truth toward what feels comfortable, toward what excuses your sins, toward what flatters your desires—God allows that path to reach its end. The antidote is not fear but honesty. Love the truth. Seek it. Test all things. Remain open to correction. In doing so, you place yourself on the path of salvation, not judgment.',
        },
      ],
    },

    /* ─── Chosen from the Beginning to Salvation ───────────────────────── */
    {
      ref: '2 Thessalonians 2:13',
      title: 'Chosen from the Beginning to Salvation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 13,
              spans: [
                t('But we are bound to give thanks alway to God for you, brethren beloved of the Lord, because God hath from the beginning '),
                hp('chosen you to salvation through sanctification of the Spirit and belief of the truth', 'chosen-salvation'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chosen-salvation',
          html:
            'Here is the pastoral turn. Paul shifts from those who perish to the Thessalonians themselves: you are beloved of the Lord, and God has chosen you[res:bible-odyssey-election-grace]. From before time began, God set His love on you. Not based on your foreseen righteousness but on His sovereign grace. This choice issues in two things: sanctification by the Spirit and belief in the truth. You are being set apart, made holy, and given faith.',
        },
        {
          kind: 'christ',
          id: 'christ-chosen',
          title: 'Christ Connection — Chosen Before the Foundation of the World',
          html:
            'Paul echoes Ephesians 1:4: God "hath chosen us in him before the foundation of the world, that we should be holy and without blame before him in love." This is not a doctrine that diminishes human response; rather, it is a doctrine of comfort. Your salvation is not hanging on your strength or your wisdom. It is anchored in the counsel of God before time began. In Christ, you were chosen. Through the Spirit, you are being sanctified. By grace, you believe.',
        },
        {
          kind: 'carry',
          html:
            'In a time of false claims and shaken faith, here is your anchor: you have been chosen. Not because you are worthy, not because you are smart enough to discern all deception, but because God set His love on you before the world began. You are beloved of the Lord. That love is actively at work in you through the Spirit, making you holy. Rest in that. It is not your job to perfect yourself or to see the future clearly. It is God&apos;s work, already accomplished.',
        },
        {
          kind: 'reflection',
          id: 'chosen-you',
          prompt:
            'How would your anxiety about the future change if you truly believed you were chosen by God before the world began? What would shift in how you face deception or uncertainty?',
        },
      ],
    },

    /* ─── Comfort Your Hearts ──────────────────────────────────────────── */
    {
      ref: '2 Thessalonians 2:14–17',
      title: 'Comfort Your Hearts and Stablish You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 14,
              spans: [
                t('Whereunto he called you by our gospel, to the obtaining of the glory of our Lord Jesus Christ.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'called-gospel',
          html:
            'God did not choose you in a vacuum. He called you through the gospel—the preaching and proclamation of what Christ has done. You were not left to guess at the truth; you were invited into it through the good news. And the telos—the aim, the goal—is clear: the glory of Christ. You are being drawn toward His return, toward His revealed kingdom, toward union with Him.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 15,
              spans: [
                t('Therefore, brethren, '),
                hg('stand fast, and hold the traditions which ye have been taught', 'hold-traditions'),
                t(', whether by word, or our epistle.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hold-traditions',
          html:
            'Paul now gives the imperative. Stand firm. Hold fast to what you have been taught—by spoken word when Paul was with you, and by letter (his epistles) now that he is away. "Tradition" in Scripture is not medieval ecclesiasticism; it is apostolic teaching, the faith once delivered to the saints. You are not called to novelty but to fidelity. Not to innovation but to steadfastness.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 16,
              spans: [
                t('Now our Lord Jesus Christ himself, and God, even our Father, which hath '),
                hp('loved us, and hath given us everlasting consolation and good hope through grace', 'consolation-hope'),
                t(','),
              ],
            },
            {
              number: 17,
              spans: [
                t('Comfort your hearts, and stablish you in every good word and work.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'consolation-hope',
          html:
            'Paul pronounces blessing. Christ Himself, and God the Father, have already given you two things: everlasting consolation (comfort that lasts beyond this age) and good hope (a confidence rooted in grace, not in circumstances). These are not things you must earn; they are <em>given</em>. The prayer is that this reality would "comfort your hearts"—the center of feeling, will, and intention—and "stablish you"—make you firm and immovable—in every good word and work.',
        },
        {
          kind: 'christ',
          id: 'christ-comfort',
          title: 'Christ Connection — The Comforter Who Indwells',
          html:
            'Jesus promised His disciples, "I will send you another Comforter, that he may abide with you for ever" (John 14:16). The Spirit&apos;s presence in the believer is the ongoing reality of Christ&apos;s comfort. Hebrews pictures Jesus as one who "is able to succor them that are tempted" (Heb. 2:18)—to come to the aid of those in trouble. Your comfort is not a distant doctrine but the present indwelling care of Christ through His Spirit.',
        },
        {
          kind: 'carry',
          html:
            'You have been given comfort and hope. Not because you have figured everything out or because the end times are simple, but because Christ Himself has given Himself to you and declared you loved. That comfort is real, present, and yours. Let it settle your anxious heart. Let it steady your feet. Let it enable you to speak and act with goodness even in an age of fear.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: '2t2-final',
          prompt:
            'Where do you most need to hear these words—"comfort your hearts, and stablish you"—right now? What good word or work is the Spirit inviting you to, even in the midst of uncertainty?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'intertextual-2thess-2-apostasy',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'The Falling Away and False Teaching',
      url: 'https://www.intertextual.org/reader/2-Thessalonians-2?verse=3',
      description: 'Traces how apostasy—deliberate turning away from known truth—precedes Christ&apos;s return and marks the final age.',
    },
    {
      id: 'sefaria-truth-discernment',
      kind: 'study',
      source: 'Sefaria',
      label: 'Discernment and Love for Truth',
      url: 'https://www.sefaria.org/texts/Tanakh/Writings/Proverbs?lang=bi&p=Proverbs.14.6',
      description: 'Explores how a love for truth—not mere knowledge—becomes the guardian against deception and spiritual delusion.',
    },
  ],

};
