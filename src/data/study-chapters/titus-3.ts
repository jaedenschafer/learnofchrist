import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Titus 3 — Saved by Mercy, Not Works
 *
 * Paul brings his letter to Crete to a close with one of the most concentrated
 * gospel statements in all Scripture. Believers are not saved by their own works
 * but by God&apos;s mercy, through the renewing work of the Holy Spirit. This truth
 * is not merely theological—it is the foundation for humble, loving conduct.
 * Divisive people are to be rejected. The church is called to live out the grace
 * it has received, maintaining good works not as condition for salvation but as
 * the inevitable fruit of a grateful heart. The letter ends as it begins: with
 * the gospel remaking the believer from the inside out.
 */
export const TITUS_3: RichChapterContent = {
  bookSlug: 'titus',
  bookName: 'Titus',
  chapter: 3,

  estimatedMinutes: { beginner: 8, intermediate: 16, deep: 24 },
  intros: [
    'Paul has given instructions throughout the letter. Now he reaches bedrock. Believers are not saved because they are good, not because they have earned God&apos;s favor. They are saved because God showed mercy. This doctrine must reshape the church&apos;s stance toward the world, toward the unbelieving, toward one another.',
    'The chapter holds another concentrated gospel paragraph—Titus 3:4–7—where Paul unpacks the mechanics of salvation: not works, but mercy; not human effort, but the washing of regeneration and the renewing of the Holy Ghost. This is grace that appears. This is mercy that saves. And it calls forth a response: to maintain good works, to pursue purity, to guard against division.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /(epistle|letter|paul)/i,
    caption: 'Paul&apos;s Final Gospel Word to Titus',
  },

  sections: [
    /* ─── Titus 3:1 — Subject to Principalities and Powers ──────────────── */
    {
      ref: 'Titus 3:1',
      title: 'Subject to Principalities and Powers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('Put them in mind to be '),
                hy('subject to principalities and powers', 'tit3-subject'),
                t(', to obey magistrates, to be ready to every good work,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tit3-subject',
          html:
            'Paul opens with a stark call to submission. Believers living under Roman rule are to honor civil authority. This is not because all government is righteous—Rome persecuted Christians—but because God has ordained human authority as part of His order. Submission to magistrates reflects submission to Christ. Both are acts of obedience.',
        },
        {
          kind: 'carry',
          html:
            'You are called to be subject, to obey, to be ready for good works. This is the practical outworking of faith. Not resistance for its own sake, not contempt for authority, but a willingness to serve within the structures God has ordained. What does this mean in your time, in your community? Where are you tempted to rebel against authority instead of serving within it?',
        },
        {
          kind: 'reflection',
          id: 'tit3-subject-reflection',
          prompt: 'How do you show submission to authority in your life? Where is it hardest? What would submission that honors Christ look like in that situation?',
        },
      ],
    },

    /* ─── Titus 3:2 — Speak Evil of No Man, Be Gentle ────────────────────── */
    {
      ref: 'Titus 3:2',
      title: 'Speak Evil of No Man, Be Gentle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 2,
              spans: [
                t('To speak evil of no man, to be no brawlers, but '),
                hy('gentle', 'tit3-gentle'),
                t(', '),
                hy('shewing all meekness', 'tit3-meekness'),
                t(' unto all men.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tit3-gentle',
          html:
            'Speaking evil of anyone—condemning, slandering, denigrating—is forbidden. Not because criticism never has a place, but because the believer&apos;s default mode should be restraint. Words are powerful. They shape culture. They wound or heal. But gentleness—strength under control—is the call. Before you speak about anyone, ask: is this evil-speaking? Am I being a brawler, pushing for victory?',
        },
        {
          kind: 'greek',
          id: 'tit3-praoteis',
          title: 'Praoteis — Gentle, Meek',
          script: 'πραότης',
          translit: '<strong>praoteis</strong> · gentleness; meekness; humility without weakness',
          description:
            'Meekness is not weakness. A meek person has strength but chooses not to deploy it for selfish ends. Jesus described Himself as meek (Matt. 11:29), yet He overturned tables in the temple. Meekness is strength under control, yielded to a higher purpose.',
        },
        {
          kind: 'commentary',
          id: 'tit3-meekness',
          html:
            '"Shewing all meekness unto all men." Not just to the likeable, the worthy, the deserving. Unto all men. A believer in Christ speaks with gentleness even to those who oppose him, even to those he disagrees with. This is not spineless. This is Christ-like.',
        },
        {
          kind: 'carry',
          html:
            'The world teaches you to win arguments. Christ calls you to something rarer: to be gentle with everyone. Before your next debate, your next confrontation, pause. Will my words here produce love or division? Am I speaking as Christ would speak?',
        },
        {
          kind: 'reflection',
          id: 'tit3-gentle-reflection',
          prompt: 'Think of one person you find difficult. How would you speak about them differently if you truly embraced this call to gentleness and meekness?',
        },
      ],
    },

    /* ─── Titus 3:3 — We Ourselves Also Were Sometimes Foolish ───────────── */
    {
      ref: 'Titus 3:3',
      title: 'We Ourselves Also Were Sometimes Foolish',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 3,
              spans: [
                t('For we ourselves also were sometimes foolish, disobedient, deceived, serving divers lusts and pleasures, living in malice and envy, hateful, and hating one another.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tit3-we-foolish',
          html:
            'Paul includes himself. This is stunning. "We ourselves also were sometimes foolish." Not "they were foolish, but we were always wise." But "we too were once in darkness." This memory, held fresh, keeps a believer humble. You are not saved because you were inherently good. You are saved because God was merciful to you in your foolishness. [res:titus3-slavery-bible-odyssey]',
        },
        {
          kind: 'commentary',
          id: 'tit3-vices',
          html:
            'Foolish. Disobedient. Deceived. Serving lusts. Living in malice and envy. This is not a mild description of pre-conversion life. It is stark. Paul is naming the reality: apart from grace, a human being is enslaved to appetites, twisted by vice, hostile to others. Malice—the disposition to harm. Envy—the resentment of another&apos;s good. These vices feed each other. They create a hell among humans. This is what we all were, apart from Christ. The humility of remembering this reshapes how we treat others.',
        },
        {
          kind: 'carry',
          html:
            'You were once foolish. You were deceived. You served lusts. You may have been full of malice and envy. Not because you were uniquely wicked, but because you had not yet met Jesus. The change in you was not self-improvement. It was resurrection. This memory should make you slow to judge others and quick to extend mercy.',
        },
        {
          kind: 'reflection',
          id: 'tit3-foolish-reflection',
          prompt: 'What were you enslaved to before you came to Christ? How does remembering that reality affect how you see others who are still there?',
        },
      ],
    },

    /* ─── Titus 3:4 — The Kindness and Love of God Appeared ──────────────── */
    {
      ref: 'Titus 3:4',
      title: 'The Kindness and Love of God Our Saviour Appeared',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 4,
              spans: [
                t('But after that '),
                hg('the kindness and love of God our Saviour toward man appeared', 'tit3-appeared'),
                t(','),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tit3-appeared',
          html:
            'But. One word changes everything. After the catalog of human vice—disobedience, deception, malice, envy—one word pivots to grace. The appearance of God&apos;s kindness is not a reward for repentance. It is the cause of it. Grace appears first. Repentance follows. The kindness and love of God appeared—in history, in the incarnation, in the cross. [res:titus3-regeneration-sefaria]',
        },
        {
          kind: 'greek',
          id: 'tit3-chrestotes',
          title: 'Chrestotēs — Kindness',
          script: 'χρηστότης',
          translit: '<strong>chrestotēs</strong> · kindness; goodness; usefulness; benevolence',
          description:
            'Kindness is not sentimental. It is the active disposition of God toward a rebellious humanity. He does not hate us for our malice. He shows kindness. He does good to those who deserve judgment. This kindness appears in history, in the incarnation, in the cross.',
        },
        {
          kind: 'greek',
          id: 'tit3-philanthropia',
          title: 'Philanthropia — Love Toward Man',
          script: 'φιλανθρωπία',
          translit: '<strong>philanthropia</strong> · love toward mankind; benevolence; humanitarian care',
          description:
            'The word is rare in Scripture—used only here and in Acts 28:2 of ordinary human hospitality. Paul uses it of God Himself. God&apos;s philanthropia is His love for the human race as a whole. Not distant. Not impersonal. The love of God toward all humans, displayed in Christ.',
        },
        {
          kind: 'christ',
          id: 'tit3-christ-philanthropia',
          title: 'Christ Connection — The Philanthropy of God in the Incarnation',
          html:
            'The kindness and love of God toward man "appeared." In Greek, the word is <em>epiphaneia</em>—appearance, manifestation. It is the word used for Christ&apos;s coming. When Jesus stepped into the world, the kindness of God became visible. A God who stooped to wash disciples&apos; feet, who ate with sinners, who wept over Jerusalem—this is God&apos;s philanthropia on display. The incarnation is God saying with His whole life: I love the human race.',
        },
        {
          kind: 'carry',
          html:
            'This appeared. Not as theory, but as event. Not as doctrine, but as a face, a voice, a presence. When you doubt whether God loves you, look at Christ. His willingness to enter human suffering, to endure the cross, to rise again—this is the kindness and love of God toward you, made visible and tangible.',
        },
        {
          kind: 'reflection',
          id: 'tit3-appeared-reflection',
          prompt: 'When have you most keenly felt the kindness and love of God appearing in your life? What made that moment real to you?',
        },
      ],
    },

    /* ─── Titus 3:5a — Not by Works of Righteousness ────────────────────── */
    {
      ref: 'Titus 3:5a',
      title: 'Not by Works of Righteousness Which We Have Done',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 5,
              spans: [
                t('Not by works of righteousness which we have done, but according to his mercy '),
                hy('he saved us', 'tit3-saved'),
                t(','),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tit3-not-works',
          html:
            'This is the hinge of the gospel. Not by works. Not by what we have done. Not by the righteousness we have mustered, the morality we have achieved, the good deeds we have racked up. All of that falls away. Salvation does not rest on your performance. It rests on God&apos;s mercy.',
        },
        {
          kind: 'commentary',
          id: 'tit3-saved',
          html:
            '"He saved us." God is the active agent. Not "we saved ourselves through our effort," but "He saved us." Past tense, completed. You are not perpetually earning your salvation. You are resting in what He has done. This is not arrogance. It is the only humility that makes sense: admitting you could not do it, and receiving from Him what He has freely given.',
        },
        {
          kind: 'christ',
          id: 'tit3-christ-works',
          title: 'Christ Connection — Christ Did What We Could Not',
          html:
            'Jesus lived the righteousness we could not achieve. He kept the law perfectly. He submitted entirely to the Father. He bore the penalty we deserved. When Paul says salvation is "not by works," he means not by our works. But it is entirely by the works of Christ—His obedience, His sacrifice, His resurrection. We are saved not by what we do, but by what He has already done.',
        },
        {
          kind: 'carry',
          html:
            'You cannot earn your way to God. You cannot be good enough. But you are already saved—if you have believed. This freedom is terrifying and wonderful. It means you cannot lose it through failure. It also means you cannot boast. All glory belongs to Him. How does this reshape your anxiety about your spiritual standing?',
        },
        {
          kind: 'reflection',
          id: 'tit3-not-works-reflection',
          prompt: 'What works have you been relying on to secure God&apos;s favor? What would it mean to truly rest in His mercy instead?',
        },
      ],
    },

    /* ─── Titus 3:5b — The Washing of Regeneration ─────────────────────── */
    {
      ref: 'Titus 3:5b',
      title: 'The Washing of Regeneration and Renewing of the Holy Ghost',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 5,
              spans: [
                t('by the '),
                hy('washing of regeneration', 'tit3-washing'),
                t(', and '),
                hy('renewing of the Holy Ghost', 'tit3-renewing'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tit3-washing',
          html:
            'The washing of regeneration. In baptism, a believer is washed—the old self is set aside, the new self emerges. But the washing is not mere water. It is a sign of something deeper: the cleansing work of God removing the guilt and pollution of sin. You are washed not by your efforts, but by His grace.',
        },
        {
          kind: 'greek',
          id: 'tit3-palingenesia',
          title: 'Palingenesia — Regeneration, Rebirth',
          script: 'παλιγγενεσία',
          translit: '<strong>palingenesia</strong> · regeneration; new birth; restoration to life',
          description:
            'Literally, "again-birth." It means being born again, made new from the foundation. The old life is gone. A new life has begun. Not improvement of the old self, but the rising of a new self. This radical renewal is why the radical change in conduct is possible and required.',
        },
        {
          kind: 'greek',
          id: 'tit3-anakainosis',
          title: 'Anakainōsis — Renewing',
          script: 'ἀνακαίνωσις',
          translit: '<strong>anakainōsis</strong> · renewal; restoration to newness; continuous renewal',
          description:
            'While palingenesia is the once-for-all birth into new life, anakainōsis is the ongoing renewal. The Holy Ghost does not touch you once and leave. He continuously renews you—mind, heart, will. Moment by moment, day by day, the Spirit refreshes your commitment to Christ.',
        },
        {
          kind: 'commentary',
          id: 'tit3-renewing',
          html:
            '"Renewing of the Holy Ghost." The Spirit does not force this renewal. He offers it. He enables it. But the believer must cooperate—must yield, must turn from vice, must seek His presence. The Spirit renews those who are willing to be renewed.',
        },
        {
          kind: 'christ',
          id: 'tit3-christ-renewing',
          title: 'Christ Connection — The Spirit Poured Out Through Jesus',
          html:
            'The renewing of the Holy Ghost is the work of the Spirit, but the Spirit is given <em>through</em> Christ. John 7:39 says the Spirit was not yet given because Jesus was not yet glorified. After the ascension, Jesus poured out the Spirit on believers (Acts 2:33). The renewing power in your life is the gift of the exalted Christ, the Spirit He sends to those who believe in Him.',
        },
        {
          kind: 'carry',
          html:
            'You are being washed. You are being renewed. Not once and then left to yourself, but continuously. The Holy Ghost is at work in you—if you will let Him. Where are you resisting His renewal? What old habits, old thought patterns, old wounds are you refusing to let Him touch?',
        },
        {
          kind: 'reflection',
          id: 'tit3-renewing-reflection',
          prompt: 'In what area of your life do you most need the renewing of the Holy Ghost? What would it look like to yield that area to Him?',
        },
      ],
    },

    /* ─── Titus 3:6–7 — Justified by Grace, Heirs of Eternal Life ─────────── */
    {
      ref: 'Titus 3:6–7',
      title: 'Heirs According to the Hope of Eternal Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 6,
              spans: [
                t('Which '),
                hy('he shed on us abundantly', 'tit3-shed'),
                t(' through '),
                hp('Jesus Christ our Saviour', 'tit3-christ-philanthropia'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tit3-shed',
          html:
            'Shed. The word speaks of abundance, overflow, lavishness. The Spirit is not given sparingly. He is poured out abundantly, generously, to those who believe. This is not a bare gift—it is a flood, a downpour. God does nothing in half measures.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 7,
              spans: [
                t('That being '),
                hy('justified by his grace', 'tit3-justified'),
                t(', we should be made '),
                hg('heirs according to the hope of eternal life', 'tit3-heirs'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tit3-justified',
          html:
            'Justified by grace. Declared righteous by God&apos;s unmerited favor. This is the legal standing granted to those who believe. You are no longer condemned. You stand before God not on the basis of your record, but on the basis of Christ&apos;s record imputed to you. This justification is not earned. It is given.',
        },
        {
          kind: 'greek',
          id: 'tit3-kleros',
          title: 'Kleros — Heirs, Inheritance',
          script: 'κληρονόμος',
          translit: '<strong>kleros</strong> · heir; one who inherits; inheritor of a legacy',
          description:
            'A heir receives not because of merit but because of family relation. You are an heir not because you deserve it, but because you belong to the family of God through Christ. The inheritance is eternal life—not merely endless existence, but the endless communion with God that life was always meant to be.',
        },
        {
          kind: 'commentary',
          id: 'tit3-heirs',
          html:
            'Heirs according to the hope of eternal life. Romans 8:17 completes the picture: you are "heirs of God, and joint-heirs with Christ." You do not inherit as servants inherit scraps. You inherit as children inherit with Christ Himself. Your inheritance is inseparable from His inheritance. Where He goes, you go. What He possesses, you possess—not in your own power, but in union with Him.',
        },
        {
          kind: 'christ',
          id: 'tit3-christ-heirs',
          title: 'Christ Connection — Co-heirs with Christ',
          html:
            'The promise is staggering: co-heirs with Christ. This is not metaphor. This is reality. You will inherit what Christ inherits. You will reign where He reigns. Your union with Him is so complete that His inheritance becomes yours.',
        },
        {
          kind: 'carry',
          html:
            'Eternal life is not simply perpetual existence. It is a hope—a secure expectation of endless communion with God. You are justified now. The Spirit renews you now. But the fullness of what you are being made is still ahead. You live between the "already"—justified, adopted, renewed—and the "not yet"—inheritance fully possessed, glory fully revealed. This hope is not wishful thinking. It is the promise of God, sealed by the Spirit.',
        },
        {
          kind: 'reflection',
          id: 'tit3-heirs-reflection',
          prompt: 'What does it mean to you personally that you are an heir of God, that you will possess eternal life with Christ? How should this hope reshape your priorities today?',
        },
      ],
    },

    /* ─── Titus 3:8 — Maintain Good Works ─────────────────────────────────── */
    {
      ref: 'Titus 3:8',
      title: 'Maintain Good Works',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 8,
              spans: [
                t('This is a faithful saying, and these things I will that thou affirm constantly, that they which have believed in God might be careful to maintain good works. These things are good and profitable unto men.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tit3-faithful',
          html:
            'Faithful saying. Paul marks his gospel statement—what he has just said about salvation—as worthy of trust. This is not speculation. This is the truth that stands. The gospel of grace, not works, is the reliable foundation.',
        },
        {
          kind: 'commentary',
          id: 'tit3-good-works-maintain',
          html:
            '"They which have believed in God might be careful to maintain good works." Here Paul does not contradict himself. Salvation is by grace, not works. But grace produces works. A person saved by mercy cannot remain indifferent to the needy. Good works are the inevitable fruit of a grateful heart, the outward evidence of inward change. [res:titus3-pastoral-letters-brill]',
        },
        {
          kind: 'christ',
          id: 'tit3-christ-fruitfulness',
          title: 'Christ Connection — By This Will All Men Know You Are My Disciples',
          html:
            'Jesus said, "By this shall all men know that ye are my disciples, if ye have love one to another" (John 13:35). A believer&apos;s faithfulness is measured not just by doctrine but by fruitfulness—by whether the gospel produces love, generosity, good works, mercy. A person saved by Christ cannot remain indifferent to human suffering. The character of Christ is supposed to flow out through His followers.',
        },
        {
          kind: 'carry',
          html:
            'Do you maintain good works? Not as a burden or to earn favor, but as the natural expression of a grateful heart? Serving the widow, the poor, the stranger—not because they deserve it, but because you have been shown mercy. What good works is Christ calling you to maintain right now?',
        },
        {
          kind: 'reflection',
          id: 'tit3-maintain-reflection',
          prompt: 'What good works are you being called to maintain? What prevents you from maintaining them with joy and generosity?',
        },
      ],
    },

    /* ─── Titus 3:9 — Avoid Foolish Questions ──────────────────────────────── */
    {
      ref: 'Titus 3:9',
      title: 'Avoid Foolish Questions and Controversies',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 9,
              spans: [
                t('But avoid foolish questions, and genealogies, and contentions, and strivings about the law; for they are unprofitable and vain.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tit3-foolish',
          html:
            'Foolish questions—speculations that have no bearing on faith and life. They distract from the gospel. They create division. They are often born of intellectual pride: the desire to display learning rather than to know God. Genealogies likely refers to false teachings about cosmic beings (a heretical system called Gnosticism). Whether specific genealogies or merely endless chains of proof-text building, the point is: these do not serve the gospel. They obscure it. They pit Christians against one another in endless debate. Unprofitable. This is the test. Does this discussion lead to love? Does it lead to fruitfulness? Does it strengthen faith in Christ? If not, let it go.',
        },
        {
          kind: 'carry',
          html:
            'You are surrounded by endless controversy, endless debate, endless disputes. Some of them matter. Most do not. Ask yourself: does this lead me closer to Christ, or farther? Does it make me more loving, or more divided? Does it call me to action for God&apos;s kingdom, or to endless talk? If the answer is "no," let it go. Your time is short. The gospel is clear. Guard your heart.',
        },
        {
          kind: 'reflection',
          id: 'tit3-foolish-reflection-2',
          prompt: 'What controversies or endless debates are you caught in? Are they profitable for your faith? What would you gain by releasing them?',
        },
      ],
    },

    /* ─── Titus 3:10–11 — Reject the Heretic After Admonition ─────────────── */
    {
      ref: 'Titus 3:10–11',
      title: 'A Man That Is a Heretic After the First and Second Admonition Reject',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 10,
              spans: [
                t('A man that is an heretick after the first and second admonition reject;'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Knowing that he that is such is subverted, and sinneth, being condemned of himself.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tit3-heretic',
          html:
            'A heretic is not merely wrong. A heretic is divisive—he uses false teaching to create factions, to separate believers, to draw followers to himself. He is not simply mistaken; he is actively destroying the unity of the church. Such a person is to be rejected, but only after fair warning.',
        },
        {
          kind: 'greek',
          id: 'tit3-hairetikos',
          title: 'Hairetikos — Heretical, Factious',
          script: 'αἱρετικός',
          translit: '<strong>hairetikos</strong> · heretical; factious; causing division through opinion',
          description:
            'From the Greek hairesis—choice, faction, sect. A heretic chooses a path that separates him from the body. He does not merely hold a wrong opinion; he uses that opinion to divide the church. The word implies willfulness, divisiveness, stubborn persistence in what divides.',
        },
        {
          kind: 'commentary',
          id: 'tit3-reject',
          html:
            'Reject. Not debate endlessly. Not accommodate. Reject. After admonition—after warning—twice. Paul is clear: fairness requires warning. But persistence in heresy, after being warned, deserves exclusion. This is not cruelty. It is the protection of the flock. Subverted—his judgment is corrupted, turned upside down. He has become enslaved to his own false teaching. He cannot be easily corrected because he has lost the ability to see the truth.',
        },
        {
          kind: 'commentary',
          id: 'tit3-self-condemned',
          html:
            '"Being condemned of himself." The heretic condemns himself. His own conscience, if he attended to it, would convict him. But he has stifled that voice. He persists in division. And in persisting, he stands under judgment—God&apos;s judgment, which is just and true.',
        },
        {
          kind: 'carry',
          html:
            'This is hard teaching. It calls for discernment. Not every disagreement is heresy. But when someone persistently divides the church through false teaching, when they refuse correction even after warning, separation becomes necessary. This is not judgment of their soul—that is God&apos;s alone. It is protection of the church.',
        },
        {
          kind: 'reflection',
          id: 'tit3-heretic-reflection',
          prompt: 'Are you allowing false teaching to divide you from other believers? Or are you someone who must learn to receive correction with humility?',
        },
      ],
    },

    /* ─── Titus 3:12–14 — Travel Plans and Maintain Good Works ─────────────── */
    {
      ref: 'Titus 3:12–14',
      title: 'Travel Plans and the Work of the Gospel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 12,
              spans: [
                t('When I shall send Artemas unto thee, or Tychicus, be diligent to come unto me to Nicopolis: for I have determined there to winter.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Bring Zenas the lawyer and Apollos on their journey diligently, that nothing be wanting unto them.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And let ours also learn to maintain good works for necessary uses, that they be not unfruitful.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tit3-artemas',
          html:
            'Paul gives Titus a concrete task: when a replacement arrives, come to me in Nicopolis. These are not merely personal plans. They reflect how the gospel spreads—through the movement of faithful workers, through the support of local churches, through the willingness of leaders to go where they are sent. Titus is learning not to sit comfortably, but to follow his apostle, to give his whole life to the work.',
        },
        {
          kind: 'commentary',
          id: 'tit3-zenas',
          html:
            'Zenas the lawyer and Apollos were traveling, possibly to share the gospel, and needed provision for their journey. Titus is to ensure they lack nothing. This is practical hospitality—a way of saying: the work of the gospel matters more than your comfort.',
        },
        {
          kind: 'commentary',
          id: 'tit3-good-works-necessary',
          html:
            '"Learn to maintain good works for necessary uses." Not for show. Not for reputation. For necessary uses—to meet real needs. To provide for those who travel in service of the gospel. To give generously to the poor. The Cretans are to learn this through Titus&apos;s example. The gospel produces a community of generosity.',
        },
        {
          kind: 'carry',
          html:
            'The letter comes to a close not with abstract doctrine, but with concrete tasks. Come to me. Support these men on their way. Teach your congregation to give generously. The gospel is not merely believed—it is lived out through a thousand small acts of faithfulness and generosity. Your part may seem small. But it is essential.',
        },
        {
          kind: 'reflection',
          id: 'tit3-travel-reflection',
          prompt: 'How are you supporting the work of the gospel with your time, your resources, your hospitality? Where could you be more generous?',
        },
      ],
    },

    /* ─── Titus 3:15 — Closing Grace ────────────────────────────────────── */
    {
      ref: 'Titus 3:15',
      title: 'Grace Be with You All',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 15,
              spans: [
                t('All that are with me salute thee. Greet them that love us in the faith. '),
                hp('Grace be with you all', 'tit3-closing-grace'),
                t('. Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tit3-closing-grace',
          html:
            'The letter opens with grace and peace. It closes with grace. This is not formality. It is the heartbeat of the gospel. Grace is not earned. It is poured out on the Cretans through Christ. In the closing word, Paul returns to what matters: the grace that alone can sustain, renew, and empower a believer to live as the gospel demands.',
        },
        {
          kind: 'christ',
          id: 'tit3-christ-final',
          title: 'Christ Connection — Grace as the Final Word',
          html:
            'Every epistle of Paul ends with grace. Not law. Not works. Not moral demand without resource. But grace—the unmerited favor of God, the presence of Christ, the empowerment of the Spirit. Whatever Titus has been called to do—teach, correct, endure opposition—he does not do it alone. Grace goes with him. Grace is what will sustain the young church in Crete. Grace is what sustains you.',
        },
        {
          kind: 'carry',
          html:
            'You have read through the whole letter. You have seen the call to order, to correction, to holiness. And it all rests on one foundation: you are saved not by works, but by mercy. You are renewed not by your effort, but by the Holy Ghost. You are an heir of God, justified by His grace. Walk in that. Live from that. And let that grace flow through you to everyone around you—especially to those who are weak, struggling, or lost. The gospel ends where it begins: with grace. With you.',
        },
        {
          kind: 'reflection',
          id: 'tit3-closing-reflection',
          prompt: 'As you close this study, what is the one truth about grace that most impacts your heart? How will you live differently because of it?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Titus 3',
    quote:
      'Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost. Being justified by his grace, we should be made heirs according to the hope of eternal life. Maintain good works for necessary uses, that they be not unfruitful.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Titus 3 · Study Guide',
  },

  resources: [
    {
      id: 'titus3-pastoral-letters-brill',
      kind: 'study',
      source: 'Brill',
      label: 'The Pastoral Epistles · Exegetical Survey',
      url: 'https://brill.com/',
      description: 'Scholarly overview of the Pastoral Epistles as a theological and disciplinary corpus addressing the church&apos;s life and witness in the Roman world.',
    },
  ],

  hasHebrew: false,
};
