import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 5 — Naaman the Syrian
 *
 * A great military commander from Syria — honourable, mighty in valour — is
 * brought low by leprosy. A little enslaved maid, unnamed and powerless,
 * speaks a word that changes everything: "Would God my lord were with the
 * prophet that is in Samaria!" What follows is a story of pride meeting
 * simplicity, of a Gentile finding healing not through great deeds but through
 * obedience, and of a servant of God refusing wealth to remain a servant of God.
 * In the shadow of this healing stands the figure of Gehazi, whose greed mirrors
 * the very disease Naaman was cleansed from. This chapter shows us the path of
 * grace: lowly, repetitive, and transformative.
 */
export const KINGS_2_5: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 5,

  intros: [
    'The captain of the Syrian army is a man of consequence: great, honourable, mighty in valour. Yet he is also a man marked by plague, and no power he wields can heal him. It is his wife&apos;s maidservant — a girl taken captive, whose name Scripture does not record — who knows the way. She speaks to her mistress of a prophet in Samaria. One word from the unnamed slave girl begins a journey that will remake a Gentile commander and expose the heart of a Hebrew servant.',
    'This chapter moves through the geography of pride and humility, from the courts of kings to the river Jordan. Naaman expects a great miracle; he receives a simple command. He almost loses the healing through his refusal to be humbled. Only when his servants ask him the question "My father, if the prophet had bid thee do some great thing, wouldest thou not have done it?" does he descend into the water and find his flesh restored "like unto the flesh of a little child." And when he returns, it is not to reward the man of God, but to confess that "there is no God in all the earth, but in Israel." In the closing act, Gehazi&apos;s greed shows us the mirror image of obedience: the disease of coveting returns to cleave to him forever.',
  ],

  bottomShare: {
    label: 'Share 2 Kings 5',
    quote:
      'The unnamed maid speaks her word; Naaman descends into water seven times; his flesh comes again like a little child&apos;s. Simple obedience to God&apos;s prophet opens the door that all the power and wealth of Syria could not budge.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 5 · Study Guide',
  },

  sections: [
    /* ─── 2 Kings 5:1–3 — The Little Maid ──────────────────────────── */
    {
      ref: '2 Kings 5:1–3',
      title: 'The Little Maid&apos;s Word',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Now Naaman, captain of the host of the king of Syria, was a great man with his master, and honourable, because by him the Lord had given deliverance unto Syria: he was also a mighty man in valour, but he was a leper.'),
            plain(2, 'And the Syrians had gone out by companies, and had brought away captive out of the land of Israel a little maid; and she waited on Naaman&apos;s wife.'),
            plain(3, 'And she said unto her mistress, Would God my lord were with the prophet that is in Samaria! for he would recover him of his leprosy.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'naaman-greatness',
          html:
            'Naaman is introduced in terms of power and status: great, honourable, mighty. He is a man who has delivered deliverance to his nation. Yet he carries within him a disease that no amount of military prowess can cure. Leprosy is the great equalizer — it humbles the mighty, marks the living as unclean, isolates the powerful. In Naaman&apos;s greatness lives a flaw he cannot conquer.',
        },
        {
          kind: 'commentary',
          id: 'little-maid',
          html:
            'Unnamed and enslaved, the little maid has no authority, no standing. She is the spoil of war, a captive taken by force. Yet it is her word that sets the whole narrative in motion. She speaks not with power or persuasion, but with simple knowledge: there is a prophet in Samaria who can heal. Her witness is an act of faith — she speaks to her mistress, a woman who might have ignored her. She speaks across every barrier of class and nation. And her word reaches the one who has the power to respond.',
        },
        {
          kind: 'hebrew',
          id: 'naarah-maid',
          title: 'Naarah — "Young Maiden"',
          script: 'נַעֲרָה',
          translit: '<strong>Naarah</strong> · young girl; maiden; female servant',
          description:
            'The Hebrew word naarah emphasizes her youth and lowliness. She is not a woman of status, not a counsellor or prophetess, but a young girl. Yet Scripture records her faith. She knows who the prophet is, and she believes he can heal. The smallest voices often carry the greatest truths.',
        },
        {
          kind: 'carry',
          html:
            'Do you recognize the unnamed helpers in your own life? The ones whose words change your trajectory, who know something you need, who speak when they have no authority to do so? These small acts of faith — a word spoken across a boundary, a suggestion offered without demand — can remake the course of a life. The little maid had no sword to wield, no army at her command. Her only power was her voice and her knowledge of where healing lives. And it was enough.',
        },
        {
          kind: 'reflection',
          id: 'little-maid-word',
          prompt: 'When has someone without authority or status spoken a word that helped you? Or when have you spoken a word, knowing you had no power to enforce it, but trusting in what you knew to be true?',
        },
      ],
    },

    /* ─── 2 Kings 5:4–7 — The King&apos;s Panic ──────────────────────── */
    {
      ref: '2 Kings 5:4–7',
      title: 'The King&apos;s Panic',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(4, 'And one went in, and told his lord, saying, Thus and thus said the maid that is of the land of Israel.'),
            plain(5, 'And the king of Syria said, Go to, go, I will send a letter unto the king of Israel. And he departed, and took with him ten talents of silver, and six thousand pieces of gold, and ten changes of raiment.'),
            plain(6, 'And he brought the letter to the king of Israel, saying, Now when this letter is come unto thee, behold, I have therewith sent Naaman my servant to thee, that thou mayest recover him of his leprosy.'),
            {
              number: 7,
              spans: [
                t('And it came to pass, when the king of Israel had read the letter, that he '),
                hg('rent his clothes', 'king-israel-panic'),
                t(', and said, '),
                hg('Am I God, to kill and to make alive', 'king-israel-panic'),
                t(', that this man doth send unto me to recover a man of his leprosy? wherefore consider, I pray you, see how he seeketh a quarrel against me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'great-gifts',
          html:
            'Naaman does not come empty-handed. Ten talents of silver, six thousand pieces of gold, ten changes of raiment — a king&apos;s ransom of wealth, a display of gratitude before any service is rendered. Naaman believes that healing, like everything else in his world, is a transaction. Money can buy anything. Power can unlock any door. He brings the full weight of his wealth to bear. The thought that healing might not come this way — that it might come through obedience rather than wealth — has not yet occurred to him.',
        },
        {
          kind: 'commentary',
          id: 'king-israel-panic',
          html:
            'The king of Israel reads the letter and tears his clothes in panic. He does not see an opportunity for diplomacy. He sees a trap — the king of Syria has sent a man with an impossible demand. "Am I God, to kill and to make alive?" This is the protest of a man who knows his own limits. He cannot heal leprosy. No king can. To be asked to do so is to be set up for conflict, perhaps for war. The king of Israel sees only the demand and the danger, not the mercy that stands behind the word of a prophet.',
        },
        {
          kind: 'carry',
          html:
            'Notice how the word moves through channels of power and panic. The little maid speaks to her mistress. The mistress speaks to Naaman. Naaman tells the king of Syria. The king sends a letter to the king of Israel. And at every step, the word carries weight that corrupts it. By the time it reaches the king of Israel, it has become a demand, a threat, an impossibility. But it is still, at its core, the simple word of a young girl: there is a prophet who can heal. Sometimes the more power is involved in passing a message, the more it gets twisted. The truth gets lost in the machinery of courts and pride.',
        },
        {
          kind: 'reflection',
          id: 'kings-panic',
          prompt: 'When have you misunderstood a word of help as a demand or threat? How did you discover what the true message actually was?',
        },
      ],
    },

    /* ─── 2 Kings 5:8–12 — The Seven-Fold Washing ────────────────── */
    {
      ref: '2 Kings 5:8–12',
      title: 'The Prophet&apos;s Simple Word',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(8, 'But when Elisha the man of God heard that the king of Israel had rent his clothes, he sent to the king, saying, Wherefore hast thou rent thy clothes? let him come now to me, and he shall know that there is a prophet in Israel.'),
            plain(9, 'So Naaman came with his horses and with his chariot, and stood at the door of the house of Elisha.'),
            plain(10, 'And Elisha sent a messenger unto him, saying, Go and wash in Jordan seven times, and thy flesh shall come again to thee, and thou shalt be clean.'),
            {
              number: 11,
              spans: [
                t('But Naaman was '),
                hg('wroth', 'naaman-wroth'),
                t(', and went away, and said, Behold, I thought, He will surely come out to me, and stand, and call on the name of the Lord his God, and strike his hand over the place, and recover the leper. '),
              ],
            },
            {
              number: 12,
              spans: [
                t('Are not Abana and Pharpar, rivers of Damascus, better than all the waters of Israel? '),
                hy('may I not wash in them, and be clean', 'naaman-rivers'),
                t('? Turned he and went away in a rage.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'elisha-confidence',
          html:
            'Elisha does not go out to meet Naaman in person. He sends a messenger with a word. The word is direct, simple, and entirely unseemly by Naaman&apos;s understanding: go wash in the Jordan seven times. There is no ceremony, no dramatic gesture, no calling upon the name of the Lord with hand uplifted. There is only a command to go to a river — a dirty river, at that — and wash.',
        },
        {
          kind: 'commentary',
          id: 'naaman-wroth',
          html:
            'Naaman is angry. Not merely disappointed, but wroth — filled with hot indignation. He has expected grandeur. He has expected Elisha himself to come out, to stand before him, to call upon his God with ceremony and power. Instead he receives a word through a servant. The insult is twofold: the word is too simple, and it has not been spoken directly to him. His pride cannot accept it.',
        },
        {
          kind: 'commentary',
          id: 'naaman-rivers',
          html:
            'Naaman cannot understand why the Jordan is better than the rivers of his own homeland. The Abana and Pharpar are famous rivers, wealthy with water. They are near, they are familiar, they are part of his own world. Why wash in a foreign river? The question reveals the trap of his thinking: he believes the healing depends on the greatness of the river, or the ritual, or the skill of the healer. He does not yet understand that the healing depends only on obedience to the word of the Lord&apos;s prophet.',
        },
        {
          kind: 'hebrew',
          id: 'tsara-at',
          title: 'Tsara&apos;at — "Leprosy"',
          script: 'צָרַ֫עַת',
          translit: '<strong>Tsara&apos;at</strong> · leprosy; a defiling skin disease; ritual uncleanness',
          description:
            'The Hebrew word tsara&apos;at describes not just a medical condition but a state of ritual uncleanness. The leper is isolated from the community, marked as unclean before God. Healing from tsara&apos;at means restoration not just to health but to community and to standing before God. Naaman&apos;s healing will be complete — his flesh will be renewed and his standing will be restored.',
        },
        {
          kind: 'carry',
          html:
            'Pride whispers: "I expected something great. This is too simple. This is beneath me. I can do this anywhere; I don&apos;t need the prophet, don&apos;t need the river, don&apos;t need Israel." And so we walk away in anger, thinking we have preserved our dignity, when in fact we have only preserved our disease. The door to healing is often simpler than we expect. It asks only for obedience, not for understanding. The thing we must do is often so small, so humble, so lacking in ceremony that we nearly walk past it. Naaman almost did.',
        },
        {
          kind: 'reflection',
          id: 'seven-fold-washing',
          prompt: 'When has God offered you healing or help that seemed too simple, too humble, or too unlike what you expected? What would it have cost you to walk away? What did it cost you to accept it?',
        },
      ],
    },

    /* ─── 2 Kings 5:13–14 — The Servants Persuade ──────────────── */
    {
      ref: '2 Kings 5:13–14',
      title: 'The Servants&apos; Question',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(13, 'And his servants came near, and spake unto him, and said, My father, if the prophet had bid thee do some great thing, wouldest thou not have done it? how much rather then, when he saith to thee, Wash, and be clean?'),
            plain(14, 'Then went he down, and dipped himself seven times in Jordan, according to the saying of the man of God: and his flesh came again like unto the flesh of a little child, and he was clean.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'servants-wisdom',
          html:
            'Naaman&apos;s servants speak the word that breaks through his pride. They do not argue with him about the greatness of the Jordan or the reputation of Elisha. Instead, they ask him a simple question: if the prophet had commanded you to do something great and difficult, would you not have done it? The logic is irrefutable. If you would obey a hard command, why refuse an easy one? The greater obedience surely includes the lesser.',
        },
        {
          kind: 'commentary',
          id: 'seven-times',
          html:
            'Naaman obeys. He goes down to the Jordan and dips himself seven times. Seven is the number of completion, of wholeness. He does not dip once and test the waters. He does not negotiate with the prophet about six times or eight times. He does exactly as he was told. And in the seventh dipping, his flesh comes again like unto the flesh of a little child. Complete renewal. Restoration. He is not only healed of leprosy — he is restored to innocence, to a state of new beginning.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the thing that breaks us out of pride is not an argument but a question. A servant — someone with no authority, only observation and care — asks us: if you would do the great thing, why refuse the small one? The question is gentle, but it cuts through all our defenses. Often the people closest to us can see what we are doing to ourselves. They see us walking away from healing because it does not match our expectations. And sometimes they are brave enough to ask the question that opens our eyes.',
        },
        {
          kind: 'reflection',
          id: 'servants-question',
          prompt: 'Has someone ever asked you a question that broke through your pride or resistance? Who were they, and how did their question change what you were willing to do?',
        },
      ],
    },

    /* ─── 2 Kings 5:15–19 — "No God but in Israel" ────────────── */
    {
      ref: '2 Kings 5:15–19',
      title: 'The Gentile&apos;s Confession',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(15, 'And he returned to the man of God, he and all his company, and came, and stood before him: and he said, Behold, now I know that there is no God in all the earth, but in Israel: now therefore, I pray thee, take a blessing of thy servant.'),
            plain(16, 'But he said, As the Lord liveth, before whom I stand, I will receive none. And he urged him to take it; but he refused.'),
            plain(17, 'And Naaman said, Shall there not then, I pray thee, be given to thy servant two mules&apos; burden of earth? for thy servant will henceforth offer neither burnt offering nor sacrifice unto other gods, but unto the Lord.'),
            plain(18, 'In this thing the Lord pardon thy servant, that when my master goeth into the house of Rimmon to worship there, and he leaneth on my hand, and I bow myself in the house of Rimmon: when I bow down myself in the house of Rimmon, the Lord pardon thy servant in this thing.'),
            plain(19, 'And he said unto him, Go in peace. So he departed.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'naaman-knows',
          html:
            'Naaman returns — not in anger, but in humility. His flesh is clean. He stands before Elisha with all his company and makes a confession that overturns everything he thought he knew: "There is no God in all the earth, but in Israel." A Syrian commander, trained in the gods of Syria, versed in the religions of his world, has encountered something that cannot be explained by the frameworks he has always known. The healing is real. The prophet is real. And the God of Israel is real — not as one god among many, but as the God.',
        },
        {
          kind: 'commentary',
          id: 'elisha-refuses',
          html:
            'Elisha refuses every payment. Though Naaman offers, urges, presses him to accept a blessing, Elisha will not receive. He does not take silver or gold or clothes. He is not in the business of healing for hire. His work is for the Lord, and he stands before the Lord. To accept payment would be to corrupt the gift. The healing must be free, or it is not truly from God.',
        },
        {
          kind: 'commentary',
          id: 'earth-covenant',
          html:
            'Naaman&apos;s request for two mules&apos; burden of earth is the act of a man making a covenant. He will take soil from Israel, the land where the God of Israel dwells, and on that soil he will offer sacrifices to the Lord. He is binding himself to the God of Israel. But his condition reveals the tightrope he must walk: when his master goes to worship in the house of Rimmon, and leans on his hand, he must bow. He asks for pardon in this thing — acknowledging that his station requires him to bow in a pagan temple, even though his heart now belongs to the Lord.',
        },
        {
          kind: 'christ',
          id: 'naaman-gentile',
          title: 'Christ Connection — The Healing of the Outsider',
          html:
            'Christ himself points to Naaman in His first sermon at Nazareth. "Many lepers were in Israel in the time of Eliseus the prophet; none was cleansed, saving Naaman the Syrian" (Luke 4:27). Why does Christ mention this story? Because Naaman is a Gentile — an outsider, an enemy even — and yet he is healed. He receives what Israel could not. The passage foreshadows the scandal of the Gospel: that grace comes to those outside the covenant, that the Gentiles will be welcomed, that healing is not reserved for the insiders but flows freely to those who will obey and believe. In Naaman, we see the first of many Gentiles who will wash and be clean.',
        },
        {
          kind: 'carry',
          html:
            'Naaman&apos;s honesty is remarkable. He does not hide the fact that he will still be required to bow in the house of Rimmon. He does not pretend that his outer life matches his inner faith. Instead, he asks for pardon. He asks the prophet to intercede for him in the weakness of his position. This is the prayer of someone who has been truly touched by God — not perfect, not untested, but faithful in the deepest part of his heart. He will worship the Lord with the soil of Israel beneath his feet, and he will ask for mercy in the places where the world constrains him.',
        },
        {
          kind: 'reflection',
          id: 'naaman-confession',
          prompt: 'Naaman confesses that the God of Israel is the only God, yet he knows he will still have to bow in a pagan temple. How do you hold faith when your outer circumstances seem to contradict what you believe in your heart?',
        },
      ],
    },

    /* ─── 2 Kings 5:20–27 — Gehazi&apos;s Greed ─────────────────── */
    {
      ref: '2 Kings 5:20–27',
      title: 'Gehazi&apos;s Punishment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(20, 'But Gehazi, the servant of Elisha the man of God, said, Behold, my master hath spared Naaman this Syrian, in not receiving at his hands that which he brought: but, as the Lord liveth, I will run after him, and take somewhat of him.'),
            plain(21, 'So Gehazi followed after Naaman. And when Naaman saw him running after him, he lighted down from the chariot to meet him, and said, Is all well?'),
            plain(22, 'And he said, All is well. My master hath sent me, saying, Behold, even now there be come to me from mount Ephraim two young men of the sons of the prophets: give them, I pray thee, a talent of silver, and two changes of garments.'),
            plain(23, 'And Naaman said, Be content, take two talents. And he urged him, and bound two talents of silver in two bags, with two changes of garments, and laid them upon two of his servants; and they bare them before him.'),
            plain(24, 'And when he came to the tower, he took them from their hand, and bestowed them in the house; and let the men go.'),
            plain(25, 'Then he went in, and stood before his master. And Elisha said unto him, Whence comest thou, Gehazi? And he said, Thy servant went no whither.'),
            {
              number: 26,
              spans: [
                t('And he said unto him, '),
                hg('Went not mine heart with thee', 'elisha-heart'),
                t(', when the man turned again from his chariot to meet thee? Is it a time to receive money, and to receive garments, and oliveyards, and vineyards, and sheep, and oxen, and menservants, and maidservants? '),
              ],
            },
            {
              number: 27,
              spans: [
                t('The leprosy therefore of Naaman shall cleave unto thee, and unto thy seed for ever. And he went out from his presence '),
                hg('a leper as white as snow', 'gehazi-leprosy'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gehazi-sees-loss',
          html:
            'Gehazi sees what Elisha has done — he has refused the gift, sent Naaman away without taking anything. From Gehazi&apos;s perspective, this is a catastrophic loss. Here is a man wealthy beyond measure, grateful, eager to pay. And the master has turned him away with nothing. Gehazi cannot fathom it. Why would any man refuse such wealth? The answer is that Elisha serves the Lord, not himself. Gehazi has not yet learned this distinction.',
        },
        {
          kind: 'commentary',
          id: 'gehazi-lie',
          html:
            'Gehazi lies. He tells Naaman that Elisha has actually sent him to ask for a talent of silver and two changes of garments for two young prophets who have just arrived. It is a lie designed to trap Naaman into generosity — and it works. Naaman, grateful and eager to bless, insists on giving not one talent but two, and he presses his gift upon Gehazi so eagerly that he sends servants to carry it. Gehazi takes the wealth and hides it in the house.',
        },
        {
          kind: 'commentary',
          id: 'elisha-heart',
          html:
            'Elisha asks a terrifying question: "Went not mine heart with thee, when the man turned again from his chariot to meet thee?" The prophet was present in spirit, watching what Gehazi did. He saw the moment when Naaman turned back from his chariot to meet the servant running after him. He knows. And then Elisha asks another question: "Is it a time to receive money?" The answer is no. This is the time to receive a miracle, to see a great man healed, to witness a Gentile come to the knowledge of the Lord. This is not a time to seize personal gain.',
        },
        {
          kind: 'commentary',
          id: 'gehazi-leprosy',
          html:
            'The punishment is the mirror image of the miracle. Naaman dipped seven times and his flesh came again like a little child&apos;s, and he was clean. Gehazi went out a leper as white as snow. The very disease from which Naaman was healed now cleaves to Gehazi — and not just to him, but to his seed forever. Greed has its own contagion. Gehazi wanted what Naaman had cast off. He wanted the material reward so badly that he corrupted the gift. And so he inherits the wound.',
        },
        {
          kind: 'carry',
          html:
            'Gehazi&apos;s tragedy is not that he was tempted — all servants are tempted by the wealth of the powerful. His tragedy is that he thought he could take what did not belong to him and hide it. He did not understand that his master&apos;s heart was with him in every moment. The prophet saw. The Lord saw. The sin he thought was hidden was as visible as a man covered in leprosy. And the punishment — to be marked by the very disease that healing was meant to cleanse — teaches us something terrifying and true: that when we grasp at what is not ours, we often inherit the very wound we sought to avoid.',
        },
        {
          kind: 'reflection',
          id: 'gehazi-greed',
          prompt: 'What tempts you to take or grasp for what is not yours? How do the things we covet quietly become the things that wound us?',
        },
      ],
    },
  ],
};
