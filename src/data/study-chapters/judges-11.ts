import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const JUDGES_11: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 11,
  estimatedMinutes: { beginner: 3, intermediate: 10, deep: 13 },
  intros: [
    'Jephthah the Gileadite was born of a harlot and expelled from his father&apos;s house. Yet when Israel faced invasion from Ammon, the elders called upon him as their only hope. His rise from the margins mirrors the pattern Scripture establishes: God&apos;s deliverers often come from rejected places. But Jephthah&apos;s story darkens. A vow made in the heat of battle will cost him everything he loves—a chapter that asks hard questions about rash speech, the binding weight of words, and the faith of those who are caught in the consequences of others&apos; choices.',
    'This is also a chapter that features in Hebrews 11 among the giants of faith, even as the story itself feels like a tragedy. The contrast is unsettling and teaches us that God&apos;s acceptance of our faith does not mean He endorses every choice we make.',
  ],
  sections: [
    {
      ref: 'Judges 11:1–3',
      title: 'Rejected and Exiled',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(1, 'Now Jephthah the Gileadite was a mighty man of valour: and he was the son of an harlot: and Gilead begat Jephthah.'),
            plain(2, 'And Gilead&apos;s wife bare him sons; and his wife&apos;s sons grew up, and they thrust out Jephthah, and said unto him, Thou shalt not inherit in our father&apos;s house; for thou art the son of a strange woman.'),
            plain(3, 'Then Jephthah fled from his brethren, and dwelt in the land of Tob: and there were gathered vain men to Jephthah, and went out with him.'),
          ],
        },
        {
          kind: 'commentary',
          html: 'Jephthah begins where many of Scripture&apos;s heroes begin: in shame and exile. Born of a harlot (likely a concubine, but marked with permanent stain), he faced rejection by his father&apos;s household when Gilead&apos;s wife gave her own sons precedence. The phrase "thou art the son of a strange woman" was his permanent label—his birth a disqualification for inheritance.',
          id: 'jud11-rejected',
        },
        {
          kind: 'commentary',
          html: 'Yet this exile became a crucible. Jephthah fled to Tob, where "vain men" (adventurers, outcasts, the desperate) gathered to him. He became their captain. The pattern is consistent: David in the cave of Adullam, Jesus rejected by His own synagogue, the apostles fishermen and tax collectors. God&apos;s strength meets us in our shame, and our lowest point often precedes our calling.',
          id: 'jud11-exile-strength',
        },
        {
          kind: 'carry',
          html: 'What part of your story feels disqualifying? The shame you carry, the family wounds, the place you&apos;ve been marked as "less than"? Scripture suggests that this very place—the place you thought was the end—can become the ground where God builds something new in you. Your exile need not be permanent.',
        },
        {
          kind: 'reflection',
          prompt: 'When have you felt rejected or exiled by people who were supposed to welcome you? What did God do in that season?',
          id: 'jud11-ref1',
        },
      ],
    },
    {
      ref: 'Judges 11:4–11',
      title: 'The Elders Reverse Their Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(4, 'And it came to pass in process of time, that the children of Ammon made war against Israel.'),
            plain(5, 'And when the children of Ammon made war against Israel, the elders of Gilead went to fetch Jephthah out of the land of Tob:'),
            plain(6, 'And they said unto Jephthah, Come, and be our captain, that we may fight with the children of Ammon.'),
            plain(7, 'And Jephthah said unto the elders of Gilead, Did not ye hate me, and expel me out of my father&apos;s house? and why are ye come unto me now when ye are in distress?'),
          ],
        },
        {
          kind: 'hebrew',
          id: 'jud11-heb-qatzar-distress-1',
          title: 'Qatzar — Distress',
          script: 'קָצַר',
          translit: '**Qatzar** (kaw-TSAR)',
          description: 'Narrow, constricted, distressed. When the elders came to Jephthah, they were "qatzarim"—hemmed in by fear and the enemy&apos;s advance. Their desperation reversed what their pride had once decreed.',
        },
        {
          kind: 'commentary',
          html: 'The invasion of Ammon changed everything. Jephthah, once cast out, was now the indispensable man. The elders came to him with the deference they once withheld—"Come, and be our captain."',
          id: 'jud11-reversal',
        },
        {
          kind: 'commentary',
          html: 'But Jephthah did not forget. His response was measured, even wounded: "Did not ye hate me, and expel me out of my father&apos;s house? and why are ye come unto me now when ye are in distress?" He pressed the wound. The men who despised him were now begging. Yet he did not turn them away.',
          id: 'jud11-memory',
        },
        {
          kind: 'commentary',
          html: 'The elders answered: "The Lord be witness between us, if we do not so according to thy words." They swore an oath. They made Jephthah "head and captain over all the inhabitants of Gilead." What was denied him before—inheritance, honor, standing—was now granted in full measure. But gifts won in crisis come with the weight of desperation.',
          id: 'jud11-oath',
        },
        {
          kind: 'carry',
          html: 'When others come back to you after having dismissed you, how do you respond? The grace to welcome them back—to let go of the wound—is not weakness. It mirrors the character of God, who does not hold our failures against us when we turn. But notice: Jephthah accepted a position of trust. With that acceptance came immense responsibility.',
        },
        {
          kind: 'reflection',
          prompt: 'Who has come back to you after pushing you away? Did you let them? What happened?',
          id: 'jud11-ref2',
        },
      ],
    },
    {
      ref: 'Judges 11:12–28',
      title: 'The Diplomatic Letter—Scripture as Argument',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(12, 'And Jephthah sent messengers unto the king of the children of Ammon, saying, What hast thou to do with me, that thou art come against me to fight in my land?'),
            plain(13, 'And the king of the children of Ammon answered unto the messengers of Jephthah, Because Israel took away my land, when they came up out of Egypt, from Arnon even unto Jabbok, and unto Jordan: now therefore restore those lands again peaceably.'),
            plain(14, 'And Jephthah sent messengers again unto the king of the children of Ammon:'),
            plain(15, 'And said unto him, Thus saith Jephthah, Israel took not away the land of Moab, nor the land of the children of Ammon:'),
            plain(16, 'But when Israel came up from Egypt, and walked through the wilderness unto the Red sea, and came to Kadesh;'),
            plain(17, 'Then Israel sent messengers unto the king of Edom, saying, Let me, I pray thee, pass through thy land: but the king of Edom would not hearken thereto. And in like manner they sent unto the king of Moab: but he refused: for Israel abode in Kadesh.'),
            plain(18, 'Then they went along through the wilderness, and compassed the land of Edom, and the land of Moab, and came by the east side of the land of Moab, and pitched on the other side of Arnon, but came not within the border of Moab: for Arnon was the border of Moab.'),
            plain(19, 'And Israel sent messengers unto Sihon king of the Amorites, the king of Heshbon; and Israel said unto him, Let us pass, we pray thee, through thy land into my place.'),
            plain(20, 'But Sihon trusted not Israel to pass through his coasts: but Sihon gathered all his people together, and pitched in Jahaz, and fought against Israel.'),
            plain(21, 'And the Lord God of Israel delivered Sihon and all his people into the hand of Israel, and they smote him: so Israel possessed all the land of the Amorites, the inhabitants of that country.'),
            plain(22, 'And they possessed all the coasts of the Amorites, from Arnon even unto Jabbok, and from the wilderness even unto Jordan.'),
            plain(23, 'So now the Lord God of Israel hath dispossessed the Amorites from before his people Israel, and shouldest thou possess it?'),
            plain(24, 'Wilt not thou possess that which Chemosh thy god giveth thee to possess? So whomsoever the Lord our God shall drive out from before us, them will we possess.'),
            plain(25, 'And now art thou any thing better than Balak the son of Zippor, king of Moab? did he ever strive against Israel, or did he ever fight against them,'),
            plain(26, 'Whiles Israel dwelt in Heshbon and her towns, and in Aroer and her towns, and in all the cities that be along by the coasts of Arnon, three hundred years? why therefore did ye not recover them within that time?'),
            plain(27, 'Wherefore I have not sinned against thee, but thou doest me wrong to war against me: the Lord the Judge be judge this day between the children of Israel and the children of Ammon.'),
            plain(28, 'Howbeit the king of the children of Ammon hearkened not unto the words of Jephthah which he sent by the messengers.'),
          ],
        },
        {
          kind: 'commentary',
          html: 'Before Jephthah drew a sword, he drew his pen. He sent messengers to the king of Ammon with a historical and theological brief. This is one of the longest diplomatic statements in Judges—a chapter-long argument grounded in Torah history.',
          id: 'jud11-letter-intro',
        },
        {
          kind: 'hebrew',
          id: 'jud11-heb-yiftach-he-opens-2',
          title: 'Yiftach — He Opens',
          script: 'יִפְתָּח',
          translit: '**Yiftach** (yif-TAKH)',
          description: 'To open, to loose. Jephthah&apos;s name itself suggests the capacity to open doors, to speak, to unlock solutions through words. His letter is his namesake in action.',
        },
        {
          kind: 'commentary',
          html: 'Jephthah&apos;s argument: Israel did not take Ammon&apos;s land. They took land from Sihon the Amorite king, who had himself seized it from Moab earlier. Israel merely walked around Edom and Moab (the Edomites and Moabites refused passage, so Israel respected those borders). Sihon refused passage and attacked first. The Lord gave Sihon&apos;s land to Israel.',
          id: 'jud11-argument',
        },
        {
          kind: 'commentary',
          html: 'Then comes the rhetorical finisher: "So now the Lord God of Israel hath dispossessed the Amorites from before his people Israel, and shouldest thou possess it?" He turns Ammon&apos;s own theology back on them: "Wilt not thou possess that which Chemosh thy god giveth thee to possess?" The Lord is Judge between them.',
          id: 'jud11-closing',
        },
        {
          kind: 'commentary',
          html: 'And a final, bitter observation: "And now art thou any thing better than Balak the son of Zippor, king of Moab? did he ever strive against Israel, or did he ever fight against them, Whiles Israel dwelt in Heshbon and her towns... three hundred years? why therefore did ye not recover them within that time?" If Ammon&apos;s claim was just, why wait 300 years? The accusation is clear: this war is not about justice. It is about greed.',
          id: 'jud11-accusation',
        },
        {
          kind: 'carry',
          html: 'Jephthah was a scholar as much as a warrior. He knew Torah, he knew the Exodus narrative, he could argue the history. Do not assume that judges and deliverers were only strong arms. Some were also strong minds. Your study of Scripture, your willingness to think carefully about God&apos;s word, is itself a kind of strength. It equips you to speak truth in circumstances where others are confused.',
        },
        {
          kind: 'reflection',
          prompt: 'When have you used knowledge of Scripture to settle a question or clarify a situation? What did you learn about yourself?',
          id: 'jud11-ref3',
        },
      ],
    },
    {
      ref: 'Judges 11:29–33',
      title: 'The Spirit Comes; The Vow Is Made',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(29, 'Then the Spirit of the Lord came upon Jephthah, and he passed over Gilead, and Manasseh, and passed over the land of the children of Ammon.'),
            plain(30, 'And Jephthah vowed a vow unto the Lord, and said, If thou shalt without fail deliver the children of Ammon into mine hands,'),
            plain(31, 'Then it shall be, that whatsoever cometh forth of the doors of my house to meet me, when I return in peace from the children of Ammon, shall surely be the Lord&apos;s, and I will offer it up for a burnt offering.'),
            plain(32, 'So Jephthah passed over unto the children of Ammon to fight against them: and the Lord delivered them into his hands.'),
            plain(33, 'And he smote them from Aroer, even till thou come to Minnith, even twenty cities, and unto the plain of the vineyards, with a very great slaughter. Thus the children of Ammon were subdued before the children of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          html: 'The Spirit of the Lord came upon Jephthah. In the moment before battle, the same power that had rested on Deborah and Samson came to him. He passed through the territories he now commanded—Gilead, Manasseh—and advanced toward the Ammonite camp.',
          id: 'jud11-spirit',
        },
        {
          kind: 'hebrew',
          id: 'jud11-heb-nadar-vow-3',
          title: 'Nadar — Vow',
          script: 'נָדַר',
          translit: '**Nadar** (naw-DAR)',
          description: 'To vow, to make a promise before God. A vow was binding and irrevocable (see Numbers 30). Ecclesiastes 5:4–5 warns: "Better is it that thou shouldest not vow, than that thou shouldest vow and not pay."',
        },
        {
          kind: 'commentary',
          html: 'And in the same breath, Jephthah made a vow: "If thou shalt without fail deliver the children of Ammon into mine hands, Then it shall be, that whatsoever cometh forth of the doors of my house to meet me, when I return in peace from the children of Ammon, shall surely be the Lord&apos;s, and I will offer it up for a burnt offering."',
          id: 'jud11-vow-made',
        },
        {
          kind: 'commentary',
          html: 'This vow is universally agonizing for interpreters. What did Jephthah intend? Two schools of thought emerge: (1) He intended to sacrifice the first living thing he encountered, assuming it would be an animal. The first thing to meet him would be his daughter—a human sacrifice, which Torah explicitly forbade (Leviticus 18:21, 20:2–5; Deuteronomy 12:31). This reading sees Jephthah as having made a rash promise in the heat of battle, binding himself to an act he should never have sworn to perform. God did not require this; Jephthah&apos;s rashness condemned his own daughter. (2) She was dedicated to perpetual virginity in service to the tabernacle—a living sacrifice, not a death. This reading spares the moral horror but strains the text.',
          id: 'jud11-vow-interpretation',
        },
        {
          kind: 'commentary',
          html: 'The battle was decisive. The Lord delivered Ammon into Jephthah&apos;s hands. He struck from Aroer to Minnith—twenty cities—with very great slaughter. The children of Ammon were subdued. Jephthah had won completely. But victory meant the vow was now binding.',
          id: 'jud11-victory',
        },
        {
          kind: 'carry',
          html: 'In the moment of strength—when God&apos;s Spirit rests on you and you are about to walk into victory—be careful what you promise. The fervor of the moment, the adrenaline of faith, can lead to words you will spend the rest of your life paying for. The most important vow you ever make should be made in stillness, with counsel, with time. Rash speech in the presence of God is not more spiritual; it is more dangerous.',
        },
        {
          kind: 'reflection',
          prompt: 'Have you ever made a promise in a moment of emotion that cost you more than you anticipated? What would you do differently?',
          id: 'jud11-ref4',
        },
      ],
    },
    {
      ref: 'Judges 11:34–38',
      title: 'His Daughter Meets Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(34, 'And Jephthah came to Mizpeh unto his house, and, behold, his daughter came out to meet him with timbrels and with dances: and she was his only child; beside her he had neither son nor daughter.'),
            plain(35, 'And it came to pass, when he saw her, that he rent his clothes, and said, Alas, my daughter! thou hast brought me very low, and thou art one of them that trouble me: for I have opened my mouth unto the Lord, and I cannot go back.'),
            plain(36, 'And she said unto him, My father, if thou hast opened thy mouth unto the Lord, do to me according to that which hath proceeded out of thy mouth; forasmuch as the Lord hath taken vengeance for thee of thine enemies, even of the children of Ammon.'),
            plain(37, 'Let this thing be done for me: let me alone two months, that I may go up and down upon the mountains, and bewail my virginity, I and my fellows.'),
            plain(38, 'And he said, Go. And he sent her away for two months: and she went with her companions, and bewailed her virginity upon the mountains.'),
          ],
        },
        {
          kind: 'commentary',
          html: 'Jephthah returned to Mizpeh victorious. And his daughter came out to meet him—timbrels and dances, the celebration of a father&apos;s triumph. She was his only child. No son, no other daughters. All his hope was in her.',
          id: 'jud11-daughter-meets',
        },
        {
          kind: 'hebrew',
          id: 'jud11-heb-bachon-young-woman-4',
          title: 'Bachon — Young Woman',
          script: 'בָּחוֹן',
          translit: '**Bachon** (bah-KHONE) or **Bat** (baht)',
          description: 'Daughter; also means young woman. In Judges 11:37, the text speaks of her "bewailing her virginity," suggesting she was young, perhaps between 18 and 25, her entire future unmade.',
        },
        {
          kind: 'commentary',
          html: 'When Jephthah saw her, he tore his clothes. "Alas, my daughter! thou hast brought me very low, and thou art one of them that trouble me: for I have opened my mouth unto the Lord, and I cannot go back." The man who had been brilliant with words about law and history was now undone. His vow stood. His mouth was bound. And the cost would be paid by the person he loved most.',
          id: 'jud11-father-grief',
        },
        {
          kind: 'commentary',
          html: 'But his daughter&apos;s response is extraordinary. She did not protest, did not ask him to find another way. Instead: "My father, if thou hast opened thy mouth unto the Lord, do to me according to that which hath proceeded out of thy mouth; forasmuch as the Lord hath taken vengeance for thee of thine enemies, even of the children of Ammon."',
          id: 'jud11-daughter-response',
        },
        {
          kind: 'commentary',
          html: 'She asked one kindness: two months to go into the mountains with her companions and bewail her virginity. Not mourn her death (if that is what awaits), but her unmade life—the husband she would never have, the children she would never bear. The most fundamental feminine loss in that world. Jephthah granted it. She went, and "she went with her companions, and bewailed her virginity upon the mountains."',
          id: 'jud11-two-months',
        },
        {
          kind: 'carry',
          html: 'She was trapped in her father&apos;s mistake, yet her response was grace. She did not rage at him, did not despise him. She yielded to what he had sworn, and she grieved what she had lost. Sometimes the most godly response to another person&apos;s failure is not to fight it but to grieve it, to honor God even when honoring God costs you everything. Her dignity exceeds her father&apos;s in this moment.',
        },
        {
          kind: 'reflection',
          prompt: 'Who has had to pay a cost for someone else&apos;s mistake? How did they bear it?',
          id: 'jud11-ref5',
        },
      ],
    },
    {
      ref: 'Judges 11:39–40',
      title: 'The Vow Is Fulfilled; Memory Remains',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(39, 'And it came to pass at the end of two months, that she returned unto her father, who did with her according to his vow which he had vowed: and she knew no man. And it was a custom in Israel,'),
            plain(40, 'That the daughters of Israel went yearly to lament the daughter of Jephthah the Gileadite four days in a year.'),
          ],
        },
        {
          kind: 'commentary',
          html: 'After two months, she returned. The text then says, "he did with her according to his vow which he had vowed: and she knew no man." This is as close as the text comes to naming what happened. The darkness of the moment is not described. It is left for the reader&apos;s conscience to bear.',
          id: 'jud11-vow-fulfilled',
        },
        {
          kind: 'commentary',
          html: 'But the chapter does not end in silence. "And it was a custom in Israel, That the daughters of Israel went yearly to lament the daughter of Jephthah the Gileadite four days in a year." Israel kept her memory alive. Every year, the daughters of Israel climbed the mountains to bewail her, as she had bewailed herself. Her name is lost to us—Scripture does not give it—but her grief was ritualized, preserved, honored. The pain was not erased. It was remembered.',
          id: 'jud11-lament',
        },
        {
          kind: 'carry',
          html: 'Sometimes our story is not one of victory. It is a story of loss, of paying a price for someone else&apos;s rashness, of bearing grief that should never have been ours to bear. But grief that is witnessed, that is named, that is brought into community—that grief is also a kind of honor. You are not forgotten. Your loss matters. The pain you carry has a place in the story God is telling.',
        },
        {
          kind: 'reflection',
          prompt: 'Who do you know who bears a loss they did not choose? How can you be part of remembering them?',
          id: 'jud11-ref6',
        },
      ],
    },
    {
      ref: 'Judges 11 — Christ Connection',
      title: 'The Only Son Truly Given',
      blocks: [
        {
          kind: 'christ',
          id: 'jud11-christ-only-son',
          title: 'Christ Connection — The Only Son Given by the Father',
          html: 'Jephthah&apos;s vow was a trap of his own making. He promised a burnt offering from the doors of his house, and his only child paid the price. But God did not require this. Torah forbade human sacrifice. The tragedy was Jephthah&apos;s alone to bear, the cost of rash words. Yet in the New Testament, God the Father did what Jephthah could only contemplate in horror: He gave His own Son, willingly, as the true sacrifice (Romans 3:25; Hebrews 9:26–28). Jesus was the only Son, the beloved, and the Father gave Him up for our redemption. The contrast is profound. Jephthah bound himself by his own mouth; God bound Himself by covenant love. Jephthah&apos;s daughter paid for his failure; Christ paid for our freedom. And Hebrews 11:32 names Jephthah himself among the heroes of faith—not because his vow was good, but because despite his failure, he believed God and was delivered.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
  bottomShare: {
    label: 'Share Judges 11',
    quote: 'Better is it that thou shouldest not vow, than that thou shouldest vow and not pay.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ecclesiastes 5:5 · Judges 11 Study Guide',
  },
};
