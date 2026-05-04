import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 8 — The Wilderness Discipline Chapter
 *
 * Moses frames the forty-year wilderness wandering not as punishment for its
 * own sake but as deliberate humbling and proving — a father's training of a
 * son. Manna teaches Israel a truth Jesus would later quote at His own
 * wilderness test: man does not live by bread alone, but by every word from
 * God's mouth. The real danger is not poverty but prosperity — when full
 * bellies forget the Provider. God grants the power to get wealth, but that
 * power is His gift, not the fruit of our own strength.
 */

export const DEUTERONOMY_8: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 8,

  estimatedMinutes: { beginner: 7, intermediate: 12, deep: 16 },
  topicTags: ['covenant', 'faithfulness', 'leadership', 'love'],
  opener: {
    topical: true,
    caption: 'Deuteronomy 8',
  },
  intros: [
    'Deuteronomy 8 is Moses&apos; meditation on the meaning of forty years in the wilderness. He does not soft-pedal the hardship — hunger, thirst, the absence of home — but frames it entirely as God&apos;s deliberate pedagogy. A father chastens his son, and the Lord has chastened Israel.',
    'Yet the wilderness was also a school of trust. Manna was not bread they knew. Their clothes did not wear out. God provided what they could not provide for themselves. This is the lesson Jesus would stand up and repeat in His own wilderness: that a human being does not live by bread alone, but by every word proceeding from God&apos;s mouth.',
    'The chapter&apos;s climax is a warning about the future, not the past. Israel enters a good land — brooks and fountains, wheat and barley, olive oil and honey. The danger in such abundance is not poverty but pride: the illusion that our own hands have gotten us our wealth. The text insists otherwise: God gives the power to get wealth, so that His covenant will be established. Forget the Provider, and you will perish like the nations before you.',
  ],

  sections: [
    /* ─── Deuteronomy 8:1–6 — The Purpose of the Wilderness ───────────── */
    {
      ref: 'Deuteronomy 8:1–6',
      title: 'The Purpose of the Wilderness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 1,
              spans: [
                t('All the commandments which I command thee this day shall ye observe to do, that ye may '),
                hp('live, and multiply', 'dt8-live'),
                t(', and '),
                hp('go in and possess the land', 'dt8-live'),
                t(' which the Lord sware unto your fathers.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dt8-live',
          html:
            'Moses frames obedience not as legal compliance but as the pathway to life itself — full, multiplied, rooted in the land God promised. This is not a quid pro quo; it is a declaration of how blessing works. The commands are the architecture of a thriving life.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 2,
              spans: [
                t('And thou shalt remember '),
                t('all the way which the Lord thy God led thee'),
                t(' these forty years in the wilderness, to '),
                hg('humble thee, and to prove thee', 'dt8-humble'),
                t(', to know what was in thine heart, whether thou wouldest keep his commandments, or no.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'heb-anah',
          title: 'Anah — &ldquo;humble&rdquo;',
          script: 'עָנָה',
          translit: '<strong>anah</strong> · to humble, afflict, subdue',
          description:
            'The verb does not mean mere sadness or shame. It means to strip away self-sufficiency — to bring someone to the place where they know they cannot help themselves. This is the literal meaning of the wilderness: no food except what God gives, no water but what He provides.',
        },
        {
          kind: 'commentary',
          id: 'dt8-humble',
          html:
            'The wilderness was deliberate. God did not wander with Israel by accident for forty years; He led them there on purpose — to humble them, to prove them, to test what was actually in their hearts. The goal of the wilderness is not suffering for its own sake but the stripping away of all false confidence. When you have been hungry and have not eaten, when your only food is manna from heaven [res:manna-wilderness-provision-bible-odyssey], you learn something about yourself and your Provider that no other circumstance can teach [res:sefaria-deuteronomy-8].',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 3,
              spans: [
                t('And he suffered thee to hunger, and fed thee with manna, which thou knewest not, neither did thy fathers know; that he might make thee know that '),
                t('man doth not live by bread only'),
                t(', but by '),
                t('every word that proceedeth out of the mouth of the Lord'),
                t(' doth man live.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'heb-man',
          title: 'Man — &ldquo;manna&rdquo;',
          script: 'מָן',
          translit: '<strong>man</strong> · manna, the dew-food from heaven',
          description:
            'The word itself contains a question: in Exodus, the people ask &ldquo;Man hu?&rdquo; — &ldquo;What is it?&rdquo; Manna is food whose origin and nature the eaters must ask about. It cannot be taken for granted; it must be received daily with gratitude and wonder.',
        },
        {
          kind: 'christ',
          id: 'christ-manna-word',
          title: 'Christ Connection — Bread and the Living Word',
          html:
            'Jesus quotes this exact verse when Satan tempts Him in the wilderness: &ldquo;Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God&rdquo; (Matt. 4:4 [res:jesus-temptation-wilderness-matthew-4]). He is saying to the tempter: I too have hungered, and I know that a human being does not survive on food; we survive on God&apos;s word. Later, He identifies Himself with manna: &ldquo;I am the bread of life… your fathers did eat manna in the wilderness, and are dead. But this is the bread which cometh down from heaven, that a man may eat thereof, and not die&rdquo; (John 6:48–50). He is the true bread, the true word made flesh [res:manna-wilderness-provision-bible-odyssey].',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 4,
              spans: [
                t('Thy raiment waxed not old upon thee, neither did thy foot swell, these forty years.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dt8-clothes',
          html:
            'A detail that sounds impossible to a modern ear signals the point: God&apos;s provision was not merely sufficient; it was miraculous. Shoes did not wear out after forty years of desert walking. Clothes did not age. This is the signature of God&apos;s care — not stingy provision but abundance that defies the laws of nature.',
        },
        {
          kind: 'carry',
          html:
            'You have likely walked your own wilderness — seasons when you could not see the end, when you had to trust for daily bread, when your own strength and resources ran short. The forty years are long. But Moses is saying to Israel: remember that you were not abandoned in that place. Your shoes did not fall apart. You were fed when you had no way to feed yourselves. That God who led you into the wilderness is the God who led you through it. If you are in a wilderness now, that same care is available to you.',
        },
        {
          kind: 'reflection',
          id: 'refl-wilderness',
          prompt:
            'What wilderness season has God walked you through? What did you learn about yourself and about Him in a place where you had to depend entirely on His provision?',
        },
      ],
    },

    /* ─── Deuteronomy 8:7–10 — The Good Land ──────────────────────────── */
    {
      ref: 'Deuteronomy 8:7–10',
      title: 'The Good Land',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 7,
              spans: [
                t('For the Lord thy God bringeth thee into a '),
                hp('good land', 'dt8-good-land'),
                t(', a land of '),
                t('brooks of water'),
                t(', of fountains and depths springing out of valleys and hills;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dt8-good-land',
          html:
            'The promise is not abstract. God does not simply hand over abstract title; He brings Israel into a land whose goodness they will taste. This is a land of visible, tangible abundance — water, agriculture, mineral wealth. The God who provided manna in the desert now provides grapes and grain in the land. The physical remains central.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 8,
              spans: [
                t('A land of '),
                t('wheat, and barley'),
                t(', and vines, and fig trees, and pomegranates; a land of '),
                t('oil olive, and honey'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'heb-yasar',
          title: 'Yasar — &ldquo;chasten, discipline&rdquo;',
          script: 'יָסַר',
          translit: '<strong>yasar</strong> · to chasten, discipline, instruct as a father',
          description:
            'This is the verb that appears in Proverbs 13:24: &ldquo;He that spareth his rod hateth his son; but he that loveth him chasteneth him betimes.&rdquo; It is not angry punishment but the loving discipline of a father who wants his child to grow wise.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 9,
              spans: [
                t('A land wherein thou shalt eat bread without scarceness, thou shalt not lack any thing in it; a land whose '),
                hg('stones are iron', 'dt8-iron'),
                t(', and out of whose hills thou mayest dig brass:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dt8-iron',
          html:
            'The land contains mineral wealth — iron in its stones, brass (copper) in its hills. This is not poetry but geology; the land Moses describes is geographically real, rich in the resources needed for civilization, commerce, and war. God does not promise a land of spiritual abstractions; He promises a land that feeds, clothes, and sustains.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 10,
              spans: [
                t('When thou hast eaten and art full, then thou shalt '),
                hp('bless the Lord thy God', 'dt8-bless'),
                t(' for the good land which he hath given thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dt8-bless',
          html:
            'The command is straightforward: when your belly is full, when you sit at a table laden with wheat and figs and oil, bless God. The danger lies not in the blessing itself but in what happens next — in forgetting who gave it. Gratitude is the discipline of the prosperous.',
        },
        {
          kind: 'carry',
          html:
            'If you have moved from scarcity to plenty, from a season where you could not imagine abundance to a season where abundance is normal, this verse is written to you. The command is not to feel guilty about what you have; it is to remember where it came from. The practice of blessing — of pausing to say &ldquo;this comes from God, not from my cleverness or my luck&rdquo; — is the daily practice that keeps a heart from hardening.',
        },
        {
          kind: 'reflection',
          id: 'refl-abundance',
          prompt:
            'What has abundance made you forget? What would it look like to bless God not just for the wilderness provision but for the full table?',
        },
      ],
    },

    /* ─── Deuteronomy 8:11–16 — Fatherly Chastening ──────────────────── */
    {
      ref: 'Deuteronomy 8:11–16',
      title: 'Chastened Like a Son',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 11,
              spans: [
                t('Beware that thou forget not the Lord thy God, in not keeping his commandments, and his judgments, and his statutes, which I command thee this day:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dt8-beware',
          html:
            'Moses does not say &ldquo;If you break the law.&rdquo; He says &ldquo;Beware that you forget.&rdquo; The root sin is amnesia — the loss of memory of who God is and what He has done. From that forgetting, all the law-breaking flows. The heart that remembers God&apos;s goodness has a reason to obey.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 12,
              spans: [
                t('Lest when thou hast eaten and art full, and hast built goodly houses, and dwelt therein;'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And when thy herds and thy flocks multiply, and thy silver and thy gold is multiplied, and all that thou hast is multiplied;'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Then thine heart be lifted up, and thou '),
                hg('forget the Lord thy God', 'dt8-forget'),
                t(', which brought thee forth out of the land of Egypt, from the house of bondage;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dt8-forget',
          html:
            'The danger Moses articulates is not poverty but prosperity, not hunger but fullness. When a house is good, when herds multiply, when gold is abundant, that is when the heart lifts up. And a lifted-up heart — a heart that has stopped looking upward — is a heart that forgets. This is the deepest problem of the human condition in a state of plenty.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 15,
              spans: [
                t('Who led thee through that great and terrible wilderness, wherein were fiery serpents, and scorpions, and '),
                hy('drought, where there was no water', 'dt8-drought'),
                t('; who brought thee forth water out of the rock of flint;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dt8-drought',
          html:
            'Moses reminds them of the actual conditions: the desert was genuinely hostile — serpents, scorpions, no water. Yet God did what seemed impossible: He drew water from a rock. The memory of impossibility overcome is the antidote to the forgetfulness prosperity breeds.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 16,
              spans: [
                t('Who fed thee in the wilderness with '),
                t('manna which thy fathers knew not'),
                t(', that he might humble thee, and that he might prove thee, to do thee good at thy latter end;'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-chastening',
          title: 'Christ Connection — Disciplined as a Son',
          html:
            'The writer of Hebrews echoes this passage: &ldquo;If ye endure chastening, God dealeth with you as with sons; for what son is he whom the father chasteneth not? But if ye be without chastisement, whereof all are partakers, then are ye bastards, and not sons&rdquo; (Heb. 12:7–8). The wilderness discipline was not a sign of God&apos;s rejection but of His sonship. When Christ fasted in His own wilderness, He too was disciplined as a son. The chastening of a father is the assurance of belonging.',
        },
        {
          kind: 'carry',
          html:
            'If you are in a season of discipline — a season where something is being stripped away, where comfort is hard to find, where you must depend on God for basics — you are not outside God&apos;s love. You are inside it. A father disciplines his children because they belong to him. The wilderness is not a sign of abandonment; it is a sign of sonship. And it is temporary — designed to humble you so that you will do you good in the end.',
        },
        {
          kind: 'reflection',
          id: 'refl-chastening',
          prompt:
            'Where is God disciplining you now — stripping away false confidence, teaching you to depend? Can you name what He is trying to teach you through it?',
        },
      ],
    },

    /* ─── Deuteronomy 8:17–18 — The Power to Get Wealth ──────────────── */
    {
      ref: 'Deuteronomy 8:17–18',
      title: 'He Giveth Thee Power to Get Wealth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 17,
              spans: [
                t('And thou say in thine heart, '),
                hg('My power and the might of mine hand hath gotten me this wealth', 'dt8-power'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dt8-power',
          html:
            'Moses articulates the precise lie that prosperity tempts us to believe: that our own hands have earned what we have. This is not a sin of theft or violence; it is a sin of attribution. We give the credit to ourselves instead of to God. And from that misattribution flows every kind of hardness — pride, cruelty to those below us, forgetfulness of our own former need.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 18,
              spans: [
                t('But thou shalt remember the Lord thy God: for '),
                hp('it is he that giveth thee power to get wealth', 'dt8-power-gift'),
                t(', that he may establish his covenant which he sware unto thy fathers, as it is this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dt8-power-gift',
          html:
            'The text does not say God provides wealth directly like manna from heaven. It says God gives the power to get wealth — the ability, the mind, the opportunity, the strength. Your work is not negated; your intelligence is not irrelevant. But the capacity to work, to think, to create — that capacity itself is God&apos;s gift. And it is given not for your own glory but for the establishment of God&apos;s covenant. Wealth is always instrumental, never terminal.',
        },
        {
          kind: 'carry',
          html:
            'If you work hard and are successful, that is not a sin. But if you have climbed and now look down, if you have earned and now think you are self-made, you have missed the point. The ability to work, the opportunity to earn, the health to labor — all of it is on loan from God. And the loan is given not so you can hoard but so you can be a conduit through which God&apos;s covenant reaches others. That reframing changes everything about how you hold what you have.',
        },
        {
          kind: 'reflection',
          id: 'refl-wealth',
          prompt:
            'Where has success tempted you to forget your dependence on God? How might you begin to see your power to earn or create as a gift to steward, not a victory to own?',
        },
      ],
    },

    /* ─── Deuteronomy 8:19–20 — The Warning ────────────────────────── */
    {
      ref: 'Deuteronomy 8:19–20',
      title: 'The Nation That Forgets',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 19,
              spans: [
                t('And it shall be, if thou do at all forget the Lord thy God, and walk after other gods, and serve them, and worship them, I testify against you this day that ye shall surely perish.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dt8-perish',
          html:
            'This is not angry surprise on God&apos;s part. It is a warning spoken in love, attested with the solemnity of a courtroom witness. &ldquo;I testify against you.&rdquo; Moses is saying: I am putting you on notice. The path of forgetting leads to death. Not because God is waiting to punish you but because the God who provides is the God who sustains. Turn away from Him, and the logic of the world enters in — and the world is no gentler than the wilderness.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 20,
              spans: [
                t('As the nations which the Lord destroyeth before your face, so shall ye perish; because ye would not be obedient unto the voice of the Lord your God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dt8-as-nations',
          html:
            'Israel is not exempt from the law of forgetting. The nations around them — Canaanites, Hittites — did not have a covenant with God; they built their own kingdoms on their own power. And they perished. Israel&apos;s covenant is Israel&apos;s only protection. Forget it, and Israel becomes like every other nation — strong until it is not, enduring until the day its foundation cracks. This is not a threat; it is the structure of reality.',
        },
        {
          kind: 'carry',
          html:
            'If you are part of a tradition, a community, a covenant — whether that is a church or a marriage or a family or a people — you have stability that the world alone cannot offer. But that stability is contingent. It depends on remembrance, on obedience, on the daily choice to turn toward God rather than away. The moment you forget what holds you together is the moment forgetting becomes possible. Stay awake.',
        },
        {
          kind: 'reflection',
          id: 'refl-warning',
          prompt:
            'What are the &ldquo;other gods&rdquo; you find most tempting when you are full and comfortable? What does it look like to choose remembrance over forgetfulness, obedience over the drift toward other allegiances?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Deuteronomy 8',
    quote:
      'Remember the Lord thy God: for it is he that giveth thee power to get wealth, that he may establish his covenant. Beware lest thou forget Him when thy heart is lifted up in prosperity.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 8 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-deuteronomy-8',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 8',
      url: 'https://www.sefaria.org/Deuteronomy.8',
      description: 'Open-access source text and traditional Jewish commentary on the wilderness provision and the danger of forgetting God in prosperity.',
    },
    {
      id: 'manna-wilderness-provision-bible-odyssey',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Manna',
      url: 'https://www.bibleodyssey.org/dictionary/manna/',
      description: 'Scholarly entry on the miraculous bread from heaven and its role as a sign of God&apos;s provision and dependence in the wilderness.',
    },
  ],

  hasHebrew: true,
};
