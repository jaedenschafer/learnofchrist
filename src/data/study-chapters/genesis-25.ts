import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 25 — Abraham's later years and death; Ishmael's genealogy;
 * Rebekah's struggle with twin sons in the womb; the oracle "the elder
 * shall serve the younger"; Esau and Jacob born; Esau despises his
 * birthright for red lentil stew.
 *
 * This chapter marks a generational turn. Abraham, the man of promise,
 * passes from the story. But even in the womb, the promise line is being
 * chosen — not by strength, not by birth order, but by God's sovereign grace.
 * And the first glimpse of Jacob shows a man willing to trade an eternal
 * inheritance for a bowl of soup. The chapter asks: what do we hunger for?
 */
export const GENESIS_25: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 25,

  intros: [
    'Genesis 25 opens with the death of Abraham — the father of the promise, who spent his life believing God for a son he could not yet see, for a nation he would never rule, for a land he would never fully own. He dies at 175, full of years, and is laid to rest with Sarah in the cave of Machpelah, the only plot of promised land he ever truly possessed. But his line does not die with him. His covenant is not buried in that cave.',
    'In the second half of the chapter, we meet Rebekah and Isaac — and in Rebekah&apos;s womb, two nations struggling against each other. The text says the children struggled <em>within her,</em> not like siblings jostling for space, but like two peoples at war. God answers her prayer not with comfort but with an oracle that cuts against every human expectation: <em>the elder shall serve the younger.</em> It is a word that will shape the rest of the Bible — the story of a younger son chosen over an older, again and again, until the last becomes first and the meek inherit the earth.',
  ],

  bottomShare: {
    label: 'Share Genesis 25',
    quote:
      'Abraham lived to see his heir inherit the promise. But even in the generation to come, in the womb itself, God&apos;s choice was not by strength or birth order — the elder would serve the younger.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 25 · Study Guide',
  },

  sections: [
    /* ─── Genesis 25:1–11 — Abraham's Later Years and Death ─────────────── */
    {
      ref: 'Genesis 25:1–11',
      title: 'The Passing of the Patriarch',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 1,
              spans: [
                t('Then again Abraham took a '),
                hg('wife, and her name was Keturah', 'c-keturah'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And she bare him Zimran, and Jokshan, and Medan, and Midian, and Ishbak, and Shuah.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And Jokshan bare Sheba, and Dedan: and the sons of Dedan were Asshurim, and Letushim, and Leummim.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the sons of Midian; Ephah, and Epher, and Hanoch, and Abida, and Eldaah. All these were the children of Keturah.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And Abraham '),
                hg('gave all that he had unto Isaac', 'c-inheritance'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('But unto the sons of the concubines, which Abraham had, Abraham gave gifts, and sent them away from Isaac his son, while he yet lived, eastward, unto the east country.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And these are the days of the years of Abraham&apos;s life which he lived, '),
                hy('an hundred and threescore and fifteen years', 'c-175'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Then Abraham '),
                hg('gave up the ghost, and died', 'c-death'),
                t(' in a good old age, an old man, and full of years; and was '),
                hp('gathered to his people', 'christ-gathered'),
                t('.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And his sons Isaac and Ishmael buried him in the cave of Machpelah, in the field of Ephron the son of Zohar the Hittite, which is before Mamre;'),
              ],
            },
            {
              number: 10,
              spans: [
                t('The field which Abraham purchased of the sons of Heth: there was Abraham buried, and Sarah his wife.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And it came to pass after the death of Abraham, that God blessed his son Isaac; and Isaac dwelt by the well Lahai-roi.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-keturah',
          html:
            'Abraham takes another wife after Sarah&apos;s death — Keturah — and has six more children. These children receive gifts and are sent eastward, away from Isaac. The covenant line, though, is undivided. Abraham&apos;s later fertility is a sign not of weakness but of the strength God gave him. He lived long enough to see the promise begin to take root, and to prepare the way for the son who would carry it forward.',
        },
        {
          kind: 'commentary',
          id: 'c-inheritance',
          html:
            'Before Abraham dies, he settles the inheritance. Everything goes to Isaac. This is not a punishment for the other sons — they receive gifts, they are blessed, they will become nations. But they are not the carriers of the covenant. In Genesis, inheritance is never about what is deserved. It is about what God chooses to do.',
        },
        {
          kind: 'commentary',
          id: 'c-175',
          html:
            'One hundred seventy-five years. Abraham was called when he was seventy-five. He waited twenty-five years for Isaac. He lived a hundred more years with the son he had begged for. He lived long enough to see Isaac marry, long enough to know that Isaac would have children. Long enough for the dream to move from him into the next generation.',
        },
        {
          kind: 'commentary',
          id: 'c-death',
          html:
            'Abraham &ldquo;gave up the ghost, and died in a good old age.&rdquo; The Hebrew word is simple: <em>expire.</em> His breath, which God gave him as a dust-man seventy-five chapters ago, returns. He is satisfied. He has seen what he believed for. His death is not a tragedy — it is a completion.',
        },
        {
          kind: 'christ',
          id: 'christ-gathered',
          title: 'Christ Connection — Gathered to His People',
          html:
            'Abraham is &ldquo;gathered to his people&rdquo; — a phrase the Bible uses repeatedly for death, but one that suggests more than the grave. The fathers were not raised into a kingdom they could not see. Hebrews 11:13 reads: &ldquo;These all died in faith, not having received the promises, but having seen them afar off, and were persuaded of them, and embraced them, and confessed that they were strangers and pilgrims on the earth.&rdquo; Christ is the promise they all died seeing. In Him, the gathering is complete.',
        },
        {
          kind: 'carry',
          html:
            'Abraham spent his entire life believing for something he never fully possessed — a son, a nation, a land where he could only ever be a foreigner. Yet the text says he died satisfied, &ldquo;full of years.&rdquo; What he possessed was not what he obtained but what he believed. And what he believed led him, every day, to keep walking forward. Your unfinished promises are not a sign you have failed. They may be the sign that you have lived.',
        },
        {
          kind: 'reflection',
          id: 'gen25-abraham',
          prompt:
            'What promise from God have you been carrying that you may never see completed in your lifetime? What would it mean to die &ldquo;full of years,&rdquo; satisfied that you have lived it out faithfully?',
        },
      ],
    },

    /* ─── Genesis 25:12–18 — Ishmael's Genealogy and Death ───────────────── */
    {
      ref: 'Genesis 25:12–18',
      title: 'The Line of Ishmael',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 12,
              spans: [
                t('Now these are the generations of Ishmael, Abraham&apos;s son, whom Hagar the Egyptian, Sarah&apos;s handmaid, '),
                hg('bare unto Abraham', 'c-ishmael-born'),
                t(':'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And these are the names of the sons of Ishmael, by their names, according to their generations: the firstborn of Ishmael, Nebajoth; and Kedar, and Adbeel, and Mibsam,'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Mishma, and Dumah, and Massa,'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Hadad, and Tema, Jetur, Naphish, and Kedemah:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('These are the sons of Ishmael, and these are their names, by their castles, and by their towns; twelve princes according to their nations.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the years of the life of Ishmael were an hundred and thirty and seven years: and he '),
                hg('gave up the ghost and died', 'c-ishmael-death'),
                t('; and was gathered unto his people.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And they dwelt from Havilah unto Shur, that is before Egypt, as thou goest toward Assyria: and '),
                hg('he died in the presence of all his brethren', 'c-ishmael-presence'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ishmael-born',
          html:
            'Ishmael was born of Abraham and Hagar — the son Abraham held in his arms and loved, the son he begged God to bless (Gen. 17:18). Ishmael was not the promised son, but he was Abraham&apos;s son. This genealogy is not a dismissal. It is a remembrance. Twelve princes, twelve nations. Ishmael will become a people.',
        },
        {
          kind: 'commentary',
          id: 'c-ishmael-death',
          html:
            'Ishmael lives 137 years. Like his father, he lives to see his line multiply. He dies as Abraham died — in peace, having lived a full life. The text never portrays Ishmael as abandoned or cursed. He is the son of promise&apos;s household, not the promise&apos;s heir. The difference is real, but it does not erase his dignity or God&apos;s covenant with him (Gen. 17:20).',
        },
        {
          kind: 'commentary',
          id: 'c-ishmael-presence',
          html:
            'Ishmael &ldquo;died in the presence of all his brethren.&rdquo; A small detail, but a tender one. He did not die alone. He died surrounded by the twelve sons who would carry his name into history. The covenant line may run through Isaac, but Ishmael&apos;s line was blessed and fulfilled.',
        },
        {
          kind: 'carry',
          html:
            'There is a version of your life story where you were not chosen for the main part, the central role you thought you were meant to have. But if you look closely, God was not idle in that storyline either. He was blessing, multiplying, making you fruitful — just not in the way you imagined. Sometimes the deepest peace comes from accepting the goodness of the story you actually got, rather than grieving the one you thought you deserved.',
        },
        {
          kind: 'reflection',
          id: 'gen25-ishmael',
          prompt:
            'Where have you felt excluded from a promise or a calling you thought was yours? What blessings might you have missed because you were looking for a different one?',
        },
      ],
    },

    /* ─── Genesis 25:19–26 — Rebekah Barren; Twins in the Womb ──────────── */
    {
      ref: 'Genesis 25:19–26',
      title: 'The Struggle in the Womb',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 19,
              spans: [
                t('And these are the generations of Isaac, Abraham&apos;s son: Abraham begat Isaac:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Isaac was forty years old when he took Rebekah to wife, the daughter of Bethuel the Syrian, of Padan-aram, the sister to Laban the Syrian.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And '),
                hy('Isaac intreated the LORD for his wife', 'c-isaac-prayer'),
                t(', because she was barren: and '),
                hp('the LORD was intreated of him, and Rebekah conceived', 'c-conception'),
                t('.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the children '),
                hy('struggled together within her', 'hebrew-ratsats'),
                t('; and she said, If it be so, why am I thus? And she went to '),
                hg('enquire of the LORD', 'c-enquiry'),
                t('.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And the LORD said unto her, '),
                hp('Two nations are in thy womb, and two manner of people shall be separated from thy bowels', 'christ-elder-serve'),
                t('; and the one people shall be stronger than the other people; and the '),
                hy('elder shall serve the younger', 'hebrew-elder-younger'),
                t('.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And when her days to be delivered were fulfilled, behold, there were twins in her womb.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And the first came out '),
                hg('red, all over like an hairy garment', 'c-esau-red'),
                t('; and they called his name Esau.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And after that came his brother out, and his hand took hold on Esau&apos;s heel: and his name was called '),
                hg('Jacob', 'hebrew-jacob'),
                t(': and Isaac was threescore years old when she bare them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-isaac-prayer',
          html:
            'Isaac prays for his wife. Like Abraham before him, Isaac knows the pattern: the woman is barren, and God opens the womb. The prayer is not a command. It is a request. &ldquo;Intreat&rdquo; means to plead, to ask earnestly. Isaac holds the promise lightly enough to ask, and trusts God enough to believe the answer will come.',
        },
        {
          kind: 'commentary',
          id: 'c-conception',
          html:
            'God answers Isaac&apos;s prayer. Rebekah conceives. What seemed impossible is made possible — not through Isaac&apos;s strength, not through any human power, but through the God who closes and opens the womb. Every generation of the promise comes the same way: by asking, by waiting, by trusting a God who gives when He chooses.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ratsats',
          title: 'Ratsats — &ldquo;struggled, pressed&rdquo;',
          script: 'רָצַץ',
          translit: '<strong>ratsats</strong> · to struggle, press against, crush',
          description:
            'The verb is violent. The children are not simply jostling — they are struggling against each other as adversaries. The text is describing not a normal pregnancy but a cosmic struggle happening in the womb. Two nations, at war before they are even born. Rebekah&apos;s discomfort is not weakness; it is a sign that something prophetic is unfolding.',
        },
        {
          kind: 'commentary',
          id: 'c-enquiry',
          html:
            'Rebekah asks why. She does not keep silent and endure. She does not assume this is normal and necessary. She goes to the LORD. &ldquo;If it be so, why am I thus?&rdquo; The question drives her to seek an answer from the only one who can give it. Her pain becomes a prayer.',
        },
        {
          kind: 'christ',
          id: 'christ-elder-serve',
          title: 'Christ Connection — The Younger Chosen',
          html:
            'Paul quotes this verse directly when writing about God&apos;s election: &ldquo;For the children being not yet born, neither having done any good or evil, that the purpose of God according to election might stand, not of works, but of him that calleth; it was said unto her, The elder shall serve the younger&rdquo; (Rom. 9:11-12). The promise never goes by strength or merit or birth order. It goes by grace. Jacob the heel-grabber, the second son, is chosen. Throughout Scripture, the younger — Abel, Isaac, Moses, David, Solomon — are chosen over the older. Until the Last Adam, the firstborn of a different kind of birth, says to those who follow Him: &ldquo;the last shall be first.&rdquo;',
        },
        {
          kind: 'carry',
          html:
            'If you are the younger, the overlooked, the one who came second — you are in the line of God&apos;s chosen ones. If you are the older, the one who was supposed to inherit, who has watched the blessing pass to another — you are in the line of Esau, and you have a choice. Will you despise what God has chosen? Or will you, like some of the patriarchs, accept that the kingdom runs by a different logic than your birth order?',
        },
        {
          kind: 'reflection',
          id: 'gen25-elder',
          prompt:
            'What did you think the order of blessing was supposed to be in your life? Where has God surprised you by choosing differently than your strength or credentials would suggest?',
        },
      ],
    },

    /* ─── Genesis 25:27–34 — Esau Sells His Birthright ─────────────────── */
    {
      ref: 'Genesis 25:27–34',
      title: 'Red Lentils and the Firstborn&apos;s Right',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 27,
              spans: [
                t('And the boys grew: and Esau was a '),
                hg('cunning hunter, a man of the field', 'c-esau-type'),
                t('; and Jacob was a '),
                hg('plain man, dwelling in tents', 'c-jacob-type'),
                t('.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Isaac '),
                hg('loved Esau', 'c-isaac-loves'),
                t(', because he did eat of his venison: but Rebekah loved Jacob.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And Jacob sod pottage: and Esau came from the field, and he was faint:'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And Esau said to Jacob, '),
                hg('Feed me, I pray thee, with that same red pottage', 'c-esau-hunger'),
                t('; for I am faint: therefore his name was called Edom.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And Jacob said, Sell me this day thy '),
                hy('birthright', 'hebrew-bekhorah'),
                t('.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And Esau said, Behold, I am at the point to die: and what profit shall this birthright do to me?'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And Jacob said, Swear to me this day; and he sware unto him: and he '),
                hg('sold his birthright unto Jacob', 'c-sale'),
                t('.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('Then Jacob gave Esau bread and pottage of lentils; and he did eat and drink, and '),
                hp('rose up, and went his way', 'c-despise'),
                t(': thus Esau '),
                hy('despised his birthright', 'hebrew-bazah'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-esau-type',
          html:
            'Esau is a skillful hunter. He knows the wild. His hands are quick. He brings home the meat. He is the kind of man who gets things done in the world — strong, active, capable. Isaac loves him for it. The text is not condemning Esau&apos;s character. It is setting up the contrast: strength and capability are not what the covenant runs on.',
        },
        {
          kind: 'commentary',
          id: 'c-jacob-type',
          html:
            'Jacob is <em>tam</em> — often translated &ldquo;plain,&rdquo; but it also means &ldquo;whole, complete, blameless.&rdquo; He dwells in tents. Tents are the dwellings of pilgrims and priests — people who live in the presence of God. Rebekah loves him. Her love, and the oracle she has received, are aligned.',
        },
        {
          kind: 'commentary',
          id: 'c-isaac-loves',
          html:
            'Isaac loves Esau <em>because he did eat of his venison.</em> The love is conditional — transactional. Isaac has not yet learned what the text is trying to teach him: that the covenant is not earned by works or by bringing home what is desired. Rebekah knows better. She has heard the word from God.',
        },
        {
          kind: 'commentary',
          id: 'c-esau-hunger',
          html:
            'Esau comes from the field hungry. He sees the red lentil stew and is overwhelmed by appetite. &ldquo;Feed me,&rdquo; he says, &ldquo;I am faint.&rdquo; The hunger is real. But the text is asking: how real is it, really? And Jacob, watching, makes a calculation. He does not steal. He does not force. He offers. Esau has a choice.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-bekhorah',
          title: 'Bekhorah — &ldquo;birthright, firstborn&apos;s right&rdquo;',
          script: 'בְּכוֹרָה',
          translit: '<strong>bekhorah</strong> · the right of the firstborn, the double portion, priestly authority',
          description:
            'The birthright is not a blessing or a wish. It is a legal claim — the right to inherit the family&apos;s wealth (a double portion), authority, and spiritual leadership. It is everything. Esau is asking for soup. Jacob is asking for everything.',
        },
        {
          kind: 'commentary',
          id: 'c-sale',
          html:
            'Esau swears an oath. He makes it binding. The sale is complete. Jacob did not steal the birthright — God chose him first (in the womb). But Jacob, sensing his brother&apos;s hunger and desperation, made it a transaction. He turned what God had chosen into what Esau had sold. The text is clear about what happened. What it is not clear about is whether Esau was wrong to make a bargain in a moment of hunger, or whether Jacob was wrong to offer it.',
        },
        {
          kind: 'christ',
          id: 'c-despise',
          title: 'Christ Connection — Despising the Inheritance',
          html:
            'Hebrews reads this scene as a moral failing: &ldquo;Lest there be any fornicator, or profane person, as Esau, who for one morsel of meat sold his birthright. For ye know how that afterward, when he would have inherited the blessing, he was rejected: for he found no place of repentance, though he sought it carefully with tears&rdquo; (Heb. 12:16-17). The warning is not about being hungry or making mistakes in a moment of weakness — it is about <em>despising</em> the eternal inheritance. The inheritance that was chosen for Esau by God was his to receive. He sold it for soup. Christ is the inheritance that no bowl of soup is worth. To trade Him for the appetites of the moment is the only bargain no one can undo.',
        },
        {
          kind: 'carry',
          html:
            'What have you been trading for a quick fix? A moment of appetite, a hunger you thought you couldn&apos;t wait out, a desperation you thought was larger than your calling — what did you let go of? The birthright in your own story may not be recoverable on the same terms. But there is still an inheritance that stands. The one that cannot be sold or given away, only received or refused, moment by moment, day by day.',
        },
        {
          kind: 'reflection',
          id: 'gen25-despise',
          prompt:
            'Where are you most tempted to trade your birthright — your calling, your integrity, your long-term promises — for something that satisfies right now? What would it cost, actually, to wait?',
        },
        {
          kind: 'artwork',
          matchTitle: /jacob.*esau/i,
          matchArtist: /tissot/i,
          caption: 'Genesis 25:29–34 · Red Lentils and the Firstborn&apos;s Right',
        },
      ],
    },
  ],
};
