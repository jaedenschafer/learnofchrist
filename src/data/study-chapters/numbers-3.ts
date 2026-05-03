import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * Numbers 3 — The Levites set apart.
 *
 * The Levites are redeemed as substitutes for Israel's firstborn. The chapter
 * details the three Levite clans (Gershon, Kohath, Merari) and their tabernacle duties,
 * then establishes the redemption price of 5 shekels per firstborn beyond the Levite count.
 *
 * Hebrew: bekor (firstborn); padah (redeem).
 * Christ: Heb 12:23 (church of the firstborn); Col 1:15 (Christ as firstborn over all creation).
 * The Levite system as type: they stand in for Israel&apos;s firstborn; Christ stands in for us.
 */
export const NUMBERS_3: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 3,

  estimatedMinutes: { 5: 8, 10: 12, 15: 14 },
  intros: [
    'At Passover, when the firstborn of Egypt fell, Israel&apos;s firstborn were spared. They became the Lord&apos;s — set apart, belonging entirely to Him. But not long after, the Lord exchanges those firstborn for the Levites. A whole tribe, given to God in place of every Israelite firstborn. The system is elegant and costly: the Levites work the tabernacle; Israel&apos;s firstborn go free. And for those firstborn beyond the Levite count, redemption comes at a price: 5 shekels per person, a ransom that points ahead.',
    'Numbers 3 is the ledger of that exchange. It names the Levite clans, assigns them their posts around the tabernacle, counts them against Israel&apos;s firstborn, and fixes the redemption price. It is also a portrait of substitution — one group standing in for another, one life traded for many. That logic becomes the deepest truth of the Gospel.',
  ],

  opener: {
    matchTitle: /tabernacle|tent|sanctuary/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── Numbers 3:1–4 — Aaron's Sons ───────────────────────────────── */
    {
      ref: 'Numbers 3:1–4',
      title: 'Aaron&apos;s Priestly Line',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(1, t('These also are the generations of Aaron and Moses in the day that the Lord spake with Moses in mount Sinai.')),
            verse(2, t('And these are the names of the sons of Aaron; Nadab the firstborn, and Abihu, Eleazar, and Ithamar.')),
            verse(3, t('These are the names of the sons of Aaron, the priests which were '), hy('anointed', 'anointed-id'), t(', whom he consecrated to minister in the priest&apos;s office.')),
            verse(4, t('And Nadab and Abihu '), hp('died before the Lord', 'nadab-abihu'), t(', when they offered strange fire before the Lord, in the wilderness of Sinai, and they had no children: and Eleazar and Ithamar ministered in the priest&apos;s office in the sight of Aaron their father.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'anointed-id',
          html: 'Aaron&apos;s sons were literally anointed with oil, marked as consecrated. The anointing set them apart for the work of intercession — the priesthood. Eleazar and Ithamar survive the chapter; Nadab and Abihu do not. Their death, recorded here without explanation, is told more fully in Leviticus 10. They offered fire not commanded by God. The priesthood requires obedience.',
        },
        {
          kind: 'commentary',
          id: 'nadab-abihu',
          html: 'This death — early, before sons, without mercy — is a shadow over the whole Levite system. Not every Levite will finish his work. Not every priest will reach his rest. Yet the system stands. The work continues through those who remain. Eleazar and Ithamar inherit the priesthood, not because the priesthood was earned, but because the Lord sustains it.',
        },
        {
          kind: 'carry',
          html: 'When you see someone fail in service — or when you fail yourself — the work doesn&apos;t collapse. God has already made provision. The priesthood of Eleazar and Ithamar teaches us that our lives are not the measure of God&apos;s purposes. His work continues.',
        },
        {
          kind: 'reflection',
          id: 'reflection-1',
          prompt: 'What does it mean that God let Aaron&apos;s oldest sons die, yet the priestly work continued? How does that comfort or challenge your faith?',
        },
      ],
    },

    /* ─── Numbers 3:5–10 — The Levites Appointed ───────────────────── */
    {
      ref: 'Numbers 3:5–10',
      title: 'The Levites Consecrated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(5, t('And the Lord spake unto Moses, saying,')),
            verse(6, t('Bring the tribe of Levi near, and present them before Aaron the priest, that they may minister unto him.')),
            verse(7, t('And they shall keep his charge, and the charge of the whole congregation before the tabernacle of the congregation, to do the service of the tabernacle.')),
            verse(8, t('And they shall keep all the instruments of the tabernacle of the congregation, and the charge of the children of Israel, to do the service of the tabernacle.')),
            verse(9, t('And thou shalt give the Levites unto Aaron and to his sons: they are wholly '), hy('given', 'given-id'), t(' unto him out of the children of Israel.')),
            verse(10, t('And thou shalt appoint Aaron and his sons, and they shall wait on their priest&apos;s office: and the stranger that cometh nigh shall be put to death.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'given-id',
          html: 'The Levites are <em>given</em> to Aaron and his sons — not hired, not trained, but gifted. They belong entirely to the priestly work, as the firstborn belonged to the Lord. The gift is absolute. And with it comes a boundary: no stranger may draw near to the tabernacle&apos;s holy work. The priesthood is set apart, protected, final.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nathan',
          title: 'Nathan — "to give"',
          script: 'נָתַן',
          translit: '<strong>nathan</strong> · to give, present, place',
          description: 'The Levites are not conscripted or volunteered; they are <em>given</em> — a term of grace and decisive action. God Himself places them in Aaron&apos;s service.',
        },
        {
          kind: 'carry',
          html: 'You are given to Christ. Not hired, not conditional, not revocable. The work of your salvation is not on your back; it is the Lord&apos;s gift. Your calling is to serve from that foundation of having been given, not from fear of being rejected.',
        },
      ],
    },

    /* ─── Numbers 3:11–13 — The Levites as Substitutes ─────────────── */
    {
      ref: 'Numbers 3:11–13',
      title: 'Redemption by Substitution',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(11, t('And the Lord spake unto Moses, saying,')),
            verse(12, t('Behold, I have taken the Levites from among the children of Israel instead of all the firstborn that openeth the womb among the children of Israel: therefore the Levites shall be mine;')),
            verse(13, t('Because all the firstborn are mine; for on the day that I smote all the firstborn in the land of Egypt I '), hp('hallowed unto me all the firstborn in Israel', 'hallowed-firstborn'), t(', both man and beast: mine they shall be: I am the Lord.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'hallowed-firstborn',
          html: 'At Passover, when the death angel passed through Egypt, every firstborn in Israel was claimed for God—spared, and therefore sacred. They belong to Him entirely. But now He makes an exchange. The Levites stand <em>instead</em> of those firstborn. One tribe for all the firstborn of the rest. It is a picture of substitution so clean and so complete that it cannot be accidental. This is how redemption works.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-bekor',
          title: 'Bekor — "the firstborn"',
          script: 'בְּכוֹר',
          translit: '<strong>bekor</strong> · firstborn, preeminence, right of inheritance',
          description: 'Every firstborn son belonged to God in the ancient world — a principle older than Israel. But in Israel, the firstborn receive explicit salvation at Passover and are marked as the Lord&apos;s. The Levites now replace them.',
        },
        {
          kind: 'christ',
          id: 'christ-substitution',
          title: 'Christ Connection — The Firstborn Over All',
          html: 'Paul writes: &ldquo;Who is the image of the invisible God, the firstborn of every creature&rdquo; (Col. 1:15). Christ holds the firstborn position — preeminence over all creation. And yet Hebrews tells us of &ldquo;the church of the firstborn, which are written in heaven&rdquo; (Heb. 12:23). We are the firstborn through Him. He is our substitute before the Father, and in Him, we inherit the firstborn&apos;s place. The Levites are the type; Christ is the fulfillment.',
        },
        {
          kind: 'carry',
          html: 'You were not born into God&apos;s family by accident of birth. You are in by substitution—another died, another was given in your place. That substitution cost the life of the Levites&apos; redemption; it cost the life of Christ. You are set apart not because you earned it, but because you were ransomed.',
        },
        {
          kind: 'reflection',
          id: 'reflection-2',
          prompt: 'The Levites stand in place of the firstborn. Who stands in your place before God? And what does it mean to receive that substitution by grace?',
        },
      ],
    },

    /* ─── Numbers 3:14–39 — The Three Clans and Their Posts ───────── */
    {
      ref: 'Numbers 3:14–39',
      title: 'The Three Levite Clans',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(14, t('And the Lord spake unto Moses in the wilderness of Sinai, saying,')),
            verse(15, t('Number the children of Levi after the house of their fathers, by their families: every male from a month old and upward shalt thou number them.')),
            verse(17, t('And these were the sons of Levi by their names; Gershon, and Kohath, and Merari.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'clans-intro',
          html: 'The Levites divide into three branches, each named after one of Levi&apos;s sons. Each clan has its own work, its own place around the tabernacle. There is order here—not random, not equal in all respects, but structured. The tabernacle work requires coordination.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(18, t('And these are the names of the sons of Gershon by their families; Libni, and Shimei.')),
            verse(19, t('And the sons of Kohath by their families; Amram, and Izehar, Hebron, and Uzziel.')),
            verse(20, t('And the sons of Merari by their families; Mahli, and Mushi. These are the families of the Levites according to the house of their fathers.')),
            verse(21, t('Of Gershon was the family of the Libnites, and the family of the Shimites: these are the families of the Gershonites.')),
            verse(22, t('Those that were numbered of them, according to the number of all the males, from a month old and upward, even those that were numbered of them were seven thousand and five hundred.')),
            verse(23, t('The families of the Gershonites shall pitch behind the tabernacle westward.')),
            verse(24, t('And the chief of the house of the father of the Gershonites shall be Eliasaph the son of Lael.')),
            verse(25, t('And the charge of the sons of Gershon in the tabernacle of the congregation shall be the tabernacle, and the tent, the covering thereof, and the hanging for the door of the tabernacle of the congregation,')),
            verse(26, t('And the hangings of the court, and the curtain for the door of the court, which is by the tabernacle, and by the altar round about, and the cords of it for all the service thereof.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'gershon-work',
          html: 'Gershon&apos;s clan—7,500 strong—keeps the structural fabric of the tabernacle. They care for the tent itself, the coverings, the hangings. Their work is foundational: without their care, there is no shelter, no sacred space. They camp to the west, behind the tabernacle. Eliasaph leads them.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(27, t('And of Kohath was the family of the Amramites, and the family of the Izeharites, and the family of the Hebronites, and the family of the Uzzielites: these are the families of the Kohathites.')),
            verse(28, t('In the number of all the males, from a month old and upward, were eight thousand and six hundred, keeping the charge of the sanctuary.')),
            verse(29, t('The families of the sons of Kohath shall pitch on the side of the tabernacle southward.')),
            verse(30, t('And the chief of the house of the father of the families of the Kohathites shall be Elizaphan the son of Sithri.')),
            verse(31, t('And their charge shall be the ark, and the table, and the candlestick, and the altars, and the vessels of the sanctuary wherewith they minister, and the hanging, and all the service thereof.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'kohath-work',
          html: 'Kohath&apos;s clan—8,600 strong—keeps the most sacred objects. The ark of the covenant, the table of shewbread, the golden candlestick, the altars. These are the heart of worship, the presence of God made visible in objects. Kohath&apos;s work is interior, intimate, careful. One mistake here is catastrophic. They camp on the south, led by Elizaphan.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-padah',
          title: 'Padah — "to redeem"',
          script: 'פָּדָה',
          translit: '<strong>padah</strong> · to redeem, ransom, buy back',
          description: 'Later in the chapter, firstborn not covered by Levites are redeemed by payment—the price is set at 5 shekels per person. Redemption always costs.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(33, t('Of Merari was the family of the Mahlites, and the family of the Mushites: these are the families of Merari.')),
            verse(34, t('And those that were numbered of them, according to the number of all the males, from a month old and upward, were six thousand and two hundred.')),
            verse(35, t('And the chief of the house of the father of the families of Merari was Zuriel the son of Abihail: these shall pitch on the side of the tabernacle northward.')),
            verse(36, t('And under the custody and charge of the sons of Merari shall be the boards of the tabernacle, and the bars thereof, and the pillars thereof, and the sockets thereof, and all the vessels thereof, and all that serveth thereto,')),
            verse(37, t('And the pillars of the court round about, and their sockets, and their pins, and their cords.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'merari-work',
          html: 'Merari&apos;s clan—6,200 strong—keeps the structural framework. Boards, bars, pillars, sockets. Their work is heavy and skeletal—the load-bearing infrastructure that holds the tent upright. Without Merari, Gershon&apos;s beautiful coverings have nothing to hang on. They camp on the north, led by Zuriel.',
        },
        {
          kind: 'carry',
          html: 'Every Levite clan had work that mattered. Gershon&apos;s beauty, Kohath&apos;s intimacy with the holy, Merari&apos;s structural strength—all three were essential. In the kingdom of God, different callings carry equal weight. The hidden work is as vital as the visible one. You are not less because your service isn&apos;t seen.',
        },
      ],
    },

    /* ─── Numbers 3:40–51 — Counting and Redemption ──────────────── */
    {
      ref: 'Numbers 3:40–51',
      title: 'The Redemption Price',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(40, t('And the Lord said unto Moses, Number all the firstborn of the males of the children of Israel from a month old and upward, and take the number of their names.')),
            verse(41, t('And thou shalt take the Levites for me (I am the Lord) instead of all the firstborn among the children of Israel; and the cattle of the Levites instead of all the firstlings among the cattle of the children of Israel.')),
            verse(42, t('And Moses numbered, as the Lord commanded him, all the firstborn among the children of Israel.')),
            verse(43, t('And all the firstborn males by the number of names, from a month old and upward, of those that were numbered of them, were twenty and two thousand two hundred and threescore and thirteen.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'count-firstborn',
          html: 'The count is exact: 22,273 firstborn males. The Levites number 22,000. The difference—273 firstborn without a Levite to cover them—must be ransomed. The exchange is nearly perfect, nearly complete. But not quite. Redemption requires a price.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(44, t('And the Lord spake unto Moses, saying,')),
            verse(45, t('Take the Levites instead of all the firstborn among the children of Israel, and the cattle of the Levites instead of their cattle; and the Levites shall be mine: I am the Lord.')),
            verse(46, t('And for those that are to be redeemed of the two hundred and threescore and thirteen of the firstborn of the children of Israel, which are more than the Levites;')),
            verse(47, t('Thou shalt even take '), hp('five shekels apiece', 'redemption-price'), t(' by the poll, after the shekel of the sanctuary thou shalt take them: (the shekel is twenty gerahs:)')),
            verse(48, t('And thou shalt give the money, wherewith the odd number of them is to be redeemed, unto Aaron and to his sons.')),
            verse(49, t('And Moses took the redemption money of them that were over and above them that were redeemed by the Levites:')),
            verse(50, t('Of the firstborn of the children of Israel took he the money; a thousand three hundred and threescore and five shekels, after the shekel of the sanctuary:')),
            verse(51, t('And Moses gave the redemption money unto Aaron and to his sons, according to the word of the Lord, as the Lord commanded Moses.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'redemption-price',
          html: 'Five shekels per firstborn — the redemption price is set. It is not a tax, not a fee. It is a ransom, the price of a life bought back. The money is given to Aaron and his sons. Every firstborn not covered by a Levite goes free because someone else paid. This is the skeleton key of the entire Scripture.',
        },
        {
          kind: 'christ',
          id: 'christ-redemption',
          title: 'Christ Connection — Redeemed at a Price',
          html: 'Peter writes: &ldquo;Forasmuch as ye know that ye were not redeemed with corruptible things, as silver and gold… But with the precious blood of Christ, as of a lamb without blemish and without spot&rdquo; (1 Pet. 1:18–19). The five shekels of silver prefigure the price of redemption. Our ransom was not coin; it was the blood of Christ. No substitution is free. All liberation costs someone.',
        },
        {
          kind: 'carry',
          html: 'You were redeemed at a price—not neglected, not left to chance, but deliberately, calculably ransomed. The Levites weren&apos;t chosen because they were worthy; they were chosen as your substitute. Christ wasn&apos;t crucified because you earned it; He was crucified as your ransom. The debt is paid. You are free.',
        },
        {
          kind: 'reflection',
          id: 'reflection-3',
          prompt: 'The Levites stand in place of the firstborn, and money redeems the rest. In what way has Christ&apos;s redemption of you cost Him something? And what does it mean to accept that you didn&apos;t earn it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Levites are taken from among the children of Israel in place of all the firstborn, and every firstborn beyond the Levite count is redeemed at five shekels apiece.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 3 · Study Guide',
  },

  hasHebrew: true,
};
