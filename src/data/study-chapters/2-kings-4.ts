import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 4 — Elisha's Miracles: The Widow's Oil, the Shunammite's Son,
 * Healing Death, and Bread for a Multitude
 *
 * In this chapter, Elisha performs four miracles that reveal God's character:
 * His care for the widow in her despair, His power to restore life itself,
 * His ability to heal what seems irredeemable, and His provision for the
 * hungry. Each miracle echoes forward to Christ—the One who multiplies bread,
 * raises the widow&apos;s son, feeds the multitude, and conquers death.
 */
export const KINGS_2_4: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 4,

  estimatedMinutes: { beginner: 3, intermediate: 13, deep: 18 },
  intros: [
    'The book of 2 Kings shows us Elisha stepping into Elijah&apos;s mantle. Where Elijah was a prophet of judgment and fire, Elisha is a prophet of mercy and presence. He lives among the people, eating at their tables, sleeping in their chambers. And through these four miracles, we see God&apos;s character written in action: a God who notices the widow in her need, who restores what is dead, who heals the poisoned pot, who feeds the hungry with abundance.',
    'These miracles are not random acts of power. They are acts of redemption. The widow goes from debtor to provider. The Shunammite&apos;s house goes from childless to full of life. The prophets eat without death. A small gift becomes abundance for all. In each case, an empty vessel becomes full, a dead thing becomes alive, a deadly thing becomes life-giving. And all of it points to Christ—the One who multiplies, who raises, who heals, who is the True Bread that feeds the world.',
  ],

  bottomShare: {
    label: 'Share 2 Kings 4',
    quote:
      'Elisha multiplies the widow&apos;s oil, raises the Shunammite&apos;s son, heals death itself in the pot, and feeds a hundred with bread that seems too small. Each miracle reveals a God who cares for the desperate, who sees what we think is lost, and who gives abundance to those who have nothing.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 4 · Study Guide',
  },

  sections: [
    /* ─── 2 Kings 4:1–7 — The Widow's Oil ────────────────────────────── */
    {
      ref: '2 Kings 4:1–7',
      title: 'The Widow&apos;s Oil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'Now there cried a certain woman of the wives of the sons of the prophets unto Elisha, saying, Thy servant my husband is dead; and thou knowest that thy servant did fear the Lord: and the creditor is come to take unto him my two sons to be bondmen.'),
            plain(2, 'And Elisha said unto her, What shall I do for thee? tell me, I pray thee, what hast thou in the house? And she said, Thine handmaid hath not any thing in the house, save a pot of oil.'),
            plain(3, 'Then he said, Go, borrow thee vessels abroad of all thy neighbours, even empty vessels; borrow not a few.'),
            plain(4, 'And when thou art come in, thou shalt shut the door upon thee and upon thy sons, and shalt pour out into all those vessels, and thou shalt set aside that which is full.'),
            plain(5, 'So she went from him, and shut the door upon her and upon her sons; who brought the vessels to her; and she poured out.'),
            plain(6, 'And it came to pass, when the vessels were full, that she said unto her son, Bring me yet a vessel. And he said unto her, There is not a vessel more. And the oil stayed.'),
            plain(7, 'Then she came and told the man of God. And he said, Go, sell the oil, and pay thy debt, and live thou and thy children of the rest.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'widow-desperation',
          html:
            'A widow cries out to Elisha. Her husband, a man who feared the Lord, is dead. And now the creditor has come to take her two sons as bondmen—as slaves. The law in ancient Israel allowed a debtor to sell his children into servitude, but the widow is in an impossible position. She has no resources, no protection, no way to prevent her sons from being taken into slavery. She is vulnerable and nearly helpless.',
        },
        {
          kind: 'commentary',
          id: 'elisha-question',
          html:
            'Elisha&apos;s first question is not "What can I do?" but "What hast thou in the house?" He is inviting the widow into her own miracle. He is asking her to name what she has, not what she lacks. She responds: "I have a pot of oil." Not much. A single pot. But it is something. And that is where the miracle begins.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shemen',
          title: 'Shemen — "Oil"',
          script: 'שֶׁ֫מֶן',
          translit: '<strong>Shemen</strong> · oil; the anointing fluid',
          description:
            'Oil in Scripture is the substance of anointing—the mark of God&apos;s presence and blessing. Kings are anointed with oil. Priests are anointed with oil. A widow&apos;s pot of oil is small, but it carries symbolic weight: she has been blessed by the Lord, and that blessing can multiply. The oil that anoints will become the provision that saves.',
        },
        {
          kind: 'commentary',
          id: 'empty-vessels',
          html:
            'Elisha tells her to borrow empty vessels from all her neighbors—not a few, but many. The neighbors must have wondered what she was doing. But she obeys. She shuts the door. She begins to pour from the single pot of oil. And the oil flows. It fills one vessel, then another, then another. It does not stop until every empty vessel is full. The miracle is not in the sudden appearance of oil. It is in the multiplication—the way a small thing, poured out faithfully, becomes enough.',
        },
        {
          kind: 'carry',
          html:
            'God often begins with what we have, not what we wish we had. The widow did not pray for a financial miracle, for a sudden inheritance, for a rich relative to appear. She had a pot of oil. And by faith, by obedience, by borrowing vessels and pouring out what she had, she became the agent of her own deliverance. Sometimes the miracle begins with inventory: What do I have? What can I offer? What small thing can I pour out? And then, watch what becomes of it.',
        },
        {
          kind: 'reflection',
          id: 'widow-oil',
          prompt: 'The widow goes from having one pot of oil to enough provision for her children&apos;s future. What small thing in your own life has the potential to multiply if you pour it out faithfully?',
        },
      ],
    },

    /* ─── 2 Kings 4:8–17 — The Shunammite's Hospitality and Promise ──── */
    {
      ref: '2 Kings 4:8–17',
      title: 'The Shunammite: A Chamber for the Prophet',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(8, 'And it fell on a day, that Elisha passed to Shunem, where was a great woman; and she constrained him to eat bread. And so it was, that as oft as he passed by, he turned in thither to eat bread.'),
            plain(9, 'And she said unto her husband, Behold now, I perceive that this is an holy man of God, which passeth by us continually.'),
            plain(10, 'Let us make a little chamber, I pray thee, on the wall; and let us set for him there a bed, and a table, and a stool, and a candlestick: and it shall be, when he cometh to us, that he shall turn in thither.'),
            plain(11, 'And it fell on a day, that he came thither, and he turned into the chamber, and lay there.'),
            plain(12, 'And he said to Gehazi his servant, Call this Shunammite. And when he had called her, she stood before him.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2k4-woman-room',
          html:
            'The Shunnamite recognizes the man of God; she builds him a room—provision meets prophecy, and the prophet finds rest.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(13, 'And he said unto her, Thou hast been careful for us with all this care: now what is to be done for thee? wouldest thou be spoken for to the king, or to the captain of the host? And she answered, I dwell among mine own people.'),
            plain(14, 'And he said, What then is to be done for her? And Gehazi answered, Verily she hath no child, and her husband is old.'),
            plain(15, 'And he said, Call her. And when he had called her, she stood in the door.'),
            plain(16, 'And he said, About this season, according to the time of life, thou shalt embrace a son. And she said, Nay, my lord, thou man of God, do not lie unto thine handmaid.'),
            plain(17, 'And the woman conceived, and bare a son at the season that Elisha had said unto her, according to the time of life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'shunammite-recognition',
          html:
            'A great woman of Shunem encounters Elisha and invites him to eat at her home. She notices something about him—"I perceive that this is an holy man of God." She does not ask for signs. She does not demand proof. She sees him and recognizes the holy in him. And from that recognition flows hospitality. She builds a chamber for him—a small room on the wall of her house, furnished with a bed, a table, a stool, a candlestick. She creates a sanctuary for a stranger, because she has discerned that he is a man of God.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shunem',
          title: 'Shunem — A Place of Hospitality',
          script: 'שׁוּנֵם',
          translit: '<strong>Shunem</strong> · a town in the valley of Jezreel',
          description:
            'Shunem is remembered in Scripture as a place of hospitality—the woman of Shunem becomes paradigmatic for recognizing and honoring God&apos;s servants. Later, King David would be cared for in Shunem in his old age (1 Kings 1:3). The name conjures blessing, rest, and the provision of home.',
        },
        {
          kind: 'commentary',
          id: 'chamber-on-wall',
          html:
            'The chamber "on the wall" may seem like a strange architectural detail, but it is significant. She does not give him the best room in the family home. She creates a separate space—a prophet&apos;s chamber, a place set apart. It is an act of honor: this man deserves a sanctuary. And she furnishes it with everything necessary—bed for rest, table for food, candlestick for light. The chamber is complete.',
        },
        {
          kind: 'commentary',
          id: 'elisha-asks',
          html:
            'When Elisha realizes her care, he asks his servant Gehazi, "What is to be done for her?" She has given him rest and food; now he wants to give something back. He offers to speak to the king, to use his influence for her benefit. But she refuses. "I dwell among mine own people," she says. She has everything she needs within her own community. Or so she thinks.',
        },
        {
          kind: 'commentary',
          id: 'gehazi-answer',
          html:
            'Gehazi observes what the Shunammite woman did not voice: "She hath no child, and her husband is old." In a culture where a woman&apos;s worth and security are often bound to her children, this is her hidden grief. She has a home, hospitality, care—but no son. And as her husband ages, her future becomes uncertain. Elisha sees this need and speaks the word that will change everything.',
        },
        {
          kind: 'commentary',
          id: 'promise-disbelief',
          html:
            'When Elisha tells her, "About this season, according to the time of life, thou shalt embrace a son," she resists: "Nay, my lord, thou man of God, do not lie unto thine handmaid." She is protecting herself. Do not give me false hope, she seems to say. Do not promise me a child if it cannot come to pass. But Elisha speaks truly. She conceives and bears a son at the appointed time. What she could not provide for herself, what seemed impossible, becomes fact. Her hospitality to a prophet opens a door to her own future.',
        },
        {
          kind: 'carry',
          html:
            'Hospitality is one of the deepest acts of faith. The Shunammite did not know that her act of providing a chamber would result in a son. She gave because she recognized the holy. And in recognizing the holy in another person, she created space for God to work in her own life. What we offer to others—especially to those we recognize as God&apos;s servants—creates an opening for God&apos;s blessing to return to us.',
        },
        {
          kind: 'reflection',
          id: 'shunammite-hospitality',
          prompt: 'The Shunammite woman recognized something holy in Elisha and acted on that recognition. When have you seen the holy in another person? What did you do about it?',
        },
      ],
    },

    /* ─── 2 Kings 4:18–37 — The Son Raised from the Dead ─────────────── */
    {
      ref: '2 Kings 4:18–37',
      title: 'The Son Raised: Elisha and the Power of Resurrection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(18, 'And when the child was grown, it fell on a day, that he went out to his father to the reapers.'),
            plain(19, 'And he said unto his father, My head, my head. And his father said to a lad, Carry him to his mother.'),
            plain(20, 'And when he had taken him, and brought him to his mother, she sat on her knees till noon, and then died.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'k4-split-1',
          html:
            'The promise made at birth comes crashing down. The child, grown and strong, cries out in the field—a sudden, fatal pain. His father sends him home, and he dies in his mother&apos;s lap. No warning. No time to pray. The miracle child, given by grace, is taken by death. And the Shunammite sits alone with his body.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(21, 'And she went up, and laid him upon the bed of the man of God, and shut the door upon him, and went out.'),
            plain(22, 'And she called unto her husband, and said, Send me, I pray thee, one of the young men, and one of the asses; for I will go to the man of God, and come again.'),
            plain(23, 'And he said, Wherefore wilt thou go to him to day? it is neither new moon, nor sabbath. And she said, It shall be well.'),
            plain(24, 'Then she saddled an ass, and said to her servant, Drive, and go forward: slack not thy riding for me, except I bid thee.'),
            plain(25, 'So she went and came unto the man of God to the mount of Carmel. And it came to pass, when the man of God saw her afar off, that he said to Gehazi his servant, Behold, yonder is that Shunammite:'),
            plain(26, 'Run now, I pray thee, to meet her, and say unto her, Is it well with thee? is it well with thy husband? is it well with the child? And she answered, It is well.'),
            plain(27, 'And when she came to the man of God to the hill, she caught him by the feet: but Gehazi came near to thrust her away. And the man of God said, Let her alone; for her soul is vexed within her: and the Lord hath hid it from me, and hath not told me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'k4-split-2',
          html:
            'Desperation has no protocol. She does not grieve at home. She does not send word ahead. She takes the dead boy, lays him on Elisha&apos;s bed—the very chamber where the promise was given—and rides toward the prophet with fierce silence. When Gehazi asks her questions, she answers, "It is well." Not because it is well. But because she will not speak her grief to a servant. She will speak it only to the man of God. And when she reaches him, she does not kneel. She catches him by the feet and holds on.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(28, 'Then she said, Did I desire a son of my lord? did I not say, Do not deceive me?'),
            plain(29, 'Then he said to Gehazi, Gird up thy loins, and take my staff in thine hand, and go thy way: if thou meet any man, salute him not; and if any salute thee, answer him not again: and lay my staff upon the face of the child.'),
            plain(30, 'And the mother of the child said, As the Lord liveth, and as thy soul liveth, I will not leave thee. And he arose, and followed her.'),
            plain(31, 'And Gehazi passed on before them, and laid the staff upon the face of the child; but there was neither voice, nor hearing. Wherefore he went again to meet him, and told him, saying, The child is not awaked.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'k4-split-3',
          html:
            'The staff is sent first. The prophet&apos;s instrument of authority. But it does not wake the child. No voice. No hearing. The middle-man method fails. A staff laid on a dead child&apos;s face is not enough. Elisha must come himself. The Shunammite refuses to be left behind. "As the Lord liveth, and as thy soul liveth, I will not leave thee." She will not let him go. She will hold him to his promise until her son draws breath.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(32, 'And when Elisha was come into the house, behold, the child was dead, and laid upon his bed.'),
            plain(33, 'He went in therefore, and shut the door upon them twain, and prayed unto the Lord.'),
            plain(34, 'And he went up, and lay upon the child, and put his mouth upon his mouth, and his eyes upon his eyes, and his hands upon his hands: and he stretched himself upon the child; and the flesh of the child waxed warm.'),
            plain(35, 'Then he returned, and walked in the house to and fro; and went up, and stretched himself upon him: and the child sneezed seven times, and the child opened his eyes.'),
            plain(36, 'And he called Gehazi, and said, Call this Shunammite. So he called her. And when she was come in unto him, he said, Take up thy son.'),
            plain(37, 'Then she went in, and fell at his feet, and bowed herself to the ground, and took up her son, and went out.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'the-child-dies',
          html:
            'The boy grows. On a day in the field with his father and the reapers, he cries out, "My head, my head." A sudden illness, a stroke, something fatal. His father sends him to his mother. And she holds him until noon, when he dies in her lap. Death has come to the child born by divine promise—and with him, the promise itself seems to die.',
        },
        {
          kind: 'commentary',
          id: 'bed-of-man-of-god',
          html:
            'The Shunammite does not wail. She does not demand answers. Instead, she lays the child on the bed of the man of God—the very chamber she had prepared for Elisha. She shuts the door upon him. Then she leaves the house and asks her husband to prepare an ass, because she must go to Elisha. She will not accept this death as final. She will carry the weight of it to the prophet.',
        },
        {
          kind: 'commentary',
          id: 'husband-question',
          html:
            'Her husband asks why she needs to go to the man of God. It is not new moon or Sabbath—not a day typically kept for seeking prophets. And she simply says, "It shall be well." She does not explain. She does not share her grief with her husband yet. She holds it close and rides toward Elisha with fierce determination.',
        },
        {
          kind: 'commentary',
          id: 'elisha-sees-afar',
          html:
            'Elisha sees the Shunammite coming from a distance. He sends Gehazi to meet her and ask, "Is it well with thee? is it well with thy husband? is it well with the child?" And she answers, "It is well"—even as she rides toward him with a dead son. She speaks covenant language, the language of faith even in the face of death.',
        },
        {
          kind: 'commentary',
          id: 'she-catches-feet',
          html:
            'When she reaches Elisha, she falls at his feet and grabs him. Gehazi tries to thrust her away, but Elisha stops him: "Let her alone; for her soul is vexed within her." He understands that her body language is her only word right now. She is saying what she cannot speak: help me. Restore what has been taken.',
        },
        {
          kind: 'commentary',
          id: 'did-i-desire',
          html:
            'Then she speaks: "Did I desire a son of my lord? did I not say, Do not deceive me?" She is reminding Elisha of the promise, of the hope he gave her. She is calling God to account, in a way—not in anger, but in the depth of covenant. You told me I would have a son. You gave me the word of the Lord. Now my son is dead. What does that mean? How can your word have been true if he lies dead?',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-matteh',
          title: 'Matteh — "Staff" or "Rod"',
          script: 'מַטֶּה',
          translit: '<strong>Matteh</strong> · staff; the instrument of divine authority',
          description:
            'Elisha&apos;s staff is not a magic wand but the instrument of the word of the Lord. It represents authority, presence, the power that flows through God&apos;s servant. When Elisha lays his staff upon the face of the child, he is extending his authority, his connection to the divine, across the threshold of death itself.',
        },
        {
          kind: 'commentary',
          id: 'resurrection-body',
          html:
            'When the staff alone does not wake the child, Elisha goes to the house himself. He shuts the door. He prays. And then he lies upon the child—his mouth on the child&apos;s mouth, his eyes on the child&apos;s eyes, his hands on the child&apos;s hands. He stretches himself upon the dead body. The flesh of the child grows warm. Elisha returns, walks in the house, goes up and stretches himself again. Seven times the child sneezed. The child opened his eyes.',
        },
        {
          kind: 'commentary',
          id: 'resurrection-meaning',
          html:
            'This is the second raising of the dead in Scripture. Elijah had raised the widow&apos;s son (1 Kings 17:21–22). But now Elisha performs the same miracle again—not as echo, but as confirmation that the power to undo death rests in the hands of God&apos;s servants. The child who was promised is raised. The word of the Lord is vindicated. What seemed lost is restored.',
        },
        {
          kind: 'carry',
          html:
            'The Shunammite teaches us that hope is not naiveté. She is not pretending the child is alive when he is dead. She is carrying the weight of death itself to the One she believes has power over it. She holds the two truths together: he is dead, and he shall live again. This is faith not as denial but as active, urgent petition. What dead thing in your own life have you carried to the feet of Jesus?',
        },
        {
          kind: 'reflection',
          id: 'shunammite-resurrection',
          prompt: 'The Shunammite woman carried her dead son to Elisha and said, "It shall be well." When have you held on to hope even when death or loss seemed final?',
        },
      ],
    },

    /* ─── 2 Kings 4:38–41 — Death in the Pot ──────────────────────────── */
    {
      ref: '2 Kings 4:38–41',
      title: 'Healing the Deadly Pottage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(38, 'And Elisha came again to Gilgal: and there was a dearth in the land; and the sons of the prophets were sitting before him: and he said unto his servant, Set on the great pot, and seethe pottage for the sons of the prophets.'),
            plain(39, 'And one went out into the field to gather herbs, and found a wild vine, and gathered thereof wild gourds his lap full, and came and shred them into the pot of pottage: for they knew not what they were.'),
            plain(40, 'So they poured out for the men to eat. And it came to pass, as they were eating of the pottage, that they cried out, and said, O thou man of God, there is death in the pot: and they could not eat thereof.'),
            plain(41, 'But he said, Then bring me meal. And he cast it into the pot; and he said, Pour out now for the people, that they may eat. And there was no harm in the pot.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'gilgal-dearth',
          html:
            'There is a famine in the land. The sons of the prophets are gathered with Elisha at Gilgal, and he tells his servant to make pottage—a stew—for them to eat. Food is scarce, but they will share what they have. One of the prophets goes into the field to gather herbs to add to the pot. He finds a wild vine and fills his lap with wild gourds, thinking they are edible. He shreds them into the pottage.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-paqquot',
          title: 'Paqquot — "Wild Gourds"',
          script: 'פַּקֻּעֹת',
          translit: '<strong>Paqquot</strong> · wild gourds; poisonous fruit',
          description:
            'The wild gourds are poisonous. In the dearth, with hunger driving the search for food, the prophet did not—could not—recognize the danger. He gathered what seemed to be provision, but it was death. The image is stark: in desperation, we sometimes consume what will kill us, not knowing until too late.',
        },
        {
          kind: 'commentary',
          id: 'death-in-pot',
          html:
            'As the men begin to eat, they cry out: "O thou man of God, there is death in the pot!" What was meant to sustain them has become poison. They cannot eat. What appears to be fellowship around a shared meal has become a threat to their lives. The circle of the prophets is broken by hidden danger.',
        },
        {
          kind: 'commentary',
          id: 'meal-heals',
          html:
            'Elisha does not throw the pot away. He does not condemn the prophet who gathered the gourds. Instead, he asks for meal—flour—and casts it into the poisoned pottage. And then he says, "Pour out now for the people, that they may eat. And there was no harm in the pot." The poison is neutralized. Death is swallowed up in the taste and nourishment of bread. The fellowship is restored.',
        },
        {
          kind: 'commentary',
          id: 'meal-symbolism',
          html:
            'Meal is grain ground fine. It is the staff of life, the foundation of all provision. When Elisha casts meal into the deadly pot, he is not performing a chemical miracle. He is enacting a spiritual principle: that the foundation of life—bread, the primary sustenance—has power to heal what would otherwise kill us. The prophets eat in fellowship, safe, nourished.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world where what seems like provision can contain poison. Where good intentions lead to hidden danger. Where the very circle that should sustain us can become a place of death. But Elisha&apos;s response is not to abandon community or to fear the pot forever. It is to bring the power of bread—of fundamental nourishment, of God&apos;s primary gift—and let that heal what would have been deadly. In Christ, we have that healing. We have the Bread that swallows up all poison and restores us to full fellowship.',
        },
        {
          kind: 'reflection',
          id: 'death-pot',
          prompt: 'The prophets found death where they expected provision. When have you discovered something seemingly good was actually harmful? How did you find healing?',
        },
      ],
    },

    /* ─── 2 Kings 4:42–44 — Bread for the Multitude ───────────────────── */
    {
      ref: '2 Kings 4:42–44',
      title: 'Twenty Loaves Feed One Hundred',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(42, 'And there came a man from Baalshalisha, and brought the man of God bread of the firstfruits, twenty loaves of barley, and full ears of corn in the husk thereof. And he said, Give unto the people, that they may eat.'),
            plain(43, 'And his servitor said, What, should I set this before an hundred men? And Elisha said, Give the people, that they may eat: for thus saith the Lord, They shall eat, and shall leave thereof.'),
            plain(44, 'So he set it before them, and they did eat, and left thereof, according to the word of the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'firstfruits-offering',
          html:
            'A man from Baalshalisha brings Elisha bread of the firstfruits—twenty loaves of barley and fresh corn in the husk. These are gifts of thanksgiving, acknowledgment that the first and best of the harvest belong to the Lord and to His servants. The man gives these to Elisha and says simply, "Give unto the people, that they may eat." He is not giving to Elisha alone. He is giving to the prophet&apos;s entire community.',
        },
        {
          kind: 'commentary',
          id: 'servant-doubt',
          html:
            'Elisha&apos;s servant looks at the twenty loaves and looks out at the hundred hungry people. The math does not work. "What, should I set this before an hundred men?" he asks. How can so little feed so many? His question is reasonable. It is the question we would all ask when asked to do the impossible.',
        },
        {
          kind: 'commentary',
          id: 'elisha-abundance',
          html:
            'But Elisha responds: "Give the people, that they may eat: for thus saith the Lord, They shall eat, and shall leave thereof." Not only will they eat. They will leave food behind. The provision will exceed the need. And it does. The people eat, and there is food left over. The word of the Lord does not create scarcity; it creates abundance.',
        },
        {
          kind: 'christ',
          id: 'christ-bread',
          title: 'Christ Connection — The One Who Multiplies Bread',
          html:
            'Jesus would feed five thousand with five loaves and two fishes (Matthew 14:13–21) and four thousand with seven loaves and a few small fishes (Matthew 15:32–39). Both miracles directly echo this moment in 2 Kings: a small offering of bread is placed in the hands of God&apos;s servant, and it becomes abundance for the multitude. But whereas Elisha gives bread to the hungry, Jesus calls Himself the True Bread from heaven (John 6:35, 51). He is not merely the one who multiplies bread; He is the Bread itself. His body broken for many is the ultimate multiplication—the infinite life of God poured out as food for the world.',
        },
        {
          kind: 'commentary',
          id: 'firstfruits-pattern',
          html:
            'The pattern in these four miracles is the same: a small thing is offered or discovered, emptiness is filled, what was lacking becomes abundant, and what was dead or poisoned becomes life-giving. The widow&apos;s single pot of oil, the Shunammite&apos;s chamber, the prophet&apos;s search for food, the man of Baalshalisha&apos;s twenty loaves—each is received and transformed by Elisha&apos;s faith and God&apos;s power. Nothing is too small for God to use. No need is too large for God to meet.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world of scarcity—or so we are often told. There is not enough time, not enough money, not enough love to go around. But Elisha teaches us a different mathematics: the mathematics of God. When we offer what we have, when we share the firstfruits, when we give to the poor and the hungry, we discover that God&apos;s provision exceeds what we thought possible. The miracle is not that bread multiplies; it is that God multiplies blessing through the faithfulness of His servants and the generosity of His people.',
        },
        {
          kind: 'reflection',
          id: 'bread-multitude',
          prompt: 'The servant looked at twenty loaves and saw impossibility. Elisha looked at them and saw sufficiency with abundance. Where are you tempted to see scarcity instead of trusting in God&apos;s provision?',
        },
      ],
    },
  ],
};
