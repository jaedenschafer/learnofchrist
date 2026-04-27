import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 25 — The Singers and Musicians Organized for Temple Service
 *
 * David and the captains of the army set apart the sons of Asaph, Heman,
 * and Jeduthun to prophesy with instruments in the house of the Lord.
 * These 288 musicians, organized into 24 courses of equal rank and skill,
 * represent a priesthood of praise. Whether teacher or scholar, great or
 * small, each minister is assigned by lot — no preference, no hierarchy
 * within the sacred art of prophecy through song. The chapter itself is a
 * list turned into a song: Hebrew names that are themselves prayers
 * of supplication and thanksgiving. In this chapter, David establishes music
 * and prophecy not as entertainment, but as the foundation of worship in the
 * house of God.
 */
export const CHRONICLES_1_25: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 25,

  intros: [
    'The book of 1 Chronicles, written after the exile, is concerned with one great theme: the restoration of true worship in the temple. It is a book of genealogies and lists, but behind every name lies a theological claim. When David establishes the musicians and singers who will serve in the house of the Lord, he is not simply organizing an entertainment guild. He is creating a priesthood of praise — men and women whose calling is to speak to God and for God through music, through instruments, through the voice.',
    'In this chapter, we encounter the three great families of musicians: the sons of Asaph, the sons of Heman, and the sons of Jeduthun. These names appear throughout Scripture — not only as administrators of music, but as authors of Psalms. The Psalms attributed to Asaph (73–83) and to the sons of Korah (associated with Heman) are hymns of theological depth and spiritual intensity. This chapter announces that the people who will sing Israel into the presence of God are themselves named, known, and accountable. And remarkably, they are assigned their duties by casting lots — a method that ensures no human preference, no favoritism, no ranking of skill over dedication.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 25',
    quote:
      'The 288 chief musicians, organized into 24 courses, stand in a priesthood of praise. Equal in lot, equal in calling: whether teacher or scholar, whether great or small, each voice is set apart to prophesy with instrument in the house of the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 25 · Study Guide',
  },

  sections: [
    /* ─── 1 Chronicles 25:1–5 — The Music Ministry as Prophecy ────────────── */
    {
      ref: '1 Chronicles 25:1–5',
      title: 'The Music Ministry as Prophecy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 1,
              spans: [
                t('Moreover David and the captains of the host '),
                hg('separated to the service', 'music-prophecy-separated'),
                t(' of the sons of Asaph, and of Heman, and of Jeduthun, who should '),
                hg('prophesy with harps, with psalteries, and with cymbals', 'music-prophecy-instruments'),
                t(': and the number of the workmen according to their service was:'),
              ],
            },
            plain(2, 'Of the sons of Asaph; Zaccur, and Joseph, and Nethaniah, and Asarelah, the sons of Asaph under the hands of Asaph, which prophesied according to the order of the king.'),
            plain(3, 'Of Jeduthun: the sons of Jeduthun; Gedaliah, and Zeri, and Jeshaiah, Hashabiah, and Mattithiah, six, under the hands of their father Jeduthun, who prophesied with a harp, to give thanks and to praise the Lord.'),
            plain(4, 'Of Heman: the sons of Heman; Bukkiah, Mattaniah, Uzziel, Shebuel, and Jerimoth, Hananiah, Hanani, Eliathah, Giddalti, and Romamtiezer, Joshbekashah, Mallothi, Hothir, and Mahazioth:'),
            {
              number: 5,
              spans: [
                t('All these were the sons of Heman the king&apos;s seer in the words of God, to '),
                hg('lift up the horn', 'music-lift-horn'),
                t('. And God gave to Heman fourteen sons and three daughters.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'music-prophecy-separated',
          html:
            'David "separates to the service" — this is not casual entertainment or ornament. This is ordination. The word suggests sacred work, the kind of dedication you would see in the setting apart of the priesthood. Music is not secondary to worship; it is itself a form of ministry that requires the same intentionality and consecration as any other sacred work in the temple.',
        },
        {
          kind: 'commentary',
          id: 'music-prophecy-instruments',
          html:
            'The musicians are to "prophesy with harps, with psalteries, and with cymbals." This is the crucial phrase: prophecy and music are one and the same. To prophesy means to speak the word of God, to bring the presence and will of God into the assembly. These musicians do that not through words alone, but through sound — through the resonance of stringed instruments and the percussion of cymbals. They are prophets just as surely as any who speaks in the name of the Lord.',
        },
        {
          kind: 'hebrew',
          id: 'nabaa-prophesy',
          title: 'Naba — "To Prophesy"',
          script: 'נָבָא',
          translit: '<strong>Naba</strong> · to prophesy; to speak forth; to utter the word',
          description:
            'The Hebrew verb "naba" means to utter, to proclaim, to speak forth the word of God. Prophets — navi&apos;im — are speakers of God&apos;s word. By using "naba" of the musicians, the text elevates music to the same level as verbal prophecy. The singer who proclaims God&apos;s praise through song is as much a prophet as the man who speaks God&apos;s word in judgment or mercy.',
        },
        {
          kind: 'commentary',
          id: 'music-lift-horn',
          html:
            'Heman is described as serving "to lift up the horn." The horn — the shofar, the ram&apos;s horn — was the instrument of summons and celebration in Israel. To "lift up the horn" is to call the people to gather, to announce a festival, to declare God&apos;s mighty acts. Music is not background; it is a summoning, a calling forth.',
        },
        {
          kind: 'carry',
          html:
            'Do you think of music as peripheral to worship, or as central to it? The language of prophecy reminds us that the songs we sing — whether in church, at home, or in our own hearts — have power. They are not decoration. They are utterance. They are the voice of the soul reaching toward God. What would it mean to sing, this day, as a prophet speaks — not for the ears of others, but for the ear of heaven?',
        },
        {
          kind: 'reflection',
          id: 'music-prophecy',
          prompt: 'When have you experienced music as something more than entertainment — as something that opened you to God&apos;s presence or spoke truth to your condition?',
        },
      ],
    },

    /* ─── 1 Chronicles 25:6–8 — The 288 Cunning Musicians ────────────────── */
    {
      ref: '1 Chronicles 25:6–8',
      title: 'The 288 Chief Musicians',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 6,
              spans: [
                t('All these were under the hands of their father for '),
                hg('song in the house of the Lord', 'song-house-lord'),
                t(', with cymbals, psalteries, and harps, for the service of the house of God, according to the king&apos;s order to Asaph, Jeduthun, and Heman.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('So the number of them, with their brethren that were '),
                hg('instructed in the songs of the Lord', 'instructed-songs'),
                t(', even all that were '),
                hy('cunning', 'cunning-musicians'),
                t(', was two hundred fourscore and eight.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And they '),
                hg('cast lots, ward against ward', 'lots-wards'),
                t(', as well the small as the great, the teacher as the scholar.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'song-house-lord',
          html:
            'These musicians do not belong to the king or to themselves; they belong to "the house of the Lord." Their work is not for earthly honor or payment, though no doubt they were sustained by the temple provisions. Their primary audience is heaven. Their work is coram Deo — before the face of God.',
        },
        {
          kind: 'commentary',
          id: 'instructed-songs',
          html:
            'The musicians are "instructed in the songs of the Lord." This means they have been trained, disciplined, and shaped in the sacred tradition of Israel&apos;s worship. Music is not intuitive artistry alone; it is a craft that requires teaching and submission to a tradition that precedes and exceeds the individual.',
        },
        {
          kind: 'hebrew',
          id: 'yadea-cunning',
          title: 'Yodea — "Cunning" or "Knowing/Skilled"',
          script: 'יוֹדְעִים',
          translit: '<strong>Yodea</strong> · knowing; skillful; experienced',
          description:
            'The Hebrew word translated "cunning" is actually "yodea" — those who know, who understand, who are experienced and skillful. These are not merely capable singers; they are masters of their craft, people who have spent years in the apprenticeship of sacred song.',
        },
        {
          kind: 'commentary',
          id: 'lots-wards',
          html:
            'The 288 musicians — 12 groups of 24 — cast lots to determine their courses, or wards, the times when they serve. But the remarkable thing is this: lots are cast without regard to reputation or rank. "The small as the great, the teacher as the scholar" — the lottery does not discriminate. The most senior musician might draw a less prestigious course; the newest student might be appointed to the chief position. Everyone is equal before the lot.',
        },
        {
          kind: 'hebrew',
          id: 'goral-lot',
          title: 'Goral — "Lot" or "Portion"',
          script: 'גּוֹרָל',
          translit: '<strong>Goral</strong> · lot; portion; that which falls to one&apos;s share',
          description:
            'The lot is not a random chance event in Scripture; it is the mechanism by which God reveals His will. When Israel casts lots, they are saying: "Lord, choose. Let us not choose by our own preference, but by Your will." The casting of lots submits human ambition and ranking to the divine ordering of things.',
        },
        {
          kind: 'carry',
          html:
            'There is a profound lesson here for any community or workplace: equal distribution, equal honor, equal lot before God eliminates the corrosive effects of favoritism and rank. Whether you are the most experienced or the newest member, whether you have done this work for decades or are just beginning, the lot says: you are equally valued. You will not be passed over. You will not be promoted by flattery or held back by obscurity. Your course in this work is determined not by politics or reputation, but by the impartial will of heaven.',
        },
        {
          kind: 'reflection',
          id: 'equal-lots',
          prompt: 'Do you trust in equal distribution of opportunity and honor, or do you tend to see rank and seniority as deserved? What would change if your role and calling were determined by lot rather than by ambition?',
        },
      ],
    },

    /* ─── 1 Chronicles 25:9–31 — The 24 Courses of Musicians ────────────── */
    {
      ref: '1 Chronicles 25:9–31',
      title: 'The 24 Courses Cast and Named',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(9, 'Now the first lot came forth for Asaph to Joseph: the second to Gedaliah, who with his brethren and sons were twelve:'),
            plain(10, 'The third to Zaccur, he, his sons, and his brethren, were twelve:'),
            plain(11, 'The fourth to Izri, he, his sons, and his brethren, were twelve:'),
            plain(12, 'The fifth to Nethaniah, he, his sons, and his brethren, were twelve:'),
            plain(13, 'The sixth to Bukkiah, he, his sons, and his brethren, were twelve:'),
            plain(14, 'The seventh to Jesharelah, he, his sons, and his brethren, were twelve:'),
            plain(15, 'The eighth to Jeshaiah, he, his sons, and his brethren, were twelve:'),
            plain(16, 'The ninth to Mattaniah, he, his sons, and his brethren, were twelve:'),
            plain(17, 'The tenth to Shimei, he, his sons, and his brethren, were twelve:'),
            plain(18, 'The eleventh to Azareel, he, his sons, and his brethren, were twelve:'),
            plain(19, 'The twelfth to Hashabiah, he, his sons, and his brethren, were twelve:'),
            plain(20, 'The thirteenth to Shubael, he, his sons, and his brethren, were twelve:'),
            plain(21, 'The fourteenth to Mattithiah, he, his sons, and his brethren, were twelve:'),
            plain(22, 'The fifteenth to Jeremoth, he, his sons, and his brethren, were twelve:'),
            plain(23, 'The sixteenth to Hananiah, he, his sons, and his brethren, were twelve:'),
            plain(24, 'The seventeenth to Joshbekashah, he, his sons, and his brethren, were twelve:'),
            plain(25, 'The eighteenth to Hanani, he, his sons, and his brethren, were twelve:'),
            plain(26, 'The nineteenth to Mallothi, he, his sons, and his brethren, were twelve:'),
            plain(27, 'The twentieth to Eliathah, he, his sons, and his brethren, were twelve:'),
            plain(28, 'The one and twentieth to Hothir, he, his sons, and his brethren, were twelve:'),
            plain(29, 'The two and twentieth to Giddalti, he, his sons, and his brethren, were twelve:'),
            plain(30, 'The three and twentieth to Mahazioth, he, his sons, and his brethren, were twelve:'),
            {
              number: 31,
              spans: [
                t('The four and twentieth to Romamtiezer, he, his sons, and his brethren, were twelve.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'twenty-four-courses',
          html:
            'The 24 courses correspond to the 24 courses of the priesthood in 1 Chronicles 24. Just as the priests were divided into rotating weeks of service, so the musicians are organized. Each course has 12 musicians — 12 times 24 equals 288, the full number of chief musicians in the temple. This order is not arbitrary; it mirrors and supports the structure of priestly service. Music is not independent of the priesthood; it is itself a priestly work.',
        },
        {
          kind: 'commentary',
          id: 'sons-brethren',
          html:
            'Each course consists of a leader plus "his sons, and his brethren" — a family unit, but also a guild. The repetition "were twelve" underscores that every course, regardless of the fame of its leader, is equal in size and in rank. Joseph from Asaph&apos;s line is first, Romamtiezer from Heman&apos;s line is twenty-fourth. But each has twelve. Each is essential.',
        },
        {
          kind: 'hebrew',
          id: 'shir-song',
          title: 'Shir — "Song"',
          script: 'שִׁיר',
          translit: '<strong>Shir</strong> · song; psalm; a composition of praise',
          description:
            'The Hebrew word "shir" appears throughout these chapters. A song is not merely music; it is an utterance of the heart, a form of speech. When the musicians create songs, they are creating speech directed toward God and for God. The song is the medium through which the worshiper speaks and the Spirit speaks.',
        },
        {
          kind: 'carry',
          html:
            'What strikes you about this list? It is a recitation of names — 24 leaders and their courses, each equal, each appointed, each given their portion. But more than that, it is a prayer. The names themselves are often laden with meaning. To read the list aloud, as the ancient Israelites may have done, was to speak a prayer of petition and thanksgiving. The very existence of the list — the knowledge that each person is named, known, and set apart — is itself a form of praise.',
        },
        {
          kind: 'reflection',
          id: 'named-courses',
          prompt: 'When your name is called, when you are named for a role or a purpose, what stirs in your heart? What does it mean to be known by name in the work of God?',
        },
      ],
    },

    /* ─── Heman&apos;s Remarkable Naming — Prayer as Genealogy ──────────── */
    {
      ref: '1 Chronicles 25:4–5, 16–23',
      title: 'Heman&apos;s Sons: A Prayer in Names',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(4, 'Of Heman: the sons of Heman; Bukkiah, Mattaniah, Uzziel, Shebuel, and Jerimoth, Hananiah, Hanani, Eliathah, Giddalti, and Romamtiezer, Joshbekashah, Mallothi, Hothir, and Mahazioth:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heman-sons-prayer',
          html:
            'Heman is said to have had 14 sons and 3 daughters (verse 5). But the sons are remarkable not for their number, but for their names. Many of them are not ordinary Hebrew names. They are phrases — short prayers, brief utterances of supplication or thanksgiving. Romamti-ezer means "I have exalted help." Mahazioth means "visions." Giddalti means "I have magnified." These names are prayers spoken over the sons: declarations of what the parents believe God will do, what they are asking from heaven.',
        },
        {
          kind: 'hebrew',
          id: 'romamti-ezer',
          title: 'Romamti-ezer — "I Have Exalted Help"',
          script: 'רוֹמַמְתִּי־אֵזֶר',
          translit: '<strong>Romamti-ezer</strong> · I have exalted [my] help',
          description:
            'The name combines "romamti" (I have exalted, I have lifted up) with "ezer" (help, aid). To name a child this is to declare: "I lift up my cry for help to the Most High. My help comes from God." The name is a confession of faith, spoken at birth, spoken daily when the child is called.',
        },
        {
          kind: 'hebrew',
          id: 'mahazioth',
          title: 'Mahazioth — "Visions"',
          script: 'מַהַזְיוֹת',
          translit: '<strong>Mahazioth</strong> · visions; revelations',
          description:
            'Mahazioth is close to "hazut," the word for vision or revelation. To name a child Mahazioth is to pray: "May God grant visions. May my son see and know the mysteries of God." In a family of musicians and prophets, the name is a prayer for prophetic sight — the ability to perceive what God is doing.',
        },
        {
          kind: 'carry',
          html:
            'The naming of Heman&apos;s children teaches us that names are not mere labels. They are prayers. They are prophecies spoken into a child&apos;s life. When we name children, when we call people by their names, we are speaking over them, shaping them, calling forth in them what we hope and believe God will accomplish. Do you know the meanings of your own name, or the names of those you love? What prayer might your own name be?',
        },
        {
          kind: 'reflection',
          id: 'prayer-names',
          prompt: 'Think of your own name or the name of someone close to you. What prayer or hope might be embedded in that name? What does it mean that your name is spoken, remembered, and called?',
        },
      ],
    },

    {
      title: 'Christ Connection — The Singer in the Midst',
      blocks: [
        {
          kind: 'christ',
          id: 'christ-singer-midst',
          title: 'Christ Connection — The Singer in the Midst',
          html: 'Hebrews 2:11–12 quotes David&apos;s Psalm 22:22 of Christ: &quot;I will declare thy name unto my brethren, in the midst of the church will I sing praise unto thee.&quot; The musicians of 1 Chronicles 25 prophesied with their songs. In the New Testament, Christ Himself is the Singer in the midst of the assembly — both teaching the Father&apos;s name and leading the worship.',
        },
        {
          kind: 'commentary',
          id: 'christ-ephesians-song',
          html: 'Paul echoes in Ephesians 5:19, urging believers to be &quot;filled with the Spirit; speaking to yourselves in psalms and hymns and spiritual songs.&quot; Music and the Spirit are bound together. To sing is to move in the Spirit; to sing is to prophesy, just as the musicians of 1 Chronicles 25 prophesied. When we sing we yield to the voice of Christ who sings through us and in us.',
        },
        {
          kind: 'commentary',
          id: 'equal-teacher-scholar',
          html: 'Paul writes: &quot;There is neither male nor female: for ye are all one in Christ Jesus&quot; (Galatians 3:28). The 1 Chronicles text echoes this striking equality: &quot;as well the small as the great, the teacher as the scholar.&quot; In the eyes of heaven, in the casting of the lot, there is no rank. The most skilled musician and the newest student are equal. Both have a voice. Both will sing.',
        },
      ],
    },
  ],
};
