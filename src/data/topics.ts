export interface Topic {
  id: string;
  name: string;
  description: string;
  keyVerse: string;
  keyVerseReference: string;
  // Enriched fields
  longDescription: string;
  sections: { title: string; content: string }[];
  relatedTopics: string[];
  keyVerses: string[];
  bibleReading: { reference: string; link: string }[];
}

export const topics: Topic[] = [
  {
    id: 'faith',
    name: 'Faith',
    description: 'Trust in God and belief in His promises',
    keyVerse: 'Now faith is confidence in what we hope for and assurance about what we do not see.',
    keyVerseReference: 'Hebrews 11:1',
    longDescription: 'Faith is the bedrock of the Christian life and the means by which we receive God\'s promises. Throughout Scripture, faith is presented not merely as intellectual belief but as a deep, abiding trust in the character and promises of God. From Abraham\'s willingness to leave his homeland to the early church\'s bold witness, faith has always been the distinguishing mark of those who walk with God. It is through faith that we are justified, sanctified, and ultimately brought into the fullness of God\'s kingdom.',
    sections: [
      {
        title: 'The Nature of Biblical Faith',
        content: 'Biblical faith is far more than mere mental assent to a set of propositions. The Greek word "pistis" carries the meaning of trust, confidence, and faithfulness. Hebrews 11:1 defines faith as "the substance of things hoped for, the evidence of things not seen." This means faith gives reality to what we cannot yet perceive with our senses. It is the conviction that God is who He says He is and will do what He has promised. True faith involves the whole person: the mind understands God\'s truth, the heart embraces it, and the will acts upon it.'
      },
      {
        title: 'Faith in the Old Testament',
        content: 'The Old Testament is filled with examples of extraordinary faith. Abraham believed God\'s promise of a son when it seemed impossible, and it was counted to him as righteousness (Genesis 15:6). Moses chose to suffer with God\'s people rather than enjoy the fleeting pleasures of Egypt (Hebrews 11:24-26). David faced Goliath with nothing but a sling and his faith in the living God. The prophets spoke God\'s word faithfully even when persecuted and rejected. Each of these examples demonstrates that faith is not passive but active, not timid but bold, rooted in the unchanging character of God.'
      },
      {
        title: 'Faith and Salvation',
        content: 'The New Testament makes clear that salvation comes through faith alone in Christ alone. Paul writes in Ephesians 2:8-9, "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast." Faith is the instrument by which we receive the gift of God\'s grace. It is not our faith itself that saves us, but the object of our faith: Jesus Christ and His finished work on the cross. When we place our trust in Him, we are forgiven, justified, and given new life.'
      },
      {
        title: 'Living by Faith Daily',
        content: 'Faith is not only the means of entering the Christian life but also the means of living it. Paul declares in Galatians 2:20, "The life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me." Daily faith means trusting God in ordinary moments: in our work, our relationships, our trials, and our decisions. It means believing that God is sovereign even when circumstances seem chaotic, and that His purposes will prevail even when we cannot see the way forward.'
      }
    ],
    relatedTopics: ['hope', 'grace', 'obedience'],
    keyVerses: [
      'Hebrews 11:1',
      'Romans 10:17',
      'Ephesians 2:8-9',
      'Galatians 2:20',
      'Hebrews 11:6'
    ],
    bibleReading: [
      { reference: 'Hebrews 11 - Heroes of Faith', link: '/bible/hebrews/11' },
      { reference: 'Romans 4 - Abraham\'s Faith', link: '/bible/romans/4' },
      { reference: 'James 2 - Faith and Works', link: '/bible/james/2' },
      { reference: 'Mark 11 - Faith to Move Mountains', link: '/bible/mark/11' }
    ],
  },
  {
    id: 'hope',
    name: 'Hope',
    description: 'Confidence and expectation in God\'s future promises',
    keyVerse: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.',
    keyVerseReference: 'Romans 15:13',
    longDescription: 'Hope in the Bible is not wishful thinking but a confident expectation rooted in the faithfulness of God. It is an anchor for the soul, steadfast and sure, because it is grounded in the character of the One who cannot lie. Christian hope looks forward to the fulfillment of all God\'s promises: the return of Christ, the resurrection of the body, and the restoration of all things. This hope transforms how we endure suffering, face death, and live each day with purpose and joy.',
    sections: [
      {
        title: 'The Foundation of Christian Hope',
        content: 'Christian hope is not optimism based on human potential or favorable circumstances. It is a settled confidence that rests entirely on the promises and character of God. The writer of Hebrews describes this hope as "an anchor of the soul, both sure and stedfast" (Hebrews 6:19). Because God is faithful and cannot lie (Titus 1:2), every promise He has made will be fulfilled. This gives the believer a certainty about the future that nothing in this world can provide or take away.'
      },
      {
        title: 'Hope in Times of Suffering',
        content: 'One of the most remarkable aspects of biblical hope is that it grows stronger through suffering, not weaker. Paul writes in Romans 5:3-5, "We glory in tribulations also: knowing that tribulation worketh patience; And patience, experience; and experience, hope: And hope maketh not ashamed; because the love of God is shed abroad in our hearts by the Holy Ghost." Suffering, when endured in faith, produces a tested, proven hope that cannot be shaken. The early Christians, who faced severe persecution, exemplified this hope-filled endurance.'
      },
      {
        title: 'The Blessed Hope: Christ\'s Return',
        content: 'The ultimate expression of Christian hope is the promised return of Jesus Christ. Paul calls this "the blessed hope" in Titus 2:13. Jesus Himself promised, "I will come again, and receive you unto myself" (John 14:3). This hope encompasses the resurrection of believers, the final defeat of sin and death, and the establishment of God\'s eternal kingdom where there will be no more tears, pain, or sorrow. This forward-looking hope motivates believers to live holy and godly lives as they await their Lord.'
      },
      {
        title: 'Sharing the Hope Within Us',
        content: 'Peter instructs believers to "be ready always to give an answer to every man that asketh you a reason of the hope that is in you with meekness and fear" (1 Peter 3:15). The hope that Christians carry is meant to be visible and contagious. In a world filled with despair and uncertainty, the confident hope of the believer stands out. When others see us facing trials with peace and looking toward the future with joy, they are naturally drawn to ask about the source of our hope.'
      }
    ],
    relatedTopics: ['faith', 'joy', 'peace'],
    keyVerses: [
      'Romans 15:13',
      'Hebrews 6:19',
      'Romans 5:3-5',
      'Titus 2:13',
      '1 Peter 3:15'
    ],
    bibleReading: [
      { reference: 'Romans 8 - Hope of Glory', link: '/bible/romans/8' },
      { reference: '1 Peter 1 - A Living Hope', link: '/bible/1-peter/1' },
      { reference: 'Revelation 21 - All Things New', link: '/bible/revelation/21' },
      { reference: 'Lamentations 3 - Hope in Affliction', link: '/bible/lamentations/3' }
    ],
  },
  {
    id: 'love',
    name: 'Love',
    description: 'God\'s sacrificial love and our response to Him',
    keyVerse: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
    keyVerseReference: 'John 3:16',
    longDescription: 'Love is the defining attribute of God and the greatest commandment given to His people. The Bible declares that "God is love" (1 John 4:8), and His love is demonstrated supremely in the sacrifice of His Son, Jesus Christ. Biblical love is not a fleeting emotion but a steadfast commitment to seek the highest good of another, even at great personal cost. Understanding and experiencing God\'s love transforms every relationship and every area of life, making it the greatest of all virtues.',
    sections: [
      {
        title: 'God\'s Love Defined',
        content: 'The love of God as revealed in Scripture is unlike any human concept of love. The Greek word "agape" describes a selfless, unconditional, and sacrificial love that seeks the good of the beloved regardless of their merit or response. Romans 5:8 declares, "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us." This is the love that originates in God\'s own nature, not in any worthiness found in the objects of His love. It is a love that gives freely, forgives completely, and perseveres eternally.'
      },
      {
        title: 'The Greatest Commandment',
        content: 'When asked which commandment was the greatest, Jesus replied, "Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind. This is the first and great commandment. And the second is like unto it, Thou shalt love thy neighbour as thyself" (Matthew 22:37-39). Love is not merely one duty among many; it is the fulfillment of the entire law. All of God\'s commands flow from and point toward love. To love God supremely and our neighbor sacrificially is the essence of what it means to live as God intended.'
      },
      {
        title: 'Love in Action: 1 Corinthians 13',
        content: 'Paul\'s description of love in 1 Corinthians 13 provides a practical portrait of what love looks like in daily life. Love is patient and kind. It does not envy or boast. It is not easily provoked and keeps no record of wrongs. Love bears all things, believes all things, hopes all things, and endures all things. This is not a sentimental feeling but a description of character forged by the Holy Spirit. Paul concludes that of faith, hope, and love, "the greatest of these is charity" (1 Corinthians 13:13) because love endures forever.'
      },
      {
        title: 'Loving as Christ Loved Us',
        content: 'Jesus set the ultimate standard for love when He said, "A new commandment I give unto you, That ye love one another; as I have loved you" (John 13:34). The measure of Christian love is the love of Christ Himself: a love that serves, a love that sacrifices, a love that lays down its life for others. John writes, "Hereby perceive we the love of God, because he laid down his life for us: and we ought to lay down our lives for the brethren" (1 John 3:16). As we abide in Christ, His love flows through us to others.'
      }
    ],
    relatedTopics: ['grace', 'forgiveness', 'sacrifice'],
    keyVerses: [
      'John 3:16',
      '1 John 4:8',
      'Romans 5:8',
      '1 Corinthians 13:4-7',
      'John 13:34-35'
    ],
    bibleReading: [
      { reference: '1 Corinthians 13 - The Love Chapter', link: '/bible/1-corinthians/13' },
      { reference: '1 John 4 - God Is Love', link: '/bible/1-john/4' },
      { reference: 'John 15 - Abiding in Love', link: '/bible/john/15' },
      { reference: 'Romans 8 - Inseparable Love', link: '/bible/romans/8' }
    ],
  },
  {
    id: 'grace',
    name: 'Grace',
    description: 'God\'s unmerited favor and forgiveness',
    keyVerse: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God.',
    keyVerseReference: 'Ephesians 2:8',
    longDescription: 'Grace is one of the most magnificent themes in all of Scripture, describing God\'s undeserved favor toward sinful humanity. It is the foundation of our salvation, the power for our daily living, and the guarantee of our eternal future. Grace means that God gives us what we do not deserve and withholds from us what we do deserve. Apart from grace, no one could stand before a holy God. Through grace, the vilest sinner can be made righteous, adopted into God\'s family, and given an eternal inheritance.',
    sections: [
      {
        title: 'What Grace Means',
        content: 'The word "grace" in the New Testament comes from the Greek word "charis," meaning favor, kindness, or a gift freely given. Grace is often defined as God\'s unmerited favor: His kindness toward those who deserve only judgment. It is not a reward for good behavior or a response to human merit. Paul makes this unmistakably clear: "And if by grace, then is it no more of works: otherwise grace is no more grace" (Romans 11:6). Grace and human effort are mutually exclusive as grounds for salvation. Grace is entirely God\'s initiative, flowing from His own generous and loving character.'
      },
      {
        title: 'Grace and the Cross',
        content: 'The supreme demonstration of God\'s grace is the cross of Jesus Christ. Paul writes, "For ye know the grace of our Lord Jesus Christ, that, though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich" (2 Corinthians 8:9). At the cross, the sinless Son of God bore the full penalty for human sin. This was not because humanity deserved it, but because God is rich in grace. The cross reveals that grace is costly: it cost God everything, though it is given to us freely. It is at the cross that justice and mercy meet.'
      },
      {
        title: 'Living Under Grace',
        content: 'Grace is not only the means of our salvation but also the power for holy living. Paul writes, "For the grace of God that bringeth salvation hath appeared to all men, Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly, in this present world" (Titus 2:11-12). Grace does not give us license to sin; rather, it empowers us to live in a way that pleases God. Understanding grace produces gratitude, and gratitude produces obedience. We do not obey in order to earn grace; we obey because we have received grace.'
      },
      {
        title: 'Extending Grace to Others',
        content: 'Those who have received God\'s grace are called to extend grace to others. Jesus taught this powerfully in the parable of the unforgiving servant (Matthew 18:21-35), where a man forgiven an enormous debt refused to forgive a small one. Paul instructs, "Let your speech be alway with grace, seasoned with salt" (Colossians 4:6). A grace-filled life is marked by patience, forgiveness, generosity, and kindness toward others, especially those who do not deserve it. In showing grace, we reflect the character of our heavenly Father.'
      }
    ],
    relatedTopics: ['forgiveness', 'redemption', 'love'],
    keyVerses: [
      'Ephesians 2:8-9',
      'Romans 11:6',
      '2 Corinthians 8:9',
      'Titus 2:11-12',
      'Romans 6:14'
    ],
    bibleReading: [
      { reference: 'Ephesians 2 - Saved by Grace', link: '/bible/ephesians/2' },
      { reference: 'Romans 3 - Justified by Grace', link: '/bible/romans/3' },
      { reference: 'Titus 2 - Grace That Teaches', link: '/bible/titus/2' },
      { reference: 'John 1 - Grace and Truth', link: '/bible/john/1' }
    ],
  },
  {
    id: 'forgiveness',
    name: 'Forgiveness',
    description: 'God\'s pardon and our forgiveness of others',
    keyVerse: 'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.',
    keyVerseReference: 'Colossians 3:13',
    longDescription: 'Forgiveness lies at the very heart of the Christian gospel. God, in His mercy, pardons sinners through the atoning work of Jesus Christ, removing their guilt and restoring them to relationship with Himself. This divine forgiveness becomes the model and motivation for believers to forgive one another. Forgiveness is not merely a nice idea; it is a command rooted in the reality of what God has done for us. Without forgiveness, there can be no reconciliation with God or genuine peace among people.',
    sections: [
      {
        title: 'God\'s Forgiveness of Sinners',
        content: 'The Bible teaches that all people have sinned and fall short of God\'s glory (Romans 3:23), and that the wages of sin is death (Romans 6:23). Yet God, being rich in mercy, has provided forgiveness through the blood of Jesus Christ. "In whom we have redemption through his blood, the forgiveness of sins, according to the riches of his grace" (Ephesians 1:7). God\'s forgiveness is not a casual overlooking of sin; it is a costly act rooted in the sacrifice of His Son. When God forgives, He removes our sins "as far as the east is from the west" (Psalm 103:12) and remembers them no more.'
      },
      {
        title: 'The Conditions of Forgiveness',
        content: 'God\'s forgiveness, while freely offered, is received through repentance and faith. Jesus proclaimed, "Repent ye, and believe the gospel" (Mark 1:15). John writes, "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness" (1 John 1:9). Confession means agreeing with God about our sin, acknowledging it honestly rather than excusing or minimizing it. When we come to God with genuine repentance and faith in Christ, we can be confident that His forgiveness is complete and certain.'
      },
      {
        title: 'Forgiving Others as God Forgave Us',
        content: 'Jesus made an inseparable link between receiving God\'s forgiveness and extending forgiveness to others. In the Lord\'s Prayer, He taught us to pray, "And forgive us our debts, as we forgive our debtors" (Matthew 6:12). He then added, "For if ye forgive men their trespasses, your heavenly Father will also forgive you" (Matthew 6:14). This does not mean we earn forgiveness by forgiving others, but rather that a truly forgiven heart will overflow with forgiveness toward others. The one who refuses to forgive has not truly grasped the magnitude of what God has forgiven them.'
      },
      {
        title: 'The Freedom of Forgiveness',
        content: 'Forgiveness liberates both the one who forgives and the one who is forgiven. Bitterness and resentment are heavy chains that imprison the soul. When we forgive, we release others from the debt they owe us and free ourselves from the corrosive effects of anger and unforgiveness. Paul instructs, "Let all bitterness, and wrath, and anger, and clamour, and evil speaking, be put away from you, with all malice: And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ\'s sake hath forgiven you" (Ephesians 4:31-32).'
      }
    ],
    relatedTopics: ['grace', 'love', 'peace'],
    keyVerses: [
      'Colossians 3:13',
      'Ephesians 1:7',
      '1 John 1:9',
      'Matthew 6:14-15',
      'Ephesians 4:31-32'
    ],
    bibleReading: [
      { reference: 'Psalm 51 - A Prayer for Forgiveness', link: '/bible/psalms/51' },
      { reference: 'Matthew 18 - Parable of the Unforgiving Servant', link: '/bible/matthew/18' },
      { reference: 'Luke 15 - The Prodigal Son', link: '/bible/luke/15' },
      { reference: 'Colossians 3 - Forgiving One Another', link: '/bible/colossians/3' }
    ],
  },
  {
    id: 'peace',
    name: 'Peace',
    description: 'Inner peace through trust in Christ',
    keyVerse: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives.',
    keyVerseReference: 'John 14:27',
    longDescription: 'Peace is a gift that Jesus promised to His followers, a deep and abiding calm that transcends outward circumstances. Biblical peace has two dimensions: peace with God through justification by faith, and the peace of God that guards our hearts and minds. In a world filled with conflict, uncertainty, and fear, the peace that Christ gives is a supernatural gift that the world cannot give and cannot take away. It is both a present reality and a future promise for every believer.',
    sections: [
      {
        title: 'Peace with God',
        content: 'The most fundamental kind of peace is peace with God, which comes through faith in Jesus Christ. Paul writes, "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ" (Romans 5:1). Before salvation, every person is at enmity with God because of sin. The cross of Christ removes that enmity, reconciling us to God and ending the hostility that sin created. This peace is objective and permanent; it does not fluctuate with our feelings. Once justified, we are forever at peace with our Creator.'
      },
      {
        title: 'The Peace of God',
        content: 'Beyond peace with God, believers are promised the peace of God: an inner tranquility that guards the heart and mind. Paul writes, "And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus" (Philippians 4:7). This peace is experienced when we bring our anxieties to God in prayer with thanksgiving. It is a peace that defies logic, remaining steady even in the most distressing circumstances. This is not the absence of trouble but the presence of God in the midst of trouble.'
      },
      {
        title: 'Jesus, the Prince of Peace',
        content: 'Isaiah prophesied that the Messiah would be called the "Prince of Peace" (Isaiah 9:6). Jesus fulfilled this title perfectly. On the night before His crucifixion, He told His disciples, "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid" (John 14:27). The peace Jesus gives is fundamentally different from the world\'s version of peace. The world offers temporary relief based on favorable circumstances; Jesus offers eternal peace based on His unchanging presence and promises.'
      },
      {
        title: 'Being Peacemakers',
        content: 'Jesus said, "Blessed are the peacemakers: for they shall be called the children of God" (Matthew 5:9). Believers are called not only to experience peace but to actively promote it. Paul urges, "If it be possible, as much as lieth in you, live peaceably with all men" (Romans 12:18). Being a peacemaker means pursuing reconciliation, speaking truth with love, and seeking harmony in our relationships. It requires humility, patience, and a willingness to absorb offense rather than escalate conflict, following the example of Christ Himself.'
      }
    ],
    relatedTopics: ['anxiety', 'joy', 'faith'],
    keyVerses: [
      'John 14:27',
      'Romans 5:1',
      'Philippians 4:6-7',
      'Isaiah 9:6',
      'Matthew 5:9'
    ],
    bibleReading: [
      { reference: 'John 14 - Peace I Leave with You', link: '/bible/john/14' },
      { reference: 'Philippians 4 - The Peace of God', link: '/bible/philippians/4' },
      { reference: 'Isaiah 9 - Prince of Peace', link: '/bible/isaiah/9' },
      { reference: 'Romans 5 - Peace with God', link: '/bible/romans/5' }
    ],
  },
  {
    id: 'anxiety',
    name: 'Anxiety',
    description: 'Overcoming worry through faith and prayer',
    keyVerse: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.',
    keyVerseReference: 'Philippians 4:6',
    longDescription: 'Anxiety is one of the most common struggles people face, and Scripture speaks to it with both compassion and clarity. God does not simply command us not to worry; He provides the resources and promises that make it possible to overcome anxiety. Through prayer, trust in His sovereignty, and meditation on His Word, believers can experience a peace that surpasses understanding. The Bible acknowledges the reality of our fears while pointing us to the God who holds all things in His hands.',
    sections: [
      {
        title: 'What the Bible Says About Worry',
        content: 'Jesus addressed anxiety directly in the Sermon on the Mount: "Take no thought for your life, what ye shall eat, or what ye shall drink; nor yet for your body, what ye shall put on. Is not the life more than meat, and the body than raiment?" (Matthew 6:25). Jesus was not dismissing legitimate concerns but exposing the futility of anxiety. Worry cannot add a single hour to our lives (Matthew 6:27). Instead of worrying, Jesus calls us to seek first the kingdom of God and trust that our heavenly Father knows our needs and will provide for them.'
      },
      {
        title: 'The Antidote: Prayer and Trust',
        content: 'Paul provides the biblical prescription for anxiety in Philippians 4:6-7: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus." The antidote to anxiety is not positive thinking or willpower but prayer accompanied by thanksgiving. When we bring our concerns to God and thank Him for His faithfulness, He replaces our anxiety with His supernatural peace.'
      },
      {
        title: 'Casting Our Cares on God',
        content: 'Peter writes, "Casting all your care upon him; for he careth for you" (1 Peter 5:7). The image is of deliberately placing our burdens onto God\'s strong shoulders. This is not a passive hope that things will work out but an active decision to trust God with the things that concern us. The basis for this trust is God\'s care for us: He is not indifferent to our struggles. The Psalms are filled with examples of believers pouring out their fears and anxieties to God and finding comfort in His presence and promises.'
      },
      {
        title: 'Renewing the Mind Against Anxiety',
        content: 'Paul follows his instruction about anxiety with guidance for the mind: "Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things" (Philippians 4:8). Anxiety often feeds on catastrophic thinking and worst-case scenarios. The biblical antidote is to deliberately fill our minds with truth, beauty, and the promises of God, replacing lies with the reality of God\'s goodness and sovereignty.'
      }
    ],
    relatedTopics: ['peace', 'faith', 'strength'],
    keyVerses: [
      'Philippians 4:6-7',
      'Matthew 6:25-34',
      '1 Peter 5:7',
      'Philippians 4:8',
      'Isaiah 41:10'
    ],
    bibleReading: [
      { reference: 'Matthew 6 - Do Not Worry', link: '/bible/matthew/6' },
      { reference: 'Philippians 4 - Rejoice and Be Anxious for Nothing', link: '/bible/philippians/4' },
      { reference: 'Psalm 23 - The Lord Is My Shepherd', link: '/bible/psalms/23' },
      { reference: 'Isaiah 41 - Fear Not, I Am with You', link: '/bible/isaiah/41' }
    ],
  },
  {
    id: 'joy',
    name: 'Joy',
    description: 'Happiness rooted in God\'s presence',
    keyVerse: 'Rejoice in the Lord always. I will say it again: Rejoice!',
    keyVerseReference: 'Philippians 4:4',
    longDescription: 'Joy in the Bible is not the same as happiness, which depends on favorable circumstances. Biblical joy is a deep, settled gladness rooted in the character of God and the reality of salvation. It is a fruit of the Holy Spirit that can coexist with sorrow, pain, and hardship. The early Christians experienced profound joy even in the midst of persecution because their joy was anchored in something the world could neither give nor take away. Joy is both a gift to receive and a discipline to cultivate.',
    sections: [
      {
        title: 'The Source of True Joy',
        content: 'True joy comes from God Himself, not from our circumstances. The psalmist declares, "Thou wilt shew me the path of life: in thy presence is fulness of joy; at thy right hand there are pleasures for evermore" (Psalm 16:11). Joy is found in the presence of God. Jesus told His disciples, "These things have I spoken unto you, that my joy might remain in you, and that your joy might be full" (John 15:11). The joy Christ offers is His own joy dwelling within us through the Holy Spirit. It is a joy that comes from knowing God, being loved by Him, and resting in His purposes.'
      },
      {
        title: 'Joy as a Fruit of the Spirit',
        content: 'Paul lists joy as the second fruit of the Spirit in Galatians 5:22. This means that joy is produced in us by the Holy Spirit as we walk with God. It is not something we manufacture through effort or positive thinking but something that grows naturally as we abide in Christ. Like a branch connected to the vine, the believer who remains in close fellowship with Christ will bear the fruit of joy. This joy is resilient, not fragile; it can endure hardship because it is rooted in eternal realities rather than temporary circumstances.'
      },
      {
        title: 'Joy in Trials',
        content: 'James writes, "My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience" (James 1:2-3). This does not mean we should enjoy suffering but that we can find joy in what God is doing through our trials. Paul and Silas sang hymns of praise at midnight in a Philippian jail (Acts 16:25). The early church rejoiced that they were counted worthy to suffer for the name of Christ (Acts 5:41). Joy in trials is possible because we trust in a God who works all things together for good.'
      },
      {
        title: 'Choosing Joy Daily',
        content: 'Paul\'s command to "Rejoice in the Lord always" (Philippians 4:4) indicates that joy involves a choice. We can choose to focus on God\'s faithfulness rather than our problems. We can choose gratitude over complaint. Nehemiah declared, "The joy of the LORD is your strength" (Nehemiah 8:10). Joy is not passive; it is actively cultivated through worship, gratitude, fellowship with other believers, and meditation on God\'s Word. When we deliberately turn our attention to who God is and what He has done, joy naturally follows.'
      }
    ],
    relatedTopics: ['hope', 'peace', 'strength'],
    keyVerses: [
      'Philippians 4:4',
      'Psalm 16:11',
      'John 15:11',
      'Nehemiah 8:10',
      'James 1:2-3'
    ],
    bibleReading: [
      { reference: 'Philippians 4 - Rejoice Always', link: '/bible/philippians/4' },
      { reference: 'Psalm 16 - Fullness of Joy', link: '/bible/psalms/16' },
      { reference: 'John 15 - Abiding Joy', link: '/bible/john/15' },
      { reference: 'Habakkuk 3 - Joy Despite Circumstances', link: '/bible/habakkuk/3' }
    ],
  },
  {
    id: 'strength',
    name: 'Strength',
    description: 'God\'s strength in our weakness',
    keyVerse: 'I can do all this through him who gives me strength.',
    keyVerseReference: 'Philippians 4:13',
    longDescription: 'The Bible teaches a paradox that runs counter to worldly wisdom: true strength is found in acknowledging our weakness and depending on God\'s power. Throughout Scripture, God consistently chooses to display His might through weak and ordinary vessels so that the glory belongs to Him alone. From Moses with his speech impediment to Paul with his thorn in the flesh, God\'s power is made perfect in weakness. This truth frees us from the pressure of self-sufficiency and invites us into the limitless strength of the Almighty.',
    sections: [
      {
        title: 'God as Our Strength',
        content: 'The psalmist declares, "God is our refuge and strength, a very present help in trouble" (Psalm 46:1). Throughout the Old Testament, God is consistently portrayed as the strength of His people. Moses told Israel, "The LORD is my strength and song, and he is become my salvation" (Exodus 15:2). Isaiah promises, "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint" (Isaiah 40:31). God does not merely give strength; He is our strength.'
      },
      {
        title: 'Strength in Weakness',
        content: 'Paul learned a profound lesson about strength when he pleaded with God to remove his "thorn in the flesh." God\'s answer was, "My grace is sufficient for thee: for my strength is made perfect in weakness." Paul\'s response was remarkable: "Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me... for when I am weak, then am I strong" (2 Corinthians 12:9-10). This is the divine paradox: our weakness becomes the occasion for God\'s power to be displayed most clearly.'
      },
      {
        title: 'Spiritual Strength for Daily Life',
        content: 'Paul prays for the Ephesian believers "to be strengthened with might by his Spirit in the inner man" (Ephesians 3:16). Spiritual strength is not physical toughness but an inner fortitude that comes from the Holy Spirit. It enables us to stand firm in temptation, persevere through trials, and remain faithful in service. Paul writes from prison, "I can do all things through Christ which strengtheneth me" (Philippians 4:13). This verse is not a promise of unlimited human achievement but a declaration that Christ provides the strength needed for every situation God places us in.'
      },
      {
        title: 'Drawing Strength from God\'s Word',
        content: 'Joshua was told, "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night... then thou shalt have good success" (Joshua 1:8). God\'s Word is a primary source of spiritual strength. The psalmist writes, "Thy word have I hid in mine heart, that I might not sin against thee" (Psalm 119:11). When we read, study, memorize, and meditate on Scripture, we are fortified against temptation, doubt, and discouragement. The Word of God is the sword of the Spirit (Ephesians 6:17), our greatest weapon in spiritual battle.'
      }
    ],
    relatedTopics: ['faith', 'anxiety', 'purpose'],
    keyVerses: [
      'Philippians 4:13',
      'Isaiah 40:31',
      '2 Corinthians 12:9-10',
      'Psalm 46:1',
      'Ephesians 3:16'
    ],
    bibleReading: [
      { reference: 'Isaiah 40 - Renewing Strength', link: '/bible/isaiah/40' },
      { reference: '2 Corinthians 12 - Power in Weakness', link: '/bible/2-corinthians/12' },
      { reference: 'Psalm 46 - God Is Our Refuge', link: '/bible/psalms/46' },
      { reference: 'Ephesians 6 - The Armor of God', link: '/bible/ephesians/6' }
    ],
  },
  {
    id: 'wisdom',
    name: 'Wisdom',
    description: 'Understanding and application of God\'s truth',
    keyVerse: 'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.',
    keyVerseReference: 'James 1:5',
    longDescription: 'Wisdom in the Bible is far more than intelligence or knowledge; it is the skill of living rightly before God and others. True wisdom begins with the fear of the Lord and is expressed in godly character, sound decisions, and righteous relationships. The book of Proverbs devotes extensive attention to wisdom, personifying it as more valuable than gold or jewels. In Christ, believers have access to "all the treasures of wisdom and knowledge" (Colossians 2:3), and God promises to give wisdom generously to all who ask in faith.',
    sections: [
      {
        title: 'The Beginning of Wisdom',
        content: 'Proverbs 9:10 declares, "The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding." The fear of the Lord is not a cringing terror but a reverent awe and respect for God\'s majesty, holiness, and authority. This posture of humility before God is the foundation upon which all true wisdom is built. Without it, human wisdom is ultimately foolishness in God\'s sight (1 Corinthians 3:19). When we acknowledge God as the source of all truth and submit to His authority, we are positioned to receive genuine wisdom.'
      },
      {
        title: 'Wisdom from Above',
        content: 'James distinguishes between earthly wisdom and heavenly wisdom: "But the wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated, full of mercy and good fruits, without partiality, and without hypocrisy" (James 3:17). Godly wisdom produces a distinctly different kind of life than worldly cleverness. It leads to purity, peace, gentleness, and mercy. This wisdom is not gained through academic study alone but through a living relationship with God, guided by His Spirit and grounded in His Word.'
      },
      {
        title: 'Christ, the Wisdom of God',
        content: 'Paul writes that Christ Jesus "is made unto us wisdom, and righteousness, and sanctification, and redemption" (1 Corinthians 1:30). In Christ are hidden "all the treasures of wisdom and knowledge" (Colossians 2:3). The world considered the cross foolishness, but Paul declares it to be "the power of God, and the wisdom of God" (1 Corinthians 1:24). True wisdom is found not in human philosophy but in knowing Christ and being conformed to His image. The more we know Him, the wiser we become in all areas of life.'
      },
      {
        title: 'Seeking Wisdom in Daily Life',
        content: 'God invites us to ask for wisdom, and He promises to give it generously: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him" (James 1:5). Practical wisdom for daily life comes through prayer, the study of Scripture (especially Proverbs and the teachings of Jesus), counsel from godly people, and attentiveness to the Holy Spirit\'s guidance. Wisdom is not only about major life decisions; it shapes how we speak, how we handle conflict, how we steward our resources, and how we relate to others.'
      }
    ],
    relatedTopics: ['faith', 'obedience', 'purpose'],
    keyVerses: [
      'James 1:5',
      'Proverbs 9:10',
      'James 3:17',
      '1 Corinthians 1:30',
      'Colossians 2:3'
    ],
    bibleReading: [
      { reference: 'Proverbs 1 - The Call of Wisdom', link: '/bible/proverbs/1' },
      { reference: 'Proverbs 8 - Wisdom\'s Appeal', link: '/bible/proverbs/8' },
      { reference: 'James 1 - Ask God for Wisdom', link: '/bible/james/1' },
      { reference: '1 Corinthians 1 - Christ the Wisdom of God', link: '/bible/1-corinthians/1' }
    ],
  },
  {
    id: 'purpose',
    name: 'Purpose',
    description: 'Understanding God\'s plan for our lives',
    keyVerse: 'For we are God\'s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.',
    keyVerseReference: 'Ephesians 2:10',
    longDescription: 'Every person was created by God with intention, meaning, and a specific purpose. Scripture reveals that we are not products of chance but carefully crafted by a loving Creator who has prepared good works for us to walk in. Understanding our purpose begins with understanding our Creator and His design. True purpose is found not in self-fulfillment but in fulfilling the role God has given us in His grand story of redemption. When we align our lives with God\'s purposes, we discover a deep sense of meaning, direction, and fulfillment.',
    sections: [
      {
        title: 'Created on Purpose, for a Purpose',
        content: 'The Bible teaches that God creates each person with deliberate intention. The psalmist marvels, "For thou hast possessed my reins: thou hast covered me in my mother\'s womb. I will praise thee; for I am fearfully and wonderfully made" (Psalm 139:13-14). Jeremiah was told, "Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee, and I ordained thee a prophet unto the nations" (Jeremiah 1:5). God\'s purpose for our lives is not an afterthought; it was conceived before we were born.'
      },
      {
        title: 'God\'s Grand Purpose: His Glory',
        content: 'While God has specific plans for each individual, all of our purposes fit within His overarching purpose: to glorify Himself and to reconcile all things through Christ. Paul writes, "For of him, and through him, and to him, are all things: to him be glory for ever" (Romans 11:36). The Westminster Shorter Catechism summarizes this beautifully: "Man\'s chief end is to glorify God, and to enjoy him forever." Whatever specific calling or vocation God gives us, it is meant to display His character and advance His kingdom on earth.'
      },
      {
        title: 'Discovering Your Purpose',
        content: 'Discovering God\'s purpose involves several practices: prayer, studying Scripture, understanding your gifts and passions, seeking counsel from mature believers, and faithfully serving where God has placed you. Paul writes, "For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them" (Ephesians 2:10). God often reveals His purposes progressively, one step at a time. Proverbs 3:5-6 promises, "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths."'
      },
      {
        title: 'Living with Purpose and Perseverance',
        content: 'Paul exemplified purposeful living: "I press toward the mark for the prize of the high calling of God in Christ Jesus" (Philippians 3:14). Living with purpose requires perseverance, especially when circumstances are difficult or the path is unclear. Romans 8:28 assures us, "And we know that all things work together for good to them that love God, to them who are the called according to his purpose." Even setbacks and trials are woven into God\'s purposeful plan. When we trust His sovereignty, we can endure hardship knowing that nothing is wasted in God\'s economy.'
      }
    ],
    relatedTopics: ['wisdom', 'obedience', 'strength'],
    keyVerses: [
      'Ephesians 2:10',
      'Jeremiah 29:11',
      'Psalm 139:13-14',
      'Romans 8:28',
      'Philippians 3:14'
    ],
    bibleReading: [
      { reference: 'Psalm 139 - Fearfully and Wonderfully Made', link: '/bible/psalms/139' },
      { reference: 'Jeremiah 29 - Plans to Prosper You', link: '/bible/jeremiah/29' },
      { reference: 'Ephesians 2 - Created for Good Works', link: '/bible/ephesians/2' },
      { reference: 'Romans 12 - Living Sacrifices', link: '/bible/romans/12' }
    ],
  },
  {
    id: 'obedience',
    name: 'Obedience',
    description: 'Following God\'s commands with trust',
    keyVerse: 'If you love me, keep my commands.',
    keyVerseReference: 'John 14:15',
    longDescription: 'Obedience to God is the natural expression of a heart that loves Him. Jesus made the connection explicit: "If ye love me, keep my commandments" (John 14:15). Biblical obedience is not legalistic rule-keeping driven by fear but a willing, joyful response to the God who has loved us and given Himself for us. Throughout Scripture, obedience is presented as the pathway to blessing, the evidence of genuine faith, and the means by which we experience the fullness of life that God intends for His children.',
    sections: [
      {
        title: 'Obedience Rooted in Love',
        content: 'In the Bible, obedience and love are inseparable. Jesus said, "If ye love me, keep my commandments" (John 14:15), and "He that hath my commandments, and keepeth them, he it is that loveth me" (John 14:21). Obedience is not the means of earning God\'s love but the response to having received it. When we truly understand how much God loves us, obedience becomes a delight rather than a burden. John echoes this: "For this is the love of God, that we keep his commandments: and his commandments are not grievous" (1 John 5:3).'
      },
      {
        title: 'The Blessings of Obedience',
        content: 'Scripture consistently links obedience with blessing. Moses told Israel, "And it shall come to pass, if thou shalt hearken diligently unto the voice of the LORD thy God, to observe and to do all his commandments... the LORD thy God will set thee on high above all nations of the earth" (Deuteronomy 28:1). Jesus promised, "If ye know these things, happy are ye if ye do them" (John 13:17). Obedience brings joy, peace, and the experience of God\'s favor. Disobedience, by contrast, leads to spiritual dryness, broken relationships, and distance from God.'
      },
      {
        title: 'Obedience in Difficult Circumstances',
        content: 'True obedience is often tested in difficult circumstances. Abraham was asked to sacrifice his son Isaac (Genesis 22). Daniel continued to pray despite the threat of the lion\'s den (Daniel 6). The apostles chose to obey God rather than men when ordered to stop preaching (Acts 5:29). These examples show that genuine obedience sometimes requires courage, sacrifice, and trust that God\'s way is best even when it doesn\'t make sense to us. Obedience is most meaningful when it is most costly.'
      },
      {
        title: 'Christ, Our Example of Perfect Obedience',
        content: 'Jesus Christ is the ultimate example of obedience. Paul writes that He "became obedient unto death, even the death of the cross" (Philippians 2:8). In the Garden of Gethsemane, Jesus prayed, "Not my will, but thine, be done" (Luke 22:42). His perfect obedience accomplished our salvation and provides the model for our own lives. Hebrews tells us that "though he were a Son, yet learned he obedience by the things which he suffered" (Hebrews 5:8). As we follow Christ\'s example, the Holy Spirit empowers us to obey from the heart.'
      }
    ],
    relatedTopics: ['faith', 'love', 'wisdom'],
    keyVerses: [
      'John 14:15',
      '1 John 5:3',
      'Deuteronomy 28:1',
      'Philippians 2:8',
      'Acts 5:29'
    ],
    bibleReading: [
      { reference: 'John 14 - If You Love Me', link: '/bible/john/14' },
      { reference: 'Deuteronomy 28 - Blessings of Obedience', link: '/bible/deuteronomy/28' },
      { reference: 'Genesis 22 - Abraham\'s Obedience', link: '/bible/genesis/22' },
      { reference: 'Philippians 2 - Christ\'s Obedience', link: '/bible/philippians/2' }
    ],
  },
  {
    id: 'sacrifice',
    name: 'Sacrifice',
    description: 'Jesus\' sacrifice for our sins',
    keyVerse: 'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him.',
    keyVerseReference: 'Isaiah 53:5',
    longDescription: 'The theme of sacrifice runs from Genesis to Revelation, tracing a scarlet thread through the entire Bible. From the animal skins God provided for Adam and Eve, through the Levitical sacrificial system, to the ultimate sacrifice of Jesus Christ on the cross, God has always provided a way for sinful humanity to be reconciled to Him through the shedding of blood. Jesus is the Lamb of God who takes away the sin of the world, and His once-for-all sacrifice accomplished what the blood of bulls and goats could never do.',
    sections: [
      {
        title: 'Sacrifice in the Old Testament',
        content: 'The Old Testament sacrificial system, established in the Law of Moses, taught Israel that sin is serious and requires atonement. Leviticus details the various offerings: burnt offerings, grain offerings, peace offerings, sin offerings, and guilt offerings. Each pointed to the need for a substitute to bear the penalty of sin. "For the life of the flesh is in the blood: and I have given it to you upon the altar to make an atonement for your souls" (Leviticus 17:11). Yet these sacrifices were temporary and had to be repeated, pointing forward to a greater sacrifice to come.'
      },
      {
        title: 'Jesus, the Lamb of God',
        content: 'When John the Baptist saw Jesus, he declared, "Behold the Lamb of God, which taketh away the sin of the world" (John 1:29). Jesus is the fulfillment of every Old Testament sacrifice. He is the Passover Lamb whose blood delivers us from judgment (1 Corinthians 5:7). He is the scapegoat who carries our sins away (Leviticus 16). He is the suffering servant of Isaiah 53 who was "wounded for our transgressions" and "bruised for our iniquities." His sacrifice was voluntary, substitutionary, and sufficient for all sin for all time.'
      },
      {
        title: 'The Sufficiency of Christ\'s Sacrifice',
        content: 'The book of Hebrews emphasizes that Christ\'s sacrifice is once for all, never to be repeated. "But this man, after he had offered one sacrifice for sins for ever, sat down on the right hand of God" (Hebrews 10:12). Unlike the Old Testament priests who stood daily offering the same sacrifices that could never take away sins, Jesus sat down, signifying that His work was finished. "For by one offering he hath perfected for ever them that are sanctified" (Hebrews 10:14). Nothing can be added to what Christ accomplished at the cross.'
      },
      {
        title: 'Our Response: Living Sacrifices',
        content: 'In light of Christ\'s sacrifice, Paul calls believers to offer themselves as living sacrifices: "I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service" (Romans 12:1). Our sacrifice is not for atonement (that has been accomplished by Christ) but for gratitude and worship. We sacrifice our time, resources, comfort, and selfish desires in service to God and others. This is the "reasonable service" of those who have been purchased by the precious blood of Christ.'
      }
    ],
    relatedTopics: ['redemption', 'love', 'grace'],
    keyVerses: [
      'Isaiah 53:5',
      'John 1:29',
      'Hebrews 10:12',
      'Romans 12:1',
      '1 Corinthians 5:7'
    ],
    bibleReading: [
      { reference: 'Isaiah 53 - The Suffering Servant', link: '/bible/isaiah/53' },
      { reference: 'Hebrews 10 - The Final Sacrifice', link: '/bible/hebrews/10' },
      { reference: 'John 19 - The Crucifixion', link: '/bible/john/19' },
      { reference: 'Leviticus 16 - The Day of Atonement', link: '/bible/leviticus/16' }
    ],
  },
  {
    id: 'resurrection',
    name: 'Resurrection',
    description: 'Christ\'s victory over death and our hope',
    keyVerse: 'Jesus answered, "I am the resurrection and the life. The one who believes in me will live, even though they die."',
    keyVerseReference: 'John 11:25',
    longDescription: 'The resurrection of Jesus Christ is the cornerstone of the Christian faith. Without it, Paul declares, our faith is vain and we are still in our sins (1 Corinthians 15:17). But Christ has indeed risen from the dead, conquering sin and death once and for all. The resurrection is not merely a historical event but a living reality that transforms everything: it validates Jesus\' claims, secures our justification, guarantees our own resurrection, and provides hope that transcends the grave. It is the most significant event in human history.',
    sections: [
      {
        title: 'The Historical Reality of the Resurrection',
        content: 'The resurrection of Jesus is presented in Scripture as a factual, historical event, not a metaphor or spiritual allegory. The Gospels provide detailed accounts of the empty tomb, the grave clothes left behind, and multiple post-resurrection appearances. Paul records that Jesus appeared to Cephas, then to the twelve, then to over five hundred people at once, most of whom were still living when Paul wrote (1 Corinthians 15:5-6). The disciples who cowered in fear at the crucifixion were transformed into bold witnesses willing to die for the truth of the resurrection. This transformation is itself powerful evidence of the event.'
      },
      {
        title: 'The Significance of the Resurrection',
        content: 'The resurrection of Christ has profound theological significance. It declares Jesus to be the Son of God with power (Romans 1:4). It demonstrates God\'s acceptance of Christ\'s sacrifice for sin. It secures the believer\'s justification: Christ "was delivered for our offences, and was raised again for our justification" (Romans 4:25). It guarantees the defeat of death: "O death, where is thy sting? O grave, where is thy victory?" (1 Corinthians 15:55). Without the resurrection, Christianity would have no message, no hope, and no power.'
      },
      {
        title: 'Our Resurrection Hope',
        content: 'Because Christ rose from the dead, believers have the assurance that they too will be raised. Paul writes, "But now is Christ risen from the dead, and become the firstfruits of them that slept" (1 Corinthians 15:20). The term "firstfruits" means that Christ\'s resurrection is the guarantee and preview of the harvest to come. Jesus promised, "Because I live, ye shall live also" (John 14:19). At His return, the dead in Christ will rise first, and believers who are alive will be transformed, receiving glorified bodies fit for eternity (1 Thessalonians 4:16-17).'
      },
      {
        title: 'Living in Resurrection Power',
        content: 'The resurrection is not only a future hope but a present reality. Paul\'s supreme desire was to "know him, and the power of his resurrection" (Philippians 3:10). The same power that raised Christ from the dead is at work in believers today (Ephesians 1:19-20). This resurrection power enables us to walk in newness of life (Romans 6:4), to overcome sin, and to serve God with supernatural strength. We do not live the Christian life in our own power but in the power of the risen Christ who dwells within us through the Holy Spirit.'
      }
    ],
    relatedTopics: ['sacrifice', 'hope', 'redemption'],
    keyVerses: [
      'John 11:25',
      '1 Corinthians 15:17',
      '1 Corinthians 15:20',
      'Romans 6:4',
      'Philippians 3:10'
    ],
    bibleReading: [
      { reference: '1 Corinthians 15 - The Resurrection Chapter', link: '/bible/1-corinthians/15' },
      { reference: 'John 20 - The Empty Tomb', link: '/bible/john/20' },
      { reference: 'Romans 6 - Newness of Life', link: '/bible/romans/6' },
      { reference: 'Matthew 28 - He Is Risen', link: '/bible/matthew/28' }
    ],
  },
  {
    id: 'redemption',
    name: 'Redemption',
    description: 'Being saved and restored through Christ',
    keyVerse: 'In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God\'s grace.',
    keyVerseReference: 'Ephesians 1:7',
    longDescription: 'Redemption is one of the richest words in the Christian vocabulary, describing God\'s act of purchasing sinners out of slavery to sin and setting them free through the blood of Jesus Christ. The concept comes from the ancient marketplace where slaves could be bought and freed. God, seeing humanity enslaved to sin and under the sentence of death, paid the ultimate price: the life of His own Son. Redemption encompasses not only the forgiveness of sins but the complete restoration of all that was lost through the fall.',
    sections: [
      {
        title: 'The Meaning of Redemption',
        content: 'To redeem means to buy back or to set free by paying a price. In the Old Testament, a "kinsman redeemer" (goel) could purchase the freedom of a relative who had fallen into slavery or buy back family property that had been lost. The story of Boaz redeeming Ruth beautifully illustrates this concept. In the New Testament, redemption refers to Christ\'s work of purchasing our freedom from the slavery of sin. Paul writes, "Ye are bought with a price" (1 Corinthians 6:20), and Peter adds that we were redeemed "not with corruptible things, as silver and gold... But with the precious blood of Christ" (1 Peter 1:18-19).'
      },
      {
        title: 'Redemption Through the Blood of Christ',
        content: 'The price of our redemption was the blood of Jesus Christ. Paul declares, "In whom we have redemption through his blood, the forgiveness of sins, according to the riches of his grace" (Ephesians 1:7). The writer of Hebrews explains, "Neither by the blood of goats and calves, but by his own blood he entered in once into the holy place, having obtained eternal redemption for us" (Hebrews 9:12). The blood of Christ speaks of His life given up in death on our behalf. This was the ultimate price, and it secured an eternal redemption that can never be revoked or diminished.'
      },
      {
        title: 'Freedom from Sin\'s Slavery',
        content: 'Jesus said, "Whosoever committeth sin is the servant of sin" (John 8:34). Before redemption, every person is enslaved to sin, unable to free themselves. But Jesus came to set captives free. Paul writes, "But God be thanked, that ye were the servants of sin, but ye have obeyed from the heart that form of doctrine which was delivered you. Being then made free from sin, ye became the servants of righteousness" (Romans 6:17-18). Redemption does not merely change our legal status before God; it breaks the power of sin over our lives and sets us free to serve God joyfully.'
      },
      {
        title: 'The Final Redemption',
        content: 'While believers experience redemption now in the forgiveness of sins and freedom from sin\'s power, a future redemption awaits: the redemption of our bodies. Paul writes, "And not only they, but ourselves also, which have the firstfruits of the Spirit, even we ourselves groan within ourselves, waiting for the adoption, to wit, the redemption of our body" (Romans 8:23). At Christ\'s return, our mortal bodies will be transformed into glorified bodies, and creation itself will be set free from the bondage of corruption. This is the ultimate fulfillment of God\'s redemptive plan.'
      }
    ],
    relatedTopics: ['sacrifice', 'grace', 'forgiveness'],
    keyVerses: [
      'Ephesians 1:7',
      '1 Peter 1:18-19',
      'Hebrews 9:12',
      'Romans 8:23',
      'Titus 2:14'
    ],
    bibleReading: [
      { reference: 'Ruth 4 - The Kinsman Redeemer', link: '/bible/ruth/4' },
      { reference: 'Ephesians 1 - Redemption Through His Blood', link: '/bible/ephesians/1' },
      { reference: 'Hebrews 9 - The Blood of Christ', link: '/bible/hebrews/9' },
      { reference: 'Romans 8 - The Redemption of Our Bodies', link: '/bible/romans/8' }
    ],
  },
];

export function getTopicById(id: string): Topic | undefined {
  return topics.find(topic => topic.id === id);
}

export function getAllTopics(): Topic[] {
  return topics;
}
