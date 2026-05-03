import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 3 — Job Breaks His Silence and Curses the Day of His Birth
 *
 * After seven days and nights of sitting in silence with his three friends,
 * Job finally opens his mouth. But instead of accepting their comfort, he curses
 * the day of his birth: "Let the day perish wherein I was born." He did not curse
 * God — a critical distinction. His lament is profound, moving, and honest. He
 * wishes he had died at birth, that he had never been born, that darkness would
 * cover his life. "Why is light given to the bitter in soul, who long for death,
 * but it cometh not?" The chapter shows us that lament is not sin. It is the
 * honest cry of a sufferer whose pain is so deep that existence itself seems a curse.
 */
export const JOB_3: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 3,

  estimatedMinutes: { beginner: 4, intermediate: 9, deep: 12 },
  intros: [
    'Job has endured seven days of silence. His three friends — Eliphaz, Bildad, and Zophar — have come to comfort him, and for seven days and nights they simply sit with him, in the darkness of his loss, saying nothing. It is a profound act of presence. And then Job breaks the silence. But the words that come are not words of resignation or acceptance. They are words of raw, anguished lament.',
    'Job curses the day of his birth. He did not curse God — a distinction that will become crucial as the book unfolds. He curses the light that shines on his misery, wishes he had died in the womb, begs for darkness to cover him. His suffering is so acute that he questions the value of his own existence. He does not demand an answer from God. He demands an explanation for why he was born into a world of such pain.',
    'In this chapter, we encounter a truth that many traditions have forgotten: that lament is not sin, that honest grief need not be dressed in platitudes, that a sufferer may ask the hard questions without losing faith. Job&apos;s curse is a prayer — painful, raw, but a prayer nonetheless.',
  ],

  bottomShare: {
    label: 'Share Job 3',
    quote:
      'Job curses the day of his birth, not God. His lament teaches us that honest grief, even desperate questioning, does not separate us from God. Sometimes the cry of pain is the truest prayer we can offer.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 3 · Study Guide',
  },

  sections: [
    /* ─── Job 3:1–10 — Job Curses the Day of His Birth ──────────────────── */
    {
      ref: 'Job 3:1–10',
      title: 'Let the Day Perish',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('After this opened Job his mouth, and '),
                hg('cursed his day', 'cursed-day'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Job spake, and said,'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Let the '),
                hp('day perish', 'day-perish'),
                t(' wherein I was born, and the night in which it was said, There is a man child conceived.'),
              ],
            },
            plain(4, 'Let that day be darkness; let not God regard it from above, neither let the light shine upon it.'),
            plain(5, 'Let darkness and the shadow of death stain it; let a cloud dwell upon it; let the blackness of the day terrify it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job3-lament-turn',
          html:
            'Job moves from lamenting his day to questioning why he was born at all. The focus shifts from curse to deep, existential pain.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 6,
              spans: [
                t('As for that night, let '),
                hy('darkness seize upon it', 'darkness-night'),
                t('; let it not be joined unto the days of the year, let it not come into the number of the months.'),
              ],
            },
            plain(7, 'Lo, let that night be solitary, let no joyful voice come therein.'),
            {
              number: 8,
              spans: [
                t('Let them curse it that '),
                hg('curse the day', 'curse-day-magicians'),
                t(', who are ready to raise up their mourning.'),
              ],
            },
            plain(9, 'Let the stars of the twilight thereof be dark; let it look for light, but have none; neither let it see the dawning of the day:'),
            {
              number: 10,
              spans: [
                t('Because it shut not up the doors of my mother\'s womb, nor hid sorrow from mine eyes.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cursed-day',
          html:
            'After seven days of silence, Job speaks. But he does not speak words of consolation. He opens his mouth to curse the day of his birth. This is not blasphemy. Job is not cursing God. He is cursing the day — the moment when his existence began, the light that illuminated his life. His words are the cry of one whose pain is so deep that he questions the value of ever having been born.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-qala',
          title: 'Qala — "To Curse" or "To Be Light"',
          script: 'קָלַל',
          translit: '<strong>Qala</strong> · to curse; to revile; also (as opposite) to be light, trivial',
          description:
            'The Hebrew qala can mean both "to curse" and paradoxically "to be light" or "of little account." When Job curses the day, he is making it of no account, wishing it had never been. His curse is an attempt to unmake that day, to sever it from existence. Yet the word also carries the irony of making the day light — visible, remembered — by cursing it.',
        },
        {
          kind: 'commentary',
          id: 'day-perish',
          html:
            'The opening line of Job&apos;s lament: "Let the day perish wherein I was born." This is not casual complaint. This is a man saying that the day of his entry into the world was itself a catastrophe. Not that he was a burden, but that the day that bore him should never have been. He wishes to unmake his own nativity.',
        },
        {
          kind: 'commentary',
          id: 'darkness-night',
          html:
            'Job calls for darkness to seize upon the night of his conception. "Let it not be joined unto the days of the year, let it not come into the number of the months." He wishes his birth date expunged from the calendar, as if that night could be removed from time itself. He calls for it to be solitary, joyless, dark, forgotten. The intensity of his wish to have never existed is overwhelming.',
        },
        {
          kind: 'commentary',
          id: 'curse-day-magicians',
          html:
            'Job references those "who are ready to raise up their mourning" — perhaps professional mourners who curse days of ill-omen, or sorcerers who attempt to unmake unlucky days through ritual. He invokes their powers, wishing that his birth day might be treated as such an unlucky thing that even these specialists would curse it.',
        },
        {
          kind: 'carry',
          html:
            'When we are in deep pain, we sometimes wish to have never existed. This is not noble, not something to celebrate — but it is human. And before we speak harshly to someone expressing such a wish, we might ask: what kind of pain leads to the desire to unmake one&apos;s own existence? What sorrow is so complete that daylight itself seems like a curse? Job does not hide his pain. He speaks it aloud. And in doing so, he opens a door for us to speak ours.',
        },
        {
          kind: 'reflection',
          id: 'dark-thoughts',
          prompt: 'Have you ever felt that your own existence was more of a burden than a gift? What would it have looked like for someone to sit with you in that feeling, rather than argue you out of it?',
        },
      ],
    },

    /* ─── Job 3:11–19 — Why Did I Not Die at Birth? ───────────────────── */
    {
      ref: 'Job 3:11–19',
      title: 'Why Did I Not Die?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 11,
              spans: [
                t('Why died I not from the womb? why did I not give up the ghost when I came out of the belly?'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Why did the '),
                hg('knees prevent me', 'knees-receive'),
                t('? or why the breasts that I should suck?'),
              ],
            },
            {
              number: 13,
              spans: [
                t('For now should I have lain still and been quiet, I should have slept: then had I been at rest,'),
              ],
            },
            {
              number: 14,
              spans: [
                t('With kings and counsellors of the earth, which built desolate places for themselves;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job3-endless-night',
          html:
            'Job transitions from describing the darkness he wishes for to his anguish at the light that continues to shine on his suffering.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 15,
              spans: [
                t('Or with princes that had gold, who filled their houses with silver:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Or as an hidden untimely birth I had not been; as infants that never '),
                hy('saw light', 'see-light'),
                t('.'),
              ],
            },
            plain(17, 'There the wicked cease from troubling; and there the weary be at rest.'),
            plain(18, 'There the prisoners are at ease together; they hear not the voice of the oppressor.'),
            {
              number: 19,
              spans: [
                t('The small and great are there; and the '),
                hp('servant is free from his master', 'servant-free'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'knees-receive',
          html:
            'Job asks rhetorical questions of increasing intensity. "Why did the knees prevent me?" He refers to the moment of birth, when a newborn is placed on the father&apos;s knees as a sign of acceptance into the family (Genesis 30:3). Why was he accepted? Why was he not left to die at birth, as was possible in the ancient world? Why did his mother nurse him rather than abandon him?',
        },
        {
          kind: 'commentary',
          id: 'rest-death',
          html:
            'Job begins to speak of death — "Sheol," the grave, the place of rest beneath the earth — in paradoxically appealing terms. "Now should I have lain still and been quiet, I should have slept: then had I been at rest." In death, all pain ceases. All striving ends. There is a terrible logic in Job&apos;s grief: if life is only pain, then death is rest. It is peace that cannot be disturbed.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-sheol',
          title: 'Sheol — "The Grave" or "The Place Below"',
          script: 'שְׁאוֹל',
          translit: '<strong>Sheol</strong> · the grave; the underworld; the place where all the dead gather',
          description:
            'Sheol in Old Testament thought is not hell, not punishment, but the grave — the common destination of all humans. It is often described as a place of darkness and silence, neither rewarded nor punished specifically, but simply the end of earthly life. Job&apos;s reference to Sheol is not to damnation but to rest.',
        },
        {
          kind: 'commentary',
          id: 'see-light',
          html:
            'Job speaks of infants who "never saw light" — children stillborn or dead at birth, who never experienced consciousness, who never knew pain because they never knew life. He wishes he had been like them: "as an hidden untimely birth I had not been." To have died before knowing suffering is, in his calculus, to have escaped a curse.',
        },
        {
          kind: 'commentary',
          id: 'servant-free',
          html:
            'Then Job adds a stunning reversal: in death, the servant is free from his master. The slave has no more oppressor. The wicked have stopped troubling. The weary are at rest. Even the prisoner and the oppressed find equality in death — "the small and great are there." Death, in this moment, seems to Job like liberation from all inequality, all injustice, all pain.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-abheduth',
          title: 'Abheduth — "Servant" or "Slave"',
          script: 'עֶבֶד',
          translit: '<strong>Abheduth</strong> · servant; slave; one bound to serve',
          description:
            'The Hebrew ebed encompasses both the concept of service and of bondage. A servant can be free or enslaved, willing or compelled. In Job&apos;s vision of Sheol, all earthly distinctions of master and slave dissolve. All are servants of death, but death serves no one — all are equal.',
        },
        {
          kind: 'carry',
          html:
            'Job is teaching us something dark but true: suffering can make the grave seem preferable to life. When pain is unrelenting, death can appear as mercy. We do not offer comfort to such a person by telling them "death is worse." We offer it by asking: What would it take for you to choose life? What small mercy might make continued existence bearable? Job needs not correction but presence.',
        },
        {
          kind: 'reflection',
          id: 'unbearable-pain',
          prompt: 'Job finds death more appealing than life because of his suffering. When have you encountered pain so deep that non-existence seemed preferable? What small thing, if any, made you change your mind?',
        },
      ],
    },

    /* ─── Job 3:20–26 — "Why Is Light Given to Him That Is in Misery?" ──── */
    {
      ref: 'Job 3:20–26',
      title: 'Why Is Light Given to the Bitter?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 20,
              spans: [
                t('Wherefore is light given to a man whose way is hid, whom God hath hedged in?'),
              ],
            },
            {
              number: 21,
              spans: [
                t('For the thing which I '),
                hp('greatly feared', 'greatly-feared'),
                t(' is come upon me, and that which I was afraid of is come unto me.'),
              ],
            },
            plain(22, 'I am not at ease, neither am I quiet, and rest cometh not: but trouble cometh.'),
            {
              number: 23,
              spans: [
                t('Wherefore is light given to the bitter in soul, and life unto the'),
              ],
            },
            {
              number: 24,
              spans: [
                t('man whom God hath hedged in? For my '),
                hy('sighing cometh before', 'sighing-comes'),
                t(' I eat, and my roarings are poured out like the waters.'),
              ],
            },
            plain(25, 'For the thing which I greatly feared is come upon me, and that which I was afraid of is come unto me.'),
            plain(26, 'I was not in safety, neither had I rest, neither was I quiet; yet trouble came.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'greatly-feared',
          html:
            'Job reveals something new: what he is experiencing is not random. He has feared this — this specific catastrophe. This is "the thing which I greatly feared." His nightmares have become reality. His worst imaginings have walked into his tent and destroyed everything. The sense of being hunted by fate, of having his own dread materialized, is profound.',
        },
        {
          kind: 'commentary',
          id: 'hedged-in',
          html:
            'Job uses a striking image: "God hath hedged in" his way. A hedge is something that grows, that presses in, that constrains movement. It is not a wall one can see and climb; it is a living barrier that blocks the path. Job feels trapped, surrounded, unable to escape. God, in his experience at this moment, is the one who has penned him in.',
        },
        {
          kind: 'commentary',
          id: 'sighing-comes',
          html:
            'Then the culminating question: "Wherefore is light given to the bitter in soul?" Why does God permit the sufferer to continue living? Why not mercy through death? And Job&apos;s answer is his own suffering: his sighs come before his food, his roarings (cries of anguish) pour out like water. He cannot eat. He cannot rest. He exists in a state of constant torment. The light reveals only more of what he wishes to escape.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-taanug',
          title: 'Taanug — "Bitter" or "Grieving"',
          script: 'תָּאֻג',
          translit: '<strong>Taanug</strong> · bitterness; grief; sorrow; spiritual anguish',
          description:
            'The Hebrew word for "bitter in soul" speaks not merely of sadness but of a kind of spiritual anguish, a bitterness that permeates the whole person. To be "bitter in soul" is to taste only gall, to find no sweetness anywhere.',
        },
        {
          kind: 'christ',
          id: 'christ-afraid',
          title: 'Christ Connection — The Feared Thing Come Upon Him',
          html:
            'Job says, "The thing which I greatly feared is come upon me." Christ, in His final hours in Gethsemane, also faces the thing He fears: "O my Father, if it be possible, let this cup pass from me" (Matthew 26:39). Like Job, Christ faces His deepest dread. But where Job curses the day, Christ yields to the cup, though it remains bitter. And like Job, Christ will know what it is to cry out in anguish, to pour out roarings like water. "My God, my God, why hast thou forsaken me?" (Psalm 22:1, Matthew 27:46). Christ does not hide His pain. He speaks it aloud, and in that cry, He shows us that even the Suffering Servant knew what it was to question, to fear, to grieve.',
        },
        {
          kind: 'carry',
          html:
            'Job teaches us that fear, once realized, does not diminish by being avoided. The thing he dreaded has come, and now he must live in its shadow. We think that if we do not speak our fears, they will not come true. But Job shows us the truth: sometimes the feared thing comes anyway. And when it does, we are left to ask the hard questions: Why does God allow this? Why am I still alive? What is the purpose of continued existence in the face of such pain? These questions are not rebellion. They are the honest cry of a person who has lost everything.',
        },
        {
          kind: 'reflection',
          id: 'feared-realized',
          prompt: 'What is the thing you greatly fear most? If it came upon you, would you want to survive it, or would you prefer not to? What would make survival meaningful?',
        },
      ],
    },
  ],
};
