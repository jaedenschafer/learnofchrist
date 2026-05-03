import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 13 — Abijah's Reliance on God and Victory Over Jeroboam
 *
 * In the 18th year of Jeroboam's reign, Abijah becomes king of Judah. The
 * two kingdoms face off in battle — Judah with 400,000 warriors against
 * Jeroboam's 800,000. Yet before the fighting begins, Abijah stands on a
 * mountain and speaks a sermon that becomes the text's great sermon on
 * covenant, idolatry, and reliance on God. "God himself is with us for our
 * captain," he cries. When the battle turns against Judah through ambush,
 * the men cry to the Lord. The priests sound the trumpets. And victory
 * comes — not because Judah has the larger army, but because they relied upon
 * the Lord God of their fathers. This is the core lesson of 2 Chronicles: the
 * kingdom that leans on God stands. The kingdom that turns away falls.
 */
export const CHRONICLES_2_13: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 13,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 13 },
  intros: [
    'The northern kingdom of Israel and the southern kingdom of Judah have been divided for generations. Jeroboam, the first king of the north, set up golden calves at Bethel and Dan, drawing the people away from the temple in Jerusalem and from the Levitical priesthood. His rebellion against the Davidic covenant is spiritual as much as political.',
    'Now, in the 18th year of Jeroboam&apos;s reign, Abijah becomes king of Judah. The two nations face off in battle — and in this moment, 2 Chronicles gives us something 1 Kings does not: Abijah&apos;s speech. Before the warriors clash, the young king of Judah stands on a mountain and preaches. He calls the northern kingdom back to covenant, warns them against idolatry, and reminds them all that victory depends not on the size of an army but on the presence of God. "God himself is with us for our captain," Abijah proclaims. What follows is a battle where a smaller force defeats a larger one, not through military superiority, but through the cry of men who trusted the Lord. This chapter shows us what covenant reliance looks like in a moment of mortal danger.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 13',
    quote:
      'Abijah cries out on the mountain: "God himself is with us for our captain, and his priests with sounding trumpets to cry alarm against you." When Judah turns to God in their moment of need, they are delivered. Victory belongs to those who rely on the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 13 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 13:1–3 — Abijah Reigns; War Begins ────────────────── */
    {
      ref: '2 Chronicles 13:1–3',
      title: 'Abijah Reigns Over Judah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'Now in the eighteenth year of king Jeroboam began Abijah to reign over Judah.'),
            plain(2, 'He reigned three years in Jerusalem. His mother&apos;s name also was Michaiah the daughter of Uriel of Gibeah. And there was war between Abijah and Jeroboam.'),
            plain(3, 'And Abijah set the battle in array with an army of valiant men of war, even four hundred thousand chosen men: Jeroboam also set the battle in array against him with eight hundred thousand chosen men, being mighty men of valour.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The stage is set with stark numbers. Jeroboam fields twice as many soldiers as Abijah — 800,000 against 400,000. This is not a fair fight. The math says Judah should lose. But 2 Chronicles is about to tell a different kind of story: one where the victory belongs not to the larger army, but to the nation that cries out to God.',
        },
        {
          kind: 'carry',
          html:
            'The odds against us can feel overwhelming. Sometimes the "enemy" — our circumstances, our fears, our rivals — appears twice as large as we are. The promise of Scripture is not that the odds will be balanced, but that God Himself can be with us. The size of our problem is never larger than the power of the God we call upon.',
        },
        {
          kind: 'reflection',
          id: 'armies-gather',
          prompt: 'When have you faced a situation where the odds seemed impossible? What made you turn toward God in that moment, or what kept you from doing so?',
        },
      ],
    },

    /* ─── 2 Chronicles 13:4–12 — Abijah's Sermon on Covenant and God ────── */
    {
      ref: '2 Chronicles 13:4–12',
      title: 'The Sermon: "God Himself Is With Us"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 4,
              spans: [
                t('And Abijah stood up upon the mount Zemaraim, which is in mount Ephraim, and said, Hear me, thou Jeroboam, and all Israel;'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Ought ye not to know that the '),
                hy('Lord God of Israel gave the kingdom', 'covenant-gave'),
                t(' over Israel to David for ever, even to him and to his sons by a '),
                hy('covenant of salt', 'covenant-salt'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'covenant-gave',
          html:
            'Abijah opens by invoking covenant history. The Lord God gave the kingdom to David — not temporarily, not conditionally on performance, but "for ever, even to him and to his sons." This is the foundation of Abijah&apos;s claim and his confidence. He stands on Davidic covenant ground, not on personal merit or military might. The kingdom is not his because he earned it; it is his because God promised it to David&apos;s line.',
        },
        {
          kind: 'hebrew',
          id: 'berit-melach',
          title: 'Berit Melach — "Covenant of Salt"',
          script: 'בְּרִית מֶ֫לַח',
          translit: '<strong>Berit melach</strong> · covenant of salt; perpetual, unbreakable covenant',
          description:
            'Salt was a preservative in the ancient world — it prevented decay, lasted indefinitely. A covenant of salt is one that will not rot, will not be broken, will endure forever. When God made a covenant with David "of salt," He meant it to be eternal, unchanging, permanent. Abijah leans on this permanence.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 6,
              spans: [
                t('Yet Jeroboam the son of Nebat, the servant of Solomon the son of David, is risen up, and hath rebelled against his lord.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And there are gathered unto him '),
                hg('vain men', 'vain-men'),
                t(', the children of Belial, and have strengthened themselves against Rehoboam the son of Solomon, when Rehoboam was young and tenderhearted, and could not withstand them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'vain-men',
          html:
            'Abijah names the spiritual problem: Jeroboam has gathered "vain men, the children of Belial" — men without substance, without sense, without God. This is not merely a political disagreement. It is a rebellion against the Lord and against the covenant. The implication is clear: strength of character, reliance on God, and obedience to covenant are what matter. Numbers and muscle cannot replace them.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 8,
              spans: [
                t('And now ye think to withstand the kingdom of the Lord in the hand of the sons of David; and ye be a great multitude, and there are with you golden calves, which Jeroboam made you for gods.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Have ye not cast out the priests of the Lord, the sons of Aaron, and the Levites, and have made you priests after the manner of the nations of other lands? so that whosoever cometh to consecrate himself with a young bullock and seven rams, the same may be a priest of them that are no gods.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'golden-calves',
          html:
            'Abijah condemns the idolatry that Jeroboam set up — the golden calves — but notice he does not merely attack them as inferior objects. He calls them "gods" in the sense that the people treat them as divine, even as he names them clearly as "no gods." The issue is spiritual infection: Israel has abandoned the true God, rejected the true priesthood, and embraced the religious forms of "the nations of other lands." They have become like the pagans around them instead of remaining the covenant people of God.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 10,
              spans: [
                t('But as for us, the Lord is our God, and we have not forsaken him; and the priests, which minister unto the Lord, are the sons of Aaron, and the Levites wait upon their business:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And they burn unto the Lord every morning and every evening burnt sacrifices and sweet incense: the shewbread also set they in order upon the pure table; and the candlestick of gold with the lamps thereof, to burn every evening: for we keep the charge of the Lord our God; but ye have forsaken him.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And, behold, '),
                hp('God himself is with us for our captain', 'god-captain'),
                t(', and his priests with sounding trumpets to cry alarm against you. O children of Israel, fight ye not against the Lord God of your fathers; for ye shall not prosper.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'god-captain',
          html:
            'Here is the turning point of Abijah&apos;s sermon, and the theological heart of the chapter: "God himself is with us for our captain." Not "we have more courage" or "our strategy is superior" or "our soldiers are braver." God Himself. The word translated "captain" speaks to leadership, command, direction — God is leading Judah into this battle. And His priests, sounding their trumpets, cry an alarm. The priests call the people to remember God. In Abijah&apos;s vision, the priesthood is not a ceremonial relic; it is the voice summoning Israel back to God in the moment of greatest danger.',
        },
        {
          kind: 'carry',
          html:
            'Abijah places the true divide between the two armies not in size, equipment, or strategy, but in covenant loyalty. Judah has the true priesthood, the true God, the true worship. Abijah speaks as if these things are the real armor — not body armor or shields, but faithfulness to God&apos;s command. His final cry is a warning: do not fight against the God of your fathers. You will not prosper.',
        },
        {
          kind: 'reflection',
          id: 'sermon-covenant',
          prompt: 'Abijah says, "God himself is with us for our captain." What would it mean for God to be the captain of your life? Where are you trying to win a battle without calling on His leadership?',
        },
      ],
    },

    /* ─── 2 Chronicles 13:13–18 — Ambush and the Cry to the Lord ──────────── */
    {
      ref: '2 Chronicles 13:13–18',
      title: 'The Battle Turns; Judah Cries to the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 13,
              spans: [
                t('But Jeroboam caused an ambushment to come about behind them: so they were before Judah, and the ambushment was behind them.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('When Judah looked back, behold, the battle was before and behind: and they '),
                hg('cried unto the Lord', 'cried-lord'),
                t(', and the priests sounded with the trumpets.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cried-lord',
          html:
            'The battle is a trap. Jeroboam&apos;s forces surround Judah — the enemy is before them and behind them. Trapped. Outnumbered. And in that moment of mortal terror, "they cried unto the Lord." This is not a polite prayer of request. This is a desperate cry — the sound of men who have no other option, no other hope. And simultaneously, "the priests sounded with the trumpets." The voice of God&apos;s representatives, the institutional reminder of covenant, sounds at the moment when individual faith becomes the only thing that stands between the people and destruction. The priests and the people cry together.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 15,
              spans: [
                t('Then the men of Judah gave a shout: and as the men of Judah shouted, it came to pass, that God smote Jeroboam and all Israel before Abijah and Judah.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the children of Israel fled before Judah: and God delivered them into their hand.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And Abijah and his people slew them with a great slaughter: there fell down slain of Israel five hundred thousand chosen men.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Thus the children of Israel were brought under at that time, and the children of Judah prevailed, '),
                hp('because they relied upon the Lord God of their fathers', 'relied-lord-fathers'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'relied-lord-fathers',
          html:
            'The battle is decided. Judah cries out. God strikes the northern army. Half a million soldiers fall — a staggering number. The smaller force defeats the larger, not through superior tactics or courage, but through the intervention of God. And the text names the reason with utter clarity: "because they relied upon the Lord God of their fathers." It is not Abijah&apos;s eloquence that wins. It is not Judah&apos;s bravery. It is reliance. Covenant reliance. The people turned to God, and God fought for them. This is the message of 2 Chronicles: the nation that leans on God stands.',
        },
        {
          kind: 'hebrew',
          id: 'shaan',
          title: 'Sha&apos;an — "Lean" or "Rely"',
          script: 'שָׁעַן',
          translit: '<strong>Sha&apos;an</strong> · lean upon; rely upon; trust in',
          description:
            'To sha&apos;an is to lean one&apos;s entire weight upon something, to trust it to hold you up. It&apos;s a physical word with a spiritual meaning: you cannot lean on God partway. When you rely, you put your full weight, your full trust, your whole life into God&apos;s hands. That is what Judah did in the moment of danger. That is what brings victory.',
        },
        {
          kind: 'carry',
          html:
            'Abijah&apos;s promise becomes Judah&apos;s proof. In the moment when Judah was trapped between enemies, when escape was impossible, when survival seemed impossible — in that moment, they turned to God. And God did not fail them. They prevailed not because they were stronger or more skilled, but because they relied. The lesson cuts across history and time: when you put your whole weight on God, He holds you. When you cry to Him in your moment of genuine need, He answers.',
        },
        {
          kind: 'reflection',
          id: 'battle-cry',
          prompt: 'When have you been in a situation where you had no choice but to rely on God? What happened when you did?',
        },
      ],
    },

    /* ─── 2 Chronicles 13:19–22 — Abijah Pursues; He Waxes Mighty ────────── */
    {
      ref: '2 Chronicles 13:19–22',
      title: 'Abijah Pursues; Covenant Victory Secured',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(19, 'And Abijah pursued after Jeroboam, and took cities from him, Bethel with the towns thereof, and Jeshanah with the towns thereof, and Ephrain with the towns thereof.'),
            {
              number: 20,
              spans: [
                t('Neither did Jeroboam recover strength again in the days of Abijah: and the '),
                hg('Lord struck him', 'lord-struck'),
                t('; and he died.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('But Abijah waxed mighty, and married fourteen wives, and begat twenty and two sons, and sixteen daughters.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the rest of the acts of Abijah, and his ways, and his sayings, are written in the story of the prophet Iddo.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lord-struck',
          html:
            'Jeroboam does not recover his strength. The Lord struck him, and he died. The commentary is stark and brief: God struck the man who rebelled against covenant, who set up idols, who rejected the priesthood, who sought to thwart the Davidic promise. The judgment is complete. Abijah, by contrast, grows mighty. He takes the cities Jeroboam had controlled. His dynasty flourishes — he marries fourteen wives and fathers 22 sons and 16 daughters, a sign of God&apos;s blessing on his house.',
        },
        {
          kind: 'christ',
          id: 'christ-captain',
          title: 'Christ Connection — The Captain of Our Salvation',
          html:
            'Abijah proclaims: "God himself is with us for our captain." The Hebrew word for captain (rosh) speaks to headship, leadership, direction. In the New Testament, Christ is called the "Captain of our salvation" (Hebrews 2:10) — the one who leads us, who fights for us, who has already secured the ultimate victory. When we are trapped between enemies — fear and hope, sin and grace, death and resurrection — Christ does what God did for Judah at Zemaraim. He stands as our Captain. He calls us to cry out. And He delivers us.',
        },
        {
          kind: 'carry',
          html:
            'The victory at Zemaraim teaches us something about the price and power of covenant loyalty. Abijah did not ask his army to win by their own strength. He asked them to remember God, to cry to Him when they were afraid, to trust the priests who called them back to worship. When we are most afraid, most trapped, most overwhelmed, the question is not whether we have enough power. The question is whether we will turn to God. Will we cry out? Will we listen when the priests — the voices of faith in our lives — call us to remember Him? Will we rely?',
        },
        {
          kind: 'reflection',
          id: 'abijah-waxes-mighty',
          prompt: 'Abijah&apos;s reliance on God brought him not only military victory, but flourishing — a strong dynasty, increase, blessing. What would flourishing look like in your life if you relied on God more completely?',
        },
      ],
    },
  ],
};
