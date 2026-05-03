import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const JOEL_2: RichChapterContent = {
  bookSlug: 'joel',
  bookName: 'Joel',
  chapter: 2,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 5 },
  intros: [
    'Joel 2 moves from the locust plague to the Day of the Lord itself — when God will judge all the earth. "The day of the Lord is great and very terrible: and who can abide it?" Yet even in this judgment, there is a call to repentance and a promise of salvation.',
    'The chapter contains the famous passage: "I will pour out my spirit upon all flesh" — quoted at Pentecost in Acts 2:17. Even in judgment, God promises His Spirit. "Whosoever shall call upon the name of the Lord shall be delivered." Salvation is offered to all who call upon God.',
  ],

  bottomShare: {
    label: 'Share Joel 2',
    quote:
      '"I will pour out my spirit upon all flesh...Whosoever shall call on the name of the Lord shall be delivered." Joel promises salvation and the Spirit at Pentecost.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joel 2 · Study Guide',
  },

  sections: [
    {
      ref: 'Joel 2:1–11',
      title: 'The Day of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'Blow ye the trumpet in Zion, and sound an alarm in my holy mountain: let all the inhabitants of the land tremble: for the day of the Lord cometh, for it is nigh at hand;'),
            plain(2, 'A day of darkness and of gloominess, a day of clouds and of thick darkness, as the morning spread upon the mountains: a great people and a strong; there hath not been ever the like, neither shall be any more after it, even to the years of many generations.'),
            {
              number: 3,
              spans: [
                t('A fire devoureth before them; and behind them a flame burneth: the land is as the garden of Eden before them, and behind them a desolate wilderness; yea, and nothing shall escape them.'),
              ],
            },
            plain(4, 'The appearance of them is as the appearance of horses; and as horsemen, so shall they run.'),
            plain(5, 'Like the noise of chariots on the tops of mountains shall they leap, like the noise of a flame of fire that devoureth the stubble, as a strong people set in battle array.'),
            plain(6, 'Before their face the people shall be much pained: all faces shall gather blackness.'),
            plain(7, 'They shall run like mighty men; they shall climb the wall like men of war; and they shall march every one on his ways, and they shall not break their ranks:'),
            plain(8, 'Neither shall one thrust another; they shall walk every one in his path: and when they fall upon the sword, they shall not be wounded.'),
            plain(9, 'They shall run to and fro in the city; they shall run upon the wall, they shall climb up upon the houses; they shall enter in at the windows like a thief.'),
            plain(10, 'The earth shall quake before them; the heavens shall tremble: the sun and the moon shall be dark, and the stars shall withdraw their shining:'),
            plain(11, 'And the Lord shall utter his voice before his army: for his camp is very great: for he is strong that executeth his word: for the day of the Lord is great and very terrible; and who can abide it?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'joel2-dayoflord',
          html:
            'The Day of the Lord is described with apocalyptic language — darkness, judgment, the heavens trembling, the sun and moon dark. It is a day of terrible judgment. Yet it is also "the day of the Lord" — the day when God is fully revealed, when His purposes are fully enacted. The question stands: "Who can abide it?"',
        },
        {
          kind: 'carry',
          html:
            'The nations will gather before God&apos;s judgment. All flesh will see His salvation or His judgment. The Day of the Lord will come. This is not meant to terrify into despair, but to awaken into repentance. The only way to abide that day is to turn to God now.',
        },
        {
          kind: 'reflection',
          id: 'joel2-day',
          prompt: 'The Day of the Lord is coming. How does the thought of standing before God change the way you live today? How will you prepare?',
        },
      ],
    },

    {
      ref: 'Joel 2:12–32',
      title: 'The Call to Return and the Promise of the Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 12,
              spans: [
                t('Therefore also now, saith the Lord, turn ye even to me with all your heart, and with fasting, and with weeping, and with mourning:'),
              ],
            },
            plain(13, 'And rend your heart, and not your garments, and turn unto the Lord your God: for he is gracious and merciful, slow to anger, and of great kindness, and repenteth him of the evil.'),
            plain(14, 'Who knoweth if he will return and repent, and leave a blessing behind him; even a meat offering and a drink offering unto the Lord your God?'),
            plain(15, 'Blow the trumpet in Zion, sanctify a fast, call a solemn assembly:'),
            plain(16, 'Gather the people, sanctify the congregation, assemble the elders, gather the children, and those that suck the breasts: let the bridegroom go forth of his chamber, and the bride out of her closet.'),
            plain(17, 'Let the priests, the ministers of the Lord, weep between the porch and the altar, and let them say, Spare thy people, O Lord, and give not thine heritage to reproach, that the heathen should rule over them: wherefore should they say among the people, Where is their God?'),
            plain(18, 'Then will the Lord be jealous for his land, and pity his people.'),
            {
              number: 19,
              spans: [
                t('Yea, the Lord will answer and say unto his people, Behold, I will send you corn, and wine, and oil, and ye shall be satisfied therewith: and I will no more make you a reproach among the heathen:'),
              ],
            },
            plain(20, 'But I will remove far off from you the northern army, and will drive him into a land barren and desolate, with his face toward the east sea, and his hinder part toward the utmost sea, and his stink shall come up, and his ill savour shall come up, because he hath done great things.'),
            plain(21, 'Fear not, O land; be glad and rejoice: for the Lord will do great things.'),
            plain(22, 'Be not afraid, ye beasts of the field: for the pastures of the wilderness do spring, for the tree beareth her fruit, the fig tree and the vine do yield their strength.'),
            plain(23, 'Be glad then, ye children of Zion, and rejoice in the Lord your God: for he hath given you the former rain moderately, and he will cause to come down for you the rain, the former rain, and the latter rain in the first month.'),
            plain(24, 'And the floors shall be full of wheat, and the vats shall overflow with wine and oil.'),
            plain(25, 'And I will restore to you the years that the locust hath eaten, the cankerworm, and the caterpiller, and the palmerworm, my great army which I sent among you.'),
            plain(26, 'And ye shall eat in plenty, and be satisfied, and praise the name of the Lord your God, that hath dealt wondrously with you: and my people shall never be ashamed.'),
            plain(27, 'And ye shall know that I am in the midst of Israel, and that I am the Lord your God, and none else: and my people shall never be ashamed.'),
            {
              number: 28,
              spans: [
                t('And it shall come to pass afterward, that I will '),
                hp('pour out my spirit upon all flesh', 'joel2-spirit'),
                t('; and your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see visions:'),
              ],
            },
            plain(29, 'And also upon the servants and upon the handmaids in those days will I pour out my spirit.'),
            plain(30, 'And I will shew wonders in the heavens and in the earth, blood, and fire, and pillars of smoke.'),
            plain(31, 'The sun shall be turned into darkness, and the moon into blood, before the great and the terrible day of the Lord come.'),
            plain(32, 'And it shall come to pass, that whosoever shall call upon the name of the Lord shall be delivered: for in mount Zion and in Jerusalem shall be deliverance, as the Lord hath said, and in the remnant whom the Lord shall call.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'joel2-spirit',
          html:
            'This is the passage quoted at Pentecost in Acts 2:17. God will pour out His Spirit on all flesh — not just the prophets, not just the priests, but on all flesh. Sons and daughters will prophesy. Old men will dream dreams. Young men will see visions. The barrier between the holy and the common will be broken down. The Spirit will be poured out on all.',
        },
        {
          kind: 'hebrew',
          id: 'joel2-shfak',
          title: 'Shafak — "To Pour Out"',
          script: 'שׁפַךְ',
          translit: '<strong>Shafak</strong> · to pour out; to shed; to scatter',
          description:
            'The word suggests abundance — not a trickle but a pouring out, an overflowing. The Spirit will not be rationed. It will be poured out abundantly on all flesh.',
        },
        {
          kind: 'christ',
          id: 'joel2-christ-spirit',
          title: 'Christ Connection — Pentecost and Salvation',
          html:
            'Joel&apos;s promise is fulfilled at Pentecost when the Spirit is poured out on the church. But the promise goes deeper: "Whosoever shall call upon the name of the Lord shall be delivered." This salvation comes through Christ. In Him, all who call upon God receive the Spirit. In Him, the barrier between Jew and Gentile, slave and free, male and female is broken down. All can receive the Spirit.',
        },
        {
          kind: 'carry',
          html:
            'After repentance comes restoration. God will give back what the locusts have eaten. The fields will be full. The vats will overflow. And more — He will pour out His Spirit. Repentance is not an ending but a beginning. It is the opening of the door to restoration and blessing.',
        },
        {
          kind: 'reflection',
          id: 'joel2-spirit-reflection',
          prompt: 'If you call upon the name of the Lord, you will be saved and will receive His Spirit. What would change in your life if you truly believed this promise?',
        },
      ],
    },

    {
      ref: 'Joel 2 · All',
      title: 'Judgment and Redemption',
      blocks: [
        {
          kind: 'commentary',
          id: 'joel2-theme',
          html:
            'Joel 2 shows the pattern of God&apos;s redemptive work: judgment calls to repentance, repentance opens the door to restoration, and restoration comes with the gift of the Spirit. This is the gospel pattern. The Day of the Lord is not an ending but a beginning — the beginning of a new covenant, the beginning of the outpouring of the Spirit, the beginning of salvation for all who call upon God.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
