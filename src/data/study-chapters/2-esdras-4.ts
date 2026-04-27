import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_4: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 4,

  intros: [
    'The angel Uriel appears to Ezra, tasked with responding to his anguished questions. But instead of easy answers, Uriel poses a counter-question: Can you measure the fire? Can you weigh the wind? How much more inscrutable are God&apos;s ways?',
    'This is not dismissal but invitation into humility. Uriel teaches that some mysteries exceed human comprehension—not because God is unjust, but because the finite cannot fully grasp the infinite.',
  ],

  sections: [
    {
      ref: '2 Esdras 4:1–8',
      title: 'Uriel&apos;s Reply',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'And the angel that was sent unto me, whose name was Uriel, gave me an answer,'),
            plain(2, 'And said, Thy heart is troubled and thy word is grievous.'),
            plain(5, 'How canst thou weigh the fire? Or how canst thou measure the wind? Or how canst thou call again the thing that is past?'),
            plain(8, 'Even so can no man upon earth understand my ways.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras4-unknowable',
          html:
            'Uriel names Ezra&apos;s condition—a troubled heart, weighty words. But he does not rebuke him. Instead, Uriel asks impossible questions: Can you weigh fire? Can you measure wind? These unanswerable riddles teach a single lesson: there are dimensions of reality beyond human reckoning.',
        },
        {
          kind: 'hebrew',
          id: 'esdras4-devarim',
          title: 'Devarim—Words/Things',
          script: 'דְּבָרִים',
          translit: '<strong>Devarim</strong> · words; things; matters',
          description: 'God&apos;s devarim are both His words and His works. To understand them requires more than human knowledge—it requires divine revelation and trust.',
        },
        {
          kind: 'christ',
          id: 'esdras4-christ-wisdom',
          title: 'Christ Connection—The Word Made Known',
          html:
            'Though God&apos;s ways exceed understanding, Jesus reveals the Father&apos;s heart. In Him, the infinite becomes knowable—not exhaustively, but truly. He is the Bridge between divine mystery and human knowledge.',
        },
        {
          kind: 'carry',
          html:
            'Uriel teaches acceptance of limitation. You are not God; you cannot comprehend His full counsel. This is not a call to intellectual surrender but to humble trust. Let your questions lead to deeper faith, not to despair.',
        },
        {
          kind: 'reflection',
          id: 'esdras4-measure',
          prompt: 'What mysteries about God&apos;s nature or His ways do you struggle to understand? Can you rest in the truth that some things are known only to Him?',
        },
      ],
    },

    {
      ref: '2 Esdras 4:33–37',
      title: 'The Seal of Vision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(33, 'This world is not the end; the glory and the joy of God remain yet hid.'),
            plain(35, 'Therefore be not over much in thy understanding of the things wherein thou art ignorant.'),
            plain(36, 'For thou hast received the seal of the vision of the Highest.'),
            plain(37, 'The Highest shall show thee visions of the high things which thou canst not understand.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras4-seal',
          html:
            'Uriel reveals a profound secret: the visible world is not ultimate. Behind it lies God&apos;s glory and joy—hidden for now but real. Ezra has received a seal—a mark of favor—that allows him to see beyond the veil, though he cannot fully comprehend what he sees.',
        },
        {
          kind: 'greek',
          id: 'esdras4-sphragis',
          title: 'Sphragis—Seal',
          script: 'σφραγίς',
          translit: '<strong>Sphragis</strong> · seal; mark; proof of authenticity',
          description: 'A seal marks ownership and authenticity. Ezra&apos;s seal is the mark of God&apos;s covenant—proof that he is chosen to receive vision beyond the ordinary.',
        },
        {
          kind: 'christ',
          id: 'esdras4-christ-seal',
          title: 'Christ Connection—The Seal of the Spirit',
          html:
            'In Christ, believers receive the seal of the Holy Spirit—a mark of ownership and a pledge of inheritance. Like Ezra, we see partially, understand dimly, yet we are sealed as God&apos;s own.',
        },
        {
          kind: 'carry',
          html:
            'You have been sealed by the Spirit. This seal is real even when your understanding is incomplete. The glory hidden from earthly sight is promised to you. Trust the seal more than your confusion.',
        },
        {
          kind: 'reflection',
          id: 'esdras4-glory',
          prompt: 'What does it mean to you that God hides glory and joy beyond this world? How does that hope change how you see suffering and struggle here?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'How canst thou weigh the fire? Or how canst thou measure the wind? Even so can no man upon earth understand my ways.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 4 · Study Guide',
  },

  hasHebrew: true,
};
