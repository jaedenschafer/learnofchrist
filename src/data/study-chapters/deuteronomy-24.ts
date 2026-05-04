import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 24 — The certificate of divorce, the hard-heartedness of humans,
 * and the mercy laws woven into Israel's covenant. Jesus corrects the divorce law
 * in Matthew 19; the gleaning law becomes the foundation of Ruth. A chapter about
 * how God protects the vulnerable through the structures of the law.
 */
export const DEUTERONOMY_24: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 24,

  estimatedMinutes: { beginner: 8, intermediate: 12, deep: 16 },
  intros: [
    'Deuteronomy 24 is a patchwork of case laws, yet each one tells the same story: God is protecting the fragile. A man can divorce his wife, and Moses permitted it — but Jesus will later say it was only because of the hardness of human hearts. Kidnapping is condemned in the strongest terms. A creditor cannot take the tools of a poor man&apos;s survival. A hired servant must be paid before sundown. The stranger, the fatherless, the widow — they appear over and over. The reason appears at the end: "Remember that thou wast a bondman in the land of Egypt." Israel&apos;s law is not an arithmetic of rights; it is the crystallized memory of suffering, turned into mercy.',
    'For a chapter this scattered, there is an unexpected coherence. Every case law is about the abuse of power — who holds it, how it can crush the vulnerable, how God restrains it. And that restraint is not abstract justice; it is shaped by the experience of being helpless. A people who once had nothing now must arrange their whole life so that no one among them is left alone with nothing.',
  ],

    resources: [
    {
      id: 'sefaria-deuteronomy-24',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 24',
      url: 'https://www.sefaria.org/Deuteronomy.24',
      description: 'Open-access source text and rabbinic commentary on divorce, pledges, wages of hired servants, and redemption for the vulnerable.',
    },
    {
      id: 'widow-orphan-alien-protection-biblical-law',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Widow, Orphan, and Alien Protections',
      url: 'https://www.sefaria.org/Deuteronomy.24.17',
      description: 'Examines the repeated biblical mandate to protect widows, orphans, and aliens [res:widow-orphan-alien-protection-biblical-law] as vulnerable members dependent on community justice and mercy.',
    },
  ],

  sections: [
    /* ─── Deuteronomy 24:1–4 — The Certificate of Divorce ───────────────── */
    {
      ref: 'Deuteronomy 24:1–4',
      title: '"From the Beginning It Was Not So"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 1,
              spans: [
                t('When a man hath taken a wife, and married her, and it come to pass that she find no favour in his eyes, because he hath found some '),
                hy('uncleanness', 'heb-ervah'),
                t(' in her: then let him write her a '),
                hp('bill of divorcement', 'jesus-divorce'),
                t(', and give it in her hand, and send her out of his house.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'heb-ervah',
          title: 'Ervah — "uncleanness"',
          script: 'עֶרְוָה',
          translit: '<strong>ervah</strong> · nakedness, shame, a shameful thing',
          description:
            'The term is vague on purpose. Moses allows divorce for "some uncleanness," without defining it. The lack of precision in the law opens the door for Jesus to tighten it.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 2,
              spans: [
                t('And when she is departed out of his house, she may go and '),
                hg('become another man&apos;s wife', 'deut-remarriage'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And if the latter husband hate her, and write her a bill of divorcement, and giveth it in her hand, and sendeth her out of his house; or if the latter husband die, which took her to be his wife;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Her '),
                hg('former husband', 'deut-forbidden'),
                t(' which sent her away, may not take her again to be his wife, after that she is defiled; for that is abomination before the Lord: and thou shalt not cause the land to sin, which the Lord thy God giveth thee for an inheritance.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-remarriage',
          html:
            'The law protects the divorced woman&apos;s right to marry again. She is not trapped in a state of permanent shame or dependency. But once she remarries and is then divorced again — or widowed — her first husband may not reclaim her. The point is dignity: she is not property to be reacquired.',
        },
        {
          kind: 'commentary',
          id: 'deut-forbidden',
          html:
            'The language is stark: "that is abomination." Not a mistake, a confusion, or a regrettable loophole. An abomination. The law itself carries God&apos;s own disapproval of the act it regulates. Moses is saying: I allow divorce, but understand — God abhors this pattern of taking up, casting off, and reclaiming.',
        },
        {
          kind: 'christ',
          id: 'jesus-divorce',
          title: 'Christ Connection — Hardness of Heart',
          html:
            'In Matthew 19:7–8, the Pharisees ask Jesus: "Why did Moses then command to give a writing of divorcement?" Jesus answers: "Moses because of the hardness of your hearts suffered you to put away your wives: but from the beginning it was not so." Jesus acknowledges the law but goes back behind it. Moses permitted divorce; God&apos;s design is union. The "bill of divorcement" is not God&apos;s ideal — it is God&apos;s mercy for a people too hard-hearted to stay. Jesus restores the original intention: "What therefore God hath joined together, let not man put asunder" (Matt. 19:6).',
        },
        {
          kind: 'carry',
          html:
            'You live in a culture full of exits — jobs, churches, relationships, marriages. The culture says: if it stops serving you, leave. Deuteronomy doesn&apos;t quite say that, and Jesus tightens it further. Not because God is cruel, but because something true about love — real love — is that it stays. It works through the hard thing. If you are in a covenant, Christ&apos;s call is not to find the exit clause but to find Him in the middle of the staying.',
        },
        {
          kind: 'reflection',
          id: 'divorce-prompt',
          prompt: 'Where in your life are you tempted to just write the bill of divorcement — to quit, exit, leave? What might staying look like?',
        },
      ],
    },

    /* ─── Deuteronomy 24:5 — One Year to Cheer Up Your Wife ────────────── */
    {
      ref: 'Deuteronomy 24:5',
      title: 'One Year to Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 5,
              spans: [
                t('When a man hath taken a new wife, he shall not go out to war, neither shall he be charged with any business: but he shall be '),
                hg('free at home one year', 'deut-one-year'),
                t(', and shall '),
                t('cheer up'),
                t(' his wife which he hath taken.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-one-year',
          html:
            'Israel is commanded not to send a newly married man to war for a year. Not because marriage is frivolous, but because marriage is serious. A year is needed to plant roots, to know each other, to begin to become one. The law treats the marriage as a primary covenant, not a secondary arrangement filed around military duty.',
        },
        {
          kind: 'carry',
          html:
            'How long has it been since you freed a marriage — even your own — from the pressure of war? A year to cheer up, to know, to tend. Our culture sends newly married couples to the front lines immediately: both working, both commuting, the house unpainted, the baby coming, the debt accruing. God says: no. Not because you must stop working, but because love requires presence, and presence requires time. Where in your marriage do you need to claim back one year — or at least one season — that belongs to cheering each other up?',
        },
        {
          kind: 'reflection',
          id: 'one-year-prompt',
          prompt: 'If your marriage (or close relationship) had one year of freedom from other demands, what would you finally have time to know about the other person?',
        },
      ],
    },

    /* ─── Deuteronomy 24:6, 10–15 — Dignity and Daily Wages ────────────── */
    {
      ref: 'Deuteronomy 24:6, 10–15',
      title: 'God Protects the Poor and Promises the Wage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 6,
              spans: [
                t('No man shall take the nether or the upper millstone to pledge: for he taketh a man&apos;s '),
                hy('life to pledge', 'heb-nephesh'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'heb-nephesh',
          title: 'Nephesh — "life, soul, person"',
          script: 'נֶפֶש',
          translit: '<strong>nephesh</strong> · the breath, the person, the living being',
          description:
            'A millstone is the tool of survival. To take it in pledge is to take the person&apos;s capacity to eat. God forbids it: you cannot pledge someone&apos;s life itself.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 10,
              spans: [
                t('When thou dost lend thy brother any thing, thou shalt not go into his house to fetch his pledge:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('But thou shalt stand without, and the man to whom thou dost lend shall bring out the pledge unto thee.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And if the man be poor, thou shalt not '),
                hg('sleep with his pledge', 'deut-pledge'),
                t(':'),
              ],
            },
            {
              number: 13,
              spans: [
                t('In any case thou shalt deliver him the pledge again when the sun goeth down, that he may '),
                t('sleep'),
                t(' in his own raiment, and bless thee: and it shall be righteousness unto thee before the Lord thy God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-pledge',
          html:
            'The law is astonishing. A pledge taken as collateral must be returned at sundown — so the poor man can sleep in his own garment. His dignity at night is more important than the creditor&apos;s legal security. The lender is forbidden to keep the poor man&apos;s only coat. God protects nakedness and cold over contract.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 14,
              spans: [
                t('Thou shalt not oppress an hired servant that is poor and needy, whether he be of thy brethren, or of thy strangers that are in thy land within thy gates:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('At his day thou shalt give him his hire, neither shall the sun go down upon it; for he is poor, and setteth his heart upon it: lest he cry against thee unto the Lord, and '),
                hp('it be sin unto thee', 'jesus-wage'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jesus-wage',
          html:
            'The wage must be paid the same day, before sundown. Not because of a legal deadline but because the hired servant lives day to day. He is poor, and his life depends on the coin he earned. To withhold it is to starve him. And God hears his cry — the unpaid wage becomes a sin against the Lord, not merely a contractual dispute.',
        },
        {
          kind: 'carry',
          html:
            'You may employ someone, lend to someone, or withhold something that belongs to them. The law is clear: God is on the side of the one who has less power. The wage must come on time because the person&apos;s life depends on it. The pledge must be returned at night because nakedness and cold are not acceptable collateral. Your business, your loan, your rights — all of them are subject to the cry that reaches the Lord when the poor person goes to bed hungry or cold. Christ&apos;s follow-up is even sharper: "The labourer is worthy of his reward" (1 Tim. 5:18).',
        },
        {
          kind: 'reflection',
          id: 'wage-prompt',
          prompt: 'Who relies on you for their daily bread — whether as an employer, landlord, or someone you owe? How have you been treating the urgency of their need?',
        },
      ],
    },

    /* ─── Deuteronomy 24:7 — Kidnapping Condemned ────────────────────────── */
    {
      ref: 'Deuteronomy 24:7',
      title: 'God Abhors the Thief of Persons',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 7,
              spans: [
                t('If a man be found stealing any of his brethren of the children of Israel, and maketh '),
                hy('merchandise of him', 'heb-amod'),
                t(', or selleth him; then that thief shall '),
                hg('die', 'deut-death'),
                t('; and thou shalt put the evil away from among you.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'heb-amod',
          title: 'Merchandise — "to make commerce of"',
          script: 'עָמַד',
          translit: '<strong>&apos;amad</strong> · to stand, to profit, to treat as a commodity',
          description:
            'To kidnap an Israelite and sell them into slavery is to treat a person as property. In a world where slavery was normal, Deuteronomy insists: not your brother. Not for sale.',
        },
        {
          kind: 'commentary',
          id: 'deut-death',
          html:
            'This is the only crime in Deuteronomy 24 that carries a death sentence. Not theft of property — theft of a person. Slavery and human trafficking are treated with the harshest language the law knows. Paul echoes this in 1 Timothy 1:10, calling "menstealers" those who are "contrary to sound doctrine." The ancient world considered slavery normal. God does not.',
        },
        {
          kind: 'carry',
          html:
            'Slavery feels historical, not present. But Deuteronomy is addressing something your world still knows: the reduction of a person to a tool, a product, profit. A child trafficked. A migrant worker locked in debt servitude. A woman forced into sex work. The law says: that is the evil you put away. Not with a fine, not with reform. With the full weight of condemnation. If you encounter human trafficking or enslavement in your context — through news, through work, through your city — the law tells you how God sees it: evil to be cast out.',
        },
        {
          kind: 'reflection',
          id: 'trafficking-prompt',
          prompt: 'What does it mean to you that God calls the theft of a person a capital crime? What modern forms does that theft take around you?',
        },
      ],
    },

    /* ─── Deuteronomy 24:8–9 — Remember Miriam&apos;s Leprosy ────────────── */
    {
      ref: 'Deuteronomy 24:8–9',
      title: 'Learn from the Plague: Humility and Care',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 8,
              spans: [
                t('Take heed in the plague of leprosy, that thou observe diligently all that the priests the Levites shall teach you: as I commanded them, so ye shall observe to do.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Remember what the Lord thy God did unto '),
                hp('Miriam', 'jesus-miriam'),
                t(' by the way, after that ye were come forth out of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-miriam-memory',
          html:
            'Miriam was struck with leprosy for questioning Moses&apos; authority (Numbers 12). She was healed, but the law says: never forget. Leprosy will come to your community. When it does, listen to the priests — this is not a disease to dismiss or a person to despise. This is a sacred trust, a boundary between the clean and unclean that only God can erase. Miriam was Moses&apos; sister, the one who saved his life as an infant. When she fell under judgment, Moses himself pleaded for her healing. The law says: remember that moment. Remember that judgment and mercy belong to God alone.',
        },
        {
          kind: 'christ',
          id: 'jesus-miriam',
          title: 'Christ Connection — Healing and Restoration',
          html:
            'Jesus healed lepers — the most excluded people in His world — and He restored them to community (Luke 17:11–19). Where Miriam&apos;s leprosy was a sign of God&apos;s judgment for rebellion, Jesus&apos; healing of lepers is an act of pure mercy and restoration. He touches the untouchable, speaks to the unspeakable, and says: you are clean. The leper&apos;s cry, "Lord, if thou wilt, thou canst make me clean," is answered with "I will; be thou clean" (Matt. 8:2–3). Miriam&apos;s healing came through Moses&apos; intercession; Christ&apos;s healing is Christ Himself.',
        },
        {
          kind: 'carry',
          html:
            'There is a person or a group in your context who is being treated as unclean — excluded, feared, marked. The law says: remember. Remember that you too have been under judgment. Remember that healing and restoration belong to God. Remember Miriam, and how the sister of a great leader was also vulnerable to the Lord&apos;s hand. How might you become a priest of healing to someone who is being treated as a plague?',
        },
      ],
    },

    /* ─── Deuteronomy 24:16–22 — Remember Egypt, Harvest, and Gleaning ──── */
    {
      ref: 'Deuteronomy 24:16–22',
      title: 'The Gleaning Law: Economics of Memory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 16,
              spans: [
                t('The fathers shall not be put to death for the children, neither shall the children be put to death for the fathers: every man shall be put to death for his own sin.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-individual',
          html:
            'This is a radical assertion for the ancient world, where whole families were often destroyed for a single man&apos;s crime. God insists on individual responsibility. Not collective punishment, not inherited guilt. Each person stands before God alone — and will answer for their own sin.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 17,
              spans: [
                t('Thou shalt not pervert the judgment of the stranger, or of the fatherless; nor take a widow&apos;s raiment to pledge:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('But thou shalt remember that thou wast a bondman in Egypt, and the Lord thy God redeemed thee thence: therefore I command thee to do this thing.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-egypt',
          html:
            'Here is the engine of Deuteronomy&apos;s mercy: Remember Egypt. You were powerless. You were enslaved. God saw your affliction and redeemed you. Now your whole law is built on that memory. The stranger, the fatherless, the widow — you cannot oppress them because you have been where they are. Your freedom is not yours to hoard; it is yours to spend on behalf of others who are still enslaved.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 19,
              spans: [
                t('When thou cuttest down thine harvest in thy field, and hast forgot a sheaf in the field, thou shalt not go again to fetch it: it shall be for the stranger, for the fatherless, and for the widow: that the Lord thy God may bless thee in all the work of thine hands.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('When thou beatest thine olive tree, thou shalt not go over the boughs again: it shall be for the stranger, for the fatherless, and for the widow.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('When thou gatherest the grapes of thy vineyard, thou shalt not glean it afterward: it shall be for the stranger, for the fatherless, and for the widow.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And thou shalt remember that thou wast a bondman in the land of Egypt: therefore I command thee to do this thing.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-gleaning',
          html:
            'The gleaning law is Deuteronomy&apos;s masterpiece. You harvest your field — it belongs to you. But you must leave the forgotten sheaf, the olive branches you beat once, the grapes that remain on the vine. Not as charity, not as generosity, but as law. The vulnerable have a right to the gleanings. The book of Ruth is built entirely on this law: Boaz has the legal obligation to leave grain for Ruth and Naomi, and Ruth has the legal right to glean it. Her poverty is not a burden; it is a claim on his harvest.',
        },
        {
          kind: 'carry',
          html:
            'You have a field — a business, a career, a skill, a home, a bank account. The gleaning law says: you cannot harvest it to the edges. You must leave something behind. Not because you are required to be poor, but because others exist. The hungry person is not asking for your generosity; they are claiming what the law says belongs to them. Where is your field? What do you need to leave ungathered?',
        },
        {
          kind: 'reflection',
          id: 'gleaning-prompt',
          prompt: 'Remember that you were once "a bondman in Egypt" — a time when you had nothing and needed. What field do you have now? What is God calling you to leave ungathered?',
        },
        {
          kind: 'artwork',
          matchTitle: /ruth|boaz|glean/i,
          caption: 'Deuteronomy 24:19–21 · The Gleaning Law (Ruth&apos;s Foundation)',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Deuteronomy 24',
    quote:
      'God remembered the widows, the fatherless, the strangers, and those with nothing. Israel&apos;s entire law was written to protect them — because Israel herself had once been enslaved and helpless. Mercy is not generosity; it is the shape of a people who remember.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 24 · Study Guide',
  },
};
