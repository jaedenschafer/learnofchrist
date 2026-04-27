import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Hosea 2 — God Woos Unfaithful Israel Back
 *
 * God speaks to His people as a betrayed husband might: "I will allure her,
 * and bring her into the wilderness, and speak comfortably unto her." The
 * language shifts from judgment to longing. God strips away the lovers (the
 * idols) so that Israel might turn back. "Thou shalt call me Ishi, not Baali."
 * The covenant is broken, but it will be renewed.
 */
export const HOSEA_2: RichChapterContent = {
  bookSlug: 'hosea',
  bookName: 'Hosea',
  chapter: 2,

  intros: [
    'In Hosea 2, the tone shifts from judgment to passionate pursuit. God is not done with His people. Even as He announces their punishment, He is already planning their restoration. He will strip away their false lovers so they turn back to Him. He will speak to them tenderly in the wilderness. The God of Hosea is not indifferent. He is jealous — not with a small spirit, but with the intensity of a lover who cannot let go.',
    'The language becomes intimate. God will "allure" Israel, speak "comfortably" to her. The wilderness becomes not a place of abandonment but of courtship. And in that wilderness, Israel will recognize her true husband. "Thou shalt call me Ishi, not Baali." She will stop calling God "Master" and call Him "My Husband." The covenant is being remade.',
  ],

  bottomShare: {
    label: 'Share Hosea 2',
    quote:
      'God woos unfaithful Israel back: "I will allure her, and bring her into the wilderness, and speak comfortably unto her." The God of Hosea pursues His unfaithful people with covenant love.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hosea 2 · Study Guide',
  },

  sections: [
    {
      ref: 'Hosea 2:1–5',
      title: 'Stripping Away the Lovers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'Say ye unto your brethren, Ammi; and to your sisters, Ruhamah.'),
            plain(2, 'Plead with your mother, plead: for she is not my wife, neither am I her husband: let her therefore put away her whoredoms out of her sight, and her adulteries from between her breasts;'),
            {
              number: 3,
              spans: [
                t('Lest I strip her naked, and set her as in the day that she was born, and make her as a wilderness, and set her like a dry land, and '),
                hg('slay her with thirst', 'hosea2-thirst'),
                t('.'),
              ],
            },
            plain(4, 'And I will not have mercy upon her children; for they be the children of whoredoms.'),
            {
              number: 5,
              spans: [
                t('For their mother hath played the harlot: she that conceived them hath done shamefully: for she said, '),
                hy('I will go after my lovers, that give me my bread and my water, my wool and my flax, mine oil and my drink', 'hosea2-lovers'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea2-thirst',
          html:
            'God threatens to strip Israel naked and make her a wilderness, to slay her with thirst. This is not empty threat. This is the consequence of abandoning the covenant. Israel has sought sustenance from false gods — bread, water, wool, flax, oil, drink — all things she thought the Baals provided. God will strip these away. She will be left in the desert, parched, with nowhere to turn but back to the God she abandoned.',
        },
        {
          kind: 'commentary',
          id: 'hosea2-lovers',
          html:
            'Israel says, "I will go after my lovers, that give me my bread and my water, my wool and my flax." She credits the false gods with her provision. She does not see that it was God who gave her the grain and the wine. She runs after Baals, fertility deities, imagining they sustain her. This is the blindness of idolatry: to receive every good thing from God and attribute it to demons.',
        },
        {
          kind: 'hebrew',
          id: 'hosea2-znut',
          title: 'Zenunut — "Harlotry" or "Unfaithfulness"',
          script: 'זְנוּת',
          translit: '<strong>Zenunut</strong> · harlotry; unfaithfulness; idolatry',
          description:
            'The word "zenunut" is the root of judgment throughout Hosea. It means both literal harlotry and spiritual unfaithfulness — the breaking of covenant. When Israel turns to idols, she commits zenunut against God.',
        },
        {
          kind: 'carry',
          html:
            'Israel chases lovers for provision and does not realize her true Provider is the God she abandoned. In your own life, what false lovers do you chase — what do you look to for security, for identity, for provision — that only God can truly give?',
        },
        {
          kind: 'reflection',
          id: 'hosea2-provision',
          prompt: 'Israel went after other lovers for bread and water, not seeing that God was her true source. What are you pursuing that you think will sustain you, that only God truly provides?',
        },
      ],
    },

    {
      ref: 'Hosea 2:6–13',
      title: 'The Allurement of the Wilderness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 6,
              spans: [
                t('Therefore, behold, I will '),
                hp('hedge up thy way with thorns, and make a wall, that she shall not find her paths', 'hosea2-hedge'),
                t('.'),
              ],
            },
            plain(7, 'And she shall follow after her lovers, but she shall not overtake them; and she shall seek them, but shall not find them: then shall she say, I will go and return to my first husband; for then was it better with me than now.'),
            {
              number: 8,
              spans: [
                t('For she did not know that I gave her corn, and wine, and oil, and '),
                hg('multiplied her silver and gold', 'hosea2-silver'),
                t(', which they prepared for Baal.'),
              ],
            },
            plain(9, 'Therefore will I return, and take away my corn in the time thereof, and my wine in the season thereof, and will recover my wool and my flax given to cover her nakedness.'),
            plain(10, 'And now will I discover her lewdness in the sight of her lovers, and none shall deliver her out of mine hand.'),
            plain(11, 'I will also cause all her mirth to cease, her feast days, her new moons, and her sabbaths, and all her solemn feasts.'),
            plain(12, 'And I will destroy her vines and her fig trees, whereof she hath said, These are my rewards that my lovers have given me: and I will make them a forest, and the beasts of the field shall eat them.'),
            plain(13, 'And I will visit upon her the days of Baalim, wherein she burned incense to them, and she decked herself with her earrings and her jewels, and she went after her lovers, and forgat me, saith the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea2-hedge',
          html:
            'God will hedge up Israel&apos;s way with thorns so she cannot find her paths. This is not cruelty. This is mercy. By making it impossible for her to reach her false lovers, God is turning her back toward Himself. She will follow after her lovers, but she will not overtake them. She will seek them, but she will not find them. And then, exhausted and empty, she will say, "I will go and return to my first husband."',
        },
        {
          kind: 'commentary',
          id: 'hosea2-silver',
          html:
            'God gave Israel corn, wine, oil, silver, and gold. She received every good thing from His hand. Yet she took those gifts and used them to prepare sacrifices for Baal. This is the tragedy of ingratitude: to be lavished with gifts and attribute them to demons.',
        },
        {
          kind: 'carry',
          html:
            'God will remove the provision to make Israel see that it was always from His hand. He will strip away the false security so she turns back. Sometimes God&apos;s judgment is an act of love — a hedge of thorns that keeps us from running away from the One who loves us.',
        },
        {
          kind: 'reflection',
          id: 'hosea2-hedge-reflection',
          prompt: 'When Israel pursued her false lovers, God hedged up her way with thorns. Has God ever blocked your path to something you thought you wanted, only to turn you toward something better?',
        },
      ],
    },

    {
      ref: 'Hosea 2:14–23',
      title: 'The Courtship in the Wilderness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 14,
              spans: [
                t('Therefore, behold, I will '),
                hp('allure her, and bring her into the wilderness, and speak comfortably unto her', 'hosea2-allure'),
                t('.'),
              ],
            },
            plain(15, 'And I will give her her vineyards from thence, and the valley of Achor for a door of hope: and she shall sing there, as in the days of her youth, and as in the day when she came up out of the land of Egypt.'),
            plain(16, 'And it shall be at that day, saith the Lord, that thou shalt call me Ishi; and shalt call me no more Baali.'),
            {
              number: 17,
              spans: [
                t('For I will take away the names of Baalim out of her mouth, and they shall no more be remembered by their names.'),
              ],
            },
            plain(18, 'And in that day will I make a covenant for them with the beasts of the field, and with the fowls of heaven, and with the creeping things of the ground: and I will break the bow and the sword and the battle out of the earth, and will make them to lie down safely.'),
            plain(19, 'And I will betroth thee unto me for ever; yea, I will betroth thee unto me in righteousness, and in judgment, and in lovingkindness, and in mercies.'),
            plain(20, 'I will even betroth thee unto me in faithfulness: and thou shalt know the Lord.'),
            plain(21, 'And it shall come to pass in that day, I will hear, saith the Lord, I will hear the heavens; and they shall hear the earth;'),
            plain(22, 'And the earth shall hear the corn, and the wine, and the oil; and they shall hear Jezreel.'),
            plain(23, 'And I will sow her unto me in the earth; and I will have mercy upon her that had not obtained mercy; and I will say to them which were not my people, Thou art my people; and they shall say, Thou art my God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea2-allure',
          html:
            'The tone transforms completely. God will "allure" Israel — the same word used in courtship. He will bring her into the wilderness, not to abandon her but to court her. And He will "speak comfortably unto her" — speak to her heart. The wilderness is not a place of punishment but a place of intimacy, where Israel will hear God&apos;s voice with no other voices to distract her.',
        },
        {
          kind: 'hebrew',
          id: 'hosea2-ishi',
          title: 'Ishi — "My Husband"',
          script: 'אִישִׁי',
          translit: '<strong>Ishi</strong> · my husband; my man',
          description:
            'Israel will call God "Ishi" — "my husband" — instead of "Baali" — "my master" or "my lord." The shift is from servitude to intimacy, from fearful compliance to loving union. The covenant is no longer a contract but a marriage.',
        },
        {
          kind: 'christ',
          id: 'hosea2-christ-bride',
          title: 'Christ Connection — The Bridegroom of the Church',
          html:
            'Christ is revealed in the New Testament as the Bridegroom who woos His Bride with tenderness and speaks comfortably to her heart. He allures her not with threats but with love. He betroths her to Himself in righteousness, in lovingkindness, in mercies, in faithfulness. The church, once "not my people," is declared "my people," and her response is, "Thou art my God."',
        },
        {
          kind: 'carry',
          html:
            'God takes Israel to the wilderness not to destroy her but to woo her. In the quiet place, away from the noise of false lovers, she will hear His voice. He will speak to her comfortably. He will betrothed her to Himself forever. In your own wilderness — your seasons of stripping away, of emptiness — can you hear God speaking comfortably to your heart?',
        },
        {
          kind: 'reflection',
          id: 'hosea2-wilderness',
          prompt: 'God brings Israel to the wilderness and speaks comfortably to her there. What wilderness has God brought you to? What is He saying to your heart in that quiet place?',
        },
      ],
    },

    {
      ref: 'Hosea 2 · All',
      title: 'The Heart of God',
      blocks: [
        {
          kind: 'commentary',
          id: 'hosea2-heart',
          html:
            'Hosea 2 shows us the heart of God in all its complexity. He is jealous — not with a small spirit but with the passion of someone whose love has been betrayed. He announces judgment, but even as He judges, He is planning redemption. He will strip away the false lovers, but He will do it to turn Israel back to Himself. He will hedge up her way with thorns so she cannot reach her idols, not to hurt her but to save her. And when she finally returns, He will not meet her with reproach but with tenderness. He will speak comfortably to her. He will betroth her to Himself forever. This is covenant love — love that suffers betrayal and still says, "I will allure you back."',
        },
        {
          kind: 'christ',
          id: 'hosea2-christ-redemption',
          title: 'Christ Connection — Redemption Through Faithfulness',
          html:
            'Christ embodies this redemptive love. He does not respond to human betrayal with vengeance but with covenant faithfulness. He enters the wilderness of human sin and speaks comfortably to the heart that is lost. He removes our false lovers — the things we chase instead of God — not to punish us but to turn us back. And when we return, broken and empty, He receives us and betroths us to Himself in faithfulness.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
