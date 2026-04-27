import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Malachi 1 — God&apos;s Love Disputed
 */
export const MALACHI_1: RichChapterContent = {
  bookSlug: 'malachi',
  bookName: 'Malachi',
  chapter: 1,

  intros: [
    'Malachi, the final book of the Old Testament, opens with God declaring His love for Israel. But Israel questions it, asking, "Wherein hast thou loved us?" The prophet must remind them of God&apos;s covenant faithfulness. The chapter then turns to condemn the priests for offering defiled sacrifices—blind, sick, and lame animals—despising God&apos;s name. Yet even as judgment falls, a promise emerges: "From the rising of the sun even unto the going down of the same my name shall be great among the Gentiles."',
  ],

  sections: [
    {
      ref: 'Malachi 1:1–5',
      title: 'God&apos;s Love and Jacob&apos;s Choice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The burden of the word of the Lord to Israel by Malachi.'),
            plain(2, 'I have loved you, saith the Lord. Yet ye say, Wherein hast thou loved us? Was not Esau Jacob&apos;s brother? saith the Lord: yet I loved Jacob,'),
            plain(3, 'And I hated Esau, and laid his mountains and his heritage waste for the dragons of the wilderness.'),
            plain(4, 'Whereas Edom saith, We are impoverished, but we will return and build the desolate places; thus saith the Lord of hosts, They shall build, but I will throw down; and they shall call them, The border of wickedness, and, The people against whom the Lord hath indignation for ever.'),
            plain(5, 'And your eyes shall see, and ye shall say, The Lord will be magnified from the border of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'malachi1-love',
          html: 'God begins by declaring His love for Israel. But Israel questions it—"Wherein hast thou loved us?" In response, God points to the covenant made with Jacob over Esau. God chose Jacob and his descendants; He did not choose Esau and the Edomites. This is God&apos;s covenant love—not based on merit but on His sovereign choice. Even when Edom tries to rebuild what was destroyed, God will tear it down. Israel will see God&apos;s love demonstrated in His judgment on their enemies.',
        },
        {
          kind: 'hebrew',
          id: 'malachi1-ahav',
          title: 'Ahav — "Love"',
          script: 'אהב',
          translit: '<strong>Ahav</strong> · to love; to choose; to commit to',
          description: 'God&apos;s love for Israel is not sentimental emotion but covenant commitment. He has chosen Israel, bound Himself to them, and will fulfill His promises.',
        },
        {
          kind: 'christ',
          id: 'malachi1-christ-love',
          title: 'Christ Connection — God&apos;s Love Demonstrated',
          html: 'God&apos;s love for Israel prefigures God&apos;s love for all believers through Christ. "God so loved the world, that he gave his only begotten Son." Like God&apos;s choice of Jacob, our salvation is not based on our merit but on God&apos;s sovereign love and choice.',
        },
        {
          kind: 'carry',
          html: 'When you question God&apos;s love—when life is hard and faith seems distant—remember that God&apos;s love is not dependent on your feelings or circumstances. It is written into the covenant. God has chosen you. That choice is irrevocable.',
        },
        {
          kind: 'reflection',
          id: 'malachi1-reflect-love',
          prompt: 'In what ways have you questioned God&apos;s love? What evidence of His love could you point to, even when you don&apos;t feel it?',
        },
      ],
    },

    {
      ref: 'Malachi 1:6–14',
      title: 'Profaned Offerings and a Name Great Among Nations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(6, 'A son honoureth his father, and a servant his master: if then I be a father, where is mine honour? and if I be a master, where is my fear? saith the Lord of hosts unto you, O priests, that despise my name. And ye say, Wherein have we despised thy name?'),
            plain(7, 'Ye offer polluted bread upon mine altar; and ye say, Wherein have we polluted thee? In that ye say, The table of the Lord is contemptible.'),
            plain(8, 'And if ye offer the blind for sacrifice, is it not evil? and if ye offer the sick and the lame, is it not evil? offer it now unto thy governor; will he be pleased with thee, or accept thy person? saith the Lord of hosts.'),
            plain(11, 'For from the rising of the sun even unto the going down of the same my name shall be great among the Gentiles; and in every place incense shall be offered unto my name, and a pure offering: for my name shall be great among the heathen, saith the Lord of hosts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'malachi1-despise',
          html: 'God rebukes the priests for despising His name through their defiled sacrifices. They offer blind, sick, and lame animals—animals of no value—yet they would never dare offer such to an earthly governor. The priests are insulting God by offering Him the refuse. Yet God does not leave the prophecy in condemnation. He moves to a promise: His name will be great among all nations. Pure offerings will be made everywhere, and His name will be exalted.',
        },
        {
          kind: 'commentary',
          id: 'malachi1-pure',
          html: 'The pure offering made in every place is the grain offering of the Gentiles—their worship and devotion. This is a prophecy of the spread of God&apos;s kingdom beyond Israel to all nations. Where Israel has despised God&apos;s name through careless worship, the nations will honor it through sincere devotion.',
        },
        {
          kind: 'hebrew',
          id: 'malachi1-shem',
          title: 'Shem — "Name"',
          script: 'שם',
          translit: '<strong>Shem</strong> · name; reputation; authority',
          description: 'God&apos;s name is His reputation and authority. To despise His name is to diminish His honor. To magnify His name is to exalt His honor among all people.',
        },
        {
          kind: 'christ',
          id: 'malachi1-christ-nations',
          title: 'Christ Connection — Christ for All Nations',
          html: 'Christ fulfills this prophecy. His gospel is preached to all nations. The pure offering of Gentile worship—their faith, their devotion, their lives poured out in service—is offered to God through Christ. Where the priests failed, Christ succeeds: His offering is perfect and makes others perfect.',
        },
        {
          kind: 'carry',
          html: 'God asks for your authentic worship, not your leftovers. He asks for the best of who you are, not what remains after you have served yourself. And know that your worship, joined with believers around the world, magnifies God&apos;s name among all the earth.',
        },
        {
          kind: 'reflection',
          id: 'malachi1-reflect-worship',
          prompt: 'What are you offering God—your best or your leftovers? How might your worship change if you truly believed it magnified God&apos;s name among the nations?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'From the rising of the sun even unto the going down of the same my name shall be great among the Gentiles.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Malachi 1 · Study Guide',
  },

  hasHebrew: true,
};
