import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 14 — the Red Sea crossing.
 *
 * Pharaoh&apos;s army pursues Israel to the sea. Israel cries out in fear.
 * Moses says: "Stand still, and see the salvation of the LORD... the LORD
 * shall fight for you, and ye shall hold your peace." The angel of God moves
 * from before to behind. A strong east wind divides the waters all night.
 * Israel walks through on dry ground. The Egyptians pursue and are drowned.
 *
 * This is the redemption chapter — not just freedom from bondage, but the
 * moment Israel learns that salvation is God&apos;s work, not theirs. And for
 * those who read it with Christ in view, every detail speaks: the sea that
 * both divides and baptizes, the angel that shields, the call to stand still
 * and watch.
 */
export const EXODUS_14: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 14,

  estimatedMinutes: { 5: 10, 10: 14, 15: 18 },
  intros: [
    'For three months Israel has been free from Pharaoh&apos;s whip. They left Egypt with the wealth of Egypt in their hands, the angel of God in their faces, a cloud by day and fire by night. But now they are trapped. The sea lies in front of them. Behind them, the sound of chariot wheels. Pharaoh has changed his mind.',
    'And in that moment — at the very edge of the water, with no escape — Moses says something that reshapes everything Israel thought it knew about what they were and what God was about to do. "Stand still, and see the salvation of the LORD... the LORD shall fight for you, and ye shall hold your peace." The word for salvation is <em>yeshuah</em> — the same root as the name Jesus. It means God will do the work. Your job is to stand still and watch Him do it.',
  ],

  opener: {
    matchTitle: /red sea|crossing|moses/i,
    matchArtist: /tissot/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Exodus 14',
    quote:
      '"Stand still, and see the salvation of the LORD." Israel cried out to God in fear, and the LORD divided the sea, led them through on dry ground, and drowned Pharaoh&apos;s army. Salvation is God&apos;s work. Our work is to stand still.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 14 · Study Guide',
  },

  sections: [
    /* ─── Exodus 14:1–9 — The Trap ───────────────────────────────────────── */
    {
      ref: 'Exodus 14:1–9',
      title: 'The Trap',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Speak unto the children of Israel, that they turn and encamp before '),
                hg('Pi-hahiroth', 'geog-pihahiroth'),
                t(', between Migdol and the sea, over against Baal-zephon: before it shall ye encamp by the sea.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('For Pharaoh will say of the children of Israel, '),
                hg('They are entangled in the land, the wilderness hath shut them in', 'c-entangled'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And I will harden Pharaoh&apos;s heart, that he shall follow after them; and I will be honoured upon Pharaoh, and upon all his host; that the Egyptians may know that I am the LORD. And they did so.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And it was told the king of Egypt that the people fled: and the heart of Pharaoh and of his servants was turned against the people, and they said, Why have we done this, that we have let Israel go from serving us?'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And he made ready his chariot, and took his people with him:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And he took six hundred chosen chariots, and all the chariots of Egypt, and captains over every one of them.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the LORD '),
                hp('hardened the heart of Pharaoh', 'pharaoh-hardened'),
                t(' king of Egypt, and he pursued after the children of Israel: and the children of Israel went out with an high hand.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('But the Egyptians pursued after them, all the horses and chariots of Pharaoh, and his horsemen, and his army, and overtook them encamping by the sea, beside Pi-hahiroth, before Baal-zephon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-entangled',
          html:
            'God is telling Moses in advance exactly what Pharaoh will think: that Israel is trapped, caught between the sea and the wilderness with nowhere to run. It is a setup. God knows Pharaoh will follow. And that is precisely the point. Pharaoh&apos;s pursuit is not a problem to be solved; it is the stage on which God will perform His greatest sign. Israel feels hemmed in. God sees a display of His glory. That gap between what we see and what He is doing is where faith lives.',
        },
        {
          kind: 'commentary',
          id: 'geog-pihahiroth',
          html:
            'The geography matters. Pi-hahiroth means "mouth of the gorges" — a narrow pass between mountains and water. It was a natural choke point, a place Israel could be penned. This is not an accident. God told them to camp there. The trap is set by God Himself.',
        },
        {
          kind: 'christ',
          id: 'pharaoh-hardened',
          title: 'Christ Connection — God Hardens to Glorify',
          html:
            'Throughout Exodus, God hardens Pharaoh&apos;s heart so that His mighty works will be displayed. This language appears again in the New Testament: "That the works of God should be made manifest in him" (John 9:3). When God allows or actively brings hardness — in enemies, in circumstances, in the obstacles in front of us — it is often for a reason larger than the moment. Our weakness and the enemy&apos;s stubbornness become the canvas on which God demonstrates that He alone is the Saviour. "That no flesh should glory in his presence" (1 Cor. 1:29).',
          },
        {
          kind: 'carry',
          html:
            'When you are trapped — when the walls are close and you cannot see a way out — remember that God sometimes puts us in tight places on purpose. Not to harm us, but to show Himself. If right now you feel hemmed in, caged, with no escape route, that is exactly where God often does His most visible work. The walls are not random. And your deliverance, when it comes, will not be hidden.',
        },
        {
          kind: 'reflection',
          id: 'ex14-trapped',
          prompt: 'Where do you feel hemmed in right now — emotionally, spiritually, circumstantially? What would it mean for you to believe that even this place is part of God&apos;s plan to show His glory?',
        },
        {
          kind: 'artwork',
          matchTitle: /pharaoh|exodus/i,
          caption: 'Exodus 14:1–9 · The Trap',
        },
      ],
    },

    /* ─── Exodus 14:10–14 — Stand Still ──────────────────────────────────── */
    {
      ref: 'Exodus 14:10–14',
      title: 'Stand Still and See',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 10,
              spans: [
                t('And when Pharaoh drew nigh, the children of Israel '),
                hg('lifted up their eyes, and, behold, the Egyptians marched after them', 'c-fear-rises'),
                t('; and they were sore afraid: and the children of Israel cried out unto the LORD.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And they said unto Moses, Because there were no graves in Egypt, hast thou taken us away to die in the wilderness? wherefore hast thou dealt thus with us, to carry us forth out of Egypt?'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Is not this the word that we did tell thee in Egypt, saying, Let us alone, that we may serve the Egyptians? For it had been better for us to serve the Egyptians, than that we should die in the wilderness.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And Moses said unto the people, '),
                hp('Fear ye not, stand still, and see the salvation of the LORD', 'christ-yeshuah'),
                t(', which he will shew to you to day: for the Egyptians whom ye have seen to day, ye shall see them again no more for ever.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('The LORD shall fight for you, and '),
                hy('ye shall hold your peace', 'hebrew-charash'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fear-rises',
          html:
            'Fear floods the people instantly. They cannot see past the chariot wheels to God&apos;s promise. They wish they had never left Egypt. This is the desert temptation — to look back at the bondage as if it were safety, to prefer a known master to an unknown God. It is Israel&apos;s first great crisis of faith, and it happens not weeks into the wilderness, but on the same day they are delivered. The pattern is immediate: deliverance, then the test.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-charash',
          title: 'Charash — &ldquo;hold your peace&rdquo;',
          script: 'חָרַשׁ',
          translit: '<strong>charash</strong> · to be silent, still, to cease from labor',
          description:
            'The root means both silence and the cessation of labor — to stop working. In this moment, Israel&apos;s work is to stop doing and start trusting. To be still is to hand over the fight to God. This is the hardest work there is.',
        },
        {
          kind: 'commentary',
          id: 'christ-yeshuah',
          html:
            'The word here is <em>yeshuah</em> — salvation. "See the salvation of the LORD." This is the same root as the name Jesus, the one who would come centuries later and save not just one nation from one army, but all humanity from sin and death. Moses is calling Israel to behold salvation with their own eyes. In that moment, at that beach, they will witness the very nature of what salvation is: God acting, the enemy drowning, the people safe on the far shore — not because they fought, but because they stood still.',
        },
        {
          kind: 'christ',
          id: 'christ-salvation',
          title: 'Christ Connection — Salvation Is God&apos;s Work',
          html:
            'Romans 5:6 says: "When we were yet without strength, in due time Christ died for the ungodly." We cannot save ourselves. When we were weak, helpless, facing an enemy we could not defeat, Christ fought the battle. Ephesians 2:8–9 reinforces it: "By grace are ye saved through faith; and that not of yourselves: it is the gift of God; not of works, lest any man should boast." Salvation, from start to finish, is God acting while we stand still.',
          },
        {
          kind: 'carry',
          html:
            'You will face moments when you must choose between fighting and trusting. Between trying to manipulate your way out and standing still. Between earning your own deliverance and letting God be the Saviour. This week, name one place where you are still trying to save yourself. Let Moses&apos;s words stand: "The LORD shall fight for you, and ye shall hold your peace." Your peace is your permission slip to stop striving.',
        },
        {
          kind: 'reflection',
          id: 'ex14-peace',
          prompt: 'What are you still fighting that God may be asking you to leave to Him? What would it look like to "hold your peace" in that situation?',
        },
        {
          kind: 'artwork',
          matchTitle: /moses|sea/i,
          caption: 'Exodus 14:10–14 · Stand Still',
        },
      ],
    },

    /* ─── Exodus 14:15–20 — The Angel Moves ──────────────────────────────── */
    {
      ref: 'Exodus 14:15–20',
      title: 'The Angel Between',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 15,
              spans: [
                t('And the LORD said unto Moses, Wherefore criest thou unto me? speak unto the children of Israel, that they go forward:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('But lift thou up thy rod, and stretch out thine hand over the sea, and divide it: and the children of Israel shall go on dry ground through the midst of the sea.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And I, behold, I will harden the heart of the Egyptians, and they shall follow them: and I will get me honour upon Pharaoh, and upon all his host, upon his chariots, and upon his horsemen.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the Egyptians shall know that I am the LORD, when I have gotten me honour upon Pharaoh, upon his chariots, and upon his horsemen.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the angel of God, which went before the camp of Israel, '),
                hp('removed and went behind them', 'christ-shield'),
                t('; and the pillar of the cloud went from before their face, and stood behind them:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And it came between the camp of the Egyptians and the camp of Israel; and it was a cloud and darkness to them, but it gave light by night to these: so that the one came not near the other all the night.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-move-forward',
          html:
            'God does not command Israel to sit in the sand and wait. He tells them to go forward. Into the sea. Their feet hit the water before the walls of water rise. This is trust being asked to do something, not just to feel something. Faith moves the feet.',
        },
        {
          kind: 'commentary',
          id: 'christ-shield',
          html:
            'One of the quietly stunning moments in all of scripture. The angel of God, who had gone before Israel, now moves behind them. Between them and Pharaoh&apos;s army. God puts Himself in the gap. Not fighting Pharaoh head-on, but standing as a wall, a shield, separating His people from the enemy. What Jesus did at the cross echoes this: He stood in the gap between God&apos;s justice and our guilt. "Christ is the propitiation for our sins: and not for ours only, but also for the sins of the whole world" (1 John 2:2). The shield is His own body.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-malach',
          title: 'Malach — &ldquo;angel&rdquo;',
          script: 'מַלְאַךְ',
          translit: '<strong>malach</strong> · messenger, angel; literally, "one who is sent"',
          description:
            'The angel of God is God&apos;s direct agent, sometimes indistinguishable from God Himself in the Old Testament. Here, the angel moves to shield. In the Psalms, this is the picture of divine protection: "He shall cover thee with his feathers, and under his wings shalt thou trust" (Ps. 91:4).',
        },
        {
          kind: 'christ',
          id: 'christ-shield-connection',
          title: 'Christ Connection — The Shield Between',
          html:
            'Jesus said: "As the Father hath loved me, so have I loved you" (John 15:9). And in His death: "Christ died for us" (Rom. 5:8). He moved from before to behind — from leading the way to standing between us and the wrath we deserved. The same angel who shielded Israel at the sea shielded us at the cross. The cloud that separated the Egyptians from Israel separated the Father&apos;s justice from us when Christ bore it. The protection is the same. Only the instrument changed.',
          },
        {
          kind: 'carry',
          html:
            'You are shielded. Not by your own strength, not by your own goodness, but by Someone who chose to stand between you and what you deserved. When you are afraid of judgment, of punishment, of an enemy you cannot face, remember that God puts Himself in the gap. He does not tell you to be brave. He does not ask you to match the enemy&apos;s force. He simply stands there, and says, "I am here, and you are safe."',
        },
        {
          kind: 'reflection',
          id: 'ex14-shield',
          prompt: 'What enemy or fear feels closest to you right now? How does it change your fear to know that God stands between you and it, not leaving you to face it alone?',
        },
        {
          kind: 'artwork',
          matchTitle: /angel|protection|shield/i,
          caption: 'Exodus 14:15–20 · The Shield',
        },
      ],
    },

    /* ─── Exodus 14:21–28 — The Crossing ─────────────────────────────────── */
    {
      ref: 'Exodus 14:21–28',
      title: 'Dry Ground',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 21,
              spans: [
                t('And Moses stretched out his hand over the sea; and the LORD caused the sea to go back by a '),
                hy('strong east wind all that night', 'hebrew-ruach'),
                t(', and made the sea dry land, and the waters were divided.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the children of Israel went into the midst of the sea upon the dry ground: and the waters were a wall unto them on their right hand, and on their left.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And the Egyptians pursued, and went in after them to the midst of the sea, even all Pharaoh&apos;s horses, his chariots, and his horsemen.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And it came to pass, that in the morning watch the LORD looked unto the host of the Egyptians through the pillar of fire and of the cloud, and troubled the host of the Egyptians,'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And took off their chariot wheels, that they drave them heavily: so that the Egyptians said, Let us flee from the face of Israel; for the LORD fighteth for them against the Egyptians.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And the LORD said unto Moses, Stretch out thine hand over the sea, that the waters may come again upon the Egyptians, upon their chariots, and upon their horsemen.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And Moses stretched forth his hand over the sea, and the sea returned to his strength when the morning appeared; and the Egyptians fled against it; and the '),
                hg('LORD overthrew the Egyptians', 'c-overthrow'),
                t(' in the midst of the sea.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Thus the LORD saved Israel that day out of the hand of the Egyptians; and Israel saw the Egyptians '),
                hg('dead upon the sea shore', 'c-dead-shore'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ruach',
          title: 'Ruach — &ldquo;wind, spirit&rdquo;',
          script: 'רוּחַ',
          translit: '<strong>ruach</strong> · wind, breath, spirit; the same word used for the Spirit of God in Genesis 1:2',
          description:
            'The same word that moves over the waters at creation now divides them at deliverance. God&apos;s breath, God&apos;s spirit, God&apos;s wind — all the same root. What seems like a natural phenomenon (a strong east wind) is the direct action of the Spirit of God. Nature obeys Him.',
        },
        {
          kind: 'commentary',
          id: 'c-overthrow',
          html:
            'The Egyptians are not simply drowned; they are overthrown. The Hebrew verb is used elsewhere of being cast down, of overturning an established order. The empire that held Israel in bondage is shattered in a single night. Power over people is stripped away. God is clearing the board.',
        },
        {
          kind: 'commentary',
          id: 'c-dead-shore',
          html:
            'There is no ambiguity here. No Egyptian escapes. The enemy is not negotiated with, reformed, or converted. It is destroyed. This is not a gentle chapter. It is the judgment chapter. God&apos;s mercy toward Israel is matched by His severity toward oppression and the systems that enforce it. The cross echoes this: Christ&apos;s victory over sin and death is total, not partial.',
        },
        {
          kind: 'carry',
          html:
            'You will know deliverance, and it will be total. Not a truce or a temporary reprieve, but a real end to the thing that held you. God does not call you out of bondage only to let the chains keep their grip. When your salvation comes, it will be absolute. And you will see proof of it — not just feel it, but see the enemies of your freedom dealt with. Dry ground. Safe passage. A new shore ahead.',
        },
        {
          kind: 'reflection',
          id: 'ex14-crossing',
          prompt: 'What bondage have you been delivered from? And what new territory — "dry ground" — has God asked you to walk into because of that deliverance?',
        },
        {
          kind: 'artwork',
          matchTitle: /red sea|crossing|water/i,
          caption: 'Exodus 14:21–28 · The Crossing',
        },
      ],
    },

    /* ─── Exodus 14:29–31 — The Knowledge ───────────────────────────────── */
    {
      ref: 'Exodus 14:29–31',
      title: 'The Fear of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 29,
              spans: [
                t('But the children of Israel walked upon dry ground in the midst of the sea; and the waters were a wall unto them on their right hand, and on their left.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Thus the LORD saved Israel that day out of the hand of the Egyptians; and Israel saw the Egyptians dead upon the sea shore.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And Israel '),
                hp('feared the LORD', 'fear-worship'),
                t(', and '),
                hy('believed the LORD', 'hebrew-aman'),
                t(', and his servant Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-aman',
          title: 'Aman — &ldquo;believed&rdquo;',
          script: 'אָמַן',
          translit: '<strong>&apos;aman</strong> · to believe, to trust; the root of "Amen"',
          description:
            'To believe is to stand firm, to be made stable. It is not a feeling but a grounding. "Amen" means "so be it" — not a wish, but an affirmation that this is solid ground. Israel, having seen God&apos;s salvation with their own eyes, now stands on solid ground. Their faith is not blind; it is vision-based.',
        },
        {
          kind: 'commentary',
          id: 'fear-worship',
          html:
            'The fear of the LORD here is not terror but reverence, awe, a settling into the knowledge that this God is not to be trifled with, argued with, or doubted. He is altogether other. The same fear appears in Psalm 111: "The fear of the LORD is the beginning of wisdom." This fear is the beginning of all right relationship with God. It is the moment a heart stops expecting God to be manageable and starts expecting Him to be magnificent.',
        },
        {
          kind: 'christ',
          id: 'christ-baptism',
          title: 'Christ Connection — Baptized unto Salvation',
          html:
            'Paul draws an explicit line: "All our fathers... were all baptized unto Moses in the cloud and in the sea" (1 Cor. 10:1–2). The Red Sea crossing is named as a baptism — a passing through water out of one kingdom into another, out of slavery into freedom. Paul says it: the Israelites were baptized unto Moses. In the same way, believers are baptized into Christ, buried with Him and risen to newness of life (Rom. 6:3–4). The water that divides the kingdoms, the water that drowns the old power and raises the new people to the far shore — that is baptism, ancient and modern. The sign remains the same. The Saviour is the same. Only the era changed.',
          },
        {
          kind: 'carry',
          html:
            'You have come through waters. Whether you remember them or not, there is a before and an after in your story. Before, you were in bondage. After, you walked on dry ground. The fear that grips you now when the seas threaten is the same fear that gripped Israel before the walls came down. But they walked through. They reached the far shore. And when they turned around and looked back at the enemy dead in the water, they believed. You will too. You will see the salvation of the LORD.',
        },
        {
          kind: 'reflection',
          id: 'ex14-belief',
          prompt: 'What has God done in your life that finally made belief possible — not because you willed it, but because you saw it? How has that sight changed your fear into worship?',
        },
      ],
    },
  ],
};
