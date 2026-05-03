import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 14 — Clean and Unclean, Tithing and Joy
 *
 * The chapter opens with the call to covenant identity: "Ye are the children
 * of the Lord your God." From that foundation flows holiness — not mourning
 * like the pagans, but eating as a holy people. The food laws appear again,
 * with Israel already knowing what clean and unclean mean from Leviticus 11.
 * But Deuteronomy adds something Leviticus didn't: tithe, transformed into
 * joy. The tithe is not burden; it is table, community, abundance.
 */

export const DEUTERONOMY_14: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 14,

  estimatedMinutes: { beginner: 7, intermediate: 13, deep: 17 },
  intros: [
    'Deuteronomy 14 presents Israel&apos;s covenant identity in two acts: first, the call to separation (what you do with your body, how you mourn, what you eat); second, the call to joy (the tithe-feast, community provision, the stranger at your table). The chapter does not separate holiness from gladness. To be God&apos;s chosen people is to be holy — set apart — but that holiness finds its truest expression not in asceticism but in shared tables, where the priest, the widow, the orphan, and the sojourner eat together.',
    'The food laws here echo Leviticus, but Deuteronomy reframes them. No longer about purity codes to prevent ritual defilement; they become markers of belonging to a peculiar people, a people consecrated by choice and covenant. And when Deuteronomy pivots to the tithe, something remarkable emerges: the yearly increase is to be brought not to an altar for sacrifice, but to "the place which the LORD your God shall choose to place his name there," where you eat it together in feasting. The tithe becomes the table. The table becomes worship.',
  ],

  opener: {
    matchTitle: /Deuteronomy 14|chosen people/i,
    caption: 'The Whole Chapter at a Glance',
  },

    resources: [
    {
      id: 'sefaria-deuteronomy-14',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 14',
      url: 'https://www.sefaria.org/Deuteronomy.14',
      description: 'Open-access source text and rabbinic commentary on dietary laws, distinction between clean and unclean [res:sefaria-deuteronomy-14], and covenant holiness.',
    },
    {
      id: 'dietary-laws-purity-ancient-israel-bible-odyssey',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Dietary Laws and Covenant Purity',
      url: 'https://www.bibleodyssey.org/topical-article/clean-and-unclean/',
      description: 'Theological entry on the significance of clean and unclean animals in marking Israel&apos;s separation as God [res:dietary-laws-purity-ancient-israel-bible-odyssey]&apos;s covenant people.',
    },
    {
      id: 'levitical-holiness-codes-ancient-near-east',
      kind: 'archaeology',
      source: 'Oriental Institute',
      label: 'Holiness Codes in Ancient Near Eastern Law',
      url: 'https://oi.uchicago.edu/',
      description: 'Examines how Israel&apos;s holiness distinctions [res:levitical-holiness-codes-ancient-near-east] compare to and diverge from purity practices in neighboring cultures.',
    },
  ],

  sections: [
    /* ─── Deuteronomy 14:1–2 — Children of God, Set Apart ─────────────────── */
    {
      ref: 'Deuteronomy 14:1–2',
      title: 'Children of the Lord Your God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 1,
              spans: [
                t('Ye are the '),
                hp('children of the LORD your God', 'deut14-children'),
                t(': ye shall not cut yourselves, nor make any baldness between your eyes for the dead.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('For thou art an '),
                hy('holy people', 'deut14-holy'),
                t(' unto the LORD thy God, and the LORD hath chosen thee to be a '),
                t('peculiar people'),
                t(' unto himself, above all the nations that are upon the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut14-children',
          html:
            'The chapter does not begin with rules; it begins with identity. <em>You are children.</em> You belong to a family. From that belonging, everything else flows. The Canaanites mourned their dead by cutting their bodies, shaving their heads in mutilation — a practice Paul will echo when he forbids the same in his letters (Gal. 5:12, though his context is circumcision). Israel&apos;s covenant identity meant mourning differently. Your body is not your own to mutilate; it belongs to the Lord your God.',
        },
        {
          kind: 'commentary',
          id: 'deut14-holy',
          html:
            'The second foundation: <em>thou art holy.</em> Not "thou shalt become holy," not "thou art called to pursue holiness," but a statement of present fact. Covenant makes you holy. The Lord has chosen you; therefore you <em>are</em> kadosh — set apart, separated unto Him. Holiness is not achievement; it is gift-and-calling wrapped together.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-qadosh',
          title: 'Qadosh — &ldquo;holy&rdquo;',
          script: 'קָדוֹשׁ',
          translit: '<strong>qadosh</strong> · set apart, consecrated, separated',
          description:
            'To be qadosh is not to be righteous in the sense of morally perfect. It is to be separated from the common, dedicated to God&apos;s purposes alone. Israel&apos;s food laws, mourning practices, and annual rhythms all expressed that separation.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-segulah',
          title: 'Segulah — &ldquo;peculiar treasure&rdquo;',
          script: 'סְגֻלָּה',
          translit: '<strong>segulah</strong> · special possession, peculiar treasure, valued property',
          description:
            'Not "peculiar" in the sense of odd, but in the sense of being singled out, chosen, owned. A king&apos;s segulah is his most prized possession. Israel is God&apos;s segulah — chosen above all nations for covenant partnership.',
        },
        {
          kind: 'carry',
          html:
            'The culture tells you your body is your own, to do with what you wish. Tattoos, piercings, mutilation, pleasure, abuse — the common world says: it&apos;s yours. Deuteronomy comes in quiet and says: no. You are children of the Lord your God. Your body is not a canvas for your will; it is a temple of belonging. You have been chosen, set apart, made peculiar to Him. That truth is not restriction; it is liberation. You belong to someone worthy of your whole self.',
        },
        {
          kind: 'reflection',
          id: 'deut14-reflection-1',
          prompt:
            'Where have you been treating your body as your own possession to do with as you wish? What would change if you truly believed you belong to the Lord your God?',
        },
      ],
    },

    /* ─── Deuteronomy 14:3–20 — The Food Laws ────────────────────────────── */
    {
      ref: 'Deuteronomy 14:3–20',
      title: 'Clean and Unclean: Daily Holiness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 3,
              spans: [
                t('Thou shalt not eat any '),
                hg('abominable thing', 'deut14-abominable'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('These are the beasts which ye shall eat: the ox, the sheep, and the goat,'),
              ],
            },
            {
              number: 5,
              spans: [
                t('The hart, and the roebuck, and the fallow deer, and the wild goat, and the pygarg, and the wild ox, and the chamois.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And every beast that '),
                hg('parteth the hoof', 'deut14-hoof'),
                t(', and '),
                hg('cleaveth the cleft into two claws', 'deut14-hoof'),
                t(', and '),
                hg('cheweth the cud', 'deut14-cud'),
                t(' among the beasts, that ye shall eat.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Nevertheless these ye shall not eat of them that chew the cud, or of them that divide the cloven hoof; as the camel, and the hare, and the coney: for they chew the cud, but divide not the hoof; therefore they are unclean unto you.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the swine, because it divideth the hoof, yet cheweth not the cud, it is unclean unto you. Ye shall not eat of their flesh, nor touch their dead carcase.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut14-land-clean',
          html: 'Land animals must pass both tests. Cloven hoof and chewing cud together mark the clean. The test is not secret or mysterious—it is visible, knowable, repeatable. You can look at what you are about to eat and know whether it belongs at your table.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 9,
              spans: [
                t('These ye shall eat of all that are in the waters: all that have fins and scales shall ye eat:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And whatsoever hath not fins and scales ye may not eat; it is unclean unto you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut14-water-clean',
          html: 'From the waters: fins and scales. The criterion is simple and visible. Clean water animals are the ones that move and are protected—the streamlined, the scaled, the swift. They belong at your table.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 11,
              spans: [
                t('Of all clean birds ye shall eat.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('But these are they of which ye shall not eat: the eagle, and the ossifrage, and the ospray,'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the glede, and the kite, and the vulture after his kind,'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And every raven after his kind,'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the owl, and the night hawk, and the cuckow, and the hawk after his kind,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut14-clean-unclean',
          html:
            'The list of unclean birds runs long. The point is not biology but boundary — Israel learns to live differently with what it eats so it can live differently with whom it walks.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 16,
              spans: [
                t('The little owl, and the great owl, and the swan,'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the pelican, and the gier eagle, and the cormorant,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the stork, and the heron after her kind, and the lapwing, and the bat.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And every creeping thing that flieth is unclean unto you: they shall not be eaten.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('But of all clean fowls ye may eat.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut14-abominable',
          html:
            'Deuteronomy recaps the laws first given in Leviticus 11, but with a key difference in emphasis. Where Leviticus asks <em>why</em> (to make a distinction, to affirm holiness), Deuteronomy simply states: these are abominable. The word shiqqotz carries moral disgust — not hygiene, not harm, but the sense that to eat the unclean is to voluntarily take revulsion into yourself. By the time Deuteronomy is written, the people know what clean and unclean are. This chapter reinforces the practice, the habit, the rhythm of belonging.',
        },
        {
          kind: 'commentary',
          id: 'deut14-hoof',
          html:
            'The test is clear: <em>both</em> marks must be present. An animal that parts the hoof but doesn&apos;t chew the cud, or chews the cud but doesn&apos;t part the hoof, fails. A camel is almost clean but not quite. A pig is almost clean but not quite. The principle goes deep: partial obedience to God is not obedience. Partial separation from the world is not separation. You cannot live with one foot in two worlds and call yourself set apart.',
        },
        {
          kind: 'commentary',
          id: 'deut14-cud',
          html:
            'The ruminating animal — one that returns to its food, digests slowly, is contemplative — stands as a picture of Israel&apos;s relationship to God&apos;s word. Not the quick gulp of the glutton, but the chewing and re-chewing of the meditator. The psalmist will echo this when he promises to meditate on God&apos;s law "day and night" — turning it over in the heart, like a cow chewing its cud.',
        },
        {
          kind: 'christ',
          id: 'deut14-christ',
          title: 'Christ Connection — All Things Cleansed',
          html:
            'Peter, years later, will wrestle with these laws. In a trance, he sees a sheet descending with all manner of unclean animals, and hears a voice: &ldquo;Rise, Peter; kill, and eat.&rdquo; He refuses: "Not so, Lord; for I have never eaten any thing that is common or unclean." The answer comes: "What God hath cleansed, that call not thou common" (Acts 10:13–15). Christ&apos;s blood does not abolish the principle of holiness; it relocates it. You are not made holy by what enters your mouth but by whom you belong to. The cleanness Christ gives is not about food; it is about hearts transformed by faith.',
        },
        {
          kind: 'carry',
          html:
            'The food laws have ended. You can eat the pig and the shrimp and the raven without breaking a rule. But the deeper question remains: what are you allowing to enter your life? What are you consuming — on your screen, in your ear, in your heart — that leaves you feeling unclean? The old laws have been cleansed away, but the principle stands: you become what you take in. Choose what you consume with the same care Israel chose what it ate.',
        },
        {
          kind: 'reflection',
          id: 'deut14-reflection-2',
          prompt:
            'If the food laws pointed to the reality that what you consume shapes who you become, what &quot;food&quot; have you been feeding on that doesn&apos;t belong in a holy life?',
        },
      ],
    },

    /* ─── Deuteronomy 14:21 — The Kid in Its Mother's Milk ───────────────── */
    {
      ref: 'Deuteronomy 14:21',
      title: "Do Not Seethe a Kid in His Mother's Milk",
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 21,
              spans: [
                t('Ye shall not eat of any thing that dieth of itself: thou shalt give it unto the stranger that is in thy gates, that he may eat it; or thou mayest sell it unto an alien: for thou art an '),
                hg('holy people', 'deut14-holy-people'),
                t(' unto the LORD thy God. Thou shalt not '),
                hg('seethe a kid in his mother&apos;s milk', 'deut14-kid-milk'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut14-kid-milk',
          html:
            'The phrase appears three times in the Torah — in Exodus 23, 34, and here in Deuteronomy. Its meaning has been debated for centuries. The most straightforward reading: do not cook an animal in the milk of its own mother. Why? The text does not explain, but the intuition is clear. There is a violence in the juxtaposition — the nourishment meant to sustain life, the flesh made dead, boiling together. It violates a natural boundary. To be set apart from the nations is to refuse this particular cruelty, small as it seems. Israel could be temperate even in what the text does not forbid.',
        },
        {
          kind: 'commentary',
          id: 'deut14-holy-people',
          html:
            'The rule is framed by covenant identity: you are a holy people. Therefore you do not do this. Holiness is not negotiated case by case. It is a character, a whole way of being. And that character says: even where the rule is unclear, where the text does not explicitly forbid, where other nations do it without shame — you choose the more excellent way.',
        },
        {
          kind: 'carry',
          html:
            'This small rule, tucked between the food laws and the tithe, points to something profound. Most of your moral life is not decided by explicit commandments. It is decided by character. By who you have become. By the question: because I belong to a holy God, what kind of person do I choose to be? The law says you can do this thing. But you don&apos;t. Not because it is forbidden, but because you are set apart. Your holiness is not compliance; it is nobility. It is the freedom to refuse what is permissible because you have chosen something better.',
        },
        {
          kind: 'reflection',
          id: 'deut14-reflection-3',
          prompt:
            'What is something the law permits you that your holiness calls you to refuse? Can you feel the difference between restriction and nobility?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Deuteronomy 14:22–26 — The Joyful Tithe-Feast ──────────────────── */
    {
      ref: 'Deuteronomy 14:22–26',
      title: 'Tithe as Table: Feast in the Presence of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 22,
              spans: [
                t('Thou shalt truly '),
                hg('tithe all the increase', 'deut14-tithe'),
                t(' of thy seed, that the field bringeth forth year by year.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And thou shalt eat before the LORD thy God, in the place which he shall choose to place his name there, the tithe of thy corn, of thy wine, and of thy oil, and the firstlings of thy herds and of thy flocks; that thou mayest '),
                hp('learn to fear the LORD', 'deut14-fear'),
                t(' thy God always.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And if the way be too long for thee, so that thou art not able to carry it; or if the place be too far from thee, which the LORD thy God shall choose to set his name there, when the LORD thy God hath blessed thee:'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Then shalt thou '),
                hg('turn it into money', 'deut14-money'),
                t(', and bind up the money in thine hand, and shalt go unto the place which the LORD thy God shall choose:'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And thou shalt bestow that money for whatsoever thy soul lusteth after, for oxen, or for sheep, or for wine, or for strong drink, or for whatsoever thy soul desireth: and thou shalt eat there before the LORD thy God, and thou shalt '),
                hp('rejoice', 'deut14-rejoice'),
                t(', thou, and thine household.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut14-tithe',
          html:
            'The tithe is not a tax or a tribute extracted by force. It is an act of covenant devotion — a tenth of what God has given you, returned to His name. But Deuteronomy does something remarkable with the tithe that Leviticus only hints at. The tithe is not burned on an altar. It is not given to the priest to consume alone. It is brought to the sanctuary <em>to be eaten.</em>',
        },
        {
          kind: 'commentary',
          id: 'deut14-fear',
          html:
            'The purpose is explicit: "that thou mayest learn to fear the LORD thy God always." The fear of the Lord is not cowering dread. It is reverence, awe, the knowledge that you belong to One who loves you and claims you. And how do you learn that fear? By eating before Him. By gathering the fruits of a year&apos;s labor, bringing them to His house, and consuming them in His presence. The table teaches what the law cannot.',
        },
        {
          kind: 'commentary',
          id: 'deut14-money',
          html:
            'Deuteronomy knows that travel is not always possible. If the distance is too far, convert the tithe to money. But the point stands: bring it to the place God chose, and there, feast. What moves the text is not the mechanics of purity but the joy of provision. "Whatsoever thy soul lusteth after" — buy the oxen, the wine, the strong drink, and eat together.',
        },
        {
          kind: 'commentary',
          id: 'deut14-rejoice',
          html:
            'The word appears in the climax of the passage: <em>thou shalt rejoice.</em> Not "thou mayest," not "thou should consider," but <em>thou shalt.</em> Rejoicing is a command. Joy at the table, in the presence of God, in the company of family — this is not optional. It is covenant obedience.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-maaser',
          title: 'Ma\'aser — &ldquo;tithe&rdquo;',
          script: 'מַעֲשֵׂר',
          translit: '<strong>ma\'aser</strong> · a tenth part, tithe',
          description:
            'The tithe was not primarily a transfer of property to the priesthood. It was a recognition that the blessing came from God, and a gathering of God&apos;s people around the table to celebrate it together. The tithe-feast was the kingdom of God made visible and edible.',
        },
        {
          kind: 'carry',
          html:
            'The tithe has changed form in the new covenant, but the principle has not. You are not primarily called to give your money away; you are called to <em>feast together</em> in recognition of God&apos;s blessing. When you gather — at a table, over a meal, in the presence of others you love — and you pause to recognize that this, too, is His gift, that this abundance is His provision, that this community is His building — that is tithe. That is the fear of the Lord. That is worship.',
        },
        {
          kind: 'reflection',
          id: 'deut14-reflection-4',
          prompt:
            'When was the last time you sat at a table and felt, without qualification, that it was a celebration of God&apos;s goodness? What would it take to make that experience not rare?',
        },
      ],
    },

    /* ─── Deuteronomy 14:27–29 — The Third-Year Tithe for the Vulnerable ──── */
    {
      ref: 'Deuteronomy 14:27–29',
      title: 'The Third-Year Tithe: Provision for the Widow and the Orphan',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 27,
              spans: [
                t('And the Levite that is within thy gates; thou shalt not forsake him; for he hath no part nor inheritance with thee.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('At the end of three years thou shalt bring forth all the tithe of thine increase the same year, and shalt lay it up within thy gates:'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And the Levite, (because he hath no part nor inheritance with thee,) and the stranger, and the fatherless, and the widow, which are within thy gates, shall come, and shall eat and be satisfied: that the LORD thy God may bless thee in all the work of thine hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut14-levite',
          html:
            'The Levite was a landless tribe — not given inheritance like the other tribes of Israel. Every three years, therefore, the tithe had a different destination. Rather than going to the sanctuary for feasting, it went to the gates, to be distributed among those with nothing: the Levite without land, the stranger without rights, the orphan without protector, the widow without provider. The table, once again, became the place where God&apos;s justice was made visible.',
        },
        {
          kind: 'commentary',
          id: 'deut14-satisfied',
          html:
            'The word is striking: "shall come, and shall eat and be satisfied." Not "shall receive charity," not "shall be kept alive," but <em>satisfied.</em> Fed to contentment. Treated as guests at a table, not as objects of pity. The third-year tithe was not philanthropy; it was covenant responsibility. You did not give because you were generous; you gave because you belonged to a God who provides for the vulnerable, and your provision was meant to echo His.',
        },
        {
          kind: 'carry',
          html:
            'If the first tithe teaches joy in God&apos;s blessing, the third-year tithe teaches something harder: your blessing is not yours alone. Your increase, your harvest, your surplus — some of it is meant to flow to those who have no harvest. Not as noblesse oblige, not as guilt-giving, but as the natural outflow of belonging to a God who loves the widow and orphan. When you see the vulnerable person at your table, eating to satisfaction — that is the kingdom of God. That is what it means to fear the Lord.',
        },
        {
          kind: 'reflection',
          id: 'deut14-reflection-5',
          prompt:
            'How do you feel about the command that a portion of your increase must go to those without? Is there resistance in you? Can you sense where the resistance comes from?',
        },
        {
          kind: 'artwork',
          matchTitle: /widow|orphan|poor|vulnerable/i,
          caption: 'Deuteronomy 14:27–29 · The Vulnerable at the Table',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Ye are the children of the LORD your God. The food laws declare it. The tithe-feast celebrates it. The widow at the table embododies it. Holiness is not separation from joy; it is the joy of knowing you belong.',
    snippet: 'Deuteronomy 14 · Study Guide',
    ref: 'Deuteronomy 14:1–2, 26, 29',
  },

  hasHebrew: true,
};
