import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 41 — Joseph at thirty, exalted from the dungeon.
 *
 * Pharaoh dreams. The magicians fail. The butler remembers the prisoner.
 * Joseph shaves, enters the palace, and speaks his first free words: "It is not
 * in me; God shall give Pharaoh an answer." From the dungeon to the right hand
 * of Pharaoh in a single day. The chapter is dense with type and foreshadow: the
 * age of Jesus at ministry, the lifting up to the throne, the bread for the
 * world, two sons named for forgetting and fruitfulness. Seven years of plenty,
 * seven of famine. The logic of Egypt turns on one man.
 */
export const GENESIS_41: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 41,

  estimatedMinutes: { beginner: 14, intermediate: 23, deep: 29 },
  intros: [
    'Genesis 41 opens with Pharaoh alone with his dreams. Two centuries before Egypt&apos;s wise men will decode the mysteries of their own temples, they stand mute before these seven cows and seven ears of grain. Nothing in the wisdom of Egypt can read what God is saying. The magicians fail. And in the dungeon, still thirteen years from home, Joseph waits without knowing that a dream is about to change everything.',
    'Pay close attention to Joseph&apos;s first words when he stands before Pharaoh: "It is not in me." At the moment of his exaltation, when he could finally take credit — when Pharaoh himself is asking, when the kingdom is desperate — Joseph&apos;s first act is to deflect the credit away from himself. Even his freedom is not about Joseph. It is about God. That refusal to seize power for himself sets up everything that follows in Joseph&apos;s story: a man lifted up not by his own hands, but by the God who has been with him in the pit, the prison, and now the palace.',
    'Manasseh and Ephraim. The names Joseph gives his sons are not accidental. They are the prayer of a man who has been broken and healed. Manasseh — "God hath made me forget" — speaks of a grace that does not deny the pain but somehow makes it bearable. And Ephraim — "God hath caused me to be fruitful in the land of my affliction" — is the deeper pattern: not only forgetting the bitter, but bearing new life out of it. This is resurrection logic a thousand years before Christ, and Joseph&apos;s family bears it in their names.',
  ],

  bottomShare: {
    label: 'Share Genesis 41',
    quote:
      'From the dungeon to the right hand of the throne. Joseph at thirty interprets Pharaoh&apos;s dreams, becomes vizier of Egypt, and names his sons "God hath made me forget" and "God hath made me fruitful." Genesis 41 is the exaltation of the God who lifts up the lowly.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 41 · Study Guide',
  },

  sections: [
    /* ─── Genesis 41:1–8 — Pharaoh&apos;s Dreams ─────────────────────────────── */
    {
      ref: 'Genesis 41:1–8',
      title: 'Pharaoh&apos;s Dreams',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass at the end of two years, that Pharaoh dreamed: and, behold, he stood by the river of Egypt;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And there came up out of the river '),
                hg('seven well favoured kine and fatfleshed', 'c-seven-fat'),
                t('; and they fed in a meadow.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And, behold, seven other kine came up after them out of the river, '),
                hg('ill favoured and leanfleshed', 'c-seven-lean'),
                t('; and stood by the other kine upon the brink of the river.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the '),
                hg('ill favoured and leanfleshed kine did eat up the seven well favoured and fat kine', 'c-consume'),
                t('. So Pharaoh awoke.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And he slept and dreamed the second time: and, behold, '),
                hg('seven ears of corn came up upon one stalk, rank and good', 'c-seven-full'),
                t(';'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And, behold, seven thin ears and blasted with the east wind sprung up after them.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the seven thin ears '),
                hg('devoured the seven rank and full ears', 'c-consume-grain'),
                t('. And Pharaoh awoke: and, behold, it was a dream.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And it came to pass in the morning that his spirit was troubled; and he sent and called for all the magicians of Egypt, and all the wise men thereof: and Pharaoh told them his dream; but there was '),
                hg('none that could interpret them unto Pharaoh', 'c-magicians-fail'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-seven-fat',
          html:
            'The dream comes in pairs: seven fat cows and seven lean cows; seven full ears and seven thin ears. The number seven is perfection, completeness. But here it is doubled, doubled to speak of fullness consuming fullness, absence devouring abundance. Pharaoh is not hearing a normal dream; he is hearing a nightmare of annihilation.',
        },
        {
          kind: 'commentary',
          id: 'c-seven-lean',
          html:
            'The lean cows come second, their scarcity contrasted with the abundance that came before. This is the movement of the dream: plenty first, and then the taking away.',
        },
        {
          kind: 'commentary',
          id: 'c-consume',
          html:
            'The lean consume the fat — but they do not become fat themselves. They remain lean and wretched. This is the terror of the dream: the famine is so severe that eating all of Egypt&apos;s abundance cannot satisfy it. Destruction is speaking through this image.',
        },
        {
          kind: 'commentary',
          id: 'c-seven-full',
          html:
            'The grain imagery repeats the cattle dream. Seven full ears on one stalk — what could be more abundant? One stalk bearing perfection. Yet the second dream speaks the same annihilation.',
        },
        {
          kind: 'commentary',
          id: 'c-consume-grain',
          html:
            'The thin ears devour the full ones. Again, the lean eats the fat. The famine speaks louder than abundance. The east wind blasts the thin ears — a detail that will echo later in how famine comes to Egypt.',
        },
        {
          kind: 'commentary',
          id: 'c-magicians-fail',
          html:
            'Egypt was the intellectual center of the ancient world. Her priests read the stars, her scribes preserved knowledge, her wise men interpreted the mysteries of the gods. And all of them stand silent before Pharaoh&apos;s dreams. Whatever God is saying here, Egypt cannot hear it. The wisest men the world has to offer are helpless. This is the problem that will crack open the palace door for a prisoner.',
        },
        {
          kind: 'carry',
          html:
            'The things in your life that keep you up at night — the future you can&apos;t see, the changes you can&apos;t predict, the abundance you can&apos;t hold onto — these often don&apos;t have human answers. This is not weakness. It is reality. The places where the wise run out of words are exactly the places where God has room to work. What is one dream you have that the world&apos;s wisdom can&apos;t help you with?',
        },
        {
          kind: 'reflection',
          id: 'gen41-dreams',
          prompt:
            'What is one pattern repeating in your life that you can&apos;t quite read? What would change if you brought it to someone who isn&apos;t trying to solve it with human cleverness?',
        },
      ],
    },

    /* ─── Genesis 41:9–16 — The Butler Remembers ────────────────────────────── */
    {
      ref: 'Genesis 41:9–16',
      title: 'The Butler Remembers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            {
              number: 9,
              spans: [
                t('Then spake the chief butler unto Pharaoh, saying, '),
                hg('I do remember my faults this day', 'c-butler-remembers'),
                t(':'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Pharaoh was wroth with his servants, and put me in ward in the captain of the guard&apos;s house, both me and the chief baker:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And we dreamed a dream in one night, I and he; we dreamed each man according to the interpretation of his dream.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And there was there with us a young man, an Hebrew, servant to the captain of the guard; and we told him, and he interpreted to us our dreams; to each man according to his dream he did interpret.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And it came to pass, as he interpreted to us, so it was; me he restored unto mine office, and him he hanged.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Then Pharaoh sent and called Joseph. And they brought him hastily out of the dungeon: and he '),
                hg('shaved himself, and changed his raiment', 'c-shaved'),
                t(', and came in unto Pharaoh.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And Pharaoh said unto Joseph, I have dreamed a dream, and there is none that can interpret it: and I have heard say of thee, that thou canst understand a dream to interpret it.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Joseph answered Pharaoh, saying, It is not in me: '),
                hg('God shall give Pharaoh an answer of peace', 'c-answer-peace'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-butler-remembers',
          html:
            'Two years have passed since Joseph interpreted the butler&apos;s dream. Two years of prison. Two years without word, without hope. And then, out of nowhere, the chief butler remembers. He does not remember out of gratitude or kindness at first — he remembers because Pharaoh is desperate. But God uses even selfish remembrance. Sometimes the only way out of the dungeon is someone else&apos;s need. Sometimes grace looks like being useful at the exact moment you are most forgotten.',
        },
        {
          kind: 'commentary',
          id: 'c-shaved',
          html:
            'Joseph shaves. He changes his clothes. In a single moment of grooming, he is transformed from a prisoner into a man who can stand before a king. But notice: he does not change who he is. He has not spent two years in chains rehearsing how to please Pharaoh or crafting a better pitch. He goes in ready to point away from himself. The shaving is only the exterior. The interior — the refusal to take credit — that is who Joseph has been in the dungeon, and it is who he will be on the throne.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-biladay',
          title: 'Biladay — &ldquo;apart from me&rdquo;',
          script: 'בִּלְעָדַי',
          translit: '<strong>bilday</strong> · without, apart from; Joseph&apos;s refusal',
          description:
            'The Hebrew root means "without" or "except." Joseph&apos;s first words as a free man are a grammatical refusal. "Not in me, except God." His first breath of freedom is spent deflecting power away from himself. In a moment when he could claim everything, he claims nothing.',
        },
        {
          kind: 'carry',
          html:
            'When you finally get the chance you&apos;ve been waiting for — the word you can finally say, the platform you can finally speak from — what is your first move? Joseph&apos;s is to make sure nobody thinks the idea came from him. In a world that trains you to seize every opening, to promote yourself, to convince people you are worth listening to, there is something radically different about a man who says his first word of freedom is: it is not in me. Whom do you need to point toward instead of yourself today?',
        },
        {
          kind: 'reflection',
          id: 'gen41-not-in-me',
          prompt:
            'When you are about to step into something you&apos;ve been waiting for, what tempts you most — taking credit, controlling the outcome, or proving something? What would "It is not in me" look like for you?',
        },
      ],
    },

    /* ─── Genesis 41:17–24 — The Dream Told Again ────────────────────────── */
    {
      ref: 'Genesis 41:17–24',
      title: 'The Dream Told Again',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            {
              number: 17,
              spans: [
                t('And Pharaoh said unto Joseph, In my dream, behold, I stood upon the brink of the river:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And there came up out of the river seven kine, fatfleshed and well favoured; and they fed in a meadow:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And, behold, seven other kine came up after them, poor and very ill favoured and leanfleshed, such as I never saw in all the land of Egypt for badness:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And the lean and the ill favoured kine did eat up the first seven fat kine:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And when they had eaten them up, it could not be known that they had eaten them; but they were still ill favoured, as at the beginning. So I awoke.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And I saw in my dream, and, behold, seven ears came up in one stalk, full and good:'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And, behold, seven ears, withered, thin, and blasted with the east wind, sprung up after them:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And the thin ears devoured the seven good ears: and I told this unto the magicians; but there was none that could declare it to me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-answer-peace',
          html:
            'Joseph promises "an answer of peace." Not a clever interpretation, not an impressive display of learning — an answer that brings peace. That is a remarkable promise to make to a desperate man. What Joseph means is that the answer will not destroy Pharaoh; it will come from God, and God is trustworthy. The word <em>shalom</em> here means more than peace; it means wholeness, soundness, the restoration of right relationship. Whatever God is saying through the dream, the answer will have God&apos;s character written into it.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'gen41-peace',
          prompt:
            'When you are afraid of the answer to something you are asking God, what would it look like to trust that His answer — even if it surprises you — is an answer of peace?',
        },
      ],
    },

    /* ─── Genesis 41:25–32 — The Interpretation ────────────────────────────── */
    {
      ref: 'Genesis 41:25–32',
      title: 'The Interpretation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            {
              number: 25,
              spans: [
                t('And Joseph said unto Pharaoh, The dream of Pharaoh is '),
                hg('one: God hath shewed Pharaoh what he is about to do', 'c-one-dream'),
                t('.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('The seven good kine are seven years; and the seven good ears are seven years: the dream is one.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And the seven thin and ill favoured kine that came up after them are seven years; and the seven empty ears blasted with the east wind shall be seven years of famine.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('This is the thing which I have spoken unto Pharaoh: What God is about to do he sheweth unto Pharaoh.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Behold, there come seven years of great plenty throughout all the land of Egypt:'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And there shall arise after them seven years of famine; and all the plenty shall be forgotten in the land of Egypt; and the famine shall consume the land;'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And the plenty shall not be known in the land by reason of that famine following; for it shall be very grievous.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And for that the dream was '),
                hg('doubled unto Pharaoh twice', 'c-doubled'),
                t('; it is because the thing is established by God, and God will shortly bring it to pass.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-one-dream',
          html:
            'Joseph does not solve a riddle. He names reality. The dream is "one" — it is unified, it is speaking one truth in two images: seven years will come when Egypt drowns in abundance, and seven years will come when Egypt starves. The dream is telling Pharaoh to prepare. But more than that, the dream is telling Pharaoh that God is speaking. "What God is about to do he sheweth unto Pharaoh." Joseph&apos;s interpretation centers on God&apos;s intention, not on Joseph&apos;s brilliance.',
        },
        {
          kind: 'commentary',
          id: 'c-doubled',
          html:
            'The fact that the dream came twice is itself a message. In the ancient world, repetition was a sign of urgency and certainty. The thing that comes twice is the thing God is serious about. Joseph hears the double dream as a double affirmation: "God will shortly bring it to pass." The dream is not a warning that maybe will come true if circumstances align. It is a promise that is certain.',
        },
        {
          kind: 'carry',
          html:
            'One of the hardest parts of listening to God is believing He is serious. We speak carelessly; we promise lightly; we say things we don&apos;t mean. So when God speaks — in Scripture, in prayer, in the quiet certainties that come from sitting with Him — we tend to hedge our bets. Joseph&apos;s interpretation treats God&apos;s word as binding: what God says will come to pass. This is not naive optimism. It is the confidence of someone who has learned in a dungeon that God keeps His word.',
        },
        {
          kind: 'reflection',
          id: 'gen41-established',
          prompt:
            'What has God promised you that you have not quite believed yet? What would it change if you treated it as "established by God" and He will "shortly bring it to pass"?',
        },
      ],
    },

    /* ─── Genesis 41:33–40 — Pharaoh&apos;s Proposal ────────────────────────── */
    {
      ref: 'Genesis 41:33–40',
      title: 'The Wisdom Proposal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            {
              number: 33,
              spans: [
                t('Now therefore let Pharaoh look out a man '),
                hg('discreet and wise, and set him over the land of Egypt', 'c-discreet-wise'),
                t('.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('Let Pharaoh do this, and let him appoint officers over the land, and '),
                hg('take up the fifth part of the land of Egypt in the seven plenteous years', 'c-fifth'),
                t(';'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And let them gather all the food of those good years that come, and lay up corn under the hand of Pharaoh, and let them keep food in the cities.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('And that food shall be for store to the land against the seven years of famine, which shall be in the land of Egypt; that the land perish not through the famine.'),
              ],
            },
            {
              number: 37,
              spans: [t('And the thing was good in the eyes of Pharaoh, and in the eyes of all his servants.')],
            },
            {
              number: 38,
              spans: [
                t('And Pharaoh said unto his servants, '),
                hp('Can we find such a one as this is, a man in whom the Spirit of God is?', 'christ-spirit-of-god'),
                t(''),
              ],
            },
            {
              number: 39,
              spans: [
                t('And Pharaoh said unto Joseph, Forasmuch as God hath shewed thee all this, there is none so discreet and wise as thou art:'),
              ],
            },
            {
              number: 40,
              spans: [
                t('Thou shalt be over my house, and according unto thy word shall all my people be ruled: only in the throne will I be greater than thou.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-discreet-wise',
          html:
            'Joseph does something remarkable: he does not wait for Pharaoh to offer him the job. He proposes the position himself — and then describes the man for the job in terms that fit him exactly. "A man discreet and wise." It is not presumptuous. It is simply clear. The interpretation came from God; the solution is practical; the man to carry it out is standing right here. Joseph is not asking for power. He is naming what needs to happen.',
        },
        {
          kind: 'commentary',
          id: 'c-fifth',
          html:
            'Joseph&apos;s plan is to take one-fifth of all the grain during the seven years of plenty and store it for the famine. It is a massive appropriation — the state taking a fifth of every harvest — but it is the only way Egypt will survive what is coming. The man who has nothing, who owns nothing, who has lost everything is now proposing to take one-fifth of everything Egypt owns and hold it in trust for a future he can see and Pharaoh cannot. This is the character of Joseph: he sees what needs to be done and does it, whether it is dramatic or ordinary, popular or unpopular.',
        },
        {
          kind: 'greek',
          id: 'greek-pneuma',
          title: 'Pneuma Theou — &ldquo;Spirit of God&rdquo;',
          script: 'רוּחַ אֱלֹהִים',
          translit: '<strong>ruach Elohim</strong> · the breath, the wind, the presence of God',
          description:
            'Pharaoh, a pagan Egyptian king, recognizes what Joseph has: the presence and power of God. He does not use Egyptian language. He names it in the terms Joseph himself would use. A foreign king, standing in his own temple to his own gods, sees that one prisoner has something none of his own wisest men possess.',
        },
        {
          kind: 'christ',
          id: 'christ-spirit-of-god',
          title: 'Christ Connection — The Spirit Recognized',
          html:
            'Pharaoh says what no human authority had said to Joseph before: "Can we find such a one as this is, a man in whom the Spirit of God is?" The Spirit of God in Joseph is visible enough for a foreign king to name it. This is what happens when you have been broken and rebuilt by God — you carry something that does not require a title or a credential to be recognized. Paul names it centuries later: "Now we have received… the spirit which is of God; that we might know the things that are freely given to us of God… Eye hath not seen, nor ear heard… But God hath revealed them unto us by his Spirit" (1 Cor. 2:12, 9–10). The Spirit of God in a person is its own kind of power.',
        },
        {
          kind: 'carry',
          html:
            'The world&apos;s wisdom runs out, and when it does, people start looking for someone who carries something else. Not someone who is prettier, louder, or more important — but someone who knows something the rest of them don&apos;t. Someone the Spirit has broken open enough to fill. Sometimes the greatest power you carry is simply that you are not trying to convince people of anything. You are just here, and something is recognizable in that.',
        },
        {
          kind: 'reflection',
          id: 'gen41-spirit-in-you',
          prompt:
            'What would change if you stopped trying to prove your competence and let people see what actually fills you? What are you most afraid they would see?',
        },
      ],
    },

    /* ─── Genesis 41:41–45 — Joseph Exalted ──────────────────────────────── */
    {
      ref: 'Genesis 41:41–45',
      title: 'Joseph Exalted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            {
              number: 41,
              spans: [
                t('And Pharaoh said unto Joseph, See, I have set thee over all the land of Egypt.'),
              ],
            },
            {
              number: 42,
              spans: [
                t('And Pharaoh '),
                hg('took off his ring from his hand, and put it upon Joseph&apos;s hand, and arrayed him in vestures of fine linen, and put a gold chain about his neck', 'c-invested'),
                t(';'),
              ],
            },
            {
              number: 43,
              spans: [
                t('And he made him to ride in the second chariot which he had; and they cried before him, '),
                hg('Bow the knee', 'c-bow-knee'),
                t(': and he made him ruler over all the land of Egypt.'),
              ],
            },
            {
              number: 44,
              spans: [
                t('And Pharaoh said unto Joseph, I am Pharaoh, and '),
                hp('without thee shall no man lift up his hand or foot in all the land of Egypt', 'christ-no-man-without-thee'),
                t('.'),
              ],
            },
            {
              number: 45,
              spans: [
                t('And Pharaoh called his name Zaphnath-paaneah; and he gave him to wife Asenath the daughter of Potipherah priest of On. And Joseph went out over all the land of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-invested',
          html:
            'The ceremony is swift and absolute. Pharaoh gives Joseph his ring — a symbol of authority. He dresses him in linen — a symbol of rank. He puts a gold chain around his neck — a symbol of honor. All within minutes. The man who came out of the dungeon in prisoner&apos;s rags is now clothed in the garments of power. But notice the pattern: Joseph does not take these things. They are given to him. Everything he will wield in Egypt comes to him as a gift.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-zaphnath',
          title: 'Zaphnath-paaneah — Joseph&apos;s New Name',
          script: 'צָפְנַת פַּעְנֵחַ',
          translit: '<strong>Zaphnath-paaneah</strong> · Egyptian: "the god speaks and he lives" or "revealer of secrets"',
          description:
            'Pharaoh renames Joseph in Egyptian, placing him in the language and the theology of Egypt. Scholars debate the exact meaning — some say "the god speaks and he lives," others "he who reveals hidden things." Either way, the name recognizes that Joseph knows what Egypt cannot know: he is the revealer, the one who speaks for God in a land of many gods.',
        },
        {
          kind: 'commentary',
          id: 'c-bow-knee',
          html:
            'As Joseph passes through the streets, the cry goes up: "Bow the knee." In the span of a single day, a man who had no honor, no name, no standing has been lifted to such a height that Egypt bows. This is the elevation from the pit to the throne, from powerlessness to authority. But the pattern matters: Joseph did not seize this. Joseph did not scheme to get it. Joseph spoke truth when asked, and Pharaoh lifted him up.',
        },
        {
          kind: 'christ',
          id: 'christ-no-man-without-thee',
          title: 'Christ Connection — All Things Hold Together',
          html:
            'Pharaoh declares: "Without thee shall no man lift up his hand or foot in all the land of Egypt." In the ancient world this was the language of ultimate power — a single man through whom all authority flows. Centuries later, Paul will write of Christ: "By him all things consist" (Col. 1:17). The same pattern: one man raised up as the center through which all life flows. In Egypt, during the famine, every mouth that eats, every person that breathes, every action that is taken depends on Joseph. In the cosmos, the same is true of Christ. All coherence, all order, all life holds together through Him.',
        },
        {
          kind: 'carry',
          html:
            'You live in a cosmos that holds together through Christ. Not through your effort, not through your understanding of how everything works. You are not the center. And that is good news, because you were never meant to be. The things you are carrying that feel too heavy — the weight of making everyone okay, of holding together what is breaking, of knowing how the future will work — those are not your burden. Your burden is to be faithful where you are, the way Joseph was faithful in the dungeon. The holding together of everything else belongs to Someone else.',
        },
        {
          kind: 'reflection',
          id: 'gen41-exalted',
          prompt:
            'What are you trying to hold together through your own effort? What would it mean to trust that Christ is already holding it, and your job is just to be faithful in the next small thing?',
        },
      ],
    },

    /* ─── Genesis 41:46–52 — The Sons ──────────────────────────────────────── */
    {
      ref: 'Genesis 41:46–52',
      title: 'Manasseh and Ephraim',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            {
              number: 46,
              spans: [
                t('And Joseph was '),
                hg('thirty years old', 'c-thirty'),
                t(' when he stood before Pharaoh king of Egypt. And Joseph went out from the presence of Pharaoh, and went throughout all the land of Egypt.'),
              ],
            },
            {
              number: 47,
              spans: [
                t('And in the seven plenteous years the earth brought forth by handfuls.'),
              ],
            },
            {
              number: 48,
              spans: [
                t('And he gathered up all the food of the seven years which were in the land of Egypt, and laid up the food in the cities: the food of the field which was round about every city, laid he up in the same.'),
              ],
            },
            {
              number: 49,
              spans: [
                t('And Joseph gathered corn as the sand of the sea, very much, until he left numbering; for it was without number.'),
              ],
            },
            {
              number: 50,
              spans: [
                t('And unto Joseph were born two sons before the years of famine came: which Asenath the daughter of Potipherah priest of On bare unto him.'),
              ],
            },
            {
              number: 51,
              spans: [
                t('And Joseph called the name of the firstborn '),
                hp('Manasseh', 'c-manasseh'),
                t(': For God, said he, hath made me forget all my toil, and all my father&apos;s house.'),
              ],
            },
            {
              number: 52,
              spans: [
                t('And the name of the second called he '),
                hp('Ephraim', 'c-ephraim'),
                t(': For God hath caused me to be fruitful in the land of my affliction.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-thirty',
          html:
            'Joseph is thirty years old. Luke will note that Jesus was thirty when He began His ministry (Luke 3:23). Both men begin their public work at thirty. Both are lifted up for a work that no one else can do. Both are exalted not by their own choice but by necessity — one by a king who has nowhere else to turn, one by a Father who sends Him to save the world. The age marks them both.',
        },
        {
          kind: 'commentary',
          id: 'c-manasseh',
          html:
            'Manasseh means "God hath made me forget." It is a remarkable name for a son — not a name celebrating Manasseh, but a name celebrating what God has done for Joseph. The interpretation is not that Joseph has forgotten the pain completely, but that God has given him grace to move beyond it. The bitterness is bearable now. The years in the pit and the prison have not been erased, but they are not bleeding into his present anymore. This is the healing of Manasseh: the past no longer gets to name the future.',
        },
        {
          kind: 'commentary',
          id: 'c-ephraim',
          html:
            'Ephraim means "God hath caused me to be fruitful in the land of my affliction." This is resurrection language. Not in spite of the affliction, but in the land of it. Joseph has not moved to a new comfortable place where suffering is behind him. He is in Egypt, a slave&apos;s son, far from home. And yet — fruit. Life multiplying. Possibility. Sons born to him when he had nothing. This is what God does with people He has broken. He does not erase the breaking; He makes them fruitful in it.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-manasseh-ephraim',
          title: 'Manasseh and Ephraim — The Names That Speak',
          script: 'מְנַשֶּׁה וְאֶפְרָיִם',
          translit: '<strong>Manasseh</strong> · "making forget" — <strong>Ephraim</strong> · "doubly fruitful"',
          description:
            'The two names together trace Joseph&apos;s journey: first the forgetting of bitterness, then the fruitfulness born from having been broken. They are not names celebrating his sons. They are names celebrating what God has done for their father. Every time someone called his sons by their names, they would be testifying to God&apos;s grace.',
        },
        {
          kind: 'christ',
          id: 'christ-two-sons',
          title: 'Christ Connection — Broken and Fruitful',
          html:
            'Joseph&apos;s two sons bear the pattern of resurrection. Manasseh speaks of what death has done — the old is gone, the old pain is gone. Ephraim speaks of what resurrection does — new life appears not instead of the affliction but within it, born from it. In John 12:24, Jesus says: "Except a corn of wheat fall into the ground and die, it abideth alone: but if it die, it bringeth forth much fruit." The grain must fall. It must die. And then — fruitfulness. Joseph&apos;s sons are living proof that God does not just erase suffering. He transforms it into the ground from which new life grows.',
        },
        {
          kind: 'carry',
          html:
            'Your breaking — the years that crushed you, the losses that remade you, the seasons when you felt buried — these are not wasted. They are not bypassed by God as if they never happened. They become the Manasseh: the ground you can now walk on without bleeding. And they become the Ephraim: the place where your life grows in ways it could not have grown in comfort. The worst thing that happened to you might be the soil of your greatest fruitfulness. Not because suffering is good, but because the God who suffers with you is good, and He is making something in you.',
        },
        {
          kind: 'reflection',
          id: 'gen41-fruitful',
          prompt:
            'What is one thing that has broken you that is now becoming fruitful ground? What new growth is appearing in the land of your old affliction?',
        },
        {
          kind: 'artwork',
          matchTitle: /joseph/i,
          matchArtist: /tissot/i,
          caption: 'Genesis 41:46–52 · Joseph Exalted',
        },
      ],
    },

    /* ─── Genesis 41:53–57 — The Years Spoken ────────────────────────────── */
    {
      ref: 'Genesis 41:53–57',
      title: 'The Years of Plenty and Famine',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            {
              number: 53,
              spans: [
                t('And the seven years of plenteousness, that was in the land of Egypt, were ended.'),
              ],
            },
            {
              number: 54,
              spans: [
                t('And the seven years of dearth began to come, according as Joseph had said: and the dearth was in all lands; but in all the land of Egypt there was bread.'),
              ],
            },
            {
              number: 55,
              spans: [
                t('And when all the land of Egypt was famished, the people cried to Pharaoh for bread: and Pharaoh said unto all the Egyptians, Go unto Joseph; what he saith to you, do.'),
              ],
            },
            {
              number: 56,
              spans: [
                t('And the famine was over all the face of the earth: and Joseph opened all the storehouses, and '),
                hg('sold unto the Egyptians', 'c-sold-grain'),
                t('; and the famine waxed sore in the land of Egypt.'),
              ],
            },
            {
              number: 57,
              spans: [
                t('And all countries came into Egypt to Joseph for to buy corn; because that the famine was so in all lands.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sold-grain',
          html:
            'Joseph does not hoard the grain for Egypt alone. He sells it. The economics are stark: people without money bring livestock. People without livestock bring land. People without land sell themselves into servitude. By the time the famine ends, Egypt is wealthy beyond measure, and the people are dependents of Pharaoh. But they are alive. They have been fed. The bread that Joseph stored has become the bread that keeps the known world alive.',
        },
        {
          kind: 'christ',
          id: 'christ-bread-for-world',
          title: 'Christ Connection — Bread for the Starving World',
          html:
            'Joseph stores grain for seven years and opens the storehouses when the famine comes. All nations come to Egypt to buy grain and be fed. In John 6, Jesus says: "I am the living bread which came down from heaven: if any man eat of this bread, he shall live for ever" (John 6:51). The pattern is the same: one man, one provision, the world fed. The bread Joseph stored keeps Egypt and the surrounding world alive. The Bread that Christ gives keeps the soul alive forever.',
        },
        {
          kind: 'carry',
          html:
            'You may feel right now like you have nothing to give. No resources, no position, no particular gift. But Joseph&apos;s story suggests another possibility: that you might be storing grain in places you don&apos;t even realize will matter. A kindness you gave years ago that someone is living on right now. A word you spoke that is feeding someone through a hard year. A way you loved that is the bread keeping someone alive. The famine always comes. But so do the storehouses. What grain is God asking you to lay up now, not knowing whose hunger it will meet?',
        },
        {
          kind: 'reflection',
          id: 'gen41-grain',
          prompt:
            'What are you being asked to lay up now — some word, some presence, some steadiness — that might feed someone when the famine comes?',
        },
        {
          kind: 'artwork',
          matchTitle: /pharaoh|dream/i,
          matchArtist: /tissot/i,
          caption: 'Genesis 41:1–8 · Pharaoh&apos;s Dreams',
        },
      ],
    },
  ],
};
