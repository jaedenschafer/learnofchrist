import { hp, hy, hg, t, verse as verse, plain, type RichChapterContent } from './types';

/**
 * Numbers 27 — The daughters of Zelophehad bring a case before the Lord. Their
 * father died in the wilderness without sons, and the inheritance law has no
 * provision for them. Moses brings their cause before God. The Lord affirms
 * their case: "the daughters of Zelophehad speak right." A statute is set in
 * place for all Israel: inheritance passes through daughters if there are no sons.
 *
 * God then commands Moses to ascend Mount Abarim and view the land Israel will
 * possess. Moses is told he will die there, not entering the land, because of
 * the water at Meribah. Moses asks God to appoint a successor so the
 * congregation will not be like sheep without a shepherd. God designates Joshua
 * son of Nun, a man in whom the Spirit rests. Joshua will be commissioned by
 * laying on of hands before Eleazar and the congregation. Moses puts his honor
 * upon Joshua, who will seek counsel through the Urim before the Lord.
 *
 * Key themes: God hears the marginalized; the statute shows God adapting His
 * law to new circumstances. Joshua is named to lead — his name means "the LORD
 * saves." Laying on of hands foreshadows apostolic ordination. Joshua as a type
 * of Jesus, the Good Shepherd who brings the people into their inheritance.
 */
