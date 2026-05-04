import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 2 — Job Afflicted in Body; The Three Friends Arrive
 *
 * In the second council of heaven, Satan returns with a wager: skin for skin,
 * Job will curse God if his flesh is struck. The Lord permits it—but not his life.
 * Satan strikes Job with boils from head to toe. Job sits in ash and scrapes himself
 * with a potsherd. His wife urges him to curse God and die. Job refuses, speaking
 * theology from the ash-heap: "Shall we receive good at the hand of God, and shall
 * we not receive evil?" When his three friends hear of his affliction, they come
 * to mourn and comfort. For seven days and seven nights, they sit beside him in
 * silence. This is their finest hour. When they speak, they will fail. But here,
 * in the silence of true companionship, they hold the suffering one.
 */
export const JOB_2: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 2,

  estimatedMinutes: { beginner: 3, intermediate: 12, deep: 15 },
  opener: {
    matchTitle: /Job and His Friends/i,
    caption: 'Job 2',
  },
  intros: [
    'The heavens open again. Satan returns to accuse Job a second time, and the Lord&apos;s confidence in His servant has not wavered. "Hast thou considered my servant Job, that there is none like him in the earth, a perfect and an upright man, one that feareth God, and escheweth evil? and STILL HE HOLDETH FAST HIS INTEGRITY, although thou movedst me against him, to destroy him without cause." The afflictions of the first test have not broken Job. He has lost everything—family, wealth, health—and his faith in God remains. Satan is enraged. He shifts his wager: "Skin for skin, yea, all that a man hath will he give for his life. But put forth thine hand now, and touch his bone and his flesh, and he will curse thee to thy face." Strip a man of his possessions, Satan suggests, and he will endure. But strike his body—his skin, his flesh, his very self—and he will break. The Lord permits the trial: "Behold, he is in thine hand; but save his life." Satan departs to strike Job with sore boils from the sole of his foot unto the crown of his head.',
    'Job, covered in boils, sits among the ashes. He scrapes himself with a broken piece of pottery. His wife, witnessing his anguish, breaks her silence: "Dost thou still retain thine integrity? CURSE GOD, AND DIE." But Job will not curse. He speaks words that will echo through all of Scripture: "Thou speakest as one of the foolish women speaketh. What? Shall we receive good at the hand of God, and shall we not receive evil?" In all this affliction, the text tells us, Job sinned not with his lips.',
    'When Job&apos;s three friends—Eliphaz the Temanite, Bildad the Shuhite, and Zophar the Naamathite—hear of the calamity that has come upon him, they make an appointment to come together. Each travels from his own place to mourn with him and to comfort him. When they see him from a distance, they do not recognize him. They lift up their voice and weep. They tear their garments. They sprinkle dust upon their heads. And then they do something beautiful: they sit down with him upon the ground, and for seven days and seven nights, not one of them speaks a word. They have seen his grief. It is very great. And in that silence, they offer what the suffering often need most—presence without words, companionship in anguish.',
  ],

  bottomShare: {
    label: 'Share Job 2',
    quote:
      'In his agony, Job refuses to curse God. And when his friends arrive, they do the greatest thing they will ever do for him: they sit beside him in silence for seven days and seven nights. Sometimes the truest comfort is simply to be present with the suffering.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 2 · Study Guide',
  },

  resources: [
    {
      id: 'bible-odyssey-job',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Book of Job',
      url: 'https://www.bibleodyssey.org/dictionary/job/',
      description: 'SBL entry on Job: composition, wisdom tradition, theodicy, textual history.',
    },
    {
      id: 'sefaria-job-2',
      kind: 'study',
      source: 'Sefaria',
      label: 'Job 2 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Job.2',
      description: 'The Hebrew text of Job 2 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-job-overview-2',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Job — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/job/',
      description: 'Open-access SBL essay on the historical and literary setting of Job.',
    },

  ],

  sections: [
    /* ─── Job 2:1–6 — The Second Council and the Second Wager ──────────── */
    {
      ref: 'Job 2:1–6',
      title: 'Satan&apos;s New Wager: Skin for Skin',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'Again on a day the sons of God came to present themselves before the Lord, and Satan came also among them to present himself before the Lord.'),
            plain(2, 'And the Lord said unto Satan, From whence comest thou? And Satan answered the Lord, and said, From going to and fro in the earth, and from walking up and down in it.'),
            {
              number: 3,
              spans: [
                t('And the Lord said unto Satan, Hast thou considered my servant Job, that there is none like him in the earth, a perfect and an upright man, one that feareth God, and escheweth evil? and '),
                hp('still he holdeth fast his integrity', 'sec1-integrity'),
                t(', although thou movedst me against him, to destroy him without cause.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And Satan answered the Lord, and said, '),
                hg('Skin for skin', 'sec1-skin-for-skin'),
                t(', yea, all that a man hath will he give for his life.'),
              ],
            },
            plain(5, 'But put forth thine hand now, and touch his bone and his flesh, and he will curse thee to thy face.'),
            plain(6, 'And the Lord said unto Satan, Behold, he is in thine hand; but save his life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'sec1-integrity',
          html:
            'Job has endured the first test. The Lord speaks of him with undiminished confidence: he still holds fast his integrity. The word here is significant—Job has not cursed God, has not turned away. His faith remains. And the Lord testifies to it, drawing Satan&apos;s wrath. Satan is a creature of accusation and destruction; that Job has withstood both wounds Satan&apos;s pride. He will press the trial further. [res:bible-odyssey-job]',
        },
        {
          kind: 'hebrew',
          id: 'sec1-tummah',
          title: 'Tummah — Integrity; Wholeness',
          script: 'תֻּמָּה',
          translit: '<strong>Tummah</strong> · integrity; wholeness; completeness; innocence',
          description:
            'The Hebrew word תֻּמָּה (tummah) carries the sense of being complete, whole, and innocent. Job is described as a man of tummah—a man whose inward state and outward life align. He is not divided, not split between pretense and reality. This wholeness is what Satan attacks, and what Job, through all his afflictions, will fight to preserve.',
        },
        {
          kind: 'commentary',
          id: 'sec1-skin-for-skin',
          html:
            '"Skin for skin"—Satan&apos;s calculation is cold and precise. He sees human nature as wholly self-interested. A man will trade anything external—possessions, family, status—to preserve his own flesh. Strip him of wealth, and he may endure. But strike his body, his skin, his flesh itself, and the calculus changes. This, Satan believes, will break Job. But the logic reveals Satan&apos;s own poverty of understanding. He assumes that flesh is the highest good, that the self is the ultimate measure. He does not understand covenant, faith, or the human capacity to love something greater than self-preservation[res:sefaria-job-2][res:bibleodyssey-job-overview-2].',
        },
        {
          kind: 'commentary',
          id: 'sec1-save-life',
          html:
            'The Lord grants Satan access to Job&apos;s flesh but draws a boundary: "Save his life." The trial is permitted—but not the death. Job will suffer, but he will live to bear it. This constraint will prove crucial. Job&apos;s wife will urge him to curse God and die, to end the agony. The friends will come to sit with him. And Job himself will reach the depths of despair. But death will not be an option. He will have to live through it.',
        },
        {
          kind: 'carry',
          html:
            'We often assume that the greatest crisis of faith comes when we lose what we love most—possessions, security, the people we cherish. But sometimes the deeper trial comes when we are wounded in our own flesh, when our bodies betray us, when pain becomes the daily reality we wake to. Job faces both kinds of loss. And the second—the bodily affliction—will press him further than the first.',
        },
        {
          kind: 'reflection',
          id: 'sec1-reflection',
          prompt: 'What do you understand Satan to believe about human nature in his "skin for skin" wager? What do you believe he misunderstands about what sustains people through suffering?',
        },
      ],
    },

    /* ─── Job 2:7–10 — Satan Strikes Job&apos;s Body; Job&apos;s Wife and Reply ─── */
    {
      ref: 'Job 2:7–10',
      title: 'The Boils and the Wife&apos;s Temptation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 7,
              spans: [
                t('So Satan went forth from the presence of the Lord, and smote Job with '),
                hy('sore boils', 'sec2-boils'),
                t(' from the sole of his foot unto his crown.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Job took him a '),
                hy('potsherd', 'sec2-potsherd'),
                t(' to scrape himself withal; and he sat down among the '),
                hy('ashes', 'sec2-ashes'),
                t('.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Then said his wife unto him, Dost thou still retain thine integrity? '),
                hg('Curse God, and die', 'sec2-curse-god'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('But he said unto her, Thou speakest as one of the foolish women speaketh. '),
                hp('What? shall we receive good at the hand of God, and shall we not receive evil?', 'sec2-receive-evil'),
                t(' In all this did not Job sin with his lips.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'sec2-shechin',
          title: 'Shechin — Boils; Sores; Plague',
          script: 'שְׁחִין',
          translit: '<strong>Shechin</strong> · boils; sores; plague; pestilent sore',
          description:
            'The Hebrew שְׁחִין (shechin) describes an inflammation of the skin—boils, sores, pustules. The word appears in the plagues of Egypt (Exodus 9). Here it covers Job from the sole of his foot to the crown of his head. There is no place on his body that escapes infection, no part of him that is not marked by the affliction. He is wholly afflicted.',
        },
        {
          kind: 'hebrew',
          id: 'sec2-epher',
          title: 'Epher — Ashes',
          script: 'אֵפֶר',
          translit: '<strong>Epher</strong> · ashes; dust; the remains of a burnt offering',
          description:
            'The Hebrew אֵפֶר (epher) means ashes—the remnant of something that has been burned away. Job sits among the ashes, covered in boils. In ancient Near Eastern mourning, sitting in ashes signified desolation and grief. It also carried a symbolic weight: the ashes of a sacrificial offering, the remains of what has been consumed. Job, in his agony, becomes something like a burnt offering—not by his choosing, but by the trial.',
        },
        {
          kind: 'commentary',
          id: 'sec2-boils',
          html:
            'Satan strikes Job with boils—visible, painful, repugnant wounds that mark his entire body. These are not private afflictions; they are public marks of disease. Anyone who sees Job will see his suffering written on his skin. He cannot hide it, cannot maintain dignity in public. And as if the pain were not enough, there is the shame of it.',
        },
        {
          kind: 'commentary',
          id: 'sec2-potsherd',
          html:
            'Job takes a broken piece of pottery—a potsherd—to scrape himself. This detail matters. He does not have soft cloths or soothing oil. He has a sharp, rough fragment of broken pottery. He scrapes his own flesh in an attempt to relieve the itching of the boils. The image is visceral: a man in such agony that he tears at his own skin with whatever is at hand.',
        },
        {
          kind: 'commentary',
          id: 'sec2-ashes',
          html:
            'Among the ashes. This is the posture of deep mourning, of complete desolation. Job has lost his children, his wealth, his health. He sits in the ash-heap, marked by disease, and there—in that extremity—his wife comes to him.',
        },
        {
          kind: 'commentary',
          id: 'sec2-curse-god',
          html:
            'Job&apos;s wife speaks the temptation that Satan himself believes will break him. "Curse God, and die." It is a dark mercy—a way out of suffering, a final escape. And it comes from the one who should be his closest ally, the one who shares his bed and his life. The temptation is not crude; it is intimate. She has watched him suffer. She sees him covered in boils, sitting in ashes. Perhaps she thinks she is offering him an act of love—an end to pain.',
        },
        {
          kind: 'commentary',
          id: 'sec2-receive-evil',
          html:
            'Job&apos;s response is one of the great theological statements in Scripture. "Shall we receive good at the hand of God, and shall we not receive evil?" He does not deny that this is evil, that it is suffering, that it is unjust. But he frames it theologically: if God&apos;s goodness is real, then it must be real whether circumstances are pleasant or painful. Faith is not payment for comfort. It is covenantal—a binding with God that holds in blessing and in trial alike. To curse God when afflicted is to say that one&apos;s covenant with Him was always conditional, always mercenary. Job refuses that. He will not make his faith a transaction.',
        },
        {
          kind: 'carry',
          html:
            'The person closest to us sometimes speaks the temptation most deeply. They see our suffering and cannot bear it. They may even think they are showing mercy when they suggest an escape. But the deepest faithfulness sometimes means refusing what looks like mercy—refusing the easy way out, remaining true even when remaining seems impossible. This is not strength of will; it is strength of covenant.',
        },
        {
          kind: 'reflection',
          id: 'sec2-reflection',
          prompt: 'Job&apos;s wife urges him to curse God and end his suffering. Why might she suggest this? And what does it mean that Job&apos;s refusal to curse God happens in response to his wife, the closest person to him?',
        },
      ],
    },

    /* ─── Job 2:11–13 — The Three Friends Arrive and Sit in Silence ────── */
    {
      ref: 'Job 2:11–13',
      title: 'The Three Friends Arrive: Seven Days of Silence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(11, 'Now when Job&apos;s three friends heard of all this evil that was come upon him, every one came from his own place; Eliphaz the Temanite, and Bildad the Shuhite, and Zophar the Naamathite: for they had made an appointment together to come to mourn with him, and to comfort him.'),
            plain(12, 'And when they lifted up their eyes afar off, and knew him not, they lifted up their voice, and wept; and they rent every one his mantle, and sprinkled dust upon their heads toward heaven.'),
            {
              number: 13,
              spans: [
                t('So they '),
                hp('sat down with him upon the ground seven days and seven nights', 'sec3-silence'),
                t(', and '),
                hp('none spake a word unto him', 'sec3-silence'),
                t(': for they saw that his grief was very great.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sec3-arrival',
          html:
            'News of Job&apos;s calamity reaches three men who know him and care for him. They make an appointment—they actually plan to come together, traveling from their own cities to be with him. This is not hasty. This is considered action, born of genuine concern. They have heard of his suffering, and they come to mourn with him and to comfort him. The intention is sound. The knowledge is real. The friendship is active.',
        },
        {
          kind: 'commentary',
          id: 'sec3-recognition',
          html:
            'When they see him from a distance, they do not recognize him. The affliction has so changed his appearance that the men who know him cannot identify him at first sight. This detail speaks to the severity of the boils, the wasting of his body. Job is not just marked by suffering; he is transformed by it. He has become almost unrecognizable.',
        },
        {
          kind: 'commentary',
          id: 'sec3-silence',
          html:
            'And then, for seven days and seven nights, they sit with him. They do not speak. They have seen his grief—it is very great—and they understand that words are not what is needed. This is their finest hour. In these days of silence, they offer what suffering people often need most: witness, presence, solidarity. They sit with him. Not fixing. Not explaining. Not advising. Not even comforting with words. Simply being there. They share his pain by sharing his silence.',
        },
        {
          kind: 'carry',
          html:
            'The friends will eventually speak, and when they do, they will largely miss the point. They will try to explain Job&apos;s suffering in terms of justice and sin. They will offer theories when the situation calls for compassion. But here, in these seven days of silence, they do the one thing that will be truly right: they stand beside the afflicted one without speaking. Sometimes the deepest comfort is not in words but in presence. Sometimes the greatest gift is simply to refuse to leave the one who suffers alone.',
        },
        {
          kind: 'reflection',
          id: 'sec3-reflection',
          prompt: 'Why does the text emphasize that the three friends sat in silence for seven days? What does silence communicate that words cannot?',
        },
      ],
    },

    /* ─── Christ Connection ──────────────────────────────────────────────── */
    {
      ref: '',
      title: '',
      blocks: [
        {
          kind: 'christ',
          id: 'christ-suffering',
          title: 'Christ Connection — The One Who Suffered in Flesh',
          html:
            'Job is struck in his flesh; his body becomes the site of affliction. The apostle Peter speaks of Christ in words that echo Job&apos;s suffering: "Christ also suffered for us in the flesh" (1 Peter 2:21, NKJV). And more fully: "Who his own self bare our sins in his body on the tree" (1 Peter 2:24). Christ did not suffer only in spirit; He suffered in flesh. He was wounded in body. His flesh bore the marks of our affliction. And in that bodily suffering, He entered into solidarity with all who suffer—with Job sitting in ashes, with anyone whose body becomes the place where pain is written.',
        },
        {
          kind: 'commentary',
          id: 'christ-closest',
          html:
            'Job&apos;s wife urges him to curse God. His closest person speaks the temptation to despair. And yet, in the New Testament, we find a man who is not abandoned by the closest ones—Peter, James, John—in his hour of greatest trial. Yet Christ does drink the cup of suffering. He does not curse. And in His refusal, He transforms what suffering means. He shows that covenant with God is stronger than the desire for escape.',
        },
        {
          kind: 'commentary',
          id: 'christ-friend',
          html:
            'The friends sit with Job in silence. And in the New Testament, we meet the Friend who sticks closer than a brother (Proverbs 18:24). Christ does not merely sit beside the afflicted—He enters their affliction, bears their sickness, takes their place. And He does the one thing even the faithful friends cannot ultimately do: He provides a foundation for suffering that is not based on explanation or justice, but on love and presence. "When you pass through the waters, I will be with you; and through the rivers, they shall not overflow you" (Isaiah 43:2, NKJV).',
        },
        {
          kind: 'commentary',
          id: 'christ-ashes',
          html:
            'Job sits in ashes. In the New Testament tradition, there is a deeper symbol: Christ, in His humiliation, sits in the place of death itself. But in that lowest place, He is not abandoned. And His resurrection is the promise to all who suffer: that the ashes are not the end, that there is a reversal coming, that the one who enters the grave does not remain there. This is the pattern: descent into affliction, refusal to curse, presence of the faithful, and ultimately, resurrection.',
        },
      ],
    },
  ],
};
