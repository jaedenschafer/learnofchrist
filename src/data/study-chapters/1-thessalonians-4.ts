import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Thessalonians 4 — Sanctification and the Coming of the Lord
 *
 * Paul begins with an appeal: "We beseech you, brethren, and exhort you by
 * the Lord Jesus, that as ye have received of us how ye ought to walk and to
 * please God, so ye would abound more and more."
 *
 * Sanctification is concrete—it touches the body, work, relationships, purity.
 * Not escape from the world but transformation within it.
 *
 * Then Paul opens a vision of comfort: believers will not face the end alone.
 * Christ Himself will descend. The dead in Christ will rise. The living will
 * be caught up to meet Him. And so we shall ever be with the Lord. This hope
 * makes holiness not burdensome but liberating.
 */
export const FIRST_THESSALONIANS_4: RichChapterContent = {
  bookSlug: '1-thessalonians',
  bookName: '1 Thessalonians',
  chapter: 4,

  estimatedMinutes: { beginner: 6, intermediate: 11, deep: 17 },
  intros: [
    'Paul has just comforted the Thessalonians about those who have "fallen asleep"—believers who died before seeing Christ&apos;s return. Now he turns to their daily walk. Holiness is not abstract. It is how you use your body, how you treat others, how you earn your bread. Sanctification touches everything.',
    'The call to sanctification is urgent but not joyless. Paul grounds it in the hope of Christ&apos;s return. You are preserved—set apart—not for judgment but for reunion. This is the comfort that transforms ethics into love.',
  ],

  opener: {
    matchArtist: /tissot|rembrandt/i,
    matchTitle: /thessalon|coming|return|rapture/i,
    caption: 'The Call to Sanctification; The Coming of the Lord',
  },

  bottomShare: {
    label: 'Share 1 Thessalonians 4',
    quote:
      'For this is the will of God, even your sanctification. The Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Thessalonians 4 · Study Guide',
  },

  sections: [
    /* ─── Walk and Please God ─────────────────────────────────────────── */
    {
      ref: '1 Thessalonians 4:1–2',
      title: 'Walk and Please God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('Furthermore then we beseech you, brethren, and exhort you by the Lord Jesus, that '),
                hp('as ye have received of us how ye ought to walk and to please God, so ye would abound more and more', 'v1-walk'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'v1-walk',
          html:
            'Paul is not inventing a new gospel; he is reminding them of what they already know. They have heard, received, begun to walk. Now the call is simple: keep going. <em>Abound more and more.</em> The Christian life is not maintenance—it is growth, deepening, expansion. Step by step, mile by mile, you are learning how to walk in a way that pleases God.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 2,
              spans: [
                t('For ye know what '),
                hg('commandments we gave you by the Lord Jesus', 'v2-command'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'v2-command',
          html:
            'The commandments Paul gave were not his own invention. They came "<em>by the Lord Jesus</em>"—through Jesus, from Jesus, in Jesus&apos; authority. When Paul calls you to walk in purity and holiness, he is not imposing his opinion. He is passing along the words of Jesus Himself.',
        },
        {
          kind: 'carry',
          html:
            'You have heard how to walk. You have received instruction. The question is not understanding—it is expansion. <em>Abound more and more.</em> Where have you been playing it small in your obedience? Where are you content to merely maintain instead of grow? Pick one place this week and abound.',
        },
        {
          kind: 'reflection',
          id: 'ref-walk',
          prompt: 'In what area of your life do you most want to "abound more and more" in pleasing God?',
        },
      ],
    },

    /* ─── The Will of God: Sanctification ──────────────────────────────── */
    {
      ref: '1 Thessalonians 4:3–4',
      title: 'The Will of God: Your Sanctification',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 3,
              spans: [
                t('For '),
                hp('this is the will of God, even your sanctification', 'v3-will'),
                t(', that ye '),
                hg('should abstain from fornication', 'v3-fornication'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'v3-will',
          html:
            'Sanctification is not optional. It is the will of God. Not His preference, His hope, His suggestion—His <em>will.</em> To follow Jesus is to consent to being made holy, set apart, separated from sin. This is what you agreed to when you believed.',
        },
        {
          kind: 'commentary',
          id: 'v3-fornication',
          html:
            'Paul begins with sexual purity. In the Greco-Roman world, sexual immorality was everywhere—normalized, celebrated, woven into religion and culture. For believers, the body is the temple of the Holy Spirit. How you use it is a spiritual act. Abstaining from fornication is not prudishness; it is honor toward the God who dwells in you.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 4,
              spans: [
                t('That every one of you should '),
                hg('know how to possess his vessel in sanctification and honour', 'v4-vessel'),
                t('; Not in the lust of concupiscence, even as the Gentiles which know not God;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'v4-vessel',
          html:
            'The body is a vessel—a container for the Holy Spirit. <em>Possess it in sanctification and honour.</em> You do not own your body as an owner owns property; you steward it as a sacred trust. Every choice about the body—how you eat, how you move, how you give it—reflects whether you believe it belongs to God or to yourself.',
        },
        {
          kind: 'greek',
          id: 'v3-hagiasmos',
          title: 'Hagiasmos — &ldquo;Sanctification&rdquo;',
          script: 'ἁγιασμός',
          translit: '<strong>hagiasmos</strong> · sanctification; the state of being set apart; moral purity and consecration',
          description:
            'Hagiasmos is both what God does (He sanctifies us) and what we do (we sanctify ourselves by obedience). It is a status—we are holy in Christ—and a process—we are becoming holier through the Spirit&apos;s work and our cooperation. See 1 Corinthians 6:11; 2 Thessalonians 2:13.',
        },
        {
          kind: 'greek',
          id: 'v4-skeuos',
          title: 'Skeuos — &ldquo;vessel&rdquo;',
          script: 'σκεῦος',
          translit: '<strong>skeuos</strong> · a vessel; a container; an instrument; the body',
          description:
            'In 2 Corinthians 4:7, Paul says, "We have this treasure in earthen vessels." Your body is temporary, fragile, earthen—but it carries the infinite treasure of the Holy Spirit. How you treat it matters because of what it carries. See Romans 6:12–13.',
        },
        {
          kind: 'christ',
          id: 'v3-christ-temple',
          title: 'Christ Connection — Your Body as His Temple',
          html:
            'Jesus said, "Destroy this temple, and in three days I will raise it up" (John 2:19)—speaking of His own body and His resurrection. Now, through the Spirit, each believer&apos;s body has become a temple. Paul writes, "Know ye not that your body is the temple of the Holy Ghost which is in you?" (1 Corinthians 6:19). This is the mystery of the Incarnation extended: God dwells not just in one human body (Jesus&apos;) but in the bodies of all who believe.',
        },
        {
          kind: 'carry',
          html:
            'Your body is not a problem to escape from. It is not a machine to exploit. It is a vessel—a sacred container for the presence of the Holy Spirit. Every action you take in and through your body is either a small act of worship or a small act of desecration. This week, try noticing: in what moments do you honor your vessel? In what moments do you dishonor it?',
        },
        {
          kind: 'reflection',
          id: 'ref-vessel',
          prompt: 'If your body is truly a temple of the Holy Spirit, what would change about how you care for it, use it, or think about it?',
        },
      ],
    },

    /* ─── Brotherly Love ──────────────────────────────────────────────── */
    {
      ref: '1 Thessalonians 4:9–10',
      title: 'Brotherly Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 9,
              spans: [
                t('But as touching '),
                hp('brotherly love ye need not that I write unto you', 'v9-philadelphia'),
                t(': for ye yourselves are taught of God to '),
                hg('love one another', 'v9-teach'),
                t(';'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And indeed ye do it toward all the brethren which are in all Macedonia: but we beseech you, brethren, that ye abound more and more;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'v9-philadelphia',
          html:
            'Paul praises the Thessalonians[res:intertextual-1thess-4-love]. They already love one another. They have learned this not from Paul&apos;s letter but from God Himself—through the Spirit, through prayer, through witness. Love is not taught as a doctrine; it is learned as a life, caught from others, kindled by the Spirit.',
        },
        {
          kind: 'commentary',
          id: 'v9-teach',
          html:
            'Notice the shift from <em>I</em> to <em>you.</em> Paul steps back. He is not the source of their love; God is. The Thessalonians do not need his instruction here—they need his encouragement. He has seen their love extended across all Macedonia. His only word is: keep going. Abound more and more.',
        },
        {
          kind: 'greek',
          id: 'v9-philadelphia-2',
          title: 'Philadelphia — &ldquo;Brotherly Love&rdquo;',
          script: 'φιλαδέλφια',
          translit: '<strong>philadelphia</strong> · love of brothers; familial affection; love among believers',
          description:
            'Philadelphia is the affection that binds siblings together—warm, particular, exclusive in a good way. It is not the love of strangers but the love of family. In the church, all believers are brothers and sisters, bound by Christ. See Hebrews 13:1; 1 Peter 1:22.',
        },
        {
          kind: 'carry',
          html:
            'Love is not something you must force yourself to feel. It is something you learn—from God, from others, from the Spirit working in you. If you have ever felt genuine affection for other believers, real warmth and care—that is the work of God in you. Your task is not to generate it but to notice it, honor it, and let it spread. <em>Abound more and more.</em>',
        },
        {
          kind: 'reflection',
          id: 'ref-love',
          prompt: 'Where do you see genuine brotherly love growing in your church or community? How might you nurture it?',
        },
      ],
    },

    /* ─── Quiet Hands and Honest Work ──────────────────────────────────── */
    {
      ref: '1 Thessalonians 4:11–12',
      title: 'Quiet Hands and Honest Work',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 11,
              spans: [
                t('And that ye '),
                hp('study to be quiet, and to do your own business, and to work with your own hands', 'v11-work'),
                t(', as we commanded you;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'v11-work',
          html:
            'The Thessalonians were apparently caught between two dangers: idleness and busybodiness[res:sefaria-work-dignity-provision]. Some were not working and were becoming dependent on others. Others were meddling in everyone else&apos;s affairs. Paul&apos;s prescription is simple: <em>do your own business.</em> Work with your own hands. Mind your own affairs. Be quiet. This is not apathy; it is dignity. You provide for yourself. You respect the boundaries of others. You let others live their lives.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 12,
              spans: [
                t('That ye may walk honestly toward them that are without, and that ye may have lack of nothing.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'v12-witness',
          html:
            'When you work and provide for yourself, you bear witness to unbelievers. They see that your faith does not make you lazy, parasitic, or entitled. You contribute. You sustain yourself. You are not a burden. This is how the gospel gains credibility in the world.',
        },
        {
          kind: 'carry',
          html:
            'There is quiet dignity in honest work. You do not boast about it. You do not broadcast it. You simply do your work, earn your bread, pay your bills, help when needed, and stay out of other people&apos;s business. This is sanctification in the ordinary: showing up, being faithful, being responsible. The world notices.',
        },
        {
          kind: 'reflection',
          id: 'ref-work',
          prompt: 'How does your work—however ordinary—serve as a witness to those around you? Are you working in a way that brings honor to God?',
        },
      ],
    },

    /* ─── Hope and Grief ────────────────────────────────────────────────── */
    {
      ref: '1 Thessalonians 4:13–14',
      title: 'Sorrow Not as Others Who Have No Hope',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 13,
              spans: [
                t('But I would not have you to be ignorant, brethren, concerning them which are asleep, that ye '),
                hp('sorrow not, even as others which have no hope', 'v13-sorrow'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'v13-sorrow',
          html:
            'Some of the Thessalonians had died. The church was grieving. But Paul does not say, "Do not sorrow." He says, "Do not sorrow as others which have no hope." <em>Grieve, but grieve differently.</em> Your sorrow is real—death is real, loss is real. But your sorrow has a frame around it: hope. Those who know nothing of Christ grieve into a void. You grieve toward a reunion.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 14,
              spans: [
                t('For if we believe that '),
                hg('Jesus died and rose again', 'v14-resurrection'),
                t(', even so them also which sleep in Jesus will God bring with him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'v14-resurrection',
          html:
            'Here is the logic: Jesus died and rose again. This is the cornerstone fact. Now, those who sleep in Jesus—believers who have died—will also rise. God will bring them with Him. Death does not end the story. Jesus&apos; resurrection is the guarantee of theirs. And yours.',
        },
        {
          kind: 'christ',
          id: 'v14-christ-firstfruits',
          title: 'Christ Connection — Christ as Firstfruits',
          html:
            'Paul writes elsewhere: "Christ the firstfruits; afterward they that are Christ&apos;s at his coming" (1 Corinthians 15:23). Jesus did not rise as an exception. He rose as the first of many. His resurrection is the guarantee and pattern of ours. When you see Him, you see your own future.',
        },
        {
          kind: 'carry',
          html:
            'If you are grieving the loss of a believer, your sorrow is legitimate. But it is not without hope. You will see them again. God will bring them with Him. This is not fantasy or false comfort. It is the promise of Jesus, sealed by His own resurrection. Grieve today. Grieve fully. But grieve with the assurance that death is not the end.',
        },
        {
          kind: 'reflection',
          id: 'ref-hope',
          prompt: 'How does the hope of resurrection change the way you think about death and loss?',
        },
      ],
    },

    /* ─── The Lord Himself Shall Descend ──────────────────────────────── */
    {
      ref: '1 Thessalonians 4:16a',
      title: 'The Lord Himself Shall Descend from Heaven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 16,
              spans: [
                t('For the Lord himself shall '),
                hp('descend from heaven with a shout, with the voice of the archangel, and with the trump of God', 'v16-shout'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'v16-shout',
          html:
            'This is not quiet. This is not hidden. <em>The Lord himself</em> comes. Not a messenger, not an angel, not a vision—the Lord Jesus in person. And He comes with noise: a shout, an archangel&apos;s voice, the trumpet of God. In a world of whispers and uncertainties, His coming will be unmistakable. Every ear will hear. Every eye will know.',
        },
        {
          kind: 'greek',
          id: 'v16-parousia',
          title: 'Parousia — &ldquo;Coming&rdquo; or &ldquo;Presence&rdquo;',
          script: 'παρουσία',
          translit: '<strong>parousia</strong> · coming; arrival; presence; the personal, visible return of Christ',
          description:
            'Parousia literally means "presence" or "being alongside." It was used for the arrival of a king or dignitary in a city. When Paul says the Lord&apos;s parousia is coming, he means Jesus will be personally, visibly present—not spiritually distant but physically present. See 1 Corinthians 15:23; 2 Peter 1:16.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world of subtle influences, quiet doubts, hidden powers. Jesus&apos; return will be the opposite: undeniable, public, impossible to miss. Your hope is not in secret knowledge or private visions. It is in the promise of His visible, audible, unmistakable arrival.',
        },
        {
          kind: 'reflection',
          id: 'ref-descent',
          prompt: 'What would it mean in your daily life to truly expect Christ to return visibly? How would it change your priorities?',
        },
      ],
    },

    /* ─── The Dead in Christ Shall Rise First ──────────────────────────── */
    {
      ref: '1 Thessalonians 4:16b',
      title: 'The Dead in Christ Shall Rise First',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 16,
              spans: [
                t('and the '),
                hg('dead in Christ shall rise first', 'v16b-rise'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'v16b-rise',
          html:
            'Those who have fallen asleep in Christ are not left behind. They do not miss the coming of the Lord. When He comes, they rise first. They get priority. The living are not exalted above them. The dead are not forgotten. All are gathered. This is the comfort Paul is building: no one is left out.',
        },
        {
          kind: 'carry',
          html:
            'If you grieve a believer who has died, hear this: they are not left out of Christ&apos;s return. They rise first. They are first to greet Him. Their death does not exclude them from the joy. They are woven into the very center of what&apos;s coming.',
        },
        {
          kind: 'reflection',
          id: 'ref-rise',
          prompt: 'How does the promise that believers who have died will rise first change your understanding of death?',
        },
      ],
    },

    /* ─── Caught Up Together to Meet the Lord in the Air ──────────────── */
    {
      ref: '1 Thessalonians 4:17',
      title: 'Caught Up Together to Meet the Lord in the Air',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 17,
              spans: [
                t('Then we which are alive and remain shall be '),
                hp('caught up together with them in the clouds, to meet the Lord in the air', 'v17-harpazo'),
                t(': and '),
                hg('so shall we ever be with the Lord', 'v17-ever'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'v17-harpazo',
          html:
            'The dead rise. The living are caught up. Together they meet the Lord in the air. This is not a secret event. This is not abandonment. This is the great gathering. Every believer, living and dead, caught up at once in the sudden presence of the Lord. No one is left behind. No one is separated.',
        },
        {
          kind: 'commentary',
          id: 'v17-ever',
          html:
            '<em>And so shall we ever be with the Lord.</em> This is the pivot point. This is what everything has been building toward. Not rescue from trouble, not escape from judgment, but reunion. Eternal presence with the One who loved you, died for you, rose again for you. <em>Ever.</em> Forever. Without end.',
        },
        {
          kind: 'greek',
          id: 'v17-harpazo-2',
          title: 'Harpazō — &ldquo;Caught Up&rdquo;',
          script: 'ἁρπάζω',
          translit: '<strong>harpazō</strong> · to seize; to snatch away; to transport suddenly; to catch up with force',
          description:
            'Harpazō conveys sudden, forceful action—but not violent. It is the verb used when God snatches away the prophet Philip (Acts 8:39). It is rescue, not violation. Believers are suddenly, powerfully removed from this age and translated into the presence of Christ. See Revelation 12:5; 2 Corinthians 12:2–4.',
        },
        {
          kind: 'greek',
          id: 'v17-apantesis',
          title: 'Apantēsis — &ldquo;Meeting&rdquo;',
          script: 'ἀπάντησις',
          translit: '<strong>apantēsis</strong> · a meeting; an encounter; going to meet someone',
          description:
            'In Matthew 25:6, the bridegroom comes and the virgins go out to <em>meet</em> him. In apantesis, there is always movement toward each other—a greeting, a reunion. Believers meet the Lord in the air not to be taken away from creation but to be reunited with Him in the new creation. See Titus 2:13.',
        },
        {
          kind: 'christ',
          id: 'v17-reunion',
          title: 'Christ Connection — The Great Reunion',
          html:
            'Jesus promised, "I will come again, and receive you unto myself; that where I am, there ye may be also" (John 14:3). This is not escape from the world. This is the fulfillment of Jesus&apos; own promise: to gather His own, to bring them into His presence, to share His glory. The goal of the gospel is not heaven as a distant shore, but Christ Himself—with Him, forever.',
        },
        {
          kind: 'carry',
          html:
            'You are not waiting for a distant abstraction. You are waiting for a Person. You are waiting to see the face you have trusted, the voice you have heard in prayer, the hands that carry your name. <em>Ever to be with the Lord.</em> This is the comfort Paul is pressing into your grief, your loneliness, your weariness. You are not alone. You will not be left behind. He will come, and you will be with Him, forever.',
        },
        {
          kind: 'reflection',
          id: 'ref-reunion',
          prompt: 'What would it mean to live today knowing you will spend eternity with the Lord? What would you change?',
        },
      ],
    },

    /* ─── Comfort One Another with These Words ─────────────────────────── */
    {
      ref: '1 Thessalonians 4:18',
      title: 'Comfort One Another with These Words',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 18,
              spans: [
                t('Wherefore '),
                hp('comfort one another with these words', 'v18-comfort'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'v18-comfort',
          html:
            'This is the purpose of all that has come before. Not speculation. Not anxiety about timelines or secret raptures or who goes first. But comfort. <em>Comfort one another.</em> When your brother grieves a lost loved one, you tell him: that person will rise. When you are weary and wondering if it all matters, you remember: Christ is coming. You will be with Him. And you pass this word to others. This is how believers strengthen each other through the ages.',
        },
        {
          kind: 'carry',
          html:
            'You have read these words. Now you are entrusted with them. When someone you love is grieving, you have something to say. When despair whispers that death wins, you have the truth. When the world feels broken and endless, you know it is not. Christ is coming. The dead will rise. We will all be together. Go find someone who needs to hear this and tell them. This is the comfort Paul is passing to you so you can pass it to others.',
        },
        {
          kind: 'artwork',
          matchTitle: /coming|return|descent|rapture|clouds/i,
          matchArtist: /tissot|beneduce|rembrandt/i,
          caption: '1 Thessalonians 4 · The Hope of His Coming',
        },
        {
          kind: 'reflection',
          id: 'ref-comfort',
          prompt: 'Who in your life needs to hear the comfort of these words right now? What would you say to them?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'intertextual-1thess-4-love',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Love Taught by God',
      url: 'https://www.intertextual.bible/',
      description: 'Explores how love is not merely commanded but caught—learned from God through the Spirit and modeled by faithful believers witnessing to one another.',
    },
    {
      id: 'sefaria-work-dignity-provision',
      kind: 'study',
      source: 'Sefaria',
      label: 'Work and Dignity in Scripture',
      url: 'https://www.sefaria.org/search?q=work%20provision%20dignity',
      description: 'The biblical vision of work not as punishment but as dignity—a way to provide for oneself and bear witness to the reality of one&apos;s faith.',
    },
  ],

};
