import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 29 — The Days That Were
 *
 * Job remembers his former greatness. "When the candle of God shined upon my head"—
 * a time when blessing and honor flowed. He was the father to the poor, the eye to the blind,
 * the feet to the lame. His counsel was sought. His presence brought relief. But that era
 * has ended. This is a lament for lost dignity and lost capacity to serve.
 */
export const JOB_29: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 29,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  topicTags: ['suffering', 'hope', 'sovereignty', 'lament'],
  opener: {
    topical: true,
    caption: 'Job 29',
  },
  intros: [
    'In a poignant reversal, Job recounts the days of his former glory. He was not merely wealthy—he was honored, respected, a man whose very presence brought comfort and justice to those around him. He was eyes to the blind, feet to the lame, a father to the poor. But those days are gone. This chapter is Job&apos;s lament for a life that was taken from him.',
  ],

  bottomShare: {
    quote:
      '"When the candle of God shined upon my head," Job remembers. He was eyes to the blind and feet to the lame. But those days have passed. Now he sits alone in his suffering.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 29 · Study Guide',
  },

  resources: [
    {
      id: 'british-museum-ludlul',
      kind: 'museum',
      source: 'British Museum',
      label: 'Ludlul Bel Nemeqi (I Will Praise the Lord)',
      url: 'https://www.britishmuseum.org/',
      description: 'Akkadian wisdom poem from Babylon: suffering, divine justice, vindication.',
    },
    {
      id: 'sefaria-job-29',
      kind: 'study',
      source: 'Sefaria',
      label: 'Job 29 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Job.29',
      description: 'The Hebrew text of Job 29 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-job-overview-29',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Job — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/job/',
      description: 'Open-access SBL essay on the historical and literary setting of Job.',
    },

  ],

  sections: [
    /* ─── Job 29:1–6 — The Light That Shined ─────────────────────────── */
    {
      ref: 'Job 29:1–6',
      title: 'When God&apos;s Light Shined Upon Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(1, 'Moreover Job continued his parable, and said,'),
            plain(2, 'Oh that I were as in months past, as in the days when God preserved me;'),
            plain(3, 'When his candle shined upon my head, and when by his light I walked through darkness;'),
            plain(4, 'As I was in the days of my youth, when the secret of God was upon my tabernacle;'),
            plain(5, 'When the Almighty was yet with me, when my children were about me;'),
            plain(6, 'When I washed my steps with butter, and the rock poured me out rivers of oil;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job29-candle',
          html:
            'Job remembers a time when God&apos;s favor rested on him like a candle shining on his head. This is not merely blessing—this is visible, tangible, illuminating. God&apos;s presence was not hidden but evident. By that light, Job walked through darkness unafraid. The image suggests not only blessing but guidance, not only wealth but divine guidance. [res:british-museum-ludlul]',
        },
        {
          kind: 'hebrew',
          id: 'job29-ner',
          title: 'Ner — Lamp or Candle',
          script: 'נֵר',
          translit: '<strong>Ner</strong> · lamp; candle; light; metaphorically, life, prosperity, presence',
          description:
            'In Hebrew poetry, the ner (lamp) represents life itself, divine favor, presence. To have God&apos;s ner shining upon you is to be alive in the fullest sense—visible, guided, at home in the world. When the lamp is withdrawn, darkness covers you.',
        },
        {
          kind: 'carry',
          html:
            'Job is describing something we all know: seasons of favor when everything seems to flow, when our path is clear, when we feel guided and blessed. He also knows what it feels like to lose that. We, too, remember former seasons of grace. We remember times when we felt the presence of God. And we remember the silence that followed[res:sefaria-job-29][res:bibleodyssey-job-overview-29].',
        },
        {
          kind: 'reflection',
          id: 'job29-seasons',
          prompt:
            'When have you felt the light of God&apos;s presence most clearly? What seasons of blessing do you remember? How has their loss affected your faith?',
        },
      ],
    },

    /* ─── Job 29:7–17 — The Man Men Honored ───────────────────────────── */
    {
      ref: 'Job 29:7–17',
      title: 'Eyes to the Blind, Feet to the Lame',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(7, 'When I went out to the gate through the city, when I prepared my seat in the street!'),
            plain(8, 'The young men saw me, and hid themselves: and the aged arose, and stood up.'),
            plain(9, 'The princes refrained talking, and laid their hand on their mouth.'),
            plain(10, 'The nobles held their peace, and their tongue cleaved to the roof of their mouth.'),
            plain(11, 'When the ear heard me, then it blessed me; and when the eye saw me, it gave witness to me:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job29-mid1',
          html:
            'Job was honored not for power alone but for how he used it. Princes fell silent in his presence. Those who heard him blessed him. His face was witnessed with gratitude. Now the focus narrows from his honor to its source: his justice toward the powerless.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(12, 'Because I delivered the poor that cried, and the fatherless, and him that had none to help him.'),
            plain(13, 'The blessing of him that was ready to perish came upon me: and I caused the widow&apos;s heart to sing for joy.'),
            plain(14, 'I put on righteousness, and it clothed me: my judgment was as a robe and a diadem.'),
            plain(15, 'I was eyes to the blind, and feet was I to the lame.'),
            plain(16, 'I was a father to the poor: and the cause which I knew not I searched out.'),
            plain(17, 'And I brake the jaws of the wicked, and plucked the spoil out of his teeth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job29-gate',
          html:
            'Job pictures himself at the city gate, the place where justice is administered, where the important gather. When he would appear, young men withdrew in respect. Princes fell silent. The aged stood up. Even without Job saying a word, his presence commanded honor. This is not mere social status—it is the reverence given to a man of genuine character and power.',
        },
        {
          kind: 'commentary',
          id: 'job29-righteousness-robes',
          html:
            'Job describes his righteousness as clothing—a robe and diadem. But righteousness here is not mere morality. It is the capacity to bring justice, to stand up for those without voice, to deliver the poor and the fatherless. Job&apos;s righteousness is active, embodied, visible. When he put on righteousness, others could see it.',
        },
        {
          kind: 'commentary',
          id: 'job29-eyes-feet',
          html:
            '"I was eyes to the blind, and feet was I to the lame." This is the measure of Job&apos;s compassion. He did not merely give alms. He became the capacity for sight and movement in those who lacked it. He entered into their helplessness and made himself the instrument of their relief. This is love that costs something, that asks the beloved to become part of another person&apos;s salvation.',
        },
        {
          kind: 'carry',
          html:
            'Job had found the source of true honor: not wealth or power, but the capacity to serve the powerless. He was great because he became the voice of the voiceless, the eyes of the blind, the feet of the lame. This is the measure of human dignity—not what we own, but what we give; not what we achieve, but whom we serve.',
        },
        {
          kind: 'reflection',
          id: 'job29-service',
          prompt:
            'In what ways have you been "eyes" or "feet" to someone in need? How did it feel to be the instrument of another&apos;s relief?',
        },
      ],
    },

    /* ─── Job 29:18–25 — The Expectation That Died ──────────────────── */
    {
      ref: 'Job 29:18–25',
      title: 'I Thought My Nest Would Endure',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(18, 'Then I said, I shall die in my nest, and I shall multiply my days as the sand.'),
            plain(19, 'My root was spread out by the waters, and the dew lay all night upon my branch:'),
            plain(20, 'My glory was fresh in me, and my bow was renewed in my hand.'),
            plain(21, 'Unto me men gave ear, and waited, and kept silence at my counsel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job29-mid-blessing-glory',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier?',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(22, 'After my words they spake not again; and my speech dropped upon them.'),
            plain(23, 'And they waited for me as for the rain; and they opened their mouth wide as for the latter rain.'),
            plain(24, 'If I laughed on them, they believed it not; and the light of my countenance they cast not down.'),
            plain(25, 'I chose out their way, and sat as chief, and dwelt as a king in the army, as one that comforteth the mourners.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job29-nest',
          html:
            'Job expected his life to continue in this way. "I shall die in my nest"—the image of a bird growing old in its own place, secure and established. His roots were deep, spread out by waters. His glory was perpetually renewed. Men hung on his words, waited for his counsel as for rain in a drought. He imagined his life would unfold in dignity and honor until his death.',
        },
        {
          kind: 'hebrew',
          id: 'job29-ken',
          title: 'Ken — Nest',
          script: 'קֵן',
          translit: '<strong>Ken</strong> · nest; home; place of security and establishment',
          description:
            'The nest is not a temporary structure. It is built slowly, carefully, over time. It is where one returns, where one is known, where one belongs. To expect to die in one&apos;s nest is to expect a life of unbroken continuity, of peace in the place one has built. Job&apos;s tragedy is precisely that his nest—his carefully built life of honor and security—was destroyed.',
        },
        {
          kind: 'christ',
          id: 'job29-christ-comfort',
          title: 'Christ Connection — The True Servant Who Comforts Mourners',
          html:
            'Job was "one that comforteth the mourners." Yet in his suffering, he finds no comforter. Christ, however, is the comfort that never fails. He too was a man who lifted up the broken, gave eyes to the blind, became the presence of God to the suffering. But unlike Job, Christ&apos;s work was not limited to one community or one season. His comfort extends into the deepest suffering—even into death itself. And in His resurrection, He becomes the comforter of all who mourn, the one whose presence is never withdrawn.',
        },
        {
          kind: 'carry',
          html:
            'We all build nests—carefully ordered lives, patterns of blessing, seasons where everything seems to work. We forget that the nest can be taken. What Job teaches us is not bitterness about that loss, but the deeper lesson: the honor that mattered was not the nest itself, but what he had become—a man of compassion, a servant to the broken. That cannot be taken, even if the nest is destroyed.',
        },
        {
          kind: 'reflection',
          id: 'job29-loss',
          prompt:
            'What is your nest? What have you built that you expect to endure? What would remain of you if it were all taken away?',
        },
      ],
    },
  ],
};
