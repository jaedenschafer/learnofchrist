import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 1 Kings 11 — Solomon&apos;s Apostasy and the Kingdom Torn
 *
 * The wisest man who ever lived turns his heart from God. Solomon, the king
 * who built the temple, the man to whom God gave wisdom beyond measure, takes
 * wives from the nations God forbade. And as his heart divides between the
 * God of Israel and the gods of his foreign wives, the Lord tears the kingdom
 * from his hand — not all of it, but ten tribes. Mercy preserves the Davidic
 * line. But the price of apostasy is written in a kingdom split in two.
 * This chapter shows us that wisdom alone cannot keep the heart true. Only
 * wholehearted devotion to God sustains a reign. And it shows us a God who
 * judges with mercy: tearing the kingdom to wake the conscience of His people,
 * but preserving the promise so that the true Solomon — the eternal King whose
 * heart cannot be turned — might come.
 */
export const KINGS_1_11: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 11,

  estimatedMinutes: { beginner: 7, intermediate: 14, deep: 19 },
  opener: {
    matchTitle: /Solomon Falls into Idolatry/i,
    caption: '1 Kings 11',
  },
  intros: [
    'Solomon reached the height of his wisdom and power in the earlier chapters of 1 Kings. He prayed for understanding, received it in abundance, and built the temple that would stand as the symbol of God&apos;s presence with Israel. The kingdom was secure. The wealth poured in. And the king was revered throughout the world.',
    'But 1 Kings 11 is the fall. It opens not with triumph but with apostasy — the slow erosion of a king&apos;s heart as he makes a series of choices that contradict everything God had promised and commanded. Solomon marries women from the nations God explicitly forbade. He multiplies wives and concubines against the law given in Deuteronomy. He builds shrines to foreign gods, including Molech, the god of child sacrifice. And as his heart turns from wholehearted devotion to fragmented compromise, God acts with both judgment and mercy: the kingdom is torn, but not destroyed. The Davidic line is preserved. And in that preservation, we see the God who judges to heal, who wounds to restore — and who will send a true Solomon, a king whose heart can never be turned from the Father.',
  ],

  bottomShare: {
    label: 'Share 1 Kings 11',
    quote:
      'Solomon, the wisest man in the world, divided his heart among many gods. But God, in mercy, tore the kingdom not to destroy it, but to preserve the line from which the eternal King would come.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 11 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-solomon-reign',
      kind: 'study',
      source: 'Sefaria',
      label: 'Solomon&apos;s Reign and Temple',
      url: 'https://www.sefaria.org/1_Kings.1',
      description: 'Solomon&apos;s ascension to the throne and his building of the first temple.',
    },
    {
      id: 'israel-museum-solomonic',
      kind: 'museum',
      source: 'Israel Museum',
      label: 'Solomonic Period Artifacts',
      url: 'https://www.imj.org.il/',
      description: 'Museum collection of objects from Solomon&apos;s era revealing 10th-century Iron Age culture.',
    },
    {
      id: 'iaa-solomon-period',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Archaeology of the Solomonic Period',
      url: 'https://www.antiquities.org.il/',
      description: 'Excavation evidence for urban centers and building projects attributed to Solomon.',
    },
  ],

  sections: [
    /* ─── 1 Kings 11:1–3 — The Strange Wives ───────────────────────────── */
    {
      ref: '1 Kings 11:1–3',
      title: 'The Strange Wives',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 1,
              spans: [
                t('But King Solomon '),
                hg('loved many strange women', '11-strange-wives'),
                t(', together with the daughter of Pharaoh, women of the Moabites, Ammonites, Edomites, Zidonians, and Hittites;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Of the nations concerning which the Lord had said unto the children of Israel, "Ye shall not go in to them, neither shall they come in unto you: for surely they will turn away your heart after their gods." Solomon '),
                hg('clave unto these in love', '11-clave-love'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And he had '),
                hg('seven hundred wives, princesses', '11-seven-hundred'),
                t(', and three hundred concubines: and his wives turned away his heart.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '11-strange-wives',
          html:
            'The opening word says everything: "But." After all the splendor, all the wisdom, all the building and blessing, we encounter a reversal. Solomon loved women from the very nations God had forbidden. These were not merely political alliances — the text emphasizes "loved," a word that speaks to the heart&apos;s deepest attachment. And the women he chose came from pagan nations whose gods were utterly opposed to the God of Israel.[res:sefaria-solomon-reign][res:israel-museum-solomonic][res:iaa-solomon-period]',
        },
        {
          kind: 'commentary',
          id: '11-clave-love',
          html:
            'The word "clave" (from the Hebrew דָּבַק, <em>davaq</em>) means to cleave, to stick fast, to hold firmly. Solomon did not merely dally with these women — he held fast to them, clung to them. The command God gave through Moses was explicit: "Ye shall not go in to them." The consequence was equally explicit: "they will turn away your heart." And Solomon, knowing the law, knowing the danger, clave unto these women in love.',
        },
        {
          kind: 'hebrew',
          id: '11-nashim-nokhriyyot',
          title: 'Nashim Nokhriyyot — "Strange Women"',
          script: 'נָשִׁים נָכְרִיּוֹת',
          translit: '<strong>Nashim nokhriyyot</strong> · foreign women; women of strange nations',
          description:
            'The Hebrew word <em>nokhriyyot</em> (foreign, strange) is not merely about ethnicity. In the covenant context, it means women outside the covenant community — women whose gods, whose values, whose fundamental orientation was away from the God of Israel. To marry them was not only a personal choice; it was a break with the covenant itself.',
        },
        {
          kind: 'commentary',
          id: '11-seven-hundred',
          html:
            'Seven hundred wives and three hundred concubines. The number is staggering. Deuteronomy 17:17 had forbidden the king to "multiply wives," warning that such multiplication would "turn away his heart." Solomon did not merely disobey the law — he shattered it. With each marriage, he brought into the palace women who worshiped other gods, women whose devotion divided his own.',
        },
        {
          kind: 'carry',
          html:
            'Compromise grows slowly. Solomon did not wake one morning and decide to abandon God. He married one foreign woman, then another, then another. Each marriage seemed a triumph of diplomacy, an alliance with a powerful nation, a sign of his wealth and prestige. But the heart is not divided. It cannot serve two masters. Every choice that pulled Solomon toward the gods of others pulled him away from wholehearted devotion to the God who had given him wisdom. Where in your own life do small compromises — each seeming small and justified — slowly turn your heart away from what matters most?',
        },
        {
          kind: 'reflection',
          id: '11-strange-wives-reflection',
          prompt:
            'Solomon allowed repeated small compromises to gradually turn his heart. What "strange women" — what draws or attachments — gradually turn your own heart away from your deepest devotions?',
        },
      ],
    },

    /* ─── 1 Kings 11:4–8 — His Heart Was Not Perfect ────────────────────── */
    {
      ref: '1 Kings 11:4–8',
      title: 'His Heart Was Not Perfect',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 4,
              spans: [
                t('For it came to pass, when Solomon was old, that his wives '),
                hp('turned away his heart after other gods', '11-heart-turned'),
                t(': and his heart was '),
                hp('not perfect with the Lord his God', '11-not-perfect'),
                t(', as was the heart of David his father.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('For Solomon went after Ashtoreth the goddess of the Zidonians, and after Milcom the abomination of the Ammonites.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Solomon did '),
                hg('evil in the sight of the Lord', '11-evil'),
                t(', and went not fully after the Lord, as did David his father.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Then did Solomon build an high place for Chemosh, the abomination of Moab, in the hill that is before Jerusalem, and for Molech, the abomination of the children of Ammon.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Likewise did he for all his strange wives, which burnt incense and sacrificed unto their gods.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '11-heart-turned',
          html:
            'The text marks a threshold: "when Solomon was old." In old age, when he might have drawn closer to God, his wives turned his heart away. The phrasing is significant — they turned his heart, but Solomon allowed it. He permitted the turning. His accumulated choices had opened his heart to be led into apostasy.',
        },
        {
          kind: 'hebrew',
          id: '11-tamim-lev',
          title: 'Tamim — "Perfect" or "Whole"',
          script: 'תָּמִים',
          translit: '<strong>Tamim</strong> · whole; perfect; undivided; complete',
          description:
            'The Hebrew <em>tamim</em> does not mean sinless perfection. It means whole, undivided, complete in devotion. David&apos;s heart was tamim — wholly turned toward God. Solomon&apos;s heart was not. It was divided, scattered among the gods of his wives, fragmented between the God who had chosen him and the gods who drew him through the women he loved.',
        },
        {
          kind: 'commentary',
          id: '11-not-perfect',
          html:
            'The comparison to David is devastating. David, who fell into grave sin with Bathsheba, whose hands were stained with blood — David&apos;s heart remained perfect, whole, oriented toward God. David repented. David returned. Solomon, the wisest man in the world, allowed his heart to become divided. He went "not fully after the Lord." He gave part of his allegiance to God and parts to the gods of his wives. And in doing so, he violated the very foundation of the covenant: "Thou shalt have no other gods before me."',
        },
        {
          kind: 'hebrew',
          id: '11-ashtoreth-milcom',
          title: 'Ashtoreth and Milcom — Gods of Fertility and Disdain',
          script: 'עַשְׁתֹּרֶת מִלְכֹּם',
          translit: '<strong>Ashtoreth</strong> · goddess of fertility; <strong>Milcom</strong> · Ammonite god',
          description:
            'Ashtoreth was the Sidonian goddess of fertility and love — a god deeply opposed to the exclusive worship of Israel&apos;s God. Milcom was the god of the Ammonites, also spelled Molech. Later texts reveal that Molech worship involved the sacrifice of children. Solomon built shrines for both. His own wives led him to offer incense and sacrifice to gods whose very nature was a denial of everything the God of Israel represented.',
        },
        {
          kind: 'commentary',
          id: '11-evil',
          html:
            'The text is clear: Solomon did evil. Not accidentally. Not through ignorance. He knew the law. He knew the commandment. He knew what had been forbidden. And he chose otherwise. He chose to please his wives. He chose to honor their gods. And in doing so, he "did evil in the sight of the Lord."',
        },
        {
          kind: 'christ',
          id: '11-christ-true-solomon',
          title: 'Christ Connection — The True Solomon',
          html:
            'Solomon was called the king in whom the Davidic promise reached its zenith. He was the wisest man who ever lived. And his heart, in the end, was divided. But there would come another Solomon — one whose heart could never be divided, whose wholehearted devotion to the Father would never falter. Jesus is called the "wisdom of God" (1 Cor. 1:24). He is the true king of the Davidic line. And His heart was tamim — whole, undivided, perfectly oriented toward the Father&apos;s will. In the desert, when Satan offered Him kingdoms and glory, He said, "Get thee hence, Satan" (Matt. 4:10). His heart could not be turned. His devotion could not be divided. Where Solomon failed, Christ prevails.',
        },
        {
          kind: 'carry',
          html:
            'God does not demand sinless perfection — David sinned grievously and repented. But God does demand a whole heart. He demands that we serve Him fully, not partially. He demands that we not divide our devotion between Him and the gods we craft for ourselves — whether those gods are wealth, power, pleasure, or the approval of others. What have you been "going after" that is dividing your heart? What would it mean to turn your heart fully back?',
        },
        {
          kind: 'reflection',
          id: '11-not-perfect-reflection',
          prompt:
            'Solomon&apos;s heart was "not perfect," not wholly devoted. What divides your own heart from wholehearted devotion? What would it take to return your heart fully to God?',
        },
      ],
    },

    /* ─── 1 Kings 11:9–13 — The Judgment and the Promise ───────────────── */
    {
      ref: '1 Kings 11:9–13',
      title: 'The Judgment and the Promise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 9,
              spans: [
                t('And the Lord was angry with Solomon: because his heart was turned from the Lord God of Israel, which had appeared unto him twice,'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And had commanded him concerning this thing, that he should not go after other gods: but he kept not that which the Lord commanded.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Wherefore the Lord said unto Solomon, Forasmuch as this is done of thee, and thou hast not kept my covenant and my statutes which I have commanded thee, I will surely '),
                hg('rend the kingdom from thee', '11-rend'),
                t(', and will give it to thy servant.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Notwithstanding in thy days I will not do it for David thy father&apos;s sake: but I will rend it out of the hand of thy son.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Howbeit I will not rend away all the kingdom; but will give one tribe to thy son '),
                hp('for David my servant&apos;s sake, and for Jerusalem&apos;s sake which I have chosen', '11-mercy-preserved'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '11-rend',
          html:
            'The Lord appears to Solomon twice — once in Gibeon to grant him wisdom (1 Kings 3), once at the dedication of the temple (1 Kings 9). Both times, He commanded Solomon not to follow other gods. Both times, Solomon heard the word of the Lord. And yet he kept it not. God&apos;s judgment is swift and irrevocable: "I will surely rend the kingdom from thee."',
        },
        {
          kind: 'commentary',
          id: '11-mercy-preserved',
          html:
            'But notice what follows: not all is torn away. One tribe will remain to Solomon&apos;s son. Why? Not because Solomon deserves it. Not because his sin is overlooked. But "for David my servant&apos;s sake, and for Jerusalem&apos;s sake which I have chosen." God tore the kingdom to judge apostasy — to show that turning from Him has consequences. But He preserved a remnant because of His covenant promise to David. The Davidic line would not end. The promise was not revoked. Even in judgment, mercy breaks through.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world where actions have consequences. When we turn away from God, judgment follows. But we do not live under judgment alone. If you have a covenant with God — if you have been claimed by His promise through Christ — then even when you fall, even when you scatter your devotion, the promise holds. The line is preserved. You are not abandoned. Judgment calls you to return, not to despair.',
        },
        {
          kind: 'reflection',
          id: '11-judgment-promise-reflection',
          prompt:
            'God judged Solomon&apos;s apostasy but preserved the dynasty. Have you experienced judgment that awakened you to repentance? What promises of God have held true even when you failed?',
        },
      ],
    },

    /* ─── 1 Kings 11:14–27 — The Adversaries Rise ─────────────────────── */
    {
      ref: '1 Kings 11:14–27',
      title: 'Three Adversaries Raised Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(14, 'And the Lord raised up an adversary unto Solomon, Hadad the Edomite: he was of the king&apos;s seed in Edom.'),
            {
              number: 15,
              spans: [
                t('For it came to pass, when David was in Edom, and Joab the captain of the host was gone up to '),
                hg('bury the slain', '11-hadad-escape'),
                t(', after he had smitten every male in Edom;'),
              ],
            },
            plain(16, '(For six months did Joab remain there with all Israel, until he had cut off every male in Edom:)'),
            plain(17, 'That Hadad fled, he and certain Edomites of his father&apos;s servants with him, to go into Egypt; Hadad being yet a little child.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1-kings-11-mid-17',
          html:
            '<p>Opposition rises, exposing the tensions between faith and the throne&apos;s ambitions.</p>',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(18, 'And they arose out of Midian, and came to Paran: and they took men with them out of Paran, and they came to Egypt, unto Pharaoh king of Egypt; which gave him an house, and appointed him victuals, and gave him land.'),
            plain(19, 'And Hadad found great favour in the sight of Pharaoh, so that he gave him to wife the sister of his own wife, the sister of Tahpenes the queen.'),
            plain(20, 'And the sister of Tahpenes bare him Genubath his son, whom Tahpenes weaned in Pharaoh&apos;s house: and Genubath was in the household of Pharaoh among the sons of Pharaoh.'),
            plain(21, 'And when Hadad heard in Egypt that David slept with his fathers, and that Joab the captain of the host was dead, Hadad said to Pharaoh, Let me depart, that I may go to mine own country.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'kings-11-11-mid1',
          html: 'Hadad was a child when David and Joab conquered Edom and killed every male in the land. He escaped with his father&apos;s servants to Egypt, where Pharaoh gave him shelter, a wife from the royal family, and honor. For years, Hadad lived in foreign comfort. But when he heard that David and Joab were dead, he asked to return to his homeland. Pharaoh was puzzled—why leave security for a conquered kingdom? But Hadad needed to go home. The wound of conquest does not heal easily, and now, with the king who defeated him in the grave, Hadad saw his chance to reclaim what was lost.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(22, 'Then Pharaoh said unto him, But what hast thou lacked with me? that, behold, thou seekest to go to thine own country. And he answered, Nothing: howbeit let me go in any wise.'),
            {
              number: 23,
              spans: [
                t('And God raised up another adversary, Rezon the son of Eliadah, which fled from his lord Hadadezer king of Zobah:'),
              ],
            },
            plain(24, 'And he gathered men unto him, and became captain over a band, when David slew them of Zobah: and they went to Damascus, and dwelt therein, and reigned in Damascus.'),
            plain(25, 'And he was an adversary to Israel all the days of Solomon, beside the mischief that Hadad did: and he abhorred Israel, and reigned over Syria.'),
            {
              number: 26,
              spans: [
                t('And Jeroboam the son of Nebat, an Ephrathite of Zereda, Solomon&apos;s servant, a mighty man of valour: and Solomon '),
                hg('set him over all the charge of the house of Joseph', '11-jeroboam-charge'),
                t('.'),
              ],
            },
            plain(27, 'And this is the cause that he lifted up his hand against the king: Whose son was Jeroboam? Even Nebat.'),
          ],
        },
        {
          kind: 'commentary',
          id: '11-hadad-escape',
          html:
            'Hadad was a prince of Edom who escaped as a child when David and Joab conquered Edom. He fled to Egypt, where Pharaoh gave him favor, a wife from the royal family, and a place of honor. Years later, when David and Joab died, Hadad returned to Edom as an "adversary" — a word the text uses for one who rises up in opposition. The wound opened by David and Joab came back to haunt Solomon.',
        },
        {
          kind: 'commentary',
          id: '11-jeroboam-charge',
          html:
            'Jeroboam was a capable man whom Solomon elevated to oversee the labor of the house of Joseph — one of the most important positions in the kingdom. Solomon promoted him, trusted him with power. And yet it was through this man that the kingdom would be torn.',
        },
        {
          kind: 'carry',
          html:
            'As Solomon apostasized, as his heart turned from God, adversaries rose on every side — Hadad from Edom, Rezon from Syria, Jeroboam from within the very administration. None of these men created the kingdom&apos;s crisis. Solomon did. But they were the instruments through which God disciplined the king. Sometimes our own breaking opens the door for others to rise against us. Sometimes the consequences of our turning away from God extend beyond ourselves to those we lead.',
        },
        {
          kind: 'reflection',
          id: '11-adversaries-reflection',
          prompt:
            'As Solomon turned from God, adversaries rose against him. Have you seen how your own spiritual drift created openings for opposition or loss? What would return you to the protection of wholehearted devotion?',
        },
      ],
    },

    /* ─── 1 Kings 11:28–39 — Ahijah Tears the Garment ────────────────── */
    {
      ref: '1 Kings 11:28–39',
      title: 'Ahijah Tears the Garment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(28, 'And the prophet Ahijah the Shilonite found him in the way; and he had clad himself with a new garment; and they two were alone in the field:'),
            {
              number: 29,
              spans: [
                t('And Ahijah caught the new garment that was on him, and '),
                hg('rent it in twelve pieces', '11-twelve-pieces'),
                t(':'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And he said to Jeroboam, Take thee ten pieces: for thus saith the Lord, the God of Israel, "Behold, I will '),
                hg('rend the kingdom out of the hand of Solomon', '11-rend-kingdom-hand'),
                t(', and will give ten tribes to thee:'),
              ],
            },
            {
              number: 31,
              spans: [
                t('(But he shall have one tribe for my servant David&apos;s sake, and for Jerusalem&apos;s sake, the city which I have chosen to put my name there;)'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Because that they have forsaken me, and have worshipped Ashtoreth the goddess of the Sidonians, Chemosh the god of the Moabites, and Milcom the god of the children of Ammon, and have not walked in my ways, to do that which is right in mine eyes, and to keep my statutes and my judgments, as did David his father.'),
              ],
            },
            plain(33, 'Howbeit I will not take the whole kingdom out of his hand: but I will make him prince all the days of his life for David my servant&apos;s sake, whom I chose, because he kept my commandments and my statutes:'),
        ],
        },
        {
          kind: 'commentary',
          id: 'kings-11-11-mid2',
          html: 'Ahijah tore the new garment into twelve pieces—a prophetic sign. Each piece represents a tribe of Israel. Solomon will lose ten of them to Jeroboam. But one tribe will remain to Solomon&apos;s descendants, preserved for David&apos;s sake and for Jerusalem, the city God has chosen. The reason is clear: Solomon has turned from God to worship the gods of his wives. He has broken the covenant, and the kingdom will be broken. But even in judgment, there is mercy. The line will not be extinguished. David&apos;s seed will continue.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(34, 'But I will take the kingdom out of his son&apos;s hand, and will give it unto thee, even ten tribes.'),
            plain(35, 'And unto his son will I give one tribe, that David my servant may have a light alway before me in Jerusalem, the city which I have chosen me to put my name there.'),
            {
              number: 36,
              spans: [
                t('And I will take thee, and thou shalt reign according to all that thy soul desireth, and shalt be king over Israel.'),
              ],
            },
            plain(37, 'And it shall be, if thou wilt hearken unto all that I command thee, and wilt walk in my ways, and do that which is right in my sight, to keep my statutes and my commandments, as David my servant did; that I will be with thee, and build thee a sure house, as I built for David, and will give Israel unto thee.'),
            plain(38, 'And I will for this afflict the seed of David, but not for ever.'),
            plain(39, 'Therefore will Solomon seek to destroy Jeroboam: but Jeroboam arose, and fled into Egypt unto Shishak king of Egypt, and was in Egypt until the death of Solomon.'),
          ],
        },
        {
          kind: 'commentary',
          id: '11-twelve-pieces',
          html:
            'The prophet Ahijah meets Jeroboam in a field and takes hold of his new garment. He rends it into twelve pieces — a symbolic act. The twelve pieces represent the twelve tribes. The tearing represents the breaking of the united kingdom. What happens next is not random violence or political accident. It is the spoken word of God, made visible through prophetic action.',
        },
        {
          kind: 'hebrew',
          id: '11-qara-ket-beshem',
          title: 'Symbolic Action and Prophetic Speech',
          script: 'קָרַע הַכְּתֹנֶת',
          translit: 'Qara ha-ktone · tore the garment',
          description:
            'In Hebrew prophecy, the prophet does not merely speak the word of the Lord — he enacts it. Isaiah walked naked through Jerusalem. Jeremiah wore a yoke of wood. Ahijah tears a garment to show that the kingdom will be torn. The action embodies the word. It makes the spoken judgment visible and undeniable.',
        },
        {
          kind: 'commentary',
          id: '11-rend-kingdom-hand',
          html:
            'Ahijah speaks clearly: God will rend the kingdom out of Solomon&apos;s hand and give ten tribes to Jeroboam. The reason is explicit: Solomon has forsaken the Lord and worshiped the gods of the nations. He has not walked in God&apos;s ways. He has not kept the statutes and judgments that David, his father, kept. The comparison to David echoes throughout this chapter. David sinned, but David&apos;s heart remained wholly devoted to God. Solomon&apos;s heart is divided.',
        },
        {
          kind: 'carry',
          html:
            'The promise to Jeroboam comes with a condition: "If thou wilt hearken unto all that I command thee, and wilt walk in my ways, and do that which is right in my sight... I will be with thee, and build thee a sure house, as I built for David." Jeroboam receives authority, but not unconditionally. He too must keep the covenant. What opportunity are you being given? What conditions come with it? Are you willing to accept blessing only as you keep the covenant?',
        },
        {
          kind: 'reflection',
          id: '11-ahijah-reflection',
          prompt:
            'Ahijah was sent to tell Jeroboam he would receive the kingdom — yet Jeroboam would also face the choice to keep the covenant or break it. What promise in your life comes with the condition that you must walk in God&apos;s ways? How will you choose?',
        },
      ],
    },

    /* ─── 1 Kings 11:40–43 — Solomon&apos;s Death ────────────────────── */
    {
      ref: '1 Kings 11:40–43',
      title: 'The End of Solomon&apos;s Reign',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(40, 'Solomon sought therefore to kill Jeroboam: but Jeroboam arose, and fled into Egypt unto Shishak king of Egypt, and was in Egypt until the death of Solomon.'),
            plain(41, 'And the rest of the acts of Solomon, and all that he did, and his wisdom, are they not written in the book of the acts of Solomon?'),
            plain(42, 'And the time that Solomon reigned in Jerusalem over all Israel was forty years.'),
            plain(43, 'And Solomon slept with his fathers, and was buried in the city of David his father: and Rehoboam his son reigned in his stead.'),
          ],
        },
        {
          kind: 'commentary',
          id: '11-solomon-death',
          html:
            'When Solomon learns that Jeroboam bears the word of the Lord, he seeks to kill him. Jeroboam flees to Egypt, where he waits until Solomon&apos;s death. The great king ends not in triumph but in an attempt to murder the man through whom God will tear his kingdom. Wisdom, in the end, could not save Solomon. Only wholehearted devotion to God can do that.',
        },
        {
          kind: 'carry',
          html:
            'Solomon reigned forty years — the same number of years the Israelites wandered in the wilderness, the same number of days Jesus fasted in the desert, the same number of days the resurrection requires before the ascension. Forty is the number of trial, testing, judgment. Solomon&apos;s reign was long, rich, and glorious — and yet it was also a trial. And he failed. His son would inherit a kingdom broken by his apostasy. Sometimes the consequences of our turning from God are not paid in our lifetimes but in our children&apos;s. What choices are you making that will shape the world your children inherit?',
        },
        {
          kind: 'reflection',
          id: '11-solomon-death-reflection',
          prompt:
            'Solomon&apos;s reign lasted forty years, yet he died trying to kill the man through whom God would break his kingdom. What legacies are you creating through your choices today? What do you want to be remembered for?',
        },
      ],
    },
  ],
};
