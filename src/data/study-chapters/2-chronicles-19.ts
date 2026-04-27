import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 19 — Jehoshaphat Rebuked and Reformed
 *
 * Jehoshaphat returns from a disastrous alliance with the wicked king Ahab,
 * only to be met by a prophet's rebuke: "Shouldest thou help the ungodly?" Yet
 * the prophet also finds "good things" in him — his heart to seek God. Rather
 * than resist the word, Jehoshaphat repents and launches a nationwide reformation
 * of the judicial system. He appoints judges throughout the land with strict
 * charges: they judge not for man, but for the Lord. He establishes a central
 * court in Jerusalem to hear difficult cases. At the head stands the chief
 * priest Amariah and the governor Zebadiah. The chapter closes with a command
 * to courage: "The Lord shall be with the good." In this chapter, a king learns
 * that the measure of repentance is not remorse alone, but the willingness to
 * change the systems that failed.
 */
export const CHRONICLES_2_19: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 19,

  intros: [
    'The previous chapter ended with disaster. Jehoshaphat, king of Judah, had made a foolish alliance with Ahab, the wicked king of Israel, and had fought alongside him in battle. The result was catastrophe — Ahab was killed, and Jehoshaphat himself barely escaped with his life. Now he returns to Jerusalem in peace, his nation shaken, his judgment questioned. And immediately, a prophet meets him with a word from the Lord.',
    'But this word is neither condemnation nor comfort. It is both rebuke and affirmation. "Shouldest thou help the ungodly, and love them that hate the Lord? therefore is wrath upon thee from before the Lord." The king has made a terrible mistake. And yet: "Nevertheless there are good things found in thee, in that thou hast taken away the groves out of the land, and hast prepared thine heart to seek God." God sees both the failure and the faithfulness. And Jehoshaphat, instead of defending himself, takes the word to heart. He does not imprison the prophet, as his ancestor Asa had done. Instead, he begins a reformation — not of his own heart alone, but of the entire judicial system of his kingdom. The response to rebuke is systemic repentance.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 19',
    quote:
      'Jehoshaphat set judges throughout all the fenced cities to judge not for man, but for the Lord. He established a court of righteousness where the fear of the Lord, faithfulness, and a perfect heart were the measure of every judgment.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 19 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 19:1–3 — Jehu's Rebuke: Good Things Found ─────────── */
    {
      ref: '2 Chronicles 19:1–3',
      title: "Jehu&apos;s Rebuke — Good Things Found",
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              1,
              'And Jehoshaphat the king of Judah returned to his house in peace to Jerusalem.'
            ),
            {
              number: 2,
              spans: [
                t('And Jehu the son of Hanani the seer went out to meet him: and said to king Jehoshaphat, '),
                hg('Shouldest thou help the ungodly, and love them that hate the Lord', '19-help-ungodly'),
                t('? therefore is wrath upon thee from before the Lord.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Nevertheless there are '),
                hp('good things found in thee', '19-good-things'),
                t(', in that thou hast taken away the groves out of the land, and hast prepared thine heart to seek God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '19-help-ungodly',
          html:
            'The prophet Jehu does not greet the king with ceremony. He meets him with a question that cuts to the heart of his folly: "Shouldest thou help the ungodly?" This is not private counsel; it is a public word from the Lord. Jehoshaphat had allied himself with Ahab, who was condemned in Scripture as one who "did evil in the sight of the Lord above all that were before him" (1 Kings 16:30). To help the ungodly is to incur the wrath of the Lord. The king&apos;s error was not a small misstep; it was a matter of alignment with the enemies of God.',
        },
        {
          kind: 'commentary',
          id: '19-good-things',
          html:
            'Yet Jehu does not speak only rebuke. "Nevertheless there are good things found in thee." God sees the whole person — both the failure and the faithfulness. Jehoshaphat had removed the high places and the groves where false worship had taken place. He had "prepared his heart to seek God." These actions were real. They were good. The rebuke does not erase them; it stands alongside them. God notices both the stumble and the seeking.',
        },
        {
          kind: 'hebrew',
          id: '19-teshuvah',
          title: 'Teshuvah — "Return" or "Repentance"',
          script: 'תְּשׁוּבָה',
          translit: '<strong>Teshuvah</strong> · return; turning back; repentance',
          description:
            'In Hebrew, repentance is teshuvah — literally a "turning back" or "return." It is not mere regret. It is a turning around, a change of direction. Jehoshaphat returns to Jerusalem, and now he must return to the Lord in a deeper way — not only emotionally, but in action and in the ordering of his kingdom. True repentance changes the systems, not only the heart.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world of mixed motives and incomplete righteousness. Jehoshaphat did good things — he removed idols, he sought God — and yet he made a catastrophic error in judgment. The rebuke he received did not deny the good; it illuminated the failure. And his response teaches us: when we are rebuked for a real mistake, the measure of our repentance is not how we feel about it, but what we change because of it.',
        },
        {
          kind: 'reflection',
          id: '19-rebuke',
          prompt:
            'Have you ever been corrected for a significant mistake, only to realize that the correction also recognized something good in you? How did that affect your willingness to listen and to change?',
        },
      ],
    },

    /* ─── 2 Chronicles 19:4 — Jehoshaphat Brings the People Back ─────────── */
    {
      ref: '2 Chronicles 19:4',
      title: 'Bringing the People Back to the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 4,
              spans: [
                t('And Jehoshaphat dwelt at Jerusalem: and he went out again through the people from Beersheba to mount Ephraim, and '),
                hy('brought them back unto the Lord God of their fathers', '19-brought-back'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '19-brought-back',
          html:
            'Instead of hiding in shame, Jehoshaphat does what a reformed king must do: he goes out to the people. From Beersheba in the south to Mount Ephraim in the north — the entire length of his kingdom — he "brought them back unto the Lord God of their fathers." This is not a single proclamation or decree. It is a journey, a visible presence, a king walking among his people and calling them to return to their God. His physical presence is the message: the king himself has turned back, and he is calling you to do the same.',
        },
        {
          kind: 'carry',
          html:
            'Leadership that has stumbled is most powerful when it becomes a living call to repentance. Jehoshaphat did not send deputies. He went himself. He did not preach from the throne. He walked through the land. His very act of turning back became the invitation for others to turn. This is the gospel lived out — a visible, embodied witness to the possibility of return.',
        },
        {
          kind: 'reflection',
          id: '19-bring-back',
          prompt:
            'When you have had to change direction or admit a mistake, how did others respond to your willingness to change? How might your own repentance invite others to repent?',
        },
      ],
    },

    /* ─── 2 Chronicles 19:5–7 — Judges Set in Cities: "Ye Judge for the Lord" */
    {
      ref: '2 Chronicles 19:5–7',
      title: 'Judges Set in Cities — Ye Judge for the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              5,
              'And he set judges in the land throughout all the fenced cities of Judah, city by city:'
            ),
            {
              number: 6,
              spans: [
                t('And said to the judges, '),
                hg('Take heed what ye do', '19-take-heed'),
                t(': for ye '),
                hp('judge not for man, but for the Lord', '19-judge-for-lord'),
                t(', who is with you in the judgment.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Wherefore now let the '),
                hg('fear of the Lord be upon you', '19-fear-lord'),
                t('; take heed and do it: '),
                hg('for there is no iniquity with the Lord our God, nor respect of persons, nor taking of gifts', '19-no-iniquity'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '19-take-heed',
          html:
            'Jehoshaphat establishes a systematic reform. He appoints judges throughout all the fortified cities — a network of judicial authority reaching into every corner of his kingdom. But before they take their positions, he addresses them with a solemn charge. "Take heed what ye do." This is not perfunctory. This is the language of gravitas, of a king laying upon his judges the weight of their responsibility.',
        },
        {
          kind: 'commentary',
          id: '19-judge-for-lord',
          html:
            'The foundational principle: "ye judge not for man, but for the Lord, who is with you in the judgment." The judge is not the servant of a patron, a king, a faction, or a people. The judge is the instrument through which the Lord executes justice. The Lord Himself is present in the judgment. This reframes the entire enterprise of law — it is not a human game of power, but a sacred trust.',
        },
        {
          kind: 'hebrew',
          id: '19-shofet',
          title: 'Shofet — "Judge"',
          script: 'שֹׁפֵט',
          translit: '<strong>Shofet</strong> · judge; one who judges; ruler; deliverer',
          description:
            'The Hebrew shofet encompasses not only the figure who hears cases and renders verdicts, but also a leader or deliverer who brings order and justice to a people. In the book of Judges, the shofet is often a warrior-prophet who arises to deliver Israel from enemies. Here, the shofet is one who "judges for the Lord" — a sacred office in which justice and divine order are woven together.',
        },
        {
          kind: 'commentary',
          id: '19-fear-lord',
          html:
            'Jehoshaphat does not call for fear of the king, but fear of the Lord. This is a bold reframing of authority. The judge&apos;s ultimate accountability is not to the crown but to God. The fear of the Lord is the beginning of justice, because it reminds the judge that he stands before One from whom no truth is hidden, no bias concealed, no bribe accepted.',
        },
        {
          kind: 'commentary',
          id: '19-no-iniquity',
          html:
            'Three characteristics of the Lord&apos;s justice are listed: "there is no iniquity with the Lord our God" — He is perfectly righteous; "nor respect of persons" — He does not favor the powerful over the weak; "nor taking of gifts" — He cannot be bribed. These three principles define what the judges must strive to become: righteous, impartial, and incorruptible. Impossible, of course, but the standard is set by the nature of God Himself.',
        },
        {
          kind: 'carry',
          html:
            'Every system of justice depends on persons, and persons are flawed. Yet Jehoshaphat calls his judges beyond themselves — to judge not for man but for the Lord, to embody the justice of God to the extent that human nature allows. This is the only way a kingdom can endure: by aligning its laws with a justice that is higher than the will of any ruler.',
        },
        {
          kind: 'reflection',
          id: '19-judge-lord',
          prompt:
            'When have you been asked to judge another person — in conversation, in a small decision, in a larger matter? What would it mean to judge "for the Lord" rather than for yourself or others?',
        },
      ],
    },

    /* ─── 2 Chronicles 19:8–11 — The Central Court and Perfect Heart ─────── */
    {
      ref: '2 Chronicles 19:8–11',
      title: 'The Central Court — A Perfect Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              8,
              'Moreover in Jerusalem did Jehoshaphat set of the Levites, and of the priests, and of the chief of the fathers of Israel, for the judgment of the Lord, and for controversies, when they returned to Jerusalem.'
            ),
            {
              number: 9,
              spans: [
                t('And he charged them, saying, Thus shall ye do in the '),
                hg('fear of the Lord, faithfully, and with a perfect heart', '19-perfect-heart'),
                t(':'),
              ],
            },
            {
              number: 10,
              spans: [
                t('What cause soever shall come to you of your brethren that dwell in their cities, between blood and blood, between law and commandment, statutes and judgments, ye shall even '),
                hy('warn them that they trespass not against the Lord', '19-warn-trespass'),
                t(', and so wrath come upon you, and upon your brethren: this do, and ye shall not trespass.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And, behold, '),
                hp('Amariah the chief priest is over you in all matters of the Lord', '19-amariah'),
                t('; and '),
                hp("Zebadiah the son of Ishmael, the ruler of the house of Judah, for all the king&apos;s matters", '19-zebadiah'),
                t(': also the Levites shall be officers before you. Deal courageously, and the Lord shall be with the good.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '19-perfect-heart',
          html:
            'Jehoshaphat now establishes a higher court in Jerusalem itself — a council composed not only of judges but of Levites, priests, and the heads of the families of Israel. This is a court meant to hear the most difficult cases, the controversies that cannot be settled in the cities. And to this body he issues a charge in three parts: "fear of the Lord" — reverence before God; "faithfully" — integrity in procedure; "with a perfect heart" — undivided loyalty to truth and justice. A perfect heart does not mean a sinless heart, but a heart single in purpose, undivided by self-interest or fear.',
        },
        {
          kind: 'hebrew',
          id: '19-lev-shalem',
          title: 'Lev Shalem — "Perfect Heart"',
          script: 'לֵב שָׁלֵם',
          translit: '<strong>Lev shalem</strong> · perfect heart; heart made whole; undivided heart',
          description:
            'The Hebrew phrase "lev shalem" or "lev tamim" (whole heart; perfect heart) appears throughout Scripture as the mark of faithful devotion. It is not moral perfection but wholeness — an undivided allegiance, an integrity that does not split between two loyalties. In matters of justice, a perfect heart means the judge is not divided between the fear of God and the fear of man.',
        },
        {
          kind: 'commentary',
          id: '19-warn-trespass',
          html:
            'The court has a function beyond judgment: it is to warn the people. When cases come — whether they involve bloodshed, law, commandment, statutes, or judgments — the court must "warn them that they trespass not against the Lord." Justice is not only retroactive punishment; it is also preventive instruction. The court teaches the people how to live in alignment with God&apos;s law.',
        },
        {
          kind: 'commentary',
          id: '19-amariah',
          html:
            'Amariah, the chief priest, presides over all matters of the Lord. The high priest is the spiritual authority, the keeper of the Torah, the one who understands the law of God. His presence in the court signals that justice is ultimately a theological matter, not merely a legal one.',
        },
        {
          kind: 'commentary',
          id: '19-zebadiah',
          html:
            'Zebadiah, the ruler of the house of Judah, presides over all the king&apos;s civil matters. The civil and spiritual authorities are distinct — a two-track system where Amariah handles the religious dimension and Zebadiah handles the administrative. Yet they work together. The court is the place where these two spheres intersect and reinforce each other.',
        },
        {
          kind: 'christ',
          id: '19-christ-judge',
          title: 'Christ Connection — The Judge of All the Earth',
          html:
            'Jehoshaphat establishes a court where human judges must answer to a higher Judge — the Lord Himself. But Scripture reveals that this ultimate Judge is Christ. Paul writes: "We shall all stand before the judgment seat of Christ" (Romans 14:10); "there is no respect of persons with God" (Romans 2:11). Christ is the One who judges with perfect knowledge, perfect justice, and perfect impartiality. He cannot be bribed, cannot be swayed by fear or favor. In Him, the laws of Jehoshaphat find their fulfillment and their source. And in the gospel, we discover that the Judge has judged Himself in our place, bearing our guilt, so that His justice can be reconciled with His mercy.',
        },
        {
          kind: 'carry',
          html:
            'A kingdom endures when its systems of law are anchored in a power higher than the will of any ruler. Jehoshaphat understood that true authority is not the authority to command, but the authority to serve justice. The judge who judges "for the Lord" discovers a freedom from the tyranny of power — freedom to speak truth, to demand righteousness, to say "no" to those above him without fear. This is the paradox of justice: it is most powerful when it bows before something greater than itself.',
        },
        {
          kind: 'reflection',
          id: '19-central-court',
          prompt:
            'In what situations do you face pressure to compromise truth or fairness for the sake of protecting someone powerful? What would it look like to judge or decide "for the Lord" instead?',
        },
      ],
    },
  ],
};
