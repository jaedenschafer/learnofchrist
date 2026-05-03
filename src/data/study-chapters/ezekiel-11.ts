import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 11 — A New Heart and New Spirit
 *
 * In the midst of judgment, God speaks a promise: "I will give them one heart,
 * and I will put a new spirit within you." God will take the stony heart and
 * remove it. In its place will be a heart of flesh, responsive and tender. The
 * promise is stunning in its directness. God is not asking Israel to change. He
 * is promising to change them. The judgment is real, but so is the restoration.
 */
export const EZEKIEL_11: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 11,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 5 },
  intros: [
    'After the glory has departed, after the judgment has been announced, after the prophet has embodied the siege and the destruction, God speaks something unexpected. He speaks not of further punishment but of transformation. He speaks of a new heart. The people Israel, resistant and rebellious, stiff-hearted and stubborn, will not remain that way. God Himself will act within them. He will remove the heart of stone — the hard, unyielding, incapable-of-love heart — and give them a heart of flesh, responsive and alive. This is not something Israel must earn. This is something God will do. The judgment remains, but it is not the final word. The final word is transformation. The final word is hope.',
  ],

  sections: [
    {
      ref: 'Ezekiel 11:14–21',
      title: 'The Promise of the New Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(14, 'Again the word of the Lord came unto me, saying,'),
            plain(16, 'Therefore say, Thus saith the Lord God; Although I have cast them far off among the heathen, and although I have scattered them among the countries, yet will I be to them as a little sanctuary in the countries where they shall come.'),
            plain(17, 'Therefore say, Thus saith the Lord God; I will even gather you from the people, and assemble you out of the countries where ye have been scattered, and I will give you the land of Israel.'),
            plain(19, 'And I will give them one heart, and I will put a new spirit within you; and I will take the stony heart out of their flesh, and will give them an heart of flesh:'),
            plain(20, 'That they may walk in my statutes, and keep mine ordinances, and do them: and they shall be my people, and I will be their God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk11-scattered-sanctuary',
          html: 'Even scattered among the heathen, God will be a sanctuary to His people. Even in exile, where no temple stands, where they cannot make pilgrimage to Jerusalem, God will make Himself present. The promise moves through stages: first, God&apos;s presence with them in exile. Then, gathering. Then, restoration to the land. And finally, transformation of heart[res:babylonian-exile-context][res:sefaria-ezekiel-11].',
        },
        {
          kind: 'hebrew',
          id: 'ezk11-lev-basar',
          title: 'Lev Basar — "Heart of Flesh"',
          script: 'לֵב בָּשָׂר',
          translit: '<strong>Lev Basar</strong> · heart of flesh; responsive heart; heart capable of feeling and responding to God',
          description:
            'The contrast is visceral. A heart of stone is dead — hard, unyielding, incapable of response. A heart of flesh is alive — capable of feeling, responding, loving, grieving, repenting. God does not merely refine the stony heart. He removes it entirely and replaces it with something new.',
        },
        {
          kind: 'commentary',
          id: 'ezk11-transformed-obey',
          html: 'The purpose of the new heart is not arbitrary. It is specifically that they might walk in God&apos;s statutes, keep His ordinances, and do them. The new heart is not a reward for obedience. It is the gift that makes obedience possible. A heart of stone cannot obey. A heart of flesh can. God transforms His people so that they become capable of the very faithfulness He requires[res:tyre-archaeology].',
        },
        {
          kind: 'carry',
          html: 'We cannot change our own hearts. We cannot remove the hardness that years of resistance to God have built. We cannot make ourselves capable of the obedience God requires. But God can. God will. The promise of a new heart is not conditioned on our effort or our improvement. It is God&apos;s free gift, given to those who admit they cannot change themselves.',
        },
        {
          kind: 'reflection',
          id: 'ezk11-new-heart-willing',
          prompt: 'Where have you become hardened — toward God, toward people you love, toward the suffering of others? Are you willing to ask God to give you a new heart, to remove the stone and replace it with flesh? What would that transformation look like in your life?',
        },
      ],
    },

    {
      ref: 'Ezekiel 11:1–13',
      title: 'The Judgment of False Prophets',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(1, 'Moreover the spirit lifted me up, and brought me unto the east gate of the Lord&apos;s house, which looked eastward: and behold at the door of the gate five and twenty men; among whom I saw Jaazaniah the son of Azur, and Pelatiah the son of Benaiah, princes of the people.'),
            plain(2, 'Then said he unto me, Son of man, these are the men that devise mischief, and give wicked counsel in this city:'),
            plain(3, 'Which say, It is not near; let us build houses: this city is the caldron, and we be the flesh:'),
            plain(4, 'Therefore prophesy against them, prophesy, O son of man.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk11-false-counsel',
          html: 'The princes of the people are counseling the exiles: the judgment is not near. Build your houses. Settle in. This city is secure — it is like a caldron, and we are the meat within it, protected on all sides. This is false hope offered by false prophets. Ezekiel is commanded to prophesy against them. His message will contradict theirs. And it will be true.',
        },
        {
          kind: 'christ',
          id: 'ezk11-christ-true-prophet',
          title: 'Christ Connection — The True Word of God',
          html:
            'Christ speaks in contrast to false prophets. He does not comfort with lies. He does not prophesy ease and safety when the path ahead is hard. Instead, He tells the truth: "In the world ye shall have tribulation." But He also says: "But be of good cheer; I have overcome the world." His promise is not that following Him will be easy, but that He will be with us through everything, and that ultimately, His truth will prove true and every other word will be revealed as false.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world full of false counsel. We are told that safety lies in avoiding risk, that comfort is the goal, that the true word is the one that flatters us. But a true word, though it may be hard to hear, leads to life. A false word, however comforting, leads to death. The choice is between the comfort of lies and the challenge of truth. And the true word, though it demands everything, also promises everything.',
        },
        {
          kind: 'reflection',
          id: 'ezk11-truth-comfort',
          prompt: 'Where are you being offered comfort by lies? What truths are you resisting because they are hard to hear? Are you willing to choose truth over comfort?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: '"I will give them one heart, and I will put a new spirit within you." — Ezekiel 11:19',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 11 · Study Guide',
  },  resources: [
    {
      id: 'babylonian-exile-context',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Exile Context',
      url: 'https://www.britishmuseum.org/collection/object/W_Y_EA25091',
      description: 'Cuneiform and archaeological evidence of Babylon under Nebuchadnezzar.',
    },
    {
      id: 'tyre-archaeology',
      kind: 'archaeology',
      source: 'Israel Museum / ToposText',
      label: 'Tyre Archaeology (Ezek 26-28)',
      url: 'https://www.imj.org.il/en',
      description: 'Archaeological record of ancient Tyre, subject of Ezekiel&apos;s prophecies.',
    },
    {
      id: 'sefaria-ezekiel-11',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezekiel 11 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Ezekiel.11',
      description: 'The Hebrew text of Ezekiel 11 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
