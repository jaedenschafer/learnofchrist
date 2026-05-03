import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 41 — Fear Not; I Am With You
 *
 * "Fear thou not; for I am with thee: be not dismayed; for I am thy God:
 * I will strengthen thee; yea, I will help thee; yea, I will uphold thee
 * with the right hand of my righteousness." The chapter speaks to the exiled
 * people. "I am the first, and I am the last." The God who stands at the
 * beginning stands also at the end. He has not abandoned His people. He will
 * help them. He will strengthen them. He will hold them up with His
 * righteous right hand.
 */
export const ISAIAH_41: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 41,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'The God of comfort comes to the exiled people with a message of reassurance. "Fear thou not." This simple imperative opens the chapter. Fear is not the proper response to exile, loss, or uncertainty. What should the response be? "I am with thee." The presence of God makes fear inappropriate. "Be not dismayed." Dismay assumes abandonment. But God says: I will strengthen you. I will help you. I will uphold you with the right hand of My righteousness. This is the promise: not merely that God exists, but that He is present. He is at work. He is sustaining.',
  ],

  sections: [
    {
      ref: 'Isaiah 41:1–20',
      title: 'Fear Not; the Lord Holds You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            plain(1, 'Keep silence before me, O islands; and let the people renew their strength: let them come near; then let them speak: let us come near together to judgment.'),
            plain(2, 'Who raised up the righteous man from the east, called him to his foot, gave the nations before him, and made him rule over kings? he gave them as the dust to his sword, and as driven stubble to his bow.'),
            plain(3, 'He pursued them, and passed safely; even by the way that he had not gone with his feet.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-righteousness-hand',
          html:
            '<p>The righteous are grasped by God&apos;s right hand. Fear not; I am with you. From sunrise to sunset, He holds you.</p>',
        },
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            plain(4, 'Who hath wrought and done it, calling the generations from the beginning? I the Lord, the first and the last; I am he.'),
            plain(5, 'The isles saw it, and feared; the ends of the earth were afraid, drew near, and came.'),
            plain(6, 'They helped every one his neighbour; and every one said to his brother, Be of good courage.'),
            plain(7, 'So the carpenter encouraged the goldsmith, and he that smootheth with the hammer him that smote the anvil, saying, It is ready for the soldering: and he fastened it with nails, that it should not be moved.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah41-courtroom',
          html:
            'God calls the islands and nations to silence before Him. The "righteous man from the east" (Cyrus) is raised up, and nations fall before him. But notice: God does not assert power through force alone. This is a courtroom scene. "Keep silence before me...let us come near together to judgment." Let the evidence be heard. Let truth settle it.',
        },
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            plain(8, 'But thou, Israel, art my servant, Jacob whom I have chosen, the seed of Abraham my friend.'),
            plain(9, 'Thou whom I have taken from the ends of the earth, and called thee from the chief men thereof, and said unto thee, Thou art my servant; I have chosen thee, and not cast thee away.'),
            plain(10, 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-righteousness-hand-2',
          html:
            '<p>Fear not, for I am with you. I will strengthen and help you. My righteous right hand upholds you.</p>',
        },
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            plain(11, 'Behold, all they that were incensed against thee shall be ashamed and confounded: they shall be as nothing; and they that strive with thee shall perish.'),
            plain(12, 'Thou shalt seek them, and shalt not find them, even them that contended with thee: they that war against thee shall be as nothing, and as a thing of nought.'),
            plain(13, 'For I the Lord thy God will hold thy right hand, saying unto thee, Fear not; I will help thee.'),
            plain(14, 'Fear not, thou worm Jacob, and ye men of Israel; I will help thee, saith the Lord, and thy redeemer is the Holy One of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah41-worm-jacob',
          html:
            'The shift is stark. God turns from the courtroom to Israel with tenderness: "Fear not, thou worm Jacob." Israel is small, insignificant, but chosen. The word "worm" is not contempt—it&apos;s an acknowledgment of littleness coupled with promise. God sees Israel&apos;s weakness and says: I will help you. Your redeemer is the Holy One of Israel.',
        },
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            plain(15, 'Behold, I will make thee a new sharp threshing instrument having teeth: thou shalt thresh the mountains, and beat them small, and shalt make the hills as chaff.'),
            plain(16, 'Thou shalt fan them, and the wind shall carry them away, and the whirlwind shall scatter them: and thou shalt rejoice in the Lord, and shalt glory in the Holy One of Israel.'),
            plain(17, 'When the poor and needy seek water, and there is none, and their tongue faileth for thirst, I the Lord will hear them, I the God of Israel will not forsake them.'),
            plain(18, 'I will open rivers in the high places, and fountains in the midst of the valleys: I will make the wilderness a pool of water, and the dry land springs of water.'),
            plain(19, 'I will plant in the wilderness the cedar, the shittah tree, and the myrtle, and the oil tree; I will set in the desert the fir tree, and the pine, and the box tree together:'),
            plain(20, 'That they may see, and know, and consider, and understand together, that the hand of the Lord hath done this, and the Holy One of Israel hath created it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah41-fear',
          html:
            'The opening word is direct and repeated: "Fear thou not." Not once, but throughout the passage this refrain echoes. Fear is treated as a choice that can be rejected. The reason to reject fear is explicit: "I am with thee...I am thy God." The presence of God is the antidote to fear. Not because circumstances will be easy, but because God is present in those circumstances.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah41-yira',
          title: 'Yira — "Fear" (Dread, Trembling)',
          script: 'יִרְאָה',
          translit: '<strong>Yira</strong> · fear, dread, trembling; the response to danger or separation from God',
          description:
            'The Hebrew yira refers to the trembling fear that comes from perceived separation or danger. When God says "fear not," He is not denying that danger exists. He is saying: do not let fear rule you, because I am present. Do not let danger separate you from trust in Me.',
        },
        {
          kind: 'commentary',
          id: 'isaiah41-righteous',
          html:
            'The passage describes a righteous man raised up from the east—generally understood to be Cyrus the Persian king, who will liberate the exiles and allow them to return home. But the point is not about Cyrus. The point is that God raises up leaders according to His purposes. "Who hath wrought and done it, calling the generations from the beginning? I the Lord, the first and the last." History is in God&apos;s hands. Past and future alike are known to Him.',
        },
        {
          kind: 'commentary',
          id: 'isaiah41-servant',
          html:
            'Then comes the turn to Israel: "Thou, Israel, art my servant, Jacob whom I have chosen." Not Israel is being judged or abandoned. Israel is God&apos;s servant, God&apos;s chosen one. "Thou art my servant; I have chosen thee, and not cast thee away." This is the fundamental promise. Even in exile, Israel has not been cast away. Israel remains God&apos;s servant, God&apos;s chosen one.',
        },
        {
          kind: 'christ',
          id: 'isaiah41-christ-first-last',
          title: 'Christ Connection — The First and the Last',
          html:
            'God declares: "I am the first and the last." In Revelation 1:17, the risen Christ says to John: "I am the first and the last." Christ is identifying Himself with the God of Isaiah. He is the eternal one, the beginning and the end, the one who holds all times in His hands. Those who put their faith in Christ are entrusting themselves to the One who transcends time and knows all things.',
        },
        {
          kind: 'carry',
          html:
            'Every reader faces situations where fear seems justified—danger, loss, uncertainty, powerlessness. The word of God in this passage is: fear not. Not because the difficulty is not real, but because God is with you. He will strengthen you. He will help you. He will uphold you. The question for the reader is: will you choose to believe that presence? Will you let that presence displace fear? Will you let it reshape your response to difficulty?',
        },
        {
          kind: 'reflection',
          id: 'isaiah41-fear-not',
          prompt: 'What fear has a grip on you? What would change if you could truly believe that God is with you and will hold you up? How can you practice replacing fear with trust in His presence?',
        },
      ],
    },

    {
      ref: 'Isaiah 41:21–29',
      title: 'The Idols Are Nothing; God Is All',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            plain(21, 'Produce your cause, saith the Lord; bring forth your strong reasons, saith the King of Jacob.'),
            plain(22, 'Let them bring them forth, and shew us what shall happen: let them shew the former things, what they be; that we may consider them, and know the latter end of them; or declare us things for to come.'),
            plain(23, 'Shew the things that are to come hereafter, that we may know that ye are gods: yea, do good, or do evil, that we may be dismayed, and behold it together.'),
            plain(24, 'Behold, ye are of nothing, and your work of nought: an abomination is he that chooseth you.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa41-servant-strength',
          html:
            'From the challenge comes the answer. The Lord speaks; His servant rises to answer the call.',
        },
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            plain(25, 'I have raised up one from the north, and he shall come: from the rising of the sun shall he call upon my name: and he shall come upon princes as upon morter, and as the potter treadeth clay.'),
            plain(26, 'Who hath declared from the beginning, that we may know? and beforetime, that we may say, He is righteous? yea, there is none that sheweth, yea, there is none that declareth, yea, there is none that heareth your words.'),
            plain(27, 'The first shall say to Zion, Behold, behold them: and I will give to Jerusalem one that bringeth good tidings.'),
            plain(28, 'For I beheld, and there was no man; even among them, and there was no counseller, that, when I asked of them, could answer a word.'),
            plain(29, 'Behold, they are all vanity; their works are nothing: their molten images are wind and confusion.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah41-idols-challenge',
          html:
            'God challenges the idols and those who trust in them: "Produce your cause...bring forth your strong reasons." If the idols are gods, let them declare the future. Let them show what will come to pass. Let them do good or evil. The idols cannot speak. They cannot predict. They cannot act. They are nothing but wind and confusion.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah41-tohu',
          title: 'Tohu — "Confusion" (Emptiness, Void)',
          script: 'תֹהוּ',
          translit: '<strong>Tohu</strong> · confusion, emptiness, void; the state of chaos or nothingness',
          description:
            'The word tohu is the same word used in Genesis 1:2 for the primordial chaos before God created order. When Isaiah says the idols are "wind and confusion," he is saying they represent a return to emptiness, to the chaos that existed before creation. They have no creative power. They have no substance.',
        },
        {
          kind: 'commentary',
          id: 'isaiah41-good-news',
          html:
            'By contrast, God declares: "I will give to Jerusalem one that bringeth good tidings." Who is this one? In the New Testament, Jesus is understood as the one who brings good tidings—the gospel. But even in Isaiah&apos;s time, the point was that God would raise up people to announce His liberation of the exiles. God speaks. God announces. God brings news. The idols are silent.',
        },
        {
          kind: 'christ',
          id: 'isaiah41-christ-gospel',
          title: 'Christ Connection — The Gospel',
          html:
            'Christ is "the gospel"—the good news made flesh. He is the announcement that God has not abandoned His people. He is the declaration that salvation has come. Where the idols are mute, Christ speaks. Where the idols are powerless, Christ acts. Where the idols promise nothing, Christ offers redemption.',
        },
        {
          kind: 'carry',
          html:
            'The lesson for every reader is clear: put not your trust in things that cannot speak, cannot act, cannot save. Trust in the living God who declares the future, who acts according to His purposes, who speaks truth. The idols of the modern world are different but no more powerful—possessions, status, power, people. None of these can ultimately save. Only God can.',
        },
        {
          kind: 'reflection',
          id: 'isaiah41-idols-modern',
          prompt: 'What modern "idols" are you trusting in for security or meaning? What would it look like to abandon those for trust in the living God? What good news of God do you need to hear and believe?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Fear thou not; for I am with thee...I will strengthen thee; yea, I will help thee...I am the first, and I am the last.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 41 · Study Guide',
  },

  hasHebrew: true,
};
