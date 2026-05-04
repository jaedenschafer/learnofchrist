import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ecclesiastes 3 — A Time for Every Purpose
 *
 * "To every thing there is a season, and a time to every purpose under the
 * heaven: A time to be born, and a time to die; a time to plant, and a time
 * to pluck up that which is planted." This is not arbitrary. This is the
 * rhythm that God has woven into creation. Birth and death are not enemies
 * but partners. Weeping and laughter are not opposites but movements in the
 * same dance. "He hath made every thing beautiful in his time." And yet man
 * does not understand the whole. God has hidden it.
 */
export const ECCLESIASTES_3: RichChapterContent = {
  bookSlug: 'ecclesiastes',
  bookName: 'Ecclesiastes',
  chapter: 3,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 6 },
  opener: {
    matchTitle: /The Voyage of Life/i,
    caption: 'Ecclesiastes 3',
  },
  intros: [
    'After the Preacher establishes that all is vanity and death negates our achievements, he turns to a new observation. Life is not chaos. It is rhythm. Pattern. Structure. There is a season for everything—and not because we choose these seasons, but because God has woven them into the fabric of creation. Birth and death, planting and harvesting, weeping and laughter, war and peace—these are not random. They are necessary. They are part of the design. And in that design, God has created something beautiful.',
    'But here is the paradox: while God has made everything beautiful in its time, He has also hidden from man the full meaning of what He is doing. "Also he hath set the world in their heart: yet so that no man can find out the work that God maketh from the beginning to the end." God gives us the ability to see that there is meaning—the world is set in our hearts—but He withholds the full comprehension of His purposes. We see the pattern, but not the Painter. We see the rhythm, but not the Conductor. And in that incompleteness, we are invited to trust.',
  ],

  sections: [
    {
      ref: 'Ecclesiastes 3:1–8',
      title: 'The Appointed Times',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'To every thing there is a season, and a time to every purpose under the heaven:'),
            plain(2, 'A time to be born, and a time to die; a time to plant, and a time to pluck up that which is planted;'),
            plain(3, 'A time to kill, and a time to heal; a time to break down, and a time to build up;'),
            plain(4, 'A time to weep, and a time to laugh; a time to mourn, and a time to dance;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc3a-mid-time-seasons',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.[res:british-museum-mesopotamia]',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(5, 'A time to cast away stones, and a time to gather stones together; a time to embrace, and a time to refrain from embracing;'),
            plain(6, 'A time to get, and a time to lose; a time to keep, and a time to cast away;'),
            plain(7, 'A time to rend, and a time to sew; a time to keep silence, and a time to speak;'),
            plain(8, 'A time to love, and a time to hate; a time of war, and a time of peace.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc3-season',
          html:
            'The Preacher now paints a portrait of life as a rhythm, a dance of opposites. Everything has its season. This is not the Preacher abandoning his earlier conclusion about vanity. Rather, he is deepening it. Life is not meaningless because it is full of change. Change is not a sign of emptiness—it is the pattern itself. The key insight is that each moment, each season, is necessary. You cannot harvest without first planting. You cannot laugh without knowing sorrow. The pairs are not in conflict but in harmony.[res:sefaria-ecclesiastes-3]',
        },
        {
          kind: 'hebrew',
          id: 'ecc3-et',
          title: 'Et — "Time"',
          script: 'עֵת',
          translit: '<strong>Et</strong> · time, season, appointed moment',
          description:
            'The Hebrew word et refers not merely to duration but to an appointed time, a significant moment. It is the right time, the proper time. When the Preacher says "to every thing there is a season," he is saying that God has appointed the seasons. The world is not governed by blind chance but by divine order.',
        },
        {
          kind: 'commentary',
          id: 'ecc3-pairs',
          html:
            'Notice that the fourteen pairs Ecclesiastes lists are not morally equivalent. Birth is good, but death is not evil—it is natural. Planting is necessary, and uprooting is equally necessary. Weeping and laughing are both parts of a full life. Embracing and refraining from embracing—both have their time. The Preacher is saying: accept the rhythm. Do not cling to summer and curse winter. Recognize that each season serves a purpose.[res:theoi-stoic-epicurean]',
        },
        {
          kind: 'carry',
          html:
            'We live in a culture that tries to eliminate the seasons. We try to make every moment a time of plenty, of laughter, of gain, of peace. We resist mourning. We fight aging. We refuse rest. But the Preacher invites us to accept the pattern. There will be times of planting and times of reaping. Times of building and times when we must let go of what we have built. This acceptance is not passivity—it is wisdom. It is the recognition that we are not in control, but are part of something larger.',
        },
        {
          kind: 'reflection',
          id: 'ecc3-season-acceptance',
          prompt: 'What season are you in right now—planting or harvest, building or releasing, weeping or dancing? Can you see how this season, even if difficult, serves a purpose?',
        },
      ],
    },

    {
      ref: 'Ecclesiastes 3:9–22',
      title: 'Beauty and Mystery',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(9, 'What profit hath he that worketh in that wherein he laboureth?'),
            plain(10, 'I have seen the travail, which God hath given to the sons of men to be exercised in it.'),
            plain(11, 'He hath made every thing beautiful in his time: also he hath set the world in their heart; yet so that no man can find out the work that God maketh from the beginning to the end.'),
            plain(12, 'I know that there is no good in them, but for a man to rejoice, and to do good in his life.'),
            plain(13, 'And also that every man should eat and drink, and enjoy the good of all his labour, it is the gift of God.'),
            plain(14, 'I know that, whatsoever God doeth, it shall be for ever: nothing can be put to it, nor any thing taken from it: and God doeth it, that men should fear him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc3-beautiful-season',
          html: '"He hath made every thing beautiful in his time." This is the Preacher&apos;s turning point. He has seen vanity, seen death, seen futility. But now he sees beauty not imposed from outside but woven into the seasons themselves. A time to mourn is beautiful because mourning, when it is time to mourn, belongs to life. God has set the world in the human heart—given us the ability to perceive design and meaning. Yet we cannot see the full pattern. We are invited to trust the Craftsman while seeing only a portion of the craft.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(15, 'That which hath been is now; and that which is to be hath already been; and God requireth that which is past.'),
            plain(16, 'And moreover I saw under the sun the place of judgment, that wickedness was there; and the place of righteousness, that iniquity was there.'),
            plain(17, 'I said in mine heart, God shall judge the righteous and the wicked: for there is a time there for every purpose and for every work.'),
            plain(18, 'I said in mine heart concerning the estate of the sons of men, that God might manifest them, and that they might see that they themselves are beasts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc3b-mid-beasts-spirit',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(19, 'For that which befalleth the sons of men befalleth beasts; even one thing befalleth them: as the one dieth, so dieth the other; yea, they have all one breath; so that a man hath no preeminence above a beast: for all is vanity.'),
            plain(20, 'All go unto one place; all are of the dust, and all turn to dust again.'),
            plain(21, 'Who knoweth the spirit of man that goeth upward, and the spirit of the beast that goeth downward to the earth?'),
            plain(22, 'Wherefore I perceive that there is nothing better, than that a man should rejoice in his own works; for that is his portion: for who shall bring him to see what shall be after him?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc3-beautiful',
          html:
            '"He hath made every thing beautiful in his time." This is the turning point of the chapter. The Preacher has seen vanity, seen death, seen futility. But now he sees beauty. Not meaning imposed from outside, but beauty woven into the seasons themselves. A time to mourn is not beautiful because mourning is good—it is beautiful because mourning, when it is time to mourn, belongs to life. The beauty is in the fitting-ness of the moment.',
        },
        {
          kind: 'commentary',
          id: 'ecc3-set-world',
          html:
            'God "hath set the world in their heart." He has given humanity the ability to perceive that there is design, that there is meaning. And yet—"no man can find out the work that God maketh from the beginning to the end." We can see that there is a pattern. We cannot see the full pattern. We are invited to trust the Craftsman while seeing only a portion of the craft.',
        },
        {
          kind: 'christ',
          id: 'ecc3-christ-lord-seasons',
          title: 'Christ Connection — Lord of the Seasons',
          html:
            'Jesus taught His disciples to observe the seasons. "When ye see a cloud rise out of the west, straightway ye say, There cometh a shower; and so it is." He called them to read the signs of the times. In Christ, every season—even suffering—is placed within a larger narrative of redemption. The cross appears to be a time of death, but Christ&apos;s resurrection reveals it as a time of harvest, of birth. In Him, the seasons are not meaningless cycles but movements toward glory. He is the Lord of all times and seasons, and He invites us into a trust that transcends our ability to see the whole.',
        },
        {
          kind: 'reflection',
          id: 'ecc3-trust-pattern',
          prompt: 'What would it mean to trust that God knows what He is doing, even when you cannot see the whole pattern? How might that trust change how you face the difficult seasons of life?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'To every thing there is a season, and a time to every purpose under the heaven...He hath made every thing beautiful in his time.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ecclesiastes 3 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-ecclesiastes-3',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ecclesiastes 3',
      url: 'https://www.sefaria.org/Ecclesiastes.3',
      description: 'Sefaria open-access source text and translations for Ecclesiastes 3.',
    },
    {
      id: 'british-museum-mesopotamia',
      kind: 'museum',
      source: 'British Museum',
      label: 'ANE Wisdom Literature (Mesopotamia)',
      url: 'https://www.britishmuseum.org/',
      description: 'Mesopotamian wisdom texts paralleling Ecclesiastes&apos; quest for meaning under existential circularity.',
    },
    {
      id: 'theoi-stoic-epicurean',
      kind: 'archive',
      source: 'Theoi Classical Texts',
      label: 'Stoic and Epicurean Philosophy',
      url: 'https://www.theoi.com/',
      description: 'Hellenistic philosophical parallels to Ecclesiastes on pleasure, virtue, and the good life.',
    },
  ],

  hasHebrew: true,
};
