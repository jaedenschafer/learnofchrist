import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 32 — Elihu Steps Forward
 *
 * A new voice enters the conversation. Elihu, younger than Job and his three friends,
 * has listened to all their words and is dissatisfied with both Job's defense and
 * his friends' accusations. "Great men are not always wise," Elihu asserts, stepping
 * forward to offer his own perspective on suffering and God's justice.
 */
export const JOB_32: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 32,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 6 },
  intros: [
    'After Job&apos;s speech and oath of innocence, the narrative shifts. The three friends have run out of words. But a younger man, Elihu, has been listening, growing increasingly frustrated with both sides. He has been silent because age has a voice in the ancient world, and youth must wait its turn. But Elihu can wait no longer. He believes he has something crucial to say about suffering, about God, and about the meaning of human affliction.',
  ],

  bottomShare: {
    quote:
      '"I am young, and ye are very old; wherefore I was afraid...But there is a spirit in man...the spirit of the Almighty giveth them understanding." Elihu steps forward with a different perspective.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 32 · Study Guide',
  },

  resources: [
    {
      id: 'british-museum-theodicy',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Theodicy',
      url: 'https://www.britishmuseum.org/',
      description: 'Ancient Akkadian dialogue on divine justice, suffering, and retribution.',
    },
    {
      id: 'sefaria-job-32',
      kind: 'study',
      source: 'Sefaria',
      label: 'Job 32 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Job.32',
      description: 'The Hebrew text of Job 32 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-job-overview-32',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Job — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/job/',
      description: 'Open-access SBL essay on the historical and literary setting of Job.',
    },

  ],

  sections: [
    /* ─── Job 32:1–5 — A Young Man&apos;s Frustration ────────────────────── */
    {
      ref: 'Job 32:1–5',
      title: 'The Silence Breaks',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(1, 'So these three men ceased to answer Job, because he was righteous in his own eyes.'),
            plain(2, 'Then was kindled the wrath of Elihu the son of Barachel the Buzite, of the kindred of Ram: against Job was his wrath kindled, because he justified himself rather than God.'),
            plain(3, 'Also against his three friends was his wrath kindled, because they had found no answer, and yet had condemned Job.'),
            plain(4, 'Now Elihu had waited till Job had spoken, because they were older than he.'),
            plain(5, 'When Elihu saw that there was no answer in the mouth of the three men, then his wrath was kindled.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job32-three-cease',
          html:
            'The three friends have stopped speaking. They have exhausted their arguments. Yet their silence is not peaceful acceptance—it is defeat. They have not convinced Job. Job still justifies himself. And in that moment of stalemate, Elihu&apos;s wrath is kindled. [res:british-museum-theodicy]',
        },
        {
          kind: 'commentary',
          id: 'job32-elihu-wrath',
          html:
            'Elihu is angry—but notice at whom. He is angry at Job for justifying himself "rather than God." And he is angry at the three friends for condemning Job without being able to answer him. Neither side, in Elihu&apos;s view, has gotten it right. Both Job and his friends have failed to properly honor God&apos;s righteousness[res:sefaria-job-32][res:bibleodyssey-job-overview-32].',
        },
        {
          kind: 'hebrew',
          id: 'job32-tsaar',
          title: 'Tsaar — Trouble or Anger',
          script: 'צַעַר',
          translit: '<strong>Tsaar</strong> · trouble; vexation; to be troubled or angry',
          description:
            'Elihu&apos;s wrath is not mere irritation. It is a deep vexation, a sense that something fundamental is wrong with how this conversation has proceeded. He is troubled because the central issue—God&apos;s righteousness and justice—has been obscured by human defensiveness and argument.',
        },
        {
          kind: 'carry',
          html:
            'Elihu represents the perspective of the outsider—the one who has not yet invested everything in being right, and therefore can see the situation with clarity. His entrance suggests that sometimes new voices are needed, voices that have not been worn down by endless debate.',
        },
        {
          kind: 'reflection',
          id: 'job32-fresh-voice',
          prompt:
            'When have you needed someone from outside a conflict to see what you and your opponent could not? What did their fresh perspective reveal?',
        },
      ],
    },

    /* ─── Job 32:6–22 — Youth Speaks With Understanding ────────────────── */
    {
      ref: 'Job 32:6–22',
      title: 'Age Does Not Hold Wisdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(6, 'And Elihu spake, and said, I am young, and ye are very old; wherefore I was afraid, and durst not shew you mine opinion.'),
            plain(7, 'I said, Days should speak, and multitude of years should teach wisdom.'),
            plain(8, 'But there is a spirit in man: and the inspiration of the Almighty giveth them understanding.'),
            plain(9, 'Great men are not always wise: neither do the aged understand judgment.'),
            plain(10, 'Therefore I said, Hearken to me; I also will shew mine opinion.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job32-split-1',
          html:
            'Elihu distinguishes between age and wisdom. He deferred out of respect, but he will not defer to falsehood. "There is a spirit in man"—not accumulated experience, but the inspiration of the Almighty—that gives understanding. The aged do not automatically understand judgment.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(11, 'Behold, I waited for your words; I gave ear to your reasons, whilst ye searched out what to say.'),
            plain(12, 'Yea, I attended unto you, and, behold, there was none of you that convinced Job, or that answered his words:'),
            plain(13, 'Lest ye should say, We have found out wisdom: God thrusteth him down, not man.'),
            plain(14, 'Now he hath not directed his words against me: neither will I answer him with your speeches.'),
            plain(15, 'They were amazed, they answered no more: they left off speaking.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job32-split-2',
          html:
            'Elihu watched the entire debate reach a stalemate. None of the friends could answer Job&apos;s words. They fell silent. And in that silence, Elihu sees something the others miss: the conversation itself has broken down. A fresh voice is needed.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(16, 'When I had waited, (for they spake not, but stood still, and answered no more;)'),
            plain(17, 'I said, I will answer also my part, I will shew mine opinion.'),
            plain(18, 'For I am full of matter, the spirit within me constraineth me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job32-mid-spirit-speak',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier?',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(19, 'Behold, my belly is as wine which hath no vent; it is ready to burst.'),
            plain(20, 'I will speak, that I may be refreshed: I will open my lips and answer.'),
            plain(21, 'Let me not, I pray you, accept any man&apos;s person: neither let me give flattering titles unto any man.'),
            plain(22, 'For I know not to give flattering titles; in so doing my Maker would soon take me away.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job32-spirit-understands',
          html:
            'Elihu makes a crucial distinction. Days should speak wisdom, he acknowledges. But there is something beyond age: "there is a spirit in man: and the inspiration of the Almighty giveth them understanding." Wisdom comes not from length of days but from the Spirit. Great men are not always wise. The aged do not automatically understand judgment.',
        },
        {
          kind: 'commentary',
          id: 'job32-none-convinced',
          html:
            'Elihu observed the entire debate. And his conclusion is clear: none of Job&apos;s friends convinced him. They had their arguments, but they failed to answer Job&apos;s deepest challenge. This frustrates Elihu. The issue is not being debated rightly. Elihu will try differently.',
        },
        {
          kind: 'hebrew',
          id: 'job32-ruach',
          title: 'Ruach — Spirit or Wind',
          script: 'רוּחַ',
          translit: '<strong>Ruach</strong> · spirit; wind; the divine breath that gives understanding',
          description:
            'The ruach is not natural wisdom or intelligence. It is the breath of God, the spirit that animates understanding. Elihu suggests that what matters is not accumulated years but the presence of this spirit—the capacity to receive insight from God directly.',
        },
        {
          kind: 'carry',
          html:
            'Elihu teaches that wisdom can come from unexpected sources—from the young, the outsider, the one who has not been entrenched in old arguments. His willingness to set aside the deference due to age and speak what he believes is true suggests that sometimes authority must yield to the truth.',
        },
        {
          kind: 'reflection',
          id: 'job32-young-voice',
          prompt:
            'Are you willing to listen to wisdom that comes from youth or from unexpected sources? What makes it hard to receive correction from someone younger or less experienced?',
        },
      ],
    },

    /* ─── The Invitation to Listen ────────────────────────────────────── */
    {
      ref: 'Job 32',
      title: 'A New Perspective Begins',
      blocks: [
        {
          kind: 'commentary',
          id: 'job32-opening-speech',
          html:
            'Elihu opens the second cycle of speeches (chapters 32–37). Unlike the three friends, Elihu does not accuse Job of sin or suggest that his suffering is punishment. Instead, Elihu will argue that suffering is often God&apos;s way of instructing and refining the soul. He will emphasize God&apos;s justice and power, but with a different angle: God is not punishing Job; God is teaching him.',
        },
        {
          kind: 'christ',
          id: 'job32-christ-young-voice',
          title: 'Christ Connection — Wisdom in Unexpected Form',
          html:
            'Elihu&apos;s emergence as an unexpected voice reflects a pattern in Scripture: wisdom comes from the margins, not the center. Christ came not to the powerful first, but to the poor, the sick, the outcast. His first disciples were fishermen and tax collectors—not the learned teachers of the law. And He chose to speak in parables that the wise could not understand, while the simple grasped their meaning. God uses unexpected voices to speak truth.',
        },
        {
          kind: 'carry',
          html:
            'The entrance of Elihu reminds us that a conversation can reach an impasse, and an entirely new perspective is needed to break through. Sometimes we need to step outside our familiar arguments and listen to someone we might ordinarily overlook. Fresh insight often comes from fresh voices.',
        },
        {
          kind: 'reflection',
          id: 'job32-breakthrough',
          prompt:
            'In your own life, when has a new perspective—especially from an unexpected source—broken through a stalemate? How did it change your understanding?',
        },
      ],
    },
  ],
};
