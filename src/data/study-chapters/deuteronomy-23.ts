import { hp, hy, hg, t, type RichChapterContent } from './types';

export const DEUTERONOMY_23: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 23,

  estimatedMinutes: { beginner: 8, intermediate: 13, deep: 17 },
  intros: [
    'Deuteronomy 23 is a chapter of boundaries. It draws lines around the assembly of the Lord [res:sefaria-deuteronomy-23] — who may enter and who may not. It specifies what holiness looks like in the camp, down to the practical details of daily life. It protects the vulnerable — the runaway slave, the day laborer. It forbids exploitation in several forms: charging interest to a brother, hiring temple prostitutes, withholding a worker&apos;s wage. And it makes an odd promise: break a vow if you must, but if you vow, keep it. The chapter reads like a community learning to live in God&apos;s presence.',
    'The boundaries here troubled the early church. Not because the laws were harsh, but because they seemed to divide God&apos;s people into the allowed and the forbidden. Yet the Gospel dismantles those walls. Ruth, a Moabitess, enters the assembly through faith and becomes David&apos;s ancestor. The Ethiopian eunuch, barred by the letter of this law, becomes the first African Christian. Christ does not erase these laws; He fulfills them by opening the door that law could only guard.',
  ],

    resources: [
    {
      id: 'sefaria-deuteronomy-23',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 23',
      url: 'https://www.sefaria.org/Deuteronomy.23',
      description: 'Open-access source text and rabbinic commentary on who may enter the assembly [res:qahal-assembly-membership-boundaries-bible-odyssey] of the Lord, vows, and camp purity.',
    },
    {
      id: 'qahal-assembly-membership-boundaries-bible-odyssey',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Qahal (Assembly) and Covenant Membership',
      url: 'https://www.bibleodyssey.org/topical-article/congregation/',
      description: 'Explores who could participate in Israel&apos;s covenant assembly and how genealogy, ritual purity, and conduct determined inclusion or exclusion.',
    },
    {
      id: 'vows-oaths-ancient-israel-binding-speech',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Vows and Oaths in Ancient Israel',
      url: 'https://www.sefaria.org/Deuteronomy.23.21',
      description: 'Examines the binding nature of vows [res:vows-oaths-ancient-israel-binding-speech] and the prohibition against delaying or reneging on promises made to God.',
    },
  ],

  sections: [
    /* ─── Deuteronomy 23:1–8 — Who Enters the Assembly ───────────────── */
    {
      ref: 'Deuteronomy 23:1–8',
      title: 'Who Enters the Assembly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 1,
              spans: [
                t('He that is wounded in the stones, or hath his privy member cut off, '),
                t('shall not enter into the congregation of the Lord'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eunuch',
          html:
            'The eunuch — the man physically disabled or ritually wounded — cannot enter. But Isaiah 56 cracks this door open: &ldquo;Neither let the eunuch say, Behold, I am a dry tree. For thus saith the Lord unto the eunuchs that keep my sabbaths… I will give them an everlasting name.&rdquo; The law draws the line; the Spirit of God will erase it.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 2,
              spans: [
                t('A '),
                hy('bastard', 'hebrew-mamzer'),
                t(' shall not enter into the congregation of the Lord; even to his tenth generation shall he not enter into the congregation of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mamzer',
          html:
            'A child born outside lawful marriage is barred — and the stain reaches ten generations. In the ancient world, this protected the inherited property and social order. In the Gospel, it reads differently. Jesus&apos;s own genealogy includes Bathsheba, whose son Solomon came from adultery. David is called &ldquo;a man after God&apos;s own heart&rdquo; despite his grave sins. The law names a boundary; Christ erases it by absorbing the judgment Himself.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-mamzer',
          title: 'Mamzer — &ldquo;bastard&rdquo;',
          script: 'מַמְזֵר',
          translit: '<strong>mamzer</strong> · one born of forbidden union',
          description:
            'The mamzer bore the community&apos;s shame, not out of malice, but because bloodline mattered for inheritance and priestly service. Yet God&apos;s grace runs through the genealogies anyway — Ruth, Bathsheba, Rahab — all once outside, all brought in.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 3,
              spans: [
                t('An Ammonite and a Moabite shall not enter into the congregation of the Lord; even to their tenth generation shall they not enter into the congregation of the Lord for ever: Because they met you not with bread and with water in the way, when ye came forth out of Egypt; and because they hired against thee Balaam the son of Beor of Pethor of Mesopotamia, to curse thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ammon-moab',
          html:
            'The Ammonites and Moabites refused hospitality in the wilderness and hired Balaam to curse Israel. So they are banned forever. Yet Ruth — who is explicitly Moabite — chooses to stay with Naomi, embracing the God of Israel. &ldquo;Thy people shall be my people, and thy God my God.&rdquo; She enters by faith, not by ethnicity. Her son is Obed; her grandson is Jesse; her great-grandson is David. The law says no Moabite may enter the congregation. Ruth&apos;s answer is to enter anyway, and marry her way into the Messiah&apos;s bloodline.',
        },

        {
          kind: 'christ',
          id: 'christ-eunuch',
          title: 'Christ Connection — Breaking Down the Walls',
          html:
            'Acts 8 records Philip meeting an Ethiopian eunuch on the road — a man doubly barred from the temple by Deuteronomy 23 (foreigner and eunuch). Philip reads him Isaiah 53, and he says, &ldquo;See, here is water. What doth hinder me to be baptized?&rdquo; Philip answers with the whole revolution: nothing hinders him. Christ has opened what law locked. By the time of the early church, the eunuch was in. Ruth was in. The boundaries stood in the law; Christ stood in the door.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 4,
              spans: [
                t('Thou shalt not abhor an Edomite; for he is thy '),
                hg('brother', 'c-family'),
                t(': thou shalt not abhor an Egyptian; because thou wast a '),
                t('stranger in his land'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-family',
          html:
            'But the law also shows mercy. Edom was Jacob&apos;s brother — so abhor him not. Egypt sheltered Israel in famine — so show him grace. Even among the boundaries, God makes room for kinship and debt.',
        },

        {
          kind: 'carry',
          html:
            'You belong to a tradition that names boundaries — between what is holy and common, between what you will do and what you won&apos;t. Those lines can feel harsh until you remember they were meant to build walls around your own sanctity, not to crush others. But listen also to the cracks: the law itself says mercy for the brother nation, for the one who once showed you shelter. The question for today is: where are you drawing lines that need a little grace?',
        },

        {
          kind: 'reflection',
          id: 'assembly-who',
          prompt: 'Who have you quietly barred from your own &ldquo;congregation&rdquo;? What would it look like to let them in?',
        },
      ],
    },

    /* ─── Deuteronomy 23:9–14 — Holiness in Camp ──────────────────────── */
    {
      ref: 'Deuteronomy 23:9–14',
      title: 'Holiness in Camp',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 9,
              spans: [
                t('When the host goeth forth against thine enemies, then keep thee from every wicked thing.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-host-enemies',
          html:
            'The camp of Israel is a holy place — not because of fortifications or weapons, but because God walks in the midst of it. That presence requires purity from every soldier.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 10,
              spans: [
                t('If there be among you any man, that is not clean by reason of '),
                hy('uncleanness that chanceth him by night', 'hebrew-qara'),
                t(', then shall he go abroad out of the camp, he shall not come within the camp: But it shall be, when evening cometh on, he shall wash himself with water: and when the sun is down, he shall come into the camp again.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-unclean-night',
          html:
            'A man becomes ritually unclean by a nocturnal emission. He must leave the camp, wash, and may not return until evening. The law notices even bodily functions that are not sins — just part of being embodied. God&apos;s presence is so real in the camp that the body itself must be acknowledged before approaching.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-qara',
          title: 'Qara — &ldquo;to chance&rdquo;, &ldquo;to happen&rdquo;',
          script: 'קָרָה',
          translit: '<strong>qara</strong> · to befall, to occur',
          description:
            'The word suggests something unbidden, not willful sin. Yet even the unintended defilement requires ritual cleansing. The camp of God has a holiness that touches the everyday.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 11,
              spans: [
                t('Thou shalt have a place also without the camp, whither thou shalt go forth abroad:'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And thou shalt have a '),
                t('paddle upon thy weapon'),
                t('; and it shall be, when thou wilt ease thyself abroad, thou shalt dig therewith, and shalt turn back and cover that which cometh from thee:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-paddle-weapon',
          html:
            'A paddle on the weapon. Every soldier carries a spade. When nature calls, you dig, you cover, you leave no trace. It&apos;s practical hygiene — but the law frames it as holiness. The camp is God&apos;s dwelling place. That changes how you handle your own body.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 13,
              spans: [
                t('For the Lord thy God '),
                hp('walketh in the midst of thy camp', 'c-god-present'),
                t(', to deliver thee, and to give up thine enemies before thee; therefore shall thy camp be '),
                hy('holy', 'hebrew-qadosh'),
                t(': that he see no unclean thing in thee, and turn away from thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-god-present',
          html:
            'God is not far off. He walks. He is present. He sees. The reason we cover what comes from us, the reason we wash, the reason we are careful — is that we are not alone. He is in the tent next door.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-qadosh',
          title: 'Qadosh — &ldquo;holy&rdquo;',
          script: 'קָדוֹשׁ',
          translit: '<strong>qadosh</strong> · set apart, sacred',
          description:
            'To be qadosh is to be set apart for God. The camp is not naturally holy — it becomes holy because God walks there. When He leaves, nothing remains but old dust.',
        },

        {
          kind: 'carry',
          html:
            'God walks through your ordinary day the way He walked through the camp. You shower, you work, you sit on the toilet, you sweat, you grieve — and He is there. Not withdrawn, not shielded by space from your humanity. This is not meant to shame the body, but to wake you up. The ancient law knew something we have largely forgotten: that the presence of God changes how we treat our own flesh. If you lived consciously aware that He walks through your day, how would you care for yourself differently?',
        },

        {
          kind: 'reflection',
          id: 'holiness-camp',
          prompt: 'Where in your ordinary day do you forget that God is actually present? Name one place, and imagine Him walking through it with you.',
        },
      ],
    },

    /* ─── Deuteronomy 23:15–16 — The Runaway Slave ──────────────────── */
    {
      ref: 'Deuteronomy 23:15–16',
      title: 'The Runaway Slave',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 15,
              spans: [
                t('Thou shalt not deliver unto his master the servant which is escaped from his master unto thee:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('But he shall dwell with thee, even among you, in that place which he shall choose in one of thy gates, where it liketh him best: thou shalt not '),
                hp('oppress him', 'c-slave-grace'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-slave-grace',
          html:
            'This law is radically countercultural. In every ancient Near Eastern code, a slave who escaped was property to be returned. Exodus 21:16 forbids kidnapping, but Deuteronomy 23 goes further: if a slave escapes to you, protect him. Let him choose his own place. Do not oppress him. God&apos;s heart for the enslaved runs throughout His law, but nowhere is it clearer than here. Freedom, once tasted, is sacred.',
        },

        {
          kind: 'carry',
          html:
            'You may not be enslaved by chains, but you might be enslaved by debt, by shame, by someone else&apos;s expectations. If escape becomes necessary, the God of Deuteronomy 23 does not call you back. He says: dwell in the place you choose. Thrive. No one will drag you back. You are not property. Freedom, once you taste it, is meant to stay.',
        },

        {
          kind: 'reflection',
          id: 'slave-escape',
          prompt: 'What or whom would you need to escape from to be truly free? What is holding you back from believing you are allowed to?',
        },
      ],
    },

    /* ─── Deuteronomy 23:17–18 — Prostitution and Unjust Gain ──────────── */
    {
      ref: 'Deuteronomy 23:17–18',
      title: 'Prostitution and Unjust Gain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 17,
              spans: [
                t('There shall be no whore of the daughters of Israel, nor a sodomite of the sons of Israel: '),
                hy('there shall be no whore of the daughters of Israel', 'hebrew-kedesha'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-whore-sodomite',
          html:
            'The prohibition is twofold. No woman shall be a sacred prostitute (the ancient Near East used temple prostitution as ritual). No man shall be a sodomite — a word here meaning a male prostitute of either orientation. The law protects the dignity of the body.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-kedesha',
          title: 'Kedesha — &ldquo;sacred prostitute&rdquo;',
          script: 'קְדֵשָׁה',
          translit: '<strong>kedesha</strong> · a consecrated prostitute',
          description:
            'In Canaanite temples, sexual acts were offered as a form of worship. Israel is to have no such thing. The body is not a tool for religious ritual or economic exploitation.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 18,
              spans: [
                t('Thou shalt not bring the '),
                hg('price of a whore', 'c-price-whore'),
                t(', nor the '),
                hg('price of a dog', 'c-price-dog'),
                t(', into the house of the Lord thy God for any vow: for even both these are '),
                hp('abomination unto the Lord thy God', 'c-abomination'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-price-whore',
          html:
            'Even if someone vows the proceeds of prostitution to God&apos;s house — a gift, offered as piety — it is rejected. The money is tainted. You cannot buy access to God with the wages of unjust gain.',
        },
        {
          kind: 'commentary',
          id: 'c-price-dog',
          html:
            'A &ldquo;dog&rdquo; is a term of contempt for a male prostitute. The parallelism is sharp: both are acts of embodied degradation. Neither can be monetized into the sacred.',
        },

        {
          kind: 'commentary',
          id: 'c-abomination',
          html:
            'Abomination — something that turns God&apos;s face away. The law does not say, &ldquo;The person is an abomination.&rdquo; It says the practice is an abomination to Him. His disgust is for the act, not the person.',
        },

        {
          kind: 'carry',
          html:
            'You cannot buy your way into God&apos;s favor with money made from exploitation. If you have tasted something like the marketplace of your own body — whether literal or the slow erosion of dignity in service to someone else&apos;s needs — that wound does not heal by offering the profit to God. It heals by being seen, by being stopped, by being told your body was never the price to pay. God&apos;s house receives the gifts of free people, not the ransoms of the enslaved.',
        },

        {
          kind: 'reflection',
          id: 'unjust-gain',
          prompt: 'What part of yourself have you sold, and to whom? What would it take to reclaim that?',
        },
      ],
    },

    /* ─── Deuteronomy 23:19–23 — Vows, Interest, and Words ────────────── */
    {
      ref: 'Deuteronomy 23:19–23',
      title: 'Vows, Interest, and Words',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 19,
              spans: [
                t('Thou shalt not lend upon usury to thy brother; usury of money, usury of victuals, usury of any thing that is lent upon usury: Unto a stranger thou mayest lend upon usury; but unto thy brother thou shalt not lend upon usury: that the Lord thy God may bless thee in all that thou settest thine hand unto in the land whither thou goest to possess it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-usury-brother',
          html:
            'Interest on loans to your brother is forbidden. Interest to a stranger is permitted — a practical concession to commerce with nations outside the covenant. But the brother — the member of the covenant family — cannot be exploited. Usury makes the poor poorer. It extracts blood from wounds. The law says: not here. Not among us.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-neshekh',
          title: 'Neshekh — &ldquo;interest&rdquo;, &ldquo;usury&rdquo;',
          script: 'נֶ֫שֶׁךְ',
          translit: '<strong>neshekh</strong> · a bite, a snare',
          description:
            'The word itself means a bite — as if interest were a predator snapping at the flesh of the poor. The metaphor is visceral.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 20,
              spans: [
                t('Unto a stranger thou mayest lend upon usury; but unto thy brother thou shalt not lend upon usury: that the Lord thy God may bless thee in all that thou settest thine hand unto in the land whither thou goest to possess it.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 21,
              spans: [
                t('When thou shalt vow a vow unto the Lord thy God, thou shalt not slack to pay it: for the Lord thy God will surely require it of thee; and it would be sin in thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-vow-require',
          html:
            'A vow is not a casual thing. Once spoken, it binds you. God will hold you to it — not in wrath, but in seriousness. A word spoken before God is a word God takes at face value.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 22,
              spans: [
                t('But if thou shalt forbear to vow, '),
                hy('it shall be no sin in thee', 'hebrew-neder'),
                t('. That which is gone out of thy lips thou shalt keep and perform; even a freewill offering according as thou hast vowed unto the Lord thy God, which thou hast promised with thy mouth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-forbear-vow',
          html:
            'Here is an astonishing permission: It is not a sin to refrain from vowing. God does not require excessive promises. Better to say nothing than to say something you cannot keep. The law trusts silence as much as speech.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-neder',
          title: 'Neder — &ldquo;vow&rdquo;',
          script: 'נֶדֶר',
          translit: '<strong>neder</strong> · a binding promise made to God',
          description:
            'A vow is not a wish or a hope. It is a contract with God. Once it leaves your lips, it has weight.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 23,
              spans: [
                t('If thou forbear to vow, it shall be no sin in thee. That which is gone out of thy lips thou shalt keep and perform; even a freewill offering according as thou hast vowed unto the Lord thy God, which thou hast promised with thy mouth.'),
              ],
            },
          ],
        },

        {
          kind: 'carry',
          html:
            'You live in a time of casual words. Promises scattered like seeds. &ldquo;I&apos;ll call you.&rdquo; &ldquo;Let&apos;s do coffee.&rdquo; &ldquo;I promise I&apos;ll change.&rdquo; Most evaporate. Deuteronomy 23 says something else: If you say it, mean it. And if you&apos;re not sure you mean it — do not say it. Silence is not a failure. Silence is integrity waiting to be honest.',
        },

        {
          kind: 'reflection',
          id: 'vows-words',
          prompt: 'What vow have you broken? What promise have you kept even when it cost you? What would it look like to say less and mean more?',
        },
      ],
    },

    /* ─── Deuteronomy 23:24–25 — Gleaning Your Neighbor&apos;s Vineyard ─── */
    {
      ref: 'Deuteronomy 23:24–25',
      title: 'Gleaning Your Neighbor&apos;s Vineyard',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 24,
              spans: [
                t('When thou comest into thy neighbor&apos;s vineyard, thou mayest eat grapes thy fill, at thine own pleasure; but thou shalt not put any in thy vessel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-vineyard-eat',
          html:
            'A radical law of hospitality. Your neighbor&apos;s vineyard is yours to eat from as you pass through. You may satisfy hunger freely. But you cannot carry the fruit away — you cannot stockpile, you cannot sell, you cannot take more than you consume in that moment. It is a law that honors the poor person&apos;s immediate hunger while protecting the owner&apos;s harvest.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 25,
              spans: [
                t('When thou comest into the standing corn of thy neighbor, then thou mayest pluck the ears with thine hand; but thou shalt not move a sickle unto thy neighbor&apos;s corn.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-corn-pluck',
          html:
            'The same principle in the grain field. You may pluck ears with your hand as you walk. You may eat. But you cannot bring a tool to harvest. The sickle — the tool of organized labor — stays home. This is exactly what Jesus&apos; disciples did in Matthew 12 when they walked through grain on the Sabbath. Jesus defends the right itself: &ldquo;My disciples did nothing wrong.&rdquo;',
        },

        {
          kind: 'christ',
          id: 'christ-gleaning',
          title: 'Christ Connection — Defending the Right to Glean',
          html:
            'Matthew 12:1–8 records Jesus&apos; disciples plucking grain on the Sabbath. The Pharisees accuse them of breaking the law. Jesus answers by citing this very section: &ldquo;Have ye not read what David did?… Or have ye not read in the law, how that on the sabbath days the priests in the temple profane the sabbath, and are blameless?… The Son of man is Lord even of the sabbath day.&rdquo; Jesus defends a Torah right. He is saying: the law I gave you protects the hungry. Honor that, and you honor Me.',
        },

        {
          kind: 'carry',
          html:
            'You walk through your neighbor&apos;s field — the world&apos;s abundance — daily. You may taste what you need. You may pause to eat. But the sickle is not yours to carry. You are learning to receive, not to possess. To enjoy without hoarding. To trust that there will be grapes again next season, grain next harvest. The law is teaching you something about gratitude and restraint: take what you need, leave what you cannot carry, and let tomorrow be tomorrow.',
        },

        {
          kind: 'reflection',
          id: 'glean-vineyard',
          prompt: 'Where in your life are you trying to carry the sickle when you should only use your hands? What would it look like to glean instead?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Deuteronomy 23',
    quote:
      'God walks in the midst of His camp, and His law protects the vulnerable: the runaway slave, the hungry gleaner, the brother in debt. When we honor those boundaries, we echo His character.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 23 · Study Guide',
  },
};
