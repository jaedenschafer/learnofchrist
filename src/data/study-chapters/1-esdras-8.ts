import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Esdras 8 — Ezra's Journey, the Fast, and the Discovery of Covenant Unfaithfulness
 *
 * Esdras (Ezra) arrives in Jerusalem as a ready scribe, commissioned by the king to teach
 * the law and oversee the Temple offerings. Yet upon arrival, he discovers a crisis: the
 * priests, Levites, and people have married foreign women. The covenant has been broken.
 * Esdras tears his garments, fasts, and confesses the people's sin in prayer: "we have
 * not nothing to plead for shame; for we have transgressed thy commandments." This
 * chapter reveals a man whose heart is so bound to God's law that covenant unfaithfulness
 * becomes unbearable — and calls the reader to the same kind of covenant passion.
 *
 * 1 Esdras parallels Ezra 7–9 and is found in the Apocrypha. We treat it with doctrinal
 * neutrality, neither affirming nor denying its canonical status, but honoring the
 * scriptural witness it carries about covenant fidelity and repentance.
 */
export const FIRST_ESDRAS_8: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 8,

  estimatedMinutes: { beginner: 8, intermediate: 15, deep: 21 },
  intros: [
    'After seventy years of exile, God has returned His people to their land. The Temple is rebuilt. But now, eighty years later, a second wave of returnees arrives under the leadership of Esdras—a scribe &quot;ready in the law of Moses.&quot; The king grants him full authority: whatever Esdras commands shall be done. He travels with royal favor, Temple treasures, and the mandate to teach God&apos;s commandments to Israel.',
    'Yet when Esdras arrives in Jerusalem, he encounters a wound deeper than broken walls. The priests and Levites have married women from pagan nations. The very people meant to guard the covenant have stepped outside it. In that moment, Esdras must choose: overlook the compromise, or confront the people with the pain of their unfaithfulness. He chooses the latter. His tears and his confession become a mirror for any reader who loves God&apos;s word—a call to grieve what God grieves, and to seek restoration with the whole heart.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /esdras|ezra/i,
    caption: 'The Story of Esdras: Arrival and Covenant Crisis',
  },

  resources: [
    {
      id: 'sefaria-1-esdras-8-9',
      kind: 'study',
      source: 'Sefaria',
      label: '1 Esdras 8-9 — Dedication and Covenant',
      url: 'https://www.sefaria.org/I_Esdras.8',
      description: 'Second Temple dedication and Festival of Sukkot under Zerubbabel.',
    },
    {
      id: 'bible-odyssey-temple-dedication',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Temple Dedication Ceremonies',
      url: 'https://www.bibleodyssey.org/dictionary/temple/',
      description: 'Religious ceremonies and community gathering for sacred space restoration.',
    },
  ],

  bottomShare: {
    label: 'Share 1 Esdras 8',
    quote:
      'Esdras, a ready scribe in the law of Moses, arrived in Jerusalem to teach God&apos;s commandments. Upon discovery that the people had married foreign wives and broken the covenant, he tore his garments and confessed: "Since the time of our fathers, we have sinned greatly… now we have not nothing to plead for shame; for we have transgressed thy commandments."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 8 · Study Guide',
  },

  sections: [
    /* ─── 1 Esdras 8:1–7 — Esdras Introduced: A Ready Scribe ───────────── */
    {
      ref: '1 Esdras 8:1–7',
      title: 'Esdras: A Ready Scribe in the Law of Moses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 1,
              spans: [
                t('After these things, when the reign of '),
                hg('Artaxerxes', 'artaxerxes-reign'),
                t(' king of Persia was established, '),
                t('Esdras'),
                t(' went up from Babylon.'),
              ],
            },
            plain(2, 'Now Esdras was the son of Saraias, and the son of Saraias of Azarias, and the son of Helchias,'),
            plain(3, 'The son of Sellum, the son of Zadoc, the son of Achitob,'),
            plain(4, 'The son of Amarias, the son of Azarias, the son of Marimoth,'),
            plain(5, 'The son of Zaraias, the son of Savias, the son of Bockie,'),
            plain(6, 'The son of Abisaias, the son of Phinees, the son of Eleazar, the son of Aaron the chief priest:'),
            {
              number: 7,
              spans: [
                t('This Esdras went up from Babylon, and he was a '),
                hy('ready scribe', 'grammateus-ready'),
                t(' in the law of Moses, which was given of the Lord God of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'artaxerxes-reign',
          html:
            'Artaxerxes reigns over Persia, and the seventy-year exile has ended. Yet silence fell on the returning remnant. The Temple foundation was laid; opposition arose; the work stalled. Now, decades after that first return, Esdras comes as the answer to a prayer the text never explicitly records—the prayer of those who longed for the law to be taught, for the covenant to be restored, for God[res:sefaria-1-esdras-8-9] [res:bible-odyssey-temple-dedication]\'s word to take root again in His people\'s hearts.',
        },
        {
          kind: 'commentary',
          id: 'genealogy-line',
          html:
            'The genealogy traces Esdras back through the priestly line to Aaron the chief priest. Esdras is not a stranger but a son of the covenant lineage. He carries within him the memory of sacred service. This is crucial: he comes not as an outsider imposing law, but as one of the people, one whose very blood binds him to God\'s purposes.',
        },
        {
          kind: 'hebrew',
          id: 'esdras-name-meaning',
          title: 'Esdras — "Help" (from Heb. Ezra)',
          script: 'עֶזְרָא',
          translit: '<strong>Esdras (Ezra)</strong> · he helps; one who aids in covenant restoration',
          description:
            'The name Esdras means "help" or "God helps." Throughout this chapter, the meaning becomes flesh. He comes to help a people remember their law, to help teachers and judges take their place, to help restore what exile has fractured. A name enacted in covenant.',
        },
        {
          kind: 'greek',
          id: 'grammateus-ready',
          title: 'Grammateus — "Ready Scribe"',
          script: 'γραμματεύς',
          translit: '<strong>Grammateus</strong> · scribe; ready; skilled; one who preserves the word',
          description:
            'Esdras is not merely learned but ready—prepared, skillful, eager. The scribe was a keeper of tradition, a guardian of the law, a man whose whole life had been shaped by God\'s word. Readiness is not luck. It is the fruit of a life devoted to seeking, knowing, and living the law.',
        },
        {
          kind: 'carry',
          html:
            'Esdras did not become ready overnight. He prepared his heart through study, through prayer, through alignment with God\'s word. When the moment came—when the king granted him authority, when the people needed teaching—he was ready. What are you preparing yourself for? What disciplines of heart and mind are shaping you now for a calling you cannot yet fully see?',
        },
        {
          kind: 'reflection',
          id: 'readiness-preparation',
          prompt: 'What does it mean to be "ready" in your walk with God? What preparation in Scripture, prayer, or obedience is God calling you to now?',
        },
        {
          kind: 'artwork',
          matchTitle: /scribe|priest/i,
          caption: '1 Esdras 8:1–7 · Esdras, Ready Scribe',
        },
      ],
    },

    /* ─── 1 Esdras 8:8–25 — The King's Commission and Royal Authority ───── */
    {
      ref: '1 Esdras 8:8–25',
      title: 'The King Grants Authority: Law Over Empire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 8,
              spans: [
                t('And the king gave him commandment to do all these things, and to '),
                hg('make a commandment unto all the treasurers and governors', 'royal-decree'),
                t(':'),
              ],
            },
            {
              number: 9,
              spans: [
                t('That whatsoever '),
                hp('Esdras', 'esdras-authority'),
                t(' the priest and reader of the law of the Lord commandeth, should be done unto him, without fail.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And to carry the holy vessels of the Lord, which were given him to bring into the temple at Jerusalem.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And whosoever of the people of Israel, or of the priests, or of the Levites, in our realm, are minded of their own freewill to go up with him, let them go.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And all they that go, let them do according to the law of God, and the commandments of the king, which he hath sent.'),
              ],
            },
            plain(22, 'And all the treasurers and governors and captains and chief men of the provinces, whom Esdras the priest sent, did him honor.'),
            plain(23, 'So the holy vessels of the Lord were brought by Esdras into the house of the Lord at Jerusalem.'),
            plain(24, 'And when Esdras had come to Jerusalem, he continued there three days.'),
            {
              number: 25,
              spans: [
                t('And on the fourth day the silver and the gold was weighed, and delivered unto '),
                hg('Meremoth', 'meremoth-priest'),
                t(' the priest the son of Urias, the house of the Lord; and with him Jozabad the son of Josias, and Noadias the son of Binnui a Levite; by tale and weight of every one.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'royal-decree',
          html:
            'The king does not merely tolerate the return; he mandates it. He commands all treasurers and governors to obey Esdras. This is extraordinary. A pagan ruler, by the hand of God working unseen, grants authority to God\'s law. The treasures of the Temple travel under royal protection. The law of Israel becomes the standard for judgment in the provinces.',
        },
        {
          kind: 'commentary',
          id: 'esdras-authority',
          html:
            'Esdras is named as "priest and reader of the law of the Lord." The king recognizes him not as a administrator or builder, but as one who reads and teaches God\'s law. This is where Esdras\'s true authority lies: not in the king\'s favor, but in his covenant devotion. The king\'s decree merely makes visible what is already true in the spirit—that Esdras carries God\'s word.',
        },
        {
          kind: 'commentary',
          id: 'meremoth-priest',
          html:
            'Meremoth, a priest, receives the treasures in Jerusalem. The weighting and accounting is meticulous. Every vessel, every talent of silver and gold, is recorded and witnessed. This speaks to the seriousness with which the returning community treats the work of restoration. Nothing is casual. Everything is sacred.',
        },
        {
          kind: 'greek',
          id: 'exousia-authority',
          title: 'Exousia — "Authority" or "Power"',
          script: 'ἐξουσία',
          translit: '<strong>Exousia</strong> · authority; power to command; delegated right',
          description:
            'The king grants Esdras authority—not as a personal possession, but as a sacred trust. Esdras does not use this authority for his own advancement, but to establish judges, teach the law, and strengthen the covenant. True authority is always in service of something larger than oneself.',
        },
        {
          kind: 'christ',
          id: 'christ-greater-authority',
          title: 'Christ Connection — Authority and Servant Love',
          html:
            'Jesus receives "all authority in heaven and in earth" (Matthew 28:18). Yet He uses it not to command obedience or build an earthly empire, but to serve and to save. "The Son of Man came not to be ministered unto, but to minister, and to give his life a ransom for many" (Matthew 20:28). Like Esdras, Jesus receives authority from a higher power. But whereas the king grants Esdras authority over provinces, Christ\'s authority is cosmic—and His first use of it is to wash the feet of His disciples. Esdras teaches judges and priests. Christ teaches all nations. And His teaching, like Esdras\'s, carries a kingdom that transcends earthly power.',
        },
        {
          kind: 'carry',
          html:
            'You carry authority too—over your household, your work, your sphere of influence. The question is not whether you have it, but what you do with it. Esdras uses his authority to establish the law and strengthen the covenant. What authority has God placed in your hands? Are you using it to serve God\'s purposes, or to build your own kingdom?',
        },
        {
          kind: 'reflection',
          id: 'authority-service',
          prompt: 'What authority or influence has God given you? How are you using it to strengthen God\'s kingdom or to serve others?',
        },
      ],
    },

    /* ─── 1 Esdras 8:63–72 — The Discovery: Priests and Levites Married Foreigners ── */
    {
      ref: '1 Esdras 8:63–72',
      title: 'The Discovery: Covenant Unfaithfulness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 63,
              spans: [
                t('So when '),
                hg('Esdras had taken up the account of the leaders', 'census-leaders'),
                t(', he went up, and found dwelling at Jerusalem many of the Israelites,'),
              ],
            },
            plain(64, 'And the holy vessels, which were carried away out of the temple, were brought.'),
            {
              number: 65,
              spans: [
                t('And the king said unto Esdras, Go, and sanctify thee with the law of thy God, and all the vessels that are given thee.'),
              ],
            },
            {
              number: 66,
              spans: [
                t('And said, Take heed now with the priests and Levites, and the leaders of Israel at Jerusalem, that the holy vessels be brought into the house of the Lord.'),
              ],
            },
            plain(67, 'Then Esdras, upon the first day, called together such as were of the priests and Levites at Jerusalem,'),
            {
              number: 68,
              spans: [
                t('And said unto them, '),
                hg('Ye have transgressed the law', 'transgression-announced'),
                t(', and married '),
                hg('strange women', 'strange-women'),
                t(', thereby to increase the trespasses of Israel.'),
              ],
            },
            plain(69, 'Now therefore make confession unto the Lord God of your fathers, and do his will: and separate yourselves from the heathen of the land, and from the strange women.'),
            {
              number: 70,
              spans: [
                t('Then cried all the multitude with a loud voice, and said, '),
                t('As thou hast said'),
                t(', so will we do.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'census-leaders',
          html:
            'Esdras has arrived and taken account of the leaders. He is not touring the Temple or marveling at the restored stones. He is immediately concerned with the people themselves. This is the heart of a scribe devoted to the law: the people matter more than buildings. Their covenant matters more than architecture.',
        },
        {
          kind: 'commentary',
          id: 'transgression-announced',
          html:
            'Upon investigation, Esdras discovers the wound. The priests and Levites—the very ones appointed to guard the covenant—have married foreign women. This is not a personal preference or a cultural accommodation. In the covenant of Israel, marriage to those outside the covenant threatens the covenant itself. The people have been called to be separate, holy, devoted entirely to the God of their fathers. By marrying outsiders, they have blurred that line. And Esdras grieves.',
        },
        {
          kind: 'commentary',
          id: 'strange-women',
          html:
            'The term "strange women" (xenai, foreign women) is not about women themselves, but about covenant boundary. In the narrative of Israel, intermarriage with pagan nations has always carried spiritual weight. Solomon\'s foreign wives turned his heart away from God (1 Kings 11:3–4). The Israelites at the time of the Exodus feared that mixed marriage would lead them astray (Deuteronomy 7:3–4). Esdras does not speak from prejudice, but from the logic of covenant: you cannot be wholly devoted to the God of Israel if your household is divided. The boundary is about loyalty, not ethnicity.',
        },
        {
          kind: 'greek',
          id: 'parabasis-trespassing',
          title: 'Parabasis — "Transgression"',
          script: 'παράβασις',
          translit: '<strong>Parabasis</strong> · transgression; stepping over the line; violation',
          description:
            'A transgression is not an accident or a slip. It is a deliberate stepping over the boundary God has set. The priests and Levites have known the law. They have stepped across the line anyway. This is the weight that Esdras feels. Not mere cultural drift, but covenantal betrayal.',
        },
        {
          kind: 'christ',
          id: 'christ-boundary-love',
          title: 'Christ Connection — The Covenant Made Real',
          html:
            'Jesus teaches about divorce, saying, "Have ye not read, that he which made them at the beginning made them male and female, and said, For this cause shall a man leave father and mother, and shall cleave to his wife: and they twain shall be one flesh?" (Matthew 19:4–5). Later, Paul writes, "Be ye not unequally yoked with unbelievers: for what fellowship hath righteousness with unrighteousness?" (2 Corinthians 6:14). The New Testament carries forward the principle Esdras is protecting: that our deepest partnerships shape us. A believer yoked to an unbeliever cannot walk together with undivided hearts toward God. Yet where Esdras demands separation and dissolution of existing marriages, Christ\'s covenant offers something deeper: conversion, reconciliation, the possibility of two becoming one in faith. The boundary is not arbitrary cruelty but the recognition that we are remade by those we love.',
        },
        {
          kind: 'carry',
          html:
            'Esdras teaches us that covenant violations cause real grief. Not self-righteous anger, but the deep sorrow of a leader who sees his people divided from God. Where are you divided? Where are the partnerships, habits, or loyalties that pull your heart away from wholehearted devotion to God? Esdras calls the people to face this. And then—remarkably—they answer with "Amen." They hear the word and recognize it as true. Confession precedes restoration.',
        },
        {
          kind: 'reflection',
          id: 'covenant-division',
          prompt: 'Where might your heart be "unequally yoked"—pulled in directions away from God? What would it cost to realign your deepest partnerships toward Him?',
        },
      ],
    },

    /* ─── 1 Esdras 8:73–92 — Esdras' Tearing of Garments and Anguish ────── */
    {
      ref: '1 Esdras 8:73–92',
      title: 'Esdras Tears His Garments: The Weight of Covenant Unfaithfulness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(73, 'And the matters came unto the king\'s ears concerning the multitude, and they came into Jerusalem.'),
            plain(78, 'And when Esdras heard these things, he rent his garments, and the hair of his head and beard, and sat him down astonied.'),
            {
              number: 79,
              spans: [
                t('And all they that were moved at the word of the Lord of Israel gathered unto him: for he '),
                hg('mourned', 'mourned-transgression'),
                t(' for the transgression of them that were carried away.'),
              ],
            },
            {
              number: 81,
              spans: [
                t('And I sat sorrowing and very much troubled, and remained fasting until the evening sacrifice.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tearing-garments',
          html:
            'Esdras tears his garments. This is not drama for effect. In the ancient world, tearing garments was the language of deep grief—the kind of grief that cannot be contained in words. Esdras has come to teach the law. He has come with royal backing, with Temple treasures, with the authority of the king. And he discovers covenant betrayal. The weight of this discovery breaks him.',
        },
        {
          kind: 'hebrew',
          id: 'kara-tearing',
          title: 'Qara — "To Tear" or "To Rend"',
          script: 'קָרַע',
          translit: '<strong>Qara</strong> · to tear; to rend asunder; to split with anguish',
          description:
            'When someone tears their garments, they are signaling that something inside has been torn. The outward action mirrors the inward breaking. Esdras is broken by the people\'s unfaithfulness. His devotion to the law is so complete that its violation becomes his personal sorrow.',
        },
        {
          kind: 'commentary',
          id: 'mourned-transgression',
          html:
            'Esdras does not rage at the people. He mourns. Mourning is not anger; it is love grieved. Esdras weeps because he loves the people and sees them separated from God. He fasts until the evening sacrifice—a corporate act of prayer and repentance on behalf of the entire people. He takes the burden of their sin onto himself.',
        },
        {
          kind: 'carry',
          html:
            'Do you grieve when God\'s law is broken? When you see covenant unfaithfulness—in others or in yourself—do you feel the weight of it? Esdras teaches us that true leadership is not detachment but deep feeling. He is not above the people\'s sin; he carries it. He fasts. He prays. He becomes a kind of intercessor, standing between the people and God\'s judgment, calling them back.',
        },
        {
          kind: 'reflection',
          id: 'covenant-grief',
          prompt: 'When have you felt genuine sorrow over covenant unfaithfulness—your own or others\'? What does that sorrow teach you about your love for God?',
        },
      ],
    },

    /* ─── 1 Esdras 8:84–90 — The Prayer of Confession ──────────────────── */
    {
      ref: '1 Esdras 8:84–90',
      title: '"Now We Have Nothing to Plead": The Prayer of Confession',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(84, 'And the multitude gathered themselves together, but I said unto them, Ye have sinned against the Lord, and have married strange women, and thereby increased the trespasses of Israel.'),
            {
              number: 85,
              spans: [
                t('Now therefore '),
                hg('make confession', 'make-confession'),
                t(' unto the Lord God of your fathers, and do his will; and '),
                hg('separate yourselves', 'separate-garments'),
                t(' from the heathen of the land, and from the strange women.'),
              ],
            },
            {
              number: 86,
              spans: [
                t('Then cried all the multitude with a loud voice, and said, As thou hast spoken unto us, so will we do.'),
              ],
            },
            plain(87, 'But forasmuch as the people are in great number, and it is a time of much rain, and we are not able to stand without, and this is not a work of a day or two:'),
            plain(88, 'Let the rulers of the multitude stay, and all they of our habitation that have strange wives shall come at the time appointed,'),
            {
              number: 89,
              spans: [
                t('With the elders and judges of every city, till we have turned away the wrath of the Lord from us concerning this matter.'),
              ],
            },
            plain(90, 'Then Jonathan the son of Asahel and Jahazias the son of Tikvah were appointed over this, with Meshullam and Sabbateus the Levites, as judges.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'make-confession',
          html:
            'Esdras calls the people to confession. In Hebrew, <em>todah</em> (confession) literally means "acknowledgment"—to stand before God and admit the truth. This is the first step in covenant restoration. Not excuse, not explanation, but naked admission of sin. The people respond with a loud voice: "As thou hast spoken unto us, so will we do." They hear the word and recognize it as true.',
        },
        {
          kind: 'greek',
          id: 'homologeo-confess',
          title: 'Homologeō — "To Confess" or "To Acknowledge"',
          script: 'ὁμολογέω',
          translit: '<strong>Homologeō</strong> · to confess; to acknowledge fully; to agree with',
          description:
            'To confess is to speak the same truth that God speaks. It is alignment—saying about yourself what God has said about you. When the people confess their transgressions, they are aligning themselves with God\'s judgment. This alignment is the path to restoration.',
        },
        {
          kind: 'commentary',
          id: 'separate-garments',
          html:
            'Separation is not permanent exile or cruel rejection. It is the restoration of a boundary that will allow the covenant to hold. The people are to separate from those outside the covenant so that they may wholly devote themselves to God. This is not hatred of the foreigners, but love of the covenant—a decision to keep faith with God above all other attachments.',
        },
        {
          kind: 'christ',
          id: 'christ-father-forgive',
          title: 'Christ Connection — Forgiveness After Confession',
          html:
            'In 1 John 1:9, we read, "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness." The same pattern holds: confession precedes forgiveness. Yet Christ does something Esdras cannot: He does not demand separation from the unbeliever as the price of forgiveness. Instead, He says, "Neither do I condemn thee: go, and sin no more" (John 8:11). The woman caught in adultery confesses. Christ forgives. And restores her to community. In Esdras, the boundary must be maintained. In Christ, the boundary is fulfilled—not abolished, but absorbed into a love so great it converts outsiders into insiders through faith.',
        },
        {
          kind: 'carry',
          html:
            'Esdras teaches us the shape of repentance: to hear God\'s word, to acknowledge the truth about ourselves, and to make a decision. But he also teaches us that restoration is not private. It is corporate. Judges are appointed. The community gathers. The work is public because the covenant is public. The people belong to God together, and their faithfulness affects the whole.',
        },
        {
          kind: 'reflection',
          id: 'confession-restoration',
          prompt: 'Confession is saying about yourself what God says about you. What truth about your own unfaithfulness or sin have you been avoiding saying out loud? What would confession cost, and what might it open?',
        },
        {
          kind: 'artwork',
          matchTitle: /prayer|penitent|repent/i,
          caption: '1 Esdras 8:84–90 · Esdras Calls for Confession and Separation',
        },
      ],
    },

    /* ─── The Prayer of Corporate Confession ──────────────────────────────── */
    {
      ref: '1 Esdras 8 · Prayer of Confession (summarized)',
      title: '"We Have Not Nothing to Plead": Shame and Covenant Reckoning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 1,
              spans: [
                t('And when I heard these things, I rent my clothes, and my hair and beard, and sat me down astonied. '),
                hp('And all they that were moved at the word of the Lord of Israel', 'gathered-prayer'),
                t(' gathered unto me, as I mourned for the transgression of them that were carried away: and I sat sorrowing and very much troubled, and remained fasting until the evening sacrifice.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gathered-prayer',
          html:
            'The text does not record the full prayer, but the impact is evident: Esdras fasts and mourns, and the people gather. Those "moved at the word of the Lord" come to stand with him. His sorrow becomes corporate. His prayer becomes theirs. And together they face the truth of their covenant unfaithfulness.',
        },
        {
          kind: 'commentary',
          id: 'shame-unnamed',
          html:
            'The phrase "we have not nothing to plead for shame" captures the depth of covenant violation. Shame, in Scripture, is not mere embarrassment; it is the loss of standing before God. When we stand before the holy God and we are not holy, shame is the appropriate response. Esdras does not ask the people to ignore their shame. He calls them into it—to feel it fully, to let it break them, so that confession and restoration can follow.',
        },
        {
          kind: 'greek',
          id: 'aischyne-shame',
          title: 'Aischynē — "Shame" or "Loss of Face"',
          script: 'αἰσχύνη',
          translit: '<strong>Aischynē</strong> · shame; loss of honor; exposure before God',
          description:
            'Shame is what we feel when we see ourselves as God sees us—fallen, broken, unworthy. It is not the same as guilt (violation of law). It is the dissolution of self-image before holiness. Esdras calls the people to face shame, not to be destroyed by it, but to be remade through it.',
        },
        {
          kind: 'carry',
          html:
            'We live in a culture that runs from shame. We reframe, excuse, justify. Esdras teaches us that there is a time to stop running—to tear our garments, to fast, to admit before God and others: I have transgressed. I have no excuse. I have nothing to plead but mercy. In that admission, we are more truthful about ourselves than in any achievement or accomplishment. And in that truth, restoration becomes possible.',
        },
        {
          kind: 'reflection',
          id: 'shame-confession',
          prompt: 'Esdras says there is nothing to plead for shame. Can you speak that truth about some area of your own unfaithfulness? What would it mean to stop defending yourself and simply confess?',
        },
      ],
    },

    /* ─── 1 Esdras 8: The Journey of Esdras—A Life Devoted to Covenant ───── */
    {
      ref: '1 Esdras 8 · The Whole Chapter',
      title: 'The Scribe Who Grieved for the Law',
      blocks: [
        {
          kind: 'commentary',
          id: 'chapter-arc',
          html:
            'The arc of 1 Esdras 8 is simple but profound. Esdras arrives as a ready scribe, commissioned by the king, carrying the treasures of the Temple. Every external sign suggests success. He has authority. He has resources. He has the law in his hand. But then he discovers the wound: the people have broken the covenant. And rather than minimize the breach, Esdras tears his garments. He grieves. He calls the people to confession. In this, we see what true leadership looks like. Not the management of resources or the smooth implementation of policy, but the willingness to grieve when God\'s law is broken, and to call people back to covenant at great personal cost.',
        },
        {
          kind: 'christ',
          id: 'christ-esdras-weeping',
          title: 'Christ Connection — The Weeping Prophet',
          html:
            'Jesus weeps over Jerusalem: "O Jerusalem, Jerusalem, thou that killest the prophets, and stonest them which are sent unto thee, how often would I have gathered thy children together, even as a hen gathereth her chickens under her wings, and ye would not!" (Matthew 23:37). Like Esdras, Jesus grieves for the people\'s unfaithfulness. Like Esdras, He calls them to repentance. But Jesus goes further: He offers not just separation from sin, but reconciliation through His own blood. He does not tear His garments; He tears the veil of the Temple. He does not merely grieve the covenant\'s violation; He fulfills it, and opens it to all nations. Where Esdras demands separation to protect the covenant, Christ demands confession so that the covenant can be enlarged to include the whole world.',
        },
        {
          kind: 'carry',
          html:
            'Esdras teaches us that God\'s word matters enough to grieve over. It matters enough to fast for. It matters enough to call people back to covenant, even when that call is costly. What in your own walk grieves you? Where do you see God\'s purposes being abandoned or His law being broken? Esdras shows us that the response is not cynicism or resignation, but tears, prayers, and the hard work of calling people back.',
        },
        {
          kind: 'reflection',
          id: 'esdras-legacy',
          prompt: 'If Esdras were to look at your life, what would he grieve? What covenant or promise have you made to God that you are drifting from? What would it take to tear your garments—to truly repent?',
        },
      ],
    },
  ],

  hasHebrew: true,
};
