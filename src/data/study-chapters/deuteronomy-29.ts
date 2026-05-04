import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 29 — The Second Covenant in Moab
 *
 * Moses gathers all Israel to renew the covenant made at Horeb. The chapter
 * opens with recollection of God's mighty acts in Egypt and the wilderness,
 * acknowledges that God has not yet given hearts to perceive, and extends
 * the covenant promise not only to those standing present but to generations
 * not yet born — including all who read these words. A stern warning against
 * idolatry and self-deception closes the chapter. The whole passage whispers
 * the longing for the new covenant: a heart given to know God.
 */
export const DEUTERONOMY_29: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 29,

  estimatedMinutes: { beginner: 7, intermediate: 13, deep: 17 },
  topicTags: ['covenant', 'faithfulness', 'leadership', 'love'],
  opener: {
    topical: true,
    caption: 'Deuteronomy 29',
  },
  intros: [
    'Deuteronomy 29 is Moses&apos; grand re-covenant moment. After forty years in the wilderness, Israel stands on the threshold of the promised land. Moses calls the whole nation — captains and wood-hewers, elders and children, men and wives — to renew the covenant made at Horeb. But this is not a simple replay. Moses tells them plainly: God has shown you His mighty hand, yet "the Lord hath not given you an heart to perceive." This honest acknowledgment of spiritual blindness sets up the chapter&apos;s deepest hope: the longing for a new covenant where God himself will give the heart.',
    'The covenant Moses calls them to includes not only those standing there but generations yet unborn — "him that is not here with us this day." In other words, the promise reaches to us. Then comes the warning: the root that bears gall and wormwood, the one who blesses himself in his heart while turning to serve other gods. The chapter ends with the great humility of verse 29: "The secret things belong unto the Lord our God: but those things which are revealed belong unto us and to our children for ever, that we may do all the words of this law." Obedience to what is revealed, and trust in what remains hidden.',
  ],

    resources: [
    {
      id: 'sefaria-deuteronomy-29',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 29',
      url: 'https://www.sefaria.org/Deuteronomy.29',
      description: 'Open-access source text and rabbinic commentary on the covenant renewal assembly [res:sefaria-deuteronomy-29] where all Israel affirms the covenant with God.',
    },
    {
      id: 'idolatry-secret-roots-apostasy-hidden-heart',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Hidden Idolatry and the Danger of Secret Apostasy',
      url: 'https://www.intertextual.bible/',
      description: 'Traces the theme of internal apostasy [res:idolatry-secret-roots-apostasy-hidden-heart] where the heart may turn to false gods even while external covenant observance appears intact.',
    },
  ],

  sections: [
    /* ─── Deuteronomy 29:1–8 — The Second Covenant in Moab ───────────────── */
    {
      ref: 'Deuteronomy 29:1–8',
      title: 'The Second Covenant in Moab',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 1,
              spans: [
                t('These are the words of the covenant, which the Lord commanded Moses to make with the children of Israel in the land of Moab, '),
                hg('beside the covenant which he made with them in Horeb', 'covenant-second'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'covenant-second',
          html:
            'The word "beside" here means "in addition to," not "instead of." This covenant does not replace Horeb — it renews and deepens it. Horeb was the thunder and the fire, the terror of God&apos;s presence. Here, after forty years of God&apos;s faithfulness in the wilderness, Moses gathers Israel again to say: this is still your God. This covenant still holds.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 2,
              spans: [
                t('And Moses called unto all Israel, and said unto them, Ye have seen '),
                hg('what the Lord did before your eyes in the land of Egypt', 'egypt-works'),
                t(' unto Pharaoh, and unto all his servants, and unto all his land; The great temptations which thine eyes have seen, the signs, and those great miracles:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'egypt-works',
          html:
            'Moses does not ask them to believe in the future. He asks them to remember what they already witnessed. The plagues, the parting of the sea, the pillar of fire — these are not stories their grandparents told. They are memories their own eyes hold. The whole foundation of covenant renewal is: God has already proven Himself.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 4,
              spans: [
                t('Yet the Lord hath not given you an heart to perceive, and '),
                hp('eyes to see, and ears to hear, unto this day', 'heart-perceive'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'heart-perceive',
          html:
            'This is the most honest statement in the chapter. Israel has *seen* the works of God. Yet seeing is not the same as perceiving. Eyes and ears have limits. What God is saying through Moses is this: you have witnessed My power, yet that witness alone has not given you the heart to understand what it means, to trust what it promises. Only God can give that heart. This verse anticipates the whole longing of Jeremiah 31 and Ezekiel 36 — the new covenant promise: "I will give them an heart to know me."',
        },
        {
          kind: 'christ',
          id: 'christ-heart',
          title: 'Christ Connection — "I Will Give Them an Heart"',
          html:
            'Jeremiah 31:33 speaks for God: "I will put my law in their inward parts, and write it in their hearts." Ezekiel 36:26 adds: "A new heart also will I give you, and a new spirit will I put within you… and I will cause you to walk in my statutes." The gift Moses says is missing — the heart to perceive — is exactly the gift Christ&apos;s covenant brings. What the law alone cannot do (give the heart), the Spirit of Christ does. This is the gospel whispered in Deuteronomy&apos;s honesty about human blindness.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 5,
              spans: [
                t('And I have led you forty years in the wilderness: your clothes are not waxen old upon you, and thy shoe is not waxen old upon thy foot. Ye have not eaten bread, neither have ye drunk wine or strong drink: '),
                hg('that ye might know that I am the Lord your God', 'know-lord'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'know-lord',
          html:
            'The wilderness was not punishment alone — it was a classroom. Every need met, every step sustained, clothes that did not wear, sandals that did not fail. In the desert, where natural supply lines collapse, God became their only source. That knowledge — <em>the knowing itself</em> — is what the forty years taught.',
        },
        {
          kind: 'carry',
          html:
            'What Moses is saying applies to any long season where God is your only visible support. The job loss that lasted longer than you expected, the illness that didn&apos;t heal quickly, the season when the only thing that worked was trusting Him. Those years teach you something no shorter path could: not just what God can do, but who He is. Whatever wilderness you are in now is not wasted.',
        },
        {
          kind: 'reflection',
          id: 'wilderness',
          prompt:
            'What did a long, hard season teach you about who God actually is? What would you have missed if God had solved it faster?',
        },
      ],
    },

    /* ─── Deuteronomy 29:9–15 — All Gathered, Present and Future ──────────── */
    {
      ref: 'Deuteronomy 29:9–15',
      title: 'All Gathered — Present and Future',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 10,
              spans: [
                t('Ye stand this day all of you before the Lord your God; your captains of your tribes, your elders, and your officers, with all the men of Israel, Your little ones, your wives, and thy stranger that is in thy camp, from the hewer of thy wood unto the drawer of thy water:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'all-gathered',
          html:
            'The covenant list is absolute: captains and elders; men and little ones; wives and strangers and the lowest servant (hewer of wood, drawer of water). Every social rank, every age, every outsider within the camp — all stand together before God. In this moment, covenant levels all hierarchy. A stranger has the same standing before God as an elder.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 11,
              spans: [
                t('To enter into covenant with the Lord thy God, and into his oath, which the Lord thy God maketh with thee this day:'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 14,
              spans: [
                t('Neither with you only do I make this covenant and this oath; But '),
                hp('with him that standeth here with us this day before the Lord our God, and also with him that is not here with us this day', 'future-gens'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'future-gens',
          html:
            'This is the heartbeat of the chapter. The covenant is not sealed just with those standing in Moab. It reaches beyond them — to generations not yet born. It reaches to us. We are the ones "not here with us this day" who are now reading these words. The promise is not merely a historical relic; we inherit it as our own covenant with God.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-berit',
          title: 'Berit — "Covenant"',
          script: 'בְּרִית',
          translit: '<strong>berit</strong> · a binding agreement sealed in flesh',
          description:
            'Berit comes from a root meaning "to cut" — covenants were sealed by cutting an animal in half and walking between the pieces. It speaks of a bond cut into flesh, not mere words. This is why "covenant" matters more than "contract." It is a bonding of persons.',
        },
        {
          kind: 'carry',
          html:
            'The fact that you are reading this study guide means you stand in the same covenant Moses called Israel to. The promise does not expire with the generation that heard it first. It extends to you. Whatever specific word God is speaking to Israel in Deuteronomy, He is also speaking it to you — not by accident, but by the structure of the covenant itself.',
        },
        {
          kind: 'reflection',
          id: 'my-covenant',
          prompt:
            'What does it change in your prayer or your obedience to know that when Moses speaks to Israel, he is also speaking to you? How does that make the covenant personal rather than ancient?',
        },
      ],
    },

    /* ─── Deuteronomy 29:16–21 — Idolatry and the Self-Blessing Lie ───────── */
    {
      ref: 'Deuteronomy 29:16–21',
      title: 'The Root That Bears Gall and Wormwood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 16,
              spans: [
                t('(For ye know how we have dwelt in the land of Egypt; and how we came through the midst of the nations which ye passed by; And ye have seen their abominations, and their '),
                hy('idols, wood and stone, silver and gold', 'rosh-bitterness'),
                t(', which were among them:)'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rosh-bitterness',
          html:
            'The word "idols" here is literally false gods — but Moses catalogs their substance: wood, stone, silver, gold. Things made by human hands. Things that cannot speak, see, or move. The point is not subtle: you have walked through nations and watched men bow to objects.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 17,
              spans: [
                t('Lest there should be among you man, or woman, or family, or tribe, whose heart turneth away this day from the Lord our God, to go and '),
                hp('serve the gods of those nations', 'gall-wormwood'),
                t('; lest there should be among you a root that beareth '),
                hy('gall and wormwood', 'hebrew-rosh'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gall-wormwood',
          html:
            'The image is of a poisoned root planted in the soil of the community. One heart that turns away becomes a plant that spreads poison to the whole. This is not abstract. In a small covenant community where everyone eats from the same well, where the spirit of faithfulness shapes the culture, one person&apos;s apostasy becomes everyone&apos;s temptation.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-rosh',
          title: 'Rosh — "Root" (of bitterness)',
          script: 'רֹאשׁ',
          translit: '<strong>rosh</strong> · head, beginning, root; here root of poison',
          description:
            'Rosh means "head" or "beginning." As a root, it is what begins — the starting point of poison. Bitterness grows from what begins in the heart. This is why the root that bears gall matters: it is a spiritual beginning, a turning, that spreads into a whole life.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 18,
              spans: [
                t('Who hath a heart to turn away from the Lord our God, to go and serve the gods of those nations, blessing himself in his heart, saying, '),
                hp('"I shall have peace, though I walk in the imagination of mine heart, to add drunkenness to thirst"', 'self-blessing'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'self-blessing',
          html:
            'Here is the deception of the root: it does not say "I am damned." It says "I shall have peace." The man who turns away does not curse himself. He blesses himself. He imagines that he can serve other gods, walk his own path, indulge his appetites — and somehow still have peace and prosperity. He adds "drunkenness to thirst," meaning he takes what already feeds one appetite and feeds it more. The lie is not "this will destroy me." The lie is "this will satisfy me and bring me peace anyway."',
        },
        {
          kind: 'carry',
          html:
            'The self-blessing lie whispers in a thousand forms: "I can drift a little, and still be fine." "This habit will not touch my faith." "I can bless myself here, and God will still bless me." The line between faithfulness and apostasy rarely looks like a cliff. It usually looks like a slope, and a small voice promising peace all the way down. Wherever you are tempted to bless yourself apart from God&apos;s actual blessing, you are standing where this root grows.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 20,
              spans: [
                t('The Lord will not spare him, but then the anger of the Lord and his jealousy shall smoke against that man, and '),
                hg('all the curses that are written in this book shall lie upon him', 'curses-written'),
                t(', and the Lord shall blot out his name from under heaven.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'curses-written',
          html:
            'The curses are not arbitrary or unwritten. They are specific, detailed, and in the book. This is the covenant structure: blessing for obedience, curse for apostasy. The one who turns away does not get to define his own consequences. He takes the curse not because God is cruel but because covenant has a form, and breaking it has a shape.',
        },
        {
          kind: 'reflection',
          id: 'self-blessing-2',
          prompt:
            'Where are you most tempted to "bless yourself" in your own heart — to believe a compromise or indulgence will bring you peace? What is the lie you are almost believing?',
        },
      ],
    },

    /* ─── Deuteronomy 29:22–28 — The Question of the Next Generation ────── */
    {
      ref: 'Deuteronomy 29:22–28',
      title: 'The Question of the Next Generation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 22,
              spans: [
                t('So that the generation to come of your children that shall rise up after you, and the stranger that shall come from a far land, shall say, when they see the plagues of that land, and the sicknesses which the Lord hath laid upon it;'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 24,
              spans: [
                t('Even all nations shall say, '),
                hg('"Wherefore hath the Lord done thus unto this land? what meaneth the heat of this great anger?"', 'why-anger'),
                t(''),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'why-anger',
          html:
            'The future is watching. When judgment falls on Israel, the nations will ask: why did this happen? And the answer will have to be given. The story is not hidden. It is written in ruin. This is why the covenant moment matters: what happens next will tell the story of what Israel chose today.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 25,
              spans: [
                t('Then men shall say, Because they have forsaken the covenant of the Lord God of their fathers, which he made with them when he brought them forth out of the land of Egypt: For they went and served other gods, and worshipped them, gods whom they knew not, and whom he had not given unto them:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'forsaken-covenant',
          html:
            'The answer is clear and irrevocable: they forsook the covenant. They did not merely stumble or wander. They actively chose other gods. And these were gods "whom he had not given unto them" — meaning the Lord never authorized this worship, never invited it. It was pure apostasy.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 27,
              spans: [
                t('Therefore the anger of the Lord was kindled against this land, to bring upon it all the curses that are written in this book: And the Lord rooted them out of their land in anger, and in wrath, and in great indignation, and cast them into another land, '),
                hg('as it is this day', 'as-this-day'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'as-this-day',
          html:
            'These words were written in Moses&apos; day, but they were written to be read in a future day when judgment had already come. "As it is this day" is a voice from exile speaking back to the reader: this is what happened. The warning came true. The words were not hollow. Whoever reads this in exile knows that the covenant was real, the warnings were real, and the consequences were real.',
        },
        {
          kind: 'carry',
          html:
            'The future always asks questions about the present. What you choose today — toward faithfulness or away from it — will be written in a story that others read. You cannot choose in secret. The consequences, when they come, become a testimony either to God&apos;s faithfulness or to the costliness of turning away. Your choices are not private. They teach the generation watching you.',
        },
        {
          kind: 'reflection',
          id: 'next-gen',
          prompt:
            'If the next generation looked at your faithfulness or unfaithfulness, what story would it read about what covenants with God are actually worth? What would you want that story to say?',
        },
      ],
    },

    /* ─── Deuteronomy 29:29 — The Secret Things and the Revealed ──────────── */
    {
      ref: 'Deuteronomy 29:29',
      title: 'The Secret Things Belong to the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 29,
              spans: [
                t('The secret things belong unto the Lord our God: but '),
                hp('those things which are revealed belong unto us and to our children for ever, that we may do all the words of this law', 'secret-revealed'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'secret-revealed',
          html:
            'This verse is the answer to all the unanswered questions in Deuteronomy. Why does God allow suffering? Why does evil sometimes flourish? Why did judgment take so long to come? Those questions belong to God. They are <em>nistarot</em>, hidden, secret. But what is revealed — the law, the covenant, the call to obedience — that belongs to us. We are not called to understand the secret things. We are called to do the revealed things.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nistarot',
          title: 'Nistarot — "Secret things"',
          script: 'נִסְתָּרוֹת',
          translit: '<strong>nistarot</strong> · hidden things, kept hidden from view',
          description:
            'Nistarot means actively hidden, kept concealed. Not merely unknown, but deliberately veiled. The secrets belong to God because God chose to veil them. Our job is not to unveil them. Our job is to trust.',
        },
        {
          kind: 'christ',
          id: 'christ-obedience',
          title: 'Christ Connection — Obedience Without Full Knowledge',
          html:
            'Jesus embodies this principle perfectly. In Gethsemane, He prays, "Nevertheless not my will, but thine, be done" (Luke 22:42). He could have demanded to understand why the cross was necessary, why salvation required His blood. Instead, He accepted the mystery and obeyed. Hebrews 5:8 tells us Christ "learned obedience by the things which he suffered." The deepest faithfulness is not the faith that understands everything. It is the faith that obeys what is revealed while trusting what remains hidden.',
        },
        {
          kind: 'carry',
          html:
            'When you cannot understand why God allowed something painful, why a prayer went unanswered, why injustice persists — those are the secret things. Your peace does not depend on solving them. Your peace depends on obeying what you <em>can</em> see: the law of love, the call to forgiveness, the command to serve Him anyway. Do what is revealed. Leave the rest with the One who sees all.',
        },
        {
          kind: 'reflection',
          id: 'secret-things',
          prompt:
            'What is one secret thing you have been trying to understand or solve? What would change if you released it to God and focused instead on obeying what He has clearly revealed to you?',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Deuteronomy 29',
    quote:
      'The secret things belong unto the Lord our God: but those things which are revealed belong unto us and to our children for ever, that we may do all the words of this law.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 29:29 · Study Guide',
  },
};
