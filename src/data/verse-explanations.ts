export interface VerseExplanation {
  bookSlug: string;
  chapter: number;
  verse: number;
  reference: string;
  kjvText: string;
  explanation: string[];
  context: string;
  originalLanguage: string;
  application: string;
  crossReferences: { reference: string; text: string; link: string }[];
  relatedVerses: string[];
}

export const verseExplanations: Record<string, VerseExplanation> = {
  // 1. John 3:16
  'john/3/16': {
    bookSlug: 'john',
    chapter: 3,
    verse: 16,
    reference: 'John 3:16',
    kjvText: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
    explanation: [
      'John 3:16 is perhaps the most well-known verse in the entire Bible, and for good reason. In a single sentence, Jesus summarizes the entire gospel message -- the good news of God\'s saving love for humanity. This verse appears in the middle of a nighttime conversation between Jesus and Nicodemus, a Pharisee and member of the Jewish ruling council. Nicodemus came to Jesus under cover of darkness, seeking answers to questions that his religious training could not resolve.',
      'The verse begins with "For God so loved the world" -- establishing that the foundation of salvation is not human effort, religious achievement, or moral perfection, but the love of God. The Greek word used here is "agape," which refers to the highest form of love -- unconditional, self-sacrificing, and initiated by the lover regardless of the worthiness of the beloved. God\'s love is not a response to human goodness; it is the cause of human redemption.',
      'The phrase "that he gave his only begotten Son" reveals the cost of this love. God did not merely feel compassion from a distance; He acted decisively by sending His own Son into the world. The word "gave" encompasses the entire mission of Christ -- His incarnation, His life of perfect obedience, His suffering and death on the cross, and His resurrection. The "only begotten" (Greek: monogenes) emphasizes the unique, one-of-a-kind relationship between the Father and the Son. There is no other like Him, and there was no other sacrifice that could accomplish what His death accomplished.',
      'The promise is breathtaking in its scope: "whosoever believeth in him should not perish, but have everlasting life." The word "whosoever" demolishes every barrier of race, nationality, social status, and personal history. Salvation is offered freely to every person who will believe. And the result is not merely escape from judgment ("should not perish") but the positive gift of eternal life -- an unending, unbreakable relationship with the living God that begins the moment a person places their faith in Christ and continues forever.'
    ],
    context: 'Jesus speaks these words during a private nighttime meeting with Nicodemus, a Pharisee and member of the Sanhedrin. Nicodemus has come seeking understanding, and Jesus has just told him that he must be "born again" to see the kingdom of God. After explaining the new birth through the Spirit, Jesus reveals the heart of God\'s saving plan.',
    originalLanguage: 'The Greek "monogenes" (only begotten) means unique, one of a kind -- emphasizing the singular nature of the Father-Son relationship. "Pisteuo" (believe) means to trust, to place confidence in, to commit oneself to -- it is far more than intellectual agreement.',
    application: 'This verse invites every person to respond to God\'s love by placing their trust in Jesus Christ. It assures believers that their salvation rests not on their own performance but on God\'s love and Christ\'s finished work. It is the foundation of Christian assurance and the starting point for sharing the gospel with others.',
    crossReferences: [
      { reference: 'Romans 5:8', text: 'But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.', link: '/bible/romans/5' },
      { reference: '1 John 4:9-10', text: 'In this was manifested the love of God toward us, because that God sent his only begotten Son into the world, that we might live through him.', link: '/bible/1-john/4' },
      { reference: 'John 3:17', text: 'For God sent not his Son into the world to condemn the world; but that the world through him might be saved.', link: '/bible/john/3' },
      { reference: 'Ephesians 2:8-9', text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.', link: '/bible/ephesians/2' }
    ],
    relatedVerses: ['john/14/6', 'romans/10/9', 'john/1/1', 'ephesians/2/8']
  },

  // 2. John 14:6
  'john/14/6': {
    bookSlug: 'john',
    chapter: 14,
    verse: 6,
    reference: 'John 14:6',
    kjvText: 'Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.',
    explanation: [
      'John 14:6 is one of the most definitive and exclusive claims Jesus ever made about Himself. Speaking to His disciples on the night before His crucifixion, Jesus declares that He is not merely a teacher who shows people a way, a philosopher who discusses truth, or a healer who improves life. He is the way, the truth, and the life -- the definite article "the" making each claim absolute and exclusive.',
      '"I am the way" means Jesus is the only path to God. In a world that offers countless spiritual paths and religious systems, Jesus claims to be the single road that leads to the Father. This is not arrogance; it is the logical consequence of who He is. If Jesus is truly God incarnate -- the only one who has come from the Father and returns to the Father -- then He is uniquely qualified to be the way back to God.',
      '"I am the truth" means Jesus is the embodiment and source of all truth. He does not merely speak truth; He is truth in His very person. In Him, all the promises of God find their "yes" (2 Corinthians 1:20). Every genuine truth in philosophy, science, and human experience finds its ultimate ground in Christ, through whom all things were made and in whom all things hold together.',
      '"I am the life" means Jesus is the source of both physical and spiritual life. He is the one "in whom was life, and the life was the light of men" (John 1:4). Without Him, humanity exists in spiritual death -- separated from God and without hope. Through faith in Christ, believers receive eternal life, which is not merely endless existence but a quality of life defined by intimate knowledge of God (John 17:3). The concluding phrase "no man cometh unto the Father, but by me" is the most exclusive religious claim in history, and it comes from the most loving person who ever lived.'
    ],
    context: 'Jesus speaks these words during the Last Supper, His final meal with the disciples before His arrest and crucifixion. Thomas has just asked, "Lord, we know not whither thou goest; and how can we know the way?" Jesus\' response reveals that He Himself is the answer to Thomas\' question -- the destination and the path are one and the same Person.',
    originalLanguage: 'The Greek "hodos" (way) means a road or path. "Aletheia" (truth) means reality as opposed to illusion, the unveiled essence of things. "Zoe" (life) refers to the divine, eternal life that belongs to God Himself. Each word carries immense theological weight.',
    application: 'This verse calls every person to decide what they believe about Jesus. If He is the way, the truth, and the life, then following Him is not one option among many -- it is the only option that leads to God. It challenges the modern assumption that all spiritual paths are equally valid and invites people to examine the unique claims of Christ.',
    crossReferences: [
      { reference: 'Acts 4:12', text: 'Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.', link: '/bible/acts/4' },
      { reference: 'John 10:9', text: 'I am the door: by me if any man enter in, he shall be saved, and shall go in and out, and find pasture.', link: '/bible/john/10' },
      { reference: '1 Timothy 2:5', text: 'For there is one God, and one mediator between God and men, the man Christ Jesus.', link: '/bible/1-timothy/2' },
      { reference: 'Hebrews 10:19-20', text: 'Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus, By a new and living way, which he hath consecrated for us.', link: '/bible/hebrews/10' }
    ],
    relatedVerses: ['john/3/16', 'john/1/1', 'romans/10/9', 'john/11/25']
  },

  // 3. Romans 8:28
  'romans/8/28': {
    bookSlug: 'romans',
    chapter: 8,
    verse: 28,
    reference: 'Romans 8:28',
    kjvText: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.',
    explanation: [
      'Romans 8:28 is one of the most comforting promises in all of Scripture, yet it is also one of the most misunderstood. Paul does not say that all things are good, nor does he say that all things feel good. He says that all things "work together for good" -- a crucial distinction. The individual ingredients of life may include suffering, loss, betrayal, sickness, and heartbreak. But in the hands of a sovereign God, these ingredients are being woven into a tapestry of good that often cannot be seen until eternity.',
      'The phrase "we know" indicates that this is not wishful thinking or blind optimism. It is a settled conviction based on the character of God and the evidence of His faithfulness throughout history. Paul writes this from personal experience -- he has been beaten, shipwrecked, imprisoned, and persecuted, yet he has seen God use every hardship for His redemptive purposes.',
      'The promise is specifically addressed to "them that love God, to them who are the called according to his purpose." This is not a universal guarantee that everything works out for everyone. It is a covenant promise to those who are in relationship with God through faith in Christ. The "good" God is working toward is defined in the very next verse: "to be conformed to the image of his Son" (Romans 8:29). God\'s ultimate purpose is not our comfort but our Christlikeness.',
      'This verse does not answer the philosophical question of why suffering exists. Instead, it provides something far more powerful: the assurance that no suffering is wasted in God\'s economy. Every trial has a purpose, even when that purpose is hidden. The God who sent His own Son to the cross -- the greatest evil producing the greatest good in human history -- is the same God who promises to use every circumstance in the lives of His children for their ultimate benefit and His ultimate glory.'
    ],
    context: 'Romans 8 is the climactic chapter of Paul\'s argument in the first half of Romans. After explaining human sinfulness (chapters 1-3), justification by faith (chapters 3-5), and the believer\'s struggle with sin (chapters 6-7), Paul now describes the glorious security of those who are in Christ. Verse 28 is part of a crescendo that culminates in the declaration that nothing can separate believers from the love of God (Romans 8:38-39).',
    originalLanguage: 'The Greek "synergeo" (work together) means to cooperate, to work in conjunction. It suggests that all events -- not just pleasant ones -- are being coordinated by God toward a unified purpose. "Agathos" (good) here refers to ultimate spiritual good, not necessarily immediate comfort.',
    application: 'When believers face circumstances that seem purposeless or cruel, this verse invites them to trust that God is at work behind the scenes. It does not minimize pain but reframes it within the context of God\'s sovereign, loving purpose. It is a verse to cling to in the darkest moments of life.',
    crossReferences: [
      { reference: 'Genesis 50:20', text: 'But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive.', link: '/bible/genesis/50' },
      { reference: 'Romans 8:29', text: 'For whom he did foreknow, he also did predestinate to be conformed to the image of his Son.', link: '/bible/romans/8' },
      { reference: 'James 1:2-4', text: 'My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience.', link: '/bible/james/1' },
      { reference: '2 Corinthians 4:17', text: 'For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory.', link: '/bible/2-corinthians/4' }
    ],
    relatedVerses: ['jeremiah/29/11', 'philippians/4/13', 'proverbs/3/5', 'john/16/33']
  },

  // 4. Jeremiah 29:11
  'jeremiah/29/11': {
    bookSlug: 'jeremiah',
    chapter: 29,
    verse: 11,
    reference: 'Jeremiah 29:11',
    kjvText: 'For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.',
    explanation: [
      'Jeremiah 29:11 is one of the most beloved and frequently quoted verses in the Bible, often used to express God\'s personal care for individual believers. The verse reveals God\'s heart toward His people -- His thoughts toward them are thoughts of "peace" (Hebrew: shalom, meaning wholeness, well-being, and flourishing) and not of "evil" (Hebrew: ra\'ah, meaning harm or calamity). God is not plotting disaster for His children; He is planning their welfare.',
      'The historical context is essential for understanding this verse correctly. God speaks these words through the prophet Jeremiah to the Jewish exiles in Babylon. They had been conquered and deported from their homeland as judgment for their persistent idolatry and disobedience. In this moment of national calamity, God assures them that exile is not the end of their story. He has a plan, and that plan includes a future and a hope.',
      'Remarkably, God tells the exiles that they will be in Babylon for seventy years (Jeremiah 29:10). The promise of verse 11 does not mean instant deliverance or the immediate removal of difficulty. It means that God has a purpose even in the waiting, even in the exile, even in the discipline. The "expected end" (or "future and a hope" in many translations) was not going to arrive overnight. It would require patience, faith, and trust in God\'s timing.',
      'For Christians today, this verse speaks to the character of God as a loving Father who has a purpose for His children\'s lives. It does not guarantee a life free from hardship -- the original audience was in exile when they received it. Rather, it guarantees that God\'s ultimate intentions toward His people are good, that He is working toward an outcome that will bring them wholeness and hope, and that no circumstance -- however painful -- can derail His sovereign plan.'
    ],
    context: 'Jeremiah writes to the Jewish exiles who have been taken to Babylon by King Nebuchadnezzar. False prophets have been telling the exiles that they will return home quickly, but God through Jeremiah tells them to settle in Babylon, build houses, plant gardens, and seek the welfare of the city -- because the exile will last seventy years. Verse 11 comes as God\'s reassurance that this discipline has an end and a purpose.',
    originalLanguage: 'The Hebrew "shalom" (peace) means far more than the absence of conflict -- it encompasses completeness, prosperity, safety, and wholeness. "Acharith" (expected end/future) means the latter end, the outcome, the final result. Together they promise a purposeful, hopeful conclusion.',
    application: 'This verse reminds believers that God\'s plans operate on His timeline, not ours. It offers comfort during seasons of waiting, difficulty, or discipline by assuring us that God has not forgotten us and that His purposes for us are ultimately good. It encourages patience and trust in seasons when deliverance seems distant.',
    crossReferences: [
      { reference: 'Romans 8:28', text: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.', link: '/bible/romans/8' },
      { reference: 'Proverbs 19:21', text: 'There are many devices in a man\'s heart; nevertheless the counsel of the LORD, that shall stand.', link: '/bible/proverbs/19' },
      { reference: 'Isaiah 55:8-9', text: 'For my thoughts are not your thoughts, neither are your ways my ways, saith the LORD.', link: '/bible/isaiah/55' },
      { reference: 'Psalm 33:11', text: 'The counsel of the LORD standeth for ever, the thoughts of his heart to all generations.', link: '/bible/psalms/33' }
    ],
    relatedVerses: ['romans/8/28', 'proverbs/3/5', 'philippians/4/13', 'isaiah/41/10']
  },

  // 5. Proverbs 3:5-6
  'proverbs/3/5': {
    bookSlug: 'proverbs',
    chapter: 3,
    verse: 5,
    reference: 'Proverbs 3:5-6',
    kjvText: 'Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.',
    explanation: [
      'Proverbs 3:5-6 is one of the most practical and foundational passages in all of wisdom literature. Solomon, writing under the inspiration of the Holy Spirit, commands his readers to do something that is simultaneously simple and profoundly difficult: to trust God completely and to stop relying on their own limited understanding. These two verses contain both a command and a promise, and they address the most common struggle of the human heart -- the desire to be in control.',
      'The command to "trust in the LORD with all thine heart" is comprehensive. The word "all" leaves no room for divided loyalty. This is not a call to trust God in some areas while managing others independently. It is a call to wholehearted dependence -- bringing every decision, every relationship, every fear, and every ambition under the authority of God. The heart in Hebrew thought is not merely the seat of emotions; it is the center of the entire inner life -- will, intellect, and affection.',
      '"Lean not unto thine own understanding" addresses the specific obstacle to trust: human self-sufficiency. Our understanding is limited by our finite perspective, colored by our experiences, and distorted by our desires. This does not mean that God opposes thinking or that wisdom is anti-intellectual. It means that human reason, however valuable, must be subordinated to divine revelation. When God\'s word and our understanding conflict, God\'s word must prevail.',
      'The promise follows naturally: "In all thy ways acknowledge him, and he shall direct thy paths." To "acknowledge" God means to recognize His presence and authority in every area of life -- not just in church or prayer but in work, finances, relationships, and daily decisions. The reward for this posture of dependence is divine guidance. God does not promise to show us the entire road ahead, but He promises to direct our steps -- one at a time, as we trust Him with each one.'
    ],
    context: 'Proverbs 3 is part of Solomon\'s instructions to his son, a collection of fatherly wisdom that covers topics from generosity to discipline. Verses 5-6 stand as the heart of Solomon\'s counsel: before all other wisdom, one must learn to trust God above oneself. This is the foundation upon which all other wisdom is built.',
    originalLanguage: 'The Hebrew "batach" (trust) means to feel safe, to be confident, to rely upon. "Sha\'an" (lean) means to support oneself on, to rest one\'s weight against. "Yada" (acknowledge) means to know intimately, to recognize, to be aware of. "Yashar" (direct) means to make straight, to level, to remove obstacles.',
    application: 'This passage speaks directly to moments of decision and uncertainty. When facing choices about career, relationships, health, or any major life direction, believers are called to bring those decisions to God in prayer, to submit their reasoning to His word, and to trust that He will guide them faithfully -- even when the path is unclear.',
    crossReferences: [
      { reference: 'Psalm 37:5', text: 'Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.', link: '/bible/psalms/37' },
      { reference: 'Isaiah 55:8-9', text: 'For my thoughts are not your thoughts, neither are your ways my ways, saith the LORD.', link: '/bible/isaiah/55' },
      { reference: 'Psalm 119:105', text: 'Thy word is a lamp unto my feet, and a light unto my path.', link: '/bible/psalms/119' },
      { reference: 'James 1:5', text: 'If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.', link: '/bible/james/1' }
    ],
    relatedVerses: ['jeremiah/29/11', 'romans/8/28', 'philippians/4/13', 'psalm/23/1']
  },

  // 6. Philippians 4:13
  'philippians/4/13': {
    bookSlug: 'philippians',
    chapter: 4,
    verse: 13,
    reference: 'Philippians 4:13',
    kjvText: 'I can do all things through Christ which strengtheneth me.',
    explanation: [
      'Philippians 4:13 is one of the most quoted verses in Scripture, but it is also one of the most commonly taken out of context. Many people use this verse as a general promise that God will help them achieve any goal -- athletic, financial, or professional. While God certainly empowers His people, Paul\'s meaning here is far more profound and far more useful than a motivational slogan.',
      'The context is crucial. In the preceding verses (Philippians 4:11-12), Paul writes: "I have learned, in whatsoever state I am, therewith to be content. I know both how to be abased, and I know how to abound: every where and in all things I am instructed both to be full and to be hungry, both to abound and to suffer need." Paul is not talking about achieving worldly success; he is talking about being content in every circumstance -- including hunger, poverty, and suffering.',
      '"I can do all things" therefore means "I can endure all things," "I can face all circumstances," "I can be content in any situation." Paul writes this letter from prison, yet he overflows with joy. He has learned the secret of contentment: it is not found in favorable circumstances but in the presence and power of Christ. Whether he has much or little, whether he is free or in chains, he has discovered that Christ is sufficient.',
      'The phrase "through Christ which strengtheneth me" is the key. The Greek word "endunamoo" means to empower, to infuse with strength. Paul is not drawing on his own reserves of willpower or positive thinking. He is being continuously empowered by the living Christ who dwells within him. This is the secret: contentment and endurance are not human achievements but divine gifts, flowing from an ongoing, dependent relationship with Jesus. The strongest Christian is not the one with the most natural ability but the one who has learned to depend most fully on Christ\'s strength.'
    ],
    context: 'Paul writes to the Philippian church from a Roman prison. Despite his chains, his letter overflows with joy and gratitude. In chapter 4, he thanks the Philippians for their financial support and uses the occasion to share the secret of his contentment. Verse 13 is the climax of his testimony: Christ\'s power is the source of his ability to face any circumstance.',
    originalLanguage: 'The Greek "endunamoo" (strengtheneth) is a present tense participle, meaning "the one who is continuously empowering me." It is not a one-time gift of strength but an ongoing supply. "Panta" (all things) refers to all the circumstances Paul has described -- abundance and need, fullness and hunger.',
    application: 'This verse is not a promise of worldly success but something far better: the promise that Christ\'s power is sufficient for every situation a believer will face. Whether in prosperity or hardship, in health or sickness, in freedom or confinement, the believer can face each day with strength that comes from Christ, not from circumstances.',
    crossReferences: [
      { reference: '2 Corinthians 12:9', text: 'And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness.', link: '/bible/2-corinthians/12' },
      { reference: 'Philippians 4:11-12', text: 'I have learned, in whatsoever state I am, therewith to be content.', link: '/bible/philippians/4' },
      { reference: 'Isaiah 40:31', text: 'But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles.', link: '/bible/isaiah/40' },
      { reference: 'John 15:5', text: 'I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.', link: '/bible/john/15' }
    ],
    relatedVerses: ['romans/8/28', 'proverbs/3/5', 'isaiah/41/10', '2-timothy/1/7']
  },

  // 7. Isaiah 41:10
  'isaiah/41/10': {
    bookSlug: 'isaiah',
    chapter: 41,
    verse: 10,
    reference: 'Isaiah 41:10',
    kjvText: 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.',
    explanation: [
      'Isaiah 41:10 is God\'s direct and personal assurance to His people in a time of fear and uncertainty. The verse contains one command ("fear thou not"), one declaration of presence ("I am with thee"), one declaration of identity ("I am thy God"), and three promises of action ("I will strengthen thee... help thee... uphold thee"). The structure moves from the negative (stop fearing) to the positive (here is why you can be confident), providing both comfort and reason.',
      'The command "fear thou not" appears over 300 times in Scripture in various forms, making it one of God\'s most repeated instructions. God does not shame His people for feeling afraid; He addresses fear directly and replaces it with truth. The reason not to fear is not that circumstances are safe, but that God is present: "I am with thee." The most dangerous situation with God present is safer than the most comfortable situation without Him.',
      '"Be not dismayed; for I am thy God" deepens the assurance. The Hebrew word for "dismayed" (sha\'ah) means to gaze anxiously, to look around in panic. God says, "Stop looking around in terror and look at Me instead." The possessive pronoun "thy" is deeply personal -- this is not an impersonal cosmic force but a covenant God who belongs to His people and to whom His people belong.',
      'The three promises that follow are stacked for emphasis. "I will strengthen thee" -- God will supply inner power. "I will help thee" -- God will provide practical assistance. "I will uphold thee with the right hand of my righteousness" -- God will personally sustain and support His people with His own righteous power. The "right hand" in biblical imagery is the hand of power, authority, and blessing. God pledges His own righteous character as the guarantee that He will not let His people fall.'
    ],
    context: 'Isaiah 41 is part of the "comfort section" of Isaiah (chapters 40-66), written to encourage the people of Israel who would face exile in Babylon. God addresses them as His chosen servant and reassures them that He has not abandoned them. Despite their circumstances, He remains their God and will act on their behalf.',
    originalLanguage: 'The Hebrew "al-tira" (fear not) is a strong negative command. "Immacha" (with thee) uses the intimate second-person singular, making this deeply personal. "Tamach" (uphold) means to grasp, to seize, to hold firmly -- the image is of God grabbing hold of His people and refusing to let go.',
    application: 'This verse is a lifeline for anyone facing fear, anxiety, or overwhelming circumstances. It redirects attention from the source of fear to the character and promises of God. Whether facing illness, financial hardship, relational pain, or spiritual battle, believers can return to this verse and find fresh courage in God\'s unchanging commitment to be with them and uphold them.',
    crossReferences: [
      { reference: 'Deuteronomy 31:6', text: 'Be strong and of a good courage, fear not, nor be afraid of them: for the LORD thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee.', link: '/bible/deuteronomy/31' },
      { reference: 'Psalm 46:1', text: 'God is our refuge and strength, a very present help in trouble.', link: '/bible/psalms/46' },
      { reference: 'Joshua 1:9', text: 'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.', link: '/bible/joshua/1' },
      { reference: '2 Timothy 1:7', text: 'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.', link: '/bible/2-timothy/1' }
    ],
    relatedVerses: ['philippians/4/13', 'psalm/23/1', '2-timothy/1/7', 'joshua/1/9']
  },

  // 8. Psalm 23:1
  'psalms/23/1': {
    bookSlug: 'psalms',
    chapter: 23,
    verse: 1,
    reference: 'Psalm 23:1-3',
    kjvText: 'The LORD is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul.',
    explanation: [
      'Psalm 23 is the most beloved psalm in the Bible, and it begins with a declaration that summarizes the entire Christian life: "The LORD is my shepherd." In five words, David establishes a relationship of intimate dependence between himself and God. The metaphor of a shepherd was not romantic or sentimental in David\'s world -- it was rugged, practical, and deeply personal. David had been a shepherd himself and knew exactly what the role demanded: constant vigilance, personal sacrifice, and tender care for vulnerable creatures.',
      'The consequence of having the LORD as shepherd is stunning in its simplicity: "I shall not want." This does not mean the believer will never experience need or desire, but that with God as provider and protector, nothing essential will be lacking. The Hebrew word "chaser" (want) means to lack, to be without, to be deficient. When the LORD is your shepherd, you are not deficient in anything that truly matters.',
      '"He maketh me to lie down in green pastures" speaks of provision and rest. Sheep will not lie down unless they feel safe, well-fed, and free from conflict with other sheep. The shepherd creates the conditions for rest. "He leadeth me beside the still waters" continues the theme -- sheep are afraid of rushing water, so the shepherd leads them to calm, quiet streams where they can drink without fear.',
      '"He restoreth my soul" is perhaps the most tender phrase in the psalm. The Hebrew "nephesh" (soul) refers to the entire inner life -- mind, emotions, and will. Life depletes us; the Shepherd restores us. When we are exhausted, disillusioned, grief-stricken, or spiritually dry, the Shepherd leads us to places of renewal. Jesus identified Himself as the Good Shepherd (John 10:11), and in doing so, He claimed to be the fulfillment of everything Psalm 23 describes -- the one who provides, protects, guides, and restores His sheep.'
    ],
    context: 'David, who spent his youth as a literal shepherd in the fields near Bethlehem, writes this psalm from personal experience on both sides of the metaphor. Having cared for sheep and having been cared for by God, he understands the shepherd-sheep relationship with unique depth. The psalm moves from provision (vv. 1-3) to protection (v. 4) to abundance (v. 5) to eternal hope (v. 6).',
    originalLanguage: 'The Hebrew "ra\'ah" (shepherd) means to tend, to pasture, to feed. "Chaser" (want) means to lack or be deficient. "Nuchah" (still, as in still waters) means rest, quietness, settled peace. "Shub" (restoreth) means to bring back, to turn around, to revive.',
    application: 'This psalm invites every believer to rest in God\'s personal care. Whatever you are facing -- whether stress, grief, fear, or exhaustion -- the Shepherd promises to provide what you need, lead you to places of peace, and restore what life has depleted. It is a psalm to memorize, meditate on, and return to again and again.',
    crossReferences: [
      { reference: 'John 10:11', text: 'I am the good shepherd: the good shepherd giveth his life for the sheep.', link: '/bible/john/10' },
      { reference: 'Isaiah 40:11', text: 'He shall feed his flock like a shepherd: he shall gather the lambs with his arm, and carry them in his bosom.', link: '/bible/isaiah/40' },
      { reference: 'Psalm 100:3', text: 'Know ye that the LORD he is God: it is he that hath made us, and not we ourselves; we are his people, and the sheep of his pasture.', link: '/bible/psalms/100' },
      { reference: '1 Peter 2:25', text: 'For ye were as sheep going astray; but are now returned unto the Shepherd and Bishop of your souls.', link: '/bible/1-peter/2' }
    ],
    relatedVerses: ['isaiah/41/10', 'philippians/4/13', 'proverbs/3/5', 'john/3/16']
  },

  // 9. Romans 10:9
  'romans/10/9': {
    bookSlug: 'romans',
    chapter: 10,
    verse: 9,
    reference: 'Romans 10:9-10',
    kjvText: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.',
    explanation: [
      'Romans 10:9 is one of the clearest statements in the New Testament about how a person is saved. Paul strips away all religious complexity and reduces the gospel response to two essential acts: confessing with the mouth and believing in the heart. These are not two separate requirements but two expressions of a single reality -- genuine saving faith that transforms both the inner person and the outward life.',
      '"Confess with thy mouth the Lord Jesus" means to publicly declare that Jesus is Lord. In the first century, this was a radical and dangerous declaration. The Roman Empire demanded that citizens say "Caesar is Lord" as an oath of allegiance. To confess "Jesus is Lord" was to transfer one\'s ultimate allegiance from the most powerful human authority to the risen Christ. It was both a theological statement (Jesus is divine) and a personal commitment (Jesus is my Lord).',
      '"Believe in thine heart that God hath raised him from the dead" identifies the specific content of saving faith. The resurrection is the cornerstone of Christianity. If Christ is not raised, Paul says elsewhere, our faith is vain (1 Corinthians 15:17). To believe in the resurrection is to believe that Jesus\' death on the cross accomplished what it was meant to accomplish -- the defeat of sin and death -- and that God vindicated His Son by raising Him to life. This belief is not merely intellectual agreement but heart-level trust.',
      'The promise is absolute: "thou shalt be saved." Not "thou might be saved" or "thou shalt begin the process of salvation." Paul declares that the person who genuinely confesses and believes is saved -- fully, completely, and eternally. Verse 10 explains the relationship between the two acts: "with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation." Inward faith produces a right standing before God; outward confession expresses and confirms that faith before the world.'
    ],
    context: 'In Romans 9-11, Paul addresses the question of Israel\'s rejection of Christ and God\'s faithfulness to His promises. In chapter 10, he explains that salvation is available to all -- Jew and Gentile alike -- through faith in Christ. Verses 9-10 summarize the simplicity of the gospel invitation: believe and confess, and you will be saved.',
    originalLanguage: 'The Greek "homologeo" (confess) means to say the same thing, to agree with, to declare publicly. "Pisteuo" (believe) means to trust, to be persuaded, to commit to. "Sozo" (saved) means to deliver, to rescue, to heal -- encompassing deliverance from sin\'s penalty, power, and ultimately its presence.',
    application: 'This verse offers the clearest possible invitation to anyone seeking salvation. It removes every barrier of education, social status, or religious background. If you believe in your heart that Jesus is the risen Lord and confess Him publicly, you are saved. It is also a verse that challenges nominal faith -- true belief always produces confession.',
    crossReferences: [
      { reference: 'Romans 10:13', text: 'For whosoever shall call upon the name of the Lord shall be saved.', link: '/bible/romans/10' },
      { reference: 'Acts 16:31', text: 'Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.', link: '/bible/acts/16' },
      { reference: 'John 3:16', text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.', link: '/bible/john/3' },
      { reference: '1 Corinthians 15:3-4', text: 'For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day.', link: '/bible/1-corinthians/15' }
    ],
    relatedVerses: ['john/3/16', 'ephesians/2/8', 'john/14/6', 'john/1/1']
  },

  // 10. Ephesians 2:8-9
  'ephesians/2/8': {
    bookSlug: 'ephesians',
    chapter: 2,
    verse: 8,
    reference: 'Ephesians 2:8-9',
    kjvText: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.',
    explanation: [
      'Ephesians 2:8-9 is the definitive statement of salvation by grace through faith. In two verses, Paul demolishes every system of human merit and establishes the gospel as a message of pure, undeserved gift. These verses have been central to Christian theology for two thousand years and were the rallying cry of the Protestant Reformation: sola gratia (grace alone), sola fide (faith alone).',
      '"By grace are ye saved" establishes the source of salvation: grace. Grace is God\'s unmerited favor -- His decision to show kindness and give salvation to people who deserve the opposite. Grace is not a reward for good behavior; it is a gift given in spite of bad behavior. Paul has just described the human condition in the preceding verses: "dead in trespasses and sins" (Ephesians 2:1), "children of wrath" (2:3). Dead people cannot earn anything. Children of wrath deserve only judgment. Yet God, "who is rich in mercy, for his great love wherewith he loved us" (2:4), made us alive together with Christ.',
      '"Through faith" identifies the instrument by which grace is received. Faith is not a work; it is the empty hand that receives God\'s gift. It is trust, reliance, dependence on Christ alone for salvation. Paul then emphasizes: "and that not of yourselves: it is the gift of God." Even faith itself is a gift -- God does not merely make salvation available and then wait to see if anyone will muster the ability to believe. He provides both the gift (salvation) and the capacity to receive it (faith).',
      '"Not of works, lest any man should boast" explains why grace must be the foundation. If salvation could be earned, even partially, by human effort, then human beings would have reason to boast before God. The entire point of the gospel is that boasting is excluded (Romans 3:27). No one will stand before God in eternity and say, "I deserve to be here because of what I did." Every redeemed person will say, "I am here because of what God did for me in Christ." This is the glory of the gospel: it gives all credit to God and leaves none for human pride.'
    ],
    context: 'Paul writes to the church in Ephesus, a congregation composed of both Jewish and Gentile believers. In chapters 1-3, he lays out the theological foundation of the Christian life. Ephesians 2:1-10 describes the movement from spiritual death to spiritual life, with verses 8-9 serving as the theological summit: salvation is entirely by grace through faith.',
    originalLanguage: 'The Greek "charis" (grace) means favor freely bestowed, unmerited kindness. "Pistis" (faith) means trust, reliance, confident dependence. "Doron" (gift) emphasizes that salvation is not compensation for effort but a present freely given. "Kauchaomai" (boast) means to glory in, to take credit for.',
    application: 'These verses free believers from the exhausting treadmill of trying to earn God\'s favor. Salvation is a gift to be received, not a wage to be earned. This truth produces both humility (we did nothing to deserve it) and assurance (it does not depend on our performance). It also shapes how we share the gospel: the message is not "try harder" but "trust Christ."',
    crossReferences: [
      { reference: 'Romans 3:23-24', text: 'For all have sinned, and come short of the glory of God; Being justified freely by his grace through the redemption that is in Christ Jesus.', link: '/bible/romans/3' },
      { reference: 'Titus 3:5', text: 'Not by works of righteousness which we have done, but according to his mercy he saved us.', link: '/bible/titus/3' },
      { reference: 'Romans 6:23', text: 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.', link: '/bible/romans/6' },
      { reference: 'Galatians 2:16', text: 'Knowing that a man is not justified by the works of the law, but by the faith of Jesus Christ.', link: '/bible/galatians/2' }
    ],
    relatedVerses: ['john/3/16', 'romans/10/9', 'john/14/6', 'romans/8/28']
  },

  // 11. Galatians 5:22-23
  'galatians/5/22': {
    bookSlug: 'galatians',
    chapter: 5,
    verse: 22,
    reference: 'Galatians 5:22-23',
    kjvText: 'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, Meekness, temperance: against such there is no law.',
    explanation: [
      'Galatians 5:22-23 describes the character that the Holy Spirit produces in the life of every believer. Paul calls these qualities "the fruit of the Spirit" -- singular, not plural. This is significant: these are not nine separate fruits that a believer can pick and choose from. They are one unified fruit with nine expressions, like a cluster of grapes. Where the Spirit is genuinely at work, all nine qualities will be present in increasing measure.',
      'The list begins with love -- the foundation of all other qualities. Joy is love celebrating. Peace is love resting. Longsuffering (patience) is love enduring. Gentleness (kindness) is love acting. Goodness is love giving. Faith (faithfulness) is love keeping its promises. Meekness is love submitting. Temperance (self-control) is love disciplining itself. Every quality flows from and is an expression of the agape love that the Spirit pours into believers\' hearts.',
      'Paul contrasts this fruit with "the works of the flesh" listed in the preceding verses (5:19-21): sexual immorality, idolatry, hatred, strife, jealousy, outbursts of anger, and more. The contrast is deliberate. The flesh produces "works" -- things that sinful human nature generates through effort and self-indulgence. But the Spirit produces "fruit" -- something that grows naturally and organically when the right conditions are present. You do not produce fruit by straining; you produce it by abiding.',
      'The final phrase, "against such there is no law," is a touch of holy irony. The Galatian believers were being pressured to submit to the Jewish law as a means of spiritual growth. Paul says that the fruit the Spirit produces is so inherently good that no law could ever condemn it. The law says "do not murder" -- but a person full of love, joy, and peace has no desire to murder. The Spirit accomplishes what the law never could: genuine inner transformation that produces righteous behavior from the inside out.'
    ],
    context: 'Paul writes to the Galatian churches, which are being influenced by false teachers insisting that Gentile believers must follow the Mosaic law. In chapter 5, Paul argues that true freedom is not license to sin but empowerment to live by the Spirit. The fruit of the Spirit is the evidence of a Spirit-led life and the antithesis of fleshly behavior.',
    originalLanguage: 'The Greek "karpos" (fruit) is singular, indicating a unified cluster of qualities. "Agape" (love) is selfless, divine love. "Chara" (joy) is gladness independent of circumstances. "Eirene" (peace) is inner tranquility and right relationship. "Egkrateia" (temperance/self-control) means strength over one\'s desires.',
    application: 'The fruit of the Spirit is the measure of spiritual maturity -- not spiritual gifts, biblical knowledge, or ministry activity. Believers can evaluate their growth by asking: Am I becoming more loving? More patient? More self-controlled? These qualities are not produced by self-effort but by yielding to the Holy Spirit through prayer, Scripture, and obedience.',
    crossReferences: [
      { reference: 'John 15:4-5', text: 'Abide in me, and I in you. As the branch cannot bear fruit of itself, except it abide in the vine; no more can ye, except ye abide in me.', link: '/bible/john/15' },
      { reference: 'Romans 8:5', text: 'For they that are after the flesh do mind the things of the flesh; but they that are after the Spirit the things of the Spirit.', link: '/bible/romans/8' },
      { reference: 'Colossians 3:12-14', text: 'Put on therefore, as the elect of God, holy and beloved, bowels of mercies, kindness, humbleness of mind, meekness, longsuffering.', link: '/bible/colossians/3' },
      { reference: '2 Peter 1:5-8', text: 'And beside this, giving all diligence, add to your faith virtue; and to virtue knowledge; And to knowledge temperance.', link: '/bible/2-peter/1' }
    ],
    relatedVerses: ['john/3/16', '1-corinthians/13/4', 'romans/12/2', 'john/15/5']
  },

  // 12. Joshua 1:9
  'joshua/1/9': {
    bookSlug: 'joshua',
    chapter: 1,
    verse: 9,
    reference: 'Joshua 1:9',
    kjvText: 'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.',
    explanation: [
      'Joshua 1:9 is God\'s final charge to Joshua as he prepares to lead Israel into the Promised Land after the death of Moses. The question "Have not I commanded thee?" is not a request for information -- it is a divine reminder that courage is not optional for God\'s people. It is a command, backed by the authority of the God who gives it. God does not suggest that Joshua try to be brave; He orders it, because He knows that the source of courage is not Joshua\'s own temperament but God\'s unfailing presence.',
      '"Be strong and of a good courage" is repeated three times in this chapter (verses 6, 7, and 9), emphasizing its importance. The Hebrew words "chazaq" (strong) and "amats" (courageous) together describe both inner resolve and outward boldness. Joshua needed both: he was stepping into the enormous shoes of Moses, facing fortified cities and powerful enemies, and leading a nation that had a history of complaining and rebellion.',
      '"Be not afraid, neither be thou dismayed" addresses the two responses that would disqualify Joshua from leadership: fear (the dread of what might happen) and dismay (the paralysis that comes from being overwhelmed). God does not deny that there are real reasons to be afraid. The Canaanite armies were formidable, the Jordan River was at flood stage, and the task was humanly impossible. But God says, in effect, "The reasons for fear are real -- but I am more real."',
      'The promise that undergirds the command is magnificent: "for the LORD thy God is with thee whithersoever thou goest." God does not promise that the road will be easy or that every battle will be painless. He promises something infinitely better: His personal presence in every situation. The God who parted the Red Sea, who fed two million people in the wilderness, and who spoke from the top of Sinai would be personally present with Joshua wherever the mission took him. This same promise belongs to every believer through the indwelling Holy Spirit.'
    ],
    context: 'Moses has just died, and Joshua is now responsible for leading the nation of Israel across the Jordan River and into the Promised Land. God speaks directly to Joshua, commissioning him for the task and repeating the command to be strong and courageous three times. This verse is the final and most personal iteration of that command.',
    originalLanguage: 'The Hebrew "chazaq" (strong) means to be firm, to seize hold, to be resolute. "Amats" (courageous) means to be bold, to be alert, to be determined. "Arats" (afraid) means to tremble, to be in dread. "Chathat" (dismayed) means to be shattered, to be broken in spirit.',
    application: 'This verse speaks to every believer facing a daunting task, a new season of life, or a situation that feels overwhelming. God\'s command to be strong and courageous is not a call to fake confidence but to ground your confidence in His presence. Whatever you face today, the LORD your God goes with you.',
    crossReferences: [
      { reference: 'Deuteronomy 31:8', text: 'And the LORD, he it is that doth go before thee; he will be with thee, he will not fail thee, neither forsake thee: fear not, neither be dismayed.', link: '/bible/deuteronomy/31' },
      { reference: 'Isaiah 41:10', text: 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee.', link: '/bible/isaiah/41' },
      { reference: 'Matthew 28:20', text: 'Lo, I am with you alway, even unto the end of the world.', link: '/bible/matthew/28' },
      { reference: 'Psalm 27:1', text: 'The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?', link: '/bible/psalms/27' }
    ],
    relatedVerses: ['isaiah/41/10', '2-timothy/1/7', 'philippians/4/13', 'psalm/23/1']
  },

  // 13. Romans 12:2
  'romans/12/2': {
    bookSlug: 'romans',
    chapter: 12,
    verse: 2,
    reference: 'Romans 12:2',
    kjvText: 'And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.',
    explanation: [
      'Romans 12:2 is one of the most practical and transformative commands in the New Testament. Paul has spent eleven chapters laying the doctrinal foundation of the gospel -- sin, justification, sanctification, election, and God\'s faithfulness. Now, beginning in chapter 12, he turns to the practical implications: "In light of everything God has done for you, here is how you should live." This verse is the hinge between theology and practice.',
      '"Be not conformed to this world" is a command to resist the relentless pressure of the surrounding culture to shape us into its mold. The Greek word "suschematizo" (conformed) means to fashion oneself according to an external pattern. The "world" (aion) refers not to the physical planet but to the present age\'s system of values, priorities, and assumptions that operate apart from God. The world has a mold -- a way of thinking about success, identity, relationships, morality, and meaning -- and it constantly presses believers to fit into it.',
      '"But be ye transformed by the renewing of your mind" provides the alternative. The Greek word "metamorphoo" (transformed) is the word from which we get "metamorphosis" -- the radical change of a caterpillar into a butterfly. This is not external modification but internal revolution. And the instrument of transformation is the mind. What you think determines who you become. As believers saturate their minds with Scripture, prayer, and the truth of the gospel, their thinking is progressively renewed, and their lives are progressively transformed.',
      'The purpose of this transformation is "that ye may prove what is that good, and acceptable, and perfect, will of God." A renewed mind can discern God\'s will -- not merely in the sense of knowing what decisions to make, but in the sense of experiencing and demonstrating that God\'s way is genuinely good, genuinely pleasing, and genuinely complete. The transformed believer becomes living proof that God\'s will is not a burden to endure but a blessing to embrace.'
    ],
    context: 'Romans 12:1-2 marks the transition from the doctrinal section of Romans (chapters 1-11) to the practical section (chapters 12-16). Paul begins with "I beseech you therefore, brethren, by the mercies of God" -- the word "therefore" connects everything that follows to everything that preceded. Practical Christian living is the response to the mercies of God described in the first eleven chapters.',
    originalLanguage: 'The Greek "suschematizo" (conformed) means to be molded by an external pattern. "Metamorphoo" (transformed) means to be changed in form from within -- a deep, internal change. "Anakainosis" (renewing) means a complete renovation, making new again. The contrast is between external pressure and internal transformation.',
    application: 'This verse challenges believers to be intentional about what shapes their thinking. The content you consume, the voices you listen to, and the values you absorb will either conform you to the world or transform you by God\'s truth. Spiritual transformation begins in the mind -- through consistent engagement with Scripture, prayer, and Spirit-filled community.',
    crossReferences: [
      { reference: 'Colossians 3:2', text: 'Set your affection on things above, not on things on the earth.', link: '/bible/colossians/3' },
      { reference: 'Philippians 4:8', text: 'Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just... think on these things.', link: '/bible/philippians/4' },
      { reference: '2 Corinthians 3:18', text: 'But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory.', link: '/bible/2-corinthians/3' },
      { reference: 'Ephesians 4:23', text: 'And be renewed in the spirit of your mind.', link: '/bible/ephesians/4' }
    ],
    relatedVerses: ['galatians/5/22', 'proverbs/3/5', 'john/14/6', 'philippians/4/13']
  },

  // 14. John 1:1
  'john/1/1': {
    bookSlug: 'john',
    chapter: 1,
    verse: 1,
    reference: 'John 1:1',
    kjvText: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
    explanation: [
      'John 1:1 is one of the most theologically dense verses in the entire Bible. In a single sentence, the apostle John establishes three foundational truths about Jesus Christ that form the bedrock of Christian theology. The verse deliberately echoes the opening words of Genesis 1:1 ("In the beginning God created the heaven and the earth"), signaling that John\'s Gospel is telling the story of a new creation -- one that begins not with the spoken word of God but with the living Word of God.',
      '"In the beginning was the Word" -- the Greek word "Logos" (Word) was a term familiar to both Jewish and Greek audiences. For the Greeks, the Logos was the rational principle governing the universe. For the Jews, the Word of God was the agent of creation ("And God said, Let there be light"). John takes this concept and makes a staggering claim: the Logos is not a principle or a force -- He is a Person. And He already "was" (Greek: en, imperfect tense, indicating continuous existence) in the beginning. Before creation began, the Word already existed.',
      '"And the Word was with God" establishes distinction within the Godhead. The preposition "with" (Greek: pros) indicates a face-to-face relationship, an intimate communion. The Word is not identical to the Father; He is a distinct person who exists in eternal relationship with the Father. This is the foundation of the doctrine of the Trinity -- one God existing in three distinct persons.',
      '"And the Word was God" completes the theological revolution. The Word who is distinct from God is also fully God. Not a god, not godlike, not divine in some lesser sense -- but God in the fullest, most complete sense of the word. John 1:14 then delivers the punch line: "And the Word was made flesh, and dwelt among us." The eternal, divine Word became a human being. This is the incarnation -- the most astonishing event in the history of the universe. The God who created everything entered His own creation as a baby in Bethlehem.'
    ],
    context: 'John\'s Gospel begins not with the birth of Jesus (like Matthew and Luke) or His baptism (like Mark), but with eternity past. John establishes the divine nature of Christ before describing any events of His earthly life. This prologue (John 1:1-18) serves as the theological lens through which the entire Gospel should be read.',
    originalLanguage: 'The Greek "Logos" (Word) means word, reason, expression -- the outward expression of an inward thought. "En" (was) is the imperfect tense, indicating continuous past existence without a beginning. "Pros" (with) implies intimate, face-to-face relationship. The word order in Greek emphasizes "God" in the final clause: "and God was the Word."',
    application: 'This verse settles the most important question any person can ask: Who is Jesus? He is not merely a teacher, a prophet, or a good man. He is the eternal God who became flesh to reveal the Father and redeem humanity. How you respond to this truth determines everything.',
    crossReferences: [
      { reference: 'Genesis 1:1', text: 'In the beginning God created the heaven and the earth.', link: '/bible/genesis/1' },
      { reference: 'John 1:14', text: 'And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.', link: '/bible/john/1' },
      { reference: 'Colossians 1:15-17', text: 'Who is the image of the invisible God, the firstborn of every creature: For by him were all things created.', link: '/bible/colossians/1' },
      { reference: 'Hebrews 1:1-3', text: 'God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets, Hath in these last days spoken unto us by his Son.', link: '/bible/hebrews/1' }
    ],
    relatedVerses: ['john/3/16', 'john/14/6', 'genesis/1/1', 'hebrews/11/1']
  },

  // 15. Matthew 11:28
  'matthew/11/28': {
    bookSlug: 'matthew',
    chapter: 11,
    verse: 28,
    reference: 'Matthew 11:28-30',
    kjvText: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
    explanation: [
      'Matthew 11:28 is one of the most tender and inviting statements Jesus ever made. He issues a universal invitation -- "Come unto me, all ye" -- that extends to every human being who is weary and burdened. The word "all" is deliberately inclusive: Jesus does not limit this invitation to the religious, the educated, the morally upright, or any other category. It is open to everyone who recognizes their need.',
      'The people Jesus addresses are described as those who "labour and are heavy laden." The Greek word "kopiao" (labour) means to toil to the point of exhaustion. "Phortizo" (heavy laden) means to be loaded down with a crushing weight. In the original context, Jesus was likely addressing the burden of religious legalism -- the Pharisees had created an elaborate system of rules and regulations that crushed people under the weight of impossible standards. But the application extends far beyond first-century Judaism: anyone who is exhausted from trying to earn God\'s favor, worn out from carrying guilt and shame, or crushed under the weight of life\'s pressures is invited to come.',
      'The promise is breathtaking: "I will give you rest." The Greek word "anapauo" means to refresh, to give intermission, to cause to cease from labor. Jesus does not say, "I will give you a program," or "I will give you more rules to follow." He says, "I will give you rest." Rest is a gift, not a reward. It cannot be earned; it can only be received. This rest encompasses spiritual peace (reconciliation with God), emotional relief (freedom from guilt and anxiety), and ultimate hope (the promise of eternal rest).',
      'Verses 29-30 expand the invitation: "Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls. For my yoke is easy, and my burden is light." A yoke is an instrument of labor -- Jesus is not promising inactivity but a different kind of work. His yoke fits properly because it is designed by a gentle, humble Master. The religious leaders imposed heavy burdens they themselves would not carry (Matthew 23:4); Jesus carries the weight alongside His followers and makes the burden bearable.'
    ],
    context: 'Jesus speaks these words after denouncing the cities that rejected His miracles and after praising the Father for revealing truth to the humble rather than the wise. In this context of rejection and revelation, Jesus turns and issues an open invitation to all who are weary. It is a moment of extraordinary tenderness in the middle of increasing opposition.',
    originalLanguage: 'The Greek "kopiao" (labour) means to grow weary through toil. "Phortizo" (heavy laden) means to be loaded with a burden. "Anapauo" (rest) means to cause to cease, to refresh, to give relief. "Zugos" (yoke) was a wooden frame joining two animals for work -- metaphorically, it represented a teacher\'s instruction.',
    application: 'This verse is an invitation to stop striving and start trusting. If you are exhausted from trying to be good enough for God, weary from carrying burdens you were never meant to bear, or crushed under the weight of guilt, shame, or anxiety, Jesus invites you to come to Him -- not to work harder, but to find rest.',
    crossReferences: [
      { reference: 'Psalm 55:22', text: 'Cast thy burden upon the LORD, and he shall sustain thee: he shall never suffer the righteous to be moved.', link: '/bible/psalms/55' },
      { reference: '1 Peter 5:7', text: 'Casting all your care upon him; for he careth for you.', link: '/bible/1-peter/5' },
      { reference: 'Hebrews 4:9-10', text: 'There remaineth therefore a rest to the people of God. For he that is entered into his rest, he also hath ceased from his own works, as God did from his.', link: '/bible/hebrews/4' },
      { reference: 'Isaiah 40:31', text: 'But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles.', link: '/bible/isaiah/40' }
    ],
    relatedVerses: ['john/3/16', 'psalm/23/1', 'philippians/4/13', 'isaiah/41/10']
  },

  // 16. Psalm 46:10
  'psalms/46/10': {
    bookSlug: 'psalms',
    chapter: 46,
    verse: 10,
    reference: 'Psalm 46:10',
    kjvText: 'Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.',
    explanation: [
      'Psalm 46:10 is God\'s command to a world in turmoil. The context of the psalm describes catastrophic upheaval: mountains shaking, waters roaring, nations raging, kingdoms tottering. In the middle of this chaos, God speaks with absolute calm: "Be still, and know that I am God." The command is not a gentle suggestion for personal meditation (though it certainly applies); it is a sovereign decree to all creation to cease striving and recognize His supremacy.',
      'The Hebrew word "raphah" (be still) means to let go, to cease, to relax one\'s grip. It carries the sense of releasing something you have been holding onto tightly -- whether that is control, anxiety, self-sufficiency, or resistance to God. In the context of the psalm, it is addressed to the warring nations: "Stop fighting and acknowledge who I am." But for the individual believer, it is equally powerful: stop striving in your own strength and recognize that God is in control.',
      '"And know that I am God" is the reason for stillness. The Hebrew word "yada" (know) means to know by experience, to recognize, to acknowledge. This is not intellectual assent but experiential awareness. When you truly know that the sovereign Creator of the universe is God -- not your circumstances, not your enemies, not your fears, not your own abilities -- stillness becomes possible. You can stop fighting because the battle belongs to the Lord.',
      'The verse concludes with a declaration of God\'s ultimate triumph: "I will be exalted among the heathen, I will be exalted in the earth." Regardless of what is happening in the present moment -- however chaotic, threatening, or seemingly hopeless -- God\'s exaltation is certain. History is moving toward a predetermined conclusion in which every knee will bow and every tongue will confess that God is Lord. The believer who grasps this truth can face the storms of life with a peace that the world cannot understand.'
    ],
    context: 'Psalm 46 is a psalm of confidence in God\'s protection during times of crisis. It may have been written during a specific historical threat to Jerusalem. The psalm describes God as "our refuge and strength, a very present help in trouble" (v. 1) and paints vivid pictures of cosmic and political upheaval. Verse 10 is God\'s voice breaking through the chaos with a command and a promise.',
    originalLanguage: 'The Hebrew "raphah" (be still) means to sink, to relax, to let drop, to let go. It implies releasing one\'s grip on whatever is being clutched in anxiety or resistance. "Yada" (know) means to know intimately, to perceive, to experience directly.',
    application: 'In a culture of constant noise, activity, and anxiety, this verse calls believers to intentional stillness before God. This is not passive resignation but active trust -- choosing to release control and acknowledge God\'s sovereignty. It is a verse for the anxious heart, the overwhelmed mind, and the person trying to carry burdens that belong to God.',
    crossReferences: [
      { reference: 'Exodus 14:14', text: 'The LORD shall fight for you, and ye shall hold your peace.', link: '/bible/exodus/14' },
      { reference: 'Isaiah 30:15', text: 'In returning and rest shall ye be saved; in quietness and in confidence shall be your strength.', link: '/bible/isaiah/30' },
      { reference: 'Psalm 46:1', text: 'God is our refuge and strength, a very present help in trouble.', link: '/bible/psalms/46' },
      { reference: 'Philippians 4:6-7', text: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.', link: '/bible/philippians/4' }
    ],
    relatedVerses: ['isaiah/41/10', 'psalm/23/1', 'proverbs/3/5', 'matthew/11/28']
  },

  // 17. John 11:25
  'john/11/25': {
    bookSlug: 'john',
    chapter: 11,
    verse: 25,
    reference: 'John 11:25-26',
    kjvText: 'Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live: And whosoever liveth and believeth in me shall never die.',
    explanation: [
      'John 11:25-26 contains one of the most staggering claims Jesus ever made. Standing before the grieving Martha, whose brother Lazarus has been dead for four days, Jesus does not simply promise that resurrection will happen someday. He says, "I am the resurrection, and the life." He does not merely have power over death; He is the power over death. Resurrection is not just an event He will cause -- it is a reality embodied in His own person.',
      'Martha had expressed faith in the general resurrection: "I know that he shall rise again in the resurrection at the last day" (John 11:24). This was standard Pharisaic theology. But Jesus takes her from abstract doctrine to personal encounter: the resurrection she believes in theoretically is standing right in front of her. The power that will raise all the dead at the end of time is present in the living room, weeping with her.',
      '"He that believeth in me, though he were dead, yet shall he live" promises physical resurrection. Even death cannot hold those who belong to Christ. The grave is not the end but a doorway. "And whosoever liveth and believeth in me shall never die" promises spiritual immortality. The believer possesses eternal life right now -- a quality of life that physical death cannot interrupt or terminate. Death for the Christian is not extinction but transition.',
      'Within minutes of making this declaration, Jesus demonstrates its truth by raising Lazarus from the tomb. But Lazarus\'s resurrection was only a preview. The ultimate proof came when Jesus Himself rose from the dead on the third day after His crucifixion. Because He lives, everyone who believes in Him will live also. This is the Christian hope that transforms grief: death has been swallowed up in victory (1 Corinthians 15:54), and the one who holds the keys of death and hell (Revelation 1:18) promises that those who trust Him will share in His resurrection.'
    ],
    context: 'Jesus arrives in Bethany after Lazarus, the brother of Mary and Martha, has been dead for four days. Martha goes out to meet Him and expresses her belief that Lazarus would not have died if Jesus had been there. In response, Jesus makes this declaration about His identity and then proceeds to raise Lazarus from the dead -- a miracle that foreshadows His own resurrection.',
    originalLanguage: 'The Greek "anastasis" (resurrection) means a rising up, a standing again. "Zoe" (life) refers to divine, eternal life. The present tense "I am" (ego eimi) identifies Jesus with the divine name revealed to Moses at the burning bush, claiming eternal, self-existent deity.',
    application: 'This verse transforms how believers face death -- both their own and the deaths of loved ones. Grief is real and appropriate, but it is grief with hope. Jesus does not merely comfort the bereaved by promising a future event; He offers Himself as the present reality of resurrection and life. To know Him is to possess eternal life now.',
    crossReferences: [
      { reference: 'John 5:24', text: 'He that heareth my word, and believeth on him that sent me, hath everlasting life, and shall not come into condemnation; but is passed from death unto life.', link: '/bible/john/5' },
      { reference: '1 Corinthians 15:55-57', text: 'O death, where is thy sting? O grave, where is thy victory? ... But thanks be to God, which giveth us the victory through our Lord Jesus Christ.', link: '/bible/1-corinthians/15' },
      { reference: 'Revelation 1:18', text: 'I am he that liveth, and was dead; and, behold, I am alive for evermore, Amen; and have the keys of hell and of death.', link: '/bible/revelation/1' },
      { reference: 'Romans 6:9', text: 'Knowing that Christ being raised from the dead dieth no more; death hath no more dominion over him.', link: '/bible/romans/6' }
    ],
    relatedVerses: ['john/3/16', 'john/14/6', 'john/1/1', 'romans/10/9']
  },

  // 18. John 15:5
  'john/15/5': {
    bookSlug: 'john',
    chapter: 15,
    verse: 5,
    reference: 'John 15:5',
    kjvText: 'I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.',
    explanation: [
      'John 15:5 is the heart of Jesus\' "vine and branches" discourse, delivered on the night before His crucifixion. Using the vivid agricultural metaphor of a grapevine, Jesus describes the essential nature of the believer\'s relationship with Him. He is the vine -- the source of life, nourishment, and fruit-bearing capacity. Believers are the branches -- dependent on the vine for everything. The relationship is one of total, organic dependence.',
      '"He that abideth in me, and I in him, the same bringeth forth much fruit." The word "abide" (Greek: meno) means to remain, to dwell, to stay connected. It is not a one-time decision but an ongoing posture of dependence. A branch does not produce fruit by trying harder or by its own effort; it produces fruit by staying connected to the vine and allowing the vine\'s life to flow through it. In the same way, spiritual fruit in the Christian life is not the product of human effort but the natural result of remaining in Christ.',
      'The promise is that abiding produces "much fruit" -- not a little fruit, not occasional fruit, but abundant fruit. This fruit includes the fruit of the Spirit (Galatians 5:22-23), the fruit of righteous character, the fruit of effective ministry, and the fruit of people coming to faith in Christ. All of this flows from one source: intimate, dependent connection with Jesus.',
      'The final phrase is the most sobering statement in the verse: "for without me ye can do nothing." Not "without me ye can do a little" or "without me ye can do less." Nothing. Zero. This is not an insult to human ability; it is a statement about the nature of spiritual reality. Apart from Christ, human beings can accomplish many impressive things in worldly terms, but they can produce nothing of eternal spiritual value. Every act of genuine love, every moment of true worship, every victory over sin, every soul brought to faith -- all of it flows from Christ through the believer, not from the believer independently.'
    ],
    context: 'Jesus speaks these words during the Last Supper discourse (John 13-17), His most intimate and extended teaching to the disciples before the cross. The vine metaphor may have been prompted by the cup of wine at the Passover meal or by the golden vine decorating the temple. In the Old Testament, Israel was God\'s vine (Isaiah 5:1-7), but it failed to produce fruit. Jesus declares Himself to be the true vine who will succeed where Israel failed.',
    originalLanguage: 'The Greek "meno" (abide) means to remain, to continue, to dwell -- the idea of making one\'s home in a place. "Karpos" (fruit) means the natural product of life -- what grows organically from a living connection. "Choris" (without) means apart from, separated from.',
    application: 'This verse redefines success in the Christian life. It is not about doing more for God but about staying connected to God. The busiest, most active Christian who is not abiding in Christ produces nothing of eternal value, while the simplest believer who remains in Christ bears much fruit. It is an invitation to prioritize relationship over activity.',
    crossReferences: [
      { reference: 'Galatians 5:22-23', text: 'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, Meekness, temperance.', link: '/bible/galatians/5' },
      { reference: 'Colossians 1:10', text: 'That ye might walk worthy of the Lord unto all pleasing, being fruitful in every good work, and increasing in the knowledge of God.', link: '/bible/colossians/1' },
      { reference: 'John 15:4', text: 'Abide in me, and I in you. As the branch cannot bear fruit of itself, except it abide in the vine; no more can ye, except ye abide in me.', link: '/bible/john/15' },
      { reference: '2 Corinthians 3:5', text: 'Not that we are sufficient of ourselves to think any thing as of ourselves; but our sufficiency is of God.', link: '/bible/2-corinthians/3' }
    ],
    relatedVerses: ['galatians/5/22', 'philippians/4/13', 'john/14/6', 'john/3/16']
  },

  // 19. Matthew 28:19-20
  'matthew/28/19': {
    bookSlug: 'matthew',
    chapter: 28,
    verse: 19,
    reference: 'Matthew 28:19-20',
    kjvText: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world.',
    explanation: [
      'Matthew 28:19-20, known as the Great Commission, contains the final instructions Jesus gave to His disciples before ascending to heaven. These words are not merely historical; they constitute the standing orders for the church in every age. The command is preceded by the most sweeping claim of authority ever made: "All power is given unto me in heaven and in earth" (Matthew 28:18). It is on the basis of this total authority that Jesus commissions His followers to go into all the world.',
      'The central command is "teach all nations" -- or more literally, "make disciples of all nations" (Greek: matheteusate panta ta ethne). A disciple is not merely a convert who prays a prayer but a learner and follower who is being progressively conformed to the image of Christ. The scope is "all nations" (panta ta ethne) -- every people group, every ethnicity, every language, every culture. The gospel is not the property of any single civilization; it is God\'s message for the entire human race.',
      'Two participles describe how disciples are made: "baptizing them" and "teaching them to observe all things whatsoever I have commanded you." Baptism is the public identification of a new believer with Christ -- dying to the old life and rising to the new. Teaching is the ongoing process of instruction and obedience that shapes a disciple over a lifetime. Note that Jesus commands teaching obedience, not merely knowledge. The goal is not well-informed Christians but transformed ones.',
      'The Trinitarian baptismal formula -- "in the name of the Father, and of the Son, and of the Holy Ghost" -- is one of the clearest Trinitarian statements in Scripture. Jesus places Himself on equal footing with the Father and the Spirit, sharing one "name" (singular) among three persons. The Great Commission closes with a promise: "I am with you alway, even unto the end of the world." Jesus will not send His disciples out and abandon them. His presence accompanies the mission until it is complete.'
    ],
    context: 'After His resurrection, Jesus appears to the eleven disciples on a mountain in Galilee. This is His final commission before His ascension. It is the culmination of Matthew\'s Gospel: the King who was born in Bethlehem, ministered in Galilee, died in Jerusalem, and rose from the grave now sends His followers to extend His kingdom to the ends of the earth.',
    originalLanguage: 'The Greek "matheteuo" (teach/make disciples) is the main verb and central command -- go, baptize, and teach are participles that describe how disciple-making happens. The singular "onoma" (name) used for three persons (Father, Son, Holy Spirit) points to the unity of the divine nature shared by all three.',
    application: 'The Great Commission is not an option for a select group of professional missionaries; it is the standing order for every follower of Christ. Every believer is called to participate in making disciples -- through sharing the gospel, baptizing new believers, and teaching them to obey Christ -- wherever God has placed them.',
    crossReferences: [
      { reference: 'Acts 1:8', text: 'But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.', link: '/bible/acts/1' },
      { reference: 'Mark 16:15', text: 'And he said unto them, Go ye into all the world, and preach the gospel to every creature.', link: '/bible/mark/16' },
      { reference: 'Romans 10:14', text: 'How then shall they call on him in whom they have not believed? and how shall they believe in him of whom they have not heard? and how shall they hear without a preacher?', link: '/bible/romans/10' },
      { reference: '2 Timothy 2:2', text: 'And the things that thou hast heard of me among many witnesses, the same commit thou to faithful men, who shall be able to teach others also.', link: '/bible/2-timothy/2' }
    ],
    relatedVerses: ['john/3/16', 'romans/10/9', 'john/14/6', 'john/16/33']
  },

  // 20. 2 Timothy 1:7
  '2-timothy/1/7': {
    bookSlug: '2-timothy',
    chapter: 1,
    verse: 7,
    reference: '2 Timothy 1:7',
    kjvText: 'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.',
    explanation: [
      'Second Timothy 1:7 is Paul\'s definitive statement about the nature of the Spirit God has given to every believer. Writing from a Roman prison, likely facing execution, Paul addresses his young protege Timothy, who appears to be struggling with timidity and fear in the face of mounting persecution. Paul reminds him -- and every Christian -- that fear is not part of God\'s equipment for His people. The spirit of fear does not come from God; it is foreign to the nature of the Holy Spirit who dwells within believers.',
      'In place of fear, God has given three powerful gifts. First, "power" (Greek: dunamis) -- the same word from which we derive "dynamite." This is not human willpower or self-confidence but the supernatural enabling of the Holy Spirit. It is the power to preach boldly, to endure suffering, to resist temptation, and to live in a manner that transcends natural human ability. Second, "love" (agape) -- the selfless, sacrificial love that prioritizes others over self and obeys God regardless of cost. Love casts out fear (1 John 4:18) because it reorients the believer\'s focus away from self-preservation toward God\'s purposes and others\' needs.',
      'Third, God gives "a sound mind" (Greek: sophronismos) -- a term that means self-discipline, self-control, and wise judgment. This is the opposite of the panic and irrationality that fear produces. When fear grips the mind, thinking becomes distorted, decisions become rash, and spiritual clarity evaporates. The Spirit of God produces mental clarity, balanced judgment, and the ability to think and act wisely even under extreme pressure. Together, these three gifts -- power, love, and a sound mind -- equip the believer to face any circumstance with courage and effectiveness.',
      'Paul\'s message is especially powerful given his circumstances. He writes from prison, awaiting possible execution, yet he is not the one paralyzed by fear. The man in chains is encouraging the man who is free. This demonstrates that the spirit of power, love, and sound mind is not dependent on favorable circumstances. Paul possesses it in a dungeon, and Timothy can possess it in Ephesus, because the source is not their situation but the indwelling Holy Spirit who transcends every external circumstance.'
    ],
    context: 'Paul writes his second letter to Timothy from prison in Rome during Nero\'s persecution of Christians. Timothy is pastoring the church in Ephesus and facing opposition. Paul encourages him not to be ashamed of the gospel or of Paul\'s imprisonment, reminding him of the spiritual resources God has provided through the Holy Spirit.',
    originalLanguage: 'The Greek "deilia" (fear) specifically means cowardice or timidity -- a shrinking back from duty or danger. "Dunamis" (power) refers to inherent ability and supernatural strength. "Sophronismos" (sound mind) means self-discipline, prudence, and the ability to think clearly under pressure.',
    application: 'When believers feel paralyzed by fear, anxiety, or timidity, this verse reminds them that those feelings do not come from God. They can actively rely on the Holy Spirit to provide supernatural power, outward-focused love, and clear-headed wisdom in any situation that provokes fear.',
    crossReferences: [
      { reference: 'Isaiah 41:10', text: 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.', link: '/bible/isaiah/41' },
      { reference: '1 John 4:18', text: 'There is no fear in love; but perfect love casteth out fear: because fear hath torment. He that feareth is not made perfect in love.', link: '/bible/1-john/4' },
      { reference: 'Romans 8:15', text: 'For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father.', link: '/bible/romans/8' },
      { reference: 'Acts 1:8', text: 'But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.', link: '/bible/acts/1' }
    ],
    relatedVerses: ['isaiah/41/10', 'joshua/1/9', 'philippians/4/13', 'psalms/46/10']
  },

  // 21. Hebrews 11:1
  'hebrews/11/1': {
    bookSlug: 'hebrews',
    chapter: 11,
    verse: 1,
    reference: 'Hebrews 11:1',
    kjvText: 'Now faith is the substance of things hoped for, the evidence of things not seen.',
    explanation: [
      'Hebrews 11:1 provides the Bible\'s own definition of faith, and it is far more robust than many people assume. Faith is not wishful thinking, blind optimism, or a leap into the dark. It is "the substance of things hoped for" -- the Greek word "hupostasis" (substance) means a foundation, a firm ground, an underlying reality. Faith is the solid foundation upon which the believer stands while waiting for promises not yet fulfilled. It gives present reality to future hope.',
      'The second phrase, "the evidence of things not seen," adds another dimension. The Greek word "elegchos" (evidence) is a legal term meaning proof, conviction, or demonstration. Faith functions as evidence -- it is the means by which unseen realities become as certain to the believer as visible, tangible things. Faith does not create these realities; it perceives and lays hold of realities that already exist in the purposes and promises of God. The unseen world is not less real than the seen world; faith simply grants access to it.',
      'The rest of Hebrews 11 illustrates this definition through a roll call of Old Testament saints who lived by faith: Abel, Enoch, Noah, Abraham, Sarah, Moses, Rahab, and many others. Each one acted on the basis of God\'s promises before those promises were visibly fulfilled. Abraham left his homeland for a country he had never seen. Moses forsook Egypt\'s treasures for a reward he could not yet touch. They all died "not having received the promises, but having seen them afar off" (Hebrews 11:13). Their faith was not disappointed; it was vindicated -- because the promises they trusted pointed ultimately to Christ.',
      'For the Christian, faith is not faith in faith -- it is faith in the character and promises of God as revealed in Jesus Christ. The substance beneath our hope is the resurrection of Christ. The evidence of things unseen is the indwelling Holy Spirit. Faith is reasonable because it is grounded in a God who has proven Himself faithful throughout history, most decisively at the cross and the empty tomb. Hebrews 11:1 calls believers to live with the same conviction that animated the heroes of old: trusting God\'s word even when circumstances offer no visible confirmation.'
    ],
    context: 'Hebrews 11 is often called "the Hall of Faith." The author has just warned against shrinking back in the face of persecution (Hebrews 10:35-39) and now defines what faith looks like by providing both a theological definition (verse 1) and a series of historical examples (verses 2-40). The chapter demonstrates that faith has always been the means by which God\'s people have related to Him.',
    originalLanguage: 'The Greek "hupostasis" (substance) literally means "that which stands under" -- a foundation or assurance. "Elegchos" (evidence) means proof, conviction, or inner certainty. Together these words present faith as objective confidence in divine realities, not subjective feelings.',
    application: 'This verse challenges believers to examine the foundation of their confidence. Biblical faith is not a vague feeling of positivity but a settled assurance grounded in God\'s character and promises. It enables believers to make decisions, endure suffering, and live with purpose even when the outcome is not yet visible.',
    crossReferences: [
      { reference: '2 Corinthians 5:7', text: '(For we walk by faith, not by sight:)', link: '/bible/2-corinthians/5' },
      { reference: 'Romans 8:24-25', text: 'For we are saved by hope: but hope that is seen is not hope: for what a man seeth, why doth he yet hope for? But if we hope for that which we see not, then do we with patience wait for it.', link: '/bible/romans/8' },
      { reference: 'Hebrews 11:6', text: 'But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.', link: '/bible/hebrews/11' },
      { reference: '1 Peter 1:8', text: 'Whom having not seen, ye love; in whom, though now ye see him not, yet believing, ye rejoice with joy unspeakable and full of glory:', link: '/bible/1-peter/1' }
    ],
    relatedVerses: ['romans/10/9', 'ephesians/2/8', 'proverbs/3/5', 'john/1/1']
  },

  // 22. Genesis 1:1
  'genesis/1/1': {
    bookSlug: 'genesis',
    chapter: 1,
    verse: 1,
    reference: 'Genesis 1:1',
    kjvText: 'In the beginning God created the heaven and the earth.',
    explanation: [
      'Genesis 1:1 is the foundation upon which the entire Bible rests. In ten English words (seven in Hebrew), Moses establishes the most fundamental truths of reality: God exists, He is the Creator, and everything that exists apart from Him owes its existence to His creative act. This verse answers the most basic question of human existence -- "Where did everything come from?" -- with a simple, majestic declaration: God made it.',
      'The verse assumes rather than argues for the existence of God. The Bible does not begin with philosophical proofs or logical arguments; it begins with a statement of fact. "In the beginning God" -- before anything else existed, God was already there. He is not a product of the universe; the universe is a product of His will. The Hebrew word "Elohim" (God) is plural in form yet takes a singular verb ("bara" -- created), hinting at the plurality within the unity of God that the New Testament reveals as the Trinity.',
      'The word "created" (Hebrew: "bara") is a verb used exclusively of God in the Old Testament. Human beings can make, form, fashion, and build, but only God "bara" -- bringing something into existence by His sovereign will and power. This word points to creation out of nothing (ex nihilo). Before God created, there was no pre-existing material, no cosmic raw substance, no primordial chaos. There was only God, and by His word He spoke all things into being.',
      'John 1:1-3 reveals that the agent of this creation was the Word -- Jesus Christ: "All things were made by him; and without him was not any thing made that was made." The opening of Genesis and the opening of John\'s Gospel are deliberately parallel. The God who created the heavens and the earth is the same God who became flesh and dwelt among us. The one who spoke light into existence entered the darkness of a fallen world to be the Light of the world. Genesis 1:1 is not merely the beginning of an ancient text; it is the first chapter of the story that culminates in the person and work of Jesus Christ.'
    ],
    context: 'Genesis 1:1 opens the Torah, the Pentateuch, and the entire Bible. It introduces the creation account that spans Genesis 1-2, describing how God brought the universe into being over six days and rested on the seventh. This verse sets the stage for all of Scripture by establishing God as the sovereign Creator and the source of all that exists.',
    originalLanguage: 'The Hebrew "bereshith" (in the beginning) marks an absolute starting point. "Elohim" (God) is a plural noun with a singular verb, suggesting both majesty and complexity within the divine nature. "Bara" (created) is a verb reserved exclusively for God\'s creative activity, implying creation from nothing.',
    application: 'If God is the Creator of all things, then He has authority over all things -- including your life. This verse establishes the foundation for worship, trust, and obedience: the God who spoke galaxies into existence is the same God who knows you, loves you, and holds your life in His hands.',
    crossReferences: [
      { reference: 'John 1:1-3', text: 'In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made by him; and without him was not any thing made that was made.', link: '/bible/john/1' },
      { reference: 'Psalm 33:6', text: 'By the word of the LORD were the heavens made; and all the host of them by the breath of his mouth.', link: '/bible/psalms/33' },
      { reference: 'Hebrews 11:3', text: 'Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which do appear.', link: '/bible/hebrews/11' },
      { reference: 'Colossians 1:16', text: 'For by him were all things created, that are in heaven, and that are in earth, visible and invisible, whether they be thrones, or dominions, or principalities, or powers: all things were created by him, and for him:', link: '/bible/colossians/1' }
    ],
    relatedVerses: ['john/1/1', 'psalms/139/14', 'hebrews/11/1', 'john/3/16']
  },

  // 23. Psalm 139:14
  'psalms/139/14': {
    bookSlug: 'psalms',
    chapter: 139,
    verse: 14,
    reference: 'Psalm 139:14',
    kjvText: 'I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well.',
    explanation: [
      'Psalm 139:14 is David\'s response of worship to the breathtaking truth that God personally and intentionally formed him. The phrase "fearfully and wonderfully made" expresses two complementary ideas. "Fearfully" means that the process of human creation is so awe-inspiring, so far beyond human comprehension, that it provokes a holy reverence. "Wonderfully" means that the result is extraordinary, set apart, and distinct. Every human being is not a random accident of nature but a deliberate masterpiece of the Creator.',
      'The surrounding verses (Psalm 139:13-16) paint a vivid picture of God\'s intimate involvement in the formation of every person. "Thou hast covered me in my mother\'s womb" (v. 13) -- God was actively at work knitting together the intricacies of the human body long before birth. "My substance, yet being unperfect" (v. 16) -- God saw and knew every person while they were still being formed, and all their days were written in His book before they lived a single one. Human life is not an afterthought; it is the foremost thought of a purposeful Creator.',
      'David\'s declaration "that my soul knoweth right well" indicates that this is not mere intellectual agreement but deep, personal conviction. David has reflected on the miracle of his own existence and arrived at an unshakable conclusion: God\'s works are marvelous, and he himself is the evidence. This kind of self-awareness -- understanding yourself as God\'s handiwork -- is the foundation of a healthy identity. Human worth is not determined by appearance, achievement, or the opinions of others but by the fact that God Himself is the designer and maker.',
      'This verse ultimately points to the incarnation of Christ. If every human being is fearfully and wonderfully made, how much more significant is the moment when the Creator Himself took on human flesh? In Jesus, the one who "covered" David in the womb was Himself "covered" in human nature. God, who marveled at His own creation, became part of that creation to redeem it. The dignity of every human life is forever confirmed by the fact that God considered humanity worth not only creating but saving -- at the cost of His own Son.'
    ],
    context: 'Psalm 139 is one of the most personal and intimate psalms in the Bible. David reflects on four aspects of God\'s relationship to him: God\'s omniscience (vv. 1-6), omnipresence (vv. 7-12), creative power (vv. 13-16), and righteous judgment (vv. 17-24). Verse 14 falls in the section on God as Creator, where David marvels at the divine craftsmanship displayed in his own body.',
    originalLanguage: 'The Hebrew "yare" (fearfully) means with reverence, awe, and wonder. "Palah" (wonderfully) means to be distinct, to be separated out, to be extraordinary. Together they describe a creation that is both awe-inspiring in its complexity and unique in its design.',
    application: 'In a world that constantly measures human worth by external standards, this verse grounds identity in the unchanging truth that every person is deliberately designed by God. It speaks powerfully against shame, self-hatred, and the lie that any human life is worthless or accidental.',
    crossReferences: [
      { reference: 'Genesis 1:27', text: 'So God created man in his own image, in the image of God created he him; male and female created he them.', link: '/bible/genesis/1' },
      { reference: 'Ephesians 2:10', text: 'For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.', link: '/bible/ephesians/2' },
      { reference: 'Psalm 139:13', text: 'For thou hast possessed my reins: thou hast covered me in my mother\'s womb.', link: '/bible/psalms/139' },
      { reference: 'Isaiah 64:8', text: 'But now, O LORD, thou art our father; we are the clay, and thou our potter; and we all are the work of thy hand.', link: '/bible/isaiah/64' }
    ],
    relatedVerses: ['genesis/1/1', 'john/3/16', 'jeremiah/29/11', 'psalms/23/1']
  },

  // 24. 1 Corinthians 13:4
  '1-corinthians/13/4': {
    bookSlug: '1-corinthians',
    chapter: 13,
    verse: 4,
    reference: '1 Corinthians 13:4-7',
    kjvText: 'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up,',
    explanation: [
      'First Corinthians 13:4 begins the most detailed description of love in the entire Bible. Paul uses the word "charity" (agape in Greek), which in the King James Version translates the distinctly Christian concept of selfless, sacrificial love. This is not romantic love, friendship love, or familial love -- it is the love that originates in God\'s own character and is poured into the hearts of believers by the Holy Spirit. Paul describes this love not with abstract theological terms but with concrete, practical behaviors.',
      'The description begins with two positive qualities: "charity suffereth long, and is kind." Longsuffering (patience) is love\'s endurance -- its ability to bear with difficult people and frustrating circumstances without retaliating or giving up. Kindness is love\'s active expression -- it does not merely endure wrongs but actively seeks the good of others. Together, these two qualities describe a love that absorbs offense without bitterness and responds with generosity.',
      'The list then turns to what love does not do: "envieth not; vaunteth not itself, is not puffed up." Love does not resent the success of others (envy), does not parade its own accomplishments (boasting), and does not inflate its own importance (arrogance). Verses 5-7 continue: love "doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil; Rejoiceth not in iniquity, but rejoiceth in the truth; Beareth all things, believeth all things, hopeth all things, endureth all things." Each phrase strips away another layer of self-centeredness and reveals love as fundamentally other-oriented.',
      'The most profound way to read this passage is to substitute the name "Jesus" for "charity." Jesus suffers long and is kind. Jesus envies not. Jesus is not puffed up. Jesus bears all things, hopes all things, endures all things. Every quality Paul describes was perfectly embodied in the life, death, and resurrection of Christ. He is the living definition of love. When believers ask God to produce this love in their lives, they are asking to be conformed to the image of Jesus -- which is precisely God\'s purpose for every believer (Romans 8:29).'
    ],
    context: 'Paul writes this passage to the Corinthian church, which was torn apart by divisions, spiritual pride, and the competitive pursuit of spiritual gifts. In chapters 12-14, Paul addresses the proper use of spiritual gifts, and chapter 13 serves as the heart of his argument: without love, even the most impressive spiritual gifts are worthless. Love is the "more excellent way" (1 Corinthians 12:31).',
    originalLanguage: 'The Greek "agape" (charity/love) refers to selfless, unconditional love rooted in the will rather than emotion. "Makrothumeo" (suffereth long) literally means "long-tempered" -- the opposite of being short-tempered. "Chresteuomai" (is kind) means to show oneself useful, to act benevolently.',
    application: 'This passage serves as both a mirror and a goal for every believer. It exposes the gap between how we naturally love and how God calls us to love, and it drives us to rely on the Holy Spirit to produce in us what we cannot produce on our own. It is also a practical checklist for evaluating relationships, decisions, and responses.',
    crossReferences: [
      { reference: 'John 13:34', text: 'A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another.', link: '/bible/john/13' },
      { reference: '1 John 4:8', text: 'He that loveth not knoweth not God; for God is love.', link: '/bible/1-john/4' },
      { reference: 'Galatians 5:22', text: 'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith,', link: '/bible/galatians/5' },
      { reference: 'Colossians 3:14', text: 'And above all these things put on charity, which is the bond of perfectness.', link: '/bible/colossians/3' }
    ],
    relatedVerses: ['galatians/5/22', 'john/3/16', 'john/14/6', 'romans/12/2']
  },

  // 25. John 16:33
  'john/16/33': {
    bookSlug: 'john',
    chapter: 16,
    verse: 33,
    reference: 'John 16:33',
    kjvText: 'These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.',
    explanation: [
      'John 16:33 is one of the most honest and encouraging statements Jesus ever made. He does not promise His followers a life free from trouble; He promises them exactly the opposite: "In the world ye shall have tribulation." The Greek word "thlipsis" (tribulation) means pressure, affliction, and distress. Jesus looks His disciples in the eye and tells them plainly that following Him will not exempt them from suffering. In a world full of false promises of comfort and ease, Jesus\' honesty is profoundly refreshing and trustworthy.',
      'Yet the verse does not end with tribulation. It ends with victory: "but be of good cheer; I have overcome the world." The command to "be of good cheer" (tharseite) means to take courage, to be confident, to be bold. This is not a naive optimism that ignores reality but a settled confidence rooted in a fact: Jesus has overcome the world. The verb "overcome" (nikao) is in the perfect tense, indicating a completed action with ongoing results. The victory has already been won. The world, with all its opposition, temptation, and persecution, has been decisively defeated by Christ.',
      'The opening phrase reveals the purpose of Jesus\' teaching: "that in me ye might have peace." Note the contrast: tribulation is found "in the world," but peace is found "in me." These are two different realms. The believer simultaneously lives in the world and in Christ. In the world, there is genuine tribulation. In Christ, there is genuine peace. The peace Jesus offers is not the absence of trouble but the presence of the Victor in the midst of trouble. It is the peace of knowing that the one who loves you has already defeated every enemy you will ever face.',
      'Jesus speaks these words on the night before His crucifixion -- the very event by which He would overcome the world. Within hours, He would face betrayal, abandonment, unjust trial, torture, and death on a cross. Yet from that apparent defeat came the greatest victory in cosmic history: the defeat of sin, death, and the devil. The cross, which the world saw as weakness, was the very means by which Christ conquered. Believers can therefore face their own tribulations with this same confidence: what the world intends for evil, God uses for ultimate victory.'
    ],
    context: 'Jesus speaks these words at the conclusion of His farewell discourse to the disciples on the night before His crucifixion (John 13-16). He has warned them of coming persecution, promised the Holy Spirit, and spoken of His imminent departure and return. This verse serves as both the summary and the climax of His final teaching, sending them into the future with realism about the world and confidence in His victory.',
    originalLanguage: 'The Greek "thlipsis" (tribulation) means pressing, squeezing, affliction -- the image of grapes being crushed in a winepress. "Nikao" (overcome) means to conquer, to be victorious. It is in the perfect tense, indicating a decisive, completed victory with lasting effects.',
    application: 'This verse equips believers to face suffering with neither denial nor despair. Tribulation is real and expected, but it is not the final word. Christ has overcome, and those who are "in Him" share in His victory. Believers can face hardship with genuine peace and courage because the outcome is already decided.',
    crossReferences: [
      { reference: 'Romans 8:37', text: 'Nay, in all these things we are more than conquerors through him that loved us.', link: '/bible/romans/8' },
      { reference: '1 John 5:4', text: 'For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.', link: '/bible/1-john/5' },
      { reference: 'John 14:27', text: 'Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.', link: '/bible/john/14' },
      { reference: 'James 1:2-3', text: 'My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience.', link: '/bible/james/1' }
    ],
    relatedVerses: ['john/14/6', 'philippians/4/13', 'romans/8/28', 'isaiah/41/10', 'john/3/16']
  }
};

export function getVerseExplanation(bookSlug: string, chapter: number, verse: number): VerseExplanation | null {
  return verseExplanations[`${bookSlug}/${chapter}/${verse}`] || null;
}
