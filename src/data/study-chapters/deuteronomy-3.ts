import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Deuteronomy 3 — Moses recounts the conquest of Og, king of Bashan , and the
 * distribution of land east of the Jordan to Reuben, Gad, and half-Manasseh.
 * Moses charges Joshua and the eastern tribes. Then Moses prays for permission
 * to enter Canaan, but God denies him and instead grants him the vision from
 * Pisgah. A chapter about vision without possession, and the trust required
 * when God answers differently than we ask.
 *
 * DOCTRINAL ANCHORS:
 * - Fear him not: Conquest begins with God's word against fear.
 * - Memory as fuel: Joshua looks back to look forward.
 * - Ministry transitions: Even great servants pass the baton.
 * - Pisgah-vision: Seeing what we cannot enter, trusting in God's faithfulness
 *   through others.
 */
export const DEUTERONOMY_3: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 3,

  estimatedMinutes: { beginner: 9, intermediate: 16, deep: 19 },
  intros: [
    'Deuteronomy 3 is Moses recounting the recent past — victories the people watched God win. Israel turned northward from Ammon into Bashan. Og, the last of the giants, came out to meet them at Edrei with his whole army. The Lord told Moses: "Fear him not." They struck him, his sons, and all his people. They took sixty fortified cities of Bashan — "fenced cities with high walls, gates, and bars, beside unwalled towns a great many." Cattle and spoil became Israel&apos;s.',
    'Then the text pauses to describe Og&apos;s bedstead. He was the last of the great giants, and his iron bedstead was nine cubits long and four cubits wide — over thirteen feet by six — evidence of a world before the flood when humans were different, stronger, larger. But even this last of the old giants fell before the people who trusted in the name of the Lord.',
    'The land east of Jordan was divided among Reuben, Gad, and half-Manasseh — a detailed geography of boundaries and cities. These tribes chose the easier path, the land already conquered, and did not cross into Canaan proper. But the men of war would cross with their brothers. Then Moses gave a charge to Joshua: you have seen what the Lord did to Sihon and Og. The Lord will do the same to all the kingdoms where you go.',
    'But then Moses prayed. "O Lord God, thou hast begun to show thy servant thy greatness and thy mighty hand… let me go over, I pray thee, and see the good land that is beyond Jordan." God was wroth with Moses and would not hear him. "Speak no more unto me of this matter." Moses must go up Mount Pisgah and see the land, but he cannot enter it. Instead, he must charge Joshua, encourage him, strengthen him. The work belongs to God, not to one man. And the vision from Pisgah is a strange mercy — to see what you cannot possess, and to trust that what God promises, He will fulfill through others.',
  ],

  bottomShare: {
    label: 'Share Deuteronomy 3',
    quote:
      'Moses told Joshua: "Thine eyes have seen all that the Lord thy God hath done unto these two kings: so shall the Lord do unto all the kingdoms whither thou goest." Then Moses was denied his deepest prayer, but given a vision and a successor.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 3 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-deuteronomy-3',
      kind: 'study',
      source: 'Sefaria [res:sefaria-deuteronomy-3]',
      label: 'Deuteronomy 3 — Giants and Succession',
      url: 'https://www.sefaria.org/Deuteronomy.3',
      description: 'Medieval and modern Jewish commentary on the defeat of Og, the last giant, and Moses&apos; vision from Pisgah.',
    },
    {
      id: 'bashan-archaeology-oriental-institute',
      kind: 'archaeology',
      source: 'Oriental Institute',
      label: 'Bashan Archaeological Survey',
      url: 'https://oi.uchicago.edu/',
      description: 'Archaeological research on the Iron Age kingdoms of Bashan, including fortified cities mentioned in Deuteronomy 3.',
    },
    {
      id: 'ogog-bedstead-ancient-giants-rephaim',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Giants — Rephaim, Anakim, Emim',
      url: 'https://www.bibleodyssey.org/dictionary/giants/',
      description: 'Open-access entry on the giants of Canaan and their role in ancient Near Eastern geography and conquest narratives.',
    },
  ],

  sections: [
    /* ─── Deuteronomy 3:1–7 — The Defeat of Og, King of Bashan ──────────── */
    {
      ref: 'Deuteronomy 3:1–7',
      title: 'The Defeat of Og',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(1,
              t('Then we turned, and went up the way to Bashan: and Og the king of Bashan came out against us, he and all his people, to battle at Edrei.')
            ),
            verse(2,
              t('And the Lord said unto me, '),
              hp('Fear him not', 'fear-not-og'),
              t(': for I have delivered him, and all his people, and his land, into thy hand; and thou shalt do unto him as thou didst unto Sihon king of the Amorites, which dwelt at Heshbon.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'fear-not-og',
          html:
            'Before the battle, God speaks: "Fear him not." This is the grammar of conquest in Deuteronomy — the Lord does not give victory to courage or military prowess first. He first removes fear by promising the outcome. Every great thing Israel does in the Promised Land begins not with their strength, but with God&apos;s word saying, do not be afraid[res:bashan-archaeology-oriental-institute][res:ogog-bedstead-ancient-giants-rephaim].',
        },
        {
          kind: 'christ',
          id: 'christ-fear-not',
          title: 'Christ Connection — "Fear Them Not"',
          html:
            'Jesus spoke the same words to His disciples: "Fear them which kill the body, but are not able to kill the soul" (Matthew 10:28). And in the garden, He told Peter, "Put up thy sword... Thinkest thou that I cannot now pray to my Father, and he shall presently give me more than twelve legions of angels?" (Matthew 26:52-53). The voice that said "Fear him not" to Israel in the wilderness says the same to every believer who trusts in Him. The outcome is not in doubt.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(3,
              t('So the Lord our God delivered into our hands Og also, the king of Bashan, and all his people: and we '),
              hg('smote him until none was left to him remaining', 'og-defeat'),
              t('.')
            ),
            verse(4,
              t('And we took all his cities at that time, there was not a city which we took not from them, '),
              hy('threescore cities', 'bashan-cities'),
              t(', all the region of Argob, the kingdom of Og in Bashan.')
            ),
            verse(5,
              t('All these cities were '),
              hy('fenced with high walls, gates, and bars', 'fortified-cities'),
              t(', beside unwalled towns a great many.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'og-defeat',
          html:
            'Og is defeated completely. "None was left to him remaining." Bashan, the rich plains north of Gilead, was known for its cattle and its fertility. But it was also known as the place of the giants — and now the last of the giants has fallen.',
        },
        {
          kind: 'hebrew',
          id: 'bashan-cities',
          title: 'Argob — the region of the high country',
          script: 'ארגב',
          translit: '<strong>Argob</strong> · a rough, rocky highland',
          description:
            'The region of Argob was known for its volcanic basalt, its rugged terrain, and its fortified cities. Sixty cities of Argob, all conquered. The conquest is total.',
        },
        {
          kind: 'commentary',
          id: 'fortified-cities',
          html:
            'These were not towns that could be easily taken. They were fortified — high walls, gates, bars. Unwalled towns were many as well. All of them were taken. The victory is not because Israel was mightier, but because the Lord had delivered them.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(6,
              t('And we utterly destroyed them, as we did unto Sihon king of Heshbon, utterly destroying the men, women, and children, of every city.')
            ),
            verse(7,
              t('But all the cattle, and the spoil of the cities, we took for our prey.')
            ),
          ],
        },
        {
          kind: 'carry',
          html:
            'When you face something that looks giant — impossible circumstance, an enemy that seems unbeatable, a fear that paralyzes — the first word from God is always the same: do not be afraid. Not "you are stronger than you think." Not "try harder." But "I have already delivered this into your hand." Fear loses its grip when the outcome is assured. What does your giant look like today? What would change if you actually believed God had already won?',
        },
        {
          kind: 'reflection',
          id: 'reflection-fear-not',
          prompt: 'What giant are you facing right now? What would it mean to say, with Israel, "the Lord delivered it into our hands"?',
        },
      ],
    },

    /* ─── Deuteronomy 3:8–11 — Og&apos;s Bedstead; The Land Allotted ───────────── */
    {
      ref: 'Deuteronomy 3:8–11',
      title: 'The Last of the Giants',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(8,
              t('And we took at that time out of the hand of the two kings of the Amorites the land that was on this side Jordan, from the river Arnon unto mount Hermon;')
            ),
            verse(9,
              t('(Which Hermon the Sidonians call Sirion; and the Amorites call it Senir;)')
            ),
            verse(10,
              t('All the cities of the plain, and all Gilead, and all Bashan, unto Salcah and Edrei, cities of the kingdom of Og in Bashan.')
            ),
            verse(11,
              t('For only Og king of Bashan remained of the remnant of '),
              hy('giants', 'rephaim-giants'),
              t('; behold his bedstead was a '),
              hy('bedstead of iron', 'iron-bed-measurement'),
              t('; is it not in Rabbath of the children of Ammon? nine cubits was the length thereof, and four cubits the breadth of it, after the cubit of a man.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'rephaim-giants',
          title: 'Rephaim — the giants',
          script: 'רפאים',
          translit: '<strong>Rephaim</strong> · the giants; the departed spirits (in a different sense)',
          description:
            'The Rephaim were the giants of Canaan — the old, strong ones who inhabited the land before Israel. Og is the last of them. His iron bedstead, left as a monument, is evidence of a world before the flood when men lived longer and grew larger. But even the last giant falls before a people trusting in the Lord.',
        },
        {
          kind: 'commentary',
          id: 'iron-bed-measurement',
          html:
            'The text lingers on the measurement of Og&apos;s bedstead. Nine cubits long — roughly thirteen feet. Four cubits wide — about six feet. These are the dimensions of a man who was not like other men. He was the last of an ancient kind. Yet he fell. The bedstead itself became a monument in Rabbath of the Ammonites, a memorial to Israel&apos;s victory. What looks impossible is always smaller than the God who defeats it.',
        },
        {
          kind: 'carry',
          html:
            'Og&apos;s bedstead was left as a memorial — a physical reminder that the giant had fallen. Sometimes God leaves memorials in our lives too. A relationship healed. A fear overcome. A prayer answered. A season passed through. These are the bedsteads of our giants — not monuments to our strength, but monuments to God&apos;s faithfulness. What giant have you overcome that now serves as a memorial to His power in your life?',
        },
      ],
    },

    /* ─── Deuteronomy 3:12–20 — The Eastern Tribes and the Charge ──────────── */
    {
      ref: 'Deuteronomy 3:12–20',
      title: 'The Land East of Jordan; Moses Charges the Eastern Tribes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(12,
              t('And this land, which we possessed at that time, from Aroer, which is by the river Arnon, and half mount Gilead, and the cities thereof, gave I unto the Reubenites and to the Gadites.')
            ),
            verse(13,
              t('And the rest of Gilead, and all Bashan, being the kingdom of Og, gave I unto the half tribe of Manasseh; (all the region of Argob, with all Bashan, was called the land of the Rephaim;)')
            ),
            verse(14,
              t('Jair the son of Manasseh took all the country of Argob unto the coasts of Geshurites and Maachathites; and called them after his own name, Bashan-havoth-jair, unto this day.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'eastern-allotment',
          html:
            'Reuben, Gad, and half-Manasseh chose the land east of Jordan. It was already conquered, already settled, already known. It is the easier way. But the choice has consequences — they will not inherit the promise proper, the land of Canaan itself. They chose rest over inheritance .',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(15,
              t('And I gave Gilead unto Machir.')
            ),
            verse(16,
              t('And unto the Reubenites and to the Gadites I gave from Gilead even unto the river Arnon half the valley, and the border even unto the river Jabbok, which is the border of the children of Ammon;')
            ),
            verse(17,
              t('The plain also, and Jordan, and the coast thereof, from Chinnereth even unto the sea of the plain, even the salt sea, under '),
              hy('Ashdoth-pisgah', 'pisgah-eastward'),
              t(' eastward.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'pisgah-eastward',
          title: 'Pisgah — the summit; the cleft',
          script: 'פסגה',
          translit: '<strong>Pisgah</strong> · a summit or height, often meaning a cleft or ridge',
          description:
            'Pisgah is the mountain from which Moses will later view the Promised Land that he cannot enter. The name suggests a cleft, a splitting — a place between. Moses will stand between the wilderness and the Promise, seeing but not entering.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(18,
              t('And I commanded you at that time, saying, The Lord your God hath given you this land to possess it: '),
              hy('ye shall pass over armed', 'armed-crossing'),
              t(' before your brethren the children of Israel, all that are meet for the war.')
            ),
            verse(19,
              t('But your wives, and your little ones, and your cattle, (for I know that ye have much cattle,) shall abide in your cities which I have given you;')
            ),
            verse(20,
              t('Until the Lord have given rest unto your brethren, as well as unto you, and until they also possess the land which the Lord your God hath given them beyond Jordan: and then shall ye return unto your possessions, and enjoy it, which I have given you.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'armed-crossing',
          html:
            'Moses gives a charge: the men of war from Reuben, Gad, and Manasseh must not stay in their easy land. They must cross the Jordan armed, ahead of their brothers, until the conquest is complete. Even those who chose the lesser inheritance are still part of the people. Even those who rest must serve. The charge is clear: your rest does not come at the expense of your brothers&apos; struggle.',
        },
        {
          kind: 'carry',
          html:
            'Some choices make life easier in the moment but require more from us in the long run. The eastern tribes had good land, but they had to cross the Jordan with drawn swords to help their brothers conquer. Sometimes what we think is rest becomes labor. Sometimes what looks like choosing less means we give more. The true measure of a choice is not whether it is easy, but whether it honors the covenant and the people.',
        },
        {
          kind: 'reflection',
          id: 'reflection-covenant-labor',
          prompt: 'Where are you choosing what looks easier, and what might that choice cost you or those you love in the long run?',
        },
      ],
    },

    /* ─── Deuteronomy 3:21–22 — Moses Charges Joshua ──────────────────────── */
    {
      ref: 'Deuteronomy 3:21–22',
      title: 'Moses Charges Joshua: "Fear Them Not"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(21,
              t('And I commanded Joshua at that time, saying, '),
              hp('Thine eyes have seen all that the Lord your God hath done unto these two kings', 'joshua-eyes-seen'),
              t(': so shall the Lord do unto all the kingdoms whither thou passest.')
            ),
            verse(22,
              t('Ye shall not '),
              hp('fear them', 'joshua-fear-not'),
              t(': for the Lord your God he shall fight for you.')
            ),
          ],
        },
        {
          kind: 'christ',
          id: 'joshua-eyes-seen',
          title: 'Christ Connection — The Past as Fuel for the Future',
          html:
            'Memory is one of Scripture&apos;s most powerful spiritual weapons. Joshua is told: you have seen what the Lord did. What you have witnessed becomes the ground of what you will trust. Hebrews builds on this: "Therefore, seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us, looking unto Jesus the author and finisher of our faith" (Hebrews 12:1-2). The past faithfulness of God is not history — it is prophecy. If He did it then, He will do it again. Joshua looks back to look forward.',
        },
        {
          kind: 'commentary',
          id: 'joshua-fear-not',
          html:
            'The same word that came to Moses comes to Joshua: "Fear them not." This is the word of succession. Moses is passing leadership to someone younger, someone who did not lead the wilderness, someone who will lead the conquest. But the word stays the same. The power does not flow from the leader — it flows from the Lord. Joshua does not inherit Moses&apos; strength. He inherits the promise that the Lord fights for Israel.',
        },
        {
          kind: 'carry',
          html:
            'Every believer stands where Joshua stood — looking at a promise that seems impossible, looking at enemies that seem stronger than we are, looking for a reason to trust. The Psalms say it again and again: "O taste and see that the Lord is good" (Psalm 34:8). Taste — experience — His faithfulness once, and it becomes the ground of all future faith. What has God done that you need to remember today?',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'reflection-memory-fuel',
          prompt: 'What past faithfulness of God have you tasted or seen? How could that memory fuel your faith for what&apos;s ahead?',
        },
      ],
    },

    /* ─── Deuteronomy 3:23–27 — Moses Prays; God Denies ────────────────────── */
    {
      ref: 'Deuteronomy 3:23–27',
      title: 'Moses Prays; God Says "No"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(23,
              t('And I '),
              hp('besought the Lord at that time', 'moses-prays'),
              t(', saying,')
            ),
            verse(24,
              t('O Lord God, thou hast begun to show thy servant thy greatness, and thy mighty hand: for what God is there in heaven or in earth, that can do according to thy works, and according to thy might?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'moses-prays',
          html:
            'Moses prays. He has led the people for forty years through the wilderness. He has seen God work again and again. Now, at the edge of the Promise, his heart breaks with longing. "Let me go over and see the good land." This is the prayer of a man who has given everything and now asks for one thing — to enter what he has labored to make possible for others.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(25,
              t('I pray thee, let me go over, and see the good land that is beyond Jordan, that goodly mountain, and Lebanon.')
            ),
            verse(26,
              t('But the Lord was wroth with me for your sakes, and '),
              hg('hearkened not unto me', 'denied-prayer'),
              t(': and the Lord said unto me, '),
              hp('Let it suffice thee', 'gods-no-answer'),
              t('; '),
              hp('speak no more unto me of this matter', 'gods-no-answer'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'denied-prayer',
          html:
            'God does not grant the prayer. Moses prayed once; God could deny it gently. But Moses asked again, and the text says the Lord was "wroth" — angry. The moment to accept the denial had passed. Now God speaks with finality: "Speak no more unto me of this matter." Some prayers are not answered yes. Some are answered no, and the answer stands. This is one of the hardest lessons in Scripture — that even the greatest servants of God cannot have everything, and that grace sometimes means accepting a no from the One who loves us most.',
        },
        {
          kind: 'christ',
          id: 'gods-no-answer',
          title: 'Christ Connection — The Cup That Cannot Pass',
          html:
            'Jesus prayed in Gethsemane: "O my Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt" (Matthew 26:39). The cup did not pass. The prayer was denied. Yet Jesus accepted the denial and went to the cross — not because He wanted to, but because the Father&apos;s will was greater than His own desire. Moses, like Jesus, accepts the no. And both find that God&apos;s answer, though not what they asked for, is more merciful than their request.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(27,
              t('Get thee up into the top of '),
              hy('Pisgah', 'pisgah-vision-place'),
              t(', and lift up thine eyes westward, and northward, and southward, and eastward, and behold it with thine eyes: for thou shalt not go over this Jordan.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'pisgah-vision-place',
          title: 'Pisgah — the summit where vision happens',
          script: 'פסגה',
          translit: '<strong>Pisgah</strong> · a cleft; a place between',
          description:
            'Pisgah is a threshold. Moses will stand on a mountain between the wilderness and the Promised Land, seeing what he cannot enter. It is a strange mercy — not what he asked for, but not abandonment either. God does not give him Canaan, but He gives him vision. He gives him the gift of seeing what will be.',
        },
        {
          kind: 'commentary',
          id: 'pisgah-vision-denied',
          html:
            'God does not leave Moses without mercy. He says: go to Pisgah. You will see the land. You will see it with your eyes. You will not enter it, but you will behold it. This is a strange grace — the grace of vision without possession. The grace of seeing what you cannot have, and trusting that what God promised will come to pass through others. It is the grace of surrender.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes God says no, and the no is final. Sometimes He calls us to see what we cannot have, to labor for what we will not possess, to build for others what we ourselves will not inhabit. This is not cruelty. It is maturity. It is the way God teaches us to love beyond ourselves, to work for the Promise even when we will not taste it, to lay down our own desire for the sake of those who come after us. Where is God asking you to climb a mountain and see a promise you won&apos;t possess, but others will?',
        },
        {
          kind: 'reflection',
          id: 'reflection-pisgah-vision',
          prompt: 'What promise have you labored toward that you may not see fulfilled? What does it mean to see it with your eyes and trust God anyway?',
        },
      ],
    },

    /* ─── Deuteronomy 3:28–29 — "Charge Joshua" ────────────────────────────── */
    {
      ref: 'Deuteronomy 3:28–29',
      title: 'Charge Joshua; Encourage Him; Strengthen Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(28,
              t('But '),
              hg('charge Joshua', 'charge-joshua-word'),
              t(', and '),
              hg('encourage him', 'encourage-joshua'),
              t(', and '),
              hg('strengthen him', 'strengthen-joshua'),
              t(': for he shall go over before this people, and he shall cause them to inherit the land which thou shalt see.')
            ),
            verse(29,
              t('So we abode in the valley over against Beth-peor.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'charge-joshua-word',
          html:
            'God does not let Moses grieve forever. Instead, He redirects Moses&apos; leadership gift to Joshua. "Charge him." The work is not over — it is being handed on. The conquest will happen. The Promise will be entered. But not by Moses. By Joshua.',
        },
        {
          kind: 'commentary',
          id: 'encourage-joshua',
          html:
            'Three times the word comes: charge, encourage, strengthen. The repetition shows the weight of it. Joshua is young. Joshua has not yet led in conquest. Joshua will face giants and walled cities and doubt. He needs to be encouraged. He needs to be strengthened. The greatest gift a leader can give is to pass on the work with confidence, not with hesitation or fear.',
        },
        {
          kind: 'commentary',
          id: 'strengthen-joshua',
          html:
            'The word "strengthen" means to make firm, to make strong. Not by Moses&apos; own power, but by the work of the Lord. Joshua will be strengthened as he trusts the Lord who has already delivered Sihon and Og into Israel&apos;s hands. The formula for Joshua&apos;s strength is the same as Israel&apos;s: remembrance of past faithfulness, and trust in present promise.',
        },
        {
          kind: 'carry',
          html:
            'There is a kind of love that says, "The work is bigger than I am, and I am glad. I have done my part, and now I pass it on to you with gladness and blessing." This is what Moses does. He looks at the land he cannot enter, and instead of bitterness, he says to Joshua: you will do this. You will lead them. You will see it come to pass. The greatest act of leadership is not to hold on, but to let go, and to bless those who come after us. Where has God asked you to pass the work on?',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'reflection-passing-work',
          prompt: 'What work or dream has God asked you to pass on to someone else? How do you bless them as they take what you have labored for?',
        },
      ],
    },
  ],
};
