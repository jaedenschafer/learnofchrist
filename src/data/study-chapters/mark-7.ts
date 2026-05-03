import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Mark 7 — Defilement from Within
 *
 * The Pharisees and scribes ask Jesus why His disciples eat without washing their
 * hands according to the tradition of the elders. Jesus responds by exposing the
 * contradiction at the heart of their religiosity: they have made the tradition
 * equal to the command of God. But defilement comes not from without but from
 * within—from the human heart. "Out of the abundance of the heart the mouth
 * speaketh." Jesus heals a Syrophoenician woman&apos;s daughter and a deaf-mute man,
 * declaring: "Ephphatha"—be opened. The chapter reveals that purity is not a matter
 * of ritual but of the heart, that mercy supersedes law, and that the kingdom of
 * Christ is open to all, not bound by tribal or ceremonial boundaries.
 */
export const MARK_7: RichChapterContent = {
  bookSlug: 'mark',
  bookName: 'Mark',
  chapter: 7,

  estimatedMinutes: { beginner: 2, intermediate: 6, deep: 8 },
  intros: [
    'Mark 7 opens with a confrontation between Jesus and the religious authorities. The Pharisees and scribes have come from Jerusalem and notice that some of the disciples eat without washing their hands according to the tradition of the elders. This is not a matter of hygiene but of ritual purity. The tradition has become law. But Jesus will not accept the subordination of God&apos;s actual command to human tradition. He points out their hypocrisy: they leave the command of God to hold fast to the tradition of men.',
    'Jesus teaches that defilement comes not from eating with unwashed hands but from the human heart. "There is nothing from without a man, that entering into him can defile him: but the things which come out of him, those are they that defile the man." It is what comes out—evil thoughts, murders, adulteries—that defiles. The chapter then moves to the healing of a Syrophoenician woman&apos;s daughter—a non-Jewish woman, one outside the covenant—and a deaf-mute man. Both are healed. Both are brought within the circle of Jesus&apos; care and restoration. The boundary between insider and outsider is dissolved.',
  ],

  sections: [
    /* ─── Mark 7:1–23 — Defilement from Within ───────────────────────── */
    {
      ref: 'Mark 7:1–23',
      title: 'The Heart, Not the Hand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(5, 'Then the Pharisees and scribes asked him, Why walk not thy disciples according to the tradition of the elders, but eat bread with unwashen hands?'),
            plain(8, 'For laying aside the commandment of God, ye hold the tradition of men:'),
            plain(15, 'There is nothing from without a man, that entering into him can defile him: but the things which come out of him, those are they that defile the man.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark-7-78mid-1',
          html:
            'Jesus has cleansed the heart of a Gentile woman&apos;s daughter, proving that compassion transcends the law; now He moves to Galilee. The kingdoms of tradition yield to the kingdom of God.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(20, 'And he said, That which cometh out of the man, that defileth the man.'),
            plain(21, 'For from within, out of the heart of men, proceed evil thoughts, adulteries, fornications, murders,'),
            plain(22, 'Thefts, covetousness, wickedness, deceit, lasciviousness, an evil eye, blasphemy, pride, foolishness:'),
            plain(23, 'All these evil things come from within, and defile the man.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark7-tradition',
          html:
            'The tradition of the elders[res:sefaria-pharisaic-tradition] is not the Torah itself but the accumulated interpretation and application of the Torah developed over centuries. It has become as binding as the law itself. The Pharisees ask Jesus why His disciples break the tradition. Jesus responds by distinguishing between the commandment of God and the tradition of men. The tradition may be reverend, but it is not divine. When tradition contradicts God&apos;s actual command, Jesus chooses the command.',
        },
        {
          kind: 'commentary',
          id: 'mark7-heart-defiles',
          html:
            'Jesus teaches a radical truth: nothing from without a man can defile him[res:perseus-defiled]. It is not eating with unwashed hands, not certain foods, not external ritual that makes a person unclean. Defilement comes from within—from the heart. Mark lists the evils that proceed from within: "evil thoughts, adulteries, fornications, murders, thefts, covetousness, wickedness, deceit, lasciviousness, an evil eye, blasphemy, pride, foolishness." These are the things that truly defile.',
        },
        {
          kind: 'greek',
          id: 'mark7-miasma',
          title: 'Koinos — Common, Unclean',
          script: 'κοινός',
          translit: '<strong>Koinos</strong> · common; shared; unclean (in Jewish law)',
          description:
            'The Pharisees consider unwashed hands to be koinos—common, unclean, defiling. But Jesus redefines what it means to be defiled. It is not about ritual contact with the common but about what dwells in the human heart.',
        },
        {
          kind: 'commentary',
          id: 'mark7-interpreter',
          html:
            'This teaching has profound implications[res:bible-odyssey-gentiles-covenant]. It means that righteousness is not a matter of external observance, no matter how scrupulous. It is a matter of the heart. One can wash hands perfectly and still be full of envy and malice. One can keep every law and still be far from God if the heart is not right.',
        },
        {
          kind: 'christ',
          id: 'mark7-christ-heart',
          title: 'Christ Connection — The Searcher of Hearts',
          html:
            'Jesus teaches with the authority of one who knows the human heart. He does not judge by outward appearance. He sees into the deepest places of intention and desire. In Him, the hidden things of the heart are exposed, and true cleansing becomes possible.',
        },
        {
          kind: 'carry',
          html:
            'The teaching challenges us to look inward. What are the true sources of our pride, our greed, our malice? No amount of outward righteous behavior can hide these from God. But confession and repentance can cleanse them.',
        },
        {
          kind: 'reflection',
          id: 'mark7-heart-exam',
          prompt: 'What evil thoughts or intentions dwell in your heart? What would need to change in your inner world for true righteousness to flourish?',
        },
      ],
    },

    /* ─── Mark 7:24–30 — The Syrophoenician Woman ────────────────────── */
    {
      ref: 'Mark 7:24–30',
      title: 'Mercy Beyond Boundary',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(24, 'And from thence he arose, and went into the borders of Tyre and Sidon, and entered into an house, and would have no man know it: but he could not be hid.'),
            plain(26, 'The woman was a Greek, a Syrophoenician by birth; and she besought him that he would cast forth the devil out of her daughter.'),
            plain(27, 'But Jesus said unto her, Let the children first be filled: for it is not meet to take the children&apos;s bread, and to cast it to the dogs.'),
            plain(28, 'And she answered and said unto him, Yes, Lord: yet the dogs under the table eat of the children&apos;s crumbs.'),
            plain(29, 'And he said unto her, For this saying go thy way; the devil is gone out of thy daughter.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark7-syrophoenician',
          html:
            'Jesus withdraws to the region of Tyre and Sidon—Gentile territory, outside Israel. A Syrophoenician woman, a pagan, comes to Him begging Him to cast out a demon from her daughter. According to Jewish understanding, Jesus&apos; mission is first to the children of Israel. The woman is an outsider. Jesus initially responds: "Let the children first be filled: for it is not meet to take the children&apos;s bread, and to cast it to the dogs." Dogs was a contemptuous term for pagans.',
        },
        {
          kind: 'commentary',
          id: 'mark7-crumbs-faith',
          html:
            'But the woman responds with wit and faith: "Yes, Lord: yet the dogs under the table eat of the children&apos;s crumbs." She accepts the designation "dog" but argues that even dogs receive crumbs from the master&apos;s table. She is not asking for the full healing given to Israel. She is asking for the overflow, the crumbs. Jesus is moved by her wit and faith: "For this saying go thy way; the devil is gone out of thy daughter." She receives what she asked for and more.',
        },
        {
          kind: 'greek',
          id: 'mark7-pistis',
          title: 'Pistis — Faith',
          script: 'πίστις',
          translit: '<strong>Pistis</strong> · faith; trust; belief; persuasion',
          description:
            'The woman&apos;s faith is demonstrated not in doctrinal assertion but in persistent, witty, humble trust. She will not be deterred by apparent rejection. She trusts that crumbs from Jesus are enough.',
        },
        {
          kind: 'christ',
          id: 'mark7-christ-border',
          title: 'Christ Connection — No Outsider to God',
          html:
            'The healing of the Syrophoenician woman&apos;s daughter reveals that Jesus&apos; mercy is not bound by tribal or religious boundaries. The outsider who seeks Him with faith is included. The walls between insider and outsider are broken down. In Christ, all are drawn near.',
        },
        {
          kind: 'carry',
          html:
            'The woman teaches us about persistence and humility. She does not demand, does not take offense at Jesus&apos; initial refusal. She asks humbly, with faith that even crumbs from His table are sufficient. That kind of trust moves the heart of Jesus.',
        },
        {
          kind: 'reflection',
          id: 'mark7-persistence',
          prompt: 'When have you felt like an outsider to God&apos;s promises? What would it take for you to ask, like the Syrophoenician woman, for even the crumbs?',
        },
      ],
    },

    /* ─── Mark 7:31–37 — The Deaf-Mute Healed ────────────────────────── */
    {
      ref: 'Mark 7:31–37',
      title: 'Ephphatha—Be Opened',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(31, 'And again, departing from the coasts of Tyre and Sidon, he came unto the sea of Galilee, through the midst of the coasts of Decapolis.'),
            plain(32, 'And they bring unto him one that was deaf, and had an impediment in his speech; and they beseech him to put his hand upon him.'),
            plain(34, 'And looking up to heaven, he sighed, and saith unto him, Ephphatha: that is, Be opened.'),
            plain(35, 'And straightway his ears were opened, and the string of his tongue was loosed, and he spake plain.'),
            plain(37, 'And were beyond measure astonished, saying, He hath done all things well: he maketh both the deaf to hear, and the dumb to speak.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark7-deaf-mute',
          html:
            'In the region of Decapolis, people bring to Jesus a man who is deaf and has an impediment in his speech. He cannot hear or speak. These disabilities isolate him from communication and community. They beseech Jesus to touch him. Jesus takes him aside privately, puts His fingers in his ears, spits, touches his tongue, and sighs. Then He speaks in Aramaic: "Ephphatha—be opened." Immediately his ears are opened and his tongue is loosed.',
        },
        {
          kind: 'commentary',
          id: 'mark7-sigh',
          html:
            'Mark notes that Jesus sighs. This is not impatience but compassion—a deep, groan-like response to human suffering and limitation. Then comes the word: "Ephphatha—be opened." The man immediately hears and speaks. The barriers that separated him from community are dissolved.',
        },
        {
          kind: 'greek',
          id: 'mark7-stenaxō',
          title: 'Stenaxō — Sigh, Groan',
          script: 'στενάζω',
          translit: '<strong>Stenaxō</strong> · sigh; groan; utter a sound of grief or distress',
          description:
            'The sigh of Jesus is not a sigh of weariness but of compassion. It is a response to suffering, a movement of the deep self toward another&apos;s pain.',
        },
        {
          kind: 'commentary',
          id: 'mark7-ephphatha',
          html:
            'Mark preserves the Aramaic word "Ephphatha"—be opened. This word of opening is not merely physical. It suggests the opening of understanding, of possibility, of the barriers between self and other. The man is opened. He is restored to hearing and speech, to the possibility of communion.',
        },
        {
          kind: 'christ',
          id: 'mark7-christ-opens',
          title: 'Christ Connection — Opening the Way',
          html:
            'Jesus opens what was closed. He opens ears to hear His voice, tongues to speak His praise, hearts to receive His mercy. He opens the way between God and humanity, between outsiders and the community of faith.',
        },
        {
          kind: 'carry',
          html:
            'Mark 7 closes with a profound message: there is nothing that prevents Jesus from healing and restoring. Not tradition, not boundary, not disability, not isolation. He opens the way. He declares all things to be made well.',
        },
        {
          kind: 'reflection',
          id: 'mark7-ephphatha-2',
          prompt: 'What in your life needs to be opened? What barriers, internal or external, keep you from hearing God&apos;s voice and speaking His praise?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'There is nothing from without a man, that entering into him can defile him: but the things which come out of him, those are they that defile the man. Ephphatha: that is, Be opened.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Mark 7 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-pharisaic-tradition',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus & Pharisaic Interpretation',
      url: 'https://www.sefaria.org/Leviticus.11-15?lang=bi',
      description: 'Torah texts on purity law that frame the Pharisaic tradition Jesus confronts.',
    },
    {
      id: 'bible-odyssey-gentiles-covenant',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Gentiles & Covenant Community',
      url: 'https://www.bibleodyssey.org/dictionary/gentiles/',
      description: 'Open-access entry on Gentile status in first-century Judaism and the significance of Jesus healing a Gentile woman.',
    },
    {
      id: 'perseus-defiled',
      kind: 'lexicon',
      source: 'Perseus Scaife',
      label: 'Κοινός (koinos) — Common/Unclean',
      url: 'https://scaife.perseus.org/lexica/lsj/κοινός/',
      description: 'Greek lexicon entry for the term Jesus redefines regarding ritual purity and defilement.',
    },
  ],

  hasHebrew: false,
};
