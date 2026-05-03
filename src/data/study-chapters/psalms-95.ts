import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 95 — O Come, Let Us Sing Unto the Lord
 *
 * "O come, let us sing unto the Lord: let us make a joyful noise to the rock
 * of our salvation." An invitation to worship. Yet the tone shifts: "To day if
 * ye will hear his voice, harden not your heart." The psalm, quoted in Hebrews
 * 3-4, becomes a warning to those who hear God&apos;s call. Hear His voice. Do
 * not harden your heart. Enter His rest. For those who reject His call suffer
 * the consequence—wandering in the wilderness, never entering the rest He offers.
 */
export const PSALMS_95: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 95,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Psalm 95 begins with joy and celebration. Come, let us sing to the Lord. Make a joyful noise. He is the rock of our salvation, the God of Jacob. But then the tone shifts. "To day if ye will hear his voice, harden not your heart." The present moment is the critical moment. Today, if you hear His voice. Do not delay. Do not resist. Do not harden your heart against the call of God.',
    'The psalm alludes to the wilderness wandering, when Israel rebelled against God and never entered His promised rest. The connection is made explicit in Hebrews: those who hear God&apos;s voice and refuse to believe remain outside the rest God offers. Hearing is not passive. Hearing demands a response. It demands that we soften our hearts, that we believe, that we enter the rest God is offering us.',
  ],

  sections: [
    {
      ref: 'Psalm 95:1–7a',
      title: 'O Come, Let Us Sing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 95,
          lines: [
            plain(1, 'O come, let us sing unto the Lord: let us make a joyful noise to the rock of our salvation.'),
            plain(2, 'Let us come before his presence with thanksgiving, and make a joyful noise unto him with psalms.'),
            plain(3, 'For the Lord is a great God, and a great King above all gods.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-95-78mid-1',
          html:
            'The psalm turns here. The verses ahead are not the same key as the ones behind; the camera has moved.',
        },
        {
          kind: 'scripture',
          chapter: 95,
          lines: [
            plain(4, 'In his hand are the deep places of the earth: the strength of the hills is his also.'),
            plain(5, 'The sea is his, and he made it: and his hands formed the dry land.'),
            plain(6, 'O come, let us bow down and worship: let us kneel before the Lord our maker.'),
            plain(7, 'For he is our God; and we are the people of his pasture, and the sheep of his hand.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms95-come-sing',
          html: '"O come, let us sing unto the Lord: let us make a joyful noise to the rock of our salvation." The invitation is warm and inviting. Come. Join in. Sing. Make a joyful noise. Worship is not a burden; it is joy. It is the proper response to the God who is our rock, our salvation.',
        },
        {
          kind: 'commentary',
          id: 'psalms95-great-king',
          html: '"For the Lord is a great God, and a great King above all gods." The God we worship is not just one among many. He is the great God. He is the great King above all gods. There is no competition. There is no question of His supremacy.',
        },
        {
          kind: 'commentary',
          id: 'psalms95-all-made',
          html: '"In his hand are the deep places of the earth...The sea is his, and he made it: and his hands formed the dry land." Creation is in God&apos;s hand. He has made it all. The earth and all it contains belong to Him. We worship not an abstraction, but the God who created and sustains all things.',
        },
        {
          kind: 'commentary',
          id: 'psalms95-maker',
          html: '"Let us kneel before the Lord our maker." Kneeling is the posture of submission, of reverence, of acknowledgment that we are creatures and He is God. We come before Him not as equals, but as those who recognize the vast distance between creature and Creator.',
        },
        {
          kind: 'carry',
          html: 'The first half of Psalm 95 invites us into a pure joy—the joy of recognizing God&apos;s greatness and our place as His people. It is the joy of worship, of making a joyful noise, of coming before His presence with thanksgiving.',
        },
        {
          kind: 'reflection',
          id: 'psalms95-joyful-worship',
          prompt: 'When was the last time you made a joyful noise before God? What would it take to recapture that joy in your worship?',
        },
      ],
    },
    {
      ref: 'Psalm 95:7b–11',
      title: 'If Ye Will Hear His Voice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 95,
          lines: [
            plain(7, 'To day if ye will hear his voice, harden not your heart,'),
            plain(8, 'As in the provocation, and as in the day of temptation in the wilderness:'),
            plain(9, 'When your fathers tempted me, proved me, and saw my work.'),
            plain(10, 'Forty years long was I grieved with this generation, and said, It is a people that do err in their heart: for they have not known my ways.'),
            plain(11, 'Unto whom I sware in my wrath, That they should not enter into my rest.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms95-hear-voice',
          html: '"To day if ye will hear his voice, harden not your heart." The moment shifts. From invitation to call. From celebration to urgency. Today—not tomorrow, not someday—today if you hear God&apos;s voice, do not harden your heart. Respond. Believe. Do not resist.',
        },
        {
          kind: 'commentary',
          id: 'psalms95-provocation',
          html: '"As in the provocation, and as in the day of temptation in the wilderness." The psalmist alludes to the rebellion of Israel in the wilderness. They heard God&apos;s voice. They saw His works. And yet they hardened their hearts. They did not believe. They rebelled.',
        },
        {
          kind: 'commentary',
          id: 'psalms95-error-heart',
          html: '"It is a people that do err in their heart: for they have not known my ways." The error was not of the head, but of the heart. They had not truly known God&apos;s ways. They had not trusted Him. They had not believed His promise.',
        },
        {
          kind: 'commentary',
          id: 'psalms95-not-enter-rest',
          html: '"Unto whom I sware in my wrath, That they should not enter into my rest." The consequence is severe. Those who harden their hearts against God do not enter His rest. They remain outside. They wander.',
        },
        {
          kind: 'christ',
          id: 'psalms95-christ-rest',
          title: 'Christ Connection — Enter His Rest Through Christ',
          html: 'The Letter to the Hebrews makes this explicit: Christ is the one who calls us to enter God&apos;s rest. He alone has power to soften our hearts, to give us faith, to bring us from the wilderness of doubt into the rest of God. Hearing His voice is the way in. Not hardening our hearts is how we respond. Believing is how we enter. And the promise is not for someday, but for today. Now. This moment. His call is present. Our response is needed now.',
        },
        {
          kind: 'carry',
          html: 'Psalm 95 warns us against the greatest spiritual danger: the hardened heart. It is possible to hear God&apos;s voice and refuse it. It is possible to see His works and not believe. It is possible to decline His invitation to rest. The psalm invites us instead to soften our hearts now, to hear His voice now, to enter His rest now.',
        },
        {
          kind: 'reflection',
          id: 'psalms95-harden-heart',
          prompt: 'Where has your heart hardened against God&apos;s voice? What would it take to soften it today and step into the rest He&apos;s offering?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O come, let us sing unto the Lord...To day if ye will hear his voice, harden not your heart.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 95 · Study Guide',
  },

  hasHebrew: false,
};
