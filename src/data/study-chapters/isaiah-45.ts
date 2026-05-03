import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 45 — Every Knee Shall Bow
 *
 * "I am the Lord, and there is none else...Look unto me, and be ye saved,
 * all the ends of the earth: for I am God, and there is none else. I have
 * sworn by myself, the word is gone out of my mouth in righteousness, and
 * shall not return, That unto me every knee shall bow, every tongue shall
 * swear." The promise of universal submission to God. Not through conquest,
 * but through the recognition that God alone is God. Every knee will bow.
 * Every tongue will confess. This is Paul&apos;s portrait of Christ in Philippians
 * 2:10–11.
 */
export const ISAIAH_45: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 45,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Isaiah 45 escalates the claim about God&apos;s uniqueness and power. Not only is there no other God, but ultimately every knee will bow to this God. Every tongue will swear to Him. This is not coercion. This is the inevitable recognition of truth. All the ends of the earth will look to God and be saved. The salvation is not limited to Israel. It is universal. All nations will come to know that God alone is God. This chapter sets the stage for the New Testament picture of Christ—the one before whom every knee will bow and every tongue will confess.',
  ],

  sections: [
    {
      ref: 'Isaiah 45:1–25',
      title: 'The Only God; Every Knee Shall Bow',
      blocks: [
        {
          kind: 'scripture',
          chapter: 45,
          lines: [
            plain(1, 'Thus saith the Lord to his anointed, to Cyrus, whose right hand I have holden, to subdue nations before him; and I will loose the loins of kings, to open before him the two leaved gates; and the gates shall not be shut;'),
            plain(2, 'I will go before thee, and make the crooked places straight: I will break in pieces the gates of brass, and cut in sunder the bars of iron:'),
            plain(3, 'And I will give thee the treasures of darkness, and hidden riches of secret places, that thou mayest know that I, the Lord, which call thee by thy name, am the God of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-righteousness-rises',
          html:
            '<p>The heavens rain down; the earth opens with salvation. Righteousness rises; the Lord does both.[res:sefaria-isaiah-45]</p>',
        },
        {
          kind: 'scripture',
          chapter: 45,
          lines: [
            plain(4, 'For Jacob my servant&apos;s sake, and Israel mine elect, I have even called thee by thy name: I have surnamed thee, though thou hast not known me.'),
            plain(5, 'I am the Lord, and there is none else, there is no God beside me: I girded thee, though thou hast not known me;'),
            plain(6, 'That they may know from the rising of the sun, and from the west, that there is none beside me. I am the Lord, and there is none else.'),
            plain(7, 'I form the light, and create darkness: I make peace, and create evil: I the Lord do all these things.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah45-cyrus-addressed',
          html:
            'God addresses Cyrus directly: "I have holden thy right hand...I will go before thee." All of this—the opening of gates, the breaking of brass and iron—serves a larger purpose: "That they may know from the rising of the sun, and from the west, that there is none beside me." God uses history to reveal God&apos;s uniqueness.[res:intertextual-isaiah-servant-nt]',
        },
        {
          kind: 'scripture',
          chapter: 45,
          lines: [
            plain(8, 'Drop down, ye heavens, from above, and let the skies pour down righteousness: let the earth open, and let them bring forth salvation, and let righteousness spring up together; I the Lord have created it.'),
            plain(9, 'Woe unto him that striveth with his Maker! Let the potsherd strive with the potsherds of the earth. Shall the clay say to him that fashioneth it, What makest thou? or thy work, He hath no hands?'),
            plain(10, 'Woe unto him that saith unto his father, What begettest thou? or to the woman, What hast thou brought forth?'),
            plain(11, 'Thus saith the Lord, the Holy One of Israel, and his Maker, Ask me of things to come concerning my sons, and concerning the work of my hands command ye me.'),
            plain(12, 'I have made the earth, and created man upon it: I, even my hands, have stretched out the heavens, and all their host have I commanded.'),
            plain(13, 'I have raised him up in righteousness, and I will direct all his ways: he shall build my city, and he shall let go my captives, not for price nor reward, saith the Lord of hosts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah45-woe-clay',
          html:
            'God speaks to any creature who would argue with the Creator: "Woe unto him that striveth with his Maker!" This is not harshness. This is the natural order—the clay cannot instruct the potter. But look at what follows: God invites Israel to ask, to command, to bring concerns. The Creator is not distant. The Creator is intimately engaged with the created[res:sefaria-isaiah-45-v1].',
        },
        {
          kind: 'scripture',
          chapter: 45,
          lines: [
            plain(14, 'Thus saith the Lord, The labour of Egypt, and merchandise of Ethiopia and of the Sabeans, men of stature, shall come over unto thee, and they shall be thine: they shall come after thee; in chains they shall come over, and they shall fall down unto thee, they shall make a supplication unto thee, saying, Surely God is in thee; and there is none else, there is no God.'),
            plain(15, 'Verily thou art a God that hidest thyself, O God of Israel, the Saviour.'),
            plain(16, 'They shall be ashamed, and also confounded, all of them: they shall go to confusion together that are makers of idols.'),
            plain(17, 'But Israel shall be saved in the Lord with an everlasting salvation: ye shall not be ashamed nor confounded world without end.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah45-gentiles-confession',
          html:
            'A stunning picture emerges: the riches of Egypt and Ethiopia flow to Israel, and those who brought them confess: "Surely God is in thee; and there is none else, there is no God." Even Gentiles will come to know the God of Israel. While God hides God&apos;s face from idolaters, God saves Israel with an everlasting salvation.',
        },
        {
          kind: 'scripture',
          chapter: 45,
          lines: [
            plain(18, 'For thus saith the Lord that created the heavens; God himself that formed the earth and made it; he hath established it, he created it not in vain, he formed it to be inhabited: I am the Lord; and there is none else.'),
            plain(19, 'I have not spoken in secret, in a dark place of the earth: I said not unto the seed of Jacob, Seek ye me in vain: I the Lord speak righteousness, I declare things that are right.'),
            plain(20, 'Assemble yourselves and come; draw near together, ye that are escaped of the nations: they have no knowledge that set up the wood of their graven image, and pray unto a god that cannot save.'),
            plain(21, 'Tell ye, and bring them near; yea, let them take counsel together: who hath declared this from ancient time? who hath told it from that time? have not I the Lord? and there is no God else beside me; a just God and a Saviour; there is none beside me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-righteousness-rises-2',
          html:
            '<p>There is no God apart from Me. Turn to Me and be saved, all you ends of the earth.</p>',
        },
        {
          kind: 'scripture',
          chapter: 45,
          lines: [
            plain(22, 'Look unto me, and be ye saved, all the ends of the earth: for I am God, and there is none else.'),
            plain(23, 'I have sworn by myself, the word is gone out of my mouth in righteousness, and shall not return, That unto me every knee shall bow, every tongue shall swear.'),
            plain(24, 'Surely, shall one say, in the Lord have I righteousness and strength: even to him shall men come; and all that are incensed against him shall be ashamed.'),
            plain(25, 'In the Lord shall all the seed of Israel be justified, and shall glory.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah45-salvation-universal',
          html:
            'The chapter opens with God&apos;s commissioning of Cyrus. God will go before him, break gates, give him treasures. But all of this serves a larger purpose: "That they may know from the rising of the sun, and from the west, that there is none beside me." The purpose of history is the revelation of God&apos;s sovereignty. All the great movements of nations, all the rise and fall of empires—all of this serves to demonstrate that there is one God.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah45-tzedaka',
          title: 'Tzedaka — "Righteousness" (Justice, Vindication)',
          script: 'צְדָקָה',
          translit: '<strong>Tzedaka</strong> · righteousness, justice, vindication; right action aligned with God&apos;s character',
          description:
            'God says: "Drop down, ye heavens...let the earth open, and let them bring forth salvation, and let righteousness spring up together." Righteousness and salvation are linked. When God acts justly, salvation flows. Justice and redemption are not opposed. They are one work.',
        },
        {
          kind: 'commentary',
          id: 'isaiah45-potter',
          html:
            'God says: "Woe unto him that striveth with his Maker!" This echoes the parable of the potter and the clay. The clay does not have the right to argue with the potter. The creature does not have the right to contend with the Creator. This is not tyranny. This is the natural order: the Creator knows what the creature needs. The Creator&apos;s purposes are wise.',
        },
        {
          kind: 'commentary',
          id: 'isaiah45-knees-bow',
          html:
            'Then comes the climax: "I have sworn by myself...That unto me every knee shall bow, every tongue shall swear." This is not a prophecy of oppression. This is a prophecy of the ultimate recognition of truth. Every knee will bow—not in shame, but in acknowledgment. Every tongue will swear—not in fear, but in confession. This is the end of all human resistance to God. This is the final state: all creation acknowledging the one true God.',
        },
        {
          kind: 'christ',
          id: 'isaiah45-christ-every-knee',
          title: 'Christ Connection — Every Knee Shall Bow',
          html:
            'In Philippians 2:9–11, Paul applies this passage to Christ: "God hath highly exalted him, and given him a name which is above every name: That at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the earth; And that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father." Christ is the one to whom all creation will bow. This is the ultimate submission—not forced, but the recognition that Christ is Lord, that He is the revelation of God.',
        },
        {
          kind: 'carry',
          html:
            'The promise of this chapter challenges the reader to consider: will you bow now, willingly, in faith? Or will you resist until the end, when bowing becomes inevitable? The invitation is to look to God now: "Look unto me, and be ye saved, all the ends of the earth." The choice to acknowledge God&apos;s sovereignty, to submit to God&apos;s will, to confess God&apos;s lordship—this choice can be made now, in faith, or later, in defeat.',
        },
        {
          kind: 'reflection',
          id: 'isaiah45-bow-confess',
          prompt: 'What parts of your life are you still resisting God&apos;s sovereignty in? What would it look like to bow your knee to God willingly, in faith, now? How does it affect you to contemplate the end when every knee will bow?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am the Lord, and there is none else...Look unto me, and be ye saved...That unto me every knee shall bow, every tongue shall swear.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 45 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-isaiah-45',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 45',
      url: 'https://www.sefaria.org/Isaiah.45',
      description: 'Sefaria open-access source text and translations for Isaiah 45.',
    },
    {
      id: 'intertextual-isaiah-servant-nt',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Isaiah Servant Song ↔ NT Fulfillment',
      url: 'https://intertextual.bible/',
      description: 'Servant songs (esp. Isaiah 53) and New Testament fulfillment in Christ.',
    },
    {
      id: 'sefaria-isaiah-45-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 45 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Isaiah.45',
      description: 'The Hebrew text of Isaiah 45 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
