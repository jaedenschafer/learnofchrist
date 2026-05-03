import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Acts 4 — The Rejected Stone & No Other Name
 *
 * Peter and John stand before the Sanhedrin, the same council that condemned Jesus.
 * Filled with the Holy Ghost, Peter proclaims boldly that in the name of Jesus the
 * lame man is made whole. The authorities are amazed to see such boldness in men
 * they perceive as unlearned and ignorant — yet they recognize that these men have
 * been with Jesus. Rather than recant, Peter and John declare they cannot stop
 * speaking what they have seen and heard. The church grows. Believers are of one
 * heart and soul, holding all things common. Grace rests upon them all.
 */
export const ACTS_4: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 4,

  estimatedMinutes: { beginner: 9, intermediate: 17, deep: 24 },
  intros: [
    'Peter and John have just healed the lame beggar and spoken boldly to the crowds about Jesus. Now they are arrested. The very next morning they stand before the Sanhedrin[res:bibleodyssey-sanhedrin] — the council of seventy elders that had condemned Jesus to death. Peter might have been afraid. Instead, filled with the Holy Ghost, he declares that the lame man is made whole by the power of the name of Jesus Christ. The council is stunned. They recognize that Peter and John have been with Jesus.',
    'Rather than back down, Peter and John insist they cannot help but speak the things they have seen and heard. They cannot be silent, no matter what the council commands. The authorities release them but order them to speak no more in that name. Yet the gospel spreads. Thousands more believe. The new believers live as one body — of one heart and soul, holding all their possessions in common, sharing freely with those in need. Into this chapter, God introduces Barnabas, a Levite whose very name means "son of encouragement."',
  ],

  sections: [
    /* ─── Acts 4:1–4 — Arrested at Evening ───────────────────────────────── */
    {
      ref: 'Acts 4:1–4',
      title: 'Arrested at Evening',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              1,
              t('And as they spake unto the people, the '),
              hg('priests, and the captain of the temple, and the Sadducees, came upon them', 'acts4-authorities'),
              t(','),
            ),
            verse(
              2,
              t('Being grieved that they taught the people, and '),
              hg('preached through Jesus the resurrection from the dead', 'acts4-resurrection-announcement'),
              t('.'),
            ),
            verse(
              3,
              t('And they laid hands on them, and put them in hold unto the next day: for it was now eventide.'),
            ),
            verse(
              4,
              t('Howbeit '),
              hp('many of them which heard the word believed', 'acts4-fruit-of-boldness'),
              t('; and the number of the men came to be about five thousand.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts4-authorities',
          html:
            'The authorities who arrest them represent power threatened. The priests and Sadducees are the establishment of first-century Jerusalem. The Sadducees especially deny resurrection, so a message of resurrection hits them at the center of their theology. They do not argue with Peter and John&apos;s claim; they simply arrest them. That is the response of power that has no answer.',
        },
        {
          kind: 'commentary',
          id: 'acts4-resurrection-announcement',
          html:
            'The resurrection of Jesus is not a private spiritual experience. It is something &ldquo;preached&rdquo; — announced publicly, testified openly. This is not mysticism or hidden knowledge. It is word-of-mouth proclamation, person to person, and it spreads like fire. The Sanhedrin cannot control it because it is not coming from an institution or a hierarchy. It is coming from ordinary men who have seen an extraordinary thing.',
        },
        {
          kind: 'commentary',
          id: 'acts4-fruit-of-boldness',
          html:
            'Even as Peter and John are arrested, the word bears fruit. Five thousand men — more than double the three thousand at Pentecost — believe. Persecution is coming, but so is harvest. The more the authorities clamp down, the more believers multiply. This is the kingdom pattern: the seed must fall into the ground and die, but it brings forth much fruit.',
        },
        {
          kind: 'carry',
          html:
            'What if your boldness in speaking about Jesus — whether at a dinner table, in a workplace, or in a text — resulted in more people awakening to faith, not fewer? The disciples are learning what will become clear throughout Acts: opposition from authorities is not a sign to stop. Often it is the moment when the word spreads fastest.',
        },
        {
          kind: 'reflection',
          id: 'acts4-boldness-when-opposed',
          prompt:
            'When have you felt pressure to be silent about faith or about what you believe is true? What would change if you trusted that openness, even risky openness, bears more fruit than silence?',
        },
      ],
    },

    /* ─── Acts 4:5–12 — Standing Trial ─────────────────────────────────── */
    {
      ref: 'Acts 4:5–12',
      title: 'Standing Trial',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              5,
              t('And it came to pass on the morrow, that their rulers, and elders, and scribes,'),
            ),
            verse(
              6,
              t('And Annas the high priest, and '),
              hg('Caiaphas[res:bibleodyssey-caiaphas]', 'acts4-authorities'),
              t(', and John, and Alexander, and as many as were of the kindred of the high priest, were gathered together at Jerusalem.'),
            ),
            verse(
              7,
              t('And when they had set them in the midst, they asked, '),
              hg('By what power, or by what name, have ye done this?', 'acts4-the-question'),
              t(''),
            ),
            verse(
              8,
              t('Then Peter, filled with the Holy Ghost, said unto them, Ye rulers of the people, and elders of Israel,'),
            ),
            verse(
              9,
              t('If we this day are examined of the good deed done to the impotent man, by what means he is made whole;'),
            ),
            verse(
              10,
              t('Be it known unto you all, and to all the people of Israel, that by the '),
              hp('name of Jesus Christ of Nazareth, whom ye crucified, whom God raised from the dead, even by him doth this man stand here before you whole', 'acts4-name-of-jesus'),
              t('.'),
            ),
            verse(
              11,
              t('This is the '),
              hp('stone which was set at nought of you builders, which is become the head of the corner', 'acts4-cornerstone-psalm'),
              t('.'),
            ),
            verse(
              12,
              t('Neither is there '),
              hp('salvation in any other', 'acts4-no-other-name'),
              t(': for there is none other '),
              hy('name', 'acts4-onoma'),
              t(' under heaven given among men, whereby we must be saved.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts4-the-question',
          html:
            'The council asks the right question without knowing it. &ldquo;By what power, or by what name?&rdquo; In the ancient world, names carry more than identity. A name carries power, authority, essence. The question is not rhetorical. Peter will answer it directly.',
        },
        {
          kind: 'greek',
          id: 'acts4-onoma',
          title: 'Onoma — &ldquo;name&rdquo;',
          script: 'ὄνομα',
          translit: '<strong>onoma</strong> · name; the seat of authority and power',
          description:
            'In the biblical understanding, to invoke the name of someone is to invoke their authority and presence. To act &ldquo;in the name of Jesus&rdquo; is not to use His name as a magic formula. It is to act under His authority, as His representative, with His power at work. The lame man is healed because the power of Jesus Christ is at work through Peter and John.',
        },
        {
          kind: 'commentary',
          id: 'acts4-name-of-jesus',
          html:
            'Peter does not hedge. He says it plainly: &ldquo;by the name of Jesus Christ of Nazareth, whom ye crucified.&rdquo; He is not avoiding the council&apos;s role in the crucifixion. He is placing the resurrection directly next to the death. Yes, you killed Him. And yes, God raised Him from the dead. The full truth is what sets them free.',
        },
        {
          kind: 'christ',
          id: 'acts4-cornerstone-psalm',
          title: 'Christ Connection — The Rejected Stone Made Head',
          html:
            'Peter quotes Psalm 118:22 — the stone the builders rejected has become the cornerstone. The psalm refers to David, but in Peter&apos;s mouth it refers to Jesus. Rejected by the councils of Israel, condemned as worthless, Jesus becomes the chief cornerstone of salvation. The very ones trying to silence Peter are themselves enacting the psalm. They are the builders rejecting the stone. But the stone is unaffected. It becomes the head of the corner regardless of their verdict. "Thou art Peter, and upon this rock I will build my church" (Matt. 16:18).',
        },
        {
          kind: 'commentary',
          id: 'acts4-no-other-name',
          html:
            'This is not arrogance or exclusivism in the modern sense. This is testimony. Peter is not inventing a requirement. He is reporting what he has witnessed: salvation comes through the name of Jesus. This will become the apostolic claim across every page of the New Testament. It is not negotiable; it is the gospel itself.',
        },
        {
          kind: 'carry',
          html:
            'Peter tells the council why the lame man is whole. He does not soften it or translate it into language the council will find palatable. He speaks the truth fully and lets them decide whether to listen. Where are you called to do the same — to state what you have seen and heard without apology, and trust God with the outcome?',
        },
        {
          kind: 'reflection',
          id: 'acts4-plain-speech',
          prompt:
            'Is there a truth about Jesus, about God, or about what you believe that you have been moderating or softening to avoid offense? What would it look like to speak it plainly, as Peter does?',
        },
        {
          kind: 'artwork',
          matchTitle: /stone.*builders/i,
          caption: 'Acts 4:5–12 · The Cornerstone',
        },
      ],
    },

    /* ─── Acts 4:13–18 — Unlearned and Ignorant Men ────────────────────── */
    {
      ref: 'Acts 4:13–18',
      title: 'Unlearned and Ignorant Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              13,
              t('Now when they saw the '),
              hy('boldness of Peter and John', 'acts4-parresia'),
              t(', and perceived that they were '),
              hy('unlearned and ignorant men', 'acts4-agrammatos'),
              t(', they marvelled; and '),
              hg('they took knowledge of them, that they had been with Jesus', 'acts4-been-with-jesus'),
              t('.'),
            ),
            verse(
              14,
              t('And beholding the man which was healed standing with them, they could say nothing against it.'),
            ),
            verse(
              15,
              t('But when they had commanded them to go aside out of the council, they conferred among themselves,'),
            ),
            verse(
              16,
              t('Saying, What shall we do to these men? for that indeed a notable miracle hath been done by them is manifest to all them that dwell in Jerusalem; and we cannot deny it.'),
            ),
            verse(
              17,
              t('But that it spread no further among the people, let us straitly threaten them, that they speak henceforth to no man in this name.'),
            ),
            verse(
              18,
              t('And they called them, and commanded them not to speak at all nor teach in the name of Jesus.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'acts4-parresia',
          title: 'Parresia — &ldquo;boldness&rdquo;',
          script: 'παρρησία',
          translit: '<strong>parrhesia</strong> · boldness; frankness; freedom of speech',
          description:
            'Parrhesia is the confidence of someone with nothing to hide and nothing to lose. It is not aggression or rudeness. It is the freedom that comes from having seen the truth. Peter and John speak with parrhesia before the Sanhedrin because they have seen the risen Christ. Fear of the council cannot touch that witness.',
        },
        {
          kind: 'greek',
          id: 'acts4-agrammatos',
          title: 'Agrammatos — &ldquo;unlearned&rdquo;',
          script: 'ἀγράμματος',
          translit: '<strong>agrammatos</strong> · without formal education; untrained in the law',
          description:
            'Peter and John are laymen, not trained in the rabbinic schools that produced scribes and lawyers. By the standards of Jewish learning, they are unqualified to teach in the temple. Yet the Sanhedrin perceives something the credentials cannot explain: these men have been with Jesus, and His power works through them.',
        },
        {
          kind: 'commentary',
          id: 'acts4-been-with-jesus',
          html:
            'This is the council&apos;s involuntary testimony. They cannot deny that a miracle has been done. So they make an observation instead: these men have been with Jesus. The council expected that association to end at the crucifixion. But it does not. Peter and John are not suddenly wise or powerful in themselves. They carry the power and presence of someone they have been with — Jesus, whom God raised from the dead.',
        },
        {
          kind: 'commentary',
          id: 'acts4-cannot-deny',
          html:
            'The Sanhedrin is cornered. The healed man is standing right there. The whole city knows. They cannot deny the miracle. So they try to contain it. They forbid Peter and John to speak in the name of Jesus. This is the language of desperation. You do not forbid what you have defeated. The council&apos;s own command proves the power they are attempting to silence.',
        },
        {
          kind: 'carry',
          html:
            'If you have spent time with Jesus — in prayer, in Scripture, in community with other believers — that time leaves a mark. Other people notice. They may not understand it. They may even resent it. But they recognize that something is different about someone who has genuinely been with Christ. What evidence would others see if they looked at your life, that you have been with Jesus?',
        },
        {
          kind: 'reflection',
          id: 'acts4-been-with-jesus-reflect',
          prompt:
            'What would it mean for someone to look at your life and recognize, as the council did, that you have been with Jesus? What changes would that require?',
        },
      ],
    },

    /* ─── Acts 4:19–22 — Released to Their Own ────────────────────────── */
    {
      ref: 'Acts 4:19–22',
      title: 'Released to Their Own',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              19,
              t('But Peter and John answered and said unto them, '),
              hg('Whether it be right in the sight of God to hearken unto you more than unto God, judge ye', 'acts4-judge-yourselves'),
              t('.'),
            ),
            verse(
              20,
              t('For '),
              hg('we cannot but speak the things which we have seen and heard', 'acts4-cannot-but-speak'),
              t('.'),
            ),
            verse(
              21,
              t('So when they had further threatened them, they let them go, finding nothing how they might punish them, because of the people: for all men glorified God for that which was done.'),
            ),
            verse(
              22,
              t('For the man was above forty years old, on whom this miracle of healing was shewed.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts4-judge-yourselves',
          html:
            'Peter does not argue theology. He appeals to something the council already knows: there is a higher authority than their authority. He does not say, "I will not obey you." He says, "Judge for yourselves whether it is right to obey you or to obey God." The question judges the Sanhedrin by their own conscience. Every person listening must make that same choice.',
        },
        {
          kind: 'commentary',
          id: 'acts4-cannot-but-speak',
          html:
            'This is not stubbornness. It is compulsion. Peter and John are not choosing to be difficult. They are saying that they cannot keep silent about what they have seen and heard. The resurrection of Jesus is not a private experience they keep to themselves. It presses out. It demands to be spoken. To silence it would be to do violence to their own witness and their own conscience.',
        },
        {
          kind: 'commentary',
          id: 'acts4-the-man-forty',
          html:
            'The chapter pauses here to remind us: the man was forty years old. For forty years he had been lame. The miracle of his healing is permanent, public, undeniable. This is not a spiritual experience or a theological claim. This is a man who had never walked, walking. The council cannot argue with his testimony any more than they can argue with the empty tomb.',
        },
        {
          kind: 'carry',
          html:
            'Peter and John are released because the Sanhedrin fears the people. They cannot punish the apostles without creating a backlash. This happens often: the principalities and powers are constrained by the very people you fear you cannot convince. Speak your faith openly, and you may find the obstacles you anticipated are less solid than you thought.',
        },
        {
          kind: 'reflection',
          id: 'acts4-obedience-higher',
          prompt:
            'What authority in your own life are you obeying because you assume you have to, when you might instead appeal to the higher authority of God? Where are you called to "judge for yourselves"?',
        },
      ],
    },

    /* ─── Acts 4:23–31 — The Prayer for Boldness ─────────────────────── */
    {
      ref: 'Acts 4:23–31',
      title: 'The Prayer for Boldness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              23,
              t('And being let go, they went to their own company, and reported all that the chief priests and elders had said unto them.'),
            ),
            verse(
              24,
              t('And when they heard it, they lifted up their voice to God with one accord, and said, Lord, thou art God, which hast made heaven, and earth, and the sea, and all that in them is:'),
            ),
            verse(
              25,
              t('Who by the mouth of thy servant David hast said, '),
              hp('Why did the heathen rage, and the people imagine a vain thing?[res:psalm2-acts4-intertextual]', 'acts4-psalm2'),
              t(''),
            ),
            verse(
              26,
              t('The kings of the earth stood up, and the rulers were gathered together against the Lord, and against his Christ.'),
            ),
            verse(
              27,
              t('For of a truth against thy holy child Jesus, whom thou hast anointed, both Herod, and Pontius Pilate, with the Gentiles, and the people of Israel, were gathered together,'),
            ),
            verse(
              28,
              t('For to do whatsoever thy hand and thy counsel determined before to be done.'),
            ),
            verse(
              29,
              t('And now, Lord, behold their threatnings: and grant unto thy servants, that with all '),
              hy('boldness', 'acts4-parresia-again'),
              t(' we may speak thy word;'),
            ),
            verse(
              30,
              t('By stretching forth thine hand to heal; and that signs and wonders may be done by the name of thy holy child Jesus.'),
            ),
            verse(
              31,
              t('And when they had prayed, the place was shaken where they were assembled together; and they were all filled with the Holy Ghost, and they spake the word of God with '),
              hy('boldness', 'acts4-boldness-granted'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'christ',
          id: 'acts4-psalm2',
          title: 'Christ Connection — The Persecuted Anointed of Psalm 2',
          html:
            'The prayer explicitly quotes Psalm 2:1–2: "Why did the heathen rage, and the people imagine a vain thing? The kings of the earth stood up, and the rulers were gathered together against the Lord, and against his Christ." The church applies this psalm to the very events we just read. The Sanhedrin, Herod, Pontius Pilate, the Gentiles, and the people of Israel — all lined up against Jesus (Ps. 2:2, Acts 4:26–27). But the psalmist continues: "He that sitteth in the heavens shall laugh" (Ps. 2:4). Jesus is not destroyed by opposition. He is exalted by it. The church is learning to read the Old Testament through the prism of the resurrection.',
        },
        {
          kind: 'commentary',
          id: 'acts4-our-own-company',
          html:
            'When Peter and John return, they go to their &ldquo;own company&rdquo; — the gathering of believers. This is crucial. They do not go home alone. They do not digest the threat privately. They go to community and report everything to those who love them and pray with them. The threat becomes the occasion for united prayer.',
        },
        {
          kind: 'commentary',
          id: 'acts4-prayer-not-for-safety',
          html:
            'The church does not pray for safety. They do not ask God to keep the Sanhedrin away or to remove the threat. They pray for boldness. They ask God to grant them power to speak His word with the same fearlessness the authorities just tried to suppress. They are not defensive. They are offensive — in the spiritual sense. They are asking for power to advance, not merely to survive.',
        },
        {
          kind: 'greek',
          id: 'acts4-parresia-again',
          title: 'Parresia — Asked Again',
          script: 'παρρησία',
          translit: '<strong>parrhesia</strong> · boldness; frankness',
          description:
            'The apostles have already shown boldness before the Sanhedrin. Now they ask the Father for more. They have seen that boldness is the thing the authorities fear most. They ask for it to be multiplied. The request is granted — the place is shaken, they are filled with the Holy Ghost, and they speak with boldness again.',
        },
        {
          kind: 'commentary',
          id: 'acts4-the-shaking',
          html:
            'The place is shaken where they are assembled. This is not metaphor. The building moves. The Spirit is tangible, powerful, overwhelming. And in that moment, they are all filled with the Holy Ghost anew. The filling is not permanent until the end of their lives. It is renewed, repeated, fresh. Every time they are about to speak, they need the Spirit&apos;s empowering. And it comes.',
        },
        {
          kind: 'commentary',
          id: 'acts4-boldness-granted',
          html:
            'The answer comes immediately. They speak the word of God with boldness — the very thing they asked for, the very thing the council tried to forbid. No threat can prevent it. The boldness is not courage born of fearlessness. It is courage born of faith. They are afraid, perhaps. But they are more afraid of disobeying God than of the Sanhedrin.',
        },
        {
          kind: 'carry',
          html:
            'When you face opposition or fear about speaking faith, prayer is not a retreat. It is an advance. You do not ask God to remove the obstacle. You ask Him to fill you with such boldness that the obstacle is insignificant. And He answers. The place shakes. You are renewed. You are ready to speak again.',
        },
        {
          kind: 'reflection',
          id: 'acts4-prayer-boldness',
          prompt:
            'When have you prayed, not for the problem to go away, but for boldness to face it? What happened when you did?',
        },
        {
          kind: 'artwork',
          matchTitle: /prayer|shaking|house|gathering/i,
          caption: 'Acts 4:23–31 · The Prayer for Boldness',
        },
      ],
    },

    /* ─── Acts 4:32–35 — All Things Common ───────────────────────────── */
    {
      ref: 'Acts 4:32–35',
      title: 'All Things Common',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              32,
              t('And '),
              hg('the multitude of them that believed were of one heart and of one soul', 'acts4-one-heart'),
              t(': neither said any of them that ought of the things which he possessed was his own; but '),
              hg('they had all things common', 'acts4-all-things-common'),
              t('.'),
            ),
            verse(
              33,
              t('And with great power gave the apostles '),
              hp('witness of the resurrection of the Lord Jesus', 'acts4-resurrection-witness'),
              t(': and great grace was upon them all.'),
            ),
            verse(
              34,
              t('Neither was there any among them that lacked: for as many as were possessors of lands or houses sold them, and brought the prices of the things that were sold,'),
            ),
            verse(
              35,
              t('And laid them down at the apostles&apos; feet: and distribution was made unto every man according as he had need.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts4-one-heart',
          html:
            'The believers share one heart and one soul. This language is powerful. It is not that they have a policy in common, or a creed. They have a single orientation, a unified will. The resurrection of Jesus has so reordered their hearts that they move together as one body. This is the natural condition of believers filled with one Spirit.',
        },
        {
          kind: 'commentary',
          id: 'acts4-all-things-common',
          html:
            'The sharing of possessions is not communism imposed from above. It is the spontaneous response of people who have encountered the risen Christ. When you have seen the resurrection, property ceases to be your security. The living Christ becomes your security. So you release your grip on possessions and let them flow to where they are needed. This is <em>radical</em> — it gets to the root.',
        },
        {
          kind: 'greek',
          id: 'acts4-koinonia',
          title: 'Koinonia — &ldquo;common&rdquo;',
          script: 'κοινωνία',
          translit: '<strong>koinonia</strong> · fellowship; sharing; partnership',
          description:
            'Koinonia is not mere coexistence. It is active participation in each other&apos;s lives. The believers do not simply avoid claiming possessions as private. They participate together in caring for each other. It is the practical expression of the Spirit&apos;s unity. Each person&apos;s need becomes the concern of all.',
        },
        {
          kind: 'commentary',
          id: 'acts4-resurrection-witness',
          html:
            'The apostles give witness to the resurrection with great power. Not with smooth words or philosophical arguments. They give witness through the transformation they have become. And through that witness, great grace rests on them all. Grace is not just a theological concept. It is the practical outworking of God&apos;s favor in concrete, daily provision.',
        },
        {
          kind: 'commentary',
          id: 'acts4-no-lack',
          html:
            'The astonishing claim: &ldquo;Neither was there any among them that lacked.&rdquo; Not because they had unlimited resources, but because they responded to need as it arose. Believers with land or houses sold them and brought the price to the apostles&apos; feet. The money was then distributed to each person according as he had need. This is not theoretical generosity. It is specific, immediate, person-by-person care.',
        },
        {
          kind: 'christ',
          id: 'acts4-resurrection-community',
          title: 'Christ Connection — Living as a Resurrection People',
          html:
            'The believers live out what it means that Christ is risen. If Christ rose, if death has been defeated, if eternity has broken into time — then the old economies no longer hold. Land, possessions, the security of the self, the boundaries of the tribe — all of it has been reordered by resurrection. This is not poverty or renunciation for its own sake. It is the radical reorientation of the heart toward the living Christ who alone is worth clinging to. Later, Paul will write: "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me" (Gal. 2:20). This is what that looks like in practice.',
        },
        {
          kind: 'carry',
          html:
            'You need not sell all and give away everything to learn from this passage. But you might ask: What possessions, in your heart, are you clinging to? What am I afraid to lose? What if, in those places, I released my grip a little and trusted the Christ who rose? The generosity of the early church was not a law they obeyed. It was the glad response of people who had seen something so great that possessions could no longer compete.',
        },
        {
          kind: 'reflection',
          id: 'acts4-security',
          prompt:
            'If you truly believed Christ was alive, that His resurrection changes everything — what would you be willing to release? What possessions, plans, or securities would lose their grip?',
        },
      ],
    },

    /* ─── Acts 4:36–37 — Barnabas Introduced ──────────────────────────── */
    {
      ref: 'Acts 4:36–37',
      title: 'Barnabas Introduced',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              36,
              t('And Joses, who by the apostles was surnamed Barnabas, (which is, being interpreted, '),
              hy('The son of consolation', 'acts4-barnabas-name'),
              t(',) a Levite, and of the country of Cyprus,'),
            ),
            verse(
              37,
              t('Having land, sold it, and brought the money, and laid it at the apostles&apos; feet.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'acts4-barnabas-name',
          title: 'Barnabas — &ldquo;Son of Encouragement&rdquo;',
          script: 'Βαρνάβας',
          translit: '<strong>Barnabas</strong> (Aramaic: <strong>bar-naba</strong>) · "son of encouragement" or "son of exhortation"',
          description:
            'His birth name was Joses. But the apostles gave him a new name that captures his function: Barnabas, son of encouragement. Not a name that describes who he is, but who he helps others become. Throughout Acts, Barnabas will be the gentle bridge-builder, the encourager of the discouraged, the one who vouches for the persecutor-turned-believer Paul when others fear him.',
        },
        {
          kind: 'commentary',
          id: 'acts4-levite-sells',
          html:
            'Barnabas is a Levite, a member of the priestly tribe. He owns land — significant wealth. And he sells it. He is not compelled to do so by any rule. He is compelled by the same spirit that compelled the others: having encountered the risen Christ, property no longer feels like security. What feels like security now is belonging to the people of God and participating in their care for one another.',
        },
        {
          kind: 'commentary',
          id: 'acts4-barnabas-embodiment',
          html:
            'Barnabas is not just an example. He is a person. His name will appear again and again in Acts. He will be Paul&apos;s first mentor, the one who stands up for Paul when he is newly converted and nobody trusts him. He will travel with Paul on the first missionary journey. He will eventually part ways with Paul over a dispute about John Mark, and yet he will believe in John Mark when Paul doubts him. All of this flows from his nature: a son of encouragement, a nurturer of new believers, a builder of bridges. The chapter ends by introducing him not with a theological statement but with a particular action. This is how you know what someone believes: watch what they do with their money.',
        },
        {
          kind: 'carry',
          html:
            'Barnabas is given a new name because of what he becomes in the community of believers. The names God gives us are not about the resume or the accomplishment. They are about who we help others become. Are you a son or daughter of encouragement? Are you the person others turn to when they are discouraged, when they are new, when they are feared by others? This name is yours to step into.',
        },
        {
          kind: 'reflection',
          id: 'acts4-encouragement',
          prompt:
            'If the apostles were to rename you based on your character in community, what would your name be? What would it take to become known as a person of encouragement?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved. And the multitude of them that believed were of one heart and of one soul, and they had all things common.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 4 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-caiaphas',
      kind: 'museum',
      source: 'Bible Odyssey (SBL)',
      label: 'Caiaphas',
      url: 'https://www.bibleodyssey.org/dictionary/caiaphas/',
      description: 'Open-access SBL entry covering the high priest and the limestone ossuary bearing his name, discovered in 1990.',
    },
    {
      id: 'bibleodyssey-sanhedrin',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Sanhedrin',
      url: 'https://www.bibleodyssey.org/dictionary/sanhedrin/',
      description: 'SBL overview of the council of seventy elders that condemned Jesus and interrogated Peter and John.',
    },
    {
      id: 'psalm2-acts4-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 2:1–2 ↔ Acts 4:25–26',
      url: 'https://intertextual.bible/text/psalm-2.1/acts-4.25',
      description: 'Side-by-side comparison of the psalmist&apos;s vision of opposition to God&apos;s anointed with the early church&apos;s prayer.',
    },
  ],

  hasHebrew: false,
};
