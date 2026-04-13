export interface Question {
  id: string;
  question: string;
  excerpt: string;
  category: string;
  // Enriched fields
  answer: string;
  keyVerses: { reference: string; text: string }[];
  relatedQuestions: string[];
  bibleReading: { reference: string; link: string }[];
}

export const questions: Question[] = [
  {
    id: 'who-is-jesus',
    question: 'Who is Jesus Christ?',
    excerpt: 'Jesus is the Son of God, the Savior of the world, and the fulfillment of Old Testament prophecy.',
    category: 'Identity',
    answer: `Jesus Christ is the eternal Son of God who took on human flesh to save sinners. He is fully God and fully man, the second person of the Trinity, who existed from all eternity with the Father and the Holy Spirit. The Gospel of John opens with this declaration: "In the beginning was the Word, and the Word was with God, and the Word was God" (John 1:1). Jesus is not a created being or merely a great moral teacher; He is God incarnate, the Creator of all things who entered His own creation.

Throughout the Old Testament, hundreds of prophecies foretold the coming of the Messiah, and Jesus fulfilled every one of them. He was born of a virgin in Bethlehem (Isaiah 7:14; Micah 5:2), entered Jerusalem on a donkey (Zechariah 9:9), was betrayed for thirty pieces of silver (Zechariah 11:12-13), and was crucified for the sins of the world (Psalm 22; Isaiah 53). The mathematical probability of one person fulfilling even a fraction of these prophecies is staggering, yet Jesus fulfilled them all.

Jesus demonstrated His divine authority through His teaching, His miracles, and His power over nature, disease, demons, and death. He healed the sick, gave sight to the blind, raised the dead, and calmed the storm with a word. But His greatest work was His atoning death on the cross, where He bore the sins of humanity, and His bodily resurrection three days later, which confirmed His identity as the Son of God (Romans 1:4).

Today, Jesus sits at the right hand of God the Father, interceding for His people and reigning over all creation. He will return one day in glory to judge the living and the dead and to establish His eternal kingdom. Every knee will bow and every tongue will confess that Jesus Christ is Lord, to the glory of God the Father (Philippians 2:10-11).`,
    keyVerses: [
      { reference: 'John 1:1', text: 'In the beginning was the Word, and the Word was with God, and the Word was God.' },
      { reference: 'John 1:14', text: 'And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.' },
      { reference: 'Colossians 1:15-16', text: 'Who is the image of the invisible God, the firstborn of every creature: For by him were all things created, that are in heaven, and that are in earth, visible and invisible.' },
      { reference: 'Hebrews 1:3', text: 'Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high.' },
    ],
    relatedQuestions: ['why-did-jesus-die', 'is-jesus-the-only-way', 'is-jesus-coming-back'],
    bibleReading: [
      { reference: 'John 1 - The Word Made Flesh', link: '/bible/john/1' },
      { reference: 'Colossians 1 - The Supremacy of Christ', link: '/bible/colossians/1' },
      { reference: 'Hebrews 1 - God\'s Son Revealed', link: '/bible/hebrews/1' },
      { reference: 'Philippians 2 - The Humility of Christ', link: '/bible/philippians/2' },
    ],
  },
  {
    id: 'why-did-jesus-die',
    question: 'Why did Jesus die on the cross?',
    excerpt: 'Jesus died to pay the penalty for our sins and provide the way to eternal life through His sacrifice.',
    category: 'Salvation',
    answer: `Jesus died on the cross to pay the penalty for human sin and to reconcile sinful humanity to a holy God. The Bible teaches that "all have sinned, and come short of the glory of God" (Romans 3:23) and that "the wages of sin is death" (Romans 6:23). Every person stands guilty before God, deserving eternal separation from Him. No amount of good works, religious ritual, or moral effort can bridge the chasm that sin has created between God and man.

In His great love, God provided the solution by sending His own Son to bear the punishment that we deserved. "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us" (Romans 5:8). On the cross, Jesus became our substitute, taking upon Himself the full weight of God's wrath against sin. Isaiah prophesied, "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed" (Isaiah 53:5).

The death of Jesus was not an accident or a tragedy that caught God by surprise. It was the eternal plan of God, determined before the foundation of the world. Peter declared that Jesus was "delivered by the determinate counsel and foreknowledge of God" (Acts 2:23). Jesus Himself said, "No man taketh it from me, but I lay it down of myself" (John 10:18). The cross was a deliberate act of divine love, planned in eternity and executed in history.

Through the cross, Jesus accomplished what the Old Testament sacrificial system could only foreshadow. The blood of bulls and goats could never take away sins (Hebrews 10:4), but the blood of Jesus Christ cleanses us from all sin (1 John 1:7). His death satisfied the justice of God, demonstrated the love of God, and opened the way for sinners to be forgiven, justified, and adopted as children of God. It is the most significant event in all of history.`,
    keyVerses: [
      { reference: 'Romans 5:8', text: 'But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.' },
      { reference: 'Isaiah 53:5', text: 'But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.' },
      { reference: '1 Peter 2:24', text: 'Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed.' },
      { reference: '2 Corinthians 5:21', text: 'For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.' },
    ],
    relatedQuestions: ['who-is-jesus', 'what-is-salvation', 'what-is-sin'],
    bibleReading: [
      { reference: 'Isaiah 53 - The Suffering Servant', link: '/bible/isaiah/53' },
      { reference: 'John 19 - The Crucifixion', link: '/bible/john/19' },
      { reference: 'Romans 5 - Justified by His Blood', link: '/bible/romans/5' },
      { reference: 'Hebrews 9 - The Blood of Christ', link: '/bible/hebrews/9' },
    ],
  },
  {
    id: 'what-is-salvation',
    question: 'What is salvation?',
    excerpt: 'Salvation is the deliverance from sin and its consequences through faith in Jesus Christ.',
    category: 'Salvation',
    answer: `Salvation is God's act of delivering sinners from the penalty, power, and ultimately the presence of sin through the person and work of Jesus Christ. It is the most comprehensive blessing God offers to humanity, encompassing forgiveness, justification, reconciliation, adoption, sanctification, and glorification. Salvation is not merely being rescued from hell; it is being brought into a living, eternal relationship with the God who made us.

The Bible teaches that salvation is by grace alone, through faith alone, in Christ alone. Paul writes, "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast" (Ephesians 2:8-9). Salvation cannot be earned by human effort, religious observance, or moral improvement. It is a free gift received through trusting in Jesus Christ and His finished work on the cross. When a person repents of their sin and places their faith in Christ, they pass from death to life.

Salvation has three tenses in Scripture. In the past tense, believers have been saved from the penalty of sin (justification). In the present tense, believers are being saved from the power of sin (sanctification). In the future tense, believers will be saved from the presence of sin (glorification). Paul captures all three: "Who hath saved us" (2 Timothy 1:9), "work out your own salvation" (Philippians 2:12), and "now is our salvation nearer than when we believed" (Romans 13:11).

The offer of salvation extends to all people everywhere. God "is not willing that any should perish, but that all should come to repentance" (2 Peter 3:9). Jesus invites, "Come unto me, all ye that labour and are heavy laden, and I will give you rest" (Matthew 11:28). Whoever calls upon the name of the Lord shall be saved (Romans 10:13). This is the good news of the gospel: that salvation is available to every person who will receive it by faith.`,
    keyVerses: [
      { reference: 'Ephesians 2:8-9', text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.' },
      { reference: 'Romans 10:9', text: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.' },
      { reference: 'John 3:16', text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.' },
      { reference: 'Acts 4:12', text: 'Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.' },
    ],
    relatedQuestions: ['why-did-jesus-die', 'what-is-grace', 'what-is-faith'],
    bibleReading: [
      { reference: 'Romans 3 - Salvation by Faith', link: '/bible/romans/3' },
      { reference: 'Ephesians 2 - Saved by Grace', link: '/bible/ephesians/2' },
      { reference: 'John 3 - You Must Be Born Again', link: '/bible/john/3' },
      { reference: 'Titus 3 - Saved by His Mercy', link: '/bible/titus/3' },
    ],
  },
  {
    id: 'how-to-follow-jesus',
    question: 'How do I follow Jesus?',
    excerpt: 'Following Jesus means believing in Him, repenting of sin, and living according to His teachings.',
    category: 'Discipleship',
    answer: `Following Jesus begins with a personal decision to trust Him as Lord and Savior. Jesus extended a simple but profound invitation to His first disciples: "Follow me" (Matthew 4:19). This call is the same today. It requires acknowledging that you are a sinner in need of a Savior, believing that Jesus died for your sins and rose again, and surrendering your life to His lordship. Repentance and faith are the twin responses God requires: turning from sin and turning to Christ.

Once you have placed your faith in Jesus, following Him involves a lifelong process of growth called discipleship. Jesus said, "If any man will come after me, let him deny himself, and take up his cross daily, and follow me" (Luke 9:23). Discipleship means making Jesus the highest priority in your life, above comfort, reputation, possessions, and even family. It involves a daily choice to submit your will to His and to live according to His teachings as found in Scripture.

Practical steps for following Jesus include reading the Bible regularly to know God's will, praying daily to maintain your relationship with Him, joining a local church where you can worship, learn, and be accountable to other believers, and being baptized as a public declaration of your faith. Jesus commissioned His followers to "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you" (Matthew 28:19-20).

Following Jesus also means allowing the Holy Spirit to transform your character, producing the fruit of love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control (Galatians 5:22-23). It means loving your neighbor, serving others, sharing the gospel, and persevering through trials. The Christian life is not easy, but it is the most meaningful and fulfilling life possible, because you are walking with the One who made you and loves you beyond measure.`,
    keyVerses: [
      { reference: 'Luke 9:23', text: 'And he said to them all, If any man will come after me, let him deny himself, and take up his cross daily, and follow me.' },
      { reference: 'Matthew 4:19', text: 'And he saith unto them, Follow me, and I will make you fishers of men.' },
      { reference: 'John 8:12', text: 'Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.' },
      { reference: 'Matthew 28:19-20', text: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you.' },
    ],
    relatedQuestions: ['what-is-salvation', 'how-to-live-as-christian', 'how-to-pray'],
    bibleReading: [
      { reference: 'Matthew 4 - Jesus Calls His Disciples', link: '/bible/matthew/4' },
      { reference: 'Luke 9 - The Cost of Discipleship', link: '/bible/luke/9' },
      { reference: 'John 15 - Abiding in Christ', link: '/bible/john/15' },
      { reference: 'Matthew 28 - The Great Commission', link: '/bible/matthew/28' },
    ],
  },
  {
    id: 'is-jesus-the-only-way',
    question: 'Is Jesus the only way to God?',
    excerpt: 'Jesus said, "I am the way and the truth and the life. No one comes to the Father except through me."',
    category: 'Theology',
    answer: `Jesus made an exclusive and unmistakable claim when He said, "I am the way, the truth, and the life: no man cometh unto the Father, but by me" (John 14:6). This is not one opinion among many; it is the definitive statement of the Son of God about the sole means of access to the Father. In a culture that values tolerance and pluralism, this claim sounds narrow. But if Jesus is who He claimed to be, the eternal Son of God and the only one who has conquered sin and death, then His exclusive claim is not arrogant but merciful, for it tells us exactly where salvation can be found.

The exclusivity of Christ is affirmed throughout the New Testament. Peter declared before the Jewish rulers, "Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved" (Acts 4:12). Paul wrote, "For there is one God, and one mediator between God and men, the man Christ Jesus" (1 Timothy 2:5). The consistent testimony of the apostles is that Jesus Christ is the only way to be reconciled to God.

The reason Jesus is the only way is rooted in the nature of the problem He came to solve. Human sin has created an infinite offense against an infinitely holy God. No human effort, religious system, or moral achievement can bridge this infinite gap. Only the infinite Son of God, who is both fully God and fully man, could bear the infinite penalty for sin and satisfy the perfect justice of God. No other religious leader claimed to be God, died for sins, and rose from the dead. Jesus alone accomplished what no one else could.

This exclusive claim is actually an inclusive invitation. Jesus does not turn anyone away who comes to Him in faith. He said, "All that the Father giveth me shall come to me; and him that cometh to me I will in no wise cast out" (John 6:37). The way is narrow, but the invitation is wide open to all people of every nation, language, and background. God's desire is that all people would come to know Him through His Son, and He has made that way clear and accessible to everyone who believes.`,
    keyVerses: [
      { reference: 'John 14:6', text: 'Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.' },
      { reference: 'Acts 4:12', text: 'Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.' },
      { reference: '1 Timothy 2:5', text: 'For there is one God, and one mediator between God and men, the man Christ Jesus.' },
      { reference: 'John 6:37', text: 'All that the Father giveth me shall come to me; and him that cometh to me I will in no wise cast out.' },
    ],
    relatedQuestions: ['who-is-jesus', 'what-is-salvation', 'what-is-faith'],
    bibleReading: [
      { reference: 'John 14 - The Way, Truth, and Life', link: '/bible/john/14' },
      { reference: 'Acts 4 - No Other Name', link: '/bible/acts/4' },
      { reference: 'John 10 - The Good Shepherd', link: '/bible/john/10' },
      { reference: 'Romans 1 - The Gospel of God', link: '/bible/romans/1' },
    ],
  },
  {
    id: 'what-is-grace',
    question: 'What is God\'s grace?',
    excerpt: 'Grace is God\'s unmerited favor—His kindness toward us that we cannot earn or deserve.',
    category: 'Theology',
    answer: `Grace is God's unmerited, undeserved, and unearned favor toward sinful humanity. It is His kindness freely given to those who deserve only judgment. The word "grace" in the New Testament (Greek: charis) means a gift freely bestowed, without any expectation of repayment. Grace is not a reward for good behavior or a response to human worthiness; it flows entirely from the generous and loving character of God Himself.

The supreme expression of God's grace is the gift of salvation through Jesus Christ. Paul writes, "For the grace of God that bringeth salvation hath appeared to all men" (Titus 2:11). We are saved "not by works of righteousness which we have done, but according to his mercy" (Titus 3:5). Grace and works are mutually exclusive as grounds for salvation: "And if by grace, then is it no more of works: otherwise grace is no more grace" (Romans 11:6). If salvation could be earned, it would not be grace. The entire gospel rests on the reality that God gives freely what we could never deserve.

Grace is costly, not cheap. It cost God the life of His beloved Son. Paul writes, "For ye know the grace of our Lord Jesus Christ, that, though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich" (2 Corinthians 8:9). Grace does not give us license to sin; it empowers us to live righteously. Paul writes that grace teaches us "that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly, in this present world" (Titus 2:12). True grace transforms the life of every person who receives it.

God's grace is not limited to salvation. It sustains us daily, empowers us for service, comforts us in suffering, and provides strength in weakness. Paul discovered this when God told him, "My grace is sufficient for thee: for my strength is made perfect in weakness" (2 Corinthians 12:9). Grace is the atmosphere in which the Christian lives, the foundation on which we stand, and the power by which we serve. We are called to "grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ" (2 Peter 3:18).`,
    keyVerses: [
      { reference: 'Ephesians 2:8-9', text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.' },
      { reference: 'Romans 11:6', text: 'And if by grace, then is it no more of works: otherwise grace is no more grace. But if it be of works, then is it no more grace: otherwise work is no more work.' },
      { reference: '2 Corinthians 12:9', text: 'And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness.' },
      { reference: 'Titus 2:11-12', text: 'For the grace of God that bringeth salvation hath appeared to all men, Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly, in this present world.' },
    ],
    relatedQuestions: ['what-is-salvation', 'what-is-faith', 'what-is-sin'],
    bibleReading: [
      { reference: 'Ephesians 2 - Saved by Grace', link: '/bible/ephesians/2' },
      { reference: 'Romans 3 - Grace Through Faith', link: '/bible/romans/3' },
      { reference: 'Titus 2 - The Grace That Teaches', link: '/bible/titus/2' },
      { reference: 'John 1 - Full of Grace and Truth', link: '/bible/john/1' },
    ],
  },
  {
    id: 'how-to-pray',
    question: 'How should I pray?',
    excerpt: 'Prayer is honest communication with God. Jesus taught His disciples to pray with sincerity and faith.',
    category: 'Practice',
    answer: `Prayer is the God-given privilege of communicating directly with the Creator of the universe. It is not a ritual to be performed but a relationship to be enjoyed. Jesus taught His disciples to pray by giving them what we call the Lord's Prayer (Matthew 6:9-13), which serves as a model for all Christian prayer. It begins with worship ("Our Father which art in heaven, Hallowed be thy name"), moves to submission ("Thy kingdom come. Thy will be done"), includes petition ("Give us this day our daily bread"), and encompasses confession and spiritual warfare ("Forgive us our debts... lead us not into temptation").

Jesus emphasized that prayer should be sincere, not performed for the approval of others. He warned against praying with "vain repetitions, as the heathen do: for they think that they shall be heard for their much speaking" (Matthew 6:7). God is not impressed by eloquent words or lengthy prayers; He looks at the heart. The tax collector who simply prayed, "God be merciful to me a sinner" (Luke 18:13), went home justified. Prayer is about honest communion with a loving Father who already knows our needs but invites us to bring them to Him.

The Bible teaches several dimensions of prayer: adoration (praising God for who He is), confession (acknowledging our sins), thanksgiving (expressing gratitude for His blessings), and supplication (bringing our requests to Him). Paul instructs, "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God" (Philippians 4:6). Prayer should encompass all areas of life, from daily needs to global concerns, from personal struggles to intercession for others.

Prayer is effective because of who we are praying to, not because of our own worthiness. James writes, "The effectual fervent prayer of a righteous man availeth much" (James 5:16). Jesus promised, "If ye shall ask any thing in my name, I will do it" (John 14:14). Praying "in Jesus' name" means praying according to His character and will, trusting that the Father hears and answers. We can pray with boldness and confidence because we come through Christ, our great High Priest, who intercedes for us at the right hand of God (Hebrews 4:16).`,
    keyVerses: [
      { reference: 'Matthew 6:9-10', text: 'After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done in earth, as it is in heaven.' },
      { reference: 'Philippians 4:6', text: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.' },
      { reference: 'James 5:16', text: 'Confess your faults one to another, and pray one for another, that ye may be healed. The effectual fervent prayer of a righteous man availeth much.' },
      { reference: '1 Thessalonians 5:17', text: 'Pray without ceasing.' },
    ],
    relatedQuestions: ['how-to-follow-jesus', 'how-to-live-as-christian', 'what-is-faith'],
    bibleReading: [
      { reference: 'Matthew 6 - The Lord\'s Prayer', link: '/bible/matthew/6' },
      { reference: 'Luke 11 - Teaching on Prayer', link: '/bible/luke/11' },
      { reference: 'Psalm 51 - A Prayer of Repentance', link: '/bible/psalms/51' },
      { reference: 'Daniel 9 - Daniel\'s Prayer', link: '/bible/daniel/9' },
    ],
  },
  {
    id: 'what-about-suffering',
    question: 'Why is there suffering in the world?',
    excerpt: 'Suffering exists because of sin\'s consequences, but God can work through our suffering for good.',
    category: 'Theology',
    answer: `The question of suffering is one of the deepest and most challenging questions humanity faces. The Bible provides a clear and honest framework for understanding it. Suffering entered the world through the fall of Adam and Eve, when humanity chose to rebel against God (Genesis 3). This original sin brought death, decay, and brokenness into every dimension of creation. Paul writes, "Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned" (Romans 5:12). Much of the suffering we experience is the direct or indirect consequence of living in a fallen world corrupted by sin.

While sin explains the origin of suffering, it does not fully explain every instance of it. The book of Job teaches us that righteous people sometimes suffer for reasons they cannot understand. God allowed Job to endure terrible loss not because of any specific sin but to demonstrate that genuine faith worships God for who He is, not merely for what He gives. Jesus affirmed this when His disciples asked about a man born blind: "Neither hath this man sinned, nor his parents: but that the works of God should be made manifest in him" (John 9:3). Not all suffering is a direct punishment for sin.

God does not waste suffering. Romans 8:28 promises, "And we know that all things work together for good to them that love God, to them who are the called according to his purpose." God is sovereign over suffering and uses it to refine our character, deepen our dependence on Him, and produce eternal fruit. James writes, "My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience" (James 1:2-3). The suffering we endure in this life is producing "a far more exceeding and eternal weight of glory" (2 Corinthians 4:17).

The ultimate answer to suffering is found in the cross of Jesus Christ. God did not remain distant from our pain; He entered into it. Jesus, the sinless Son of God, suffered more profoundly than any human being ever has or ever will. He was "a man of sorrows, and acquainted with grief" (Isaiah 53:3). Because He suffered, He is able to comfort and help those who suffer (Hebrews 2:18; 4:15). And because He conquered death through His resurrection, we have the assurance that suffering is temporary while the glory to come is eternal.`,
    keyVerses: [
      { reference: 'Romans 8:28', text: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.' },
      { reference: 'James 1:2-3', text: 'My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience.' },
      { reference: '2 Corinthians 4:17', text: 'For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory.' },
      { reference: 'Romans 5:3-5', text: 'And not only so, but we glory in tribulations also: knowing that tribulation worketh patience; And patience, experience; and experience, hope.' },
    ],
    relatedQuestions: ['who-is-jesus', 'what-is-sin', 'what-is-faith'],
    bibleReading: [
      { reference: 'Job 1-2 - Job\'s Suffering', link: '/bible/job/1' },
      { reference: 'Romans 8 - More Than Conquerors', link: '/bible/romans/8' },
      { reference: 'Psalm 23 - Comfort in the Valley', link: '/bible/psalms/23' },
      { reference: '2 Corinthians 4 - Treasure in Jars of Clay', link: '/bible/2-corinthians/4' },
    ],
  },
  {
    id: 'what-is-sin',
    question: 'What is sin?',
    excerpt: 'Sin is rebellion against God and separation from His righteousness; all humans are sinners.',
    category: 'Theology',
    answer: `Sin is any thought, word, deed, or disposition that violates God's holy law and falls short of His perfect standard. The Greek word for sin (hamartia) literally means "to miss the mark." The mark is God's perfect righteousness, and every human being has missed it. Paul declares emphatically, "For all have sinned, and come short of the glory of God" (Romans 3:23). Sin is not merely a list of bad behaviors; it is a condition of the human heart that produces rebellion against God and His righteous commands.

Sin entered the world through the disobedience of Adam and Eve in the Garden of Eden. When they chose to eat the forbidden fruit, they were not merely breaking a rule; they were declaring their independence from God, choosing to be their own authority rather than trusting His wisdom and goodness. This original sin corrupted human nature at its very core. David confessed, "Behold, I was shapen in iniquity; and in sin did my mother conceive me" (Psalm 51:5). Every person is born with a sinful nature that inclines them toward rebellion against God.

The consequences of sin are devastating and far-reaching. Sin separates us from God: "But your iniquities have separated between you and your God, and your sins have hid his face from you" (Isaiah 59:2). Sin brings spiritual death: "For the wages of sin is death" (Romans 6:23). Sin corrupts relationships, destroys peace, produces guilt and shame, and ultimately leads to eternal judgment. James describes sin's progression: "Then when lust hath conceived, it bringeth forth sin: and sin, when it is finished, bringeth forth death" (James 1:15).

The good news of the gospel is that God has provided a remedy for sin through Jesus Christ. "For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him" (2 Corinthians 5:21). Jesus bore the penalty for our sin on the cross, offering forgiveness and cleansing to all who believe. John writes, "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness" (1 John 1:9). Through Christ, sin's penalty is paid, its power is broken, and one day its very presence will be removed forever.`,
    keyVerses: [
      { reference: 'Romans 3:23', text: 'For all have sinned, and come short of the glory of God.' },
      { reference: 'Romans 6:23', text: 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.' },
      { reference: 'Isaiah 59:2', text: 'But your iniquities have separated between you and your God, and your sins have hid his face from you, that he will not hear.' },
      { reference: '1 John 1:9', text: 'If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.' },
    ],
    relatedQuestions: ['what-is-salvation', 'why-did-jesus-die', 'what-is-grace'],
    bibleReading: [
      { reference: 'Genesis 3 - The Fall of Man', link: '/bible/genesis/3' },
      { reference: 'Romans 3 - All Have Sinned', link: '/bible/romans/3' },
      { reference: 'Romans 6 - Dead to Sin, Alive in Christ', link: '/bible/romans/6' },
      { reference: 'Psalm 51 - A Sinner\'s Confession', link: '/bible/psalms/51' },
    ],
  },
  {
    id: 'how-to-live-as-christian',
    question: 'How should a Christian live?',
    excerpt: 'Christians are called to live in obedience to Christ, showing love, kindness, and holiness.',
    category: 'Discipleship',
    answer: `A Christian is called to live a life that reflects the character of Christ and brings glory to God. Paul writes, "I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service. And be not conformed to this world: but be ye transformed by the renewing of your mind" (Romans 12:1-2). The Christian life is one of ongoing transformation, not conformity to the world's values but a steady renewal into the image of Christ.

At the heart of Christian living is love. Jesus identified love as the distinguishing mark of His followers: "By this shall all men know that ye are my disciples, if ye have love one to another" (John 13:35). This love is not sentimental affection but practical, sacrificial care for others. It means serving the poor, forgiving those who wrong us, speaking truth with grace, and laying down our lives for one another. The fruit of the Spirit described in Galatians 5:22-23 paints a picture of what a Spirit-empowered life looks like: love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, and temperance.

Christians are called to pursue holiness. Peter writes, "But as he which hath called you is holy, so be ye holy in all manner of conversation; Because it is written, Be ye holy; for I am holy" (1 Peter 1:15-16). Holiness means being set apart for God, living differently from the world around us. It involves putting off sinful habits and putting on godly character (Ephesians 4:22-24). This is not a joyless legalism but a joyful pursuit of the God who is infinitely good and beautiful.

The Christian life is also a life of mission. Jesus commanded His followers to make disciples of all nations (Matthew 28:19-20). Every believer is an ambassador for Christ (2 Corinthians 5:20), called to share the good news of the gospel through words and deeds. Christian living involves being a faithful witness in your workplace, your neighborhood, your family, and wherever God places you. It means using the gifts God has given you to serve the body of Christ and to be a blessing to the world around you.`,
    keyVerses: [
      { reference: 'Romans 12:1-2', text: 'I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service. And be not conformed to this world: but be ye transformed by the renewing of your mind.' },
      { reference: 'Galatians 5:22-23', text: 'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, Meekness, temperance: against such there is no law.' },
      { reference: 'Micah 6:8', text: 'He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?' },
      { reference: 'Colossians 3:17', text: 'And whatsoever ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to God and the Father by him.' },
    ],
    relatedQuestions: ['how-to-follow-jesus', 'how-to-pray', 'what-is-faith'],
    bibleReading: [
      { reference: 'Romans 12 - Living Sacrifices', link: '/bible/romans/12' },
      { reference: 'Colossians 3 - The New Life in Christ', link: '/bible/colossians/3' },
      { reference: 'Matthew 5 - The Sermon on the Mount', link: '/bible/matthew/5' },
      { reference: 'Galatians 5 - Walking by the Spirit', link: '/bible/galatians/5' },
    ],
  },
  {
    id: 'what-is-faith',
    question: 'What is faith?',
    excerpt: 'Faith is belief in and trust of God\'s character, promises, and the person of Jesus Christ.',
    category: 'Theology',
    answer: `Faith, as defined in Scripture, is a confident trust in God's character, His promises, and the person and work of Jesus Christ. Hebrews 11:1 provides the classic definition: "Now faith is the substance of things hoped for, the evidence of things not seen." Faith gives substance and reality to what God has promised, even when we cannot see it with our eyes. It is the conviction that God is trustworthy and that His Word is true, regardless of our circumstances or feelings.

Biblical faith is not blind belief without evidence. God has provided ample evidence for faith through creation (Romans 1:20), through His Word (Romans 10:17), through fulfilled prophecy, and supremely through the person of Jesus Christ. Faith is a response to God's self-revelation. As Paul writes, "So then faith cometh by hearing, and hearing by the word of God" (Romans 10:17). When we encounter God's truth in Scripture and respond with trust and obedience, that is faith. It is reasonable, but it goes beyond mere reason to embrace what God has revealed.

Faith is the means by which we receive salvation. "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God" (Ephesians 2:8). Faith does not earn salvation; it receives the salvation that God offers as a gift. Saving faith has three components: knowledge (understanding the gospel), assent (agreeing that it is true), and trust (personally relying on Christ for salvation). Even the demons believe that God is one, but they do not trust in Him for salvation (James 2:19). Genuine faith involves the whole person: intellect, emotions, and will.

Faith is also the means by which we live the Christian life. Hebrews 11:6 declares, "But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him." Every step of the Christian journey is a step of faith: trusting God with our finances, our relationships, our future, our suffering, and our service. The righteous shall live by faith (Habakkuk 2:4; Romans 1:17). Faith is not a one-time decision but a lifelong posture of dependence on the God who is always faithful.`,
    keyVerses: [
      { reference: 'Hebrews 11:1', text: 'Now faith is the substance of things hoped for, the evidence of things not seen.' },
      { reference: 'Hebrews 11:6', text: 'But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.' },
      { reference: 'Romans 10:17', text: 'So then faith cometh by hearing, and hearing by the word of God.' },
      { reference: 'Ephesians 2:8', text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.' },
    ],
    relatedQuestions: ['what-is-salvation', 'what-is-grace', 'how-to-follow-jesus'],
    bibleReading: [
      { reference: 'Hebrews 11 - The Hall of Faith', link: '/bible/hebrews/11' },
      { reference: 'Romans 4 - Abraham\'s Faith', link: '/bible/romans/4' },
      { reference: 'Mark 11 - Faith and Prayer', link: '/bible/mark/11' },
      { reference: 'James 2 - Faith and Works', link: '/bible/james/2' },
    ],
  },
  {
    id: 'is-jesus-coming-back',
    question: 'Will Jesus return?',
    excerpt: 'Yes, Jesus promised to return for His followers and establish His kingdom in its fullness.',
    category: 'End Times',
    answer: `Yes, the return of Jesus Christ is one of the most certain and frequently mentioned promises in all of Scripture. Jesus Himself declared, "And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also" (John 14:3). At His ascension, two angels told the watching disciples, "This same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven" (Acts 1:11). The second coming of Christ is not a vague spiritual hope; it is a literal, visible, physical return.

The New Testament writers consistently taught the return of Christ as a central doctrine. Paul wrote of "that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ" (Titus 2:13). The writer of Hebrews declared, "So Christ was once offered to bear the sins of many; and unto them that look for him shall he appear the second time without sin unto salvation" (Hebrews 9:28). James encouraged patience with the words, "Be ye also patient; stablish your hearts: for the coming of the Lord draweth nigh" (James 5:8). The last prayer of the Bible is, "Even so, come, Lord Jesus" (Revelation 22:20).

When Jesus returns, He will come in power and great glory. "For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air" (1 Thessalonians 4:16-17). He will raise the dead, judge the living and the dead, destroy evil once and for all, and establish His eternal kingdom where righteousness dwells.

The promise of Christ's return has practical implications for how we live today. John writes, "And every man that hath this hope in him purifieth himself, even as he is pure" (1 John 3:3). The anticipation of seeing Christ face to face motivates holy living, faithful service, and urgent evangelism. We do not know the day or the hour (Matthew 24:36), but we are called to be ready, watchful, and actively about our Master's business until He comes. The return of Christ is the great hope of the church, the culmination of God's redemptive plan, and the beginning of eternity with our Lord.`,
    keyVerses: [
      { reference: 'John 14:3', text: 'And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.' },
      { reference: 'Acts 1:11', text: 'This same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.' },
      { reference: '1 Thessalonians 4:16-17', text: 'For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds.' },
      { reference: 'Revelation 22:20', text: 'He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus.' },
    ],
    relatedQuestions: ['who-is-jesus', 'what-is-salvation', 'what-about-suffering'],
    bibleReading: [
      { reference: 'Matthew 24 - Signs of His Coming', link: '/bible/matthew/24' },
      { reference: '1 Thessalonians 4 - The Lord\'s Return', link: '/bible/1-thessalonians/4' },
      { reference: 'Revelation 21 - A New Heaven and New Earth', link: '/bible/revelation/21' },
      { reference: '2 Peter 3 - The Day of the Lord', link: '/bible/2-peter/3' },
    ],
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
