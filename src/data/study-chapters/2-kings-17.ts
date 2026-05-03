import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 17 — The Fall of Samaria and the Exile of Israel
 *
 * For two hundred years, prophets warned. Elijah, Elisha, Hosea, Amos —
 * voices crying in the wilderness of the Northern Kingdom. They called Israel
 * to turn from idolatry, from the mockery of serving both the Lord and carved
 * images, from the cruelty that tramples the poor. And for two hundred years,
 * Israel refused to hear. So God removed His people from the land — not in
 * anger alone, but in sorrow and justice. Samaria fell. Israel was scattered.
 * And in the ruins, foreign settlers built a half-faith that would echo for
 * centuries, until a Samaritan woman met the One who broke down all barriers.
 */
export const KINGS_2_17: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 17,

  estimatedMinutes: { beginner: 4, intermediate: 10, deep: 16 },
  intros: [
    'The fall of Israel is the end of a story. It is not a sudden tragedy, but the final chapter of a long refusal. For generations, the prophets of the Lord came to the Northern Kingdom, calling them to turn from idolatry and injustice. But the people "hardened their necks like to the neck of their fathers, that did not believe in the Lord their God." They rejected His statutes, made molten calves, planted groves, and worshipped "all the host of heaven." They passed their children through the fire. They sold themselves to do evil.',
    'Now, in the reign of Hoshea, king of Assyria comes. He comes with armies. He comes with patience. He lays siege to Samaria for three years. And when it falls, Israel is no more — not as a people, not as a kingdom, not in the land the Lord gave them. They are carried away to Assyria, scattered in the cities of exile. The land is repopulated with foreigners. And those foreigners, afraid of the Lord&apos;s power, will create a halfway faith — they fear the Lord, but they serve their own gods. This chapter is the judgment that had been written all along. It is also the seed of a new story: the Samaritans. And in that seed lies the promise that even the broken and scattered will one day meet the One who came to offer living water to them too.',
  ],

  bottomShare: {
    label: 'Share 2 Kings 17',
    quote:
      'The fall of Israel is not God&apos;s rejection of His own, but the consequence of rejecting Him. Yet even in exile, in scattering, in the brokenness that follows, God has not abandoned His people — He will come to them, offer them grace, and gather them in.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 17 · Study Guide',
  },

  sections: [
    /* ─── 2 Kings 17:1–4 — Hoshea and Shalmaneser ────────────────────────── */
    {
      ref: '2 Kings 17:1–4',
      title: 'The Final King and the Rising Siege',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(1, 'In the twelfth year of Ahaz king of Judah began Hoshea the son of Elah to reign in Samaria over Israel nine years.'),
            plain(2, 'And he did that which was evil in the sight of the Lord: but not as the kings of Israel that were before him.'),
            plain(3, 'Against him came up Shalmaneser king of Assyria; and Hoshea became his servant, and gave him presents.'),
            plain(4, 'And the king of Assyria found conspiracy in Hoshea: for he had sent messengers to So king of Egypt, and brought no present to the king of Assyria, as he had done year by year: therefore the king of Assyria shut him up, and bound him in prison.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hoshea-evil-lesser',
          html:
            'Hoshea "did that which was evil in the sight of the Lord: but not as the kings of Israel that were before him." This is a striking phrase. The text does not excuse Hoshea&apos;s evil, but it acknowledges that he was not as profoundly corrupt as those who came before him. Yet even this lesser evil cannot avert judgment. The accumulated weight of the kingdom&apos;s rebellion has reached its limit. God&apos;s patience is not infinite.',
        },
        {
          kind: 'commentary',
          id: 'shalmaneser-arrives',
          html:
            'Shalmaneser, king of Assyria, comes to power in the ancient Near East at a moment when Assyria is expanding. Hoshea, lacking the faith to trust in the Lord&apos;s protection and the strength to resist the empire, becomes a vassal and brings tribute — for a time. But when he seeks an alliance with Egypt, hedging his bets, Shalmaneser sees not diplomacy but conspiracy. And the great empire moves.',
        },
        {
          kind: 'reflection',
          id: 'hoshea-divided-heart',
          prompt: 'Hoshea tries to serve both Assyria and Egypt, hoping to divide his allegiance and preserve his kingdom. When have you tried to serve two masters, hoping to keep your freedom? What did it cost you?',
        },
      ],
    },

    /* ─── 2 Kings 17:5–6 — The Siege and Exile ──────────────────────────── */
    {
      ref: '2 Kings 17:5–6',
      title: 'Samaria Falls and Israel Is Scattered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(5, 'Then the king of Assyria came up throughout all the land, and went up to Samaria, and besieged it three years.'),
            {
              number: 6,
              spans: [
                t('In the ninth year of Hoshea the king of Assyria took Samaria, and carried '),
                hg('Israel away into Assyria', 'galah-exile'),
                t(', and placed them in Halah and in Habor by the river of Gozan, and in the cities of the Medes.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'galah-exile',
          html:
            'The kingdom is besieged for three years. Then it falls. The people are carried away into Assyria — a forced relocation that would last centuries and forever change the geography of God&apos;s people.',
        },
        {
          kind: 'hebrew',
          id: 'galah',
          title: 'Galah — "Exile" or "To Carry Away"',
          script: 'גָּלָה',
          translit: '<strong>Galah</strong> · to exile; to carry away; to remove',
          description:
            'The Hebrew verb galah means both "to uncover" and "to go into exile." In the context of judgment, it carries the sense of exposure, of being stripped away and removed from home. Israel is galah — taken away, scattered, removed from the land of promise. This is the reversal of the exodus. Then they were brought out of Egypt with signs and wonders. Now they are carried away into captivity, to cities they do not know, among peoples whose language they do not speak.',
        },
        {
          kind: 'carry',
          html:
            'The siege lasts three years. That is not a rapid judgment. That is God allowing time for repentance, time for the prophet&apos;s voice to be heard in the siege lines. And yet the people do not turn. The walls do not hold. The kingdom falls. Sometimes judgment is swift. Sometimes it is a slow understanding that comes too late.',
        },
        {
          kind: 'reflection',
          id: 'three-year-siege',
          prompt: 'The siege of Samaria lasts three years — long enough for anyone to understand what was coming. When have you ignored signs of judgment or consequence, hoping they would pass away?',
        },
      ],
    },

    /* ─── 2 Kings 17:7–18 — The Prophetic Obituary ────────────────────────── */
    {
      ref: '2 Kings 17:7–18',
      title: 'Why Israel Fell: The Prophet\'s Account',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(7, 'For so it was, that the children of Israel had sinned against the Lord their God, which had brought them up out of the land of Egypt, from under the hand of Pharaoh king of Egypt, and had feared other gods,'),
            plain(8, 'And walked in the statutes of the heathen, whom the Lord cast out before the children of Israel, and of the kings of Israel, which they made.'),
            plain(9, 'And the children of Israel did secretly those things that were not right against the Lord their God; and they built them high places in all their cities, from the tower of the watchman to the fenced city.'),
            plain(10, 'And they set them up images and groves in every high hill, and under every green tree:'),
            plain(11, 'And there they burnt incense on all the high places, as did the heathen whom the Lord carried away before them; and wrought wicked things to provoke the Lord to anger:'),
            plain(12, 'For they served idols, whereof the Lord had said unto them, Ye shall not do this thing.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'sin-against-deliverer',
          html:
            'The text begins with a crucial detail: Israel "sinned against the Lord their God, which had brought them up out of the land of Egypt." This is not abstract sin. It is ingratitude. It is a rejection of the One who delivered them, who set them free, who made them a people. They forget the exodus. They forget the God of Abraham. And in forgetting, they turn to idols — carved images, groves, the host of heaven.',
        },
        {
          kind: 'commentary',
          id: 'high-places-groves',
          html:
            'Israel builds high places — altars of worship — on every hill, under every green tree. These are the marks of Canaanite religion, adopted by a people who were meant to stand apart. The high places are "secret" — wrought "secretly," as if Israel is ashamed of what she does, yet does it anyway. And yet these places are not hidden. They are visible on every hilltop. The secrecy is not of the places, but of the heart: Israel knows she is betraying her covenant.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(13, 'Yet the Lord testified against Israel, and against Judah, by all the prophets, and by all the seers, saying, Turn ye from your evil ways, and keep my commandments and my statutes, according to all the law which I commanded your fathers, and which I sent to you by my servants the prophets.'),
            plain(14, 'Notwithstanding they would not hear, but hardened their necks, like to the neck of their fathers, that did not believe in the Lord their God.'),
            plain(15, 'And they rejected his statutes, and his covenant that he made with their fathers, and his testimonies which he testified against them; and they followed vanity, and became vain, and went after the heathen that were round about them, concerning whom the Lord had charged them, that they should not do after them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prophets-testified',
          html:
            'The Lord did not leave Israel without witness. He sent prophets. He sent seers. All of them testified the same word: Turn. Keep My commandments. Return to the law of your fathers. But Israel "would not hear." She hardened her neck — a phrase that suggests stubborn resistance, a refusal not from ignorance but from will. She heard the prophets. She rejected them.',
        },
        {
          kind: 'hebrew',
          id: 'qashah-neck',
          title: 'Qashah — "To Harden" or "To Make Stiff-Necked"',
          script: 'קָשַׁה',
          translit: '<strong>Qashah</strong> · to harden; to make rigid; to be stubborn',
          description:
            'When Israel "hardened her necks," she was choosing willful resistance. The neck, stiffened, cannot bend in submission. It cannot bow. Qashah is a word of choice — Israel made herself hard against the Lord&apos;s call, just as the fathers had done before her. The prophets came with soft words, but they fell on hardened ground.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(16, 'And they left all the commandments of the Lord their God, and made them molten images, even two calves, and made a grove, and worshipped all the host of heaven, and served Baal;'),
            plain(17, 'And caused their sons and their daughters to pass through the fire, and used divination and enchantments, and sold themselves to do evil in the sight of the Lord, to provoke him to anger.'),
            plain(18, 'Therefore the Lord was very angry with Israel, and removed them out of his sight: there was none left but the tribe of Judah only.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'molten-calves-baal',
          html:
            'The text catalogs the specific idolatries: molten calves (the image of Jeroboam I that split the kingdom in the first place); groves (Asherah poles, symbols of Canaanite fertility cults); worship of the heavenly hosts; service to Baal. And then something darker: children passed through the fire. This is the Tophet practice — child sacrifice, the ultimate corruption of the covenant. Israel does not merely serve other gods. She has become a people willing to offer her own children to the gods of the nations.',
        },
        {
          kind: 'carry',
          html:
            'The prophets came with centuries of warnings. Yet Israel "would not hear." There is a profound lesson here: God&apos;s judgment is never sudden if you know how to listen. The signs were always there. The messengers came again and again. The falling away happened not in a moment, but through a thousand small acts of turning away. What does it look like in your own life when you begin to harden your neck against God&apos;s voice?',
        },
        {
          kind: 'reflection',
          id: 'hardened-neck',
          prompt: 'Israel heard the prophets but would not listen. Is there a truth or a call that you have heard many times, yet continue to resist? What would it cost you to soften your neck and turn?',
        },
      ],
    },

    /* ─── 2 Kings 17:19–20 — Judah Remains (For Now) ────────────────────── */
    {
      ref: '2 Kings 17:19–20',
      title: 'Judah in the Shadows',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(19, 'Also Judah kept not the commandments of the Lord their God, but walked in the statutes of Israel which they made.'),
            plain(20, 'And the Lord rejected all the seed of Israel, and afflicted them, and delivered them into the hand of spoilers, until he had cast them out of his sight.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'judah-also-corrupt',
          html:
            'A verse that cuts deep: even Judah, the southern kingdom, is not innocent. She too has walked in the statutes of Israel, adopting the same idolatries. The corruption runs throughout the land. Yet Judah is not yet removed from God&apos;s sight. She remains. Why? The text does not say. Perhaps it is the presence of the temple in Jerusalem, the ongoing witness of the priests and Levites. Perhaps it is the promises made to David that his throne will stand forever. Perhaps it is only mercy, prolonging the day of judgment.',
        },
      ],
    },

    /* ─── 2 Kings 17:21–23 — The Rent Kingdom ──────────────────────────── */
    {
      ref: '2 Kings 17:21–23',
      title: 'The Rent Kingdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(21, 'For he rent Israel from the house of David; and they made Jeroboam the son of Nebat king: and Jeroboam drave Israel from following the Lord, and made them sin a great sin.'),
            plain(22, 'For the children of Israel walked in all the sins of Jeroboam which he did; they departed not from them;'),
            plain(23, 'Until the Lord removed Israel out of his sight, as he had said by all his servants the prophets. So was Israel carried away out of their own land to Assyria unto this day.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jeroboam-original-sin',
          html:
            'The narrative traces the cause back to Jeroboam I, who rent the kingdom from David and made the northern tribes into a separate state. In that moment of political separation came spiritual separation. Jeroboam made the molten calves to keep his people from traveling to Jerusalem to worship in the temple. It was a practical political move — but it was also a "great sin." It sundered Israel from her God. And for two centuries, every king of Israel "departed not from" those sins. They were trapped in the pattern Jeroboam established.',
        },
        {
          kind: 'reflection',
          id: 'sins-of-fathers',
          prompt: 'Israel inherited the sins of Jeroboam and could not break free. What inherited patterns, from your family or culture, keep you from freedom? Can you name one and begin to turn from it?',
        },
      ],
    },

    /* ─── 2 Kings 17:24–28 — The Samaritan Resettlement ──────────────────── */
    {
      ref: '2 Kings 17:24–28',
      title: 'The Foreign Settlers and Their Fear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(24, 'And the king of Assyria brought men from Babylon, and from Cuthah, and from Ava, and from Hamath, and from Sepharvaim, and placed them in the cities of Samaria instead of the children of Israel: and they possessed Samaria, and dwelt in the cities thereof.'),
            plain(25, 'And so it was at the beginning of their dwelling there, that they feared not the Lord: therefore the Lord sent '),
            {
              number: 25,
              spans: [
                t('lions among them, which slew some of them.'),
              ],
            },
            plain(26, 'Wherefore they spake to the king of Assyria, saying, The nations which thou hast removed, and placed in the cities of Samaria, know not the manner of the God of the land: therefore he hath sent lions among them, and, behold, they slay them, because they know not the manner of the God of the land.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'lions-send',
          html:
            'The king of Assyria repopulates Samaria with people from across his empire — Babylon, Cuthah, Ava, Hamath, Sepharvaim. These foreigners do not know the God of the land. They do not fear Him. And so the Lord sends lions — not a metaphor, but a literal judgment. The lions kill the foreigners. And the foreigners understand: there is a God here, and He is powerful.',
        },
        {
          kind: 'hebrew',
          id: 'arim-lions',
          title: 'Arim — "Lions"',
          script: 'אֲרָיִם',
          translit: '<strong>Arim</strong> · lions; predatory cats',
          description:
            'In Scripture, lions are often instruments of God&apos;s judgment (1 Kings 13:24; 1 Samuel 17:34–37). They represent the wilderness, the realm God controls. When the foreigners encounter the lions, they are encountering the living God&apos;s power in the land He gave to Israel. The lions are a sign that the God of Israel is not a local deity confined to temples and altars — He is the Lord of the land itself.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(27, 'Then the king of Assyria commanded, saying, Carry thither one of the priests whom ye brought from thence; let them go and dwell there, let him teach them the manner of the God of the land.'),
            plain(28, 'Then one of the priests whom they had carried away from Samaria came and dwelt in Beth-el, and taught them how they should fear the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'priest-beth-el',
          html:
            'The king of Assyria understands the practical solution: bring a priest who knows the God of the land and have him teach the foreigners how to fear the Lord. It is a remarkably practical approach to religious education — and yet it is profoundly hollow. A priest who knows how to fear the Lord is brought back from exile to teach a people who care nothing for his God, who are motivated by fear of lions rather than by faith.',
        },
        {
          kind: 'carry',
          html:
            'The Lord used lions to teach the foreigners to fear Him. It was not the softest way to introduce a people to faith — it was judgment masked as mercy, the fear that comes from danger rather than from love. And yet even this harsh lesson is a kind of grace. The God of Israel does not allow the land to be forgotten. His power is evident even in judgment.',
        },
      ],
    },

    /* ─── 2 Kings 17:29–34 — Half-Conversion: Syncretism ──────────────────── */
    {
      ref: '2 Kings 17:29–34',
      title: 'Feared the Lord, Served Their Own Gods',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(29, 'Howbeit every nation made gods of their own, and put them in the houses of the high places which the Samaritans had made, every nation in their cities wherein they dwelt.'),
            plain(30, 'And the men of Babylon made Succoth-benoth, and the men of Cuth made Nergal, and the men of Hamath made Ashima, and the Avites made Nibhaz and Tartak, and the Sepharvites burnt their children in fire to Moloch.'),
            plain(31, 'So they feared the Lord, and made unto themselves of the lowest of them priests of the high places, which sacrificed for them in the houses of the high places.'),
            plain(32, 'They feared the Lord, but also served their own gods, after the manner of the nations whom they carried away.'),
            plain(33, 'They fear the Lord, but they serve after the statutes of their gods: as do the nations from whom they were carried away.'),
            plain(34, 'Unto this day they do after the former manners: they fear not the Lord, neither do they after his statutes, nor after the law and commandment which the Lord commanded the children of Jacob, whom he called Israel;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'syncretism-half-faith',
          html:
            'Here is the tragedy of half-conversion. The Samaritans learned to fear the Lord — but they also made gods of their own. They feared Him, and they served their idols. They appear in the houses of the high places that Israel had built, making their own priests from the lowest of the people. It is a blending, a syncretism, a refusal to choose. They will honor the God of the land, but they will not abandon their gods. They fear the Lord, but they fear Him only as one power among many.',
        },
        {
          kind: 'hebrew',
          id: 'yirah-fear',
          title: 'Yirah — "Fear" of the Lord',
          script: 'יִרְאָה',
          translit: '<strong>Yirah</strong> · fear; reverence; awe',
          description:
            'The word yirah is used repeatedly in this passage: they feared the Lord. But this is fear born of consequence, not faith born of love. True yirah is the awe that comes from knowing the character of God, His holiness, His justice, His mercy. But the Samaritans&apos; fear is reactive — they fear because lions came. It is not the beginning of wisdom so much as the beginning of superstition. Yet even this shallow fear is a foothold. In John 4, a Samaritan woman will meet Jesus at a well, and that half-faith will be transformed into something real.',
        },
        {
          kind: 'reflection',
          id: 'half-faith',
          prompt: 'The Samaritans feared the Lord but served their own gods — they wanted both. When have you tried to honor God with one hand while serving something else with the other? What does wholehearted faith cost?',
        },
      ],
    },

    /* ─── Christ Connection and Reflection ────────────────────────────────── */
    {
      ref: '2 Kings 17 · Christ Connection',
      title: 'Christ Connection — The Savior of the Broken and Scattered',
      blocks: [
        {
          kind: 'christ',
          id: 'christ-samaritan-woman',
          title: 'The Well of Sychar',
          html:
            'Centuries after this chapter closes, there is a woman from Sychar in Samaria — a city in the land of the half-Samaritan people who feared the Lord but served their own gods. She comes to a well at noon. And there she meets the One who came from Judea, the One who had "no dealings with the Samaritans" by the standards of His day. He asks her for water. And in that moment, Jesus, the Lord of Israel, offers Himself to the daughter of the very nation that His people despised. He offers her living water. He does not shame her for her many husbands, her broken life — He offers her the deepest truth: "Salvation is of the Jews; but for all peoples, the offer stands." (See John 4.) The exile has not separated the scattered from the reach of grace. Israel in exile, Judah in exile, Samaria in syncretism — all are found in this moment. And in Acts 8, after the resurrection, Philip will go to Samaria and the Samaritans will receive the Holy Ghost. The half-faith becomes whole.',
        },
        {
          kind: 'carry',
          html:
            'The Northern Kingdom fell because she refused to turn. She hardened her neck. She rejected the prophets. She walked away from the covenant. And judgment came. But the story does not end in exile. It does not end in broken faith. It ends with a Savior who comes to the well and speaks to the woman no one else would speak to. He comes to the scattered, the broken, the half-believing. He offers living water. And many of the Samaritans believed on Him. If you are scattered, if your faith is broken, if you have walked away — this chapter holds a promise: the Lord has not abandoned you. He will come, and He will offer you Himself.',
        },
        {
          kind: 'reflection',
          id: 'christ-scattered',
          prompt: 'Israel was scattered because she would not listen. But centuries later, Jesus came to the Samaritans. If you feel scattered, broken, or far from God, what does it mean to you that Christ came to those whom others despised?',
        },
      ],
    },
  ],
};
