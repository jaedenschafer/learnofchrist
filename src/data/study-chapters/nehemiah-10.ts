import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Nehemiah 10 — The Sealed Covenant
 *
 * The people of Jerusalem, newly gathered from exile, gather to seal a covenant
 * in writing. Named sealers — Nehemiah the Tirshatha, priests, Levites, and the
 * chief of the people — pledge their lives to the Law of God. This is not a
 * vague affirmation. It is a specific, binding agreement: they will separate
 * from the pagan nations, observe the Sabbath, forgive debts, bring offerings
 * and firstfruits, pay the temple tax, and never forsake the house of God.
 * In writing. With names. With teeth. This is what covenant looks like when
 * it is serious.
 */
export const NEHEMIAH_10: RichChapterContent = {
  bookSlug: 'nehemiah',
  bookName: 'Nehemiah',
  chapter: 10,

  estimatedMinutes: { beginner: 6, intermediate: 11, deep: 16 },
  intros: [
    'The wall is rebuilt. The gates are hung. The dedication has been celebrated. And now, in chapter 10, the people of Jerusalem stand to seal a covenant — not in secret, not in whispers, but openly, with witnesses, in writing, with the names of the signatories recorded for all generations to see.',
    'This chapter is dense with names, lists, and specific commitments. It is easy to rush through it, to see it as mere administrative record. But it is far more: it is a snapshot of a people who have learned, through seventy years of exile, what it costs to turn away from God, and what it takes to turn back.',
  ],

  bottomShare: {
    label: 'Share Nehemiah 10',
    quote:
      'And we made a sure covenant, and wrote it; and our princes, Levites, and priests, sealed unto it. The sealing of the covenant — specific, written, named, binding — shows what true commitment to God looks like.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Nehemiah 10 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-torah-scroll',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Torah and Jewish Law Texts',
      url: 'https://www.sefaria.org/',
      description: 'Sefaria Hebrew texts on Torah readings and covenant renewal.',
    },
  ],

  sections: [
    /* ─── Nehemiah 10:1–28 — The Sealers Are Named ─────────────────────── */
    {
      ref: 'Nehemiah 10:1–28',
      title: 'The Sealers Are Named',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(
              1,
              'Now those that sealed were, Nehemiah, the Tirshatha, the son of Hachaliah, and Zidkijah;'
            ),
            plain(
              2,
              'Seraiah, Azariah, Jeremiah, Pashhur, Amariah, Malchijah, Hattush, Shebaniah, Malluch, Harim, Meremoth, Obadiah, Daniel, Ginnethon, Baruch, Meshullam, Abijah, Mijamin, Maaziah, Bilgai, Shemaiah: these were the priests.'
            ),
            plain(
              3,
              'And the Levites: both Jeshua the son of Azaniah, Binnui of the sons of Henadad, Kadmiel; and their brethren, Shebaniah, Hodijah, Kelita, Pelaiah, Hanan, Mica, Rehob, Hashabiah, Zaccur, Sherebiah, Shebaniah, Hodijah, Bani, Beninu.'
            ),
            plain(
              4,
              'The chief of the people; Parosh, Pahath-moab, Elam, Zattu, Bani, Bunni, Azgad, Bebai, Adonijah, Bigvai, Adin, Ater, Hezekiah, Azzur, Hodijah, Hashum, Bezai, Hariph, Anathoth, Nebai, Magpiash, Meshullam, Hezir, Meshezabeel, Zadok, Jaddua, Pelatiah, Hanan, Anaiah, Hoshea, Hanaiah, Hasshub, Hallohesh, Pileha, Shobek, Rehum, Hashabnah, Maaseiah, and Ahijah, Hanan, Anan, Malluch, Elam, and Eloenai: of the chief of the people.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'sealers-named',
          html:
            'Nehemiah heads the list, identified as the Tirshatha — a Persian title meaning "governor" or "the feared one." His name is first because his authority underwrites the covenant. Then come the names of the priests and Levites, the religious leadership. Finally, the chief of the people — the lay leaders who represent the community. These are not anonymous masses. These are named individuals, putting their names to a written agreement before witnesses. What they are about to pledge, they pledge publicly, with their reputations at stake. [res:sefaria-torah-scroll]',
        },
        {
          kind: 'commentary',
          id: 'list-significance',
          html:
            'The repetition of these names might seem tedious to a modern reader, but in the ancient world, a written list was a legal document. These names were a record. They were proof. They said: "We were there. We heard the covenant. We sealed it with our names." The list transforms an oral ceremony into a binding legal instrument.',
        },
        {
          kind: 'hebrew',
          id: 'nehemiah-asaph',
          title: 'אָסַף Asaph — "To Gather" or "To Seal"',
          script: 'אָסַף',
          translit: '<strong>Asaph</strong> · to gather, to collect, to assemble; metaphorically, to seal an agreement',
          description:
            'The Hebrew root asaph, meaning to gather or collect, is also used of gathering and sealing a covenant. The priests and people "gathered" (assembled) and "sealed" (asaph) the covenant. It is a gathering that results in a binding agreement — individuals assembled into a unified body, their separate wills gathered into one.',
        },
        {
          kind: 'carry',
          html:
            'In a world where authority is often exercised from a distance, these named individuals stepped forward. They did not hide behind a crowd. They affixed their names to a commitment. What would it mean, in your own spiritual life, to name yourself publicly as someone committed to following God? What doors would that open? What vulnerabilities would it create?',
        },
        {
          kind: 'reflection',
          id: 'covenant-sealers',
          prompt:
            'These sealers put their names to a written agreement. What difference does it make when you go public with a spiritual commitment, rather than keeping it private?',
        },
      ],
    },

    /* ─── Nehemiah 10:28–30 — A People Separated Themselves ────────────── */
    {
      ref: 'Nehemiah 10:28–30',
      title: 'A People Separated and Entered Into Oath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 28,
              spans: [
                t('And the rest of the people, the priests, the Levites, the porters, the singers, the Nethinims, and all they that had '),
                hg('separated themselves from the people of the lands unto the law of God', 'sep-separated'),
                t(', their wives, their sons, and their daughters, every one having knowledge, and having understanding;'),
              ],
            },
            {
              number: 29,
              spans: [
                t('They '),
                hy('clave to their brethren', 'sep-clave'),
                t(', their nobles, and '),
                hy('entered into a curse, and into an oath', 'sep-oath'),
                t(', to walk in God&apos;s law, which was given by Moses the servant of God, and to observe and do all the commandments of the Lord our Lord, and his judgments and his statutes;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sep-separated',
          html:
            'The text tells us that these people "had separated themselves from the people of the lands unto the law of God." This is not merely ethnic separation. This is covenantal separation — a deliberate break from the religious and moral practices of the surrounding nations. They are choosing the God of Israel over the gods of Canaan, Persia, and the diaspora. And notably, everyone participates: wives, sons, daughters — not just the men, but everyone who "having knowledge, and having understanding" chooses to be part of this covenant.',
        },
        {
          kind: 'hebrew',
          id: 'sep-badal',
          title: 'בָּדַל Badal — "To Separate" or "To Divide"',
          script: 'בָּדַל',
          translit: '<strong>Badal</strong> · to separate, to set apart, to divide; to distinguish between holy and unholy',
          description:
            'The word for "separated" is badal, which carries the sense of making a distinction, of setting things apart as different and distinct. When Israel "separated" themselves, they were drawing a boundary: on one side, the law of God; on the other, the ways of the nations. This is not isolation born of hatred, but a choice born of conviction.',
        },
        {
          kind: 'commentary',
          id: 'sep-clave',
          html:
            'The word "clave" is archaic English for "cleaved" — they clung to their brethren, they held fast to one another. This is not a covenant in which each person stands alone. It is a communal oath, where the people bind themselves together in shared commitment. They are not solitary seekers; they are a covenant people.',
        },
        {
          kind: 'commentary',
          id: 'sep-oath',
          html:
            'They "entered into a curse, and into an oath" — a double binding formula. An oath is a promise sworn. A curse is the consequence of breaking that promise. To enter into both is to say: "We promise this binding commitment, and if we break it, we invoke judgment upon ourselves." This is how serious covenant-making was in the ancient world — not a gentle intention, but a life-and-death pledge.',
        },
        {
          kind: 'hebrew',
          id: 'sep-alah',
          title: 'אָלָה Alah — "Curse" or "Oath"',
          script: 'אָלָה',
          translit: '<strong>Alah</strong> · oath, curse; a binding pledge with a consequence for breaking',
          description:
            'The Hebrew word alah refers both to a curse and to an oath — they are two sides of the same coin. To swear an oath is to invoke a curse upon yourself if you break it. The people are not entering into a casual agreement. They are entering into a binding pledge that carries weight, that has teeth.',
        },
        {
          kind: 'carry',
          html:
            'True covenant requires something more than good intentions. It requires a binding commitment made publicly, with consequences for breaking it. In our own lives, what would it look like to make spiritual commitments with that kind of seriousness — not casually, but with the weight of an oath, knowing that we are inviting accountability?',
        },
        {
          kind: 'reflection',
          id: 'sep-reflect',
          prompt:
            'What does it mean to "separate yourself from the people of the lands"? How do you draw boundaries between your own values and the values of the culture around you, while still living in that culture?',
        },
      ],
    },

    /* ─── Nehemiah 10:30–39 — The Specific Commitments ─────────────────── */
    {
      ref: 'Nehemiah 10:30–39',
      title: 'The Specific Commitments',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 30,
              spans: [
                t('And that we would not '),
                hy('give our daughters unto the people of the land, nor take their daughters for our sons', 'comm-intermarriage'),
                t(';'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And if the people of the land bring ware or any victuals on the sabbath day to sell, we will not buy it of them on the sabbath, or on the holy day: and that we would '),
                hy('leave the seventh year, and the exaction of every debt', 'comm-sabbath-year'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'comm-intermarriage',
          html:
            'The first specific commitment: no intermarriage with the peoples of the lands. This is not racism; it is religious. The concern is not ethnicity, but covenant. Intermarriage would lead to divided loyalties, to pressure to worship foreign gods, to the erosion of the commitment to the God of Israel. By the time of Nehemiah, this has become a critical issue — Ezra will later address it directly. Here, the people pledge to maintain the integrity of their covenant community by not mingling with those who do not share their faith.',
        },
        {
          kind: 'commentary',
          id: 'comm-sabbath-year',
          html:
            'The second commitment: they will honor the Sabbath, refusing to buy goods on the Sabbath or the holy days. And crucially, they will observe the Sabbatical Year — every seventh year, they will leave the land unworked and forgive all debts. This is radical economic practice. It says: the land is God&apos;s, not ours. Every seventh year belongs to God and to the poor. This was commanded in the Law of Moses, but it had been neglected. Now the people commit to it again.',
        },
        {
          kind: 'hebrew',
          id: 'comm-shemitah',
          title: 'שְׁמִטָּה Shemitah — "Letting Go" or "Sabbath Year"',
          script: 'שְׁמִטָּה',
          translit: '<strong>Shemitah</strong> · the seventh year; release; letting go',
          description:
            'The Hebrew shemitah, from the root meaning "to send away" or "to let go," refers to the Sabbatical Year when debts are forgiven and the land is left fallow. It is an act of faith and of mercy — an acknowledgment that the land belongs to God, and that human debts, human cycles, are subject to a higher rhythm.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 32,
              spans: [
                t('Also we made ordinances for us, to charge ourselves yearly with the third part of a shekel for the service of the house of our God; for the shewbread, for the continual meat offering, the continual burnt offering, of the sabbaths, of the new moons, for the set feasts, for the holy things, and for the sin offerings to make an atonement for Israel, and for all the work of the house of our God.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And we cast the lots among the priests, the Levites, and the people, for the wood offering, to bring it into the house of our God, after the houses of our fathers, at times appointed year by year, to burn upon the altar of the Lord our God, as it is written in the law:'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And to bring the '),
                hy('firstfruits of our ground', 'comm-firstfruits'),
                t(', and the firstfruits of all fruit of all trees, year by year, unto the house of the Lord:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah_10_v32-38',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 35,
              spans: [
                t('And the '),
                hy('firstborn of our sons, and of our cattle', 'comm-firstborn'),
                t(', as it is written in the law, and the firstlings of our herds and of our flocks, to bring to the house of our God, unto the priests that minister in the house of our God:'),
              ],
            },
            {
              number: 36,
              spans: [
                t('And that we should bring the firstfruits of our dough, and our offerings, and the fruit of all manner of trees, of wine and of oil, unto the priests, to the chambers of the house of our God; and the '),
                hy('tithes of our ground unto the Levites', 'comm-tithes'),
                t(': that the Levites might have tithes in all the cities of our tillage.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('And the priest the son of Aaron shall be with the Levites, when the Levites take tithes: and the Levites shall bring up the tithe of the tithes unto the house of our God, to the chambers, into the treasure house.'),
              ],
            },
            {
              number: 38,
              spans: [
                t('For the children of Israel and the children of Levi shall bring the offering of the corn, of the new wine, and the oil, unto the chambers: and the priests that minister, and the porters, and the singers, shall be there: and we will not forsake the house of our God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'comm-firstfruits',
          html:
            'The commitment to bring the firstfruits of the ground and all fruit — not just a portion, but the first and the best. This is an act of faith. You harvest your field, and the first and finest fruit goes not to you or your family, but to the house of God. It says: God is first. His house receives the first claim on what I have.',
        },
        {
          kind: 'hebrew',
          id: 'comm-reshit',
          title: 'רֵאשִׁית Reshit — "First" or "Firstfruits"',
          script: 'רֵאשִׁית',
          translit: '<strong>Reshit</strong> · first, beginning, firstfruits; the very best',
          description:
            'The Hebrew reshit refers to the first, the beginning — and specifically to the firstfruits, the first and finest portion of the harvest. It is the same word used at the very beginning of Scripture: "In the beginning (reshit) God created the heavens and the earth." To bring the reshit to God is to acknowledge Him as the beginning, the source, the one who deserves the first and the best.',
        },
        {
          kind: 'commentary',
          id: 'comm-firstborn',
          html:
            'The commitment to bring the firstborn of their sons and cattle — a reference to the ancient practice of redeeming the firstborn (paying a price to God for them, rather than literally offering them as sacrifice). The firstborn represents the beginning of life, the promise of the future. To consecrate the firstborn is to say: the future belongs to God. My children are God&apos;s.',
        },
        {
          kind: 'commentary',
          id: 'comm-tithes',
          html:
            'The commitment to tithe — to give one tenth of the ground to the Levites, who do not own land, so they can be sustained in their service to the temple. And then the Levites themselves tithe to the priests. This is an intricate system of mutual support, all aimed at sustaining the work of the temple and the ministry of God.',
        },
        {
          kind: 'carry',
          html:
            'These commitments are concrete and costly. A third of a shekel per person per year. The firstfruits. The firstborn. The tithes. The people are not just promising to "be good" — they are committing to specific, recurring, expensive practices that will shape their economic lives. What would it mean to arrange your finances, your time, and your resources so that God is literally first in your budget, first in your calendar, first in your priorities?',
        },
        {
          kind: 'reflection',
          id: 'comm-reflect',
          prompt:
            'The people committed to give the firstfruits, the firstborn, and the tithes. What does it mean in your own life to give God the "first" of your resources — not the leftover, but the first and the best?',
        },
      ],
    },

    /* ─── Nehemiah 10:39 — We Will Not Forsake the House of Our God ────── */
    {
      ref: 'Nehemiah 10:39',
      title: 'We Will Not Forsake the House of Our God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 39,
              spans: [
                t('For the children of Israel and the children of Levi shall bring the offering of the corn, of the new wine, and the oil, unto the chambers: and the priests that minister, and the porters, and the singers, shall be there: and '),
                hp('we will not forsake the house of our God', 'forsake-conclusion'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'forsake-conclusion',
          html:
            'This is the covenant in a sentence. Everything that came before — the names, the separations, the specific commitments — culminates in this one affirmation: "We will not forsake the house of our God." We will not walk away. We will not drift. We will not let this sacred place fall into disrepair again. We will be here. We will be faithful. The promise is not to a doctrine or a set of rules, but to a place, a presence, a relationship with God that has a physical center.',
        },
        {
          kind: 'commentary',
          id: 'forsake-meaning',
          html:
            'To "forsake" in Hebrew (עָזַב azav) is to abandon, to leave behind, to let go. The people are making a binding promise not to abandon God&apos;s house — the temple, the place where heaven and earth meet, where God&apos;s presence dwells among His people. This is what they have come back from exile to do. This is why they rebuilt the wall. This is why they gathered.',
        },
        {
          kind: 'hebrew',
          id: 'forsake-azav',
          title: 'עָזַב Azav — "To Forsake" or "To Abandon"',
          script: 'עָזַב',
          translit: '<strong>Azav</strong> · to leave, to forsake, to abandon; to let go of',
          description:
            'The Hebrew azav, "to forsake," is used throughout Scripture to describe what happens when God&apos;s people turn away. "My God, why hast thou forsaken me?" But here, it is inverted: we will not forsake you. We will not abandon the house of your presence. We choose fidelity. We choose to stay.',
        },
        {
          kind: 'christ',
          id: 'forsake-christ',
          title: 'Christ Connection — The Mediator of a Better Covenant',
          html:
            'In Hebrews 8:6, Paul writes: "But now hath he obtained a more excellent ministry, by how much also he is the mediator of a better covenant, which was established upon better promises." The covenant sealed in Nehemiah 10 was written on parchment, sealed with names, requiring constant effort to maintain through tithes, offerings, and Sabbath-years. But Christ is the Mediator of a covenant written not on stone or parchment, but on the hearts of His people. His promises are better because they are grounded not in human effort or human faithfulness, but in His. And He never forsakes His Father&apos;s house — indeed, He is the true Temple, the place where God&apos;s presence dwells in fullness. When we commit to follow Christ, we are committing to the One who perfectly fulfills every offering, every firstfruits, every firstborn. He is the Firstborn of all creation (Colossians 1:15), and in Him, we become children of a covenant more excellent than Nehemiah&apos;s people could imagine.',
        },
        {
          kind: 'carry',
          html:
            'The people of Nehemiah&apos;s time stood and sealed a covenant to not forsake the house of God. They lived that commitment through concrete practices: through tithes and offerings, through Sabbath observance, through the rejection of the nations&apos; idolatries. We are invited into something deeper: a covenant written on hearts, a commitment to the One who never forsakes us. But that covenant, like Nehemiah&apos;s, will show itself in our actions, in our choices, in the way we order our lives around our allegiance to God.',
        },
        {
          kind: 'reflection',
          id: 'forsake-reflect',
          prompt:
            'What does it mean to "not forsake the house of God" in your own time? How do you show fidelity to God and His people through your choices and commitments?',
        },
      ],
    },
  ],
};
