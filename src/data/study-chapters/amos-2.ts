import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const AMOS_2: RichChapterContent = {
  bookSlug: 'amos',
  bookName: 'Amos',
  chapter: 2,

  estimatedMinutes: { 5: 1, 10: 2, 15: 3 },
  intros: [
    'Amos 2 turns the sword inward. The burdens against the foreign nations continue — Moab, Judah — but the real confrontation comes with Israel herself. "Thus saith the Lord; For three transgressions of Israel, and for four, I will not turn away the punishment thereof." Israel herself will be judged.',
    'Amos describes Israel&apos;s sin in detail: selling the righteous for silver, the poor for a pair of shoes. Oppressing the meek. Taking pledges from the poor. Yet God had brought Israel up out of Egypt, raised up prophets, given them Nazirites. They have rejected all of it.',
  ],

  bottomShare: {
    label: 'Share Amos 2',
    quote:
      '"For three transgressions of Israel, and for four, I will not turn away the punishment." Amos turns to judge Israel herself — not just the nations, but God&apos;s own people.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Amos 2 · Study Guide',
  },

  sections: [
    {
      ref: 'Amos 2:1–5',
      title: 'Moab and Judah Judged',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'Thus saith the Lord; For three transgressions of Moab, and for four, I will not turn away the punishment thereof; because he burned the bones of the king of Edom into lime:'),
            plain(2, 'But I will send a fire upon Moab, and it shall devour the palaces of Kerioth: and Moab shall die with tumult, with shouting, and with the sound of the trumpet:'),
            plain(3, 'And I will cut off the judge from the midst thereof, and will slay all the princes thereof with him, saith the Lord.'),
            plain(4, 'Thus saith the Lord; For three transgressions of Judah, and for four, I will not turn away the punishment thereof; because they have despised the law of the Lord, and have not kept his commandments, and their lies caused them to err, after the which their fathers have walked:'),
            plain(5, 'But I will send a fire upon Judah, and it shall devour the palaces of Jerusalem.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos2-judah',
          html:
            'Judah is judged for despising the law of the Lord. Unlike the foreign nations judged for cruelty to others, Judah is judged for turning away from God&apos;s word. She has not kept His commandments. She has followed lies. Fire will be sent upon Judah too.',
        },
        {
          kind: 'carry',
          html:
            'Judah has more light than the other nations. She has been given God&apos;s law. She is not judged for ignorance but for rejection. The greater the light, the greater the responsibility. Where have you rejected God&apos;s law? Where have you let lies guide you instead of truth?',
        },
        {
          kind: 'reflection',
          id: 'amos2-judah-reflection',
          prompt: 'Judah is judged for despising God&apos;s law. What tempts you to despise God&apos;s Word? How will you guard your heart against that temptation?',
        },
      ],
    },

    {
      ref: 'Amos 2:6–16',
      title: 'Israel&apos;s Sin and God&apos;s Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(6, 'Thus saith the Lord; For three transgressions of Israel, and for four, I will not turn away the punishment thereof; because they sold the righteous for silver, and the poor for a pair of shoes;'),
            plain(7, 'That pant after the dust of the earth on the head of the poor, and turn aside the way of the meek: and a man and his father will go in unto the same maid, to profane my holy name:'),
            plain(8, 'And they lay themselves down upon clothes laid to pledge by every altar, and they drink the wine of the condemned in the house of their god.'),
            plain(9, 'Yet destroyed I the Amorite before them, whose height was like the height of the cedars, and he was strong as the oaks; yet I destroyed his fruit from above, and his roots from beneath.'),
            plain(10, 'Also I brought you up from the land of Egypt, and led you forty years through the wilderness, to possess the land of the Amorite.'),
            plain(11, 'And I raised up of your sons for prophets, and of your young men for Nazarites. Is it not even thus, O ye children of Israel? saith the Lord.'),
            {
              number: 12,
              spans: [
                t('But ye gave the Nazarites wine to drink; and commanded the prophets, saying, Prophesy not.'),
              ],
            },
            plain(13, 'Behold, I am pressed under you, as a cart is pressed that is full of sheaves.'),
            plain(14, 'Therefore the flight shall perish from the swift, and the strong shall not strengthen his force, neither shall the mighty deliver himself:'),
            plain(15, 'Neither shall he stand that handleth the bow; and he that is swift of foot shall not deliver himself: neither shall he that rideth the horse deliver himself.'),
            plain(16, 'And he that is courageous among the mighty shall flee away naked in that day, saith the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos2-israel',
          html:
            'Israel sells the righteous for silver and the poor for shoes. She oppresses the meek. She violates God&apos;s holy name through sexual immorality. She takes the clothes of the poor as pledge and drinks wine in temples. Yet God had brought her out of Egypt, raised up prophets, called Nazarites. And she rejected all of it — gave wine to Nazarites, commanded prophets not to prophesy.',
        },
        {
          kind: 'carry',
          html:
            'Israel has been lavished with God&apos;s mercy and grace. She has been led, protected, provided for. She has been given prophets to speak God&apos;s Word. Yet she turns and oppresses the weak, silences the prophets, violates the holy. The judgment that falls is not arbitrary but a response to ingratitude and injustice.',
        },
        {
          kind: 'reflection',
          id: 'amos2-israel-reflection',
          prompt: 'Israel rejected God despite all He had done for her. Where are you tempted to take God&apos;s blessings for granted? How will you respond with gratitude and obedience?',
        },
      ],
    },

    {
      ref: 'Amos 2 · All',
      title: 'No One Escapes Judgment',
      blocks: [
        {
          kind: 'commentary',
          id: 'amos2-theme',
          html:
            'Amos 2 makes clear that no one is exempt from God&apos;s judgment. The nations will be judged. Judah will be judged. And Israel herself — God&apos;s covenant people — will be judged. In fact, Israel&apos;s judgment is more severe because she has been given more light. To whom much is given, much will be required.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
