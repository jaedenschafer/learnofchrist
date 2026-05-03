import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Samuel 9 — Saul Found
 *
 * Kish's lost asses lead Saul to Samuel. A young man looking for lost animals
 * finds a kingdom. The chapter weaves divine foreknowledge with human search,
 * outward appearance with hidden destiny, and humble questions with a portion
 * prepared in advance.
 */
export const SAMUEL_1_9: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 9,

  estimatedMinutes: { 5: 9, 10: 16, 15: 20 },
  intros: [
    'Kish of Benjamin had lost his asses, and sent his son Saul to find them. The search, which stretches across three lands, becomes the occasion for an encounter with Samuel the prophet. Before Saul knows who he is looking for, God has already told Samuel who is coming. Before Saul understands his own calling, God has already prepared a portion and a place. The chapter turns on a simple economy: looking for one thing, we find another; and often the thing we find is what we needed all along.',
    'Saul enters the story as "a choice young man, and a goodly"—tall, comely, chosen by appearance. The text does not yet call attention to the shadows in him: his uncertainty, his humility, his willingness to turn back. But they are here. And they matter. By chapter 15, Saul will have become the man Israel wanted him to be, but not the man God meant. For now, he is still the humbler version—the one who cannot imagine why a prophet would speak to him, and who must be coaxed toward his own greatness.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /saul.*samuel|found|anointed/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Samuel 9',
    quote:
      'Saul, a tall and goodly young man, went out to search for his father&apos;s lost asses and encountered the prophet Samuel, who had already been told by God that Saul would come and be anointed captain over Israel. Through a simple search, Saul found his destiny.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 9 · Study Guide',
  },

  sections: [
    /* ─── 1 Samuel 9:1–2 — Saul the Goodly Benjamite ──────────────────── */
    {
      ref: '1 Samuel 9:1–2',
      title: 'Saul the Goodly Benjamite',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 1,
              spans: [
                t('Now there was a man of Benjamin, whose name was Kish, the son of Abiel, the son of Zeror, the son of Bechorath, the son of Aphiah, a Benjamite, '),
                hy('a mighty man of power', 'c-gibor'),
                t(': And he had a son, whose name was '),
                hp('Saul', 'c-saul-name'),
                t(', '),
                hy('a choice young man, and a goodly', 'c-choice'),
                t(': and there was not among the children of Israel a goodlier person than he: '),
                hy('from his shoulders and upward he was higher than any of the people', 'c-height'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'hebrew',
          id: 'c-saul-name',
          title: 'Shaul — "Asked"',
          script: 'שָׁאוּל',
          translit: '<strong>Shaul</strong> · asked, requested',
          description:
            'The name &ldquo;Saul&rdquo; means &ldquo;asked for&rdquo; or &ldquo;prayed for.&rdquo; Israel will soon ask for a king (1 Sam. 8), and Saul is the answer to that request—but not quite the one God would have chosen. The very shape of his name carries irony.',
        },

        {
          kind: 'commentary',
          id: 'c-gibor',
          html:
            'Kish is a <em>gibor</em>—a mighty man, powerful in wealth and influence. But when his asses are lost, all his power cannot find them. Sometimes what belongs to us teaches us our limits.',
        },

        {
          kind: 'commentary',
          id: 'c-choice',
          html:
            'The word translated &ldquo;choice&rdquo; (Hebrew <em>bachir</em>) can mean &ldquo;chosen&rdquo; or &ldquo;pure,&rdquo; &ldquo;excellent.&rdquo; Saul&apos;s excellence is already announced—and already, the text hints at what will become his tragedy. Outward form qualified him in Israel&apos;s eyes. But the eye that judges from the outside is not the eye God uses.',
        },

        {
          kind: 'commentary',
          id: 'c-height',
          html:
            'Saul is head and shoulders above every other person in Israel. The text insists on his physical preeminence. And yet—a man&apos;s height does not measure his heart. By chapter 13, Saul will have become the very man Israel saw when they looked at him. But God saw something else.',
        },

        {
          kind: 'carry',
          html:
            'How often we choose by the metric we can see—height, looks, confidence, charisma. And how often the person we choose for his strength proves fragile in exactly the place that matters most. Saul will teach us both the attraction of appearance and its cost.',
        },

        {
          kind: 'reflection',
          id: 'goodly',
          prompt:
            'Where are you drawn to the tall ones—the impressive ones? What might God see in someone you have overlooked?',
        },
      ],
    },

    /* ─── 1 Samuel 9:3–8 — The Search for the Asses ──────────────────── */
    {
      ref: '1 Samuel 9:3–8',
      title: 'The Search for the Asses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 3,
              spans: [
                t('And the asses of Kish Saul&apos;s father were lost. And Kish said to Saul his son, Take now one of the servants with thee, and arise, go seek the asses.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And he passed through Mount Ephraim, and passed through the land of Shalisha, but they found them not: then they passed through the land of Shalim, and there the asses were not; and he passed through the land of Benjamin, but they found them not.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'c-search-geography',
          html:
            'The asses are lost across three territories. Saul and his servant search methodically, thoroughly. Yet they find nothing. This is no careless errand—it is a genuine quest that leads nowhere, until the servant speaks.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 5,
              spans: [
                t('And when they were come to the land of Zuph, Saul said to his servant, Come, and let us return; lest my father leave caring for the asses, and take thought for us.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'c-saul-ready-to-quit',
          html:
            'Notice Saul&apos;s first instinct: <em>let us return.</em> He is ready to give up. He worries that his father will stop searching for the asses and start worrying about the searchers. The man who will later ignore prophetic warnings shows here a tender concern for his father&apos;s state of mind. At this moment, Saul is still the humble one.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 6,
              spans: [
                t('And the servant said to him, Behold now, '),
                hy('there is in this city a man of God', 'c-man-of-god'),
                t(', an honourable man; '),
                hy('all that he saith cometh surely to pass', 'c-prophet-gift'),
                t(': now let us go thither; peradventure he can shew us our way that we should go.'),
              ],
            },
          ],
        },

        {
          kind: 'hebrew',
          id: 'c-man-of-god',
          title: 'Ish Elohim — "Man of God"',
          script: 'אִישׁ־אֱלֹהִים',
          translit: '<strong>ish elohim</strong> · man of God, prophet',
          description:
            'The servant refers to Samuel as &ldquo;a man of God&rdquo;—a figure of divine authority and knowledge. In Hebrew thought, such a person stands at the intersection of heaven and earth, able to speak what God reveals.',
        },

        {
          kind: 'commentary',
          id: 'c-prophet-gift',
          html:
            'The servant testifies to Samuel&apos;s gift: &ldquo;all that he saith cometh surely to pass.&rdquo; Samuel is a man whose words do not fall to the ground. The servant has heard of him by reputation. God is about to confirm that reputation in a way neither of them yet knows.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 7,
              spans: [
                t('Then said Saul to his servant, But, behold, if we go, what shall we bring the man? for '),
                hg('the bread is spent in our vessels', 'c-no-gift'),
                t(', and there is not a present to bring unto him: what have we?'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'c-no-gift',
          html:
            'In the ancient Near East, one does not approach a prophet empty-handed. Saul raises a reasonable objection: they have no gift to bring. He assumes they cannot proceed. The servant, however, has another resource.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 8,
              spans: [
                t('And the servant answered Saul again, and said, Behold, I have here at hand '),
                hy('the fourth part of a shekel of silver', 'c-quarter-shekel'),
                t(': that will I give to the man of God, to tell us our way.'),
              ],
            },
          ],
        },

        {
          kind: 'hebrew',
          id: 'c-quarter-shekel',
          title: 'A Fourth of a Shekel',
          script: 'רְבַע־הַשֶּׁקֶל',
          translit: '<strong>reva shekel</strong> · one-quarter shekel',
          description:
            'A quarter shekel—a small amount. Yet it is enough. The servant has prepared to give. The meager gift will open the way to what cannot be bought: a word from the mouth of God.',
        },

        {
          kind: 'carry',
          html:
            'We are often stopped by what we lack—no perfect gift, no right words, no money, no certainty. But look at the servant: he does not have much, but he offers what he has. And the path opens. Often our small gift—a quarter shekel—is all that is needed to bring us to the presence of God.',
        },

        {
          kind: 'reflection',
          id: 'small-gift',
          prompt:
            'What small gift do you have—what quarter shekel—that you have been sitting on, thinking it too small? What would change if you offered it?',
        },
      ],
    },

    /* ─── 1 Samuel 9:9 — A Note on History ───────────────────────────── */
    {
      ref: '1 Samuel 9:9',
      title: 'A Historian&apos;s Pause',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 9,
              spans: [
                t('(Beforetime in Israel, when a man went to inquire of God, thus he spake, Come, and let us go to '),
                hy('the seer', 'c-roeh'),
                t(': for '),
                hy('he that is now called a Prophet', 'c-navi'),
                t(' was beforetime called a Seer.)'),
              ],
            },
          ],
        },

        {
          kind: 'hebrew',
          id: 'c-roeh',
          title: 'Roeh — "Seer"',
          script: 'רֹאֶה',
          translit: '<strong>roeh</strong> · seer, one who sees',
          description:
            'A <em>roeh</em> is one who sees visions, who perceives hidden things. The word emphasizes the gift of sight—perceiving what others cannot see.',
        },

        {
          kind: 'hebrew',
          id: 'c-navi',
          title: 'Navi — "Prophet"',
          script: 'נָבִיא',
          translit: '<strong>navi</strong> · prophet, spokesman',
          description:
            'Over time, the title shifted from &ldquo;seer&rdquo; (the one who sees) to &ldquo;prophet&rdquo; (the one who speaks forth). Both names describe the same calling—a person through whom God&apos;s knowledge comes.',
        },

        {
          kind: 'commentary',
          id: 'c-historian-note',
          html:
            'The narrator pauses to help the reader. Old language is fading. The word <em>roeh</em> is giving way to <em>navi</em>. Samuel is both: he sees what God shows, and he speaks what God tells him. The pause says, in effect: &ldquo;You may not recognize this old term, but Samuel is what we now call a prophet—a man who speaks for God.&rdquo;',
        },

        {
          kind: 'carry',
          html:
            'This tiny verse reminds us that God&apos;s work persists through linguistic and cultural change. The names shift; the calling endures. If you are waiting for God to speak in exactly the form and language you grew up with, you may miss Him in the form He has chosen for now.',
        },
      ],
    },

    /* ─── 1 Samuel 9:10–13 — The Maidens at the Well ─────────────────── */
    {
      ref: '1 Samuel 9:10–13',
      title: 'The Maidens at the Well',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 10,
              spans: [
                t('Then said Saul to his servant, Well said: let us go. So they went unto the city where the man of God was.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And as they went up the hill to the city, they found young maidens going out to draw water: and they said unto them, Is the seer here?'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'c-maidens-question',
          html:
            'Saul and his servant come to the city and ask the first people they meet: &ldquo;Is the seer here?&rdquo; The young maidens—the ones at the well, the ordinary people—know the answer. Sometimes the kingdom is found not through great knowledge but through a simple question asked of the common folk.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 12,
              spans: [
                t('And they answered them, and said, He is; behold, he is before you: make haste now, for he came today to the city; for there is '),
                hg('a sacrifice of the people today in the high place', 'c-sacrifice'),
                t(':'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'c-sacrifice',
          html:
            'Samuel has come to the city for a sacred festival. A sacrifice is being prepared. When Saul and his servant arrive, the city is gathered in worship. This is no accident. God has arranged the timing. Saul comes searching for asses; he arrives at an altar.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 13,
              spans: [
                t('As soon as ye be come into the city, ye shall straightway find him, before he go up to the high place to eat: for the people will not eat until he come, because he doth bless the sacrifice: and afterwards they eat that be bidden. Now therefore get you up; for about this time ye shall find him.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'c-blessing',
          html:
            'Samuel has not yet blessed the sacrifice. The people wait for him. He is essential—not just a guest, but the one through whom blessing flows. When Saul arrives, he arrives into a moment of sacred waiting. Everyone is turned toward Samuel. And Samuel is about to turn toward Saul.',
        },

        {
          kind: 'carry',
          html:
            'Notice the economy of divine providence here: Saul is looking for asses, but God has arranged that he arrive exactly when Samuel is about to bless the sacrifice, when the whole city is gathered, when Saul will not miss him. Our small searches often arrive at sacred moments we did not know were waiting.',
        },
      ],
    },

    /* ─── 1 Samuel 9:14–17 — "Behold the Man!" ──────────────────────── */
    {
      ref: '1 Samuel 9:14–17',
      title: '"Behold the Man!"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 14,
              spans: [
                t('So they went up into the city: and when they were come into the city, behold, Samuel came out against them, for to go up to the high place.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'c-samuel-greeting',
          html:
            'Saul and his servant climb toward the high place, and at exactly that moment, Samuel comes out to meet them. The text does not explain how Samuel knows to be there at that precise instant. He simply is. The next verse will explain: the Lord had told him the day before.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 15,
              spans: [
                t('Now the Lord had told '),
                hp('Samuel', 'c-samuel-foreknowledge'),
                t(' in '),
                hp('his ear', 'c-ear-of-god'),
                t(' '),
                hp('a day before', 'c-day-before'),
                t(' Saul came, saying,'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Tomorrow about this time I will send thee '),
                hp('a man out of the land of Benjamin', 'c-man-benjamin'),
                t(', and thou shalt '),
                hp('anoint him to be captain over my people Israel', 'c-anoint'),
                t(', that he may save my people out of the hand of the Philistines: for '),
                hp('I have looked upon my people', 'c-god-sees'),
                t(', because their cry is come unto me.'),
              ],
            },
          ],
        },

        {
          kind: 'christ',
          id: 'c-samuel-foreknowledge',
          title: 'Christ Connection — Foreknowledge and Arrival',
          html:
            'The Lord told Samuel a day before Saul came. The knowledge is God&apos;s before it is Saul&apos;s. Long before Saul is looking for the prophet, the prophet is being prepared for Saul. This is the texture of divine providence: God knows who is coming to change your life before you know you are looking for them. Christ came to a people waiting—not knowing they waited, but waiting nonetheless. &ldquo;When the fullness of the time was come, God sent forth his Son&rdquo; (Gal. 4:4). The preparation is made in advance; we are met by a grace we did not know was coming.',
        },

        {
          kind: 'hebrew',
          id: 'c-ear-of-god',
          title: 'In the Ear — Intimate Knowledge',
          script: 'בְאָזְנוֹ',
          translit: '<strong>b&apos;azno</strong> · in his ear, in his hearing',
          description:
            'God speaks to Samuel &ldquo;in his ear.&rdquo; This is intimate divine speech—God speaking directly to a man He has chosen to hear Him. The phrase suggests the closeness between God and His prophet.',
        },

        {
          kind: 'commentary',
          id: 'c-day-before',
          html:
            'A day before Saul arrives. This is not mere coincidence or good timing; it is foreknowledge. God has already seen the moment before it occurs. Samuel is not scrambling to understand who this tall young man is. God has prepared him.',
        },

        {
          kind: 'commentary',
          id: 'c-man-benjamin',
          html:
            'A man out of Benjamin. Benjamin is the smallest tribe. Its family lines are the least. And yet from here comes the man who will be anointed captain. God&apos;s choices often overturn what we expect.',
        },

        {
          kind: 'hebrew',
          id: 'c-anoint',
          title: 'Mashiach — "Anointed"',
          script: 'מָשִׁיחַ',
          translit: '<strong>mashiach</strong> · anointed one',
          description:
            'Samuel is told to &ldquo;anoint&rdquo; Saul. To anoint is to mark with oil, to set apart for a sacred office. The anointing makes public—and eternal—what God has chosen in secret.',
        },

        {
          kind: 'commentary',
          id: 'c-god-sees',
          html:
            'God has <em>looked</em> upon His people. Not from a distance, but with active regard. He <em>sees</em> their cry. This is the reason a captain is being sent: not because the people were wise enough to ask for the right king, but because God heard them and is acting on what He hears.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 17,
              spans: [
                t('And when Samuel saw Saul, the Lord said, Behold '),
                hp('the man', 'c-the-man'),
                t(' whom I spake to thee of! '),
                hp('this same shall reign over my people', 'c-shall-reign'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'c-the-man',
          html:
            '&ldquo;Behold the man.&rdquo; Samuel sees him, and God confirms: this is the one. No conversation is needed. No questioning. The look is enough. God has already spoken to Samuel in the hearing of his ear; now the confirmation is visual. Saul arrives, and Samuel recognizes him at once.',
        },

        {
          kind: 'commentary',
          id: 'c-shall-reign',
          html:
            '&ldquo;This same shall reign over my people.&rdquo; Yet the tragedy of Saul&apos;s story is already written. He shall reign, yes. But not as God intends. The text does not tell us this yet; it will unfold. For now, the word stands: Saul is God&apos;s chosen one, the man He is sending. Whether Saul will become what God sends him to be is another question—one that time will answer.',
        },

        {
          kind: 'carry',
          html:
            'God often sends us a word before we understand it, a calling before we are ready for it. The announcement comes first; the understanding comes later, sometimes through pain. But look at this: God does not hide it from those He has chosen to see. Samuel knows. And because Samuel knows, he can say to Saul the thing that Saul cannot yet believe about himself.',
        },

        {
          kind: 'reflection',
          id: 'behold-man',
          prompt:
            'Has anyone ever spoken into your life a calling or a truth you could not yet believe about yourself? What changed when someone else could see it for you?',
        },
      ],
    },

    /* ─── 1 Samuel 9:18–21 — Saul&apos;s Humility ──────────────────────── */
    {
      ref: '1 Samuel 9:18–21',
      title: 'Saul&apos;s Humility',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 18,
              spans: [
                t('Then Saul drew near to Samuel in the gate, and said, '),
                hg('Tell me, I pray thee, where the seer&apos;s house is', 'c-polite-question'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'c-polite-question',
          html:
            'Saul does not know who this man is. He approaches politely, humbly, asking for directions. He has no idea that the man before him is Samuel, the very prophet he was seeking. He is still the man who was ready to turn back, who worried about his father&apos;s mind.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 19,
              spans: [
                t('And Samuel answered Saul, and said, I am the seer: go up before me unto the high place; for ye shall eat with me today, and tomorrow I will let thee go, and '),
                hg('will tell thee all that is in thine heart', 'c-all-thy-heart'),
                t('. And as for thine asses that were lost three days ago, set not thy mind on them; for they are found. And '),
                hg('on whom is all the desire of Israel?', 'c-desire-israel'),
                t(' Is it not on thee, and on all thy father&apos;s house?'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'c-all-thy-heart',
          html:
            'Samuel promises to tell Saul &ldquo;all that is in thine heart.&rdquo; What is in his heart? Saul does not yet know. But God does. Samuel is about to speak into him the thing he did not know himself—his own destiny.',
        },

        {
          kind: 'commentary',
          id: 'c-desire-israel',
          html:
            '&ldquo;On whom is all the desire of Israel?&rdquo; A strange question to ask in the midst of naming the asses. Samuel is not talking about donkeys anymore. He is asking: who is the one all Israel has been longing for? The answer is unspoken, but it stands: you, Saul. You are the one.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 20,
              spans: [
                t('And Saul answered and said, Am not I a Benjamite, of the smallest of the tribes of Israel? and my family the least of all the families of the tribe of Benjamin? '),
                hy('wherefore then speakest thou so to me?', 'c-why-me'),
                t(''),
              ],
            },
          ],
        },

        {
          kind: 'hebrew',
          id: 'c-why-me',
          title: 'The Question of the Humble',
          script: 'לָמָה תְדַבֵּר־אֵלַי כַּדָּבָר הַזֶּה',
          translit: '<strong>lamah tedabber elai ka-davar hazeh</strong> · why do you speak to me in this way?',
          description:
            'Saul&apos;s response is shock and humility. He cannot imagine why a prophet would speak to him of great things. His sense of his own smallness is genuine—or at least, it is genuine at this moment, before the crown changes him.',
        },

        {
          kind: 'commentary',
          id: 'c-saul-self-knowledge',
          html:
            'Notice: Saul objects not because he lacks ambition, but because he lacks the credentials. He is of the smallest tribe, from the least family within that tribe. Why would the prophet of Israel speak such grand words to him? It is a reasonable question. And it shows Saul&apos;s character at this moment: he is humble.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 21,
              spans: [
                t('And Saul answered and said, Am not I a Benjamite, of the smallest of the tribes of Israel? and my family the least of all the families of the tribe of Benjamin? wherefore then speakest thou so to me?'),
              ],
            },
          ],
        },

        {
          kind: 'carry',
          html:
            'Saul&apos;s humility in this moment is touching. He will not keep it long. But here, face to face with his calling, he is small in his own eyes. The high ones are often those who begin low. But this is also the moment we must listen: God is not calling you because you are impressive. He is calling you because He has chosen you. Whether you feel small enough is not the question.',
        },

        {
          kind: 'reflection',
          id: 'saul-humility',
          prompt:
            'Where do you feel too small, from too obscure a family, too ordinary? What would it mean to hear God say, "It is on you that the desire is set"?',
        },
      ],
    },

    /* ─── 1 Samuel 9:22–26 — The Portion Set Aside ───────────────────── */
    {
      ref: '1 Samuel 9:22–26',
      title: 'The Portion Set Aside',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 22,
              spans: [
                t('And Samuel took Saul and his servant, and brought them into the parlour, and made them sit in the chiefest place among them that were bidden, about thirty persons.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'c-chief-place',
          html:
            'Samuel does not hide Saul away. He sets him in the chief place among all those gathered. The public honor has already begun. Before the word is spoken, the seat is given. Before anyone knows what Saul is to become, Samuel is treating him as one destined for greatness.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 23,
              spans: [
                t('And Samuel said unto the cook, Bring the portion which I gave thee, of which I said unto thee, Set it aside.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'c-portion-set-aside',
          html:
            'A <em>portion</em> has been set aside. The cook was told beforehand: keep this back. Not for any of the guests as they arrived. Not for the people gathered. This portion was prepared—and kept—for someone who was coming. And now Samuel says: bring it. The someone has arrived.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 24,
              spans: [
                t('So the cook took up the thigh, and that which was upon it, and set it before Saul. And Samuel said, Behold that which is left! set it before thee, and eat: for unto this time hath it been kept for thee since I said, I have invited the people.'),
              ],
            },
          ],
        },

        {
          kind: 'christ',
          id: 'c-portion-christ',
          title: 'Christ Connection — The Bread Set Aside',
          html:
            'A portion of bread and meat, kept back and hidden, presented to Saul at the very moment he arrives—not knowing that it was prepared for him all along. This is a portrait of grace. Before we even knew we were hungry, a place was set for us. &ldquo;The Lamb slain from the foundation of the world&rdquo; (Rev. 13:8)—the redemption prepared before time, held back until the appointed hour, then given to us as an unearned gift. We come looking for one thing (our lost asses, our simple purpose), and we find that we have been fed with a portion prepared in advance, kept for us, waiting for the day we would arrive.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 25,
              spans: [
                t('And when they were come down from the high place into the city, Samuel communed with Saul upon the top of the house.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And they rose early: and it came to pass about the spring of the day, that Samuel called Saul to the top of the house, saying, Up, that I may send thee away.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'c-send-away',
          html:
            'From the high place they descend into the city. Then, on the housetop, Samuel and Saul speak together—the two of them alone, in the dark before dawn. What Samuel tells him, the text will not yet reveal. Only that in the morning, Samuel sends him away. The anointing, the word of God&apos;s choice—these will be revealed in the chapters that follow. For now, Saul departs, changed by a night of words and a portion that was prepared before he knew he was coming.',
        },

        {
          kind: 'carry',
          html:
            'How often we discover, in hindsight, that we have been provided for in advance. The friend who called just when we needed it. The opportunity that was held open. The word that came at exactly the moment we could hear it. All of it held in a divine patience, kept for the day we would arrive. Living this way—believing that the portion is set aside, that the place is prepared, that we are expected—changes everything.',
        },

        {
          kind: 'reflection',
          id: 'portion-set-aside',
          prompt:
            'Where have you discovered that something was prepared for you in advance? How might that change the way you face what is coming next?',
        },
      ],
    },
  ],
};
