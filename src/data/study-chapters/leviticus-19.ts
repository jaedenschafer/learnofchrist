import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 19 — "Ye shall be holy: for I the LORD your God am holy."
 *
 * This chapter is one of the most gorgeous in Leviticus. It names holiness
 * not as ritual purity but as justice, mercy, and love of the vulnerable.
 * The commandment to love your neighbor as yourself (v.18) is the crown jewel,
 * which Jesus will name the second greatest commandment in the law. The chapter
 * runs 37 verses of practical, neighbor-loving command: protect the deaf, the blind,
 * the stranger, the poor, the elderly. Honest scales. No gossip. No revenge.
 * Holiness is the shape of a community that cares.
 */
export const LEVITICUS_19: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 19,

  estimatedMinutes: { beginner: 8, intermediate: 14, deep: 17 },
  topicTags: ['holiness', 'sacrifice', 'priest', 'worship'],
  opener: {
    topical: true,
    caption: 'Leviticus 19',
  },
  intros: [
    'Leviticus 19 opens with the most famous single command in Jewish and Christian ethics: "Thou shalt love thy neighbour as thyself: I am the LORD" (v.18). But before we get there, the chapter builds a foundation. It defines holiness as something you live, not something you perform. When God says "Ye shall be holy: for I the LORD your God am holy" (v.2), He means it not as ritual instruction alone, but as the shape of a just, attentive, generous life.',
    'The chapter is a love letter to the vulnerable. Leave the corners of your field for the poor and the stranger. Don&apos;t curse the deaf. Don&apos;t put a stumblingblock before the blind. Pay workers their wages before sunset. Don&apos;t defraud anyone. Don&apos;t steal. Don&apos;t lie. Honor the elderly. Love the stranger as yourself (v.34) — the same measure twice. This is not the holiness of ritual purity but of attentiveness, mercy, and the refusal to harm those who are already struggling. The chapter&apos;s genius is to place these laws side by side with dietary rules and fabric rules, saying: your ethics matter as much as your offerings. In fact, your ethics are your offering.',
  ],

  sections: [
    /* ─── Leviticus 19:1–4 — The Opening Call ─────────────────────────── */
    {
      ref: 'Leviticus 19:1–4',
      title: 'The Call to Holiness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Speak unto all the congregation of the children of Israel, and say unto them, '),
                hp('Ye shall be holy', 'lev19-holy-intro'),
                t(': for I the LORD your God '),
                hy('am holy', 'hebrew-kadosh'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Ye shall fear every man his mother, and his father, and '),
                hg('keep my sabbaths', 'lev19-rest'),
                t(': I am the LORD your God.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Turn ye not unto '),
                hg('idols', 'lev19-idols'),
                t(', nor make to yourselves molten gods: I am the LORD your God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev19-holy-intro',
          html:
            'The first word out of God&apos;s mouth is "holiness" — not as a distant ideal but as a command addressed directly to all Israel, not just priests[res:sefaria-leviticus-19]. Everyone is called. Holiness is not the preserve of the temple; it is the task of a whole people living justly with each other.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kadosh',
          title: 'Kadosh — &ldquo;holy&rdquo;',
          script: 'קָדוֹשׁ',
          translit: '<strong>kadosh</strong> · set apart, dedicated, consecrated; to be holy is to be morally distinct',
          description:
            'The root means "to cut" or "to separate." To be holy is not to be rare or unreachable; it is to be set apart for a purpose — in this case, to live in justice and mercy, separated from theft, gossip, fraud, and the mistreatment of the defenseless.',
        },
        {
          kind: 'commentary',
          id: 'lev19-rest',
          html:
            'Holiness begins with rest — keeping the Sabbath. Then it branches out into how you treat people.',
        },
        {
          kind: 'commentary',
          id: 'lev19-idols',
          html:
            'The first sin here is idolatry, not out of place. If you worship false gods, you will inevitably exploit people. If you worship the true God, you will be freed to attend to the neighbor in front of you.',
        },
        {
          kind: 'carry',
          html:
            'God calls every person in Israel to holiness — not only priests, not only the elite. That call still stands. Whatever makes you holy is not some exotic spiritual attainment but the ordinary, hard, daily choice to treat people the way God treats people: with exact justice, with mercy, with attentiveness to those who cannot protect themselves.',
        },
        {
          kind: 'reflection',
          id: 'lev19-opening',
          prompt:
            'When you hear "ye shall be holy," what comes to mind first? How might your answer change if holiness means being just and attentive rather than ceremonially pure?',
        },
      ],
    },

    /* ─── Leviticus 19:5–18 · Justice and Mercy ───────────────────────── */
    {
      ref: 'Leviticus 19:5–18',
      title: 'Justice Without Harm',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 9,
              spans: [
                t('And when ye reap the harvest of your land, thou shalt not wholly '),
                hy('reap the corners of thy field', 'lev19-glean'),
                t(', neither shalt thou gather the gleanings of thy harvest.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And thou shalt not glean thy vineyard, neither shalt thou gather every grape of thy vineyard; thou shalt leave them for the '),
                hg('poor and the stranger', 'lev19-poor'),
                t(': I am the LORD your God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev19-glean',
          html:
            'This is radical. In a subsistence economy, leaving the corners of your field unharvested means leaving food in the field. You do not harvest it yourself; you leave it for whoever is hungry. There is no application form, no means test. The hungry harvest their own dignity in the corners you leave.',
        },
        {
          kind: 'commentary',
          id: 'lev19-poor',
          html:
            'Notice: the poor and the stranger together. In Leviticus, "stranger" means non-Israelite, someone with no legal standing, no family network, no protection. The commands here run against ancient tribal loyalty — you owe the foreigner the same care you owe your own kin.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 11,
              spans: [
                t('Ye shall not '),
                hg('steal', 'lev19-steal'),
                t(', neither deal falsely, neither '),
                hg('lie one to another', 'lev19-lie'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And ye shall not '),
                hg('swear by my name falsely', 'lev19-oath'),
                t(', neither shalt thou profane the name of thy God: I am the LORD.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Thou shalt not '),
                hg('defraud thy neighbour', 'lev19-defraud'),
                t(', neither rob him: the wages of him that is hired shall not abide with thee all night until the morning.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev19-steal',
          html:
            'Stealing is the first in a list of ways we destroy each other without violence. The list is stunning in its specificity: theft, fraud, lying, false oaths, defrauding the neighbor, withholding a worker&apos;s wages. Each of these takes something from someone else — money, trust, dignity.',
        },
        {
          kind: 'commentary',
          id: 'lev19-lie',
          html:
            'Lying to another person. The simple, direct prohibition. Trust is the foundation of any just community; lies dissolve it.',
        },
        {
          kind: 'commentary',
          id: 'lev19-oath',
          html:
            'A false oath sworn in God&apos;s name does not just damage the person defrauded — it damages your relationship with God. When you swear falsely, you are using God&apos;s name to lie. His name is dragged into your dishonesty.',
        },
        {
          kind: 'commentary',
          id: 'lev19-defraud',
          html:
            'Not stealing in secret, but defrauding openly — taking advantage through deceit. What follows is a specific case: withholding a worker&apos;s wages overnight. A worker dependent on daily wages cannot wait to be paid; they need the money to eat that night. To withhold it is to cause suffering.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 14,
              spans: [
                t('Thou shalt not '),
                hp('curse the deaf', 'lev19-deaf'),
                t(', nor put a '),
                hp('stumblingblock before the blind', 'lev19-blind'),
                t(': but shalt fear thy God: I am the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'lev19-deaf',
          title: 'Christ Connection — Care for the Disabled',
          html:
            'This command arrives nowhere else in the Torah — only here, in the heart of Leviticus 19. "Curse the deaf" seems like it would be harmless; they cannot hear the curse. But God sees it. Later, Paul will echo this principle: "For he that knoweth how to do good, and doeth it not, to him it is sin" (James 4:17). Even more pointedly, Paul writes, "We then that are strong ought to bear the infirmities of the weak" (Rom. 15:1), and warns believers to "let no man seek his own… but every man another&apos;s wealth" (1 Cor. 10:24). The disabled are not invisible to God, and they must not be invisible to us.',
        },
        {
          kind: 'commentary',
          id: 'lev19-blind',
          html:
            'Putting a stumblingblock before the blind. Again, a crime that would be easy to hide — no one would know. But God knows. The point is sharper than the literal law: do not exploit the vulnerability of those who cannot defend themselves.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 15,
              spans: [
                t('Ye shall do no unrighteousness in '),
                hg('judgment', 'lev19-justice'),
                t(': thou shalt not respect the person of the poor, nor honour the person of the mighty: but in '),
                hg('righteousness', 'lev19-justice'),
                t(' shalt thou judge thy neighbour.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev19-justice',
          html:
            'Justice means the same measure for poor and rich. You cannot favor the poor out of sentimentality, nor the powerful out of fear. Righteousness is fairness — exact, impartial fairness.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 16,
              spans: [
                t('Thou shalt not go up and down as a '),
                hy('talebearer', 'lev19-talebear'),
                t(': neither shalt thou '),
                hg('stand against the blood of thy neighbour', 'lev19-blood'),
                t(': I am the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'lev19-talebear',
          title: 'Rakhil — &ldquo;talebearer&rdquo;',
          script: 'רָכִיל',
          translit: '<strong>rakhil</strong> · a gossip, one who carries tales; to peddle words that damage',
          description:
            'The talebearer walks between people, carrying rumors and destructive words. The image is of someone "going up and down" — restless, spreading poison. Gossip is a form of violence; it harms those spoken of and poisons the community.',
        },
        {
          kind: 'commentary',
          id: 'lev19-blood',
          html:
            'To stand against the blood of your neighbor is to stand by while someone is harmed. Silence in the face of harm is complicity. You are responsible not only for what you do but for what you allow.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 17,
              spans: [
                t('Thou shalt not '),
                hg('hate thy brother in thine heart', 'lev19-hate'),
                t(': thou shalt in any wise rebuke thy neighbour, and not suffer sin upon him.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Thou shalt not '),
                hg('avenge', 'lev19-avenge'),
                t(', nor bear any grudge against the children of thy people, but '),
                hp('thou shalt love thy neighbour as thyself', 'christ-love-neighbor'),
                t(': I am the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev19-hate',
          html:
            'Hatred concealed is still hatred — it will poison your heart and eventually corrupt your actions. The law forbids not only harming but hating in secret. Yet the text does not say "never rebuke." It says rebuke honestly, rather than letting the sin fester in silence. Clear, face-to-face correction is an act of love.',
        },
        {
          kind: 'commentary',
          id: 'lev19-avenge',
          html:
            'Revenge is the attempt to balance a wrong through your own hand. Forgetting a grudge means setting down the imagined payment you are owed. In a just community, God handles justice; you handle mercy.',
        },
        {
          kind: 'christ',
          id: 'christ-love-neighbor',
          title: 'Christ Connection — The Second Great Commandment',
          html:
            'Jesus places this verse at the center of all ethics[res:intertextual-matt-22-leviticus-19]. When asked what is the greatest commandment, He says first: love God with all your heart. Then: "The second is like unto it, Thou shalt love thy neighbour as thyself. On these two commandments hang all the law and the prophets" (Matt. 22:39–40). The entire Jewish scripture hangs on neighbor-love. In Luke 10, Jesus clarifies who the neighbor is with the story of the Good Samaritan — the foreigner, the outsider, the one from the despised group. Neighbor-love is not tribal; it is universal.',
        },
        {
          kind: 'carry',
          html:
            'Neighbor-love is not a feeling that comes and goes. It is a decision you make in your body — how you handle money, whether you gossip, whether you stand up when someone is being harmed, whether you let grudges calcify or set them down. It is the choice to see the worker needing their wage, the deaf person you could ignore, the blind person you could harm, the poor who need the corners of your field. Love is as practical as it is emotional.',
        },
        {
          kind: 'reflection',
          id: 'lev19-love',
          prompt:
            'Take one of the specific prohibitions here — not gossiping, not defrauding, not hating in secret. What would change in your relationships if you actually kept it this week?',
        },
      ],
    },

    /* ─── Leviticus 19:19–32 · Honoring Life and Order ──────────────────── */
    {
      ref: 'Leviticus 19:19–32',
      title: 'Honoring What Is Distinct',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 19,
              spans: [
                t('Ye shall keep my statutes. Thou shalt not let thy cattle gender with a diverse kind: thou shalt not sow thy field with mingled seed: neither shall a garment mingled of linen and woollen come upon thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev19-kinds',
          html:
            'The chapter mixes ethical laws with ceremonial ones — this verse seems to belong in a list of purity rules, not justice rules. Yet it carries a theology: God delights in distinctions. Different kinds kept distinct. This is not mere superstition; it is a vision of an ordered creation where things retain their identity and purpose.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 23,
              spans: [
                t('And when ye shall come into the land, and shall have planted all manner of trees for food, then ye shall count the fruit thereof as uncircumcised: three years shall it be as uncircumcised unto you: it shall not be eaten of.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('But in the fourth year all the fruit thereof shall be holy to praise the LORD withal.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And in the fifth year shall ye eat of the fruit thereof, that it may yield unto you the increase thereof: I am the LORD your God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev19-patience',
          html:
            'A tree takes time to mature. You do not rush its fruit. The text is teaching patience — the refusal to exploit creation before it is ready. In the fourth year, the first fruit is holy, offered to God. Only in the fifth year do you eat from your own tree. This is theology masked as agriculture: you are not the absolute owner of what you produce.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 26,
              spans: [
                t('Ye shall not eat any thing with the blood: neither shall ye use '),
                hg('enchantment', 'lev19-divination'),
                t(', nor observe times.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Ye shall not round the corners of your heads, neither shalt thou mar the corners of thy beard.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Ye shall not make any cuttings in your flesh for the dead, nor print any marks upon you: I am the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev19-divination',
          html:
            'Divination and fortune-telling promise control over an uncertain future. The law forbids them. Instead of trying to predict or manipulate fate, you trust God.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 29,
              spans: [
                t('Do not '),
                hg('prostitute thy daughter', 'lev19-daughter'),
                t(': to cause her to be a whore; lest the land fall to whoredom, and the land become full of wickedness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev19-daughter',
          html:
            'Daughters are not property to be sold. To treat a daughter as merchandise is to tear apart the fabric of the community. The law protects her personhood and her future.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 30,
              spans: [
                t('Ye shall keep my sabbaths, and reverence my sanctuary: I am the LORD.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Regard not them that have familiar spirits, neither seek after wizards, to be defiled by them: I am the LORD your God.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Thou shalt rise up before the '),
                hg('hoary head', 'lev19-elderly'),
                t(', and honour the face of the old man, and fear thy God: I am the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev19-elderly',
          html:
            'A gray head signals a long life, experience, wisdom. To honor the elderly is to honor time, memory, the accumulated knowledge of a community. You rise when they enter — a physical posture of respect.',
        },
        {
          kind: 'carry',
          html:
            'Honoring the elderly, protecting the young, refusing to exploit the vulnerable — these are not optional graces. They are foundational. Who do you know who is aging, who needs your respect? Whose youth needs protecting? Where are you tempted to rush or exploit what should be left to its own time?',
        },
        {
          kind: 'reflection',
          id: 'lev19-honor',
          prompt:
            'When you think of someone old and wise in your own life, what would it mean to literally rise up before them in respect? What shifts when you do?',
        },
      ],
    },

    /* ─── Leviticus 19:33–36 · The Stranger and the Scales ───────────── */
    {
      ref: 'Leviticus 19:33–36',
      title: 'Welcome the Stranger',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 33,
              spans: [
                t('And if a stranger sojourn with thee in your land, ye shall not vex him.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('But the '),
                hp('stranger that dwelleth with you', 'lev19-stranger-care'),
                t(' shall be unto you as one born among you, and '),
                hp('thou shalt love him as thyself', 'lev19-stranger-love'),
                t('; for ye were strangers in the land of Egypt: I am the LORD your God.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'lev19-stranger-care',
          title: 'Christ Connection — Love Without Borders',
          html:
            'Jesus encounters a Samaritan woman at the well and speaks to her tenderly. Jews and Samaritans were ancient enemies; she was also a woman, also someone who had been divorced and remarried. By every tribal measure, she was an outsider. Yet Jesus engages her with the same attentiveness He gave His own disciples. Later, in the story of the Good Samaritan, the outsider — the despised neighbor from the hated group — is the one who shows mercy. Leviticus 19:34 is not a rule Jesus refines; it is a rule He fully keeps.',
        },
        {
          kind: 'commentary',
          id: 'lev19-stranger-love',
          html:
            'Notice: the same command twice. Love the stranger as yourself (v.34). Love your neighbor as yourself (v.18). They are the same command. The stranger is your neighbor. The text adds the reason: "Ye were strangers in the land of Egypt." You have been outside. You know what it feels like. Now do not forget.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 35,
              spans: [
                t('Ye shall do no unrighteousness in judgment, in meteyard, in weight, or in measure.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('Just '),
                hg('balances', 'lev19-balances'),
                t(', just weights, a just ephah, and a just hin, shall ye have: I am the LORD your God, which have brought you out of the land of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev19-balances',
          html:
            'Fair weights and measures. A merchant can easily tip the scales without the customer noticing — steal through fraud instead of violence. The law forbids it. Justice includes the smallest transactions. How you treat someone who cannot check your scales reflects your true character.',
        },
        {
          kind: 'carry',
          html:
            'The stranger and the foreigner and the person from the group you instinctively distrust — they are not outsiders in God&apos;s eyes. You were strangers once, literally or spiritually. The fairness you owe your neighbor you also owe the stranger. The smallest dishonesty in a transaction that no one would catch is still a lie. God will catch it. Act as if He is always watching the scales.',
        },
        {
          kind: 'reflection',
          id: 'lev19-stranger',
          prompt:
            'Who is a "stranger" in your community — someone outside the tribe you normally move in? What would it look like to love them as you love yourself?',
        },
      ],
    },

    /* ─── Leviticus 19:37 · The Closing ──────────────────────────────── */
    {
      ref: 'Leviticus 19:37',
      title: 'Therefore Keep All My Statutes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 37,
              spans: [
                t('Therefore shall ye observe all my statutes, and all my judgments, and do them: I am the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev19-all',
          html:
            'All. Not just the ones that are easy, or the ones that benefit you, or the ones your community practices[res:bibleodyssey-holiness-justice]. All. The statutes and the judgments together. The ceremonial and the moral woven into one fabric. When you keep them, you are not obeying a rule; you are participating in God&apos;s ordering of justice and mercy in the world.',
        },
        {
          kind: 'carry',
          html:
            'The shape of holiness is neighbor-love. It is as small as honest scales, as attentive as noticing the poor, as demanding as refusing to hate in secret. It is as radical as loving the stranger as yourself. This is not a burden you shoulder. It is the freedom that comes from knowing that God is watching, and that in His eyes, every person — even the deaf, even the blind, even the foreigner — is precious.',
        },
        {
          kind: 'reflection',
          id: 'lev19-closing',
          prompt:
            'If holiness means attending to the vulnerable and refusing to exploit the defenseless, where is God calling you to be holier this week?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Leviticus 19',
    quote:
      'Ye shall be holy: for I the LORD your God am holy. Thou shalt love thy neighbour as thyself: I am the LORD.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 19 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-leviticus-19',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 19 — Sefaria Community Notes',
      url: 'https://www.sefaria.org/Leviticus.19',
      description: 'Annotated text with rabbinic commentary on the holiness code and love of neighbor.',
    },
    {
      id: 'intertextual-matt-22-leviticus-19',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Jesus on the Greatest Commandments — Matthew 22:37–40',
      url: 'https://intertextual.bible/',
      description: 'Jesus&apos; identification of love of God and neighbor as the core of all law and prophets.',
    },
    {
      id: 'bibleodyssey-holiness-justice',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Holiness and Social Justice in Leviticus',
      url: 'https://www.bibleodyssey.org',
      description: 'Exploration of how ritual law and social ethics are woven together in ancient Israel.',
    },
  ],

  hasHebrew: true,
};
