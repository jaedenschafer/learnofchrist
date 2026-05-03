import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 33 — after the golden calf, God withdraws His direct presence.
 * Moses intercedes, and Israel mourns. Yet in the darkest moment—when
 * God says "I cannot go with you, lest I consume thee"—Moses asks for
 * what no one else has asked: "Shew me thy glory." God answers with the
 * impossible offer: the cleft of the rock, His back, and a promise that
 * no one can see His face and live. Hand-authored study guide.
 */
export const EXODUS_33: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 33,

  estimatedMinutes: { beginner: 7, intermediate: 13, deep: 17 },
  intros: [
    'Exodus 33 is what happens when God&apos;s patience breaks. Israel has just built the golden calf while Moses is on Mount Sinai. They have broken the first commandment and shattered the covenant before it was even written in stone. God tells Moses to leave—to depart from Sinai and lead the people to the Promised Land—but He Himself will not go. "I will not go up in the midst of thee," He says, "for thou art a stiffnecked people: lest I consume thee in the way."',
    'The chapter turns on a single question. While Israel mourns in sackcloth and ashes, Moses pitches a tent outside the camp and goes there to pray. He speaks to God "as a man speaketh unto his friend." And then, in the strangest and most intimate moment, Moses asks: "I beseech thee, shew me thy glory." God says no—"thou canst not see my face: for there shall no man see me, and live"—but then does something astonishing. He places Moses in the cleft of a rock, hides him with His own hand, and shows him His back as He passes. What could not be looked at directly becomes bearable in hidden refuge. It is the whole gospel compressed into a shadow.',
  ],

  sections: [
    /* ─── Exodus 33:1–3 — Depart, But I Will Not Go ──────────────────── */
    {
      ref: 'Exodus 33:1–3',
      title: 'The Departure',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD said unto Moses, '),
                hp('Depart, and go up hence', 'c-depart'),
                t(', thou and the people which thou hast brought up out of the land of Egypt, unto the land which I sware unto Abraham, to Isaac, and to Jacob, saying, Unto thy seed will I give it:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-depart',
          html:
            'God is sending Israel out to the land He promised—but notice: He keeps the promise while withdrawing Himself. The gift of land is not cancelled, but His presence is. They will get what they were promised; they will not get what they truly needed[res:glory-presence][res:sefaria-exodus-33].',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 2,
              spans: [
                t('And I will send an '),
                hy('angel before thee', 'c-angel-placeholder'),
                t('; and I will drive out the Canaanite, the Amorite, and the Hittite, and the Perizzite, the Hivite, and the Jebusite:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-angel-placeholder',
          html:
            'An angel will go in God&apos;s place. Protection and power will still come, but mediated—at a distance. The face-to-face intimacy of Exodus 33:11 will not be routine anymore; it will be rare and hard-won[res:theophany].',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 3,
              spans: [
                t('Unto a land flowing with milk and honey: for '),
                hp('I will not go up in the midst of thee', 'c-not-present'),
                t('; for thou art a '),
                hy('stiffnecked people', 'hebrew-oref'),
                t(': lest I consume thee in the way.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-not-present',
          html:
            'The Lord is saying: your rebellion is too dangerous for My presence. I am too holy to live among you in your current state. If I camp among you, My holiness will burn you up. It is a mercy disguised as rejection—a refusal that protects them.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-oref',
          title: 'Oref — &ldquo;stiffnecked&rdquo;',
          script: 'עָרֶף',
          translit: '<strong>oref</strong> · stiff-necked, unbending, the back of the neck',
          description:
            'A word picture of someone refusing to turn and look back, refusing to change direction. It is stubbornness at the neck level—refusal of the very posture submission requires.',
        },
        {
          kind: 'carry',
          html:
            'Rejection from God is always invitation to repentance. When His presence withdraws, when you feel the distance, it is not punishment without purpose. It is His way of saying: you cannot handle Me in your current state, but the land is still yours—go there, change, and then come back.',
        },
        {
          kind: 'reflection',
          id: 'c-departure',
          prompt:
            'Have you ever sensed God withdrawing His nearness because of something you chose? What was He protecting you from?',
        },
      ],
    },

    /* ─── Exodus 33:4–6 — Israel Mourns ──────────────────────────────── */
    {
      ref: 'Exodus 33:4–6',
      title: 'Mourning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 4,
              spans: [
                t('And when the people heard these evil tidings, they '),
                hg('mourned', 'c-mourning'),
                t(': and no man did put on him his '),
                hy('ornaments', 'c-ornaments'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mourning',
          html:
            'The word for &ldquo;evil tidings&rdquo; is literally &ldquo;bad word.&rdquo; To hear that God will not be present is experienced as catastrophe. And they respond properly—with mourning. This is grief that knows what it has lost.',
        },
        {
          kind: 'commentary',
          id: 'c-ornaments',
          html:
            'Removing ornaments is the outward sign of inward repentance. They will not beautify themselves. They strip off the decorations and sit in sackcloth. It is a language the Bible understands: when you realize you have lost the thing that matters most, you stop caring about beauty.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 5,
              spans: [
                t('For the LORD had said unto Moses, Say unto the children of Israel, '),
                hg('Ye are a stiffnecked people', 'c-repeat'),
                t(': I will come up into the midst of thee in a moment, and consume thee: therefore now put off thy ornaments from thee, that I may know what to do unto thee.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the children of Israel '),
                hg('stripped themselves', 'c-stripped'),
                t(' of their ornaments by the mount Horeb.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-repeat',
          html:
            'God repeats His diagnosis: stiffnecked. And the people hear it, understand it as referring to themselves, and respond by undressing. There is a moment in real repentance when the diagnosis clicks and you stop arguing.',
        },
        {
          kind: 'commentary',
          id: 'c-stripped',
          html:
            'They remove their ornaments at Mount Horeb itself—at the very base of the mountain where God lives. It is not a private act. It is a public, visible undressing of themselves of the pride and decoration that led them to make the golden calf in the first place.',
        },
        {
          kind: 'carry',
          html:
            'True repentance has an external sign. Not just an internal feeling, but an action: turning away from the ornament, the appearance, the thing that made you look impressive to yourself. What ornament would you need to strip off to show God—and yourself—that you are serious about change?',
        },
        {
          kind: 'reflection',
          id: 'c-mourning-refl',
          prompt:
            'When you sense God withdrawing, do you mourn like Israel did? Or do you explain it away? What would it look like to really grieve the distance?',
        },
      ],
    },

    /* ─── Exodus 33:7–11 — Face to Face ──────────────────────────────── */
    {
      ref: 'Exodus 33:7–11',
      title: 'The Tent of Meeting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 7,
              spans: [
                t('And Moses took the '),
                hg('tabernacle, and pitched it without the camp', 'c-tent-outside'),
                t(', '),
                hy('afar off', 'c-afar'),
                t(' from the camp, and called it the Tabernacle of the congregation. And it came to pass, that every one which sought the LORD went out unto the tabernacle of the congregation, which was without the camp.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tent-outside',
          html:
            'When God says He will not dwell in the midst of Israel, Moses does something radical: he moves the tent of meeting outside the camp. He is saying, without words, <em>we will still meet with Him, just not the way we used to.</em> Proximity is gone, but access is not.',
        },
        {
          kind: 'commentary',
          id: 'c-afar',
          html:
            '&ldquo;Afar off&rdquo;—distant but visible. The tent is far enough away that Israel cannot wander into God&apos;s presence carelessly, but close enough that anyone who truly wants to seek Him can do so.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 8,
              spans: [
                t('And it came to pass, when Moses went out unto the tabernacle, that all the people rose up every man at his tent door, and looked after Moses, until he was gone into the tabernacle.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-watching',
          html:
            'The people watch. Every single one of them rises to watch Moses go to meet with God. In their repentance, they are learning to long for what they lost. They cannot go in themselves, but they can see someone go in. They can learn from watching.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 9,
              spans: [
                t('And it came to pass, as Moses entered into the tabernacle, the '),
                hy('cloud descended', 'c-cloud'),
                t(', and stood at the door of the tabernacle, and the LORD talked with Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cloud',
          html:
            'The cloud—the sign of God&apos;s presence throughout Exodus—comes to the tent. God still meets with Moses. He has not abandoned them. His presence is now mediated by distance and symbol, but it is still real.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 10,
              spans: [
                t('And all the people saw the cloud stand at the door of the tabernacle: and all the people rose up and worshipped, every man in his tent door.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the LORD spake unto Moses '),
                hy('face to face', 'hebrew-panim'),
                t(', as a man speaketh unto his friend. And he turned again into the camp: but his servant Joshua, the son of Nun, a young man, '),
                hp('departed not out of the tabernacle', 'c-devotion'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-panim',
          title: 'Panim El Panim — &ldquo;face to face&rdquo;',
          script: 'פָּנִים אֶל פָּנִים',
          translit: '<strong>panim el panim</strong> · literally, &ldquo;face to faces&rdquo;, mouth to mouth',
          description:
            'This phrase describes the most intimate speech possible in Hebrew—the kind of openness two friends share. Moses and God are not communicating through intermediaries or symbols. They are looking at each other.',
        },
        {
          kind: 'commentary',
          id: 'c-devotion',
          html:
            'Joshua does not leave the tent. While others worship from their tents and return to camp, Joshua stays. He is learning something: to become close to God, you must become willing to linger when others leave.',
        },
        {
          kind: 'carry',
          html:
            'When God seems distant, the way to closeness is not to give up, but to move to the edge of the camp. To set apart a place where you will seek Him. To stay when others leave. Moses teaches Israel this in silence: access requires intention. Proximity requires stillness. And face-to-face intimacy with God still happens—it just requires that you go out to meet Him, not wait for Him to come to you.',
        },
        {
          kind: 'reflection',
          id: 'c-tent',
          prompt:
            'Where is your &ldquo;tent outside the camp&rdquo;? The place you go when you need to encounter God? Do you have one? Should you?',
        },
      ],
    },

    /* ─── Exodus 33:12–17 — The Intercession ─────────────────────────── */
    {
      ref: 'Exodus 33:12–17',
      title: 'Moses Pleads for Presence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 12,
              spans: [
                t('And Moses said unto the LORD, See, thou sayest unto me, Bring up this people: and thou hast not let me know '),
                hg('whom thou wilt send with me', 'c-with-me'),
                t('. Yet thou hast said, I know thee by name, and thou hast also found grace in my sight.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-with-me',
          html:
            'Moses is arguing a point: You told me to bring them up, but You haven&apos;t told me who will go with me. The unspoken question is, <em>Will You go?</em> He is pushing back gently, reminding God of His own promise.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 13,
              spans: [
                t('Now therefore, I pray thee, if I have found grace in thy sight, '),
                hp('shew me now thy way', 'c-shew-way'),
                t(', that I may know thee, that I may find grace in thy sight: and consider that this nation is thy people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shew-way',
          html:
            '&ldquo;Shew me now thy way, that I may know thee.&rdquo; To know God is to see His way—not just His instructions, but His character, His direction, His heart. Moses is asking to see into God.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 14,
              spans: [
                t('And he said, '),
                hp('My presence shall go with thee', 'c-presence-goes'),
                t(', and I will give thee rest.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-presence-goes',
          html:
            'The prayer is answered. God agrees. "My presence shall go with thee." Not an angel; not a sign. His presence itself will accompany them. This is not what Moses demanded, but it is what his heart was asking for. And it came because he asked.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 15,
              spans: [
                t('And Moses said unto him, If thy presence go not with me, '),
                hy('carry us not up hence', 'c-stay-here'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stay-here',
          html:
            'This is the hinge moment. Moses is saying: if Your presence does not go, we will not go. Land without God is not a destination worth reaching. This is the kind of prayer that changes reality—choosing God over the gift, presence over promise.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 16,
              spans: [
                t('For wherein shall it be known here that I and thy people have found grace in thy sight? is it not in that thou goest with us? so shall we be separated, I and thy people, from all the people that are upon the face of the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-separated',
          html:
            'Moses is making a theological argument: What makes Israel different from any other nation? Not military strength, not land, not size—but God&apos;s presence. Without it, they are just people. With it, they are holy. His presence is not luxury; it is identity.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 17,
              spans: [
                t('And the LORD said unto Moses, I will do this thing also that thou hast spoken: for thou hast found grace in my sight, and I know thee by name.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-know-name',
          html:
            'To be known by name is to be seen. God has heard Moses&apos; prayer, and not because Moses deserved it, but because He delights in His friend. When you pray with absolute honesty, God answers not because He must, but because He wants to.',
        },
        {
          kind: 'carry',
          html:
            'Moses teaches us here how to pray in the gap between rejection and grace. He does not accept the first answer. He does not settle for less than God. He pleads, quietly but firmly, for the one thing that makes everything else worthwhile. And God grants it—not because He was obligated, but because He was asked by someone who knew exactly what they were asking for.',
        },
        {
          kind: 'reflection',
          id: 'c-intercession',
          prompt:
            'What are you settling for when you should be pleading with God? What gift are you accepting that is not the real thing you need?',
        },
      ],
    },

    /* ─── Exodus 33:18–23 — The Cleft of the Rock ───────────────────── */
    {
      ref: 'Exodus 33:18–23',
      title: 'Glory in the Cleft',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 18,
              spans: [
                t('And he said, I beseech thee, '),
                hp('shew me thy glory', 'c-shew-glory-commentary'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shew-glory-commentary',
          html:
            'This is the most audacious prayer in Exodus. Not "help me," not "guide me," not even "forgive me." Moses asks to see God&apos;s glory—to see Him as He is, in full display. It is a request that seems to have no right to be answered. And yet Moses asks it.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 19,
              spans: [
                t('And he said, I will make all my goodness pass before thee, and I will proclaim the name of the LORD before thee; and will be gracious to whom I will be gracious, and will shew mercy on whom I will shew mercy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-goodness-proclaimed',
          html:
            'God agrees to show His glory, but He defines it: not power or majesty, but <em>goodness.</em> The name of the Lord will be proclaimed—meaning His character, His reputation, the sum of what He is. Moses will see what makes God God: not force, but grace.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 20,
              spans: [
                t('And he said, '),
                hy('Thou canst not see my face', 'c-cannot-see'),
                t(': for '),
                hy('there shall no man see me, and live', 'c-cannot-see'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cannot-see',
          html:
            'God sets the limit. To see the face of God—to look directly into His presence, His holiness, His full being—is to encounter something so other, so intense, that a human being cannot survive it. The gap between God and humanity is not small. It is absolute.',
        },
        {
          kind: 'greek',
          id: 'greek-face-to-face',
          title: 'Prosópon — &ldquo;face&rdquo;',
          script: 'πρόσωπον',
          translit: '<strong>prosópon</strong> · the face, the person, the very presence',
          description:
            'In the New Testament, Paul echoes this moment in 1 Corinthians 13:12: "Now we see through a glass, darkly; but then face to face." What could not be borne in Exodus will be made bearable in Christ.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 21,
              spans: [
                t('And the LORD said, Behold, there is a '),
                hy('place by me', 'c-cleft-place'),
                t(', and thou shalt stand upon a rock:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cleft-place',
          html:
            'What follows is image-language for something too tender and vast for straight speech. God is offering a compromise—not the face, but a place of safety. Not the full revelation, but protected revelation. Not seeing everything, but seeing something.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 22,
              spans: [
                t('And it shall come to pass, while my glory passeth by, that I will put thee in a '),
                hy('clift of the rock', 'hebrew-sela'),
                t(', and will cover thee with my hand while I pass by:'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-sela',
          title: 'Sela&apos; — &ldquo;cleft of the rock&rdquo;',
          script: 'סְלַע',
          translit: '<strong>sela&apos;</strong> · a craggy rock, a cliff, a refuge',
          description:
            'The same word used in the Psalms for refuge: "Be thou my strong rock, for a house of defence to save me" (Ps. 31:2). To be hidden in the sela&apos; is to be sheltered.',
        },
        {
          kind: 'commentary',
          id: 'c-hidden-hand',
          html:
            'God hides Moses in the rock and covers him with His own hand. This is the image: you cannot handle the light of God directly, so you will be put in darkness—in a cleft, in a crack, in a protected place—and from there you will see what passes. Not the face, but the hand that hides you.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 23,
              spans: [
                t('And I will take away mine hand, and thou shalt see my '),
                hg('back parts', 'c-back-parts'),
                t(': but my face shall not be seen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-back-parts',
          html:
            'After God passes, He removes His covering hand and Moses sees His back—the trailing wake of God&apos;s presence. Not the face, but the aftermath. Not the full glory, but the evidence that it was real. This is what human beings can handle: not the face, but the passing of the face, the shadow of the presence.',
        },
        {
          kind: 'christ',
          id: 'christ-glory-full',
          title: 'Christ Connection — The Face Becomes Bearable',
          html:
            'Moses asked for God&apos;s glory and could not bear the face. But Paul writes: "the light of the knowledge of the glory of God in the face of Jesus Christ" (2 Cor. 4:6). What Moses could not bear became bearable in Christ. God&apos;s glory is now mediated through a human face. The cleft of the rock becomes unnecessary because Jesus is the rock (1 Cor. 10:4), and in Him, "your life is hid with Christ in God" (Col. 3:3). We are hidden in Him the way Moses was hidden in the rock—and from that hidden place, we see the glory that would have killed us otherwise.',
        },
        {
          kind: 'carry',
          html:
            'You cannot see God directly and live. But you are not asked to. Like Moses in the cleft, you are given a hiding place, a covered place, a refuge. In Christ, you are hidden from the very glory that would destroy you—and from that safe place, you see it anyway. You see it passing. You see its aftermath. You feel it close. But you are never exposed to it raw. The hand that covers you is the hand that loves you.',
        },
        {
          kind: 'reflection',
          id: 'c-cleft-refl',
          prompt:
            'What part of God&apos;s glory frightens you most? What is the &ldquo;face of God&rdquo; you don&apos;t think you can bear? What would it mean to be hidden in Christ from that very thing?',
        },
        {
          kind: 'artwork',
          matchTitle: /moses|rock|glory/i,
          caption: 'Exodus 33:18–23 · Glory in the Cleft',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thou canst not see my face: for there shall no man see me, and live. But I will put thee in a clift of the rock, and cover thee with my hand while I pass by.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 33:20–22 · Study Guide',
  },


  resources: [
    {
      id: 'glory-presence',
      kind: 'study',
      source: 'Sefaria',
      label: 'Moses Sees God&apos;s Glory',
      url: 'https://www.sefaria.org/Exodus.33',
      description: 'Hebrew text on the vision and divine name.',
    },
    {
      id: 'theophany',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Theophany & Divine Encounter',
      url: 'https://www.bibleodyssey.org/dictionary/theophany/',
      description: 'Study of God&apos;s self-revelation.',
    },
    {
      id: 'sefaria-exodus-33',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 33 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Exodus.33',
      description: 'The Hebrew text of Exodus 33 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
