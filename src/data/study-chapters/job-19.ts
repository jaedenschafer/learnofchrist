import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Job 19 — Job: "I Know That My Redeemer Liveth"
 *
 * Job responds with a lament of cosmic dimensions. He is fenced in by God.
 * All his friends have turned against him. His family abhors him. His servants
 * do not answer. Even his wife finds him repulsive. "All my inward friends
 * abhorred me." But then, in the midst of this devastation, comes one of the
 * greatest verses in Scripture: "FOR I KNOW THAT MY REDEEMER LIVETH, AND THAT
 * HE SHALL STAND AT THE LATTER DAY UPON THE EARTH: AND THOUGH AFTER MY SKIN
 * WORMS DESTROY THIS BODY, YET IN MY FLESH SHALL I SEE GOD." Job speaks of
 * resurrection, of redemption, of a kinsman-redeemer who will vindicate him.
 * He does not yet know that he speaks of Christ.
 */
export const JOB_19: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 19,

  estimatedMinutes: { beginner: 4, intermediate: 8, deep: 12 },
  intros: [
    'Job has heard enough. Bildad&apos;s words have struck him like hammers, and Job rises to speak not with argument but with raw anguish. He does not debate theology. He simply reports what has happened to him. "He hath fenced up my way that I cannot pass." God Himself has become his enemy. The path forward is closed. Retreat is impossible. Job is trapped in a dark place with no exit.',
    'But as Job speaks, something shifts. From the depths of despair, a vision breaks through. A vision not of his own vindication in this life, but of something far greater. Not of his name being remembered on earth, but of standing before God Himself in resurrection. Job cries out with a hope that transcends his circumstances, a hope that speaks of a redeemer, a goel, a kinsman-redeemer who will stand at the latter day. In this single verse, Job reaches forward across time and touches the heart of the Gospel itself—the promise that the innocent will be vindicated not in this world, but in the world to come, when Christ rises and brings all His people with Him.',
  ],

  bottomShare: {
    quote:
      '"For I know that my Redeemer liveth, and that he shall stand at the latter day upon the earth: and though after my skin worms destroy this body, yet in my flesh shall I see God." Job speaks of resurrection and redemption in the midst of his suffering.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 19 · Study Guide',
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
  ],

  sections: [
    /* ─── Job 19:1–12 — God as Enemy ──────────────────────────────────── */
    {
      ref: 'Job 19:1–12',
      title: 'Fenced in by God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(1, 'Then Job answered and said,'),
            plain(2, 'How long will ye vex my soul, and break me in pieces with words?'),
            plain(3, 'These ten times have ye reproached me: ye are not ashamed that ye make yourselves strange to me.'),
            {
              number: 4,
              spans: [
                t('And be it indeed that I have erred, '),
                hg('my error remaineth with myself', 'job19-error'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('If ye will magnify yourselves against me, and '),
                hg('plead against me my reproach', 'job19-plead'),
                t(': '),
              ],
            },
            plain(6, 'Know now that God hath overthrown me, and hath compassed me with his net.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job19-grief-deepens',
          html:
            'The complaint sharpens — God Himself has surrounded him, fenced him in, taken his honor away. Job is no longer asking why his friends have failed him; he is asking why God has not. [res:british-museum-ludlul]',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 7,
              spans: [
                t('Behold, '),
                hg('I cry out of wrong, but I am not heard', 'job19-cry'),
                t(': I cry aloud, but there is no judgment.'),
              ],
            },
            plain(8, 'He hath fenced up my way that I cannot pass: and he hath set darkness in my paths.'),
            plain(9, 'He hath stripped me of my glory, and taken the crown from my head.'),
            plain(10, 'He hath destroyed me on every side, and I am gone: and mine hope hath he removed like a tree.'),
            plain(11, 'For he hath kindled his wrath against me, and he counteth me unto him as one of his enemies.'),
            plain(12, 'His troops come together, and raise up their way against me, and encamp round about my tabernacle.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job19-error',
          html:
            'Job says: "If I have erred, my error remaineth with myself." In other words: my mistake is my own business. Why do you need to multiply it by casting it in my face again and again? This is Job&apos;s rebuke to the friends. They are not helping him bear his burden. They are piling shame upon shame, doubt upon doubt. They are not weeping with him. They are accusing him.',
        },
        {
          kind: 'commentary',
          id: 'job19-plead',
          html:
            '"Ye plead against me my reproach." The friends are using Job&apos;s own suffering as evidence against him. They are turning his pain into proof of his guilt. This is a deep cruelty: to take a man&apos;s agony and weaponize it.',
        },
        {
          kind: 'hebrew',
          id: 'job19-gader',
          title: 'Gader — "Fence" (A Barrier That Closes Every Way)',
          script: 'גָּדֵר',
          translit: '<strong>Gader</strong> · fence, wall; a boundary that encloses and restrains',
          description:
            '"He hath fenced up my way that I cannot pass." The Hebrew word gader suggests not just a wall but an enclosed space. Job is not merely blocked in one direction. He is surrounded. Escape is impossible in all directions. The fence is not a warning. It is a prison.',
        },
        {
          kind: 'commentary',
          id: 'job19-cry',
          html:
            '"I cry out of wrong, but I am not heard." This is perhaps the deepest anguish—not just the suffering itself, but the silence of heaven. Job cries out. He demands justice. He calls for an answer. But the heavens are silent. God does not respond. The sense of abandonment is complete.',
        },
        {
          kind: 'carry',
          html:
            'Job has reached the point where even his conception of God has become adversarial. God is no longer the source of comfort. God is the source of suffering. God Himself is the one who has fenced him in, who has compassed him with a net, who has raised troops against him. This is despair at its deepest level—when the only power that could comfort you becomes the power you believe has wounded you.',
        },
        {
          kind: 'reflection',
          id: 'job19-cry-unheard',
          prompt: 'Have you ever cried out and felt that God did not hear? When prayers feel unanswered, how do you hold onto faith? What kept Job&apos;s faith alive?',
        },
      ],
    },

    /* ─── Job 19:13–20 — Abandoned by All ────────────────────────────── */
    {
      ref: 'Job 19:13–20',
      title: 'All My Inward Friends Abhorred Me',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(13, 'He hath put my brethren far from me, and mine acquaintance are verily estranged from me.'),
            plain(14, 'My kinsfolk have failed, and my familiar friends have forgotten me.'),
            {
              number: 15,
              spans: [
                t('They that dwell in mine house, and my maids, count me for a stranger: I am an alien in their sight.'),
              ],
            },
            plain(16, 'I called my servant, and he gave me no answer; I intreated him with my mouth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job19-mid-pity-avenger',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier?',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(17, 'My breath is strange to my wife, though I intreated for the children&apos;s sake of mine own body.'),
            {
              number: 18,
              spans: [
                t('Yea, young children despised me; I arose, and they '),
                hg('spake against me', 'job19-children'),
                t('.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('All my '),
                hg('inward friends abhorred me', 'job19-inward-friends'),
                t(': and they whom I loved are turned against me.'),
              ],
            },
            plain(20, 'My bone cleaveth to my skin and to my flesh, and I am escaped with the skin of my teeth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job19-children',
          html:
            'Even the children despise him. Children, who have no prejudice, who have no theological agenda, who respond only to present reality—even they turn away from Job. His appearance is so altered by suffering that children see him as something to be mocked. This is total degradation: to become repulsive to the innocent.',
        },
        {
          kind: 'commentary',
          id: 'job19-inward-friends',
          html:
            '"All my inward friends abhorred me." The word "inward" suggests those closest to him, those who knew him most intimately. Not casual acquaintances, but those he loved. They are the ones who have turned away. The deepest loneliness is not to be abandoned by strangers. It is to be abandoned by those who know you best, who should understand you, who should stand by you in darkness.',
        },
        {
          kind: 'hebrew',
          id: 'job19-dodam',
          title: 'Dod — "One Who Loves" or "Inward Friend"',
          script: 'דּוֹד',
          translit: '<strong>Dod</strong> · beloved, uncle (one of the inner family); one close to the heart',
          description:
            'Job&apos;s "inward friends" are those bound to him by love, not by obligation. The word dod carries the sense of family warmth, of intimate belonging. To have these friends abhor him is to lose the very bonds of love that make life worth living. He is not just sick. He is unloved. He is not just isolated. He is despised by those he trusted.',
        },
        {
          kind: 'carry',
          html:
            'Job&apos;s isolation is complete. God is against him. His friends accuse him. His family finds him repulsive. His servants do not obey. His wife cannot bear to be near him. Even the children mock him. There is no one left to stand with Job. He stands utterly alone. And yet—as we will see—it is in this absolute solitude that he encounters the most profound truth about redemption.',
        },
        {
          kind: 'reflection',
          id: 'job19-solitude',
          prompt: 'Job is abandoned by everyone. But what if ultimate redemption comes not from human comfort, but from God alone? Can you imagine standing utterly alone and still finding hope?',
        },
      ],
    },

    /* ─── Job 19:21–27 — "I Know That My Redeemer Liveth" ─────────────── */
    {
      ref: 'Job 19:21–27',
      title: 'The Redeemer Who Will Stand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(21, 'Have pity upon me, have pity upon me, O ye my friends; for the hand of God hath touched me.'),
            plain(22, 'Why do ye persecute me as God, and are not satisfied with my flesh?'),
            {
              number: 23,
              spans: [
                t('Oh that my words were now written! oh that they were printed in a book! '),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job19b-mid-flesh-witness',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier?',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 24,
              spans: [
                t('That they were graven with an '),
                hg('iron pen and lead in the rock for ever', 'job19-graven'),
                t('! '),
              ],
            },
            {
              number: 25,
              spans: [
                t('For '),
                hp('I know that my Redeemer liveth', 'job19-redeemer'),
                t(', and '),
                hp('that he shall stand at the latter day upon the earth', 'job19-latter-day'),
                t(': '),
              ],
            },
            {
              number: 26,
              spans: [
                t('And '),
                hp('though after my skin worms destroy this body,', 'job19-worms'),
                t('\n'),
                hp('yet in my flesh shall I see God', 'job19-see-god'),
                t(': '),
              ],
            },
            {
              number: 27,
              spans: [
                t('Whom I shall see for myself, and mine eyes shall behold, and not '),
                hg('another', 'job19-not-another'),
                t('; though my reins be consumed within me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job19-graven',
          html:
            'Job wishes his words were written in an eternal record—graven with iron and lead into rock. He wants to speak not just to his friends, but to all ages. He wants future generations to know that he was innocent, that his suffering was not deserved, that he stood firm in faith. He wants his witness to endure beyond his death. This desire for permanent testimony is itself a form of faith—a belief that God sees, that truth matters, that the innocent will ultimately be vindicated.',
        },
        {
          kind: 'hebrew',
          id: 'job19-goal',
          title: 'Goel — "Redeemer" (The Kinsman Redeemer)',
          script: 'גּוֹאֵל',
          translit: '<strong>Goel</strong> · redeemer, kinsman-redeemer; one who restores and redeems a relative',
          description:
            'The goel is not a distant savior. He is a kinsman, one of the family, who has the right and responsibility to redeem a relative from slavery, to avenge a relative&apos;s death, to restore what was lost. Job speaks of a Redeemer who is close to him, who will stand for him, who will vindicate him. Christians recognize in this word the very heart of Christ&apos;s work: He becomes our kinsman, our near relation, and redeems us from death.',
        },
        {
          kind: 'commentary',
          id: 'job19-redeemer',
          html:
            '"I know that my Redeemer liveth." This is Job&apos;s great affirmation. In the midst of abandonment, in the depths of suffering, he declares knowledge of a Redeemer. He does not say "I hope." He says "I know." This is not the knowledge of sight. It is the knowledge of faith. He knows—somehow, impossibly—that there is one who will redeem him, who will stand for him, who will make all things right.',
        },
        {
          kind: 'commentary',
          id: 'job19-latter-day',
          html:
            '"And that he shall stand at the latter day upon the earth." The Redeemer is not present now. He will come at the latter day. He will stand upon the earth. This is a vision of resurrection, of vindication, of the end-times when God&apos;s justice will be made manifest. Job is not expecting rescue in this life. He is expecting redemption in the world to come.',
        },
        {
          kind: 'commentary',
          id: 'job19-worms',
          html:
            '"Though after my skin worms destroy this body." Job acknowledges his mortality. His flesh will decay. But decay is not the end. Death is not the final word. Something will remain, something that will rise again.',
        },
        {
          kind: 'commentary',
          id: 'job19-see-god',
          html:
            '"Yet in my flesh shall I see God." This is the resurrection hope. Not a disembodied spirit, but a resurrection in flesh. Job will see God not as a ghost, not as a shadow, but as one alive in his own body, restored and redeemed. This is the hope that Christ will fulfill—the resurrection of the body, the vindication of the flesh, the triumph over death itself.',
        },
        {
          kind: 'commentary',
          id: 'job19-not-another',
          html:
            '"Whom I shall see for myself, and not another." Job will see God with his own eyes. This is personal, intimate, direct. He will not hear about God. He will not see God through another. He will behold God Himself. This is the promise of eternal life—not the absence of the body, but the presence of God, seen face to face.',
        },
        {
          kind: 'christ',
          id: 'job19-christ-goel',
          title: 'Christ Connection — The Kinsman Redeemer',
          html:
            'Job speaks of a goel—a kinsman redeemer—and in the New Testament, that Redeemer is revealed as Jesus Christ. Hebrews 2:11 says: "For both he that sanctifieth and they who are sanctified are all of one: for which cause he is not ashamed to call them brethren." Christ becomes our kinsman, our brother, our near relation. He redeems us not from slavery alone, but from death itself. And Job&apos;s vision of resurrection becomes fulfilled in the Gospel: "Now is Christ risen from the dead, and become the firstfruits of them that slept" (1 Corinthians 15:20). Those who believe in Christ will also rise, will see Him face to face, will be vindicated in the resurrection. Job&apos;s hope, spoken in darkness, becomes the hope of all who follow Christ.',
        },
        {
          kind: 'carry',
          html:
            'Job teaches us that faith is not destroyed by suffering. It is refined by it. In the moment of absolute abandonment, when all human comfort is stripped away, Job encounters a deeper truth—not the consolation of this life, but the promise of redemption in the world to come. He does not see his Redeemer. But he knows He lives. And that knowledge alone is enough to sustain him.',
        },
        {
          kind: 'reflection',
          id: 'job19-redeemer-faith',
          prompt: 'Can you believe in a Redeemer you cannot see? Can your faith survive the stripping away of all earthly comfort? What does it mean to "know" without seeing?',
        },
      ],
    },

    /* ─── Job 19:28–29 — A Warning to the Friends ───────────────────── */
    {
      ref: 'Job 19:28–29',
      title: 'The Sword Awaits the Friends',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(28, 'But ye should say, Why persecute we him, seeing the root of the matter is found in me?'),
            plain(29, 'Be ye afraid of the sword: for wrath bringeth the punishments of the sword, that ye may know there is a judgment.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Job ends with a warning. The friends have persecuted him. They have used his suffering as evidence of his guilt. But judgment comes for those who accuse the innocent. "Be ye afraid of the sword; for wrath bringeth the punishments of the sword, that ye may know there is a judgment." The divine justice that the friends believe in—the justice by which they condemn Job—will turn against them. God sees not only Job&apos;s innocence, but also the cruelty of those who have failed to stand with him in his affliction.',
        },
        {
          kind: 'carry',
          html:
            'This is a harsh word, but it is just. To stand by a sufferer and accuse him, to weaponize his pain against him, to defend a doctrine at the cost of compassion—this is a sin that God notices. Job&apos;s final word to his friends is not mercy. It is warning. Let them beware the coming judgment.',
        },
        {
          kind: 'reflection',
          id: 'job19-judgment',
          prompt: 'Job warns his friends of judgment. Have you ever been wrong about someone&apos;s suffering, quick to judge when you should have been quick to listen? What did you learn?',
        },
      ],
    },
  ],
};
