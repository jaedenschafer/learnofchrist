import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezra 5 — The Prophets Haggai and Zechariah Resume the Work
 *
 * The rebuilding of the temple in Jerusalem had stalled. The people had grown
 * discouraged. Then, in a single moment, two prophets — Haggai and Zechariah —
 * came with a word from God: "Build." And immediately, Zerubbabel and Jeshua
 * rose up. But as they worked, an official from across the river came to
 * question them. Who gave you permission to build? And in their answer, the
 * elders speak one of the most courageous confessions in Scripture: "We are
 * the servants of the God of heaven and earth." This chapter shows what happens
 * when the prophetic word goes forth and when those who build the kingdom
 * confess their true allegiance, even before their accusers.
 */
export const EZRA_5: RichChapterContent = {
  bookSlug: 'ezra',
  bookName: 'Ezra',
  chapter: 5,

  estimatedMinutes: { beginner: 6, intermediate: 9, deep: 12 },
  intros: [
    'The work of rebuilding the temple had stopped. Years had passed since the foundation was laid, and the people of Judah had grown weary. They had returned from exile, yes, but the project seemed too large, too costly, too difficult. The work languished.',
    'And then the prophets Haggai and Zechariah stood up. They brought a word from God: the work must resume. Immediately, Zerubbabel and Jeshua rose up and began to build. But their building would not go unnoticed. An official of the Persian king came to them with hard questions: "Who gave you permission? Who authorized this?" And in that moment of opposition, the elders spoke a confession that cuts to the heart of everything: "We are the servants of the God of heaven and earth, and we build the house that was built many years ago." This chapter shows us the power of the prophetic word to move us, and the courage that comes from knowing whom we truly serve.',
  ],

  bottomShare: {
    label: 'Share Ezra 5',
    quote:
      'When the prophetic word came forth, the builders rose up. And when questioned, they answered with one of the most courageous confessions in Scripture: "We are the servants of the God of heaven and earth."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezra 5 · Study Guide',
  },

  sections: [
    /* ─── Ezra 5:1–2 — The Prophets Preach; The Work Resumes ──────────── */
    {
      ref: 'Ezra 5:1–2',
      title: 'The Prophets Arise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('Then the prophets, '),
                hy('Haggai the prophet, and Zechariah the son of Iddo', 'prophets-arise'),
                t(', prophesied unto the Jews that were in Judah and Jerusalem in the name of the God of Israel.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Then rose up Zerubbabel the son of Shealtiel, and Jeshua the son of Jozadak, '),
                hg('began to build the house of God', 'began-to-build'),
                t(' which is at Jerusalem: and with them were the prophets of God helping them.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'prophets-arise',
          title: 'Haggai & Zechariah',
          script: 'חַגַּי זְכַרְיָה',
          translit:
            '<strong>Haggai</strong> · "festive" or "my feast"; <strong>Zechariah</strong> · "Yah remembers"',
          description:
            'These two prophets carry names heavy with meaning. Haggai speaks of celebration—"my feast"—and indeed, his ministry is to call the people to the great work of building, to feast on the promise of what God will do. Zechariah means "Yah remembers"—and his visions and words remind Israel that the God who brought them out of exile has not forgotten them, has not abandoned His purposes. Together, their names announce what they bring: the promise of God&apos;s remembrance and the call to rejoice.',
        },
        {
          kind: 'commentary',
          id: 'began-to-build',
          html:
            'The moment the prophets speak the word of God, the work begins. Zerubbabel and Jeshua do not hesitate. They do not wait. The prophetic word is not a suggestion—it is a command from heaven, and immediately, the builders move. And notice: "the prophets of God helping them." The word that called them forth does not then abandon them; the prophets remain present, encouraging, sustaining the work.',
        },
        {
          kind: 'carry',
          html:
            'Have you ever felt stuck in a work you thought was important but had abandoned? The prophetic word has power to move us—not because it is eloquent, but because it comes from God. Sometimes we need to hear from someone who speaks for the Lord, not for themselves, to know that our work matters and that we have permission to continue.',
        },
        {
          kind: 'reflection',
          id: 'prophets-arise',
          prompt:
            'When have you felt called to begin or resume a work through the encouragement of someone else&apos;s faith or prophetic word? What made you trust that call?',
        },
      ],
    },

    /* ─── Ezra 5:3–5 — Tatnai&apos;s Question; God&apos;s Eye Upon Them ────── */
    {
      ref: 'Ezra 5:3–5',
      title: 'The Governor Questions; God Protects',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 3,
              spans: [
                t('At the same time came to them Tatnai, governor on this side the river, and Shethar-boznai, and their companions: "Who hath commanded you to build this house, and to make up this wall?"'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Then said we unto them after this manner, What are the names of the men that make this building.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('But the '),
                hp('eye of their God was upon the elders of the Jews', 'eye-of-god'),
                t(', that they could not cause them to cease, till the matter came to Darius: then they returned answer by letter concerning this matter.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tatnai-question',
          html:
            'Tatnai is a representative of the Persian Empire, the official authority in this province. His question is direct and threatening: "Who gave you permission?" It is a power play. The Jews, recently returned from exile, are fragile, vulnerable, and this official has the authority to stop them. But the text moves immediately to the crucial point: God&apos;s eye was upon them. Tatnai could ask the questions, but he could not stop the work.',
        },
        {
          kind: 'hebrew',
          id: 'eye-of-god',
          title: 'Ayin — "Eye"',
          script: 'עַ֫יִן',
          translit: '<strong>Ayin</strong> · eye; sight; watchfulness',
          description:
            'The Hebrew word for "eye" is ayin, but here it carries the full weight of divine watchfulness. God&apos;s eye is upon the builders—not a distant gaze, but a present, protective attention. This recalls the Psalmist: "Behold, the eye of the LORD is upon them that fear him, upon them that hope in his mercy" (Psalm 33:18). When we are doing God&apos;s work, we are watched over.',
        },
        {
          kind: 'carry',
          html:
            'Opposition comes when we do something that matters. When we take a stand, build something that honors God, or commit to a work that serves His kingdom, there will be officials and challengers. But the promise here is: God&apos;s eye is upon you. You are not abandoned. The work does not depend on human permission; it depends on God&apos;s protection.',
        },
        {
          kind: 'reflection',
          id: 'eye-of-god',
          prompt:
            'When have you felt God&apos;s protective eye upon you during a difficult work? What gave you confidence to continue despite the opposition?',
        },
      ],
    },

    /* ─── Ezra 5:6–11 — Tatnai&apos;s Letter to Darius ──────────────────── */
    {
      ref: 'Ezra 5:6–11',
      title: 'The Letter to the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 6,
              spans: [
                t('The copy of the letter that Tatnai sent unto Darius the king: "Unto Darius the king, all peace.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Be it known unto the king, that we went into the province of Judea, to the house of the great God, which is builded with '),
                hg('great stones, and timber is laid in the walls', 'great-work'),
                t(', and this work goeth fast on, and prospereth in their hands.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Then asked we those elders, said unto them: Who commanded you to build this house, and to make up these walls?'),
              ],
            },
            {
              number: 9,
              spans: [
                t('We asked them also the names of the men that were the chief of them, that we might write the names of the men at the head of them.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Thus they returned us answer, saying, We are the '),
                hp('servants of the God of heaven and earth', 'servants-of-god'),
                t(', and build the house that was builded these many years ago, which a great king of Israel builded and set up.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('But after that our fathers had provoked the God of heaven unto wrath, he gave them into the hand of Nebuchadnezzar the king of Babylon, the Chaldean, who destroyed this house, and carried the people away into Babylon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'great-work',
          html:
            'Even in his suspicion, Tatnai acknowledges the scale and quality of the work. The house is built with "great stones," timber is laid in the walls, and the work "goeth fast on, and prospereth." What Tatnai means as evidence of unauthorized presumption is also a silent acknowledgment: this is no small, clandestine project. This is a genuine, impressive, thriving construction. The builders have not hidden; they have worked openly and well.',
        },
        {
          kind: 'commentary',
          id: 'servants-of-god',
          html:
            'Here is the turning point of the chapter. When asked who commanded them, the elders do not appeal to Cyrus&apos;s old decree (though it existed). They do not cite human authority. They answer: &quot;We are the servants of the God of heaven and earth.&quot; This is not political prudence. This is a confession. They are saying, before an official of a foreign king, that their primary allegiance is to the God who created heaven and earth. They serve Him first. Everything else—the king, the decree, the permission—flows from that.',
        },
        {
          kind: 'commentary',
          id: 'history-elders',
          html:
            'Notice what the elders do: they tell the truth. They tell Tatnai the whole history—that Solomon&apos;s temple was built and stood, that their fathers provoked God, that the temple was destroyed, that they were carried away. They do not hide or minimize. They lay out the full narrative of judgment and exile and restoration. Truth becomes their strength. They are not lying to a king&apos;s official; they are speaking plain history.',
        },
        {
          kind: 'carry',
          html:
            'When we are questioned, our first response should not be to calculate what will please the powerful. It should be to tell the truth and to declare whom we serve. The elders of Judah understood something: there is a higher power than any earthly king, and our allegiance to that higher power is what makes us free. That conviction, plainly spoken, becomes the word that moves mountains.',
        },
        {
          kind: 'reflection',
          id: 'servants-of-god',
          prompt:
            'When have you felt compelled to declare your true allegiance before someone in authority? What gave you courage to speak it plainly?',
        },
      ],
    },

    /* ─── Ezra 5:12–17 — The Elders&apos; Testimony; The Decree Remembered ── */
    {
      ref: 'Ezra 5:12–17',
      title: 'The Vessels Returned; The Decree Recorded',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 12,
              spans: [
                t('But in the first year of Cyrus the king of Babylon the same king Cyrus made a decree to build this house of God.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the vessels also of gold and silver of the house of God, which Nebuchadnezzar took out of the temple that was in Jerusalem, and brought them into the temple of Babylon, those did Cyrus the king take out of the temple of Babylon, and they were delivered unto one, whose name was Sheshbazzar, whom he had made governor.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And said unto him, Take these vessels, go, carry them into the temple that is in Jerusalem, and let the house of God be builded in his place.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Then came the same Sheshbazzar, and laid the foundation of the house of God which is in Jerusalem: and since that time even until now hath it been in building, and yet it is not finished.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Now therefore, if it seem good to the king, let there be search made in the king&apos;s treasure house, which is there at Babylon, whether it be so, that a decree was made of Cyrus the king to build this house of God at Jerusalem, and let the king send his pleasure to us concerning this matter.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Then sent king Darius answer by letter concerning this matter: Unto Tatnai, governor on this side the river, be it known, that I have made a decree, Be ye far from thence:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cyrus-decree',
          html:
            'Now, after declaring their true allegiance, the elders present the evidence: the decree of Cyrus. The prophetic word had called them forth, and God&apos;s eye protected them. But the external validation—the official permission from the king—existed and will be found. The decree is in the records. Cyrus himself said: take the vessels, rebuild the temple. This is not presumption; this is obedience to a king&apos;s own word.',
        },
        {
          kind: 'commentary',
          id: 'vessels-returned',
          html:
            'The gold and silver vessels that Nebuchadnezzar took—the spoils of destruction—have been returned. Cyrus, the foreign king, releases them. This is a sign. What was taken in judgment is being restored in grace. The restoration is not the Jews&apos; project alone; it is written into the very laws of the Persian Empire. God moves even through foreign kings to accomplish His will.',
        },
        {
          kind: 'christ',
          id: 'eye-upon-builders',
          title: 'Christ Connection — The Eye of God Upon His People',
          html:
            'The promise of Ezra 5 echoes throughout Scripture: "the eye of the LORD is upon them that fear him" (Psalm 33:18). In the New Testament, Jesus Himself describes this: "Are not two sparrows sold for a farthing? and one of them shall not fall on the ground without your Father. But the very hairs of your head are all numbered. Fear ye not therefore, ye are of more value than many sparrows" (Matthew 10:29–31). When we build the kingdom of God, we are watched over. We are seen. God&apos;s eye is upon us. And in Christ, that eye is not a distant gaze from heaven—it is the gaze of one who loved us and gave Himself for us, who rose from the dead, and who remains with those who build His church.',
        },
        {
          kind: 'carry',
          html:
            'The work that matters will be questioned. The opposition is not a sign of failure; it is a sign that you are building something real. When you face questions about your faith, your convictions, your work for God&apos;s kingdom, remember the testimony of the elders: "We are the servants of the God of heaven and earth." That confession, plainly spoken, moves mountains. Kings consult their records. Decrees are found. Opposition yields.',
        },
        {
          kind: 'reflection',
          id: 'eye-upon-builders',
          prompt:
            'When you confess your true allegiance to God before others, do you trust that He will vindicate that confession? What would it look like for you to speak more plainly about whom you serve?',
        },
      ],
    },
  ],
};
