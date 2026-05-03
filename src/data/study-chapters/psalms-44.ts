import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 44 — A Cry for the Many
 *
 * A communal lament: "For thy sake are we killed all the day long." Romans
 * 8:36 quotes this, applying it to believers suffering for Christ. Not an
 * individual&apos;s complaint, but a people&apos;s cry. Paul uses it to show that
 * suffering in the faith was always part of the covenant promise. The wounded
 * church is still God&apos;s church.
 */
export const PSALMS_44: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 44,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Psalm 44 is a communal lament. It is not one man speaking, but "we"—the people of God, speaking together. And their cry is sharp: they remember the works of God in past generations. He planted their fathers, cast out the nations, made His people prosper. But now the script has flipped. "Thou hast cast us off, and brought us to confusion." They are being slaughtered like sheep. Their enemies mock them. And the cruel twist: they have not been unfaithful. "We have not forgotten thy covenant." And yet they suffer.',
    'This is the psalms of those who do everything right and are beaten down for it. Paul quotes this psalm in Romans 8:36—"For thy sake are we killed all the day long; we are accounted as sheep for the slaughter." He applies it to the suffering church. The apostle is saying: this suffering, this death, this was always part of the promise. To belong to God does not guarantee ease. It may guarantee difficulty. But it also guarantees that the covenant holds, that God is still Father, even when His people bleed.',
  ],

  sections: [
    {
      ref: 'Psalm 44:1–8',
      title: 'The Works of the Fathers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 44,
          lines: [
            plain(1, 'We have heard with our ears, O God, our fathers have told us, what work thou didst in their days, in the times of old.'),
            plain(2, 'How thou didst drive out the heathen with thy hand, and plantedst them; how thou didst afflict the people, and cast them out.'),
            plain(3, 'For they got not the land in possession by their own sword, neither did their own arm save them: but thy right hand, and thine arm, and the light of thy countenance, because thou hadst a favour unto them.'),
            plain(4, 'Thou art my King, O God: command deliverances for Jacob.'),
            plain(6, 'For I will not trust in my bow, neither shall my sword save me.'),
            plain(7, 'But thou hast saved us from our enemies, and hast put to shame them that hated us.'),
            plain(8, 'In God we boast all the day long, and praise thy name for ever. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms44-heard',
          html:
            'The psalm grounds itself in received history: "We have heard with our ears, O God, our fathers have told us." This is not mere antiquity. This is testimony. The fathers told their sons, who told their sons, who now tell their own children. The story of God&apos;s works is handed down. And the content of that story is always the same: God delivered. God planted. God drove out enemies. God showed favor.',
        },
        {
          kind: 'hebrew',
          id: 'psalms44-avadtah',
          title: 'Avadah — "Work"',
          script: 'עֲבוֹדָה',
          translit: '<strong>Avadah</strong> · work; deed; labor; mighty work',
          description:
            'Avadah refers to the mighty works of God—the deeds that prove His power and faithfulness. These are not small kindnesses. These are salvation events, deliverances from impossible situations, the hand of God breaking in to reverse what seemed irreversible.',
        },
        {
          kind: 'commentary',
          id: 'psalms44-sword',
          html:
            'Crucially, the psalmist notes: "For they got not the land in possession by their own sword, neither did their own arm save them." The triumph was not the fathers&apos; accomplishment. It was God&apos;s. "Thy right hand, and thine arm, and the light of thy countenance." The fathers learned something essential: military might is not the source of victory. God is. And when God shows favor, even a handful of warriors defeats multitudes.',
        },
        {
          kind: 'commentary',
          id: 'psalms44-no-trust-bow',
          html:
            'The confession continues: "I will not trust in my bow, neither shall my sword save me." But they shall trust in God. And in that trust, they shall defeat enemies and "put to shame them that hated us." The faith of the fathers becomes the faith of the children. It is a heritage.',
        },
        {
          kind: 'reflection',
          id: 'psalms44-fathers-testimony',
          prompt: 'What testimony have you heard about God&apos;s works from those who came before you? How does their testimony of God&apos;s faithfulness shape your own faith when circumstances are hard?',
        },
      ],
    },

    {
      ref: 'Psalm 44:9–26',
      title: 'The Suffering Covenant People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 44,
          lines: [
            plain(9, 'But thou hast cast us off, and brought us to shame; and goest not forth with our armies.'),
            plain(10, 'Thou makest us to turn back from the enemy: and they which hate us spoil us.'),
            plain(11, 'Thou hast given us like sheep appointed to be eaten; and hast scattered us among the heathen.'),
            plain(15, 'My confusion is continually before me, and the shame of my face hath covered me,'),
            plain(17, 'All this is come upon us; yet have we not forgotten thy covenant.'),
            plain(22, 'Yea, for thy sake are we killed all the day long; we are counted as sheep for the slaughter.'),
            plain(23, 'Awake, why sleepest thou, O Lord? arise, cast us not off for ever.'),
            plain(26, 'Arise for our help, and redeem us for thy mercies&apos; sake.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms44-cast-off',
          html:
            'The lament begins with a wrenching reversal. All the stories the fathers told—of God driving out nations, planting His people, showing His favor—seem to have a dark sequel. "But thou hast cast us off, and brought us to shame." The same God who went out with the armies of the fathers now refuses to go out with the armies of the children. The refusal is inexplicable.',
        },
        {
          kind: 'commentary',
          id: 'psalms44-sheep',
          html:
            '"Thou hast given us like sheep appointed to be eaten." The image is brutal. The people are not warriors anymore. They are sheep. Defenseless, appointed for slaughter, scattered among the heathen like flocks driven in all directions. The shame is not hidden. It covers them. Their enemies mock them. "Where is your God?" they jeer.',
        },
        {
          kind: 'hebrew',
          id: 'psalms44-sheol',
          title: 'Tzel Mavet — "Shadow of Death"',
          script: 'צֵל מָוֶת',
          translit: '<strong>Tzel Mavet</strong> · shadow of death; deepest darkness; proximity to death',
          description:
            'Though not quoted directly in the lament, the sense of walking in the shadow of death pervades the passage. The covenant people are walking in darkness. They are living as if death has already claimed them. Yet they cry out. They have not yet been silenced.',
        },
        {
          kind: 'commentary',
          id: 'psalms44-covenant',
          html:
            'Then comes a crucial statement: "Yet have we not forgotten thy covenant." This is the crux. They have been beaten down, scattered, mocked. They could have said: if God has forgotten us, we will forget Him. But they do not. They insist on the covenant. They claim God&apos;s promise even in the moment when God seems to have abandoned that promise.',
        },
        {
          kind: 'commentary',
          id: 'psalms44-for-sake',
          html:
            'And then: "Yea, for thy sake are we killed all the day long; we are counted as sheep for the slaughter." This is stunning. They are not saying: we are suffering because we have sinned. They are saying: we are suffering *for thy sake*. Our death is for your name&apos;s sake. We are not victims of random misfortune. We are sacrifices to your cause.',
        },
        {
          kind: 'christ',
          id: 'psalms44-christ-romans',
          title: 'Christ Connection — Romans 8:36 and the Suffering Church',
          html:
            'Paul quotes Psalm 44:22 in Romans 8:36: "For thy sake we are killed all the day long; we are accounted as sheep for the slaughter." He uses this to assure the Roman church that their suffering is not a sign of God&apos;s abandonment. Rather, suffering for the faith is part of the inheritance of the covenant people. Just as the psalmist could say, "For thy sake are we killed," so the apostle can say to his persecuted churches: your deaths are witnessed by God. They are not meaningless. They are "for his sake," part of the gospel story. And this assurance follows Romans 8:35: "Who shall separate us from the love of Christ?" Nothing. Not tribulation, not distress, not persecution. The suffering church is still God&apos;s beloved.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 44 honors a difficult truth: that belonging to God does not guarantee immunity from suffering. The covenant people may be beaten down, scattered, mocked. Yet the covenant still holds. God has not forgotten. And when suffering comes *for His sake*—when we suffer because we belong to Christ—that suffering has meaning. It is not random tragedy. It is participation in the death of Christ, which was always redemptive. The church that suffers is not abandoned. It is living out the gospel.',
        },
        {
          kind: 'reflection',
          id: 'psalms44-for-thy-sake',
          prompt: 'Have you ever suffered for your faith? In that moment, were you able to say, "For thy sake"—to see your suffering as meaningful rather than meaningless? What would it take to maintain that perspective now?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'All this is come upon us; yet have we not forgotten thy covenant. Yea, for thy sake are we killed all the day long; we are counted as sheep for the slaughter.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 44 · Study Guide',
  },

  hasHebrew: true,
};
