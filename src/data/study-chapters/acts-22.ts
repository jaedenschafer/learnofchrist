import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Acts 22 — Paul&apos;s Defence Before the Council
 *
 * Paul stands on the temple stairs and asks the crowd for silence. He speaks
 * in Hebrew, and the crowd quiets. A man who persecuted believers tells them
 * who he is: "I am verily a man which am a Jew, born in Tarsus." His testimony
 * unfolds in three layers: who he was (the zealous persecutor), who he met
 * (Jesus on the Damascus road), and who he was sent to (the Gentiles). The
 * crowd is silent through it all—until he speaks that word. Gentiles. Then
 * the mob erupts. "Away with such a fellow from the earth." But the Roman
 * centurion steps in. Paul is a Roman citizen, free born. The scourging is
 * stopped. Paul&apos;s citizenship saves his body; his apostleship is his
 * true claim.
 */
export const ACTS_22: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 22,

  estimatedMinutes: { beginner: 8, intermediate: 13, deep: 17 },
  intros: [
    'Paul is surrounded by a mob. He has been dragged into the temple courtyard, accused by Jews from Asia of bringing a Gentile into the holy place. The crowd is screaming for his death. A Roman officer binds him with chains. In that moment—bound, surrounded, moments from death—Paul asks permission to speak. The officer is surprised. But he grants it. Paul stands on the steps, raises his hand for silence, and begins to speak in Hebrew.',

    'The crowd hushes. There is something about hearing your own language, spoken with authority, that commands attention. And what Paul tells them is his own story: a man who once hunted believers, who encountered the risen Jesus, who was transformed. But the testimony is not simply personal. It is political. It is theological. It cuts straight to the question that is tearing the early church apart: Are the Gentiles in? When Paul speaks that word—"the Gentiles"—the crowd, which has been listening to a fellow Jew tell his own conversion story, erupts. They have heard the answer, and they hate it.',

    'What happens next reveals something true about power, citizenship, and protection. A Roman scourging is about to begin. It could kill him. But Paul stops the centurion with a single sentence: "I was free born." His citizenship—his legal status—stops the violence instantly. In this chapter, Paul&apos;s body is saved by Roman law. His apostleship is saved by Christ&apos;s call. And the reader is invited to ask: Which authority runs deeper?',
  ],

  opener: {
    matchTitle: /paul|damascus|conversion/i,
    caption: 'Paul Speaks on the Temple Stairs',
  },

  sections: [
    /* ─── Acts 22:1–3 — Hebrew Silence ───────────────────────────────────── */
    {
      ref: 'Acts 22:1–3',
      title: 'Hebrew Silences the Crowd',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(
              1,
              hy('Men, brethren, and fathers, hear ye my defence which I make now unto you', 'acts22-apologia'),
              t('.'),
            ),
            verse(
              2,
              t('(And when they heard that he spake in the '),
              hg('Hebrew tongue', 'acts22-hebrew-tongue'),
              t(', they kept the more silence: and he saith,)'),
            ),
            verse(
              3,
              t('I am verily a man which am a '),
              hg('Jew, born in Tarsus', 'acts22-tarsus'),
              t(', a city in Cilicia, yet brought up in this city at the feet of Gamaliel, and '),
              hy('taught according to the perfect manner of the law of the fathers', 'acts22-gamaliel'),
              t(', and was zealous toward God, as ye all are this day.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'acts22-apologia',
          title: 'Apologia — Defence',
          script: 'ἀπολογία',
          translit: '<strong>apologia</strong> · a speech in defence; a reasoned response',
          description:
            'Paul is not making excuses. He is offering a defence—a reasoned, structured account of who he is and why he is not what the mob believes him to be. This word runs through Paul&apos;s life. He will give his apologia before kings and governors and before the very throne of God.',
        },
        {
          kind: 'commentary',
          id: 'acts22-hebrew-tongue',
          html:
            'The crowd has been screaming in Greek, the lingua franca of the Roman empire. Paul speaks in Hebrew—the language of their ancestors, the language of their law, the language of their identity. It is a rhetorical move, yes, but also something more: a claim of belonging. <em>I am one of you. I speak your language. I know where you come from.</em> The mob quiets. They listen.',
        },
        {
          kind: 'commentary',
          id: 'acts22-tarsus',
          html:
            'Tarsus was no backwater. It was a Hellenistic city of learning and commerce[res:bibleodyssey-tarsus]—yet Paul identifies himself first as a Jew. His birthplace gives him standing among the Gentiles; his identity as a Jew gives him standing before this crowd. He is not claiming to be more Jewish than he is, and he is not hiding his Gentile connections. He is simply telling the truth: this is who I am.',
        },
        {
          kind: 'greek',
          id: 'acts22-gamaliel',
          title: 'Anatrephō — Brought Up',
          script: 'ἀνατρέφω',
          translit: '<strong>anatreph&ō;</strong> · to bring up; to nurture; to train from childhood',
          description:
            'Paul was trained—shaped, nurtured, formed—at the feet of Gamaliel, one of the greatest rabbinical teachers of the age. This was not casual instruction. This was the deliberate cultivation of a mind destined for leadership in Israel.',
        },
        {
          kind: 'carry',
          html:
            'Paul does not begin his defence by attacking his accusers. He begins by finding common ground. He speaks in their language. He names their heroes—Gamaliel. He claims the same zeal they claim. Wherever you need to be heard by people who think you are wrong, the first task is not to prove them wrong. The first task is to show you understand where they come from. That takes humility and knowledge both.',
        },
        {
          kind: 'reflection',
          id: 'acts22-silence-reflect',
          prompt:
            'When have you had to ask someone to truly listen to you? What did you have to do to be heard?',
        },
        {
          kind: 'artwork',
          matchTitle: /vivian|codex/i,
          caption: 'Acts 22:1–3 · Hebrew Silences the Crowd',
        },

      ],
    },

    /* ─── Acts 22:4–11 — The Persecutor ─────────────────────────────────── */
    {
      ref: 'Acts 22:4–11',
      title: 'The Persecutor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(
              4,
              t('And I '),
              hg('persecuted this way unto the death', 'acts22-dioko'),
              t(', binding and delivering into prisons both men and women.'),
            ),
            verse(
              5,
              t('As also the high priest doth bear me witness, and all the estate of the elders: from whom also I '),
              hg('received letters unto the brethren', 'acts22-authority'),
              t(', and went to Damascus to bring them which were there bound unto Jerusalem, for to be punished.'),
            ),
            verse(
              6,
              t('And it came to pass, that, as I made my journey, and was come nigh unto Damascus about noon, suddenly there shone from heaven '),
              hp('a great light round about me', 'acts22-light'),
              t('.'),
            ),
            verse(
              7,
              t('And I fell unto the ground, and heard a voice saying unto me, Saul, Saul, '),
              hp('why persecutest thou me?', 'acts22-christ-persecutes'),
              t(''),
            ),
            verse(
              8,
              t('And I answered, Who art thou, Lord? And he said unto me, I am Jesus of Nazareth, whom thou persecutest.'),
            ),
            verse(
              9,
              t('And they that were with me saw indeed the light, and were afraid; but they heard not the voice of him that spake to me.'),
            ),
            verse(
              10,
              t('And I said, What shall I do, Lord? And the Lord said unto me, Arise, and go into Damascus; and there it shall be told thee of all things which are appointed for thee to do.'),
            ),
            verse(
              11,
              t('And when I could not see for the glory of the light, being led by the hand of them that were with me, I came into Damascus.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts22-dioko',
          html:
            'Paul uses the word <em>diok&ō;</em>—to hunt, to pursue, to chase down. He is not speaking in abstractions. He is confessing to violence, to organized persecution. He hunted believers. He bound them. This is his own testimony before the crowd who wants him dead. There is a fearlessness in this confession: <em>I did what you accuse me of. And I was absolutely, completely wrong.</em>',
        },
        {
          kind: 'commentary',
          id: 'acts22-authority',
          html:
            'Paul had institutional sanction. He carried letters from the high priest himself. His persecution was not rogue violence. It was official. It was approved. He was operating within the legal and religious structures of Israel. And yet he is standing before this crowd—the heirs of that authority—and confessing that his entire cause was evil. The ground has shifted beneath everything they thought was solid.',
        },
        {
          kind: 'commentary',
          id: 'acts22-light',
          html:
            'Light. The same word Jesus used in Acts 9: "more bright than the sun."[res:intertextual-damascus-road] Paul retells it here, and the crowd hears the echo of resurrection power. Not a vision. Not a dream. A light that knocked him off his horse, that blinded him, that could not be explained away. The barrier between heaven and earth opened, and Paul was struck down by it.',
        },
        {
          kind: 'christ',
          id: 'acts22-christ-persecutes',
          title: 'Christ Connection — Christ Identifies with His Body',
          html:
            'Saul hears Jesus ask, "Why persecutest thou me?" The risen Christ suffers when His church suffers. "Whether one member suffer, all the members suffer with it; or one member be honoured, all the members rejoice with it" (1 Cor. 12:26). For Paul, this moment establishes the mystical union between Christ and His body. You cannot touch the church without touching Him. To harm His people is to harm Him. This identification is not sentimental; it is cosmic.',
        },
        {
          kind: 'carry',
          html:
            'Paul had absolute certainty. He had authority. He had approval from the religious establishment. He was zealous. And he was hunting down innocent people. The fact that he later knew this—that he changed—does not erase what he did. It means something deeper: if the resurrection of Jesus is real, then repentance is possible. No one is too far gone. No sin is too great. The light that knocked Saul down is still knocking down those who are walking the wrong direction.',
        },
        {
          kind: 'reflection',
          id: 'acts22-persecutor-reflect',
          prompt:
            'Where in your own life have you been certain you were right and later discovered you were wrong? What changed you?',
        },
      ],
    },

    /* ─── Acts 22:12–21 — Ananias and the Witness ──────────────────────── */
    {
      ref: 'Acts 22:12–21',
      title: 'Ananias and the Witness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(
              12,
              t('And one Ananias, a devout man according to the law, having a good report of all the Jews which dwelt there,'),
            ),
            verse(
              13,
              t('Came unto me, and stood, and said unto me, Brother Saul, receive thy sight. And the same hour I looked up upon him.'),
            ),
            verse(
              14,
              t('And he said, The God of our fathers hath chosen thee, that thou shouldest '),
              hy('know his will, and see that Just One, and shouldest hear the voice of his mouth', 'acts22-witness-purpose'),
              t('.'),
            ),
            verse(
              15,
              t('For thou shalt be his '),
              hg('witness unto all men of what thou hast seen and heard', 'acts22-martys'),
              t('.'),
            ),
            verse(
              16,
              t('And now why tarriest thou? arise, and '),
              hg('be baptized, and wash away thy sins, calling on the name of the Lord', 'acts22-baptism'),
              t('.'),
            ),
            verse(
              17,
              t('And it came to pass, that, when I was come again to Jerusalem, even as I prayed in the temple, I was in a trance;'),
            ),
            verse(
              18,
              t('And saw him saying unto me, Make haste, and get thee quickly out of Jerusalem: for they will not receive thy testimony concerning me.'),
            ),
            verse(
              19,
              t('And I said, Lord, they know that I imprisoned and beat in every synagogue them that believed on thee:'),
            ),
            verse(
              20,
              t('And when the blood of thy martyr Stephen was shed, I also was standing by, and consenting unto his death, and kept the raiment of them that slew him.'),
            ),
            verse(
              21,
              t('And he said unto me, Depart: for I will send thee far hence unto the '),
              hp('Gentiles', 'acts22-gentiles'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts22-witness-purpose',
          html:
            'Ananias speaks as if Saul&apos;s blindness was itself a form of sight—a blindness that is about to yield to a vision more true than anything his eyes had ever seen. "Thou shalt know his will"—not through study now, but through encounter. Not through zeal, but through obedience. The God of Abraham, Isaac, and Jacob has chosen this persecutor.',
        },
        {
          kind: 'greek',
          id: 'acts22-martys',
          title: 'Martys — Witness',
          script: 'μάρτυς',
          translit: '<strong>martys</strong> · a witness; one who testifies to what he has seen',
          description:
            'The word "martyr" comes from this root. A witness to Christ is willing to give everything—eventually, their blood—to testify to what they have seen. Paul&apos;s entire apostolic calling is rooted in being a witness: "I am Jesus… and I am sending thee."',
        },
        {
          kind: 'commentary',
          id: 'acts22-baptism',
          html:
            'Baptism is not delayed. There is no catechism, no weeks of instruction, no probationary period. Saul rises from his blindness and is baptized immediately. The washing away of sins is connected not to a sacramental formula but to "calling on the name of the Lord." He enters the water as a man named Saul the persecutor. He comes up as a man named Paul the apostle. His sins are washed away not by the water itself but by what the water signifies: his total surrender to the One whose name he is calling upon.',
        },
        {
          kind: 'carry',
          html:
            'You do not have to understand your entire calling before you obey your next step. Saul did not. Ananias did not. You are asked to respond to what you can see right now—the light that has struck you, the word you have heard, the baptism you are invited into. The full purpose unfolds as you step forward. Trust the next step more than you trust your need to see the whole path.',
        },
        {
          kind: 'reflection',
          id: 'acts22-ananias-reflect',
          prompt:
            'What is God inviting you to do right now, even if you do not yet understand the full purpose?',
        },
      ],
    },

    /* ─── Acts 22:17–21 — The Temple Vision ───────────────────────────────── */
    {
      ref: 'Acts 22:17–21',
      title: 'The Temple Vision: "Far Hence unto the Gentiles"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(
              17,
              t('And it came to pass, that, when I was come again to Jerusalem, even as I '),
              hg('prayed in the temple', 'acts22-temple-prayer'),
              t(', I was in a trance;'),
            ),
            verse(
              18,
              t('And saw him saying unto me, Make haste, and get thee quickly out of Jerusalem: for they will not receive thy testimony concerning me.'),
            ),
            verse(
              19,
              t('And I said, Lord, they know that I imprisoned and beat in every synagogue them that believed on thee:'),
            ),
            verse(
              20,
              t('And when the blood of thy martyr Stephen was shed, I also was standing by, and consenting unto his death, and kept the raiment of them that slew him.'),
            ),
            verse(
              21,
              t('And he said unto me, Depart: for I will send thee far hence unto the Gentiles.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts22-temple-prayer',
          html:
            'Paul is praying in the temple—the very place where hours before he stood bound, surrounded by a mob. He is in a trance, and the Lord speaks. What the crowd below is hearing, Paul cannot hear. What Paul sees, the crowd cannot see. He is caught between two worlds: the physical danger surrounding him and the spiritual reality confronting him in the trance.',
        },
        {
          kind: 'commentary',
          id: 'acts22-gentiles-word',
          html:
            'Paul objects. "Lord, they know what I did to believers. My past proves I belong here." But the Lord does not argue about Paul&apos;s past. The Lord sends him away. The word is simple: "Depart." And the destination: "the Gentiles." This is not a suggestion. This is an apostolic commission.',
        },
        {
          kind: 'greek',
          id: 'acts22-politeia',
          title: 'Politeia — Citizenship; Commonwealth',
          script: 'πολιτεία',
          translit: '<strong>politeia</strong> · citizenship; the rights and status of a citizen',
          description:
            'Later in this chapter, Paul will claim Roman citizenship. But his deeper citizenship belongs to a kingdom not of this world. His political status as a Roman matters; his apostolic status matters more. The Gentiles are to be his mission because they are his calling, not because they are his ethnic inheritance.',
        },
        {
          kind: 'christ',
          id: 'acts22-gentiles',
          title: 'Christ Connection — The Great Commission Made Personal',
          html:
            'Jesus told His disciples, "Go ye therefore, and teach all nations… teaching them to observe all things whatsoever I have commanded you" (Matt. 28:19–20). That Great Commission—spoken to all believers—is now spoken directly to Paul. His unique role is to be an apostle to the Gentiles. He is one man carrying forward the command of the risen Christ to all nations. The universality of the Gospel, the inclusion of Gentiles as full members of God&apos;s people—this is not Paul&apos;s invention. This is Christ&apos;s mandate.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes God sends you away from the place where you came to faith. Away from your spiritual home, away from the people who know your story, away from the comfort of familiarity. He sends you because the Gospel is not meant for your circle. It is meant for the people who have never heard. The hardest part of obedience is sometimes leaving what you love for what you have been sent to serve.',
        },
        {
          kind: 'reflection',
          id: 'acts22-gentiles-reflect',
          prompt:
            'Has God ever called you away from where you were comfortable? What made you go, and what did you find?',
        },
        {
          kind: 'artwork',
          matchTitle: /paul.*damascus|conversion/i,
          caption: 'Acts 22:17–21 · The Temple Vision',
        },

      ],
    },

    /* ─── Acts 22:22–29 — The Riot and the Scourging ─────────────────────── */
    {
      ref: 'Acts 22:22–29',
      title: 'The Crowd Erupts; Citizenship Stops the Blow',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(
              22,
              t('And they gave him audience unto this word, and then '),
              hg('lifted up their voices, and said, Away with such a fellow from the earth', 'acts22-voices'),
              t(': for it is not fit that he should live.'),
            ),
            verse(
              23,
              t('And as they cried out, and cast off their clothes, and threw dust into the air,'),
            ),
            verse(
              24,
              t('The chief captain commanded him to be brought into the castle, and bade that he should be examined by scourging; that he might know wherefore they cried so against him.'),
            ),
            verse(
              25,
              t('And as they bound him with thongs, Paul said unto the centurion that stood by, Is it lawful for you to scourge a man that is a Roman, and uncondemned?'),
            ),
            verse(
              26,
              t('When the centurion heard that, he went and told the chief captain, saying, Take heed what thou doest: for this man is a '),
              hy('Roman', 'acts22-politēs'),
              t('.'),
            ),
            verse(
              27,
              t('Then the chief captain came, and said unto him, Tell me, art thou a Roman? He said, Yea.'),
            ),
            verse(
              28,
              t('And the chief captain answered, With a great sum obtained I this freedom. And Paul said, But '),
              hg('I was free born', 'acts22-freeborn'),
              t('.'),
            ),
            verse(
              29,
              t('Then straightway they departed from him which should have examined him: and the chief captain also was afraid, when he knew that he was a Roman, and because he had bound him.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts22-voices',
          html:
            'The word "Gentiles" is the breaking point. Paul has told them his entire story, and they have listened. But when he reveals that he was sent to the Gentiles—that the gospel is not for Jews alone—the crowd loses all restraint. They cry out for his death. They cast off their clothes as if preparing to stone him. The narrative of a Jewish persecutor converted makes sense. But a Gentile mission? That is blasphemy.',
        },
        {
          kind: 'commentary',
          id: 'acts22-scourging',
          html:
            'The Roman commander does not fully understand what the uproar is about. In his mind, a prisoner provoking a riot is guilty of something. The solution is interrogation by scourging—the standard Roman practice to extract information[res:theoi-roman-law]. But Roman law protected Roman citizens from this treatment. Paul is about to be whipped when he speaks.',
        },
        {
          kind: 'greek',
          id: 'acts22-politēs',
          title: 'Politēs — Citizen',
          script: 'πολίτης',
          translit: '<strong>politēs</strong> · a citizen; one who possesses legal citizenship',
          description:
            'Roman citizenship was not a birthright for most people. It was purchased, inherited, or granted[res:bibleodyssey-roman-citizen]. The value of Paul&apos;s confession—"I was free born"—is that he did not buy it; he inherited it from his father. This legal status, which seemed irrelevant moments before, is now the barrier between him and the scourging.',
        },
        {
          kind: 'commentary',
          id: 'acts22-freeborn',
          html:
            'The chief captain has purchased his citizenship. It cost him money. Paul says, "I was free born"—his father was already a citizen, and Paul inherited it from birth. This is not arrogance. It is fact. And it is the fact that stops the scourging. Roman law is honored in this moment, and Paul&apos;s body is preserved.',
        },
        {
          kind: 'carry',
          html:
            'Paul uses every legitimate means available to him—his Jewish heritage, his Roman citizenship, his relationship with the risen Christ. He does not disdain the tools at hand. But he also does not trust in them finally. His true citizenship is in the kingdom of God. The earthly protections matter; they matter because God created earthly authority. But they are not ultimate. Use what you have been given—birthright, education, legal standing, spiritual gifting—wisely. But do not confuse protection with salvation.',
        },
        {
          kind: 'reflection',
          id: 'acts22-citizenship-reflect',
          prompt:
            'What earthly protections or advantages do you have? How do they matter, and how do they not matter?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The God of our fathers hath chosen thee, that thou shouldest know his will, and see that Just One, and shouldest hear the voice of his mouth. For thou shalt be his witness unto all men of what thou hast seen and heard.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 22 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-tarsus',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Tarsus',
      url: 'https://www.bibleodyssey.org/dictionary/tarsus/',
      description: 'Open-access SBL entry on Tarsus, Paul&apos;s birthplace — a major Hellenistic city in Cilicia known for learning and trade.',
    },
    {
      id: 'bibleodyssey-roman-citizen',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Roman Citizenship',
      url: 'https://www.bibleodyssey.org/dictionary/roman-citizenship/',
      description: 'Overview of civis Romanus sum status and how Roman law protected citizens from scourging and other abuses.',
    },
    {
      id: 'intertextual-damascus-road',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Damascus Road Retold',
      url: 'https://intertextual.bible/text/acts-9/acts-22',
      description: 'Comparison of Paul&apos;s Damascus road encounter as recounted in Acts 9 and Acts 22, showing textual parallels and variations.',
    },
    {
      id: 'theoi-roman-law',
      kind: 'archive',
      source: 'Theoi Classical Texts',
      label: 'Roman Law: Scourging &amp; Citizenship',
      url: 'https://www.theoi.com/Text/',
      description: 'Primary sources on Roman legal protections for citizens and prohibitions against scourging the free-born.',
    },
  ],

};
