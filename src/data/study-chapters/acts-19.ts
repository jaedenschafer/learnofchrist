import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Acts 19 — Ephesus: Gospel Dismantling an Economy of Darkness
 *
 * Paul in Ephesus baptizes disciples who knew only John&apos;s baptism,
 * lays hands on them to receive the Spirit with tongues and prophecy.
 * Two years in the school of Tyrannus: "all that dwelt in Asia heard."
 * Special miracles: handkerchiefs and aprons from Paul&apos;s body heal disease
 * and cast out evil spirits. The seven sons of Sceva attempt exorcism
 * using Paul&apos;s name—"Jesus I know, and Paul I know; but who are ye?"
 * Many believers burn books of magic worth fifty thousand pieces of silver.
 * Demetrius the silversmith stirs up a riot: "Great is Diana of the Ephesians!"
 * The town clerk restores order. Yet through it all, the word of God
 * grows mightily.
 *
 * Theme: The gospel does not simply save individuals—it dismantles
 * whole economies of darkness. Magic, idolatry, and commerce built on
 * false gods cannot coexist with the risen Christ.
 */
export const ACTS_19: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 19,

  estimatedMinutes: { beginner: 12, intermediate: 22, deep: 28 },
  intros: [
    'Ephesus is a city built on magic and Diana. It is a world where the supernatural is for sale, where books of power are treasured, where silversmiths prosper by crafting idols. It is a place where spiritual darkness has an economy. Paul arrives, and everything begins to crack.',
    'Watch what happens when the gospel meets a culture that thinks it already understands the Spirit. Disciples who know only John&apos;s baptism receive the Holy Ghost and speak in tongues. Two years of Paul teaching in one rented hall reaches everyone across the whole province of Asia. Handkerchiefs from Paul&apos;s body become vectors of healing. Seven sons of a priest try to cast out demons using Paul&apos;s name—and the demon-possessed man overpowers them, tears their clothes, leaves them naked and wounded. And then something extraordinary: believers bring their books of magic to a bonfire and burn them. Not hiding them, not selling them—burning them. Fifty thousand pieces of silver worth of magical knowledge goes up in smoke. This is not just spiritual conversion. This is the dismantling of a whole world&apos;s economy.',
    'The opposition that follows—Demetrius&apos;s riot, the silversmiths&apos; cry—is not abstract theology. It is economics. The gospel threatens the shrine business. When people stop buying idols, the silver-workers lose their profit. And when profit is at stake, opposition becomes violent. Yet through the riot, the word of God prevails. The gospel does not just save the soul; it rewrites the rules of how power and money and meaning work.',
  ],

  sections: [
    /* ─── Acts 19:1–7 — Spirit and Tongues ────────────────────────────── */
    {
      ref: 'Acts 19:1–7',
      title: 'Disciples Who Knew Only John',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              1,
              t('And it came to pass, that, while Apollos was at Corinth, Paul having passed through the upper coasts came to '),
              hg('Ephesus', 'acts19-ephesus'),
              t(': and finding certain disciples,')
            ),
            verse(
              2,
              t('He said unto them, Have ye received the '),
              hp('Holy Ghost', 'acts19-christ-spirit-now'),
              t(' since ye believed? And they said unto him, We have not so much as heard whether there be any '),
              hy('Holy Ghost', 'acts19-pneuma'),
              t('.')
            ),
            verse(
              3,
              t('And he said unto them, Unto what then were ye baptized? And they said, Unto '),
              hg('John&apos;s baptism', 'acts19-john-baptism'),
              t('.')
            ),
            verse(
              4,
              t('Then said Paul, John verily baptized with the baptism of repentance, saying unto the people, that they should believe on him which should come after him, that is, on Christ Jesus.')
            ),
            verse(
              5,
              t('When they heard this, they were baptized in the name of the Lord Jesus.')
            ),
            verse(
              6,
              t('And when Paul had '),
              hy('laid his hands', 'acts19-epititheumi'),
              t(' upon them, the Holy Ghost came on them; and they '),
              hg('spake with tongues', 'acts19-tongues'),
              t(', and '),
              hg('prophesied', 'acts19-prophesy'),
              t('.')
            ),
            verse(
              7,
              t('And all the men were about twelve.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts19-ephesus',
          html:
            'Ephesus was the greatest city on the east coast of the Aegean—a center of trade, learning, and magic. The temple of Diana there was one of the seven wonders of the ancient world[res:british-museum-temple-artemis]. When Paul arrives, he enters a city whose whole economy and spiritual identity is built on a goddess.',
        },
        {
          kind: 'commentary',
          id: 'acts19-john-baptism',
          html:
            'These disciples have heard of repentance and forgiveness, but not of the Spirit&apos;s indwelling gift. They have John&apos;s baptism—which was real, which pointed to Jesus. But they have not yet entered into the reality it pointed to. They have the sign without the substance.',
        },
        {
          kind: 'greek',
          id: 'acts19-pneuma',
          title: 'Pneuma — &ldquo;Holy Ghost&rdquo;',
          script: 'πνεῦμα',
          translit: '<strong>pneuma</strong> · spirit; breath; wind; the Holy Spirit',
          description:
            'Pneuma is the wind or breath of God. These disciples have not even heard that such a thing exists—the indwelling of God&apos;s Spirit in believers. Paul tells them not just about Jesus, but about the gift Jesus gives.',
        },
        {
          kind: 'greek',
          id: 'acts19-epititheumi',
          title: 'Epitithēmi — &ldquo;laid hands&rdquo;',
          script: 'ἐπιτίθημι',
          translit: '<strong>epitithēmi</strong> · to lay upon; to place hands on',
          description:
            'The laying on of hands is the apostolic gesture for conferring the Spirit. Through it, the fullness of the gospel gift—not just forgiveness, but the indwelling presence of the Spirit—is given.',
        },
        {
          kind: 'commentary',
          id: 'acts19-spirit-transferred',
          html:
            'Paul explains: John&apos;s baptism was preparatory, a call to believe on the One coming after him. Jesus has come and has risen. Now the Spirit is given. The disciples are re-baptized in Jesus&apos;s name, and when Paul lays hands, the Spirit comes upon them audibly—they speak in tongues and prophesy. It is the same manifestation Peter and John saw in Samaria, and the same the apostles experienced at Pentecost.',
        },
        {
          kind: 'commentary',
          id: 'acts19-tongues',
          html:
            'Speaking in tongues is not ecstasy for its own sake. It is the sign that the Spirit has come upon them as promised. These twelve men, who had only a baptism of repentance, now have the gift of the Holy Ghost—the same gift Peter promised on Pentecost: "Repent, and be baptized… and ye shall receive the gift of the Holy Ghost" (Acts 2:38).',
        },
        {
          kind: 'commentary',
          id: 'acts19-prophesy',
          html:
            'Prophecy—speaking forth God&apos;s word—is the second sign that the Spirit has come. These disciples do not sit quietly and feel a presence. They speak. They declare. The Spirit gives utterance. This is not prediction of the future alone, but the ability to speak God&apos;s truth into the present moment with authority.',
        },
        {
          kind: 'christ',
          id: 'acts19-christ-spirit-now',
          title: 'Christ Connection — The Spirit Given Now',
          html:
            'Jesus had said, "Ye shall be baptized with the Holy Ghost not many days hence" (Acts 1:5). He had promised the Spirit to those who believe in Him (John 7:37–39). Now Paul is announcing the fulfillment: the Spirit is available now, to anyone who believes on Jesus Christ and is baptized in His name. The gift is not reserved for the apostles. It is given to twelve obscure disciples in Ephesus. The promise extends to all.',
        },
        {
          kind: 'carry',
          html:
            'You may have come to church with one baptism, one understanding, one half-formed faith. The gospel is inviting you into something more. Not just the outward form of faith, but the inward presence of the Spirit. Not just the knowledge that Jesus rose, but the experience of His Spirit working in your life, speaking through you, moving with power. Ask for what these twelve asked for. Receive what they received.',
        },
        {
          kind: 'reflection',
          id: 'acts19-spirit-reflect',
          prompt:
            'Have you moved beyond a half-formed faith into the actual indwelling of the Holy Ghost? What would change if you believed you could have the Spirit&apos;s power working through you?',
        },
        {
          kind: 'artwork',
          matchTitle: /ephesus|paul|spirit|baptism/i,
          caption: 'Acts 19:1–7 · The Holy Ghost Comes',
        },
      ],
    },

    /* ─── Acts 19:8–10 — Two Years in Tyrannus&apos;s School ────────────── */
    {
      ref: 'Acts 19:8–10',
      title: 'Two Years in the School of Tyrannus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              8,
              t('And he went into the synagogue, and spake boldly for the space of three months, disputing and persuading the things concerning the kingdom of God.')
            ),
            verse(
              9,
              t('But when divers were '),
              hg('hardened', 'acts19-poroo'),
              t(', and believed not, but spake evil of that way before the multitude, he departed from them, and '),
              hg('separated the disciples', 'acts19-separated'),
              t(', disputing daily in the school of one Tyrannus.')
            ),
            verse(
              10,
              t('And this continued by the space of '),
              hg('two years', 'acts19-two-years'),
              t('; so that all they which dwelt in Asia heard the word of the Lord Jesus, both Jews and Greeks.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts19-poroo',
          html:
            'Some in the synagogue harden against Paul&apos;s message. The Greek verb is <em>poroo</em>—to harden, to become callous. Not all hearts soften when the gospel comes. Some resist, and their resistance becomes louder and more bitter. This is the pattern in Acts: faith and opposition always travel together.',
        },
        {
          kind: 'commentary',
          id: 'acts19-separated',
          html:
            'Paul does not force himself on hostile ground. He separates the disciples and moves to rented space—the school of a teacher named Tyrannus. There he teaches daily for two years. Patience. Consistency. A steady voice in a rented hall reaching an entire province.',
        },
        {
          kind: 'greek',
          id: 'acts19-katecheo',
          title: 'Katēchéō — &ldquo;disputing, teaching&rdquo;',
          script: 'κατηχέω',
          translit: '<strong>katēchéō</strong> · to teach thoroughly; to instruct in the faith',
          description:
            'Paul does not simply preach once and move on. He teaches, corrects, instructs thoroughly. For two years, day after day, he establishes believers in the gospel of Jesus Christ.',
        },
        {
          kind: 'commentary',
          id: 'acts19-two-years',
          html:
            'Two years. Not two weeks. Two years of rented space, daily teaching, consistent presence. And the result: "all they which dwelt in Asia heard the word of the Lord Jesus." One city. One teacher. One rented hall. Yet through steady, faithful labor, an entire province is reached.',
        },
        {
          kind: 'carry',
          html:
            'You do not need a grand platform or a famous name to change your world. You need fidelity. A place to teach. A group of people willing to listen. Two years of showing up. Two years of consistency when opposition rises. The harvest comes not from the loudest voice, but from the steadiest one.',
        },
        {
          kind: 'reflection',
          id: 'acts19-tyrannus-reflect',
          prompt:
            'Where are you being called to steady, faithful work instead of dramatic results? What would it look like to stay faithful for two years?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Acts 19:11–12 — Special Miracles via Handkerchiefs ────────────── */
    {
      ref: 'Acts 19:11–12',
      title: 'Special Miracles; Handkerchiefs of Healing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              11,
              t('And God wrought special '),
              hy('miracles', 'acts19-dunamis-special'),
              t(' by the hands of Paul:')
            ),
            verse(
              12,
              t('So that from his '),
              hg('body', 'acts19-body-christon'),
              t(' were brought unto the sick '),
              hg('handkerchiefs or aprons', 'acts19-soudarion'),
              t(', and the diseases departed from them, and the evil spirits went out of them.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts19-dunamis-special',
          html:
            'Not ordinary miracles, but "special" ones. The Greek emphasizes that these are extraordinary, beyond the usual course of apostolic signs. God is endorsing Paul&apos;s work in Ephesus with power that goes beyond what even the apostles typically did.',
        },
        {
          kind: 'commentary',
          id: 'acts19-body-christon',
          html:
            'A handkerchief that touched Paul&apos;s body has power to heal. This is not Paul&apos;s power; it is Christ&apos;s power operating through Paul. The medium is merely cloth. The agent is the risen Christ, whose Spirit dwells in Paul and works through the simplest means to deliver and heal.',
        },
        {
          kind: 'greek',
          id: 'acts19-soudarion',
          title: 'Soudarion — &ldquo;handkerchief&rdquo;',
          script: 'σουδάριον',
          translit: '<strong>soudarion</strong> · a cloth; a napkin; a handkerchief worn around the neck',
          description:
            'A humble, everyday object. Not a relic in a temple. Not an idol. Just cloth that a working man wore. Yet through it flows the power of Christ. The gospel sanctifies the ordinary.',
        },
        {
          kind: 'commentary',
          id: 'acts19-demons-leave',
          html:
            'Both diseases and demons respond. Chronic ailments vanish. Evil spirits depart. This is not psychological healing or placebo. The text says plainly: diseases departed, demons came out. The world Paul enters in Ephesus is a world where the supernatural is real—and Christ&apos;s power is demonstrably greater than any other power in the city.',
        },
        {
          kind: 'christ',
          id: 'acts19-christ-healing',
          title: 'Christ Connection — Healing and Deliverance Through His Name',
          html:
            'Jesus had told His disciples, "These signs shall follow them that believe… they shall lay hands on the sick, and they shall recover" (Mark 16:17–18). Paul is living out that promise. The handkerchiefs are not amulets; they are carriers of the gospel&apos;s power. Every disease that flees, every demon that exits, testifies to one thing: the risen Jesus has authority over sickness, darkness, and death. His power flows through ordinary vessels to ordinary people.',
        },
        {
          kind: 'carry',
          html:
            'Healing and deliverance are not miracles reserved for the apostles. They are the birthright of anyone connected to Christ. You carry Christ&apos;s Spirit. Bring that presence into the sick room, the desperate place, the place where darkness holds sway. Not your power, but His. Trust it. Offer it. Watch what Christ does.',
        },
        {
          kind: 'reflection',
          id: 'acts19-miracles-reflect',
          prompt:
            'Have you experienced healing or deliverance that you cannot explain by natural causes alone? Who do you know that needs you to bring Christ&apos;s power into their darkness?',
        },
      ],
    },

    /* ─── Acts 19:13–16 — Sons of Sceva; The Demon Speaks ────────────── */
    {
      ref: 'Acts 19:13–16',
      title: 'The Sons of Sceva: "Who Are Ye?"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              13,
              t('Then certain of the vagabond Jews, exorcists, took upon them to call over them which had evil spirits the '),
              hy('name of the Lord Jesus', 'acts19-name-magic'),
              t(', saying, We adjure you by Jesus whom Paul preacheth.')
            ),
            verse(
              14,
              t('And there were seven sons of one Sceva, a '),
              hg('chief of the priests', 'acts19-sceva-priest'),
              t(', which did so.')
            ),
            verse(
              15,
              t('And the evil spirit answered and said, Jesus I know, and '),
              hp('Paul I know', 'acts19-christ-authority'),
              t('; but '),
              hp('who are ye', 'acts19-christ-authority'),
              t('?')
            ),
            verse(
              16,
              t('And the man in whom the evil spirit was leaped on them, and overcame them, and prevailed against them, so that they fled out of that house naked and wounded.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts19-name-magic',
          html:
            'These are exorcists—men who make a living by casting out demons. They have heard of Paul&apos;s success and decide to use his name as a formula, a magical incantation. "We adjure you by Jesus whom Paul preacheth." They treat the name as they would treat an amulet or a spell[res:theoi-ephesia-grammata]. This is the corruption of faith into superstition.',
        },
        {
          kind: 'greek',
          id: 'acts19-exorkistēs',
          title: 'Exorkistēs — &ldquo;exorcist&rdquo;',
          script: 'ἐξορκιστής',
          translit: '<strong>exorkistēs</strong> · one who exorcises; one who binds by oath',
          description:
            'An exorcist is a professional dealer in demons. These men knew the craft, the formulas, the techniques. But they did not know Jesus. They were trying to use His name as a tool, not surrendering to His authority.',
        },
        {
          kind: 'commentary',
          id: 'acts19-sceva-priest',
          html:
            'Sceva is called "chief of the priests"—he has standing, legitimacy. His seven sons are using him as a credential. But authority over demons does not come from a priestly title or a family name. It comes from faith in Christ, from being known by the Spirit of Jesus.',
        },
        {
          kind: 'commentary',
          id: 'acts19-demon-responds',
          html:
            'The demon does not obey. Instead, it speaks—and what it says is devastating: "Jesus I know, and Paul I know; but who are ye?" The demon recognizes genuine authority when it encounters it. Paul has been baptized in the Spirit, has lived in faith, has cast out many demons through Christ&apos;s authority. Jesus and Paul are known to the demon because their authority is real, personal, earned through submission. The sons of Sceva are unknown because their power is borrowed, formulaic, hollow.',
        },
        {
          kind: 'christ',
          id: 'acts19-christ-authority',
          title: 'Christ Connection — Authority Is Not a Formula',
          html:
            'The demon says to them, "Jesus I know, and Paul I know; but who are ye?" Christ&apos;s authority is not a spell to be pronounced. It is a relationship to be lived. Paul had been transformed by encounter with the risen Jesus. He had been baptized in the Spirit. He had submitted himself wholly to Christ&apos;s lordship. That is why the demon recognizes him. The sons of Sceva had none of this. They had words without the reality behind them. In Mark 9:38–40, a man was casting out demons in Jesus&apos;s name, and Jesus blessed him because he was truly acting in faith. But here, the sons of Sceva are doing something else—using the name as a tool, not as an expression of faith. Demons know the difference.',
        },
        {
          kind: 'carry',
          html:
            'You cannot borrow authority from another&apos;s faith. You cannot quote a Scripture or invoke a name and expect power if that name is not your own reality. The sons of Sceva learned this brutally: the demon-possessed man overpowered them, tore their clothes, left them wounded and fleeing naked into the street. Do not treat the name of Jesus as a formula. Let that name reshape who you are. Know Christ. Be known by Christ. Then His authority flows through you naturally.',
        },
        {
          kind: 'reflection',
          id: 'acts19-authority-reflect',
          prompt:
            'Are you trying to use Christ&apos;s authority like a formula, or have you surrendered yourself to know Him? What is the difference?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Acts 19:17–20 — Many Believers Burn Their Books ────────────── */
    {
      ref: 'Acts 19:17–20',
      title: 'Books of Magic Burned',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              17,
              t('And this was known to all the Jews and Greeks also dwelling at Ephesus; and '),
              hg('fear fell upon them all', 'acts19-fear'),
              t(', and the name of the Lord Jesus was magnified.')
            ),
            verse(
              18,
              t('And many that believed came, and '),
              hg('confessed', 'acts19-confessed'),
              t(', and '),
              hg('shewed their deeds', 'acts19-deeds'),
              t('.')
            ),
            verse(
              19,
              t('Many also of them which used '),
              hy('curious arts', 'acts19-periergos'),
              t(' brought their books together, and burned them before all men: and they counted the price of them, and '),
              hg('found it fifty thousand pieces of silver', 'acts19-fifty-thousand'),
              t('.')
            ),
            verse(
              20,
              t('So mightily grew the word of God and '),
              hp('prevailed', 'acts19-christ-grows'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts19-fear',
          html:
            'Fear falls on the whole city. Not fear of Paul, but fear of the name of Jesus. When a demon-possessed man overpowers trained exorcists and they flee naked into the street, and when that power is attributed to the name of Jesus, people pay attention. Fear and awe toward Jesus become the beginning of faith.',
        },
        {
          kind: 'commentary',
          id: 'acts19-confessed',
          html:
            'Believers come forward publicly and confess their faith. Not hiding it, not keeping it private. They openly acknowledge Jesus as Lord. In a city devoted to Diana, in a world of magic and secrecy, this is dangerous. Yet they confess.',
        },
        {
          kind: 'commentary',
          id: 'acts19-deeds',
          html:
            'They "show their deeds"—they reveal what they have been doing. In the context of magical practices, this means they expose their former ways, their involvement in sorcery, their reliance on hidden knowledge. Everything that was done in shadows is brought into the light.',
        },
        {
          kind: 'greek',
          id: 'acts19-periergos',
          title: 'Periergos — &ldquo;curious arts&rdquo;',
          script: 'περίεργος',
          translit: '<strong>periergos</strong> · curious; magical; meddling; occupied with magical arts',
          description:
            'Periergos refers to the magical practices that were common in Ephesus—spells, incantations, books of hidden knowledge. These were not dark occultism alone, but the ambient magical culture of the ancient city. Magic was as common as reading.',
        },
        {
          kind: 'commentary',
          id: 'acts19-fifty-thousand',
          html:
            'Fifty thousand pieces of silver. That is enormous wealth. These are not cheap pamphlets, but valuable books—precious handwritten manuscripts containing rare knowledge. People possessed these as we possess portfolios. And they brought them all to a bonfire and burned them. Not sold them, not stored them, not hidden them—burned them. This is not just individual conversion; this is the public dismantling of an economy of magic. The books that held Ephesus in thrall, that people paid extraordinary sums to possess, are consumed by fire. The gospel has reordered what is valuable.',
        },
        {
          kind: 'christ',
          id: 'acts19-christ-grows',
          title: 'Christ Connection — The Word Grows and Prevails',
          html:
            'As the books of magic burn, the word of God grows mightily. These two things cannot coexist. When people encounter the true power of Christ—not as a spell, not as a formula, but as the resurrection of the living God—all the false powers lose their hold. The books are burned because they have become worthless. The gospel is the power that remains. Jesus is the name that has authority. As Paul wrote later: "For we walk by faith, not by sight" (2 Cor. 5:7). But the gospel provides something sight can no longer deny—the power of the risen Christ visible in healing, deliverance, and the transformation of the human heart.',
        },
        {
          kind: 'carry',
          html:
            'What books are you still holding? What secrets, what false knowledge, what hidden practices are you keeping? The gospel asks you to bring them into the light, to acknowledge them, to burn them. Not because they were evil in themselves, but because they have no place in a life surrendered to Christ. There is a bonfire waiting. Not a confessional alone, but a public, irreversible break with the old powers. Walk toward it.',
        },
        {
          kind: 'reflection',
          id: 'acts19-books-reflect',
          prompt:
            'What practices or knowledge have you held onto, thinking they were valuable? What would it mean to burn them—to make an irreversible break with the old?',
        },
      ],
    },

    /* ─── Acts 19:21–23 — Paul Resolved to Go to Jerusalem ─────────────── */
    {
      ref: 'Acts 19:21–23',
      title: 'Paul Resolves; Opposition Gathers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              21,
              t('After these things were ended, Paul purposed in the spirit, saying, After I have been there, I must also see Rome.')
            ),
            verse(
              22,
              t('So he sent into Macedonia two of them that ministered unto him, Timotheus and Erastus; but he himself stayed in Asia for a season.')
            ),
            verse(
              23,
              t('And the same time there arose '),
              hg('no small stir', 'acts19-tarachos'),
              t(' about that way.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts19-vision-wider',
          html:
            'Paul has been faithful in Ephesus for two years. The word has reached all of Asia. But his vision extends further. He looks toward Jerusalem and then to Rome. Even as his work in Ephesus is successful, he is already thinking about where the gospel needs to go next.',
        },
        {
          kind: 'greek',
          id: 'acts19-tarachos',
          title: 'Tarachos — &ldquo;stir, tumult&rdquo;',
          script: 'τάραχος',
          translit: '<strong>tarachos</strong> · disturbance; commotion; uproar',
          description:
            'Opposition is rising. The success of the gospel has not gone unnoticed by those who profit from the old ways. A storm is gathering.',
        },
        {
          kind: 'carry',
          html:
            'Opposition and expansion often come together. When the gospel is truly at work, it does not simply coexist peacefully with the powers of darkness. Something has to give. If you are working for Christ and you encounter no resistance, you might ask whether your work is truly threatening the kingdom of darkness. Welcome the opposition as a sign that something true is happening.',
        },
      ],
    },

    /* ─── Acts 19:24–27 — Demetrius and the Silversmiths ────────────── */
    {
      ref: 'Acts 19:24–27',
      title: 'Demetrius: "Great Is Diana"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              24,
              t('For a certain man named Demetrius, a '),
              hg('silversmith', 'acts19-argurokopos'),
              t(', which made silver '),
              hy('shrines', 'acts19-naos'),
              t(' for Diana, brought no small gain unto the craftsmen;')
            ),
            verse(
              25,
              t('Whom he called together with the workmen of like occupation, and said, Sirs, ye know that by this craft we have our wealth.')
            ),
            verse(
              26,
              t('Moreover ye see and hear, that not alone at Ephesus, but almost throughout all Asia, this '),
              hg('Paul', 'acts19-paul-threat'),
              t(' hath persuaded and turned away much people, saying that they be no gods, which are made with hands:')
            ),
            verse(
              27,
              t('So that not only this our '),
              hg('craft is in danger', 'acts19-craft-danger'),
              t(', to be set at nought; but also that the temple of the great goddess Diana should be despised, and her magnificence should be destroyed, whom all Asia and the world worshippeth.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts19-argurokopos',
          html:
            'Demetrius is a silversmith—a man of craft and business[res:bibleodyssey-silversmith]. His identity is tied to his trade. He makes shrines of Diana, and people buy them. It is profitable. It is respectable. It is his life&apos;s work.',
        },
        {
          kind: 'greek',
          id: 'acts19-naos',
          title: 'Naos — &ldquo;shrine, temple&rdquo;',
          script: 'ναός',
          translit: '<strong>naos</strong> · inner chamber; shrine; sacred dwelling',
          description:
            'A naos is a small shrine or temple—perhaps a figurine of Diana that would be kept in a home. Demetrius manufactures these. They are pious objects, religious merchandise, items of devotion.',
        },
        {
          kind: 'commentary',
          id: 'acts19-paul-threat',
          html:
            'Demetrius names Paul specifically. He does not say, "The gospel threatens us." He says, "Paul hath persuaded many people." The threat is personal and economic. Paul teaches that idols made by human hands are not gods. And when people believe this, they stop buying shrines. The logic is simple and devastating to Demetrius&apos;s trade.',
        },
        {
          kind: 'commentary',
          id: 'acts19-craft-danger',
          html:
            'The craft is in danger. Not the truth. Not morality. The craft—the business, the money flow, the economic system. Demetrius is not concerned about Diana&apos;s honor in the abstract. He is concerned that his wealth depends on selling shrines to people who believe in Diana. When Paul undermines that belief, the money stops.',
        },
        {
          kind: 'carry',
          html:
            'Notice what Demetrius names as the actual threat: not Paul&apos;s violence or moral failures, but his teaching. "Paul hath persuaded and turned away much people." The gospel changes minds. And when minds change, money flows differently. Be aware: wherever the gospel truly works, there will be resistance from those whose wealth depends on the old way. It is not personal malice. It is economics.',
        },
      ],
    },

    /* ─── Acts 19:28–34 — The Riot: "Great Is Diana!" ──────────────── */
    {
      ref: 'Acts 19:28–34',
      title: 'The Riot: "Great Is Diana of the Ephesians!"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              28,
              t('And when they heard these sayings, they were full of wrath, and '),
              hg('cried out', 'acts19-eboao'),
              t(', saying, '),
              hg('Great is Diana', 'acts19-megale-diana'),
              t(' of the Ephesians.')
            ),
            verse(
              29,
              t('And the whole city was filled with confusion: and having caught Gaius and Aristarchus, men of Macedonia, Paul&apos;s companions in travel, they rushed with one accord into the theatre[res:ascsa-ephesus-theater].')
            ),
            verse(
              30,
              t('And when Paul would have entered in unto the people, the disciples suffered him not.')
            ),
            verse(
              31,
              t('And certain of the chief of Asia, which were his friends, sent unto him, desiring him that he would not adventure himself into the theatre.')
            ),
            verse(
              32,
              t('Some therefore cried one thing, and some another: for the assembly was confused; and the more part knew not wherefore they were come together.')
            ),
            verse(
              33,
              t('And they drew out of the multitude Alexander, the Jews putting him forward. And Alexander beckoned with the hand, and would have made a defence unto the people.')
            ),
            verse(
              34,
              t('But when they knew that he was a Jew, all with one voice about the space of two hours cried out, '),
              hg('Great is Diana', 'acts19-chant-repeated'),
              t(' of the Ephesians.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts19-eboao',
          html:
            'The crowd erupts. Demetrius&apos;s words have ignited them. They do not riot with logic or argument. They riot with a chant, a slogan, repeated mindlessly: "Great is Diana!" Emotion, not reason. Fear, not faith. The mob gathers its power not from individual conviction, but from the fever of the crowd.',
        },
        {
          kind: 'commentary',
          id: 'acts19-megale-diana',
          html:
            'The phrase "Great is Diana of the Ephesians" becomes the rallying cry. It is not an argument; it is a mantra. The crowd needs to voice it, needs to own it, needs to feel the power of saying it together. This is how mobs work. The slogan does the thinking for them.',
        },
        {
          kind: 'commentary',
          id: 'acts19-chant-repeated',
          html:
            'For two hours, the cry continues. Not discourse, not deliberation—just the endless repetition of one phrase. The crowd is in frenzy, and the chant binds them together, gives them a sense of collective purpose. They have lost all individual judgment.',
        },
        {
          kind: 'commentary',
          id: 'acts19-confusion',
          html:
            'The whole city fills with confusion. And notice: the crowd catches two of Paul&apos;s companions—Gaius and Aristarchus—not to interrogate them, but simply to have victims. They do not know what they are angry about. As the text says, "the more part knew not wherefore they were come together." This is the nature of mob violence: it gathers speed without reason, targets people at random, feeds on itself.',
        },
        {
          kind: 'commentary',
          id: 'acts19-friends-warn',
          html:
            'Paul wants to go to the theater to address the crowd. The disciples will not let him. And friendly officials—"chief of Asia"—send word: do not risk it. Even non-believers recognize the danger. The crowd is beyond reason. To face it alone is to risk your life.',
        },
        {
          kind: 'carry',
          html:
            'There are times to speak and times to be silent. There are moments when the crowd has lost the capacity to listen, when emotion overrides all other senses. Paul&apos;s companions and friends recognized this moment. They protected him not from faith, but from death. Wisdom sometimes looks like stepping back, not pressing forward. Trust those who love you when they say, "Not now. Not this way."',
        },
      ],
    },

    /* ─── Acts 19:35–41 — The Town Clerk Restores Order ───────────────── */
    {
      ref: 'Acts 19:35–41',
      title: 'The Town Clerk&apos;s Wisdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              35,
              t('And when the '),
              hg('town clerk', 'acts19-grammateus'),
              t(' had appeased the multitude, he said, Ye men of Ephesus, what man is there that knoweth not how that the city of the Ephesians is a worshipper of the great goddess Diana, and of the image which fell down from Jupiter?')
            ),
            verse(
              36,
              t('Seeing then that these things cannot be spoken against, ye ought to be quiet, and to do nothing rashly.')
            ),
            verse(
              37,
              t('For ye have brought hither these men, which are neither robbers of churches, nor yet blasphemers of your goddess.')
            ),
            verse(
              38,
              t('Wherefore if Demetrius, and the craftsmen which are with him, have a matter against any man, the law is open, and there are deputies: let them implead one another.')
            ),
            verse(
              39,
              t('But if ye enquire any thing concerning other matters, it shall be determined in a lawful assembly.')
            ),
            verse(
              40,
              t('For we are in danger to be called in question for this day&apos;s uproar, by the Romans: seeing that there is no cause whereby we may give an account of this concourse.')
            ),
            verse(
              41,
              t('And when he had thus spoken, he dismissed the assembly.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts19-grammateus',
          html:
            'The town clerk is a magistrate, an official of the city. He has authority and respect. When he speaks, the crowd listens. He begins by affirming what they value: "Ye men of Ephesus, what man is there that knoweth not how that the city of the Ephesians is a worshipper of the great goddess Diana?" He does not attack their faith. He acknowledges it. He is wise.',
        },
        {
          kind: 'commentary',
          id: 'acts19-legal-recourse',
          html:
            'The clerk reminds them that there is a lawful process. If Demetrius has a complaint, there are magistrates, there is the law. Matters can be brought before a proper assembly. Violence and riot are not justice—they are chaos. He gives them a legal framework that respects both their grievance and the rule of law.',
        },
        {
          kind: 'commentary',
          id: 'acts19-danger-roman',
          html:
            'He mentions the Romans. Rome does not tolerate mob violence or riots that threaten the peace. If the authorities cannot account for why a crowd assembled and rioted, Rome may punish the city officials themselves. This is a practical argument: lawlessness endangers everyone. It is not idealism; it is realism.',
        },
        {
          kind: 'commentary',
          id: 'acts19-innocence-paul',
          html:
            'Most importantly, he states clearly: the men who were seized are "neither robbers of churches, nor yet blasphemers of your goddess." Gaius and Aristarchus have done nothing wrong. There is no legal case against them. The riot is lawless and unjust.',
        },
        {
          kind: 'carry',
          html:
            'Wisdom sometimes comes from an unexpected source—a pagan magistrate who cares about order and law. He protects the innocent not because he is Christian, but because the rule of law requires it. His speech shows that you do not have to be a believer to recognize justice, to honor the legal process, to refuse mob violence. Honor such voices when you hear them.',
        },
        {
          kind: 'reflection',
          id: 'acts19-clerk-reflect',
          prompt:
            'When have you seen someone use authority to cool a situation rather than inflame it? What made their approach effective?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Acts 19:41–20:1 — Mightily Grew the Word ────────────────────── */
    {
      ref: 'Acts 19:41 and After',
      title: '"Mightily Grew the Word of God and Prevailed"',
      blocks: [
        {
          kind: 'commentary',
          id: 'acts19-prevailed',
          html:
            'The riot breaks up. The city clerk sends the crowd home. Demetrius does not win. The disciples are released. Paul stays a while longer, then moves on. And the text gives us one sentence as summary: "So mightily grew the word of God and prevailed." Two years of steady teaching. Two years of miracles. Two years of opposition. And through it all, the word of God grew. This is the pattern of Acts. Opposition does not stop the gospel. It spreads the gospel.',
        },
        {
          kind: 'christ',
          id: 'acts19-christ-overcomes',
          title: 'Christ Connection — The Word That Prevails',
          html:
            'Jesus promised, "Upon this rock I will build my church; and the gates of hell shall not prevail against it" (Matt. 16:18). In Ephesus, the gates of Hades in the form of a silversmith&apos;s riot, a possessed man, a crowd in frenzy, a city devoted to a goddess—none of it prevailed. The word of God prevailed. Not by force, but by truth. Not by violence, but by the faithful presence of those who had surrendered to Christ&apos;s lordship.',
        },
        {
          kind: 'carry',
          html:
            'You are living in a world opposed to the gospel. Culture, economics, comfort, false gods, the fear of the crowd—they all work against surrender to Christ. Yet the gospel prevails. Not everywhere, not without cost, but truly. Trust not in your own strength or eloquence, but in the word itself. It has the power to prevail.',
        },
        {
          kind: 'reflection',
          id: 'acts19-final-reflect',
          prompt:
            'Where do you see the word of God growing and prevailing despite opposition in your own time? How can you be part of that growth?',
        },
        {
          kind: 'artwork',
          matchTitle: /ephesus|diana|riot|silversmith/i,
          caption: 'Acts 19 · The Gospel Dismantles an Economy of Darkness',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Many also of them which used curious arts brought their books together, and burned them before all men: and found it fifty thousand pieces of silver. So mightily grew the word of God and prevailed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 19 · Study Guide',
  },

  resources: [
    {
      id: 'british-museum-temple-artemis',
      kind: 'museum',
      source: 'British Museum',
      label: 'Temple of Artemis at Ephesus',
      url: 'https://www.britishmuseum.org/collection/search?query=artemis+ephesus',
      description: 'Frieze fragments and sculptural remains from one of the Seven Wonders, held in the Greek & Roman Antiquities collection.',
    },
    {
      id: 'ascsa-ephesus-theater',
      kind: 'archaeology',
      source: 'ASCSA',
      label: 'Ephesus Theater Excavations',
      url: 'https://agora.ascsa.net/',
      description: 'Ongoing Austrian Archaeological Institute investigations of the theater where Demetrius&apos;s riot took place — Acts 19:29.',
    },
  ],

  hasHebrew: false,
};
