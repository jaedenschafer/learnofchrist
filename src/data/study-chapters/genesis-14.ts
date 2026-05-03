import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 14 — the war of nine kings, the rescue of Lot, and the first
 * priest in the Bible. This chapter packs extraordinary typology: the first
 * tithe, Melchizedek, bread and wine, a priest-king older than Abraham.
 * Hebrews 5-7 will spend three chapters unpacking Melchizedek as a type of
 * Christ. But the heart of the chapter is quiet: Abram meets a man who
 * calls him blessed, receives bread and wine, and gives a tenth. Then he
 * refuses the king of Sodom's gold. The world offers payment; Abram offers
 * worship.
 */
export const GENESIS_14: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 14,

  estimatedMinutes: { beginner: 7, intermediate: 12, deep: 15 },
  intros: [
    'Genesis 14 is packed tighter than almost any other chapter in Scripture. It contains the first recorded battle in the Bible, the first rescue, and the first appearance of a priest. It contains the first tithe ever given, the first appearance of bread and wine as a blessing, and a man who will become one of the most mysterious figures in Scripture: Melchizedek, king of Salem, priest of the Most High God.',
    'But underneath the crowded action is a pattern that runs through the entire Bible: a test of faithfulness, a rescue by faith, and then a choice about payment. The world offers Abram wealth; he turns it away. A king who has no law tries to reward him; Abram will take no reward except [res:bibleodyssey-abraham-covenant] the one God gives him. The chapter asks: what will you sell your soul for? And Abram&apos;s answer becomes a kind of prayer.',
  ],

  bottomShare: {
    label: 'Share Genesis 14',
    quote:
      'Melchizedek, king of Salem, brought bread and wine and blessed Abram. And Abram gave him a tenth of all. Then Abram refused the king of Sodom&apos;s gold: "Lest thou shouldest say, I have made Abram rich."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 14 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-14',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 14 · Hebrew + Jewish commentary',
      url: 'https://www.sefaria.org/Genesis.14',
      description: 'Hebrew text with rabbinic commentary on Melchizedek, the war of kings, and Abram&apos;s refusal of worldly wealth.',
    },
    {
      id: 'pennmuseum-abraham-era',
      kind: 'museum',
      source: 'Penn Museum',
      label: 'Mari & Nuzi Tablets (Abraham&apos;s era)',
      url: 'https://www.penn.museum/collections/west-asia/',
      description: 'Ancient Near Eastern records illuminating the political conflicts, vassal systems, and tribute practices of Abraham&apos;s time.',
    },
    {
      id: 'bibleodyssey-abraham-covenant',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Abraham and the Covenant',
      url: 'https://www.bibleodyssey.org/articles/abraham-sarah/',
      description: 'SBL article on Abraham&apos;s faith, his refusal to be bound by worldly wealth, and his covenant with the Most High God.',
    },
  ],

  sections: [
    /* ─── Genesis 14:1–12 — The War and the Captivity ────────────────── */
    {
      ref: 'Genesis 14:1–12',
      title: 'War and Captivity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass in the days of '),
                hg('Amraphel king of Shinar, Arioch king of Ellasar, Chedorlaomer king of Elam, and Tidal king of nations', 'c-four-kings'),
                t(';'),
              ],
            },
            {
              number: 2,
              spans: [
                t('That these made war with Bera king of Sodom, and with Birsha king of Gomorrah, Shinab king of Admah, and Shemeber king of Zeboiim, and the king of Bela, which is Zoar.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('All these were joined together in the vale of Siddim, which is the salt sea.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Twelve years they served Chedorlaomer, and in the thirteenth year '),
                hg('they rebelled', 'c-rebellion'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And in the fourteenth year came Chedorlaomer, and the kings that were with him, and smote the Rephaims in Ashteroth Karnaim, and the Zuzims in Ham, and the Emims in Shave Kiriathaim,'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the Horites in their mount Seir, unto El-paran, which is by the wilderness.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And they returned, and came to En-mishpat, which is Kadesh, and smote all the country of the Amalekites, and also the Amorites, that dwelt in Hazezon-tamar.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And there went out the king of Sodom, and the king of Gomorrah, and the king of Admah, and the king of Zeboiim, and the king of Bela (the same is Zoar;) and they joined battle with them in the vale of Siddim;'),
              ],
            },
            {
              number: 9,
              spans: [
                t('With Chedorlaomer the king of Elam, and with Tidal king of nations, and Amraphel king of Shinar, and Arioch king of Ellasar; four kings with five.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the vale of Siddim was full of slimepits; and the kings of Sodom and Gomorrah fled, and '),
                hg('fell there', 'c-slime-pits'),
                t('; and they that remained fled to the mountain.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And they took all the goods of Sodom and Gomorrah, and all their victuals, and went their way.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And they took '),
                hg('Lot, Abram&apos;s brother&apos;s son', 'c-lot-captive'),
                t(', who dwelt in Sodom, and his goods, and departed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-four-kings',
          html:
            'Nine kings clash in this chapter — a war that echoes through ancient history and is recorded in Mesopotamian sources. But Genesis does not care about kings or empires. It cares about one man&apos;s choice in the middle of a conflict that is not his. The great powers of the world are moving; what does faith do?',
        },
        {
          kind: 'commentary',
          id: 'c-rebellion',
          html:
            'The pattern is simple: years of subjection, then rebellion. The kings of Sodom and Gomorrah, having paid tribute for twelve years, finally refuse. The next thirteen chapters will circle back to Sodom and Gomorrah again and again — they are a kind of moral gravity well in this book. Here they rebel against Chedorlaomer. Later, Abram will refuse to rebel against God[res:sefaria-genesis-14][res:pennmuseum-abraham-era].',
        },
        {
          kind: 'commentary',
          id: 'c-slime-pits',
          html:
            'The ground itself becomes a trap — the vale of Siddim is clogged with tar pits. The fugitives cannot flee; they are swallowed by the earth. The world takes Lot, and Lot is left with nothing. The king who built a tower at Babel built in bricks; the king of Sodom cannot even keep his feet out of mud.',
        },
        {
          kind: 'commentary',
          id: 'c-lot-captive',
          html:
            'Lot is taken captive — not in battle, but in the chaos after. He has chosen to live in Sodom, to pitch his tent toward the city. Now the city is conquered, and Lot is carried away as spoils. Choice has consequence. But the chapter is about to show what grace does with that consequence.',
        },
        {
          kind: 'carry',
          html:
            'The war of nine kings is happening and you did not start it. The collapse in the market you did not create. The family conflict you did not begin. The person you love is tangled in someone else&apos;s rebellion, and you feel helpless. Genesis 14 is moving toward a man who will not stay helpless. Neither do you, if the God who is about to appear on the page is your God.',
        },
        {
          kind: 'reflection',
          id: 'gen14-captive',
          prompt:
            'Whose "Lot" are you carrying right now — a person trapped in consequences not entirely their own? What would it look like to go after them, the way Abram is about to?',
        },
      ],
    },

    /* ─── Genesis 14:13–16 — The Rescue ────────────────────────────────── */
    {
      ref: 'Genesis 14:13–16',
      title: 'The Rescue',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 13,
              spans: [
                t('And there came one that had escaped, and told Abram the Hebrew; for he dwelt in the plain of Mamre the Amorite, brother of Eshcol, and brother of Aner: and these were confederate with Abram.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And when Abram heard that '),
                hg('his brother was taken captive', 'c-brother-taken'),
                t(', he armed '),
                hg('his trained men', 'c-trained-men'),
                t(', born in his own house, three hundred and eighteen, and pursued them unto Dan.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And he divided himself against them, he and his servants, by night, and smote them, and pursued them unto Hobah, which is on the left hand of Damascus.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And he brought back all the goods, and also brought again '),
                hg('his brother Lot', 'c-lot-recovered'),
                t(', and his wife, and all that he had.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-brother-taken',
          html:
            'Notice the speed: one verse for the entire war and capture, then instantly we turn to Abram and a messenger arrives. &ldquo;Thy brother is taken captive.&rdquo; The word <em>brother</em> is exact — Lot is not Abram&apos;s son, but his brother by kinship, chosen relationship. The same word Jesus will use centuries later: &ldquo;Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me&rdquo; (Matt. 25:40).',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-trained-men',
          title: 'Khanim — &ldquo;trained men&rdquo;',
          script: 'חֲנִיכִים',
          translit: '<strong>khanim</strong> · trained, disciplined warriors (literally, &ldquo;those who have been trained&rdquo;)',
          description:
            'Abram commands 318 trained men born in his own household. He is not a nomad; he is a patriarch with a small army. But the point is not his power — it is what he does with it the instant he hears his brother is captive.',
        },
        {
          kind: 'commentary',
          id: 'c-trained-men',
          html:
            'Three hundred and eighteen men. It is a small number against nine kings and their armies. The reader knows he is outmatched. But Abram moves at night, divides his forces, and wins. The Bible is rarely interested in military strategy. It is interested in what a man does when his brother is taken — and what God does next.',
        },
        {
          kind: 'commentary',
          id: 'c-lot-recovered',
          html:
            'Abram recovers not just Lot but all his goods, his wife, and all the people. The rescue is complete. But notice what Abram does not do: he does not take payment, he does not claim the spoils, he does not demand a reward. In the next scene, the king of Sodom will offer him riches and Abram will refuse. Rescue, for Abram, is not a business transaction. It is an act of love.',
        },
        {
          kind: 'carry',
          html:
            'Faith is not passive. The instant Abram hears his brother is taken, he arms himself. He does not pray about it in the tent for seven days. He does not call a committee. He finds his people, he divides his forces, and he pursues. Sometimes the most faithful thing you can do is act quickly on behalf of someone you love. God will bless the pursuit that has love in it.',
        },
        {
          kind: 'reflection',
          id: 'gen14-rescue',
          prompt:
            'What captivity are you qualified to rescue someone from — in your work, your friendship, your family, your community? What does your "318 trained men" — your skills, your access, your influence — exist for?',
        },
      ],
    },

    /* ─── Genesis 14:17–20 — Melchizedek ────────────────────────────────── */
    {
      ref: 'Genesis 14:17–20',
      title: 'Melchizedek',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 17,
              spans: [
                t('And the king of Sodom went out to meet him in the valley of Shaveh, (the same is the '),
                hy('King&apos;s Dale', 'c-kings-dale'),
                t(',) after his return from the slaughter of Chedorlaomer, and of the kings that were with him.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And '),
                hy('Melchizedek king of Salem', 'hebrew-malki-tsedek'),
                t(' brought forth bread and wine: and he was the priest of '),
                hy('the most high God', 'hebrew-el-elyon'),
                t('.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And he blessed him, and said, Blessed be Abram of the '),
                hp('most high God', 'christ-melchizedek'),
                t(', possessor of heaven and earth:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And blessed be the '),
                hp('most high God', 'christ-melchizedek'),
                t(', which hath delivered thine enemies into thy hand. And he gave him '),
                t('tithes'),
                t(' of all.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kings-dale',
          html:
            'The king of Sodom is waiting. He has nothing left — his army is destroyed, his city is captured, his goods are taken — and yet he still tries to make a deal. But before he can speak, another king appears. Melchizedek has not been introduced; he simply <em>is</em>, a priest-king meeting Abram in a valley. The text offers no genealogy, no introduction. He is presented as if he has always been there.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-malki-tsedek',
          title: 'Malki-Tsedek — &ldquo;My King Is Righteousness&rdquo;',
          script: 'מַלְכִּי־צֶדֶק',
          translit: '<strong>Malki</strong> (my king) · <strong>Tsedek</strong> (righteousness, justice)',
          description:
            'His very name is a prophecy. Not a human name with an etymology; a statement of office. In his presence, the names of all the other kings in the chapter become small. Chedorlaomer ruled by conquest. The king of Sodom by negotiation. Melchizedek rules by righteousness.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-el-elyon',
          title: 'El Elyon — &ldquo;God Most High&rdquo;',
          script: 'אֵל עֶלְיוֹן',
          translit: '<strong>El</strong> (God) · <strong>Elyon</strong> (most high, supreme)',
          description:
            'Melchizedek calls God by a title no one else in Genesis has used — the God who is above all other powers, all other claims, all other authority. In Abram&apos;s ears, a Canaanite priest is declaring a God higher than any in the pantheon of Canaan.',
        },
        {
          kind: 'commentary',
          id: 'c-bread-wine',
          html:
            'Melchizedek brings bread and wine. He does not bring gold or weapons or negotiations. He brings the staff of life and the drink of celebration — the simple things that sustain and gather people. These are not payment. They are fellowship. Later, centuries later, Jesus will take bread and wine in a room with His friends and say: this is my body, this is my blood. Melchizedek is the first priest in the Bible to offer bread and wine as a blessing.',
        },
        {
          kind: 'christ',
          id: 'christ-melchizedek',
          title: 'Christ Connection — A Priest Forever',
          html:
            'Hebrews 5, 6, and 7 spend three chapters on Melchizedek. The writer sees in him a type of Christ: a priest not from the line of Aaron, but of a higher order entirely. &ldquo;Without father, without mother, without descent, having neither beginning of days, nor end of life; but made like unto the Son of God; abideth a priest continually&rdquo; (Heb. 7:3). Jesus is &ldquo;made an high priest for ever after the order of Melchisedec&rdquo; (Heb. 6:20). Psalm 110, the most-quoted psalm in the New Testament, speaks of a messiah who is &ldquo;a priest for ever after the order of Melchizedek&rdquo; (Ps. 110:4). The bread and wine Melchizedek brings out to Abram in a valley point forward to a table where the Priest-King will offer them to His people and say: take, eat, this is eternal life.',
        },
        {
          kind: 'carry',
          html:
            'You have just done something hard. You have rescued someone, you have stood against the current, you have moved when the world froze. What you need now is not more success. You need a priest — someone who is not impressed by the other kings, not negotiating with their standard, not measuring your worth by what the world offers. You need someone to bring you bread and wine and simply say: you are blessed. The God you serve is higher than all others. And here is what is real.',
        },
        {
          kind: 'reflection',
          id: 'gen14-melchizedek',
          prompt:
            'When was the last time someone blessed you — not praised your accomplishment, but simply handed you grace and called you blessed? Who is the Melchizedek in your life right now?',
        },
        {
          kind: 'artwork',
          matchTitle: /melchizedek/i,
          caption: 'Genesis 14:18–20 · Melchizedek Blesses Abram',
        },
      ],
    },

    /* ─── Genesis 14:21–24 — The Refusal ────────────────────────────────── */
    {
      ref: 'Genesis 14:21–24',
      title: 'Abram Refuses the Spoils',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 21,
              spans: [
                t('And the king of Sodom said unto Abram, '),
                hg('Give me the persons, and take the goods to thyself', 'c-sodom-offer'),
                t('.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Abram said to the king of Sodom, '),
                hp('I have lift up my hand unto the LORD, the most high God, the possessor of heaven and earth', 'christ-oath'),
                t(','),
              ],
            },
            {
              number: 23,
              spans: [
                t('That I will not take from a thread even to a shoelatchet, and that I will not take any thing that is thine, '),
                hg('lest thou shouldest say, I have made Abram rich', 'c-refusal'),
                t(':'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Save only that which the young men have eaten, and the portion of the men which went with me, Aner, Eshcol, and Mamre; let them take their portion.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sodom-offer',
          html:
            'The king of Sodom is pragmatic. He has lost his army and his goods, but his people are alive. A deal: he gives Abram the goods in exchange for the captives. By any rational standard, Abram wins. He gets rich and his people come home. But Abram is not measuring wealth by the king of Sodom&apos;s standard.',
        },
        {
          kind: 'commentary',
          id: 'c-refusal',
          html:
            'The words could not be clearer: <em>lest thou shouldest say, I have made Abram rich.</em> A man gets wealthy in two ways — by his own hand, or by gifts given. Abram refuses the gift because he refuses the debt. If he takes the king of Sodom&apos;s gold, the king of Sodom becomes his source. A king can become lord. Abram recognizes the boundary between a gift he can accept and a gift that would make him a servant.',
        },
        {
          kind: 'commentary',
          id: 'c-young-men',
          html:
            'But Abram is not stoic or rejecting. He allows his young men to eat from the conquest. He allows the allies who went with him — Aner, Eshcol, Mamre — to take their portion. Abram refuses, but he does not refuse on behalf of others. He will not be bought, but he will not deny his people the fruit of shared work.',
        },
        {
          kind: 'christ',
          id: 'christ-oath',
          title: 'Christ Connection — The Oath of the King',
          html:
            'Abram swears an oath — &ldquo;I have lift up my hand unto the LORD.&rdquo; The gesture and the God are one. Later, Melchizedek will swear an oath over the Son of God, and Hebrews will interpret it: the Father swears over the Son that He is a priest forever (Heb. 7:20–22). Abram&apos;s refusal to take the king of Sodom&apos;s gold is Abram&apos;s way of saying what Christ will say: &ldquo;My kingdom is not of this world&rdquo; (John 18:36). The gold of Sodom is not your source. Your blessing does not come from the world&apos;s accounting.',
        },
        {
          kind: 'carry',
          html:
            'The world will offer you what looks like payment — approval, money, the things that make you feel like you won. And some of it you might take, if it is earned. But some offers come wrapped in debt. If you take the king of Sodom&apos;s gold, he can later say he made you. He can hold it over you. He can demand it back. Abram refuses because he knows who made him rich — not conquest, not deals, but the God who walks with him. What are you tempted to accept that would make someone else your lord?',
        },
        {
          kind: 'reflection',
          id: 'gen14-refusal',
          prompt:
            'What "gold of Sodom" has someone offered you, and what would it cost you to take it? What would it cost you to refuse?',
        },
        {
          kind: 'artwork',
          matchTitle: /abraham/i,
          matchArtist: /king/i,
          caption: 'Genesis 14:21–24 · Abram Refuses',
        },
      ],
    },
  ],
};
