import { hp, hy, hg, t, type RichChapterContent } from './types';

export const JOSHUA_21: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 21,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 13 },
  intros: [
    'Joshua 21 tells the story of God&apos;s faithfulness to a tribe that had no inheritance of land. The Levites had been set apart as priests and worship leaders, but God did not forget them. He commanded that they be given 48 cities scattered across all twelve tribes — so that the worship of God and the priesthood would be woven throughout the entire nation. Not concentrated in one holy capital, but dispersed everywhere Israel lived.',
    'The chapter opens with the Levites coming to Eleazar the priest and Joshua with their request: "The Lord commanded by the hand of Moses to give us cities to dwell in, with the suburbs thereof for our cattle." They have no complaints. They trusted God&apos;s promise, and now they come to receive what was promised. The cities are distributed by lot among the four main families of Levites — the Kohathites (who served as priests), the Gershonites, the Merarites, and others. Forty-eight cities, each with pastureland for their flocks.',
    'The chapter closes with one of the most stunning summaries in all of Joshua: three "alls" in a row. "And the Lord gave unto Israel all the land which he sware to give unto their fathers... And the Lord gave them rest round about... There failed not ought of any good thing which the Lord had spoken unto the house of Israel; all came to pass." Every word. Every promise. All fulfilled.',
  ],

  opener: {
    matchTitle: /levite|priest|city|inheritance|land|disperse/i,
    caption: 'Joshua 21 · The Levites&apos; Cities',
  },

  sections: [
    /* ─── Joshua 21:1–6 — The Levites&apos; Request ────────────────────────── */
    {
      ref: 'Joshua 21:1–6',
      title: 'The Request',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 1,
              spans: [
                t('Then came the chief of the fathers of the Levites unto '),
                t('Eleazar'),
                t(' the priest, and unto Joshua the son of Nun, and unto the chief of the fathers of the tribes of the children of Israel;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And they spake unto them at Shiloh in the land of Canaan, saying, '),
                t('The Lord commanded'),
                t(' by the hand of Moses to give us cities to dwell in, with the suburbs thereof for our cattle.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the children of Israel gave unto the Levites out of their inheritance, at the commandment of the Lord, these cities and their suburbs.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh-request-dignity',
          html:
            'Notice the Levites do not beg, plead, or question why they have not yet received what was promised. They come to the leadership — to Eleazar (who has authority), Joshua (who executed the conquest), and the tribal chiefs — and simply state what God commanded. They trust the promise so completely that they approach as those who have the right to receive, not as suppliants hoping for favor.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-leviyyim',
          title: 'Leviyyim — "Levites"',
          script: 'לְוִיִּם',
          translit: '<strong>leviyyim</strong> · those set apart for service',
          description:
            'The Levites were separated entirely from the land inheritance and given instead to God and to the priesthood. They had no portion among the tribes, yet they had the greatest privilege: to minister at the altar and teach God&apos;s law. This chapter shows that lacking land did not mean lacking provision or place.',
        },
        {
          kind: 'christ',
          id: 'christ-promise',
          title: 'Christ Connection — The Promised Care',
          html:
            'Jesus promises His disciples: "My sheep hear my voice, and I know them, and they follow me" (John 10:27). Like the Levites who relied on God&apos;s word for their provision, believers are called to trust that God will care for those who are set apart to serve Him. The Levites received 48 cities. Jesus says, "I go to prepare a place for you" (John 14:2). Different language, same God — the One who provides for His servants has not changed.',
        },
        {
          kind: 'carry',
          html:
            'If you have given up something — a career, a lifestyle, a plan you held closely — for the sake of serving God, Joshua 21 is written for you. The Levites had no land of their own. And the text will soon tell you that the Lord gave them rest on every side. The thing you gave up was never the provision. The provision comes from a different source: the God who remembers, who commands, who distributes according to His purpose.',
        },
        {
          kind: 'reflection',
          id: 'request-reflect',
          prompt:
            'What promise of God are you waiting to see fulfilled right now? Can you approach that wait the way the Levites approached Joshua — with trust in God&apos;s character, not anxiety about whether He will remember?',
        },
      ],
    },

    /* ─── Joshua 21:7–26 — The Priestly Cities ────────────────────────────── */
    {
      ref: 'Joshua 21:7–26',
      title: 'The Priestly Cities',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 7,
              spans: [
                t('So the children of Israel gave by lot out of their inheritance unto the Levites these cities with their suburbs, as the Lord commanded by the hand of Moses.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And they gave out of the tribe of the children of Judah, and out of the tribe of the children of Simeon, and out of the tribe of the children of Benjamin, '),
                hg('thirteen cities', 'aaron-cities'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'aaron-cities',
          html:
            'The Kohathites, especially the descendants of Aaron the high priest, received thirteen cities — a royal number. The text lists them: Hebron (a city of refuge), Libnah, Jattir, Eshtemoa, Holon, Debir, Ain, Juttah, Beth-shemesh from Judah; and Gibeon (significant: the place of David&apos;s threshing floor), Geba, Anathoth (which would later be the hometown of the prophet Jeremiah), and Almon from Benjamin. Every city was given to serve the people. Every city was a place where a priest stood ready to speak God&apos;s word.',
        },
        {
          kind: 'commentary',
          id: 'hebron-refuge',
          html:
            'Hebron is named explicitly as one of the cities of refuge — a place where someone who had killed another person unintentionally could flee for safety. So in Hebron, the priesthood and refuge were woven together. The priest served as the protector of the guilty-but-not-malicious. There is something profoundly tender here: ministry and mercy are the same work.',
        },
        {
          kind: 'carry',
          html:
            'You might live in a place where there is no pastor, no church building with a steeple, no priest in the front. But if you live where a believer lives, there is a city of refuge nearby. The priesthood of all believers means that anywhere a Christian stands, there is someone who can shelter a troubled conscience, point to God&apos;s mercy, and speak a word of reconciliation. You may be that person for someone this week.',
        },
        {
          kind: 'reflection',
          id: 'priestly-reflect',
          prompt:
            'Who in your immediate circle needs to know that refuge is nearby? Where can you be, this week, what Hebron was — a safe place where God&apos;s mercy is visible?',
        },
        {
          kind: 'artwork',
          matchTitle: /hebron|priest|city|levite/i,
          caption: 'Joshua 21:8–26 · The Priestly Cities',
        },
      ],
    },

    /* ─── Joshua 21:27–42 — The Other Levite Families ────────────────────── */
    {
      ref: 'Joshua 21:27–42',
      title: 'The Gershonites and Merarites',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 27,
              spans: [
                t('And unto the children of Gershon, of the families of the Levites, out of the other half tribe of Manasseh they gave '),
                hg('Golan in Bashan', 'golan-refuge'),
                t(' with her suburbs, to be a city of refuge for the slayer; and Beeshterah with her suburbs; two cities.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('All the cities of the children of Merari by their families, which were remaining of the families of the Levites, were '),
                hg('by lot twelve cities', 'merari-count'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'golan-refuge',
          html:
            'Golan, given to the Gershonites, was also a city of refuge. So was Shechem for the other Kohathites. Out of the 48 Levitical cities, six were cities of refuge — and every single one of them was a Levitical city. The priests were stationed at the very gates of mercy. The people could never separate the priesthood from refuge, the altar from asylum, the law from grace.',
        },
        {
          kind: 'commentary',
          id: 'merari-count',
          html:
            'The distribution echoes a divine mathematics. The Kohathites (including Aaron&apos;s line) received thirteen. The Gershonites received thirteen. The Merarites received twelve. A total of forty-eight cities, no more and no fewer than what the Lord commanded. Precision, fulfillment, and the care of administration — all are gifts from God.',
        },
        {
          kind: 'carry',
          html:
            'The Gershonites did not get Judah. The Merarites did not get Ephraim. Every family received what was appointed, and the text tells us none of them questioned the distribution. Contentment is not the absence of preference; it is the presence of trust in God&apos;s wisdom. You may not have the portion you would have chosen. The Levites didn&apos;t either. But if you believe God is distributing, that changes everything.',
        },
        {
          kind: 'reflection',
          id: 'distribution-reflect',
          prompt:
            'Is there a place or a calling or a portion of life where you&apos;re still wishing God had given you something different? What would it look like to accept His distribution as final?',
        },
      ],
    },

    /* ─── Joshua 21:43–45 — The "All" of Fulfillment ───────────────────────── */
    {
      ref: 'Joshua 21:43–45',
      title: '"All Came to Pass"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 43,
              spans: [
                t('And the Lord gave unto Israel '),
                hp('all the land', 'josh-all-land'),
                t(' which he sware to give unto their fathers; and they possessed it, and dwelt therein.'),
              ],
            },
            {
              number: 44,
              spans: [
                t('And the Lord gave them '),
                t('rest round about'),
                t(', according to all that he sware unto their fathers: and '),
                hy('there stood not a man', 'failed-not'),
                t(' of all their enemies before them; the Lord delivered all their enemies into their hand.'),
              ],
            },
            {
              number: 45,
              spans: [
                t('There failed not '),
                t('ought of any good thing'),
                t(' which the Lord had spoken unto the house of Israel; '),
                t('all came to pass'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-naphal',
          title: 'Naphal — "Failed"',
          script: 'נָפַל',
          translit: '<strong>naphal</strong> · to fall; here, to fail or be lacking',
          description:
            'The verb literally means "to fall," but here it carries the sense of something that was promised not falling short. Not one word of all God spoke failed — not a single promise fell to the ground. Every word, entire.',
        },
        {
          kind: 'commentary',
          id: 'josh-all-land',
          html:
            'Three times in these three verses, the word "all" appears: "all the land," "all that he sware," "all their enemies," "all came to pass." It is not half. Not most. Not what could be salvaged or negotiated. God gave all that He promised.',
        },
        {
          kind: 'christ',
          id: 'christ-all-pass',
          title: 'Christ Connection — Every Word Stands',
          html:
            'Jesus stood in the synagogue and said, "Heaven and earth shall pass away, but my words shall not pass away" (Matthew 24:35). What Joshua witnessed in the conquest — every promise, every word, standing firm — Jesus claims for Himself and for the God He represents. The measure by which Joshua knew God was faithful is the exact measure by which we know Christ. Not part of His word. All of it. All came to pass.',
        },
        {
          kind: 'commentary',
          id: 'failed-not',
          html:
            'This verse (21:45) is quoted and echoed throughout Scripture as the standard of God&apos;s promise-keeping. Solomon invokes it in 1 Kings 8:56: "Blessed be the Lord... there hath not failed one word of all his good promise." The promise that "nothing fails" becomes itself a promise that never fails.',
        },
        {
          kind: 'carry',
          html:
            'If you are waiting for a promise, do what Israel did: wait without complaint, come to receive what was commanded, and watch for the fulfillment. The text does not say the Levites had to fight for their cities or prove they deserved them. They simply came. They received. And they dwelt. Your work is not to make God remember. It is to believe He has, and to step into what He has already given.',
        },
        {
          kind: 'reflection',
          id: 'all-reflect',
          prompt:
            'What is one word God has spoken to your heart that you are still waiting to see "all come to pass"? How does knowing that God&apos;s words never fail change the way you wait?',
        },
        {
          kind: 'artwork',
          matchTitle: /fulfillment|promise|rest|land|joshua|conquest/i,
          caption: 'Joshua 21:43–45 · "All Came to Pass"',
        },
      ],
    },

    /* ─── The Levites Scattered — A Picture of the Church ──────────────────── */
    {
      ref: 'Joshua 21 · The Scattering',
      title: 'Worship Scattered Everywhere',
      blocks: [
        {
          kind: 'commentary',
          id: 'levites-scattered',
          html:
            'The Levites did not live in one holy city. They were dispersed — thirteen cities here, thirteen there, twelve in another region, scattered across the entire nation. This was intentional. The priesthood and the worship of God were woven into the fabric of Israel&apos;s life everywhere. A Levite could be found in Zebulun, in Naphtali, in Reuben, in Gad. God&apos;s word was not locked in a temple three days&apos; journey away. It was near.',
        },
        {
          kind: 'christ',
          id: 'church-scattered',
          title: 'Christ Connection — The Church Dispersed',
          html:
            'Jesus told His disciples, "You shall receive power after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth" (Acts 1:8). Just as the Levites were scattered so that every tribe had access to the priesthood, the church is sent out so that every place has access to the gospel. We are living as dispersed Levites. We are the priesthood now, planted not in one building, but in the neighborhoods, workplaces, and families where God has stationed us.',
        },
        {
          kind: 'carry',
          html:
            'You may never stand in a famous pulpit or lead a thousands-strong congregation. Most of us won&apos;t. But you are a Levite, appointed to a city — your neighborhood, your workplace, your block. And you are as necessary to God&apos;s purpose as any priest who stood in Hebron. The question is not whether God needs you in a more visible place. The question is whether you will be faithful in the place where He has planted you.',
        },
        {
          kind: 'reflection',
          id: 'scatter-reflect',
          prompt:
            'If you are a "Levite" — a servant of God — stationed in your particular city or neighborhood, what does that station call you to do? Who in your circle needs the priesthood of your faith, your prayer, your word?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Joshua 21',
    quote:
      'The Lord gave unto Israel all the land which he sware to give unto their fathers; and they possessed it, and dwelt therein. There failed not ought of any good thing which the Lord had spoken unto the house of Israel; all came to pass.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 21:43, 45 · Study Guide',
  },

  hasHebrew: true,
};
