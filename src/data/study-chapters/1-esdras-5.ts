import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Esdras 5 — The Return from Exile and the Foundation of the Temple
 *
 * 1 Esdras 5 parallels Ezra 2-3, chronicling the return of the Jewish people
 * from Babylonian exile. It opens with the decree and the people&apos;s response:
 * lists of returnees organized by family, by town, by ancestral line — about
 * 42,360 souls. They arrive in Jerusalem, settle, and in the seventh month
 * gather as one to set up the altar of the God of Israel. Then they lay the
 * foundation of the temple. The old priests and Levites who had seen the first
 * temple weep aloud; many shout for joy. The sound of weeping and joy is so
 * great it cannot be distinguished. Return is both restoration and loss.
 */
export const FIRST_ESDRAS_5: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 5,

  estimatedMinutes: { beginner: 8, intermediate: 13, deep: 18 },
  topicTags: ['return', 'worship', 'faithfulness', 'leadership'],
  opener: {
    topical: true,
    caption: '1 Esdras 5',
  },
  intros: [
    'The decree is issued by Cyrus of Persia: rebuild the temple of the Lord in Jerusalem. Families respond. Those in captivity begin to gather—not as scattered individuals, but as a covenant people. They collect offerings, they organize by family and by city, they prepare the long road home. Some have seen Jerusalem. Most have only stories.',
    'Upon arrival, the work begins immediately. The people settle into their cities. In the seventh month, they gather as one to rebuild the altar. Daily offerings resume. Morning and evening, the old rhythms return. Then comes the great moment: the foundation of the temple is laid. But this foundation is not met with simple celebration. The old men weep, remembering the former house. The young shout for joy. Both sounds are lifted to heaven at once. In that mingled noise, we hear the truth about restoration: it brings renewal and loss, hope and grief, all together.',
  ],

  sections: [
    /* ─── The Leaders of the Return ────────────────────────────────────── */
    {
      ref: '1 Esdras 5:1–6',
      title: 'The Leaders of the Return',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              1,
              t('Then cried Cyrus king of Persia, saying, '),
              hp('The Lord God of Israel hath commanded me to build him a house', 'esdras5-command'),
              t(' at Jerusalem in Jewry.')
            ),
            verse(
              2,
              t('Whosoever therefore of you be of his people, let the Lord his God be with him, and let him go up to Jerusalem in Jewry, and build the house of the Lord God of Israel, (for he is the God that dwelleth in Jerusalem:)'),
            ),
            verse(
              3,
              t('And wheresoever any man sojourning in any place shall find him, let the men of his place help him with gold, and with silver, and with gifts, and with beasts, and with additional votive offerings for the house of God at Jerusalem.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras5-command',
          html:
            'Cyrus the Persian king begins by declaring God&apos;s command. He does not possess Israel&apos;s faith, yet he speaks as if the Lord&apos;s will is evident to him. "The Lord God of Israel <em>hath commanded me</em>"—not that Cyrus believes, but that he acknowledges a power greater than his own throne. The decree is not a political favor; it is a divine mandate. The remnant goes home because God moves, even through a Persian king who does not know Him. [res:sefaria-ezra-2] [res:israel-museum-diaspora]',
        },
        {
          kind: 'commentary',
          id: 'esdras5-gather',
          html:
            'The call goes out to all who are willing. "Whosoever therefore of you be of his people"—this is not a draft, not a conscription. It is an invitation. Some will stay in exile, comfortable and settled. But those who hear the call, those who long to rebuild worship, they rise up. And those who stay are commanded to help: "let the men of his place help him with gold, and with silver, and gifts." There is no exile where the covenant of mutual aid breaks down[res:sefaria-1-esdras-5].',
        },
        {
          kind: 'christ',
          id: 'esdras5-christ-call',
          title: 'Christ Connection — Called by Name',
          html:
            'Jesus says, "My sheep hear my voice, and I know them, and they follow me" (John 10:27). Like the exiles who heard Cyrus&apos; decree and rose to return, we who hear the voice of Jesus are called by name to come home. The call is not to the masses; it is personal. And those who stay—the ones in the comfortable exile of the world—are themselves called to support the ones who answer. There is a fellowship of the return.',
        },
        {
          kind: 'carry',
          html:
            'Have you heard the call home? Not to a physical place, but to the One who calls you by name. Some return eagerly; some hang back. But listen: if you are with those who go, let those who stay help you. And if you are the one staying, let your heart be with those who answer the call. The covenant holds all together.',
        },
        {
          kind: 'reflection',
          id: 'esdras5-call-reflection',
          prompt:
            'What does it mean to "hear the call" to return to God? When have you felt called to leave a season of exile and return to close fellowship with Him?',
        },
      ],
    },

    /* ─── The Lists of Families ───────────────────────────────────────── */
    {
      ref: '1 Esdras 5:8–45',
      title: 'The Lists of Families and Their Numbers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              8,
              t('These are the children of the province: of the sons of Jeshua the son of Josedec, and of his brethren, the priests: The sons of Jesus, of the house of Jeshua were nine hundred seventy and two.')
            ),
            verse(
              9,
              t('The sons of Immer, two thousand and fifty and six.')
            ),
            verse(
              10,
              t('The sons of Pashur, a thousand two hundred forty and seven.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras5-genealogy',
          html:
            'The lists span nearly forty verses—family after family, number after number. Jeshua brings 972. Immer, 2,056. Pashur, 1,247. To modern ears, this may sound tedious, a mere census. But in the ancient world, genealogy is identity. To be listed is to be recognized. To be named is to be affirmed as part of the people. The numbers tell a story: the exile did not erase them. The families survived. They return not as individuals, but as a people bound by lineage and covenant.',
        },
        {
          kind: 'hebrew',
          id: 'esdras5-shem',
          title: 'Shem — Name; Lineage',
          script: 'שֵׁם',
          translit: '<strong>Shem</strong> · name; reputation; identity',
          description:
            'In Hebrew, a name is not a label attached to a person; it is the expression of one&apos;s essence, one&apos;s identity within the covenant. To be named in the genealogy is to be affirmed: you are known by God, you belong to a people, your life has significance. The lists are not bureaucratic; they are sacred.',
        },
        {
          kind: 'carry',
          html:
            'In a world of vast numbers and digital identities, it is easy to feel like a statistic. But in Scripture, a name means everything. You are not a number. Your family line is not forgotten. God knows you—not as a crowd, but by name. Your existence matters, your restoration matters, your return home matters to Him.',
        },
        {
          kind: 'reflection',
          id: 'esdras5-identity',
          prompt:
            'What does it mean to be known by name rather than by number? How does being counted as part of God&apos;s people change your sense of identity?',
        },
      ],
    },

    /* ─── Settling in Their Cities ────────────────────────────────────── */
    {
      ref: '1 Esdras 5:46–50',
      title: 'Settling in Their Cities',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              46,
              t('So all Israel, and the priests, and the Levites, and the other that were separated from the heathen of the land, got themselves unto Jerusalem, and all dwelt in the cities.')
            ),
            verse(
              47,
              t('But when the seventh month was at hand, and when the children of Israel were every man in his own city, they gathered themselves together with a common consent to Jerusalem.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras5-settlement',
          html:
            'The journey is complete. The returnees settle—each family in their city, each man in his own place. This is not displacement; this is homecoming. They know the streets. They know the inheritances of their fathers. They take possession again. For a moment, they simply live, they rest, they reestablish themselves in the land. Yet the journey does not end in settlement. There is something greater calling them.',
        },
        {
          kind: 'commentary',
          id: 'esdras5-gather-one',
          html:
            'When the seventh month comes, the people gather again—"with a common consent." They rise from their cities and come together at Jerusalem. Not forced. Not commanded by an outside power. They gather of one mind, one purpose. To rebuild the altar. To restore worship. The return home is not the end; it is the beginning.',
        },
        {
          kind: 'christ',
          id: 'esdras5-christ-community',
          title: 'Christ Connection — Gathered with Common Consent',
          html:
            'Peter exhorts the early church, "Be ye all of one mind, having compassion one of another, love as brethren, be pitiful, be courteous" (1 Peter 3:8). The people gather "with a common consent"—not because they are forced, but because they share one purpose. So too, the Church gathers not by coercion, but by the Spirit, bound by common faith and common calling. That consent, that willingness, makes the gathering sacred.',
        },
        {
          kind: 'carry',
          html:
            'There is a difference between gathering because you must and gathering because you choose to, with all your heart. When you come to worship, to serve, to rebuild what has been broken—do you come with common consent, or out of habit? Let your gathering be a choice made fresh, a consent renewed.',
        },
        {
          kind: 'reflection',
          id: 'esdras5-consent',
          prompt:
            'When you gather with others in worship or service, are you gathering because you must, or with a "common consent"—a willing heart? How does that difference matter?',
        },
      ],
    },

    /* ─── Building the Altar ───────────────────────────────────────────── */
    {
      ref: '1 Esdras 5:51–58',
      title: 'Building the Altar and Offering Sacrifices',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              51,
              t('Then stood up Jeshua the son of Josedec, and his brethren the priests, and Zorobabel the son of Salathiel, and his brethren, and prepared the altar of the God of Israel,'),
            ),
            verse(
              52,
              t('To offer upon it burnt offerings, as it is described in the book of Moses the man of God.')
            ),
            verse(
              53,
              t('And there were gathered unto them out of the other people of the land, and they offered sacrifices upon the altar unto the Lord, their burnt offerings in the morning and the evening.')
            ),
            verse(
              54,
              t('They kept also the feast of tabernacles, as it is appointed in the law, and offered the daily sacrifices in the number required day by day;')
            ),
            verse(
              55,
              t('And after that the continual offerings, and the sacrifice on the sabbaths, and in the new moons, and on all the solemn feasts.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras5-altar-first',
          html:
            'Notice the order. Not the walls. Not the city. Not even the temple building yet. First, the altar. Jeshua the priest and Zorobabel the governor stand together, and they prepare the altar. The sacrifice comes before the sanctuary. The relationship with God comes before the building. Morning and evening, the ancient rhythm resumes. The people who have been silenced for seventy years begin to speak again in the language of sacrifice and praise.',
        },
        {
          kind: 'commentary',
          id: 'esdras5-feasts',
          html:
            'The feasts return. The Feast of Tabernacles. The sabbath offerings. The new moons. All the solemn feasts appointed in the law. The people do not just offer; they gather their whole calendar under God&apos;s rhythm. This is not hurried or haphazard. It is deliberate, ordered, covenantal. They have returned from exile, and with them they have brought the law, the memory, the structure of their faith.',
        },
        {
          kind: 'hebrew',
          id: 'esdras5-mizbeach',
          title: 'Mizbeach — "Altar"',
          script: 'מִזְבֵּחַ',
          translit: '<strong>Mizbeach</strong> · altar; the place where heaven and earth touch',
          description:
            'The altar stands at the intersection of divine and human. It is where the offering is made, where blood is poured out, where the covenant is renewed. To build the altar first is to declare with the people&apos;s actions: before we build walls, before we secure ourselves, we restore our communion with God.',
        },
        {
          kind: 'christ',
          id: 'esdras5-christ-sacrifice',
          title: 'Christ Connection — The Once-for-All Sacrifice',
          html:
            'The altar was the center of Israel&apos;s worship—but all those burnt offerings pointed forward. "By one offering he hath perfected for ever them that are sanctified" (Hebrews 10:14). Christ is the altar and the sacrifice both. When He offered Himself on the cross, all the altars of all the ages completed their meaning. The daily offerings of 1 Esdras, morning and evening, were whispers toward the one eternal offering. You do not need the altar now; the work is finished. But you carry in your heart the same awe the ancient people felt when they drew near to God.',
        },
        {
          kind: 'carry',
          html:
            'What comes first in your restoration? Not the perfect circumstances, not the completed vision, not the approval of others—but the return to the One who calls you home. The ancient rhythm, the daily discipline of communion, the offering of your heart: these come before the building of everything else. What altar do you need to rebuild first?',
        },
        {
          kind: 'reflection',
          id: 'esdras5-altar-reflection',
          prompt:
            'The people rebuild the altar before the temple. What does it mean to prioritize your relationship with God, your practices of prayer and communion, before you build everything else in your life?',
        },
      ],
    },

    /* ─── Laying the Foundation of the Temple ──────────────────────────── */
    {
      ref: '1 Esdras 5:59–61',
      title: 'Laying the Foundation with Singing and Music',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              59,
              t('Now in the second year after that they were come to the house of God at Jerusalem, in the second month, '),
              hg('Zorobabel the son of Salathiel', 'esdras5-zorobabel'),
              t(', and Jeshua the son of Josedec, and their brethren, and the priests and the Levites, and all they that were come out of the captivity unto Jerusalem, began the work, and appointed the Levites that were from twenty year old and upward to further the work of the Lord.')
            ),
            verse(
              60,
              t('Then stood up Jeshua with his sons and his brethren, and Kadmiel his brother, and the sons of Makellius, and the sons of Other, and Sabanniel, and the sons of Sanaias, and their sons and their brethren, all the Levites: the sons of the singers of the Lord in good accord, being under the hand of Asaph according to the commandment of David; and gatekeepers also of the temple.')
            ),
            verse(
              61,
              t('And when the builders laid the foundation of the temple of the Lord, they set the priests in their apparel with trumpets, and the Levites the sons of Asaph with cymbals, to praise the Lord, according to the ordinance of David king of Israel.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras5-zorobabel',
          html:
            'Zorobabel is a descendant of David, a governor anointed by the Spirit. Jeshua is the high priest. Together they represent the civil and spiritual authority of the people. The work is not begun by outside decree; it is begun by leaders whom the people recognize and follow. And it is not begun hastily. A full year passes from their arrival to the foundation. They have settled, organized, built the altar, established the rhythm of worship. Now, from that foundation, the work grows.',
        },
        {
          kind: 'commentary',
          id: 'esdras5-singers',
          html:
            'The singers gather. The Levites stand ready. The gatekeepers take their places. Every aspect of worship is ordered, each according to David&apos;s pattern. The Levites "in good accord"—again, that unity of purpose. And they bring with them cymbals and trumpets. Music is not incidental; it is central. The laying of the foundation is not a construction event; it is a liturgical act, a moment when heaven and earth meet in song.',
        },
        {
          kind: 'hebrew',
          id: 'esdras5-shochar',
          title: 'Shochar — "Trumpet"',
          script: 'שׁוֹפָר',
          translit: '<strong>Shochar</strong> · trumpet; the herald of God&apos;s presence',
          description:
            'The trumpet is not mere noise. It is the voice that announces the Lord&apos;s presence, that signals covenant, that calls the people to witness. When the priests blow the trumpet at the laying of the foundation, they are saying: the Lord is here, in this moment, in this work.',
        },
        {
          kind: 'christ',
          id: 'esdras5-christ-foundation',
          title: 'Christ Connection — The Chief Cornerstone',
          html:
            'Paul writes, "Now therefore ye are no more strangers and foreigners, but fellowcitizens with the saints, and of the household of God; and are built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone" (Ephesians 2:19–20). The foundation of the second temple was a moment of great joy—but Christ Himself is the true foundation. You are being built into a living temple, and the cornerstone is Christ. Every time you return to Him, every time you let yourself be fitted into His purposes, you are laying the foundation of that eternal house.',
        },
        {
          kind: 'carry',
          html:
            'You are being built, stone by stone, into a dwelling place of God. The foundation has already been laid—it is Christ. Your work is not to build the foundation, but to be fitted into it. Let yourself be placed where He would have you, shaped by His hands, joined to His purpose. The music of heaven sounds over you.',
        },
        {
          kind: 'reflection',
          id: 'esdras5-foundation-reflection',
          prompt:
            'If Christ is the foundation of your life, what does it mean to be "built into" that foundation? What needs to be fitted into place?',
        },
      ],
    },

    /* ─── Weeping with a Loud Voice, Shouting for Joy ─────────────────── */
    {
      ref: '1 Esdras 5:62–65',
      title: '"Weeping with a Loud Voice," "Shouting for Joy"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              62,
              t('But many of the '),
              hy('elder priests', 'esdras5-elders'),
              t(' and Levites and principal men, who were ancient, and had seen the former house, did bewray it by falling to the ground on their faces, '),
              hp('weeping with a loud voice', 'esdras5-weeping'),
              t(';')
            ),
            verse(
              63,
              t('Whereas many with trumpets and joy made great mirth.')
            ),
            verse(
              64,
              t('Insomuch that the trumpets might not be heard for the weeping of the people: yet notwithstanding the multitude sounded marvellously, so that it was heard afar off.')
            ),
            verse(
              65,
              t('So that ye could not distinguish the noise of the pipes that were played aloud, and of the sound of the trumpets, and the noise of rejoicing of the people; for the sound was heard afar off.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras5-elders',
          html:
            'The "elder priests and Levites"—those who had seen the first temple before Nebuchadnezzar burned it. They weep because they remember. This second temple will be smaller, less glorious, stripped of the treasures the first house held. Their tears are not weakness; they are the voice of memory, of covenant continuity. They know what is lost.',
        },
        {
          kind: 'commentary',
          id: 'esdras5-weeping',
          html:
            'The weeping is so loud it cannot be distinguished from the shouting. The text does not say "they wept while others shouted," as if the two emotions competed. It says the sounds cannot be told apart. Both voices, lifted together, create one overwhelming noise that travels "afar off." Restoration is not simple. It brings both gain and loss, grief and hope, all mingled together.',
        },
        {
          kind: 'greek',
          id: 'esdras5-phonē',
          title: 'Phonē — "Sound; Voice"',
          script: 'φωνή',
          translit: '<strong>Phonē</strong> · sound; voice; the cry of the soul',
          description:
            'Phonē is not mere noise. It is the expression of emotion, will, and witness. The sound of the people&apos;s mingled joy and sorrow is so loud it cannot be distinguished—because both are true, both are witnessed by heaven, both are part of the reality of return.',
        },
        {
          kind: 'christ',
          id: 'esdras5-christ-both-emotions',
          title: 'Christ Connection — Blessed Are They That Mourn',
          html:
            'Jesus said, "Blessed are they that mourn: for they shall be comforted" (Matthew 5:4). He did not say, "Do not mourn." He said, "Mourn—and you will be comforted." And He wept. Over Lazarus, over Jerusalem, over the cost of redemption. Jesus can hold both the joy of resurrection and the grief of loss. He validated the old man&apos;s tears and the young man&apos;s shout, because both are part of what it means to be human, to return, to be restored. His own cry on the cross held both: "My God, my God, why hast thou forsaken me?"—and yet, "Father, into thy hands I commend my spirit."',
        },
        {
          kind: 'carry',
          html:
            'Restoration is never pure joy. You gain something, and you lose something. Do not deny your grief for what is gone. Do not diminish your joy for what is coming. Both are true. Both are valid. Both are heard by God. Your sound—whether it is weeping or shouting, or the impossible mingling of both—reaches to heaven. You are not alone in it. Christ Himself has walked that path, holding both tears and triumph, and He stands with you.',
        },
        {
          kind: 'reflection',
          id: 'esdras5-both-emotions',
          prompt:
            'What restoration have you experienced that brought both joy and sorrow? How have you honored both feelings instead of pretending the difficult emotions away?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-ezra-2',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezra 2 — Registry of Returning Exiles',
      url: 'https://www.sefaria.org/Ezra.2',
      description: 'Families and possessions returning from Babylon; parallel to 1 Esdras 5.',
    },
    {
      id: 'israel-museum-diaspora',
      kind: 'museum',
      source: 'Israel Museum',
      label: 'Judean Diaspora Seals and Inscriptions',
      url: 'https://www.imj.org.il/',
      description: 'Artifacts from Babylonian Jewish communities and diaspora material culture.',
    },

  ],

  bottomShare: {
    quote:
      'But many of the elder priests and Levites and principal men, who were ancient, and had seen the former house, did bewray it by falling to the ground on their faces, weeping with a loud voice; whereas many with trumpets and joy made great mirth. So that ye could not distinguish the noise of the pipes and of the trumpets, and the noise of rejoicing; for the sound was heard afar off.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 5 · Study Guide',
  },

  hasHebrew: true,
};
