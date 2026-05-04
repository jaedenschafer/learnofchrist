import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 4 Maccabees 4 — The Stage Is Set: Apollonius, the Temple, and Antiochus IV
 *
 * This chapter traces the historical arc that leads to the martyrdoms: Apollonius,
 * governor of Syria under Seleucus IV, hears of the temple treasure and attempts
 * to seize it. He enters the holy of holies and is struck down by an angelic vision,
 * then healed through the high priest Onias&apos;s intercession. Years later, after
 * a feud with Simon, Antiochus IV Epiphanes (Apollonius&apos;s successor in policy,
 * not blood) comes to power and launches a calculated Hellenization program—forcing
 * Greek customs, abolishing the law, desecrating the temple. The stage is set for
 * the righteous to choose between apostasy and death. The angel at the gate of the
 * temple foreshadows Christ&apos;s zeal for His Father&apos;s house. Onias&apos;s intercession
 * prefigures Christ&apos;s eternal high-priestly prayer. And the martyrs&apos; resistance
 * echoes Christ&apos;s own word: "Fear not them that kill the body."
 */
export const FOURTH_MACCABEES_4: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 4,

  estimatedMinutes: { beginner: 6, intermediate: 11, deep: 15 },
  intros: [
    'The Jewish people in the second century before Christ lived under the shadow of empire. A century after their temple had been rebuilt, a foreign governor named Apollonius heard rumors of treasure locked away in the Holy Place. What happened next was a defining moment: Apollonius attempted to enter the sanctuary and was met by an angel. He was healed only through the prayers of the high priest Onias. But that mercy was short-lived. Years later, a new tyrant—Antiochus IV Epiphanes—would not be so gentle. He would demand not just obedience, but the abandonment of God Himself.',
    'This chapter is the turning point of 4 Maccabees. In Chapters 1 through 3, we saw reason triumph through stories of restraint—David refusing water, appetite mastered. Now the stakes rise. When the law itself is outlawed, when the very practice of faith becomes an act of rebellion, what does reason look like then? The martyrdoms that follow are not random suffering, but a test of whether reason can sustain the human soul when the body itself is under siege.',
  ],

  opener: {
    matchArtist: /tissot|doré|rembrandt/i,
    matchTitle: /temple|jerusalem|priest|angel|sanctuary/i,
    caption: 'The Temple Guarded: Apollonius Meets the Angel',
  },

  sections: [
    /* ─── 4 Maccabees 4:1–3 — The Governor&apos;s Greed ─────────────────────── */
    {
      ref: '4 Maccabees 4:1–3',
      title: 'Apollonius&apos;s Greed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(1, t('Now when '), hy('Seleucus', 'seleucus-reign'), t(' was dead, and Antiochus, surnamed Epiphanes, took the kingdom, Jason, a wicked man, obtained the high priesthood by corruption.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'seleucus-reign',
          html:
            'The text moves quickly: one king dies, another takes power. But the shift is seismic. Seleucus IV (the father) had, until now, left the Jews largely alone. His successor, Antiochus IV, has a very different vision. The machinery of persecution is about to be activated. Notice that Jason obtains the high priesthood "by corruption"—not by the law, but by bribery. The temple itself is about to become a tool of Hellenization. [res:sefaria-4-macc-4] [res:theoi-stoic-reason]',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(2, t('And when he was established in office, he sent '), hy('Apollonius', 'apollonius-governor'), t(', the governor of Coele-Syria and Phoenicia, to take the treasures of the holy temple. For he had heard that they were very great.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'apollonius-governor',
          html:
            'Apollonius is not a spiritual man sent to worship. He is a governor sent to plunder. The logic is simple and brutal: the Seleucid empire is short of funds. There is gold in the Jewish temple. Therefore, the gold will be taken. This is political economy dressed as religious policy. Yet what Apollonius encounters at the threshold of the holy place will be something entirely outside his political calculations[res:sefaria-4-maccabees-4].',
        },
        {
          kind: 'reflection',
          id: 'mac4-greed-begin',
          prompt: 'Antiochus and Apollonius are driven by greed. When have you felt the pull to seize something that did not belong to you? What stopped you?',
        },
      ],
    },

    /* ─── 4 Maccabees 4:4–7 — The Temple Guarded ──────────────────────────── */
    {
      ref: '4 Maccabees 4:4–7',
      title: 'The Temple Guarded',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(4, t('So he came to Jerusalem and presented himself at the holy temple. The priests told him that the treasures belonged to widows and orphans, and that it was unlawful to touch them.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-priests-plea',
          html:
            'The priests do not meet force with force. They do not have an army to stop Apollonius. Instead, they appeal to law—the law of God, which designates the temple treasures as sacred, set apart for the vulnerable. They speak as if Apollonius might listen to reason, as if he might understand that some things are holy and therefore cannot be seized. They appeal to the conscience, which is always the first line of defense when the body cannot resist.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(5, t('But Apollonius went into the holy place himself, despising their words. He determined in his heart that he would take the treasure by force, for the king had commanded it.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-apollonius-enters',
          html:
            'Apollonius dismisses the priests&apos; appeal. He enters the holy of holies—the innermost sanctuary where only the high priest may go once yearly. This is not merely theft. This is desecration. This is a pagan official violating the most sacred space in Judaism. The naos, the inner chamber, is about to become a place of confrontation between earthly power and heavenly authority.',
        },
        {
          kind: 'greek',
          id: 'greek-naos',
          title: 'Naos — "Temple"; "Inner Sanctuary"; "Shrine"',
          script: 'ναός',
          translit: '<strong>naos</strong> · the inner temple; the holy of holies; the dwelling place of God',
          description:
            'The naos is not the outer courtyard where merchants gather. It is the innermost chamber, the most sacred space, where God&apos;s presence dwells. When Apollonius enters the naos uninvited, he is not merely entering a room. He is crossing a boundary that separates the mortal realm from the divine.',
        },
        {
          kind: 'carry',
          html:
            'There are sanctuaries in your life—spaces set apart, sacred, not meant to be violated by every passing hand. A marriage is a naos. A child&apos;s trust is a naos. Your prayer room, your Sabbath rest, your conscience—these are sacred. When someone enters them uninvited, seeking to plunder them, what will you do?',
        },
      ],
    },

    /* ─── 4 Maccabees 4:8–11 — The Angel Strikes ────────────────────────────── */
    {
      ref: '4 Maccabees 4:8–11',
      title: 'The Angel Strikes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(8, t('Then '), hp('a great vision appeared', 'mac4-vision'), t(', and all that entered with Apollonius were struck with terror. For they saw '), hg('an angel of terrible strength', 'mac4-angel'), t(', shining with weapons of war.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-vision',
          html:
            'The text says a "great vision appeared." This is not a private interior experience, but a visible, objective event—so powerful that all who witnessed it were struck with terror. In ancient literature, when God acts to defend His sanctuary, the action is always physical, visible, undeniable. The angel does not whisper. The angel manifests.',
        },
        {
          kind: 'greek',
          id: 'greek-angelos',
          title: 'Angelos — "Messenger"; "Angel"; "One Sent"',
          script: 'ἄγγελος',
          translit: '<strong>angelos</strong> · messenger; angel; one sent by God',
          description:
            'An angelos is not a metaphor or an inner voice. It is a creature sent, an agent of divine will made visible. When the angelos appears at the threshold of the naos, it is God&apos;s answer to the desecration: not permission, but prohibition; not silence, but resistance.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(9, t('And this angel struck Apollonius down, and he fell to the ground, unable to move or speak. His servants lifted him up, but he could not stand.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-angel',
          html:
            'The angel&apos;s response is swift and absolute. Apollonius is not merely rebuked; he is incapacitated. He falls. He cannot speak. He cannot stand. In an instant, all his authority, all his rank as governor, all the will of the king behind him—all of it is rendered powerless. There is a power that exceeds the power of empires, and it does not negotiate.',
        },
        {
          kind: 'christ',
          id: 'mac4-angel-christ',
          title: 'Christ Connection — The Zeal of the House of God',
          html:
            'John records that when Jesus entered the temple in Jerusalem and found it turned into a marketplace, He made a whip of cords and drove out the money-changers. His disciples remembered the words of Psalm 69: "The zeal of thine house hath eaten me up" (John 2:17). Like the angel at the naos, Christ guards what is holy with fierce, visible action. The desecration of God&apos;s house moves His heart to action. Years later, Stephen would be martyred for testifying to the same zeal: that God&apos;s true tabernacle is not made with hands, and that resistance to the Holy Spirit is always folly (Acts 7:51). Christ&apos;s entry into the temple in the gospels echoes this moment: heaven defending what is sacred.',
        },
        {
          kind: 'reflection',
          id: 'mac4-desecration',
          prompt: 'What spiritual sanctuaries in your faith have you seen violated or desecrated? How did you respond? How do you think God responds?',
        },
      ],
    },

    /* ─── 4 Maccabees 4:12–15 — Onias&apos;s Prayer ──────────────────────────── */
    {
      ref: '4 Maccabees 4:12–15',
      title: 'Onias&apos;s Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(12, t('Then the high priest '), hy('Onias', 'mac4-onias'), t(' came forward and prayed for Apollonius. He said, "O God of heaven, if this man has sinned, look upon his repentance. But if his ignorance brought him to this place, let there be mercy."')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-onias',
          html:
            'This is the heart of the chapter. Onias does not rejoice in Apollonius&apos;s punishment. He does not demand further judgment. Instead, he intercedes. He prays. He stands between the judgment of heaven and the fallen man below. Onias is the high priest in the fullest sense—not merely one who performs rituals, but one who bears the burden of the people, who carries their sins before God, who pleads for mercy on behalf of those who do not deserve it.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(13, t('And as Onias prayed, Apollonius rose up and stood. He was whole and able to speak. He looked upon Onias with wonder, for he had seen the power of the God of Israel.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-restoration',
          html:
            'The prayer is answered at once. Apollonius is restored—not punished further, but healed. Not killed, but raised. This is not weakness on God&apos;s part. It is the fullness of divine character: God defends the holy, but God also shows mercy. The angel&apos;s blow was not the final word. Onias&apos;s prayer was. Apollonius&apos; restoration is a sign that repentance is always possible, that even those who desecrate can be healed if they turn.',
        },
        {
          kind: 'greek',
          id: 'greek-priesthood',
          title: 'Hiereus — "Priest"; "One Who Intercedes Before God"',
          script: 'ἱερεύς',
          translit: '<strong>hiereus</strong> · priest; one who stands between heaven and earth',
          description:
            'A hiereus is not merely a person who performs sacrifices. A hiereus is a bridge—someone who stands in the gap between God and humanity, who carries prayers upward and blessings downward. Onias exemplifies the role perfectly. He does not stand in judgment. He stands in intercession.',
        },
        {
          kind: 'christ',
          id: 'mac4-onias-christ',
          title: 'Christ Connection — The Eternal High Priest',
          html:
            'Hebrews tells us: "Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them" (Heb 7:25). Onias interceded for Apollonius and secured his healing. Christ intercedes for all believers before the throne of God and secures their eternal life. The Psalmist promises: "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness" (1 John 1:9). Like Onias, Christ does not ask us to earn healing. He simply prays for us, and the prayer is heard. The difference is that Christ&apos;s intercession is not limited to one moment or one man. It is eternal. It is for all who believe.',
        },
        {
          kind: 'carry',
          html:
            'You have a High Priest who is praying for you right now. Not because you have earned it, not because you deserve it, but because He is the High Priest and intercession is His eternal work. What would change if you truly believed that Christ is at this moment speaking your name before the Father?',
        },
      ],
    },

    /* ─── 4 Maccabees 4:16–20 — Apollonius Restored ──────────────────────────── */
    {
      ref: '4 Maccabees 4:16–20',
      title: 'Apollonius Restored',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(16, t('Apollonius went away and reported to the king all that had happened. He said, "O King, the God of the Jews is greater than all gods, and His wrath is upon those who violate His house. I am witness to His power."')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-testimony',
          html:
            'Apollonius becomes a witness. He does not hide what happened. He confesses to the king that he was wrong, that the God of Israel is powerful, and that desecration brings wrath. This is the pattern throughout scripture: when God acts, the action speaks for itself. Even pagan governors can recognize the power of God when they encounter it directly.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(17, t('For a time, the king heeded these words. He did not again attempt to seize the temple treasure. But the peace would not last. For there was strife between Simon and Onias, the high priests, and this strife would open a door to greater evils.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-strife',
          html:
            'Here is the crack in the wall. The temple is defended. Apollonius is restrained. But within the Jewish leadership, there is division. Simon and Onias feud over the high priesthood. This internal conflict is the wedge that Antiochus will use. Whenever the people of God are divided, external enemies find their opportunity.',
        },
        {
          kind: 'reflection',
          id: 'mac4-division',
          prompt: 'What divisions exist in your own faith community or church? How might those divisions be leaving the door open for corruption or compromise?',
        },
      ],
    },

    /* ─── 4 Maccabees 4:21–26 — Antiochus Rises and Hellenization Begins ────────── */
    {
      ref: '4 Maccabees 4:21–26',
      title: 'Antiochus Rises: Hellenization Forced',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(21, t('Now Antiochus, surnamed Epiphanes, took the throne. He was a man of pride and contempt. He said in his heart, "I will make all my subjects one people, and they shall abandon their laws."')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-epiphanes',
          html:
            'Antiochus IV called himself "Epiphanes"—"the Manifestation," meaning the manifestation of god. This is not mere vanity. It is a theological claim. He is saying: I am divine. My will is law. My commands supersede every other law, including the laws of God. When a human ruler claims to be a god, the collision with a monotheistic faith is inevitable. Someone must give way.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(22, t('And he sent forth a decree throughout his kingdom that no one should practice the Law of Moses. The Jewish festivals were forbidden. The Sabbath was forbidden. Circumcision was forbidden.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-law-abolished',
          html:
            'This is not a persecution of Jews who refuse to worship Antiochus alongside their God. This is the outlawing of Judaism itself. The decree does not say, "Worship our gods too." It says, "Abandon your God entirely." The markers of Jewish identity—the Sabbath, circumcision, the Torah—are criminalized. To be Jewish becomes an act of rebellion.',
        },
        {
          kind: 'greek',
          id: 'greek-hellenizo',
          title: 'Hellēnizō — "To Hellenize"; "To Live as a Greek"; "To Adopt Greek Ways"',
          script: 'ἑλληνίζω',
          translit: '<strong>hellēnizō</strong> · to Hellenize; to adopt Greek customs; to make Greek',
          description:
            'Hellēnizō is not merely cultural preference. It is a program of assimilation. To Hellenize is to abandon your own identity and assume another. Antiochus demands that the Jews hellēnizō—stop being Jewish, start being Greek. Stop following the nomos (law) of Moses, start following the nomos of the king.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(23, t('Furthermore, he erected an altar to Zeus in the Temple itself, and he commanded all his subjects to offer swine flesh upon it.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-altar-zeus',
          html:
            'The desecration is now official. An altar to Zeus—a pagan god—is set up in the temple of the God of Israel. The swine, forbidden by the law, is now mandated as an offering. This is not coexistence of religions. This is the replacement of one with the other. The holy place is made unholy. The sacred is made profane.',
        },
        {
          kind: 'greek',
          id: 'greek-nomos',
          title: 'Nomos — "Law"; "Custom"; "What Is Appointed"',
          script: 'νόμος',
          translit: '<strong>nomos</strong> · law; the appointed order; what is binding',
          description:
            'The nomos of Israel is the Torah—God&apos;s law, given at Sinai, binding on all Jews. Antiochus demands that nomos be abandoned in favor of his own decree. When a king abolishes the law of God in order to impose his own will, a choice becomes unavoidable: Whose law will you follow?',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(24, t('And those who would not comply were brought before the king. He offered them riches and honor if they would abandon their faith.')),
            verse(25, t('But many refused. And to those who refused, he showed no mercy. For he sought not merely obedience, but apostasy.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-choice',
          html:
            'Antiochus is clever. He offers incentives first—wealth, status, honor. He makes apostasy seem reasonable, even advantageous. But when the incentives fail, he turns to force. The pattern is clear: Assimilate willingly, or be forced. But underneath both is the same demand: Deny your God.',
        },
        {
          kind: 'christ',
          id: 'mac4-persecution-christ',
          title: 'Christ Connection — The Pressure to Deny',
          html:
            'Jesus warned His disciples: "Blessed are ye when men shall revile you, and persecute you, and shall say all manner of evil against you falsely, for my sake… Fear not them that kill the body, but are not able to kill the soul: but rather fear him which is able to destroy both soul and body in hell" (Matt 5:11, 10:28). In every age, there is an Antiochus—someone who demands that you worship what he worships, obey what he commands, or suffer the consequences. But the promise of Christ is that the power to kill the body is not the ultimate power. The one who holds your soul is God. The martyrs in the chapters that follow understand this. They have read this promise. They are about to live it out.',
        },
        {
          kind: 'carry',
          html:
            'You live in an age when the pressure to conform, to assimilate, to worship the gods of the culture—success, comfort, approval—is constant. The pressure is not always violent, but it is always present. Which nomos will you follow? What will you refuse to do, even if it costs you?',
        },
        {
          kind: 'reflection',
          id: 'mac4-final',
          prompt: 'Where do you feel pressure to "Hellenize"—to abandon your faith or values to fit in? What would happen if you refused?',
        },
      ],
    },
  ],

  resources: [

  ],

  bottomShare: {
    label: 'Share 4 Maccabees 4',
    quote:
      'Apollonius entered the temple to seize its treasure and was struck down by an angel. The high priest Onias prayed, and he was healed. But years later, Antiochus IV rose to power and outlawed the Law itself. The stage was set for the righteous to choose between apostasy and death.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 4 · Study Guide',
  },
};
