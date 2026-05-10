/**
 * Shared character library for the "People in this chapter" ribbon.
 *
 * Each entry has three depth-tiered bios that match the site's three study
 * levels. The chapter renderer picks the bio matching the active level so
 * a beginner sees one line about David and a deep reader sees a full
 * paragraph that places him in the larger arc of Scripture.
 *
 * Adding a new character: pick a stable slug (lowercase, hyphens), write
 * three bios in increasing depth, and reference them from chapter data
 * with `characters: [{ slug: 'your-slug' }]`.
 */

export interface BibleCharacter {
  /** Stable id used by chapter data files. */
  slug: string;
  /** Display name, e.g. "David". */
  name: string;
  /** Optional small role label rendered under the name when no chapter
   *  override is set, e.g. "Shepherd-king" for David. */
  role: string;
  /** Era for context line on the card, e.g. "c. 1010 – 970 BC". Optional. */
  era?: string;
  /** Three depth-tiered bios. Beginner is one line; intermediate is a
   *  short paragraph; deep is a fuller paragraph that places the figure
   *  in the larger biblical arc. */
  bios: {
    beginner: string;
    intermediate: string;
    deep: string;
  };
  /** Optional canonical chapter where this person is most fully introduced.
   *  Used to link the card name to a study guide page. */
  primaryChapter?: { bookSlug: string; chapter: number };
}

