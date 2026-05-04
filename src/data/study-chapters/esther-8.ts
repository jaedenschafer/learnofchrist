import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Esther 8 — The King's Intervention and Mordecai's Rise
 *
 * Esther falls at the king's feet in tears, beseeching him to reverse the
 * decree Haman devised against the Jews. The king cannot undo what has been
 * written and sealed, but he can write a new decree in his own name — one that
 * allows the Jews to defend themselves on the appointed day. Mordecai is
 * promoted to the highest station; the enemies of Israel trembled at the news.
 * A counter-decree that cannot be reversed; an inheritance that cannot be taken.
 */
export const ESTHER_8: RichChapterContent = {
  bookSlug: 'esther',
  bookName: 'Esther',
  chapter: 8,

  estimatedMinutes: { beginner: 3, intermediate: 7, deep: 11 },
  topicTags: ['providence', 'deliverance', 'faithfulness', 'fear'],
  opener: {
    topical: true,
    caption: 'Esther 8',
  },
  intros: [
    'In the previous chapter, Haman&apos;s plot was exposed — and in that same hour, the king hanged him on the gallows he had built for Mordecai. But the decree remains. The letters have been sealed throughout the empire, signed with the king&apos;s ring, promising death to every Jew on the thirteenth day of Adar. The king cannot reverse what he has written. He cannot take back his own signet.',
    'Yet there is a way. Esther, who has revealed her identity to the king and won his favor, now falls at his feet in tears. She beseeches him to revoke the letters of Haman&apos;s devise. And the king, who has already shown mercy to her and to her people, extends his scepter and calls her to speak. In his grace, he finds a way forward — a counter-decree, issued in his name, sealed with his ring, that will allow the Jews to gather and defend themselves. What was meant for their destruction becomes, through the king&apos;s second decree, an instrument of their deliverance.',
  ],

  bottomShare: {
    quote:
      'The king gave Haman&apos;s house to Esther, and his signet ring to Mordecai. A second decree was written, not to undo the first, but to give the oppressed the power to defend themselves. What cannot be reversed can be answered.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Esther 8 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-esther-8',
      kind: 'study',
      source: 'Sefaria',
      label: 'Esther 8 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Esther.8',
      description: 'The Hebrew text of Esther 8 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  sections: [
    /* ─── Esther 8:1–2 — Esther&apos;s Inheritance ──────────────────────── */
    {
      ref: 'Esther 8:1–2',
      title: 'The King&apos;s House Given Over',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              1,
              'On that day did the king Ahasuerus give the house of Haman the Jews&apos; enemy unto Esther the Jewess: and Mordecai came before the king; for Esther had told what he was unto her.'
            ),
            plain(
              2,
              'And the king took off his ring, which he had taken from Haman, and gave it unto Mordecai. And Esther set Mordecai over the house of Haman.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esth8-house-given',
          html:
            'What was the seat of Haman&apos;s power becomes Esther&apos;s inheritance. The king does not merely pardon her; he rewards her. He gives her the very property of the one who sought her destruction. This is not a small thing — it is a reversal of fortunes that touches everything: power, wealth, security, vindication. [res:theoi-herodotus]',
        },
        {
          kind: 'commentary',
          id: 'esth8-ring',
          html:
            'The king takes the signet ring from his finger — the same ring he gave to Haman in chapter 3 — and gives it to Mordecai. The signet ring is the authority to write in the king&apos;s name and seal with the king&apos;s seal. By giving it to Mordecai, the king makes him his authorized representative, his voice, his hand in the empire. Mordecai now holds the very power Haman once wielded[res:sefaria-megillah][res:sefaria-esther-8].',
        },
        {
          kind: 'hebrew',
          id: 'esth8-signet',
          title: 'Tabaat — "Ring" or "Signet"',
          script: 'טַבַּעַת',
          translit: '<strong>Tabaat</strong> · ring; signet ring; a seal of authority',
          description:
            'The signet ring is not mere jewelry — it is an instrument of royal authority. It seals decrees; it grants power. When the king places his signet on a letter, that letter is law throughout the empire. To give the ring to Mordecai is to make him the king&apos;s agent, entrusted with the authority of the throne itself.',
        },
        {
          kind: 'carry',
          html:
            'We often think of restoration as return to what was lost. But Scripture shows us that God restores with surplus. Esther does not merely survive; she inherits wealth and power. Mordecai is not merely spared; he is elevated. When we have been targeted for destruction, what does it mean to discover that our survival comes with inheritance?',
        },
        {
          kind: 'reflection',
          id: 'esth8-reward',
          prompt: 'How does the reversal of power — from Haman to Mordecai, from Haman&apos;s house to Esther — change the meaning of the Jews&apos; deliverance? What does it add when liberation comes with inheritance?',
        },
      ],
    },

    /* ─── Esther 8:3–8 — The Petition and the Scepter ──────────────────── */
    {
      ref: 'Esther 8:3–8',
      title: 'The Scepter Extended',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              3,
              'And Esther spake yet again before the king, and fell down at his feet, and besought him with tears to put away the mischief of Haman the Agagite, and his device that he had devised against the Jews.'
            ),
            {
              number: 4,
              spans: [
                t('Then the king '),
                hg('held out the golden sceptre towards Esther', 'esth8-scepter'),
                t('. So Esther arose, and stood before the king,'),
              ],
            },
            plain(
              5,
              'And said, If it please the king, and if I have found favour in his sight, and the thing seem right before him, and I be pleasing in his eyes, let it be written to reverse the letters devised by Haman the son of Hammedatha the Agagite, which he wrote to destroy the Jews which are in all the king&apos;s provinces:'
            ),
            plain(
              6,
              'For how can I endure to see the evil that shall come unto my people? or how can I endure to see the destruction of my kindred?'
            ),
            plain(
              7,
              'Then the king Ahasuerus said unto Esther and to Mordecai the Jew, Behold, I have given Esther the house of Haman, and him they have hanged upon the gallows, because he laid his hand upon the Jews.'
            ),
            {
              number: 8,
              spans: [
                t('Write ye also for the Jews, as it liketh you, in the king&apos;s name, and '),
                hp('seal it with the king&apos;s ring', 'esth8-sealed-decree'),
                t(': for the writing which is written in the king&apos;s name, and sealed with the king&apos;s ring, may no man reverse.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esth8-scepter',
          html:
            'The golden scepter extended — the very gesture that first granted Esther audience with the king (Esther 5:2) — now grants her the right to make a petition that will change the course of an empire. When the king extends the scepter, he opens the door to her plea. She is given standing, authority, voice.',
        },
        {
          kind: 'commentary',
          id: 'esth8-endure',
          html:
            'Esther&apos;s petition comes from the deepest place: "How can I endure to see the evil that shall come unto my people?" This is not a legal argument or a political calculation. It is a cry from the heart. She has revealed her identity; she has won the king&apos;s favor; and now she stands before him, weeping, asking him to use his power to save her people.',
        },
        {
          kind: 'commentary',
          id: 'esth8-sealed-decree',
          html:
            'The king makes clear what the law of the Medes and Persians demands: a writing sealed with the king&apos;s ring cannot be reversed. Even the king himself cannot undo it. So he does not ask Esther and Mordecai to reverse Haman&apos;s decree — instead, he instructs them to write a new one, to be sealed with his own authority. The first decree stands, but it will be answered.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes what we cannot undo, we must answer. Mordecai and Esther cannot erase the death sentence hanging over the Jews. But the king gives them the power to write a counter-decree, to arm their people, to turn the day of slaughter into a day of defense. What impossible situation in your own life has called you to answer with creativity and courage?',
        },
        {
          kind: 'reflection',
          id: 'esth8-petition',
          prompt: 'Esther falls at the king&apos;s feet with tears, not with demands. What does her manner of petition teach about how to approach power with a genuine need?',
        },
      ],
    },

    /* ─── Esther 8:9–14 — The Counter-Decree Written and Sealed ────────── */
    {
      ref: 'Esther 8:9–14',
      title: 'Mordecai Writes the Decree',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              9,
              'Then were the king&apos;s scribes called at that time in the third month, that is, the month Sivan, on the three and twentieth day thereof; and it was written according to all that Mordecai commanded unto the Jews, and to the lieutenants, and the deputies and rulers of the provinces which are from India unto Ethiopia, an hundred and seven and twenty provinces.'
            ),
            plain(
              10,
              'And he wrote in the king&apos;s name, and sealed it with the king&apos;s ring, and sent letters by posts on horseback, and riders on mules, camels, and young dromedaries:'
            ),
            plain(
              11,
              'Wherein the king granted the Jews which were in every city to gather themselves together, and to stand for their life, to destroy, to slay, and to cause to perish, all the power of the people and province that would assault them, both little ones and women, and to take the spoil of them for a prey,'
            ),
            plain(
              12,
              'Upon one day in all the provinces of king Ahasuerus, namely, upon the thirteenth day of the twelfth month, which is the month Adar.'
            ),
            plain(
              13,
              'The copy of the writing for a commandment to be given in every province was published unto all people: and that the Jews should be ready against that day to avenge themselves on their enemies.'
            ),
            plain(
              14,
              'So the posts that rode upon the mules and camels went out, being hastened and pressed on by the king&apos;s commandment. And the decree was published in Shushan the palace.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esth8-adar',
          html:
            'The date is the third month, Sivan — the month of receiving the law (in Jewish tradition, the giving of Torah at Mount Sinai). The decree will take effect on the thirteenth day of Adar, the very day Haman&apos;s decree was to be carried out. Mordecai, now wielding the king&apos;s authority, writes not merely to reverse Haman&apos;s death sentence, but to grant the Jews the right and power to defend themselves.',
        },
        {
          kind: 'commentary',
          id: 'esth8-destroyed-power',
          html:
            'The decree grants the Jews the right to "destroy, to slay, and to cause to perish, all the power of the people and province that would assault them." This is not a passive reprieve. This is active self-defense. The Jews are given legal standing to stand for their lives, to gather, to fight back against those who would destroy them. The oppressed become agents of their own deliverance.',
        },
        {
          kind: 'hebrew',
          id: 'esth8-sefer',
          title: 'Sefer — "Book" or "Scroll"',
          script: 'סֵפֶר',
          translit: '<strong>Sefer</strong> · book; scroll; a written document',
          description:
            'The decree is written as a sefer — a formal scroll, signed and sealed with the authority of the throne. In the ancient Near East, writing and sealing transformed speech into law. The sefer seals Mordecai&apos;s words into permanence, giving them the weight of the king&apos;s own authority.',
        },
        {
          kind: 'commentary',
          id: 'esth8-hastened',
          html:
            'The posts are "hastened and pressed on by the king&apos;s commandment." Speed matters here — the word must reach the provinces before the appointed day. Haman&apos;s death sentence traveled across the empire in Esther 3; now Mordecai&apos;s counter-decree races to meet it. The Jews will have time to prepare, to gather, to arm themselves with the law itself.',
        },
        {
          kind: 'carry',
          html:
            'Authority speaks through instruments — through letters, through seals, through the mouths of those trusted with power. Mordecai, once dressed in sackcloth outside the king&apos;s gate, now writes in the king&apos;s name. The power to change the course of history is sometimes given not through our own strength, but through access to those who hold authority. Whom has God given you access to, and how might that access serve a larger purpose?',
        },
        {
          kind: 'reflection',
          id: 'esth8-decree-written',
          prompt: 'The counter-decree does not erase Haman&apos;s letter — it stands alongside it, offering a different possibility. What does it teach that liberation sometimes comes not through erasing the past, but through writing a new answer to it?',
        },
      ],
    },

    /* ─── Esther 8:15–17 — Mordecai&apos;s Exaltation and the Jews&apos; Joy ── */
    {
      ref: 'Esther 8:15–17',
      title: 'Light, Gladness, and Honor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 15,
              spans: [
                t('And Mordecai went out from the presence of the king in '),
                hg('royal apparel of blue and white', 'esth8-apparel'),
                t(', and with '),
                t('a great crown of gold'),
                t(', and a garment of fine linen and purple: and the city of Shushan rejoiced and was glad.'),
              ],
            },
            plain(
              16,
              'The Jews had light, and gladness, and joy, and honour.'
            ),
            plain(
              17,
              'And in every province, and in every city, whithersoever the king&apos;s commandment and his decree came, the Jews had joy and gladness, a feast and a good day: and many of the people of the land became Jews; for the fear of the Jews fell upon them.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esth8-apparel',
          html:
            'Mordecai appears in royal apparel of blue and white — the colors of the kingdom. He has been raised from mourning to honor, from sackcloth to royal garments. He is not merely pardoned; he is exalted. The clothes declare his new station; they announce that the oppressed man has been lifted up.',
        },
        {
          kind: 'hebrew',
          id: 'esth8-adar2',
          title: 'Adar — "the Month of Lots"',
          script: 'אֲדַר',
          translit: '<strong>Adar</strong> · the twelfth month of the Jewish calendar',
          description:
            'The month Adar takes its name from the word "pur" — the lot that Haman cast to determine the day of destruction (Esther 3:7). The month appointed for the Jews&apos; death becomes, through the counter-decree, the month of their deliverance and celebration. This reversal will be remembered forever in the festival of Purim.',
        },
        {
          kind: 'commentary',
          id: 'esth8-light-glad',
          html:
            'Light, gladness, joy, and honor — the text lists the blessings that come with the decree. These are not political outcomes but spiritual ones. The Jews, whose death was decreed, now experience radiance, celebration, delight, and dignity. What was meant for darkness becomes light.',
        },
        {
          kind: 'commentary',
          id: 'esth8-became-jews',
          html:
            'And many of the people of the land became Jews. The reversal of the decree is so powerful, so clear a sign of the Jews&apos; vindication, that converts are drawn to them. The fear of the Jews falls upon their enemies — not because the Jews have conquered them in battle yet, but because the king&apos;s word has been made manifest. The invisible reality — that these people are under the protection of God and the favor of the king — becomes visible.',
        },
        {
          kind: 'christ',
          id: 'esth8-christ',
          title: 'Christ Connection — No Condemnation',
          html:
            'Paul writes in Romans 8:1: "There is therefore now no condemnation to them which are in Christ Jesus." Just as the counter-decree cannot be reversed, and just as the king&apos;s word stands forever, so the verdict of Christ over His people stands. What was written against us in the law is answered by what is written in grace. The accusation remains on the page, but the final word belongs to the King. We who were under sentence find ourselves instead in the inheritance of Christ, clothed in His righteousness as Mordecai is clothed in royal apparel.',
        },
        {
          kind: 'carry',
          html:
            'When we have lived under threat or condemnation, the reversal can be hard to believe. Yet Mordecai walks in daylight in his royal garments, and the city rejoices. The Jews, who expected death, now celebrate. Sometimes our deepest work is learning to wear the honor that has been given us, to move through the world no longer in the posture of the condemned, but in the freedom of those whose acquittal is sealed.',
        },
        {
          kind: 'reflection',
          id: 'esth8-honor',
          prompt: 'How does Mordecai&apos;s public exaltation in royal apparel change the meaning of the Jews&apos; deliverance? What would it take for you to accept honor and joy when you have lived in fear?',
        },
      ],
    },
  ],
};
