import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 8 — Plagues 2, 3, and 4: frogs, lice, flies.
 *
 * Pharaoh&apos;s magicians replicate the frogs but cannot replicate the lice.
 * The magicians confess: "this is the finger of God." God separates Goshen
 * from the rest of Egypt with the plague of flies. Pharaoh negotiates
 * compromises; Moses refuses them all. 32 verses.
 *
 * Christ Connection: Jesus quotes "the finger of God" in Luke 11:20 — His
 * exorcisms are the new Exodus, freeing captives from a tyrant the magicians
 * of this age cannot match. The separation of Goshen prefigures the final
 * separation of God&apos;s people from a world under judgment.
 */
export const EXODUS_8: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 8,

  intros: [
    'Exodus 8 narrows the conflict. In chapter 7, Pharaoh&apos;s magicians matched the first plague — blood turned to blood. But a magician can only multiply what already exists. Here, Moses brings plagues that neither appear in nature nor can be learned. The magicians will make one more match and then they will stop. They will utter words that change everything.',
    'This chapter also introduces a new pattern. As the plagues escalate, God draws a line between Egypt and Goshen — the land where Israel lives. The language shifts from "all Egypt" to "except the people of Israel" or "except Goshen." God is not just punishing Pharaoh. He is separating His people from judgment. It is the first hint that God thinks in terms of His own people apart from everyone else.',
    'Watch how Pharaoh negotiates. "Ye shall not go very far away." "Leave the women and children." "Leave the livestock." The most dangerous answer to God is not "no" but "mostly yes, with a little of my own way mixed in." Half-obedience would lock Israel in Egypt forever.',
  ],

  opener: {
    matchTitle: /plague|frog|Egypt/i,
    caption: 'The chapter at a glance',
  },

  sections: [
    /* ─── Exodus 8:1–7 — Plague Two: Frogs ──────────────────────────────── */
    {
      ref: 'Exodus 8:1–7',
      title: 'The Frogs: Replication',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 1,
              spans: [
                t('And the Lord spake unto Moses, Go unto Pharaoh, and say unto him, Thus saith the Lord, '),
                hg('Let my people go', 'c-refrain'),
                t(', that they may serve me.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('But if thou refuse to let them go, behold, I will smite all thy borders with '),
                hy('frogs', 'c-frogs-sign'),
                t(':'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the river shall bring forth frogs abundantly, which shall go up and come into thine house, and into thy bedchamber, and upon thy bed, and into the houses of thy servants, and upon thy people, and into thine ovens, and into thy kneadingtroughs:'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the frogs shall come up both on thee, and upon thy people, and upon all thy servants.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-refrain',
          html:
            'The refrain begins: "Let my people go, that they may serve me." It is not just a demand for freedom. It is an offer of purpose. Egypt had defined Israel as slaves; God defines them as worshipers.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 5,
              spans: [
                t('And Moses cried unto the Lord because of the frogs which he had brought against Pharaoh.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the Lord said unto Moses, Say unto Aaron, Stretch forth thine hand with thy rod over the streams, and over the rivers, and over the ponds, and cause frogs to come up upon the land of Egypt.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Aaron stretched out his hand over the waters of Egypt; and the frogs came up, and covered the land of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-frogs-sign',
          html:
            'Frogs are water creatures brought onto the land where they do not belong. They make noise in the darkness, they are unclean (Lev. 11:10), and they are impossible to contain — they slip through fingers and seep into every space. Pharaoh&apos;s orderly kingdom is about to become swarming chaos.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-netsa',
          title: 'Netsa&apos; — &ldquo;he caused to come out&rdquo;',
          script: 'נָשָׂא',
          translit: '<strong>nasa</strong> · to lift up, bring forth, carry',
          description:
            'The same verb God uses for bringing Israel out of Egypt. In the plagues, Aaron causes things to come out; in the Exodus, God will cause Israel to come out with "a mighty hand."',
        },
        {
          kind: 'carry',
          html:
            'Pharaoh was confident in order, in control, in the way things have always been. The plague doesn&apos;t destroy Egypt — it makes it impossible to ignore the disorder underneath. Sometimes God lets the frogs in so you finally see that what felt like stability was always built on refusal. The question is not whether the frogs come. The question is whether you will finally say yes.',
        },
        {
          kind: 'reflection',
          id: 'frogs',
          prompt:
            'What "order" in your life might actually be built on a small refusal? What happens if you finally let God&apos;s will disrupt it?',
        },
      ],
    },

    /* ─── Exodus 8:8–15 — Pharaoh Negotiates, Magicians Fail ──────────────── */
    {
      ref: 'Exodus 8:8–15',
      title: 'The First "No" to a Compromise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 8,
              spans: [
                t('Then Pharaoh called for Moses and Aaron, and said, '),
                hy('Intreat the Lord', 'c-intreat'),
                t(', that he may take away the frogs from me, and from my people; and I will let the people go, that they may do sacrifice unto the Lord.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And Moses said unto Pharaoh, Glory over me: when shall I intreat for thee, and for thy servants, and for thy people, to destroy the frogs from thee and thy houses, that they may remain in the river only?'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And he said, To morrow. And he said, Be it according to thy word: that thou mayest know that there is none like unto the Lord our God.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the frogs shall depart from thee, and from thy houses, and from thy servants, and from thy people; they shall remain in the river only.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-intreat',
          html:
            'Pharaoh &apos;calls for&apos; Moses — a subtle reversal of power. He is asking the God of Israel to rescue him from the God of Israel. Notice the offer: "I will let the people go, that they may do sacrifice unto the Lord." It sounds like yes. But he said the same thing after the blood. A promise made under pressure is not obedience; it is negotiation.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 12,
              spans: [
                t('And Moses and Aaron went out from Pharaoh: and Moses cried unto the Lord because of the frogs which he had brought against Pharaoh.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the Lord did according to the word of Moses; and the frogs died out of the houses, out of the villages, and out of the fields.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And they gathered them together upon heaps: and the land stank.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('But when Pharaoh saw that there was respite, '),
                hy('he hardened his heart', 'c-hardened'),
                t(', and hearkened not unto them; as the Lord had said.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hardened',
          html:
            'The moment the pressure lifts, Pharaoh goes back to his "no." Pharaoh hardened his heart — the text makes clear that this is his choice, not God&apos;s. But the pattern is terrifying: mercy doesn&apos;t change his mind. Only judgment does, and only while the judgment is still falling.',
        },
        {
          kind: 'carry',
          html:
            'When God lifts the pressure, what happens to your resolve? A conviction during a hard season can fade the moment things settle. The practice is to say yes while it still costs something — not to wait for another crisis to remind you.',
        },
        {
          kind: 'reflection',
          id: 'respite',
          prompt:
            'What promise did you make to God the last time everything felt urgent and undone? Does it still hold now that the pressure is off?',
        },
      ],
    },

    /* ─── Exodus 8:16–19 — Plague Three: Lice — The Magicians Confess ──────── */
    {
      ref: 'Exodus 8:16–19',
      title: 'Lice: The Magicians Stop',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 16,
              spans: [
                t('And the Lord said unto Moses, Say unto Aaron, '),
                hg('Stretch out thy rod', 'c-rod'),
                t(', and smite the dust of the land, that it may become lice throughout all the land of Egypt.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And they did so; for Aaron stretched out his hand with his rod, and smote the dust of the earth, and it became lice in man and in beast; all the dust of the land became lice throughout all the land of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rod',
          html:
            'Aaron&apos;s rod strikes the dust — the ground itself. Lice (or gnats) were believed by ancient Egyptians to be creatures of decay and the underworld. In Pharaoh&apos;s kingdom, where everything is ordered and beautiful on the surface, the plague makes visible what is underneath: corruption coming up out of the earth itself.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 18,
              spans: [
                t('And the magicians did so with their enchantments to bring forth lice, but they could not: so there were lice upon man, and upon beast.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Then the magicians said unto Pharaoh, '),
                hy('This is the finger of God', 'hy-finger'),
                t(': and Pharaoh&apos;s heart was hardened, and he hearkened not unto them; as the Lord had said.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-etzba',
          title: 'Etzba&apos; Elohim — &ldquo;the finger of God&rdquo;',
          script: 'אֶצְבַּע אֱלֹהִים',
          translit: '<strong>etzba&apos; elohim</strong> · the finger of God, or the direct touch of divinity',
          description:
            'A magician can replicate a plague if the conditions already exist (blood to blood, water to frogs). But lice come from dust — something only a god could do. The magicians have finally met a boundary they cannot cross.',
        },
        {
          kind: 'commentary',
          id: 'hy-finger',
          html:
            'The magicians surrender. They cannot create what is not. They cannot command the ground to birth life. They have performed their greatest trick: they have admitted they are not gods. Pharaoh hears them — and does not listen.',
        },
        {
          kind: 'christ',
          id: 'christ-finger',
          title: 'Christ Connection — The Finger of God at Work',
          html:
            'Jesus takes this very phrase in Luke 11:20: "If I with the finger of God cast out devils, no doubt the kingdom of God is come upon you." Jesus&apos;s exorcisms — His power to command what is possessed, to free the captive — are the act of the finger of God. The demons scatter before Him the way the magicians scatter here. They know a power they cannot match when they see it. The separation of God&apos;s kingdom from the kingdom of this age is not a gentle disagreement. It is an act of divine power that no human magic can answer.',
        },
        {
          kind: 'carry',
          html:
            'The most honest thing anyone can say is what the magicians said: this is beyond me. This is the finger of God. Not "this is a very impressive thing" or "this is bigger than I thought." The confession is: I have no power here. God does. The danger is hearing that and still saying no, the way Pharaoh did.',
        },
        {
          kind: 'reflection',
          id: 'lice',
          prompt:
            'What is the "finger of God" in your life right now — something beyond your ability to fix or replicate? Are you listening to it or hardening your heart?',
        },
      ],
    },

    /* ─── Exodus 8:20–24 — Plague Four: Flies — Separation Begins ─────────── */
    {
      ref: 'Exodus 8:20–24',
      title: 'Flies: God Separates His People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 20,
              spans: [
                t('And the Lord said unto Moses, Rise up early in the morning, and stand before Pharaoh; lo, he cometh forth to the water; and say unto him, Thus saith the Lord, '),
                hy('Let my people go', 'c-let-go'),
                t(', that they may serve me.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Else, if thou wilt not let my people go, behold, I will send swarms of flies upon thee, and upon thy servants, and upon thy people, and into thy houses: and the houses of the Egyptians shall be full of swarms of flies, and also the ground whereon they are.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And I will sever in that day the land of Goshen, in which my people dwell, that '),
                hg('no swarms of flies shall be there', 'c-separation'),
                t('; to the end thou mayest know that I am the Lord in the midst of the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-let-go',
          html:
            'Moses stands before Pharaoh at dawn — at the water. Pharaoh has made this his kingdom, his power, his throne. But here comes the God of Israel, with a message that will not stop until Pharaoh releases what he holds.',
        },
        {
          kind: 'commentary',
          id: 'c-separation',
          html:
            'For the first time, God draws a line. Goshen — where Israel lives — will be spared. This is not a plague on everyone; it is a sign of ownership. God is saying: I know whose land this is, and I will protect them. The flies will swarm everywhere except there. It is the visual proof of favor.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-halakh',
          title: 'Halakh (Piel) — &ldquo;to set apart&rdquo;',
          script: 'הִלְקָה',
          translit: '<strong>halakh</strong> · to separate, distinguish, make a difference',
          description:
            'The same root word for distinction used in Genesis 1:4 when God "divided the light from the darkness." God&apos;s separation is priestly — it sanctifies.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 23,
              spans: [
                t('And I will put a '),
                hy('division', 'c-division'),
                t(' between my people and thy people: to morrow shall this sign be.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And the Lord did so; and there came a grievous swarm of flies into the house of Pharaoh, and into his servants&apos; houses, and into all the land of Egypt: the land was corrupted by reason of the swarm of flies.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-division',
          html:
            'The word "division" is the same word God uses to make difference and order in creation. God is not confused about where Pharaoh ends and Israel begins. He knows exactly whose is whose, and He protects what is His. This is the first visible sign that obedience to God comes with separation from those who refuse Him.',
        },
        {
          kind: 'carry',
          html:
            'God draws lines — not to isolate you, but to protect you. When you say yes to Him, you begin to live differently from people who say no. The boundaries are not punishment. They are the visible shape of what you belong to. The question is whether you trust that His separation is not cruelty but care.',
        },
        {
          kind: 'reflection',
          id: 'flies',
          prompt:
            'What is the cost of being separated from the people around you who refuse God? Where do you see His protection in that separation?',
        },
      ],
    },

    /* ─── Exodus 8:25–28 — Second Negotiation: Near, But Not Far ──────────── */
    {
      ref: 'Exodus 8:25–28',
      title: 'Compromise: "Ye Shall Not Go Very Far Away"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 25,
              spans: [
                t('And Pharaoh called for Moses and for Aaron, and said, Go ye, '),
                hy('sacrifice to your God', 'c-sacrifice'),
                t(' in the land.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And Moses said, It is not meet so to do; for we shall sacrifice the abomination of the Egyptians to the Lord our God: lo, shall we sacrifice the abomination of the Egyptians before their eyes, and will they not stone us?'),
              ],
            },
            {
              number: 27,
              spans: [
                t('We will go three days&apos; journey into the wilderness, and sacrifice to the Lord our God, as he shall command us.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Pharaoh said, '),
                hy('I will let you go, that ye may sacrifice to the Lord your God in the wilderness', 'c-pharaoh-offer'),
                t('; only ye shall not go very far away: intreat for me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sacrifice',
          html:
            'Pharaoh makes his first offer: worship here, in Egypt. Stay in the land. Moses refuses — you cannot worship the God of Israel while living under the god-king of Egypt. The whole point is separation: land, people, way of life.',
        },
        {
          kind: 'commentary',
          id: 'c-pharaoh-offer',
          html:
            'Now Pharaoh shifts: "Go into the wilderness — but not very far." It sounds like freedom. It is not. It is a leash. If Israel is three days away but still within reach, Egypt is still in control. A compromise would lock Israel in an impossible middle: free to worship, but not free to belong to God completely.',
        },
        {
          kind: 'carry',
          html:
            'God does not offer "mostly yes." Neither does He ask for "mostly yes" from you. The compromise looks kind — "at least this." But half-obedience is not a gift you give God while keeping the rest of your life. It is a way of never fully belonging to Him. The question is not whether you can worship; it is whether you can fully leave.',
        },
        {
          kind: 'reflection',
          id: 'distance',
          prompt:
            'Where are you offering God "not very far away" — worship on your terms, closeness with conditions? What would it cost to go the full distance?',
        },
      ],
    },

    /* ─── Exodus 8:29–32 — Pharaoh Hardens His Heart Again ────────────────── */
    {
      ref: 'Exodus 8:29–32',
      title: 'No Compromise: The Refusal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 29,
              spans: [
                t('And Moses said, Behold, I go out from thee, and I will intreat the Lord that the swarms of flies may depart from Pharaoh, from his servants, and from his people, to morrow: but let not Pharaoh deal deceitfully any more in not letting the people go to sacrifice to the Lord.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And Moses went out from Pharaoh, and intreated the Lord.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And the Lord did according to the word of Moses; and he removed the swarms of flies from Pharaoh, from his servants, and from his people; there remained not one.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And '),
                hg('Pharaoh hardened his heart at this time also', 'c-final-refusal'),
                t(', neither would he let the people go.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-final-refusal',
          html:
            'Again. Again, the moment relief comes, Pharaoh closes his heart. Moses warned him not to "deal deceitfully" — to not promise and break his word. Pharaoh does exactly that. Four plagues have now fallen. The magicians confessed God&apos;s power. Goshen has been visibly spared. And Pharaoh still says no. The text is not being cruel about Pharaoh. It is being clear: his choice to refuse is becoming who he is.',
        },
        {
          kind: 'christ',
          id: 'christ-exodus',
          title: 'Christ Connection — The Call to Leave Everything',
          html:
            'Jesus speaks in the same tone when He calls His disciples: "Let the dead bury their dead; but go thou and preach the kingdom of God" (Luke 9:60). There is no compromise. The Exodus is a portrait of what Jesus asks from anyone who follows Him. "No man, having put his hand to the plough, and looking back, is fit for the kingdom of God" (Luke 9:62). God is not asking for your worship while you stay in bondage. He is asking for your complete departure — from Egypt, from the old way, from the grip of anyone but Him.',
        },
        {
          kind: 'carry',
          html:
            'Every time you say yes to God in one area and no in another, you are negotiating like Pharaoh. "Let me worship, but let me stay close to the world." "Let me belong to Him, but not fully." God&apos;s question is not about whether you can make a compromise. It is about whether you can make a complete choice. The flies will keep coming until you do.',
        },
        {
          kind: 'reflection',
          id: 'hardened',
          prompt:
            'What would it look like to say yes to God without conditions? What is keeping you from taking that step?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Exodus 8',
    quote:
      'When Pharaoh saw that the pressure lifted, he hardened his heart and broke his promise. God drew a line: Goshen was spared while Egypt was swarmed with flies. The magicians confessed: "This is the finger of God." And still, Pharaoh refused.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 8 · Study Guide',
  },
};
