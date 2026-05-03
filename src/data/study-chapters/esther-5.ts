import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Esther 5 — The Banquet is Prepared
 *
 * After three days of fasting and prayer, Esther approaches King Ahasuerus
 * in his inner court. He holds out his golden sceptre to her — a gesture of
 * favor that means her life is spared. "What is thy request?" he asks. "To the
 * half of the kingdom." Esther invites him and Haman to a banquet she has
 * prepared. At the banquet, he asks again what she desires. She defers: "Come
 * tomorrow to a second banquet, and I will tell thee." Meanwhile, Haman goes
 * home jubilant — until he sees Mordecai still refuses to bow. Consumed with
 * rage, he orders a gallows built fifty cubits high. By morning, his wife and
 * friends assure him: "Just ask the king to hang him." Haman, delighted with
 * the plan, retires in high spirits. But he does not know what the king has
 * learned in the night that will come.
 */
export const ESTHER_5: RichChapterContent = {
  bookSlug: 'esther',
  bookName: 'Esther',
  chapter: 5,

  estimatedMinutes: { beginner: 5, intermediate: 8, deep: 10 },
  intros: [
    'Esther has fasted for three days. She has cast herself entirely upon God&apos;s mercy. And now, dressed in her royal robes, she stands in the inner court of the king&apos;s house — a place where she has not been summoned. The penalty for approaching the king unbidden is death, unless he extends his golden sceptre.',
    'But the king sees her, and he is pleased. He holds out the sceptre. "What is thy request?" he asks. "Even to the half of the kingdom, it shall be granted thee." Esther invites him and Haman to a feast. At the feast, the king again asks what she desires. And Esther, with remarkable composure and wisdom, asks them to come to another banquet. She will tell him then.',
    'This chapter shows us a woman moving with deliberate grace through a hostile court, buying time for God to work. And while she speaks soft words and prepares feasts, her enemy — Haman — is digging his own grave.',
  ],

  bottomShare: {
    label: 'Share Esther 5',
    quote:
      'The king held out his golden sceptre. And Esther, who had fasted and prayed, now moved with wisdom and grace through the corridors of power — deferring her request, preparing her case, waiting for God&apos;s moment.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Esther 5 · Study Guide',
  },

  sections: [
    /* ─── Esther 5:1–5 — The Golden Sceptre ────────────────────────── */
    {
      ref: 'Esther 5:1–5',
      title: 'The Golden Sceptre',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('Now it came to pass on the third day, that Esther put on her royal apparel, and stood in the inner court of the king&apos;s house, over against the king&apos;s house: and the king sat upon his royal throne in the royal house, over against the gate of the house.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And it was so, when the king saw Esther the queen standing in the court, that she obtained '),
                hg('favour in his sight', 'esth5-favour'),
                t(': and the king held out to Esther the '),
                hy('golden sceptre', 'esth5-sceptre'),
                t(' that was in his hand. So Esther drew near, and touched the top of the sceptre.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Then said the king unto her, What wilt thou, queen Esther? and what is thy request? it shall be even given thee to the half of the kingdom.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And Esther said, If it seem good unto the king, let the king and Haman come this day unto the banquet that I have prepared for him.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Then the king said, Cause Haman to make haste, that he may do as Esther hath said. So the king and Haman came to the banquet that Esther had prepared.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esth5-favour',
          html:
            'Esther stands before the king unbidden. The penalty for such boldness is death — unless the king extends his grace. And he sees her. He is pleased with her. This is the word of God working through her: she obtains favor, not through scheming, but through a heart that has been broken in prayer and fasting.',
        },
        {
          kind: 'hebrew',
          id: 'esth5-sceptre-word',
          title: 'שַׁרְבִיט — Sharvit (Sceptre)',
          script: 'שַׁרְבִיט',
          translit: '<strong>Sharvit</strong> · sceptre; the rod of the king&apos;s authority',
          description:
            'The sceptre is the symbol of royal authority and favor. To extend the sceptre is to grant a hearing, to offer protection. Esther touches the top of it — a gesture of submission and gratitude. The sceptre extended means her life is safe. It means the king will listen to her.',
        },
        {
          kind: 'commentary',
          id: 'esth5-feast-prepared',
          html:
            'Esther has prepared a banquet. This is not a hasty gathering; this is a woman who has thought carefully about what she will say and how she will say it. She invites not only the king, but Haman — the very man who has decreed her people&apos;s death. She will sit at table with her enemy, and the king will see her honor him in his presence.',
        },
        {
          kind: 'carry',
          html:
            'When we are afraid, we may panic. We may act rashly, demand, insist. Esther fasted and prayed instead. She trusted God to work behind the scenes. And when she stood before the king, she moved with grace and wisdom — asking for what she needed, but patiently, strategically, with time for God to arrange the other pieces. What does it mean to wait upon God even when danger is urgent?',
        },
        {
          kind: 'reflection',
          id: 'sceptre-reflection',
          prompt: 'Esther fasted for three days before approaching the king. What situation in your life calls you to pray and wait, rather than to act immediately? What would change if you waited for God to extend the sceptre?',
        },
      ],
    },

    /* ─── Esther 5:6–14 — The Second Banquet ────────────────────────── */
    {
      ref: 'Esther 5:6–14',
      title: 'The Second Banquet and Haman&apos;s Rage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 6,
              spans: [
                t('And the king said unto Esther at the banquet of wine, What is thy petition? and it shall be granted thee: and what is thy request? even to the half of the kingdom it shall be performed.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Then answered Esther, and said, My petition and my request is;'),
              ],
            },
            {
              number: 8,
              spans: [
                t('If I have found favour in the sight of the king, and if it please the king to grant my petition, and to perform my request, let the king and Haman come to the banquet that I shall prepare for them, and I will do to morrow as the king hath said.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Then went Haman forth that day '),
                hg('joyful and with a glad heart', 'esth5-haman-joy'),
                t(': but when Haman saw Mordecai in the king&apos;s gate, that he '),
                hg('stood not up, nor moved for him', 'esth5-mordecai-bow'),
                t(', he was full of indignation against Mordecai.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Nevertheless Haman refrained himself: and when he came home, he sent and called for his friends, and Zeresh his wife.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Haman told them of the glory of his riches, and the multitude of his children, and all the things wherein the king had promoted him, and how he had advanced him above the princes and servants of the king.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Haman said moreover, Yea, Esther the queen did let no man come in with the king unto the banquet that she had prepared but myself; and to morrow am I invited unto her again with the king.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Yet all this availeth me nothing, so long as I see Mordecai the Jew sitting at the king&apos;s gate.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Then said Zeresh his wife and all his friends unto him, Let a gallows be made of fifty cubits high, and to morrow speak thou unto the king that Mordecai may be hanged thereon: then go thou in merrily with the king unto the banquet. And the thing pleased Haman; and he caused the gallows to be made.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esth5-defer-request',
          html:
            'Esther defers her request. This is a woman of great wisdom. She could make her plea at this first banquet, but she chooses to wait. She asks the king and Haman to come again tomorrow. Why? Perhaps she is buying time for God to work. Perhaps she senses that the moment is not yet ripe. Whatever her reasoning, she speaks with the composure of someone who trusts that the right moment will come.',
        },
        {
          kind: 'commentary',
          id: 'esth5-haman-joy',
          html:
            'Haman leaves the banquet elated. He has been honored by the queen. He sits at the king&apos;s table. The king has promised to give Esther "even to the half of the kingdom." And Haman, in his vanity, believes this recognition is the pinnacle of his power. He is a man riding high, unable to see the precipice toward which he walks.',
        },
        {
          kind: 'commentary',
          id: 'esth5-mordecai-bow',
          html:
            'And then Haman sees Mordecai. Mordecai, the Jew, still refuses to bow. This one act — this refusal to give the honor Haman demands — undoes all the joy of the banquet. Haman&apos;s happiness is fragile, dependent entirely on everyone giving him the honor he believes he deserves. One man&apos;s refusal to bow unmakes his triumph.',
        },
        {
          kind: 'commentary',
          id: 'esth5-zeresh-advice',
          html:
            'Zeresh, Haman&apos;s wife, and his friends advise him: build a gallows fifty cubits high — higher than any in the kingdom — and ask the king to hang Mordecai on it in the morning. Then go to the banquet with a merry heart. Haman approves this plan. He will remove the one man who refuses to honor him. And he will do it before the second banquet, so that he can feast with joy.',
        },
        {
          kind: 'carry',
          html:
            'Haman&apos;s downfall begins not with Esther&apos;s revelation, but here, in this night, in this plan. He is so consumed with his own honor, with the refusal of one man to bow, that he cannot see that the very king he serves, the very queen he honors, have other purposes. He builds the gallows for Mordecai. But God has already begun to move. What do we build in our own lives because we are blinded by pride? What scaffolding of our own destruction do we erect?',
        },
        {
          kind: 'reflection',
          id: 'haman-pride',
          prompt: 'Haman is joyful at his honors, yet one refusal to bow destroys his happiness. What part of your joy or confidence depends on other people&apos;s approval? What happens to you when someone refuses to give you the honor you believe you deserve?',
        },
      ],
    },

    /* ─── Christ Connection ────────────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'christ',
          id: 'esth5-christ-sceptre',
          title: 'Christ Connection — The Sceptre Extended',
          html:
            'Esther touches the golden sceptre and lives. Her bold approach to the king, her willingness to risk death, is met with favor. In the New Testament, the writer of Hebrews speaks to this same access to the throne of God: "Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need" (Hebrews 4:16). We approach a King who does not extend a sceptre of judgment, but a throne of grace. Like Esther, we come before Him with our petition, our fear, our desperate need. And He receives us — not because we deserve it, but because He has invited us near. The golden sceptre extended is the sign of His favor toward all who come to Him.',
        },
        {
          kind: 'christ',
          id: 'esth5-enemy-preparing',
          title: 'Christ Connection — The Enemy Prepares His Own Doom',
          html:
            'This night, Haman builds a gallows for Mordecai, not knowing that he is preparing his own instrument of execution. There is a pattern in Scripture: those who dig pits for others often fall into them. The Psalmist says, "The wicked have drawn out the sword... to slay such as be of upright conversation. Their sword shall enter into their own heart, and their bows shall be broken" (Psalm 37:14–15). And again, "He made a pit, and digged it, and is fallen into the ditch which he made. His mischief shall return upon his own head, and his violent dealing shall come down upon his own pate" (Psalm 7:15–16). Haman&apos;s plan to hang Mordecai will become the means of Haman&apos;s own destruction. What the enemy means for harm, God turns to his defeat.',
        },
      ],
    },
  ],
};