export const characters: Record<string, BibleCharacter> = {
  /* ─── Old Testament — Patriarchs & Exodus ──────────────────────────── */
  abraham: {
    slug: 'abraham',
    name: 'Abraham',
    role: 'Father of the faith',
    era: 'c. 2000 BC',
    bios: {
      beginner: 'Called by God to leave his country and become the father of a great nation through whom the world would be blessed.',
      intermediate: 'A wealthy nomad in Ur whom God called west into Canaan with a fourfold promise — land, descendants, blessing, and a global mission. Trusted God enough to lift the knife over his only son.',
      deep: 'The first man Scripture calls a friend of God. Paul makes him the father of all who believe. His covenant — sealed at Genesis 15 with passing fire and at Genesis 17 with circumcision — anchors every later promise. The willingness to offer Isaac on Moriah prefigures the Father offering the Son.',
    },
    primaryChapter: { bookSlug: 'genesis', chapter: 12 },
  },
  moses: {
    slug: 'moses',
    name: 'Moses',
    role: 'Lawgiver and deliverer',
    era: 'c. 1400 BC',
    bios: {
      beginner: 'Led Israel out of slavery in Egypt and received the law on Sinai.',
      intermediate: 'Hebrew baby raised as Egyptian royalty, exiled for forty years to Midian, then sent back by the burning-bush God to confront Pharaoh and lead Israel out. Met with God face to face on Sinai and received the law for the nation.',
      deep: 'The mediator of the old covenant and the prophet to whom every later prophet is compared. Hebrews casts Christ as the new and greater Moses, leading not Israel out of Egypt but the people of God out of sin into eternal rest. His face shone after meeting God; ours are unveiled in Christ.',
    },
    primaryChapter: { bookSlug: 'exodus', chapter: 3 },
  },

  /* ─── 1 & 2 Samuel ─────────────────────────────────────────────────── */
  samuel: {
    slug: 'samuel',
    name: 'Samuel',
    role: 'Prophet, priest, judge',
    era: 'c. 1100 BC',
    bios: {
      beginner: 'A child given to God who grew up in the temple and became the prophet who anointed Israel’s first two kings.',
      intermediate: 'Born in answer to Hannah’s prayer and raised by Eli the priest. Heard God call him as a boy. Anointed both Saul and David. The last of the judges and the bridge into the monarchy.',
      deep: 'Samuel stands at the seam between two ages of Israel — the era of the judges and the era of kings. He is prophet (he speaks for God), priest (he offers sacrifice), and judge (he rules). His name means "God has heard." Like Christ, he holds three offices in one person, foreshadowing the prophet-priest-king to come.',
    },
    primaryChapter: { bookSlug: '1-samuel', chapter: 1 },
  },
  saul: {
    slug: 'saul',
    name: 'Saul',
    role: 'Israel’s first king',
    era: 'c. 1050 – 1010 BC',
    bios: {
      beginner: 'Israel’s first king, anointed by Samuel but later rejected by God for disobedience.',
      intermediate: 'A tall Benjamite chosen when Israel demanded a king like the other nations. Began with humility, then unraveled into jealousy, paranoia, and rebellion. The Spirit of the Lord left him, and he died on Mount Gilboa by his own hand.',
      deep: 'Saul is the kingdom Israel asked for; David is the kingdom God chose. His reign is a sustained meditation on what happens when leadership trades obedience for self-preservation. He is what every reader can become if the heart slowly stops listening — a man with God’s anointing on his head and God’s Spirit no longer in his chest.',
    },
    primaryChapter: { bookSlug: '1-samuel', chapter: 9 },
  },
  david: {
    slug: 'david',
    name: 'David',
    role: 'Shepherd-king',
    era: 'c. 1010 – 970 BC',
    bios: {
      beginner: 'A shepherd boy chosen and anointed king, who killed Goliath and wrote many of the Psalms.',
      intermediate: 'The youngest of Jesse’s sons, anointed in secret by Samuel while still tending sheep. Killed Goliath, served Saul, was hunted by Saul, became king of Judah and then all Israel. A man after God’s own heart who also committed adultery and arranged a murder.',
      deep: 'God’s chosen king and the greatest type of Christ in the Old Testament. The Davidic covenant of 2 Samuel 7 promises a son whose throne will not end — fulfilled in Jesus, "Son of David." David’s psalms, both his praise and his repentance, become the prayerbook of the Messiah and the church. His failures are recorded with the same honesty as his triumphs because grace, not perfection, is what makes him a king after God’s heart.',
    },
    primaryChapter: { bookSlug: '1-samuel', chapter: 16 },
  },
  jonathan: {
    slug: 'jonathan',
    name: 'Jonathan',
    role: 'Saul’s son, David’s friend',
    era: 'c. 1040 – 1010 BC',
    bios: {
      beginner: 'King Saul’s son and David’s closest friend, who loved David as his own soul.',
      intermediate: 'A brave warrior who climbed a cliff with his armor-bearer to rout a Philistine garrison. Loved David enough to give him his own robe and sword and to choose his friend’s coronation over his own.',
      deep: 'Jonathan should have inherited his father’s throne. Instead he stripped off his royal robes and handed them to David — a covenant gesture that the kingdom belonged not to bloodline but to God’s anointed. His friendship with David is one of the purest pictures of self-emptying love in the Old Testament; he died beside his father at Gilboa, faithful to both.',
    },
    primaryChapter: { bookSlug: '1-samuel', chapter: 14 },
  },
  goliath: {
    slug: 'goliath',
    name: 'Goliath',
    role: 'Philistine champion',
    era: 'c. 1025 BC',
    bios: {
      beginner: 'A nine-foot Philistine warrior who challenged Israel and was killed by David with a single stone.',
      intermediate: 'A champion from Gath, six cubits and a span tall, whose daily taunts froze Saul’s army for forty days. Fell to a shepherd boy who refused his armor and trusted the name of the Lord of hosts.',
      deep: 'Goliath is what every enemy of God’s people looks like — bigger, louder, longer-lasting than the threatened heart can imagine bearing. David’s victory by the brook is a small picture of the larger victory of David’s greater Son, who walked into Satan’s field and won by what looked like weakness.',
    },
    primaryChapter: { bookSlug: '1-samuel', chapter: 17 },
  },
  jesse: {
    slug: 'jesse',
    name: 'Jesse',
    role: 'Father of David',
    era: 'c. 1050 BC',
    bios: {
      beginner: 'David’s father, a Bethlehemite from whom Samuel chose Israel’s next king.',
      intermediate: 'A landowner of Bethlehem, descendant of Boaz and Ruth, father of eight sons. Paraded the seven oldest before Samuel; the prophet refused them all and asked for the youngest, who was tending sheep.',
      deep: 'Isaiah promises that "a shoot shall come out of the stump of Jesse" — a Messiah who emerges not from Jesse’s royal son but from Jesse himself, as if the dynasty had to be cut down to its root before God’s true king could grow. Matthew opens his Gospel with that root: Jesse, David, and finally Christ.',
    },
    primaryChapter: { bookSlug: '1-samuel', chapter: 16 },
  },

  /* ─── Acts & Pauline ───────────────────────────────────────────────── */
  paul: {
    slug: 'paul',
    name: 'Paul (Saul of Tarsus)',
    role: 'Apostle to the Gentiles',
    era: 'c. AD 5 – 67',
    bios: {
      beginner: 'A Pharisee who persecuted Christians, met the risen Christ on the Damascus road, and became the apostle to the Gentiles.',
      intermediate: 'A Roman citizen, a Pharisee trained under Gamaliel, and a hunter of the early church. Confronted by the risen Jesus on the road to Damascus, he became the missionary who carried the gospel across the Mediterranean and wrote thirteen of the New Testament’s twenty-seven books.',
      deep: 'No biblical figure outside Jesus Himself shapes the New Testament more. Paul’s conversion is the hinge between the gospel’s Jewish beginnings and its global mission. His letters wrestle out the implications of Christ’s death and resurrection for every layer of life — justification, the Spirit, the church, marriage, work, suffering. He died a martyr’s death in Rome, faithful to the end.',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 9 },
  },
  silas: {
    slug: 'silas',
    name: 'Silas',
    role: 'Paul’s missionary partner',
    era: 'c. AD 50',
    bios: {
      beginner: 'Paul’s companion on his second missionary journey; sang hymns with him in a Philippian jail.',
      intermediate: 'A leader in the Jerusalem church chosen to deliver its letter to the Gentile believers. Joined Paul after the split with Barnabas, and walked beside him from Antioch through Asia Minor into Macedonia and Greece.',
      deep: 'Silas (also called Silvanus in Peter’s letters) is the steady second voice of the early mission. A Roman citizen like Paul, he shared in beatings, prison, and the sight of an earthquake-opened jail. His name appears in the salutations of 1 and 2 Thessalonians, marking him as a co-author of two New Testament letters.',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 16 },
  },
  timothy: {
    slug: 'timothy',
    name: 'Timothy',
    role: 'Paul’s "true son in the faith"',
    era: 'c. AD 35 – 97',
    bios: {
      beginner: 'A young disciple Paul met in Lystra and trained as a missionary partner and pastor.',
      intermediate: 'Son of a Jewish mother and a Greek father, raised on the Scriptures by his grandmother Lois and mother Eunice. Joined Paul in Acts 16 and ministered with him for the rest of Paul’s life.',
      deep: 'Timothy receives two of the most personal letters in the New Testament. Paul addresses him as "my beloved son" and entrusts him with the church at Ephesus. His mixed heritage made him a bridge between the Jewish and Gentile worlds; his temperament needed Paul’s repeated reminder that "God hath not given us the spirit of fear, but of power, and of love, and of a sound mind."',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 16 },
  },
  lydia: {
    slug: 'lydia',
    name: 'Lydia',
    role: 'Seller of purple, first European convert',
    era: 'c. AD 50',
    bios: {
      beginner: 'A wealthy merchant from Thyatira whose heart the Lord opened to receive Paul’s message at a riverside in Philippi.',
      intermediate: 'A businesswoman trading the costly purple dye of Asia Minor. A "worshiper of God" (Gentile drawn to Israel’s faith) who heard Paul preach by the river outside Philippi. She and her household were baptized and became the first European church plant.',
      deep: 'Lydia’s conversion shows the gospel reaching across class and gender in the Roman world: a wealthy, independent Gentile woman becomes a foundational believer in Macedonia. Her home becomes the first house-church in Europe, and Paul returns to it after the prison earthquake. She is the quiet beginning of every Christian family on the continent.',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 16 },
  },
  jailer: {
    slug: 'philippian-jailer',
    name: 'The Philippian Jailer',
    role: 'Roman custodian, midnight convert',
    era: 'c. AD 50',
    bios: {
      beginner: 'A Roman jailer who, after an earthquake opened the prison, asked Paul, "What must I do to be saved?"',
      intermediate: 'Charged with keeping Paul and Silas under guard in the inner cell. Woke from an earthquake, drew his sword to kill himself rather than face execution for losing his prisoners — and was stopped by Paul’s shout from the dark: "Do thyself no harm."',
      deep: 'The jailer is the third conversion in Acts 16, completing the chapter’s portrait of the gospel reaching every layer of the empire — the wealthy Lydia, the enslaved girl, and now this hardened Roman official. He washes the wounds his system inflicted, and is washed himself in baptism the same night. Suffering Christians who sang in chains became the bearers of his salvation.',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 16 },
  },

  /* ─── Gospels ──────────────────────────────────────────────────────── */
  jesus: {
    slug: 'jesus',
    name: 'Jesus of Nazareth',
    role: 'Christ, Son of God',
    era: 'c. 4 BC – AD 30',
    bios: {
      beginner: 'The Son of God, the Messiah, who lived, taught, died, and rose to bring people back to God.',
      intermediate: 'Born to Mary in Bethlehem, raised in Nazareth, baptized by John in the Jordan, ministered three years across Galilee and Judea, was crucified outside Jerusalem under Pontius Pilate, and rose on the third day.',
      deep: 'The Word made flesh, the second Adam, the true Israel, the suffering Servant, the Lamb of God, the Good Shepherd, the great High Priest, the King of kings, the Lord of glory — every line of the Old Testament gathers up in His person, and every line of the New flows out of what He has done. Every other figure in this library is read in light of Him.',
    },
    primaryChapter: { bookSlug: 'matthew', chapter: 1 },
  },
  peter: {
    slug: 'peter',
    name: 'Simon Peter',
    role: 'Apostle, fisherman',
    era: 'c. 1 BC – AD 67',
    bios: {
      beginner: 'A Galilean fisherman called by Jesus, who became a leader of the apostles after Christ’s resurrection.',
      intermediate: 'Brother of Andrew, partner of James and John. Renamed "Peter" (Rock) by Jesus. Confessed Christ as Son of God; denied him on the night of his arrest; was restored on the lakeshore and preached the first Pentecost sermon.',
      deep: 'The most fully human of the twelve. His denials and restoration map a pattern every disciple knows. He bore the keys of the kingdom in Acts — opening the door first to Jews at Pentecost, then to Samaritans, then to the Gentile household of Cornelius. Tradition says he was crucified upside-down in Rome, refusing equality with his Lord even in death.',
    },
    primaryChapter: { bookSlug: 'matthew', chapter: 4 },
  },
  john: {
    slug: 'john-apostle',
    name: 'John (the Apostle)',
    role: '"The disciple whom Jesus loved"',
    era: 'c. AD 6 – 100',
    bios: {
      beginner: 'A fisherman who became an apostle, wrote the Gospel of John and Revelation, and was entrusted with Jesus’ mother at the cross.',
      intermediate: 'Son of Zebedee, brother of James, one of Jesus’ inner three. Called himself "the disciple whom Jesus loved." Authored the Fourth Gospel, three letters, and the Revelation he received on Patmos.',
      deep: 'Outlived every other apostle. His Gospel is the most theological of the four, opening with the Word who was with God and was God. His letters are tender and exacting in equal measure. His Revelation is the canon’s closing vision — Christ enthroned, every tear wiped, and a new heavens and new earth coming down.',
    },
    primaryChapter: { bookSlug: 'john', chapter: 1 },
  },
};

/** Look up a character by slug. Returns null when the slug is unknown so
 *  the renderer can quietly skip it instead of crashing. */
export function getCharacter(slug: string): BibleCharacter | null {
  return characters[slug] ?? null;
}

/** Return every character in the library — used by an upcoming /people
 *  index page (not in this pass; helper here so it's discoverable). */
export function getAllCharacters(): BibleCharacter[] {
  return Object.values(characters);
}
