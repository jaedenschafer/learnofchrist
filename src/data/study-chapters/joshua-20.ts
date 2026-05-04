import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 20 — Cities[res:bibleodyssey-cities-refuge][res:bibleodyssey-cities-refuge[res:intertextual-christ-high-priest-refuge]] of Refuge Established
 *
 * The Lord commands Joshua to appoint six cities of refuge—three west of the Jordan,
 * three east—where the manslayer who kills unwittingly may flee. At the gate he declares
 * his case; he is taken in and protected from the avenger of blood. He waits until the
 * death of the high priest[res:sefaria-high-priest-death], then returns free. The cities are distributed so no Israelite
 * is more than a day&apos;s journey away. The stranger too has refuge. What was commanded
 * in Numbers 35 and Deuteronomy 19 is now concrete and real: promises are kept in wood
 * and stone.
 *
 * Type: Christ is the refuge. His death releases the refugee.
 * Voice: Wonder at God&apos;s faithfulness; pastoral application to the reader&apos;s flight
 * toward Christ.
 */
export const JOSHUA_20: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 20,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 14 },
  topicTags: ['leadership', 'sovereignty', 'protection', 'faithfulness'],
  opener: {
    topical: true,
    caption: 'Joshua 20',
  },
  intros: [
    'Joshua 20 does something remarkable: it turns a law into a landscape. Decades earlier, at Sinai and at the border of Canaan, God commanded cities of refuge—places where the accidental killer could flee and live. Now, with the land finally divided among the tribes, Joshua makes it real. Six cities are named and set apart. The promise is kept.',
    'What makes this chapter pastoral is its distribution. The cities are spread north to south, east to west, so that every Israelite is within a day&apos;s journey of refuge. No one is far from help when the avenger of blood comes hunting. And remarkably, the refuge applies to the stranger too—the foreigner living among Israel. God&apos;s mercy has borders on a map, but not on kinship. For Hebrews reading this as a type of Christ, the picture is unmissable: Christ as our refuge, His death as the release, the gates of the city always open.',
  ],

  bottomShare: {
    label: 'Share Joshua 20',
    quote:
      'Six cities of refuge were set apart, gates open, so that whosoever killeth any person at unawares might flee thither and not die by the hand of the avenger. Christ is our refuge; His death is our release.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 20 · Study Guide',
  },

  sections: [
    /* ─── Joshua 20:1–3 — The Command and the Purpose ─────────────────────── */
    {
      ref: 'Joshua 20:1–3',
      title: 'The Refuge Commanded',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 1,
              spans: [
                t('The Lord also spake unto Joshua, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Speak to the children of Israel, saying, '),
                hp('Appoint out for you cities of refuge', 'c-refuge-appointed'),
                t(', whereof I spake unto you by the hand of Moses:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('That the '),
                hy('slayer that killeth any person unawares and unwittingly', 'hebrew-shogeg'),
                t(' may flee thither: and they shall be your refuge from the '),
                hg('avenger of blood', 'c-avenger'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-refuge-appointed',
          html:
            'The command to appoint cities of refuge echoes backward across decades. God gave the instruction at Sinai (Exodus 21), repeated it at the plains of Moab (Deuteronomy 19), and now Joshua carries it out. This is not an afterthought. A city of refuge was woven into the structure of Israel&apos;s life from the beginning. God does not teach law and then forget it; He waits for the right moment and makes it real in the land itself.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shogeg',
          title: 'Shogeg — "Unwittingly"',
          script: 'שׁוֹגֵג',
          translit: '<strong>shogeg</strong> · unaware, mistaken; distinguished from deliberate or malicious action',
          description:
            'The killer who acts shogeg has no intent to harm. The law makes room for the human heart. An accident is not murder. A moment of carelessness is not the same as hatred. God&apos;s mercy begins with the distinction between what you meant and what happened.',
        },
        {
          kind: 'commentary',
          id: 'c-avenger',
          html:
            'The avenger of blood—the kinsman with the duty and right to avenge murder—is a real figure in ancient law. The cities of refuge exist because blood demands justice, and relatives demand vengeance. The law channels both into safety: the accidental killer is protected from unlawful vengeance, and the murderer is not. Mercy and justice do not compete here; they work together.',
        },
        {
          kind: 'carry',
          html:
            'There are moments when you act without meaning to. A careless word, a thoughtless choice, a moment of distraction that changes everything. You cannot undo it, and now something pursues you—shame, consequences, the weight of what you set in motion. The very first thing God wants you to know is this: there is a city for that. Not a hiding place, but a refuge. A place where you can stop running and face what happened, where the pursuit is called off while the truth is determined.',
        },
        {
          kind: 'reflection',
          id: 'refuge-appointed',
          prompt:
            'Think of something you did without meaning to—an accident that mattered. What would it change if you knew there was a place designed for people exactly like you?',
        },
      ],
    },

    /* ─── Joshua 20:4–6 — The Procedure at the Gate ─────────────────────── */
    {
      ref: 'Joshua 20:4–6',
      title: 'Declare at the Gate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 4,
              spans: [
                t('And when he that doth flee unto one of those cities shall stand at the entering of the gate of the city, and shall '),
                hg('declare his cause in the ears of the elders', 'c-declare-gate'),
                t(' of that city, they shall take him into the city unto them, and give him a place that he may dwell among them.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And if the avenger of blood pursue after him, then they shall not deliver the slayer into his hand; because he smote his neighbour '),
                hy('unwittingly', 'hebrew-shogeg'),
                t(', and hated him not in time past.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And he shall dwell in that city, until he stand before the congregation for judgment, and until '),
                hp('the death of the high priest', 'c-high-priest-releases'),
                t(' that shall be in those days: then shall the slayer return, and come unto his own city, and his own house, unto the city from whence he fled.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-declare-gate',
          html:
            'The manslayer does not slip into the city unnoticed. He stands at the gate—the visible, public place—and declares his case to the elders. This is not hiding; it is confession. He speaks his cause. The elders hear him. And only then is he taken in. The pattern is profound: declare, be heard, be received. It is the pattern of the gospel itself.',
        },
        {
          kind: 'commentary',
          id: 'c-congregation-judgment',
          html:
            'The elders take him in immediately, but the verdict belongs to the congregation. He will stand before them for judgment. The city provides safety while the truth is determined. He is not judged in private; he is judged before the community. Justice is not hidden. It is open, witnessed, confirmed.',
        },
        {
          kind: 'christ',
          id: 'c-high-priest-releases',
          title: 'Christ Connection — The Death That Releases',
          html:
            'Hebrews 6:18 applies this image directly to Christ: "That by two immutable things, in which it was impossible for God to lie, we might have a strong consolation, who have fled for refuge to lay hold upon the hope set before us." The cities of refuge are a picture of Christ. And His death—the death of the High Priest—is the event that releases the refugee. You do not wait for time to pass or for your guilt to fade. You wait for His death—which has already happened. Once. Final. All-sufficient. "Nor yet that he should offer himself often… but now once in the end of the world hath he appeared to put away sin by the sacrifice of himself" (Heb. 9:26).',
        },
        {
          kind: 'carry',
          html:
            'You do not have to hide what you did. You do not have to carry it alone until someday you feel better or enough time has passed. You declare your case. You speak it out—to God, to a trusted person, to the congregation if the moment calls for it. And then you are not cast out; you are taken in. You are given a place. You dwell there—not as a prisoner, but as someone safe, someone known, someone waiting. And the release is not something you earn. It is someone else&apos;s death that frees you.',
        },
        {
          kind: 'reflection',
          id: 'declare-gate',
          prompt:
            'What would it take for you to declare your cause—to name what you did, not in shame but in truth? What would change if you knew that speaking it aloud was the first step into safety?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── Joshua 20:7–8 — The Cities Named: West of Jordan ────────────────── */
    {
      ref: 'Joshua 20:7–8',
      title: 'The Cities Set Apart: West of Jordan',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 7,
              spans: [
                t('And they appointed '),
                hg('Kedesh in Galilee in mount Naphtali', 'c-kedesh'),
                t(', and '),
                hg('Shechem in mount Ephraim', 'c-shechem'),
                t(', and '),
                hg('Kirjath-arba (which is Hebron) in the mountain of Judah', 'c-hebron'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And on the other side Jordan by Jericho eastward, they appointed '),
                t('Bezer in the wilderness upon the plain of the tribe of Reuben'),
                t(', and '),
                t('Ramoth in Gilead out of the tribe of Gad'),
                t(', and '),
                t('Golan in Bashan out of the tribe of Manasseh'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kedesh',
          html:
            'Kedesh lies in the far north, in Mount Naphtali. An Israelite living anywhere in that region—far from Jerusalem, far from the central sanctuary—would have a refuge within reach. The distribution is not haphazard; it is merciful.',
        },
        {
          kind: 'commentary',
          id: 'c-shechem',
          html:
            'Shechem is the ancient center of Israel, the place where Abraham first entered the promised land, where Joshua himself will later gather the people for covenant renewal. It is a place loaded with sacred weight. The refugee finds safety not in an obscure corner but in the heart of the people&apos;s story.',
        },
        {
          kind: 'commentary',
          id: 'c-hebron',
          html:
            'Hebron—Kirjath-arba—is where Abraham, Isaac, and Jacob are buried. It is the place of the patriarchs, the grave-house of God&apos;s covenant line. Even a manslayer can flee to the city of the patriarchs and find safety there. The sacred space is not reserved for the righteous alone.',
        },
        {
          kind: 'commentary',
          id: 'c-east-jordan',
          html:
            'Three cities west of Jordan, three cities east. The east side—the wilderness side—also receives refuge. No tribe is left without protection. No region is overlooked. The mercy is as widespread as the people.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-miqlat',
          title: 'Miqlat — "Refuge"',
          script: 'מִקְלָט',
          translit: '<strong>miqlat</strong> · a place of escape, shelter, protection',
          description:
            'The Hebrew word is concrete. It is not mercy in theory; it is mercy in a city you can walk to, a gate you can stand at, elders who will hear you. Grace is architectural. It is built into the landscape where you live.',
        },
        {
          kind: 'carry',
          html:
            'You are not far from refuge. Whatever region of your life you inhabit—your work, your family, your secret shame—there is a place meant for you. North, south, east, west. The cities span the whole territory. The distance is not greater than you can walk. If you knew this with your whole heart, would you still run forever?',
        },
        {
          kind: 'reflection',
          id: 'cities-distributed',
          prompt:
            'Which refuge feels closest to you right now—confession to a trusted friend, surrender to God, stepping into a community of faith? Name the city. Name the gate.',
        },
      ],
    },

    /* ─── Joshua 20:9 — For Stranger and Sojourner Too ──────────────────── */
    {
      ref: 'Joshua 20:9',
      title: 'Refuge for Stranger and Sojourner',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 9,
              spans: [
                t('These were the cities appointed for all the children of Israel, and for '),
                hy('the stranger that sojourned among them', 'c-stranger-included'),
                t(', that whosoever killeth any person at unawares might flee thither, and not die by the hand of the avenger of blood, until he stood before the congregation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stranger-included',
          html:
            'The refugee law applies to the stranger—the ger, the resident foreigner with no tribal affiliation, no blood kinship, no inheritance in the land. The refuge is not tribal. It is not a benefit reserved for Israel&apos;s own. A person who is not part of the covenant people has the same access to the city of refuge, the same right to declare his cause, the same protection while the truth is determined. God&apos;s mercy crosses the boundary of covenant. It extends to the outsider.',
        },
        {
          kind: 'christ',
          id: 'c-refuge-opens-outward',
          title: 'Christ Connection — The Refuge Opens Outward',
          html:
            "&quot;God so loved the world that he gave his only begotten Son&quot; (John 3:16). The cities of refuge in Joshua are a picture of Christ&apos;s death opening not to Israel alone but to the world. The gates are open to the stranger. &quot;Whosoever believeth in him should not perish, but have everlasting life.&quot; The refuge is not narrower in Christ than it was in Joshua. It is infinitely wider. Every person, from every place, every tradition, every failure—the refugee places are waiting.",
        },
        {
          kind: 'carry',
          html:
            'If you have felt like an outsider—outside the faith, outside the family, outside the community—the cities were designed for you too. You do not have to be born inside to find refuge. You do not have to speak the language perfectly or know the customs. The gate is open. Your declaration will be heard. The congregation will judge fairly. The mercy is not reserved.',
        },
        {
          kind: 'reflection',
          id: 'stranger-refuge',
          prompt:
            'Is there any part of yourself—any past, any origin, any outsiderness—you think disqualifies you from refuge? What if the opposite is true?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── The Theology at Work ──────────────────────────────────────────── */
    {
      ref: 'The Heart of Joshua 20',
      title: 'God&apos;s Promises Made Concrete',
      blocks: [
        {
          kind: 'commentary',
          id: 'c-promise-kept',
          html:
            'Joshua 20 is a record of faithfulness. God commanded the cities decades before. Now they are real. You can stand at their gates. The promise has moved from words spoken in the wilderness to stone and timber in the land. For Israelites reading this account, it is a reminder: when God says something will be yours, it will be. The road was long. The desert was real. But the destination was never in doubt.',
        },
        {
          kind: 'commentary',
          id: 'c-mercy-structured',
          html:
            'What is remarkable is how mercy is structured. It is not haphazard. It is not based on feelings or moods. The cities are appointed. The procedure is set. The rules are written down. You can know in advance: if this happens, there is a place. God builds mercy into the architecture of a people&apos;s life. He does not leave it to chance.',
        },
        {
          kind: 'commentary',
          id: 'c-high-priest-releases-all',
          html:
            'The death of the high priest releases all the refugees—every manslayer waiting in every city, all on the same day. One death. Universal release. It is a stunning image of atonement. It is the reason Hebrews picks this chapter up and says: Christ is the High Priest. His death is the event that releases everyone.',
        },
        {
          kind: 'christ',
          id: 'c-six-cities-christ',
          title: 'Christ Connection — Christ as Our Refuge',
          html:
            'Jesus embodies every role in this chapter. He is the city itself—the place to flee to. "Come unto me, all ye that labour and are heavy laden, and I will give you rest" (Matt. 11:28). He is the gate where you declare your cause. "If we confess our sins, he is faithful and just to forgive us our sins" (1 John 1:9). He is the congregation that judges fairly, knowing your heart. He is the High Priest whose death releases you. He is the one who knows the difference between accident and malice, between shogeg and intent. And His death does not release just Israel; it releases the world. "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord" (Rom. 6:23).',
        },
        {
          kind: 'carry',
          html:
            'You do not have to wait for the next death of a high priest. That death has already happened. Christ&apos;s death is past. If you have fled to Him for refuge, if you have declared your cause at His gate, the release is already yours. You do not have to wait. You do not have to earn it. You do not have to understand it perfectly. The city is appointed. The gate is open. The congregation has judged. You are free.',
        },
        {
          kind: 'reflection',
          id: 'christ-refuge-full',
          prompt:
            'How do you most need Christ as refuge right now—as a gate to declare at, as a judge who knows your heart, as the death that has already released you? Sit with that.',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-high-priest-death',
      kind: 'study',
      source: 'Sefaria',
      label: 'The High Priest&apos;s Death as Release',
      url: 'https://www.sefaria.org/Numbers.35?lang=bi',
      description: 'The law governing cities of refuge and how the death of the high priest releases those who fled for protection.',
    },
    {
      id: 'intertextual-christ-high-priest-refuge',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Christ as High Priest and Refuge (Joshua to Hebrews)',
      url: 'https://intertextual.bible/search?q=high+priest+death+refuge+hebrews+christ+atonement',
      description: 'How the cities of refuge and the high priest&apos;s death prefigure Christ as both our refuge and the High Priest whose death releases all from sin.',
    },
  ],
};
