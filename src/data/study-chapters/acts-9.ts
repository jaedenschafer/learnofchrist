import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Acts 9 — Saul's Conversion and Peter's Signs
 *
 * On the road to Damascus, a persecutor becomes an apostle. Saul, breathing out
 * threats against the disciples, encounters the risen Jesus in a blinding light.
 * "Why persecutest thou me?" the voice asks. In that moment, everything Saul has
 * believed and fought for collapses. After three days of blindness, Ananias lays
 * hands on him, scales fall from his eyes, and Saul is baptized. What follows is
 * a ministry that will shake the entire Mediterranean world. Meanwhile, Peter's
 * hands heal and restore—Aeneas rises from his bed, Tabitha returns to the widows
 * who mourn her. The gospel is spreading outward from Jerusalem, carried by those
 * who have seen the risen Jesus and been remade by Him.
 */
export const ACTS_9: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 9,

  estimatedMinutes: { beginner: 10, intermediate: 20, deep: 26 },
  intros: [
    'Saul has made it his mission to hunt down followers of Jesus. He carries letters from the high priest himself, authorizing him to bind any believer he finds and drag them to Jerusalem. But on the road to Damascus, something happens that will unravel everything. A light brighter than the sun cuts him down. A voice speaks his name. "Saul, Saul, why persecutest thou me?" It is Jesus—the One Saul has been fighting against all along. In that instant, the persecutor&apos;s entire world inverts.',
    'This chapter shows what resurrection power actually does when it meets human resistance. It does not reason with Saul or negotiate. It does not wait for him to grow tired of his old ways. It confronts him, blinds him, remakes him. Three days later, a disciple named Ananias—acting on nothing but a vision and obedience—places his hands on Saul&apos;s eyes, scales fall away, and Saul rises baptized. The man who came to Damascus as an executioner leaves as an evangelist.',
    'While Saul is being transformed in Damascus, Peter is moving through the coastal towns of Judaea, healing and restoring. His shadow heals the sick. His word raises the dead. Aeneas, paralyzed eight years, rises at the word of Jesus. Tabitha, full of good works and mourned by widows, opens her eyes at the sound of her name. The gospel does not merely change hearts—it heals bodies, restores the dead, and mends what has been broken. This is the power of the resurrection made visible.',
  ],

  opener: {
    matchTitle: /damascus|saul|conversion|road/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── Acts 9:1–2 — The Persecutor's Zeal ─────────────────────────────── */
    {
      ref: 'Acts 9:1–2',
      title: 'Breathing Out Threats',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              1,
              t('And Saul, yet '),
              hg('breathing out threatenings and slaughter against the disciples', 'acts9-breathing'),
              t(' of the Lord, went unto the high priest,'),
            ),
            verse(
              2,
              t('And desired of him letters to Damascus to the synagogues, that if he found any of this way, whether they were men or women, he might '),
              hy('bring them bound unto Jerusalem', 'acts9-dioko'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts9-breathing',
          html:
            'The image is visceral. Saul is not just angry—he is breathing out threats, exhaling them with every breath. He is consumed. The disciples of Jesus are not merely wrong to him; they are contagious, dangerous, a threat to the faith of Israel itself. His mission is to bind them, to chain them, to bring them to trial. What Saul does not know is that his very next breath will be interrupted by the One he is fighting against.',
        },
        {
          kind: 'commentary',
          id: 'acts9-authority',
          html:
            'Saul has institutional backing. He carries letters from the high priest—official authorization to arrest believers wherever he finds them. He is not a rogue vigilante. He is acting within the law, within the religious authority of Israel. His zeal is approved. His mission is sanctioned. And yet the very foundation of his righteousness is about to collapse.',
        },
        {
          kind: 'commentary',
          id: 'acts9-dioko',
          html:
            'The verb "bring them bound" comes from Greek <em>dioxō</em>, meaning to pursue, to chase, to hunt. Saul is not reluctantly enforcing a law. He is hunting. He is pursuing believers from city to city, intent on their destruction. His mission is active, aggressive, relentless.',
        },
        {
          kind: 'carry',
          html:
            'You may have built your life on convictions that feel as solid as Saul&apos;s. You may have authority, approval, a whole community affirming the direction you&apos;ve chosen. The question is not whether you are confident. The question is whether you are meeting the risen Jesus on the road. That meeting has a way of overturning everything you thought you knew.',
        },
        {
          kind: 'reflection',
          id: 'acts9-breathing-reflect',
          prompt:
            'Where might you be wrong about something you are certain you are right about? What would it take for you to see it?',
        },
      ],
    },

    /* ─── Acts 9:3–9 — The Voice from Heaven ─────────────────────────────── */
    {
      ref: 'Acts 9:3–9',
      title: 'Why Persecutest Thou Me?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              3,
              t('And as he journeyed, he came near Damascus: and suddenly there shined round about him '),
              hp('a light from heaven', 'acts9-light'),
              t(':'),
            ),
            verse(
              4,
              t('And he heard a voice saying unto him, Saul, Saul, '),
              hp('why persecutest thou me?', 'acts9-christ-identification'),
              t(''),
            ),
            verse(
              5,
              t('And he said, Who art thou, Lord? And the Lord said, I am Jesus whom thou persecutest: it is '),
              hy('hard for thee to kick against the pricks', 'acts9-kentron'),
              t('.'),
            ),
            verse(
              6,
              t('And he trembling and astonished said, Lord, what wilt thou have me to do? And the Lord said unto him, Arise, and go into the city, and it shall be told thee what thou must do.'),
            ),
            verse(
              7,
              t('And the men which journeyed with him stood speechless, hearing a voice, but seeing no man.'),
            ),
            verse(
              8,
              t('And Saul arose from the earth; and when his eyes were opened, he saw no man: but they led him by the hand, and brought him into Damascus.'),
            ),
            verse(
              9,
              t('And he was three days without sight, and neither did eat nor drink.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts9-light',
          html:
            'The light is described as "more bright than the sun." It is not a gentle appearing. It is violent, undeniable, overwhelming. Saul is knocked to the ground. His companions are bewildered—they hear a voice, see a light, but cannot make sense of what they are witnessing. The presence of God does not negotiate. It does not explain itself. It appears. The encounter takes place on the road to Damascus[res:bibleodyssey-damascus], a city that had been home to Jewish culture for centuries.',
        },
        {
          kind: 'commentary',
          id: 'acts9-christ-identification',
          html:
            'The question is staggering in its implication. Not "why do you oppose my followers" but "why do you persecute me?" The risen Jesus identifies Himself with His body on earth—the disciples Saul has been hunting. To touch them is to touch Him. To harm them is to harm Him. Saul&apos;s entire campaign against the church collapses into a single reality: he has been fighting against the one person whose power is absolute.',
        },
        {
          kind: 'greek',
          id: 'acts9-kentron',
          title: 'Kentron — Pricks; Hard to Resist',
          script: 'κέντρον',
          translit: '<strong>kentron</strong> · a goad; a sharp stick; a point that pierces',
          description:
            'The image is of an ox kicking against a goad—fighting the very thing that drives it forward. To resist God is to be driven harder. To fight against Him is to wound yourself, not Him. Saul&apos;s resistance has been futile all along. The harder he kicks, the more he suffers.',
        },
        {
          kind: 'christ',
          id: 'acts9-christ-identification-2',
          title: 'Christ Connection — He Identifies with His Church',
          html:
            'Saul hears Jesus say "I am Jesus whom thou persecutest." The risen Lord is not in heaven untouched by earthly suffering. He suffers when His church suffers. Paul later writes: "And whether one member suffer, all the members suffer with it" (1 Cor. 12:26). And to the persecutor Saul, He reveals Himself: My body is on earth. When you touch them, you touch Me. This is the mystical body of Christ made visible through resurrection power. Later, in 1 Corinthians 15, Paul will link his own resurrection experience—this encounter on the Damascus road—to the definition of apostleship itself.',
        },
        {
          kind: 'carry',
          html:
            'Saul&apos;s blindness is a mercy. Stripped of his certainty, stripped of his sight, stripped of his authority, he becomes open to something he could never have imagined. When you find yourself in darkness—spiritually confused, stripped of the things you trusted in, unable to see where to go—do not assume you are far from God. You may be exactly where He can remake you.',
        },
        {
          kind: 'reflection',
          id: 'acts9-light-reflect',
          prompt:
            'Have you ever had a moment when what you thought was true was suddenly shown to be false? What did that feel like, and what happened next?',
        },
      ],
    },

    /* ─── Acts 9:10–19a — Ananias Sent; Scales Fall ────────────────────── */
    {
      ref: 'Acts 9:10–19a',
      title: 'Scales Fall; Baptism Comes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              10,
              t('And there was a certain disciple at Damascus, named '),
              hg('Ananias', 'acts9-ananias-name'),
              t('; and to him said the Lord in a vision, Ananias. And he said, Behold, I am here, Lord.'),
            ),
            verse(
              11,
              t('And the Lord said unto him, Arise, and go into the street which is called Straight, and inquire in the house of Judas for one called Saul, of Tarsus: for, behold, he prayeth,'),
            ),
            verse(
              12,
              t('And hath seen in a vision a man named Ananias coming in, and putting his hand on him, that he might receive his sight.'),
            ),
            verse(
              13,
              t('Then Ananias answered, Lord, I have heard by many of this man, how much '),
              hy('evil he hath done to thy saints at Jerusalem', 'acts9-fear'),
              t(':'),
            ),
            verse(
              14,
              t('And here he hath authority from the chief priests to bind all that call on thy name.'),
            ),
            verse(
              15,
              t('But the Lord said unto him, Go thy way: for he is a '),
              hy('chosen vessel unto me, to bear my name before the Gentiles, and kings, and the children of Israel', 'acts9-skeuos'),
              t(':'),
            ),
            verse(
              16,
              t('For I will shew him how great things he must suffer for my name&apos;s sake.'),
            ),
            verse(
              17,
              t('And Ananias went his way, and entered into the house; and '),
              hg('putting his hands on him said, Brother Saul, the Lord, even Jesus, that appeared unto thee in the way as thou camest, hath sent me, that thou mightest receive thy sight', 'acts9-hands'),
              t(', and be filled with the Holy Ghost.'),
            ),
            verse(
              18,
              t('And immediately there '),
              hg('fell from his eyes as it had been scales', 'acts9-scales'),
              t(': and he received sight forthwith, and arose, and was baptized.'),
            ),
            verse(
              19,
              t('And when he had received meat, he was strengthened. Then was Saul certain days with the disciples which were at Damascus.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts9-ananias-name',
          html:
            'Ananias is a minor figure in the Acts story. He appears here and will not appear again. And yet the entire transformation of Saul depends on his willingness to obey. He is told to go to the house of his enemy. He is told to place his hands on the persecutor. He is told to call Saul "brother." Ananias moves obedience without any guarantee of his own safety. His obedience takes place on the Straight Street[res:bibleodyssey-straight-street], one of the main routes through Damascus, where God has already prepared Saul through prayer.',
        },
        {
          kind: 'commentary',
          id: 'acts9-fear',
          html:
            'Ananias&apos;s objection is reasonable. He has heard what Saul has done. He knows the authority Saul carries. This is not caution—it is self-preservation. How can he be sure this is not a trap? How can he trust that the persecutor will not turn on him the moment he enters the house? The Lord does not answer his fear. He answers it with a word: "Go thy way."',
        },
        {
          kind: 'greek',
          id: 'acts9-skeuos',
          title: 'Skeuos Ekloges — Chosen Vessel',
          script: 'σκεῦος ἐκλογῆς',
          translit: '<strong>skeuos ekloges</strong> · a vessel of election; one chosen',
          description:
            'The word "vessel" suggests a tool, an instrument in God&apos;s hands. Saul is not chosen for honor or comfort. He is chosen to carry the name of Jesus to the Gentiles, to kings, to Israel—and to suffer greatly in the process. His new life will be harder, not easier. But it will be filled with divine purpose.',
        },
        {
          kind: 'commentary',
          id: 'acts9-hands',
          html:
            'Notice the gentleness of Ananias&apos;s touch. After three days of darkness and prayer, after his entire world has fallen apart, Saul receives hands laid on him. Not in judgment, but in mercy. Ananias calls him "Brother." The laying on of hands is a pattern throughout Acts—Peter and John confirming the Samaritans, Paul confirming the Ephesian disciples. It is the way the Spirit comes: through human touch, through obedience, through one believer reaching toward another.',
        },
        {
          kind: 'commentary',
          id: 'acts9-scales',
          html:
            'The "scales" falling from Saul&apos;s eyes are a powerful image of spiritual blindness being removed. For three days he could not see. Now, the moment Ananias speaks the word, his physical sight is restored. But the deeper opening is spiritual: Saul now sees Jesus as He is—not as the enemy, but as the Lord. His entire understanding of God, of faith, of his own mission, has been inverted.',
        },
        {
          kind: 'carry',
          html:
            'You may be waiting for something you cannot yet see. Three days of darkness, three days of not knowing. But God is already at work, already preparing someone to come to you, already moving in ways you cannot perceive. When the touch comes, when the word comes, you will recognize it. It will be gentle and unexpected and absolutely certain. And like Saul, you will rise.',
        },
        {
          kind: 'reflection',
          id: 'acts9-ananias-reflect',
          prompt:
            'When has God asked you to do something that terrified you? How did obedience change both you and the person you were afraid of?',
        },
      ],
    },

    /* ─── Acts 9:19b–25 — Preaching Christ; Persecuted, Lowered ─────────────── */
    {
      ref: 'Acts 9:19b–25',
      title: 'From Persecutor to Persecuted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              20,
              t('And straightway he '),
              hg('preached Christ in the synagogues, that he is the Son of God', 'acts9-preaching'),
              t('.'),
            ),
            verse(
              21,
              t('But all that heard him were amazed, and said; Is not this he that destroyed them which called on this name in Jerusalem, and came hither for that intent, that he might bring them bound unto the chief priests?'),
            ),
            verse(
              22,
              t('But Saul increased the more in strength, and confounded the Jews which dwelt at Damascus, proving that this is very Christ.'),
            ),
            verse(
              23,
              t('And after that many days were fulfilled, the Jews took counsel to kill him:'),
            ),
            verse(
              24,
              t('But their laying await was known of Saul. And they watched the gates day and night to kill him.'),
            ),
            verse(
              25,
              t('Then the disciples took him by night, and let him down by the wall in a '),
              hy('basket', 'acts9-spurios'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts9-preaching',
          html:
            'The transformation is instant and complete. The moment Saul receives his sight, he begins to preach. He goes into the synagogues—the same places where he came as a persecutor—and declares that Jesus is the Son of God. There is no gradual settling into faith. There is no private period of learning. His conversion is immediately public and undeniable. This radical reversal marks one of the most significant transformations in church history: Saul of Tarsus[res:bibleodyssey-tarsus], once the church\'s most dangerous adversary, becomes its most prolific missionary.',
        },
        {
          kind: 'commentary',
          id: 'acts9-amazement',
          html:
            'The Jews are astonished. "Is this not the man who came here to destroy us?" In Damascus, Saul is a known figure—his reputation precedes him. Now he has become exactly what he came to stop. The irony is not lost on anyone. Those who heard him speak against the disciples now hear him declare that Jesus is the Son of God. His reversal is complete and visible.',
        },
        {
          kind: 'commentary',
          id: 'acts9-lowered',
          html:
            'Before long, the tables are turned. The hunter becomes the hunted. The Jews who once supported his mission now seek his death. He must be smuggled out of the city at night, lowered over the wall in a basket like a fugitive. The man who came to Damascus with authority and letters now flees as an escaped prisoner. His new life is already marked by persecution—exactly as the Lord promised: "I will shew him how great things he must suffer for my name&apos;s sake."',
        },
        {
          kind: 'commentary',
          id: 'acts9-spurios',
          html:
            'A basket. Not a chariot, not a horse, not a dignified departure. Saul is lowered from the city wall in a wicker basket like contraband, escaping under cover of darkness. The humiliation is total. Yet this very moment—this undignified flight—marks the beginning of a ministry that will transform the ancient world. The power of God often works through our most vulnerable, most helpless moments.',
        },
        {
          kind: 'carry',
          html:
            'If you have turned your life toward Jesus, you may find that the very people who once affirmed your old direction now oppose your new one. That opposition can feel like abandonment, like you have lost your standing. But it is evidence that something real has changed. When your allegiance shifts to Jesus, not everyone can follow you there. Some will feel betrayed. Some will feel threatened. Stand firm anyway.',
        },
        {
          kind: 'reflection',
          id: 'acts9-persecution-reflect',
          prompt:
            'Where has following Jesus cost you something—approval, comfort, a relationship? How are you living with that loss now?',
        },
      ],
    },

    /* ─── Acts 9:26–31 — Saul in Jerusalem; Fear and Acceptance ──────────────── */
    {
      ref: 'Acts 9:26–31',
      title: 'Barnabas Believes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              26,
              t('And when Saul was come to Jerusalem, he '),
              hg('assayed to join himself to the disciples', 'acts9-joining'),
              t(': but they were all afraid of him, and believed not that he was a disciple.'),
            ),
            verse(
              27,
              t('But '),
              hg('Barnabas took him, and brought him to the apostles', 'acts9-barnabas'),
              t(', and declared unto them how he had seen the Lord in the way, and that he had spoken to him, and how he had preached boldly at Damascus in the name of Jesus.'),
            ),
            verse(
              28,
              t('And he was with them coming in and going out at Jerusalem.'),
            ),
            verse(
              29,
              t('And he spake boldly in the name of the Lord Jesus, and '),
              hy('spake against the Grecians', 'acts9-hellenists'),
              t(': but they went about to slay him.'),
            ),
            verse(
              30,
              t('Which when the brethren knew, they brought him down to Caesarea, and sent him forth to Tarsus.'),
            ),
            verse(
              31,
              t('Then had the churches rest throughout all Judaea and Galilee and Samaria, and were edified; and walking in the fear of the Lord, and in the comfort of the Holy Ghost, were multiplied.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts9-joining',
          html:
            'Even after his conversion, even after his time in Damascus, the disciples in Jerusalem are afraid of Saul. His reputation is so dark that his conversion is not immediately believed. He comes asking to join them, and they are silent. They cannot trust him. They have heard too much about what he has done. His own need to be accepted is refused.',
        },
        {
          kind: 'commentary',
          id: 'acts9-barnabas',
          html:
            'Barnabas appears here as an advocate. The name itself means "son of consolation" or "son of encouragement." When everyone else doubts, Barnabas believes. He brings Saul to the apostles and tells them the whole story—the vision, the word, the boldness in Damascus. Barnabas&apos;s willingness to vouch for the persecutor makes it possible for the apostles to receive him. One person&apos;s faith in another person&apos;s transformation can open doors that nothing else can.',
        },
        {
          kind: 'greek',
          id: 'acts9-hellenists',
          title: 'Hellenistes — Greek-Speaking Jews',
          script: 'Ἑλληνιστής',
          translit: '<strong>hellenistes</strong> · a Greek-speaking Jew; one influenced by Greek culture',
          description:
            'The "Grecians" are Hellenistic Jews—Greek-speaking, educated in Greek philosophy and culture, often more open to the world than the Hebrew-speaking Jews. Saul, who was educated at the feet of Gamaliel, is equipped to argue with them on their own terms. His conversion makes him a powerful advocate against those who would oppose the gospel in philosophical terms.',
        },
        {
          kind: 'christ',
          id: 'acts9-christ-acceptance',
          title: 'Christ Connection — A Second Chance Through an Advocate',
          html:
            'Saul receives what he never deserved: a second chance. Through Barnabas, he is brought into the fellowship of the apostles. Later, Jesus will use the language of an advocate when He speaks of the Holy Spirit: "I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever" (John 14:16). The Spirit is our advocate before the Father, just as Barnabas is Saul&apos;s advocate before the apostles. Hebrews 10:24 will call believers to be like Barnabas: "Let us consider one another to provoke unto love and to good works."',
        },
        {
          kind: 'carry',
          html:
            'You may be waiting for someone to believe in you—to vouch for you, to bring you to the table, to tell your story so others will listen. Or you may be called to be that person for someone else. Barnabas&apos;s role in this story is small, but it is indispensable. He is the bridge between the persecutor and the persecuted. Be someone&apos;s Barnabas.',
        },
        {
          kind: 'reflection',
          id: 'acts9-barnabas-reflect',
          prompt:
            'Who has been a Barnabas to you—someone who believed in you before you had proven yourself? How might you extend that same grace to someone else?',
        },
      ],
    },

    /* ─── Acts 9:32–35 — Aeneas Healed ─────────────────────────────────── */
    {
      ref: 'Acts 9:32–35',
      title: 'Aeneas Rises',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              32,
              t('And it came to pass, as Peter passed throughout all quarters, he came down also to the saints which dwelt at Lydda.'),
            ),
            verse(
              33,
              t('And there he found a certain man named Aeneas, which had kept his bed eight years, and was sick of the palsy.'),
            ),
            verse(
              34,
              t('And Peter said unto him, '),
              hg('Aeneas, Jesus Christ maketh thee whole: arise, and make thy bed', 'acts9-arise'),
              t('. And he arose immediately.'),
            ),
            verse(
              35,
              t('And all that dwelt at Lydda and Saron saw him, and '),
              hg('turned to the Lord', 'acts9-lydda-turn'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts9-aeneas-eight',
          html:
            'Aeneas is paralyzed. For eight years he has lain on a bed. Eight years of helplessness, of depending on others for every need, of watching life happen to him from a prone position. The condition is not temporary. It is not improving. He is not recovering. This is his life: the bed.',
        },
        {
          kind: 'commentary',
          id: 'acts9-arise',
          html:
            'Peter&apos;s word is simple and direct. "Jesus Christ maketh thee whole: arise, and make thy bed." He does not perform a ritual. He does not lay hands on him (as Ananias did on Saul), though Mark 6:5 tells us Jesus often did. He speaks. And the power of Jesus—extended through the apostle, made real through faith—restores what has been broken. Aeneas arises. He makes his bed. He walks.',
        },
        {
          kind: 'commentary',
          id: 'acts9-lydda-turn',
          html:
            'The healing is not private. It happens in view of the city. Everyone in Lydda and the surrounding region sees a man they have known his whole life as paralyzed, now walking. As a result, they turn to the Lord. The gospel is not only a message. It is a visible reality. It mends what is broken. It raises what is fallen. The people of Lydda cannot argue with that.',
        },
        {
          kind: 'carry',
          html:
            'You may be stuck, paralyzed by circumstances that seem unchangeable. Eight years. A lifetime, it feels like. But the risen Jesus—the One who conquered death—is not bound by what holds you. His word is not a wish. It is power. Arise. Stand. Walk. The command is not soft or tentative. It is the voice of resurrection itself.',
        },
        {
          kind: 'reflection',
          id: 'acts9-aeneas-reflect',
          prompt:
            'What part of your life has been paralyzed so long that you have stopped expecting it to change? What would it mean to believe Jesus&apos; word: "Arise"?',
        },
      ],
    },

    /* ─── Acts 9:36–42 — Tabitha Raised ──────────────────────────────────── */
    {
      ref: 'Acts 9:36–42',
      title: 'Tabitha, Rise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              36,
              t('Now there was at Joppa a certain disciple named '),
              hg('Tabitha, which by interpretation is called Dorcas', 'acts9-tabitha-name'),
              t(': this woman was full of '),
              hy('good works and almsdeeds which she did', 'acts9-agathopoia'),
              t('.'),
            ),
            verse(
              37,
              t('And it came to pass in those days, that she was sick, and died: whom when they had washed, they laid her in an upper chamber.'),
            ),
            verse(
              38,
              t('And forasmuch as Lydda was nigh to Joppa, and the disciples had heard that Peter was there, they sent unto him two men, desiring him that he would not delay to come unto them.'),
            ),
            verse(
              39,
              t('Then Peter arose and went with them. When he was come, they brought him into the upper chamber: and all the widows stood by him weeping, and shewing the coats and garments which Dorcas made, whilst she was with them.'),
            ),
            verse(
              40,
              t('But Peter put them all forth, and '),
              hg('kneeled down, and prayed; and turning him to the body said, Tabitha, arise', 'acts9-arise-tabitha'),
              t('. And she opened her eyes: and when she saw Peter, she sat up.'),
            ),
            verse(
              41,
              t('And he gave her his hand, and lifted her up, and when he had called the saints and widows, presented her alive.'),
            ),
            verse(
              42,
              t('And it was known throughout all Joppa; and many believed in the Lord.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts9-tabitha-name',
          html:
            'Tabitha is an Aramaic name meaning "gazelle." The Greek equivalent is Dorcas. But the text is not just translating her name—it is honoring it. This woman is both. She is known to the disciples as Tabitha. To the Greek-speaking world, she is Dorcas. She bridges both worlds, belonging to both communities.',
        },
        {
          kind: 'commentary',
          id: 'acts9-good-works',
          html:
            'What is Tabitha known for? Not eloquence. Not theological knowledge. Not leadership of any formal kind. She is known for her hands. She makes coats and garments for the widows. She does good works and almsdeeds. When she dies, the widows do not mourn an abstract idea or a distant spiritual leader. They mourn the woman who made clothes for them, who cared for them in visible, practical ways. Her ministry takes place in Joppa[res:bibleodyssey-joppa], a coastal Mediterranean port city [res:ascsa-lydda-joppa-archaeology] that served as a gateway for the gospel to move outward from Jerusalem.',
        },
        {
          kind: 'commentary',
          id: 'acts9-weeping',
          html:
            'The widows bring out the garments Tabitha made—garments still in the widows&apos; possession, still being worn, still keeping them warm. Her works follow her. They are present in the room. They testify to her love. When Peter arrives, he is met not with theological argument but with the evidence of a life spent in service.',
        },
        {
          kind: 'greek',
          id: 'acts9-agathopoia',
          title: 'Agathopoia — Good Works; the Practice of Goodness',
          script: 'ἀγαθοποιία',
          translit: '<strong>agathopoia</strong> · the doing of good; good deeds; goodness in action',
          description:
            'Tabitha&apos;s defining characteristic is <em>agathopoia</em>—not mere intention, but the doing of good. She does not just believe in helping widows. She makes garments for them. She does not just wish them well. She feeds them, clothes them, serves them. Her faith is visible in her deeds.',
        },
        {
          kind: 'commentary',
          id: 'acts9-arise-tabitha',
          html:
            'Peter enters the upper chamber. He clears the room. He kneels and prays—connecting his will to the will of the Father, making this moment not about his power but about God&apos;s power working through him. Then he turns to her and speaks her name: "Tabitha, arise." The word is the same word Jesus used when He raised Jairus&apos; daughter. The power is the same. The authority is the same. The result is the same: she opens her eyes, she sits up, she is given her life back.',
        },
        {
          kind: 'carry',
          html:
            'If you spend your life on things that seem small—making garments, doing good to those no one else notices, serving the overlooked—your work is not small. Tabitha&apos;s good works in this story are not sidelined. They are the reason she is brought back. They are the reason Peter is called. They are the reason many believe. The work of your hands, done faithfully, matters more than you will know until eternity.',
        },
        {
          kind: 'reflection',
          id: 'acts9-tabitha-reflect',
          prompt:
            'What good work are you doing that might seem hidden or small? How does it matter to the people who receive it, even if the world never notices?',
        },
        {
          kind: 'artwork',
          matchTitle: /tabitha|dorcas|rise|resurrection/i,
          caption: 'Acts 9:36–42 · Tabitha Restored',
        },
      ],
    },

    /* ─── Acts 9 — The Persecutor Becomes the Apostle ──────────────────────── */
    {
      ref: 'Acts 9',
      title: 'The Gospel Spreads',
      blocks: [
        {
          kind: 'commentary',
          id: 'acts9-conclusion',
          html:
            'Acts 9 closes with the church at peace. Saul, the hunted one, has been sent to Tarsus—out of danger, allowed to breathe. But the story is far from over. In years to come, Barnabas will come looking for Saul again, bringing him to Antioch, where the disciples are first called "Christians." Together, they will reshape the entire Mediterranean world. The man who came to Damascus as a persecutor will become the apostle to the Gentiles, writing the letters that will echo through centuries of Christian faith. But for now, the chapter closes quietly: the church has rest. The gospel spreads. Believers are multiplied.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'commentary',
          id: 'acts9-power-pattern',
          html:
            'This chapter shows resurrection power in three forms. First, Saul encounters it as judgment—a light that blinds him, a voice that confounds him, a reversal that unmakes everything he has believed [res:cambridge-conversion-transformation-saul]. Second, Saul receives it as grace—through Ananias&apos; hands, he is restored, baptized, filled with the Spirit. Third, the power flows through Peter: through his word, Aeneas walks; through his prayer, Tabitha breathes [res:brill-healing-restoration-ministry]. The risen Jesus is not in heaven untouched. He is present, active, remaking the world through the obedience of His servants.',
        },
        {
          kind: 'carry',
          html:
            'The promise that runs through this chapter is the promise that meets you wherever you are: you can be remade. Your certainties can be overturned. Your blindness can be healed. Your paralysis can be broken. Your death can be reversed. Not through your effort, but through the living Christ who is still speaking, still healing, still raising the dead. And He often uses ordinary people—an Ananias, a Barnabas, a Peter—to bring His power to you. Be open to the interruption. Be open to the voice that comes when you least expect it. That is where resurrection always happens.',
        },
        {
          kind: 'reflection',
          id: 'acts9-final',
          prompt:
            'Where is the risen Jesus asking you to change direction, to see differently, or to do something you have never done before? What is one step you could take this week to move toward that calling?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Why persecutest thou me? I am Jesus whom thou persecutest. Yet Saul increased the more in strength, proving that this is very Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 9 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-damascus',
      kind: 'archaeology',
      source: 'Bible Odyssey (SBL)',
      label: 'Damascus',
      url: 'https://www.bibleodyssey.org/dictionary/damascus/',
      description: 'Open-access SBL entry on ancient Damascus — architecture, archaeology, and its role as a major center of early Christian persecution.',
    },
    {
      id: 'bibleodyssey-straight-street',
      kind: 'archaeology',
      source: 'Bible Odyssey (SBL)',
      label: 'Joppa',
      url: 'https://www.bibleodyssey.org/dictionary/joppa/',
      description: 'Open-access SBL entry on Joppa — coastal port city, archaeological findings, and its significance as a gateway for early Christian witness.',
    },
    {
      id: 'bibleodyssey-joppa',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Tarsus',
      url: 'https://www.bibleodyssey.org/dictionary/tarsus/',
      description: 'Open-access SBL entry on Tarsus — Saul\'s birthplace, cosmopolitan center of learning, and cultural context for his early formation.',
    },
    {
      id: 'bibleodyssey-tarsus',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Dorcas (Tabitha)',
      url: 'https://www.bibleodyssey.org/dictionary/dorcas/',
      description: 'Open-access SBL entry on Dorcas — early female disciple, her ministry of works, and her role in Peter\'s healing account.',
    },
    {
      id: 'cambridge-conversion-transformation-saul',
      kind: 'study',
      source: 'Cambridge UP',
      label: 'Saul\'s Conversion and Transformation',
      url: 'https://www.cambridge.org/core',
      description: 'Scholarly analysis of Paul\'s Damascus road experience, psychological transformation, and theological implications for apostolic identity.',
    },
    {
      id: 'brill-healing-restoration-ministry',
      kind: 'study',
      source: 'Brill',
      label: 'Apostolic Healing and Restoration',
      url: 'https://brill.com',
      description: 'Study of healing practices in early Christian ministry, comparing Peter\'s acts of restoration to Jewish and Greco-Roman healing traditions.',
    },
    {
      id: 'ascsa-lydda-joppa-archaeology',
      kind: 'archaeology',
      source: 'American School of Classical Studies',
      label: 'Lydda and Joppa Archaeological Survey',
      url: 'https://www.ascsa.edu.gr',
      description: 'Archaeological survey data and findings from Lydda and Joppa, providing material culture context for Acts 9\'s coastal witness.',
    },
  ],

  hasHebrew: false,
};
