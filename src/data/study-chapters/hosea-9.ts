import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const HOSEA_9: RichChapterContent = {
  bookSlug: 'hosea',
  bookName: 'Hosea',
  chapter: 9,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Hosea 9 speaks of "the days of visitation" — the appointed times when God comes to judge. Israel has become like the days of Gibeah — a reference to the shameful days of the judges, when chaos reigned. Yet even now, God has not forgotten. He will remember and appoint a day.',
    'The chapter echoes with longing and judgment together. Israel will not celebrate the feast. She will eat unclean bread in the land of strangers. She will be scattered. Yet the God of Israel is still God. The days of visitation are His appointed times, and in those times, His purposes are being worked out.',
  ],

  bottomShare: {
    label: 'Share Hosea 9',
    quote:
      'Hosea speaks of the "days of visitation" — the appointed times when God judges and when His purposes unfold among His people.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hosea 9 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-hosea-9',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hosea 9 · Texts & Translations',
      url: 'https://www.sefaria.org/Hosea.9',
      description: 'Primary sources on judgment, exile, and the appointed days of God&apos;s visitation upon Israel.',
    },
    {
      id: 'bibleodyssey-visitation',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Days of Visitation in Scripture',
      url: 'https://www.bibleodyssey.org/en/passages/main-passages/the-book-of-hosea/',
      description: 'Study of the theological theme of God&apos;s appointed times of judgment and redemption in biblical history.',
    },
  ],

  sections: [
    {
      ref: 'Hosea 9:1–9',
      title: 'No Festivals in the Land of Strangers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'Rejoice not, O Israel, for joy, as other people: for thou hast gone a whoring from thy God, thou hast loved a reward upon every corn floor.'),
            plain(2, 'The floor and the winepress shall not feed them, and the new wine shall fail in her.'),
            plain(3, 'They shall not dwell in the Lord&apos;s land; but Ephraim shall return to Egypt, and they shall eat unclean things in Assyria.'),
            plain(4, 'They shall not offer wine offerings to the Lord, neither shall they be pleasing unto him: their sacrifices shall be unto them as the bread of mourners; all that eat thereof shall be polluted: for their bread for their soul shall not come into the house of the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea-9-festival-exile',
          html:
            'They cannot pour wine to God or offer sacrifices. No festivals in exile. Exile is not death but amputation—loss of the very rhythms that marked them as God&apos;s people. Cut off from worship, they face a slow forgetting[res:bibleodyssey-visitation][res:sefaria-hosea-9].',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(5, 'What will ye do in the solemn day, and in the day of the feast of the Lord?'),
            plain(6, 'For, lo, they are gone because of destruction: Egypt shall gather them up, Memphis shall bury them: the pleasant places for their silver, nettles shall possess them: thorns shall be in their tabernacles.'),
            plain(7, 'The days of visitation are come, the days of recompence are come; Israel shall know it: the prophet is a fool, the spiritual man is mad, for the multitude of thine iniquity, and the great hatred.'),
            plain(8, 'The watchman of Ephraim was with my God: but the prophet is a snare of a fowler in all his ways, and hatred in the house of his God.'),
            plain(9, 'They have deeply corrupted themselves, as in the days of Gibeah: therefore he will remember their iniquity, he will visit their sins.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea9-visitation',
          html:
            'The "days of visitation" are the appointed times when God comes to judge and reckon with His people. Israel will not celebrate the feasts of the Lord in the land of strangers. She will eat unclean bread. She will have no sacrifices to offer. The festivals that bound her to God will be impossible in exile.',
        },
        {
          kind: 'carry',
          html:
            'What will Israel do on the feast day, separated from the house of God? What do we do when we have abandoned the covenant and find ourselves far from God&apos;s dwelling? The days of visitation come. God does not forget. He remembers iniquity. He visits sins. The question is: will we return before the day of recompense comes?',
        },
        {
          kind: 'reflection',
          id: 'hosea9-visitation-reflection',
          prompt: 'The "days of visitation" are coming. Are you prepared to meet God? What would it look like for you to return to Him before judgment comes?',
        },
      ],
    },

    {
      ref: 'Hosea 9:10–17',
      title: 'The Appointed Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(10, 'I found Israel like grapes in the wilderness; I saw your fathers as the firstripe in the fig tree at her first time: but they went to Baal-peor, and separated themselves unto that shame; and their abominations were according as they loved.'),
            plain(11, 'As for Ephraim, their glory shall fly away like a bird, from the birth, and from the womb, and from the conception.'),
            plain(12, 'Though they bring up their children, yet will I bereave them, that there shall not be a man left: yea, woe also to them when I depart from them!'),
            plain(13, 'Ephraim, as I saw Tyrus, is planted in a pleasant place: but Ephraim shall bring forth his children to the murderer.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea-9-78mid-1',
          html:
            'Hosea turns from describing Israel&apos;s coming exile to remembering Baal-peor — the moment her destiny was decided long before now.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(14, 'Give them, O Lord: what wilt thou give? give them a miscarrying womb and dry breasts.'),
            plain(15, 'All their wickedness is in Gilgal: for there I hated them: for the wickedness of their doings I will drive them out of mine house, I will love them no more: all their princes are revolters.'),
            plain(16, 'Ephraim is smitten, their root is dried up, they shall bear no fruit: yea, though they bring forth, yet will I slay even the beloved fruit of their womb.'),
            plain(17, 'My God will cast them away, because they did not hearken unto him: and they shall be wanderers among the nations.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea9-grapes',
          html:
            'God looked upon Israel as grapes in the wilderness — a precious find. He saw her fathers as the firstripe of the fig tree — the first precious fruit. But they went to Baal-peor and separated themselves unto shame. The language moves from tender delight to hard judgment. Israel has rejected the love that found her in the wilderness.',
        },
        {
          kind: 'carry',
          html:
            'God speaks of Israel with the ache of a lover who has been abandoned. "Though they bring up their children, yet will I bereave them...yea, woe also to them when I depart from them!" The departure of God is the deepest woe. What brings greater sorrow than the absence of the One who loves you?',
        },
        {
          kind: 'reflection',
          id: 'hosea9-departure',
          prompt: 'God speaks of departing from Israel. What would it mean for you if God departed? How does that fear drive you back toward Him?',
        },
      ],
    },

    {
      ref: 'Hosea 9 · All',
      title: 'The Appointed Times',
      blocks: [
        {
          kind: 'commentary',
          id: 'hosea9-theme',
          html:
            'Hosea 9 emphasizes that God has appointed times — times of visitation, times of recompense. These are not random or arbitrary. They are the times when God accomplishes His purposes in history. Israel will know when those days come. The question is: will she be ready? Will she have returned?',
        },
        {
          kind: 'christ',
          id: 'hos9-christ',
          title: 'Christ Connection — Visitation and Return',
          html:
            'The "days of visitation" speak of appointed times when God comes to reckon with His people. But there is a visitation beyond all others — the coming of Christ Himself. "Blessed are ye that read, and they that hear the words of this prophecy" (Rev. 1:3). Christ came first in humility, despised and rejected. He comes again "in the clouds of heaven with power and great glory" (Matt. 24:30). Both comings are appointed. Both are reckoned. The question Hosea asks — "Will you be ready?" — echoes to us across the centuries.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
