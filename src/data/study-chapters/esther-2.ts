import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Esther 2 — Esther Becomes Queen
 *
 * After Vashti&apos;s removal, the king&apos;s servants suggest a search throughout the
 * empire for a new queen. Young maidens are gathered to the palace; for twelve
 * months, they undergo beauty treatments to be prepared. Among them is Hadassah,
 * a young Jewish woman raised by her cousin Mordecai. She finds favor above all
 * the other women, and the king loves her, setting the royal crown on her head.
 * But as Esther keeps her identity hidden, Mordecai discovers a plot — two
 * officials plan to kill the king. Esther reports it in Mordecai&apos;s name, and the
 * deed is recorded. In this chapter, an orphan becomes a queen, and a faithful
 * servant becomes a witness to the king&apos;s preservation.
 */
export const ESTHER_2: RichChapterContent = {
  bookSlug: 'esther',
  bookName: 'Esther',
  chapter: 2,

  estimatedMinutes: { 5: 3, 10: 9, 15: 12 },
  intros: [
    'The king&apos;s anger cools, and his servants bring him counsel: seek throughout the kingdom for a fair young virgin who will be pleasing in the king&apos;s sight. Begin a search. Gather the maidens. Thus begins a great gathering — women from every province of the empire summoned to the palace to be made ready, each hoping to find favor in the eyes of the king and to become the next queen of Persia.',
    'Among them is a young woman named Hadassah — though she will be known to the king and the court as Esther. She is a Jew, an orphan raised by her cousin Mordecai. She asks for nothing more than what Hegai, the king&apos;s chamberlain, thinks she should have, and she finds favor in everyone&apos;s eyes. The king loves her more than all the other women, and she is crowned queen. Yet Esther conceals her identity. No one in the palace knows that their queen is Jewish, or that she is the ward of a man whose faithfulness to the king will soon come to light. In this chapter, we see how an orphan girl, stripped of family and home, is chosen for a place of power — and how, in that place, she will prove faithful to the God her guardian serves.',
  ],

  bottomShare: {
    label: 'Share Esther 2',
    quote:
      'The orphan is chosen. The hidden one is crowned. The servant&apos;s faithfulness is remembered by heaven, even when it goes unnoticed by the king. In Esther&apos;s rise, we see how God works through the hidden, the marginal, and the faithful.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Esther 2 · Study Guide',
  },

  sections: [
    /* ─── Esther 2:1–4 — The Search Begins ──────────────────────────────── */
    {
      ref: 'Esther 2:1–4',
      title: 'A Queen Is Sought',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'After these things, when the wrath of king Ahasuerus was appeased, he remembered Vashti, and what she had done, and what was decreed against her.'),
            plain(2, 'Then said the king&apos;s servants that ministered unto him, Let there be fair young virgins sought for the king:'),
            plain(3, 'And let the king appoint officers in all the provinces of his kingdom, that they may gather together all the fair young virgins unto Shushan the palace, to the house of the women, under the custody of Hegai the king&apos;s chamberlain, keeper of the women; and let their things for purification be given them:'),
            plain(4, 'And let the maiden which pleaseth the king be queen instead of Vashti. And the thing pleased the king; and he did so.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'king-remembers',
          html:
            'The king&apos;s wrath is appeased, and he remembers Vashti and what was decreed. The text does not say he regrets the decree. Rather, it seems a void has opened — the absence of the queen, the empty throne. The memory of Vashti and the permanence of the law create a strange space: he cannot have her back. Something else must fill the gap.',
        },
        {
          kind: 'commentary',
          id: 'search-throughout',
          html:
            'The search is vast. Officers are appointed in all the provinces of the kingdom. Young women are gathered from across the empire and brought to Shushan. The scale of the effort mirrors the scale of the king&apos;s authority — he simply reaches throughout his kingdom and takes what he wants. The women are given things for purification, treatments for beauty. The machinery of power is turned toward finding a replacement for Vashti.',
        },
        {
          kind: 'hebrew',
          id: 'hegai-keeper',
          title: 'Hegai — "The Keeper of the Women"',
          script: 'הֵגַי',
          translit: '<strong>Hegai</strong> · the chamberlain charged with overseeing the gathered women',
          description:
            'Hegai is the keeper of the house of women, the one who oversees their preparation and purification. He becomes the first authority in Esther&apos;s life within the palace — not the king, but the one who tends and prepares. In this small detail, Scripture hints at what will be Esther&apos;s greatest strength: the ability to find favor not through boldness, but through humility and respect for those who have authority over her.',
        },
        {
          kind: 'carry',
          html:
            'The king seeks to fill what Vashti left empty. We often do this too — when we lose something or someone, we seek to fill the void with something comparable. But sometimes, what is meant to fill a gap becomes something entirely unexpected. Sometimes, the replacement becomes more important than what was replaced.',
        },
        {
          kind: 'reflection',
          id: 'search-begins',
          prompt: 'The king gathers young women to find a replacement for Vashti. Have you ever experienced being sought after or chosen for something? What did that feel like?',
        },
      ],
    },

    /* ─── Esther 2:5–11 — Esther and Mordecai ──────────────────────────── */
    {
      ref: 'Esther 2:5–11',
      title: 'The Orphan and Her Guardian',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(5, 'Now in Shushan the palace was a certain Jew whose name was Mordecai, the son of Jair, the son of Shimei, the son of Kish, a Benjamite;'),
            plain(6, 'Who had been carried away from Jerusalem with the captivity which was carried away with Jeconiah king of Judah, whom Nebuchadnezzar the king of Babylon had carried away.'),
            plain(7, 'And he brought up Hadassah, that is, Esther, his uncle&apos;s daughter: for she had neither father nor mother, and the maid was fair and beautiful; whom Mordecai, when her father was dead, took for his own daughter.'),
            plain(8, 'So it came to pass, when the king&apos;s commandment and his decree was heard, and when many maidens were gathered together unto Shushan the palace, under the custody of Hegai, that Esther was taken also unto the king&apos;s house, under the custody of Hegai, keeper of the women.'),
            plain(9, 'And the maiden pleased him, and she obtained kindness of him; and he speedily gave her her things for purification, with such things as belonged to her, and seven maidens, which were meet to be given her, out of the king&apos;s house: and he preferred her and her maids unto the best place of the house of the women.'),
            plain(10, 'Esther had not shewed her people nor her kindred: for Mordecai had charged her that she should not shew it.'),
            plain(11, 'And Mordecai walked every day before the court of the women&apos;s house, to know how Esther did, and what should become of her.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mordecai-benjamin',
          html:
            'Mordecai is a Benjamite, descended from Kish — which may echo the name of Kish, father of Saul, the first king of Israel. Mordecai is among the exiles carried away when Nebuchadnezzar took Jerusalem. He lives in a foreign land, far from the temple, far from his people&apos;s home. Yet he remains faithful to his God and his people.',
        },
        {
          kind: 'hebrew',
          id: 'hadassah-esther',
          title: 'Hadassah — "Myrtle"',
          script: 'הֲדַסָּה',
          translit: '<strong>Hadassah</strong> · myrtle; a fragrant plant; her Hebrew name',
          description:
            'Her name in Hebrew is Hadassah, which means myrtle — a plant associated with beauty and fragrance, yet also humble and close to the earth. The myrtle grows in hidden places; it is beautiful but not showy. Her other name, Esther, may derive from the Persian word for star — that which shines from afar. Two names: one private and rooted, one public and distant. The names themselves suggest the double life she will live.',
        },
        {
          kind: 'commentary',
          id: 'orphan-chosen',
          html:
            'Esther is an orphan — she has neither father nor mother. Mordecai takes her as his own daughter. In a world where status is inherited, she has none. In a world where identity is defined by family, she is unmoored. Yet it is precisely this — her lack of family, her need for protection, her willingness to be guided — that will become her strength. She is not rooted in any claim to status or power. She must trust.',
        },
        {
          kind: 'commentary',
          id: 'esther-finds-favor',
          html:
            'When Esther is taken to the palace, she finds favor with Hegai. She does not demand special treatment. She does not insist on her rights. Rather, she pleases him and obtains kindness from him. The text emphasizes her responsiveness to guidance — she is given seven maidens from the king&apos;s house, and placed in the best place of the house of women. Her beauty is evident, but what wins favor is her character, her humility, her willingness to be guided.',
        },
        {
          kind: 'commentary',
          id: 'hidden-identity',
          html:
            'But Esther keeps her identity hidden. Mordecai charges her not to reveal that she is Jewish. In the palace of the king, she will be known only as Esther, not as Hadassah. She will be seen as someone with no people, no kindred, no claim to any identity but that given to her by the king. This hiddenness is both protection and vulnerability. It is also the condition that will allow her to act when the time comes.',
        },
        {
          kind: 'carry',
          html:
            'Mordecai walks every day before the court of the women&apos;s house to know how Esther is and what will become of her. He does not abandon her. He does not assume that because she is in the king&apos;s house, safe and cared for, his responsibility is over. He remains. He watches. He cares. In our lives, do we have people who watch for us, who care what becomes of us? Are we those people for others?',
        },
        {
          kind: 'reflection',
          id: 'orphan-rises',
          prompt: 'Esther is an orphan chosen for the palace, yet she hides her true identity and depends on Mordecai&apos;s guidance. When have you had to rely on someone else&apos;s wisdom and protection? What did that teach you?',
        },
      ],
    },

    /* ─── Esther 2:12–18 — Esther Becomes Queen ───────────────────────── */
    {
      ref: 'Esther 2:12–18',
      title: 'The Queen Is Crowned',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(12, 'Now when every maid&apos;s turn was come to go in to the king Ahasuerus, after that she had been twelve months, according to the manner of the women, (for so were the days of her purifications accomplished, six months with oil of myrrh, and six months with perfumes and things for the beautifying of the women;)'),
            plain(13, 'Then thus came every maiden unto the king; whatsoever she desired was given her to go with her out of the house of the women unto the king&apos;s house.'),
            plain(14, 'In the evening she went, and on the morrow she returned into the second house of the women, under the custody of Shaashgaz, the king&apos;s chamberlain, which kept the concubines: she came in unto the king no more.'),
            plain(15, 'But when the turn of Esther, the daughter of Abihail the uncle of Mordecai, who had taken her for his daughter, was come to go in unto the king, she required nothing but that which Hegai the king&apos;s chamberlain, the keeper of the women, appointed. And Esther obtained favour in the sight of all them that looked upon her.'),
            plain(16, 'So Esther was taken unto the king Ahasuerus into his house royal, in the tenth month, which is the month Tebeth, in the seventh year of his reign.'),
            plain(17, 'And the king loved Esther above all the women, and she obtained grace and favour in his sight more than all the virgins; so that he set the royal crown upon her head, and made her queen instead of Vashti.'),
            plain(18, 'Then the king made a great feast to all his princes and his servants, even Esther&apos;s feast; and he made a release of his provinces, and gave gifts, according to the state of the king.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'twelve-months',
          html:
            'Each maiden spends twelve months being prepared — six months with oil of myrrh, six months with perfumes and beautifying oils. This is not mere cosmetic preparation; it is a long, slow process of transformation. The women are being made ready, shaped, perfected for the king&apos;s eye. The duration underscores the enormity of the undertaking — an entire year to make oneself fit to stand before the king.',
        },
        {
          kind: 'commentary',
          id: 'one-night-return',
          html:
            'Each maiden goes in to the king. She spends one night with him. In the evening she goes; in the morning she returns to the house of concubines, under a different keeper, and comes in unto the king no more. The women are used and set aside. Only one will become queen. The others will disappear into the house of concubines, their moment of possibility ended.',
        },
        {
          kind: 'commentary',
          id: 'esther-requires-nothing',
          html:
            'When Esther&apos;s turn comes, she does something remarkable: she requires nothing but what Hegai appoints. She does not demand fine oils, rare perfumes, jewels, or attendants. She trusts Hegai&apos;s judgment about what will please the king. This trust, this humility, this willingness to be guided — it wins her favor. Everyone who looks upon her is impressed. The text suggests that what makes her beautiful is not what she demands for herself, but what she allows others to give her.',
        },
        {
          kind: 'hebrew',
          id: 'tebeth-month',
          title: 'Tebeth — The Month of Favor',
          script: 'טֵבֵת',
          translit: '<strong>Tebeth</strong> · the tenth month of the Hebrew calendar',
          description:
            'Esther is taken to the king in Tebeth, the tenth month, in the seventh year of his reign. The naming of the month and the year marks the moment as significant — this is a specific, recorded moment in history. Yet Esther&apos;s hiddenness means that no one in the palace knows that their new queen is a Jew, a woman whose true name and identity remain veiled.',
        },
        {
          kind: 'commentary',
          id: 'king-loves-esther',
          html:
            'The king loves Esther above all the women. She obtains grace and favor in his sight more than all the virgins. And so he sets the royal crown on her head and makes her queen instead of Vashti. She is crowned. The empty throne is filled. The woman whom no one would have predicted — the orphan with no family, the foreigner, the one who requires nothing — is chosen to be queen.',
        },
        {
          kind: 'carry',
          html:
            'Esther is crowned not through demand, not through display of herself, but through a kind of sacred surrender. She does not insist on her own preferences; she trusts those who guide her. She does not seek to impress through extravagance; she impresses through authenticity. There is something here about power that comes not from grasping, but from being willing to be chosen. Not all choosing is the same — but when it comes, it comes with the weight of having been truly seen.',
        },
        {
          kind: 'reflection',
          id: 'queen-crowned',
          prompt: 'Esther is chosen for greatness not through her own striving, but through humility and trust in her guide. What in your life are you trying to control or force, when perhaps you need to trust and be guided?',
        },
      ],
    },

    /* ─── Esther 2:19–23 — Mordecai&apos;s Faithfulness ────────────────────── */
    {
      ref: 'Esther 2:19–23',
      title: 'The Faithfulness Remembered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(19, 'And when the virgins were gathered together the second time, then Mordecai sat in the king&apos;s gate.'),
            plain(20, 'Esther had not yet shewed her kindred nor her people; as Mordecai had charged her: for Esther did the commandment of Mordecai, like as when she was brought up with him.'),
            plain(21, 'In those days, while Mordecai sat in the king&apos;s gate, two of the king&apos;s chamberlains, Bigthan and Teresh, of those which kept the door, were wroth, and sought to lay hands on the king Ahasuerus.'),
            plain(22, 'And the thing was known to Mordecai, who told it unto Esther the queen; and Esther certified the king thereof in the name of Mordecai.'),
            plain(23, 'And when inquisition was made of the matter, it was found so: therefore they were both hanged on a tree: and it was written in the book of the records before the king.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mordecai-gate',
          html:
            'Mordecai sits in the king&apos;s gate — the place of judgment, business, and authority in the ancient Near East. He has position, he has a role in the court. Yet he remains in the background. We know that his cousin is now queen, but to the king and the court, she has no family, no people, no connection to this man in the gate. Still, Mordecai remains where he can watch, where he can serve, where he can be useful.',
        },
        {
          kind: 'commentary',
          id: 'mordecai-discovers-plot',
          html:
            'Mordecai discovers that two of the king&apos;s chamberlains, Bigthan and Teresh, are plotting to kill the king. They are wroth — angry about something, though the text does not tell us what. Their plot is discovered through Mordecai&apos;s watchfulness. He sits in the king&apos;s gate. He hears. He observes. He knows.',
        },
        {
          kind: 'commentary',
          id: 'esther-reports',
          html:
            'Mordecai does not seek credit for himself. Instead, he tells Esther, and Esther certifies the king thereof in Mordecai&apos;s name. She is the conduit through which his faithfulness is reported. Even now, even as queen, she remains obedient to her guardian. She does the commandment of Mordecai, "like as when she was brought up with him." The relationship of trust does not end when she is crowned.',
        },
        {
          kind: 'carry',
          html:
            'What is remarkable here is that Mordecai&apos;s faithfulness is remembered. It is recorded. The text tells us that when the matter was investigated and found to be true, the conspirators were hanged, and "it was written in the book of the records before the king." This act of faithfulness does not go unrecorded. God remembers. The king&apos;s record remembers. Even when no one knows who Mordecai truly is, his faithfulness is being noted. His deed is being written down. (And as we will see, this record will matter enormously later.)',
        },
        {
          kind: 'christ',
          id: 'esther-2-christ',
          title: 'Christ Connection — The Orphan Adopted, The Faithfulness Remembered',
          html:
            'Esther is an orphan chosen and crowned as queen, yet she remains hidden and faithful to her guardian. In Romans 8:15–17, Paul writes: "Ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father... And if children, then heirs; heirs of God, and joint-heirs with Christ." Like Esther, the believer is adopted into a royal household, made a child of the King, yet remains hidden with Christ in God (Colossians 3:3). And like Mordecai&apos;s faithful deed recorded in heaven&apos;s register, our faithful works are remembered: "God is not unrighteous to forget your work and labour of love" (Hebrews 6:10).',
        },
      ],
    },
  ],
};
