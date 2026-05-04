import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 5 — The Ten Words given again, a generation later.
 *
 * Moses stands before Israel on the plains of Moab and says: "The Lord made
 * a covenant with us in Horeb — but not with our fathers. With us. Even us,
 * who are all of us here alive this day."
 *
 * The covenant does not pass down like an inheritance. Every generation must
 * own it for itself. The Ten Commandments are restated, sometimes in the same
 * words, sometimes reframed — especially the Sabbath, which in Exodus rests on
 * creation but in Deuteronomy rests on deliverance from slavery.
 *
 * At the chapter's end, the people cry out in fear, and God speaks words that
 * anticipate the new covenant: "Oh that there were such an heart in them, that
 * they would fear me, and keep all my commandments always, that it might be
 * well with them, and with their children for ever!" Only grace can satisfy
 * the law. Only Christ can give the heart the law demands.
 */
export const DEUTERONOMY_5: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 5,

  estimatedMinutes: { beginner: 10, intermediate: 17, deep: 22 },
  intros: [
    'Deuteronomy 5 repeats the Ten Commandments, but not as a dry rehearsal. Moses is speaking to a new generation — the children of those who heard God&apos;s voice at Mount Sinai forty years ago have now grown to adulthood on the edge of the Promised Land. The covenant, Moses tells them, was made "with us, even us, who are all of us here alive this day." The law does not come down as a handed-off tradition; it comes as a fresh word to a fresh people who must choose it for themselves.',
    'What makes Deuteronomy distinctive is that some commandments are reframed. The Sabbath, for instance, is no longer grounded in creation rest (Exodus) but in deliverance from slavery — a subtle shift that asks: why do you rest? Is it because work is not the ultimate reality? Or is it because you were once enslaved and the God who freed you invites you to remember His liberation by resting? Both are true, and together they tell the whole story: Christ is Lord of creation <em>and</em> Christ is our Redeemer.',
    'The chapter climaxes not with law but with longing. After the people ask Moses to mediate (they are terrified of God&apos;s presence), the Lord speaks words that no law can satisfy: "Oh that there were such an heart in them, that they would fear me, and keep all my commandments always." The law shows us the heart God wants. Only grace — only a heart remade — can produce it.',
  ],

  opener: {
    matchTitle: /sinai|covenant|moab|moses.*tablets|wilderness|deliverance/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Deuteronomy 5',
    quote:
      'Every generation must own the covenant fresh. The Lord desires not outward obedience alone, but a heart that fears Him and keeps His commandments always — that it might be well with us and our children forever. Only grace can give the law the heart it demands.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 5 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-deuteronomy-5',
      kind: 'study',
      source: 'Sefaria [res:sefaria-deuteronomy-5]',
      label: 'Deuteronomy 5 — Decalogue  Restated',
      url: 'https://www.sefaria.org/Deuteronomy.5',
      description: 'Hebrew and medieval commentaries on the Ten Commandments as restated for a new generation in covenant.',
    },
    {
      id: 'exodus-20-deut-5-intertextual-comparison',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Exodus 20 ↔ Deuteronomy 5',
      url: 'https://intertextual.bible/search?q=Exodus+20+Deuteronomy+5',
      description: 'Side-by-side comparison of the original Ten Commandments (Exodus) and their restatement (Deuteronomy).',
    },
  ],

  sections: [
    /* ─── Deuteronomy 5:1–5 — The Covenant with This Generation ─────────────── */
    {
      ref: 'Deuteronomy 5:1–5',
      title: 'The Covenant with Us',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('And Moses called all Israel, and said unto them, Hear, O Israel, the statutes and judgments which I speak in your ears this day, that ye may learn them, and keep, and do them.'),
              ],
            },
            {
              number: 2,
              spans: [
                hp('The LORD our God made a covenant with us in Horeb.', 'christ-covenant'),
              ],
            },
            {
              number: 3,
              spans: [
                t('The LORD made not this covenant with our fathers, but with us, even us, who are '),
                hg('all of us here alive this day', 'c-present-generation'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('The LORD talked with you face to face in the mount out of the midst of the fire,'),
              ],
            },
            {
              number: 5,
              spans: [
                t('(I stood between the LORD and you at that time, to shew you the word of the LORD: for ye were afraid by reason of the fire, and went not up into the mount;)'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-present-generation',
          html:
            'This is not ancestral religion. The covenant was not made with Abraham, Isaac, or Jacob — not with your fathers. It was made <em>with you</em>, the people standing here now. Forty years have passed. The generation that heard God&apos;s voice at Sinai has died in the wilderness. Their children now stand at the border of the land. And God&apos;s claim is fresh: this covenant is yours. You must own it. You must choose it. Every generation of believers faces this same threshold — to receive the faith as a living thing, not as inherited custom[res:exodus-20-deut-5-intertextual-comparison][res:decalogue-biblical-law-bible-odyssey].',
        },
        {
          kind: 'christ',
          id: 'christ-covenant',
          title: 'Christ Connection — A New Covenant Every Generation',
          html:
            'Jeremiah prophesies a day when God will make a new covenant with Israel: not like the old covenant at Sinai, "but this shall be the covenant that I will make… I will put my law in their inward parts, and write it in their hearts" (Jer. 31:31–33). Jesus, at the Last Supper, takes the cup and says, "This cup is the new covenant in my blood" (1 Cor. 11:25). Each believer must come to the new covenant personally, not as mere inheritance. You must stand at your own Sinai. You must hear the call for yourself.',
        },
        {
          kind: 'carry',
          html:
            'You may have grown up in a believing home, in a believing church, hearing Scripture read since childhood. That is a gift beyond measure. But at some point — perhaps in this very study — you must own the covenant for yourself. Not your parents&apos; faith. Not your pastor&apos;s faith. Yours. God does not offer you secondhand obedience. He calls you by name. He stands before you now. The question is not "Will you keep my father&apos;s commands?" but "Will <em>you</em> keep mine?"',
        },
        {
          kind: 'reflection',
          id: 'deut5-own-covenant',
          prompt:
            'Where did your faith come from — what you inherited, what you chose, what you&apos;ve questioned and then chosen again? What would it mean to own the covenant fresh, today?',
        },
      ],
    },

    /* ─── Deuteronomy 5:6–11 — The First Four Words (Vertical) ─────────────────── */
    {
      ref: 'Deuteronomy 5:6–11',
      title: 'Our God Alone',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 6,
              spans: [
                t('I am the LORD thy God, which brought thee out of the land of Egypt, from the house of '),
                hy('bondage', 'hebrew-avdut-deut'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Thou shalt have '),
                hg('none other gods before me', 'c-no-other'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Thou shalt not make thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the waters beneath the earth:'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Thou shalt not bow down thyself unto them, nor serve them: for I the LORD thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me,'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And shewing mercy unto thousands of them that love me and keep my commandments.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Thou shalt not take the name of the LORD thy God in vain: for the LORD will not hold him guiltless that taketh his name in vain.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-other',
          html:
            'The first four commandments are vertical — they order your loyalty upward, to God alone. Notice that in Deuteronomy, as in Exodus, the command to have no other gods does not come as a threat but as a reminder: <em>I am the Lord thy God who brought thee out of bondage.</em> You belong to Me because I have already claimed you. The exclusivity flows from relationship, not from decree alone. To say "none other gods before me" is to say: you are Mine. Therefore, do not give your worship to anyone else.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-avdut-deut',
          title: 'Avdut — &ldquo;bondage, slavery&rdquo;',
          script: 'עַבְדוּת',
          translit: '<strong>avdut</strong> · the state of being enslaved, bound in service to another',
          description:
            'Deuteronomy repeats Exodus&apos;s opening reminder, but the land is different. These people did not live as slaves in Egypt; they were born in the wilderness. Yet they are called to remember a deliverance they did not personally experience. This is the power of covenant narrative — the story becomes mine because I belong to the people who were freed.',
        },
        {
          kind: 'commentary',
          id: 'c-jealous-god',
          html:
            'God is jealous not from insecurity but from love. He says: My relationship with you matters. When you give your worship to other gods — whether those are carved images, money, status, or ambition — you betray me. And yet He also shows mercy: to those who love Him and keep His commandments, mercy extends to thousands of generations. The God who is jealous is also the God who will not let you go.',
        },
        {
          kind: 'carry',
          html:
            'Idolatry has not disappeared; it has just changed forms. An idol is anything you worship instead of God — anything you believe will save you, complete you, validate you, make you enough. What god are you bowing down to in secret? Not with your knees, but with your time, your money, your longing? The first commandment asks: Is your loyalty singular? Is there anything — anything — you love more than you love God?',
        },
        {
          kind: 'reflection',
          id: 'deut5-idols',
          prompt:
            'What modern idol are you most tempted to worship — success, image, a relationship, security, control? What would it cost to pull that down and bow only to God?',
        },
      ],
    },

    /* ─── Deuteronomy 5:12–15 — The Sabbath Reframed ───────────────────────────── */
    {
      ref: 'Deuteronomy 5:12–15',
      title: 'Remember the Sabbath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 12,
              spans: [
                t('Keep the '),
                hg('sabbath day', 'c-keep-sabbath'),
                t(' to sanctify it, as the LORD thy God hath commanded thee.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Six days thou shalt labour, and do all thy work:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('But the seventh day is the sabbath of the LORD thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, nor thy manservant, nor thy maidservant, nor thine ox, nor thine ass, nor any of thy cattle, nor thy stranger that is within thy gates; that thy manservant and thy maidservant may rest as well as thou.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And '),
                hy('remember', 'hebrew-zachor'),
                t(' that thou wast a servant in the land of Egypt, and that the LORD thy God brought thee out thence through a mighty hand and by a stretched out arm: therefore the LORD thy God commanded thee to keep the sabbath day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-keep-sabbath',
          html:
            'Here is the first major difference between Deuteronomy and Exodus. In Exodus 20:8, the command is to "Remember the sabbath day." Here, in Deuteronomy, the command is to <em>keep</em> it. Exodus grounds Sabbath in creation rest (Genesis 1–2); Deuteronomy grounds it in <em>redemption from slavery</em>. Both are true. The same God who rested on the seventh day of creation is the God who brought Israel out of Egypt. The Sabbath says two things at once: work is not ultimate (creation), <em>and</em> your labor does not define you (redemption).',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-zachor',
          title: 'Zachor — &ldquo;to remember&rdquo;',
          script: 'זָכַר',
          translit: '<strong>zachor</strong> · to remember, to recall, to call to mind — with the body and heart, not just the mind',
          description:
            'In Hebrew, to remember is not merely mental recall. It is an act of the whole person. When you keep the Sabbath, you are remembering with your rest, with your refusal to work, with your body&apos;s compliance. You are embodying the memory of deliverance. Every Sabbath is a weekly reenactment of the exodus.',
        },
        {
          kind: 'commentary',
          id: 'c-exodus-sabbath',
          html:
            'The reason given is simple and profound: "That thy manservant and thy maidservant may rest as well as thou." In Egypt, you were the manservant, the maidservant. You worked without ceasing. The Sabbath is not a religious observance; it is a weekly proclamation of freedom. When you rest, your servants rest. When you stop, you announce: we are no longer enslaved. This work does not own us.',
        },
        {
          kind: 'christ',
          id: 'christ-sabbath',
          title: 'Christ Connection — Lord of Both Creation and Redemption',
          html:
            'Christ fulfills both dimensions of the Sabbath. He is the Word by whom all things were made (John 1:1–3) — so He is Lord of creation rest. And He is the one who delivers us from bondage to sin and death ("Come unto me, all ye that are heavy laden… and I will give you rest" (Matt. 11:28)). In Jesus, creation and redemption meet. The Sabbath rest is a shadow of the <em>eternal rest</em> we find in Him — a ceasing from our works that we might enter His (Hebrews 4:9–10).',
        },
        {
          kind: 'carry',
          html:
            'You were not made to work without ceasing. Your labor is not what makes you valuable. One day a week, stop. Rest. Let everything wait. This is radical. In a world that measures your worth by your productivity, the Sabbath says: you are more than what you produce. You are beloved because you exist. Rest is your weekly testimony to freedom — freedom from slavery to the world&apos;s demands, freedom to remember that you are redeemed.',
        },
        {
          kind: 'reflection',
          id: 'deut5-rest',
          prompt:
            'What slavery do you work to escape — financial worry, proving your worth, fear of being left behind? What would it mean to keep a Sabbath not as another obligation, but as a protest against those fears?',
        },
      ],
    },

    /* ─── Deuteronomy 5:16–21 — The Second Table (Horizontal) ─────────────────── */
    {
      ref: 'Deuteronomy 5:16–21',
      title: 'Your Neighbor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 16,
              spans: [
                t('Honour thy '),
                hg('father and thy mother', 'c-honor-parents'),
                t(', as the LORD thy God hath commanded thee; that thy days may be prolonged, and that it may go well with thee, in the land which the LORD thy God giveth thee.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Thou shalt not '),
                hg('kill', 'c-not-kill'),
                t('.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Neither shalt thou commit '),
                hg('adultery', 'c-adultery'),
                t('.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Neither shalt thou '),
                hg('steal', 'c-not-steal'),
                t('.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Neither shalt thou bear '),
                hg('false witness', 'c-false-witness'),
                t(' against thy neighbour.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Neither shalt thou '),
                hy('desire', 'hebrew-chamad-deut'),
                t(' thy neighbour&apos;s wife; neither shalt thou '),
                hy('covet', 'hebrew-chamad-deut'),
                t(' thy neighbour&apos;s house, his field, or his manservant, or his maidservant, his ox, or his ass, or any thing that is thy neighbour&apos;s.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-honor-parents',
          html:
            'The fifth commandment is the hinge between the vertical and the horizontal — between love of God and love of neighbor. Before you can honor anyone outside your family, you must learn to honor authority within it. And notice what Deuteronomy adds: not only "honor your parents," but with a reason — "that thy days may be prolonged, and that it may go well with thee." This is the shape of the created world. When you honor your elders, your life lengthens and flourishes. It is not a threat; it is a promise about how reality works.',
        },
        {
          kind: 'commentary',
          id: 'c-not-kill',
          html:
            'You shall not murder. The law protects human life because human life bears God&apos;s image. To kill unlawfully is to make yourself arbiter of who lives and dies — a role that belongs to God alone. Every commandment that follows flows from this: you do not own anyone else&apos;s life.',
        },
        {
          kind: 'commentary',
          id: 'c-adultery',
          html:
            'Adultery is a breach of covenant. Marriage is the covenant you make with another human being. When you commit adultery, you lie with your body about what you have promised in your heart. You unmake the trust at the foundation of the household.',
        },
        {
          kind: 'commentary',
          id: 'c-not-steal',
          html:
            'Theft says: my need is bigger than your ownership. My desire is more legitimate than your labor. You do not simply take property; you take something of your neighbor&apos;s soul — the fruit of their work, their provision for their family. Stealing breaks the fabric of community.',
        },
        {
          kind: 'commentary',
          id: 'c-false-witness',
          html:
            'Words are the highest human gift. To use words to lie, to slander, to destroy your neighbor&apos;s reputation — that is to use divinity against another human. Truth-telling is the foundation of all law, commerce, and covenant. When no one believes anyone&apos;s words, there is no community left.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chamad-deut',
          title: 'Chamad — &ldquo;to desire, to covet&rdquo;',
          script: 'חָמַד',
          translit: '<strong>chamad</strong> · to crave, to desire for yourself; to wish to possess',
          description:
            'The tenth commandment reaches inside. You can hide the other nine; you can appear righteous while secretly breaking every command. But coveting is interior — it concerns not your outward actions but your inward desire. This is the commandment that exposes the self-righteous. "I haven&apos;t murdered," you might say, "but what about the anger in my heart? I haven&apos;t stolen, but what about my envy?" The law reveals that the problem is not just what we do, but who we are.',
        },
        {
          kind: 'carry',
          html:
            'The second table of the law is a mirror. It shows you how you treat the people God has placed in your life — your parents, those dependent on you, your spouse, your neighbor. When you honor those God has given you authority over, when you guard their dignity and their property and their reputation, you are saying with your life: "I believe in the image of God that they bear." Your treatment of others is your theology made visible.',
        },
        {
          kind: 'reflection',
          id: 'deut5-neighbors',
          prompt:
            'Where do you most often fail in the second table — in speech, in respect for others&apos; property or marriage, in your hidden desires? What would it cost to live as if everyone you meet bears God&apos;s image?',
        },
      ],
    },

    /* ─── Deuteronomy 5:22–27 — The People&apos;s Fear and Moses as Mediator ─────── */
    {
      ref: 'Deuteronomy 5:22–27',
      title: 'Fear of the Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 22,
              spans: [
                t('These words the LORD spake unto all your assembly in the mount out of the midst of the '),
                hg('fire', 'c-fire-mountain'),
                t(', of the cloud, and of the thick darkness, with a great voice: and he added no more. And he wrote them in two tables of stone, and delivered them unto me.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And it came to pass, when ye heard the voice out of the midst of the darkness, (for the mountain did burn with fire,) that ye came near unto me, even all the heads of your tribes, and your elders;'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And ye said, Behold, the LORD our God hath shewed us his glory and his greatness, and we have heard his voice out of the midst of the fire: we have seen this day that God doth talk with man, and he liveth.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Now therefore why should we die? for this great fire will consume us: if we hear the voice of the LORD our God any more, we shall die.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Go thou near, and hear all that the LORD our God shall say: and '),
                hp('speak thou unto us all', 'christ-mediator'),
                t(' that the LORD our God shall speak unto thee; and we will hear it, and do it.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And the LORD heard the voice of your words when ye spake unto me; and the LORD said unto me, I have heard the voice of the words of this people, which they have spoken unto thee: they have well said all that they have spoken.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fire-mountain',
          html:
            'The mountain burned with fire. God spoke out of the midst of fire — not in a gentle whisper, but in consuming, overwhelming presence. The people heard His voice directly. And they were terrified. This is the paradox of Sinai: they wanted to experience God, but when they did, it was too much. They could not bear His holiness. They needed someone to stand between them and the fire.',
        },
        {
          kind: 'commentary',
          id: 'c-people-fear',
          html:
            'The people&apos;s fear is reasonable. They have just heard the voice of the living God. They have felt the fire. They have understood something true: that God is not safe — not in the sense of tame, but in the sense of consuming, infinitely more powerful than they are. A God small enough to be comfortable is not God. The people confess: "We have seen this day that God doth talk with man, and he liveth." To be in the presence of God and not be consumed — that is grace.',
        },
        {
          kind: 'christ',
          id: 'christ-mediator',
          title: 'Christ Connection — The Mediator Between God and Man',
          html:
            'The people ask for a mediator — someone to stand between them and God. Moses becomes that mediator. But Paul writes: "There is one God, and one mediator between God and men, the man Christ Jesus" (1 Tim. 2:5). Jesus is the final mediator. In Him, God&apos;s fire does not consume; instead, it transforms. His presence does not kill; it makes alive. He takes the place of Moses. He stands between us and the burning holiness of God so that we can draw near and live.',
        },
        {
          kind: 'carry',
          html:
            'You may feel distant from God. That distance may come from many things — doubt, shame, fear that you&apos;re not good enough. But the deepest distance is the one the Israelites felt at Sinai: God is holy, and I am not. I cannot approach Him without being consumed. This is where the Gospel enters. You do not need to solve that distance yourself. You need a mediator. And Christ is that mediator. He does not leave you standing in the fire. He stands there with you.',
        },
        {
          kind: 'reflection',
          id: 'deut5-mediator',
          prompt:
            'When you think of approaching God, what fear comes first — that He&apos;s angry, that you&apos;re not worthy, that He doesn&apos;t see you? How does it change things to know that Christ has already stood in the fire on your behalf?',
        },
      ],
    },

    /* ─── Deuteronomy 5:28–33 — God&apos;s Longing for the Heart ──────────────── */
    {
      ref: 'Deuteronomy 5:28–33',
      title: 'The Longing of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 28,
              spans: [
                t('And the LORD said unto me, I have heard the voice of the words of this people, which they have spoken unto thee: they have well said all that they have spoken.'),
              ],
            },
            {
              number: 29,
              spans: [
                hp('Oh that there were such an heart in them', 'christ-heart'),
                t(', that they would fear me, and keep all my commandments always, that it might be well with them, and with their children for ever!'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Go say to them, Get you into your tents again.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('But as for thee, stand thou here by me, and I will speak unto thee all the commandments, and the statutes, and the judgments, which thou shalt teach them, that they may do them in the land which I give them to possess it.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Ye shall observe to do therefore all things which the LORD your God commanded you: ye shall not turn aside to the right hand or to the left.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('Ye shall walk in all the ways which the LORD your God hath commanded you, that ye may live, and that it may be well with you, and that ye may prolong your days in the land which ye shall possess.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gods-longing',
          html:
            'God approves of the people&apos;s request for a mediator. "They have well said all that they have spoken." But then — and this is the turning point of the entire chapter — God expresses a longing: "Oh that there were such an heart in them." The law is not ultimate. What God wants is not mere outward obedience but <em>transformation of the heart</em>. He wants them to fear Him, to keep His commandments <em>always</em>, not just when Moses is watching, not just when they&apos;re afraid. He wants them to <em>want</em> what is good.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-levav',
          title: 'Levav — &ldquo;heart&rdquo;',
          script: 'לְבָב',
          translit: '<strong>levav</strong> · the whole person — mind, will, emotion, desire, intention',
          description:
            'In Hebrew, the heart is not merely the seat of emotion. It is the center of your whole self — your intellect, your will, your intention, your desire. When God says, "Oh that there were such a heart in them," He is saying: I want them to desire Me. I want them to choose obedience not from fear but from love.',
        },
        {
          kind: 'christ',
          id: 'christ-heart',
          title: 'Christ Connection — The New Covenant Heart',
          html:
            'This longing — "Oh that there were such a heart in them" — is the prophecy of the new covenant. Jeremiah foretells: "This shall be the covenant that I will make with the house of Israel… I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people" (Jer. 31:33). Ezekiel says God will give them "a new heart" and put His Spirit within them (Ezek. 36:26–27). In Christ, that promise is fulfilled. The law comes not as external command but as the desire of a renewed heart. "Love is the fulfilling of the law" (Rom. 13:10).',
        },
        {
          kind: 'carry',
          html:
            'You cannot obey your way into the kingdom. The law can show you who you need to be, but it cannot make you that person. You can follow the rules, keep your anger in check, speak truthfully — and still be hollow inside, living for praise, for control, for your own vindication. God&apos;s longing is deeper. He wants your heart. He wants to remake you from the inside so that obedience flows from desire, not duty. That is the work of the Spirit in you — to give you a heart that loves what is good.',
        },
        {
          kind: 'reflection',
          id: 'deut5-heart',
          prompt:
            'Where are you living by external obedience — doing what&apos;s right out of fear or habit rather than love? What would it look like to ask God to remake your heart so that you desired what is good?',
        },
      ],
    },
  ],
};
