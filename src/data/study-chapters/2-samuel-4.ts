import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 2 Samuel 4 — Ish-bosheth Murdered; David's Justice
 *
 * When news of Abner's death reaches Saul's son Ish-bosheth, his hands grow
 * feeble and all Israel is troubled. Two captains, Rechab and Baanah, murder
 * the sleeping king hoping for reward. Instead, they face David's justice —
 * a king who will not enrich himself by another's blood. In the shadows stands
 * Mephibosheth, the lame son of Jonathan, whose introduction here foreshadows
 * the grace David will show him in chapter 9. The chapter pivots on a principle:
 * the king's justice does not profit from the king's enemies' death.
 */
export const SAMUEL_2_4: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 4,

  estimatedMinutes: { beginner: 3, intermediate: 8, deep: 10 },
  intros: [
    'Abner is dead. The Northern Kingdom&apos;s strongest general, the man who held Saul&apos;s house together, has fallen — not in battle, but in Hebron, at David&apos;s door, murdered by Joab. Now Ish-bosheth, the weak remaining son of Saul, hears the news. His hands grow feeble. All Israel is troubled. The last pillar of Saul&apos;s house trembles. Two men see opportunity in that weakness.',
    'But what happens next teaches us something profound about the kind of king David is — and the kind of King we are promised in Christ. When murderers bring David the head of his rival, expecting reward, David executes them. He will not profit from the death of his enemies. He will not take the throne as a throne stained with the blood of others. His justice is pure because his gain is not at stake. And in the background, a crippled boy is introduced — Mephibosheth, the son of Jonathan — lame since his nurse fled Saul&apos;s death. David will not remember him here. But we will see in chapter 9 how a king who refuses to profit from death learns to honor the sons of those he replaced.',
  ],

  sections: [
    /* ─── 2 Samuel 4:1–3 — Ish-bosheth's Fear ──────────────────────────── */
    {
      ref: '2 Samuel 4:1–3',
      title: 'The King&apos;s Hands Grow Feeble',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'And when Saul&apos;s son heard that Abner was dead in Hebron, his hands were feeble, and all the Israelites were troubled.'),
            plain(2, 'And Saul&apos;s son had two men that were captains of bands: the name of the one was Baanah, and the name of the other Rechab, the sons of Rimmon a Beerothite, of the children of Benjamin: for Beeroth also was reckoned to Benjamin.'),
            plain(3, 'And the Beerothites fled to Gittaim, and were sojourners there until this day.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ish-bosheth-fear',
          html:
            'Ish-bosheth hears that Abner is dead, and something breaks in him. His hands become feeble — not the hands of a warrior, but the hands of a man whose power has evaporated. The text does not say he grieves Abner. It says his weakness is revealed. All Israel is troubled. They recognize what a reader has known for chapters: Ish-bosheth was never a true king. He was a remnant, a shadow, held upright only by Abner&apos;s strength. Now that strength is gone.',
        },
        {
          kind: 'commentary',
          id: 'rimmon-sons',
          html:
            'Baanah and Rechab are sons of Rimmon the Beerothite — captains of bands in Ish-bosheth&apos;s service. They are men of war, men with followings, men positioned close to power. What they see in Ish-bosheth&apos;s feebleness is not a tragedy. They see an opportunity.',
        },
      ],
    },

    /* ─── 2 Samuel 4:4 — Mephibosheth Introduced ───────────────────────── */
    {
      ref: '2 Samuel 4:4',
      title: 'Jonathan&apos;s Son, Lame Since His Flight',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(4, 'And Jonathan, Saul&apos;s son, had a son that was lame of his feet. He was five years old when the tidings came of Saul and Jonathan out of Jezreel, and his nurse took him up, and fled: and it came to pass, as she made haste to flee, that he fell, and became lame. And his name was Mephibosheth.'),
          ],
        },
        {
          kind: 'hebrew',
          id: 'mephibosheth-name',
          title: 'Mephibosheth — "From the Mouth of Shame"',
          script: 'מְפִיבֹ֫שֶׁת',
          translit: '<strong>Mefi-Boshet</strong>',
          description:
            'The name "Mephibosheth" means "from the mouth of shame" or "exterminating shame." Some scholars suggest it may have originally meant something more favorable, reinterpreted after he lost power. His name carries the weight of his circumstance — the son of Jonathan, in hiding, marked by his lameness. He is a boy who lost his father and his feet in a single moment of chaos.',
        },
        {
          kind: 'commentary',
          id: 'mephibosheth-five',
          html:
            'Mephibosheth is five years old when the tidings come that Saul and Jonathan are dead. His nurse scoops him up and runs — a desperate flight from the slaughter that is consuming the house of Saul. In her haste, she falls. He falls. His legs are broken or twisted. He becomes lame. From that moment, the son of Jonathan bears in his body the mark of his house&apos;s destruction. He is alive, but he is marked. Whole but damaged. A prince, but crippled.',
        },
        {
          kind: 'carry',
          html:
            'Mephibosheth&apos;s lameness is not punishment. It is circumstance — the consequence of being born into a falling house, of being in the wrong place when the world shifts. Sometimes we carry wounds that come not from our own sin but from the instability of the world we were born into, the families we were born into, the moment in history we inherited. The text introduces Mephibosheth here without judgment, simply naming what happened. A child who lost everything and bore it in his body.',
        },
      ],
    },

    /* ─── 2 Samuel 4:5–7 — The Murder ─────────────────────────────────── */
    {
      ref: '2 Samuel 4:5–7',
      title: 'Rechab and Baanah Strike',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(5, 'And the sons of Rimmon the Beerothite, Rechab and Baanah, went, and came about the heat of the day to the house of Ish-bosheth, who lay on a bed at noon.'),
            plain(6, 'And they came thither into the midst of the house, as though they would have fetched wheat; and they smote him under the fifth rib: and Rechab and Baanah his brother escaped.'),
            plain(7, 'For when they came into the house, he lay on his bed in his bedchamber, and they smote him, and slew him, and beheaded him, and took his head, and gat them away through the plain all night.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'noon-murder',
          html:
            'They wait for noon — the heat of the day, when a man lies down to sleep, when guards are drowsy, when the house is quiet. Ish-bosheth, once a king, is now a man lying on his bed. He is vulnerable in his own house. He is defenseless. Two men who serve him walk in, pretend they have come to fetch wheat, and strike him under the fifth rib — the thrust that kills fast, that silences. They are professionals. This is not a moment of passion. It is planned.',
        },
        {
          kind: 'commentary',
          id: 'beheading',
          html:
            'They behead him. They do not leave him for burial. They take his head — a trophy, a proof of the deed, a claim to reward. The text is sparse but clear: they have murdered a king and plan to cash in.',
        },
        {
          kind: 'commentary',
          id: 'flight-darkness',
          html: 'They gat them away through the plain all night — flight in darkness, hoping the deed would be received as deliverance. The plain becomes their stage; the night their cover. But the king they expect to please will see them by morning light.',
        },
        {
          kind: 'commentary',
          id: 'flight-darkness',
          html:
            'They flee through the night. The plain is dark. No one sees them. But someone will know what they have done, and they will bring the head to David, hoping he will remember them, reward them, make them powerful. They have not reckoned with the kind of king David is.',
        },
      ],
    },

    /* ─── 2 Samuel 4:8–10 — The Murderers Come to David ─────────────────── */
    {
      ref: '2 Samuel 4:8–10',
      title: 'The Murderers Come Expecting Reward',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(8, 'And they brought the head of Ish-bosheth unto David to Hebron, and said to the king, Behold the head of Ish-bosheth the son of Saul thine enemy, which sought thy life; and the Lord hath avenged my lord the king this day of Saul, and of his seed.'),
            plain(9, 'But David answered Rechab and Baanah his brother, the sons of Rimmon the Beerothite, and said unto them, As the Lord liveth, who hath redeemed my soul out of all adversity,'),
            plain(10, 'When one told me, saying, Behold, Saul is dead, thinking to have brought good tidings, I took hold of him, and slew him in Ziklag, who thought that he would have given him a reward for his tidings:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'false-thanks',
          html:
            'They come to David with the head and the language of loyalty: "Behold the head of Ish-bosheth the son of Saul thine enemy, which sought thy life; and the Lord hath avenged my lord the king this day." They are trying to frame their murder as service. They want David to believe they have done him a favor, that they are righteous men who have removed his enemy. They expect reward.',
        },
        {
          kind: 'commentary',
          id: 'ziklag-memory',
          html:
            'But David remembers. When Saul died on Mount Gilboa, a man came to David in Ziklag claiming to have killed Saul — and expecting reward for bringing good tidings. David did not reward him. David killed him. "Who thought that he would have given him a reward for his tidings" — the man expected payment for killing a king, and David paid him with his life.',
        },
      ],
    },

    /* ─── 2 Samuel 4:11–12 — David's Justice ────────────────────────────── */
    {
      ref: '2 Samuel 4:11–12',
      title: 'How Much More Shall I Require Their Blood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(11, 'How much more, when wicked men have slain a righteous person in his own house upon his bed? shall I not therefore now require his blood of your hand, and take you away from the earth?'),
            plain(12, 'And David commanded his young men, and they slew them, and cut off their hands and their feet, and hanged them up over the pool in Hebron. But they took the head of Ish-bosheth, and buried it in the sepulchre of Abner in Hebron.'),
          ],
        },
        {
          kind: 'hebrew',
          id: 'righteous-person',
          title: 'A Righteous Person — צַדִּיק',
          script: 'צַדִּיק',
          translit: '<strong>Tzaddik</strong> · A righteous, innocent person',
          description:
            'David calls Ish-bosheth a righteous person — not because Ish-bosheth was a good king or even a strong one, but because he was innocent. He did not seek David&apos;s life in the way Saul did. He was weak, yes. But he did not merit murder in his own bed. The word "righteous" here means someone who has not crossed a line that would justify his death. Ish-bosheth, for all his weakness, fell into that category.',
        },
        {
          kind: 'christ',
          id: 'david-pure-justice',
          title: 'Christ Connection — The King Who Will Not Profit from Death',
          html:
            'David could have kept Ish-bosheth&apos;s kingdom for himself through Rechab and Baanah&apos;s hands. Instead, he executes them. His refusal to profit from the murder of his rival is absolute. He will not let his throne be built on the blood of others. He will not accept the gains that come from another man&apos;s wickedness. This is the heart of a righteous king — one whose victory is not hollow, whose authority is not compromised by the blood of his enemies, whose justice is clean. Jesus will come as a King whose justice is even purer — one who will receive the kingdom not by the sword of His servants but by the will of the Father, and one who will refuse to build His reign on vengeance or the death of His enemies. Instead, His kingdom will be built on mercy, on the blood He sheds Himself, on a justice that opens the way to salvation rather than closing it.',
        },
        {
          kind: 'commentary',
          id: 'hands-feet-buried',
          html:
            'David commands that Rechab and Baanah be slain — their hands and feet cut off (the instruments of their crime, in a sense) and their bodies hanged over the pool in Hebron as a warning. This is not mercy. But it is justice. And then — and this is the key — they take the head of Ish-bosheth and bury it in the sepulchre of Abner. Ish-bosheth, weak as he was, receives honor in death. David does not desecrate his body. He does not leave him for the birds. He buries him with Abner, the man who held his kingdom together. Even in death, even to a man who was his rival, David shows respect.',
        },
        {
          kind: 'carry',
          html:
            'The pattern is clear: if you come to David as a righteous man but you have done evil, he will not reward you. If you think to please him by killing his enemy, you will be disappointed. His power is not built on your wickedness. His throne does not sit on a foundation of blood he did not shed himself. This teaches us something about the kind of leader worth following — one who will not profit from your sin, one whose authority is clean, one whose justice does not depend on finding someone else to do his dirty work. As followers of Christ, we are called to live with this same clean conscience: not building our standing on another&apos;s downfall, not prospering through another&apos;s harm, not seeking advancement through wickedness, no matter how much it seems it would serve us. The King we serve is one who refused to profit from death. His followers learn to do the same.',
        },
        {
          kind: 'reflection',
          id: 'clean-justice',
          prompt:
            'Where in your life might you be tempted to accept something good that comes through another person&apos;s sin or harm? What would it look like to refuse that kind of "gain," as David refused the murderers&apos; reward?',
        },
      ],
    },

    /* ─── Summary: The King&apos;s Justice ──────────────────────────────── */
    {
      ref: '2 Samuel 4',
      title: 'What the Chapter Teaches',
      blocks: [
        {
          kind: 'commentary',
          html:
            'By the end of 2 Samuel 4, Ish-bosheth is dead and buried. The last fragment of Saul&apos;s house has crumbled. David did not kill him — but David will not profit from his murder either. And in the shadows of this chapter, Mephibosheth, the lame son of Jonathan, is growing up somewhere, marked by loss. He does not appear again until chapter 9, when David, secure in his kingdom, will ask: "Is there yet any that is left of the house of Saul, that I may show him kindness for Jonathan&apos;s sake?" The kingship of David, built clean, will prove strong enough to bend toward mercy. It will be a king whose justice is pure enough to care for the crippled son of the man he replaced.',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Samuel 4',
    quote:
      'When murderers came to David with the head of his rival, expecting reward, he executed them. A righteous king will not profit from the blood of his enemies. His justice is clean, his throne secure, his authority unmarred by the wickedness of those who would serve him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 4 · Study Guide',
  },
};
