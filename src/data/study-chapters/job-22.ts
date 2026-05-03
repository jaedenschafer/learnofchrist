import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Job 22 — Eliphaz&apos;s Third Speech: The Cruelest Accusations
 *
 * Eliphaz returns with vicious specificity. He accuses Job of concrete sins:
 * oppressing the widows, refusing bread to the hungry, withholding water from
 * the thirsty, robbing the fatherless. These are invented charges—we know from
 * the prologue that Job is righteous. But Eliphaz speaks with certainty, as if
 * he knows Job&apos;s secret sins. He offers a way out: "Acquaint now thyself with
 * him, and be at peace." Submit to God&apos;s doctrine, cease your rebellion, and
 * peace will return. But Eliphaz does not understand that peace is not earned
 * by doctrinal submission. It is a gift—offered freely by God to those who come
 * to Him not in self-righteousness, but in humility and need.',
 */
export const JOB_22: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 22,

  estimatedMinutes: { beginner: 3, intermediate: 6, deep: 8 },
  intros: [
    'Eliphaz returns to the attack, and this time his words are the most cruel of all. He does not merely assert that Job has erred. He accuses Job of specific sins. "For thou hast exacted a pledge from thy brother for nought," he says. "Thou hast stripped the naked of their clothing, and thou hast witholden drink from the weary to drink." These are not abstract accusations. These are vivid, detailed charges of specific cruelty. Eliphaz speaks as if he has seen Job commit these acts, as if he knows the secrets of Job&apos;s heart. But we, the readers, know this is false. Job is innocent. Eliphaz is inventing charges.',
    'And yet there is something almost insightful in Eliphaz&apos;s words. He is not entirely wrong about what sin looks like. The sins he describes—oppression of the poor, cruelty to the defenseless, pride that blocks out God—these are real sins, grave sins. But Eliphaz makes the fatal error of applying them to Job without evidence. He assumes that because the doctrine is true (oppression and cruelty do separate a person from God), it must be true that Job is guilty of them. He makes the pattern into a universal law, and then uses the law to condemn an innocent man. This is the sin of the righteous against the unrighteous: to assume guilt and demand repentance from one who has not transgressed.',
  ],

  bottomShare: {
    quote:
      '"Acquaint now thyself with him, and be at peace: thereby good shall come unto thee." Eliphaz offers reconciliation—but only if Job admits to sins he did not commit. This is the cruelty of the false accuser.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 22 · Study Guide',
  },

  sections: [
    /* ─── Job 22:1–11 — The False Accusations ──────────────────────── */
    {
      ref: 'Job 22:1–11',
      title: 'Invented Crimes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(1, 'Then answered Eliphaz the Temanite, and said,'),
            plain(2, 'Can a man be profitable unto God, as he that is wise may be profitable unto himself?'),
            plain(3, 'Is it any pleasure to the Almighty, that thou art righteous? or is it gain to him, that thou makest thy ways perfect?'),
            {
              number: 4,
              spans: [
                t('Will he reprove thee for fear of thee? will he enter with thee into judgment? '),
              ],
            },
            plain(5, 'Is not thy wickedness great? and thine iniquities infinite?'),
            {
              number: 6,
              spans: [
                t('For thou hast taken a pledge from thy brother for nought, and '),
                hg('stripped the naked of their clothing', 'job22-naked'),
                t('. '),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job22-accuse-crimes',
          html:
            'Eliphaz begins not with abstract theology but with concrete accusations. He paints Job as a man who steals pledges, who robs the poor of their clothing, who deprives the hungry and thirsty of relief. These are not theological claims. These are criminal charges. And they are completely invented.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(7, 'Thou hast not given water to the weary to drink, and thou hast withholden bread from the hungry.'),
            {
              number: 8,
              spans: [
                t('But as for the mighty man, he had the earth; and the honourable man dwelt in it. '),
              ],
            },
            plain(9, 'Thou hast sent widows away empty, and the arms of the fatherless have been broken.'),
            plain(10, 'Therefore snares are round about thee, and sudden fear troubleth thee;'),
            plain(11, 'Or darkness, that thou canst not see; and abundance of waters cover thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job22-naked',
          html:
            'Eliphaz accuses Job of stripping the naked of their clothing. This is a vivid, specific charge. It paints a picture of cruelty—of a man so callous that he robs the defenseless of the very garments on their backs. But the charge is invented. We know from the prologue that Job is righteous. But Eliphaz speaks with such certainty, such detail, that he almost makes the accusation believable. This is how false accusation works: it finds a real sin (robbery of the poor), and then imputes it to an innocent person.',
        },
        {
          kind: 'hebrew',
          id: 'job22-arumim',
          title: 'Arumim — "Naked" (Without Covering or Help)',
          script: 'עֲרוּמִים',
          translit: '<strong>Arumim</strong> · naked, defenseless, unprotected; those who lack covering',
          description:
            'The arumim—the naked, the defenseless—are the vulnerable ones who need protection. To strip them of their clothing is not just to rob them, but to humiliate them, to render them utterly defenseless. Eliphaz uses the word to evoke pity, to make the crime seem more heinous. And yet Job has done no such thing. Job is known for his mercy toward the poor.',
        },
        {
          kind: 'carry',
          html:
            'Eliphaz accuses Job of specific cruelties to the poor and defenseless. But the weight of these accusations falls on ears that know them to be false. This is Job&apos;s particular agony: to be accused of crimes he did not commit, to be charged with cruelty he did not practice, to have his character assassinated by those who claim to be his friends.',
        },
        {
          kind: 'reflection',
          id: 'job22-false-accusation',
          prompt: 'Have you been accused of something you did not do? How did it feel to have your character attacked with false evidence? Did you try to defend yourself, or did you accept the judgment?',
        },
      ],
    },

    /* ─── Job 22:12–20 — God Is High Above ───────────────────────────── */
    {
      ref: 'Job 22:12–20',
      title: 'A Theology of Distance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(12, 'Is not God in the height of heaven? and behold the height of the stars, how high they are!'),
            {
              number: 13,
              spans: [
                t('And thou sayest, How doth God know? can he judge through the dark cloud? '),
              ],
            },
            plain(14, 'Thick clouds are a covering to him, that he seeth not; and he walketh in the circuit of heaven.'),
            plain(15, 'Hast thou marked the old way which wicked men have trodden?'),
            plain(16, 'Which were cut down out of time, whose foundation was overflown with a flood;'),
            plain(17, 'Which said unto God, Depart from us: and what can the Almighty do for them?'),
            plain(18, 'Yet he filled their houses with good: but the counsel of the wicked is far from me.'),
            plain(19, 'The righteous see it, and are glad: and the innocent laugh them to scorn.'),
            plain(20, 'Whereas our substance is not cut down, but the remnant of them the fire consumeth.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Eliphaz attempts a different argument. He says that God is so high, so distant, so hidden by clouds, that He cannot possibly see what happens on earth. "Hast thou thought that God knoweth? can he judge through the dark cloud?" But then Eliphaz immediately contradicts himself. He observes that the wicked who said "Depart from us" were indeed cut down. So God does see. God does judge. Eliphaz&apos;s theology is incoherent.',
        },
        {
          kind: 'hebrew',
          id: 'job22-araph',
          title: 'Araph — "To Perish" (Sudden Destruction)',
          script: 'אָרַף',
          translit: '<strong>Araph</strong> · to perish, be destroyed, cut off; sudden end',
          description:
            'Eliphaz describes the wicked as being "cut down" (araph)—destroyed suddenly, removed from the face of the earth. But he himself acknowledges that often they are not. They fill their houses with good. They live long lives. Eliphaz&apos;s doctrine does not match his own observations.',
        },
        {
          kind: 'carry',
          html:
            'Eliphaz is caught between two truths. He believes God judges the wicked swiftly. But he has also observed that the wicked often prosper. He resolves this tension by assuming that God must know about Job&apos;s secret sins, and that God must be punishing Job for them. But this assumption is false. God&apos;s justice is not always visible. Some suffering is a test, not a verdict.',
        },
        {
          kind: 'reflection',
          id: 'job22-distance',
          prompt: 'Does God seem distant to you, hidden by clouds? Or do you believe God is near, watching, judging? How does your belief affect your behavior?',
        },
      ],
    },

    /* ─── Job 22:21–30 — "Acquaint Thyself with God" ──────────────────── */
    {
      ref: 'Job 22:21–30',
      title: 'Reconciliation on False Terms',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 21,
              spans: [
                t('Acquaint now thyself with him, and '),
                hp('be at peace', 'job22-peace'),
                t(': thereby good shall come unto thee. '),
              ],
            },
            {
              number: 22,
              spans: [
                t('Receive, I pray thee, the law from his mouth, and lay up his words in thine heart. '),
              ],
            },
            {
              number: 23,
              spans: [
                t('If thou return to the Almighty, thou shalt be built up, thou shalt put away iniquity far from thy tabernacles. '),
              ],
            },
            plain(24, 'Then shalt thou lay up gold as dust, and the gold of Ophir as the stones of the brooks;'),
            plain(25, 'Yea, the Almighty shall be thy defence, and thou shalt have plenty of silver.'),
            {
              number: 26,
              spans: [
                t('For then shalt thou have thy delight in the Almighty, and shalt '),
                hp('lift up thy face unto God', 'job22-lift'),
                t('. '),
              ],
            },
            plain(27, 'Thou shalt make thy prayer unto him, and he shall hear thee, and thou shalt pay thy vows.'),
            plain(28, 'Thou shalt also decree a thing, and it shall be established unto thee: and the light shall shine upon thy ways.'),
            plain(29, 'When men are cast down, then thou shalt say, There is lifting up; and he shall save the humble person.'),
            plain(30, 'He shall deliver the island of the innocent: and it is delivered by the pureness of thine hands.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job22-peace',
          html:
            '"Acquaint now thyself with him, and be at peace." This is Eliphaz&apos;s offer of reconciliation. Submit to God. Acknowledge your sins. Repent of your rebellion. And then peace will come. Good will be restored to you. Your fortunes will be rebuilt. But the condition is that Job must confess to sins he did not commit. He must accept Eliphaz&apos;s false accusations as true, and repent of things he never did.',
        },
        {
          kind: 'hebrew',
          id: 'job22-shalom',
          title: 'Shalom — "Peace" (Wholeness and Restoration)',
          script: 'שָׁלוֹם',
          translit: '<strong>Shalom</strong> · peace, wholeness, completeness, restoration',
          description:
            'Shalom is not merely the absence of conflict. It is wholeness, completeness, the restoration of what was broken. Eliphaz offers Job shalom—the promise that if he will submit and repent, his life will be made whole again. But this offer comes at a terrible cost: Job&apos;s integrity. He must surrender his innocence to buy back his peace.',
        },
        {
          kind: 'commentary',
          id: 'job22-lift',
          html:
            '"And thou shalt lift up thy face unto God." To lift one&apos;s face toward God is to have confidence, to have the boldness to stand before the holy. But how can Job lift his face if he accepts Eliphaz&apos;s accusations? He would be standing before God with lies on his lips, with false confession in his mouth. His face would not be lifted. It would be bowed in shame and falsehood.',
        },
        {
          kind: 'christ',
          id: 'job22-christ',
          title: 'Christ Connection — Peace Not Earned, but Given',
          html:
            'Eliphaz offers peace on the condition of repentance from false sins. But Christ offers peace freely: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you" (John 14:27). Christ does not demand false confession. He does not require that the innocent accuse themselves. Instead, He offers Himself as the sacrifice for sin—real sin—and offers to those who come to Him not a peace earned by submission to false doctrine, but a peace that passes understanding, the peace of the one who is known and loved as he truly is. Job&apos;s path is to refuse Eliphaz&apos;s offer of false peace, to maintain his integrity, and to wait for the justice that comes from God alone, not from men.',
        },
        {
          kind: 'carry',
          html:
            'Eliphaz&apos;s final offer is seductive. Accept the doctrine. Confess the sins. And all will be restored. But it requires Job to surrender his integrity, to admit to things he did not do, to participate in a lie. True peace cannot be built on lies. True reconciliation cannot come through false confession. Job must refuse, even if it means suffering continues. His integrity is worth more than comfort purchased at such a price.',
        },
        {
          kind: 'reflection',
          id: 'job22-peace-price',
          prompt: 'What would you sacrifice for peace? Would you admit to sins you did not commit to restore a broken relationship? Or is your integrity more important than reconciliation?',
        },
      ],
    },
  ],
};
