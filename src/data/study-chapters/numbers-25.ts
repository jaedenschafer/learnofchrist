import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 25 — Phinehas's covenant of peace
 *
 * Israel commits sexual immorality with Moabite women and worships Baal-peor.
 * A plague kills 24,000. Phinehas (Aaron's grandson) sees an Israelite man
 * bring a Midianite woman into the camp; takes a spear and kills them both
 * in the act. The plague stops. God establishes a "covenant of peace" with
 * Phinehas — perpetual priesthood for his line.
 *
 * Hebrew: *qana* (zealous — same root as Phinehas's "zeal" and the Hebrew for "jealous God").
 * Christ: Heb 7-8 traces Christ's priesthood not through Phinehas but through Melchizedek.
 * Phinehas's zeal anticipates John 2:17 ("zeal of thine house hath eaten me up") at the
 * temple cleansing — but Christ's "covenant of peace" is signed in His own blood, not another's.
 * Voice: Don't sanitize Phinehas's act; don't recommend it. The narrator endorses him,
 * but the OT priesthood's literal violence is fulfilled in Christ's symbolic and
 * substitutionary cross. The lesson is the seriousness of covenant breaking—not a how-to.
 * Note that Rev 2:14 brings Balaam back: Balaam taught Balak how to seduce Israel into
 * eating things sacrificed to idols and committing fornication.
 */
export const NUMBERS_25: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 25,

  estimatedMinutes: { beginner: 6, intermediate: 9, deep: 13 },
  intros: [
    'Numbers 25 is a hard chapter. Israel has been wandering for forty years, and now, just as they stand on the edge of Canaan, they fall into sexual immorality and idol worship with Moabite and Midianite women. A plague comes. And Phinehas, Aaron\'s grandson, takes a spear into the camp and kills an Israelite man and a Midianite woman in the act—stopping the plague and securing a covenant of eternal priesthood for his descendants.',
    'The narrator clearly endorses what Phinehas did. But if this is endorsement, how do we live with it? The answer lies in recognizing what Phinehas\'s zeal prefigures: a priesthood that will come after him, one that will not kill another person but will die itself, offering a sacrifice so complete that no other zeal will ever be needed again. That priest is Jesus. In Him, the literal violence of the old priesthood becomes the symbolic and substitutionary blood of the new one.',
  ],

  opener: {
    matchTitle: /phinehas|covenant|zeal/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Numbers 25',
    quote:
      'Phinehas\'s zeal for God\'s covenant stopped a plague and secured an eternal priesthood for his line. His act was endorsed by God, but it prefigures a greater priesthood coming through Christ—one that will offer itself, not another, as the final sacrifice.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 25 · Study Guide',
  },

  sections: [
    /* ─── Numbers 25:1–3 — Apostasy at Shittim ───────────────────────── */
    {
      ref: 'Numbers 25:1–3',
      title: 'Apostasy at Shittim',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 1,
              spans: [
                t('And Israel '),
                hg('abode in Shittim', 'c-shittim'),
                t(', and the people began to commit '),
                hy('whoredom', 'c-whoredom'),
                t(' with the daughters of Moab.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shittim',
          html:
            'Shittim is the last camp before the Jordan, the staging ground for the conquest of Canaan. At the threshold of inheritance, Israel falls. The place name itself means "acacias"—the wood of the wilderness, dry and thorny. It is a fitting place for a nation to discover how little has changed inside.',
        },
        {
          kind: 'hebrew',
          id: 'c-whoredom',
          title: 'Whoredom — Covenant Betrayal',
          script: 'זְנוּת',
          translit: '<strong>zenut</strong> · sexual immorality, covenant infidelity',
          description:
            'The Bible uses sexual imagery for covenant breaking. To sleep with the gods of another people is to commit adultery against God Himself. What looks like desire is actually betrayal.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 2,
              spans: [
                t('And they called the people unto the '),
                hy('sacrifices', 'c-baal-peor'),
                t(' of their gods: and the people did '),
                hg('eat', 'c-eat-idols'),
                t(', and '),
                hg('bowed down to their gods', 'c-worship'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And Israel joined himself unto '),
                hp('Baal-peor', 'christ-baal-peor'),
                t(': and the anger of the LORD was kindled against Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-baal-peor',
          html:
            'Moabite women invited Israelite men to cultic meals—feasts where eating was itself an act of worship. A meal that pledges allegiance to another god. This is not a private matter between consenting adults; it is a public act of covenant violation.',
        },
        {
          kind: 'commentary',
          id: 'c-eat-idols',
          html:
            'Eating and sexual union are woven together. Paul picks this up in 1 Corinthians 6:15–18: union with an idol is union with a demon, and sexual immorality is uniquely a sin against your own body, which is the temple of the Holy Spirit. The body is not neutral territory.',
        },
        {
          kind: 'commentary',
          id: 'c-worship',
          html:
            'Baal-peor is not simply a god—it is the fertility cult of a place, anchored in sexual worship itself. By joining their cult, Israel made a decision to worship God through the very acts that pledged allegiance to Baal. The two cannot coexist.',
        },
        {
          kind: 'christ',
          id: 'christ-baal-peor',
          title: 'Christ Connection — The Seduction of Balaam',
          html:
            'Revelation 2:14 brings this chapter back into focus: "Thou hast there them that hold the doctrine of Balaam, who taught Balac to cast a stumblingblock before the children of Israel, to eat things sacrificed unto idols, and to commit fornication." Balaam, unable to curse Israel directly, taught Balak how to seduce them from within. The doctrine is still alive in churches that teach: it\'s okay to taste just a little of what the world worships, as long as you don\'t bow all the way down. But the body and the soul are not at odds—when you join your body to what your heart should not worship, you are already far gone.',
        },
        {
          kind: 'carry',
          html:
            'There is a Balaam alive in every era, teaching the art of the half-bow. A streaming service "just for entertainment." A relationship "we\'re not serious about." A business practice "everyone does." Shittim is the story of what happens when God\'s people learn to live in two kingdoms at once. The sin is not the particulars—it is the <em>joining</em> itself.',
        },
        {
          kind: 'reflection',
          id: 'seduction',
          prompt:
            'Where is something in your life calling you to eat at a table that pledges allegiance to a different god? What would it cost to simply say no?',
        },
      ],
    },

    /* ─── Numbers 25:4–9 — The Plague ────────────────────────────────── */
    {
      ref: 'Numbers 25:4–9',
      title: 'The Plague',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 4,
              spans: [
                t('And the LORD said unto Moses, Take all the heads of the people, and '),
                hg('hang them up before the LORD', 'c-justice'),
                t(' against the sun, that the fierce anger of the LORD may be turned away from Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-justice',
          html:
            'God\'s judgment is swift and public. A plague sweeps through the camp—24,000 will die before it stops. This is not metaphorical punishment. This is a nation learning that covenant with the true God cannot coexist with covenant with idols.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 5,
              spans: [
                t('And Moses said unto the judges of Israel, Slay ye every one his men that were joined unto '),
                hy('Baal-peor', 'c-joined-peor'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-joined-peor',
          title: 'Joined Unto Baal-peor — Yoking',
          script: 'צָמַד',
          translit: '<strong>tzamad</strong> · to yoke together, to bind in partnership',
          description:
            'The same word Paul uses in 2 Corinthians 6:14: "Be ye not unequally yoked together with unbelievers." Once you are yoked to something, separation is the only path back.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 6,
              spans: [
                t('And, behold, one of the children of Israel came and brought unto his brethren a '),
                hg('Midianitish woman', 'c-midianite-woman'),
                t(' in the sight of Moses, and in the sight of all the congregation of the children of Israel, who were weeping before the door of the tabernacle of the congregation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-midianite-woman',
          html:
            'A single act of defiance in the middle of a dying people. The man is brazen—he brings her openly, perhaps not grasping the gravity of what is happening, or perhaps defiant in the face of judgment. The congregation is weeping before the tabernacle—a nation in mourning while one man walks past them into his tent.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 7,
              spans: [
                t('And when '),
                hp('Phinehas', 'c-phinehas-name'),
                t(', the son of Eleazar, the son of Aaron the priest, saw it, he rose up from the midst of the congregation, and took a spear in his hand;'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And he went after the man of Israel into the tent, and thrust both of them through, the man of Israel, and the woman through her belly: so the plague was stayed from the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-phinehas-name',
          html:
            'Phinehas means "the mouth of a serpent" or "brazen-faced"—fitting for a man who will act with unflinching resolve. He is Aaron\'s grandson, of the priestly line. What he does next will set the pattern for priesthood itself.',
        },
        {
          kind: 'carry',
          html:
            'This is a hard sentence to read and a harder one to teach. The narrator is unambiguous in his endorsement. Phinehas\'s act stops the plague. And yet—there is no instruction here for us to follow. The zeal that Phinehas embodied is real, but it belonged to a priesthood that was always meant to be temporary. Do not look at this chapter for permission to execute God\'s justice on others. Look at what it points to: a priest who will come after Phinehas, one who will take the spear meant for us, whose sacrifice will be so complete that no other zeal will ever be needed.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 9,
              spans: [
                t('Now those that died in the plague were '),
                hy('twenty and four thousand', 'c-plague-count'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-plague-count',
          title: 'The Cost of Covenant Breaking',
          script: 'עֶשְׂרִים וְאַרְבַּעָה אָלֶף',
          translit: '<strong>twenty and four thousand</strong>',
          description:
            'One act of zeal stops the dying. 24,000 people have already fallen. The plague was the first price of covenant-breaking; Phinehas\'s spear is the instrument of mercy that finally halts it.',
        },
        {
          kind: 'reflection',
          id: 'plague',
          prompt:
            'What does it cost a nation, a church, a family, when its people begin to worship at altars that should never have been entered? What is the price of living in two kingdoms at once?',
        },
      ],
    },

    /* ─── Numbers 25:10–13 — The Covenant of Peace ────────────────────── */
    {
      ref: 'Numbers 25:10–13',
      title: 'The Covenant of Peace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 10,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Phinehas, the son of Eleazar, the son of Aaron the priest, hath turned my wrath away from the children of Israel, '),
                hp('in that he was zealous for my sake', 'c-qana'),
                t(' among them: wherefore say, Behold, I give unto him my covenant of peace:'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-qana',
          title: 'Zealous — Qana\'',
          script: 'קָנָא',
          translit: '<strong>qana\'</strong> · to be zealous, ardent, jealous; also the root of Phinehas\'s very name',
          description:
            'The same Hebrew root as "jealous" when used of God. Phinehas\'s zeal is not mere anger—it is a participation in God\'s own zealousness for His covenant. Yet even this zeal, however sanctioned, was always pointing beyond itself to a greater Priest who would make this kind of violence unnecessary.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 12,
              spans: [
                t('Wherefore say, Behold, I give unto him my covenant of peace:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And he shall have it, and his seed after him, even the covenant of an '),
                hy('everlasting priesthood', 'c-everlasting'),
                t('; because he was zealous for his God, and made an '),
                hg('atonement', 'christ-atonement'),
                t(' for the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-everlasting',
          title: 'Everlasting Priesthood — Berith Shalom',
          script: 'בְרִית שָׁלוֹם',
          translit: '<strong>covenant of peace</strong> — <strong>berith shalom</strong>',
          description:
            'God has made only a handful of unconditional covenants in Scripture—one with Noah (the rainbow), one with Abraham (the land), one now with Phinehas (the priesthood). Shalom here is not mere absence of conflict; it is wholeness, completeness, the restoration of right relationship.',
        },
        {
          kind: 'christ',
          id: 'christ-atonement',
          title: 'Christ Connection — The True Priesthood',
          html:
            'Hebrews 5–7 traces the priesthood not through Phinehas but through Melchizedek. Jesus is not a Levitical priest; He is a priest after the order of Melchizedek, "without father, without mother, without descent, having neither beginning of days, nor end of life" (Heb. 7:3). Melchizedek blessed Abraham and received tithes from him—a priest greater than Levi even before Levi existed. Jesus steps into that older, eternal priesthood. <br><br>Phinehas\'s zeal anticipates Christ\'s jealousy for God\'s house: "The zeal of thine house hath eaten me up" (John 2:17), quoting Psalm 69 when Jesus cleanses the temple. But where Phinehas kills another, Christ kills Himself. Where Phinehas\'s covenant is eternal priesthood for his line, Christ\'s covenant of peace is "signed in blood" (Heb. 9:22) — His own. The violence of the old priesthood becomes the substitutionary sacrifice of the new one. Phinehas\'s spear was real, but it was always pointing at a cross.',
        },
        {
          kind: 'carry',
          html:
            'Phinehas received a covenant of peace, but it is not the peace of the world. It is the peace of someone who has stood at the edge of chaos and said no. Real peace, in Scripture, is not the absence of conflict—it is the restoration of right relationship at tremendous cost. Jesus purchased a covenant of peace far greater than Phinehas\'s: not a priesthood that passes to descendants, but one that claims all of us, made "perfect forever by one offering" (Heb. 10:14). If you have tasted His peace—forgiveness when you deserve judgment, acceptance when you deserve exile—you have tasted a zeal as powerful as Phinehas\'s, but turned toward mercy instead of judgment.',
        },
        {
          kind: 'reflection',
          id: 'peace',
          prompt:
            'What "covenant of peace" has God made with you? Not despite judgment, but as the end of all judgment—bought by a price you did not pay. What would it mean to live from that peace rather than toward earning it?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Numbers 25:14–18 — The Name and the Remnant ────────────────── */
    {
      ref: 'Numbers 25:14–18',
      title: 'The Names Are Recorded',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 14,
              spans: [
                t('Now the name of the Israelite that was slain, even that was '),
                hg('slain with the Midianitish woman', 'c-names'),
                t(', was Zimri, the son of Salu, a prince of the chief houses among the Simeonites.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the name of the Midianitish woman that was slain was Cozbi, the daughter of Zur; he was head over a people, and of a chief house in Midian.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-names',
          html:
            'The names are recorded. Zimri, a Simeonite prince—a man of status who should have known better. Cozbi, daughter of a Midianite king. They are not anonymous sins; they are people. The narrator is not erasing them into category. They are named, and their names remain in Scripture as a permanent record of what happened. This is not cruelty; it is seriousness. Covenant-breaking has names. It has faces.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 16,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Vex the Midianites, and smite them:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('For they vex you with their wiles, wherewith they have beguiled you in the matter of Peor, and in the matter of Cozbi, the daughter of the prince of Midian, their sister, that was slain in the day of the plague for Peor\'s sake.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-final-command',
          html:
            'God commands Israel to war against Midian—not for cruelty\'s sake, but because the seduction has not stopped. Midian remains a threat to covenant faithfulness. The Midianites have used their women as weapons of spiritual destruction. This is not personal animosity; it is a war for the soul of a nation.',
        },
        {
          kind: 'carry',
          html:
            'The chapter ends not with rest but with a command: vex the Midianites, do not let their seduction continue. This is the other side of covenant—sometimes it requires saying no not just once, but repeatedly, fiercely, refusing to be drawn back. The old priesthood was always fighting. That is what made it old. The new priesthood, the priesthood of Christ, will not fight with spears—but it will fight, not against flesh and blood, but against the lies that would separate you from the One who has already conquered everything that matters.',
        },
        {
          kind: 'reflection',
          id: 'names',
          prompt:
            'What seductions keep knocking on the door of your covenant with God? Not in accusation, but in reality—what keeps calling you back to Shittim? What would it mean to "vex" that enemy, to say no not once but as a lifelong practice?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-numbers-25',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 25',
      url: 'https://www.sefaria.org/Numbers.25',
      description: 'Text and commentary on Israel&apos;s idolatry at Baal-peor and Phinehas&apos;s zealous covenant act.',
    },
    {
      id: 'bible-odyssey-baal-peor',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Baal-peor',
      url: 'https://www.bibleodyssey.org/dictionary/baal-peor/',
      description: 'SBL entry on Baal-peor and the nature of the Canaanite fertility cult that seduced Israel.',
    },
    {
      id: 'phinehas-covenant',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Numbers 25 ↔ Hebrews 7',
      url: 'https://intertextual.bible/search?q=Numbers+25+Hebrews+7',
      description: 'Contrast between Phinehas&apos;s covenant priesthood and Christ&apos;s eternal priesthood in the order of Melchizedek.',
    },
  ],
};
