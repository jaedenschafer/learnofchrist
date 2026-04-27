import { hp, hy, hg, t, type RichChapterContent } from './types';

export const DEUTERONOMY_26: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 26,

  intros: [
    'Deuteronomy 26 crystallizes the covenant in two liturgies — formal, memorized words the people will recite when they bring their firstfruits and when they give their third-year tithes. These are not private prayers but public confessions. They are the shape of Israel&apos;s identity made audible.',
    'What is Israel? A rescued people. A Syrian wanderer, helpless and multiplied by God, brought out of Egypt by God&apos;s mighty hand. When that rescued people come to inherit the land, they acknowledge the Rescuer not by keeping silence but by speaking. They say their story. They name God&apos;s action. They put the firstfruits in the basket and set it before Him. Worship, in this chapter, is remembered history given back to God.',
    'Theologians have called the firstfruits confession "the credo" — the seed from which the Apostles&apos; Creed grew. It is narrative theology, not systematic. It says: this is what God did; therefore this is who we are; therefore we offer.',
  ],

  sections: [
    /* ─── Deuteronomy 26:1–4 — The Basket of Firstfruits ───────────────── */
    {
      ref: 'Deuteronomy 26:1–4',
      title: 'The Basket of Firstfruits',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 1,
              spans: [
                t('And it shall be, when thou art come in unto the land which the Lord thy God giveth thee for an inheritance, and possessest it, and dwellest therein; That thou shalt take of the '),
                hy('first of all the fruit', 'bikkurim'),
                t(' of the earth, which thou shalt bring in of thy land that the Lord thy God giveth thee, and shalt put it in a basket, and shalt go unto the place which the Lord thy God shall choose to place his name there.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'bikkurim',
          title: 'Bikkurim — "firstfruits"',
          script: 'בִּכּוּרִים',
          translit: '<strong>bik-ku-rim</strong> · the first, ripe produce of the harvest',
          description: 'Bikkurim are the very first fruits to ripen, the sign that harvest is coming. To bring them to God is to acknowledge that all harvest comes from Him, and to offer Him the firstborn of blessing.',
        },
        {
          kind: 'commentary',
          id: 'firstfruits-signify',
          html: 'The law is precise and beautiful: not after the harvest is done, not when you&apos;ve kept what you wanted, but when the first fruit appears, you take it in a basket to the sanctuary. This is not economics; it is theology. You are saying, with your hands full of early produce, "This blessing does not belong to me first. It belongs to Him. He deserves the firstborn."',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 2,
              spans: [
                t('And thou shalt go unto the priest that shall be in those days, and say unto him, '),
                hp('I profess this day unto the Lord thy God, that I am come unto the country which the Lord sware unto our fathers for to give us', 'christ-confession'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'profess-day',
          html: 'The verb is "to confess" — to speak out loud, in the presence of the priest, a declaration that lands this harvest in the history of promise. You are not thanking God in private. You are saying it where Israel hears. You are placing your basket in a story much longer than your own life.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 3,
              spans: [
                t('And the priest shall take the basket out of thine hand, and set it down before the altar of the Lord thy God.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html: 'When you offer the firstfruits of your blessing—your first good paycheck, the first sign of healing in a long illness, the first time you felt truly known—do you acknowledge it as gift, or as earned? Do you set it before God, or do you keep it for yourself until the "real" abundance comes? The ancient law asks you to speak it: the firstborn belongs to Him.',
        },
        {
          kind: 'reflection',
          id: 'firstfruits-reflect',
          prompt: 'What is the firstfruit in your life right now—the first sign of something good? What would it mean to set it before God, and to say it out loud?',
        },
      ],
    },

    /* ─── Deuteronomy 26:5–11 — The Credo ─────────────────────────────── */
    {
      ref: 'Deuteronomy 26:5–11',
      title: '"A Syrian Ready to Perish": The Credo of Remembered Rescue',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 5,
              spans: [
                t('And thou shalt speak and say before the Lord thy God, '),
                hp('A Syrian ready to perish was my father', 'amitheology'),
                t('; and he went down into Egypt, and sojourned there with a few, and became there a nation, great, mighty, and populous:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'aramaean-commentary',
          html: 'The passage uses "Aramean"—the phrase likely refers to Abraham, who lived in Aram before God called him down to the land of Canaan. Or it could mean Jacob, who fled to Aram and returned broken. "Ready to perish"—<em>oved</em> in Hebrew—is the language of utter destitution. Israel&apos;s father was not strong, resourceful, or independent. He was helpless. From that helplessness, God made a nation. This is Israel&apos;s true name: we were rescued from nothing.',
        },
        {
          kind: 'hebrew',
          id: 'oved',
          title: 'Oved — "ready to perish"',
          script: 'אָבַד',
          translit: '<strong>oved</strong> · to be lost, perish, gone',
          description: 'Oved describes someone entirely undone—wandering, dying, with no rescue in sight. It is the condition of Israel before God. It is the gospel condition.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 6,
              spans: [
                t('And the Egyptians evil entreated us, and afflicted us, and laid upon us hard bondage:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And when we cried unto the Lord God of our fathers, the Lord '),
                hp('heard our voice, and looked on our affliction, and our labour, and our oppression', 'christ-hearing'),
                t(':'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the Lord '),
                hy('brought us forth', 'yotzia') ,
                t(' out of Egypt with a mighty hand, and with an outstretched arm, and with great terribleness, and with '),
                hy('signs, and with wonders', 'otot-mophetim'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'mighty-hand',
          html: 'The credo compresses the exodus narrative into its essential rhythm: oppression, cry, hearing, deliverance. There is no middle part—no clever escape, no negotiation. God heard. God acted. The "mighty hand" appears throughout Deuteronomy; it is the signature of who God is to Israel. Not a gentle guide, but an intervener. A rescuer.',
        },
        {
          kind: 'hebrew',
          id: 'yotzia',
          title: 'Yatza — "brought forth"',
          script: 'יָצָא',
          translit: '<strong>ya-tza</strong> · to go out, to bring out, to deliver',
          description: 'Yatza is the verb of exodus. It means not only "to leave" but "to be brought out." Israel did not escape by their own cunning; they were extracted by God&apos;s hand. God is the subject, Israel the object of rescue.',
        },
        {
          kind: 'hebrew',
          id: 'otot-mophetim',
          title: 'Otot u-Mophetim — "signs and wonders"',
          script: 'אֹתוֹת וּמוֹפְתִים',
          translit: '<strong>o-tot u-mo-phe-tim</strong> · miraculous signs, visible evidence of divine power',
          description: 'Signs and wonders are not magic tricks but demonstrations—visible proof that the God of Israel is stronger than the gods of Egypt, that His promises are real, that He will be faithful to the helpless.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 9,
              spans: [
                t('And he hath brought us into this place, and hath given us this land, even a '),
                hy('land that floweth with milk and honey', 'milk-honey'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And now, behold, '),
                hp('I have brought the firstfruits of the land, which thou, O Lord, hast given me', 'firstfruits-return'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'full-circle',
          html: 'The credo completes its arc. From "a Syrian ready to perish" to "this place" to "this land." And now, standing in that land, holding fruit that land has produced, the worshiper says: I bring this back to You. The circle closes. The promise is fulfilled. And gratitude demands an offering.',
        },
        {
          kind: 'hebrew',
          id: 'milk-honey',
          title: 'A Land Flowing with Milk and Honey',
          script: 'זָבַת חָלָב וּדְבַשׁ',
          translit: '<strong>zavat chalav u-dvash</strong> · overflowing with dairy and honey, abundance beyond need',
          description: 'This phrase is the definition of blessing in the Old Testament—not mere survival but superabundance. Milk from livestock, honey from wild bees. Everything the body needs and more. The land is not a possession to exploit but a gift to steward.',
        },
        {
          kind: 'christ',
          id: 'christ-hearing',
          title: 'Christ Connection — The Pattern of Rescue',
          html: 'This credo becomes the shape of the Apostles&apos; Creed—a recitation of who God is, told through history. "I believe in God the Father Almighty"—He hears the cry of the helpless. "I believe in Jesus Christ His only Son"—He acts with a mighty hand. "Born of the Virgin Mary... crucified, dead, and risen"—He brings forth His people through death into a new land. The worshiper in Deuteronomy 26 is speaking the structure of the gospel: rescue from bondage, deliverance through a mighty act, and arrival in a land of promise. First and last, the story is not about our strength but about God&apos;s hearing and His power to save.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 11,
              spans: [
                t('And thou shalt set it before the Lord thy God, and '),
                hp('worship before the Lord thy God', 'worship-response'),
                t(': And thou shalt rejoice in every good thing which the Lord thy God hath given unto thee, and unto thy house, thou, and the Levite, and the stranger that is among you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'worship-is-saying',
          html: 'Worship here is not music or ecstatic experience. It is saying your story before God—confessing rescue, acknowledging dependence, offering the firstborn. And then, having spoken truth, you rejoice. You invite the Levite and the stranger to eat with you. The grateful heart naturally becomes generous. The person who has been rescued remembers that rescue and shares the table.',
        },
        {
          kind: 'carry',
          html: 'Do you know your own credo? Can you say it? "I was lost. I cried out. God heard me. He brought me forth. He gave me this land, this family, this work, this hope." Speak it to someone this week—not as a theology lesson but as a story. Invite a stranger or a friend to the table. Let rescue work backward into generosity.',
        },
        {
          kind: 'reflection',
          id: 'credo-reflect',
          prompt: 'If you were to stand before God and confess your story as your own credo, what would you say God has done? Where has He heard your cry? Where has He brought you forth?',
        },
      ],
    },

    /* ─── Deuteronomy 26:12–15 — The Third-Year Tithe Declaration ──────── */
    {
      ref: 'Deuteronomy 26:12–15',
      title: 'The Third-Year Tithe: Declaration of Obedience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 12,
              spans: [
                t('When thou hast made an end of tithing all the '),
                hy('tithes', 'maasar'),
                t(' of thine increase the third year, which is the year of tithing, and hast given it unto the Levite, the stranger, the fatherless, and the widow, that they may eat within thy gates, and be filled;'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'maasar',
          title: 'Ma&apos;aser — "tithe"',
          script: 'מַעֲשֵׂר',
          translit: '<strong>ma-a-ser</strong> · one-tenth, specifically the portion given to the Lord and the Levites',
          description: 'Ma&apos;aser is a tenth—a concrete, measurable act of faith. You count your increase, set aside ten percent, and give it to those who serve the sanctuary and those who have no land. It is the tithe of the rescue, given to the next generation of the rescued.',
        },
        {
          kind: 'commentary',
          id: 'third-year-tithe',
          html: 'In the third year of the seven-year cycle, the tithe belonged not to the Levitical priests but to the resident aliens, orphans, and widows—the voiceless and landless in Israel. The law provides for their survival. And before God, the giver must declare it, must name it, must make it real by speaking. "I have given it. I have not kept it for myself."',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 13,
              spans: [
                t('Then thou shalt say before the Lord thy God, '),
                hp('I have brought away the hallowed things out of mine house, and also have given them unto the Levite, and unto the stranger, to the fatherless, and to the widow, according to all thy commandments which thou hast commanded me', 'obey-declaration'),
                t(': I have not transgressed thy commandments, neither have I forgotten them:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('I have not eaten thereof in my mourning, neither have I taken away ought thereof for any unclean use, nor given ought thereof for the dead: but I have hearkened to the voice of the Lord my God, and have done according to all that thou hast commanded me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'assurance-from-obedience',
          html: 'This is an astonishing moment. The worshiper comes before God and declares, with complete assurance, that he has obeyed. Not "I hope I obeyed," not "I tried to obey," but "I have done all that You commanded." This is only possible because of careful, deliberate obedience. The man has marked every boundary God set—he has not eaten the tithe in mourning (mixing sacred and unclean), has not used it for burial practices (a Canaanite temptation), has kept himself clean. His declaration is a testimony. He is saying: I have done this hard thing, and I testify to it.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 15,
              spans: [
                t('Look down from thy holy habitation, from heaven, and bless thy people Israel, and the land which thou hast given us, as thou swarest unto our fathers, a land that floweth with milk and honey.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'look-down-bless',
          html: 'Having declared obedience, the worshiper asks God to bless. "Look down from heaven"—see what we have done. See that we have set apart the vulnerable. See that we are becoming a people who obey. And then bless us. The prayer circles back to the promise made to the fathers, the land promised, the milk and honey. Obedience draws down blessing. The rhythm is: faithfulness, declaration, prayer, blessing.',
        },
        {
          kind: 'carry',
          html: 'Can you make a similar declaration? Where has obedience been costly—where have you held back something you wanted to keep? Have you done it? Can you say so? There is power in naming your own faithfulness. It is not pride; it is testimony. It is saying to God and to the community: I did the hard thing. God deserves the witness.',
        },
        {
          kind: 'reflection',
          id: 'obedience-reflect',
          prompt: 'Where has God asked you to give what is sacred—time, money, a talent, a relationship—to the stranger or the vulnerable? Did you do it? What would it mean to testify to that faithfulness?',
        },
      ],
    },

    /* ─── Deuteronomy 26:16–19 — The Mutual Avouching ────────────────── */
    {
      ref: 'Deuteronomy 26:16–19',
      title: 'The Mutual Avouching: Covenant Sealed by Speaking',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 16,
              spans: [
                t('This day the Lord thy God hath commanded thee to do these statutes and judgments: keep therefore with all thine heart and with all thy soul.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'heart-soul',
          html: 'The command covers not just the outward act but the inward orientation—heart and soul. This is Deuteronomic language. It echoes the Shema: "Love the Lord your God with all your heart, and all your soul, and all your might." Obedience is not mechanical compliance; it is love. The law demands devotion.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 17,
              spans: [
                t('Thou hast avouched the Lord this day to be thy God; and that thou wilt walk in his ways, and keep his statutes, and his commandments, and his judgments, and hearken unto his voice:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the Lord hath avouched thee this day to be his peculiar people, as he hath promised thee, and that thou shouldest keep all his commandments;'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'segulah',
          title: 'Segullah — "peculiar people"',
          script: 'סְגֻלָּה',
          translit: '<strong>se-gu-lah</strong> · a treasured possession, a particular, chosen people',
          description: 'Segulah means something set apart, treasured, claimed as one&apos;s own peculiar property. Israel is not ordinary among the nations; Israel is the Lord&apos;s segulah—His claimed, chosen treasure. The word is precious.',
        },
        {
          kind: 'commentary',
          id: 'avouched',
          html: 'The word "avouched" appears twice—you avouch God, and God avouches you. It is a mutual declaration. "I claim You as my God." "I claim you as My people." This is not a one-way command from above; it is a covenant made audible by both parties speaking. You become His by saying so. He becomes yours by saying so. The kingdom is built on reciprocal commitment spoken aloud.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 19,
              spans: [
                t('And to make thee '),
                hy('high above all nations', 'high-nations'),
                t(' in praise, and in name, and in honour; and that thou mayest be an holy people unto the Lord thy God, as he hath spoken.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'high-exalted',
          html: 'Being claimed as God&apos;s segulah has a purpose: to be exalted above the nations, not in military power but in praise, in fame, in honor—because you are holy. The nations will see Israel and say: this people is set apart. They are devoted to their God in a way no other people are. Holiness becomes witness. The call to obedience is a call to visibility.',
        },
        {
          kind: 'christ',
          id: 'christ-reflection',
          title: 'Christ Connection — The Firstfruits and the Apostolic Pattern',
          html: 'Paul quotes this chapter to describe the church: "Christ is risen from the dead, and become the firstfruits of them that slept" (1 Corinthians 15:20). Christ is the first fruit—the very first harvest brought back to God from death. And if Christ is the firstfruits, those who follow are the harvest that comes after. The Deuteronomy 26 credo—remembering rescue from bondage, reciting the mighty acts of God, offering the firstborn—becomes the shape of the Apostles&apos; Creed, which every Christian speaks: "I believe in God the Father... and in Jesus Christ His only Son... risen from the dead... and the life of the world to come." In both, the worshiper says: This is who rescued me. This is what God did. This is what I promise in return.',
        },
        {
          kind: 'carry',
          html: 'The covenant in Deuteronomy 26 is spoken, mutual, and public. It is not a private emotion but a declaration made before the community. Is there a commitment you have been hesitant to speak aloud? A covenant you have kept inwardly but never testified to? This week, find a witness. Say it. "The Lord is my God. I will follow Him. I will give my firstfruits. I will remember His rescue." Words have power. They seal what the heart has already chosen.',
        },
        {
          kind: 'reflection',
          id: 'covenant-reflect',
          prompt: 'What would it mean for you to actually avouch the Lord—to speak aloud, before witnesses, "You are my God, and I will obey You"? What would change if you did?',
        },
      ],
    },

    /* ─── Coda: Holiness as Witness ─────────────────────────────────────── */
    {
      ref: 'Deuteronomy 26 · The Whole Chapter',
      title: 'The Holy People Praised Among Nations',
      blocks: [
        {
          kind: 'commentary',
          id: 'coda-commentary',
          html: 'Deuteronomy 26 teaches that worship is not escape from the world but witness to it. You bring the firstfruits publicly. You speak your credo in the sanctuary where Israel hears. You declare your obedience. You make vows in the presence of God and your people. The nations will see. And when they see a people who remember their rescue, who give their firstborn to God, who keep covenant, who care for the alien and the orphan—the nations will know that Israel&apos;s God is real. Holiness is not a private virtue. It is visible faithfulness. It is the fruit that speaks.',
        },
        {
          kind: 'carry',
          html: 'You are Israel now—the church, the people of God. Your life, your faithfulness, your generosity to the stranger, your remembering the God who rescued you—all of it is visible to the world. You are high above the nations not in military strength but in witness. The question is: what do people see when they look at your faithfulness? What fruit do you bring?',
        },
        {
          kind: 'reflection',
          id: 'witness-reflect',
          prompt: 'What is one way your faithfulness to God is visible to the world around you? And what is one way you could increase that witness—by speaking your story, by giving your firstfruits, by caring for the voiceless?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Deuteronomy 26',
    quote:
      'When you come into the land, take of the first of all the fruit of the earth and put it in a basket. Say to the Lord: "A wanderer was my father, and the Lord brought us forth out of Egypt with a mighty hand. And now I have brought the firstfruits." Then rejoice in every good thing the Lord has given you.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 26 · Study Guide',
  },

  hasHebrew: true,
};
