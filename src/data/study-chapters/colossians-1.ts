import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Colossians 1 — Christ the Image of God; All Things Created by Him
 *
 * "Who is the image of the invisible God, the firstborn of every creature:
 * for by him were all things created, that are in heaven, and that are in
 * earth, visible and invisible, whether they be thrones, or dominions, or
 * principalities, or powers: all things were created by him, and for him."
 * Colossians opens with one of Scripture&apos;s most exalted Christologies.
 */
export const COLOSSIANS_1: RichChapterContent = {
  bookSlug: 'colossians',
  bookName: 'Colossians',
  chapter: 1,

  intros: [
    'Colossians was written to counter false teachers who had crept into the church, teaching that Christ needed to be supplemented by angelic powers, spiritual disciplines, and ascetic practices. Paul&apos;s response is radical: Christ is all-sufficient. He is the image of God. He created all things. He holds all things together. He is the head of the body. Christ in you is the hope of glory.',
    'This is not mere theological assertion. It is a call to liberation. If Christ is sufficient, then all the false demands and fears promoted by false teachers are irrelevant. The believer is freed to focus on what matters: Christ in you.',
  ],

  bottomShare: {
    label: 'Share Colossians 1',
    quote:
      'Christ is the image of the invisible God, the firstborn of all creation. By Him all things were created and hold together. Christ in you is the hope of glory.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Colossians 1 · Study Guide',
  },

  sections: [
    /* ─── Colossians 1:1–23 — Christ the Preeminent One ────────────────────── */
    {
      ref: 'Colossians 1:1–23',
      title: 'Christ Supreme Over All',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 15,
              spans: [
                t('Who is the '),
                hp('image of the invisible God', 'c1-image'),
                t(', the firstborn of every creature:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('For by him were '),
                hg('all things created, that are in heaven, and that are in earth, visible and invisible', 'c1-created'),
                t(', whether they be thrones, or dominions, or principalities, or powers: all things were created by him, and for him:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And he is before all things, and by him all things '),
                hy('consist', 'c1-consist'),
                t('.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And he is the head of the body, the church: who is the beginning, the firstborn from the dead; that in all things he might have the preeminence.'),
              ],
            },
            plain(19, 'For it pleased the Father that in him should all fulness dwell;'),
            {
              number: 20,
              spans: [
                t('And, having made peace through the blood of his cross, by him to reconcile all things unto himself; by him, I say, whether they be things in earth, or things in heaven.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-image',
          html:
            '"The image of the invisible God." Christ is not merely a representation of God. He is the image—the full, authentic expression of who God is. To see Christ is to see God. To know Christ is to know God&apos;s nature, God&apos;s character, God&apos;s heart.',
        },
        {
          kind: 'commentary',
          id: 'c1-created',
          html:
            '"By him were all things created...visible and invisible." The list—thrones, dominions, principalities, powers—likely refers to spiritual beings. Paul&apos;s point is totalizing: nothing exists outside Christ&apos;s creative agency. The angelic powers that the false teachers tried to invoke are themselves creatures, dependent on Christ.',
        },
        {
          kind: 'commentary',
          id: 'c1-consist',
          html:
            '"By him all things consist." The Greek word means to hold together, to maintain cohesion. Christ is not only the creator but the sustainer. The universe is held together by His power. Reality depends on His constant activity.',
        },
        {
          kind: 'greek',
          id: 'c1-eikon',
          title: 'Eikon — "Image"',
          script: 'εἰκών',
          translit: '<strong>Eikon</strong> · image; likeness; representation; manifestation',
          description:
            'An eikon is not a crude picture but a true expression of the thing itself. When Paul says Christ is the eikon of God, he means Christ is the full, authentic revelation of God&apos;s nature and character.',
        },
        {
          kind: 'christ',
          id: 'c1-christ-cosmos',
          title: 'Christ Connection — Lord of the Cosmos',
          html:
            'Christ created all things and holds all things together. This is cosmic lordship. It means that no power—spiritual or temporal—stands outside His authority. For believers, this means liberation: fear of angelic powers, of cosmic forces, of fate itself—all of it is groundless. Christ is Lord.',
        },
        {
          kind: 'carry',
          html:
            'You are surrounded by a universe held together by Christ. Nothing exists that does not depend on His power. Nothing can happen that is outside His knowledge. This is not tyranny but the foundation of ultimate security. You can trust Christ with your life because He is trustworthy enough to hold the cosmos together.',
        },
        {
          kind: 'reflection',
          id: 'c1-image-reflect',
          prompt: 'Christ is the image of the invisible God and holds all things together. What would it mean to trust Him more completely in your life?',
        },
      ],
    },

    /* ─── Colossians 1:24–29 — Paul's Stewardship; Christ in You ───────────── */
    {
      ref: 'Colossians 1:24–29',
      title: 'The Mystery Revealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 27,
              spans: [
                t('To whom God would make known what is the riches of the glory of this mystery among the Gentiles; which is '),
                hp('Christ in you, the hope of glory', 'c1-mystery'),
                t(':'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Whom we preach, warning every man, and teaching every man in all wisdom; that we may present every man perfect in Christ Jesus:'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Whereunto I also labour, striving according to his working, which worketh in me '),
                hy('mightily', 'c1-work'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-mystery',
          html:
            '"Christ in you, the hope of glory." This is the central mystery of the gospel: that the infinite God indwells finite believers. Not as external judge or distant ruler, but as inner presence. And this indwelling is "the hope of glory"—the guarantee of resurrection and transformation.',
        },
        {
          kind: 'commentary',
          id: 'c1-work',
          html:
            '"His working, which worketh in me mightily." Paul&apos;s labor is not his own effort. It is Christ working through him. Paul cooperates with this working, but the power is Christ&apos;s. This is the pattern of all ministry: human cooperation with divine power.',
        },
        {
          kind: 'carry',
          html:
            'Christ is in you. This is not metaphor. This is the reality Paul preaches. Not merely the hope of being with Christ someday, but the presence of Christ now. This presence is "the hope of glory"—the assurance that you are being transformed and will be fully transformed at the resurrection.',
        },
        {
          kind: 'reflection',
          id: 'c1-christ-in-you',
          prompt: 'Christ in you is the hope of glory. Do you know His presence in you? How does it shape your hope?',
        },
      ],
    },
  ],
};
