import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Esther 1 — Vashti Deposed
 *
 * King Ahasuerus opens his reign with a 180-day feast in Shushan, displaying
 * the riches and grandeur of his kingdom. At its end, he calls upon Queen Vashti
 * to display her beauty before the assembled princes and people. Vashti refuses.
 * In this refusal, a crisis of honor. The king's counselors grow alarmed: if the
 * queen will not obey, what of all the wives in the kingdom? The decree goes out:
 * Vashti is removed; every man shall rule in his own house. In this moment of
 * royal anger, the stage is set for a story in which God moves through the
 * defiance of a woman who will not yield to display.
 */
export const ESTHER_1: RichChapterContent = {
  bookSlug: 'esther',
  bookName: 'Esther',
  chapter: 1,

  intros: [
    'The book of Esther opens in the court of King Ahasuerus, a Persian king of seemingly limitless power and wealth. The narrative begins not with conflict, but with spectacle — a feast so grand that it lasts for 180 days, a display of the king&apos;s riches meant to impress every prince, every noble, every official of the kingdom. Everything in this opening speaks of order, hierarchy, and the absolute authority of the throne.',
    'But order, once established, can be fragile. When the feast concludes, the king, warmed by wine, summons Queen Vashti to display her beauty before all the assembled princes and people. It is a command dressed in desire. Vashti refuses. In her refusal — small as it may seem — the entire order trembles. A queen who will not obey? The king&apos;s counselors are horrified. The decree goes out: Vashti is removed from her position. Every man shall bear rule in his own house. Thus ends the first chapter — with a woman gone from power, and no one yet aware that her absence is making room for another.',
  ],

  bottomShare: {
    label: 'Share Esther 1',
    quote:
      'When we refuse to be displayed merely for the approval of power, we may lose much. But we keep something — our dignity. And sometimes, in that refusal, God makes room for something larger than what we were asked to surrender.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Esther 1 · Study Guide',
  },

  sections: [
    /* ─── Esther 1:1–3 — The King's Feast ──────────────────────────────── */
    {
      ref: 'Esther 1:1–3',
      title: 'The King&apos;s Feast',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Now it came to pass in the days of Ahasuerus, (this is Ahasuerus which reigned, from India even unto Ethiopia, over an hundred and seven and twenty provinces;)'),
            plain(2, 'That in those days, when the king Ahasuerus sat on the throne of his kingdom, which was in Shushan the palace,'),
            plain(3, 'He made a feast unto all his princes and his servants; the power of Persia and Media, the nobles and princes of the provinces, being before him:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ahasuerus-throne',
          html:
            'King Ahasuerus reigns over an empire of staggering breadth — from India to Ethiopia, 127 provinces under his dominion. The text establishes his power through geography and enumeration. He sits on the throne of his kingdom in Shushan, the royal city. Everything about this opening is designed to communicate absolute authority, established order, and the magnificence of centralized rule.',
        },
        {
          kind: 'commentary',
          id: 'feast-display',
          html:
            'The feast is not a private celebration. It is a display of power — all his princes, his servants, the nobility and princes of the provinces are gathered. This is a king showing his wealth, his reach, his command. A feast that lasts six months is not about sustenance; it is about dominance. It is the king saying, wordlessly but unmistakably: Look what I have. Look how I command.',
        },
        {
          kind: 'carry',
          html:
            'Power often announces itself through spectacle — through gathering, display, and the marshaling of people to witness. We live in a world of such displays, large and small. The question Esther begins to pose is not about whether power exists, but about what happens when power meets resistance. What happens when someone says no?',
        },
        {
          kind: 'reflection',
          id: 'feast-begins',
          prompt: 'King Ahasuerus uses a feast to display his power and establish his authority. When have you felt pressure to display yourself or your worth to others? How did that feel?',
        },
      ],
    },

    /* ─── Esther 1:4–8 — The Splendor Continues ──────────────────────── */
    {
      ref: 'Esther 1:4–8',
      title: 'The Display of Wealth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(4, 'When he shewed the riches of his glorious kingdom and the honour of his excellent majesty many days, even an hundred and fourscore days:'),
            plain(5, 'And when these days were expired, the king made a feast unto all the people that were present in Shushan the palace, both unto great and small, seven days, in the court of the garden of the king&apos;s palace;'),
            plain(6, 'Where were white, green, and blue, hangings, fastened with cords of fine linen and purple to the silver rings and pillars of marble: the beds were of gold and silver, upon a pavement of red, and blue, and white, and black, marble.'),
            plain(7, 'And they gave them drink in vessels of gold, (the vessels being diverse one from another,) and royal wine in abundance, according to the state of the king.'),
            plain(8, 'And the drinking was according to the law; none did compel: for so the king had appointed to all the officers of his house, that they should do according to every man&apos;s pleasure.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hundred-eighty-days',
          html:
            'Six months. The king spends 180 days — nearly half a year — displaying his riches and majesty. This is not extravagance that happens to occur; this is intentional, prolonged spectacle. The detail suggests something anxious beneath the surface: the need to show, to display, to make visible the extent of his power and reach.',
        },
        {
          kind: 'commentary',
          id: 'garden-feast',
          html:
            'The second feast is smaller but more intimate — a week-long celebration in the palace garden for all the people of Shushan, great and small. The details are vivid: white, green, and blue hangings; silver rings and marble pillars; beds of gold and silver upon marble pavements of multiple colors. Vessels of gold, diverse and beautiful. Wine in abundance. Everything is ordered, magnificent, controlled.',
        },
        {
          kind: 'hebrew',
          id: 'shushan-city',
          title: 'Shushan — "The Lily"',
          script: 'שׁוּשַׁן',
          translit: '<strong>Shushan</strong> · lily; the great city where Ahasuerus holds his court',
          description:
            'Shushan (also known as Susa) was one of the great capitals of the Persian empire. The name evokes beauty — a lily — which is fitting for a city celebrated for its splendor. In Esther, Shushan becomes the setting for both the display of earthly power and the hidden movements of divine providence.',
        },
        {
          kind: 'carry',
          html:
            'The law at the feast is striking: no one is compelled. Every man may drink according to his own pleasure. Yet this is still the law of the king — his order manifested as freedom. Power can seem most gracious when it permits what it allows. How often do we mistake permission for freedom? How often does authority frame its constraints as generosity?',
        },
        {
          kind: 'reflection',
          id: 'splendor-display',
          prompt: 'The king&apos;s court is beautiful and orderly, yet built on absolute authority. Have you experienced environments where order and control are presented as beauty and kindness? What was that like?',
        },
      ],
    },

    /* ─── Esther 1:10–15 — Vashti Refuses ──────────────────────────────── */
    {
      ref: 'Esther 1:10–15',
      title: 'The Queen&apos;s Refusal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(10, 'On the seventh day, when the heart of the king was merry with wine, he commanded Mehuman, Biztha, Harbona, Bigtha, and Abagtha, Zethar, and Carcas, the seven chamberlains that served in the presence of king Ahasuerus,'),
            plain(11, 'To bring Vashti the queen before the king with the crown royal, to shew the people and the princes her beauty: for she was fair to look on.'),
            plain(12, 'But the queen Vashti refused to come at the king&apos;s commandment by his chamberlains: therefore was the king very wroth, and his anger burned in him.'),
            plain(13, 'Then the king said to the wise men, which knew the times, (for so was the king&apos;s manner to come before all that knew law and judgment;)'),
            plain(14, 'And the next unto him was Carshena, Shethar, Admatha, Tarshish, Meres, Marsena, and Memucan, the seven princes of Persia and Media, which saw the king&apos;s face, and sat the first in the kingdom;'),
            plain(15, 'What shall we do unto the queen Vashti? according to law, because she hath not performed the commandment of the king Ahasuerus by the chamberlains.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'vashti-summoned',
          html:
            'The king, warmed by wine, commands his chamberlains to bring Vashti before him. She is to wear her crown — her status is to be displayed — and show her beauty to the people and princes. The command is framed almost casually, in the midst of festivity. But it is a command nonetheless. The king desires to display his queen as he has displayed his wealth: as a possession to be admired.',
        },
        {
          kind: 'hebrew',
          id: 'vashti-name',
          title: 'Vashti — "The Desired One"',
          script: 'וַשְׁתִּי',
          translit: '<strong>Vashti</strong> · possibly "the desired one" or "beautiful"',
          description:
            'Vashti&apos;s name may mean "the desired one" — fitting for a queen whose husband wishes to display her beauty. Yet Vashti becomes the one who refuses to be desired, who refuses to be displayed. In this refusal, she asserts something the king did not expect: that a person might not wish to be the object of the king&apos;s desire.',
        },
        {
          kind: 'commentary',
          id: 'refused-come',
          html:
            'Vashti refuses. The text is spare: she "refused to come at the king&apos;s commandment by his chamberlains." No explanation is given for her refusal. She does not argue. She does not explain. She simply refuses. And in that refusal, she does something extraordinary: she claims herself. She says no to display. No to being a possession shown off to the court. No to the king&apos;s will.',
        },
        {
          kind: 'commentary',
          id: 'king-wroth',
          html:
            'The king is very wroth. His anger burns in him. This is not mere disappointment; this is the fury of absolute power confronted with resistance. He had the authority. He exercised it. And he was refused. The entire structure of his dominion — the 127 provinces, the feast, the display of majesty — rests on the assumption that his will will be obeyed. Now it is not. The crisis is not political; it is existential. The king&apos;s power has been questioned.',
        },
        {
          kind: 'carry',
          html:
            'Vashti&apos;s refusal costs her everything in the world as she knows it. She will lose her crown, her palace, her place. Yet she refuses to be displayed. There is something sacred in that refusal — a dignity that cannot be purchased by position, cannot be extracted by command. When have you refused something that cost you dearly? What did that refusal protect?',
        },
        {
          kind: 'reflection',
          id: 'vashti-refuses',
          prompt: 'Vashti refuses the king&apos;s command without explanation, though she knows it will cost her dearly. What might drive someone to refuse, knowing the cost? What would you refuse, even if it meant losing everything?',
        },
      ],
    },

    /* ─── Esther 1:16–22 — The Decree ───────────────────────────────── */
    {
      ref: 'Esther 1:16–22',
      title: 'The Royal Decree',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(16, 'And Memucan answered before the king and the princes, Vashti the queen hath not done wrong to the king only, but also to all the princes, and to all the people that are in all the provinces of the king Ahasuerus.'),
            plain(17, 'For this deed of the queen shall come abroad unto all women, to make their husbands despise them, and to say, The king Ahasuerus commanded Vashti the queen to be brought in before him, but she came not.'),
            plain(18, 'Likewise shall the ladies of Persia and Media say this day unto all the king&apos;s princes, which have heard of the deed of the queen. Thus shall there arise too much contempt and wrath.'),
            plain(19, 'If it please the king, let there go a royal commandment from him, and let it be written among the laws of the Persians and the Medes, that it be not altered; That Vashti come no more before the king: and let the king give her royal estate unto another that is better than she.'),
            plain(20, 'And when the king&apos;s decree which he shall make shall be published throughout all his kingdom, (for it is great,) all the wives shall give to their husbands honour, both to great and small.'),
            plain(21, 'And the saying pleased the king and the princes: and the king did according to the word of Memucan.'),
            plain(22, 'For he sent letters into all the provinces of the king, into every province according to the writing thereof, and to every people after their language, that every man should bear rule in his own house, and that it should be published in the language of his people.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'memucan-counsel',
          html:
            'Memucan, chief among the king&apos;s counselors, presents Vashti&apos;s refusal not as a personal affront but as a threat to the entire order. He argues that if Vashti goes unpunished, all the wives of the kingdom will follow her example. They will despise their husbands. They will learn that even a queen need not obey. The counsel plays to the king&apos;s deepest fear: the loss of control. The advisor frames punishment not as revenge, but as necessity.',
        },
        {
          kind: 'commentary',
          id: 'law-of-medes',
          html:
            'Memucan proposes that Vashti be removed by permanent royal decree — so permanent that it becomes law, immutable among the laws of the Persians and Medes. She is to "come no more before the king," and her position is to pass to "another that is better than she." The law is designed to be irrevocable, written into the fabric of the empire. Nothing, the text tells us, would have the force of this word once it went out.',
        },
        {
          kind: 'carry',
          html:
            'There is something deeply instructive here. The king and his counselors respond to one woman&apos;s refusal by creating a law meant to ensure that no woman ever refuses again. They transform a personal crisis into a permanent structure. This is often how systems of control work — they respond to an isolated act of resistance by codifying control more deeply. And yet, as we will see, the very law designed to eliminate such resistance creates the space for a woman who understands the law better than her king, who uses the law against itself.',
        },
        {
          kind: 'christ',
          id: 'esther-1-christ',
          title: 'Christ Connection — The King Who Chose Surrender',
          html:
            'Ahasuerus desired to display his queen, to show her beauty, to command her compliance. This is the desire of power — to possess, to display, to control. But there is another King, who came not to display a bride, but to redeem her. Jesus did not summon His bride to show her off to the court of heaven. He laid down His life for her (Ephesians 5:25). He chose surrender over display, sacrifice over control. He alone is the King whose power consists in giving Himself away.',
        },
      ],
    },
  ],
};
