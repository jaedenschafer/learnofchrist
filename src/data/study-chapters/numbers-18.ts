import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 18 — The duties and provisions of priests and Levites.
 *
 * The voice is about HOW God provides for those who give their lives to His service.
 * Christ shadow: 1 Cor 9:13-14 and Hebrews 7 (Jesus as High Priest, order of Melchizedek).
 */
export const NUMBERS_18: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 18,

  estimatedMinutes: { beginner: 9, intermediate: 17, deep: 20 },
  intros: [
    `Numbers 18 answers a practical question: if the Levites own no land and the priests have no inheritance, who feeds them? The answer is God does. The chapter spells out the offerings that sustain the priesthood — what the priests bear (the iniquity of the sanctuary), what they receive (heave offerings, firstfruits, devoted things), and how the Levites are themselves sustained (by Israel's tithes), only to pass a "tithe of the tithe" back to the priests. It is a system of giving and re-giving, of those who serve being served in turn.`,
    `The underlying principle echoes through the New Testament. Paul quotes this chapter in 1 Corinthians 9:13–14: "They which minister about holy things live of the things of the temple… the Lord ordained that they which preach the gospel should live of the gospel." The principle of sustaining those dedicated to God's service is not burdensome; it is the created order. Jesus Himself is the fulfillment: the High Priest who stands in the order of Melchizedek (Hebrews 7), not of Levi, who offers Himself as both priest and sacrifice — and from Him flows all provision.`,
  ],

  sections: [
    /* ─── Numbers 18:1–7 — The Priest's Charge ───────────────────────────── */
    {
      ref: 'Numbers 18:1–7',
      title: 'The Priests Bear the Iniquity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD said unto Aaron, '),
                hp(`Thou and thy sons and thy father's house with thee shall bear the iniquity of the sanctuary`, 'c-bear-iniquity'),
                t(': and thou and thy sons with thee shall bear the iniquity of your priesthood.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bear-iniquity',
          html:
            'The word "bear" is heavy: the priests are not merely to perform rituals, they are to <em>bear</em> — carry, shoulder — the iniquity of the sanctuary. When Israel sins in or near the holy place, the priest stands between that sin and God. This is priestly work: not declaring innocence, but shouldering the consequence. The entire priestly class becomes a kind of sin-offering, interceding by their very role.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 2,
              spans: [
                t('And thy brethren also of the tribe of Levi, '),
                hy('the tribe of thy father', 'c-levi-family'),
                t(', bring thou with thee, that they may be joined unto thee, and minister unto thee: but thou and thy sons with thee shall minister '),
                hy('before the tabernacle of witness', 'c-presence'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-levi-family',
          html:
            `The Levites are under Aaron's authority — they support the priestly work but do not perform it. There are layers of access to the holy place, and only Aaron and his sons (the priests) may enter the most intimate space. This hierarchy of access reflects the seriousness of approaching God.`,
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tabernacle-witness',
          title: 'Tabernacle of Witness (Ohel Ha-eduth)',
          script: 'אֹהֶל הָעֵדוּת',
          translit: '<strong>ohel ha-eduth</strong> · the tent of testimony',
          description:
            `The tabernacle is the tent where God's testimony (the law) dwells. It is not merely a building but the place where Heaven and earth meet — where God's will is kept and God's presence hovers.`,
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 3,
              spans: [
                t('And they shall keep thy charge, and the charge of all the tabernacle: only they shall not come nigh the vessels of the sanctuary and the altar, '),
                hg('lest they die', 'c-holiness-dies'),
                t(', and both they and you also.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-holiness-dies',
          html:
            `Holiness is not a metaphor. To touch the altar's vessels without authorization is to die — not from a punishment imposed, but from touching what is set apart for God without the proper mediation. Holiness burns. The Levites may serve the tabernacle, but only the priests may touch its sacred vessels.`,
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 4,
              spans: [
                t('And they shall be joined unto thee, and keep the charge of the tabernacle of the congregation, for all the service of the tabernacle: and a stranger shall not come nigh unto you.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And ye shall keep the charge of the sanctuary, and the charge of the altar: '),
                hp('that there be no wrath any more upon the children of Israel', 'c-wrath-turned'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'c-wrath-turned',
          title: 'Christ Connection — The Wrath Absorbed',
          html:
            `The priestly service is a dam against God's wrath. They stand in the breach. In the New Testament, Jesus becomes the perpetual priest, and His entire life and death are this standing-in-the-breach work. "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ" (Rom. 5:1) — not because wrath is absent, but because Jesus has already stood in it. Hebrews 7:25 says Jesus "ever liveth to make intercession for them" — the priest's eternal work of bearing and turning away judgment is now His alone.`,
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 6,
              spans: [
                t('And I, behold, I have taken your brethren the Levites from among the children of Israel: to you they are '),
                hg('given as a gift for the LORD', 'c-gift-to-lord'),
                t(', to do the service of the tabernacle of the congregation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gift-to-lord',
          html:
            `The Levites are a gift — not hired servants, not conscripts, but a gift from Israel to the priesthood, given by God Himself. This language sets up the reciprocal economy: Israel gives the Levites as a gift; the Levites then serve the priests; and the priests sustain themselves from Israel's offerings. Every link is a gift, not a wage.`,
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 7,
              spans: [
                t(`Therefore thou and thy sons with thee shall keep your priest's office for every thing of the altar, and within the vail; and ye shall serve: I have given your priest's office unto you as `),
                hg('a service of gift', 'c-service-gift'),
                t(': and the stranger that cometh nigh shall be put to death.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-service-gift',
          html:
            `The priesthood itself is a service of gift — a gift given to Aaron and his sons, not earned. They do not buy their way in, do not inherit it from their earnings. It is God's gift, and it carries absolute protection: anyone else (a stranger) who approaches the altar dies. The priesthood is not a career; it is a call, and it is dangerous.`,
        },

        {
          kind: 'carry',
          html:
            `Aaron's sons are given a priesthood as a gift. You have been given a calling as a gift — to your work, your home, your church, your creative life. It was not your merit that secured it; it was grace. That means you are not its owner, only its steward. And like the priests, you stand between a broken world and a holy God, showing people what reconciliation looks like by the way you show up.`,
        },

        {
          kind: 'reflection',
          id: 'priest-office',
          prompt: 'What calling or role in your life feels like it was given to you as a gift? How does it feel different when you see it that way instead of as something you earned?',
        },
      ],
    },

    /* ─── Numbers 18:8–20 — The Priest's Portion ──────────────────────────── */
    {
      ref: 'Numbers 18:8–20',
      title: 'The Heave Offerings',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 8,
              spans: [
                t('And the LORD spake unto Aaron, '),
                hp('Behold, I also have given thee the charge of mine heave offerings', 'c-heave-given'),
                t(' of all the hallowed things of the children of Israel: unto thee have I given them by reason of the anointing, and to thy sons, by an ordinance for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-terumah',
          title: 'Terumah — the "heave offering"',
          script: 'תְּרוּמָה',
          translit: '<strong>terumah</strong> · a lifting up, a contribution set apart',
          description:
            'The heave offering is lifted up from the common pile and set apart for the priests. It is the first portion, the best portion. God is saying: I give you the lifted-up things — the things that have already been set apart as holy.',
        },

        {
          kind: 'commentary',
          id: 'c-heave-given',
          html:
            `God does not merely permit the priests to take a portion; He <em>gives</em> the heave offerings to them. The offerings are God's gift to Aaron, not a salary negotiated with Israel. This reverses the normal hierarchy: the priest does not beg sustenance from the people; he receives it from God Himself, distributed through the people's offerings.`,
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 9,
              spans: [
                t('This shall be thine of the most holy things, reserved from the fire: every oblation of theirs, every meat offering of theirs, and every sin offering of theirs, and every trespass offering of theirs, which they shall render unto me, shall be most holy for thee and for thy sons.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 10,
              spans: [
                t('In the most holy place shalt thou eat it; '),
                hy('every male shall eat it', 'c-male-eat'),
                t(': it shall be holy unto thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-male-eat',
          html:
            'Only the males of the priestly house may eat from the most holy offerings. This is not casual eating; it is ritual, it is in the most holy place, and it is part of the priestly consecration. Eating from what is holy makes one holy.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 11,
              spans: [
                t('And this is thine; the '),
                hg('heave offering of their gift', 'c-gift-heave'),
                t(', with all the wave offerings of the children of Israel: I have given them unto thee, and to thy sons and to thy daughters with thee, by a statute for ever: every one that is '),
                hy('clean in thy house shall eat of it', 'c-clean-house'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gift-heave',
          html:
            `The heave offering is called "the heave offering of their gift" — it is both Israel's gift and God's gift to the priesthood. The repetition of "gift" underlines that this is not payment for services rendered, but grace.`,
        },
        {
          kind: 'commentary',
          id: 'c-clean-house',
          html:
            `The priestly household — wife, unmarried daughters — may also eat these holy things, provided they are ceremonially clean. This extends the consecration: to be part of a priest's house is to be drawn into the holy.`,
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 12,
              spans: [
                t('All the best of the oil, and all the best of the wine, and of the wheat, the '),
                hg('firstfruits', 'c-firstfruits'),
                t(' of them which they shall offer unto the LORD, them have I given thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-firstfruits',
          html:
            'Not a portion of the harvest — the <em>best</em> of it. The finest oil, the choicest wine, the first grain. The priestly portion is set apart as the finest and the first. This is not subsistence; it is honor.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 13,
              spans: [
                t('And whatsoever is first ripe in the land, which they shall bring unto the LORD, shall be thine; every one that is '),
                hg('clean in thine house shall eat of it', 'c-clean-law'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-clean-law',
          html:
            'The rhythm is the same: the first and the best, and the condition is holiness. To eat of what is holy requires being clean.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 14,
              spans: [
                t('Every thing devoted in Israel shall be thine.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-devoted',
          title: 'Devoted Things (Cherem)',
          script: 'חֵרֶם',
          translit: '<strong>cherem</strong> · devoted to destruction or to the Lord',
          description:
            'A thing devoted is set apart absolutely — it cannot be sold or redeemed. If devoted to God, it belongs wholly to Him and, by extension, to His priest. This includes spoils of war, possessions vowed by individuals, and sacred gifts.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 15,
              spans: [
                t('Every thing that openeth the matrix in all flesh, which they bring unto the LORD, whether it be of men or beasts, shall be thine: nevertheless the '),
                hp('firstborn of man shall thou surely redeem', 'c-redeem-firstborn'),
                t(', and the firstling of unclean beasts shalt thou redeem.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-redeem-firstborn',
          html:
            `Every firstborn — human and animal — belongs to the Lord. Animals (except unclean ones) are offered; human firstborns are redeemed. This harks back to the Exodus, when God claimed every firstborn of Egypt, then permitted Israel's firstborns to be redeemed.`,
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 16,
              spans: [
                t('And those that are to be redeemed from a month old shalt thou redeem, according to thine estimation, for the money of five shekels, after the shekel of the sanctuary, which is twenty gerahs.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-five-shekels',
          html:
            `A human firstborn is redeemed for five shekels of silver — a modest sum, yet enough to make the point: you do not own your firstborn; God does. You buy him back, but he remains God's. The price is the same regardless of wealth; it is a statement of principle, not a market price.`,
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 17,
              spans: [
                t('But the firstling of a cow, or the firstling of a sheep, or the firstling of a goat, thou shalt not redeem; they are holy: thou shalt sprinkle their blood upon the altar, and shalt burn their fat for an offering made by fire, for a sweet savour unto the LORD.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 18,
              spans: [
                t('And the flesh of them shall be thine, as the wave breast and as the right shoulder are thine.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wave-shoulder',
          html:
            'The priest offers the animal (blood on altar, fat burned), and then eats what remains. This pattern — offering to God, then sustenance to the priest — repeats throughout. Offering and eating are not opposed; they are consecutive.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 19,
              spans: [
                t('All the heave offerings of the holy things, which the children of Israel offer unto the LORD, have I given thee, and thy sons and thy daughters with thee, by a statute for ever: it is a covenant of '),
                hg('salt for ever', 'c-salt-covenant'),
                t(' before the LORD unto thee and to thy seed with thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-salt-covenant',
          html:
            `A covenant of salt is an eternal, unbreakable covenant. Salt preserves; it symbolizes permanence and trust. God is saying: this provision for the priesthood is not temporary, not contingent on Israel's mood. It is written in salt — forever.`,
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 20,
              spans: [
                t('And the LORD said unto Aaron, '),
                hp('Thou shalt have no inheritance in their land', 'c-no-inheritance'),
                t(', neither shalt thou have any part among them: '),
                hy('I am thy part and thine inheritance', 'c-god-inheritance'),
                t(' among the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-inheritance',
          html:
            `Aaron gets no land. Unlike the other tribes, whose inheritance is measured in acres and sheep and property, Aaron's portion is in the offerings. This is not a hardship; it is a privilege. It binds the priesthood to every act of worship in Israel.`,
        },
        {
          kind: 'christ',
          id: 'c-god-inheritance',
          title: 'Christ Connection — God Himself as Inheritance',
          html:
            'Aaron is told: "I am thy part and thine inheritance." His sufficiency does not come from land or accumulation; it comes from God Himself. This echoes the psalmist: "The LORD is the portion of mine inheritance and of my cup… the lines are fallen unto me in pleasant places" (Ps. 16:5–6). In Hebrews 7, Jesus is the priest who needs no inheritance in the land because His inheritance is the very presence of God — and through Him, so is ours.',
        },

        {
          kind: 'carry',
          html:
            'Aaron owns nothing of the land. His provision is not in property but in the flow of offerings — in service itself. If your life is given to something larger than accumulation (to teaching, to healing, to art, to service), you know this rhythm: not owning the fruit of your work, but being sustained by the work itself, and by those it serves. That is the priesthood of all who answer a call.',
        },

        {
          kind: 'reflection',
          id: 'heave-portion',
          prompt: 'What would it look like for you to trust God as your inheritance rather than accumulation? Where are you already doing this, even in small ways?',
        },
      ],
    },

    /* ─── Numbers 18:21–32 — The Levites' Tithe ────────────────────────────── */
    {
      ref: 'Numbers 18:21–32',
      title: `The Levites' Provision`,
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 21,
              spans: [
                t('And, behold, I have given the children of Levi '),
                hg('all the tenth in Israel for an inheritance', 'c-levi-tenth'),
                t(', for their service which they serve, even the service of the tabernacle of the congregation.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-maasar',
          title: `Ma\'aser — the "tithe"`,
          script: 'מַעֲשֵׂר',
          translit: `<strong>ma\'aser</strong> · one-tenth`,
          description:
            'A tithe is exactly one-tenth. God commands Israel to give one-tenth of all increase to the Levites, who have no land. This is not charity; it is a structural provision, a permanent portion of the covenant.',
        },

        {
          kind: 'commentary',
          id: 'c-levi-tenth',
          html:
            'Israel gives one-tenth of all increase — grain, wine, livestock — to the Levites. The Levites own no land, so the land-holders must feed them. This is the system: those with land holdings support those who have been called to service.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 22,
              spans: [
                t('Neither must the children of Israel henceforth come nigh the tabernacle of the congregation, lest they bear sin, and die.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('But the Levites shall do the service of the tabernacle of the congregation, and they shall bear their iniquity: it shall be a statute for ever throughout your generations, that among the children of Israel they have no inheritance.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-levi-bear-iniquity',
          html:
            'The Levites bear the iniquity of their service — they shield the common people from the danger of the holy place. In return, they receive the tithe. The economy is: protection from death in exchange for portion of sustenance.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 24,
              spans: [
                t('For the tithes of the children of Israel, which they offer as an heave offering unto the LORD, I have given to the Levites to inherit: therefore I said unto them, '),
                hg('Among the children of Israel they shall have no inheritance', 'c-levi-no-land'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-levi-no-land',
          html:
            `The Levites are excluded from the land division on purpose. Their inheritance is the tithe. This makes them dependent not on real estate but on Israel's obedience and worship. Their survival is bound to the people's faithfulness.`,
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 25,
              spans: [
                t('And the LORD spake unto Aaron, '),
                hp('Thou shalt have the tithes of the Levites for an heave offering', 'c-tithe-tithe'),
                t('; and ye shall offer up the heave offering of it for the LORD, even a tenth part of the tithe.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tithe-tithe',
          html:
            'Now the circle turns: the Levites receive the tithe, and then give a tithe of their tithe back to the priests. It is tithe within tithe, a nested giving. The priesthood is sustained not by Israel directly, but through the Levites, who are themselves sustained by Israel.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 26,
              spans: [
                t('Thus speak unto the Levites, saying, When ye take of the children of Israel the tithes which I have given you of them for your inheritance, then ye shall offer up an heave offering of it for the LORD, even a tenth part of the tithe.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And this your heave offering shall be reckoned unto you, as though it were the corn of the threshingfloor, and as the fulness of the winepress.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-reckoned-grain',
          html:
            'The tithe the Levites give to the priests is reckoned as if it were grain or wine — it is treated as substance, as real food. The giving is literal, and it is holy.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 28,
              spans: [
                t(`Thus ye also shall offer an heave offering unto the LORD of all your tithes, which ye receive of the children of Israel; and ye shall give thereof the LORD's heave offering to Aaron the priest.`),
              ],
            },
            {
              number: 29,
              spans: [
                t('Out of all your gifts ye shall offer every heave offering of the LORD, of all the best thereof, even the hallowed part thereof out of it.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Therefore thou shalt say unto them, When ye have heaved the best thereof from it, then it shall be counted unto the Levites as the increase of the threshingfloor, and as the increase of the winepress.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 31,
              spans: [
                t('And ye shall eat it in every place, ye and your households: for it is your reward for your service in the tabernacle of the congregation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-reward-service',
          html:
            'The tithe is their "reward for service." It is not a wage; it is a reward — a gift for having given themselves to holy work. The Levite may eat the tithe anywhere, not just in the holy place. Once they have given a portion to the priest, the remainder is theirs freely.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 32,
              spans: [
                t('And ye shall bear no sin by reason of it, when ye have heaved from it the best of it: '),
                hp('neither shall ye pollute the holy things of the children of Israel, lest ye die', 'c-holy-not-pollute'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'c-holy-not-pollute',
          title: 'Christ Connection — Called to Support the Called',
          html:
            `Paul uses this passage directly: "Do ye not know that they which minister about holy things live of the things of the temple? and they which wait at the altar are partakers with the altar? Even so hath the Lord ordained that they which preach the gospel should live of the gospel" (1 Cor. 9:13–14). The principle does not end with Levitical law. Those called to God's service — whether priest, prophet, pastor, missionary — are meant to be sustained. To give to them is not charity; it is obedience to a created order. And to neglect them is to "pollute the holy things," to break the covenant.`,
        },

        {
          kind: 'carry',
          html:
            'If you give to those who serve — a teacher, a pastor, a ministry, a struggling artist — you are not being generous. You are executing a law older than Israel. The church, the kingdom, the work of service cannot stand unless those called to it are actually fed. And if you yourself are called to something that costs you the chance to accumulate, remember this: God has already made a provision. It may come through the tithe of others, but it is as certain as the harvest.',
        },

        {
          kind: 'reflection',
          id: 'tithe-giving',
          prompt: 'Who in your life has given themselves to service — teaching, ministry, care, art? How are they being sustained, and is there a way you could take part in that provision?',
        },

        { kind: 'divider' },
      ],
    },

    /* ─── Closing reflection ──────────────────────────────────────────────────── */
    {
      ref: 'Numbers 18 · The Architecture of Care',
      title: 'How God Provides',
      blocks: [
        {
          kind: 'commentary',
          id: 'c-closing',
          html:
            `Numbers 18 is a love letter wrapped in law. It says: "I will take care of those who take care of My sanctuary. I will feed the priests through the people. I will feed the Levites through the people. And I will make sure the system does not break — it is a covenant of salt, forever." Behind all the specific offerings and portions is one truth: God's people are meant to care for those who serve. And those who serve are meant to receive, not out of shame, but as a right written into the fabric of creation.`,
        },

        {
          kind: 'carry',
          html:
            'The priesthood in Israel had no inheritance in the land — but they had something more stable. Their provision was written into the law, made permanent by covenant, and backed by the act of worship itself. Every sacrifice, every offering, every tithe was a renewal of the promise: "I will feed you." In Christ, this promise becomes personal: "your Father knoweth that ye have need of all these things… seek ye first the kingdom of God… and all these things shall be added unto you" (Matt. 6:32–33). The math of the kingdom is different. The provision is not earned; it is promised.',
        },

        {
          kind: 'reflection',
          id: 'closing',
          prompt: `Where in your life are you being asked to trust God as your portion, the way Aaron did? And where is He asking you to be someone else's provision?`,
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Numbers 18',
    quote:
      'The priests bear the iniquity of the sanctuary. They receive the heave offerings, the firstfruits, the devoted things, and the firstborn — redeemed at five shekels each. The Levites receive the tithes of Israel, and give a tithe of their tithe to the priests. God does not leave those who serve without sustenance. It is a covenant of salt — forever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 18 · Study Guide',
  },
};
