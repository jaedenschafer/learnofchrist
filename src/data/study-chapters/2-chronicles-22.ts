import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 2 Chronicles 22 — Ahaziah Reigns Briefly; Athaliah Seizes Power
 *
 * When King Jehoram of Judah dies, his youngest son Ahaziah is made king —
 * not because he is the eldest, but because his older brothers were slain by
 * raiders from Arabia. Ahaziah, at age 42, reigns for only one year. His mother,
 * Athaliah (daughter of the infamous Ahab), becomes his counsel, and he walks
 * in the ways of Ahab's house — evil. His brief reign ends in violent death at
 * the hand of Jehu, whom God appointed to destroy Ahab's dynasty. But then comes
 * a moment of breathtaking mercy: Athaliah, seeing her son is dead, rises to
 * seize the throne and destroys "all the seed royal." Yet one child escapes —
 * Joash, hidden by his aunt Jehoshabeath and her priest husband Jehoiada. In
 * the darkness of Athaliah's usurpation, the Davidic line is preserved. Christ
 * the "hidden King" waits in the temple while an imposter reigns.
 */
export const CHRONICLES_2_22: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 22,

  estimatedMinutes: { beginner: 5, intermediate: 11, deep: 16 },
  intros: [
    'The throne of Judah is in crisis. King Jehoram has died, and his sons have been slain by Arabians — all but the youngest. The choice falls to Ahaziah, a young man surrounded by the wrong counsel: his mother Athaliah, daughter of Ahab, whose very name carries the stench of apostasy. She becomes his counselor "to do wickedly," and under her influence, Ahaziah walks in the ways of Israel&apos;s most wicked dynasty. His reign lasts only one year. It is cut short by the sword of Jehu, whom the Lord has appointed to purge Ahab&apos;s house from the earth. But the story does not end in darkness.',
    'When Athaliah sees that her son is dead, she does not mourn — she rises and destroys all the seed royal of Judah. A woman grasping for power, she will erase every heir to make her claim absolute. Yet she does not count on a quiet woman, the daughter of a king and the wife of a priest. Jehoshabeath takes one small child, Joash — the grandson of Ahaziah — and hides him in the temple of the Lord for six years while Athaliah reigns. In the hiding place of God&apos;s house, the promise is preserved. The covenant seed is not extinguished. As in the days of the Fall, when the serpent sought to destroy the woman&apos;s offspring, the seed endures in secret, waiting for its appointed hour.',
  ],

  sections: [
    /* ─── 2 Chronicles 22:1–4 — Ahaziah Made King, Walking in Ahab's Way ──── */
    {
      ref: '2 Chronicles 22:1–4',
      title: 'The Youngest Son Enthroned — Counseled by Wickedness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(1, 'And the inhabitants of Jerusalem made Ahaziah his youngest son king in his stead: for the band of men that came with the Arabians to the camp had slain all the eldest. Therefore Ahaziah the son of Jehoram king of Judah reigned.'),
            plain(2, 'Forty and two years old was Ahaziah when he began to reign, and he reigned one year in Jerusalem. His mother&apos;s name also was Athaliah the daughter of Omri.'),
            {
              number: 3,
              spans: [
                t('He also '),
                hg('walked in the ways of the house of Ahab', 'c22-ahab-ways'),
                t(': for his mother was his counsellor to '),
                hg('do wickedly', 'c22-do-wickedly'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Wherefore he did evil in the sight of the Lord like the house of Ahab: for they were his counsellours after the death of his father to his destruction.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c22-youngest-son',
          html:
            'The normal order of succession is broken. The band of Arabians has slain the elder sons, leaving only the youngest to inherit. Yet Ahaziah is not a child — he is 42 years old. The text does not say he is wise or fit for the throne. It says he is the youngest who remains. The people have made a choice from desperation, not discernment. The office of king is now held by a man whose counsel is not from priests or prophets, but from his mother, Athaliah — a woman who bears the name and blood of Ahab. [res:iaa-judah-monarchy]',
        },
        {
          kind: 'hebrew',
          id: 'c22-athalyah',
          title: 'Athaliah — עֲתַלְיָה — "Yah Has Afflicted/Restrained"',
          script: 'עֲתַלְיָה',
          translit: '<strong>Athalyah</strong> · from &apos;athal (bind, constrain) and Yah',
          description:
            'Though her name contains the divine name Yah, Athaliah&apos;s life is a denial of what her name promises. She is the instrument not of restraint but of chaos, not of God&apos;s will but of her own ambition. Her name becomes a warning: even those who bear the mark of God&apos;s name can choose to act against His purposes. She will bind and constrain — but not as God does. She will seize, murder, and nearly destroy the line from which the Messiah must come.',
        },
        {
          kind: 'commentary',
          id: 'c22-ahab-ways',
          html:
            'Ahab was the king of Israel who "did evil in the sight of the Lord above all that were before him" (1 Kings 16:30). He married Jezebel, promoted Baal worship, and hunted the prophets of God. To walk in the ways of Ahab&apos;s house is to choose idolatry, to silence the voice of God, to serve other powers. Ahaziah, though born a king of Judah and heir to the covenant with David, now walks in the steps of apostasy.',
        },
        {
          kind: 'commentary',
          id: 'c22-do-wickedly',
          html:
            'Athaliah is not a passive influence — she is an active counselor &quot;to do wickedly.&quot; She does not simply allow her son to choose evil; she directs him toward it. The text emphasizes the deliberateness: she makes it her work to ensure that Ahaziah turns away from the Lord. And the result is swift judgment: after his death, "the destruction of Ahaziah was of God by coming to Joram"&apos; — his alliance with the house of Ahab brings him under the judgment appointed for that house.',
        },
        {
          kind: 'carry',
          html:
            'We are shaped by those closest to us. Ahaziah had the crown, the throne, access to the priests of God — yet his mother&apos;s counsel overrode all of that. She made it her purpose to turn him toward evil. In your own life, whose voice do you listen to? Do you seek counsel from those who will strengthen your faith, or do you surround yourself with voices that pull you away from God?',
        },
        {
          kind: 'reflection',
          id: 'ahaziah-counsel',
          prompt: 'Athaliah counseled her son "to do wickedly." Who in your life has influence over your choices? Are those voices pulling you toward God or away from Him?',
        },
      ],
    },

    /* ─── 2 Chronicles 22:5–9 — The Destruction of Ahaziah Was of God ───── */
    {
      ref: '2 Chronicles 22:5–9',
      title: 'The Destruction of Ahaziah Was of God — Meeting Jehu',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(5, 'He walked also after their counsel, and went with Jehoram the son of Ahab king of Israel to war against Hazael king of Syria at Ramoth-gilead: and the Syrians smote Joram.'),
            plain(6, 'And he returned to be healed in Jezreel because of the wounds which were given him at Ramoth, when he fought with Hazael king of Syria. And Azariah the son of Jehoram king of Judah went down to see Jehoram the son of Ahab at Jezreel, because he was sick.'),
            {
              number: 7,
              spans: [
                t('And the '),
                hp('destruction of Ahaziah was of God', 'c22-destruction-god'),
                t(' by coming to Joram: for when he was come, he went out with Jehoram against Jehu the son of Nimshi, whom the Lord had anointed to '),
                hp('cut off the house of Ahab', 'c22-cut-off-ahab'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And it came to pass, that, when Jehu was executing judgment upon the house of Ahab, he found the princes of Judah, and the sons of the brethren of Ahaziah, that ministered to Ahaziah, and slew them.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And he sought Ahaziah: and they caught him, (for he was hid in Samaria,) and brought him to Jehu: and when they had slain him, they buried him: Because, said they, he is the son of Jehoshaphat, who sought the Lord with all his heart. So the house of Ahaziah had no power to keep still the kingdom.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c22-destruction-god',
          html:
            'The text explicitly tells us: "the destruction of Ahaziah was of God." This is not an accident, not a tragedy that befell him by chance. It is the working of God&apos;s justice. Ahaziah, by his choice to align himself with the house of Ahab, has placed himself under the judgment that God has appointed for that dynasty. When he goes to meet with Jehoram at Jezreel, he walks into the very place where Jehu executes God&apos;s judgment. The king&apos;s death is not separate from God&apos;s will — it is the enactment of God&apos;s will.',
        },
        {
          kind: 'commentary',
          id: 'c22-cut-off-ahab',
          html:
            'Jehu is the instrument God has chosen to "cut off the house of Ahab." This phrase refers to the judgment prophesied by Elijah against Ahab and Jezebel (1 Kings 21:21–24). Ahaziah, by walking in the ways of Ahab&apos;s house, has linked his own fate to theirs. He dies not as a victim of random violence, but as one caught in the sweep of God&apos;s judgment against idolatry and apostasy.',
        },
        {
          kind: 'hebrew',
          id: 'c22-zera',
          title: 'Zera — זֶרַע — "Seed"',
          script: 'זֶרַע',
          translit: '<strong>Zera</strong> · offspring; lineage; the covenant seed',
          description:
            'Throughout Scripture, the "seed" refers not just to biological offspring, but to the covenant line through which God&apos;s purposes unfold. The seed of the woman (Genesis 3:15) will crush the serpent&apos;s head. The seed of David will sit upon his throne forever. And now, when Athaliah seeks to destroy all the seed royal, she is attacking not merely a dynasty, but God&apos;s appointed instrument for the coming of Christ.',
        },
        {
          kind: 'commentary',
          id: 'c22-jehoshaphat-memory',
          html:
            'A remarkable detail: when Jehu&apos;s men find and slay Ahaziah, they spare him from disrespect because "he is the son of Jehoshaphat, who sought the Lord with all his heart." Jehoshaphat, Ahaziah&apos;s grandfather, was a faithful king. Though Ahaziah himself has turned away, the memory of his grandfather&apos;s faithfulness earns him an honorable burial. It is a small mercy in the midst of judgment — yet it also points forward. Faithfulness in one generation does not save the unfaithful next, but the covenant seed runs deeper than one man&apos;s apostasy.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age that claims to reject moral judgment. Yet the Scripture speaks clearly: there is a difference between the way of life and the way of death. Ahaziah chose to walk in the ways of Ahab, and his destruction followed. But his burial honors his grandfather&apos;s faithfulness. God judges the wicked, yet His mercy extends to those who remember the faithful and preserve their memory. In your own choices, are you walking toward life or toward the way that leads to destruction?',
        },
        {
          kind: 'reflection',
          id: 'destruction-god',
          prompt: 'How do you understand God&apos;s judgment in the world? Do you see consequences as separate from God&apos;s will, or as part of how God works in history?',
        },
      ],
    },

    /* ─── 2 Chronicles 22:10 — Athaliah Destroys All the Seed Royal ───────── */
    {
      ref: '2 Chronicles 22:10',
      title: 'Athaliah Arises and Destroys All the Seed Royal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 10,
              spans: [
                t('But when Athaliah the mother of Ahaziah saw that her son was dead, she '),
                hp('arose and destroyed all the seed royal', 'c22-destroy-seed'),
                t(' of the house of Judah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c22-destroy-seed',
          html:
            'One verse contains a cosmic horror: Athaliah sees her son is dead, and she resolves to murder every member of the royal house. This is not grief. This is the raw ambition of a woman who will not share power, who will erase the entire line of David to secure her throne. She murders princes, heirs, the young and the old — everyone who bears the blood of kings. From a human perspective, this moment might seem the end of everything. The line of David, from which Christ would come, appears to be extinguished. The covenant is broken. The promise dies. But God does not slumber.',
        },
        {
          kind: 'commentary',
          id: 'c22-athaliah-serpent',
          html:
            'The image recalls Genesis 3:15: "the seed of the woman shall bruise thy head." Satan&apos;s strategy against the promise of God has always been to destroy the seed. When he could not prevent the birth of the Messiah through history, he seeks to kill Him — as Pharaoh slew the Hebrew male children, as Herod sought to murder the young Jesus. And here, Athaliah becomes the instrument of that age-old strategy: to murder the seed, to erase the line, to ensure that God&apos;s promise dies with the last heir. Yet the seed is preserved.',
        },
        {
          kind: 'christ',
          id: 'c22-seed-preserved',
          title: 'Christ Connection — The Seed Preserved Through Darkness',
          html:
            'When Pharaoh commanded that all Hebrew male children be drowned, Moses was hidden in a basket by his mother. When Herod sought to kill the young Jesus, the child was hidden in Egypt. And here, when Athaliah seeks to destroy all the seed royal, one child — Joash — is hidden in the temple of the Lord. The pattern repeats across Scripture: the enemy seeks to destroy the seed of the woman, but God preserves it in secret, in the darkness, in the place of His dwelling. The child hidden in the temple is a type of Christ Himself, the True King hidden from the world&apos;s grasp, waiting in the sanctuary of God, guarded by the faithful, until the time of His revelation. Revelation 12:4 echoes this same drama: "the dragon stood before the woman which was ready to be delivered, for to devour her child as soon as it was born." Yet the child escapes, and the woman flees into the wilderness, where she is nourished. The seed cannot be destroyed, because it is God&apos;s seed.',
        },
        {
          kind: 'carry',
          html:
            'We live in dark times, and they will get darker still before Christ returns. We see falsehood spread, faithfulness mocked, the sacred defiled by those who seize power. But do not lose sight of what is preserved in the darkness. God&apos;s people are hidden in His house. The covenant endures. The seed cannot be destroyed. Even when the world seems to be winning, when evil sits on the throne and murder goes unpunished, the purpose of God is not thwarted. It is preserved, like a child in a bedchamber of the temple, guarded by the faithful, waiting.',
        },
        {
          kind: 'reflection',
          id: 'seed-destroyed',
          prompt: 'When you see evil triumph in the world, how do you respond? Do you despair that God&apos;s purposes are being defeated? What evidence of God&apos;s faithfulness holds you steady in dark times?',
        },
      ],
    },

    /* ─── 2 Chronicles 22:11–12 — Jehoshabeath Hides Joash in the Temple ──── */
    {
      ref: '2 Chronicles 22:11–12',
      title: 'The Rescue: Jehoshabeath Hides the King in God&apos;s House',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 11,
              spans: [
                t('But '),
                hy('Jehoshabeath', 'c22-jehoshabeath'),
                t(', the daughter of the king, took '),
                t('Joash'),
                t(' the son of Ahaziah, and stole him from among the king&apos;s sons that were slain, and put him and his nurse in a '),
                hg('bedchamber', 'c22-bedchamber'),
                t('. So Jehoshabeath, the daughter of king Jehoram, the wife of Jehoiada the priest, (for she was the sister of Ahaziah,) hid him from Athaliah, so that she slew him not.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And he was with them hid in the house of God six years: and Athaliah reigned over the land.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c22-jehoshabeath',
          title: 'Jehoshabeath — יְהוֹשַׁבְעַת — "Yah Has Sworn"',
          script: 'יְהוֹשַׁבְעַת',
          translit: '<strong>Jehoshabeath</strong> · from Yah (the Lord) and shaba (to swear)',
          description:
            'Her name means "Yah has sworn" — and she becomes the living embodiment of God&apos;s sworn covenant. When she hides Joash, she is not acting on her own authority, but on the authority of the oath God has sworn to David: that his seed shall endure forever. She is the instrument through which the oath is kept. By hiding the child in the house of God, she places him under the protection of the covenant itself.',
        },
        {
          kind: 'hebrew',
          id: 'c22-yoash',
          title: 'Joash — יוֹאָשׁ — "Given by Yah"',
          script: 'יוֹאָשׁ',
          translit: '<strong>Yoash</strong> · from Yah (the Lord) and asah (to give/make)',
          description:
            'The name speaks hope into the darkness: Joash means "given by Yah." He is not a child who should exist, not an accident of genetics, but a gift. The Lord has given this child. He is given for a purpose — to restore the kingdom, to repair the temple, to stand as a sign that God&apos;s covenant cannot be broken.',
        },
        {
          kind: 'commentary',
          id: 'c22-bedchamber',
          html:
            'The detail is tender and devastating: she puts the child "and his nurse in a bedchamber." Not in a palace, not on a throne, but in a small room in the temple. Here is the rightful king of Judah, hiding in a chamber, dependent on a nurse, on the faithfulness of his aunt and her husband. The son of David is a fugitive in the house of God. Yet he is safe. The temple, the place of God&apos;s presence, becomes his sanctuary. While Athaliah sits on the throne, the true king sleeps in darkness, protected by the covenant.',
        },
        {
          kind: 'commentary',
          id: 'c22-six-years',
          html:
            'For six years, Joash hides. Six years is both an eternity to a child and a moment in the sweep of God&apos;s plan. During these six years, Athaliah reigns. She has the crown, the power, the apparent victory. The world sees her triumph. But in a hidden room, protected by the faithful priest and his wife, the true heir waits. This is the pattern of faith: to believe that God&apos;s promise is secure even when the world cannot see it, to hide what is precious in the darkness, to wait for the appointed time.',
        },
        {
          kind: 'commentary',
          id: 'c22-jehoiada',
          html:
            'Jehoiada the priest is the silent strength behind this act. He does not lead a rebellion. He does not raise an army. He simply, faithfully, provides shelter in the house of God to the true king. His wife, Jehoshabeath, acts with decisive courage — she "stole" the child from among the dead. But both of them, together, embody the quiet faithfulness that preserves the covenant. They do not see the restoration in their lifetime (well, they do, but it will take years). They simply do the next thing that love and courage demand.',
        },
        {
          kind: 'carry',
          html:
            'There is a kind of faithfulness that does not require victory in your lifetime. Jehoshabeath and Jehoiada did not see Joash crowned — well, not for six years, and even then, he was a child. They simply protected what was precious, held fast to what they knew to be true, and trusted that God&apos;s purposes would unfold in God&apos;s time. In a world that demands instant gratification and visible success, are you willing to be faithful in the darkness? Are you willing to shelter what is precious, knowing that the full fruit of your faithfulness may not be seen by your eyes?',
        },
        {
          kind: 'reflection',
          id: 'hidden-faithfulness',
          prompt: 'Jehoshabeath and Jehoiada hid Joash in the temple for six years — a quiet act of faithfulness with no visible reward. What faithful action are you called to do even if no one sees it or praises you for it?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 22',
    quote:
      'In the moment when evil seemed to triumph and the seed of David appeared to be destroyed, one faithful woman hid the true heir in the house of God. The covenant cannot be broken. The seed is preserved in darkness, waiting for the appointed hour.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 22 · Study Guide',
  },

  resources: [
    {
      id: 'iaa-judah-monarchy',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Judah in the Monarchy Period',
      url: 'https://www.antiquities.org.il/en/',
      description: 'IAA database of Iron Age Judahite sites, inscriptions, and settlement patterns.',
    },
  ],

  hasHebrew: true,
};
