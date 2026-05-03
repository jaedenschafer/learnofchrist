import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 9 — The second Passover and the cloud-fire pillar.
 *
 * Israel keeps the Passover one year after the exodus. Some men were unclean
 * from contact with a corpse and couldn't keep it — God provides "Pesach Sheni"
 * (second Passover) one month later as a make-up. Then: the cloud by day, fire
 * by night over the tabernacle. When the cloud lifted, Israel moved; when it
 * settled, Israel stayed — sometimes a day, sometimes a year.
 *
 * The second Passover is one of scripture's most surprising graces — God doesn't
 * say "tough luck, you missed it." His grace makes provision even for those who
 * missed the appointed time (Heb 4:7). The Shekinah cloud-and-fire anticipates
 * Rom 8:14: "as many as are led by the Spirit of God."
 */
export const NUMBERS_9: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 9,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 14 },
  intros: [
    'Numbers 9 opens with Israel one year into the wilderness—one year after leaving Egypt. They gather again to keep the Passover, the feast that celebrates liberation. But in the middle of this joy, some men are unclean. They have touched a dead body, and the law says they cannot eat the Passover. They come to Moses with a quiet crisis: will they be locked out of the remembrance of their own salvation?',
    'God\'s answer becomes one of scripture\'s most surprising graces. He doesn\'t say "that\'s the rule—you missed it." Instead, He opens a door. One month later—Pesach Sheni, the second Passover—those who were unclean get a second chance. Then the cloud appears: God\'s visible presence, leading Israel forward. When the cloud moves, Israel moves. When it stops, they stop. The shape of their wilderness journey is not their own planning—it is the Shekinah\'s leading.',
  ],

  opener: {
    matchArtist: /([Dd]or[é|e]|tissot)/i,
    matchTitle: /(exodus|wilderness|cloud|pillar|tabernacle)/i,
    caption: 'Israel Following the Cloud',
  },

  bottomShare: {
    label: 'Share Numbers 9',
    quote:
      'Israel kept the Passover and saw God\'s cloud lead them through the wilderness. Those who missed it got a second chance—grace even for uncleanness. God\'s presence, not the calendar, guided every step.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 9 · Study Guide',
  },

  sections: [
    /* ─── Numbers 9:1–5 — The Passover at Sinai ───────────────────────────── */
    {
      ref: 'Numbers 9:1–5',
      title: 'Israel Keeps the Passover',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD spake unto Moses in the wilderness of Sinai, in the first month of the second year after they were come out of the land of Egypt, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Let the children of Israel also keep the '),
                hp('passover at his appointed season', 'c-season'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('In the fourteenth day of this month, at even, ye shall keep it in his appointed season: according to all the rites of it, and according to all the ceremonies thereof, shall ye keep it.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And Moses spake unto the children of Israel, that they should keep the passover.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And they kept the passover on the fourteenth day of the first month at even in the wilderness of Sinai: according to all that the LORD commanded Moses, so did the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-season',
          html:
            'One year. Exactly one year after the night the blood was painted on the doorframes and God\'s angel passed over Egypt, Israel gathers again to remember it. The wilderness does not erase the feast; it frames it. The word "season" carries weight—God has appointed this time, and Israel keeps it at His word, not at the calendar\'s convenience or at their own settling. The feast belongs to Him.',
        },
        {
          kind: 'carry',
          html:
            'There may be anniversaries you keep—of deliverance, of turning, of grace. Numbers says that keeping feast is not optional, even in the wilderness. Even when you\'re unsettled. Even when the next step is unclear. The appointed time is a cord that ties you back to what God has done.',
        },
        {
          kind: 'reflection',
          id: 'passover-keep',
          prompt:
            'What deliverance or turning point in your life deserves to be kept—to be remembered yearly, marked, celebrated? What would it cost you to pause and keep feast?',
        },
      ],
    },

    /* ─── Numbers 9:6–8 — The Unclean Come Forward ────────────────────── */
    {
      ref: 'Numbers 9:6–8',
      title: 'The Unclean',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 6,
              spans: [
                t('And there were certain men who were '),
                hy('defiled by the dead body of a man', 'c-defiled'),
                t(', that they could not keep the passover on that day: and they came before Moses and before Aaron on that day:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And those men said unto him, We are '),
                hg('defiled by the dead body of a man', 'c-unclean-speak'),
                t(': wherefore are we kept back, that we may not offer an offering of the LORD in his appointed season among the children of Israel?'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Moses said unto them, Stand still, and I will hear what the LORD will command concerning you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-defiled',
          html:
            'Defilement from touching a corpse—a real, specific kind of uncleanness. The law was not arbitrary; death carries contagion, and the people of life must be careful about it. But this defilement is not sin. These men touched death while honoring it—they were likely attending to their own dead, doing what love required. Yet the law says they cannot eat the feast. They are ceremonially unclean on the night of remembrance. The law is just; the situation is just; and it seems there is no way forward.',
        },
        {
          kind: 'commentary',
          id: 'c-unclean-speak',
          html:
            'Notice their voice. Not bitter—just clear. They know the rule. They know what they\'ve touched. "Wherefore are we kept back?" It\'s not a complaint; it\'s a question. A question that hangs: Does our uncleanness lock us out of remembering liberation? Does the law itself become a kind of second slavery?',
        },
        {
          kind: 'carry',
          html:
            'The unclean bring their uncleanness before Moses, not in hiding. Not in shame, but in straightforward speech. "We are defiled. Why are we kept back?" There\'s dignity in that question. They know the rule; they know the reason. But they also know they are part of Israel. And they ask: Is there no grace for us?',
        },
        {
          kind: 'reflection',
          id: 'unclean-ask',
          prompt:
            'Have you ever felt locked out of something sacred because of something you touched, something that happened to you? What would it mean to bring that question directly to God instead of hiding it?',
        },
      ],
    },

    /* ─── Numbers 9:9–12 — The Second Passover ──────────────────────────── */
    {
      ref: 'Numbers 9:9–12',
      title: 'The Second Passover',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 9,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Speak unto the children of Israel, saying, If any man of you or of your posterity shall be unclean by reason of a dead body, or be in a journey afar off, yet he shall keep the '),
                hp('passover unto the LORD', 'christ-second-passover'),
                t('.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('The fourteenth day of the second month at even they shall keep it, and eat it with unleavened bread and bitter herbs;'),
              ],
            },
            {
              number: 12,
              spans: [
                t('They shall leave none of it unto the morning, nor break any bone of it: according to all the ordinances of the passover they shall keep it.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-pesach-sheni',
          title: 'Pesach Sheni — "Second Passover"',
          script: 'פסח שני',
          translit: '<strong>pesach sheni</strong> · second passover (Num. 9:11)',
          description:
            'One month later. The exact ordinances, the exact meat, the exact herbs—everything the first Passover carries, the second Passover carries too. But it is marked with the word "second." Not a lesser thing, not a substitute. A second chance. A divine door left open.',
        },
        {
          kind: 'christ',
          id: 'christ-second-passover',
          title: 'Christ Connection — Today, If You Will Hear',
          html:
            'Hebrews 4:7 quotes Psalm 95: "To day, if ye will hear his voice, harden not your hearts." The point is not whether you kept the appointed time, but whether you hear God\'s voice when it comes. Jesus speaks of Himself as the Passover (1 Cor. 5:7). But His presence doesn\'t end with the calendar. If you missed the first hour, the first year, the first covenant—there is a second chance [res:sefaria-pesach-sheni]. God\'s grace is not locked to the calendar. It is locked to His character. He doesn\'t turn away the late-comer, the unclean, the one who missed the appointed time. He opens another door.',
        },
        {
          kind: 'commentary',
          id: 'c-pesach-reason',
          html:
            'Two reasons are given: uncleanness (what you touched) or distance (where you are). God names both. Whether you couldn\'t come because something held you back—obligation, grief, loss—or whether you were simply far away—separated by time, geography, circumstance—the door opens again. One month later. The same meal. The same ordinances. The same remembrance. This is perhaps the oldest picture in scripture of grace remaking what law first closed off.',
        },
        {
          kind: 'carry',
          html:
            'If you are defiled by something you touched, or separated by a distance you didn\'t choose, the Passover is not lost to you. There is a second feast. A month to become clean, to travel closer, to prepare again. God does not lock His grace behind the first appointed time. He opens a second door, and the crossing through it is just as real.',
        },
        {
          kind: 'reflection',
          id: 'second-passover',
          prompt:
            'What appointment with grace did you miss—through uncleanness, distance, or circumstance? What would it mean to know that God opens a second door?',
        },
      ],
    },

    /* ─── Numbers 9:13 — The One Who Refuses ──────────────────────────── */
    {
      ref: 'Numbers 9:13',
      title: 'The One Who Refuses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 13,
              spans: [
                t('But the man that is clean, and is not in a journey, and forbeareth to keep the passover, even the same soul shall be cut off from among his people: because he brought not the offering of the LORD in his appointed season, that man shall bear his sin.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-refuses',
          html:
            'There is a difference between cannot and will not. The law opens a door for those who cannot keep the feast through no fault of their own. But the one who is clean, who is settled, who is available—and who refuses to remember the liberation—is cut off. Not by God\'s cruelty, but by his own. He chooses forgetting. He refuses to feast. And forgetting the Passover is forgetting the God who gave it. There is grace for the unclean; there is judgment for the ungrateful.',
        },
        {
          kind: 'carry',
          html:
            'God does not burden us beyond what we can carry. If you cannot feast because you are unclean or far away, He opens a door. But if you can feast and will not—if you choose distraction, ingratitude, or indifference over remembrance—that choice separates you. Not because God is harsh, but because thanksgiving and remembrance are the connective tissue between us and His character. To refuse to remember is to refuse to be shaped by what He has done.',
        },
        {
          kind: 'reflection',
          id: 'who-refuses',
          prompt:
            'Is there a remembrance you are refusing—a feast you could keep but don\'t? What would it cost you to feast instead?',
        },
      ],
    },

    /* ─── Numbers 9:14 — The Stranger Too ───────────────────────────────── */
    {
      ref: 'Numbers 9:14',
      title: 'Grace for the Stranger',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 14,
              spans: [
                t('And if a stranger shall sojourn among you, and will keep the passover unto the LORD; according to the ordinance of the passover, and according to the manner thereof, so shall he do: ye shall have one ordinance, both for the stranger, and for one that is born in the land.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stranger',
          html:
            'The Passover is for Israel—but also for the stranger who dwells with them. The foreigner can keep the feast on the same terms, the same night, with the same ordinances. One law for both the native-born and the sojourner. Grace is not tribal. Remembrance is not by bloodline only. Anyone can join the feast if they are willing to remember with Israel what God has done.',
        },
        {
          kind: 'carry',
          html:
            'You do not have to have been born into the family to join the feast. The Passover remembrance is open. If you will keep it, if you will remember, the table is set for you too. This is the God who welcomes the stranger.',
        },
        {
          kind: 'reflection',
          id: 'stranger-feast',
          prompt:
            'Have you ever felt like a stranger at someone else\'s table, someone else\'s remembrance? What does it mean to know the table is set for you?',
        },
      ],
    },

    /* ─── Numbers 9:15–23 — The Cloud and the Fire ────────────────────── */
    {
      ref: 'Numbers 9:15–23',
      title: 'The Cloud by Day, Fire by Night',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 15,
              spans: [
                t('And on the day that the tabernacle was reared up the '),
                hp('cloud covered the tabernacle', 'c-cloud-shekinah'),
                t(', namely, the tent of the testimony: and at even there was upon the tabernacle as it were the '),
                hy('appearance of fire', 'hebrew-anan'),
                t(' until the morning.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('So it was alway: the cloud covered it by day, and the appearance of fire by night.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And when the cloud was taken up from the tabernacle, then after that the children of Israel journeyed: and in the place where the cloud abode, there the children of Israel pitched their tents.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('At the commandment of the LORD the children of Israel journeyed, and at the commandment of the LORD they pitched: as long as the cloud abode upon the tabernacle they rested in their tents.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num9-cloud-fire',
          html:
            'At the cloud&apos;s movement Israel marches; at its rest Israel stays. The army of God does not navigate by terrain or weather; it watches the sky and obeys.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 19,
              spans: [
                t('And when the cloud '),
                hg('tarried long', 'c-tarried'),
                t(' upon the tabernacle many days, then the children of Israel kept the charge of the LORD, and journeyed not.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And so it was, when the cloud was a few days upon the tabernacle; according to the commandment of the LORD they rested in the tents, and according to the commandment of the LORD they journeyed.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And so it was, when the cloud abode from even unto the morning, and that the cloud was taken up in the morning, then they journeyed: whether it was by day or by night that the cloud was taken up, they journeyed.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Or whether it were two days, or a month, or a year, that the cloud tarried upon the tabernacle, remaining thereon, the children of Israel abode in their tents, and journeyed not: but when it was taken up, they journeyed.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('At the commandment of the LORD they rested in the tents, and at the commandment of the LORD they journeyed: they kept the charge of the LORD, at the commandment of the LORD by the hand of Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-anan',
          title: 'Anan — "Cloud"',
          script: 'עָנָן',
          translit: '<strong>anan</strong> · cloud, the visible presence of God',
          description:
            'The Shekinah—the dwelling-glory of God made visible. By day it rests as cloud over the tabernacle; by night it becomes fire. The same presence; two forms. A pillar that speaks. Israel does not choose when to move; the cloud chooses.',
        },
        {
          kind: 'christ',
          id: 'c-cloud-shekinah',
          title: 'Christ Connection — The Tabernacled Word',
          html:
            'John 1:14 says the Word "made his dwelling among us" (ESV)—in some translations, "tabernacled" among us. The Greek is <em>eskēnōsen</em>, from <em>skēnē</em>, tent. Jesus is the Shekinah made flesh [res:bible-odyssey-shekinah-glory]. The cloud that led Israel is the same God who walked in the flesh. The pillar that stopped and started is the same Word who said "Follow me." What Israel followed in the wilderness, we follow in the Gospel.',
        },
        {
          kind: 'commentary',
          id: 'c-tarried',
          html:
            'The cloud tarries—sometimes a day, sometimes a month, sometimes a year. The rhythm of Israel\'s wilderness journey is not their own design. Not a map they made. Not a schedule they kept. They move when the cloud moves; they rest when it settles. A year in one place means a year of deepening roots, of children born, of settled life. A day of travel means urgency, movement, new terrain. Neither is chosen; both are obeyed.',
        },
        {
          kind: 'commentary',
          id: 'c-by-commandment',
          html:
            'The refrain repeats: "At the commandment of the LORD." Not the commandment of the cloud only, but the commandment behind the cloud—the will made visible [res:sefaria-divine-leading]. Israel learns to read movement as language. When the cloud rises, God is speaking: move. When it settles, God is speaking: rest. The wilderness is a school of listening.',
        },
        {
          kind: 'carry',
          html:
            'You may be in a season when you do not control the pace. The cloud moves when you\'d rather rest; it settles when you\'d rather travel. A year in one place when you are restless. A day on the road when you want to build. Yet the voice beneath the cloud is not arbitrary. It is the God who led Israel, who knows what each season grows in you. Romans 8:14 says: "As many as are led by the Spirit of God, they are the sons of God." Your leading—this season\'s pace, this year\'s place—is not a mistake. It is love made visible.',
        },
        {
          kind: 'reflection',
          id: 'cloud-follow',
          prompt:
            'What season are you in right now—moving or settled? If it\'s not the pace you\'d choose, what might the cloud be growing in you?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-pesach-sheni',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 9 — Second Passover (Pesach Sheni)',
      url: 'https://www.sefaria.org/Numbers.9',
      description: 'Talmudic and rabbinic interpretation of the second Passover provision for those unclean or distant, emphasizing God&apos;s grace beyond the appointed season.',
    },
    {
      id: 'bible-odyssey-shekinah-glory',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Shekinah — God&apos;s Dwelling Glory',
      url: 'https://www.bibleodyssey.org/dictionary/shekinah/',
      description: 'Overview of the Shekinah as God&apos;s visible presence in cloud and fire, its role in leading Israel through the wilderness, and its significance in Jewish theology.',
    },
    {
      id: 'sefaria-divine-leading',
      kind: 'study',
      source: 'Sefaria',
      label: 'Divine Leading and the Wilderness Journey',
      url: 'https://www.sefaria.org/Exodus.13.17',
      description: 'Rabbinic commentary on how God leads His people through visible signs and the principle that obedience to divine guidance supersedes human planning.',
    },
  ],

  hasHebrew: true,
};
