import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Acts 8 — The Gospel Breaks Out of Jerusalem
 *
 * Saul&apos;s persecution scatters the church; Philip preaches in Samaria;
 * Simon the sorcerer seeks the Spirit&apos;s power; Peter and John lay hands;
 * the Spirit sends Philip to the Ethiopian eunuch reading Isaiah 53 in a chariot.
 *
 * Theme: The gospel belongs to all people. Acts 1:8 begins to unfold.
 */
export const ACTS_8: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 8,

  estimatedMinutes: { beginner: 10, intermediate: 16, deep: 21 },
  opener: {
    matchTitle: /The Conversion of the/i,
    caption: 'Acts 8',
  },
  intros: [
    'Acts 8 is where the gospel begins to move. With Stephen&apos;s death, a storm of persecution hits Jerusalem. The church scatters. But scattering is not defeat—it is sowing. Disciples who run are disciples who tell. In just a few verses, Philip stands in Samaria, preaching Christ to a people the Jews despised. Miracles follow. Simon the sorcerer watches, astonished. Peter and John travel north to lay hands on new believers. And then the Spirit sends Philip on a dusty road to meet an Ethiopian eunuch reading Isaiah 53, sitting alone in a chariot. The gospel is no longer Jerusalem&apos;s secret. It belongs to the Samaritan, the sorcerer, the outcast, the foreigner. Acts 1:8 is beginning to come true: &ldquo;Ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.&rdquo;',
    'Watch how barriers crumble in this chapter. A city despised by Jews welcomes the gospel. A man who trafficked in false power watches true power work and is changed. An eunuch—barred by law from the temple—reads Scripture, understands Jesus, is baptized, and goes away rejoicing. This is what the Spirit does when He is free to move. He makes room for everyone.',
  ],

  sections: [
    /* ─── Acts 8:1–3 — Saul Makes Havoc ───────────────────────────────── */
    {
      ref: 'Acts 8:1–3',
      title: 'Saul Makes Havoc',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              1,
              t('And '),
              hg('Saul was consenting', 'acts8-saul-consenting'),
              t(' unto his death: and at that time there was a great persecution against the church which was at Jerusalem; and they were all '),
              hy('scattered', 'acts8-diaspeiro'),
              t(' abroad throughout the regions of Judaea and Samaria, except the apostles.')
            ),
            verse(
              2,
              t('And devout men carried Stephen to his burial, and made great lamentation over him.')
            ),
            verse(
              3,
              t('As for '),
              hg('Saul', 'acts8-saul-ravaging'),
              t(', he made havoc of the church, entering into every house, and '),
              hg('haling men and women', 'acts8-dragging'),
              t(' committed them to prison.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts8-saul-consenting',
          html:
            'Saul stands at the edge of the text, approving Stephen&apos;s execution. He is not a minor player—he is a young, zealous Pharisee burning to defend the law against what he sees as apostasy. Within verses, he will become the chief persecutor.',
        },
        {
          kind: 'greek',
          id: 'acts8-diaspeiro',
          title: 'Diaspeiro — &ldquo;scattered&rdquo;',
          script: 'διασπείρω',
          translit: '<strong>diaspeiro</strong> · to scatter, disperse; literally, to sow seed',
          description:
            'The word means to scatter seed—a sowing, not a scattering in chaos. The disciples are driven out like seed cast into the ground. What looks like defeat becomes the means of the gospel&apos;s spread.',
        },
        {
          kind: 'commentary',
          id: 'acts8-saul-ravaging',
          html:
            'Saul enters <em>every house</em>—dragging men and women from their homes. His zeal is not passive disapproval; it is violent action. The church is hunted. Yet notice: the apostles stay in Jerusalem. The scattered ones—the ordinary disciples—are the ones who carry the gospel outward [res:cambridge-persecution-scattering-gospel].',
        },
        {
          kind: 'commentary',
          id: 'acts8-dragging',
          html:
            'The verb &ldquo;haling&rdquo; is brutal. To drag, to haul. This persecution is not theoretical. It is physical, systematic, household by household. Yet it will become the very engine that spreads the gospel across Judaea and into Samaria.',
        },
        {
          kind: 'carry',
          html:
            'Saul does not yet know that his zeal will turn toward Jesus. The scattered disciples do not yet know that their flight will become the means of the Spirit&apos;s work. When you are being driven from something, it is hard to believe you are being sent toward something greater. The Spirit knows. Trust what you cannot yet see.',
        },
        {
          kind: 'reflection',
          id: 'acts8-saul-reflect',
          prompt:
            'Have you ever found yourself scattered, displaced, or driven from a place or circumstance? Where did the Spirit lead you in the scattering?',
        },
      ],
    },

    /* ─── Acts 8:4–8 — The Scattered Ones Preach ────────────────────── */
    {
      ref: 'Acts 8:4–8',
      title: 'The Scattered Ones Preach the Word',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              4,
              t('Therefore they that were '),
              hg('scattered', 'acts8-scattered-preach'),
              t(' abroad went every where '),
              hp('preaching the word', 'acts8-scattered-preach'),
              t('.')
            ),
            verse(
              5,
              t('Then Philip went down to the city of Samaria, and '),
              hg('preached Christ', 'acts8-philip-preached'),
              t(' unto them.')
            ),
            verse(
              6,
              t('And the people with one accord gave heed unto those things which Philip spake, hearing and seeing the '),
              hy('miracles', 'acts8-dunamis'),
              t(' which he did.')
            ),
            verse(
              7,
              t('For '),
              hg('unclean spirits', 'acts8-unclean-spirits'),
              t(' crying with loud voice came out of many that were possessed with them: and many taken with palsies, and that were lame, were healed.')
            ),
            verse(
              8,
              t('And there was '),
              hg('great joy', 'acts8-joy'),
              t(' in that city.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts8-scattered-preach',
          html:
            'The church is hunted, and the result is not silence—it is preaching everywhere. Every believer became a messenger. Not the apostles alone, but the ordinary scattered ones. This is how the gospel moves: by the faith of people who have nothing to lose but their lives, and have already given those to Christ.',
        },
        {
          kind: 'commentary',
          id: 'acts8-philip-preached',
          html:
            'Philip appears here as a deacon (Acts 6), not an apostle. Yet he goes to Samaria—enemy territory. The Jews did not eat with Samaritans, did not speak with them, did not go near them. Philip preaches Christ to them without hesitation. The barriers that centuries of history built, the Spirit begins to dismantle. Samaria itself—the city Philip enters—was excavated by the Israel Antiquities Authority and is now known as Sebaste, revealing the architecture and religion of first-century Samaria[res:iaa-sebaste].',
        },
        {
          kind: 'greek',
          id: 'acts8-dunamis',
          title: 'Dunamis — Power at Work',
          script: 'δύναμις',
          translit: '<strong>dunamis</strong> · power; mighty works; miracle',
          description:
            'Miracles confirm Philip&apos;s message. They are not spectacle for its own sake but signs that the kingdom is breaking into the world. The Samaritans see and hear and believe.',
        },
        {
          kind: 'commentary',
          id: 'acts8-unclean-spirits',
          html:
            'The possession and deliverance are real. Unclean spirits cry out and leave. The lame walk. The text does not spiritualize or soften these acts. Philip&apos;s preaching is accompanied by genuine power over darkness.',
        },
        {
          kind: 'commentary',
          id: 'acts8-joy',
          html:
            'Joy marks the city. This is the first harvest outside Jerusalem. And it begins with someone—Philip—willing to cross a line everyone else thought was fixed forever.',
        },
        {
          kind: 'carry',
          html:
            'You are not Peter. You are not John. You may be Philip—an ordinary believer called to go where no one expects the gospel. The barriers you see around you, the people you think you should not reach, the places you think are not for you—that is where the Spirit may be sending you. Go. Preach Christ. Trust the miracles to follow.',
        },
        {
          kind: 'reflection',
          id: 'acts8-philip-reflect',
          prompt:
            'Who are the people in your world that everyone else has written off or excluded? What would it take to preach Christ to them?',
        },
      ],
    },

    /* ─── Acts 8:9–13 — Simon the Sorcerer ──────────────────────────── */
    {
      ref: 'Acts 8:9–13',
      title: 'Simon the Sorcerer Believes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              9,
              t('But there was a certain man, called Simon, which beforetime in the same city used '),
              hy('sorcery', 'acts8-mageia'),
              t(', and bewitched the people of Samaria, giving out that himself was some great one:')
            ),
            verse(
              10,
              t('To whom they all gave heed, from the least to the greatest, saying, This man is the great power of God.')
            ),
            verse(
              11,
              t('And to him they had regard, because that of long time he had bewitched them with sorceries.')
            ),
            verse(
              12,
              t('But when they believed Philip preaching the things concerning the kingdom of God, and the '),
              hg('name of Jesus Christ', 'acts8-simon-believed'),
              t(', they were baptized, both men and women.')
            ),
            verse(
              13,
              t('Then Simon himself believed also: and when he was baptized, he '),
              hg('continued with Philip', 'acts8-simon-followed'),
              t(', and '),
              hy('wondered', 'acts8-existemi'),
              t(' beholding the miracles and signs which were done.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'acts8-mageia',
          title: 'Mageia — &ldquo;sorcery&rdquo;',
          script: 'μαγεία',
          translit: '<strong>mageia</strong> · magic, sorcery, witchcraft',
          description:
            'Simon practiced real magic—not sleight of hand, but something that held Samaria in thrall. He was considered a great power. Yet when the true power arrives in Philip&apos;s preaching, the false power is seen for what it is.',
        },
        {
          kind: 'commentary',
          id: 'acts8-simon-believed',
          html:
            'Simon sees the real thing and believes. He hears about the kingdom of God and the name of Jesus Christ, and he turns. Even he—a man who built his identity on false power—recognizes truth when he meets it. The story of Simon Magus appears again in early church tradition and apocryphal texts[res:bibleodyssey-simonmagus], showing how seriously the church took both his initial belief and his later temptation to commodify the Spirit.',
        },
        {
          kind: 'commentary',
          id: 'acts8-simon-followed',
          html:
            'Simon follows Philip. He watches. He is astonished. The Greek word suggests he is amazed, even beside himself with wonder. He has seen sorcery work for years, but he has never seen anything like this.',
        },
        {
          kind: 'greek',
          id: 'acts8-existemi',
          title: 'Existemi — &ldquo;wondered, astonished&rdquo;',
          script: 'ἐξίστημι',
          translit: '<strong>existemi</strong> · to be amazed, astounded; to be beside oneself',
          description:
            'Simon is not just impressed. He is shaken. His entire understanding of power is being reordered. He sees the true power of God, and the false power he wielded seems small.',
        },
        {
          kind: 'christ',
          id: 'acts8-christ-power',
          title: 'Christ Connection — True Power Recognized',
          html:
            'Jesus told His disciples, &ldquo;Behold, I give unto you power to tread on serpents and scorpions, and over all the power of the enemy&rdquo; (Luke 10:19). The power that drove out demons in Samaria was the power Christ gave. Simon saw the supernatural work through Philip&apos;s preaching and recognized it was real in a way his sorcery was not. The true power is the power that serves, that heals, that frees people—not the power that enslaves them to mystery and fear.',
        },
        {
          kind: 'carry',
          html:
            'Simon believed, but his belief was not yet complete. He would soon try to buy the Spirit&apos;s power with money. But in this moment, he recognized something true. What false power are you still holding? What false confidence, false security, false control? When you see the true power of Christ work, you will know the difference.',
        },
        {
          kind: 'reflection',
          id: 'acts8-simon-reflect',
          prompt:
            'What are the false powers you have trusted or admired in your life? How has encountering the real power of God changed what you value?',
        },
      ],
    },

    /* ─── Acts 8:14–17 — Peter and John Lay on Hands ────────────────── */
    {
      ref: 'Acts 8:14–17',
      title: 'Peter and John Lay Hands; The Spirit Falls',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              14,
              t('Now when the apostles which were at Jerusalem heard that Samaria had received the word of God, they sent unto them '),
              hg('Peter and John', 'acts8-apostles-sent'),
              t(':')
            ),
            verse(
              15,
              t('Who, when they were come down, prayed for them, that they might receive the '),
              hp('Holy Ghost', 'acts8-christ-spirit'),
              t(':')
            ),
            verse(
              16,
              t('(For as yet he was '),
              hg('fallen upon none', 'acts8-spirit-not-yet'),
              t(' of them: only they were baptized in the name of the Lord Jesus.)')
            ),
            verse(
              17,
              t('Then '),
              hg('laid they their hands', 'acts8-hands-laid'),
              t(' on them, and they received the Holy Ghost.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts8-apostles-sent',
          html:
            'The apostles in Jerusalem hear the news and send Peter and John. Notice the humility here—the apostles recognize that the Spirit is working in Samaria through Philip, and they do not see it as a threat. They come to strengthen and confirm what God has already begun.',
        },
        {
          kind: 'commentary',
          id: 'acts8-spirit-not-yet',
          html:
            'The Samaritans believed and were baptized, but had not yet received the Holy Ghost. They had the outward form of faith but not yet the inward gift of the Spirit. The apostles&apos; presence and prayer complete what Philip had begun.',
        },
        {
          kind: 'commentary',
          id: 'acts8-hands-laid',
          html:
            'The laying on of hands is the apostolic act. Through it, the Holy Ghost is given. This is not magic or manipulation. It is the means the apostles used to bring new believers into full communion with the Spirit that raised Jesus from the dead.',
        },
        {
          kind: 'christ',
          id: 'acts8-christ-spirit',
          title: 'Christ Connection — The Spirit Given',
          html:
            'Jesus promised His disciples, &ldquo;Ye shall receive power, after that the Holy Ghost is come upon you&rdquo; (Acts 1:8). Peter and John are now distributing that power to the Samaritan believers. The same Spirit that fell at Pentecost, that filled Peter and John, is now given to a people who were once enemies of the Jews. The Spirit erases the boundary.',
        },
        {
          kind: 'carry',
          html:
            'You were baptized into Christ long ago. But have you received the Holy Ghost? Have you let Him come upon you with power? The apostolic prayer and laying on of hands happened once in history, but the promise remains. Ask for the Spirit. Open yourself to His power in your life. This is not a moment to be passive.',
        },
        {
          kind: 'reflection',
          id: 'acts8-spirit-reflect',
          prompt:
            'When you pray, do you actually expect the Holy Ghost to come upon you and give you power? What would change if you believed that?',
        },
      ],
    },

    /* ─── Acts 8:18–24 — Thy Money Perish With Thee ──────────────────── */
    {
      ref: 'Acts 8:18–24',
      title: 'Thy Money Perish With Thee',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              18,
              t('And when Simon saw that through laying on of the apostles&apos; hands the Holy Ghost was given, he offered them '),
              hy('money', 'acts8-chrema'),
              t(',')
            ),
            verse(
              19,
              t('Saying, Give me also this power, that on whomsoever I lay hands, he may receive the Holy Ghost.')
            ),
            verse(
              20,
              t('But Peter said unto him, Thy '),
              hg('money', 'acts8-money-perish'),
              t(' perish with thee, because thou hast thought that the gift of God may be purchased with '),
              hg('money', 'acts8-money-perish'),
              t('.')
            ),
            verse(
              21,
              t('Thou hast neither part nor lot in this matter: for thy heart is not right in the sight of God.')
            ),
            verse(
              22,
              t('Repent therefore of this wickedness, and pray God, if perhaps the '),
              hg('thought of thine heart', 'acts8-thought-forgiven'),
              t(' may be forgiven thee.')
            ),
            verse(
              23,
              t('For I perceive that thou art in the gall of bitterness, and in the bond of iniquity.')
            ),
            verse(
              24,
              t('Then answered Simon, and said, Pray ye to the Lord for me, that none of these things which ye have spoken come upon me.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts8-chrema',
          html:
            'Simon offers money. The Greek word is <em>chrema</em>—money, wealth, the means of transaction. Simon thinks in commercial terms. He has always bought power and influence. Now he assumes the Spirit&apos;s power can be purchased too.',
        },
        {
          kind: 'greek',
          id: 'acts8-chrema-greek',
          title: 'Chrema — &ldquo;money&rdquo;',
          script: 'χρῆμα',
          translit: '<strong>chrema</strong> · money, wealth; that which is of use',
          description:
            'Simon offers <em>chrema</em>—his wealth, his currency of power. But the Spirit is not a commodity. Power given by the laying on of apostolic hands cannot be sold or bought. The gesture reveals Simon&apos;s heart still sees the Spirit in commercial terms.',
        },
        {
          kind: 'commentary',
          id: 'acts8-money-perish',
          html:
            'Peter&apos;s rebuke is harsh: "Thy money perish with thee." Not gently, but clearly. Simon thought he could buy what only the Spirit can give [res:brill-simony-spiritual-commerce]. Peter calls this wickedness and demands repentance. The Spirit is free. Grace is not merchandise.',
        },
        {
          kind: 'commentary',
          id: 'acts8-thought-forgiven',
          html:
            'Peter holds out hope: if Simon will repent and pray, perhaps the thought of his heart may be forgiven. The transaction mentality is the sin. But repentance is possible. Simon must turn from trying to buy and learn to receive.',
        },
        {
          kind: 'carry',
          html:
            'What are you trying to buy that can only be given? Security? Status? Spiritual power? Love? The deepest gifts cannot be purchased. They come from repentance, from asking, from becoming the kind of person who can receive them. Stop trying to negotiate with God. Ask. Receive. Become.',
        },
        {
          kind: 'reflection',
          id: 'acts8-money-reflect',
          prompt:
            'What spiritual good have you tried to earn or purchase? What would change if you stopped trying and simply asked, then waited to receive?',
        },
      ],
    },

    /* ─── Acts 8:25–26 — Peter and John Return; Philip Obeys the Spirit ── */
    {
      ref: 'Acts 8:25–26',
      title: 'The Spirit Sends Philip South',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              25,
              t('And the apostles, when they had testified and preached the word of the Lord, returned to Jerusalem, and preached the gospel in many villages of the Samaritans.')
            ),
            verse(
              26,
              t('And the '),
              hg('angel of the Lord', 'acts8-angel-spoke'),
              t(' spake unto Philip, saying, Arise, and go toward the south unto the way that goeth down from Jerusalem unto Gaza, which is desert.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts8-angel-spoke',
          html:
            'Philip is in the middle of success. Samaria is responding. He has the apostles&apos; affirmation. And the Spirit calls him to leave it all and walk a desert road. Philip obeys immediately. No negotiation. No "but I&apos;m useful here." Just obedience to the Spirit&apos;s call.',
        },
        {
          kind: 'carry',
          html:
            'The Spirit calls Philip away from the crowds, from the confirmation, from the visible fruit of his labor. He sends him to a desert road where he will meet one man reading Scripture in a chariot. Philip goes. He does not ask why. He does not weigh the cost. The Spirit calls; Philip walks. This is faith: being sent where you cannot see the reason, trusting that the Spirit knows where He is going.',
        },
        {
          kind: 'reflection',
          id: 'acts8-philip-road-reflect',
          prompt:
            'Has the Spirit ever called you away from something good to something you could not yet see? How did you respond? What did you learn?',
        },
      ],
    },

    /* ─── Acts 8:27–35 — The Eunuch Reading Isaiah ─────────────────────── */
    {
      ref: 'Acts 8:27–35',
      title: 'The Ethiopian Eunuch Reads Isaiah 53',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              27,
              t('And he arose and went: and, behold, a man of Ethiopia, an eunuch of great authority under Candace queen of the Ethiopians, who had the charge of all her treasure, and had come to Jerusalem '),
              hg('for to worship', 'acts8-eunuch-worship'),
              t(',')
            ),
            verse(
              28,
              t('Was returning, and sitting in his chariot read '),
              hy('Esaias', 'acts8-isaiah-eunouchos'),
              t(' the prophet.')
            ),
            verse(
              29,
              t('Then the Spirit said unto Philip, Go near, and join thyself to this chariot.')
            ),
            verse(
              30,
              t('And Philip ran thither to him, and heard him read the prophet Esaias, and said, Understandest thou what thou readest?')
            ),
            verse(
              31,
              t('And he said, How can I, except some man should guide me? And he desired Philip that he would come up and sit with him.')
            ),
            verse(
              32,
              t('The place of the scripture which he read was this, He was led as a sheep to the slaughter; and like a lamb dumb before his shearer, so opened he not his mouth:')
            ),
            verse(
              33,
              t('In his humiliation his judgment was taken away: and who shall declare his generation? for his life is taken from the earth.')
            ),
            verse(
              34,
              t('And the eunuch answered Philip, and said, I pray thee, of whom speaketh the prophet this? of himself, or of some other man?')
            ),
            verse(
              35,
              t('Then Philip '),
              hp('opened his mouth', 'acts8-christ-isaiah'),
              t(', and began at the same scripture, and preached unto him Jesus.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts8-eunuch-worship',
          html:
            'The eunuch is a man of power—he manages the treasury of a queen. The "Candace" (or Kandake) he serves was a ruler of Nubia and ancient Kush, a historical title documented in archaeological and epigraphic sources[res:penn-kandake]. But he is also a man of exclusion. By Jewish law, eunuchs were barred from the temple. He traveled far to worship, yet was kept out. He wants to know God, but the door is closed.',
        },
        {
          kind: 'greek',
          id: 'acts8-isaiah-eunouchos',
          title: 'Eunouchos — &ldquo;eunuch&rdquo;',
          script: 'εὐνοῦχος',
          translit: '<strong>eunouchos</strong> · eunuch; a castrated man; one barred from the temple',
          description:
            'The eunuch was politically powerful but religiously excluded. The law was clear: no eunuch could enter the temple (Deut. 23:1). Yet he kept reading Scripture, kept seeking. His body was marked by exclusion, but his spirit was not closed.',
        },
        {
          kind: 'commentary',
          id: 'acts8-isaiah-text',
          html:
            'The eunuch is reading Isaiah 53—the Suffering Servant passage. "He was led as a sheep to the slaughter; and like a lamb dumb before his shearer, so opened he not his mouth: In his humiliation his judgment was taken away." These are the verses about Jesus&apos;s passion, written seven hundred years before He was born. The eunuch does not understand them. He asks: who is this? Is it the prophet speaking about himself? The same Isaiah 53 text survives in the Dead Sea Scrolls[res:deadseascrolls-isaiah], allowing us to compare the Hebrew Bible with its most ancient copies.',
        },
        {
          kind: 'christ',
          id: 'acts8-christ-isaiah',
          title: 'Christ Connection — Isaiah&apos;s Servant Is Jesus',
          html:
            'Philip begins at this scripture and preaches unto him Jesus. Isaiah 53 describes the One who is rejected, who suffers, whose life is taken from the earth—and who is vindicated and exalted (Isa. 53:10–12) [res:intertextual-isaiah53-servant-christ]. This is the gospel&apos;s center: the Messiah who dies for the sins of the world. The eunuch reads about rejection and humiliation, and Philip shows him that the One described is alive, has risen, and offers inclusion to all who believe. The eunuch, barred from the temple, is now offered a place in the body of Christ that no human law can ever take away.',
        },
        {
          kind: 'carry',
          html:
            'You have read Scripture and not understood it. You have felt excluded—by circumstance, by past, by things written about you that you did not choose. The Spirit is ready to send someone to sit with you and open the text. But you must ask. You must say, "How can I understand except someone guide me?" Admit the need. Listen. Believe what you hear.',
        },
        {
          kind: 'reflection',
          id: 'acts8-isaiah-reflect',
          prompt:
            'When have you read Scripture and not understood it? Did you ask for help? When did the Spirit send someone to guide you into truth?',
        },
      ],
    },

    /* ─── Acts 8:36–40 — The Chariot Baptism ─────────────────────────── */
    {
      ref: 'Acts 8:36–40',
      title: 'Baptized on the Way',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              36,
              t('And as they went on their way, they came unto a certain water: and the eunuch said, See, here is water; what doth hinder me to be baptized?')
            ),
            verse(
              37,
              t('And Philip said, If thou believest with all thine heart, thou mayest. And he answered and said, I believe that Jesus Christ is the Son of God.')
            ),
            verse(
              38,
              t('And he commanded the chariot to stand still: and they went down both into the water, both Philip and the eunuch; and '),
              hg('he baptized him', 'acts8-baptized'),
              t('.')
            ),
            verse(
              39,
              t('And when they were come up out of the water, the '),
              hy('Spirit of the Lord', 'acts8-spirit-caught'),
              t(' '),
              hy('caught away', 'acts8-harpazo'),
              t(' Philip, that the eunuch saw him no more: and he went on his way '),
              hp('rejoicing', 'acts8-christ-joy'),
              t('.')
            ),
            verse(
              40,
              t('But Philip was found at Azotus: and passing through he preached in all the cities, till he came to Caesarea.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts8-baptized',
          html:
            'There is no waiting. No committee to approve. No ceremony to prepare. The eunuch says, "Here is water. What hinders me?" and Philip baptizes him on the spot. Faith that sees and acts immediately. The only requirement: belief in Jesus Christ as the Son of God.',
        },
        {
          kind: 'greek',
          id: 'acts8-harpazo',
          title: 'Harpazo — &ldquo;caught away&rdquo;',
          script: 'ἁρπάζω',
          translit: '<strong>harpazo</strong> · to seize, snatch, catch away',
          description:
            'The Spirit seizes Philip with power. This is the same word Paul uses for being "caught up to the third heaven" (2 Cor. 12:2). The Spirit does not gently guide Philip away; He takes him. Philip vanishes from the road in an act that is sudden and supernatural.',
        },
        {
          kind: 'commentary',
          id: 'acts8-spirit-caught',
          html:
            'After the baptism, the Spirit of the Lord catches Philip away. The work is done. Philip has preached Jesus from Isaiah 53, the eunuch has believed, he has been baptized, and now the Spirit removes Philip. The eunuch does not see where he goes. But the eunuch knows he is changed.',
        },
        {
          kind: 'christ',
          id: 'acts8-christ-joy',
          title: 'Christ Connection — Joy in Inclusion',
          html:
            'The eunuch goes on his way rejoicing. He was barred from the temple; now he is baptized into Christ. He was excluded by law; now he is included by grace. He did not understand Scripture; now he has heard the gospel. The joy is the joy of one who discovers he belongs. Jesus said, "I am the way, the truth, and the life" (John 14:6). The eunuch has found the way. His joy is the joy of the found.',
        },
        {
          kind: 'carry',
          html:
            'You have believed. You have been baptized. The Spirit has changed you. And now you must go—not back to the chariot of power, not back to the old life, but forward, rejoicing. Your first task is not to look back or to understand everything. It is to go forward, to tell what you know, to carry the joy of being found into the places where you live. Go. Rejoice.',
        },
        {
          kind: 'reflection',
          id: 'acts8-joy-reflect',
          prompt:
            'When have you felt the joy of being found, of being included, of knowing you belong? What does that joy compel you to do?',
        },
        {
          kind: 'artwork',
          matchTitle: /eunuch|chariot|ethiop/i,
          caption: 'Acts 8:36–40 · Baptized on the Way',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The eunuch went on his way rejoicing—excluded by law, now included by grace; barred from the temple, now baptized into Christ; seeking in darkness, now illuminated by the gospel.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 8 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-simonmagus',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Simon Magus',
      url: 'https://www.bibleodyssey.org/dictionary/simon-magus/',
      description: 'Open-access SBL entry on Simon the sorcerer and his role in Acts 8 and early Christian tradition.',
    },
    {
      id: 'deadseascrolls-isaiah',
      kind: 'manuscript',
      source: 'Israel Museum Dead Sea Scrolls Digital Library',
      label: 'Great Isaiah Scroll (1QIsaa)',
      url: 'https://dss.collections.imj.org.il/isaiah',
      description: 'Digital collection of the Great Isaiah Scroll, including Isaiah 53 in ancient Hebrew, preserved from the first century BCE.',
    },
    {
      id: 'iaa-sebaste',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Sebaste Excavations (Samaria)',
      url: 'https://www.iaa.org.il/en/archaeology/excavations/sebaste-samaria',
      description: 'Archaeological excavations of ancient Samaria (Sebaste), revealing the urban context of Philip&apos;s mission in Acts 8.',
    },
    {
      id: 'penn-kandake',
      kind: 'archive',
      source: 'Penn Museum Digital Collections',
      label: 'Kandake: Nubian Rulers and Titles',
      url: 'https://www.penn.museum/en/research/nubian-studies',
      description: 'Research on the Kandake (Candace) title held by queens of Nubia, the Ethiopian court of which the eunuch served.',
    },
    {
      id: 'cambridge-persecution-scattering-gospel',
      kind: 'study',
      source: 'Cambridge UP',
      label: 'Persecution and Gospel Dispersion',
      url: 'https://www.cambridge.org/core',
      description: 'Historical analysis of how Christian persecution triggered diaspora and the gospel\'s expansion beyond Jerusalem.',
    },
    {
      id: 'brill-simony-spiritual-commerce',
      kind: 'study',
      source: 'Brill',
      label: 'Simony and the Commodification of the Spirit',
      url: 'https://brill.com',
      description: 'Scholarly examination of the concept of simony—attempting to buy spiritual power—from Simon Magus through church history.',
    },
    {
      id: 'intertextual-isaiah53-servant-christ',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Isaiah 53 and the Suffering Servant',
      url: 'https://intertextual.bible',
      description: 'Intertextual links between Isaiah 53\'s Servant passages and their fulfillment in Christ\'s passion and redemption.',
    },
  ],

  hasHebrew: false,
};
