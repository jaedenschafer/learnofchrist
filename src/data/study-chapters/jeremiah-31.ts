import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 31 — The New Covenant
 *
 * "I have loved thee with an everlasting love." In the shadow of exile,
 * when Jerusalem lies broken and the people are scattered, God speaks a
 * word that reaches beyond judgment to restoration. Rachel weeping for her
 * children is turned toward hope. And in the center of this prophecy stands
 * the promise of a new covenant—not written on tablets of stone, but on the
 * human heart itself.
 */
export const JEREMIAH_31: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 31,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 6 },
  intros: [
    'Jeremiah 31 is the voice of mercy breaking through judgment. The prophet has spent chapters announcing the collapse of Judah, the exile of the people, the destruction of the Temple. But now God turns the prophet&apos;s gaze toward restoration. "I have loved thee with an everlasting love," God says to Israel. This is not a new love kindled after judgment has purged the people. This is the same love that upheld Israel through the wilderness, the love that chose Abraham and promised David a throne. That love has never ceased, even in exile.',
    'The new covenant Jeremiah announces is revolutionary. The old covenant was written on stone, carried in the ark, visible, external. The new covenant will be written on hearts, internalized, making the need for external law obsolete. "They shall all know me, from the least of them unto the greatest of them." This is a covenant of restoration not through legal observance alone, but through the transformation of human desire itself.',
  ],

  sections: [
    {
      ref: 'Jeremiah 31:1–9',
      title: 'Everlasting Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            plain(3, 'The Lord hath appeared of old unto me, saying, Yea, I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee.'),
            plain(4, 'Again I will build thee, and thou shalt be built, O virgin of Israel: thou shalt again be adorned with thy tabrets, and shalt go forth in the dances of them that make merry.'),
            plain(7, 'For thus saith the Lord; Sing with gladness for Jacob, and shout for the chief of the nations: publish ye, praise ye, and say, O Lord, save thy people, the remnant of Israel.'),
            plain(9, 'They shall come with weeping, and with supplications will I lead them: I will cause them to walk by the rivers of waters in a straight way wherein they shall not stumble: for I am a father to Israel, and Ephraim is my firstborn.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer31-everlasting',
          html:
            'God speaks to Israel not as a judge who has grown weary, but as a lover whose affection has never wavered. "I have loved thee with an everlasting love"—not for a season, not while you were obedient, but always. This is the foundation upon which restoration is built. The exile is not the end. It is a chapter in a much longer love story. The phrase "with lovingkindness have I drawn thee" echoes the wilderness journey—God drawing Israel out of Egypt, sustaining them in the desert, leading them to the land. That same drawing power reaches into exile and calls them home.',
        },
        {
          kind: 'hebrew',
          id: 'jer31-olam',
          title: 'Olam — "Everlasting" (eternal)',
          script: 'עוֹלָם',
          translit: '<strong>Olam</strong> · forever; eternity; the eternal age',
          description:
            'The Hebrew word olam refers not to a measurable duration but to the age beyond human measurement. It means "forever," "eternal," the continuous present that stretches backward and forward beyond human comprehension. When God says He has loved Israel with an olam love, He is saying His love is not bound by time, not subject to change with circumstance. It is the eternal expression of His nature.',
        },
        {
          kind: 'commentary',
          id: 'jer31-build',
          html:
            'God promises not merely to forgive, but to rebuild. "Again I will build thee, and thou shalt be built." This is restoration beyond mere return from exile. It is reconstruction of identity, of joy, of the dances and celebrations that mark a people at home with themselves and their God. The virgin of Israel will be adorned again—not with the forced beauty of captivity, but with the ornaments of freedom and joy.',
        },
        {
          kind: 'christ',
          id: 'jer31-christ-covenant',
          title: 'Christ Connection — The Mediator of the Covenant',
          html:
            'Jesus declared over the bread and wine, "This is my blood of the new covenant." In Him, the promise Jeremiah announced is fulfilled. He is the one who walks between God and humanity, the mediator whose own flesh becomes the place where heaven and earth meet. The covenant is written not on tablets or even in hearts, but in the body of Christ—given for us, shed for the remission of sins. Through His death and resurrection, God&apos;s everlasting love is not merely announced. It is embodied.',
        },
        {
          kind: 'carry',
          html:
            'God calls us out of exile today—the exile of shame, of broken identity, of separation from our true home. His love is not contingent on our worthiness or our obedience. It is everlasting. He draws us with lovingkindness, not with judgment. And like Israel, we are called to rise, to be rebuilt, to put on the garments of joy and to dance.',
        },
        {
          kind: 'reflection',
          id: 'jer31-everlasting-love',
          prompt: 'When you read "I have loved thee with an everlasting love," how does that shift your understanding of judgment and restoration? What would it look like to truly believe in God&apos;s everlasting love for you?',
        },
      ],
    },

    {
      ref: 'Jeremiah 31:31–34',
      title: 'The New Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            plain(31, 'Behold, the days come, saith the Lord, that I will make a new covenant with the house of Israel, and with the house of Judah:'),
            plain(32, 'Not according to the covenant that I made with their fathers in the day that I took them by the hand to bring them out of the land of Egypt; which my covenant they brake, although I was an husband unto them, saith the Lord:'),
            plain(33, 'But this shall be the covenant that I will make with the house of Israel; After those days, saith the Lord, I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people.'),
            plain(34, 'And they shall teach no more every man his neighbour, and every man his brother, saying, Know the Lord: for they shall all know me, from the least of them unto the greatest of them, saith the Lord: for I will forgive their iniquity, and I will remember their sin no more.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer31-new-covenant',
          html:
            'Here is the great turning point in Israel&apos;s history. The old covenant was written on stone and given at Sinai. It was external, visible, audible—words spoken from a mountain to a people who trembled. But the people broke it. They could not keep a law written outside themselves. So God promises a covenant written inside. The law will be internalized, written not on tablets but on the human heart itself. This is not the abolition of the law, but its transformation from external command to internal reality.',
        },
        {
          kind: 'commentary',
          id: 'jer31-know-lord',
          html:
            'The sign of the new covenant is universal knowledge of God. "They shall all know me, from the least of them unto the greatest of them." No longer will instruction be necessary from priest or teacher, because the knowledge of God will be immediate and direct. This does not mean human teachers become obsolete, but that the deepest knowledge of God—the knowledge that comes from relationship, not mere information—will be accessible to all. The barrier between the initiated and the uninitiated, the scholar and the common person, falls away.',
        },
        {
          kind: 'christ',
          id: 'jer31-christ-law-heart',
          title: 'Christ Connection — The Spirit Writes the Law',
          html:
            'Paul quotes this very passage when he speaks of the Spirit&apos;s work: "Not in tables of stone, but in fleshy tables of the heart." In Christ, the Spirit is given to believers, and through the Spirit, God&apos;s law is internalized. The Spirit produces love, which is the fulfilling of the law. We are not merely commanded to love God and neighbor. The Spirit transforms our desires so that love becomes not a burden but the overflow of a restored heart.',
        },
        {
          kind: 'carry',
          html:
            'The new covenant offers release from the tyranny of external obligation. You are not following a God whose requirements are imposed from without. Through Christ, God places His desires within you. Your heart is transformed so that what you want to do aligns with what God calls you to do. The deepest freedom is not freedom from law, but freedom from the alienation between your will and God&apos;s will.',
        },
        {
          kind: 'reflection',
          id: 'jer31-law-in-heart',
          prompt: 'What does it mean that God would write His law on your heart rather than only on a book? How is that different from external rules? What practices help internalize God&apos;s will so it becomes your own desire?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee. Again I will build thee, and thou shalt be built, O virgin of Israel.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 31 · Study Guide',
  },

  hasHebrew: true,
};
