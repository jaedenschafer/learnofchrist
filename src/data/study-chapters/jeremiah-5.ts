import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 5 — A Righteous Man
 *
 * "Run ye to and fro through the streets of Jerusalem, and see now, and know,
 * and seek in the broad places thereof, if ye can find a man, if there be any
 * that executeth judgment, that seeketh the truth; and I will pardon it." God
 * sends Jeremiah on a search through the city, looking for a single righteous
 * person. Not ten righteous men, as Abraham sought in Sodom. One. A single
 * person who executes judgment and seeks truth. The search fails. There is
 * no such person. Universal corruption has come upon the land. Yet this chapter
 * also points to the one righteous man who would come—Christ alone.
 */
export const JEREMIAH_5: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 5,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Jeremiah 5 presents one of the starkest condemnations of widespread moral failure in Scripture. God sends the prophet on a search: go through the streets of Jerusalem, look in the broad places, seek out a single person who executes judgment and seeks truth. Find me one righteous person. Not righteousness defined as perfection, but as someone who pursues justice and truth. And yet, the implication of the search is that it comes up empty. There is no such person.',
    'This is not exaggeration for rhetorical effect. This is a statement about the spiritual condition of an entire people. The rich have turned to oppression. The prophets lie. The priests rule by their own authority. The people have forsaken God and run after idols. Everyone, from the highest to the lowest, is implicated. Yet within this universal failure stands the promise: one man would come who did execute judgment and seek truth. One man would be found righteous. That man is Christ.',
  ],

  sections: [
    {
      ref: 'Jeremiah 5:1–9',
      title: 'The Search for One Righteous',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Run ye to and fro through the streets of Jerusalem, and see now, and know, and seek in the broad places thereof, if ye can find a man, if there be any that executeth judgment, that seeketh the truth; and I will pardon it.'),
            plain(2, 'And though they say, The Lord liveth; surely they swear falsely.'),
            plain(3, 'O Lord, are not thine eyes upon the truth? thou hast stricken them, but they have not grieved; thou hast consumed them, but they have refused to receive correction: they have made their faces harder than a rock; they have refused to turn.'),
            plain(4, 'Therefore I said, Surely these are poor; they are foolish: for they know not the way of the Lord, nor the judgment of their God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer5-knowledge-practice',
          html: 'Jeremiah moves from lamenting their lack of knowledge to exposing their refusal to obey. Not knowing is not the problem; ignoring is[res:jer31-hebrews-intertextual][res:sefaria-jeremiah-5].',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(5, 'I will get me unto the great men, and will speak unto them; for they have known the way of the Lord, and the judgment of their God: but these have altogether broken the yoke, and burst the bonds.'),
            plain(6, 'Wherefore a lion out of the forest shall slay them, and a wolf of the evenings shall spoil them, a leopard shall watch over their cities: every one that goeth out thence shall be torn in pieces; because their transgressions are many, and their backslidings are increased.'),
            plain(7, 'How shall I pardon thee for this? thy children have forsaken me, and sworn by them that are no gods: when I had fed them to the full, they then committed adultery, and assembled themselves by troops in the harlots&apos; houses.'),
            plain(8, 'They were as fed horses in the morning: every one neighed after his neighbour&apos;s wife.'),
            plain(9, 'Shall I not visit for these things? saith the Lord: and shall not my soul be avenged on such a nation as this?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer5-find-man',
          html: 'God sends Jeremiah as an urban detective. Walk through Jerusalem. Look. Seek. Find me a man—even one man—who executes judgment and seeks truth. The parallel is to Abraham&apos;s negotiation with God over Sodom: Abraham asked if God would spare the city for the sake of ten righteous men. God had found not even ten. Here, God asks for one. One righteous person to justify the existence of the entire city. And the search yields nothing[res:lachish-letters].',
        },
        {
          kind: 'hebrew',
          id: 'jer5-emes',
          title: 'Emet — "Truth" (Stability and Reliability)',
          script: 'אֶמֶת',
          translit: '<strong>Emet</strong> · truth; faithfulness; reliability; that which stands fast',
          description: 'The Hebrew word emet refers not merely to factual accuracy but to truth as reliability, as something that stands firm, as something you can depend on. To seek emet is to seek what is stable, enduring, and dependable. In a world of lies and shifting allegiances, one person who seeks and speaks what is true would be a treasure. Yet no such person is found.',
        },
        {
          kind: 'commentary',
          id: 'jer5-struck',
          html: 'God expresses His frustration: "Thou hast stricken them, but they have not grieved; thou hast consumed them, but they have refused to receive correction." God has brought judgment, affliction, depletion—and the people have not responded. They have not turned back. Instead, "they have made their faces harder than a rock." Hardness replaces repentance. Refusal replaces turning. The people are not merely sinful; they are hardened in sin.',
        },
        {
          kind: 'commentary',
          id: 'jer5-poor-great',
          html: 'Jeremiah then makes an observation: perhaps the poor do not know God&apos;s way because they lack education. But he decides to go to the great men, who surely know the way of the Lord. Yet he finds that they, too, have "broken the yoke, and burst the bonds." Knowledge of God has not produced obedience. In fact, it makes their rebellion worse. They know what they are rejecting.',
        },
        {
          kind: 'christ',
          id: 'jer5-christ-righteous',
          title: 'Christ Connection — The One Righteous Man',
          html: 'In Romans 3:10–12, Paul writes, "As it is written, There is none righteous, no, not one... there is none that seeketh after God." Yet he then points to Christ: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us." The search for one righteous man comes up empty—until Christ. He alone executes true judgment. He alone seeks truth perfectly. He alone stands as the righteous one among the unrighteous.',
        },
        {
          kind: 'carry',
          html: 'This chapter poses an uncomfortable question: If God were to run through the streets of your city looking for someone who executes judgment and seeks truth, someone whose word can be trusted, someone who has not broken covenant—would you be found? The answer, honestly, is probably no. We are all compromised, all part of the general failure. Yet that failure points us to the one man who was not, and who lived among us.',
        },
        {
          kind: 'reflection',
          id: 'jer5-who-trustworthy',
          prompt: 'Who in your life is someone who executes judgment and seeks truth? How do they stand out? And where are you falling short of that standard yourself?',
        },
      ],
    },

    {
      ref: 'Jeremiah 5:20–31',
      title: 'Hearts That Rebel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(20, 'Declare this in the house of Jacob, and publish it in Judah, saying,'),
            plain(21, 'Hear now this, O foolish people, and without understanding; which have eyes, and see not; which have ears, and hear not:'),
            plain(22, 'Fear ye not me? saith the Lord: will ye not tremble at my presence, which have placed the sand for the bound of the sea by a decree, that it cannot pass it: and though the waves thereof toss themselves, yet can they not prevail; though they roar, yet can they not pass over it?'),
            plain(23, 'But this people hath a revolting and a rebellious heart; they have revolted and gone away.'),
            plain(24, 'Neither say they in their heart, Let us now fear the Lord our God, that giveth rain, both the former and the latter, in his season: he reserveth unto us the appointed weeks of the harvest.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer5-fear-forgetting',
          html:
            'Jeremiah shifts from calling them to fear God to their forgetting His provision. Reverence gives way to ingratitude.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(25, 'Your iniquities have turned away these things, and your sins have withholden good things from you.'),
            plain(26, 'For among my people are found wicked men: they lay wait, as he that setteth snares; they set a trap, they catch men.'),
            plain(27, 'As a cage is full of birds, so are their houses full of deceit: therefore they are become great, and waxen rich.'),
            plain(28, 'They are waxen fat, they shine: yea, they overpass the deeds of the wicked: they judge not the cause, the cause of the fatherless, yet they prosper; and the right of the needy do they not judge.'),
            plain(29, 'Shall I not visit for these things? saith the Lord: shall not my soul be avenged on such a nation as this?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer5-eyes-see-not',
          html: 'Jeremiah is commanded to declare: this people are foolish and without understanding. They have eyes but do not see. They have ears but do not hear. This is a spiritual blindness and deafness—they have the physical organs but lack the spiritual perception to receive what God is saying. They will not acknowledge the God who bound the sea with sand, who sustains the universe with laws. Such deliberate blindness is a kind of rebellion in itself.',
        },
        {
          kind: 'commentary',
          id: 'jer5-revolting',
          html: 'The core of the problem is stated starkly: "This people hath a revolting and a rebellious heart; they have revolted and gone away." This is not a failure to understand. This is a failure of will. The people have chosen to revolve—to turn away. And in turning away, they have turned away from the God who sustains them, who gives rain, who reserves the harvest.',
        },
        {
          kind: 'carry',
          html: 'One of the hardest truths in Scripture is that you can see without perceiving and hear without understanding. You can know the facts about God and remain spiritually blind. You can be surrounded by evidence of God&apos;s power and care and still have a revolting and rebellious heart. What would it take to move from knowledge to perception, from hearing words to truly understanding?',
        },
        {
          kind: 'reflection',
          id: 'jer5-what-blind',
          prompt: 'Where in your life do you have "eyes but see not"? What are you refusing to perceive? What would it cost you to truly see?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Run ye to and fro through the streets of Jerusalem, and see now, and know, and seek in the broad places thereof, if ye can find a man, if there be any that executeth judgment, that seeketh the truth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 5 · Study Guide',
  },  resources: [
    {
      id: 'jer31-hebrews-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Jeremiah 31 ↔ Hebrews 8:8–12',
      url: 'https://intertextual.bible/text/jeremiah-31/hebrews-8',
      description: 'Side-by-side comparison of the new covenant promise in Jeremiah quoted in Hebrews.',
    },
    {
      id: 'lachish-letters',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Lachish Letters',
      url: 'https://www.imj.org.il/en/collections/lachish-letters',
      description: 'Ancient inscribed potsherds from the Judean siege of Lachish (587 BCE), contemporary with Jeremiah.',
    },
    {
      id: 'sefaria-jeremiah-5',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah 5 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Jeremiah.5',
      description: 'The Hebrew text of Jeremiah 5 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
