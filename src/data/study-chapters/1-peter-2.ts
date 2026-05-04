import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Peter 2 — The Living Stone and the Living Church
 *
 * Peter begins by calling his readers to lay aside all the debris that clutters
 * the soul — malice, guile, hypocrisy, envy, slander. Then he pivots: you are
 * newborn babies who have tasted the kindness of the Lord. Like living stones,
 * you are being built up into a spiritual house, a holy priesthood.
 *
 * The chapter is one long liturgical portrait of the church as Christ&apos;s body,
 * using language of the temple and priesthood and kingship. It is anchored in
 * Psalm 118&apos;s rejected cornerstone — a stone the builders threw away that God
 * raised up as the head of the corner. Christ is that Stone. And those who come
 * to Him are transformed from rejected rejects into a royal priesthood, called
 * to do in the world what He does: suffer well, follow His pattern, live as
 * witnesses to His grace.
 */
export const FIRST_PETER_2: RichChapterContent = {
  bookSlug: '1-peter',
  bookName: '1 Peter',
  chapter: 2,

  estimatedMinutes: { beginner: 10, intermediate: 18, deep: 26 },
  opener: {
    matchTitle: /The Disrobing of Christ/i,
    caption: '1 Peter 2',
  },
  intros: [
    'Peter has just finished his opening prayer — a praise of God the Father for the new birth His mercy has given us through the resurrection of Jesus. Now he turns to what that new life actually looks like in practice. It is not a private experience; it is a reshaping of how you see and treat the people around you, and how you fit into God&apos;s larger plan.',
    'The chapter is built like a temple. The first section calls you to lay aside the junk and desire the sincere milk of God&apos;s word — the nourishment of new life. The next section sees you (the reader) as a living stone being built into a spiritual house, with Christ as the cornerstone. From there Peter unfolds what it means to be &ldquo;a chosen generation, a royal priesthood&rdquo; — you belong to God, not to the world&apos;s categories. The final half of the chapter is Peter&apos;s description of how to live that identity in the real world: honor everyone, fear God, honor the king, and if you suffer, follow Christ&apos;s example — He bore our sins in His own body, and by His wounds we are healed.',
  ],

  bottomShare: {
    label: 'Share 1 Peter 2',
    quote:
      'You are living stones being built into a spiritual house, a holy priesthood. Christ is the living stone the builders rejected, but God has made Him the chief cornerstone. In Him, you are a chosen generation, a royal priesthood, called to show forth the praises of Him who called you out of darkness into His marvelous light.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Peter 2 · Study Guide',
  },

  sections: [
    /* ─── 1 Peter 2:1–3 — Lay Aside All Malice ─────────────────────────── */
    {
      ref: '1 Peter 2:1–3',
      title: 'Lay Aside All Malice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              1,
              t('Wherefore '),
              hg('laying aside all malice, and all guile, and hypocrisies, and envies, and all evil speakings', 'c-laying-aside'),
              t(','),
            ),
            verse(
              2,
              t('As newborn babes, '),
              hy('desire the sincere milk of the word', 'greek-gala-logikon'),
              t(', that ye may '),
              hg('grow thereby', 'c-auxano'),
              t(': If so be ye have tasted that the Lord is gracious;'),
            ),
            verse(
              3,
              t('To whom coming, as unto a '),
              hy('living stone', 'greek-lithos-zon'),
              t(', '),
              hg('disallowed indeed of men', 'c-dokimazo'),
              t(', but chosen of God, and precious,'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-laying-aside',
          html:
            'Peter piles up five vices like garbage piled at a door. <em>Malice</em> — ill-will toward others. <em>Guile</em> — deception. <em>Hypocrisies</em> — the split between what you claim to be and what you actually are. <em>Envies</em> — resenting someone else&apos;s good. <em>Evil speakings</em> — slander, the venom of the tongue. The spiritual life does not begin with addition; it begins with subtraction. You cannot desire the sincere milk of God&apos;s word while your mouth is still pouring out venom[res:sefaria-psalm118][res:sefaria-isaiah53][res:intertextual-peter-exodus].',
        },
        {
          kind: 'greek',
          id: 'greek-gala-logikon',
          title: 'Gala (γάλα) — &ldquo;milk&rdquo;; Logikon (λογικόν) — &ldquo;rational, spiritual&rdquo;',
          script: 'γάλα · λογικόν',
          translit: '<strong>gala</strong> · milk; <strong>logikon</strong> · of or belonging to the <em>logos</em>, spiritual',
          description:
            'Peter calls the word of God the &ldquo;sincere milk&rdquo; — not metaphorical nourishment but real spiritual sustenance. Infants grow through milk because it is <em>sincere</em> — unmixed, pure. The Greek <em>logikon</em> suggests this is the rational food of the soul, fit for a reasoning being. God&apos;s word does not bypass the mind; it feeds it.',
        },
        {
          kind: 'commentary',
          id: 'c-auxano',
          html:
            'To &ldquo;grow&rdquo; is <em>auxano</em> — not to learn information but to increase in size, in strength, in maturity. The Christian life is a biological metaphor. You are born again; now you grow. The only nourishment Peter names for that growth is the word of God — the scriptures, the testimony of the apostles, the kerygma that Jesus Christ is risen.',
        },
        {
          kind: 'greek',
          id: 'greek-lithos-zon',
          title: 'Lithos zōn (λίθος ζῶν) — &ldquo;living stone&rdquo;',
          script: 'λίθος ζῶν',
          translit: '<strong>lithos zon</strong> · a living stone',
          description:
            'The paradox is the entire point. Stones are dead. But Peter calls Christ a <em>living</em> stone — the one who was dead and is now alive. And He invites others into that same pattern: you, too, are &ldquo;lively stones&rdquo; — you were dead in trespasses and sins, and now you are alive in Christ. The church is built not of mortar and marble but of living, resurrected people.',
        },
        {
          kind: 'commentary',
          id: 'c-dokimazo',
          html:
            'Christ is &ldquo;disallowed indeed of men&rdquo; — the word <em>dokimazo</em> means to put to the test and reject. The builders tested the stone and found it unfit for their purpose. They cast it down. But Peter is quoting Psalm 118, where what the builders &ldquo;disallowed&rdquo; God makes the head of the corner. The very stone that seemed most useless becomes the one everything hangs on.',
        },
        {
          kind: 'christ',
          id: 'christ-cornerstone',
          title: 'Christ Connection — The Cornerstone Psalm',
          html:
            'Peter quotes Psalm 118:22 — &ldquo;the stone which the builders disallowed, the same is made the head of the corner.&rdquo; Jesus Himself applied this psalm to Himself in the Gospels (Matt. 21:42, Mark 12:10, Luke 20:17). The Psalmist was singing of a <em>stone</em> rejected by human judgment but precious to God. Jesus embodied that rejection and vindication perfectly. He was cast out by the religious leadership, condemned and crucified, and then raised as the cornerstone of a whole new building — the church made up of living stones.',
        },
        {
          kind: 'carry',
          html:
            'Peter&apos;s picture of spiritual growth is not mystical or hidden. It is as simple as an infant and milk: you must, first, clear away the toxins (the malice, guile, hypocrisy, envy, slander). Then you deliberately <em>desire</em> — you have to want it — the sincere word of God. And you eat it, regularly. That is the growth. No formula beyond that. No secret. Just the word, taken in, day after day, building you into a stronger person.',
        },
        {
          kind: 'reflection',
          id: '1pet2-laying-aside',
          prompt:
            'Which of these five — malice, guile, hypocrisy, envy, slander — is the hardest for you to lay aside? How might your appetite for God&apos;s word grow if you were honest about that one?',
        },
      ],
    },

    /* ─── 1 Peter 2:4–6 — Lively Stones Built Up ──────────────────────── */
    {
      ref: '1 Peter 2:4–6',
      title: 'Ye Also, As Lively Stones',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              4,
              t('To whom coming, as unto a living stone, disallowed indeed of men, but chosen of God, and precious;'),
            ),
            verse(
              5,
              t('Ye also, as '),
              hg('lively stones, are built up a spiritual house', 'c-oikos-pneumatikos'),
              t(', an holy priesthood, to offer up '),
              hg('spiritual sacrifices, acceptable to God by Jesus Christ', 'c-thusia'),
              t(';'),
            ),
            verse(
              6,
              t('Wherefore also it is contained in the scripture, Behold, I lay in Sion a '),
              hy('chief corner stone, elect, precious', 'greek-akrogoniaios'),
              t(': and he that believeth on him shall not be confounded;'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-oikos-pneumatikos',
          html:
            'A &ldquo;spiritual house&rdquo; is not a metaphor for an idea. It is a real <em>oikos</em> — a household, a dwelling. The church is the place where God now dwells — &ldquo;that God might dwell with you&rdquo; (John 1:14, echoing the tabernacle). Every believer is a stone in that house. You are not a believer in isolation; you are a <em>lively stone</em> being set into a larger structure. Your faith is not just about your relationship with God; it is about your place in His people.',
        },
        {
          kind: 'commentary',
          id: 'c-thusia',
          html:
            'Peter describes the believers as a &ldquo;holy priesthood&rdquo; offering &ldquo;spiritual sacrifices.&rdquo; In the Old Testament, only the Levites could offer sacrifice. Now, Peter says, every believer is a priest — called to offer up to God. But the sacrifices are not animals; they are <em>spiritual</em>: our worship, our service, our lives poured out in love, our prayers for others, our acts of mercy. This is what a priesthood looks like now.',
        },
        {
          kind: 'greek',
          id: 'greek-akrogoniaios',
          title: 'Akrogōniaios (ἀκρογωνιαῖος) — &ldquo;chief corner stone&rdquo;',
          script: 'ἀκρογωνιαῖος',
          translit: '<strong>akrogoniaios</strong> · the corner stone at the head, the principal corner stone',
          description:
            'The &ldquo;chief corner stone&rdquo; is the one that binds the whole building together. In ancient temples, the cornerstone was the most critical stone because every other stone had to be square to it. Christ is not just part of the church; everything in the church relates to Him. The building is true only in reference to Him. You yourself are square only because you are set next to Him.',
        },
        {
          kind: 'carry',
          html:
            'You are a living stone. Not a brick or a tile — something that has to be manufactured, shaped, squeezed into form. A stone from a living quarry, part of something real and ancient and durable. And you are being built into a house. Not standing alone, not floating free, but set into a wall where your shape matters because the stones around you depend on you being true. This is what the church is: living stones, each one precious, each one set into place by Someone who knows where every stone belongs.',
        },
        {
          kind: 'reflection',
          id: '1pet2-living-stones',
          prompt:
            'Think of a church community or group of believers you belong to. How does seeing yourself as a &ldquo;lively stone&rdquo; in that house change the way you think about your role? What stone are you, and where are you set?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── 1 Peter 2:7–8 — The Stone of Stumbling ─────────────────────── */
    {
      ref: '1 Peter 2:7–8',
      title: 'The Stone of Stumbling and Rock of Offense',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              7,
              t('Unto you therefore which believe he is precious: but unto them which be disobedient, the stone which the builders disallowed, the same is made the head of the corner,'),
            ),
            verse(
              8,
              t('And a '),
              hg('stone of stumbling, and a rock of offence', 'c-proskomma'),
              t(', even to them which stumble at the word, being disobedient: whereunto also they were appointed.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-proskomma',
          html:
            'The same stone cannot be both the foundation and the obstacle. For believers, Christ is precious — the head of the corner, the thing the whole building rests on. For those who reject Him, He is a <em>proskomma</em>, a stumbling block, a thing you trip over. Peter says those who reject Him &ldquo;were appointed&rdquo; to that — not appointed to salvation but appointed to encounter Him and make a choice. The stone meets everyone.',
        },
        {
          kind: 'christ',
          id: 'christ-stumble',
          title: 'Christ Connection — The Two Faces of the Stone',
          html:
            'Romans 9:32–33 uses the same language: &ldquo;they stumbled at that stumblingstone; As it is written, Behold, I lay in Sion a stumblingstone and rock of offence: and whosoever believeth on him shall not be ashamed.&rdquo; Christ is not qualified by us; His nature does not change based on whether we believe. But our response to Him changes everything. For those with faith, He is the precious cornerstone. For those in disobedience, He is a stone that trips them into judgment.',
        },
        {
          kind: 'carry',
          html:
            'You cannot be neutral about Christ. He is not a neutral stone lying in the road. Coming to Him is coming to a choice. You must decide whether to receive Him as the cornerstone — the head, the One the whole structure rests on — or to trip over Him and keep walking. There is no middle path where He is just part of the landscape. He is either your foundation or your stumbling block. But He is not optional.',
        },
        {
          kind: 'reflection',
          id: '1pet2-stumbling',
          prompt:
            'Has there ever been a moment when Christ seemed to be a stumbling block to you — something that didn&apos;t make sense, that got in your way? How did you move from stumbling to believing?',
        },
      ],
    },

    /* ─── 1 Peter 2:9–10 — Chosen Generation, Royal Priesthood ────────── */
    {
      ref: '1 Peter 2:9–10',
      title: 'A Chosen Generation, a Royal Priesthood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              9,
              t('But ye are a '),
              hy('chosen generation', 'greek-genos'),
              t(', a '),
              hy('royal priesthood', 'greek-basileon-hierateuma'),
              t(', an holy nation, a '),
              hg('peculiar people', 'c-laos-periousios'),
              t('; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light;'),
            ),
            verse(
              10,
              t('Which in time past were not a people, but are now the people of God: which had not obtained mercy, but now have obtained mercy.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-genos',
          title: 'Genos (γένος) — &ldquo;generation, race, family&rdquo;',
          script: 'γένος',
          translit: '<strong>genos</strong> · race, family, nation, generation',
          description:
            'A chosen generation is a people set apart, a family with a shared purpose. You belong to something larger than yourself — a lineage of faith stretching back to Abraham and forward to eternity. Your identity is not individual; it is corporate. You are part of a family.',
        },
        {
          kind: 'greek',
          id: 'greek-basileon-hierateuma',
          title: 'Basileon (βασιλέων) — &ldquo;royal&rdquo;; Hierateuma (ἱεράτευμα) — &ldquo;priesthood&rdquo;',
          script: 'βασιλέων · ἱεράτευμα',
          translit: '<strong>basileon</strong> · royal, of or belonging to a king; <strong>hierateuma</strong> · a body of priests, a priestly order',
          description:
            'Peter is applying Exodus 19:6 directly to the church: &ldquo;ye shall be unto me a kingdom of priests.&rdquo; Kingship and priesthood were separated in the Old Testament; only the Levites were priests. But now, through Christ, every believer is both royal and priestly. You do not need a human intermediary to approach God. You are the priesthood. You stand in the presence of the King.',
        },
        {
          kind: 'commentary',
          id: 'c-laos-periousios',
          html:
            'A &ldquo;peculiar people&rdquo; is a people belonging to God Himself — <em>laos periousios</em> literally means &ldquo;a people for a possession.&rdquo; You are not your own; you have been bought with a price. But that loss of independence is where your real identity is found. You belong to someone. You are owned by the God who loves you. And that belonging is the most precious thing about you.',
        },
        {
          kind: 'christ',
          id: 'christ-royal-priesthood',
          title: 'Christ Connection — The Prophet, Priest, and King',
          html:
            'Jesus embodied all three roles — Prophet (preaching the kingdom), Priest (offering Himself as a sacrifice), and King (ruling and returning). By His incarnation and resurrection, He has made all believers share in His priesthood and kingship. Revelation 1:6 says He &ldquo;hath made us kings and priests unto God and his Father.&rdquo; Your identity is not your job, your income, or your status in the world. Your identity is <em>royal priesthood</em> — a person who stands in the presence of God and mediates His mercy to the world.',
        },
        {
          kind: 'carry',
          html:
            'You are chosen, not because you earned it or deserved it, but because you have been called out of darkness. You are royal — God Himself is your King, and His kingdom is your home. You are priestly — you have direct access to God, and you have the privilege of standing between heaven and earth, interceding for the people you love. And you are peculiar — belonging to God, marked as His, set apart. This is not identity you can lose. It is identity you can forget. But Peter is here to remind you: this is who you are.',
        },
        {
          kind: 'reflection',
          id: '1pet2-royal-priesthood',
          prompt:
            'If you really lived as a &ldquo;royal priesthood&rdquo; — someone with direct access to God and the privilege of interceding for others — what would change in how you use your time this week?',
        },
      ],
    },

    /* ─── 1 Peter 2:11–12 — Strangers and Pilgrims ──────────────────── */
    {
      ref: '1 Peter 2:11–12',
      title: 'Abstain From Fleshly Lusts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              11,
              t('Dearly beloved, I beseech you as '),
              hg('strangers and pilgrims', 'c-paroikoi'),
              t(', '),
              hg('abstain from fleshly lusts, which war against the soul', 'c-sarx'),
              t(';'),
            ),
            verse(
              12,
              t('Having your conversation honest among the Gentiles: that, whereas they speak against you as evildoers, they may by your good works, which they shall behold, glorify God in the day of visitation.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-paroikoi',
          html:
            'Peter calls his readers &ldquo;strangers and pilgrims&rdquo; — <em>paroikoi</em> and <em>parepidemos</em>. A stranger is someone passing through a foreign land; a pilgrim is someone on a journey home. This language is deliberate. Your home is not here. You are <em>sojourning</em> in a place that is not your destination. That identity shapes how you relate to the world&apos;s offers. You do not need to stake your life on things that are temporary.',
        },
        {
          kind: 'commentary',
          id: 'c-sarx',
          html:
            'The &ldquo;fleshly lusts&rdquo; are not merely sexual; <em>sarx</em> (flesh) refers to the impulses of the unredeemed self — greed, rage, fear, the need to be seen, the hunger for control. These impulses &ldquo;war against the soul.&rdquo; They do not simply coexist with the soul; they actively damage it. Peter is saying: if you want to be whole, you have to resist the things that fragment you.',
        },
        {
          kind: 'carry',
          html:
            'Peter is not calling for asceticism — he is not saying the world is evil or that pleasure is wrong. He is saying you are a person in transit. Your real home is not here. That changes how you move through this place. You honor the rules of the house you are staying in (you respect the king, you honor everyone), but you do not get attached to it as if it were your final destination. The things that war against the soul — envy, greed, the need to be seen — those things make sense only if you think this temporary place is all you have. If you know you are going home, you can travel light.',
        },
        {
          kind: 'reflection',
          id: '1pet2-strangers',
          prompt:
            'What &ldquo;fleshly lust&rdquo; is hardest for you to abstain from? How might viewing yourself as a stranger and pilgrim — someone not at home here — help you let it go?',
        },
      ],
    },

    /* ─── 1 Peter 2:13–17 — Submit and Honor ──────────────────────────── */
    {
      ref: '1 Peter 2:13–17',
      title: 'Submit to Every Ordinance, Honor All Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              13,
              t('Submit yourselves to '),
              hg('every ordinance of man for the Lord&apos;s sake', 'c-tasso'),
              t(': whether it be to the king, as supreme;'),
            ),
            verse(
              14,
              t('Or unto governors, as unto them that are sent by him for the punishment of evildoers, and for the praise of them that do well.'),
            ),
            verse(
              15,
              t('For so is the will of God, that with well doing ye may put to silence the ignorance of foolish men:'),
            ),
            verse(
              16,
              hy('Honour all men', 'c-timao'),
              t('. '),
              hg('Love the brotherhood', 'c-philadelphia'),
              t('. '),
              hy('Fear God', 'c-phobos'),
              t('. '),
              hg('Honour the king', 'c-king-honor'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tasso',
          html:
            'Peter writes to a church living under the Roman Empire, an empire that is beginning to persecute them. Yet he calls them to submit to &ldquo;every ordinance of man&rdquo; — for the Lord&apos;s sake. The <em>tasso</em> (to arrange, to submit) is not passive resignation but active alignment with God&apos;s larger purposes. You submit not because the government deserves it but because submission is your way of showing that your allegiance to God is real and costly.',
        },
        {
          kind: 'commentary',
          id: 'c-timao',
          html:
            'Before Peter says &ldquo;honor the king,&rdquo; he says &ldquo;honor all men.&rdquo; Every person carries the image of God. The king. The governor. The slave. The foreigner. The enemy. The person you disagree with most. <em>Timao</em> — to honor — means to regard them as having worth simply because they are human, made in God&apos;s image. This is not the same as agreeing with them or approving of their choices. It is a refusal to reduce anyone to their worst.',
        },
        {
          kind: 'commentary',
          id: 'c-philadelphia',
          html:
            'Peter sets up a hierarchy of loyalties: honor all people (the universal command), love the brotherhood (the particular community of faith), fear God (the transcendent source of all authority), honor the king (the political order). Your love for your fellow believers is fiercer and more intimate than your general respect for all people — that is the nature of family. But it never becomes an excuse to dishonor those outside the faith.',
        },
        {
          kind: 'commentary',
          id: 'c-king-honor',
          html:
            'Peter frames honor for the king as part of a coherent ethical vision: fear God (the transcendent), love the brotherhood (the particular), honor all people (the universal), and honor the king (the political). This final honor is possible because of the first fear. You honor the king not because he deserves it or because he has absolute authority, but because honoring human order is part of honoring God&apos;s design.',
        },
        {
          kind: 'commentary',
          id: 'c-phobos',
          html:
            '&ldquo;Fear God&rdquo; — <em>phobos</em> — sits at the center of Peter&apos;s ethics. This is not cowardice; it is awe. A healthy fear of God is what prevents you from fearing human authority too much. If God is your King, then no earthly king can truly rule you. You can honor the king (verse 17) precisely because you fear God (verse 17). The second obedience flows from the first.',
        },
        {
          kind: 'carry',
          html:
            'Peter is asking for something that feels impossible: live as a refugee in a foreign country, respect the laws of that country, honor the people ruling it, and do it all in such a way that your &ldquo;good works&rdquo; convert the very people who hate you. This is the witness of the resurrection. It says: I am not afraid of your power because I am not anchored to this world. It says: I honor you because God made you. It says: my freedom is not from authority; it is in submission to the highest authority. And that witness changes people.',
        },
        {
          kind: 'reflection',
          id: '1pet2-submit',
          prompt:
            'Is there an authority or ordinance in your life right now that feels hard to honor or submit to? How might Peter&apos;s hierarchy — fear God first, then honor human authority — change the way you approach it?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── 1 Peter 2:18–20 — Servants and Suffering ───────────────────── */
    {
      ref: '1 Peter 2:18–20',
      title: 'Servants, Be Subject With All Fear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              18,
              t('Servants, be '),
              hg('subject to your masters with all fear', 'c-doulos'),
              t('; not only to the good and gentle, but also to the froward;'),
            ),
            verse(
              19,
              t('For this is thankworthy, if a man for conscience toward God endure grief, suffering wrongfully.'),
            ),
            verse(
              20,
              t('For what glory is it, if, when ye be buffeted for your faults, ye shall take it patiently? but when ye do well, and suffer for it, ye take it patiently, this is acceptable with God.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-doulos',
          html:
            'The word <em>doulos</em> — servant — often refers to a slave in the ancient world. Peter is writing to enslaved people, many of them. He does not tell them to rebel. He tells them to submit — <em>hupotasso</em>, literally to rank yourself under — with fear (respect, reverence). But notice the next phrase: they are to do this &ldquo;for conscience toward God,&rdquo; not for love of their masters. Their ultimate allegiance has shifted from human authority to divine authority. That reframing changes everything.',
        },
        {
          kind: 'carry',
          html:
            'Peter distinguishes between suffering for wrongdoing and suffering for righteousness. If you suffer because you have done wrong, that teaches nothing. But if you suffer <em>doing well</em>, if you are treated unjustly despite your faithfulness — that is when suffering becomes a witness. It says: I am not serving you for your approval. I am serving because I fear God. That kind of suffering, borne with patience and without bitterness, is &ldquo;acceptable with God.&rdquo; It echoes the suffering of Christ.',
        },
        {
          kind: 'reflection',
          id: '1pet2-servants',
          prompt:
            'Is there a situation where you are under someone&apos;s authority and they are not treating you well? How might Peter&apos;s distinction — suffering wrongfully vs. suffering for doing wrong — shape the way you respond?',
        },
      ],
    },

    /* ─── 1 Peter 2:21–25 — Christ&apos;s Example of Suffering ────────────── */
    {
      ref: '1 Peter 2:21–25',
      title: 'Christ&apos;s Example and Our Healing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              21,
              t('For even hereunto were ye called: because '),
              hp('Christ also suffered for us, leaving us an example, that ye should follow his steps', 'c-hypogrammos'),
              t(':'),
            ),
            verse(
              22,
              t('Who '),
              hy('did no sin, neither was guile found in his mouth', 'c-anentilektos'),
              t(':'),
            ),
            verse(
              23,
              t('Who, when he was reviled, reviled not again; when he suffered, he '),
              hg('threatened not', 'c-apeilao'),
              t('; but '),
              hp('committed himself to him that judgeth righteously', 'c-faith-judgment'),
              t(':'),
            ),
            verse(
              24,
              t('Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should '),
              hy('live unto righteousness', 'c-zao'),
              t(': by whose '),
              hp('stripes ye were healed', 'c-iaomai'),
              t('.'),
            ),
            verse(
              25,
              t('For ye were as '),
              hg('sheep going astray', 'c-planao-callout'),
              t('; but are now returned unto the Shepherd and '),
              hy('Bishop of your souls', 'greek-episkopos'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hypogrammos',
          html:
            'Peter uses the word <em>hypogrammos</em> — literally an example or copy, like a pattern a student traces over. Christ did not die to save you from the world; He died to save you <em>in</em> the world, and to show you how to live. His suffering is not alien to us; it is the template. Our suffering, borne rightly, follows His outline.',
        },
        {
          kind: 'commentary',
          id: 'c-anentilektos',
          html:
            'Jesus was wounded for our transgressions, but He committed none. When reviled, He did not revile back. When suffering, He did not threaten. He could have called down legions of angels; instead He submitted. Peter is emphasizing that Christ&apos;s suffering was not the payment for His own sin — it was the payment for ours.',
        },
        {
          kind: 'commentary',
          id: 'c-apeilao',
          html:
            'When Peter says Jesus &ldquo;threatened not,&rdquo; he is highlighting restraint. Jesus had power; He had the moral right to strike back. But He did not. Instead He &ldquo;committed himself to him that judgeth righteously&rdquo; — He entrusted His justice to God. That is the pattern: when wronged, you do not retaliate. You trust the One who judges rightly.',
        },
        {
          kind: 'christ',
          id: 'c-faith-judgment',
          title: 'Christ Connection — The Example of Trust',
          html:
            'Jesus on the cross said, &ldquo;Father, into thy hands I commend my spirit&rdquo; (Luke 23:46). He had been cursed, beaten, executed. And He entrusted the outcome to His Father. Peter is saying: this is the pattern you follow. You suffer well not because you are passive, but because you have moved your trust from your own ability to protect yourself to God&apos;s faithfulness to judge righteously. That is an active faith.',
        },
        {
          kind: 'commentary',
          id: 'c-zao',
          html:
            'Peter sets up the paradox: &ldquo;being dead to sins, should live unto righteousness.&rdquo; You die to the old life (its patterns, its fears, its hunger for approval) so that you might <em>actually live</em> — alive to God, alive to righteousness, alive in ways you could not be while enslaved to sin.',
        },
        {
          kind: 'greek',
          id: 'greek-episkopos',
          title: 'Episkopos (ἐπίσκοπος) — &ldquo;bishop, overseer&rdquo;',
          script: 'ἐπίσκοπος',
          translit: '<strong>episkopos</strong> · one who watches over, oversees, cares for',
          description:
            'Peter uses two titles for Christ: <em>Shepherd</em> (from Psalm 23 and John 10) and <em>Episkopos</em> — the one who watches over you, oversees you, cares for your <em>psyche</em> (soul, life). A shepherd tends sheep; an episkopos watches over a flock. Christ is both — the tender guide and the vigilant guardian of your inner life.',
        },
        {
          kind: 'commentary',
          id: 'c-planao-callout',
          html:
            'Peter quotes Isaiah 53:6: &ldquo;we have turned every one to his own way.&rdquo; <em>Planao</em> — to wander, to go astray — captures the condition before Christ. Not that you were driven off; you chose to wander. You followed your own path, pursued your own desires, and it led nowhere. But then something changed. You have been brought back.',
        },
        {
          kind: 'commentary',
          id: 'c-iaomai',
          html:
            'Peter cites Isaiah 53: &ldquo;by whose stripes ye were healed.&rdquo; The word <em>iaomai</em> means to heal, to restore to wholeness. The wounds that killed Christ are the wounds that heal us. Every scar He bears is for us. That truth does not make your own suffering easy, but it does make it meaningful. Your suffering, when you bear it well, is not meaningless punishment. It is participation in His redemptive work.',
        },
        {
          kind: 'carry',
          html:
            'The chapter opened with Peter calling the readers &ldquo;newborn babes&rdquo; needing the sincere milk of God&apos;s word. It closes with him reminding them they are like sheep — creatures who need a Shepherd. The picture is one of tender care and careful watching. Christ does not rule from a distance; He tends you. He knows your name. He counts the hairs on your head. He will not leave you astray. You are fed by the sincere milk of God&apos;s word. You are a living stone in a spiritual house. You are a chosen generation, a royal priesthood. You are a sheep that has been brought home.',
        },
        {
          kind: 'reflection',
          id: '1pet2-shepherd',
          prompt:
            'What does it mean to you right now that Jesus is the Shepherd and Overseer of your soul? What is one way this week you can rest in that care rather than trying to tend yourself?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-psalm118',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 118:22 — The Stone the Builders Rejected',
      url: 'https://www.sefaria.org/Psalms.118.22',
      description: 'The OT foundation for Christ as the rejected cornerstone — exalted by God.',
    },
    {
      id: 'sefaria-isaiah53',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 53:5–6 — By His Stripes We Are Healed',
      url: 'https://www.sefaria.org/Isaiah.53.5-6',
      description: 'The suffering servant passage Peter quotes: Christ bore our sins and healed our wounds.',
    },
    {
      id: 'intertextual-peter-exodus',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Exodus 19:6 ↔ 1 Peter 2:9 (Royal Priesthood)',
      url: 'https://intertextual.bible/text/exodus-19.6/1-peter-2.9',
      description: 'Cross-reference showing Peter echoes Israel&apos;s identity now applied to the church.',
    },
  ],

  hasHebrew: false,
};
