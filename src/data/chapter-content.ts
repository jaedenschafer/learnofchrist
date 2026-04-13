export interface ChapterContent {
  overview: string;
  themes: { title: string; desc: string }[];
  questions: string[];
  christConnection: string;
  keyVerse: { reference: string; text: string };
}

export const chapterContent: Record<string, ChapterContent> = {
  // ============================================================
  // GOSPEL OF JOHN — ALL 21 CHAPTERS
  // ============================================================

  "john/1": {
    overview:
      "John opens his Gospel with a majestic prologue declaring that Jesus is the eternal Word (Logos) who was with God and was God from the beginning, and through whom all things were made. John the Baptist bears witness that Jesus is the Lamb of God, and the first disciples — Andrew, Simon Peter, Philip, and Nathanael — are called to follow Him.",
    themes: [
      {
        title: "The Deity of Christ",
        desc: "The opening verses assert that the Word was God, establishing Jesus' full divinity and eternal pre-existence before creation itself.",
      },
      {
        title: "The Incarnation",
        desc: "The Word became flesh and dwelt among us — God took on human nature, making the invisible God visible and accessible to mankind.",
      },
      {
        title: "Witness and Testimony",
        desc: "John the Baptist's role as a witness to the Light introduces the Gospel's major theme: testimony that leads others to believe in Jesus.",
      },
    ],
    questions: [
      "What does it mean that Jesus is called 'the Word' (Logos), and why does John choose this title to open his Gospel?",
      "How does the statement 'the Word was with God, and the Word was God' shape your understanding of the Trinity?",
      "Why does John the Baptist say he is 'not that Light' but came to bear witness of the Light? What does this teach about our role?",
      "When Jesus asks the first disciples 'What seek ye?' (v. 38), what is the deeper significance of this question for every seeker?",
      "How does Nathanael's journey from skepticism ('Can there any good thing come out of Nazareth?') to faith ('Thou art the Son of God') mirror the journey John wants every reader to take?",
    ],
    christConnection:
      "John 1 is one of the clearest declarations of Christ's deity in all of Scripture. Jesus is not merely a prophet or teacher — He is the eternal God who created all things, the Light that overcomes darkness, and the Lamb of God who takes away the sin of the world. Every line points to His supreme identity.",
    keyVerse: {
      reference: "John 1:14",
      text: "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.",
    },
  },

  "john/2": {
    overview:
      "Jesus performs His first public miracle at a wedding in Cana of Galilee, turning water into wine, thereby manifesting His glory so that His disciples believe in Him. He then travels to Jerusalem for the Passover and drives the moneychangers out of the temple, declaring 'Destroy this temple, and in three days I will raise it up' — a reference to His own body and future resurrection.",
    themes: [
      {
        title: "The First Sign — Water to Wine",
        desc: "Jesus' first miracle transforms ordinary water into the finest wine, signaling that He brings a new and better covenant that surpasses all that came before.",
      },
      {
        title: "Righteous Zeal for God's House",
        desc: "By cleansing the temple, Jesus asserts His authority over Israel's worship and fulfills the prophecy that zeal for God's house would consume Him.",
      },
      {
        title: "The Temple of His Body",
        desc: "Jesus redefines the temple — the true dwelling place of God is not a building but His own body, which will be destroyed and raised in three days.",
      },
    ],
    questions: [
      "Why does Jesus choose a wedding as the setting for His first miracle, and what might this reveal about His mission?",
      "What is the significance of Jesus using the stone waterpots set aside for Jewish purification rites?",
      "How does Mary's instruction to the servants — 'Whatsoever he saith unto you, do it' — serve as a model for discipleship?",
      "What does Jesus' anger in the temple teach us about the difference between righteous indignation and sinful anger?",
      "When Jesus says 'Destroy this temple, and in three days I will raise it up,' why do the Jews misunderstand Him, and what does this reveal about spiritual blindness?",
    ],
    christConnection:
      "The water-to-wine miracle reveals Jesus as the one who brings the joy and abundance of the messianic age. The temple cleansing points forward to His death and resurrection — He Himself is the true temple where God and man meet. Both events declare that Jesus is replacing the old order with something infinitely greater.",
    keyVerse: {
      reference: "John 2:19",
      text: "Jesus answered and said unto them, Destroy this temple, and in three days I will raise it up.",
    },
  },

  "john/3": {
    overview:
      "Nicodemus, a Pharisee and ruler of the Jews, comes to Jesus by night and is told he must be 'born again' to see the kingdom of God. Jesus explains spiritual rebirth through water and the Spirit, and declares the most famous verse in the Bible: 'For God so loved the world, that he gave his only begotten Son.' The chapter closes with John the Baptist's final testimony, declaring that Jesus must increase and he must decrease.",
    themes: [
      {
        title: "The New Birth",
        desc: "Jesus teaches that entrance into God's kingdom requires a radical spiritual rebirth from above — not moral improvement, but a new creation by the Holy Spirit.",
      },
      {
        title: "God's Sacrificial Love",
        desc: "John 3:16 reveals the motivation behind salvation: God's immeasurable love for a fallen world, expressed in the gift of His only Son.",
      },
      {
        title: "Light versus Darkness",
        desc: "Jesus as the light exposes the human preference for darkness; people's response to the light reveals the true condition of their hearts.",
      },
    ],
    questions: [
      "Why does Nicodemus come to Jesus 'by night,' and what might this detail symbolize about his spiritual condition?",
      "What does Jesus mean by being 'born of water and of the Spirit,' and why is natural birth insufficient for the kingdom of God?",
      "How does the Old Testament story of Moses lifting up the serpent in the wilderness (v. 14) foreshadow the crucifixion?",
      "John 3:16 says God 'gave' His Son — what does this word reveal about the nature of the atonement?",
      "What does John the Baptist's statement 'He must increase, but I must decrease' teach about the posture every believer should have toward Christ?",
    ],
    christConnection:
      "This chapter is the heart of the Gospel message. Jesus reveals Himself as the one 'lifted up' — crucified — so that whoever believes in Him will not perish but have everlasting life. The Son of God was sent not to condemn the world but to save it, making this chapter the clearest statement of why Christ came.",
    keyVerse: {
      reference: "John 3:16",
      text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    },
  },

  "john/4": {
    overview:
      "Jesus passes through Samaria and meets a woman at Jacob's well, offering her 'living water' and revealing that He knows her past. She becomes one of the first evangelists, bringing her whole town to hear Jesus. The chapter closes with Jesus healing a nobleman's son in Capernaum from a distance, His second sign in Galilee.",
    themes: [
      {
        title: "Living Water",
        desc: "Jesus offers the Samaritan woman water that eternally satisfies — a metaphor for the Holy Spirit and the new life He gives to those who ask.",
      },
      {
        title: "Worship in Spirit and Truth",
        desc: "Jesus declares that true worship transcends location (Jerusalem or Mount Gerizim) and must be offered in spirit and in truth, inaugurating a new era of worship.",
      },
      {
        title: "Breaking Social Barriers",
        desc: "By speaking with a Samaritan woman — crossing ethnic, gender, and moral boundaries — Jesus demonstrates that His salvation is for all people without distinction.",
      },
    ],
    questions: [
      "Why is it significant that Jesus 'must needs go through Samaria' (v. 4) when most Jews deliberately avoided the region?",
      "What does Jesus mean by 'living water,' and how does it differ from what the woman initially understands?",
      "How does Jesus' knowledge of the woman's five husbands change the conversation, and what does it reveal about how He deals with sin?",
      "What does it mean to worship God 'in spirit and in truth,' and how does this reshape our understanding of worship?",
      "How does the healing of the nobleman's son (vv. 46-54) demonstrate the relationship between faith and the word of Christ?",
    ],
    christConnection:
      "Jesus reveals Himself to the Samaritan woman as the Messiah — 'I that speak unto thee am he' — one of His most direct self-declarations. He is the source of living water that quenches the deepest thirst of the human soul. His willingness to seek out an outcast Samaritan woman displays the inclusive, boundary-breaking nature of His saving mission.",
    keyVerse: {
      reference: "John 4:14",
      text: "But whosoever drinketh of the water that I shall give him shall never thirst; but the water that I shall give him shall be in him a well of water springing up into everlasting life.",
    },
  },

  "john/5": {
    overview:
      "At the pool of Bethesda in Jerusalem, Jesus heals a man who had been an invalid for thirty-eight years, telling him to take up his bed and walk. Because He did this on the Sabbath, the Jewish leaders begin persecuting Him. Jesus responds with a profound discourse on His relationship with the Father, claiming equal authority to give life and execute judgment.",
    themes: [
      {
        title: "Sovereign Healing Power",
        desc: "Jesus does not wait for the man to demonstrate faith or find the pool's waters — He commands healing by His own authority, showing that salvation is initiated by God, not earned by effort.",
      },
      {
        title: "The Son's Authority from the Father",
        desc: "Jesus claims that the Father has given Him authority to give life and to judge, making Him equal with God — the central claim that provokes the leaders' hostility.",
      },
      {
        title: "Witnesses to Christ",
        desc: "Jesus cites four witnesses to His identity: John the Baptist, His own works, the Father's voice, and the Scriptures — yet the leaders refuse to believe.",
      },
    ],
    questions: [
      "Why does Jesus single out one man among many invalids at the pool, and what does this teach about divine initiative in salvation?",
      "What is the deeper meaning of Jesus' question, 'Wilt thou be made whole?' and how does it apply to spiritual healing?",
      "Why does Jesus deliberately heal on the Sabbath, and what does this reveal about His authority over the Law?",
      "In verses 19-29, Jesus claims that the Father has committed all judgment to the Son — what are the implications of this for every person?",
      "Jesus tells the religious leaders, 'Ye search the scriptures; for in them ye think ye have eternal life: and they are they which testify of me' (v. 39). How can someone study the Bible and still miss Jesus?",
    ],
    christConnection:
      "Jesus declares that He and the Father work together, that the Son gives life to whom He will, and that all judgment has been entrusted to Him. Most powerfully, He asserts that the entire Old Testament testifies about Him — the Scriptures are not an end in themselves but a signpost pointing to Christ.",
    keyVerse: {
      reference: "John 5:39",
      text: "Search the scriptures; for in them ye think ye have eternal life: and they are they which testify of me.",
    },
  },

  "john/6": {
    overview:
      "Jesus feeds five thousand people with five barley loaves and two small fishes, then walks on the Sea of Galilee to His disciples during a storm. The next day, the crowds seek Him out, and He delivers the 'Bread of Life' discourse, declaring that He is the true bread from heaven. Many disciples find His teaching too hard and turn away, but Peter confesses, 'Thou hast the words of eternal life.'",
    themes: [
      {
        title: "Jesus as the Bread of Life",
        desc: "Just as manna sustained Israel in the wilderness, Jesus is the true bread from heaven who gives eternal life to all who come to Him in faith.",
      },
      {
        title: "Sovereign Grace in Salvation",
        desc: "Jesus teaches that no one can come to Him unless the Father draws them, and that all whom the Father gives Him will come — salvation originates with God.",
      },
      {
        title: "The Cost of Discipleship",
        desc: "When Jesus' teaching becomes difficult, many followers abandon Him, revealing that true discipleship requires more than seeking signs and free bread.",
      },
    ],
    questions: [
      "Why does Jesus test Philip by asking where to buy bread (v. 5-6) when He already knows what He will do?",
      "What is the significance of Jesus walking on the water immediately after the feeding miracle?",
      "When Jesus says 'I am the bread of life' (v. 35), how does He fulfill and surpass what the manna represented in the Old Testament?",
      "Why do many disciples leave after the Bread of Life discourse, and what does their departure reveal about the nature of true faith?",
      "Peter responds, 'Lord, to whom shall we go? thou hast the words of eternal life' (v. 68). What makes this confession different from the crowd's earlier enthusiasm?",
    ],
    christConnection:
      "Jesus is the true manna — the bread that came down from heaven to give life to the world. The Old Testament manna sustained physical life temporarily; Jesus gives eternal life permanently. His flesh given for the life of the world points directly to the cross, where His body would be broken for the salvation of all who believe.",
    keyVerse: {
      reference: "John 6:35",
      text: "And Jesus said unto them, I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst.",
    },
  },

  "john/7": {
    overview:
      "During the Feast of Tabernacles in Jerusalem, Jesus teaches in the temple amid intense debate about His identity. The crowds are divided — some say He is a prophet, others say He is the Christ, while the Pharisees seek to arrest Him. On the last great day of the feast, Jesus stands and cries out, 'If any man thirst, let him come unto me, and drink,' promising rivers of living water to those who believe.",
    themes: [
      {
        title: "Division over Jesus' Identity",
        desc: "The people of Jerusalem are deeply divided over who Jesus is — prophet, Messiah, or deceiver — showing that Jesus forces an unavoidable decision from everyone.",
      },
      {
        title: "Rivers of Living Water",
        desc: "Jesus promises that the Holy Spirit will flow from within believers like rivers of living water, pointing to the outpouring that would come after His glorification.",
      },
      {
        title: "God's Timing versus Human Agenda",
        desc: "Jesus tells His brothers 'My time is not yet come' and acts according to the Father's timetable, not human pressure or expectations.",
      },
    ],
    questions: [
      "Why do Jesus' own brothers urge Him to go to the feast publicly (vv. 3-5), and what does their advice reveal about misunderstanding His mission?",
      "What does Jesus mean when He says 'My doctrine is not mine, but his that sent me' (v. 16), and how does this challenge the way we evaluate truth?",
      "Why are the Pharisees unable to arrest Jesus at this point (vv. 30, 44), and what does this say about divine sovereignty over human plans?",
      "On the last day of the feast, Jesus cries out about living water (vv. 37-38). How does the Feast of Tabernacles context make this invitation especially powerful?",
      "How does Nicodemus' cautious defense of Jesus in verses 50-51 show a possible change from his nighttime visit in chapter 3?",
    ],
    christConnection:
      "The Feast of Tabernacles celebrated God's provision of water in the wilderness. Jesus stands in the midst of this celebration and declares that He Himself is the source of living water — the fulfillment of everything the feast symbolized. He is the one to whom all of Israel's feasts and ceremonies ultimately point.",
    keyVerse: {
      reference: "John 7:37-38",
      text: "In the last day, that great day of the feast, Jesus stood and cried, saying, If any man thirst, let him come unto me, and drink. He that believeth on me, as the scripture hath said, out of his belly shall flow rivers of living water.",
    },
  },

  "john/8": {
    overview:
      "The chapter opens with the scribes and Pharisees bringing a woman caught in adultery to Jesus, testing Him. Jesus responds, 'He that is without sin among you, let him first cast a stone at her,' and her accusers leave one by one. Jesus then declares 'I am the light of the world' and engages in an intense debate with the Jewish leaders about His identity, climaxing with His stunning declaration: 'Before Abraham was, I am.'",
    themes: [
      {
        title: "Grace and Truth in Judgment",
        desc: "Jesus neither condones the woman's sin nor condemns her — He extends mercy while calling her to repentance, perfectly balancing grace and holiness.",
      },
      {
        title: "The Light of the World",
        desc: "Jesus claims to be the light that illuminates every person's path, exposing darkness and offering guidance to all who follow Him.",
      },
      {
        title: "The Divine 'I AM'",
        desc: "By declaring 'Before Abraham was, I am,' Jesus claims the sacred name of God revealed to Moses at the burning bush, asserting His eternal, uncreated existence.",
      },
    ],
    questions: [
      "How does Jesus' response to the woman caught in adultery demonstrate both justice and mercy, and what does 'Go, and sin no more' imply about grace?",
      "What does it mean for Jesus to be 'the light of the world' (v. 12), and how does light function as a metaphor for His ministry?",
      "Jesus says 'the truth shall make you free' (v. 32). Free from what? How do the Jewish leaders misunderstand this freedom?",
      "Why does Jesus' statement 'Before Abraham was, I am' (v. 58) provoke the crowd to pick up stones, and what Old Testament background makes this claim so explosive?",
      "In this chapter, Jesus repeatedly says 'I am' — how do these declarations build the case for His deity throughout John's Gospel?",
    ],
    christConnection:
      "John 8 contains some of the most direct claims Jesus makes about His divine identity. He is the light of the world who exposes and overcomes darkness. His declaration 'I AM' identifies Him with the God of Abraham, Isaac, and Jacob. He offers freedom from the slavery of sin — a freedom only God Himself can provide.",
    keyVerse: {
      reference: "John 8:12",
      text: "Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.",
    },
  },

  "john/9": {
    overview:
      "Jesus encounters a man blind from birth, spits on the ground to make clay, anoints the man's eyes, and sends him to wash in the pool of Siloam — and the man receives his sight. The Pharisees interrogate the healed man and his parents, refusing to accept the miracle because Jesus performed it on the Sabbath. The man's faith grows through opposition until he worships Jesus as the Son of God.",
    themes: [
      {
        title: "Spiritual Blindness versus Physical Blindness",
        desc: "The man born blind gains both physical and spiritual sight, while the Pharisees who claim to see are revealed as spiritually blind — an ironic reversal.",
      },
      {
        title: "Jesus as the Light Giver",
        desc: "This miracle is a living enactment of Jesus' claim to be the light of the world — He literally brings light to eyes that have never seen.",
      },
      {
        title: "Growing Faith under Persecution",
        desc: "The healed man's understanding of Jesus deepens through each interrogation — from 'a man called Jesus' to 'a prophet' to 'Lord, I believe' — showing how opposition can strengthen faith.",
      },
    ],
    questions: [
      "Why does Jesus correct the disciples' assumption that the man's blindness was caused by someone's sin (vv. 2-3), and what does this teach about suffering?",
      "What is the significance of Jesus using clay and the pool of Siloam in this healing, rather than simply speaking a word?",
      "How does the healed man's testimony grow bolder with each confrontation, and what can we learn from his example?",
      "Why are the Pharisees so resistant to accepting an obvious miracle, and what does their reaction reveal about the danger of religious presuppositions?",
      "What does Jesus mean when He says, 'For judgment I am come into this world, that they which see not might see; and that they which see might be made blind' (v. 39)?",
    ],
    christConnection:
      "Jesus demonstrates that He is the light of the world not just in word but in deed, giving sight to a man who lived in total darkness from birth. This miracle is a picture of spiritual salvation — Christ opens the eyes of those born in spiritual blindness. The Pharisees' refusal to see despite the evidence shows that rejecting Christ leads to deeper darkness.",
    keyVerse: {
      reference: "John 9:25",
      text: "He answered and said, Whether he be a sinner or no, I know not: one thing I know, that, whereas I was blind, now I see.",
    },
  },

  "john/10": {
    overview:
      "Jesus delivers the Good Shepherd discourse, contrasting Himself with thieves, robbers, and hired hands who abandon the sheep. He declares, 'I am the good shepherd: the good shepherd giveth his life for the sheep,' and asserts that He and the Father are one. The Jewish leaders again attempt to stone Him for blasphemy, but He withdraws beyond the Jordan where many believe in Him.",
    themes: [
      {
        title: "The Good Shepherd Who Lays Down His Life",
        desc: "Jesus is the shepherd who voluntarily dies for His sheep — not because anyone forces Him, but out of sacrificial love and obedience to the Father.",
      },
      {
        title: "The Security of the Believer",
        desc: "Jesus promises that no one can snatch His sheep from His hand or from the Father's hand, assuring believers of their eternal security in Christ.",
      },
      {
        title: "The Unity of Father and Son",
        desc: "Jesus' declaration 'I and my Father are one' asserts a unity of essence and purpose between the first and second persons of the Godhead.",
      },
    ],
    questions: [
      "What distinguishes the Good Shepherd from the hireling, and how does this contrast apply to spiritual leadership today?",
      "Jesus says His sheep hear His voice and follow Him (v. 27). What does it mean practically to 'hear' and 'follow' the voice of Christ?",
      "How does the promise that no one can pluck the sheep from the Father's hand (vv. 28-29) provide assurance to believers?",
      "When Jesus says 'I and my Father are one' (v. 30), what kind of oneness is He claiming, and why does it provoke a charge of blasphemy?",
      "Jesus mentions 'other sheep I have, which are not of this fold' (v. 16). Who are these other sheep, and what does this reveal about the scope of His mission?",
    ],
    christConnection:
      "The Good Shepherd discourse is one of the most beloved passages about Jesus in all of Scripture. Christ is the shepherd who knows each sheep by name, who lays down His life voluntarily for the flock, and who ensures that not a single one will be lost. His unity with the Father guarantees the absolute security and care of every believer.",
    keyVerse: {
      reference: "John 10:11",
      text: "I am the good shepherd: the good shepherd giveth his life for the sheep.",
    },
  },

  "john/11": {
    overview:
      "Jesus' close friend Lazarus falls ill and dies in Bethany. Though Jesus deliberately delays His arrival, He comes four days after the burial and is deeply moved, weeping at the tomb. He commands, 'Lazarus, come forth,' and the dead man walks out still wrapped in grave clothes. This miracle — the greatest of Jesus' signs — leads many to believe, but also accelerates the plot by the Sanhedrin to put Jesus to death.",
    themes: [
      {
        title: "The Resurrection and the Life",
        desc: "Jesus declares 'I am the resurrection, and the life' — not merely that He gives resurrection, but that He IS resurrection, making eternal life inseparable from His person.",
      },
      {
        title: "The Compassion of Christ",
        desc: "Jesus weeps at Lazarus' tomb despite knowing He will raise him, revealing that the Son of God enters fully into human grief and suffering.",
      },
      {
        title: "Faith Tested by Delay",
        desc: "Jesus deliberately delays going to Lazarus, allowing death to occur so that a greater miracle and deeper faith would result — God's delays are not denials.",
      },
    ],
    questions: [
      "Why does Jesus intentionally wait two more days before going to Lazarus (v. 6), and what does this teach about trusting God's timing?",
      "Martha says, 'Lord, if thou hadst been here, my brother had not died' (v. 21). How does Jesus redirect her from what He could have done to who He is?",
      "What is the significance of Jesus weeping (v. 35) — the shortest verse in the Bible — for our understanding of His nature?",
      "How does the raising of Lazarus serve as both a preview of the general resurrection and a declaration of Jesus' power over death?",
      "Why does this miracle of life ironically trigger the decision to kill Jesus (vv. 47-53), and what does this reveal about the hardness of unbelief?",
    ],
    christConnection:
      "By raising Lazarus, Jesus demonstrates that He possesses sovereign authority over death itself. His declaration 'I am the resurrection, and the life' means that everyone who believes in Him will live, even if they die physically. This miracle is the ultimate preview of Easter — if Jesus can call a four-day-dead man back to life, His own resurrection is not only possible but certain.",
    keyVerse: {
      reference: "John 11:25-26",
      text: "Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live: And whosoever liveth and believeth in me shall never die. Believest thou this?",
    },
  },

  "john/12": {
    overview:
      "Six days before Passover, Mary of Bethany anoints Jesus' feet with costly spikenard, and Judas objects to the expense. Jesus enters Jerusalem to shouts of 'Hosanna,' fulfilling Zechariah's prophecy by riding on a donkey. Greeks seek to see Jesus, prompting Him to speak about His coming death as a grain of wheat that must fall into the ground and die in order to bear much fruit.",
    themes: [
      {
        title: "Extravagant Devotion",
        desc: "Mary's anointing is an act of lavish, sacrificial worship that Jesus defends as preparation for His burial — true devotion to Christ is never wasted.",
      },
      {
        title: "The Triumphal Entry",
        desc: "Jesus' entry into Jerusalem as King fulfills Old Testament messianic prophecy, yet His kingship will be established not through conquest but through a cross.",
      },
      {
        title: "Death That Produces Life",
        desc: "The grain-of-wheat metaphor teaches that Jesus' death is not a tragedy but the necessary means by which abundant, eternal life comes to the world.",
      },
    ],
    questions: [
      "What does Mary's anointing of Jesus (vv. 1-8) teach about the relationship between gratitude and worship?",
      "Why does Jesus allow the crowd to proclaim Him King at the triumphal entry when He previously avoided such public declarations?",
      "What does the request of the Greeks to 'see Jesus' (v. 21) signify in the flow of John's Gospel?",
      "How does the grain-of-wheat illustration (v. 24) apply not only to Jesus' death but to the life of every disciple?",
      "Jesus says, 'And I, if I be lifted up from the earth, will draw all men unto me' (v. 32). How does the cross become the means of universal attraction?",
    ],
    christConnection:
      "Jesus enters Jerusalem as the long-awaited Messiah-King, yet He redefines kingship through sacrifice. The anointing for burial, the grain-of-wheat teaching, and the promise of being 'lifted up' all point to the cross as the center of God's plan. Christ's glory is revealed not in earthly triumph but in laying down His life.",
    keyVerse: {
      reference: "John 12:32",
      text: "And I, if I be lifted up from the earth, will draw all men unto me.",
    },
  },

  "john/13": {
    overview:
      "On the night before His crucifixion, Jesus takes a towel and basin and washes His disciples' feet, stunning them with this act of humble service. He identifies Judas as the one who will betray Him and dismisses him into the night. After Judas leaves, Jesus gives the 'new commandment' — that they love one another as He has loved them — and predicts Peter's threefold denial.",
    themes: [
      {
        title: "Servant Leadership",
        desc: "By washing the disciples' feet — the task of the lowest household servant — Jesus redefines greatness as humble service to others.",
      },
      {
        title: "The New Commandment of Love",
        desc: "Jesus commands His followers to love one another with the same self-sacrificial love He demonstrates, making this love the defining mark of true discipleship.",
      },
      {
        title: "Betrayal and Denial Foretold",
        desc: "Jesus reveals full knowledge of Judas' betrayal and Peter's denial, yet proceeds with unflinching resolve toward the cross.",
      },
    ],
    questions: [
      "Why does Peter initially resist having his feet washed, and what does Jesus' response ('If I wash thee not, thou hast no part with me') reveal about spiritual cleansing?",
      "How does Jesus washing Judas' feet — knowing full well Judas will betray Him — challenge our understanding of loving our enemies?",
      "What makes the commandment to love one another 'new' (v. 34) when the Old Testament already commanded love?",
      "How does the departure of Judas into the night (v. 30) serve as both literal and symbolic darkness?",
      "What does Peter's confident declaration that he would die for Jesus, followed by Jesus' prediction of denial, teach about self-knowledge and human weakness?",
    ],
    christConnection:
      "Jesus, knowing He is about to die, spends His final evening in humble service rather than seeking honor. The foot-washing is a living parable of the cross — the King of Glory stooping to cleanse sinners. His new commandment reveals that the community Jesus creates will be known by Christlike love, reflecting His own sacrifice.",
    keyVerse: {
      reference: "John 13:34-35",
      text: "A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another. By this shall all men know that ye are my disciples, if ye have love one to another.",
    },
  },

  "john/14": {
    overview:
      "Jesus comforts His troubled disciples by promising to prepare a place for them in His Father's house and to come again to receive them. He declares, 'I am the way, the truth, and the life: no man cometh unto the Father, but by me.' He promises that the Father will send the Holy Spirit (the Comforter) to teach them and bring His words to their remembrance, and He bequeaths His peace to them.",
    themes: [
      {
        title: "The Exclusive Way to the Father",
        desc: "Jesus claims to be the only way to God — not one path among many, but the sole mediator between sinful humanity and the holy Father.",
      },
      {
        title: "The Promise of the Holy Spirit",
        desc: "Jesus promises that the Comforter — the Spirit of truth — will come to indwell, teach, and empower believers after His departure.",
      },
      {
        title: "Peace That Transcends Circumstances",
        desc: "Jesus gives a peace unlike the world's peace — not the absence of trouble, but the presence of God in the midst of trouble.",
      },
    ],
    questions: [
      "When Jesus says 'In my Father's house are many mansions' (v. 2), what does this reveal about the scope of God's provision for His people?",
      "How does Jesus' claim to be 'the way, the truth, and the life' (v. 6) address Thomas' question and the universal human search for meaning?",
      "Jesus says, 'He that hath seen me hath seen the Father' (v. 9). What does this teach about the relationship between Jesus and God?",
      "What is the role of the Holy Spirit as described in this chapter, and how does His coming benefit believers even more than Jesus' physical presence?",
      "How is the peace Jesus gives (v. 27) different from the peace the world offers, and how can believers experience this peace today?",
    ],
    christConnection:
      "John 14 contains one of the most important Christological statements in the Bible. Jesus is not merely a teacher pointing the way to God — He IS the way, the truth, and the life. To see Him is to see the Father. He will not leave His people as orphans but will send the Spirit to continue His presence with them forever.",
    keyVerse: {
      reference: "John 14:6",
      text: "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.",
    },
  },

  "john/15": {
    overview:
      "Using the imagery of a vineyard, Jesus declares 'I am the true vine' and teaches that believers are branches who must abide in Him to bear fruit. Branches that do not abide are removed, while fruitful branches are pruned to bear more fruit. He commands His disciples to love one another, warns them that the world will hate them as it hated Him, and promises that the Spirit of truth will testify of Him.",
    themes: [
      {
        title: "Abiding in Christ as the True Vine",
        desc: "Spiritual fruitfulness is impossible apart from a living, dependent connection to Jesus — just as a branch cannot bear fruit if severed from the vine.",
      },
      {
        title: "Sacrificial Love as the Mark of Friendship",
        desc: "Jesus redefines the disciples' relationship with Him from servants to friends, and defines the greatest love as laying down one's life for others.",
      },
      {
        title: "The World's Hatred of Believers",
        desc: "Jesus warns that faithfulness to Him will provoke the world's hostility, because the world hated Him first — persecution is an expected part of discipleship.",
      },
    ],
    questions: [
      "What does it mean practically to 'abide' in Christ (v. 4), and how can a believer tell whether they are abiding or not?",
      "Jesus says, 'Every branch in me that beareth not fruit he taketh away' (v. 2). Who do the fruitless branches represent, and what does removal mean?",
      "How does Jesus' statement 'Greater love hath no man than this, that a man lay down his life for his friends' (v. 13) point to the cross?",
      "Why does Jesus say 'Ye have not chosen me, but I have chosen you' (v. 16), and what does this teach about the source of salvation?",
      "How should the promise that the world will hate believers (vv. 18-20) shape our expectations and priorities as followers of Christ?",
    ],
    christConnection:
      "Israel was often called God's vine in the Old Testament, yet it failed to bear fruit. Jesus declares Himself the TRUE vine — the faithful Israel, the perfect Son. All spiritual life flows from union with Him. His coming sacrifice ('lay down his life') is the ultimate expression of the love He commands His followers to share.",
    keyVerse: {
      reference: "John 15:5",
      text: "I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.",
    },
  },

  "john/16": {
    overview:
      "Jesus continues His farewell discourse, warning the disciples that they will face persecution and even death for His name's sake. He explains that His departure is necessary because the Holy Spirit — the Spirit of truth — cannot come until He goes. He promises that their sorrow at His death will be turned to joy, like a woman's anguish in childbirth giving way to gladness. He closes with the triumphant declaration, 'Be of good cheer; I have overcome the world.'",
    themes: [
      {
        title: "The Convicting Work of the Holy Spirit",
        desc: "The Spirit will convict the world of sin, righteousness, and judgment — carrying on Christ's mission of revealing truth after His ascension.",
      },
      {
        title: "Sorrow Turned to Joy",
        desc: "Jesus compares the disciples' coming grief to the pain of childbirth — temporary suffering that gives way to lasting, unshakeable joy.",
      },
      {
        title: "Christ's Victory over the World",
        desc: "Even as He approaches the cross, Jesus declares total victory, assuring His followers that no worldly tribulation can undo what He has accomplished.",
      },
    ],
    questions: [
      "Jesus says 'It is expedient for you that I go away' (v. 7). How can the Spirit's indwelling presence be better for believers than Jesus' physical presence?",
      "What does it mean that the Spirit will convict the world of sin, righteousness, and judgment (vv. 8-11), and how does each conviction relate to Christ?",
      "How does the metaphor of a woman in labor (vv. 20-22) help us understand the nature of Christian suffering and hope?",
      "Jesus says, 'In that day ye shall ask me nothing' (v. 23) — what changes about prayer after the resurrection and the coming of the Spirit?",
      "What does 'I have overcome the world' (v. 33) mean in practical terms for believers who still face real tribulation?",
    ],
    christConnection:
      "Jesus' departure through the cross and ascension is not a loss but a gain — it makes possible the universal presence of the Holy Spirit, who testifies of Christ in every believer. The Spirit's entire ministry is Christ-centered: He convicts of the sin of rejecting Christ, reveals Christ's righteousness, and declares Christ's victory. Jesus has already overcome the world, and believers share in that victory.",
    keyVerse: {
      reference: "John 16:33",
      text: "These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.",
    },
  },

  "john/17": {
    overview:
      "In what is known as Jesus' High Priestly Prayer, He lifts His eyes to heaven and prays first for Himself — that He would be glorified through the coming cross — then for His disciples, asking the Father to keep them, sanctify them in truth, and protect them from the evil one. Finally, He prays for all future believers, asking that they would be unified as He and the Father are one, so that the world might believe.",
    themes: [
      {
        title: "The Glory of the Cross",
        desc: "Jesus asks the Father to glorify Him through the cross — revealing that the crucifixion is not a defeat but the supreme display of divine glory.",
      },
      {
        title: "Sanctification through Truth",
        desc: "Jesus prays that His followers would be set apart by the truth of God's Word — holy living flows from immersion in divine truth.",
      },
      {
        title: "The Unity of All Believers",
        desc: "Jesus prays that all who believe in Him would share the same oneness that exists between Father and Son — a supernatural unity that testifies to the world.",
      },
    ],
    questions: [
      "What does it mean that eternal life is to 'know thee the only true God, and Jesus Christ, whom thou hast sent' (v. 3)?",
      "Jesus prays for His disciples to be kept 'from the evil' (v. 15) but not taken out of the world. Why does Jesus want believers to remain in the world?",
      "How does Jesus' prayer 'Sanctify them through thy truth: thy word is truth' (v. 17) shape our view of Scripture's role in Christian growth?",
      "What kind of unity is Jesus praying for in verses 20-23, and how is it different from organizational uniformity?",
      "Jesus says He has given believers the glory the Father gave Him (v. 22). What is this glory, and how do believers experience it?",
    ],
    christConnection:
      "This prayer reveals Jesus as our great High Priest who intercedes for His people before the Father. He has finished the work the Father gave Him, and now He commits His followers into the Father's care. The prayer's vision of unity — believers sharing in the love between Father and Son — reveals Christ as the one through whom humanity is brought into the life of God Himself.",
    keyVerse: {
      reference: "John 17:17",
      text: "Sanctify them through thy truth: thy word is truth.",
    },
  },

  "john/18": {
    overview:
      "After crossing the brook Cedron, Jesus is arrested in the garden when Judas arrives with soldiers and officers. Peter draws a sword and cuts off the ear of the high priest's servant Malchus, but Jesus rebukes him and willingly submits to arrest. He is taken to Annas and then Caiaphas for trial. Meanwhile, Peter denies knowing Jesus three times, just as Jesus predicted. Jesus is then brought before Pontius Pilate, who finds no fault in Him.",
    themes: [
      {
        title: "The Voluntary Surrender of Christ",
        desc: "Jesus is not captured — He steps forward, identifies Himself, and His captors fall to the ground at His 'I am,' showing He goes to the cross willingly.",
      },
      {
        title: "Peter's Denial",
        desc: "Peter's threefold denial reveals that even the most zealous disciple can fail under pressure, highlighting the need for divine grace rather than human strength.",
      },
      {
        title: "The Kingdom Not of This World",
        desc: "Before Pilate, Jesus declares His kingdom is 'not of this world,' redefining power and authority in terms that no earthly ruler can comprehend.",
      },
    ],
    questions: [
      "When Jesus says 'I am he' in the garden and the soldiers fall backward (v. 6), what does this reveal about His power and His choice to be arrested?",
      "Why does Jesus rebuke Peter for using the sword (v. 11) when Peter was trying to defend Him?",
      "How does Peter's denial unfold, and what factors contribute to his failure after he had boldly declared he would die for Jesus?",
      "What does Jesus mean when He tells Pilate, 'My kingdom is not of this world' (v. 36), and how does this redefine the nature of His kingship?",
      "Pilate asks, 'What is truth?' (v. 38) but does not wait for an answer. What does this reveal about the human tendency to evade truth?",
    ],
    christConnection:
      "Even in His arrest and trial, Jesus is sovereign. He identifies Himself with the divine 'I AM,' and soldiers collapse at His word. He willingly drinks the cup the Father has given Him. Before Pilate, He declares that His kingdom operates by truth rather than force. The innocent Christ stands before a guilty world, and the world has no power over Him except what is given from above.",
    keyVerse: {
      reference: "John 18:36",
      text: "Jesus answered, My kingdom is not of this world: if my kingdom were of this world, then would my servants fight, that I should not be delivered to the Jews: but now is my kingdom not from hence.",
    },
  },

  "john/19": {
    overview:
      "Pilate has Jesus scourged and presents Him to the crowd, declaring 'Behold the man!' but the crowd demands crucifixion. Jesus is led to Golgotha, where He is crucified between two others. From the cross He commits His mother to John's care and declares 'It is finished' before giving up His spirit. Joseph of Arimathaea and Nicodemus take His body, wrap it in linen and spices, and lay it in a new tomb in a garden.",
    themes: [
      {
        title: "'It Is Finished' — The Completed Work",
        desc: "Jesus' final cry from the cross declares that the work of atonement is fully accomplished — nothing more needs to be added to secure salvation.",
      },
      {
        title: "The Fulfillment of Scripture",
        desc: "John meticulously records how the events of the crucifixion fulfill Old Testament prophecies — the seamless garment, the thirst, the unbroken bones, and the pierced side.",
      },
      {
        title: "The Kingship of Jesus on the Cross",
        desc: "Pilate's inscription — 'Jesus of Nazareth the King of the Jews' — proclaims an ironic truth: even in death, Jesus reigns as King.",
      },
    ],
    questions: [
      "Why does Pilate present Jesus with the words 'Behold the man!' (v. 5), and what deeper meaning does John intend his readers to see?",
      "How does Pilate's inscription 'Jesus of Nazareth the King of the Jews' function on both a political and a theological level?",
      "What is the significance of Jesus entrusting His mother to the beloved disciple (vv. 26-27) even while dying on the cross?",
      "When Jesus says 'It is finished' (v. 30), what exactly has He finished, and why is this the most important statement in human history?",
      "Why does John emphasize the detail of blood and water flowing from Jesus' pierced side (v. 34), and what theological significance does this carry?",
    ],
    christConnection:
      "John 19 is the culmination of God's redemptive plan. Jesus, the Lamb of God introduced in chapter 1, is now slain for the sins of the world. 'It is finished' declares that the debt of sin is paid in full, the curse is absorbed, and the way to the Father is open. Every detail — from the seamless robe to the unbroken bones — confirms that Jesus is the true Passover Lamb.",
    keyVerse: {
      reference: "John 19:30",
      text: "When Jesus therefore had received the vinegar, he said, It is finished: and he bowed his head, and gave up the ghost.",
    },
  },

  "john/20": {
    overview:
      "On the first day of the week, Mary Magdalene finds the tomb empty and runs to tell Peter and John. Peter and John race to the tomb and find the grave clothes lying there. Jesus appears first to Mary, then to the disciples behind locked doors, showing them His hands and side. Thomas, who was absent, refuses to believe until Jesus appears again a week later and invites Thomas to touch His wounds, eliciting the confession, 'My Lord and my God.'",
    themes: [
      {
        title: "The Resurrection as Historical Fact",
        desc: "John records eyewitness details — the folded face cloth, the locked doors, the physical wounds — establishing the resurrection as a real event, not a myth.",
      },
      {
        title: "From Doubt to Worship",
        desc: "Thomas' journey from skepticism to the highest Christological confession in the Gospel ('My Lord and my God') shows that honest doubt can lead to deep faith.",
      },
      {
        title: "The Purpose of John's Gospel",
        desc: "John states explicitly that he wrote so that readers 'might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name.'",
      },
    ],
    questions: [
      "Why is it significant that Mary Magdalene is the first person to see the risen Jesus, and what does 'Touch me not; for I am not yet ascended' (v. 17) mean?",
      "What is the significance of the grave clothes being left behind in an orderly fashion (vv. 6-7)?",
      "When Jesus breathes on the disciples and says 'Receive ye the Holy Ghost' (v. 22), how does this relate to the promise of the Spirit in earlier chapters?",
      "How does Thomas' confession 'My Lord and my God' (v. 28) serve as the climax of John's entire Gospel?",
      "Jesus says, 'Blessed are they that have not seen, and yet have believed' (v. 29). How does this apply to every subsequent generation of Christians?",
    ],
    christConnection:
      "The resurrection is the vindication of everything Jesus claimed. He is the Son of God, the Resurrection and the Life, the Good Shepherd who took up His life again. Thomas' confession — 'My Lord and my God' — is the destination John has been guiding every reader toward from the opening verse. The risen Christ commissions His followers to continue His mission in the world.",
    keyVerse: {
      reference: "John 20:31",
      text: "But these are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name.",
    },
  },

  "john/21": {
    overview:
      "In the epilogue of John's Gospel, seven disciples go fishing on the Sea of Tiberias and catch nothing all night. At dawn, the risen Jesus stands on the shore and directs them to cast their net on the right side, resulting in a miraculous catch of 153 large fish. Over a charcoal-fire breakfast, Jesus restores Peter by asking him three times, 'Lovest thou me?' — once for each denial — and commissions him to feed His sheep.",
    themes: [
      {
        title: "The Restoration of Peter",
        desc: "Jesus' threefold question mirrors Peter's threefold denial, and each response becomes a commission — transforming failure into a foundation for future ministry.",
      },
      {
        title: "The Miraculous Provision of Christ",
        desc: "The overflowing catch of fish demonstrates that the risen Jesus still provides abundantly for His people and directs their labor to fruitfulness.",
      },
      {
        title: "Following Christ to the End",
        desc: "Jesus' final command to Peter — 'Follow me' — calls every disciple to lifelong, faithful obedience regardless of what happens to others.",
      },
    ],
    questions: [
      "Why does Jesus appear to the disciples during an ordinary fishing trip rather than in a more dramatic setting?",
      "What is the significance of Jesus asking Peter three times 'Lovest thou me?' and how does this heal Peter's earlier denials?",
      "How does the charcoal fire in this scene (v. 9) connect to the charcoal fire where Peter denied Jesus in chapter 18?",
      "Jesus tells Peter how he will die (vv. 18-19). What does it mean that faithfulness to Christ may ultimately cost one's life?",
      "When Peter asks about John's future, Jesus responds, 'What is that to thee? follow thou me' (v. 22). What does this teach about comparing ourselves to other believers?",
    ],
    christConnection:
      "The risen Christ meets His disciples in the ordinary routines of life, provides for them, and restores those who have failed. Peter, who denied Jesus three times, is not discarded but recommissioned three times to shepherd Christ's church. This chapter assures every reader that Christ's grace is greater than our greatest failures, and that His call to 'Follow me' remains open to all.",
    keyVerse: {
      reference: "John 21:17",
      text: "He saith unto him the third time, Simon, son of Jonas, lovest thou me? Peter was grieved because he said unto him the third time, Lovest thou me? And he said unto him, Lord, thou knowest all things; thou knowest that I love thee. Jesus saith unto him, Feed my sheep.",
    },
  },

  // ============================================================
  // GENESIS 1-12
  // ============================================================

  "genesis/1": {
    overview:
      "God creates the heavens and the earth in six days, speaking light, sky, land, vegetation, sun, moon, stars, sea creatures, birds, land animals, and finally mankind into existence. Each act of creation is accomplished by God's spoken word, and each day concludes with the refrain 'and God saw that it was good.' On the sixth day, God creates man in His own image, male and female, and gives them dominion over the earth.",
    themes: [
      {
        title: "Creation by the Word of God",
        desc: "God creates everything by speaking — 'And God said' — establishing that His word is powerful, authoritative, and the source of all reality.",
      },
      {
        title: "Mankind Made in the Image of God",
        desc: "Humans are uniquely created in God's image and likeness, giving every person inherent dignity, purpose, and the capacity for relationship with the Creator.",
      },
      {
        title: "God's Sovereign Order and Goodness",
        desc: "Creation moves from formlessness to order, from emptiness to fullness, and God declares it all good — the world as God made it reflects His character.",
      },
    ],
    questions: [
      "What does it mean that God creates by speaking, and how does this connect to John 1:1 where Jesus is called 'the Word'?",
      "What does it mean for humans to be made 'in the image of God' (v. 27), and how should this affect the way we view ourselves and others?",
      "Why does God give mankind dominion over creation (vv. 28-29), and what does responsible stewardship look like?",
      "What is the significance of the repeated phrase 'and God saw that it was good' for understanding the original state of the world?",
      "How does the structure of the six days of creation reveal God's character as a God of order, beauty, and purpose?",
    ],
    christConnection:
      "The New Testament reveals that Christ was the active agent of creation — 'All things were made by him' (John 1:3) and 'by him were all things created' (Colossians 1:16). The God who speaks the world into existence is the same Word who becomes flesh. Creation is the first chapter of the story that culminates in Jesus Christ.",
    keyVerse: {
      reference: "Genesis 1:1",
      text: "In the beginning God created the heaven and the earth.",
    },
  },

  "genesis/2": {
    overview:
      "God rests on the seventh day, blessing and sanctifying it. The narrative then focuses on the creation of Adam from the dust of the ground, God breathing life into his nostrils, and the planting of the Garden of Eden with the tree of life and the tree of knowledge of good and evil. God declares it is not good for man to be alone, and after Adam names the animals and finds no suitable companion, God creates Eve from Adam's rib.",
    themes: [
      {
        title: "The Sabbath Rest of God",
        desc: "God's rest on the seventh day establishes a pattern of work and rest, pointing to the ultimate rest that God offers His people.",
      },
      {
        title: "The Intimacy of God's Creation of Man",
        desc: "Unlike the rest of creation, God personally forms Adam from dust and breathes life into him — showing a unique, intimate relationship between Creator and mankind.",
      },
      {
        title: "The Institution of Marriage",
        desc: "God creates Eve as a helper corresponding to Adam, establishing marriage as the foundational human relationship — 'they shall be one flesh.'",
      },
    ],
    questions: [
      "What is the significance of God forming man from 'the dust of the ground' and breathing into his nostrils the breath of life (v. 7)?",
      "Why does God say 'It is not good that the man should be alone' (v. 18) when everything else in creation was declared good?",
      "What does the command not to eat of the tree of knowledge of good and evil (vv. 16-17) reveal about the nature of freedom and obedience?",
      "How does the creation of Eve from Adam's side illustrate the nature of the marriage relationship?",
      "What does the Sabbath rest teach us about the rhythm God intends for human life?",
    ],
    christConnection:
      "Adam is explicitly called a 'figure of him that was to come' (Romans 5:14). As the first Adam was formed from dust and given life by God's breath, so Christ — the last Adam — gives spiritual life to all who believe. The marriage of Adam and Eve foreshadows Christ and His bride, the Church (Ephesians 5:31-32).",
    keyVerse: {
      reference: "Genesis 2:7",
      text: "And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.",
    },
  },

  "genesis/3": {
    overview:
      "The serpent tempts Eve to eat from the forbidden tree, and she and Adam disobey God, bringing sin and death into the world. Their eyes are opened to their nakedness, they hide from God, and each blames another. God pronounces curses on the serpent, the woman, and the ground for Adam's sake. Yet in the midst of judgment, God gives the first promise of a Redeemer — the seed of the woman who will crush the serpent's head.",
    themes: [
      {
        title: "The Fall of Humanity",
        desc: "Through one act of disobedience, sin enters the human race, severing the intimate communion between God and mankind and bringing death to all creation.",
      },
      {
        title: "The Protoevangelium — The First Gospel Promise",
        desc: "Genesis 3:15 is the first announcement of the gospel: the seed of the woman will crush the serpent's head, promising ultimate victory over evil through a coming Redeemer.",
      },
      {
        title: "God Seeks the Sinner",
        desc: "Even after the Fall, God comes walking in the garden and calls out 'Where art thou?' — He is the seeking God who pursues those who run from Him.",
      },
    ],
    questions: [
      "How does the serpent's strategy of questioning God's word ('Yea, hath God said?') remain the primary tactic of temptation today?",
      "What changes immediately after Adam and Eve eat the fruit, and what does their attempt to cover themselves reveal about the human response to guilt?",
      "Why does God ask 'Where art thou?' (v. 9) when He already knows the answer, and what does this reveal about His character?",
      "How does the promise that the seed of the woman will bruise the serpent's head (v. 15) anticipate the entire biblical storyline?",
      "What is the significance of God making 'coats of skins' (v. 21) for Adam and Eve — the first shedding of blood to cover human shame?",
    ],
    christConnection:
      "Genesis 3:15 is the Bible's first promise of Christ. The 'seed of the woman' who crushes the serpent's head is fulfilled in Jesus, who was born of a virgin, defeated Satan at the cross, and will ultimately destroy evil forever. The coats of skin God provides point to the principle that sin requires a blood sacrifice — the foundational truth of the gospel.",
    keyVerse: {
      reference: "Genesis 3:15",
      text: "And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.",
    },
  },

  "genesis/4": {
    overview:
      "Adam and Eve's firstborn sons, Cain and Abel, bring offerings to God. God accepts Abel's animal sacrifice but rejects Cain's offering of the ground. Consumed by jealousy, Cain murders Abel in the field — the first human death in Scripture. God confronts Cain, pronounces a curse, and sends him away as a wanderer. The chapter traces Cain's descendants, who build cities and advance in culture but move further from God. It closes with the birth of Seth, through whom the godly line continues.",
    themes: [
      {
        title: "Acceptable Worship and Blood Sacrifice",
        desc: "Abel's accepted offering involves the firstlings of his flock and their fat, establishing early in Scripture that approaching God requires a blood sacrifice offered in faith.",
      },
      {
        title: "The Destructive Power of Sin",
        desc: "God warns Cain that sin 'lieth at the door' desiring to master him — sin left unchecked escalates from jealousy to rage to murder in a single generation.",
      },
      {
        title: "Two Lines of Humanity",
        desc: "Cain's line advances in civilization but declines spiritually, while Seth's line begins calling upon the name of the Lord — a pattern that continues throughout Scripture.",
      },
    ],
    questions: [
      "Why does God accept Abel's offering but reject Cain's, and what does Hebrews 11:4 add to our understanding?",
      "When God warns Cain that sin 'lieth at the door' (v. 7), what does this personification of sin teach about temptation?",
      "How does Cain's question 'Am I my brother's keeper?' (v. 9) reveal his hardened heart, and how does it challenge us?",
      "What does the contrast between Cain's line (vv. 17-24) and Seth's line (vv. 25-26) teach about civilization without God?",
      "How does Abel's blood 'crying from the ground' (v. 10) foreshadow the blood of Christ, which 'speaketh better things than that of Abel' (Hebrews 12:24)?",
    ],
    christConnection:
      "Abel's sacrifice of a firstling from the flock, offered by faith, prefigures the Lamb of God who would be slain for the sins of the world. Hebrews 12:24 explicitly contrasts Abel's blood with Christ's blood — Abel's cries for vengeance, but Christ's blood speaks forgiveness. Jesus is the ultimate righteous one murdered by His own brothers, yet His death brings not a curse but salvation.",
    keyVerse: {
      reference: "Genesis 4:7",
      text: "If thou doest well, shalt thou not be accepted? and if thou doest not well, sin lieth at the door. And unto thee shall be his desire, and thou shalt rule over him.",
    },
  },

  "genesis/5": {
    overview:
      "Genesis 5 records the genealogy from Adam through Seth to Noah, spanning ten generations. Each entry follows a pattern — the patriarch lives, fathers a son, has other children, and dies — with the somber refrain 'and he died' repeated throughout. The notable exception is Enoch, who 'walked with God: and he was not; for God took him,' being translated to heaven without dying. The genealogy closes with the birth of Noah, whose name means 'rest.'",
    themes: [
      {
        title: "The Reign of Death",
        desc: "The repeated refrain 'and he died' across every generation shows that the curse of Genesis 3 is universal — death reigns over all of Adam's descendants.",
      },
      {
        title: "Walking with God — The Example of Enoch",
        desc: "Enoch breaks the pattern of death by walking with God so closely that God takes him directly to heaven, showing that intimate fellowship with God is the antidote to the curse.",
      },
      {
        title: "The Preservation of the Godly Line",
        desc: "God preserves a lineage from Adam through Seth to Noah, ensuring that the promised seed of the woman (Genesis 3:15) will not be extinguished.",
      },
    ],
    questions: [
      "Why does the author repeat the phrase 'and he died' after each patriarch, and what is the theological significance of this pattern?",
      "What does it mean that Enoch 'walked with God' (v. 24), and how is his life a model for believers today?",
      "How does Enoch's translation without dying point to the hope of resurrection and eternal life?",
      "What role does the genealogy play in connecting the promise of Genesis 3:15 to the eventual coming of Christ?",
      "Noah's name is connected to rest and comfort (v. 29). How does this foreshadow both Noah's role in the flood narrative and the ultimate rest found in Christ?",
    ],
    christConnection:
      "This genealogy traces the line of the promised seed from Adam through Seth to Noah, maintaining the thread that will eventually lead to Christ. Enoch's escape from death foreshadows Christ's victory over the grave. The genealogy itself appears in Luke 3, which traces Jesus' lineage all the way back to Adam, confirming that Christ is the fulfillment of this ancient line.",
    keyVerse: {
      reference: "Genesis 5:24",
      text: "And Enoch walked with God: and he was not; for God took him.",
    },
  },

  "genesis/6": {
    overview:
      "As humanity multiplies, wickedness increases to the point where 'every imagination of the thoughts of his heart was only evil continually,' and God grieves that He made man. But Noah finds grace in the eyes of the Lord. God reveals His plan to destroy the earth with a flood and instructs Noah to build an ark of gopher wood, giving him precise dimensions. Noah obeys God completely, building the ark as commanded and preserving his family.",
    themes: [
      {
        title: "The Depth of Human Depravity",
        desc: "The description of mankind's wickedness — every thought 'only evil continually' — reveals the total corruption of the human heart apart from God's grace.",
      },
      {
        title: "Noah Found Grace",
        desc: "Before Noah is described as righteous, Scripture says he 'found grace' — his righteousness was the fruit of God's unmerited favor, not the cause of it.",
      },
      {
        title: "Obedient Faith in God's Word",
        desc: "Noah builds an enormous ark based solely on God's warning about an unprecedented event, demonstrating faith that acts on God's word even when the world mocks.",
      },
    ],
    questions: [
      "What does it mean that 'it repented the LORD that he had made man on the earth' (v. 6), and how do we understand God's grief?",
      "How is the statement that Noah 'found grace in the eyes of the LORD' (v. 8) foundational for understanding salvation throughout the Bible?",
      "What does Noah's obedience in building the ark teach about the relationship between faith and works?",
      "How does the corruption of 'all flesh' (v. 12) set the stage for understanding why God's judgment is just?",
      "In what ways does the ark serve as a picture of salvation — a vessel of safety in the midst of judgment?",
    ],
    christConnection:
      "Noah's ark is one of the Bible's most powerful pictures of Christ. As the ark was the only means of salvation from the flood of judgment, so Christ is the only refuge from the judgment to come. Peter explicitly draws this parallel in 1 Peter 3:20-21. Noah 'found grace' — the first mention of grace in Scripture — pointing to the grace fully revealed in Jesus Christ.",
    keyVerse: {
      reference: "Genesis 6:8",
      text: "But Noah found grace in the eyes of the LORD.",
    },
  },

  "genesis/7": {
    overview:
      "God commands Noah to enter the ark with his family and the animals — seven pairs of clean animals and one pair of unclean. After seven days, the floodwaters come: the fountains of the great deep break open and the windows of heaven are opened. Rain falls for forty days and forty nights, and the waters prevail upon the earth for one hundred fifty days, destroying every living thing not in the ark. God shuts Noah in the ark, sealing its only door.",
    themes: [
      {
        title: "Divine Judgment on Sin",
        desc: "The flood demonstrates that God takes sin seriously — His patience has a limit, and persistent rebellion eventually meets His righteous judgment.",
      },
      {
        title: "God Shuts the Door",
        desc: "The Lord Himself shuts Noah in the ark (v. 16), both protecting those inside and sealing the fate of those outside — God alone determines who is saved.",
      },
      {
        title: "The Faithfulness of Noah",
        desc: "Noah does 'according unto all that the LORD commanded him' (v. 5), demonstrating unwavering obedience over the decades of construction and the terror of the flood.",
      },
    ],
    questions: [
      "Why does God distinguish between clean and unclean animals before the Mosaic Law was given (v. 2)?",
      "What is the significance of the detail that 'the LORD shut him in' (v. 16) — that God, not Noah, closes the door of the ark?",
      "How does the flood narrative challenge modern views that God is too loving to judge sin?",
      "What parallels exist between the flood judgment and the future judgment that Jesus and the apostles describe (Matthew 24:37-39, 2 Peter 3:5-7)?",
      "How does Noah's faithful obedience over such a long period of time challenge us in our own walk with God?",
    ],
    christConnection:
      "Jesus Himself compared His second coming to the days of Noah (Matthew 24:37-39). Just as the flood brought sudden, universal judgment while Noah was saved through the ark, so Christ's return will bring judgment on unbelief while those 'in Christ' are saved. The ark's one door, shut by God Himself, pictures Christ as the only door of salvation (John 10:9).",
    keyVerse: {
      reference: "Genesis 7:16",
      text: "And they that went in, went in male and female of all flesh, as God had commanded him: and the LORD shut him in.",
    },
  },

  "genesis/8": {
    overview:
      "God remembers Noah and causes a wind to pass over the earth, and the waters begin to recede. The ark rests on the mountains of Ararat. Noah sends out a raven and then a dove to test the waters; the dove returns with an olive leaf, signaling that the earth is drying. When the ground is finally dry, God tells Noah to leave the ark. Noah builds an altar and offers burnt offerings to the Lord, and God promises never again to curse the ground or destroy every living thing with a flood.",
    themes: [
      {
        title: "God Remembers His Own",
        desc: "The phrase 'God remembered Noah' does not mean God forgot — it signals His faithful, covenant-keeping attention turning toward deliverance and restoration.",
      },
      {
        title: "New Creation from Judgment",
        desc: "The receding waters and dry land emerging echo the original creation — God is giving humanity a fresh start, a new beginning from the waters of judgment.",
      },
      {
        title: "Worship as the First Response",
        desc: "Noah's first act upon leaving the ark is to build an altar and offer sacrifice — gratitude and worship are the proper response to God's deliverance.",
      },
    ],
    questions: [
      "What does it mean that 'God remembered Noah' (v. 1), and what does this phrase teach about God's faithfulness to His people?",
      "How does the dove returning with an olive leaf (v. 11) serve as a symbol of hope and new life after judgment?",
      "Why is Noah's first action after the flood to build an altar and offer sacrifices (v. 20)?",
      "How does God's promise in verse 21 — 'I will not again curse the ground' — balance His justice with His mercy?",
      "In what ways does the post-flood world resemble a new creation, and what does this teach about God's redemptive purposes?",
    ],
    christConnection:
      "Noah's altar and sacrifice after the flood point to the ultimate sacrifice of Christ. Just as God was pleased with Noah's offering and promised a new beginning, so God is pleased with Christ's sacrifice and offers new life to all who believe. The dove with the olive branch has become a universal symbol of peace — the peace that Christ ultimately secures between God and man.",
    keyVerse: {
      reference: "Genesis 8:1",
      text: "And God remembered Noah, and every living thing, and all the cattle that was with him in the ark: and God made a wind to pass over the earth, and the waters asswaged.",
    },
  },

  "genesis/9": {
    overview:
      "God blesses Noah and his sons, renewing the creation mandate to 'be fruitful, and multiply, and replenish the earth.' He establishes the Noahic covenant, promising never again to destroy the earth by flood and setting the rainbow as the sign of this everlasting covenant. Noah plants a vineyard, becomes drunk, and is uncovered in his tent. Ham sees his father's nakedness and tells his brothers, while Shem and Japheth cover Noah respectfully. Noah pronounces blessings on Shem and Japheth and a curse on Canaan.",
    themes: [
      {
        title: "The Noahic Covenant and the Rainbow",
        desc: "God makes an unconditional covenant with all living creatures, sealed by the rainbow — a visible reminder that God keeps His promises across all generations.",
      },
      {
        title: "The Sanctity of Human Life",
        desc: "God institutes the principle that human life, made in His image, must be protected — 'Whoso sheddeth man's blood, by man shall his blood be shed.'",
      },
      {
        title: "Sin Persists After Judgment",
        desc: "Noah's drunkenness and Ham's dishonor reveal that the flood cleansed the earth but not the human heart — humanity still needs a deeper salvation.",
      },
    ],
    questions: [
      "What does the rainbow covenant (vv. 12-17) teach about the nature of God's promises and His faithfulness?",
      "Why does God now permit the eating of meat (v. 3) when the original creation mandate was vegetarian (Genesis 1:29)?",
      "How does the institution of capital punishment (v. 6) relate to the image of God in man?",
      "What does Noah's failure after the flood reveal about the limitations of external judgment to change the human heart?",
      "How do the blessings and curses on Noah's sons shape the rest of the biblical narrative?",
    ],
    christConnection:
      "The Noahic covenant is a covenant of grace — God binds Himself to preserve the earth, making it possible for the plan of redemption through Christ to unfold over centuries. The blessing on Shem is significant because it is through Shem's line that Abraham, David, and ultimately Jesus will come. Noah's failure also points to humanity's need for a better savior than any human figure.",
    keyVerse: {
      reference: "Genesis 9:13",
      text: "I do set my bow in the cloud, and it shall be for a token of a covenant between me and the earth.",
    },
  },

  "genesis/10": {
    overview:
      "Known as the Table of Nations, Genesis 10 traces the descendants of Noah's three sons — Japheth, Ham, and Shem — as they spread across the earth after the flood. The chapter identifies the founders of various nations and peoples, showing how the families of the earth multiplied and dispersed. Notable figures include Nimrod, a mighty hunter and founder of Babel and Nineveh, from Ham's line. The genealogy provides the historical backdrop for the events of Babel in chapter 11.",
    themes: [
      {
        title: "The Unity of the Human Race",
        desc: "All nations and ethnic groups descend from one family through Noah, establishing the biblical principle that every human being shares a common origin and dignity.",
      },
      {
        title: "The Spread of Nations by Divine Design",
        desc: "The dispersion of peoples across the earth fulfills God's command to fill the earth and sets the stage for His plan to bless all nations through Abraham.",
      },
      {
        title: "Nimrod and the Rise of Empires",
        desc: "Nimrod's kingdom — including Babel — represents the first organized human power opposing God, foreshadowing the pattern of empires that resist God's purposes throughout Scripture.",
      },
    ],
    questions: [
      "Why does Scripture include this detailed genealogy, and what does it teach about God's interest in all nations?",
      "How does the Table of Nations connect to God's later promise to Abraham that 'in thee shall all families of the earth be blessed' (Genesis 12:3)?",
      "What is significant about Nimrod being described as 'a mighty hunter before the LORD' (v. 9), and what does his kingdom represent?",
      "How does knowing that all humanity descends from one family affect our understanding of racial and ethnic differences?",
      "In what ways does this chapter set the historical stage for the tower of Babel incident that follows?",
    ],
    christConnection:
      "The Table of Nations shows that God's plan of redemption is not for one people alone but for all nations descended from Noah. This global scope anticipates the Great Commission and the vision of Revelation 7:9, where people from every nation stand before the Lamb. Christ came to reunite what was scattered and to bless every family on earth.",
    keyVerse: {
      reference: "Genesis 10:32",
      text: "These are the families of the sons of Noah, after their generations, in their nations: and by these were the nations divided in the earth after the flood.",
    },
  },

  "genesis/11": {
    overview:
      "The whole earth speaks one language and settles in the plain of Shinar, where the people decide to build a city and a tower 'whose top may reach unto heaven' to make a name for themselves. God comes down to see their work, confuses their language, and scatters them across the face of the earth — giving the place the name Babel. The chapter then records the genealogy from Shem to Abram, bridging the narrative from the post-flood world to the patriarchal era.",
    themes: [
      {
        title: "Human Pride versus Divine Sovereignty",
        desc: "The Tower of Babel represents humanity's attempt to reach heaven by its own effort and to unify apart from God — a project God easily and decisively thwarts.",
      },
      {
        title: "The Confusion of Languages",
        desc: "God confuses human language as an act of judgment and mercy — preventing unified rebellion while scattering humanity to fill the earth as originally commanded.",
      },
      {
        title: "The Line to Abraham",
        desc: "The genealogy from Shem to Abram narrows God's redemptive focus from all nations to one man through whom all nations will be blessed.",
      },
    ],
    questions: [
      "What was wrong with the people's desire to build a tower and 'make a name for themselves' (v. 4)?",
      "Why does God say 'nothing will be restrained from them, which they have imagined to do' (v. 6), and what does this reveal about the danger of human ambition without God?",
      "How does the confusion of languages at Babel contrast with the gift of tongues at Pentecost (Acts 2)?",
      "What is the significance of the declining lifespans in the genealogy from Shem to Abram?",
      "How does the transition from the Babel narrative to Abram's genealogy shift the direction of the entire biblical story?",
    ],
    christConnection:
      "Babel represents humanity's failed attempt to reach God through its own effort. God's response is to come down — a pattern culminating in the incarnation, when God Himself descends in Christ. The confusion of Babel is reversed at Pentecost when the Spirit enables people of every language to hear the gospel. The genealogy to Abram sets the stage for the covenant line that leads to Christ.",
    keyVerse: {
      reference: "Genesis 11:9",
      text: "Therefore is the name of it called Babel; because the LORD did there confound the language of all the earth: and from thence did the LORD scatter them abroad upon the face of all the earth.",
    },
  },

  "genesis/12": {
    overview:
      "God calls Abram to leave his country, his kindred, and his father's house and go to a land that God will show him. God makes a sevenfold promise: to make Abram a great nation, to bless him, to make his name great, to make him a blessing, to bless those who bless him, to curse those who curse him, and to bless all families of the earth through him. Abram obeys and journeys to Canaan. A famine drives him to Egypt, where he deceives Pharaoh about Sarai being his wife, but God protects her.",
    themes: [
      {
        title: "The Call of Abram — Faith and Obedience",
        desc: "Abram leaves everything familiar based solely on God's word, demonstrating the kind of faith that trusts God's promise even without seeing the destination.",
      },
      {
        title: "The Abrahamic Covenant — Blessing for All Nations",
        desc: "God's promise to bless all families of the earth through Abram is the seed of the gospel — the plan to reverse the curse of Genesis 3 begins here.",
      },
      {
        title: "Human Weakness and Divine Faithfulness",
        desc: "Abram's deception in Egypt shows that even the father of faith stumbles, yet God intervenes to protect the covenant promise despite Abram's failure.",
      },
    ],
    questions: [
      "What did it cost Abram to obey God's call to leave his homeland, and what does his obedience teach about the nature of faith?",
      "How does the promise 'in thee shall all families of the earth be blessed' (v. 3) anticipate the gospel of Jesus Christ?",
      "Why does Abram build altars at Shechem and Bethel (vv. 7-8), and what does this reveal about worship in the life of faith?",
      "What does Abram's failure in Egypt (vv. 10-20) teach about the tension between faith and fear?",
      "How does God's faithfulness to protect Sarai in Egypt demonstrate that His promises cannot be thwarted by human weakness?",
    ],
    christConnection:
      "Genesis 12:3 — 'in thee shall all families of the earth be blessed' — is the Old Testament's clearest promise of the gospel. Paul explicitly identifies this as the gospel preached beforehand to Abraham (Galatians 3:8). Christ is the ultimate seed of Abraham through whom all nations receive the blessing of salvation. The entire story of redemption narrows to this one man's call so that it can widen again to the whole world in Christ.",
    keyVerse: {
      reference: "Genesis 12:3",
      text: "And I will bless them that bless thee, and curse him that curseth thee: and in thee shall all families of the earth be blessed.",
    },
  },

  // ============================================================
  // KEY PSALMS
  // ============================================================

  "psalms/1": {
    overview:
      "Psalm 1 presents a stark contrast between two ways of life. The blessed man avoids the counsel, path, and seat of the ungodly and instead delights in the law of the Lord, meditating on it day and night. He is compared to a fruitful tree planted by rivers of water. The ungodly, by contrast, are like chaff that the wind drives away, unable to stand in the judgment. The psalm establishes the foundation for the entire Psalter: the righteous prosper, the wicked perish.",
    themes: [
      {
        title: "The Two Ways — Righteous and Wicked",
        desc: "The psalm presents only two paths in life — there is no middle ground between walking with God and walking with the ungodly.",
      },
      {
        title: "Delight in God's Word",
        desc: "The blessed man's secret is not mere avoidance of sin but active, joyful meditation on Scripture — his life is rooted in and nourished by the Word of God.",
      },
      {
        title: "The Certainty of Divine Judgment",
        desc: "The ungodly will not stand in the judgment — God knows the way of the righteous, but the way of the wicked will perish.",
      },
    ],
    questions: [
      "The psalm describes a progression — walking, standing, sitting — in the company of the ungodly (v. 1). What does this teach about how compromise develops gradually?",
      "What does it mean to 'delight' in God's law and meditate on it 'day and night' (v. 2)? How is this different from mere duty?",
      "How does the tree metaphor (v. 3) illustrate the relationship between rootedness in Scripture and fruitfulness in life?",
      "Why are the ungodly compared to 'chaff' (v. 4), and what does this image communicate about a life without God?",
      "How does this psalm serve as an introduction and interpretive key to the entire book of Psalms?",
    ],
    christConnection:
      "Jesus is the truly blessed man of Psalm 1 — the one who perfectly delighted in the Father's will, never walked in the counsel of the ungodly, and bore fruit in every season. He is also the tree of life planted by living water. All who are 'in Christ' share in His blessedness and fruitfulness.",
    keyVerse: {
      reference: "Psalm 1:3",
      text: "And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.",
    },
  },

  "psalms/23": {
    overview:
      "David's most beloved psalm declares, 'The LORD is my shepherd; I shall not want.' He describes God's provision in green pastures and beside still waters, His restoration of the soul, and His guidance in paths of righteousness. Even in the valley of the shadow of death, David fears no evil because God is with him. The psalm culminates with a table prepared in the presence of enemies, an overflowing cup, and the assurance of dwelling in God's house forever.",
    themes: [
      {
        title: "God as Personal Shepherd",
        desc: "The Lord is not a distant deity but a personal, attentive shepherd who knows, leads, provides for, and protects each of His sheep by name.",
      },
      {
        title: "Fearless Trust in the Darkest Valley",
        desc: "Even in the shadow of death, the believer need not fear — God's presence, represented by His rod and staff, provides comfort and protection.",
      },
      {
        title: "Abundance and Eternal Security",
        desc: "God does not merely meet minimum needs — He prepares a lavish table, anoints with oil, and fills the cup to overflowing, culminating in eternal dwelling with Him.",
      },
    ],
    questions: [
      "What does it mean to say 'The LORD is my shepherd' — how does the shepherd metaphor shape our understanding of God's care?",
      "How does the phrase 'He restoreth my soul' (v. 3) speak to those experiencing spiritual exhaustion or brokenness?",
      "What is the significance of walking 'through the valley of the shadow of death' rather than being kept from it (v. 4)?",
      "What does it mean that God prepares a table 'in the presence of mine enemies' (v. 5)? Why not remove the enemies?",
      "How does the final promise — 'I will dwell in the house of the LORD for ever' (v. 6) — transform the way we face life and death?",
    ],
    christConnection:
      "Jesus identifies Himself as the Good Shepherd in John 10, directly fulfilling this psalm. He is the shepherd who leads, feeds, restores, and protects His sheep — and who lays down His life for them. Because Christ has walked through the valley of death and emerged victorious, His sheep can follow Him through that same valley without fear.",
    keyVerse: {
      reference: "Psalm 23:1",
      text: "The LORD is my shepherd; I shall not want.",
    },
  },

  "psalms/46": {
    overview:
      "This psalm declares that God is the refuge and strength of His people, a very present help in trouble. Even if the earth is removed, the mountains shake, and the waters roar, the psalmist declares confidence in God's protection. God's city — His dwelling place — will not be moved because God is in the midst of her. The psalm reaches its climax with God's command to the nations: 'Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.'",
    themes: [
      {
        title: "God as Refuge in Catastrophe",
        desc: "When the natural world collapses and nations rage, God Himself is the unshakeable shelter — not circumstances but God is the basis of security.",
      },
      {
        title: "The Presence of God in His City",
        desc: "God dwells in the midst of His people, and His presence makes the difference between destruction and deliverance — 'God is in the midst of her; she shall not be moved.'",
      },
      {
        title: "Be Still and Know God's Sovereignty",
        desc: "The command to 'be still' is not passive resignation but an active trust that releases anxiety and rests in God's sovereign control over all nations and events.",
      },
    ],
    questions: [
      "What does it mean that God is 'a very present help in trouble' (v. 1), and how is this different from a distant or abstract comfort?",
      "The psalm describes catastrophic imagery — earth removed, mountains carried into the sea (vv. 2-3). What circumstances in our lives correspond to these images?",
      "What is the 'city of God' (v. 4), and how does God's presence within it guarantee its security?",
      "What does 'Be still, and know that I am God' (v. 10) mean in context — is it addressed to believers, to the nations, or to both?",
      "How does this psalm challenge our tendency to find security in things other than God?",
    ],
    christConnection:
      "God's promise to be a refuge and strength is fulfilled in Christ, through whom believers have access to the very presence of God. Jesus is Emmanuel — God with us — the ultimate expression of God dwelling 'in the midst of her.' His death and resurrection have made peace between God and man, and in Him we find the stillness and security this psalm celebrates.",
    keyVerse: {
      reference: "Psalm 46:10",
      text: "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.",
    },
  },

  "psalms/91": {
    overview:
      "Psalm 91 promises extraordinary protection to those who dwell in the secret place of the Most High and abide under the shadow of the Almighty. The psalmist declares that God will deliver from the snare, the pestilence, the terror by night, and the arrow by day. A thousand may fall at your side and ten thousand at your right hand, but it shall not come near you. Angels are given charge over the faithful. The psalm closes with God Himself speaking, promising long life and salvation to those who set their love upon Him.",
    themes: [
      {
        title: "Dwelling in the Secret Place",
        desc: "The psalm's promises flow from a posture of intimate, sustained communion with God — dwelling and abiding, not merely visiting His presence.",
      },
      {
        title: "Comprehensive Divine Protection",
        desc: "God's protection covers every conceivable danger — disease, warfare, demonic attack, and natural disaster — nothing escapes His sovereign care.",
      },
      {
        title: "Angelic Ministry on Behalf of Believers",
        desc: "God commands His angels to guard and bear up His people, revealing an unseen spiritual protection that accompanies those who trust Him.",
      },
    ],
    questions: [
      "What does it mean to 'dwell in the secret place of the most High' (v. 1), and how does one enter that place?",
      "Satan quoted verses 11-12 of this psalm when tempting Jesus (Matthew 4:6). How did Jesus' response correct the misuse of this promise?",
      "Does this psalm guarantee that no harm will ever befall a believer? How do we reconcile its promises with the reality of suffering?",
      "What is the relationship between the believer's trust (vv. 1-2) and God's promises of protection (vv. 3-16)?",
      "How does God speaking in the first person in verses 14-16 add weight and intimacy to the psalm's promises?",
    ],
    christConnection:
      "Satan used this very psalm to tempt Jesus in the wilderness, urging Him to throw Himself from the temple and force angelic rescue. Jesus refused to test the Father, demonstrating perfect trust. Christ is the one who perfectly dwelt in the secret place of the Most High, and through Him, believers find their ultimate shelter. He is the shadow of the Almighty under whose wings we take refuge.",
    keyVerse: {
      reference: "Psalm 91:1-2",
      text: "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty. I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust.",
    },
  },

  "psalms/119": {
    overview:
      "Psalm 119 is the longest chapter in the Bible — 176 verses arranged as an acrostic with eight verses for each of the twenty-two letters of the Hebrew alphabet. The entire psalm is a sustained meditation on the beauty, power, and sufficiency of God's Word, using terms like law, testimonies, precepts, statutes, commandments, judgments, word, and way. The psalmist expresses love for God's law, laments over persecution, pleads for understanding, and declares that God's Word is a lamp, a source of hope, and sweeter than honey.",
    themes: [
      {
        title: "The Sufficiency and Beauty of God's Word",
        desc: "Every verse celebrates Scripture as the complete guide for life — sufficient for instruction, correction, comfort, and direction in every circumstance.",
      },
      {
        title: "Obedience Born from Delight",
        desc: "The psalmist does not obey God's law grudgingly but delights in it, loves it, and meditates on it — obedience flows from a transformed heart, not mere duty.",
      },
      {
        title: "Scripture as a Light in Darkness",
        desc: "In the midst of affliction, persecution, and confusion, God's Word provides clarity, hope, and direction — it is a lamp to the feet and a light to the path.",
      },
    ],
    questions: [
      "Why does the psalmist use so many different words for Scripture (law, testimonies, precepts, statutes, commandments, judgments)? What does each contribute?",
      "How does the psalmist's repeated cry 'Give me understanding' (vv. 34, 73, 125, 144, 169) shape our approach to Bible study?",
      "The psalmist says 'Thy word is a lamp unto my feet, and a light unto my path' (v. 105). How does this metaphor describe the way Scripture guides daily decisions?",
      "How does the psalmist's affliction (vv. 67, 71, 75) actually deepen his relationship with God's Word?",
      "What does it look like practically to 'meditate on God's precepts' and 'delight in His statutes' in modern daily life?",
    ],
    christConnection:
      "Jesus is the Word made flesh — the living embodiment of everything Psalm 119 celebrates. He perfectly fulfilled God's law, delighted in the Father's will, and used Scripture to resist temptation and accomplish His mission. When we love God's Word, we are ultimately loving and drawing near to Christ Himself, who is the Word behind every word of Scripture.",
    keyVerse: {
      reference: "Psalm 119:105",
      text: "Thy word is a lamp unto my feet, and a light unto my path.",
    },
  },

  "psalms/139": {
    overview:
      "David marvels at the all-knowing, ever-present God who has searched him and known him completely. God knows his thoughts, his words before he speaks them, and every step he takes. There is nowhere David can flee from God's presence — not in heaven, not in Sheol, not at the farthest sea. David reflects on being fearfully and wonderfully made in his mother's womb, with every day of his life written in God's book before one of them existed. He closes by inviting God to search his heart and lead him in the everlasting way.",
    themes: [
      {
        title: "The Omniscience of God",
        desc: "God knows everything about every person — every thought, word, and action — and this knowledge is not distant analysis but intimate, personal awareness.",
      },
      {
        title: "The Omnipresence of God",
        desc: "There is no place in all creation where God is absent — His presence fills heaven, the grave, the darkness, and the depths of the sea.",
      },
      {
        title: "Fearfully and Wonderfully Made",
        desc: "God personally and deliberately formed every human being in the womb, giving each person inherent worth, purpose, and a life ordained by the Creator.",
      },
    ],
    questions: [
      "How should the knowledge that God knows our every thought (vv. 1-4) affect the way we live, and is this truth comforting or convicting?",
      "David says God's knowledge is 'too wonderful for me; it is high, I cannot attain unto it' (v. 6). What does it mean to rest in a God who is beyond our full comprehension?",
      "What does being 'fearfully and wonderfully made' (v. 14) mean for our self-understanding and for how we view every human life?",
      "How does the statement that God's thoughts toward us are 'more in number than the sand' (v. 18) reshape our sense of worth and significance?",
      "Why does David conclude by asking God to 'search me' and 'try me' (vv. 23-24)? What does this prayer reveal about the relationship between God's omniscience and personal holiness?",
    ],
    christConnection:
      "Christ is the one through whom God's intimate knowledge and presence become personal. In Jesus, the God who is everywhere became the God who is here — dwelling among us, knowing us by name, and dying for us while we were yet sinners. The 'everlasting way' David asks to be led in finds its ultimate expression in Jesus, who is Himself the Way, the Truth, and the Life.",
    keyVerse: {
      reference: "Psalm 139:14",
      text: "I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well.",
    },
  },
};

export function getChapterContent(
  bookSlug: string,
  chapter: number,
): ChapterContent | null {
  return chapterContent[`${bookSlug}/${chapter}`] || null;
}
