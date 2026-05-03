import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Timothy 2 — Prayer and the One Mediator
 *
 * Paul instructs Timothy on the central practice of the church: prayer. Prayers,
 * intercessions, and giving of thanks should be made for all men—emperors and
 * magistrates included. Beneath this seemingly simple exhortation lies profound
 * theology: there is one God, and one mediator between God and men, the man
 * Christ Jesus, who gave Himself a ransom for all.
 *
 * The chapter&apos;s closing verses (9–15) address conduct in worship and have
 * generated centuries of interpretive tradition. Paul anchors his instruction
 * in the order of creation and the deception at the Fall, speaking to a
 * congregation where false teachers were spreading error. This guide presents
 * his words without choosing between modern egalitarian and complementarian
 * readings—inviting you to sit with the text and the Spirit&apos;s leading.
 */
export const FIRST_TIMOTHY_2: RichChapterContent = {
  bookSlug: '1-timothy',
  bookName: '1 Timothy',
  chapter: 2,

  estimatedMinutes: { 5: 9, 10: 19, 15: 28 },
  intros: [
    'The church at Ephesus lived under Roman rule in a city famous for the temple of Artemis, where the goddess received divine honor. The emperor himself was treated as a god. Tax collectors were despised. Social hierarchies seemed fixed and oppressive. Into this tension, Paul brings a radical command: pray for everyone—especially those in authority. Not because they are righteous, but because God desires all men to come to the knowledge of the truth.',
    'Paul&apos;s theology here overturns earthly assumptions about who matters and who is beyond reach. There is no special class of people—only those who have encountered the one true God through the one mediator. The ransom is offered for all. The text that follows, addressed to how men and women conduct themselves in worship, must be read in this context: Paul is correcting disorder caused by false teaching in Ephesus. Different times and settings call for different applications, but the theological truths beneath them—God&apos;s intention to save all, the exclusive mediation of Christ, the order and peace of gathered worship—remain.',
  ],

  bottomShare: {
    quote: 'For there is one God, and one mediator between God and men, the man Christ Jesus; Who gave himself a ransom for all, to be testified in due time.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Timothy 2 · Study Guide',
  },

  sections: [
    /* ─── 1 Timothy 2:1 — Supplications, Prayers, Intercessions ──────── */
    {
      ref: '1 Timothy 2:1',
      title: 'Prayers for All Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              1,
              t('I exhort therefore, that, '),
              hg('first of all', 'c-proseuchai'),
              t(', '),
              hy('supplications', 'greek-deesis'),
              t(', '),
              hy('prayers', 'greek-proseuchai'),
              t(', '),
              hy('intercessions', 'greek-entuxis'),
              t(', and '),
              hg('giving of thanks', 'c-eucharistia'),
              t(', be made for all men;'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-proseuchai',
          html:
            'Paul opens with <em>"first of all."</em> Not first in time, but first in priority. Before everything else the church does—before teaching, before healing, before social action—comes prayer. Prayer is not one spiritual activity among many. It is foundational. And it is to be made for <em>all men</em>—not the worthy, not the friendly, not just those who might become believers. All.',
        },
        {
          kind: 'greek',
          id: 'greek-deesis',
          title: 'Deesis — "Supplications"',
          script: 'δέησις',
          translit: '<strong>deesis</strong> · supplication; urgent need; petition from the depths',
          description:
            'Deesis is prayer born from felt need. It is not ceremonial. It carries weight, urgency, sometimes tears. When Paul calls the church to deesis for all men, he is calling them to feel the weight of others&apos; needs—to plead with God as though those needs were personal.',
        },
        {
          kind: 'greek',
          id: 'greek-proseuchai',
          title: 'Proseuchē — "Prayer"',
          script: 'προσευχή',
          translit: '<strong>proseuchē</strong> · prayer; address to God; sacred conversation',
          description:
            'The general word for prayer—the umbrella that holds all forms of address to God. Proseuchē assumes a relationship, an audience, an ear tuned to listen. It is intimate.',
        },
        {
          kind: 'greek',
          id: 'greek-entuxis',
          title: 'Entuxis — "Intercessions"',
          script: 'ἐντύχησις',
          translit: '<strong>entuxis</strong> · intercession; petition on behalf of another; pleading for someone else',
          description:
            'To intercede is to stand between—to plead another&apos;s case before God. Entuxis is the work of representing others, of carrying their burdens into the throne room. It is the prayer of the advocate.',
        },
        {
          kind: 'commentary',
          id: 'c-eucharistia',
          html:
            'The text moves from need (supplication) and conversation (prayer) and advocacy (intercession) to gratitude. Thanksgiving is not an afterthought. It is the completion of a prayer life. You cannot truly pray for all men without beginning to see God&apos;s goodness working even in the broken places—and that sight naturally births thanks.',
        },
        {
          kind: 'carry',
          html:
            'Prayer is your first work in the world. Before you fix anything, change anything, or speak into anything, you kneel. You name specific people—the ones you love, the ones you fear, the ones you are angry with—and you carry them into the presence of God. This week, pick one person you normally would not pray for, and hold them before God in supplication, intercession, and thanks. Feel the weight of their need. Stand between them and the throne.',
        },
        {
          kind: 'reflection',
          id: 'tim2-all-men',
          prompt: 'Whom would it be hardest for you to pray for? What shifts in your heart when you try?',
        },
      ],
    },

    /* ─── 1 Timothy 2:2 — For Kings and Those in Authority ──────────── */
    {
      ref: '1 Timothy 2:2',
      title: 'Prayers for Kings and Rulers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              2,
              t('For '),
              hg('kings', 'c-kings'),
              t(', and for all that are in authority; that we may lead a '),
              hg('quiet and peaceable life', 'c-quiet'),
              t(' in all '),
              hy('godliness', 'greek-eusebeia'),
              t(' and honesty.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kings',
          html:
            'This was revolutionary in its time. The emperor on the throne in Paul&apos;s day was likely Nero—who would later persecute the church and execute believers. Yet Paul calls the church to intercede for him. Not because he is righteous. Not in hopes that he will become Christian (though God desires this). But because God desires his salvation. This is countercultural: your oppressor, your persecutor, the one who makes your life difficult—Paul tells you to pray for his salvation.',
        },
        {
          kind: 'commentary',
          id: 'c-quiet',
          html:
            'Paul is not calling for passivity in the face of injustice. He is calling for inner peace and stable community life—the kind of peace that prayer produces. Believers pray not so they can be comfortable, but so they can continue their witness and their work with clear hearts. When you are consumed by rage at those in power, you cannot function. You cannot love. You cannot think. Prayer for leaders frees you to live in godliness and honesty regardless of what they do.',
        },
        {
          kind: 'greek',
          id: 'greek-eusebeia',
          title: 'Eusebeia — "Godliness"',
          script: 'εὐσέβεια',
          translit: '<strong>eusebeia</strong> · piety; godliness; reverent devotion to God',
          description:
            'Not mere outward conformity, but a life oriented toward God. Eusebeia is the visible fruit of an inward reverence—the kind of life that shows others what it means to actually fear and honor the Lord.',
        },
        {
          kind: 'carry',
          html:
            'You are invited to pray for those in power over you—whether a government official, an employer, a difficult leader in your church. Pray not that they will grant you comfort, but that they will encounter the God who desires their salvation. As you pray, watch how your heart changes. Watch how you can think more clearly, speak more wisely, and act with more steadiness.',
        },
        {
          kind: 'reflection',
          id: 'tim2-kings',
          prompt: 'Who holds authority over your life right now? What would it cost you to pray for their salvation earnestly?',
        },
      ],
    },

    /* ─── 1 Timothy 2:3–4 — God Wills All to Be Saved ──────────────── */
    {
      ref: '1 Timothy 2:3–4',
      title: '"God Will Have All Men to Be Saved"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              3,
              t('For this is '),
              hg('good and acceptable in the sight of God our Saviour', 'c-good-acceptable'),
              t(';'),
            ),
            verse(
              4,
              t('Who will have '),
              hp('all men to be saved', 'c-all-saved'),
              t(', and to come unto the '),
              hg('knowledge of the truth', 'c-knowledge-truth'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-good-acceptable',
          html:
            'Prayer for all men is not optional piety or a nice thought. It is <em>good</em>—it pleases God. It is <em>acceptable</em>—it meets His approval. The reason is simple and staggering: God Himself desires the salvation of all men. When you pray for someone&apos;s salvation, you are not working against God&apos;s will. You are aligning yourself with His deepest intention.',
        },
        {
          kind: 'commentary',
          id: 'c-all-saved',
          html:
            'Paul writes that God "will have" all men to be saved. This is His stated will. Whether through predestination, foresight, or the mystery of human freedom, Paul makes plain: God&apos;s intention spans all people. No one is outside His redemptive scope. This is the foundation of intercessory prayer. You pray for the person everyone has written off because God has not.',
        },
        {
          kind: 'commentary',
          id: 'c-knowledge-truth',
          html:
            'Salvation, in Paul&apos;s understanding, is not merely forgiveness of sins or escape from punishment. It is a <em>coming to know the truth</em>. To be saved is to move from darkness into light, from ignorance into revelation. God desires not just that men be pardoned, but that they <em>know Him</em>—intimately, truly, personally. The ransom Christ paid was not just a legal transaction. It was the opening of a door to relationship.',
        },
        {
          kind: 'carry',
          html:
            'When you intercede for someone, you are partnering with God&apos;s stated intention. He wants them saved. He wants them to know Him. You are not trying to change His mind. You are asking Him to do what He desires to do. This transforms prayer from a desperate hope into a confident alignment with the Almighty.',
        },
        {
          kind: 'reflection',
          id: 'tim2-god-will',
          prompt: 'What changes in you when you truly believe God desires the salvation of the person you are praying for? How does this reshape your intercession?',
        },
        {
          kind: 'artwork',
          matchTitle: /prayer|intercession/i,
          caption: '1 Timothy 2:1–4 · Prayer for All',
        },
      ],
    },

    /* ─── 1 Timothy 2:5 — One God, One Mediator ──────────────────────── */
    {
      ref: '1 Timothy 2:5',
      title: 'The Exclusive Mediator',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              5,
              t('For there is '),
              hg('one God', 'c-one-god'),
              t(', and '),
              hp('one mediator between God and men', 'christ-mediator'),
              t(', '),
              hp('the man Christ Jesus', 'christ-humanity'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-one-god',
          html:
            'In Ephesus, the temple of Artemis reigned. The emperor was deified. Multiple gods and goddesses competed for allegiance and ritual. Into this religious pluralism, Paul writes with stark simplicity: <em>one God.</em> Not one among many. One. The God of Israel. The God and Father of Jesus Christ. All other claims to divinity pale before this reality. When you pray—to any ruler, any god, any power—you are praying into a cosmos where there is only one God who actually hears.',
        },
        {
          kind: 'greek',
          id: 'greek-mesites',
          title: 'Mesitēs — "Mediator"',
          script: 'μεσίτης',
          translit: '<strong>mesitēs</strong> · mediator; intermediary; the one who stands in the middle',
          description:
            'A mediator bridges a gap. He stands between two parties who cannot otherwise meet. In a law court, a mediator ensures both sides are heard. In a contract, a mediator guarantees both parties are bound. Christ is the exclusive bridge between a holy God and sinful humanity. There is no other way across that gap.',
        },
        {
          kind: 'christ',
          id: 'christ-mediator',
          title: 'Christ Connection — The Sole Mediator',
          html:
            'Jesus stands alone as the passage between two worlds—between God and man, between heaven and earth, between the holy and the sinful. He is not one mediator among many, not a step in a longer chain, not one option in a cosmic marketplace. He is <em>the</em> mediator. Hebrews deepens this: "For there is one God, and one mediator of God and men, the man Christ Jesus, who gave himself a ransom for all" (Heb. 9:15). This exclusivity is not arrogance. It is mercy. If there were many ways to God, none of us would have walked the right road. Because there is one—and He came to us.',
        },
        {
          kind: 'christ',
          id: 'christ-humanity',
          title: 'Christ Connection — "The Man Christ Jesus"',
          html:
            'Paul emphasizes: <em>the man</em> Christ Jesus. Not a phantom, not a spirit, not a distant god. <em>A man.</em> He felt cold. He got hungry. He wept. He suffered. He died. Why does Paul stress His manhood? Because a mediator must understand both sides. God cannot mediate between God and men—there is no gap in God. Humanity alone cannot mediate—we are trapped on our own side. But a man who is also God? That mediator understands both worlds perfectly. He has stood where we stand. Hebrews says: "For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin" (Heb. 4:15). His humanity is His credential.',
        },
        {
          kind: 'carry',
          html:
            'You do not need to find another mediator, another priest, another intercessor, another way to God. The bridge is built. The door is open. The way is narrow but it is clear: through the man Christ Jesus. When you feel far from God, when you wonder if He hears, when you fear you are too sinful—remember: you have a mediator who was human, who understands, who suffered, who died, who rose. He stands between you and the Father, speaking your case.',
        },
        {
          kind: 'reflection',
          id: 'tim2-mediator',
          prompt: 'What would it mean to trust, today, that Christ is enough? That you do not need another mediator, another system, another path? What would you release?',
        },
      ],
    },

    /* ─── 1 Timothy 2:6 — The Ransom for All ─────────────────────────── */
    {
      ref: '1 Timothy 2:6',
      title: 'Who Gave Himself a Ransom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              6,
              hp('Who gave himself a ransom for all', 'christ-ransom'),
              t(', to be '),
              hg('testified in due time', 'c-testimony'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-testimony',
          html:
            'The ransom was not kept secret. It was to be <em>testified</em>—proclaimed, announced, witnessed to. This is why the church exists: to testify to what Christ did. "In due time" means in God&apos;s appointed moment—which includes now. Every time you speak of Christ&apos;s death and resurrection, you are fulfilling this verse. You are testifying to the ransom.',
        },
        {
          kind: 'greek',
          id: 'greek-antilytron',
          title: 'Antilytron — "Ransom"',
          script: 'ἀντίλυτρον',
          translit: '<strong>antilytron</strong> · ransom; a price paid for release; redemption',
          description:
            'A ransom is paid to secure freedom. In the Old Testament, a price was paid to redeem the firstborn from death, to release a captive, to restore the enslaved. Christ gave <em>Himself</em> as the ransom—His own body, His own blood, His own life. The price was not money. It was Him.',
        },
        {
          kind: 'christ',
          id: 'christ-ransom',
          title: 'Christ Connection — The Ransom for All',
          html:
            'Mark 10:45 mirrors this verse: "The Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many." The ransom is offered to all, given for all, available to all. Every person for whom Paul told Timothy to pray—every king, every magistrate, every person—has already had the price paid. When you intercede for someone&apos;s salvation, you are asking God to apply what has already been purchased. The transaction was completed at the cross. The offer stands.',
        },
        {
          kind: 'carry',
          html:
            'You were not redeemed with corruptible things—not with silver or gold. You were redeemed with the precious blood of Christ, as of a lamb without blemish (1 Pet. 1:18–19). The ransom has been paid. Not in installments. Not conditionally. Completely. This is the foundation of your freedom and your hope. Carry this into your day: you are not earning your way to God. He has already paid the price.',
        },
        {
          kind: 'reflection',
          id: 'tim2-ransom',
          prompt: 'What does it mean that Christ gave Himself a ransom for all? How does this reality reshape the way you think about people you judge or reject?',
        },
      ],
    },

    /* ─── 1 Timothy 2:7 — Testimony and Apostolic Authority ──────────── */
    {
      ref: '1 Timothy 2:7',
      title: 'Paul as Herald and Witness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              7,
              t('Whereunto I am appointed a '),
              hg('preacher, and an apostle', 'c-roles'),
              t(', (I speak the truth in Christ, and lie not;) a '),
              hg('teacher', 'c-teacher'),
              t(' of the Gentiles in faith and verity.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-roles',
          html:
            'Paul is not announcing this out of pride. He is establishing authority. Everything he has said so far—pray for all men, God desires all to be saved, Christ is the one mediator—flows from his apostolic office. He is not speaking as an opinion. He is speaking as one appointed by Christ to carry these truths to the Gentiles. The parenthetical "(I speak the truth in Christ, and lie not)" underscores the solemnity. This is not negotiable doctrine. This is what Christ Himself has appointed.',
        },
        {
          kind: 'commentary',
          id: 'c-teacher',
          html:
            'Paul names himself a teacher—someone whose job is to explain, clarify, and apply truth. The Ephesian congregation was troubled by false teachers spreading error. Paul is reminding Timothy that he has been appointed by Christ to guard and teach the true doctrine. The instruction that follows—about prayer, about conduct in worship—is rooted in this apostolic authority.',
        },
        {
          kind: 'carry',
          html:
            'You have received teaching from those appointed by Christ to teach. Weigh what you are taught against Scripture. Be like the Bereans, who "received the word with all readiness of mind, and searched the scriptures daily, whether those things were so" (Acts 17:11). At the same time, honor those who labor in the word and doctrine, knowing they will give account for how they have led you.',
        },
        {
          kind: 'reflection',
          id: 'tim2-teaching',
          prompt: 'Who has taught you truth about God? How has their faith shaped yours? What are you being called to teach or witness to in your own sphere?',
        },
      ],
    },

    /* ─── 1 Timothy 2:8 — Men Lifting Holy Hands ──────────────────── */
    {
      ref: '1 Timothy 2:8',
      title: 'Pray Without Wrath or Doubting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              8,
              t('I will therefore that '),
              hg('men pray every where', 'c-men-pray'),
              t(', '),
              hp('lifting up holy hands', 'c-holy-hands'),
              t(', without '),
              hg('wrath and doubting', 'c-wrath-doubt'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-men-pray',
          html:
            'Paul shifts to practical instruction for the gathered church. <em>"Men pray every where"</em>—in every place, in public and private, in formal and informal settings. Prayer is not restricted to the temple or a designated prayer room. Wherever believers gather, wherever they are, they are to be praying. This is the normal life of the church.',
        },
        {
          kind: 'commentary',
          id: 'c-holy-hands',
          html:
            'Lifting up holy hands is the ancient posture of openness, submission, and worship. The hand raised toward heaven says: <em>I am empty. I have nothing to offer. I am open to receive.</em> But the hands must be <em>holy</em>—the inward condition must match the outward posture. You cannot raise hands in prayer while harboring bitterness or malice. The gesture and the heart must align.',
        },
        {
          kind: 'greek',
          id: 'greek-orge',
          title: 'Orgē — "Wrath"',
          script: 'ὀργή',
          translit: '<strong>orgē</strong> · anger; wrath; settled resentment',
          description:
            'Orgē is not a passing irritation. It is simmering anger, wrath that has settled in and made a home. You cannot pray with orgē in your heart. Your anger toward a brother or sister, your resentment toward those in power, your bitterness—all of these block prayer. Paul is not saying ignore injustice. He is saying address it, but do not let it poison your prayer life.',
        },
        {
          kind: 'commentary',
          id: 'c-wrath-doubt',
          html:
            'Prayer without doubting—or as some translations render it, without disputing—means praying with a settled confidence. You cannot pray one moment and doubt God&apos;s goodness the next. You cannot lift your hands and speak your request while your heart says, <em>He won&apos;t listen anyway.</em> Faith and doubt cannot coexist in prayer. You must come with conviction that God hears and desires to answer.',
        },
        {
          kind: 'carry',
          html:
            'Before you pray, examine your heart. Is there wrath? Settle it—confess it, forgive, make amends. Is there doubt? Name it. Bring it before God. <em>God, I am struggling to believe You hear. Help my unbelief.</em> Then lift your hands. The gesture itself—empty, open, vulnerable—can help your heart align with it. Prayer is not a performance. It is the honest posture of a creature before its Creator.',
        },
        {
          kind: 'reflection',
          id: 'tim2-holy-hands',
          prompt: 'What wrath or doubt are you carrying into prayer? What would it look like to truly come with holy, empty hands?',
        },
        {
          kind: 'artwork',
          matchTitle: /prayer|worship|hands/i,
          caption: '1 Timothy 2:8 · Lifting Up Holy Hands',
        },
      ],
    },

    /* ─── 1 Timothy 2:9 — Women Adorn Themselves in Modest Apparel ──── */
    {
      ref: '1 Timothy 2:9',
      title: 'Modest Adornment and Inner Beauty',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              9,
              t('In like manner also, that '),
              hg('women adorn themselves in modest apparel', 'c-modesty'),
              t(', with '),
              hy('shamefacedness', 'greek-aidos'),
              t(' and '),
              hy('sobriety', 'greek-sophrosyne'),
              t('; not with '),
              hg('broided hair, or gold, or pearls, or costly array', 'c-adornments'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-modesty',
          html:
            'Paul addresses the way both men and women present themselves in worship. For women, he calls for modest apparel—a translation of kosmos, suggesting order and proper arrangement rather than vanity or display. This is not a blanket rule against beauty or adornment. It is a call for simplicity that reflects a heart oriented toward God rather than toward drawing attention to oneself. The principle is the same for men and women: your appearance should serve worship, not distract from it.',
        },
        {
          kind: 'greek',
          id: 'greek-aidos',
          title: 'Aidōs — "Shamefacedness"',
          script: 'αἰδώς',
          translit: '<strong>aidōs</strong> · reverent shame; sacred respect; propriety; the inner awareness of what is fitting',
          description:
            'Aidos is not shame about the body or self-denial run to extremes. It is the inward sense of what is appropriate—the kind of reverent awareness that makes you want to dress and conduct yourself in a way that honors the sacred moment of worship.',
        },
        {
          kind: 'greek',
          id: 'greek-sophrosyne',
          title: 'Sophrosynē — "Sobriety"',
          script: 'σωφροσύνη',
          translit: '<strong>sophrosynē</strong> · soundness of mind; self-control; sobriety; temperance',
          description:
            'To be sophron is to have a sound mind—to be clear, sober, self-controlled. It is the opposite of being carried away by passion, consumed by desire to impress, or lost in vanity. It is the inner discipline that shows up in your outer choices.',
        },
        {
          kind: 'commentary',
          id: 'c-adornments',
          html:
            'Paul lists specific adornments: braided hair, gold jewelry, pearls, expensive clothes. He is not forbidding these things absolutely—elsewhere Scripture shows women wearing gold and jewels. He is addressing a specific problem in Ephesus: women whose dress was drawing attention away from the worship itself. In a culture obsessed with status and display, Paul calls for counter-cultural simplicity. The principle remains: whatever you wear should serve humility and focus on God, not feed vanity or status competition.',
        },
        {
          kind: 'carry',
          html:
            'As you dress today, ask: Am I seeking to honor God and serve the people around me? Or am I seeking to impress, to display status, to draw attention? Neither question condemns wearing beautiful things. But it reorients them. Beauty can glorify God. Simplicity can glorify God. What matters is the inner heart—the one adorned with shamefacedness and sobriety, with reverence and self-control.',
        },
        {
          kind: 'reflection',
          id: 'tim2-apparel',
          prompt: 'What are you wearing or displaying today—physically or in other ways—to seek approval or status? What would shift if you dressed for worship instead?',
        },
      ],
    },

    /* ─── 1 Timothy 2:10 — Good Works as True Adornment ──────────────── */
    {
      ref: '1 Timothy 2:10',
      title: 'Adorned With Good Works',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              10,
              t('But (which becometh women professing godliness) with '),
              hp('good works', 'c-good-works'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-good-works',
          html:
            'Paul pivots. Rather than focusing on what not to wear, he redirects to what truly adorns a believer: good works. A woman professing godliness—claiming to follow God—should be known for her works of mercy, kindness, service, and faithfulness. This is the adornment that lasts and that matters. In a culture obsessed with external appearance, Paul insists: <em>your true beauty is what you do, how you serve, how you love.</em>',
        },
        {
          kind: 'carry',
          html:
            'You are adorned not with what you wear but with what you do. Every act of kindness, every word of encouragement, every sacrifice made for others, every burden carried on behalf of someone else—these are the jewels you truly wear. The question is not whether your outfit is expensive. The question is whether your life is fruitful. Invest in the adornment that outlasts your body: good works.',
        },
        {
          kind: 'reflection',
          id: 'tim2-good-works',
          prompt: 'What are the good works you are known for? What works of love and service has God called you into? How can you invest in those more deeply?',
        },
      ],
    },

    /* ─── 1 Timothy 2:11–12 — Women Learning and Teaching ────────────── */
    {
      ref: '1 Timothy 2:11–12',
      title: 'Learning and Teaching in the Assembly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              11,
              t('Let the woman learn in '),
              hg('silence with all subjection', 'c-silence-learn'),
              t('.'),
            ),
            verse(
              12,
              t('But I suffer not a woman to teach, nor to '),
              hg('usurp authority over the man', 'c-authority-man'),
              t(', but to be in silence.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-silence-learn',
          html:
            'This is the most contested passage in the chapter. Paul calls women to learn <em>"in silence with all subjection."</em> But subjection to whom? To God, like all believers. To the gathered community, who are to receive teaching in orderly fashion. The word "silence" (hēsuchia) does not mean voicelessness—it means a settled, composed demeanor, the opposite of disruptive behavior. Paul himself says in 1 Cor 11:5 that women are praying and prophesying in church. So "silence" here must mean something more specific than never speaking.',
        },
        {
          kind: 'commentary',
          id: 'c-authority-man',
          html:
            'Paul specifically prohibits women from teaching and "usurping authority" over men in this particular context—the Ephesian church where false teachers (possibly women) were spreading error and creating confusion (1 Tim 1:3–7). His concern in this letter is order and the correction of false doctrine. Yet Paul elsewhere affirms women in teaching roles: Priscilla teaches Apollos (Acts 18:26); Philip&apos;s daughters prophesy (Acts 21:9); Titus&apos; wife likely leads house churches. Different seasons and different problems call for different arrangements. The theological principle endures: all believers—men and women—are called to grow in Christ and bear witness to Him. How that works out in any given assembly must be discerned by the Spirit and by leadership.',
        },
        {
          kind: 'carry',
          html:
            'Whether you read this passage as prescribing a permanent role distinction or as addressing a specific crisis in Ephesus, the underlying call remains: come to worship ready to learn. Come with a humble heart. Receive teaching from those appointed to teach it. If you are called to teach, teach with integrity and clarity, not with an agenda to seize power or prove yourself superior. If you are called to listen, listen well—your silence may be fuller than anyone&apos;s words.',
        },
        {
          kind: 'reflection',
          id: 'tim2-teaching-role',
          prompt: 'What role do you play in your faith community? Are you listening well? Are you teaching faithfully? What is the Spirit inviting you into?',
        },
      ],
    },

    /* ─── 1 Timothy 2:13–14 — Adam, Eve, and the Fall ──────────────── */
    {
      ref: '1 Timothy 2:13–14',
      title: 'The Order of Creation and the Deception',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              13,
              t('For '),
              hg('Adam was first formed, then Eve', 'c-order-creation'),
              t('.'),
            ),
            verse(
              14,
              t('And '),
              hg('Adam was not deceived', 'c-adam-deceived'),
              t(', but '),
              hg('the woman being deceived was in the transgression', 'c-eve-transgression'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-order-creation',
          html:
            'Paul appeals to the creation order: Adam formed first, then Eve from Adam&apos;s side. This is not to say that being created second makes someone inferior—that would contradict Paul&apos;s own theology. Rather, he is establishing that there is a divine order to creation. Different does not mean unequal. Complementary roles in the assembly do not imply less worth before God.',
        },
        {
          kind: 'commentary',
          id: 'c-adam-deceived',
          html:
            'Paul emphasizes that <em>Adam</em> was not deceived. Why does this matter? Because Adam&apos;s sin was not a moment of confusion but a deliberate act of disobedience. He knew the command. He understood the consequence. He chose to eat anyway. This is significant: the first human sin was not from ignorance but from rebellion.',
        },
        {
          kind: 'commentary',
          id: 'c-eve-transgression',
          html:
            'Eve "was deceived." The serpent misrepresented God&apos;s word to her: <em>"Did God say you shall not eat from any tree?"</em> (Genesis 3:1). She was taken in by the deception. She believed a lie about God and acted on it. But—and this is crucial—Paul does not say Eve alone bears responsibility for the Fall. Adam was there. He was not deceived, but he ate. Both participated. Both are responsible. Blame does not flow one direction.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world full of deceptions—about God, about yourself, about what will satisfy. Be on guard. Test what you hear against Scripture. Like Adam, take responsibility for your choices rather than blaming others or circumstances. And extend to others the grace of knowing that deception can come to anyone. The path to restoration always begins with seeing clearly what happened and taking our part in it.',
        },
        {
          kind: 'reflection',
          id: 'tim2-fall',
          prompt: 'Where have you been deceived about God? How did you come to see it? What lies are you still believing about yourself or Him?',
        },
      ],
    },

    /* ─── 1 Timothy 2:15 — Saved Through Childbearing ──────────────── */
    {
      ref: '1 Timothy 2:15',
      title: 'Saved in and Through Childbearing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              15,
              t('Notwithstanding she shall be saved in '),
              hp('childbearing', 'c-childbearing'),
              t(', if they continue in '),
              hg('faith and charity and holiness with sobriety', 'c-virtues'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-childbearing',
          html:
            'This is the most difficult verse in the chapter. "Saved in childbearing" has generated centuries of interpretation. Some read it as restriction: women are saved only by bearing children. Others read it as redemption: though Eve was deceived and brought transgression, women are included in salvation through the promise of a Savior born of a woman. Still others see it as Paul affirming that the role of bearing and raising children is a holy calling, not a curse or punishment. The simplest reading: despite the transgression, women are <em>not</em> damned. They are saved—included in God&apos;s redemptive purpose. The particular language (childbearing) connects to Genesis, where God promised a woman would bear the Messiah (Genesis 3:15). Salvation comes to all who are "in Christ," regardless of gender.',
        },
        {
          kind: 'commentary',
          id: 'c-virtues',
          html:
            'Salvation is contingent on continuing in faith, charity, holiness, and sobriety. These virtues—trust in God, love for others, set-apart living, soundness of mind—are the markers of a saved life. Paul is not dividing salvation into conditional and unconditional. He is saying: a real faith shows itself in how you live. If you abide in these things, you abide in Christ&apos;s salvation.',
        },
        {
          kind: 'christ',
          id: 'christ-childbearing',
          title: 'Christ Connection — The Seed of the Woman',
          html:
            'In Genesis 3:15, immediately after the Fall, God speaks a promise to the serpent: <em>"I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel."</em> That seed—the Messiah—would be born of a woman. Throughout Scripture, women are the bearers of the promise: Sarah, Rebekah, Ruth, Hannah, Mary. Paul is anchoring salvation not in Eve&apos;s deception but in the Savior who would come through a woman. Women are not excluded from God&apos;s redemptive story. They are central to it. And all believers—"whosoever believeth in him"—are saved through Christ, born of Mary, born into resurrection life.',
        },
        {
          kind: 'carry',
          html:
            'You are saved by grace through faith in Christ. You are not saved by your role, your gender, your productivity, your achievements. You are saved because Christ died and rose, and you have come to Him. The invitation stands to all, and the call to faithfulness extends to all. If you are a woman, your life is not determined by whether you bear children. If you are a man, your salvation does not rest on any earthly category. All are made new in Christ.',
        },
        {
          kind: 'reflection',
          id: 'tim2-salvation',
          prompt: 'What categories or roles do you think determine your worth or salvation? What would it mean to release them and rest in Christ alone?',
        },
        {
          kind: 'artwork',
          matchTitle: /woman|woman's|mary|nativity|birth/i,
          caption: '1 Timothy 2:15 · The Seed of the Woman',
        },
      ],
    },
  ],

  hasHebrew: false,
};
