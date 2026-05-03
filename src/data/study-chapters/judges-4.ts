import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges 4 — Deborah[res:bibleodyssey-deborah-barak], Barak, and Jael[res:intertextual-spirit-women-jael]
 *
 * The chapter of unlikely deliverance. God&apos;s leadership moves through a prophetess,
 * a hesitant military commander, and a tent-dwelling woman[res:sefaria-women-judges-leaders]. Every expected honor goes
 * to someone the culture would never have expected to have it. Narratively dense,
 * theologically provocative on agency, faith, and the gender of leadership.
 */
export const JUDGES_4: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 4,

  estimatedMinutes: { beginner: 8, intermediate: 16, deep: 20 },
  intros: [
    'The children of Israel have turned from God again, and this time the cost is iron. Jabin king of Canaan oppresses them for twenty years with 900 chariots — an armored force Israel cannot hope to match on the open field. They cry out to the Lord.',
    'God answers through Deborah, a prophetess who sits under a palm tree and judges Israel. She calls on Barak to raise ten thousand men and face Sisera, Jabin&apos;s commander. Barak hesitates: he will only go if Deborah goes with him. She agrees — but warns him that the honor of the kill will go to a woman. The battle unfolds at the river Kishon, where the Lord discomfits Sisera&apos;s chariots. Sisera flees on foot and finds shelter in the tent of Jael, a Kenite woman. There, while he sleeps, Jael drives a tent peg through his temples.',
    'What makes this chapter breathtaking is its complete inversion of power. The strongest army loses to foot soldiers. The man called to lead proves reluctant. The final blow comes from a woman in a tent. God announces the victory through a woman, fights it alongside a man who doubts, and delivers it by the hand of a woman who refuses to be a bystander. If you have ever wondered whether God uses imperfect courage or works through unexpected vessels, Judges 4 is your answer.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /deborah|jabin|kishon/i,
    caption: 'Judges 4 · The Whole Chapter',
  },

  sections: [
    /* ─── Judges 4:1–3 — Israel Under Iron ───────────────────────────────── */
    {
      ref: 'Judges 4:1–3',
      title: 'Israel Under Iron Chariots',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('And the children of Israel '),
                hg('again did evil in the sight of the Lord', 'judg4-evil'),
                t(': for '),
                hg('Ehud was dead', 'judg4-after-ehud'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And the Lord sold them into the hand of '),
                hg('Jabin king of Canaan', 'judg4-jabin'),
                t(', that reigned in Hazor; the captain of whose host was '),
                hg('Sisera', 'judg4-sisera'),
                t(', which dwelt in Harosheth of the Gentiles.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the children of Israel cried unto the Lord: for he had '),
                hg('nine hundred chariots of iron', 'judg4-chariots'),
                t('; and twenty years he mightily oppressed the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judg4-evil',
          html:
            'The cycle turns again. Each judge dies, and the people forget the God who delivered them. There is no malice here — only the rhythm of human memory: each generation must choose, and each must relearn the cost of choosing poorly. The text does not shame them for this. It simply names it: this is what happens when we drift.',
        },
        {
          kind: 'commentary',
          id: 'judg4-after-ehud',
          html:
            'Ehud, the left-handed judge, delivered Israel in Judges 3. He is gone. The judges are not permanent. Their deliverances are temporary. Israel must learn that deliverance itself is not the point — it is to point them back to God.',
        },
        {
          kind: 'commentary',
          id: 'judg4-jabin',
          html:
            'Hazor was one of the great Bronze Age cities of Canaan, a military and commercial center. Its king controlling the northern trade routes is not a small thing. The oppression would have been systematic, extractive, thorough.',
        },
        {
          kind: 'commentary',
          id: 'judg4-sisera',
          html:
            'Sisera is not named as a king but as a military commander — a professional, a strategist, the visible arm of Jabin&apos;s power. His competence is real. The fear of Israel facing him is not baseless.',
        },
        {
          kind: 'commentary',
          id: 'judg4-chariots',
          html:
            'Nine hundred iron chariots. Iron itself was rare and expensive in the early Iron Age; a single chariot represented years of wealth and craft. Jabin&apos;s chariot corps is a standing army. Israel has nothing like it. The arithmetic of the situation is: surrender, submit, or trust God to do the impossible.',
        },
        {
          kind: 'carry',
          html:
            'Twenty years is a long oppression. Long enough that a whole generation grows up knowing nothing else. Long enough that crying out to God can feel like the only move left. If you are in a twenty-year season right now — or longer — the first thing Judges 4 tells you is that God hears. The second thing it tells you is that His answer may not look like what you expect.',
        },
        {
          kind: 'reflection',
          id: 'iron-chariots',
          prompt:
            'What feels like an &ldquo;iron chariot&rdquo; to you right now — a force so solid, so weaponized against your peace, that it feels impossible to move? Where are you tempted to simply surrender to it?',
        },
      ],
    },

    /* ─── Judges 4:4–7 — Deborah Calls ────────────────────────────────── */
    {
      ref: 'Judges 4:4–7',
      title: 'Deborah Calls Barak',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 4,
              spans: [
                t('And '),
                hy('Deborah, a prophetess', 'deborah-name'),
                t(', the wife of Lapidoth, she judged Israel at that time.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And she dwelt under the '),
                hy('palm tree of Deborah', 'deborah-palm'),
                t(' between Ramah and Bethel in mount Ephraim: and the children of Israel came up to her for judgment.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'deborah-name',
          title: 'Deborah — &ldquo;bee&rdquo;',
          script: 'דְּבוֹרָה',
          translit: '<strong>Deborah</strong> · from the root meaning &ldquo;to swarm&quot;',
          description:
            'Her name is Bee. She is small, but she is not alone, and her effect is coordinated and purposeful. The palm tree under which she sits is later called by her name — the place where she judges is remembered by who she is.',
        },
        {
          kind: 'commentary',
          id: 'judg4-prophetess',
          html:
            'Deborah is called a prophetess — the only female judge in Israel&apos;s history. She is not the military hero of this story. She is the one who hears God and speaks. Her authority is the authority of God&apos;s voice through her, not the authority of armor or title. She sits under a palm tree between two towns, not in a palace. People come to her for judgment. The culture does not prevent her from serving in this role; it simply leaves her without fanfare.',
        },
        {
          kind: 'commentary',
          id: 'deborah-palm',
          html:
            'A palm tree in ancient Israel was a place of shade, rest, and refreshment. Deborah sat in such a place and people came to bring their disputes, their questions, their need for God&apos;s word. Her judgment seat was not a throne but an invitation to sit in the shade together.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 6,
              spans: [
                t('And she sent and called '),
                hy('Barak the son of Abinoam', 'barak-name'),
                t(' out of Kedesh-naphtali, and said unto him, Hath not the Lord God of Israel commanded, saying, Go and draw toward mount Tabor, and take with thee ten thousand men of the children of Naphtali and of the children of Zebulun?'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'barak-name',
          title: 'Barak — &ldquo;lightning&rdquo;',
          script: 'בָּרָק',
          translit: '<strong>Barak</strong> · a flash of light in darkness',
          description:
            'His name is Lightning. But he will be hesitant to strike without Deborah&apos;s presence. Names in Scripture often frame the tension of a person — what they are called to be and what they actually struggle with.',
        },
        {
          kind: 'commentary',
          id: 'judg4-draw-near',
          html:
            'Deborah does not ask. She frames Barak&apos;s calling as already decided: &ldquo;Hath not the Lord commanded?&rdquo; It is a rhetorical question. God has already spoken. God has already chosen the battlefield, the moment, the outcome. Barak is not being asked to imagine victory; he is being told to trust it.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 7,
              spans: [
                t('And I will draw unto thee to the river Kishon '),
                hg('Sisera, the captain of Jabin&apos;s army', 'judg4-sisera-drawn'),
                t(', with his chariots and his multitude; and I will deliver him into thine hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judg4-sisera-drawn',
          html:
            'God says &ldquo;I will draw unto thee&rdquo; Sisera. The Canaanite commander will not choose this battlefield; God will lure him there. This is an ancient form of military deception — to maneuver your enemy into bad terrain, bad timing, bad conditions. The chariots that are Jabin&apos;s invincible weapon will become his liability at the Kishon.',
        },
        {
          kind: 'carry',
          html:
            'There is something very particular in this moment. A woman sits in the shade and God speaks through her. A hesitant man is called. He is told that the outcome is already decided, that his job is to go, not to win. The hardest kind of courage is the kind that trusts before it sees. If you have been called to something you are not sure you can handle, Judges 4:6–7 is saying: The outcome is decided. Your job is to move. Move.',
        },
        {
          kind: 'reflection',
          id: 'called-to-go',
          prompt:
            'When has God asked you to move toward something without guaranteeing the path or the outcome? What made it hard, and what made it possible to go?',
        },
      ],
    },

    /* ─── Judges 4:8–11 — Barak&apos;s Hesitation ────────────────────────── */
    {
      ref: 'Judges 4:8–11',
      title: 'Barak&apos;s Hesitation — "If You Will Go With Me"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 8,
              spans: [
                t('And Barak said unto her, '),
                hg('If thou wilt go with me, then will I go', 'judg4-hesitate'),
                t(': but if thou wilt not go with me, then will I not go.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judg4-hesitate',
          html:
            'This is the hinge moment of Judges 4. Barak will not go alone. He needs Deborah there — not as a bodyguard or a magical charm, but as a proof that God is present. His hesitation is understandable. It is also, by the text&apos;s logic, a failure of faith. He has heard the word of God from a prophetess. That should be enough. It is not.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 9,
              spans: [
                t('And she said, I will surely go with thee: notwithstanding the journey that thou takest shall not be for thine honour; for the Lord shall sell Sisera into the hand of a woman.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judg4-no-honor',
          html:
            'Deborah agrees to go. But she pays Barak the price of his hesitation: the honor of the victory — the honor of killing Sisera, the military triumph — will not belong to him. A general expects to be the one who brings down the enemy commander. Barak will not have that. Someone else will. And Deborah tells him this plainly, to his face, before they march.',
        },
        {
          kind: 'commentary',
          id: 'judg4-woman-will-deliver',
          html:
            'Even more surprising: Deborah does not say who. She says only &ldquo;a woman.&rdquo; She is not claiming the honor for herself. She is prophesying that a woman — unknown, unforeseen — will have the final victory. In a patriarchal military context, this is shocking. The final blow, the ultimate triumph, will not come from a commander on the battlefield. It will come from somewhere else entirely.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 10,
              spans: [
                t('And Deborah arose, and went with Barak to Kedesh.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Barak called Zebulun and Naphtali to Kedesh; and he went up with ten thousand men at his feet: and Deborah went up with him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judg4-together',
          html:
            'Deborah goes. The tribe of Heber the Kenite are mentioned as having pitched their tent near Kedesh — they will not fight, but their presence frames what is about to happen. Barak calls the men and they come. Ten thousand men rise to face 900 iron chariots. The arithmetic is still impossible. But they go.',
        },
        {
          kind: 'carry',
          html:
            'Here is something true about doubt: It often comes dressed as prudence. Barak is not cowardly. He is asking for confirmation. That is reasonable. But faith is the willingness to act on God&apos;s word even when you want more assurance. Deborah gives him what he asks for — her presence, her yes. But the text records his hesitation. And the text makes clear: the cost of that hesitation is the loss of the honor. If you have been waiting for more certainty before you move toward what God has called you to, this may be the moment to distinguish between prudence and hesitation.',
        },
        {
          kind: 'reflection',
          id: 'hesitation-cost',
          prompt:
            'When have you asked God for more assurance when you already had His word? What did that hesitation cost you, and what did it teach you?',
        },
      ],
    },

    /* ─── Judges 4:12–16 — The Battle at Kishon ──────────────────────── */
    {
      ref: 'Judges 4:12–16',
      title: 'The Battle at Kishon River',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 12,
              spans: [
                t('And they shewed Sisera that Barak the son of Abinoam was gone up to mount Tabor.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And Sisera gathered together all his chariots, even '),
                hg('nine hundred chariots of iron', 'judg4-chariots-gath'),
                t(', and all the people that were with him, from Harosheth of the Gentiles unto the river Kishon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judg4-chariots-gath',
          html:
            'Sisera gathers every chariot. He does not hold back a reserve. He is confident. In terms of military hardware, he is right to be: ten thousand foot soldiers are no match for 900 chariots on open ground. But he does not know what the reader has already been told — that God has already drawn him to this place, that this battle is already won in heaven.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 14,
              spans: [
                t('And Deborah said unto Barak, Up; for this is the day in which the Lord hath delivered Sisera into thine hand: is not the Lord gone out before thee? So Barak went down from mount Tabor, and ten thousand men after him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judg4-day-of-deliv',
          html:
            'Deborah does not say &ldquo;may deliver&rdquo; or &ldquo;will deliver.&rdquo; She says &ldquo;hath delivered.&rdquo; In Hebrew logic, a prophetic promise is so certain that it can be spoken in the past tense. From God&apos;s perspective, Sisera is already beaten. Barak goes down the mountain with the victory already secured.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 15,
              spans: [
                t('And the Lord '),
                hg('discomfited Sisera, and all his chariots, and all his host', 'judg4-discomfit'),
                t(', with the edge of the sword before Barak; so that Sisera lighted down off his chariot, and fled away on his feet.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judg4-discomfit',
          html:
            'The Hebrew word here is <em>hamam</em> — to throw into confusion, panic, rout. The Lord does not destroy the chariots by chariot; He panics the army. In Judges 5, which will tell the same battle in poetry, a flash flood is mentioned that swallowed Sisera&apos;s chariots, bogging them down at the Kishon. Here, the mechanism is simple: the Lord discomfited them. How is less important than Who. Sisera abandons his chariot and runs on foot — the reversal is complete.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 16,
              spans: [
                t('But Barak pursued after the chariots, and after the host, unto Harosheth of the Gentiles: and all the host of Sisera fell upon the edge of the sword; there was not a man left.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judg4-total-rout',
          html:
            'The victory is complete. No survivors. No remnant left to rebuild Sisera&apos;s army. This is the judgment of God executed through Israel&apos;s hand. For twenty years, Canaan has extracted from Israel. Now the debt is paid in full.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the hardest part of faith is not the battle itself — it is knowing that the battle is already won before the sword is drawn. Deborah tells Barak this: the Lord has gone out before you. Your job is not to create the victory; it is to step into the victory that God has already created. When you move toward what God has called you to, you are not gambling. You are stepping into something already decided. That knowledge should change how you move.',
        },
        {
          kind: 'reflection',
          id: 'battle-won',
          prompt:
            'What battle or challenge in your life have you been treating as if the outcome is still undecided, when God may have already won it? What would change if you acted as if the victory is already secured?',
        },
      ],
    },

    /* ─── Judges 4:17–23 — Jael in the Tent ────────────────────────── */
    {
      ref: 'Judges 4:17–23',
      title: 'Jael in the Tent',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 17,
              spans: [
                t('Howbeit Sisera fled away on his feet to the tent of '),
                hy('Jael the wife of Heber the Kenite', 'jael-name'),
                t(': for there was peace between Jabin the king of Hazor and the house of Heber the Kenite.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'jael-name',
          title: 'Jael — &ldquo;wild goat&rdquo;',
          script: 'יָעֵל',
          translit: '<strong>Yael</strong> · from a root meaning to ascend, to climb free',
          description:
            'Her name is Wild Goat — an animal that climbs where others cannot, nimble-footed on impossible terrain. She will prove the name true.',
        },
        {
          kind: 'commentary',
          id: 'judg4-peace',
          html:
            'The Kenites are not at war. Heber&apos;s house is at peace with Jabin&apos;s house — they have separated themselves from the other Kenites and are living as neutrals. Into this neutral space, Sisera runs. He is choosing shelter with a family that has chosen not to choose sides. His mistake will be to assume that neutrality means safety.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 18,
              spans: [
                t('And Jael went out to meet Sisera, and said unto him, Turn in, my lord, turn in to me; fear not. And when he had turned in unto her into the tent, she '),
                hg('covered him with a mantle', 'judg4-mantle'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judg4-mantle',
          html:
            'Jael meets Sisera warmly. She covers him with a cloak — the kind of hospitality owed to a guest or a refugee. From Sisera&apos;s perspective, he has found safety. He is no longer a fugitive commander but a guest under the protection of the tent. In the ancient world, a guest under a tent&apos;s covering was sacred. Harming such a guest was a betrayal of the deepest law of hospitality.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 19,
              spans: [
                t('And he said unto her, Give me, I pray thee, a little water to drink; for I am thirsty. And she opened a bottle of milk, and gave him drink, and '),
                hg('covered him', 'judg4-covered-again'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judg4-covered-again',
          html:
            'Sisera asks for water. Jael gives him milk — richer, more nourishing, and traditionally a drink of sleep. He asks for the minimum; she offers something that will make him heavier, drowsier. She covers him again with the cloak. Every action looks like care. Every action is precisely calculated.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 20,
              spans: [
                t('Again he said unto her, Stand in the door of the tent, and it shall be, when any man doth come and enquire of thee, saying, Is there any man here? that thou shalt say, No.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judg4-lie',
          html:
            'Sisera asks Jael to stand guard and lie for him — to deny his presence if anyone inquires. He trusts her. He does not know that the person coming will be his enemy. More importantly, he does not know that Jael has already chosen a side.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 21,
              spans: [
                t('Then Jael Heber&apos;s wife took a nail of the tent, and took an hammer in her hand, and went softly unto him, and smote the nail into his temples, and fastened it into the ground: for he was fast asleep and weary. So he died.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judg4-deed',
          html:
            'The text does not flinch. Jael takes a tent peg — the tool of her daily work — and a hammer, and while Sisera sleeps, she drives the peg through his temples. It is not a struggle. It is an execution. The text records it without judgment: &ldquo;So he died.&rdquo; The person who seemed defeated, who was commander of 900 chariots, who oppressed Israel for twenty years, dies in a tent to the hand of a woman he thought was his refuge.',
        },
        {
          kind: 'commentary',
          id: 'judg4-covenant-fidelity',
          html:
            'Jael&apos;s deed is strange and troubling. She was not part of the covenant of Israel. She was not commanded to fight. She broke the law of hospitality in the ancient Near East — to kill a guest is to commit one of the deepest betrayals. Yet the text and the tradition call her blessed. Judges 5:24 will say of her: &ldquo;Blessed above women in the tent shall Jael the wife of Heber the Kenite be, blessed shall she be above women in the tent.&rdquo; How to read this depends on your tradition. Some read it as covenant fidelity in wartime, a Gentile woman joining herself to Israel&apos;s God. Others read it as a troubling moment the Bible records honestly but leaves open to each reader&apos;s conscience.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 22,
              spans: [
                t('And, behold, as Barak pursued Sisera, Jael came out to meet him, and said unto him, Come, and I will shew thee the man whom thou seekest. And when he came into her tent, behold, Sisera lay dead, and the nail was in his temples.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('So God subdued on that day Jabin the king of Canaan before the children of Israel. And the hand of the children of Israel prospered, and prevailed against Jabin the king of Canaan, until they had destroyed him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judg4-the-proof',
          html:
            'Barak arrives. Jael meets him at the tent door, exactly as Deborah had prophesied. The honor that Barak lost by his hesitation is lost indeed — he does not strike the final blow. Instead, a woman shows him the dead body. And Jabin is destroyed. The oppression ends. Twenty years of iron chariots are gone. The victory is complete — but not in the form Barak expected.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s leadership in Judges 4 moves through three people who are not the expected ones. Deborah judges from under a palm tree. Barak hesitates and loses the honor of the final blow. Jael delivers the victory from a tent. The strongest army in the region is defeated not by superior force but by the Lord discomfiting them. The final blow comes not from a warrior but from a woman with a tent peg. If you have ever felt unseen, unlikely, or placed where you thought you could never make a difference, Jael is your sister. God sees what you can do. He may be setting you up for a moment you haven&apos;t imagined yet.',
        },
        {
          kind: 'reflection',
          id: 'unexpected-vessel',
          prompt:
            'When have you been used for something important in a way you never expected? What did that teach you about how God chooses His instruments?',
        },
        {
          kind: 'artwork',
          matchTitle: /deborah|judges.*4|jael|sisera|kishon/i,
          matchArtist: /tissot/i,
          caption: 'Judges 4 · Deborah and Barak',
        },
      ],
    },

    /* ─── Christ Connection ────────────────────────────────────────────── */
    {
      ref: 'Christ Connection',
      blocks: [
        {
          kind: 'christ',
          id: 'christ-whole',
          title: 'Christ Connection — The Unlikely Deliverer',
          html:
            'Judges 4 inverts every expectation of power and honor. The victory comes not from the strong but from the one who commands the strong. It comes through hesitant faith, through a woman without a title, through deception that serves God&apos;s purpose. Jesus, too, came as an unlikely deliverer. &ldquo;Who hath believed our report?&rdquo; asks Isaiah of the coming One (Isaiah 53:1). He came not as a conquering general but as a servant. He asked his followers to trust without seeing the victory assured. And He delivered His people — not through strength but through weakness, not through the sword but through death. Like Deborah, He knows the victory before it is won. Like Barak, we must move on His word alone. And like Jael, the final and most surprising blow — the destruction of death itself — came from a place no one expected.',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Judges 4',
    quote:
      'God&apos;s leadership in Judges 4 moves through a prophetess, a hesitant commander, and a woman in a tent. Every expected honor goes to someone the culture would never have expected. The victory is complete.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Judges 4 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-deborah-barak',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Deborah, Barak, and Jael: Unlikely Deliverers',
      url: 'https://www.bibleodyssey.org/passages/main-passage/judges-4',
      description: 'The prophetess, the hesitant commander, and the tent-dwelling woman who together defeat Sisera and Jabin&apos;s iron chariots.',
    },
    {
      id: 'sefaria-women-judges-leaders',
      kind: 'study',
      source: 'Sefaria',
      label: 'Women as Judges and Leaders in Israel',
      url: 'https://www.sefaria.org/Judges.4?lang=bi',
      description: 'Deborah&apos;s role as a prophetess and judge, showing God&apos;s use of women in leadership despite cultural expectations.',
    },
    {
      id: 'intertextual-spirit-women-jael',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'The Spirit and Strength Given to Women',
      url: 'https://intertextual.bible/search?q=deborah+jael+woman+strength+judges+priscilla',
      description: 'The pattern of God giving strength and agency to women, from Deborah through the New Testament examples of female leaders.',
    },
  ],

  hasHebrew: true,
};
