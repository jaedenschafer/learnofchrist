import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Timothy 3 — The Last Days and Scripture
 *
 * Paul paints a dark portrait of the last days: lovers of themselves, covetous,
 * proud, blasphemers, disobedient to parents, unthankful, unholy. In such times,
 * what endures? "All scripture is given by inspiration of God, and is profitable
 * for doctrine, for reproof, for correction, for instruction in righteousness."
 * The Word stands when all else fails. It equips the man of God for every good work.
 */
export const SECOND_TIMOTHY_3: RichChapterContent = {
  bookSlug: '2-timothy',
  bookName: '2 Timothy',
  chapter: 3,

  estimatedMinutes: { 5: 10, 10: 18, 15: 24 },
  intros: [
    'Paul describes the moral collapse that precedes the end times. "Perilous times shall come." His list is sobering: self-love, materialism, pride, blasphemy, family breakdown, ingratitude, impiety. These are not future speculation. Timothy is already living in them. What sustains faith in such darkness? The Scripture itself—God&apos;s Word, which endures when earthly structures crumble.',
    'Paul does not offer Timothy escape from the chaos. Instead, he offers him a weapon: the Word of God. Profitable for teaching, for reproof, for correction, for training in righteousness. The Bible is not primarily information. It is transformation. It remakes you, equips you, prepares you for every good work.',
  ],

  opener: {
    matchArtist: /rembrandt|caravaggio|bruegel/i,
    matchTitle: /last days|peril|chaos|crowd|babel/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── 2 Timothy 3:1 — Perilous Times Shall Come ────────────────── */
    {
      ref: '2 Timothy 3:1',
      title: 'Perilous Times Shall Come in the Last Days',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('This know also, that in the last days '),
                hy('perilous times', 'greek-chalepos'),
                t(' shall come.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tim3-perilous-intro',
          html:
            'Paul does not soften or spiritualize. "Perilous times shall come." He is not describing distant apocalypse. He is speaking of the reality Timothy is witnessing—and what the church will face throughout history until Christ returns. The word "perilous" is not gentle. It means grievous, hard, fierce—times when evil will press in from all sides.',
        },
        {
          kind: 'greek',
          id: 'greek-chalepos',
          title: 'Chalepos — Perilous',
          script: 'χαλεπός',
          translit: '<strong>chalepos</strong> · perilous; grievous; hard; difficult; fierce',
          description:
            'The word appears only twice in the New Testament—here, and in Matthew 8:28, where it describes two demon-possessed men so fierce they terrified travelers. Paul uses the strongest term for times ahead: not merely difficult, but fierce and terrifying.',
        },
        {
          kind: 'christ',
          id: 'christ-perilous-end',
          title: 'Christ Connection — In These Days, Jesus Remains',
          html:
            'Jesus Himself warned of the last days: "As it was in the days of Noah, so shall it be also in the days of the Son of man" (Luke 17:26)—days of eating, drinking, marrying, building, unaware. But His promise to Timothy applies to you now: "Verily I say unto you, This generation shall not pass, till all these things be fulfilled. Heaven and earth shall pass away, but my words shall not pass away" (Matt. 24:34–35). In perilous times, His Word holds.',
        },
        {
          kind: 'carry',
          html:
            'You may be living in perilous times already. The news cycle is relentless. Your own life carries weight. But Paul does not say the times will destroy the faithful. He says: <em>know this.</em> Foreknowledge is armor. You are not surprised by evil. You are not caught off guard by betrayal, by compromise, by the world pressing in. You expected it. And you have been given something to stand on.',
        },
        {
          kind: 'reflection',
          id: 'tim3-perilous-now',
          prompt: 'Where do you see "perilous times" pressing in around you right now? And where in your own heart are you most tempted by the things Paul is about to list?',
        },
      ],
    },

    /* ─── 2 Timothy 3:2–3a — Vice Catalog, Part 1 ──────────────────── */
    {
      ref: '2 Timothy 3:2–3a',
      title: 'Lovers of Themselves, Covetous, Boasters, Proud',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 2,
              spans: [
                t('For men shall be '),
                hy('lovers of their own selves', 'greek-philautoi'),
                t(', '),
                hg('covetous', 'vice-covet'),
                t(', '),
                hg('boasters', 'vice-boast'),
                t(', '),
                hg('proud', 'vice-proud'),
                t(', blasphemers, disobedient to parents, unthankful, unholy,'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'greek-philautoi',
          title: 'Philautoi — Lovers of Self',
          script: 'φιλαύτοι',
          translit: '<strong>philautoi</strong> · lovers of themselves; self-centered; selfish',
          description:
            'The root is unusual—a word Paul introduces here with force. Not healthy self-regard, but the diversion of all affection toward oneself. When this happens, every other virtue inverts. Covetousness replaces gratitude. Boastfulness replaces humility. Disobedience replaces reverence. Self-love is the root from which the entire vice catalog grows.',
        },
        {
          kind: 'commentary',
          id: 'vice-covet',
          html:
            'Covetousness is the hunger for more—more money, more status, more possessions. It is a form of idolatry: making the accumulation of things the measure of success. A covetous person is never satisfied. There is always another rung to climb.',
        },
        {
          kind: 'commentary',
          id: 'vice-boast',
          html:
            'Boasters speak loud about their own achievements. They need others to know how much they have accomplished. Boasting covers deep insecurity—a need to prove worth through words rather than letting work speak for itself.',
        },
        {
          kind: 'commentary',
          id: 'vice-proud',
          html:
            'Pride is arrogance—the conviction that you are better than others, that the rules apply differently to you. A proud person is unmovable. They will not be taught, will not be corrected, will not stoop to listen.',
        },
        {
          kind: 'christ',
          id: 'christ-self-love',
          title: 'Christ Connection — The Self-Forgetting Love',
          html:
            'Jesus taught the opposite of self-love: "If any man will come after me, let him deny himself, and take up his cross, and follow me" (Matt. 16:24). Denying oneself does not mean self-hatred. It means placing Christ and His kingdom above the desires of the ego. "Whosoever shall lose his life for my sake shall find it" (Matt. 16:25). The only way out of the prison of self-love is through Him.',
        },
        {
          kind: 'carry',
          html:
            'Notice how Paul begins: not with the grossest sins, but with the root. Self-love. This is the disease. Covetousness, boasting, pride—these are the symptoms. If you are tempted by any in his list, ask yourself: where am I loving myself more than God? Where am I making myself the center? The antidote is radical other-focus: loving God supremely, loving your neighbor as yourself.',
        },
        {
          kind: 'reflection',
          id: 'tim3-self-love',
          prompt: 'Where is self-love active in your own life right now—not as obvious narcissism, but as subtle self-centeredness? What would it mean to deny it?',
        },
      ],
    },

    /* ─── 2 Timothy 3:2b–3b — Vice Catalog, Part 2 ──────────────────── */
    {
      ref: '2 Timothy 3:2b–3b',
      title: 'Blasphemers, Disobedient to Parents, Unthankful, Unholy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 2,
              spans: [
                t('...'),
                hg('blasphemers', 'vice-blasph'),
                t(', '),
                hg('disobedient to parents', 'vice-parents'),
                t(', '),
                hg('unthankful', 'vice-unthank'),
                t(', '),
                hg('unholy', 'vice-unholy'),
                t(','),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'vice-blasph',
          html:
            'Blasphemers speak evil—against God, against what is holy, against truth itself. This is not thoughtless swearing but deliberate slander of God and His character. A blasphemer refuses to reverence anything higher than themselves.',
        },
        {
          kind: 'commentary',
          id: 'vice-parents',
          html:
            'Disobedience to parents is a breakdown of the most fundamental earthly authority structure. When honor for parents erodes, so does respect for all legitimate authority—civil, spiritual, moral. The home becomes a battleground.',
        },
        {
          kind: 'commentary',
          id: 'vice-unthank',
          html:
            'Unthankfulness is a spiritual poison. An unthankful person cannot see God&apos;s hand in anything. Gifts are taken for granted or resented. Blessings go unnoticed. The ability to receive with joy—to say "thank you"—has atrophied.',
        },
        {
          kind: 'commentary',
          id: 'vice-unholy',
          html:
            'Unholy means defiled, profane, irreverent. Where holiness has fled, everything becomes common, everything is permissible. The sacred is reduced to the ordinary. God is no longer feared.',
        },
        {
          kind: 'christ',
          id: 'christ-reverence',
          title: 'Christ Connection — Reverence Restored in Him',
          html:
            'Jesus taught us to honor our parents—even from the cross, He made provision for His mother (John 19:26–27). And He taught us to give thanks: the Eucharist, the "giving of thanks," is its very name. He made His own life a sacrifice of reverence to the Father: "Not my will, but thine, be done" (Luke 22:42). In Him, reverence and gratitude are not quaint relics but the deepest realities.',
        },
        {
          kind: 'carry',
          html:
            'These are not grand sins—they are the small erosions that hollow out a soul. A muttered curse. An eye-roll at a parent. A meal eaten without notice of who provided it. A day treated as ordinary when God has given it. The antidote is a daily practice: honor, gratitude, reverence. Out loud. Over and over.',
        },
        {
          kind: 'reflection',
          id: 'tim3-rev-grat',
          prompt: 'Where have you become unthankful? Where in your family relationships is reverence missing? Name one act of honor you can show this week.',
        },
      ],
    },

    /* ─── 2 Timothy 3:3c–5 — Vice Catalog, Part 3 & Form of Godliness ─── */
    {
      ref: '2 Timothy 3:3c–5',
      title: 'Without Natural Affection, Fierce, Despisers of the Good',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 3,
              spans: [
                t('Without '),
                hg('natural affection', 'vice-affection'),
                t(', trucebreakers, false accusers, incontinent, '),
                hg('fierce', 'vice-fierce'),
                t(', '),
                hg('despisers of those that are good', 'vice-despise'),
                t(','),
              ],
            },
            {
              number: 4,
              spans: [
                hg('Traitors', 'vice-traitor'),
                t(', heady, highminded, '),
                hg('lovers of pleasures more than lovers of God', 'vice-pleasures'),
                t(';'),
              ],
            },
            {
              number: 5,
              spans: [
                hp('Having a form of godliness', 'christ-form'),
                t(', but '),
                hg('denying the power thereof', 'vice-power'),
                t(': from such turn away.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'vice-affection',
          html:
            '"Without natural affection." Even animals love their young. When natural bonds of love erode—parent abandoning child, neighbor ignoring neighbor—something has died inside. This vice describes a kind of coldness, an inability to feel or show tenderness.',
        },
        {
          kind: 'commentary',
          id: 'vice-fierce',
          html:
            'The fierce person is violent in word and deed. Not necessarily physically, but in manner—harsh, cutting, cruel. There is no gentleness in them. No space for others to be weak or to make mistakes.',
        },
        {
          kind: 'commentary',
          id: 'vice-despise',
          html:
            'Despising the good means hating goodness itself. When someone sees integrity, courage, sacrifice—and responds with scorn—you are watching a soul inverted. Good looks foolish to them. The virtuous appear weak.',
        },
        {
          kind: 'commentary',
          id: 'vice-traitor',
          html:
            'Traitors betray trust. They may smile while plotting your harm. They break covenants, abandon friends, sell out allies for gain. The ancient Greeks called this the worst of sins—not because of the act but because of the violation of trust.',
        },
        {
          kind: 'commentary',
          id: 'vice-pleasures',
          html:
            'Lovers of pleasure replace love of God with love of ease, comfort, sensation. Not that pleasure is evil, but when it becomes the organizing principle of life, the God-shaped void has been filled with a lesser good. Sobriety, discipline, sacrifice are now incomprehensible.',
        },
        {
          kind: 'commentary',
          id: 'vice-power',
          html:
            'This is Paul&apos;s climax. The most dangerous heresy is not crude atheism but empty religion. People can look faithful, speak piously, gather to worship—while rejecting the transforming power of the gospel. The form remains; the power has fled.',
        },
        {
          kind: 'christ',
          id: 'christ-form',
          title: 'Christ Connection — The Power of His Presence',
          html:
            'Form without power is the Pharisees—whitewashed tombs beautiful on the outside, full of hypocrisy and lawlessness within (Matt. 23:27–28). But Paul points away from mere doctrine toward transformation. The power of godliness is Christ in you, changing you, making you like Him. "It is God which worketh in you both to will and to do of his good pleasure" (Phil. 2:13). The difference between religion and gospel is the difference between trying harder and being made new.',
        },
        {
          kind: 'carry',
          html:
            'Paul ends his catalog with a command: "from such turn away." This is not vindictive. It is protective. Evil is contagious. Hypocrisy spreads. If you spend your time in the company of people who have the form but deny the power, you will begin to doubt the power yourself. Holiness also spreads, but it requires separation from what would drag you down. Choose your company carefully.',
        },
        {
          kind: 'reflection',
          id: 'tim3-power-form',
          prompt: 'Where in your own spiritual life do you see "a form of godliness but deny the power thereof"? What would it look like to invite His power in?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 2 Timothy 3:6–7 — Ever Learning, Never Coming to Truth ────── */
    {
      ref: '2 Timothy 3:6–7',
      title: 'Ever Learning, Never Coming to the Knowledge of the Truth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 6,
              spans: [
                t('For of this sort are they which '),
                hg('creep into houses', 'vice-creep'),
                t(', and '),
                hg('lead captive silly women laden with sins', 'vice-captive'),
                t(', led away with divers lusts,'),
              ],
            },
            {
              number: 7,
              spans: [
                hp('Ever learning, and never able to come to the knowledge of the truth', 'christ-truth'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'vice-creep',
          html:
            '"Creep into houses" paints an image of deception—not entering openly, but sneaking, insinuating themselves into homes through charm and false piety. These false teachers work intimately, finding vulnerable people.',
        },
        {
          kind: 'commentary',
          id: 'vice-captive',
          html:
            'Paul speaks directly to the tactics of false teachers: they target those weighed down by guilt and sin. Women (though Paul is not limiting this to one gender) seeking spiritual guidance find themselves instead in bondage to manipulative teachers who exploit their hunger for truth.',
        },
        {
          kind: 'commentary',
          id: 'tim3-learn-not-know',
          html:
            'This is the tragedy: perpetual learning without arrival. These people attend seminars, read books, pursue teachers—but never come to <em>know</em> the truth. Knowledge here is not intellectual assent but relational encounter. It is knowing Christ. Without Him, all learning is wheels turning in the mud.',
        },
        {
          kind: 'christ',
          id: 'christ-truth',
          title: 'Christ Connection — The Truth That Saves',
          html:
            'Jesus said: "Ye shall know the truth, and the truth shall make you free" (John 8:32). And earlier: "I am the way, the truth, and the life" (John 14:6). The people Paul describes are ever learning but never knowing Christ. They have made knowledge an end in itself rather than a means to encounter Him. Scripture is not wisdom about God; it is the testimony to God—and it leads to a Person.',
        },
        {
          kind: 'carry',
          html:
            'Be careful of the voice that promises answers but never delivers peace. That offers more teaching, more techniques, more disciplines—but leaves you always hungry, always guilty, always striving. The truth that endures is not complicated. It is simple: Christ came. He died. He rose. He loves you. He offers forgiveness. That truth does not need endless explanation. It needs to be received, trusted, lived.',
        },
        {
          kind: 'reflection',
          id: 'tim3-know-truth',
          prompt: 'Have you been caught in "ever learning, never knowing"? What would it look like to stop gathering information and start encountering Christ himself?',
        },
      ],
    },

    /* ─── 2 Timothy 3:8–9 — Jannes and Jambres ─────────────────────── */
    {
      ref: '2 Timothy 3:8–9',
      title: 'Jannes and Jambres Resisted Moses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 8,
              spans: [
                t('Now as '),
                hg('Jannes and Jambres withstood Moses', 'greek-anthistemi'),
                t(', so do these also '),
                hy('resist the truth', 'greek-anthistemi'),
                t(': men of corrupt minds, reprobate concerning the faith.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('But they shall proceed no further: for their folly shall be manifest unto all men, as theirs also was.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tim3-jannes-backdrop',
          html:
            'Jannes and Jambres were Egyptian magicians who opposed Moses in Exodus 7. When Moses turned the staff into a serpent, they did the same through their "secret arts." When Moses turned water to blood, they matched it. But they could not match the ultimate demonstrations of God&apos;s power. They were exposed as frauds.',
        },
        {
          kind: 'greek',
          id: 'greek-anthistemi',
          title: 'Anthistemi — Withstand, Resist',
          script: 'ἀνθίστημι',
          translit: '<strong>anthistemi</strong> · to withstand; to resist; to oppose; to set against',
          description:
            'The word is military—to stand against, to take a defensive position against an opponent. These teachers are not merely disagreeing; they are actively opposing the truth of God. They have dug in.',
        },
        {
          kind: 'commentary',
          id: 'tim3-folly-manifest',
          html:
            'Paul offers Timothy hope: these false teachers will not win. Their folly will become obvious—to everyone. They will overreach. They will contradict themselves. They will be shown to be frauds, just as Jannes and Jambres were. Truth has a way of vindicating itself.',
        },
        {
          kind: 'christ',
          id: 'christ-magicians',
          title: 'Christ Connection — The Power No Magician Can Match',
          html:
            'The magicians of Egypt could imitate miracles up to a point. But they could not heal the sick, raise the dead, forgive sins, or transform hearts. Jesus did all of this. And He does it still. The difference between true spiritual power and mere illusion becomes clear over time. A false teacher may impress for a season, but the fruit of the gospel—peace, love, joy, transformed lives—endures and multiplies. Illusions collapse under scrutiny.',
        },
        {
          kind: 'carry',
          html:
            'If you are listening to teachers who resist truth, know this: they will not ultimately prevail. Their contradictions will eventually surface. Their hypocrisy will be exposed. You do not need to fight them. You need only to stand firm in what you have learned—Scripture, Christ, the gospel—and let time reveal who is speaking with authority and who is merely making a show.',
        },
        {
          kind: 'reflection',
          id: 'tim3-jannes',
          prompt: 'What false teachings have you encountered that sounded impressive but lacked real power to change lives? How can you tell the difference between imitation and the real thing?',
        },
      ],
    },

    /* ─── 2 Timothy 3:10–13 — Paul's Persecutions and Deliverance ────── */
    {
      ref: '2 Timothy 3:10–13',
      title: 'Persecutions I Endured — Yet All That Will Live Godly Shall Suffer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 10,
              spans: [
                t('But thou hast fully known my '),
                hg('doctrine, manner of life, purpose, faith, longsuffering, charity, patience', 'tim3-known-paul'),
                t(', Persecutions, afflictions, which came unto me at Antioch, at Iconium, at Lystra; what persecutions I endured: but out of them all '),
                hp('the Lord delivered me', 'christ-deliv-paul'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tim3-known-paul',
          html:
            'Paul is not abstract. He tells Timothy: you have seen my life. You know what I teach (doctrine), how I live (manner of life), what drives me (purpose), what I trust (faith). And you have watched me suffer. You have heard of the mob at Antioch, the stoning at Lystra. You know I am not asking you to do what I have not done.',
        },
        {
          kind: 'commentary',
          id: 'tim3-deliverance',
          html:
            'Paul does not promise escape from persecution. He promises delivery <em>through</em> it. Each city he names was a place of violence and threat. Yet in each, the Lord sustained him. Not always removing the trial, but carrying him through it. Deliverance is not always extraction; it is often endurance wrapped in God&apos;s presence.',
        },
        {
          kind: 'christ',
          id: 'christ-deliv-paul',
          title: 'Christ Connection — Delivered Through Trials',
          html:
            'Paul promises Timothy that he too will be delivered, though not necessarily rescued from danger. Jesus taught the same: "Fear them not therefore: for there is nothing covered, that shall not be revealed; and hid, that shall not be known. But what I tell you in darkness, that speak ye in light… And fear not them which kill the body, but are not able to kill the soul: but rather fear him which is able to destroy both soul and body in hell. But are not two sparrows sold for a farthing? and one of them shall not fall on the ground without your Father" (Matt. 10:26–29). Deliverance through Christ means you are never alone in your suffering; you are never beyond His reach.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 11,
              spans: [
                t('Yea, and '),
                hp('all that will live godly in Christ Jesus shall suffer persecution', 'christ-godly-suffer'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tim3-godly-suffer',
          html:
            'This is not threat but promise. Living godly means living in opposition to the world&apos;s values. The world loves money; the godly give it away. The world demands revenge; the godly forgive. The world exalts pride; the godly humble themselves. This collision is inevitable. Persecution is not a surprise; it is a sign that you are following Him.',
        },
        {
          kind: 'christ',
          id: 'christ-godly-suffer',
          title: 'Christ Connection — Following Him Into Persecution',
          html:
            'Jesus said plainly: "In the world ye shall have tribulation: but be of good cheer; I have overcome the world" (John 16:33). And: "If any man will come after me, let him deny himself, and take up his cross, and follow me" (Matt. 16:24). The cross is not metaphorical—it is the willingness to die rather than betray Him. But He adds: "All power is given unto me in heaven and in earth… and, lo, I am with you alway, even unto the end of the world" (Matt. 28:18, 20). In persecution, He is present.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 12,
              spans: [
                t('But '),
                hg('evil men and seducers', 'tim3-seducers'),
                t(' shall '),
                hg('wax worse and worse', 'tim3-worse'),
                t(', '),
                hg('deceiving, and being deceived', 'tim3-deceived'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tim3-seducers',
          html:
            'Evil people do not stand still. They grow bolder. They deepen their deception. They multiply. This is the trajectory Paul warns of: the world does not gradually improve; it spirals downward. The news Timothy receives from the churches confirms this pattern.',
        },
        {
          kind: 'commentary',
          id: 'tim3-worse',
          html:
            '"Wax worse and worse"—the pattern accelerates. The closer we get to the end, the more brazen the opposition becomes. But Paul does not tell Timothy this to paralyze him. He tells him to prepare. To hold fast. To know his enemies will grow fiercer, which is why he needs the Scripture—something immovable.',
        },
        {
          kind: 'commentary',
          id: 'tim3-deceived',
          html:
            'Both deceiving and being deceived—the seducers lie to others, but they are also deceived themselves. They do not knowingly serve evil; they have been convinced of a lie. This should make you merciful. Those who oppose the gospel are not always malicious; they are often trapped.',
        },
        {
          kind: 'carry',
          html:
            'Paul draws a line. On one side: godly people who suffer but endure in Christ. On the other: seducers who grow worse, deceiving and self-deceived. You cannot walk both paths. Godliness will cost you. But deception will cost you more—your soul. Choose the path of truth now, and suffer what comes. It is worth it.',
        },
        {
          kind: 'reflection',
          id: 'tim3-persist-suffer',
          prompt: 'What has your faith cost you so far? Where are you tempted to compromise to avoid suffering? What would it look like to persist?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 2 Timothy 3:14–15 — Continue in What You Have Learned ────── */
    {
      ref: '2 Timothy 3:14–15',
      title: 'Continue Thou in the Things Which Thou Hast Learned',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 14,
              spans: [
                hp('But continue thou', 'tim3-continue-action'),
                t(' in the things which thou hast learned and hast been assured of, knowing of whom thou hast learned them;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tim3-continue-action',
          html:
            'Paul shifts from warning to instruction. "But continue." In the face of perilous times, false teachers, and coming persecution, Timothy is called to something counterintuitive: not innovation, not escape, but faithful persistence in what he has already learned. Stability, not novelty, is the answer.',
        },
        {
          kind: 'commentary',
          id: 'tim3-assured',
          html:
            'Paul does not call Timothy to blind faith. He has been "assured" of these things. He has examined them, tested them, found them true. This is not gullibility but conviction. Now, in the storm, he is to hold to that conviction.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 15,
              spans: [
                t('And that '),
                hg('from a child thou hast known the holy scriptures', 'tim3-child-scripture'),
                t(', which are able to make thee '),
                hp('wise unto salvation through faith which is in Christ Jesus', 'christ-salvation-script'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tim3-child-scripture',
          html:
            'Timothy grew up in Scripture. His mother and grandmother taught him the Psalms, the Torah, the Prophets—not as academic subjects but as living truth. This early formation gave him roots. When false teachers came, when persecution rose, Timothy had something planted deep. He did not start from scratch.',
        },
        {
          kind: 'commentary',
          id: 'tim3-salvation-aim',
          html:
            'Notice what the Scriptures are "able" to do: make wise unto salvation. Scripture is not primarily a book of rules or a science textbook. It is a pathway. It leads somewhere. It aims at salvation—at rescue, healing, wholeness through faith in Christ. That is the bottom line.',
        },
        {
          kind: 'christ',
          id: 'christ-salvation-script',
          title: 'Christ Connection — Scripture Points to Salvation in Him',
          html:
            'Jesus told the religious scholars: "Search the scriptures; for in them ye think ye have eternal life: and they are they which testify of me" (John 5:39). The Old Testament is not separate from the gospel. It is an arrow pointing to Jesus. When you read about the sacrifices, you see Him. When you read about the Passover lamb, you see Him. When you read about the suffering servant, you see Him. Scripture is wise unto salvation because every page leads back to Him.',
        },
        {
          kind: 'carry',
          html:
            'If you grew up in Scripture, treasure that formation. If you did not, begin now. Let the Word be planted deep in you. Not to make you argumentative or prideful, but to give you roots that no storm can uproot. The perilous times will come. False teachers will multiply. But if Scripture is woven through you, you will have something immovable to hold to.',
        },
        {
          kind: 'reflection',
          id: 'tim3-roots',
          prompt: 'What spiritual formation shaped you early? Or where do you feel the lack of it now? What would it look like to plant Scripture deep in yourself or your family?',
        },
      ],
    },

    /* ─── 2 Timothy 3:16–17 — All Scripture God-Breathed and Profitable ──── */
    {
      ref: '2 Timothy 3:16–17',
      title: 'All Scripture Given by Inspiration of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 16,
              spans: [
                hp('All scripture', 'tim3-all-script'),
                t(' is '),
                hy('given by inspiration of God', 'greek-theopneustos'),
                t(', and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tim3-all-script',
          html:
            'Notice the word "all." Not just the inspiring parts, not just the Gospels, not just the prophecies. All of it. This is a sweeping claim. It does not mean every passage is equally clear or every story equally prominent. But it does mean there is no part of Scripture that lies outside God&apos;s purpose.',
        },
        {
          kind: 'greek',
          id: 'greek-theopneustos',
          title: 'Theopneustos — God-Breathed',
          script: 'θεόπνευστος',
          translit: '<strong>theopneustos</strong> · inspired by God; God-breathed; divinely inspired',
          description:
            'The word literally means "breathed out by God." Scripture is not human invention later blessed by God. It is the living breath of God taking written form. This does not deny the human writers. They wrote in their language, their style, their context. But they wrote as instruments of the Spirit, and what came out bears the mark of God.',
        },
        {
          kind: 'commentary',
          id: 'tim3-four-uses',
          html:
            'Paul lists four uses: (1) Doctrine—what to believe, the framework of truth. (2) Reproof—exposure of error, correction when you wander. (3) Correction—restoration to the right path. (4) Instruction in righteousness—training toward virtue, character formation. Together, these four make you whole.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 17,
              spans: [
                t('That '),
                hp('the man of God', 'tim3-man-god'),
                t(' may be '),
                hy('perfect', 'greek-artios'),
                t(', '),
                hg('throughly furnished unto all good works', 'tim3-furnished'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tim3-man-god',
          html:
            'A "man of God"—or woman of God—is someone set apart for His purposes. Not necessarily a pastor or prophet, but anyone who has given themselves to follow Him. Paul is saying: Scripture equips you. Not merely to think well, but to do well. Not merely to know the truth, but to live it.',
        },
        {
          kind: 'greek',
          id: 'greek-artios',
          title: 'Artios — Complete, Fitted',
          script: 'ἄρτιος',
          translit: '<strong>artios</strong> · complete; perfect; fully equipped; fitted',
          description:
            'The root suggests something fitted together, complete, lacking nothing. A ship fully rigged and ready to sail. A soldier fully armed. Scripture is not a partial tool. It is comprehensive. It covers what you need.',
        },
        {
          kind: 'commentary',
          id: 'tim3-furnished',
          html:
            'Furnished unto all good works. Not just some works—all. Whatever good thing God calls you to, Scripture has equipped you for it. Not because it is a handbook for every situation, but because it has shaped your mind, reformed your character, and aligned you with God&apos;s purposes.',
        },
        {
          kind: 'christ',
          id: 'christ-script-artios',
          title: 'Christ Connection — The Same Spirit That Inspired Inspires Now',
          html:
            'Peter wrote: "Holy men of God spake as they were moved by the Holy Ghost" (2 Peter 1:21). The same Spirit who moved the prophets moves in you. The same Spirit who spoke through Moses speaks through Scripture to your soul. When you read and meditate, you are not studying ancient texts. You are meeting the living God. "The word of God is quick, and powerful, and sharper than any twoedged sword" (Heb. 4:12). It is alive.',
        },
        {
          kind: 'carry',
          html:
            'Paul&apos;s point is not that the Bible is inerrant on every technical detail—though God&apos;s Word is trustworthy in all it affirms. His point is that Scripture is sufficient. You do not need another authority. You do not need to chase after the latest teacher or technique. You need Scripture, prayer, obedience, and a humble heart. That combination will equip you for whatever good works God has called you to.',
        },
        {
          kind: 'reflection',
          id: 'tim3-equipped',
          prompt: 'Where do you feel unprepared for the good work God is calling you to? How might Scripture equip you—not with answers, but with character and wisdom?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Timothy 3',
    quote:
      'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, thoroughly furnished unto all good works.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Timothy 3 · Study Guide',
  },

  hasHebrew: false,
};
