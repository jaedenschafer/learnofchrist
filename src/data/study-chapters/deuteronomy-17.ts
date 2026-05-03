import { hp, hy, hg, t, type RichChapterContent } from './types';

export const DEUTERONOMY_17: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 17,

  estimatedMinutes: { beginner: 8, intermediate: 13, deep: 16 },
  intros: [
    'Deuteronomy 17 collects four laws that reshape Israel&apos;s life: purity in sacrifice, the treatment of those who turn to idolatry, a supreme court at the central place of worship, and the law of the king. Each reveals something about what it means to serve a God who is holy, demands honesty in judgment, and—uniquely among ancient Near Eastern nations—puts even the monarch under the rule of His word.',
    'The chapter opens with a hard command: no defective animal for the Lord. It moves to how to handle apostasy when it appears inside Israel&apos;s gates. Then it sets up the judicial system—a place where hard cases can be brought to priests and judges. Finally, it draws the portrait of Israel&apos;s king as a man who must read the law with his own hand every day of his life. That portrait—of a ruler in daily submission to God&apos;s word—stands alone in all ancient Near Eastern monarchy. And it points straight to One who would come.',
  ],

  sections: [
    /* ─── Deuteronomy 17:1 — No Blemished Sacrifice ─────────────────────────── */
    {
      ref: 'Deuteronomy 17:1',
      title: 'No Blemished Sacrifice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 1,
              spans: [
                t('Thou shalt not sacrifice unto the Lord thy God any '),
                hy('bullock, or sheep, wherein is a blemish', 'hebrew-mum'),
                t(', or any evilfavouredness: for that is an abomination unto the Lord thy God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sacrifice-blemish',
          html:
            'The law opens with exclusion, not invitation. Only the whole, the sound, the perfect may come. This is not cruelty; it is reverence. God accepts a man&apos;s best or He accepts nothing at all. When the priests began to offer the blind, the broken, the lame—what the owner would not give away (1:8)—the prophet Malachi stood up centuries later and asked: &ldquo;Is it not evil?&rdquo; (Mal. 1:8). To serve God with leftovers is to treat Him as a second choice.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mum',
          title: 'Mum — &ldquo;blemish&rdquo;',
          script: 'מוּם',
          translit: '<strong>mum</strong> · a defect, a spot, a flaw in appearance',
          description:
            'The word covers any visible imperfection—a mark, a scar, a break. The Lord deserves not only obedience but the appearance of honor in what we offer Him.',
        },
        {
          kind: 'carry',
          html:
            'You know what it looks like to offer the second-best: the meal you don&apos;t really prepare because you&apos;re rushing, the attention you give someone while your mind is elsewhere, the time you commit to God when your energy is already spent on everything else. The sacrifice that costs you nothing is not a sacrifice at all. This week, find something that asks something real of you—real time, real focus, real care—and offer that.',
        },
        {
          kind: 'reflection',
          id: 'blemish',
          prompt: 'What are you offering God right now that is actually a leftover—and what would it cost you to offer the best instead?',
        },
      ],
    },

    /* ─── Deuteronomy 17:2–7 — The Apostasy Law ─────────────────────────────── */
    {
      ref: 'Deuteronomy 17:2–7',
      title: 'Apostasy and the Two Witnesses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 2,
              spans: [
                t('If there be found among you, within any of thy gates which the Lord thy God giveth thee, '),
                hg('man or woman, that hath wrought wickedness', 'c-apostasy-def'),
                t(' in the sight of the Lord thy God, in transgressing his covenant, And hath gone and served other '),
                hy('gods', 'hebrew-elohim'),
                t(', and '),
                hy('worshipped them', 'c-worship-false'),
                t(', either the '),
                t('sun, or moon, or any of the host of heaven'),
                t(', which I have not commanded;'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And it be told thee, and thou hast heard of it, and inquired diligently, and, behold, it be true, and the thing certain, that such abomination is wrought in Israel:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-apostasy-def',
          html:
            'Apostasy is defined as covenant-breaking—not error of opinion, but active betrayal. The charge is that someone has &ldquo;gone and served.&rdquo; This is not a private belief; it is a public act of worship directed away from the God of Israel.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-elohim',
          title: 'Elohim — &ldquo;gods&rdquo;',
          script: 'אֱלֹהִים',
          translit: '<strong>elohim</strong> · gods, divine beings, or judges',
          description:
            'The term can mean false gods or other divine powers. The law forbids worship directed to anything other than the Lord alone.',
        },
        {
          kind: 'commentary',
          id: 'c-worship-false',
          html:
            'The verb &ldquo;worshipped&rdquo; (שִׁחָה <em>shachah</em>) means to bow, to prostrate, to render homage. It is the word used throughout Scripture for worship. So the law says: if you bow to another power, you have broken covenant.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 4,
              spans: [
                t('Then shalt thou bring forth that man or that woman, which have committed that wicked thing, unto thy gates, even that '),
                hg('man or that woman', 'c-equal-justice'),
                t(', and shalt '),
                hy('stone them with stones', 'c-testimony-death'),
                t(', till they die.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('At the mouth of '),
                hy('two witnesses, or three witnesses', 'hebrew-edim'),
                t(', shall he that is worthy of death be put to death; but at the mouth of one witness he shall not be put to death.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-equal-justice',
          html:
            'Notice the repetition: &ldquo;man or woman&rdquo; appears twice. The law is explicit that justice falls equally. No one stands outside the covenant&apos;s reach.',
        },
        {
          kind: 'commentary',
          id: 'c-testimony-death',
          html:
            'Stoning is a community act—not one person&apos;s judgment, but many hands. And the witnesses go first, laying their hands on the condemned before anyone else. Testimony carries responsibility.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-edim',
          title: 'Ed (plural Edim) — &ldquo;witness&rdquo;',
          script: 'עֵד / עֵדִים',
          translit: '<strong>ed</strong> · one who testifies, who stands as evidence',
          description:
            'A witness is not passive. He stands, he speaks, he takes responsibility for the truth. No execution without at least two voices confirming the crime.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 6,
              spans: [
                t('The '),
                hg('hands of the witnesses shall be first', 'c-witness-hands'),
                t(' upon him to put him to death, and afterward the hands of all the people. So thou shalt put the evil away from among you.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And '),
                hp('all the people shall hear, and fear, and do no more presumptuously', 'c-witness-fear'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-witness-hands',
          html:
            'The witnesses execute the sentence they testified to. They don&apos;t speak from a distance; they act. This prevents false testimony—no one would lightly swear to something he must himself carry out.',
        },
        {
          kind: 'christ',
          id: 'c-witness-fear',
          title: 'Christ Connection — Two or Three Witnesses',
          html:
            'Jesus applies this law to the church: &ldquo;If thy brother shall trespass against thee, go and tell him his fault between thee and him alone… But if he will not hear thee, then take with thee one or two more, that in the mouth of two or three witnesses every word may be established&rdquo; (Matt. 18:15–16). Paul echoes it: &ldquo;Against an elder receive not an accusation, but before two or three witnesses&rdquo; (1 Tim. 5:19). The principle—that truth requires multiple voices, that judgment needs corroboration—shapes how the church handles its own covenant-breakers.',
        },
        {
          kind: 'carry',
          html:
            'Before you judge someone, Jesus and Paul say: get witnesses. Not to protect the guilty, but to protect the truth. Gossip thrives in private channels. Truth stands when multiple people confirm it. This week, if you are tempted to take someone&apos;s failure as fact, ask: would I say this to their face? Would someone beside me affirm it? The two-witness rule is not permissive; it is humble.',
        },
        {
          kind: 'reflection',
          id: 'witnesses',
          prompt: 'Where do you judge someone based on one report, one story, one version? What would it look like to actually want the witnesses—to get the second perspective?',
        },
      ],
    },

    /* ─── Deuteronomy 17:8–13 — The Supreme Court ──────────────────────────── */
    {
      ref: 'Deuteronomy 17:8–13',
      title: 'Hard Cases and the Central Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 8,
              spans: [
                t('If there arise a matter too hard for thee in judgment, between '),
                hg('blood and blood, plea and plea, stroke and stroke', 'c-hard-categories'),
                t(', being matters of controversy within thy gates: then shalt thou arise, and '),
                hy('get thee up into the place which the Lord thy God shall choose', 'c-central-place'),
                t(';'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And thou shalt come unto the priests the Levites, and unto the '),
                hy('judge that shall be in those days', 'c-judge-levite'),
                t(', and inquire; and they shall shew thee the sentence of judgment:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And thou shalt do according to the sentence which they of that place which the Lord shall choose shall shew thee; and thou shalt observe to do according to all that they inform thee:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('According to the sentence of the law which they shall teach thee, and according to the judgment which they shall tell thee, thou shalt do: thou shalt '),
                hg('not decline from the sentence', 'c-no-decline'),
                t(' which they shall shew thee, to the right hand, nor to the left.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hard-categories',
          html:
            'Three categories of hard cases: blood against blood (homicide, murder—was it accident or crime?), plea against plea (dueling claims, both sworn to truthfully), and stroke against stroke (injury claims where fault is unclear). These are the cases that confound. They require wisdom, not just law.',
        },
        {
          kind: 'commentary',
          id: 'c-central-place',
          html:
            'The central place is Jerusalem, where the temple stands. It is not a courthouse in a nearby town; it is the house of God. This means justice doesn&apos;t belong to the local ruler or the powerful landowner. It belongs to the sanctuary of the Lord.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shofet',
          title: 'Shofet — &ldquo;judge&rdquo;',
          script: 'שׁוֹפֵט',
          translit: '<strong>shofet</strong> · one who judges, rules, or decides',
          description:
            'The judge works with the priests. Together they embody both the wisdom of God&apos;s covenant and the authority to interpret it.',
        },
        {
          kind: 'commentary',
          id: 'c-judge-levite',
          html:
            'The Levites are set apart for God&apos;s service. That judges come from their order means justice is not a political appointment—it is a priestly function, rooted in proximity to the Lord.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 12,
              spans: [
                t('And the man that will do presumptuously, and will not hearken unto the priest that standeth to minister there before the Lord thy God, or unto the judge, even that man shall '),
                hg('die', 'c-presume-death'),
                t(': and thou shalt put away the evil from Israel.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And '),
                hp('all the people shall hear, and fear, and do no more presumptuously', 'c-fear-presume'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-decline',
          html:
            'The phrase &ldquo;not decline to the right or left&rdquo; appears also in military contexts—it means marching straight, unwavering. The local judges must hold to the sentence of the central court, even if it costs them power.',
        },
        {
          kind: 'commentary',
          id: 'c-presume-death',
          html:
            'To act presumptuously against the priest or judge is not a political disagreement. It is contempt of the structure God has appointed for His people. The penalty teaches that justice itself is sacred.',
        },
        {
          kind: 'christ',
          id: 'c-fear-presume',
          title: 'Christ Connection — Authority and Humility',
          html:
            'This passage shapes how the early church handles its own authority. In Acts 15, the Jerusalem council gathers—apostles, elders, the whole church—to settle a question about whether Gentiles must keep the law of Moses. They deliberate, write a letter, and send it out: &ldquo;For it seemed good to the Holy Ghost, and to us, to lay upon you no greater burden than these necessary things&rdquo; (Acts 15:28). The pattern is Deuteronomy 17: hard cases go up to the central place where God&apos;s people gather, and then all the churches receive that word and submit. There is a place for authority in Christ&apos;s church, and it flows from humility before His word.',
        },
        {
          kind: 'carry',
          html:
            'You will face cases too hard for you alone: a friendship fracture that cuts both ways, a work decision where both options have truth, a family conflict where the blame is genuine on multiple sides. Deuteronomy says: don&apos;t stay in your corner and assume you see clearly. Bring the matter to God&apos;s house, to wise people, to the priests—today, that might be a pastor, a counselor, a trusted elder. Bring the case somewhere sacred. Listen. And let the answer reshape you.',
        },
        {
          kind: 'reflection',
          id: 'hard-cases',
          prompt: 'What case in your life is too hard for you alone? Who would be your priest and judge—and what would it cost you to actually listen?',
        },
      ],
    },

    /* ─── Deuteronomy 17:14–17 — The Law of the King: No Excess ────────────── */
    {
      ref: 'Deuteronomy 17:14–17',
      title: 'The King Under the Law',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 14,
              spans: [
                t('When thou art come unto the land which the Lord thy God giveth thee, and shalt possess it, and shalt dwell therein, and shalt say, I will set a king over me, like all the '),
                hg('nations that are about me', 'c-nations-king'),
                t(';'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Thou shalt in any wise set him king over thee, whom the Lord thy God shall choose: one from among thy '),
                hy('brethren', 'hebrew-ach'),
                t(' shalt thou set king over thee: thou mayest not set a stranger over thee, which is not thy brother.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-nations-king',
          html:
            'This is not a law requiring a king. It is permission granted—&ldquo;if you will have a king.&rdquo; But it is immediately hedged with conditions. The king Israel chooses must be one God chooses. And he must come from Israel itself, not from elsewhere.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ach',
          title: 'Ach — &ldquo;brother&rdquo;',
          script: 'אָח',
          translit: '<strong>ach</strong> · sibling, or member of the covenant family',
          description:
            'The king is not alien royalty set above the people. He is their brother, one of them, under the same covenant.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 16,
              spans: [
                t('But he shall not '),
                hg('multiply horses', 'c-no-horses'),
                t(' to himself, nor cause the people to return to Egypt, to the end that he should multiply horses: forasmuch as the Lord hath said unto you, Ye shall '),
                hy('henceforth return no more that way', 'c-no-return-egypt'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Neither shall he '),
                hg('multiply wives', 'c-no-wives'),
                t(' to himself, that his heart turn not away: neither shall he greatly multiply to himself '),
                hg('silver and gold', 'c-no-gold'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-horses',
          html:
            'Horses are war-horses, symbols of military power and independence from God. A king who gathers horses is building his own army, his own security, his own glory. The law forbids this.',
        },
        {
          kind: 'commentary',
          id: 'c-no-return-egypt',
          html:
            'The reference to Egypt is critical. Egypt is the house of slavery Israel has just escaped. A king who multiplies horses will need grain to feed them, and grain comes from Egypt. The law forbids Israel from returning to dependence on the pagan power it was freed from.',
        },
        {
          kind: 'commentary',
          id: 'c-no-wives',
          html:
            'Multiple wives were—and are—a tool of political alliance and power. A king who collects wives collects alliances, power, and the competing loyalties of foreign nations. The law asks instead: keep your heart.',
        },
        {
          kind: 'commentary',
          id: 'c-no-gold',
          html:
            'Silver and gold are the instruments of power and influence in the ancient world. A king who hoards them will be busy guarding them, and his god will be his own wealth. The law forbids this clearly.',
        },
        {
          kind: 'carry',
          html:
            'You are not a king, but you are a steward of what you have. The law says: don&apos;t multiply horses (build security apart from God). Don&apos;t gather wives (chase endless connections and approval). Don&apos;t hoard gold (make yourself the keeper of your own abundance). These sound like kingly temptations, but they are the temptations of anyone who has power—which includes you, in your own corner. What is your horse? What are your foreign alliances? What gold are you guarding?',
        },
        {
          kind: 'reflection',
          id: 'king-restraint',
          prompt: 'If you were king of your own life, what would you multiply first—and what does that tell you about where you find security?',
        },
      ],
    },

    /* ─── Deuteronomy 17:18–20 — The King Who Reads the Law ─────────────────── */
    {
      ref: 'Deuteronomy 17:18–20',
      title: 'The King&#39;s Copy of the Law',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 18,
              spans: [
                t('And it shall be, when he sitteth upon the throne of his kingdom, that he shall '),
                hy('write him a copy of this law', 'hebrew-mishneh'),
                t(' in a book out of that which is before the priests the Levites: And it shall be with him, and he shall '),
                hp('read therein all the days of his life', 'c-daily-read'),
                t(':'),
              ],
            },
            {
              number: 19,
              spans: [
                t('That he may learn to fear the Lord his God, to keep all the words of this law and these statutes, to do them:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-daily-read',
          html:
            'Most strikingly: the king must write the copy with his own hand. Not have a scribe do it. Not display it for show. He takes the law from the priestly copy and writes it himself, word by word, the entire book of Deuteronomy. Then he keeps it, and reads it every day of his life. This is not ceremonial. This is discipline.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mishneh',
          title: 'Mishneh — &ldquo;copy&rdquo;',
          script: 'מִשְׁנֵה',
          translit: '<strong>mishneh</strong> · a second copy, a duplicate',
          description:
            'The word carries the sense of &ldquo;double&rdquo;—one copy stays with the priests, one is the king&apos;s. What is sacred belongs to the whole people, but the king must have his own, written by his own hand.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 20,
              spans: [
                t('That his heart be not lifted up above his brethren, and that he turn not aside from the commandment, to the right hand, or to the left: to the end that he may prolong his days in his kingdom, he, and his children, after him, in the midst of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-heart-not-lifted',
          html:
            'The purpose of the daily reading is not to make him more powerful. It is to humble him. The law is meant to keep his heart from lifting above his brethren. A king who reads the law daily is a king who meets his people daily in the presence of God&apos;s word. He is not their superior; he is their fellow servant.',
        },
        {
          kind: 'christ',
          id: 'c-daily-read-2',
          title: 'Christ Connection — The Law Written on the Heart',
          html:
            'Jesus lives as this law demands. &ldquo;The law of the Lord is within my heart,&rdquo; the Psalms say (Ps. 40:8)—and Jesus quotes it of Himself. He does not accumulate power, wives, gold, or horses. He reads Scripture daily, meditates on it, quotes it even under trial. He submits to the very God He is. And His heart never lifts above His brethren—He calls the disciples His friends, and washes their feet. The portrait of the king in Deuteronomy 17 is a portrait of Christ.',
        },
        {
          kind: 'carry',
          html:
            'The king reads the law every day of his life. Not when he has time. Not when he feels like it. Every day. The point is not information—it is formation, slow and daily reshaping. Whatever your role, whatever your power, you are not exempt from Scripture&apos;s claim on you. It is not a tool for others; it is a mirror and a correction for you. This week, pick one passage and read it for five days. Not to master it. To let it master you.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'king-law',
          prompt: 'If you had to write out the law with your own hand and read it every day, would your life change? What verse do you most want to avoid?',
        },
        {
          kind: 'artwork',
          matchTitle: /scroll|book|torah/i,
          matchArtist: /tissot/i,
          caption: 'Deuteronomy 17:18–20 · The King&apos;s Copy',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Deuteronomy 17',
    quote:
      'When the king sits upon his throne, he shall write himself a copy of the law and read therein all the days of his life, that his heart may not be lifted above his brethren.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 17:18–19 · Study Guide',
  },
};
