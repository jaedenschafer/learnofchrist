import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Samuel 7 — The Davidic Covenant
 *
 * One of the most pivotal passages in Scripture. David wants to build a house
 * for God; God tells him that instead, God will build a house for him — an
 * eternal dynasty. The promise of an eternal throne, fulfilled ultimately in
 * Christ. "I will be his father, and he shall be my son" — a word spoken of
 * every king in the Davidic line, but ultimately of Jesus, the Son of David,
 * whose kingdom shall have no end.
 */
export const SAMUEL_2_7: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 7,

  estimatedMinutes: { beginner: 7, intermediate: 15, deep: 18 },
  intros: [
    'David has finally brought peace to Israel. From Saul&apos;s chaos and war, he has built a kingdom at rest, surrounded by enemies defeated. Now, sitting in his house of cedar, he looks at the ark of God still dwelling in a tent and thinks: "I should build a house for God." It seems right, the natural move of a grateful king. But God has something else in mind. Not a house built by David for God — but a house built by God for David. An eternal house. A throne that shall stand forever.',
    'This chapter contains one of the most important covenants in Scripture — the Davidic Covenant. It is the promise that runs through the entire Bible: that one of David&apos;s descendants will sit on a throne forever. When the angel Gabriel appears to Mary, he will draw a direct line from this moment to her son: "The Lord God shall give unto him the throne of his father David, and he shall reign over the house of Jacob for ever; and of his kingdom there shall be no end" (Luke 1:32–33). The Davidic Covenant is not a story about an ancient king. It is the foundation of hope for Christ.',
  ],

  opener: {
    matchArtist: /tissot|rembrandt|allston/i,
    matchTitle: /david|covenant|nathan/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 2 Samuel 7',
    quote:
      'David wanted to build God a house, but God said: "I will build you a house. Your throne shall be established for ever." The Davidic Covenant — a promise of an eternal king, fulfilled in Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 7 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-davidic-covenant',
      kind: 'study',
      source: 'Sefaria',
      label: 'The Davidic Covenant',
      url: 'https://www.sefaria.org/2_Samuel.7',
      description: 'God&apos;s eternal covenant with David: his house, throne, and kingdom will endure forever.',
    },
    {
      id: 'bible-odyssey-temple-promise',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'The Promise to Build the Temple',
      url: 'https://www.bibleodyssey.org/dictionary/temple/',
      description: 'God&apos;s promise that David&apos;s son (Solomon) will build the temple.',
    },
    {
      id: 'intertextual-messiah-covenant',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'The Davidic Covenant and Messiah',
      url: 'https://intertextual.bible/search?q=Psalm+89+Messiah',
      description: 'How the Davidic covenant prefigures Jesus as the ultimate heir to David&apos;s throne.',
    },
  ],

  sections: [
    /* ─── 2 Samuel 7:1–3 — David's Desire to Build ──────────────────── */
    {
      ref: '2 Samuel 7:1–3',
      title: 'David&apos;s Desire to Build a House',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass, when the king sat in his house, and the '),
                hg('Lord had given him rest round about', 'c-rest'),
                t(' from all his enemies;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('That the king said unto Nathan the prophet, See now, I dwell in an '),
                hg('house of cedar', 'c-cedar'),
                t(', but the '),
                hy('ark of God', 'c-ark'),
                t(' dwelleth within curtains.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rest',
          html:
            'The "rest" David speaks of is earned rest — the fruit of battle. He has fought his enemies; the Lord has defeated them. Now, in the peace that follows, David can think clearly. He can see his own house, cedar and solid. And then his eye falls on the ark[res:sefaria-davidic-covenant][res:bible-odyssey-temple-promise][res:intertextual-messiah-covenant].',
        },
        {
          kind: 'commentary',
          id: 'c-cedar',
          html:
            'A house of cedar is a sign of wealth and permanence. Cedar was imported, valuable, the wood of kings and temples. David&apos;s dwelling is magnificent. But it is his own.',
        },
        {
          kind: 'commentary',
          id: 'c-ark',
          html:
            'The ark of God — the seat of the Lord&apos;s presence, the most sacred object in Israel — dwells in curtains. A tent. Temporary. David feels the incongruity: his house is permanent stone and cedar; God&apos;s house is cloth and movable.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 3,
              spans: [
                t('And Nathan said to the king, Go, do all that is in thine '),
                hg('heart', 'c-heart-nathan'),
                t('; for the Lord is with thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-heart-nathan',
          html:
            'Nathan the prophet hears David&apos;s thought and immediately blesses it. "Do all that is in your heart. The Lord is with you." It is a pastoral response, a man of God affirming what seems like a good man&apos;s good intention. But Nathan has not asked the Lord. He has only answered David.',
        },
      ],
    },

    /* ─── 2 Samuel 7:4–7 — The Word of the Lord That Night ──────────── */
    {
      ref: '2 Samuel 7:4–7',
      title: 'The Word of the Lord in the Night',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 4,
              spans: [
                t('And it came to pass that '),
                hg('night', 'c-night'),
                t(', that the word of the Lord came unto Nathan, saying,'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Go and tell my servant David, Thus saith the Lord, Shalt thou build me an house for me to dwell in?'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Whereas I have not dwelt in any house since the time that I brought up the children of Israel out of Egypt, even to this day, but have walked in a tent and in a '),
                hy('tabernacle', 'c-tabernacle'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('In all the places wherein I have walked with all the children of Israel spake I a word with any of the tribes of Israel, whom I commanded to feed my people Israel, saying, Why build ye not me an house of cedar?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-night',
          html:
            'That night. Not the next morning. The word comes to Nathan while he sleeps, while his human reason rests. God corrects His prophet — and through him, will redirect his king.',
        },
        {
          kind: 'hebrew',
          id: 'c-tabernacle',
          title: 'Mishkan — "Tabernacle," the Moving Tent',
          script: 'מִשְׁכַּן',
          translit: '<strong>Mishkan</strong> · dwelling place; tent of meeting',
          description:
            'The mishkan was the portable tent where God dwelt with Israel in the wilderness. It moved with them. It was never meant to be permanent or grandiose. God says: "I have walked in a tent and a tabernacle" — dwelling among my people wherever they go, not waiting for a fixed house.',
        },
        {
          kind: 'commentary',
          html:
            'God does not say the idea is wrong. He says: "I have never asked for this. For all the generations I have led you, I have asked only one thing — that you take care of my people." The temple is not a sin. But it is not a need. God does not wait for marble and cedar to dwell with His people.',
        },
      ],
    },

    /* ─── 2 Samuel 7:8–11 — God Will Build David a House ────────────── */
    {
      ref: '2 Samuel 7:8–11',
      title: 'The Covenant: God Will Build You a House',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 8,
              spans: [
                t('Now therefore so shalt thou say unto my servant David, Thus saith the Lord of hosts, I took thee from the '),
                hg('sheepcote', 'c-sheepcote'),
                t(', from following the sheep, to be '),
                hg('ruler over my people', 'c-ruler'),
                t(', over Israel:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sheepcote',
          html:
            'The sheepcote. David&apos;s beginning. Not born to kingship, not bred to power, but taken from the fields where he kept sheep. Everything David is, he has been given. He did not build himself.',
        },
        {
          kind: 'commentary',
          id: 'c-ruler',
          html:
            'From the sheepcote to the throne — the arc of David&apos;s life is being named here, not as achievement but as gift. "I took you." This is God saying: I chose you. I raised you. I made you king.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 9,
              spans: [
                t('And I was with thee '),
                hy('whithersoever thou wentest', 'c-presence'),
                t(', and have '),
                hg('cut off all thine enemies', 'c-enemies'),
                t(' out of thy sight, and have made thee a great name, like unto the name of the great men that are in the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-presence',
          html:
            'God&apos;s own presence is the testimony. "I was with you wherever you went." Not: you were clever, or brave, or brilliant. You had God. God with you is what made the difference.',
        },
        {
          kind: 'commentary',
          id: 'c-enemies',
          html:
            'David did not vanquish his enemies. God cut them off. David has a great name on earth, but it is God who made it so. Again: everything is gift. David is learning who deserves the credit.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 10,
              spans: [
                t('Moreover I will appoint a place for my people Israel, and will plant them, that they may dwell in a place of their own, and '),
                hg('move no more', 'c-move-no-more'),
                t('; neither shall the children of wickedness afflict them any more, as beforetime,'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And as since the time that I commanded judges to be over my people Israel, and have caused thee to have rest from all thine enemies. Also the Lord telleth thee that he will make thee an '),
                hp('house', 'c-house-david'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-move-no-more',
          html:
            'Israel has been wandering since Egypt — forty years in the wilderness, then judges, then battles. Finally, stability. A place of their own. Not temporary. Established. This is the fulfillment God has promised: not just a king, but a kingdom at rest.',
        },
        {
          kind: 'commentary',
          id: 'c-house-david',
          html:
            'Here it is. The reversal. "The Lord telleth thee that he will make thee an house." Not a building. A <em>house</em> — a dynasty. A line. A succession. David asked to build a house of stone for God. God offers to build a house of generations for David.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-bayit',
          title: 'Bayit — "House," Both Temple and Dynasty',
          script: 'בַּיִת',
          translit: '<strong>Bayit</strong> · house; household; dynasty',
          description:
            'The Hebrew word <em>bayit</em> carries a double meaning that English cannot quite capture. It means a physical house — a building. But it also means a household, a family line, a dynasty. When God says "I will make you a house," He means both: David will have descendants, and one of those descendants will have a throne that lasts forever. The wordplay is intentional. David wants to build a <em>bayit</em> (temple) for God. God responds by building a <em>bayit</em> (dynasty) for David.',
        },
      ],
    },

    /* ─── 2 Samuel 7:12–16 — The Eternal Throne ────────────────────── */
    {
      ref: '2 Samuel 7:12–16',
      title: 'The Eternal Throne',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 12,
              spans: [
                t('And when thy days be fulfilled, and thou shalt '),
                hg('sleep with thy fathers', 'c-sleep'),
                t(', I will set up thy '),
                hy('seed', 'c-seed'),
                t(' after thee, which shall proceed out of thy bowels, and I will establish his kingdom.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sleep',
          html:
            'Sleep with your fathers. The Old Testament&apos;s tender language for death — not destruction, not erasure, but sleep. Your story ends; theirs continues.',
        },
        {
          kind: 'hebrew',
          id: 'c-seed',
          title: 'Zera — "Seed," the Line That Continues',
          script: 'זֶרַע',
          translit: '<strong>Zera</strong> · seed; offspring; descendants',
          description:
            'The word <em>zera</em> means seed — the thing you plant that grows. It carries the sense of continuity, of life flowing forward. God says: "I will establish your seed." Not just one son, but a line. A succession. One of your seed will inherit the throne.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 13,
              spans: [
                t('He shall build an house for my name, and I will '),
                hp('stablish the throne of his kingdom for ever', 'c-throne-forever'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-throne-forever',
          html:
            'Now the word comes full circle. David wanted to build a house for God&apos;s name. God says: your son will do that. Solomon will build the temple. But more than that — I will establish the throne of his kingdom forever. Not just Solomon&apos;s throne — but the throne of the Davidic line, eternally. One of your descendants, at the end of time, will still be king.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 14,
              spans: [
                t('I will be his '),
                hp('father', 'christ-father'),
                t(', and he shall be my '),
                hp('son', 'christ-son'),
                t('. If he commit iniquity, I will chasten him with the rod of men, and with the stripes of the children of men:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('But my mercy shall not depart away from him, as I took it from Saul, whom I put away before thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'christ-father',
          html:
            '"I will be his father." The most intimate covenant language — a father-son relationship between God and the king. This word is spoken of every Davidic king: the relationship between God and Israel&apos;s rulers is a father-child bond. But when this promise is ultimately fulfilled, it will be spoken of Jesus.',
        },
        {
          kind: 'commentary',
          id: 'christ-son',
          html:
            '"He shall be my son." Not metaphorically, in the sense that all Israel is God&apos;s son (Exodus 4:22). But a son who sits on the throne of David. The Hebrews will read this and understand it as a covenant promise of a particular descendant — a messianic promise.',
        },
        {
          kind: 'christ',
          id: 'father-son-christ',
          title: 'Christ Connection — "I Will Be His Father"',
          html:
            'When the word of God comes to Mary, the angel speaks this exact covenant: "The Lord God shall give unto him the throne of his father David, and he shall reign over the house of Jacob for ever; and of his kingdom there shall be no end" (Luke 1:32–33). But that is not the only place this covenant echoes in the New Testament. The epistle to the Hebrews will quote this very verse directly: "For to which of the angels said he at any time, Thou art my Son, this day have I begotten thee?… And again, I will be to him a Father, and he shall be to me a Son" (Hebrews 1:5, quoting this chapter). The "Son" language of Psalm 2 and 2 Samuel 7 is applied to Jesus — the one who fulfills the Davidic promise, the eternal king, the one to whom the throne of David belongs not for forty years but forever.',
        },
        {
          kind: 'commentary',
          html:
            'The promise also carries consequence. "If he commits iniquity, I will chasten him." This is not unconditional grace. The king must be disciplined like any son. But (and this is critical) "my mercy shall not depart away from him, as I took it from Saul." Unlike Saul, who was rejected utterly, the Davidic king is never wholly abandoned. Discipline, yes. Withdrawal of mercy, no. The covenant holds.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 16,
              spans: [
                t('And thine house and thy kingdom shall be '),
                hp('established for ever before thee', 'c-established-forever'),
                t(': thy throne shall be established for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-established-forever',
          html:
            'Established for ever. The Hebrew word is <em>nakhon</em> — to be firm, fixed, secure. Nothing temporary, nothing contingent. "Your house. Your kingdom. Established forever before you." David will see his son sit on the throne. And then, through the generations, one will come who sits on that throne eternally.',
        },
      ],
    },

    /* ─── 2 Samuel 7:17–19 — David Goes Before the Lord ────────────── */
    {
      ref: '2 Samuel 7:17–19',
      title: 'David Goes Before the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 17,
              spans: [
                t('According to all these words, and according to all this vision, so did Nathan speak unto David.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Then went king David in, and sat before the Lord, and he said, '),
                hg('Who am I', 'c-who-am-i'),
                t(', O Lord God? and what is my house, that thou hast brought me hitherto?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-who-am-i',
          html:
            'Who am I? This is the question that defines David&apos;s response. Not "How grateful am I?" or "What an honor!" but "Who am I?" It is the foundational question of grace. David has just been told he will have an eternal throne. His first response is not pride, but bewilderment. Who is he, that God would do this?',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 19,
              spans: [
                t('And this was yet a small thing in thy sight, O Lord God; but thou hast spoken also of thy servant&apos;s house for a great while to come. And '),
                hy('is this the manner of man', 'c-manner-of-man'),
                t(', O Lord God?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-manner-of-man',
          html:
            'David says: "This was a small thing... and you have spoken of a great while to come." God has already done so much for David — raised him from shepherd to king. And now God speaks of generations yet unborn. David asks a question that has no answer: "Is this how man normally speaks? Is this how covenants work?" No. This exceeds human understanding. This is what grace does.',
        },
      ],
    },

    /* ─── 2 Samuel 7:20–24 — David's Prayer: The Greatness of God ───── */
    {
      ref: '2 Samuel 7:20–24',
      title: 'David&apos;s Prayer: What Is God?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 20,
              spans: [
                t('And what can David say more unto thee? for thou, Lord God, knowest thy servant. For thy word&apos;s sake, and according to thine own heart, hast thou done all these great things, to make thy servant know them.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Wherefore thou art great, O Lord God: for '),
                hp('there is none like thee', 'c-none-like-thee'),
                t(', neither is there any God beside thee, according to all that we have heard with our ears.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-none-like-thee',
          html:
            'David shifts now from asking about himself to asking about God. He stops trying to understand what he has been promised and instead looks at the One who promised it. "There is none like thee." Not: "I am grateful." But: "You are incomparable." This is the movement of David&apos;s prayer — from self to God, from confusion to worship.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 22,
              spans: [
                t('And what one nation in the earth is like thy people, even like Israel, whom God went to '),
                hy('redeem', 'c-redeem'),
                t(' for a people to himself, and to make him a name, and to do for you great things and terrible, for thy land, before thy people, which thou redeemedst to thee from Egypt, from the nations and their gods?'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-redeem',
          title: 'Ga&apos;al — "Redeem," to Buy Back',
          script: 'גָּאַל',
          translit: '<strong>Ga&apos;al</strong> · to redeem; to buy back; to act as kinsman-redeemer',
          description:
            'The verb <em>ga&apos;al</em> means to redeem — to buy back something that had been lost or sold. David uses it of God&apos;s redemption of Israel from Egypt. God bought them back. He paid a price. He made them His own people. It is a word rooted in covenant loyalty and familial obligation — God acts toward Israel as a redeemer acts, with the commitment of family.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 23,
              spans: [
                t('For thou hast confirmed to thyself thy people Israel to be a people unto thee for ever: and thou, Lord, art become their God.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Now therefore, O Lord God, the word that thou hast spoken concerning thy servant, and concerning his house, '),
                hg('establish it for ever', 'c-establish-forever-prayer'),
                t(', and do as thou hast said.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-establish-forever-prayer',
          html:
            'David now brings his own prayer into the world he has just contemplated. He has looked at God&apos;s covenant with Israel — made them His people forever. Now he asks: do the same for my house. What you have done for a nation, do for a dynasty. Establish the word you have spoken concerning me and my seed.',
        },
        {
          kind: 'carry',
          html:
            'David&apos;s prayer moves through a pattern we might follow: (1) "Who am I?" — recognition of our own smallness; (2) "You are great" — recognition of God&apos;s incomparable nature; (3) "You have always kept your covenant" — remembrance of God&apos;s faithfulness in history; (4) "Establish your word in me" — the request that flows from those recognitions. It is the shape of intercession. When you come before God with a request, come through David&apos;s prayer. First see yourself truly. Then see God truly. Then remember His covenant with others. Then ask Him to keep His word with you.',
        },
        {
          kind: 'reflection',
          id: 'davidic-covenant-prayer',
          prompt:
            'Where in your own life do you sense God making a promise that seems "too much" or too far-reaching to believe? What would it look like to sit before God, as David did, and ask not "How can I believe this?" but rather "Who are you, that you would do this?"',
        },
      ],
    },

    /* ─── 2 Samuel 7:25–29 — David's Petition ────────────────────────── */
    {
      ref: '2 Samuel 7:25–29',
      title: 'David&apos;s Petition: Let the House Be Blessed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 25,
              spans: [
                t('And let thy name be magnified for ever, saying, The Lord of hosts is the God over Israel: and let the house of David thy servant be established before thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'David&apos;s petition is not ultimately for himself. It is that God&apos;s name be magnified. He wants the promise to hold so that all the earth will see: there is a God who keeps covenant. There is a Lord of hosts who stands by His word. This is what it means to be blessed — not to receive favor for yourself alone, but to have your life become a testimony to God&apos;s faithfulness.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 26,
              spans: [
                t('For thou hast confirmed to thyself thy people Israel to be a people unto thee for ever: and thou, Lord, art become their God.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Therefore now let it please thee to bless the house of thy servant, that it may '),
                hg('continue for ever before thee', 'c-continue-forever'),
                t(': for thou, Lord God, hast spoken it: and with thy blessing let the house of thy servant be blessed for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-continue-forever',
          html:
            'David asks for what God has already promised. Not as doubt, but as faith — asking God to seal with His blessing what He has already spoken. There is a faithfulness in this: God has made a promise, and David brings it back to Him in prayer, asking Him to make it so. Prayer is not about informing God of what we need. It is about standing with Him in what He has already said He will do.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 28,
              spans: [
                t('And David perceived that the Lord had established him king over Israel, and that he had exalted his kingdom for his people Israel&apos;s sake.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And David took him concubines and wives out of Jerusalem: and there were yet sons and daughters born to David.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'The chapter closes with David&apos;s recognition — he has "perceived" that the Lord established him. The promise is now his certainty. And the ordinary details follow: David takes wives, has children. The covenant is not a mystical abstraction. It is incarnate in generations. It is flesh and blood — seed, as the Hebrew said. The promise will live in David&apos;s sons.',
        },
        {
          kind: 'carry',
          html:
            'You may be in a moment where what God has promised seems too large to hold. Too generous. Too unlikely. David&apos;s answer was not to rationalize it away. He went and sat before the Lord. He acknowledged his own smallness. He confessed God&apos;s greatness. He reminded himself of God&apos;s faithfulness with others. And then he asked God to do what He had already said He would do. The Davidic Covenant stands. Generations later, a young peasant girl in Nazareth will be told: "The Lord God shall give unto him the throne of his father David." The promise spoken in this tent to a shepherd-king is still being fulfilled. If God keeps a covenant across centuries, He can keep a covenant with you.',
        },
        {
          kind: 'reflection',
          id: 'covenant-forever',
          prompt:
            'What promise has God made in Scripture or in your own life that still seems almost too good to be true? What would it look like to bring that promise back to God in prayer, asking Him to seal it, as David did?',
        },
      ],
    },
  ],
};
