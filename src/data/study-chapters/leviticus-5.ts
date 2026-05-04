import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 5 — sin and trespass offerings continued.
 *
 * Specific cases of unintentional sin: silent witness, touching unclean,
 * rash oath. Graduated victim by means (lamb, two birds, fine flour for
 * the poorest). Then the trespass offering (*asham*) for sins against
 * holy things — restitution PLUS a fifth added PLUS a ram.
 *
 * Key theme: Even sins we don&apos;t realize we&apos;ve committed need covering.
 * The graduated cost (rich and poor both have access) anticipates the
 * equal availability of grace at the cross.
 */
export const LEVITICUS_5: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 5,

  estimatedMinutes: { beginner: 7, intermediate: 10, deep: 12 },
  topicTags: ['holiness', 'sacrifice', 'priest', 'worship'],
  opener: {
    topical: true,
    caption: 'Leviticus 5',
  },
  intros: [
    'Leviticus 5 is about the sins we don&apos;t see coming — the ones we didn&apos;t know we committed. A person who stays silent when they could have testified. Someone who touches something unclean without realizing it. A careless oath made in a moment. These are not deliberate violations, but they carry a weight all the same, and the Law makes room for them.',
    '[res:sbl-graduated-offerings-poverty] What makes this chapter striking is the graduated system. A wealthy person brings a lamb; someone poorer brings two birds; the poorest brings flour. Same offering, different cost — the Law ensures that everyone, rich and poor, can afford to make things right. And then comes the trespass offering, *asham* in Hebrew, which adds a fifth on top of restitution. That principle — covering what we owe, plus more — will echo all the way to the cross.',
  ],

  sections: [
    /* ─── Leviticus 5:1–3 — Silent Witness & Unclean Touching ──────────── */
    {
      ref: 'Leviticus 5:1–3',
      title: 'Sins Kept Quiet',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('And if a soul '),
                hy('sin', 'lev5-witness'),
                t(', and hear the voice of swearing, and is a witness, whether he hath seen or known of it; if he do not utter it, then he shall bear his iniquity.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev5-witness',
          html:
            'A person knows something—they saw it, they heard it—but they stay silent when they should speak. This is not a moment of doubt or confusion. This is witnessing and choosing not to testify. In Israel&apos;s legal system, silence in the face of evidence was itself a sin.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-hata',
          title: 'Hata&apos; — &ldquo;sin&rdquo;',
          script: 'חָטָא',
          translit: '<strong>hata&apos;</strong> · to miss the mark, go astray',
          description:
            'The verb here carries the sense of missing a target—of falling short of what was needed. The sin is not rage or rebellion here; it is omission. The mark was speaking truth, and silence missed it.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 2,
              spans: [
                t('Or if a soul touch '),
                hy('any unclean thing', 'lev5-unaware'),
                t(', whether it be a carcase of an unclean beast, or a carcase of unclean cattle, or the carcase of unclean creeping things, and if it be hidden from him; he also shall be unclean, and guilty.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Or if he touch the uncleanness of a man, whatsoever uncleanness it be that a man shall be defiled withal, and it be hid from him; when he knoweth of it, then he shall be guilty.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev5-unaware',
          html:
            'These verses shift the ground slightly. Now the sin is not deliberate silence but contact with what&apos;s unclean, done without realizing it. Someone touches a dead animal, and the uncleanness clings to them. They don&apos;t know it yet. But when they find out—<em>when they knoweth of it</em>—they become guilty. The sin exists whether they knew about it or not. Knowledge brings accountability, but the uncleanness was always there.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world full of contact we don&apos;t see. Anger that touches us in traffic, greed that touches us in a store, pride that touches us in a compliment. The Law says: when you know of it, you bear it. Not because you intended it, but because you&apos;ve touched it. The first step toward cleansing is always awareness—the moment you know, you are invited to act.',
        },
        {
          kind: 'reflection',
          id: 'lev5-silence',
          prompt: 'What truth have you been carrying in silence? What contact with uncleanness are you just now becoming aware of?',
        },
      ],
    },

    /* ─── Leviticus 5:4–6 — The Rash Oath ─────────────────────────────── */
    {
      ref: 'Leviticus 5:4–6',
      title: 'Careless Words',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 4,
              spans: [
                t('Or if a soul swear, pronouncing with his lips to do evil, or to do good, whatsoever it be that a man shall pronounce with an oath, and it be hid from him; when he knoweth of it, then he shall be guilty in one of these.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev5-oath',
          html:
            'A person speaks an oath without thinking—something good or something evil—and doesn&apos;t even realize at first what they&apos;ve said. But an oath is not a casual thing. The moment they remember, they understand: they said something binding, and they&apos;re now answerable for it. Words have weight.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 5,
              spans: [
                t('And it shall be, when he shall be guilty in one of these things, that he shall '),
                hg('confess that he hath sinned', 'lev5-confess-comm'),
                t(' in that thing:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And he shall bring his trespass offering unto the LORD for his sin which he hath committed, a female from the flock, a lamb or a kid of the goats, for a sin offering; and the priest shall '),
                hp('make an atonement', 'lev5-atonement-comm'),
                t(' for him concerning his sin.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev5-confess-comm',
          html:
            'The word <em>confess</em> here is <em>yadah</em> in Hebrew—it means to acknowledge, to admit, to throw oneself on the mercy of God. Before the offering is brought, the person brings the truth. They name what they did. And then the priest makes atonement—covers it over, makes it not count against them anymore.',
        },
        {
          kind: 'commentary',
          id: 'lev5-atonement-comm',
          html:
            'The atonement is the covering that makes the sin no longer stand between the person and God. It is the priestly work—the act of restoration that follows acknowledgment.',
        },
        {
          kind: 'carry',
          html:
            'A careless word. An oath you forgot you made. A promise you now can&apos;t keep. The Law doesn&apos;t allow you to pretend it didn&apos;t happen. But it does allow you to name it out loud and have it covered. Every rash thing you&apos;ve said is still heard in God&apos;s ear—but so is your admission of it.',
        },
        {
          kind: 'reflection',
          id: 'lev5-oath-refl',
          prompt: 'What rash oath or careless promise are you living under right now? What would it look like to confess it?',
        },
      ],
    },

    /* ─── Leviticus 5:7–13 — The Graduated Offering ─────────────────── */
    {
      ref: 'Leviticus 5:7–13',
      title: 'Grace for the Poor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 7,
              spans: [
                t('And if he be not able to bring a lamb, then he shall bring for his trespass, which he hath committed, '),
                hg('two turtledoves, or two young pigeons', 'lev5-graduated-comm'),
                t(', unto the LORD; one for a sin offering, and the other for a burnt offering.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And he shall bring them unto the priest, who shall offer that which is for the sin offering first, and wring off his head from his body, but shall not divide it asunder:'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And he shall sprinkle of the blood of the sin offering upon the side of the altar; and the rest of the blood shall be wrung out at the bottom of the altar: it is a sin offering.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev5-graduated-comm',
          html:
            'The Law makes a stunning move here. If you are poor—if you cannot afford a lamb—you bring birds. If even that is too much, look at verse 11. The offering changes shape, but the sin is covered the same way. Poverty does not disqualify you from standing before God. There is always an offering you can bring.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 10,
              spans: [
                t('And he shall offer the second for a burnt offering, according to the manner: and the priest shall make an atonement for him for his sin which he hath committed, and it shall be forgiven him.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('But if he be not able to bring two turtledoves, or two young pigeons, then he that sinned shall bring for his offering the tenth part of an ephah of fine flour for a sin offering; he shall put no oil upon it, neither shall he put any frankincense thereon: for it is a sin offering.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Then shall he bring it to the priest, and the priest shall take his handful of it, even a memorial thereof, and burn it on the altar, according to the offerings made by fire unto the LORD: it is a sin offering.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the priest shall make an atonement for him as touching his sin that he hath committed in one of these, and it shall be '),
                hy('forgiven him', 'lev5-nislach-comm'),
                t(': and the remnant shall be the priest&apos;s, as a meat offering.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nislach',
          title: 'Nislach — &ldquo;forgiven&rdquo;',
          script: 'נִסְלַח',
          translit: '<strong>nislach</strong> · covered, carried away, atoned for',
          description:
            'The root carries the sense of something being wiped out, erased, made as if it never counted against you. This is the repeated word through Leviticus—the offering accomplishes a covering so complete that the sin no longer stands between the person and God.',
        },
        {
          kind: 'commentary',
          id: 'lev5-nislach-comm',
          html:
            'The forgiveness here is <em>nislach</em>—complete covering. Whether the offering was a lamb, birds, or flour, the result is identical. The sin is no longer held against the person.',
        },
        {
          kind: 'christ',
          id: 'christ-offering',
          title: 'Christ Connection — The Offering for All',
          html:
            '[res:intertextual-isaiah-53] Isaiah 53:10 says of the Suffering Servant, &ldquo;when thou shalt make his soul an offering for sin (*asham*)&rdquo;—the exact word for the trespass offering. And what makes the cross revolutionary is this: it costs nothing. The rich don&apos;t bring a lamb. The poor don&apos;t bring flour. Everyone stands equal in their need, and everyone receives the same atonement. Jesus is the graduated offering God made so that access to forgiveness is never locked behind poverty or wealth.',
        },
        {
          kind: 'carry',
          html:
            'You do not have to be rich to be forgiven. You do not have to bring much. The Law of Moses anticipated what the cross makes clear: every person, in every circumstance, can approach. If your offering feels too small, too poor, too meager, remember. God accepted flour from a widow. He will accept your confession, your willingness, your honest heart. The covering doesn&apos;t depend on your ability to pay; it depends on His willingness to receive.',
        },
        {
          kind: 'reflection',
          id: 'lev5-graduated',
          prompt: 'What feels too small or too poor about your confession? What would it mean to bring it anyway?',
        },
      ],
    },

    /* ─── Leviticus 5:14–19 — The Trespass Offering & Restitution ────── */
    {
      ref: 'Leviticus 5:14–19',
      title: 'Restitution & the Fifth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 14,
              spans: [
                t('And the LORD spake unto Moses, saying, If a soul commit a trespass, and sin through ignorance in the holy things of the LORD; then he shall bring for his trespass unto the LORD a '),
                hy('ram without blemish', 'lev5-holy-things'),
                t(' out of the flocks, with thy estimation by shekels of silver, after the shekel of the sanctuary, for a trespass offering:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev5-holy-things',
          html:
            'Now the text moves to a new category: sins against holy things. Someone has taken what belonged to God, or eaten what was consecrated, or violated something sacred—and they didn&apos;t even realize it at the time. The unintentional nature doesn&apos;t matter. Holy things are holy whether you knew it or not.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 15,
              spans: [
                t('And he shall make amends for the harm that he hath done in the holy thing, and '),
                hg('shall add the fifth part thereto', 'lev5-restitution'),
                t(', and give it unto the priest: and the priest shall make an atonement for him with the ram of the trespass offering, and it shall be forgiven him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev5-restitution',
          html:
            '[res:sefaria-asham-trespass] This is the pattern of the trespass offering. First: make amends. Return what you owe. But that&apos;s not enough. Then: add a fifth. Pay back 120 percent of what you took. Why? Because harm to God&apos;s holy things is not merely a transaction to be balanced. It requires a surplus of restitution—an acknowledgment that God deserves more than what was stolen. Only then does the ram complete the atonement.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 16,
              spans: [
                t('And if a soul sin, and commit any of these things which are forbidden to be done by the commandments of the LORD; though he wist it not, yet is he guilty, and shall bear his iniquity.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('If a soul commit a trespass, and sin through ignorance in the holy things of the LORD; then he shall bring for his trespass unto the LORD a ram without blemish out of the flocks, with thy estimation, for a trespass offering:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the priest shall make an atonement for him before the LORD: and it shall be '),
                hp('forgiven him', 'lev5-secret-faults'),
                t(' for any of these things that he hath done in trespassing therein.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev5-secret-faults',
          html:
            'The closing line is the key: <em>forgiven him for any of these things that he hath done in trespassing therein.</em> Notice what this doesn&apos;t say. It doesn&apos;t say, &ldquo;if he realizes his mistake&rdquo; or &ldquo;if his conscience bothers him.&rdquo; A trespass against holy things is a trespass whether or not you ever notice it. The ram still atones. The fifth is still owed. Forgiveness still comes. That&apos;s mercy for the invisible sin—the one nobody would ever know about except God.',
        },
        {
          kind: 'christ',
          id: 'christ-asham',
          title: 'Christ Connection — The Asham Made Offering',
          html:
            '1 John 1:9 gives the New Testament turn on this: &ldquo;If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.&rdquo; The confession here is Leviticus&apos; *yadah*—the throwing of oneself on God&apos;s mercy. And the cleansing that comes is not just forgiveness of what we knew about; it&apos;s cleansing from the unrighteousness we never even saw. Christ covers the sins we don&apos;t know we committed. That&apos;s grace that runs deeper than our awareness.',
        },
        {
          kind: 'carry',
          html:
            'In Psalm 19:12, David prays, &ldquo;Cleanse thou me from secret faults.&rdquo; He&apos;s not talking about sin he committed and then forgot about. He&apos;s talking about the sins so invisible to him that he has never even seen them. Yet they touch his standing before God. The way the cross works is that all those hidden things—the pride you don&apos;t recognize, the selfishness you&apos;ve rationalized, the harm you caused without knowing—are already covered. You don&apos;t have to see them first to be forgiven for them.',
        },
        {
          kind: 'reflection',
          id: 'lev5-secret',
          prompt: 'What secret fault or invisible sin comes to mind when you read this chapter? What would it mean to be cleansed from something you can&apos;t even fully see?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Leviticus 5',
    quote:
      'Even sins we do not realize we have committed need covering. Whether a lamb, birds, or fine flour, God provides a way for every person to make things right and be forgiven—a principle that finds its fullness in the cross.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 5 · Study Guide',
  },

  resources: [
    {
      id: 'sbl-graduated-offerings-poverty',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Graduated Offerings and God\'s Grace to the Poor',
      url: 'https://www.bibleodyssey.org/en/passages/article/offerings-for-the-poor',
      description: 'Study of scaled offerings based on economic status, showing how God\'s law accommodates the poor and provides equal access to atonement.',
    },
    {
      id: 'sefaria-asham-trespass',
      kind: 'archive',
      source: 'Sefaria',
      label: 'Asham and Restitution in Rabbinical Law',
      url: 'https://www.sefaria.org/Leviticus.5',
      description: 'Rabbinic commentary on trespass offerings, restitution with the additional fifth, and the theology of restoration and accountability.',
    },
    {
      id: 'intertextual-isaiah-53',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Isaiah 53:10 — The Messiah as Asham',
      url: 'https://intertextual.logos.com/',
      description: 'Cross-references linking the trespass offering to prophetic identification of the Messiah as the asham for our transgressions.',
    },
  ],

  hasHebrew: true,
};
