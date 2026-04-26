import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 11 — The Tenth Plague Announced.
 *
 * God announces the final plague: the death of the firstborn in Egypt.
 * From Pharaoh&apos;s son to the maidservant&apos;s son to the firstborn of cattle.
 * A great cry shall go up throughout Egypt, but not a dog shall move its tongue
 * against the children of Israel. The chapter is the hinge between warning and
 * redemption, spanning only 10 verses but freighted with the weight of judgment
 * and the contours of salvation.
 */
export const EXODUS_11: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 11,

  intros: [
    'God brings nine plagues on Egypt — water to blood, frogs, gnats, flies, livestock disease, boils, hail, locusts, darkness. Each one Pharaoh refuses to let Israel go. Each one he hardens his heart. In Exodus 11, God announces the plague that will break him: the death of every firstborn in Egypt.',
    'This is not a threat made in anger. This is a judgment made in mercy. God is not being cruel; He is being clear. This plague will fall on all of Egypt — priest and prisoner, master and servant, prince and pauper. But Israel will be spared. The hinge of Exodus 11 is a single question: on which side of the blood will you stand when the angel comes?',
  ],

  sections: [
    /* ─── Exodus 11:1 — The Word Comes to Moses ─────────────────────────── */
    {
      ref: 'Exodus 11:1',
      title: 'The Final Word',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 1,
              spans: [
                t('And the Lord said unto Moses, '),
                hp('Yet will I bring one plague more', 'christ-final-plague'),
                t(' upon Pharaoh, and upon Egypt; afterwards he will let you go hence: when he shall let you go, he shall surely '),
                hy('thrust you out', 'hebrew-garash'),
                t(' altogether.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-one-more',
          html:
            'Nine plagues have fallen. The eighth is darkness — the land is black. In that darkness, God tells Moses there is one plague left, and it will end this. Not &ldquo;perhaps it will,&rdquo; but &ldquo;he will let you go.&rdquo; The outcome is already decided. What&apos;s being decided now is only whether Pharaoh chooses to release Israel willingly or whether God&apos;s hand will force his hand.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-garash',
          title: 'Garash — &ldquo;thrust out&rdquo;',
          script: 'גָּרַשׁ',
          translit: '<strong>garash</strong> · to drive out, expel forcibly',
          description:
            'The word is violent — not a polite release, but an expulsion. Pharaoh will not let Israel go gently. He will be forced. His pride will not bend; only his breaking will open the door.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the thing holding you captive doesn&apos;t let go because you ask nicely. Sometimes it doesn&apos;t let go because you reason with it or wait it out. Sometimes the hand of God has to move through force — a loss that strips it of power, a breaking that opens what pride kept locked. If you&apos;re sensing that movement in your own story, you&apos;re not being punished. You&apos;re being freed.',
        },
      ],
    },

    /* ─── Exodus 11:2–3 — Instructions to Israel ──────────────────────────── */
    {
      ref: 'Exodus 11:2–3',
      title: 'Speaking Favor in Darkness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 2,
              spans: [
                t('Speak now in the ears of the people, and let every man '),
                hy('borrow', 'hebrew-shaal'),
                t(' of his neighbour, and every woman of her neighbour, jewels of silver, and jewels of gold.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the Lord gave the people '),
                hp('favour in the sight of the Egyptians', 'c-favour'),
                t('. Moreover the man Moses was very great in the land of Egypt, in the sight of Pharaoh&apos;s servants, and in the sight of the people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-favour',
          html:
            'In the darkness of the ninth plague, while Egyptians sit in blackness, God gives Israel favour in their eyes. The word &ldquo;favour&rdquo; is <em>chen</em> in Hebrew — grace, a gift unearned and undeserved. Even now, in the midst of judgment, God is making a way for His people to leave with silver and gold. Not as slaves fleeing in the night, but as guests honoured. The Egyptians themselves will open their hands.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shaal',
          title: 'Shaal — &ldquo;borrow&rdquo;',
          script: 'שָׁאַל',
          translit: '<strong>shaal</strong> · to ask for, request, borrow',
          description:
            'The translation &ldquo;borrow&rdquo; is technically correct but misleading. Israel is not taking a loan they will repay. They are asking, and the Egyptians — moved by God&apos;s hand — will give. This is plunder dressed as borrowing; grace at work inside a moment of exodus.',
        },
        {
          kind: 'carry',
          html:
            'When God moves to free you, He doesn&apos;t leave you empty-handed. The thing that held you back may have cost you greatly, but His hand reaches back and restores. Not all losses can be recovered; not all years can be returned. But the God who leads you out is the God who provides for the journey ahead. That favour — that <em>chen</em> — is His gift before you even ask.',
        },
      ],
    },

    /* ─── Exodus 11:4–5 — The Judgment Announced ────────────────────────── */
    {
      ref: 'Exodus 11:4–5',
      title: 'Every Firstborn',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 4,
              spans: [
                t('And Moses said, Thus saith the Lord, About midnight will I go out into the midst of Egypt:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And '),
                hy('all the firstborn', 'hebrew-bekhor'),
                t(' in the land of Egypt shall die, from the firstborn of Pharaoh that sitteth upon his throne, even unto '),
                hg('the firstborn of the maidservant that is behind the mill', 'c-all-classes'),
                t('; and all the firstborn of cattle.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-bekhor',
          title: 'Bekhor — &ldquo;firstborn&rdquo;',
          script: 'בְּכוֹר',
          translit: '<strong>bekhor</strong> · the firstborn, the one who opens the womb',
          description:
            'The word is used relentlessly across this chapter. It carries not just birth order but inheritance, promise, and covenant. The firstborn was the one designated to carry the family&apos;s future. Here, every one dies.',
        },
        {
          kind: 'commentary',
          id: 'c-all-classes',
          html:
            'From Pharaoh down to the maidservant — the sweep is absolute. No rank shields you. No poverty exempts you. A prince and a servant&apos;s child lie in the same darkness. The God who made the categories of high and low, ruler and ruled, declares His judgment indifferent to them. The plague does not split Egypt along the lines that matter to Egypt. It splits Egypt along the line of blood: spilled, or covered.',
        },
      ],
    },

    /* ─── Exodus 11:6 — The Cry ──────────────────────────────────────────── */
    {
      ref: 'Exodus 11:6',
      title: 'A Great Cry',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 6,
              spans: [
                t('And there shall be '),
                hy('a great cry', 'hebrew-zaaqah'),
                t(' throughout all the land of Egypt, such as there was none like it, nor shall be like it any more.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cry-echo',
          html:
            'In Exodus 2:23, the Scripture tells us that Israel under bondage &ldquo;cried by reason of the bondage: and their cry came up unto God.&rdquo; That cry moved God&apos;s heart. Now, at the tenth plague, Egypt will utter the same cry that Israel uttered — and their cry will have no answer. The cry Israel made in desperation, God heard. The cry Egypt will make in judgment, God will not answer. This is the echo of mercy denied becoming the sound of judgment enforced.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-zaaqah',
          title: 'Zaaqah — &ldquo;cry&rdquo;',
          script: 'זְעָקָה',
          translit: '<strong>zaaqah</strong> · a cry for help, an anguished shout',
          description:
            'It is the same word used for Israel&apos;s cry in bondage. Egypt will know, in that moment, the sound of their own desperation. They will taste what they made Israel taste.',
        },
        {
          kind: 'reflection',
          id: 'cry-reflect',
          prompt: 'When have you heard a cry — your own or another&apos;s — and felt God&apos;s movement in answer? When have you been silent and heard nothing?',
        },
      ],
    },

    /* ─── Exodus 11:7 — The Sign ────────────────────────────────────────── */
    {
      ref: 'Exodus 11:7',
      title: 'Not a Dog Shall Move',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 7,
              spans: [
                t('But against any of the children of Israel shall not '),
                hp('a dog move his tongue', 'c-dog-tongue'),
                t(', against man or beast: that ye may know how that the Lord doth put '),
                hg('a difference between the Egyptians and Israel', 'c-difference'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dog-tongue',
          html:
            'A dog moves its tongue to bark, to growl, to defend. This phrase means absolute silence in Israel&apos;s presence. While Egyptians wail and cry out, the night will be wholly quiet over Israel&apos;s tents. Not even the smallest creature will disturb them. The protecting hand of God will be so evident, so unmistakable, that nothing — not even a dog — can deny it.',
        },
        {
          kind: 'commentary',
          id: 'c-difference',
          html:
            'Nine plagues have already shown difference: locusts fell on Egypt but not Goshen; darkness covered the land but light was in the houses of Israel. But this judgment draws the line as sharp as it has ever been. There are two peoples in Egypt now: those under the hand of judgment, and those under the hand of protection. The question is not whether judgment is coming. The question is: where will you stand when it arrives?',
        },
        {
          kind: 'carry',
          html:
            'In seasons when God&apos;s hand moves in judgment, His protection of those who trust Him becomes unmistakable. You do not have to wonder whether He sees you; the fact that you are untouched answers. You do not have to ask whether He remembers you; the sign is silence and safety while chaos roars around. His difference toward you is not hidden. It is evident to those who have eyes to see it.',
        },
      ],
    },

    /* ─── Exodus 11:8 — Pharaoh&apos;s Final Hour ──────────────────────────── */
    {
      ref: 'Exodus 11:8',
      title: 'Pharaoh&apos;s Final Hour',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 8,
              spans: [
                t('And all these thy servants shall come down unto me, and bow down themselves unto me, saying, Get thee out, and all the people that follow thee: and after that I will go out. And he went out from Pharaoh '),
                hg('in a great anger', 'c-anger'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-anger',
          html:
            'Moses describes what will happen — Pharaoh&apos;s own servants will come to him in the night and plead with him to let Israel go. Pharaoh will bow down to Moses, or at least bow down to the reality that he cannot resist God. It is not repentance; it is capitulation. And then Moses leaves Pharaoh&apos;s presence in great anger. Why anger? Because the cost of Pharaoh&apos;s ten refusals is about to be exacted, and it will be paid not by Pharaoh&apos;s heart, which is hard, but by Pharaoh&apos;s firstborn son, who is innocent. The anger is righteous. The grief is real. The judgment is just.',
        },
        {
          kind: 'christ',
          id: 'christ-final-plague',
          title: 'Christ Connection — The Firstborn Dies',
          html:
            'In Exodus 4:22, God calls Israel His &ldquo;firstborn son.&rdquo; At this moment, in the tenth plague, every firstborn son in Egypt dies — except Israel&apos;s, because of the blood of the lamb. Later, Paul writes that Jesus is &ldquo;the firstborn from the dead&rdquo; (Col. 1:18) and &ldquo;the firstborn of every creature&rdquo; (Col. 1:15). At Calvary, God&apos;s own firstborn dies — so that the destroying angel passes over us. The anger Moses carries out of Pharaoh&apos;s presence is the anger that God will bear at the cross, when His own Son takes the death that belongs to us. The cry that goes up in Egypt in Exodus 11:6 echoes forward to Golgotha, where God&apos;s own firstborn cries out, &ldquo;My God, my God, why hast thou forsaken me?&rdquo; (Matt. 27:46). Except this time, the firstborn who dies is God&apos;s own, and in His death, the angel passes over all of us who hide our lives in His blood.',
        },
      ],
    },

    /* ─── Exodus 11:9–10 — The Narrative Close ───────────────────────────── */
    {
      ref: 'Exodus 11:9–10',
      title: 'The Plague Confirmed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 9,
              spans: [
                t('And the Lord said unto Moses, Pharaoh shall not hearken unto you; that '),
                hg('my wonders may be multiplied', 'c-wonders-multiply'),
                t(' in the land of Egypt.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Moses and Aaron did all these wonders before Pharaoh: and the Lord '),
                hy('hardened Pharaoh&apos;s heart', 'hebrew-azaq'),
                t(', so that he would not let the children of Israel go out of his land.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wonders-multiply',
          html:
            'God foreknew that Pharaoh would not listen to the announcement of the tenth plague. He already knew the outcome. Yet He told Moses to speak it anyway. Why? So that His wonders — the display of His power, the unmistakable evidence of His hand — would multiply. Each refusal makes the next miracle more visible. Each hardening of Pharaoh&apos;s heart makes the next intervention of God more undeniable. The plagues are not just punishments; they are a kind of sermon, written in the sky and the water and the darkness, declaring who God is to all who will see.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-azaq',
          title: 'Hardened — &ldquo;strengthened&rdquo;',
          script: 'חִזַּק',
          translit: '<strong>azaq</strong> · hardened, strengthened, made firm',
          description:
            'The question of who hardens Pharaoh&apos;s heart runs through Exodus: Pharaoh does it, Moses says God does it, and both are true. God does not make Pharaoh refuse against his will. God strengthens Pharaoh&apos;s heart to refuse — allows him to choose his own course, and lets the consequences follow. Choice and consequence, human will and divine sovereignty, stand side by side in the mystery.',
        },
        {
          kind: 'carry',
          html:
            'God works through the refusals of others. Their &ldquo;no&rdquo; does not stop His &ldquo;yes&rdquo; — it clarifies it. It makes it visible. It deepens the certainty that when God moves, all the hardness of the earth cannot resist. Whatever refusal you are facing — from a heart you love, from a system that resists you, from your own stubborn will — you are not powerless before it. God&apos;s hand is at work even in the refusal. The miracle comes not in changing their mind, but in moving you forward despite it.',
        },
        {
          kind: 'reflection',
          id: 'hardening-reflect',
          prompt: 'Where have you seen God work through the refusal of someone else? What did that teach you about His power?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Exodus 11',
    quote:
      'God announced the tenth plague — the death of every firstborn in Egypt. But against the children of Israel, not a dog would move its tongue. The cry that goes up in judgment is the echo of the cry Israel made in bondage, the cry God heard and answered.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 11 · Study Guide',
  },

  hasHebrew: true,
};
