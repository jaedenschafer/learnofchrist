import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 23 — Levites Organized for Temple Service
 *
 * When David was old and full of days, he made Solomon his son king over
 * Israel and gathered all the princes, priests, and Levites. The 38,000
 * Levites were reorganized for the work of the temple — no longer to carry
 * the tabernacle through the wilderness, but to serve in the permanent house
 * of God. From the three families of Levi (Gershon, Kohath, Merari) came
 * singers, gatekeepers, treasurers, and judges. The Aaronic line remained
 * set apart for sanctuary work. In this chapter, we see a kingdom in transition:
 * the old way of wandering replaced by the new way of settled worship.
 */
export const CHRONICLES_1_23: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 23,

  estimatedMinutes: { beginner: 4, intermediate: 11, deep: 16 },
  intros: [
    'The book of 1 Chronicles is written to the people of Israel after their exile in Babylon. It recounts the glory of David&apos;s reign and the promise of the temple — a promise that would be fulfilled under Solomon. In chapter 23, David is old. He has conquered enemies, secured the kingdom, and prepared the place where God&apos;s house will stand. Now he must ensure that the structures of worship — and the people who serve — are ready for what comes next.',
    'David gathers all Israel — the princes, priests, and Levites — to number and organize them for the work of the Lord&apos;s house. Thirty-eight thousand Levites are enlisted: 24,000 to oversee the work of the temple, 6,000 officers and judges, 4,000 gatekeepers, and 4,000 who praise the Lord with instruments. They are divided into courses by their families: Gershon, Kohath, and Merari. Each has a role. Together, they form the body of worship — the people who will keep the rhythm of praise and service in God&apos;s house. In this, there is a pattern: the priesthood of all believers, each with a calling, each contributing to the whole.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 23',
    quote:
      'When David was old and full of days, he organized the Levites to serve in the Lord&apos;s house — not as carriers of the tabernacle through the wilderness, but as singers, keepers of the gates, and servants of the sanctuary. Every saint has a calling in the worship of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 23 · Study Guide',
  },

  resources: [
    {
      id: 'british-museum-david',
      kind: 'archaeology',
      source: 'British Museum',
      label: 'David in the Ancient Near East',
      url: 'https://www.britishmuseum.org/',
      description: 'British Museum collections on Iron Age Levantine kingdoms and David.',
    },
    {
      id: 'sefaria-1-chronicles-23',
      kind: 'study',
      source: 'Sefaria',
      label: '1 Chronicles 23 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/I_Chronicles.23',
      description: 'The Hebrew text of 1 Chronicles 23 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-1-chronicles-overview-23',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: '1 Chronicles — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/1-chronicles/',
      description: 'Open-access SBL essay on the historical and literary setting of 1 Chronicles.',
    },

  ],

  sections: [
    /* ─── 1 Chronicles 23:1 — David Old and Full of Days ──────────────── */
    {
      ref: '1 Chronicles 23:1',
      title: 'David Old and Full of Days',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(
              1,
              'Now when David was old and full of days, he made Solomon his son king over Israel.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'david-old-full',
          html:
            'David is described as "old and full of days" — a phrase that carries weight in Scripture. He has lived a full life: a shepherd, a warrior, a king who danced before the ark, a man who knew exile and triumph. His work is largely done. But before he rests, he ensures that what he has built will endure. The succession of Solomon is not merely a political act; it is an act of faith. David passes the throne to his son and, with it, the responsibility to build the house of the Lord. [res:british-museum-david]',
        },
        {
          kind: 'commentary',
          id: 'solomon-king',
          html:
            'Solomon is made king while David still lives. This is unusual in the ancient world — often succession is contested, violent, uncertain. But David&apos;s kingdom is stable enough, his authority secure enough, that he can name his successor and the people will accept it. The text does not narrate conflict or doubt. Instead, it presents an orderly transfer of power — a sign that the kingdom is built on something more stable than one man&apos;s strength[res:sefaria-1-chronicles-23][res:bibleodyssey-1-chronicles-overview-23].',
        },
        {
          kind: 'carry',
          html:
            'We do not live forever. Our work in this world will, at some point, pass to others. What are we building that will outlast us? What are we training the next generation to do? David&apos;s concern, in his old age, is not for his own comfort or legacy, but for the work that will continue after he is gone.',
        },
        {
          kind: 'reflection',
          id: 'david-old',
          prompt:
            'When have you felt the weight of knowing that your work will someday pass to someone else? What have you prepared them to do?',
        },
      ],
    },

    /* ─── 1 Chronicles 23:2–6 — The Assembly and Numbering ────────────── */
    {
      ref: '1 Chronicles 23:2–6',
      title: 'The Levites Gathered and Numbered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(
              2,
              'And he gathered together all the princes of Israel, with the priests and the Levites.'
            ),
            plain(3, 'Now the Levites were numbered from the age of thirty years old and upward:'),
            plain(
              4,
              'and the number of them by their polls, even the head of their fathers, for the work of the service of the house of the Lord, was thirty and eight thousand.'
            ),
            plain(
              5,
              'Of which, twenty and four thousand were to set forward the work of the house of the Lord; and six thousand were officers and judges:'
            ),
            plain(
              6,
              'Moreover four thousand were porters; and four thousand praised the Lord with the instruments which I made, said David, to praise therewith.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'princes-priests-levites',
          html:
            'David gathers the three pillars of Israel&apos;s leadership: princes (civil authority), priests (sanctuary authority), and Levites (the supporting order). This is not merely a census. It is a solemn assembly, gathering all who have a role to play in the work of the Lord&apos;s house. The gathering itself is an act of covenant renewal — all Israel present, bound together in the purpose of worship.',
        },
        {
          kind: 'hebrew',
          id: 'levi-joined',
          title: 'Levi — "Joined" or "Attached"',
          script: 'לֵוִי',
          translit: '<strong>Levi</strong> · joined; attached; the name of Jacob&apos;s third son, and of the tribe set apart for service',
          description:
            'The Levites are "the joined ones" — joined to the service of God&apos;s house. They are not kings, not the primary priests (the Aaronic line), but they are joined to sacred work. The tribe of Levi was singled out after the incident of the golden calf: when Israel had turned from God, the Levites stood with Moses. For that faithfulness, they were set apart — not for territory or rule, but for proximity to God&apos;s worship.',
        },
        {
          kind: 'commentary',
          id: 'thirty-eight-thousand',
          html:
            'Thirty-eight thousand Levites. The number is staggering — enough to fill the temple with continuous service. They are organized into four functions: 24,000 to oversee the work (the bulk of the labor), 6,000 as officers and judges (authority and order), 4,000 as gatekeepers (protection of the holy), and 4,000 as musicians (the voice of praise). Each category serves the whole. Each is necessary.',
        },
        {
          kind: 'commentary',
          id: 'instruments-david-made',
          html:
            'David speaks of the instruments "which I made, said David, to praise therewith." David is a musician — a shepherd who played the harp to soothe Saul&apos;s troubled spirit. The instruments are not merely tools; they are extensions of David&apos;s own soul. To praise the Lord with them is to join David&apos;s own praise. In this, there is a picture of the church: the instruments made by one generation so that future generations might praise with them.',
        },
        {
          kind: 'carry',
          html:
            'Not everyone serves in the same way. Some are workers, some are judges, some are gatekeepers, some are singers. But all have a place. All are counted. All are essential. In the body of Christ, each member has a function, and each function is honored.',
        },
        {
          kind: 'reflection',
          id: 'levites-numbered',
          prompt:
            'How do you serve in the work of God&apos;s house? If you are not sure, what might prevent you from discovering or claiming your role?',
        },
      ],
    },

    /* ─── 1 Chronicles 23:7–11 — Gershonites ─────────────────────────── */
    {
      ref: '1 Chronicles 23:7–11',
      title: 'The Gershonites',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(
              7,
              'And the sons of Gershon were, Laadan, and Shimei.'
            ),
            plain(
              8,
              'The sons of Laadan; the chief being Jehiel, and Zethan, and Joel, three.'
            ),
            plain(
              9,
              'The sons of Shimei; Shelomith, and Haziel, and Haran, three. These were the chief of the fathers of Laadan.'
            ),
            plain(
              10,
              'And the sons of Shimei were, Jahath, Zina, and Jeush, and Beriah. These four were the sons of Shimei.'
            ),
            plain(
              11,
              'And Jahath was the chief, and Ziza the second: but Jeush and Beriah had not many sons; therefore they were in one reckoning, according to their father&apos;s house.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gershonites-descended',
          html:
            'The Gershonites are descended from Gershon, the eldest son of Levi. They are divided into two families: the sons of Laadan and the sons of Shimei. Each family has its own chiefs, its own order. Even in numbering, there is hierarchy and recognition — each family&apos;s leaders are named, their lineage recorded. This is not bureaucracy for its own sake; it is the acknowledgment that even in service, there is dignity and structure.',
        },
        {
          kind: 'hebrew',
          id: 'gershon-exile',
          title: 'Gershon — "Exile" or "A Sojourner There"',
          script: 'גֵּרְשׁוֹן',
          translit: '<strong>Gershon</strong> · one who is exiled or displaced',
          description:
            'The name Gershon carries weight. It suggests displacement, sojourning in a foreign land. The Gershonites will be charged with carrying the outer vessels of the tabernacle — the curtains, the coverings, the screens. They are the ones who tend to the outer sanctum, the boundary between the holy and the common. There is a fitting irony: those whose name speaks of exile serve by protecting the holy of holies.',
        },
        {
          kind: 'carry',
          html:
            'We are all, in some sense, sojourners in a foreign land — the world is not yet our home. The Gershonites serve precisely in that condition, tending the boundaries between sacred and common. What boundaries do we need to guard in our own lives?',
        },
      ],
    },

    /* ─── 1 Chronicles 23:12–20 — Kohathites ────────────────────────── */
    {
      ref: '1 Chronicles 23:12–20',
      title: 'The Kohathites and the Holy Things',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(
              12,
              'The sons of Kohath; Amram, Izhar, Hebron, and Uzziel, four.'
            ),
            plain(
              13,
              'The sons of Amram; Aaron and Moses: and Aaron was separated, that he should sanctify the most holy things, he and his sons for ever, to burn incense before the Lord, to minister unto him, and to bless in his name for ever.'
            ),
            plain(
              14,
              'Now concerning Moses the man of God, his sons were named of the tribe of Levi.'
            ),
            plain(
              15,
              'The sons of Moses were, Gershom, and Eliezer.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1chr23-levitical-courses',
          html:
            'Moses&apos; descendants take their place in the new order. The wilderness ministry is over; what they once carried in tents now stands in courses around a stone temple.',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(
              16,
              'Of the sons of Gershom, Shebuel was the chief.'
            ),
            plain(
              17,
              'And the sons of Eliezer were, Rehabiah the chief. And Eliezer had none other sons; but the sons of Rehabiah were very many.'
            ),
            plain(
              18,
              'Of the sons of Izhar; Shelomith the chief.'
            ),
            plain(
              19,
              'Of the sons of Hebron; Jeriah the first, Amariah the second, Jahaziel the third, and Jekameam the fourth.'
            ),
            plain(
              20,
              'Of the sons of Uzziel; Micah the first, and Isshiah the second.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'kohath-family',
          html:
            'The Kohathites are descended from Kohath, the second son of Levi. They are divided into four families: Amram, Izhar, Hebron, and Uzziel. But this is no ordinary genealogy. Amram is the father of Aaron and Moses — the two greatest figures in Israel&apos;s history. The family tree is, in a sense, a tree of redemption.',
        },
        {
          kind: 'commentary',
          id: 'aaron-separated',
          html:
            'Aaron was "separated, that he should sanctify the most holy things, he and his sons for ever." The separation is absolute and eternal. Aaron and his descendants are set apart for the sanctuary itself — to burn incense, to minister, to bless in God&apos;s name. This is the Aaronic line, the priesthood that will endure throughout Israel&apos;s history. But notice: Aaron is mentioned here as the separated one, while Moses, though his father is listed, has a different role. Moses was a prophet, a lawgiver, a deliverer — not a priest in the sanctuary sense.',
        },
        {
          kind: 'hebrew',
          id: 'qadash-holy',
          title: 'Qadash — "To Sanctify" or "To Make Holy"',
          script: 'קָדַשׁ',
          translit: '<strong>Qadash</strong> · to make holy; to consecrate; to set apart',
          description:
            'Aaron is set apart — qadash — to sanctify the most holy things. The same word root appears in "qodesh" (holy) and "Kodesh ha-Kodashim" (the Most Holy Place). Aaron&apos;s role is to maintain the boundary between the holy and the common. He alone can enter the Holy of Holies, and even then, once a year. This is not a privilege; it is a terrible responsibility.',
        },
        {
          kind: 'commentary',
          id: 'moses-sons',
          html:
            'Moses&apos; sons — Gershom and Eliezer — are listed not as priests but as Levites. Moses himself was a Levite but not a priest. He was the mediator of the covenant, the one who stood in the presence of God and returned to speak God&apos;s words to Israel. But he did not offer sacrifice. He did not burn incense in the sanctuary. His role was different — higher in some ways, distinct in others. The text honors this distinction.',
        },
        {
          kind: 'christ',
          id: 'aaron-christ-priest',
          title: 'Christ Connection — The True High Priest',
          html:
            'The Aaronic priesthood is eternal and unchanging — a pattern that points to Christ. Hebrews tells us that Jesus, though not of the line of Aaron, is "a high priest of the order of Melchizedek" (Hebrews 7:17). He is priest and king, like Melchizedek, and His priesthood is superior to Aaron&apos;s. Where Aaron entered the Holy of Holies once a year with the blood of animals, Christ "entered in once into the holy place by his own blood, having obtained eternal redemption for us" (Hebrews 9:12). The Aaronic line was a shadow; Christ is the reality. And in Him, the priesthood of all believers is restored. "Ye are a chosen generation, a royal priesthood, an holy nation" (1 Peter 2:9).',
        },
        {
          kind: 'carry',
          html:
            'Aaron was separated for the most holy work. He did not choose it; it was his birthright and his calling. He bore the weight of representing the people before God. In the church, we are all called to a priesthood — not the formal priesthood of temples and sacrifices, but the priesthood of intercession, of standing in the gap for others. What holy work are you called to that you have not yet claimed?',
        },
        {
          kind: 'reflection',
          id: 'kohathites-holy',
          prompt:
            'Aaron was separated to sanctify the most holy things. In what ways are you called to make something holy — to set it apart, to protect its sacred character?',
        },
      ],
    },

    /* ─── 1 Chronicles 23:21–23 — Merari ─────────────────────────────── */
    {
      ref: '1 Chronicles 23:21–23',
      title: 'The Merari',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(
              21,
              'The sons of Merari; Mahli, and Mushi. The sons of Mahli; Eleazar, and Kish.'
            ),
            plain(
              22,
              'And Eleazar died, and had no sons, but daughters: and their brethren the sons of Kish took them.'
            ),
            plain(
              23,
              'The sons of Mushi; Mahli, and Eder, and Jeremoth, three.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'merari-descended',
          html:
            'The Merari are descended from Merari, the third son of Levi. They are the smallest of the three Levitical families — the "residue" in some sense. But they are recorded with the same care as the greater families. Eleazar dies without sons, so his daughters are incorporated into his brother Kish&apos;s line. The family continues. No one is left behind; no lineage is broken.',
        },
        {
          kind: 'hebrew',
          id: 'merari-bitter',
          title: 'Merari — "Bitter" or "Strong"',
          script: 'מְרָרִי',
          translit: '<strong>Merari</strong> · bitter; or, one who is strong/robust',
          description:
            'The name Merari, connected to "marar" (to be bitter), carries a certain hardness. The Merari will be charged with carrying the heavy framework of the tabernacle — the bars, the pillars, the sockets. They bear the weight. They are the ones who hold things up. There is no glamour in it, but it is essential.',
        },
        {
          kind: 'carry',
          html:
            'The Merari are not the glamorous ones. They do not tend the holy things like the Kohathites. They do not manage the outer curtains like the Gershonites. They carry the wood and metal — the unglamorous, essential work. But without them, the tabernacle falls down. How much of what we do is unglamorous but essential?',
        },
      ],
    },

    /* ─── 1 Chronicles 23:24–26 — The Age of Service Changes ─────────── */
    {
      ref: '1 Chronicles 23:24–26',
      title: 'The Temple Changes Everything',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(
              24,
              'These were the sons of Levi after the house of their fathers; even the chief of the fathers, as they were counted by number of names by their polls, that did the work for the service of the house of the Lord, from the age of twenty years and upward.'
            ),
            plain(
              25,
              'For David said, The Lord God of Israel hath given rest unto his people, that they may dwell in Jerusalem for ever:'
            ),
            plain(
              26,
              'And also unto the Levites; they shall no more carry the tabernacle, nor any vessels of it for the service thereof.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'age-lowered',
          html:
            'The age of service for Levites has been lowered from 30 to 20 years old. Why? The explanation comes in verse 25–26: "The Lord God of Israel hath given rest unto his people." The wilderness wandering is over. The tabernacle is no longer carried from place to place. The Levites no longer need the strength of middle age to bear its weight. A younger Levite can serve in a permanent temple. The shift from 30 to 20 marks a change in the nature of the work itself.',
        },
        {
          kind: 'commentary',
          id: 'no-more-carry',
          html:
            'The Levites will "no more carry the tabernacle, nor any vessels of it." This is revolutionary. For centuries — from the time of Moses through the wilderness wanderings and the conquest of Canaan — the Levites were carriers. They shouldered the ark, the table, the lampstand, the altar. Their identity was shaped by this work. Now it ends. The tabernacle is fixed. The vessels are set in their place. The Levites must discover new roles — singers, judges, keepers of the gates. The work changes. But they remain called to serve.',
        },
        {
          kind: 'hebrew',
          id: 'machleqot-divisions',
          title: 'Machleqot — "Courses" or "Divisions"',
          script: 'מַחְלְקוֹת',
          translit: '<strong>Machleqot</strong> · courses; divisions; the organized shifts by which priests and Levites rotated service',
          description:
            'The Levites are organized into courses — rotating shifts of service. Not all serve at once; instead, they come in their appointed times. This allows continuous worship without burdening any single family. It also ensures that every Levite, at some point in the year, returns to the temple. The courses are the heartbeat of the temple — its rhythm of ongoing, never-ceasing worship.',
        },
        {
          kind: 'carry',
          html:
            'The circumstances of our calling may change. What we were called to do in one season may be transformed in another. The Levites could not have continued as carriers once they were settled. But they remained Levites. Their identity did not rest on the particular form of their service, but on their consecration to God&apos;s work. What calling in your life needs to transform?',
        },
        {
          kind: 'reflection',
          id: 'temple-changes',
          prompt:
            'What role or responsibility have you been called to that has fundamentally changed? How did you adapt? What did you discover about yourself in that change?',
        },
      ],
    },

    /* ─── 1 Chronicles 23:27–32 — The Work of the Levites ────────────── */
    {
      ref: '1 Chronicles 23:27–32',
      title: 'Morning and Evening Praise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(
              27,
              'For by the last words of David the Levites were numbered from twenty years old and above:'
            ),
            plain(
              28,
              'Because their office was to wait on the sons of Aaron for the service of the house of the Lord, in the courts, and in the chambers, and in the purifying of all holy things, and the work of the service of the house of God;'
            ),
            plain(
              29,
              'Both for the shewbread, and for the fine flour for a meat offering, and for the unleavened cakes, and for that which is baked in the pan, and for that which is fried, and for all manner of measure and size;'
            ),
            plain(
              30,
              'And to stand every morning to thank and praise the Lord, and likewise at even;'
            ),
            plain(
              31,
              'And to offer all burnt sacrifices unto the Lord in the sabbaths, in the new moons, and on the set feasts, by number, according to the order commanded unto them, continually before the Lord:'
            ),
            plain(
              32,
              'And that they should keep the charge of the tabernacle of the congregation, and the charge of the holy place, and the charge of the sons of Aaron their brethren, in the service of the house of the Lord.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'office-wait',
          html:
            'The Levites&apos; office is to "wait on the sons of Aaron" — to serve the priests. They are supporting servants. They do not offer sacrifice; they do not burn incense; they do not bless. But they make all of it possible. They prepare the shewbread, maintain the chambers, purify the vessels. They are the invisible infrastructure of worship.',
        },
        {
          kind: 'commentary',
          id: 'morning-evening',
          html:
            'But they are not only servants in the mundane sense. "To stand every morning to thank and praise the Lord, and likewise at even" — this is their primary work. Every morning and every evening, the Levites gather to offer praise. The morning praise greets the new day with gratitude. The evening praise closes the day in thanks. The rhythm is constant, unbroken. The Levites are the voice of the temple — the ones who ensure that praise rises to heaven without ceasing.',
        },
        {
          kind: 'hebrew',
          id: 'hodah-thanks',
          title: 'Hodah — "Thanks" or "Praise"',
          script: 'הוֹדָה',
          translit: '<strong>Hodah</strong> · thanksgiving; praise; the act of confessing God&apos;s goodness',
          description:
            'Hodah is not passive gratitude — it is active, vocal praise. To offer hodah is to confess, to declare, to make known. The Levites do this morning and evening. They stand before the Lord and declare His goodness. They voice what might otherwise go unspoken. In their praise, the whole congregation finds its voice.',
        },
        {
          kind: 'christ',
          id: 'continual-praise',
          title: 'Christ Connection — The Perpetual Offering',
          html:
            'The Levites stand "morning and evening" to praise. Hebrews speaks of Christ as offering "one sacrifice for sins for ever" (Hebrews 10:12). But notice: "Let us continually offer the sacrifice of praise to God, that is, the fruit of our lips giving thanks to his name" (Hebrews 13:15). The continual offering is not the old sacrifices — those have ended in Christ. The continual offering is our praise. We are now the voice of the temple. We are the Levites, standing perpetually to offer thanks. The morning praise that greeted each day in the temple is now our constant adoration — "I praise thee seven times a day" (Psalm 119:164). And the evening praise closes not a day but an age, leading into the eternal worship of heaven.',
        },
        {
          kind: 'carry',
          html:
            'Praise is not a luxury or an afterthought in the life of faith. It is the primary work. The Levites could not neglect their praise to focus on the practical work of maintaining the temple. Praise came first. Everything else served it. What might change in your life if you treated praise as your primary work, not your hobby?',
        },
        {
          kind: 'reflection',
          id: 'morning-evening-praise',
          prompt:
            'When you wake, do you offer thanks? When you rest, do you praise? What would a rhythm of morning and evening praise look like in your own life?',
        },
      ],
    },
  ],
};
