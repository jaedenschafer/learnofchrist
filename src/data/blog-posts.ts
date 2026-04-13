export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string[];  // Array of paragraphs (rendered as <p> tags)
  keyVerses: { reference: string; text: string }[];
  bibleReading: { reference: string; link: string }[];
}

export const categoryColors: Record<string, string> = {
  Teaching: 'bg-blue-50 text-blue-700',
  Theology: 'bg-violet-50 text-violet-700',
  Application: 'bg-emerald-50 text-emerald-700',
  Devotional: 'bg-rose-50 text-rose-700',
  'Bible Study': 'bg-amber-50 text-amber-700',
};

export const blogPosts: BlogPost[] = [
  {
    id: 'understanding-parables-of-jesus',
    title: 'Understanding the Parables of Jesus',
    excerpt: 'Jesus taught through parables to reveal spiritual truths. Discover how these stories continue to transform our understanding of God\'s kingdom.',
    date: 'Apr 10, 2026',
    category: 'Teaching',
    readTime: '8 min read',
    content: [
      'Jesus Christ was the greatest teacher who ever lived, and His preferred method of instruction was the parable — a simple story drawn from everyday life that reveals a profound spiritual truth. The Gospels record over 30 parables, each one a window into the nature of God\'s kingdom, the human heart, and the call to discipleship.',
      'But why did Jesus speak in parables? In Matthew 13:10-13, the disciples asked this very question. Jesus explained that parables serve a dual purpose: they illuminate truth for those who seek it with open hearts, while concealing it from those who have hardened their hearts against God. A parable is like a key — it only works if you\'re willing to turn it.',
      'Consider the Parable of the Sower in Matthew 13. A farmer scatters seed on four types of ground: the wayside, rocky places, among thorns, and good soil. The seed is the Word of God, and the soils represent different conditions of the human heart. This parable challenges us to honestly examine our own receptivity. Are we the good soil that hears, understands, and bears fruit?',
      'The Parable of the Prodigal Son in Luke 15 is perhaps the most beloved of all. A younger son demands his inheritance, squanders it in reckless living, and returns home destitute — only to find his father running to embrace him. This story isn\'t primarily about the son\'s rebellion; it\'s about the father\'s lavish, unconditional love. It reveals the heart of God toward every sinner who repents.',
      'The Parable of the Good Samaritan (Luke 10:25-37) demolishes our tendency to limit who qualifies as our "neighbor." A man lies beaten on the road, ignored by a priest and a Levite — the religious elite. It is the despised Samaritan who stops, bandages his wounds, and pays for his care. Jesus asks: "Which of these three was neighbor?" The answer redefines love as action, not sentiment.',
      'As you study the parables, look for the central point each one makes. Ask yourself: What does this reveal about God? What does it reveal about me? And how is Jesus Himself the ultimate fulfillment of the truth being taught? In the parable of the treasure hidden in a field (Matthew 13:44), the man sells everything to buy the field. Jesus is that treasure — worth everything we have and are.',
    ],
    keyVerses: [
      { reference: 'Matthew 13:34', text: 'All these things spake Jesus unto the multitude in parables; and without a parable spake he not unto them.' },
      { reference: 'Luke 15:24', text: 'For this my son was dead, and is alive again; he was lost, and is found. And they began to be merry.' },
      { reference: 'Matthew 13:44', text: 'Again, the kingdom of heaven is like unto treasure hid in a field; the which when a man hath found, he hideth, and for joy thereof goeth and selleth all that he hath, and buyeth that field.' },
    ],
    bibleReading: [
      { reference: 'Matthew 13 — The Parables of the Kingdom', link: '/bible/matthew/13' },
      { reference: 'Luke 15 — The Lost Sheep, Coin, and Son', link: '/bible/luke/15' },
      { reference: 'Luke 10 — The Good Samaritan', link: '/bible/luke/10' },
    ],
  },
  {
    id: 'meaning-of-grace-in-scripture',
    title: 'The Meaning of Grace in Scripture',
    excerpt: 'Grace is more than a concept — it\'s the foundation of our relationship with God. Explore what Scripture says about this transformative gift.',
    date: 'Apr 3, 2026',
    category: 'Theology',
    readTime: '7 min read',
    content: [
      'Grace is one of the most important words in the entire Bible, yet it is also one of the most misunderstood. In its simplest definition, grace is God\'s unmerited favor — a gift we cannot earn, do not deserve, and could never repay. It is the very foundation upon which our relationship with God is built.',
      'The Apostle Paul understood grace more deeply than perhaps anyone. Before his conversion, he was Saul of Tarsus — a zealous persecutor of Christians who believed he was earning God\'s approval through strict religious observance. When the risen Christ appeared to him on the Damascus road (Acts 9), Paul\'s entire worldview was shattered. He discovered that God\'s acceptance comes not through human effort but through divine gift.',
      'In Ephesians 2:8-9, Paul writes the definitive statement on grace: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: not of works, lest any man should boast." Notice the precision — salvation is by grace, through faith, and even that faith is a gift. There is no room for human boasting. Grace removes every basis for self-righteousness.',
      'But grace is not merely a theological concept for the moment of salvation. It is the atmosphere in which the Christian lives every day. Paul writes in 2 Corinthians 12:9 that when he pleaded with God to remove a painful "thorn in the flesh," the Lord replied: "My grace is sufficient for thee: for my strength is made perfect in weakness." Grace sustains us in suffering, empowers us in weakness, and keeps us in faith.',
      'Grace also transforms how we treat others. In Colossians 4:6, Paul instructs: "Let your speech be alway with grace, seasoned with salt." Those who have truly experienced God\'s undeserved kindness become conduits of that kindness to others. Forgiveness, patience, generosity — these are the fruits of a life shaped by grace.',
      'The ultimate expression of grace is found at the cross. Romans 5:8 declares: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us." We were not improved or reformed before God acted — we were enemies. And yet He gave His Son. This is grace: not that we loved God, but that He loved us first (1 John 4:19).',
    ],
    keyVerses: [
      { reference: 'Ephesians 2:8-9', text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.' },
      { reference: '2 Corinthians 12:9', text: 'And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness.' },
      { reference: 'Romans 5:8', text: 'But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.' },
    ],
    bibleReading: [
      { reference: 'Ephesians 2 — Saved by Grace Through Faith', link: '/bible/ephesians/2' },
      { reference: 'Romans 5 — Grace Through Christ', link: '/bible/romans/5' },
      { reference: 'John 1 — Grace and Truth', link: '/bible/john/1' },
    ],
  },
  {
    id: 'finding-peace-in-chaotic-world',
    title: 'Finding Peace in a Chaotic World',
    excerpt: 'Jesus offers a peace that transcends circumstances. Learn how to cultivate inner peace through trust and prayer.',
    date: 'Mar 27, 2026',
    category: 'Application',
    readTime: '6 min read',
    content: [
      'We live in a world of constant noise, uncertainty, and anxiety. News cycles bring fresh fears daily. Relationships strain under pressure. Health, finances, and the future all feel uncertain. Into this chaos, Jesus speaks a remarkable promise: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid" (John 14:27).',
      'The peace Jesus offers is fundamentally different from what the world provides. The world\'s peace is circumstantial — it depends on everything going well. Remove the favorable circumstances and the peace evaporates. But Christ\'s peace is rooted in His person, not our situation. It is a peace that "passeth all understanding" (Philippians 4:7) precisely because it doesn\'t depend on understanding our circumstances.',
      'How do we access this peace? Paul gives us the answer in Philippians 4:6-7: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus." The pathway to peace is prayer with thanksgiving — bringing our anxieties to God while actively choosing gratitude.',
      'The Psalms model this practice beautifully. In Psalm 46:10, God commands: "Be still, and know that I am God." This is not passive resignation but active trust — a deliberate choice to stop striving and rest in God\'s sovereign control. David wrote in Psalm 23:4, "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me." Peace comes from presence, not from the absence of trouble.',
      'Jesus demonstrated perfect peace throughout His earthly ministry. He slept in a storm-tossed boat while His disciples panicked (Mark 4:38). He faced His arrest and crucifixion with calm resolve, praying in Gethsemane rather than fleeing. His peace was grounded in perfect trust in His Father\'s will. As we grow in that same trust, His peace becomes increasingly our own.',
    ],
    keyVerses: [
      { reference: 'John 14:27', text: 'Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.' },
      { reference: 'Philippians 4:6-7', text: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.' },
      { reference: 'Psalm 46:10', text: 'Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.' },
    ],
    bibleReading: [
      { reference: 'John 14 — The Promise of Peace', link: '/bible/john/14' },
      { reference: 'Psalm 23 — The Lord Is My Shepherd', link: '/bible/psalms/23' },
      { reference: 'Psalm 46 — God Is Our Refuge', link: '/bible/psalms/46' },
    ],
  },
  {
    id: 'resurrection-christs-ultimate-victory',
    title: 'The Resurrection: Christ\'s Ultimate Victory',
    excerpt: 'The resurrection of Jesus is the cornerstone of Christian faith. Discover its profound implications for our hope and eternity.',
    date: 'Mar 20, 2026',
    category: 'Theology',
    readTime: '8 min read',
    content: [
      'The resurrection of Jesus Christ is the single most important event in human history. It is the foundation upon which the entire Christian faith stands or falls. As the Apostle Paul wrote in 1 Corinthians 15:14, "And if Christ be not risen, then is our preaching vain, and your faith is also vain." Paul understood that without the resurrection, Christianity collapses. But because Christ is risen, everything changes.',
      'On that first Easter morning, the women who went to the tomb expected to find a dead body. Instead, they found an empty tomb and an angel with the most extraordinary announcement ever made: "He is not here: for he is risen, as he said" (Matthew 28:6). The stone had been rolled away — not to let Jesus out, but to let the witnesses in. The resurrection was not a metaphor or a spiritual feeling. It was a bodily, historical event with real witnesses.',
      'The evidence for the resurrection is remarkably strong. The empty tomb was never disputed by Jesus\' enemies — they invented the story that the disciples stole the body (Matthew 28:13). The disciples, who had fled in terror at His arrest, were transformed into fearless preachers willing to die for their testimony. People don\'t die for what they know to be a lie. Over 500 people saw the risen Christ at one time (1 Corinthians 15:6).',
      'What does the resurrection mean for us? First, it proves that Jesus is who He claimed to be — the Son of God. Romans 1:4 says He was "declared to be the Son of God with power... by the resurrection from the dead." Second, it guarantees our own future resurrection. "But now is Christ risen from the dead, and become the firstfruits of them that slept" (1 Corinthians 15:20). His resurrection is the prototype and promise of ours.',
      'Third, the resurrection gives us power for daily living. Paul\'s great ambition was to "know him, and the power of his resurrection" (Philippians 3:10). The same power that raised Christ from the dead is at work in every believer. When we feel weak, defeated, or hopeless, we can remember: our God specializes in bringing life from death, hope from despair, and victory from apparent defeat.',
      'The resurrection is not merely a doctrine to believe — it is a reality to live. Because He lives, we can face tomorrow. Because He conquered death, we need not fear it. Because He rose, every promise He made is confirmed. The resurrection changes everything.',
    ],
    keyVerses: [
      { reference: '1 Corinthians 15:20', text: 'But now is Christ risen from the dead, and become the firstfruits of them that slept.' },
      { reference: 'Matthew 28:6', text: 'He is not here: for he is risen, as he said. Come, see the place where the Lord lay.' },
      { reference: 'Romans 6:9', text: 'Knowing that Christ being raised from the dead dieth no more; death hath no more dominion over him.' },
    ],
    bibleReading: [
      { reference: 'John 20 — The Resurrection Morning', link: '/bible/john/20' },
      { reference: 'John 21 — Jesus Appears to the Disciples', link: '/bible/john/21' },
      { reference: 'Genesis 1 — In the Beginning, God Created', link: '/bible/genesis/1' },
    ],
  },
  {
    id: 'who-is-jesus-according-to-scripture',
    title: 'Who Is Jesus? What Scripture Actually Says',
    excerpt: 'The identity of Jesus Christ is the central question of human history. Discover what the Bible reveals about who He truly is.',
    date: 'Mar 13, 2026',
    category: 'Bible Study',
    readTime: '9 min read',
    content: [
      'The most important question anyone can answer is the one Jesus asked His disciples in Matthew 16:15: "But whom say ye that I am?" Peter answered, "Thou art the Christ, the Son of the living God." This confession — that Jesus is both the promised Messiah (Christ) and the divine Son of God — is the bedrock of Christian faith.',
      'The Gospel of John opens with the most exalted declaration of Christ\'s identity in all of Scripture: "In the beginning was the Word, and the Word was with God, and the Word was God" (John 1:1). This is not ambiguous. Jesus, the Word (Logos), is eternal ("in the beginning"), distinct from the Father ("with God"), and fully divine ("was God"). He is not a created being, an angel, or merely a good teacher. He is God incarnate.',
      'Throughout His ministry, Jesus made claims that only God could make. He said, "I am the way, the truth, and the life: no man cometh unto the Father, but by me" (John 14:6). He forgave sins, which only God can do (Mark 2:7). He accepted worship, which is reserved for God alone (Matthew 14:33). And in John 8:58, He declared, "Before Abraham was, I am" — using the divine name that God revealed to Moses at the burning bush (Exodus 3:14).',
      'Jesus is also fully human. He was born of a woman (Galatians 4:4), grew in wisdom (Luke 2:52), experienced hunger, thirst, weariness, and grief. He wept at the tomb of His friend Lazarus (John 11:35). This is the mystery of the Incarnation: Jesus is one person with two natures — fully God and fully man. He had to be God to save us and man to represent us.',
      'The prophet Isaiah foretold this dual nature seven centuries before Jesus was born: "For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace" (Isaiah 9:6). A child born (His humanity) and a son given (His deity).',
      'Who is Jesus? He is the Creator of the universe, the Redeemer of mankind, the Judge of all the earth, and the King of kings. He is the Good Shepherd who lays down His life for the sheep, the Bread of Life who satisfies every hunger, and the Resurrection and the Life who conquers death itself. He is, as Thomas finally confessed when he saw the risen Christ, "My Lord and my God" (John 20:28).',
    ],
    keyVerses: [
      { reference: 'John 1:1', text: 'In the beginning was the Word, and the Word was with God, and the Word was God.' },
      { reference: 'John 14:6', text: 'Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.' },
      { reference: 'Colossians 2:9', text: 'For in him dwelleth all the fulness of the Godhead bodily.' },
    ],
    bibleReading: [
      { reference: 'John 1 — The Word Made Flesh', link: '/bible/john/1' },
      { reference: 'John 10 — The Good Shepherd', link: '/bible/john/10' },
      { reference: 'John 20 — Thomas Confesses "My Lord and My God"', link: '/bible/john/20' },
    ],
  },
  {
    id: 'how-to-study-the-bible-effectively',
    title: 'How to Study the Bible Effectively: A Beginner\'s Guide',
    excerpt: 'Practical tips and methods for getting the most out of your Bible reading time, whether you\'re new to Scripture or a lifelong reader.',
    date: 'Mar 6, 2026',
    category: 'Application',
    readTime: '7 min read',
    content: [
      'The Bible is the most important book ever written — but it can also be intimidating. With 66 books written over 1,500 years by dozens of authors in three languages, where do you even begin? The good news is that effective Bible study doesn\'t require a seminary degree. It requires a willing heart, a consistent approach, and the guidance of the Holy Spirit.',
      'Start with the Gospel of John. If you\'re new to the Bible, John\'s Gospel is the ideal starting point. It was written specifically "that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name" (John 20:31). It\'s theologically rich yet accessible, and it introduces you to the person at the center of the entire Bible: Jesus Christ.',
      'Use the three-step method: Observation, Interpretation, Application. First, observe what the text actually says — read it carefully, note the details, identify the characters, setting, and action. Second, interpret what it means — consider the context, the audience, and the author\'s intent. Third, apply it to your life — ask "How does this truth change how I think, feel, or act today?"',
      'Read in context, not in isolation. One of the most common mistakes is pulling individual verses out of their context. A verse without its context can mean almost anything. Always read the surrounding verses, understand the chapter, and consider where the passage fits within the book and the whole Bible. Scripture interprets Scripture.',
      'Pray before, during, and after your reading. Psalm 119:18 is the Bible student\'s prayer: "Open thou mine eyes, that I may behold wondrous things out of thy law." The Bible is not merely a human book to be analyzed — it is the living Word of God that the Holy Spirit illuminates. Ask God to open your understanding, and He will.',
      'Be consistent rather than ambitious. It\'s better to read one chapter thoughtfully every day than to binge-read five chapters and retain nothing. Start with 15 minutes a day. Use a reading plan to provide structure. Mark passages that stand out, write brief notes, and revisit them. Over time, the cumulative effect of daily, prayerful Bible study will transform your mind and heart.',
    ],
    keyVerses: [
      { reference: 'Psalm 119:18', text: 'Open thou mine eyes, that I may behold wondrous things out of thy law.' },
      { reference: '2 Timothy 3:16', text: 'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.' },
      { reference: 'John 20:31', text: 'But these are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name.' },
    ],
    bibleReading: [
      { reference: 'John 1 — Start Here', link: '/bible/john/1' },
      { reference: 'Psalm 119 — The Word of God', link: '/bible/psalms/119' },
      { reference: 'Genesis 1 — In the Beginning', link: '/bible/genesis/1' },
    ],
  },
  {
    id: 'john-3-16-most-famous-verse',
    title: 'John 3:16 — Unpacking the Most Famous Verse in the Bible',
    excerpt: 'Everyone knows John 3:16, but few have fully explored its depths. Every word of this verse reveals something extraordinary about God\'s love.',
    date: 'Feb 27, 2026',
    category: 'Bible Study',
    readTime: '8 min read',
    content: [
      '"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life" (John 3:16). It has been called the Gospel in miniature — the entire message of Christianity compressed into a single sentence. Martin Luther called it "the Bible in brief." But familiarity can breed superficiality. Let\'s look at every word.',
      '"For God" — The verse begins with the source of all love. This is not abstract love or human love. It is the love of the infinite, eternal, all-powerful Creator God. The One who spoke galaxies into existence, who holds the universe together by His will, turned His attention toward us. The initiative is entirely His.',
      '"So loved" — The word "so" doesn\'t mean "very much" (though that\'s true). In the original Greek, it means "in this way" or "to this extent." God\'s love is demonstrated not by words but by action. How did He love us? He loved us to the extent of giving. The measure of God\'s love is the cross.',
      '"The world" — This is staggering. God didn\'t love only the righteous, the devout, or the deserving. He loved "the world" — the entire fallen, rebellious, sinful human race. As Romans 5:8 confirms, "while we were yet sinners, Christ died for us." God\'s love is not a response to our goodness; it is an expression of His nature.',
      '"That he gave his only begotten Son" — This is the cost of love. God did not send an angel or a prophet. He gave His only Son — the most precious, beloved treasure of heaven. The Father sent the Son knowing what it would cost: rejection, suffering, and death on a cross. Abraham was willing to sacrifice Isaac (Genesis 22), but God actually did what He asked of Abraham.',
      '"That whosoever believeth in him" — Here is the great invitation. Not "whosoever is good enough" or "whosoever earns it." Whosoever believeth. Faith is the only condition — personal trust in Jesus Christ. And "whosoever" means no one is excluded by race, status, past sins, or any other barrier. If you can believe, you can be saved.',
      '"Should not perish, but have everlasting life" — These are the two destinies: perishing or everlasting life. Jesus doesn\'t soften the reality. Without Him, we perish — eternal separation from God. But in Him, we receive everlasting life — not just endless existence, but the fullness of life in God\'s presence forever. This is what\'s at stake in John 3:16. This is why it matters.',
    ],
    keyVerses: [
      { reference: 'John 3:16', text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.' },
      { reference: 'John 3:17', text: 'For God sent not his Son into the world to condemn the world; but that the world through him might be saved.' },
      { reference: '1 John 4:9', text: 'In this was manifested the love of God toward us, because that God sent his only begotten Son into the world, that we might live through him.' },
    ],
    bibleReading: [
      { reference: 'John 3 — Jesus and Nicodemus', link: '/bible/john/3' },
      { reference: 'John 1 — The Word Made Flesh', link: '/bible/john/1' },
      { reference: 'Genesis 3 — The First Promise of Salvation', link: '/bible/genesis/3' },
    ],
  },
  {
    id: 'genesis-1-creation-and-creator',
    title: 'Genesis 1: What the Creation Account Reveals About God',
    excerpt: 'The opening chapter of the Bible isn\'t just about how the world began — it\'s a revelation of who God is and what He\'s like.',
    date: 'Feb 20, 2026',
    category: 'Bible Study',
    readTime: '7 min read',
    content: [
      '"In the beginning God created the heaven and the earth" (Genesis 1:1). With these ten words, the Bible establishes the most fundamental truth of reality: there is a God, He is eternal, and He is the Creator of everything that exists. Before science, before philosophy, before human civilization — God.',
      'Genesis 1 reveals that God creates by speaking. "And God said, Let there be light: and there was light" (Genesis 1:3). He doesn\'t struggle, experiment, or evolve His way to creation. He speaks, and reality obeys. This tells us that God\'s word has absolute power and authority. When God speaks, things that didn\'t exist come into being. This same creative word is what we encounter when we read Scripture.',
      'Notice the pattern of creation: God creates, evaluates ("and God saw that it was good"), and names. He brings order out of chaos, separates light from darkness, land from sea, and fills each domain with life. God is not a God of disorder but of purpose, beauty, and design. Every ecosystem, every creature, every star reflects His intentional craftsmanship.',
      'The climax of creation is humanity. "So God created man in his own image, in the image of God created he him; male and female created he them" (Genesis 1:27). Humans alone bear the image of God — the capacity for reason, creativity, moral awareness, and relationship. This gives every human being inherent dignity and worth, regardless of any other characteristic.',
      'Genesis 1 also points forward to Christ. The New Testament reveals that Jesus was the agent of creation: "All things were made by him; and without him was not any thing made that was made" (John 1:3). The Word who spoke the universe into existence is the same Word who became flesh and dwelt among us. The Creator entered His creation to redeem it.',
      'When you read Genesis 1, you\'re not just reading ancient history. You\'re meeting the God who made you, who sustains you, and who has a purpose for your life. The same God who said "Let there be light" into the void of creation is the God who shines light into the darkness of every human heart (2 Corinthians 4:6).',
    ],
    keyVerses: [
      { reference: 'Genesis 1:1', text: 'In the beginning God created the heaven and the earth.' },
      { reference: 'Genesis 1:27', text: 'So God created man in his own image, in the image of God created he him; male and female created he them.' },
      { reference: 'John 1:3', text: 'All things were made by him; and without him was not any thing made that was made.' },
    ],
    bibleReading: [
      { reference: 'Genesis 1 — The Creation', link: '/bible/genesis/1' },
      { reference: 'Genesis 2 — The Garden of Eden', link: '/bible/genesis/2' },
      { reference: 'John 1 — The Word Was God', link: '/bible/john/1' },
    ],
  },
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find((p) => p.id === id);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}
