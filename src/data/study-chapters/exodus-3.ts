import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 3 — The burning bush, the holy ground, and the name of God.
 *
 * A shepherd notices a bush aflame but not consumed. He turns aside to see.
 * God speaks his name twice. Moses is sent to deliver Israel from Egypt.
 * And in verses 14–15, the God who is about to remake a nation first unmakes
 * Moses' ability to pronounce His name: I AM THAT I AM.
 *
 * This chapter has shaped every theophany and every divine name in scripture
 * that follows. The burning without consuming becomes a type of Christ — the
 * cross where divine fire dwells in human flesh without destroying it, and a
 * type of Mary bearing what cannot be borne without the protection of God.
 * The "I AM" name rings forward into John 8:58, echoes through every "I am"
 * statement in the Fourth Gospel, and becomes the ground of every promise God
 * will make to His people.
 */
export const EXODUS_3: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 3,

  estimatedMinutes: { beginner: 9, intermediate: 16, deep: 21 },
  intros: [
    'Exodus 3 is one of the three most quoted theophanies in all of scripture. God appears in a fire that does not consume, speaks the divine name for the first time, and sends a bewildered shepherd to tell the empire of Egypt that the Lord has arrived. Every time the Old Testament circles back to this chapter—and it does so often—it is because something crucial about who God is lives in these twenty-two verses.',
    'The chapter begins with a small question: Why does this one bush burn? It ends with a name that cannot be translated, only approximated. I AM THAT I AM. Or I AM WHO I AM. Or I will be who I will be. The verb is not settled; the name is not simple. But it is the only name God gives Moses to carry back to a people in slavery, the only credential he has for a mission that will reshape the world.',
    'It is a chapter about turning aside. About noticing what nobody else notices. About the fact that the presence of God is not always where we expected it to be—not in the cedars of Lebanon or the palaces of Pharaoh, but in a thornbush in the middle of the desert, speaking to a man who had run away from his own people and was now tending someone else&apos;s sheep. Holy ground is not discovered from a distance. It is found by the person who is willing to turn.',
  ],

  opener: {
    matchTitle: /burning bush/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── Exodus 3:1–3 — The Bush That Burned ───────────────────────── */
    {
      ref: 'Exodus 3:1–3',
      title: 'The Bush That Burned',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('Now Moses kept the flock of Jethro his father in law, the priest of Midian: and he led the flock to the backside of the desert, and came to the mountain of God, even to '),
                hy('Horeb', 'horeb-context'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And the angel of the LORD appeared unto him in a '),
                hy('flame of fire', 'fire-not-consumed-comment'),
                t(' out of the midst of a '),
                hy('bush', 'seneh-thornbush'),
                t(': and he looked, and, behold, the bush '),
                hg('burned with fire, and the bush was not consumed', 'fire-not-consumed-comment'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And Moses said, I will now '),
                hg('turn aside', 'turn-aside-comment'),
                t(', and see this great sight, why the bush is not burnt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'horeb-context',
          html:
            'Horeb is the mountain of God—the same peak where Israel will later gather at the foot to receive the Law, and where Elijah will later come when he flees the kingdom in despair. It is not that Moses set out knowing he would meet God. He was keeping sheep. He came to this place out of habit, following the pasture. The divine appointment catches him at work[res:sefaria-exodus-3].',
        },
        {
          kind: 'hebrew',
          id: 'seneh-thornbush',
          title: 'Seneh — &ldquo;thornbush&rdquo;',
          script: 'סְנֶה',
          translit: '<strong>seneh</strong> · a low, common desert bush',
          description:
            'Not a cedar of Lebanon. Not a towering oak. A low, thorny plant, the kind of thing nobody would expect to carry the presence of God. God chooses the humble place to dwell. The writers after this will never recover from it: the gospel climaxes not in a palace, but on a cross.',
        },
        {
          kind: 'commentary',
          id: 'fire-not-consumed-comment',
          html:
            'The miraculous detail is almost thrown away. The fire does not consume. For centuries, the Church has read this as a foreshadowing: Gregory of Nyssa saw in it the image of Mary bearing the divine and remaining unharmed. Others saw in it the cross itself—the place where God&apos;s holiness, like fire, dwells in human flesh without destroying it. The Hebrew mind had no word for the miraculous that separated it from the meaning: a bush that burns without burning is not a magic trick, it is a sign of a presence no human category can contain or consume [res:burning-bush].',
        },
        {
          kind: 'carry',
          html:
            'You have walked past a hundred burning bushes without stopping. They were not necessarily on the side of the mountain. Sometimes they are in the conversation a friend keeps starting. Sometimes they are in the child who asks the question everyone else learned not to ask. Sometimes they are in the small voice of conscience you have gotten good at walking past. The only difference between a burning bush and a burned-out one is the person who turns aside to look. What are you walking past?',
        },
        {
          kind: 'reflection',
          id: 'turn-aside-comment',
          prompt:
            'What in your life right now is burning and not consumed—something impossible you keep noticing? What would it take for you to actually turn aside and look?',
        },
      ],
    },

    /* ─── Exodus 3:4–6 — Moses, Moses ───────────────────────────────── */
    {
      ref: 'Exodus 3:4–6',
      title: 'Moses, Moses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 4,
              spans: [
                t('And when the LORD saw that he turned aside to see, God called unto him out of the midst of the bush, and said, '),
                hp('Moses, Moses', 'christ-named-twice'),
                t('. And he said, Here am I.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And he said, '),
                hg('Draw not nigh hither', 'draw-not-nigh-comment'),
                t(': '),
                hg('put off thy shoes from off thy feet', 'holy-ground-comment'),
                t(', for the place whereon thou standest is '),
                hy('holy ground', 'adamat-kodesh'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Moreover he said, I am the God of thy father, the God of Abraham, the God of Isaac, and the God of Jacob. And Moses '),
                hg('hid his face', 'hid-face-comment'),
                t('; for he was afraid to look upon God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'christ-named-twice',
          html:
            'God says the name twice. <em>Moses, Moses.</em> The doubling is not emphatic; it is intimate. Jesus uses the same language in Luke 22:31, calling Peter by his name twice. So does God to Abraham in Genesis 22:11. The doubled name is how the God of the Bible calls the people He is about to ask everything of. It is how He gets their attention before He unmakes them and remakes them for a purpose they cannot yet see.',
        },
        {
          kind: 'commentary',
          id: 'draw-not-nigh-comment',
          html:
            'The first command is don&apos;t come closer. The presence of God is not safe to approach carelessly. The text is anchored in physicality: it is not metaphorical. Moses is to keep distance, to remove his shoes, to stand barefoot on earth that has become holy ground. The modern reader tends to spiritualize this away—make it about the heart, about attitude, about metaphorical closeness. But Exodus doesn&apos;t let you. It is about feet and shoes and the actual ground.',
        },
        {
          kind: 'hebrew',
          id: 'adamat-kodesh',
          title: 'Adamat-Qodesh — &ldquo;holy ground&rdquo;',
          script: 'אַדְמַת־קֹדֶשׁ',
          translit: '<strong>adamah</strong> · ground, earth · <strong>qodesh</strong> · holiness, set-apartness',
          description:
            'This is the first time the word <em>holy</em> is applied to a place in all of scripture. Not to a temple (there is no temple yet), not to the tabernacle (it does not exist yet), not to Jerusalem. To the ground. To this ordinary place where a man has turned aside to see why a bush burns. Holiness, the text is telling you, is not confined to buildings or institutions. It appears where God appears.',
        },
        {
          kind: 'commentary',
          id: 'holy-ground-comment',
          html:
            'Put off thy shoes. The command appears only three other times in scripture—to Joshua at the conquest (Josh. 5:15), to Paul in a vision (Acts 9), and in the vision of Isaiah in the temple. Every time, the person is standing on ground made holy because God is on it. We are not taught that earth is holy by nature. We are taught that earth becomes holy when God makes His presence known. The shoes come off not as a sign of respect, but as an acknowledgment: something is different here. This is not normal ground.',
        },
        {
          kind: 'commentary',
          id: 'hid-face-comment',
          html:
            'Moses is afraid to look upon God. The text does not soften this. There is no romantic moment here, no warm encounter. There is fear, absolute and immediate, at the nearness of holiness. The God who called his name twice now gives him a reason to be afraid. The holiness is real. The distance is real. The command not to come closer is not a test. It is a boundary that matters.',
        },
        {
          kind: 'carry',
          html:
            'The God of your fathers is not a concept you can think your way into. He is not a feeling you can cultivate in solitude. He comes to you where you are, calls you by name, and the first thing you understand is that you are on holy ground and you are not ready to be here. That fear is not a sign you have made a mistake. It is the beginning of wisdom. Let yourself be afraid of God before you make Him smaller by making Him comfortable.',
        },
        {
          kind: 'reflection',
          id: 'moses-twice',
          prompt:
            'When was the last time you were genuinely afraid in the presence of God rather than comfortable? What was that moment trying to teach you?',
        },
      ],
    },

    /* ─── Exodus 3:7–10 — I Have Seen, I Have Heard ──────────────────── */
    {
      ref: 'Exodus 3:7–10',
      title: 'I Have Seen, I Have Heard',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 7,
              spans: [
                t('And the LORD said, I have surely seen the affliction of my people which are in Egypt, and have heard their cry by reason of their taskmasters; for I know their sorrows;'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And I am come down to deliver them out of the hand of the Egyptians, and to bring them up out of that land unto a good land and a large, unto a land flowing with milk and honey; unto the place of the Canaanites, and the Hittites, and the Amorites, and the Perizzites, and the Hivites, and the Jebusites.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Now therefore, behold, the cry of the children of Israel is come unto me: and I have also seen the oppression wherewith the Egyptians oppress them.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Come now therefore, and I will send thee unto Pharaoh, that thou mayest bring forth my people the children of Israel out of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'seen-heard-down',
          html:
            'The structure of these verses will become the structure of the Incarnation. <em>I have seen, I have heard, I have come down.</em> God does not work from a distance. He does not manage Egypt from heaven. He comes down. God&apos;s first response to affliction is not explanation; it is presence and rescue. The nation will later sing, &ldquo;I know that the LORD will maintain the cause of the afflicted, and the right of the poor&rdquo; (Psalm 140:12). But here He is telling Moses where the conviction comes from: He Himself has seen, He Himself has heard. The knowledge is not theoretical. It is intimate.',
        },
        {
          kind: 'christ',
          id: 'christ-coming-down',
          title: 'Christ Connection — God Who Comes Down',
          html:
            'Paul writes of Christ, &ldquo;Who, though he was in the form of God… made himself of no reputation, and took upon him the form of a servant, and was made in the likeness of men… he humbled himself, and became obedient unto death, even the death of the cross&rdquo; (Phil. 2:6–8). But that pattern—I see, I hear, I come down—is not new in the New Testament. It is old. It is what the God of Moses did at the burning bush. It is the pattern of all God&apos;s rescue. He hears the cry, He comes down, He makes Himself known to the person who is most surprised to see Him.',
        },
        {
          kind: 'carry',
          html:
            'You have probably prayed a prayer no one heard but God. You have probably wept in a way only God saw. You are not being ignored from heaven; you are being waited on by a God who knows the exact house where you live, the exact words the people speaking over you are saying, the exact measure of what you can bear. That God does not stay at a distance and manage the situation. He comes down. He sends people. He enters into the mess. And He asks you first.',
        },
        {
          kind: 'reflection',
          id: 'seen-heard',
          prompt:
            'What is one way God has &ldquo;come down&rdquo; into your own situation? What was He rescuing you from?',
        },
      ],
    },

    /* ─── Exodus 3:11–12 — Who Am I? ─────────────────────────────────── */
    {
      ref: 'Exodus 3:11–12',
      title: 'Who Am I?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 11,
              spans: [
                t('And Moses said unto God, '),
                hg('Who am I', 'who-am-i-comment'),
                t(', that I should go unto Pharaoh, and that I should bring forth the children of Israel out of Egypt?'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And he said, Certainly I will be with thee; and '),
                hy('this shall be a token unto thee, that I have sent thee', 'token-sign'),
                t(': When thou hast brought forth the people out of Egypt, ye shall serve God upon this mountain.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'who-am-i-comment',
          html:
            'Moses&apos; first response is not faith. It is a question. <em>Who am I?</em> This is the question of someone who knows his own history: he killed a man and fled in shame. He has been out of the world for forty years. He is nobody. God does not answer the question directly—does not say, &ldquo;You are chosen&rdquo; or &ldquo;You are qualified.&rdquo; He says something far more reassuring: &ldquo;I will be with thee.&rdquo> The credential for the mission is not the person being sent. It is the presence of the God who sends.',
        },
        {
          kind: 'hebrew',
          id: 'token-sign',
          title: 'Owt — &ldquo;sign&rdquo;',
          script: 'אוֹת',
          translit: '<strong>&apos;owt</strong> · sign, miracle, proof',
          description:
            'God promises a sign. Not that Moses will succeed with Pharaoh. Not that it will be easy. The sign is simply this: <em>when thou hast brought the people out, ye shall serve God upon this mountain.</em> The verification comes at the end, not the beginning. God is saying, walk into this impossible thing and I will show you at the mountain that you should have trusted Me. Most people want the sign before the step. God often gives it after.',
        },
        {
          kind: 'carry',
          html:
            'You are probably less qualified than you think you need to be for the thing God is asking you to do. You probably don&apos;t have the background, the education, the experience, the time, the resources. That is exactly the setup God prefers. Because the moment you start, you will have to know, moment by moment, that you are only alive if He is with you. That is not a limitation. That is the only way to actually walk with God instead of walking ahead of Him.',
        },
        {
          kind: 'reflection',
          id: 'who-am-i',
          prompt:
            'Where is God asking you to step out as someone who is—by human standards—not ready? What makes you hesitate?',
        },
      ],
    },

    /* ─── Exodus 3:13–15 — I AM THAT I AM ───────────────────────────── */
    {
      ref: 'Exodus 3:13–15',
      title: 'The Name',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 13,
              spans: [
                t('And Moses said unto God, Behold, when I come unto the children of Israel, and shall say unto them, The God of your fathers hath sent me unto you; and they shall say to me, '),
                hg('What is his name?', 'what-is-his-name-comment'),
                t(' what shall I say unto them?'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And God said unto Moses, '),
                hp('I AM THAT I AM', 'ehyeh-asher-ehyeh'),
                t(': and he said, Thus shalt thou say unto the children of Israel, '),
                hp('I AM', 'ehyeh-asher-ehyeh'),
                t(' hath sent me unto you.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And God said moreover unto Moses, Thus shalt thou say unto the children of Israel, The LORD God of your fathers, the God of Abraham, the God of Isaac, and the God of Jacob, hath sent me unto you: this is my name for ever, and this is my memorial unto all generations.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'what-is-his-name-comment',
          html:
            'Moses is asking the right question. To know someone&apos;s name is to know who they are. In the ancient world, a name was not a label; it was a statement of character, authority, and nature. When Israel asks God&apos;s name, they are asking, <em>who is this God, really?</em> They are not asking for a sound. They are asking for the truth of His being.',
        },
        {
          kind: 'hebrew',
          id: 'ehyeh-asher-ehyeh',
          title: 'Ehyeh Asher Ehyeh — &ldquo;I AM THAT I AM&rdquo;',
          script: 'אֶהְיֶה אֲשֶׁר אֶהְיֶה',
          translit: '<strong>ehyeh</strong> · I will be (imperfect, first person) · <strong>asher</strong> · that, who · <strong>ehyeh</strong> · I will be',
          description:
            'The Hebrew verb is <em>imperfect</em> tense, not present. It is not <em>I am</em> in the sense of a static being, but <em>I will be</em> — a future, ongoing, unfolding presence. The name cannot be caught in a sentence. It is an action, a promise, a refusal to be pinned down. God is not saying He is a noun. He is saying He will be what the moment needs Him to be. Some scholars translate it <em>I am who I am</em>, others <em>I will be who I will be</em>, still others <em>I am the one who is.</em> The ambiguity is not a translation problem. It is the point. The name is alive.',
        },
        {
          kind: 'commentary',
          id: 'i-am-meaning',
          html:
            'What is God saying by refusing to be named? He is saying: <em>I am not a borrowed deity, not a god you have been worshiping in Egypt under another name, not a god you have negotiated with before.</em> I am not reducible to the category you think you understand. I am not manageable. I am not the kind of being whose essence you can capture and keep in a box. The only name I give you is a refusal, and the refusal is a gift—it means you will never get to the end of who I am, never run out of ways I can show up, never face a moment where I cannot meet it because I have already been categorized [res:yhwh-name].',
        },
        {
          kind: 'christ',
          id: 'christ-i-am',
          title: 'Christ Connection — Before Abraham Was',
          html:
            'In John 8:58, when the Pharisees ask Jesus who He is, He says, &ldquo;Before Abraham was, I am&rdquo; — using the same form of the verb <em>to be</em> that God uses here. The Pharisees pick up stones to kill Him because they understand exactly what He is claiming: <em>I am</em>. That is not small-talk. That is the name. And in John 6, 8, 9, 10, 11, and 15, Jesus repeats it over and over: &ldquo;I am the bread of life,&rdquo; &ldquo;I am the light,&rdquo; &ldquo;I am the door,&rdquo; &ldquo;I am the good shepherd,&rdquo; &ldquo;I am the resurrection and the life,&rdquo; &ldquo;I am the true vine.&rdquo; Every echo of <em>I am</em> goes back to this burning bush. Every declaration of who Christ is carries the weight of this name.',
        },
        {
          kind: 'carry',
          html:
            'You do not need to understand God fully before you walk with Him. In fact, the moment you think you have fully understood Him, you have made Him too small. The name He gives you is an invitation to spend the rest of your life surprised by what He will be. Let Him off the hook of your categories. Let Him be the kind of God who does not fit, who shows up in ways you didn&apos;t predict, who is more tender than you thought and more true. The name is <em>I will be</em>. Not <em>I was</em>. Not <em>I have decided.</em> <em>I will be</em> — unfolding, arriving, waiting for you at the next corner.',
        },
        {
          kind: 'reflection',
          id: 'i-am-that-i-am',
          prompt:
            'In what way have you tried to box God into a category? Where might He be waiting to surprise you by being more than what you expected?',
        },
      ],
    },

    /* ─── Exodus 3:16–22 — The Commission Detailed ────────────────────── */
    {
      ref: 'Exodus 3:16–22',
      title: 'The Covenant Kept',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 16,
              spans: [
                t('Go, and gather the elders of Israel together, and say unto them, The LORD God of your fathers, the God of Abraham, of Isaac, and of Jacob, appeared unto me, saying, I have surely visited you, and seen that which is done to you in Egypt:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And I have said, I will bring you up out of the affliction of Egypt unto the land of the Canaanites, and the Hittites, and the Amorites, and the Perizzites, and the Hivites, and the Jebusites, unto a land flowing with milk and honey.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And they shall hearken to thy voice: and thou shalt come, thou and the elders of Israel, unto the king of Egypt, and ye shall say unto him, The LORD God of the Hebrews hath met with us: and now let us go, we beseech thee, three days&apos; journey into the wilderness, that we may sacrifice to the LORD our God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exodus_3_v16-22',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 19,
              spans: [
                t('And I am sure that the king of Egypt will not let you go, no, not by a mighty hand.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And I will stretch out my hand, and smite Egypt with all my wonders which I will do in the midst thereof: and after that he will let you go.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And I will give this people favour in the sight of the Egyptians: and it shall come to pass, that when ye go, ye shall not go empty:'),
              ],
            },
            {
              number: 22,
              spans: [
                t('But every woman shall borrow of her neighbour, and of her that sojourneth in her house, jewels of silver, and jewels of gold, and raiment: and ye shall put them upon your sons, and upon your daughters; and ye shall spoil the Egyptians.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gather-elders',
          html:
            'God tells Moses to go first to the elders, the keepers of the covenant memory. These are the old ones who still remember the promise made to Abraham. The chain of faithfulness runs through them. Moses is not sent to start something new. He is sent to carry forward something very old.',
        },
        {
          kind: 'commentary',
          id: 'three-days-journey',
          html:
            'The request is modest. <em>Three days&apos; journey into the wilderness, that we may sacrifice to the LORD our God.</em> But Pharaoh will hear in it the echo of a secret: they are not coming back. God knows Pharaoh will refuse. God is giving the people permission, in advance, to ask for something they will actually get. The negotiation is scripted. The ending is known before the beginning. And yet it must be walked through, moment by moment.',
        },
        {
          kind: 'commentary',
          id: 'mighty-hand',
          html:
            'The text is extraordinarily direct: <em>I am sure that the king of Egypt will not let you go, no, not by a mighty hand.</em> God is telling Moses in advance exactly what will happen. Pharaoh will say no. And God will have to break in with power. This is not a story about human persuasion or cunning. It is a story about the moment when the kingdom of this world meets the kingdom of God and the kingdom of God wins, not because it negotiates better, but because it is real.',
        },
        {
          kind: 'carry',
          html:
            'When God sends you to ask for something you believe you should have, He is not always sending you because you will be heard. He is sometimes sending you because you need to ask, because the people who hear the ask need to make a choice, because the refusal you will receive teaches something about power and truth. You are not responsible for the outcome. You are responsible for the step. And sometimes the step is asking for something you already know will be refused, because there is something about that refusal that needs to happen in front of witnesses.',
        },
        {
          kind: 'reflection',
          id: 'commission-detailed',
          prompt:
            'Where is God asking you to make a request you are afraid will be refused? What might He be trying to teach in the refusal?',
        },
        {
          kind: 'artwork',
          matchTitle: /moses/i,
          caption: 'Exodus 3:11–22 · The Commission',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Exodus 3',
    quote:
      'A bush burned but was not consumed. God spoke His name—I AM THAT I AM—and sent a shepherd to tell the empire of Egypt that the Lord had come to deliver His people. Holy ground is where God appears.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 3 · Study Guide',
  },


  resources: [
    {
      id: 'yhwh-name',
      kind: 'study',
      source: 'Sefaria',
      label: 'The Name YHWH in Exodus 3',
      url: 'https://www.sefaria.org/Exodus.3',
      description: 'Hebrew text and interpretation of the divine name revealed.',
    },
    {
      id: 'sefaria-exodus-3',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 3 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Exodus.3',
      description: 'The Hebrew text of Exodus 3 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
