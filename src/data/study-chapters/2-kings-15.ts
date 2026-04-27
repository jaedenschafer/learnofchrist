import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 15 — The Collapse of Israel and the Warning of Kings
 *
 * This chapter is one of the most sobering in the book of Kings. The northern
 * kingdom of Israel descends into chaos — five kings in rapid succession, three
 * of them murdered. Each "did evil in the sight of the Lord." Their tribute is
 * paid to foreign powers. Their people are deported. And in the south, even good
 * kings like Jotham do not fully turn their hearts from idolatry. The warning
 * is clear: kingdoms that turn from God do not last. But there is also a promise
 * woven through this chapter: the line of David endures, while Israel is broken.
 * In the chaos, we see the faithfulness of God to His covenant — not to spare
 * the wicked from judgment, but to preserve a remnant and a promise.
 */
export const KINGS_2_15: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 15,

  intros: [
    'By the time we reach 2 Kings 15, the northern kingdom of Israel has begun its final decline. Three centuries after Solomon&apos;s death split the kingdom in two, the Ten Tribes are falling into a spiral of violence, idolatry, and political collapse. In this single chapter, the northern throne passes through five hands. Three of those kings are murdered by men they trusted. The pattern is one of doom: each king "did evil in the sight of the Lord," and each is overturned or destroyed in turn.',
    'Meanwhile, in the south, Judah is more stable — the Davidic covenant continues to hold. Even the good kings, however, do not fully turn the people from idolatry. High places remain. The worship of God is compromised by the worship of idols. And when a powerful foreign king, Tiglath-pileser of Assyria, demands tribute, Israel pays in both gold and blood: cities are lost, and people are deported. The exile has begun.',
    'This chapter shows us the consequence of turning away from God. Kingdoms built on anything less than His foundation crack and collapse. But it also shows us the faithfulness of God: the Davidic line is preserved even as Israel shatters. Through all the chaos, a remnant remains. And that remnant is where the promise of a coming King rests.',
  ],

  sections: [
    /* ─── 2 Kings 15:1–7 — Azariah&apos;s Presumption ────────────────────────── */
    {
      ref: '2 Kings 15:1–7',
      title: 'Azariah&apos;s Presumption and Plague',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(1, 'In the twenty and seventh year of Jeroboam king of Israel began Azariah son of Amaziah king of Judah to reign.'),
            plain(2, 'Sixteen years old was he when he began to reign, and he reigned two and fifty years in Jerusalem. And his mother&apos;s name was Jecoliah of Jerusalem.'),
            {
              number: 3,
              spans: [
                t('And he did that which was right in the sight of the Lord, according to all that his father Amaziah had done;'),
              ],
            },
            plain(4, 'Save that the high places were not removed: the people sacrificed and burnt incense still on the high places.'),
            {
              number: 5,
              spans: [
                t('And the Lord smote the king, so that he was a '),
                hy('leper', 'k15-leper'),
                t(' unto the day of his death, and dwelt in a several house. And Jotham the king&apos;s son was over the household, judging the people of the land.'),
              ],
            },
            plain(6, 'And the rest of the acts of Azariah, and all that he did, are they not written in the book of the chronicles of the kings of Judah?'),
            plain(7, 'So Azariah slept with his fathers; and they buried him with his fathers in the city of David: and Jotham his son reigned in his stead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'azariah-good-king',
          html:
            'Azariah (also called Uzziah in 2 Chronicles 26) is one of Judah&apos;s better kings. He "did that which was right in the sight of the Lord." His long reign—52 years—brought periods of prosperity and strength. Yet like many good kings before him, he left the high places standing. The compromise persists. The people worship God, but they also worship on the mountaintop shrines where idolatry thrives.',
        },
        {
          kind: 'hebrew',
          id: 'k15-tsaraat',
          title: 'Tsaraat — "Leprosy" or "Skin Disease"',
          script: 'צָרַ֫עַת',
          translit: '<strong>Tsaraat</strong> · leprosy; uncleanness; a disease that separates',
          description:
            'The Hebrew word tsaraat refers to a serious skin disease that rendered a person ritually unclean and cut them off from the community. Under the law, a leper lived "a several house"—apart, isolated, unfit for the temple or public life. Azariah&apos;s affliction is not random sickness. It is a judgment from the Lord.',
        },
        {
          kind: 'commentary',
          id: 'k15-leper',
          html:
            'In 2 Chronicles 26, we learn more: Azariah burned incense in the temple—a priestly act reserved for the Levitical priesthood. He presumed on the office that belonged to another. The high priest Azariah confronted him: "It appertaineth not unto thee, Azariah, to burn incense unto the Lord." But Azariah grew angry and refused to listen. Then, suddenly, leprosy broke out on his forehead. He was stricken in the temple itself. His presumption cost him his reign and his health. He lived the rest of his life cut off from his own city, his own palace, his own people.',
        },
        {
          kind: 'christ',
          id: 'k15-presumption-christ',
          title: 'Christ Connection — The True Priest and King',
          html:
            'Azariah presumed on an office that was not his. He tried to do the work of a priest without being called to it. Jesus, by contrast, is both King and Priest—called by God, anointed with the Spirit, authorized by heaven to do what no other can do. Hebrews 5:4–5 speaks directly to this: "And no man taketh this honour unto himself, but he that is called of God, as was Aaron. So also Christ glorified not himself to be made an high priest; but he that said unto him, Thou art my Son, To day have I begotten thee." Christ&apos;s authority is not presumed; it is given by God the Father. And His priesthood is eternal, not cut short by judgment.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age that tells us we can be anything, do anything, fill any role we imagine. But there is wisdom in boundaries. God has given us callings, gifts, and offices that are not ours to assume on our own. Azariah&apos;s leprosy teaches a hard lesson: presumption on God&apos;s work carries a cost. What offices or roles have you been tempted to take up that were not given to you? Where can you wait for God&apos;s calling instead of rushing ahead on your own?',
        },
        {
          kind: 'reflection',
          id: 'k15-presumption-refl',
          prompt: 'Azariah was a good king who did many things right, yet he was struck with leprosy for overstepping his role. Where in your own life have you seen good intentions lead to harm because you did not respect a boundary or calling that belonged to someone else?',
        },
      ],
    },

    /* ─── 2 Kings 15:8–31 — The Collapse of Israel ──────────────────────── */
    {
      ref: '2 Kings 15:8–12',
      title: 'Zachariah and the End of Jehu&apos;s Line',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(8, 'In the thirty and eighth year of Azariah king of Judah did Zachariah the son of Jeroboam reign over Israel in Samaria six months.'),
            plain(9, 'And he did evil in the sight of the Lord, as his fathers had done: he departed not from the sins of Jeroboam the son of Nebat, who made Israel to sin.'),
            {
              number: 10,
              spans: [
                t('And Shallum the son of Jabesh conspired against him, and '),
                hg('smote him before the people', 'k15-zachariah-death'),
                t(', and slew him, and reigned in his stead.'),
              ],
            },
            plain(11, 'And the rest of the acts of Zachariah, behold, they are written in the book of the chronicles of the kings of Israel.'),
            plain(12, 'This is the word of the Lord which he spake unto Jehu, saying, Thy sons shall sit on the throne of Israel unto the fourth generation. And so it came to pass.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'k15-zachariah-death',
          html:
            'Zachariah is the fourth generation from Jehu—the son of a son of a son of Jehu. He reigns for only six months before Shallum assassinates him publicly, "before the people." The dynasty of Jehu, which lasted nearly 100 years, ends in violence. With his death, God&apos;s word given to Jehu is fulfilled: four generations would sit on the throne, no more (2 Kings 10:30). After Zachariah, the throne becomes unstable. Murder begets murder. No king is safe.',
        },
        {
          kind: 'commentary',
          id: 'k15-jehu-dynasty',
          html:
            'Jehu was anointed to destroy the house of Ahab and to root out Baal worship. He was zealous—perhaps too zealous, perhaps not quite sincere. The Lord promised him that his sons would sit on the throne for four generations. But He did not promise that those sons would be righteous. Each of Zachariah&apos;s forefathers in Jehu&apos;s line "departed not from the sins of Jeroboam." They continued the worship of the golden calves. They did evil. And now the promise is complete, the dynasty is over.',
        },
        {
          kind: 'carry',
          html:
            'We can do many things right—tear down idols, defend the faith, clean house spiritually—yet leave something unfinished. Jehu did not complete the work. His zeal was not balanced by genuine transformation of the heart or by teaching his children to follow God. His line inherited his position but not his calling. In your own life, what spiritual work are you doing that you might not be fully completing in your own household or heart?',
        },
        {
          kind: 'reflection',
          id: 'k15-zachariah-refl',
          prompt: 'Zachariah inherited a dynasty founded by Jehu, yet the dynasty fell in his generation. What inheritance—spiritual or otherwise—have you received from those who came before you? Are you building on it or abandoning it?',
        },
      ],
    },

    /* ─── 2 Kings 15:13–16 — Shallum&apos;s Brief Reign ────────────────────── */
    {
      ref: '2 Kings 15:13–16',
      title: 'Shallum&apos;s One-Month Reign',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(13, 'Shallum the son of Jabesh began to reign in the nine and thirtieth year of Uzziah king of Judah; and he reigned a full month in Samaria.'),
            {
              number: 14,
              spans: [
                t('For Menahem the son of Gadi went up from Tirzah, and came to Samaria, and smote Shallum the son of Jabesh in Samaria, and '),
                hg('slew him', 'k15-shallum-death'),
                t(', and reigned in his stead.'),
              ],
            },
            plain(15, 'And the rest of the acts of Shallum, and his conspiracy which he made, behold, they are written in the book of the chronicles of the kings of Israel.'),
            {
              number: 16,
              spans: [
                t('Then Menahem smote Tiphsah, and all that were therein, and the coasts thereof from Tirzah: because they opened not to him, therefore he smote it; and all the women therein that were with child he '),
                hg('ripped up', 'k15-tiphsah-cruelty'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'k15-shallum-death',
          html:
            'Shallum murders Zachariah to take the throne. But his reign lasts only one month. Menahem, a military commander, raises an army from Tirzah and marches on Samaria. He kills Shallum and takes the throne. The pattern is vicious: conspiracy, murder, replacement, and then the cycle repeats. The throne itself becomes a death sentence.',
        },
        {
          kind: 'commentary',
          id: 'k15-tiphsah-cruelty',
          html:
            'Menahem&apos;s brutality is staggering. The city of Tiphsah refuses to open its gates to him, so he destroys it utterly—killing even the women who are pregnant, ripping open their wombs. This is not war; it is terror. Menahem uses slaughter to consolidate power and send a message: resistance will be met with annihilation. The kingdom of Israel is descending not just into political chaos, but into moral collapse.',
        },
        {
          kind: 'carry',
          html:
            'Power seized through violence perpetuates violence. Menahem had to hold the throne by fear because he had no legitimate claim to it. He ruled through terror because he had no foundation of justice or righteousness. In our own time, we see the same pattern: those who rise by betrayal must rule by intimidation, or they will be overthrown. True authority rests on something deeper than force. Where have you seen the consequences of power grabbed without consent or justice?',
        },
        {
          kind: 'reflection',
          id: 'k15-menahem-refl',
          prompt: 'Menahem seized power and held it through cruelty. What does it cost a society when leaders resort to terror to keep their throne? Have you ever been in a situation where you witnessed someone trying to maintain control through fear?',
        },
      ],
    },

    /* ─── 2 Kings 15:17–22 — Menahem and the Tribute to Pul ────────────── */
    {
      ref: '2 Kings 15:17–22',
      title: 'Menahem&apos;s Tribute and Subjugation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(17, 'In the nine and thirtieth year of Azariah king of Judah began Menahem the son of Gadi to reign over Israel, and reigned ten years in Samaria.'),
            plain(18, 'And he did evil in the sight of the Lord: he departed not all his days from the sins of Jeroboam the son of Nebat, who made Israel to sin.'),
            {
              number: 19,
              spans: [
                t('And '),
                hy('Pul', 'k15-pul'),
                t(' the king of Assyria came against the land: and Menahem gave Pul a thousand talents of silver, that his hand might be with him to confirm the kingdom in his hand.'),
              ],
            },
            plain(20, 'And Menahem exacted the money of Israel, even of all the mighty men of wealth, of each man fifty shekels of silver, to give to the king of Assyria. So the king of Assyria turned back, and stayed not there in the land.'),
            plain(21, 'And the rest of the acts of Menahem, and all that he did, are they not written in the book of the chronicles of the kings of Israel?'),
            plain(22, 'And Menahem slept with his fathers; and Pekahiah his son reigned in his stead.'),
          ],
        },
        {
          kind: 'hebrew',
          id: 'k15-pul-name',
          title: 'Pul — Tiglath-Pileser III of Assyria',
          script: 'פּוּל',
          translit: '<strong>Pul</strong> · another name for Tiglath-pileser; a fearsome Assyrian king',
          description:
            'Pul (also called Tiglath-pileser III) was one of Assyria&apos;s mightiest kings. He expanded the empire through ruthless conquest, mass deportation, and tribute. The appearance of his armies was terrifying—well-armed, organized, and unstoppable. When Pul turned his gaze toward Israel, Menahem knew he had no choice but to pay.',
        },
        {
          kind: 'commentary',
          id: 'k15-pul',
          html:
            'Pul is not attacking Israel with an army bent on conquest—not yet. He is demanding tribute, a tax for not destroying the kingdom. Menahem pays 1,000 talents of silver—an enormous sum. To raise it, he taxes every wealthy man in Israel 50 shekels of silver. It is a crushing burden. Israel is being drained to support a foreign king.',
        },
        {
          kind: 'commentary',
          id: 'k15-tribute',
          html:
            'The tribute to Pul marks a turning point. Israel is no longer an independent kingdom. It is now a subject state, paying homage to Assyria. Pul accepts the payment, confirms Menahem in power, and moves on—for now. But the message is clear: Israel&apos;s days as a free nation are numbered. The great powers of the world have noticed the small kingdom, and they are hungry.',
        },
        {
          kind: 'christ',
          id: 'k15-tribute-christ',
          title: 'Christ Connection — Freedom from Foreign Masters',
          html:
            'Israel pays tribute to Pul because they have no true King—no sovereign who can protect them. They have abandoned God, the true King of Israel, and now they are subject to foreign rulers. Jesus came to set people free from this bondage. "If the Son therefore shall make you free, ye shall be free indeed" (John 8:36). Christ offers what no earthly king can offer: genuine freedom—not from political masters alone, but from slavery to sin and death. Those who accept His kingship are freed from the tribute of fear, from the weight of false worship, from the burden of trying to save themselves.',
        },
        {
          kind: 'carry',
          html:
            'When we turn away from God&apos;s kingship, we do not become free. We simply choose a different master—one who will demand more of us and give us less. Israel thought they could worship idols on the high places and still be safe. Instead, they found themselves paying tribute to a foreign king. What "tributes" are you paying to false masters? What would freedom look like if you returned your allegiance to God?',
        },
        {
          kind: 'reflection',
          id: 'k15-tribute-refl',
          prompt: 'Menahem had to impoverish his own people to pay tribute to Pul. What does it cost us when we give our loyalty to things that cannot truly protect or provide for us?',
        },
      ],
    },

    /* ─── 2 Kings 15:23–28 — Pekahiah and Pekah ──────────────────────── */
    {
      ref: '2 Kings 15:23–28',
      title: 'Pekahiah and the Rise of Pekah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(23, 'In the fiftieth year of Azariah king of Judah Pekahiah the son of Menahem began to reign over Israel in Samaria, and reigned two years.'),
            plain(24, 'And he did evil in the sight of the Lord: he departed not from the sins of Jeroboam the son of Nebat, who made Israel to sin.'),
            {
              number: 25,
              spans: [
                t('But Pekah the son of Remaliah, a captain of his, conspired against him, and smote him in Samaria, in the palace of the king&apos;s house, with Argob and Arieh, and with him '),
                hg('fifty men', 'k15-pekah-coup'),
                t(' of the Gileadites: and he killed him, and reigned in his stead.'),
              ],
            },
            plain(26, 'And the rest of the acts of Pekahiah, and all that he did, behold, they are written in the book of the chronicles of the kings of Israel.'),
            {
              number: 27,
              spans: [
                t('In the two and fiftieth year of Azariah king of Judah Pekah the son of Remaliah began to reign over Israel in Samaria, and reigned '),
                hg('twenty years', 'k15-pekah-twenty'),
                t('.'),
              ],
            },
            plain(28, 'And he did evil in the sight of the Lord: he departed not from the sins of Jeroboam the son of Nebat, who made Israel to sin.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'k15-pekah-coup',
          html:
            'Pekahiah reigns for only two years—long enough to be seen as weak, not long enough to consolidate power. Pekah, one of his captains, assassinates him in the palace with the help of fifty Gileadite soldiers. The coup is swift and brutal. Pekahiah had inherited the throne from his father Menahem, but he had not inherited the strength to hold it.',
        },
        {
          kind: 'commentary',
          id: 'k15-pekah-twenty',
          html:
            'Pekah reigns for twenty years—the longest reign of any king mentioned in this chapter&apos;s survey of Israeli kingship. Yet those twenty years are not years of stability or strength. They are years of further decline, culminating in the loss of vast territories to Assyria.',
        },
        {
          kind: 'carry',
          html:
            'Each king in this chapter is assassinated or overthrown except the first (who becomes a leper) and the last (Pekah). And Pekah&apos;s long reign does not save Israel. Neither power seized nor power held can protect a kingdom that has turned from God. We see men grasping, scheming, murdering to hold a throne that was never truly theirs—one given by the Lord and kept only as long as they walk in His ways. What does this teach us about the emptiness of seeking security through political power or personal ambition?',
        },
        {
          kind: 'reflection',
          id: 'k15-pekah-refl',
          prompt: 'Pekah murders his way to the throne and then holds it for twenty years. Yet his long reign does not prevent the fall of the kingdom. What does this suggest about the limits of earthly power and position?',
        },
      ],
    },

    /* ─── 2 Kings 15:29–31 — Deportation Begins ────────────────────────── */
    {
      ref: '2 Kings 15:29–31',
      title: 'The First Deportation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 29,
              spans: [
                t('In the days of Pekah king of Israel came Tiglath-pileser king of Assyria, and took Ijon, and Abel-beth-maachah, and Janoah, and Kedesh, and Hazor, and Gilead, and Galilee, all the land of Naphtali, and '),
                hy('carried them away', 'k15-galah'),
                t(' to Assyria.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And Hoshea the son of Elah made a conspiracy against Pekah the son of Remaliah, and smote him, and '),
                hg('slew him', 'k15-pekah-death'),
                t(', and reigned in his stead, in the twentieth year of Jotham the son of Uzziah.'),
              ],
            },
            plain(31, 'And the rest of the acts of Pekah, and all that he did, behold, they are written in the book of the chronicles of the kings of Israel.'),
          ],
        },
        {
          kind: 'hebrew',
          id: 'k15-galah',
          title: 'Galah — "Carried Away" or "Exiled"',
          script: 'גָּלָה',
          translit: '<strong>Galah</strong> · to be led away in exile; to be removed from one&apos;s land',
          description:
            'The verb galah describes forced removal from a homeland. It carries the weight of dispossession, separation, and loss. When Israel is "carried away to Assyria," they are not merely moving—they are being torn from their inheritance and scattered among a foreign people, where they will be absorbed and eventually lost to history.',
        },
        {
          kind: 'commentary',
          id: 'k15-galah',
          html:
            'Tiglath-pileser does not come as a tributary-taker this time. He comes as a conqueror. He takes the northern and eastern territories of Israel—all of Galilee, Gilead, and Naphtali. The tribes who lived there are deported to Assyria. It is the first deportation of Israel. Many of these people will never return. They will be absorbed into the Assyrian empire and their identity will be lost. They become the "Lost Tribes of Israel."',
        },
        {
          kind: 'commentary',
          id: 'k15-pekah-death',
          html:
            'With Israel falling to Assyria, Hoshea assassinates Pekah and takes the throne. It is another coup, another murder. But Hoshea&apos;s reign marks the beginning of the end for the northern kingdom. Israel will not last another generation.',
        },
        {
          kind: 'christ',
          id: 'k15-deportation-christ',
          title: 'Christ Connection — Restoration from Exile',
          html:
            'The deportation of Israel is a judgment—the consequence of turning from God. Yet even in judgment, God does not forget His people. Centuries later, Jesus comes as the one who "proclaims liberty to the captives, and the opening of the prison to them that are bound" (Isaiah 61:1). He breaks the power of sin and death that held humanity captive. And through His resurrection, He restores what was lost—not land, but something far greater: reconciliation with God. All who trust in Him are gathered into a kingdom that will never fall, never be conquered, never be deported.',
        },
        {
          kind: 'carry',
          html:
            'Exile is not punishment alone; it is the natural outcome of leaving home. Israel left the God who was their home, their protection, their center. And so they were driven out and scattered. In our own lives, when we wander from God, we experience a kind of exile—distance, alienation, loss of protection and purpose. But God never stops calling us home. His invitation is always open. Where have you wandered in your own life? What would returning to God look like for you?',
        },
        {
          kind: 'reflection',
          id: 'k15-deportation-refl',
          prompt: 'The people of Israel are deported because of their kings&apos; idolatry and the people&apos;s consent to it. What choices are you making today that might lead your own life into a kind of exile—separation from God and from the protection He offers?',
        },
      ],
    },

    /* ─── 2 Kings 15:32–38 — Jotham of Judah ────────────────────────────── */
    {
      ref: '2 Kings 15:32–38',
      title: 'Jotham: Good King in a Declining South',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(32, 'In the second year of Pekah the son of Remaliah king of Israel began Jotham the son of Uzziah king of Judah to reign.'),
            plain(33, 'Five and twenty years old was he when he began to reign, and he reigned sixteen years in Jerusalem. And his mother&apos;s name was Jerusha, the daughter of Zadok.'),
            {
              number: 34,
              spans: [
                t('And he did that which was right in the sight of the Lord: he did according to all that his father Uzziah had done; howbeit the '),
                hg('high places were not removed', 'k15-jotham-high-places'),
                t(': the people sacrificed and burnt incense still on the high places. He built the higher gate of the house of the Lord.'),
              ],
            },
            plain(35, 'Now the rest of the acts of Jotham, and all that he did, are they not written in the book of the chronicles of the kings of Judah?'),
            plain(36, 'In those days the Lord began to send against Judah Rezin the king of Syria, and Pekah the son of Remaliah.'),
            plain(37, 'And Jotham slept with his fathers, and was buried with his fathers in the city of David his father: and Ahaz his son reigned in his stead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'k15-jotham-good',
          html:
            'Jotham is a good king. He does right in the sight of the Lord. He follows the pattern of his father Azariah. He even undertakes a building project—the high gate of the house of the Lord—that shows his commitment to strengthening the temple. During his reign, Judah appears to enjoy relative peace and prosperity.',
        },
        {
          kind: 'commentary',
          id: 'k15-jotham-high-places',
          html:
            'Yet even Jotham does not remove the high places. This is the pattern throughout Judah&apos;s history: even the best kings tolerate idolatry. They do not fully commit to God. They allow the worship of idols to continue alongside the worship of the Lord. This compromise is the flaw that will eventually undo the southern kingdom as it has already undone the north.',
        },
        {
          kind: 'commentary',
          id: 'k15-jotham-enemies',
          html:
            'The chapter ends with an ominous note: "In those days the Lord began to send against Judah Rezin the king of Syria, and Pekah the son of Remaliah." Enemies gather at Judah&apos;s borders. The kingdom is stable and prosperous under Jotham, but the storms are gathering. His son Ahaz will face the full force of these enemies, and Ahaz will not have Jotham&apos;s wisdom to meet them.',
        },
        {
          kind: 'christ',
          id: 'k15-jotham-christ',
          title: 'Christ Connection — The King Who Cleanses the Temple',
          html:
            'Jotham built the high gate of the house of the Lord, yet he allowed idolatry to flourish in the high places. Jesus came into a temple that had been corrupted—not by idols of stone, but by commerce and distraction. He cleansed it: "It is written, My house shall be called the house of prayer; but ye have made it a den of thieves" (Matthew 21:13). Christ&apos;s kingship is not content with surface piety or partial reform. He demands that the house of God be wholly devoted to God. His work is not to build new gates, but to purify the worship itself.',
        },
        {
          kind: 'carry',
          html:
            'A good life—prosperity, building projects, outward righteousness—can coexist with internal compromise. We can be generous, hard-working, even conscientious, yet tolerate things in our hearts and homes that pull us away from God. Jotham built the temple gate, but he did not remove the idols. What idols are you tolerating in your own life? What high places—distractions, desires, false loyalties—are you leaving standing while you try to serve God?',
        },
        {
          kind: 'reflection',
          id: 'k15-jotham-refl',
          prompt: 'Jotham did many things right, yet he did not fully turn his people&apos;s hearts from idolatry. Can a life be both good and incomplete? Where might you be settling for partial obedience instead of wholehearted devotion?',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Kings 15',
    quote:
      'In the collapse of Israel, we see the consequence of turning from God. But in the preservation of Judah and the Davidic line, we see the faithfulness of God to His covenant. Even in judgment, He does not abandon His promise.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 15 · Study Guide',
  },
};
