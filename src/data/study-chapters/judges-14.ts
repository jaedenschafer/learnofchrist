import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges 14 — Samson[res:bibleodyssey-samson-delilah] and his defining flaw: "she pleaseth me well."
 * A chapter about the Spirit's power flowing through a compromised vessel,
 * about Nazarite vows broken in plain sight, and about a man who trusts
 * the wrong people with his secrets. Christ Connection: the better Samson,
 * whose Spirit-anointing rested on a heart wholly devoted, who conquered
 * the Lion and brought sweetness from the strong.
 */
export const JUDGES_14: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 14,

  estimatedMinutes: { beginner: 8, intermediate: 14, deep: 19 },
  opener: {
    matchTitle: /Samson Slays the Lion/i,
    caption: 'Judges 14',
  },
  intros: [
    'Samson was born to deliver Israel from the Philistines. A Nazarite from the womb — his hair uncut, his lips never to touch wine, his hands never to touch the dead. The Spirit of the Lord came mightily upon him. But Judges 14 opens with a man undone not by weakness of body, but by the weakness of sight. He sees a Philistine woman and wants her. And nothing — not his parents&apos; objection, not his vows, not God&apos;s call on his life — will turn him from what pleases his eye.',
    'This is the era the book keeps naming: "In those days there was no king in Israel: every man did that which was right in his own eyes" (Judges 17:6, 21:25). Samson <em>is</em> that era. The Spirit empowers him even as he breaks his vows. Honey sweet comes from the carcase of the lion. And the riddle[res:sefaria-riddle-honey] he cannot keep — it will be told by a woman, and the telling will cost him everything.',
  ],

  sections: [
    /* ─── Judges 14:1–3 — "She Pleaseth Me Well" ───────────────────────────── */
    {
      ref: 'Judges 14:1–3',
      title: '"She Pleaseth Me Well" — Samson&apos;s Eye',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 1,
              spans: [
                t('And Samson went down to Timnath, and saw a woman of the daughters of the Philistines.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he came up, and told his father and mother, and said, I have seen a woman in Timnath of the daughters of the Philistines: now therefore '),
                hg('get her for me to wife', 'j14-eye-rule'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('But his father and mother said unto him, Is there never a woman among the daughters of thy brethren, or among all my people, that thou goest to take a wife of the uncircumcised Philistines? And Samson said unto his father, '),
                t('Get her for me'),
                t('; '),
                hg('for she pleaseth me well', 'j14-eye-rule'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j14-eye-rule',
          html:
            'One phrase repeats twice in the span of three verses: "get her for me." The KJV says she "pleaseth me well"; the Hebrew is starker — "she is right in mine eyes." The word is <em>yashar</em>: straight, right, upright. But right according to whom? Not according to his vows. Not according to his parents. Not according to God&apos;s call. Only according to what his eye, in that moment, decides is right. This is the signature flaw of Judges. When there is no king — when no authority stands above the self — every man becomes his own law. Samson is the living proof.',
        },
        {
          kind: 'commentary',
          id: 'j14-he-saw',
          html:
            'The chapter begins with one verb: "he saw." One woman, one look, and the whole story falls from there. No prayer. No consultation with God. Just sight, and then demand. It will happen again later with Delilah. Samson&apos;s eyes make his decisions for him.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yashar',
          title: 'Yashar — "right in his own eyes"',
          script: 'יָשַׁר',
          translit: '<strong>yashar</strong> · straight, upright, right (according to oneself)',
          description:
            'This same root will ring through Judges 17:6 and 21:25: "every man did that which was right in his own eyes." The word is not <em>evil</em>; it&apos;s <em>right</em> according to the self. That is Samson&apos;s whole tragedy.',
        },
        {
          kind: 'carry',
          html:
            'One glance. One moment of wanting something because it pleased the eye. And a whole life of consequence unwinds from there. The Judges era teaches us the danger of letting sight rule: what seems right in the moment, what the eye insists it must have, often locks us into paths we never meant to walk. Where are you letting your eyes decide what your heart should do? Where does what "pleaseth" you override what you actually promised — to God, to others, to yourself?',
        },
        {
          kind: 'reflection',
          id: 'j14-sight',
          prompt:
            'What did you see today that you immediately wanted? And did you stop to ask whether wanting it was the same as it being right for you?',
        },
      ],
    },

    /* ─── Judges 14:4–7 — The Lion Torn by the Spirit ───────────────────────── */
    {
      ref: 'Judges 14:4–7',
      title: 'The Lion Torn by the Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 4,
              spans: [
                t('But his father and mother knew not that it was of the Lord, that he sought an occasion against the Philistines: for at that time the Philistines had '),
                hg('dominion over Israel', 'j14-dominion'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j14-dominion',
          html:
            'The text stops and tells us something only God knows: "it was of the Lord." Samson&apos;s father and mother do not know this. We do. God is using Samson&apos;s lust for a Philistine woman to arrange an occasion against the Philistines themselves. God&apos;s sovereignty is working through — not <em>in spite of</em>, but <em>through</em> — Samson&apos;s compromise. This is Romans 8:28 before Romans was written. But notice: it does not make Samson&apos;s disobedience righteous. God uses it, but Samson is still wrong.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 5,
              spans: [
                t('And Samson went down, and his father and mother, to Timnath: and when they came to the vineyards of Timnath, behold, a young '),
                hg('lion roared', 'j14-lion-roar'),
                t(' against him.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And '),
                hp('the Spirit of the Lord came mightily upon him', 'j14-spirit-power'),
                t(', and he '),
                hg('rent him as he would have rent a kid', 'j14-kid'),
                t(', and '),
                hp('he had nothing in his hand', 'j14-spirit-power'),
                t(': but he told not his father nor his mother what he had done.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And he went down, and talked with the woman; and she pleased him well.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j14-lion-roar',
          html:
            'A young lion, roaring. This is the wilderness trying to kill him. But Samson does not use a weapon. No sword, no staff — he has "nothing in his hand." The Spirit alone is his strength[res:intertextual-strength-weakness-samson].',
        },
        {
          kind: 'commentary',
          id: 'j14-spirit-power',
          html:
            'Three times the text insists on the same point: "the Spirit of the Lord came mightily upon him," he tears the lion, he "had nothing in his hand." The power is not Samson&apos;s. It is the Spirit&apos;s. Yet notice what happens next: he does not return to his parents. He does not report what God has done. He goes to the woman. The Spirit empowers; the Spirit does not always sanctify the heart of the vessel it flows through. Power and character are not the same thing.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ruach',
          title: 'Ruach — "Spirit"',
          script: 'רוּחַ',
          translit: '<strong>ruach</strong> · spirit, breath, wind',
          description:
            'The Spirit of God moves through Judges like wind through a field — sudden, mighty, unstoppable. But the character of the one the Spirit moves through shapes how the power will be used. Samson&apos;s spirit is still his own.',
        },
        {
          kind: 'commentary',
          id: 'j14-kid',
          html:
            'The text is deliberately stark: he tears the lion "as he would have rent a kid." A kid is the most innocent of animals — a young goat. Samson&apos;s strength is so complete that the most fearsome thing becomes as tender as the least. This power is real. But what will he do with it?',
        },
        {
          kind: 'carry',
          html:
            'The Spirit of God is never stingy with power. He gives it freely — to prophets and soldiers, to quiet mothers and unexpected leaders. But power without character is a tragedy wearing a crown. Where are you being given power — influence in a room, gifts others admire, a position that lets you decide? The Spirit gives; but what you do with the gift is still on you.',
        },
        {
          kind: 'reflection',
          id: 'j14-spirit',
          prompt:
            'What power or influence has the Spirit given you recently? And is there any way your character is not yet matching the size of your assignment?',
        },
      ],
    },

    /* ─── Judges 14:8–13 — Honey From the Carcase, Vows Broken ───────────────── */
    {
      ref: 'Judges 14:8–13',
      title: 'Honey From the Carcase — Broken Vows',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 8,
              spans: [
                t('And after a time he returned to take her, and he turned aside to see the '),
                hg('carcase of the lion', 'j14-carcase-touch'),
                t(': and, behold, there was a swarm of bees and honey in the carcase of the lion.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And he took thereof in his hands, and went on eating, and came to his father and mother, and he gave them, and they did eat: but he told them not that he had taken the honey out of the '),
                hy('carcase of the lion', 'j14-nazarite-break'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j14-carcase-touch',
          html:
            'He turns aside. He cannot help himself. First he sees the woman and wants her. Now he sees the carcase and takes from it. This is the pattern of Samson&apos;s life: something catches his eye, and he acts. No discernment. No restraint.',
        },
        {
          kind: 'commentary',
          id: 'j14-nazarite-break',
          html:
            'A Nazarite is forbidden to touch a dead body (Numbers 6:6). The vow is one of the most serious in all the law — it sets apart someone completely for God. Samson knows this. He was born under this vow. And here he is, not only touching the carcase but eating from it, and then feeding it to his parents without telling them where it came from. He has broken his vow, hidden his breaking, and defiled his family unknowingly. This is not a small thing. This is a man already far from God, though the Spirit still moves through him.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 10,
              spans: [
                t('So his father went down unto the woman: and Samson made there a '),
                hg('feast', 'j14-feast-wine'),
                t('; for so used the young men to do.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j14-feast-wine',
          html:
            'A Nazarite is also forbidden to drink wine (Numbers 6:3). The feast — <em>mishteh</em> in Hebrew, a drinking-feast — is his second violation in as many verses. Samson is breaking his vows in real time, visible to everyone. The Spirit empowers; but Samson&apos;s inner life is rotting. We are watching a man whose gifts are larger than his character.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 11,
              spans: [
                t('And when they saw him, they brought thirty companions to be with him.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And Samson said unto them, I will now put forth a riddle unto you: if ye can certainly declare it me within the seven days of the feast, and find it out, then I will give you thirty sheets and thirty change of garments:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('But if ye cannot declare it me, then shall ye give me thirty sheets and thirty change of garments. And they said unto him, Put forth thy riddle, that we may hear it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j14-riddle-wager',
          html:
            'The stakes are high: thirty sheets and thirty changes of garments. A fortune. Samson is confident — confident because he knows something they do not. He made the riddle from his own experience. As long as he keeps the secret, he wins. As long as his secret stays safe, he is untouchable. But secrets, Samson will learn, are the most dangerous thing he owns.',
        },
        {
          kind: 'carry',
          html:
            'Honey from the carcase — beauty and sweetness emerging from where there should be only death. The image haunts. Sometimes our gifts do come this way: out of our brokenness, our past, our places we should not have been. But there is a cost to trying to hide where the gift came from. Are you taking credit for something that only came to you because you broke a promise? Are you serving honey to others without telling them the carcase it came from?',
        },
        {
          kind: 'reflection',
          id: 'j14-honey',
          prompt:
            'Where in your life is something beautiful coming from a place it should not? And what happens if you keep hiding that instead of facing it?',
        },
      ],
    },

    /* ─── Judges 14:14–18 — The Riddle and the Betrayal ────────────────────────── */
    {
      ref: 'Judges 14:14–18',
      title: 'The Riddle and the Betrayal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 14,
              spans: [
                t('And he said unto them, '),
                t('Out of the eater came forth meat, and out of the strong came forth sweetness'),
                t('. And they could not in three days expound the riddle.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j14-riddle-answer',
          html:
            'The answer is the lion and the honey, of course. What eats (the eater) yields meat (the lion). What is strong (the lion) yields sweetness (the honey). It is brilliant — a riddle that wraps Samson&apos;s own story inside it, a secret he knows he alone can hold. But a riddle is a strange choice for a Nazarite to make. A riddle is a test. It is a way of saying: I know something you do not. I am smarter, more clever, deeper than you. It is pride.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-chidah',
          title: 'Chidah — "riddle"',
          script: 'חִידָה',
          translit: '<strong>chidah</strong> · riddle, dark saying, puzzle',
          description:
            'A riddle is not straightforward speech. It is cryptic, hidden, meant to exclude. The prophets speak in chidot when delivering hard truths. But Samson uses it as a game, as a way to prove his superiority. It is the language of deception wearing the mask of cleverness.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 15,
              spans: [
                t('And it came to pass on the seventh day, that they said unto Samson&apos;s wife, Entice thy husband, that he may declare unto us the riddle, lest we burn thee and thy father&apos;s house with fire: have ye called us to take that we have? is it not so?'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Samson&apos;s wife wept before him, and said, Thou dost but hate me, and lovest me not: thou hast put forth a riddle unto the children of my people, and hast not told it me. And he said unto her, Behold, I have not told it my father nor my mother, and shall I tell it thee?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j14-wife-betrayal',
          html:
            'His wife begins to weep. She leverages his own words against him: "thou lovest me not." It is a cruel manipulation, and it works. By verse 17 we learn he tells her everything — and by verse 18, the Philistines have the answer. Samson trusted the wrong person with the secret. He will do the same with Delilah later. His eyes choose poorly; his secrets choose poorly. The people he trusts betray him.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 17,
              spans: [
                t('And she wept before him the seven days, that the feast lasted: and it came to pass on the seventh day, that he told her, because she lay sore upon him: and she told the riddle to the children of her people.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the men of the city said unto him on the seventh day before the sun went down, What is sweeter than honey? and what is stronger than a lion? And Samson said unto them, If ye had not '),
                hg('plowed with my heifer', 'j14-heifer'),
                t(', ye had not found out my riddle.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j14-heifer',
          html:
            'Samson calls his wife "my heifer" — a term that demeans her to an animal. He is angry because his secret has been stolen. But it was not stolen; it was told. <em>He</em> told it. The manipulation of his wife worked because he cared more about his secret than he cared about his vows, his wife, or the lives about to be destroyed. He is furious at the Philistines, but the real blame lands on him.',
        },
        {
          kind: 'carry',
          html:
            'A secret kept too close becomes a kind of pride. We tell ourselves we are protecting something sacred, but often we are just protecting ourselves — keeping power in our hands because the moment we speak, we lose control. What secret are you holding that is costing someone else the truth they need? What riddle are you playing when you could speak straight?',
        },
        {
          kind: 'reflection',
          id: 'j14-riddle-truth',
          prompt:
            'Is there someone in your life you do not trust enough to tell the truth? And is the real reason you do not trust them, or is it that you do not trust yourself to let go of control?',
        },
      ],
    },

    /* ─── Judges 14:19–20 — Slaughter at Ashkelon ────────────────────────────── */
    {
      ref: 'Judges 14:19–20',
      title: 'Slaughter at Ashkelon — Spirit-Empowered Revenge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 19,
              spans: [
                t('And '),
                hp('the Spirit of the Lord came upon him', 'j14-spirit-final'),
                t(', and he went down to Ashkelon, and slew thirty men of them, and took their spoil, and gave '),
                hg('change of garments', 'j14-garments'),
                t(' unto them which expounded the riddle. And his anger was kindled, and he went up to his father&apos;s house.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('But his wife was given to his companion, whom he had used as his friend.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j14-spirit-final',
          html:
            'The Spirit comes again. And again, Samson is empowered to do something extraordinary. But "extraordinary" is not the same as "righteous." He goes to Ashkelon — a Philistine city — kills thirty men, strips their garments, and pays his debt with the spoil of the slain. This is not deliverance. This is revenge. The Spirit gives him the power to do it, but the Spirit does not require that he do it. Samson has a choice, and he chooses anger over restraint, revenge over reconciliation. The text does not celebrate this. It reports it.',
        },
        {
          kind: 'commentary',
          id: 'j14-garments',
          html:
            'He wagered thirty sheets and thirty changes of garments. He pays with the garments of thirty dead men. The arithmetic is exact. The consequence is perfect. And it is the result of his own broken trust and his wife&apos;s betrayal. No one forced him to tell her. No one forced him to marry her. He made every choice that led here.',
        },
        {
          kind: 'carry',
          html:
            'When we are wounded — when someone betrays our secret, abandons our trust, breaks our heart — the Spirit still flows through us. We are still capable of extraordinary things. But capability is not a license. We can grieve and act justly. Or we can let anger make our choices. Samson chose. He will choose again with Delilah. And each time, the cost will be higher. Where is your anger pointing you toward something you should not do?',
        },
        {
          kind: 'reflection',
          id: 'j14-revenge',
          prompt:
            'When someone has hurt you deeply, does the Spirit give you power to forgive, or do you use the power the Spirit gives to get even? What is the difference?',
        },
      ],
    },

    /* ─── Christ Connection ──────────────────────────────────────────────────── */
    {
      ref: 'Christ Connection',
      title: 'The Better Samson',
      blocks: [
        {
          kind: 'christ',
          id: 'christ-samson',
          title: 'Christ Connection — The True Deliverer',
          html:
            'Samson&apos;s power came on him when his eye spotted a woman and wanted her. His strength rose up to tear a lion. The Spirit anointed him to be Israel&apos;s deliverer. But his character was too small for his gifts, and his secrets were his undoing. Jesus is the Samson the Bible was always pointing toward. "The Spirit without measure" (John 3:34) — the anointing was complete and the obedience matched it. When Jesus faced the enemy, He did not rage in revenge. He conquered. "O death, where is thy sting?" (1 Cor. 15:55). The Lion of the tribe of Judah was conquered not by being torn, but by willingly dying — and from that death came forth honey for all the world. The riddle is solved. The sweetness comes. But it comes through obedience, not through pride; through surrender, not through secrets. Samson&apos;s story is the shadow. Christ&apos;s is the substance.',
        },
      ],
    },

    /* ─── Final Carry and Reflection ──────────────────────────────────────────── */
    {
      ref: 'Carrying Judges 14 Into Your Day',
      blocks: [
        {
          kind: 'carry',
          html:
            'Judges 14 is a chapter about one man&apos;s gifts and his inability to govern them. The Spirit moved through him with power, and he wasted it on what his eyes wanted. He broke his vows, hid his breaking, trusted the wrong person, and paid in blood and loss. None of this was forced on him. Every choice was his. If you have been given gifts — strength or intelligence or charm or influence — the question is not whether the gifts are real. They are. The question is whether your character is growing to match them. Are you a person who can be trusted with what you have been given? Are you hiding anything that should be spoken?',
        },
        {
          kind: 'reflection',
          id: 'j14-final',
          prompt:
            'If the gifts you have been given were any bigger — if you had Samson&apos;s strength, or his favor with the Spirit — what would change about how you live? And do those changes need to start now?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Judges 14',
    quote:
      'Samson&apos;s eyes chose a woman, and his secrets chose his wife. He broke his vows in plain sight and paid in blood. The Spirit empowered him; his character did not match the gift.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Judges 14 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-samson-delilah',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Samson and the Philistines',
      url: 'https://www.bibleodyssey.org/passages/main-stories/samson',
      description: 'The tale of riddles, marriages, and conflict with Israel&apos;s oppressors.',
    },
    {
      id: 'sefaria-riddle-honey',
      kind: 'study',
      source: 'Sefaria',
      label: 'The Riddle and Its Source',
      url: 'https://www.sefaria.org/Judges.14',
      description: 'Wordplay, hidden knowledge, and the power of clever speech.',
    },
    {
      id: 'intertextual-strength-weakness-samson',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Strength and Weakness: Samson&apos;s Pattern',
      url: 'https://intertextual.org/Judges/14',
      description: 'Physical power as a mask for spiritual vulnerability and poor judgment.',
    },
  ]
};