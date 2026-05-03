import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Proverbs 7 — The Seduction of Sin
 *
 * Here is narrative. The chapter tells the story of a young man who lacks
 * discernment, walking down a street at dusk and encountering the strange
 * woman. She speaks, she caresses, she makes promises of secret delight. And
 * he follows her. "As an ox goeth to the slaughter, or as a fool to the
 * correction of the stocks." The chapter is brutally honest about the power of
 * seduction and the blindness of those drawn into it.
 */
export const PROVERBS_7: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 7,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 3 },
  intros: [
    'The seventh chapter of Proverbs tells a story. It is not a sermon or an abstract principle but a narrative of seduction, of a young man walking into the arms of destruction with his eyes wide open yet seeing nothing. The chapter is written almost as a drama—you are invited to observe from a distance, to see the seduction unfold, to learn by witnessing what happens when someone yields to the call of the strange woman.',
    'What makes the narrative powerful is that it does not minimize the appeal. The woman speaks sweetly, she makes promises, she flatters. She makes the wrong way seem right, the forbidden seem safe, the path to ruin seem the path to delight. And the young man, "lacking understanding," follows. The chapter asks: Will you be like him? Or will you see, before you step into the trap, where it leads?',
  ],

  sections: [
    {
      ref: 'Proverbs 7:1–27',
      title: 'The Path to Seduction',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'My son, keep my words, and lay up my commandments with thee.'),
            plain(2, 'Keep my commandments, and live; and my law as the apple of thine eye.'),
            plain(3, 'Bind them upon thy fingers, write them upon the table of thine heart.'),
            plain(4, 'Say unto wisdom, Thou art my sister; and call understanding thy kinswoman;'),
            plain(5, 'That they may keep thee from the strange woman, from the stranger which flattereth with her words.'),
            plain(6, 'For at the window of my house I looked through my casement,'),
            plain(7, 'And beheld among the simple ones, I discerned among the youths, a young man void of understanding,'),
            plain(8, 'Passing through the street near her corner; and he went the way to her house,'),
            plain(9, 'In the twilight, in the evening, in the black and dark night:'),
            plain(10, 'And, behold, there met him a woman with the attire of an harlot, and subtil of heart.'),
            plain(11, '(She is loud and stubborn; her feet abide not in her house:'),
            plain(12, 'Now is she without, now in the streets, and lieth in wait at every corner.)'),
            plain(13, 'So she caught him, and kissed him, and with an impudent face said unto him,'),
            plain(14, 'I have peace offerings with me; this day have I payed my vows.'),
            plain(15, 'Therefore came I forth to meet thee, diligently to seek thy face, and I have found thee.'),
            plain(16, 'I have decked my bed with coverings of tapestry, with carved works, with fine linen of Egypt.'),
            plain(17, 'I have perfumed my bed with myrrh, aloes, and cinnamon.'),
            plain(18, 'Come, let us take our fill of love until the morning: let us solace ourselves with loves.'),
            plain(19, 'For the goodman is not at home, he is gone a long journey:'),
            plain(20, 'He hath taken a bag of money with him, and will come home at the day appointed.'),
            plain(21, 'With her much fair speech she caused him to yield: with the flattering of her lips she forced him.'),
            plain(22, 'He goeth after her straightway, as an ox goeth to the slaughter, or as a fool to the correction of the stocks;'),
            plain(23, 'Till a dart strike through his liver; as a bird hasteth to the snare, and knoweth not that it is for his life.'),
            plain(24, 'Hearken unto me therefore, O ye children, and attend to the words of my mouth.'),
            plain(25, 'Let not thine heart decline to her ways, go not astray in her paths.'),
            plain(26, 'For she hath cast down many wounded: yea, many strong men have been slain by her.'),
            plain(27, 'Her house is the way to hell, going down to the chambers of death.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov7-simple-young',
          html: 'The young man is described as "void of understanding." He is not stupid in the abstract, but he lacks the discernment that comes from being rooted in God&apos;s word. He walks at twilight, in the darkness, when discernment is hard to come by. He puts himself in the place where temptation waits. He is not the victim of circumstance, but of his own lack of vigilance.',
        },
        {
          kind: 'commentary',
          id: 'prov7-woman-words',
          html: 'The strange woman speaks with flattery and false intimacy. She claims to have been seeking him, that she is delighted to have found him. She speaks of her bed, decked with fine coverings and perfume, and of taking their fill of love. She assures him that her husband is away, that they will not be discovered. Every word is calculated to make the wrong way seem safe, to make transgression seem like intimacy.',
        },
        {
          kind: 'commentary',
          id: 'prov7-ox-slaughter',
          html: 'The comparison is devastating: "as an ox goeth to the slaughter." The ox does not know that it walks toward death. It is led by the nose, step by step, toward the very thing that will destroy it. The young man is compared to this beast, walking in blindness toward his own undoing. His eyes are not opened until the dart strikes his liver, until it is far too late.',
        },
        {
          kind: 'commentary',
          id: 'prov7-chambers-death',
          html: 'The final claim is absolute: "Her house is the way to hell." Not merely sorrow, not merely regret, but the way to death itself. The woman is not merely a temptation or a pleasure. She is a path to destruction. And those who follow her are legion—"she hath cast down many wounded: yea, many strong men have been slain by her."',
        },
        {
          kind: 'carry',
          html: 'The wisdom of Proverbs is to see this narrative, to recognize it in your own life before you have stepped so far that you cannot turn back. It is not merely to prohibit temptation but to ask: Where am I walking? At what hour? In what darkness? Who am I allowing to speak to my heart? The simple answer is to keep God&apos;s commandments so close that they are the apple of your eye, to make wisdom your sister and understanding your kinswoman. Then you will not be the young man in the story.',
        },
        {
          kind: 'reflection',
          id: 'prov7-seduction-story',
          prompt: 'Where in your own life is this drama unfolding? What temptation is being made to seem sweet and safe? What would wisdom say about where that path truly leads?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He goeth after her straightway, as an ox goeth to the slaughter...Till a dart strike through his liver. Her house is the way to hell, going down to the chambers of death.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 7 · Study Guide',
  },

  hasHebrew: false,
};
