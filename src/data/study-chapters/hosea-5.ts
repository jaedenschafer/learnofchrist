import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Hosea 5 — Judgment on Ephraim and Judah
 *
 * "Hear ye this, O priests; and hearken, ye house of Israel; and give ye ear,
 * O house of the king." God brings judgment against both kingdoms. But even in
 * judgment, God disciplines His people — not to destroy them, but to turn them
 * back. Discipline is love.
 */
export const HOSEA_5: RichChapterContent = {
  bookSlug: 'hosea',
  bookName: 'Hosea',
  chapter: 5,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'Hosea 5 addresses both the northern kingdom of Israel (Ephraim) and the southern kingdom of Judah. God brings a charge against priests, against the house of Israel, against the house of the king. The guilt is clear. They have played the harlot. They have played Judah against Ephraim. They have built their own kingdoms instead of seeking God.',
    'Yet even in judgment, God&apos;s voice carries a strange tenderness. "I will go and return to my place, till they acknowledge their offence, and seek my face." Discipline is not punishment but a call to return. God removes His presence so that His people, empty and lost, will realize they need Him.',
  ],

  bottomShare: {
    label: 'Share Hosea 5',
    quote:
      'God brings judgment on Ephraim and Judah, yet His judgment is an act of love — a discipline meant to turn His people back to Himself.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hosea 5 · Study Guide',
  },

  sections: [
    {
      ref: 'Hosea 5:1–7',
      title: 'The Charge Against Priests and Kings',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Hear ye this, O priests; and hearken, ye house of Israel; and give ye ear, O house of the king; for judgment is toward you, because ye have been a snare on Mizpah, and a net spread upon Tabor.'),
            plain(2, 'And the revolters are profound to make slaughter: but I am a rebuker of them all.'),
            plain(3, 'I know Ephraim, and Israel is not hid from me: for now, O Ephraim, thou committest whoredom, and Israel is defiled.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea-5-78mid-1',
          html:
            'The prophet turns from accusation to appeal. The marriage metaphor keeps reaching for words to say what unfaithfulness costs.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(4, 'They will not frame their doings to turn unto their God: for the spirit of whoredoms is in the midst of them, and they have not known the Lord.'),
            {
              number: 5,
              spans: [
                t('And the pride of Israel doth testify to his face: therefore shall Israel and Ephraim fall in their iniquity; Judah also shall fall with them.'),
              ],
            },
            plain(6, 'They shall go with their flocks and their herds to seek the Lord; but they shall not find him; he hath withdrawn himself from them.'),
            plain(7, 'They have dealt treacherously against the Lord: for they have begotten strange children: now shall a month devour them with their portions.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea5-judgment',
          html:
            'God knows Ephraim. He sees their whoredom, their defilement. Yet they do not frame their doings to turn back to God. The spirit of whoredoms is in their midst. They have not known the Lord. And their pride testifies against them — they are unwilling to acknowledge their need, unwilling to return.',
        },
        {
          kind: 'carry',
          html:
            'Israel goes with their flocks and herds to seek the Lord, but they will not find Him. Why? Because their seeking is hollow. They have not truly turned their hearts to Him. They come with ritual and sacrifice but not with repentance. True seeking requires that we turn.',
        },
        {
          kind: 'reflection',
          id: 'hosea5-seeking',
          prompt: 'Israel seeks the Lord with their flocks and herds but does not find Him. Are you truly seeking God, or are you performing the rituals of seeking without the reality?',
        },
      ],
    },

    {
      ref: 'Hosea 5:8–15',
      title: 'The Discipline of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(8, 'Blow ye the cornet in Gibeah, and the trumpet in Ramah: cry aloud at Beth-aven, after thee, O Benjamin.'),
            plain(9, 'Ephraim shall be desolate in the day of rebuke: among the tribes of Israel have I made known that which shall surely be.'),
            plain(10, 'The princes of Judah were like them that remove the bound: therefore I will pour out my wrath upon them like water.'),
            plain(11, 'Ephraim is oppressed and broken in judgment: because he willingly walked after the commandment.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea-5-78mid-2',
          html:
            'The prophet turns from accusation to appeal. The marriage metaphor keeps reaching for words to say what unfaithfulness costs.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(12, 'Therefore will I be unto Ephraim as a moth, and to the house of Judah as rottenness.'),
            {
              number: 13,
              spans: [
                t('When Ephraim saw his sickness, and Judah saw his wound, then went Ephraim to the Assyrian, and sent to king Jareb: yet could he not heal you, nor cure you of your wound.'),
              ],
            },
            plain(14, 'For I will be unto Ephraim as a lion, and as a young lion to the house of Judah: I, even I, will tear and go away; I will take away, and none shall rescue him.'),
            {
              number: 15,
              spans: [
                t('I will go and return to my place, till they acknowledge their offence, and '),
                hp('seek my face', 'hosea5-seek-face'),
                t(': in their affliction they will seek me early.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea5-seek-face',
          html:
            'God will withdraw Himself. He will go and return to His place — creating absence where there was presence. Not because He has stopped loving, but because absence itself is a call. In their affliction, Israel will seek His face early. The discipline is meant to drive them to seek. The wound is meant to drive them to the Healer.',
        },
        {
          kind: 'hebrew',
          id: 'hosea5-mussar',
          title: 'Mussar — "Discipline" or "Instruction"',
          script: 'מוּסַר',
          translit: '<strong>Mussar</strong> · discipline; instruction; correction',
          description:
            'God&apos;s discipline is a form of instruction. It is meant to teach, to correct, to turn the heart back. The word carries the sense not of punishment but of loving correction — the discipline a parent gives a child.',
        },
        {
          kind: 'christ',
          id: 'hosea5-christ-discipline',
          title: 'Christ Connection — God&apos;s Discipline as Love',
          html:
            'In the New Testament, Hebrews teaches that God disciplines those He loves: "For whom the Lord loveth he chasteneth, and scourgeth every son whom he receiveth" (Hebrews 12:6). Discipline is evidence of love, not of rejection. Christ came not only to save but to sanctify — to make us holy through the refining work of God&apos;s Spirit. His discipline turns us back to Himself.',
        },
        {
          kind: 'carry',
          html:
            'When God withdraws His presence, it is not because He has abandoned you. It is because He loves you enough to let you feel your need for Him. The empty place is an invitation to seek His face. In your afflictions and wounds, can you hear God calling you to seek Him early?',
        },
        {
          kind: 'reflection',
          id: 'hosea5-discipline',
          prompt: 'God disciplines those He loves. How has God&apos;s discipline turned you back to Himself? What has His absence taught you?',
        },
      ],
    },

    {
      ref: 'Hosea 5 · All',
      title: 'The Pattern of Judgment and Mercy',
      blocks: [
        {
          kind: 'commentary',
          id: 'hosea5-pattern',
          html:
            'Hosea 5 shows a pattern that runs throughout Scripture: Israel turns away, God brings judgment, Israel feels the wound, and in affliction seeks God&apos;s face. This cycle is not punishment for punishment&apos;s sake but a cycle of redemption. God removes His presence so that His people will realize they cannot live without Him. He disciplines because He loves.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
