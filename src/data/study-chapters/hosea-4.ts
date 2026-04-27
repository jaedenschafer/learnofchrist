import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Hosea 4 — "My People Are Destroyed for Lack of Knowledge"
 *
 * The Lord brings a charge against Israel: "Hear the word of the Lord, ye children
 * of Israel: for the Lord hath a controversy with the inhabitants of the land."
 * Israel has forsaken the knowledge of God. Without that knowledge, they wander
 * into idolatry and destruction. The solution is not law but relationship — knowing
 * God Himself.
 */
export const HOSEA_4: RichChapterContent = {
  bookSlug: 'hosea',
  bookName: 'Hosea',
  chapter: 4,

  intros: [
    'Hosea 4 opens with a legal charge. God brings a lawsuit against His people. Not for external violations alone, but for a deeper failure: they do not know Him. "My people are destroyed for lack of knowledge." This is the tragedy at the heart of Israel&apos;s unfaithfulness — not ignorance of law, but ignorance of God.',
    'The priests and prophets have become complicit in the destruction. They have multiplied transgression. They have forgotten the law of their God. And the people, having no knowledge of God, have become like cattle — wandering, without understanding, without guidance. The chapter calls Israel back, not to mere obedience, but to relationship.',
  ],

  bottomShare: {
    label: 'Share Hosea 4',
    quote:
      '"My people are destroyed for lack of knowledge." Israel&apos;s deepest problem is not external sin but a broken relationship with God. They no longer know Him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hosea 4 · Study Guide',
  },

  sections: [
    {
      ref: 'Hosea 4:1–3',
      title: 'The Lord&apos;s Controversy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'Hear the word of the Lord, ye children of Israel: for the Lord hath a controversy with the inhabitants of the land, because there is no truth, nor mercy, nor knowledge of God in the land.'),
            plain(2, 'By swearing, and lying, and killing, and stealing, and committing adultery, they break out, and blood toucheth blood.'),
            plain(3, 'Therefore shall the land mourn, and every one that dwelleth therein shall languish, with the beasts of the field, and with the fowls of heaven; yea, the fishes of the sea also shall be taken away.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea4-controversy',
          html:
            'God has a "controversy" with the inhabitants of the land. The word suggests a legal charge — God is bringing a case against Israel. But the foundation of the charge is not arbitrary law-breaking. It is the absence of three things: truth, mercy, and knowledge of God. These are not external requirements but the fruit of a living relationship. Without relationship with God, these virtues cannot flourish.',
        },
        {
          kind: 'carry',
          html:
            'Israel&apos;s sins flow from a broken relationship with God. She has lost the knowledge of Him. When we do not know God — when we have not encountered His truth, His mercy, His presence — we become people who lie, steal, kill, and commit adultery. The solution is not mere external reform but a renewed relationship.',
        },
        {
          kind: 'reflection',
          id: 'hosea4-know-god',
          prompt: 'Israel is destroyed for lack of knowledge of God. What would it mean for you to truly know God — not just know about Him, but to know Him?',
        },
      ],
    },

    {
      ref: 'Hosea 4:4–10',
      title: 'The Priests and Prophets',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(4, 'Yet let no man strive, nor reprove another: for thy people are as they that strive with the priest.'),
            plain(5, 'Therefore shalt thou fall in the day, and the prophet also shall fall with thee in the night; and I will destroy thy mother.'),
            plain(6, 'My people are destroyed for lack of knowledge: because thou hast rejected knowledge, I will also reject thee, that thou shalt be no priest to me: seeing thou hast forgotten the law of thy God, I will also forget thy children.'),
            {
              number: 7,
              spans: [
                t('As they were increased, so they sinned against me: therefore will I change their glory into shame.'),
              ],
            },
            plain(8, 'They eat up the sin of my people, and they set their heart on their iniquity.'),
            plain(9, 'And there shall be, like people, like priest: and I will punish them for their ways, and reward them for their doings.'),
            plain(10, 'For they shall eat, and not have enough: they shall commit whoredom, and shall not increase: because they have left off to take heed to the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea4-destroyed-knowledge',
          html:
            'The declaration "My people are destroyed for lack of knowledge" is one of the most profound statements in Scripture. The priests were meant to teach the people the law of God. Instead, they have forgotten that law themselves. They have rejected knowledge. As a result, God will reject them from the priesthood. The shepherd has abandoned the flock, and the flock wanders without guidance.',
        },
        {
          kind: 'hebrew',
          id: 'hosea4-daath',
          title: 'Daath — "Knowledge"',
          script: 'דַעַת',
          translit: '<strong>Daath</strong> · knowledge; understanding; intimate knowing',
          description:
            'The Hebrew "daath" is not mere intellectual knowledge but intimate, relational knowing. When God says Israel lacks "daath," He means they have lost the intimate relationship with Him that is the foundation of all right living.',
        },
        {
          kind: 'carry',
          html:
            'The priests have become complicit in Israel&apos;s destruction. They eat up the sin of the people — profiting from wickedness — and have forgotten the law of God themselves. In your own life, where are you abandoning knowledge? Where are you, like the priests, growing indifferent to God?',
        },
        {
          kind: 'reflection',
          id: 'hosea4-priests',
          prompt: 'The priests forgot the law of God and led the people astray. Who is teaching you about God? Are they drawing you closer to Him or away from Him?',
        },
      ],
    },

    {
      ref: 'Hosea 4:11–14',
      title: 'Whoredom and Wine',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 11,
              spans: [
                t('Whoredom and wine and '),
                hg('new wine take away the heart', 'hosea4-heart'),
                t('.'),
              ],
            },
            plain(12, 'My people ask counsel at their stocks, and their staff declareth unto them: for the spirit of whoredoms hath caused them to err, and they have gone a whoring from under their God.'),
            plain(13, 'They sacrifice upon the tops of the mountains, and burn incense upon the hills, under oaks and poplars and elms, because the shadow thereof is good: therefore your daughters shall commit whoredom, and your spouses shall commit adultery.'),
            plain(14, 'I will not punish your daughters when they commit whoredom, nor your spouses when they commit adultery: for themselves are separated with whores, and they sacrifice with harlots: therefore the people that doth not understand shall fall.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea4-heart',
          html:
            'Whoredom, wine, and new wine take away the heart — the capacity to know and love God. Israel has been numbed by indulgence and false worship. She asks counsel from wooden idols, consults with staffs that have no voice. The spirit of whoredoms — the pursuit of false lovers — has caused her to err and wander from under her God.',
        },
        {
          kind: 'carry',
          html:
            'What takes away your heart from God? What numbs you to His voice? The chapter suggests it is not just outright sin but the distractions of the world — the wine that clouds judgment, the pleasures that distance you from God, the idols you consult instead of the living Word.',
        },
        {
          kind: 'reflection',
          id: 'hosea4-heart-taken',
          prompt: 'Whoredom, wine, and indulgence take away the heart. What is taking away your heart from God? How will you return it to Him?',
        },
      ],
    },

    {
      ref: 'Hosea 4 · All',
      title: 'The Knowledge of God',
      blocks: [
        {
          kind: 'commentary',
          id: 'hosea4-knowledge',
          html:
            'At the heart of Hosea 4 is a distinction between knowing about God and knowing God. Israel has the law, the priests, the sacrificial system. But she has lost the knowledge of God Himself. This is why external obedience cannot save her. This is why laws and rules are not enough. What Israel needs — what all of us need — is to know God. Not as a system, not as a set of rules, but as the living God who desires relationship.',
        },
        {
          kind: 'christ',
          id: 'hosea4-christ-life',
          title: 'Christ Connection — Knowing Christ Is Life',
          html:
            'In the New Testament, Jesus reveals that eternal life is knowing God: "This is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent" (John 17:3). The knowledge of God that Hosea calls for is fulfilled in Christ. To know Christ is to know the Father. To abide in Christ is to be restored to the relationship God desires.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
