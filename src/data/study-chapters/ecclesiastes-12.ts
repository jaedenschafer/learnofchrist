import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ecclesiastes 12 — Remember Your Creator
 *
 * The Preacher concludes with an urgent counsel: "Remember now thy Creator in
 * the days of thy youth, before the evil days come, nor the years draw nigh,
 * when thou shalt say, I have no pleasure in them." He paints a haunting
 * portrait of aging—the silver cord loosened, the golden bowl broken, the
 * pitcher shattered at the fountain. And he concludes the entire book with a
 * single command: "Fear God, and keep his commandments: for this is the whole
 * duty of man."
 */
export const ECCLESIASTES_12: RichChapterContent = {
  bookSlug: 'ecclesiastes',
  bookName: 'Ecclesiastes',
  chapter: 12,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 7 },
  intros: [
    'Ecclesiastes reaches its conclusion with an urgent call: Remember your Creator now, in youth, before the years come when you have no pleasure in life. The Preacher then paints a poetic and terrifying portrait of age. The light grows dim. The keepers of the house (hands) tremble. The strong men (legs) bow. The grinders (teeth) cease because they are few. All flesh grows old. And finally, "man goeth to his long home, and the mourners go about the streets."',
    'And then, after 11 chapters of describing vanity, futility, the inability to find lasting meaning in pleasure or work or wisdom—the Preacher concludes with a radical simplicity: "Fear God, and keep his commandments: for this is the whole duty of man." Everything else—all the striving, all the building, all the accumulation—is vanity unless it is grounded in this one thing: remembering the Creator and keeping His commandments. The whole point of Ecclesiastes is to strip away all illusions and bring us to this single truth.',
  ],

  sections: [
    {
      ref: 'Ecclesiastes 12:1–8',
      title: 'Remember Your Creator in Your Youth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'Remember now thy Creator in the days of thy youth, before the evil days come, nor the years draw nigh, when thou shalt say, I have no pleasure in them;'),
            plain(2, 'While the sun, or the light, or the moon, or the stars, be not darkened, nor the clouds return after the rain;'),
            plain(3, 'In the day when the keepers of the house shall tremble, and the strong men shall bow themselves, and the grinders cease because they are few, and those that look out of the windows be darkened,'),
            plain(4, 'And the doors shall be shut in the streets, when the sound of the grinding is low, and he shall rise up at the voice of the bird, and all the daughters of musick shall be brought low;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc12-mid-youth-age',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn[res:sefaria-ecclesiastes-12][res:bibleodyssey-qohelet-wisdom].',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(5, 'Also when they shall be afraid of that which is high, and fears shall be in the way, and the almond tree shall flourish, and the grasshopper shall be a burden, and desire shall fail: because man goeth to his long home, and the mourners go about the streets:'),
            plain(6, 'Or ever the silver cord be loosed, or the golden bowl be broken, or the pitcher be broken at the fountain, or the wheel broken at the cistern.'),
            plain(7, 'Then shall the dust return to the earth as it was: and the spirit shall return unto God who gave it.'),
            plain(8, 'Vanity of vanities, saith the Preacher; all is vanity.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc12-remember-creator',
          html:
            '"Remember now thy Creator in the days of thy youth." The Preacher makes an urgent appeal to the young. Do not wait until you are old to remember God. Do not delay until your strength is gone and you have no pleasure in anything. Now is the time. While you have vigor, while you have choice, while you can still say no to folly and yes to righteousness—now is the time to remember your Creator[res:sefaria-ecclesiastes-12-v1].',
        },
        {
          kind: 'commentary',
          id: 'ecc12-evil-days',
          html:
            'The Preacher then describes the "evil days" of old age in a series of metaphors. "The keepers of the house shall tremble"—the hands grow weak. "The strong men shall bow themselves"—the legs fail. "The grinders cease"—the teeth are gone. The sound of grinding becomes low—hearing fails. And most poignantly, "all the daughters of musick shall be brought low"—the capacity for joy diminishes. The body fails. The senses dull. Everything that once brought pleasure becomes difficult or impossible.',
        },
        {
          kind: 'hebrew',
          id: 'ecc12-cord-bowl',
          title: 'The Silver Cord and Golden Bowl',
          script: 'חוּט הַכֶּסֶף וְגֻלַּת הַזָּהָב',
          translit: '<strong>Chut ha-kesef</strong> · silver cord; <strong>gulat ha-zahav</strong> · golden bowl',
          description:
            'The image is of a precious lamp suspended by a silver cord, with a golden bowl as its reflector. When the cord is loosed, the bowl breaks, and the light falls. The metaphor suggests the fragility of life itself—held together by a cord that can be loosened at any moment.',
        },
        {
          kind: 'commentary',
          id: 'ecc12-dust-return',
          html:
            '"Then shall the dust return to the earth as it was: and the spirit shall return unto God who gave it." The Preacher offers the final word: death. The body returns to dust. The spirit returns to God. This is not speculative theology but simple statement. This is what happens. This is what awaits all humanity. And the Preacher concludes this section as he began: "Vanity of vanities, saith the Preacher; all is vanity."',
        },
        {
          kind: 'carry',
          html:
            'The Preacher invites us to soberness. You will grow old. Your strength will fail. You will die. This is not pessimism. This is clarity. And in light of this clarity, the question arises: What will you do? What will you build? What will matter? And the Preacher&apos;s answer is coming: Remember your Creator.',
        },
        {
          kind: 'reflection',
          id: 'ecc12-what-remember',
          prompt: 'Have you remembered your Creator, or have you been living as if death does not approach? What would change if you took seriously the reality that your strength will fail and that you will return to dust?',
        },
      ],
    },

    {
      ref: 'Ecclesiastes 12:9–14',
      title: 'Fear God and Keep His Commandments',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(9, 'And moreover, because the Preacher was wise, he still taught the people knowledge: yea, he gave good heed, and sought out, and set in order many proverbs.'),
            plain(10, 'The Preacher sought to find out acceptable words: and that which was written was upright, even words of truth.'),
            plain(11, 'The words of the wise are as goads, and as nails fastened by the masters of assemblies: which are given from one shepherd.'),
            plain(12, 'And further, by these, my son, be admonished: of making many books there is no end; and much study is a weariness of the flesh.'),
            plain(13, 'Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man.'),
            plain(14, 'For God shall bring every work into judgment, with every secret thing, whether it be good, or whether it be evil.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc12-preacher-taught',
          html:
            'The Preacher steps back and comments on his own work. He has been wise. He has taught the people knowledge. He has sought out and set in order many proverbs. He has sought to find acceptable words—words that are true and upright. He has labored to give wise counsel. And his counsel is: the words of the wise are goads, driving us forward; they are nails, securing us. They come from one Shepherd—they are ultimately divine counsel.',
        },
        {
          kind: 'commentary',
          id: 'ecc12-many-books',
          html:
            '"Of making many books there is no end; and much study is a weariness of the flesh." The Preacher adds a caveat. There is endless knowledge to be pursued. One can spend a lifetime studying and never reach the end. One can become weary in the flesh from endless seeking. But the conclusion is not to stop seeking. The conclusion is to seek what matters. And what matters is revealed in the next verse.',
        },
        {
          kind: 'commentary',
          id: 'ecc12-fear-keep',
          html:
            '"Fear God, and keep his commandments: for this is the whole duty of man." After 12 chapters of exploring every human pursuit—pleasure, wisdom, work, wealth, relationships—the Preacher concludes with utter simplicity. This is the whole duty of man. Not the only thing, but the foundation of everything. Everything else finds its meaning, its direction, its purpose in relation to this one thing: fearing God and keeping His commandments.',
        },
        {
          kind: 'commentary',
          id: 'ecc12-judgment',
          html:
            '"For God shall bring every work into judgment, with every secret thing, whether it be good, or whether it be evil." The Preacher concludes by reminding us that there is a judgment. Every work will be brought into judgment. Every secret thought will be revealed. Nothing is hidden from God. And this is not meant as a threat but as a comfort: you are not accountable to the world&apos;s opinions. You are accountable to God. And God sees everything.',
        },
        {
          kind: 'christ',
          id: 'ecc12-christ-creator',
          title: 'Christ Connection — Christ the Creator We Remember',
          html:
            'The Preacher begins by saying "Remember thy Creator." In the New Testament, Jesus is revealed as the Creator: "All things were made by him; and without him was not any thing made that was made." Christ is the Creator. To remember Him is to remember the One who made the world, who gave us life, who sustains all things. And to keep His commandments is to follow Him. "If ye love me, keep my commandments." The fear of God and the keeping of His commandments is focused in Christ—in receiving Him, following Him, surrendering to Him.',
        },
        {
          kind: 'reflection',
          id: 'ecc12-whole-duty',
          prompt: 'Do you believe that fearing God and keeping His commandments is the whole duty of humanity? How has your life been shaped by pursuits that compete with this central duty? What would it mean to reorder your life around this one thing?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Remember now thy Creator in the days of thy youth...Fear God, and keep his commandments: for this is the whole duty of man. For God shall bring every work into judgment.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ecclesiastes 12 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-ecclesiastes-12',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ecclesiastes 12 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Ecclesiastes.12',
      description: 'The Hebrew text of Qohelet&apos;s closing chapter alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-qohelet-wisdom',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Ecclesiastes (Qohelet) and ANE Wisdom',
      url: 'https://www.bibleodyssey.org/articles/ecclesiastes/',
      description: 'SBL essay placing Qohelet&apos;s meditation on aging and judgment within the broader ANE wisdom tradition.',
    },
    {
      id: 'sefaria-ecclesiastes-12-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ecclesiastes 12 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Ecclesiastes.12',
      description: 'The Hebrew text of Ecclesiastes 12 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

};
