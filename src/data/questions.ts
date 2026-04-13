export interface Question {
  id: string;
  question: string;
  excerpt: string;
  category: string;
  answer: string[];
  keyVerses: { reference: string; text: string }[];
  bibleReading: { reference: string; link: string }[];
  relatedQuestions: string[];
}

export const questions: Question[] = [
  {
    id: 'who-is-jesus',
    question: 'Who is Jesus Christ?',
    excerpt: 'Jesus is the Son of God, the Savior of the world, and the fulfillment of Old Testament prophecy.',
    category: 'Identity',
    answer: [
      'Jesus Christ is the central figure of the entire Bible and of human history. He is the eternal Son of God who took on human flesh and was born of the virgin Mary in Bethlehem. The Gospel of John declares, "In the beginning was the Word, and the Word was with God, and the Word was God" (John 1:1), establishing that Jesus is not a created being but is fully God from all eternity.',
      'Jesus is also fully human. He grew up in Nazareth, experienced hunger, fatigue, and grief. He wept at the tomb of His friend Lazarus (John 11:35). This dual nature — fully God and fully man — is essential to who He is. He had to be God to save us and man to represent us before the Father.',
      'Throughout the Old Testament, hundreds of prophecies pointed forward to His coming. He was born in Bethlehem (Micah 5:2), born of a virgin (Isaiah 7:14), ministered in Galilee (Isaiah 9:1-2), entered Jerusalem on a donkey (Zechariah 9:9), was betrayed for thirty pieces of silver (Zechariah 11:12-13), and was crucified among criminals (Isaiah 53:12). Jesus fulfilled every one of these prophecies.',
      'Jesus described Himself with seven "I am" statements in the Gospel of John: the Bread of Life, the Light of the World, the Door, the Good Shepherd, the Resurrection and the Life, the Way the Truth and the Life, and the True Vine. Each reveals a facet of His character and mission. He is the complete answer to every human need.',
    ],
    keyVerses: [
      { reference: 'John 1:1', text: 'In the beginning was the Word, and the Word was with God, and the Word was God.' },
      { reference: 'Colossians 2:9', text: 'For in him dwelleth all the fulness of the Godhead bodily.' },
      { reference: 'John 14:6', text: 'Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.' },
    ],
    bibleReading: [
      { reference: 'John 1 — The Word Made Flesh', link: '/bible/john/1' },
      { reference: 'John 10 — The Good Shepherd', link: '/bible/john/10' },
    ],
    relatedQuestions: ['why-did-jesus-die', 'is-jesus-the-only-way', 'is-jesus-coming-back'],
  },
  {
    id: 'why-did-jesus-die',
    question: 'Why did Jesus die on the cross?',
    excerpt: 'Jesus died to pay the penalty for our sins and provide the way to eternal life through His sacrifice.',
    category: 'Salvation',
    answer: [
      'Jesus died on the cross because the penalty for sin is death (Romans 6:23), and no human being could pay that penalty for themselves and survive. Since Adam and Eve\'s fall in the Garden of Eden, every person has been born with a sinful nature and has willfully sinned against God. The Bible declares, "For all have sinned, and come short of the glory of God" (Romans 3:23).',
      'God is both perfectly loving and perfectly just. His love desires to forgive; His justice demands that sin be punished. The cross is where these two attributes meet. Jesus, the sinless Son of God, took upon Himself the punishment that we deserved. "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us" (Romans 5:8).',
      'Jesus\'s death was not an accident or a tragedy — it was the plan of God from before the foundation of the world. In the Garden of Gethsemane, Jesus prayed, "Not my will, but thine, be done" (Luke 22:42). He went to the cross willingly, out of love for us and obedience to the Father.',
      'Through His death and resurrection, Jesus defeated sin, death, and the power of the devil. He opened the way for every person to be reconciled to God. "For there is one God, and one mediator between God and men, the man Christ Jesus; who gave himself a ransom for all" (1 Timothy 2:5-6).',
    ],
    keyVerses: [
      { reference: 'Romans 5:8', text: 'But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.' },
      { reference: 'Isaiah 53:5', text: 'But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.' },
      { reference: '1 Peter 3:18', text: 'For Christ also hath once suffered for sins, the just for the unjust, that he might bring us to God.' },
    ],
    bibleReading: [
      { reference: 'John 19 — The Crucifixion', link: '/bible/john/19' },
      { reference: 'John 3 — For God So Loved the World', link: '/bible/john/3' },
    ],
    relatedQuestions: ['what-is-salvation', 'what-is-sin', 'what-is-grace'],
  },
  {
    id: 'what-is-salvation',
    question: 'What is salvation?',
    excerpt: 'Salvation is the deliverance from sin and its consequences through faith in Jesus Christ.',
    category: 'Salvation',
    answer: [
      'Salvation is God\'s act of delivering human beings from the power and penalty of sin through the death and resurrection of Jesus Christ. It is the most important gift anyone can receive because it determines our eternal destiny. Jesus said, "For what shall it profit a man, if he shall gain the whole world, and lose his own soul?" (Mark 8:36).',
      'Salvation is by grace through faith — not by our own works or merit. "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: not of works, lest any man should boast" (Ephesians 2:8-9). We cannot earn salvation through good deeds, religious rituals, or moral effort. It is a free gift received by trusting in Jesus.',
      'To be saved, a person must acknowledge their sin, believe that Jesus died for them and rose again, and place their trust in Him as Lord and Savior. Romans 10:9 states, "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved."',
      'Salvation is not just about going to heaven when you die — it transforms your life right now. It gives you a new identity as a child of God (John 1:12), the indwelling Holy Spirit (Romans 8:9), freedom from the power of sin (Romans 6:14), and the hope of eternal life with God.',
    ],
    keyVerses: [
      { reference: 'Ephesians 2:8-9', text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.' },
      { reference: 'Romans 10:9', text: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.' },
      { reference: 'John 3:16', text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.' },
    ],
    bibleReading: [
      { reference: 'John 3 — You Must Be Born Again', link: '/bible/john/3' },
      { reference: 'John 20 — Believing and Having Life', link: '/bible/john/20' },
    ],
    relatedQuestions: ['why-did-jesus-die', 'what-is-grace', 'what-is-faith'],
  },
  {
    id: 'how-to-follow-jesus',
    question: 'How do I follow Jesus?',
    excerpt: 'Following Jesus means believing in Him, repenting of sin, and living according to His teachings.',
    category: 'Discipleship',
    answer: [
      'Following Jesus begins with a decision to believe in Him and trust Him with your life. Jesus\'s first words of public ministry were "Repent: for the kingdom of heaven is at hand" (Matthew 4:17). To follow Jesus, you must turn from sin (repentance) and turn toward Him in faith.',
      'Following Jesus is not a one-time event but a daily commitment. Jesus said, "If any man will come after me, let him deny himself, and take up his cross daily, and follow me" (Luke 9:23). This means putting His will above your own desires, priorities, and plans.',
      'Practical steps for following Jesus include: reading the Bible daily to know His teachings, praying regularly to maintain your relationship with Him, gathering with other believers in a local church for encouragement and accountability, and obeying His commands — especially the command to love God and love others (Matthew 22:37-39).',
      'Following Jesus also means sharing your faith with others. Jesus\'s final command was the Great Commission: "Go ye therefore, and teach all nations" (Matthew 28:19). As you grow in your own understanding of Christ, you become a witness to others through both your words and your transformed life.',
    ],
    keyVerses: [
      { reference: 'Luke 9:23', text: 'And he said to them all, If any man will come after me, let him deny himself, and take up his cross daily, and follow me.' },
      { reference: 'John 8:12', text: 'Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.' },
      { reference: 'Matthew 28:19', text: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.' },
    ],
    bibleReading: [
      { reference: 'John 15 — Abide in Me', link: '/bible/john/15' },
      { reference: 'John 13 — A New Commandment', link: '/bible/john/13' },
    ],
    relatedQuestions: ['what-is-faith', 'how-to-live-as-christian', 'how-to-pray'],
  },
  {
    id: 'is-jesus-the-only-way',
    question: 'Is Jesus the only way to God?',
    excerpt: 'Jesus said, "I am the way and the truth and the life. No one comes to the Father except through me."',
    category: 'Theology',
    answer: [
      'This is one of the most important and most debated questions in all of religion. And the answer, according to Jesus Himself, is unambiguous: "I am the way, the truth, and the life: no man cometh unto the Father, but by me" (John 14:6). Jesus did not claim to be one way among many — He claimed to be the only way.',
      'This claim makes sense when we understand the problem Jesus came to solve. The issue is sin — and every human being is guilty of it (Romans 3:23). Sin separates us from a holy God, and no amount of human effort, religious ritual, or moral improvement can bridge that gap. Only a perfect sacrifice could atone for sin, and Jesus is the only sinless person who ever lived (2 Corinthians 5:21).',
      'The Apostle Peter declared before the religious leaders of his day: "Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved" (Acts 4:12). This was not religious intolerance — it was a statement of reality. Just as there is only one cure for a disease, there is only one remedy for sin.',
      'This exclusivity is actually the most inclusive message possible. Jesus said "whosoever believeth" — not whosoever is smart enough, good enough, or religious enough. The door is narrow (Matthew 7:14), but it is open to everyone. No one is excluded by race, nationality, social status, or past sins. Anyone who comes to Jesus in faith will be received.',
    ],
    keyVerses: [
      { reference: 'John 14:6', text: 'Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.' },
      { reference: 'Acts 4:12', text: 'Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.' },
      { reference: 'John 10:9', text: 'I am the door: by me if any man enter in, he shall be saved, and shall go in and out, and find pasture.' },
    ],
    bibleReading: [
      { reference: 'John 14 — The Way, Truth, and Life', link: '/bible/john/14' },
      { reference: 'John 10 — The Good Shepherd', link: '/bible/john/10' },
    ],
    relatedQuestions: ['who-is-jesus', 'what-is-salvation', 'what-is-faith'],
  },
  {
    id: 'what-is-grace',
    question: 'What is God\'s grace?',
    excerpt: 'Grace is God\'s unmerited favor—His kindness toward us that we cannot earn or deserve.',
    category: 'Theology',
    answer: [
      'Grace is one of the most beautiful words in the Bible. It means God\'s unmerited favor — His kindness, love, and generosity toward people who have done nothing to deserve it and can never earn it. Grace is not a reward for good behavior; it is a gift freely given by a loving God.',
      'The clearest definition comes from Paul: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: not of works, lest any man should boast" (Ephesians 2:8-9). Grace means that God does for us what we could never do for ourselves. He forgives, He restores, He transforms — all as a free gift.',
      'Grace is most powerfully demonstrated at the cross. "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us" (Romans 5:8). God didn\'t wait for us to clean up our act. While we were still His enemies, He gave His Son to die in our place. That is the ultimate act of grace.',
      'Grace is not just for the moment of salvation — it sustains us every day. When Paul struggled with a "thorn in the flesh," God told him, "My grace is sufficient for thee: for my strength is made perfect in weakness" (2 Corinthians 12:9). God\'s grace meets us in our weakness, failure, and need.',
    ],
    keyVerses: [
      { reference: 'Ephesians 2:8-9', text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.' },
      { reference: '2 Corinthians 12:9', text: 'And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness.' },
      { reference: 'Titus 2:11', text: 'For the grace of God that bringeth salvation hath appeared to all men.' },
    ],
    bibleReading: [
      { reference: 'John 1 — Full of Grace and Truth', link: '/bible/john/1' },
      { reference: 'Genesis 6 — Noah Found Grace', link: '/bible/genesis/6' },
    ],
    relatedQuestions: ['what-is-salvation', 'what-is-faith', 'why-did-jesus-die'],
  },
  {
    id: 'how-to-pray',
    question: 'How should I pray?',
    excerpt: 'Prayer is honest communication with God. Jesus taught His disciples to pray with sincerity and faith.',
    category: 'Practice',
    answer: [
      'Prayer is simply talking with God — honestly, humbly, and with faith that He hears you. You don\'t need special words, a particular posture, or a religious setting. God invites you to come to Him just as you are. "Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need" (Hebrews 4:16).',
      'Jesus gave His disciples a model prayer, often called the Lord\'s Prayer (Matthew 6:9-13). It begins with worship ("Our Father which art in heaven, Hallowed be thy name"), moves to submission ("Thy will be done"), includes petition ("Give us this day our daily bread"), confession ("Forgive us our debts"), and protection ("Lead us not into temptation"). This pattern — praise, surrender, request, confession, protection — provides a helpful framework.',
      'Jesus also taught that prayer should be sincere, not performative. "But thou, when thou prayest, enter into thy closet, and when thou hast shut thy door, pray to thy Father which is in secret; and thy Father which seeth in secret shall reward thee openly" (Matthew 6:6). God is not impressed by long, flowery prayers. He wants your honest heart.',
      'Paul instructs believers to "pray without ceasing" (1 Thessalonians 5:17) — meaning prayer should be a constant attitude, not just a scheduled activity. Talk to God throughout your day: thank Him for blessings, ask for wisdom in decisions, bring Him your worries and fears. Philippians 4:6 promises that when we pray with thanksgiving, "the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus."',
    ],
    keyVerses: [
      { reference: 'Matthew 6:6', text: 'But thou, when thou prayest, enter into thy closet, and when thou hast shut thy door, pray to thy Father which is in secret; and thy Father which seeth in secret shall reward thee openly.' },
      { reference: 'Philippians 4:6', text: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.' },
      { reference: '1 Thessalonians 5:17', text: 'Pray without ceasing.' },
    ],
    bibleReading: [
      { reference: 'John 17 — Jesus\'s High Priestly Prayer', link: '/bible/john/17' },
      { reference: 'Psalm 23 — The Lord Is My Shepherd', link: '/bible/psalms/23' },
    ],
    relatedQuestions: ['how-to-follow-jesus', 'what-is-faith', 'how-to-live-as-christian'],
  },
  {
    id: 'what-about-suffering',
    question: 'Why is there suffering in the world?',
    excerpt: 'Suffering exists because of sin\'s consequences, but God can work through our suffering for good.',
    category: 'Theology',
    answer: [
      'This is one of the most painful and personal questions anyone can ask. The Bible doesn\'t shy away from it. Suffering entered the world through the fall of Adam and Eve in Genesis 3. When humanity chose to rebel against God, sin brought death, disease, pain, and brokenness into creation. The world we live in is not the world God originally made — it is a fallen world.',
      'But suffering is not meaningless. Romans 8:28 promises, "And we know that all things work together for good to them that love God, to them who are the called according to his purpose." God does not cause all suffering, but He can redeem all suffering. He is able to bring good out of even the darkest circumstances.',
      'Jesus Himself suffered more than anyone. Isaiah 53:3 describes Him as "a man of sorrows, and acquainted with grief." He was rejected, mocked, beaten, and crucified. Because He suffered, He understands our pain. "For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin" (Hebrews 4:15).',
      'The Bible promises that suffering is temporary. "For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory" (2 Corinthians 4:17). God will one day make all things new, and "God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying" (Revelation 21:4).',
    ],
    keyVerses: [
      { reference: 'Romans 8:28', text: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.' },
      { reference: 'Hebrews 4:15', text: 'For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin.' },
      { reference: 'Revelation 21:4', text: 'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.' },
    ],
    bibleReading: [
      { reference: 'Genesis 3 — The Fall', link: '/bible/genesis/3' },
      { reference: 'Psalm 46 — God Is Our Refuge', link: '/bible/psalms/46' },
    ],
    relatedQuestions: ['what-is-sin', 'what-is-grace', 'is-jesus-coming-back'],
  },
  {
    id: 'what-is-sin',
    question: 'What is sin?',
    excerpt: 'Sin is rebellion against God and separation from His righteousness; all humans are sinners.',
    category: 'Theology',
    answer: [
      'Sin is any thought, word, or action that falls short of God\'s perfect standard. The Bible says, "For all have sinned, and come short of the glory of God" (Romans 3:23). Sin is not merely breaking rules — it is a fundamental rebellion against the Creator, a declaration that we know better than God.',
      'Sin entered the world through Adam and Eve in the Garden of Eden (Genesis 3). God gave them one prohibition — not to eat from the tree of the knowledge of good and evil. They chose to disobey, and through that single act, sin and death entered the human race. "Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned" (Romans 5:12).',
      'Sin is not just outward actions — it begins in the heart. Jesus taught that anger is the root of murder and lust is the root of adultery (Matthew 5:21-28). God sees not just what we do but why we do it. This means that even our "good" deeds, when motivated by pride or self-interest, fall short of God\'s perfect standard.',
      'The consequence of sin is spiritual death — eternal separation from God. "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord" (Romans 6:23). This is why Jesus had to come. Only a sinless substitute could pay the penalty that we owed. Through faith in Christ, we receive forgiveness and are declared righteous before God.',
    ],
    keyVerses: [
      { reference: 'Romans 3:23', text: 'For all have sinned, and come short of the glory of God.' },
      { reference: 'Romans 6:23', text: 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.' },
      { reference: '1 John 1:9', text: 'If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.' },
    ],
    bibleReading: [
      { reference: 'Genesis 3 — The Fall of Man', link: '/bible/genesis/3' },
      { reference: 'Genesis 4 — Cain and Abel', link: '/bible/genesis/4' },
    ],
    relatedQuestions: ['what-is-salvation', 'why-did-jesus-die', 'what-is-grace'],
  },
  {
    id: 'how-to-live-as-christian',
    question: 'How should a Christian live?',
    excerpt: 'Christians are called to live in obedience to Christ, showing love, kindness, and holiness.',
    category: 'Discipleship',
    answer: [
      'The Christian life is summarized in Jesus\'s two greatest commandments: "Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind" and "Thou shalt love thy neighbour as thyself" (Matthew 22:37-39). Everything else flows from these two commands — love for God and love for people.',
      'Living as a Christian means being transformed from the inside out. Paul writes, "Be not conformed to this world: but be ye transformed by the renewing of your mind" (Romans 12:2). This transformation happens through reading God\'s Word, prayer, fellowship with other believers, and yielding to the Holy Spirit who dwells within every believer.',
      'The fruit of the Spirit describes what a Christ-shaped life looks like: "love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance" (Galatians 5:22-23). These qualities are not produced by human effort but by the Spirit of God working within us as we abide in Christ.',
      'Christians are also called to be salt and light in the world (Matthew 5:13-16). This means living with integrity at work, showing generosity to the needy, speaking truth with grace, forgiving those who wrong us, and pointing others to Christ through both our words and our actions.',
    ],
    keyVerses: [
      { reference: 'Matthew 22:37-39', text: 'Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind. This is the first and great commandment. And the second is like unto it, Thou shalt love thy neighbour as thyself.' },
      { reference: 'Galatians 5:22-23', text: 'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.' },
      { reference: 'Romans 12:2', text: 'And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.' },
    ],
    bibleReading: [
      { reference: 'John 15 — Abide in Me', link: '/bible/john/15' },
      { reference: 'John 13 — Love One Another', link: '/bible/john/13' },
    ],
    relatedQuestions: ['how-to-follow-jesus', 'how-to-pray', 'what-is-faith'],
  },
  {
    id: 'what-is-faith',
    question: 'What is faith?',
    excerpt: 'Faith is belief in and trust of God\'s character, promises, and the person of Jesus Christ.',
    category: 'Theology',
    answer: [
      'The Bible gives its own definition of faith: "Now faith is the substance of things hoped for, the evidence of things not seen" (Hebrews 11:1). Faith is not blind belief or wishful thinking — it is confident trust in God based on who He is and what He has promised. It is the "substance" (a solid foundation) of our hope.',
      'Faith is the means by which we receive salvation. "For by grace are ye saved through faith" (Ephesians 2:8). We cannot see God with our physical eyes, but we trust Him based on His Word, His works, and the testimony of the Holy Spirit in our hearts. Just as we trust a chair to hold us without testing its molecular structure, we trust God based on His proven character.',
      'Hebrews 11, often called the "Hall of Faith," gives examples of men and women who lived by faith: Abel, Noah, Abraham, Sarah, Moses, and many others. Each one trusted God\'s promises before seeing their fulfillment. Abraham "believed God, and it was counted unto him for righteousness" (Romans 4:3). Faith is taking God at His word.',
      'Faith is not static — it grows. Jesus compared faith to a mustard seed that starts small but grows into a great tree (Matthew 17:20). Faith grows as we read God\'s Word, pray, obey, and see Him work in our lives. "So then faith cometh by hearing, and hearing by the word of God" (Romans 10:17).',
    ],
    keyVerses: [
      { reference: 'Hebrews 11:1', text: 'Now faith is the substance of things hoped for, the evidence of things not seen.' },
      { reference: 'Romans 10:17', text: 'So then faith cometh by hearing, and hearing by the word of God.' },
      { reference: 'Hebrews 11:6', text: 'But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.' },
    ],
    bibleReading: [
      { reference: 'John 20 — Blessed Are Those Who Believe', link: '/bible/john/20' },
      { reference: 'Genesis 12 — Abraham\'s Faith', link: '/bible/genesis/12' },
    ],
    relatedQuestions: ['what-is-salvation', 'what-is-grace', 'how-to-follow-jesus'],
  },
  {
    id: 'is-jesus-coming-back',
    question: 'Will Jesus return?',
    excerpt: 'Yes, Jesus promised to return for His followers and establish His kingdom in its fullness.',
    category: 'End Times',
    answer: [
      'Yes, absolutely. Jesus promised His disciples, "I will come again, and receive you unto myself; that where I am, there ye may be also" (John 14:3). The return of Jesus Christ is one of the most frequently mentioned doctrines in the New Testament — it appears in nearly every book.',
      'The second coming of Christ will be visible and unmistakable. "For as the lightning cometh out of the east, and shineth even unto the west; so shall also the coming of the Son of man be" (Matthew 24:27). Unlike His first coming as a humble baby in Bethlehem, His return will be in power and glory. "And then shall they see the Son of man coming in the clouds with great power and glory" (Mark 13:26).',
      'When Jesus returns, He will judge the living and the dead, reward His followers, and establish His eternal kingdom. "For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first" (1 Thessalonians 4:16). Death will be defeated, tears will be wiped away, and God will dwell with His people forever.',
      'No one knows the exact time of His return — Jesus said even He did not know the day or hour, only the Father (Matthew 24:36). But we are told to live in readiness. "Therefore be ye also ready: for in such an hour as ye think not the Son of man cometh" (Matthew 24:44). The promise of His return gives us hope, urgency, and motivation to live faithfully.',
    ],
    keyVerses: [
      { reference: 'John 14:3', text: 'And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.' },
      { reference: 'Acts 1:11', text: 'Which also said, Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.' },
      { reference: 'Revelation 22:20', text: 'He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus.' },
    ],
    bibleReading: [
      { reference: 'John 14 — I Will Come Again', link: '/bible/john/14' },
      { reference: 'John 21 — Jesus\'s Final Words', link: '/bible/john/21' },
    ],
    relatedQuestions: ['who-is-jesus', 'what-about-suffering', 'what-is-faith'],
  },
];

export function getQuestionById(id: string): Question | undefined {
  return questions.find(q => q.id === id);
}

export function getAllQuestions(): Question[] {
  return questions;
}

export function getQuestionsByCategory(category: string): Question[] {
  return questions.filter(q => q.category === category);
}
