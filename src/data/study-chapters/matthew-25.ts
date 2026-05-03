import { hp, t, plain, type RichChapterContent } from './types';

/**
 * Matthew 25 — The Ten Virgins, Talents, and Sheep and Goats
 *
 * Three parables. The ten virgins await the bridegroom. Five are wise, bring oil;
 * five are foolish, bring none. The bridegroom comes late; the foolish run out of
 * oil. They are shut out. The talents: a master entrusts servants with different
 * sums. Two invest and gain. One buries his. The faithful are rewarded; the
 * unfaithful is cast out. The sheep and goats: those who fed the hungry, clothed
 * the naked, visited the imprisoned did it unto Christ. "Inasmuch as ye have done
 * it unto one of the least of these my brethren, ye have done it unto me."
 */
export const MATTHEW_25: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 25,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Matthew 25 contains three parables, each teaching about readiness and faithfulness at the end. The kingdom of heaven is like unto ten virgins awaiting a bridegroom. Five are prudent, preparing ahead. Five are foolish, unprepared. When the bridegroom comes late, the foolish beg to enter. But the door is shut. "I know you not."',
    'Then Jesus speaks of talents—gifts entrusted to servants. Each is given according to ability. Two of the servants invest and double their gifts. One buries his in fear. The master rewards the faithful and condemns the unfaithful as "wicked and slothful." The chapter culminates in the parable of the sheep and goats: the distinction between the righteous and the unrighteous is measured by their care for the vulnerable, the hungry, the imprisoned. "Inasmuch as ye have done it unto the least, ye have done it unto me."',
  ],

  sections: [
    /* ─── Matthew 25:1–30 — The Virgins and the Talents ─────────────────── */
    {
      ref: 'Matthew 25:1–30',
      title: 'Readiness and Faithfulness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(1, 'Then shall the kingdom of heaven be likened unto ten virgins, which took their lamps, and went forth to meet the bridegroom.'),
            plain(4, 'But the wise took oil in their vessels with their lamps.'),
            plain(10, 'And while they went to buy, the bridegroom came; and they that were ready went in with him to the marriage: and the door was shut.'),
            plain(14, 'For the kingdom of heaven is as a man travelling into a far country, who called his own servants, and delivered unto them his goods.'),
            plain(19, 'After a long time the lord of those servants cometh, and reckoneth with them.'),
            plain(23, 'His lord said unto him, Well done, thou good and faithful servant... enter thou into the joy of thy lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt25-virgins',
          html:
            'Ten virgins await a bridegroom. Five are wise and bring oil in their vessels. Five are foolish and bring no oil. The bridegroom delays. All grow drowsy and sleep. At midnight, a cry: "Behold, the bridegroom cometh; go ye out to meet him!" The virgins rise and trim their lamps. But the foolish realize they have no oil. They ask the wise for some, but there is not enough to share. They go to buy, and while they are away, the bridegroom comes. Those ready enter the feast; the door is shut.',
        },
        {
          kind: 'commentary',
          id: 'matt25-ready',
          html:
            'The parable teaches preparedness. Readiness cannot be borrowed or improvised at the last moment. The wise virgins anticipated delay and prepared. The foolish assumed the bridegroom would come at a predictable hour. Jesus calls His followers to preparation—spiritual readiness, vigilance, commitment to truth. These cannot be acquired hastily when opportunity arrives.',
        },
        {
          kind: 'greek',
          id: 'matt25-phronimos',
          title: 'Phronimos — Wise; Prudent',
          script: 'φρόνιμος',
          translit: '<strong>Phronimos</strong> · wise; prudent; sensible; having practical wisdom',
          description:
            'Phronimos refers not to intellectual brilliance but to practical wisdom—the ability to see ahead and prepare, to discern what matters and act accordingly.',
        },
        {
          kind: 'commentary',
          id: 'matt25-talents',
          html:
            'The parable of the talents: a master gives servants different sums according to their abilities—five talents, two, and one. He goes away. The first servant invests and gains five more. The second doubles his two. The third buries his talent in fear. When the master returns, he commends the first two as "good and faithful servants" and rewards them with greater responsibility. But the third, who buried his talent, is condemned as wicked and slothful, cast into outer darkness.',
        },
        {
          kind: 'greek',
          id: 'matt25-talanton',
          title: 'Talanton — Talent',
          script: 'τάλαντον',
          translit: '<strong>Talanton</strong> · talent; a large sum of money; a gift or capacity',
          description:
            'A talent was a unit of weight and currency, representing a large sum. Jesus uses it metaphorically for the gifts, capacities, and resources God entrusts to His people. All have been given something; all will be held accountable for how they steward it.',
        },
        {
          kind: 'commentary',
          id: 'matt25-wicked-servant',
          html:
            'The wicked servant says he knew the master was harsh and feared losing the talent, so he buried it. He presents his inaction as prudence. But the master rejects this reasoning. Even placing the money with the bankers would have yielded interest. The master condemns not the loss of an investment but the refusal to invest at all—the choice to be passive when action was possible.',
        },
        {
          kind: 'christ',
          id: 'matt25-christ-judge',
          title: 'Christ Connection — Christ the Judge of Faithfulness',
          html:
            'Jesus is the master who entrusts gifts and will one day reckon with His servants. Faithfulness is measured not by the magnitude of the gift but by faithful stewardship of what has been given. To whom much is given, much is required. But even what little you have, if used faithfully, is multiplied.',
        },
        {
          kind: 'carry',
          html:
            'What talents, gifts, or resources has Christ entrusted to you? Are you investing them, burying them, or squandering them? God does not expect all of us to gain equally. He expects faithfulness with what He has given.',
        },
        {
          kind: 'reflection',
          id: 'matt25-talents',
          prompt: 'If Christ asked you to account for how you have invested the gifts and opportunities He has given you, what would you say?',
        },
      ],
    },

    /* ─── Matthew 25:31–46 — The Sheep and the Goats ──────────────────── */
    {
      ref: 'Matthew 25:31–46',
      title: 'The Least of These',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(31, 'When the Son of man shall come in his glory, and all the holy angels with him, then shall he sit upon the throne of his glory:'),
            plain(32, 'And before him shall be gathered all nations: and he shall separate them one from another, as a shepherd divideth his sheep from the goats:'),
            plain(35, 'For I was an hungred, and ye gave me meat: I was thirsty, and ye gave me drink: I was a stranger, and ye took me in:'),
            plain(40, 'Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.'),
            plain(41, 'Then shall he say also unto them on the left hand, Depart from me, ye cursed, into everlasting fire prepared for the devil and his angels:'),
            plain(45, 'Then shall they answer him, saying, Lord, when saw we thee an hungred, or athirst, or a stranger, or naked, or sick, or in prison?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt25-throne',
          html:
            'The Son of man comes in glory. All nations are gathered before Him. He sits on His throne of glory and separates the nations as a shepherd divides sheep from goats. The criterion is not doctrine or profession of faith but deeds—what they did for the hungry, thirsty, stranger, naked, sick, and imprisoned.',
        },
        {
          kind: 'commentary',
          id: 'matt25-least',
          html:
            'To the sheep on His right, Jesus says: "Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me." Every act of compassion toward the vulnerable is an act of worship toward Christ. Every act of neglect is a refusal to Christ Himself. The judgment centers not on orthodoxy but on love lived out.',
        },
        {
          kind: 'greek',
          id: 'matt25-elachistos',
          title: 'Elachistos — Least; Smallest; Most Insignificant',
          script: 'ἐλάχιστος',
          translit: '<strong>Elachistos</strong> · least; smallest; most insignificant; least important',
          description:
            'The least—those society deems insignificant, powerless, undeserving—are the ones in whom Christ meets us. His presence is found hidden in the hungry beggar and the imprisoned criminal.',
        },
        {
          kind: 'commentary',
          id: 'matt25-goats',
          html:
            'To those on the left—the goats—Jesus says: "Depart from me, ye cursed, into everlasting fire prepared for the devil and his angels." Their sin is not active evil but passive neglect. They did not feed the hungry or clothe the naked. They passed by when they could have helped. In failing to serve the least, they failed to serve Christ.',
        },
        {
          kind: 'commentary',
          id: 'matt25-righteous-question',
          html:
            'Both the righteous and the unrighteous ask: "Lord, when saw we thee hungred, or athirst, or a stranger, or naked, or sick, or in prison?" They do not recognize that in serving the needy, they serve Christ. This suggests that faithfulness is not performed for reward or recognition. It is the natural overflow of love for Christ and for others.',
        },
        {
          kind: 'christ',
          id: 'matt25-christ-least',
          title: 'Christ Connection — Christ in the Least',
          html:
            'Jesus identifies Himself with the hungry, the stranger, the imprisoned, the sick. To see Christ, look to the vulnerable. To love Christ, love those whom the world despises. The kingdom is manifest not in power and status but in the willingness to serve the small and forgotten.',
        },
        {
          kind: 'carry',
          html:
            'Who are the least in your community? The poor, the foreigner, the prisoner, the sick? Jesus teaches that serving them is serving Him. Neglecting them is rejecting Him. How is your faith measured by your treatment of the vulnerable?',
        },
        {
          kind: 'reflection',
          id: 'matt25-least',
          prompt: 'If Christ is present in the least of these, whom in your life might you be overlooking? How could you more actively serve the vulnerable and forgotten?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 25 · Study Guide',
  },

  hasHebrew: false,
};
