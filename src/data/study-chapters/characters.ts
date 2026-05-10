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
  hannah: {
    slug: 'hannah',
    name: 'Hannah',
    role: 'Mother of Samuel',
    era: 'c. 1100 BC',
    bios: {
      beginner: 'A barren woman who prayed for a son and gave him back to God when he was born.',
      intermediate: 'One of two wives of Elkanah; mocked by her sister-wife Peninnah for being childless. Wept bitterly at the tabernacle in Shiloh and vowed any son to lifelong service. The Lord remembered her, and she bore Samuel.',
      deep: 'Hannah’s prayer in 1 Samuel 2 — "the Lord killeth, and maketh alive… he raiseth up the poor out of the dust" — is one of the great prophetic songs of Scripture, structurally and theologically Mary’s template for the Magnificat. The barren-woman-who-bears motif runs through Sarah, Rebekah, Rachel, Hannah, Elizabeth, and culminates in the virgin Mary; God repeatedly opens what was closed to make a way for the redeemer.',
    },
    primaryChapter: { bookSlug: '1-samuel', chapter: 1 },
  },
  elkanah: {
    slug: 'elkanah',
    name: 'Elkanah',
    role: 'Hannah’s husband; Samuel’s father',
    era: 'c. 1100 BC',
    bios: {
      beginner: 'A devout Levite of Ephraim, husband to Hannah and Peninnah, and father of Samuel.',
      intermediate: 'A Levite from the hill country of Ephraim who went up yearly to Shiloh to worship and sacrifice. Loved Hannah even in her barrenness, giving her a double portion. Stood with her vow to dedicate Samuel to the Lord.',
      deep: 'Elkanah’s name means "God has acquired/possessed." His tender devotion to Hannah ("am not I better to thee than ten sons?") and his quiet faithfulness make him a model of marriage even amid the bitterness of polygamous rivalry — the Old Testament makes no attempt to soften that the system itself caused the suffering.',
    },
    primaryChapter: { bookSlug: '1-samuel', chapter: 1 },
  },
  eli: {
    slug: 'eli',
    name: 'Eli',
    role: 'High priest at Shiloh',
    era: 'c. 1100 BC',
    bios: {
      beginner: 'The aging high priest who raised Samuel in the temple but failed to restrain his own corrupt sons.',
      intermediate: 'High priest at Shiloh who at first mistook Hannah’s silent prayer for drunkenness, then blessed her vow. Became Samuel’s mentor. Lost both his sons and his own life on the day the ark was captured.',
      deep: 'Eli is the canon’s most pointed warning about leaders who honor God’s service publicly but indulge their own household privately. His sons treated the offerings of the Lord with contempt; he rebuked them too lightly. When the news reached him that the ark was taken and his sons were dead, he fell from his seat and broke his neck. His final word — "Ichabod" through his daughter-in-law — names the day the glory departed from Israel.',
    },
    primaryChapter: { bookSlug: '1-samuel', chapter: 1 },
  },
  'eli-sons': {
    slug: 'eli-sons',
    name: 'Hophni and Phinehas',
    role: 'Eli’s corrupt sons',
    era: 'c. 1100 BC',
    bios: {
      beginner: 'Eli’s two priest sons who stole from God’s offerings and died on the same day in battle.',
      intermediate: 'Priests at Shiloh who took the best of every sacrifice for themselves and slept with the women who served at the tabernacle entrance. The Lord’s judgment fell on them at the battle of Aphek — both killed when the ark was captured.',
      deep: 'Hophni and Phinehas are what religious office without the fear of God produces. Their sin was institutional sacrilege — turning the worship of the Lord into a feeding trough — and their judgment came not in private but on the public day Israel itself was humiliated in battle. The narrative makes them inseparable from Eli’s failure to discipline.',
    },
    primaryChapter: { bookSlug: '1-samuel', chapter: 2 },
  },
  abigail: {
    slug: 'abigail',
    name: 'Abigail',
    role: 'Wise wife of Nabal; later David’s wife',
    era: 'c. 1010 BC',
    bios: {
      beginner: 'A wise woman whose quick action stopped David from shedding blood in vengeance, and who later married him.',
      intermediate: 'Wife of the foolish, hard-hearted Nabal of Carmel. When her husband insulted David’s men, she met David on the road with two hundred loaves and a sermon that turned him from murder. Days later Nabal died; David sent for her and made her his wife.',
      deep: 'Abigail is one of the great wisdom-figures of the Old Testament — a woman whose theology stops a king from a sin he would never have outgrown. Her speech to David is densely packed: she predicts his coming reign, names his enemy as the Lord’s enemy, and frames bloodshed as a stone he would carry forever. David receives her word as from God Himself.',
    },
    primaryChapter: { bookSlug: '1-samuel', chapter: 25 },
  },
  ahimelech: {
    slug: 'ahimelech',
    name: 'Ahimelech',
    role: 'Priest at Nob who sheltered David',
    era: 'c. 1015 BC',
    bios: {
      beginner: 'The priest who gave David showbread and Goliath’s sword, and was killed by Saul for the kindness.',
      intermediate: 'Priest at Nob, where the tabernacle and the showbread were kept. Welcomed David in his flight, fed him with the consecrated bread, and handed him Goliath’s sword. Doeg the Edomite reported him; Saul slaughtered the priests of Nob in revenge.',
      deep: 'Jesus cites the showbread incident in Mark 2 to defend His disciples plucking grain on the Sabbath — Ahimelech becomes the case for human need overriding ritual when love is at stake. The massacre at Nob is the spiritual nadir of Saul’s reign: he could not strike David, so he struck the priests who sheltered him.',
    },
    primaryChapter: { bookSlug: '1-samuel', chapter: 21 },
  },
  achish: {
    slug: 'achish',
    name: 'Achish',
    role: 'Philistine king of Gath',
    era: 'c. 1015 BC',
    bios: {
      beginner: 'The Philistine king to whom David fled when Saul was hunting him.',
      intermediate: 'King of Gath, Goliath’s home city. David appeared before him twice — first feigning madness to escape, later as a refugee with a band of six hundred. Achish trusted him so completely that he proposed to take David into battle against Israel.',
      deep: 'Achish illustrates the strange providence of David’s outlaw years: the future king of Israel found shelter among Israel’s historic enemies because his own king wanted him dead. The other Philistine lords distrusted David and forced his withdrawal — sparing him the impossible choice of fighting his own people on the day Saul would die.',
    },
    primaryChapter: { bookSlug: '1-samuel', chapter: 21 },
  },
  joab: {
    slug: 'joab',
    name: 'Joab',
    role: 'David’s ruthless general',
    era: 'c. 1010 – 970 BC',
    bios: {
      beginner: 'David’s nephew and lifelong commander, who served the king fiercely but was often crueler than David wanted.',
      intermediate: 'Son of David’s sister Zeruiah; commanded the army through every campaign. Killed Abner in revenge; arranged Uriah’s death at David’s order; killed Absalom against David’s explicit command; backed Adonijah at the end. Solomon executed him at Joab’s request near the altar.',
      deep: 'Joab is the canon’s portrait of effective loyalty without conscience — the man who got things done that David could not bring himself to order, and whose blood-debts trailed the dynasty for a generation. David’s deathbed speech to Solomon ("his hoar head bring not down to the grave in peace") is the unsettled accounting at the end of a long, productive partnership.',
    },
    primaryChapter: { bookSlug: '2-samuel', chapter: 2 },
  },
  abner: {
    slug: 'abner',
    name: 'Abner',
    role: 'Saul’s general, then peace-broker',
    era: 'c. 1010 BC',
    bios: {
      beginner: 'Saul’s commander, who tried to make peace with David and was murdered by Joab.',
      intermediate: 'Son of Ner, Saul’s cousin and the captain of his host. After Saul’s death, made Ish-bosheth king over the northern tribes. After a falling out, defected to David and brokered the unification of Israel — only to be assassinated by Joab in Hebron in revenge for a brother’s death.',
      deep: 'Abner is the story of what almost was. He could have made the peaceful succession from Saul’s house to David’s simple. Joab’s vendetta blood undid that work in a single afternoon. David’s public grief at Abner’s grave — refusing food until sundown, walking behind the bier, naming the killers — was a pointed declaration that the new king was not party to old vengeance.',
    },
    primaryChapter: { bookSlug: '2-samuel', chapter: 3 },
  },
  bathsheba: {
    slug: 'bathsheba',
    name: 'Bathsheba',
    role: 'Wife of Uriah, then of David; mother of Solomon',
    era: 'c. 1000 BC',
    bios: {
      beginner: 'Uriah’s wife, taken by David in his great sin, and later the mother of Solomon.',
      intermediate: 'Wife of Uriah the Hittite, a foreign soldier in David’s army. Seen bathing from the palace roof, summoned by the king, became pregnant, and her husband was killed to cover the affair. The first child died; the second was Solomon, the chosen heir.',
      deep: 'Matthew names Bathsheba in Jesus’ genealogy not by name but as "her of Urias" — refusing to let the cover-up survive even into the Messiah’s ancestor list. That she became the mother of Solomon, and shrewdly secured her son’s throne in 1 Kings 1, shows how God writes redemption through the very wreckage of human sin.',
    },
    primaryChapter: { bookSlug: '2-samuel', chapter: 11 },
  },
  uriah: {
    slug: 'uriah',
    name: 'Uriah the Hittite',
    role: 'Loyal soldier, victim of David’s sin',
    era: 'c. 1000 BC',
    bios: {
      beginner: 'A foreign-born soldier of David’s army, killed at David’s order to cover the king’s adultery with his wife.',
      intermediate: 'A Hittite — non-Israelite by birth — listed among David’s thirty mighty men. When summoned home from the front, refused to sleep with his wife while his comrades slept in tents. Was sent back carrying the sealed letter that ordered his own death.',
      deep: 'Uriah’s integrity in his single recorded scene is more luminous than David’s in the same chapter. He is one of the canon’s most devastating "righteous Gentile" figures — a foreigner who keeps Israel’s covenant ethics better than Israel’s king. His name appears in Jesus’ genealogy by association ("the wife of Urias"), a permanent indictment that became part of the Messiah’s heritage.',
    },
    primaryChapter: { bookSlug: '2-samuel', chapter: 11 },
  },
  nathan: {
    slug: 'nathan',
    name: 'Nathan',
    role: 'Court prophet to David',
    era: 'c. 1000 BC',
    bios: {
      beginner: 'The prophet who told David the parable of the poor man’s lamb and announced the coming Messiah from David’s line.',
      intermediate: 'Court prophet through David’s reign and into Solomon’s. Brought the Davidic covenant in 2 Samuel 7 — "thy throne shall be established for ever." Confronted David after Bathsheba with the parable and "thou art the man." Helped secure Solomon’s succession.',
      deep: 'Nathan delivers two of the most consequential prophetic words in the canon: the eternal-throne promise that anchors every later messianic hope, and the rebuke that shows even God’s anointed king is not above the moral law. Both deliveries show prophetic courage in the room of the most powerful man in Israel.',
    },
    primaryChapter: { bookSlug: '2-samuel', chapter: 7 },
  },
  absalom: {
    slug: 'absalom',
    name: 'Absalom',
    role: 'David’s rebellious son',
    era: 'c. 980 BC',
    bios: {
      beginner: 'David’s handsome son who killed his half-brother Amnon, led a coup against his father, and died in battle hanging from a tree.',
      intermediate: 'Third son of David, full brother to Tamar. Avenged his sister by killing Amnon; was banished, then partially restored. Spent four years stealing the hearts of Israel and led a near-successful rebellion that drove David from Jerusalem. Killed by Joab as he hung by his hair from an oak.',
      deep: 'Absalom is the unraveling of Nathan’s prophecy that the sword would not depart from David’s house. His grievance against his father was not unfounded — Amnon’s rape of Tamar had gone unaddressed — but his answer was rebellion, not justice. David’s cry "O my son Absalom… would God I had died for thee" is one of the most piercing father-laments in Scripture, and a faint shadow of the Father who actually did die for His son-in-rebellion.',
    },
    primaryChapter: { bookSlug: '2-samuel', chapter: 14 },
  },
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
  'ananias-damascus': {
    slug: 'ananias-damascus',
    name: 'Ananias of Damascus',
    role: 'Disciple sent to baptize Saul',
    era: 'c. AD 33',
    bios: {
      beginner: 'A Damascus disciple who was told in a vision to lay hands on the blind Saul and restore his sight.',
      intermediate: 'A "devout man according to the law" living in Damascus. Argued with the Lord about going to Saul ("how much evil he hath done to thy saints"), then obeyed. Spoke the words that opened Saul’s eyes and named him a chosen vessel.',
      deep: 'Ananias has only one scene in Scripture, but it is one of the most consequential in the New Testament. The conversion of Paul required not only the risen Christ on the road but a willing disciple in the city — a man with no record of leadership who was brave enough to go knock on the door of the man hunting his church. The whole apostolic mission to the Gentiles passes through his obedient walk down Straight Street.',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 9 },
  },
  cornelius: {
    slug: 'cornelius',
    name: 'Cornelius',
    role: 'God-fearing Roman centurion',
    era: 'c. AD 38',
    bios: {
      beginner: 'A Roman centurion at Caesarea whose conversion opened the church to Gentiles.',
      intermediate: 'Centurion of the Italian band stationed at Caesarea, "a devout man, and one that feared God with all his house, which gave much alms… and prayed to God alway." An angel told him to send for Peter; the Spirit fell on his household as Peter preached, before baptism — settling the question of Gentile inclusion.',
      deep: 'Cornelius is the hinge of Acts. His household is the moment the gospel formally crossed from Jew to Gentile, and Peter — who had to be argued into going by a rooftop vision of unclean animals — became the apostle who declared "God is no respecter of persons." The church council of Acts 15 cited this story as the irreversible precedent.',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 10 },
  },
  barnabas: {
    slug: 'barnabas',
    name: 'Barnabas',
    role: '"Son of encouragement"',
    era: 'c. AD 30 – 60',
    bios: {
      beginner: 'A generous Cypriot Levite who vouched for Saul after his conversion and partnered with Paul on the first missionary journey.',
      intermediate: 'Joseph from Cyprus, renamed Barnabas ("son of encouragement") by the apostles. Sold a field for the early church. Brought Saul into the Jerusalem fellowship when others feared him. Led Paul on the first missionary journey. Split with Paul over John Mark — and then took John Mark with him.',
      deep: 'Barnabas is the great vouching man of the New Testament. Paul’s entire public ministry passes through Barnabas’s willingness to introduce a former persecutor to a frightened church. His later split with Paul over Mark could have been a permanent rupture, but Mark eventually becomes a man Paul calls "profitable to me for the ministry" — Barnabas’s investment vindicated.',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 4 },
  },
  stephen: {
    slug: 'stephen',
    name: 'Stephen',
    role: 'First Christian martyr',
    era: 'c. AD 34',
    bios: {
      beginner: 'One of seven deacons chosen to serve the early church; preached a long sermon to the Sanhedrin and was stoned to death — the first Christian martyr.',
      intermediate: 'A man "full of faith and of the Holy Ghost" chosen to oversee the Greek-speaking widows. His preaching drew the council’s rage; his sermon traced Israel’s pattern of rejecting God’s sent ones. Saw Jesus standing at the right hand of God as he died, praying "Lord, lay not this sin to their charge."',
      deep: 'Stephen’s death scene rhymes deliberately with Christ’s — the entrusted spirit, the prayer for forgiveness — and his martyrdom is the moment the persecution that scattered the church (and spread the gospel) began. Saul of Tarsus stood holding the coats. The scattered believers preached as they fled, planting the church across the Roman world; Stephen’s death is the seed of Acts 11 onward.',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 6 },
  },
  philip: {
    slug: 'philip-evangelist',
    name: 'Philip the Evangelist',
    role: 'Deacon, evangelist',
    era: 'c. AD 35 – 60',
    bios: {
      beginner: 'One of the seven deacons; preached in Samaria and baptized the Ethiopian official on the desert road.',
      intermediate: 'Chosen with Stephen as one of the Seven. After the persecution scattered the Jerusalem church, took the gospel to Samaria — the first cross-cultural evangelism in Acts. Met the Ethiopian eunuch on the Gaza road, explained Isaiah 53, baptized him, and was carried away by the Spirit. Father of four prophesying daughters.',
      deep: 'Philip is the canon’s portrait of an evangelist — a man whose feet were on the road wherever the Spirit pointed. The Ethiopian eunuch episode is the gospel reaching Africa decades before any other recorded mission, and the conversion of a court official under a queen who would carry the news home. Philip later hosted Paul on Paul’s last journey to Jerusalem.',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 8 },
  },
  aquila: {
    slug: 'aquila',
    name: 'Aquila',
    role: 'Tentmaker, ministry partner',
    era: 'c. AD 18 – 60',
    bios: {
      beginner: 'A Jewish tentmaker from Pontus, expelled from Rome under Claudius, who hosted Paul in Corinth.',
      intermediate: 'Tentmaker by trade. Expelled from Rome with all Jews under Emperor Claudius (c. AD 49). Met Paul in Corinth, partnered with him in the trade and the gospel, then moved with Priscilla to Ephesus where they corrected Apollos in private. Hosted house-churches in both Ephesus and Rome.',
      deep: 'Aquila is one half of the New Testament’s great husband-and-wife ministry team. Paul mentions them six times across his letters. Their craft — making tents — gave them mobility; their faith made every move a planting. They illustrate the uncelebrated layer of the early church: not apostles, not bishops, but trained, traveling believers whose homes became outposts.',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 18 },
  },
  priscilla: {
    slug: 'priscilla',
    name: 'Priscilla',
    role: 'Teacher, ministry partner',
    era: 'c. AD 18 – 60',
    bios: {
      beginner: 'Aquila’s wife and a teacher who, with her husband, instructed the eloquent Apollos more accurately about the way of God.',
      intermediate: 'Wife of Aquila. Often listed before her husband (an unusual ordering) — likely indicating she was the more prominent teacher. Took Apollos aside in Ephesus and "expounded unto him the way of God more perfectly." Hosted churches with Aquila in Corinth, Ephesus, and Rome.',
      deep: 'Priscilla is one of the most quietly significant teachers in the New Testament. Some early Christian writers have suggested she may even be the unnamed author of Hebrews — a guess, but a measure of how high her teaching reputation stood. The fact that Paul names her first in most of their references is itself a small textual revolution about who taught whom in the early church.',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 18 },
  },
  apollos: {
    slug: 'apollos',
    name: 'Apollos',
    role: 'Eloquent Alexandrian preacher',
    era: 'c. AD 50',
    bios: {
      beginner: 'A Jew from Alexandria, mighty in the Scriptures, who preached Jesus boldly but needed correction on baptism.',
      intermediate: 'A learned man "fervent in the spirit" who arrived in Ephesus knowing only the baptism of John. Priscilla and Aquila instructed him; he then went to Achaia and "mightily convinced the Jews… that Jesus was Christ." Some at Corinth followed him to the point of party-spirit, which Paul rebuked.',
      deep: 'Apollos is the canon’s evidence that gifting and humility can coexist — a brilliant orator who accepted private correction from a tentmaker couple. Paul’s "I planted, Apollos watered, but God gave the increase" is the New Testament’s definitive theology of partnership in ministry, written specifically because some Corinthians were lining up behind one or the other.',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 18 },
  },
  felix: {
    slug: 'felix',
    name: 'Felix',
    role: 'Roman procurator of Judea',
    era: 'c. AD 52 – 58',
    bios: {
      beginner: 'A Roman governor who heard Paul preach about righteousness, kept him in jail two years, and trembled but never repented.',
      intermediate: 'Procurator of Judea who heard Paul’s case at Caesarea. Knew "the way" well enough to delay judgment. Listened to Paul reason about righteousness, self-control, and judgment — and "trembled" — then sent him away. Hoped for a bribe and left him bound when he was succeeded by Festus.',
      deep: 'Felix is the canon’s portrait of the man who knows enough to be afraid but not enough to repent. Tacitus wrote of him that he "exercised the powers of a king with the spirit of a slave." The two-year delay he gave Paul is the procedural injustice that ultimately landed Paul in Rome — the Lord’s providence using a corrupt governor’s indecision to put His apostle on the right ship.',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 24 },
  },
  festus: {
    slug: 'festus',
    name: 'Festus',
    role: 'Roman procurator who succeeded Felix',
    era: 'c. AD 58 – 62',
    bios: {
      beginner: 'The new governor who took over Paul’s case and forced Paul to appeal to Caesar.',
      intermediate: 'Procurator after Felix. Inherited Paul as a political problem and proposed sending him to Jerusalem to try to please the Jews. Paul, knowing the trap, appealed to Caesar — Festus had no choice but to send him to Rome. Later told Agrippa Paul was "mad" with much learning.',
      deep: 'Festus is the bureaucrat to whom resurrection is intellectual madness — "much learning doth make thee mad." His appearance with Agrippa is one of Acts’ most public scenes: the apostle in chains, two rulers in pomp, and the gospel preached to both with the question "believest thou the prophets?" lingering in the air.',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 25 },
  },
  agrippa: {
    slug: 'agrippa',
    name: 'Agrippa II',
    role: 'Last of the Herodian kings',
    era: 'c. AD 27 – 92',
    bios: {
      beginner: 'A Jewish king before whom Paul testified — and who said, "Almost thou persuadest me to be a Christian."',
      intermediate: 'Great-grandson of Herod the Great; ruled territories in northern Palestine and oversaw the temple. Knew the Jewish prophets well. Heard Paul’s defense at Caesarea alongside Festus and Bernice. His "almost thou persuadest me" is one of Scripture’s most haunting near-misses.',
      deep: 'Agrippa II is the last of the Herodian dynasty whose throne began with the slaughter at Bethlehem and ends here, hearing the gospel preached in chains. He had the prophets, the political reach, the personal interest, and still walked away. The line "almost a Christian" became a sermon title used by Whitefield and Wesley to ask their hearers the same question — whether being almost persuaded is anything at all.',
    },
    primaryChapter: { bookSlug: 'acts', chapter: 26 },
  },

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
