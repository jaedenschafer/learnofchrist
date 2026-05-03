import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 17 — Manasseh&apos;s inheritance and the timeless power of standing fast.
 *
 * The chapter weaves two themes: (1) the allotment of land to Manasseh,
 * including the remarkable precedent set by Zelophehad&apos;s daughters,
 * and (2) Israel&apos;s failure to fully possess the land, followed by Joshua&apos;s
 * challenge to the complaining tribes. The heart is relational: God gives
 * the land, but the people must possess it through effort rooted in faith.
 */
export const JOSHUA_17: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 17,

  estimatedMinutes: { beginner: 6, intermediate: 8, deep: 12 },
  intros: [
    'Joshua 17 records the allotment of land to the tribe of Manasseh — the firstborn son of Joseph. But the chapter divides into three movements: the boundaries of Manasseh&apos;s inheritance, the women of Zelophehad whose legal case stands the test of time, and the real problem: Israel had the promise but not yet the full possession. The Canaanites still held the cities. Iron chariots still lined the valleys.',
    'What makes Joshua 17 challenging is that it is not a celebration of victory but an honest account of incomplete conquest. The land was promised. The borders were drawn. But the enemy remained. Into that gap — between promise and possession — steps a conversation between Joshua and the complaining tribes of Ephraim and Manasseh. Joshua&apos;s answer is neither a scold nor empty reassurance. It is a call to partnership: God gives the land; you possess it.',
  ],

  bottomShare: {
    label: 'Share Joshua 17',
    quote:
      'The Lord gave the land as a promise, but the people had to do the work to possess it. Joshua said to Joseph&apos;s tribes: "Thou art a great people, and hast great power: thou shalt not have one lot only; but the mountain shall be thine; for it is a wood, and thou shalt cut it down."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 17 · Study Guide',
  },

  sections: [
    /* ─── Joshua 17:1–2 — Manasseh&apos;s Allotment ──────────────────────── */
    {
      ref: 'Joshua 17:1–2',
      title: 'Manasseh&apos;s Allotment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 1,
              spans: [
                t('There was a lot for the tribe of Manasseh; for he was the '),
                hy('firstborn', 'machir-firstborn'),
                t(' of Joseph. To Machir the firstborn of Manasseh, father of Gilead, because he was a man of war, were given Gilead and Bashan.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('So the lot was for the rest of the children of Manasseh by their families; for the children of Abiezer, and for the children of Helek, and for the children of Asriel, and for the children of Shechem, and for the children of Hepher, and for the children of Shemida: these were the male children of Manasseh the son of Joseph by their families.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh17-manasseh-order',
          html:
            'Manasseh&apos;s inheritance spans the Jordan. Machir, his firstborn (and notably a man of war), receives the eastern lands — Gilead and Bashan, already conquered under Moses. The other families receive their portion west of the Jordan, the land Joshua is still distributing. The difference matters: some have already seized it in battle; others must still press in.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-machir',
          title: 'Machir — &ldquo;firstborn of Manasseh&rdquo;',
          script: 'מָכִיר',
          translit: '<strong>Machir</strong> · his name means &ldquo;sold&rdquo; (from Hebrew makar), but his legacy is conquest. He was a warrior, the first to claim Gilead.',
          description:
            'Machir&apos;s family would later be known for their strength and warrior culture (Judges 5:14). His allocation reflects not favoritism but the fruit of faithfulness in battle.',
        },
        {
          kind: 'carry',
          html:
            'Manasseh&apos;s tribe was divided: some had already fought and won; others would have to fight still. It&apos;s easy to forget that others have already paid a price that you inherit. When you receive a blessing that others fought for, pause and ask: What will I do with this trust? What battles will I take on in my turn?',
        },
      ],
    },

    /* ─── Joshua 17:3–6 — Zelophehad&apos;s Daughters (Revisited) ─────────── */
    {
      ref: 'Joshua 17:3–6',
      title: "Zelophehad&apos;s Daughters: The Precedent Stands",
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 3,
              spans: [
                t('But '),
                hy('Zelophehad', 'zelophehad-name'),
                t(', the son of Hepher, the son of Gilead, the son of Machir, the son of Manasseh, had no sons, but daughters: and these are the names of his daughters, Mahlah, and Noah, Hoglah, Milcah, and Tirzah.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And they came near before Eleazar the priest, and before Joshua the son of Nun, and before the princes, saying, The LORD commanded Moses to give us an inheritance among our brethren. Therefore according to the commandment of the LORD he gave them an inheritance among the brethren of their father.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And there fell ten portions to Manasseh, beside the land of Gilead and Bashan, which were on the other side Jordan;'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Because the daughters of Manasseh received an inheritance among his sons: and the rest of Manasseh&apos;s sons had the land of Gilead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh17-zelophehad-precedent',
          html:
            'This is Zelophehad&apos;s story a second time — once in Numbers 27, when they petitioned Moses, and now in Joshua&apos;s era. What matters is that Joshua honors the precedent. The legal foundation set years earlier by Moses stands. God&apos;s word does not expire between generations. A promise kept to one generation is kept to the next.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-zelophehad',
          title: 'Zelophehad — צְלָפְחָד — &ldquo;my shadow flees&rdquo;',
          script: 'צְלָפְחָד',
          translit: '<strong>Tzelophchad</strong> · a man whose greatest gift to Israel was his daughters, and their courage to claim what the Law promised them.',
          description:
            'His name suggests invisibility or fading, yet his daughters&apos; names are recorded, their case precedent-setting, their inheritance secure. Sometimes the greatest legacy is not the name that lasts but the principle that endures.',
        },
        {
          kind: 'christ',
          id: 'christ-zelophehad',
          title: 'Christ Connection — The Holy Spirit&apos;s Advocacy',
          html:
            'Just as Zelophehad&apos;s daughters knew the Law and appealed to it, the Spirit of God in us speaks on behalf of those who cannot advocate for themselves. "The Spirit itself beareth witness with our spirit, that we are the children of God" (Romans 8:16). Their case was heard; ours is too.',
        },
        {
          kind: 'carry',
          html:
            'Zelophehad&apos;s daughters did not shrink because they were women, and they did not assume the Law didn&apos;t apply to them. They stood before the leaders and claimed what was promised. When you know what God has said, silence is not humility. Standing up for what belongs to you — or to someone you love — is faith in the form of courage.',
        },
        {
          kind: 'reflection',
          id: 'zelophehad-reflection',
          prompt:
            'What promise from Scripture do you know but have not yet claimed? What would change if you approached God or His word with Zelophehad&apos;s daughters&apos; combination of humility and boldness?',
        },
      ],
    },

    /* ─── Joshua 17:7–13 — The Borders; The Canaanites Remain ─────────── */
    {
      ref: 'Joshua 17:7–13',
      title: 'The Boundaries; The Enemy Still There',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 7,
              spans: [
                t('And the coast of Manasseh was from Asher to Michmethah, that lieth before Shechem; and the border went along on the right hand unto the inhabitants of En-tappuah.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Manasseh had in Issachar and in Asher Beth-shean and her towns, and Ibleam and her towns, and the inhabitants of Dor and her towns, and the inhabitants of En-dor and her towns, and the inhabitants of Taanach and her towns, and the inhabitants of Megiddo and her towns, even three countries.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Yet the children of Manasseh could '),
                hg('not drive out', 'josh17-could-not'),
                t(' the inhabitants of those cities; but the Canaanites would dwell in that land.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Yet it came to pass, when the children of Israel were waxen strong, that they put the Canaanites to tribute, but did not utterly drive them out.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh17-could-not',
          html:
            'The land was drawn. The borders were clear. But the enemy was still in the cities. This is not the end of the chapter — it is the setup for everything that follows. Manasseh looked at the map and said, "This is ours," but Manasseh looked at the walls and said, "We cannot." The same hesitation appears in Ephraim, Judah, and the other tribes. Iron chariots. Fortified cities. Giants. The long list of "could nots."',
        },
        {
          kind: 'carry',
          html:
            'You can have the promise written clearly and still feel far from it. You can have the inheritance mapped out and still see the enemy between you and your door. That gap between the map and the reality is where most people stop. Joshua 17 does not stop there. Keep reading.',
        },
      ],
    },

    /* ─── Joshua 17:14–16 — Joseph&apos;s Complaint; Iron Chariots ─────── */
    {
      ref: 'Joshua 17:14–16',
      title: 'The Complaint: "We Are a Great People"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 14,
              spans: [
                t('And the children of Joseph spake unto Joshua, saying, Why hast thou given me but one lot and one portion to inherit, seeing I am a '),
                hy('great people', 'great-people'),
                t(', forasmuch as the LORD hath blessed me hitherto?'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And Joshua said unto them, If thou be a great people, then get thee up to the wood country, and cut down for thyself there in the land of the Perizzites and of the giants, if mount Ephraim be too narrow for thee.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the children of Joseph said, The hill is not enough for us: and all the Canaanites that dwell in the land of the valley have '),
                hy('chariots of iron', 'iron-chariots'),
                t(' — both they who are of Beth-shean and her towns, and they who are of the valley of Jezreel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh17-great-people',
          html:
            'Joseph&apos;s tribes do not complain about injustice; they complain about the size of their portion. "We are a great people," they say. Joshua does not argue with that. Instead, he exposes the contradiction: <em>If</em> you are great, <em>then act like it</em>. Go take the forest. Cut it down. Expand your own border. Do the work that greatness requires.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-barzel',
          title: 'Rekev Barzel — רְכֶב בַּרְזֶל — &ldquo;chariots of iron&rdquo;',
          script: 'רְכֶב בַּרְזֶל',
          translit: '<strong>rekev barzel</strong> · iron-wheeled war chariots; the technology of the age, a symbol of unstoppable force.',
          description:
            'Iron chariots were the ancient equivalent of armor and air support. They terrified foot soldiers. But David would face them too, and the point of 1 Samuel is not that David had better chariots — it is that he had better faith.',
        },
        {
          kind: 'christ',
          id: 'christ-iron-chariots',
          title: 'Christ Connection — He Drives Out the Iron Chariots',
          html:
            'Every age has its iron chariots — addictions, financial walls, impossible circumstances, voices that tell you to be afraid. "For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world" (Ephesians 6:12). Christ came to disarm them. Not by meeting force with force, but by breaking the hold they had on the human soul.',
        },
        {
          kind: 'carry',
          html:
            'It is easy to name what we don&apos;t have and blame it for our immobility. But Joshua does not accept the excuse. He does not say, "Yes, those chariots are terrible; let me give you somewhere else." He says, "You are great. Go do it anyway." The enemy in front of you is not an argument for why you should not move. It is the test of whether you will.',
        },
        {
          kind: 'reflection',
          id: 'iron-chariots-reflection',
          prompt:
            'What are the "iron chariots" in your life — the obstacles that feel too strong, the barriers that feel insurmountable? Do you believe Christ can drive them out? What would it look like to move forward as if He can?',
        },
      ],
    },

    /* ─── Joshua 17:17–18 — Joshua&apos;s Answer ────────────────────────── */
    {
      ref: 'Joshua 17:17–18',
      title: "Joshua&apos;s Word: The Mountain Is Yours",
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 17,
              spans: [
                t('And Joshua said unto the house of Joseph, even to Ephraim and to Manasseh, saying, Thou art a '),
                hp('great people', 'christ-power-to-possess'),
                t(', and hast great power: thou shalt not have one lot only:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('But the '),
                hp('mountain shall be thine', 'christ-power-to-possess'),
                t('; for it is a wood, and thou shalt cut it down: and the outgoings of it shall be thine: for thou shalt '),
                hy('drive out', 'yarash-possess'),
                t(' the Canaanites, though they have iron chariots, and though they be strong.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh17-joshua-answer',
          html:
            'Joshua does not sweet-talk them. He gives them work and a promise. The mountain is yours — cut it down. You shall drive out the Canaanites — not by might, but because I tell you that you can. Notice what Joshua does not do: he does not comfort them with smaller dreams. He does not negotiate down. He escalates: do harder work and believe a harder promise.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yarash',
          title: 'Yarash — יָרַשׁ — &ldquo;possess, inherit&rdquo;',
          script: 'יָרַשׁ',
          translit: '<strong>yarash</strong> · to take possession, to dispossess, to live in the land as its rightful heir.',
          description:
            'The verb runs through Joshua&apos;s entire commission. God gives the land; the people yarash it. Possession is not passive. It requires action, courage, and faith working together.',
        },
        {
          kind: 'christ',
          id: 'christ-power-to-possess',
          title: 'Christ Connection — Power to Possess',
          html:
            'Joshua&apos;s word echoes through the entire New Testament: "As many as received him, to them gave he power to become the sons of God" (John 1:12). Grace gives us the inheritance, but power — the dunamis, the ability, the boldness — comes from receiving it. We do not earn the land; but we must possess it. Christ does not do our work for us; He works in us and with us.',
        },
        {
          kind: 'carry',
          html:
            'When Joshua tells Joseph&apos;s tribes to cut down the forest and drive out the Canaanites, he is not telling them they are on their own. He is telling them that their own hands have work to do, and God will not do it for them. Effort is not the enemy of grace. It is the response to grace. You are not great by complaining about your portion. You are great when you move into the hard work of possession.',
        },
        {
          kind: 'reflection',
          id: 'possess-reflection',
          prompt:
            'Joshua says: "The mountain shall be thine; for it is a wood, and thou shalt cut it down." What is your mountain? What would it mean to stop complaining and start cutting?',
        },
      ],
    },
  ],
};
