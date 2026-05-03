import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 78 — The Pattern of Forgetting
 *
 * "He chose David his servant, and took him from the sheepfolds." This long
 * historical psalm traces Israel&apos;s repeated cycle: God acts, Israel forgets,
 * Israel sins, God brings judgment, Israel repents, and the cycle begins again.
 * The psalm culminates in David, foreshadowing the True David who will not fail
 * as Israel has failed, the Messiah who will be faithful where the people could
 * not be.
 */
export const PSALMS_78: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 78,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Psalm 78 is a long historical recitation, a retelling of Israel&apos;s story from Egypt to the monarchy. The pattern that emerges is almost monotonous in its repetition: God does wonders, Israel forgets, Israel sins, God sends judgment, Israel repents briefly, and then the cycle begins again. The psalm is not a celebration of Israel&apos;s faithfulness. It is an anatomy of Israel&apos;s forgetfulness. God acts in history, but His people keep losing sight of what He has done.',
    'Yet the psalm does not end in despair. It ends with the choice of David: "He chose David his servant, and took him from the sheepfolds." And David is described as one who would feed Israel "according to the integrity of his heart; and guide them by the skillfulness of his hands." The psalm moves from a history of repeated failure to the hope placed in a single faithful servant. And the New Testament sees in David a foreshadowing of Christ, the Messiah who would succeed where Israel had repeatedly failed.',
  ],

  sections: [
    {
      ref: 'Psalm 78:1–22',
      title: 'The Cycle of Forgetting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 78,
          lines: [
            plain(4, 'We will not hide them from their children, shewing to the generation to come the praises of the Lord, and his strength, and his wonderful works that he hath done.'),
            plain(11, 'And forgat his works, and his wonders that he had shewed them.'),
            plain(12, 'Marvellous things did he in the sight of their fathers, in the land of Egypt, in the field of Zoan.'),
            plain(17, 'And they sinned yet more against him by provoking the most High in the wilderness.'),
            plain(21, 'Therefore the Lord heard this, and was wroth: thus a fire was kindled against Jacob, and anger also came up against Israel.'),
            plain(22, 'Because they believed not in God, and trusted not in his salvation.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms78-hide',
          html:
            'The psalm opens with a determination to not hide God&apos;s works from future generations. The intention is to pass on a memory, to teach the coming generation about God&apos;s strength and wonders. Yet what follows is a tragic irony: Israel forgot. Despite miraculous deliverance from Egypt, despite God&apos;s works in the field of Zoan, the people forgot. [res:sefaria-psalm-78]',
        },
        {
          kind: 'hebrew',
          id: 'psalms78-shacach',
          title: 'Shacach — "Forgot" (Forgotten)',
          script: 'שָׁכַח',
          translit: '<strong>Shacach</strong> · forget, fail to remember',
          description:
            'The Hebrew word shacach speaks of active forgetting, of letting something slip from memory. It is not that Israel did not know. It is that Israel chose not to remember, allowed the memory to fade, returned to old patterns as if God had never acted.',
        },
        {
          kind: 'commentary',
          id: 'psalms78-cycle',
          html:
            'The pattern emerges: God showed marvelous things. The people sinned and provoked God in the wilderness. God heard and was wroth, kindling fire against them. "Because they believed not in God, and trusted not in his salvation." The root of Israel&apos;s failure is not ignorance. It is unbelief. God has acted, but the people do not trust.',
        },
        {
          kind: 'christ',
          id: 'psalms78-christ-memory',
          title: 'Christ Connection — The Living Memory',
          html:
            'The Church is called to remember Christ. "Do this in remembrance of me," Jesus says at the Last Supper. Unlike Israel, which forgot despite all God had done, the Church is given a memorial—bread and wine that make present the work of Christ. Yet even the Church must guard against forgetting, against letting the memory of Christ&apos;s work fade into abstraction. [res:bible-odyssey-psalm-78]',
        },
        {
          kind: 'carry',
          html:
            'The pattern of Israel&apos;s forgetting is also your temptation. God has acted in your life. He has delivered you from things that enslaved you. He has guided you through wilderness. And yet there is a tendency to drift, to forget, to lose the sense of God&apos;s presence and power. The psalm calls you to remember. Make the effort to recall what God has done.',
        },
        {
          kind: 'reflection',
          id: 'psalms78-remember-goodness',
          prompt: 'What works of God have you forgotten or allowed to fade from memory? What would it take to actively remember them again? [res:intertextual-psalm-78-hebrews-1]',
        },
      ],
    },

    {
      ref: 'Psalm 78:67–72',
      title: 'The Choice of David',
      blocks: [
        {
          kind: 'scripture',
          chapter: 78,
          lines: [
            plain(67, 'Moreover he refused the tabernacle of Joseph, and chose not the tribe of Ephraim:'),
            plain(68, 'But chose the tribe of Judah, the mount Zion which he loved.'),
            plain(70, 'He chose David also his servant, and took him from the sheepfolds:'),
            plain(71, 'From following the ewes great with young he brought him to feed Jacob his people, and Israel his inheritance.'),
            plain(72, 'So he fed them according to the integrity of his heart; and guided them by the skillfulness of his hands.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms78-refuse',
          html:
            'The psalm moves from a history of Israel&apos;s failure to God&apos;s response. God refused the tabernacle of Joseph and the tribe of Ephraim. Instead, God chose the tribe of Judah and Mount Zion. The refusal is not arbitrary. It is a response to unfaithfulness. God turns away from those who have turned from Him.',
        },
        {
          kind: 'commentary',
          id: 'psalms78-david',
          html:
            'Yet in that same moment, God chooses David. From the sheepfolds, from following the ewes, God brings him to feed His people Israel. The shepherd becomes the shepherd of the nation. And David is described not by power or ambition, but by the integrity of his heart and the skillfulness of his hands. This is a king who will care for the flock.',
        },
        {
          kind: 'commentary',
          id: 'psalms78-fed',
          html:
            '"So he fed them according to the integrity of his heart." The language echoes Psalm 72 and points to a king whose reign will be defined by justice and care for the people. After a history of Israel&apos;s forgetting and failure, God offers a faithful servant. One king who will not fail as the people have failed.',
        },
        {
          kind: 'christ',
          id: 'psalms78-christ-true-david',
          title: 'Christ Connection — The True David',
          html:
            'Jesus is called "the Son of David." He is the True David, the Messiah who feeds His people with integrity of heart. Unlike Israel, which forgot, Christ remembers. Unlike Israel, which repeatedly broke covenant, Christ keeps covenant. And unlike David himself, who sinned and fell short, Christ is the faithful shepherd who never abandons His flock.',
        },
        {
          kind: 'carry',
          html:
            'The history of Israel shows us our own tendency to forget, to stray, to lose the thread. But it also shows us that God does not abandon His purposes. He finds a faithful servant. And in Christ, He has found and sent the One whose faithfulness will never fail. Your trust is not in yourself, but in the True David who feeds and guides you.',
        },
        {
          kind: 'reflection',
          id: 'psalms78-shepherd',
          prompt: 'How have you experienced Christ as your shepherd? What would it mean to trust His faithfulness despite your own forgetfulness?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'We will not hide them from their children...He chose David also his servant...So he fed them according to the integrity of his heart.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 78 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-78',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 78 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.78',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-78',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 78 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+78',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
    {
      id: 'intertextual-psalm-78-hebrews-1',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 78 in Hebrews 1',
      url: 'https://intertextual.bible/text/psalm-78/hebrews-1',
      description: 'New Testament connection showing how this Psalm is quoted or referenced.',
    },
  ],

  hasHebrew: true,
};
