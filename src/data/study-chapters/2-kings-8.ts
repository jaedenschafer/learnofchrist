import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 8 — The Shunammite Returns; Hazael's Anointing; Jehoram & Ahaziah
 *
 * Elisha stretches the hand of God one more time in this chapter. He warns the
 * Shunammite woman of a coming famine, and when it passes, the king himself
 * restores all she has lost. But the chapter's heart lies in Damascus, where
 * Elisha meets Ben-hadad's servant with a terrible prophecy: this man will
 * become king, and he will bring fire and slaughter to Israel. Weeping, Elisha
 * announces what Hazael will do — and Hazael, through murder and ambition,
 * makes it so. Meanwhile in Judah, a king marries into the house of Ahab,
 * nearly destroying the Davidic line. Yet the lamp remains. God does not forsake
 * David his servant. Even as the darkness gathers, the promise holds.
 */
export const KINGS_2_8: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 8,

  estimatedMinutes: { 5: 5, 10: 11, 15: 15 },
  intros: [
    'Elisha the prophet stands at the pivot of Israel and Judah&apos;s fate. In this chapter, we see him in his final great acts: a prophet who calls a widow back from exile and secures her land, a seer who weeps over the evil he must announce, a vessel through whom God shapes the rise of tyrants. And at the chapter&apos;s close, we turn to Judah, where a marriage to the house of Ahab threatens to undo the Davidic promise itself. Yet the text makes a declaration of stubborn grace: "Yet the Lord would not destroy Judah for David his servant&apos;s sake, as he had said he would give him alway a light."',
    'Here we learn that prophecy is not mere prediction; it is the burden of the prophet to know what is coming and to weep over it. We learn that ambition can wear the mask of humility. And we are reminded that God&apos;s covenant stands not because of a king&apos;s virtue, but because God keeps His word.',
  ],

  bottomShare: {
    label: 'Share 2 Kings 8',
    quote:
      'The prophet weeps over the evil he must announce. The woman returns to find her land restored. The lamp of David flickers but holds. In 2 Kings 8, we see that prophecy is burden and compassion, that God preserves His promises not through human perfection, but through divine faithfulness.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 8 · Study Guide',
  },

  sections: [
    /* ─── 2 Kings 8:1–6 — The Shunammite Returns ──────────────────────────── */
    {
      ref: '2 Kings 8:1–6',
      title: 'The Shunammite Returns',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'Then spake Elisha unto the woman, whose son he had restored to life, saying, Arise, and go thou and thine household, and sojourn wheresoever thou canst sojourn: for the Lord hath called for a famine; and it shall also come upon the land seven years.'),
            plain(2, 'And the woman arose, and did after the saying of the man of God: and she went with her household, and sojourned in the land of the Philistines seven years.'),
            plain(3, 'And it came to pass at the end of seven years, that the woman returned out of the land of the Philistines: and she went forth to cry unto the king for her house and for her land.'),
            plain(4, 'And the king talked with Gehazi the servant of the man of God, saying, Tell, I pray thee, all the great things that Elisha hath done.'),
            plain(5, 'And it came to pass, as he was telling the king how he had restored a dead body to life, that, behold, the woman, whose son he had restored to life, cried to the king for her house and for her land. And Gehazi said, My lord, O king, this is the woman, and this is her son, whom Elisha restored to life.'),
            plain(6, 'And when the king asked the woman, she told him. So the king appointed her a certain officer, saying, Restore all that was hers, and all the fruits of the field since the day that she left the land, even until now.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'famine-calling',
          html:
            'The prophet speaks to the woman with urgent tenderness: "Arise, and go." Not a demand, but a call grounded in compassion. Elisha has known her faithfulness — she and her husband built him a chamber, fed him, honored him. Now he warns her before the judgment falls. The famine is not punishment but a measure God has called for; it will sweep the land for seven years. She must gather her household and flee.',
        },
        {
          kind: 'commentary',
          id: 'return-timing',
          html:
            'Seven years pass. The famine lifts. And the woman returns — not in triumph, but in need. She has lost her house, her land, the wealth of her fields. She cries out to the king. She has nothing; she owns nothing. This is the posture of one who cries for justice.',
        },
        {
          kind: 'commentary',
          id: 'gehazi-witness',
          html:
            'The timing is remarkable. Gehazi is telling the king about Elisha&apos;s miracles — and in that very moment, the woman appears. The king is already speaking of Elisha, already moved by his deeds. What Gehazi is narrating in words, the woman fulfills in flesh: she is the proof. She is the dead son, restored. And the king sees it.',
        },
        {
          kind: 'carry',
          html:
            'The woman waited. She did not cling to what she thought was hers. She fled at the prophet&apos;s word and endured seven years in a foreign land. And when she returned, she cried out — not in anger, but in supplication. Her honesty and her faithfulness opened the king&apos;s ear. Sometimes the greatest victories come not through our strategies, but through our willingness to obey when the word comes, and to wait for God&apos;s timing.',
        },
        {
          kind: 'reflection',
          id: 'shunammite-returns',
          prompt: 'When have you had to let go of something precious because God&apos;s word called you away? How did it feel to return and find what was lost?',
        },
      ],
    },

    /* ─── 2 Kings 8:7–10 — Elisha Meets Hazael ─────────────────────────────── */
    {
      ref: '2 Kings 8:7–10',
      title: 'The Prophet Weeps',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(7, 'And Elisha came to Damascus; and Ben-hadad the king of Syria was sick: and it was told him, saying, The man of God is come hither.'),
            plain(8, 'And the king said to Hazael, Take a present in thine hand, and go, meet the man of God, and enquire of the Lord by him, saying, Shall I recover of this disease?'),
            plain(9, 'So Hazael went to meet him, and took a present with him, even of every good thing of Damascus, forty camels&apos; burden, and came and stood before him: and he said, Thy son Ben-hadad king of Syria hath sent me to thee, saying, Shall I recover of this disease?'),
            {
              number: 10,
              spans: [
                t('And Elisha said unto him, Go, say unto him, Thou mayest certainly '),
                hg('recover', 'recover-lie'),
                t(': howbeit the Lord hath shewed me that he shall surely '),
                hp('die', 'die-meaning'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'recover-lie',
          html:
            'Elisha&apos;s words to Hazael contain a paradox. "Thou mayest certainly recover" — he speaks as if recovery is possible. But then he adds: "howbeit the Lord hath shewed me that he shall surely die." The prophet does not say Ben-hadad will recover. He says Ben-hadad will die — not by the hand of God, but by the hand of the man standing before him. Hazael will kill the king to take his throne.',
        },
        {
          kind: 'commentary',
          id: 'die-meaning',
          html:
            'The word "die" carries a freight of meaning here. It is not a natural death that awaits Ben-hadad. It is murder. Elisha sees the future with such clarity that he knows not merely that the king will perish, but how and by whom. And he speaks it directly to the man who will do it.',
        },
        {
          kind: 'hebrew',
          id: 'hazael-name',
          title: 'Hazael — "God Has Seen"',
          script: 'חֲזָאֵל',
          translit: '<strong>Hazael</strong> · "God has seen"; the name carries prophetic weight — God has already foreseen what this man will become.',
          description:
            'The name Hazael means "God has seen." It is not a coincidence that Elisha, the seer, meets a man whose very name proclaims that God sees. God has seen Hazael&apos;s ambition, his future rise, his future cruelty. Nothing is hidden from the eyes of the Lord.',
        },
        {
          kind: 'carry',
          html:
            'To know the future with certainty is not a gift — it is a burden. Elisha stands before Hazael and sees not the servant of Ben-hadad, but the king he will become. The prophet sees the suffering that servant will inflict. And yet Elisha speaks the word. Sometimes obedience to God means speaking a truth that brings no comfort, announcing a future we cannot change.',
        },
        {
          kind: 'reflection',
          id: 'elisha-sees',
          prompt: 'Have you ever sensed that someone in your life might become a source of harm — and had to speak a hard truth? What courage does that require?',
        },
      ],
    },

    /* ─── 2 Kings 8:11–15 — Hazael Becomes King ──────────────────────────── */
    {
      ref: '2 Kings 8:11–15',
      title: 'The Servant Who Slays His Master',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 11,
              spans: [
                t('And he '),
                hg('settled his countenance steadfastly', 'steady-face'),
                t(', until he was ashamed: and the man of God '),
                hp('wept', 'wept-meaning'),
                t('.'),
              ],
            },
            plain(12, 'And Hazael said, Why weepeth my lord? And he answered, Because I know the evil that thou wilt do unto the children of Israel: their strong holds wilt thou set on fire, and their young men wilt thou slay with the sword, and wilt dash their children, and rip up their women with child.'),
            plain(13, 'And Hazael said, But what, is thy servant a dog, that he should do this great thing? And Elisha said, The Lord hath shewed me that thou shalt be king over Syria.'),
            {
              number: 14,
              spans: [
                t('So he departed from Elisha, and came to his master; who said to him, What said Elisha to thee? And he answered, He told me that thou shouldest surely recover.'),
              ],
            },
            plain(15, 'And it came to pass on the morrow, that he took a thick cloth, and dipped it in water, and spread it on his face, so that he died: and Hazael reigned in his stead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'steady-face',
          html:
            'Elisha settles his face, gazing at Hazael with unflinching sight. The prophet does not look away. He sees the man before him and does not blink. The weight of his seeing breaks him — he weeps. This is not disapproval; this is compassion. Elisha is weeping for the harm that will be done, and for the soul that will do it.',
        },
        {
          kind: 'commentary',
          id: 'wept-meaning',
          html:
            'The prophet weeps. He has just told Hazael that Ben-hadad will die. Now he announces what Hazael will do when he becomes king: burn strongholds, slaughter young men, dash children, rip open pregnant women. It is a catalog of horrors. And Elisha weeps as he speaks it. The prophetic office is not distant. It is torn with grief at the evil it must proclaim.',
        },
        {
          kind: 'commentary',
          id: 'servant-dog',
          html:
            'Hazael protests: "Is thy servant a dog, that he should do this great thing?" It is a protest of humility — or of denial. Hazael will not admit to the ambition that burns in him. He will not confess to the capacity for cruelty that already dwells in his heart. Instead, he protests his unworthiness, his servility. But the truth is already in him.',
        },
        {
          kind: 'commentary',
          id: 'thick-cloth',
          html:
            'The next day, Hazael returns to his master&apos;s bedside. Ben-hadad, still feverish from his illness, lies vulnerable. Hazael takes a thick cloth, dips it in water, and presses it over Ben-hadad&apos;s face — suffocating him. The murder is swift and practical. There is no drama, no grand gesture. A servant kills his king to claim the throne. Ambition requires only opportunity and a moment of courage to become murder.',
        },
        {
          kind: 'christ',
          id: 'christ-weeps',
          title: 'Christ Connection — The King Who Weeps Over Coming Judgment',
          html:
            'Elisha weeps over the suffering he knows is coming. The prophet stands in a lineage of weeping messengers. In the New Testament, Jesus himself approaches Jerusalem and weeps: "And when he was come near, he beheld the city, and wept over it, saying, If thou hadst known, even thou, at least in this thy day, the things which belong unto thy peace! but now they are hid from thine eyes" (Luke 19:41–42). Jesus knows the siege that will come, the suffering that will fall on Jerusalem, and he grieves over it. The true prophet does not announce judgment from a distance; he weeps over it. He bears it in his heart. He stands as a bridge between God&apos;s justice and the world&apos;s brokenness, and that standing breaks him.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world where ambition masks itself as servility, where those hungry for power smile and speak of their unworthiness. The lesson of Hazael is not to judge by appearances. Elisha saw through Hazael&apos;s protest to the heart beneath. The prophet&apos;s gift is to see what is hidden — what will be. In your own life, have you learned to see beneath the mask of humility to the truth of the heart? And have you learned to weep for those whose choices will bring them into darkness?',
        },
        {
          kind: 'reflection',
          id: 'hazael-ambition',
          prompt: 'Hazael denies the evil Elisha sees in him. When have you denied or hidden an ambition or desire that you knew was destructive?',
        },
      ],
    },

    /* ─── 2 Kings 8:16–19 — Jehoram of Judah Marries Ahab's Daughter ────────── */
    {
      ref: '2 Kings 8:16–19',
      title: 'The Marriage That Threatened the Davidic Line',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(16, 'And in the fifth year of Joram the son of Ahab king of Israel, Jehoshaphat being yet the king of Judah, did Jehoram the son of Jehoshaphat king of Judah begin to reign.'),
            plain(17, 'Thirty and two years old was he when he began to reign; and he reigned eight years in Jerusalem.'),
            {
              number: 18,
              spans: [
                t('And he walked in the way of the kings of Israel, as did the house of Ahab: for the '),
                hg('daughter of Ahab', 'ahab-daughter'),
                t(' was his wife: and he did evil in the sight of the Lord.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Yet the Lord would not destroy Judah for '),
                hp('David his servant&apos;s sake', 'lamp-preserved'),
                t(', as he had said he would give him alway a '),
                hy('light', 'light-meaning'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ahab-daughter',
          html:
            'Jehoram, son of the righteous Jehoshaphat, marries Athaliah, daughter of Ahab and Jezebel. This is not a wise political alliance. This is a spiritual catastrophe waiting to happen. Ahab&apos;s house is the house that called down Elijah&apos;s drought, that murdered Naboth for his vineyard, that turned Israel to idolatry. And now the Davidic line is bound to it through the marriage bed.',
        },
        {
          kind: 'commentary',
          id: 'lamp-preserved',
          html:
            'But the text makes an extraordinary declaration: "Yet the Lord would not destroy Judah for David his servant&apos;s sake." The word "yet" carries the weight of divine determination. Despite the king&apos;s evil, despite the marriage to Ahab&apos;s house, despite the turn toward idolatry — God does not destroy. Why? Not because Jehoram deserves to be preserved, but because David was faithful. The promise made to David ages ago still holds.',
        },
        {
          kind: 'hebrew',
          id: 'light_meaning',
          title: 'Ner — "Lamp" or "Light"',
          script: 'נֵר',
          translit: '<strong>Ner</strong> · lamp, light; a symbol of continuity, presence, and hope',
          description:
            'The "light" God promised to David is his lamp — a constant presence burning through the darkness. A lamp does not fill an entire room; it illuminates the corner where it stands. The Davidic lamp persists not as a blazing fire that remakes the world, but as a steady light that refuses to be extinguished. This lamp will eventually lead to Christ, the Light of the world.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s faithfulness does not depend on the worthiness of those who inherit His promises. Jehoram was not righteous. His marriage to Ahab&apos;s daughter was folly. Yet the lamp burned on. Sometimes we are heirs to covenants we did not make and do not deserve. The question is not whether we are worthy, but whether we will be faithful to the light that has been given to us.',
        },
        {
          kind: 'reflection',
          id: 'david-lamp',
          prompt: 'What promises or inheritances have you received from those who came before you? How are you tending the light that was given to you?',
        },
      ],
    },

    /* ─── 2 Kings 8:20–24 — The Kingdom Turns; Edom Revolts ──────────────── */
    {
      ref: '2 Kings 8:20–24',
      title: 'The Turning of the Kingdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(20, 'In his days Edom revolted from under the hand of Judah, and made a king over themselves.'),
            plain(21, 'So Joram went over to Zair, and all the chariots with him: and he rose by night, and smote the Edomites which compassed him about, and the captains of the chariots: and the people fled into their tents.'),
            plain(22, 'Yet Edom revolted from under the hand of Judah unto this day. And Libnah revolted at the same time.'),
            plain(23, 'And the rest of the acts of Jehoram, and all that he did, are they not written in the book of the chronicles of the kings of Judah?'),
            plain(24, 'And Jehoram slept with his fathers, and was buried with his fathers in the city of David: and Ahaziah his son reigned in his stead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'edom-revolt',
          html:
            'Under David and Solomon, Edom was subject to Judah. Now it revolts. Jehoram fights to bring it back under his hand, but the revolt is not permanently suppressed. "Edom revolted from under the hand of Judah unto this day." The text speaks from a perspective looking back — it records what became permanent. The kingdom is fragmenting. The power that once held sway over subject nations is slipping away. This is the consequence of a kingdom that has turned from God.',
        },
        {
          kind: 'carry',
          html:
            'Kingdoms rise and fall. The greatness that seemed assured under David becomes uncertain under his descendants. Jehoram did evil; the land rebelled. There is a deep logic here: a king&apos;s choice shapes not only his own fate, but the fate of all his people. When a leader turns from righteousness, the whole kingdom destabilizes. The reversal is not always swift, but it is certain.',
        },
        {
          kind: 'reflection',
          id: 'kingdom-turning',
          prompt: 'When have you seen the consequences of a leader&apos;s wrong choice ripple outward to affect many people? What does it teach you?',
        },
      ],
    },

    /* ─── 2 Kings 8:25–29 — Ahaziah: The Ahab Connection Continues ───────── */
    {
      ref: '2 Kings 8:25–29',
      title: 'Ahaziah — A King Among Rivals',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(25, 'In the twelfth year of Joram the son of Ahab king of Israel did Ahaziah the son of Jehoram king of Judah begin to reign.'),
            plain(26, 'Two and twenty years old was Ahaziah when he began to reign; and he reigned one year in Jerusalem. And his mother&apos;s name was Athaliah, the daughter of Omri king of Israel.'),
            plain(27, 'And he walked in the way of the house of Ahab, and did evil in the sight of the Lord, like the house of Ahab: for he was the son in law of the house of Ahab.'),
            plain(28, 'And he went with Joram the son of Ahab to the war against Hazael king of Syria in Ramoth-gilead: and the Syrians wounded Joram.'),
            plain(29, 'And King Joram went back to be healed in Jezreel of the wounds which the Syrians had given him at Ramoth-gilead. And Ahaziah the son of Jehoram went down to see Joram in Jezreel, because he was sick.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ahaziah-name',
          html:
            'Ahaziah is born into a tangled web. His father Jehoram married Ahab&apos;s daughter Athaliah. His mother is now regent, carrying the bloodline of both Judah and Israel — and through his mother, the shadow of Ahab. He is twenty-two years old when he begins to reign, already bound by marriage and blood to the Northern Kingdom.',
        },
        {
          kind: 'commentary',
          id: 'ahab-shadow',
          html:
            'The text repeats the verdict twice: "he walked in the way of the house of Ahab, and did evil in the sight of the Lord." Ahaziah has inherited not only a throne, but a moral trajectory. His mother Athaliah brings the idolatry and ruthlessness of her father Ahab into the very heart of Judah. The young king follows that path.',
        },
        {
          kind: 'commentary',
          id: 'ramoth-gilead',
          html:
            'Ahaziah joins Joram of Israel in war against Hazael (the servant who became king, the one Elisha wept over). At Ramoth-gilead, Joram is wounded. The chapter closes with Ahaziah going down to Jezreel — the city of Ahab, the seat of idolatry, the place where Naboth was murdered — to see his wounded uncle. He is walking into a web of consequence, into a place where his choices will become irrevocable.',
        },
        {
          kind: 'christ',
          id: 'christ-king-judgment',
          title: 'Christ Connection — The King Over the Rise and Fall of Nations',
          html:
            'The movements of kings and kingdoms — their alliances, their wars, their falls — are not beyond God&apos;s sight or control. Daniel saw this truth in vision: "And he changeth the times and the seasons: he removeth kings, and setteth up kings" (Daniel 2:21). Hazael rises through murder; Jehoram falls because he turns from God; Ahaziah walks into darkness. Christ is the King over all these shifting powers, the one through whom all authority is exercised. He does not merely watch; He acts. He preserves the lamp of David not by preventing evil, but by ensuring that His purposes stand even when human rulers rebel.',
        },
        {
          kind: 'carry',
          html:
            'We live under powers and principalities. We are born into circumstances not of our choosing — families, nations, histories that precede us. The question is not whether we can escape the web entirely; the question is whether we will choose faithfulness within it. Ahaziah inherited the shadow of Ahab. He could have chosen differently. Instead, he walked the way of evil. What inheritance do you bear, and will you be faithful to the light within it?',
        },
        {
          kind: 'reflection',
          id: 'ahaziah-choice',
          prompt: 'You are born into a family legacy, a cultural inheritance, a moment in history. How do you choose faithfulness within the circumstances you did not choose?',
        },
      ],
    },
  ],
};
