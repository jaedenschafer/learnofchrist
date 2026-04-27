import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 16 — David&apos;s Psalm of Thanksgiving
 *
 * The ark of God is brought into Jerusalem and placed in the tent David has
 * prepared for it. Burnt sacrifices and peace offerings are made before God.
 * David blesses the people and distributes food to all Israel. Then he appoints
 * the Levites to minister before the ark, and he delivers a psalm of
 * thanksgiving — a composite of Psalms 105, 96, and 106 that recounts God&apos;s
 * mighty deeds, calls the nations to worship, and affirms the eternal mercy of
 * the Lord. In this chapter, a king learns what it means to lead a people in
 * gratitude and praise.
 */
export const CHRONICLES_1_16: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 16,

  intros: [
    'After years of wandering, David has brought the ark of God to Jerusalem — the sign of God&apos;s presence among His people. The moment is sacred. The ark is set in the tent David has prepared for it, offerings are made, the people are blessed, and food is distributed to every soul in Israel. But David does not simply perform the ceremonies and move on. He understands that what has been accomplished — the gathering of the people, the centering of worship on the ark, the restoration of the covenant — must be remembered and sung. So he delivers a psalm, a song of thanksgiving that will teach Israel what it means to live in gratitude to God.',
    'The psalm itself is a weaving together of three separate psalms from the collection we know as the Book of Psalms. It opens with "Give thanks unto the Lord," moves into the cosmic proclamation "The Lord reigneth," and closes with the benediction "His mercy endureth for ever." Within it lies the whole arc of what David has learned: that gratitude is a discipline, that the Lord&apos;s reign is not merely a Jewish reality but the foundation of all creation, and that the mercy of God has no end. This is the first psalm formally sung in Israel&apos;s worship as a community, and it sets the tone for what temple worship will become — a rehearsal of God&apos;s faithfulness and an invitation to the nations to join in His praise.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 16',
    quote:
      'David delivered a psalm of thanksgiving to teach Israel that gratitude is the heart of worship, that the Lord reigns over all creation, and that His mercy endureth forever. In this moment, a king learns to lead his people in praise.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 16 · Study Guide',
  },

  sections: [
    /* ─── 1 Chronicles 16:1–3 — The Ark Brought In, Offerings Made ──────── */
    {
      ref: '1 Chronicles 16:1–3',
      title: 'The Ark in the Tent · Offerings and Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(1, 'So they brought the ark of God, and set it in the midst of the tent that David had pitched for it: and they offered burnt sacrifices and peace offerings before God.'),
            plain(2, 'And when David had made an end of offering the burnt offerings and the peace offerings, he blessed the people in the name of the Lord.'),
            plain(3, 'And he dealt to every one of Israel, both man and woman, to every one a loaf of bread, and a good piece of flesh, and a flagon of wine.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ark-tent-david',
          html:
            'The ark, the symbol of God&apos;s covenant presence, is placed not in a permanent temple but in a tent that David has pitched for it. This is provisional, temporary — a king&apos;s makeshift tabernacle. Yet David treats it with the full solemnity of worship. He does not merely place it; he surrounds it with sacrifices and blessing. The burnt offering (whole offering, consumed) and the peace offering (shared meal, communion) frame the act as both a gift to God and an invitation to Israel to participate in the presence of the Lord.',
        },
        {
          kind: 'commentary',
          id: 'blessed-people-name',
          html:
            'David does not pronounce a blessing in his own authority. He blesses the people "in the name of the Lord." This is the language of a priest-king, one who stands between God and the people and speaks what God would speak. The blessing is not David&apos;s opinion; it is the Lord&apos;s word through David&apos;s mouth.',
        },
        {
          kind: 'commentary',
          id: 'bread-flesh-wine',
          html:
            'The distribution of bread, meat, and wine to every person — man and woman alike — is an act of radical inclusivity. No one is left out. A king is not one who hoards abundance but one who ensures that his entire people share in the joy of the covenant. The meal is a covenant meal, binding the people together in celebration of God&apos;s presence among them.',
        },
        {
          kind: 'carry',
          html:
            'When we experience God&apos;s presence or blessing in our lives, what do we do with it? David&apos;s first move is not to consolidate power or build monuments. It is to make offerings, to speak blessing, and to share abundance. This tells us something about mature faith: it moves outward, toward others. It draws people into the joy of what God has done. Have you shared what God has given you with those around you?',
        },
        {
          kind: 'reflection',
          id: 'ark-brought-in',
          prompt: 'David&apos;s response to God&apos;s presence is to gather the people, make offerings, bless them, and share food. When you have felt the presence of God in your life, how have you shared that joy with others?',
        },
      ],
    },

    /* ─── 1 Chronicles 16:4–6 — The Levites Appointed to Minister ────────── */
    {
      ref: '1 Chronicles 16:4–6',
      title: 'The Musicians Appointed · Asaph and the Singers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(4, 'And he appointed certain of the Levites to minister before the ark of the Lord, to record, and to thank, and to praise the Lord God of Israel:'),
            plain(5, 'Asaph the chief, and next to him Zechariah, Jeiel, and Shemiramoth, and Jehiel, and Mattithiah, and Eliab, and Benaiah, and Obed-edom: and Jeiel with psalteries and with harps; but Asaph made a sound with cymbals;'),
            plain(6, 'Benaiah also and Jahaziel the priests with trumpets continually before the ark of the covenant of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'levites-minister-record-thank',
          html:
            'David appoints the Levites not merely to perform music, but to "record, to thank, and to praise." These are three sacred functions. To record is to make a permanent mark — these songs will be remembered, taught, and sung again. To thank is to turn the heart toward God in gratitude. To praise is to declare the character and deeds of God. These are not entertainment; they are the work of the covenant community.',
        },
        {
          kind: 'commentary',
          id: 'asaph-chief-musicians',
          html:
            'Asaph is the chief, the leader of this new order of singers. By tradition, many of the psalms in the Book of Psalms are ascribed to Asaph — psalms of lament, psalms of praise, psalms that wrestle with God&apos;s justice. Asaph becomes the voice of Israel&apos;s prayer and worship. The naming of musicians — Zechariah, Jeiel, Shemiramoth, Jehiel, Mattithiah, Eliab, Benaiah, Obed-edom — is an unusual detail in Scripture, a sign of their importance. This is not a moment to be forgotten.',
        },
        {
          kind: 'commentary',
          id: 'instruments-cymbals-trumpets',
          html:
            'The instruments are specified: psalteries (harps), harps, and trumpets. The harp is the instrument of intimate prayer and lament. The trumpet is the instrument of proclamation and covenant. Cymbals mark the rhythm, the steadiness of praise. Together, they create a sound that is both personal and cosmic, both individual prayer and universal proclamation.',
        },
        {
          kind: 'hebrew',
          id: 'todah-thanksgiving',
          title: 'Todah — "Thanksgiving" or "Praise-Offering"',
          script: 'תּוֹדָה',
          translit: '<strong>Todah</strong> · thanksgiving; a thank-offering made in the temple',
          description:
            'The word todah carries the meaning of thanksgiving as both a grateful emotion and a formal act of worship. When Israel brings a todah offering, they bring a sacrifice and a song — the whole being an offering of gratitude. The todah is not payment for a blessing; it is a response to grace already given. In this chapter, the Levites become the singers of Israel&apos;s todah, the formal gratitude of the covenant people.',
        },
        {
          kind: 'carry',
          html:
            'The appointment of musicians to minister before the ark tells us that worship is not peripheral to the life of God&apos;s people — it is central. A king does not appoint his court musicians as a luxury; he appoints them as a necessity. Gratitude, praise, and the remembering of God&apos;s deeds are the heart of a community&apos;s life. What place does thanksgiving have in your own rhythm of life?',
        },
        {
          kind: 'reflection',
          id: 'musicians-appointed',
          prompt: 'David appointed musicians to minister before the ark, to record, thank, and praise God continually. What role does gratitude and praise play in your own spiritual life? How do you make it a regular practice?',
        },
      ],
    },

    /* ─── 1 Chronicles 16:7–18 — Give Thanks and Call Upon His Name ────── */
    {
      ref: '1 Chronicles 16:7–18',
      title: 'The Psalm Begins · "Give Thanks unto the Lord"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(7, 'Then on that day David delivered first this psalm to thank the Lord into the hand of Asaph and his brethren.'),
            {
              number: 8,
              spans: [
                t('Give thanks unto the Lord, '),
                hg('call upon his name', 'call-upon-name'),
                t(', make known his deeds among the people.'),
              ],
            },
            plain(9, 'Sing unto him, sing psalms unto him, talk ye of all his wondrous works.'),
            plain(10, 'Glory ye in his holy name: let the heart of them rejoice that seek the Lord.'),
            {
              number: 11,
              spans: [
                t('Seek the Lord and '),
                hg('his strength', 'seek-strength'),
                t(', seek his face continually.'),
              ],
            },
            plain(12, 'Remember his marvellous works that he hath done, the wonders of his mouth, and the judgments of his mouth;'),
            plain(13, 'O ye seed of Israel his servant, ye children of Jacob, his chosen ones.'),
            plain(14, 'He is the Lord our God; his judgments are in all the earth.'),
            plain(15, 'Be ye mindful always of his covenant; the word which he commanded to a thousand generations;'),
            plain(16, 'Even of the covenant which he made with Abraham, and of his oath unto Isaac;'),
            plain(17, 'And hath confirmed the same to Jacob for a law, and to Israel for an everlasting covenant,'),
            plain(18, 'Saying, Unto thee will I give the land of Canaan, the lot of your inheritance;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'call-upon-name',
          html:
            'The psalm opens with the command to give thanks and call upon the Lord&apos;s name. To call upon His name is to invoke His character — to speak His name as a prayer, a cry, an appeal. The name of God is not a label; it is a revelation of who He is. When Israel calls upon the Lord&apos;s name, they are calling upon the God who is faithful, merciful, and present.',
        },
        {
          kind: 'commentary',
          id: 'make-known-deeds',
          html:
            'The psalm calls Israel to "make known his deeds among the people." This is testimony. This is missionary impulse. Israel is not to keep God&apos;s works private, for the family alone. They are to declare them publicly, so that all peoples may know what God has done. This is the beginning of universal mission — the understanding that God&apos;s works are for the whole world to witness.',
        },
        {
          kind: 'commentary',
          id: 'seek-strength',
          html:
            'The invitation to "seek the Lord and his strength" is an invitation to seek not comfort but power — God&apos;s power, God&apos;s might, God&apos;s ability to accomplish what seems impossible. The strength of the Lord is not the strength of a warrior; it is the strength to create, to judge, to save, to sustain. And this seeking is not a one-time act but a continual practice: "seek his face continually."',
        },
        {
          kind: 'commentary',
          id: 'covenant-abraham',
          html:
            'The psalm then moves into the history of the covenant. From the general call to thanksgiving, it narrows to Israel&apos;s particular story: the covenant with Abraham, confirmed to Isaac, made law for Jacob, and now an everlasting covenant for Israel. The promise to Abraham — that his offspring will possess the land of Canaan — is the thread that binds all of Israel&apos;s history together. Every generation inherits this covenant.',
        },
        {
          kind: 'christ',
          id: 'christ-covenant-all-nations',
          title: 'Christ Connection — The Covenant Fulfilled in All Nations',
          html:
            'The psalm speaks of making God&apos;s deeds known "among the people" — a vision of universal worship and knowledge of God. The New Testament reveals that this covenant, made to Abraham, finds its fulfillment in Christ. Paul writes: "Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ" (Galatians 3:16). The promised land, the enduring covenant, the call to all nations — all find their ultimate meaning in Christ, who is the seed of Abraham and the one through whom God&apos;s mercy extends to all who believe, whether Jew or Gentile, male or female (Galatians 3:28–29).',
        },
        {
          kind: 'carry',
          html:
            'The psalm teaches us that gratitude begins with remembering. When Israel remembers what God has done — created the heavens, sustained them in the wilderness, kept covenant with their fathers — gratitude naturally follows. What has God done in your own life that you have perhaps forgotten? What promises has He kept that you could rehearse and be grateful for?',
        },
        {
          kind: 'reflection',
          id: 'give-thanks',
          prompt: 'The psalm calls us to "make known his deeds among the people" — to testify. Whose life has been changed by the deeds God has done in your life? How could you "make known" what God has done?',
        },
      ],
    },

    /* ─── 1 Chronicles 16:19–36 — "The Lord Reigneth" · Universal Praise ── */
    {
      ref: '1 Chronicles 16:19–36',
      title: '"The Lord Reigneth" · All Creation Declares His Reign',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(19, 'When ye were but few, even a few, and strangers in it.'),
            plain(20, 'And when they went from nation to nation, and from one kingdom to another people;'),
            plain(21, 'He suffered no man to do them wrong: yea, he reproved kings for their sakes,'),
            plain(22, 'Saying, Touch not mine anointed, and do my prophets no harm.'),
            plain(23, 'Sing unto the Lord, all the earth; shew forth from day to day his salvation.'),
            {
              number: 24,
              spans: [
                t('Declare his glory among the heathen; his marvellous works among '),
                hg('all nations', 'declare-all-nations'),
                t('.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('For great is the '),
                hp('Lord', 'great-lord'),
                t(', and greatly to be praised: he also is to be feared above all gods.'),
              ],
            },
            plain(26, 'For all the gods of the people are idols: but the Lord made the heavens.'),
            plain(27, 'Glory and honour are in his presence; strength and gladness are in his place.'),
            plain(28, 'Give unto the Lord, ye kindreds of the people, give unto the Lord glory and strength.'),
            plain(29, 'Give unto the Lord the glory due unto his name: bring an offering, come before him: worship the Lord in the beauty of holiness.'),
            {
              number: 30,
              spans: [
                t('Fear before him, all the earth: the world also shall be stable, that it be not moved. '),
                hg('Let the heavens be glad, and let the earth rejoice', 'heavens-glad'),
                t(': and let men say among the nations, The Lord reigneth.'),
              ],
            },
            plain(31, 'Let the sea roar, and the fulness thereof: let the fields rejoice, and all that is therein.'),
            plain(32, 'Then shall the trees of the wood sing out at the presence of the Lord, because he cometh to judge the earth.'),
            {
              number: 33,
              spans: [
                t('O '),
                hy('give thanks unto the Lord', 'thanks-again'),
                t('; for he is good; for his mercy endureth for ever.'),
              ],
            },
            plain(34, 'Say ye, Save us, O God of our salvation, and gather us together, and deliver us from the heathen, that we may give thanks to thy holy name, and glory in thy praise.'),
            plain(35, 'Blessed be the Lord God of Israel for ever and ever. And all the people said, Amen, and praised the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'great-lord',
          html:
            'At the center of the psalm stands the declaration: "Great is the Lord, and greatly to be praised." This is the theological heart. The greatness of God is not in His size or power alone, though He possesses both. His greatness is in His worthiness to be praised. He is great because He is faithful to the covenant, because He protects His chosen, because He rules with justice, and because His mercy endures forever.',
        },
        {
          kind: 'commentary',
          id: 'declare-all-nations',
          html:
            'The psalm calls on all peoples — not just Israel — to declare His glory "among all nations." This is remarkable. The God of Israel is not a tribal deity; His works are meant to be known by all peoples. His salvation is not for one nation alone but for all who would acknowledge His reign. This vision of universal recognition will reach its fullness in the New Testament, when believers from every nation, tribe, and language bow before the throne of God.',
        },
        {
          kind: 'commentary',
          id: 'heavens-glad',
          html:
            'The psalm then calls all of creation to rejoice: "Let the heavens be glad, and let the earth rejoice." The Lord&apos;s reigneth — this is not merely a matter of doctrine but of cosmic reality. When God reigns, the heavens are glad. The trees sing. The fields rejoice. All creation participates in the joy of His rule because His rule brings order, stability, and justice to all things.',
        },
        {
          kind: 'hebrew',
          id: 'malak-reign',
          title: 'Malak — "Reign" or "Be King"',
          script: 'מַלַךְ',
          translit: '<strong>Malak</strong> · to reign; to be king; to rule',
          description:
            'The verb malak appears again and again in the Psalter. The Lord malaks — reigns — over all things. It is not a weak word; it carries the sense of active rule, of sovereign governance. When the psalm declares "The Lord reigneth," it is affirming that God is not a distant deity but an active king, one who rules His creation and His people with purpose and justice. For Israel, declaring that the Lord reigns is both a statement of faith and a proclamation of hope.',
        },
        {
          kind: 'commentary',
          id: 'thanks-again',
          html:
            'The psalm returns, near its close, to the call to give thanks. "O give thanks unto the Lord; for he is good; for his mercy endureth for ever." This is the refrain from Psalm 106, and it is the emotional and spiritual climax of David&apos;s psalm. All the calling to praise, all the declaration of God&apos;s deeds, all the cosmic proclamation of His reign — it all culminates in gratitude. This is what worship is: the human response to the unchanging goodness and mercy of God.',
        },
        {
          kind: 'christ',
          id: 'christ-reigneth-revelation',
          title: 'Christ Connection — "The Lord Reigneth" in Revelation',
          html:
            'The psalm&apos;s declaration "The Lord reigneth" finds its New Testament echo in Revelation 11:15, when the seventh angel sounds his trumpet: "The kingdoms of this world are become the kingdoms of our Lord, and of his Christ; and he shall reign for ever and ever." The reign of God, proclaimed in David&apos;s psalm, is the reign of Christ — the one who is "the same yesterday, and to day, and for ever" (Hebrews 13:8). His reign will never end. His mercy never fails. And all creation will ultimately bow to acknowledge His kingship.',
        },
        {
          kind: 'carry',
          html:
            'The psalm invites all creation into rejoicing at God&apos;s reign. But can we truly rejoice in a kingdom we cannot see? We can, because we have evidence: the history of God&apos;s faithfulness, the work of Christ in our lives, the testimony of generations who have experienced His mercy. What evidence do you have that God reigns in your life? What would change if you truly believed that the Lord reigns over your circumstances?',
        },
        {
          kind: 'reflection',
          id: 'lord-reigneth',
          prompt: 'The psalm calls all creation to rejoice that "the Lord reigneth." What areas of your life do you struggle to surrender to God&apos;s reign? What would it look like to let Him truly rule there?',
        },
      ],
    },

    /* ─── 1 Chronicles 16:37–43 — The Covenant Service Continues ────────── */
    {
      ref: '1 Chronicles 16:37–43',
      title: 'A Worship That Continues · Asaph Ministers Before the Ark',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(37, 'So he left there before the ark of the covenant of the Lord Asaph and his brethren, to minister before it continually, as every day\'s work required:'),
            plain(38, 'And Obed-edom with their brethren, threescore and eight; Obed-edom also the son of Jeduthun and Hosah to be porters:'),
            plain(39, 'And Zadok the priest, and his brethren the priests, before the tabernacle of the Lord in the high place that was at Gibeon,'),
            plain(40, 'To offer burnt offerings unto the Lord upon the altar of the burnt offering continually morning and evening, and to do according to all that is written in the law of the Lord, which he commanded Israel;'),
            plain(41, 'And with them Heman and Jeduthun, and the rest that were chosen, who were expressed by name, to give thanks to the Lord, because his mercy endureth for ever;'),
            plain(42, 'And with them Heman and Jeduthun with trumpets and cymbals for those that should sing, and with musical instruments of God: And the sons of Jeduthun were porters.'),
            plain(43, 'Then all the people departed every man to his house: and David turned back to bless his house.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'asaph-continually',
          html:
            'David does not sing the psalm once and move on. He leaves Asaph and his musicians before the ark to minister "continually, as every day\'s work required." This is the establishment of perpetual praise. Worship is not an event; it is a practice, a rhythm, a way of life. Every day, morning and evening, the singers and priests will gather before the ark to thank God, to make offerings, and to pray. The psalm David sang will be sung again and again, becoming the prayer of Israel.',
        },
        {
          kind: 'commentary',
          id: 'mercy-endureth-forever',
          html:
            'The final detail is crucial: the musicians are chosen specifically "to give thanks to the Lord, because his mercy endureth for ever." This phrase echoes the refrain from Psalm 106 and becomes the theological reason for perpetual praise. Israel does not praise God because He is great (though He is). Israel praises God because His mercy never ends. No matter what comes — exile, defeat, suffering — His mercy will be there. And for that unchanging reality, praise is the appropriate response.',
        },
        {
          kind: 'carry',
          html:
            'David returns home to bless his own house. He has given his nation a pattern of praise, but his own family is not forgotten. The life of faith is not all grand gestures and public worship; it is also the quiet blessing of those closest to us. What would it mean to bless your own household the way David did — to ensure that they know they are loved, protected, and covered by the covenant of God?',
        },
        {
          kind: 'reflection',
          id: 'continual-praise',
          prompt: 'David established worship that would continue "every day," not just on special occasions. What would it look like for gratitude and praise to become a daily practice in your own life? What habits would change?',
        },
      ],
    },

    /* ─── Reflection Section ────────────────────────────────────────────── */
    {
      title: 'From the Psalm to Your Life',
      blocks: [
        {
          kind: 'commentary',
          id: 'psalm-structure',
          html:
            'The psalm David delivered in this chapter is itself a teaching tool. It moves from the personal (give thanks, remember, seek God) to the cosmic (all creation rejoices at His reign) to the communal (gather together, be delivered from enemies, praise God). This arc teaches us how to worship: not by focusing on ourselves, but by placing ourselves within a larger story — God&apos;s story of creation, covenant, and redemption.',
        },
        {
          kind: 'commentary',
          id: 'gratitude-discipline',
          html:
            'Gratitude in Scripture is not a feeling that comes and goes. It is a discipline, a practice, a way of life. David did not wait until he felt grateful to establish worship. He commanded that praise happen daily. Over time, the practice of gratitude reshapes the heart. What we rehearse in song, we learn to believe. What we declare in praise, we learn to live.',
        },
        {
          kind: 'reflection',
          id: 'closing',
          prompt: 'This chapter begins with offerings and ends with blessing. In between is a psalm that teaches Israel to see God&apos;s deeds, to declare His glory to the nations, and to rejoice that He reigns. Which of these three — seeing, declaring, or rejoicing — is most difficult for you? What might change if you practiced it?',
        },
      ],
    },
  ],
};
