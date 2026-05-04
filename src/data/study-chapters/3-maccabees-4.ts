import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

export const THIRD_MACCABEES_4: RichChapterContent = {
  bookSlug: '3-maccabees',
  bookName: '3 Maccabees',
  chapter: 4,

  estimatedMinutes: { beginner: 4, intermediate: 6, deep: 10 },
  intros: [
    'Ptolemy orders all Jews in Egypt—men, women, children, even infants—to be seized from their homes and herded to the hippodrome of Alexandria. The scene is one of unspeakable sorrow: brides torn from wedding chambers, mothers separated from their children, entire families uprooted.',
    'Yet as the vast multitude gathers in the arena designed for their slaughter, they refuse to break. They pray. They bear witness to one another. The very impossibility of counting them becomes a kind of victory—even bureaucratic evil cannot number the people of God.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /persecution|captive|bound/i,
    caption: 'Jews Driven into Captivity',
  },

  sections: [
    /* ─── 3 Maccabees 4:1–6 — The Seizure from Homes ────────────────────── */
    {
      ref: '3 Maccabees 4:1–6',
      title: 'Torn from Their Homes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(1, t('And when the king had sent his officers throughout Egypt to gather all the Jews from the cities into one place, they obeyed the king\'s commandment. And they seized every man and woman and child, and took them from their homes.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-seizure',
          html: 'Registration leads to confiscation. The Jews are uprooted by imperial decree—no time to gather their things, no farewell, no prayer. The machinery of state turns against them. Yet even in this chaos, the text insists: <em>they obeyed</em>. Not because they wished to, but because the power of Ptolemy leaves them no choice. [res:sefaria-3-macc-4] [res:israel-museum-ptolemaic] [res:bible-odyssey-persecution]',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(2, t('And many of the Jewish maidens were dragged from the marriage chamber on their wedding day, their garments torn, their songs turned to cries.')),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-nymphe',
          title: 'Nymphē — Bride',
          script: 'νύμφη',
          translit: '<strong>nymphē</strong> · bride; young wife; newly married woman',
          description: 'The word speaks to innocence interrupted. A bride should be adorned and celebrated; instead she is seized. The text emphasizes not just loss, but the violation of the sacred.',
        },
        {
          kind: 'christ',
          id: 'christ-innocent',
          title: 'Christ Connection — Innocent Suffering',
          html: 'The innocent brides suffer precisely because they are innocent—powerless to resist. Jesus too was innocent, seized from prayer in the garden, condemned without cause. Yet in His suffering, He sanctified innocent suffering itself. <em>1 Peter 2:21–23</em> — "Christ also suffered for us, leaving us an example that ye should follow his steps… who did no sin, neither was guile found in his mouth; who, when he was reviled, reviled not again."',
        },
        {
          kind: 'carry',
          html: 'Have you ever been seized by circumstance beyond your control? In that helplessness, did you cry out, or did you fall silent? What does it mean to suffer innocently, as Christ did?',
        },
      ],
    },

    /* ─── 3 Maccabees 4:7–12 — Infants and Mothers ────────────────────── */
    {
      ref: '3 Maccabees 4:7–12',
      title: 'Infants Torn from Mothers&apos; Arms',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(7, t('And the infants were taken from the breasts of their mothers, and carried away to the place of gathering, their small voices crying out in the darkness.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-infants',
          html: 'The cruelty is not accidental but deliberate. By separating mothers and infants, Ptolemy does more than merely separate families—he severs the very bonds of nurture and life. An infant torn from its mother\'s breast is torn from survival itself. The text does not look away from this horror.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(8, t('And the mothers wept aloud, saying, Our children! Our children! Have they no mercy upon the innocent?')),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-brephos',
          title: 'Brephos — Infant',
          script: 'βρέφος',
          translit: '<strong>brephos</strong> · infant; newborn; babe in arms',
          description: 'Brephos carries the vulnerability of new life. It appears in Luke\'s account of John the Baptist leaping in Elizabeth\'s womb. Here, it marks the most defenseless of the seized—those who have done nothing, desired nothing but milk and safety.',
        },
        {
          kind: 'reflection',
          id: 'mac4-mothers',
          prompt: 'The mothers wept aloud. Their tears are recorded. What does it mean that God hears the weeping of those with no power to change their circumstance?',
        },
        {
          kind: 'carry',
          html: 'If you are a parent, you know this vulnerability—the terror of being separated from your child. If you are not, you know being that child. Where is God in such separation?',
        },
      ],
    },

    /* ─── 3 Maccabees 4:13–19 — The Journey to the Hippodrome ─────────── */
    {
      ref: '3 Maccabees 4:13–19',
      title: 'The Pathos of the Journey',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(13, t('And they were bound with ropes and chains, and forced to march toward the city of Alexandria, many days\' journey across the desert and through foreign lands.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-journey',
          html: 'The journey itself is a kind of death march. Days under the sun, chained together, the weak falling behind. Children crying, mothers comforting, the old and sick struggling forward. The text does not rush past this. It lingers on the suffering.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(15, t('And the people lifted up their voices in lamentation, and wept as they went, singing songs of mourning even as they were driven forward.')),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-threnos',
          title: 'Thrēnos — Lamentation',
          script: 'θρήνος',
          translit: '<strong>thrēnos</strong> · lamentation; dirge; song of mourning',
          description: 'Thrēnos is not mere weeping—it is structured sorrow, grief given voice and form. The Jews lament even as they march. Their song is both prayer and protest, acknowledgment of loss and refusal to be silenced.',
        },
        {
          kind: 'carry',
          html: 'When you are in pain, do you try to hide it or to speak it aloud? What happens when pain is given voice? When it becomes song?',
        },
      ],
    },

    /* ─── 3 Maccabees 4:20–26 — The Hippodrome Filled ────────────────── */
    {
      ref: '3 Maccabees 4:20–26',
      title: 'The Arena Fills with Multitudes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(20, t('And they came at last to the hippodrome of Alexandria, a vast arena built for the spectacle of slaughter. And all the Jews were gathered there—multitudes upon multitudes, so great that the eye could not see the end of them.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-hippodrome',
          html: 'The hippodrome is a monument to power—vast, geometrical, designed to display the helplessness of the accused before the triumph of empire. Yet now it is filled with God\'s people. The size of the gathered multitude becomes itself a kind of testimony. There are too many to count. Empire cannot process them. Their numbers are their own form of glory.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(22, t('And Ptolemy sat upon his throne, looking down upon them, and said in his heart, I shall make an end of these people. On this day, the Jews shall be no more.')),
          ],
        },
        {
          kind: 'christ',
          id: 'christ-multitude',
          title: 'Christ Connection — The Unwritable Multitude',
          html: 'John sees in his vision: <em>"A great multitude, which no man could number, of all nations, and kindreds, and people, and tongues, stood before the throne and before the Lamb, clothed with white robes"</em> (<em>Revelation 7:9</em>). The Jews in the hippodrome cannot be numbered. Not because they are too great in power, but because they belong to God. The elect of God are always unnumbered—always more than empire can measure or control.',
        },
        {
          kind: 'reflection',
          id: 'mac4-multitude',
          prompt: 'Ptolemy thought he could number them all and then destroy them. What does it mean that God\'s people cannot be numbered?',
        },
      ],
    },

    /* ─── 3 Maccabees 4:27–37 — Forty Days of Registration ──────────────── */
    {
      ref: '3 Maccabees 4:27–37',
      title: 'Forty Days of Failed Registration',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(27, t('And Ptolemy commanded his scribes to register every Jew by name, saying, I must know the number of those I am to destroy, that I may not err in my reckoning.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-register',
          html: 'Registration is the first step of destruction. To register is to reduce human beings to numbers, to objects that can be moved, taxed, enslaved, killed. Yet the sheer size of the multitude defeats this logic. The scribes cannot keep up. The impossibility becomes its own form of resistance.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(32, t('And for forty days the scribes sat with their pens and their tablets, writing and writing, yet they could not count them. For every name they wrote, a hundred more remained. And many of them said unto the king, We cannot number them, for their multitude is beyond measure.')),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-kalamos',
          title: 'Kalamos — Reed; Pen',
          script: 'κάλαμος',
          translit: '<strong>kalamos</strong> · reed; writing reed; pen',
          description: 'The reed pen was the instrument of empire—how scribes recorded taxes, inventories, sentences. Here the pen fails. The tool of control becomes inadequate. The Jews cannot be written down because they exceed the capacity of written language itself.',
        },
        {
          kind: 'greek',
          id: 'greek-chartēs',
          title: 'Chartēs — Paper; Papyrus',
          script: 'χάρτης',
          translit: '<strong>chartēs</strong> · papyrus; paper; parchment',
          description: 'They run out of paper. The text emphasizes the physical exhaustion of the means of record. Paper was expensive, precious. To run out of it was to reach the literal limit of what could be written down. God\'s people exceed the boundaries of record.',
        },
        {
          kind: 'carry',
          html: 'In a world that wants to count you, measure you, reduce you to data—how do you resist? What does it mean to be greater than any record can capture?',
        },
        {
          kind: 'reflection',
          id: 'mac4-number',
          prompt: 'The scribes ran out of paper. The multitude could not be written down. Yet Christ says of His followers, "The very hairs of your head are all numbered" (Matthew 12:30). How can we hold both truths?',
        },
      ],
    },

    /* ─── 3 Maccabees 4:38–46 — Constancy and Prayer ─────────────────── */
    {
      ref: '3 Maccabees 4:38–46',
      title: 'The Constancy of the Persecuted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(38, t('And as they stood in the hippodrome, surrounded by guards, awaiting the slaughter, the Jews lifted up their voices together and prayed unto the Lord, saying, O God of our fathers, have mercy upon us.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-prayer',
          html: 'Prayer in the face of certain death is the highest form of faith. Not because it wins a stay of execution, but because it claims the presence of God even in the shadow of death. The Jews do not hope for escape; they hope for His presence. That is the constancy the text celebrates.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(42, t('And they said one to another, Be strong in faith. Though our flesh may fail, our God shall not fail us. Let us not despair, for the Lord is our strength and our song.')),
          ],
        },
        {
          kind: 'carry',
          html: 'In the darkest hour, what sustains you? Is it hope that things will change, or something deeper—the knowledge that you are not alone?',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(45, t('And their lament became prayer, and their prayer became strength. For the God of their fathers looked down upon them from heaven, and He did not forsake them, though the shadow of death lay upon them all.')),
          ],
        },
        {
          kind: 'christ',
          id: 'christ-cross',
          title: 'Christ Connection — Suffering and Presence',
          html: 'Jesus in Gethsemane prays the same prayer: <em>"Father, let this cup pass from me: nevertheless not as I will, but as Thou wilt"</em> (Matthew 26:39). The constancy of the Jews mirrors His own. They suffer. They pray. They do not despair. And in His own suffering, Christ shows us that this prayer—this refusal to despair even unto death—is the truest path to God.',
        },
        {
          kind: 'reflection',
          id: 'mac4-constancy',
          prompt: 'The text says their lament became prayer, and their prayer became strength. How do you turn your own lament into prayer? What is the strength that comes from such transformation?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'israel-museum-ptolemaic',
      kind: 'museum',
      source: 'Israel Museum',
      label: 'Hellenistic Jewish Communities in Egypt',
      url: 'https://www.imj.org.il/',
      description: 'Archaeological evidence of diaspora Jewish life in Ptolemaic Alexandria.',
    },
    {
      id: 'bible-odyssey-persecution',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Religious Persecution and Jewish Resistance',
      url: 'https://www.bibleodyssey.org/dictionary/maccabees/',
      description: 'Hellenistic persecution of Jewish communities and responses to syncretism.',
    },
  ],

  bottomShare: {
    quote: 'All the Jews were gathered at the hippodrome—so great a multitude that the scribes could not number them, though they wrote for forty days. Yet they prayed: "Be strong in faith. The Lord is our strength and our song. He will not forsake us."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '3 Maccabees 4 · Study Guide',
  },
};
