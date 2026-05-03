import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 43 - the famine deepens; Jacob relents and sends Benjamin.
 *
 * Judah&apos;s surety for Benjamin is the turning point in his soul.
 * The man who proposed selling Joseph into slavery now pledges himself
 * for the youngest brother. Joseph sees Benjamin, weeps in private,
 * seats them by order of birth (astonishing them), and gives Benjamin
 * five times the portion - lavish grace masquerading as appetite.
 */
export const GENESIS_43: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 43,

  estimatedMinutes: { beginner: 8, intermediate: 11, deep: 14 },
  intros: [
    'Genesis 43 is the chapter where famine forces a reckoning [res:bibleodyssey-joseph-egypt]. The grain Jacob bought is running out. Simeon, the second-eldest, is still held in Egypt as security. To get him back and to get more grain, Jacob must let Benjamin go down to Joseph - and Jacob has been refusing. The chapter pivots on a single moment: when Judah stands and pledges himself for Benjamin&apos;s safe return, Jacob&apos;s hands open.',
    'There is a transformation happening in Judah that the reader can barely see yet [res:sefaria-genesis-43]. In Genesis 37, he was the one who said, &ldquo;Come now, let us sell him to the Ishmaelites.&rdquo; Now he is saying, &ldquo;I will be surety for him; of my hand shalt thou require him.&rdquo; The man who abandoned his brother is learning to answer for him [res:met-museum-egypt]. And in Egypt, Joseph - who has seen his brothers but not yet been seen by them - looks at Benjamin and weeps. The walls of separation are about to break.',
  ],

  bottomShare: {
    label: 'Share Genesis 43',
    quote:
      'When Judah saw that famine pressed hard, he pledged himself for Benjamin&apos;s safe return. Jacob relented. And Joseph, seeing his youngest brother, wept in a private room.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 43 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-43',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 43 - Sefaria',
      url: 'https://www.sefaria.org/Genesis.43',
      description: 'Annotated text with classical and modern Jewish commentary on Judah&apos;s pledge and the brothers&apos; return to Egypt.',
    },
    {
      id: 'met-museum-egypt',
      kind: 'museum',
      source: 'The Met',
      label: 'Ancient Egypt - The Metropolitan Museum of Art',
      url: 'https://www.metmuseum.org/art/collection?department=Egyptian%20Art',
      description: 'Egyptian artifacts and cultural context for understanding the world of Joseph and later Genesis figures.',
    },
    {
      id: 'bibleodyssey-joseph-egypt',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Joseph and Egypt - Bible Odyssey',
      url: 'https://www.bibleodyssey.org/en/passages/related-articles/joseph-and-egypt',
      description: 'Scholarly essays on Joseph&apos;s time in Egypt and its historical and theological significance.',
    },
  ],

  sections: [
    /* ─── Genesis 43:1-7 - The Famine Deepens ────────────────────────── */
    {
      ref: 'Genesis 43:1-7',
      title: 'The Famine Deepens',
      blocks: [
        {
          kind: 'scripture',
          chapter: 43,
          lines: [
            {
              number: 1,
              spans: [
                t('And the '),
                hg('famine was sore in the land', 'c-famine'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And it came to pass, when they had eaten up the corn which they had brought out of Egypt, their father said unto them, Go again, buy us a little food.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And Judah spake unto him, saying, The man did solemnly protest unto us, saying, Ye shall not see my face, except your youngest brother be with you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'genesis-43-78mid-1',
          html: 'The grain runs out, and Judah speaks plainly: without Benjamin, there is no return to Egypt. Jacob&apos;s reluctance breaks, and the boy goes to an unknown fate.',
        },
        {
          kind: 'scripture',
          chapter: 43,
          lines: [
            {
              number: 4,
              spans: [
                t('If thou wilt send our brother with us, we will go down and buy thee food:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('But if thou wilt not send him, we will not go down: for the man said unto us, Ye shall not see my face, except your youngest brother be with you.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And '),
                hg('Israel said, Wherefore dealt ye so ill with me', 'c-jacob-why'),
                t(', as to tell the man whether ye had yet a brother?'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And they said, The man asked us straitly of our state, and of our kindred, saying, Is your father yet alive? have ye another brother? and we told him according to the tenor of these words: could we certainly know that he would say, Bring your brother down?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-famine',
          html:
            'The famine is not a passing shadow anymore. It is a crisis that will not wait. Jacob&apos;s refusal to let Benjamin go is not hardness; it is a father&apos;s terror - he has already lost one son, or so he believes. The younger son of Rachel, his beloved, is all that is left of her. To send him into Egypt is to risk everything.',
        },
        {
          kind: 'commentary',
          id: 'c-jacob-why',
          html:
            'Jacob&apos;s anger at his sons for telling the Egyptian about Benjamin shows the depth of his fear. But notice: there is no one to blame here. The sons answered a direct question. Jacob is angry because his hand is being forced, because the famine will not wait, because love and hunger have come into conflict and hunger is winning.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes obedience to God looks like letting go of something you have been guarding with your whole heart. The refusal to let go is not strength; it is fear wearing the clothes of protection. If you are holding something so tightly that hunger in your own house goes unanswered, the famine itself may be God&apos;s way of teaching you what surrender looks like.',
        },
        {
          kind: 'reflection',
          id: 'gen43-famine',
          prompt:
            'Where is famine pressing in on your refusal to trust? What would it cost to let go of the one thing you have been protecting?',
        },
      ],
    },

    /* ─── Genesis 43:8-15 - Judah Pledges Himself ──────────────────────── */
    {
      ref: 'Genesis 43:8-15',
      title: 'I Will Be Surety for Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 43,
          lines: [
            {
              number: 8,
              spans: [
                t('And '),
                hg('Judah said unto his father', 'c-judah-steps'),
                t(', Send the lad with me, and we will arise and go; that we may live, and not die, both we, and thou, and also our little ones.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('I will be '),
                hy('surety for him', 'hebrew-aravnu'),
                t('; of my hand shalt thou '),
                hp('require him', 'christ-surety'),
                t(': if I bring him not unto thee, and set him before thee, then let me bear the blame for ever.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('For except we had lingered, surely now we had returned this second time.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen43-jacob-relents',
          html:
            'Jacob has held Benjamin back from Egypt through two trips, through the famine deepening, until the grain ran out. Judah&apos;s pledge changed something in Jacob&apos;s heart. The man who could not let go now opens his hands. Sometimes the moment you relent is the moment you are most close to blessing.',
        },
        {
          kind: 'scripture',
          chapter: 43,
          lines: [
            {
              number: 11,
              spans: [
                t('And their father Israel said unto them, If it must be so now, do this; take of the best fruits in your vessels, and carry down the man a present, a little '),
                hg('balm, and a little honey, spices, and myrrh, nuts, and almonds', 'c-gifts'),
                t(':'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And take double money in your hand; and the money that was brought again in the mouth of your sacks, carry it again with you; peradventure it was an oversight:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Take also your brother, and arise, go again unto the man:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And God Almighty give you mercy before the man, that he may send away your other brother, and Benjamin. If I be bereaved of my children, I am bereaved.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the men took that present, and they took double money in their hand, and Benjamin; and rose up, and went down to Egypt, and stood before Joseph.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-aravnu',
          title: 'Arav - &ldquo;surety, pledge&rdquo;',
          script: 'אָרַב',
          translit: '<strong>arav</strong> · to pledge oneself, to stand surety, to be collateral',
          description:
            'Judah uses the strongest word for covenant pledge. It is not a promise to return Benjamin; it is a pledge of his own life, his own body. If Benjamin does not come back, Judah will. This is the same word used in Hebrews 7:22 when Paul says Jesus &ldquo;made a surety of a better testament.&rdquo; The man whose line carries the Messiah is the first to pledge himself for a brother.',
        },
        {
          kind: 'commentary',
          id: 'c-judah-steps',
          html:
            'Judah alone steps forward. The other brothers are silent. It is Judah&apos;s voice that changes the story. In Genesis 37, Judah said, &ldquo;Come now, let us sell him&rdquo; - and Joseph was sold into slavery. Now he says something that will remake his own soul: &ldquo;I will be surety for him.&rdquo; A man&apos;s words in one chapter can be undone by his words in another. Repentance is often just the moment he finally says the opposite thing.',
        },
        {
          kind: 'commentary',
          id: 'c-gifts',
          html:
            'Jacob sends the best fruits of the land - balm, honey, spices, myrrh, nuts, almonds. These are not the gifts of desperation; these are the gifts a subject brings to a king. Jacob is acknowledging with his hands what he cannot yet see: the man in Egypt is not just a merchant. He carries some kind of power. And Jacob is sending his best with his youngest son, as if he knows something the reader does not yet know.',
        },
        {
          kind: 'christ',
          id: 'christ-surety',
          title: 'Christ Connection - The Surety of a Better Covenant',
          html:
            'Judah pledges, &ldquo;of my hand shalt thou require him.&rdquo; Hebrews later echoes this: &ldquo;By so much was Jesus made a surety of a better testament&rdquo; (Heb. 7:22). Judah is willing to be held accountable for Benjamin&apos;s safety - if the boy does not return, Judah himself will be liable. Christ takes that pledge and makes it eternal. He stands as surety not for one brother but for all brothers, not for a return to Egypt but for return to the Father. And unlike Judah, He will pay the price Himself.',
        },
        {
          kind: 'carry',
          html:
            'There is someone in your story who stepped forward when no one else would. Who said, &ldquo;If this fails, it is on me.&rdquo; Who pledged their own safety for yours. Hold that person in mind for a moment. This is what Judah did for Benjamin. This is what Jesus did for you. The willingness to be personally liable - that is love&apos;s shape.',
        },
        {
          kind: 'reflection',
          id: 'gen43-surety',
          prompt:
            'For whom in your life would you pledge yourself? And who has already pledged themselves for you? How does that debt of love change the way you see what Jesus did?',
        },
      ],
    },

    /* ─── Genesis 43:16-26 - Joseph&apos;s Seating ────────────────────────── */
    {
      ref: 'Genesis 43:16-26',
      title: 'Joseph Arranges the Meal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 43,
          lines: [
            {
              number: 16,
              spans: [
                t('And when Joseph saw Benjamin with them, he said to the ruler of his house, Bring these men home, and slay, and make ready; for these men shall dine with me at noon.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the man did as Joseph bade; and the man brought the men into Joseph&apos;s house.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the men were afraid, because they were brought into Joseph&apos;s house; and they said, Because of the money that was returned in our sacks at the first time are we brought in; that he may seek occasion against us, and fall upon us, and take us for bondmen, and our asses.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And they came near to the steward of Joseph&apos;s house, and they communed with him at the door of the house,'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And said, O sir, we came indeed down at the first time to buy food:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen43-stewards-meeting',
          html:
            'Joseph&apos;s steward speaks the strangest sentence in the chapter: <em>Peace be to you, fear not: your God, and the God of your father, hath given you treasure in your sacks.</em> The brothers came expecting accusation; they meet a stranger who knows the name of their God.',
        },
        {
          kind: 'scripture',
          chapter: 43,
          lines: [
            {
              number: 21,
              spans: [
                t('And it came to pass, when we came to the inn, that we opened our sacks, and, behold, every man&apos;s money was in the mouth of his sack, our money in full weight: and we have brought it again in our hand.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And other money have we brought down in our hand to buy food: but we cannot tell who put our money in our sacks.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And he said, Peace be to you, fear not: your God, and the God of your father, hath given you treasure in your sacks: I had your money. And he brought Simeon out unto them.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And the man brought the men into Joseph&apos;s house, and gave them water, and they washed their feet; and he gave their asses provender.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And they made ready the present against Joseph came at noon: for they heard that they should eat bread there.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And when Joseph came home, they brought him the present which was in their hand into the house, and '),
                hg('bowed themselves to him to the earth', 'c-bow'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'christ-recognition',
          html:
            'Joseph recognizes Benjamin as his full brother (the only other son of Rachel). His words &ldquo;God be gracious unto thee&rdquo; carry the weight of his whole hidden life. He speaks blessing over the brother he has not seen since childhood, the only family member who did not betray him. The moment is tender and hidden - no one in the room knows what he is doing.',
        },
        {
          kind: 'commentary',
          id: 'c-bow',
          html:
            'Joseph&apos;s brothers bow before him, fulfilling the dream of Genesis 37:5-9 - &ldquo;Behold, I have dreamed a dream more; and, behold, the sun and the moon and the eleven stars made obeisance to me.&rdquo; They do not recognize him. They see a powerful Egyptian. But the seating arrangement he is about to make will astonish them - he will seat them by order of birth, youngest to oldest. He knows something about them that an Egyptian should have no way of knowing.',
        },
        {
          kind: 'carry',
          html:
            'Joseph is hidden in plain sight, known but not known. His brothers bow to him without seeing him. How much of your own story is hidden even from those closest to you? How much do you see in others that they do not yet see in themselves? The God who sees is patient with the unseeing.',
        },
        {
          kind: 'reflection',
          id: 'gen43-hidden',
          prompt:
            'What part of God&apos;s goodness in your life have you not yet recognized? What if He has been orchestrating things all along that you are only now beginning to bow before?',
        },
      ],
    },

    /* ─── Genesis 43:27-34 - The Lavish Meal ──────────────────────────── */
    {
      ref: 'Genesis 43:27-34',
      title: 'Benjamin&apos;s Portion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 43,
          lines: [
            {
              number: 27,
              spans: [
                t('And he asked them of their welfare, and said, Is your father well, the old man of whom ye spake? Is he yet alive?'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And they answered, Thy servant our father is in good health, he is yet alive. And they bowed down their heads and made obeisance.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And he lifted up his eyes, and saw his brother Benjamin, his mother&apos;s son, and said, Is this your youngest brother, of whom ye spake unto me? And he said, '),
                hp('God be gracious unto thee, my son', 'christ-recognition'),
                t('.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And Joseph made haste; for his bowels did yearn upon his brother: and he sought where to weep; and he entered into his chamber, and '),
                hp('wept there', 'christ-weep'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'genesis-43-78mid-2',
          html: 'Joseph tests them again--he seats them by age, and to Benjamin he gives five times the portion. They feast, but the wall between judge and brothers has not yet fallen.',
        },
        {
          kind: 'scripture',
          chapter: 43,
          lines: [
            {
              number: 31,
              spans: [
                t('And he washed his face, and went out, and refrained himself, and said, Set on bread.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And they set on for him by himself, and for them by themselves, and for the Egyptians, which did eat with him, by themselves: because the Egyptians might not eat bread with the Hebrews; for that is an abomination unto the Egyptians.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And they sat before him, the firstborn according to his birthright, and '),
                hy('the youngest according to his youth', 'hebrew-tsaar'),
                t(': and the men marvelled one at another.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And he took and sent messes unto them from before him: but Benjamin&apos;s mess was '),
                hg('five times so much as any of theirs', 'c-benjamin-portion'),
                t('. And they '),
                hy('drank, and were merry with him', 'hebrew-shikru'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tsaar',
          title: 'Tsaar - &ldquo;small, young&rdquo;',
          script: 'צָעִיר',
          translit: '<strong>tsaar</strong> · young, junior, small',
          description:
            'Joseph seats them not by social status or wealth but by family order - firstborn to youngest. He knows their birth order without asking. The brothers are astonished that a foreigner can arrange them as if he has watched them grow up together. It is a tiny foreshadowing of recognition.',
        },
        {
          kind: 'commentary',
          id: 'c-benjamin-portion',
          html:
            'Benjamin receives five times the portion of his brothers - not because Joseph is being unfair, but because Joseph is being lavish. This is grace, not justice. The youngest, the one most vulnerable, the one still with both parents living, is treated with excess. It should feel shocking to the brothers. Why would an Egyptian ruler favor the youngest so extravagantly?',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shikru',
          title: 'Shakar - &ldquo;drank, were merry&rdquo;',
          script: 'שׁכר',
          translit: '<strong>shakar</strong> · to drink deeply, to be merry, to make merry',
          description:
            'This is banquet language - not drunkenness but celebration. The brothers, fed by the hand of a hidden king, are at ease. They do not know they are eating with the brother they sold. But Joseph knows, and he is feeding them as a father feeds his children - abundantly, with his own hands.',
        },
        {
          kind: 'christ',
          id: 'christ-weep',
          title: 'Christ Connection - The Hidden Host Who Weeps',
          html:
            'Joseph knows his brothers but his brothers do not know him. He weeps in a room they cannot see, then returns and feeds them. The Gospel gives us the same pattern: Jesus appears to His disciples after the resurrection and feeds them (John 21:12-13), yet they do not at first recognize Him. The host is known; the guests are still blind. And yet He feeds them anyway - grace offered to those who do not yet see it, from one whose love has already been decided.',
        },
        {
          kind: 'carry',
          html:
            'You have been fed by grace you did not recognize. You have sat at a table set by hands you did not see. The lavishness of your life - the portion five times greater than you deserved - is not accident. It is intentional excess. Today, as you eat and drink, you might let yourself feel: I am being loved by someone I have not yet seen. And soon enough, you will.',
        },
        {
          kind: 'reflection',
          id: 'gen43-merry',
          prompt:
            'When was the last time you felt completely cared for - fed, safe, delighted in? Can you name who made you feel that way? And how does it change things to know that Jesus offers that same lavish portion?',
        },
        {
          kind: 'artwork',
          matchTitle: /joseph|benjamin|brother/i,
          matchArtist: /tissot|doré/i,
          caption: 'Genesis 43:27-34 · The Feast of Recognition',
        },
      ],
    },
  ],
};
