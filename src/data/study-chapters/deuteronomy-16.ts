import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 16 — The Three Pilgrimage Feasts Re-stated
 *
 * Passover, Weeks, and Tabernacles re-commanded as the backbone of Israel&apos;s
 * worshipful calendar, each binding obedience to memory, justice to covenant,
 * and joy to every gathering before the Lord.
 */
export const DEUTERONOMY_16: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 16,

  estimatedMinutes: { beginner: 9, intermediate: 12, deep: 17 },
  intros: [
    'Deuteronomy is Moses&apos; farewell address to Israel before they enter the land. He rehearses the law — not to add to it, but to imprint it on hearts. Here, in chapter 16, he restates the three pilgrimage feasts: Passover, Weeks, and Tabernacles. Not as optional religious observances, but as the rhythm through which a covenant people remember who saved them, who sustains them, and who will gather them at last.',
    'Each feast is laced with a command to remember, to rejoice, to include the vulnerable, to gather at the chosen place. And threading through all three runs a quiet revolutionary principle: justice. A people who celebrate God&apos;s deliverance must themselves be just. A people who eat unleavened bread must never be crooked. The feasts are not escape from the world; they are the training ground for how to live in it.',
    'This is covenant theology in its purest form: God&apos;s people keep time with Him, live by His calendar, and in doing so, become increasingly His.',
  ],

    resources: [
    {
      id: 'sefaria-deuteronomy-16',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 16',
      url: 'https://www.sefaria.org/Deuteronomy.16',
      description: 'Open-access source text and rabbinic commentary on the three pilgrimage festivals: Passover, Weeks, and Booths [res:sefaria-deuteronomy-16].',
    },
    {
      id: 'passover-pilgrimage-festivals-bible-odyssey',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Passover and Pilgrimage Festivals',
      url: 'https://www.bibleodyssey.org/topical-article/pilgrimage-festival/',
      description: 'Theological overview of how the three festivals commemorate liberation [res:passover-pilgrimage-festivals-bible-odyssey], first fruits, and wilderness dwelling, renewing covenant memory.',
    },
    {
      id: 'sukkot-booths-archaeological-evidence',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Sukkot and Pilgrimage Evidence',
      url: 'https://www.imj.org.il/',
      description: 'Archaeological examination of festival customs and tabernacle [res:sukkot-booths-archaeological-evidence] worship central to Israel&apos;s cultic calendar.',
    },
  ],

  sections: [
    /* ─── Deuteronomy 16:1–8 — Passover and Unleavened Bread ───────────── */
    {
      ref: 'Deuteronomy 16:1–8',
      title: 'Passover: Keep the Memory Alive',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 1,
              spans: [
                t('Observe the month of '),
                hy('Abib', 'hebrew-abib'),
                t(', and keep the '),
                hp('passover', 'c-passover-memory'),
                t(' unto the Lord thy God: for in the month of Abib the Lord thy God brought thee forth out of Egypt by night.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Thou shalt therefore '),
                hg('sacrifice the passover', 'c-sacrifice-chosen-place'),
                t(' unto the Lord thy God, of the flock and the herd, in the place which the Lord shall choose to place his name there.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Thou shalt eat no leavened bread with it; seven days shalt thou eat unleavened bread therewith, even the '),
                hy('bread of affliction', 'hebrew-lechem-oni'),
                t('; for thou camest forth out of the land of Egypt in haste: that thou mayest remember the day when thou camest forth out of the land of Egypt all the days of thy life.'),
              ],
            },
            {
              number: 4,
              spans: [t('And there shall be no leavened bread seen with thee in all thy coast seven days; neither shall there any thing of the flesh, which thou sacrificedst the first day at even, remain all night until the morning.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deuteronomy_16_v1-8',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 5,
              spans: [
                t('Thou mayest not sacrifice the passover within any of thy gates, which the Lord thy God giveth thee: But at the place which the Lord thy God shall choose to place his name in, there thou shalt sacrifice the passover at even, '),
                hg('when the sun goeth down', 'c-sun-goes-down'),
                t(', at the season which thou camest forth out of Egypt.'),
              ],
            },
            {
              number: 6,
              spans: [t('And thou shalt roast and eat it in the place which the Lord thy God shall choose: and thou shalt turn in the morning, and go unto thy tents.')],
            },
            {
              number: 7,
              spans: [
                t('Six days thou shalt eat unleavened bread: and on the seventh day shall be a solemn assembly to the Lord thy God: thou shalt do no work therein.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And thou shalt remember that thou wast a '),
                hp('bondman in Egypt', 'c-bondman-memory'),
                t(': therefore I command thee this thing today.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-abib',
          title: 'Abib — &ldquo;spring, the month of green ears&rdquo;',
          script: 'אָבִיב',
          translit: '<strong>abib</strong> · the first month of the year, spring',
          description:
            'Abib means the month of young green grain. It is the season when things are just beginning to grow. Israel&apos;s deliverance happened in the season of new life, and they commemorate it when the world is green again.',
        },
        {
          kind: 'commentary',
          id: 'c-passover-memory',
          html:
            '&ldquo;Keep the passover.&rdquo; The Hebrew is literally &ldquo;guard the passover&rdquo; — it is something to be protected, preserved, held safe. This is not a once-and-done remembrance but a perpetual duty. Every year, without fail, Israel guards this memory against forgetting.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-lechem-oni',
          title: 'Lechem Oni — &ldquo;bread of affliction&rdquo;',
          script: 'לֶחֶם עֹנִי',
          translit: '<strong>lechem oni</strong> · bread of hardship, the bread of the oppressed',
          description:
            'Unleavened bread has no time to rise — it is the bread of haste, of a people in a hurry to escape. By eating it, Israel eats the memory: this is what your freedom cost, this is the taste of deliverance.',
        },
        {
          kind: 'commentary',
          id: 'c-sacrifice-chosen-place',
          html:
            'The sacrifice must happen &ldquo;in the place which the Lord shall choose to place his name.&rdquo; This unifies worship. One people, one place, one covenant. There is no private Passover, no scattered observance. The feast gathers the nation.',
        },
        {
          kind: 'commentary',
          id: 'c-sun-goes-down',
          html:
            '&ldquo;When the sun goeth down&rdquo; — the Passover sacrifice happens in the evening, the moment of transition from one day to the next. It is the hinge moment, the threshold between slavery and freedom, darkness and light.',
        },
        {
          kind: 'christ',
          id: 'c-bondman-memory',
          title: 'Christ Connection — Bound and Freed',
          html:
            'Israel is commanded to remember her bondage alongside her deliverance. &ldquo;And thou shalt remember that thou wast a bondman.&rdquo; Jesus said, &ldquo;If the Son therefore shall make you free, ye shall be free indeed&rdquo; (John 8:36). He took on the bondage of sin — bore what we deserved — so that all who believe are freed. The Passover blood painted on the doorframe pointed to His shed blood. The memory never stops: &ldquo;Christ our passover is sacrificed for us&rdquo; (1 Cor. 5:7).',
        },
        {
          kind: 'carry',
          html:
            'Deuteronomy does not let Israel forget her past. &ldquo;Thou shalt remember that thou wast a bondman in Egypt.&rdquo; That memory of bondage is meant to shape how you treat others. When you remember your own deliverance — your own moment of being set free, forgiven, rescued — it becomes impossible to be cruel to someone still in their own Egypt. The feast teaches you where you came from so that you never become someone who enslaves.',
        },
        {
          kind: 'reflection',
          id: 'passover',
          prompt: 'What bondage has God freed you from? How does remembering your own deliverance change how you treat others who are still bound?',
        },
      ],
    },

    /* ─── Deuteronomy 16:9–12 — Feast of Weeks ──────────────────────────── */
    {
      ref: 'Deuteronomy 16:9–12',
      title: 'Weeks: Counting Toward Joy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 9,
              spans: [
                t('Seven weeks shalt thou number unto thee: begin to '),
                hy('number the seven weeks', 'hebrew-shavuot'),
                t(' from such time as thou beginnest to put the sickle to the corn.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And thou shalt keep the feast of weeks unto the Lord thy God with a '),
                hp('tribute of a freewill offering', 'c-freewill-offering'),
                t(' of thine hand, which thou shalt give unto the Lord thy God, according as the Lord hath blessed thee:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And thou shalt rejoice before the Lord thy God, thou, and thy son, and thy daughter, and thy manservant, and thy maidservant, and the Levite that is within thy gates, and the stranger, and the fatherless, and the widow, that are among you, '),
                hg('in the place which the Lord thy God hath chosen', 'c-chosen-place-weeks'),
                t(' to place his name there.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And thou shalt remember that thou wast a '),
                hp('bondman in Egypt', 'c-bondman-weeks'),
                t(': and thou shalt observe and do these statutes.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shavuot',
          title: 'Shavuot — &ldquo;weeks&rdquo;',
          script: 'שָׁבוּעוֹת',
          translit: '<strong>shavuot</strong> · weeks; the feast of weeks counted to fifty days',
          description:
            'The feast gets its name from the counting: seven complete weeks, fifty days. It marks both the giving of the law at Sinai and the ingathering of the grain. A feast that is both about covenant (the law) and blessing (the harvest).',
        },
        {
          kind: 'commentary',
          id: 'c-freewill-offering',
          html:
            '&ldquo;A tribute of a freewill offering of thine hand, according as the Lord hath blessed thee.&rdquo; This is not a fixed amount. It is a response to blessing — you bring what your heart moves you to bring, in gratitude for what He has given. The gift rises out of joy, not obligation.',
        },
        {
          kind: 'commentary',
          id: 'c-chosen-place-weeks',
          html:
            'Again: &ldquo;in the place which the Lord thy God hath chosen.&rdquo; But notice the expansion: thou, son, daughter, manservant, maidservant, Levite, stranger, fatherless, widow. Everyone gathers. There is no private celebration of harvest. The feast includes the vulnerable and the landless.',
        },
        {
          kind: 'christ',
          id: 'c-bondman-weeks',
          title: 'Christ Connection — Spirit Poured Out at Pentecost',
          html:
            'Fifty days after Firstfruits (Christ&apos;s resurrection), the disciples waited in Jerusalem for the promise of the Father. At Pentecost — the fiftieth day, the feast of Weeks — &ldquo;they were all filled with the Holy Ghost&rdquo; (Acts 2:4). The same counting, the same feast, the same promise fulfilled. The Spirit is the Freewill offering — the gift that cannot be earned, only received in joy.',
        },
        {
          kind: 'carry',
          html:
            'The feast of Weeks teaches something about gratitude. You count seven weeks before you gather, which means you are living in anticipation. When the feast finally comes, the joy is not generic; it is rooted in something specific — this particular harvest, this particular year, these precise blessings. And it includes the stranger, the fatherless, the widow. Real joy knows how to turn outward toward those who have nothing to celebrate on their own.',
        },
        {
          kind: 'reflection',
          id: 'weeks',
          prompt: 'What specific blessing are you counting toward right now? How might you invite someone with nothing into that joy?',
        },
      ],
    },

    /* ─── Deuteronomy 16:13–15 — Feast of Tabernacles ────────────────────── */
    {
      ref: 'Deuteronomy 16:13–15',
      title: 'Tabernacles: The Harvest Feast of Joy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 13,
              spans: [
                t('Thou shalt observe the feast of '),
                hp('tabernacles', 'c-sukkot-gathering'),
                t(' seven days, after that thou hast gathered in thy corn and thy wine:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And thou shalt rejoice in thy feast, thou, and thy son, and thy daughter, and thy manservant, and thy maidservant, and the Levite, the stranger, and the fatherless, and the widow, that are within thy gates.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Seven days shalt thou keep a solemn feast unto the Lord thy God in the place which the Lord shall choose: and the Lord thy God shall bless thee in all thine increase, and in all the works of thine hands, therefore thou shalt '),
                hy('surely rejoice', 'c-surely-rejoice'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sukkot-gathering',
          html:
            'Tabernacles comes after the full harvest is gathered — corn and wine secure in storage. This is the feast of completion, of provision made manifest. The work of the year is finished; now the people celebrate.',
        },
        {
          kind: 'commentary',
          id: 'c-surely-rejoice',
          html:
            'The text does not say &ldquo;thou shalt rejoice.&rdquo; It says &ldquo;thou shalt <em>surely</em> rejoice.&rdquo; This is not an invitation; it is a command. Joy is a covenant obligation. Worship that leaves out rejoicing misses what the feast actually demands.',
        },
        {
          kind: 'christ',
          id: 'c-sukkot-indwelling',
          title: 'Christ Connection — God Tabernacles With Us',
          html:
            'John writes, &ldquo;And the Word was made flesh, and dwelt among us&rdquo; (John 1:14). The Greek word for &ldquo;dwelt&rdquo; is literally &ldquo;tabernacled.&rdquo; Jesus is God&apos;s sukkah — the temporary shelter through which He came near. And the promise extends forward: &ldquo;Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God&rdquo; (Rev. 21:3). The feast points to the day when God&apos;s dwelling with His people is no longer temporary but eternal.',
        },
        {
          kind: 'carry',
          html:
            'The command to rejoice is not sentimental. It is grounded in fact: the Lord has blessed. The harvest is in. Life is sustained another year. A people who have been provided for — even in a dangerous, uncertain world — have reason to keep feast. Joy is not irresponsible optimism; it is clear-eyed gratitude. It is the refusal to let anxiety have the last word when God&apos;s faithfulness has proven true once again.',
        },
        {
          kind: 'reflection',
          id: 'tabernacles',
          prompt: 'What has God sustained you through this year? What would it look like to truly rejoice in His faithfulness?',
        },
      ],
    },

    /* ─── Deuteronomy 16:16–17 — Three Times a Year ──────────────────────── */
    {
      ref: 'Deuteronomy 16:16–17',
      title: 'Three Times a Year: The Rhythm of Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 16,
              spans: [
                t('Three times in a year shall all thy males appear before the Lord thy God in the place which he shall choose; at the feast of unleavened bread, and at the feast of weeks, and at the feast of tabernacles: and '),
                hg('they shall not appear', 'c-appear-with-offering'),
                t(' before the Lord empty:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Every man shall give as he is able, '),
                hp('according to the blessing of the Lord thy God', 'c-blessing-proportionate'),
                t(' which he hath given thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-appear-with-offering',
          html:
            '&ldquo;They shall not appear before the Lord empty.&rdquo; To come into God&apos;s presence is to come with a gift. Not because He needs it, but because the gesture of gift-giving is the language of covenant. What you bring — even if small — declares that you recognize His kingship.',
        },
        {
          kind: 'christ',
          id: 'c-blessing-proportionate',
          title: 'Christ Connection — Each According to His Ability',
          html:
            'Paul takes up this principle in 2 Corinthians 9:7, writing about giving to the poor: &ldquo;Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.&rdquo; The gift rises from the blessing you have received. It is not about the amount; it is about the proportion of your heart that believes God has given you enough to share.',
        },
        {
          kind: 'carry',
          html:
            'Three times a year, all males gather. Three times a year, the covenant rhythm repeats: remember deliverance, count toward blessing, rejoice in provision. Over a lifetime, this happens seventy, eighty, ninety times. You cannot live inside this rhythm without being changed by it. Covenant is not a one-time event; it is a pattern you practice until it becomes who you are.',
        },
        {
          kind: 'reflection',
          id: 'rhythm',
          prompt: 'What would it mean to structure your own year around three moments of remembrance and rejoicing before God?',
        },
      ],
    },

    /* ─── Deuteronomy 16:18–20 — Justice in the Gates ───────────────────── */
    {
      ref: 'Deuteronomy 16:18–20',
      title: 'Justice: The Covenant&apos;s Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 18,
              spans: [
                t('Judges and officers shalt thou make thee in all thy gates, which the Lord thy God giveth thee, throughout thy tribes: and '),
                hg('they shall judge the people', 'c-just-judgment'),
                t(' with just judgment.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Thou shalt not wrest judgment; thou shalt not respect the person of the mighty; '),
                hy('thou shalt not take a gift', 'c-no-bribes'),
                t(': for a gift doth blind the eyes of the wise, and pervert the words of the righteous.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('That which is altogether '),
                hp('just', 'c-justice-tsedeq'),
                t(' shalt thou follow, that thou mayest live, and inherit the land which the Lord thy God giveth thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-just-judgment',
          html:
            'Right after rehearsing the feasts, Moses commands: appoint judges. Install a system of justice. The feasts are not escape; they are refueling for a people called to live justly in the land.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tsedeq',
          title: 'Tsedeq — &ldquo;justice, righteousness&rdquo;',
          script: 'צֶדֶק',
          translit: '<strong>tsedeq</strong> · justice, right judgment, righteousness',
          description:
            'Tsedeq is not just absence of corruption; it is active, intentional rightness. It means going out of your way to protect the weak, to set things right, to be fair even when no one is watching. The word appears doubled in verse 20: tsedeq, tsedeq — justice, justice.',
        },
        {
          kind: 'commentary',
          id: 'c-no-bribes',
          html:
            '&ldquo;Thou shalt not take a gift: for a gift doth blind the eyes of the wise.&rdquo; Even the wise will lose their way when something precious is placed in their hands. The only protection against corruption is the refusal to be corrupted before the moment arrives.',
        },
        {
          kind: 'christ',
          id: 'c-justice-tsedeq',
          title: 'Christ Connection — Justice and Mercy Toward You',
          html:
            'Jesus said, &ldquo;Blessed are they which do hunger and thirst after righteousness&rdquo; (Matt. 5:6). And His final words to the disciples: &ldquo;As ye would that men should do to you, do ye also to them likewise&rdquo; (Luke 6:31). When you worship and feast before God, you cannot turn around and exploit the vulnerable. Justice is not separate from worship; it is the test of it. James writes, &ldquo;Pure religion and undefiled before God and the Father is this, To visit the fatherless and widows in their affliction&rdquo; (James 1:27).',
        },
        {
          kind: 'carry',
          html:
            'The feasts teach you to remember that you were once outside looking in — enslaved, blessed only by God&apos;s gift, dependent on His provision. That memory must reshape how you judge. When you sit in a place of power — a courtroom, a boardroom, a household — the echo of your own deliverance should make you just. Not lenient, not soft, but just. Unwilling to profit from another&apos;s pain. Willing to go out of your way to set things right.',
        },
        {
          kind: 'reflection',
          id: 'justice',
          prompt: 'Where do you have power over someone else? How is your memory of God&apos;s justice toward you shaping how you judge?',
        },
      ],
    },

    /* ─── Deuteronomy 16:21–22 — No Groves or Images ───────────────────── */
    {
      ref: 'Deuteronomy 16:21–22',
      title: 'Purity at the Altar: Nothing Carved, Nothing Divided',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 21,
              spans: [
                t('Thou shalt not plant thee a '),
                hy('grove of any trees', 'hebrew-asherah'),
                t(' near unto the altar of the Lord thy God, which thou shalt make thee.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Neither shalt thou set thee up any image; which the Lord thy God hateth.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-asherah',
          title: 'Asherah — &ldquo;grove&rdquo;',
          script: 'אֲשֵׁרָה',
          translit: '<strong>asherah</strong> · a sacred pole or grove dedicated to a goddess',
          description:
            'The asherah was a carved tree or pole dedicated to the goddess Asherah, a fertility deity worshiped by Canaanite peoples. God forbids anything made with hands to stand near His altar — no poles, no carved images, nothing human-made pretending to be divine.',
        },
        {
          kind: 'commentary',
          id: 'c-asherah-near-altar',
          html:
            'The command comes immediately after the feasts and the justice laws. Worship is pure at God&apos;s altar only when nothing carved by human hands stands there alongside it. No idols, no poles, no made things. Only the altars Israel builds under God&apos;s direction.',
        },
        {
          kind: 'christ',
          id: 'c-no-image',
          title: 'Christ Connection — The Image Made Flesh',
          html:
            'Paul calls Jesus &ldquo;the image of the invisible God&rdquo; (Col. 1:15). He is not a carved image; He is the living Word made flesh. When you see Jesus, you see God — not a representation, not a statue, but the presence itself. And that presence is always pointing away from itself, toward the Father. Every carving, every attempt to capture the divine in wood or stone, falls away when you encounter the One who is the Image itself.',
        },
        {
          kind: 'carry',
          html:
            'Deuteronomy forbids anything made by human hands to stand at God&apos;s altar. In your own worship — in your prayer, your focus, your allegiance — what have you carved? What made thing are you lifting up as if it were divine? A career that feels like a god. A body image that dictates your worth. A political ideology. A person. God&apos;s altar is cleared of all carved things so that only He can stand there.',
        },
        {
          kind: 'reflection',
          id: 'altars',
          prompt: 'What have you been carving and placing near your altar to God? What would it mean to clear that away?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Keep the feasts of the Lord, gather in joy, be just in your gates, and remember you were once a bondman — that the same God who freed you calls you to be free and to make others free.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 16 · Study Guide',
  },

  hasHebrew: true,
};
