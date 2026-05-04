import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 3 — Judgment Falls on the City
 *
 * God will remove from Judah and Jerusalem all support—judge, officer, counselor,
 * artificer, mighty man—and will give them children to be princes and babes to rule.
 * "I will give children to be their princes, and babes shall rule over them." The chapter
 * also speaks judgment on the haughty daughters of Zion, those who walk with necks held
 * high and eyes wanton. The Christ connection moves beneath the surface: when all
 * human supports are stripped away, Christ alone remains.
 */
export const ISAIAH_3: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 3,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  topicTags: ['judgment', 'calling', 'hope', 'sovereignty'],
  opener: {
    topical: true,
    caption: 'Isaiah 3',
  },
  intros: [
    'The judgment grows more specific. Isaiah now prophesies the removal of all that Jerusalem trusts in. The mighty men, the judges, the counselors—the infrastructure of human civilization—will be removed. And into positions of leadership will come children and babes, those utterly unfit to rule. This is not a statement about the incompetence of youth. It is a statement about the complete dissolution of human order that comes when a nation turns from God. When society rejects wisdom, it falls into the hands of the foolish.',
    'The chapter also turns its eye to the women of Zion, those who "walk with stretched forth necks and wanton eyes." The judgment against the city includes a judgment against those who have cultivated pride and sensuality. Isaiah describes, in unusual detail, the ornaments and garments of these women—the bangles, the chains, the veils—as if to say: all these will be stripped away. Judgment will expose what is false and remove what is merely decorative. What remains will be shame.',
  ],

  sections: [
    {
      ref: 'Isaiah 3:1–7',
      title: 'The Removal of All Support',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'For, behold, the Lord, the Lord of hosts, doth take away from Jerusalem and from Judah the stay and the staff, the whole stay of bread, and the whole stay of water,'),
            plain(2, 'The mighty man, and the man of war, the judge, and the prophet, and the prudent, and the ancient,'),
            plain(3, 'The captain of fifty, and the honourable man, and the counsellor, and the cunning artificer, and the eloquent orator.'),
            plain(4, 'And I will give children to be their princes, and babes shall rule over them.'),
            plain(5, 'And the people shall be oppressed, every one by another, and every one by his neighbour: the child shall behave himself proudly against the ancient, and the base against the honourable.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah3-removal',
          html:
            'God will remove the stay and the staff—the support structure of society. This is comprehensive removal: bread and water (the necessities), mighty men and judges (the military and legal order), prophets and the prudent (wisdom and spiritual guidance). Society rests on many pillars. Isaiah says God will pull them away. Without the restraint of wise leadership, without the presence of truth-tellers and counselors, a people falls into chaos. The mighty become their own judges, and no one stands for justice.[res:sefaria-isaiah-3]',
        },
        {
          kind: 'commentary',
          id: 'isaiah3-babes-rule',
          html:
            'The image of babes ruling is satirical and horrifying at once. When leadership is removed, rule falls to the unfit. And the result is that "the people shall be oppressed, every one by another." Without wise authority, the vacuum fills with mutual predation. The strong exploit the weak. The base (those of low birth or character) rise up against the honorable. Society consumes itself.[res:intertextual-isaiah-3-matthew]',
        },
        {
          kind: 'hebrew',
          id: 'isaiah3-mishad',
          title: 'Mishad — "Stay" or "Support"',
          script: 'מִשְׁעַד',
          translit: '<strong>Mishad</strong> · stay, support, staff; that which sustains',
          description:
            'In Isaiah&apos;s language, a mishad is literally a staff—something you lean on, something that bears your weight. God will remove every staff that Jerusalem relies on. The image is of someone stripped of all support, left to collapse.',
        },
        {
          kind: 'carry',
          html:
            'What do you rely on? What are the "stays and staffs" that hold you up? Isaiah&apos;s warning is not only about national judgment. It is about the dangers of placing ultimate trust in human systems, human wisdom, human protection. All these can be stripped away. The only reliable stay is God Himself. When we build our lives on this foundation, we are secure. When we trust in anything else as ultimate, we are vulnerable to judgment[res:sefaria-isaiah-3-v1].',
        },
        {
          kind: 'reflection',
          id: 'isaiah3-support-reflect',
          prompt: 'What supports your life? What would happen if God removed the people, systems, and resources you depend on? Where would your security lie?',
        },
      ],
    },

    {
      ref: 'Isaiah 3:16–26',
      title: 'The Daughters of Zion Will Be Brought Low',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(16, 'Moreover the Lord saith, Because the daughters of Zion are haughty, and walk with stretched forth necks and wanton eyes, walking and mincing as they go, and making a tinkling with their feet:'),
            plain(17, 'Therefore the Lord will smite with a scab the crown of the head of the daughters of Zion, and the Lord will discover their secret parts.'),
            plain(25, 'Thy men shall fall by the sword, and thy mighty in the war.'),
            plain(26, 'And her gates shall lament and mourn; and she being desolate shall sit upon the ground.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah3-daughters',
          html:
            'Isaiah turns his eye to those whom he calls "the daughters of Zion"—the women of the city who have cultivated pride and sensuality. Their haughtiness is made visible in their walk, their necks "stretched forth," their eyes "wanton." They "mince" as they go, making a "tinkling" with their feet—their very gait is designed to draw attention and admiration. They have built a self around their beauty and the power it grants them.',
        },
        {
          kind: 'commentary',
          id: 'isaiah3-judgment-beauty',
          html:
            'The judgment is strikingly particular: God will "smite with a scab the crown of the head." The very source of beauty and pride will be struck with disease. The ornaments and garments that follow this verse—the chains, the bracelets, the veils—will be stripped away, replaced with shame. This is not a condemnation of beauty itself or of women. It is a condemnation of pride, sensuality, and the use of beauty as a tool of power to draw others into sensuality. All such pretense will be exposed and destroyed.',
        },
        {
          kind: 'carry',
          html:
            'Pride takes many forms. It may appear in physical beauty, in intellectual achievement, in wealth, in power. When we cultivate pride in these things—when we trust in them, depend on them for our worth, deploy them as instruments of control—we are vulnerable to the same judgment that fell on Zion. The stripping away of these supports is not arbitrary cruelty. It is the gracious act of teaching us where our true worth lies and who alone is worthy of exaltation.',
        },
        {
          kind: 'reflection',
          id: 'isaiah3-pride-reflect',
          prompt: 'In what do you take pride? What would it mean to have those sources of pride "scabbed over"—rendered useless as tools of self-exaltation? Where could your true worth and beauty be found instead?',
        },
        {
          kind: 'christ',
          id: 'isa3-christ',
          title: 'Christ Connection — The Lament Over Pride',
          html:
            'Jesus wept over Jerusalem in the same spirit as Isaiah. He looked at the city&apos;s hardened heart and said, "How often would I have gathered thy children together, even as a hen gathereth her chickens under her wings, and ye would not" (Matt. 23:37). Where Isaiah saw the exposure and stripping away of false beauty, Jesus offers a different path: to come to Him, to become as children, to find worth not in self-exaltation but in the Father&apos;s love. The judgment Isaiah prophesied came because the city refused this gentler offer. But the offer itself—refuge, true beauty, security in God&apos;s care—remains open to all who turn from pride.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For, behold, the Lord, the Lord of hosts, doth take away from Jerusalem and from Judah the stay and the staff.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 3:1 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-isaiah-3',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 3',
      url: 'https://www.sefaria.org/Isaiah.3',
      description: 'Sefaria open-access source text and translations for Isaiah 3.',
    },
    {
      id: 'intertextual-isaiah-3-matthew',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Isaiah 3 ↔ Matthew Intertextual Links',
      url: 'https://intertextual.bible/',
      description: 'Connections between Isaiah 3 and New Testament fulfillment, especially Matt 1–12.',
    },
    {
      id: 'sefaria-isaiah-3-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 3 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Isaiah.3',
      description: 'The Hebrew text of Isaiah 3 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
