import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Job 26 — Job: The Greatness of God
 *
 * Job responds to Bildad&apos;s brief speech with contempt. "How hast thou helped
 * him that is without power? how savest thou the arm that hath no strength?"
 * Bildad&apos;s words are useless. They do not heal. They do not help. And then
 * Job launches into a magnificent description of God&apos;s sovereignty over
 * creation. "He stretcheth out the north over the empty place, and hangeth the
 * earth upon nothing." God hangs the earth upon nothing. The heavens are
 * stretched out. The abyss is held in check. The pillars of heaven tremble at
 * God&apos;s approach. This is a vision of cosmic order sustained by divine power.
 * It is not a vision of judgment on the wicked or vindication of the righteous.
 * It is simply the vision of a God whose power is so great that the entire
 * universe is held in His hand.',
 */
export const JOB_26: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 26,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Job mocks Bildad&apos;s brief speech. "How hast thou helped him that is without power? how savest thou the arm that hath no strength?" Bildad &apos;s words are fine-sounding, but they are useless. They do not address the real problem. They do not offer real help. Job is saying: Your doctrine is correct as far as it goes. But it does not penetrate to the heart of the matter. It does not touch the real mystery of God&apos;s nature.',
    'And then Job does something extraordinary. Rather than continue to argue about his own suffering, he steps back and describes the vastness and power of God. "He stretcheth out the north over the empty place, and hangeth the earth upon nothing." The earth hangs on nothing—it is suspended in void, held only by divine power. The stars shine. The heavens are stretched out. Death and destruction are laid bare before God. This is not a vision of God as judge of wickedness or vindicator of the righteous. It is a vision of God as the sovereign creator, the one whose power maintains all things, before whom all secrets are known. In the face of such vastness, the question "why does the wicked prosper?" seems small, almost trivial.',
  ],

  bottomShare: {
    quote:
      '"He stretcheth out the north over the empty place, and hangeth the earth upon nothing." Job&apos;s vision of God&apos;s power transcends the theodicy question—it is simply God sustaining creation.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 26 · Study Guide',
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
      id: 'sefaria-job-26',
      kind: 'study',
      source: 'Sefaria',
      label: 'Job 26 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Job.26',
      description: 'The Hebrew text of Job 26 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-job-overview-26',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Job — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/job/',
      description: 'Open-access SBL essay on the historical and literary setting of Job.',
    },

  ],

  sections: [
    /* ─── Job 26:1–4 — Mockery of Bildad ──────────────────────────────── */
    {
      ref: 'Job 26:1–4',
      title: 'The Uselessness of Empty Words',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(1, 'But Job answered and said,'),
            {
              number: 2,
              spans: [
                t('How hast thou helped him that is '),
                hg('without power?', 'job26-powerless'),
                t(' how savest thou the arm that hath no strength? '),
              ],
            },
            plain(3, 'How hast thou counselled him that hath no wisdom? and how hast thou plentifully declared the thing as it is?'),
            {
              number: 4,
              spans: [
                t('To whom hast thou uttered words? and whose spirit came from thee? '),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job26-powerless',
          html:
            'Job asks: how have you helped me? I am without power. My arm has no strength. I am broken. Your words do not heal me. Your doctrine does not restore my strength. You speak fine theories, but you do not address the reality of my condition. This is a rebuke to all false comforters: your explanations do not matter if they do not help. [res:british-museum-ludlul]',
        },
        {
          kind: 'carry',
          html:
            'Job identifies the failure of his friends: they have offered explanations instead of compassion, theology instead of healing, doctrine instead of presence. True wisdom is not merely correct doctrine. True wisdom is the wisdom that knows when to speak and when to be silent, that understands the difference between theory and reality, that can sit with suffering without trying to explain it away[res:sefaria-job-26][res:bibleodyssey-job-overview-26].',
        },
        {
          kind: 'reflection',
          id: 'job26-help',
          prompt: 'Have you offered someone explanation when they needed compassion? Have you tried to comfort someone with words when their arm had no strength?',
        },
      ],
    },

    /* ─── Job 26:5–14 — The Greatness of God ─────────────────────────── */
    {
      ref: 'Job 26:5–14',
      title: 'God Sustains All Creation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(5, 'Dead things are formed from under the waters, and the inhabitants thereof.'),
            {
              number: 6,
              spans: [
                t('Hell is naked before him, and destruction hath no covering. '),
              ],
            },
            {
              number: 7,
              spans: [
                t('He stretcheth out the north over the '),
                hg('empty place', 'job26-empty'),
                t(', and '),
                hg('hangeth the earth upon nothing', 'job26-nothing'),
                t('. '),
              ],
            },
            plain(8, 'He bindeth up the waters in his thick clouds; and the cloud is not rent under them.'),
            plain(9, 'He holdeth back the face of his throne, and spreadeth his cloud upon it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job26-cosmic-order',
          html:
            'Job shifts from speaking of the foundation of creation to its apparent instability. Order hides hidden trembling.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(10, 'He hath compassed the waters with bounds, until the day and night come to an end.'),
            {
              number: 11,
              spans: [
                t('The pillars of heaven tremble and are astonished at his reproof. '),
              ],
            },
            plain(12, 'He divideth the sea with his power, and by his understanding he smiteth through the proud.'),
            plain(13, 'By his spirit he hath garnished the heavens; his hand hath formed the crooked serpent.'),
            {
              number: 14,
              spans: [
                t('Lo, these are parts of his ways: but '),
                hg('how little a portion is heard of him?', 'job26-portion'),
                t(' but the thunder of his power who can understand?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job26-empty',
          html:
            '"He stretcheth out the north over the empty place." God extends the heavens over emptiness, over void. There is nothing to support the creation except God&apos;s will and power. The north wind, the whole framework of the cosmos, is stretched over absolute nothingness.',
        },
        {
          kind: 'hebrew',
          id: 'job26-tohu',
          title: 'Tohu — "Empty Place" (Void, Chaos, Formlessness)',
          script: 'תֹהוּ',
          translit: '<strong>Tohu</strong> · empty place, void, chaos, formlessness; the state of non-being',
          description:
            'Tohu is the primordial chaos, the void, the formless state that precedes creation. God stretches the north over tohu—He brings order out of chaos, form out of formlessness. And yet the underlying reality—the void—is never fully banished. It is held in check only by God&apos;s will.',
        },
        {
          kind: 'commentary',
          id: 'job26-nothing',
          html:
            '"Hangeth the earth upon nothing." The earth is not supported by pillars or foundations. It hangs in space, suspended by nothing—by the invisible hand of God. This is an extraordinary image of divine power: the entire world is held in being by nothing but God&apos;s decree.',
        },
        {
          kind: 'hebrew',
          id: 'job26-ayin',
          title: 'Ayin — "Nothing" (Non-existence, Emptiness)',
          script: 'אַיִן',
          translit: '<strong>Ayin</strong> · nothing, non-existence, emptiness; what is not',
          description:
            'The earth hangs on ayin—on nothingness, on non-being. This suggests that were it not for God&apos;s continuous sustenance, the earth would return to non-existence. All things depend on God. All things would cease to be if God ceased to will them.',
        },
        {
          kind: 'commentary',
          id: 'job26-portion',
          html:
            '"Lo, these are parts of his ways: but how little a portion is heard of him? but the thunder of his power who can understand?" This is Job&apos;s final reflection: what we have described—the stretching out of the heavens, the hanging of the earth, the binding of the waters—these are merely parts of God&apos;s ways. These are hints, whispers, fragments of the whole. The full power of God cannot be comprehended by the human mind.',
        },
        {
          kind: 'christ',
          id: 'job26-christ',
          title: 'Christ Connection — By Him All Things Are Held Together',
          html:
            'Paul writes of Christ: "By him were all things created, that are in heaven, and that are in earth... And he is before all things, and by him all things consist" (Colossians 1:16–17). Christ is the one through whom the earth is hung upon nothing, through whom all things are sustained. The power that Job sees in creation is the power of Christ. The wisdom that holds all things together is the wisdom of the eternal Word. And in Christ, the infinite becomes knowable, the incomprehensible becomes personal, the voice of thunder becomes the word of grace.',
        },
        {
          kind: 'carry',
          html:
            'Job&apos;s vision of God&apos;s power over creation offers a perspective on his suffering. In the face of such vastness, such power, such cosmic order, the question of why the wicked prosper or why the righteous suffer seems almost insignificant. Not because suffering does not matter. But because God is greater than our suffering. God&apos;s plans encompass more than our pain. We are held in the hands of one whose power sustains all creation.',
        },
        {
          kind: 'reflection',
          id: 'job26-vastness',
          prompt: 'Does contemplating God&apos;s power over creation change how you view your own suffering? Does the vastness of God bring comfort or further alienation?',
        },
      ],
    },
  ],
};
