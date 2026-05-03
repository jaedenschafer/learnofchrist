import { hp, hy, hg, t, verse as verse, plain, type RichChapterContent } from './types';

/**
 * Numbers 22 — Balaam and the donkey. Balak king of Moab fears Israel and
 * hires the prophet Balaam to curse them. God says no. Balak sends princes
 * again with more money. God lets Balaam go but his anger is kindled. Balaam's
 * donkey sees the angel of the LORD with a drawn sword three times and shies
 * aside; Balaam beats her three times. The LORD opens the donkey's mouth:
 * "What have I done unto thee, that thou hast smitten me these three times?"
 * The angel reveals himself: had the donkey not turned, "surely now also I had
 * slain thee, and saved her alive." 41 verses.
 *
 * Hebrew: qesem (divination — Balaam practiced it). Christ connections run
 * through 2 Peter 2:15-16, Jude 11, Rev 2:14 — warnings about Balaam, the
 * prophet who knew the truth but loved money. The donkey "in whose mouth the
 * LORD opened" prefigures God's habit of using the lowliest voices
 * (1 Cor 1:27-29: "God hath chosen the weak things of the world to confound
 * the things which are mighty"). The angel of the LORD = pre-incarnate Christ
 * in many readings. Voice: honor both the comedy and the seriousness. Balaam
 * isn't a hero — he's the cautionary tale of the prophet who keeps trying to
 * find a workaround for God's clear word.
 */
