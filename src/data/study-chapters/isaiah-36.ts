import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 36 — The Mouthings of the Enemy
 *
 * Sennacherib&apos;s general, the Rabshakeh, threatens Hezekiah and Jerusalem
 * with words of terror and mockery. He boasts of Assyrian power and asks:
 * "What confidence is this wherein thou trustest?" He mocks the Lord and
 * His ability to save. But the people of Jerusalem are told: "Say not a word
 * unto him." They listen to the enemy&apos;s taunts in silence, grieving but
 * unshaken, knowing that their God fights for them.
 */
export const ISAIAH_36: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 36,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'The narrative turns historical. Sennacherib has invaded Judah and sent his general, the Rabshakeh, to demand surrender. The Rabshakeh stands outside the walls of Jerusalem and speaks words of fear, mockery, and pride. He boasts of Assyrian conquests. He challenges the God of Israel to deliver His people. He attempts to divide the people from their king, to sow doubt about God&apos;s ability to save. But Hezekiah tells the people to listen in silence. He will not respond to the enemy&apos;s taunts. He will wait for God to act. This chapter is about the power of words—both the destructive words of the enemy and the silencing power of faith.',
  ],

  sections: [
    {
      ref: 'Isaiah 36:1–22',
      title: 'The Rabshakeh&apos;s Taunts and Hezekiah&apos;s Silence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            plain(1, 'Now it came to pass in the fourteenth year of king Hezekiah, that Sennacherib king of Assyria came up against all the defenced cities of Judah, and took them.'),
            plain(2, 'And the king of Assyria sent Rabshakeh from Lachish to Jerusalem unto king Hezekiah with a great army. And he stood by the conduit of the upper pool in the highway of the fuller&apos;s field.'),
            plain(3, 'Then came forth unto him Eliakim, Hilkiah&apos;s son, which was over the house, and Shebna the scribe, and Joah, Asaph&apos;s son, the recorder.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa36-split-1',
          html:
            'Three men emerge from the city: Eliakim, Shebna, and Joah. They are the gatekeepers between the enemy and the king. Rabshakeh stands outside the walls, declaring himself and his great king. The scene is set: confrontation between empires.[res:sefaria-isaiah-36]',
        },
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            plain(4, 'And Rabshakeh said unto them, Say ye now to Hezekiah, Thus saith the great king, the king of Assyria, What confidence is this wherein thou trustest?'),
            plain(5, 'I say, sayest thou, (but they are but vain words,) I have counsel and strength for the war: now on whom dost thou trust, that thou rebellest against me?'),
            plain(6, 'Lo, thou trustest in the staff of this broken reed, even upon Egypt; on which if a man lean, it will go into his hand, and pierce it: so is Pharaoh king of Egypt to all that trust on him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-assyrian-taunt',
          html:
            '<p>Sennacherib&apos;s field commander mocks Jerusalem&apos;s God. Watch what happens when a kingdom trusts the Lord.[res:british-museum-sennacherib-prism]</p>',
        },
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            plain(7, 'But if thou sayest to me, We trust in the Lord our God: is it not he, whose high places and whose altars Hezekiah hath taken away, and hath said to Judah and Jerusalem, Ye shall worship before this altar?'),
            plain(8, 'Now therefore give pledges, I pray thee, to my lord the king of Assyria, and I will give thee two thousand horses, if thou be able on thy part to set riders upon them.'),
            plain(9, 'How then wilt thou turn away the face of one of the least captains of my master, seeing thou trustest on Egypt for chariots and for horsemen?'),
            plain(10, 'Am I now come up without the Lord against this land to destroy it? the Lord said to me, Go up against this land, and destroy it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa36-split-2',
          html:
            'Rabshakeh&apos;s mockery deepens. He claims to act at God&apos;s command. He boasts that he can defeat even one of Assyria&apos;s minor captains, let alone Judah. His logic is relentless. Yet the greatest confidence is often the prelude to the greatest fall.[res:iaa-hezekiah-tunnel-bulla]',
        },
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            plain(11, 'Then said Eliakim and Shebna and Joah unto Rabshakeh, Speak, I pray thee, unto thy servants in the Syrian language; for we understand it: and talk not with us in the Jews&apos; language in the ears of the people that are on the wall.'),
            plain(12, 'But Rabshakeh said, Hath my master sent me to thy master, and to thee, to speak these words? hath he not sent me to speak unto the people that sit on the wall, that they may eat their own dung, and drink their own piss with you?'),
            plain(13, 'Then Rabshakeh stood, and cried with a loud voice in the Jews&apos; language, and spake, saying, Hear the words of the great king, the king of Assyria:'),
            plain(14, 'Thus saith the king, Let not Hezekiah deceive you: for he shall not be able to deliver you out of his hand:'),
            plain(15, 'Neither let Hezekiah make you trust in the Lord, saying, The Lord will surely deliver us, and this city shall not be delivered into the hand of the king of Assyria.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa36-split-3',
          html:
            'Rabshakeh switches to Hebrew and addresses the people directly, bypassing their king. He wants to divide them, to sow doubt. He tells them not to believe in Hezekiah&apos;s faith. He tells them not to trust in God. Yet the loudest voice is not always the truest one.',
        },
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            plain(16, 'Hearken not to Hezekiah: for thus saith the king of Assyria, Make an agreement with me by a present, and come out to me, and then eat ye every one of his own vine, and every one of his fig tree, and drink ye every one the waters of his own cistern;'),
            plain(17, 'Until I come and take you away to a land like your own land, a land of corn and wine, a land of bread and vineyards.'),
            plain(18, 'Beware lest Hezekiah persuade you, saying, The Lord will deliver us. Hath any of the gods of the nations delivered his land out of the hand of the king of Assyria?'),
            plain(19, 'Where are the gods of Hamath and Arpad? where are the gods of Sepharvaim? and have they delivered Samaria out of mine hand?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa36-split-4',
          html:
            'Rabshakeh rehearses his conquest of the nations. He asks: what god has stood against Assyria? His argument appears unassailable. Yet he has made a fatal mistake: he assumes the God of Israel is like the other gods, as powerless before Assyrian might. He does not understand whom he is mocking.',
        },
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            plain(20, 'Who are they among all the gods of these lands, that have delivered their land out of the hand of the king of Assyria, that the Lord should deliver Jerusalem out of mine hand?'),
            plain(21, 'But they held their peace, and answered him not a word: for the king&apos;s commandment was, Say not a word unto him.'),
            plain(22, 'Then came Eliakim, the son of Hilkiah, that was over the house, and Shebna the scribe, and Joah, the son of Asaph, the recorder, to Hezekiah with their clothes rent, and told him the words of the Rabshakeh.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah36-rabshakeh',
          html:
            'The Rabshakeh is the voice of the enemy. He stands outside the walls and speaks with confidence and pride. He claims to have conquered all nations. He challenges Hezekiah&apos;s trust in God. He mocks the God of Israel by demanding: "Hath any of the gods of the nations delivered his land out of the hand of the king of Assyria?" His logic seems unassailable: all gods have fallen before Assyria, so why should the God of Israel be different?',
        },
        {
          kind: 'hebrew',
          id: 'isaiah36-bitachon',
          title: 'Bitachon — "Confidence" (Trust, Reliance)',
          script: 'בִּטָחוֹן',
          translit: '<strong>Bitachon</strong> · confidence, trust, reliance; the placing of one&apos;s trust in another',
          description:
            'The Rabshakeh begins by mocking Hezekiah&apos;s confidence (bitachon). "What confidence is this wherein thou trustest?" He is asking: on what or whom are you relying? The question is designed to expose doubt. But bitachon, in the biblical sense, is not blind optimism. It is trust based on knowledge of the character of God.',
        },
        {
          kind: 'commentary',
          id: 'isaiah36-silence',
          html:
            'What is remarkable is the response. Hezekiah commands the people not to answer the Rabshakeh. Not a word. Silence in the face of taunting. Refusal to engage with the logic of fear. This is extraordinary restraint. The people grieve—they tear their clothes—but they do not respond. They trust that their king will handle this, that God will handle this, and that their silence witnesses to their faith.',
        },
        {
          kind: 'christ',
          id: 'isaiah36-christ-mockery',
          title: 'Christ Connection — Silence Before the Accuser',
          html:
            'Christ faced mockery and accusations in His trial and crucifixion. Before the council, He was silent. Before Pilate, He spoke, but not to defend Himself from the charges. This silence was not weakness. It was strength—the strength of one who trusts His Father absolutely, who does not need to defend Himself because He knows His vindication will come from God alone. The silence of faith is louder than the shouting of pride.',
        },
        {
          kind: 'carry',
          html:
            'Every believer faces the voice of the enemy—the voice that mocks faith, that questions God&apos;s ability to help, that appeals to fear and pride. The Rabshakeh represents this voice: logical, compelling, confident in its own power, seemingly unanswerable. The answer is not to engage in debate. The answer is silence. The answer is to refuse to let the enemy&apos;s words drown out trust in God&apos;s character and power.',
        },
        {
          kind: 'reflection',
          id: 'isaiah36-silence-2',
          prompt: 'What voice of the enemy do you find yourself arguing with? What would it look like for you to respond with Hezekiah&apos;s silence—not ignoring the threat, but refusing to let it shake your trust in God?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'But they held their peace, and answered him not a word: for the king&apos;s commandment was, Say not a word unto him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 36 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-isaiah-36',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 36',
      url: 'https://www.sefaria.org/Isaiah.36',
      description: 'Sefaria open-access source text and translations for Isaiah 36.',
    },
    {
      id: 'british-museum-sennacherib-prism',
      kind: 'archaeology',
      source: 'British Museum',
      label: 'Sennacherib&apos;s Prism',
      url: 'https://www.britishmuseum.org/',
      description: 'Cuneiform inscription of Sennacherib&apos;s siege of Jerusalem — Isaiah&apos;s historical backdrop.',
    },
    {
      id: 'iaa-hezekiah-tunnel-bulla',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Hezekiah&apos;s Tunnel & Bulla',
      url: 'https://www.antiquities.org.il/',
      description: 'Archaeological artifacts from Hezekiah&apos;s reign — tunnel and bullae bearing royal seals.',
    },
  ],

  hasHebrew: true,
};
