import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 11 — eyewitness obedience and the land that drinks rain.
 * This chapter calls Israel to love God on the basis of what they have seen Him do,
 * and warns that the land itself is designed to teach spiritual dependence:
 * unlike Egypt&apos;s irrigation, Canaan drinks of heaven&apos;s rain, making
 * obedience a condition for the land&apos;s fertility. Blessing and curse are set
 * before them at Gerizim and Ebal.
 */
export const DEUTERONOMY_11: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 11,

  estimatedMinutes: { beginner: 9, intermediate: 14, deep: 18 },
  intros: [
    'Deuteronomy 11 opens with power: "You have seen with your own eyes." The present generation of Israel witnessed the plagues on Egypt, the parting of the Red Sea, the earth swallowing Dathan and Abiram. Moses is not asking them to believe a secondhand story. He is calling them to keep covenant with the God whose hand they watched move in history. Eyewitness faith is the strongest kind.',
    'The chapter then moves to land and rain. The Promised Land will not function like Egypt, where human effort and irrigation could sustain life. Canaan "drinks of the rain of heaven." The geography itself will teach Israel a lesson their parents needed to learn in the wilderness: you are dependent on God. Not on your own strength. Not on your systems. The land becomes a daily reminder of covenant.',
    'And woven through it all is a warning about the test that prosperity brings: "Beware lest your heart be deceived, and ye turn aside to serve other gods." The greatest spiritual danger is not poverty or persecution. It is the slow forgetting that comes when you eat and are full, living in houses you did not build and harvests you did not plant. Obedience is the condition of blessing. Disobedience turns blessing into curse. The chapter ends with Gerizim and Ebal—two mountains that will become the theater where blessing and curse are acted out in stone.',
  ],

  sections: [
    /* ─── Deuteronomy 11:1–7 — Eyewitness Obedience ───────────────────────────── */
    {
      ref: 'Deuteronomy 11:1–7',
      title: 'Eyewitness Obedience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 1,
              spans: [
                t('Therefore love the Lord thy God, and keep his charge, and his statutes, and his judgments, and his commandments, alway.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And know ye this day: for I speak not with your children which have not known, and which have not seen the chastisement of the Lord your God, his greatness, his mighty hand, and his stretched out arm;'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And his miracles, and his acts, which he did in the midst of Egypt unto Pharaoh the king of Egypt, and unto all his land; What he did unto the army of Egypt, '),
                hy('his horses, and his chariots', 'deut11-horses'),
                t('; how he made the water of the Red sea to overflow them as they pursued after you, and how the Lord hath destroyed them unto this day;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And what he did unto you in the wilderness until ye came into this place;'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And what he did unto Dathan and Abiram, the sons of Eliab, the son of Reuben; how the earth opened her mouth, and swallowed them up, and their households, and their tents, and all the substance that was in their possession, in the midst of all Israel:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('But '),
                hp('your eyes have seen', 'christ-witness'),
                t(' all the great acts of the Lord which he did.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Therefore shall ye keep all the commandments which I command you this day, that ye may be strong, and go in and possess the land whither ye go to possess it;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut11-horses',
          html:
            'The detail matters. Moses is not summarizing history in abstraction; he is calling forth memories. The horses and chariots of Pharaoh&apos;s army—the instruments of the greatest power Israel had ever known—were swallowed in the sea. <em>Your eyes</em> saw this. Not heard it. Not believed it secondhand. Saw it. Eyewitness to the God who breaks the chains of empires.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-aineycha',
          title: 'Ayneycha — "Your Eyes"',
          script: 'עֵינֵיכָה',
          translit: '<strong>ayneycha</strong> · your eyes (plural, collective)',
          description:
            'The Hebrew emphasizes sight, witness, the faculty that cannot be deceived by hearsay. What you have seen with your own eyes is the foundation of obedience. Not blind faith, but faith rooted in experience of God&apos;s power.',
        },
        {
          kind: 'commentary',
          id: 'deut11-ground',
          html:
            'The ground beneath their feet had become a testimony. The land where Dathan and Abiram and their households stood had opened and swallowed them alive—a judgment so radical and permanent that the earth itself became a monument to God&apos;s justice. Every time Israel passed that place, they would remember: this is what happens when you rebel against the God who brought us out.',
        },
        {
          kind: 'christ',
          id: 'christ-witness',
          title: 'Christ Connection — Eyewitness to Resurrection',
          html:
            'Peter would write centuries later: "We have not followed cunningly devised fables... but were eyewitnesses of his majesty" (2 Peter 1:16). The disciples had seen Jesus crucified and risen. That eyewitness encounter—not rumor, not theology, but the risen Jesus in the flesh—became the foundation of their obedience and their willingness to die as witnesses. Like Moses calling Israel back to what they saw at the Red Sea, the apostles called the early church to faith rooted in what they had witnessed of Christ&apos;s power over death.',
        },
        {
          kind: 'carry',
          html:
            'What has God done in your own life that only you have witnessed? Not someone else&apos;s story, but your story—a time when you saw His hand move, His faithfulness show up, His love make itself real to you. Don&apos;t let that fade into memory. Hold it as ground for obedience. When the command feels hard, return to what your own eyes have seen. That is stronger than any argument.',
        },
        {
          kind: 'reflection',
          id: 'deut11-reflect-witness',
          prompt: 'What is one thing you have personally witnessed of God&apos;s faithfulness? How might that memory call you back to obedience when you are tempted to doubt?',
        },
      ],
    },

    /* ─── Deuteronomy 11:8–12 — The Land That Drinks Rain ──────────────────────── */
    {
      ref: 'Deuteronomy 11:8–12',
      title: 'The Land That Drinks Rain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 8,
              spans: [
                t('Therefore shall ye keep all the commandments which I command you this day, that ye may be strong, and go in and possess the land whither ye go to possess it;'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And that ye may prolong your days in the land, which the Lord sware unto your fathers to give unto them and to their seed, a land that floweth with milk and honey.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('For the land, whither thou goest in to possess it, is not as the land of Egypt, from whence ye came out, where thou '),
                hy('sowedst thy seed, and wateredst it with thy foot', 'deut11-egypt'),
                t(', as a garden of herbs:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('But the land, whither ye go to possess it, is a land of hills and valleys, and '),
                hg('drinketh water of the rain of heaven:', 'deut11-rain'),
              ],
            },
            {
              number: 12,
              spans: [
                t('A land which the Lord thy God careth for: the eyes of the Lord thy God are always upon it, from the beginning of the year even unto the end of the year.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut11-egypt',
          html:
            'Egypt had mastered irrigation. The Nile&apos;s annual flooding could be channeled, stored, and distributed through human engineering. An Israelite farmer in Egypt could water his garden <em>with his foot</em>—using a treadle pump or lifting device to move water from canal to field. It was technology. Mastery. Predictability. And it worked. The prosperity of Egypt was built on the competence of human hands.',
        },
        {
          kind: 'commentary',
          id: 'deut11-rain',
          html:
            'Canaan is different. The land "drinks of the rain of heaven." There is no master hydraulics system. The farmer cannot engineer his way to abundance. Rain comes or rain does not come. The only variable a human can control is obedience. God has designed the geography to teach what the wilderness taught: you are not self-sufficient. You are dependent on the One who holds the sky.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yoreh-malqosh',
          title: 'Yoreh and Malqosh — Early Rain, Latter Rain',
          script: 'יוֹרֶה · מַלְקוֹשׁ',
          translit: '<strong>yoreh</strong> · early rain (autumn); <strong>malqosh</strong> · latter rain (spring)',
          description:
            'The early rains come in October-November after the dry summer, beginning the growing season. The latter rains come in April-May before harvest. Both were essential. A farmer could not predict either one; only prayer and obedience could secure them. The apostle James would later use this image: "Be patient therefore, brethren, unto the coming of the Lord... he shall come as the early and latter rain" (James 5:7–8).',
        },
        {
          kind: 'commentary',
          id: 'deut11-care',
          html:
            'The Lord&apos;s eyes are always upon it—from the beginning of the year to the end. The land is not abandoned to chance. It is under the constant watchful care of the One who makes the rain fall. This is geography as theology. The shape of the land teaches what Israel needs to know: that they live under the gaze and care of God.',
        },
        {
          kind: 'carry',
          html:
            'What in your life is your "Egypt"—the system you&apos;ve learned to control, the thing you know how to engineer? God may be calling you to let go of that system and to move into a land where you must depend on Him for rain. The loss of control is actually the invitation to experience His constant care.',
        },
        {
          kind: 'reflection',
          id: 'deut11-reflect-rain',
          prompt: 'Where in your life do you need the "latter rain"—not your own effort, but God&apos;s provision at exactly the right time? What would it mean to actually trust Him for it?',
        },
      ],
    },

    /* ─── Deuteronomy 11:13–17 — The Rain Conditional on the Heart ────────────── */
    {
      ref: 'Deuteronomy 11:13–17',
      title: 'The Rain Conditional on the Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 13,
              spans: [
                t('And it shall come to pass, if ye shall hearken diligently unto my commandments which I command you this day, to love the Lord your God, and to serve him with all your heart and with all your soul,'),
              ],
            },
            {
              number: 14,
              spans: [
                t('That I will give you the rain of your land in his due season, the first rain and the latter rain, that thou mayest gather in thy corn, and thy wine, and thy oil.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And I will send grass in thy fields for thy cattle, that thou mayest eat and be full.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Take heed to yourselves, that your heart be not deceived, and ye turn aside and serve other gods, and worship them;'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And then the Lord&apos;s wrath be kindled against you, and he shut up the heaven, that there be no rain, and that the land yield not her fruit; and lest ye perish quickly from off the good land which the Lord giveth you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut11-hearken',
          html:
            'The promise is conditional. <em>If</em> you hear my commandments diligently, <em>then</em> I will give the rain. The rains that fall on Canaan are not random meteorology. They are covenantal. The God who loves Israel and wants them to flourish is the same God who withholds rain from those who turn away from Him. The entire ecosystem—weather, agriculture, survival—hangs on the covenant relationship.',
        },
        {
          kind: 'commentary',
          id: 'deut11-deceived-heart',
          html:
            'The danger is not violence or persecution. It is deception of the heart. The heart can be <em>nasal</em>—led astray, turned away, seduced. Not by force. By luxury. By the slow forgetting that comes when you are full.',
        },
        {
          kind: 'carry',
          html:
            'When life is hard and you are forced to depend on God, obedience is easier. You know why you need Him. But when you eat and are full, living in a good house, enjoying the harvest, the temptation is subtle: you start to believe your own effort got you there. The commandments feel less urgent. Other gods—success, comfort, self-sufficiency—start to look good. Guard your heart in the season of plenty. That is when the test is sharpest.',
        },
        {
          kind: 'reflection',
          id: 'deut11-reflect-full',
          prompt: 'What season are you in right now—scarcity or plenty? How does the season you&apos;re in affect your obedience?',
        },
      ],
    },

    /* ─── Deuteronomy 11:18–21 — Household Formation Again ──────────────────────── */
    {
      ref: 'Deuteronomy 11:18–21',
      title: 'Write Them on the Doorposts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 18,
              spans: [
                t('Therefore shall ye lay up these my words in your heart and in your soul, and bind them for a sign upon your hand, that they may be as frontlets between your eyes.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And ye shall teach them your children, speaking of them when thou sittest in thine house, and when thou walkest by the way, when thou liest down, and when thou risest up.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And thou shalt write them upon the posts of thy house, and upon thy gates;'),
              ],
            },
            {
              number: 21,
              spans: [
                t('That your days may be multiplied, and the days of your children, in the land which the Lord sware unto your fathers to give them, '),
                hg('as the days of heaven upon the earth', 'deut11-heaven'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut11-bind-sign',
          html:
            'This is the pedagogy of the Shema repeated. The words move from heart to hand to eye to household. Bind them as a sign upon your hand—let your actions be shaped by His word. Let them be frontlets between your eyes—let His truth be the lens through which you see. The instruction repeats the pattern from Deuteronomy 6, but with intensified urgency: these are not just religious practices. They are the architecture that keeps a people faithful across generations.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shanan-teach',
          title: 'Shanan — "Teach Diligently"',
          script: 'שָׁנַן',
          translit: '<strong>shanan</strong> · teach diligently, sharpen repeatedly',
          description:
            'The same verb appears in Deuteronomy 6:7—to teach diligently, as if sharpening a blade. Parents are to return again and again to the words of God, in every ordinary moment, until they become the reflex of a child&apos;s heart.',
        },
        {
          kind: 'commentary',
          id: 'deut11-heaven',
          html:
            'The promise is almost mystical: your days will be multiplied "as the days of heaven upon the earth." Not mortal, limited days, but days like heaven&apos;s—endless, sure, anchored in eternity. If you bind God&apos;s words into your household, if you teach them to your children, their days—and your days—will not be ordinary time, burning away. They will be the days of heaven, lived on earth.',
        },
        {
          kind: 'carry',
          html:
            'The formation of a child in faith does not happen in church or school alone. It happens at the dinner table. On the walk to the car. At bedtime. In the moments when you are not trying to teach—because that is when children actually learn what you believe. What will your children learn about God from the words and practices they see in your home?',
        },
        {
          kind: 'reflection',
          id: 'deut11-reflect-household',
          prompt: 'If a child lived in your home for a week, what would they learn about how you actually think about God—not what you say, but what your daily patterns show?',
        },
      ],
    },

    /* ─── Deuteronomy 11:22–25 — Every Place Your Foot Treads ───────────────────── */
    {
      ref: 'Deuteronomy 11:22–25',
      title: 'Every Place Your Foot Treads',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 22,
              spans: [
                t('For if ye shall diligently keep all these commandments which I command you, to do them, to love the Lord your God, to walk in all his ways, and to cleave unto him;'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Then will the Lord drive out all these nations from before you, and ye shall possess greater nations and mightier than yourselves.'),
              ],
            },
            {
              number: 24,
              spans: [
                hy('Every place whereon the soles of your feet shall tread', 'deut11-feet'),
                t(' shall be yours: from the wilderness and Lebanon, from the river, the river Euphrates, even unto the uttermost sea shall your coast be.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('There shall no man be able to stand before you: for the Lord your God shall lay the fear of you and the dread of you upon all the land that ye shall tread upon, as he hath said unto you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut11-feet',
          html:
            'The promise is staggering: every place your foot treads will become yours. Not just the covenant land, but every territory your steps touch. From the wilderness to Lebanon, from the Euphrates to the Mediterranean—the full extent of what God originally promised to Abraham. The fulfillment hangs on one condition: faithfulness. Keep the commandments. Love the Lord. Cleave to Him. Do that, and the land is yours.',
        },
        {
          kind: 'christ',
          id: 'christ-feet',
          title: 'Christ Connection — Authority Over Your Enemies',
          html:
            'Jesus echoes this promise to His disciples: "Behold, I give unto you power to tread on serpents and scorpions, and over all the power of the enemy: and nothing shall by any means hurt you" (Luke 10:19). Where Moses promised Israel that every place they tread will be theirs, Jesus promises His followers authority over the spiritual enemies that would keep them captive. The feet that belong to Jesus have authority. Joshua 1:3, which directly inherits the promise of Deuteronomy 11:24, became the pattern for how the disciples understood their mission: "Every place that the sole of your foot shall tread upon, that have I given unto you."',
        },
        {
          kind: 'carry',
          html:
            'There is ground in your life that belongs to you by right—places where you have the authority to stand, to claim, to possess. But that authority is conditional on faithfulness. If you cleave to God&apos;s ways, there is no enemy that can permanently hold what is yours. What territory in your life do you need to take back? What enemy are you still allowing to hold ground that God has already given you?',
        },
        {
          kind: 'reflection',
          id: 'deut11-reflect-feet',
          prompt: 'What is one area of your life where you need to claim the authority and freedom that God has already given you?',
        },
      ],
    },

    /* ─── Deuteronomy 11:26–32 — Blessing and Curse at Gerizim and Ebal ────────── */
    {
      ref: 'Deuteronomy 11:26–32',
      title: 'Blessing and Curse — Gerizim and Ebal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 26,
              spans: [
                t('Behold, I set before you this day a blessing and a curse;'),
              ],
            },
            {
              number: 27,
              spans: [
                t('A blessing, if ye obey the commandments of the Lord your God, which I command you this day:'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And a curse, if ye will not obey the commandments of the Lord your God, but turn aside out of the way which I command you this day, to go after other gods, which ye have not known.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And it shall come to pass, when the Lord thy God hath brought thee in unto the land whither thou goest to possess it, that thou shalt put the blessing upon mount Gerizim, and the curse upon mount Ebal.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Are they not on the other side Jordan, by the way where the sun goeth down, in the land of the Canaanites which dwell in the plain over against Gilgal, beside the plains of Moreh?'),
              ],
            },
            {
              number: 31,
              spans: [
                t('For ye shall pass over Jordan to go in to possess the land which the Lord your God giveth you, and ye shall possess it, and dwell therein.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And ye shall observe to do all the statutes and judgments which I set before you this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut11-set-before',
          html:
            'The Deuteronomic structure is announced here in its fullest form: <em>Blessing</em> if you obey. <em>Curse</em> if you do not. There is no middle ground. No neutrality. Every choice toward God&apos;s way is a step toward life. Every choice toward other gods is a step toward death. The entire arc of Israel&apos;s history—and every human life—hangs on this binary.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-berakhah-qelalah',
          title: 'Berakhah and Qelalah — Blessing and Curse',
          script: 'בְּרָכָה · קְלָלָה',
          translit: '<strong>berakhah</strong> · blessing; <strong>qelalah</strong> · curse',
          description:
            'Berakhah carries the weight of all God&apos;s covenantal favor—multiplication, fruitfulness, protection. Qelalah is the withdrawal of that favor—barrenness, vulnerability, abandonment. They are absolute opposites, and the reader must choose which one their obedience will invoke.',
        },
        {
          kind: 'commentary',
          id: 'deut11-gerizim-ebal',
          html:
            'Gerizim and Ebal are real mountains, still standing in the West Bank between Shechem and the plains of Moreh where Abraham had first received God&apos;s promise. The drama of blessing and curse will not be abstract theology. It will be enacted in physical space. Israel will gather between the two mountains—the tribe that pronounces blessing on Gerizim, the tribe that pronounces curse on Ebal. The mountains themselves will become witnesses to the covenant. Joshua 8 records the fulfillment: the words were spoken, the covenant was publicly renewed, and the mountain landscape became the stone testament to what Israel had chosen.',
        },
        {
          kind: 'carry',
          html:
            'You stand between two mountains every day. One mountain is the way of obedience, trust, love of God. The other is the way of turning aside, serving other gods, living as though you are your own authority. Both mountains are real. Both are calling. Blessing is not hypothetical. Curse is not something that happens to other people. You are choosing between them with every decision. Which mountain are you building your life on?',
        },
        {
          kind: 'reflection',
          id: 'deut11-reflect-choice',
          prompt: 'If your daily choices reflected your actual priorities, which mountain would they show you are building on—Gerizim or Ebal?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Therefore love the Lord thy God, and keep his charge, and his statutes, and his judgments, and his commandments, alway.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 11:1 · Study Guide',
  },

  hasHebrew: true,
};
