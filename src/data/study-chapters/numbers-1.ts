import { hp, hy, hg, t, type RichChapterContent } from './types';

export const NUMBERS_1: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 1,

  estimatedMinutes: { beginner: 8, intermediate: 10, deep: 13 },
  intros: [
    'Numbers 1 opens with God commanding a census: count every Israelite man twenty years old and older who is able to go to war. Twelve tribe leaders are named, and over the next four verses their runners go through the camp, numbering each tribe. The result: 603,550 men fit for war — a massive standing army, ready, known. By name and number, every one of them.',
    'The book opens in the wilderness, far from Egypt, far from home. In that vast, uncertain place, the first thing God does is not to promise safety, but to count. To notice. The Levites are excluded from the count — they have a different calling altogether, set apart for sanctuary service. But those who will fight? God wants them numbered not because He needs the data, but because He is the God who knows His people by name.',
  ],

  sections: [
    /* ─── Introduction to the Census ───────────────────────────────────── */
    {
      ref: 'Numbers 1:1–3',
      title: 'The Command to Number',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('And the Lord spake unto Moses in the wilderness of Sinai, in the tabernacle of the congregation, on the first day of the second month, in the second year after they were come out of the land of Egypt, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Take ye the sum of all the congregation of the children of Israel, after their families, by the house of their fathers, with the number of their names, every male by their polls;'),
              ],
            },
            {
              number: 3,
              spans: [
                t('From twenty years old and upward, all that are '),
                hg('able to go forth to war', 'c-militia'),
                t(' in Israel: thou and Aaron shall number them by their armies.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-militia',
          html:
            'The census is not a general roll. It counts only men twenty and older who can fight — Israel&apos;s militia. They are not being drafted yet; the text simply wants them numbered, accounted for, known. In a wilderness camp of perhaps two million people, the presence of God demands precision about who belongs.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-paqudu',
          title: 'Pequdim — &ldquo;those mustered&rdquo;',
          script: 'פְקוּדִים',
          translit: '<strong>pequdim</strong> · the mustered, the numbered ones',
          description:
            'The root <em>paqad</em> means to number, to muster, to take account of. Not as cattle, but as warriors — a people with agency, called by name. The book itself is called <em>Bemidbar</em> in Hebrew, &ldquo;in the wilderness,&rdquo; but the English name comes from the numbering.',
        },
        {
          kind: 'carry',
          html:
            'In a world that treats people as demographics or statistics, God is the God who numbers people by name. A teenager in your home whose name matters to Him. A coworker you pass without greeting. The person sleeping on the bench. Jesus made this plain: &ldquo;the very hairs of your head are all numbered&rdquo; (Matt. 10:30). Not because you&apos;re tracked like inventory — but because you&apos;re known like a child is known by her father.',
        },
        {
          kind: 'reflection',
          id: 'command',
          prompt: 'Who is one person in your life — someone easy to overlook — whom you could take time to know by name this week?',
        },
      ],
    },

    /* ─── Reuben through Judah ─────────────────────────────────────────── */
    {
      ref: 'Numbers 1:4–15',
      title: 'The Tribe Leaders Named',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 4,
              spans: [
                t('And with you there shall be a man of every tribe; every one head of the house of his fathers.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And these are the names of the men that shall stand with you: of the tribe of '),
                hg('Reuben', 'tribe-reuben'),
                t('; Elizur the son of Shedeur.'),
              ],
            },
            {
              number: 6,
              spans: [t('Of Simeon; Shelumiel the son of Zurishaddai.')],
            },
            {
              number: 7,
              spans: [t('Of Judah; Nahshon the son of Amminadab.')],
            },
            {
              number: 8,
              spans: [t('Of Issachar; Nethaneel the son of Zuar.')],
            },
            {
              number: 9,
              spans: [t('Of Zebulun; Eliab the son of Helon.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num1-east-tribes',
          html:
            'The first six tribes listed are the firstborn of Jacob and the descendants of Leah — the eastern or &apos;traditional&apos; line[res:bible-odyssey-tribes-israel]. Reuben, though firstborn, is often passed over; here he stands first among leaders, a reminder that God&apos;s ordering is not always what we expect. Each leader brings his tribe, each tribe brings its count.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 10,
              spans: [t('Of the children of Joseph: of Ephraim; Elishama the son of Ammihud: of Manasseh; Gamaliel the son of Pedahzur.')],
            },
            {
              number: 11,
              spans: [t('Of Benjamin; Abidan the son of Gideoni.')],
            },
            {
              number: 12,
              spans: [t('Of Dan; Ahiezer the son of Ammishaddai.')],
            },
            {
              number: 13,
              spans: [t('Of Asher; Pagiel the son of Ocran.')],
            },
            {
              number: 14,
              spans: [t('Of Gad; Eliasaph the son of Deuel.')],
            },
            {
              number: 15,
              spans: [t('Of Naphtali; Ahira the son of Enan.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tribe-reuben',
          html:
            'The twelve tribal leaders are named — a roll call of their fathers and fathers&apos; fathers, a genealogical stamp on each man&apos;s identity. These names may look random to a modern reader, but each one anchors a family to a place and a history. The census is not abstract. It is the numbering of a <em>people</em>.',
        },
        {
          kind: 'carry',
          html:
            'Your name is not a label for a file. It is the sound of your particular story — your mother&apos;s hopes, your family&apos;s history, the God who called you before your parents did. To be known by name is to be loved for what you actually are, not what you can produce. Every person at your table, on your team, in your house has a genealogy God sees. What would change if you treated them that way?',
        },
        {
          kind: 'reflection',
          id: 'leaders',
          prompt: 'What is the story behind your own name? What does it tell about who your people hoped you&apos;d be?',
        },
      ],
    },

    /* ─── The Numbering Itself ─────────────────────────────────────────── */
    {
      ref: 'Numbers 1:20–46',
      title: 'The Tally by Tribe',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 20,
              spans: [
                t('And the children of Reuben, Israel&apos;s eldest son, by their generations, after their families, by the house of their fathers, according to the number of the names, by their polls, every male from twenty years old and upward, all that were able to go forth to war;'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Those that were numbered of them, even of the tribe of Reuben, were forty and six thousand and five hundred.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-reuben-count',
          html:
            'The numbering follows the same pattern for each tribe. The text does not narrate the process in detail — we see only the result. From Reuben to Naphtali, each tribe is counted, each tribe is known. Some tribes are larger, some smaller, but all are numbered with equal precision.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 40,
              spans: [
                t('Of the children of Asher, by their generations, after their families, by the house of their fathers, according to the number of the names, by their polls, every male from twenty years old and upward, all that were able to go forth to war;'),
              ],
            },
            {
              number: 41,
              spans: [
                t('Those that were numbered of them, even of the tribe of Asher, were '),
                hg('forty and one thousand and five hundred', 'c-asher-count'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-asher-count',
          html:
            'The repetition is crucial. Tribe after tribe receives the same treatment, the same careful accounting. A very large nation in a very small wilderness, each warrior known by name to the commander of heaven.',
        },
        {
          kind: 'christ',
          id: 'christ-knowing',
          title: 'Christ Connection — Known by Name',
          html:
            '&ldquo;The shepherd calleth his own sheep by name, and leadeth them out&rdquo; (John 10:3). Jesus described the relationship in the simplest terms: the shepherd knows each sheep; each sheep knows the shepherd&apos;s voice. Revelation echoes Numbers: &ldquo;And I saw, and behold a white horse: and he that sat upon him was called Faithful and True… And he had a name written, that no man knew, but he himself&rdquo; (Rev. 19:11–12). In the face of that vast numbered army, Jesus holds a secret name known only to Himself. You are known by Him in a way you are not known by anyone else.',
        },
        {
          kind: 'carry',
          html:
            'You are not a unit in God&apos;s spreadsheet. You are the one He called by name before the foundation of the world (Ephesians 1:4). When you pray in secret, He hears. When you weep, He counts it. The numbering in the wilderness is not about conscription or control — it is about a God who notices. Every warrior, every one. Do you feel that you matter to Him? Not because of what you can do, but because you are.',
        },
        {
          kind: 'reflection',
          id: 'counting',
          prompt: 'How does it change your day to know that God calls you by name, not because you&apos;ve earned it, but because you&apos;re His?',
        },
      ],
    },

    /* ─── The Total ────────────────────────────────────────────────────── */
    {
      ref: 'Numbers 1:46',
      title: 'The Sum',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 46,
              spans: [
                t('Even all they that were numbered were '),
                t('six hundred thousand and three thousand and five hundred and fifty'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-total',
          html:
            '603,550 men, able to go to war. An enormous number for the ancient world — a proof that God had kept His promise to Abraham to multiply his seed like the stars. But the text does not celebrate the number. It simply states it. The power is in the fact of the numbering, not in the size of the army.',
        },
        {
          kind: 'carry',
          html:
            'You may feel small in a world of 8 billion people. You may wonder if your prayers even reach heaven, if anything you do matters in a galaxy of galaxies. Numbers tells you: you are counted. Not lost in the crowd. Not a rounding error. Known.',
        },
      ],
    },

    /* ─── The Levites Set Apart ───────────────────────────────────────── */
    {
      ref: 'Numbers 1:47–54',
      title: 'The Levites, Separate and Known',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 47,
              spans: [
                t('But the '),
                hy('Levites', 'hebrew-levi'),
                t(' after the tribe of their fathers were not numbered among them.'),
              ],
            },
            {
              number: 48,
              spans: [
                t('For the Lord had spoken unto Moses, saying,'),
              ],
            },
            {
              number: 49,
              spans: [
                t('Only thou shalt not number the tribe of Levi, neither take the sum of them among the children of Israel:'),
              ],
            },
            {
              number: 50,
              spans: [
                t('But thou shalt appoint the Levites over the tabernacle of testimony, and over all the vessels thereof, and over all things that belong to it: they shall bear the tabernacle, and all the vessels thereof; and they shall minister unto it, and shall encamp round about the tabernacle.'),
              ],
            },
            {
              number: 51,
              spans: [
                t('And when the tabernacle setteth forward, the Levites shall take it down: and when the tabernacle is to be pitched, the Levites shall set it up: and the stranger that cometh nigh shall be put to death.'),
              ],
            },
            {
              number: 52,
              spans: [
                t('And the children of Israel shall pitch their tents, every man by his own camp, and every man by his own standard, throughout their hosts.'),
              ],
            },
            {
              number: 53,
              spans: [
                t('But the Levites shall pitch round about the tabernacle of testimony, that there be no wrath upon the congregation of the children of Israel: and the Levites shall keep the charge of the tabernacle of testimony.'),
              ],
            },
            {
              number: 54,
              spans: [
                t('And the children of Israel did according to all that the Lord commanded Moses, so did they.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-levi',
          title: 'Levi — &ldquo;attached, joined to&rdquo;',
          script: 'לֵוִי',
          translit: '<strong>Levi</strong> · from root <strong>lwh</strong>, to join, to cling',
          description:
            'The tribe of Levi bears the name of a different kind of belonging. Not mustered for war, but attached to the work of the tabernacle. Different calling, different number, same knowledge — the Levites are still known, still seen.',
        },
        {
          kind: 'commentary',
          id: 'c-levite-apart',
          html:
            'The Levites are not conscripted because their work is sanctuary service[res:sefaria-levites-service]. They bear the tabernacle, pitch it, guard it. This is not exile or punishment — it is <em>appointment</em>. The text calls them to a separate task in a way that still counts them, still knows them.',
        },
        {
          kind: 'christ',
          id: 'christ-household',
          title: 'Christ Connection — The Household of God',
          html:
            'Hebrews draws the line directly: &ldquo;For every house is builded by some man; but he that built all things is God. And Moses verily was faithful in all his house… But Christ as a son over his own house; whose house are we, if we hold fast the confidence&rdquo; (Heb. 3:4–6). Just as the Levites were called not to fight but to maintain the Lord&apos;s house, believers are called to be living stones in the temple of the Spirit. Different from the world&apos;s armies. Called to tend the Lord&apos;s presence.',
        },
        {
          kind: 'carry',
          html:
            'You may be called to a different work than those around you. A nursing home where you sit with the lonely. A desk job that feels invisible while others lead visible movements. A home where you raise children God gave you to raise. Not everyone is numbered the same way, but everyone is known. If the Spirit has called you to your particular work — even a quiet work — you are as much the Lord&apos;s army as a warrior in the field.',
        },
        {
          kind: 'reflection',
          id: 'levite-work',
          prompt: 'What work has God appointed you to? Is it work you&apos;ve claimed, or are you still waiting for something that looks more significant?',
        },
        {
          kind: 'artwork',
          matchTitle: /tabernacle/i,
          caption: 'Numbers 1:50–53 · The Levites Guard the Tabernacle',
        },
      ],
    },

    /* ─── Conclusion: The Numbering Complete ──────────────────────────── */
    {
      ref: 'Numbers 1:54',
      title: 'Obedience and Witness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 54,
              spans: [
                t('And the children of Israel did '),
                hg('according to all that the Lord commanded Moses', 'c-obey'),
                t(', so did they.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-obey',
          html:
            'The chapter ends not with fanfare over the census numbers, but with the simple fact of obedience. Israel does what God commands. Not because the order makes military sense, but because the God who numbered them is worthy of obedience.',
        },
        {
          kind: 'christ',
          id: 'christ-army',
          title: 'Christ Connection — The Lamb&apos;s Army',
          html:
            'Revelation sees a final numbering: &ldquo;After this I beheld, and, lo, a great multitude, which no man could number, of all nations, and kindreds, and people, and tongues, stood before the throne, and before the Lamb, clothed with white robes&rdquo; (Rev. 7:9). And then, more specifically: &ldquo;And I heard the number of them which were sealed: and there were sealed an hundred and forty and four thousand of all the tribes of the children of Israel&rdquo; (Rev. 7:4). The numbering in the wilderness was a foreshadow. One day every name that was ever called by His voice will be sealed, numbered not for war but for eternity.',
        },
        {
          kind: 'carry',
          html:
            'This week, you are numbered in the army of Christ — not because you proved yourself, but because you answered when called. That makes you part of the greatest multiplication story in Scripture. You are one of a people that the nations said could never survive, yet who will stand before the throne forever. Live today like someone who knows she&apos;s been counted for something eternal.',
        },
        {
          kind: 'reflection',
          id: 'conclusion',
          prompt: 'What would it change about your choices this week if you really believed you were numbered among the Lamb&apos;s eternal army?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'God commanded a census of Israel — 603,550 men, each known by name and tribe. The Levites were set apart for tabernacle service. In a vast wilderness, every person was numbered because God knows His people.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 1 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-census-israel',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 1 — Census of Israel',
      url: 'https://www.sefaria.org/Numbers.1',
      description: 'Community-curated interpretations and medieval commentaries on the first census, including tribal organization and military structure.',
    },
    {
      id: 'bible-odyssey-tribes-israel',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Tribes of Israel',
      url: 'https://www.bibleodyssey.org/dictionary/tribes-of-israel/',
      description: 'Overview of the twelve tribes, their territories, genealogies, and their role in the wilderness camp and settlement.',
    },
    {
      id: 'sefaria-levites-service',
      kind: 'study',
      source: 'Sefaria',
      label: 'Levites — Sanctuary Service',
      url: 'https://www.sefaria.org/Leviticus.25.32',
      description: 'Comprehensive explanation of the Levites&apos; role in tabernacle service and their separate status from the military census.',
    },
  ],

  hasHebrew: true,
};
