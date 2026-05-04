import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 6 — Job's Reply to Eliphaz: The Arrows of the Almighty
 *
 * Job responds to his first friend. His grief is incomparable: "Oh that my grief
 * were thoroughly weighed, and my calamity laid in the balances together! For now
 * it would be heavier than the sand of the sea." The arrows of the Almighty are
 * in him, their poison within him. He turns on his friends: "Ye are forgers of
 * lies, ye are all physicians of no value." They have come to comfort but have
 * only condemned. And he speaks a devastating truth: "How forcible are right words!
 * but what doth your arguing reprove?" Even true words become false when used as a
 * cudgel against the wounded. Job does not need argument. He needs presence. He
 * needs friends who will sit with him without diagnosing him, without insisting
 * they understand his pain.
 */
export const JOB_6: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 6,

  estimatedMinutes: { beginner: 4, intermediate: 11, deep: 14 },
  topicTags: ['suffering', 'hope', 'sovereignty', 'lament'],
  opener: {
    topical: true,
    caption: 'Job 6',
  },
  intros: [
    'Job now responds to Eliphaz. He does not answer the logic directly. Instead, he begins with a plea for understanding: if his grief could be weighed, if his calamity could be placed on scales against sand, it would be heavier. His pain is not a matter of logic or observation. It is overwhelming, incomparable, without parallel. No one can truly understand it unless they have experienced it.',
    'Job then describes his experience: "The arrows of the Almighty are within me, the poison thereof drinketh up my spirit." The imagery is one of violent attack. God, in Job\'s experience, is not a distant judge but an archer who has shot him full of arrows. The poison from these arrows is drinking up his spirit. He is wounded, not just physically but existentially.',
    'And then he turns to his friends. They have come to comfort him, but they have only accused him. Job recognizes that Eliphaz\'s argument is not wrong in itself — "How forcible are right words!" — but it is wrongly applied. His friends have turned theology into a weapon. They have replaced presence with diagnosis, compassion with condemnation.',
  ],

  bottomShare: {
    label: 'Share Job 6',
    quote:
      'Job tells his friends they are "physicians of no value." They offer true teachings, but wield them as weapons against the wounded. He teaches us that comfort without presence, wisdom without compassion, becomes cruelty.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 6 · Study Guide',
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
      id: 'sefaria-job-6',
      kind: 'study',
      source: 'Sefaria',
      label: 'Job 6 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Job.6',
      description: 'The Hebrew text of Job 6 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-job-overview-6',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Job — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/job/',
      description: 'Open-access SBL essay on the historical and literary setting of Job.',
    },

  ],

  sections: [
    /* ─── Job 6:1–7 — "Oh That My Grief Were Thoroughly Weighed" ───────── */
    {
      ref: 'Job 6:1–7',
      title: 'My Grief Is Beyond Measure',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 1,
              spans: [
                t('But Job answered and said,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Oh that my '),
                hp('grief were thoroughly weighed', 'grief-weighed'),
                t(', and my calamity laid in the balances together!'),
              ],
            },
            {
              number: 3,
              spans: [
                t('For now it would be '),
                hg('heavier than the sand of the sea', 'heavier-sand'),
                t(': therefore my words are swallowed up.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job6-mid-grief-weight',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier? [res:british-museum-ludlul]',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 4,
              spans: [
                t('For the '),
                hy('arrows of the Almighty', 'arrows-almighty'),
                t(' are within me, the poison thereof drinketh up my spirit: the terrors of God do set themselves in array against me.'),
              ],
            },
            plain(5, 'Doth the wild ass bray when he hath grass? or loweth the ox over his fodder?'),
            plain(6, 'Can that which is unsavoury be eaten without salt? or is there any taste in the white of an egg?'),
            {
              number: 7,
              spans: [
                t('The things that my soul refused to touch are as '),
                hg('my sorrows', 'sorrows-food'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'grief-weighed',
          html:
            'Job begins his reply by asking for something impossible yet necessary: that his grief be weighed and measured. If scales could be brought, if his calamity could be placed on one side of a balance and the sand of the sea on the other, the sand would be lighter. His pain is not a quantity one can quantify or compare. It exceeds all measure. And because it is so overwhelming, "my words are swallowed up." He cannot even speak it. The pain swallows his speech[res:sefaria-job-6][res:bibleodyssey-job-overview-6].',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kovel',
          title: 'Kovel — "Weight" or "Burden"',
          script: 'כֹּבֶל',
          translit: '<strong>Kovel</strong> · weight; burden; heaviness; that which is grave and serious',
          description:
            'The Hebrew kovel speaks of weight in both the physical and metaphorical sense. It is the heaviness that bends and breaks. Job\'s grief has a weight that cannot be borne, that exceeds the bearing capacity of his spirit.',
        },
        {
          kind: 'commentary',
          id: 'heavier-sand',
          html:
            'The comparison to the sand of the sea is stark. Sand is countless, immeasurable, the ultimate image of weight without end. And Job\'s grief would outweigh it. This is not hyperbole born of self-pity. This is a man trying to communicate to friends how impossibly deep his pain goes. Words cannot reach it. Scales cannot measure it.',
        },
        {
          kind: 'commentary',
          id: 'arrows-almighty',
          html:
            'Then comes one of the most striking images in Scripture: "The arrows of the Almighty are within me, the poison thereof drinketh up my spirit." Job is not merely suffering. He is being attacked. God, in his experience, is not passively allowing suffering — God is actively wounding him. The arrows are within him. The poison from these arrows is drinking his spirit as if it were liquid. His very essence is being consumed by what God has done to him.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chets',
          title: 'Chets — "Arrow"',
          script: 'חֵץ',
          translit: '<strong>Chets</strong> · arrow; missile; weapon of war',
          description:
            'The Hebrew chets is a weapon of war, a tool of violence. When Job says God\'s arrows are within him, he is using the language of warfare, of violent attack. He is not the victor but the wounded, pierced by arrows that have lodged themselves within his body.',
        },
        {
          kind: 'commentary',
          id: 'sorrows-food',
          html:
            'Job speaks of things his soul refused to touch — and now they are as his sorrows. The image suggests that he is being forced to consume things that are repugnant to him, things that violate his nature. His suffering is not just external; it is being forced into him, becoming part of his substance.',
        },
        {
          kind: 'carry',
          html:
            'When we are in overwhelming pain, we sometimes try to explain it to those who have not experienced it. We use metaphors — weight, arrows, poison, forced feeding. But even our most vivid metaphors fall short. The person we are trying to reach may listen, may nod, and still not understand. And there is a cruel moment when we realize that our attempts to make them understand have exhausted us further. Perhaps the deepest comfort is not to demand that others understand our pain, but to have them accept that it is real, whether or not they can measure it.',
        },
        {
          kind: 'reflection',
          id: 'pain-communication',
          prompt: 'Have you ever tried to describe your pain to someone and felt they could not truly grasp it? What would it have meant for them to simply say "I believe you" without trying to compare or minimize it?',
        },
      ],
    },

    /* ─── Job 6:8–13 — Wishes for Death ──────────────────────────────── */
    {
      ref: 'Job 6:8–13',
      title: 'That God Would Grant My Wish',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 8,
              spans: [
                t('O that I might have my request; and that God would grant me the '),
                hp('thing that I long for', 'thing-longfor'),
                t('!'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Even that it would please God to '),
                hg('destroy me', 'destroy-me'),
                t('; that he would let loose his hand, and '),
                t('cut me off'),
                t('!'),
              ],
            },
            plain(10, 'Then should I yet have comfort; yea, I would harden myself in sorrow: let him not spare; for I have not concealed the words of the Holy One.'),
            {
              number: 11,
              spans: [
                t('What is my strength, that I should hope? and what is mine end, that I should prolong my life?'),
              ],
            },
            plain(12, 'Is my strength the strength of stones? or is my flesh of brass?'),
            plain(13, 'Is not my help in me? and is wisdom driven quite from me?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'thing-longfor',
          html:
            'Job wishes that God would grant him what he longs for — and that is death. He does not hide this. He does not soften it. His longing is for destruction. This is not idle complaint. This is a prayer for annihilation. And Job seems almost to apologize for it in the next verse — he calls this comfort, saying that even in destruction he would find some relief.',
        },
        {
          kind: 'commentary',
          id: 'destroy-me',
          html:
            'Job explicitly asks God to destroy him. "Even that it would please God to destroy me; that he would let loose his hand, and cut me off!" He is asking for the one mercy that seems within God\'s power: to end his existence. Not to heal him, not to comfort him — but to end him. The fact that he frames this as a mercy suggests how unbearable his life has become.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-neta',
          title: 'Neta — "To Cut Off" or "To Extirpate"',
          script: 'נָתַע',
          translit: '<strong>Neta</strong> · to cut off; to pull out; to extirpate; to destroy at the root',
          description:
            'The Hebrew suggests not just death but the complete removal of something — being cut out, pulled up from the roots. Job is asking to be removed, to be erased, as if he had never been.',
        },
        {
          kind: 'commentary',
          id: 'comfort-sorrow',
          html:
            'Then Job adds a stunning statement: "Then should I yet have comfort; yea, I would harden myself in sorrow." Even in the act of being destroyed, he would find comfort. He would steel himself, knowing that the end is coming. Death would be preferable to this prolonged suffering. He would welcome it if he knew it was certain.',
        },
        {
          kind: 'commentary',
          id: 'strength-gone',
          html:
            'Job then asks a series of rhetorical questions. "What is my strength, that I should hope?" He has no strength. He is not made of stone or brass — he is flesh, fragile, weak. What resources does he have to continue? "Is not my help in me?" — meaning, his help must come from outside, and it is not forthcoming. "Wisdom driven quite from me" — he cannot even think clearly. His capacity for hope is gone.',
        },
        {
          kind: 'carry',
          html:
            'Job teaches us that the desire for death is not always a sign of weakness or sin. Sometimes it is the honest response of someone whose suffering has become unbearable. Rather than condemning such a wish, we might ask: What would need to change for this person to want to live? What small thing might make continued existence bearable?',
        },
        {
          kind: 'reflection',
          id: 'unbearable-existence',
          prompt: 'Job would find comfort in his own destruction. What circumstances, if any, could lead you to feel that death was preferable to life? What would restore your will to live?',
        },
      ],
    },

    /* ─── Job 6:14–30 — "Ye Are Forgers of Lies" ───────────────────── */
    {
      ref: 'Job 6:14–30',
      title: 'My Friends Are Physicians of No Value',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 14,
              spans: [
                t('To him that is afflicted pity should be shewed by his friend; but he forsaketh the '),
              hg('fear of the Almighty', 'fear-almighty'),
              t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('My brethren have dealt deceitfully as a '),
                hg('brook', 'brook-reference'),
                t('; as the stream of brooks they pass away.'),
              ],
            },
            plain(16, 'Which are blackish by reason of the ice, and wherein the snow is hid:'),
            plain(17, 'What time they wax warm, they vanish: when it is hot, they are consumed out of their place.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job6b-mid-kind-brothers',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier?',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(18, 'The paths of their way are turned aside; they go to nothing, and perish.'),
            plain(19, 'The troops of Tema looked, the companies of Sheba waited for them.'),
            plain(20, 'They were confounded because they had hoped; they came thither, and were ashamed.'),
            {
              number: 21,
              spans: [
                t('For now ye are nothing; ye see my casting down, and are afraid.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job6-split-1',
          html:
            'Job&apos;s friends are not silent—they are torrents that go dry when the heat comes. The brook that promised water in winter offers nothing in summer thirst. This is the grief of a man who counted on the wrong consolation.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 22,
              spans: [
                t('Did I say, Bring unto me? or, Give a reward for me of your substance?'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Or, Deliver me from the enemy&apos;s hand? or, Redeem me from the hand of the mighty?'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Teach me, and I will hold my tongue: and cause me to understand wherein I have erred.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('How '),
              hp('forcible are right words', 'right-words'),
              t('! but what doth your '),
              hp('arguing reprove', 'arguing-reprove'),
              t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job6-split-2',
          html:
            'Job has not asked for rescue or reward—only for understanding. His friends respond with argument. Yet truth weaponized becomes falsehood. Even right words become wrong when used as a cudgel against the wounded.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(26, 'Do ye imagine to reprove words, and the speeches of one that is desperate should be to the wind?'),
            plain(27, 'Yea, ye would even cast lots upon the fatherless, and dig a pit for your friend.'),
            {
              number: 28,
              spans: [
                t('Now therefore, be content, look upon me; for it is evident unto you if I lie.'),
              ],
            },
            plain(29, 'Return, I pray you, let it not be iniquity; yea, return again, my righteousness is in it.'),
            plain(30, 'Is there iniquity in my tongue? cannot my taste discern perverse things?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'fear-almighty',
          html:
            'Job begins his reproach: "To him that is afflicted pity should be shewed by his friend." Pity — not judgment, not diagnosis, but compassion. A true friend shows pity. But Eliphaz and his companions have forsaken this. By condemning Job, they have forsaken "the fear of the Almighty" — not reverence for God, but the humble awe that should prevent one from sitting in judgment on another\'s suffering.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nachal',
          title: 'Nachal — "Brook" or "Stream"',
          script: 'נַחַל',
          translit: '<strong>Nachal</strong> · brook; stream; river valley; that which flows seasonally',
          description:
            'A nachal is a stream that appears full in winter but vanishes in summer when the heat comes. It seems reliable but is not. Job uses the image of his friends as unreliable brooks — appearing to offer comfort but then disappearing when they are most needed.',
        },
        {
          kind: 'commentary',
          id: 'brook-reference',
          html:
            '"My brethren have dealt deceitfully as a brook; as the stream of brooks they pass away." Job compares his friends to a seasonal stream — appearing full and promising in winter, but disappearing in summer. They came to him with seeming compassion, but at the moment when they should have offered pity, they offered accusation instead. They have passed away, forsaken him in his need.',
        },
        {
          kind: 'commentary',
          id: 'nothing-afraid',
          html:
            '"For now ye are nothing; ye see my casting down, and are afraid." Job cuts to the heart of it. His friends are afraid of him. His suffering frightens them. Rather than being moved to compassion, they are moved to distance themselves through accusation. They make him culpable so that they do not have to confront the possibility that such suffering could happen to them.',
        },
        {
          kind: 'commentary',
          id: 'no-request',
          html:
            'Job then lists what he has NOT asked: "Did I say, Bring unto me? or, Give a reward for me of your substance? Or, Deliver me from the enemy\'s hand?" He has not asked them for money, for rescue, for practical help. He has simply needed their presence. And they have given him words instead.',
        },
        {
          kind: 'commentary',
          id: 'right-words',
          html:
            'The most devastating line: "How forcible are right words! but what doth your arguing reprove?" Eliphaz\'s words may be true. The argument about righteousness and punishment may be correct in the abstract. But "what doth your arguing reprove?" What does it prove about Job? Nothing. It is true wisdom applied to the wrong person, in the wrong way, at the wrong time. The truth becomes a lie when used as a cudgel.',
        },
        {
          kind: 'commentary',
          id: 'arguing-reprove',
          html:
            'The word "reprove" is crucial. To reprove is to convict, to demonstrate guilt. But what has Eliphaz actually proven? Only that he judges Job guilty. Not through evidence, but through assumption. Job is asking his friends: you argue well, but what have you actually shown? That I deserve this suffering? You have shown nothing but your own certainty.',
        },
        {
          kind: 'commentary',
          id: 'desperate-wind',
          html:
            'Job speaks of himself as "one that is desperate." His words are the words of desperation. And yet, his friends treat these words as if they were the confession of a guilty man, when they are simply the cry of the wounded. They "reprove words" — they judge his expressions of pain as if they were evidence of sin.',
        },
        {
          kind: 'christ',
          id: 'christ-casting-lots',
          title: 'Christ Connection — They Cast Lots Upon His Garment',
          html:
            'Job says to his friends: "Yea, ye would even cast lots upon the fatherless, and dig a pit for your friend." He is accusing them of cruelty — of taking advantage of the vulnerable, of betraying friendship. This image finds its dark mirror in the crucifixion when soldiers "cast lots upon his vesture" (Matthew 27:35, Psalm 22:18). Christ hangs as the most vulnerable of all — the innocent sufferer — and His enemies do not merely stand silent. They actively divide His possessions, making Him into a thing to be parceled out. And just as Job\'s friends betray him with words that claim to be wise, so Christ\'s accusers bring him "words" — the charges that lead to the cross. Both suffer not just from their circumstances but from the betrayal of those who should have stood with them.',
        },
        {
          kind: 'carry',
          html:
            'Job teaches us that when someone is in pain, the most important thing is not to be right but to be present. His friends had the truth, but they wielded it like a weapon. We do this sometimes: we correct someone who is suffering, we explain why they are wrong to feel as they do, we argue with their grief. And in doing so, we become like the friends of Job — physicians of no value, offering true words that are utterly false in application.',
        },
        {
          kind: 'reflection',
          id: 'truth-and-presence',
          prompt: 'When someone you care about is suffering, do you find yourself trying to explain their suffering, or do you sit with them in it? Which have you found more healing when the roles were reversed?',
        },
      ],
    },
  ],
};
