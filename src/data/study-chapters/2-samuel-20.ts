import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Samuel 20 — Sheba&apos;s Revolt and the Wise Woman of Abel
 *
 * After Absalom&apos;s failed rebellion, the kingdom stands reunified but fragile.
 * A new threat emerges — Sheba the Benjamite, crying "We have no part in David!"
 * His slogan will echo across a generation, splitting the kingdom under Rehoboam.
 * But here, Joab&apos;s ruthlessness and a woman&apos;s wisdom preserve the people.
 * The chapter shows the cost of power held by the sword, and hints at a King
 * who will not murder His rivals — who will lay down His life instead.
 */
export const SAMUEL_2_20: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 20,

  intros: [
    'The kingdom is whole again, but the wounds of Absalom&apos;s rebellion run deep. Judah and Israel have found their way back together — but their unity is fragile. In this moment, a man of Belial raises a new cry, almost identical to the one that will tear the kingdom apart forty years later. "We have no part in David," he cries. "Every man to his tents, O Israel." The rebellion is small, quickly crushed. But it foreshadows something larger — the eventual split of north from south that will last until the exile.',
    'As the chapter unfolds, we see the collateral damage of Absalom&apos;s rebellion — ten concubines confined to widowhood for life, innocent suffering for a sin not theirs. We watch Joab move down yet another rival, this time Amasa, with a sword hidden in his garment. And we encounter one of Scripture&apos;s most remarkable figures: a wise woman who saves a city by speaking what the people need to hear. She stands in a tradition of female wisdom that echoes through the Bible — from Deborah to Esther to the Samaritan woman at the well. Her voice reminds us that wisdom is not found only in armies or in power. Sometimes it is found in the counsel of those the powerful overlook.',
  ],

  opener: {
    matchArtist: /tissot|rembrandt|delacroix/i,
    matchTitle: /sheba|david|joab|rebellion|wise woman/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 2 Samuel 20',
    quote:
      'When a new rebel cries "We have no part in David," the kingdom is rent again. Joab kills a rival with a hidden sword. But a wise woman of Abel speaks truth that saves her city — showing that wisdom, not the sword, preserves the people.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 20 · Study Guide',
  },

  sections: [
    /* ─── 2 Samuel 20:1–2 — Sheba&apos;s Cry ────────────────────────────── */
    {
      ref: '2 Samuel 20:1–2',
      title: 'Sheba&apos;s Cry: "We Have No Part in David"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 1,
              spans: [
                t('And there happened to be a man of '),
                hy('Belial', 'c-belial'),
                t(', whose name was '),
                hg('Sheba the son of Bichri', 'c-sheba'),
                t(', a Benjamite: and he blew a trumpet, and said, We have no part in David, neither have we inheritance in the son of Jesse: every man to his tents, O Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-belial',
          title: 'Belial — "Worthlessness" (בְּלִיַּעַל)',
          script: 'בְּלִיַּעַל',
          translit: '<strong>Belial</strong> · worthlessness, wickedness, destruction',
          description:
            'The word does not name a demon, but a condition — a state of moral emptiness, a man without worth or restraint. Sheba is "a man of Belial" not because he serves a dark master, but because he is unmoored from any tether to loyalty or truth. His rebellion will come from nothing but his own grasping.',
        },
        {
          kind: 'commentary',
          id: 'c-sheba',
          html:
            'Sheba is a Benjamite — part of Saul&apos;s old tribe, the tribe that lost the kingdom when David was chosen. The deep resentment lingers. And Sheba&apos;s cry is not new. Listen: "We have no part in David, neither have we inheritance in the son of Jesse." Nearly identical words will be shouted over the corpse of King Solomon&apos;s son, forty years from now, when the kingdom splits into north and south — "What portion have we in David? Neither have we inheritance in the son of Jesse: to your tents, O Israel" (1 Kings 12:16). Sheba foreshadows the final break. He plants the very seed that will grow into the division that lasts until the Babylonian captivity.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 2,
              spans: [
                t('So every man of Israel went up from after David, and followed Sheba the son of Bichri: but the men of Judah clave unto their king, from Jordan even to Jerusalem.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fracture',
          html:
            'The moment is a watershed. Israel — the northern tribes — breaks away from David. Judah holds fast. The fracture line runs along tribal identity, along old wounds, along a resentment so deep that it takes only one man with a trumpet to rend the kingdom in two. The unity that came after Absalom is revealed as fragile. A single voice can tear it open again.',
        },
        {
          kind: 'carry',
          html:
            'You may have known a moment when unity was broken by a single voice — a word spoken in anger, a lie that divided people who had been together, a moment when "we" suddenly became "us and them." The speed with which Sheba&apos;s cry splinters the kingdom shows how thin the skin of community is. But the rest of the chapter will show what can hold it together — not the sword alone, but wisdom, truth, and the willingness of someone to speak it.',
        },
        {
          kind: 'reflection',
          id: 'sheba-cry',
          prompt:
            'When have you seen a community or relationship broken by a word or slogan? What would it take for people to choose unity over the pull of tribal loyalty or resentment?',
        },
      ],
    },

    /* ─── 2 Samuel 20:3 — The Confined Concubines ────────────────────────── */
    {
      ref: '2 Samuel 20:3',
      title: 'The Ten Concubines Left Bereft',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 3,
              spans: [
                t('And David came to his house at Jerusalem; and the king took the ten women his concubines, whom he had left to keep the house, and put them in '),
                hg('ward', 'c-ward'),
                t(', and '),
                hg('fed them', 'c-fed'),
                t(', but '),
                hg('went not in unto them', 'c-went-not'),
                t('. So they were shut up unto the day of their death, living in widowhood.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ward',
          html:
            'David confines the ten concubines to a house — they are guarded, imprisoned in their own home. They are not killed, but they are cut off from life. In the ancient world, a concubine without a king was a woman without status, without future, without escape.',
        },
        {
          kind: 'commentary',
          id: 'c-fed',
          html:
            'David provides for them — they are fed, cared for in the material sense. He is not cruel in the way kings often were. But he feeds them as one might feed animals in a pen. They are alive, but their lives are over.',
        },
        {
          kind: 'commentary',
          id: 'c-went-not',
          html:
            'David does not go in unto them. He does not take them as wives or concubines again. This is significant — he has cut off even the possibility of future children, future hope. They are suspended in time, neither dead nor living, neither free nor enslaved in the normal sense. They live as widows, though their husband still draws breath.',
        },
        {
          kind: 'commentary',
          id: 'c-innocent',
          html:
            'These women did nothing. They were left in David&apos;s house, and Absalom defiled them (16:22) — an act of public humiliation meant to destroy his father. Now they pay the price for a sin they did not commit, inflicted upon them by a son they did not raise, set in stone by a father who cannot face the wound. Their lifelong confinement is the bitter fruit of Absalom&apos;s rebellion — innocent suffering for a sin not their own.',
        },
        {
          kind: 'carry',
          html:
            'You may know the weight of paying for someone else&apos;s sin. The person who spoke a lie about you and destroyed your reputation. The divorce that upended your children&apos;s world through no fault of theirs. The economic collapse that stole your parents&apos; retirement. The disease inherited from a family line. These ten women live out the rest of their lives confined, not by a sentence they were given, but by a wound they did not cause. There is a grief in Scripture for those who suffer for sins not their own — a grief that calls out to God. And God sees it.',
        },
        {
          kind: 'reflection',
          id: 'innocent-suffering',
          prompt:
            'Is there a place in your life where you have borne the weight of someone else&apos;s choice? What would it look like to grieve that weight, and to trust that God sees it?',
        },
      ],
    },

    /* ─── 2 Samuel 20:4–12 — Joab Murders Amasa ───────────────────────────── */
    {
      ref: '2 Samuel 20:4–12',
      title: 'Joab&apos;s Hand (Again)',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 4,
              spans: [
                t('Then said the king to Amasa, Assemble me the men of Judah within three days, and be thou here present.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('So Amasa went to assemble the men of Judah: but he tarried longer than the set time which he had appointed him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-amasa',
          html:
            'Amasa is David&apos;s general now — chosen to replace Joab. This is an extraordinary appointment. Amasa had been Absalom&apos;s general during the rebellion (2 Sam. 17:25). He stood on the other side. But David, in his desire to heal the wounds of the kingdom, has chosen him. Trust him. Raise him to power. And Amasa is slow to muster the men. Perhaps he is overwhelmed. Perhaps he is testing his authority. Or perhaps he simply cannot move as quickly as the moment demands.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 6,
              spans: [
                t('And David said to Abishai, Now shall Sheba the son of Bichri do us more harm than did Absalom: take thou thy lord&apos;s servants, pursue after him, lest he get him fenced cities, and escape us.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abishai',
          html:
            'Impatient, David turns to Abishai — Joab&apos;s brother. The chain of command bypasses Amasa. And Abishai takes an army with him. One general is being sidelined for another. The kingdom is not at peace. The old lines of power are asserting themselves.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 7,
              spans: [
                t('So Joab&apos;s men and the Cherethites and the Pelethites, and all the mighty men went out after him: and they departed out of Jerusalem, to pursue after Sheba the son of Bichri.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('When they were at the great stone in Gibeon, Amasa went before them. And Joab&apos;s garment that he had put on was girded unto him, and upon it a girdle with a sword fastened upon his loins in the sheath thereof; as he went forth it fell out.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gibeon',
          html:
            'They meet at Gibeon — a place laden with memory. It was here that Joab first encountered Abner, Saul&apos;s general (2 Sam. 2:12–17). And now, Joab moves toward Amasa with the same purpose he moved then. Amasa is in his way. Amasa has been raised above him. Amasa is a rival who will not last.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 9,
              spans: [
                t('And Joab said to Amasa, Art thou in health, my brother? And Joab took Amasa by the beard with his right hand to '),
                hg('kiss him', 'c-kiss'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kiss',
          html:
            'Joab greets Amasa as a brother and moves to kiss him — the gesture of greeting, of peace, of covenant. But the gesture masks the knife. Judas will use the same greeting to betray Jesus: "Whomsoever I shall kiss, that same is he; take him" (Matt. 26:48). The kiss of greeting becomes the sign of death.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 10,
              spans: [
                t('But Amasa took no heed to the sword that was in Joab&apos;s hand: so he smote him therewith in the fifth rib, and shed out his bowels to the ground, and struck him not again; and he died. So Joab and Abishai his brother pursued after Sheba the son of Bichri.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-the-sword',
          html:
            'Amasa sees no sword in Joab&apos;s hand because it fell out of the sheath as Joab walked (v. 8). He is unsuspecting. The strike is surgical and final — a single blow to the fifth rib, the wound that undoes. Joab does not strike again because one blow is enough. He knows his craft.',
        },
        {
          kind: 'commentary',
          id: 'c-joab-pattern',
          html:
            'This is the third time Joab has dispatched a rival. He killed Abner with a kiss (2 Sam. 3:27). He contrived the death of Uriah (2 Sam. 11:14–15, with David&apos;s connivance). He killed Absalom, hanging him in the oak (2 Sam. 18:14). Now Amasa. Joab is a dangerous man — brilliant, ruthless, absolutely necessary to David&apos;s kingdom and absolutely uncontrolled by any law but his own. He is a picture of power divorced from mercy, of the general who serves the king by becoming a murderer in his own right.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 11,
              spans: [
                t('And one of Joab&apos;s men stood by him, and said, He that favoureth Joab, and he that is for David, let him go after Joab.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And Amasa wallowed in blood in the midst of the highway. And when the man saw that all the people stood still, he removed Amasa out of the highway into the field, and cast a cloth upon him, when he saw that every one that came by him stood still.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-amasa-removed',
          html:
            'Amasa lies bleeding in the road — a corpse that freezes the pursuit. His body becomes an obstacle. Someone (one of Joab&apos;s men) removes him from the highway into the field, covers him with a cloth, and the army moves on. The message is stark: Joab has taken command. The rival is gone. The moment of hesitation is erased. Power has shifted, and the pursuit continues.',
        },
        {
          kind: 'carry',
          html:
            'Power can be won by the sword, but at a cost. Joab is brilliant, loyal to David in his own way, and willing to do what must be done. But he has also become a law unto himself. He kills who he wishes, and David, for all his authority, cannot truly control him. Later, near the end of his life, David will finally move against Joab — but only from his deathbed (1 Kings 2:5–6). By then Joab is beyond restraint. The lesson is stark: those who hold power by ruthlessness tend to become unaccountable. And that path leads nowhere good.',
        },
        {
          kind: 'reflection',
          id: 'joab-power',
          prompt:
            'Where in your life have you seen or wielded power that relied on fear or ruthlessness rather than justice? What would it look like to hold authority differently?',
        },
      ],
    },

    /* ─── 2 Samuel 20:13–22 — The Wise Woman of Abel ─────────────────────── */
    {
      ref: '2 Samuel 20:13–22',
      title: 'The Woman Who Saved Her City',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 13,
              spans: [
                t('When he was removed out of the highway, all the people went on after Joab, to pursue after Sheba the son of Bichri.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And he went through all the tribes of Israel unto Abel, and to Beth-maachah, and all the Berites: and they gathered together, and went also after him.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And they came and besieged him in Abel of Beth-maachah, and cast up a bank against the city, and it stood in the trench: and all the people that were with Joab battered the wall, to throw it down.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abel',
          html:
            'Abel of Beth-maachah is a walled city in northern Israel, where Sheba has fled and holed up. Joab surrounds it, builds siege ramps, batters the walls. The city will fall. It is only a matter of time and strength. No one can help the people inside.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 16,
              spans: [
                t('Then cried a '),
                hg('wise woman', 'c-wise-woman'),
                t(' out of the city, Hear, hear; say, I pray you, unto Joab, Come near hither, that I may speak with thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wise-woman',
          html:
            'A woman calls out from the walls. She is unnamed, unidentified by lineage or status — simply "a wise woman." But the text announces her character before she speaks. In 2 Samuel 14, another wise woman — the woman of Tekoah — persuaded David to restore Absalom. Here is a second woman whose wisdom will turn the course of events. Wisdom is not found only in kings and generals. Sometimes it is found in a woman whose name the Bible does not record, who speaks from the walls of a condemned city.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 17,
              spans: [
                t('And when he was come near unto her, the woman said, Art thou Joab? And he said, I am he. Then she said to him, Hear the words of thine handmaid.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And she spake, saying, They were wont to speak in old time, saying, They shall surely ask counsel at Abel: and so they ended the matter.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-old-time',
          html:
            'The woman reminds Joab of Abel&apos;s reputation. "They shall surely ask counsel at Abel." The city was known for wisdom. When disputes arose, people sought Abel for counsel. "And so they ended the matter" — counsel given, the matter was settled. The woman is invoking memory, history, precedent. Abel is not just another city. It is a city of wisdom.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 19,
              spans: [
                t('I am one of them that are '),
                hg('peaceable and faithful in Israel', 'c-peaceable'),
                t(': thou seekest to destroy a city and a '),
                hg('mother in Israel', 'c-mother-in-israel'),
                t(': why wilt thou swallow up the inheritance of the Lord?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-peaceable',
          html:
            'The woman identifies herself: "I am one of them that are peaceable and faithful in Israel." She is not Sheba. She is not a rebel. She is one of the people Joab is supposed to protect, not destroy.',
        },
        {
          kind: 'commentary',
          id: 'c-mother-in-israel',
          html:
            'Abel is a "mother in Israel" — a city that gives life, that nurses, that nurtures the people. The phrase conjures an image of motherhood, care, lineage. To destroy Abel is to destroy something maternal in Israel itself. The woman is framing this not as a military question but as a moral one. You are going to kill a mother. Is that what you mean to do?',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 20,
              spans: [
                t('And Joab answered and said, Far be it, far be it from me, that I should swallow up or destroy.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('The matter is not so: but a man of mount Ephraim, Sheba the son of Bichri by name, hath '),
                hg('lifted up his hand against the king', 'c-lifted-up'),
                t(', even against David: deliver him only, and I will depart from the city.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lifted-up',
          html:
            'Joab responds with clarity. He does not deny the truth the woman has spoken. "Far be it from me" — he says it twice, emphasizing the point. But he reframes the issue. This is not about destroying a city. It is about catching one man — Sheba — who has "lifted up his hand against the king." Deliver the rebel, and the siege ends. The city is spared.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 22,
              spans: [
                t('And the woman said unto Joab, Behold, his head shall be thrown to thee over the wall. So the woman went to all the people in her wisdom. And they cut off the head of Sheba the son of Bichri, and cast it out to Joab. And Joab blew a trumpet, and retired from the city, every man to his tent. And Joab returned to Jerusalem unto the king.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-the-head',
          html:
            'The woman goes to the people. No argument. No debate. She simply speaks, and the people understand. They cut off Sheba&apos;s head and cast it over the wall. The rebellion is ended. The city is spared. Joab sounds the trumpet of retreat, and the army withdraws. The woman has done what armies could not do without bloodshed — she has turned the people, spoken to their conscience, reminded them of who they are.',
        },
        {
          kind: 'christ',
          id: 'wisdom-not-sword',
          title: 'Christ Connection — Wisdom and the Sword',
          html:
            'Jesus will face the same choice as Joab faces with Abel. When the disciples draw swords to defend Him in the garden, He says: "Put up again thy sword into his place: for all they that take the sword shall perish with the sword" (Matt. 26:52). The woman of Abel teaches through words. Joab teaches through siege. The woman saves her city through speaking truth. In the gospel, Christ will come not as Joab, with sword and siege, but as the woman of Abel — with words that cut deeper than any blade, with wisdom that calls people to see what they truly are. The very rebels who should deserve destruction will instead be invited into His kingdom. Not by the sword, but by the voice of wisdom calling from the wall.',
        },
        {
          kind: 'carry',
          html:
            'You may be facing a conflict where the solution seems to require force — a demand that must be met, a boundary that must be enforced, a wrong that must be punished. The instinct to deploy power is real. But the woman of Abel offers another way: the way of speaking truth that the people themselves can hear and act on. She does not trick Joab or manipulate him. She simply reminds him what he already knows — that some things are sacred, that some cities are mothers, that some people are faithful. And the people, hearing her, make the choice themselves. That is wisdom.',
        },
        {
          kind: 'reflection',
          id: 'wise-woman-abel',
          prompt:
            'Where in your life do you tend to reach for force or power to solve a problem? Where might wisdom — speaking truth to the people involved — work better than enforcement?',
        },
      ],
    },

    /* ─── 2 Samuel 20:23–26 — The Kingdom Reorganized ──────────────────────── */
    {
      ref: '2 Samuel 20:23–26',
      title: 'David&apos;s Kingdom in Order',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 23,
              spans: [
                t('Now Joab was over all the host of Israel: and '),
                hg('Benaiah the son of Jehoiada was over the Cherethites and the Pelethites', 'c-benaiah'),
                t(':'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And Adoram was over the tribute: and '),
                hg('Jehoshaphat the son of Ahilud was the recorder', 'c-jehoshaphat'),
                t(':'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And '),
                hg('Sheva was the scribe', 'c-sheva'),
                t(': and '),
                hg('Zadok and Abiathar were the priests', 'c-priests'),
                t(':'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And '),
                hg('Ira the Jairite was a chief ruler about David', 'c-ira'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-benaiah',
          html:
            'Benaiah is over the Cherethites and Pelethites — David&apos;s foreign bodyguard, loyal directly to him. Benaiah will later serve David&apos;s son Solomon and help secure his throne. He is a younger power, rising.',
        },
        {
          kind: 'commentary',
          id: 'c-jehoshaphat',
          html:
            'Jehoshaphat is the recorder — the keeper of records, the one who chronicles the kingdom&apos;s decisions and deeds. The recorder is a keeper of memory.',
        },
        {
          kind: 'commentary',
          id: 'c-sheva',
          html:
            'Sheva is the scribe — not the same as the recorder. The scribe handles the king&apos;s correspondence, drafts decrees, keeps the administrative machinery moving. Knowledge and writing are concentrated in a small group.',
        },
        {
          kind: 'commentary',
          id: 'c-priests',
          html:
            'Zadok and Abiathar are the priests. Abiathar has been with David since the beginning — a refugee priest who fled Saul. Zadok is newer to David&apos;s service, rising in prominence. Eventually Abiathar will fall and Zadok will remain, a signal of the succession to come (Solomon will back Zadok, 1 Kings 2:35).',
        },
        {
          kind: 'commentary',
          id: 'c-ira',
          html:
            'Ira the Jairite is listed as "a chief ruler about David." His exact role is unclear — perhaps a counselor, perhaps a trusted lieutenant. He appears in the lists of David&apos;s mighty men. Presence in these lists is a form of honor, a recording of loyalty and service.',
        },
        {
          kind: 'commentary',
          id: 'c-notice',
          html:
            'Notice what is remarkable: Joab is over all the host, but he is not the whole of government. There are scribes, priests, recorders, tribute officials, foreign bodyguards. There is a kingdom — structured, layered, with multiple lines of authority. The chaos of the rebellion has given way to order. The succession is being prepared without being named. Benaiah is rising. Zadok is rising. The old men (Abiathar) are beginning to fade. And through it all, David remains the figure around whom everything is organized.',
        },
        {
          kind: 'carry',
          html:
            'The administrative list may seem dry, but it is Scripture&apos;s way of saying: "The kingdom is whole. The wounds are being bound. The machine is functioning." After the trauma of Absalom&apos;s rebellion, after the quick strike of Joab&apos;s sword, after the wisdom of an unnamed woman saving a city — the chapter ends with order restored. Not perfect. Not without danger. But structured, intentional, moving forward. Sometimes the work of rebuilding is not heroic. It is simply the work of putting the right people in the right roles and trusting the system to hold.',
        },
      ],
    },
  ],
};
