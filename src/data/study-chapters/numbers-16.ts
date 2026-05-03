import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 16 — The Rebellion of Korah, Dathan, and Abiram
 *
 * Korah, a Levite and cousin of Moses, leads a rebellion with Dathan and
 * Abiram (Reubenites) and 250 princes. Korah wants the priesthood; Dathan
 * and Abiram resent Moses' civil authority. They charge that Moses and Aaron
 * have exalted themselves over "all the congregation are holy, every one of
 * them." Moses proposes a censer test at the tabernacle door. The earth opens
 * and swallows Korah, his household, and his company; fire consumes the 250.
 * Aaron stands between the dead and living with a censer, stopping the plague.
 * The bronze censers become a covering for the altar — a memorial that no
 * stranger may approach to offer incense.
 */

export const NUMBERS_16: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 16,

  estimatedMinutes: { beginner: 11, intermediate: 19, deep: 24 },
  intros: [
    'Numbers 16 opens with an explosion of pride. Korah, a Levite who is Moses&apos; own cousin, stands up with two Reubenite chieftains — Dathan and Abiram — and 250 princes of the congregation. Their charge is simple and vicious: Moses and Aaron have gone too far. "All the congregation are holy, every one of them, and the Lord is among them: wherefore then lift ye up yourselves above the congregation of the Lord?" It is the language of flattery wrapped around a fist. They are not asking for inclusion. They are asking for the priesthood that God has already given to Aaron.',
    'What follows is a test so stark that the very earth opens to swallow the rebels — and so terrible that the next day the people cry out that Moses and Aaron have "killed the people of the Lord." A plague breaks out. And it is Aaron — the one accused of self-exaltation — who runs into the midst of the dead and the dying with a censor and incense in his hands, standing between God&apos;s wrath and the congregation, and the plague stops. The chapter turns a rebellion into a memorial: the bronze censers of the men who died are hammered into a covering for the altar, a permanent warning that not everyone can draw near to God.',
  ],

  sections: [
    /* ─── Numbers 16:1–11 — Korah&apos;s Complaint ─────────────────────────────── */
    {
      ref: 'Numbers 16:1–11',
      title: 'The Complaint Against Authority',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 1,
              spans: [
                t('Now '),
                hg('Korah', 'korach-comp'),
                t(', the son of Izhar, the son of Kohath, the son of Levi, and '),
                t('Dathan and Abiram, the sons of Eliab, and '),
                t('On, the son of Peleth, sons of Reuben, took men:'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And they rose up before Moses, with certain of the children of Israel, two hundred and fifty princes of the assembly, famous in the congregation, men of renown:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'korach-comp',
          html:
            'Korah is a Levite, a cousin of Moses. He should be honored by his role in the tabernacle service. But his name, and the names of his co-conspirators, tell the story: Korah (baldness, exposure), Dathan (contention), Abiram (high father — claiming authority for himself). These are not men at peace with their station.',
        },
        {
          kind: 'hebrew',
          id: 'korach-name',
          title: 'Korach — "baldness" or "ice"',
          script: 'קֹרַח',
          translit: '<strong>korach</strong> · from a root meaning to be bald or bare',
          description:
            'The name Korah appears nowhere else as a common noun in Scripture, but the root suggests exposure, nakedness, being laid bare. His rebellion will indeed lay bare the limits of human authority — and expose him utterly.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 3,
              spans: [
                t('And they gathered themselves together against Moses and against Aaron, and said unto them, '),
                hp('Ye take too much upon you', 'presumption'),
                t(', seeing '),
                hp('all the congregation are holy, every one of them', 'holy-claim'),
                t(', and the Lord is among them: wherefore then lift ye up yourselves above the congregation of the Lord?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'presumption',
          html:
            'The accusation is smooth but poisonous. Korah is not saying the congregation is less holy; he is saying that because all are holy, Moses and Aaron should not be set apart. This is how rebellion talks: by appealing to a half-truth to justify overturning what God has commanded.',
        },
        {
          kind: 'commentary',
          id: 'holy-claim',
          html:
            'Korah uses the word "holy"—kadosh—the same word God used to set apart the Levites and priests for His service. But he distorts it to mean "equal authority." To say all the congregation is holy does not erase the particular callings God has made. The people are holy in one sense — set apart to God — but that does not grant them access to the altar or the inner priesthood.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 4,
              spans: [
                t('And when Moses heard it, '),
                hp('he fell upon his face', 'moses-face'),
                t(':'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And he spake unto Korah and unto all his company, saying, Even tomorrow the Lord will shew who are his, and who is '),
                hg('holy', 'holy-chosen'),
                t('; and will cause him to come near unto him: even him whom he will choose will he cause to come near unto him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'moses-face',
          html:
            'Moses falls on his face. This is his posture at every crisis — not standing to defend himself, but prostrate before God. His authority does not come from his status but from his trust in God&apos;s judgment.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 8,
              spans: [
                t('And Moses said unto Korah, Hear, I pray you, ye sons of Levi:'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Seemeth it but a small thing unto you that '),
                hy('the God of Israel hath separated you', 'separated'),
                t(' from the congregation of Israel, to bring you near to himself to do the service of the tabernacle of the Lord, and to stand before the congregation to minister unto them?'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And he hath brought thee near to him, and all thy brethren the sons of Levi with thee: and seek ye the priesthood also?'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'separated',
          title: 'Badal — "separated"',
          script: 'בָדַל',
          translit: '<strong>badal</strong> · to divide, to set apart, to distinguish',
          description:
            'God did not choose Korah for the priesthood, but He chose him for something — to serve the tabernacle, to stand before the congregation. Separation is not rejection. It is assignment. Korah mistakes a particular calling for exile.',
        },
        {
          kind: 'commentary',
          id: 'holy-chosen',
          html:
            'God does not choose because the person is already holy. God chooses, and that choosing is what makes the person holy for that role. Korah confuses the order. He thinks: because I am already holy, I should have access to the priesthood. God&apos;s logic is: because I choose you for this role, you are set apart as holy for this role.',
        },
        {
          kind: 'carry',
          html:
            'The line between contentment with your calling and ambition for someone else&apos;s is razor-thin in a believer&apos;s life. Korah was a Levite — an honor, a role, a service. But he looked at Aaron and wanted what God had given Aaron instead. How many callings have you turned away from by coveting someone else&apos;s? What if your particular assignment — the one you have right now, the one that feels too small — is exactly the one God chose you for?',
        },
        {
          kind: 'reflection',
          id: 'calling-vs-envy',
          prompt:
            'Where are you like Korah — looking at someone else&apos;s role and thinking it should be yours? What would it mean to accept your own calling as a gift from God rather than a consolation prize?',
        },
      ],
    },

    /* ─── Numbers 16:12–15 — Dathan and Abiram Refuse ───────────────────── */
    {
      ref: 'Numbers 16:12–15',
      title: 'Dathan and Abiram Refuse to Come',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 12,
              spans: [
                t('And Moses sent to call Dathan and Abiram, the sons of Eliab: which said, '),
                hy('We will not come up', 'will-not-come'),
                t(':'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Is it a small thing that thou hast brought us up out of a land that floweth with milk and honey, to kill us in the wilderness, except thou make thyself altogether a prince over us?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'will-not-come',
          html:
            'Dathan and Abiram refuse to appear before Moses. They will not submit to the test. This is defiance of a different kind — not claiming a position they should not have, but openly rejecting the authority God has placed over them.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 14,
              spans: [
                t('Moreover thou hast not brought us into a land that floweth with milk and honey, nor given us inheritance of fields and vineyards: wilt thou put out the eyes of these men? we will not come up.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'egyptian-nostalgia',
          html:
            'Here is the bitter core of it: Dathan and Abiram have been wandering in the wilderness for 40 years. They are exhausted. The promise seems broken. And they blame Moses. "You brought us out to die here. You are taking land from us." It is partly false (they refused to enter) and partly a cry of despair, but it comes out as accusation.',
        },
        {
          kind: 'commentary',
          id: 'glory-appears',
          html:
            'The glory of the Lord is visible before the test even happens. God is signaling: I am here. I am watching. This is not a mere human trial.',
        },
        {
          kind: 'carry',
          html:
            'Rebellion often wears the face of complaint. The question "Why should I trust your authority?" frequently hides a deeper wound: "I am tired of waiting. I don&apos;t believe the promise anymore. I blame you for my pain." What unfulfilled longings are behind your resistance to authority — your boss, your pastor, the call God has placed on your life? Name them. They are real. But they are not a reason to lift your hand in defiance.',
        },
        {
          kind: 'reflection',
          id: 'complaint-vs-defiance',
          prompt:
            'Where is your complaint really coming from — a genuine injustice you&apos;ve suffered, or unmet longings you&apos;re directing at the wrong target? How might that change what you do next?',
        },
      ],
    },

    /* ─── Numbers 16:16–24 — The Censer Test ──────────────────────────────── */
    {
      ref: 'Numbers 16:16–24',
      title: 'The Test of the Censers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 16,
              spans: [
                t('And Moses said unto Korah, Be thou and all thy company before the Lord, thou, and they, and Aaron, tomorrow:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And take every man his censer, and put incense in them, and bring ye before the Lord every man his censer, two hundred and fifty censers; thou also, and Aaron, each of you his censer.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'censer-test',
          html:
            'Moses proposes a test. Let each of the 250 princes bring a censer with fire and incense to the tabernacle. And let Aaron bring his. The man God chooses will have his offering accepted. This is not Moses defending his authority; it is Moses calling on God to make the choice visible to everyone.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 18,
              spans: [
                t('And they took every man his censer, and put fire in them, and laid incense thereon, and stood in the door of the tabernacle of the congregation, with Moses and Aaron.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And '),
                hg('Korah', 'gathering-people'),
                t(' gathered all the congregation against them unto the door of the tabernacle of the congregation: and '),
                hp('the glory of the Lord appeared', 'glory-appears'),
                t(' unto all the congregation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gathering-people',
          html:
            'Korah has pulled the whole congregation to the tabernacle door. What was a leadership dispute is now a public spectacle. Everyone is watching. The stakes are visible.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 20,
              spans: [
                t('And the Lord spake unto Moses and unto Aaron, saying,'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Separate yourselves from among this congregation, that I may consume them in a moment.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And they '),
                hp('fell upon their faces', 'face-again'),
                t(', and said, O God, the God of the spirits of all flesh, '),
                hp('shall one man sin, and wilt thou be wroth with all the congregation', 'wroth-all'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'face-again',
          html:
            'Moses and Aaron fall on their faces a second time. They have the authority to step aside and let God destroy the rebels. They choose instead to intercede for the whole congregation. This is what true authority looks like: not using power to crush enemies, but standing between judgment and the people.',
        },
        {
          kind: 'commentary',
          id: 'wroth-all',
          html:
            'Moses and Aaron are asking God not to wipe out the whole congregation because of the sins of the rebels. It is an intercession rooted in justice: should the innocent die for the guilty?',
        },
        {
          kind: 'commentary',
          id: 'sign-memorial',
          html:
            'The bronze covering of the censers will be a visible, permanent sign. Every future priest who approaches the altar will see it and be reminded: do not presume on the priestly office.',
        },
        {
          kind: 'commentary',
          id: 'glory-appears',
          html:
            'The glory of the Lord is visible before the test even happens. God is signaling: I am here. I am watching. This is not a mere human trial.',
        },
        {
          kind: 'commentary',
          id: 'face-third',
          html:
            'For the third time, Moses and Aaron fall on their faces before God. This is the shape of their entire ministry: not assertion, but submission. When judgment comes, they do not defend themselves; they intercede.',
        },
        {
          kind: 'christ',
          id: 'christ-mediator',
          title: 'Christ Connection — The Great High Priest',
          html:
            'Moses and Aaron stand in the gap between God&apos;s wrath and the congregation. This is the shadow of what Jesus does from the cross and in His role as High Priest. Hebrews 4:14–16 names Jesus as "a great high priest, that is passed into the heavens… we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted as we are, yet without sin. Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need." Aaron will stand between the dead and the living with a censer in his hand, and the plague will stay. Jesus enters with His own blood into the holy place itself, and the judgment against us stays. He is the Mediator who does what no other priest can do.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 23,
              spans: [
                t('And the Lord said unto Moses,'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Say unto the congregation, Get you up from about the tabernacle of Korah, Dathan, and Abiram.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'When you stand in the presence of God&apos;s justice, your first instinct may be to save yourself, to step aside, to let others face what they deserve. But prayer says something different: <em>Can mercy reach them? Can I ask for grace for the people around me, not just for myself?</em> This is the shape of intercession — not bargaining for yourself, but asking God to withhold judgment from others, even when they are in the wrong.',
        },
        {
          kind: 'reflection',
          id: 'intercession',
          prompt:
            'Who are you tempted to see "destroyed" — someone who wrongs you, opposes you, or deserves judgment? What would it mean to fall on your face and ask God for mercy for them instead?',
        },
      ],
    },

    /* ─── Numbers 16:25–35 — The Earth Opens ──────────────────────────────── */
    {
      ref: 'Numbers 16:25–35',
      title: 'The Earth Opens and Swallows Them',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 25,
              spans: [
                t('And Moses rose up and went unto Dathan and Abiram; and the elders of Israel followed him.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And he spake unto the congregation, saying, Depart, I pray you, from the tents of these wicked men, and touch none of their things, lest ye be consumed in all their sins.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('So they gat up from the tabernacle of Korah, Dathan, and Abiram, on every side: and Dathan and Abiram came out, and stood in the door of their tents, and their wives, and their sons, and their little children.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'separate-from-tents',
          html:
            'Moses tells the congregation to step back. God is about to act. The people obey. Dathan and Abiram come out to stand in their tent doors with their wives and children. They are facing Moses openly, defiantly, in front of the entire congregation.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 28,
              spans: [
                t('And Moses said, Hereby ye shall know that the Lord hath sent me to do all these works; for I have not done them of mine own mind.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('If these men die the common death of all men, or if they be visited after the visitation of all men; then the Lord hath not sent me.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('But if the Lord make a new thing, and the earth open her mouth, and swallow them up, with all that appertain unto them, and they go down quick into the pit; then ye shall understand that these men have provoked the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'new-thing',
          html:
            'Moses calls God to make the judgment visible and unmistakable. Not a plague that could be mistaken for natural causes. Not fire that could be explained away. A new thing. The earth itself will become God&apos;s instrument of judgment, and everyone will see.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 31,
              spans: [
                t('And it came to pass, as he had made an end of speaking all these words, that '),
                hy('the ground clave asunder that was under them', 'earth-opens'),
                t(':'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And the earth opened her mouth, and '),
                hy('swallowed them up, and their houses, and all the men that appertained unto Korah, and all their goods', 'swallowed-all'),
                t('.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('They, and all that appertained to them, went down alive into the pit, and the earth closed upon them: and they perished from among the congregation.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'earth-opens',
          title: 'Qava — "split" or "cleft"',
          script: 'קָעָא',
          translit: '<strong>qava</strong> · to split open, to gape',
          description:
            'The earth does not gradually subside beneath them. It gapes — splits violently open. Creation itself responds to the rebellion. The ground that God commanded to produce food and blessing now opens to swallow the defiant.',
        },
        {
          kind: 'commentary',
          id: 'morrow-murmur',
          html:
            'The very next day, the people turn. The ground has closed over Korah and his company. The fire has consumed the 250. Everyone saw. And yet the morning brings not gratitude but accusation. "You have killed the people of the Lord." The people cannot yet see that they were being offered the same choice Korah had: obey or rebel. They only see judgment and mistake it for cruelty.',
        },
        {
          kind: 'commentary',
          id: 'swallowed-all',
          html:
            'Korah, Dathan, Abiram, and all the men who belong to them — as well as their households, their wives, their children, all their goods. The rebellion involves the whole household. The judgment falls on them all. This is devastating. It is also, in the logic of the chapter, what happens when a family leader raises his fist against God.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 34,
              spans: [
                t('And all Israel that were round about them fled at the cry of them: for they said, Lest the earth swallow us up also.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And there came out a fire from the Lord, and '),
                hy('consumed the two hundred and fifty men', 'fire-consumes'),
                t(' that offered incense.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'fire-consumes',
          title: 'Esh — "fire"',
          script: 'אֵשׁ',
          translit: '<strong>esh</strong> · fire, consuming flame, God&apos;s judgment',
          description:
            'Fire comes from God — consuming the 250 princes who brought their censers. A different death for a different offense. Korah wanted the priesthood; the 250 princes wanted access to the holy fire. They get fire, but not the kind they sought.',
        },
        {
          kind: 'carry',
          html:
            'The chapter shows that defiance of God&apos;s authority has real consequences — not just in the person&apos;s own life, but rippling through family and community. This is not a threat to live in fear of, but a reality to reckon with: <em>the choices to rebel or to trust matter, and they ripple outward.</em> The fear of the Lord that grips Israel after this judgment is not terror; it is the beginning of wisdom — the understanding that God is serious, that His word carries weight, that rebellion is not a game.',
        },
        {
          kind: 'reflection',
          id: 'rebellion-consequences',
          prompt:
            'Where are you tempted to treat God&apos;s authority as negotiable, as if you could raise your hand and nothing would change? What would it mean to treat His word as seriously as Israel did after the ground opened?',
        },
      ],
    },

    /* ─── Numbers 16:36–40 — The Censers as a Memorial ───────────────────── */
    {
      ref: 'Numbers 16:36–40',
      title: 'The Bronze Censers — A Warning and a Sign',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 36,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 37,
              spans: [
                t('Speak unto Eleazar the son of Aaron the priest, that he take up the censers out of the burning, and scatter thou the fire yonder; for they are hallowed.'),
              ],
            },
            {
              number: 38,
              spans: [
                t('As for the censers of these sinners against their own souls, '),
                hy('let them make them broad plates', 'censer-plates'),
                t(' for a covering of the altar: for they offered them before the Lord, therefore they are hallowed: and they shall be a '),
                hy('sign unto the children of Israel', 'sign-memorial'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'censer-plates',
          title: 'Raki&apos;a — "beaten plates"',
          script: 'רָקִיע',
          translit: '<strong>raki&apos;a</strong> · a flat sheet of metal, beaten thin',
          description:
            'The censers are beaten into broad plates — the same word used for the firmament in Genesis, something solid and covering. The instruments of rebellion are transformed into a covering. Judgment becomes a memorial.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 39,
              spans: [
                t('And Eleazar the priest took the brasen censers, wherewith they that were burnt had offered; and he beat them out to be plates for a covering of the altar:'),
              ],
            },
            {
              number: 40,
              spans: [
                t('To be '),
                hg('a memorial unto the children of Israel', 'memorial'),
                t(', that no '),
                hg('stranger, which is not of the seed of Aaron, come near to offer incense before the Lord', 'stranger-incense'),
                t('; that he be not as Korah, and as his company: as the Lord said to him by the hand of Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'memorial',
          html:
            'The censers are not hidden away or destroyed. They are hammered into plates and fastened to the altar itself — where every priest, every day, would see them and remember. The judgment becomes a permanent teaching: <em>This is what happens when you presume on the priesthood.</em> The memorial is not vengeance; it is a sign of how serious the covenant is.',
        },
        {
          kind: 'commentary',
          id: 'stranger-incense',
          html:
            'Only Aaron and his sons may offer incense before the Lord. No stranger — no one from outside the priestly line — may approach with a censer. The boundary is reinforced by the bronze covering. The censers that were meant to grant access become a reminder that access is not granted to just anyone.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes God turns our rebellion into a sign for others. The mistakes we make, the consequences we face, become a boundary marker for the next generation. This is not shame; this is love. A parent who has suffered from their own presumption can tell their child the cost. A believer who has learned the hard way that certain boundaries are not negotiable can show others the path. What judgment or consequence in your past might be the boundary marker God is asking you to carry into someone else&apos;s future?',
        },
        {
          kind: 'reflection',
          id: 'judgment-as-sign',
          prompt:
            'Is there a mistake or consequence in your story that God could turn into a sign for others — a boundary marker, a warning, a mercy? What would it mean to offer that openly rather than hide it?',
        },
      ],
    },

    /* ─── Numbers 16:41–50 — Aaron Stands Between ────────────────────────── */
    {
      ref: 'Numbers 16:41–50',
      title: 'Aaron Stands Between the Dead and the Living',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 41,
              spans: [
                t('But on the morrow all the congregation of the children of Israel '),
                hg('murmured against Moses and against Aaron', 'morrow-murmur'),
                t(', saying, Ye have killed the people of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'morrow-murmur',
          html:
            'The very next day, the people turn. The ground has closed over Korah and his company. The fire has consumed the 250. Everyone saw. And yet the morning brings not gratitude but accusation. "You have killed the people of the Lord." The people cannot yet see that they were being offered the same choice Korah had: obey or rebel. They only see judgment and mistake it for cruelty.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 42,
              spans: [
                t('And it came to pass, when the congregation was gathered against Moses and against Aaron, that they looked toward the tabernacle of the congregation: and, behold, the cloud covered it, and '),
                hp('the glory of the Lord appeared', 'glory-second'),
                t('.'),
              ],
            },
            {
              number: 43,
              spans: [
                t('And Moses and Aaron came before the tabernacle of the congregation.'),
              ],
            },
            {
              number: 44,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 45,
              spans: [
                t('Get you up from among this congregation, that I may consume them as in a moment. And '),
                hp('they fell upon their faces', 'face-third'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'glory-second',
          html:
            'The glory of the Lord appears a second time. God is about to act again. And Moses and Aaron, instead of arguing for themselves, fall on their faces a third time and intercede for the people.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 46,
              spans: [
                t('And Moses said unto Aaron, Take a censer, and put fire therein from off the altar, and put on incense, and go quickly unto the congregation, and make an atonement for them: for there is wrath gone out from the Lord; the plague is begun.'),
              ],
            },
            {
              number: 47,
              spans: [
                t('And Aaron took as Moses commanded, and ran into the midst of the congregation; and, behold, the plague was begun among the people: and he '),
                hp('put on incense, and made an atonement for them', 'atonement-made'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'atonement-made',
          html:
            'Aaron runs into the place where the plague is already spreading. He takes a censer from the altar — the same kind of censer the rebels took, but Aaron&apos;s is filled from the altar fire, the authorized fire. He puts incense in it and stands in the midst of the dying, making atonement. This is the priestly act at its purest: standing between judgment and grace.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 48,
              spans: [
                t('And '),
                hp('he stood between the dead and the living', 'stood-between'),
                t('; and the plague was stayed.'),
              ],
            },
            {
              number: 49,
              spans: [
                t('Now they that died in the plague were fourteen thousand and seven hundred, beside them that died about the matter of Korah.'),
              ],
            },
            {
              number: 50,
              spans: [
                t('And Aaron returned unto Moses unto the door of the tabernacle of the congregation: and the plague was stayed.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'stood-between',
          title: 'Amad — "stood"',
          script: 'עָמַד',
          translit: '<strong>amad</strong> · to stand firm, to stand in the gap',
          description:
            'Aaron takes his stand — amad — between the dead and the living. It is the posture of intercession. He does not argue. He does not explain. He stands with the holy fire and incense, and the wrath stops.',
        },
        {
          kind: 'christ',
          id: 'christ-atonement',
          title: 'Christ Connection — Jesus in the Gap',
          html:
            'Aaron stands between the dead and the living, and the plague is stayed. Jesus does the same thing from the cross and from His seat at the right hand of God. Hebrews 7:24–25 says: "But this man, because he continueth ever, hath an unchangeable priesthood; wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them." Jesus entered the holy of holies with His own blood — not fire and incense from an earthly altar, but His own sacrifice. And He stands, eternally, between God&apos;s justice and those who are covered by His atonement. The plague that should consume us is stayed because He stands there.',
        },
        {
          kind: 'carry',
          html:
            'Aaron does not wait for the congregation to repent. He does not make them prove they deserve grace. He simply runs into the midst of the dying with the instruments of atonement in his hands. This is what the priesthood is for: not to protect itself from the people, but to stand in the place where judgment is falling and offer atonement. If you have been given any role — as a parent, a pastor, a leader, a friend — you have been given a censer. Not for your own glory, but to run into the places where judgment is falling and make atonement for others.',
        },
        {
          kind: 'reflection',
          id: 'standing-between',
          prompt:
            'Where are you called to stand between the dead and the living — interceding, making atonement, not defending yourself but standing for others? Who is dying around you, and what would it cost to run toward them?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Numbers 16',
    quote:
      'When Korah rebels for the priesthood and the earth opens to swallow him, Aaron stands between the dead and the living with a censer, and the plague is stayed. The censers become a covering on the altar — a memorial that foreshadows Jesus, our eternal High Priest.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 16 · Study Guide',
  },

  hasHebrew: true,
};
