import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 55 — The Call to Come: Living Water and the Word
 *
 * "Ho, every one that thirsteth, come ye to the waters." The prophet opens
 * with an invitation to all who are thirsty, all who hunger. Come, buy wine and
 * milk without money. Listen and your soul shall live. "Seek ye the Lord while
 * he may be found." God\'s word will not return void; it will accomplish its
 * purpose. This is the great call to covenant faith.
 */
export const ISAIAH_55: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 55,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'Isaiah 55 is an invitation to fullness. After the promise of redemption and the wedding of Zion, the prophet opens the gates to all who hunger and thirst. Come to the waters without cost. Drink and live. Why spend money on that which satisfies not? Why labor for that which does not nourish? Instead, incline your ear to God and your soul shall live. God\'s word is powerful. It will not return void. It will accomplish what God purposes. And while the Lord may be found—while this invitation stands open—seek Him. Let the wicked forsake his way; let him return to the Lord.',
  ],

  sections: [
    {
      ref: 'Isaiah 55:1–7',
      title: 'The Invitation to Come',
      blocks: [
        {
          kind: 'scripture',
          chapter: 55,
          lines: [
            plain(1, 'Ho, every one that thirsteth, come ye to the waters; and he that hath no money; come ye, buy, and eat; yea, come, buy wine and milk without money and without price.'),
            plain(2, 'Wherefore do ye spend money for that which is not bread? and your labour for that which satisfieth not? hearken diligently unto me, and eat ye that which is good, and let your soul delight itself in fatness.'),
            plain(3, 'Incline your ear, and come unto me: hear, and your soul shall live; and I will make an everlasting covenant with you, even the sure mercies of David.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-word-returns',
          html:
            '<p>My word goes out; it will not return empty. It accomplishes what I please and succeeds in the purpose I sent it.</p>',
        },
        {
          kind: 'scripture',
          chapter: 55,
          lines: [
            plain(4, 'Behold, I have given him for a witness to the people, a leader and commander to the people.'),
            plain(5, 'Behold, thou shalt call a nation that thou knowest not; and nations that knew not thee shall run unto thee because of the Lord thy God, and for the Holy One of Israel; for he hath glorified thee.'),
            plain(6, 'Seek ye the Lord while he may be found, call ye upon him while he is near:'),
            plain(7, 'Let the wicked forsake his way, and the unrighteous man his thoughts: and let him return unto the Lord, and he will have mercy upon him; and to our God, for he will abundantly pardon.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa55-thirsty',
          html:
            'The chapter opens with a call to the thirsty. Not to the satisfied, not to the wealthy, but to those who hunger and thirst. These are invited to come without money, without cost. The waters are free. The wine and milk are without price. This is grace: the gift freely given.',
        },
        {
          kind: 'commentary',
          id: 'isa55-bread',
          html:
            'Why spend money on that which is not bread? Why labor for that which does not satisfy? This is a critique of the human tendency to seek satisfaction in emptiness. We exhaust ourselves pursuing things that do not nourish. Instead, incline your ear to God. Listen to His voice. Your soul will live. You will delight in fatness—in abundance, in satisfaction that truly feeds.',
        },
        {
          kind: 'commentary',
          id: 'isa55-covenant',
          html:
            'God makes an everlasting covenant, giving the sure mercies promised to David. The Servant who has been described is given as a witness, a leader, a commander to the peoples. Through His death and resurrection, His witness reaches all nations. Those who do not know will call upon Him, run unto Him, because God has glorified Him.',
        },
        {
          kind: 'hebrew',
          id: 'isa55-damah',
          title: 'Damah — "Like"',
          script: 'דָּמָה',
          translit: '<strong>Damah</strong> · to be like; to liken; to compare',
          description:
            'The thirst spoken of is not merely physical. It is the thirst of the human soul for meaning, for satisfaction, for connection to the divine. The waters Isaiah speaks of address the deepest thirst.',
        },
        {
          kind: 'christ',
          id: 'isa55-christ-water',
          title: 'Christ Connection — The Living Water',
          html:
            'In John 4, Jesus tells the Samaritan woman: "Whosoever drinketh of the water that I shall give him shall never thirst; but the water that I shall give him shall be in him a well of water springing up into everlasting life" (John 4:14). Jesus is the water of which Isaiah speaks. He is the Source of life. And in John 7:37–38, Jesus stands in the temple and cries: "If any man thirst, let him come unto me, and drink...out of his belly shall flow rivers of living water."',
        },
        {
          kind: 'carry',
          html:
            'We spend our resources chasing things that do not nourish. Money on empty pursuits, time on meaningless labor, energy on that which leaves us hollow. Isaiah invites us to stop. To come. To drink from the waters that truly satisfy. This invitation is not for the righteous alone, but for all—including the wicked, the unrighteous. Come, return, and God will abundantly pardon.',
        },
        {
          kind: 'reflection',
          id: 'isa55-thirst',
          prompt: 'What are the things you spend your resources on that do not truly satisfy? What would it mean to seek the water that truly quenches your spiritual thirst?',
        },
      ],
    },

    {
      ref: 'Isaiah 55:8–13',
      title: 'The Power of God\'s Word',
      blocks: [
        {
          kind: 'scripture',
          chapter: 55,
          lines: [
            plain(8, 'For my thoughts are not your thoughts, neither are your ways my ways, saith the Lord.'),
            plain(9, 'For as the heavens are higher than the earth, so are my ways higher than your ways, and my thoughts than your thoughts.'),
            plain(10, 'For as the rain cometh down, and the snow from heaven, and returneth not thither, but watereth the earth, and maketh it bring forth and bud, that it may give seed to the sower, and bread to the eater;'),
            plain(11, 'So shall my word be that goeth forth out of my mouth: it shall not return unto me void, but it shall accomplish that which I please, and it shall prosper in the thing whereto I sent it.'),
            plain(12, 'For ye shall go out with joy, and be led forth with peace: the mountains and the hills shall break forth before you into singing, and all the trees of the field shall clap their hands.'),
            plain(13, 'Instead of the thorn shall come up the fir tree, and instead of the brier shall come up the myrtle tree: and it shall be to the Lord for a name, an everlasting sign that shall not be cut off.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa55-thoughts',
          html:
            'God\'s thoughts are not our thoughts. His ways are higher than our ways. We judge by appearance, by earthly standards of power and success. God judges by eternal truth. We would have written the Servant\'s story differently—not with suffering, not with rejection. But God\'s purpose was redemption, and it required the cross.',
        },
        {
          kind: 'commentary',
          id: 'isa55-word',
          html:
            'As rain falls on earth and causes it to bud and produce seed and bread, so God\'s word goes forth and accomplishes its purpose. It will not return void. This is not poetry; it is divine guarantee. Whatever God\'s word is sent to accomplish, it will accomplish. It will prosper in the thing for which He sent it.',
        },
        {
          kind: 'commentary',
          id: 'isa55-joy',
          html:
            'Those who receive this word shall go out with joy and be led forth with peace. The mountains and hills break forth into singing. The trees clap their hands. This is cosmic celebration. And the curse is reversed: instead of thorns, fir trees. Instead of briars, myrtle trees. This is the new creation promised, where the curse is lifted and all things are made new.',
        },
        {
          kind: 'carry',
          html:
            'The power of God\'s word is absolute. It does not depend on our understanding, our approval, or our cooperation. It accomplishes what it is sent to accomplish. In a world where we feel powerless, where circumstances seem beyond our control, God\'s word stands immovable. What God has said will come to pass.',
        },
        {
          kind: 'reflection',
          id: 'isa55-word-2',
          prompt: 'How does it change your faith to know that God\'s word will not return void—that it will accomplish what He purposes? What word from Scripture might God be speaking to you that will accomplish His purposes in your life?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Ho, every one that thirsteth, come ye to the waters...my word...shall not return unto me void.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 55 · Study Guide',
  },
};
