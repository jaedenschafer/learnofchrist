import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 17 — The Davidic Covenant (Parallel to 2 Samuel 7)
 *
 * The Chronicler's version of the Davidic Covenant. David desires to build
 * a house for God; God tells him that instead, God will build a house for him—
 * an eternal dynasty. The Chronicler omits the conditional clause about iniquity,
 * emphasizing the pure, unconditional promise of an eternal throne. "I will be
 * his father, and he shall be my son," spoken first of Solomon, but ultimately
 * fulfilled in Christ, the eternal King whose kingdom shall never end.
 */
export const CHRONICLES_1_17: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 17,

  estimatedMinutes: { 5: 6, 10: 16, 15: 18 },
  intros: [
    'David has brought the ark of God to Jerusalem. The kingdom is at peace. The enemies of Israel are subdued. Now David sits in his house of cedar and looks around: his dwelling is magnificent, permanent, secure. But the ark of God dwells in a tent. The incongruity troubles him. How can the king live in cedar while the God of Israel dwells in curtains? He calls the prophet Nathan and says, "See now, I dwell in an house of cedar, but the ark of God dwelleth within curtains." And Nathan, hearing the desire of a grateful king, says simply, "Go, do all that is in thine heart; for the Lord is with thee."',
    'But that night the word of the Lord comes to Nathan with a different answer. God does not say David&apos;s desire is wrong. God says it is unnecessary. "I have not dwelt in an house since the day that I brought up Israel." For all the generations of wilderness, judges, and battles, God has walked in a tent, dwelling with His people wherever they go. And now, God says something that will echo through all of Scripture: "I will build thee an house." Not a building—a dynasty. An eternal throne. And one of David&apos;s descendants, sitting on that throne forever, will be called the Son of God.',
  ],

  opener: {
    matchArtist: /tissot|rembrandt|allston/i,
    matchTitle: /david|covenant|nathan/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Chronicles 17',
    quote:
      'David wanted to build God a house, but God said: "I will build you a house. Your throne shall be established for ever." The Davidic Covenant—a promise of an eternal king, fulfilled in Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 17 · Study Guide',
  },

  sections: [
    /* ─── 1 Chronicles 17:1–3 — David's Desire to Build ──────────────────── */
    {
      ref: '1 Chronicles 17:1–3',
      title: 'David&apos;s Desire to Build a House',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 1,
              spans: [
                t('Now it came to pass, as David sat in his house, that David said to Nathan the prophet, Behold, I dwell in an '),
                hg('house of cedars', 'c-cedars'),
                t(', but the '),
                hy('ark of the covenant of the Lord', 'c-ark-covenant'),
                t(' remaineth under curtains.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cedars',
          html:
            'Cedar—the wood of the wealthy and the enduring. David&apos;s house is not merely a shelter; it is a statement. Permanent. Valuable. Secure. And yet the most sacred object in Israel, the very seat of God&apos;s presence, dwells in cloth and rope.',
        },
        {
          kind: 'commentary',
          id: 'c-ark-covenant',
          html:
            'The "ark of the covenant"—the chest that holds the two tablets of the law, the visible sign of God&apos;s covenant with Israel. It is under curtains. A tent. Temporary. The contrast is stark. How can the king honor himself with cedar while the covenant remains in cloth?',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 2,
              spans: [
                t('Then Nathan said unto David, Do all that is in thine '),
                hg('heart', 'c-heart-nathan'),
                t('; for God is with thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-heart-nathan',
          html:
            'Nathan the prophet hears David&apos;s thought and blesses it without hesitation. "Do all that is in your heart. God is with you." A pastoral affirmation—a man of God affirming what seems like a good man&apos;s good intention. But Nathan, for all his faithfulness, has not asked the Lord. He has only answered David.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 3,
              spans: [
                t('And it came to pass the same night, that the word of God came to Nathan, saying,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'That same night. Not the next morning. The word comes while Nathan sleeps, correcting what he spoke while awake. God reorients His prophet—and through him, will redirect His king.',
        },
      ],
    },

    /* ─── 1 Chronicles 17:4–6 — The Word of the Lord in the Night ──────── */
    {
      ref: '1 Chronicles 17:4–6',
      title: 'The Word of the Lord in the Night',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 4,
              spans: [
                t('Go and tell David my servant, Thus saith the Lord, Thou shalt not build me an house to dwell in:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('For I have not dwelt in an house since the day that I brought up Israel unto this day; but have gone from '),
                hy('tent to tent', 'c-tent-to-tent'),
                t(', and from one '),
                hy('tabernacle', 'c-tabernacle-word'),
                t(' to another.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Wheresoever I have walked with all Israel, spake I a word to any of the judges of Israel, whom I commanded to feed my people, saying, Why have ye not built me an house of cedars?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tent-to-tent',
          html:
            'From tent to tent. God moves. He is not bound to a place. He follows His people into the wilderness, from one encampment to another, dwelling where they dwell. The point is not that God has lacked a house. The point is that He has never required one.',
        },
        {
          kind: 'hebrew',
          id: 'c-tabernacle-word',
          title: 'Mishkan — "Tabernacle," the Moving Tent',
          script: 'מִשְׁכַּן',
          translit: '<strong>Mishkan</strong> · dwelling place; tent of meeting',
          description:
            'The mishkan was the portable tent of meeting, the sacred space where God met with Israel. It moved with them from Sinai through the wilderness. It was never meant to be permanent or grandiose. When God says "I have walked in a tabernacle," He is affirming that His presence has always been mobile, always intimate, always with His people—not waiting for a temple to begin His communion with them.',
        },
        {
          kind: 'commentary',
          html:
            'God does not rebuke David for the thought. He clarifies His nature. In all the generations He has led Israel, from Egypt through the wilderness and into the land, He has asked only one thing: that the judges feed and shepherd His people. A house of cedar? That was never the requirement. The requirement is faithfulness to the people.',
        },
      ],
    },

    /* ─── 1 Chronicles 17:7–10 — God Will Build David a House ────────── */
    {
      ref: '1 Chronicles 17:7–10',
      title: 'The Covenant: God Will Build You a House',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 7,
              spans: [
                t('Now therefore thus shalt thou say unto my servant David, Thus saith the Lord of hosts, I took thee from the '),
                hg('sheepcote', 'c-sheepcote'),
                t(', even from following the sheep, that thou shouldest be '),
                hg('ruler over my people Israel', 'c-ruler'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sheepcote',
          html:
            'The sheepcote. David&apos;s origin point. Not born to kingship, not groomed to power, but taken from the fields where he watched sheep. Every throne David sits upon, he has been given. He did not achieve it. He was chosen for it.',
        },
        {
          kind: 'commentary',
          id: 'c-ruler',
          html:
            'From shepherd of sheep to ruler of Israel—the arc of David&apos;s life is being recounted here, not as achievement but as election. "I took you." This is God saying: I chose you. I raised you. I made you king. Everything you have is gift.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 8,
              spans: [
                t('And I have been with thee '),
                hy('whithersoever thou hast walked', 'c-presence'),
                t(', and have '),
                hg('cut off all thine enemies from before thee', 'c-enemies'),
                t(', and have made thee a '),
                hg('name like the name of the great men that are in the earth', 'c-great-name'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-presence',
          html:
            'God&apos;s presence is the witness. "I have been with you wherever you have walked." Not your cleverness. Not your courage. God with you. That is what made the difference. That is the testimony God is giving David.',
        },
        {
          kind: 'commentary',
          id: 'c-enemies',
          html:
            'David did not vanquish his enemies by his own strength. God cut them off from before him. David is learning the hard truth of humility: he did not conquer. God conquered for him.',
        },
        {
          kind: 'commentary',
          id: 'c-great-name',
          html:
            'Your name is great on earth. But I made it so. Every accolade, every memorial, every story told of David—God made it. David&apos;s fame is not his own. It is God&apos;s gift.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 9,
              spans: [
                t('Also I will '),
                hg('ordain a place for my people Israel', 'c-place-israel'),
                t(', and will '),
                hg('plant them', 'c-plant'),
                t(', and they shall dwell in their place, and shall '),
                hg('be moved no more', 'c-moved-no-more'),
                t('; neither shall the children of wickedness waste them any more, as at the beginning,'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And since the time that I commanded judges to be over my people Israel. And I will '),
                hp('subdue all thine enemies', 'c-subdue'),
                t('. Furthermore I tell thee that the Lord will '),
                hp('build thee an house', 'c-house-david'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-place-israel',
          html:
            'God will ordain a place—a land, a home. Israel has been wandering since Egypt. Forty years in the wilderness, then judges, then battles. Now, stability. A place of their own. Fixed. Established.',
        },
        {
          kind: 'commentary',
          id: 'c-plant',
          html:
            'Plant them. As you plant a seed and it grows, as it takes root and bears fruit, so God will plant Israel. They will not be transient. They will grow deep into the land that is theirs.',
        },
        {
          kind: 'commentary',
          id: 'c-moved-no-more',
          html:
            'Moved no more. The promise of rest. For generations, Israel has been unsettled. Now—a place they will not be uprooted from. A stability that endures.',
        },
        {
          kind: 'commentary',
          id: 'c-subdue',
          html:
            'I will subdue all your enemies. God promises to do what David cannot. The work of establishing the kingdom belongs to God. David will not fight alone.',
        },
        {
          kind: 'commentary',
          id: 'c-house-david',
          html:
            'Here it is. The reversal. "The Lord will build thee an house." Not a building. A <em>house</em>—a dynasty. A line of succession. Generations. David asked to build a house of stone for God. God offers to build a house of flesh, of blood, of generations for David.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-bayit',
          title: 'Bayit — "House," Both Temple and Dynasty',
          script: 'בַּיִת',
          translit: '<strong>Bayit</strong> · house; household; dynasty',
          description:
            'The Hebrew word <em>bayit</em> means a physical house—a building. But it also means a household, a family, a dynasty. When God says "I will build you a house," the word carries double meaning that English cannot quite hold. David will have descendants. A line will flow from him. One of those descendants will sit on a throne forever. The wordplay is intentional: David wanted to build a <em>bayit</em> (temple) for God; God responds by building a <em>bayit</em> (dynasty) for David.',
        },
      ],
    },

    /* ─── 1 Chronicles 17:11–14 — The Eternal Throne ─────────────────── */
    {
      ref: '1 Chronicles 17:11–14',
      title: 'The Eternal Throne',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 11,
              spans: [
                t('And it shall come to pass, when thy days be expired that thou must go to be with thy fathers, that I will '),
                hg('raise up thy seed after thee', 'c-seed'),
                t(', which shall be of thy sons; and I will '),
                hg('establish his kingdom', 'c-establish-kingdom'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-seed',
          html:
            'When your days are fulfilled and you must sleep with your fathers. Death is not the end of the promise. After David, his seed—his descendants—will continue. One of his sons will inherit the throne.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-zera',
          title: 'Zera — "Seed," the Line That Continues',
          script: 'זֶרַע',
          translit: '<strong>Zera</strong> · seed; offspring; descendants',
          description:
            'The word <em>zera</em> means seed—the thing you plant that grows and multiplies. It carries the sense of life flowing forward, of continuity, of a line that will not end. God says: "I will raise up your seed." Not just one son, but a succession. A dynasty. One of your descendants will sit on the throne.',
        },
        {
          kind: 'commentary',
          id: 'c-establish-kingdom',
          html:
            'I will establish his kingdom. Not that his kingdom will be uncertain or temporary. God Himself will make it firm, will make it stand.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 12,
              spans: [
                t('He shall build me an house, and I will '),
                hp('stablish his throne for ever', 'c-throne-forever'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-throne-forever',
          html:
            'The word comes full circle. David wanted to build a house for God&apos;s name. God says: your son will do that. Solomon will build the temple in Jerusalem—the physical house of cedar that David could not build. But more than that—I will establish the throne of his kingdom forever. Not just Solomon&apos;s lifetime. Not just a dynasty that lasts centuries. Forever. For all eternity, one of your descendants will sit on a throne that shall not be shaken.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 13,
              spans: [
                t('I will be his '),
                hp('father', 'christ-father'),
                t(', and he shall be my '),
                hp('son', 'christ-son'),
                t(': and I will not take my mercy away from him, as I took it from him that was before thee:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('But I will settle him in mine house and in my kingdom for ever: and his throne shall be established for evermore.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'christ-father',
          html:
            '"I will be his father." The most intimate covenant language. A father-son relationship between God and the king. This word is spoken of every Davidic king who comes after David—the bond between God and Israel&apos;s rulers is a father-child bond. But when this promise is ultimately fulfilled, when the one comes who sits on David&apos;s throne forever, it will be spoken of Him in a way that transcends all earthly fathers.',
        },
        {
          kind: 'commentary',
          id: 'christ-son',
          html:
            '"He shall be my son." Not metaphorically, as all Israel is God&apos;s son (Exodus 4:22). But a son who sits on the throne of David. A particular descendant. When the Hebrew people read this, they understand it as a covenant promise pointing to a coming king—one who will fulfill what no human king can fulfill alone: an eternal throne.',
        },
        {
          kind: 'christ',
          id: 'father-son-christ',
          title: 'Christ Connection — "I Will Be His Father"',
          html:
            'When the word of God comes to Mary in Nazareth, the angel speaks this exact covenant promise: "The Lord God shall give unto him the throne of his father David: And he shall reign over the house of Jacob for ever; and of his kingdom there shall be no end" (Luke 1:32–33). This is the Davidic promise spoken to a young woman about her son. But the promise does not stop there. The epistle to the Hebrews quotes this very verse directly, applying it to Jesus: "For to which of the angels said he at any time, Thou art my Son, this day have I begotten thee?… And again, I will be to him a Father, and he shall be to me a Son" (Hebrews 1:5, quoting 2 Samuel 7 and Psalm 2). The word spoken to David in the tent in Jerusalem is the word spoken to Mary in the village of Nazareth. The promise is Christ.',
        },
        {
          kind: 'commentary',
          html:
            'Notice what the Chronicler does here: he omits the condition that appears in 2 Samuel 7—"If he commit iniquity, I will chasten him with the rod of men" (2 Samuel 7:14). The Chronicler emphasizes only the unconditional promise. My mercy shall not be taken from him. I will settle him in my house and kingdom forever. The throne shall be established for evermore. This is pure covenant, without condition. And it is this unconditional promise that speaks to Christ—the one who will rule not by virtue of his obedience, but because He is the very Son of God.',
        },
      ],
    },

    /* ─── 1 Chronicles 17:15–17 — Nathan Reports to David ────────────── */
    {
      ref: '1 Chronicles 17:15–17',
      title: 'Nathan Reports the Covenant to David',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 15,
              spans: [
                t('According to all these words, and according to all this vision, so did Nathan speak unto David.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Nathan delivers the word exactly as he received it. Not his own interpretation, not his own wisdom—but the word the Lord has spoken. This is the faithfulness of a prophet.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 16,
              spans: [
                t('And when king David came and sat before the Lord, he said, '),
                hg('Who am I, O Lord God', 'c-who-am-i'),
                t(', and what is mine house, that thou hast brought me hitherto?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-who-am-i',
          html:
            'David goes before the Lord and sits in His presence. His first question is not "How grateful should I be?" or "What honor is this?" but "Who am I?" It is the question of grace. David has just been told he will have an eternal throne, and his first response is bewilderment at his own smallness. Who is he, that God would do this?',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 17,
              spans: [
                t('And yet this was a small thing in thine eyes, O God; for thou hast also spoken of thy servant&apos;s house for a great while to come, and hast regarded me according to the estate of a man of high degree, O Lord God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'David says: "This was a small thing in Your eyes." God has already done so much—raised David from shepherd to king, given him rest from his enemies, made his name great. And now God speaks of generations yet unborn. Of a line that will not end. David asks a question that has no answer: this exceeds all human understanding. This is what grace does.',
        },
      ],
    },

    /* ─── 1 Chronicles 17:18–21 — David's Prayer: The Greatness of God ── */
    {
      ref: '1 Chronicles 17:18–21',
      title: 'David&apos;s Prayer: What Is God?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 18,
              spans: [
                t('What can David say more to thee? for thou knowest thy servant. O Lord, for thy servant&apos;s sake, and according to thine own heart, hast thou done all this greatness, in making known all these great things.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'David stops trying to understand his own smallness and looks instead at God&apos;s nature. "You know your servant." David has no words adequate to what God has done. But he has recognized the truth: God has done this not because David deserves it, but because of God&apos;s own heart, God&apos;s own faithfulness.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 19,
              spans: [
                t('O Lord, '),
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
            'David shifts now from asking about himself to asking about God. He stops trying to understand what he has been promised and instead contemplates the One who promised it. "There is none like you." This is the turn toward worship. Not gratitude for what he has received, but awe at who God is.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 20,
              spans: [
                t('And what one nation in the earth is like thy people Israel, whom God went to '),
                hy('redeem', 'c-redeem'),
                t(' to be a people for himself, and to make thee a name of greatness and terribleness, by driving out nations from before thy people, whom thou redeemedst out of Egypt?'),
              ],
            },
            {
              number: 21,
              spans: [
                t('So thy people Israel is made thine own people for ever; and thou, Lord, art become their God.'),
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
            'The verb <em>ga&apos;al</em> means to redeem—to buy back something that had been lost or sold. David uses it of God&apos;s redemption of Israel from Egypt. God bought Israel back from slavery. He paid a price in the plagues, in the parting of the Red Sea. He made them His own people. It is a word rooted in covenant loyalty, in familial obligation—God acts toward Israel as a kinsman-redeemer acts, with the commitment of family.',
        },
        {
          kind: 'commentary',
          html:
            'David now brings his own prayer into the world he has just contemplated. He has looked at God&apos;s covenant with Israel—made them His people forever. And he prays this same covenant into his own house: "You have made Israel Your people forever. Now establish the word you have spoken concerning my seed, concerning my house."',
        },
      ],
    },

    /* ─── 1 Chronicles 17:22–27 — David's Petition ─────────────────────── */
    {
      ref: '1 Chronicles 17:22–27',
      title: 'David&apos;s Petition: Let the House Be Blessed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 22,
              spans: [
                t('Therefore now, Lord, let the thing that thou hast spoken concerning thy servant and concerning his house be '),
                hg('established for ever', 'c-established-forever-prayer'),
                t(', and do as thou hast said.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-established-forever-prayer',
          html:
            'David asks for what God has already promised. Not because he doubts, but because he believes. He brings the promise back to God in prayer, asking Him to seal with His own word what He has already spoken. This is the shape of faith: to stand with God in what He has said.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 23,
              spans: [
                t('Let it even be established, that thy name may be magnified for ever, saying, The Lord of hosts is the God of Israel, even a God to Israel: and let the house of David thy servant be established before thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'David&apos;s petition is not ultimately for himself. It is that God&apos;s name be magnified. He wants the promise to hold so that all the earth will see: there is a God who keeps covenant. There is a Lord of hosts who stands by His word. This is what it means to be blessed—not to receive favor for yourself alone, but to have your life become a living testimony to God&apos;s faithfulness.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 24,
              spans: [
                t('For thou, O my God, hast told thy servant that thou wilt build him an house: therefore thy servant hath found in his heart to pray before thee.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And now, Lord, thou art God, and hast promised this goodness unto thy servant:'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Now therefore let it please thee to bless the house of thy servant, that it may be before thee for ever: for thou blessest, O Lord, and it shall be blessed for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'David has found in his heart to pray. God has spoken, and David brings that word back to God in prayer. "You have promised this goodness. Now let it please you to bless my house, that it may be before you forever." This is not doubt. This is standing with God in His own promise. And the closing is exquisite: "For you bless, O Lord, and it shall be blessed forever." Whatever God blesses, stands. The blessing of God is eternal.',
        },

        {
          kind: 'carry',
          html:
            'David&apos;s prayer moves through a pattern we might follow whenever we are confronted with God&apos;s mercy: (1) "Who am I?"—recognition of our own smallness; (2) "You are great"—recognition of God&apos;s incomparable nature; (3) "You have always kept your covenant"—remembrance of God&apos;s faithfulness in history; (4) "Establish your word in me"—the request that flows from those recognitions. It is the shape of intercession. When you come before God with a request, move through David&apos;s prayer. First see yourself truly. Then see God truly. Then remember His covenant with others. Then ask Him to keep His word with you.',
        },

        {
          kind: 'reflection',
          id: 'davidic-covenant-prayer',
          prompt:
            'Where in your own life do you sense God making a promise that seems too much, or too far-reaching to believe? What would it look like to sit before God, as David did, and ask not "How can I believe this?" but rather "Who are you, that you would do this?"',
        },
      ],
    },
  ],
};
