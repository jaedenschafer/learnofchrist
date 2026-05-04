import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 2 Corinthians 9 — The Cheerful Giver
 *
 * Paul wraps his teaching on the collection for Jerusalem&apos;s poor saints
 * with an argument about the spirit of generosity. Not compulsion or duty,
 * but joy flowing from grace — a cheerful heart that trusts God to multiply
 * what is given. Each verse builds the case: give gladly, trust God&apos;s
 * abundance, watch how gratitude spreads. The chapter culminates in praise
 * for Christ, the unspeakable gift from which all other giving flows.
 */
export const SECOND_CORINTHIANS_9: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 9,

  estimatedMinutes: { beginner: 5, intermediate: 9, deep: 15 },
  topicTags: ['suffering', 'compassion', 'witness', 'hope'],
  opener: {
    topical: true,
    caption: '2 Corinthians 9',
  },
  intros: [
    'In 2 Corinthians 8 and 9, Paul is writing about a collection for the Jerusalem church — saints facing poverty and hardship. The Corinthian church has promised to give. But now Paul circles back: not to demand it, but to remind them why generosity matters and how it works. The goal is not guilt. It is grace.',
    'This chapter holds one of Scripture&apos;s most misunderstood verses: "God loveth a cheerful giver." It is not about personality type or feeling obligated to smile. It is about the deep conviction that God is faithful, and because He is, we can give freely. Generosity is not a law imposed from outside. It is the overflow of a heart that has been transformed by undeserved kindness.',
  ],

  sections: [
    /* ─── 2 Corinthians 9:1–3 — Unnecessary to Write, Yet Necessary to Encourage ───── */
    {
      ref: '2 Corinthians 9:1–3',
      title: 'A Word That Didn&apos;t Need Saying',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              1,
              t('For as touching the '),
              hg('ministering to the saints', 'cor9-ministering'),
              t(', it is superfluous for me to write to you:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor9-ministering',
          html:
            'Paul opens with something almost apologetic: he knows the Corinthians have already committed to this gift. He has already praised their readiness in chapter 8. So why write again? Not because they have forgotten, but because how you give matters as much as that you give. The spirit is everything.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              2,
              t('For I know the '),
              hy('forwardness of your mind', 'cor9-prothumia'),
              t(', of which I boast of you to them of Macedonia, that Achaia was ready a year ago; and your '),
              hp('zeal hath provoked very many', 'cor9-zeal-christ'),
              t('.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'cor9-prothumia',
          title: 'Prothumia — Forward readiness',
          script: 'προθυμία',
          translit: '<strong>prothumia</strong> · willingness; eagerness; readiness of mind',
          description:
            'Not reluctant duty, but eager willingness. The Corinthians have shown they want to give. Paul has already celebrated this. Now he names it in front of everyone to strengthen it.',
        },
        {
          kind: 'commentary',
          id: 'cor9-zeal-christ',
          html:
            'Their zeal has provoked many—stirred them to action. This is the contagion of grace. When people see your commitment lived out, it wakes something in them. Your example of faith ripples outward. Paul is not praising the Corinthians&apos; wealth or status. He is praising their willingness. That is something anyone can do.',
        },
        {
          kind: 'commentary',
          id: 'cor9-example',
          html:
            'The Corinthians set an example for Macedonia. Their eagerness spread. Other churches heard and were moved by their willingness to sacrifice for brothers they had never met. Generosity is contagious. Your joy in giving lifts others.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              3,
              t('Yet have I sent the brethren, lest our boasting of you should be in vain, and that ye may be ready: lest haply they of Macedonia come with me, and find you unprepared, we (that we say not, ye) should be ashamed in this same confident boasting of yours.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor9-ready',
          html:
            'Paul is being humble—almost playful—here. He has told Macedonia the Corinthians would be ready. Now he sends word ahead so they actually will be, so that when the Macedonian churches arrive as witnesses, the Corinthians won&apos;t be caught unprepared. It is a gentle, loving nudge: the commitment you made matters. Follow through with the same joy you started with.',
        },
        {
          kind: 'carry',
          html:
            'Your willingness to help someone in need is a gift that multiplies. When others see you give freely, it stirs them. The generosity starts with one person—you—and spreads like light. Don&apos;t underestimate how your readiness to share affects the community around you. The world watches how Christians love each other.',
        },
        {
          kind: 'reflection',
          id: 'cor9-readiness',
          prompt:
            'What is something you committed to doing for another person or church? Is your initial willingness still there, or has it cooled? What would it take to reignite the joy of that commitment?',
        },
      ],
    },

    /* ─── 2 Corinthians 9:4–5 — The Purpose: Not Extortion, But Honor ───── */
    {
      ref: '2 Corinthians 9:4–5',
      title: 'No Demand, Only Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              4,
              t('Therefore I thought it necessary to exhort the brethren, that they would go before unto you, and make up beforehand your '),
              hy('bounty', 'cor9-eulogia'),
              t(', whereof ye had notice before, that the same might be ready, as a matter of '),
              hg('bounty, and not as of covetousness', 'cor9-not-covet'),
              t('.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'cor9-eulogia',
          title: 'Eulogia — Blessing',
          script: 'εὐλογία',
          translit: '<strong>eulogia</strong> · blessing; grace; generous gift',
          description:
            'The gift is framed not as tax or obligation, but as eulogia—a blessing that flows from generosity. The same word describes spiritual blessings from God. When you give, you are channeling divine generosity.',
        },
        {
          kind: 'commentary',
          id: 'cor9-not-covet',
          html:
            'Paul makes a critical distinction. He will not let the collection become &quot;covetousness.&quot; That is, he will not squeeze money from the Corinthians as if the Jerusalem church is entitled to their wealth. The gift must be freely chosen, or it is not a blessing—it is extraction. This is why Paul keeps returning to the spirit in which you give.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              5,
              t('Therefore I thought it necessary to exhort the brethren, that they would go before unto you, and make up beforehand your bounty whereof ye had notice before, that the same might be ready, as a matter of bounty, and not as of covetousness. Now I say, He which soweth sparingly shall reap also sparingly; and he which soweth bountifully shall reap also bountifully.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor9-sowing',
          html:
            'Paul reaches back to the agricultural metaphor he introduced in verse 6. You reap what you sow. Not as a cold formula—not as prosperity theology promising wealth—but as a harvest law: generosity multiplies. Stinginess begets stinginess. Abundance begets abundance. This is how creation itself works.',
        },
        {
          kind: 'carry',
          html:
            'If you are tempted to give reluctantly, remember: you are not paying a debt to the poor. You are planting. God has promised the harvest. Your generosity will come back to you multiplied, though maybe not in the way you expect. Sometimes the return is joy. Sometimes it is community. Sometimes it is the simple knowledge that you chose trust over fear.',
        },
        {
          kind: 'reflection',
          id: 'cor9-sowing-reaping',
          prompt:
            'Where have you seen the law of sowing and reaping show up in your own giving? What did you sow, and what grew?',
        },
      ],
    },

    /* ─── 2 Corinthians 9:6–8 — The Cheerful Giver, God's Abundance ───── */
    {
      ref: '2 Corinthians 9:6–8',
      title: 'A Cheerful Heart, God&apos;s Overflow',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              6,
              t('But this I say, He which soweth sparingly shall reap also sparingly; and he which soweth bountifully shall reap also bountifully.')
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              7,
              t('Every man according as he hath '),
              hg('purposed in his heart', 'cor9-purpose'),
              t(', so let him give; not grudgingly, or of necessity: for God loveth a '),
              hp('cheerful giver', 'cor9-hilaros-christ'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor9-purpose',
          html:
            'The text returns the decision to the individual heart. &quot;According as he hath purposed in his heart.&quot; No one else decides how much you give. Not the church, not your family, not guilt. You decide. In your heart. This is a gift offered freely or it is not truly a gift.',
        },
        {
          kind: 'greek',
          id: 'cor9-hilaros',
          title: 'Hilaros — Cheerful; lighthearted',
          script: 'ἱλαρός',
          translit: '<strong>hilaros</strong> · cheerful; joyful; with a lightened spirit',
          description:
            'A hilaros giver gives with lightness and joy[res:bibleodyssey-cheerful-giver], without heaviness or resentment. The opposite is the giver constrained by shame, duty, or pressure. Hilaros is the lightness that comes from trust.',
        },
        {
          kind: 'christ',
          id: 'cor9-hilaros-christ',
          title: 'Christ Connection — Freely Give, Freely You Have Received',
          html:
            'Jesus said to His disciples, &quot;Freely ye have received, freely give&quot; (Matthew 10:8). The cheerful giver is echoing the heart of Christ. He held nothing back. He gave His life. Because He did, we are invited to give our lives, our resources, our selves, without fear that God will abandon us. We give because we have been given to.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              8,
              t('And God is able to make all grace abound toward you; that ye, always having all '),
              hy('sufficiency in all things', 'cor9-autarkeia'),
              t(', may abound to every good work:')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'cor9-autarkeia',
          title: 'Autarkeia — Self-sufficiency; contentment',
          script: 'αὐτάρκεια',
          translit: '<strong>autarkeia</strong> · having all you need; sufficiency; the state of needing nothing more',
          description:
            'Paul is making a stunning promise: God is able to make you have enough. Not luxurious excess, but sufficiency—your needs met, and more than enough left to share. This is the foundation of the cheerful giver&apos;s confidence.',
        },
        {
          kind: 'commentary',
          id: 'cor9-abound',
          html:
            'Notice the stacking: God makes grace abound. You have sufficiency. You abound to every good work. It is not one or the other—security or generosity. It is both. God&apos;s provision is so complete that you can trust Him and give at the same time.',
        },
        {
          kind: 'carry',
          html:
            'Do you actually believe God can provide for you? Not someday in heaven, but right now? That belief—or the lack of it—is what makes you a grudging giver or a cheerful one. A grudging giver is terrified of not having enough. A cheerful giver has decided God is trustworthy. Which one are you? And what would it take to shift?',
        },
        {
          kind: 'reflection',
          id: 'cor9-sufficiency',
          prompt:
            'What would it mean for you to have &quot;all sufficiency in all things&quot;? What keeps you from believing God can provide it? What is one small risk you could take to test His faithfulness?',
        },
      ],
    },

    /* ─── 2 Corinthians 9:9–11 — The Multiplying Harvest ───── */
    {
      ref: '2 Corinthians 9:9–11',
      title: 'Scattered Seed, Endless Fruit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              9,
              t('(As it is written, '),
              hy('He hath dispersed abroad', 'cor9-psalm112'),
              t('; he hath given to the poor: his '),
              hp('righteousness remaineth for ever', 'cor9-righteousness-christ'),
              t(')')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor9-psalm112',
          html:
            'Paul quotes Psalm 112:9[res:intertextual-psalm112-cor9]. The righteous person scatters abroad, gives to the poor, and that person&apos;s righteousness endures forever. It is not a private virtue. It is witnessed. It is remembered. It shapes the world.',
        },
        {
          kind: 'commentary',
          id: 'cor9-righteousness-christ',
          html:
            'Your righteousness—your doing of right—persists. It does not evaporate. When you give, you are sowing something that will bear fruit not just now but into an unseen future. God does not forget the generous heart.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              10,
              t('Now he that ministereth '),
              hg('seed to the sower', 'cor9-seed-sower'),
              t(' both minister bread for your food, and multiply your seed sown, and increase the fruits of your righteousness;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor9-seed-sower',
          html:
            'God both feeds you and multiplies what you plant. The image is of two harvests: one for consumption (bread for food), one for multiplication (seed for the next planting). You are not giving away your only grain. You are given seed—the power to plant again.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              11,
              t('Being enriched in every thing to all '),
              hy('bountifulness', 'cor9-haplotees'),
              t(', which causeth through us thanksgiving to God.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'cor9-haplotees',
          title: 'Haplotēs — Liberality; simplicity of giving',
          script: 'ἁπλότης',
          translit: '<strong>haplotēs</strong> · simplicity; singleness of purpose; generous liberality',
          description:
            'To give in haplotēs is to give with singular focus: helping the other person. Not seeking recognition or return. Not divided by ulterior motives. Pure generosity.',
        },
        {
          kind: 'commentary',
          id: 'cor9-thanksgiving',
          html:
            'Here is what Paul really cares about[res:sefaria-2-corinthians-9]: your generosity stirs gratitude toward God. When you help someone in need, they don&apos;t just feel relief. They feel cared for. And they thank God for you. Your generosity becomes a bridge between the helped and the Helper. That is the fruit that matters most.',
        },
        {
          kind: 'carry',
          html:
            'When you give, you are not just solving a problem. You are creating an opportunity for someone else to encounter God&apos;s faithfulness through you. That act of care whispers to them: you matter. Someone thought of you. God thought of you enough to send help. Don&apos;t minimize what your generosity can do in another person&apos;s heart.',
        },
        {
          kind: 'reflection',
          id: 'cor9-fruits',
          prompt:
            'When you have given to someone in need, have you ever heard them thank God? How did that change the meaning of your gift for you?',
        },
      ],
    },

    /* ─── 2 Corinthians 9:12–14 — The Gift That Overflows Into Thanksgiving ───── */
    {
      ref: '2 Corinthians 9:12–14',
      title: 'The Unseen Gift: Gratitude and Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              12,
              t('For the '),
              hg('administration of this service', 'cor9-leitourgia'),
              t(' not only supplieth the want of the saints, but is abundant also by many '),
              hy('thanksgivings unto God', 'cor9-eucharistia'),
              t(';')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'cor9-leitourgia',
          title: 'Leitourgia — Priestly ministry; sacred service',
          script: 'λειτουργία',
          translit: '<strong>leitourgia</strong> · public service; sacred ministry; priestly work',
          description:
            'The collection is not mere charity. It is priestly ministry—sacred work that God receives. When you give to the poor, you are performing a holy service, as real as any temple offering.',
        },
        {
          kind: 'greek',
          id: 'cor9-eucharistia',
          title: 'Eucharistia — Thanksgiving',
          script: 'εὐχαριστία',
          translit: '<strong>eucharistia</strong> · thanksgiving; gratitude; grace-giving',
          description:
            'The root is &quot;good gift.&quot; Eucharistia is the grateful naming of grace you have received. When the poor are helped, they don&apos;t just feel relief—they overflow with thanks to God.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              13,
              t('Whiles by the experiment of this ministration they glorify God for your professed subjection unto the gospel of Christ, and for your liberal distribution unto them and unto all men;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor9-glorify',
          html:
            'The receiving church—the saints in Jerusalem—will glorify God when they see the Corinthian church&apos;s generosity. They will recognize it as a fruit of the gospel. Your giving becomes visible proof that the gospel is real, that Christ&apos;s love works, that faith changes how we treat each other.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              14,
              t('And by their prayer for you, which long after you for the grace of God in you.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor9-prayer',
          html:
            'The Jerusalem saints will pray for the Corinthians. Not in obligation, but in longing—yearning to know more of the grace that moved the Corinthians to such love. Your generosity creates community. It binds people together across distance. The help flows in two directions: material aid to the poor, and prayer and affection back to you.',
        },
        {
          kind: 'carry',
          html:
            'When you give to someone in need, you are often unaware of what happens next. They thank God. They pray for you. They tell others. The gratitude circles back, even if you never hear it. Give without needing to know the outcome. Trust that God is orchestrating something larger than what you can see in the moment.',
        },
        {
          kind: 'reflection',
          id: 'cor9-prayer-chain',
          prompt:
            'Has someone ever prayed for you because of your generosity, even if you didn&apos;t know it at the time? Or have you ever prayed for someone who helped you? What is that connection like?',
        },
      ],
    },

    /* ─── 2 Corinthians 9:15 — The Ultimate Gift ───── */
    {
      ref: '2 Corinthians 9:15',
      title: 'The Gift Beyond All Gifts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              15,
              t('Thanks be unto God for his '),
              hp('unspeakable gift', 'cor9-anekdiegetos'),
              t('.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'cor9-anekdiegetos',
          title: 'Anekdiēgētos — Unspeakable; beyond words',
          script: 'ἀνεκδιήγητος',
          translit: '<strong>anekdiēgētos</strong> · inexpressible; indescribable; beyond all words',
          description:
            'There are no words adequate to describe this gift. Language fails. All you can do is bow and give thanks. Paul ends not with an argument but with worship.',
        },
        {
          kind: 'christ',
          id: 'cor9-unspeakable-christ',
          title: 'Christ Connection — Christ Himself Is the Unspeakable Gift',
          html:
            'Paul breaks off his entire argument about money and ends with a shout of gratitude for God&apos;s unspeakable gift. He is naming Christ. The incarnation. The death. The resurrection. The offer of eternal sonship or daughtership (John 3:16 — "For God so loved the world, that he gave his only begotten Son"). Every earthly gift—your money, your food, your care—flows from and echoes this gift. You give because you have been given to beyond measure.',
        },
        {
          kind: 'carry',
          html:
            'Do not lose sight of why you are giving at all. It is not duty or shame. It is not even obedience, strictly speaking. It is gratitude. Someone—Jesus—laid down His life for you. Gave you what you could never earn or deserve. In response, how could you not give? How could you not share? Your generosity is simply your way of saying thank you.',
        },
        {
          kind: 'reflection',
          id: 'cor9-ultimate',
          prompt:
            'What would change if you gave—your time, your money, your attention—as a way of saying thank you to God for Christ? Not to earn anything. Simply to say: I received grace, and I want to pass it on.',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Every man according as he hath purposed in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 9:7 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-psalm112-cor9',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 112:9 ↔ 2 Corinthians 9:9',
      url: 'https://intertextual.bible/text/psalm-112.9/2-corinthians-9.9',
      description: 'The righteous scattered abroad and gave to the poor; his righteousness remains forever—the foundation for Paul&apos;s vision of lasting generosity.',
    },
    {
      id: 'sefaria-2-corinthians-9',
      kind: 'study',
      source: 'Sefaria',
      label: '2 Corinthians 9 — Full Text & Connections',
      url: 'https://www.sefaria.org/2-Corinthians.9',
      description: 'Open-access text with links to Old Testament passages on giving, thanksgiving, and God&apos;s abundance.',
    },
    {
      id: 'bibleodyssey-cheerful-giver',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Cheerful Giver',
      url: 'https://www.bibleodyssey.org/dictionary/cheerful-giver/',
      description: 'SBL entry on hilaros—giving with joy rooted not in personal wealth but in trust in God&apos;s faithfulness.',
    },
  ],

  hasHebrew: false,
};
