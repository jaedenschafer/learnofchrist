import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 6 — the Shema, Israel&apos;s most cherished confession.
 * The chapter frames the law not as burden but as love, binding the words
 * of God into daily life—heart, soul, hand, home, gate—and warning against
 * the test that prosperity brings: forgetting the One who brought you there.
 */
export const DEUTERONOMY_6: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 6,

  estimatedMinutes: { 5: 7, 10: 13, 15: 17 },
  intros: [
    'Deuteronomy 6 contains the Shema (שְׁמַע, "hear"), Israel&apos;s twice-daily declaration of faith. It is the prayer Jesus called the first and greatest commandment—not a rule to obey from fear, but a covenant to love the Lord with everything you are. The chapter binds God&apos;s words into the fibers of daily life: spoken at the table, carried in memory, inscribed on the doorway. Faith is not contained in temple or Sabbath; it is woven into ordinary moments.',
    'The chapter also sounds a warning: prosperity is the greatest spiritual test. When you eat and are full, living in houses you didn&apos;t build and enjoying harvests you didn&apos;t plant, the temptation will not be to serve false gods openly—it will be to forget. To live as though the ordinary goods around you came from ordinary causes. To drift. This tension—between love, formation, and the forgetting that plenty brings—runs through the entire chapter.',
    'And beneath it all, one more layer: the wilderness temptations of Jesus echo Deuteronomy 6. He is the Israel who hears the Shema and keeps it perfectly. He is the true beloved son who passes every test the Father sets. Where Israel stumbled in the desert, Christ stood firm.',
  ],

  sections: [
    /* ─── Deuteronomy 6:1–3 — The Purpose of the Law ───────────────────────── */
    {
      ref: 'Deuteronomy 6:1–3',
      title: 'The Purpose of the Law',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 1,
              spans: [
                t('Now these are the commandments, the statutes, and the judgments, which the Lord your God commanded to teach you, that ye might do them in the land whither ye go to possess it:'),
              ],
            },
            {
              number: 2,
              spans: [
                t('That thou mightest '),
                hg('fear the Lord thy God', 'deut6-fear'),
                t(', to keep all his statutes and his commandments, which I command thee, thou, and thy son, and thy son&apos;s son, all the days of thy life; and that thy days may be prolonged.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Hear therefore, O Israel, and observe to do it; that it may be well with thee, and that ye may increase mightily, as the Lord God of thy fathers hath promised thee, in the land that floweth with milk and honey.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut6-fear',
          html:
            'The law is not given as a yoke to crush Israel under the weight of commandment. It is given so that Israel might <em>fear</em> the Lord—a word that means reverence, awe, the kind of worship that flows from knowing what is true about God. The purpose of every statute is formation: to shape a people who remember the One who brought them out of Egypt. Everything flows from relationship, not rules.',
        },
        {
          kind: 'carry',
          html:
            'The commandments in your life—the things God is calling you to do or not do—are not chains to restrict your freedom. They are the design specs of a life that actually works, given by someone who loves you and has already proven it. When you keep His way, you&apos;re not earning His favor. You&apos;re cooperating with the way He has made things to flourish.',
        },
        {
          kind: 'reflection',
          id: 'deut6-reflect-purpose',
          prompt: 'Is there a commandment of God you&apos;ve been resisting? What if you saw it not as restriction but as the shape of a life that leads to life?',
        },
      ],
    },

    /* ─── Deuteronomy 6:4–6 — The Shema ─────────────────────────────────────── */
    {
      ref: 'Deuteronomy 6:4–6',
      title: 'The Shema — Hear, O Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 4,
              spans: [
                hp('Hear, O Israel: The Lord our God is one Lord:', 'christ-shema'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'shema-one',
          html:
            'The Shema is the prayer Israel recites twice daily—morning and evening—for over three thousand years. In those four Hebrew words lies the bedrock of Israel&apos;s faith: <em>Hear, O Israel: The Lord our God is one Lord.</em> When the psalmist writes "Thou shalt love the Lord thy God," when Proverbs speaks of the fear of the Lord as the beginning of wisdom, when the prophets thunder about remembering the God who brought them out—they are all ringing variations on the Shema. One God. Not many. Not the gods of Egypt or Canaan. One God, and Israel belongs to Him.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shema',
          title: 'Shema — "Hear / Obey"',
          script: 'שְׁמַע',
          translit: '<strong>shema</strong> · hear, listen, obey',
          description:
            'The Hebrew verb means not merely to hear with the ears, but to listen with intent to obey. The Shema is not academic belief. It is a covenant commitment to listen to God and let His word shape your life.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-echad',
          title: 'Echad — "One / Unity"',
          script: 'אֶחָד',
          translit: '<strong>echad</strong> · one, unified, singular',
          description:
            'In Genesis 2:24, a man and woman become "one flesh"—not numerically one, but a unified whole. Echad is the Hebrew word for that kind of oneness. God is not alone; God is not fragmented. God is perfectly one, perfectly unified in purpose and being.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 5,
              spans: [
                t('And thou shalt '),
                hy('love the Lord thy God', 'deut6-love'),
                t(' with all thine '),
                hy('heart', 'deut6-heart'),
                t(', and with all thy '),
                hy('soul', 'deut6-soul'),
                t(', and with all thy '),
                hy('might', 'deut6-might'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut6-love',
          html:
            'The second great shock of the Shema is this: the law is not a system of obedience. It is a command to love. Jesus will later quote this verse (Mark 12:29–30) and say it is the first and greatest commandment, the hinge on which everything else turns. Love the Lord your God. Not fear Him into submission. Not bargain with Him. Love Him with everything you are.',
        },
        {
          kind: 'commentary',
          id: 'deut6-heart',
          html:
            'Heart, soul, might—three ways of saying the same thing: all of you. The Hebrew Bible divides the person into faculties, and the Shema demands all of them. Not a part of yourself held in reserve. Not the religion that fits in the Sunday hour. All of it.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-me-od',
          title: 'Me&apos;od — "Might / Exceedingly"',
          script: 'מְאֹד',
          translit: '<strong>me&apos;od</strong> · might, very much, with intensity',
          description:
            'In the construct "with all thy might," me&apos;od means the total capacity you have—your strength, your resources, your intensity. Love God not with leftovers, but with everything you bring to the table.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 6,
              spans: [
                t('And these words, which I command thee this day, shall be '),
                hg('in thine heart', 'deut6-heart-words'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut6-heart-words',
          html:
            'The words are not to stay external, inscribed in a law code. They are to move into the deepest part of a person: the heart, the place where will and desire live. God&apos;s words are to become part of your interior landscape, so that when you face a choice, His voice is not foreign—it is the voice of the One you have loved and who has loved you.',
        },
        {
          kind: 'christ',
          id: 'christ-shema',
          title: 'Christ Connection — The True Obedient Son',
          html:
            'When Jesus was tempted in the wilderness, Satan quoted Scripture three times—each one a test of whether Jesus would trust in God&apos;s provision and authority. Twice Jesus responded with quotes from Deuteronomy, including "man shall not live by bread alone, but by every word that proceedeth out of the mouth of God" (Matt. 4:4), which echoes Deuteronomy 8:3. The third temptation—"fall down and worship me"—Jesus answered with "Thou shalt worship the Lord thy God, and him only shalt thou serve" (Matt. 4:10), words from Deuteronomy 6:13. Jesus is the true Israel. Where the nation stumbled in the wilderness, Christ stands firm in the Shema—hearing and obeying every word from the Father.',
        },
        {
          kind: 'carry',
          html:
            'The Shema is not a confession to speak once and be done with. It is a prayer to pray again and again, morning and evening, until the words move from your lips into your heart. Pick one day this week. Morning and evening, say it: <em>Hear, O Israel: The Lord our God is one Lord. And thou shalt love the Lord thy God with all thine heart, and with all thy soul, and with all thy might.</em> Let God&apos;s words become part of you.',
        },
        {
          kind: 'reflection',
          id: 'deut6-reflect-shema',
          prompt: 'When you say "I love God with all my heart," what part of your heart are you still holding back? What would it mean to let that go?',
        },
      ],
    },

    /* ─── Deuteronomy 6:6–9 — Household Formation ─────────────────────────── */
    {
      ref: 'Deuteronomy 6:6–9',
      title: 'Binding God&apos;s Words Into Daily Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 6,
              spans: [
                t('And these words, which I command thee this day, shall be in thine heart: And '),
                hg('thou shalt teach them diligently unto thy children', 'deut6-teach'),
                t(', and shalt talk of them when thou sittest in thine house, and when thou walkest by the way, and when thou liest down, and when thou risest up.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut6-teach',
          html:
            'The words move from heart to household. Parents are to teach them to children—not in a school or sanctuary, but "when thou sittest in thine house, and when thou walkest by the way, and when thou liest down, and when thou risest up." Faith is not a class. It is conversation woven into the fabric of daily life. At the breakfast table. On the way to work. Before sleep. The first thing in the morning. The Shema is not Sunday religion. It is every day, all the time, the ordinary hours where belief becomes flesh.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shanan',
          title: 'Shanan — "Teach Diligently / Sharpen"',
          script: 'שָׁנַן',
          translit: '<strong>shanan</strong> · teach diligently, sharpen, whet',
          description:
            'The verb for "teach" here comes from a root meaning to sharpen, like sharpening a blade. Parents are to sharpen their children&apos;s understanding of God&apos;s ways, again and again, until it becomes instinct.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 7,
              spans: [
                t('And thou shalt bind them for a sign upon thine hand, and they shall be as frontlets between thine eyes.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And thou shalt write them upon the posts of thy house, and on thy gates.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut6-embody',
          html:
            'The words move from heart to household to the body itself. Bind them as a sign on your hand—let your actions be shaped by His word. Let them be "frontlets between thine eyes"—let His truth be the lens through which you see the world. Write them on your doorposts and gates. The instruction is not metaphorical. Ancient Israelite homes had mezuzot affixed to their doorframes—small boxes containing the Shema, so that every time you left the house and every time you returned, you touched them and said the Shema. Faith was embodied. It was tangible. It was built into the architecture of ordinary life.',
        },
        {
          kind: 'carry',
          html:
            'In what way are God&apos;s words written on your daily path? Is there a practice—a morning prayer, a Scripture verse on your mirror, a Sabbath meal, a moment of silence in the car—that keeps His word in front of your eyes? If not, consider adding one small thing this week. Not to earn His favor, but to keep the covenant close.',
        },
        {
          kind: 'reflection',
          id: 'deut6-reflect-embody',
          prompt: 'What is one practice that could bind God&apos;s words into the ordinary rhythms of your day?',
        },
      ],
    },

    /* ─── Deuteronomy 6:10–12 — The Danger of Plenty ────────────────────── */
    {
      ref: 'Deuteronomy 6:10–12',
      title: 'The Test That Prosperity Brings',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 10,
              spans: [
                t('And it shall be, when the Lord thy God shall have brought thee into the land which he sware unto thy fathers, Abraham, Isaac, and Jacob, to give thee great and goodly cities, which thou buildedst not,'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And houses full of all good things, which thou filledst not, and wells digged, which thou diggedst not, vineyards and olive trees, which thou plantedst not; '),
                hg('when thou hast eaten and art full', 'deut6-full'),
                t(';'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Then '),
                hg('beware lest thou forget the Lord', 'deut6-forget'),
                t(', which brought thee forth out of the land of Egypt, from the house of bondage.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut6-full',
          html:
            'The picture is vivid and startling. Israel will enter a land they didn&apos;t build—with cities already standing, houses already full of goods, wells already dug, vineyards and olive trees already planted. They will eat and be full. They will enjoy the fruits of labor that was not theirs. This is mercy. This is grace. But it is also the most dangerous moment in Israel&apos;s story.',
        },
        {
          kind: 'commentary',
          id: 'deut6-forget',
          html:
            'The test is not opposition or hardship. Hardship, paradoxically, keeps you close to God. When you cry out from hunger or danger, you cannot pretend you are self-sufficient. But plenty whispers a different temptation: <em>I am self-sufficient.</em> The goods around me came from reasonable causes—good soil, hard work, favorable weather. God feels less urgent when the pantry is full. The danger is not that you will worship Baal openly. It is that you will simply forget. The Lord will fade into the background of an ordinary, prosperous life.',
        },
        {
          kind: 'carry',
          html:
            'If you are living in plenty right now—a job that pays, a home that shelters, a family that loves, daily bread—the temptation you face is not the obvious kind. It is the subtle kind: the slow drift toward thinking you did this. You worked hard. You made good choices. You earned it. None of that is false, but it is incomplete. Your ability to work, the home that was offered to you, the family given to you, the food that comes to your table—these are all gifts from a God you may have stopped noticing. The question Deuteronomy asks today is this: what would change if you paused once a day and said thank you?',
        },
        {
          kind: 'reflection',
          id: 'deut6-reflect-plenty',
          prompt: 'Where has plenty made you forget the Lord? What would remembering look like today?',
        },
      ],
    },

    /* ─── Deuteronomy 6:13–15 — Do Not Tempt the Lord ───────────────────── */
    {
      ref: 'Deuteronomy 6:13–15',
      title: 'Fear the Lord and Keep His Commandments',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 13,
              spans: [
                t('Thou shalt '),
                hg('fear the Lord thy God', 'deut6-fear-repeat'),
                t(', and serve him, and shalt '),
                hg('swear by his name', 'deut6-oath'),
                t('.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Ye shall '),
                hy('not go after other gods', 'deut6-other-gods'),
                t(', of the gods of the people which are round about you;'),
              ],
            },
            {
              number: 15,
              spans: [
                t('(For the Lord thy God is a jealous God among you) lest '),
                hg('the anger of the Lord thy God be kindled against thee', 'deut6-kindled'),
                t(', and he destroy thee from off the face of the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut6-fear-repeat',
          html:
            'The word returns: fear the Lord. Not fear <em>only</em> the Lord, but fear Him with a fear that shapes your life, your oaths, your choice of whom to serve. This is where the warning becomes urgent. The gods of Canaan are not conquered simply by ignorance—they are constantly present, always offering another way, another loyalty, another source of blessing.',
        },
        {
          kind: 'commentary',
          id: 'deut6-oath',
          html:
            'To "swear by his name" is to make oaths only by the Lord, not by the names of other gods. Your word is to be bound to Him. Your promises are to be made to Him. The covenant is exclusive and total.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-achar',
          title: 'Achar — "After / Other"',
          script: 'אַחַר',
          translit: '<strong>achar</strong> · after, behind, following',
          description:
            'The prohibition is not "do not acknowledge other gods" but "do not go after them." Do not follow. Do not let them lead you away from the God who delivered you.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 16,
              spans: [
                t('Ye shall '),
                hp('not tempt the Lord your God', 'christ-tempt'),
                t(', as ye tempted him in Massah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut6-massah',
          html:
            'Massah was the place where Israel argued with Moses and demanded water, testing God: "Is the Lord among us or not?" (Exodus 17:7). To "tempt" God means to put Him to the test—to demand a sign, to act as though His word is insufficient unless He proves Himself again. It is the sin of doubt dressed up as a request for reassurance.',
        },
        {
          kind: 'christ',
          id: 'christ-tempt',
          title: 'Christ Connection — Christ Refuses to Tempt God',
          html:
            'In Matthew 4, Satan takes Jesus to the pinnacle of the temple and says, "If thou be the Son of God, cast thyself down: for it is written, He shall give his angels charge concerning thee" (Matt. 4:6). Satan is offering Jesus the chance to "tempt" God—to force God to prove His care by catching Him as He falls. Jesus answers, "It is written again, Thou shalt not tempt the Lord thy God" (Matt. 4:7), quoting Deuteronomy 6:16. Jesus is the true Israel, the obedient Son who does not put God to the test. He trusts His Father completely, with no demand for proof.',
        },
        {
          kind: 'carry',
          html:
            'There is a difference between prayer and temptation. Prayer is "God, I believe you. Show me how to walk." Temptation is "God, I&apos;m not sure you&apos;re really there. Prove it by doing exactly what I ask." In your own life this week, notice if you&apos;re asking God for wisdom and strength, or if you&apos;re asking Him to prove Himself to you. One is faith. The other is doubt masquerading as a test.',
        },
        {
          kind: 'reflection',
          id: 'deut6-reflect-tempt',
          prompt: 'When have you been tempted to demand a sign from God rather than trust His word? What would shift if you simply believed?',
        },
      ],
    },

    /* ─── Deuteronomy 6:20–25 — Answering Your Child ──────────────────────── */
    {
      ref: 'Deuteronomy 6:20–25',
      title: 'When Your Son Asks',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 20,
              spans: [
                t('And when thy son asketh thee in time to come, saying, What mean the testimonies, and the statutes, and the judgments, which the Lord our God hath commanded you?'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Then thou shalt say unto thy son, '),
                hg('We were Pharaoh&apos;s bondmen in Egypt', 'deut6-history'),
                t('; and the Lord brought us out of Egypt with a mighty hand:'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the Lord shewed signs and wonders, great and sore, upon Egypt, upon Pharaoh, and upon all his household, before our eyes:'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And he brought us out from thence, that he might bring us in, to give us the land which he sware unto our fathers.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And the Lord commanded us to do all these statutes, to fear the Lord our God, for our good always, that he might preserve us alive, as it is at this day.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And it shall be our righteousness, if we observe to do all these commandments before the Lord our God, as he hath commanded us.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut6-history',
          html:
            'When your child asks "Why do we do this?"—the answer is not philosophical. It is narrative. <em>We do this because of what God did for us.</em> The laws make sense only in the context of the story—a God who heard our cry, broke the chains of Egypt, led us through the wilderness, and brought us to a land of promise. The statutes are not arbitrary. They are the response of a people who have experienced what their God is like and want to live as people who belong to Him.',
        },
        {
          kind: 'carry',
          html:
            'If someone asked you today, "Why do you follow Jesus? Why do you pray? Why does your faith shape the way you live?"—what would you answer? Not a doctrine. Not a slogan. Your story. The way God has been faithful to you. The things He has brought you through. The ones you love. The promises He has kept. When you can tell your story—what you were, how God rescued you, where He is leading—you give the answer that actually converts the next generation. Not rules. Story.',
        },
        {
          kind: 'reflection',
          id: 'deut6-reflect-story',
          prompt: 'What is your personal story of God&apos;s faithfulness? If someone asked today, could you tell it clearly?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Deuteronomy 6',
    quote:
      'Hear, O Israel: The Lord our God is one Lord. And thou shalt love the Lord thy God with all thine heart, and with all thy soul, and with all thy might.',
    snippet: 'The Shema—Israel&apos;s daily confession and Jesus&apos;s greatest commandment. A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 6 · Study Guide',
  },
};
