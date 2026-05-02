import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Acts 28 — The Gospel Reaches Rome, Unhindered
 *
 * Paul and the prisoners arrive at Malta, where the islanders show them kindness.
 * A viper fastens on Paul's hand from the heat, but he shakes it off unharmed—the
 * barbarians expect him to die, then wonder if he is a god. Paul heals Publius's
 * father and many others. Three months later, they sail on the Castor and Pollux,
 * stop at Puteoli, and journey toward Rome. Brethren meet Paul at the Forum of
 * Appius and the Three Taverns; "Paul thanked God, and took courage." In Rome,
 * Paul dwells under guard in his own hired house. He calls the chief of the Jews
 * together, testifies to "the hope of Israel," reasons from Isaiah 6 about the
 * hardening of the people, and declares "the salvation of God is sent unto the
 * Gentiles, and that they will hear it." The chapter closes with Paul dwelling
 * two whole years in his hired house, "preaching the kingdom of God, and teaching
 * those things which concern the Lord Jesus Christ, with all confidence, no man
 * forbidding him." The book ends, not with Paul's release, but with an open door—
 * the gospel running out to the ends of the earth, the word of God unbound.
 */
export const ACTS_28: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 28,

  intros: [
    'Acts 28 does not end the story of the gospel. It ends with the story still running. Paul arrives at Rome, not in triumph, but in chains. He is under guard in a hired house. Yet from that rented room, with a soldier chained to his wrist, he calls together the chief of the Jews and reasons with them about Jesus, about the kingdom, about the hardening of the people spoken of by Isaiah six hundred years before. Some believe, some do not. And Luke closes the book not with Paul&apos;s martyrdom, not with his release, but with him still preaching, still teaching, still unhindered.',
    'This is Luke&apos;s purpose. He wants you to see that the gospel cannot be imprisoned. Chains cannot bind it. Shipwrecks cannot stop it. Opposition cannot silence it. In Acts 1, Jesus promises the disciples: "Ye shall receive power… and ye shall be witnesses unto me… unto the uttermost part of the earth." By Acts 28, that promise is being lived out. The word from Jerusalem has reached Rome, the center of the known world. And it is still spreading, still speaking, still calling people into the kingdom of the God who never loses.',
    'Watch, in this final chapter, how Luke shows you the unhindered gospel. Watch the viper on Paul&apos;s hand—and the reversal of Eden where the serpent no longer has power. Watch a centurion&apos;s father healed, watch healings multiply, watch the Gentiles see the kingdom at work. Watch Paul stand before the Romans and the Jews and say: this is why I am bound. This is the hope of Israel. This is what the prophets saw. And the book ends with the door still open, the apostle still speaking, the power still running out.',
  ],

  opener: {
    matchTitle: /rome|paul|shipwreck/i,
    caption: 'Acts 28 · The Gospel at the Center of the World',
  },

  sections: [
    /* ─── Acts 28:1–6 — Malta & the Kindly Barbarians ──────────────────────── */
    {
      ref: 'Acts 28:1–6',
      title: 'The Kindly Barbarians',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            verse(
              1,
              t('And when they were escaped, then they knew that the island was called '),
              hg('Malta', 'acts28-malta'),
              t('.'),
            ),
            verse(
              2,
              t('And the '),
              hy('barbarians shewed us no little kindness', 'acts28-barbaros'),
              t(': for they kindled a fire, and received us every one, because of the present rain, and because of the cold.'),
            ),
            verse(
              3,
              t('And when Paul had gathered a bundle of sticks, and laid them on the fire, there came a '),
              hy('viper out of the heat', 'acts28-echidna'),
              t(', and fastened on his hand.'),
            ),
            verse(
              4,
              t('And when the barbarians saw the venomous beast hang on his hand, they said among themselves, No doubt this man is a murderer, whom, though he hath escaped the sea, yet vengeance suffereth not to live.'),
            ),
            verse(
              5,
              t('And he '),
              hp('shook off the beast into the fire', 'acts28-christ-serpent'),
              t(', and felt no harm.'),
            ),
            verse(
              6,
              t('Howbeit they looked when he should have swollen, or fallen down dead suddenly: but after they had looked a great while, and saw no harm come to him, they changed their minds, and said that he was a god.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts28-malta',
          html:
            'Malta is not Jerusalem. It is not Antioch or Ephesus or any city where Paul has churches waiting for him. It is an island south of Sicily, inhabited by people Luke calls &ldquo;barbarians&rdquo;—literally, non-Greek speakers, outsiders to the covenant. And yet these pagans, these barbarians, show Paul &ldquo;no little kindness.&rdquo; They kindle a fire against the cold. They receive him. The gospel has a way of breaking through the thickest walls, opening the hardest hearts.',
        },
        {
          kind: 'greek',
          id: 'acts28-barbaros',
          title: 'Barbaros — Barbarian; Non-Greek Speaker',
          script: 'βάρβαρος',
          translit: '<strong>barbaros</strong> · foreigner; non-Greek speaker; outsider',
          description:
            'In the eyes of the Roman and Greek world, a &ldquo;barbarian&rdquo; was anyone not educated in Greek culture—which meant nearly everyone outside the empire&apos;s elite. Luke uses the word not to demean but to mark them as outside the covenant people of Israel. Yet these very outsiders become the first to show hospitality to God&apos;s apostle.',
        },
        {
          kind: 'greek',
          id: 'acts28-echidna',
          title: 'Echidna — Viper',
          script: 'ἔχιδνα',
          translit: '<strong>echidna</strong> · viper; snake; asp',
          description:
            'Jesus used this word of the Pharisees: "O generation of vipers, how can ye, being evil, speak good things?" (Matt. 12:34). The viper is the instrument of death, the curse-bringer. Paul shaking it from his hand unharmed is a sign that the old curse—the serpent&apos;s power from Eden—no longer has dominion.',
        },
        {
          kind: 'commentary',
          id: 'acts28-viper',
          html:
            'The viper fastens on Paul&apos;s hand. The Greek word is <em>echidna</em>, the very word Jesus used when He called the Pharisees a &ldquo;generation of vipers&rdquo; (Matt. 12:34). And yet Paul shakes it off. No swelling. No death. The barbarians watch, stunned—what kind of man survives a deadly bite? First they think him a murderer; then a god. Neither is true. He is an apostle, and the power of Christ runs through him.',
        },
        {
          kind: 'christ',
          id: 'acts28-christ-serpent',
          title: 'Christ Connection — Dominion Over the Serpent',
          html:
            'Jesus promised His followers: &ldquo;They shall take up serpents; and if they drink any deadly thing, it shall not hurt them&rdquo; (Mark 16:18). In the garden, the serpent had dominion over Adam and Eve, and death followed. Here at Malta, Paul shakes the viper from his hand unhurt—a small, quiet reversal of Eden, a sign that in Christ, the serpent&apos;s power is broken. The death the viper brought is no longer final. The life Paul carries cannot be interrupted by a beast.',
        },
        {
          kind: 'carry',
          html:
            'You may find yourself in a place where you feel like an outsider, or where you&apos;ve been shipwrecked by circumstance. The viper you feared may strike when you least expect it. But the promise holds: Christ&apos;s power flows through you. Not to make you invulnerable to hardship, but to make you indestructible in purpose. Shake off what was meant to stop you. You are still here. You still have work to do.',
        },
        {
          kind: 'reflection',
          id: 'acts28-kindness',
          prompt:
            'When has God shown you unexpected kindness through people you thought were outside His reach? What does that tell you about how He works?',
        },
      ],
    },

    /* ─── Acts 28:7–10 — Healing on Malta ─────────────────────────────────── */
    {
      ref: 'Acts 28:7–10',
      title: 'Healings on the Island',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            verse(
              7,
              t('In the same quarters were possessions of the chief man of the island, whose name was Publius; who received us, and lodged us three days courteously.'),
            ),
            verse(
              8,
              t('And it came to pass, that the father of Publius lay sick of a '),
              hg('fever and of a bloody flux', 'acts28-flux'),
              t(': to whom Paul entered in, and prayed, and '),
              hg('laid his hands on him, and healed him', 'acts28-laying-hands'),
              t('.'),
            ),
            verse(
              9,
              t('So when this was done, others also, which had diseases in the island, came, and were healed:'),
            ),
            verse(
              10,
              t('Who also honoured us with many honours; and when we departed, they laded us with such things as were necessary.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts28-flux',
          html:
            'Fever and bloody flux—a brutal, wasting sickness. Not a minor ailment. The chief man&apos;s father was dying. And Paul does what he has done from the beginning of Acts: he enters, prays, lays on hands, and the man is healed. By this point in Acts, healing is so woven into the apostolic life that it needs no fanfare. It is simply what happens when the Spirit moves through those who believe.',
        },
        {
          kind: 'commentary',
          id: 'acts28-laying-hands',
          html:
            'The laying on of hands is not a magic gesture. It is a sign of identification, a moment where the apostle stands with the sick person and brings the power of Christ to bear on the broken body. Throughout Acts, this gesture marks the moment the Spirit breaks through—Philip lays hands, Peter lays hands, Paul lays hands. And what was broken begins to heal.',
        },
        {
          kind: 'carry',
          html:
            'Healing in the New Testament is never just for the hero or the famous. It comes to Publius&apos;s father, an unknown islander on Malta. It spreads through the whole island to &ldquo;others also, which had diseases.&rdquo; Whatever wound you carry—physical, emotional, spiritual—it is not too small, not too secret, not too distant from God&apos;s notice. He sees you as clearly as He saw Publius&apos;s father. Ask, and the door opens.',
        },
        {
          kind: 'reflection',
          id: 'acts28-healing',
          prompt:
            'What sickness or brokenness have you been carrying, thinking it was too small or too shameful to bring to God?',
        },
      ],
    },

    /* ─── Acts 28:11–14 — The Castor and Pollux, the Forum of Appius ────────── */
    {
      ref: 'Acts 28:11–14',
      title: 'The Journey to Rome',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            verse(
              11,
              t('And after three months we departed in a ship of Alexandria, which had wintered in the isle, whose sign was '),
              hg('Castor and Pollux', 'acts28-castor-pollux'),
              t('.'),
            ),
            verse(
              12,
              t('And landing at Syracuse, we tarried there three days.'),
            ),
            verse(
              13,
              t('And from thence we fetched a compass, and came to Rhegium: and after one day the south wind blew, and we came the next day to Puteoli:'),
            ),
            verse(
              14,
              t('Where we found brethren, and were desired to tarry with them seven days: and so we went toward Rome.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts28-three-months',
          html:
            'Three months on Malta. Not a brief stop, but a whole season. Paul heals, testifies, plants faith in soil far from Jerusalem. And then—the journey continues. The ship is named for Castor and Pollux, the divine twins of pagan mythology. Even the pagan world&apos;s symbols carry Paul toward his destiny.',
        },
        {
          kind: 'greek',
          id: 'acts28-castor-pollux',
          title: 'Dioskouroi — Castor and Pollux; The Divine Twins',
          script: 'Διόσκουροι',
          translit: '<strong>dioskouroi</strong> · sons of Zeus; Castor and Pollux; the Gemini twins; sailors&apos; protectors',
          description:
            'In Greek and Roman religion, Castor and Pollux were divine protectors of sailors and ships. Luke names the ship deliberately—not to endorse the pagan mythology, but to show that even under pagan auspices, even with pagan names, the true God is steering the course.',
        },
        {
          kind: 'commentary',
          id: 'acts28-puteoli',
          html:
            'They arrive at Puteoli, the great port city of southern Italy. And here, unexpectedly, there are brethren—Christians already in Italy, already meeting together, already waiting to welcome Paul. The gospel has run ahead of him. The kingdom is already spreading in the heart of the empire.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the journey to your calling is longer than you expect. Three months on an island, then a ship, then delays—but at every stop, you discover that God has already been at work. The people you need are waiting. The doors you need are already opening. Your part is not to rush. It is to move faithfully through each season, knowing that behind you is a trail of changed lives, and ahead of you is a company of believers preparing to welcome you home.',
        },
        {
          kind: 'reflection',
          id: 'acts28-journey',
          prompt:
            'Where in your own journey are you being asked to trust the slower pace? Who might be waiting ahead for you that you don&apos;t yet know about?',
        },
      ],
    },

    /* ─── Acts 28:15–16 — "Paul thanked God, and took courage" ──────────────── */
    {
      ref: 'Acts 28:15–16',
      title: '&ldquo;Paul thanked God, and took courage&rdquo;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            verse(
              15,
              t('And from thence, when the brethren heard of us, they came to meet us as far as the Forum of Appius, and the Three Taverns: whom when Paul saw, he '),
              hp('thanked God, and took courage', 'acts28-parakaleō'),
              t('.'),
            ),
            verse(
              16,
              t('And when we came to Rome, the centurion delivered the prisoners to the captain of the guard: but Paul was suffered to dwell by himself with a soldier that kept him.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts28-appius',
          html:
            'The Forum of Appius and the Three Taverns are stops on the Appian Way, the great road leading into Rome. And at these two places, the brethren come out to meet Paul. They have traveled, gathered, waited. They know who he is. They know his letters. They come to welcome an apostle. When Paul sees them, he thanks God and takes courage.',
        },
        {
          kind: 'greek',
          id: 'acts28-parakaleō',
          title: 'Parakaleō — To Encourage; To Comfort; To Strengthen',
          script: 'παρακαλέω',
          translit: '<strong>parakaleō</strong> · to encourage; to strengthen; to comfort; to call to one&apos;s side',
          description:
            'The verb literally means &ldquo;to call alongside.&rdquo; When Paul sees the brethren, they are alongside him, calling him forward. They do not let him enter Rome alone. The Comforter is the Spirit (parakletos), but here, the believers themselves become the instrument of encouragement.',
        },
        {
          kind: 'commentary',
          id: 'acts28-rome-arrival',
          html:
            'He arrives in Rome as a prisoner, under guard, chained to a soldier. Yet he is permitted to dwell &ldquo;by himself&rdquo; in a hired house. It is a strange imprisonment—neither freedom nor dungeon, but a kind of house arrest that will allow him to teach. Luke is showing you that even the machinery of empire has been bent to serve God&apos;s purpose. Paul will spend two years in that house, and from that house, the gospel will go out to the heart of the world.',
        },
        {
          kind: 'carry',
          html:
            'You do not have to face hard things alone. The church is meant to be what the brethren were to Paul—those who come out to meet you, who call you alongside, who strengthen you for what lies ahead. And when you stand in a place you thought would crush you, and you look around and see them there, something shifts. Courage rises. The burden lightens. You are not one prisoner against an empire. You are one member of a body that spans the world.',
        },
        {
          kind: 'reflection',
          id: 'acts28-courage',
          prompt:
            'When have you felt afraid to enter a hard place, and then discovered people waiting to meet you there? What did their presence do to your courage?',
        },
      ],
    },

    /* ─── Acts 28:17–22 — Paul Calls the Chief of the Jews ──────────────────── */
    {
      ref: 'Acts 28:17–22',
      title: 'Paul Calls the Chief of the Jews',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            verse(
              17,
              t('And it came to pass, that after three days Paul called the chief of the Jews together: and when they were come together, he said unto them, Men and brethren, though I have committed nothing against the people, or '),
              hg('customs of our fathers', 'acts28-customs'),
              t(', yet was I delivered prisoner from Jerusalem into the hands of the Romans.'),
            ),
            verse(
              18,
              t('Who, when they had examined me, would have let me go, because there was no cause of death in me.'),
            ),
            verse(
              19,
              t('But when the Jews spake against it, I was constrained to appeal unto Caesar; not that I had ought to accuse my nation of.'),
            ),
            verse(
              20,
              t('For '),
              hg('this cause therefore have I called for you, to see you, and to speak with you', 'acts28-hope-israel'),
              t(': because that '),
              hp('for the hope of Israel I am bound with this chain', 'acts28-christ-hope'),
              t('.'),
            ),
            verse(
              21,
              t('And they said unto him, We neither received letters out of Judaea concerning thee, neither any of the brethren that came shewed or spake any harm of thee.'),
            ),
            verse(
              22,
              t('But we desire to hear of thee what thou thinkest: for as concerning this sect, we know that every where it is spoken against.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts28-customs',
          html:
            'Paul&apos;s opening is careful. He affirms the customs of the fathers, the traditions of the people. He is not a revolutionary bent on destroying Judaism. He is a Jew defending the deepest hopes of Judaism itself. His message is not &ldquo;abandon your fathers.&rdquo; His message is &ldquo;the hope your fathers waited for has come.&rdquo;',
        },
        {
          kind: 'commentary',
          id: 'acts28-hope-israel',
          html:
            'Paul wants them to see him. To hear him. Not to condemn him, but to understand why he stands before them in chains. He is a Jew speaking to Jews about the faith of Israel. There is no contempt in his voice, only the deep desire that they understand what he has understood: that Jesus is the Messiah Israel has been waiting for since the days of Abraham.',
        },
        {
          kind: 'christ',
          id: 'acts28-christ-hope',
          title: 'Christ Connection — The Hope That Binds',
          html:
            'Paul says: &ldquo;For the hope of Israel I am bound with this chain.&rdquo; The chain is not a sign of defeat. It is a sign of his faithfulness to the very hope that the prophets spoke of. Jesus promised His disciples: &ldquo;Blessed are ye, when men shall revile you, and persecute you, and shall say all manner of evil against you falsely, for my sake&rdquo; (Matt. 5:11). Paul&apos;s chains are his credential. They prove he loves the kingdom more than he loves his freedom.',
        },
        {
          kind: 'carry',
          html:
            'You do not have to prove your faith to everyone. But there are people in your life—family, old friends, people who knew you before—who deserve to hear from you why you believe what you believe. Not in anger or superiority, but with the gentleness of someone offering them a gift. When you are willing to speak, even when it&apos;s hard, you open a door they may walk through.',
        },
        {
          kind: 'reflection',
          id: 'acts28-chief',
          prompt:
            'Is there someone in your life you have been afraid to witness to, because you feared their judgment? What would courage look like in that conversation?',
        },
      ],
    },

    /* ─── Acts 28:23–27 — Isaiah 6 Quoted; "Their eyes are waxed gross" ──────── */
    {
      ref: 'Acts 28:23–27',
      title: 'The Hardening of Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            verse(
              23,
              t('And when they had appointed him a day, there came many to him into his lodging; to whom he expounded and testified the kingdom of God, persuading them concerning Jesus, both out of the law of Moses, and out of the prophets, from morning till evening.'),
            ),
            verse(
              24,
              t('And some believed the things which were spoken, and some believed not.'),
            ),
            verse(
              25,
              t('And when they agreed not among themselves, they departed, after that Paul had spoken one word, Well spake the Holy Ghost by Esaias the prophet unto your fathers,'),
            ),
            verse(
              26,
              t('Saying, Go unto this people, and say, '),
              hy('Hearing ye shall hear, and shall not understand; and seeing ye shall see, and not perceive', 'acts28-hardening'),
              t(':'),
            ),
            verse(
              27,
              t('For '),
              hy('the heart of this people is waxed gross', 'acts28-elpis'),
              t(', and their ears are dull of hearing, and their eyes have they closed; lest they should see with their eyes, and hear with their ears, and understand with their heart, and should be converted, and I should heal them.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts28-hardening',
          html:
            'Paul reasons all day. From the law. From the prophets. From the oldest texts of Israel. He shows them that Jesus is not a departure from what Moses and the prophets said—He is their fulfillment. Some believe. Some do not. And when the conversation breaks down, Paul quotes Isaiah 6, the prophet&apos;s own lament over a people who will not hear.',
        },
        {
          kind: 'greek',
          id: 'acts28-elpis',
          title: 'Elpis — Hope',
          script: 'ἐλπίς',
          translit: '<strong>elpis</strong> · hope; expectation; confident looking forward',
          description:
            'Elpis is not wishful thinking. It is confident expectation grounded in reality. Paul speaks of &ldquo;the hope of Israel&rdquo; because it is not his invention. It has been the expectation of the whole covenant people since Abraham. Jesus is the fulfillment of that hope.',
        },
        {
          kind: 'commentary',
          id: 'acts28-isaiah',
          html:
            'Isaiah 6 is a passage about a people who refuse to hear, who close their own eyes, who harden their own hearts. It is not that God refuses them; it is that they refuse Him. The tragedy is not that God&apos;s word is weak. The tragedy is that the people&apos;s resistance is so strong they have lost the capacity to perceive what is plainly true.',
        },
        {
          kind: 'carry',
          html:
            'You will not convince everyone. Some will hear and not understand. Some will see and not perceive. This is not a failure in you or in the gospel. It is the hardness of the human heart that can choose not to see even when the light is right in front of it. Your job is to speak clearly and truthfully. What people do with what they hear is between them and God.',
        },
        {
          kind: 'reflection',
          id: 'acts28-hardening',
          prompt:
            'How do you respond when someone you love refuses to see or hear truth you believe is plain? How can you stay faithful without bitterness?',
        },
      ],
    },

    /* ─── Acts 28:28–31 — "The salvation of God is sent unto the Gentiles" ───── */
    {
      ref: 'Acts 28:28–31',
      title: '&ldquo;No man forbidding him&rdquo;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            verse(
              28,
              t('Be it known therefore unto you, that '),
              hp('the salvation of God is sent unto the Gentiles', 'acts28-salvation-gentiles'),
              t(', and that they will hear it.'),
            ),
            verse(
              29,
              t('(And when he had said these words, the Jews departed, and had great reasoning among themselves.)'),
            ),
            verse(
              30,
              t('And Paul dwelt '),
              hg('two whole years in his own hired house', 'acts28-two-years'),
              t(', and received all that came in unto him,'),
            ),
            verse(
              31,
              t('Preaching the kingdom of God, and teaching those things which concern the '),
              t('Lord Jesus Christ, with all confidence, '),
              hy('no man forbidding him', 'acts28-akōlytōs'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts28-salvation-gentiles',
          html:
            'Paul has given the Jews the first hearing. They have rejected. And so the door turns outward. The salvation of God is sent unto the Gentiles. This is not spite or retaliation. It is the unfolding of what Jesus Himself said in Acts 1:8—&ldquo;ye shall be witnesses unto me… unto the uttermost part of the earth.&rdquo; Jerusalem first, then Judaea, then Samaria, then the uttermost parts. By Acts 28, that prophecy is being lived out. Paul in Rome means the gospel in the center of the world.',
        },
        {
          kind: 'commentary',
          id: 'acts28-two-years',
          html:
            'Two whole years. Not a few months, not a brief season, but a sustained span of time. For two years, from his hired house in Rome, Paul teaches, counsels, writes letters, plants faith. The pastoral letters (1 Timothy, Titus, perhaps 2 Timothy) are written during or shortly after this period. The kingdom is not advancing through spectacle now. It is advancing through patient, faithful, relational teaching.',
        },
        {
          kind: 'greek',
          id: 'acts28-akōlytōs',
          title: 'Akōlytōs — Unhindered; Unimpeded; Without Restraint',
          script: 'ἀκωλύτως',
          translit: '<strong>akōlytōs</strong> · unhindered; unimpeded; without obstruction or restraint',
          description:
            'This is the final word of Acts in the Greek text. Not &ldquo;released&rdquo; or &ldquo;vindicated&rdquo; or &ldquo;celebrated.&rdquo; Simply: unhindered. The word of God cannot be bound. The gospel flows out from Rome, unrestrained, moving toward the ends of the earth.',
        },
        {
          kind: 'christ',
          id: 'acts28-christ-kingdom',
          title: 'Christ Connection — The Kingdom Unstoppable',
          html:
            'Jesus said to Peter: &ldquo;Upon this rock I will build my church; and the gates of hell shall not prevail against it&rdquo; (Matt. 16:18). Bonds cannot bind it. Rulers cannot stop it. In Acts 1, the disciples ask Jesus if He will restore the kingdom to Israel. He answers: you don&apos;t know the times, but you will receive power to be witnesses to the ends of the earth. By Acts 28, that power is flowing out of a rented house in Rome, unhindered, unstoppable, reaching toward peoples Paul himself will never meet. The kingdom is not about territory or politics. It is about God&apos;s rule breaking into the world through the testimony of those who love Jesus more than they love their freedom.',
        },
        {
          kind: 'carry',
          html:
            'You may feel bound. Constrained. Limited by circumstance or opposition. But the truth Acts 28 burns into you is this: the gospel does not need ideal conditions to spread. It does not need freedom or platform or recognition. It spreads through one person speaking truth into another&apos;s life, with boldness and without apology. Your hired house—your ordinary job, your ordinary Wednesday, your ordinary conversation at the coffee shop—is enough. Be faithful, be clear, be bold. The kingdom takes care of the rest.',
        },
        {
          kind: 'reflection',
          id: 'acts28-unhindered',
          prompt:
            'What circumstance, what limitation, what chain have you let stop you from speaking about Jesus? What would it look like to act as if the word of God, in your mouth, cannot actually be bound?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Acts 28',
    quote:
      'Paul dwelt two whole years in his own hired house, and received all that came in unto him, preaching the kingdom of God, and teaching those things which concern the Lord Jesus Christ, with all confidence, no man forbidding him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 28 · Study Guide',
  },

  hasHebrew: false,
};
