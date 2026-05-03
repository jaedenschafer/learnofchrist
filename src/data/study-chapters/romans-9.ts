import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Romans 9 — God&apos;s Sovereign Mercy
 *
 * Paul&apos;s heart breaks for his kinsmen according to the flesh. He would
 * gladly be accursed from Christ if it meant their salvation. Yet God&apos;s
 * promise is not voided. Not all who are born Israel are truly Israel. God
 * has mercy on whom He will have mercy. The potter shapes the clay according
 * to His will. These truths stand together without easy resolution. The
 * chapter&apos;s spine is election, mercy, and the inclusion of Gentiles—and
 * beneath it all, the mystery of a God who loves Israel deeply yet permits
 * their stumbling.
 */
export const ROMANS_9: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 9,

  estimatedMinutes: { 5: 8, 10: 18, 15: 22 },
  intros: [
    'Romans 9 opens with Paul&apos;s tears. After eight chapters of theological triumph—justification by faith, freedom in Christ, life through the Spirit—Paul suddenly turns and says he would gladly be accursed if it meant Israel&apos;s salvation. The great promises God made to Abraham, Isaac, and Jacob seem to have been rejected. How can Paul hold both truths: God&apos;s righteousness and Israel&apos;s rejection? God&apos;s faithfulness and His apparent abandonment of His people?',
    'This chapter is the most theologically dense passage on election in Scripture. God chose Jacob over Esau before either was born. God hardened Pharaoh&apos;s heart. God shapes vessels for honor and dishonor. Yet at the same time, Paul insists: God&apos;s word has not failed. A remnant is being saved. Jesus Himself is the stumblingstone over which Israel has stumbled—and the cornerstone upon which Gentiles are being built up. Paul does not resolve these paradoxes. He trusts them both to be true.',
    'Read this chapter not as a systematic theology but as the cry of a man torn between mystery and faith. The reader who sits with these tensions instead of rushing to choose sides will find the deepest truth: God is sovereign, God is merciful, and God&apos;s purposes are not what they first appear to be.',
  ],

  sections: [
    /* ─── Romans 9:1–5 — Paul&apos;s Anguish for Israel ────────────────────────── */
    {
      ref: 'Romans 9:1–5',
      title: 'The Anguish of Kinship',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(1, t('I say the truth in Christ, I lie not, my conscience also bearing me witness in the '), t('Holy Ghost')),
            verse(2, t('That I have great '), hy('heaviness', 'rom9-achos'), t(' and continual sorrow in my heart for my brethren, my kinsmen according to the flesh:')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-pauls-sorrow',
          html:
            'Paul begins with an oath. He appeals to Christ, to his own conscience, to the witness of the Holy Ghost. Why? Because what he is about to say is so painful that he must swear to the truth of it. His sorrow is not doctrinal disagreement. It is the grief of a man who loves his people deeply and sees them walking past their own salvation. He would trade his own eternal life if it could save Israel.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(3, t('For I could wish that myself were '), t('accursed from Christ'), t(' for my brethren, kinsmen according to the flesh:')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-love-cost',
          html:
            'This is the measure of Paul&apos;s love: to be separated from Christ himself—the one who saved him, the one he loves above all—for the sake of his people&apos;s redemption. He knows it is not possible. God does not accept such a trade. But the depth of his willingness to make it shows that this is not abstract theology. This is pastoral agony.',
        },

        {
          kind: 'greek',
          id: 'rom9-achos',
          title: 'Achos — Sorrow/Grief',
          script: 'ἄχος',
          translit: '<strong>achos</strong> · sorrow; grief; deep anguish',
          description:
            'Not mere sadness. Achos is the kind of grief that weighs on you, that keeps you awake, that would make you willing to give up anything. Paul carries this for Israel.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(4, t('Who are Israelites; to whom pertaineth the adoption, and the glory, and the covenants, and the giving of the law, and the service of God, and the promises;')),
            verse(5, t('Whose are the fathers, and of whom as concerning the flesh Christ came, who is over all, God blessed for ever. Amen.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-privileges',
          html:
            'Paul lists the privileges of Israel with reverence. They were chosen children. The divine presence dwelt among them. God made covenants with them. The law was given to them. They had the temple and the sacrifices. The patriarchs—Abraham, Isaac, Jacob—were theirs. And most incomprehensibly, <em>Christ came from them</em>. "Of whom, as concerning the flesh, Christ came." The Messiah Himself was born an Israelite. Yet they rejected Him. How does God love a people so deeply, give them everything, and then watch them turn away?',
        },

        {
          kind: 'carry',
          html:
            'You have been given gifts that others can only dream of. The knowledge of Christ. The friendship of believers. The peace that surpasses understanding. Do you ever feel the weight of those gifts? Do you ever wonder what you should do with them? Paul did. His question was not intellectual curiosity. It was a man asking: what does faithfulness look like when I have been given so much?',
        },

        {
          kind: 'reflection',
          id: 'rom9-gifts',
          prompt: 'What spiritual gifts or privileges have you been given? What does it mean to honor them?',
        },
      ],
    },

    /* ─── Romans 9:6–13 — Not All Israel is Israel ──────────────────────────── */
    {
      ref: 'Romans 9:6–13',
      title: 'The Israel Within Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(6, t('Not as though the word of God hath taken none effect: for '), t('they are not all Israel, which are of Israel'), t(':')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-word-stands',
          html:
            'Here is the turning point. Paul has stated the problem: Israel has rejected Christ. Now he addresses it. "Not as though the word of God has failed." God&apos;s promise is still good. But God never promised that <em>every</em> physical descendant of Abraham would be saved. The promise was always to those who believed. "They are not all Israel which are of Israel." Being born an Israelite is not the same as being <em>truly</em> Israel. There is an Israel within Israel—the chosen within the chosen.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(7, t('Neither, because they are the seed of Abraham, are they all children: but, In Isaac shall thy seed be called.')),
            verse(8, t('That is, They which are the children of the flesh, these are not the children of God: but the children of the promise are counted for the seed.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-promise-not-flesh',
          html:
            'Abraham had many sons. Ishmael was his child. Yet God said: "In Isaac shall thy seed be called." The promise passed through Isaac, not Ishmael, though both were born of Abraham. And within that line, Jacob was chosen over Esau. Physical descent is not enough. The promise belongs to the <em>children of promise</em>—those called by God&apos;s gracious election, not those who claim it by birth alone.',
        },

        {
          kind: 'greek',
          id: 'rom9-epangelia',
          title: 'Epangelia — Promise',
          script: 'ἐπαγγελία',
          translit: '<strong>epangelia</strong> · promise; covenant pledge',
          description:
            'God&apos;s promises are not automatic. They are words spoken and guaranteed by God. But they belong to those who believe them, not to those who merely inherit a name. The promise is personal. It requires faith.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(10, t('And not only this; but when Rebecca also had conceived by one, even by our father Isaac;')),
            verse(11, t('(For the children being not yet born, neither having done any good or evil, that the purpose of God according to '), t('election'), t(' might stand, not of works, but of him that calleth;)')),
            verse(12, t('It was said unto her, The elder shall serve the younger.')),
            verse(13, t('As it is written, Jacob have I loved, but Esau have I hated.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-jacob-esau',
          html:
            'Now Paul goes deeper. Not just Isaac over Ishmael—but within the same pregnancy, Jacob over Esau. Before either boy was born. Before either had done good or evil. Before works could play any role. God chose Jacob. The basis of that choice was not foreseen faith, not predicted obedience, not merit. It was "the purpose of God according to election." God chose. The choice came from Him, not from anything in Jacob or Esau. Paul does not explain why. He simply states that it is so. Some readers will find comfort in God&apos;s sovereignty over all things. Others will wrestle with the apparent unfairness. Paul invites both to trust that God is righteous, even when His methods are hidden.',
        },

        {
          kind: 'christ',
          id: 'rom9-chosen-people',
          title: 'Christ Connection — The Chosen One',
          html:
            'Christ is God&apos;s ultimate "chosen." From before the foundation of the world, the Father chose the Son. Yet the Son chose to be made like us, to die for us, to bear the rejection that we deserve (Eph. 1:4; 1 Pet. 1:20). Jesus was "Jacob"—chosen by the Father—and He lived the obedience and faith that Esau did not. In Him, all God&apos;s purposes are fulfilled. And through faith in Him, believers are grafted into the lineage of the truly chosen (Rom. 11:17).',
        },

        {
          kind: 'carry',
          html:
            'You did not choose to be born into your circumstances, your family, your moment in history. God did. That does not mean you are a victim of chance. It means your life is held by Someone who sees the end from the beginning and has purposes for you that go deeper than your choices. What does it change in your day today to know that you are not here by accident?',
        },

        {
          kind: 'reflection',
          id: 'rom9-purpose',
          prompt: 'How do you make sense of God&apos;s sovereign choice in your own life? Where do you see His selection at work?',
        },
      ],
    },

    /* ─── Romans 9:14–18 — God&apos;s Mercy and Hardening ────────────────────── */
    {
      ref: 'Romans 9:14–18',
      title: 'Mercy and the Hardened Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(14, t('What shall we say then? Is there unrighteousness with God? God forbid.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-just-question',
          html:
            'Paul anticipates the objection. If God chooses some and not others, if He passes over Esau for Jacob, if His choices are made before any works are done—is God being unjust? Paul&apos;s answer is absolute: "God forbid." God is not unrighteous. But Paul does not argue <em>why</em> God is righteous. He simply insists that He is.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(15, t('For he saith to Moses, I will have '), hy('mercy', 'rom9-eleos'), t(' on whom I will have mercy, and I will have compassion on whom I will have compassion.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-mercy-sovereign',
          html:
            'God&apos;s answer to the question "Is God just?" is to point to His mercy. "I will have mercy on whom I will have mercy." The verb is God&apos;s will, not ours. God is not bound by our expectations of fairness. He is bound only by His own character—and His character is merciful. He showed mercy to Moses. He shows mercy to whom He chooses. The only argument Paul offers is not defense but an appeal to God&apos;s nature.',
        },

        {
          kind: 'greek',
          id: 'rom9-eleos',
          title: 'Eleos — Mercy',
          script: 'ἔλεος',
          translit: '<strong>eleos</strong> · mercy; compassion; kind dealings',
          description:
            'Eleos is not earned. It is the active choice to show kindness to those who do not deserve it. When God says "I will have mercy on whom I will have mercy," He is saying: My kindness is not something you can negotiate. It flows from My heart.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(16, t('So then it is not of him that willeth, nor of him that runneth, but of God that '), hy('sheweth mercy', 'rom9-eleos'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-not-will-not-works',
          html:
            'Mercy is not earned by will ("it is not of him that willeth") nor by effort ("nor of him that runneth"). It is given by God. This cuts against the entire logic of works-righteousness. You cannot sprint fast enough to earn God&apos;s mercy. You cannot want it hard enough to deserve it. God gives it freely, to whom He chooses, in a way that reflects His own purposes.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(17, t('For the scripture saith unto Pharaoh, Even for this same purpose have I raised thee up, that I might shew my power in thee, and that my name might be declared throughout all the earth.')),
            verse(18, t('Therefore hath he mercy on whom he will have mercy, and whom he will he '), hy('hardeneth', 'rom9-skleruno'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-pharaoh-hardened',
          html:
            'Paul brings Pharaoh as the example of hardening. "I have raised thee up… that I might shew my power in thee." God raised Pharaoh up to display His power through His judgment of Pharaoh&apos;s rebellion. Pharaoh hardened his own heart, but God permitted the hardening to show His power. God had mercy on Israel (bringing them out of Egypt) and showed hardening to Pharaoh (whose refusal let God&apos;s might be seen). The same God gives mercy and permits hardening—according to His purpose, not ours.',
        },

        {
          kind: 'greek',
          id: 'rom9-skleruno',
          title: 'Sklerynō — Harden',
          script: 'σκληρύνω',
          translit: '<strong>sklerynō</strong> · make hard; harden; stiffen',
          description:
            'To harden is to resist softening, to refuse the call to repentance. God permits hearts to become what they choose to become. "Whom he will he hardeneth" does not mean God forces unwilling hearts into stone. It means God allows hearts that refuse His mercy to experience the consequences of that refusal.',
        },

        {
          kind: 'carry',
          html:
            'You cannot persuade God to be merciful by your efforts. You can only receive His mercy. But receive it you can. If you are sitting in a place of hardness toward God—skepticism, resistance, refusal—the call of Romans 9 is not to work harder. It is to stop resisting. To turn. To let your heart be softened again. The call is always open. Mercy is always there, offered to you.',
        },

        {
          kind: 'reflection',
          id: 'rom9-hard-heart',
          prompt: 'Where have you felt your own heart hardening? What would it take for you to soften it again?',
        },
      ],
    },

    /* ─── Romans 9:19–26 — The Potter and His Vessels ─────────────────────── */
    {
      ref: 'Romans 9:19–26',
      title: 'The Potter and the Clay',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(19, t('Thou wilt say then unto me, Why doth he yet find fault? For who hath resisted his will?')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-objection',
          html:
            'Here is the human objection, stated plainly. If God hardens whom He will, if His mercy is His alone to give, if our will and our works mean nothing—then how can God hold us responsible? "Why doth he yet find fault?" This is the question that has troubled theology for centuries. Paul addresses it not with a logical argument but with an image.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(20, t('Nay but, O man, who art thou that repliest against God? Shall the thing formed say to him that formed it, Why hast thou made me thus?')),
            verse(21, t('Hath not the '), hy('potter', 'rom9-keramos'), t(' power over the clay, of the same lump to make one vessel unto honour, and another unto dishonour?')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-potter-power',
          html:
            'Paul appeals to Isaiah 29:16 and 45:9. The potter has absolute authority over the clay. The pot does not get to ask why it was shaped one way and not another. But this image does not say the pot is passive. It says the pot has no standing to challenge the potter&apos;s right to shape it. The same God who made Jacob and Esau, Israel and Pharaoh, has the right to purposes that transcend our understanding. The clay—you—can trust the potter&apos;s hands, or rebel against them. But you cannot demand to understand His design.',
        },

        {
          kind: 'greek',
          id: 'rom9-keramos',
          title: 'Kerameús — Potter',
          script: 'κεραμεύς',
          translit: '<strong>kerameús</strong> · potter; one who shapes clay',
          description:
            'The potter shapes with purpose. He does not create randomly. The same lump of clay can become a vessel of honor or a vessel for common use, depending on the potter&apos;s will and design. God is sovereign over all His creation in this way.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(22, t('What if God, willing to shew his wrath, and to make his power known, endured with much longsuffering the vessels of wrath '), t('fitted to destruction'), t(';')),
            verse(23, t('And that he might make known the riches of his glory on the vessels of '), t('mercy'), t(', which he had afore prepared unto glory,)')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-patience',
          html:
            'Paul introduces a crucial nuance: God endures the vessels of wrath "with much longsuffering." He does not destroy them in haste. He bears with them. He shows restraint. And the "vessels fitted to destruction" is ambiguous—Paul may mean vessels that have fitted themselves, through their own choices, to destruction. Or vessels that God, seeing what they will become, has prepared for destruction. Either way, God&apos;s patience is emphasized. He is not capricious. He endures.',
        },

        {
          kind: 'greek',
          id: 'rom9-skeuos',
          title: 'Skeuos — Vessel',
          script: 'σκεῦος',
          translit: '<strong>skeuos</strong> · vessel; instrument; container; object',
          description:
            'A vessel is shaped and designed for a purpose. Paul uses this word to describe both those who will receive mercy and those who will experience judgment. The metaphor does not erase personhood. It speaks to purpose and design.',
        },

        {
          kind: 'christ',
          id: 'rom9-mercy-prepared',
          title: 'Christ Connection — Vessels Prepared for Glory',
          html:
            'In Ephesians 2:10, Paul writes: "We are his workmanship, created in Christ Jesus unto good works." Those who are vessels of mercy have been "prepared unto glory"—not by chance, but by God&apos;s design. This is the very purpose of election: to prepare a people for glory. And that preparation comes <em>in and through Christ</em>. We are shaped by His hands, molded by His purposes. The vessel of mercy is one who submits to the Potter&apos;s design.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(24, t('Even us, whom he hath called, not of the Jews only, but also of the Gentiles?')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-gentiles-called',
          html:
            'Here Paul reveals the surprising turn in God&apos;s design: the vessels of mercy are not only Jews. They are Gentiles too. The Gentiles, who were outside the covenant, who had no claim on the promises, have been called. This is not what the Jewish reader expected. But this is what Paul is announcing: God&apos;s mercy has been extended beyond the boundaries of birth and law. The vessels of mercy now include those from every nation.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(25, t('As he saith also in Osee, I will call them my people, which were not my people; and her beloved, which was not beloved.')),
            verse(26, t('And it shall come to pass, that in the place where it was said unto them, Ye are not my people; there shall they be called the children of the living God.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-not-my-people',
          html:
            'Paul quotes Hosea 2:23. Hosea had called Israel "not my people" (a judgment). But then came reversal: "I will call them my people." Paul takes this reversal and applies it to the Gentiles. Those who were never called God&apos;s people are now being called. Those who were strangers are now beloved. The prophets spoke of Israel&apos;s restoration; Paul sees the same pattern at work in God&apos;s inclusion of the Gentiles. The vessels of mercy now include those outside the old covenant lines.',
        },

        {
          kind: 'carry',
          html:
            'You were shaped by hands you did not choose, for purposes you may not yet understand. And you have been called. Called into God&apos;s people. Called "beloved" when you were not. The person who feels like an outsider, who has never fit, who comes from a place of being told "you are not ours"—this is good news for you. God is calling you. You are being made a vessel of mercy. Trust the Potter. Let yourself be shaped.',
        },

        { kind: 'divider' },

        {
          kind: 'reflection',
          id: 'rom9-potter',
          prompt: 'What is one way you sense God has been shaping you? What would it mean to yield to the Potter instead of fighting?',
        },
      ],
    },

    /* ─── Romans 9:27–29 — The Remnant Shall Be Saved ────────────────────── */
    {
      ref: 'Romans 9:27–29',
      title: 'A Remnant Saved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(27, t('Esaias also crieth concerning Israel, Though the number of the children of Israel be as the sand of the sea, a '), t('remnant'), t(' shall be saved:')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-remnant-saved',
          html:
            'Paul quotes Isaiah 10:22. Israel&apos;s numbers are vast—like the sand of the sea. But only a remnant shall be saved. This is not bad news to Paul. It is gospel. A remnant is being saved. The promise is not broken. It is being kept—not for all Israel, but for the remnant. And this is how God has always worked. In the days of Elijah, when the nation had turned to idolatry, God said: "I have reserved to myself seven thousand men who have not bowed the knee to Baal" (1 Kings 19:18). A faithful few. A remnant. This is God&apos;s pattern. The whole nation does not turn. But God preserves a people.',
        },

        {
          kind: 'greek',
          id: 'rom9-hypoleimma',
          title: 'Hypoleimma — Remnant',
          script: 'ὑπόλειμμα',
          translit: '<strong>hypoleimma</strong> · what is left; remnant; remainder',
          description:
            'A remnant is not a failure. It is what remains faithful when the whole turns away. God&apos;s purposes are not thwarted by majority rejection. He works through the faithful few.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(28, t('For he will finish the work, and cut it short in righteousness: because a short work will the Lord make upon the earth.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-short-work',
          html:
            'God will finish His work quickly and decisively. Isaiah is saying: God&apos;s judgment will be swift and thorough. Paul&apos;s point: God is not stalled. He is not defeated by Israel&apos;s rejection. He is moving forward, and His work will be completed. The salvation of a remnant is not a compromise. It is the completion of God&apos;s purpose.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(29, t('And as Esaias said before, Except the Lord of Sabaoth had left us a seed, we should be as Sodoma, and been made like unto Gomorrah.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-seed-preserved',
          html:
            'Paul quotes Isaiah 1:9. If God had not preserved a seed—a remnant—Israel would have been destroyed like Sodom and Gomorrah. It is by God&apos;s grace that any remain at all. The fact that there is a remnant is not evidence of failure. It is evidence of mercy.',
        },

        {
          kind: 'carry',
          html:
            'You may look around at a world that has largely turned from faith and feel like a remnant. Small. Outnumbered. Wondered if God has forgotten. But Paul says: this is how God has always worked. He preserves a people. You are not a failure because you are few. You are the evidence of God&apos;s faithfulness. The whole world does not have to turn for God&apos;s purposes to stand. He works through the remnant. You are that remnant.',
        },

        {
          kind: 'reflection',
          id: 'rom9-seed',
          prompt: 'Where do you see God preserving a faithful seed in your own time? What does it mean for you to be part of that?',
        },
      ],
    },

    /* ─── Romans 9:30–33 — The Stumbling Stone ────────────────────────────── */
    {
      ref: 'Romans 9:30–33',
      title: 'The Stone of Stumbling',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(30, t('What shall we say then? That the Gentiles, which followed not after righteousness, have attained to righteousness, even the righteousness which is of faith.')),
            verse(31, t('But Israel, which followed after the law of righteousness, hath not attained to the law of righteousness.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-paradox-gentiles',
          html:
            'Here is the final paradox. The Gentiles, who did not seek righteousness, have found it—through faith in Christ. Israel, who pursued righteousness through the law, did not attain it. Why? Because they pursued it by works, not by faith. They stumbled over the means and missed the end.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(32, t('Wherefore? Because they sought it not by faith, but as it were by the works of the law. For they stumbled at that '), hy('stumblingstone', 'rom9-lithos'), t(';')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-stumbled',
          html:
            'Israel stumbled at the stumblingstone. What is this stone? The next verse reveals it: Christ. Jesus came not as a conquering king but as a suffering servant. He came not to endorse the law but to fulfill it and transcend it. He came to those who trusted in law and said: "You must be born again. You must trust me, not your works." To many in Israel, this was offensive. This was a stumbling block. They expected one thing; He offered another.',
        },

        {
          kind: 'greek',
          id: 'rom9-lithos',
          title: 'Lithos — Stone',
          script: 'λίθος',
          translit: '<strong>lithos</strong> · stone; a building stone; an obstacle',
          description:
            'A stone can be a foundation that holds everything up, or an obstacle you trip over. The same stone, approached differently, produces different results. Jesus is both: the cornerstone for those who believe, the stumbling stone for those who refuse.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(33, t('As it is written, Behold, I lay in Sion a '), hp('stumblingstone', 'rom9-stone-christ'), t(' and rock of offence: and '), t('whosoever believeth on him'), t(' shall not be ashamed.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom9-stone-in-zion',
          html:
            'Paul quotes Isaiah 8:14 and 28:16. God Himself lays a stone in Zion. This stone will cause some to stumble and others to stand. "Whosoever believeth on him shall not be ashamed." The promise is clear: faith in this stone is safety. Rejection of it is falling. Israel fell because they did not recognize the stone as the foundation. They expected something else. But the Gentiles, coming from outside the system, could see it clearly. They believed. And they were not ashamed.',
        },

        {
          kind: 'christ',
          id: 'rom9-stone-christ',
          title: 'Christ Connection — The Precious Cornerstone',
          html:
            '1 Peter 2:6–8 develops this image fully: "Wherefore also it is contained in the scripture, Behold, I lay in Sion a chief corner stone, elect, precious: and he that believeth on him shall not be confounded… But unto them which be disobedient, the stone which the builders disallowed, the same is made the head of the corner; And a stone of stumbling, and a rock of offence." The builders—the religious leaders of Israel—rejected the stone. But God made Him the head of the corner. The same stone is the foundation of the church and the stumbling block for those who refuse Him. (1 Pet. 2:6–8)',
        },

        {
          kind: 'carry',
          html:
            'You are face to face with a stone. The question is not whether the stone exists. It is whether you will stumble over it or build upon it. Jesus is not presented to you as an option among options. He is presented as the stone. The foundation. The only way. Your shame or your safety depends not on your feelings about the stone, but on whether you will believe on Him. The promise stands: "Whosoever believeth on him shall not be ashamed."',
        },

        { kind: 'divider' },

        {
          kind: 'reflection',
          id: 'rom9-belief',
          prompt: 'What does it mean for you to "believe on" Jesus, the Stone? What would change if you truly rested your weight on Him?',
        },

        {
          kind: 'artwork',
          matchTitle: /stone|rock|foundation/i,
          caption: 'Romans 9:33 · The Stone Laid in Zion',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I could wish that myself were accursed from Christ for my brethren… Hath not the potter power over the clay? Whosoever believeth on him shall not be ashamed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 9 · Study Guide',
  },

  hasHebrew: false,
};
