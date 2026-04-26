import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 35 — Jacob returns to Bethel.
 *
 * God calls Jacob back to the place where he first encountered the divine,
 * years and trials in the distant past. Before Bethel, Jacob purges his
 * household of idols, burying them under an oak. At Bethel, the covenant
 * is renewed and Jacob&apos;s new name, Israel, is sealed. Then Rachel dies
 * in childbirth, naming her son Ben-oni (son of sorrow) with her last breath;
 * Jacob renames him Benjamin (son of my right hand). Reuben commits a sin
 * that will echo through the generations. Isaac dies at 180, and his sons
 * bury him together.
 */
export const GENESIS_35: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 35,

  intros: [
    'Genesis 35 is a chapter about return and renewal. Jacob has been away from Bethel for more than twenty years. He has fled his father&apos;s house in fear, lived as a stranger in Haran, married, labored, and built a family in exile. Now God calls him back: <em>Arise, go up to Bethel, and dwell there.</em> It is a call to come home.',
    'But the homecoming is not simple. Before returning to the place where God first spoke to him, Jacob must deal with the gods his household has gathered — the idols of Laban&apos;s house, the trinkets of prosperity, the things that have slowly taken the place of devotion. He buries them under an oak and only then approaches Bethel. The chapter holds three deaths — Deborah, Rachel, Isaac — and Jacob keeps moving through each one. Sometimes faithfulness looks less like triumph and more like the simple choice to keep going.',
  ],

  sections: [
    /* ─── Genesis 35:1–5 — The Call to Bethel ───────────────────────────── */
    {
      ref: 'Genesis 35:1–5',
      title: 'The Call to Bethel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 1,
              spans: [
                t('And God said unto Jacob, '),
                hp('Arise, go up to Bethel, and dwell there', 'g35-return'),
                t(': and make there an altar unto God, that appeared unto thee when thou '),
                hg('fleddest from the face of thy brother Esau', 'g35-fled'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [t('Then Jacob said unto his household, and to all that were with him, Put away the '), hy('strange gods that are among you', 'g35-idols'), t(', and be clean, and change your garments:')],
            },
            {
              number: 3,
              spans: [
                t('And let us arise, and go up to Bethel; and I will make there an altar unto God, who answered me in the day of my distress, and was with me in the way which I went.'),
              ],
            },
            {
              number: 4,
              spans: [t('And they gave unto Jacob all the strange gods which were in their hand, and all their earrings which were in their ears; and Jacob hid them under the oak which was by Shechem.')],
            },
            {
              number: 5,
              spans: [t('And they journeyed: and the terror of God was upon the cities that were round about them, and they did not pursue after the sons of Jacob.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'g35-return',
          html:
            'God opens with memory: <em>Bethel, where I appeared to you when you fled from Esau.</em> That was Genesis 28, when Jacob was alone, on the run, broken. He dreamed of a ladder and saw God standing above it. Now, twenty years later, with two wives, twelve children, servants, and flocks, God calls him back. Return is not about coming home the same; it is about returning to remember who met you at your lowest and standing before Him again.',
        },
        {
          kind: 'commentary',
          id: 'g35-fled',
          html:
            'Esau has long since forgiven Jacob (they were reconciled in chapter 33). But God&apos;s recalling the original wound — the theft of the blessing, the fear that drove Jacob away, the night when God met him in desperation. God is saying: <em>Come back to the place where you learned I am the God who finds you in your exile.</em>',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-beitEl',
          title: 'Beit-El — &ldquo;house of God&rdquo;',
          script: 'בֵּית־אֵל',
          translit: '<strong>beit-el</strong> · house of God',
          description:
            'Bethel is not a house made with hands. It is the place where heaven touches earth, where the infinite God met a terrified man on a stone and made a covenant. Across Scripture, when people return to Bethel, it is to remember that encounter — to stand in the place where God was, and to be transformed.',
        },
        {
          kind: 'commentary',
          id: 'g35-idols',
          html:
            'Jacob&apos;s instruction is stark: <em>Put away the strange gods.</em> These are not the golden calves of later apostasy — they are the household gods of Laban, the teraphim Rachel stole, the minor divinities of prosperity and protection. They are what accumulates when you live far from the covenant. Before you can stand before God, you must let go of what you have held instead of Him.',
        },
        {
          kind: 'carry',
          html:
            'What are the &apos;strange gods&apos; in your own household — the small devotions you have picked up, the places you have been looking for protection and blessing besides the covenant God? They can look innocent enough. But before you can return to what you know God has for you, you may need to bury them. Not dramatically. Just truly. And then move.',
        },
        {
          kind: 'reflection',
          id: 'g35-return-prompt',
          prompt:
            'If God called you back to a place of faith you have been far from for years, what would you need to let go of first?',
        },
      ],
    },

    /* ─── Genesis 35:6–8 — The Oak of Weeping ──────────────────────────── */
    {
      ref: 'Genesis 35:6–8',
      title: 'The Oak of Weeping',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 6,
              spans: [t('So Jacob came to Luz, which is in the land of Canaan, that is, Bethel, he and all the people that were with him.')],
            },
            {
              number: 7,
              spans: [t('And he built there an altar, and called the place '), hy('El-Beth-el', 'g35-el-bethel'), t(': because there God appeared unto him, when he fled from the face of his brother.')],
            },
            {
              number: 8,
              spans: [t('But Deborah Rebekah&apos;s nurse died, and she was buried beneath Bethel under an '), hy('oak', 'g35-allon-bachuth'), t(': and the name of it was called '), hy('Allon-bachuth', 'g35-allon-bachuth'), t('.'),],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'g35-el-bethel',
          html:
            'Jacob renames the place <em>El-Beth-el</em> — &ldquo;the God of the house of God.&rdquo; It is a subtle shift. Bethel was the place where God appeared; El-Bethel is the God who appeared there. The accent moves from location to presence. Jacob is saying: <em>the covenant is not about geography. It is about the God who keeps His word everywhere.</em>',
        },
        {
          kind: 'commentary',
          id: 'g35-allon-bachuth',
          html:
            'Deborah — Rebekah&apos;s nurse, the woman who likely raised Jacob — has died and is buried under an oak at Bethel. Her death is mentioned in a single verse and then left behind. There is no eulogy, no weeping named in the text itself. Only the name: Allon-Bachuth, the oak of weeping. The Bible is spare with grief, sometimes, letting the name carry the weight. A nurse who shaped a child&apos;s earliest years is gone, and the world keeps turning.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-allon-bachuth',
          title: 'Allon-Bachuth — &ldquo;oak of weeping&rdquo;',
          script: 'אַלּוֹן בָּכוּת',
          translit: '<strong>allon</strong> · oak; <strong>bachuth</strong> · weeping, tears',
          description:
            'The oak itself is a memorial to grief. In later Jewish tradition, Deborah&apos;s burial here becomes a place of pilgrimage and prayer. A death at a threshold — a death at Bethel, where God meets His people — becomes a place where others come to remember and to grieve.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the people who shaped you most are the ones you lose quietly — a teacher, a nurse, a beloved elder whose name you don&apos;t always remember first. Yet they are the oak of weeping, the place where you return to remember what they taught you, the quiet strength they showed you. Honor that name, even briefly.',
        },
      ],
    },

    /* ─── Genesis 35:9–15 — The Name Confirmed ───────────────────────────── */
    {
      ref: 'Genesis 35:9–15',
      title: 'The Name Confirmed at Bethel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 9,
              spans: [
                t('And God appeared unto Jacob again, when he came out of Padan-aram, and '),
                hp('blessed him', 'g35-blessed-jacob'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And God said unto him, Thy name is Jacob: '),
                hy('thou shalt not be called any more Jacob, but Israel shall be thy name', 'g35-israel-name'),
                t(': and he called his name Israel.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And God said unto him, I am God Almighty: be fruitful and multiply; a nation and a company of nations shall be of thee, and kings shall come out of thy loins;'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the land which I gave Abraham and Isaac, to thee I will give it, and to thy seed after thee will I give the land.'),
              ],
            },
            {
              number: 13,
              spans: [t('And God went up from him in the place where he talked with him.')],
            },
            {
              number: 14,
              spans: [t('And Jacob set up a pillar in the place where he talked with him, even a pillar of stone: and he poured a drink offering thereon, and he poured oil thereon.')],
            },
            {
              number: 15,
              spans: [t('And Jacob called the name of the place where God spake with him, Bethel.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'g35-blessed-jacob',
          html:
            'God appears again to Jacob — the second time at Bethel, but the first time since Jacob became a father and a provider, a man who has labored and survived in a foreign land. The blessing is not for a fleeing boy; it is for the man Jacob has become. <em>He blessed him</em> — a simple statement that carries the weight of renewal.',
        },
        {
          kind: 'commentary',
          id: 'g35-israel-name',
          html:
            'The name Israel appears briefly in Genesis 32, in the wrestling at the Jabbok. Jacob asked the angel: &ldquo;Tell me, I pray thee, thy name.&rdquo; The angel did not answer his name, but renamed Jacob: <em>thy name shall be called no more Jacob, but Israel: for as a prince hast thou power with God and with men, and hast prevailed.</em> Here at Bethel, the name is confirmed as the permanent identity. Jacob is not &ldquo;deceiver&rdquo; anymore. He is Israel: <em>he who strives with God.</em>',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-israel',
          title: 'Yisra&apos;el — &ldquo;he who strives with God&rdquo;',
          script: 'יִשְׂרָאֵל',
          translit: '<strong>yisra&apos;el</strong> · he strives with God; yisra (contends) + el (God)',
          description:
            'The name encodes a wrestling match. Jacob&apos;s new identity is not rest or victory, but the ongoing striving of a man who will not let God go. Israel does not mean Jacob is done fighting — it means his fighting has been transformed into faith. Every descendant bears the name of someone who held God and would not release Him.',
        },
        {
          kind: 'christ',
          id: 'g35-israel-christ',
          title: 'Christ Connection — The Seed of Israel',
          html:
            'God promises Israel: &ldquo;a nation and a company of nations shall be of thee, and kings shall come out of thy loins.&rdquo; (35:11). Centuries later, Matthew traces Jesus&apos; lineage back to Abraham and Jacob: &ldquo;Jesus Christ, the son of David, the son of Abraham&rdquo; (Matt. 1:1). The promised Messiah comes as the King from the loins of Israel — a King not of an earthly empire, but of a kingdom that will never end (Luke 1:33). Jacob strove with God and held fast; the Seed of Israel will sit at God&apos;s right hand, having reconciled all who strive to the God who first wrestled with them.',
        },
        {
          kind: 'carry',
          html:
            'Your identity is not your worst moment, and it is not your last mistake. A new identity is waiting — one rooted not in who you were, but in who God has named you to be. Sometimes you have to wrestle to discover it, and sometimes you have to return to the place where God first met you to let the name sink in.',
        },
        {
          kind: 'reflection',
          id: 'g35-name-prompt',
          prompt:
            'What was Jacob&apos;s old name (the one meaning &apos;deceiver&apos;), and what did God rename him? What does it mean that your identity is not determined by your worst acts?',
        },
      ],
    },

    /* ─── Genesis 35:16–20 — Rachel's Death at Bethlehem ────────────────── */
    {
      ref: 'Genesis 35:16–20',
      title: 'Rachel&apos;s Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 16,
              spans: [t('And they journeyed from Bethel; and there was but a little way to come to Ephrath: and Rachel '), hg('travailed, and she had hard labour', 'g35-rachel-labour'), t('.')],
            },
            {
              number: 17,
              spans: [t('And it came to pass, when she was in hard labour, that the midwife said unto her, Fear not; thou shalt have this son also.')],
            },
            {
              number: 18,
              spans: [
                t('And it came to pass, as her soul was in departing, (for she died) that she called his name '),
                hy('Ben-oni', 'g35-ben-oni'),
                t(': but his father called his name '),
                hy('Benjamin', 'g35-benjamin'),
                t('.'),
              ],
            },
            {
              number: 19,
              spans: [t('And Rachel died, and was buried in the way to Ephrath, which is Bethlehem.')],
            },
            {
              number: 20,
              spans: [
                t('And Jacob set a pillar upon her grave: that is the pillar of Rachel&apos;s grave unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'g35-rachel-labour',
          html:
            'Rachel, the woman Jacob loved most, dies in childbirth on the road to Bethlehem. The text is spare about her suffering — &ldquo;hard labour&rdquo; — and spares us the details. What matters is that she is present at her son&apos;s naming, even as she is dying. One name comes from her: one from Jacob.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ben-oni-binyamin',
          title: 'Ben-oni · Binyamin — &ldquo;son of sorrow · son of my right hand&rdquo;',
          script: 'בֶּן־אוֹנִי · בִּנְיָמִין',
          translit: '<strong>ben-oni</strong> · son of sorrow; <strong>binyamin</strong> · son of the right hand',
          description:
            'Rachel names her last child for her grief. Ben-oni: son of my sorrow. But Jacob overrules her and names him Benjamin: son of my right hand. The same child holds two names — one from a dying mother, one from a living father. One name is the truth of the moment; the other is the truth of the promise. Both are real.',
        },
        {
          kind: 'commentary',
          id: 'g35-ben-oni',
          html:
            'Rachel&apos;s name is the most human thing in the chapter. A mother in extremis, naming her child for the pain of his birth, the loss of her life. She will not see him grow. Yet Jacob&apos;s renaming is not a denial of Rachel&apos;s name — it is an act of faith that this child, born in sorrow, will stand at God&apos;s right hand. Benjamin becomes the favorite of his older years, the son of Jacob&apos;s right hand.',
        },
        {
          kind: 'commentary',
          id: 'g35-benjamin',
          html:
            'Benjamin means &ldquo;son of the right hand.&rdquo; In biblical language, the right hand is the place of power, honor, protection. Jacob is saying: this son, born in sorrow, will be held by God&apos;s strength. The child loses his mother but gains a name that speaks not of his birth but of his destiny.',
        },
        {
          kind: 'christ',
          id: 'g35-ben-oni-messiah',
          title: 'Christ Connection — Son of Sorrow, Son of the Right Hand',
          html:
            'A child whose mother names him for pain, but whose father names him for honor. This is the pattern of Christ. Isaiah writes: &ldquo;a man of sorrows, and acquainted with grief&rdquo; (Isa. 53:3). Born into suffering, born for a cross. Yet Hebrews says of Jesus: &ldquo;who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high&rdquo; (Heb. 1:3). Both names are true of Him. The Son who knew sorrows knows ours. The Son who sits at God&apos;s right hand lifts us up with Him.',
          },
        {
          kind: 'carry',
          html:
            'You may have a name for yourself born in sorrow — a wound, a loss, a failure. But that is not your only name. God names you for the future He is building in you. Both names may be true: you may carry grief. But you are also being held at God&apos;s right hand, being shaped for a strength you have not yet seen.',
        },
        {
          kind: 'reflection',
          id: 'g35-rachel-prompt',
          prompt:
            'What name does your grief want to give you? What name does faith say God is calling you by instead?',
        },
        {
          kind: 'artwork',
          matchTitle: /rachel|bethlehem/i,
          matchArtist: /tissot|doré/i,
          caption: '35:16–20 · Rachel&apos;s Death near Bethlehem',
        },
      ],
    },

    /* ─── Genesis 35:21–26 — Reuben and the Twelve Tribes ────────────────── */
    {
      ref: 'Genesis 35:21–26',
      title: 'Reuben&apos;s Transgression and the Twelve',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 21,
              spans: [
                t('And Israel journeyed, and spread his tent beyond the tower of Edar.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And it came to pass, when Israel dwelt in that land, that '),
                hg('Reuben went and lay with Bilhah his father&apos;s concubine', 'g35-reuben'),
                t(': and Israel heard it. Now the sons of Jacob were twelve:'),
              ],
            },
            {
              number: 23,
              spans: [t('The sons of Leah; Reuben, Simeon, Levi, and Judah, Issachar, and Zebulun:')],
            },
            {
              number: 24,
              spans: [t('The sons of Rachel; Joseph, and Benjamin:')],
            },
            {
              number: 25,
              spans: [t('And the sons of Bilhah, Rachel&apos;s handmaid; Dan, and Naphtali:')],
            },
            {
              number: 26,
              spans: [t('And the sons of Zilpah, Leah&apos;s handmaid; Gad, and Asher: these are the sons of Jacob, which were born to him in Padan-aram.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'g35-reuben',
          html:
            'Reuben, the firstborn, commits a transgression: he sleeps with Bilhah, Rachel&apos;s handmaid and his stepmother. The Bible reports it in a single sentence and moves on. But this terse note carries weight. In Genesis 49, when Jacob blesses his sons, he will return to this sin: &ldquo;Reuben, thou art my firstborn… unstable as water, thou shalt not excel; because thou wentest up to thy father&apos;s bed.&rdquo; (49:3–4). The full reckoning comes later. For now, the text names the sin, and does not look away. But neither does it dwell.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes a wrong done in a moment will echo through your entire life. Reuben&apos;s transgression — brief, unnamed except in its barest fact — will cost him his inheritance as the firstborn. The text teaches that some choices cannot be taken back. But it also teaches that your worst moment is not the end of the story. Reuben is still one of the twelve, still Israel, still carried forward into the covenant.',
        },
        {
          kind: 'reflection',
          id: 'g35-reuben-prompt',
          prompt:
            'The Bible does not hide Reuben&apos;s sin, but neither does it destroy his place in the story. How does God hold both justice and mercy together?',
        },
      ],
    },

    /* ─── Genesis 35:27–29 — Isaac&apos;s Death ──────────────────────────── */
    {
      ref: 'Genesis 35:27–29',
      title: 'Isaac Dies, the Generations Gathered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 27,
              spans: [t('And Jacob came unto Isaac his father unto Mamre, unto the city of Arbah, which is Hebron, where Abraham and Isaac sojourned.')],
            },
            {
              number: 28,
              spans: [t('And the days of Isaac were an hundred and fourscore years.')],
            },
            {
              number: 29,
              spans: [
                t('And Isaac gave up the ghost, and died, and was '),
                hg('gathered unto his people', 'g35-isaac-death'),
                t(', being old and full of years: and his sons Esau and Jacob '),
                hp('buried him', 'g35-both-sons'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'g35-isaac-death',
          html:
            'Isaac dies at 180 years old — far longer than Abraham&apos;s 175, and in the same place where Abraham and he once dwelled. He is &ldquo;full of years&rdquo; — the biblical phrase for a life run to its natural completion. The phrase &ldquo;gathered unto his people&rdquo; is not escape or diminishment; it is completion. A long covenantal life, lived in the land God promised, dies here.',
        },
        {
          kind: 'commentary',
          id: 'g35-both-sons',
          html:
            'Esau and Jacob bury Isaac together. They have not seen each other since their reconciliation in chapter 33. Now they stand at their father&apos;s tomb as brothers, not as rivals. The cycle that began with Isaac &mdash; the favorite son, the son of promise — closes with both sons keeping him. The old man who played favorites, who loved Esau for the taste of venison and loved Jacob in his fear, is buried by them both.',
        },
        {
          kind: 'carry',
          html:
            'A life is long, and old age is its natural end. Isaac lived for 180 years in the land of the promise, and when his time came, he was full. His sons, once separated by betrayal and fear, came together at his grave. That reconciliation — brothers standing together over the body of the man who divided them — is the quiet victory of the chapter. Faithfulness does not always heal quickly. But it does heal.',
        },
        {
          kind: 'reflection',
          id: 'g35-isaac-prompt',
          prompt:
            'Isaac lived in the land God promised for 180 years, and at his death both sons gathered together. What does a &apos;full&apos; life look like?',
        },
        {
          kind: 'artwork',
          matchTitle: /bethel|jacob|canaan/i,
          matchArtist: /tissot|doré|rembrandt/i,
          caption: '35 · The Journey Back to Canaan',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Genesis 35',
    quote:
      'God called Jacob back to Bethel. Jacob buried the household idols, returned to the place where God first met him, and his name was confirmed as Israel. Rachel died bearing Benjamin. Isaac died at 180 years, and his sons buried him together.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 35 · Study Guide',
  },
};
