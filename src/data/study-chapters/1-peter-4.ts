import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Peter 4 — Holiness & Love in the Fiery Trial
 *
 * Peter calls believers to arm themselves with the resolve of Christ&apos;s suffering.
 * To suffer in the flesh breaks the power of sin in our lives. The end of all things
 * is at hand—let that reality shape how we live. Above all, love one another fervently,
 * for charity covers the multitude of sins. Rejoice in the privilege of suffering
 * for Christ&apos;s sake.
 */
export const FIRST_PETER_4: RichChapterContent = {
  bookSlug: '1-peter',
  bookName: '1 Peter',
  chapter: 4,

  intros: [
    'Peter presses into a theme that runs through the epistle: the connection between suffering and holiness. When believers face trial, they are equipped to break with sin. The sufferings of Christ, endured in obedience to the Father, are the model. We are to arm ourselves with the same resolve: obedience to God even when it costs us.',
    'He then sounds an eschatological note: the end of all things approaches. This is not fear-mongering but a call to clarity. If all earthly things are temporary, what truly matters? Love. Service. The building up of the body of Christ. All other pursuits pale in the light of eternity.',
  ],

  sections: [
    /* ─── 1 Peter 4:1 — Christ Hath Suffered for Us in the Flesh ───────── */
    {
      ref: '1 Peter 4:1',
      title: 'Christ Hath Suffered for Us in the Flesh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              1,
              t('Forasmuch then as Christ hath suffered for us in the flesh, '),
              hp('arm yourselves likewise with the same mind', 'v1-arm'),
              t(': for he that hath suffered in the flesh hath ceased from sin;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'v1-arm',
          html:
            'Peter opens with a logical hinge: <em>forasmuch then</em>—because Christ has suffered, therefore you must arm yourselves. Not with weapons, but with resolve. The Greek word for &ldquo;arm&rdquo; is <em>hoplizō</em>: to equip, to ready oneself for conflict. What you are readying yourself for is not earthly warfare, but the internal battle against sin&apos;s pull. When Christ suffered, He did not yield to anger, fear, bitterness, or despair. He remained obedient. That obedience, that inner stance toward God, is what you are to &ldquo;put on&rdquo; like armor.',
        },
        {
          kind: 'greek',
          id: 'g-hoplizo',
          title: 'Hoplizō — &ldquo;arm yourselves&rdquo;',
          script: 'ὁπλίζω',
          translit: '<strong>hoplizō</strong> · to equip with armor; to prepare for battle',
          description:
            'The word comes from <em>hoplon</em>, a shield or piece of armor. To arm oneself is to put on protective gear before stepping into danger. Peter is saying: clothe yourselves with the mind of Christ before you face your trial.',
        },
        {
          kind: 'commentary',
          id: 'v1-ceased',
          html:
            'He who has suffered in the flesh has <em>ceased from sin.</em> This is not to say that suffering automatically makes you sinless. Rather, suffering experienced in obedience to God—suffering borne without compromising your faith—breaks the tyranny of sin over you. You learn that you can say no to sin, even when it costs you. Even when it hurts. That knowledge, once learned, cannot be unlearned.',
        },
        {
          kind: 'christ',
          id: 'v1-christ',
          title: 'Christ Connection — The Suffering Servant',
          html:
            'Isaiah calls the Messiah the Suffering Servant, bearing &ldquo;the iniquity of us all&rdquo; (Isa. 53:6). Jesus endured the cross without yielding to sin, without turning away from the Father. Peter is saying: this is the template for your own life. When you face your trial, follow His example. Remain faithful. That is the armor you put on.',
        },
        {
          kind: 'carry',
          html:
            'You already know, on some level, that suffering can refine you. The loss that taught you what matters most. The betrayal that showed you who your real friends are. The failure that broke your pride. Peter is not romanticizing pain. He is saying: when you walk through it with your faith intact, something shifts inside you. Sin loses its grip. And you become more like Jesus.',
        },
        {
          kind: 'reflection',
          id: 'v1-reflect',
          prompt: 'Where has suffering or hardship actually made you stronger in your faith? What did you learn about yourself—and about God?',
        },
      ],
    },

    /* ─── 1 Peter 4:2 — No Longer to the Lusts of Men ────────────────── */
    {
      ref: '1 Peter 4:2',
      title: 'No Longer to the Lusts of Men, but to the Will of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              2,
              t('That he no longer should live the rest of his time in the flesh to the '),
              hy('lusts of men', 'v2-lusts'),
              t(', but to the '),
              hp('will of God', 'v2-will'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'v2-lusts',
          html:
            'The Greek word for lusts is <em>epithumia</em>—the desire or craving that pulls you away from God. When you have <em>suffered in the flesh</em>, your appetite for those cravings shrinks. You no longer chase what once seemed essential. The person who has endured real hardship without compromising their faith discovers that pleasure-seeking, approval-chasing, and status-climbing are hollow.',
        },
        {
          kind: 'greek',
          id: 'g-epithum',
          title: 'Epithumia — &ldquo;lusts&rdquo;',
          script: 'ἐπιθυμία',
          translit: '<strong>epithumia</strong> · strong desire; craving; the pull toward what is not God&apos;s will',
          description:
            'Not all desire is sin—but desire that leads you away from God is. Peter is saying that suffering, when endured faithfully, weakens the power of these off-center cravings. You become free.',
        },
        {
          kind: 'commentary',
          id: 'v2-will',
          html:
            'In place of the lusts of men, Peter sets the will of God. The two are often at odds. What the world cries for is comfort, status, pleasure, safety. What God often calls for is costly faithfulness. But once you have walked through fire and found Him faithful, the will of God becomes not a burden but a gift. It is the only thing that actually makes sense.',
        },
        {
          kind: 'carry',
          html:
            'If you are struggling with a craving, a habit, a pull back into old patterns, this text offers something revolutionary: <em>own the suffering of saying no.</em> Do not expect it to feel good at first. Feel it fully—the ache, the longing, the resistance. As you refuse it in faith, you are doing exactly what Peter describes. You are living not to the lusts of men, but to God&apos;s will. And you will find that you grow stronger.',
        },
        {
          kind: 'reflection',
          id: 'v2-reflect',
          prompt: 'What would change in your life if you truly lived for God&apos;s will instead of the approval, comfort, or pleasure the world constantly offers?',
        },
      ],
    },

    /* ─── 1 Peter 4:3–6 — Time Past and Gospel Preached to the Dead ────── */
    {
      ref: '1 Peter 4:3–6',
      title: 'The Time Past: Gospel to the Dead',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              3,
              t('For the time past of our life may suffice us to have wrought the will of the Gentiles, when we '),
              hg('walked in lasciviousness, lusts, excess of wine, revellings, banquetings, and abominable idolatries', 'v3-past'),
              t(':')
            ),
            verse(
              4,
              hy('Wherein they think it strange that ye run not with them to the same excess of riot', 'v4-strange'),
              t(', speaking evil of you;')
            ),
            verse(
              5,
              t('But they shall give account to him that is ready to judge the quick and the dead.')
            ),
            verse(
              6,
              t('For for this cause was the gospel preached also to them that are dead, that they might be judged according to men in the flesh, but live according to God in the spirit.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'v3-past',
          html:
            'Peter is speaking to converted Gentiles, people who have turned from idolatry and excess. He looks back at their past life—not to shame them, but to anchor them. <em>The time past may suffice</em>: you have spent enough time in that pattern. That chapter is over. Now you know better. You live differently.',
        },
        {
          kind: 'commentary',
          id: 'v4-strange',
          html:
            'Your old friends think it <em>strange</em> that you no longer join their excesses. They speak evil of you. This is one of the trials Peter promised. You will face mockery from your former companions. Pressure to go back. But pressure proves nothing. Mockery is not refutation. You have seen a better way. Let them speak.',
        },
        {
          kind: 'commentary',
          id: 'v5-judge',
          html:
            'Peter reminds his readers: there is a judge. This is not to say that judgment is near—Peter is making a point about accountability. Every person will answer to God for how they have lived. Those who mock you will also stand before Him. This is not vindication for you; it is a call to remember that all things are known and weighed.',
        },
        {
          kind: 'commentary',
          id: 'v6-dead',
          html:
            'Verse 6 is debated across theology. One reading: the gospel was preached to those who are now dead, giving them a chance to respond, so they could be judged fairly. Another: those who believed and then died live now in the spirit-realm, perfected and free. Either way, the point is clear: God&apos;s justice reaches to all people, all times, all states. No one is outside His mercy or His judgment.',
        },
        {
          kind: 'christ',
          id: 'v3-christ',
          title: 'Christ Connection — No Condemnation',
          html:
            'Paul writes, &ldquo;There is therefore now no condemnation to them which are in Christ Jesus&rdquo; (Rom. 8:1). Your past—the time you spent in excess and idolatry—is paid for. Jesus took that judgment on Himself. Peter is not looking back to condemn you; he is looking back to show you how far you have come. That old life may suffice. You have new life now.',
        },
        {
          kind: 'carry',
          html:
            'You may feel the pull to defend your new choices to your old circle. You may feel pressure to justify why you no longer do what they do. Here is Peter&apos;s word: you don&apos;t have to justify it to them. They will judge you. Let them. You answer to a higher judge, and He already knows your heart. Your job is to live faithfully, not to convince others.',
        },
        {
          kind: 'reflection',
          id: 'v3-reflect',
          prompt: 'What would it feel like to truly let go of your past, accepting that those years have sufficed, and to live fully into your new life in Christ?',
        },
        {
          kind: 'artwork',
          matchTitle: /judgment|dead/i,
          caption: '1 Peter 4:5–6 · The Judge of All',
        },
      ],
    },

    /* ─── 1 Peter 4:7 — The End of All Things is at Hand ──────────────── */
    {
      ref: '1 Peter 4:7',
      title: 'The End of All Things is at Hand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              7,
              hp('But the end of all things is at hand', 'v7-end'),
              t(': '),
              hy('be ye therefore sober, and watch unto prayer', 'v7-sober'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'v7-end',
          html:
            'Peter believes—or expects his readers to believe—that the end of all things is approaching. Whether or not Christ returned when Peter expected, the principle holds: all temporal things are temporary. Everything you can see, touch, buy, build will not last. This is not pessimism. It is clarity. It is the basis for all Christian wisdom.',
        },
        {
          kind: 'commentary',
          id: 'v7-sober',
          html:
            'If the end draws near, two practices become essential: <em>sobriety</em> and <em>watchfulness.</em> Sobriety is not merely the absence of drunkenness; it is clear-mindedness. It is seeing things as they are. Watchfulness is prayer-centered vigilance. You remain alert. You remain connected to God. These are not grim practices. They are the opposite: they keep you free.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world that constantly tells you the opposite: that you have infinite time, that the things of this world are what matter, that the next quarter&apos;s earnings or next season&apos;s trends or next scandal is the thing that truly counts. Peter says: watch that habit in yourself. When you catch yourself living as if this world is all there is, step back. Be sober. Pray. Remember: all things are held in God&apos;s hands, and that includes your days.',
        },
        {
          kind: 'reflection',
          id: 'v7-reflect',
          prompt: 'If you truly believed that the end of all things could come anytime, what would you stop worrying about? What would matter more?',
        },
      ],
    },

    /* ─── 1 Peter 4:8 — Fervent Charity Covers a Multitude of Sins ────── */
    {
      ref: '1 Peter 4:8',
      title: 'Fervent Charity Covers a Multitude of Sins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              8,
              t('And above all things have '),
              hp('fervent charity among yourselves', 'v8-charity'),
              t(': for '),
              hg('charity shall cover the multitude of sins', 'v8-cover'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'v8-charity',
          html:
            '&ldquo;Above all things.&rdquo; What Peter lists as the summit of Christian practice is not doctrine, not ritual, not moral achievement. It is <em>agapē ektenēs</em>—fervent, stretched-out, all-encompassing love. This is the love that reaches toward others even when you are tired, even when you have been hurt, even when they do not deserve it. This is the love Jesus showed on the cross.',
        },
        {
          kind: 'greek',
          id: 'g-agape',
          title: 'Agapē Ektenēs — &ldquo;fervent charity&rdquo;',
          script: 'ἀγάπη ἐκτενής',
          translit: '<strong>agapē ektenēs</strong> · intense, stretched-out love; love that goes the distance',
          description:
            'Agapē is God&apos;s love—unconditional, costly, freely given. Ektenēs suggests tension, stretching, reaching beyond what is easy. Together, they describe love that stretches you thin because it cares so deeply.',
        },
        {
          kind: 'commentary',
          id: 'v8-cover',
          html:
            'Charity covers a multitude of sins. This does not mean overlooking injustice or pretending wrong is right. It means that love is the solvent in which community survives. When you are wronged, love gives you the choice to let the offense go rather than hold it as a weapon. When your brother or sister falls, love gives you the choice to help restore them rather than condemn them. Love does not excuse sin; it refuses to let sin be the final word.',
        },
        {
          kind: 'greek',
          id: 'g-kalupto',
          title: 'Kalupto — &ldquo;cover&rdquo;',
          script: 'καλύπτω',
          translit: '<strong>kalupto</strong> · to cover, conceal, veil; to put under',
          description:
            'The same word appears in Romans 4:7, where David blesses the man whose sins are covered. Love covers sins not by hiding them but by choosing not to wield them as weapons. It is the difference between condemnation and restoration.',
        },
        {
          kind: 'christ',
          id: 'v8-christ',
          title: 'Christ Connection — Your Sins Are Covered',
          html:
            'Jesus told the woman caught in adultery, &ldquo;Neither do I condemn thee: go, and sin no more&rdquo; (John 8:11). He saw her sin. He did not excuse it. But He also did not define her by it. His love covered her shame. Peter is calling you to extend that same love to others—not because they deserve it, but because Christ extended it to you.',
        },
        {
          kind: 'carry',
          html:
            'Think of someone who has wounded you. Peter is saying: let your love be stretched wide enough to cover that. Not to forget it happened, not to act as if it didn&apos;t hurt. But to refuse to hold it as a permanent wall between you. When you do that, you are not weak. You are powerful. You are imitating Christ.',
        },
        {
          kind: 'reflection',
          id: 'v8-reflect',
          prompt: 'Whose sin or offense has been hard for you to cover with love? What would it look like to choose fervent charity toward them?',
        },
        {
          kind: 'artwork',
          matchTitle: /love|communion|community/i,
          caption: '1 Peter 4:8 · Love Covers',
        },
      ],
    },

    /* ─── 1 Peter 4:10–11 — Good Stewards of Manifold Grace ───────────── */
    {
      ref: '1 Peter 4:10–11',
      title: 'Good Stewards of the Manifold Grace of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              10,
              t('As every man hath received the gift, even so minister '),
              hg('the same one to another', 'v10-gift'),
              t(', as good stewards of the '),
              hy('manifold grace of God', 'g-poikilos'),
              t(':')
            ),
            verse(
              11,
              t('If any man speak, let him speak as the oracles of God; if any man minister, let him do it as of the ability which God giveth: that '),
              hy('God in all things may be glorified through Jesus Christ', 'v11-glory'),
              t(', to whom be praise and dominion for ever and ever. Amen.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'v10-gift',
          html:
            'Peter assumes every believer has received a gift—a charism, a capacity, something the Spirit of God has given you. Not just the clergy. Not just the educated or the eloquent. <em>Every man.</em> And your responsibility is to minister that gift back to your community. This is not optional; it is the structure of the body of Christ.',
        },
        {
          kind: 'greek',
          id: 'g-oikonomos',
          title: 'Oikonomos — &ldquo;steward&rdquo;',
          script: 'οἰκονόμος',
          translit: '<strong>oikonomos</strong> · a house manager; one who administers what belongs to another',
          description:
            'A steward does not own the house or the resources—they manage them on behalf of the owner. You are not the source of your gifts. God is. Your job is to use them, carefully and generously, for the good of the household of faith.',
        },
        {
          kind: 'commentary',
          id: 'v10-manifold',
          html:
            'The grace of God is <em>poikilos</em>—manifold, many-colored, varied. There is not one template for how to serve. One person speaks; another helps behind the scenes. One prays; another provides. One teaches; another builds. The church needs them all. And each one, no matter how hidden or small the gift seems, is necessary.',
        },
        {
          kind: 'greek',
          id: 'g-poikilos',
          title: 'Poikilos — &ldquo;manifold&rdquo;',
          script: 'ποικίλος',
          translit: '<strong>poikilos</strong> · many-colored; varied; diversified',
          description:
            'God&apos;s grace comes in as many colors and shapes as there are believers. The diversity of gifts is not a problem to be managed. It is a design.',
        },
        {
          kind: 'commentary',
          id: 'v11-glory',
          html:
            'Everything—how you speak, how you serve, what you give, how you treat others—is meant to glorify God. Not you. Not your church. Not your name or your ministry. God. This is the only sensible end. If it is for your own glory, it will fail. But if it is genuinely for His honor, it will last. It will matter eternally.',
        },
        {
          kind: 'christ',
          id: 'v10-christ',
          title: 'Christ Connection — Creator & Sustainer',
          html:
            'Colossians 1:16 says that all things—visible and invisible—were created &ldquo;by him, and for him.&rdquo; Jesus is not only your Redeemer; He is the Creator who holds all things together. Your gifts, your talents, your very breath comes from Him. When you steward these gifts for His glory, you are participating in His ongoing work of creation and redemption.',
        },
        {
          kind: 'carry',
          html:
            'You have something to offer your community. It may not feel impressive. It may not come with a title or an audience. But Peter says you have a gift, and it is meant to be used. What is yours? The ability to listen? To organize? To encourage? To fix things? To see beauty? To stand up for the weak? Use it. For others. For His glory.',
        },
        {
          kind: 'reflection',
          id: 'v10-reflect',
          prompt: 'What gift has God given you? How could you steward it more faithfully—not for your own glory, but for His?',
        },
      ],
    },

    /* ─── 1 Peter 4:12–14 — Rejoice in the Fiery Trial ─────────────────── */
    {
      ref: '1 Peter 4:12–14',
      title: 'Partakers of Christ&apos;s Sufferings',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              12,
              hp('Beloved, think it not strange concerning the fiery trial which is to try you', 'v12-trial'),
              t(', as though some strange thing happened unto you:')
            ),
            verse(
              13,
              t('But rejoice, inasmuch as '),
              hy('ye are partakers of Christ&apos;s sufferings', 'v13-partakers'),
              t('; that, when his glory shall be revealed, ye also may be glad also with exceeding joy.')
            ),
            verse(
              14,
              t('If ye be '),
              hg('reproached for the name of Christ', 'v14-reproached'),
              t(', happy are ye; for the spirit of glory and of God resteth upon you:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'v12-trial',
          html:
            'Peter uses the word <em>pyrōsis</em>—a fiery trial, a burning test. Fire, in Scripture, refines. It consumes the dross and proves the purity of what remains. He is saying: do not be surprised when this comes. Do not think it a strange or unusual thing. Believers face trials. Expect it. Prepare for it. And when it comes, you will be ready.',
        },
        {
          kind: 'greek',
          id: 'g-pyrosis',
          title: 'Pyrōsis — &ldquo;fiery trial&rdquo;',
          script: 'πύρωσις',
          translit: '<strong>pyrōsis</strong> · burning; fire; a test that burns away the unnecessary',
          description:
            'The word shares a root with fire. A fiery trial is not metaphorical suffering; it is real pain that tests the authenticity of your faith. But unlike earthly fire that consumes and destroys, God&apos;s fire purifies.',
        },
        {
          kind: 'commentary',
          id: 'v13-partakers',
          html:
            'Here is the revolutionary word: you are not only experiencing <em>a</em> trial; you are becoming <em>partakers of Christ&apos;s sufferings.</em> You are united with Him in His suffering. This is not punishment. This is participation. You are sharing in the very thing that redeemed the world. And that sharing has a purpose: when His glory is revealed, you will share in that too.',
        },
        {
          kind: 'commentary',
          id: 'v14-reproached',
          html:
            'To be reproached for the name of Christ is to be mocked, criticized, or rejected because you follow Jesus. Peter calls this happiness—not happiness as feeling good, but <em>makarios</em>, blessedness. You are walking the path Jesus walked. The Spirit of God and the Spirit of glory rest upon you. You are in the best company imaginable.',
        },
        {
          kind: 'christ',
          id: 'v12-christ',
          title: 'Christ Connection — Partakers of His Cross',
          html:
            'Jesus told His disciples, &ldquo;If any man will come after me, let him deny himself, and take up his cross, and follow me&rdquo; (Matt. 16:24). Your suffering, borne for His sake, is not separate from His. You are united with Him in His sufferings. And because He rose, so will you. Your trial is not the final word; resurrection is.',
        },
        {
          kind: 'carry',
          html:
            'When you face mockery or rejection for your faith, you have a choice. You can feel shame, as if something is wrong with you for standing firm. Or you can feel what Peter wants you to feel: a quiet joy that you are counted worthy to suffer for His name. This is not strength you manufacture. It is the Spirit of glory resting upon you, making you able to endure.',
        },
        {
          kind: 'reflection',
          id: 'v12-reflect',
          prompt: 'Have you ever felt reproached for your faith? How could you reframe that experience as participation in Christ&apos;s sufferings rather than as shame?',
        },
        {
          kind: 'artwork',
          matchTitle: /suffering|trial|fire/i,
          caption: '1 Peter 4:12–14 · The Fiery Trial',
        },
      ],
    },

    /* ─── 1 Peter 4:15–19 — Suffer as a Christian ────────────────────── */
    {
      ref: '1 Peter 4:15–19',
      title: 'Suffer as a Christian, Not as an Evildoer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              15,
              t('But let none of you suffer as a murderer, or as a thief, or as an evildoer, or as a '),
              hy('busybody in other men&apos;s matters', 'v15-busybody'),
              t('.')
            ),
            verse(
              16,
              t('Yet if any man suffer as a '),
              hp('Christian', 'v16-christian'),
              t(', let him not be ashamed; but let him glorify God on this behalf.')
            ),
            verse(
              17,
              t('For the time is come that judgment must begin at the house of God: and if it first begin at us, what shall be the end of them that obey not the gospel of God?')
            ),
            verse(
              18,
              t('And if the righteous scarcely be saved, where shall the ungodly and the sinner appear?')
            ),
            verse(
              19,
              t('Wherefore let them that suffer according to the will of God commit the keeping of their souls to him in well doing, as unto a '),
              hg('faithful Creator', 'v19-creator'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'v15-busybody',
          html:
            'Peter is careful to draw a distinction. <em>Do not suffer because you deserve it.</em> Do not suffer as a murderer or thief—for actual wrongdoing. But do not also suffer as a busybody, a meddler in others&apos; affairs. He is saying: you must be above reproach. Your suffering must be <em>for Christ&apos;s name,</em> not for your own foolishness or moral failure.',
        },
        {
          kind: 'commentary',
          id: 'v16-christian',
          html:
            'The word <em>Christian</em> appears only three times in the New Testament, and here is one. It is not the only name believers are called, but when you see it, it carries weight. To be a Christian is to follow Christ. And followers of Christ face opposition. If you are facing it, you are in the right place. You are doing the right thing.',
        },
        {
          kind: 'greek',
          id: 'g-christianos',
          title: 'Christianos — &ldquo;Christian&rdquo;',
          script: 'Χριστιανός',
          translit: '<strong>christianos</strong> · one of Christ&apos;s household; a follower of Christ',
          description:
            'The term appears here not as a badge of superiority but as a fact: you are Christ&apos;s. If the world opposes you, that is because you belong to Him. Do not be ashamed of belonging to Him.',
        },
        {
          kind: 'commentary',
          id: 'v17-judgment',
          html:
            'Judgment begins at the house of God. This is not a threat; it is a comfort. God judges His own first. He holds His people to a standard. And if judgment begins with those who believe, those who hear the gospel and reject it face a far steeper reckoning. The logic is: if even the redeemed are tried and refined through suffering, what awaits those who have refused His mercy?',
        },
        {
          kind: 'commentary',
          id: 'v19-creator',
          html:
            'Peter closes with an astonishing phrase: commit your souls to Him as to a <em>faithful Creator.</em> Not as to a distant judge, or a stern employer, but as to the One who <em>made</em> you. The One who knows you completely because He spoke you into being. That Creator is faithful. He will not abandon you in your suffering. Trust Him. Live well. Do what is right. And He will keep your soul.',
        },
        {
          kind: 'christ',
          id: 'v16-christ',
          title: 'Christ Connection — Creator & Keeper',
          html:
            'In John 1, Jesus is revealed as the One through whom &ldquo;all things were made&rdquo; (John 1:3). He is not only your Redeemer; He is your Creator. He knows the shape of your soul because He designed it. Hebrews 13:5 echoes Peter: &ldquo;he hath said, I will never leave thee, nor forsake thee.&rdquo; You can trust Him—not with your career or your comfort, but with your soul itself.',
        },
        {
          kind: 'carry',
          html:
            'If you are suffering because of your faith, because you have refused to compromise your following of Christ, then you have the word of the Creator Himself: I made you. I made you for this. I will keep you. That is not false comfort. That is promise. Lean into it. Trust Him.',
        },
        {
          kind: 'reflection',
          id: 'v19-reflect',
          prompt: 'Can you truly commit the keeping of your soul to God in the midst of suffering? What would that commitment look like in your life right now?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Arm yourselves likewise with the same mind as Christ. Above all things have fervent charity among yourselves: for charity shall cover the multitude of sins. Rejoice, inasmuch as ye are partakers of Christ&apos;s sufferings.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Peter 4 · Study Guide',
  },

  hasHebrew: false,
};
