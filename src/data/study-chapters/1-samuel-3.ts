import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Samuel 3 — "Speak; for thy servant heareth"
 * A child learns to recognize the voice of God. The prophet is born.
 */
export const SAMUEL_1_3: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 3,

  estimatedMinutes: { beginner: 7, intermediate: 12, deep: 15 },
  intros: [
    'The time is dark. Israel has no king, no prophet, no open vision from God. The child Samuel ministers in the temple, unaware that he is about to become the hinge upon which history turns. What God is after is not a spectacular theophany but something simpler and more dangerous: He wants to speak to the young, and the young want to hear.',
    'This chapter teaches what it costs to learn God&apos;s voice — and what it costs when you finally do. Three times the child confuses heaven&apos;s call with a man&apos;s summons. Eli, broken as he is, recognizes what&apos;s happening and becomes Samuel&apos;s teacher. The first prophecy is not a blessing but a judgment on the house that raised the prophet. By chapter&apos;s end, Samuel&apos;s words will never fall empty to the ground — and the reader is left to wrestle with what faithfulness to God may cost you.',
  ],

  opener: {
    matchArtist: /rembrandt/i,
    matchTitle: /samuel/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Samuel 3',
    quote:
      'Samuel learned to recognize God&apos;s voice calling to him in the night. His mentor Eli taught him to answer: "Speak; for thy servant heareth." The young prophet&apos;s faithfulness to God, even when it meant delivering hard news, made him Israel&apos;s greatest judge.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 3 · Study Guide',
  },

  sections: [
    /* ─── 1 Samuel 3:1–3 — The Rare Word ────────────────────────────────── */
    {
      ref: '1 Samuel 3:1–3',
      title: 'The Word Was Precious',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('And the child Samuel ministered unto the Lord before Eli. And '),
                hy('the word of the Lord was precious', 'hebrew-yaqar'),
                t(' in those days; there was '),
                hg('no open vision', 'c-no-vision'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yaqar',
          title: 'Yaqar — "precious"',
          script: 'יָקָר',
          translit: '<strong>yaqar</strong> · rare, costly, hard to find',
          description:
            'The word for precious usually means "expensive" or "scarce" — like a rare gem. God&apos;s word in this era is not common. Prophecy has grown silent. When God does speak, it will shock the boy awake.',
        },
        {
          kind: 'commentary',
          id: 'c-no-vision',
          html:
            'Israel is in spiritual famine. The last judge was Samson — reckless and morally broken. The priesthood under Eli is corrupt; his own sons &ldquo;knew not the Lord&rdquo; (1 Sam. 2:12). Into this darkness, a child is learning to serve God. The very rarity of the word makes the moment precious.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 2,
              spans: [
                t('And it came to pass at that time, when Eli was laid down in his place, and his eyes began to '),
                hy('wax dim', 'c-eli-dim'),
                t(' that he could not see; and ere the lamp of God went out in the temple of the Lord, where the ark of God was, Samuel was laid down to sleep.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eli-dim',
          html:
            'Eli is blind — physically and, as the chapter will hint, spiritually too. He cannot see what is happening in his own priesthood; he cannot protect his own grandsons from inherited shame. Yet even broken Eli has one thing left: the ability to recognize God when God speaks to the young.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 3,
              spans: [
                t('Now Samuel '),
                hg('did not yet know the Lord', 'c-didnot-know'),
                t(', neither was the word of the Lord yet revealed unto him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-didnot-know',
          html:
            'Samuel &ldquo;knew not the Lord.&rdquo; He has grown up in the temple, served there, been faithful — yet he has never experienced God directly. He is like a child in a silent house, learning the rhythms of prayer without ever having heard an answer. This is about to change.',
        },
        {
          kind: 'carry',
          html:
            'If you have been faithful in small things — showing up, serving quietly, learning the Bible, praying without seeing results — you know what Samuel knew: the ache of longing for God to speak back. Rarity makes it sting. But God&apos;s silence is not absence. He is paying closer attention than you think.',
        },
        {
          kind: 'reflection',
          id: 'precious-word',
          prompt:
            'Where have you been faithful in serving God without yet experiencing Him speak directly to you? What would change if you believed He is closer than you sense?',
        },
      ],
    },

    /* ─── 1 Samuel 3:4–9 — The Threefold Call ─────────────────────────── */
    {
      ref: '1 Samuel 3:4–9',
      title: 'Speak; For Thy Servant Heareth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 4,
              spans: [
                t('That the Lord called Samuel: and he answered, '),
                hp('Here am I', 'c-hineni'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hineni',
          html:
            'The Hebrew word <em>hineni</em> — "here am I" — is the word of readiness, presence, availability. Abraham says it when called to sacrifice Isaac. Moses says it at the burning bush. Samuel, though he does not know who is calling, answers instantly with the prayer of the available heart.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 5,
              spans: [
                t('And he ran unto Eli, and said, Here am I; for thou calledst me. And Eli said, I called not; lie down again: and he went and lay down.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 6,
              spans: [
                t('And the Lord called yet again, Samuel. And Samuel arose and went to Eli, and said, Here am I; for thou didst call me. And he said, I called not, my son; lie down again.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-threecalls',
          html:
            'Three times. God is patient with confusion. The boy hears his name called, knows instantly he should answer, but cannot tell the difference between Eli&apos;s summons and the call of heaven. There is grace in the repetition — God does not rebuke the child for slowness or doubt. He simply calls again.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 7,
              spans: [
                t('Now Samuel did not yet know the Lord, neither was the word of the Lord yet revealed unto him.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 8,
              spans: [
                t('And the Lord called Samuel again the third time. And he arose and went to Eli, and said, Here am I; for thou didst call me. And Eli perceived that the Lord had called the child.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eli-perceives',
          html:
            'Eli &ldquo;perceived&rdquo; — even blind, even from a bed, even in a house of darkness and priestly failure, Eli recognizes the pattern. A man who has lost so much still has the gift of spiritual sight. He sees what the boy cannot yet see, and he gives the boy the prayer he will need.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 9,
              spans: [
                t('Therefore Eli said unto Samuel, Go, lie down: and it shall be, if he call thee, that thou shalt say, '),
                hp('Speak, Lord', 'christ-speak'),
                t('; for thy servant heareth. So Samuel went and lay down in his place.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-thy-servant',
          html:
            'This is the prayer. Not "What do you want?" — too casual. Not "Your will be done" — too formal. But: "Speak; for thy servant heareth." It reverses the usual direction of prayer. Most often we speak to God, petition God, lay our needs before Him. Here the boy will learn to stop talking and listen. The servant&apos;s posture is receptivity. The servant knows his place is not to demand but to attend.',
        },
        {
          kind: 'christ',
          id: 'christ-speak',
          title: 'Christ Connection — The Word Who Calls by Name',
          html:
            'John 10:3 says the shepherd "calleth his own sheep by name." Jesus is the Shepherd, and every disciple is learning what Samuel learned: to recognize His voice calling you by name, and to answer, "Speak; for thy servant heareth." Paul wrote, "My sheep hear my voice… and they follow me" (John 10:27). From the moment of conversion to the end of life, the Christian&apos;s deepest work is learning to distinguish His voice from all the others clamoring in the darkness.',
        },
        {
          kind: 'carry',
          html:
            'In your day, you are likely to hear many voices — your phone, your fear, other people&apos;s expectations, the market, the news cycle, your own ambition. The art of the spiritual life is learning to pick out one voice from all the rest. Not by being clever, but by being still. By saying what Samuel was taught to say: "Speak; I am listening." This week, in a quiet moment, try it. Put the other voices down. And listen.',
        },
        {
          kind: 'reflection',
          id: 'speak-hearken',
          prompt:
            'When did you last stop talking long enough to really listen for God? What would it look like to practice that this week — to say, "Speak; for thy servant heareth"?',
        },
      ],
    },

    /* ─── 1 Samuel 3:10–14 — The Hard Message ────────────────────────── */
    {
      ref: '1 Samuel 3:10–14',
      title: 'The Message About Eli',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 10,
              spans: [
                t('And the Lord came, and stood, and called as at other times, Samuel, Samuel. And Samuel said, '),
                t('Speak'),
                t('; for thy servant heareth.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 11,
              spans: [
                t('And the Lord said to Samuel, Behold, I will do a thing in Israel, at which both the ears of every one that heareth it shall tingle. In that day I will perform against Eli all things which I have spoken concerning his house: when I begin, I will also make an end.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tingle',
          html:
            'This is the language of catastrophe. Ears tingle, in Scripture, when news is so shocking it makes you physically recoil. God is about to do something that will stun Israel. And Samuel&apos;s first word from God is not comfort, not affirmation, but judgment on the house that raised him.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 12,
              spans: [
                t('For I have told him that I will judge his house for ever for the iniquity which he knoweth; because his sons made themselves vile, and he restrained them not.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-knoweth',
          html:
            'Eli knew. He knew his sons were corrupt, running the priesthood into the ground, abusing their office, taking meat from sacrifices by force. He knew and did not stop them. Knowing without acting is, in God&apos;s eyes, a form of guilt. Eli&apos;s passivity toward evil is itself iniquity.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 13,
              spans: [
                t('And therefore I have sworn unto the house of Eli, that the iniquity of Eli&apos;s house shall not be purged with sacrifice nor offering for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-atonement',
          html:
            'No sacrifice, no offering can fix this. The priesthood&apos;s own tool for atonement will not work. This is judgment made permanent. Eli&apos;s descendants will bear the mark. The man who teaches Samuel the prayer of listening hears, through Samuel, that his own prayer will not be answered as he wishes.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 14,
              spans: [
                t('Wherefore I have sworn unto the house of Eli, that the iniquity of Eli&apos;s house shall not be purged with sacrifice nor offering for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'The prophet&apos;s loneliness begins here. Samuel must now choose between loyalty to the man who taught him and loyalty to God who called him. If you are ever given a word from God that cuts against the institution that raised you — that contradicts what you were taught, that judges the people you love, that demands you speak truth that will hurt — you will face Samuel&apos;s choice. The prophet&apos;s words must belong to God first, not to the human community that wants to hear them.',
        },
        {
          kind: 'reflection',
          id: 'hard-word',
          prompt:
            'Can you think of a time when loyalty to God asked you to say something hard to someone you love? What happened? What did you learn?',
        },
      ],
    },

    /* ─── 1 Samuel 3:15–18 — Eli Hears the Word ──────────────────────── */
    {
      ref: '1 Samuel 3:15–18',
      title: 'The Boy Tells the Old Man',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 15,
              spans: [
                t('And Samuel lay until the morning, and opened the doors of the house of the Lord. And Samuel '),
                hg('feared to shew Eli the vision', 'c-fear'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fear',
          html:
            'Samuel is afraid. He has just heard the voice of God for the first time, and that voice carries a judgment on his mentor. The boy&apos;s fear is human and right. But Eli, blind and old, is already waiting.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 16,
              spans: [
                t('And Eli called Samuel, and said, Samuel, my son. And he answered, Here am I.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 17,
              spans: [
                t('And he said, What is the thing that the Lord hath said unto thee? I pray thee hide it not from me: God do so to thee, and more also, if thou hide any thing from me of all the things that he said unto thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eli-urges',
          html:
            'Eli&apos;s response is remarkable. He knows the word will be against him — and he demands to hear it anyway. He calls on God to curse Samuel if he hides anything. This is what spiritual maturity looks like: not the illusion of control, but the willingness to hear truth, especially when it will hurt.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 18,
              spans: [
                t('And Samuel told him every whit, and hid nothing. And Eli said, It is the Lord: let him do what seemeth him good.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-let-him-do',
          html:
            'Eli submits. He does not argue, does not blame Samuel, does not try to interpret the word away. He simply yields: "Let him do what seemeth him good." A man who has lost his priesthood, lost his children, lost his strength, lost even his eyes — and what remains is a posture of trust. This is how an elder dies: not fighting, but accepting that God&apos;s will is better than his own survival.',
        },
        {
          kind: 'carry',
          html:
            'It is easier to judge Eli for his weakness than to honor him for this moment. But this is where the chapter opens the deepest question: What does faithfulness look like when you have failed? Eli failed his children, failed to keep his house holy. But he did not fail at this: when the truth came, he received it. If you have made mistakes with your power, with your authority, with the trust you were given — Eli shows you a path: stop defending. Stop explaining. Listen. Say, "It is the Lord; let him do what seemeth him good." That prayer, late in the day, changes everything.',
        },
        {
          kind: 'reflection',
          id: 'eli-surrender',
          prompt:
            'Is there a judgment or hard truth about yourself you have been resisting? What would it look like to say Eli&apos;s prayer: "Let him do what seemeth him good"?',
        },
      ],
    },

    /* ─── 1 Samuel 3:19–21 — Samuel Established ──────────────────────── */
    {
      ref: '1 Samuel 3:19–21',
      title: 'Samuel Grows and Becomes Prophet',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 19,
              spans: [
                t('And Samuel '),
                hg('grew', 'c-grew'),
                t(', and the Lord was with him, and '),
                hy('did let none of his words fall to the ground', 'hebrew-navi'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-grew',
          html:
            'Samuel grows in two senses: physically from a child to a man, and spiritually into the full power of his prophetic office. The Lord is with him — not as a whisper in the night, now, but as the defining reality of his life.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-navi',
          title: 'Navi — "prophet"',
          script: 'נָבִיא',
          translit: '<strong>navi</strong> · one who speaks for God, one whose words do not fall empty',
          description:
            '"Did let none of his words fall to the ground" is the standard for a true prophet. Every word carries weight; nothing is wasted; everything comes to pass. Samuel becomes the measure by which all later prophets are judged. His words do not fail because his ear stays attuned to the God who speaks.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 20,
              spans: [
                t('And all Israel from Dan to Beersheba knew that Samuel was established to be a prophet of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dan-beersheba',
          html:
            'From Dan (the far north) to Beersheba (the far south) — the entire nation knows. Samuel&apos;s reputation spreads without marketing, without politics, without self-promotion. When a person truly speaks for God, no institution needs to announce them. The word itself becomes the announcement.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 21,
              spans: [
                t('And the Lord appeared again in Shiloh: for the Lord revealed himself to Samuel in Shiloh by the word of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-reveals-himself',
          html:
            'God reveals himself by the word. Not by thunder or fire, but by speaking. The pattern that began in the darkness of Samuel&apos;s bedroom — the still voice, the attentive listening, the faithfulness to speak what he hears — becomes the foundation of his whole life. He will be a prophet not because he is gifted or educated, but because he learned early how to listen.',
        },
        {
          kind: 'christ',
          id: 'christ-prophet',
          title: 'Christ Connection — The Prophet Greater Than Samuel',
          html:
            'When Peter preaches at Pentecost, he points back to Samuel&apos;s calling and says, "A prophet shall the Lord your God raise up unto you like unto me" — Moses speaking of one greater than himself. But the Gospels push further. Jesus is not only a prophet; He is the Word made flesh, the one who speaks and creates, the voice that the prophets only heard and echoed. Samuel learned the pattern: attention, obedience, availability. In Jesus, that pattern reaches its fullness. Acts 3:22 quotes the promise of a prophet like Moses, then points it to Jesus — the one whom all the prophets, including Samuel, were foreshadowing.',
        },
        {
          kind: 'carry',
          html:
            'If you are learning to recognize God&apos;s voice in your life — the small, still call amid the noise — you are doing what Samuel did. You are a kind of prophet yourself. Not with authority to judge nations, perhaps, but with the authority to speak truth where you are, to let your words carry the weight they carry only when they belong to Him. Samuel&apos;s words did not fall to the ground because he never spoke his own words, only His. That is the standard that follows Samuel through scripture, and it calls you too.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'prophet-like-me',
          prompt:
            'What would it mean for your words — in your work, your family, your friendships — to "not fall to the ground"? What would change if you spoke only what you first heard from God?',
        },
      ],
    },
  ],
};
