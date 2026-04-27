import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 98 — O Sing Unto the Lord a New Song
 *
 * "O sing unto the Lord a new song; for he hath done marvellous things." God&apos;s
 * salvation is not just for Israel, but for all the earth. "His right hand, and
 * his holy arm, hath gotten him the victory." Salvation is the result of God&apos;s
 * power and God&apos;s righteousness. "Make a joyful noise unto the Lord, all the
 * earth." All creation is invited to sing, to rejoice, to celebrate the mighty
 * acts of God.
 */
export const PSALMS_98: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 98,

  intros: [
    'Psalm 98 echoes Psalm 96: O sing unto the Lord a new song. But here the focus is more specific. What has the Lord done? He has done marvellous things. He has gotten Himself the victory. His right hand and His holy arm have accomplished salvation. Not through human power or human cleverness, but through God&apos;s own action. And all creation is invited to witness and rejoice.',
    'The psalm moves from God&apos;s salvation to the universal response: all the earth, the seas, the fields, the trees—all creation is invited to rejoice. This is an eschatological vision, a vision of the day when all creation will recognize and celebrate God&apos;s righteous rule.',
  ],

  sections: [
    {
      ref: 'Psalm 98:1–9',
      title: 'Make a Joyful Noise Unto the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 98,
          lines: [
            plain(1, 'O sing unto the Lord a new song; for he hath done marvellous things: his right hand, and his holy arm, hath gotten him the victory.'),
            plain(2, 'The Lord hath made known his salvation: his righteousness hath he openly shewed in the sight of the heathen.'),
            plain(3, 'He hath remembered his mercy and his truth toward the house of Israel: all the ends of the earth have seen the salvation of our God.'),
            plain(4, 'Make a joyful noise unto the Lord, all the earth: make a loud noise, and rejoice, and sing praises.'),
            plain(5, 'Sing unto the Lord with the harp; with the harp, and the voice of a psalm;'),
            plain(6, 'With trumpets and sound of a cornet: make a joyful noise before the King, the Lord.'),
            plain(7, 'Let the sea roar, and the fulness thereof; the world, and they that dwell therein.'),
            plain(8, 'Let the floods clap their hands: let the hills be joyful together'),
            plain(9, 'Before the Lord; for he cometh to judge the earth: with righteousness shall he judge the world, and the people with equity.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms98-marvelous-things',
          html: '"O sing unto the Lord a new song; for he hath done marvellous things." The new song is prompted by what God has done. His wondrous works. His salvation. His deliverance. There is something new to sing about because God has acted.',
        },
        {
          kind: 'commentary',
          id: 'psalms98-right-hand-victory',
          html: '"His right hand, and his holy arm, hath gotten him the victory." God has saved not through human agents alone, but through His own power. His right hand is His arm of strength. His holy arm is His arm of righteousness. Salvation is the result of God&apos;s own mighty action.',
        },
        {
          kind: 'commentary',
          id: 'psalms98-righteousness-shown',
          html: '"His righteousness hath he openly shewed in the sight of the heathen." God does not hide His righteousness. It is not secret knowledge for the initiated few. It is openly shown, visible to all peoples, to all the heathen. God&apos;s righteous character is revealed through His works.',
        },
        {
          kind: 'commentary',
          id: 'psalms98-all-earth-joyful',
          html: '"Make a joyful noise unto the Lord, all the earth: make a loud noise, and rejoice, and sing praises." The invitation expands. Not just the faithful, but all the earth. Not just humans, but all creation is invited to rejoice. The sea, the floods, the hills—all are summoned to participate in the celebration of God&apos;s righteous reign.',
        },
        {
          kind: 'commentary',
          id: 'psalms98-judge-equity',
          html: '"With righteousness shall he judge the world, and the people with equity." The vision moves to the future. God comes as judge. Not a harsh judge, but a righteous one. Equity—fairness, justice—will characterize His judgment. The God who has saved will also judge with perfect justice.',
        },
        {
          kind: 'carry',
          html: 'Psalm 98 invites us to see our personal salvation as part of a larger, cosmic story. God&apos;s righteous acts are not private. They are meant to be proclaimed, celebrated, witnessed by all. And in the end, all creation will recognize and rejoice in God&apos;s righteous reign.',
        },
        {
          kind: 'reflection',
          id: 'psalms98-salvation-revealed',
          prompt: 'How has God&apos;s salvation been revealed in your own life? How might you make that a joyful noise, shared with those around you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O sing unto the Lord a new song; for he hath done marvellous things...Make a joyful noise unto the Lord, all the earth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 98 · Study Guide',
  },

  hasHebrew: false,
};
