import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 134 — Bless Ye the Lord
 *
 * "Behold, bless ye the Lord, all ye servants of the Lord, which by night stand in the house of the Lord."
 * A brief closing song of the Songs of Ascents (Psalms 120–134).
 * Night-watchers in the temple bless the Lord.
 * "Lift up your hands in the sanctuary, and bless the Lord."
 * Christ connection: the night-watch of faith; the endless praise
 * offered before the throne of God; Christ as the eternal high priest
 * who stands in the heavenly sanctuary.
 */
export const PSALMS_134: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 134,

  estimatedMinutes: { 5: 1, 10: 3, 15: 4 },
  intros: [
    'Psalm 134 brings the fifteen Songs of Ascents to a close with a vision of night-watchers in the house of the Lord, standing in the darkness, lifting their hands in blessing. While others sleep, these servants keep vigil. They stand in the sanctuary through the long night, their hands raised in praise and adoration. The psalm is brief—only three verses—but its image endures: faith expressed not when it is easy and surrounded by support, but when it is costly, when darkness prevails, when few others are watching. Yet from the darkness comes blessing. The night-watch becomes the occasion for the most intimate communion with God.',
  ],

  sections: [
    {
      ref: 'Psalm 134:1–3',
      title: 'The Night Watch of Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 134,
          lines: [
            plain(1, 'Behold, bless ye the Lord, all ye servants of the Lord, which by night stand in the house of the Lord.'),
            plain(2, 'Lift up your hands in the sanctuary, and bless the Lord.'),
            plain(3, 'The Lord that made heaven and earth bless thee out of Zion.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps134-watchers',
          html:
            'The servants who stand in the house of the Lord by night are not merely present. They are conscious of their role. They are there on purpose. While the city sleeps, while darkness covers the land, these few stand in the sanctuary. The night is not a time of absence from God. It is a time of special vigil, special watchfulness, special connection. The darkness that hides others from God\'s house opens a door for the watchers who choose to keep the vigil.',
        },
        {
          kind: 'commentary',
          id: 'ps134-hands',
          html:
            '"Lift up your hands in the sanctuary, and bless the Lord." Hands lifted in the darkness—a gesture of surrender, of praise, of offering. The hands are empty. They have nothing to bring but themselves. Yet this emptiness is the condition of true blessing. To bless the Lord is to acknowledge His worth, to declare His greatness, to give Him honor that costs nothing but the willingness to stand in the darkness and give Him praise.',
        },
        {
          kind: 'commentary',
          id: 'ps134-response',
          html:
            'And then the response: "The Lord that made heaven and earth bless thee out of Zion." The Creator who made all things—heaven and earth—blesses the night-watchers. Not because they have earned a reward through their service, but because they have positioned themselves to receive His blessing. Their vigil, their watchfulness, their willingness to stand in the darkness becomes the condition through which God&apos;s blessing flows toward them.',
        },
        {
          kind: 'christ',
          id: 'ps134-christ-priest',
          title: 'Christ Connection — The Eternal Night Watch',
          html:
            'Hebrews 7:25 declares that Christ, as our eternal high priest, "ever liveth to make intercession for us." Even now, Christ stands in the heavenly sanctuary, making intercession, blessing us before the Father. In a sense, Christ is the eternal night-watcher, keeping vigil on our behalf, standing in the presence of God with hands lifted in blessing for all who believe in Him. Those who follow Him are invited to join that night-watch, offering their own praise and intercession in union with His.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 134 speaks to the power of faith expressed in darkness, in difficulty, when few are watching, when the cost is high. It tells you that your night-watch—your faithfulness in prayer when it is not easy, your praise when circumstances do not warrant it, your blessing of the Lord in the midst of suffering—is seen by Him. And from the darkness, from your raised hands, flows His blessing toward you and toward others.',
        },
        {
          kind: 'reflection',
          id: 'ps134-vigil',
          prompt:
            'Where in your life are you called to keep vigil? To stand and bless when others sleep? To lift your hands in the darkness? What would change if you recognized that this night-watch is not futile, but the very condition through which God&apos;s blessing flows? How might that reframe your understanding of difficulty or isolation?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Bless ye the Lord, all ye servants of the Lord, which by night stand in the house of the Lord. Lift up your hands in the sanctuary, and bless the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 134 · Study Guide',
  },
};
