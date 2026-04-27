import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 2 Chronicles 21 — Jehoram: A King Who Chose Darkness
 *
 * When Jehoram became king of Judah, he had every advantage: a throne
 * secured by his father Jehoshaphat&apos;s faithfulness, wealth beyond measure,
 * fortified cities, and a kingdom at peace. His first act was to slaughter
 * his own brothers to eliminate any rival. His second was to marry Athaliah,
 * the daughter of Ahab — bringing the Baal worship of Israel into Judah&apos;s
 * court. The Lord would not destroy the house of David because of covenant,
 * but Jehoram would learn that the wages of apostasy are paid in the flesh.
 * A writing comes from Elijah the prophet; nations revolt; and a terrible
 * disease consumes the king from within. He dies "without being desired" —
 * perhaps the saddest epitaph in Scripture. In this tragedy, we see the
 * cost of choosing darkness when light is available.
 */
export const CHRONICLES_2_21: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 21,

  intros: [
    'Jehoshaphat sleeps with his fathers, and his son Jehoram rises to the throne. The father was faithful; the son will be faithless. Where Jehoshaphat strengthened the kingdom and walked in the way of the Lord, Jehoram will walk in the way of the kings of Israel — abandoning the God of his fathers and marrying into the house of Ahab. The chapter opens with a striking act of parricide: Jehoram slaughters all his brothers, clearing away any potential rival to his throne. It is an act that will define his reign and earn him a place among Judah&apos;s worst kings.',
    'Yet the Lord does not abandon the house of David. Even as Jehoram descends into apostasy, marries an Ahabian princess, and turns the people toward idolatry, the covenant mercy holds. The Lord will not destroy the line — but He will not spare the king from the consequences of his choices. A writing arrives from Elijah the prophet, announcing plague. Enemies revolt. A disease of the bowels consumes Jehoram slowly, publicly, without remedy. And when he dies, after reigning only eight years, the text records the most devastating judgment: "he departed without being desired." He was hated. He was forgotten. No one mourned him.',
  ],

  sections: [
    /* ─── 2 Chronicles 21:1–4 — Jehoram Murders His Brothers ──────────── */
    {
      ref: '2 Chronicles 21:1–4',
      title: 'A Kingdom Strengthened, Then Bloodied',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(1, 'Now Jehoshaphat slept with his fathers, and was buried with his fathers in the city of David. And Jehoram his son reigned in his stead.'),
            {
              number: 2,
              spans: [
                t('And he had brethren the sons of Jehoshaphat, Azariah, and Jehiel, and Zechariah, and Azariahu, and Michael, and Shephatiah: all these were the sons of Jehoshaphat king of Israel.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And their father gave them great gifts of silver, and of gold, and of precious things, with fenced cities in Judah: but the kingdom gave he to Jehoram; because he was the firstborn.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Now when Jehoram was risen up to the kingdom of his father, he strengthened himself, and '),
                hg('slew all his brethren with the sword', 'chron21-slew-brethren'),
                t(', and divers of the princes of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chron21-slew-brethren',
          html:
            'Jehoram&apos;s first act as king is unthinkable: he murders his brothers. The text does not minimize this. He "strengthened himself" — secured his power — by soaking his kingdom in the blood of his own family. His father had given them all gifts and fortified cities; Jehoram takes those cities back by force, and the lives along with them. This is not a simple succession struggle. This is fratricide on a scale that would mark Jehoram as contemptible even to ancient Near Eastern standards of kingship.',
        },
        {
          kind: 'hebrew',
          id: 'chron21-jehoram',
          title: 'Jehoram — "Yah Is Exalted"',
          script: 'יְהוֹרָם',
          translit: '<strong>Yehoram</strong> · Yah is exalted; the name carries the weight of divine honor',
          description:
            'Jehoram&apos;s name means "Yah is exalted." Yet he will prove to be a king who exalts himself, who seizes power through murder, and who turns the people away from the God whose name he bears. The irony cuts deep: a man named for God&apos;s elevation works instead toward human elevation through the basest means possible.',
        },
        {
          kind: 'carry',
          html:
            'When you gain a position of power or privilege, what is your first instinct? To consolidate control through fear? To eliminate any who might challenge you? Or to use that power for the people around you? Jehoram&apos;s path — strength gained through the death of family — is the way of ancient tyranny. But it is also the way of modern power-seeking: the backstab, the rumor, the calculated removal of anyone who might stand in your way. Jesus teaches a different way: the last shall be first, and the servant shall be greatest.',
        },
        {
          kind: 'reflection',
          id: 'refl-brothers',
          prompt: 'What would it cost you to truly see your siblings or those close to you as gifts rather than threats? How does comparison and rivalry poison the places where love should grow?',
        },
      ],
    },

    /* ─── 2 Chronicles 21:5–7 — Apostasy and Covenant Mercy ──────────── */
    {
      ref: '2 Chronicles 21:5–7',
      title: 'The Marriage That Brought Baal Worship Into Judah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 5,
              spans: [
                t('Jehoram was thirty and two years old when he began to reign, and he reigned eight years in Jerusalem.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And he walked in the way of the kings of Israel, like as did the house of Ahab: for '),
                hy('he had the daughter of Ahab to wife', 'chron21-ahab-daughter'),
                t(': and he wrought that which was evil in the eyes of the Lord.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Howbeit the Lord would not destroy the house of David, because of the covenant that he had made with David, and as he promised to give a '),
                hp('light to him and to his sons for ever', 'chron21-light-covenant'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chron21-ahab-daughter',
          html:
            'Jehoram marries Athaliah, daughter of Ahab — the king whose name was synonymous with apostasy and idol worship. This marriage is not a political alliance; it is a spiritual corruption. Through this woman and her lineage, Baal worship enters the royal house of Judah. Jehoram does not merely tolerate it; he "wrought that which was evil in the eyes of the Lord." He actively pursues the ways of the northern kingdom, abandoning the God whom his father Jehoshaphat served.',
        },
        {
          kind: 'hebrew',
          id: 'chron21-baal',
          title: 'Baal — "Lord" or "Master" (The Counterfeit Name)',
          script: 'בַּעַל',
          translit: '<strong>Baal</strong> · the storm-god worshipped across the Levant; literally "master" or "lord"',
          description:
            'Baal was a fertility and storm deity worshipped throughout Canaan. His worship often involved sexual transgression and child sacrifice. The name itself — "Baal," or "Master" — offers a counterfeit lordship, a false god demanding the very things that tear communities apart. When the text says Jehoram "caused the inhabitants of Jerusalem to commit fornication," it is describing both literal sexual transgression and spiritual idolatry — the worship of a god that demanded degradation.',
        },
        {
          kind: 'commentary',
          id: 'chron21-light-covenant',
          html:
            'In the midst of Jehoram&apos;s darkness, the text records a stunning mercy: "The Lord would not destroy the house of David, because of the covenant that he had made with David." The covenant is not with Jehoram — who has shown himself unworthy. It is with David. God promised to give a "light" to David and his sons forever — a lamp that would not be extinguished. Even when Jehoram walks in darkness, the lamp does not go out. The house stands. The line continues. And though judgment will come upon the king himself, the covenant holds.',
        },
        {
          kind: 'carry',
          html:
            'You may have been given gifts, privileges, or a spiritual inheritance from those who came before you. Jehoram inherited a kingdom at peace, cities secure, and the knowledge of the true God. He squandered it. The question is not whether you will face temptation to abandon what you have been given. The question is: will you keep faith with those sacrifices? Will you honor the covenant — not because Jehoram did, but because the God who made the covenant is more precious than any advantage you might gain by breaking it?',
        },
        {
          kind: 'reflection',
          id: 'refl-covenant',
          prompt: 'What spiritual inheritance have you been given — through family, church, or tradition? Have you ever been tempted to trade it for something that looked more attractive in the moment?',
        },
      ],
    },

    /* ─── 2 Chronicles 21:8–10 — Edom and Libnah Revolt ──────────────── */
    {
      ref: '2 Chronicles 21:8–10',
      title: 'The Fruit of Apostasy: Nations Revolt',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 8,
              spans: [
                t('In his days the Edomites revolted from under the dominion of Judah, and made themselves a king.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Then Jehoram went forth with his princes, and all his chariots with him: and he rose up by night, and smote the Edomites which compassed him in, and the captains of the chariots.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('So the Edomites revolted from under the hand of Judah unto this day. The same time also did '),
                hg('Libnah revolt', 'chron21-libnah'),
                t(' from under his hand; because he had forsaken the Lord God of his fathers.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chron21-libnah',
          html:
            'Edom revolts, and Jehoram defeats them — but the victory is hollow. Edom escapes and has never returned to Judah&apos;s rule. And then Libnah, a city within the kingdom itself, revolts. The text is explicit: Libnah fell away "because he had forsaken the Lord God of his fathers." This is not merely political instability. This is spiritual consequence manifesting as national collapse. When a king abandons the Lord, even his own cities lose faith in him.',
        },
        {
          kind: 'carry',
          html:
            'There is a pattern here that repeats in every generation: when we turn from what is true, we lose the authority and credibility we once held. Others sense it. They see the emptiness, the contradiction. If you claim to stand for something you do not actually follow, people will leave. Not because they are disloyal, but because they have recognized the bankruptcy of your claim. Integrity is not decoration; it is the foundation of every meaningful relationship and every genuine influence.',
        },
        {
          kind: 'reflection',
          id: 'refl-revolt',
          prompt: 'When have you noticed that your own lack of integrity — your gap between what you claim and what you do — has caused others to lose trust in you?',
        },
      ],
    },

    /* ─── 2 Chronicles 21:11–15 — Elijah's Writing of Judgment ─────────── */
    {
      ref: '2 Chronicles 21:11–15',
      title: 'Elijah Writes From the Beyond: A King Judged',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 11,
              spans: [
                t('Moreover he made high places in the mountains of Judah, and caused the inhabitants of Jerusalem to commit fornication, and compelled Judah thereto.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And there came a writing to him from Elijah the prophet, saying, Thus saith the Lord God of David thy father, Because thou hast not walked in the ways of Jehoshaphat thy father, nor in the ways of Asa king of Judah;'),
              ],
            },
            {
              number: 13,
              spans: [
                t('But hast walked in the way of the kings of Israel, and hast made Judah and the inhabitants of Jerusalem to go a whoring, like to the whoredoms of the house of Ahab, and also hast '),
                hg('slain thy brethren', 'chron21-elijah-brethren'),
                t(' of thy father&apos;s house, who were better than thyself:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Behold, with a great plague will the Lord smite thy people, thy children, thy wives, all thy goods:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And thou shalt have great sickness by disease of thy bowels, until thy bowels fall out by reason of the sickness day by day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chron21-elijah-brethren',
          html:
            'A writing arrives from Elijah the prophet — likely written before his ascension, preserved and delivered after his translation to heaven. Elijah, who spent his life calling Israel back from Baal worship, now holds Jehoram accountable. The message is stark: Jehoram has walked not like Jehoshaphat or Asa, but like the kings of Israel. He has made Judah whore after Ahab&apos;s Baal. And worst, he has slain his brothers, "who were better than thyself." The comparison cuts. Jehoram has murdered the good to secure himself.',
        },
        {
          kind: 'hebrew',
          id: 'chron21-choli',
          title: 'Choli — "Sickness" or "Disease"',
          script: 'חֳלִי',
          translit: '<strong>Choli</strong> · sickness; disease; the physical manifestation of divine judgment',
          description:
            'The word "choli" — sickness — carries the sense of a wasting disease, something that consumes from within. In Scripture, such diseases are often the visible sign of God&apos;s judgment, a judgment inscribed on the body itself. Jehoram will experience choli not as a brief illness, but as a slow, public deterioration that cannot be hidden or explained away.',
        },
        {
          kind: 'carry',
          html:
            'God does not hide His judgment in mystery. Elijah speaks plainly: the plague is coming. Your family will be taken. Your wealth will vanish. Your body will betray you. This is not hidden cruelty; it is clear warning. And yet Jehoram does not repent. He does not turn back. He continues in his ways even as the word comes to him. How many warnings do we need before we hear?',
        },
        {
          kind: 'reflection',
          id: 'refl-elijah',
          prompt: 'Elijah accuses Jehoram of comparing himself upward — following the kings of Israel instead of the faithful kings Jehoshaphat and Asa. Who do you compare yourself to when choosing which way to go?',
        },
      ],
    },

    /* ─── 2 Chronicles 21:16–19 — The Plague and the Bowel Disease ────── */
    {
      ref: '2 Chronicles 21:16–19',
      title: 'The Disease That Consumed Him From Within',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 16,
              spans: [
                t('Moreover the Lord stirred up against Jehoram the spirit of the Philistines, and of the Arabians that are beside the Ethiopians:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And they came up into Judah, and brake into it, and carried away all the substance that was found in the king&apos;s house, and his sons also, and his wives; so that there was never a son left him, save Jehoahaz the youngest of his sons.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And after all this the Lord smote him in his bowels with an '),
                hy('incurable disease', 'chron21-incurable'),
                t('.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And it came to pass, that in process of time, after the end of two years, his bowels fell out by reason of his sickness: so he died of sore diseases. And his people made no '),
                hg('burning for him', 'chron21-burning'),
                t(', like the burning of his fathers.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chron21-incurable',
          html:
            'The plague comes. The Philistines and Arabians break into Judah, strip the palace, carry away his wives and sons — all except the youngest, Jehoahaz. The judgment Elijah predicted unfolds. And then, the final blow: God smites Jehoram in his bowels with a disease that cannot be cured. For two years, the king wastes away. His body deteriorates in a way that cannot be hidden or healed. Every day brings more agony. Every day, more public humiliation.',
        },
        {
          kind: 'commentary',
          id: 'chron21-burning',
          html:
            'When Jehoram dies, there is no state funeral. His people make no burning for him — no funeral pyre, no honor, no public mourning. The text notes that this was the custom for the kings before him. But not for Jehoram. He dies unmourned, unremembered, despised. The final indignity is not the disease itself, but the aftermath: a king so hated that his own people do not grant him the dignity of a proper death rite.',
        },
        {
          kind: 'christ',
          id: 'chron21-christ',
          title: 'Christ Connection — The King Who Laid Down His Life for His Brethren',
          html:
            'Jehoram killed his brothers to secure his throne. The True King, by contrast, laid down His own life for His brethren — not to defend His power, but to give life. In Hebrews 2:11, Paul writes that Christ "is not ashamed to call them brethren" — those who believe in Him. Where Jehoram saw his brothers as threats, Christ saw them as beloved, worthy of His sacrifice. And unlike Jehoram, who was consumed by disease and forgotten, Christ rose from the dead and ascended to glory. He alone is the King who can be trusted with power, because He alone refuses to use it for self-preservation.',
        },
        {
          kind: 'carry',
          html:
            'How do you handle the people closest to you when they might be threats to your status or security? Do you see them as rivals to be eliminated, or as people worthy of your sacrifice? The disease of Jehoram began in his heart — in his willingness to kill his own flesh — and spread until it consumed his whole body. But the reverse is also true: a heart oriented toward others, toward laying down your life for them, produces health even in the midst of suffering.',
        },
        {
          kind: 'reflection',
          id: 'refl-disease',
          prompt: 'Jehoram&apos;s disease was incurable — no remedy, no escape. What are the "incurable" consequences you have witnessed from a refusal to repent or change course?',
        },
      ],
    },

    /* ─── 2 Chronicles 21:19–20 — "Without Being Desired" ──────────────── */
    {
      ref: '2 Chronicles 21:19–20',
      title: 'The Saddest Epitaph in Scripture',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 19,
              spans: [
                t('And it came to pass, that in process of time, after the end of two years, his bowels fell out by reason of his sickness: so he died of sore diseases. And his people made no burning for him, like the burning of his fathers.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Thirty and two years old was he when he began to reign, and he reigned in Jerusalem eight years, and '),
                hp('departed without being desired', 'chron21-without-desired'),
                t('. And he was buried in the city of David, but not in the sepulchres of the kings.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chron21-without-desired',
          html:
            'The phrase "departed without being desired" stands alone as one of the cruelest judgments in Scripture. Not "died in battle." Not "was slain by enemies." Simply: no one wanted him to live. No one wished he would stay. When he was gone, there was no keening, no "would that he were with us." The kingdom that he had bloodied and plundered to secure was glad to be rid of him. He was buried in the city of David — the location of royal tombs — but "not in the sepulchres of the kings." Even in death, he was excluded, marked as less than his predecessors, less than those whose names would be remembered with honor.',
        },
        {
          kind: 'carry',
          html:
            'There are two ways to measure a life: by the power you gathered and the enemies you defeated, or by the love you left behind. Jehoram chose power. He secured it through murder, maintained it through idolatry, and lost it because no one respected him. When he died, there was no one to mourn. This is not God&apos;s final word on any life — repentance can always turn things around — but it is a warning. The legacy you leave is not built on domination. It is built on whether people were better for having known you.',
        },
        {
          kind: 'reflection',
          id: 'refl-desired',
          prompt: '"Departed without being desired." If your life ended today, would you be missed? By whom? What would need to change in how you treat people close to you for the answer to be yes?',
        },
      ],
    },

    /* ─── Divider ──────────────────────────────────────────────────────── */
    {
      blocks: [{ kind: 'divider' }],
    },

    /* ─── Closing Reflection & Share ───────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'reflection',
          id: 'chron21-final',
          prompt: 'The Lord would not destroy the house of David because of covenant — even though Jehoram walked away from it. Where do you see God&apos;s patience and stubborn mercy in the face of human rebellion?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 21',
    quote:
      'Jehoram departed without being desired — the saddest epitaph in Scripture. Yet even in his darkness, the covenant lamp of David did not go out. God&apos;s mercy holds even when we turn away.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 21 · Study Guide',
  },

  hasHebrew: true,
};