export const NUMBERS_22: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 22,

  estimatedMinutes: { beginner: 9, intermediate: 17, deep: 20 },
  intros: [
    'Israel is camped on the plains of Moab, east of the Jordan, and Balak king of Moab is afraid. Israel has conquered the Amorites and drawn nearer to Moab with every mile. In desperation, Balak sends for a prophet named Balaam to curse Israel. Balaam is famous across the ancient world — whatever he blesses is blessed, whatever he curses is cursed. Surely this man can deliver Moab from the threat.',
    'But here is the trouble: Balaam knows God. When God tells him "thou shalt not go," Balaam refuses the first embassy from Balak and his princes. But Balak is persistent. He sends princes again, this time with more money, and God — in a mysterious move — lets Balaam go. What follows is one of the Bible\'s most peculiar moments. Balaam rides his donkey toward Moab to curse Israel, but three times the donkey sees the angel of the LORD blocking the road with a drawn sword. Three times she refuses to pass. Three times Balaam beats her. Then God opens the donkey\'s mouth, and the animal speaks: "What have I done unto thee, that thou hast smitten me these three times?" The donkey has saved his life.',
  ],

  opener: {
    matchTitle: /balaam|donkey/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Numbers 22',
    quote:
      'Balaam was a prophet who knew God\'s will but loved money. When he tried to work around God\'s clear word, a donkey saw what he could not: an angel with a drawn sword. God speaks through the lowliest voice to save the very man trying to escape Him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 22 · Study Guide',
  },

  sections: [
    /* ─── Numbers 22:1–8 — The First Refusal ──────────────────────────────── */
    {
      ref: 'Numbers 22:1–8',
      title: 'The First No',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(1, 'And the children of Israel set forward, and pitched in the plains of Moab on this side Jordan by Jericho.'),
            verse(2,
              t('And Balak the son of Zippor saw all that Israel had done to the '),
              hg('Amorites', 'balak-fear'),
              t('.')
            ),
            plain(3, 'And Moab was sore afraid of the people, because they were many: and Moab was distressed because of the children of Israel.'),
            verse(4,
              t('And Moab said unto the elders of Midian, Now shall this '),
              hg('company lick up', 'company-lick'),
              t(' all that are round about us, as the ox licketh up the grass of the field. And Balak the son of Zippor was king of the Moabites at that time.')
            ),
            plain(5, 'He sent messengers therefore unto Balaam the son of Beor to Pethor, which is by the river of the land of the children of his people, to call him, saying, Behold, there is a people come out from Egypt: behold, they cover the face of the earth, and they abide over against me:'),
            verse(6,
              t('Come now therefore, I pray thee, '),
              hp('curse me this people', 'balaam-curse-plea'),
              t('; for they are too mighty for me: peradventure I shall prevail, that we may smite them, and that I may drive them out of the land: for I wot that he whom thou blessest is blessed, and he whom thou cursest is cursed.')
            ),
            plain(7, 'And the elders of Moab and the elders of Midian departed with the rewards of divination in their hand; and they came unto Balaam, and spake unto him the words of Balak.'),
            verse(8,
              t('And he said unto them, '),
              hp('Lodge here this night', 'balaam-first-answer'),
              t(', and I will bring you word again, as the Lord shall speak unto me: and the princes of Moab abode with Balaam.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'balak-fear',
          html:
            'Balak has watched Israel\'s campaign against the Amorites. He knows what Israel has done to the nations that stood in their way. His fear is reasonable by any earthly measure. But fear makes men do desperate things — and Moab\'s desperation leads them to hire a prophet to work against Israel.',
        },
        {
          kind: 'commentary',
          id: 'company-lick',
          html:
            'The image is visceral: the whole people swallowing the land whole, like an ox grazing. Balak\'s language shows a man gripped by panic, imagining total annihilation. It is from this terror that he seeks a supernatural answer.',
        },
        {
          kind: 'commentary',
          id: 'balaam-curse-plea',
          html:
            'Balaam was famous throughout the ancient Near East. His name is even found in extra-biblical inscriptions. What made him famous was his power over words — whatever he blessed thrived, whatever he cursed withered. Balak is offering him great wealth to use that power against Israel. The stakes are being set very high, and money is already part of the temptation.',
        },
        {
          kind: 'commentary',
          id: 'balaam-first-answer',
          html:
            'Notice Balaam\'s response: he will ask the Lord. This is not the answer of a man corrupted yet. Balaam seems to respect the Lord\'s authority. He will sleep on it and see what God says. That respect is about to be tested.',
        },
        {
          kind: 'carry',
          html:
            'A prophet is someone who knows God\'s word and speaks it faithfully, whatever the cost. Balaam begins this chapter as a man who at least respects God\'s authority enough to ask Him. But respect and obedience are not the same thing. Many of us know what God wants. We ask Him about it. We hear His answer clearly. And then we spend the rest of the chapter figuring out a way around it.',
        },
        {
          kind: 'reflection',
          id: 'reflect-first-no',
          prompt:
            'When have you known clearly what God wanted, but then spent time looking for a loophole? What made the loophole seem worth the cost?',
        },
      ],
    },

    /* ─── Numbers 22:9–14 — God\'s Clear Word ──────────────────────────────── */
    {
      ref: 'Numbers 22:9–14',
      title: 'The Word Is No',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(9,
              t('And God came unto Balaam, and said, What men are these with thee?')
            ),
            plain(10, 'And Balaam said unto God, Balak the son of Zippor, king of Moab, hath sent unto me, saying,'),
            plain(11, 'Behold, there is a people come out of Egypt, and they cover the face of the earth: come now, curse me them; peradventure I shall be able to overcome them in battle.'),
            verse(12,
              t('And God said unto Balaam, '),
              hp('Thou shalt not go with them', 'god-first-no'),
              t('; thou shalt not curse the people: for they are blessed.')
            ),
            plain(13, 'And Balaam rose up in the morning, and said unto the princes of Moab, Get you into your land: for the Lord refuseth to let me go with you.'),
            verse(14,
              t('And the princes of Moab rose up, and they went unto Balak, and said, '),
              t('Balaam refuseth to come with us'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'god-first-no',
          html:
            'God\'s word is unambiguous. "Thou shalt not go." Balaam hears it clearly and is obedient — at least at first. He refuses Balak\'s embassy and sends them back. He knows God\'s will. This is the moment he should have kept. This is the line he should have held. It is what a faithful prophet does.',
        },
        {
          kind: 'hebrew',
          id: 'qesem-divination',
          title: 'Qesem — "divination"',
          script: 'קֶסֶם',
          translit: '<strong>qesem</strong> · divination; a practice forbidden to Israel',
          description:
            'Balaam practices divination — reading signs, casting lots, attempting to pierce the veil between worlds. It is a skill that made him famous and wealthy. But God is not impressed by it. His word stands above all human attempts to know the future or move the present.',
        },
        {
          kind: 'christ',
          id: 'christ-first-refusal',
          title: 'Christ Connection — The Prophet Tested',
          html:
            'The New Testament returns to Balaam again and again as a warning. Peter writes: "Which have forsaken the right way, and are gone astray, following the way of Balaam the son of Bosor, who loved the wages of unrighteousness" (2 Peter 2:15). Jude warns against "the error of Balaam for reward" (Jude 11). And in Revelation, Jesus rebukes a church for holding "the doctrine of Balaam, who taught Balac to cast a stumblingblock before the children of Israel" (Rev. 2:14). Balaam is not a villain in his own mind — he is a man with divided loyalties, loving both God and money. But Jesus makes clear: you cannot have both.',
        },
        {
          kind: 'carry',
          html:
            'Balaam knew what God wanted. When he asked, God told him. And Balaam obeyed — the first time. The hard part comes next: holding the line when better offers come, when more money arrives, when the pressure increases. The faithfulness God looks for is not just hearing His word once. It is saying no to the same temptation three times.',
        },
        {
          kind: 'reflection',
          id: 'reflect-return-tempt',
          prompt:
            'What temptation keeps returning to you with a better offer each time? What would it cost you to keep saying no?',
        },
      ],
    },

    /* ─── Numbers 22:15–20 — The Second Embassy ───────────────────────────── */
    {
      ref: 'Numbers 22:15–20',
      title: 'The Returning Temptation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(15,
              t('And Balak sent yet again '),
              hg('princes, more, and more honourable than they', 'more-princes'),
              t('.')
            ),
            plain(16, 'And they came to Balaam, and said to him, Thus saith Balak the son of Zippor, Let nothing, I pray thee, hinder thee from coming unto me:'),
            verse(17,
              t('For I will promote thee unto very great honour, and I will do whatsoever thou sayest unto me: therefore come, I pray thee, '),
              hg('curse me this people', 'greater-wealth'),
              t('.')
            ),
            verse(18,
              t('And Balaam answered and said unto the servants of Balak, If Balak would give me his '),
              hg('house full of silver and gold', 'silver-gold'),
              t(', I cannot go beyond the word of the Lord my God, to do less or more.')
            ),
            verse(19,
              t('Now therefore, I pray you, '),
              hp('tarry ye also here this night', 'balaam-crack'),
              t(', that I may know what the Lord will say unto me again.')
            ),
            verse(20,
              t('And God came unto Balaam at night, and said unto him, If the men come to call thee, rise up, and go with them; but yet the word which I shall say unto thee, '),
              hp('that shalt thou do', 'god-lets-go'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'more-princes',
          html:
            'Balak does not accept the first refusal. He sends more princes — more important, more impressive, more persuasive. Each embassy is a fresh attempt, a renewed offer. The pressure escalates. Many of us fail not on the first offer, but on the seventh repetition of it.',
        },
        {
          kind: 'commentary',
          id: 'greater-wealth',
          html:
            'Now the bribe is explicit. Balak promises great honor and power. He will listen to Balaam\'s counsel. He will elevate him above normal limits. The wealth and status are no longer implied — they are laid out plainly for Balaam to consider.',
        },
        {
          kind: 'commentary',
          id: 'silver-gold',
          html:
            'Here is Balaam\'s first crack — "If Balak would give me his house full of silver and gold, I cannot go beyond the word of the Lord my God." Notice the language. He is not refusing because the word is sacred to him. He is refusing because he cannot. But his phrasing — "I cannot go beyond" — contains a hidden hope: what if there is a way to stay within God\'s word while still cursing Israel? What if he can find a workaround?',
        },
        {
          kind: 'commentary',
          id: 'balaam-crack',
          html:
            'Balaam asks to tarry another night. He will pray again. But here is the dangerous shift: he already knows what God said. God told him "thou shalt not go." But instead of simply refusing Balak and leaving, Balaam keeps the conversation open. "Let me ask again." This is where the fall begins — not in the act of disobedience, but in the refusal to accept the answer God already gave.',
        },
        {
          kind: 'commentary',
          id: 'god-lets-go',
          html:
            'And here is the mysterious move: God lets him go. "If the men come to call thee, rise up, and go with them." This is not permission. God is saying: go ahead, but you will go knowing that you will do what I tell you to do — nothing else. The trap is set. Balaam will go looking to curse, but his mouth will only bless.',
        },
        {
          kind: 'carry',
          html:
            'God does sometimes grant what He has refused. But He does not do it to let us off the hook. He does it to teach us. When He allows us to go forward on our own terms after telling us no, it is a warning. We are about to learn something hard about our own will versus His.',
        },
        {
          kind: 'reflection',
          id: 'reflect-second-ask',
          prompt:
            'When you ask God the same question a second time after He has already said no, what are you really hoping to hear?',
        },
      ],
    },

    /* ─── Numbers 22:21–27 — The Donkey Sees ──────────────────────────────── */
    {
      ref: 'Numbers 22:21–27',
      title: 'The Donkey\'s Vision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(21, 'And Balaam rose up in the morning, and saddled his ass, and went with the princes of Moab.'),
            verse(22,
              t('And '),
              hp('God\'s anger was kindled', 'god-anger'),
              t(' because he went: and '),
              hg('the angel of the Lord stood in the way for an adversary against him', 'angel-adversary'),
              t('. Now he was riding upon his ass, and his two servants were with him.')
            ),
            verse(23,
              t('And the ass saw the angel of the Lord standing in the way, and his sword drawn in his hand: and the ass turned aside out of the way, and went into the field: and '),
              hp('Balaam smote the ass', 'first-beating'),
              t(', to turn her into the way.')
            ),
            verse(24,
              t('But the angel of the Lord stood in a path of the vineyards, a wall being on this side, and a wall on that side.')
            ),
            verse(25,
              t('And when the ass saw the angel of the Lord, she '),
              hg('thrust herself unto the wall', 'thrust-wall'),
              t(', and crushed Balaam\'s foot against the wall: and he smote her again.')
            ),
            verse(26,
              t('And the angel of the Lord went further, and stood in a narrow place, where was no way to turn either to the right hand or to the left.')
            ),
            verse(27,
              t('And when the ass saw the angel of the Lord, she '),
              t('lay down under Balaam'),
              t(': and Balaam\'s anger was kindled, and he smote the ass with a staff.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'god-anger',
          html:
            'God is angry because Balaam went. Not because he sinned — but because he went. He heard the word, asked again, God let him go, and he chose to go. His anger shows up as an obstacle: the angel of the LORD with a drawn sword, blocking the road.',
        },
        {
          kind: 'commentary',
          id: 'angel-adversary',
          html:
            'The angel of the Lord is standing as an "adversary" — an accuser, an opponent. For Israel, God sends the angel as a protector. For Balaam, the same angel stands as a barrier. The difference is not in the angel. It is in the heart of the one facing him.',
        },
        {
          kind: 'commentary',
          id: 'first-beating',
          html:
            'Three times the donkey sees what Balaam cannot: the angel of the LORD. Three times she refuses to pass. And three times Balaam beats her. The number three runs through this scene like a drum beat, building to something. Three refusals. Three beatings. And finally, on the third occasion, the donkey speaks.',
        },
        {
          kind: 'commentary',
          id: 'thrust-wall',
          html:
            'The second time, there is a wall on each side. The donkey cannot turn right or left. She does the only thing she can: she crushes herself against the wall rather than pass the angel. Her body absorbs the blow so that Balaam will see. And still he beats her.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-donkey',
          title: 'The Donkey\'s Name — Unnamed',
          script: 'אתון',
          translit: '<strong>athon</strong> · a female donkey; a beast of burden',
          description:
            'The donkey has no name in this text. She is a servant animal, the lowest rank in Balaam\'s caravan. Yet three times she sees what the prophet cannot. God speaks through the lowliest thing present to save the prophet who sought to reject Him. This is a pattern throughout Scripture: God\'s voice coming through the unexpected mouth.',
        },
        {
          kind: 'christ',
          id: 'christ-weak-chosen',
          title: 'Christ Connection — The Weakness Made Strong',
          html:
            'Paul writes: "God hath chosen the foolish things of the world to confound the wise; and God hath chosen the weak things of the world to confound the things which are mighty… That no flesh should glory in his presence" (1 Cor. 1:27, 29). The donkey is the very picture of this. She is not mighty. She has no learning, no authority, no name. She is a beast. Yet God uses her voice to deliver a prophet from his own blindness. This is the consistent pattern of God: using what the world calls weak to accomplish what the world calls impossible.',
        },
        {
          kind: 'carry',
          html:
            'You do not need the title to speak the truth God gives you. You do not need the authority to refuse wrong. The donkey in this story has neither name nor learning, yet she speaks with more clarity than the prophet. If God has put a truth in your mouth, it matters less what you are than what you say. And if you are silent when you ought to speak — because you fear you lack the qualifications — you are holding back the voice God wants to use.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'reflect-donkey-voice',
          prompt:
            'When have you held back from speaking a hard truth because you didn\'t think you had the authority? What if God wanted to use your voice anyway?',
        },
      ],
    },

    /* ─── Numbers 22:28–35 — The Donkey Speaks ───────────────────────────── */
    {
      ref: 'Numbers 22:28–35',
      title: 'The Donkey Speaks',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(28,
              t('And the Lord '),
              hp('opened the mouth of the ass', 'lord-opened-mouth'),
              t(', and she said unto Balaam, What have I done unto thee, that thou hast smitten me these three times?')
            ),
            verse(29,
              t('And Balaam said unto the ass, Because thou hast '),
              hg('mocked me', 'mocked'),
              t(': I would there were a sword in mine hand, for now would I kill thee.')
            ),
            verse(30,
              t('And the ass said unto Balaam, '),
              hp('Am not I thine ass', 'donkey-question'),
              t(', upon which thou hast ridden ever since I was thine unto this day? was I ever wont to do so unto thee? And he said, Nay.')
            ),
            plain(31, 'Then the Lord opened the eyes of Balaam, and he saw the angel of the Lord standing in the way, his sword drawn in his hand: and he bowed down his head, and fell flat on his face.'),
            verse(32,
              t('And the angel of the Lord said unto him, Wherefore hast thou smitten thine ass these three times? behold, I am come out for an adversary, because thy way is '),
              hy('perverse before me', 'way-perverse'),
              t(':')
            ),
            verse(33,
              t('And the ass saw me, and turned from me these three times: unless she had turned from me, surely now also I had '),
              hp('slain thee, and saved her alive', 'angel-mercy'),
              t('.')
            ),
            plain(34, 'And Balaam said unto the angel of the Lord, I have sinned; for I knew not that thou stoodest in the way against me: now therefore, if it displease thee, I will get me back again.'),
            verse(35,
              t('And the angel of the Lord said unto Balaam, '),
              t('Go with the men'),
              t(': but only the word that I shall speak unto thee, that thou shalt speak. So Balaam went with the princes of Balak.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'lord-opened-mouth',
          html:
            'The Lord opened the donkey\'s mouth. This is not something donkeys can do. It is a direct act of God — the same God who parted the Red Sea, who rained fire on Sodom, now speaking through the throat of a beast. The point is not the miracle itself. The point is what God is willing to do to reach someone who has hardened his heart. He will speak through whatever voice it takes.',
        },
        {
          kind: 'commentary',
          id: 'mocked',
          html:
            'Balaam\'s anger at this point is remarkable. A donkey has just spoken to him in Hebrew, and his response is to curse her for "mocking" him. His pride is so great that he cannot see what is happening. He cannot even imagine that a donkey might be right and a prophet wrong. But the donkey\'s question cuts through all of it: "What have I done unto thee?"',
        },
        {
          kind: 'commentary',
          id: 'donkey-question',
          html:
            'The donkey appeals to history. "Am not I thine ass, upon which thou hast ridden ever since I was thine unto this day? was I ever wont to do so unto thee?" The donkey is right. She has been faithful, obedient, steady. She has carried him faithfully for years. And now, three times, she has acted differently. Three times she has seen something Balaam cannot see. The question is: does her track record of faithfulness mean anything?',
        },
        {
          kind: 'commentary',
          id: 'way-perverse',
          html:
            'The angel names what has happened. Balaam\'s way is "perverse" — twisted, bent away from what is right. He set his face toward Moab knowing what God had said. He asked God again, hoping for a different answer. When God let him go, he went. Every step toward Moab was a step away from obedience.',
        },
        {
          kind: 'commentary',
          id: 'angel-mercy',
          html:
            'This is the turning point of the chapter: had the donkey not turned aside, the angel would have slain Balaam and saved the donkey alive. The donkey\'s disobedience to Balaam\'s commands was obedience to God\'s protection. By refusing to move forward, the donkey saved the life of the prophet who was beating her. This is the economy of God\'s kingdom: the last serve the first, the weak save the strong, and an unnamed animal shows more wisdom than a famous prophet.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-perverse',
          title: 'Iquesh — "perverse"',
          script: 'עִקֵּשׁ',
          translit: '<strong>iquesh</strong> · crooked, twisted; a way bent from straightness',
          description:
            'The angel does not say Balaam is evil. He says his way is perverse — bent, twisted, leading sideways from where it ought to go. This is the danger of the divided heart: not outright rebellion, but gradual bending until the prophet ends up heading the wrong direction.',
        },
        {
          kind: 'christ',
          id: 'christ-angel-sword',
          title: 'Christ Connection — The Angel of the Lord',
          html:
            'Many theologians read "the angel of the Lord" in the Old Testament as the pre-incarnate Christ — God Himself appearing in human form before His full incarnation. If that reading is right, then Jesus is the one standing in Balaam\'s way with a drawn sword. Jesus is the one protecting Israel. Jesus is the one willing to slay an apostate prophet to protect His people. Later, Balaam will bless Israel three times, unable to curse them because his mouth will be bound by the One who stood before him with a sword. And for the faithful reader, it is a comfort: the One who stands as an adversary to those who resist Him stands as a shield to those who love Him.',
        },
        {
          kind: 'carry',
          html:
            'The angel says: your donkey saw what you could not. A donkey. An unnamed animal. Lower than you in every way the world measures status. Yet while you were blind, she saw. While you were angry, she was wise. The hardest lesson Balaam learns in this chapter is not that he cannot curse Israel. It is that truth can come from the mouth of anyone — that it might come from a voice you did not expect, in a form you did not anticipate, from someone the world calls lowly. And when it does, the question is whether you will hear it.',
        },
        {
          kind: 'reflection',
          id: 'reflect-unexpected-voice',
          prompt:
            'From what unexpected voice has God spoken truth to you? What made it hard to hear? What changed when you finally listened?',
        },
      ],
    },

    /* ─── Numbers 22:36–41 — The Prophet Arrives ──────────────────────────── */
    {
      ref: 'Numbers 22:36–41',
      title: 'Arriving to Bless',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            verse(36,
              t('And when Balak heard that Balaam was come, he went out to meet him unto the city of Moab, which is in the border of Arnon, which is in the utmost coast.')
            ),
            verse(37,
              t('And Balak said unto Balaam, Did I not earnestly send unto thee to call thee? wherefore camest thou not unto me? am I not able to promote thee to honour?')
            ),
            verse(38,
              t('And Balaam said unto Balak, Lo, I am come unto thee: have I now any power at all to say any thing? the word that God putteth in my mouth, '),
              hp('that shall I speak', 'balaam-bound'),
              t('.')
            ),
            plain(39, 'So Balaam went with Balak, and they came unto Kirjath-huzoth.'),
            verse(40,
              t('And Balak offered oxen and sheep, and sent to Balaam, and to the princes that were with him.')
            ),
            verse(41,
              t('And it came to pass on the morrow, that Balak took Balaam, and brought him up into the high places of Baal, that thence he might see the utmost part of the people.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'balaam-bound',
          html:
            'At this moment, Balaam finally speaks clearly. He tells Balak the truth: "I am come unto thee: have I now any power at all to say any thing? the word that God putteth in my mouth, that shall I speak." This is the binding that the angel effected. The prophet who came to curse is now chained to speak only blessing. His mouth is no longer his own.',
        },
        {
          kind: 'carry',
          html:
            'How often do we arrive somewhere thinking we will do one thing, only to find ourselves compelled by God to do another? Balaam came to curse and found himself blessing. We come to judge and find ourselves called to mercy. We come to condemn and find ourselves moved to compassion. God\'s work in our lives often looks like failure from the outside — we did not do what we set out to do. But from God\'s perspective, we did exactly what we were sent to do.',
        },
        {
          kind: 'reflection',
          id: 'reflect-intention-revised',
          prompt:
            'When has God turned your plans upside down and made you speak or do something opposite from what you intended? What did you learn?',
        },
      ],
    },
  ],
};
