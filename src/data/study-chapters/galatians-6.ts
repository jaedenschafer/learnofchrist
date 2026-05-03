import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Galatians 6 — Restore, Bear, Sow, Reap, Glory in the Cross
 *
 * Paul closes his fiercest epistle with practical wisdom and soaring theology.
 * Believers restore the fallen in gentleness, bear one another's burdens and
 * so fulfill the law of Christ, reap what they sow. The foundational truth:
 * sow to the flesh, reap corruption; sow to the Spirit, reap eternal life.
 * And the closing note rings across the ages: Paul glories in nothing save
 * the cross of Christ, by whom the world is crucified unto him and he unto
 * the world. All the self-boasting of the false teachers collapses. A new
 * creature in Christ is the only thing that matters.
 */
export const GALATIANS_6: RichChapterContent = {
  bookSlug: 'galatians',
  bookName: 'Galatians',
  chapter: 6,

  estimatedMinutes: { 5: 8, 10: 15, 15: 21 },
  intros: [
    'Galatians closes not with doctrine alone but with the lived shape of the gospel. The law is gone; the Spirit&apos;s work remains. Believers are called to restore the fallen with meekness, to bear one another&apos;s weight, to sow to the Spirit rather than the flesh. The final word is staggering: Paul glories in the cross of Christ, and in that cross finds all the freedom the law could never grant.',
    'The false teachers boasted in the flesh—in circumcision, in bloodline, in external markers of achievement. Paul&apos;s boast is radically different. The cross. That is where glory lives. By that cross the world is crucified unto him, and he unto the world. All his old identity dies. What rises is something new: a creature remade in Christ, bearing His marks, walking in His grace.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /cross|crucifixion/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Galatians 6',
    quote:
      'But God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world. For in Christ Jesus neither circumcision availeth any thing, nor uncircumcision, but a new creature.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Galatians 6 · Study Guide',
  },

  sections: [
    /* ─── Galatians 6:1–5 — Restore in Meekness; Each Shall Bear His Own ─── */
    {
      ref: 'Galatians 6:1–5',
      title: 'Restore the Fallen in Meekness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 1,
              spans: [
                t('Brethren, if a man be '),
                hg('overtaken in a fault', 'gal6-overtaken'),
                t(', ye which are '),
                t('spiritual'),
                t(', '),
                hy('restore', 'gal6-katartizo'),
                t(' such an one in the spirit of '),
                hy('meekness', 'gal6-meekness'),
                t('; considering thyself, lest thou also be tempted.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-overtaken',
          html:
            'A person has stumbled. Not deliberately rebelled, but been overtaken—caught off guard by temptation. The verb is <em>prolambano</em>, as if a snare has caught him. He needs rescue, not judgment. And the responsibility falls on the spiritual—on those strong enough to help, mature enough to carry.',
        },
        {
          kind: 'greek',
          id: 'gal6-katartizo',
          title: 'Katartizō — Restore; Put Back Together',
          script: 'καταρτίζω',
          translit: '<strong>katartizō</strong> · to restore; to mend; to put back in order; to equip',
          description:
            'The word is used of setting a broken bone, mending a torn net, preparing a ship for sailing. It means to restore to wholeness, to functionality. The fallen believer is not thrown away—he is restored, carefully and tenderly, back to his place in the body.',
        },
        {
          kind: 'greek',
          id: 'gal6-meekness',
          title: 'Praotēs — Meekness; Gentleness; Humility',
          script: 'πραΰτης',
          translit: '<strong>praotēs</strong> · meekness; gentleness; humility; absence of harshness',
          description:
            'Meekness is strength under control. It is the discipline of the strong to deal gently with the weak. Jesus exhibited this virtue perfectly: "I am meek and lowly in heart" (Matt. 11:29). A spiritual person restores others not with anger but with the same gentleness Christ showed.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 2,
              spans: [
                t('Bear ye one another&apos;s '),
                hg('burdens', 'gal6-baros'),
                t(', and so '),
                hp('fulfil the law of Christ', 'gal6-law-of-christ'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-baros',
          html:
            'The word <em>baros</em> means a weight, a load, a heavy thing. In Matthew 20:12, workers complain about bearing the heat of the day—it is hot, heavy, burdensome. The point is not that the burden is easy or light; the point is that you carry it anyway, with another. You take the weight onto yourself.',
        },
        {
          kind: 'christ',
          id: 'gal6-law-of-christ',
          title: 'Christ Connection — The Law of Christ',
          html:
            'What is the law of Christ? Love. "Thou shalt love thy neighbour as thyself" (Lev. 19:18; Matt. 22:39). But now it wears Christ&apos;s face. The law of Christ is written not on stone but lived in the Incarnation: Christ bearing our infirmities, carrying our sorrows, taking our sin upon Himself. Believers fulfill this law not by perfect obedience to rules but by bearing the weight of one another as He bore the weight of the world.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 3,
              spans: [
                t('For if a man think himself to be something, when he is nothing, he deceiveth himself.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('But let every man prove his own work, and then shall he have rejoicing in himself alone, and not in another.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('For every man shall bear his own '),
                hy('burden', 'gal6-phortion'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-carry-own',
          html:
            'A tension emerges: we bear one another&apos;s burdens, yet each man bears his own. The resolution is this: there is a <em>baros</em> (a weight, a heavy load) that belongs to the body—another person&apos;s struggle, another person&apos;s fall. That we carry together. But there is also a <em>phortion</em> (a load, a task, a responsibility) that is uniquely yours—your own growth, your own character, your own proof of faith. You cannot outsource your own discipleship.',
        },
        {
          kind: 'greek',
          id: 'gal6-phortion',
          title: 'Phortion — Load; Cargo; Individual Task',
          script: 'φόριον',
          translit: '<strong>phortion</strong> · load; cargo; a burden suited to the individual; one&apos;s own responsibility',
          description:
            'In Matthew 11:30, Jesus says, "My yoke is easy, and my burden [phortion] is light." It is the load suited to you, not some impossible external demand. Your phortion is your own spiritual growth, your own choices, your own response to God&apos;s grace. That you alone must carry.',
        },
        {
          kind: 'carry',
          html:
            'You are called to both: to carry the weight of another when they stumble, and to prove your own faith through your own obedience. These are not opposed. When you help restore someone, you are proving your own faith. When you work out your own salvation with fear and trembling, you are preparing yourself to strengthen others. The community and the individual are not enemies; they are the landscape of the gospel.',
        },
        {
          kind: 'reflection',
          id: 'gal6-restore-reflect',
          prompt:
            'Is there someone stumbling in your life right now—not rebellious, but overtaken, caught off guard? How might you restore that person in gentleness? And where are you carrying a burden that is uniquely your own to work through?',
        },
      ],
    },

    /* ─── Galatians 6:6 — Let Him That Is Taught Communicate ──────────── */
    {
      ref: 'Galatians 6:6',
      title: 'Support Those Who Teach the Word',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 6,
              spans: [
                t('Let him that is '),
                hg('taught in the word', 'gal6-katecheo'),
                t(' '),
                hy('communicate', 'gal6-koinoneo'),
                t(' unto him that teacheth in all good things.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-katecheo',
          html:
            'The student, the one being taught, is called to share in the support of the teacher. This is reciprocal care: the teacher gives spiritual instruction, the student gives material provision. Both are honoring and necessary. Both belong to the law of Christ.',
        },
        {
          kind: 'greek',
          id: 'gal6-koinoneo',
          title: 'Koinōneō — Share; Communicate; Participate; Have Fellowship',
          script: 'κοινωνέω',
          translit: '<strong>koinōneō</strong> · to share; to communicate; to have fellowship; to participate together',
          description:
            'This is not mere charity. <em>Koinoneo</em> comes from <em>koinonia</em>, the deep spiritual partnership of the body of Christ. To share with a teacher is to partner with them, to become allies in the gospel. Your support is not a transaction; it is a covenant.',
        },
        {
          kind: 'carry',
          html:
            'If you have been taught the word, you have received an inheritance. Someone labored to bring you that truth. The natural response is gratitude made visible—support, partnership, care. How you treat those who teach the gospel is a measure of how much you value the gospel itself.',
        },
      ],
    },

    /* ─── Galatians 6:7–9 — Sow and Reap; Sow to the Flesh vs. Spirit ─── */
    {
      ref: 'Galatians 6:7–9',
      title: 'Sow and Reap; Sow to the Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 7,
              spans: [
                t('Be not deceived; '),
                hp('God is not mocked', 'gal6-mocked'),
                t(': for whatsoever a man '),
                hy('soweth', 'gal6-speiro'),
                t(', that shall he also '),
                hy('reap', 'gal6-therizo'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-mocked',
          html:
            'Do not think you can deceive God. Do not think you can sow one thing and reap another. Do not think the universe operates on grace alone while you live on selfishness. God will not be mocked. The law of the harvest is written into creation itself.',
        },
        {
          kind: 'greek',
          id: 'gal6-speiro',
          title: 'Speirō — To Sow; To Plant; To Scatter Seed',
          script: 'σπείρω',
          translit: '<strong>speirō</strong> · to sow; to plant; to scatter seed; to scatter broadcast',
          description:
            'Sowing is deliberate. You choose what you plant. You choose where you plant it. You choose how you tend it. And then the harvest comes, not by magic, but by the nature of seed: corn produces corn, wheat produces wheat. What you plant grows.',
        },
        {
          kind: 'greek',
          id: 'gal6-therizo',
          title: 'Therizō — To Reap; To Harvest; To Gather',
          script: 'θερίζω',
          translit: '<strong>therizō</strong> · to reap; to harvest; to gather; to receive the fruit of labor',
          description:
            'The reap follows the sow. This is not punishment; it is consequence, the nature of farming. The farmer does not reap because he deserves it; he reaps because he planted. So too: whatever you have planted in your life, you will harvest.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 8,
              spans: [
                t('For he that soweth to his flesh shall of the flesh reap '),
                hy('corruption', 'gal6-phthora'),
                t('; but he that soweth to the '),
                hp('Spirit', 'gal6-spirit-sow'),
                t(' shall of the Spirit reap '),
                t('life everlasting'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-flesh-spirit',
          html:
            'The choice is absolute. You cannot sow to both. To sow to the flesh is to invest your energy in self-gratification, in pride, in greed, in the old way. The harvest: decay, death, corruption. To sow to the Spirit is to ask God&apos;s presence to order your life. To deny the flesh not in hatred but in love for something better. The harvest: eternal life, the unending presence of God.',
        },
        {
          kind: 'greek',
          id: 'gal6-phthora',
          title: 'Phthora — Corruption; Decay; Ruin',
          script: 'φθορά',
          translit: '<strong>phthora</strong> · corruption; decay; ruin; the process of degradation',
          description:
            'Not sudden judgment but the slow corruption of the soul. A seed of selfishness grows not into joy but into bitterness, loneliness, emptiness. The flesh offers a false harvest—pleasure that fades, achievement that crumbles, glory that dies with you.',
        },
        {
          kind: 'christ',
          id: 'gal6-spirit-sow',
          title: 'Christ Connection — Sowing to the Spirit',
          html:
            'Christ sowed to the Spirit. Every act was ordered by the Father&apos;s will, every word spoken from the power of the Spirit. And what did He reap? A harvest of life—not for Himself alone, but for all who believe in Him. When you sow to the Spirit, you are aligning yourself with His pattern. You are planting something that will outlast your body, outlast time itself.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 9,
              spans: [
                t('And '),
                hg('let us not be weary in well doing', 'gal6-weary'),
                t(': for in due season we shall reap, if we faint not.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-weary',
          html:
            'Doing good is hard. It is wearisome. You give and nothing comes back. You serve and are forgotten. You speak truth and are mocked. The temptation is to quit, to give up on others, to sow to the flesh because at least you enjoy it. Paul&apos;s exhortation is simple: do not faint. The harvest is certain. It is not always immediate, but it is certain.',
        },
        {
          kind: 'carry',
          html:
            'You may not see the harvest tomorrow. You may not see it this year. But if you have sown to the Spirit—if you have chosen love over bitterness, truth over deception, sacrifice over greed—that seed is growing in the dark soil. The crop is coming. Stand firm. Do not faint. Your labor is not in vain in the Lord.',
        },
        {
          kind: 'reflection',
          id: 'gal6-sow-reflect',
          prompt:
            'Where are you sowing right now—to the flesh or to the Spirit? What is one act of sowing to the Spirit you could do this week, knowing the harvest is certain even if not immediate?',
        },
      ],
    },

    /* ─── Galatians 6:10 — Do Good Unto All, Especially Household of Faith ─── */
    {
      ref: 'Galatians 6:10',
      title: 'Do Good Unto All, Especially the Household of Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 10,
              spans: [
                t('As we have therefore opportunity, let us '),
                hg('do good unto all men', 'gal6-ergon-kalon'),
                t(', especially unto them who are of the '),
                hg('household of faith', 'gal6-oikos-pistis'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-ergon-kalon',
          html:
            'Goodness is not a feeling; it is an action. <em>Ergon kalon</em>—a good work, a work that is actually good, that benefits, that helps, that restores. The call is to seize each opportunity. Not tomorrow, not when circumstances are perfect, but now. When you see a need, you have been given opportunity. Use it.',
        },
        {
          kind: 'commentary',
          id: 'gal6-oikos-pistis',
          html:
            'The household of faith is the family of believers—those born again, those who have turned to Christ. You have special responsibility to them. They are your siblings, your parents, your children in the faith. The gospel is meant to create a new kind of family, tighter than blood, bound together by the Spirit.',
        },
        {
          kind: 'carry',
          html:
            'The circle expands but does not dilute. You are called to do good to everyone. But those who share your faith have a unique claim on you. They are bone of your bone and flesh of your flesh in Christ. If you cannot show love to the household of faith, how can you claim to love Christ?',
        },
      ],
    },

    /* ─── Galatians 6:11–13 — Paul's Own Hand; Flesh-Pleasers ──────────── */
    {
      ref: 'Galatians 6:11–13',
      title: 'Paul&apos;s Own Hand; Those Who Glory in the Flesh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 11,
              spans: [
                t('Ye see how large a letter I have written unto you with '),
                hg('mine own hand', 'gal6-own-hand'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-own-hand',
          html:
            'Paul typically dictated his letters to a scribe (you can see this in Romans 16:22). But this letter—his fiercest, most passionate—he finishes in his own hand. The large letters suggest either age or emotion or both. It is a personal touch. Paul is telling them: I have poured myself into this. Every word matters. Read it carefully.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 12,
              spans: [
                t('As many as '),
                hg('desire to make a fair shew in the flesh', 'gal6-flesh-show'),
                t(', they constrain you to be circumcised; only lest they should '),
                hy('suffer persecution', 'gal6-thlipsis'),
                t(' for the cross of Christ.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-flesh-show',
          html:
            'The false teachers want to <em>euprosopeō</em>—to make a good appearance, a fair show in the flesh. They push circumcision because it is visible, quantifiable, something you can point to and say, "See, I am righteous." They are after <em>doxa</em>—glory, reputation, admiration. But the cross offers no such glory. It offers only shame, risk, loss.',
        },
        {
          kind: 'greek',
          id: 'gal6-thlipsis',
          title: 'Thlipsis — Persecution; Pressure; Tribulation',
          script: 'θλῖψις',
          translit: '<strong>thlipsis</strong> · persecution; pressure; suffering; tribulation',
          description:
            'The false teachers are trying to avoid thlipsis—they want to be acceptable to the Jewish authorities, to avoid arrest or social shame. But Christ&apos;s followers cannot avoid it. The cross is a scandal. Believers will be pressured, mocked, worse. To glory in the cross is to accept that cost.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 13,
              spans: [
                t('For neither they themselves who are circumcised keep the law; but '),
                t('desire to have you circumcised'),
                t(', that they may '),
                hg('glory in your flesh', 'gal6-glory-flesh'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-glory-flesh',
          html:
            'The hypocrisy is exposed. These teachers don&apos;t keep the law themselves, but they want to <em>kauchaomai</em>—to boast, to glory in your circumcision. Why? So they can say to the Jewish authorities: "See, we are making Gentiles Jewish. We are protecting the law." Their boasting is in <em>your</em> flesh, <em>your</em> sacrifice, not their own obedience.',
        },
        {
          kind: 'carry',
          html:
            'Watch for those who press you to visible markers of righteousness, especially if their own hearts are not transformed. The true gospel does not need your performance to validate it. It does not demand that you prove yourself for someone else&apos;s reputation. The cross is enough. Your faith in Christ is enough.',
        },
      ],
    },

    /* ─── Galatians 6:14 — Glory in the Cross; World Crucified ──────────── */
    {
      ref: 'Galatians 6:14',
      title: 'Glory in the Cross; The World Crucified',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 14,
              spans: [
                t('But '),
                hp('God forbid that I should glory', 'gal6-kauchao-cross'),
                t(', save in the cross of our Lord Jesus Christ, by whom '),
                hg('the world is crucified unto me', 'gal6-world-crucified'),
                t(', and '),
                hg('I unto the world', 'gal6-i-crucified'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-kauchao-cross',
          html:
            'Paul takes the verb of boasting—the very word the false teachers use to boast in circumcision and flesh—and nails it to the cross. This is my boast, he says. Not in my achievements, not in my pedigree, not in the law I have kept. Only in the cross. Only there. Nowhere else.',
        },
        {
          kind: 'commentary',
          id: 'gal6-world-crucified',
          html:
            'By the cross of Christ, the world is crucified unto Paul. The world&apos;s value system, its hierarchy of glory and shame, its measure of worth, its demands and seductions—all of it is dead. It has no claim on him anymore. A crucified man is beyond the world&apos;s power to wound.',
        },
        {
          kind: 'commentary',
          id: 'gal6-i-crucified',
          html:
            'And he unto the world. Paul is dead to the world&apos;s judgment, the world&apos;s applause, the world&apos;s fear. He is a man buried with Christ, risen with Christ. His old identity—his career, his reputation in the Jewish establishment, his flesh—all of it died with Jesus. He cannot be coerced or seduced or intimidated because he has nothing left to lose.',
        },
        {
          kind: 'christ',
          id: 'gal6-kauchao-cross',
          title: 'Christ Connection — The Cross as Victory and Shame',
          html:
            'The cross appears shameful—the place of defeat, the criminal&apos;s death. But Paul sees it as the place of glory. Why? Because it is the place of Christ&apos;s victory over sin and death. Because it is the place where the old world dies and a new creation begins. And because when you join your death to His death, you are set free from the world&apos;s judgment forever. The cross is the scandal that shatters all other scandals.',
        },
        {
          kind: 'carry',
          html:
            'You are invited into the same death. Not literally, but really. The values the world is trying to sell you—success, beauty, power, safety, reputation—you are called to crucify them. They have no authority over you. They cannot condemn you. You died with Christ. What can the world threaten a dead man with? And what can it offer that is greater than the risen Christ?',
        },
        {
          kind: 'reflection',
          id: 'gal6-cross-reflect',
          prompt:
            'What does the world still hold over you—what value, what fear, what ambition? How might you die to it more fully? What would it look like to boast only in the cross?',
        },
        {
          kind: 'artwork',
          matchTitle: /crucifixion|cross/i,
          matchArtist: /tissot/i,
          caption: 'Galatians 6:14 · Glory in the Cross',
        },
      ],
    },

    /* ─── Galatians 6:15 — New Creature in Christ ──────────────────────── */
    {
      ref: 'Galatians 6:15',
      title: 'A New Creature; New Creation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 15,
              spans: [
                t('For in Christ Jesus neither circumcision availeth any thing, nor uncircumcision, but a '),
                hy('new creature', 'gal6-kainos-ktisis'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-both-nothing',
          html:
            'The whole argument of Galatians is crystallized here. Neither circumcision (the old covenant marker, the old identity) nor uncircumcision (the Gentile status, the flesh) matters. Both are null. Both are nothing. The category has changed. You are not evaluated on the old scale anymore.',
        },
        {
          kind: 'greek',
          id: 'gal6-kainos-ktisis',
          title: 'Kainē Ktisis — New Creature; New Creation',
          script: 'καινὴ κτίσις',
          translit: '<strong>kainē ktisis</strong> · new creature; new creation; a freshly created being',
          description:
            '<em>Kainos</em> means new in quality, not just new in time. A new creation that is wholly different, remade from the ground up. In Christ, you are not reformed or improved—you are recreated. The old identity is gone. What has emerged is something God has made, something that did not exist before.',
        },
        {
          kind: 'christ',
          id: 'gal6-kainos-ktisis-christ',
          title: 'Christ Connection — New Creation in Him',
          html:
            'Paul writes in 2 Corinthians 5:17: "If any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new." This is not self-help. This is resurrection. You cannot make yourself new. Only Christ can. And He does, completely. The you that was is gone. What remains is you remade in His image.',
        },
        {
          kind: 'carry',
          html:
            'You are no longer trapped in your old identity. You are no longer defined by your ethnicity, your past, your failures, your flesh. In Christ, you are a new creature. Not reformed, remade. Not improved, recreated. This is radical freedom: you can walk into today as someone wholly new.',
        },
      ],
    },

    /* ─── Galatians 6:16 — Peace and Mercy on the True Israel ──────────── */
    {
      ref: 'Galatians 6:16',
      title: 'Peace on the Israel of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 16,
              spans: [
                t('And as many as walk according to this rule, '),
                hg('peace be on them, and mercy', 'gal6-peace-mercy'),
                t(', and upon the '),
                hg('Israel of God', 'gal6-israel-of-god'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-peace-mercy',
          html:
            'Paul blesses them. Not with power or wealth or victory, but with <em>peace</em> and <em>mercy</em>. These are the deepest gifts. Peace: the absence of fear, the presence of God&apos;s order in your soul. Mercy: the knowledge that you are loved despite everything you are not.',
        },
        {
          kind: 'commentary',
          id: 'gal6-israel-of-god',
          html:
            'Who is the "Israel of God"? Not ethnic Israel alone, but all who walk by faith in Christ—Jew and Gentile together. The boundary has been crossed. The wall has been torn down. Israel is no longer defined by bloodline but by faith, by relationship to Jesus. This is the gospel: one people, made from many, bound together in Christ.',
        },
        {
          kind: 'carry',
          html:
            'You are part of Israel now, not by birth but by faith. You have been grafted into the covenant, adopted into the family, made a citizen of the kingdom. The promises made to Abraham belong to you. The God of Jacob is your God. The benediction is pronounced over you: peace and mercy, now and forever.',
        },
      ],
    },

    /* ─── Galatians 6:17 — Marks of the Lord Jesus ────────────────────── */
    {
      ref: 'Galatians 6:17',
      title: 'I Bear in My Body the Marks of Jesus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 17,
              spans: [
                t('From henceforth let no man trouble me: for I '),
                hy('bear in my body', 'gal6-bastazo-stigmata'),
                t(' the '),
                hy('marks of the Lord Jesus', 'gal6-stigmata'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-bastazo-stigmata',
          html:
            'Paul has been beaten, stoned, imprisoned, starved for Christ (2 Corinthians 11:23–28). His body is scarred. But he does not hide them or apologize for them. He displays them as proof. These scars are his credentials. They prove he belongs to Jesus.',
        },
        {
          kind: 'greek',
          id: 'gal6-stigmata',
          title: 'Stigmata — Marks; Wounds; Signs of Ownership',
          script: 'στίγματα',
          translit: '<strong>stigmata</strong> · marks; scars; stigmata; signs of ownership burned into something',
          description:
            'A stigma is a mark, usually a scar or a brand burned into flesh. In ancient times, a slave would be marked to show ownership. Paul bears the marks of Jesus—the scars of beatings, whippings, suffering. He is marked as Christ&apos;s possession, Christ&apos;s slave. It is his honor.',
        },
        {
          kind: 'christ',
          id: 'gal6-stigmata-christ',
          title: 'Christ Connection — Participation in His Sufferings',
          html:
            'Paul writes in Colossians 1:24: "I rejoice in my sufferings for you, and fill up that which is behind of the afflictions of Christ in my flesh for his body&apos;s sake, which is the church." When you suffer for Christ, you are not just suffering—you are participating in His suffering, continuing His work of redemption. Your pain becomes sacred because it is shared with Him.',
        },
        {
          kind: 'carry',
          html:
            'If you have suffered for your faith, your scars are not shameful. They are your badge. They mark you as belonging to Christ. And if you have not yet suffered, be ready. The promise is not comfort but companionship: "Take up thy cross and follow me" (Matt. 16:24). When the cost comes, you will not bear it alone.',
        },
        {
          kind: 'reflection',
          id: 'gal6-marks-reflect',
          prompt:
            'What scars, visible or invisible, do you bear from following Christ? How have they shaped you? How might you see them not as shameful but as proof of His ownership?',
        },
      ],
    },

    /* ─── Galatians 6:18 — Final Benediction ───────────────────────────── */
    {
      ref: 'Galatians 6:18',
      title: 'The Grace of Our Lord Jesus Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 18,
              spans: [
                t('Brethren, the grace of our Lord Jesus Christ be with your '),
                hp('spirit', 'gal6-spirit-final'),
                t('. Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gal6-spirit-final',
          html:
            'A simple benediction: grace with your spirit. Not with your flesh, not with your achievement, not with your law-keeping. With your <em>spirit</em>—your deepest self, the breath of God in you. This is where grace works. Not from the outside in, but from the center outward. Transformed at your core, you transform everything around you.',
        },
        {
          kind: 'christ',
          id: 'gal6-grace-final',
          title: 'Christ Connection — Grace is the Final Word',
          html:
            'Galatians opened with grace. "Grace to you and peace from God the Father and from our Lord Jesus Christ" (Gal. 1:3). It closes with grace. Grace is the first word and the last word. Grace alone. The whole letter from beginning to end is the crystallization of one truth: you are saved not by the law but by grace through faith in Christ. Everything else follows. Everything else fails. Grace remains.',
        },
        {
          kind: 'carry',
          html:
            'You are leaving this letter changed. Not because you have kept rules better, but because you have seen Christ more clearly. Carry that vision with you. When the voice comes again saying, "You must do more, you must earn it, you must prove yourself," remember: grace be with you. The grace of Jesus Christ. That is enough. That has always been enough.',
        },
        {
          kind: 'reflection',
          id: 'gal6-final-reflect',
          prompt:
            'What is one truth from Galatians you are carrying forward with you? How will you hold onto it in a world that constantly demands you prove your worth?',
        },
        { kind: 'divider' },
      ],
    },
  ],

  hasHebrew: false,
};
