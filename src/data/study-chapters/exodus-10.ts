import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 10 — Plagues 8 and 9: locusts and three days of darkness.
 * Pharaoh&apos;s servants beg him to relent. Pharaoh almost concedes — "go, but leave your
 * little ones, leave your cattle." Moses refuses every compromise. The darkness is so
 * thick "they saw not one another, neither rose any from his place for three days" —
 * but the children of Israel had light in their dwellings.
 */
export const EXODUS_10: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 10,

  estimatedMinutes: { 5: 8, 10: 15, 15: 17 },
  intros: [
    'Exodus 10 is the story of two plagues that tear at the very heart of Egypt&apos;s power. The eighth plague—locusts—descends on the land like a moving wall, consuming every leaf, every plant, every hope of harvest. Pharaoh&apos;s own servants finally break, pleading with him: "Egypt is destroyed." He bends, he seems ready to let the people go. And then his conditions reveal his true grip: he will free the people, but their children must stay. Their animals must stay. The wealth of Egypt must stay. Total obedience is the one thing Pharaoh cannot give; the one thing Moses will not accept.',
    'The ninth plague is darkness—a darkness so thick it can be felt. For three days, Egypt sits in absolute blackness while the nation&apos;s god Ra, the sun himself, is hidden from the world. But the children of Israel have light in their dwellings. This is the moment when Egypt&apos;s darkness becomes tangible and the cost of refusal becomes visible. Moses sees the pattern now: Pharaoh will negotiate, compromise, offer anything except surrender. So Moses stops negotiating. He speaks the God who has already decided what deliverance looks like: complete and total, with nothing left behind in Egypt.',
  ],

  sections: [
    /* ─── Exodus 10:1–2 — The Promise of More ──────────────────────────── */
    {
      ref: 'Exodus 10:1–2',
      title: 'The God Who Hardens Hearts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD said unto Moses, '),
                hy('Go in unto Pharaoh', 'ex10-moses-goes'),
                t(': for '),
                hp('I have hardened his heart', 'c-hardened-intro'),
                t(', and the heart of his servants, that I might shew these signs before him:'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And that thou mayest '),
                hg('tell in the ears of thy son, and of thy son&apos;s son', 'c-memory'),
                t(', what things I have wrought in Egypt, and my signs which I have done among them; that ye may know how that I am the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex10-moses-goes',
          html:
            'The eighth plague is not a surprise to God. He is not scrambling, not reacting. He sends Moses in <em>knowing</em> what Pharaoh will do. This is a God who moves toward an end He has already seen and chosen. The plagues are not arguments meant to convince Pharaoh; they are signs meant to convince Israel.',
        },
        {
          kind: 'commentary',
          id: 'c-hardened-intro',
          html:
            'God does not hide His plan: "I have hardened his heart." This is not a secret operating behind the scenes. God announces it plainly. Pharaoh&apos;s refusal is not a surprise that caught God off guard; it is part of a larger story God is writing. A king who refuses God does not change God&apos;s timeline. He only changes his own.',
        },
        {
          kind: 'commentary',
          id: 'c-memory',
          html:
            'Notice: God cares that this story gets passed down. This moment will be told to grandchildren and great-grandchildren. In a world where Egypt tried to erase and control, God makes sure His people know the difference between Pharaoh&apos;s power and His own. This is how you survive a century of slavery—you tell the story. You keep the miracle alive in the mouths of your children.',
        },
        {
          kind: 'carry',
          html:
            'There are moments in your own story where God was moving toward an end He could already see—a conversation that seemed random, a closed door that looked like failure, a season that felt abandoned. Looking back, you can see He was writing something. Your job now, like Moses, is to <em>tell</em> it. Not to convince anyone, just to speak it out loud so your own children can know His faithfulness is not accidental.',
        },
      ],
    },

    /* ─── Exodus 10:3–6 — The Refusal to Hear ───────────────────────────── */
    {
      ref: 'Exodus 10:3–6',
      title: 'Pharaoh Won&apos;t Listen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 3,
              spans: [
                t('And Moses and Aaron came in unto Pharaoh, and said unto him, Thus saith the LORD God of the Hebrews, '),
                hg('How long wilt thou refuse to humble thyself before me', 'c-refuse'),
                t('? let my people go, that they may serve me.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Else, '),
                hg('if thou refuse to let my people go', 'c-refuse-else'),
                t(', behold, to morrow will I bring the '),
                hy('locusts', 'hebrew-arbeh'),
                t(' into thy coast:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And they shall cover the face of the earth, that one cannot be able to see the earth: and they shall eat the residue of that which is escaped, which remaineth unto you from the hail, and shall eat every tree which groweth for you out of the field:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And thy houses shall be filled with locusts, and the houses of all thy servants, and the houses of all the Egyptians; which neither thy fathers, nor thy fathers&apos; fathers have seen, since the day that they were upon the earth unto this day. And he turned himself, and went out from Pharaoh.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-arbeh',
          title: 'Arbeh — &ldquo;locust&rdquo;',
          script: 'אַרְבֶּה',
          translit: '<strong>arbeh</strong> · swarming, multiplying',
          description:
            'The root suggests multiplication and swarming. One locust becomes ten becomes ten thousand becomes a darkness that swallows the sky. The word carries the idea of something small becoming something that covers everything.',
        },
        {
          kind: 'commentary',
          id: 'c-refuse',
          html:
            'Moses asks: "How long will you refuse to humble yourself?" The Hebrew word for "refuse" (<em>ma&apos;an</em>) carries a sense of active resistance, deliberate choice. Pharaoh is not weak; he is <em>choosing</em> his own destruction.',
        },
        {
          kind: 'commentary',
          id: 'c-refuse-else',
          html:
            'This is the pattern now: if you refuse, then. Refusal has a cost. And Pharaoh keeps choosing the cost because his heart has been hardened—not by God alone, but by his own refusals. Each time he says no, his ability to say yes gets smaller.',
        },
      ],
    },

    /* ─── Exodus 10:7–11 — Servants Plead, Pharaoh Deceives ────────────── */
    {
      ref: 'Exodus 10:7–11',
      title: 'Servants Break, Pharaoh Bends—and Deceives',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 7,
              spans: [
                t('And Pharaoh&apos;s servants said unto him, '),
                hg('How long shall this man be a snare unto us', 'c-snare'),
                t('? let the men go, that they may serve the LORD their God: knowest thou not yet that Egypt is destroyed?'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Moses and Aaron were brought again unto Pharaoh: and he said unto them, '),
                hg('Go, serve the LORD your God', 'c-pharaoh-yields'),
                t(': but who are they that shall go?'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And Moses said, We will go with our young and with our old, '),
                hg('with our sons and with our daughters', 'c-all-people'),
                t(', with our flocks and with our herds; for we must hold a feast unto the LORD.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And he said unto them, '),
                hg('Let the LORD be so with you, as I will let you go, and your little ones', 'c-pharaoh-condition'),
                t(': look to it; for evil is before you.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Not so: go now ye that are men, and '),
                hp('serve the LORD', 'c-serve-lord'),
                t('; for that ye did desire. And they were driven out from Pharaoh&apos;s presence.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-snare',
          html:
            'The servants finally speak truth: "This man is a snare unto us." Pharaoh&apos;s refusal is not just about the Hebrews anymore. It is destroying Egypt. They are not arguing for the Hebrews&apos; freedom; they are arguing for their own survival. And still, Pharaoh refuses to truly let go.',
        },
        {
          kind: 'commentary',
          id: 'c-pharaoh-yields',
          html:
            'For a moment it looks like Pharaoh might actually yield. "Go, serve the LORD." But the next words betray him: "but who are they that shall go?" Pharaoh is not letting anyone go. He is asking a trap question.',
        },
        {
          kind: 'commentary',
          id: 'c-all-people',
          html:
            'Moses is clear: everyone. The young, the old, the sons, the daughters, the livestock. Complete deliverance or no deliverance. This is the non-negotiable word of God—no hostages left behind in Egypt.',
        },
        {
          kind: 'commentary',
          id: 'c-pharaoh-condition',
          html:
            'Pharaoh offers a compromise: the men can go, but the children stay. The women stay. The animals stay. In other words, leave us leverage. Leave us a reason to bring you back. Leave us power over you. And look at his words: "evil is before you." He means the journey. He means the unknown. But what he cannot say is: I will not release my grip on what belongs to God.',
        },
        {
          kind: 'commentary',
          id: 'c-serve-lord',
          html:
            'Pharaoh finally tells the men to go serve the Lord. But this is not generosity. This is defeat. This is what a man does when he has no more cards to play, when his power is broken, and when even his own servants are turning against him. And yet even in this surrender, he cannot surrender. He must go back on his word the moment the plague lifts. A half-hearted concession is no concession at all.',
        },
        {
          kind: 'reflection',
          id: 'ref-compromise',
          prompt: 'Where are you offering God a compromise instead of surrender? What are you trying to keep in Egypt?',
        },
      ],
    },

    /* ─── Exodus 10:12–15 — The Eighth Plague Arrives ─────────────────── */
    {
      ref: 'Exodus 10:12–15',
      title: 'Locusts Cover the Land',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 12,
              spans: [
                t('And the LORD said unto Moses, '),
                hg('Stretch out thine hand over the land of Egypt for the locusts', 'c-moses-stretches'),
                t(', that they may come up upon the land of Egypt, and eat every herb of the land, even all that the hail hath left.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And Moses stretched forth his rod over the land of Egypt, and the LORD brought an '),
                hg('east wind upon the land all that day, and all that night', 'c-wind'),
                t(': and when it was morning, the east wind brought the locusts.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And the locusts went up over all the land of Egypt, and rested in all the coasts of Egypt: very grievous were they; '),
                hy('before them there were no such locusts as these', 'c-unprecedented'),
                t(', neither after them shall be such.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('For they covered the face of the whole earth, so that the land was darkened; and they did eat every herb of the land, and all the fruit of the trees which the hail had left: and there remained not any green thing in the trees, or in the herbs of the field, through all the land of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-moses-stretches',
          html:
            'By the eighth plague, the pattern is familiar. Moses stretches out his hand. God acts. The thing Pharaoh feared happens anyway. But now the servants have broken. The land is visibly ruined. Pharaoh is running out of time to change course—and God knows it.',
        },
        {
          kind: 'commentary',
          id: 'c-wind',
          html:
            'The east wind brings the locusts. In Egypt, the east wind is the khamsin—the desert wind that devours. God uses the land&apos;s own rhythms against Pharaoh. Nothing Pharaoh can do to the Nile, nothing he can do to the sky will stop what God has set in motion.',
        },
        {
          kind: 'commentary',
          id: 'c-unprecedented',
          html:
            '"Before them there were no such locusts as these, neither after them shall be such." This is the superlative. This is the worst thing anyone has ever seen. And still, Pharaoh will not break completely.',
        },
        {
          kind: 'carry',
          html:
            'There comes a point in refusal where the cost becomes undeniable. The locusts are real. The hunger is real. The servants are begging. The land is stripped bare. At that moment, a true change of heart would be possible—a real release, a real letting go. But Pharaoh is already too far gone. His refusal has calcified into his identity. He cannot let go because his power was always his god.',
        },
      ],
    },

    /* ─── Exodus 10:16–20 — Pharaoh Asks Forgiveness, Then Hardens Again ──── */
    {
      ref: 'Exodus 10:16–20',
      title: 'Repentance Without Release',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 16,
              spans: [
                t('Then Pharaoh called for Moses and Aaron in haste; and he said, '),
                hg('I have sinned against the LORD your God', 'c-confession'),
                t(', and against you.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Now therefore forgive, I pray thee, my sin only this once, and '),
                hg('intreat the LORD your God, that he may take away from me this death only', 'c-fear'),
                t('.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And he went out from Pharaoh, and intreated the LORD.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the LORD turned a mighty west wind, which took away the locusts, and cast them into the Red sea; there remained not one locust in all the coasts of Egypt.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('But the LORD hardened Pharaoh&apos;s heart, so that '),
                hg('he would not let the children of Israel go', 'c-hardened-again'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-confession',
          html:
            'Pharaoh confesses: "I have sinned." But his confession is not about releasing the people. It is about relief from pain. He does not confess that he was wrong to hold them. He confesses that he is suffering. This is the difference between repentance and mere remorse.',
        },
        {
          kind: 'commentary',
          id: 'c-fear',
          html:
            'He asks Moses to intercede, to "take away from me this death only." He is focused on his own escape, his own comfort. When the plague lifts, his fear evaporates—and so does any pretense of obedience. A heart that only changes under pressure has not changed at all.',
        },
        {
          kind: 'commentary',
          id: 'c-hardened-again',
          html:
            'The text is explicit: "the LORD hardened Pharaoh&apos;s heart." After Pharaoh sees the locusts vanish, he decides once again not to let them go. God does not force this; God simply allows Pharaoh to be who he chooses to be. Each refusal hardens him further, until refusal becomes his nature.',
        },
      ],
    },

    /* ─── Exodus 10:21–23 — The Darkness Descends ────────────────────── */
    {
      ref: 'Exodus 10:21–23',
      title: 'Three Days of Darkness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 21,
              spans: [
                t('And the LORD said unto Moses, '),
                hg('Stretch out thine hand toward heaven', 'c-hand-extended'),
                t(', that there may be '),
                hy('darkness over the land of Egypt', 'hebrew-choshekh'),
                t(', even '),
                hy('darkness which may be felt', 'c-darkness-felt'),
                t('.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Moses stretched forth his hand toward heaven; and there was a thick darkness in all the land of Egypt '),
                hg('three days', 'c-three-days'),
                t(':'),
              ],
            },
            {
              number: 23,
              spans: [
                t('They saw not one another, neither rose any from his place for three days: but all the children of Israel had '),
                hp('light in their dwellings', 'christ-light-dwellings'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-choshekh',
          title: 'Choshekh — &ldquo;darkness&rdquo;',
          script: 'חֹשֶׁךְ',
          translit: '<strong>choshekh</strong> · darkness, the absence of light',
          description:
            'This is the same word used in Genesis 1:2 for the primordial darkness God overcame at creation. Ra, the Egyptian sun god, is the god who brings light. Now that god is extinguished, and Egypt sits in the same kind of formless darkness that existed before creation.',
        },
        {
          kind: 'commentary',
          id: 'c-darkness-felt',
          html:
            'Not just darkness—"darkness which may be felt." This is tangible. This is a darkness so thick it presses against the skin, so complete it seems solid. For three days, Egypt sits in this thickness, unable to move, unable to see, unable to function. Ra is gone. The sun is gone. There is nothing.',
        },
        {
          kind: 'commentary',
          id: 'c-three-days',
          html:
            'Three days. Not two. Not four. The same number of days that will later define resurrection. Jesus rises on the third day. Here, Egypt is in darkness for three days—the land of the empty tomb before the tomb opens. While Pharaoh sits blind, God is already writing a message in the sky.',
        },
        {
          kind: 'commentary',
          id: 'c-hand-extended',
          html:
            'Moses stretches out his hand a final time before the darkness breaks. His hand, raised toward heaven, becomes the channel through which God withdraws light itself. No more negotiation. No more compromise. Just the pure power of a God who can unmake the world.',
        },
        {
          kind: 'christ',
          id: 'christ-light-dwellings',
          title: 'Christ Connection — Three Days of Light Hidden',
          html:
            'In Matthew 27:45, the same darkness falls at Calvary: "from the sixth hour there was darkness over all the land unto the ninth hour." Jesus, the Light of the world, is hidden for three days in death—and the whole cosmos sits in that darkness. But notice what the text says about Israel: they had light in their dwellings. While the rest of Egypt cannot move, cannot see, cannot function, God&apos;s people are lit. And three days later, He rises. The Light breaks through. The world&apos;s true sun has appeared.',
        },
        {
          kind: 'carry',
          html:
            'There are dark seasons. Seasons when you cannot see the next step, when moving feels impossible, when God&apos;s presence is not obvious. In those seasons, the text says the children of Israel had light in their dwellings. Light does not mean the darkness is not real. It means you are not inside it. You are walking through it, held by Him, lit by a light the world cannot see.',
        },
        {
          kind: 'reflection',
          id: 'ref-darkness',
          prompt: 'Where is there darkness in your world right now? Can you name the light you have been given even while walking through it?',
        },
      ],
    },

    /* ─── Exodus 10:24–29 — The Final Demand, The Final Refusal ──────── */
    {
      ref: 'Exodus 10:24–29',
      title: 'Complete Deliverance or Nothing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 24,
              spans: [
                t('And Pharaoh called unto Moses, and said, '),
                hg('Go ye, serve the LORD', 'c-pharaoh-offer'),
                t('; only let your flocks and your herds be stayed: let your little ones also go with you.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And Moses said, '),
                hg('Thou must give us also sacrifices and burnt offerings', 'c-moses-refusal'),
                t(', that we may sacrifice unto the LORD our God.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Our cattle also shall go with us; '),
                hp('there shall not an hoof be left behind', 'christ-total-obedience'),
                t('; for thereof we must take to serve the LORD our God; and we know not with what we shall serve the LORD, until we come thither.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('But the LORD hardened Pharaoh&apos;s heart, and '),
                hg('he would not let them go', 'c-final-refusal'),
                t('.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Pharaoh said unto him, '),
                hg('Get thee from me', 'c-final-words'),
                t(', take heed to thyself, see my face no more; for in that day thou seest my face thou shalt die.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And Moses said, '),
                hg('Thou hast spoken well', 'c-moses-concedes'),
                t(': I will see thy face again no more.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-pharaoh-offer',
          html:
            'Pharaoh offers the same compromise again: the people can go, but the animals stay. The cattle are the wealth of Egypt. The cattle are leverage. The cattle are proof that Pharaoh still has power over the Hebrews.',
        },
        {
          kind: 'commentary',
          id: 'c-moses-refusal',
          html:
            'Moses does not barter. He does not negotiate. He speaks the requirement: "Thou must give us also sacrifices and burnt offerings." Moses is not asking for permission to leave. He is stating what complete obedience looks like. And it includes <em>everything</em>.',
        },
        {
          kind: 'commentary',
          id: 'c-final-refusal',
          html:
            'The pattern reaches its end. Nine plagues. Nine refusals. Nine moments when Pharaoh could have bent and chosen life. And now the text is final: "he would not let them go." Not "could not." Would not. This is the hardness of a will that has chosen itself over God one too many times.',
        },
        {
          kind: 'commentary',
          id: 'c-final-words',
          html:
            '"Get thee from me." Pharaoh orders Moses out. The king of Egypt, surrounded by the wreckage of nine plagues, announces that he will speak to Moses no more. But he has already spoken. And what he has said is: I choose my own darkness.',
        },
        {
          kind: 'commentary',
          id: 'c-moses-concedes',
          html:
            'And Moses agrees. "Thou hast spoken well. I will see thy face again no more." Moses walks out of Pharaoh&apos;s presence. The negotiation is over. God will act alone now. Pharaoh has made his choice, and Moses has accepted it. What comes next is not compromise. It is deliverance.',
        },
        {
          kind: 'christ',
          id: 'christ-total-obedience',
          title: 'Christ Connection — Not an Hoof Left Behind',
          html:
            'Moses refuses every compromise. "There shall not an hoof be left behind." Total deliverance means total surrender—no leverage left in Egypt, no hostage, no reason to ever look back. This is what Jesus asks: not most of your life, not your best intentions, but <em>your whole self</em>. "No one, having put his hand to the plough, and looking back, is fit for the kingdom of God" (Luke 9:62). Deliverance is not partial. Worship is not partial. Total obedience is the only obedience.',
        },
        {
          kind: 'carry',
          html:
            'You have offered God compromises too. Not most of your heart, just enough to keep one other loyalty. Not all your time, just the Sunday hours. Not your whole family, just yourself. The pattern is old. And the answer is still Moses&apos;s answer: there shall not a hoof be left behind. Not because God is harsh, but because partial surrender is no surrender at all. It is just delayed allegiance to someone else.',
        },
        {
          kind: 'reflection',
          id: 'ref-total',
          prompt: 'What "hoof" are you trying to keep in Egypt? What would change if you believed God wanted <em>all</em> of you?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Exodus 10',
    quote:
      'Moses will not compromise. When Pharaoh offers to let the people go but keep their children and animals, Moses refuses: "There shall not an hoof be left behind." This is total deliverance—no hostages, no leverage, no reason to ever return to Egypt.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 10 · Study Guide',
  },

  hasHebrew: true,
};
