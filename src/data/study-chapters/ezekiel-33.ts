import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 33 — The Watchman Restored
 *
 * After judgment on Pharaoh, Ezekiel turns back to Israel and his own calling.
 * God appoints him watchman again. If he warns the wicked and they do not heed,
 * their blood is on their own heads. But if the wicked turn from sin, they shall
 * surely live. The message is urgent: repent, and you will live. Delay, and you
 * risk death. Yet the promise is always open.
 */
export const EZEKIEL_33: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 33,

  estimatedMinutes: { 5: 2, 10: 4, 15: 5 },
  intros: [
    'Ezekiel is reappointed as watchman over Israel. The role of a watchman is perilous. He stands on the walls and watches for danger—the approach of enemies, the fire that could consume the city. If he sees danger and does not warn, the blood of the people is on his hands. If he warns and they do not listen, then their blood is their own responsibility. This is a profound meditation on moral agency and responsibility—both the watchman&apos;s and the people&apos;s.',
    'But the central promise of this chapter transcends judgment. God tells Ezekiel: "As I live, saith the Lord God, I have no pleasure in the death of the wicked; but that the wicked turn from his way and live." The offer is perpetually open. Repent. Turn. And you will live. The God of Israel is not seeking vengeance. He is seeking the return of His people. Each moment holds the possibility of turning.',
  ],

  sections: [
    {
      ref: 'Ezekiel 33:1–11',
      title: 'The Call to the Watchman',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(1, 'Again the word of the Lord came unto me, saying,'),
            plain(2, 'Son of man, speak to the children of thy people, and say unto them, When I bring the sword upon a land, the people of the land take a man of the borders thereof, and set him for a watchman:'),
            plain(3, 'If when he seeth the sword come upon the land, he blow the trumpet, and warn the people;'),
            plain(4, 'Then whosoever heareth the sound of the trumpet, and taketh not warning; if the sword come, and take him away, his blood shall be upon his own head.'),
            plain(8, 'When I say unto the wicked, O wicked man, thou shalt surely die; if thou dost not speak to warn the wicked from his way, that wicked man shall die in his iniquity; but his blood will I require at thine hand.'),
            plain(9, 'Nevertheless, if thou warn the wicked of his way to turn from it; if he do not turn from his way, he shall die in his iniquity; but thou hast delivered thy soul.'),
            plain(11, 'Say unto them, As I live, saith the Lord God, I have no pleasure in the death of the wicked; but that the wicked turn from his way and live: turn ye, turn ye from your evil ways; for why will ye die, O house of Israel?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel33-watchman-call',
          html:
            'The watchman is given an impossible-sounding task. He must warn. He must blow the trumpet so loudly, so clearly, that no one can pretend they did not hear. Yet he cannot force anyone to listen. He is responsible for his faithfulness to speak, but not for their choice to listen. This is the tension at the heart of all moral exhortation: you can tell the truth, but you cannot compel belief.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel33-blood',
          html:
            'The language of blood—"his blood shall be upon his own head"—is not cursing. It is accountability. If you choose to ignore the warning, your death is your responsibility, not the watchman&apos;s. But if the watchman does not warn, then he bears the responsibility. This is why the prophet&apos;s calling is not comfortable. To speak God&apos;s truth is to accept responsibility. To remain silent is to accept a different kind of responsibility.',
        },
        {
          kind: 'hebrew',
          id: 'ezekiel33-shomer',
          title: 'Shomer — "Watchman" ',
          script: 'שׁוֹמֵר',
          translit: '<strong>Shomer</strong> · watchman; guardian; one who keeps watch',
          description:
            'The shomer stands in a place of vigilance and vulnerability. He must be awake when others sleep, alert to danger, ready to cry out. The term speaks not just of office but of character—the quality of one who does not grow weary or complacent in a difficult calling.',
        },
        {
          kind: 'christ',
          id: 'ezekiel33-christ-repent',
          title: 'Christ Connection — God&apos;s Call to Repent',
          html:
            'John the Baptist came as a watchman in the wilderness, crying out in preparation for Christ: "Repent ye, for the kingdom of heaven is at hand." And Christ Himself took up this call: "Repent, for the kingdom of God is at hand." The entire New Testament is shot through with this urgency: turn, now, while there is time. Christ is the ultimate watchman, warning all who will hear, grieving over those who refuse. Yet the love beneath the warning is absolute: "I have no pleasure in the death of the wicked."',
        },
        {
          kind: 'carry',
          html:
            'If you have been called to speak truth—as a parent, a teacher, a friend, a leader—Ezekiel&apos;s commission applies to you. Your responsibility is to speak clearly, lovingly, without compromise. The response of others is not your responsibility, but the faithfulness of your warning is. Do not stay silent out of fear. But also do not rage at those who refuse to listen. Tell the truth. And trust God with the outcome.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel33-when-warn',
          prompt: 'When has someone warned you, and you chose not to listen? What would you tell your younger self about the cost of that refusal? Who in your life might you need to speak truth to now?',
        },
      ],
    },

    {
      ref: 'Ezekiel 33:12–20',
      title: 'The Promise of Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(12, 'Therefore, thou son of man, say unto the children of thy people, The righteousness of the righteous shall not deliver him in the day of his transgression: as for the wickedness of the wicked, he shall not fall thereby in the day that he turneth from his wickedness; neither shall the righteous be able to live for it in the day that he sinneth.'),
            plain(14, 'Again, when I say unto the wicked, Thou shalt surely die; if he turn from his sin, and do that which is lawful and right;'),
            plain(15, 'If the wicked restore the pledge, give again that he had robbed, walk in the statutes of life, without committing iniquity; he shall surely live, he shall not die.'),
            plain(16, 'None of his sins that he hath committed shall be mentioned unto him: he hath done that which is lawful and right; he shall surely live.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel33-turn',
          html:
            'The message is breathtaking in its immediacy. There is no probation period, no extended trial of repentance. "If the wicked turn from his way and live"—the response is instantaneous. The moment you turn, God&apos;s mercy is active. Your past transgressions are not held against you. You are welcomed back as if you had never fallen.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel33-restitution',
          html:
            'Yet repentance is not merely internal. The wicked man who turns must "restore the pledge, give again that he had robbed." He must make right what he has made wrong. Grace does not erase the ethical imperative to repair the harm you have caused. It transforms your ability to do so.',
        },
        {
          kind: 'carry',
          html:
            'This is among the most compassionate passages in Scripture. God is not interested in your destruction. He is interested in your turning. Every moment is a new moment. Every day is a threshold. You can step through it toward life or away from it toward death. God Himself pleads with you: turn. Why will you die?',
        },
        {
          kind: 'reflection',
          id: 'ezekiel33-turn-toward',
          prompt: 'Is there a place in your life where you have been walking away from God, and you know it? What would turning toward life look like for you, specifically?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'As I live, saith the Lord God, I have no pleasure in the death of the wicked; but that the wicked turn from his way and live.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 33 · Study Guide',
  },

  hasHebrew: true,
};
