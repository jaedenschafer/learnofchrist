import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 42 — The Gentle Servant
 *
 * "Behold my servant, whom I uphold; mine elect, in whom my soul delighteth:
 * I have put my spirit upon him." This is the first Servant Song. "A bruised
 * reed shall he not break, and the smoking flax shall he not quench."
 * Tenderness, not force. Gentleness, not coercion. Matthew quotes this passage
 * of Jesus and says: this is the Messiah. The one who comes not with a rod of
 * iron, but with the gentleness of one who heals the broken and nurtures the
 * faint.
 */
export const ISAIAH_42: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 42,

  intros: [
    'Isaiah 42 introduces one of the most important themes in the prophetic books: the Servant of the Lord. This servant is called God&apos;s elect, the one in whom God&apos;s soul delights. The Spirit is put upon him. And his method is striking: he will not cry aloud or lift his voice in the streets. A bruised reed he will not break. A smoking flax he will not quench. He will not fail or be discouraged until he has set judgment in the earth. This is not a description of a powerful conqueror. This is the description of one whose power is expressed through gentleness, through healing, through the patient establishment of justice. Matthew explicitly quotes this passage and applies it to Jesus. This is the Messiah.',
  ],

  sections: [
    {
      ref: 'Isaiah 42:1–9',
      title: 'The Servant Song: Gentleness and Justice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            plain(1, 'Behold my servant, whom I uphold; mine elect, in whom my soul delighteth: I have put my spirit upon him: he shall bring forth judgment to the Gentiles.'),
            plain(2, 'He shall not cry, nor lift up, nor cause his voice to be heard in the street.'),
            plain(3, 'A bruised reed shall he not break, and the smoking flax shall he not quench: he shall bring forth judgment in truth.'),
            plain(4, 'He shall not fail nor be discouraged, till he have set judgment in the earth: and the isles shall wait for his law.'),
            plain(5, 'Thus saith God the Lord, he that created the heavens, and stretched them out; he that spread forth the earth, and that which cometh out of it; he that giveth breath unto the people upon it, and spirit to them that walk therein:'),
            plain(6, 'I the Lord have called thee in righteousness, and will hold thine hand, and will keep thee, and give thee for a covenant of the people, for a light to the Gentiles;'),
            plain(7, 'To open the blind eyes, to bring out the prisoners from the prison, and them that sit in darkness out of the prison house.'),
            plain(8, 'I am the Lord: that is my name: and my glory will I not give to another, neither my praise to graven images.'),
            plain(9, 'Behold, the former things are come to pass, and new things do I declare: before they spring forth I tell you of them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah42-servant',
          html:
            'The first Servant Song opens with wonder: "Behold my servant, whom I uphold." This servant is not earning God&apos;s approval through obedience. God already upholds him. God&apos;s soul delights in him. He is the chosen one, the elect, the one on whom God&apos;s Spirit rests. This is the foundation: not a servant who must prove himself, but a servant already affirmed, already chosen, already filled with the Spirit.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah42-ebed',
          title: 'Ebed — "Servant" (Slave, One Who Serves)',
          script: 'עֶבֶד',
          translit: '<strong>Ebed</strong> · servant, slave, one who serves; one in the position of service',
          description:
            'The Hebrew ebed carries the sense of one who is devoted to service. Not merely a hired worker, but one whose identity is bound up in their service. The Servant of the Lord is one whose entire purpose and identity is wrapped up in serving God and doing God&apos;s will.',
        },
        {
          kind: 'commentary',
          id: 'isaiah42-bruised-reed',
          html:
            'The portrait of the servant&apos;s method is striking: "A bruised reed shall he not break, and the smoking flax shall he not quench." A bruised reed is almost broken already. A smoking flax is nearly extinguished. The servant&apos;s method toward those who are broken and barely clinging to life is not to finish them off, but to restore them. He will heal the broken. He will nurture the faint flame of hope back to brightness.',
        },
        {
          kind: 'commentary',
          id: 'isaiah42-judgment',
          html:
            'Yet the servant will not fail in bringing forth justice: "he shall bring forth judgment in truth...till he have set judgment in the earth." This is the paradox: gentleness with the broken, unrelenting commitment to justice. The servant does not use gentleness to escape the hard work of establishing justice. He uses gentleness to do it rightly.',
        },
        {
          kind: 'christ',
          id: 'isaiah42-christ-servant',
          title: 'Christ Connection — The Gentle Messiah',
          html:
            'Matthew 12:18–21 quotes this passage explicitly of Jesus: "Behold my servant whom I have chosen; my beloved, in whom my soul is well pleased...A bruised reed shall he not break, and smoking flax shall he not quench." Jesus&apos; method was not coercion. It was invitation. He healed the sick, opened the eyes of the blind, spoke truth to the marginalized. He did not crush those who were already broken. He lifted them up. Yet He also spoke truth without compromise and established the kingdom of justice through His sacrifice.',
        },
        {
          kind: 'carry',
          html:
            'The Servant Song calls every reader to a particular way of engaging the world: with gentleness toward the broken, with unrelenting commitment to justice, without self-aggrandizement or loud self-assertion. This is countercultural. The world teaches: advance yourself loudly, crush your enemies, show no weakness. The servant teaches: heal the broken quietly, pursue justice steadily, give all glory to God.',
        },
        {
          kind: 'reflection',
          id: 'isaiah42-servant-way',
          prompt: 'When you encounter those who are broken, bruised, or barely holding on, what is your instinct? Do you seek to heal them or to critique them? How could you embody the Servant&apos;s gentleness while also standing firm on justice?',
        },
      ],
    },

    {
      ref: 'Isaiah 42:10–25',
      title: 'Sing a New Song; Israel&apos;s Blindness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            plain(10, 'Sing unto the Lord a new song, and his praise from the end of the earth, ye that go down to the sea, and all that is therein; the isles, and the inhabitants thereof.'),
            plain(11, 'Let the wilderness and the cities thereof lift up their voice, the villages that Kedar doth inhabit: let the inhabitants of the rock sing, let them shout from the top of the mountains.'),
            plain(12, 'Let them give glory unto the Lord, and declare his praise in the islands.'),
            plain(13, 'The Lord shall go forth as a mighty man, he shall stir up jealousy like a man of war: he shall cry, yea, roar; he shall prevail against his enemies.'),
            plain(14, 'I have long time holden my peace; I have been still, and refrained myself: now will I cry like a travailing woman; I will destroy and devour at once.'),
            plain(15, 'I will make waste mountains and hills, and dry up all their herbs; and I will make the rivers islands, and I will dry up the pools.'),
            plain(16, 'And I will bring the blind by a way that they knew not; I will lead them in paths that they have not known: I will make darkness light before them, and crooked things straight. These things will I do unto them, and not forsake them.'),
            plain(17, 'They shall be turned back, they shall be greatly ashamed, that trust in graven images, that say to the molten images, Ye are our gods.'),
            plain(18, 'Hear, ye deaf; and look, ye blind, that ye may see.'),
            plain(19, 'Who is blind, but my servant? or deaf, as my messenger that I sent? who is blind as he that is perfect, and blind as the Lord&apos;s servant?'),
            plain(20, 'Seeing many things, but thou observest not; opening the ears, but he heareth not.'),
            plain(21, 'The Lord is well pleased for his righteousness&apos; sake; he will magnify the law, and make it honourable.'),
            plain(22, 'But this is a people robbed and spoiled; they are all of them snared in holes, and they are hid in prison houses: they are for a prey, and none delivereth; for a spoil, and none saith, Restore.'),
            plain(23, 'Who among you will give ear to this? who will hearken and hear for the time to come?'),
            plain(24, 'Who gave Jacob for a spoil, and Israel to the robbers? did not the Lord, he against whom we have sinned? for they would not walk in his ways, neither were they obedient unto his law.'),
            plain(25, 'Therefore he hath poured upon him the fury of his anger, and the strength of battle: and it hath set him on fire round about, yet he knew not; and it burned him, yet he laid it not to heart.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah42-new-song',
          html:
            'The chapter moves from the portrait of the servant to a call to celebration: "Sing unto the Lord a new song." The Servant&apos;s work is so transformative that all creation is invited to sing. The wilderness, the cities, the islands, the mountains—all are called to lift their voices in praise. The work of the Servant deserves this response.',
        },
        {
          kind: 'commentary',
          id: 'isaiah42-blind-servant',
          html:
            'Then comes a shocking reversal. The servant is described as gentle toward the broken. But Israel itself is described as blind and deaf: "Who is blind, but my servant? or deaf, as my messenger that I sent?" Israel has been called to be God&apos;s servant, but Israel has become blind and deaf. They see many things but observe not. Their ears are opened but they hear not. This is not physical blindness. This is spiritual blindness—the refusal or inability to perceive God&apos;s will and way.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah42-avur',
          title: 'Avur — "Because" (On Account of)',
          script: 'עֲבוּר',
          translit: '<strong>Avur</strong> · because, on account of, for the sake of',
          description:
            'The passage explains that Israel&apos;s blindness is "because they would not walk in his ways, neither were they obedient unto his law." The blindness is not arbitrary judgment. It is the consequence of willful disobedience. Israel has chosen not to see, not to hear, not to obey.',
        },
        {
          kind: 'commentary',
          id: 'isaiah42-spoil',
          html:
            'Israel is described as "a people robbed and spoiled...snared in holes...hid in prison houses." This is the exile. But the tragedy is that the exile is not merely the work of enemies. "Who gave Jacob for a spoil, and Israel to the robbers? did not the Lord?" God Himself has allowed Israel to be spoiled—not because God is cruel, but because Israel refused to walk in His ways. The consequence of disobedience is loss.',
        },
        {
          kind: 'christ',
          id: 'isaiah42-christ-blindness',
          title: 'Christ Connection — Opening Blind Eyes',
          html:
            'Christ came to open the eyes of the blind—both physically and spiritually. He said: "For judgment I am come into this world, that they which see not might see; and that they which see might be made blind." Christ&apos;s mission was to expose spiritual blindness and to restore true sight—the ability to perceive God&apos;s kingdom, to recognize His presence, to understand His will.',
        },
        {
          kind: 'carry',
          html:
            'The challenge of this passage is to recognize spiritual blindness in oneself. Where has disobedience made me insensitive to God&apos;s voice? Where have I stopped seeing or hearing? What call of God have I grown numb to? The path back to sight is repentance—turning, seeing clearly, hearing again, obeying.',
        },
        {
          kind: 'reflection',
          id: 'isaiah42-blindness-hear',
          prompt: 'Where have you become spiritually blind or deaf—where you see but do not perceive, hear but do not understand? What is God calling you to see or hear that you have been avoiding? What would true sight or hearing require of you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Behold my servant, whom I uphold...A bruised reed shall he not break, and the smoking flax shall he not quench: he shall bring forth judgment in truth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 42 · Study Guide',
  },

  hasHebrew: true,
};
