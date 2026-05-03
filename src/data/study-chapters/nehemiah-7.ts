import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Nehemiah 7 — The Gates Set and the Genealogical Register
 *
 * When the wall of Jerusalem is complete, Nehemiah appoints faithful leaders
 * to oversee the city's security and restoration. He gives the authority to
 * Hananiah, a man who "feared God above many." Then Nehemiah discovers a
 * genealogical register of those who came up at the first — the original
 * returnees from Babylon — and uses it to organize and order the community.
 * Freewill offerings follow. The passage shows a rebuilt city, sparsely
 * populated but growing, with God's people identified by name and covenant.
 */
export const NEHEMIAH_7: RichChapterContent = {
  bookSlug: 'nehemiah',
  bookName: 'Nehemiah',
  chapter: 7,

  estimatedMinutes: { 5: 3, 10: 8, 15: 12 },
  intros: [
    'The wall is now complete. The gates are set. But Nehemiah knows that brick and stone are not enough — a city needs faithful guardians, trustworthy leadership, and a people ordered by covenant. So he appoints his brother Hanani and Hananiah, the ruler of the palace, to oversee Jerusalem. Hananiah is described in a single phrase that captures his entire character: he "feared God above many." This is leadership at its root.',
    'Then Nehemiah discovers something remarkable — a register of the genealogy of those who came up at the first, the original returnees from exile in Babylon. This list, preserved from the days of Zerubbabel and Joshua, becomes the spine of the restored community. Forty-two thousand three hundred sixty souls, named and numbered. Their servants, their animals, their gifts to rebuild the temple. The restored people are not a faceless crowd — they are known. They are reckoned. They are called by name.',
  ],

  bottomShare: {
    label: 'Share Nehemiah 7',
    quote:
      'The wall is rebuilt. Faithful leaders are appointed. The genealogical register is found. God&apos;s people are identified by name and called to covenant. The restoration continues.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Nehemiah 7 · Study Guide',
  },

  sections: [
    /* ─── Nehemiah 7:1–3 — Watchmen Appointed ──────────────────────────── */
    {
      ref: 'Nehemiah 7:1–3',
      title: 'Watchmen Set at the Gates',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'Now it came to pass, when the wall was built, and I had set up the doors, and the porters and the singers and the Levites were appointed,'),
            plain(2, 'That I gave my brother Hanani, and Hananiah the ruler of the palace, charge over Jerusalem: for he was a faithful man, and feared God above many.'),
            plain(3, 'And I said unto them, Let not the gates of Jerusalem be opened until the sun be hot; and while they stand by, let them shut the doors, and bar them: and appoint watches of the inhabitants of Jerusalem, every one in his watch, and every one over against his house.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'wall-complete-doors-set',
          html:
            'The wall is finished. The doors hang in their hinges. The porters, singers, and Levites are assigned to their stations. Nehemiah has overseen the physical restoration, but now turns to the human architecture of the city — the leadership. He does not distribute authority randomly. He gives it to trustworthy men, men rooted in prayer and the fear of God.',
        },
        {
          kind: 'commentary',
          id: 'hananiah-faithful',
          html:
            'Hananiah receives a designation that is both simple and profound: "he was a faithful man, and feared God above many." In the restored city, leadership flows from faithfulness. Hananiah is not chosen for wealth or military prowess, but for his character — his loyalty to God. He is a man for whom the fear of the Lord shapes every decision.',
        },
        {
          kind: 'hebrew',
          id: 'heb-emunah',
          title: 'אֱמוּנָה — Emunah',
          script: 'אֱמוּנָה',
          translit: '<strong>Emunah</strong> · faithfulness; reliability; trustworthiness; that which can be depended upon',
          description:
            'Hananiah&apos;s faithfulness is the Hebrew emunah — not mere sincerity, but the steady, dependable character that holds fast under pressure. Emunah is what makes a person worthy of trust in the eyes of heaven and earth. It is the quality that endures.',
        },
        {
          kind: 'hebrew',
          id: 'heb-yirat-elohim',
          title: 'יִרְאַת אֱלֹהִים — Yirat Elohim',
          script: 'יִרְאַת אֱלֹהִים',
          translit: '<strong>Yirat Elohim</strong> · the fear of God; reverent awe of the Divine; the beginning of all wisdom',
          description:
            'The fear of God is not terror, but reverent awe — the recognition that God is holy, that His will matters above all earthly politics. Hananiah&apos;s character is rooted in this fear. He rules the palace and oversees the city, but answers first to God. This reorients everything.',
        },
        {
          kind: 'commentary',
          id: 'gates-watchmen-orders',
          html:
            'Nehemiah&apos;s instructions are practical: do not open the gates until the sun is hot, so that the watchmen can see clearly. Every household bears responsibility for its own section of wall, its own watchmen. The restored city is not guarded by a distant garrison — it is guarded by the people who live in it. Covenant implies responsibility.',
        },
        {
          kind: 'carry',
          html:
            'Faithful leadership begins with the fear of God, not with titles or ambition. Hananiah is "a faithful man" — someone you can trust because his trust is first in heaven. When you place someone in authority, do you ask whether they are talented, or do you ask whether they are faithful? Do you ask whether they fear God above the opinions of people?',
        },
        {
          kind: 'reflection',
          id: 'watchmen-appointed',
          prompt: 'Who are the faithful people in your life — those who fear God above many? How have they demonstrated that faithfulness in moments when it cost them something?',
        },
      ],
    },

    /* ─── Nehemiah 7:4–5 — The City Sparsely Populated ─────────────────── */
    {
      ref: 'Nehemiah 7:4–5',
      title: 'A Large City, Yet Few People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(4, 'Now the city was large and great: but the people were few therein, and the houses were not builded.'),
            plain(5, 'And my God put into mine heart to gather together the nobles, and the rulers, and the people, that they might be reckoned by genealogy. And I found a register of the genealogy of them which came up at the first, and found written therein.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'city-large-few-people',
          html:
            'The wall protects a city that is mostly empty. This is not failure — it is the reality of restoration. The refugees have returned, but not in the numbers who left. Jerusalem is vast, with room for growth, but sparsely populated. The work of rebuilding the community is a long work, stretching into the future. The wall gives shelter, but people must follow.',
        },
        {
          kind: 'commentary',
          id: 'god-put-heart',
          html:
            'Nehemiah attributes the idea to God Himself: "My God put into mine heart to gather together the nobles, and the rulers, and the people, that they might be reckoned by genealogy." This is not Nehemiah&apos;s administrative impulse alone. He recognizes that the prompting comes from above. The restored people must be known by name, not as an anonymous crowd.',
        },
        {
          kind: 'hebrew',
          id: 'heb-yachas',
          title: 'יָחַשׂ — Yachas',
          script: 'יָחַשׂ',
          translit: '<strong>Yachas</strong> · to reckon genealogy; to trace descent; to register by family line',
          description:
            'The verb yachas carries the sense of reckoning, of placing each person within the fabric of their family and their people. It is not mere record-keeping, but the act of saying: you belong. You have a place. You are part of the covenant community by descent and by choice.',
        },
        {
          kind: 'commentary',
          id: 'register-found',
          html:
            'And then Nehemiah finds it — a register, preserved from the time of the first return under Zerubbabel and Joshua. This is the same list that appears in Ezra 2, the genealogy of the original returnees. The document itself is a miracle of preservation. In the midst of exile, diaspora, and loss, the names were kept. The covenant was not forgotten.',
        },
        {
          kind: 'carry',
          html:
            'God wants His people to know they are known. Not as numbers or statistics, but as names — each one part of a story that reaches back to the covenant and forward into an inheritance. You are not an accident or a crowd. You are named. You are reckoned. You belong to a people with a history and a future.',
        },
        {
          kind: 'reflection',
          id: 'city-sparsely-populated',
          prompt: 'How does it feel to know that your name is written in God&apos;s register — that you are known and reckoned? How might that change the way you see yourself and your place in God&apos;s people?',
        },
      ],
    },

    /* ─── Nehemiah 7:6–69 — The Genealogical Register ──────────────────── */
    {
      ref: 'Nehemiah 7:6–69',
      title: 'The People Reckoned by Genealogy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(6, 'These are the children of the province that went up out of the captivity of those that had been carried away, whom Nebuchadnezzar the king of Babylon had carried away, and came again to Jerusalem and to Judah, every one unto his city;'),
            plain(7, 'Who came with Zerubbabel, Jeshua, Nehemiah, Azariah, Raamiah, Nahamani, Mordecai, Bilshan, Mispereth, Bigvai, Nehum, Baanah. The number of the men of the people of Israel:'),
            plain(64, 'The whole congregation together was forty and two thousand three hundred and threescore:'),
            plain(65, 'Beside their servants and their maids, of whom there were seven thousand three hundred thirty and seven: and they had two hundred forty and five singing men and singing women.'),
            plain(66, 'Their horses, seven hundred thirty and six: their mules, two hundred forty and five:'),
            plain(67, 'Their camels, four hundred thirty and five: their asses, six thousand seven hundred and twenty.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'register-introduction',
          html:
            'The register is introduced as the genealogy of those who came up out of the captivity — those whom Nebuchadnezzar carried away to Babylon. They are no longer captives, but they are defined by their return. Their identity is rooted in both exile and restoration. They are the remnant.',
        },
        {
          kind: 'commentary',
          id: 'zerubbabel-leaders',
          html:
            'The leaders of the return are named — Zerubbabel, Jeshua (who rebuilt the altar), Nehemiah (a different Nehemiah from our author, one of the original leaders of the first return), Azariah, and others. These names echo the great restoration under the Persians, when Cyrus decreed that the exiles could return. They are the pioneers of the restoration.',
        },
        {
          kind: 'commentary',
          id: 'forty-two-thousand',
          html:
            'Forty-two thousand three hundred sixty — the number of the whole congregation. Each number represents a family, a household, a branch of the covenant people. They bring their servants, their animals, their resources. The restored community is not just people, but a functioning society with livestock, singers, musicians. They are building a city, not a refugee camp.',
        },
        {
          kind: 'commentary',
          id: 'singers-and-musicians',
          html:
            'Among them are two hundred forty and five singing men and singing women. Worship is woven into the fabric of restoration. The singers are as important to the city as the soldiers. Praise and lament, thanksgiving and prayer — these are essential to the people&apos;s identity. A restored city sings.',
        },
        {
          kind: 'hebrew',
          id: 'heb-kahal',
          title: 'קָהָל — Kahal',
          script: 'קָהָל',
          translit: '<strong>Kahal</strong> · assembly; congregation; people gathered in covenant',
          description:
            'The register speaks of "the congregation" — kahal in Hebrew, the assembled people bound together by covenant. This is not simply a census. It is a reckoning of the covenant community, those who have answered the call to return and rebuild. To be counted is to be bound to the people and its destiny.',
        },
        {
          kind: 'carry',
          html:
            'You are part of a people with a number, a name, a genealogy. Not a statistic, but a story. The register keeps the names so that no one is forgotten, no one is lost in the crowd. Your family line, your story, your place in the covenant — these matter. You are not an isolated individual, but part of a people with a past and a future.',
        },
        {
          kind: 'reflection',
          id: 'genealogy-register',
          prompt: 'What does your own genealogy tell you about your family&apos;s journey? How does knowing that you are part of a people with a history change the way you see yourself?',
        },
      ],
    },

    /* ─── Nehemiah 7:70–72 — The Freewill Offerings ────────────────────── */
    {
      ref: 'Nehemiah 7:70–72',
      title: 'The Freewill Offerings of the Chief',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(70, 'And some of the chief of the fathers gave unto the work. The Tirshatha gave to the treasure one thousand drams of gold, fifty basons, five hundred and thirty priests&apos; garments.'),
            plain(71, 'And some of the chief of the fathers gave to the treasure of the work twenty thousand drams of gold, and two thousand and two hundred pound of silver.'),
            plain(72, 'And that which the rest of the people gave was twenty thousand drams of gold, and two thousand pound of silver, and threescore and seven priests&apos; garments.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tirshatha-offering',
          html:
            'The Tirshatha — the Persian governor — leads the way with his gift: one thousand drams of gold, fifty basons, five hundred thirty priests&apos; garments. His gift is princely, but more importantly, it sets a precedent. Leadership is measured by what you give to the work of God.',
        },
        {
          kind: 'commentary',
          id: 'chief-fathers-offer',
          html:
            'The chief of the fathers — the heads of the great houses — follow. Their collective gift is vast: twenty thousand drams of gold and two thousand two hundred pound of silver. These are not token gifts. These are substantial sacrifices given to rebuild the temple, to restore the worship of God.',
        },
        {
          kind: 'commentary',
          id: 'people-offer',
          html:
            'And the rest of the people add their own gifts: twenty thousand drams of gold, two thousand pound of silver, sixty-seven priests&apos; garments. The offering is not just from the elite, but from the whole people. Everyone who can give, gives. The restoration is a covenant act, not an act of obligation.',
        },
        {
          kind: 'carry',
          html:
            'The wall is built. The gates are set. The people are named. But the covenant still requires the giving of the heart. Gold and silver, robes for the priests, everything needed for worship — these are offered not because the law demands it, but because the people understand: restoration is a shared work. We give from what we have to build what God intends.',
        },
        {
          kind: 'reflection',
          id: 'freewill-offerings',
          prompt: 'What have you given, freely and gladly, to something larger than yourself? What does your giving tell you about what you truly value?',
        },
      ],
    },

    /* ─── Nehemiah 7:73 — The City Restored ──────────────────────────────── */
    {
      ref: 'Nehemiah 7:73',
      title: 'The Dwelling and the Beginning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(73, 'So the priests, and the Levites, and the porters, and the singers, and some of the people, and the Nethinims, and all Israel, dwelt in their cities; and when the seventh month came, the children of Israel were in their cities.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'all-israel-dwell',
          html:
            'The restored community settles into the restored city. Priests, Levites, porters, singers — the whole structure of temple worship is in place. The Nethinims, the temple servants, have their station. The people dwell in their cities. The restoration is not complete — it is beginning. There is much more work ahead, much more growth to come. But the foundation is laid. The people are named. The gates are guarded. Worship continues.',
        },
        {
          kind: 'christ',
          id: 'christ-known-by-name',
          title: 'Christ Connection — Known by Name',
          html:
            'Jesus says, "The shepherd calleth his own sheep by name, and leadeth them out" (John 10:3). Like the genealogical register, where every name is kept and known, Christ knows His own by name. In Revelation 21:27, we read that only those "written in the Lamb&apos;s book of life" enter the heavenly city. Just as Nehemiah discovered the register that kept alive the identity of the returned people, Christ keeps a record of those who are His own. You are known. Your name is written. You are not a stranger, but one of His sheep, called by name into His fold.',
        },
        {
          kind: 'carry',
          html:
            'The work of restoration continues beyond this chapter. Walls are rebuilt, gates are set, leaders are appointed, the people are named and gathered. But there is more to come — the reading of the Law, the celebration of the Feast of Booths, the confession of sin, the sealing of the covenant. The wall is not the end; it is the beginning. In your own life, do you see that restoration is a beginning, not an ending? Is there more God is calling you toward?',
        },
        {
          kind: 'reflection',
          id: 'dwelling-cities',
          prompt: 'When Nehemiah&apos;s work is complete, the people dwell in their cities — they have a home. What would it mean for you to fully settle into your home — to the place God has called you — with all your heart?',
        },
      ],
    },
  ],
};
