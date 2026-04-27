import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 5 — Eliphaz's Second Speech: The Folly of the Foolish,
 * and the Comfort of God's Correction
 *
 * Eliphaz continues his response to Job. He begins by pointing to the fate of the
 * foolish — their anger destroys them, their envy slays them, their habitations are
 * cursed. Then he pivots to a profound truth: "Man is born unto trouble, as the
 * sparks fly upward." Affliction is not random; it arises from the human condition.
 * But then Eliphaz commends God's ways — God corrects, heals, saves, and
 * protects those who turn to Him. He closes by saying "Happy is the man whom God
 * correcteth." This is true theology, but wrongly applied: Eliphaz cannot see that
 * Job's suffering is not discipline but trial. The passage reminds us that true
 * doctrine becomes false when wielded without compassion.
 */
export const JOB_5: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 5,

  intros: [
    'Eliphaz speaks again. He does not curse Job directly; instead, he draws on what he claims to have "seen" — the fates of foolish and envious people. Their habitations are cursed, their children scattered, their substance consumed. He knows, or thinks he knows, how the world works: wickedness brings its own punishment.',
    'But then something shifts. Eliphaz turns from condemning the foolish to comforting Job. He affirms profound truths: God is great and unsearchable, does marvellous things, disciplines those He loves, wounds and heals. "Happy is the man whom God correcteth," he says. He promises that God will deliver from trouble, redeem from death, hide from the scourge of the tongue. In six troubles, even in seven, no evil shall touch the righteous.',
    'Yet the chapter&apos;s tragic irony cuts deeper each time we read it. Eliphaz speaks much that is true. Scripture itself says "Blessed is the man whom the Lord correcteth" (Hebrews 12:6). Yet he applies these truths to Job with a confidence that betrays a fundamental failure: he cannot see that Job is not being disciplined for wickedness. Job is being tested. The question the entire book asks becomes sharper here: What happens when orthodox theology meets a person whose suffering does not fit the formula? The answer is: the theology becomes a weapon.',
  ],

  bottomShare: {
    label: 'Share Job 5',
    quote:
      'Eliphaz speaks much that is true — "Happy is the man whom God correcteth" — but applies it without compassion. The book teaches us that even correct doctrine becomes false when wielded without understanding the actual sufferer&apos;s pain.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 5 · Study Guide',
  },

  sections: [
    /* ─── Job 5:1–7 — Eliphaz's Vision of the Foolish's Fate ──────────────── */
    {
      ref: 'Job 5:1–7',
      title: 'The Fate of the Foolish and the Envious',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('For wrath killeth the '),
                hg('foolish man', 'foolish-man'),
                t(', and '),
                hg('anger slayeth', 'anger-slayeth'),
                t(' one that is hasty.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('For '),
                hg('wrath', 'wrath-envy'),
                t(' is cruel, and '),
                hg('anger', 'anger-cruel'),
                t(' is outrageous; but who is able to stand before envy?'),
              ],
            },
            plain(3, 'For I have seen the foolish taking root: but suddenly I cursed his habitation.'),
            {
              number: 4,
              spans: [
                t('His children are far from safety, and they are '),
                hg('crushed in the gate', 'crushed-gate'),
                t(', neither is there any to deliver them.'),
              ],
            },
            plain(5, 'Whose harvest the hungry eateth up, and taketh it even out of the thorns, and the robber swalloweth up their substance.'),
            {
              number: 6,
              spans: [
                t('Although '),
                hg('affliction cometh not forth of the dust', 'affliction-dust'),
                t(', neither doth trouble spring out of the ground;'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Yet '),
                hp('man is born unto trouble', 'born-trouble'),
                t(', as the sparks fly upward.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'foolish-man',
          html:
            'Eliphaz begins with a harsh pronouncement: wrath kills the foolish, anger slays the hasty. He speaks as if he understands a law of nature — that anger is self-destructive, that the foolish bring their own ruin. The observation is not without truth; unchecked anger often does destroy those who harbor it. But Eliphaz is doing something more: he is using this observation to diagnose Job.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kesil',
          title: 'Kesil — "Foolish" or "Dull"',
          script: 'כְּסִיל',
          translit: '<strong>Kesil</strong> · foolish one; dullard; one who lacks wisdom',
          description:
            'The Hebrew kesil refers not merely to ignorance, but to a kind of moral dullness — a refusal or inability to perceive what wisdom teaches. To call Job kesil is to suggest he cannot see what Eliphaz can see: the patterns of cause and effect, punishment and reward. The word carries judgment.',
        },
        {
          kind: 'commentary',
          id: 'crushed-gate',
          html:
            'Eliphaz paints a picture of the foolish person&apos;s children — scattered, defenseless, crushed "in the gate" (where judgment and justice are administered in ancient Israel). The implication is brutal: the father&apos;s foolishness extends to his children. His sin brings generational consequence. And no one delivers them — they are abandoned to their fate.',
        },
        {
          kind: 'commentary',
          id: 'affliction-dust',
          html:
            'Here Eliphaz draws a crucial distinction: "Affliction cometh not forth of the dust." Trouble is not random. It is not cosmic chaos or blind chance. It arises from somewhere — and in Eliphaz&apos;s view, that somewhere is human sin. The affliction is rooted in the moral order, not in mere accident.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-amal',
          title: 'Amal — "Trouble" or "Labor"',
          script: 'עָמָל',
          translit: '<strong>Amal</strong> · toil; trouble; suffering; labor attended with pain',
          description:
            'The Hebrew amal encompasses both the physical labor and the pain that attends the human condition. It is suffering that arises from the nature of existence — what Adam brought upon himself and his descendants through the Fall. "In the sweat of thy face shalt thou eat bread" is amal.',
        },
        {
          kind: 'commentary',
          id: 'born-trouble',
          html:
            'And then: "Man is born unto trouble, as the sparks fly upward." This is one of the most stunning lines in all of Scripture. Eliphaz is acknowledging something he then seems to forget: that affliction is intrinsic to the human condition. Trouble is not reserved for the foolish alone. It belongs to human life itself. The sparks of a flame, rising, are part of the flame&apos;s nature — and trouble is part of the nature of being human. This insight is profound. But Eliphaz uses it not to soften his judgment of Job, but to sharpen it: if trouble is universal, then perhaps Job&apos;s trouble is greater because his sin is greater.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes we speak truthfully about how the world works, only to misapply that truth to the person in front of us. We know that consequence follows choice, that the paths we walk shape our destinies. These things are real. But the presence of suffering in another&apos;s life does not automatically reveal the cause. Trouble is born with humanity. Not every trouble is diagnosis of sin. Sometimes it is simply the condition of being human in a fallen world.',
        },
        {
          kind: 'reflection',
          id: 'false-certainty',
          prompt: 'When have you been certain about what caused someone else&apos;s suffering, only to discover later that you had misunderstood? What keeps us from this kind of false certainty?',
        },
      ],
    },

    /* ─── Job 5:8–16 — God's Greatness and Wisdom ─────────────────────────── */
    {
      ref: 'Job 5:8–16',
      title: 'I Would Seek unto God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 8,
              spans: [
                t('I would seek unto God, and unto God would I '),
                hy('commit my cause', 'commit-cause'),
                t(':'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Which doeth great things and unsearchable; marvellous things '),
                hg('without number', 'without-number'),
                t(':'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Who giveth '),
                hg('rain upon the earth', 'rain-earth'),
                t(', and sendeth waters upon the fields:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('To set up on high those that be low; that those which '),
                hg('mourn may be exalted to safety', 'mourn-exalted'),
                t(':'),
              ],
            },
            {
              number: 12,
              spans: [
                t('He disappointeth the devices of the crafty, so that their hands cannot perform their enterprise.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('He taketh the wise in their own '),
                hp('craftiness', 'crafty-wisdom'),
                t('; and the counsel of the froward is carried headlong.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('They meet with darkness in the daytime, and grope in the noonday as in the night.'),
              ],
            },
            plain(15, 'But he saveth the poor from the sword, from their mouth, and from the hand of the mighty.'),
            plain(16, 'So the poor hath hope: and iniquity stoppeth her mouth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'commit-cause',
          html:
            'Now Eliphaz shifts tone. His advice to Job: "I would seek unto God, and unto God would I commit my cause." This is sincere counsel. If Job were to turn to God, to lay his complaint before the throne of heaven, the response would be one of comfort and restoration. The advice itself is biblical and sound. The tragedy is that Eliphaz seems unable to conceive that Job has already done this — that Job has already committed his cause to God, and God has not answered.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-palla',
          title: 'Palla — "Do a marvellous thing"',
          script: 'פָּלַל',
          translit: '<strong>Palla</strong> · to do wonders; to accomplish marvellous things',
          description:
            'God does great things — not merely great in size or power, but great in that they are beyond human comprehension. They are "unsearchable," beyond the reach of our understanding. God works in ways we cannot predict or map.',
        },
        {
          kind: 'commentary',
          id: 'rain-earth',
          html:
            'Eliphaz catalogues God&apos;s goodness: He gives rain, sends waters. These are the gifts that sustain life — water is the basic blessing. In the ancient Near East, rain was not guaranteed; it was God&apos;s gift. To speak of God giving rain is to speak of Him as sustainer, provider, the One on whom all life depends.',
        },
        {
          kind: 'commentary',
          id: 'mourn-exalted',
          html:
            'And He "sets up on high those that be low; that those which mourn may be exalted to safety." This is the great reversal — the God who Eliphaz worships is a God of justice and mercy. The lowly are lifted. The mourners are exalted. The one who has suffered can be elevated by God&apos;s hand. It is beautiful. It is true. And yet Eliphaz seems not to notice that Job is mourning and has not been exalted.',
        },
        {
          kind: 'commentary',
          id: 'crafty-wisdom',
          html:
            'Then comes a verse that Paul will later quote: "He taketh the wise in their own craftiness" (1 Corinthians 3:19). This is genuine wisdom. God has a way of confounding those who think they can outsmart Him, who rely on their own cunning rather than on His counsel. Their cleverness becomes their trap. But notice: Eliphaz is saying this about others — about the foolish, the crafty, those who set devices against God. He is not seeing himself in this verse. He does not perceive that his own "wisdom" in judging Job&apos;s case may be the kind of wisdom God will confound.',
        },
        {
          kind: 'carry',
          html:
            'We can speak many true things about God — His power, His justice, His compassion — and still miss what is true about the person in front of us. Eliphaz knows God. He knows Scripture. He has observed much. But he lacks the one thing that would make his counsel healing: he lacks the humility to say, "I do not know why you are suffering. I am uncertain. And I will sit with you in that uncertainty."',
        },
        {
          kind: 'reflection',
          id: 'sit-with-uncertainty',
          prompt: 'Eliphaz speaks many truths about God, but applies them without understanding Job&apos;s actual situation. What truths do you find yourself stating to others when what they really need is your presence in their confusion?',
        },
      ],
    },

    /* ─── Job 5:17–26 — "Happy Is the Man Whom God Correcteth" ──────────── */
    {
      ref: 'Job 5:17–26',
      title: 'The Happy Man Who Is Chastened',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 17,
              spans: [
                t('Behold, '),
                hp('happy is the man whom God correcteth', 'happy-corrected'),
                t(': therefore despise not thou the chastening of the Almighty:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('For '),
                hp('he maketh sore, and bindeth up', 'maketh-sore'),
                t(': '),
                hp('he woundeth, and his hands make whole', 'woundeth-whole'),
                t('.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('He shall deliver thee in six troubles: yea, in seven there shall no evil touch thee.'),
              ],
            },
            plain(20, 'In famine he shall redeem thee from death: and in war from the power of the sword.'),
            plain(21, 'Thou shalt be hid from the scourge of the tongue: neither shalt thou be afraid of destruction when it cometh.'),
            plain(22, 'At destruction and famine thou shalt laugh: neither shalt thou be afraid of the beasts of the earth.'),
            {
              number: 23,
              spans: [
                t('For thou shalt be in league with the stones of the field: and the beasts of the field shall be at peace with thee.'),
              ],
            },
            plain(24, 'And thou shalt know that thy tabernacle shall be in peace; thou shalt visit thy habitation, and shalt not sin.'),
            plain(25, 'Thou shalt know also that thy seed shall be great, and thine offspring as the grass of the earth.'),
            plain(26, 'Thou shalt come to thy grave in a full age, like as a shock of corn cometh in his season.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'happy-corrected',
          html:
            'The central verse of this passage, and perhaps of Eliphaz&apos;s entire argument. "Happy is the man whom God correcteth." Eliphaz is proclaiming a truth that Scripture affirms elsewhere (Hebrews 12:6–7, Proverbs 3:11–12). God disciplines those He loves. To be corrected by God is a sign of His love and investment in us. The person who receives discipline and learns from it becomes wise, becomes righteous, becomes the kind of person God has committed Himself to restore.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yasar',
          title: 'Yasar — "To Chasten" or "To Correct"',
          script: 'יָסַר',
          translit: '<strong>Yasar</strong> · to correct; to chasten; to instruct through discipline',
          description:
            'The Hebrew yasar means to correct or instruct, often through some form of painful discipline. A father yasar his child. God yasar His people. The word carries the sense that the correction is redemptive — aimed at forming character, teaching wisdom, drawing the one being corrected back to the right way. It is not mere punishment; it is formative suffering.',
        },
        {
          kind: 'commentary',
          id: 'maketh-sore',
          html:
            'Then Eliphaz speaks of God&apos;s paradoxical nature: "He maketh sore, and bindeth up: he woundeth, and his hands make whole." This is an astonishing image. God both wounds and heals. The wound is not the final word; it is followed by restoration. The binding up is real. The healing is real. God is not cruel. God wounds in order to heal. His intention is always wholeness.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-rapha',
          title: 'Rapha — "To Heal"',
          script: 'רָפָא',
          translit: '<strong>Rapha</strong> · to heal; to make whole; to cure',
          description:
            'Rapha is the verb of healing, of restoration. It appears throughout Scripture in contexts where God mends the broken, restores the afflicted. When Eliphaz says God "bindeth up" and His "hands make whole," he uses the language of rapha — the same word Isaiah will use for Christ: "By His stripes we are healed" (Isaiah 53:5).',
        },
        {
          kind: 'commentary',
          id: 'six-troubles',
          html:
            'Eliphaz promises deliverance: in six troubles, in seven there shall no evil touch thee. In famine, God shall redeem from death. In war, from the sword. The disasters are real and acknowledged — famine, war, the scourge of the tongue. But the promise is that God will not allow them to be final. The righteous person will be protected, will laugh at destruction, will come to the grave in a full age, like a shock of corn in harvest.',
        },
        {
          kind: 'commentary',
          id: 'full-age',
          html:
            'The image of coming to the grave "in a full age, like as a shock of corn cometh in his season" is one of dignity and ripeness. The corn is not harvested before its time, cut down prematurely. It ripens to its season and is gathered with honor. This is Eliphaz&apos;s promise to Job: if you repent, if you turn to God, you will live to a ripe old age, fulfilled and at peace. The promise is one of abundance and ease.',
        },
        {
          kind: 'christ',
          id: 'christ-wounded-whole',
          title: 'Christ Connection — The Wounded Healer',
          html:
            'Eliphaz says God "maketh sore, and bindeth up: he woundeth, and his hands make whole." This prophecy finds its deepest meaning in Christ. Isaiah writes of the Suffering Servant: "He was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed" (Isaiah 53:5). Christ, the innocent one, bears wounds that are not His own. He is wounded that we might be made whole. His suffering is not punishment for sin; it is the means of our healing. He is the One who "maketh sore and bindeth up," who woundeth and makes whole — not for His own correction, but for ours. And His wounds are the instrument of our restoration.',
        },
        {
          kind: 'carry',
          html:
            'Eliphaz&apos;s promises in this passage are real and biblically rooted. God does correct those He loves. He does heal. He does protect. But his promises come with a hidden condition: that the person being addressed is guilty and in need of correction. They apply to someone whose suffering is the result of sin. They do not apply to Job, who is suffering not for sin but for trial. What comfort can you offer to someone who is suffering, knowing you do not understand the cause? What promises can you make, knowing you might be wrong about the diagnosis?',
        },
        {
          kind: 'reflection',
          id: 'correct-application',
          prompt: 'Eliphaz speaks truth about God&apos;s correction and healing, but applies it to the wrong person. When have you used a true principle to reach a false conclusion about someone else&apos;s situation?',
        },
      ],
    },

    /* ─── Job 5:27 — "Lo This, We Have Searched It" ───────────────────────── */
    {
      ref: 'Job 5:27',
      title: 'The False Conclusion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 27,
              spans: [
                t('Lo this, we have searched it, so it is; hear it, and know thou it for thy good.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'searched-conclusion',
          html:
            'And with this line, Eliphaz closes his case. "Lo this, we have searched it, so it is." He has examined the question, drawn his conclusion, and he is certain. He knows the answer. And he is telling Job to accept it. "Hear it, and know thou it for thy good." The implication is: this knowledge is for your benefit. If you accept what I am telling you, you will be restored. Acknowledge your sin, repent, and be healed.',
        },
        {
          kind: 'commentary',
          id: 'the-tragedy',
          html:
            'But here lies the tragedy. Eliphaz is not wrong about God, about correction, about discipline, about healing. But he is profoundly wrong about Job. Job has not sinned in the way Eliphaz assumes. Job is not being punished for wickedness. Job is being tested in his faith, and the test is real. What Eliphaz offers is not comfort but diagnosis, not compassion but condemnation masked as wisdom. And the worst part is that Eliphaz believes he is helping. He has "searched it out." He knows. And in his certainty, he becomes an accuser.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chaqar',
          title: 'Chaqar — "To Search Out" or "To Investigate"',
          script: 'חָקַר',
          translit: '<strong>Chaqar</strong> · to search out; to investigate thoroughly; to probe',
          description:
            'Eliphaz uses the word chaqar — to search out thoroughly. He is not casually speculating. He is claiming to have done the work of investigation, to have probed the matter. He has searched it, and he has found the answer. His certainty is the problem. He has not searched well enough to question his own assumptions.',
        },
        {
          kind: 'carry',
          html:
            'How often do we claim to have "searched out" a situation when we have merely confirmed what we already believed? How often do we offer diagnosis with the confidence of Eliphaz, when what is needed is the humility to say "I do not understand what you are going through, and I cannot explain why God has allowed this"? The comfort that heals is not the comfort that explains. It is the comfort that stays.',
        },
        {
          kind: 'reflection',
          id: 'certainty-cost',
          prompt: 'Eliphaz is so certain that he has the answer that he cannot hear Job&apos;s real suffering. What certainties are you holding that might be preventing you from truly listening to someone else?',
        },
      ],
    },
  ],
};
