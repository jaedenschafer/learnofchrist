import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezra 10 — The Painful Resolution
 *
 * After Ezra&apos;s prayer of confession, a covenant forms among God&apos;s people
 * to put away foreign wives who have brought them into idolatrous unions. The
 * text does not shy from the pain: wives are sent away, children separated from
 * fathers. The resolution is incomplete — by the end, we are left with a list
 * of those who complied, and the broken homes that remain.
 *
 * This is not a chapter about racial separation. The principle is covenant
 * integrity: those who married into families that worshipped other gods
 * endangered the faith of God&apos;s people. Ruth the Moabitess and Rahab the
 * Canaanite show us that ethnicity was never the barrier — faith was. The
 * chapter calls us to the costly choice of walking together only with those
 * who share the covenant.
 *
 * And it ends without full resolution, pointing us to the One who can heal
 * what was broken.
 */
export const EZRA_10: RichChapterContent = {
  bookSlug: 'ezra',
  bookName: 'Ezra',
  chapter: 10,

  estimatedMinutes: { beginner: 5, intermediate: 9, deep: 14 },
  intros: [
    'Ezra&apos;s prayer has moved the people. His grief has become theirs. Now the question stands: What will they do? A man named Shechaniah steps forward with a proposal that will reshape the entire community. He names the sin plainly — strange wives, foreign gods — and then offers something harder than confession: a covenant to undo what has been done.',
    'What follows is a painful resolution. The people gather in the rain, trembling. They acknowledge their transgression. And then they act. The text names those who put away their wives, those who separated themselves and their children from foreign-god-bringing families. The chapter ends not with triumph, but with a list of the broken and the separated, and a people learning what covenant costs.',
  ],

  bottomShare: {
    label: 'Share Ezra 10',
    quote:
      'When Shechaniah stood before Ezra and spoke, he opened a door to hard obedience: "There is hope in Israel concerning this thing. Now therefore let us make a covenant with our God to put away all the wives." The path to restoration runs through pain.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezra 10 · Study Guide',
  },

  sections: [
    /* ─── Ezra 10:1–4 — Shechaniah's Proposal: "There Is Hope" ────────── */
    {
      ref: 'Ezra 10:1–4',
      title: '"There Is Hope in Israel"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(
              1,
              'Now when Ezra had prayed, and when he had confessed, weeping and casting himself down before the house of God, there assembled unto him out of Israel a very great congregation of men and women and children: for the people wept very sore.',
            ),
            {
              number: 2,
              spans: [
                t('And Shechaniah the son of Jehiel, of the sons of Elam, answered and said unto Ezra, We have trespassed against our God, and have taken '),
                hg('strange wives', 'ezra10-strange-wives'),
                t(' of the people of the land: yet now '),
                hp('there is hope', 'ezra10-hope'),
                t(' in Israel concerning this thing.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Now therefore let us make a covenant with our God to put away all the wives, and such as are born of them, according to the counsel of my lord, and of those that tremble at the commandment of our God; and let it be done according to the law.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Arise; for this matter belongeth unto thee: we also will be with thee: be of good courage, and do it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra10-strange-wives',
          html:
            'Shechaniah names the sin directly. "Strange wives" — women from families whose gods are not the God of Israel. This is not a statement about ethnicity or race. Ruth was a Moabitess, Rahab a Canaanite, and both were woven into Israel&apos;s story because they joined themselves to the God of Israel. But these women had brought with them the worship of other gods, had diluted the covenant commitment of God&apos;s people. The sin is religious, not racial. The danger is idolatry.',
        },
        {
          kind: 'commentary',
          id: 'ezra10-hope',
          html:
            'In the midst of judgment and sorrow, Shechaniah speaks a word that seems impossible: "There is hope." He does not say this lightly. He has stood in that same assembly, listening to Ezra weep. He knows the weight of what has been done. And yet he speaks hope — not false comfort, but the hope that comes from a people willing to pay the cost of repentance.',
        },
        {
          kind: 'hebrew',
          id: 'ezra10-nashim-nokhriyyot',
          title: 'Nashim Nokhriyyot — "Strange" or "Foreign" Wives',
          script: 'נָשִׁים נָכְרִיּוֹת',
          translit: '<strong>Nashim nokhriyyot</strong> · women of foreign, foreign wives',
          description:
            'The term "nokhriyyot" emphasizes separation, otherness. These are women whose families, whose gods, whose covenant obligations are not shared with Israel&apos;s covenant family. The danger is not their personhood, but their allegiance to gods other than the God of Israel. They bring with them a divided loyalty that threatens the whole.',
        },
        {
          kind: 'carry',
          html:
            'Hope does not live in denial. It lives in the willingness to look at what we have done and choose differently, even when the cost is high. Shechaniah does not say the separation will be painless. He says it will be done according to the law, that those who tremble at God&apos;s commandment will do it. He calls the people to be of good courage — not because the work is easy, but because it is necessary.',
        },
        {
          kind: 'reflection',
          id: 'shechaniah-proposal',
          prompt:
            'Shechaniah calls the people to a costly obedience. What in your own life requires you to put away something that compromises your deepest commitments? What would it cost, and what hope might lie on the other side?',
        },
      ],
    },

    /* ─── Ezra 10:5–8 — Ezra Rises; the Proclamation ──────────────────── */
    {
      ref: 'Ezra 10:5–8',
      title: 'Ezra Rises; The Proclamation Goes Out',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(
              5,
              'Then arose Ezra, and made the chief priests, the Levites, and all Israel, to swear that they should do according to this word. And they sware.',
            ),
            plain(
              6,
              'And Ezra rose up from before the house of God, and went into the chamber of Johanan the son of Eliashib: and when he came thither, he did eat no bread, nor drink water: for he mourned because of the transgression of them that had been carried away.',
            ),
            plain(
              7,
              'And they made proclamation throughout Judah and Jerusalem unto all the children of the captivity, that they should gather themselves together unto Jerusalem;',
            ),
            plain(
              8,
              'That whosoever would not come within three days, according to the counsel of the princes and the elders, all his substance should be forfeited, and himself separated from the congregation of those that had been carried away.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra10-swear',
          html:
            'The covenant is formalized: all Israel swears to do according to Shechaniah&apos;s word. This is not a private decision by the leadership. The whole people — priests, Levites, Israel — bind themselves to this path. The weight of corporate commitment holds them accountable.',
        },
        {
          kind: 'commentary',
          id: 'ezra10-fasting',
          html:
            'Ezra enters a chamber and fasts. He does not eat. He does not drink. His mourning is for "the transgression of them that had been carried away" — those who, having been brought out of exile by God&apos;s grace, have now betrayed that covenant. He grieves not only for the sin, but for the cost of its remedy. He will not join in the everyday life of the people until the covenant is fulfilled.',
        },
        {
          kind: 'carry',
          html:
            'When we have named a sin and set a path toward healing, we do not move past it as if nothing happened. Ezra&apos;s fasting says: I grieve with you. I understand the cost. I will not resume ordinary life until we have paid what must be paid. This is not guilt or self-punishment. It is solidarity with a people in pain.',
        },
        {
          kind: 'reflection',
          id: 'ezra10-proclamation',
          prompt:
            'The proclamation demands that the people gather. It says that those who do not come will be separated from the congregation. What makes a shared commitment binding? What does it mean to call a community together around a difficult truth?',
        },
      ],
    },

    /* ─── Ezra 10:9–15 — The Assembly in the Rain; "As Thou Hast Said" ──── */
    {
      ref: 'Ezra 10:9–15',
      title: 'The Assembly in the Rain — A People Trembling',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(
              9,
              'Then all the men of Judah and Benjamin gathered themselves together unto Jerusalem within three days. It was the ninth month, on the twentieth day of the month; and all the people sat in the street of the house of God, trembling because of this matter, and for the great rain.',
            ),
            {
              number: 10,
              spans: [
                t('And Ezra the priest stood up and said unto them, Ye have transgressed, and have taken '),
                hg('strange wives', 'ezra10-transgressed'),
                t(', to increase the trespass of Israel.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Now therefore '),
                hp('make confession', 'ezra10-confession'),
                t(' unto the Lord God of your fathers, and do his pleasure: and separate yourselves from the people of the land, and from the strange wives.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra_10_v9-15',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 12,
              spans: [
                t('Then all the congregation answered and said with a loud voice, As thou hast said, so must we do.'),
              ],
            },
            plain(
              13,
              'But the people are many, and it is a time of much rain, and we are not able to stand without, neither is this a work of one day or of two: for we are many that have transgressed in this thing.',
            ),
            plain(
              14,
              'Let now our rulers of all the congregation stand, and let all them which have taken strange wives in our cities come at appointed times, and with them the elders of every city, and the judges thereof, until the fierce wrath of our God for this matter be turned from us.',
            ),
            plain(
              15,
              'Only Jonathan the son of Asahel and Jahaziah the son of Tikvah were employed about this matter: and Meshullam and Shabbethai the Levite helped them.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra10-trembling',
          html:
            'The people gather in the street, in the rain. And the text says they are "trembling." This trembling is double: fear of judgment, yes, but also the physical trembling of those standing in cold rain, exhausted, knowing what is being asked of them. The text does not romanticize this moment. It is uncomfortable, physically and spiritually.',
        },
        {
          kind: 'hebrew',
          id: 'ezra10-raad',
          title: 'Raad — "Tremble"',
          script: 'רָעַד',
          translit: '<strong>Raad</strong> · to tremble, shake, quiver',
          description:
            'The verb carries the weight of fear, awe, and the physical sensation of trembling. It is used elsewhere for the trembling of those who encounter God&apos;s presence. Here, in the cold and rain, the people tremble before the judgment of their own actions and the cost of their covenant.',
        },
        {
          kind: 'commentary',
          id: 'ezra10-transgressed',
          html:
            'Ezra states the sin plainly. "Ye have transgressed." He does not soften it. He does not say "we have all fallen short." He speaks directly, as the priest and the leader, to those who have done this thing.',
        },
        {
          kind: 'commentary',
          id: 'ezra10-confession',
          html:
            'Confession is not a private act between the soul and God. It is public. It happens in the street, before the house of God, before the whole people. The congregation hears the call to confess, and they respond with one voice.',
        },
        {
          kind: 'commentary',
          id: 'ezra10-as-thou-hast-said',
          html:
            'The people cry out, "As thou hast said, so must we do." They do not haggle. They do not ask for exceptions. They commit themselves to what Ezra and Shechaniah have called them to. And then, with remarkable clarity, they acknowledge what the task will require: "the people are many, and it is a time of much rain, and we are not able to stand without." They are saying: this cannot be done in a day or two. We will be standing in the cold. We will be suffering. We commit to it anyway.',
        },
        {
          kind: 'carry',
          html:
            'There is a moment in every spiritual covenant when the cost becomes clear. The people could have dispersed in the rain, could have gone home, could have said "we&apos;ll do this later." Instead, they stood, trembling, and said yes. Not because it was convenient, but because it was true. This is the mark of genuine repentance: not the ease of saying you&apos;re sorry, but the willingness to stand in the rain and do what must be done.',
        },
        {
          kind: 'reflection',
          id: 'ezra10-rain',
          prompt:
            'The people stand in rain, uncomfortable, knowing what lies ahead, and still they say yes. When have you said yes to something difficult because it was right, not because it was easy? What gave you the courage to stand?',
        },
      ],
    },

    /* ─── Ezra 10:16–44 — The List: Those Who Put Away Strange Wives ───── */
    {
      ref: 'Ezra 10:16–44',
      title: 'The List: Those Who Separated Themselves',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(
              16,
              'And the children of the captivity did so. And Ezra the priest, with certain chief of the fathers, after the house of their fathers, and all of them by their names, were separated, and sat down in the first day of the tenth month to examine the matter.',
            ),
            plain(
              17,
              'And they made an end with all the men that had taken strange wives by the first day of the first month.',
            ),
            plain(
              18,
              'And among the sons of the priests there were found that had taken strange wives: namely, of the sons of Jeshua the son of Jozadak, and his brethren; Maaseiah, and Eliezer, and Jarib, and Gedaliah.',
            ),
            plain(
              19,
              'And they gave their hands that they would put away their wives; and being guilty, they offered a ram of the flock for their trespass.',
            ),
            plain(
              20,
              'And of the sons of Immer; Hanani, and Zebadiah.',
            ),
            plain(
              21,
              'And of the sons of Harim; Maaseiah, and Elijah, and Shemaiah, and Jehiel, and Uzziah.',
            ),
            plain(
              22,
              'And of the sons of Pashur; Elioenai, Maaseiah, Ishmael, Nethanel, Jozabad, and Elasah.',
            ),
            plain(
              23,
              'Also of the Levites; Jozabad, and Shimei, and Kelaiah, (the same is Kelita,) Pethahiah, Judah, and Eliezer.',
            ),
            plain(
              24,
              'Of the singers also; Eliashib: and of the porters; Shallum, and Telem, and Uri.',
            ),
            plain(
              25,
              'Moreover of Israel: of the sons of Parosh; Ramiah, and Jeziah, and Malchiah, and Miamin, and Eleazar, and Malchijah, and Benaiah.',
            ),
            plain(
              26,
              'And of the sons of Elam; Mattaniah, Zechariah, and Jehiel, and Abdi, and Jeremoth, and Eliah.',
            ),
            plain(
              27,
              'And of the sons of Zattu; Elioenai, Eliashib, Mattaniah, and Jeremoth, and Zabad, and Aziza.',
            ),
            plain(
              28,
              'Of the sons also of Bebai; Jehohanan, Hananiah, Zabbai, and Athlai.',
            ),
            plain(
              29,
              'And of the sons of Bani; Meshullam, Malluch, and Adaiah, Jashub, and Sheal, and Ramoth.',
            ),
            plain(
              30,
              'And of the sons of Pahathmoab; Adna, and Chelal, Benaiah, Maaseiah, Mattaniah, Bezaleel, and Binnui, and Manasseh.',
            ),
            plain(
              31,
              'And of the sons of Harim; Eliezer, Ishijah, Malchiah, Shemaiah, Shimeon,',
            ),
            plain(
              32,
              'Benjamin, Malluch, and Shemariah.',
            ),
            plain(
              33,
              'Of the sons of Hashum; Mattenai, Mattathah, Zabad, Eliphelet, Jeremai, Manasseh, and Shimei.',
            ),
            plain(
              34,
              'Of the sons of Bani; Maadai, Amram, and Uel,',
            ),
            plain(
              35,
              'Benaiah, Bedeiah, Chelluh,',
            ),
            plain(
              36,
              'Vaniah, Meremoth, Eliashib,',
            ),
            plain(
              37,
              'Mattaniah, Mattenai, and Jaasau,',
            ),
            plain(
              38,
              'And Bani, and Binnui, Shimei,',
            ),
            plain(
              39,
              'And Shelemiah, and Nathan, and Adaiah,',
            ),
            plain(
              40,
              'Machnadebai, Shashai, Sharai,',
            ),
            plain(
              41,
              'Azareel, and Shelemiah, Shemariah,',
            ),
            plain(
              42,
              'Shallum, Amariah, and Joseph.',
            ),
            plain(
              43,
              'Of the sons of Nebo; Jeiel, Mattithiah, Zabad, Zebina, Jadau, and Joel, Benaiah.',
            ),
            plain(
              44,
              'All these had taken strange wives: and some of them had wives by whom they had children.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra10-the-list',
          html:
            'The text does not skip past this. It names them. Priests, Levites, singers, porters, and men of Israel — all those who had taken strange wives are listed. They are not hidden. Their failure is made public. And yet the fact that they are named here is also their redemption: they are named as those who complied, who separated themselves, who did according to the word.',
        },
        {
          kind: 'hebrew',
          id: 'ezra10-badal',
          title: 'Badal — "Separate"',
          script: 'בָּדַל',
          translit: '<strong>Badal</strong> · to separate, divide, distinguish',
          description:
            'The word carries the sense of setting apart, of choosing a different path. When Israel "separated" themselves, they divided themselves from those whose gods were not the God of Israel. This is not segregation by race or ethnicity — it is covenant separation. Ruth and Rahab would have been embraced in this moment; those who worshipped other gods would not.',
        },
        {
          kind: 'commentary',
          id: 'ezra10-brokenness',
          html:
            'The text says they "gave their hands that they would put away their wives; and being guilty, they offered a ram of the flock for their trespass." They are guilty. They acknowledge it. They make sacrifice. And then they put away their wives. The text tells us, finally, that "some of them had wives by whom they had children." Fathers separated from children. Wives sent away. The covenant was restored, and the cost was paid in human heartbreak.',
        },
        {
          kind: 'carry',
          html:
            'This list does not end with "and they all lived happily ever after." It ends with separation, with children left behind, with the wreckage of broken families. The text does not look away. It names what happened. And it leaves us with a question: Was it worth it? The answer, for Israel, was yes — the covenant was preserved. But the pain was real, and remains. This is what covenant costs.',
        },
        {
          kind: 'reflection',
          id: 'ezra10-list',
          prompt:
            'The list names those who put away their strange wives. Some had children by them. Imagine being one of these men, making a choice that meant separation from your wife and children. What would have to be true for you to believe that choice was right?',
        },
      ],
    },

    /* ─── Christ Connection & Carry ──────────────────────────────────── */
    {
      ref: 'John 6:35 · Hebrews 10:23–24',
      title: 'Christ Connection — The One Who Heals What Is Broken',
      blocks: [
        {
          kind: 'christ',
          id: 'ezra10-christ',
          title: 'The Covenant Keeper',
          html:
            'Ezra&apos;s people put away what compromised their covenant, and the pain was real and deep. But there is a pattern in Scripture: covenant always costs, and covenant is always answered by grace. Jesus says, "I am the bread of life: he that cometh to me shall never hunger" (John 6:35). The people of Israel learned that covenant required separation — but Christ came to gather all who are separated from God, to bring them into the covenant family not through ethnic bloodline but through faith. And more than that: Christ bore the cost of covenant himself. He was separated from his Father (Matthew 27:46), bore the weight of all broken covenants, all human failure, all the separation that sin demands. And in his resurrection, He offers what no earthly separation can provide: a new covenant that cannot be broken, a family that cannot be torn apart. The women sent away in Ezra 10 could find in Christ what Ezra&apos;s Israel could not give: a belonging that does not depend on who your family was, but on whether you belong to Christ.',
        },
        {
          kind: 'carry',
          html:
            'We live under the new covenant. The barriers that divided Israel have been torn down. But the principle remains: we cannot walk together in covenant with those who do not share the deepest covenant with Christ. Paul writes, "Be ye not unequally yoked with unbelievers: for what fellowship hath righteousness with unrighteousness?" (2 Corinthians 6:14). This is not cruelty. This is clarity. The people who love Christ most fiercely are those who understand that some separations are necessary to preserve what is sacred. And yet we live also in the hope of Christ: that even the deepest separation can be healed, that even those who have walked away from the covenant can return, that Christ gathers all nations and all peoples into His kingdom, not by erasing them, but by calling them home.',
        },
      ],
    },

    {
      ref: 'Luke 14:26–33',
      blocks: [
        {
          kind: 'reflection',
          id: 'ezra10-final',
          prompt:
            'Jesus said, "If any man come to me, and hate not his father, and mother, and wife, and children, and brethren, and sisters, yea, and his own life also, he cannot be my disciple" (Luke 14:26). This sounds harsh, but He means: the covenant with Christ must come before all other covenants. What does it mean, in your own life, to love Christ more than what you love most? And what does it cost?',
        },
      ],
    },
  ],
};
