import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 4 — Three signs given to Moses to authenticate his call.
 * Moses objects that he is slow of speech; God sends Aaron with him.
 * The mysterious episode of the "bridegroom of blood" at the lodging place.
 * Moses and Aaron return to Egypt.
 */
export const EXODUS_4: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 4,

  estimatedMinutes: { 5: 9, 10: 17, 15: 21 },
  intros: [
    'Exodus 4 is God&apos;s answer to Moses&apos;s doubt. Three signs — a staff that becomes a serpent, a hand that becomes leprous and is healed, water that becomes blood — are given to authenticate Moses&apos;s mission to Pharaoh. Yet Moses still resists. "I am not eloquent," he says in Hebrew — literally, "heavy of mouth and heavy of tongue." God&apos;s response is swift and surprising: He sends Aaron, but not because Moses was right. Aaron becomes a sign of something else entirely: that God speaks through human weakness, not despite it.',
    'The chapter ends with two strange, urgent scenes. In verses 24–26, at a lodging place, "the Lord met him and sought to kill him" — a cryptic passage that has puzzled readers for millennia. Zipporah, Moses&apos;s wife, circumcises their son and speaks of the "bridegroom of blood," a phrase whose exact meaning remains debated. Then, abruptly, "the Lord let him go." It is one of the Bible&apos;s strangest moments, inviting us to ask what covenant obedience costs, and how the character of God&apos;s people is formed in the smallest, most intimate acts. By the chapter&apos;s end, Moses and Aaron are together in Egypt, ready to speak for the voiceless.',
  ],

  opener: {
    matchTitle: /moses|staff|serpent/i,
    matchArtist: /tissot|rembrandt/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Exodus 4',
    quote:
      'The Lord gave Moses three signs to prove his call: a staff becoming a serpent, a hand becoming leprous and then healed, and water becoming blood. Though Moses was slow of speech, God sent Aaron to speak with him, and together they returned to Egypt to demand Pharaoh let His people go.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 4 · Study Guide',
  },

  sections: [
    /* ─── Exodus 4:1–9 — Three Signs Given ─────────────────────────────── */
    {
      ref: 'Exodus 4:1–9',
      title: 'Three Signs Authenticated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('And Moses answered and said, But, behold, they will not believe me, nor hearken unto my voice: for they will say, '),
                hg('The Lord hath not appeared unto thee', 'c-not-appeared'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-not-appeared',
          html:
            'Moses moves from excuses about himself to a reasonable concern: the people will not recognize the Lord&apos;s word through him. Pharaoh will demand proof. The concern is not cowardice — it is a practical objection. How does the voiceless prove the voice of God? The Lord&apos;s answer is to give him visible signs, miracles that will become the very plagues he will later invoke against Egypt.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 2,
              spans: [
                t('And the Lord said unto him, What is that in thine hand? And he said, '),
                hy('A rod', 'hebrew-matteh'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And he said, '),
                hp('Cast it on the ground', 'christ-rod-serpent'),
                t('. And he cast it on the ground, and it became '),
                hy('a serpent', 'hebrew-nachash'),
                t('; and Moses fled from before it.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the Lord said unto Moses, Put forth thine hand, and take it by the tail. And he put forth his hand, and caught it; and it became a rod in his hand:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('That they may believe that the Lord God of their fathers, the God of Abraham, the God of Isaac, and the God of Jacob, hath appeared unto thee.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-matteh',
          title: 'Matteh — &ldquo;rod&rdquo;',
          script: 'מַטֶּה',
          translit: '<strong>matteh</strong> · a staff, scepter, or tribe',
          description:
            'The same word means both a shepherd&apos;s staff and a tribal division. This rod becomes the instrument of power throughout the plagues and the wilderness wandering. A shepherd&apos;s tool becomes a sign of authority and judgment.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nachash',
          title: 'Nachash — &ldquo;serpent&rdquo;',
          script: 'נָחָשׁ',
          translit: '<strong>nachash</strong> · a serpent or snake',
          description:
            'The same word appears in Genesis 3 for the serpent in Eden. That serpent seduced humanity away from obedience; this serpent, mastered by Moses, will become an instrument of obedience.',
        },
        {
          kind: 'commentary',
          id: 'c-rod-transform',
          html:
            'The rod becomes a serpent — the very instrument of deception and rebellion. Yet Moses, afraid at first, is commanded to take it by the tail, and it becomes a rod again. The pattern is repeated: the second sign involves Moses&apos;s hand, the third involves water. Each time, what is familiar (a rod, a hand, water) is shown to be under God&apos;s command. Nothing in creation is autonomous.',
        },
        {
          kind: 'christ',
          id: 'christ-rod-serpent',
          title: 'Christ Connection — The Serpent Lifted Up',
          html:
            'Jesus later says, "As Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up" (John 3:14). The serpent on the rod, a symbol of death and judgment, becomes the very means of healing in Numbers 21 when the people are bitten. Just as Moses&apos;s staff transformed the serpent from a thing of terror into a sign of authority, Christ&apos;s cross transforms the symbol of death into the instrument of salvation. What brought judgment brings redemption.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 6,
              spans: [
                t('Furthermore the Lord said unto him, Put now thine hand into thy bosom. And he put his hand into his bosom: and when he took it out, behold, '),
                hg('his hand was leprous as snow', 'c-leprous'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And he said, Put thine hand into thy bosom again. And he put his hand into his bosom again; and plucked it out of his bosom: and, behold, it was turned again as his other flesh.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-leprous',
          html:
            'Leprosy in the Old Testament is not primarily a medical diagnosis — it is a sign of defilement, of being cut off from God&apos;s people. Aaron will later be forbidden to enter the sanctuary if his hand ever becomes leprous (Lev. 21:17). The sign shows Moses that his very flesh can be healed, transformed, made whole by the Lord. Whatever Moses thinks is permanently broken can be restored.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 8,
              spans: [
                t('And it shall come to pass, if they will not believe thee, neither hearken to the voice of the first sign, that they will believe the voice of the latter sign.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And it shall come to pass, if they will not believe also these two signs, neither hearken unto thy voice, that thou shalt take of the water of the river, and '),
                hg('pour it upon the dry land', 'c-water-blood'),
                t(': and the water which thou takest out of the river shall become blood upon the dry land.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-water-blood',
          html:
            'Water is Egypt&apos;s life — the Nile sustains the whole land. When it becomes blood, life becomes death. This third sign will become the first plague. God is giving Moses not just power, but foreshadowing. The signs Moses demonstrates to Pharaoh will become the very judgments God sends upon the land. Moses&apos;s staff and his words are not mere parlor tricks; they are harbingers of the Lord&apos;s judgment.',
        },
        {
          kind: 'carry',
          html:
            'You may feel that your greatest weaknesses — your silence, your shame, your inability to lead — make you unfit to serve. But God&apos;s choice to use you is not despite those things. The very things you think disqualify you become His instruments. Your weakness becomes the stage on which His power is seen. Trust not in your eloquence or your strength, but in the God who can turn a rod into a serpent and make a leprous hand whole.',
        },
        {
          kind: 'reflection',
          id: 'three-signs',
          prompt: 'Which of the three signs speaks most to you today — the rod becoming a serpent, the healed hand, or the water becoming blood? What does it ask you to trust God with?',
        },
      ],
    },

    /* ─── Exodus 4:10–17 — "I Am Not Eloquent" ──────────────────────────── */
    {
      ref: 'Exodus 4:10–17',
      title: 'The Burden of Speech',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 10,
              spans: [
                t('And Moses said unto the Lord, O my Lord, I am not '),
                hy('a man of words', 'hebrew-kvad-peh'),
                t(', neither heretofore, nor since thou hast spoken unto thy servant: but I am '),
                hy('slow of speech, and of a slow tongue', 'hebrew-kvad-peh'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kvad-peh',
          title: 'Kevad Peh, Kevad Lashon — &ldquo;heavy of mouth and heavy of tongue&rdquo;',
          script: 'כְּבַד־פֶּה וּכְבַד לָשׁוֹן',
          translit: '<strong>kevad</strong> · heavy, weighty; <strong>peh</strong> · mouth; <strong>lashon</strong> · tongue',
          description:
            'Not a stammer or a lisp, but a sense of being "heavy" — slow, ponderous, weighted down. Moses confesses a kind of gravitational drag on his words. Some scholars suggest Moses may have been an Egyptian speaker uncomfortable with Hebrew, or that he simply lacked the quick wit of a natural orator. The point is not the diagnosis but the obstacle: Moses feels his tongue does not work for him.',
        },
        {
          kind: 'commentary',
          id: 'c-not-eloquent',
          html:
            'This is Moses&apos;s fourth objection. First, he said he was nobody. Then he asked who God is. Then he said the people won&apos;t believe him. Now he says he cannot speak. God&apos;s patience with Moses is unending, yet His answer to this objection is almost curt: Who made the mouth? Who makes people dumb or blind? I am the Lord. Moses&apos;s complaint is not met with reassurance. It is met with a question that reframes the whole problem.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 11,
              spans: [
                t('And the Lord said unto him, Who hath made man&apos;s mouth? or who maketh the dumb, or deaf, or the seeing, or the blind? have not I the Lord?'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Now therefore go, and I will be with thy mouth, and teach thee what thou shalt say.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-teach-words',
          html:
            'God does not promise eloquence; He promises His presence and His words. "I will be with thy mouth" — a strange phrase. It suggests that God&apos;s presence inhabits the place where Moses fails most. The words will not be Moses&apos;s — they will be God&apos;s words spoken through Moses&apos;s heavy tongue.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 13,
              spans: [
                t('And he said, O my Lord, '),
                hp('send, I pray thee, by the hand of him whom thou wilt send', 'c-send-someone'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-send-someone',
          html:
            'Moses has now exhausted his objections. He does not quite say "send someone else," but he is asking. The Hebrew phrase translated "by the hand of him whom thou wilt send" is gracious but unmistakable — Moses is asking for a replacement. This is where God&apos;s patience breaks. The Lord is angry.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 14,
              spans: [
                t('And the anger of the Lord was kindled against Moses, and he said, Is not Aaron the Levite thy brother? I know that he can speak well. And also, behold, '),
                hg('he cometh forth to meet thee', 'c-aaron-coming'),
                t(': and when he seeth thee, he will be glad in his heart.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-aaron-coming',
          html:
            'Aaron is already on his way. God has been preparing Aaron while Moses was making excuses. The Lord says Aaron "will be glad" to see Moses — a strange detail, but it suggests that Aaron has been called to this work with joy, while Moses has been resisting. Aaron becomes the answer to Moses&apos;s weakness, but also the sign of his disobedience. He gets Aaron not because he was right to ask, but because God will accomplish His will with or without Moses&apos;s consent.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 15,
              spans: [
                t('And thou shalt speak unto him, and '),
                hp('put words in his mouth', 'christ-word-mouth'),
                t(': and I will be with thy mouth, and with his mouth, and will teach you what ye shall do.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And he shall be thy spokesman unto the people: and he shall be, even he shall be to thee instead of a mouth, and thou shalt be to him instead of God.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-word-mouth',
          title: 'Christ Connection — The Word Made Flesh',
          html:
            'Paul writes, "I am weak, and you are strong" (1 Cor. 4:10) and "My grace is sufficient for thee: for my strength is made perfect in weakness" (2 Cor. 12:9). Jesus sends the Spirit to testify through His followers who are stammering and afraid (Matt. 10:17–20). The pattern is always this: God speaks through human weakness because His word will never be confused with human eloquence. When people hear what cannot come from you, they hear God. Moses&apos;s heavy tongue becomes the canvas on which God&apos;s clarity is painted.',
        },

        {
          kind: 'carry',
          html:
            'Your inadequacy is not a barrier to God&apos;s use of you — it is His starting point. The area where you feel most disqualified may be the exact place where His power needs to be most visible. When others see something good coming through your weakness, they see God, not you. This is the only path to credibility that matters.',
        },
        {
          kind: 'reflection',
          id: 'not-eloquent',
          prompt: 'Where do you feel "slow of speech" — unable to advocate for yourself or others? What would change if you trusted God to put His words in your mouth?',
        },
      ],
    },

    /* ─── Exodus 4:18–23 — Moses Takes Leave ─────────────────────────────── */
    {
      ref: 'Exodus 4:18–23',
      title: 'Return to Egypt',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 18,
              spans: [
                t('And Moses went and returned to Jethro his father in law, and said unto him, Let me go, I pray thee, and return unto my brethren which are in Egypt, and see whether they be yet alive. And Jethro said to Moses, Go in peace.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-return-jethro',
          html:
            'Moses asks permission from Jethro, his Midianite father-in-law, to return to Egypt. Notice that Moses is careful, respectful, embedded in the life of his adopted family. He does not announce his mission with grand rhetoric; he simply asks to visit his kinspeople in Egypt. Jethro blesses him to go. The God who called Moses has also prepared the human relationships that will make his departure possible.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 19,
              spans: [
                t('And the Lord said unto Moses in Midian, Go, return into Egypt: for all the men that sought thy life are dead.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Moses took his wife and his sons, and set them upon an ass, and he returned to the land of Egypt: and Moses took '),
                hy('the rod of God', 'c-rod-god'),
                t(' in his hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rod-god',
          html:
            'The rod that became a serpent is now called "the rod of God." Moses carries it not as a shepherd&apos;s staff but as an instrument of the Lord&apos;s power. Everything is prepared: Aaron is coming to meet him, Jethro has blessed him, the men who wanted to kill him are gone, and he carries the visible sign of God&apos;s presence and authority.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 21,
              spans: [
                t('And the Lord said unto Moses, When thou goest to return into Egypt, see that thou do all those wonders before Pharaoh, which I have put in thine hand: but I will '),
                hp('harden his heart', 'christ-hardened-heart'),
                t(', that he shall not let the people go.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And thou shalt say unto Pharaoh, Thus saith the Lord, '),
                hg('Israel is my son, even my firstborn', 'hebrew-bekhori'),
                t(':'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And I say unto thee, Let my son go, that he may serve me: and if thou refuse to let him go, behold, I will slay thy son, even thy firstborn.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-bekhori',
          title: 'Bekhori — &ldquo;my firstborn&rdquo;',
          script: 'בְּכֹרִי',
          translit: '<strong>bekhori</strong> · my firstborn, my heir',
          description:
            'Israel is named as God&apos;s firstborn — the child with the highest claim, the privileged heir. This designation will echo throughout the Old Testament and into the New, where Jesus is called "the firstborn of all creation" (Col. 1:15) and the "firstborn among many brethren" (Rom. 8:29).',
        },
        {
          kind: 'commentary',
          id: 'c-israel-firstborn',
          html:
            'God does not merely ask Pharaoh to release Hebrew slaves. He names Israel as His own son — the very relationship that makes them precious and inalienable. If Pharaoh refuses, judgment will fall on his own firstborn. The logic is terrible and clear: you took My son into servitude; I will take your son in death. This is the frame for all the plagues to come.',
        },
        {
          kind: 'christ',
          id: 'christ-hardened-heart',
          title: 'Christ Connection — The Hardened Heart and Grace',
          html:
            'God tells Moses He will harden Pharaoh&apos;s heart. This is a mystery that appears throughout Scripture: Does God cause hardness, or does He allow it when someone is already bent on rebellion? Paul grapples with this in Romans 9, concluding that God&apos;s will is inscrutable but just. What is clear is that Pharaoh&apos;s resistance serves a larger purpose — the plagues will demonstrate God&apos;s power to all nations. Yet Israel&apos;s identity as God&apos;s firstborn son points to a greater redemption to come. Jesus, the true firstborn, will be given as a ransom for many (Mark 10:45).',
        },
        {
          kind: 'carry',
          html:
            'You are not yet living as God&apos;s child — a claim so true about you that God would demand your freedom from any power that holds you captive. Sin, shame, or circumstance may have convinced you that you are not precious, not a heir, not someone worth the Lord&apos;s fierce protection. But you are named. You belong to the God who calls Himself Father. Live into that identity.',
        },
        {
          kind: 'reflection',
          id: 'israel-firstborn',
          prompt: 'What is it costing you not to live as God&apos;s child — not to walk in the freedom and dignity He claims for you? What would you have to let go of to accept that name?',
        },
      ],
    },

    /* ─── Exodus 4:24–26 — The Bridegroom of Blood ──────────────────────── */
    {
      ref: 'Exodus 4:24–26',
      title: 'The Bridegroom of Blood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 24,
              spans: [
                t('And it came to pass by the way in the inn, that '),
                hg('the Lord met him, and sought to kill him', 'c-sought-kill'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sought-kill',
          html:
            'One of the strangest verses in the Bible. Moses is on his way to Egypt with Aaron to deliver God&apos;s word, and the Lord moves against him with lethal intent. The text gives no explicit reason. Verses 24–26 are notoriously difficult to interpret. The most widely held explanation: Moses&apos;s son has not been circumcised. Circumcision is the sign of the covenant — the mark that binds a person to God&apos;s people. Moses, who is about to demand that Pharaoh release God&apos;s covenant people, is in breach of the covenant himself. God cannot send an uncircumcised man to speak for a circumcised people.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 25,
              spans: [
                t('Then Zipporah took '),
                hy('a sharp stone', 'c-stone'),
                t(', and cut off the foreskin of her son, and cast it at his feet, and said, Surely thou art '),
                hy('a bloody husband', 'hebrew-chathan-damim'),
                t(' unto me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stone',
          html:
            'Zipporah does not wait for Moses. She takes a sharp stone and performs the circumcision herself. The image is striking — a woman acting where the man delays, using what she has at hand to fulfill the covenant. She is the one who understands what is at stake.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chathan-damim',
          title: 'Chathan Damim — &ldquo;a bridegroom of blood&rdquo;',
          script: 'חֲתַן דָּמִים',
          translit: '<strong>chathan</strong> · bridegroom; <strong>damim</strong> · blood',
          description:
            'A shocking phrase. Zipporah calls Moses a "bridegroom of blood" — possibly meaning that the blood of circumcision is his wedding gift, or that he is now bound to her and the covenant through blood. The exact meaning is debated. What is clear: Zipporah acts where Moses apparently does not, performing the covenant sign herself.',
        },
        {
          kind: 'commentary',
          id: 'c-zipporah-act',
          html:
            'Zipporah, a Midianite woman who has married into Israel&apos;s story, understands the covenant before Moses fully does. She takes a sharp stone and performs the circumcision herself — an act that is both tender and terrible. She speaks in riddles: "a bloody husband" may be her way of saying that this blood-sign seals her bond to him and to God&apos;s people. Or it may be recoil, a word of horror at what the covenant demands. Commentators have read it both ways for centuries.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 26,
              spans: [
                t('So he let him go: then she said, A bloody husband thou art, because of the circumcision.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-let-him-go',
          html:
            'The danger passes. "The Lord let him go" — the lethal encounter is ended by the sign of covenant. The phrase "because of the circumcision" might mean "on account of" (the covenant is fulfilled) or "until the circumcision" (once the sign was enacted). The text is deliberately opaque. What is unmistakable: Obedience to the smallest, most intimate commandment — the mark of the covenant cut into the very flesh of the child — is what stays God&apos;s hand. The covenant is not abstract or negotiable. It demands everything, down to blood.',
        },
        {
          kind: 'christ',
          id: 'christ-blood-covenant',
          title: 'Christ Connection — Blood, Circumcision, and the New Covenant',
          html:
            'Paul writes, "Circumcision is nothing, and uncircumcision is nothing, but the keeping of the commandments of God" (1 Cor. 7:19). Yet he also says that Christians have been "circumcised with the circumcision made without hands, in putting off the body of the sins of the flesh by the circumcision of Christ" (Col. 2:11). The blood-sign Moses needed to bear in the flesh, we bear once through Christ&apos;s blood. The covenant that demanded blood from Moses&apos;s son was satisfied on the cross. We are a "bridegroom" people — betrothed to God at the cost of blood, marked by it, bound by it.',
        },
        {
          kind: 'carry',
          html:
            'The covenant is not a convenience. It is not ours to negotiate or defer. It asks for our bodies, our most intimate belonging to God. You are marked — not by a cut in the flesh, but by the blood of Christ sprinkled on you. You belong to God utterly. That ownership is both your safety and your obligation. Where are you hedging on full obedience, hoping God won&apos;t notice?',
        },
        {
          kind: 'reflection',
          id: 'bridegroom-blood',
          prompt: 'Zipporah performed the covenant sign without Moses. Where in your own life is God waiting for you to step into obedience that no one else can fulfill? What is the cost you are avoiding?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Exodus 4:27–31 — Brothers Together ──────────────────────────────── */
    {
      ref: 'Exodus 4:27–31',
      title: 'Moses and Aaron Speak',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 27,
              spans: [
                t('And the Lord said to Aaron, Go into the wilderness to meet Moses. And he went, and met him in the mount of God, and kissed him.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Moses told Aaron all the words of the Lord who had sent him, and all the signs which he had commanded him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-brothers-meet',
          html:
            'Aaron comes to meet Moses, not because Moses asked, but because God sent him. There is a tenderness here — "kissed him." The brothers embrace. Moses, who felt so alone in his calling, now has a partner. He tells Aaron everything: the words God spoke, the signs God gave. What Moses could not do alone, Moses and Aaron will do together. The mouth that is heavy with Moses will be lightened by Aaron&apos;s fluency.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 29,
              spans: [
                t('And Moses and Aaron went and gathered together all the elders of the children of Israel:'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And Aaron spake all the words which the Lord had spoken unto Moses, and did the signs in the sight of the people.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And the people '),
                hp('believed', 'c-believed'),
                t(': and when they heard that the Lord had visited the children of Israel, and that he had looked upon their affliction, they bowed their heads and worshipped.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-believed',
          html:
            'The people believe. Not because of Moses&apos;s eloquence, but because of the signs. And more than that: they believe because they hear that God has "looked upon their affliction." God has seen. God remembers. God has not abandoned them in Egypt. The word translated "visited" carries the sense of God drawing near, noticing, remembering. The people respond with worship — the posture of those who know they are seen by someone greater than themselves.',
        },
        {
          kind: 'carry',
          html:
            'You do not need to be eloquent or strong to speak for those who cannot speak for themselves. You need to know that you are sent. You need to know that you are seen and commissioned by God. When others hear that God has looked upon you, when they see the signs of His work in your weakness, they will believe. Your tongue does not matter. His presence does.',
        },
        {
          kind: 'reflection',
          id: 'believed',
          prompt: 'When have you felt overlooked, forgotten, invisible? How does it change you to know that God "has looked upon your affliction" as He looked upon Israel&apos;s?',
        },
        {
          kind: 'artwork',
          matchTitle: /moses|aaron|egypt|deliverance/i,
          matchArtist: /tissot|rembrandt/i,
          caption: 'Exodus 4:27–31 · Moses and Aaron Before the Elders',
        },
      ],
    },
  ],
};
