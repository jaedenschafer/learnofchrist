import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 33 — Manasseh: The Worst King Becomes the Greatest Penitent
 *
 * Manasseh began to reign at twelve years old and reigned fifty-five years —
 * and for most of that reign, he was the most evil king Judah had ever known.
 * He undid his father's reforms, rebuilt the pagan altars his father had broken,
 * and made his own children pass through the fire to Moloch. He filled Jerusalem
 * with abominations. Yet in the depths of Babylonian captivity, bound with fetters,
 * he cried out to God. And God heard him.
 *
 * This is the most stunning conversion in the Old Testament — proof that no one,
 * no matter how far they have fallen, is beyond the reach of grace.
 */
export const CHRONICLES_2_33: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 33,

  estimatedMinutes: { beginner: 5, intermediate: 11, deep: 16 },
  topicTags: ['kingship', 'worship', 'judgment', 'repentance'],
  opener: {
    topical: true,
    caption: '2 Chronicles 33',
  },
  intros: [
    'The reign of Manasseh is the reign of a king at war with God. He ascends the throne at twelve years old, inheriting a kingdom his father Hezekiah had devoted to God. And immediately, Manasseh undoes everything. He rebuilds the high places his father destroyed. He makes groves and altars for Baal. He makes his own children pass through the fire — a practice so abhorrent that it will echo as a mark of his wickedness through all of Scripture. He consults mediums and wizards. He sets a carved image in the Temple itself, the place God promised to dwell forever. By every measure, Manasseh is the worst king Judah has ever had.',
    'But his story does not end in Judah. When God cannot reach him through prophets, God reaches him through captivity. Assyrian soldiers take Manasseh in thorns and chains to Babylon. And there — in darkness, in chains, far from his throne and his power — Manasseh meets God in a way he never could have in his palace. He humbles himself. He prays. And God hears.',
    'This chapter is the strongest argument in Scripture that no one is beyond redemption. Not the worst king. Not the man who burned his own children for demons. Not you, if you have wandered far from God. Grace is not a reward for the righteous. Grace is a rope thrown to someone drowning.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 33',
    quote:
      'When Manasseh was in affliction, he besought the Lord his God and humbled himself greatly, and the Lord was intreated of him and heard his supplication. No one is beyond the reach of grace.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 33 · Study Guide',
  },

  resources: [
    {
      id: 'iaa-josiah',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Josiah and Late Judah',
      url: 'https://www.antiquities.org.il/en/',
      description: 'IAA archaeological evidence for 7th century BCE reform under Josiah.',
    },
    {
      id: 'sefaria-2-chronicles-33',
      kind: 'study',
      source: 'Sefaria',
      label: '2 Chronicles 33 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/II_Chronicles.33',
      description: 'The Hebrew text of 2 Chronicles 33 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-2-chronicles-overview-33',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: '2 Chronicles — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/2-chronicles/',
      description: 'Open-access SBL essay on the historical and literary setting of 2 Chronicles.',
    },

  ],

  sections: [
    /* ─── 2 Chronicles 33:1–9 — Manasseh's Evil Reign ──────────────────── */
    {
      ref: '2 Chronicles 33:1–9',
      title: 'Manasseh&apos;s Evil Reign',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 1,
              spans: [
                t('Manasseh was '),
                hg('twelve years old', 'manasseh-age'),
                t(' when he began to reign, and he reigned fifty and five years in Jerusalem:'),
              ],
            },
            {
              number: 2,
              spans: [
                t('But he did that which was '),
                hp('evil in the sight of the Lord', 'manasseh-evil-intro'),
                t(', like unto the abominations of the heathen, whom the Lord had cast out before the children of Israel.'),
              ],
            },
            plain(3, 'For he built again the high places which Hezekiah his father had broken down, and he reared up altars for Baalim, and made groves, and worshipped all the host of heaven, and served them.'),
            plain(4, 'Also he built altars in the house of the Lord, of which the Lord had said, In Jerusalem shall my name be for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2chr33-manasseh-evil',
          html:
            'Manasseh inherits the throne at twelve and undoes everything Hezekiah built. The next verses will show whether even this can be undone — and whether God can still bend the worst of kings. [res:iaa-josiah]',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(5, 'And he built altars for all the host of heaven in the two courts of the house of the Lord.'),
            {
              number: 6,
              spans: [
                t('And he caused his children to '),
                hp('pass through the fire', 'manasseh-children-fire'),
                t(' in the valley of the son of Hinnom: also he observed times, and used enchantments, and used witchcraft, and dealt with a familiar spirit, and with wizards: he wrought much evil in the sight of the Lord, to provoke him to anger.'),
              ],
            },
            plain(7, 'And he set a carved image, the idol which he had made, in the house of God, of which God had said to David and to Solomon his son, In this house, and in Jerusalem, which I have chosen before all the tribes of Israel, will I put my name for ever:'),
            plain(8, 'Neither will I any more remove the foot of Israel from out of the land which I have appointed for your fathers; so that they will take heed to do all that I have commanded them, according to the whole law and the statutes and the ordinances by the hand of Moses.'),
            plain(9, 'So Manasseh made Judah and the inhabitants of Jerusalem to err, and to do worse than the heathen, whom the Lord had destroyed before the children of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'manasseh-age',
          html:
            'Manasseh becomes king as a child, twelve years old. Some scholars suggest he reigned co-regent with his father for a time, but the text is clear: whatever his early years, he entered the throne young and without the wisdom his father possessed. His father Hezekiah had seen the power of God himself — the angel of the Lord destroyed the Assyrian army at Jerusalem&apos;s gates. Manasseh saw none of it. He inherited a kingdom already restored to God, and he rejected it[res:sefaria-2-chronicles-33][res:bibleodyssey-2-chronicles-overview-33].',
        },
        {
          kind: 'commentary',
          id: 'manasseh-evil-intro',
          html:
            'The text does not hesitate to name what Manasseh is: evil. Not misguided. Not caught in cultural compromise. Evil in the sight of God. He does "like unto the abominations of the heathen" — meaning he practices the very idolatry God sent the Canaanites into exile to prevent. His reign is, in every way, a reversal of his father&apos;s.',
        },
        {
          kind: 'commentary',
          id: 'manasseh-children-fire',
          html:
            'The practice of causing children to pass through the fire to Moloch is one of the deepest abominations in Scripture. It is the crossing of a threshold — no king in Judah had done this in the Temple. By this act, Manasseh signals not mere political compromise or idolatry, but a descent into the darkest practices forbidden by law and conscience. He does not merely tolerate pagan religion; he institutionalizes it in God&apos;s own house.',
        },
        {
          kind: 'hebrew',
          id: 'manasseh-ra',
          title: 'Ra — "Evil" or "Badness"',
          script: 'רַע',
          translit: '<strong>Ra</strong> · evil; badness; wickedness; harm',
          description:
            'The Hebrew word "ra" is not merely moral mistake — it carries a sense of active harm, of bringing darkness into the world. When the text says Manasseh "did that which was ra," it means he chose to bring spiritual harm and darkness upon himself and his kingdom. Ra is not passive. It is chosen, active, willful.',
        },
        {
          kind: 'carry',
          html:
            'Manasseh&apos;s path began with small choices: rebuilding what his father had broken, worshipping what God forbade. But small choices lead further. Before long, he is burning his own children. This is the trajectory of a life that rejects God&apos;s voice — it does not stop at compromise, it spirals deeper. Yet this is also why his later repentance is so powerful: no one who has chosen this path is so far gone that they cannot turn back.',
        },
        {
          kind: 'reflection',
          id: 'manasseh-choices',
          prompt: 'Manasseh inherited a kingdom already restored to God and rejected it. What does it mean to inherit spiritual blessing and actively turn away from it? What choices have you made that felt small at the time but led you further from where you wanted to be?',
        },
      ],
    },

    /* ─── 2 Chronicles 33:10–11 — God Speaks; Manasseh Refuses ──────────── */
    {
      ref: '2 Chronicles 33:10–11',
      title: 'God Sends Prophets; Manasseh Will Not Hear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 10,
              spans: [
                t('And the Lord spake to Manasseh, and to his people: but they '),
                hg('would not hearken', 'manasseh-no-hear'),
                t('.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Wherefore the Lord brought upon them the captains of the host of the king of Assyria, which '),
                hp('took Manasseh among the thorns, and bound him with fetters, and carried him to Babylon', 'manasseh-babylon'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'manasseh-no-hear',
          html:
            'God does not abandon Manasseh to his evil. He sends prophets. He speaks to the king and to his people. But Manasseh refuses to listen. His heart is closed. He has chosen his path so deliberately, so deeply, that the voice of God cannot penetrate. This is the danger of long refusal: the heart hardens. The ears become deaf to grace.',
        },
        {
          kind: 'commentary',
          id: 'manasseh-babylon',
          html:
            'When words fail, God acts. The captains of Assyria come — and their job is not diplomacy, but capture. They take Manasseh "among the thorns" — a detail suggesting violence, chaos, humiliation. A king who once sat on a throne is now bound in fetters like a criminal and dragged to a foreign land. This is not punishment for its own sake; it is God&apos;s last, desperate way to reach a king who will listen to nothing else.',
        },
        {
          kind: 'hebrew',
          id: 'manasseh-tzuqah',
          title: 'Tzuqah — "Distress" or "Affliction"',
          script: 'צוּקָה',
          translit: '<strong>Tzuqah</strong> · distress; affliction; straits; tight places',
          description:
            'The Hebrew "tzuqah" suggests not merely pain, but being in tight straits — hemmed in, with no escape. It is the distress of someone trapped. Manasseh, once free to do whatever he wished, is now in tzuqah — bound, captive, with nowhere to turn but up to God.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes God must remove everything else before we will listen. Manasseh ignored the voice of prophets when he had his throne, his power, his freedom. Only in captivity, in chains, with all else stripped away, does he hear. This does not mean God causes all our afflictions — but it means that when all our own resources fail, God is still there, still speaking, still waiting for us to listen.',
        },
        {
          kind: 'reflection',
          id: 'manasseh-hear',
          prompt: 'Manasseh refused to hear God through prophets, through the law, through conscience. What has it taken in your own life for you to finally listen when you did not want to?',
        },
      ],
    },

    /* ─── 2 Chronicles 33:12–13 — The Conversion ──────────────────────── */
    {
      ref: '2 Chronicles 33:12–13',
      title: 'When He Was in Affliction, He Besought the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 12,
              spans: [
                t('And '),
                hp('when he was in affliction', 'manasseh-affliction'),
                t(', he '),
                hp('besought the Lord his God', 'manasseh-beseech'),
                t(', and '),
                hp('humbled himself greatly', 'manasseh-humble'),
                t(' before the God of his fathers,'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And '),
                t('prayed unto him'),
                t(': and he was '),
                hg('intreated of him', 'manasseh-heard'),
                t(', and heard his supplication, and brought him again to Jerusalem into his kingdom. '),
                hp('Then Manasseh knew that the Lord he was God', 'manasseh-knew-lord'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'manasseh-affliction',
          html:
            'The turning point comes in affliction. Manasseh is stripped of everything — his throne, his freedom, his power. In that nakedness, something shifts. The barriers he built come down.',
        },
        {
          kind: 'commentary',
          id: 'manasseh-beseech',
          html:
            'Manasseh "besought" — he pleaded, he begged, he cried out. This is not the proud king making a diplomatic request. This is a captive in chains, desperate, calling to the only power greater than the empire that holds him. He prays not from strength, but from complete weakness.',
        },
        {
          kind: 'commentary',
          id: 'manasseh-humble',
          html:
            'He humbled himself "greatly." The man who once set up an idol in God&apos;s Temple, who burned his own children for demons, now sees himself as he is. This is the terror and the grace of true repentance: you see yourself from God&apos;s perspective, and you are undone. And yet, that very humbling is the gateway to grace.',
        },
        {
          kind: 'hebrew',
          id: 'manasseh-shama',
          title: 'Shama — "Heard" or "Listened"',
          script: 'שָׁמַע',
          translit: '<strong>Shama</strong> · heard; listened; obeyed; gave ear to',
          description:
            'When God "shama" — when He listens, hears, gives ear — He is not merely registering sound. The word carries the sense of responding to what is heard. God hears Manasseh&apos;s prayer, and in hearing it, He acts. This is grace: God not only listens to the desperate cry of the wicked king; He responds.',
        },
        {
          kind: 'commentary',
          id: 'manasseh-heard',
          html:
            'God was "intreated of him" — meaning God responded to the prayer, granted the petition. This is staggering. Here is a king who has committed nearly every sin imaginable. He has mocked God through decades of evil. He has burned children in God&apos;s face. And when he cries out from the darkness, God hears him. God listens. God restores.',
        },
        {
          kind: 'commentary',
          id: 'manasseh-knew-lord',
          html:
            'The culmination: "Then Manasseh knew that the Lord he was God." Not "believed." Not "acknowledged." Knew. Personal knowledge. Direct encounter. In Babylon, in captivity, in chains, Manasseh met the living God in a way that was undeniable. The knowledge was not abstract or inherited — it was real and personal. This is what changes a man: direct knowledge of God&apos;s power and grace.',
        },
        {
          kind: 'christ',
          id: 'manasseh-christ-saves',
          title: 'Christ Connection — Saves to the Uttermost',
          html:
            'The Book of Hebrews tells us that Christ "is able to save them to the uttermost that come unto God by him" (Hebrews 7:25). Manasseh is the Old Testament incarnation of this promise. He is the worst king in Judah&apos;s history. He has sinned more deeply and more deliberately than almost anyone. And yet, when he turns, Christ receives him. The prodigal son in Luke 15 runs home expecting rejection — and the father runs to him with open arms. Manasseh is that prodigal. His conversion proves that "where sin abounded, grace did much more abound" (Romans 5:20). No one is beyond the reach of grace. Not the worst of us. Not you.',
        },
        {
          kind: 'carry',
          html:
            'If you have done things you thought God could never forgive, Manasseh is your answer. If you have wandered so far that you thought return was impossible, Manasseh shows you it is not. The barrier is never God&apos;s unwillingness to forgive. The barrier is your willingness to turn. If you will humble yourself, if you will cry out, if you will seek His face — He will hear you. He will restore you. He will bring you home.',
        },
        {
          kind: 'reflection',
          id: 'manasseh-conversion',
          prompt: 'Manasseh knew deep shame for what he had done. Yet when he turned, God received him. What would it take for you to stop hiding from God and turn, knowing that He will hear you?',
        },
      ],
    },

    /* ─── 2 Chronicles 33:14–17 — The Restoration ──────────────────────── */
    {
      ref: '2 Chronicles 33:14–17',
      title: 'Restoration and Reformation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(14, 'Now after this he built a wall without the city of David, on the west side of Gihon, in the valley, even to the entering in at the fish gate, and compassed about Ophel, and raised it up a very great height, and put captains of war in all the fenced cities of Judah.'),
            plain(15, 'And he took away the strange gods, and the idol out of the house of the Lord, and all the altars that he had built in the mount of the house of the Lord, and in Jerusalem, and cast them out of the city.'),
            plain(16, 'And he repaired the altar of the Lord, and sacrificed thereon peace offerings and thank offerings, and commanded Judah to serve the Lord God of Israel.'),
            plain(17, 'Nevertheless the people did sacrifice still in the high places, yet unto the Lord their God only.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'manasseh-restoration-wall',
          html:
            'Manasseh&apos;s conversion is not merely internal. It expresses itself in action. He fortifies Jerusalem with walls and war captains — a practical investment in the kingdom&apos;s security. He does not retreat into private piety. He rebuilds, reforms, restores.',
        },
        {
          kind: 'commentary',
          id: 'manasseh-idols-removed',
          html:
            'The idols he once set up, he now tears down. The alien gods he once served, he now casts out of the city. This is the opposite of his former reign — not merely ceasing to do evil, but actively undoing it. A man truly converted does not merely stop; he turns 180 degrees and walks the other direction.',
        },
        {
          kind: 'commentary',
          id: 'manasseh-altar-repaired',
          html:
            'He repairs the altar of the Lord and sacrifices peace offerings and thank offerings. The peace offering is an offering of communion — a meal shared with God. The thank offering is gratitude. After fifty-five years of evil, Manasseh sits at table with God, and his gratitude is profound. He commands Judah to serve the Lord.',
        },
        {
          kind: 'carry',
          html:
            'Manasseh&apos;s repentance includes what 2 Kings 21 (the parallel account) does not emphasize: he also did not demand absolute perfection from his people. The high places remained — the people still made sacrifices there, though now to the Lord God of Israel, not to demons. This shows wisdom: he reformed what he could control (the Temple, the official worship), and trusted God for the rest. True leadership knows the difference between what you must change and what you must entrust to God and time.',
        },
        {
          kind: 'reflection',
          id: 'manasseh-restoration',
          prompt: 'Manasseh didn&apos;t just stop doing evil; he actively undid it. What evils or harms in your own life do you need to actively undo, not merely cease repeating?',
        },
      ],
    },

    /* ─── 2 Chronicles 33:18–20 — The End of Manasseh ───────────────────── */
    {
      ref: '2 Chronicles 33:18–20',
      title: 'The Rest of Manasseh&apos;s Acts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(18, 'Now the rest of the acts of Manasseh, and his prayer unto his God, and the words of the seers that spake to him in the name of the Lord God of Israel, behold, they are written in the book of the kings of Israel.'),
            plain(19, 'His prayer also, and how God was intreated of him, and all his sin, and his trespass, and the places wherein he built high places, and set up groves and graven images, before he was humbled: behold, they are written among the sayings of the seers.'),
            plain(20, 'So Manasseh slept with his fathers, and they buried him in his own house: and Amon his son reigned in his stead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'manasseh-prayer-record',
          html:
            'The text references a prayer of Manasseh that is not recorded here — though some Jewish and Christian traditions have preserved it (it appears in some versions as an apocryphal addition to 2 Chronicles). The point is clear: Manasseh&apos;s prayer was so remarkable, so full of grace, that it was preserved and passed down among God&apos;s people.',
        },
        {
          kind: 'commentary',
          id: 'manasseh-death',
          html:
            '"So Manasseh slept with his fathers, and they buried him in his own house." He dies in peace, having lived to see the fruit of his repentance. He is buried with honor in Jerusalem, not in exile, not in disgrace. His life, which began in darkness and reached depths of evil, ends in restoration and hope.',
        },
        {
          kind: 'carry',
          html:
            'Manasseh&apos;s full story is in the records of the seers — written down, passed on, preserved. This too is grace: his failure is not hidden or erased, but it is also not the final word. The final word is his transformation, his turn, his return to God. That record stands as testimony for all who come after: if Manasseh can be forgiven, can be restored, can be redeemed, so can you.',
        },
      ],
    },

    /* ─── 2 Chronicles 33:21–25 — Amon: The Brief Evil Reign ──────────── */
    {
      ref: '2 Chronicles 33:21–25',
      title: 'Amon: Brief Evil and Brief Reign',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(21, 'Amon was twenty and two years old when he began to reign, and reigned two years in Jerusalem.'),
            plain(22, 'But he did that which was evil in the sight of the Lord, as did Manasseh his father: for Amon sacrificed unto all the carved images which Manasseh his father had made, and served them;'),
            plain(23, 'And humbled not himself before the Lord, as Manasseh his father had humbled himself; but Amon trespassed more and more.'),
            plain(24, 'And his servants conspired against him, and slew him in his own house.'),
            plain(25, 'But the people of the land slew all them that had conspired against king Amon; and the people of the land made Josiah his son king in his stead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amon-evil',
          html:
            'Manasseh&apos;s son, Amon, becomes king at twenty-two and reigns only two years. Unlike his father, Amon does not humble himself. He does not seek God. He chooses idolatry deliberately, having watched his father&apos;s transformation yet rejecting it. This is a stark contrast: Manasseh turned; Amon chose not to.',
        },
        {
          kind: 'commentary',
          id: 'amon-death',
          html:
            'Amon is assassinated by his own servants before he can solidify his reign. He never has the chance to repent as his father did. His reign is cut short. Yet in his very brevity, there is a kind of mercy: God does not allow him to lead Judah back into the depths of evil that his father once did. Instead, the people rise up and make Josiah king — Josiah, who will become one of Judah&apos;s greatest reformers.',
        },
        {
          kind: 'carry',
          html:
            'This brief account of Amon is a reminder that watching someone else&apos;s repentance is not the same as your own. Amon saw his father transformed, saw him tear down idols, saw him restored. Yet he chose differently. What others learn does not automatically become what we learn. We must choose the path for ourselves.',
        },
        {
          kind: 'reflection',
          id: 'amon-choice',
          prompt: 'Amon saw his father&apos;s transformation and humbling before God, yet chose not to humble himself. Whose repentance or faithfulness are you watching, and what will you choose in response?',
        },
      ],
    },
  ],
};
