import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Acts 10 — Cornelius and the Gentile Pentecost
 *
 * The gospel crosses its greatest boundary. A Roman centurion named Cornelius,
 * devout and prayer-filled, receives a vision. Peter, on a rooftop in Joppa,
 * sees a sheet of unclean animals descend from heaven. The Spirit tells him to
 * eat. Peter refuses. But the Spirit insists: "What God hath cleansed, call not
 * common." The vision breaks the law inside Peter. When Cornelius's men arrive,
 * Peter goes with them—an act no faithful Jew would ever commit. He enters a
 * Gentile house. He preaches Christ. And before he finishes speaking, the Holy
 * Spirit falls on the Gentiles exactly as it fell on the Jews at Pentecost.
 * The wall between Jew and Gentile, erected by centuries of law and custom,
 * collapses in a single breath.
 */
export const ACTS_10: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 10,

  estimatedMinutes: { beginner: 8, intermediate: 17, deep: 22 },
  opener: {
    matchTitle: /What God Has Cleansed/i,
    caption: 'Acts 10',
  },
  intros: [
    'For eight chapters, the gospel has been spreading through Jerusalem and Judea. Peter heals the lame beggar. Stephen is martyred. Philip baptizes the Ethiopian eunuch on the road. But a question hangs in the air: Is this good news for Jews alone, or for all people? Jesus had said the disciples would be witnesses in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth. Peter has moved slowly toward Samaria. Now he must move toward Rome. And his first step is to cross a boundary so deep that it takes a vision from heaven—not once, but twice—to shake him loose from it.',
    'The law of Moses divided the world into clean and unclean, Jew and Gentile, those who belonged to God and those who did not. A faithful Jew did not eat with a Gentile. Did not enter a Gentile house. This was not cruelty—it was obedience, identity, the mark of a chosen people. Peter kept these laws with his whole heart. But now the Spirit is going to unmake them. Not by erasing the law, but by fulfilling it. The sheet descending from heaven is the gospel made visible: no one is outside the reach of God&apos;s love. No category is final. No person is unclean.',
    'What happens at Cornelius&apos;s house is sometimes called the "Gentile Pentecost." The Spirit falls exactly as at Pentecost, on people who have not been circumcised, who have not kept the law, who were born outside the covenant. They speak in tongues. They magnify God. They are baptized. And in that moment, Acts has turned a corner. The movement toward Rome has begun. The gospel, once confined to the boundaries of Jewish law, is breaking free—not to destroy the law, but to show what the law always pointed toward: a God who loves the world, and loves it without exception.',
  ],

  sections: [
    /* ─── Acts 10:1–8 — Cornelius the Devout Centurion ──────────────────── */
    {
      ref: 'Acts 10:1–8',
      title: 'Cornelius the Devout Centurion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(1,
              t('There was a certain man in Caesarea called '),
              hg('Cornelius', 'acts10-cornelius'),
              t(', a centurion of the band called the Italian band [res:met-roman-military-equipment],')
            ),
            verse(2,
              t('A '),
              hy('devout', 'greek-eulabeis'),
              t(' man, and one that feared God with all his house, which gave '),
              hg('much alms', 'acts10-alms'),
              t(' to the people, and prayed to God alway.')
            ),
            verse(3,
              t('He saw in a vision evidently about the ninth hour of the day an angel of God coming in to him, and saying unto him, Cornelius.')
            ),
            verse(4,
              t('And when he looked on him, he was afraid, and said, What is it, Lord? And he said unto him, '),
              hp('Thy prayers and thine alms are come up for a memorial before God', 'acts10-christ-acceptance'),
              t('.')
            ),
            verse(5,
              t('And now send men to Joppa, and call for one Simon, whose surname is Peter:')
            ),
            plain(6, 'He lodgeth with one Simon a tanner, whose house is by the sea side: he shall tell thee what thou oughtest to do.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts10-cornelius',
          html:
            'Cornelius is a Roman soldier[res:centurion-roman-rank], a foreigner, a man who has never been circumcised, never kept the Jewish law. By the standards of Jewish purity, he is outside the covenant. Yet he prays. He fears God. He gives alms. The first thing Luke wants you to know about the moment the gospel reaches the Gentiles is that a Gentile is already seeking God before Peter ever arrives.',
        },
        {
          kind: 'greek',
          id: 'greek-eulabeis',
          title: 'Eulabēs — Devout',
          script: 'εὐλαβής',
          translit: '<strong>eulabēs</strong> · reverent; pious; one who fears God',
          description:
            'The word suggests careful obedience, a holding fast to what is sacred. Cornelius is not a casual believer. He is a man who takes his worship seriously—a Roman who has learned to pray to the God of Israel.',
        },
        {
          kind: 'commentary',
          id: 'acts10-alms',
          html:
            'His prayers and alms have come up as a memorial before God. This is a striking phrase. It echoes Leviticus language. In the old law, an offering was made and remembered. Now, in this moment, the Spirit is declaring that a Gentile&apos;s prayer and charity are themselves a kind of offering—a sign that God sees and honors a sincere heart, even outside the boundaries of the law.',
        },
        {
          kind: 'christ',
          id: 'acts10-christ-acceptance',
          title: 'Christ Connection — God Sees the Heart',
          html:
            'Jesus taught that righteousness is not measured by external markers—not by phylacteries or broad prayer-borders, not by tithing mint and anise while neglecting mercy. "Man looketh on the outward appearance, but the Lord looketh on the heart" (1 Sam. 16:7). Cornelius stands before the angel not because he has kept the law, but because his heart is bent toward God. The gospel is already working in him before Peter arrives.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever felt outside the circle—too late to faith, too broken, too far from the center—take this: Cornelius&apos;s prayers were heard. His charity was noticed. God saw him praying in a house that was not the temple, in a language that was not his heritage, with a heart he had to teach himself to open. Your sincere seeking, even in the dark, is not wasted. The Spirit already knows where to find you.',
        },
        {
          kind: 'reflection',
          id: 'acts10-seeking',
          prompt:
            'Cornelius prayed without knowing fully who he was praying to. Where in your own life are you seeking God without yet knowing the full shape of what you&apos;re seeking?',
        },
      ],
    },

    /* ─── Acts 10:9–16 — Peter on the Rooftop ───────────────────────────── */
    {
      ref: 'Acts 10:9–16',
      title: 'Peter on the Rooftop',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(9,
              t('On the morrow, as they went on their journey, and '),
              hg('drew nigh unto the city', 'acts10-nigh'),
              t(', Peter went up upon the housetop to pray about the sixth hour:')
            ),
            verse(10,
              t('And he became very hungry, and would have eaten: but while they made ready, '),
              hp('he fell into a trance', 'acts10-vision'),
              t(';')
            ),
            verse(11,
              t('And saw heaven opened, and a certain vessel descending unto him, as it had been a great sheet knit at the four corners, and let down to the earth:')
            ),
            verse(12,
              t('Wherein were all manner of '),
              hy('four footed beasts of the earth', 'greek-ktenos'),
              t(', and wild beasts, and creeping things, and fowls of the air.')
            ),
            verse(13,
              t('And there came a voice to him, Rise, Peter; '),
              hg('kill, and eat', 'acts10-eat'),
              t('.')
            ),
            verse(14,
              t('But Peter said, '),
              hg('Not so, Lord', 'acts10-resistance'),
              t('; for I have never eaten any thing that is common or '),
              hy('unclean', 'greek-koinos'),
              t('.')
            ),
            verse(15,
              t('And the voice spake unto him again the second time, '),
              hp('What God hath cleansed, that call not thou common', 'acts10-christ-cleansing'),
              t('.')
            ),
            plain(16, 'This was done thrice: and the vessel was received up again into heaven.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts10-nigh',
          html:
            'The servants of Cornelius are approaching Joppa. Peter is on the rooftop, praying at midday, hungry. He is on the threshold of something that will change him forever. But he does not know it yet.',
        },
        {
          kind: 'commentary',
          id: 'acts10-vision',
          html:
            'A trance. The Spirit enters and opens his inner eye [res:theoi-visions-divine-voices]. Peter is lifted out of his ordinary consciousness, shown something that will break his oldest assumptions about what is clean and what is unclean. Note that he is hungry. His body is alive and awake. This is not a dream. It is a vision, and visions in Scripture are closer to reality than dreams.',
        },
        {
          kind: 'greek',
          id: 'greek-ktenos',
          title: 'Ktēnos — Beasts',
          script: 'κτῆνος',
          translit: '<strong>ktēnos</strong> · a living creature; cattle; beast',
          description:
            'Among these beasts would be pigs, which the Jewish law forbids eating. Camels, which are clean in some ways but not in others. A sheet full of the animals that have organized Peter&apos;s entire life into categories of acceptable and forbidden.',
        },
        {
          kind: 'commentary',
          id: 'acts10-eat',
          html:
            'The command is not gentle. "Kill and eat." This is not a suggestion. Peter is being asked to do something he has never done in his life—to violate the law he has kept from childhood. The law of Moses was not a suggestion either. It was the mark of obedience to God. Now God Himself seems to be commanding him to break it.',
        },
        {
          kind: 'greek',
          id: 'greek-koinos',
          title: 'Koinos — Common',
          script: 'κοινός',
          translit: '<strong>koinos</strong> · common; shared; unclean',
          description:
            'The Greek word koinos means both "common" and "unclean"—but in the context of Jewish law, it carries the weight of ritual defilement. To eat something koinos was to become unclean yourself, separated from worship until you were purified again. Peter is not refusing for hunger&apos;s sake. He is holding to a line he has drawn between himself and the unclean.',
        },
        {
          kind: 'commentary',
          id: 'acts10-resistance',
          html:
            'Peter&apos;s refusal is not disobedience. It is faithfulness to what he has been taught. His word—"Not so, Lord"—is the word of a man who believes the law is holy and righteous. He is defending the boundary that made him who he is—the dietary laws[res:leviticus-food-laws] that marked a Jew as set apart. The vision will come three times. It takes that persistence to crack the stone.',
        },
        {
          kind: 'christ',
          id: 'acts10-christ-cleansing',
          title: 'Christ Connection — What Christ Made Clean',
          html:
            'Jesus already taught this. "Not that which goeth into the mouth defileth a man; but that which cometh out of the mouth, this defileth a man" (Matt. 15:11). And Mark interprets Jesus&apos; words directly: "Thus he made all meats clean" (Mark 7:19). Peter heard these words when Jesus was alive. Now, in the vision, the Spirit is making him understand them. The cross has not nullified the law. It has fulfilled it. All things can be received with thanksgiving.',
        },
        {
          kind: 'carry',
          html:
            'You have drawn lines that felt holy once. Clean and unclean. In and out. Safe and dangerous. Some of those lines protected you. Some of them imprisoned you. The Spirit&apos;s work is often to ask you to step across the lines you built to keep yourself whole. Not because the line was evil, but because you have grown. What felt like faithfulness once may be faithfulness in a new form now.',
        },
        {
          kind: 'reflection',
          id: 'acts10-vision-2',
          prompt:
            'What lines have you drawn that once felt righteous? What is the Spirit asking you to reconsider?',
        },
      ],
    },

    /* ─── Acts 10:17–23 — The Men at the Gate ─────────────────────────── */
    {
      ref: 'Acts 10:17–23',
      title: 'The Men at the Gate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(17,
              t('Now while Peter doubted in himself what this vision which he had seen should mean, behold, '),
              hg('the men which were sent from Cornelius', 'acts10-men'),
              t(' had made enquiry for Simon&apos;s house, and stood before the gate,')
            ),
            verse(19,
              t('While Peter thought on the vision, '),
              hg('the Spirit said unto him', 'acts10-spirit-says'),
              t(', Behold, three men seek thee.')
            ),
            verse(20,
              t('Arise therefore, and get thee down, and accompany them, '),
              hy('doubting nothing', 'greek-diakrino'),
              t(': for I have sent them.')
            ),
            plain(23, 'Then called he them in, and lodged them. And on the morrow Peter went away with them, and certain brethren from Joppa accompanied him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts10-men',
          html:
            'Three men, sent by a Gentile, stand at the gate of a Jewish house. They are asking for Simon Peter. Normally, such a request would be impossible. A man of the law does not go with Gentiles. Does not enter their house. Does not eat at their table. The very idea violates centuries of custom and covenant.',
        },
        {
          kind: 'commentary',
          id: 'acts10-spirit-says',
          html:
            'The Spirit speaks immediately. Not with delay, not with ambiguity. The vision has not yet been understood, but the Spirit moves while Peter is still confused. "Three men seek thee. Go with them." Peter has been given the vision. Now he is given the command. The Spirit does not wait for him to reason his way to understanding. He asks for obedience first.',
        },
        {
          kind: 'greek',
          id: 'greek-diakrino',
          title: 'Diakrino — Doubting',
          script: 'διακρίνω',
          translit: '<strong>diakrino</strong> · to distinguish; to doubt; to judge',
          description:
            'The Spirit commands Peter not to diakrino—not to distinguish, not to judge, not to doubt. In other words, do not apply the old categories. Do not ask whether these men are clean or unclean. Do not hesitate. Go.',
        },
        {
          kind: 'commentary',
          id: 'acts10-lodged',
          html:
            'Peter invites them in. He gives them a place to sleep. This is already an act of table-fellowship, a crossing of the boundary [res:cambridge-gentile-inclusion-boundaries]. Peter is beginning to obey before he fully understands. And in that obedience, he is learning.',
        },
        {
          kind: 'carry',
          html:
            'Often the Spirit asks us to move before we can see the whole picture. You do not need to understand everything before you obey. You need to hear the Spirit, and step. Peter did not fully grasp the vision. But he went. And in the going, the vision became clear. This is how faith works: one foot forward, and then the next.',
        },
        {
          kind: 'reflection',
          id: 'acts10-obedience',
          prompt:
            'What is the Spirit asking you to do before you fully understand why? What would change if you took that step?',
        },
      ],
    },

    /* ─── Acts 10:24–33 — Peter Enters a Gentile House ──────────────────── */
    {
      ref: 'Acts 10:24–33',
      title: 'Peter Enters a Gentile House',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(24,
              t('And '),
              hg('the morrow after', 'acts10-morrow'),
              t(' they entered into Caesarea. And Cornelius waited for them, and he had called together his kinsmen and his near friends.')
            ),
            verse(25,
              t('And as Peter was coming in, Cornelius '),
              hg('met him, and fell down at his feet', 'acts10-meet'),
              t(', and worshipped him.')
            ),
            verse(26,
              t('But Peter took him up, saying, '),
              hg('Stand up; I myself also am a man', 'acts10-peter-man'),
              t('.')
            ),
            verse(28,
              t('And he said unto them, '),
              hp('Ye know how that it is an unlawful thing for a man that is a Jew to keep company, or come unto one of another nation', 'acts10-unlawful'),
              t('; but God hath shewed me that I should not call any man '),
              hg('common or unclean', 'acts10-common-unclean'),
              t('.')
            ),
            verse(34,
              t('Then Peter opened his mouth, and said, '),
              hg('Of a truth I perceive', 'acts10-perceive'),
              t(', that God is '),
              hy('no respecter of persons', 'greek-aprosopolemptos'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts10-morrow',
          html:
            'Peter has spent the night in the house of a Gentile. This alone is a breaking of the law. But he goes through with it. He enters Caesarea[res:caesarea-archaeology]—a Roman port city. He is walking into a room full of Gentiles—Cornelius&apos;s kinsmen and friends. Not one of them is circumcised. Not one of them has kept the law. Yet Peter enters the house.',
        },
        {
          kind: 'commentary',
          id: 'acts10-meet',
          html:
            'Cornelius falls at Peter&apos;s feet. This is the posture of a worshipper toward a god. The angel had told him to send for Peter, and now Peter has come. Cornelius&apos;s faith is running ahead of understanding. He knows this man has been sent by God.',
        },
        {
          kind: 'commentary',
          id: 'acts10-peter-man',
          html:
            'But Peter stops him. "Stand up. I am a man." Peter is not a god. He has no power except the power God gives him. This is one of the most human moments in Acts. Peter, who will soon be called the leader of the church, cannot accept worship. He is a vessel, nothing more.',
        },
        {
          kind: 'commentary',
          id: 'acts10-unlawful',
          html:
            'Peter speaks to the house. He is explaining what his presence here means. For a Jew to enter a Gentile house was not just improper. It was unlawful—against the law. Peter is naming the boundary he has just crossed. He is making it explicit. And he is saying that God has shown him he should not call any man common or unclean.',
        },
        {
          kind: 'greek',
          id: 'greek-aprosopolemptos',
          title: 'Aprosōpolēmptos — No Respecter of Persons',
          script: 'ἀπροσωπόλημπτος',
          translit: '<strong>aprosōpolēmptos</strong> · not accepting the face; impartial; no respecter of persons',
          description:
            'The word literally means "not accepting the face"—not judging by external appearance, by status, by whether someone is circumcised or not. God looks at the heart, not the face.',
        },
        {
          kind: 'commentary',
          id: 'acts10-common-unclean',
          html:
            'Peter says the word aloud: koinos. Common. Unclean. He says it to a room full of people who have been called by that name their whole lives. He is declaring that the word no longer divides the world. The vision has become understanding. The vision has become theology.',
        },
        {
          kind: 'commentary',
          id: 'acts10-perceive',
          html:
            'Now I perceive. Peter is learning. He came with the vision. He came in obedience. And now, standing in Cornelius&apos;s house, surrounded by Gentiles who are listening to him speak, he understands. God does not have two kinds of people—Jews and Gentiles, clean and unclean. God has one kind: beloved.',
        },
        {
          kind: 'carry',
          html:
            'Every boundary you have crossed has taught you something about who you are and who God is. When you entered a room you thought you should not enter, when you spoke to a person you thought was beyond reach, when you set down a category you thought was eternal—that crossing has been your teacher. The Spirit works not by revelation alone, but by the willingness to step across the line.',
        },
        {
          kind: 'reflection',
          id: 'acts10-house',
          prompt:
            'What person or community have you been taught to keep at a distance? What would it mean to enter that house and say, "I perceive that God is no respecter of persons"?',
        },
      ],
    },

    /* ─── Acts 10:34–43 — Peter Preaches Christ ──────────────────────────── */
    {
      ref: 'Acts 10:34–43',
      title: 'Peter Preaches Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(34,
              t('Then Peter opened his mouth, and said, Of a truth I perceive that God is no respecter of persons:')
            ),
            verse(35,
              t('But in every nation he that feareth him, and worketh righteousness, is accepted with him.')
            ),
            verse(36,
              t('The word which God sent unto the children of Israel, preaching peace by Jesus Christ: (he is Lord of all:)')
            ),
            verse(37,
              t('That word, I say, ye know, which was published throughout all Judaea, and began from Galilee, after the baptism which John preached;')
            ),
            verse(38,
              t('How God anointed '),
              hp('Jesus of Nazareth with the Holy Ghost and with power', 'acts10-anointing'),
              t(': who went about doing good, and healing all that were oppressed of the devil; for God was with him.')
            ),
            verse(39,
              t('And we are witnesses of all things which he did both in the land of the Jews, and in Jerusalem; whom they slew and hanged on a tree:')
            ),
            verse(40,
              t('Him God raised up the third day, and shewed him openly;')
            ),
            verse(43,
              t('To him give all the prophets witness, that through his name whosoever believeth in him shall receive remission of sins.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts10-fear-god',
          html:
            'Peter announces the principle that has just broken open his own heart: in every nation, he that fears God and works righteousness is accepted with Him. Cornelius is the proof. He had no Scripture, no law of Moses, no temple. But he feared God and gave alms. He was accepted. The boundary was already broken before Peter arrived.',
        },
        {
          kind: 'commentary',
          id: 'acts10-peace',
          html:
            'Jesus is Lord of all. Not Lord of the Jews alone. Not Lord of those who have kept the law. Lord of all. The word God sent to Israel preached peace—reconciliation, a mending of the breach between God and creation, between Jew and Gentile, between the clean and the unclean.',
        },
        {
          kind: 'commentary',
          id: 'acts10-anointing',
          html:
            'Jesus was anointed with the Holy Ghost and with power. This is the language of the Old Testament anointing—of kings, of priests. Jesus is being described as the anointed one. But not in a political way. His power is the power to heal, to deliver, to free those oppressed by evil. God was with Him. Not by the law, but by the Spirit.',
        },
        {
          kind: 'christ',
          id: 'acts10-christ-anointed',
          title: 'Christ Connection — The Anointed One in Power',
          html:
            'Peter says Jesus was "anointed with the Holy Ghost and with power." This echoes the psalms and the prophets—the Messiah would be anointed by God. But it also shows how the early church understood Christ&apos;s authority. Not through institutional power, but through the Spirit. His miracles, His healing, His authority over demons—all flowed from God working through Him. Even now, at the right hand of the Father, He is the one through whom power flows.',
        },
        {
          kind: 'carry',
          html:
            'The gospel Peter preaches has no walls. Jesus did not heal only the righteous. He did not cast out demons only from those who had kept the law. He healed the sick. He freed the bound. He welcomed the outcast. When you encounter someone the world has rejected, Jesus has already claimed them. Your only question is whether you will recognize Him in their face.',
        },
        {
          kind: 'reflection',
          id: 'acts10-gospel',
          prompt:
            'Peter preaches a Jesus who healed all that were oppressed, without exception. Where in your own life is the Spirit calling you to extend healing or welcome beyond your usual boundaries?',
        },
      ],
    },

    /* ─── Acts 10:44–48 — The Spirit Falls on Gentiles ───────────────────── */
    {
      ref: 'Acts 10:44–48',
      title: 'The Spirit Falls on Gentiles',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(44,
              t('While Peter yet spake these words, '),
              hp('the Holy Ghost fell on all them which heard the word', 'acts10-spirit-falls'),
              t('.')
            ),
            verse(45,
              t('And they of the circumcision which believed were astonished, as many as came with Peter, '),
              hg('because that on the Gentiles also was poured out the gift of the Holy Ghost', 'acts10-gift'),
              t('.')
            ),
            verse(46,
              t('For they heard them '),
              hy('speak with tongues', 'greek-glossa'),
              t(', and magnify God. Then answered Peter,')
            ),
            verse(47,
              t('Can any man forbid water, that these should not be baptized, which have received the Holy Ghost as well as we?')
            ),
            plain(48, 'And he commanded them to be baptized in the name of the Lord. Then prayed they him to tarry certain days.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts10-spirit-falls',
          html:
            'The Spirit falls while Peter is still speaking. Not after, not later—but in the very moment of the word. The same Spirit that fell at Pentecost[res:acts10-pentecost-parallel], filling the house with wind and fire, now falls on Gentiles in a house in Caesarea. There is no hesitation in the Spirit. No checking of credentials. No waiting to see if they keep the law. The Spirit falls on them because they have heard the word and believed.',
        },
        {
          kind: 'commentary',
          id: 'acts10-gift',
          html:
            'The Jewish believers who came with Peter are astonished. They have witnessed something they thought impossible. The gift—the doron, the grace—has been poured out on Gentiles. Not as a concession. Not as a lesser gift. The same gift, poured out the same way. The very thing that makes you a believer, the very presence that filled the first church, is now filling this Gentile house.',
        },
        {
          kind: 'greek',
          id: 'greek-glossa',
          title: 'Glōssa — Tongues',
          script: 'γλῶσσα',
          translit: '<strong>glōssa</strong> · tongue; language; speech',
          description:
            'The sign is the same as at Pentecost. They speak in languages they have not learned. In a few moments, every person in that room will understand that there is no difference between the Spirit&apos;s work in Jew and Gentile. The boundary has not just been crossed. It has been erased.',
        },
        {
          kind: 'commentary',
          id: 'acts10-water',
          html:
            'Peter does not hesitate. His question is rhetorical. Can anyone forbid water? The answer is no. If they have received the Spirit, if they speak in tongues just as we did, if they magnify God just as we do—who am I to say they should not be baptized? Peter is reading the signs. The Spirit has already chosen. He is only confirming what the Spirit has done.',
        },
        {
          kind: 'carry',
          html:
            'When you see the Spirit at work in someone you thought was outside the grace, you have only one choice: to confirm what God has already done. Not to question. Not to hesitate. To see what the Spirit sees, and to say yes. Peter&apos;s willingness to be surprised by the Spirit, to have his categories broken, made him a witness to something unprecedented. Where is the Spirit surprising you with His presence?',
        },
        {
          kind: 'reflection',
          id: 'acts10-spirit-falls-2',
          prompt:
            'Peter had to watch the Spirit work on Gentiles before he could fully believe it was happening. Where in your own life have you been surprised by the Spirit working in someone you thought was beyond His reach?',
        },
        {
          kind: 'artwork',
          matchTitle: /peter|cornelius|vision|gentile/i,
          caption: 'Acts 10:44–48 · The Spirit Falls on Gentiles',
        },
      ],
    },

    /* ─── Divider ──────────────────────────────────────────────────────── */
    {
      blocks: [{ kind: 'divider' }],
    },

    /* ─── Acts 1:8 Fulfilled ───────────────────────────────────────────── */
    {
      ref: 'The Gospel at the Uttermost',
      title: 'The Word Goes to All Nations',
      blocks: [
        {
          kind: 'commentary',
          id: 'acts10-uttermost',
          html:
            'In Acts 1:8, Jesus told the disciples they would be witnesses in Jerusalem, in Judea and Samaria, and to the uttermost parts of the earth. Acts 2 showed them being witnesses in Jerusalem—on Pentecost, three thousand were baptized in the city. Acts 8 pushed them into Samaria and beyond—Philip baptized the Ethiopian eunuch on the desert road, and Peter and John laid hands on believers in Samaria. Now, in Acts 10, the gospel crosses its greatest boundary. It reaches the Gentile world. The centurion Cornelius, a Roman soldier, is filled with the Spirit and baptized. The movement toward Rome has begun. And the rest of Acts will be the unfolding of that movement—Paul will carry the gospel to the uttermost parts of the earth, and everywhere he goes, both Jews and Gentiles will hear the word.',
        },
        {
          kind: 'christ',
          id: 'acts10-christ-commission',
          title: 'Christ Connection — The Great Commission Unfolds',
          html:
            'Jesus had commissioned His disciples: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost" (Matt. 28:19). Peter and the Jerusalem church had to learn, step by step, what that commission meant. It meant crossing boundaries they thought were eternal. It meant eating with Gentiles. It meant preaching to those outside the law. But Acts 10 shows that it was always Christ&apos;s intention. The Gentile Pentecost is not an exception or an afterthought. It is the unveiling of what the resurrection always meant: reconciliation to all people, without exception.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'God is no respecter of persons, but in every nation he that feareth Him and worketh righteousness is accepted with Him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 10 · Study Guide',
  },

  resources: [
    {
      id: 'caesarea-archaeology',
      kind: 'archaeology',
      source: 'Bible Odyssey (SBL)',
      label: 'Caesarea',
      url: 'https://www.bibleodyssey.org/dictionary/caesarea/',
      description: 'The port city where Cornelius was stationed; ongoing excavations reveal temples, theaters, and the harbor of Herod&apos;s engineering.',
    },
    {
      id: 'leviticus-food-laws',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 11',
      url: 'https://www.sefaria.org/Leviticus.11?lang=he',
      description: 'Hebrew text and English translation of the dietary laws that Peter had kept his whole life—the boundary the vision breaks.',
    },
    {
      id: 'centurion-roman-rank',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Centurion',
      url: 'https://www.bibleodyssey.org/dictionary/centurion/',
      description: 'Military rank and role in the Roman occupation force; Cornelius commanded a hundred soldiers in the Italian Cohort.',
    },
    {
      id: 'acts10-pentecost-parallel',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Acts 2:1–4 ↔ Acts 10:44–46',
      url: 'https://intertextual.bible/text/acts-2.1-4/acts-10.44-46',
      description: 'Side-by-side comparison of the Jewish Pentecost and the Gentile Pentecost—the same Spirit falling on both.',
    },
    {
      id: 'cambridge-gentile-inclusion-boundaries',
      kind: 'study',
      source: 'Cambridge UP',
      label: 'Breaking Boundaries: Gentile Inclusion',
      url: 'https://www.cambridge.org/core',
      description: 'Historical analysis of how the early church overcame cultural and legal boundaries to include Gentile converts without circumcision.',
    },
    {
      id: 'met-roman-military-equipment',
      kind: 'museum',
      source: 'Metropolitan Museum',
      label: 'Roman Military Arms and Equipment',
      url: 'https://www.metmuseum.org',
      description: 'Museum collection of Roman military artifacts and equipment illustrating the rank and authority of Roman centurions like Cornelius.',
    },
    {
      id: 'theoi-visions-divine-voices',
      kind: 'archive',
      source: 'Theoi',
      label: 'Divine Visions and Heavenly Voices',
      url: 'https://www.theoi.com',
      description: 'Ancient sources on visionary experiences and divine voices, paralleling Peter\'s sheet vision and the voice calling him to eat unclean things.',
    },
  ],

  hasHebrew: false,
};
