import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Job 20 — Zophar's Second Speech: The Brevity of Wickedness
 *
 * Zophar is enraged by Job&apos;s words. Job has dared to claim innocence, to
 * challenge the doctrine that the wicked suffer and the righteous prosper.
 * Zophar rises to give the final word on this matter: "Knowest thou not this
 * of old, since man was placed upon earth, that the triumphing of the wicked
 * is short, and the joy of the hypocrite but a moment?" The wicked prosper
 * briefly. Their joy is fleeting. And then comes the judgment. But Zophar
 * speaks as if present circumstances determine ultimate reality—as if what
 * happens in this life is all that matters. He cannot conceive of a vindication
 * beyond death, or of an innocent man whose suffering has cosmic meaning.
 */
export const JOB_20: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 20,

  estimatedMinutes: { beginner: 3, intermediate: 5, deep: 8 },
  intros: [
    'Zophar is angered by Job&apos;s affirmation of a Redeemer and a future vindication. How dare Job speak of resurrection, of standing before God, of seeing God in the flesh? Zophar will hear none of this. He returns to the simple, brutal doctrine: the wicked prosper for a moment, then they are destroyed. Their joy is brief. Their triumph is short. And Zophar is certain that this doctrine applies to Job. Job is wicked. His prosperity will end. His suffering is the proof.',
    'Zophar&apos;s speech is constructed as a meditation on the brevity of wickedness. The wicked man swallows poison. He vomits it back up. His riches turn to ashes in his mouth. His days are few. His nights are terrible. Zophar speaks with the certainty of one who has never suffered, who has never watched the wicked flourish while the righteous languish, who has never had to wrestle with the apparent absence of God&apos;s justice. And yet even as Zophar speaks, he unknowingly points to the truth: there is a day of judgment, but it is not the day he thinks. It is the day when Christ returns, when the works of the flesh are exposed, when the innocent are vindicated and the wicked are judged.',
  ],

  bottomShare: {
    quote:
      '"Knowest thou not this of old, since man was placed upon earth, that the triumphing of the wicked is short, and the joy of the hypocrite but a moment?" Zophar claims the wicked enjoy only brief prosperity—but he does not understand the larger justice.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 20 · Study Guide',
  },

  sections: [
    /* ─── Job 20:1–11 — The Brevity of Wickedness ───────────────────── */
    {
      ref: 'Job 20:1–11',
      title: 'The Short Triumph of the Wicked',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(1, 'Then answered Zophar the Naamathite, and said,'),
            plain(2, 'Therefore do my thoughts cause me to answer, and for this I make haste.'),
            {
              number: 3,
              spans: [
                t('I have heard the check of my reproach, and the '),
                hg('spirit of my understanding causeth me to answer', 'job20-spirit'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Knowest thou not this of old, since man was placed upon earth, '),
                hg('That the triumphing of the wicked is short,', 'job20-triumph-short'),
                t('\n'),
                hg('and the joy of the hypocrite but a moment?', 'job20-joy-moment'),
              ],
            },
            plain(5, 'Though his excellency mount up to the heavens, and his head reach unto the clouds;'),
            plain(6, 'Yet he shall perish for ever like his own dung: they which have seen him shall say, Where is he?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job20-doctrine-spoken',
          html:
            'Zophar speaks with absolute conviction. He has heard Job&apos;s claims of innocence, and they offend him. The truth he proclaims is ancient and eternal: the wicked prosper briefly, then vanish. This doctrine seems self-evident to Zophar. He cannot imagine that it might not apply to Job.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(7, 'He shall fly away as a dream, and shall not be found: yea, he shall be chased away as a vision of the night.'),
            plain(8, 'The eye also which saw him shall see him no more; neither shall his place any more behold him.'),
            plain(9, 'His children shall seek to please the poor; and his hands shall restore their wealth.'),
            plain(10, 'His bones are full of the sin of his youth, which shall lie down with him in the dust.'),
            plain(11, 'Though wickedness be sweet in his mouth, though he hide it under his tongue;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job20-spirit',
          html:
            'Zophar is indignant. He says his thoughts press upon him, forcing him to speak. "The spirit of my understanding causeth me to answer." He believes he speaks with divine inspiration. He believes the truth is so clear, so obvious, that he is compelled to proclaim it. This is the confidence of the dogmatist—the certainty that his interpretation of reality is the only possible one.',
        },
        {
          kind: 'hebrew',
          id: 'job20-triumphal',
          title: 'Rinah — "Joy" (The Exultant Cry)',
          script: 'רִנָּה',
          translit: '<strong>Rinah</strong> · joy, exultation, glad cry; the outward expression of gladness',
          description:
            'The joy of the hypocrite is rinah—an exultant cry, an external expression of gladness. But Zophar insists this joy "is but a moment." It is not deep. It is not lasting. It is the shallow celebration of one who does not understand that judgment is coming. The word carries the sense of noise, of shouting—a joy that is loud but hollow.',
        },
        {
          kind: 'commentary',
          id: 'job20-triumph-short',
          html:
            '"The triumphing of the wicked is short." Zophar states this as an eternal law. It is self-evident. It has always been true. It will always be true. The wicked prosper—but only for a moment. Then comes judgment. This is what Zophar believes, and he cannot imagine any other possibility.',
        },
        {
          kind: 'commentary',
          id: 'job20-joy-moment',
          html:
            'But here Zophar fails to account for the reality he himself witnesses: the wicked often prosper for their entire lives. Their joy is not brief. They die in comfort, surrounded by wealth and pleasure. This is why the Psalms ask: "Wherefore doth the way of the wicked prosper?" Zophar&apos;s doctrine is not always confirmed by observation.',
        },
        {
          kind: 'carry',
          html:
            'Zophar believes in justice in this life. He believes the visible world displays the moral order of the universe. The righteous are blessed. The wicked are punished. But this view cannot account for the suffering of the innocent, or for the prosperity of the dishonest. It requires a larger vision—a vision of cosmic justice in the age to come, not the age that now is.',
        },
        {
          kind: 'reflection',
          id: 'job20-justice-short',
          prompt: 'Do you believe the wicked are punished in this life, or in the life to come? Have you ever seen the wicked prosper while the righteous suffered?',
        },
      ],
    },

    /* ─── Job 20:12–22 — The Poison the Wicked Swallow ───────────────── */
    {
      ref: 'Job 20:12–22',
      title: 'Poison in the Mouth, Fire in the Belly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(12, 'Though wickedness be sweet in his mouth, though he hide it under his tongue;'),
            plain(13, 'Though he spare it, and forsake it not; but keep it still within his mouth:'),
            plain(14, 'Yet his meat in his bowels is turned, it is the gall of asps within him.'),
            plain(15, 'He hath swallowed down riches, and he shall vomit them up again: God shall cast them out of his belly.'),
            {
              number: 16,
              spans: [
                t('He shall suck the poison of asps: the viper&apos;s tongue shall slay him. '),
              ],
            },
            plain(17, 'He shall not see the rivers, the floods, the brooks of honey and butter.'),
            plain(18, 'That which he laboured for shall he restore, and shall not swallow it down: according to his substance shall the restitution be, and he shall not rejoice therein.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job20-restitution',
          html:
            'Zophar moves from describing what the wicked man consumes to what he must give back. The focus shifts from the poison inside him to the consequences he faces. His stolen goods become his judgment—he cannot keep what he seized. The argument turns from internal corruption to external loss.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(19, 'Because he hath oppressed and hath forsaken the poor; because he hath violently taken away an house which he builded not;'),
            plain(20, 'Surely he shall not feel quietness in his belly, and he shall not save of that which he desired.'),
            plain(21, 'There shall none of his meat be left; therefore shall no man look for his goods.'),
            plain(22, 'In the fulness of his sufficiency he shall be in straits: every hand of the wicked shall come upon him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job20-poison',
          html:
            'Zophar describes the wicked man&apos;s fate through the image of poison. The wickedness is sweet to taste—at first. The wicked man enjoys his sin, delights in it. But inside, it turns to gall. His meat becomes poison. His riches become thorns in his throat. The image is vivid: what seemed delicious from the outside becomes deadly once consumed.',
        },
        {
          kind: 'hebrew',
          id: 'job20-ra',
          title: 'Ra — "Evil" (What Corrupts)',
          script: 'רַע',
          translit: '<strong>Ra</strong> · evil, harm, wickedness; that which corrupts and destroys',
          description:
            'The wickedness the man swallows is described as ra—evil that harms him. But Zophar uses a metaphor of eating and digesting. The evil enters the body like food, but unlike true food, it nourishes nothing. It only corrupts from within. The man cannot expel it, no matter how hard he tries.',
        },
        {
          kind: 'carry',
          html:
            'Zophar&apos;s point is that wickedness has internal consequences. A man cannot do evil and remain unchanged. The sin eats away at him from inside. But Zophar mistakes the symptom for the cause. He assumes that if a man is suffering, he must have done evil. He does not consider that a man might suffer unjustly, and that through his suffering he might be refined, not destroyed.',
        },
        {
          kind: 'reflection',
          id: 'job20-poison-mouth',
          prompt: 'Zophar says wickedness is sweet at first but turns to poison inside. Have you experienced a choice that seemed good at first but was destructive? How did you recognize the poison?',
        },
      ],
    },

    /* ─── Job 20:23–29 — The Wicked Cast Down ────────────────────────── */
    {
      ref: 'Job 20:23–29',
      title: 'The Judgment That Comes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(23, 'When he is about to fill his belly, God shall cast the fury of his wrath upon him, and shall rain it upon him while he is eating.'),
            plain(24, 'He shall flee from the iron weapon, and the bow of steel shall strike him through.'),
            {
              number: 25,
              spans: [
                t('It is drawn, and cometh out of the body; yea, the glittering sword cometh out of his gall: '),
                hg('terrors are upon him', 'job20-terrors'),
                t('.'),
              ],
            },
            plain(26, 'All darkness shall be hid in his secret places: a fire not blown shall consume him; it shall go ill with him that is left in his tabernacle.'),
            plain(27, 'The heaven shall reveal his iniquity; and the earth shall rise up against him.'),
            plain(28, 'The increase of his house shall depart, and his goods shall flow away in the day of his wrath.'),
            {
              number: 29,
              spans: [
                t('This is the '),
                hg('portion of a wicked man from God,', 'job20-portion'),
                t('\n'),
                t('and the heritage appointed unto him by God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job20-terrors',
          html:
            'Zophar describes the wicked man pursued by terrors. As he flees the iron weapon, the bow of steel strikes him down. He cannot escape. There is nowhere to hide. The judgment comes from heaven and earth both. The very creation rises up against him.',
        },
        {
          kind: 'commentary',
          id: 'job20-portion',
          html:
            'Zophar ends with a final pronouncement: "This is the portion of a wicked man from God, and the heritage appointed unto him by God." The wicked man&apos;s inheritance is suffering. His portion is destruction. This is what God has appointed for him. Zophar speaks as if he can read God&apos;s will, as if he knows with certainty what God has appointed for the wicked. But he does not see that he himself, in his cruelty to Job, is committing wickedness. He does not see that his own judgment awaits.',
        },
        {
          kind: 'hebrew',
          id: 'job20-nachalah',
          title: 'Nachalah — "Inheritance" (What Is Assigned by Right)',
          script: 'נַחֲלָה',
          translit: '<strong>Nachalah</strong> · inheritance, possession, portion; what is assigned by divine right',
          description:
            'The wicked man&apos;s inheritance is destruction—not because he has chosen it, but because God has appointed it. The word nachalah usually refers to a positive inheritance, to a possession given by right. But here it means the terrible portion that awaits the wicked. The irony is that the righteous also have an inheritance—the promise given to Job, the resurrection promised in his vision.',
        },
        {
          kind: 'christ',
          id: 'job20-christ',
          title: 'Christ Connection — The Day of Judgment Yet to Come',
          html:
            'Zophar speaks of a judgment that comes in this life. The wicked prosper, then are cast down. But the fuller truth is that there is a final judgment, when Christ returns and all deeds are revealed (2 Corinthians 5:10). On that day, the wicked will indeed be judged. The secrets of men&apos;s hearts will be laid bare. But the innocent will be vindicated. Those who suffered unjustly will be exalted. Zophar is right that judgment comes. He is wrong that it comes in the present life. Christ will return as judge, and in that moment, all will be made clear.',
        },
        {
          kind: 'carry',
          html:
            'Zophar&apos;s doctrine is not entirely false. There is a day of judgment. There is a reckoning. But Zophar mistakes present suffering for present judgment. He sees Job suffering, and he concludes Job is wicked. But suffering is not always a sign of guilt. And judgment is not always immediate. The greatest injustices are often set right only by God&apos;s eschatological justice—the justice of the age to come.',
        },
        {
          kind: 'reflection',
          id: 'job20-final-judgment',
          prompt: 'If you trust in a final judgment, how does that change the way you see injustice in the present? Can you wait for God&apos;s vindication?',
        },
      ],
    },
  ],
};
