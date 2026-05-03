import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Samuel 1 — Hannah's Prayer and Samuel's Birth
 *
 * The book of Samuel opens not with armies but with a barren woman praying.
 * In Hannah's silent prayer, we see the first appearance of "Lord of hosts"
 * and the birth of the prophet Samuel — whose name means "asked of God" —
 * a child given back to the Lord as a Nazirite. The chapter echoes throughout
 * the New Testament and points directly to Mary and the birth of Christ.
 */
export const SAMUEL_1_1: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 1,

  estimatedMinutes: { beginner: 8, intermediate: 15, deep: 19 },
  intros: [
    'The book of Samuel marks a turning point in Israel\'s story — a shift from the chaotic era of judges to the age of kings and prophets. But it does not open with a battle or a coronation. It opens with Hannah, a barren woman, weeping in the house of the Lord. Her prayer — silent, unheard by the priest — will change the course of a nation. Samuel, the son she bears, will anoint Israel\'s kings and speak God\'s word with unbreakable authority. Before armies, before thrones, before everything that seems to make a nation great, there is a woman\'s prayer.',
    'In Hannah\'s story we meet a new name for God: "Lord of hosts" — YHWH Tzva\'ot, the God of armies. He is first revealed not in battle but to one suffering woman. And in Samuel we find the pattern that will echo through the New Testament: God answering the prayer of a woman for an impossible birth, a child dedicated back to Him, a life that belongs entirely to God. The line runs from Hannah to Mary, and both point to Jesus.',
  ],

  opener: {
    matchArtist: /tissot|delacroix/i,
    matchTitle: /hannah|prayer/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Samuel 1',
    quote:
      'Hannah, barren and grieved, prayed in silence at the house of the Lord. God heard her prayer and gave her a son, Samuel — a child she dedicated wholly to the Lord, the beginning of the prophet\'s line.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 1 · Study Guide',
  },

  sections: [
    /* ─── 1 Samuel 1:1–8 — Elkanah and His Two Wives ──────────────────── */
    {
      ref: '1 Samuel 1:1–8',
      title: 'Elkanah and His Two Wives',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('Now there was a certain man of '),
                hy('Ramathaim-zophim', 'c-ramathaim'),
                t(', of mount Ephraim, and his name was '),
                hg('Elkanah', 'c-elkanah'),
                t(', the son of Jeroham, the son of Elihu, the son of Tohu, the son of Zuph, an Ephrathite:'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he had two wives; the name of the one was Hannah, and the name of the other Peninnah: and Peninnah had children, but '),
                hg('Hannah had no children', 'c-barren'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ramathaim',
          html:
            'Ramathaim-zophim is in the hill country of Ephraim, in central Palestine. The name means "two hills of the watchers" — a place on a height, a place of watching. Hannah will be remembered here, and generations will watch what God does through her.',
        },
        {
          kind: 'commentary',
          id: 'c-elkanah',
          html:
            'Elkanah is himself a Levite, a line running back through Zuph to ancient priestly stock. He is a man of faith, a man who "went up yearly" to worship. The genealogy matters — God&apos;s work runs through family lines, even when a line appears broken.',
        },
        {
          kind: 'commentary',
          id: 'c-barren',
          html:
            'Hannah is barren. In the ancient world, to be barren was to be cursed, to be suspect, to be less than a woman — or so the culture whispered. The Bible does not explain why God closes a womb. It simply tells us Hannah has none, and then watches what happens when one woman prays.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 3,
              spans: [
                t('And this man went up out of his city yearly to worship and to '),
                hg('sacrifice unto the Lord of hosts', 'c-yahweh-tzvaot'),
                t(' in Shiloh. And the two sons of Eli, Hophni and Phinehas, the priests of the Lord, were there.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-yahweh-tzvaot',
          title: 'YHWH Tzva\'ot — "Lord of Hosts"',
          script: 'יְהוָה צְבָאוֹת',
          translit: '<strong>Yahweh Tzva&apos;ot</strong> · The Lord of armies; God of the heavenly hosts',
          description:
            'This is the first appearance of this name for God in Scripture. The God of armies is first revealed not on a battlefield but in the ears of a barren woman praying. The armies of heaven belong to Him; but He bends to hear the cry of one woman.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 4,
              spans: [
                t('And when the time was that Elkanah offered, he gave to Peninnah his wife, and to all her sons and her daughters, portions:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('But unto Hannah he gave a '),
                hg('worthy portion', 'c-portion'),
                t('; for he loved Hannah: but the Lord had shut up her womb.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-portion',
          html:
            'Elkanah loves Hannah. When the sacrifice is divided, she receives double — a worthy portion — even though she has no children. His love is not conditional on her fertility. In a culture that measured a woman&apos;s value by the children she bore, Elkanah honors her as a person.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 6,
              spans: [
                t('And her adversary also provoked her sore, for to '),
                hg('make her fret', 'c-fret'),
                t(', because the Lord had made her barren.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And as he did so year by year, when she went up to the house of the Lord, so she provoked her; therefore she wept, and did not eat.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Then said Elkanah her husband to her, Hannah, why weepest thou? and why eatest thou not? and why is thy heart grieved? am not I better to thee than ten sons?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fret',
          html:
            'Year after year, Peninnah provokes Hannah — a quiet cruelty, repeated on purpose, timed to Hannah&apos;s deepest wound. The text calls Peninnah Hannah&apos;s "adversary." Jealousy and shame intertwine. And Elkanah, loving as he is, cannot heal this wound with ten sons&apos; worth of love. Some griefs can only be brought to God.',
        },
        {
          kind: 'carry',
          html:
            'You may be in a place where the thing you most want — a child, a marriage, a health, a calling, a reconciliation — is the one thing that remains closed to you. And you may have people around you who, knowingly or not, keep poking the wound. Elkanah loved Hannah, and it was not enough. But Elkanah kept bringing her to the house of the Lord. Some of the best love is simply bringing someone into the presence of God and letting Him do what we cannot.',
        },
        {
          kind: 'reflection',
          id: 'elkanah-wives',
          prompt:
            'Where in your life is there a grief that human love and comfort, though real, cannot heal? What would it look like to bring it directly to God, as Hannah did?',
        },
      ],
    },

    /* ─── 1 Samuel 1:9–18 — Hannah's Silent Prayer ────────────────────── */
    {
      ref: '1 Samuel 1:9–18',
      title: 'Hannah\'s Prayer in Silence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 9,
              spans: [
                t('So Hannah rose up after they had eaten in Shiloh, and after they had drunk. Now Eli the priest sat upon a seat by a post of the temple of the Lord.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And she was in bitterness of soul, and '),
                hg('prayed unto the Lord', 'c-prayed'),
                t(', and '),
                hg('wept sore', 'c-weeping'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-prayed',
          html:
            'Hannah leaves the meal, leaves Peninnah&apos;s voice, and goes to the temple. The act itself is prayer — the turning away from what grieves, the turning toward God. She stands before the Lord in what the text calls "bitterness of soul." Not a polite sadness. A grief that has a voice.',
        },
        {
          kind: 'commentary',
          id: 'c-weeping',
          html:
            'The Hebrew for "wept sore" is <em>bakah</em> — a word for deep weeping, tears that cannot be held back. This is not suppressed sorrow. This is a woman whose body is speaking what her mouth cannot yet shape into words.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 11,
              spans: [
                t('And she vowed a vow, and said, O '),
                hp('Lord of hosts', 'hannah-yahweh-tzvaot'),
                t(', if thou wilt indeed look on the affliction of thine handmaid, and remember me, and not forget thine handmaid, but wilt give unto thine handmaid a '),
                hy('man child', 'c-man-child'),
                t(', then I will '),
                hg('give him unto the Lord', 'c-devoted'),
                t(' all the days of his life, and '),
                hy('there shall no rasor come upon his head', 'c-nazirite'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hannah-yahweh-tzvaot',
          html:
            'Hannah addresses God by His new name — Lord of hosts. She, a woman with no power, no army, no position, cries out to the God of armies. She prays to the One who commands the hosts of heaven. And He listens.',
        },
        {
          kind: 'commentary',
          id: 'c-man-child',
          html:
            'Hannah does not ask for any child. She asks for "a man child" — a son. In the ancient world, a son meant inheritance rights, survival of the family line, fulfillment of a woman&apos;s deepest calling. She is asking for everything her culture has told her she needs.',
        },
        {
          kind: 'commentary',
          id: 'c-devoted',
          html:
            'And here is the extraordinary part: Hannah vows that if God gives her a son, she will give him back. Not to Elkanah, not to his family line — to the Lord. All the days of his life. She will bear him, nurse him, raise him — and then release him to belong wholly to God.',
        },
        {
          kind: 'hebrew',
          id: 'c-nazirite',
          title: 'No Rasor Upon His Head — The Nazirite Vow',
          script: 'לֹא יַעֲלֶה מוּר עַל־רֹאשׁוֹ',
          translit: 'No rasor shall come upon his head',
          description:
            'Hannah vows a Nazirite dedication for her son — the same vow that bound Samson (Judges 13:5). The unshorn hair is the sign of one wholly set apart to the Lord. But unlike Samson, whose Nazirite vow was imposed from birth by God, Samuel&apos;s is a gift — his mother&apos;s offering, made freely.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 12,
              spans: [
                t('And it came to pass, as she continued praying before the Lord, that Eli marked her mouth.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Now Hannah, she spake in her '),
                hg('heart', 'c-heart'),
                t('; only her lips moved, but her voice was not heard: therefore Eli thought she had been drunken.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Eli said unto her, How long wilt thou be drunken? put away thy wine from thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-heart',
          html:
            'Hannah prays in her heart. Her lips move, but no sound comes out. She is so entirely alone with God, so deep in her own grief, that she has forgotten the world — forgotten that anyone is watching. Her prayer is purely between her and the Lord of hosts.',
        },
        {
          kind: 'christ',
          id: 'hannah-prayer',
          title: 'Christ Connection — Prayer in Secret',
          html:
            'Jesus will later tell His disciples: "When thou prayest, enter into thy closet, and when thou hast shut to thy door, pray to thy Father which is in secret; and thy Father which seeth in secret shall reward thee openly" (Matt. 6:6). Hannah, centuries before, is praying exactly as Jesus will teach — not for an audience, not even speaking aloud, but from the depth of a heart that only God sees. Her prayer is answered not because it is eloquent or loud, but because it is true.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 15,
              spans: [
                t('And Hannah answered and said, No, my lord, I am a woman of a '),
                hy('sorrowful spirit', 'c-sorrowful-spirit'),
                t(': I have drunk neither wine nor strong drink, but have poured out my soul before the Lord.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Count not thine handmaid for a '),
                hy('daughter of Belial', 'c-belial'),
                t(': for out of the abundance of my complaint and grief have I spoken hitherto.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sorrowful-spirit',
          html:
            'Hannah is not defensive. She simply tells Eli the truth: "I am a woman of a sorrowful spirit." She names her condition plainly. She has not been hiding her grief — Eli just mistook it for intoxication. There is honesty in her answer: the wound is real, the prayer is real, and God sees.',
        },
        {
          kind: 'commentary',
          id: 'c-belial',
          html:
            '"Daughter of Belial" — a daughter of worthlessness, of wickedness. Hannah is asking Eli not to judge her as a woman breaking ranks, as someone behaving inappropriately. She is asking to be seen truly: not as a drunk, not as someone of bad character, but as someone pouring out her soul.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 17,
              spans: [
                t('Then Eli answered and said, Go in peace: and the God of Israel grant thee thy petition that thou hast asked of him.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And she said, Let thine handmaid find grace in thy sight. So the woman went her way, and did eat, and her countenance was no more sad.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'eli-blessing',
          html:
            'Eli, the high priest, blesses Hannah. He releases her with a word: "Go in peace. The God of Israel grant thee thy petition." And something shifts. She rises from her knees, goes back to eat, and "her countenance was no more sad." Not because her prayer has been answered yet — but because she has brought her petition to the Lord of hosts, and a priest has confirmed it. The burden has been placed somewhere else.',
        },
        {
          kind: 'carry',
          html:
            'You may be carrying something right now that no amount of comfort from those around you can lift — a grief, a longing, a wound that only God can address. Hannah did not hide it. She did not pretend to be okay. She went to the house of the Lord and wept before Him, in silence, knowing that He was watching. And her countenance changed — not because the prayer was immediately answered, but because someone had finally seen her. God had seen her. Bring what you are carrying to Him. He sees.',
        },
        {
          kind: 'reflection',
          id: 'hannah-prayer-2',
          prompt:
            'What would it be like to pray as Hannah did — in silence, entirely to God, without needing anyone to hear or understand? What are you carrying that needs to be poured out before the Lord?',
        },
      ],
    },

    /* ─── 1 Samuel 1:19–20 — The Child Given ──────────────────────────── */
    {
      ref: '1 Samuel 1:19–20',
      title: 'The Lord Remembered Her',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 19,
              spans: [
                t('And they rose up in the morning early, and worshipped before the Lord, and returned, and came to their house to Ramah: and '),
                hg('Elkanah knew Hannah his wife', 'c-knew'),
                t('; and '),
                hp('the Lord remembered her', 'c-remembered'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-knew',
          html:
            'The text is deliberate in its language. "Elkanah knew Hannah his wife" — the language of the marital act, of intimacy, of covenant. And at that moment, something opened. The Lord remembered her.',
        },
        {
          kind: 'commentary',
          id: 'c-remembered',
          html:
            'To be "remembered" by God in Scripture is not merely to be thought of. It is to be acted toward. When God "remembered" Noah, the waters receded (Genesis 8:1). When He "remembered" Rachel, she conceived (Genesis 30:22). The same word here: the Lord remembered Hannah. What was closed opened. What was barren bore fruit.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 20,
              spans: [
                t('Wherefore it came to pass, when the time was come about after Hannah had conceived, that she bare a son, and called his name '),
                hy('SAMUEL', 'hebrew-samuel'),
                t(', saying, Because I have '),
                hg('asked him of the Lord', 'c-samuel-name'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-samuel',
          title: 'Samuel — "Asked of the Lord"',
          script: 'שְׁמוּאֵל',
          translit: '<strong>Shemuel</strong> · heard by God; asked of God',
          description:
            'The name "Samuel" or "Shemuel" comes from the Hebrew root for "asking" and the name of God. Some traditions read it as "asked of God" (what the text itself says: "Because I have asked him of the Lord"). Others as "heard of God" or "God heard." Either way, the name embeds Hannah&apos;s prayer in the child&apos;s identity. He is called Samuel because his mother prayed.',
        },
        {
          kind: 'commentary',
          id: 'c-samuel-name',
          html:
            'Hannah names her son in plain sight of the prayer that brought him into being. She does not hide the miracle. She does not let anyone pretend he simply appeared. She says: "Because I have asked him of the Lord." The boy&apos;s name is a testimony.',
        },
        {
          kind: 'christ',
          id: 'impossible-birth',
          title: 'Christ Connection — The Prayer for an Impossible Birth',
          html:
            'Centuries later, an old woman named Elizabeth will also be barren. Her husband Zechariah will be in the temple, just as Eli was, and an angel will appear — not to a woman in bitterness of soul, but to a priest. Zechariah will be struck speechless for doubting (Luke 1:20). And then Mary will come, a young woman, and sing a song that echoes Hannah&apos;s prayer so closely that the two prayers seem to be the same prayer across centuries: "My soul doth magnify the Lord, and my spirit hath rejoiced in God my Saviour… He hath shown strength with his arm; he hath scattered the proud in the imagination of their hearts… He hath filled the hungry with good things" (Luke 1:46–53). Hannah prayed for Samuel. Mary bore Jesus. And the God who "remembered" Hannah is the God who sent His Son into the world through the willingness of a woman to let go of what she had asked for and give it wholly to Him.',
        },
        {
          kind: 'carry',
          html:
            'If something has been closed to you — a prayer that has waited, a longing that has been denied — the God who remembered Hannah remembers you. He is not bound by what seems final. And when He opens what was shut, it is not so that you can hold it safely as your own. It is so you can give it back to Him, transformed by the fact that you had to ask. Samuel belonged to his mother and to his father — but he belonged first and finally to the Lord of hosts.',
        },
        {
          kind: 'reflection',
          id: 'remembered',
          prompt:
            'What has God answered in your life that came after you had to wait, or ask, or grieve? What became different because you had to bring it to Him?',
        },
      ],
    },

    /* ─── 1 Samuel 1:21–28 — Given Back to the Lord ──────────────────── */
    {
      ref: '1 Samuel 1:21–28',
      title: 'Given Back to the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 21,
              spans: [
                t('And the man Elkanah, and all his house, went up to offer unto the Lord the yearly sacrifice, and his vow:'),
              ],
            },
            {
              number: 22,
              spans: [
                t('But Hannah went not up; for she said unto her husband, I will not go up until the child be weaned, and then I will bring him, that he may appear before the Lord, and there abide '),
                hg('for ever', 'c-forever'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-forever',
          html:
            'Hannah does not forget her vow. While Elkanah goes up yearly to worship, Hannah stays home with Samuel, nursing him, caring for him, loving him — and waiting for the moment when she will release him. The child is fully hers, fully loved. And she is preparing to give him away.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 23,
              spans: [
                t('And Elkanah her husband said unto her, Do what seemeth thee good; tarry until thou have weaned him; only the Lord '),
                hg('establish his word', 'c-word'),
                t('. So the woman abode, and gave her son suck until she had weaned him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-word',
          html:
            'Elkanah releases Hannah to care for Samuel in her own time, and then he speaks a blessing: "Only the Lord establish his word." Not "give us a son," but "establish His word." Elkanah knows that Samuel is not theirs to keep. He is the Lord&apos;s.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 24,
              spans: [
                t('And when she had weaned him, she took him up with her, with three bullocks, and one ephah of flour, and a bottle of wine, and brought him unto the house of the Lord in Shiloh: and the child was young.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-offering',
          html:
            'Hannah brings Samuel to Shiloh with an offering of three bullocks (a significant sacrifice), a large amount of flour, and wine. She does not bring him as though she were abandoning him. She brings him as a gift — with everything needed for a sacrifice, a feast, a covenant. She is keeping her vow.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 25,
              spans: [
                t('And they slew a bullock, and brought the child to Eli.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And she said, Oh my lord, as thy soul liveth, my lord, I am the woman that stood by thee here, praying unto the Lord.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('For this child I prayed; and the Lord hath given me my petition which I asked of him:'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Therefore also I have lent him to the Lord; as long as he liveth he shall be lent to the Lord. And he worshipped the Lord there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hannah-testimony',
          html:
            'Hannah speaks her testimony to Eli. She reminds him of the woman who stood by him, praying silently. She tells him: "For this child I prayed." The prayer is not a secret. It is a fact. And then she says the extraordinary thing: "Therefore also I have lent him to the Lord; as long as he liveth he shall be lent to the Lord." She did not beg for a son to keep. She asked for a son to return. And she does.',
        },
        {
          kind: 'carry',
          html:
            'What Hannah asks for and what Hannah keeps are two different things. She asked the Lord of hosts for a child. She received Samuel. But she does not keep him. She lends him to the Lord. And the way she says it — "he shall be lent to the Lord" — suggests a permanence. Not "I lend him for a few years," but "lent to the Lord." As long as he lives, he is the Lord&apos;s. There is a pattern here for every parent, every person who loves. The thing we receive is not given so we can clutch it. It is given so we can pass it on, set it apart, release it to its highest calling. Samuel will become a prophet who speaks God&apos;s word without fear. He will anoint David as king. He will reshape Israel. And it is because his mother loved him enough to let him go.',
        },
        {
          kind: 'reflection',
          id: 'lent-to-lord',
          prompt:
            'What have you been given that you have been afraid to release? What would it look like to "lend it to the Lord" — to set it apart for His purpose rather than holding it for your own?',
        },
      ],
    },
  ],
};
