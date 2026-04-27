import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 100 — Make a Joyful Noise Unto the Lord
 *
 * "Make a joyful noise unto the Lord, all ye lands. Serve the Lord with
 * gladness...Enter into his gates with thanksgiving...For the Lord is good;
 * his mercy is everlasting; and his truth endureth to all generations." The
 * psalter closes with pure, uncomplicated joy. Not the resolved joy that comes
 * after struggle, but the fundamental joy of those who recognize that the Lord
 * is good, that His mercy is endless, that His truth endures forever. Enter
 * through the gate—that is Christ. And enter with thanksgiving.
 */
export const PSALMS_100: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 100,

  intros: [
    'Psalm 100 is the psalmist&apos;s final word—the conclusion and summary of all that has come before. It is a psalm of pure thanksgiving and joy. Make a joyful noise. Serve with gladness. Come before His presence with singing. Come into His gates with thanksgiving. All creation is invited. All peoples. The language is simple, the emotion is clear, the message is undeniable: the Lord is good. His mercy is everlasting. His truth endures to all generations.',
    'This is not complicated theology. It is not the cry of the suffering or the lament of the abandoned. It is the song of those who have journeyed through all the complex emotions of the psalter and arrived at a simple, profound truth: the Lord is good. And that goodness is the foundation upon which all gratitude rests.',
  ],

  sections: [
    {
      ref: 'Psalm 100:1–5',
      title: 'Make a Joyful Noise Unto the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 100,
          lines: [
            plain(1, 'Make a joyful noise unto the Lord, all ye lands.'),
            plain(2, 'Serve the Lord with gladness: come before his presence with singing.'),
            plain(3, 'Know ye that the Lord he is God: it is he that hath made us, and not we ourselves; we are his people, and the sheep of his pasture.'),
            plain(4, 'Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.'),
            plain(5, 'For the Lord is good; his mercy is everlasting; and his truth endureth to all generations.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms100-joyful-noise',
          html: '"Make a joyful noise unto the Lord, all ye lands." The final psalm opens with joy, unmediated, unqualified, universal. All peoples, all lands, all creation—make a joyful noise. This is the invitation at the end of the psalter. Not to be silent or withdrawn, but to make noise. To celebrate. To rejoice.',
        },
        {
          kind: 'commentary',
          id: 'psalms100-serve-gladness',
          html: '"Serve the Lord with gladness: come before his presence with singing." Service is not burden. Worship is not obligation or grim duty. It is gladness. It is singing. It is the joy of those who know to whom they belong and who are grateful for that belonging.',
        },
        {
          kind: 'commentary',
          id: 'psalms100-made-us',
          html: '"Know ye that the Lord he is God: it is he that hath made us, and not we ourselves; we are his people, and the sheep of his pasture." The foundation is clear. The Lord is God. He has made us. We are not self-created or self-sustaining. We belong to Him. We are His people. We are cared for as the shepherd cares for his flock.',
        },
        {
          kind: 'commentary',
          id: 'psalms100-enter-gates',
          html: '"Enter into his gates with thanksgiving, and into his courts with praise." The movement is from the outer gate to the inner court—drawing closer to God, entering His presence. And the manner of entry is thanksgiving and praise. Not with empty hands or arrogant demands, but with gratitude and blessing on the lips.',
        },
        {
          kind: 'commentary',
          id: 'psalms100-good-mercy-everlasting',
          html: '"For the Lord is good; his mercy is everlasting; and his truth endureth to all generations." These are the bedrock truths. The Lord is good. Not harsh, not distant, not uncaring, but good. His mercy is not temporary or conditional. It is everlasting. And His truth—His faithfulness to His word—endures to all generations. Every generation has experienced His mercy. Every generation will continue to experience it.',
        },
        {
          kind: 'christ',
          id: 'psalms100-christ-door',
          title: 'Christ Connection — Christ the Door Into God&apos;s Courts',
          html: 'Christ is the gate through which we enter. He is the door, as He Himself proclaims. To enter His courts is to come through Christ, through His sacrifice, through His redemption. The thanksgiving and praise we bring are made possible by what He has done. And the goodness we celebrate, the mercy we experience, the truth we trust—all of it flows through Christ, the Mediator between God and humanity.',
        },
        {
          kind: 'carry',
          html: 'Psalm 100 is the psalter&apos;s final word to us: Make a joyful noise. Do not be silent about God&apos;s goodness. Do not suppress your gratitude. Let the whole earth know that the Lord is good. Let all generations hear that His mercy is everlasting. This is the concluding message—not a complicated theology, but a simple, profound truth: the Lord is good. Be grateful. Be glad. Make a joyful noise.',
        },
        {
          kind: 'reflection',
          id: 'psalms100-joyful-thanksgiving',
          prompt: 'What would it mean for you to make a joyful noise, to serve the Lord with gladness? How might you enter His courts with thanksgiving today?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Make a joyful noise unto the Lord, all ye lands...Enter into his gates with thanksgiving...For the Lord is good; his mercy is everlasting.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 100 · Study Guide',
  },

  hasHebrew: false,
};
