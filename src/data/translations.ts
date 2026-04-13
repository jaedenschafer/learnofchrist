export interface Translation {
  id: string;
  abbreviation: string;
  name: string;
  fullName: string;
  year: number;
  language: string;
  type: string;
  tradition: string;
  description: string;
  history: string[];
  features: string[];
  bestFor: string[];
  sampleVerse: {
    reference: string;
    text: string;
  };
  readLink: string;
}

export const translations: Translation[] = [
  {
    id: "kjv",
    abbreviation: "KJV",
    name: "King James Version",
    fullName: "King James Version (Authorized Version)",
    year: 1611,
    language: "English",
    type: "Formal equivalence",
    tradition: "Protestant",
    description:
      "The King James Version stands as the most influential English Bible translation in history. Commissioned by King James I and translated by 47 scholars, it combines majestic Elizabethan prose with remarkable linguistic accuracy. Its cadence and language have shaped English literature and speech for over four centuries.",
    history: [
      "King James I commissioned a new Bible translation in 1604, seeking to establish an authorized version that would unite the English Church. He charged 47 of England's finest scholars, divided into six companies, to produce a translation that would be both academically rigorous and ecclesiastically acceptable.",
      "The translators worked from the best available Hebrew, Greek, and Latin texts of their era, including the Textus Receptus for the New Testament and the Masoretic Text for the Old Testament. They were instructed to follow the Bishops' Bible as their base, while improving upon it with greater accuracy and elegance.",
      "Published in 1611, the King James Version was revolutionary in its scope and accessibility. It made the Bible available in vernacular English to common people while maintaining poetic beauty and theological precision. The translators' dedication to word order and idiom created a translation that reads as literature while preserving meaning.",
      "The KJV's language became deeply embedded in English culture, influencing literature, law, and everyday speech. Phrases like 'let there be light,' 'good Samaritan,' and 'labor of love' entered the English lexicon. Its measured rhythm made it ideal for public reading and memorization.",
      "Though subsequent translations have offered greater linguistic precision by modern standards, the King James Version remains the most quoted English Bible. Its longevity and cultural impact are unmatched, making it not just a translation but a cornerstone of English heritage.",
    ],
    features: [
      "Majestic Elizabethan prose that reads as timeless literature",
      "Exceptional accuracy in translation philosophy—word-for-word rather than thought-for-thought",
      "Consistent theological terminology that aids in studying biblical concepts",
      "The 'Apocrypha' books included in the original 1611 edition (though often omitted in modern printings)",
      "Footnotes explaining variant readings and translation choices",
      "Unparalleled cultural and historical influence on English language",
    ],
    bestFor: [
      "Devotional reading and meditation",
      "Memorization due to its rhythmic beauty",
      "Literary and historical study",
      "Understanding biblical influence on English culture",
    ],
    sampleVerse: {
      reference: "John 3:16 (KJV)",
      text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    },
    readLink: "/bible/john/1",
  },
  {
    id: "jst",
    abbreviation: "JST",
    name: "Joseph Smith Translation",
    fullName: "Joseph Smith Translation (Inspired Version)",
    year: 1833,
    language: "English",
    type: "Inspired revision",
    tradition: "Latter-day Saint",
    description:
      "The Joseph Smith Translation represents a unique scriptural work within the Latter-day Saint tradition. Rather than a translation from original languages, Joseph Smith undertook an inspired revision of the King James Version, believing he was correcting passages that had been altered or mistranslated over centuries. This translation includes significant theological additions and clarifications important to LDS doctrine.",
    history: [
      "Beginning in 1830, just months after founding The Church of Jesus Christ of Latter-day Saints, Joseph Smith commenced what he called the 'New Translation' of the Bible. He worked primarily from the King James Version but claimed divine guidance in identifying and correcting errors he believed had corrupted the text over time.",
      "Rather than consulting Hebrew and Greek manuscripts, Smith worked from the KJV text itself, revising passages where he felt spiritual discrepancies existed. This approach reflects the LDS belief that God continues to reveal truth through living prophets, not merely through ancient manuscripts.",
      "The translation project spanned approximately three years (1830-1833), with Smith dictating changes to his scribe. Notable revisions include expanded passages in Genesis explaining pre-mortal existence, clarifications in the gospels regarding Jesus's ministry, and additions to Paul's epistles addressing eternal principles central to LDS theology.",
      "Though Smith never published his complete translation during his lifetime, portions were included in LDS publications and the full text was eventually printed in 1867, thirty-four years after his death. The Reorganized Church of Jesus Christ of Latter Day Saints (RLDS, now Community of Christ) published his version in 1867.",
      "For members of The Church of Jesus Christ of Latter-day Saints, the JST holds unique scriptural authority and is frequently cited in teaching and theological discussions. It represents Joseph Smith's prophetic mission to clarify and restore biblical truths he believed had been lost.",
    ],
    features: [
      "Inspired revisions of passages Smith believed had been altered or mistranslated",
      "Major theological additions regarding pre-mortal existence and eternal principles",
      "Expanded narratives that clarify Jesus's teachings and mission",
      "Passages supporting distinctly LDS doctrines (eternal marriage, temple work, degrees of glory)",
      "Often used alongside other scriptures in LDS religious instruction",
      "Unique perspective on biblical chronology and historical events",
    ],
    bestFor: [
      "Latter-day Saint theological study and devotion",
      "Understanding LDS scriptural interpretation and doctrine",
      "Comparative scripture study with other English translations",
      "Exploring prophetic perspectives on biblical restoration",
    ],
    sampleVerse: {
      reference: "John 3:16 (JST)",
      text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    },
    readLink: "/bible/john/1",
  },
  {
    id: "bsb",
    abbreviation: "BSB",
    name: "Berean Standard Bible",
    fullName: "Berean Standard Bible",
    year: 2020,
    language: "English",
    type: "Literal",
    tradition: "Interdenominational",
    description:
      "The Berean Standard Bible represents a modern effort to combine accuracy with readability for contemporary readers. Produced by the Bible Hub team and released in 2020, it is based on the most reliable Hebrew and Greek manuscripts available. As a free, open-source translation, it prioritizes both scholarly precision and clear, natural English that modern audiences can understand.",
    history: [
      "The Berean Standard Bible was developed by a team of scholars associated with Bible Hub, a comprehensive online Bible resource founded in the early 2000s. The project began with the goal of creating a modern, free translation grounded in the best available biblical manuscripts while remaining accessible to contemporary readers.",
      "Rather than relying on older manuscript families like the Textus Receptus, the BSB translators worked from the latest critical editions of the Hebrew and Greek texts, drawing from sources like the Nestle-Aland Greek New Testament and the Biblia Hebraica Stuttgartensia. This approach reflects current scholarly consensus on manuscript reliability.",
      "The translation philosophy emphasizes word-for-word accuracy while using natural, modern English grammar and vocabulary. The team sought to avoid both the archaic language of older translations and the extreme paraphrasing of some contemporary versions, striking a middle path between literal precision and readability.",
      "Released in 2020, the BSB was positioned from the outset as a free, open-source Bible that anyone could use, study, share, and adapt without licensing restrictions. This commitment to open access aligns with the philosophy of many modern digital platforms and educational institutions.",
      "Though newer than many established translations, the Berean Standard Bible has gained recognition among scholars, pastors, and serious Bible students for its accuracy and its integration with the Bible Hub platform, which provides helpful study tools, commentaries, and cross-references.",
    ],
    features: [
      "Based on the most reliable and earliest Greek and Hebrew manuscripts",
      "Modern, natural English that maintains literal accuracy",
      "Completely free and open-source—no licensing restrictions",
      "Integrated with Bible Hub's comprehensive study tools and resources",
      "Consistent rendering of original language concepts and terminology",
      "Transparent translation philosophy and textual methodology",
    ],
    bestFor: [
      "Serious Bible study and research",
      "Academic and scholarly exploration",
      "Readers seeking modern language with high accuracy",
      "Sermon preparation and teaching",
    ],
    sampleVerse: {
      reference: "John 3:16 (BSB)",
      text: "For God so loved the world that He gave His one and only Son, that everyone who believes in Him shall not perish but have eternal life.",
    },
    readLink: "/bible/john/1",
  },
  {
    id: "asv",
    abbreviation: "ASV",
    name: "American Standard Version",
    fullName: "American Standard Version",
    year: 1901,
    language: "English",
    type: "Formal equivalence",
    tradition: "Protestant/Interdenominational",
    description:
      "The American Standard Version represents a watershed moment in biblical translation history. Published in 1901 as an American revision of the British Revised Version, it prioritizes word-for-word accuracy and consistency in translating key biblical terms. Its literal approach and use of 'Jehovah' for the divine name make it invaluable for serious Bible study.",
    history: [
      "Following the publication of the British Revised Version in 1881, American scholars sought to produce their own revision that would better reflect American English conventions and theological preferences. A committee of American scholars was appointed to oversee the project, resulting in the American Standard Version of 1901.",
      "The ASV translators worked from the same underlying Greek and Hebrew texts as the British revisors, but made specific adjustments to American spelling, grammar, and terminology. They also made the significant decision to use 'Jehovah' instead of 'Lord' for the Hebrew divine name (YHWH), reflecting a more literal translation approach.",
      "The translators' commitment to consistency was revolutionary—each original Hebrew or Greek word was rendered the same way throughout the text, whenever possible. This practice allows readers to trace the use of key biblical concepts through the entire Scripture, making it exceptional for word studies.",
      "Though initially popular, the ASV's strictly literal style and archaic language eventually led to other revisions, most notably the Revised Standard Version (1952). Nevertheless, the ASV remained the preferred translation among evangelical scholars and Bible students who valued accuracy over readability.",
      "Today, the ASV is in the public domain and widely available. It continues to be used by scholars, pastors, and serious Bible students who appreciate its literal precision and consistency, particularly for in-depth study of original language meanings.",
    ],
    features: [
      "Extremely literal, word-for-word translation approach",
      "Consistent rendering of original language terms throughout",
      "Uses 'Jehovah' for the divine name (YHWH) rather than 'Lord'",
      "Preserves the structure and word order of the original languages",
      "Footnotes indicating alternative readings and translation choices",
      "Ideal for in-depth word studies and original language research",
    ],
    bestFor: [
      "Detailed biblical research and word studies",
      "Academic and scholarly examination",
      "Understanding the structure of biblical languages",
      "Comparing with other English translations",
    ],
    sampleVerse: {
      reference: "John 3:16 (ASV)",
      text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth on him should not perish, but have eternal life.",
    },
    readLink: "/bible/john/1",
  },
  {
    id: "web",
    abbreviation: "WEB",
    name: "World English Bible",
    fullName: "World English Bible",
    year: 2000,
    language: "English",
    type: "Formal equivalence",
    tradition: "Interdenominational",
    description:
      "The World English Bible is a modern, free translation that updates the American Standard Version for contemporary readers. Published in 2000 and placed in the public domain, the WEB maintains the ASV's commitment to literal accuracy while using modern English that is clearer and more accessible to 21st-century audiences. It represents a continuing effort to make Scripture freely available to all.",
    history: [
      "The World English Bible project began in the 1990s as an effort to modernize the American Standard Version while preserving its translation philosophy and textual basis. The goal was to create a translation that captured the ASV's literal accuracy but with contemporary English vocabulary and grammar.",
      "The translators of the WEB built upon the ASV's foundation, replacing archaic words and phrases with modern equivalents while maintaining the same Greek and Hebrew manuscripts. Words like 'thee' and 'thou' were updated to 'you,' and verb forms were adjusted to contemporary patterns.",
      "From its inception, the WEB was designed to be freely available. The translation was placed in the public domain, meaning anyone could use, reproduce, distribute, and modify it without copyright restriction. This commitment to open access aligned with the emerging internet culture of the time.",
      "The WEB was continuously refined and updated as new manuscript evidence emerged and linguistic understanding improved. Online communities of volunteers contributed to the translation effort, making it a collaborative work rather than the product of a single institution.",
      "Today, the World English Bible is used globally by churches, missionaries, educators, and individual readers who appreciate its combination of accuracy, readability, and free accessibility. Its public domain status has made it a foundation for numerous Bible apps, websites, and printed editions.",
    ],
    features: [
      "Modern English equivalent of the literal American Standard Version",
      "Based on the same reliable Hebrew and Greek manuscripts as the ASV",
      "Completely free and in the public domain",
      "Contemporary vocabulary while preserving literal accuracy",
      "Widely used in Bible apps and online resources",
      "Updated to reflect current understanding of biblical languages",
    ],
    bestFor: [
      "Study reading in modern, clear English",
      "Digital Bible platforms and applications",
      "Readers wanting accuracy with contemporary language",
      "Educational and pastoral use without licensing concerns",
    ],
    sampleVerse: {
      reference: "John 3:16 (WEB)",
      text: "For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.",
    },
    readLink: "/bible/john/1",
  },
  {
    id: "nwt",
    abbreviation: "NWT",
    name: "New World Translation",
    fullName: "New World Translation of the Holy Scriptures",
    year: 2013,
    language: "English",
    type: "Literal",
    tradition: "Jehovah's Witnesses",
    description:
      "The New World Translation is produced by Jehovah's Witnesses and represents their theological perspective and translation principles. First published in 1961 and substantially revised in 2013, it emphasizes literal accuracy and clarity while consistently using 'Jehovah' for the divine name. The translation is known for its clear modern language and distinctive renderings that reflect Witness theology.",
    history: [
      "The New World Translation project began in the 1950s under the direction of the Watch Tower Bible and Tract Society of Pennsylvania, the governing body of Jehovah's Witnesses. A team of Witness scholars, fluent in Hebrew, Aramaic, and Greek, undertook the translation work with the goal of producing an accurate, readable version that reflected their theological understanding.",
      "First published in 1961, the New Testament marked the beginning of the translation effort. The Old Testament was published in two volumes (1965 and 1967), completing the entire Bible. From its inception, the NWT was distinctive in its use of 'Jehovah' consistently throughout the Old Testament and in the New Testament where Witness scholars believed it appeared in the original texts.",
      "The translation philosophy emphasized literal accuracy while prioritizing clarity for contemporary readers. Witness translators sought to render the original languages word-for-word where possible, but adjusted for idiomatic English. The result was a translation that was both precise and accessible to Witness communities worldwide.",
      "In 2013, the Watch Tower Society released a major new revision of the New World Translation. This updated version incorporated the latest scholarly findings regarding ancient manuscripts, refined the English to reflect modern usage, and enhanced the formatting and study aids. The revision demonstrated the Witnesses' commitment to ongoing translation refinement.",
      "The New World Translation is the official Bible of the Jehovah's Witnesses and is used extensively in their meetings, publications, and personal study. While sometimes controversial in evangelical circles due to its theological distinctives, it remains a thoughtfully produced translation grounded in scholarly principles.",
    ],
    features: [
      "Consistent use of 'Jehovah' for God's name throughout",
      "Literal, word-for-word translation approach",
      "Clear, modern English suitable for contemporary readers",
      "Extensive footnotes explaining translation choices and alternative renderings",
      "Theologically informed translation decisions reflecting Witness beliefs",
      "Beautiful formatting with study aids and cross-references",
    ],
    bestFor: [
      "Jehovah's Witness study and devotion",
      "Understanding JW scriptural interpretation",
      "Literal, clear Bible reading in modern English",
      "Comparative study with other translations",
    ],
    sampleVerse: {
      reference: "John 3:16 (NWT)",
      text: "For God loved the world so much that he gave his one and only Son, so that everyone exercising faith in him might not be destroyed but have everlasting life.",
    },
    readLink: "/bible/john/1",
  },
  {
    id: "lsv",
    abbreviation: "LSV",
    name: "Literal Standard Version",
    fullName: "Literal Standard Version",
    year: 2020,
    language: "English",
    type: "Literal",
    tradition: "Interdenominational",
    description:
      "The Literal Standard Version represents an extreme commitment to literalness in Bible translation. Published in 2020, it aims to preserve the structure, word order, and grammatical features of the original Hebrew and Greek as much as possible within English constraints. For readers seeking maximum transparency to the original languages, the LSV offers unparalleled insight into how the biblical text was constructed.",
    history: [
      "The Literal Standard Version was developed in the tradition of Robert Young's Literal Translation (1862), which pioneered an approach that prioritized preserving the original languages' structure over producing smooth English prose. The LSV team sought to create a modern equivalent that would apply Young's literal principles with contemporary English vocabulary.",
      "Rather than aim for readability or literary quality, the LSV translators chose to maintain the word order, grammatical relationships, and structural features of the original Hebrew and Greek texts. This approach means that readers encounter the biblical text much as it appears in the original languages, sentence structure and all.",
      "The translators worked from the most recent critical editions of the Hebrew Old Testament (Biblia Hebraica Stuttgartensia 5) and the Greek New Testament (NA28), ensuring they were working with the most reliable manuscripts. This scholarly foundation gave the translation solid textual credibility.",
      "Published in 2020, the LSV was released as a free resource available online. Though it lacks some of the study aids and extensive commentary systems found in more popular translations, its unique approach has attracted serious students, Greek and Hebrew scholars, and those seeking to understand the biblical text in its original construction.",
      "The LSV has found particular favor among pastors preparing messages, scholars writing commentaries, and serious Bible students who use it as a reference alongside other, more readable translations. Its transparent approach to original language structure makes it invaluable for those wanting to see 'how it was actually written.'",
    ],
    features: [
      "Extremely literal—preserves original language word order and structure",
      "Word-for-word rendering that shows grammatical relationships",
      "Based on the most recent critical Hebrew and Greek manuscripts",
      "Designed to be a 'study aid' alongside more readable translations",
      "Reveals how the original text was actually constructed",
      "Particularly valuable for comparing with other English translations",
    ],
    bestFor: [
      "Advanced biblical study and research",
      "Understanding original language structure and grammar",
      "Sermon preparation requiring deep textual insight",
      "Comparing with dynamic translations to understand translation philosophy",
    ],
    sampleVerse: {
      reference: "John 3:16 (LSV)",
      text: "for God so loved the world, so that His only-begotten Son He gave, that everyone who is believing in Him may not perish, but may have life eternal.",
    },
    readLink: "/bible/john/1",
  },
  {
    id: "dra",
    abbreviation: "DRA",
    name: "Douay-Rheims American",
    fullName: "Douay-Rheims American Bible (Challoner Revision)",
    year: 1899,
    language: "English",
    type: "Formal equivalence",
    tradition: "Catholic",
    description:
      "The Douay-Rheims American Bible represents the Catholic English-speaking tradition's approach to Scripture. Based on the Latin Vulgate rather than the original languages, it includes the Deuterocanonical books accepted by the Catholic Church. The translation combines formal, reverent language with a theological perspective shaped by Catholic doctrine and tradition.",
    history: [
      "The original Douay-Rheims translation was produced by Catholic scholars at the English College in Douai, France, in the late 16th and early 17th centuries. The Old Testament was published in 1609-1610 and the New Testament in 1582. This translation was created to provide English Catholics with Scripture in their own language, following the Council of Trent's affirmation of the Latin Vulgate as the authoritative text.",
      "Rather than translating directly from Hebrew and Greek, the Douay-Rheims translators worked from the Latin Vulgate, the official Catholic Bible since Jerome's time. This approach reflected the Catholic Church's position on biblical authority and the role of the Vulgate in Church tradition and teaching.",
      "In the 1700s, Bishop Richard Challoner undertook a major revision of the Douay-Rheims text to modernize the language while preserving its theological integrity. His revisions eliminated archaic terminology and improved readability without changing the underlying translation philosophy or doctrinal content.",
      "The American revision of 1899 updated Challoner's work further, adapting British English to American conventions and incorporating improvements in typography and presentation. This version became the standard Catholic Bible in the United States for over half a century.",
      "The Douay-Rheims American remains significant for Catholic communities and scholars interested in the Catholic biblical tradition. Though it has been supplemented by newer translations like the New American Bible, it continues to hold a place of respect in Catholic heritage and is preferred by many traditional Catholics for its formal beauty and theological consistency.",
    ],
    features: [
      "Translated from the Latin Vulgate, reflecting Catholic tradition",
      "Includes Deuterocanonical books (7 Old Testament books and passages)",
      "Formal, reverent English suitable for liturgical use",
      "Theologically informed translation reflecting Catholic doctrinal perspective",
      "Challoner revision maintains accessibility while preserving authenticity",
      "Extensive footnotes explaining theological and textual matters",
    ],
    bestFor: [
      "Catholic devotional reading and prayer",
      "Understanding Catholic scriptural tradition and theology",
      "Liturgical and formal religious contexts",
      "Historical study of English Bible translation",
    ],
    sampleVerse: {
      reference: "John 3:16 (DRA)",
      text: "For God so loved the world, as to give his only begotten Son; that whosoever believeth in him, may not perish, but may have life everlasting.",
    },
    readLink: "/bible/john/1",
  },
];

export function getAllTranslations(): Translation[] {
  return translations;
}

export function getTranslationById(id: string): Translation | undefined {
  return translations.find((t) => t.id === id);
}
