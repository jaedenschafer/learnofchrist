import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 89 — The Davidic Covenant
 *
 * This is the longest psalm, and it centers on the covenant God made with David.
 * "I have made a covenant with my chosen, I have sworn unto David my servant,
 * Thy seed will I establish for ever, and build up thy throne to all generations."
 * Yet the psalm also contains a rupture: the covenant seems broken. David&apos;s
 * throne has fallen. The psalmist questions God&apos;s faithfulness. But the
 * covenant itself is eternal. Christ is the fulfillment of that promise—the
 * Davidic King who reigns forever.
 */
export const PSALMS_89: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 89,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Psalm 89 is a psalm of Ethan the Ezrahite, and it begins with praise for God&apos;s mercy and faithfulness. But it also contains a tension. God has made a covenant with David—eternal, unchangeable—yet in the psalmist&apos;s present time, that covenant seems broken. David&apos;s throne has been cast down. The walls are broken. The psalmist must reckon with the gap between God&apos;s promise and present reality. Yet he clings to the promise itself.',
  ],

  sections: [
    {
      ref: 'Psalm 89:1–4, 19–37',
      title: 'The Eternal Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 89,
          lines: [
            plain(1, 'I will sing the mercies of the Lord for ever: with my mouth will I make known thy faithfulness to all generations.'),
            plain(2, 'For I have said, Mercy shall be built up for ever: thy faithfulness shalt thou establish in the very heavens.'),
            plain(3, 'I have made a covenant with my chosen, I have sworn unto David my servant,'),
            plain(4, 'Thy seed will I establish for ever, and build up thy throne to all generations. Selah.'),
            plain(19, 'Then thou spake in vision to thy holy one, and saidst, I have laid help upon one that is mighty; I have exalted one chosen out of the people.'),
            plain(20, 'I have found David my servant; with my holy oil have I anointed him:'),
            plain(23, 'And I will beat down his foes before his face, and plague them that hate him.'),
            plain(24, 'But my faithfulness and my mercy shall be with him: and in my name shall his horn be exalted.'),
            plain(29, 'His seed also will I make to endure for ever, and his throne as the days of heaven.'),
            plain(36, 'His seed shall endure for ever, and his throne as the sun before me.'),
            plain(37, 'It shall be established for ever as the moon, and as a faithful witness in heaven. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps89-mercy',
          html:
            'The psalm opens with a declaration: "I will sing the mercies of the Lord for ever." This is not a plea or a question. This is a commitment. Whatever happens, the psalmist will declare God&apos;s faithfulness. This is the stance of faith—not belief based on present circumstances, but belief rooted in God&apos;s nature and past faithfulness.',
        },
        {
          kind: 'commentary',
          id: 'ps89-sworn',
          html:
            'The covenant with David is presented as an oath. God has sworn it. He has bound Himself by His own word. And the promise is specific: David&apos;s seed will endure forever. His throne will be built up to all generations. This is not a conditional promise that can be taken away if David fails. It is an eternal covenant.',
        },
        {
          kind: 'hebrew',
          id: 'ps89-olam',
          title: 'Olam — "Forever" (Eternal)',
          script: 'עוֹלָם',
          translit: '<strong>Olam</strong> · forever; eternity; without end',
          description:
            'The word appears repeatedly in this psalm: the seed will endure forever, the throne will be established forever. God&apos;s faithfulness is forever. This is not a promise limited to a generation. This is an eternal promise.',
        },
        {
          kind: 'reflection',
          id: 'ps89-covenant',
          prompt: 'God has made promises to you through Christ. How do you hold onto those promises when your present circumstances seem to contradict them?',
        },
      ],
    },

    {
      ref: 'Psalm 89:38–52',
      title: 'The Rupture and the Question',
      blocks: [
        {
          kind: 'scripture',
          chapter: 89,
          lines: [
            plain(38, 'But thou hast cast off and abhorred, thou hast been wroth with thine anointed.'),
            plain(39, 'Thou hast made void the covenant of thy servant: thou hast profaned his crown by casting it to the ground.'),
            plain(40, 'Thou hast broken down all his hedges; thou hast brought his strong holds to ruin.'),
            plain(41, 'All that pass by the way spoil him: he is a reproach to his neighbours.'),
            plain(46, 'How long, Lord? wilt thou hide thyself for ever? shall thy wrath burn like fire?'),
            plain(47, 'Remember how short my time is: wherefore hast thou made all men in vain?'),
            plain(49, 'Lord, where are thy former mercies, which thou swarest unto David in thy truth?'),
            plain(50, 'Remember, Lord, the reproach of thy servants; how I do bear in my bosom the reproach of all the mighty people;'),
            plain(51, 'Wherewith thine enemies have reproached, O Lord; wherewith they have reproached the footsteps of thine anointed.'),
            plain(52, 'Blessed be the Lord for evermore. Amen, and Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps89-cast-off',
          html:
            'Here is the rupture. The covenant seems broken. David&apos;s throne has fallen. His crown has been cast to the ground. Everything promised seems undone. The psalmist does not hide this contradiction. He names it directly. God has sworn an eternal covenant. Yet the covenant appears to have been broken.',
        },
        {
          kind: 'commentary',
          id: 'ps89-how-long',
          html:
            '"How long, Lord?" This is the cry of one caught between promise and present suffering. The promise is real. The suffering is real. How can both be true? The psalm does not resolve this tension with explanation. Instead, it ends with a doxology: "Blessed be the Lord for evermore." Faith persists not because the tension is resolved but because God Himself is trustworthy.',
        },
        {
          kind: 'christ',
          id: 'ps89-christ-king',
          title: 'Christ Connection — The Davidic King',
          html:
            'In Matthew 1, Jesus is called "Jesus Christ, the son of David." The angel tells Mary: "The Lord God shall give unto him the throne of his father David" (Luke 1:32). Christ is the ultimate fulfillment of God&apos;s covenant with David. His throne is eternal. His kingdom will never fall. What seemed broken in David&apos;s line is restored and made permanent in Christ.',
        },
        {
          kind: 'carry',
          html:
            'This psalm acknowledges that faith is tested when circumstances contradict God&apos;s promises. But it also insists that the promise itself does not change because circumstances have changed. God&apos;s faithfulness is not dependent on whether we feel faithful in return.',
        },
        {
          kind: 'reflection',
          id: 'ps89-former-mercies',
          prompt: 'Have you experienced a season when God&apos;s promises seemed contradicted by your circumstances? How did you hold onto them?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I have made a covenant with my chosen, I have sworn unto David my servant: Thy seed will I establish for ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 89 · Study Guide',
  },

  hasHebrew: true,
};
