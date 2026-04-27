import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Corinthians 1 — God of All Comfort
 *
 * Paul has been through tribulation—so much affliction that he despaired of life
 * itself. Yet God comforted him. Now Paul writes to the Corinthians about the God
 * who comforts us in all our afflictions, so that we may comfort others with the
 * comfort we have received. Suffering, properly understood, becomes a gateway to
 * deeper ministry.
 */
export const SECOND_CORINTHIANS_1: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 1,

  intros: [
    'Paul opens his second letter to the Corinthians from a place of deep suffering. He has experienced affliction so severe that he despaired even of living. But in that darkness, he encountered God&apos;s comfort. Now he writes not to hide his weakness but to expose it, knowing that his weakness becomes the occasion for others to see God&apos;s strength.',
    'The theme of 2 Corinthians is weakness as the gateway to power. Paul&apos;s ministry, his struggles, his afflictions—all these are not obstacles to overcome, but the very medium through which God&apos;s grace works. When Paul is weak, Christ is strong.',
  ],

  sections: [
    {
      ref: '2 Corinthians 1:1–7',
      title: 'The God of All Comfort',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(3, 'Blessed be God, even the Father of our Lord Jesus Christ, the Father of mercies, and the God of all comfort;'),
            plain(4, 'Who comforteth us in all our tribulation, that we may be able to comfort them which are in any trouble, by the comfort wherewith we ourselves are comforted of God.'),
            plain(5, 'For as the sufferings of Christ abound in us, so our consolation also aboundeth by Christ.'),
            plain(8, 'For we would not, brethren, have you ignorant of our trouble which came to us in Asia, that we were pressed out of measure, above strength, insomuch that we despaired even of life:'),
            plain(9, 'But we had the sentence of death in ourselves, that we should not trust in ourselves, but in God which raiseth the dead:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-1-comfort',
          html:
            'God is the &quot;Father of mercies, and the God of all comfort.&quot; This comfort is not shallow sympathy. It is the presence of God in the midst of tribulation. God does not remove our sufferings, but He meets us in them.',
        },
        {
          kind: 'greek',
          id: 'cor2-1-parakaleo',
          title: 'Parakaleo — To Comfort; To Encourage',
          script: 'παρακαλέω',
          translit: '<strong>Parakaleo</strong> · to comfort; to encourage; to exhort; to come alongside',
          description:
            'To parakaleo is to come alongside someone in their trouble. It is not to fix their problem or pretend it does not matter. It is to be present with them in the darkness.',
        },
        {
          kind: 'commentary',
          id: 'cor2-1-despair',
          html:
            'Paul speaks with striking honesty: &quot;We despaired even of life.&quot; This is not weakness hidden. This is vulnerability displayed. Why? So that we learn to trust not in ourselves, but in God who &quot;raiseth the dead.&quot;',
        },
        {
          kind: 'christ',
          id: 'cor2-1-christ-comfort',
          title: 'Christ Connection — Sufferings of Christ in Us',
          html:
            'Paul&apos;s sufferings are not accidental. They are &quot;sufferings of Christ.&quot; As Christ suffered, so His followers suffer. But as &quot;consolation also aboundeth by Christ,&quot; so too does our comfort abound.',
        },
        {
          kind: 'carry',
          html:
            'You may be in a season of affliction. Your instinct is to hide it, to present strength. But Paul invites you to a different path: let your affliction become a school of comfort. God will comfort you so that you can comfort others.',
        },
        {
          kind: 'reflection',
          id: 'cor2-1-comfort-others',
          prompt: 'What tribulation have you experienced? How has God comforted you in it? How might that comfort become a gift to others?',
        },
      ],
    },

    {
      ref: '2 Corinthians 1:12–24',
      title: 'Paul&apos;s Conduct and Promise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(12, 'For our rejoicing is this, the testimony of our conscience, that in simplicity and godly sincerity, not with fleshly wisdom, but by the grace of God, we have had our conversation in the world, and more abundantly to you-ward.'),
            plain(15, 'And in this confidence I was minded to come unto you before, that ye might have a second benefit;'),
            plain(19, 'For the Son of God, Jesus Christ, who was preached among you by us, even by me and Silvanus and Timotheus, was not yea and nay, but in him was yea.'),
            plain(20, 'For all the promises of God in him are yea, and in him Amen, unto the glory of God by us.'),
            plain(22, 'Who hath also sealed us, and given the earnest of the Spirit in our hearts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-1-sincerity',
          html:
            'Paul defends his conduct: he has lived in &quot;simplicity and godly sincerity.&quot; Not with &quot;fleshly wisdom&quot;—calculated, self-interested—but by God&apos;s grace. His life is an open book. His conscience testifies to his integrity.',
        },
        {
          kind: 'greek',
          id: 'cor2-1-eilikrineia',
          title: 'Eilikrineia — Sincerity',
          script: 'εἱλικρίνεια',
          translit: '<strong>Eilikrineia</strong> · sincerity; purity; genuineness',
          description:
            'Eilikrineia suggests something &quot;tested by sunlight,&quot; shown to be genuine. Paul&apos;s sincerity is not claimed. It can be tested. It can be seen.',
        },
        {
          kind: 'commentary',
          id: 'cor2-1-yea',
          html:
            'In Christ, &quot;yea and nay&quot; are reconciled. God&apos;s promises are not equivocal. &quot;All the promises of God in him are yea.&quot; What God has promised, He will perform. This is the ground of confidence.',
        },
        {
          kind: 'christ',
          id: 'cor2-1-christ-yea',
          title: 'Christ Connection — Christ Is the Yes to God&apos;s Promises',
          html:
            'In Christ, every promise of God finds its fulfillment. He is the culmination of Scripture, the answer to every longing, the embodiment of God&apos;s faithfulness.',
        },
        {
          kind: 'carry',
          html:
            'Live with integrity. Let your life be marked by sincerity and godly conduct. Not so that others praise you, but so that your life bears testimony to the reality of God in you. Let your conduct declare: God is faithful.',
        },
        {
          kind: 'reflection',
          id: 'cor2-1-sealed',
          prompt: 'What does it mean to be &quot;sealed&quot; by God and given &quot;the earnest of the Spirit&quot;? How does this change your sense of security and identity?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Blessed be God, even the Father of our Lord Jesus Christ, the Father of mercies, and the God of all comfort.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 1 · Study Guide',
  },

  hasHebrew: false,
};
