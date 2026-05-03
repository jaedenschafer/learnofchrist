import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 1 — The Call of a Prophet
 *
 * "Before I formed thee in the belly I knew thee; and before thou camest forth
 * out of the womb I sanctified thee, and I ordained thee a prophet unto the
 * nations." God speaks to a young man, Jeremiah, in the most intimate way —
 * telling him that his life was known, his purpose was set, before he drew his
 * first breath. Jeremiah's response is fear: "Ah, Lord God! behold, I cannot
 * speak: for I am a child." Yet God draws near with reassurance: "Say not,
 * I am a child: for thou shalt go to all that I shall send thee... I am with
 * thee to deliver thee." The chapter opens with visions — an almond rod and a
 * boiling pot — signs that God is watching over His word to perform it.
 */
export const JEREMIAH_1: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 1,

  estimatedMinutes: { beginner: 3, intermediate: 6, deep: 8 },
  intros: [
    'The book of Jeremiah opens not with narrative but with autobiography. God speaks directly to the man He has chosen, and speaks to him of eternity. "Before I formed thee in the belly I knew thee." This is not knowledge of a future event—a mother becoming pregnant with a particular child. This is knowledge that transcends time itself. It is the knowledge of the eternal. In this moment, a young man learns that his life was not accidental, not circumstantial, not the product of human ambition alone. It was known. It was named. It was ordained.',
    'What follows is the work God has called Jeremiah to do: "A prophet unto the nations." Not a comfortable calling. Not an easy one. To be a prophet is to speak God&apos;s word in a world that does not want to hear it. Jeremiah will spend his life proclaiming judgment, calling Israel to repentance, facing rejection and anger. Yet the chapter ends not with doom but with protection: "I am with thee to deliver thee." God does not call Jeremiah alone. The God who knew him before the world was will walk with him through every trial.',
  ],

  sections: [
    {
      ref: 'Jeremiah 1:1–10',
      title: 'Known Before the Beginning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The words of Jeremiah the son of Hilkiah, of the priests that were in Anathoth in the land of Benjamin:'),
            plain(2, 'To whom the word of the Lord came in the days of Josiah the son of Amon king of Judah, in the thirteenth year of his reign.'),
            plain(3, 'It came also in the days of Jehoiakim the son of Josiah king of Judah, unto the end of the eleventh year of Zedekiah the son of Josiah king of Judah, unto the carrying away of Jerusalem captive in the fifth month.'),
            plain(4, 'Then the word of the Lord came unto me, saying,'),
            plain(5, 'Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee, and I ordained thee a prophet unto the nations.'),
            plain(6, 'Then said I, Ah, Lord God! behold, I cannot speak: for I am a child.'),
            plain(7, 'But the Lord said unto me, Say not, I am a child: for thou shalt go to all that I shall send thee, and whatsoever I command thee thou shalt speak.'),
            plain(8, 'Be not afraid of their faces: for I am with thee to deliver thee, saith the Lord.'),
            plain(9, 'Then the Lord put forth his hand, and touched my mouth. And the Lord said unto me, Behold, I have put my words in thy mouth.'),
            plain(10, 'See, I have this day set thee over the nations and over the kingdoms, to root out, and to pull down, and to destroy, and to throw down, to build, and to plant.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer1-before-formed',
          html: 'God speaks of knowledge that precedes creation itself. This is not foreknowledge in the sense of seeing ahead what will happen. This is intimate, personal, eternal knowledge. The God who exists outside time has always known Jeremiah. Long before his mother conceived him, long before his father named him, God knew him by name and called him by name. This knowledge is the foundation of everything that follows—all of God&apos;s purpose for Jeremiah&apos;s life rests on this prior knowledge.',
        },
        {
          kind: 'commentary',
          id: 'jer1-sanctified',
          html: 'To sanctify means to set apart for holy purpose. God did not wait for Jeremiah to grow, to prove himself, to earn his calling. Before he was born, God had set him apart. This is a declaration that Jeremiah&apos;s life belongs to God from the beginning, that his purpose was established before his existence, and that nothing—no failure, no rejection, no trial—can undo what God has done in setting him apart.',
        },
        {
          kind: 'hebrew',
          id: 'jer1-yada',
          title: 'Yada — "Knew" (Intimate Knowledge)',
          script: 'יָדַע',
          translit: '<strong>Yada</strong> · to know; to be acquainted with; to know intimately',
          description: 'The Hebrew word yada is not mere intellectual knowledge. It is the knowledge of intimate relationship. It is used of Adam knowing Eve, of God knowing His people. To say God "yada" Jeremiah before the foundation of the world is to describe a relationship of intimacy that stands at the very center of creation itself.',
        },
        {
          kind: 'commentary',
          id: 'jer1-afraid',
          html: 'Jeremiah&apos;s first response to his calling is fear. "I cannot speak: for I am a child." This is not humility masking pride; it is genuine terror. He will face the kings of Judah, the priests of the temple, the false prophets who tell lies to the people. His message will be rejected. His life will be hard. And his first instinct is to say no, to claim insufficiency. God&apos;s answer does not deny the difficulty. It does not promise comfort. Instead it promises presence: "I am with thee to deliver thee."',
        },
        {
          kind: 'christ',
          id: 'jer1-christ-known',
          title: 'Christ Connection — Known Before the Foundation',
          html: 'In Revelation 13:8, John writes of "the Lamb slain from the foundation of the world." Christ, too, was known before time—not merely foreknown, but chosen and ordained before the creation of anything. The God who says to Jeremiah "I knew you before you were formed in the womb" is the God who knew Christ in eternity. Every prophet called to speak God&apos;s word in a resistant world walks a path Christ walked. Every one stands under the protection of the God who knows His own and will never abandon them.',
        },
        {
          kind: 'carry',
          html: 'The calling of Jeremiah begins with a profound truth: your life is known. Not by accident, not by chance, but known. The God who exists outside time has always known you. This knowledge does not guarantee comfort or ease. Jeremiah faces rejection and suffering. But it does guarantee that your life has purpose, that you are not a cosmic accident, and that the God who knows you will never abandon you. What would change in your life if you truly believed that God knows you before the foundation of the world?',
        },
        {
          kind: 'reflection',
          id: 'jer1-what-known',
          prompt: 'When you feel afraid or inadequate for the work in front of you, what would it mean to believe that God knew you before you were formed in the womb? How could that knowledge anchor you in the midst of doubt?',
        },
      ],
    },

    {
      ref: 'Jeremiah 1:11–19',
      title: 'A Watching God and a Boiling Pot',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(11, 'Moreover the word of the Lord came unto me, saying, Jeremiah, what seest thou? And I said, I see a rod of an almond tree.'),
            plain(12, 'Then said the Lord unto me, Thou hast well seen: for I will hasten my word to perform it.'),
            plain(13, 'And the word of the Lord came unto me the second time, saying, What seest thou? And I said, I see a seething pot; and the face thereof is toward the north.'),
            plain(14, 'Then the Lord said unto me, Out of the north an evil shall break forth upon all the inhabitants of the land.'),
            plain(15, 'For, lo, I will call all the families of the kingdoms of the north, saith the Lord; and they shall come, and they shall set every one his throne at the entering of the gates of Jerusalem, and against all the walls thereof round about, and against all the cities of Judah.'),
            plain(16, 'And I will utter my judgments against them touching all their wickedness, who have forsaken me, and have burned incense unto other gods, and worshipped the works of their own hands.'),
            plain(17, 'Thou therefore gird up thy loins, and arise, and speak unto them all that I command thee: be not dismayed at their faces, lest I confound thee before them.'),
            plain(18, 'For, behold, I have made thee this day a defenced city, and an iron pillar, and brasen walls against the whole land, against the kings of Judah, against the princes thereof, against the priests thereof, and against the people of the land.'),
            plain(19, 'And they shall fight against thee; but they shall not prevail against thee; for I am with thee, saith the Lord, to deliver thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer1-almond',
          html: 'God shows Jeremiah an almond rod—the Hebrew word is "shaked," which means "hastening" or "watching." The almond tree is the first tree to bloom in spring, and its name contains the idea of watching, of vigilance. God&apos;s message is clear: "I am watching over my word to perform it." This is a God who does not speak idly. Every word that goes out from His mouth will accomplish what He intends. The almond rod is a sign of God&apos;s faithfulness.',
        },
        {
          kind: 'hebrew',
          id: 'jer1-shaked',
          title: 'Shaked — "Almond Rod" (Watching)',
          script: 'שָׁקֵד',
          translit: '<strong>Shaked</strong> · almond tree; also: watching, hastening',
          description: 'The Hebrew word for almond tree is shaked, which also means "to watch" or "to hasten." The play on words is deliberate: God shows Jeremiah an almond tree—a symbol of watchfulness—and says, "I am watching over my word to perform it." God is not passive. He is vigilant. He will bring His word to fulfillment.',
        },
        {
          kind: 'commentary',
          id: 'jer1-seething',
          html: 'The second vision is darker. A seething pot boils over, facing toward the north. The pot overflows; judgment pours out. From the north will come the Babylonian army, the instrument of God&apos;s judgment against Judah. Yet this is not a vision of random chaos. It is a vision that shows Jeremiah that what he will proclaim—judgment, exile, the consequences of forsaking God—is not his own fabrication. It is the word of the God who shows him in advance what will come to pass.',
        },
        {
          kind: 'commentary',
          id: 'jer1-defenced',
          html: 'God then makes a promise that stands in stark contrast to what Jeremiah will face. The people will fight against him. The kings, princes, priests, and people of the land will resist his message. Yet God says, "I have made thee this day a defenced city, and an iron pillar, and brasen walls." Jeremiah will not be destroyed. He will be hard, unbending, capable of withstanding the assault. This is not victory in the sense of getting his way. This is endurance in the face of opposition.',
        },
        {
          kind: 'christ',
          id: 'jer1-christ-defenced',
          title: 'Christ Connection — The Foundation That Stands',
          html: 'Christ, too, was made a strong foundation. In Matthew 16:18, Jesus says to Peter, "Upon this rock I will build my church; and the gates of hell shall not prevail against it." The image is the same: immovable, unshakeable, a foundation that cannot be destroyed. Jeremiah will speak truth in a world of lies, and he will be upheld. Christ came to speak truth to a world that did not want to hear it, and He too was upheld through the Father. His resurrection is the ultimate vindication of a word that could not be destroyed.',
        },
        {
          kind: 'carry',
          html: 'God calls you not to comfortable obscurity but to faithful witness. The visions of the almond rod and the seething pot show that God is watching over His word, and that the consequences of turning from Him are real. But they also show that those who speak God&apos;s word are protected not by avoiding opposition, but by being made strong to endure it. What does it mean to be a "defenced city" in your own sphere—at work, in your family, in your relationships? How might God be asking you to stand firm?',
        },
        {
          kind: 'reflection',
          id: 'jer1-where-stand',
          prompt: 'Where do you feel pressure to compromise or stay silent about what you believe? How could you cultivate the kind of inner strength that allows you to speak truth even when it is not welcome?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee, and I ordained thee a prophet unto the nations.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 1 · Study Guide',
  },

  hasHebrew: true,
};
