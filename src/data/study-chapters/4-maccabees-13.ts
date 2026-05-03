import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_13: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 13,

  intros: [
    'As the seven brothers moved toward martyrdom, the author of 4 Maccabees pauses to marvel at their bond. These seven were not isolated sufferers, each facing death alone. They were woven together—by the law they cherished, by the piety of their parents, by the sheer fact of being brothers in flesh and faith. Each brother&apos;s martyrdom strengthened the next. Their love was not sentimental; it was a thing of sinew and sacrifice, forged in shared upbringing and deepened through shared agony.',
    'This chapter invites you into something the world often dismisses: the power of mutual love. Not love that leaves you untested, but love that holds you steady as you pass through fire.',
  ],

  sections: [
    /* ─── Section 1: The Strength They Gave Each Other ───────────────────── */
    {
      ref: '4 Maccabees 13:1–7',
      title: 'One Heart, One Vision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(1, hg('And the brothers, beholding one another', '4m13-behold'), t(' as they suffered, said each to the other: Let us strengthen one another in devotion.')),
            verse(2, t('For it is better that we all perish together than that one of us should betray the law.')),
          ],
        },
        {
          kind: 'commentary',
          id: '4m13-behold',
          html:
            'They "beheld one another." This is not mere looking, but witnessing—truly seeing each other in the furnace. And in that seeing lay their power. No brother suffered in isolation. Each one watched the others. Each one became anchored by the other&apos;s resolve.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(3, t('And so they did not shrink, nor did they turn away their eyes from one another.')),
          ],
        },
        {
          kind: 'commentary',
          id: '4m13-not-shrink',
          html:
            'They kept their eyes open. They did not flinch. The gaze was mutual, constant, reinforcing. When one wavered, another&apos;s steadfastness became his mirror. "If he can endure, so can I."',
        },
        {
          kind: 'greek',
          id: '4m13-philadelphia',
          title: 'Philadelphia — Brotherly Love',
          script: 'φιλαδελφία',
          translit: '<strong>philadelphia</strong> · love between brothers; familial affection rooted in blood and covenant',
          description:
            'Philadelphia is not romantic love (eros) or general human kindness (agape alone), though it partakes of both. It is the fierce, protective love of siblings bound by the same parents, the same roof, the same upbringing. It is love that knows the other completely because you grew up together.',
        },
        {
          kind: 'carry',
          html:
            'When you walk through fire—loss, illness, betrayal, grief—do you have witnesses? Do you keep your eyes open toward them, or do you turn inward? The brothers teach us that mutual beholding itself becomes strength.',
        },
        {
          kind: 'reflection',
          id: '4m13-behold-prompt',
          prompt:
            'Who truly "beholds" you in your suffering? To whom do you open your eyes when you are afraid? What would change if you met their gaze and let their courage stabilize your own?',
        },
      ],
    },

    /* ─── Section 2: Forged in Shared Upbringing ───────────────────────────── */
    {
      ref: '4 Maccabees 13:8–16',
      title: 'The Law as Mother, Piety as Father',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(8, hg('Their mother', '4m13-mother'), t(' had trained them in the law. Their father had been before them as an example of piety.')),
            verse(9, t('They were born into devotion. It was not something they chose; it was the air they breathed as children.')),
          ],
        },
        {
          kind: 'commentary',
          id: '4m13-mother',
          html:
            'The "mother" is the law itself—not abstract legislation but something that nurtured them, that held them, that taught them what was true. A mother shapes not just the intellect but the heart, the habits, the very reflexes of her child. These brothers did not have to think their way through their suffering; the law was already written on their bones.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(10, t('And their parents had loved them with a piety that showed them the face of God.')),
            verse(11, hg('This bond', '4m13-bond-upbringing'), t(' could not be unmade by flame or wheel.')),
          ],
        },
        {
          kind: 'commentary',
          id: '4m13-bond-upbringing',
          html:
            'The real "bond" was this: they had been raised together in the same household, fed the same values, tucked into bed by the same hands, taught to pray by the same mother. When torture tried to tear them apart, the question was not whether they would stand—it was whether they could stand differently than they had been raised to stand. The answer was no. They could not betray what they had been taught in infancy.',
        },
        {
          kind: 'greek',
          id: '4m13-paideia',
          title: 'Paideia — Training; Education; Formation',
          script: 'παιδεία',
          translit: '<strong>paideia</strong> · training; discipline; the shaping of a child into an adult in a particular tradition',
          description:
            'Paideia is not mere schooling. It is the total formation of a person—their habits, their reflexes, their sense of what is honorable and what is shameful. The seven brothers were shaped from childhood in paideia. By the time they faced the wheel, they could do nothing else.',
        },
        {
          kind: 'carry',
          html:
            'What were you taught when you were small? What did your parents or mentors show you about courage, about faithfulness, about what matters more than your own comfort? In your hardest moments, that childhood training rises up and holds you. It shapes what you can and cannot do.',
        },
        {
          kind: 'reflection',
          id: '4m13-paideia-prompt',
          prompt:
            'What paideia were you given—what training, from whom, and about what? Where do you see it holding steady in your life even now, when you wish you could abandon it?',
        },
      ],
    },

    /* ─── Section 3: Sympathy in Suffering ──────────────────────────────────── */
    {
      ref: '4 Maccabees 13:17–26',
      title: 'When One Suffered, All Suffered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(17, hg('Each brother', '4m13-sympathy'), t(' saw the pain of the other as his own pain.')),
            verse(18, t('When one was tortured, the others did not retreat into their own fear. They advanced into his suffering with him.')),
          ],
        },
        {
          kind: 'commentary',
          id: '4m13-sympathy',
          html:
            'The author uses a word that shines with meaning: they had <em>sympatheia</em>—literally, "suffering-together." Not pity from a distance. Not the detached sadness of a bystander. But a feeling-with, a trembling-with, so that one brother&apos;s agony became the agony of all seven.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(19, t('If the first fell to the wheel, the second was not crushed by the sight but fortified by it.')),
            verse(20, hg('For he saw in his brother&apos;s face', '4m13-face'), t(' not defeat but a kind of victory.')),
          ],
        },
        {
          kind: 'commentary',
          id: '4m13-face',
          html:
            'This is the invisible work that love does. The second brother does not see his first brother as a cautionary tale—"look what they did to him, it could happen to me." He sees, instead, a witness going ahead. He reads in that broken body a language he understands: "Hold firm. It is not as dark as it looks. There is a way through."',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(21, t('Thus did each one strengthen the next, and in their suffering they became stronger, not weaker.')),
          ],
        },
        {
          kind: 'greek',
          id: '4m13-sympatheia',
          title: 'Sympatheia — Suffering-Together; Compassion',
          script: 'συμπάθεια',
          translit: '<strong>sympatheia</strong> · suffering with; feeling with another as if their pain were your own; compassion in its deepest sense',
          description:
            'Not a word for mild concern, but for the kind of love that allows another&apos;s pain to pierce you. The brothers did not stand apart from each other&apos;s suffering. They entered into it. And in that entering-in, they found not weakness but a terrible, clarifying strength.',
        },
        {
          kind: 'christ',
          id: '4m13-suffer-with',
          title: 'Christ Connection — If One Member Suffers, All Suffer',
          html:
            'Paul writes to the church: "If one member suffers, all the members suffer with it; or if one member is honored, all the members rejoice with it" (1 Corinthians 12:26). The church is a body. Your suffering is not yours alone. Others are called to sympatheia—to suffer with you, to carry part of the weight. And you, in turn, carry theirs.',
        },
        {
          kind: 'carry',
          html:
            'You do not suffer alone, even if you are standing physically by yourself. Around you stands the communion of those who have pledged themselves to sympatheia—to feel what you feel, to be moved by what moves you, to strengthen you as you strengthen them.',
        },
        {
          kind: 'reflection',
          id: '4m13-suffer-prompt',
          prompt:
            'When you suffer, do you let others truly suffer with you? Or do you try to shield them? What would change if you trusted them with your pain and let it draw you closer?',
        },
      ],
    },

    /* ─── Section 4: The Marvel of Their Unity ────────────────────────────── */
    {
      ref: '4 Maccabees 13:27–32',
      title: 'A Living Mystery',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(27, hg('The author beholds this scene', '4m13-marvel'), t(' and marvels: How is it that they do not cry out against one another?')),
            verse(28, t('How is it that their bond grows stronger in the furnace, not weaker?')),
          ],
        },
        {
          kind: 'commentary',
          id: '4m13-marvel',
          html:
            'The author steps back in wonder. This defies the logic of pain. Normally, suffering drives people into themselves. It makes them selfish, bitter, suspicious. Yet here, the opposite occurs. The more they suffer, the more they cleave to one another. The fire does not burn their brotherhood; it refines it. It makes it into something almost celestial, almost impossible to see without trembling.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(29, hg('Truly', '4m13-homonoia'), t(', their hearts were one. Their minds were one. Their will was one.')),
          ],
        },
        {
          kind: 'commentary',
          id: '4m13-homonoia',
          html:
            'The author does not use the word "unity" casually. He reaches for a term that means something more: a oneness of mind and heart so complete that they are, in a real sense, a single person distributed across seven bodies. What one decides, all decide. What one endures, all endure. There is no dissent because there is no "self" to protect—only the common good of the seven.',
        },
        {
          kind: 'greek',
          id: '4m13-homonoia-word',
          title: 'Homonoia — Unity of Mind and Heart',
          script: 'ὁμόνοια',
          translit: '<strong>homonoia</strong> · agreement; unity of mind; hearts beating to the same rhythm',
          description:
            'Not enforced conformity. Not suppressed individuality. But a genuine agreement, a genuine alignment of purpose and heart, so that the seven become, in the most important way, one.',
        },
        {
          kind: 'christ',
          id: '4m13-one-body',
          title: 'Christ Connection — Many Members, One Body',
          html:
            'Jesus prayed for the church: "That they all may be one, as Thou, Father, art in me, and I in Thee; that they also may be one in us" (John 17:20, 21). This prayer does not erase difference or individuality. Rather, it places difference within a larger oneness. The brothers show us what this looks like when it is lived out fully: true unity in the face of dissolution, true fellowship in the face of death.',
        },
        {
          kind: 'carry',
          html:
            'Where do you belong to something larger than yourself? A family, a church, a community bound by love? In that belonging, you are not losing yourself—you are finding yourself. And in moments of trial, that belonging becomes your foundation.',
        },
        {
          kind: 'reflection',
          id: '4m13-unity-prompt',
          prompt:
            'What does it mean to be truly "one" with others while remaining yourself? Where have you experienced homonoia—that alignment of heart and will with another person or group?',
        },
      ],
    },

    /* ─── Section 5: The Final Witness ───────────────────────────────────── */
    {
      ref: '4 Maccabees 13:33–37',
      title: 'Love That Outlasts Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(33, hg('The brothers', '4m13-final'), t(' passed through the tortures and the sword, each one after the other, yet they never stood alone.')),
            verse(34, t('For love had bound them in a covenant that death could not break.')),
          ],
        },
        {
          kind: 'commentary',
          id: '4m13-final',
          html:
            'This is the heart of the passage. The author watches as one brother dies and is replaced by another, and then another. The wheel turns. The fire burns. Yet the bond does not fray. Instead, it deepens. Each death is not a separation but a transition—a brother passing from one side of the veil to the other, still present, still part of the seven.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(35, hg('Love of this kind', '4m13-love-kind'), t(' is stronger than death. Stronger than pain. Stronger than any force the world can bring to bear.')),
          ],
        },
        {
          kind: 'commentary',
          id: '4m13-love-kind',
          html:
            'The author is not speaking of sentiment. He is speaking of a love that has learned to endure—that has chosen, again and again, to hold firm to those you are bound to, no matter the cost. This is love that has been tested and has not failed. This is love that has looked into the face of annihilation and said: I will not let you go.',
        },
        {
          kind: 'christ',
          id: '4m13-love-outlasts',
          title: 'Christ Connection — Love Conquers Death',
          html:
            'Christ loved His disciples with a philadelphia so complete that He laid down His life for them. "Greater love has no one than this, that he lay down his life for his friends" (John 15:13). And He told them: "Love one another as I have loved you" (John 13:34). The brothers of 4 Maccabees show us what that love looks like when it is lived out in the face of the executioner&apos;s wheel.',
        },
        {
          kind: 'carry',
          html:
            'What love in your life has proven itself strong enough to pass through suffering? A marriage that has endured hardship? A friendship that has held firm? A family that has stood together? That love is not accident. It is not luck. It is a daily choice to bind yourself to others and to refuse, even in pain, to let them go.',
        },
        {
          kind: 'reflection',
          id: '4m13-outlast-prompt',
          prompt:
            'To what love have you committed yourself, knowing it might cost you? What bond in your life is strong enough to outlast suffering, loss, or change?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'And the brothers, beholding one another as they suffered, said each to the other: Let us strengthen one another in devotion. Their mother had trained them in the law. Their father had been before them as an example of piety. Each brother saw the pain of the other as his own pain.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 13 · Study Guide',
  },
};
