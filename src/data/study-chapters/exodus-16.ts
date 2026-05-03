import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 16 — Israel grumbles for food in the wilderness of Sin. God promises
 * to rain bread from heaven. Quail in the evening, manna in the morning. Daily
 * portion: enough for the day, no more. Double on the sixth day; none on the
 * seventh. Israel disobeys both — some try to keep manna overnight (it bred
 * worms); some go out on the Sabbath to gather (none was there).
 *
 * Central themes: God&apos;s provision, trust, the daily rhythm of faith,
 * Sabbath rest, and the bread from heaven that prefigures Christ.
 */
export const EXODUS_16: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 16,

  estimatedMinutes: { beginner: 10, intermediate: 19, deep: 22 },
  intros: [
    'After crossing the Red Sea, Israel stands in the wilderness of Sin. There is no bread, no crops, no visible source of food. And like people in every age, they panic. "Would God had let us die in Egypt," they tell Moses, "where we sat by the fleshpots and ate bread to the full." Three days they have been thirsty. Now they are hungry. They have seen a pillar of cloud and a pillar of fire. They have seen the sea split and the armies of Egypt drowned. But the moment their stomachs speak, they forget it all.',
    'This chapter is about what God teaches through hunger — not the pain of it, but the rhythm underneath it. Each morning brings just enough. Each day demands trust. No hoarding. No planning ahead that forgets to pray. The Sabbath arrives not as a law imposed from above but as the natural shape of how provision works: six days of gathering, one day of rest. The manna is the first food of the free — and every time Israel eats it, they are practicing the kind of faith God will ask of them for the next forty years.',
    'For readers on this side of the cross, the connection runs even deeper. Jesus will stand in a synagogue and say, "Your fathers ate manna in the wilderness, and are dead. This is the bread which cometh down from heaven." He is not offering nostalgia for wilderness food. He is offering Himself as the answer to every hunger the manna could only point to.',
  ],

  bottomShare: {
    label: 'Share Exodus 16',
    quote:
      'God rained down bread from heaven each morning to feed Israel in the wilderness. The portion was perfect each day — enough to gather, enough to eat, with nothing left over. God taught His people daily trust through daily bread.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 16 · Study Guide',
  },

  sections: [
    /* ─── Exodus 16:1–3 — The Complaint ───────────────────────────────── */
    {
      ref: 'Exodus 16:1–3',
      title: 'Hunger and Forgetfulness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 1,
              spans: [
                t('And they took their journey from Elim: and all the congregation of the children of Israel came unto '),
                hy('the wilderness of Sin', 'exodus-sin'),
                t(', which is between Elim and Sinai, on the fifteenth day of the second month after their departing out of the land of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exodus-sin',
          html:
            'The wilderness of Sin is not a metaphor for sinfulness — it is a place (near modern Sinai). But the name carries weight. This is where Israel will learn what they really want, what they trust, and who their God truly is.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 2,
              spans: [
                t('And the whole congregation of the children of Israel murmured against Moses and Aaron in the wilderness:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the children of Israel said unto them, '),
                hy('Would to God we had died by the hand of the LORD in the land of Egypt', 'c-complain'),
                t(', when we sat by the fleshpots, and when we did eat bread to the full; for ye have brought us forth into this wilderness, to kill this whole assembly with hunger.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-complain',
          html:
            'Three days ago — just three days — they watched the Red Sea close on their enemies. They sang about God&apos;s strength and His right hand. But hunger is a short memory. The body&apos;s need drowns out the soul&apos;s witness. They do not ask God; they accuse Moses. And in accusing him, they are really accusing God: <em>You brought us out here to die.</em>',
        },
        {
          kind: 'carry',
          html:
            'You know that place in yourself where faith is thin — where you remember your rescue, your deliverance, the way God has shown up before, but your emptiness is so loud that none of it seems real anymore? This is where Israel is. This is where you are, sometimes, on an ordinary Tuesday. The text does not shame them for it. It lets you see it clearly, so you can see yourself clearly.',
        },
        {
          kind: 'reflection',
          id: 'complain',
          prompt:
            'What is your wilderness of Sin — the place where hunger, fear, or lack makes you forget what God has already done? What would change if you named that place out loud?',
        },
      ],
    },

    /* ─── Exodus 16:4–12 — God Promises ──────────────────────────────── */
    {
      ref: 'Exodus 16:4–12',
      title: 'God&apos;s Answer: Trust and Test',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 4,
              spans: [
                t('Then said the LORD unto Moses, '),
                hp('Behold, I will rain bread from heaven for you', 'christ-bread'),
                t(': and the people shall go out and '),
                hg('gather a certain rate every day', 'c-daily'),
                t(', that I may prove them, whether they will walk in my law, or no.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-daily',
          html:
            'God&apos;s first word about His provision is about its shape: a certain rate, every day. Not a year&apos;s supply on Monday. Not feast followed by famine. The rhythm itself is the teaching. Daily need meets daily grace. That is the lesson God is about to write in wilderness dust.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 5,
              spans: [
                t('And it shall come to pass, that on the sixth day they shall prepare that which they bring in; and it shall be '),
                hg('twice as much', 'c-double'),
                t(' as they gather daily.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-double',
          html:
            'Before the Sabbath law arrives at Sinai, God builds it into His provision. The sixth day brings twice the manna. Not because God forgets about the seventh day. Because God knows the seventh day is holy, and His people will need to rest in it.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 6,
              spans: [
                t('And Moses and Aaron said unto all the children of Israel, At even, ye shall know that the LORD hath brought you out from the land of Egypt:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And in the morning ye shall see the glory of the LORD; for that he heareth your murmurings against the LORD: and what are we, that ye murmur against us?'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Moses said, This shall be, when the LORD shall give you in the evening flesh to eat, and in the morning '),
                hy('bread to the full', 'c-bread-full'),
                t('; for the LORD heareth your murmurings which ye murmur against him: and what are we? your murmurings are not against us, but against the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bread-full',
          html:
            'God hears their murmuring — the same word they used in verse 2, <em>lun</em>, to grumble, to complain as a congregation. He does not punish it. He answers it. Quail in the evening, bread in the morning. A physical answer to a spiritual complaint. The body will be fed so the soul can learn.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 9,
              spans: [
                t('And Moses spake unto Aaron, Say unto all the congregation of the children of Israel, Come near before the LORD: for '),
                hp('he hath heard your murmurings', 'c-heard-murmur'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And it came to pass, as Aaron spake unto the whole congregation of the children of Israel, that they looked toward the wilderness, and, behold, '),
                hg('the glory of the LORD appeared in the cloud', 'c-glory-cloud'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-heard-murmur',
          html:
            'God hears their murmuring — the same word they used in verse 2, <em>lun</em>, to grumble, to complain as a congregation. He does not punish it. He answers it. Quail in the evening, bread in the morning. A physical answer to a spiritual complaint. The body will be fed so the soul can learn.',
        },
        {
          kind: 'commentary',
          id: 'c-glory-cloud',
          html:
            'The glory of the Lord appears in the cloud — the same cloud that has been leading them through the desert. God&apos;s presence is visible. His answer to complaint is not a lecture, but His own appearance, reminding Israel that they are not abandoned, that He is with them.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mann',
          title: 'Man — &ldquo;what is it?&rdquo;',
          script: 'מָן',
          translit: '<strong>man</strong> (from <strong>mah hu</strong>, &ldquo;what is it?&rdquo;)',
          description:
            'When the Israelites first see the flakes on the ground, their question becomes the bread&apos;s name. They do not know what it is. God uses their confusion as a name: What Is It. Every time they eat it, they are remembering that they did not earn it, do not understand it, and cannot control it. Only receive it.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 11,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 12,
              spans: [
                t('I have heard the murmurings of the children of Israel: speak unto them, saying, At even ye shall eat flesh, and in the morning ye shall be filled with bread; and ye shall know that I am the LORD your God.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-bread',
          title: 'Christ Connection — The Bread from Heaven',
          html:
            'In John 6, Jesus stands in a synagogue and says, "Your fathers did eat manna in the wilderness, and are dead. This is the bread which cometh down from heaven, that a man may eat thereof, and not die. I am the living bread which came down from heaven: if any man eat of this bread, he shall live for ever" (John 6:49–51). The manna was a sign pointing to Him — bread that sustains life but does not prevent death. Jesus is the bread that does. Every time Israel gathered manna, they were being taught to hunger for something deeper.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s first answer to complaint is not a sermon. It is a gift. The quail at evening. The bread in the morning. A physical answer that says: <em>I hear you. I see you. I will feed you.</em> Whatever complaint is in your mouth right now — fear for money, anxiety about tomorrow, the simple ache of not having enough — God does not shut you up. He feeds you. Not always with bread, but always with something. His job is to provide. Your job is to gather what He gives, trust it is enough, and come back tomorrow.',
        },
      ],
    },

    /* ─── Exodus 16:13–18 — The Bread Falls ──────────────────────────── */
    {
      ref: 'Exodus 16:13–18',
      title: 'The Gathering: Enough for Each',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 13,
              spans: [
                t('And it came to pass, that at even the '),
                hg('quails came up, and covered the camp', 'c-quail'),
                t(': and in the morning the '),
                hg('dew lay round about the host', 'c-dew'),
                t('.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And when the dew that lay was gone up, behold, upon the face of the wilderness there lay a small round thing, as small as the hoar frost on the ground.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-quail',
          html:
            'Quail migrate through the Sinai peninsula each year. But the way they arrive — covering the whole camp at once, enough for two million hungry people — is miracle dressed as nature. God works often this way: the event is real, the provision is real, but the timing and scale reveal His hand.',
        },
        {
          kind: 'commentary',
          id: 'c-dew',
          html:
            'The manna appears in the morning with the dew. It is small, round, white — like frost. Israel has to learn to recognize God&apos;s gift. It does not announce itself. You have to look for it. You have to gather it. You have to trust what you are picking up off the ground.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 15,
              spans: [
                t('And when the children of Israel saw it, they said one to another, '),
                hy('It is manna', 'hebrew-mann'),
                t(': for they wist not what it was. And Moses said unto them, This is the bread which the LORD hath given you to eat.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 16,
              spans: [
                t('This is the thing which the LORD hath commanded: '),
                hg('Gather of it every man according to his eating', 'c-per-eater'),
                t(', an '),
                hy('omer', 'hebrew-omer'),
                t(' for every man, according to the number of your persons; take ye every man for them which are in his tents.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-per-eater',
          html:
            'The instruction is simple: gather enough for your household. Not more. Not less. The text will repeat this principle twice more, building it into Israel&apos;s memory. God&apos;s provision matches God&apos;s precision.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-omer',
          title: 'Omer — a dry measure',
          script: 'עֹמֶר',
          translit: '<strong>omer</strong> · a measure holding about two quarts; later, the ceremonial sheaf offered at Passover',
          description:
            'An omer was a unit of measure. One omer per person per day. The standard. No adjustment for greed, no room for hoarding. Later, a sheaf of barley (an omer&apos;s worth) becomes the first fruits offering at Passover. From wilderness measure to temple offering — provision always points toward worship.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 17,
              spans: [
                t('And the children of Israel did so, and '),
                hg('gathered, some more, some less', 'c-gather-measure'),
                t('.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And when they did mete it with an omer, '),
                hp('he that gathered much had nothing over, and he that gathered little had no lack', 'c-miracle-portion'),
                t(': they gathered every man according to his eating.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gather-measure',
          html:
            'Some gathered more, some less. But when they measured it out, every family had exactly what they needed. This is the miracle of the manna — not just that it appears, but that it is distributed with perfect equity. The person who was greedy ends up with the same omer as the person who was cautious.',
        },
        {
          kind: 'commentary',
          id: 'c-miracle-portion',
          html:
            'Verse 18 is the miracle within the miracle. Greed gains nothing. Scarcity gains nothing. The omer is perfect. Paul will quote this logic in 2 Corinthians 8:15 when he is writing about generosity: "He that had gathered much had nothing over; and he that had gathered little had no lack." God&apos;s provision is not about what you grasp. It is about what you need.',
        },
        {
          kind: 'carry',
          html:
            'The urge to hoard, to gather more than you need, to ensure your own surplus — the manna stops all of it cold. Greed does not gain you an advantage. Scarcity does not leave you short. What you need shows up. And what you do not need, if you keep it past the day, will breed worms. God is trying to teach you: <em>enough is real.</em> Not "enough if you pray harder" or "enough if you work more." Just enough. It shows up each morning. You gather it. You eat it. Tomorrow it comes again. That is the discipline of trust.',
        },
        {
          kind: 'reflection',
          id: 'gather',
          prompt:
            'What does your version of gathering "more than you need" look like? Money, time, approval, certainty about tomorrow? What would it feel like to trust that "enough" really is enough?',
        },
      ],
    },

    /* ─── Exodus 16:19–27 — The Disobedience ───────────────────────── */
    {
      ref: 'Exodus 16:19–27',
      title: 'Keeping and Gathering: Learning Through Disobedience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 19,
              spans: [
                t('And Moses said, Let no man leave of it till the morning.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Notwithstanding '),
                hg('they hearkened not unto Moses', 'c-disobey'),
                t('; but some of them left of it until the morning, and it '),
                hy('bred worms, and stank', 'c-worms'),
                t(': and Moses was wroth with them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-disobey',
          html:
            'Israel has seen God work. They have eaten the bread. They have gathered their omer. And then — immediately — some of them disobey. They try to keep it. The stomach trusts God for today. But the anxious heart is already thinking about tomorrow.',
        },
        {
          kind: 'commentary',
          id: 'c-worms',
          html:
            'The manna decays. Literally rots. It breeds worms. It stinks. The lesson is written in corruption: you cannot hoard grace. You cannot save up your prayer from yesterday and skip today&apos;s. You cannot bank your trust and withdraw it later. Each day stands alone. Each day demands fresh faith.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 21,
              spans: [
                t('And they gathered it every morning, every man according to his eating: and when the sun waxed hot, it melted.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-melted',
          html:
            'As if to make the point twice: if you do not gather in the morning, if you wait for a more convenient time, the manna melts in the heat. Provision requires promptness. Grace waits, but not indefinitely. The window closes. The moment passes.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 22,
              spans: [
                t('And it came to pass, that on the sixth day they gathered '),
                hg('twice as much bread', 'c-sixth'),
                t(', two omers for one man: and all the rulers of the congregation came and told Moses.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And he said unto them, This is that which the LORD hath said, '),
                hg('To morrow is the rest of the holy Sabbath unto the LORD', 'c-sabbath'),
                t(': bake that which ye will bake to day, and seethe that ye will seethe; and that which remaineth over lay up for you to be kept until the morning.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sixth',
          html:
            'On the sixth day, the double portion is not greed&apos;s victory. It is provision for rest. God has built Sabbath into the food system. You cannot work on the seventh day and gather manna, because there is none. The only way to rest is to have prepared on the sixth. Sabbath is not a burden imposed by law; it is written into the logistics of grace.',
        },
        {
          kind: 'commentary',
          id: 'c-sabbath',
          html:
            'The Sabbath arrives here, at Sinai, before Moses even descends the mountain with the law. It is not a command yet. It is simply the shape of how God provides. Six days, then one day of rest. The rhythm is the revelation.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 24,
              spans: [
                t('And they laid it up till the morning, as Moses bade: and it did not stink, neither was there any worm therein.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And Moses said, Eat that to day; for '),
                hp('to day is a Sabbath unto the LORD', 'c-sabbath-day'),
                t(': to day ye shall not find it in the field.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sabbath-day',
          html:
            'When you keep manna for the Sabbath, it does not rot. When you try to hoard past the sixth day, it decays. God&apos;s provision honors the rhythm He has set up. Obedience to the Sabbath — even before it was commanded, even when you do not yet understand it — is met with grace.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 26,
              spans: [
                t('Six days ye shall gather it; but on the seventh day, which is the Sabbath, in it there shall be none.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And it came to pass, that there went out some of the people on the seventh day for to gather, and they found none.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-seventh-none',
          html:
            'Israel does not learn from rotting manna. Some of them go out on the Sabbath to gather anyway. And there is nothing there. Not because God is punishing them, but because He has made the Sabbath real. The Sabbath exists whether you believe in it or not. The rhythm stands. The work of gathering is not available on the seventh day because the seventh day is not a day for work.',
        },

        {
          kind: 'carry',
          html:
            'The manna teaches by repetition: you cannot grasp what is meant to be released each day. You cannot keep what is meant to be left. You cannot work on the day that is meant for rest. Over and over, Israel bumps into the shape of things. And each time, God does not scold them forever. He gives them manna again tomorrow. The teaching is patient. But the rhythm does not bend.',
        },
      ],
    },

    /* ─── Exodus 16:28–30 — The Word ──────────────────────────────── */
    {
      ref: 'Exodus 16:28–30',
      title: 'How Long Will You Refuse?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 28,
              spans: [
                t('And the LORD said unto Moses, '),
                hp('How long will ye refuse to keep my commandments and my laws', 'c-howlong'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-howlong',
          html:
            'God&apos;s frustration is specific: Israel is not refusing major commandments here. They are refusing the rhythm He has set up through manna itself. Gathering on the Sabbath is not a written law yet — it is the shape of how provision works. But Israel keeps bumping against it and then doing it anyway. The question is tender and severe at once: <em>How long will you refuse?</em> How long will you not receive what I am trying to teach you?',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 29,
              spans: [
                t('See, for that the LORD hath given you the Sabbath, therefore he giveth you on the sixth day the bread of two days; '),
                hg('abide ye every man in his place, let no man go out of his place on the seventh day', 'c-stay'),
                t('.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('So the people rested on the seventh day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stay',
          html:
            'The Sabbath is not freedom from work in order to do nothing. It is a day to stay, to be present, to be still. The only way to rest is to stop the project of providing for yourself and trust that someone else is holding the world together. On the seventh day, Israel is called to that kind of stillness.',
        },

        {
          kind: 'christ',
          id: 'christ-rest',
          title: 'Christ Connection — Come and Rest',
          html:
            'The manna teaches for forty years. Each morning, same lesson: God provides. Each Sabbath, same rhythm: stop and trust. Then Jesus arrives and says, "Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me… and ye shall find rest unto your souls" (Matt. 11:28–29). The manna was teaching Israel something about rest and daily bread. Jesus is the answer both of them were pointing at. He is the bread that does not rot. He is the Sabbath that does not end.',
        },
        {
          kind: 'carry',
          html:
            'The Lord&apos;s Prayer asks for "this day our daily bread" — the manna translated into prayer. Not bread for the year, the month, or even the week. Today&apos;s bread. Today&apos;s grace. Today&apos;s strength. The spiritual version of what the wilderness teaches: enough comes each morning. You gather it. You eat it. You trust. Tomorrow it comes again. Whatever makes you want to hoard — financial anxiety, a relationship that feels fragile, a future that feels uncertain — hand it over. The same God who promised Israel bread in the wilderness promises you something steadier still.',
        },
        {
          kind: 'reflection',
          id: 'rest',
          prompt:
            'What does keeping Sabbath actually cost you right now? Not in theory — in your real life, on an actual Sunday or day off. What would you have to stop doing, trust, or release to actually rest?',
        },
      ],
    },

    /* ─── Exodus 16:31–36 — The Omer Jar ───────────────────────────── */
    {
      ref: 'Exodus 16:31–36',
      title: 'The Bread Remembered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 31,
              spans: [
                t('And the house of Israel called the name thereof Manna: and it was like coriander seed, white; and '),
                hy('the taste of it was like wafers made with honey', 'c-taste'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-taste',
          html:
            'Manna tastes like wafers made with honey — small, white, sweet. Not hearty bread like the fleshpots of Egypt. But enough. And the very sweetness is part of the teaching: God&apos;s provision tastes like grace. It is not given grudgingly. It comes with kindness in it.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 32,
              spans: [
                t('And Moses said, '),
                hg('This is the thing which the LORD commandeth', 'c-omer-jar'),
                t(', Fill an omer of it to be kept for your generations; that they may see the bread wherewith I have fed you in the wilderness, when I brought you forth from the land of Egypt.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And Moses said unto Aaron, Take a pot, and put an omer full of manna therein, and lay it up before the LORD, to be kept for your generations.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-omer-jar',
          html:
            'A jar of manna is to be kept in the tabernacle — not to be eaten, but to be seen. A memorial. A sign that says: <em>God fed us. Here is proof.</em> Future generations will open the tabernacle and see that white bread sitting there, and they will know the story is true. The bread will age in that pot but never fully spoil — it will become harder, but it will not rot. Even the preservation of it is a sign.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 34,
              spans: [
                t('As the LORD commanded Moses, so laid Aaron it up before the Testimony, to be kept.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And the children of Israel did eat manna forty years, until they came to a land inhabited; they did eat manna, until they came unto the borders of the land of Canaan.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('Now an omer is the tenth part of an ephah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-forty',
          html:
            'Forty years. The entire wilderness generation eats manna. Not occasionally. Every single day. For four decades, Israel does not make bread. They do not plant. They do not harvest. Every single morning, manna appears. The provision never runs out. The rhythm never breaks. By the time they reach Canaan, a whole generation has lived their whole lives on daily bread.',
        },

        {
          kind: 'carry',
          html:
            'A jar of manna sits in the tabernacle. Not for food. For memory. For witness. You have your own omer — a moment when you saw provision arrive in an impossible place, when grace showed up exactly when you needed it, when the thing you thought would destroy you became the ground you stood on. That moment is your manna jar. You are meant to keep it. To let others see it. To let your own future self look at it and remember: God fed me then. He will feed me now.',
        },

        {
          kind: 'reflection',
          id: 'remember',
          prompt:
            'What is your omer of manna — a moment when God provided in a way you did not deserve, could not have planned, and could not have made happen? How do you need to remember it this week?',
        },
      ],
    },
  ],
};
