import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 6 — You Shall Know That I Am the Lord
 *
 * Against the mountains of Israel, God declares judgment. The high places where
 * Israel has offered false worship will be desecrated. The idols will be broken.
 * And in the midst of destruction, a refrain emerges: "Ye shall know that I am
 * the Lord." Through judgment, through the stripping away of all false gods, the
 * people will come to know the true God.
 */
export const EZEKIEL_6: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 6,

  estimatedMinutes: { 5: 2, 10: 3, 15: 4 },
  intros: [
    'Ezekiel&apos;s oracles grow more forceful. Now he addresses the mountains of Israel themselves, as though the land itself can hear. The mountains are the high places, the sites of forbidden worship. On these mountains, Israel has constructed altars to false gods, offered incense to idols, forgot the God of covenant. The judgment is thorough: the high places will be torn down, the idols shattered, the slain will fall. And yet this destruction is not pointless cruelty. It is redemptive. Through the breaking of false worship comes the true knowledge of God. The refrain that echoes through Ezekiel — "Ye shall know that I am the Lord" — reveals the deepest purpose of all judgment. It is not revenge but revelation.',
  ],

  sections: [
    {
      ref: 'Ezekiel 6:1–7',
      title: 'Mountains Desecrated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'And the word of the Lord came unto me, saying,'),
            plain(2, 'Son of man, set thy face toward the mountains of Israel, and prophesy against them,'),
            plain(3, 'And say, Ye mountains of Israel, hear the word of the Lord God; Thus saith the Lord God to the mountains, and to the hills, to the rivers, and to the valleys; Behold, I, even I, will bring a sword upon you, and I will destroy your high places.'),
            plain(4, 'And your altars shall be desolate, and your images shall be broken: and I will cast down your slain men before your idols.'),
            plain(5, 'And I will lay the dead carcases of the children of Israel before their idols; and I will scatter your bones round about your altars.'),
            plain(6, 'In all your dwellingplaces the cities shall be laid waste, and the high places shall be desolate; that your altars may be laid waste and made desolate, and your idols may be broken and cease, and your images may be cut down, and your works may be abolished.'),
            plain(7, 'And the slain shall fall in the midst of you, and ye shall know that I am the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk6-false-altars',
          html:
            'The high places of Israel were not mere political structures. They represented a fundamental turning away from the covenant God. On these mountains, Israel has sought out false gods, worshiped images, offered incense to demons. The judgment God announces is thorough: the altars will be desolate, the images broken, the idols destroyed. What Israel has built will be unmade. And yet the purpose is clarification. When all the false gods are proven powerless, when all the altars lie in ruins, when death surrounds the broken idols — then Israel will know that the God who brought this judgment is the God who alone is real.',
        },
        {
          kind: 'hebrew',
          id: 'ezk6-bamot',
          title: 'Bamot — "High Places"',
          script: 'בָּמוֹת',
          translit: '<strong>Bamot</strong> · high places; elevated sites of worship (often idolatrous)',
          description:
            'In Israel&apos;s history, the bamot became increasingly associated with idolatrous worship, even as they were also sometimes used for worship of the true God. By Ezekiel&apos;s time, they represent a fundamental compromise — a mingling of Israel&apos;s covenant faith with the fertility religions of the surrounding nations.',
        },
        {
          kind: 'carry',
          html:
            'We too construct high places — elevated places where we meet our false gods. We may not call them altars or fashion them as idols, but they exist wherever we place our ultimate trust: in success, in comfort, in the approval of others, in our own power. The judgment of God works to tear down these high places, not out of cruelty but out of love, that we might know Him truly.',
        },
        {
          kind: 'reflection',
          id: 'ezk6-false-gods',
          prompt: 'What high places have you built? Where do you seek comfort, approval, or meaning outside of God? How would you respond if God began dismantling these structures in your life?',
        },
      ],
    },

    {
      ref: 'Ezekiel 6:8–10',
      title: 'A Remnant Preserved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(8, 'Yet will I leave a remnant, that ye may have some that shall escape the sword among the nations, when ye shall be scattered through the countries.'),
            plain(9, 'And they that escape of you shall remember me among the nations whither they shall be carried captives, because I am broken with their whorish heart, which hath departed from me, and with their eyes, which go a whoring after their idols: and they shall lothe themselves for the evils which they have committed in all their abominations.'),
            plain(10, 'And they shall know that I am the Lord, and that I have not said in vain that I would do this evil unto them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk6-remnant-memory',
          html:
            'Even in judgment, God preserves a remnant. Some will escape the sword. And these survivors, scattered among the nations, will carry something precious: the memory of God. In the midst of exile, stripped of temple and land, they will remember. And in remembering, they will loathe themselves for the idolatry that brought them to this place. This is not condemnation but redemption. The knowledge that comes through judgment is the knowledge of their own sin and of God&apos;s unwavering reality.',
        },
        {
          kind: 'christ',
          id: 'ezk6-christ-heart-turned',
          title: 'Christ Connection — The Heart Turned Back',
          html:
            'Christ comes to those scattered and broken by judgment, and He calls them home. He comes not to destroy the remnant but to gather it, to transform the heart of stone into a heart of flesh. The scattering Ezekiel announces will lead, through centuries, to a people prepared to receive their Messiah. The judgment itself becomes the path to redemption.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s judgment is always aimed at restoration. He breaks what must be broken so that something true can be built. When we find ourselves broken by circumstances, stripped of false supports, led into a kind of exile from the life we expected — in that very place, God meets us. And we learn to know Him not as a distant theory but as the God who has pursued us through loss.',
        },
        {
          kind: 'reflection',
          id: 'ezk6-broken-remember',
          prompt: 'In what ways has God "broken" you — broken your pride, your security, your false hopes? In those broken places, what have you come to know about Him that you could not have learned otherwise?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: '"Ye shall know that I am the Lord." — Ezekiel 6:7',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 6 · Study Guide',
  },

  hasHebrew: true,
};
