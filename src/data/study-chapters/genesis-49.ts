import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 49 — Jacob&apos;s deathbed blessings on his twelve sons.
 *
 * Thirty-three verses of dense Hebrew poetry. Each son receives a poetic oracle
 * that becomes a prophecy over the tribe descended from him. The chapter
 * culminates in the Shiloh prophecy on Judah (vv.8-12) — the foundational
 * messianic text of Genesis. Reuben loses the birthright; Simeon and Levi are
 * scattered; Judah receives the scepter. In the middle of blessing his sons,
 * Jacob breaks off and cries out: "I have waited for thy salvation, O LORD."
 */
export const GENESIS_49: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 49,

  estimatedMinutes: { 5: 10, 10: 18, 15: 24 },
  intros: [
    'Genesis 49 is Jacob&apos;s last will and testament — a long, poetic deathbed blessing over his twelve sons. Each oracle is terse, sometimes cryptic, and devastating in its honesty. Reuben is cursed for his lust. Simeon and Levi are condemned to scatter because of the massacre at Shechem. The words are judgment delivered in love by a dying father who sees his sons not as they are in this moment, but as the tribes they will become.',
    'And yet in the middle of pronouncing these fates, Jacob suddenly breaks off his poetry and cries out to God: "I have waited for thy salvation, O LORD." He is blessing his sons, but his deepest longing is for Someone else — for a Deliverer. The Shiloh prophecy on Judah (vv.8-12) becomes the pivot point of the entire book. The scepter will not depart from Judah. A lawgiver will rise from his sons. Obedience of the peoples will gather to him. Two thousand years of interpretation — Jewish and Christian — will hang on these verses.',
    'This chapter marks the end of Jacob&apos;s life and the beginning of Israel&apos;s history. His final words are not his own story; they are his sons&apos; futures — and beyond them, the future of the One who is coming.',
  ],

  sections: [
    /* ─── Genesis 49:1–2 — Gather and Hear ───────────────────────────────── */
    {
      ref: 'Genesis 49:1–2',
      title: 'Gather and Hear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            {
              number: 1,
              spans: [
                t('And Jacob called unto his sons, and said, '),
                hg('Gather yourselves together, that I may tell you that which shall befall you in the last days', 'c-last-days'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Gather yourselves together, and hear, ye sons of Jacob; and hearken unto Israel your father.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-last-days',
          html:
            'Jacob commands a gathering — all twelve sons to hear what he will say about them. The phrase "in the last days" (Hebrew <em>acharit hayamim</em>) suggests these are not just personal predictions but prophecies about the distant future. Jacob, at 147 years old, is about to pronounce over his sons not merely their own fates but the destinies of the tribes that will descend from them. This is the voice of a seer, not just a dying patriarch.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-acharit',
          title: 'Acharit — &ldquo;the latter end, the last days&rdquo;',
          script: 'אַחֲרִית',
          translit: '<strong>acharit</strong> · the end, the latter days, the aftermath',
          description:
            'This word appears throughout prophecy — Isaiah, Jeremiah, Daniel — always pointing to a future time when God&apos;s plan comes to fruition. Jacob is prophesying in the same vein as the later prophets.',
        },
        {
          kind: 'carry',
          html:
            'When the people you love most gather to hear your final words, what would you say? Not what you wish you had done, but what you see coming in them. Jacob doesn&apos;t bless his sons for who they are today; he blesses them for what they will become. Do you see that future in the people around you, even when they don&apos;t see it in themselves?',
        },
        {
          kind: 'reflection',
          id: 'gen49-gather',
          prompt: 'Who in your life needs to hear a word about their future — not blame for their past, but a true seeing of what&apos;s coming? What do you actually believe about them?',
        },
      ],
    },

    /* ─── Genesis 49:3–4 — Reuben: Unstable as Water ──────────────────────── */
    {
      ref: 'Genesis 49:3–4',
      title: 'Reuben: Unstable as Water',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            {
              number: 3,
              spans: [
                t('Reuben, thou art my firstborn, my might, and the beginning of my strength, the excellency of dignity, and the excellency of power:'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Unstable as water, '),
                hy('thou shalt not excel', 'hebrew-sheol-yeter'),
                t('; because thou wentest up to thy father&apos;s bed; then defiledst thou it: he went up to my couch.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-reuben-birthright',
          html:
            'Reuben is the firstborn — and in the opening words, Jacob honors that. But the blessing evaporates. The promise is taken away because of one act: sleeping with Bilhah, Jacob&apos;s concubine (Genesis 35:22). Jacob never mentions the sin by name here; he simply states the consequence. Reuben had the birthright, the double portion, the leadership of his brothers. But he was "unstable as water" — unable to hold the position he was given.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-sheol-yeter',
          title: 'Yeter — &ldquo;excellence, preeminence&rdquo;',
          script: 'יתר',
          translit: '<strong>yeter</strong> · excess, advantage, surplus; the portion that marks you as first',
          description:
            'Reuben will not have the "excess" — the extra blessing and authority that belongs to the firstborn. Someone else will rise above him.',
        },
        {
          kind: 'carry',
          html:
            'Reuben had everything: the position, the promise, the potential. And he lost it in a moment of desire he couldn&apos;t resist. There is no redemption offered here, no path back to the blessing. Jacob&apos;s word is final. What are you holding with loose hands — the gifts, the authority, the role — that could slip away if you stop guarding it?',
        },
        {
          kind: 'reflection',
          id: 'gen49-reuben',
          prompt: 'What promise or position have you been given that you&apos;re in danger of losing? What would it take to become unstable instead of faithful?',
        },
      ],
    },

    /* ─── Genesis 49:5–7 — Simeon and Levi: Scattered ───────────────────────── */
    {
      ref: 'Genesis 49:5–7',
      title: 'Simeon and Levi: Scattered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            {
              number: 5,
              spans: [
                t('Simeon and Levi are brethren; instruments of cruelty are in their habitations.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('O my soul, come not thou into their secret; unto their assembly, mine honour, be not thou united: for in their anger they slew a man, and in their selfwill they digged down a wall.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Cursed be their anger, for it was fierce; and their wrath, for it was cruel: I will divide them in Jacob, and scatter them in Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shechem-massacre',
          html:
            'Jacob is referring to the Shechem incident (Genesis 34), where Simeon and Levi slaughtered an entire city to avenge their sister Dinah&apos;s rape. Jacob didn&apos;t approve then — he was afraid of retaliation — and he hasn&apos;t forgiven it now. Both tribes are given the same sentence: they will be scattered throughout Israel, never to have a land of their own. Simeon will later be absorbed into Judah. Levi will be given no territory at all, but will become the priestly tribe — a reversal that only God could turn into a blessing.',
        },
        {
          kind: 'commentary',
          id: 'c-anger-curse',
          html:
            'Notice the reason for the curse: their anger and wrath were "fierce" and "cruel." Jacob is not condemning them for defending their sister&apos;s honor — he is condemning them for doing it in rage, for doing it massively, for doing it as an act of revenge rather than justice. The curse is personal: I Jacob am dividing you, scattering you. The word of a dying father is law.',
        },
        {
          kind: 'carry',
          html:
            'Anger is never just about the moment. It scatters you. It divides you. It takes away the inheritance you might have had — the peace, the territory, the stability — and leaves you homeless in the land of your own family. Simeon and Levi thought they were defending honor. But they found out that uncontrolled rage, no matter how righteous it feels, has a cost that no generation can pay back. What anger are you carrying that is scattering you?',
        },
        {
          kind: 'reflection',
          id: 'gen49-levi',
          prompt: 'When have you acted in anger and found out later that the cost was bigger than you thought? What made it so hard to stop?',
        },
      ],
    },

    /* ─── Genesis 49:8–12 — Judah: The Lion and the Shiloh ────────────────── */
    {
      ref: 'Genesis 49:8–12',
      title: 'Judah: The Lion and Shiloh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            {
              number: 8,
              spans: [
                t('Judah, thou art he whom thy brethren shall praise: thy hand shall be in the neck of thine enemies; thy father&apos;s children shall bow down before thee.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Judah is a '),
                hy('lion&apos;s whelp', 'hebrew-aryeh'),
                t(': from the prey, my son, thou art gone up: he stooped down, he couched as a lion, and as an old lion; who shall rouse him up?'),
              ],
            },
            {
              number: 10,
              spans: [
                t('The sceptre shall not depart from Judah, nor a lawgiver from between his feet, until '),
                hp('Shiloh come', 'shiloh-prophecy'),
                t('; and unto him shall the gathering of the people be.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Binding his '),
                hy('foal unto the vine', 'hebrew-foal-vine'),
                t(', and his ass&apos;s colt unto the choice vine; he washed his garments in wine, and his clothes in the blood of grapes:'),
              ],
            },
            {
              number: 12,
              spans: [
                t('His eyes shall be red with wine, and his teeth white with milk.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judah-praise',
          html:
            'After Reuben and Levi are cursed, Judah suddenly rises. His brothers will praise him. He will defeat his enemies. His hand will be on their necks — a gesture of victory and authority. From the scattered tribes, Judah emerges as the one with power. The imagery shifts from the curses to something almost royal.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-aryeh',
          title: 'Aryeh — &ldquo;lion&rdquo;',
          script: 'אַרְיֵה / גּוּר אַרְיֵה',
          translit: '<strong>aryeh</strong> · lion; <strong>gur aryeh</strong> · lion&apos;s whelp',
          description:
            'Judah is named the lion — a symbol of strength and royal power. Two thousand years later, Revelation will echo this exact phrase: "the Lion of the tribe of Juda hath prevailed" (Rev. 5:5). The image is never forgotten.',
        },
        {
          kind: 'christ',
          id: 'shiloh-prophecy',
          title: 'Christ Connection — Shiloh: The Prophecy',
          html:
            'Verse 10 contains one of the Old Testament&apos;s most-debated and most-hopeful verses: "The sceptre shall not depart from Judah, nor a lawgiver from between his feet, until Shiloh come; and unto him shall the gathering of the people be." The word <em>Shiloh</em> (Hebrew שִׁילֹה) has three readings in the Jewish and Christian tradition: (a) a place name (the later sanctuary city); (b) "he whose right it is" or "he comes whose right it is" (the reading of the Septuagint and Vulgate); (c) "tribute comes to him" (the most defensible philologically). Yet all three streams of interpretation have pointed forward to the Messiah for over twenty centuries. Matthew traces Jesus through Judah&apos;s line (Matt. 1). Hebrews explicitly cites this descent to argue Jesus&apos; qualifications: "Our Lord sprang out of Juda; of which tribe Moses spake nothing concerning priesthood" (Heb. 7:14). And when John sees the risen Christ in Revelation, he writes: "Weep not: behold, the Lion of the tribe of Juda, the Root of David, hath prevailed" (Rev. 5:5). The scepter held by Judah finds its bearer in Jesus.',
        },
        {
          kind: 'commentary',
          id: 'c-shiloh-meaning',
          html:
            'The three interpretations of "Shiloh" deserve your time. In Hebrew, the letters are שִׁילֹה — <em>shin, yud, lamed, vav, heh</em>. Some read this as a place (Shiloh, the sanctuary city where the ark will later rest). Others parse it as two words: <em>she</em> (whose) + <em>lo</em> (to him) — "he whose it is" or "it is his." Still others derive it from <em>shel</em> (tribute) — "until tribute comes to him." Each reading points somewhere slightly different, yet the ancient interpreters — both Jewish and Christian — consistently read this as a prophecy of the coming Messiah. The exact mechanics matter less than the direction: someone is coming, someone from Judah&apos;s line, and to him the gathering of the peoples will be.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-foal-vine',
          title: 'Assir — &ldquo;binding the foal to the vine&rdquo;',
          script: 'אַסִּר חֲמוֹר לַגֶּפֶן',
          translit: '<strong>assir chamor lagepen</strong> · binding a foal to the vine',
          description:
            'This poetic image describes abundance: the vine is so fruitful that you can afford to tie your donkey to it. (Normally a vine is precious; an animal would eat it.) In Matthew 21, when Jesus rides into Jerusalem on a donkey (the foal of an ass), the people greet him with branches — echoing this image of the King coming in gentleness and plenty.',
        },
        {
          kind: 'commentary',
          id: 'c-wine-milk',
          html:
            'The final image is of plenty and peace. Wine-soaked garments. Teeth white from milk. These are the signs of a land flowing with blessing. Yet in this chapter of curses and scattered tribes, only Judah gets the vision of abundance. Only Judah is promised not just survival but flourishing.',
        },
        {
          kind: 'carry',
          html:
            'Jacob is old and dying. He has lived a long life — deceptive, hard, marked by struggle and exile. Yet when he speaks of the future that matters most, he speaks of Judah and the One who is coming. His deepest hope is not in what his sons will build or conquer; it is in Someone who will come later, to whom the nations will gather. What is the deepest hope you live toward? Is it your own success, or is it Someone else&apos;s kingdom?',
        },
        {
          kind: 'reflection',
          id: 'gen49-shiloh',
          prompt: 'What does it mean to you that even in pronouncing fates, Jacob&apos;s hope pivots to Someone coming? Where is your own hope anchored?',
        },
      ],
    },

    /* ─── Genesis 49:13–15 — Zebulun and Issachar ───────────────────────────── */
    {
      ref: 'Genesis 49:13–15',
      title: 'Zebulun and Issachar',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            {
              number: 13,
              spans: [
                t('Zebulun shall dwell at the haven of the sea; and he shall be for an haven of ships; and his border shall be unto Zidon.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Issachar is a strong ass couching down between two burdens:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And he saw that rest was good, and the land that it was pleasant; and bowed his shoulder to bear, and became a servant unto tribute.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-zebulun-trader',
          html:
            'Zebulun will be maritime — a sea people, traders, merchants. This matches their later history: the tribe lives on the coast near Sidon and becomes known for commerce. The promise is not of conquest but of trade and connection.',
        },
        {
          kind: 'commentary',
          id: 'c-issachar-burden',
          html:
            'Issachar is described as a strong ass (a donkey) lying down between two burdens. The image is of a beast of burden — strong enough to carry weight, but choosing rest in the middle of work. The tribe will stay in one place, work the soil, and eventually accept subjection to tribute (paying taxes to others). Unlike Judah, Issachar is not called to lead; they are called to serve and endure.',
        },
        {
          kind: 'carry',
          html:
            'Not every calling is a calling to rule. Zebulun is called to connect and trade. Issachar is called to work and rest, to serve and stay. There is dignity in both. The question isn&apos;t whether your role is prominent; it&apos;s whether you are faithful to the role you have been given. What work has been given to you that you are tempted to despise because it&apos;s not more visible?',
        },
        {
          kind: 'reflection',
          id: 'gen49-issachar',
          prompt: 'Issachar "saw that rest was good" and chose faithfulness over escape. What keeps you faithful to the work you&apos;ve been given?',
        },
      ],
    },

    /* ─── Genesis 49:16–19 — Dan and Gad: Watchful Judges ──────────────────── */
    {
      ref: 'Genesis 49:16–19',
      title: 'Dan and Gad: Watchful Judges',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            {
              number: 16,
              spans: [
                t('Dan shall judge his people, as one of the tribes of Israel.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Dan shall be a '),
                hy('serpent by the way', 'hebrew-serpent-dan'),
                t(', an adder in the path, that biteth the horse heels, so that his rider shall fall backward.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('I have waited for thy '),
                hp('salvation, O LORD', 'jacob-salvation'),
                t('.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Gad, a troop shall overcome him: but he shall overcome at the last.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dan-judge',
          html:
            'Dan is promised the role of judge — authority to decide for his people. But the image that follows is darker. A serpent in the way. A bite that brings down riders. This is the only oracle that is openly negative — more akin to the curses on Reuben, Simeon, and Levi. Dan&apos;s judgment will be sharp, even treacherous. (Later, the tribe of Dan becomes associated with idolatry and is omitted from Revelation&apos;s list of the twelve tribes.)',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-serpent-dan',
          title: 'Nakhash — &ldquo;serpent&rdquo; (again)',
          script: 'נָחָשׁ',
          translit: '<strong>nakhash</strong> · serpent; also (as a verb) to hiss, to practice divination, to deceive',
          description:
            'This is the same root as in Genesis 3:1 — the serpent in the garden. The association is ominous. Dan&apos;s judgment will be subtle, dangerous, possibly deceptive.',
        },
        {
          kind: 'commentary',
          id: 'c-jacob-waits',
          html:
            'Then Jacob stops. In the middle of pronouncing blessings on his sons, he breaks off the poetry and cries out to God. This verse (18) stands alone — no oracle, no warning, no tribal prophecy. Just a personal cry from an old man: "I have waited for thy salvation, O LORD." The Hebrew word is <em>yeshuathekha</em> — "thy yeshua, thy salvation." The very name that will one day belong to Jesus is in this cry. Jacob is saying: I have blessed my sons, but I am still waiting for You.',
        },
        {
          kind: 'christ',
          id: 'jacob-salvation',
          title: 'Christ Connection — Jacob&apos;s Waiting Cry',
          html:
            'In the middle of blessing his sons, Jacob interrupts himself: "I have waited for thy salvation, O LORD." The Hebrew word for salvation is <em>yeshuah</em> — and this is the root of the name <em>Yeshua</em>, Jesus. Jacob&apos;s cry echoes through the centuries. He is naming the One whose name we now know. The blessing of his sons is not enough. The future of his tribes is not enough. His deepest longing, at the end of his life, is for the Saviour whose coming he cannot see but somehow knows he needs.',
        },
        {
          kind: 'commentary',
          id: 'c-gad-overcome',
          html:
            'Gad will be overcome by a troop, but he will overcome at the last. The tribe faces enemies but perseveres. Unlike the curses on earlier tribes, this is a word of endurance and eventual victory.',
        },
        {
          kind: 'carry',
          html:
            'Jacob&apos;s interruption is the most honest moment in the chapter. He is blessing his sons, but his deepest need is not for them — it is for his salvation. What are you working toward that cannot satisfy the deepest longing in you? Where is the hope that keeps you awake at night pointing you — toward what you can build, or toward Someone you are waiting for?',
        },
        {
          kind: 'reflection',
          id: 'gen49-waiting',
          prompt: 'What has Jacob waiting all his life? And what does it mean that his last cry, as a dying man, is not about his own story but about Someone coming?',
        },
      ],
    },

    /* ─── Genesis 49:20–21 — Asher and Naphtali: Pleasure and Grace ────────── */
    {
      ref: 'Genesis 49:20–21',
      title: 'Asher and Naphtali: Pleasure and Grace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            {
              number: 20,
              spans: [
                t('Out of Asher his bread shall be fat, and he shall yield royal dainties.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Naphtali is a hind let loose: he giveth goodly words.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-asher-plenty',
          html:
            'Asher will have abundance — rich bread, royal food. His land will be fertile. His life will be marked by provision and pleasure. This is a straightforward blessing. No warning, no complication. Asher is simply promised prosperity.',
        },
        {
          kind: 'commentary',
          id: 'c-naphtali-grace',
          html:
            'Naphtali is a hind (a deer) — beautiful, swift, and graceful. He gives goodly words — eloquence, speech, persuasion. Unlike Asher&apos;s earthly plenty, Naphtali is blessed with beauty and the gift of words.',
        },
        {
          kind: 'carry',
          html:
            'Not all blessings are the same. Asher is promised food. Naphtali is promised eloquence and beauty. Both are called good, but they are different goods. What has been given to you that you sometimes wish was something else — more visible, more quantifiable, more obviously powerful? And what would it look like to receive it gladly as your particular share?',
        },
        {
          kind: 'reflection',
          id: 'gen49-asher',
          prompt: 'What do you have plenty of that you take for granted? What gift would you like to have instead, and why?',
        },
      ],
    },

    /* ─── Genesis 49:22–26 — Joseph: The Blessed Son ───────────────────────── */
    {
      ref: 'Genesis 49:22–26',
      title: 'Joseph: The Blessed Son',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            {
              number: 22,
              spans: [
                t('Joseph is a fruitful bough, even a fruitful bough by a well; whose branches run over the wall:'),
              ],
            },
            {
              number: 23,
              spans: [
                t('The archers have sorely grieved him, and shot at him, and hated him:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('But his bow abode in strength, and the arms of his hands were made strong by the hands of the mighty God of Jacob; (from thence is the shepherd, the '),
                hp('stone of Israel', 'joseph-stone'),
                t(':)'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Even by the God of thy father, who shall help thee; and by the Almighty, who shall bless thee with blessings of heaven above, blessings of the deep that lieth under, blessings of the breasts, and of the womb:'),
              ],
            },
            {
              number: 26,
              spans: [
                t('The blessings of thy father have prevailed above the blessings of my progenitors unto the utmost bound of the everlasting hills: they shall be on the head of Joseph, and on the crown of the head of him that was separate from his brethren.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-joseph-fruitful',
          html:
            'Joseph is the longest blessing — five verses instead of one or two. He is called fruitful, blessed, persecuted, and ultimately triumphant. The image is of a fruit tree whose branches grow over a wall (spilling abundance beyond his own territory). Archers have attacked him — he was sold into slavery, imprisoned falsely, torn from his family. But he remained strong.',
        },
        {
          kind: 'christ',
          id: 'joseph-stone',
          title: 'Christ Connection — Joseph the Stone',
          html:
            'Joseph is called the "stone of Israel" — the strong foundation. This image echoes through Isaiah ("Behold, I lay in Zion a stone, a tried stone, a precious corner stone, a sure foundation" (Isa. 28:16)) and 1 Peter ("To whom coming, as unto a living stone…ye also, as lively stones, are built up" (1 Pet. 2:4-5)). Joseph is a type of the cornerstone — rejected by his brothers, raised to power, on whose strength a whole nation rests. The pattern is written into his life before Christ ever lived it.',
        },
        {
          kind: 'commentary',
          id: 'c-everlasting-hills',
          html:
            'Jacob says the blessings on Joseph surpass even the blessings of his own ancestors (Abraham and Isaac) and extend "unto the utmost bound of the everlasting hills." These are the hills that will stand long after kingdoms fall. Joseph&apos;s blessing is permanent, cosmic in scale.',
        },
        {
          kind: 'carry',
          html:
            'Joseph was attacked, rejected, exiled, imprisoned. By human measure, he should have been broken. But he became strong — not because he was never hurt, but because his strength was made by the hands of the Mighty God. The archers came, but they could not kill what God was building in him. What attack or rejection have you survived that you now see God using as part of your strength?',
        },
        {
          kind: 'reflection',
          id: 'gen49-joseph',
          prompt: 'Joseph was persecuted and still blessed. When has something painful in your life become part of your fruitfulness instead of the end of it?',
        },
      ],
    },

    /* ─── Genesis 49:27 — Benjamin: The Wolf ────────────────────────────────── */
    {
      ref: 'Genesis 49:27',
      title: 'Benjamin: The Wolf',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            {
              number: 27,
              spans: [
                t('Benjamin shall ravin as a wolf: in the morning he shall devour the prey, and at night he shall divide the spoil.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-benjamin-wolf',
          html:
            'Benjamin, the youngest, is described as a devouring wolf — a predator who hunts in the morning and divides spoils at night. This tribe will be fierce, aggressive, skilled in warfare. (Later, the greatest warrior of Israel, King Saul, will come from Benjamin. So will the apostle Paul, who describes his own severity.) It is the briefest oracle in the chapter, but it is unmistakable: Benjamin will be dangerous.',
        },
        {
          kind: 'carry',
          html:
            'Some callings are to gentleness. Others are to strength. Some are to sit and study; others are to rise and fight. The tribes are different. Benjamin is called to be fierce. The question is not whether to change your nature, but whether to aim it rightly — toward what is actually worth devouring, not toward your own family.',
        },
        {
          kind: 'reflection',
          id: 'gen49-benjamin',
          prompt: 'What fierceness or intensity have you been given? Are you using it toward what matters, or toward what is in front of you?',
        },
      ],
    },

    /* ─── Genesis 49:28–33 — Jacob&apos;s Death and Burial ─────────────────────── */
    {
      ref: 'Genesis 49:28–33',
      title: 'Jacob&apos;s Death and Burial',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            {
              number: 28,
              spans: [
                t('All these are the twelve tribes of Israel: and this is it that their father spake unto them, and blessed them; every one according to his blessing he blessed them.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And he charged them, and said unto them, I am to be gathered unto my people: bury me with my fathers in the cave that is in the field of Ephron the Hittite,'),
              ],
            },
            {
              number: 30,
              spans: [
                t('In the cave that is in the field of Machpelah, which is before Mamre, in the land of Canaan, which Abraham bought with the field of Ephron the Hittite for a possession of a buryingplace.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('There they buried Abraham and Sarah his wife; there they buried Isaac and Rebekah his wife; and there I buried Leah.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('The purchase of the field and of the cave that is therein was from the children of Heth.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And when Jacob made an end of commanding his sons, he gathered up his feet into the bed, and yielded up the ghost, and was gathered unto his people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blessing-complete',
          html:
            'Each son has been blessed according to what Jacob sees in him. Curses and blessings both — the truth delivered in love. The blessings are not uniformly gentle, but they are true.',
        },
        {
          kind: 'commentary',
          id: 'c-burial-instruction',
          html:
            'Jacob makes one final command before he dies: bury me with my fathers. Not in Egypt where he lives, but in Canaan — in the cave of Machpelah, where Abraham and Isaac were buried, where he himself buried Leah. This land, which he never fully possessed in his lifetime, is where he wants to rest. He is declaring, with his death, that his faith is in the promise. Canaan is home.',
        },
        {
          kind: 'commentary',
          id: 'c-gathered-feet',
          html:
            'The final image: he gathers up his feet into the bed and yields up the ghost. It is gentle, complete, finished. A man in his right mind, having done what he came to do, letting go. He was "gathered unto his people" — the ancient phrase for joining the assembly of the dead, the communion of saints.',
        },
        {
          kind: 'carry',
          html:
            'Jacob lived 147 years — a long life marked by struggle and faith, deception and transformation. He ends it not by avoiding the hard truths about his sons, but by speaking them clearly. Then he lies down, ready to die. What does it look like to live long enough to be honest, and to die ready? What would you like to have said before you gather up your feet?',
        },
        {
          kind: 'reflection',
          id: 'gen49-death',
          prompt: 'Jacob gathered up his feet, having said what needed to be said. What needs to be said in your life before it&apos;s too late?',
        },
      ],
    },

    /* ─── Divider before artwork ────────────────────────────────────────────── */
    {
      blocks: [{ kind: 'divider' }],
    },

    /* ─── Artwork: Judah and Scepter ───────────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'artwork',
          matchTitle: /judah/i,
          caption: 'Genesis 49:8–12 — Judah receives the scepter.',
        },
      ],
    },

    /* ─── Artwork: Jacob blessing his sons ────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'artwork',
          matchTitle: /jacob.*blessing|blessing.*sons/i,
          caption: 'Genesis 49 — Jacob blesses his twelve sons.',
        },
      ],
    },

    /* ─── Artwork: The Lion (Judah&apos;s symbol) ────────────────────────────── */
    {
      blocks: [
        {
          kind: 'artwork',
          matchTitle: /lion/i,
          matchArtist: /tissot/i,
          caption: 'Genesis 49:9 — Judah is a lion&apos;s whelp.',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Genesis 49',
    quote:
      'The sceptre shall not depart from Judah, nor a lawgiver from between his feet, until Shiloh come; and unto him shall the gathering of the people be. In the middle of blessing his sons, Jacob cried out: I have waited for thy salvation, O LORD.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 49 · Study Guide',
  },

  hasHebrew: true,
};
