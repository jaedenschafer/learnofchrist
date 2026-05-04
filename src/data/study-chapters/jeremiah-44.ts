import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 44 — Idolatry in Egypt
 *
 * The prophet Jeremiah stands before the remnant of Judah who have fled to Egypt.
 * They have learned nothing from the destruction of Jerusalem. Even in a foreign land,
 * they continue their worship of the Queen of Heaven—a pagan goddess. When Jeremiah
 * warns them that this idolatry will bring judgment even in Egypt, they refuse to listen.
 * Geography does not change the human heart. Only God can do that.
 */
export const JEREMIAH_44: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 44,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  topicTags: ['lament', 'judgment', 'hope', 'calling'],
  opener: {
    topical: true,
    caption: 'Jeremiah 44',
  },
  intros: [
    'Jeremiah stands in Egypt, among the very people he warned would not find safety there. They have fled Jerusalem, certain that Egypt would be a refuge. But even in exile, their hearts remain divided. They want God—but they want Him on their terms, mixed with the gods and goddesses of the nations around them. The "Queen of Heaven," likely a reference to Ishtar or a related fertility goddess, has captured their devotion. When Jeremiah declares God&apos;s word against this idolatry, they respond with stubbornness. They will do what they have sworn to do, they tell him. They will burn incense to the Queen of Heaven and pour out drink offerings to her, just as they have done—they and their ancestors, their kings and their officials, and all the people of the land.',
    'In this moment, Jeremiah faces what may be his greatest sorrow. He has preached repentance his entire life. He has been beaten, imprisoned, and cast into a cistern. He has spoken God&apos;s word in the temple and the streets. And now, at the end of his ministry, he stands before those he tried to save, watching them choose idolatry over the living God. Yet even here, in this moment of apparent defeat, God&apos;s word is vindicated. Not by Jeremiah&apos;s power, but by the unfolding of God&apos;s justice.',
  ],

  sections: [
    /* ─── Jeremiah 44:1–14 — The Charge Against Idolatry ──────────────── */
    {
      ref: 'Jeremiah 44:1–14',
      title: 'The Idolatry of the Remnant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 44,
          lines: [
            plain(4, 'Howbeit I sent unto you all my servants the prophets, rising early and sending them, saying, Oh, do not this abominable thing that I hate.'),
            plain(8, 'Why provoke ye me to anger with the works of your hands, burning incense unto other gods in the land of Egypt, whither ye be gone to dwell, that ye might cut yourselves off, and that ye might be a curse and a reproach among all the nations of the earth?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer44-prophets',
          html: 'God recalls His persistent patience. He sent prophet after prophet. He rose early—the image is of a parent rising before the sun, desperate and earnest. And what was the message? Simple and direct: "Do not this abominable thing that I hate." The word "abominable" (toeevah in Hebrew) is the strongest language of revulsion. This is not a minor transgression. This is what God, in His holy nature, cannot tolerate. Yet the people heard the warning and did it anyway[res:jer31-hebrews-intertextual].',
        },
        {
          kind: 'commentary',
          id: 'jer44-provoke',
          html: 'The remnant have done more than sin. They have provoked God to anger through the works of their own hands. They think they are safe in Egypt, but they are actually cutting themselves off—severing themselves from the God who sought to protect them. By worshipping other gods in the land of Egypt, they are making themselves a curse and a reproach among all nations. Their own choice transforms them from God&apos;s people into a byword of judgment[res:lachish-letters].',
        },
        {
          kind: 'carry',
          html: 'This passage presents a haunting truth: we cannot outrun our idolatry by changing location. The remnant fled Jerusalem thinking geography would save them. But the same divided heart that led them astray in Judah leads them astray in Egypt. What captures your devotion follows you wherever you go. Only a change of heart—a turning from what you worship to the worship of God alone—can save you.',
        },
        {
          kind: 'reflection',
          id: 'jer44-what-queen',
          prompt: 'What "Queen of Heaven" captures your devotion—what seems beautiful, powerful, and worth your time and attention? What would it mean to choose God&apos;s word over it?',
        },
      ],
    },

    /* ─── Jeremiah 44:15–30 — The People&apos;s Refusal ──────────────── */
    {
      ref: 'Jeremiah 44:15–30',
      title: 'A Stubborn Refusal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 44,
          lines: [
            plain(16, 'As for the word that thou hast spoken unto us in the name of the Lord, we will not hearken unto thee.'),
            plain(17, 'But we will certainly do whatsoever thing goeth forth out of our own mouth, to burn incense unto the queen of heaven, and to pour out drink offerings unto her, as we have done, we, and our fathers, our kings, and our princes, in the cities of Judah, and in the streets of Jerusalem: for then had we plenty of victuals, and were well, and saw no evil.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer44-we-will-not',
          html: 'The refusal is absolute. "As for the word that thou hast spoken unto us in the name of the Lord, we will not hearken unto thee." They do not even ask for a sign or a confirmation. They do not negotiate. They simply refuse. What is remarkable is their certainty. They claim that when they worshipped the Queen of Heaven, they had plenty of food and were well. They saw no evil. In their minds, idolatry has proven itself. God&apos;s word is abstract and distant. The goddess is tangible and present[res:sefaria-jeremiah].',
        },
        {
          kind: 'commentary',
          id: 'jer44-fathers',
          html: 'Notice the appeal to tradition: "as we have done, we, and our fathers, our kings, and our princes." This is the religion of the fathers. This is what has always been done. This is the inheritance of the people. It does not matter that God has warned them. It does not matter that their own words contradict what they say—just verses earlier they acknowledged that God sent the prophets and said "do not this abominable thing." Yet they choose continuity with the past over obedience to God.',
        },
        {
          kind: 'christ',
          id: 'jer44-christ-heart',
          title: 'Christ Connection — The Changed Heart',
          html: 'The remnant believe their outward safety depends on their outward actions—burn incense, pour out offerings, continue the ancestral ways. But Christ teaches that what comes out of the heart defiles a person. The heart must be changed first. Christ offers not a new set of rituals, but a new birth—to be born again of the Spirit. The heart that has been transformed by grace flows out in obedience not from fear of judgment, but from love of the Father. Jeremiah&apos;s tragedy is that he stands before people whose hearts have not been changed and never will be—not by him, not by prophets, not by warnings. But in Christ, the Spirit offers what prophets could never give: a heart made new.',
        },
        {
          kind: 'carry',
          html:
            'The Jeremiah 44 lesson is that hearing God&apos;s word is not the same as heeding it. The remnant heard the prophets. They understood the warning. But they refused to let it change them. What parts of God&apos;s word are you hearing but refusing to act on? What traditional idolatries—approved by your fathers and your culture—have you refused to abandon?',
        },
        {
          kind: 'reflection',
          id: 'jer44-change-heart',
          prompt: 'When you refuse to heed God&apos;s word, what are you believing instead? What tradition or circumstance or past success are you trusting more than God&apos;s promise?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Ye will certainly do whatsoever thing goeth forth out of your own mouth...as we have done, we, and our fathers, our kings, and our princes.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 44 · Study Guide',
  },  resources: [
    {
      id: 'jer31-hebrews-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Jeremiah 31 ↔ Hebrews 8:8–12',
      url: 'https://intertextual.bible/text/jeremiah-31/hebrews-8',
      description: 'Side-by-side comparison of the new covenant promise in Jeremiah quoted in Hebrews.',
    },
    {
      id: 'lachish-letters',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Lachish Letters',
      url: 'https://www.imj.org.il/en/collections/lachish-letters',
      description: 'Ancient inscribed potsherds from the Judean siege of Lachish (587 BCE), contemporary with Jeremiah.',
    },
    {
      id: 'sefaria-jeremiah',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah',
      url: 'https://www.sefaria.org/Jeremiah',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    }
  ],
};
