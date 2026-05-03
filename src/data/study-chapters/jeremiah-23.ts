import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 23 — The Branch and False Prophets
 *
 * "Behold, the days come, saith the Lord, that I will raise unto David a
 * righteous Branch, and a King shall reign and prosper, and shall execute
 * judgment and justice in the earth. In his days Judah shall be saved, and
 * Israel shall dwell safely: and this is his name whereby he shall be called,
 * THE LORD OUR RIGHTEOUSNESS." Yet against this promise stands the judgment on
 * false prophets who lead the people astray.
 */
export const JEREMIAH_23: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 23,

  estimatedMinutes: { beginner: 7, intermediate: 10, deep: 12 },
  intros: [
    'Jeremiah 23 contains one of the most significant prophecies in Scripture: the coming of a "righteous Branch" from the line of David, a King who will "execute judgment and justice in the earth." This King will be called "The Lord Our Righteousness" — a name that echoes the character of God Himself. Where the false kings of Judah failed, where they were childless and cursed, this King will reign in righteousness.',
    'Yet the chapter also contains severe judgment on false prophets — those who claim to speak for God but lead the people away from Him. The contrast is stark: a true King is coming, a righteous One; but the people are being deceived by prophets who speak from their own hearts, not from God. The true prophets must distinguish their message from the lies.',
  ],

  bottomShare: {
    label: 'Share Jeremiah 23',
    quote:
      '"I will raise unto David a righteous Branch... THE LORD OUR RIGHTEOUSNESS." Jeremiah prophesies the coming of the true King who will judge and rule with justice.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 23 · Study Guide',
  },

  sections: [
    /* ─── Jeremiah 23:1–8 — The Righteous Branch ────────────────────────────── */
    {
      ref: 'Jeremiah 23:1–8',
      title: 'A Righteous King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 1,
              spans: [
                t('Woe be unto the pastors that destroy and scatter the sheep of my pasture! saith the Lord.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Therefore thus saith the Lord God of Israel against the pastors that feed my people; Ye have scattered my flock, and driven them away, and have not visited them: behold, I will visit upon you the evil of your doings, saith the Lord.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And I will gather the remnant of my flock out of all countries whither I have driven them, and will bring them again to their folds; and they shall be fruitful and increase.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And I will set up shepherds over them which shall feed them: and they shall fear no more, nor be dismayed, neither shall they be lacking, saith the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jeremiah-23-78mid-1',
          html: 'The oracle turns from the failed shepherds to the Branch that is coming — &quot;a King shall reign and prosper.&quot; Judgment makes room for a promise[res:bibleodyssey-jeremiah][res:sefaria-jeremiah-23].',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 5,
              spans: [
                t('Behold, the days come, saith the Lord, that I will raise unto David a '),
                hp('righteous Branch', 'jer23-branch'),
                t(', and a King shall reign and prosper, and shall execute judgment and justice in the earth.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('In his days Judah shall be saved, and Israel shall dwell safely: and this is his name whereby he shall be called, '),
                hp('THE LORD OUR RIGHTEOUSNESS', 'jer23-name'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Therefore, behold, the days come, saith the Lord, that they shall no more say, The Lord liveth, which brought up the children of Israel out of the land of Egypt;'),
              ],
            },
            {
              number: 8,
              spans: [
                t('But, The Lord liveth, which brought up and which led the seed of the house of Israel out of the north country, and from all countries whither I had driven them; and they shall dwell in their own land.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer23-branch',
          html: 'The "righteous Branch" echoes through Jeremiah and the prophets. It is a shoot, a descendant, from the line of David who will be righteous — unlike the false kings who came before. This Branch will not be cursed or childless; He will reign and prosper. The messianic promise is implicit in the name "Branch" — it speaks of life, growth, fruitfulness[res:sefaria-jeremiah].',
        },
        {
          kind: 'commentary',
          id: 'jer23-name',
          html: '"The Lord Our Righteousness" — a name that belongs to God alone, yet is given to the King. This King will not merely rule; He will be righteous. His very being will be righteousness. This is not a human king who tries to be just; this is a King in whom justice itself resides.',
        },
        {
          kind: 'hebrew',
          id: 'jer23-tsemach',
          title: 'Tsemach — "Branch"',
          script: 'צֶמַח',
          translit: '<strong>Tsemach</strong> · branch; sprout; shoot; growth',
          description:
            'The Hebrew "tsemach" suggests organic growth, a living thing that grows from the root. The righteous Branch is not artificially imposed but grows naturally from the line of David, life flowing from life.',
        },
        {
          kind: 'christ',
          id: 'jer23-christ-branch',
          title: 'Christ Connection — The Branch and the Root',
          html: 'Jesus is identified as "the Root and the Offspring of David" (Revelation 22:16). He is the righteous Branch that Jeremiah prophesied. And His name, revealed to Paul, is "the Power of God, and the Wisdom of God" (1 Corinthians 1:24) — but more intimately for Jeremiah&apos;s purpose, He is our Righteousness. "God... made him to be sin who knew no sin, that we might become the righteousness of God in him" (2 Corinthians 5:21).',
        },
        {
          kind: 'carry',
          html:
            'The promise is not only that a righteous King is coming, but that in His days, "Judah shall be saved, and Israel shall dwell safely." The coming of Christ is the ultimate answer to all the failures of human leadership. In Him, we find the justice and wisdom and righteousness we have always needed.',
        },
        {
          kind: 'reflection',
          id: 'jer23-righteous-king',
          prompt: 'Jeremiah prophesies a righteous King called "The Lord Our Righteousness." How does knowing Jesus as your righteousness change the way you live? What would it mean to dwell safely in Him?',
        },
      ],
    },

    /* ─── Jeremiah 23:9–22 — Against the False Prophets ────────────────────── */
    {
      ref: 'Jeremiah 23:9–22',
      title: 'False Prophecy and True',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 9,
              spans: [
                t('Mine heart is broken within me; all my bones shake; I am like a drunken man, and like a man whom wine hath overcome, because of the Lord, and because of the words of his holiness.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('For the land is full of adulterers; for because of swearing the land mourneth; the pleasant places of the wilderness are dried up, and their course is evil, and their force is not right.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('For both prophet and priest are profane; yea, in my house have I found their wickedness, saith the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jeremiah-23-78mid-2',
          html:
            'The oracle turns from the failed shepherds to the Branch that is coming — &quot;a King shall reign and prosper.&quot; Judgment makes room for a promise.',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 12,
              spans: [
                t('Wherefore their way shall be unto them as slippery ways in the darkness: they shall be driven on, and fall therein: for I will bring evil upon them, even the year of their visitation, saith the Lord.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And I have seen folly in the prophets of Samaria; they prophesied in Baal, and caused my people Israel to err.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('I have also seen in the prophets of Jerusalem an horrible thing: they commit adultery, and walk in lies: they strengthen also the hands of evildoers, that none doth return from his wickedness; they are all of them unto me as Sodom, and the inhabitants thereof as Gomorrah.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Therefore thus saith the Lord of hosts concerning the prophets; Behold, I will feed them with wormwood, and make them drink the water of gall: for from the prophets of Jerusalem is profaneness gone forth into all the land.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer23-prophet-judgment-to-false-peace',
          html:
            'Judgment has fallen on those who speak from their own hearts and deceive the people. Now the focus turns to the false prophets&apos; deadly message: peace where there should be warning, safety where danger approaches. They rob the people of the only wisdom that could save them.',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 16,
              spans: [
                t('Thus saith the Lord of hosts, Hearken not unto the words of the prophets that prophesy unto you: they make you vain: they speak a vision of their own heart, and not out of the mouth of the Lord.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('They say still unto them that despise me, The Lord hath said, Ye shall have peace: and they say unto every one that walketh after the imagination of his own heart, No evil shall come upon you.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('For who hath stood in the counsel of the Lord, and hath perceived and heard his word? who hath marked his word, and heard it?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jeremiah-23-78mid-3',
          html:
            'The oracle turns from the failed shepherds to the Branch that is coming — &quot;a King shall reign and prosper.&quot; Judgment makes room for a promise.',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 19,
              spans: [
                t('Behold, a whirlwind of the Lord is gone forth in fury, even a grievous whirlwind: it shall fall grievously upon the head of the wicked.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('The anger of the Lord shall not return, until he have executed, and till he have performed the thoughts of his heart: in the latter days ye shall consider it perfectly.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('I have not sent these prophets, yet they ran: I have not spoken to them, yet they prophesied.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('But if they had stood in my counsel, and had caused my people to hear my words, then they should have turned them from their evil way, and from the evil of their doings.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer23-false-prophets',
          html:
            'Jeremiah is shaken by what he sees: prophets and priests are committing adultery, walking in lies, yet they prophesy peace. They strengthen the hands of evildoers by promising that no evil will come. These are not prophets of God; they are prophets who speak from their own hearts, who prophesy visions they have not seen, who make the people vain.',
        },
        {
          kind: 'commentary',
          id: 'jer23-stood-counsel',
          html:
            'The mark of a true prophet is that he has "stood in the counsel of the Lord, and hath perceived and heard his word." A false prophet speaks from his own heart. A true prophet has received God&apos;s word and speaks what he has heard. The difference is not subtle; it is absolute.',
        },
        {
          kind: 'carry',
          html:
            'In our time, as in Jeremiah&apos;s, there are many voices claiming to speak for God. How do we distinguish the true from the false? By their fruit: do they call people to repentance and turn from evil, or do they promise peace to those who continue in wickedness? Do they speak from God&apos;s counsel or from their own hearts?',
        },
        {
          kind: 'reflection',
          id: 'jer23-hear-god',
          prompt: 'How do you discern between prophets who speak from their own hearts and those who speak from God&apos;s counsel? What questions do you ask to test the spirits?',
        },
      ],
    },

    /* ─── Jeremiah 23:23–32 — The Dream and the Word ───────────────────────── */
    {
      ref: 'Jeremiah 23:23–32',
      title: "Dreams vs. God&apos;s Word",
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 23,
              spans: [
                t('Am I a God at hand, saith the Lord, and not a God afar off?'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Can any hide himself in secret places that I shall not see him? saith the Lord. Do not I fill heaven and earth? saith the Lord.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('I have heard what the prophets said, that prophesy lies in my name, saying, I have dreamed, I have dreamed.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('How long shall this be in the heart of the prophets that prophesy lies? yea, they are prophets of the deceit of their own heart;'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Which think to cause my people to forget my name by their dreams which they tell every man to his neighbour, as their fathers have forgotten my name for Baal.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer23-dreams-truth',
          html:
            'Jeremiah shifts from false prophets stealing God&apos;s word to His word burning like fire. Theft becomes conquest.',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 28,
              spans: [
                t('The prophet that hath a dream, let him tell a dream; and he that hath my word, let him speak my word faithfully. What is the chaff to the wheat? saith the Lord.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Is not my word like as a fire? saith the Lord; and like a hammer that breaketh the rock in pieces?'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Therefore, behold, I am against the prophets, saith the Lord, that steal my words every one from his neighbour.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Behold, I am against the prophets, saith the Lord, that use their tongues, and say, He saith.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Behold, I am against them that prophesy false dreams, saith the Lord, and do tell them, and cause my people to err by their lies, and by their lightness; yet I sent them not, nor commanded them: therefore they shall not profit this people at all, saith the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer23-dream-vs-word',
          html:
            'Jeremiah distinguishes between dreams and God&apos;s word. A dream is a dream — tell it as such. But God&apos;s word is not a dream; it is fire, a hammer that breaks rock. God&apos;s word has power; dreams do not. The false prophets have confused dreams with God&apos;s word and are leading the people astray.',
        },
        {
          kind: 'commentary',
          id: 'jer23-steal-words',
          html:
            'God says, "I am against the prophets that steal my words every one from his neighbour." The false prophets take fragments of what true prophets have said and claim them as their own. They use their tongues to say "He saith" when God has not spoken.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age of noise, of many voices claiming to speak truth. Jeremiah teaches us to distinguish: What is the substance? Does it break hard hearts like a hammer? Does it purify like fire? Or is it mere entertainment, dreams and visions that leave us unchanged?',
        },
        {
          kind: 'reflection',
          id: 'jer23-word-power',
          prompt: 'God&apos;s word is like fire and a hammer. How does God&apos;s word affect your life? Where have you experienced it breaking through resistance or hardness?',
        },
      ],
    },

    /* ─── Jeremiah 23 · The True and False ────────────────────────────────── */
    {
      ref: 'Jeremiah 23 · All',
      title: 'Distinguishing Voices',
      blocks: [
        {
          kind: 'commentary',
          id: 'jer23-king-and-prophets',
          html:
            'The chapter juxtaposes the coming righteous King with the false prophets of the present. The King speaks God&apos;s word truly; the false prophets speak from their own hearts. In the midst of deception, God promises a true voice — a King who will reign in righteousness.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],  resources: [
    {
      id: 'bibleodyssey-jeremiah',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Jeremiah',
      url: 'https://www.bibleodyssey.org/passages/main-articles/jeremiah/',
      description: 'Peer-reviewed SBL entry on the prophet Jeremiah and his historical context.',
    },
    {
      id: 'sefaria-jeremiah',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah',
      url: 'https://www.sefaria.org/Jeremiah',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    },
    {
      id: 'sefaria-jeremiah-23',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah 23 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Jeremiah.23',
      description: 'The Hebrew text of Jeremiah 23 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],
};