export const NUMBERS_27: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 27,

  intros: [
    'Numbers 27 opens with five women — Mahlah, Noah, Hoglah, Milcah, and Tirzah, the daughters of Zelophehad — standing before the assembly at the tabernacle door. Their father died in the wilderness. He had no sons. Under the law as stated, there is nowhere for their inheritance to go. They approach Moses, Eleazar, the princes, and the entire assembly. They do not argue. They ask: if our father had no sons, let our father\'s name not be taken away from his family. Give us a possession among our father\'s brethren. The silence from the text is significant. They speak. The assembly listens.',
    'God hears their case and answers them. "The daughters of Zelophehad speak right." A statute becomes law in that moment: if a man dies without sons, the inheritance passes to his daughters. If there are no daughters, to his brothers. If no brothers, to his father\'s brothers. If no uncles, to the nearest kinsman. The law, spoken at Sinai as absolute, has room in it for circumstances Sinai did not name. God did not harden. He listened.',
    'With the inheritance question settled, the chapter turns inward. God tells Moses to ascend Mount Abarim — the mountain of the Abarim ridge — and see the land Israel will possess. Then Moses will be gathered to his people, because of the water at Meribah. Not because of his age. Not because of weakness. Because at Meribah, when the people needed water, Moses struck the rock and took credit for what only God could do ("shall we bring you water out of this rock?" he said). There is consequence even for the faithful who step past their bounds.',
  ],

  bottomShare: {
    label: 'Share Numbers 27',
    quote:
      'When the daughters of Zelophehad asked for an inheritance because their father had no sons, God said they were right. A new law was made: daughters inherit if there are no sons. Then God called Joshua, a man in whom the Spirit rested, to lead Israel into the land. Moses put his honor on Joshua through the laying on of hands.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 27 · Study Guide',
  },

  sections: [
    /* ─── Numbers 27:1–5 — The Daughters Bring Their Case ────────────────── */
    {
      ref: 'Numbers 27:1–5',
      title: 'Five Women Who Speak',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            verse(1,
              t('Then came the '),
              hy('daughters of Zelophehad', 'zelophehad-daughters'),
              t(', the son of Hepher, the son of Gilead, the son of Machir, the son of Manasseh, of the families of Manasseh the son of Joseph: and these are the names of his daughters; Mahlah, Noah, and Hoglah, and Milcah, and Tirzah.')
            ),
            verse(2,
              t('And they stood '),
              hg('before Moses, and before Eleazar the priest, and before the princes and all the congregation', 'standing-before-assembly'),
              t(', by the door of the tabernacle of the congregation, saying,')
            ),
            verse(3,
              t('Our father died in the wilderness, and he was '),
              hg('not in the company of them that gathered themselves together against the Lord in the company of Korah', 'father-not-korah'),
              t('; but died in his own sin: and had no sons.')
            ),
            verse(4,
              t('Why should the '),
              hg('name of our father be done away from among his family', 'father-name-inheritance'),
              t(', because he hath no son? Give unto us therefore a possession among the brethren of our father.')
            ),
            verse(5,
              t('And Moses brought their cause '),
              hp('before the Lord', 'god-hears-women'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'zelophehad-daughters',
          html:
            'The five daughters are named individually: Mahlah, Noah, Hoglah, Milcah, Tirzah. In a genealogy, names are usually how a family is remembered. These women secure their names and their father\'s name in the record of Israel. They are not erased.',
        },
        {
          kind: 'commentary',
          id: 'standing-before-assembly',
          html:
            'They stand before the congregation — not in the shadow, not through a male representative, but face-to-face with Moses, the high priest, the princes, and the assembly itself. Their visibility is part of their testimony. They are not hidden away.',
        },
        {
          kind: 'commentary',
          id: 'father-not-korah',
          html:
            'The daughters specify: their father died "in his own sin," not in Korah\'s rebellion. This matters. They are not defending a rebel. Their father was faithful to the covenant, and his daughters deserve to inherit. They are not asking for special treatment; they are asking for justice.',
        },
        {
          kind: 'commentary',
          id: 'father-name-inheritance',
          html:
            'The core of their request is not property but name. "Why should the name of our father be done away from among his family?" To let the inheritance go to another tribe is to erase him. His name disappears. They are asking that his line survive in the land.',
        },
        {
          kind: 'christ',
          id: 'god-hears-women',
          title: 'Christ Connection — God Hears the Marginalized',
          html:
            'In the ancient world, women had no standing to bring a case to law. They were invisible in courts. Yet these five women stood before the entire assembly and were heard. This scene prefigures Jesus, who listened to women when no one else would: the Samaritan at the well, Mary and Martha, the woman caught in adultery, the widow with her mite. In Luke 18:1–8, Jesus tells of a widow whose persistence brings justice from an unjust judge. "Shall not God avenge his own elect, which cry day and night unto him?" God does not require his people to be powerful to be heard. He bends toward them.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever felt too small to matter, too without status to be heard, too outside the system to make a difference — this chapter says you are wrong. Five women with no legal standing brought their case to the assembled leaders of Israel. And God said they were right. Your voice, even when you have no power, is not nothing. It is heard.',
        },
        {
          kind: 'reflection',
          id: 'reflection-five-daughters',
          prompt: 'What case do you carry that needs to be brought before someone who has authority? What is holding you back from speaking it?',
        },
      ],
    },

    /* ─── Numbers 27:6–11 — God Rules: Daughters Inherit ────────────────── */
    {
      ref: 'Numbers 27:6–11',
      title: 'A Statute and a Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            verse(6,
              t('And the Lord spake unto Moses, saying,')
            ),
            verse(7,
              t('The daughters of Zelophehad '),
              hp('speak right', 'god-affirms-daughters'),
              t(': thou shalt surely give them a possession of an inheritance among their father\'s brethren; and thou shalt cause the inheritance of their father to pass unto them.')
            ),
            verse(8,
              t('And thou shalt speak unto the children of Israel, saying, If a man die, and have no son, then ye shall cause his inheritance to pass unto his daughter.')
            ),
            verse(9,
              t('And if he have no daughter, then ye shall give his inheritance unto his brethren.')
            ),
            verse(10,
              t('And if he have no brethren, then ye shall give his inheritance unto his father\'s brethren.')
            ),
            verse(11,
              t('And if his father have no brethren, then ye shall give his inheritance unto him that is nigh to him of his family, and he shall possess it: and it shall be unto the children of Israel a statute of judgment, as the Lord commanded Moses.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'god-affirms-daughters',
          html:
            'God does not say "they are wrong" or "the law stands as is." He says they speak right. The word is "speak" — <em>dabar</em> — the same word used for how God Himself speaks. Their words have the force of truth. God does not defend the old judgment; He makes a new one.',
        },
        {
          kind: 'commentary',
          id: 'statute-of-judgment',
          html:
            'What becomes law here is not arbitrary. It is a hierarchy: sons first; if no sons, daughters; if no daughters, brothers; if no brothers, uncles; if no uncles, nearest kinsman. The inheritance system stays intact. But it now has room for daughters. The law was written for a world that assumed sons. It did not account for women who had no brothers. The new statute accounts for them.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nachalah',
          title: 'Nachalah — "inheritance"',
          script: 'נַחֲלָה',
          translit: '<strong>nachalah</strong> · to inherit; the share that falls to one\'s lot; possession in the land',
          description:
            'In the Old Testament, nachalah is not just property; it is the sign of covenant continuity. To inherit in Israel is to remain, to have a place in the people, to endure. When the daughters inherit, they keep their father\'s line alive in the land.',
        },
        {
          kind: 'carry',
          html:
            'When you speak what is true and just, even from a place of no power, you are participating in the law-making of the God who listens. You may not have authority over others. But you have the truth. That is enough to be heard. The daughters of Zelophehad changed the law of Israel because they spoke truly.',
        },
        {
          kind: 'reflection',
          id: 'reflection-statute',
          prompt: 'What unjust or incomplete rule have you seen in your own life that needs a new statute? What would you ask for?',
        },
      ],
    },

    /* ─── Numbers 27:12–14 — Moses Ascends and Dies ──────────────────────── */
    {
      ref: 'Numbers 27:12–14',
      title: 'Moses Ascends Mount Abarim',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            verse(12,
              t('And the Lord said unto Moses, '),
              hg('Get thee up into this mount Abarim', 'mount-abarim'),
              t(', and see the land which I have given unto the children of Israel.')
            ),
            verse(13,
              t('And when thou hast seen it, thou also shalt be gathered unto thy people, as Aaron thy brother was gathered.')
            ),
            verse(14,
              t('For ye rebelled against my commandment in the desert of Zin, in the strife of the congregation, to sanctify me '),
              hg('at the water before their eyes', 'waters-of-meribah'),
              t(': (these are the waters of Meribah in Kadesh in the wilderness of Zin.)')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mount-abarim',
          html:
            'Mount Abarim is the ridge east of Jordan, overlooking Canaan. Moses will see the land but not enter it. He will die on a mountain, as God promised. The irony is sharp: the man who led the people to the edge of their inheritance will not cross into it.',
        },
        {
          kind: 'commentary',
          id: 'waters-of-meribah',
          html:
            'At Meribah (Numbers 20:1–13), God told Moses to speak to the rock, and water would come forth. Instead, Moses struck the rock twice and said, "Shall we bring you water out of this rock?" He took the credit. God said, "Because ye believed me not, to sanctify me in the eyes of the children of Israel, therefore ye shall not bring this congregation into the land which I have given them." Moses\' sin was not rage or doubt but usurpation. He stepped into the place of the Lord.',
        },
        {
          kind: 'carry',
          html:
            'If even Moses — the greatest prophet Israel ever knew — dies outside the promise because he took credit that belonged to God alone, then every one of us must examine where we have done the same. Not necessarily in a moment of anger or confusion, but in the small, quiet ways: taking credit for a grace that was His, speaking as if we did what only He could do, standing in the center when we were meant to be a conduit. The consequence is not arbitrary. It is the shape of justice itself.',
        },
      ],
    },

    /* ─── Numbers 27:15–17 — Moses Asks for a Shepherd ────────────────────── */
    {
      ref: 'Numbers 27:15–17',
      title: 'A Shepherd for the Flock',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            verse(15,
              t('And Moses spake unto the Lord, saying,')
            ),
            verse(16,
              t('Let the Lord, the God of the spirits of all flesh, '),
              hg('appoint a man over the congregation', 'appoint-successor'),
              t(',')
            ),
            verse(17,
              t('Which may '),
              hg('go out before them, and which may go in before them', 'shepherd-lead'),
              t(', and which may lead them out, and which may '),
              hp('bring them in', 'christ-shepherd'),
              t('; that the congregation of the Lord be not '),
              hy('as sheep which have no shepherd', 'sheep-no-shepherd'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'appoint-successor',
          html:
            'Moses is about to die, and the burden that moves him is not his own fate but the people\'s. His prayer is entirely for them: "appoint a man over the congregation." He does not ask for a reprieve, a longer life, a vision of the promised land. He asks for the people to have a shepherd.',
        },
        {
          kind: 'commentary',
          id: 'shepherd-lead',
          html:
            '"Go out before them, and go in before them" — the ancient formula for leadership. A shepherd does not drive from behind; he leads from the front. He goes out first in battle, goes in first through the gate. He knows the way because he has walked it.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ruach',
          title: 'Ruach — "spirit"',
          script: 'רוּחַ',
          translit: '<strong>ruach</strong> · wind, breath, spirit; the animating force of life',
          description:
            'God is called "the God of the spirits of all flesh." A leader needs ruach — not only skill or courage, but the breath of God, the animating force that moves him to serve rather than to rule, to give rather than to take.',
        },
        {
          kind: 'christ',
          id: 'christ-shepherd',
          title: 'Christ Connection — The Good Shepherd',
          html:
            'Jesus sees the crowd and says, "they fainted, and were scattered abroad, as sheep having no shepherd" (Matt. 9:36, Mark 6:34). He is moved with compassion. Then He says, "I am the good shepherd" (John 10:11). In John 10, He does exactly what Moses asked for His successor to do: He goes out before the sheep (calls them by name), they hear His voice and follow Him, and He leads them into the fold. Jesus is the answer to Moses\' prayer. He is the Shepherd who brings the flock in.',
        },
        {
          kind: 'carry',
          html:
            'If you find yourself in a position where others depend on you — as a parent, a manager, a teacher, a leader of any kind — this prayer shows you what to ask for. Not strength for yourself. Not honor or ease. Strength to lead others, wisdom to go before them, humility to bring them safely in. And the prayer assumes one thing: you cannot do this alone. You need the God of all spirits to appoint and equip you.',
        },
        {
          kind: 'reflection',
          id: 'reflection-shepherd',
          prompt: 'Who has been a shepherd to you when you felt scattered? Who might need you to be that for them?',
        },
      ],
    },

    /* ─── Numbers 27:18–21 — Joshua Is Chosen and Commissioned ──────────── */
    {
      ref: 'Numbers 27:18–21',
      title: 'Joshua: A Man in Whom Is the Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            verse(18,
              t('And the Lord said unto Moses, Take thee Joshua the son of Nun, '),
              hy('a man in whom is the Spirit', 'joshua-spirit'),
              t(', and lay thine hand upon him;')
            ),
            verse(19,
              t('And set him before Eleazar the priest, and before all the congregation; and give him a charge in their sight.')
            ),
            verse(20,
              t('And thou shalt '),
              hg('put thy honour upon him', 'honor-transfer'),
              t(', that all the congregation of the children of Israel may be obedient.')
            ),
            verse(21,
              t('And he shall stand before Eleazar the priest, who shall ask counsel for him '),
              hg('after the judgment of the Urim before the Lord', 'urim-priesthood'),
              t(': at his word shall they go out, and at his word they shall come in, he, and all the children of Israel with him.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'joshua-spirit',
          html:
            'Joshua is not chosen because he is the oldest or the strongest or the most experienced. He is chosen because the Spirit is in him. The Holy Spirit, the ruach — the animating force of God — already dwells in Joshua. God recognizes what He has already placed in the man.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yehoshua',
          title: 'Yehoshua — "Joshua"',
          script: 'יְהוֹשֻׁעַ',
          translit: '<strong>Yehoshua</strong> (or Yeshua) · the LORD saves, or salvation of the LORD',
          description:
            'Joshua\'s very name is a theological statement. The man appointed to bring Israel into the land is named "the LORD saves." His leadership is not his own achievement; it is the Lord saving His people.',
        },
        {
          kind: 'commentary',
          id: 'honor-transfer',
          html:
            'Moses puts his honor on Joshua. The Hebrew word <em>hod</em> means splendor, glory, honor. Moses does not keep it for himself. He transfers it to the next man. This is the pattern of biblical leadership: you pass on what was given to you.',
        },
        {
          kind: 'commentary',
          id: 'urim-priesthood',
          html:
            'Joshua will not rule alone. He will stand before Eleazar, the high priest, who will ask counsel for him through the Urim — the priestly means of discerning God\'s will. This is not a failure of Joshua\'s discernment; it is the built-in reminder that even the leader needs priests, needs counsel, needs to seek God\'s word through others. No leader stands alone.',
        },
        {
          kind: 'carry',
          html:
            'If you are being called forward into a new responsibility, ask yourself: Is the Spirit in me? Not "Am I qualified?" or "Do I have enough experience?" The first question is whether God has already placed His Spirit in you. And if you are stepping back from leadership, here is the model: put your honor on the next person. Give them what was given to you. Do not die clinging to your role.',
        },
        {
          kind: 'reflection',
          id: 'reflection-joshua',
          prompt: 'Joshua was chosen because the Spirit was in him. What gifts has the Spirit placed in you that maybe you\'ve not yet recognized as the ground of a calling?',
        },
      ],
    },

    /* ─── Numbers 27:22–23 — The Commissioning ───────────────────────────── */
    {
      ref: 'Numbers 27:22–23',
      title: 'Laying On of Hands',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            verse(22,
              t('And Moses did as the Lord commanded him: and he took Joshua, and set him before Eleazar the priest, and before all the congregation:')
            ),
            verse(23,
              t('And he laid his '),
              hy('hands upon him', 'laying-on-hands'),
              t(', and gave him a charge, as the Lord commanded by the hand of Moses.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'laying-on-hands',
          html:
            'Moses lays his hands on Joshua. This physical act becomes the pattern for apostolic ordination in the New Testament. In Acts 6:6, the apostles lay hands on the deacons. In 1 Timothy 4:14, Paul speaks of the laying on of hands at Timothy\'s ordination. The same gesture — hands on the person, the community witnessing, the Spirit\'s work recognized and confirmed — connects Moses and Joshua to the early church and to pastoral succession even now.',
        },
        {
          kind: 'christ',
          id: 'christ-type',
          title: 'Christ Connection — Joshua as a Type of the Savior',
          html:
            'Joshua\'s name means "the LORD saves." He is called to lead God\'s people into their inheritance — the promised land. Jesus is the true Joshua, the Savior who brings God\'s people into their ultimate inheritance — eternal life. In Hebrews 4:8–9, Paul contrasts Joshua with the ultimate rest: "For if Jesus [Greek: Iesous — the Greek form of Joshua] had given them rest, then would he not afterward have spoken of another day. There remaineth therefore a rest to the people of God." Joshua led Israel into the land. Jesus leads His people into the presence of God. Joshua brought them into a geographical inheritance. Jesus brings His people into glory.',
        },
        {
          kind: 'carry',
          html:
            'The laying on of hands is not a magical gesture. It is a sign that the community recognizes what God has placed in a person, and is releasing them to it. If you are stepping into a new calling — as a parent, a leader, a teacher, a servant — find people who will lay their hands on you and say, "Yes, we see the Spirit in you. We release you for this." And if you have authority, find the next person and do the same. Do not hoard. Release.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'reflection-hands',
          prompt: 'Who has laid hands on you in recognition of a calling? Whose hands do you need to lay on someone else?',
        },
      ],
    },
  ],
};
