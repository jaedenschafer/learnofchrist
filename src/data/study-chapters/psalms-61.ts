import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const PSALMS_61: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 61,

  estimatedMinutes: { 5: 1, 10: 4, 15: 5 },
  intros: [
    'David is at the end of the earth, far from his home, far from the house of God. His heart is overwhelmed. His strength is failing. And in this extremity, he cries out not for a comfortable refuge, but for a rock higher than himself. "Hear my cry, O God; attend unto my prayer. From the end of the earth will I cry unto thee, when my heart is overwhelmed: lead me to the rock that is higher than I."',
    'This is a prayer born of desperation transformed into faith. David is overwhelmed—the Hebrew suggests he is fainting, sinking, about to be overwhelmed by the waters of trouble. Yet in that moment of extremity, he sees what he truly needs: not a place to rest at his own level, but a rock higher than himself that he could never climb. Only God can lead him there. Only God can lift him to such a height. And that is where David asks to be taken.',
  ],

  sections: [
    {
      ref: 'Psalm 61:1–4',
      title: 'The Overwhelmed Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 61,
          lines: [
            plain(1, 'Hear my cry, O God; attend unto my prayer.'),
            plain(2, 'From the end of the earth will I cry unto thee, when my heart is overwhelmed: lead me to the rock that is higher than I.'),
            plain(3, 'For thou hast been a shelter for me, and a strong tower against the enemy.'),
            plain(4, 'I will abide in thy tabernacle for ever: I will trust in the covert of thy wings. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms61-overwhelmed',
          html: '"From the end of the earth will I cry unto thee, when my heart is overwhelmed." David locates himself at the edge of the known world, far from home, far from help. And his heart is overwhelmed. The Hebrew conveys the idea of being surrounded, of sinking, of being pressed in by enemies or circumstances. Yet even here, David cries out to God.',
        },
        {
          kind: 'hebrew',
          id: 'psalms61-tzur',
          title: 'Tzur — "Rock"',
          script: 'צוּר',
          translit: '<strong>Tzur</strong> · rock; stone; foundation; strength',
          description: 'The Hebrew tzur, rock, is a metaphor for God throughout Scripture. A rock is solid, unchanging, unshakeable. The rock that is "higher than I" is one that David cannot reach through his own effort—he must be lifted there.',
        },
        {
          kind: 'commentary',
          id: 'psalms61-shelter-tower',
          html: '"For thou hast been a shelter for me, and a strong tower against the enemy." David appeals to history. God has been his shelter. God has been his strong tower. This history of faithfulness becomes the basis for present confidence.',
        },
        {
          kind: 'commentary',
          id: 'psalms61-abide-tabernacle',
          html: '"I will abide in thy tabernacle for ever: I will trust in the covert of thy wings." David&apos;s desire is not merely to escape present danger, but to dwell eternally in God&apos;s house. He wants to abide in the tabernacle forever, to make his home in God&apos;s presence.',
        },
        {
          kind: 'christ',
          id: 'psalms61-christ-rock',
          title: 'Christ Connection — The Unshakeable Rock',
          html: 'Paul writes in 1 Corinthians 10:4 that "that Rock was Christ." Christ is the rock higher than we are, the foundation upon which faith stands, the shelter against all enemies. To be in Christ is to be lifted to a height we could never reach on our own.',
        },
        {
          kind: 'carry',
          html: 'Psalm 61 teaches that when we are overwhelmed, when we are at the end of our strength, when we are far from home and help seems impossible, we can cry out to God. We can ask Him to lead us to the rock higher than ourselves.',
        },
        {
          kind: 'reflection',
          id: 'psalms61-rock-higher',
          prompt: 'What does it mean to seek a rock higher than yourself? In what situation do you need to be lifted to a place you cannot reach on your own?',
        },
      ],
    },

    {
      ref: 'Psalm 61:5–8',
      title: 'Extended Days and Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 61,
          lines: [
            plain(5, 'For thou, O God, hast heard my vows: thou hast given me the heritage of those that fear thy name.'),
            plain(6, 'Thou wilt prolong the king&apos;s life: and his years shall be as many generations.'),
            plain(7, 'He shall abide before God for ever: O prepare mercy and truth, which may preserve him.'),
            plain(8, 'So will I sing praise unto thy name for ever, that I may daily perform my vows.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms61-heard-vows',
          html: '"For thou, O God, hast heard my vows: thou hast given me the heritage of those that fear thy name." David appeals again to history. God has heard his vows—his promises to serve God. And God has given him a heritage—an inheritance with those who fear God&apos;s name.',
        },
        {
          kind: 'commentary',
          id: 'psalms61-prolong-king',
          html: '"Thou wilt prolong the king&apos;s life: and his years shall be as many generations." David speaks of the king&apos;s life being prolonged. This suggests a confidence that his line will continue, that his dynasty will endure. God will preserve him for generations to come.',
        },
        {
          kind: 'commentary',
          id: 'psalms61-mercy-truth',
          html: '"O prepare mercy and truth, which may preserve him." Mercy and truth are the twin pillars of God&apos;s relationship with His people. Together, they preserve. David asks God to prepare these attributes to stand watch over him.',
        },
        {
          kind: 'commentary',
          id: 'psalms61-sing-praise',
          html: '"So will I sing praise unto thy name for ever, that I may daily perform my vows." David&apos;s response to God&apos;s faithfulness is to sing praise forever. Not once, but continuously. And this praise will be accompanied by action—daily performance of his vows.',
        },
        {
          kind: 'carry',
          html: 'Psalm 61 culminates in the assurance that when we are lifted to the rock higher than ourselves, when we dwell in God&apos;s presence, our lives are extended, our heritage is secured, and our deepest desire—to praise God forever—is fulfilled.',
        },
        {
          kind: 'reflection',
          id: 'psalms61-daily-vows',
          prompt: 'What vows have you made to God? How might you perform them daily? What would it mean to sing His praise forever?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'From the end of the earth will I cry unto thee, when my heart is overwhelmed: lead me to the rock that is higher than I.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 61 · Study Guide',
  },

  hasHebrew: true,
};
