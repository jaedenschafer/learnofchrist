import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Esdras 9 — The Covenant Undone, the Law Opened
 *
 * The people gather in heavy rain, weeping. Esdras commands the covenant
 * of foreign marriages be dissolved — a hard chapter that mirrors Ezra 10
 * and Nehemiah 8. Names are listed of those who had intermarried. Then,
 * in the seventh month at the Water Gate, Esdras opens the book of the law
 * and reads from morning until midday. The Levites help the people understand.
 * The people weep at hearing the law. Esdras and the Levites say: "This day
 * is holy unto the Lord; mourn not, nor weep." "The joy of the Lord is your
 * strength." The book ends abruptly, mid-sentence — "and they were gathered
 * together" — a famous textual problem that leaves us in the tension between
 * covenant-breaking and covenant-renewal.
 *
 * This chapter is pastorally delicate. The intermarriage section was not about
 * ethnicity or race, but covenant fidelity in an OT context: families whose
 * worship was divided could not belong to a people whose entire covenant
 * depended on exclusive allegiance to the God of Israel. Handle that with care,
 * without celebrating the breaking of families, and without over-claiming moral
 * absolutes for our time.
 */
export const FIRST_ESDRAS_9: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 9,

  estimatedMinutes: { beginner: 13, intermediate: 22, deep: 28 },
  intros: [
    'Word comes to Esdras that the returning exiles — priests, Levites, and laypeople — have done something his heart breaks to hear. Some have taken wives from the peoples of the land, and their families have brought with them worship of other gods. The holiness that was to set Israel apart has been compromised. The covenant that held them together is fractured.',
    'Esdras does not hide away to process his grief in private. He tears his garments, pulls out his hair, and sits in horror until the evening sacrifice. Then the people gather around him, themselves trembling. They are moved by his anguish. The question is unbearable: What now? Can the covenant be restored? But first, something harder must happen. The hard thing. The costly thing. The breaking of families in order to restore the people.',
    'And yet — because this is Scripture and Scripture speaks the full truth — the chapter does not end in sorrow. After the covenant is undone, after the list of those who separated themselves is named, the story turns. The seventh month comes. The people gather again — this time at the Water Gate. Esdras brings the book of the law. He reads. And what began in weeping over broken covenant ends in the strange, holy joy of hearing God speak.',
  ],

  bottomShare: {
    label: 'Share 1 Esdras 9',
    quote:
      'When the people heard the words of the law, they wept. But Esdras and the Levites said unto them: "This day is holy unto the Lord your God; mourn not, nor weep." And they said: "The joy of the Lord is your strength."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 9 · Study Guide',
  },

  sections: [
    /* ─── 1 Esdras 9:1–5 — The Gathering in Heavy Rain ───────────────────── */
    {
      ref: '1 Esdras 9:1–5',
      title: 'The Gathering in Heavy Rain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              1,
              t('Now when Esdras had heard these things, he rent his garments, and pulled out the hairs of his head and beard, and sat down astonied.'),
            ),
            verse(
              2,
              t('And all they that were moved at the word of the Lord came together unto him: for many of the nation of Israel, and of the priests and Levites, wept great weeping.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras-grief',
          html:
            'Esdras does not hear this news in private counsel. He tears his garments — the ancient gesture of deep grief and horror. His sorrow is public and visible. And it moves others. The phrase "all they that were moved at the word of the Lord" suggests that his grief is spiritual, not merely emotional — he grieves because the covenant itself has been broken, because the people have drifted from exclusive worship of the Lord.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              3,
              t('And Esdras rose up from the house of God, and went into the chamber of Johanan the son of Eliashib, and remained there all night: howbeit he did neither eat bread nor drink water: for he was mourning for the great transgression.'),
            ),
            verse(
              4,
              t('And they made proclamation throughout Judea and Jerusalem to all them of the captivity, that they should be gathered together at Jerusalem:'),
            ),
            verse(
              5,
              t('And that whosoever met not there within two or three days, according as the elders and the chief priests appointed, their substance should be forfeited to the house of the Lord, and themselves to be cast out from them of the captivity.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras-fast',
          html:
            'Esdras enters a chamber and fasts — neither eating nor drinking. His fast is not penance only, but intercession. He is mourning the transgression of the people, and his body becomes a sign of that sorrow. The people see him and understand. Something grave has happened. The people themselves must act.',
        },
        {
          kind: 'carry',
          html:
            'Esdras&apos;s grief moved the people. His refusal to hide his heartbreak, his willingness to let his sorrow be seen, invited the people to feel the weight of what had been done. Sometimes the most pastoral thing we can do in the face of broken covenant is not to explain it away or minimize it, but to let ourselves feel it deeply, and to let others see that we feel it. In that shared grief, the possibility of true repentance can begin.',
        },
        {
          kind: 'reflection',
          id: 'esdras-gathering',
          prompt:
            'What covenant in your own life — with God, with a community, with someone you love — has felt fractured? How did that break move you? What would it cost to name it, and to grieve it openly?',
        },
      ],
    },

    /* ─── 1 Esdras 9:6–15 — The Covenant Decision ──────────────────────── */
    {
      ref: '1 Esdras 9:6–15',
      title: 'The Covenant Decision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              6,
              t('Then all men of Judea and Benjamin gathered themselves together unto Jerusalem within three days: now it was in the ninth month, on the twentieth day of the month; and all the multitude sat in the street of the house of God, trembling because of this matter and for the rain.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heavy-rain-gathering',
          html:
            'The people gather in heavy rain — the physical misery matches their spiritual anguish. They sit in the street trembling, both from the cold and from the weight of what must be decided. The rain itself becomes part of the story: a people gathered in storm, in difficult circumstances, to face a hard truth and make a harder choice. Weather and conscience converge.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              7,
              t('And Esdras stood up, and said unto them, Ye have transgressed, and have taken strange wives, to increase the trespass of Israel.'),
            ),
            verse(
              8,
              t('Now therefore make confession and give glory unto the Lord God of your fathers, and do his will: and separate yourselves from the strange wives of the peoples of the land.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'strange-wives-covenant',
          html:
            'Esdras does not soften the truth. He names it directly: "Ye have transgressed." The sin was not innocent. The people had married into families whose gods were not the God of Israel. This was a covenant issue, not an ethnic one. Ruth the Moabitess, Rahab the Canaanite — they had been welcomed into Israel because they joined themselves to the God of Israel. But these wives had brought with them the worship of other gods. The covenant of exclusive worship had been broken.',
        },
        {
          kind: 'greek',
          id: 'greek-nomos',
          title: 'Nomos — "Law" or "Covenant Stipulation"',
          script: 'νόμος',
          translit: '<strong>nomos</strong> · law; that which is laid down; custom',
          description:
            'In the Greek of 1 Esdras, the law is not merely a legal code but the stipulation that binds the people to God. To break the law is to break the covenant itself — to live as if the exclusive worship of the Lord is optional, negotiable. It is not.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              9,
              t('Then cried the whole multitude, and said with a loud voice, As thou hast said, so will we do.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'whole-multitude-cry',
          html:
            'The people do not resist. They cry out together — not in anger, but in assent. They acknowledge the truth of what Esdras has named. The covenant has been broken. It must be restored. And the restoration will cost them dearly.',
        },
        {
          kind: 'carry',
          html:
            'Repentance sometimes requires us to undo what we have built. To step back from what felt like blessing. To separate ourselves from what compromised our deepest commitments. The people said yes to this costly path not because it was easy, but because they recognized what was true: the covenant could not hold a people divided in their worship. Neither can ours.',
        },
        {
          kind: 'reflection',
          id: 'covenant-decision',
          prompt:
            'Is there something in your life that compromises your commitment to God? What would it cost to choose the covenant over the compromise — and what do you think lies on the other side of that choice?',
        },
      ],
    },

    /* ─── 1 Esdras 9:16–36 — The List of Those Who Separated ───────────────── */
    {
      ref: '1 Esdras 9:16–36',
      title: 'The List of Those Who Separated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              16,
              t('But forasmuch as the people of the land are strong, and it is a time of much rain, we are not able to stand without in the street: therefore this matter cannot be dispatched in one day or two days.'),
            ),
            verse(
              17,
              t('But let the rulers of the multitude stay, and let all them of our habitations that have strange wives in them come at the time appointed,'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'process-of-separation',
          html:
            'The text is honest: this cannot be rushed. The people are gathered in heavy rain, and they cannot stand in the street indefinitely. But more than weather delays the process. Each man who has taken a foreign wife must come before the rulers. Each decision must be witnessed. Each separation must be named. The covenant-breaking cannot be undone carelessly or quickly.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              18,
              t('And Jesias the son of Jezona, and Maaseias, were appointed over this, with Sabbatias and Judas, and Josias: (for this was in the time of the month Adar.)'),
            ),
            verse(
              19,
              t('And they were assembled, and they sat in the first day of the month to examine the matter.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rulers-appointed',
          html:
            'Four men are appointed — Jesias, Maaseias, Sabbatias, and Judas. The text names them. They are not faceless officials. They carry the weight of this decision personally. They will sit and examine the matter. Each case will be heard.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              20,
              t('And the priests, and the Levites, and the chief of the fathers of Israel, were gathered together with them, to examine this matter about the strange wives. And that day they were assembled together.'),
            ),
            verse(
              21,
              t('And Esdras rose up, and said unto them, Ye have transgressed and taken strange wives, that ye might increase the trespass of Israel.'),
            ),
            verse(
              22,
              t('And now confess ye unto the Lord God of your fathers, and do his pleasure; and separate yourselves from the strange peoples of the land, and from the strange wives.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras-repeats-call',
          html:
            'Esdras repeats his call to repentance. He speaks again and again — not because the people are unwilling, but because this decision is so costly that it must be made deliberately, consciously, with full understanding of what is being chosen.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              23,
              t('Then cried the whole congregation, and said with a loud voice, According to thy word so will we do.'),
            ),
            verse(
              24,
              t('But forasmuch as the people are many, and it is a time of much rain, and we are not able to stand without, and this is not a work of a day or two: seeing our sin in this matter is spread far,'),
            ),
            verse(
              25,
              t('Let the rulers of the multitude stay, and let all them that have strange wives in our habitations come at the time appointed, and with them the rulers and judges of every place, until we turn away the wrath of the Lord from us for this matter.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'sin-spread-far',
          html:
            'The phrase "our sin in this matter is spread far" acknowledges that this is not a small problem. It has touched many families. Priests and Levites, common people alike. The separation will reach into homes and hearts across all the people. That is why it cannot be done in haste.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              26,
              t('But Jonathan the son of Asael and Ezias the son of Theocanus undertook this matter upon themselves: and Meshullam and Levi and Sabbatias were also of the council with them.'),
            ),
            verse(
              27,
              t('And they were of the priests that had taken strange wives, to wit, Jonathan the son of Asael, and Ezias the son of Theocanus; and Levi and Sabbatias that had taken strange wives.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'priests-themselves-separated',
          html:
            'The text does not spare even the priests. Jonathan, Ezias, Levi, and Sabbatias — they had taken foreign wives too. They are named. They are counted among those who separated. The separation is not something imposed on others; it reaches even into the leadership.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              28,
              t('And they gave their hands to put away their wives. And they offered rams for their offense.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'hands-and-offering',
          html:
            'A hand extended in agreement. An offering made as restitution. The text does not dwell on the pain of families separated, on children left behind, on the cost to those women who were sent away. It is a hard text. But it also makes clear: the people chose. They gave their hands. They offered. They owned the decision.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              29,
              t('And of the rest of Israel: of the sons of Phoros, Hiermas and Zia and Chelcias and Shamas and Othonias. Of the sons of Rama, Mattenai and Mattatias and Zabad and Eliphelet and Manasses and Shimei. Of the sons of Addi, Naathus and Moossias and Lacunus and Naaeus and Assabias and Othonias.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'names-listed',
          html:
            'The list begins. Names upon names. The text insists that we read them, that we attend to them. These are not abstract cases. These are people: Hiermas and Zia and Chelcias. They separated themselves. They are named in Scripture. Their obedience — and their sorrow — is recorded.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              30,
              t('Of the sons of Anan, Elionas and Asias and Melchias and Sabbeas and Simon Chosameus. Of the sons of Asom, Altaneus and Matthias and Bannaia and Eliphalet and Manasses and Simeon.'),
            ),
            verse(
              31,
              t('Of the sons of Amanias, Mazitias and Sabbias and Malchias and Miamin and Eleazar and Asibias and Banneias. Of the sons of Hashum, Mattenai and Mattattah and Zabad and Eliphelet and Manasses and Shimei.'),
            ),
          ],
        },
        {
          kind: 'carry',
          html:
            'Scripture names them. Not to shame them, but to witness to them. To say: your choice, your separation, your return to covenant — it matters. It is remembered. It is part of the story of God&apos;s people. When you make a costly choice to restore covenant, to turn from what divides your allegiance, you are not a small thing in God&apos;s sight. You are named.',
        },

        {
          kind: 'reflection',
          id: 'list-reflection',
          prompt:
            'If your own choices to honor God were written down and named in Scripture, what would be recorded about you? Where have you chosen the covenant, even when it cost you?',
        },
      ],
    },

    /* ─── 1 Esdras 9:37–47 — The Seventh Month at the Water Gate ──────────── */
    {
      ref: '1 Esdras 9:37–47',
      title: 'The Seventh Month at the Water Gate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              37,
              t('And these were they of the priests which had taken strange wives, and put them away with their children.'),
            ),
            verse(
              38,
              t('And they that were of the priests went into the sanctuary of the Lord, clothed with sackcloth, and great sackings [weeping].'),
            ),
            verse(
              39,
              t('And they cried with a loud voice unto the Lord, saying, O Lord, we have sinned, and committed iniquity, and dealt unrighteously in taking strange wives of the peoples of the land: therefore now we have no hold upon thee.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'priests-clothed-sackcloth',
          html:
            'The priests enter the sanctuary in sackcloth, weeping aloud. They cry out their confession. "We have sinned, we have committed iniquity, we have dealt unrighteously." There is no excuse. There is only the breaking of the covenant and the need to be restored to it.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              40,
              t('And now make thy mercy to appear upon us: for we are sinners.'),
            ),
            verse(
              41,
              t('And the people sat in the street of the gate of the sanctuary all night, neither eating bread nor drinking water: for they kept a fast and made lamentation.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'night-fast-lamentation',
          html:
            'The night vigil. The people sit in the street, fasting, waiting. They do not go home. They do not eat. They are holding themselves accountable, making their sorrow visible. The separation has been named; the confession has been made. Now comes the second part of the story.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              42,
              t('And on the next day the rulers and ancients met, and Esdras the priest said, Ye have transgressed in taking strange wives, which doth increase the sins of Israel.'),
            ),
            verse(
              43,
              t('Confess now, therefore, unto the Lord God of your fathers, and do his pleasure; and separate yourselves from the strange peoples of the land, and from the strange wives.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras-morning-call',
          html:
            'Morning comes. Esdras stands again. The call echoes. The people respond. They have already wept, already fasted, already witnessed the separation. And now a new thing is about to happen. The story is not finished with breaking covenant. It turns toward renewal.',
        },

        {
          kind: 'greek',
          id: 'greek-pyle',
          title: 'Pyle — "Gate"',
          script: 'πύλη',
          translit: '<strong>pyle</strong> · gate; entrance; the threshold where inside and outside meet',
          description:
            'The Water Gate is not just a geographical location. It is the threshold where the people gather. The gate where water flows. The gate where outside peoples and inside covenant meet. It is where the breaking of covenant is faced, and where covenant is renewed.',
        },

        {
          kind: 'carry',
          html:
            'After the weeping, after the separation, after the long night of fasting and lamentation, Esdras stands and speaks again. The work of repentance is not finished in a single day, a single moment of feeling sorry. It is a prolonged turning. And yet — it is a turning toward something. Not just away from what was broken, but toward what can be restored.',
        },
        {
          kind: 'reflection',
          id: 'water-gate',
          prompt:
            'What has the breaking of covenant taught you? What do you need to hear from God to be able to turn from sorrow to restoration?',
        },
      ],
    },

    /* ─── 1 Esdras 9:44–47 — Esdras Opens the Book ────────────────────── */
    {
      ref: '1 Esdras 9:44–49',
      title: 'Esdras Opens the Book of the Law',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              44,
              t('Then when Esdras had ceased speaking, they all cried with a loud voice, saying, We will do as thou hast said.'),
            ),
            verse(
              45,
              t('But forasmuch as the multitude cannot bear to be in the open field in much rain, and we being unable to stand without, and it raining, that we may have audience of thee, and the air being clear about the morrow,'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'people-assent',
          html:
            'The people cry out their assent. Again. The covenant decision is made. They have named it, wept it, fasted it. Now — they wait for a new word.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              46,
              t('Let the ruler appoint judges, and let the people gather on the morrow at the gates of the house of the Lord.'),
            ),
            verse(
              47,
              t('For concerning the matter of the strange wives we have no other remedy, nor yet authority.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'waiting-for-word',
          html:
            'The people have done what they can do. They have confessed, separated, lamented. But they need something more. They need to hear from God. Tomorrow the morrow will come. Esdras will open the book. The law will be read.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              48,
              t('And on the morrow they were all gathered together at the gate of the house of the Lord. And when they were gathered together, Esdras stood up, and said unto them, Hear, ye that are assembled together, hear unto me.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gate-gathering-prepared',
          html:
            'The morrow comes. The people gather at the gate of the house of the Lord. It is the same gate, the Water Gate, where tears have flowed, where covenant has been broken and remade. Now they gather to hear something new.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              49,
              t('And Esdras brought the book of the law before the multitude; for he sat honourably in the place before them all; and when he opened the law, all the people stood still, listening unto him.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'book-opened-standing',
          html:
            'Esdras opens the book. And the people stand. Not a sitting, casual listening, but a standing, attentive, reverent posture. The book is opened. The word is about to be spoken. The people position themselves to receive it.',
        },

        {
          kind: 'christ',
          id: 'christ-word-law',
          title: 'Christ Connection — The Law Was Given by Moses; Grace and Truth Came by Jesus',
          html:
            'Esdras stands and opens the book of the law. John&apos;s Gospel puts it plainly: "The law was given by Moses, but grace and truth came by Jesus Christ" (John 1:17). The law here is not wrong. It is the word of God. But it is the law — it shows what is broken, what is separated from God, what needs to be restored. It calls the people to covenant. But the people weep at what it exposes in them. Later, Jesus will come and stand in that same gap. He will say not only what is demanded, but what makes it possible: "My peace I leave with you" (John 14:27). The book opens toward Him.',
        },

        {
          kind: 'carry',
          html:
            'The book opens in the presence of a people who have just broken covenant. They stand to hear it. They are humbled, aware of their fracture, ready to receive. What does the law sound like to a people willing to listen? Not like judgment only, but like truth spoken to those who recognize their need for it. When you come to Scripture aware of your own breaking, your own distance from God, the words take on weight and mercy both.',
        },
        {
          kind: 'reflection',
          id: 'book-opened',
          prompt:
            'When you open Scripture, do you come to it as a people aware of your own covenant-breaking, your own need? What would change if you let the law expose what is broken in you before you seek what it demands of you?',
        },
      ],
    },

    /* ─── 1 Esdras 9:48–55 — The Levites Help the People Understand ───────── */
    {
      ref: '1 Esdras 9:50–55',
      title: 'The Levites Help the People Understand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              50,
              t('And Josias, and Ananias, and Samaias, and Akkub, Sabbataias, Haarias, Sthanias, Jerijah, Akkub, Salitas, Kelitas, Barsamaphas, Nehelemias, were appointed to stand with the Levites and cause the people to understand the law: and the people all stood in their places.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'levites-named',
          html:
            'The text names the Levites. Josias, Ananias, Samaias — they stand with Esdras. They are appointed to help the people understand. Understanding is not something that happens by hearing alone. It requires explanation. It requires translation. It requires that someone care enough to make the word clear.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              51,
              t('So he read in the book of the law of God distinctly, and gave the sense, and caused them to understand the reading.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'read-distinctly-sense',
          html:
            'Three actions: read distinctly, gave the sense, caused them to understand. The law is not mumbled or hidden. It is read clearly. But the reading alone is not enough — someone must give the sense of it. Someone must help the people move from hearing words to understanding truth. Esdras does this. The Levites do this. They care enough to translate the law into understanding.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              52,
              t('And Nehemias said, This day is holy unto the Lord; all ye that are gathered, sanctify the Lord, and mourn not.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'holy-day-call',
          html:
            'Nehemias (who in our parallel text Nehemiah 8 is the governor) calls out to the people. "This day is holy unto the Lord." It is not a day for mourning. The covenant has been broken and is being restored. The law has been broken and is being re-embraced. Now — now comes something different. Now comes the response to grace.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              53,
              t('Then all the people wept and heard the words.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'people-wept-heard',
          html:
            'Even as they are told not to mourn, they weep. The experience of hearing God&apos;s word, of having it made clear to them, of standing together under it — all of it moves them to tears. Not tears of despair, but tears of being seen, known, and called back.',
        },

        {
          kind: 'greek',
          id: 'greek-katanysso',
          title: 'Katanyssō — "To Weep; To Pierce; To Sting"',
          script: 'κατανύσσω',
          translit: '<strong>katanysso</strong> · to weep with a broken heart; to be pricked in the heart',
          description:
            'The Greek word carries the sense of a piercing. The heart struck, broken open, awakened. The people weep not from sadness, but from having been struck by the word of God — awakened to their own condition and to God&apos;s call.',
        },

        {
          kind: 'carry',
          html:
            'The law breaks the people open. But it breaks them open in the presence of community. In the presence of leaders who have themselves wept and repented. In the presence of Levites who care enough to make the word clear. In the presence of Nehemias who says: this is holy. This is the moment of restoration. The breaking of covenant is not the end of the story.',
        },
        {
          kind: 'reflection',
          id: 'levites-understanding',
          prompt:
            'Who has helped you understand God&apos;s word? Whose patience, whose care in explanation, has opened Scripture for you? How might you offer that gift to someone else?',
        },
      ],
    },

    /* ─── 1 Esdras 9:52–55 — Mourn Not; Joy of the Lord ──────────────────── */
    {
      ref: '1 Esdras 9:52–55',
      title: '"Mourn Not; The Joy of the Lord Is Your Strength"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              54,
              t('And Esdras said, This day is holy unto the Lord: therefore be not sorrowful; for the Lord will bring you to honour.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras-not-sorrowful',
          html:
            'Esdras continues the call. "This day is holy unto the Lord. Therefore be not sorrowful." He does not say the covenant-breaking was not serious. He does not minimize what was done. But he says: that is not the last word. Holiness is the last word. And holiness is not shame. It is honor. The Lord will bring you to honor.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              55,
              t('And all the people said, Amen, Amen. And they lifted up their hands, and went away all to their dwellings with joy and gladness in their hearts, praising the Lord.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'amen-lifted-hands',
          html:
            'The people cry out "Amen, Amen" and lift their hands. These are the gestures of assent, of acceptance, of opening themselves to what is being given. And then they go — to their dwellings, with joy and gladness in their hearts. The same people who wept now praise. The same covenant that was broken is being remade.',
        },

        {
          kind: 'greek',
          id: 'greek-chara',
          title: 'Chara — "Joy"; Rejoicing from God',
          script: 'χαρά',
          translit: '<strong>chara</strong> · joy; that which makes glad; the delight that comes from God',
          description:
            'The Greek word "chara" is not mere happiness or pleasure. It is joy — a deep gladness that comes not from circumstances changing, but from standing in right relationship with God. The people had just separated themselves from their wives, witnessed brokenness, confessed their sin. And yet they go to their dwellings with chara — with the joy that only God gives.',
        },

        {
          kind: 'christ',
          id: 'christ-joy-strength',
          title: 'Christ Connection — My Joy I Leave with You',
          html:
            'In our parallel text, Nehemiah 8:10, the famous words appear: "The joy of the Lord is your strength." Esdras calls the people away from mourning toward this joy. Much later, Jesus will stand with His disciples and say, "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world" (John 16:33). And again: "As the Father has loved me, so have I loved you. Now remain in my love… I have told you this, so that my joy may be in you and that your joy may be complete" (John 15:9, 11). The same movement: acknowledgment of pain and breaking, and then the gift of joy that transcends circumstances. Esdras points toward Jesus.',
        },

        {
          kind: 'carry',
          html:
            'The people go to their dwellings with joy. Not because the separation did not hurt. Not because covenant-breaking is painless. But because they have been called back. They have been received. They have heard the law and understood it. And in the presence of those who have wept with them, explained to them, and called them to honor, they have experienced something deeper than happiness: the joy of being restored to God.',
        },
        {
          kind: 'reflection',
          id: 'joy-strength',
          prompt:
            'When have you experienced joy even in the midst of difficulty? What has the restoration of broken covenant cost you, and what joy has come on the other side of that cost?',
        },
        {
          kind: 'artwork',
          matchTitle: /water|gate|gathering|assembly/i,
          caption: '1 Esdras 9 · Gathered at the Water Gate',
        },
      ],
    },

    /* ─── 1 Esdras 9 Ends — Abruptly, Mid-Sentence ─────────────────────── */
    {
      ref: '1 Esdras 9:55 (End)',
      title: 'The Book Ends; "And They Were Gathered Together"',
      blocks: [
        {
          kind: 'commentary',
          id: 'abrupt-ending',
          html:
            'The book of 1 Esdras ends here, at 1 Esdras 9:55. But the story does not end — it stops. The text we have ends with: "And they lifted up their hands… praising the Lord" (9:55). But there is a famous textual problem: the fullest Greek manuscripts continue: "and they were gathered together" (Esdras continued reading the law, the Feast of Booths was kept, and more). The ending is abrupt, unresolved, as if the book breaks off mid-sentence. It is one of the great mysteries of Esdras: why does it stop here? Does the scribe&apos;s copy break off? Does the story remain intentionally unfinished, suspended between covenant-breaking and covenant-renewal, between weeping and joy?',
        },

        {
          kind: 'commentary',
          id: 'unfinished-promise',
          html:
            'The book of 1 Esdras, read entire, is a book about return: exiles returning from captivity, returning to God, returning to the law, returning to the covenant. It traces a people who have drifted and been called back. And it ends — not with finality, but with a people "gathered together," still listening, still receiving, still being spoken to by God. The ending suspends us. We do not get closure. We get a people held in the moment of restoration, caught between the old breaking and the new healing.',
        },

        {
          kind: 'christ',
          id: 'christ-gathered-together',
          title: 'Christ Connection — The Church "Gathered Together"',
          html:
            '"I will build my church; and the gates of Hades will not overcome it" (Matt. 16:18). Matthew and Luke both use the same Greek word for the people being "gathered together" — the church, the called-out ones, the assembly of God. The book of 1 Esdras ends not with a closed story but with a gathered people. We do not get to see the end. But we know Whom they are gathered unto. We know that the breaking and the mending are not left in human hands. Christ is the One who gathers. Christ is the One who reads the law and opens it. Christ is the One who stands in the middle of the breaking and says: "Be not sorrowful. The joy of the Lord is your strength." The abrupt ending is not a problem — it is an open door. The story continues in Jesus.',
        },

        {
          kind: 'carry',
          html:
            'You may be in the middle of a story that feels unfinished. A covenant broken and being restored. A people called back but not yet seeing the full arc of healing. A gathering in the presence of God&apos;s word, but not yet knowing how the story ends. The book of Esdras stops here — not because the story stops, but because our seeing stops. We see only up to the point where the people are gathered together. We trust the rest to God. Jesus is reading the law to His church even now. Jesus is calling us back to joy. Jesus is gathering us together. And the story — His story — does not end abruptly. It runs all the way through to restoration and glory.',
        },

        {
          kind: 'reflection',
          id: 'gathered-together-continue',
          prompt:
            'What story in your own life feels incomplete or suspended? Where are you "gathered together" but not yet seeing the full resolution? What would it mean to trust that God is still reading, still calling, still gathering you toward restoration?',
        },
        {
          kind: 'artwork',
          matchTitle: /scroll|book|law|torah|reading/i,
          caption: '1 Esdras 9 · The Law Opened, The Book Unfinished',
        },
      ],
    },
  ],
};
