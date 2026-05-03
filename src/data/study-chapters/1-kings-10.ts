import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 10 — The Queen of Sheba and Solomon's Glory
 *
 * The fame of Solomon has spread to the ends of the known world. The Queen of
 * Sheba, hearing of his wisdom and wealth, comes from a distant land to test
 * him with hard questions. She arrives with great gifts — gold, spices, precious
 * stones — and finds that the reality of his greatness exceeds the report. But
 * beneath the splendor of 666 talents of gold and a throne of ivory lies a
 * warning: wealth that corrupts, chariots bought from Egypt against the Lord's
 * command, and the seeds of a kingdom's decline. In Solomon, we see a vision of
 * what the redeemed nations will bring to a Greater than Solomon.
 */
export const KINGS_1_10: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 10,

  estimatedMinutes: { beginner: 4, intermediate: 13, deep: 18 },
  intros: [
    'The wealth and wisdom of Solomon have become legendary. Kings and queens across the world speak of him, and the report reaches the ears of the Queen of Sheba. She is a seeker — not content with hearsay, she determines to come herself and test Solomon with hard questions. This chapter records her journey, her amazement at what she finds, and her acknowledgment that the God of Israel has been faithful to His king. Yet as the chapter unfolds, beneath the descriptions of gold and ivory and abundance, there is also a shadow: the weight of 666 talents, the horses brought from Egypt, the accumulation that can become a curse. Solomon is at the height of his power, yet the very tools of his greatness are the instruments of Israel\'s future ruin.',
    'The Queen of Sheba will become a figure in the teaching of Jesus himself. When the Lord speaks of the last judgment, He will say: "The queen of the south shall rise up in the judgment with this generation, and shall condemn it: for she came from the uttermost parts of the earth to hear the wisdom of Solomon" (Matthew 12:42). She came to listen. She came to learn. She came because she heard. And in her coming, we see the nations drawn to wisdom, drawn to knowledge of the God who dwells in the light. That pattern — the Gentile seeker drawn by report, by word, by testimony — will echo throughout the New Testament and into our own time.',
  ],

  bottomShare: {
    label: 'Share 1 Kings 10',
    quote:
      'The queen of Sheba heard of the fame of Solomon and came to hear his wisdom. What she found exceeded the report: "The half was not told me." And Jesus will say: The nations will rise in judgment to hear wisdom greater than Solomon.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 10 · Study Guide',
  },

  sections: [
    /* ─── 1 Kings 10:1–3 — The Queen Comes to Test Solomon ────────────────── */
    {
      ref: '1 Kings 10:1–3',
      title: 'The Queen of Sheba Comes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(
              1,
              'And when the queen of Sheba heard of the fame of Solomon concerning the name of the Lord, she came to prove him with hard questions.'
            ),
            plain(
              2,
              'And she came to Jerusalem with a very great train, with camels that bare spices, and very much gold, and precious stones: and when she was come to Solomon, she communed with him of all that was in her heart.'
            ),
            plain(
              3,
              'And Solomon told her all her questions: there was not any thing hid from the king, which he told her not.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'sheba-report',
          html:
            'The Queen of Sheba heard the fame of Solomon "concerning the name of the Lord." This is key: his reputation is not merely that of a rich king or a powerful warrior, but of a man known for his connection to the God of Israel. She comes not to test a tyrant but to encounter wisdom — and her long journey (likely thousands of miles from what is now Arabia or Ethiopia) shows the power of report, the reach of testimony. Word travels. And it travels about wisdom.',
        },
        {
          kind: 'commentary',
          id: 'great-train',
          html:
            'She comes with a caravan fit for a royal embassy: camels bearing spices (the most valuable commodity of the ancient Near East, worth their weight in gold), "very much gold," and precious stones. These are not gifts of tribute from a vassal; they are gifts of a peer, a queen seeking to honor another ruler. She comes ready to engage in the great conversation of wisdom.',
        },
        {
          kind: 'commentary',
          id: 'communed-heart',
          html:
            'She "communed with him of all that was in her heart." The Hebrew conveys that she spoke about everything she was thinking, everything she wondered about — not riddles designed to trap, but genuine questions from a seeking mind. And Solomon "told her all her questions" — he did not withhold, did not claim mystery, did not deflect. In this exchange, wisdom begets trust.',
        },
        {
          kind: 'hebrew',
          id: 'sheba-script',
          title: 'Sheba — שְׁבָא',
          script: 'שְׁבָא',
          translit: '<strong>Sheba</strong> · the region and people of southern Arabia; also the royal woman',
          description:
            'The name Sheba (Sabaeans in Greek) refers to a known trading kingdom in ancient Arabia, famous for frankincense, myrrh, and spices. The Queen of Sheba was a real historical figure, attested in Arab and Ethiopian tradition as well as in Scripture. In Jewish and Christian tradition, she became a symbol of the Gentile world seeking wisdom, the outsider drawn to the God of Israel by report and by the testimony of greatness.',
        },
        {
          kind: 'carry',
          html:
            'How do people learn about truth? Not always by decree, not always by force, but by reputation — by hearing that something or someone is worth the journey. The Queen of Sheba heard and came. Do the people in your life hear from you — by your life, your choices, your character — that wisdom is worth seeking?',
        },
        {
          kind: 'reflection',
          id: 'queen-seeking',
          prompt:
            'The queen of Sheba came because she heard that Solomon possessed wisdom and knowledge of the Lord. What draws you to seek wisdom? What report or testimony has changed the course of your own seeking?',
        },
      ],
    },

    /* ─── 1 Kings 10:4–9 — Her Amazement and Blessing ──────────────────────── */
    {
      ref: '1 Kings 10:4–9',
      title: '"The Half Was Not Told Me"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(
              4,
              'And when the queen of Sheba had seen all Solomon\'s wisdom, and the house that he had built,'
            ),
            plain(5, 'And the meat of his table, and the sitting of his servants, and the attendance of his ministers, and their apparel, and his cupbearers, and his ascent by which he went up unto the house of the Lord; there was no more spirit in her.'),
            plain(
              6,
              'And she said to the king, It was a true report that I heard in mine own land of thy acts, and of thy wisdom:'
            ),
            plain(
              7,
              'Howbeit I believed not the words, until I came, and mine eyes had seen it: and, behold, the half was not told me: thy wisdom and prosperity exceedeth the fame which I heard.'
            ),
            plain(8, 'Happy are thy men, happy are these thy servants, which stand continually before thee, and that hear thy wisdom.'),
            plain(
              9,
              'Blessed be the Lord thy God, which delighted in thee, to set thee on the throne of Israel: because the Lord loved Israel for ever, therefore made he thee king, to do judgment and justice.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'half-not-told',
          html:
            '"The half was not told me." This is one of the most eloquent expressions of superlative encounter in all of Scripture. She came expecting greatness based on report. She found that the reality exceeded the report. The throne, the table, the servants, the ascent to the Lord\'s house — every detail spoke of an order, a magnificence, a coherence that no secondhand account could fully convey. There are things you must see with your own eyes to truly believe.',
        },
        {
          kind: 'commentary',
          id: 'no-more-spirit',
          html:
            '"There was no more spirit in her." The phrase suggests she was overwhelmed, her breath taken away. But it is not the breath of dismay; it is the breath of awe. She enters as a skeptic — "I believed not the words" — but what she witnesses transforms her into a believer. The evidence of order, wisdom, and divine favor is unmistakable.',
        },
        {
          kind: 'commentary',
          id: 'blessed-be-lord',
          html:
            'Her blessing of Solomon\'s God is the culmination of her journey. She does not merely praise Solomon; she blesses the Lord thy God who "delighted in thee, to set thee on the throne." She has recognized that the source of Solomon\'s greatness is not himself, but the God who chose him. She has become a witness to the faith of Israel. This is what draws the nations: the perception of God\'s faithfulness, God\'s favor, made visible in the fruit of faithfulness.',
        },
        {
          kind: 'greek',
          id: 'basileia-connection',
          title: 'Basileia — βασιλεία',
          script: 'βασιλεία',
          translit: '<strong>Basileia</strong> · kingdom; dominion; the reign of a king',
          description:
            'In the New Testament, when Jesus speaks of His kingdom, He uses the same word — basileia — that describes Solomon\'s magnificence. The kingdom of heaven, like Solomon\'s kingdom, is not a matter of show alone, but of the presence of God, of justice, of order. The Queen of Sheba saw in Solomon\'s reign a foretaste of what the kingdom of God would be: a place where wisdom reigns and the presence of God is visible.',
        },
        {
          kind: 'carry',
          html:
            'We often doubt the testimony of others. We think: I must see it myself, I must test it myself. And that is not always wrong. But the Queen of Sheba came in a spirit of genuine seeking, and what she found exceeded her expectations. When someone bears witness to you about God\'s faithfulness, do you approach with skepticism that hardens, or with the openness to be surprised by what is greater than the report?',
        },
        {
          kind: 'reflection',
          id: 'half-not-told-reflection',
          prompt:
            'The queen said, "The half was not told me." When have you discovered that the reality of something — a person, a place, a truth — was greater than what you had heard about it? What changed in you when you saw it?',
        },
      ],
    },

    /* ─── 1 Kings 10:10–13 — Gifts and Reciprocal Generosity ───────────────── */
    {
      ref: '1 Kings 10:10–13',
      title: 'The Exchange of Gifts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(10, 'And she gave the king an hundred and twenty talents of gold, and of spices very great store, and precious stones: there came no more such abundance of spices as these which the queen of Sheba gave to king Solomon.'),
            plain(11, 'And the navy of Hiram, that brought gold from Ophir, brought in from Ophir great plenty of almug trees, and precious stones.'),
            plain(12, 'And the king made of the almug trees pillars for the house of the Lord, and for the king\'s house, harps also and psalteries for singers: there came no more such almug trees, nor were there seen unto this day.'),
            plain(13, 'And king Solomon gave unto the queen of Sheba all her desire, whatsoever she asked, beside that which Solomon gave her of his royal bounty. So she turned and went to her own country, she and her servants.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'sheba-gifts',
          html:
            'The Queen of Sheba gives 120 talents of gold and an "abundance of spices" — not the wealth of a conquered people, but the gifts of a peer. These are treasures that will be remembered: "there came no more such abundance." In the economy of the ancient world, such a gift is not mere trading; it is a recognition of value, a knitting together of realms.',
        },
        {
          kind: 'commentary',
          id: 'almug-trees',
          html:
            'The almug (or algum) trees brought by Hiram\'s navy from distant Ophir are precious wood — rare, beautiful, fit for the temple and the king\'s house. Solomon uses them to make pillars, harps, and psalteries. These are instruments not of war, but of song, of worship. The wood becomes part of the house of the Lord. Even wealth and distant treasure find their purpose in the worship of God.',
        },
        {
          kind: 'hebrew',
          id: 'almug-script',
          title: 'Almugim — אַלְמֻגִּים',
          script: 'אַלְמֻגִּים',
          translit: '<strong>Almugim</strong> · a precious wood from distant lands; possibly sandalwood or teak',
          description:
            'The almug trees are mentioned only in 1 Kings and 2 Chronicles as sources of precious material for the temple. Their rarity and value underscore the vast trade networks of Solomon\'s time — goods from southern Arabia, from Ophir (possibly modern Yemen, or further afield), brought into Israel to serve the worship of the Lord.',
        },
        {
          kind: 'commentary',
          id: 'her-desire',
          html:
            'Solomon gives to the Queen of Sheba "all her desire, whatsoever she asked, beside that which Solomon gave her of his royal bounty." He does not merely reciprocate; he exceeds her request. This is the generosity of a secure king, one whose abundance is so great that he can give freely without diminishment. Yet generosity itself is the sign of true wealth — not the hoarding of gold, but the release of it toward others.',
        },
        {
          kind: 'carry',
          html:
            'The Queen of Sheba came and saw and was satisfied — not by mere abundance, but by the wisdom and order she witnessed. And she returned home enriched not only with gifts, but with knowledge. She had encountered something true. Do we seek in our lives to encounter what is true, or do we settle for what merely appears impressive?',
        },
        {
          kind: 'reflection',
          id: 'mutual-gifts',
          prompt:
            'The Queen of Sheba gave generously, and Solomon gave her more than she asked. What does generosity — the willingness to give beyond expectation — reveal about the giver\'s sense of security and worth?',
        },
      ],
    },

    /* ─── 1 Kings 10:14–22 — The Weight of 666 Talents ─────────────────────── */
    {
      ref: '1 Kings 10:14–22',
      title: 'The 666 Talents: Wealth and Shadow',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(14, 'Now the weight of gold that came to Solomon in one year was six hundred threescore and six talents of gold,'),
            plain(15, 'Beside that he had of the merchantmen, and of the traffick of the spice merchants, and of all the kings of Arabia, and of the governors of the country.'),
            plain(16, 'And king Solomon made two hundred targets of beaten gold: six hundred shekels of gold went to one target:'),
            plain(17, 'And three hundred shields of beaten gold; three pound of gold went to one shield: and the king put them in the house of the forest of Lebanon.'),
            plain(18, 'Moreover the king made a great throne of ivory, and overlaid it with the best gold:'),
            plain(19, 'The throne had six steps, and the top of the throne was round behind: and there were stays on either side on the place of the seat, and two lions stood beside the stays.'),
            plain(20, 'And twelve lions stood there on the one side and on the other upon the six steps: there was not the like made in any kingdom.'),
            plain(21, 'And all king Solomon\'s drinking vessels were of gold, and all the vessels of the house of the forest of Lebanon were of pure gold; none were of silver: it was nothing accounted of in the days of Solomon.'),
            plain(22, 'For the king had at sea a navy of Tharshish with the navy of Hiram: once in three years came the navy of Tharshish, bringing gold, and silver, and ivory, and apes, and peacocks.'),
          ],
        },
        {
          kind: 'commentary',
          id: '666-talents',
          html:
            'The weight of gold that came to Solomon in one year: 666 talents. This is the number that will appear again in the book of Revelation — "and his number is Six hundred threescore and six" (Revelation 13:18) — in the description of a beast that rises to power, a figure of human ambition divorced from submission to God. The number itself is not inherently evil, but its association here with vast accumulated wealth, with the trappings of power, foreshadows a danger: that wealth itself, when it becomes the measure of all things, becomes a kind of anti-gospel. Solomon is at the height of his earthly power. But this chapter records that height; it does not present it as the goal.',
        },
        {
          kind: 'commentary',
          id: 'throne-lions',
          html:
            'The great throne of ivory, overlaid with the best gold, flanked by standing lions and ringed by twelve lions on the steps — this is a throne designed to awe, to intimidate, to display power. The detail that "there was not the like made in any kingdom" underscores that Solomon has surpassed all other rulers. Yet a throne is a seat from which judgment should flow. Has the display become more important than the justice?',
        },
        {
          kind: 'commentary',
          id: 'nothing-silver',
          html:
            'Silver, once precious and counted among treasures, has become "nothing accounted of." This is a remarkable statement — not just that gold is valuable, but that precious metals have lost meaning through abundance. When everything is rare, rarity loses its power. When every vessel is gold, gold becomes like stone. There is a subtle danger in abundance: the numbing of appreciation, the loss of what makes something precious.',
        },
        {
          kind: 'commentary',
          id: 'navy-tharshish',
          html:
            'Once every three years, the navy of Tharshish brings gold, silver, ivory, apes, and peacocks. The apes and peacocks are perhaps the most telling detail — they are brought not for function, but for exotic display, for amusement. They are the ornament of a court that has begun to measure itself by how much splendor it can accumulate.',
        },
        {
          kind: 'carry',
          html:
            'Abundance can become a kind of curse. Not because having is wrong, but because having can obscure what truly matters. The threshold from "I have what I need" to "I have more than I need" to "I must have more than anyone else" is subtle but decisive. Solomon has crossed it. He stands at the pinnacle of earthly power, and the record of his reign will from this point onward be the record of his decline.',
        },
        {
          kind: 'reflection',
          id: '666-reflection',
          prompt:
            'The text mentions that silver became as common as stones in Jerusalem. How does abundance change our relationship to what we possess? When does "enough" become insufficient, and what shifts that boundary?',
        },
      ],
    },

    /* ─── 1 Kings 10:23–29 — Horses from Egypt, and the Seed of Decline ──────── */
    {
      ref: '1 Kings 10:23–29',
      title: 'The Horses from Egypt: Disobedience and Decline',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(23, 'So king Solomon exceeded all the kings of the earth for riches and for wisdom.'),
            plain(24, 'And all the earth sought to Solomon, to hear his wisdom, which God had put in his heart.'),
            plain(25, 'And they brought every man his present, vessels of silver, vessels of gold, garments, armour, spices, horses, mules, a rate year by year.'),
            plain(26, 'And Solomon gathered together chariots and horsemen: he had a thousand and four hundred chariots, and twelve thousand horsemen, whom he bestowed in the cities for chariots, with the king at Jerusalem.'),
            plain(27, 'And the king made silver to be in Jerusalem as stones, and cedars made he to be as the sycomore trees that are in the vale, for abundance.'),
            plain(28, 'And Solomon had horses brought out of Egypt, and linen yarn: the king\'s merchants received the linen yarn at a price.'),
            plain(29, 'Now the rest of the acts of Solomon, and all that he did, and his wisdom, are they not written in the book of the acts of Solomon?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'all-earth-sought',
          html:
            '"All the earth sought to Solomon, to hear his wisdom, which God had put in his heart." Here is the apex: he is renowned, sought after, honored by kings. Every man brings him a present. Horses, mules, spices, gold, armor — the tribute pours in. He has become the center of the world\'s attention. And yet — listen to what comes next.',
        },
        {
          kind: 'commentary',
          id: 'egypt-horses',
          html:
            '"Solomon had horses brought out of Egypt." This is not a casual detail. Turn back to Deuteronomy 17:16, the law the king of Israel must obey: "But he shall not multiply horses to himself, nor cause the people to return to Egypt, to the end that he should multiply horses: forasmuch as the Lord hath said unto you, Ye shall henceforth return no more that way." Solomon is directly violating the word of God. He is importing horses from Egypt — the very practice forbidden by the law. He has begun to walk a path that will lead away from God.',
        },
        {
          kind: 'hebrew',
          id: 'egypt-mitzrayim',
          title: 'Egypt — מִצְרַיִם (Mitzrayim)',
          script: 'מִצְרַיִם',
          translit: '<strong>Mitzrayim</strong> · Egypt; also metaphorically, the place of bondage, the place you shall not return to',
          description:
            'In Old Testament theology, Egypt is not merely a nation; it is the symbolic place of bondage, of separation from God. The law commands: Do not return to Egypt. The forbidden thing is not the horse itself, but the reliance on Egypt — on military power, on the world\'s strength, rather than on the Lord. Solomon\'s breaking of this command marks the beginning of the end.',
        },
        {
          kind: 'commentary',
          id: 'chariots-horsemen',
          html:
            '1,400 chariots and 12,000 horsemen — vast military power. But power acquired through disobedience to God\'s law carries a hidden cost. Solomon has begun to trust in chariots and horses rather than in the Lord. The text does not condemn this outright, but the reader who knows Deuteronomy 17:16 understands: this is the beginning of the fall.',
        },
        {
          kind: 'christ',
          id: 'greater-than-solomon',
          title: 'Christ Connection — A Greater Than Solomon',
          html:
            'Jesus will say: "A greater than Solomon is here" (Matthew 12:42). The difference is not merely in wealth or wisdom, but in the source and aim of power. Solomon accumulated and relied on earthly might. The greater Solomon — the greater King — emptied Himself, refused to call down legions of angels, and went to the cross. "My kingdom is not of this world," Jesus said. Where Solomon gathered chariots and horses, Jesus gathered disciples. Where Solomon built a throne of ivory, Jesus was lifted up on a cross. The nations will indeed be drawn to Him — not by the report of his gold, but by the power of His love.',
        },
        {
          kind: 'carry',
          html:
            'There is often a point in the life of power where we make a choice: Will we obey the law of God, or will we trust in the visible means at our disposal? Solomon chose the latter. He had become so secure in his greatness that he felt able to step outside the boundary. And with that step, the decline began. We all have moments where we are tempted to think: I am so successful now, surely I can make this one exception. The text warns us: that exception is often the beginning of a fall.',
        },
        {
          kind: 'reflection',
          id: 'egypt-horses-reflection',
          prompt:
            'Solomon broke the law about the horses from Egypt — a clear command from Deuteronomy. He did this despite his wisdom and his success. What boundaries or laws do you test when you feel confident in your strength? What would it mean to obey God precisely when you feel least like you need to?',
        },
      ],
    },

    /* ─── Summary: The Nations Draw Near, But Decline Approaches ──────────────── */
    {
      ref: '1 Kings 10',
      title: 'The End of the Beginning',
      blocks: [
        {
          kind: 'commentary',
          id: 'chapter-arc',
          html:
            'This chapter is the high-water mark of the united monarchy. The Queen of Sheba comes and recognizes God\'s favor. The nations bring tribute. Wisdom and wealth flow together. And yet, in the record itself, the seeds of decline are sown: 666 talents, horses from Egypt, the breaking of the law. The chapter ends not with triumph but with a notice that "the rest of the acts of Solomon" are written in "the book of the acts of Solomon." It is the kind of transition that signals: from this point forward, it is all downhill.',
        },
        {
          kind: 'commentary',
          id: 'greater-than-solomon',
          html:
            'But the pattern Solomon embodies — the king who is known for wisdom, who draws the nations, whose realm is a foretaste of order and justice — does not end with Solomon. It is taken up into the promise of a Greater King. The nations will come to Him. Not with gold and spices, though some will. But with the hunger of the soul, the seeking of the spirit. The Queen of Sheba will rise in judgment and testify: I came from the ends of the earth to hear his wisdom. And her coming will be a sign of the many who will be drawn to the one who is greater than Solomon — not by gold, but by love.',
        },
        {
          kind: 'carry',
          html:
            'Solomon\'s reign shows us the difference between the kingdom we can build through human power and wisdom, and the kingdom God promises through obedience and humility. Solomon was wise and rich, yet his disobedience led to division. Jesus was poor and ultimately executed, yet His kingdom expanded across all nations and endures forever. The measure of a kingdom is not what it accumulates, but what it gives. Not what it hoards, but what it releases. Not the size of its throne, but the reach of its love.',
        },
      ],
    },
  ],
};
