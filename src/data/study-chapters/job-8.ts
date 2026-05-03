import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 8 — Bildad the Shuhite Speaks: The Logic of False Comfort
 *
 * Bildad is the first of Job's friends to speak, and his words carry the weight
 * of conventional wisdom. He questions Job's grief and insists on a simple truth:
 * God does not pervert judgment. If Job's children have died, they must have
 * sinned. If Job suffers, he must have done evil. Bildad appeals to the "former
 * age"—to the wisdom of the fathers—and promises that if Job will inquire of
 * them, he will be restored. But beneath the piety lies a cruel logic: your
 * suffering proves your guilt. Repent, and all will be well again. This is
 * friendship without mercy, theology without compassion.
 */
export const JOB_8: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 8,

  estimatedMinutes: { beginner: 2, intermediate: 6, deep: 8 },
  intros: [
    'Job&apos;s suffering has sent him into a grief so profound that he cannot eat. His body breaks out in sores. His nights are filled with nightmares, and his days with despair. And now his first friend, Bildad the Shuhite, rises to speak. Unlike Job, who has poured out his heart in honest lament, Bildad begins with a harsh word: "How long wilt thou speak these things?" He has come, he believes, not to listen but to teach. The assumption behind his words is that Job must be wrong—not wrong about the events that have befallen him, but wrong in his grief itself.',
    'Bildad&apos;s theology is orderly and clean. God does not pervert judgment. The Almighty does not cast aside the righteous. Therefore, Job&apos;s children must have sinned—they must have "transgressed against him," and that is why they are dead. And Job himself, if he is suffering, must have committed some wrong, must have sought God with insufficient sincerity. The remedy is simple: seek God diligently, make supplication, and be restored. Bildad speaks as a man who has never stood where Job stands. He has never lost everything. His theology has never been tested by actual desolation. He offers Job the comfort of a logic that, if true, would make Job responsible for his own catastrophe.',
  ],

  bottomShare: {
    quote:
      'Bildad offers Job a false certainty: if you suffer, you have sinned; if you repent, you will be restored. This is the comfort of a friend who has never known real loss.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 8 · Study Guide',
  },

  sections: [
    {
      ref: 'Job 8:1–7',
      title: 'The Logic of Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              1,
              'Then answered Bildad the Shuhite, and said,'
            ),
            plain(
              2,
              'How long wilt thou speak these things? and how long shall the words of thy mouth be like a strong wind?'
            ),
            plain(
              3,
              'Doth God pervert judgment? or doth the Almighty pervert justice?'
            ),
            plain(
              4,
              'If thy children have sinned against him, and he have cast them away for their transgression;'
            ),
            plain(
              5,
              'If thou wouldest seek unto God betimes, and make thy supplication to the Almighty;'
            ),
            plain(
              6,
              'If thou wert pure and upright; surely now he would awake for thee, and make the habitation of thy righteousness prosperous.'
            ),
            plain(
              7,
              'Though thy beginning was small, yet thy latter end should greatly increase.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bildad-long-wind',
          html:
            'Bildad begins by dismissing Job&apos;s words as "a strong wind"—empty, powerful but meaningless. He cannot sit with Job&apos;s grief. He hears Job&apos;s lament and immediately sets about to stop it, to correct it, to replace it with a better theology. This is the moment when friendship becomes cruelty.',
        },
        {
          kind: 'commentary',
          id: 'bildad-pervert',
          html:
            '"Doth God pervert judgment?" Bildad asserts a truth that seems self-evident: God is just. But his mistake is to assume that human suffering is always a direct result of human sin. He has taken a partial truth—that God is just—and made it absolute, closing off all other explanations. What if justice works on a timescale longer than a single lifetime? What if suffering serves purposes other than punishment?',
        },
        {
          kind: 'hebrew',
          id: 'bildad-din',
          title: 'Din — "Judgment"',
          script: 'דִּין',
          translit: '<strong>Din</strong> · judgment, justice, justice in legal proceedings',
          description:
            'Bildad invokes the language of the courtroom. God is the judge. The case is simple: if you suffer, you are guilty. If you are righteous, you will be vindicated. But this reduces the infinite mystery of divine justice to a mechanical system. It assumes God operates like a human judge, bound by rules we can understand and predict.',
        },
        {
          kind: 'carry',
          html:
            'Bildad&apos;s offer is seductive: seek God, repent, and everything will be restored. But embedded in this offer is a terrible implication: if restoration does not come, if you are not healed, then the fault is yours. You did not seek sincerely enough. You are not pure and upright. This is theology that leaves no room for mystery, no room for suffering that does not fit the formula.',
        },
        {
          kind: 'reflection',
          id: 'bildad-formula',
          prompt:
            'When you face suffering, do you sometimes feel that it must be punishment for something you have done? Where does that feeling come from? Is it ever helpful?',
        },
      ],
    },

    {
      ref: 'Job 8:8–13',
      title: 'The Wisdom of the Former Age',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              8,
              'For inquire, I pray thee, of the former age, and prepare thyself to the search of their fathers:'
            ),
            plain(
              9,
              'For we are but of yesterday, and know nothing, because our days upon the earth are a shadow:'
            ),
            plain(
              10,
              'Shall not they teach thee, and tell thee, and utter words out of their heart?'
            ),
            plain(
              11,
              'Can the rush grow up without mire? can the flag grow without water?'
            ),
            plain(
              12,
              'Whilst it is yet in his greenness, and not cut down, it withereth before any other herb.'
            ),
            plain(
              13,
              'So are the paths of all that forget God; and the hypocrite&apos;s hope shall perish:'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bildad-fathers',
          html:
            'Bildad appeals to authority: the fathers, the former age, those who came before. This is not an appeal to Scripture, but to a kind of wisdom that Bildad assumes is universally agreed upon. The righteous flourish. The wicked perish. This is what the fathers knew, and Bildad assumes it is what Job should know as well.',
        },
        {
          kind: 'commentary',
          id: 'bildad-shadow',
          html:
            'The image is striking: "Our days upon the earth are a shadow." This is true. Human life is brief, insubstantial, fleeting. But Bildad uses this truth not with humility but with authority. Because we are as shadows, we must trust the wisdom of those who came before, who had more time to learn the laws that govern the universe.',
        },
        {
          kind: 'commentary',
          id: 'bildad-rush',
          html:
            'The rush and the flag are water plants that cannot survive without their proper element. By nature, they perish when severed from what sustains them. Bildad is suggesting that sinners are like these plants: they cannot survive without God, and when they are cut off from Him, they wither. The image is simple, but it assumes something Job&apos;s own experience contradicts: that the righteous always flourish and the wicked always perish immediately.',
        },
        {
          kind: 'carry',
          html:
            'Bildad&apos;s appeal to the fathers is an appeal to convention. He is not asking Job to think for himself, but to accept what everyone has always believed. This is how false comfort works: it relies on the authority of "what everyone knows," rather than on honest wrestling with the particular pain in front of us.',
        },
        {
          kind: 'reflection',
          id: 'bildad-convention',
          prompt:
            'What wisdom have you inherited from your "fathers"—from your family, your community, your tradition? When does that inherited wisdom serve you, and when does it silence you?',
        },
      ],
    },

    {
      ref: 'Job 8:14–22',
      title: 'The Hypocrite&apos;s Hope Shall Perish',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              14,
              'Whose hope shall be cut off, and whose trust shall be a spider&apos;s web.'
            ),
            plain(
              15,
              'He shall lean upon his house, but it shall not stand: he shall hold it fast, but it shall not endure.'
            ),
            plain(
              16,
              'He is green before the sun, and his branch shooteth forth in his garden.'
            ),
            plain(
              17,
              'His roots are wrapped about the heap, and seeth the place of stones:'
            ),
            plain(
              18,
              'If he be destroyed from his place, then it shall deny him, saying, I have not seen thee.'
            ),
            plain(
              19,
              'Behold, this is the joy of his way; and out of the earth shall others grow.'
            ),
            plain(
              20,
              'Behold, God will not cast away a perfect man, neither will he help the wicked:'
            ),
            plain(
              21,
              'Till he fill thy mouth with laughing, and thy lips with rejoicing.'
            ),
            plain(
              22,
              'They that hate thee shall be clothed with shame; and the dwelling of the wicked shall come to nought.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bildad-spider-web',
          html:
            '"Whose trust shall be a spider&apos;s web"—a fragile, insubstantial thing. The hypocrite builds what appears to be substantial, but it is as delicate as a web. Any wind, any disturbance, and it collapses. Bildad is describing the person who has put his trust in something other than God, and he is suggesting that such a person&apos;s trust will not hold.',
        },
        {
          kind: 'commentary',
          id: 'bildad-green-branch',
          html:
            'The image shifts. The wicked man may appear green and flourishing for a time—his branch shoots forth, his roots seem planted in fertile ground. But appearance is deceiving. When he is destroyed, when his place is taken, he becomes a stranger even to the ground that held him. Nature itself denies knowing him.',
        },
        {
          kind: 'hebrew',
          id: 'bildad-ken',
          title: 'Ken — "Know"',
          script: 'כֵּן',
          translit: '<strong>Ken</strong> · to know, to acknowledge, to perceive',
          description:
            'When the wicked man is destroyed, the place "shall deny him, saying, I have not seen thee." The earth that sustained him will not even acknowledge that he existed. This is the ultimate obliteration—not just death, but the erasure of having ever been.',
        },
        {
          kind: 'commentary',
          id: 'bildad-perfect',
          html:
            '"God will not cast away a perfect man, neither will he help the wicked." This is Bildad&apos;s simple, devastating conclusion. If you are perfect, God will help you. If you are wicked, God will abandon you. And then comes the cruel promise: your mouth will be filled with laughing. Your lips will rejoice. Everything that was taken will be restored. But only if you are perfect. Only if you have not sinned.',
        },
        {
          kind: 'christ',
          id: 'bildad-christ',
          title: 'Christ Connection — The True Comforter vs. the False Friend',
          html:
            'Job&apos;s friends offer him a theology of punishment and reward. But Christ comes into the world with a different message. He sits with the sick. He eats with the outcast. He heals on the Sabbath, breaking the law to care for a suffering person. When the disciples ask about a blind man, "Who hath sinned, this man, or his parents?" Christ rejects the premise: "Neither hath this man sinned, nor his parents: but that the works of God should be made manifest in him" (John 9:2–3). Bildad would have the blind man repent. Christ heals him. Bildad offers logic. Christ offers presence.',
        },
        {
          kind: 'carry',
          html:
            'The cruelest moment in Bildad&apos;s speech may be the promise of restoration. If Job will only repent perfectly, only seek God completely, only become utterly pure—then God will fill his mouth with laughter. But Job&apos;s children are dead. No amount of perfect repentance will bring them back. Bildad&apos;s theology offers false hope, and false hope, in the end, is the worst kind of cruelty.',
        },
        {
          kind: 'reflection',
          id: 'bildad-promise',
          prompt:
            'Have you ever been offered false comfort by someone who was certain they knew why you were suffering? How did you respond? What kind of comfort did you actually need?',
        },
      ],
    },
  ],
};
