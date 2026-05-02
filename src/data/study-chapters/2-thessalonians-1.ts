import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 2 Thessalonians 1 — Comfort in Persecution; the Revelation of Christ
 *
 * Paul opens his second letter to Thessalonica with thanksgiving. Their faith
 * is multiplying. Their love for each other abounds. But they are suffering
 * persecution. And Paul does not offer sympathy alone. He offers cosmic hope:
 * when Christ is revealed from heaven, those who afflict believers will face
 * judgment, and the afflicted will find rest. This is not revenge. This is
 * the promise that God sees, God remembers, and God will vindicate His people.
 */
export const SECOND_THESSALONIANS_1: RichChapterContent = {
  bookSlug: '2-thessalonians',
  bookName: '2 Thessalonians',
  chapter: 1,

  intros: [
    'The Thessalonians face opposition for their faith. But Paul does not begin his letter with comfort alone—he begins by noticing what persecution cannot destroy. Their faith grows. Their love multiplies. They persist. And over the course of this first chapter, Paul unfolds a vision that reorders everything: when Christ is revealed from heaven, the persecutors will face their own tribulation, the afflicted will find rest, and Christ&apos;s glory will shine through His faithful people.',
    'This is not a letter about fear, but about hope. Not naive hope that suffering will not come, but defiant hope grounded in the character of God. God is righteous. God will repay. The parousia—the coming of the Lord Jesus—is not a distant theological idea for Paul. It is the horizon that gives meaning to present suffering. Those who oppose the gospel will be punished with eternal separation from God&apos;s presence. And those who endure will be counted worthy of the kingdom of God, for which they now suffer.',
    'In the final verses, Paul does something unexpected: he prays. He asks that God will fulfill in the Thessalonians every resolve for good, every work of faith—not that they might be spared suffering, but that they might bear it worthily, so that the name of the Lord Jesus Christ might be glorified in them and they in Him. It is a prayer of mutual indwelling: Christ glorified in believers, believers glorified in Christ. And that, Paul says, is the goal of everything God is doing.',
  ],

  opener: {
    matchTitle: /reveal|glory|throne|judgment|light|fire/i,
    matchArtist: /tissot|caravaggio|rembrandt|michelangelo/i,
    caption: '2 Thessalonians 1: Christ Revealed in Glory; Justice and Rest',
  },

  bottomShare: {
    label: 'Share 2 Thessalonians 1',
    quote:
      'Paul thanks God for the Thessalonians&apos; faith growing exceedingly and their charity abounding. When the Lord Jesus shall be revealed from heaven with His mighty angels in flaming fire, those who trouble believers will face recompense. But to those who are troubled, Christ&apos;s appearing brings rest—and His glory will shine in all them that believe.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Thessalonians 1 · Study Guide',
  },

  sections: [
    /* ─── 2 Thessalonians 1:1–2 — Greeting ──────────────────────────── */
    {
      ref: '2 Thessalonians 1:1–2',
      title: 'Greeting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              1,
              t('Paul, and Silvanus, and Timotheus, unto the church of the Thessalonians in God our Father and the Lord Jesus Christ:'),
            ),
            verse(
              2,
              t('Grace unto you, and peace, from God our Father and the Lord Jesus Christ.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '2t1-greeting',
          html:
            'Paul co-authors this letter with Silvanus (Silas) and Timothy, the team who planted the church at Thessalonica (Acts 17:1–4, 18:5). The greeting is direct: "unto the church of the Thessalonians in God our Father and the Lord Jesus Christ." The church does not exist in a vacuum. It exists "in God" and "in Christ"—their identity is corporate and relational, not individual and isolated. Grace and peace flow from both Father and Son together, a greeting that affirms Christ&apos;s equality with the Father.',
        },
        {
          kind: 'carry',
          html:
            'Notice Paul immediately co-locates the Father and Son in the greeting—not as a formula, but as a statement of reality. The grace you experience comes from both. The peace you need is given by both. They are one in their work toward your salvation.',
        },
      ],
    },

    /* ─── 2 Thessalonians 1:3–4 — Thanksgiving for Growing Faith ─────── */
    {
      ref: '2 Thessalonians 1:3–4',
      title: 'Faith Groweth Exceedingly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              3,
              t('We are bound to thank God always for you, brethren, as it is meet, because that your '),
              hp('faith groweth exceedingly', '2t1-hyperauxano'),
              t(', and the '),
              hy('charity of every one of you all toward each other aboundeth', '2t1-charity'),
              t(';'),
            ),
            verse(
              4,
              t('So that we ourselves glory in you in the churches of God for your '),
              hg('patience and faith in all your persecutions and tribulations that ye endure', '2t1-patience'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '2t1-hyperauxano',
          html:
            'Paul uses hyperauxanō—a word that means to grow beyond measure, to multiply exceedingly. Their faith is not stable; it is expanding. This is remarkable because these believers face active opposition (see 1 Thessalonians 2:14–16). Persecution does not shrink their faith; it enlarges it. The pressure becomes the catalyst for growth.',
        },
        {
          kind: 'greek',
          id: '2t1-hyperauxano-note',
          title: 'Hyperauxanō — "Groweth Exceedingly"',
          script: 'ὑπεραυξάνω',
          translit: '<strong>hyperauxanō</strong> · to grow exceedingly; to increase beyond measure; to multiply excessively',
          description:
            'The prefix hyper- (over, beyond) intensifies the base verb auxanō (to grow). It describes growth that exceeds all normal proportion. Paul is not saying their faith is steady; he is saying it is skyrocketing in the face of opposition.',
        },
        {
          kind: 'commentary',
          id: '2t1-charity',
          html:
            'And alongside faith, their agapē—their love for one another—abounds. The Greek verb used here is perisseuō, which means to exceed, to abound, to be left over with surplus. Their mutual love is not diminishing to duty. It is overflowing. This is what persecution does in the church: it reveals who the believers truly are, and it deepens their bonds.',
        },
        {
          kind: 'commentary',
          id: '2t1-patience',
          html:
            'Paul "glories" in them before all the churches of God for their "patience" (hupomenē) and faith. Hupomenē is not passive resignation; it is active endurance, the ability to bear up under pressure. They are not victims waiting to be rescued. They are warriors standing firm. Their persecution is not hidden, but visible—"all your persecutions and tribulations"—yet they remain faithful.',
        },
        {
          kind: 'carry',
          html:
            'Your growth under pressure is not hidden from the church. It is not hidden from heaven. Paul is announcing it publicly: your faith multiplies. Your love abounds. The powers arrayed against you cannot diminish what Christ builds in you. If you face opposition today, know that your faithfulness in the face of it is becoming a testimony that strengthens others.',
        },
        {
          kind: 'reflection',
          id: '2t1-growth-reflect',
          prompt:
            'Paul notices growth specifically in the context of persecution. When have you felt your faith deepen or your love expand not in spite of difficulty, but through it? What did God do in that season?',
        },
      ],
    },

    /* ─── 2 Thessalonians 1:5–7 — Righteous Judgment & Rest ───────────── */
    {
      ref: '2 Thessalonians 1:5–7',
      title: 'Counted Worthy of the Kingdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              5,
              t('Which is a manifest token of the righteous judgment of God, that ye may be counted worthy of the kingdom of God, for which ye also '),
              hg('suffer', '2t1-paschos'),
              t(':'),
            ),
            verse(
              6,
              t('Seeing it is a righteous thing with God to '),
              hg('recompense tribulation to them that trouble you', '2t1-recompense'),
              t(';'),
            ),
            verse(
              7,
              t('And to you who are troubled '),
              hy('rest with us, when the Lord Jesus shall be revealed from heaven with his mighty angels', '2t1-apokalypsis'),
              t(','),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '2t1-paschos',
          html:
            'Paul frames persecution as a sign (sēmeion)—a manifest token—that God is at work in judgment. Your suffering for faith is evidence that the kingdom of God is real and that you will be counted worthy of it. This reverses the world&apos;s logic. The world says: if you are suffering, you are failing. Paul says: your suffering for the gospel is proof that you are being counted worthy of the kingdom for which you now endure.',
        },
        {
          kind: 'commentary',
          id: '2t1-recompense',
          html:
            'Paul now speaks directly: God is righteous. God will repay in kind. The Greek word antapodidōmi means to recompense proportionally—what you sow, you reap. Those who trouble believers will face tribulation themselves. This is not Paul&apos;s desire for revenge. This is his declaration of God&apos;s character. God does not ignore injustice. He sees. He will settle accounts.',
        },
        {
          kind: 'greek',
          id: '2t1-antapodidomi',
          title: 'Antapodidomi — "Recompense"',
          script: 'ἀνταποδίδωμι',
          translit: '<strong>antapodidomi</strong> · to repay; to recompense; to render justice; to give back in equal measure',
          description:
            'Anti- (against, in return) + apodidōmi (to give back). Justice is not arbitrary. It is proportional. The one who troubles believers will receive trouble in return. The one who persecutes will be persecuted. And the one who endures will receive rest.',
        },
        {
          kind: 'commentary',
          id: '2t1-apokalypsis',
          html:
            'Paul does not describe abstract judgment. He describes rest—anesis, a loosening, a relief, a cessation of pressure. And this rest comes "when the Lord Jesus shall be revealed from heaven." Apokalypsis means an uncovering, a revelation, an appearing. Jesus is coming. Not someday in the far distance, but with personal reality. He is coming with His mighty angels. This is not a distant hope for Paul; it is the reason the Thessalonians can endure now.',
        },
        {
          kind: 'greek',
          id: '2t1-apokalypsis-note',
          title: 'Apokalypsis — "Revealed" or "Revelation"',
          script: 'ἀποκάλυψις',
          translit: '<strong>apokalypsis</strong> · revelation; uncovering; an unveiling; a making manifest',
          description:
            'The word combines apo- (away, off) + kalyptō (to hide, to cover). It means to remove the covering, to make visible. Christ is hidden now (Col. 3:3). At the apokalypsis, He will be visible, glorified, manifest to all creation.',
        },
        {
          kind: 'christ',
          id: '2t1-christ-parousia',
          title: 'Christ Connection — The Parousia of the Lord Jesus',
          html:
            'The "revealing" or "appearing" of Jesus is called the parousia in other passages—the coming, the arrival, the personal presence (see 1 Thessalonians 4:15; 1 Corinthians 15:23; 2 Peter 3:4). In 2 Thessalonians 1, Paul makes clear: Jesus will come in person. He will come in power ("mighty angels"). He will come to bring justice to the persecutors and rest to the afflicted. This is the hope that sustains persecuted believers. Not a comfortable theology, but a Christ who returns, sees all, and settles all accounts with justice.',
        },
        {
          kind: 'carry',
          html:
            'If you are being treated unjustly, if your faithfulness is being mocked or punished, know this: Jesus is coming. He will not overlook what was done to you. He will not forget what was done by those who opposed you. Not to take your revenge, but to settle with justice. And you—you who endured—will find rest. The burden will be lifted. The pressure will cease. He is coming.',
        },
        {
          kind: 'reflection',
          id: '2t1-justice-reflect',
          prompt:
            'Does the promise of divine justice comfort or trouble you? How does it shape the way you respond to those who oppose you or your faith?',
        },
      ],
    },

    /* ─── 2 Thessalonians 1:7–10 — Flaming Fire & Glorified ───────────── */
    {
      ref: '2 Thessalonians 1:7–10',
      title: 'When the Lord Jesus Shall Be Revealed in Flaming Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              7,
              t('in flaming fire taking vengeance on them that know not God, and that obey not the gospel of our Lord Jesus Christ:'),
            ),
            verse(
              8,
              t('Who shall be punished with everlasting destruction from the presence of the Lord, and from the glory of his power;'),
            ),
            verse(
              9,
              t('When he shall come to be '),
              hp('glorified in his saints, and to be admired in all them that believe', '2t1-endoxazō'),
              t(', (because our testimony among you was believed,) in that day.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '2t1-flaming-fire',
          html:
            'The language is fierce: "flaming fire," "vengeance," "everlasting destruction." This is not comfortable. But it is biblical. Christ comes with judgment. Not judgment in the abstract, but judgment directed at "them that know not God"—those who have refused to acknowledge Him—and "that obey not the gospel of our Lord Jesus Christ"—those who have rejected the offer of grace. The judgment is proportional to their refusal.',
        },
        {
          kind: 'commentary',
          id: '2t1-destruction',
          html:
            'The punishment Paul describes is "everlasting destruction from the presence of the Lord, and from the glory of his power." This is not annihilation. It is separation. Olethros (destruction) in Greek does not mean ceasing to exist; it means ruin, loss, permanent deprivation. To be separated from God&apos;s presence and from the glory of His power is the deepest loss imaginable. It is the second death—not nonexistence, but existence cut off from the source of all life and joy.',
        },
        {
          kind: 'commentary',
          id: '2t1-endoxazō',
          html:
            'Yet in the same moment Christ is revealed in judgment, He is revealed in glory among His people. "When he shall come to be glorified in his saints, and to be admired in all them that believe." Endoxazō means to be honored, to be glorified, to be made splendid. The glory of Christ will shine through believers. They will be admired—not for their own merit, but because Christ&apos;s glory is radiating from them. Ephesians 3:21 echoes this: "Unto him be glory in the church by Christ Jesus throughout all ages, world without end."',
        },
        {
          kind: 'greek',
          id: '2t1-endoxazō-note',
          title: 'Endoxazō — "Glorified"',
          script: 'ἐνδοξάζω',
          translit: '<strong>endoxazō</strong> · to glorify; to make glorious; to render splendid; to exalt',
          description:
            'The word combines en- (in, within) + doxa (glory). It means to glorify from within, to make glorious. When Christ is glorified in His saints, His radiance becomes visible in them. They are not the source of glory; they are the vessels through which His glory shines.',
        },
        {
          kind: 'christ',
          id: '2t1-christ-glorified',
          title: 'Christ Connection — Glorified in His Saints',
          html:
            'This is the climactic vision of 2 Thessalonians 1: in the same instant that Christ brings judgment on those who reject Him, His glory becomes visible in all who believe. John 17:22–23 captures the same reality: "The glory which thou gavest me I have given them; that they may be one, even as we are one: I in them, and thou in me, that they may be made perfect in one." This is union with Christ in its fullest expression. Christ glorified in believers; believers glorified in Him. Mutual indwelling. Mutual beauty. This is the destiny of those who endure. Not escape from the world, but transformation into vessels of Christ&apos;s glory.',
        },
        {
          kind: 'carry',
          html:
            'One day Christ will be revealed. In that moment, judgment will fall on those who rejected Him. But in that same moment, His glory will shine through you. Not because you are worthy in yourselves, but because you are in Him. Your faithfulness now, your endurance under pressure, your love for each other—all of it is being refined into vessels that will radiate His light. You are not suffering for nothing. You are being prepared for a glory that will make you luminous with Christ.',
        },
        {
          kind: 'reflection',
          id: '2t1-glory-reflect',
          prompt:
            'Christ will be glorified in all who believe. What would it mean for Christ&apos;s glory to shine through you so visibly that others are drawn to admire not you, but Him? What needs to be refined or removed for that to happen?',
        },
      ],
    },

    /* ─── 2 Thessalonians 1:10–12 — Prayer for Worthiness & Glorification ─ */
    {
      ref: '2 Thessalonians 1:10–12',
      title: 'Name of Our Lord Jesus Christ Glorified in You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              10,
              t('(because our testimony among you was believed,) in that day.'),
            ),
            verse(
              11,
              t('Wherefore also we pray always for you, that our God would count you worthy of this calling, and '),
              hg('fulfil all the good pleasure of his goodness, and the work of faith with power', '2t1-fulfil'),
              t(':'),
            ),
            verse(
              12,
              t('That the name of our Lord Jesus Christ may be '),
              hp('glorified in you, and ye in him', '2t1-mutual-glory'),
              t(', according to the grace of our God and the Lord Jesus Christ.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '2t1-testimony',
          html:
            'Paul looks back to his ministry at Thessalonica: "because our testimony among you was believed." The gospel was preached. It was heard. It was believed. Now these believers are standing firm under persecution. Their faith is not merely intellectual assent; it is costly allegiance. And Paul, having seen their faith, now prays.',
        },
        {
          kind: 'commentary',
          id: '2t1-fulfil',
          html:
            'Paul does not pray for their escape from suffering. He prays that God will "count you worthy of this calling"—make them qualify for the kingdom they now endure for. He prays that God will "fulfil all the good pleasure of his goodness"—accomplish His perfect intention in them—"and the work of faith with power." The work of faith is the work they do as believers. And Paul prays that God will complete it, not in strength, but in power—dunamis, divine energy, the same power that raised Christ from the dead.',
        },
        {
          kind: 'commentary',
          id: '2t1-mutual-glory',
          html:
            'And then the climax: "That the name of our Lord Jesus Christ may be glorified in you, and ye in him." This is not a theological paradox. It is the reality of union with Christ. Christ is glorified—made radiant, elevated, honored—in believers. And believers are simultaneously glorified in Him. When you are so united with Christ that His glory shines through you, you participate in His glorification. You are lifted up into His honor. This mutual glorification is "according to the grace of our God and the Lord Jesus Christ"—it is not earned. It is given as a gift.',
        },
        {
          kind: 'christ',
          id: '2t1-christ-union',
          title: 'Christ Connection — Mutual Glorification; Union with Christ',
          html:
            'The concept of mutual glorification—Christ glorified in believers, believers glorified in Christ—appears throughout the New Testament as the expression of union with Christ. John 17:21–23 is the foundational text: "That they all may be one; as thou, Father, art in me, and I in thee, that they also may be one in us… The glory which thou gavest me I have given them; that they may be one, even as we are one: I in them, and thou in me, that they may be made perfect in one." Colossians 3:4 echoes it: "When Christ, who is our life, shall appear, then shall ye also appear with him in glory." This is the climax of Paul&apos;s prayer: not that Thessalonians escape suffering, but that they become so unified with Christ that His radiance becomes visible in them, and their faithfulness glorifies His name.',
        },
        {
          kind: 'carry',
          html:
            'Paul is not praying that you escape difficulty. He is praying that you are filled with power to endure it faithfully, so that Christ&apos;s name is honored in you. And when that happens—when you live so fully in Christ that others see Him when they look at you—you are not diminished. You are elevated. You are glorified in Him. Your faithfulness becomes part of the radiance that draws creation to see and worship Him.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: '2t1-final-reflect',
          prompt:
            'Paul prays not for your comfort, but for you to be filled with power to endure faithfully. What is the difference between comfort and power? Which do you tend to seek? What would it look like to ask God for power instead?',
        },
      ],
    },
  ],
};
