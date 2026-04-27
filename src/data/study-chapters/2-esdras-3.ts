import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_3: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 3,

  intros: [
    'Ezra enters a season of profound wrestling with God&apos;s justice. Jerusalem has fallen; Babylon rises. Why would the God of Israel abandon His chosen city to a pagan empire? The question burns at the heart of this chapter.',
    'Ezra&apos;s lament is honest and passionate. He does not accept easy answers. His suffering is not merely personal—it is the suffering of a people watching their hope crumble.',
  ],

  sections: [
    {
      ref: '2 Esdras 3:4–19',
      title: 'The Lament',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(4, 'O Lord, thou didst make the world, and in it thou madest Adam, and thou gavest him a commandment.'),
            plain(8, 'But Babylon ruleth over us now. What profit have we of the works which are done by thee?'),
            plain(10, 'I beseech thee, O Lord, shew me thy way.'),
            plain(15, 'We are by thee rejected and put to shame, saith he, for we have no righteous deeds.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras3-lament',
          html:
            'Ezra begins with creation itself. God made all things, set humanity in order, gave commandment. Yet now the righteous city lies in ruins while the pagan empire flourishes. The logic seems inverted. Ezra&apos;s question is not casual complaint—it challenges God&apos;s justice itself.',
        },
        {
          kind: 'hebrew',
          id: 'esdras3-tzedakah',
          title: 'Tzedakah—Righteousness',
          script: 'צְדָקָה',
          translit: '<strong>Tzedakah</strong> · righteousness; justice; charity',
          description: 'Ezra confesses the people&apos;s lack of tzedakah—they have not maintained the covenant righteousness. Yet the question remains: does this explain Babylon&apos;s dominion over them?',
        },
        {
          kind: 'christ',
          id: 'esdras3-christ-suffer',
          title: 'Christ Connection—The Righteous Sufferer',
          html:
            'Jesus enters into this mystery. He is the Righteous One who suffers. His suffering is not punishment for sin but redemption through it—opening a new answer to Ezra&apos;s ancient question.',
        },
        {
          kind: 'carry',
          html:
            'Ezra laments but does not despair. He brings his confusion to God, asking Him to explain His own ways. This is the prayer of the faithful—not demanding but seeking understanding from One we trust.',
        },
        {
          kind: 'reflection',
          id: 'esdras3-justice',
          prompt: 'When you see injustice—the righteous suffering, the wicked prospering—what questions do you bring to God? How do you hold on to faith when His ways seem hidden?',
        },
      ],
    },

    {
      ref: '2 Esdras 3:28–36',
      title: 'The Query',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(28, 'Yet thou gavest the world unto the Hebrews, and thou didst plant thy law in their hearts.'),
            plain(30, 'But they that dwelt in the world as enemies unto thy name did reject thy commandments.'),
            plain(32, 'Therefore thou gavest their habitation into the hands of thine enemies.'),
            plain(36, 'Why then dost thou not pardon this people, or why hast thou not made them to bear the yoke together with the heathen?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras3-inequity',
          html:
            'Ezra presses deeper. God chose Israel, planted His law in their hearts. Yet God allowed His own people to fall to those who openly reject Him. If punishment must come for transgression, why not distribute it equally? Why this apparent inequality?',
        },
        {
          kind: 'greek',
          id: 'esdras3-paradox',
          title: 'Adikia—Injustice',
          script: 'ἀδικία',
          translit: '<strong>Adikia</strong> · injustice; unrighteousness',
          description: 'Ezra perceives an apparent adikia—an injustice in the way judgment falls. The righteous suffer while the unrighteous prosper. This paradox haunts believers across centuries.',
        },
        {
          kind: 'christ',
          id: 'esdras3-christ-mystery',
          title: 'Christ Connection—Redemptive Mystery',
          html:
            'In Christ, suffering takes on new meaning. It is not punishment for sin but a vessel of redemption. Through His apparent defeat comes true victory—a transformation of the meaning of suffering itself.',
        },
        {
          kind: 'carry',
          html:
            'Ezra&apos;s question remains open in Scripture because it remains open in human experience. Yet the promise stands: God is just, even when His justice is hidden. We are invited to trust even in darkness.',
        },
        {
          kind: 'reflection',
          id: 'esdras3-hidden',
          prompt: 'What situation in your life feels unjust? Can you bring that honest complaint to God, as Ezra does, while still affirming His justice?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O Lord, thou didst make the world... But Babylon ruleth over us now. What profit have we of the works which are done by thee?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 3 · Study Guide',
  },

  hasHebrew: true,
};
