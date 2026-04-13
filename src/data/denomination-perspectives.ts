import type { DenominationId } from '@/lib/DenominationContext';

export interface DenominationPerspective {
  approach: string;
  emphasis: string;
  studyTip: string;
  additionalReading: string[];
}

// Generic perspectives that apply to any chapter, organized by denomination
const perspectives: Record<Exclude<DenominationId, 'none'>, DenominationPerspective> = {
  baptist: {
    approach: 'Baptist interpretation centers on the authority and sufficiency of Scripture alone. Every passage is read through the lens of personal salvation by grace through faith in Jesus Christ. The Bible is the final rule for faith and practice — no church tradition or creed supersedes it.',
    emphasis: 'Look for themes of personal faith, the call to repentance, the security of the believer, and the importance of believer\'s baptism by immersion as an outward sign of inward transformation. Notice how each passage points to the individual\'s need for a personal relationship with Christ.',
    studyTip: 'As you read, ask: "What does this passage teach about salvation by grace through faith?" Cross-reference with Romans, Galatians, and Ephesians for the clearest expression of these themes.',
    additionalReading: [
      'Romans 10:9-13 — Salvation through confession and belief',
      'Ephesians 2:8-9 — Saved by grace through faith',
      'Acts 2:38-41 — Repentance and baptism',
    ],
  },
  catholic: {
    approach: 'Catholic interpretation reads Scripture within the living Tradition of the Church, guided by the Magisterium (teaching authority). The Bible is understood alongside the writings of the Church Fathers, the Catechism, and the liturgical life of the Church. Scripture and Sacred Tradition together form the deposit of faith.',
    emphasis: 'Look for connections to the seven sacraments — especially the Eucharist and Baptism — as well as the role of the Church as the Body of Christ. Notice typological readings where Old Testament events prefigure New Testament realities. Pay attention to themes of grace, merit, the communion of saints, and the Blessed Virgin Mary\'s role in salvation history.',
    studyTip: 'Consider how this passage is used in the liturgy (Mass readings, the Liturgy of the Hours). Read the relevant sections of the Catechism of the Catholic Church for the Church\'s authoritative interpretation.',
    additionalReading: [
      'Matthew 16:18-19 — The founding of the Church on Peter',
      'John 6:53-58 — The Eucharist as the Bread of Life',
      'James 2:14-26 — Faith and works together',
    ],
  },
  'jehovahs-witnesses': {
    approach: 'Jehovah\'s Witnesses read the Bible with a focus on Jehovah God\'s name, sovereignty, and purpose for the earth. They understand Jesus as God\'s Son and the first of His creation, distinct from Jehovah. The Bible is studied as a unified message about God\'s Kingdom — a real government that will restore paradise on earth.',
    emphasis: 'Look for the use of God\'s personal name (Jehovah/YHWH), the theme of God\'s sovereignty being challenged and vindicated, the distinction between Jehovah and Jesus, and the promise of a future paradise earth. Notice how prophecy points to the establishment of God\'s Kingdom in 1914 and its future completion.',
    studyTip: 'Compare this passage in the New World Translation. Look for how it connects to the theme of God\'s Kingdom and the sanctification of Jehovah\'s name. Consider what this teaches about living in harmony with God\'s purposes today.',
    additionalReading: [
      'Psalm 83:18 — Jehovah is the Most High',
      'Daniel 2:44 — God\'s Kingdom will crush earthly governments',
      'Revelation 21:3-4 — God dwelling with mankind, no more death',
    ],
  },
  lds: {
    approach: 'Latter-day Saints study the Bible as one of four standard works of scripture, alongside the Book of Mormon, Doctrine and Covenants, and Pearl of Great Price. They believe the Bible is the word of God "as far as it is translated correctly" and read it in light of modern revelation through living prophets.',
    emphasis: 'Look for teachings on the plan of salvation (pre-mortal existence, earth life as a probation, and eternal progression), the nature of the Godhead as three distinct beings, the importance of priesthood authority, temple ordinances, and covenant-making. Notice how this passage connects to restored gospel truths.',
    studyTip: 'Cross-reference with the Book of Mormon, which Latter-day Saints believe clarifies Bible teachings. Use the LDS edition\'s footnotes and the Topical Guide. Consider what modern prophets have taught about these verses.',
    additionalReading: [
      'James 1:5 — Ask of God (catalyst for the First Vision)',
      '1 Corinthians 15:40-42 — Degrees of glory',
      'Malachi 4:5-6 — Elijah and the sealing power',
    ],
  },
  lutheran: {
    approach: 'Lutheran interpretation is built on the three "solas": grace alone, faith alone, Scripture alone. Every passage is understood through the distinction between Law and Gospel — the Law shows us our sin and need, while the Gospel reveals Christ\'s saving work. Martin Luther taught that Scripture is its own interpreter.',
    emphasis: 'Look for the interplay of Law and Gospel in each passage. Where does the text convict of sin (Law)? Where does it point to Christ\'s free gift of salvation (Gospel)? Notice themes of justification by faith, the theology of the cross (God working through suffering and weakness), and the real presence of Christ in the sacraments.',
    studyTip: 'Ask two questions of every passage: "What does this demand of me?" (Law) and "What does this promise me in Christ?" (Gospel). Reference Luther\'s Small Catechism and the Book of Concord for confessional interpretation.',
    additionalReading: [
      'Romans 3:21-28 — Justification by faith apart from works of the law',
      'Galatians 2:16-21 — Living by faith in the Son of God',
      'Ephesians 2:8-10 — Grace, faith, and good works',
    ],
  },
  methodist: {
    approach: 'Methodist interpretation follows John Wesley\'s approach, using the "Wesleyan Quadrilateral": Scripture as the primary authority, illuminated by tradition, reason, and experience. Methodists emphasize that God\'s grace works in stages — prevenient grace (before faith), justifying grace (at conversion), and sanctifying grace (ongoing growth in holiness).',
    emphasis: 'Look for themes of God\'s grace at work before, during, and after conversion. Notice the call to personal holiness and social holiness (caring for the poor, fighting injustice). Consider how this passage speaks to entire sanctification — the Methodist belief that believers can be made perfect in love.',
    studyTip: 'As you read, consider all four sources: What does Scripture say? How has the Church historically understood this? Does it make logical sense? How does it connect to your personal experience of God? Apply Wesley\'s three simple rules: Do no harm, do good, stay in love with God.',
    additionalReading: [
      'Matthew 25:31-46 — Caring for "the least of these"',
      '1 Thessalonians 5:23 — Sanctification of spirit, soul, and body',
      'Micah 6:8 — Do justice, love mercy, walk humbly',
    ],
  },
  'non-denominational': {
    approach: 'Non-denominational study focuses on the plain reading of Scripture without binding creedal commitments beyond the core truths of the Christian faith. The Bible is the inspired Word of God and the ultimate authority. The emphasis is on a personal, living relationship with Jesus Christ rather than institutional tradition.',
    emphasis: 'Look for the central message of each passage as it points to Jesus. Focus on practical application — how does this text change how you live today? Notice themes of God\'s love, the power of the Holy Spirit, the call to community and discipleship, and the Great Commission.',
    studyTip: 'Read the passage in context. Let Scripture interpret Scripture by cross-referencing related passages. Pray for the Holy Spirit\'s guidance before studying. Discuss what you learn with other believers in community.',
    additionalReading: [
      '2 Timothy 3:16-17 — All Scripture is God-breathed',
      'John 3:16-17 — God\'s love and salvation through Christ',
      'Matthew 28:18-20 — The Great Commission',
    ],
  },
  pentecostal: {
    approach: 'Pentecostal interpretation reads the Bible with an expectation that the Holy Spirit is active and powerful today, just as in the Book of Acts. Scripture is not merely historical — it describes the normal Christian life. The gifts of the Spirit (tongues, prophecy, healing) are available to all believers today.',
    emphasis: 'Look for the activity of the Holy Spirit in each passage. Notice themes of spiritual empowerment, divine healing, speaking in tongues, prophecy, miracles, and the baptism of the Holy Spirit as a distinct experience from conversion. Pay attention to how believers in Scripture experienced God in tangible, supernatural ways.',
    studyTip: 'As you read, ask: "How is the Holy Spirit at work here?" and "What can I expect God to do in my life today based on this passage?" Read with faith and expectation. Spend time in prayer and worship alongside your study.',
    additionalReading: [
      'Acts 2:1-4 — The Day of Pentecost',
      '1 Corinthians 12:4-11 — Spiritual gifts',
      'Joel 2:28-29 — God pouring out His Spirit',
    ],
  },
  presbyterian: {
    approach: 'Presbyterian interpretation is grounded in Reformed theology and covenant theology. God is absolutely sovereign over all things, including salvation. The Bible is understood as the unfolding story of God\'s covenants with His people, culminating in the new covenant in Christ. The Westminster Confession and Catechisms guide interpretation.',
    emphasis: 'Look for themes of God\'s sovereignty, election, and predestination. Notice how each passage fits within the broader covenant structure (covenant of works, covenant of grace). Pay attention to the already/not-yet tension of the Kingdom of God. Consider the regulative principle — that worship and church life should follow what Scripture commands.',
    studyTip: 'Study this passage in light of the Westminster Confession of Faith and the Shorter Catechism. Consider the covenantal context: which covenant does this passage relate to? How does God\'s sovereign purpose unfold here?',
    additionalReading: [
      'Romans 8:28-30 — The golden chain of salvation',
      'Ephesians 1:3-14 — Predestination and election in Christ',
      'Genesis 17:1-8 — The covenant with Abraham',
    ],
  },
  'seventh-day-adventist': {
    approach: 'Seventh-day Adventist interpretation uses the historicist approach to prophecy, seeing prophetic timelines fulfilled through history. The Bible reveals a cosmic conflict (Great Controversy) between Christ and Satan. Adventists keep the seventh-day Sabbath (Saturday) as a perpetual sign of God\'s creative and redemptive authority.',
    emphasis: 'Look for themes of the Sabbath, the Second Coming of Christ, the heavenly sanctuary and Christ\'s high-priestly ministry, the state of the dead (soul sleep), and health as stewardship of the body temple. Notice how Daniel and Revelation illuminate each passage\'s end-time significance.',
    studyTip: 'Consider how this passage relates to the three angels\' messages of Revelation 14. Cross-reference with the writings of Ellen G. White for additional inspired commentary. Ask: "What does this teach about God\'s character in the Great Controversy?"',
    additionalReading: [
      'Exodus 20:8-11 — The Sabbath commandment',
      'Daniel 8:14 — The cleansing of the sanctuary',
      'Revelation 14:6-12 — The three angels\' messages',
    ],
  },
};

export function getDenominationPerspective(denominationId: DenominationId): DenominationPerspective | null {
  if (denominationId === 'none') return null;
  return perspectives[denominationId] || null;
}
