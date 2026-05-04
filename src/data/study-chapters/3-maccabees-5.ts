import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

export const THIRD_MACCABEES_5: RichChapterContent = {
  bookSlug: '3-maccabees',
  bookName: '3 Maccabees',
  chapter: 5,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 15 },
  intros: [
    'The king&apos;s command is about to be carried out. Thousands of Jews stand in the hippodrome. The elephants—drugged, maddened, fitted with iron spikes—are being led toward them. This is the final hour.',
    'Yet something extraordinary interrupts the machinery of death. God enters the scene through the simplest weapons: sleep, forgetfulness, and the faithful prayers of His people. The oppressor&apos;s moment of judgment keeps being delayed—and in those delays, we see the patience and sovereignty of God at work.',
  ],

  resources: [
    {
      id: 'israel-museum-ptolemaic',
      kind: 'museum',
      source: 'Israel Museum',
      label: 'Hellenistic Jewish Communities in Egypt',
      url: 'https://www.imj.org.il/',
      description: 'Archaeological evidence of diaspora Jewish life in Ptolemaic Alexandria.',
    },
    {
      id: 'bible-odyssey-persecution',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Religious Persecution and Jewish Resistance',
      url: 'https://www.bibleodyssey.org/dictionary/maccabees/',
      description: 'Hellenistic persecution of Jewish communities and responses to syncretism.',
    },
  ],

  bottomShare: {
    quote: 'Ptolemy ordered his elephants to trample the Jews. But on the first day he fell into deep sleep. On the second day, he forgot his own command. On the third day, the elephants turned and trampled the king&apos;s guards instead.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '3 Maccabees 5 · Study Guide',
  },

  sections: [
    /* ─── 3 Maccabees 5:1–3 — Hermon Is Ordered to Drug the Elephants ───── */
    {
      ref: '3 Maccabees 5:1–3',
      title: 'Hermon&apos;s Command',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              1,
              t('And Ptolemy made a decree that the elephants should be brought to the place appointed, and that his keeper '),
              t('Hermon'),
              t(' should drug them with frankincense and undiluted wine, and drive them into the hippodrome against the Jews.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-5-hermon-comm',
          html:
            'The machinery of oppression has all its parts. Ptolemy commands. Hermon obeys. The elephants become unwilling instruments of death. Each layer of the system depends on the next layer doing its job. Yet all of it—all of it—is about to unravel because God has other plans. [res:sefaria-3-macc-5] [res:israel-museum-ptolemaic] [res:bible-odyssey-persecution]',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              2,
              t('And the '),
              hg('keepers made ready five hundred elephants', 'mac3-5-elephants-count'),
              t(' according to his word.')
            ),
            verse(
              3,
              t('And they began to drug them with the frankincense and the undiluted wine, that they might make them furious and fit for the slaughter.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-5-elephants-count',
          html:
            'Five hundred elephants. Not a handful. Not a symbolic few. An overwhelming force, assembled to crush doubt and resistance. Ptolemy&apos;s strategy is simple: make the violence so total, so undeniable, that no mercy is possible. Yet it is precisely in the face of such totality that God acts.',
        },

        {
          kind: 'greek',
          id: 'mac3-5-oinos',
          title: 'Oinos — Wine; Intoxication',
          script: 'οἶνος',
          translit: '<strong>oinos</strong> · wine; often used metaphorically for God&apos;s judgment or His gifts',
          description:
            'Wine clouds the mind and clouds judgment. Here Hermon uses it to cloud the elephants&apos; minds. But throughout Scripture, wine in God&apos;s hand becomes a sign of either His wrath poured out or His joy poured in—never a mere tool in mortal hands.',
        },

        {
          kind: 'carry',
          html:
            'You may face what looks like overwhelming force—a decision stacked against you, an enemy&apos;s plan that looks bulletproof, circumstances that seem to have all the power. But power that depends on momentum, on anger, on constant drugging and pushing? That power is fragile. God doesn&apos;t need a vast army to undo it. He needs only a moment—a single moment where the mechanism falters.',
        },
      ],
    },

    /* ─── 3 Maccabees 5:4–6 — The First Day: Ptolemy Oversleeps ────────── */
    {
      ref: '3 Maccabees 5:4–6',
      title: 'The First Delay: Deep Sleep',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              4,
              t('And when they were ready, the '),
              t('spirit of God'),
              t(' fell upon Ptolemy, and he '),
              t('fell into a deep sleep'),
              t(', and did not awake even when the morning came.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-5-sleep-first',
          html:
            'Ptolemy is waiting to see the spectacle of death. The elephants are ready. The crowds are gathered. The machinery is wound tight. And then—God puts him to sleep. Not death. Not even illness. Sleep. The body&apos;s innocent need, made into an instrument of God&apos;s mercy.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              5,
              t('And the Jews, knowing what was about to come, lifted up their voices to '),
              t('the Lord'),
              t(' with weeping and supplication.')
            ),
            verse(
              6,
              t('Fathers embraced their children, and mothers held their babes, singing hymns and prayers to God, saying, "Save us, O Lord, from the hand of this violent man."')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-5-prayer-power',
          html:
            'While the king sleeps, the Jews pray. This is the real contest—not the elephants, but the prayers of a people calling on God. They do not have the power to fight. They have no army, no weapons, no political allies. All they have is their voices and their faith. And it is enough.',
        },

        {
          kind: 'greek',
          id: 'mac3-5-hypnos',
          title: 'Hypnos — Sleep; Divine Drowsiness',
          script: 'ὕπνος',
          translit: '<strong>hypnos</strong> · sleep; rest; often a gift from God when evil men sleep',
          description:
            'When Samson slept on Delilah&apos;s knees, he lost his strength. When Peter slept in the garden, he missed watching with Jesus. But when God sends sleep, it is often mercy—rest before the storm, or the pausing of an enemy&apos;s hand.',
        },

        {
          kind: 'christ',
          id: 'mac3-5-christ1',
          title: 'Christ Connection — The Sovereign Sleep of God',
          html:
            'Even in the boat during the storm, Jesus slept—and when the disciples woke Him, He rebuked the wind and the waves with a word (Mark 4:39). God&apos;s sleep is never absent-mindedness. It is the sleep of the one who has already won. Ptolemy sleeps because God has already decided: today is not the day of death. Today is the day of delay.',
        },

        {
          kind: 'reflection',
          id: 'mac3-5-prayer',
          prompt:
            'When you face an overwhelming situation, where do your first words go? To your fear? To your friends? Or do you cry out to God? What changes when prayer becomes your first move, not your last resort?',
        },
      ],
    },

    /* ─── 3 Maccabees 5:7–11 — The Second Day: Ptolemy Forgets ────────── */
    {
      ref: '3 Maccabees 5:7–11',
      title: 'The Second Delay: Forgetfulness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              7,
              t('And when morning came, the '),
              t('keepers came'),
              t(' and woke the king. But '),
              t('he did not remember'),
              t(' the command he had given concerning the Jews.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-5-memory',
          html:
            'Sleep passes. The sun rises. The machinery should restart. But the king&apos;s mind—the very place where the command originated—is now blank. This is not coincidence. This is God working in the most intimate space of a man&apos;s mind, erasing the memory of cruelty. The order that was so certain, so inevitable, has simply... vanished.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              8,
              t('And Hermon came to him and reminded him of the matter. And Ptolemy said to him, "What matter? What command do you speak of? I gave no such order."')
            ),
            verse(
              9,
              t('And Hermon said, "Lord, the elephants are ready, and the Jews are gathered in the hippodrome. All is prepared for your judgment."')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-5-denial',
          html:
            'Ptolemy doesn&apos;t just forget—he denies. He refuses to acknowledge what he commanded yesterday. This is the second blow: not only sleep, but a kind of blindness to his own will. It is as if God has erased the very memory of cruelty from the man&apos;s heart.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              10,
              t('But Ptolemy grew angry and said, "Who dares say I made such a command? You lie! I never ordered such a thing!"')
            ),
            verse(
              11,
              t('And he sent Hermon away with rebukes, and he sat upon his throne, troubled in his mind.')
            ),
          ],
        },

        {
          kind: 'commentary',
          id: 'mac3-5-troubled-mind',
          html:
            'The king is troubled. His own mind has become foreign to him. He cannot remember what he ordered, and the very suggestion disturbs him. God has done something deeper than simply stopping a command—He has made the king unable to recognize his own will to do evil.',
        },

        {
          kind: 'greek',
          id: 'mac3-5-lethe',
          title: 'Lethē — Forgetfulness; Divine Erasure',
          script: 'λήθη',
          translit: '<strong>lethe</strong> · forgetfulness; oblivion; loss of memory',
          description:
            'In Greek mythology, the river Lethe is drunk by souls entering the underworld—they forget all they were before. Here, God causes a king to forget his own cruelty. Some forgettings are a mercy.',
        },

        {
          kind: 'christ',
          id: 'mac3-5-christ2',
          title: 'Christ Connection — Hardness and Softness of Heart',
          html:
            'God "hardened Pharaoh&apos;s heart" when justice required it (Exodus 7:3). But He also "softened the heart of Cyrus" (Ezra 1:1) and worked through gentle forgetfulness in this king. God moves on both sides of a man&apos;s will—sometimes hardening him to judgment, sometimes clouding his mind so that evil cannot proceed. The question is always: what does His justice require?',
        },

        {
          kind: 'carry',
          html:
            'There are moments when you cannot change someone&apos;s mind by argument or persuasion. There is no angle that will work, no words that will land. In those moments, you are not without hope—you are simply being invited to trust a power that works at a level deeper than conversation. The same God who clouded a king&apos;s memory can work in minds you cannot reach. That doesn&apos;t mean do nothing. It means: do what you can, speak what you must, and then trust Him with what you cannot control.',
        },

        {
          kind: 'reflection',
          id: 'mac3-5-forgetful',
          prompt:
            'When have you been grateful for someone forgetting something you once decided? What would change if you trusted that God can work even in the minds of your enemies—not by arguing with them, but by touching something deeper?',
        },
      ],
    },

    /* ─── 3 Maccabees 5:12–16 — "I Gave No Such Order" ─────────────── */
    {
      ref: '3 Maccabees 5:12–16',
      title: 'The King&apos;s Own Denial',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              12,
              t('And the '),
              t('officers of the king'),
              t(' came to him, saying, "Lord, the people cry out. They say they will not be trampled. The Jews await your word."')
            ),
            verse(
              13,
              t('But the king said to them, "It is a lie. I never gave such a command. Whoever made this up has spoken falsely. I am not a man who kills without cause. Let the Jews go free."')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-5-reversal',
          html:
            'The pressure mounts. The system demands the king make a choice. But the king—who was so certain yesterday—now takes the opposite position. This is not weakness in Ptolemy so much as the irresistible power of God remaking his will from within. By the second day, the command that seemed locked in place has become deniable, forgotten, rejected by the very man who made it.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              14,
              t('And the '),
              t('priests and people of the Jews'),
              t(' cried out with a great voice, saying, "O Lord, have mercy upon us! Do not let us perish!"')
            ),
            verse(
              15,
              t('And their prayer ascended to heaven, and the Lord heard them.')
            ),
            verse(
              16,
              t('And Ptolemy sat upon his throne, knowing not what to do, troubled and afraid.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-5-prayer-answered',
          html:
            'The prayer is heard. Not at the end of the story, but in the middle of it. God does not wait for faith to be perfect; He does not require that the Jews first see deliverance before they believe. They pray in the middle of darkness, and heaven responds. By the second day, the king sits on his throne paralyzed—not by an enemy, but by his own inability to remember why he wanted to kill them.',
        },

        {
          kind: 'hebrew',
          id: 'mac3-5-zachor',
          title: 'Zachor — To Remember; To Call to Mind',
          script: 'זָכַר',
          translit: '<strong>zachor</strong> · to remember; to call to mind; to act on behalf of',
          description:
            'When God "remembers" His people (Genesis 8:1, Psalm 8:4), it means He acts. When the king forgets, it means God has intervened to unmake a decision. Memory and forgetfulness, in Scripture, are never passive—they are always the sign of God&apos;s active hand.',
        },

        {
          kind: 'reflection',
          id: 'mac3-5-pressure',
          prompt:
            'Sometimes the system keeps pushing even after God has already moved. The people demand, the officers report, the machinery creaks forward. Do you trust God enough to stand still when He has already acted, even if no one around you understands it yet?',
        },
      ],
    },

    /* ─── 3 Maccabees 5:17–22 — The Third Day: Ptolemy Enraged ────────── */
    {
      ref: '3 Maccabees 5:17–22',
      title: 'The Third Test: Rage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              17,
              t('And on the third day, Ptolemy rose up in his '),
              hg('rage', 'mac3-5-thumos'),
              t(', crying out, "Why are the Jews not yet dead? Why do they still draw breath in my kingdom?"')
            ),
            verse(
              18,
              t('"Today," he said, "they '),
              t('must be trampled'),
              t('. No more delay! Bring out the elephants! I will watch them die with my own eyes!"')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-5-final-push',
          html:
            'On the third day, the rage returns. Ptolemy&apos;s first resort had been forgotten; his second refusal had not worked; now he erupts into fury. This is the climactic moment—will the machinery finally turn on? Will the delay break? Will forgetfulness and sleep prove strong enough against a man&apos;s rage?',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              19,
              t('And the Jews heard these words and '),
              t('prayed all the more fervently'),
              t(', saying, "Save us, O God! Do not abandon us to this wrath!"')
            ),
            verse(
              20,
              t('And the mothers held their children, and the fathers stood firm, and all of them cried out to the Lord.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-5-steadfast',
          html:
            'The Jews do not run. They do not hide. They stand in the hippodrome, surrounded, and they pray. There is a kind of courage in prayer that asks for nothing but God—not rescue, not explanation, not even hope of living. Just: save us. Just: don&apos;t leave us.',
        },

        {
          kind: 'greek',
          id: 'mac3-5-thumos',
          title: 'Thumos — Rage; Burning Anger; Passion',
          script: 'θυμός',
          translit: '<strong>thumos</strong> · rage; wrath; the passionate, hot side of anger (vs. the cold reasoning of orge)',
          description:
            'Thumos is the anger that flares up hot and immediate. It is the least reflective form of wrath—the kind that acts first and thinks later. Ptolemy&apos;s thumos on day three is his last weapon. But passion, once spent, burns itself out.',
        },

        {
          kind: 'christ',
          id: 'mac3-5-christ3',
          title: 'Christ Connection — "Watch and Pray"',
          html:
            'In Gethsemane, Jesus tells His disciples: "Watch and pray, that ye enter not into temptation" (Matthew 26:41). The Jews in the hippodrome do exactly this. They watch—they see death approaching. They pray—they cry out to God. It is the prayer of people who have no plan B, no escape route, no ally but God. And that prayer is answered.',
        },

        {
          kind: 'carry',
          html:
            'The final test often looks like rage. After forgetfulness fails, after delay passes, comes the passionate surge of anger meant to shatter faith. This is the moment when you must not move. Stand. Pray. Hold the people you love. Cry out. The machinery of death is about to turn—and God is about to break it.',
        },

        {
          kind: 'reflection',
          id: 'mac3-5-stand-firm',
          prompt:
            'What is the "third day" in your own story—the moment when it seemed impossible would finally be forced into being? What did standing still teach you about God?',
        },
      ],
    },

    /* ─── 3 Maccabees 5:23–27 — The Elephants Are Led Forward ────────── */
    {
      ref: '3 Maccabees 5:23–27',
      title: 'The Elephant&apos;s Turning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              23,
              t('And Ptolemy shouted to his keepers, saying, "Drive the '),
              t('elephants into the hippodrome'),
              t('. Let them trample the Jews without mercy!"')
            ),
            verse(
              24,
              t('And the keepers did as the king commanded. They '),
              t('led the maddened beasts forward'),
              t(', toward the people who stood praying.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-5-final-moment',
          html:
            'This is it. The elephants are brought in. The machinery has finally turned. The moment of decision has arrived. The Jews stand in the shadow of death. But God is about to do something that will shake the foundation of the kingdom.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              25,
              t('And behold, when the '),
              t('elephants came near to the Jews'),
              t(', they '),
              t('turned'),
              t(' aside from them.')
            ),
            verse(
              26,
              t('And instead of trampling the Jews, they '),
              t('trampled upon the king&apos;s guards and soldiers'),
              t(', crushing many of them.')
            ),
            verse(
              27,
              t('And Ptolemy saw this great sign, and his heart was '),
              t('amazed'),
              t(', and he said, "Surely the God of the Jews is mighty beyond all gods."')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-5-reversal-final',
          html:
            'The elephants do not attack the Jews. Instead, they turn on the very men who brought them—the guards, the keepers, the machinery of the system. The instrument meant for the powerless is turned on the powerful. The judgment that was meant to fall on the faithful falls instead on the oppressor.',
        },

        {
          kind: 'greek',
          id: 'mac3-5-semion',
          title: 'Semeion — Sign; Wonder; Miraculous Token',
          script: 'σημεῖον',
          translit: '<strong>semeion</strong> · sign; wonder; a visible act of God&apos;s power',
          description:
            'A semeion is not just something strange—it is something that points beyond itself to God&apos;s will and power. The turning of the elephants is a semeion: Ptolemy sees it and, in that moment, recognizes the God he has been fighting against.',
        },

        {
          kind: 'christ',
          id: 'mac3-5-christ4',
          title: 'Christ Connection — The Stone Without Hands',
          html:
            'Daniel saw in a vision: "A stone was cut out without hands… and it smote the image… and became like the chaff of the summer threshingfloors… But the stone… became a great mountain and filled the whole earth" (Daniel 2:34–35). Jesus is that stone. The very instruments of oppression—Rome&apos;s might, the world&apos;s power—will be turned upside down by a kingdom not made with hands. What the world builds to crush the faithful will be broken against the faithful, and the kingdom of God will grow.',
        },

        {
          kind: 'carry',
          html:
            'You may see the machinery aimed at you. You may feel the weight of it, the inevitability of it. But God does not need to defeat the machinery by force of greater force. He can turn it. He can make the very thing meant to destroy you become the thing that destroys those who hate you. Your faith in that turning—even when you cannot see how—is the victory.',
        },

        {
          kind: 'reflection',
          id: 'mac3-5-sign',
          prompt:
            'When have you seen something "turn"—a relationship, a situation, a person—in a way that had no natural explanation? What did that teach you about the power of God working beneath the surface?',
        },

        {
          kind: 'artwork',
          matchTitle: /elephant|turning|hippodrome/i,
          caption: '3 Maccabees 5 · The Turning of the Elephants',
        },
      ],
    },
  ],
};
