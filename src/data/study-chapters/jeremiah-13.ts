import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 13 — The Marred Girdle
 *
 * Jeremiah performs a symbolic action: he buys a linen girdle (belt), wears it
 * so that it becomes corrupted and marred, then removes it and declares that
 * Israel has become like the marred girdle—the glory that was meant to cleave
 * unto God has become corrupted and worthless. No longer good for its purpose.
 * The passage "Can the Ethiopian change his skin, or the leopard his spots?
 * then may ye also do good, that are accustomed to do evil" speaks to the
 * impossibility of human transformation—only Christ can change a nature
 * corrupted by sin.
 */
export const JEREMIAH_13: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 13,

  estimatedMinutes: { 5: 2, 10: 4, 15: 5 },
  intros: [
    'Jeremiah 13 opens with God commanding the prophet to perform a symbolic action. He is to buy a linen girdle, wear it for a period of time, and then remove it and hide it by the river so that it becomes corrupted. When the time comes, he is to return and find that it has been marred—it is no good for its purpose anymore. Jeremiah then declares the meaning: "After the manner shall I mar the pride of Judah, and the great pride of Jerusalem." Israel, meant to be God&apos;s glory—the girdle that adorns Him—has become corrupted through pride and disobedience.',
    'Later in the chapter, Jeremiah addresses the question of whether human nature can be transformed: "Can the Ethiopian change his skin, or the leopard his spots? then may ye also do good, that are accustomed to do evil." The implication is clear: no. A person accustomed to evil cannot simply choose to do good any more than an Ethiopian can bleach their skin or a leopard lose their spots. Transformation is impossible through human effort alone. Yet Christ offers what is humanly impossible—a new nature, a changed heart, a life redeemed.',
  ],

  sections: [
    {
      ref: 'Jeremiah 13:1–14',
      title: 'The Marred Girdle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'Thus saith the Lord unto me, Go and get thee a linen girdle, and put it upon thy loins, and put it not in water.'),
            plain(2, 'So I got a girdle according to the word of the Lord, and put it on my loins.'),
            plain(3, 'And the word of the Lord came unto me the second time, saying,'),
            plain(4, 'Take the girdle that thou hast got, which is upon thy loins, and arise, go to Euphrates, and hide it there in a hole of the rock.'),
            plain(5, 'So I went, and hid it by Euphrates, as the Lord commanded me.'),
            plain(6, 'And it came to pass after many days, that the Lord said unto me, Arise, go to Euphrates, and take the girdle from thence, which I commanded thee to hide there.'),
            plain(7, 'Then I went to Euphrates, and digged, and took the girdle from the place where I had hid it: and, behold, the girdle was marred, it was profitable for nothing.'),
            plain(8, 'Then the word of the Lord came unto me, saying,'),
            plain(9, 'After this manner will I mar the pride of Judah, and the great pride of Jerusalem.'),
            plain(10, 'This evil people, which refuse to hear my words, which walk in the imagination of their own heart, and walk after other gods, to serve them, and to worship them, shall even be as this girdle, which is profitable for nothing.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer13-mar',
          html: 'The symbol is clear: Judah, meant to be the glory and ornament of God—the girdle that adorns Him—has become marred through sin and corruption. A girdle that is marred and corrupted is profitable for nothing. It can no longer serve its purpose. So too has Judah, through pride and disobedience, become worthless for the purpose for which God set them apart.',
        },
        {
          kind: 'hebrew',
          id: 'jer13-shachar',
          title: 'Shachar — "Marred" (Spoiled, Corrupted)',
          script: 'שָׁחַר',
          translit: '<strong>Shachar</strong> · to spoil; to corrupt; to render useless',
          description: 'The Hebrew word shachar means to spoil or corrupt something, to render it unfit for its purpose. This is what has happened to Israel through their rebellion. They have been spoiled, corrupted, rendered unfit.',
        },
        {
          kind: 'commentary',
          id: 'jer13-pride',
          html: 'The core issue is identified: "The pride of Judah, and the great pride of Jerusalem." Pride is the root of the corruption. The people have become arrogant, trusting in themselves rather than in God. They have exalted themselves rather than humbling themselves before the Lord. And this pride has corrupted them utterly.',
        },
        {
          kind: 'christ',
          id: 'jer13-christ-redemption',
          title: 'Christ Connection — Redemption of What Is Corrupted',
          html: 'Christ came to redeem what has been corrupted by sin. In 2 Corinthians 5:17, Paul writes, "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new." What is marred and corrupted through sin is remade, redeemed, restored through the work of Christ. The corrupted heart becomes a new heart. The corrupted life becomes a redeemed life.',
        },
        {
          kind: 'carry',
          html: 'The symbol of the marred girdle speaks to each of us. We are meant to be God&apos;s glory, His ornament in the world. Yet through our own choices, through pride and disobedience, we become marred and corrupted. We become unsuitable for God&apos;s purpose. Yet the good news is that what is marred can be made new. What is corrupted can be redeemed.',
        },
        {
          kind: 'reflection',
          id: 'jer13-pride-mar',
          prompt: 'In what ways have you been marred through your own pride and corruption? What would it look like to be remade and restored?',
        },
      ],
    },

    {
      ref: 'Jeremiah 13:15–27',
      title: 'The Impossibility of Change',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(15, 'Hear ye, and give ear; be not proud: for the Lord hath spoken.'),
            plain(20, 'Lift up your eyes, and behold them that come from the north: where is the flock that was given thee, thy beautiful flock?'),
            plain(22, 'And if thou say in thine heart, Wherefore come these things upon me? For the greatness of thine iniquity are thy skirts discovered, and thy heels made bare.'),
            plain(23, 'Can the Ethiopian change his skin, or the leopard his spots? then may ye also do good, that are accustomed to do evil.'),
            plain(24, 'Therefore will I scatter them as the stubble that passeth away by the wind of the wilderness.'),
            plain(25, 'This is thy lot, the portion of thy measures from me, saith the Lord; because thou hast forgotten me, and trusted in falsehood.'),
            plain(26, 'Therefore will I discover thy skirts over thy face, that thy shame may appear.'),
            plain(27, 'I have seen thine adulteries, and thy neighings, the lewdness of thy whoredom, and thine abominations on the hills in the fields. Woe unto thee, O Jerusalem! wilt thou not be made clean? when shall it once be?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer13-leopard',
          html: 'The question is rhetorical: "Can the Ethiopian change his skin, or the leopard his spots?" The answer is no. A person who is accustomed to evil cannot simply choose to do good any more than an Ethiopian can change the color of their skin or a leopard can remove its spots. The implication is that Israel is so thoroughly corrupted that they cannot change themselves. They are incapable of turning back.',
        },
        {
          kind: 'commentary',
          id: 'jer13-shame',
          html: 'The judgment is described in terms of shame. The skirts will be discovered, the heels made bare. This is the language of humiliation and exposure. What has been hidden will be revealed. The adulteries, the wickedness, the abominations—all will be exposed for what they are.',
        },
        {
          kind: 'commentary',
          id: 'jer13-clean',
          html: 'The chapter ends with a question: "Wilt thou not be made clean? when shall it once be?" There is the faintest echo of hope in this question—the possibility that Jerusalem might be made clean. Yet the people refuse. They continue in their accustomed ways.',
        },
        {
          kind: 'carry',
          html: 'The impossibility of self-transformation speaks a truth that modern culture resists: you cannot by willpower alone change a corrupted nature. You cannot clean yourself by trying harder. Yet the question "Wilt thou not be made clean?" suggests that transformation is possible—not through human effort but through encountering the one who can truly cleanse.',
        },
        {
          kind: 'reflection',
          id: 'jer13-clean-self',
          prompt: 'Where are you trying to change yourself through willpower alone? What would it mean to surrender that effort and ask God to make you clean?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Can the Ethiopian change his skin, or the leopard his spots? then may ye also do good, that are accustomed to do evil.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 13 · Study Guide',
  },

  hasHebrew: true,
};
