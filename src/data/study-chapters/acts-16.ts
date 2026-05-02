import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 16 — Timothy Joins; The Gospel Crosses to Europe; Three Conversions
 *
 * Paul and Silas travel through Asia, but the Spirit forbids them. A vision
 * calls Paul to Macedonia: &ldquo;Come over and help us.&rdquo; The gospel
 * crosses from Asia into Europe. In Philippi, three people meet the gospel
 * and believe: Lydia, a wealthy seller of purple, whose heart the Lord opens;
 * a slave girl with a spirit of divination whom Paul casts out; the Philippian
 * jailer, who asks the eternal question—&ldquo;What must I do to be saved?&rdquo;
 * Paul and Silas are beaten and imprisoned at midnight, singing hymns. An
 * earthquake shakes the prison to its foundation. The jailer, thinking all
 * prisoners have escaped, is about to kill himself. But Paul cries out:
 * &ldquo;Do thyself no harm: we are all here.&rdquo; The gospel is for every
 * layer of society—the wealthy, the enslaved, the powerful—and it transforms
 * households, families, and whole cities. The chapter closes with Paul
 * claiming Roman citizenship, and the magistrates trembling at what they have
 * done.
 */
export const ACTS_16: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 16,

  intros: [
    'Acts 16 is the moment the gospel crosses the Mediterranean. Paul and Silas are traveling through Asia, but the Spirit forbids them to preach there. A vision comes to Paul in the night: a man from Macedonia stands before him crying, &ldquo;Come over into Macedonia, and help us.&rdquo; In that cry, all of Europe is waiting. The Western world will be changed by what happens next.',
    'In the city of Philippi, the gospel touches three people whose stories weave together: Lydia, a merchant whose &ldquo;heart the Lord opened&rdquo; to receive the word; a slave girl with a spirit of divination, whom Paul frees; and a Roman jailer who, in terror of an earthquake and shame at his captors&apos; apparent escape, asks the question that every human being must answer: &ldquo;What must I do to be saved?&rdquo; Three conversions. Three layers of society. One gospel that saves all.',
    'At the heart of the chapter lies an earthquake—both literal and spiritual. Paul and Silas, beaten and stocked in a Roman prison at midnight, begin to sing hymns to God. The ground shakes. Chains fall off. The prison opens. Fear grips the jailer&apos;s heart. And in that moment of terror, he meets the risen Christ through the testimony of two men who sang instead of cursed while suffering. The power of the gospel is not in its respectability. It is in the joy of those who have found something—Someone—worth suffering for.',
  ],

  sections: [
    /* ─── Acts 16:1–5 — Timothy Joins ────────────────────────────────────── */
    {
      ref: 'Acts 16:1–5',
      title: 'Timothy Joins Paul and Silas',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(1, 'Then came he to Derbe and Lystra: and, behold, a certain disciple was there, named Timotheus, the son of a certain woman, which was a Jewess, and believed; but his father was a Greek.'),
            plain(2, 'Which was well reported of by the brethren that were at Lystra and Iconium.'),
            plain(3, 'Him would Paul have to go forth with him; and took and circumcised him because of the Jews which were in those quarters: for they knew all that his father was a Greek.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts16-timothy-call',
          html:
            'Timothy is not an apostle, not a founding figure, but a young disciple well reported of by the brethren. Paul sees the gift in him and invites him into partnership. This is how the gospel spreads: not through grand pronouncements, but through older believers pulling younger ones into the work. Timothy&apos;s mother was Jewish, his father Greek—he is a bridge between worlds. Paul circumcises him to remove any barrier to his ministry among the Jews, a practical sacrifice for the sake of the gospel&apos;s mission.',
        },
        {
          kind: 'commentary',
          id: 'acts16-gentile-jewish-bridge',
          html:
            'By accepting Timothy—a child of a mixed marriage—Paul is expanding the definition of who belongs in the church. Timothy&apos;s father was Greek, an outsider to covenant Israel. Yet Timothy&apos;s faith makes him not just acceptable but valuable. The gospel is not narrowing. It is opening.',
        },
        {
          kind: 'carry',
          html:
            'Paul saw something in a young man and called him deeper. Timothy responded. Generations of churches would be shaped by their partnership—letters that are still read in every church on earth. Who in your life has called you to follow them into the work? And have you looked around to see the younger believers God is calling you to mentor? The gospel spreads not through heroes but through ordinary people saying to the next generation: Come. Follow. Help.',
        },
        {
          kind: 'reflection',
          id: 'acts16-timothy-reflect',
          prompt: 'Who pulled you into a deeper faith? And who are you calling into the work?',
        },
      ],
    },

    /* ─── Acts 16:6–10 — The Spirit Forbids; The Macedonian Call ──────────── */
    {
      ref: 'Acts 16:6–10',
      title: 'The Spirit Forbids; The Vision of Macedonia',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(6, 'Now when they had gone throughout Phrygia and the region of Galatia, and were forbidden of the Holy Ghost to preach the word in Asia,'),
            plain(7, 'After they were come to Mysia, they assayed to go into Bithynia: but the Spirit suffered them not.'),
            plain(8, 'And they passing by Mysia came down to Troas.'),
            plain(9, hy('And a vision appeared to Paul in the night', 'acts16-vision') + '; There stood a man of '),
            plain(9, 'Macedonia, and prayed him, saying, Come over into Macedonia, and help us.'),
            plain(10, 'And after he had seen the vision, immediately we endeavoured to go into Macedonia, assuredly gathering that the Lord had called us for to preach the gospel unto them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts16-vision',
          html:
            'Paul is traveling in Asia, planning to preach. But the Spirit forbids him. He tries to go north into Bithynia, but again he is stopped. Three times—forbidden, forbidden, stopped—Paul is turned away from where he was planning to go. This is not failure. This is redirection. God has something else. And then, at night, the vision comes: a man of Macedonia stands before him, crying, &ldquo;Come over and help us.&rdquo;',
        },
        {
          kind: 'greek',
          id: 'acts16-kōluō',
          title: 'K&ōluō — To Forbid; To Prevent; To Hinder',
          script: 'κωλύω',
          translit: '<strong>k&ōluō</strong> · to forbid; to hinder; to prevent; to restrain',
          description:
            'The Spirit does not merely suggest or recommend. The Spirit forbids. This is active prevention—a closing of doors that felt open. The Greek is decisive. God is redirecting Paul&apos;s steps not through invitation but through constraint. Sometimes God&apos;s guidance is felt as an opening. Sometimes it is felt as a wall.',
        },
        {
          kind: 'commentary',
          id: 'acts16-troas-vision',
          html:
            'In Troas, a port city on the coast of Asia, Paul has a night vision. Not a dream he wakes from confused, but a waking vision—clear, compelling, undeniable. A man stands before him. The man is weeping, pleading: &ldquo;Come over into Macedonia, and help us.&rdquo; In that moment, Paul understands: the refusals were not rejections. They were redirections. God was moving him toward this man, this city, this continent.',
        },
        {
          kind: 'commentary',
          id: 'acts16-macedonian-call',
          html:
            'The phrase is almost unbearably intimate. Not &ldquo;Preach the gospel in Macedonia,&rdquo; but &ldquo;Help us.&rdquo; A specific need. A specific place. A specific people in darkness crying out for light. The vision does not give Paul a grand vision of Christendom. It gives him a face, a voice, a plea. The gospel moves westward toward Europe because one man heard a crying.',
        },
        {
          kind: 'christ',
          id: 'acts16-macedonian-christ',
          title: 'Christ Connection — The Gospel Goes Where It Is Called',
          html:
            'Jesus commanded His apostles to go into all the world and preach the gospel to every creature (Mark 16:15). But the specific route is guided by the Spirit. Paul does not choose where to go based on strategy or preference. He listens. He is stopped. He is called. He responds. The Macedonian call is the answer to Christ&apos;s commission shaped by the Spirit&apos;s direction. Europe will be reached not because someone planned it, but because Paul heard a crying and obeyed.',
        },
        {
          kind: 'carry',
          html:
            'You have plans. Doors you want to walk through. Dreams you have been chasing. But the Spirit sometimes closes those doors. Not to punish you, but to redirect you toward something you cannot yet see. Toward a need you have not yet heard. Toward a crying in the night that is meant for you to answer. The question is: when the Spirit closes a door, do you trust that it is closed for a reason? Can you wait in Troas long enough to hear the vision?',
        },
        {
          kind: 'reflection',
          id: 'acts16-direction-reflect',
          prompt: 'When has God closed a door you were walking toward? Looking back, can you see where He was redirecting you?',
        },
        {
          kind: 'artwork',
          matchTitle: /paul|macedonian|vision|call/i,
          caption: 'Acts 16:9 · The Macedonian Vision',
        },
      ],
    },

    /* ─── Acts 16:11–15 — Lydia by the River; Her Heart Opened ───────────── */
    {
      ref: 'Acts 16:11–15',
      title: 'Lydia by the River; &ldquo;Whose Heart the Lord Opened&rdquo;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(11, 'Therefore loosing from Troas, we came with a straight course to Samothracia, and the next day to Neapolis; and from thence to Philippi, which is the chief city of that part of Macedonia, and a colony of Rome: and we were in that city abiding certain days.'),
            plain(12, 'And on the sabbath we went out of the city by a river side, where prayer was wont to be made; and we sat down, and spake unto the women which resorted thither.'),
            plain(13, 'And a certain woman named Lydia, a seller of purple, of the city of Thyatira, which worshipped God, heard us: whose heart the Lord opened, that she attended unto the things which were spoken of Paul.'),
            plain(14, 'And when she was baptized, and her household, she besought us, saying, If ye have judged me to be faithful to the Lord, come into my house, and abide there. And she constrained us.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts16-sabbath-prayer',
          html:
            'On the Sabbath, Paul and Silas do not go to a synagogue. Instead, they go to a river side where prayer is wont to be made. This is a place where Jewish women gather—a place of prayer without a formal building, without male leadership, perhaps because there are not enough Jewish men to form a proper synagogue. It is a place where the practice of faith persists, not in marble, but in the open air by a river.',
        },
        {
          kind: 'commentary',
          id: 'acts16-lydia-merchant',
          html:
            'Lydia is a seller of purple—one of the most expensive and valued dyes in the ancient world, worn by emperors and the wealthy. She is not poor. She is not enslaved. She is a businesswoman of means, from the city of Thyatira, far from home but prosperous in her trade. She worships God, meaning she is a God-fearer, a Gentile who has attached herself to the faith of Israel but not become a full proselyte. And at the river, she hears Paul speak.',
        },
        {
          kind: 'greek',
          id: 'acts16-anoigō',
          title: 'Anoigō — To Open; To Disclose',
          script: 'ἀνοίγω',
          translit: '<strong>anoigō</strong> · to open; to open the mind or heart; to disclose; to reveal',
          description:
            'The Lord does not convince Lydia through argument. He opens her heart. This is not a matter of human persuasion alone, though Paul speaks the truth. The opening is God&apos;s work. Lydia&apos;s heart, closed to Christ until this moment, is opened by the hand of the Spirit. She attends to the things spoken. She believes. She is baptized.',
        },
        {
          kind: 'commentary',
          id: 'acts16-lydia-baptism',
          html:
            'The moment Lydia&apos;s heart is opened, she moves. She is baptized, and her whole household with her. Not one person but a family. Servants, perhaps, and family members who live in her house. All of them are baptized. One woman believes, and a household is joined to Christ.',
        },
        {
          kind: 'commentary',
          id: 'acts16-lydia-hospitality',
          html:
            'Lydia then does something remarkable. She invites Paul and Silas into her home. &ldquo;If ye have judged me to be faithful to the Lord, come into my house, and abide there.&rdquo; And she constrains them—she urges them so strongly they cannot refuse. Her home becomes the first church in Philippi. Lydia does not merely believe. She opens her life, her house, her resources to the gospel. This is what belief looks like when it is alive.',
        },
        {
          kind: 'christ',
          id: 'acts16-heart-opened',
          title: 'Christ Connection — The Heart the Lord Opens',
          html:
            'In Luke 24, the risen Jesus walks with the disciples on the road to Emmaus and, as the Gospel says, &ldquo;he opened their understanding, that they might understand the scriptures&rdquo; (Luke 24:45). In John 10:3, Jesus says, &ldquo;to him the porter openeth; and the sheep hear his voice.&rdquo; It is Christ alone who opens hearts and understanding. Lydia&apos;s faith is not the product of Paul&apos;s eloquence or her own searching. It is the work of Christ opening what was closed. &ldquo;No one can come to me unless the Father draws him&rdquo; (John 6:44)—and Lydia comes.',
        },
        {
          kind: 'carry',
          html:
            'You may know the gospel story. You may have heard it a hundred times. But knowing is not the same as believing. Your heart may remain closed even as your ears are open. Lydia teaches you that belief is the work of God—a heart opened by the hand of the Spirit. But notice also: the moment her heart opened, she acted. She did not say, &ldquo;Let me think about this for a week.&rdquo; She moved. She was baptized. She opened her house. A closed heart is also a static heart. An open heart runs toward Christ.',
        },
        {
          kind: 'reflection',
          id: 'acts16-lydia-reflect',
          prompt: 'What does it mean to you that belief is not your achievement but God&apos;s work—the opening of a heart you cannot open yourself?',
        },
        {
          kind: 'artwork',
          matchTitle: /lydia|purple|river|baptism|seller/i,
          caption: 'Acts 16:14 · Lydia&apos;s Conversion by the River',
        },
      ],
    },

    /* ─── Acts 16:16–18 — The Slave Girl with the Python Spirit ──────────── */
    {
      ref: 'Acts 16:16–18',
      title: 'The Slave Girl with the Spirit of Divination',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(16, 'And it came to pass, as we went to prayer, a certain damsel possessed with a spirit of divination met us, which brought her masters much gain by soothsaying:'),
            plain(17, 'The same followed Paul and us, and cried, saying, These men are the servants of the most high God, which shew unto us the way of salvation.'),
            plain(18, 'And this did she many days. But Paul, being grieved in his spirit, turned and said to the spirit, I command thee in the name of Jesus Christ to come out of her. And he came out the same hour.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts16-slave-girl',
          html:
            'A girl, enslaved, possessed with a spirit of divination. She is a tool for her masters, a means of profit. They make much money off her ability to predict the future. She is the gospel&apos;s third convert in Philippi, but she is so different from Lydia—not free, not wealthy, not respected, but broken and owned. She follows Paul and Silas through the streets of Philippi, crying out that they are servants of the Most High God who show the way of salvation.',
        },
        {
          kind: 'greek',
          id: 'acts16-pythōn',
          title: 'Pythōn — Spirit of Divination; Python Spirit',
          script: 'πύθων',
          translit: '<strong>pythōn</strong> · a spirit of divination; the spirit of the python oracle at Delphi; a soothsaying spirit',
          description:
            'The Greek word references the python oracle at Delphi, the most famous oracle in the ancient world, where the priestess would inhale vapors from the earth and speak prophecies. A python spirit is a spirit of false prophecy, of demonic soothsaying. The girl is possessed by something that speaks truths mixed with lies, enslaving her to those who would profit from her words.',
        },
        {
          kind: 'commentary',
          id: 'acts16-uncanny-truth',
          html:
            'The girl cries out that Paul and Silas are servants of the Most High God who show the way of salvation. This is true. Completely true. But a demonic spirit is speaking the words. Truth from a demon is still a thing to grieve over, because it is truth twisted to serve a lie. The spirit is using what is real to give itself credibility.',
        },
        {
          kind: 'commentary',
          id: 'acts16-paul-grieved',
          html:
            'Paul is grieved in his spirit. Not angry. Not annoyed. Grieved. He sees a young girl possessed, enslaved, being used as a tool for profit and spiritual deception. He cannot tolerate it. He turns and commands the spirit to come out in the name of Jesus Christ. And in that same hour, the spirit leaves her. She is free.',
        },
        {
          kind: 'carry',
          html:
            'Paul does not engage with the spirit. He does not argue with it or negotiate with it. He sees a girl in bondage, and he commands her freedom. The name of Jesus Christ is enough. The authority of Christ is absolute. The demon flees. But notice: her masters are furious. She has stopped making them money. Freedom for the slave girl means loss for those who profited from her. Standing up for the broken means taking a stand against the powerful who exploit them.',
        },
        {
          kind: 'reflection',
          id: 'acts16-slavery-reflect',
          prompt: 'Who is being exploited in your own time? What would it cost you to stand for their freedom?',
        },
      ],
    },

    /* ─── Acts 16:19–24 — Paul and Silas Beaten; In Stocks at Midnight ────── */
    {
      ref: 'Acts 16:19–24',
      title: 'Beaten, Imprisoned, and Stocked',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(19, 'And when her masters saw that the hope of their gains was gone, they caught Paul and Silas, and drew them into the marketplace unto the rulers,'),
            plain(20, 'And brought them to the magistrates, saying, These men, being Jews, do exceedingly trouble our city,'),
            plain(21, 'And teach customs which are not lawful for us to receive, neither to observe, being Romans.'),
            plain(22, 'And the multitude rose up together against them: and the magistrates rent off their clothes, and commanded to beat them.'),
            plain(23, 'And when they had laid many stripes upon them, they cast them into prison, charging the jailer to keep them safely:'),
            plain(24, 'Who, having received such a charge, thrust them into the inner prison, and made their feet fast in the stocks.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts16-masters-profit',
          html:
            'The masters of the slave girl report Paul and Silas to the magistrates. The charges are not about the spirit, not about freedom, not about the girl. The charges are about security: these men are Jews troubling the city, teaching customs unlawful for Romans to observe. It is a political charge, not a spiritual one. But beneath it is simple economics: they want their profit back.',
        },
        {
          kind: 'commentary',
          id: 'acts16-beaten',
          html:
            'The magistrates rent off their clothes and command them to be beaten. The stripes laid on them are not gentle. The phrase &ldquo;many stripes&rdquo; suggests a severe beating. Then they are cast into the inner prison—the most secure part, where escape is least possible. Their feet are made fast in the stocks. Stocks are not simply restraints. They are a form of torture, forcing the legs into painful positions, often causing bruising and infection. Paul and Silas are alone, in darkness, in pain, surrounded by stone.',
        },
        {
          kind: 'commentary',
          id: 'acts16-stocks-darkness',
          html:
            'This is darkness. Not merely physical, but spiritual. They have freed a girl and paid for it with their bodies. They have preached the gospel and been brutalized. They are in the most inner prison, the most secure place, where hope dies. This is where the gospel appears to fail. This is where faith is tested not by argument but by agony.',
        },
        {
          kind: 'carry',
          html:
            'You may feel at times that following Jesus costs you—not your life, perhaps, but your comfort, your ease, your ability to fit in. Paul and Silas teach you that such cost is real. But they also teach you something else. They are in the stocks. They are beaten. They are alone in darkness. And they do not cry out in despair. They do not curse God. Instead, at midnight, something happens that will reshape everything.',
        },
        {
          kind: 'reflection',
          id: 'acts16-cost-reflect',
          prompt: 'What has it cost you to follow Jesus? Have you ever wondered if the cost was worth it?',
        },
      ],
    },

    /* ─── Acts 16:25–30 — Midnight Prayer and Singing; The Earthquake ────── */
    {
      ref: 'Acts 16:25–30',
      title: 'Midnight Prayer and Singing; The Earthquake',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(25, 'And at midnight Paul and Silas prayed, and sang praises unto God: and the prisoners heard them.'),
            plain(26, 'And suddenly there was a great earthquake, so that the foundations of the prison were shaken: and immediately all the doors were opened, and every one&apos;s bands were loosed.'),
            plain(27, 'And the keeper of the prison awaking out of his sleep, and seeing the prison doors open, he drew out his sword, and would have killed himself, supposing that the prisoners had been fled.'),
            plain(28, 'But Paul cried with a loud voice, saying, Do thyself no harm: we are all here.'),
            plain(29, 'Then he called for a light, and sprang in, and came trembling before Paul and Silas,'),
            plain(30, 'And brought them out, and said, Sirs, what must I do to be saved?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts16-midnight-prayer',
          html:
            'It is midnight. The time when hope is lowest. The time when the darkness seems absolute. And at midnight, Paul and Silas pray. Not silent prayers. Not whispered prayers. But prayers spoken aloud. And they sing praises unto God. The other prisoners hear them. In the darkness, in the stocks, beaten and abandoned, they sing.',
        },
        {
          kind: 'commentary',
          id: 'acts16-midnight-song',
          html:
            'This is not singing for comfort&apos;s sake. This is worship. This is the declaration that no prison can contain their joy. No authority can silence their praise. No darkness can extinguish the light they have found in Christ. They have been beaten, but they are not beaten down. They are imprisoned, but they are not imprisoned in spirit. The song in darkness is the deepest proof of Christ&apos;s presence.',
        },
        {
          kind: 'commentary',
          id: 'acts16-earthquake',
          html:
            'Suddenly—in that moment—the earth shakes. &ldquo;A great earthquake, so that the foundations of the prison were shaken.&rdquo; All the doors open. All the bands fall off. This is not rescue by a human hand. This is God stepping into history, moving the very earth to free His servants. But something else happens too. The prisoners do not flee.',
        },
        {
          kind: 'commentary',
          id: 'acts16-jailer-awakens',
          html:
            'The jailer awakes to a nightmare: the doors are open. His prisoners are loose. In Roman law, a jailer who allows prisoners to escape is executed. He sees only one way out. He draws his sword to kill himself. But Paul shouts—a loud voice in the darkness: &ldquo;Do thyself no harm: we are all here.&rdquo; Every prisoner still there. No one has fled. The jailer&apos;s life is saved by the very men he was ordered to keep.',
        },
        {
          kind: 'greek',
          id: 'acts16-sōzō',
          title: 'S&ōzō — To Save; To Make Well; To Deliver',
          script: 'σῴζω',
          translit: '<strong>s&ōzō</strong> · to save; to deliver; to make well; to preserve from harm',
          description:
            'Paul&apos;s cry saves the jailer&apos;s physical life. But the same word will be used for salvation of the soul. The jailer is saved twice in this chapter: once from his own sword, once by the blood of Christ.',
        },
        {
          kind: 'commentary',
          id: 'acts16-jailer-trembling',
          html:
            'The jailer calls for a light and comes trembling before Paul and Silas. Not angry. Not authoritative. Trembling. He has seen something he cannot explain. The ground shook. The doors opened. His prisoners stayed. And the two men he was ordered to keep have just saved his life. In that moment, the jailer understands that these are not ordinary men. They are men connected to a power greater than Rome.',
        },
        {
          kind: 'christ',
          id: 'acts16-suffering-church',
          title: 'Christ Connection — Singing Through Suffering',
          html:
            'Hebrews 13:15 says, &ldquo;By him therefore let us offer the sacrifice of praise to God continually, that is, the fruit of our lips giving thanks to his name.&rdquo; Paul and Silas in the stocks are offering that sacrifice of praise. They are living the letter to the Hebrews before it is even written. Their singing in darkness is a parable of the church itself—a people who have found something in Christ worth losing everything for. &ldquo;The joy of the Lord is your strength&rdquo; (Nehemiah 8:10), and that strength is displayed most clearly not when life is easy, but when the stocks are tight and the darkness is deep.',
        },
        {
          kind: 'carry',
          html:
            'You may never be beaten and imprisoned for the gospel. But you know suffering. You know darkness. You know moments when the ground beneath you seems to shake. Midnight moments. The question Acts 16 asks you is: in your midnight, will you sing? Not sing to cover the pain, not sing to deny the difficulty, but sing because you have encountered Christ, and nothing—not circumstance, not suffering, not death itself—can take that from you. What would it mean to praise God at your midnight?',
        },
        {
          kind: 'reflection',
          id: 'acts16-midnight-reflect',
          prompt: 'Have you experienced a midnight moment when joy in Christ sustained you? What would it mean to choose that joy again, in your darkness today?',
        },
        {
          kind: 'artwork',
          matchTitle: /prison|earthquake|midnight|song|paul|silas|bound|prisoner/i,
          caption: 'Acts 16:25–26 · Praise and Earthquake',
        },
      ],
    },

    /* ─── Acts 16:31–34 — &ldquo;What Must I Do to Be Saved?&rdquo; ─────────── */
    {
      ref: 'Acts 16:31–34',
      title: '&ldquo;What Must I Do to Be Saved?&rdquo;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(31, 'And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.'),
            plain(32, 'And they spake unto him the word of the Lord, and to all that were in his house.'),
            plain(33, 'And he took them the same hour of the night, and washed their stripes; and was baptized, he and all his, straightway.'),
            plain(34, 'And when he had brought them into his house, he set meat before them, and rejoiced, believing in God with all his household.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts16-jailer-question',
          html:
            'In that trembling moment, the jailer asks the question. Not &ldquo;How did the earthquake happen?&rdquo; Not &ldquo;Why did the doors open?&rdquo; But: &ldquo;What must I do to be saved?&rdquo; He understands that something beyond the natural is happening. And he understands—though he cannot yet articulate it—that he himself is in need of salvation. Not his life from his sword, but his soul from death.',
        },
        {
          kind: 'commentary',
          id: 'acts16-simple-gospel',
          html:
            'Paul&apos;s answer is the simplest statement of the gospel in all of Acts: &ldquo;Believe on the Lord Jesus Christ, and thou shalt be saved.&rdquo; Not &ldquo;obey the law.&rdquo; Not &ldquo;perform rituals.&rdquo; Not &ldquo;earn your way.&rdquo; But believe. Trust. Commit yourself to the One who is Lord. And you will be saved. The gospel is offered to the jailer as it was offered to Lydia, as it was offered to the slave girl. One gospel. One requirement. One way.',
        },
        {
          kind: 'greek',
          id: 'acts16-pisteuō-oikos',
          title: 'Oikos — Household; House; Family',
          script: 'οἶκος',
          translit: '<strong>oikos</strong> · household; house; family; the people living in one house',
          description:
            'Paul says &ldquo;thou shalt be saved, and thy house&rdquo;—your oikos. Salvation is personal, but it is not merely individual. When the head of a household believes, the gospel comes to everyone under that roof. The jailer&apos;s faith opens the door for his entire household to hear and believe.',
        },
        {
          kind: 'commentary',
          id: 'acts16-wash-stripes',
          html:
            'The jailer&apos;s conversion is immediate. He washes the stripes of Paul and Silas—the very man he had been ordered to keep. The one who ordered the beating, the one who put them in stocks, now tenderly washes their wounds. This is what faith does. It reverses everything. The jailer, the authority figure, becomes the servant. Paul and Silas, the prisoners, become the prophets. The hierarchy is inverted by the cross.',
        },
        {
          kind: 'commentary',
          id: 'acts16-household-baptized',
          html:
            'The jailer is baptized. His entire household is baptized. Not gradually. Not after careful instruction. But immediately. &ldquo;Straightway.&rdquo; One hour ago, he was a man of authority in a pagan city. Now he is baptized into the body of Christ along with everyone under his roof.',
        },
        {
          kind: 'commentary',
          id: 'acts16-jailer-joy',
          html:
            'The chapter closes with the jailer setting meat before Paul and Silas, and rejoicing with all his household, believing in God. Not afraid anymore. Not trembling. Rejoicing. The same joy that Paul and Silas sang in the stocks now fills the jailer&apos;s house. The earthquake has done its work.',
        },
        {
          kind: 'christ',
          id: 'acts16-jailer-salvation',
          title: 'Christ Connection — Believe and Live',
          html:
            'The jailer asks the eternal question, and Paul gives the eternal answer: Believe on the Lord Jesus Christ. Not &ldquo;believe in Christ,&rdquo; as if He were one option among many. But &ldquo;believe on,&rdquo; which means to place your weight on, to commit your whole self to. The Greek word is &ldquo;pisteuō&rdquo;—faith that is not mere intellectual assent but trust, commitment, surrender. This is the gospel in its simplest form, and it is sufficient. It was sufficient for the jailer at midnight, and it is sufficient for you.',
        },
        {
          kind: 'carry',
          html:
            'The gospel is not complicated. Believe on the Lord Jesus Christ, and you will be saved. Not &ldquo;work harder.&rdquo; Not &ldquo;be better.&rdquo; Not &ldquo;clean yourself up first.&rdquo; But believe. The jailer was a pagan man living in a pagan city. He knew nothing of Israel&apos;s law, nothing of the prophets, nothing of Jewish tradition. He knew only that at midnight, two beaten men sang hymns, the earth shook, his life was saved, and they offered him salvation through faith alone. That is enough. That is all you need. Believe, and you will be saved.',
        },
        {
          kind: 'reflection',
          id: 'acts16-belief-reflect',
          prompt: 'What does it mean to you to &ldquo;believe on&rdquo; Jesus—not merely to believe in Him, but to place your weight on Him, to commit your whole life to Him?',
        },
        {
          kind: 'artwork',
          matchTitle: /jailer|household|baptism|salvation|believe|prison|night|convert/i,
          caption: 'Acts 16:30–34 · The Jailer&apos;s Conversion and Household Baptism',
        },
      ],
    },

    /* ─── Acts 16:35–40 — Paul Claims Roman Citizenship ────────────────── */
    {
      ref: 'Acts 16:35–40',
      title: 'Paul Claims Roman Citizenship; The Magistrates Fear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(35, 'And when it was day, the magistrates sent the serjeants, saying, Let those men go.'),
            plain(36, 'And the keeper of the prison told this saying to Paul, The magistrates have sent to let you go: now therefore depart, and go in peace.'),
            plain(37, 'But Paul said unto them, They have beaten us openly uncondemned, being Romans, and have cast us into prison; and now do they thrust us out privily? nay verily; but let them come themselves and fetch us out.'),
            plain(38, 'And the serjeants told these words unto the magistrates: and they feared, when they heard that they were Romans.'),
            plain(39, 'And they came and besought them, and brought them out, and desired them to depart out of the city.'),
            plain(40, 'And they went out of the prison, and entered into the house of Lydia: and when they had seen the brethren, they comforted them, and departed.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts16-magistrates-fear',
          html:
            'In the morning, the magistrates order Paul and Silas released. They think the problem is solved. They think the inconvenient prisoners will quietly leave town. But Paul refuses. He has been beaten uncondemned—without trial. This is illegal for a Roman citizen. The magistrates have violated Roman law. Paul claims his citizenship. And when the magistrates learn that they have beaten Roman citizens, they are afraid. Not angry. Not defensive. Afraid.',
        },
        {
          kind: 'commentary',
          id: 'acts16-roman-citizenship',
          html:
            'Roman citizenship was precious and rare, especially for Jews. It carried rights and protections. To beat a Roman citizen uncondemned was a serious crime. Paul, through his action, is standing not only for his own dignity but for the principle that even the smallest person has rights that must be respected. He will not slip quietly out of town. He will not let injustice stand. And the magistrates, faced with the reality of their crime, are humbled.',
        },
        {
          kind: 'carry',
          html:
            'Paul could have left quietly. The gospel had taken root in Philippi. Three conversions—Lydia, the slave girl, the jailer—had happened. Paul could have departed in peace. But he stayed long enough to ensure that the magistrates understood the wrong they had done. Sometimes following Jesus means you cannot leave a place without standing for what is right, without holding those in power accountable, without bearing witness that what happened was wrong. It costs more to stay and speak than to slip away in silence.',
        },
        {
          kind: 'reflection',
          id: 'acts16-justice-reflect',
          prompt: 'When have you had the chance to leave quietly but felt called to stay and speak for what was right? What did it cost you?',
        },
        {
          kind: 'commentary',
          id: 'acts16-lydias-house',
          html:
            'Paul and Silas leave prison not to flee the city, but to go to Lydia&apos;s house. The first convert becomes the gathering point for the church. They comfort the brethren—the believers gathered in her home. Then they depart. The gospel has come to Philippi, to Europe, to the Western world. And it will not stop.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'What must I do to be saved? Believe on the Lord Jesus Christ, and thou shalt be saved.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 16 · Study Guide',
  },

  hasHebrew: false,
};
