import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 2 — The Letters to the Seven Churches
 *
 * Christ walks among the candlesticks. Now He speaks. To Ephesus and Smyrna,
 * to Pergamos and Thyatira—four letters in the same voice, the same pattern.
 * Each church hears its own name called. Each hears what Christ sees. Each
 * faces a choice: repent or be removed. Each hears the promise to the overcomer.
 */
export const REVELATION_2: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 2,

  intros: [
    'Revelation 2 opens the great dialogue between the exalted Christ and His churches. He does not send a messenger; He speaks Himself. "Unto the angel of the church" of each city, His words arrive with the authority of the one who holds the seven stars and walks among the candlesticks. Each letter follows the same fivefold shape: the city is named, Christ identifies Himself with an image drawn from the vision in chapter 1, He declares "I know thy works," He offers both commendation and correction, and He closes with a promise to him that overcometh and a call to hear what the Spirit saith unto the churches.',
    'These are not letters to generic Christianity but to real churches in real cities facing real pressures. Some are holding fast to the faith. Others have drifted. Some face persecution from without; others from false teaching within. Yet in every case, Christ sees. He knows the works. And He calls to repentance with the tenderness of a shepherd and the authority of a king.',
  ],

  opener: {
    matchTitle: /letters.*churches|seven churches/i,
    caption: 'Christ Speaks to the Seven Churches',
  },

  sections: [
    /* ─── Ephesus: The First Church ──────────────────────────────────────── */
    {
      ref: 'Revelation 2:1–7',
      title: 'Ephesus — The Church That Left Its First Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'Unto the angel of the church of Ephesus write; These things saith he that holdeth the seven stars in his right hand, who walketh in the midst of the seven golden candlesticks;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph-intro',
          html:
            'Ephesus was the greatest city in Asia Minor—a cosmopolitan hub, home to the temple of Artemis, one of the Seven Wonders of the ancient world. The church there was founded by Paul (Acts 18:19), later pastored by Timothy, and eventually led by John the apostle himself according to tradition. It is a church with apostolic roots, with history, with gravitas. Yet Christ opens His letter to Ephesus by reminding them that He walks among them.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(2, 'I know thy works, and thy labour, and thy patience, and how thou canst not bear them which are evil: and thou hast tried them which say they are apostles, and are not, and hast found them liars:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph-works',
          html:
            'Ephesus earns unqualified praise. Their <em>works</em> are visible. Their <em>labour</em> is real—they are building, serving, holding the line. Their <em>patience</em> is active, not passive—they endure persecution without wavering. They test those who claim to be apostles and expose the false ones. This is a church that has not abandoned the faith or compromised with the surrounding culture. By every external measure, they are faithfully done.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(3, 'And hast borne, and hast patience, and for my name&apos;s sake hast laboured, and hast not fainted:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph-patience',
          html:
            'They have borne trials. They have persisted. They have laboured specifically "for my name&apos;s sake"—their work is not for reputation or success but for the sake of Christ. And they have not fainted—they have not given in to weariness or despair. By any measure of Christian virtue, they are exemplary.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(4, 'Nevertheless I have somewhat against thee, because thou hast left thy first love.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph-first-love',
          html:
            'And then Christ stops. "Nevertheless." The word &apos;agapē&apos; in Greek carries layers of meaning—self-giving love, love that seeks nothing in return, love that is the essence of God Himself. But Ephesus has left it. Their love for Christ has cooled. The fire that first kindled their faith—the passionate devotion to Jesus Himself—has become embers. Their works persist. Their orthodoxy holds. But their first love is gone.',
        },

        {
          kind: 'greek',
          id: 'greek-agape',
          title: 'Agapē — First Love',
          script: 'ἀγάπη',
          translit: '<strong>agapē</strong> · self-giving love; covenantal love; the love of God',
          description:
            'Agapē is the highest form of love in New Testament vocabulary. It is chosen and intentional, not contingent on the beloved&apos;s worthiness. Christ loved us with agapē and laid down His life. Ephesus once loved Christ with this same love. But their agapē has cooled, and only the structure of their faith remains.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(5, 'Remember therefore from whence thou art fallen, and repent, and do the first works; or else I will come unto thee quickly, and will remove thy candlestick out of his place, except thou repent.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph-repent',
          html:
            'Christ does not say they have fallen into sin. He says they have fallen from a state—a state of passionate love. He calls them to remember. Repent. Do the first works—not new works, not more works, but <em>the first works</em>, the ones kindled by first love. The threat is real: if they do not repent, their candlestick will be removed from its place. The church will cease to have a witness. It will become a hollow thing.',
        },

        {
          kind: 'christ',
          id: 'eph-christ-holdsStars',
          title: 'Christ Connection — He Holds the Seven Stars',
          html:
            'Christ identifies Himself as "he that holdeth the seven stars in his right hand." In Revelation 1:20, the stars are the angels of the churches—their spiritual leadership. Christ alone holds them. Ephesus might think they are holding the line by sheer effort and vigilance. But Christ reminds them: You are held in My hand. Your first love is not about your performance. It is about Me.',
        },

        {
          kind: 'carry',
          html:
            'Has the fire of your faith become a flicker? Has the love that first drew you to Christ been crowded out by duty, by doctrine, by the demands of holding the line? Christ does not ask for more work. He asks you to remember why you began. The works matter. The truth matters. But first, come back to love. Come back to Him.',
        },

        {
          kind: 'reflection',
          id: 'eph-reflection',
          prompt: 'What was your first love? What drew you to Christ before it all became routine? What would it take to feel that fire again?',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(6, 'But this thou hast, that thou hatest the deeds of the Nicolaitans, which I also hate.'),
            plain(7, 'He that hath an ear, let him hear what the Spirit saith unto the churches; To him that overcometh will I give to eat of the tree of life, which is in the midst of the paradise of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph-promise',
          html:
            'To the overcomer—to the one who turns back from the cliff&apos;s edge, who rekindled that first love, who chooses Christ again—comes a promise: access to the tree of life. The garden of Eden, sealed to Adam after the fall, will be reopened. The believer will eat from it. This is the eternal communion Christ offers—the garden restored, the tree granted, the fellowship made perfect.',
        },

        { kind: 'artwork', matchTitle: /ephesus/i, caption: 'Revelation 2:1–7 · Ephesus' },
      ],
    },

    /* ─── Smyrna: The Second Church ──────────────────────────────────────── */
    {
      ref: 'Revelation 2:8–11',
      title: 'Smyrna — Tribulation and Riches',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(8, 'And unto the angel of the church in Smyrna write; These things saith the first and the last, which was dead, and is alive;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'smyrna-intro',
          html:
            'Smyrna is introduced not with any reference to the seven stars or the candlesticks, but with Christ&apos;s titles: "the first and the last, which was dead, and is alive." Why? Because Smyrna is a church facing death. They need to know that the One who speaks to them has already died and has conquered death. He alone holds the power that matters.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(9, 'I know thy works, and tribulation, and poverty, (but thou art rich) and I know the blasphemy of them which say they are Jews, and are not, but are the synagogue of Satan.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'smyrna-tribulation',
          html:
            'Christ opens not with praise for their works, but with acknowledgment of their condition: tribulation, poverty. The city of Smyrna was a jewel of Asia Minor, but this church lives in hardship. They suffer persecution. They lack resources. And yet Christ adds a parenthetical that redefines everything: "(but thou art rich)." In His sight, their poverty is wealth. Their tribulation is wealth. They have lost everything the world counts precious and have become rich in the eyes of Christ.',
        },

        {
          kind: 'greek',
          id: 'greek-thlipsis',
          title: 'Thlipsis — Tribulation',
          script: 'θλῖψις',
          translit: '<strong>thlipsis</strong> · pressure; affliction; tribulation; crushing distress',
          description:
            'Thlipsis literally means to be pressed or squeezed. In the New Testament it often refers to the persecution and suffering believers face for their faith. For Smyrna, this was not abstract doctrine but daily reality—social ostracism, economic hardship, the threat of imprisonment and death.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(10, 'Fear them not which kill the body, but are not able to kill the soul: but rather fear him which is able to destroy both soul and body in hell. Be thou faithful unto death, and I will give thee a crown of life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'smyrna-second-death',
          html:
            'Christ does not soften the reality: persecutors can kill your body. But they cannot touch what is eternal. The one who fears only death, who counts the loss of the body as the ultimate loss, has already surrendered the more precious thing. Smyrna is called to a higher fear—the fear of the Lord—and a higher hope—that there exists something more real than death itself.',
        },

        {
          kind: 'greek',
          id: 'greek-stephanos',
          title: 'Stephanos — Crown of Life',
          script: 'στέφανος',
          translit: '<strong>stephanos</strong> · crown; wreath; a victor&apos;s crown or martyr&apos;s crown',
          description:
            'Stephanos was worn by victors in the games. In the New Testament, it takes on spiritual meaning—the crown of life given to those who endure in faith. The name of Smyrna&apos;s first great martyr was Stephen (Greek: Stephanos). John may intend the echo intentionally: the faithful ones of Smyrna will wear a crown like Stephen, the first Christian martyr.',
        },

        {
          kind: 'christ',
          id: 'smyrna-christ-deathLife',
          title: 'Christ Connection — Death and Life',
          html:
            'Christ, "which was dead, and is alive," stands with Smyrna. He has walked the path they face. He has died. He is alive. And He promises that those who overcome in faith will also be alive in the resurrection. Death is not the end. It is the door through which believers pass to eternal life with Him.',
        },

        {
          kind: 'carry',
          html:
            'If you face pressure for your faith—if following Christ costs you something, if obedience is not comfortable, if you have lost what the world calls success—you are not abandoned. Christ sees. He knows your tribulation and your poverty. And in His sight, you are rich. The second death has no claim on you.',
        },

        {
          kind: 'reflection',
          id: 'smyrna-reflection',
          prompt: 'What does it mean to be "rich" while experiencing poverty or tribulation? How might redefining riches shift your understanding of loss?',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(11, 'He that hath an ear, let him hear what the Spirit saith unto the churches; He that overcometh shall not be hurt of the second death.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'smyrna-crown-promise',
          html:
            'The "second death" is the judgment that comes to those who refuse Christ. The overcomer in Smyrna, even if killed for the faith, escapes this. The first death is merely the doorway to life.',
        },

        { kind: 'artwork', matchTitle: /smyrna/i, caption: 'Revelation 2:8–11 · Smyrna' },
      ],
    },

    /* ─── Pergamos: The Third Church ─────────────────────────────────────── */
    {
      ref: 'Revelation 2:12–17',
      title: 'Pergamos — Where Satan&apos;s Seat Is',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(12, 'And to the angel of the church in Pergamos write; These things saith he which hath the sharp sword with two edges;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'pergamos-intro',
          html:
            'Pergamos was another jewel of Asia Minor, famous for its library, its culture, its grandeur. But it was also the seat of Caesar worship, where the imperial cult was enforced. Christ addresses the church there with the image of a sharp two-edged sword—the symbol of judgment, of truth that cuts both ways, that divides what is true from what is false.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(13, 'I know thy works, and where thou dwellest, even where Satan&apos;s seat is: and thou holdest fast my name, and hast not denied my faith, even in those days wherein Antipas was my faithful martyr, which was slain among you, where Satan dwelleth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'pergamos-satans-seat',
          html:
            'Christ acknowledges their faithfulness under extreme pressure. "Where Satan&apos;s seat is"—this is not hyperbole. Pergamos was a citadel of pagan religion and Caesar worship. To live there as a Christian meant constant pressure to compromise, to participate in civic rituals that violated one&apos;s faith. Yet Pergamos has held fast. They have not denied the name of Christ even when it cost them. Antipas, their faithful witness, was martyred. The church stood.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(14, 'But I have a few things against thee, because thou hast there them that hold the doctrine of Balaam, who taught Balac to cast a stumblingblock before the children of Israel, to eat things sacrificed unto idols, and to commit fornication.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'pergamos-balaam',
          html:
            'Pergamos has endured persecution well, but they harbor internal compromise. The doctrine of Balaam creeps in. In the Old Testament, Balaam was a seer who could not curse Israel with God-given power, so he taught Balac a workaround: seduce the Israelites into idolatry and immorality, and God Himself would curse them. In Pergamos, false teachers are doing the same—teaching that one can participate in pagan feasts and idolatrous practices while still being a believer, that the body does not matter, that eating things sacrificed to idols is a matter of conscience, not conviction.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(15, 'So hast thou also them that hold the doctrine of the Nicolaitans, which thing I hate.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'pergamos-nicolaitans',
          html:
            'Nicolaitans appear again—and Christ is clear: "which thing I hate." Whatever their exact teaching was, it involved a relaxation of moral boundaries, a separation of the flesh from the spirit in a way that freed believers to participate in the culture&apos;s idolatries without consequence.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(16, 'Repent; or else I will come unto thee quickly, and will fight against them with the sword of my mouth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'pergamos-sword',
          html:
            'Christ&apos;s warning is not gentle. If Pergamos does not repent of tolerating this teaching, He will come and fight against it—and against those who hold it—with the sharp sword of His judgment. Truth spoken sharply cuts away falsehood. The living Word of God will not be mocked or accommodated.',
        },

        {
          kind: 'christ',
          id: 'pergamos-christ-sword',
          title: 'Christ Connection — The Sharp Sword',
          html:
            'The sword with two edges appears first in Revelation 1:16, coming from Christ&apos;s mouth. It is the instrument of judgment (Hebrews 4:12). Pergamos is called to see that the One who judges them is Christ Himself—not remote, not powerless, but armed with the word of truth. His judgment is the judgment of God.',
        },

        {
          kind: 'carry',
          html:
            'It is possible to remain externally faithful while internally compromised. Pergamos has not fled the faith, but they have allowed the world&apos;s compromises to seep in. The call to repentance is not about isolation but about integrity. What false teaching have you been tolerating? What practices are you justifying that your conscience knows to be wrong? Turn back.',
        },

        {
          kind: 'reflection',
          id: 'pergamos-reflection',
          prompt: 'Where are you tolerating compromise in your own faith? What "doctrines of Balaam" have you been accepting as normal?',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(17, 'He that hath an ear, let him hear what the Spirit saith unto the churches; To him that overcometh will I give to eat of the hidden manna, and will give him a white stone, and in the stone a new name written, which no man knoweth saving he that receiveth it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'pergamos-manna-stone',
          html:
            'The promise to the overcomer is beautiful and peculiar. Hidden manna—the bread from heaven, now kept in the holy of holies (Hebrews 9:4), a symbol of Christ the living bread. A white stone—in the ancient world, a white stone was a vote of acquittal, a symbol of vindication. And a new name written in it, known only to the one who receives it—a name that speaks to intimate knowledge, to a relationship so personal that it is beyond what words can contain.',
        },

        {
          kind: 'greek',
          id: 'greek-mannas',
          title: 'Mannas — Hidden Manna',
          script: 'μάννα',
          translit: '<strong>mannas</strong> · manna; the bread from heaven; God&apos;s provision',
          description:
            'Manna is the bread God provided for Israel in the wilderness. Jesus identifies Himself as the true bread from heaven (John 6:48–51). The hidden manna suggests a depth of communion and satisfaction that only Christ provides—not the manna of the past, but a hidden abundance meant for those who truly know Him.',
        },

        {
          kind: 'greek',
          id: 'greek-psephos',
          title: 'Psēphos — White Stone',
          script: 'ψῆφος',
          translit: '<strong>psēphos</strong> · stone; pebble; a vote of acquittal or approval',
          description:
            'A psēphos could be black (a vote of condemnation in ancient courts) or white (a vote of acquittal). In Greek culture, a white stone was also a token of hospitality or intimacy. Here it represents vindication before Christ—you are not condemned, but known, approved, loved.',
        },

        { kind: 'artwork', matchTitle: /pergamos|pergamum/i, caption: 'Revelation 2:12–17 · Pergamos' },
      ],
    },

    /* ─── Thyatira: The Fourth Church ────────────────────────────────────── */
    {
      ref: 'Revelation 2:18–29',
      title: 'Thyatira — The Woman Jezebel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(18, 'And unto the angel of the church in Thyatira write; These things saith the Son of God, who hath his eyes like unto a flame of fire, and his feet are like fine brass;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'thyatira-intro',
          html:
            'Thyatira was a working city, a center of trade and commerce. The church there faces a unique problem—they are growing, their love is expanding, their patience is increasing. But they are being led astray by a false prophetess who claims to speak for God. Christ confronts them not primarily as a judge but as the Son of God, with eyes that see all and feet ready to stand in judgment.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(19, 'I know thy works, and charity, and service, and faith, and thy patience, and thy works; and the last to be more than the first.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'thyatira-growth',
          html:
            'Thyatira receives remarkable praise. Their charity (agapē love) is evident. Their service is real. Their faith is operative. Their patience endures. And uniquely: their works are increasing. The last season shows more fruit than the first. By the standard of spiritual growth, Thyatira appears to be thriving. They are not declining but deepening.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(20, 'Notwithstanding I have a few things against thee, because thou sufferest that woman Jezebel, which calleth herself a prophetess, to teach and to seduce my servants to commit fornication, and to eat things sacrificed unto idols.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'thyatira-jezebel',
          html:
            '"Notwithstanding"—again the turn. The growth and the love cannot hide the central problem: they tolerate a false prophetess. She calls herself a prophetess, claiming divine authority. She teaches error and seduces believers away from faithfulness. The name "Jezebel" invokes the Old Testament queen who persecuted the prophets of God and led Israel into idolatry (1 Kings 16:31–33). This is not a small matter. This is spiritual seduction dressed in the language of prophecy.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(21, 'And I gave her space to repent of her fornication; and she repented not.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'thyatira-repentance-refused',
          html:
            'Christ gave Jezebel opportunity to repent. She refused. Now her refusal becomes the church&apos;s test. Will Thyatira believe a false prophetess, or will they heed the voice of the true Prophet, Christ Himself?',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(22, 'Behold, I will cast her into a bed, and them that commit adultery with her into great tribulation, except they repent of their deeds.'),
            plain(23, 'And I will kill her children with death; and all the churches shall know that I am he which searcheth the reins and hearts: and I will give unto every one of you according to your works.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'thyatira-judgment',
          html:
            'Christ&apos;s judgment is severe. Jezebel will be cast into a bed (of sickness, of isolation—the bed becomes a place of affliction rather than influence). Those who commit adultery with her—spiritually, by following her teaching—face great tribulation. Her children (those born of her teaching) will be killed. And the churches will know that Christ is the one who searches hearts and knows thoughts. He does not judge by appearance or reputation but by the deepest truth of what dwells within.',
        },

        {
          kind: 'christ',
          id: 'thyatira-christ-eyes-feet',
          title: 'Christ Connection — Eyes of Fire, Feet of Brass',
          html:
            'The Son of God appears with eyes that pierce all deception and feet ready to tread in judgment. Thyatira thought they could accommodate a false prophetess alongside their genuine faith. Christ shows them that He sees what they do in secret, knows every heart, and will separate truth from falsehood. There is no hiding place from His judgment, and no amount of good works can paper over foundational deception.',
        },

        {
          kind: 'carry',
          html:
            'Thyatira&apos;s error is seductive because it comes wrapped in growth, in works, in an expansion of charity. Not all that grows is healthy. Not all expansion is maturity. The central question is: Who do you listen to? A voice that feels prophetic and liberating, or the voice of the true Prophet, Christ Himself? When teaching contradicts what Christ teaches, the external fruit does not matter.',
        },

        {
          kind: 'reflection',
          id: 'thyatira-reflection',
          prompt: 'What "Jezebel" voices are you listening to in your own spiritual life? What makes them seductive, and why are you hesitant to reject them?',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(24, 'But unto you I say, and unto the rest in Thyatira, as many as have not this doctrine, and which have not known the depths of Satan, as they speak; I will put upon you none other burden;'),
            plain(25, 'But that which ye have hold fast till I come.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'thyatira-faithful-remnant',
          html:
            'Not all of Thyatira has been deceived. There is a faithful remnant who have not embraced Jezebel&apos;s teaching, who have not plumbed those "depths of Satan" (the inner secrets of her deceptive system). To them, Christ says: you have no new burden. Hold what you have. Remain faithful until I come.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(26, 'And he that overcometh, and keepeth my works unto the end, to him will I give power over the nations:'),
            plain(27, 'And he shall rule them with a rod of iron; as the vessels of a potter shall they be broken to shivers: even as I received of my Father.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'thyatira-promise',
          html:
            'To the overcomer—the one who sees through Jezebel&apos;s seduction and holds fast to Christ&apos;s words—comes a promise of authority and rulership. To rule over the nations. To wield a rod of iron. This echoes Psalm 2, where the Messiah rules the nations. The overcomer is granted a share in Christ&apos;s authority, a participation in His triumph.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(28, 'And I will give him the morning star.'),
            plain(29, 'He that hath an ear, let him hear what the Spirit saith unto the churches.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'thyatira-morning-star',
          html:
            'The morning star—the last star visible before the dawn, the herald of the coming sun. In Revelation 22:16, Christ Himself is "the bright and morning star." To give the morning star is to give Christ Himself, the One who awakens the believer to the fullness of day, the One who dawns in the believer&apos;s heart. It is an intimate promise of His presence and His return.',
        },

        {
          kind: 'greek',
          id: 'greek-aster-prōinos',
          title: 'Astēr Prōinos — Morning Star',
          script: 'ἀστὴρ πρωϊνός',
          translit: '<strong>astēr prōinos</strong> · the morning star; the star that heralds the dawn',
          description:
            'The morning star appears just before sunrise and signals the end of night. In biblical symbolism, it represents the promise of a new day, the hope of the resurrection, the appearance of Christ Himself. To receive the morning star is to receive the assurance that night is ending and the age of light is beginning.',
        },

        { kind: 'artwork', matchTitle: /thyatira/i, caption: 'Revelation 2:18–29 · Thyatira' },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Revelation 2',
    quote:
      'He that hath an ear, let him hear what the Spirit saith unto the churches. To him that overcometh will I give to eat of the tree of life; a crown of life; hidden manna and a white stone; and the morning star.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 2 · Study Guide',
  },

  hasHebrew: false,
};
