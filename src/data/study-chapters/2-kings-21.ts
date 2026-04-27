import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 21 — Manasseh and Amon
 *
 * The longest reign in Judah's history becomes the darkest: Manasseh, a boy
 * of twelve, will spend fifty-five years undoing everything his father
 * Hezekiah built. He fills the temple of the Lord with idols and altars to
 * false gods. He practices divination and witchcraft. And he sheds innocent
 * blood until the very streets of Jerusalem reek of it. Yet this chapter,
 * which records only his wickedness, is not the end of his story. Second
 * Chronicles reveals what Kings withholds: Manasseh repented in Babylonian
 * captivity, and God restored him. The pattern of his life is the pattern of
 * God's mercy — even to the worst of kings.
 */
export const KINGS_2_21: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 21,

  intros: [
    'Manasseh ascends the throne at twelve years old and reigns for fifty-five years — the longest reign in Judah&apos;s history, and the most catastrophic. Every reform his father Hezekiah enacted, Manasseh systematically reverses. High places that had been torn down are rebuilt. Altars for Baal rise in the very courts of God&apos;s house. Manasseh consults mediums and spiritists. He burns his own son in the fire — a practice so abhorrent that even the pagan nations around Judah condemned it. And through it all, he sheds innocent blood with such cruelty that it becomes a byword. The prophets rise to warn him, but Manasseh will not listen. When the chapter closes, it leaves us in darkness — a king in rebellion, a nation corrupted, a temple desecrated. Only later Scripture will reveal what happened next: repentance in exile, restoration by God&apos;s hand, and a second chance none of us deserve.',
  ],

  bottomShare: {
    label: 'Share 2 Kings 21',
    quote:
      'Even the worst of kings — the most bloodthirsty, the most defiled — can repent and be restored. God&apos;s mercy is not rationed according to the depth of our rebellion.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 21 · Study Guide',
  },

  sections: [
    /* ─── 2 Kings 21:1–9 — Manasseh's Fifty-Five Years of Evil ──────────── */
    {
      ref: '2 Kings 21:1–9',
      title: 'The Boy King Who Did Evil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(
              1,
              'Manasseh was twelve years old when he began to reign, and reigned fifty and five years in Jerusalem. And his mother&apos;s name was Hephzibah.'
            ),
            {
              number: 2,
              spans: [
                t('And he did that which was '),
                hg('evil', 'evil-sight'),
                t(' in the sight of the Lord, after the abominations of the heathen whom the Lord cast out before the children of Israel.'),
              ],
            },
            plain(
              3,
              'For he built again the high places which Hezekiah his father had destroyed; and he reared up altars for Baal, and made a grove, as did Ahab king of Israel; and worshipped all the host of heaven, and served them.'
            ),
            plain(
              4,
              'And he built altars in the house of the Lord, of which the Lord said, In Jerusalem will I put my name.'
            ),
            plain(
              5,
              'And he built altars for all the host of heaven in the two courts of the house of the Lord.'
            ),
            {
              number: 6,
              spans: [
                t('And he '),
                hg('made his son pass through the fire', 'son-fire'),
                t(', and observed times, and used enchantments, and dealt with familiar spirits and wizards: wrought much wickedness in the sight of the Lord, to provoke him to anger.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And he set a '),
                hg('graven image', 'graven-image'),
                t(' of the grove that he had made in the house, of which the Lord said to David and to Solomon his son, In this house, and in Jerusalem, which I have chosen out of all tribes of Israel, will I put my name for ever:'),
              ],
            },
            plain(
              8,
              'Neither will I make the feet of Israel move any more out of the land which I gave their fathers; only if they will observe to do according to all that I have commanded them, and according to all the law that my servant Moses commanded them.'
            ),
            plain(
              9,
              'But they hearkened not: and Manasseh seduced them to do more evil than did the nations whom the Lord destroyed before the children of Israel.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'evil-sight',
          html:
            'The refrain "evil in the sight of the Lord" echoes throughout this chapter. Manasseh does not stumble into wickedness — he deliberately chooses it. Unlike some kings who inherit a fractured kingdom or face political necessity, Manasseh has before him the example of his own father, Hezekiah, who spent years undoing the very abominations Manasseh now rebuilds. The boy king makes a conscious choice to undo everything his father accomplished.',
        },
        {
          kind: 'commentary',
          id: 'son-fire',
          html:
            'The phrase "made his son pass through the fire" refers to a practice so horrific that even neighboring pagan nations condemned it: the burning of a child as a sacrifice to a false god. This is not the action of a king overwhelmed by circumstances. It is the deliberate desecration of the covenant family, the destruction of his own blood. No offense against God is worse, in the grammar of Scripture, than the shedding of innocent blood and the violation of a child.',
        },
        {
          kind: 'hebrew',
          id: 'menasseh',
          title: 'Menasheh — "Causing to Forget"',
          script: 'מְנַשֶּׁה',
          translit: '<strong>Menasheh</strong> · from <em>nashiah</em>, to forget; to cause to be forgotten',
          description:
            'The name Manasseh itself carries irony: it means "to cause to forget." His father Hezekiah named him so because God had allowed him to forget his childlessness (Genesis 41:51 draws the etymology). Yet in Manasseh, the nation is made to forget God — the laws, the covenant, the God of their fathers. His name becomes prophetic of his reign: a reign of forgetting.',
        },
        {
          kind: 'hebrew',
          id: 'asherah',
          title: 'Asherah — "Grove" and Idolatrous Symbol',
          script: 'אַשֵׁרָה',
          translit: '<strong>Asherah</strong> · a goddess; her symbol, a wooden pole or "grove"',
          description:
            'The "grove" that Manasseh makes refers to an asherah, a carved wooden pole symbolizing the pagan goddess Asherah. The same symbol had been torn down by his father Hezekiah. Its restoration in the house of the Lord — the one place where God&apos;s name was to dwell — is not a political compromise. It is open defiance of the God who made the covenant.',
        },
        {
          kind: 'commentary',
          id: 'graven-image',
          html:
            'Manasseh does not merely permit idolatry — he manufactures it. He carves an image of the asherah, the grove, and places it inside the temple itself, in the inner sanctuary. This is not negligence; it is intentional desecration. The Lord had said, "In this house, and in Jerusalem... will I put my name for ever." Manasseh&apos;s response is to put his graven image in that same house. Every sin builds on the last.',
        },
        {
          kind: 'carry',
          html:
            'Manasseh inherits a reformed kingdom and chooses corruption. He knows what his father built; he tears it down with his own hands. Sometimes the greatest rebellion is not ignorance — it is the deliberate destruction of what we know to be true. When have you found yourself undoing your own spiritual house, piece by piece?',
        },
        {
          kind: 'reflection',
          id: 'manasseh-evil',
          prompt: 'Manasseh had the example of his father&apos;s righteousness before him. Yet he chose the opposite path. What makes a person reject the good they have seen? And what in your own life requires you to actively choose against the culture of corruption around you?',
        },
      ],
    },

    /* ─── 2 Kings 21:10–15 — The Prophetic Warning ───────────────────────── */
    {
      ref: '2 Kings 21:10–15',
      title: 'God Speaks through the Prophets',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(
              10,
              'And the Lord spake by his servants the prophets, saying,'
            ),
            {
              number: 11,
              spans: [
                t('Because Manasseh king of Judah hath done these abominations, and hath done wickedly above all that the Amorites did, which were before him, and hath made Judah also to sin with his idols;'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Therefore thus saith the Lord God of Israel, '),
                hg('Behold, I am bringing such evil upon Jerusalem and Judah', 'evil-coming'),
                t(', that whosoever heareth of it, both his ears shall tingle.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And I will stretch over Jerusalem the line of Samaria, and the plummet of the house of Ahab: and I will wipe Jerusalem as a man wipeth a dish, wiping it, and '),
                hg('turning it upside down', 'upside-down'),
                t('.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And I will forsake the remnant of mine inheritance, and deliver them into the hand of their enemies; and they shall become a prey and a spoil to all their enemies;'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Because they have done that which was evil in my sight, and have provoked me to anger, since the day their fathers came forth out of Egypt, even unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'evil-coming',
          html:
            'The prophets speak God&apos;s word to Manasseh, not hiding the truth in metaphor or soft warning. The evil Manasseh has done will return upon him — not because God is vengeful, but because the corruption of a nation leads to its collapse. The words are addressed to him, but they are also a warning: the very ears of all Israel will tingle when they hear what is to come. The judgment is not secret; it is public and inescapable.',
        },
        {
          kind: 'commentary',
          id: 'upside-down',
          html:
            'God describes His judgment with the image of a man wiping a dish clean and turning it upside down. It is the language of total reversal, complete cleansing. The temple that Manasseh filled with idols will be emptied. The high places he rebuilt will be destroyed. Everything he built will be unmade. And just as Samaria fell to Assyria for similar crimes, so will Jerusalem fall.',
        },
        {
          kind: 'commentary',
          id: 'provoked-anger',
          html:
            'The prophets place Manasseh&apos;s sin in continuity with Israel&apos;s ancient rebellion — "since the day their fathers came forth out of Egypt." This is not one king&apos;s failure. This is the climax of a long refusal to hear, to obey, to return. Manasseh is the ultimate expression of Israel&apos;s stubborn idolatry, and his reign becomes the point at which the patience of God reaches its limit. Yet even here, in the language of judgment, there is implied mercy: the prophets speak, and Manasseh still has the chance to hear.',
        },
        {
          kind: 'hebrew',
          id: 'dam-naqi',
          title: 'Dam Naqi — "Innocent Blood"',
          script: 'דָּם נָקִי',
          translit: '<strong>Dam naqi</strong> · innocent blood; blood of the guiltless',
          description:
            'The phrase "innocent blood" runs through the Manasseh narrative like a refrain. It is one of the few things Scripture names as uniquely offensive to God — the shedding of blood of those who have done no wrong. Manasseh will fill Jerusalem with innocent blood until it overflows. It is a sin that calls out from the ground itself (cf. Genesis 4:10).',
        },
        {
          kind: 'carry',
          html:
            'God sends His prophets to speak even to a king in rebellion. They do not soft-pedal the truth. They do not hide behind political caution. They speak the judgment plainly: this evil has consequences. And they speak because even in judgment, there is the possibility of repentance. Are we willing to hear hard truths about ourselves, spoken by those who truly care?',
        },
        {
          kind: 'reflection',
          id: 'prophetic-warning',
          prompt: 'The prophets speak openly to Manasseh about the consequences of his actions. Who in your life speaks truth to you, even when it is hard to hear? And do you listen?',
        },
      ],
    },

    /* ─── 2 Kings 21:16 — The Shedding of Innocent Blood ──────────────────– */
    {
      ref: '2 Kings 21:16',
      title: 'The Innocent Blood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 16,
              spans: [
                t('Moreover Manasseh '),
                hp('shed innocent blood', 'innocent-blood-connection'),
                t(' very much, till he had filled Jerusalem from one end to another; beside his sin wherewith he made Judah to sin, in doing that which was evil in the sight of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'innocent-blood-text',
          html:
            'In a single verse, the text captures the full measure of Manasseh&apos;s evil. He does not execute a few rivals; he fills the city with corpses. The image is visceral and unbearable: innocent blood flows from one end of Jerusalem to the other, a river of murder. The tense, clinical language of the text — "he shed innocent blood very much" — makes the horror even more stark. This is not passion or war. This is systematic, deliberate killing. Jewish tradition holds that Manasseh saw in Isaiah a rebuke of his reign and had the prophet sawed in two (cf. Hebrews 11:37). Whether or not that specific detail is true, the bloodshed is not disputed: Manasseh fills the streets of God&apos;s city with the blood of the innocent.',
        },
        {
          kind: 'commentary',
          id: 'alongside-idolatry',
          html:
            'Notice that the text names Manasseh&apos;s sin in two inseparable parts: his idolatry and his murder. The shedding of innocent blood is not separate from his religious rebellion; it is of a piece with it. To rebel against God is to lose all restraint on cruelty. To fill the temple with idols is to empty the city of mercy. The two sins are one.',
        },
        {
          kind: 'christ',
          id: 'innocent-blood-connection',
          title: 'Christ Connection — The Innocent Blood Shed For Us',
          html:
            'Manasseh sheds innocent blood and fills a city with death. Centuries later, another city will fill with innocent blood — that of the Righteous One, sinless and holy, who will be executed by those He came to save. Yet there is a radical inversion here: where Manasseh&apos;s blood-shedding brings judgment and separation, Christ&apos;s blood brings redemption and reconciliation. The innocent blood shed by and for the guiltiest of kings becomes the basis of their restoration. Manasseh, who filled Jerusalem with innocent blood, is himself washed clean in the innocent blood of the One who had no sin. This is the scandal of grace: that the worst of us can be forgiven because the Best of us shed His blood for us.',
        },
        {
          kind: 'carry',
          html:
            'When we look at evil — systematic cruelty, the shedding of innocent blood, the reign of wickedness — we are confronted with a choice: despair at the depth of human depravity, or faith that even the worst can be redeemed. Manasseh murdered and did not stop. Yet God did not stop Him with more murder. He redeemed him. That redemption cost God everything — the innocent blood of the Only Righteous One. We are called to that same faith: that in the worst of circumstances, God can work restoration.',
        },
        {
          kind: 'reflection',
          id: 'innocent-blood-reflection',
          prompt: 'Manasseh becomes infamous for the innocent blood he sheds. Yet 2 Chronicles reveals that he repents and is forgiven. What does it mean that such a king can be restored? And how does that change the way you think about forgiveness — for others, and for yourself?',
        },
      ],
    },

    /* ─── 2 Kings 21:17–18 — Manasseh's End ───────────────────────────── */
    {
      ref: '2 Kings 21:17–18',
      title: 'The King Sleeps',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(
              17,
              'Now the rest of the acts of Manasseh, and all that he did, and his sin that he sinned, are they not written in the book of the chronicles of the kings of Judah?'
            ),
            plain(
              18,
              'And Manasseh slept with his fathers, and was buried in the garden of his own house, in the garden of Uzza: and Amon his son reigned in his stead.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'final-chapter',
          html:
            'At first reading, this verse is an ending of tragedy: Manasseh dies and is buried in a private garden rather than in the royal tombs. The verse says nothing of repentance, nothing of redemption. But this is 2 Kings&apos; restraint — it records the sin and the judgment, not the hidden mercy. The book of the chronicles is referenced but not read. Only in 2 Chronicles 33 will we learn what happened: that in captivity, Manasseh cried out to God, repented with all his heart, and was forgiven and restored. This chapter alone cannot tell that story. It can only say: he did evil, and he died. But God is not finished with him yet.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes what appears to be the end is not the end. Sometimes what looks like only judgment is the beginning of mercy. Manasseh&apos;s burial in a private garden seems like a diminishment, a loss of honor. But it becomes the quiet place where God will find him, restore him, and make him whole again. We do not always see the redemption in our own stories — not yet. But God sees it. And He works toward it, even in the silence.',
        },
        {
          kind: 'reflection',
          id: 'manasseh-end',
          prompt: 'This chapter ends with Manasseh dead and his son succeeding him, with no mention of redemption. But the story does not end here. Have you ever experienced a ending that was not truly the end? What happened after?',
        },
      ],
    },

    /* ─── 2 Kings 21:19–26 — Amon's Brief Rebellion ───────────────────────── */
    {
      ref: '2 Kings 21:19–26',
      title: 'Amon: Two Years of Evil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(
              19,
              'Amon was twenty and two years old when he began to reign, and he reigned two years in Jerusalem. And his mother&apos;s name was Meshullemeth, the daughter of Haruz of Jotbah.'
            ),
            {
              number: 20,
              spans: [
                t('And he did that which was '),
                hg('evil in the sight of the Lord', 'amon-evil'),
                t(', as his father Manasseh did.'),
              ],
            },
            plain(
              21,
              'And he walked in all the way that his father walked in, and served the idols that his father served, and worshipped them:'
            ),
            plain(
              22,
              'And he forsook the Lord God of his fathers, and walked not in the way of the Lord.'
            ),
            {
              number: 23,
              spans: [
                t('And the servants of Amon conspired against him, and '),
                hg('slew the king', 'amon-murder'),
                t(' in his own house.'),
              ],
            },
            plain(
              24,
              'And the people of the land slew all them that had conspired against king Amon; and the people of the land made Josiah his son king in his stead.'
            ),
            plain(
              25,
              'Now the rest of the acts of Amon which he did, are they not written in the book of the chronicles of the kings of Judah?'
            ),
            plain(
              26,
              'And he was buried in his sepulchre in the garden of Uzza: and Josiah his son reigned in his stead.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'amon-evil',
          html:
            'Amon is Manasseh&apos;s son, and he inherits not only the throne but the evil. Yet he lacks his father&apos;s long reign — two years, and he is gone. The verse says he "walked in all the way that his father walked," but there is no time for the full measure of his wickedness to unfold. He will not have fifty-five years. He will not fill streets with innocent blood. God&apos;s judgment comes swiftly.',
        },
        {
          kind: 'commentary',
          id: 'amon-murder',
          html:
            'Amon is killed by his own servants in his own house. It is a fitting irony: a king who worships false gods, who forsakes the God of his fathers, who refuses to walk in the way of the Lord, is cut down in the privacy of his own chamber. His servants betray him. The people rise up and kill them, then make Josiah king — a boy even younger than Manasseh when he began his reign, but one who will turn the nation toward God.',
        },
        {
          kind: 'carry',
          html:
            'Amon had the chance to learn from his father. Not the lesson his father learned in captivity and exile — but the opportunity to see what evil produces, the instability of a nation corrupted, the judgment that follows. He did not listen. And his reign ends not in old age but in murder. Evil may be long, but it is not forever. And those who choose to walk in the way of the Lord find protection even in dark times.',
        },
        {
          kind: 'reflection',
          id: 'amon-reflection',
          prompt: 'Amon repeats his father&apos;s evil but is given only two years before his own servants kill him. What does this tell you about the consequences of walking away from God? And what hope lies in the fact that the people then choose to make Josiah, a reformer, king?',
        },
      ],
    },

    /* ─── Closing Reflection ──────────────────────────────────────────────── */
    {
      title: 'The Mercy That Comes Later',
      blocks: [
        {
          kind: 'commentary',
          html:
            'This chapter closes in apparent darkness. Manasseh is dead, his son Amon has reigned in evil for two years and been murdered, and the kingdom stands on the brink of ruin. But the reader of Scripture who knows the fuller story knows something else: that in exile, when Manasseh is bound with bronze chains and carried away by the Assyrians, he will cry out to God. And God will hear him. He will restore him to his throne, and Manasseh will spend his remaining years tearing down the very altars he once built, leading his people back to the God he abandoned. The innocent blood will not be washed away — it will stand as a permanent stain on his reign — but he himself will be forgiven. His name will be forever associated with wickedness, yet his life will become a testimony to God&apos;s refusal to let any of us be lost forever.',
        },
        {
          kind: 'christ',
          id: 'final-christ-connection',
          title: 'The Pattern of Manasseh: God&apos;s Refusal to Give Up',
          html:
            'The story of Manasseh — the bloodthirsty king who walks so far from God that only exile and chains can turn him around — is the story of us. We are all capable of the same rebellion, the same hardening of the heart, the same systematic descent into cruelty and distance from God. Yet Manasseh&apos;s restoration is not unique to him; it is the pattern of the gospel. We are all Manassehes, and all of us are offered the same redemption: not in spite of our sins, but through the innocent blood of Christ shed once for all. Manasseh was brought back to God through crisis and repentance. We are brought back to God through the grace of the One who shed His blood and rose again, who intercedes for us even when we are yet sinners. The bloodthirsty king becomes a witness to mercy. And so do we.',
        },
      ],
    },
  ],
};
