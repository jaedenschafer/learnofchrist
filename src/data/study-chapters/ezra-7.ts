import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezra 7 — Ezra Arrives; Artaxerxes' Commission
 *
 * After eighty years of silence, the story of the return resumes. Ezra, a scribe
 * learned in the Law of Moses, arrives in Jerusalem bearing the king's commission
 * to appoint judges, teach the statutes, and oversee offerings for the Temple.
 * The chapter reveals a man who has "prepared his heart to seek the law of the
 * Lord, and to do it, and to teach" — a three-fold covenant enacted within him.
 * Throughout, the hand of the Lord moves upon Ezra, and the king's heart is
 * turned toward the good of God's house. In Ezra we glimpse the pattern of one
 * whose heart aligns with God's purposes.
 */
export const EZRA_7: RichChapterContent = {
  bookSlug: 'ezra',
  bookName: 'Ezra',
  chapter: 7,

  estimatedMinutes: { beginner: 7, intermediate: 14, deep: 17 },
  intros: [
    'The book of Ezra opens with a return from exile. Cyrus frees the captives, the Temple foundation is laid, and opposition arises. Then comes silence. Decades pass. The work stalls. The walls remain broken, and the community struggles to hold its identity in a foreign land.',
    'Into this silence steps Ezra — a man shaped not by military conquest or political ambition, but by the Word of God. He is "a ready scribe in the law of Moses." And in his arrival, we see a principle that runs through Scripture: God raises up those who have "prepared their hearts." The king&apos;s heart is turned. Supplies are granted. The Law of God is given authority to judge. And through one man&apos;s covenant with the Word, a nation finds its footing again.',
  ],

  bottomShare: {
    label: 'Share Ezra 7',
    quote:
      'Ezra had prepared his heart to seek the law of the Lord, and to do it, and to teach in Israel statutes and judgments. The good hand of his God was upon him. When the heart is aligned with God&apos;s word, the heart of kings is turned, and a people is restored.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezra 7 · Study Guide',
  },

  resources: [
    {
      id: 'oriental-institute-artaxerxes',
      kind: 'archive',
      source: 'Oriental Institute',
      label: 'Artaxerxes I and Achaemenid Court',
      url: 'https://oi.uchicago.edu/',
      description: 'OI scholarly resources on 5th-century BCE Persian rule and administration.',
    },
  ],

  sections: [
    /* ─── Ezra 7:1–6 — Ezra Introduced ──────────────────────────────────── */
    {
      ref: 'Ezra 7:1–6',
      title: 'The Ready Scribe',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 1,
              spans: [
                t('Now after these things, in the reign of '),
                hg('Artaxerxes', 'ezra-artaxerxes'),
                t(' king of Persia, Ezra the son of Seraiah, the son of Azariah, the son of Hilkiah,'),
              ],
            },
            plain(2, 'The son of Shallum, the son of Zadok, the son of Ahitub,'),
            plain(3, 'The son of Amariah, the son of Azariah, the son of Meraioth,'),
            plain(4, 'The son of Zerahiah, the son of Uzzi, the son of Bukki,'),
            plain(5, 'The son of Abishua, the son of Phinehas, the son of Eleazar, the son of Aaron the chief priest:'),
            {
              number: 6,
              spans: [
                t('This Ezra went up from Babylon; and he was a '),
                hy('ready scribe', 'ezra-ready-scribe'),
                t(' in the law of Moses, which the Lord God of Israel had given: and the king granted him '),
                t('all his request'),
                t(', according to the hand of the Lord his God upon him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra-artaxerxes',
          html:
            'Artaxerxes reigns, and the exile has now lasted decades. Between the dedication of the Temple (chapter 6) and this moment, eighty years have passed — a generation and more. The work of rebuilding, begun with such hope, has faltered. The walls still lie broken. The community is discouraged. And now, in the reign of Artaxerxes, a new chapter begins. [res:oriental-institute-artaxerxes]',
        },
        {
          kind: 'commentary',
          id: 'ezra-lineage',
          html:
            'The genealogy traces Ezra back through the priestly line to Aaron himself. He is no outsider, no upstart. He is of the chief priests, son of a long line of those who stood between God and the people. His authority comes not from the king, but from the covenant heritage he carries.',
        },
        {
          kind: 'hebrew',
          id: 'ezra-name',
          title: 'עֶזְרָא — Ezra: "Help"',
          script: 'עֶזְרָא',
          translit: '<strong>Ezra</strong> · he who helps; one who aids',
          description:
            'The name Ezra means "help" or "one who helps." Throughout this chapter, we see the meaning written into his life. He comes to help a people rebuild. He stands for the Law. He helps judges and teachers take their place. His life is an answer to a prayer for help, a name enacted in covenant.',
        },
        {
          kind: 'commentary',
          id: 'ezra-ready-scribe',
          html:
            'Ezra is called "a ready scribe in the law of Moses." Not merely learned, but ready — prepared, skillful, eager to employ his knowledge. The Hebrew <em>sofer</em> speaks of one who writes and preserves the Word. Ezra is one who knows the law, teaches it, and lives it. He is the kind of person Scripture searches out: one whose preparation matches God&apos;s purpose.',
        },
        {
          kind: 'hebrew',
          id: 'ezra-sofer',
          title: 'סוֹפֵר — Sofer: "Scribe"',
          script: 'סוֹפֵר',
          translit: '<strong>Sofer</strong> · scribe; one who writes; keeper of the word',
          description:
            'A sofer was not merely a clerk or copyist, but a keeper of tradition, a guardian of the Law. In Israel, the sofer was a learned man, responsible for preserving God&apos;s Word, teaching it, and defending it. Ezra is the embodiment of this calling — a ready scribe who has prepared his heart.',
        },
        {
          kind: 'carry',
          html:
            'Readiness is not accident. It comes from preparation. Ezra did not become "a ready scribe" overnight. He studied. He prayed. He aligned his heart with the Law. And when the moment came, he was ready. Is your heart prepared for the calling God has in mind? What preparation — in prayer, in study, in covenant — makes you ready to serve when the opportunity arrives?',
        },
        {
          kind: 'reflection',
          id: 'ready-scribe',
          prompt: 'What does it mean to be "ready"? What have you prepared yourself for, and how did that preparation shape what you could do when the moment came?',
        },
      ],
    },

    /* ─── Ezra 7:6–10 — Three-Fold Covenant ──────────────────────────────── */
    {
      ref: 'Ezra 7:6–10',
      title: 'A Heart Prepared',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 7,
              spans: [
                t('And there went up some of the children of Israel, and of the priests, and the Levites, and the singers, and the porters, and the Nethinims, unto Jerusalem, in the '),
                hg('seventh year', 'ezra-seventh-year'),
                t(' of the king Artaxerxes.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And he came to Jerusalem in the fifth month, which was in the seventh year of the king. For upon the first day of the first month began he to go up from Babylon; and on the '),
                hg('first day of the fifth month came he to Jerusalem', 'ezra-journey'),
                t(', according to the good hand of his God upon him.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('For Ezra had '),
                hp('prepared his heart', 'ezra-prepared-heart'),
                t(' to '),
                hp('seek the law of the Lord', 'ezra-seek'),
                t(', and to '),
                hp('do it', 'ezra-do'),
                t(', and to '),
                hp('teach in Israel', 'ezra-teach'),
                t(' statutes and judgments.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Whosoever will not do the law of thy God, and the law of the king, let judgment be executed speedily upon him, whether it be unto death, or to banishment, or to confiscation of goods, or to imprisonment.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra-seventh-year',
          html:
            "The journey occurs in the seventh year of Artaxerxes&apos; reign. Seven — a number of completion and covenant. In God&apos;s pattern, the seventh year is a year of release, of restoration, of God&apos;s work coming to its season. Ezra travels to Jerusalem not by accident, but in the year marked for God&apos;s purposes.",
        },
        {
          kind: 'commentary',
          id: 'ezra-journey',
          html:
            'The journey takes four months — from the first day of the first month (Nisan) until the first day of the fifth month (Ab). The text emphasizes the exactness of timing: "according to the good hand of his God upon him." This is no accident of circumstances. This is divine providence guiding the steps of one whose heart is aligned with God&apos;s purpose.',
        },
        {
          kind: 'hebrew',
          id: 'ezra-yad-yahweh',
          title: 'יָד יהוה — Yad Yahweh: "The Hand of the Lord"',
          script: 'יָד יהוה',
          translit: '<strong>Yad Yahweh</strong> · the hand of the Lord; God&apos;s power and provision',
          description:
            'The phrase "the hand of the Lord" appears twice in this chapter — upon Ezra in verse 6, and as "the good hand of his God" in verse 8. The hand speaks of God&apos;s active power — guiding, protecting, providing. When the text says God&apos;s hand is upon someone, it means they are under God&apos;s care, directed by His purpose. Ezra travels under the hand of God.',
        },
        {
          kind: 'commentary',
          id: 'ezra-prepared-heart',
          html:
            'The heart of Ezra is the center of this story. Not his strength, not his authority, but his heart — his deepest will and commitment — has been prepared. Preparation is not a moment; it is a discipline. Ezra did not wait until he arrived in Jerusalem to make his covenant with the Law. His heart was already prepared. This is the shape of faithfulness: a heart shaped in solitude, in prayer, in study, until it aligns with God&apos;s purposes.',
        },
        {
          kind: 'commentary',
          id: 'ezra-seek',
          html:
            'To seek the law is the first step. It is to pursue understanding, to make God&apos;s Word the object of your study and longing. Ezra has made the Law his quest. He seeks it the way a merchant seeks treasure, the way a lover seeks the beloved — with his whole attention.',
        },
        {
          kind: 'commentary',
          id: 'ezra-do',
          html:
            'But seeking alone is not enough. Ezra commits not only to know the Law, but to do it. This is the second step: obedience. To understand the Word and then to live by it, to let it shape your choices, your judgments, your character. The Law is not merely intellectual; it is covenantal — a way of life.',
        },
        {
          kind: 'commentary',
          id: 'ezra-teach',
          html:
            'And the third step: to teach. To take what you have sought and done, and to make it known to others. Teaching is the outward expression of an inward covenant. Ezra is not a scribe who hoards his knowledge. He is one who imparts it, who helps others see the beauty and truth of the Law of Moses. The three steps — seek, do, teach — are inseparable.',
        },
        {
          kind: 'carry',
          html:
            'Ezra&apos;s three-fold covenant is a mirror for us. To seek the Word — to make God&apos;s truth the object of your hunger. To do the Word — to let it reshape your life, your choices, your heart. To teach the Word — to share what you have found, to help others see. These three together form a life aligned with God&apos;s purpose. What is one step you can take today toward this three-fold covenant?',
        },
        {
          kind: 'reflection',
          id: 'three-fold-covenant',
          prompt: 'Ezra prepared his heart in three ways: to seek the law, to do it, and to teach it. Which of these comes most naturally to you? Which challenges you most?',
        },
      ],
    },

    /* ─── Ezra 7:11–26 — The King's Commission ────────────────────────────── */
    {
      ref: 'Ezra 7:11–26',
      title: 'The King Turns His Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 11,
              spans: [
                t('Now this is the copy of the letter that the king Artaxerxes gave unto Ezra the priest, the scribe, even a scribe of the words of the commandments of the Lord, and of his statutes to Israel:'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Artaxerxes, king of kings, unto Ezra the priest, a scribe of the law of the God of heaven, perfect peace, and at such a time. I make a decree, that all they of the people of Israel, and of his priests and Levites, in my realm, which are minded of their own freewill to go up to Jerusalem, go with thee.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Forasmuch as thou art sent of the king and of his seven counsellors, to enquire concerning Judah and Jerusalem, '),
                hy('according to the law of thy God which is in thine hand', 'ezra-law-hand'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra_7_v11-17',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 14,
              spans: [
                t('And to carry the silver and gold, which the king and his counsellors have freely offered unto the God of Israel, whose habitation is in Jerusalem;'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And all the silver and gold that thou canst find in all the province of Babylon, with the freewill offering of the people, and of the priests, offering willingly for the house of their God which is in Jerusalem:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('That thou mayest buy speedily with this money bullocks, rams, lambs, with their meat offerings and their drink offerings, and offer them upon the altar of the house of your God which is in Jerusalem.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And whatsoever shall seem good to thee, and to thy brethren, to do with the rest of the silver and the gold, that do after the will of your God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra7-discretion',
          html:
            'Artaxerxes has granted Ezra remarkable freedom: &ldquo;Whatsoever shall seem good to thee... do after the will of your God.&rdquo; This is not command from on high, but trust. The king recognizes that Ezra&apos;s discernment is guided by God&apos;s Law. What follows — the vessels, the additional treasures — flows from this foundation of trust in Ezra&apos;s judgment.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 18,
              spans: [
                t('The vessels also that are given thee for the service of the house of thy God, those deliver thou before the God of Jerusalem.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And whatsoever more shall be needful for the house of thy God, which thou shalt have occasion to bestow, bestow it out of the king&apos;s treasure house.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And I, even I Artaxerxes the king, do make a decree to all the treasurers which are beyond the river, that whatsoever Ezra the priest, the scribe of the law of the God of heaven, shall require of you, it be done speedily,'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Unto an hundred talents of silver, and to an hundred measures of wheat, to an hundred baths of wine, to an hundred baths of oil, and salt without prescribing how much.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra_7_v18-25',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 22,
              spans: [
                t('Whatsoever is commanded by the God of heaven, let it be diligently done for the house of the God of heaven: for why should there be wrath against the realm of the king and his sons?'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Also we certify you, that touching any of the priests and Levites, singers, porters, Nethinims, or ministers of this house of God, '),
                hy('it shall not be lawful to impose toll, tribute, or custom upon them', 'ezra-exemption'),
                t('.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And thou, Ezra, after the wisdom of thy God that is in thine hand, '),
                hg('set magistrates and judges', 'ezra-judges'),
                t(', which may judge all the people that are beyond the river, all such as know the laws of thy God; and '),
                hg('teach ye them that know them not', 'ezra-teach-them'),
                t('.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And whosoever will not do the law of thy God, and the law of the king, let judgment be executed speedily upon him, whether it be unto death, or to banishment, or to confiscation of goods, or to imprisonment.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra-letter',
          html:
            'The king grants Ezra a letter — a formal commission that does three things: it allows the return of those who wish to go, it provides silver and gold for the Temple, and it gives Ezra authority to appoint judges and teachers. This is not a small thing. A pagan king, moved by something he cannot name, grants authority to the Law of Israel.',
        },
        {
          kind: 'commentary',
          id: 'ezra-law-hand',
          html:
            'The letter speaks of "the law of thy God which is in thine hand." This phrase appears again and again — the Law is in Ezra&apos;s hand. He carries it. He possesses it. He is responsible for it. And the king recognizes this: you are the one who holds the Law. Therefore, let your Law be the standard for judgment.',
        },
        {
          kind: 'hebrew',
          id: 'ezra-torah-hand',
          title: 'תוֹרָה בְיָדְךָ — Torah B&apos;Yadcha: "The Law in Your Hand"',
          script: 'תוֹרָה בְיָדְךָ',
          translit: '<strong>Torah b&apos;yadcha</strong> · the law in your hand; the law entrusted to you',
          description:
            'The phrase emphasizes not just knowledge of the Law, but responsibility for it. When the Law is "in your hand," you are accountable for its preservation, its teaching, its enactment. Ezra carries the weight and the privilege of this sacred trust.',
        },
        {
          kind: 'commentary',
          id: 'ezra-provision',
          html:
            'The king provides abundantly — silver, gold, wheat, wine, oil, salt. Not stingily, but generously. "Whatsoever shall seem good to thee... do after the will of your God." Artaxerxes is not merely tolerating the return; he is providing for it. His heart has been turned by something beyond politics — by the hand of God upon Ezra.',
        },
        {
          kind: 'commentary',
          id: 'ezra-exemption',
          html:
            'The king decrees that the priests and Levites shall not be taxed. They are freed from tribute and custom, that they may give themselves fully to the service of God&apos;s house. This exemption is not mere privilege; it is recognition that those who serve God should not be impeded by earthly burdens.',
        },
        {
          kind: 'commentary',
          id: 'ezra-judges',
          html:
            'Here is the deepest authority granted: Ezra is to set magistrates and judges according to the Law of God. These judges will adjudicate disputes, execute justice, teach the statutes. This is not ceremonial authority; this is the power to shape a society according to God&apos;s Law.',
        },
        {
          kind: 'commentary',
          id: 'ezra-teach-them',
          html:
            'The judges are to teach those who do not know the Law. This is the reach of the covenant: not only among the learned, but among all people. The Law is not hoarded. It is taught. It is made available to any who will listen. This reflects Ezra&apos;s own three-fold covenant: seek, do, teach.',
        },
        {
          kind: 'carry',
          html:
            'Authority is often granted by earthly powers — kings and presidents, bosses and institutions. But the deepest authority comes from alignment with God&apos;s purpose. Ezra does not seek the king&apos;s favor. He seeks the Law. And because his heart is prepared, the king&apos;s heart is turned. What authority has God entrusted to you? How can you use it to teach the Law and establish justice?',
        },
        {
          kind: 'reflection',
          id: 'king-commission',
          prompt: 'The king grants Ezra authority because Ezra&apos;s heart is already aligned with God&apos;s Law. What authority or responsibility has God given you? How is your heart being shaped by God&apos;s purposes?',
        },
      ],
    },

    /* ─── Ezra 7:27–28 — Ezra Blesses the Lord ──────────────────────────── */
    {
      ref: 'Ezra 7:27–28',
      title: 'Blessed Be the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 27,
              spans: [
                t('Blessed be the Lord God of our fathers, which hath put such a thing as this in the king&apos;s heart, to beautify the house of the Lord which is in Jerusalem:'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And hath extended mercy unto me before the king, and his counsellors, and before all the king&apos;s mighty princes. And I was strengthened as '),
                hp('the hand of the Lord my God was upon me', 'ezra-strength'),
                t(', and I gathered together out of Israel chief men to go up with me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra-blessing',
          html:
            'Ezra does not celebrate his own wisdom or cleverness. He does not boast of his influence with the king. Instead, he blesses the Lord. "Blessed be the Lord God of our fathers." In this blessing, Ezra recognizes the source of everything that has been granted: the king&apos;s turned heart, the provision, the authority — all are from God. Praise is the natural response of a heart prepared.',
        },
        {
          kind: 'commentary',
          id: 'ezra-beautify',
          html:
            'The purpose is clear: to beautify the house of the Lord. Not to build an empire for Ezra, not to establish a dynasty, but to restore God&apos;s house. And God has put this very purpose into the king&apos;s heart. The king, without knowing the God of Israel, has become an instrument of His will.',
        },
        {
          kind: 'commentary',
          id: 'ezra-strength',
          html:
            'Ezra says, "I was strengthened as the hand of the Lord my God was upon me." Strength comes not from personal prowess, but from the presence of God. The hand of the Lord that was upon him in verse 6 is now the source of his strength, his courage, his ability to lead. He is a vessel, not the source.',
        },
        {
          kind: 'christ',
          id: 'ezra-christ-connection',
          title: 'Christ Connection — The True Scribe and King',
          html:
            'Ezra is a scribe who has "prepared his heart to seek the law of the Lord, and to do it, and to teach." But there is One who embodies this pattern perfectly: Jesus, who said, "I do nothing of myself" (John 5:30), yet whose heart was eternally aligned with the Father&apos;s will. Christ came "not to be ministered unto, but to minister" (Matthew 20:28). He sought the Father&apos;s will, doing it perfectly, and teaching it through word and example. And unlike Ezra, Christ needed no pagan king to turn his heart — He was the King whose heart was always turned toward the Father. Moreover, Christ fulfilled the true work of the scribe: not merely preserving the old Law, but revealing the deepest intent of God&apos;s heart. And like Ezra, His authority came not from earthly power, but from the hand of God upon Him: "And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth" (Matthew 28:18). Ezra is a foreshadowing of the One who would be the consummate Teacher, the Judge, and the Judge Himself (John 5:22–27).',
        },
        {
          kind: 'carry',
          html:
            'When good things come to pass, who receives the credit? Ezra&apos;s instinct is to bless the Lord. Not to parade his own merit, not to thank the king first, but to recognize that God turned the king&apos;s heart. Gratitude — real, deep gratitude that traces all good back to God — is the mark of a prepared heart. Is your first response to praise God? Or to congratulate yourself?',
        },
        {
          kind: 'reflection',
          id: 'blessing-lord',
          prompt: 'When something good happens, who do you thank first? How might your life be different if your first response was always to bless God?',
        },
      ],
    },
  ],
};
