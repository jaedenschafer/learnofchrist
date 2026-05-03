import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 7 — The Siege of Samaria Broken
 *
 * In the midst of famine, while Israel&apos;s king doubts, four men with nothing
 * to lose speak the words that change everything: "Why sit we here until we die?"
 * Lepers, cast outside the city gate, make a choice that shatters an entire army.
 * The Lord fills the night with a sound, and in that sound, the enemy flees. The
 * city is saved. And in a moment of grief, the skeptical lord who mocked the
 * prophet is trampled at the gate — not by soldiers, but by the people hungry for
 * the very abundance he refused to believe would come.
 */
export const KINGS_2_7: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 7,

  estimatedMinutes: { beginner: 8, intermediate: 15, deep: 20 },
  intros: [
    'The prophet Elisha has just spoken words that seem impossible: tomorrow, in the gate of Samaria, a measure of fine flour will sell for a shekel, and two measures of barley for a shekel. Food will be abundant. But the king&apos;s own officer — the lord on whose hand the king leaned — hears this and laughs. "Behold, if the Lord would make windows in heaven, might this thing be?" The impossible has become ridiculous. The prophet looks at him and speaks judgment: "Thou shalt see it with thine eyes, but shalt not eat thereof."',
    'Outside the city walls, the Syrians have laid siege. The famine is so severe that even the most unclean and broken members of society — four lepers, cast out beyond the gate — are starving alongside everyone else. Yet these four, sitting in the twilight, will be the ones to see what no one else has seen, to walk through the empty camp of the enemy, and to speak the words that save a nation: "This day is a day of good tidings, and we hold our peace."',
  ],

  bottomShare: {
    label: 'Share 2 Kings 7',
    quote:
      'Four lepers, despised and outcast, become the bearers of good news that save a city. &quot;This day is a day of good tidings, and we hold our peace&quot; — the gospel is too great to keep silent.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 7 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-elisha-ministry',
      kind: 'study',
      source: 'Sefaria',
      label: 'Elisha the Prophet',
      url: 'https://www.sefaria.org/2_Kings.1',
      description: 'Elisha&apos;s ministry of miraculous healing and prophecy succeeding Elijah.',
    },
    {
      id: 'bible-odyssey-elisha',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'Elisha: Miracles and Ministry',
      url: 'https://www.bibleodyssey.org/dictionary/elisha/',
      description: 'Elisha&apos;s role as prophet in Israel&apos;s northern kingdom during the period of decline.',
    },
    {
      id: 'iaa-northern-kingdom',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Archaeology of Northern Kingdom',
      url: 'https://www.antiquities.org.il/',
      description: 'Excavation evidence for cities and settlements in the northern kingdom of Israel.',
    },
  ],

  sections: [
    /* ─── 2 Kings 7:1 — Elisha&apos;s Promise ──────────────────────────────── */
    {
      ref: '2 Kings 7:1',
      title: 'The Promise: Abundance Tomorrow',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 1,
              spans: [
                t('Then Elisha said, '),
                hp('Hear ye the word of the Lord', 'promise-word'),
                t('; Thus saith the Lord, '),
                hp('Tomorrow about this time', 'promise-tomorrow'),
                t(' shall a measure of fine flour be sold for a shekel, and two measures of barley for a shekel, in the gate of Samaria.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'promise-word',
          html:
            'Elisha stands in the presence of the king and speaks with absolute certainty. "Hear ye the word of the Lord." This is not opinion. This is not prediction. This is the word of the Lord himself — a promise that tomorrow the conditions will change entirely. In the gate of Samaria, where now there is death by hunger, there will be food at fixed prices. The prophet speaks as though it is already done.[res:sefaria-elisha-ministry][res:bible-odyssey-elisha][res:iaa-northern-kingdom]',
        },
        {
          kind: 'commentary',
          id: 'promise-tomorrow',
          html:
            'The precision is remarkable: "tomorrow about this time." Not someday. Not eventually. Tomorrow. The prophet sets a specific moment. The promise comes with a date, a time, a place. This kind of clarity — this absolute specificity — is what makes the king&apos;s officer&apos;s doubt so pointed. How can this happen? What could possibly break a siege and end a famine in a single night?',
        },
        {
          kind: 'hebrew',
          id: 'davar-adonai',
          title: 'Davar Adonai — "The Word of the Lord"',
          script: 'דְבַר־יְהוָה',
          translit: '<strong>Davar Adonai</strong> · the word of the Lord; a divine utterance',
          description:
            'When the prophets say "davar adonai," they are claiming to speak with the voice of God himself. It is not interpretation or commentary. It is the direct utterance of the One who speaks all things into being. Elisha invokes this authority here — not as a hopeful prediction, but as a decree.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age of qualified promises. "This might help." "We hope for the best." "If all goes well." But the prophet speaks with the weight of heaven behind him. The word of the Lord does not hesitate. It does not equivocate. It comes with the certainty of one who knows how history ends. Do you hear the word of the Lord with that kind of certainty, or do you dilute it with your doubt?',
        },
        {
          kind: 'reflection',
          id: 'promise-reflection',
          prompt: 'When has the Lord made you a specific promise — clear and dated? How did doubt cloud that promise, and what happened when you chose to believe?',
        },
      ],
    },

    /* ─── 2 Kings 7:2 — The Skeptic&apos;s Doubt ──────────────────────────────── */
    {
      ref: '2 Kings 7:2',
      title: 'The Skeptic: "Windows in Heaven"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 2,
              spans: [
                t('Then a lord on whose hand the king leaned said unto the man of God, '),
                hg('Behold, if the Lord would make windows in heaven, might this thing be', 'skeptic-windows'),
                t('? And he said, Behold, thou shalt see it with thine eyes, but shalt not eat thereof.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'skeptic-windows',
          html:
            'The king&apos;s officer hears the promise and laughs. His laughter is the laughter of reason: "If the Lord would make windows in heaven — if he literally tore open the sky and rained food down upon us — might this thing be possible?" The sarcasm is sharp. He is saying: This is impossible. Even a direct miracle from heaven could not accomplish what you are claiming. His doubt wraps itself in reason, in realism, in the practical assessment of the situation. The city is surrounded. There is no food. The king is weak. And you expect me to believe that tomorrow, by this time, this changes? Impossible.',
        },
        {
          kind: 'commentary',
          id: 'skeptic-judgment',
          html:
            'But Elisha does not argue. He does not explain how the miracle will happen. He simply pronounces judgment: "Thou shalt see it with thine eyes, but shalt not eat thereof." You will see the abundance come. Your eyes will witness it. But your mouth will not taste it. The promise will be fulfilled — and you will not participate in it. The skeptic will be a spectator to his own salvation, unable to enjoy it.',
        },
        {
          kind: 'hebrew',
          id: 'aruboth-shamayim',
          title: 'Aruboth Shamayim — "Windows of Heaven"',
          script: 'אֲרֻבּוֹת הַשָּׁמָיִם',
          translit: '<strong>Aruboth shamayim</strong> · windows of heaven; the gates through which rain and blessing fall',
          description:
            'The word "aruboth" — windows or latticed openings — carries the sense of gates or channels. When God sends rain, it is as though he opens the windows of heaven. The officer&apos;s sarcasm invokes this phrase to heighten his mockery: "Even if God literally opened the windows of heaven," he says, this abundance could not come. But in using this very phrase, he names the very thing that will happen — not rain, but food. The Lord will indeed "open" something in the night.',
        },
        {
          kind: 'carry',
          html:
            'The officer doubts because he cannot see the mechanism. How will food suddenly appear? From where? By what means? He demands reasonable answers before he will believe. But faith does not always get the mechanism. Sometimes we are asked to believe in abundance we cannot explain, deliverance we cannot trace, salvation that arrives by means we did not foresee. The person who cannot move until reason is satisfied has already lost the race.',
        },
        {
          kind: 'reflection',
          id: 'skeptic-reflection',
          prompt: 'What in your life are you refusing to believe because you cannot see the mechanism? What would it mean to believe in God&apos;s abundance even when you cannot explain how it will come?',
        },
      ],
    },

    /* ─── 2 Kings 7:3–5 — The Lepers&apos; Choice ──────────────────────────── */
    {
      ref: '2 Kings 7:3–5',
      title: 'Why Sit We Here Until We Die?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 3,
              spans: [
                t('And there were four leprous men at the entering in of the gate: and they said one to another, '),
                hg('Why sit we here until we die', 'lepers-why-sit'),
                t('?'),
              ],
            },
            {
              number: 4,
              spans: [
                t('If we say, We will enter into the city, then the famine is in the city, and we shall die there: and if we sit still here, we die also. '),
                hg('Now therefore come, let us fall unto the host of the Syrians', 'lepers-choice'),
                t(': if they save us alive, we shall live; and if they kill us, we shall but die.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And they rose up in the twilight, to go unto the camp of the Syrians: and when they were come to the uttermost part of the camp of Syria, behold, there was no man there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lepers-why-sit',
          html:
            'Four men, cast out beyond the gate, diseased and broken, sit in the twilight and ask the question that changes everything. Not "Is there hope?" but "Why do we sit here?" It is a question that breaks paralysis. These men are dying. They have nothing. They have no status, no claim on the king&apos;s mercy, no place in the city. But sitting is a choice. Dying slowly of hunger while doing nothing — that is also a choice. And they ask: Why do we choose that?',
        },
        {
          kind: 'commentary',
          id: 'lepers-choice',
          html:
            'Their logic is the logic of the desperate and the wise: Two paths lead to death. One path might lead to life. Therefore, we choose the path that might lead to life. They will go to the Syrian camp. If the Syrians kill them, they die. If the Syrians take pity on them, they live. The outcome is the same if they do nothing. So they choose to move. They choose to seek mercy rather than to wait for death.',
        },
        {
          kind: 'hebrew',
          id: 'metsora',
          title: 'Metsora — "Leper"',
          script: 'מְצֹרָע',
          translit: '<strong>Metsora</strong> · one struck with leprosy; the diseased, the outcast',
          description:
            'The lepers are metzurim — literally, the struck or smitten ones. They carry the mark of disease. They are cut off from the city, from the temple, from the community. They are among the most marginalized people in ancient Israel. Yet these four, sitting at the gate, are the ones who will see the turning of the tide. The ones whom society has abandoned will be the instruments of its salvation.',
        },
        {
          kind: 'carry',
          html:
            'We are often paralyzed by false dichotomies. Either the situation will resolve itself, or we do nothing. Either we can control the outcome, or we should not try. But the lepers show us a third way: to take action even when we cannot control the result, to seek what might save us even when failure is possible, to move toward mercy rather than away from risk. Their choice was not a guarantee. But it was the choice to live rather than to decline.',
        },
        {
          kind: 'reflection',
          id: 'lepers-reflection',
          prompt: 'When have you been paralyzed by a situation, certain that either choice leads to failure? What would it mean to rise up and seek mercy, even without guaranteed success?',
        },
      ],
    },

    /* ─── 2 Kings 7:6–7 — The Sound That Terrifies ────────────────────────── */
    {
      ref: '2 Kings 7:6–7',
      title: 'The Sound: God Makes the Enemy Hear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 6,
              spans: [
                t('For the Lord had made the host of the Syrians to hear a '),
                hp('noise of chariots, a noise of horses, even the noise of a great host', 'sound-miracle'),
                t(': and they said one to another, Lo, the king of Israel hath hired against us the kings of the Hittites, and the kings of the Egyptians, to come upon us.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('They arose and fled in the twilight, and left their tents, and their horses, and their asses, even the camp as it was, and fled for their life.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sound-miracle',
          html:
            'The miracle is not a vision. It is not a message. It is a sound. The Lord makes the Syrian army hear a noise — the sound of chariots, of horses, of an enormous force. But there is no force. There are only four lepers walking toward the camp. Yet the sound they hear is terrifying enough to break an entire army. The Syrians interpret it: The king of Israel has hired the Hittites and Egyptians to attack us from behind. We are surrounded. We must flee. And in their fear, they do what no military force could do. They collapse.',
        },
        {
          kind: 'commentary',
          id: 'sound-power',
          html:
            'Notice: God does not raise an army. He does not send fire from heaven. He does not defeat the enemy in battle. He does something more subtle and more total. He changes what the enemy hears, what the enemy believes, what the enemy fears. In a moment, invincible soldiers become fleeing men. A siege that seemed unbreakable shatters. And no sword is drawn. The word of the Lord — made manifest not through visible force but through the invisible power of what is heard, believed, and feared — accomplishes what armies cannot.',
        },
        {
          kind: 'carry',
          html:
            'God often works not through force but through the transformation of perception. What we believe about our circumstances shapes our reality more than the circumstances themselves. The Syrians fled not because the enemies they feared actually existed, but because they believed the sound they heard. Do you believe what God tells you to hear, or do you listen only to the sounds of your own fear?',
        },
        {
          kind: 'reflection',
          id: 'sound-reflection',
          prompt: 'What false "sounds" — fears, rumors, expectations — drive your decisions? What would it mean to listen instead to God&apos;s word?',
        },
      ],
    },

    /* ─── 2 Kings 7:8–10 — The Lepers Witness and Report ────────────────── */
    {
      ref: '2 Kings 7:8–10',
      title: '"This Day Is a Day of Good Tidings"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 8,
              spans: [
                t('And when these lepers came to the uttermost part of the camp, they went into one tent, and did eat and drink, and carried thence silver, and gold, and raiment, and went and hid it; then came again, and entered into another tent, and carried thence also, and went and hid it.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Then said one to another, '),
                hp('"We do not well: this day is a day of good tidings, and we hold our peace', 'gospel-silence'),
                t(': if we tarry till the morning light, some mischief will come upon us: '),
                hp('now therefore come, that we may go and tell the king&apos;s household."', 'gospel-tell'),
              ],
            },
            {
              number: 10,
              spans: [
                t('So they came and called unto the porter of the gate of the city, and told them, saying, We went into the camp of the Syrians, and, behold, there is no man there, nor any voice of man, but horses tied, and asses tied, and the tents as they were.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gospel-silence',
          html:
            '"We do not well." These four lepers, gathering treasures in the empty camp, stop and speak a truth that transforms them from survivors into witnesses. They are keeping silence about good news. They have found what a starving city needs — food, silver, gold, raiment. They could keep it. They could say nothing. They could survive alone. Instead, they ask: How can we keep silent about this? This day is a day of good tidings.',
        },
        {
          kind: 'hebrew',
          id: 'besorah',
          title: 'Besorah — "Good Tidings" or "Gospel"',
          script: 'בְּשׂוֹרָה',
          translit: '<strong>Besorah</strong> · good tidings; gospel; news of salvation',
          description:
            'The word "besorah" carries the sense of news that brings joy, relief, salvation. It is the root from which we get "gospel" — the good news. The four lepers, cast out and diseased, recognize that they are carrying news that will save a city. They are bearers of good tidings. And they cannot keep silent.',
        },
        {
          kind: 'commentary',
          id: 'gospel-tell',
          html:
            'The decision to tell is not motivated by virtue alone. They reason: If we keep silent until morning, "some mischief will come upon us." The light will reveal them. They will be accused of theft or complicity. They will lose the treasure — and their lives. But there is something more: they simply cannot keep silent about good news. The compulsion to tell is as natural as the compulsion to eat and drink when you are starving. They have tasted abundance. They have witnessed deliverance. They must speak.',
        },
        {
          kind: 'carry',
          html:
            'The gospel is too great to keep silent about. The early disciples, forbidden to speak in the name of Jesus, responded: "We cannot but speak the things which we have seen and heard" (Acts 4:20). The lepers show us this same compulsion. They have seen. They have experienced. They must tell. What good news have you witnessed in your own life that you are keeping silent about?',
        },
        {
          kind: 'reflection',
          id: 'gospel-reflection',
          prompt: 'What "good tidings" — grace, forgiveness, deliverance, love — have you witnessed that you have been silent about? What would it mean to speak it?',
        },
      ],
    },

    /* ─── 2 Kings 7:11–15 — The King&apos;s Verification ────────────────────── */
    {
      ref: '2 Kings 7:11–15',
      title: 'The King Investigates and Believes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 11,
              spans: [
                t('And the porters cried and told it to the king&apos;s house within.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the king arose in the night, and said unto his servants, I will now shew you what the Syrians have done to us. They know that we be hungry; therefore are they gone out of the camp to hide themselves in the field, saying, When they come out of the city, we shall catch them alive, and get into the city.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And one of his servants answered and said, Let some take, I pray thee, five of the horses that remain, which are left in the besieged city, (lo, they are as all the multitude of Israel that are left: or rather they are like all the multitude of the Israelites that are consumed:) and let us send and see.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('They took therefore two chariot horses; and the king sent after the host of the Syrians, saying, Go and see.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And they went after them unto Jordan: and, lo, all the way was full of garments and vessels, which the Syrians had cast away in their haste: and the messengers returned, and told the king.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'king-doubt',
          html:
            'Even the king, when he hears the news, doubts. He is clever enough to see a trap. The Syrians are feigning retreat, he thinks. They want us to come out of the city so they can ambush us. His first instinct is not hope but suspicion. This is the instinct of a besieged king — anyone bringing good news must be scrutinized.',
        },
        {
          kind: 'commentary',
          id: 'king-tests',
          html:
            'But the king does something wise: he tests. He sends horsemen to verify what the lepers have reported. And when the messengers ride to Jordan, they find the proof strewn across the land — garments and vessels cast away in haste. The Syrians did not stage a retreat. They genuinely fled. The promise of the prophet is being fulfilled.',
        },
        {
          kind: 'carry',
          html:
            'Even doubt can lead to verification, and verification can lead to faith. The king&apos;s suspicion was not a sin — it was prudence. But when the truth was confirmed, he accepted it. Do you verify the promises God makes? Do you test them against reality? And when reality confirms God&apos;s word, do you rejoice?',
        },
        {
          kind: 'reflection',
          id: 'king-reflection',
          prompt: 'How do you verify God&apos;s promises in your own life? When evidence confirms what God has said, does your faith deepen?',
        },
      ],
    },

    /* ─── 2 Kings 7:16–17 — The Abundance Fulfilled ────────────────────────── */
    {
      ref: '2 Kings 7:16–17',
      title: 'The Promise Fulfilled; The Skeptic Trampled',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 16,
              spans: [
                t('And the people went out, and spoiled the tents of the Syrians. So a measure of fine flour was sold for a shekel, and '),
                hg('two measures of barley for a shekel', 'abundance-exact'),
                t(', according to the word of the Lord.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the king appointed the lord on whose hand he leaned to have the charge of the gate: and the people trode upon him in the gate, and he died, as the man of God had said.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'abundance-exact',
          html:
            'The promise is fulfilled exactly as spoken. Not approximately. Not sort of. The prices are precisely as Elisha declared. The abundance is not a metaphor or a story — it is the literal fulfillment of the word of the Lord, spoken the day before, at the exact hour. The word does not fail. It cannot be broken. It stands.',
        },
        {
          kind: 'commentary',
          id: 'skeptic-death',
          html:
            'But the skeptical lord, who mocked the prophet, does not rejoice. He is appointed to oversee the distribution at the gate — the very place where the abundance appears. And the starving people, in their hunger, trample him. He sees the abundance with his own eyes. But he does not eat of it. He dies — crushed not by an enemy, but by the very people whose hunger he doubted would be satisfied. His death is not violence; it is the outcome of his own unbelief. He could not believe, and so he could not enjoy. He saw, but he did not eat.',
        },
        {
          kind: 'christ',
          id: 'christ-gospel-lepers',
          title: 'Christ Connection — The Gospel Through the Despised',
          html:
            'Paul writes: "Not many of you were wise by worldly standards; not many were powerful; not many were of noble birth. But God chose what is foolish in the world to shame the wise; God chose what is weak in the world to shame the strong... so that no one might boast in the presence of God" (1 Corinthians 1:26–29). The four lepers — cast out, diseased, the very definition of the despised — are the ones through whom the city learns the good news. They are the witnesses. They are the gospel-bearers. And the gospel cannot be silenced. "How shall they hear without a preacher?" Paul asks (Romans 10:14). And the answer: through broken, unlikely messengers who have tasted grace and cannot keep silent. The church itself, often broken and disregarded, carries the gospel to a starving world.',
        },
        {
          kind: 'carry',
          html:
            'The skeptic could have eaten. The abundance was real. But unbelief cost him everything. He refused the promise, mocked the messenger, and when the promise came to pass, he was crushed by the very salvation he had rejected. This is the trajectory of unbelief — not that God fails, but that we fail to receive what God gives. The abundance is offered. Will you believe?',
        },
        {
          kind: 'reflection',
          id: 'skeptic-trampled',
          prompt: 'The skeptic saw the abundance but could not enjoy it because he refused to believe. Where in your life are you refusing to receive what God has already given?',
        },
      ],
    },
  ],
};
