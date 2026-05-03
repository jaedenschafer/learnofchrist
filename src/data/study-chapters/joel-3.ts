import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const JOEL_3: RichChapterContent = {
  bookSlug: 'joel',
  bookName: 'Joel',
  chapter: 3,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Joel 3 looks to the final judgment — the valley of decision. God will gather all nations to judge them for what they have done to His people. "The Lord shall roar out of Zion, and utter his voice from Jerusalem; and the heavens and the earth shall shake."',
    'Yet even here, in the midst of judgment, there is a promise of deliverance. "But Zion shall be holy, and there shall no strangers pass through her any more." God will protect His own. The nations will be judged, but God&apos;s people will be saved.',
  ],

  bottomShare: {
    label: 'Share Joel 3',
    quote:
      'Joel looks to the valley of decision where God judges the nations. Yet He promises: "In mount Zion and in Jerusalem shall be deliverance."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joel 3 · Study Guide',
  },

  sections: [
    {
      ref: 'Joel 3:1–8',
      title: 'The Judgment of Nations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'For, behold, in those days, and in that time, when I shall bring again the captivity of Judah and Jerusalem,'),
            plain(2, 'I will also gather all nations, and will bring them down into the valley of Jehoshaphat, and will plead with them there for my people and for my heritage Israel, whom they have scattered among the nations, and parted my land.'),
            plain(3, 'And they have cast lots for my people; and have given a boy for an harlot, and sold a girl for wine, that they might drink.'),
            plain(4, 'Yea, and what have ye to do with me, O Tyre, and Zidon, and all the coasts of Palestine? will ye render me a recompence? and if ye recompence me, swiftly and speedily will I return your recompence upon your own head;'),
            plain(5, 'Because ye have taken my silver and my gold, and have carried into your temples my goodly pleasant things:'),
            plain(6, 'The children also of Judah and the children of Jerusalem have ye sold unto the Grecians, that ye might remove them far from their border.'),
            plain(7, 'Behold, I will raise them out of the place whither ye have sold them, and will return your recompence upon your own head:'),
            plain(8, 'And I will sell your sons and your daughters into the hand of the children of Judah, and they shall sell them to the Sabeans, to a people far off: for the Lord hath spoken it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'joel3-judgment',
          html:
            'God calls all nations into the valley of Jehoshaphat to plead with them. They have scattered God&apos;s people, parted His land, cast lots for His children, sold them as slaves. They have plundered God&apos;s temples. Now they will face the Judge. God will recompense them according to what they have done.',
        },
        {
          kind: 'carry',
          html:
            'God defends His people. He does not let their oppression go unnoticed. He will bring judgment on those who have hurt them. This is why it matters to belong to God — He will vindicate His own. Where have you been oppressed or hurt? God is keeping account, and He will judge.',
        },
        {
          kind: 'reflection',
          id: 'joel3-oppression',
          prompt: 'God will judge those who have scattered His people. How does the promise of God&apos;s justice bring you comfort when you have been wronged?',
        },
      ],
    },

    {
      ref: 'Joel 3:9–21',
      title: 'The Valley of Decision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(9, 'Proclaim ye this among the Gentiles; Prepare war, wake up the mighty men, let all the men of war draw near; let them come up:'),
            plain(10, 'Beat your plowshares into swords, and your pruninghooks into spears: let the weak say, I am strong.'),
            plain(11, 'Assemble yourselves, and come, all ye heathen, and gather yourselves together round about: thither cause thy mighty ones to come down, O Lord.'),
            plain(12, 'Let the heathen be wakened, and come up to the valley of Jehoshaphat: for there will I sit to judge all the heathen round about.'),
            plain(13, 'Put ye in the sickle, for the harvest is ripe: come, get you down; for the press is full, the fats overflow; for their wickedness is great.'),
            plain(14, 'Multitudes, multitudes in the valley of decision: for the day of the Lord is near in the valley of decision.'),
            plain(15, 'The sun and the moon shall be darkened, and the stars shall withdraw their shining.'),
            {
              number: 16,
              spans: [
                t('The Lord also shall roar out of Zion, and utter his voice from Jerusalem; and the heavens and the earth shall shake: but the Lord will be the hope of his people, and the strength of the children of Israel.'),
              ],
            },
            plain(17, 'So shall ye know that I am the Lord your God dwelling in Zion, my holy mountain: then shall Jerusalem be holy, and there shall no strangers pass through her any more.'),
            plain(18, 'And it shall come to pass in that day, that the mountains shall drop down new wine, and the hills shall flow with milk, and all the rivers of Judah shall flow with waters, and a fountain shall come forth of the house of the Lord, and shall water the valley of Shittim.'),
            plain(19, 'Egypt shall be a desolation, and Edom shall be a desolate wilderness, for the violence against the children of Judah, because they have shed innocent blood in their land.'),
            plain(20, 'But Judah shall dwell for ever, and Jerusalem from generation to generation.'),
            plain(21, 'For I will cleanse their blood that I have not cleansed: for the Lord dwelleth in Zion.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'joel3-decision',
          html:
            'The valley of decision is where all flesh will decide and be decided. Will they turn to God or away from Him? Will they be saved or judged? God&apos;s voice will roar from Zion. The heavens and earth will shake. This is the day of final reckoning when all things are made right.',
        },
        {
          kind: 'carry',
          html:
            'Yet for God&apos;s people, there is deliverance. Zion will be holy. Jerusalem will be dwelling forever. A fountain will flow from the house of the Lord. The wilderness will become a place of plenty. God will cleanse His people and dwell in Zion. The end of all things is not destruction for God&apos;s people but dwelling with God.',
        },
        {
          kind: 'reflection',
          id: 'joel3-dwelling',
          prompt: 'God promises that He will dwell in Zion and His people will dwell forever. How does the promise of eternal dwelling with God change the way you face the future?',
        },
      ],
    },

    {
      ref: 'Joel 3 · All',
      title: 'Final Judgment and Final Hope',
      blocks: [
        {
          kind: 'commentary',
          id: 'joel3-theme',
          html:
            'Joel closes with the promise that God will judge all nations and will dwell with His people forever. The book moves from immediate crisis (the locust plague) to the ultimate crisis (the Day of the Lord) to ultimate hope (God dwelling with His people). This is the trajectory of all God&apos;s redemptive work: judgment, repentance, restoration, dwelling.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
