import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges 3 — The first three judges: Othniel, Ehud, Shamgar.
 * The chapter establishes a pattern: testing and deliverance, with the Spirit of the Lord
 * coming upon unexpected deliverers. God works through the lefthand sword, the ox goad,
 * the family heritage — and through it all, the messy politics of human freedom and divine
 * intervention interweave.
 */
export const JUDGES_3: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 3,

  intros: [
    'After Joshua&apos;s death, Israel descends into a pattern that will repeat itself fifty times across the book of Judges: faithlessness, oppression, desperation, and deliverance. Judges 3 introduces that pattern and the first three judges who break it — Othniel, Ehud, and Shamgar. It is a chapter about testing, about God working through the weak and overlooked, and about the Spirit of the Lord coming upon His people in their darkest hours.',
    'The nations God left in the land were meant to test Israel — would they keep covenant with their God, or would they adopt the gods and habits of their neighbors? The test came immediately. Israel failed it. And yet, that failure does not end the story. In the failure, God sent deliverers. This is the logic that runs through all of Judges: not that God was surprised, but that rescue never waits for righteousness. The broken pattern holds a promise underneath it.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /judge/i,
    caption: 'The Judges of Israel',
  },

  bottomShare: {
    label: 'Share Judges 3',
    quote:
      'When Israel cried to the Lord, He raised up judges who delivered them. The Spirit of the Lord came upon them, and the land had rest. Israel&apos;s faithlessness never exceeded God&apos;s readiness to send a savior.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Judges 3 · Study Guide',
  },

  sections: [
    /* ─── Judges 3:1–6 — Nations Left to Test Israel ────────────────── */
    {
      ref: 'Judges 3:1–6',
      title: 'The Nations Remaining — Testing Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('Now these are the nations which the LORD left, to prove Israel by them, even all that had not known all the wars of Canaan;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Only that '),
                hy('the generations of the children of Israel', 'judges-generations'),
                t(' might know, to teach them war, at the least such as before knew nothing thereof;'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Namely, five lords of the Philistines, and all the Canaanites, and the Sidonians, and the Hivites that dwelt in mount Lebanon, from mount Baal-hermon unto the entering in of Hamath.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges-test-purpose',
          html:
            'The text is explicit: these nations were <em>left</em> by God. Not defeated. Not scattered. Left. They remained as a test — a Hebrew word that means to examine, to try, to see what is actually inside. Would Israel worship the God who freed them, or would they slip into the gods of Canaan? A test is not punishment; it is a revelation. What you choose when you are free tells the world (and yourself) what you actually believe.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nisah',
          title: 'Nisah — &ldquo;to prove&rdquo;',
          script: 'נִסָּה',
          translit: '<strong>nisah</strong> · to test, to examine, to try',
          description:
            'The same word appears when Abraham is told to offer Isaac (Gen. 22:1) and when God says He will test the wilderness generation (Num. 14:22). Testing is not accident — it is deliberate exposure that reveals what the heart contains.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 4,
              spans: [
                t('And the children of Israel dwelt among the Canaanites, Hittites, and Amorites, and Perizzites, and Hivites, and Jebusites:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And they took their daughters to be their wives, and gave their daughters to their sons, and '),
                hg('served their gods', 'judges-apostasy'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the children of Israel '),
                hy('did evil in the sight of the LORD', 'hebrew-shapath'),
                t(', and forgot the LORD their God, and served Baalim and '),
                hg('the groves', 'judges-asherah'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges-apostasy',
          html:
            'The test failed, as it always does. Israel did not stay separate; they intermarried, adopted the gods, forgot. <em>Forgot</em> — the Hebrew word is <em>shakach</em>, which means to be oblivious, to stop paying attention. Not rebellion always, sometimes just drift. You live next to Baals long enough, they start to look reasonable. Your children marry Canaanites; of course they want to visit the shrines. The shape of faithlessness in Judges is often not dramatic turning away — it is the slow adoption of the gods of whoever lived next door.',
        },
        {
          kind: 'commentary',
          id: 'judges-asherah',
          html:
            'The &ldquo;groves&rdquo; are the Asherah poles, carved wooden representations of the goddess of fertility. Archaeological evidence shows they stood beside Baal altars everywhere in the Levant. In Canaanite religion, the gods were local — tied to the land, the spring rains, the fruit harvest. Israel&apos;s God was already there, already present, already promised to provide. But the gods of Canaan were <em>familiar</em>. The covenant God required faith over time; Baal required a simple ritual. The test was not intellectual. It was practical.',
        },
        {
          kind: 'carry',
          html:
            'When you live inside a culture that worships different gods than you do, the gods of the culture start to look like common sense. Not rebellion — just life. You take the career that pays the most. You teach your children to compete like everyone else&apos;s children. You check the phone first thing in the morning. The groves are everywhere now. The test Judges names is still the one happening in your life: <em>Will you live out what you actually believe when the gods of the world next door look so reasonable?</em>',
        },
        {
          kind: 'reflection',
          id: 'judges-test',
          prompt:
            'Where has your own life slowly drifted toward the gods of the culture around you? What looks reasonable now that you&apos;d rather not say out loud?',
        },
      ],
    },

    /* ─── Judges 3:7–11 — Othniel: The First Judge ──────────────────── */
    {
      ref: 'Judges 3:7–11',
      title: 'Othniel — The Spirit Comes Upon Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 7,
              spans: [
                t('Therefore the anger of the LORD was hot against Israel, and he '),
                hy('sold them into the hand', 'judges-sold'),
                t(' of Chushan-rishathaim king of Mesopotamia: and the children of Israel served Chushan-rishathaim eight years.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges-sold',
          html:
            'The language of being &ldquo;sold&rdquo; into the hand of an oppressor appears throughout Judges. It is the language of slave markets — God Himself is pictured as selling His unfaithful people into bondage. The eight years of oppression are the consequence. Not that God is vindictive; that God is honest. You drift from covenant, the covenant withdraws its protection. The land becomes enemy territory.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 8,
              spans: [
                t('And when the children of Israel cried unto the LORD, the LORD '),
                hy('raised up', 'judges-raised-up'),
                t(' a deliverer to the children of Israel, who '),
                hp('delivered them', 'christ-deliverer'),
                t(', even Othniel the son of Kenaz, Caleb&apos;s younger brother.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges-othniel-line',
          html:
            'Othniel is Caleb&apos;s younger brother — the same Caleb who had the faith of a ten-year-old boy when he spied the land forty years earlier. Caleb never lost his faith. His brother inherited not a fortune or a title, but a heritage of faithfulness. When the generation needed delivering, the deliverer came from that faithful line. The text is saying: <em>your family&apos;s choices matter. Faith passed to the next generation becomes strength in a desperate hour.</em>',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 9,
              spans: [
                t('And '),
                hy('the Spirit of the LORD came upon him', 'hebrew-ruach'),
                t(', and he judged Israel, and went out to war: and the LORD delivered Chushan-rishathaim king of Mesopotamia into his hand; and his hand prevailed against Chushan-rishathaim.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ruach',
          title: 'Ruach Yahweh — &ldquo;Spirit of the Lord&rdquo;',
          script: 'רוּחַ יְהוָה',
          translit: '<strong>ruach Yahweh</strong> · the breath, wind, power of the Lord; His presence and empowerment',
          description:
            'This is the first time in Judges that the Spirit of the Lord comes upon a deliverer. It happens without ceremony, without warning, without Othniel performing any ritual to earn it. The Spirit comes when the people cry out and God responds. The pattern is set: weakness calls forth power.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 10,
              spans: [
                t('And the land had rest forty years. And Othniel the son of Kenaz died.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges-forty-years',
          html:
            'Forty years. Not eight years of oppression leading to eight years of peace, but to forty — a full biblical generation. The pattern intensifies: sin earns shorter suffering, but deliverance earns longer rest. Grace is more generous than consequence.',
        },
        {
          kind: 'christ',
          id: 'christ-deliverer',
          title: 'Christ Connection — The Unexpected Deliverer',
          html:
            'Israel called out from oppression, and the Lord raised up a deliverer — not a king, not a great military leader, but a man from a faithful family, empowered by the Spirit. Centuries later, Israel would be waiting for a Messiah to come in power and military might. Instead, Jesus came as a carpenter from an obscure family, empowered by the Spirit, defeating the real enemy (death and Satan, not Roman legions) with weakness. &ldquo;He was despised and rejected of men… yet it pleased the LORD to bruise him&rdquo; (Isa. 53:10). The pattern of the judges — weak vessels, the Spirit of God, unexpected victory — is all pointing at Him.',
        },
        {
          kind: 'carry',
          html:
            'You are not waiting for Othniel to appear in your neighborhood — the Spirit of God has already come to you in Christ. Whatever oppression has bound you — guilt, fear, habits you can&apos;t break, a sense that you&apos;ll never be enough — the delivering power that broke Chushan-rishathaim is already yours. Not earned. Not deserved. Available, right now, because you cried out.',
        },
        {
          kind: 'reflection',
          id: 'judges-othniel',
          prompt:
            'What burden or oppression do you carry that you haven&apos;t yet actually cried out to God about? What would change if you did?',
        },
      ],
    },

    /* ─── Judges 3:12–30 — Ehud: The Daring Deliverance ──────────────── */
    {
      ref: 'Judges 3:12–30',
      title: 'Ehud — Victory Through Weakness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 12,
              spans: [
                t('And the children of Israel did evil again in the sight of the LORD: and the LORD strengthened Eglon the king of Moab against Israel, because they had done evil.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And he gathered unto him the children of Ammon and Amalek, and went and smote Israel, and possessed '),
                hg('the city of palm trees', 'judges-jericho'),
                t('.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('So the children of Israel served Eglon the king of Moab eighteen years.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges-jericho',
          html:
            'The city of palm trees is Jericho — the same Jericho that fell to Joshua at the sound of a trumpet and a shout. Now it is possessed by Israel&apos;s enemies. The land keeps shrinking because the covenant keeps breaking. Eglon rules for eighteen years — longer oppression for Israel&apos;s deeper drift.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 15,
              spans: [
                t('But when the children of Israel cried unto the LORD, the LORD raised up a deliverer unto them, even Ehud the son of Gera, a Benjamite, a '),
                hy('man lefthanded', 'judges-lefthanded'),
                t(': and by him the children of Israel sent a present unto Eglon the king of Moab.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'judges-lefthanded',
          title: 'Itter Yad — &ldquo;bound of the right hand&rdquo;',
          script: 'אִטֵּר־יָד',
          translit: '<strong>itter yad</strong> · literally, having the right hand bound or tied; left-handed',
          description:
            'In an age of right-handed warriors, left-handedness was an oddity — a potential disability. The text is emphatic about it. Ehud is introduced not as a warrior first but as the man who is weak in the way that matters on the battlefield.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 16,
              spans: [
                t('But Ehud made him '),
                hg('a dagger of two edges', 'judges-dagger'),
                t(', of a cubit length; and he did gird it under his raiment upon his right thigh.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges-dagger-strategy',
          html:
            'The genius is visible. A right-handed warrior wears a sword on his left hip, where his right hand can draw it. The guards would check there. A left-handed man hides his dagger on his right thigh — <em>where his left hand can reach and where no guard would expect it.</em> The weapon of the weak is cunning. Ehud does not defeat Eglon through strength; he defeats him through knowing how to fight dirty, how to use the very weakness that defined him.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 17,
              spans: [
                t('And he brought the present to Eglon king of Moab: now Eglon was a very fat man.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And when he had made an end to offer the present, he sent away the people that bare the present.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('But he himself turned again from the quarries that were by Gilgal, and said, I have a secret errand unto thee, O king: who said, Keep silence. And all that stood by him went out from him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges-secret-errand',
          html:
            'Ehud speaks in a low voice and claims a secret message. Eglon, vain and trusting in his size and power, sends everyone away — he wants to hear this mysterious word from the oppressed people alone. The weakness is always in pride.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 20,
              spans: [
                t('And Ehud said, I have a message from God unto thee. And he arose out of his seat.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And Ehud put forth his left hand, and took the dagger from his right thigh, and thrust it into his belly:'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the haft also went in after the blade; and the fat closed upon the blade, so that he could not draw the dagger out of his belly: and the dirt came out.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges-violence-graphic',
          html:
            'The text does not look away. Judges is not a polite book. The narrative is graphic — the haft going in, the fat closing over the blade, the filth. God works here, but not through nobility or restraint. He works through a left-handed man&apos;s cunning, a hidden blade, and the brutal leverage of weakness turning the king&apos;s own trust into his death. Readers must wrestle with this: God can work through morally ambiguous means, and His deliverance does not always come wrapped in virtue. The Israelites are freed by an act that is strategically brilliant and humanly messy.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 23,
              spans: [
                t('Then Ehud went forth through the porch, and shut to the doors of the parlour upon him, and locked them.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('When he was gone out, his servants came; and when they saw that, behold, the doors of the parlour were locked, they said, Surely he covereth his feet in his summer chamber.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And they tarried till they were ashamed: and, behold, he opened not the doors of the parlour; therefore they took a key, and opened them: and, behold, their lord was fallen down dead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges-escape',
          html:
            'Ehud locks the door behind him — not to leave his enemy undetected, but to buy time. The servants imagine Eglon is attending to bathroom needs (the text says &ldquo;covereth his feet,&rdquo; a euphemism for personal business). They wait out of shame. In that shame-bought silence, a man escapes to freedom. The victory belongs to him.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 26,
              spans: [
                t('And Ehud escaped while they tarried, and passed beyond the quarries, and escaped unto Seirath.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And when he was come, he blew a trumpet in the mount of Ephraim: and the children of Israel went down with him from the mount, and he '),
                hy('before them', 'judges-first'),
                t('.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And he said unto them, Follow after me: for the LORD hath delivered your enemies the Moabites into your hand. So they went down after him, and took the fords of Jordan toward Moab, and '),
                hg('suffered not a man to pass over', 'judges-slaughter'),
                t('.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And they slew of Moab at that time about ten thousand men, all lusty, and all men of valour; and there escaped not a man.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('So Moab was subdued that day under the hand of Israel. And the land had rest fourscore years.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges-eighty',
          html:
            'Eighty years. Othniel&apos;s deliverance gave forty years of rest. Ehud&apos;s gives eighty — twice the rest for the same length of oppression. The pattern is becoming visible: the deeper the failure, the longer and richer the grace. And notice — the one man&apos;s act awakens the whole people. A trumpet call is enough. Israel remembers who they are.',
        },
        {
          kind: 'christ',
          id: 'christ-weakness',
          title: 'Christ Connection — Power Made Perfect in Weakness',
          html:
            'Paul writes: &ldquo;Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me&rdquo; (2 Cor. 12:9). Ehud&apos;s left-handedness is his infirmity — and it is exactly where God&apos;s power is most visible. Jesus came as a carpenter, not a Roman general. He was executed, not crowned. &ldquo;We preach Christ crucified, unto the Jews a stumblingblock, and unto the Greeks foolishness; But unto them which are called, both Jews and Greeks, Christ the power of God, and the wisdom of God&rdquo; (1 Cor. 1:23–24). The world looks for strength; God works through what the world counts as weakness. That rule did not begin with Ehud, but Ehud lived it.',
        },
        {
          kind: 'carry',
          html:
            'Where you feel most weak — the skill you don&apos;t have, the way you&apos;ve been overlooked, the limit you can&apos;t overcome — may be exactly where Christ&apos;s power is about to become visible. Not because weakness is good. But because it is in weakness that you learn to trust a power outside yourself. The dagger hidden under your right hand. God&apos;s work in the place nobody thought to look.',
        },
        {
          kind: 'reflection',
          id: 'judges-ehud',
          prompt:
            'What weakness in yourself have you been ashamed of? What if God is waiting to work through it, not despite it?',
        },
        {
          kind: 'artwork',
          matchTitle: /ehud|moab/i,
          caption: 'Judges 3:15–30 · Ehud&apos;s Deliverance',
        },
      ],
    },

    /* ─── Judges 3:31 — Shamgar: The Ox Goad ────────────────────────── */
    {
      ref: 'Judges 3:31',
      title: 'Shamgar — God Needs No Sword',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 31,
              spans: [
                t('And after him was '),
                hg('Shamgar the son of Anath', 'judges-shamgar'),
                t(', which smote of the Philistines '),
                hy('six hundred men with an ox goad', 'hebrew-malmad'),
                t(': and '),
                hp('he also delivered Israel', 'christ-ox-goad'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges-shamgar',
          html:
            'Shamgar appears for a single verse. That is all. He is the third judge, but his story receives no detail — no oppression, no cry, no narrative. Only this: he killed six hundred Philistines with an ox goad and delivered Israel. An ox goad is a stick eight feet long with a sharp tip — used by farmers to drive cattle. It is not a weapon of war. It is not a dagger like Ehud&apos;s. It is a farm implement, the tool of work, turned into deliverance.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-malmad',
          title: 'Malmad — &ldquo;ox goad&rdquo;',
          script: 'מַלְמַד',
          translit: '<strong>malmad</strong> · an ox goad; a stick used to drive cattle forward',
          description:
            'The word appears in 1 Samuel 13:21 for the tool a farmer uses. In Shamgar&apos;s hands, a tool meant to nudge livestock becomes a weapon that scatters an entire army. God is not interested in your resume. He is interested in what you have in your hands right now.',
        },
        {
          kind: 'commentary',
          id: 'judges-unlikely-weapon',
          html:
            'The pattern is now unmistakable: Othniel from a faithful family but unknown otherwise; Ehud left-handed in a right-handed world; Shamgar with a farmer&apos;s stick instead of a soldier&apos;s blade. These are not the deliverers anyone would have hired. They are not impressive by the metrics of power. But they are the ones the Spirit of the Lord came upon. The text is saying: <em>you have whatever is in your hand. That is enough. I do not need you to be impressive. I need you to be willing.</em>',
        },
        {
          kind: 'christ',
          id: 'christ-ox-goad',
          title: 'Christ Connection — The Sufficiency of Weakness',
          html:
            'Jesus fed five thousand people with five loaves and two fish (Matt. 14:17–21). He healed the sick with spit and mud (John 9:6). He broke the power of death, not with a sword, but with His body laid in a tomb. &ldquo;God hath chosen the foolish things of the world to confound the wise; and God hath chosen the weak things of the world to confound the things which are mighty&rdquo; (1 Cor. 1:27). An ox goad is still an ox goad in the hands of a timid man. But in the hands of a man who trusts that God is with him, a farmer&apos;s stick becomes an instrument of deliverance.',
        },
        {
          kind: 'carry',
          html:
            'You have an ox goad in your hands right now — some ordinary skill, some small thing you can actually do. You are probably waiting to feel qualified before you move. You are waiting for the sword. For the training. For someone to tell you that you are impressive enough. Meanwhile, the six hundred Philistines are still standing there. What would change if you just picked up the stick you have in your hand and moved? God has never been interested in your credentials. He is interested in your willingness to let Him work through what you are, right now.',
        },
        {
          kind: 'reflection',
          id: 'judges-shamgar',
          prompt:
            'What ordinary thing do you have in your hands right now? What would it look like to trust that it is enough?',
        },
      ],
    },
  ],
};
