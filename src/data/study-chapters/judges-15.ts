import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges 15 — Foxes, Fires, and the Jawbone
 * A chapter about the Spirit's power on a flawed vessel, the people's betrayal of their deliverer,
 * and God's provision in the wilderness. Samson's revenge cycle exposes the spiritual confusion
 * of the judges era, while his prayer and God's response foreshadow Christ's true deliverance.
 */
export const JUDGES_15: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 15,

  estimatedMinutes: { beginner: 6, intermediate: 12, deep: 15 },
  intros: [
    'Judges 15 is a chapter of escalating violence and extraordinary feats. Samson, rejected by his wife&apos;s father, takes revenge on the Philistines by sending 300 foxes with burning tails into their fields. The retaliation comes swiftly: his wife and her father are burned to death. Samson vows to strike them again, does so with great slaughter, and then hides in a cave. But his own people — the men of Judah — come to bind him and hand him over to the Philistines.',
    'This is the moral center of the Judges narrative: not Samson&apos;s strength, but his people&apos;s choice to protect their oppressors over their own deliverer. Yet even as the chapter darkens, the Spirit of the Lord comes mightily upon Samson, his bonds melt like burned flax, he kills a thousand men with a donkey&apos;s jawbone, and when thirst threatens him, God provides water from a hollow place. Revenge and deliverance tangle together here — but underneath it all, God&apos;s power breaks through.',
    'The chapter ends with a strange note: "Samson judged Israel in the days of the Philistines twenty years." He was a judge in Israel, yet never once do the people rally to him. They fear the Philistines more than they trust the man God raised to free them. It&apos;s a pattern that will echo in the life of the One the prophets called Israel&apos;s true Judge and Deliverer.',
  ],

  sections: [
    /* ─── Judges 15:1–8 — The Foxes and the Firebrand ───────────────────── */
    {
      ref: 'Judges 15:1–8',
      title: '"Now Shall I Be Blameless"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 1,
              spans: [
                t('But it came to pass within a while after, in the time of wheat harvest, that Samson visited his wife with a kid; and he said, I will go in to my wife into the chamber. But her father would not suffer him to go in.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jud15-rejection',
          html:
            'Samson arrives to claim his marriage rights, but his father-in-law bars him — and immediately offers a sting: her younger sister is fairer; take her instead. The old man speaks as if Samson had abandoned her out of hate. He hasn&apos;t. Samson is the one rejected, but the rejection is reframed as his fault.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 2,
              spans: [
                t('And her father said, I verily thought that thou hadst utterly hated her; therefore I gave her to thy companion: is not her younger sister fairer than she? take her, I pray thee, instead of her.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And Samson said unto them, '),
                hp('Now shall I be more blameless than the Philistines', 'jud15-blameless'),
                t(', though I do them a displeasure.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jud15-blameless',
          html:
            'Samson declares he will be blameless — as if he hasn&apos;t already crossed into grave moral territory. This is the lie underneath his entire narrative: he justifies his violence as response, his rage as righteous. The text doesn&apos;t hide what he&apos;s doing. It lets him rationalize, then shows us the fruit. Samson is a man who always has reasons for what he does next.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 4,
              spans: [
                t('And Samson went and caught three hundred '),
                hy('foxes', 'hebrew-shu-al'),
                t(', and took '),
                t('firebrands'),
                t(', and turned tail to tail, and put a firebrand in the midst between two tails.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And when he had set the brands on fire, he let them go into the standing corn of the Philistines, and burnt up both the shocks, and the standing corn, with the vineyards and olives.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jud15-300foxes',
          html:
            'Three hundred foxes. This is not an impulsive act. This is a methodical feat — extraordinary in its planning and execution. Samson&apos;s strength is not only raw power; it is strategic, sustained, relentless. He targets the harvest: their food supply, their year ahead, their security. This is economic warfare dressed as personal vendetta.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shu-al',
          title: 'Shu&apos;al — "fox"',
          script: 'שׁוּעָל',
          translit: '<strong>shu&apos;al</strong> · the cunning animal',
          description:
            'In Hebrew thought, the fox is the creature of trickery and deception. Samson, dispatching three hundred of them in service of his rage, is using cunning&apos;s own tool against his enemies. The image is vivid and strange: a man catching foxes, tying them tail to tail, loading them with fire, and releasing them. It&apos;s as if the narrative itself is asking: how far will he go?',
        },
        {
          kind: 'carry',
          html:
            'Unmet desire has a way of begetting strategy. When something you want is denied you, your mind can spend weeks in planning — not the small plans of simple revenge, but elaborate ones, methodical ones, justified ones. The text doesn&apos;t condemn Samson here; it shows. And what it shows is a man who can organize three hundred foxes but cannot organize his own heart. What small foxfires are you carrying that you&apos;ve told yourself are blameless?',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 6,
              spans: [
                t('Then the Philistines said, Who hath done this? And they said, Samson, the son in law of the Timnite, because he had taken his wife, and given her to his companion. And the Philistines came up, and burnt her and her father with fire.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jud15-wife-burned',
          html:
            'In 14:15, the Timnite woman feared the Philistines would burn her father&apos;s house if she didn&apos;t betray Samson. Now it happens anyway — and she is burned with him. Samson&apos;s revenge has circled back to destroy the very woman his action was meant to defend. This is what the cycle of vengeance always does: it consumes the innocent alongside the guilty.',
        },
        {
          kind: 'reflection',
          id: 'jud15-foxes',
          prompt:
            'Samson&apos;s elaborate revenge destroys his own wife. When have you seen revenge or retaliation, no matter how justified it felt, harm someone innocent? What did that teach you?',
        },
      ],
    },

    /* ─── Judges 15:9–13 — The Men of Judah Hand Over Samson ───────────── */
    {
      ref: 'Judges 15:9–13',
      title: 'Your Own People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 7,
              spans: [
                t('And Samson said unto them, Though ye have done this, yet will I be avenged of you, and after that I will cease. And he smote them hip and thigh with a great slaughter: and he went down and dwelt in the top of the rock Etam.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jud15-smote',
          html:
            'Once again Samson promises this will be the last time — "after that I will cease." But his vow is conditional on his vengeance being satisfied. He cannot stop; he can only escalate. His destruction of the Philistines is real, and devastating, but it never brings the peace he claims it will.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 8,
              spans: [
                t('Then the Philistines went up, and pitched in Judah, and spread themselves in Lehi.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And the men of Judah said, Why are ye come up against us? And the Philistines said, To bind Samson are we come up, to do to him as he hath done to us.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Then three thousand men of Judah went to the top of the rock Etam, and said to Samson, Knowest thou not that the Philistines are rulers over us? what is this that thou hast done unto us?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jud15-rulers',
          html:
            '"Knowest thou not that the Philistines are rulers over us?" These men of Judah state the problem correctly: they are under Philistine rule. And then they solve it by handing over the one man God raised to free them. This is the moral nadir of the Judges narrative. Three thousand men who were under oppression choose to protect their oppressors. Fear has done what the enemy could not.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 11,
              spans: [
                t('And Samson said unto them, As they did unto me, so have I done unto them.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And they said unto him, We are come down to bind thee, that we may deliver thee into the hand of the Philistines. And Samson said unto them, Swear unto me, that ye will not fall upon me yourselves.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And they said, No; but we will bind thee fast, and deliver thee into their hand: but surely we will not kill thee. So they bound him with two new cords, and brought him up from the rock.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jud15-bound',
          html:
            'Samson negotiates with his own people as if they were enemies. He asks a promise they won&apos;t kill him — and they swear they won&apos;t, they&apos;ll only deliver him to the Philistines to be killed. The logic of oppressed people colluding in their oppression. The text leaves it stark: bound with new cords, brought up from the rock by the hands of Judah.',
        },
        {
          kind: 'carry',
          html:
            'The deepest betrayal is often not from enemies, but from people who live under the same burden you do, and who choose the safety of the status quo over the risk of liberation. When you&apos;ve tasted injustice, it can be hard to trust that deliverance is possible at all. That fear — of losing what little safety you have, of the chaos that might come — can make even a deliverer look like a threat. Where are you seeing that pattern in the world around you? Where might you be doing it yourself?',
        },
        {
          kind: 'reflection',
          id: 'jud15-betrayal',
          prompt:
            'The men of Judah handed their deliverer to their oppressors out of fear. When have you seen fear cause people to choose the familiar burden over the possibility of freedom?',
        },
      ],
    },

    /* ─── Judges 15:14–17 — The Cords Burned, the Jawbone, a Thousand Men ── */
    {
      ref: 'Judges 15:14–17',
      title: '"Heaps Upon Heaps"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 14,
              spans: [
                t('And when he came unto Lehi, '),
                t('the Philistines shouted against him'),
                t(': and '),
                hp('the Spirit of the Lord came mightily upon him', 'jud15-spirit'),
                t('; and the cords that were upon his arms became as flax burnt with fire, and his bands loosed from off his hands.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jud15-spirit',
          html:
            'Once again the Spirit of the Lord comes upon Samson, and it comes not to reform him or teach him, but to empower him. The cords meant to bind him dissolve like burned flax. This is the pattern of Samson&apos;s entire life: his character never changes, but the Spirit&apos;s power on him never stops. The Bible does not hide the tension. A broken vessel, empowered by God, can still do God&apos;s work — but the breakage leaves a mark on everything it touches.',
        },
        {
          kind: 'commentary',
          id: 'jud15-spirit-strength',
          html:
            'The Philistines think they have him. They shout their victory. And in that moment, the Spirit comes mightily. Samson&apos;s deliverance is God&apos;s work, not his own strategy. It is a humbling moment made strange by his pride: the strongest man in the land, freed not by his own strength but by the Spirit of God.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 15,
              spans: [
                t('And he found a new '),
                hy('"jawbone of an ass"', 'hebrew-lechi'),
                t(', and put forth his hand, and took it, and '),
                hg('slew a thousand men therewith', 'jud15-thousand'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jud15-thousand',
          html:
            'A new jawbone. Not old, worn, used — but new. In the moments after the Spirit comes upon him, the tool is at hand. David had his stones. Shamgar had his ox goad. Samson has a donkey&apos;s jawbone. God uses the despised things. The instrument is humble, but the victory is total: a thousand men.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-lechi',
          title: 'Lechi — "jawbone"',
          script: 'לֶחִי',
          translit: '<strong>lechi</strong> · the jaw, the lower face',
          description:
            'The word carries the sense of the jaw as an instrument of power — teeth, grinding, speaking. A donkey&apos;s jawbone was an animal&apos;s cast-off, worthless. Yet in Samson&apos;s hand it becomes the weapon of deliverance. The place where this happens will be named after it: Ramath-lechi, the lifting up or casting away of the jaw.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 16,
              spans: [
                t('And Samson said, '),
                hg('"With the jawbone of an ass, heaps upon heaps, with the jaw of an ass have I slain a thousand men."', 'jud15-boast'),
                t(''),
              ],
            },
            {
              number: 17,
              spans: [
                t('And when he had made an end of speaking, he cast away the jawbone out of his hand; and called that place Ramath-lehi.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jud15-boast',
          html:
            'Samson opens his mouth and declares what he has done. "Heaps upon heaps" — the bodies piling up. He repeats "jawbone" twice, as if amazed at the incongruity: such a humble tool, such devastation. And in the moment after the victory, he casts it away. The jawbone served its purpose. It did not make him. He moves on.',
        },
        {
          kind: 'carry',
          html:
            'After the victory, Samson casts the jawbone away. He doesn&apos;t carry it as a trophy. He doesn&apos;t build an altar to it. He doesn&apos;t trust it for the next fight. Whatever God gave you to accomplish something He asked — a gift, a season, a tool, a role — may have been meant for that one moment, not for the rest of your life. The willingness to let go of what God gave you is as much a sign of faith as the willingness to pick it up.',
        },
        {
          kind: 'reflection',
          id: 'jud15-jawbone',
          prompt:
            'What tool or role or gift did God give you for a specific season that you might be gripping too tightly now? What would it look like to cast it away?',
        },
        {
          kind: 'artwork',
          matchTitle: /samson/i,
          matchArtist: /tissot/i,
          caption: 'Judges 15:14–17 · "Heaps Upon Heaps"',
        },
      ],
    },

    /* ─── Judges 15:18–20 — En-Hakkore, the Spring of the Caller ────────── */
    {
      ref: 'Judges 15:18–20',
      title: '"The Spring of the One Who Called"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 18,
              spans: [
                t('And he was sore athirst, and called on the Lord, and said, Thou hast given this great deliverance into the hand of thy servant: and now shall I die for thirst, and fall into the hand of the uncircumcised?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jud15-prayer',
          html:
            'This is the first time Samson prays in the narrative. Not in his humiliation, not in his captivity later, but here — after victory, exhausted, thirsty, afraid of dying. He calls on God. He gives God credit: "Thou hast given this great deliverance." Even unrepentant, even unbroken, even in his pride, Samson knows who the source is. He calls out, and the text records his prayer without shame.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 19,
              spans: [
                t('But God clave a hollow place that was in the jaw, and there came water thereout; and when he had drunk, his spirit came again, and he revived. Wherefore the name thereof was called En-hakkore, which is in Lehi unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jud15-water',
          html:
            'God splits the hollow place in the jawbone itself — the very weapon Samson has just cast away — and water flows. Not manna from heaven, not water from a well someone dug; water from the unlikeliest place. The text says this spring exists "unto this day," meaning it became a place where the people returned, where they told the story. A place that said: God answers the prayer of the broken, in the moment of exhaustion, in the middle of the wilderness.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-en-hakkore',
          title: 'En-hakkore — "spring of the caller"',
          script: 'עֵין הַקֹּרֵא',
          translit: '<strong>En-hakkore</strong> · the spring of him who calls',
          description:
            'En is "spring" or "fountain." Hakkore comes from the root meaning "to call, to cry out." The name preserves the moment: a thirsty man called out, and God answered. It is a name that celebrates prayer, not achievement. The spring didn&apos;t come because Samson was strong; it came because he called.',
        },

        {
          kind: 'christ',
          id: 'jud15-living-water',
          title: 'Christ Connection — Rivers of Living Water',
          html:
            'Jesus stands in the temple at the Feast of Tabernacles — the same festival where water-drawing rituals honored the provision in the wilderness — and cries out: "If any man thirst, let him come unto me, and drink… out of his belly shall flow rivers of living water" (John 7:37–38). The cry for water in the wilderness becomes a promise. The One who is thirsty Himself, thirsty at the cross, becomes the wellspring. Samson&apos;s exhaustion foreshadows a deeper thirst, and the water from the hollow place foreshadows the river of living water that flows from the pierced side of Christ.',
        },
        {
          kind: 'carry',
          html:
            'You call, and the spring is there. Not as reward for righteousness, but as answer to the call. Your work may wear you out. Your battles may leave you exposed and thirsty. Your strength may desert you. But the one who calls — who cries out — finds that God has already split open the place you didn&apos;t expect to give water. You are the one who calls, and that is enough. En-hakkore: the spring of the one who calls.',
        },
        {
          kind: 'reflection',
          id: 'jud15-water-2',
          prompt:
            'When you are exhausted and thirsty — in your actual life, not metaphorically — where do you call? Where have you found the water you didn&apos;t expect?',
        },
        { kind: 'divider' },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 20,
              spans: [
                t('And he judged Israel in the days of the Philistines twenty years.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jud15-judge',
          html:
            'One line. Samson judged Israel, meaning he was a leader, a deliverer, a judge like the others in this book. Yet he never rallied an army. His people never truly rose up with him. They feared the Philistines too much. He was a judge to a people who couldn&apos;t quite believe in deliverance. Twenty years: a long time to be powerful and alone, to be the only one willing to resist, to be feared and abandoned in equal measure.',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Judges 15',
    quote:
      'The Spirit of the Lord came mightily upon Samson, and the cords dissolved like burned flax. He found a jawbone and slew a thousand men. When he was thirsty, he called upon God, and God split the hollow place and gave him water.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Judges 15 · Study Guide',
  },
};
