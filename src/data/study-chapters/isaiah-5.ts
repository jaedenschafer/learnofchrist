import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 5 — The Song of the Vineyard
 *
 * "Now will I sing to my well-beloved a song of my beloved touching his vineyard."
 * Isaiah presents a parable: God prepared a vineyard with tender care—He dug it, cleared
 * it of stones, planted it with the finest grapes. Yet it brought forth wild grapes.
 * "What could have been done more to my vineyard, that I have not done in it?"
 * The chapter continues with six woes against Israel&apos;s sins. Christ is the True Vine,
 * who bears good fruit and extends the covenant promise to a new people.
 */
export const ISAIAH_5: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 5,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Isaiah now takes on the role of a poet. He sings a song—not a song of celebration, but a song of lament and judgment. The vineyard he describes is the people of Israel and Judah. God, the beloved, has done everything necessary for it to flourish. He has chosen good ground, dug and tilled it, cleared it of stones, planted it with the finest vines. He has built a watchtower in its midst. He has done the work of a careful vinedresser. Yet the vineyard has produced wild grapes—fruit that is sour, useless, nothing like what was planted.',
    'The image is devastating because it places responsibility squarely where it belongs: not with God, who has done everything necessary, but with the people themselves. They have had every advantage, every blessing, every opportunity to flourish. Yet they have chosen sterility and bitterness. The song ends with a terrible question: "What could have been done more to my vineyard, that I have not done in it?" The answer is: nothing. God has done all that could be done. The failure is the vineyard&apos;s alone.',
  ],

  sections: [
    {
      ref: 'Isaiah 5:1–7',
      title: 'The Song of the Vineyard',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Now will I sing to my well-beloved a song of my beloved touching his vineyard. My well-beloved hath a vineyard in a very fruitful hill:'),
            plain(2, 'And he fenced it, and gathered out the stones thereof, and planted it with the choicest vines: and built a tower in the midst of it, and also made a winepress therein: and he looked that it should bring forth grapes, and it brought forth wild grapes.'),
            plain(3, 'And now, O inhabitants of Jerusalem, and men of Judah, judge, I pray you, betwixt me and my vineyard.'),
            plain(4, 'What could have been done more to my vineyard, that I have not done in it? wherefore, when I looked that it should bring forth grapes, brought it forth wild grapes?'),
            plain(5, 'And now go to; I will tell you what I will do to my vineyard: I will take away the hedge thereof, and it shall be eaten up; and break down the wall thereof, and it shall be trodden down.'),
            plain(6, 'And I will lay it waste: it shall not be pruned, nor digged; but there shall come up briers and thorns: I will also command the clouds that they rain no rain upon it.'),
            plain(7, 'For the vineyard of the Lord of hosts is the house of Israel, and the men of Judah his pleasant plant: and he looked for judgment, but behold oppression; for righteousness, but behold a cry.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah5-vineyard-preparation',
          html:
            'Every detail of the vineyard&apos;s preparation is significant. God chose a fruitful hill. He fenced it—protecting it from wild animals and thieves. He gathered out the stones—clearing away obstacles. He planted it with the choicest vines—the best seed, the best breeding. He built a tower—for watching and defense. He made a winepress—anticipating the harvest of grapes. Every action reflects care, anticipation, hope. God has done the work of a devoted farmer. And He has done it all expecting a particular outcome: grapes.',
        },
        {
          kind: 'commentary',
          id: 'isaiah5-wild-grapes',
          html:
            'Yet the vineyard brought forth wild grapes. Not sour wine, but grapes that were never worth planting in the first place. The poem invites the readers themselves—the inhabitants of Jerusalem and Judah—to judge between God and the vineyard. The verdict is obvious. God has done everything right. The vineyard has failed. And now God will do what a farmer must do with a fruitless vineyard: He will remove its protection and let it fall to ruin.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah5-kerem',
          title: 'Kerem — "Vineyard"',
          script: 'כֶּרֶם',
          translit: '<strong>Kerem</strong> · vineyard; a cultivated plot of grapevines',
          description:
            'In Hebrew thought, a vineyard is a place of intentional cultivation and care. It stands in contrast to wild places. For a vineyard to fail is not merely an accident—it is the failure of intentionality itself. God has made Israel into a vineyard, a place meant to bear fruit. When it bears wild grapes, the failure is total and inexplicable.',
        },
        {
          kind: 'christ',
          id: 'isaiah5-christ-true-vine',
          title: 'Christ Connection — The True Vine',
          html:
            'In John 15, Jesus takes up this same image: "I am the true vine, and my Father is the husbandman...I am the vine, ye are the branches." Where Israel&apos;s vineyard produced wild grapes, Jesus—the true vine—produces good fruit. Those who abide in Him will bear much fruit. The covenant promise is transferred in Christ to a new community of believers: all who are grafted into the true vine through faith. The parable of Isaiah 5 is thus also a parable of grace. Though the old vineyard failed, God does not abandon His plan to have a fruitful people. He will establish His vineyard anew in Christ.',
        },
        {
          kind: 'carry',
          html:
            'The Song of the Vineyard asks us a question: What sort of fruit are we bearing? God has done everything necessary for our flourishing—He has given us His word, His Spirit, His grace, His own presence. Have we responded with faithful fruit, or with wild grapes—with bitterness, selfishness, empty religion? The question is searching. But it is also an invitation. In Christ, we can be grafted into the true vine and begin to bear the fruit that glorifies God.',
        },
        {
          kind: 'reflection',
          id: 'isaiah5-fruit-reflect',
          prompt: 'What fruit has your life born? In what areas has God&apos;s care and investment in you produced good fruit? In what areas have you produced wild grapes—bitterness, selfishness, empty action?',
        },
      ],
    },

    {
      ref: 'Isaiah 5:8–30',
      title: 'Six Woes Against Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(8, 'Woe unto them that join house to house, that lay field to field, till there be no place, that they may be placed alone in the midst of the earth!'),
            plain(11, 'Woe unto them that rise up early in the morning, that they may follow strong drink; that continue until night, till wine inflame them!'),
            plain(18, 'Woe unto them that draw iniquity with cords of vanity, and sin as it were with a cart rope:'),
            plain(20, 'Woe unto them that call evil good, and good evil; that put darkness for light, and light for darkness; that put bitter for sweet, and sweet for bitter!'),
            plain(21, 'Woe unto them that are wise in their own eyes, and prudent in their own sight!'),
            plain(22, 'Woe unto them that are mighty to drink wine, and men of strength to mingle strong drink;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah5-woes',
          html:
            'After the parable comes the pronouncement. Six times Isaiah begins with "Woe"—a cry of lamentation and condemnation. Each woe targets a particular form of corruption. Some woes address injustice: the consolidation of property, the displacement of the poor. Others target indulgence: the pursuit of strong drink, the numbing of conscience. Still others name the inversion of values themselves: calling evil good and good evil, exchanging light for darkness. These are the specific sins that have made the vineyard barren.',
        },
        {
          kind: 'commentary',
          id: 'isaiah5-corruption-cascade',
          html:
            'Notice the pattern. Injustice and indulgence lead to the hardening of conscience. When you commit yourself to consolidating power and wealth, when you spend your days drinking and pursuing pleasure, your capacity to see moral reality begins to warp. You begin to call evil good because you have invested in evil. You call good evil because goodness threatens your interests. The woes show how sin, once begun, corrupts the very faculty by which we judge between truth and falsehood.',
        },
        {
          kind: 'carry',
          html:
            'The woes of Isaiah are not directed at a distant ancient nation alone. They speak to the temptations that face every generation: the desire to accumulate and control, the allure of escapism through indulgence, the self-deception that calls right and wrong by inverted names. What voices in our culture urge us toward these woes? And how might we cultivate the capacity to see clearly, to call things by their true names?',
        },
        {
          kind: 'reflection',
          id: 'isaiah5-woes-reflect',
          prompt: 'Which of the six woes do you most see operating in your own society—or in your own heart? What would it look like to resist it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Now will I sing to my well-beloved a song of my beloved touching his vineyard...What could have been done more to my vineyard, that I have not done in it?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 5:1,4 · Study Guide',
  },

  hasHebrew: true,
};
