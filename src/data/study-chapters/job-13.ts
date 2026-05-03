import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 13 — Job Speaks: The Courage to Contend with God
 *
 * Job moves toward a moment of profound courage and faith. "Surely I would speak to
 * the Almighty, and I desire to reason with God." He has had enough of his friends
 * and their false theology. He will speak directly to God, will plead his case
 * before the divine judge. And then comes one of the most famous verses in
 * Scripture: "Though he slay me, yet will I trust in him: but I will maintain mine
 * own ways before him." Even if God kills him, Job will not surrender his
 * integrity, will not confess to sins he has not committed, will not bow to his
 * friends&apos; accusations. This is faith without certainty, trust without
 * resolution—but it is trust nonetheless.
 */
export const JOB_13: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 13,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 6 },
  intros: [
    'Job has finished his response to the friends, and now he turns away from them entirely. He will speak to God. "Surely I would speak to the Almighty, and I desire to reason with God." This is a radical move. Not to his friends, not to the community, but to God Himself. Job will make his case directly before the throne of heaven.',
    'But before he does, Job says something crucial about his friends: "Ye are forgers of lies, ye are all physicians of no value." They have tried to help him with their theology, but their theology is false. Their medicine does not heal. And then comes the statement that will become the foundation of Job&apos;s faith: "Though he slay me, yet will I trust in him." Even if God kills him, even if this ordeal ends in death, Job will not stop trusting. He will not confess to sins he has not committed. He will maintain his integrity before God, even at the cost of his life.',
  ],

  bottomShare: {
    quote:
      '"Though he slay me, yet will I trust in him: but I will maintain mine own ways before him." Job faces death with unwavering commitment to truth and trust, refusing to compromise his integrity.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 13 · Study Guide',
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
      id: 'sefaria-job-13',
      kind: 'study',
      source: 'Sefaria',
      label: 'Job 13 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Job.13',
      description: 'The Hebrew text of Job 13 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-job-overview-13',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Job — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/job/',
      description: 'Open-access SBL essay on the historical and literary setting of Job.',
    },

  ],

  sections: [
    {
      ref: 'Job 13:1–12',
      title: 'Physicians of No Value',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'Lo, mine eye hath seen all this, mine ear hath heard and understood it.'),
            plain(2, 'What ye know, the same do I know also: I am not inferior unto you.'),
            plain(3, 'Surely I would speak to the Almighty, and I desire to reason with God.'),
            plain(4, 'But ye are forgers of lies: ye are all physicians of no value.'),
            plain(5, 'O that ye would altogether hold your peace! and it should be your wisdom.'),
            plain(6, 'Hear now my reasoning, and hearken to the pleadings of my lips.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job13-pivot-to-god',
          html:
            'Job stops speaking to his friends and turns toward God. The pain has nowhere else to go. The next verses are no longer accusation; they are appeal. [res:british-museum-ludlul]',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(7, 'Will ye speak wickedly for God? and talk deceitfully for him?'),
            plain(8, 'Will ye accept his person? will ye contend for God?'),
            plain(9, 'Is it good that he should search you out? or as one man mocketh another, do ye so mock him?'),
            plain(10, 'He will surely reprove you, if ye do secretly accept persons.'),
            plain(11, 'Shall not his excellency make you afraid? and his dread fall upon you?'),
            plain(12, 'Your remembrances are like unto ashes, your bodies to bodies of clay.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job-seen-all',
          html:
            '"Lo, mine eye hath seen all this, mine ear hath heard and understood it"—Job affirms his own capacity for perception and understanding. He has lived through the events. He has seen what his friends have only theorized about. He has direct access to truth that they do not[res:sefaria-job-13][res:bibleodyssey-job-overview-13].',
        },
        {
          kind: 'commentary',
          id: 'job-forgers-lies',
          html:
            '"Ye are forgers of lies: ye are all physicians of no value"—Job condemns his friends decisively. They are not merely mistaken. They are "forgers of lies"—they are actively creating false theology. And as physicians, they are worthless. They have come to heal, but their medicine does not work. It only makes things worse.',
        },
        {
          kind: 'hebrew',
          id: 'job-refuim',
          title: 'Refuim — "Physicians" (Healers)',
          script: 'רְפוּאִים',
          translit: '<strong>Refuim</strong> · physicians, healers, those who restore health',
          description:
            'Job&apos;s friends came as healers, believing their counsel would restore Job to wholeness. But they are "physicians of no value"—their healing does not work. Their remedy is false.',
        },
        {
          kind: 'commentary',
          id: 'job-silence-wisdom',
          html:
            '"O that ye would altogether hold your peace! and it should be your wisdom"—Job&apos;s most cutting insult. He is saying that his friends would be wise if they simply stopped speaking. Their silence would be their greatest contribution.',
        },
        {
          kind: 'commentary',
          id: 'job-wickedly-for-god',
          html:
            '"Will ye speak wickedly for God? and talk deceitfully for him?"—Job accuses his friends not only of lying, but of lying in God&apos;s name, of claiming to represent God&apos;s interests while actually misrepresenting Him. This is a spiritual betrayal.',
        },
        {
          kind: 'carry',
          html:
            'Job has rejected his friends&apos; counsel entirely. They claim to speak for God, but Job sees their words as wickedness and deception. He will no longer listen to them. He will speak directly to God.',
        },
        {
          kind: 'reflection',
          id: 'job-false-comforters',
          prompt:
            'Have you had comforters who meant well but whose counsel made things worse? How did you find the strength to reject their theology while still honoring their intentions?',
        },
      ],
    },

    {
      ref: 'Job 13:13–28',
      title: '"Though He Slay Me, Yet Will I Trust in Him"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(13, 'Hold your peace, let me alone, that I may speak, and let come on me what will.'),
            plain(14, 'Wherefore do I take my flesh in my teeth, and put my life in mine hand?'),
            plain(15, 'Though he slay me, yet will I trust in him: but I will maintain mine own ways before him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job13-mid-defense-silence',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier?',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(16, 'He also shall be my salvation: for an hypocrite shall not come before him.'),
            plain(17, 'Hear diligently my speech, and my declaration with your ears.'),
            plain(18, 'Behold now, I have ordered my cause; I know that I shall be justified.'),
            plain(19, 'Who is he that will plead with me? for now, if I hold my tongue, I shall give up the ghost.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job13-split-1',
          html:
            'Job &apos;takes his flesh in his teeth&apos;—an image of desperation and mortal peril. But from that edge he speaks his faith: "Though he slay me, yet will I trust in him." This is not faith because God will reward him. This is faith that persists into death itself, that does not require justification.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(20, 'Only do not two things unto me: then will I not hide myself from thee.'),
            plain(21, 'Withdraw thine hand far from me: and let not thy dread make me afraid.'),
            plain(22, 'Then call thou, and I will answer: or let me speak, and answer thou me.'),
            plain(23, 'How many are mine iniquities and sins? make me to know my transgression and my sin.'),
            plain(24, 'Wherefore hidest thou thy face, and holdest me for thine enemy?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job13-split-2',
          html:
            'Job sets two conditions for his willingness to face God: that God withdraw His hand, and that God&apos;s dread not make him afraid. If these are met, Job will not hide. He will plead. He will ask God directly for understanding.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(25, 'Wilt thou break a leaf driven to and fro? and wilt thou pursue the dry stubble?'),
            plain(26, 'For thou writest bitter things against me, and makest me to possess the iniquities of my youth.'),
            plain(27, 'Thou puttest my feet also in the stocks, and lookest narrowly unto all my paths; thou settest a print upon the heels of my feet.'),
            plain(28, 'And he, as a rotten thing, consumeth, as a garment that is moth eaten.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job-flesh-teeth',
          html:
            '"Wherefore do I take my flesh in my teeth, and put my life in mine hand?"—Job is speaking in the language of extreme danger. To take one&apos;s flesh in one&apos;s teeth is an image of desperation, of being in mortal peril. Job is saying: I am putting my very life at risk by speaking to God.',
        },
        {
          kind: 'commentary',
          id: 'job-slay-trust',
          html:
            '"Though he slay me, yet will I trust in him"—this is the turning point of the book. Job says that even if God kills him, he will trust. This is not faith based on evidence or on reward. This is faith that persists even in the face of death. This is faith that does not require God to justify Himself.',
        },
        {
          kind: 'hebrew',
          id: 'job-batach',
          title: 'Batach — "Trust" (Rely on, Put Confidence in)',
          script: 'בָּטַח',
          translit: '<strong>Batach</strong> · to trust, to rely on, to be confident in',
          description:
            'The word Job uses for trust is not passive. It is an active placing of confidence, a deliberate decision to rely on God even when everything suggests that reliance is foolish.',
        },
        {
          kind: 'commentary',
          id: 'job-maintain-ways',
          html:
            '"But I will maintain mine own ways before him"—Job will not lie. He will not confess to sins he has not committed. He will not surrender his integrity. Even if God kills him, he will maintain his honesty.',
        },
        {
          kind: 'commentary',
          id: 'job-hypocrite',
          html:
            '"For an hypocrite shall not come before him"—Job is aware that if he were to lie, if he were to pretend a false confession to appease God, he would become a hypocrite, and a hypocrite cannot stand before God. So Job chooses honesty over survival.',
        },
        {
          kind: 'commentary',
          id: 'job-ordered-cause',
          html:
            '"Behold now, I have ordered my cause; I know that I shall be justified"—Job has prepared his defense. He has arranged his arguments. And he believes that in the end, he will be vindicated. Not now, perhaps. Not in this life. But ultimately, he will be shown to be righteous.',
        },
        {
          kind: 'commentary',
          id: 'job-two-things',
          html:
            '"Only do not two things unto me: then will I not hide myself from thee"—Job sets conditions for his willingness to face God. Let God withdraw His hand far away. Let God&apos;s dread not make him afraid. If these conditions are met, then Job will speak. He will not hide.',
        },
        {
          kind: 'carry',
          html:
            'Job has crossed a threshold. He is no longer seeking comfort or explanation. He is seeking confrontation with God. He believes that ultimately, his case will be vindicated, but he does not require vindication as a condition of his trust. He trusts God even unto death.',
        },
        {
          kind: 'christ',
          id: 'job13-christ',
          title: 'Christ Connection — The Daysman Fulfilled',
          html:
            'Job longs for someone to stand between him and God, to argue his case: "Neither is there any daysman betwixt us, that might lay his hand upon us both" (Job 9:33). A daysman—an umpire, a mediator—is exactly what Job needs. And Paul announces the answer directly: "There is one mediator between God and men, the man Christ Jesus" (1 Tim. 2:5). The Daysman has come. He stands with the sufferer, not judging but reconciling. He does not condemn the innocent; He becomes the Advocate.',
        },
        {
          kind: 'reflection',
          id: 'job-trust-death',
          prompt:
            'Can you imagine yourself in Job&apos;s position, facing possible death, saying "Though he slay me, yet will I trust in him"? What would it take for your faith to reach that level?',
        },
      ],
    },
  ],
};
