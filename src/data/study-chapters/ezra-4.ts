import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezra 4 — The Adversaries Oppose; the Work Stops
 *
 * When the enemies of Judah and Benjamin learn that the captives are building
 * the temple, they come with an offer: "Let us build with you." They claim to
 * worship the same God, to sacrifice to him since the days of Esarhaddon.
 * But Zerubbabel and the elders refuse: "Ye have nothing to do with us."
 * The refusal is absolute. There can be no shared work, no mixed worship.
 *
 * What follows is a campaign of opposition using every tool of statecraft:
 * letters, accusations, false histories, royal decrees. The adversaries hire
 * counselors to frustrate the builders, and for years, the work stops. The
 * temple stands unfinished until a new decree from Darius permits it to resume.
 *
 * This is the danger of false partnership — and a type of the one True Builder
 * whose work cannot finally be opposed.
 */
export const EZRA_4: RichChapterContent = {
  bookSlug: 'ezra',
  bookName: 'Ezra',
  chapter: 4,

  estimatedMinutes: { 5: 7, 10: 11, 15: 15 },
  intros: [
    'The return from exile is a moment of hope. The captives have been freed by King Cyrus, God&apos;s instrument. The temple&apos;s foundation has been laid. The work is beginning. And then, at the very threshold of restoration, opposition arrives.',
    'The adversaries of Judah and Benjamin come with an offer that looks like help: "Let us build with you, for we seek your God as ye do." But Zerubbabel and the elders see what lies beneath the offer — a yoking with those whose worship is mixed with idolatry, whose God is mingled with the gods of Assyria. They refuse. The response triggers years of opposition: letters, accusations, false histories, royal decrees that bring the work to a halt. The temple stands unfinished for years, the builders caught between two kingdoms.',
    'In this chapter, we see the danger of false partnership and the cost of faithfulness. We also see a type of the true Builder of God&apos;s house — whose work no opposition can finally stop.',
  ],

  bottomShare: {
    label: 'Share Ezra 4',
    quote:
      'The enemy of God&apos;s work does not always come as a wolf. He comes as a partner, offering help and claiming to seek the same God. But the builders of God&apos;s house must know their allies, and refuse the hand that asks to compromise.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezra 4 · Study Guide',
  },

  sections: [
    /* ─── Ezra 4:1–3 — The Adversaries' Offer ────────────────────────────── */
    {
      ref: 'Ezra 4:1–3',
      title: 'The Enemy&apos;s Offer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('Now when the '),
                hg('adversaries of Judah and Benjamin', 'ezra4-adversaries'),
                t(' heard that the children of the captivity builded the temple unto the Lord God of Israel;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Then they came to Zerubbabel, and to the chief of the fathers, and said unto them, '),
                hg('Let us build with you', 'ezra4-offer'),
                t(': for we seek your God, as ye do; and we do sacrifice unto him since the days of Esar-haddon king of Assur, who brought us up hither.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('But Zerubbabel, and Jeshua, and the rest of the chief of the fathers of Israel, said unto them, '),
                hp('Ye have nothing to do with us to build an house unto our God', 'ezra4-refusal'),
                t('; but we ourselves together will build unto the Lord God of Israel, as king Cyrus the king of Persia hath commanded us.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra4-adversaries',
          html:
            'The word here is "adversaries" — but they do not come with swords. They come with words. They have heard that the temple is being built, and they understand what this means: the Jews are placing their trust in their own God, not in the gods of the land, not in the powers that conquered them. The adversaries are the remnants of the peoples who displaced Israel — those who were brought into the land by Assyrian kings, who worship a syncretism of Assyrian gods and the local religion.',
        },
        {
          kind: 'hebrew',
          id: 'ezra4-tsarei',
          title: 'Tsarei — "Adversaries"',
          script: 'צָרֵי',
          translit: '<strong>Tsarei</strong> · adversaries; those who constrain or hem in',
          description:
            'The Hebrew word carries the sense of one who constrains, narrows, or brings pressure. The adversaries are not neutral parties — they are those who press against, who create opposition. This is not accidental enmity; it is rooted in the restoration of Israel&apos;s own faith.',
        },
        {
          kind: 'commentary',
          id: 'ezra4-offer',
          html:
            'The offer sounds reasonable. "We seek your God as ye do." But the claim rings false. They have been sacrificing since the days of Esarhaddon, mixing the worship of YHWH with Assyrian deities. This is not the faith of the fathers of Israel. This is syncretism — the blending of the true God with false gods, of worship at the true altar with worship at idolatrous altars. The danger is real: if the builders accept this partnership, the temple becomes compromised. The work that was meant to restore Israel&apos;s faith becomes a monument to mixed worship.',
        },
        {
          kind: 'carry',
          html:
            'The enemy of our faith does not always come as open opposition. He comes offering help, claiming to seek the same God, suggesting partnership. But there are lines that cannot be crossed — lines between truth and falsehood, between worship that is pure and worship that is mixed. The builders of God&apos;s house must know their allies. They must be willing to stand alone rather than compromise the work.',
        },
        {
          kind: 'reflection',
          id: 'ezra4-offer-reflection',
          prompt: 'When have you encountered an offer of help that carried a hidden cost — a partnership that would require you to compromise your integrity or your faith? What did you do?',
        },
      ],
    },

    /* ─── Ezra 4:4–5 — Opposition Begins ──────────────────────────────────── */
    {
      ref: 'Ezra 4:4–5',
      title: 'The Hands Are Weakened',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 4,
              spans: [
                t('Then the people of the land '),
                hg('weakened the hands of the people of Judah', 'ezra4-weakened'),
                t(', and '),
                hg('troubled them in building', 'ezra4-troubled'),
                t(';'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And '),
                hg('hired counsellors against them', 'ezra4-counsellors'),
                t(', to frustrate their purpose, all the days of Cyrus king of Persia, even until the reign of Darius king of Persia.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra4-weakened',
          html:
            'The first response is sabotage. Not open warfare, but the slow erosion of will. "Weakened the hands" — the image is visceral. It is as if the builders&apos; strength is being drained from them. They cannot grip the tools. They cannot lift the stones. The opposition works not through direct assault but through intimidation, through constant pressure, through the wearing down of resolve.',
        },
        {
          kind: 'hebrew',
          id: 'ezra4-raphah',
          title: 'Raphah — "Weaken" or "Let Drop"',
          script: 'רָפָה',
          translit: '<strong>Raphah</strong> · to weaken; to let drop; to relax',
          description:
            'The verb carries the sense of something losing its grip, its strength falling away. When the hands are weakened, they can no longer hold what they were holding. This is not a blow delivered in a moment; it is a slow, persistent draining of strength. The opposition knows that if it keeps applying pressure, the builders will eventually let go.',
        },
        {
          kind: 'commentary',
          id: 'ezra4-troubled',
          html:
            'The word for "troubled" conveys harassment, disturbance, vexation. The adversaries are not waiting years to strike — they are troubling the builders in the moment, making the work miserable, creating obstacles, raising costs, extending timelines, making the work feel futile.',
        },
        {
          kind: 'commentary',
          id: 'ezra4-counsellors',
          html:
            'Then comes the weapon of statecraft: hired counselors. These are not mercenaries with swords, but people with access to power, to courts, to the king&apos;s ear. The opposition moves from direct harassment to political maneuvering. They hire advocates to speak against the builders, to lodge accusations, to convince the king that the rebuilding is dangerous.',
        },
        {
          kind: 'carry',
          html:
            'Opposition to God&apos;s work comes in layers. First, the direct pressure — the discouragement, the obstacles. But when that is not enough, opposition moves to the tools of power: influence, accusation, political pressure. The builders must understand that the work will cost them more than the mere effort of building. It will cost them in weariness, in doubt, in the need to stand firm against constant pressure.',
        },
        {
          kind: 'reflection',
          id: 'ezra4-weakened-reflection',
          prompt: 'When you are trying to build something of value — in your faith, your relationships, your work — how do discouragement and constant opposition wear you down? What strengthens your hands to keep building?',
        },
      ],
    },

    /* ─── Ezra 4:6–16 — The Letter to the King ──────────────────────────── */
    {
      ref: 'Ezra 4:6–16',
      title: 'The Accusation to the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 6,
              spans: [
                t('And in the reign of Ahasuerus, in the beginning of his reign, wrote they an accusation against the inhabitants of Judah and Jerusalem.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And in the days of Artaxerxes wrote Bishlam, Mithredath, Tabeel, and the rest of their companions, unto Artaxerxes king of Persia: and the letter was written in the Syrian tongue, and interpreted in the Syrian tongue.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Rehum the chancellor and Shimshai the scribe wrote a letter against Jerusalem to Artaxerxes the king in this sort:'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Then wrote they unto him in this manner; Unto Artaxerxes our lord, Thy servants the men on this side the river, and at such a time.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Be it known unto the king, that the '),
                hy('Jews which came up from thee to us', 'ezra4-jews-come'),
                t(' are come unto Jerusalem, building the rebellious and the bad city, and have set up the walls thereof, and '),
                hy('joined the foundations', 'ezra4-foundations'),
                t('.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Be it known now unto the king, that, if this city be builded, and the walls set up again, then will they not pay toll, tribute, and custom, and so thou shalt endamage the revenue of the kings.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Now because we have maintenance from the king&apos;s palace, and it was not meet for us to see the king&apos;s dishonour, therefore have we sent and certified the king;'),
              ],
            },
            {
              number: 13,
              spans: [
                t('That search may be made in the book of the records of thy fathers: so shalt thou find in the book of the records, and know that this city is a rebellious city, and hurtful unto kings and provinces, and that they have moved sedition within the same of old time: for which cause was this city destroyed.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('We certify also to the king, that, if this city be builded again, and the walls thereof set up, by this means thou shalt have no portion on this side the river.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra4-jews-come',
          html:
            'Notice the double reference: they came from the king, but they came to the builders. The letter is written in the imperial "we" — the accusers are claiming to speak for the king&apos;s interest, to be guardians of the empire. They are turning the king&apos;s own earlier command — that the Jews build — into evidence that the Jews are undermining his authority. The letter is a masterpiece of accusation disguised as loyalty.',
        },
        {
          kind: 'commentary',
          id: 'ezra4-foundations',
          html:
            '"Joining the foundations" — the accusers describe the simple act of laying a foundation stone in the language of rebellion. They are not wrong about what is being done; they are wrong about what it means. A foundation is not an act of rebellion; it is an act of faith. But in the hands of the accusers, the same fact becomes evidence of sedition.',
        },
        {
          kind: 'commentary',
          id: 'ezra4-tribute',
          html:
            'Now the accusation becomes concrete: if the city is rebuilt and walled, it will not pay toll, tribute, and custom to the king. The accusers understand what is really at stake — not theology, but power, revenue, the ability to control the land. A rebuilt Jerusalem with walls is a Jerusalem that can resist imperial tax collection, that can defend itself.',
        },
        {
          kind: 'commentary',
          id: 'ezra4-records',
          html:
            'The accusers appeal to the record. Jerusalem was destroyed, they say. Search the history books, they urge. And it is true — Jerusalem was destroyed before. The accusers use this historical fact as if it were proof that the city is inherently rebellious, that rebuilding it is inherently dangerous. They want the king to believe that the nature of Jerusalem is opposition to kings.',
        },
        {
          kind: 'carry',
          html:
            'Accusation is a tool of the enemy. It takes what is true (Jerusalem was destroyed) and uses it to create fear. It cloaks self-interest (our tribute money) in the language of loyalty (protecting the king&apos;s honor). It appeals to authority and record to make a false conclusion seem inevitable. When God&apos;s work is opposed, do not be surprised if the accusation sounds plausible. The deepest accusations often carry a grain of truth, twisted to serve the purposes of those who make them.',
        },
        {
          kind: 'reflection',
          id: 'ezra4-accusation-reflection',
          prompt: 'When you have been accused falsely, or seen someone accused falsely, how was the accusation crafted? What elements of truth were used to create false conclusions?',
        },
      ],
    },

    /* ─── Ezra 4:17–23 — The King's Decree; Work Stops ───────────────────── */
    {
      ref: 'Ezra 4:17–23',
      title: 'The Work Ceases by Force',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 15,
              spans: [
                t('Forasmuch as this city of old time hath made insurrection against kings, and that rebellion and sedition have been made therein.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('We certify the king that, if this city be builded again, and the walls thereof set up, by this means thou shalt have no portion on this side the river.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Then sent the king an answer unto Rehum the chancellor, and to Shimshai the scribe, and to the rest of their companions that dwell in Samaria, and unto the rest beyond the river, Peace. And now'),
              ],
            },
            {
              number: 18,
              spans: [
                t('The letter which ye sent unto us hath been plainly read before me.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And I commanded, and search hath been made, and it is found that this city of old time hath made insurrection against kings, and that rebellion and sedition have been made therein.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('There have been mighty kings also over Jerusalem, which have ruled over all countries beyond the river; and toll, tribute, and custom, was paid unto them.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Give ye now commandment to cause these men to cease, and that this city be not builded, until another commandment shall be given from me.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Take heed now that ye fail not to do this: why should damage grow to the hurt of the kings?'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Now when the copy of king Artaxerxes&apos; letter was read before Rehum and Shimshai the scribe, and their companions, they went up in haste to Jerusalem unto the Jews, and made them to cease '),
                hg('by force and power', 'ezra4-force'),
                t('. Then ceased the work of the house of God which is at Jerusalem. So it ceased unto the second year of the reign of Darius king of Persia.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra4-letter-read',
          html:
            'The king reads the letter and is convinced. His response is swift. He accepts the accusers&apos; reading of history: yes, Jerusalem has been rebellious. He accepts their economic reasoning: yes, a walled city will not pay tribute. He gives the order: the building must stop.',
        },
        {
          kind: 'commentary',
          id: 'ezra4-mighty-kings',
          html:
            'The king acknowledges that mighty kings have ruled from Jerusalem — that it is not some minor city, but a seat of power. Yet this admission only strengthens his resolve to keep it unbuilt, undefended. He sees the potential for rebellion, and he acts to prevent it.',
        },
        {
          kind: 'hebrew',
          id: 'ezra4-pesak',
          title: 'Pesak — "Cease" or "Stop"',
          script: 'פְּסַק',
          translit: '<strong>Pesak</strong> · to cease; to stop; to break off',
          description:
            'The verb conveys a decisive stopping — not a pause, but a breaking off. The work does not merely slow; it ceases. It stops. The builders are not told to wait a season; they are commanded to put down their tools and walk away.',
        },
        {
          kind: 'commentary',
          id: 'ezra4-force',
          html:
            'What is crucial here is the phrase "by force and power." The cessation is not voluntary. The builders do not choose to stop. They are stopped. The imperial power, convinced by the letter, sends officers with authority to halt the work. The temple stands unfinished. Years will pass. The work stays stopped for years — until a new king, Darius, will issue a new decree.',
        },
        {
          kind: 'christ',
          id: 'ezra4-christ',
          title: 'Christ Connection — The Builder No Opposition Can Stop',
          html:
            'Here is where the pattern deepens. The work of God can be opposed. It can be halted. Years can pass with the temple unfinished. But no opposition can finally stop the work of God. Jesus tells Peter: "Thou art Peter, and upon this rock I will build my church; and the gates of hell shall not prevail against it" (Matthew 16:18). The church cannot be destroyed. Opposition can delay it. Accusation can slow it. But the true Builder, Christ himself, cannot be thwarted. What man stops, God resumes. What the king forbids, a later king permits. What seems ended is only waiting for the next chapter. And in the life of the believer, no opposition — no pressure, no accusation, no empire — can finally stop the work God is doing in us.',
        },
        {
          kind: 'carry',
          html:
            'When the work stops — when circumstances force you to put down what you were building, what you were hoping to do — it is easy to believe that the work is over, that you have failed. But stoppage is not the same as stopping. The work ceases, but it is not destroyed. The builders learn to wait. They do not build in the night; they preserve what they have begun. And they wait for the day when the work can resume. What is God asking you to wait for?',
        },
        {
          kind: 'reflection',
          id: 'ezra4-cease-reflection',
          prompt: 'When circumstances have forced you to stop work on something you cared about — a goal, a relationship, a dream — how did you respond? What did you learn in the waiting?',
        },
      ],
    },
  ],
};
